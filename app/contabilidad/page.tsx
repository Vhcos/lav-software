import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/contabilidad`;

export const metadata: Metadata = {
  title: "Contabilidad asistida por IA",
  description:
    "Ledger contable en vivo, documentos tributarios sincronizados con el SII y un agente que revisa, clasifica y explica — sin reemplazar a tu contador.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Contabilidad asistida por IA | LAV Systems",
    description:
      "Ledger contable en vivo, sincronización con el SII y un agente contable que revisa, clasifica y explica.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contabilidad asistida por IA | LAV Systems",
    description:
      "Ledger contable en vivo, sincronización con el SII y un agente contable que revisa, clasifica y explica.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Contabilidad asistida por IA",
      description:
        "Módulo de contabilidad con ledger de partida doble, sincronización de documentos tributarios vía SII y un agente que revisa, clasifica y explica.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Contabilidad asistida por IA | LAV Systems",
      description:
        "Ledger contable en vivo, documentos tributarios sincronizados con el SII y un agente que revisa, clasifica y explica.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const modulo = [
  { title: "Ledger de partida doble", desc: "Plan de cuentas chileno y registro contable ordenado por período." },
  { title: "Documentos tributarios sincronizados", desc: "Facturas y boletas electrónicas conectadas directo desde el SII." },
  { title: "Libros contables", desc: "Los libros obligatorios se arman desde datos reales, no desde planillas paralelas." },
  { title: "Formulario F29", desc: "La información para tu declaración mensual queda ordenada y trazable." },
];

const agente = [
  "Revisa documentos tributarios",
  "Propone clasificaciones",
  "Detecta inconsistencias",
  "Apoya conciliaciones",
  "Prepara información para cierres",
  "Explica estados financieros en lenguaje simple",
];

export default function ContabilidadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Contabilidad</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Contabilidad <span className="text-accent">ordenada</span>, con un agente que te ayuda a cerrar más rápido
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Un ledger contable real, sincronizado con el SII, y un agente que revisa documentos,
              propone clasificaciones y prepara la información para el cierre.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">El módulo</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La base contable de LAV está en uso real: no es una demo, es el módulo más maduro de la plataforma.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {modulo.map((m) => (
                <div key={m.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{m.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">El agente contable</h2>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">En uso real</span>
            </div>
            <ul className="mb-6 grid gap-3 sm:grid-cols-2">
              {agente.map((t) => (
                <li key={t} className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-white/40">Trabaja junto a tu contador — no lo reemplaza.</p>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ordena tu contabilidad</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Partimos con un diagnóstico para ver cómo se conecta tu contabilidad actual a LAV.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/tesoreria" className="text-sm text-accent/70 transition-colors hover:text-accent">Tesorería →</a>
              <a href="/soluciones" className="text-sm text-accent/70 transition-colors hover:text-accent">Todas las soluciones →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
