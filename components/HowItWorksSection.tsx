import { GlowCard } from "@/components/GlowCard";

const steps = [
  {
    num: "01",
    title: "Conectamos",
    desc: "Integramos tu información, tus procesos y las herramientas que ya usas.",
  },
  {
    num: "02",
    title: "Ordenamos",
    desc: "Convertimos datos dispersos en módulos y flujos confiables, con permisos claros.",
  },
  {
    num: "03",
    title: "Activamos agentes",
    desc: "Los agentes trabajan sobre la información real de tu empresa, dentro de reglas y permisos definidos.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Cómo funciona</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            De la información dispersa a un sistema que trabaja contigo
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Tres pasos, sin sobreingeniería: conectamos lo que ya tienes, lo ordenamos en un sistema
            confiable y activamos agentes que operan sobre esa base.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <GlowCard key={s.num} light glowColor="blue" className="p-8">
              <span className="mb-5 block font-mono text-3xl font-bold text-accent/40">{s.num}</span>
              <h3 className="mb-3 font-semibold text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
