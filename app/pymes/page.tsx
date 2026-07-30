import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/pymes`;

export const metadata: Metadata = {
  title: "Software y agentes de IA para pymes",
  description:
    "LAV es la plataforma empresarial agéntica para pymes chilenas: contabilidad, tesorería, remuneraciones y operaciones en un solo sistema, con agentes que trabajan contigo.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Software y agentes de IA para pymes | LAV Systems",
    description:
      "La plataforma empresarial agéntica para pymes chilenas: contabilidad, tesorería, remuneraciones y operaciones en un solo sistema.",
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
      name: "LAV para pymes",
      description:
        "Plataforma empresarial agéntica para pymes chilenas: contabilidad, tesorería, remuneraciones y operaciones coordinadas por agentes especializados.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Software y agentes de IA para pymes | LAV Systems",
      description: "La plataforma empresarial agéntica para pymes chilenas.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Un sistema contable, otro de remuneraciones, y planillas Excel que solo una persona entiende.",
  "La gerencia decide con reportes que llegan tarde o incompletos.",
  "Pagas varias plataformas separadas que no se comunican entre sí.",
  "Cada persona clave que se va se lleva un pedazo del conocimiento de la empresa.",
];

const deliverables = [
  { title: "Contabilidad ordenada", desc: "Ledger real, sincronizado con el SII, con un agente que revisa y explica." },
  { title: "Tesorería con visibilidad", desc: "Caja, conciliación y flujo proyectado, con alertas antes de tiempo." },
  { title: "Remuneraciones asistidas", desc: "Cálculo y liquidaciones, con validación humana en cada cierre." },
  { title: "Operaciones consolidadas", desc: "Reportes diarios adaptados a tu negocio, no plantillas genéricas." },
  { title: "Un agente empresarial", desc: "Punto de entrada único que coordina a los agentes especializados." },
  { title: "Implementación guiada", desc: "Te acompañamos desde el diagnóstico hasta la producción." },
];

export default function PymesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Para pymes</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              El <span className="text-accent">agente empresarial</span> pensado para pymes chilenas
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              No necesitas un ERP corporativo ni veinte herramientas sueltas. Necesitas un sistema
              que conecte tu contabilidad, tesorería, remuneraciones y operación — con agentes que
              trabajan contigo.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">¿Te suena familiar?</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La mayoría de las pymes chilenas llegan a un mismo punto: crecieron más rápido que sus
              sistemas.
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
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Qué obtienes con LAV</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <h3 className="mb-2 font-semibold text-white">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Empieza con un diagnóstico</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Revisamos tu operación real y evaluamos cómo integrarla en LAV.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/soluciones" className="text-sm text-accent/70 transition-colors hover:text-accent">Soluciones →</a>
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">Programa de Empresas Fundadoras →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
