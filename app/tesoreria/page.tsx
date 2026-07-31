import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/tesoreria`;

export const metadata: Metadata = {
  title: "Tesorería para pymes",
  description:
    "Caja, cartolas bancarias, conciliación y flujo de caja proyectado, con un agente que detecta vencimientos y genera alertas antes de que el problema te alcance.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Tesorería para pymes | LAV Systems",
    description:
      "Caja, cartolas y flujo de caja proyectado, con un agente de tesorería que genera alertas antes de que el problema te alcance.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesorería para pymes | LAV Systems",
    description:
      "Caja, cartolas y flujo de caja proyectado, con un agente de tesorería que genera alertas antes de que el problema te alcance.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Tesorería para pymes",
      description:
        "Módulo de tesorería con cuentas bancarias, conciliación y flujo de caja proyectado, apoyado por un agente que detecta vencimientos y genera alertas.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Tesorería para pymes | LAV Systems",
      description:
        "Caja, cartolas bancarias, conciliación y flujo de caja proyectado, con un agente que genera alertas.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const modulo = [
  { title: "Cuentas bancarias centralizadas", desc: "Todas tus cuentas en un solo lugar, no en cartolas sueltas por correo." },
  { title: "Importación de cartolas", desc: "Carga de movimientos bancarios sin duplicar registros." },
  { title: "Conciliación por reglas", desc: "Cruce de movimientos bancarios contra documentos, con reglas claras." },
  { title: "Flujo de caja proyectado", desc: "Cuentas por cobrar y por pagar consolidadas para anticipar la caja." },
];

const agente = [
  "Revisa caja y controla compromisos de pago",
  "Proyecta flujo de caja",
  "Detecta vencimientos",
  "Ayuda a conciliar movimientos bancarios",
  "Genera alertas",
];

export default function TesoreriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Tesorería</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Visibilidad de caja <span className="text-accent">antes</span> de que el problema te alcance
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              Cuentas bancarias, conciliación y flujo de caja proyectado, con un agente que revisa
              compromisos y te avisa antes de que sea tarde para actuar.
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
              Tesorería en uso real, conectada a tu contabilidad — no una planilla de caja aparte.
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
              <h2 className="text-2xl font-bold text-white sm:text-3xl">El agente de tesorería</h2>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">En uso real</span>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {agente.map((t) => (
                <li key={t} className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Ordena tu tesorería</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Partimos con un diagnóstico para ver cómo se conectan tus cuentas y compromisos a LAV.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/contabilidad" className="text-sm text-accent/70 transition-colors hover:text-accent">Contabilidad →</a>
              <a href="/soluciones" className="text-sm text-accent/70 transition-colors hover:text-accent">Todas las soluciones →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
