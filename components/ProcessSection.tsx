import { GlowCard } from "@/components/GlowCard";

const steps = [
  { n: "01", title: "Entendemos el negocio", desc: "Conversamos con quienes conocen el negocio por dentro: dueños, gerentes y equipos operativos." },
  { n: "02", title: "Detectamos el dolor", desc: "Identificamos los procesos que generan pérdidas de tiempo, errores o falta de control." },
  { n: "03", title: "Medimos el costo del problema", desc: "Cuantificamos el impacto real: horas perdidas, errores frecuentes, decisiones lentas." },
  { n: "04", title: "Revisamos procesos y datos", desc: "Analizamos qué información existe, cómo fluye y dónde se rompe la cadena." },
  { n: "05", title: "Diseñamos una solución simple", desc: "Proponemos la solución más directa: sin sobreingeniería, sin tecnología innecesaria." },
  { n: "06", title: "Construimos un MVP", desc: "Desarrollamos una primera versión funcional para validar con el equipo real." },
  { n: "07", title: "Lo llevamos a producción", desc: "Desplegamos el sistema, lo integramos con los flujos existentes y capacitamos al equipo." },
  { n: "08", title: "Medimos impacto y mejoramos", desc: "Revisamos resultados, recogemos feedback y seguimos iterando sobre lo que funciona." },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Proceso</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Primero el problema. Después la tecnología.
          </h2>
          <p className="text-base leading-relaxed text-white/50">
            Trabajamos con un método claro: entendemos antes de proponer, y proponemos antes de construir.
            Así llegamos a soluciones que realmente funcionan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <GlowCard key={s.n} customSize glowColor="blue" className="p-7">
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
