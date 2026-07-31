import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-constructoras`;

export const metadata: Metadata = {
  title: "Agente empresarial para Constructoras",
  description:
    "LAV conecta la contabilidad, tesorería y documentos de tu constructora, con un agente operacional que consolida el avance de cada obra. Para constructoras y empresas de ingeniería en Chile.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Agente empresarial para Constructoras | LAV Systems",
    description:
      "Contabilidad, tesorería y documentos conectados, con un agente que consolida el avance de cada obra.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente empresarial para Constructoras | LAV Systems",
    description:
      "Contabilidad, tesorería y documentos conectados, con un agente que consolida el avance de cada obra.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "LAV para Constructoras",
      description:
        "Plataforma empresarial con agentes especializados para constructoras y empresas de ingeniería en Chile: contabilidad, tesorería, remuneraciones de cuadrillas, documentos y reportes de obra.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Agente empresarial para Constructoras | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Los costos de cada obra están repartidos entre Excel, papeletas y el sistema contable.",
  "Planos, permisos y certificaciones viven en carpetas compartidas o WhatsApp.",
  "Los reportes de avance se arman a mano el fin de semana.",
  "La gerencia no tiene una vista consolidada de todas las obras a la vez.",
];

const soluciones = [
  { title: "Contabilidad conectada al SII", desc: "Ledger real y documentos tributarios sincronizados, con un agente que revisa y clasifica.", badge: "En uso real" },
  { title: "Tesorería y flujo de caja", desc: "Cuentas por cobrar y por pagar consolidadas, con alertas antes de que falte caja para la obra.", badge: "En uso real" },
  { title: "Remuneraciones de cuadrillas", desc: "Cálculo, liquidaciones y Previred para tu equipo, con validación humana en cada cierre.", badge: "En uso real" },
  { title: "Reportes de obra", desc: "El agente operacional consolida el avance diario, adaptado a cómo reporta tu obra.", badge: "Programa Fundadoras" },
  { title: "Documentos y certificaciones", desc: "El agente documental clasifica planos, permisos y certificaciones, y avisa qué está por vencer.", badge: "Programa Fundadoras" },
];

const related = [
  { label: "Agente operacional", href: "/operaciones" },
  { label: "Contabilidad", href: "/contabilidad" },
  { label: "Todas las soluciones", href: "/soluciones" },
];

export default function SoftwareParaConstructoras() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 55% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Construcción · Ingeniería · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              El agente empresarial para constructoras —{" "}
              <span className="text-accent">control real</span> sobre costos, documentos y avance
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              LAV conecta la contabilidad, tesorería y documentos de tu constructora en una sola
              plataforma, con agentes que consolidan el avance de cada obra.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              Sin visibilidad en tiempo real, la obra maneja a la empresa
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La construcción es uno de los sectores con mayor exposición a desviaciones de costo
              y plazo. LAV conecta la información dispersa para que la gerencia tenga visibilidad real.
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
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Qué te ayuda a ordenar LAV</h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Empezamos con un diagnóstico de cómo opera tu empresa hoy: qué obras gestionas y qué
              información necesita la gerencia para decidir a tiempo.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {soluciones.map((s) => (
                <div key={s.title} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/60">{s.badge}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Tus obras, bajo control desde el primer día
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Empezamos con un diagnóstico de tus proyectos y procesos actuales, y evaluamos qué
              agentes conectar primero.
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
