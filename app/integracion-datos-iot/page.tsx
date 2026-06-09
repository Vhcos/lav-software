import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/integracion-datos-iot`;

export const metadata: Metadata = {
  title: "Integración de Datos e IoT Industrial",
  description:
    "Conectamos sistemas, bases de datos y dispositivos IoT en dashboards unificados para empresas industriales en Chile. Datos en tiempo real, trazabilidad y decisiones basadas en información.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Integración de Datos e IoT Industrial | LAV Systems",
    description:
      "Conectamos ERP, datos y dispositivos IoT en dashboards en tiempo real para empresas industriales en Chile.",
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
      name: "Integración de Datos e IoT Industrial",
      description:
        "Integración de sistemas heterogéneos, bases de datos y dispositivos IoT en plataformas de datos unificadas con dashboards en tiempo real para empresas industriales en Chile.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Integración de Datos e IoT Industrial | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Tienes datos en ERP, Excel, sistemas legacy y correos que nadie cruza.",
  "Equipos en terreno mandan información por WhatsApp o la anotan en papel.",
  "La gerencia no tiene visibilidad de lo que pasa en operaciones en tiempo real.",
  "Consolidar datos para un reporte toma horas o días de trabajo manual.",
];

const builds = [
  {
    title: "Integraciones entre sistemas",
    desc: "Conectamos ERP, CRM, sistemas de gestión y hojas de cálculo en un flujo de datos unificado sin duplicación ni entrada manual.",
  },
  {
    title: "Captura de datos con IoT",
    desc: "Sensores industriales, medidores, lectores y dispositivos en terreno que envían datos directamente a tu plataforma en tiempo real.",
  },
  {
    title: "Dashboards ejecutivos en tiempo real",
    desc: "KPIs de operación, producción, logística o mantenimiento visibles en tiempo real — en pantalla, móvil o tablet en terreno.",
  },
  {
    title: "Alertas automáticas por umbrales",
    desc: "Notificaciones cuando un sensor supera un límite, un KPI se deteriora o un equipo requiere mantención preventiva.",
  },
  {
    title: "Historial operacional trazable",
    desc: "Registro auditado de cada evento, lectura y decisión operacional — con búsqueda por equipo, persona, turno o período.",
  },
  {
    title: "Pipeline de datos automatizado",
    desc: "Datos que hoy alguien consolida a mano se procesan, transforman y cargan automáticamente en el destino correcto.",
  },
];

const related = [
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
  { label: "Software para minería", href: "/software-para-mineria" },
  { label: "Software para constructoras", href: "/software-para-constructoras" },
];

export default function IntegracionDatosIoT() {
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
                "radial-gradient(80% 60% at 50% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Datos · IoT · Integración industrial
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Integración de datos e IoT —{" "}
              <span className="text-accent">tu operación visible</span> en tiempo real
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Tus datos están dispersos en ERP, Excel, sistemas legacy y equipos en terreno.
              Los conectamos en una plataforma unificada: datos en tiempo real, alertas automáticas
              y dashboards que te dicen qué está pasando exactamente cuando lo necesitas saber.
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
              Datos dispersos es sinónimo de decisiones tardías
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Cuando la información está repartida entre sistemas que no se comunican, la gerencia
              opera con datos de ayer — o de la semana pasada. La integración de datos elimina
              ese rezago y da visibilidad operacional real.
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
              Qué construimos
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada integración parte de un mapa de fuentes de datos: qué sistemas existen, qué
              datos generan, con qué frecuencia y quién los necesita. A partir de ahí diseñamos
              la arquitectura más simple y confiable.
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
              Conecta tus datos, decide con información real
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El Diagnóstico IA 360 incluye el levantamiento completo de tus fuentes de datos y
              un plan para conectarlas de forma segura y escalable.
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
