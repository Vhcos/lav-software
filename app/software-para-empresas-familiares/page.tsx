import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/software-para-empresas-familiares`;

export const metadata: Metadata = {
  title: "Software para Empresas Familiares",
  description:
    "Software a medida para empresas familiares en Chile. Orden operacional, control de gestión, cobranza, procesos internos y menos dependencia de personas clave.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Software para Empresas Familiares | LAV Systems",
    description:
      "Orden operacional y control para empresas familiares en Chile. Menos dependencia de personas clave, más visibilidad sobre el negocio.",
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
      name: "Software para Empresas Familiares",
      description:
        "Software de gestión a medida para empresas familiares en Chile: orden operacional, cobranza, control de gestión, reportes automáticos y procesos que no dependen de personas clave.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Software para Empresas Familiares | LAV Systems",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const symptoms = [
  "Si falta una persona clave, el proceso se frena o se pierde.",
  "La cobranza depende de que alguien revise el Excel y se acuerde de cobrar.",
  "No hay visibilidad real de qué está haciendo cada área del negocio.",
  "Tomar decisiones es difícil porque los datos están en distintas personas.",
];

const builds = [
  {
    title: "Control de cobranza y pagos",
    desc: "Seguimiento de facturas, plazos de pago, alertas de vencimiento y reportes de cartera — sin que nadie tenga que recordar revisar el Excel.",
  },
  {
    title: "Gestión de cotizaciones y ventas",
    desc: "Cotizaciones generadas desde el sistema, seguimiento de propuestas, estados de avance y conversión a órdenes de trabajo o contratos.",
  },
  {
    title: "Control de gestión por área",
    desc: "KPIs de cada área del negocio en un dashboard consolidado: producción, ventas, cobranza, costos y márgenes — actualizados sin trabajo manual.",
  },
  {
    title: "Reportes automáticos para directorio",
    desc: "Informe mensual generado automáticamente con los indicadores que el directorio necesita — sin que alguien lo tenga que armar.",
  },
  {
    title: "Flujos de aprobación internos",
    desc: "Compras, gastos, solicitudes y cambios con flujos de aprobación claros, trazables y sin depender de correos ni conversaciones informales.",
  },
  {
    title: "Institucionalización del conocimiento",
    desc: "Procesos documentados en el sistema: quién hace qué, cuándo y cómo — para que el negocio funcione igual con o sin la persona que siempre lo hacía.",
  },
];

const related = [
  { label: "Software a medida con IA", href: "/software-a-medida-ia" },
  { label: "Automatización de procesos", href: "/automatizacion-procesos" },
  { label: "Diagnóstico IA 360", href: "/diagnostico-ia-360" },
];

export default function SoftwareParaEmpresasFamiliares() {
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
                "radial-gradient(80% 60% at 35% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Empresas familiares · Gestión · Chile
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Software para empresas familiares —{" "}
              <span className="text-accent">orden operacional</span> sin depender de personas clave
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              En la empresa familiar, el conocimiento vive en las personas. Cuando alguien falta,
              falta el proceso. Construimos sistemas que institucionalizan ese conocimiento: flujos
              claros, datos ordenados y reportes automáticos para que el negocio funcione igual con
              o sin la persona de siempre.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              El talón de Aquiles de la empresa familiar: el conocimiento en personas
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Las empresas familiares son eficientes, ágiles y conocen su negocio como nadie.
              El problema es cuando ese conocimiento está concentrado en 2–3 personas que hacen
              de todo. El software a medida para empresas familiares resuelve esa dependencia.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {symptoms.map((s) => (
                <div
                  key={s}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Qué construimos para tu empresa familiar
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Cada sistema empieza por entender cómo opera hoy tu empresa: qué procesos dependen
              de quién, dónde está la información crítica y qué hay que ordenar primero para
              generar el mayor impacto.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {builds.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-white/8 bg-white/[0.04] p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="font-semibold text-white">{b.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Tu empresa, funcionando con o sin la persona clave
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              El primer paso es entender dónde está concentrado el conocimiento y qué procesos
              son más frágiles. El Diagnóstico IA 360 lo hace en 1–2 semanas.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
            <p className="mt-5 text-xs text-white/25">
              <a href="mailto:contacto@lav.software" className="text-white/40 hover:text-white/60">
                contacto@lav.software
              </a>
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              {related.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="text-sm text-accent/70 transition-colors hover:text-accent"
                >
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
