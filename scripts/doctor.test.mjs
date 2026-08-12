import assert from "node:assert/strict";
import test from "node:test";
import { evaluarCabeceras, evaluarSeoPublico, normalizarCabeceras, resumir } from "./doctor.mjs";

const CABECERAS_COMPLETAS = {
  "content-security-policy": "default-src 'self'; frame-ancestors 'none'",
  "x-frame-options": "DENY",
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=()",
  "strict-transport-security": "max-age=63072000; includeSubDomains; preload",
};

const PAGINA_COMPLETA = `
  <title>LAV Systems | Software con IA</title>
  <meta name="description" content="Consultora chilena de software con IA."/>
  <link rel="canonical" href="https://lav.software/"/>
  <meta property="og:title" content="LAV Systems"/>
  <meta property="og:description" content="Software con IA."/>
  <meta property="og:image" content="https://lav.software/og.png"/>
  <h1>Software a medida</h1>
`;

const SEO_SANO = {
  html: PAGINA_COMPLETA,
  robotsStatus: 200,
  robotsBody: "User-Agent: *\nAllow: /\n",
  sitemapStatus: 200,
};

function fallos(hallazgos) {
  return hallazgos.filter((item) => !item.ok).map((item) => item.id);
}

test("normalizarCabeceras acepta Headers y objetos planos", () => {
  assert.deepEqual(normalizarCabeceras(new Headers({ "X-Frame-Options": "DENY" })), { "x-frame-options": "DENY" });
  assert.deepEqual(normalizarCabeceras(null), {});
});

test("un conjunto completo de cabeceras no produce hallazgos", () => {
  assert.deepEqual(fallos(evaluarCabeceras(CABECERAS_COMPLETAS)), []);
});

test("la ausencia de cabeceras de seguridad falla como error", () => {
  const errores = evaluarCabeceras({}).filter((item) => !item.ok && item.nivel === "error").map((item) => item.id);
  assert.deepEqual(errores.sort(), ["csp", "hsts", "nosniff", "referrer-policy", "x-frame-options"]);
});

test("una CSP con unsafe-eval o sin frame-ancestors no aprueba", () => {
  const conEval = { ...CABECERAS_COMPLETAS, "content-security-policy": "default-src 'self'; script-src 'unsafe-eval'; frame-ancestors 'none'" };
  assert.ok(fallos(evaluarCabeceras(conEval)).includes("csp"));
  const sinMarco = { ...CABECERAS_COMPLETAS, "content-security-policy": "default-src 'self'" };
  assert.ok(fallos(evaluarCabeceras(sinMarco)).includes("csp"));
});

test("exponer X-Powered-By solo genera aviso", () => {
  const hallazgos = evaluarCabeceras({ ...CABECERAS_COMPLETAS, "x-powered-by": "Next.js" });
  const powered = hallazgos.find((item) => item.id === "x-powered-by");
  assert.equal(powered.ok, false);
  assert.equal(powered.nivel, "aviso");
});

test("una página comercial completa aprueba el SEO", () => {
  assert.deepEqual(fallos(evaluarSeoPublico(SEO_SANO)), []);
});

test("un sitio comercial con noindex es un fallo, no un acierto", () => {
  const conNoindex = { ...SEO_SANO, html: `${PAGINA_COMPLETA}<meta name="robots" content="noindex"/>` };
  assert.deepEqual(fallos(evaluarSeoPublico(conNoindex)), ["indexable"]);
});

test("robots.txt ausente o que bloquea todo no aprueba", () => {
  assert.ok(fallos(evaluarSeoPublico({ ...SEO_SANO, robotsStatus: 404, robotsBody: "" })).includes("robots-txt"));
  assert.ok(fallos(evaluarSeoPublico({ ...SEO_SANO, robotsBody: "User-Agent: *\nDisallow: /\n" })).includes("robots-txt"));
});

test("falta de sitemap, title, description o canonical se detecta", () => {
  assert.deepEqual(fallos(evaluarSeoPublico({ ...SEO_SANO, sitemapStatus: 404 })), ["sitemap"]);
  assert.deepEqual(fallos(evaluarSeoPublico({ ...SEO_SANO, html: "<h1>Solo</h1>" })).sort(), [
    "canonical",
    "description",
    "open-graph",
    "title",
  ]);
});

test("un Open Graph incompleto no aprueba", () => {
  const sinImagen = {
    ...SEO_SANO,
    html: PAGINA_COMPLETA.replace(/<meta property="og:image"[^>]*>/, ""),
  };
  assert.deepEqual(fallos(evaluarSeoPublico(sinImagen)), ["open-graph"]);
});

test("un title largo y un h1 duplicado solo avisan", () => {
  const html = `${PAGINA_COMPLETA}<h1>Otro</h1>`.replace(
    /<title>[^<]*<\/title>/,
    `<title>${"a".repeat(70)}</title>`,
  );
  const hallazgos = evaluarSeoPublico({ ...SEO_SANO, html });
  assert.deepEqual(fallos(hallazgos).sort(), ["h1", "title-largo"]);
  assert.ok(hallazgos.filter((item) => !item.ok).every((item) => item.nivel === "aviso"));
});

test("resumir separa errores de avisos", () => {
  const { errores, avisos, total } = resumir([
    { id: "a", nivel: "error", ok: false },
    { id: "b", nivel: "aviso", ok: false },
    { id: "c", nivel: "error", ok: true },
  ]);
  assert.deepEqual(errores.map((item) => item.id), ["a"]);
  assert.deepEqual(avisos.map((item) => item.id), ["b"]);
  assert.equal(total, 3);
});
