import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/diagnostico`;

export const metadata: Metadata = {
  title: "Diagnóstico empresarial",
  description:
    "Antes de activar agentes, mapeamos tus procesos, datos y prioridades. El primer paso para conectar tu empresa a la plataforma de LAV.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Diagnóstico empresarial | LAV Systems",
    description:
      "Mapeamos tus procesos, datos y prioridades, e identificamos qué agentes tienen mayor impacto en tu empresa.",
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
      name: "Diagnóstico empresarial",
      description:
        "Evaluación del estado operacional de la empresa: procesos, datos, sistemas y oportunidades de integrar agentes especializados de LAV.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Diagnóstico empresarial | LAV Systems",
      description:
        "Antes de activar agentes, mapeamos tus procesos, datos y prioridades.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Tienes un sistema contable, otro de remuneraciones y planillas Excel que nadie más entiende.",
  "La gerencia decide con reportes que llegan tarde o incompletos.",
  "No sabes qué proceso conviene ordenar primero.",
  "Has evaluado software antes, pero no sabías por dónde empezar.",
];

const deliverables = [
  {
    title: "Mapa de procesos y datos",
    desc: "Qué información existe, dónde vive y dónde se rompe la cadena entre sistemas y personas.",
  },
  {
    title: "Diagnóstico de fragmentación",
    desc: "Qué plataformas, planillas y canales estás usando hoy, y qué tan conectados están entre sí.",
  },
  {
    title: "Priorización por impacto",
    desc: "Qué procesos conviene ordenar primero: los que más tiempo, control o dinero te están costando.",
  },
  {
    title: "Agentes recomendados",
    desc: "Qué agentes especializados tienen mayor impacto en tu operación real, y en qué orden activarlos.",
  },
  {
    title: "Plan de implementación",
    desc: "Etapas, alcance y condiciones para conectar tu empresa a la plataforma de LAV.",
  },
  {
    title: "Sesión de cierre con gerencia",
    desc: "Presentamos los resultados con contexto ejecutivo y recomendaciones priorizadas.",
  },
];

export default function DiagnosticoPage() {
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
              Paso 1 — Antes de activar agentes
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Diagnóstico empresarial —{" "}
              <span className="text-accent">claridad antes</span> de conectar tu empresa
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Mapeamos tus procesos, tus datos y tus prioridades. Identificamos qué está
              fragmentado hoy y qué agentes tienen mayor impacto en tu operación.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
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
              La mayoría de las pymes ya tiene demasiadas herramientas. El diagnóstico resuelve
              la incertidumbre sobre qué ordenar primero.
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
              Al terminar, tienes un plan concreto — no un informe genérico, sino decisiones
              adaptadas a cómo opera realmente tu empresa.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
              Empieza por saber qué ordenar primero
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El diagnóstico empresarial es el primer paso. Sin él, cualquier implementación
              corre el riesgo de activar lo que no se necesita.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/plataforma" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Plataforma →
              </a>
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Programa de Empresas Fundadoras →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
