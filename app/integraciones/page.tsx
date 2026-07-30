import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/integraciones`;

export const metadata: Metadata = {
  title: "Integraciones",
  description:
    "LAV se conecta con el SII, tus bancos, Previred y las planillas y sistemas que ya usas — sin obligarte a migrar todo de golpe.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Integraciones | LAV Systems",
    description:
      "LAV se conecta con el SII, tus bancos, Previred y las planillas y sistemas que ya usas.",
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
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Integraciones | LAV Systems",
      description: "LAV se conecta con el SII, tus bancos, Previred y las planillas y sistemas que ya usas.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const integraciones = [
  {
    title: "SII — documentos tributarios",
    badge: "En uso real",
    desc: "Facturas y boletas electrónicas sincronizadas directo desde el Servicio de Impuestos Internos, sin cargarlas a mano.",
  },
  {
    title: "Bancos — cartolas y conciliación",
    badge: "En uso real",
    desc: "Carga de cartolas bancarias para conciliar movimientos contra tus documentos. La conexión bancaria directa está en desarrollo.",
  },
  {
    title: "Previred",
    badge: "En uso real",
    desc: "El archivo mensual de remuneraciones queda listo en el formato que exige Previred.",
  },
  {
    title: "Tus planillas y sistemas actuales",
    badge: "Implementación guiada",
    desc: "Al iniciar, migramos la información relevante desde tus Excel y sistemas actuales — no partes de cero.",
  },
];

export default function IntegracionesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }} />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Integraciones</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              LAV se conecta con lo que <span className="text-accent">ya usas</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              No tienes que migrar todo de golpe. LAV se conecta al SII, a tus bancos y a Previred,
              y absorbe la información relevante de tus planillas y sistemas actuales.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {integraciones.map((i) => (
                <div key={i.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-navy">{i.title}</h3>
                    <span className="shrink-0 rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/60">{i.badge}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Revisemos qué se conecta primero en tu empresa
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              En el diagnóstico empresarial identificamos qué sistemas y planillas conectar antes.
            </p>
            <a href="/#contacto" className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark">
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/plataforma" className="text-sm text-accent/70 transition-colors hover:text-accent">Plataforma →</a>
              <a href="/soluciones" className="text-sm text-accent/70 transition-colors hover:text-accent">Todas las soluciones →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
