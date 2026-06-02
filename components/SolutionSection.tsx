const steps = [
  {
    num: "01",
    title: "Entendemos el dolor",
    desc: "Levantamos el problema real del negocio antes de hablar de tecnología.",
  },
  {
    num: "02",
    title: "Diseñamos el flujo",
    desc: "Proponemos una solución simple, aterrizada y lista para construir.",
  },
  {
    num: "03",
    title: "Desarrollamos la aplicación",
    desc: "Construimos software a medida con las tecnologías adecuadas para el problema.",
  },
  {
    num: "04",
    title: "Lo llevamos a producción",
    desc: "Dejamos el sistema funcionando, estable y en uso real por el equipo.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">La solución</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Diseñamos sistemas simples para problemas concretos
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            No desarrollamos software por desarrollar. Convertimos problemas reales de empresas en sistemas
            inteligentes, simples y productivos. Partimos entendiendo el dolor del negocio y construimos
            soluciones digitales listas para operar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-6 translate-x-full bg-slate-200 lg:block" />
              )}
              <span className="mb-4 block font-mono text-2xl font-bold text-accent/40">{s.num}</span>
              <h3 className="mb-2 font-semibold text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
