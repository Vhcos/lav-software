/**
 * Doctor — checkup externo de un despliegue.
 *
 *   npm run doctor                # revisa CONFIG.urlPorDefecto
 *   npm run doctor -- <url>       # revisa otra URL (QA, preview, local)
 *
 * Variables opcionales:
 *   DOCTOR_SHA        SHA esperado (completo o 12 caracteres).
 *   DOCTOR_AMBIENTE   ambiente esperado en el endpoint de salud.
 *   VERCEL_AUTOMATION_BYPASS_SECRET   para URLs con Deployment Protection.
 *
 * Solo lee. El único método no-GET es un POST sin firma a los webhooks
 * declarados, para comprobar que siguen rechazando.
 *
 * ── Adapta este bloque al proyecto; el resto del archivo no cambia. ──
 */
const CONFIG = {
  /** "privada" exige noindex; "publica" exige SEO completo. */
  modo: "publica",
  urlPorDefecto: "https://lav.software",
  /** Sitio comercial: no hay superficies tras sesión. */
  rutasPrivadas: [],
  webhooks: [],
  /** El sitio no expone endpoints de salud. */
  health: null,
  readyRuta: null,
};

import { pathToFileURL } from "node:url";

const TIMEOUT_MS = 15_000;

function hallazgo(id, nivel, ok, detalle) {
  return { id, nivel, ok, detalle };
}

export function normalizarCabeceras(headers) {
  const salida = {};
  if (!headers) return salida;
  const entradas = typeof headers.entries === "function" ? headers.entries() : Object.entries(headers);
  for (const [clave, valor] of entradas) salida[String(clave).toLowerCase()] = String(valor);
  return salida;
}

export function evaluarCabeceras(cabeceras) {
  const hallazgos = [];
  const csp = cabeceras["content-security-policy"];
  if (!csp) {
    hallazgos.push(hallazgo("csp", "error", false, "Falta Content-Security-Policy."));
  } else {
    const permisiva = csp.includes("'unsafe-eval'") || /default-src[^;]*\*/.test(csp);
    const sinMarco = !csp.includes("frame-ancestors");
    hallazgos.push(
      hallazgo(
        "csp",
        "error",
        !permisiva && !sinMarco,
        permisiva
          ? "La CSP admite 'unsafe-eval' o un origen comodín."
          : sinMarco
            ? "La CSP no declara frame-ancestors."
            : "CSP presente y cerrada.",
      ),
    );
  }

  const marco = cabeceras["x-frame-options"]?.toUpperCase();
  hallazgos.push(
    hallazgo("x-frame-options", "error", marco === "DENY" || marco === "SAMEORIGIN", marco ? `X-Frame-Options: ${marco}` : "Falta X-Frame-Options."),
  );

  const sniff = cabeceras["x-content-type-options"]?.toLowerCase();
  hallazgos.push(hallazgo("nosniff", "error", sniff === "nosniff", sniff ? `X-Content-Type-Options: ${sniff}` : "Falta X-Content-Type-Options."));

  const referrer = cabeceras["referrer-policy"];
  hallazgos.push(hallazgo("referrer-policy", "error", Boolean(referrer), referrer ? `Referrer-Policy: ${referrer}` : "Falta Referrer-Policy."));

  const permisos = cabeceras["permissions-policy"];
  hallazgos.push(hallazgo("permissions-policy", "aviso", Boolean(permisos), permisos ? "Permissions-Policy presente." : "Falta Permissions-Policy."));

  const hsts = cabeceras["strict-transport-security"] ?? "";
  const maxAge = Number(/max-age=(\d+)/.exec(hsts)?.[1] ?? 0);
  hallazgos.push(hallazgo("hsts", "error", maxAge >= 31_536_000, hsts ? `HSTS: ${hsts}` : "Falta Strict-Transport-Security."));
  hallazgos.push(
    hallazgo(
      "hsts-subdominios",
      "aviso",
      hsts.includes("includeSubDomains"),
      hsts.includes("includeSubDomains") ? "HSTS cubre subdominios." : "HSTS sin includeSubDomains; revisa el dominio en Vercel.",
    ),
  );

  hallazgos.push(
    hallazgo("x-powered-by", "aviso", !cabeceras["x-powered-by"], cabeceras["x-powered-by"] ? "La respuesta expone X-Powered-By." : "Sin X-Powered-By."),
  );

  return hallazgos;
}

function etiqueta(html, expresion) {
  return expresion.exec(html ?? "")?.[1]?.trim() ?? null;
}

