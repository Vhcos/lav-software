/**
 * Doctor — escaneo de Runtime Logs tras un deployment de Vercel.
 *
 *   npm run doctor:logs                 # último deployment del target
 *   npm run doctor:logs -- <url|id>     # un deployment exacto
 *
 * Espera que el deployment quede READY, hace smoke de los endpoints declarados
 * y revisa los Runtime Logs buscando errores y HTTP 5xx. `Ready` de Vercel no
 * equivale a validación funcional: este control existe para que un despliegue
 * solo se declare bueno con evidencia de runtime.
 *
 * Requiere VERCEL_TOKEN como secreto del ambiente; nunca en el repositorio.
 * Resuelve proyecto y equipo desde .vercel/project.json.
 *
 * ── Adapta este bloque al proyecto. ──
 */
const CONFIG = {
  /** Sitio estático: basta con que la portada responda 200. */
  smoke: {
    "/": () => true,
  },
};

import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const API_BASE = "https://api.vercel.com";
const READY_TIMEOUT_MS = Number(process.env.POST_DEPLOY_READY_TIMEOUT_MS ?? 10 * 60_000);
const WAIT_AFTER_READY_MS = Number(process.env.POST_DEPLOY_WAIT_SECONDS ?? 60) * 1_000;
const LOG_SCAN_MS = Number(process.env.POST_DEPLOY_LOG_SCAN_SECONDS ?? 30) * 1_000;
const TARGET = normalizarTarget(process.env.POST_DEPLOY_TARGET ?? "production");

function fail(message, code = 1) {
  console.error(`[doctor:logs] ${message}`);
  process.exitCode = code;
}

