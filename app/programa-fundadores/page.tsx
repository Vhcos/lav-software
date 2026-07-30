import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/programa-fundadores`;

export const metadata: Metadata = {
  title: "Programa de Empresas Fundadoras",
  description:
    "Implementamos LAV de forma guiada en un grupo limitado de pymes, adaptando los agentes a sus procesos reales, con soporte directo y condiciones comerciales iniciales.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Programa de Empresas Fundadoras | LAV Systems",
    description:
      "Un grupo limitado de pymes implementa LAV de manera guiada, adapta los agentes a sus procesos y mide resultados reales.",
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
      name: "Programa de Empresas Fundadoras LAV",
      description:
        "Implementación guiada de la plataforma empresarial LAV para un grupo limitado de pymes, con configuración según el negocio y soporte directo.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Programa de Empresas Fundadoras | LAV Systems",
      description:
        "Implementamos LAV de forma guiada en un grupo limitado de pymes, con soporte directo y condiciones comerciales iniciales.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const benefits = [
  {
    title: "Implementación acompañada",
    desc: "Te acompañamos paso a paso: diagnóstico, mapa de procesos, configuración y activación.",
  },
  {
    title: "Configuración según tu negocio",
    desc: "Los agentes se adaptan a cómo opera realmente tu empresa, no al revés.",
  },
  {
    title: "Acceso anticipado",
    desc: "Accedes primero a nuevos agentes y módulos a medida que se activan.",
  },
  {
    title: "Participación en prioridades",
    desc: "Tu operación influye directamente en qué construimos y en qué orden.",
  },
  {
    title: "Soporte directo",
    desc: "Canal directo con el equipo de LAV, sin mesas de ayuda genéricas.",
  },
  {
    title: "Condiciones comerciales iniciales",
    desc: "Condiciones pensadas para las primeras empresas que implementan LAV.",
  },
];

const stages = [
  { n: "01", title: "Diagnóstico empresarial", desc: "Levantamos tus procesos, datos y prioridades." },
  { n: "02", title: "Mapa de procesos y datos", desc: "Definimos qué se conecta primero y por qué." },
  { n: "03", title: "Configuración del sistema", desc: "Ajustamos módulos, permisos e integraciones a tu empresa." },
  { n: "04", title: "Activación de agentes", desc: "Ponemos en marcha los agentes sobre tus datos reales." },
  { n: "05", title: "Producción y mejora conjunta", desc: "El sistema queda operando, con ajustes basados en tu uso real." },
];

export default function ProgramaFundadoresPage() {
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
              Programa de Empresas Fundadoras
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Sé una de las primeras empresas en operar con{" "}
              <span className="text-accent">un equipo de agentes propio</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Estamos seleccionando un grupo limitado de pymes para implementar LAV de manera
              guiada, adaptar los agentes a sus procesos y medir resultados reales.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Quiero ordenar mi empresa
            </a>
            <p className="mt-5 text-xs text-white/30">
              No es un piloto gratuito ni un experimento sin responsabilidad: es una implementación
              real, con acompañamiento y condiciones comerciales pensadas para las primeras empresas.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              Qué obtienes como empresa fundadora
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              No solo llegas antes: participas en cómo se construye LAV para pymes como la tuya.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stages */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Cómo es la implementación guiada
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Primero el problema. Después la tecnología. Cinco etapas, con tu equipo involucrado
              en cada una.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {stages.map((s) => (
                <div key={s.n} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <span className="mb-4 block font-mono text-2xl font-bold text-accent/40">{s.n}</span>
                  <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy sm:text-3xl">
              Para pymes que quieren dejar de operar con Excel, correos y WhatsApp
            </h2>
            <p className="text-base leading-relaxed text-slate-500">
              Buscamos empresas familiares, constructoras, servicios industriales y empresas
              medianas con procesos críticos que hoy dependen de personas clave y planillas
              dispersas — y que quieren operar desde un solo sistema.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Los cupos son limitados
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Conversemos primero en una reunión de diagnóstico para ver si tu empresa calza con
              el programa.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Quiero ordenar mi empresa
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/agentes" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Equipo de agentes →
              </a>
              <a href="/diagnostico" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Diagnóstico empresarial →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
