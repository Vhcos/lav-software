import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/automatizacion-procesos`;

export const metadata: Metadata = {
  title: "Automatización de Procesos con IA",
  description:
    "Automatizamos procesos repetitivos con IA: aprobaciones, reportes automáticos, alertas, órdenes de trabajo y flujos operacionales para empresas en Chile.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Automatización de Procesos con IA | LAV Systems",
    description:
      "Convertimos tareas repetitivas en flujos automatizados con IA: aprobaciones, reportes, alertas y órdenes de trabajo para empresas en Chile.",
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
      name: "Automatización de Procesos con IA",
      description:
        "Automatización de procesos operacionales repetitivos con IA: aprobaciones, reportes automáticos, alertas inteligentes y flujos de trabajo digitales para empresas en Chile.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Automatización de Procesos con IA | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Las aprobaciones viajan por correo y pueden tomar días.",
  "Los reportes semanales los arma siempre la misma persona, a mano.",
  "Las alertas dependen de que alguien se dé cuenta a tiempo.",
  "Hay procesos que se detienen cuando falta una persona clave.",
];

const builds = [
  {
    title: "Flujos de aprobación automáticos",
    desc: "Compras, solicitudes, documentos y presupuestos con cadenas de aprobación digitales, notificaciones automáticas y trazabilidad de cada paso.",
  },
  {
    title: "Reportes automáticos",
    desc: "Reportes diarios, semanales y mensuales generados y enviados automáticamente — sin que nadie tenga que armarlos ni recordar enviarlos.",
  },
  {
    title: "Alertas operacionales inteligentes",
    desc: "Notificaciones automáticas cuando un indicador supera un umbral, un proceso se demora demasiado o algo requiere atención urgente.",
  },
  {
    title: "Órdenes de trabajo digitales",
    desc: "OT asignadas automáticamente según disponibilidad, prioridad y especialidad, con seguimiento en tiempo real desde terreno hasta cierre.",
  },
  {
    title: "Sincronización entre sistemas",
    desc: "Datos que hoy alguien copia a mano entre dos sistemas pasan a sincronizarse automáticamente, eliminando errores y duplicación de trabajo.",
  },
  {
    title: "Copiloto con IA para operaciones",
    desc: "Asistente que monitorea tu operación, detecta patrones anómalos y entrega alertas predictivas antes de que el problema escale.",
  },
];

const related = [
  { label: "Software a medida con IA", href: "/software-a-medida-ia" },
  { label: "Integración de datos e IoT", href: "/integracion-datos-iot" },
];

export default function AutomatizacionProcesos() {
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
                "radial-gradient(80% 60% at 40% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Automatización · IA · Flujos operacionales
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Automatización de procesos —{" "}
              <span className="text-accent">menos trabajo manual</span>, más tiempo para lo que importa
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Identificamos las tareas que tu equipo repite cada día y las convertimos en flujos
              automatizados: aprobaciones que se procesan solas, reportes que llegan sin que nadie
              los arme y alertas que anticipan problemas antes de que escalen.
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
              Cuando los procesos dependen de personas, el riesgo es constante
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Un proceso manual es un proceso frágil. Depende de que alguien recuerde hacerlo,
              tenga tiempo y no cometa errores. La automatización de procesos elimina esa
              fragilidad sin cambiar la lógica de tu negocio.
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

        {/* What we automate */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Qué automatizamos
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada automatización parte del diagnóstico de tu operación. Primero entendemos el
              proceso actual, luego diseñamos el flujo automatizado y lo validamos contigo antes
              de implementar.
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
              Empieza a operar sin depender de que alguien recuerde
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El primer paso es un diagnóstico de tus procesos actuales. En 1–2 semanas
              identificamos qué automatizar primero para liberar el mayor tiempo con el menor
              costo.
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
