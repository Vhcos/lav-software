import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/casos`;

export const metadata: Metadata = {
  title: "Casos",
  description:
    "Proyectos reales, en producción, que construyeron las capacidades de LAV: datos, software, automatización, finanzas, operaciones, IoT e IA aplicada.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Casos | LAV Systems",
    description:
      "La experiencia real detrás de LAV: aret3, SEEConsulting, Casia, Blizcoms/SuperBet e IoT Cachimba y Dantino.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casos | LAV Systems",
    description:
      "La experiencia real detrás de LAV: aret3, SEEConsulting, Casia, Blizcoms/SuperBet e IoT Cachimba y Dantino.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Casos | LAV Systems",
      description:
        "Proyectos reales, en producción, que construyeron las capacidades de LAV.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const cases = [
  {
    name: "aret3",
    area: "Software con IA",
    problema: "Evaluar ideas y oportunidades de negocio sin un método estructurado.",
    solucion: "Plataforma que analiza viabilidad, mercado y riesgo con inteligencia artificial.",
    capacidades: ["Software con IA", "Análisis estructurado", "Datos"],
    resultado: "Plataforma en uso real para evaluar oportunidades de negocio.",
  },
  {
    name: "SEEConsulting",
    area: "Gestión estratégica",
    problema: "El seguimiento de la estrategia vivía en presentaciones sueltas, sin trazabilidad.",
    solucion: "Plataforma de gestión estratégica con KPIs, roadmap y seguimiento de iniciativas para gerencia y directorio.",
    capacidades: ["Control de gestión", "Reportes", "IA aplicada (Casiani)"],
    resultado: "Base directa del agente de gerencia que hoy integra LAV.",
  },
  {
    name: "Casia",
    area: "Operaciones · SGI · Documentos",
    problema: "Reportes operacionales manuales y documentación dispersa entre sistemas.",
    solucion: "Plataforma operacional con reportes automáticos, sistema de gestión integrado (SGI), integración con SharePoint y flujos de aprobación.",
    capacidades: ["Operaciones", "Automatización", "Documentos"],
    resultado: "Plataforma en producción con flujos de aprobación y alertas internas activos.",
  },
  {
    name: "Blizcoms / SuperBet",
    area: "API · Datos en tiempo real",
    problema: "Procesar y normalizar grandes volúmenes de datos deportivos en tiempo real.",
    solucion: "Motor de datos y API para procesamiento, normalización y entrega de información en tiempo real.",
    capacidades: ["Datos", "Integraciones", "Software"],
    resultado: "API en producción sirviendo datos en tiempo real.",
  },
  {
    name: "IoT Cachimba y Dantino",
    area: "IoT · Operaciones en terreno",
    problema: "Sin visibilidad de la operación real en terreno, más allá de reportes manuales.",
    solucion: "Sensores y soluciones conectadas para capturar datos operativos desde terreno, con trazabilidad y monitoreo.",
    capacidades: ["IoT", "Operaciones", "Trazabilidad"],
    resultado: "Sensores y monitoreo en uso real en operaciones industriales.",
  },
];

export default function CasosPage() {
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
              Casos
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              La experiencia que construyó las{" "}
              <span className="text-accent">capacidades de LAV</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Proyectos reales, en producción, resolviendo problemas concretos de empresas.
              Sin métricas inventadas.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <div key={c.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <h2 className="text-xl font-bold text-navy">{c.name}</h2>
                    <span className="shrink-0 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/60">
                      {c.area}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm leading-relaxed text-slate-500">
                    <p><span className="font-semibold text-navy">Problema: </span>{c.problema}</p>
                    <p><span className="font-semibold text-navy">Solución: </span>{c.solucion}</p>
                  </div>

                  <div className="my-4 flex flex-wrap gap-1.5">
                    {c.capacidades.map((cap) => (
                      <span key={cap} className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/60">
                        {cap}
                      </span>
                    ))}
                  </div>

                  <p className="mt-auto text-sm font-semibold text-navy">{c.resultado}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 max-w-2xl text-base leading-relaxed text-slate-500">
              Esta experiencia en datos, software, automatización, finanzas, control, operaciones,
              IoT e IA aplicada es la base sobre la que construimos LAV.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Súmate a las próximas empresas fundadoras
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Conversemos sobre qué procesos de tu empresa podrían resolverse con LAV.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
