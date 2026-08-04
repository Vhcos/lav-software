import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/operaciones`;

export const metadata: Metadata = {
  title: "Operaciones para pymes",
  description:
    "Reportes diarios consolidados y un agente operacional que se activa y se adapta a tu negocio durante la implementación guiada con LAV.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Operaciones para pymes | LAV Systems",
    description:
      "Reportes diarios consolidados y un agente operacional que se adapta a tu negocio durante la implementación guiada.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operaciones para pymes | LAV Systems",
    description:
      "Reportes diarios consolidados y un agente operacional que se adapta a tu negocio durante la implementación guiada.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Operaciones para pymes",
      description:
        "Módulo de reportes operacionales diarios, con un agente que se activa y se adapta a la operación de cada empresa durante la implementación guiada.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Operaciones para pymes | LAV Systems",
      description:
        "Reportes diarios consolidados y un agente operacional en activación con las empresas fundadoras.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const modulo = [
  { title: "Reportes diarios", desc: "Captura estructurada de la operación del día, en vez de mensajes de WhatsApp." },
  { title: "Consolidación por período", desc: "Reportes diarios y semanales armados desde datos reales." },
  { title: "Adaptado a tu operación", desc: "El formato de reporte se configura según cómo trabaja tu empresa: sucursal, obra o faena." },
];

const agente = [
  "Consolida reportes diarios",
  "Detecta atrasos",
  "Identifica desviaciones",
  "Genera alertas",
  "Resume información de sucursales, obras o faenas",
];

export default function OperacionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Operaciones</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Terreno y gerencia <span className="text-accent">mirando los mismos números</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Reportes diarios consolidados y un agente operacional que se activa y se adapta a tu
              negocio durante la implementación guiada.
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
              La captura de reportes diarios funciona hoy. Los indicadores por industria (sucursales,
              obras, faenas) se configuran durante la implementación guiada, junto a tu equipo.
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
              <h2 className="text-2xl font-bold text-white sm:text-3xl">El agente operacional</h2>
              <span className="rounded-full bg-navy/40 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-white/60">En implementación guiada</span>
            </div>
            <ul className="mb-6 grid gap-3 sm:grid-cols-2">
              {agente.map((t) => (
                <li key={t} className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-sm italic text-white/40">Se activa y se adapta a tu operación durante la implementación guiada, junto a las empresas del Programa de Empresas Fundadoras.</p>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ordena tu operación</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Cuéntanos cómo reportas hoy tu operación y evaluamos cómo configurarla en LAV.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">Programa de Empresas Fundadoras →</a>
              <a href="/soluciones" className="text-sm text-accent/70 transition-colors hover:text-accent">Todas las soluciones →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
