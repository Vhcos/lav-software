import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/agentes/documentos`;

export const metadata: Metadata = {
  title: "Agente documental",
  description:
    "El agente documental de LAV clasifica documentos, extrae información y detecta vencimientos. En activación con las empresas del Programa de Empresas Fundadoras.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Agente documental | LAV Systems",
    description:
      "Clasifica documentos, extrae información y detecta vencimientos. En activación con las empresas fundadoras.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente documental | LAV Systems",
    description:
      "Clasifica documentos, extrae información y detecta vencimientos. En activación con las empresas fundadoras.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agente documental",
      description:
        "Agente que recibe, clasifica y extrae información de documentos, identifica vencimientos y permite consultar antecedentes con respaldo.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Agente documental | LAV Systems",
      description: "Clasifica documentos, extrae información y detecta vencimientos.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const tareas = [
  "Recibe y clasifica documentos",
  "Extrae información relevante",
  "Identifica vencimientos",
  "Permite consultar antecedentes con respaldo",
];

const ejemplos = [
  "Revisa los documentos recibidos y dime cuáles requieren atención.",
  "¿Qué documentos faltan para cerrar este proceso?",
];

export default function AgenteDocumentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Agente · Documentos</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Nunca más buscar un documento <span className="text-accent">a ciegas</span>
            </h1>
            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/60">
              El agente documental recibe, clasifica y extrae información de tus documentos, y te
              avisa qué está por vencer.
            </p>
            <span className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60">En implementación guiada</span>
            <div>
              <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
                Agendar diagnóstico empresarial
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Qué hace</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Los documentos se acumulan sin que nadie sepa qué falta o qué está por vencer. Este
              agente se activa y se adapta a tu operación durante la implementación guiada.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {tareas.map((t) => (
                <div key={t} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm leading-relaxed text-slate-600">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Ejemplos de uso</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ejemplos.map((e) => (
                <div key={e} className="rounded-xl border border-white/8 bg-white/[0.04] p-5">
                  <p className="text-sm italic leading-relaxed text-white/70">&ldquo;{e}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Súmate al Programa de Empresas Fundadoras</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El agente documental se configura junto a las primeras empresas que implementan LAV.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/agentes" className="text-sm text-accent/70 transition-colors hover:text-accent">Todos los agentes →</a>
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">Programa de Empresas Fundadoras →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
