import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-constructoras`;

export const metadata: Metadata = {
  title: "Software para Constructoras y Proyectos de Ingeniería",
  description:
    "Software a medida para constructoras y empresas de ingeniería en Chile. Trazabilidad de obras, control de costos, estados de pago, documentación y reportes de avance.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Software para Constructoras | LAV Systems",
    description:
      "Control total sobre obras, costos y documentación. Software a medida para constructoras y empresas de ingeniería en Chile.",
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
      name: "Software para Constructoras",
      description:
        "Software de gestión de obras a medida para constructoras y empresas de ingeniería en Chile: trazabilidad de proyectos, control de costos, estados de pago, gestión documental y reportes de avance.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Software para Constructoras y Proyectos de Ingeniería | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "No sabes el costo real de cada obra hasta que el proyecto cierra.",
  "Documentos de obra en correos, carpetas compartidas y WhatsApp.",
  "Los estados de pago toman semanas en aprobarse y procesarse.",
  "Los reportes de avance se arman a mano el fin de semana.",
];

const builds = [
  {
    title: "Control de avance y costos por partida",
    desc: "Seguimiento en tiempo real del avance físico y financiero de cada partida. Alertas automáticas cuando el costo supera lo presupuestado.",
  },
  {
    title: "Gestión documental de proyectos",
    desc: "Planos, especificaciones, actas, protocolos y contratos organizados por proyecto, versión y estado — accesibles desde terreno.",
  },
  {
    title: "Flujo de aprobación de estados de pago",
    desc: "Estados de pago digitales con revisión de cantidades, respaldo fotográfico y cadena de aprobación trazable desde subcontratista hasta mandante.",
  },
  {
    title: "Control de subcontratos y OT",
    desc: "Alcance, costos, órdenes de cambio y pagos de cada subcontratista en un solo lugar, con trazabilidad completa.",
  },
  {
    title: "Reportes de obra automáticos",
    desc: "Informes de avance, curvas S, resúmenes ejecutivos y reportes para mandante generados automáticamente con los datos del sistema.",
  },
  {
    title: "Trazabilidad de acuerdos y cambios",
    desc: "Registro auditado de cada acuerdo de obra, cambio de alcance y decisión técnica — con fecha, responsable y documentación respaldo.",
  },
];

const related = [
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
  { label: "Integración de datos e IoT", href: "/integracion-datos-iot" },
  { label: "Diagnóstico IA 360", href: "/diagnostico-ia-360" },
];

export default function SoftwareParaConstructoras() {
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
                "radial-gradient(80% 60% at 55% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Construcción · Ingeniería · Proyectos · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Software para constructoras —{" "}
              <span className="text-accent">control real</span> sobre obras, costos y documentación
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Las obras tienen cientos de variables: costos, avances, subcontratos, documentos y
              aprobaciones que viajan por correo. Construimos el sistema que te da visibilidad total
              sobre cada proyecto, desde la licitación hasta el cierre.
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
              Sin visibilidad en tiempo real, la obra manda a la empresa
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La construcción es uno de los sectores con mayor exposición a desviaciones de costo
              y plazo. La falta de sistemas adecuados convierte cada proyecto en una apuesta.
              El software a medida para constructoras cambia esa ecuación.
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
              Qué construimos para tu empresa constructora
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada sistema para constructoras es a medida. Primero entendemos cómo opera tu
              empresa, qué proyectos gestiona y qué información crítica necesita la gerencia para
              tomar decisiones a tiempo.
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
              Tus obras, bajo control desde el primer día
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Empezamos con un diagnóstico de tus proyectos y procesos actuales. En 1–2 semanas
              tienes un plan concreto de qué construir para tener visibilidad real sobre cada obra.
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
