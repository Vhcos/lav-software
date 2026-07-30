import { GlowCard } from "@/components/GlowCard";

const controls = [
  {
    title: "Permisos por usuario",
    desc: "Cada persona ve y hace solo lo que su rol permite dentro de la empresa.",
  },
  {
    title: "Separación entre empresas",
    desc: "Arquitectura multiempresa: los datos de una empresa nunca se mezclan con los de otra.",
  },
  {
    title: "Aprobación humana",
    desc: "Las acciones sensibles quedan pendientes de revisión antes de ejecutarse.",
  },
  {
    title: "Registro de acciones",
    desc: "Cada sugerencia y cada acción del agente queda registrada: quién la pidió, quién la aprobó.",
  },
  {
    title: "Evidencia y trazabilidad",
    desc: "Puedes reconstruir el camino completo de cualquier decisión o cálculo.",
  },
  {
    title: "Cifrado y control de datos",
    desc: "La información de tu empresa está cifrada y bajo tu control, no expuesta a terceros.",
  },
];

export default function SecuritySection() {
  return (
    <section id="seguridad" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Seguridad y control</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            La inteligencia artificial no trabaja sin límites.
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            La IA propone y ejecuta dentro de reglas. Las decisiones sensibles siguen bajo control humano.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {controls.map((c) => (
            <GlowCard key={c.title} light glowColor="blue" className="p-7">
              <h3 className="mb-2 font-semibold text-navy">{c.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{c.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
