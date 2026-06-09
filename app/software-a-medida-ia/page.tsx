import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-a-medida-ia`;

export const metadata: Metadata = {
  title: "Software a Medida con IA para Empresas",
  description:
    "Desarrollamos sistemas internos a medida con IA para empresas en Chile. Reemplazamos Excel, correos y procesos manuales con software diseñado exactamente para tu operación.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Software a Medida con IA | LAV Systems",
    description:
      "Sistemas internos a medida con IA para empresas en Chile. Diseñados exactamente para tu operación, no para el catálogo del proveedor.",
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
      name: "Software a Medida con IA",
      description:
        "Desarrollo de sistemas internos a medida con IA para empresas en Chile. Backoffice autónomo, dashboards ejecutivos, flujos de aprobación e integraciones entre sistemas.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Software a Medida con IA para Empresas | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Tienes un ERP caro con el 80% de módulos que nadie usa.",
  "Los procesos igual terminan en Excel después del 'sistema'.",
  "Los reportes hay que armarlos a mano aunque tengas software.",
  "El proveedor no entiende tu industria ni tu forma de operar.",
];

const builds = [
  {
    title: "Backoffice autónomo",
    desc: "Sistema interno que reemplaza planillas y correos con flujos automatizados, datos centralizados y lógica de negocio propia.",
  },
  {
    title: "Módulos de gestión internos",
    desc: "Cobranza, cotizaciones, contratos, proveedores, despacho — módulos construidos exactamente para cómo opera tu empresa.",
  },
  {
    title: "Flujos de aprobación",
    desc: "Compras, solicitudes, documentos y presupuestos con flujos de revisión y aprobación digitales, con trazabilidad completa.",
  },
  {
    title: "Dashboards ejecutivos",
    desc: "KPIs de tu negocio en tiempo real — costos, avance, cobranza, producción — en un panel que la gerencia puede leer en segundos.",
  },
  {
    title: "Copiloto con IA",
    desc: "Asistente integrado a tus datos para consultar reportes, detectar anomalías y apoyar decisiones operacionales en lenguaje natural.",
  },
  {
    title: "Integraciones entre sistemas",
    desc: "Conectamos ERP, CRM, sistemas legacy y hojas de cálculo en un flujo de datos unificado, sin duplicación ni entrada manual.",
  },
];

const related = [
  { label: "Diagnóstico IA 360", href: "/diagnostico-ia-360" },
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
  { label: "Integración de datos e IoT", href: "/integracion-datos-iot" },
];

export default function SoftwareAMedidaIA() {
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
                "radial-gradient(80% 60% at 70% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Software a medida · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Software a medida con IA —{" "}
              <span className="text-accent">diseñado para cómo</span> opera tu empresa
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              No adaptamos tu empresa a un software genérico. Construimos el sistema exacto que
              necesitas: diseñado para tus procesos, integrado a tus datos y operado por tu equipo
              desde el primer día.
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
              El software genérico no es para tu empresa
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Los ERPs y plataformas de gestión están diseñados para el promedio. Tu empresa tiene
              procesos, reglas y flujos que ningún software estándar contempla exactamente.
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
              Qué construimos para ti
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada sistema que construimos parte de un diagnóstico. Entendemos tu operación antes
              de escribir la primera línea de código.
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
              El sistema que tu empresa necesita, no el que el catálogo ofrece
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Empezamos con un diagnóstico de 1–2 semanas para entender tu operación y definir
              exactamente qué construir.
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
