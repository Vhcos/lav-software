import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-mineria`;

export const metadata: Metadata = {
  title: "Agente empresarial para Minería",
  description:
    "LAV conecta la contabilidad, tesorería y reportes de faena de tu empresa minera o de servicios mineros, con agentes que consolidan la información y avisan a tiempo.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Agente empresarial para Minería | LAV Systems",
    description:
      "Contabilidad, tesorería y reportes de faena conectados, con agentes que avisan a tiempo.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente empresarial para Minería | LAV Systems",
    description:
      "Contabilidad, tesorería y reportes de faena conectados, con agentes que avisan a tiempo.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "LAV para Minería y Servicios a la Minería",
      description:
        "Plataforma empresarial con agentes especializados para empresas mineras y contratistas de servicios a la minería en Chile: contabilidad, tesorería, remuneraciones y reportes de faena.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Agente empresarial para Minería | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Reportes de turno en papel o planillas que alguien digita después.",
  "La facturación a mandantes y el pago a proveedores viven en sistemas separados.",
  "Las remuneraciones de terreno se calculan a mano, faena por faena.",
  "Alertas operacionales que llegan tarde o no llegan.",
];

const soluciones = [
  { title: "Contabilidad conectada al SII", desc: "Ledger real y documentos tributarios sincronizados, con un agente que revisa y clasifica.", badge: "En uso real" },
  { title: "Tesorería y flujo de caja", desc: "Cuentas por cobrar a mandantes y por pagar a proveedores, con alertas de vencimiento.", badge: "En uso real" },
  { title: "Remuneraciones de terreno", desc: "Cálculo, liquidaciones y Previred, con validación humana antes de cada cierre.", badge: "En uso real" },
  { title: "Reportes de faena", desc: "El agente operacional consolida reportes de turno, adaptado a cómo opera tu faena.", badge: "Programa Fundadoras" },
  { title: "Control documental", desc: "El agente documental organiza procedimientos, permisos y certificaciones, y avisa qué vence.", badge: "Programa Fundadoras" },
];

const related = [
  { label: "Agente operacional", href: "/operaciones" },
  { label: "Tesorería", href: "/tesoreria" },
  { label: "Todas las soluciones", href: "/soluciones" },
];

export default function SoftwareParaMineria() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 45% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Minería · Servicios mineros · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              El agente empresarial para minería —{" "}
              <span className="text-accent">trazabilidad y control</span> desde faena hasta gerencia
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              La operación minera y los servicios a la minería exigen trazabilidad y cero margen de
              error. LAV conecta tu contabilidad, tesorería y reportes de faena en un solo sistema.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              La operación en terreno no puede depender de papel ni WhatsApp
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              En minería, la información tardía o imprecisa tiene consecuencias directas: caja
              sin visibilidad, remuneraciones lentas y decisiones sin datos. LAV ordena esa información.
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
              Cada implementación parte del diagnóstico de tu operación: turnos, flujos de
              información y restricciones de conectividad en faena.
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
              Tu faena, trazable y controlada desde cualquier pantalla
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El diagnóstico inicial levanta tus procesos en faena y define qué agentes conectar primero.
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
