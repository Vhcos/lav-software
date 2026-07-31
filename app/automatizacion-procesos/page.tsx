import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/automatizacion-procesos`;

export const metadata: Metadata = {
  title: "Automatización de procesos para pymes",
  description:
    "En LAV, la automatización no es un motor de flujos genérico: son agentes que clasifican documentos, concilian movimientos y revisan novedades sobre tus datos reales.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Automatización de procesos para pymes | LAV Systems",
    description:
      "Agentes que clasifican documentos, concilian movimientos y revisan novedades sobre tus datos reales.",
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
      name: "Automatización de procesos para pymes",
      description:
        "Automatización de tareas repetitivas mediante agentes especializados que operan sobre módulos, datos y permisos reales de la empresa, no sobre flujos genéricos.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Automatización de procesos para pymes | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Alguien clasifica documentos tributarios uno por uno, todos los meses.",
  "La conciliación bancaria se hace a mano, cruzando cartola contra sistema.",
  "Los reportes semanales los arma siempre la misma persona.",
  "Las novedades de remuneraciones se revisan por correo antes de cada cierre.",
];

const agentes = [
  { title: "Agente contable", desc: "Revisa documentos tributarios y propone clasificaciones automáticamente.", badge: "En uso real" },
  { title: "Agente de tesorería", desc: "Ayuda a conciliar movimientos bancarios contra tus documentos.", badge: "En uso real" },
  { title: "Agente de remuneraciones", desc: "Revisa novedades del mes y detecta datos faltantes antes del cierre.", badge: "En uso real" },
  { title: "Agente de gerencia", desc: "Consolida indicadores y prepara reportes, sin que nadie los arme a mano.", badge: "En uso real" },
];

const related = [
  { label: "Plataforma", href: "/plataforma" },
  { label: "Equipo de agentes", href: "/agentes" },
  { label: "Todas las soluciones", href: "/soluciones" },
];

export default function AutomatizacionProcesos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 40% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Automatización · Agentes · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Automatización de procesos —{" "}
              <span className="text-accent">agentes que trabajan</span>, no flujos genéricos
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              No vendemos un motor de automatización abstracto. Los agentes de LAV clasifican
              documentos, concilian movimientos y revisan novedades sobre tus datos reales, dentro
              de permisos definidos.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              Tareas repetitivas que hoy dependen de que alguien se acuerde
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Un proceso manual es un proceso frágil: depende de que alguien tenga tiempo y no
              cometa errores. Los agentes de LAV hacen ese trabajo sobre datos reales, con
              trazabilidad de cada acción.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {symptoms.map((s) => (
                <div key={s} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Qué automatizan los agentes</h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada agente trabaja sobre un dominio específico, no sobre reglas abstractas.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {agentes.map((a) => (
                <div key={a.title} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">{a.title}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/60">{a.badge}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Empieza a operar sin depender de que alguien recuerde
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El primer paso es un diagnóstico empresarial. Identificamos qué agentes conectar
              primero para liberar el mayor tiempo con el menor riesgo.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              {related.map((r) => (
                <a key={r.href} href={r.href} className="text-sm text-accent/70 transition-colors hover:text-accent">
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
