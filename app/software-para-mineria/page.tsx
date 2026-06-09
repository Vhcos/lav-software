import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-mineria`;

export const metadata: Metadata = {
  title: "Software para Minería y Servicios a la Minería",
  description:
    "Software operacional a medida para minería y empresas de servicios mineros en Chile. Trazabilidad de faenas, OT digitales, reportes de turno y control documental.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Software para Minería | LAV Systems",
    description:
      "Trazabilidad y control operacional en faenas. Software a medida para minería y servicios mineros en Chile.",
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
      name: "Software para Minería y Servicios a la Minería",
      description:
        "Software operacional a medida para empresas mineras y contratistas de servicios a la minería en Chile: OT digitales, reportes de turno, trazabilidad de faenas, alertas operacionales y control documental.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Software para Minería y Servicios a la Minería | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Reportes de turno en papel o planillas que alguien digita después.",
  "Órdenes de trabajo que se pierden o se demoran en asignar.",
  "Alertas operacionales que llegan tarde o no llegan.",
  "Documentación de faena difícil de rastrear y auditar.",
];

const builds = [
  {
    title: "Órdenes de trabajo digitales",
    desc: "OT creadas, asignadas y cerradas desde móvil en terreno. Trazabilidad completa: quién la hizo, cuándo, con qué materiales y en qué tiempo.",
  },
  {
    title: "Reportes de turno automáticos",
    desc: "El turno cierra digitalmente y el reporte se genera solo — con producción, novedades, equipos operativos y firma del supervisor.",
  },
  {
    title: "Alertas operacionales y de mantenimiento",
    desc: "Notificaciones automáticas cuando un equipo requiere mantención, un indicador supera umbrales o una condición de seguridad cambia.",
  },
  {
    title: "Trazabilidad de faena",
    desc: "Registro completo de cada actividad en terreno: quién, cuándo, dónde y qué hizo — trazable por equipo, persona, turno o período.",
  },
  {
    title: "Control documental",
    desc: "Procedimientos, permisos, certificaciones y protocolos organizados por faena y vigencia — accesibles desde terreno y auditables.",
  },
  {
    title: "Dashboard de operaciones",
    desc: "KPIs de producción, disponibilidad de equipos, avance de faena y alertas activas en un panel visible para jefaturas y gerencia.",
  },
];

const related = [
  { label: "Integración de datos e IoT", href: "/integracion-datos-iot" },
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
  { label: "Diagnóstico IA 360", href: "/diagnostico-ia-360" },
];

export default function SoftwareParaMineria() {
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
                "radial-gradient(80% 60% at 45% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Minería · Servicios mineros · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Software para minería —{" "}
              <span className="text-accent">trazabilidad y control</span> operacional en faenas
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              La operación minera y los servicios a la minería exigen trazabilidad, velocidad
              y cero margen de error. Construimos sistemas operacionales a medida para empresas
              que trabajan en faena y necesitan control real sobre sus procesos.
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
              La operación en terreno no puede depender de papel ni WhatsApp
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              En minería, la información tardía o imprecisa tiene consecuencias directas: equipos
              parados, turnos sin claridad, auditorías difíciles y decisiones sin datos. El software
              operacional a medida para minería resuelve eso desde la raíz.
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

        {/* What we build */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Qué construimos para la industria minera
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada sistema parte del diagnóstico de tu operación en faena. Entendemos los turnos,
              los flujos de información y las restricciones de conectividad antes de diseñar la
              solución.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {builds.map((b) => (
                <div
                  key={b.title}
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
                    <h3 className="font-semibold text-white">{b.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Tu faena, trazable y controlada desde cualquier pantalla
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El diagnóstico inicial incluye el levantamiento de tus procesos en faena: turnos,
              OT, reportes y flujos de información. En 1–2 semanas tienes el plan de lo que hay
              que construir.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
            <p className="mt-5 text-xs text-white/25">
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
