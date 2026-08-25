import { TrackedLink } from "@/components/TrackedLink";

const APP_URL = "https://app.lav.software";

const planes = [
  {
    id: "mensual",
    nombre: "Mensual",
    precio: "5 UF",
    sufijo: "+ IVA / mes",
    detalle: "Renovación automática. Cancela cuando quieras.",
    cta: "Empezar trial de 15 días",
    href: `${APP_URL}/registro?plan=monthly`,
    destacado: false,
  },
  {
    id: "founders",
    nombre: "Founders",
    precio: "30 UF",
    sufijo: "+ IVA / 12 meses",
    detalle: "50% de descuento sobre 60 UF. Solo las primeras 100 empresas.",
    cta: "Asegurar cupo Founders",
    href: `${APP_URL}/registro?plan=founders`,
    destacado: true,
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Precios</p>
          <h2 className="mb-4 text-3xl font-bold text-navy sm:text-4xl">Un precio simple, sin sorpresas</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500">
            15 días de prueba, sin tarjeta de crédito. Todos los módulos incluidos desde el primer día.
          </p>
        </div>

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
                  Cupos limitados
                </span>
              )}
              <h3 className={`text-lg font-semibold ${plan.destacado ? "text-white" : "text-navy"}`}>{plan.nombre}</h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className={`text-4xl font-bold ${plan.destacado ? "text-white" : "text-navy"}`}>{plan.precio}</span>
                <span className={`text-sm ${plan.destacado ? "text-white/50" : "text-slate-400"}`}>{plan.sufijo}</span>
              </p>
              <p className={`mt-3 text-sm leading-relaxed ${plan.destacado ? "text-white/60" : "text-slate-500"}`}>{plan.detalle}</p>
              <TrackedLink
                href={plan.href}
                event="pricing_cta_clicked"
                eventProperties={{ plan: plan.id }}
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

        <p className="mt-8 text-center text-sm text-slate-400">
          Trial de 15 días incluido en ambos planes. IVA calculado sobre el valor de la UF vigente al momento del cobro.{" "}
          <TrackedLink href="/precios" event="pricing_cta_clicked" eventProperties={{ plan: "detalle" }} className="text-accent underline hover:text-accent-dark">
            Ver detalle de precios
          </TrackedLink>
        </p>
      </div>
    </section>
  );
}
