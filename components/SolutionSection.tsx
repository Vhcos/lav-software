import { GlowCard } from "@/components/GlowCard";

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
    <section className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">La solución</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Diseñamos sistemas simples para problemas concretos
          </h2>
          <p className="text-base leading-relaxed text-white/55">
            No desarrollamos software por desarrollar. Convertimos problemas reales de empresas en sistemas
            inteligentes, simples y productivos. Partimos entendiendo el dolor del negocio y construimos
            soluciones digitales listas para operar.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <GlowCard key={s.num} glowColor="blue" className="p-7">
              <span className="mb-5 block font-mono text-3xl font-bold text-accent/40">{s.num}</span>
              <h3 className="mb-3 font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
