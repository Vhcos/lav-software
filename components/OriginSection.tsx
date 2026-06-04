const names = ["Laura", "Agustina", "Valentina", "Victoria"];

export default function OriginSection() {
  return (
    <section id="origen" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Origen</p>
        <h2 className="mb-10 text-3xl font-bold text-navy sm:text-4xl">El origen de LAV</h2>

        {/* Letters */}
        <div className="mx-auto mb-4 flex items-center justify-center gap-3">
          {["L", "A", "V"].map((letter) => (
            <div
              key={letter}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-lg font-bold text-white"
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Names — imperceptible */}
        <p className="mb-10 text-sm text-black/[0.05]">
          {names.join(" · ")}
        </p>

        {/* New body */}
        <div className="space-y-5 text-left text-base leading-relaxed text-slate-500 md:text-lg">
          <p>
            LAV Systems nace de una convicción: la tecnología solo tiene valor cuando resuelve un problema real.
          </p>
          <p>
            Después de años trabajando en finanzas, estrategia, operaciones y control de gestión, vi un patrón
            repetido en muchas empresas: procesos manuales, datos dispersos, reportes lentos y decisiones
            tomadas con poca visibilidad.
          </p>
          <p>
            Hoy la inteligencia artificial, el software libre y las herramientas modernas permiten construir
            soluciones a medida de forma más rápida, eficiente y accesible. LAV Systems nace para aprovechar
            ese cambio y convertir dolores concretos de negocio en sistemas simples, inteligentes y listos
            para operar.
          </p>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-10">
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {["Criterio empresarial", "Software libre", "IA aplicada", "Producción real"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs italic text-slate-300">
            Toda marca tiene una historia. Algunas se revelan con el tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}
