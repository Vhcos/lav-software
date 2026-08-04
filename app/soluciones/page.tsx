import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/soluciones`;

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Todas las soluciones de LAV: contabilidad, tesorería, remuneraciones, operaciones, agentes especializados e integraciones, para pymes chilenas.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Soluciones | LAV Systems",
    description:
      "Contabilidad, tesorería, remuneraciones, operaciones, agentes especializados e integraciones, en una sola plataforma.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones | LAV Systems",
    description:
      "Contabilidad, tesorería, remuneraciones, operaciones, agentes especializados e integraciones, en una sola plataforma.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Soluciones | LAV Systems",
      description: "Todas las soluciones de LAV para pymes chilenas.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const dominios = [
  { title: "Contabilidad", href: "/contabilidad", desc: "Ledger en vivo, SII sincronizado y un agente que revisa y explica.", badge: "Disponible en piloto" },
  { title: "Tesorería", href: "/tesoreria", desc: "Caja, conciliación y flujo proyectado, con alertas antes de tiempo.", badge: "Disponible en piloto" },
  { title: "Remuneraciones", href: "/remuneraciones", desc: "Cálculo, liquidaciones y Previred, con validación humana.", badge: "Disponible en piloto" },
  { title: "Operaciones", href: "/operaciones", desc: "Reportes diarios consolidados, adaptados a tu negocio.", badge: "En implementación guiada" },
];

const otros = [
  { title: "Agente de gerencia", href: "/agentes/gerencia", desc: "Consolida indicadores y prepara reportes para gerencia." },
  { title: "Agente documental", href: "/agentes/documentos", desc: "Clasifica documentos y detecta vencimientos." },
  { title: "Integraciones", href: "/integraciones", desc: "SII, bancos, Previred y tus sistemas actuales." },
  { title: "Plataforma", href: "/plataforma", desc: "Datos, procesos, permisos y trazabilidad detrás de todo esto." },
];

const industrias = [
  { title: "Constructoras", href: "/software-para-constructoras" },
  { title: "Minería", href: "/software-para-mineria" },
  { title: "Empresas familiares", href: "/software-para-empresas-familiares" },
];

export default function SolucionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Soluciones</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Todo lo que <span className="text-accent">LAV ordena</span> en tu empresa
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Cada solución combina un módulo real de la plataforma con un agente que trabaja sobre
              esos datos.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-navy sm:text-3xl">Por dominio de negocio</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {dominios.map((d) => (
                <a key={d.href} href={d.href} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-accent/40">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-navy">{d.title}</h3>
                    <span className="shrink-0 rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/60">{d.badge}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">{d.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-navy sm:text-3xl">Agentes, integraciones y plataforma</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {otros.map((o) => (
                <a key={o.href} href={o.href} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-accent/40">
                  <h3 className="mb-2 font-semibold text-navy">{o.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{o.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-2xl font-bold text-navy sm:text-3xl">Por industria</h2>
            <div className="flex flex-wrap gap-3">
              {industrias.map((i) => (
                <a key={i.href} href={i.href} className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm text-slate-600 transition-colors hover:border-accent/40 hover:text-navy">
                  {i.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">¿Por dónde empezamos?</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              En el diagnóstico empresarial priorizamos qué solución conviene activar primero.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
