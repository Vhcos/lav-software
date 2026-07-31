import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/plataforma`;

export const metadata: Metadata = {
  title: "Plataforma empresarial",
  description:
    "La plataforma empresarial de LAV: datos confiables, procesos estructurados, módulos determinísticos, permisos, integraciones y trazabilidad. La base sobre la que trabajan los agentes.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Plataforma empresarial LAV | LAV Systems",
    description:
      "Datos confiables, procesos estructurados y módulos empresariales. La base sobre la que trabajan los agentes de LAV.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plataforma empresarial LAV | LAV Systems",
    description:
      "Datos confiables, procesos estructurados y módulos empresariales. La base sobre la que trabajan los agentes de LAV.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Plataforma empresarial LAV",
      description:
        "Plataforma modular con datos confiables, procesos estructurados, permisos, integraciones y trazabilidad, sobre la que trabajan los agentes especializados de LAV.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Plataforma empresarial | LAV Systems",
      description:
        "La plataforma empresarial de LAV: datos confiables, procesos estructurados, módulos determinísticos, permisos, integraciones y trazabilidad.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const pillars = [
  {
    title: "Datos confiables",
    desc: "Una sola fuente de verdad para tu empresa, en vez de planillas y correos que se contradicen entre sí.",
  },
  {
    title: "Procesos estructurados",
    desc: "Flujos definidos para contabilidad, tesorería, remuneraciones, operaciones y documentos — no formularios sueltos.",
  },
  {
    title: "Módulos determinísticos",
    desc: "Cálculos y registros que siguen reglas de negocio claras y verificables, no respuestas probabilísticas.",
  },
  {
    title: "Permisos por usuario",
    desc: "Cada persona ve y hace solo lo que su rol permite, dentro de su empresa.",
  },
  {
    title: "Integraciones",
    desc: "Se conecta con las herramientas que ya usas: bancos, sistemas contables, documentos tributarios.",
  },
  {
    title: "Trazabilidad completa",
    desc: "Cada dato, cada cálculo y cada acción queda registrado: qué pasó, cuándo y quién lo autorizó.",
  },
];

const modules = [
  "Contabilidad",
  "Tesorería",
  "Remuneraciones",
  "Finanzas",
  "Operaciones",
  "Documentos",
  "Reportes",
  "Administración",
];

export default function PlataformaPage() {
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
                "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Plataforma
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              La plataforma que hace{" "}
              <span className="text-accent">confiable</span> el trabajo de tus agentes
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Antes de conversar con un agente, LAV ordena tu empresa: datos, procesos, módulos,
              permisos, integraciones y trazabilidad. Sin esa base, ningún agente puede trabajar
              sobre información real.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              Seis pilares de la plataforma
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              No es un chatbot conectado a nada. Es la base estructural sobre la que los agentes
              analizan, recomiendan y ejecutan.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Módulos empresariales
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Los módulos son las herramientas que usan los agentes. No desaparecen detrás de la
              conversación: siguen ahí, ordenados y disponibles.
            </p>
            <div className="flex flex-wrap gap-3">
              {modules.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/70"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Bridge to agents */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy sm:text-3xl">
              La plataforma hace confiable el trabajo.
              <br className="hidden sm:block" /> Los agentes hacen más simple la interacción.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-500">
              Conoce al agente empresarial de LAV y al equipo de agentes especializados que
              trabajan sobre esta plataforma.
            </p>
            <a
              href="/agentes"
              className="inline-flex h-12 items-center rounded-xl bg-navy px-8 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
            >
              Conocer a los agentes
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Empieza por ordenar tu plataforma
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              En el diagnóstico empresarial revisamos qué datos y procesos tienes hoy, y cómo
              conectarlos en la plataforma de LAV.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/agentes" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Equipo de agentes →
              </a>
              <a href="/casos" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Casos →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
