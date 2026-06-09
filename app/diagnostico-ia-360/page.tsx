import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/diagnostico-ia-360`;

export const metadata: Metadata = {
  title: "Diagnóstico IA 360",
  description:
    "En 1–2 semanas mapeamos tu operación, identificamos qué automatizar con IA y entregamos un plan concreto con impacto medible. El primer paso antes de cualquier desarrollo.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Diagnóstico IA 360 | LAV Systems",
    description:
      "En 1–2 semanas mapeamos tu operación, identificamos qué automatizar con IA y entregamos un plan concreto con impacto medible.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Diagnóstico IA 360",
      description:
        "Evaluación completa del estado operacional de la empresa: procesos, datos, sistemas y oportunidades de automatización con IA. Entrega un plan de acción concreto en 1–2 semanas.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Diagnóstico IA 360 | LAV Systems",
      description:
        "En 1–2 semanas mapeamos tu operación, identificamos qué automatizar con IA y entregamos un plan concreto con impacto medible.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "No sabes qué automatizar primero ni por dónde empezar.",
  "Has invertido en tecnología que el equipo no usa.",
  "Tomas decisiones con datos incompletos o desactualizados.",
  "Necesitas mejorar la operación, pero no quieres equivocarte en qué construir.",
];

const deliverables = [
  {
    title: "Mapa de procesos críticos",
    desc: "Levantamos los flujos operacionales que más impactan en tu negocio: costos, tiempos, errores y dependencias.",
  },
  {
    title: "Inventario de datos",
    desc: "Qué datos tienes, dónde están, cuán confiables son y qué falta capturar para operar con información real.",
  },
  {
    title: "Priorización por ROI",
    desc: "Ordenamos las iniciativas de mayor a menor impacto: cuánto tiempo liberas, cuánto error eliminas, cuánto cuesta implementar.",
  },
  {
    title: "Stack tecnológico recomendado",
    desc: "Qué tecnologías usar según tu realidad: equipo, escala, datos existentes y presupuesto.",
  },
  {
    title: "Plan de acción concreto",
    desc: "Roadmap de proyectos con alcance, estimado de costo, plazo y métricas de éxito para cada iniciativa.",
  },
  {
    title: "Sesión de cierre con gerencia",
    desc: "Presentamos los resultados al equipo directivo con contexto ejecutivo y recomendaciones priorizadas.",
  },
];

const related = [
  { label: "Software a medida con IA", href: "/software-a-medida-ia" },
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
];

export default function DiagnosticoIA360() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Paso 1 — Antes de construir
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Diagnóstico IA 360 —{" "}
              <span className="text-accent">claridad antes</span> de invertir en tecnología
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              En 1–2 semanas mapeamos tu operación completa: procesos, datos, personas y sistemas.
              Identificamos las 3–5 oportunidades de mayor impacto y entregamos un plan de acción
              concreto para automatizar con IA sin riesgo.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              ¿Reconoces alguno de estos problemas?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La mayoría de las empresas saben que pueden mejorar, pero no saben exactamente qué
              construir ni en qué orden. El Diagnóstico IA 360 resuelve esa incertidumbre.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {symptoms.map((s) => (
                <div
                  key={s}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Qué entrega el diagnóstico
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Al terminar el Diagnóstico IA 360, tienes un plan de acción listo para ejecutar —
              no un informe genérico, sino decisiones concretas adaptadas a tu realidad operacional.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div
                  key={d.title}
                  className="rounded-xl border border-white/8 bg-white/[0.04] p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="font-semibold text-white">{d.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Empieza por saber qué construir
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El Diagnóstico IA 360 es el primer paso. Sin él, cualquier proyecto de software
              corre el riesgo de construir lo que no se necesita.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
            <p className="mt-5 text-xs text-white/25">
              También puedes escribirnos a{" "}
              <a href="mailto:contacto@lav.software" className="text-white/40 hover:text-white/60">
                contacto@lav.software
              </a>
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              {related.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="text-sm text-accent/70 transition-colors hover:text-accent"
                >
                  {r.label} →
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
