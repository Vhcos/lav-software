import { TrackedLink } from "@/components/TrackedLink";

const benefits = [
  "Implementación acompañada, paso a paso",
  "Configuración según tu negocio",
  "Acceso anticipado a nuevos agentes y módulos",
  "Participación en las prioridades de desarrollo",
  "Soporte directo con el equipo de LAV",
  "Condiciones comerciales iniciales",
];

export default function FoundersProgramSection() {
  return (
    <section id="fundadores" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-navy px-8 py-14 md:px-14 md:py-16">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Programa de Empresas Fundadoras</p>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Programa de Empresas Fundadoras LAV
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/60">
                Estamos seleccionando un grupo limitado de pymes para implementar LAV de manera
                guiada, adaptar los agentes a sus procesos y medir resultados reales.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <TrackedLink
                  href="#contacto"
                  event="founders_program_clicked"
                  className="inline-flex h-12 items-center rounded-xl bg-accent px-7 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
                >
                  Quiero ordenar mi empresa
                </TrackedLink>
                <TrackedLink
                  href="/programa-fundadores"
                  event="founders_program_clicked"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Conocer el programa completo →
                </TrackedLink>
              </div>
            </div>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