/** Una app privada no se indexa nunca: meta robots, robots.txt y cabecera. */
export function evaluarIndexacionPrivada({ html, robotsStatus, robotsBody, xRobotsTag }) {
  const metaNoindex = /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html ?? "");
  const robotsCierra = robotsStatus === 200 && /disallow:\s*\/\s*$/im.test(robotsBody ?? "");
  return [
    hallazgo("meta-robots", "error", metaNoindex, metaNoindex ? "meta robots noindex presente." : "La página no declara noindex."),
    hallazgo("robots-txt", "error", robotsCierra, robotsCierra ? "robots.txt bloquea todo el sitio." : `robots.txt no bloquea la indexación (HTTP ${robotsStatus}).`),
    hallazgo("x-robots-tag", "aviso", /noindex/i.test(xRobotsTag ?? ""), xRobotsTag ? `X-Robots-Tag: ${xRobotsTag}` : "Sin X-Robots-Tag; el meta ya cubre el caso."),
  ];
}

/** Un sitio comercial debe ser indexable y estar completo para compartir. */
export function evaluarSeoPublico({ html, robotsStatus, robotsBody, sitemapStatus }) {
  const contenido = html ?? "";
  const noindex = /<meta[^>]+name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(contenido);
  const title = etiqueta(contenido, /<title>([^<]*)<\/title>/i);
  const descripcion = etiqueta(contenido, /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i);
  const canonical = etiqueta(contenido, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const h1 = contenido.match(/<h1[\s>]/gi)?.length ?? 0;
  const og = ["og:title", "og:description", "og:image"].filter((propiedad) =>
    new RegExp(`<meta[^>]+property=["']${propiedad}["'][^>]*content=["'][^"']+["']`, "i").test(contenido),
  );
  const robotsAbre = robotsStatus === 200 && !/disallow:\s*\/\s*$/im.test(robotsBody ?? "");

  return [
    hallazgo("indexable", "error", !noindex, noindex ? "La página declara noindex y no se indexará." : "La página es indexable."),
    hallazgo("robots-txt", "error", robotsAbre, robotsAbre ? "robots.txt permite la indexación." : `robots.txt ausente o bloquea todo (HTTP ${robotsStatus}).`),
    hallazgo("sitemap", "error", sitemapStatus === 200, `sitemap.xml respondió ${sitemapStatus}.`),
    hallazgo("title", "error", Boolean(title), title ? `title: ${title}` : "Falta <title>."),
    hallazgo("title-largo", "aviso", !title || title.length <= 60, title ? `title de ${title.length} caracteres.` : "Sin title que medir."),
    hallazgo("description", "error", Boolean(descripcion), descripcion ? "meta description presente." : "Falta meta description."),
    hallazgo("canonical", "error", Boolean(canonical), canonical ? `canonical: ${canonical}` : "Falta link canonical."),
    hallazgo("open-graph", "error", og.length === 3, `Open Graph presente: ${og.join(", ") || "ninguno"}.`),
    hallazgo("h1", "aviso", h1 === 1, `La página tiene ${h1} elementos h1.`),
  ];
}

export function evaluarRutaPrivada(ruta, status) {
  const cerrada = status === 401 || status === 403 || (status >= 300 && status < 400);
  return hallazgo(`ruta-privada:${ruta}`, "error", cerrada, `${ruta} respondió ${status}.`);
}

export function evaluarWebhook(ruta, { getStatus, postStatus }) {
  const rechaza = (status) => status === 401 || status === 403 || status === 503;
  return [
    hallazgo(`webhook-get:${ruta}`, "error", rechaza(getStatus), `GET respondió ${getStatus}.`),
    hallazgo(`webhook-post:${ruta}`, "error", rechaza(postStatus), `POST sin firma respondió ${postStatus}.`),
  ];
}

export function evaluarSalud(cuerpo, contrato, esperado = {}) {
  const estado = cuerpo?.[contrato.campoEstado];
  const base = contrato.campoBase ? cuerpo?.[contrato.campoBase] : null;
  const sha = cuerpo?.[contrato.campoSha];
  const hallazgos = [hallazgo("health", "error", estado === contrato.valorEstado, estado ? `${contrato.campoEstado}=${estado}` : "Sin respuesta de salud.")];

  if (contrato.campoBase) {
    hallazgos.push(hallazgo("base-declarada", "error", Boolean(base) && base !== "unconfigured", `${contrato.campoBase}=${base ?? "ausente"}`));
  }
  if (esperado.ambiente) {
    const ambiente = cuerpo?.[contrato.campoAmbiente];
    hallazgos.push(hallazgo("ambiente", "error", ambiente === esperado.ambiente, `${contrato.campoAmbiente}=${ambiente ?? "ausente"} (esperado ${esperado.ambiente})`));
  }
  const shaEsperado = esperado.sha?.slice(0, 12);
  if (shaEsperado) {
    hallazgos.push(hallazgo("sha", "error", sha === shaEsperado, `sha=${sha ?? "ausente"} (esperado ${shaEsperado})`));
  } else {
    hallazgos.push(hallazgo("sha", "aviso", Boolean(sha) && sha !== "sin-sha", `sha=${sha ?? "ausente"}`));
  }
  return hallazgos;
}

export function resumir(hallazgos) {
  const errores = hallazgos.filter((item) => !item.ok && item.nivel === "error");
  const avisos = hallazgos.filter((item) => !item.ok && item.nivel === "aviso");
  return { errores, avisos, total: hallazgos.length };
}

function cabecerasExtra() {
  const secreto = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  return secreto ? { "x-vercel-protection-bypass": secreto } : {};
}

async function pedir(url, init = {}) {
  return fetch(url, {
    redirect: "manual",
    signal: AbortSignal.timeout(TIMEOUT_MS),
    ...init,
    headers: { ...cabecerasExtra(), ...(init.headers ?? {}) },
  });
}

async function main() {
  const base = (process.argv[2] ?? process.env.DOCTOR_URL ?? CONFIG.urlPorDefecto).replace(/\/$/, "");
  const esperado = { sha: process.env.DOCTOR_SHA, ambiente: process.env.DOCTOR_AMBIENTE };
  console.log(`[doctor] Revisando ${base} en modo ${CONFIG.modo}`);

  const hallazgos = [];
  // La raíz puede redirigir (locale, onboarding); se sigue para analizar la
  // página real y sus cabeceras efectivas. Las rutas privadas sí se piden en
  // modo manual más abajo, porque ahí la redirección es la evidencia.
  const raiz = await pedir(`${base}/`, { redirect: "follow" });
  const cabeceras = normalizarCabeceras(raiz.headers);
  hallazgos.push(...evaluarCabeceras(cabeceras));

  if (base.startsWith("https://")) {
    const inseguro = await pedir(`${base.replace("https://", "http://")}/`).catch(() => null);
    const redirige = inseguro !== null && inseguro.status >= 300 && inseguro.status < 400;
    hallazgos.push(hallazgo("https", "error", redirige, redirige ? "HTTP redirige a HTTPS." : "HTTP no redirige a HTTPS."));
  }

  const html = await raiz.text().catch(() => "");
  const robots = await pedir(`${base}/robots.txt`, { redirect: "follow" }).then(async (r) => ({
    status: r.status,
    body: await r.text().catch(() => ""),
  }));

  if (CONFIG.modo === "publica") {
    const sitemap = await pedir(`${base}/sitemap.xml`, { redirect: "follow" });
    hallazgos.push(...evaluarSeoPublico({ html, robotsStatus: robots.status, robotsBody: robots.body, sitemapStatus: sitemap.status }));
  } else {
    hallazgos.push(...evaluarIndexacionPrivada({ html, robotsStatus: robots.status, robotsBody: robots.body, xRobotsTag: cabeceras["x-robots-tag"] }));
  }

  for (const ruta of CONFIG.rutasPrivadas) {
    const respuesta = await pedir(`${base}${ruta}`);
    hallazgos.push(evaluarRutaPrivada(ruta, respuesta.status));
  }

  for (const ruta of CONFIG.webhooks) {
    const [get, post] = await Promise.all([
      pedir(`${base}${ruta}`),
      pedir(`${base}${ruta}`, { method: "POST", headers: { "content-type": "application/json" }, body: "{}" }),
    ]);
    hallazgos.push(...evaluarWebhook(ruta, { getStatus: get.status, postStatus: post.status }));
  }

  if (CONFIG.health) {
    const cuerpo = await pedir(`${base}${CONFIG.health.ruta}`).then((r) => r.json().catch(() => null));
    hallazgos.push(...evaluarSalud(cuerpo, CONFIG.health, esperado));
  }
  if (CONFIG.readyRuta) {
    const listo = await pedir(`${base}${CONFIG.readyRuta}`);
    hallazgos.push(hallazgo("ready", "error", listo.status === 200, `${CONFIG.readyRuta} respondió ${listo.status}.`));
  }

  for (const item of hallazgos) {
    console.log(`[doctor] ${item.ok ? "ok  " : item.nivel === "error" ? "FALLA" : "aviso"} ${item.id}: ${item.detalle}`);
  }

  const { errores, avisos, total } = resumir(hallazgos);
  if (errores.length > 0) {
    console.error(`[doctor] ${errores.length} de ${total} controles fallaron: ${errores.map((item) => item.id).join(", ")}`);
    process.exitCode = 1;
    return;
  }
  console.log(`[doctor] OK: ${total} controles revisados, ${avisos.length} avisos.`);
}

const ejecutadoDirectamente = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (ejecutadoDirectamente) {
  main().catch((error) => {
    console.error(`[doctor] ${error instanceof Error ? error.message : "Fallo no identificado."}`);
    process.exitCode = 1;
  });
}
