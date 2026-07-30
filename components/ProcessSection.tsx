import { GlowCard } from "@/components/GlowCard";

const steps = [
  { n: "01", title: "Diagnóstico empresarial", desc: "Levantamos el problema real del negocio: procesos, datos y prioridades." },
  { n: "02", title: "Mapa de procesos y datos", desc: "Identificamos qué información existe, dónde vive y dónde se rompe la cadena." },
  { n: "03", title: "Configuración del sistema", desc: "Configuramos módulos, permisos e integraciones según cómo opera tu empresa." },
  { n: "04", title: "Activación de módulos y agentes", desc: "Ponemos en marcha los módulos y los agentes especializados sobre tus datos reales." },
  { n: "05", title: "Producción, soporte y mejora", desc: "El sistema queda en uso real, con soporte directo y mejora continua." },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Implementación</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Primero el problema. Después la tecnología.
          </h2>
          <p className="text-base leading-relaxed text-white/50">
            Trabajamos con un método claro: entendemos antes de proponer, y proponemos antes de construir.
            Cinco etapas hasta que el sistema queda operando de verdad.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <GlowCard key={s.n} glowColor="blue" className="p-7">
              <span className="mb-5 block font-mono text-3xl font-bold text-accent/40">{s.n}</span>
              <h3 className="mb-3 font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