async function readProjectConfig() {
  try {
    return JSON.parse(await readFile(".vercel/project.json", "utf8"));
  } catch {
    return {};
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Conserva ambientes propios como `qa`; solo lo vacío cae a preview. */
export function normalizarTarget(target) {
  const valor = String(target ?? "preview").toLowerCase();
  return valor === "null" || valor === "undefined" || valor === "" ? "preview" : valor;
}

function normalizeDeploymentState(deployment) {
  return deployment?.readyState ?? deployment?.state ?? "UNKNOWN";
}

function deploymentCreatedAt(deployment) {
  const value = deployment?.createdAt ?? deployment?.created;
  return typeof value === "number" ? value : 0;
}

function eventTimestamp(event) {
  const value = event?.timestamp ?? event?.created ?? event?.createdAt;
  if (typeof value !== "number") return 0;
  return value < 10_000_000_000 ? value * 1_000 : value;
}

function eventStatusCode(event) {
  const value = event?.statusCode ?? event?.status ?? event?.proxy?.statusCode ?? event?.request?.statusCode;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function isRuntimeError(event) {
  const level = String(event?.level ?? event?.severity ?? "").toLowerCase();
  const statusCode = eventStatusCode(event);
  return level === "error" || level === "fatal" || (statusCode != null && statusCode >= 500);
}

function extraerEventoEstructurado(event) {
  const contenido = event?.text ?? event?.message ?? event?.payload?.text ?? event?.payload?.message;
  if (typeof contenido !== "string" || !contenido.trim().startsWith("{")) return null;
  try {
    const parsed = JSON.parse(contenido);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

/** Solo campos operacionales permitidos; jamás vuelca el evento o mensaje crudo. */
export function resumirErrorRuntime(event) {
  const estructurado = extraerEventoEstructurado(event);
  const statusCode = eventStatusCode(event);
  return {
    nivel: String(event?.level ?? event?.severity ?? "desconocido").slice(0, 20),
    ...(statusCode == null ? {} : { statusCode }),
    ...(typeof estructurado?.code === "string" ? { code: estructurado.code.slice(0, 80) } : {}),
    ...(typeof estructurado?.route === "string" ? { route: estructurado.route.slice(0, 120) } : {}),
    ...(typeof estructurado?.requestId === "string" ? { requestId: estructurado.requestId.slice(0, 120) } : {}),
  };
}

/** El SHA llega como githubCommitSha en despliegues Git y gitCommitSha desde CLI. */
export function shaDelDeployment(deployment) {
  return deployment?.meta?.githubCommitSha ?? deployment?.meta?.gitCommitSha ?? null;
}

export function refDelDeployment(deployment) {
  return deployment?.meta?.githubCommitRef ?? deployment?.meta?.gitCommitRef ?? null;
}

/** Falla cerrado si la API resolvió otro proyecto, commit, rama o ambiente. */
export function validarDeploymentExacto(deployment, esperado) {
  if (!deployment || typeof deployment !== "object") throw new Error("La API no devolvió un deployment válido.");
  if (esperado.projectId && deployment.projectId && deployment.projectId !== esperado.projectId) {
    throw new Error("El deployment resuelto pertenece a otro proyecto.");
  }
  if (deployment?.meta?.gitDirty === "1") {
    throw new Error("El deployment se construyó con cambios sin commitear; no es trazable a un SHA.");
  }
  const comprobaciones = [
    ["SHA", esperado.sha, shaDelDeployment(deployment)],
    ["ref", esperado.ref, refDelDeployment(deployment)],
    ["target", esperado.target, normalizarTarget(deployment.target)],
  ];
  for (const [nombre, valorEsperado, valorReal] of comprobaciones) {
    if (valorEsperado && valorReal !== valorEsperado) {
      throw new Error(`El ${nombre} del deployment no coincide con el esperado.`);
    }
  }
}

function headersConBypass() {
  const secreto = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  return secreto ? { "x-vercel-protection-bypass": secreto } : {};
}

async function smokeEndpoints(baseUrl, esperado) {
  const resultados = [];
  for (const [ruta, validar] of Object.entries(CONFIG.smoke)) {
    try {
      const respuesta = await fetch(`https://${baseUrl}${ruta}`, {
        signal: AbortSignal.timeout(10_000),
        headers: headersConBypass(),
        redirect: "manual",
      });
      if (respuesta.status >= 300 && respuesta.status < 400) {
        resultados.push({ ruta, status: respuesta.status, ok: false });
        continue;
      }
      const cuerpo = await respuesta.json().catch(() => null);
      resultados.push({ ruta, status: respuesta.status, ok: respuesta.ok && validar(cuerpo, esperado) });
    } catch {
      resultados.push({ ruta, status: null, ok: false });
    }
  }
  return resultados;
}

async function main() {
  const token = process.env.VERCEL_TOKEN;
  if (!token) {
    fail("Falta VERCEL_TOKEN. Configúralo como secreto local o de CI; nunca lo escribas en el repositorio.", 2);
    return;
  }

  const projectConfig = await readProjectConfig();
  const projectId = process.env.VERCEL_PROJECT_ID ?? projectConfig.projectId;
  const teamId = process.env.VERCEL_TEAM_ID ?? projectConfig.orgId;
  const requestedDeployment = process.argv[2]?.trim();
  const esperado = {
    projectId,
    sha: process.env.POST_DEPLOY_EXPECTED_SHA,
    ref: process.env.POST_DEPLOY_EXPECTED_REF,
    ambiente: process.env.POST_DEPLOY_EXPECTED_AMBIENTE,
    target: process.env.POST_DEPLOY_EXPECTED_TARGET ? normalizarTarget(process.env.POST_DEPLOY_EXPECTED_TARGET) : TARGET,
  };

  if (!projectId || !teamId) {
    fail("No fue posible resolver projectId/teamId desde variables de entorno o .vercel/project.json.", 2);
    return;
  }

  const headers = { Authorization: `Bearer ${token}` };
  const teamQuery = `teamId=${encodeURIComponent(teamId)}`;

  async function getJson(path) {
    const response = await fetch(API_BASE + path, { headers });
    if (!response.ok) throw new Error(`Vercel API respondió HTTP ${response.status}.`);
    return response.json();
  }

  async function resolveDeployment() {
    if (requestedDeployment) {
      const reference = requestedDeployment.replace(/^https?:\/\//, "").replace(/\/$/, "");
      try {
        return await getJson(`/v13/deployments/${encodeURIComponent(reference)}?${teamQuery}`);
      } catch {
        throw new Error("No se encontró el deployment exacto solicitado.");
      }
    }
    const data = await getJson(
      `/v6/deployments?projectId=${encodeURIComponent(projectId)}&target=${encodeURIComponent(TARGET)}&limit=20&${teamQuery}`,
    );
    const deployment = (Array.isArray(data.deployments) ? data.deployments : []).find(
      (item) => normalizeDeploymentState(item) !== "CANCELED",
    );
    if (!deployment) throw new Error(`No se encontró un deployment reciente para target=${TARGET}.`);
    return deployment;
  }

  let deployment = await resolveDeployment();
  validarDeploymentExacto(deployment, esperado);
  const readyDeadline = Date.now() + READY_TIMEOUT_MS;

  while (normalizeDeploymentState(deployment) === "BUILDING" && Date.now() < readyDeadline) {
    console.log(`[doctor:logs] Deployment ${deployment.id} aún en BUILDING; reintento en 10 s.`);
    await sleep(10_000);
    deployment = await getJson(`/v13/deployments/${encodeURIComponent(deployment.id)}?${teamQuery}`);
    validarDeploymentExacto(deployment, esperado);
  }

  const state = normalizeDeploymentState(deployment);
  if (state !== "READY") throw new Error(`Deployment ${deployment.id} terminó en estado ${state}.`);
  console.log(
    `[doctor:logs] READY: ${deployment.id} · https://${deployment.url} · target=${normalizarTarget(deployment.target)} · sha=${shaDelDeployment(deployment)?.slice(0, 12) ?? "desconocido"}`,
  );

  if (WAIT_AFTER_READY_MS > 0) {
    console.log(`[doctor:logs] Esperando ${Math.round(WAIT_AFTER_READY_MS / 1_000)} s antes del escaneo.`);
    await sleep(WAIT_AFTER_READY_MS);
  }

  const smoke = await smokeEndpoints(deployment.url, esperado);
  smoke.forEach((resultado) => {
    console.log(`[doctor:logs] ${resultado.ruta} -> ${resultado.status ?? "sin respuesta"} ${resultado.ok ? "OK" : "FALLO"}`);
  });
  const smokeFallido = smoke.filter((resultado) => !resultado.ok);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LOG_SCAN_MS);
  const events = [];
  let buffer = "";
  const appendPayload = (payload) => {
    if (Array.isArray(payload)) events.push(...payload);
    else if (payload && typeof payload === "object") events.push(payload);
  };
  const parseLine = (line) => {
    if (!line.trim()) return;
    try {
      appendPayload(JSON.parse(line));
    } catch {
      // NDJSON puede entregar una línea parcial; se conserva en buffer.
    }
  };

  try {
    const response = await fetch(`${API_BASE}/v3/deployments/${encodeURIComponent(deployment.id)}/events?${teamQuery}`, {
      headers,
      signal: controller.signal,
    });
    if (!response.ok || !response.body) throw new Error(`No fue posible consultar runtime logs (HTTP ${response.status}).`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";
      lines.forEach(parseLine);
    }
  } catch (error) {
    if (error?.name !== "AbortError") throw error;
  } finally {
    clearTimeout(timeout);
  }
  parseLine(buffer);

  const createdAt = deploymentCreatedAt(deployment);
  const deploymentEvents = events.filter((event) => {
    const timestamp = eventTimestamp(event);
    return timestamp === 0 || createdAt === 0 || timestamp >= createdAt;
  });
  const errors = deploymentEvents.filter(isRuntimeError);
  const resumenesUnicos = Array.from(new Set(errors.map((event) => JSON.stringify(resumirErrorRuntime(event))))).slice(0, 5);

  if (errors.length > 0 || smokeFallido.length > 0) {
    if (errors.length > 0) {
      console.error(`[doctor:logs] Se detectaron ${errors.length} errores/HTTP 5xx en Runtime Logs.`);
      resumenesUnicos.forEach((resumen, index) => console.error(`[doctor:logs] ${index + 1}. ${resumen}`));
    }
    if (smokeFallido.length > 0) {
      console.error(`[doctor:logs] Smoke falló en: ${smokeFallido.map((resultado) => resultado.ruta).join(", ")}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(`[doctor:logs] OK: ${deploymentEvents.length} eventos revisados sin errores/5xx, smoke en verde.`);
}

const ejecutadoDirectamente = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (ejecutadoDirectamente) {
  main().catch((error) => fail(error instanceof Error ? error.message : "Fallo no identificado."));
}
