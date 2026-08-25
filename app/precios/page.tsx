import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrackedLink } from "@/components/TrackedLink";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/precios`;
const appUrl = "https://app.lav.software";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Precios de LAV: 15 días de prueba, plan mensual de 5 UF + IVA, y el programa Founders de 30 UF + IVA por 12 meses para las primeras 100 empresas.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Precios | LAV Systems",
    description:
      "15 días de prueba, plan mensual de 5 UF + IVA, y el programa Founders para las primeras 100 empresas.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precios | LAV Systems",
    description:
      "15 días de prueba, plan mensual de 5 UF + IVA, y el programa Founders para las primeras 100 empresas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Precios | LAV Systems",
      description:
        "15 días de prueba, plan mensual de 5 UF + IVA, y el programa Founders de 30 UF + IVA por 12 meses para las primeras 100 empresas.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

const planes = [
  {
    id: "mensual",
    nombre: "Mensual",
    precio: "5 UF",
    sufijo: "+ IVA / mes",
    detalle: "Pago anticipado con renovación automática. Cancela cuando quieras desde tu panel.",
    cta: "Empezar trial de 15 días",
    href: `${appUrl}/registro?plan=monthly`,
    destacado: false,
  },
  {
    id: "founders",
    nombre: "Founders",
    precio: "30 UF",
    sufijo: "+ IVA / 12 meses",
    detalle: "50% de descuento sobre el valor normal de 60 UF. Limitado a las primeras 100 empresas que se suman.",
    cta: "Asegurar cupo Founders",
    href: `${appUrl}/registro?plan=founders`,
    destacado: true,
  },
];

const modulos = [
  "Contabilidad",
  "Tesorería",
  "Remuneraciones",
  "Legal y protección de datos",
  "Operaciones",
  "Inventario",
  "Contactos",
];

const preguntas = [
  {
    q: "¿Necesito una tarjeta para probar LAV?",
    a: "No. El trial de 15 días parte sin pedir medio de pago. Lo inscribes solo si decides continuar.",
  },
  {
    q: "¿Qué pasa si no hago nada al terminar el trial?",
    a: "Tu cuenta queda en pausa: los datos se conservan, pero el acceso se restringe hasta que actives un plan de pago.",
  },
  {
    q: "¿Qué incluye cada plan?",
    a: "Los mismos módulos en ambos planes. La diferencia es el precio y la duración del compromiso inicial, no las funciones disponibles.",
  },
  {
    q: "¿Qué pasa con el precio Founders después del primer año?",
    a: "El valor desde el segundo año se confirma antes de que termine tu primer período Founders, con aviso previo.",
  },
  {
    q: "¿Cómo se calcula el cobro en pesos?",
    a: "El monto en UF se convierte a CLP con el valor de la UF vigente el día del cobro, más IVA (19%).",
  },
];

export default function PreciosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Precios</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Un precio simple, sin sorpresas
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/60">
              15 días de prueba, sin tarjeta de crédito. Todos los módulos incluidos desde el primer día.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {planes.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex flex-col rounded-2xl border p-8 ${
                    plan.destacado ? "border-accent bg-navy shadow-xl shadow-accent/10" : "border-slate-200 bg-white"
                  }`}
                >
                  {plan.destacado && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      Cupos limitados a 100 empresas
                    </span>
                  )}
                  <h2 className={`text-lg font-semibold ${plan.destacado ? "text-white" : "text-navy"}`}>{plan.nombre}</h2>
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${plan.destacado ? "text-white" : "text-navy"}`}>{plan.precio}</span>
                    <span className={`text-sm ${plan.destacado ? "text-white/50" : "text-slate-400"}`}>{plan.sufijo}</span>
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${plan.destacado ? "text-white/60" : "text-slate-500"}`}>{plan.detalle}</p>
                  <TrackedLink
                    href={plan.href}
                    event="pricing_cta_clicked"
                    eventProperties={{ plan: plan.id, origen: "detalle" }}
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-colors ${
                      plan.destacado
                        ? "bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-dark"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    {plan.cta}
                  </TrackedLink>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-400">
              IVA calculado sobre el valor de la UF vigente al momento del cobro. LAV nunca almacena el número de tu tarjeta.
            </p>
          </div>
        </section>

        {/* Modules included */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Todos los módulos incluidos</h2>
            <p className="mb-8 text-base leading-relaxed text-slate-500">
              En esta primera etapa no hay planes recortados: cualquier empresa que se suma parte con acceso a todo.
            </p>
            <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
              {modulos.map((modulo) => (
                <li
                  key={modulo}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy"
                >
                  {modulo}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold text-navy sm:text-3xl">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {preguntas.map((item) => (
                <div key={item.q} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{item.q}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Prueba LAV 15 días, sin compromiso</h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Crea tu cuenta en minutos y activa todos los módulos sobre los datos reales de tu empresa.
            </p>
            <TrackedLink
              href={`${appUrl}/registro`}
              event="pricing_cta_clicked"
              eventProperties={{ plan: "trial", origen: "cta_final" }}
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Crear mi cuenta gratis
            </TrackedLink>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Programa de Empresas Fundadoras →
              </a>
              <a href="/plataforma" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Conocer la plataforma →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
