import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-empresas-familiares`;

export const metadata: Metadata = {
  title: "Agente empresarial para Empresas Familiares",
  description:
    "LAV consolida contabilidad, tesorería y remuneraciones, con un agente de gerencia que da visibilidad del negocio sin depender de las personas clave de siempre.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Agente empresarial para Empresas Familiares | LAV Systems",
    description:
      "Contabilidad, tesorería y remuneraciones consolidadas, con un agente de gerencia que da visibilidad del negocio.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agente empresarial para Empresas Familiares | LAV Systems",
    description:
      "Contabilidad, tesorería y remuneraciones consolidadas, con un agente de gerencia que da visibilidad del negocio.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "LAV para Empresas Familiares",
      description:
        "Plataforma empresarial con agentes especializados para empresas familiares en Chile: contabilidad, tesorería, remuneraciones y un agente de gerencia que consolida la visión del negocio.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Agente empresarial para Empresas Familiares | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Si falta una persona clave, el proceso se frena o se pierde.",
  "La cobranza depende de que alguien revise el Excel y se acuerde de cobrar.",
  "No hay visibilidad real de qué está haciendo cada área del negocio.",
  "Tomar decisiones es difícil porque los datos están repartidos entre distintas personas.",
];

const soluciones = [
  { title: "Contabilidad conectada al SII", desc: "Ledger real y documentos tributarios sincronizados, con un agente que revisa y clasifica.", badge: "En uso real" },
  { title: "Tesorería y cobranza", desc: "Cuentas por cobrar consolidadas, con alertas de vencimiento — sin que nadie tenga que recordar revisar el Excel.", badge: "En uso real" },
  { title: "Remuneraciones", desc: "Cálculo, liquidaciones y Previred, con validación humana en cada cierre.", badge: "En uso real" },
  { title: "Agente de gerencia", desc: "Impulsado por Casiani: consolida indicadores de todas las áreas y explica qué cambió, sin que dependas de la persona que siempre lo sabe.", badge: "En uso real" },
];

const related = [
  { label: "Agente de gerencia", href: "/agentes/gerencia" },
  { label: "Programa de Empresas Fundadoras", href: "/programa-fundadores" },
  { label: "Todas las soluciones", href: "/soluciones" },
];

export default function SoftwareParaEmpresasFamiliares() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 35% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Empresas familiares · Gestión · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              El agente empresarial para empresas familiares —{" "}
              <span className="text-accent">orden operacional</span> sin depender de personas clave
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              En la empresa familiar, el conocimiento vive en las personas. LAV consolida
              contabilidad, tesorería y remuneraciones en un sistema, con un agente de gerencia que
              da visibilidad del negocio completo.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              El talón de Aquiles de la empresa familiar: el conocimiento en personas
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Las empresas familiares son eficientes, ágiles y conocen su negocio como nadie. El
              problema es cuando ese conocimiento está concentrado en 2–3 personas que hacen de todo.
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
              Empezamos por entender qué procesos dependen de quién y dónde está la información
              crítica que hay que ordenar primero.
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
              Tu empresa, funcionando con o sin la persona clave
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El primer paso es un diagnóstico empresarial: entender dónde está concentrado el
              conocimiento y qué procesos son más frágiles.
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
