import { GlowCard } from "@/components/GlowCard";

const examples = [
  {
    command: "Dime qué pagos importantes vencen esta semana.",
    action: "El agente de tesorería revisa compromisos y vencimientos registrados y ordena los más relevantes.",
  },
  {
    command: "Prepara un resumen de caja, ventas y gastos para la reunión de gerencia.",
    action: "El agente de gerencia consolida indicadores desde contabilidad y tesorería en un solo reporte.",
  },
  {
    command: "Revisa los documentos recibidos y dime cuáles requieren atención.",
    action: "El agente contable clasifica los documentos tributarios y marca los que necesitan revisión.",
  },
  {
    command: "Muéstrame las diferencias entre las remuneraciones de este mes y el anterior.",
    action: "El agente de remuneraciones compara novedades y cálculos, con validación humana antes de cerrar.",
  },
  {
    command: "Compara el resultado de cada faena con su presupuesto.",
    action: "El agente operacional consolida reportes de terreno, en activación con las empresas fundadoras.",
  },
];

export default function UseCasesExamplesSection() {
  return (
    <section id="ejemplos" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Ejemplos de uso</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Así se conversa con tu empresa
          </h2>
          <p className="text-base leading-relaxed text-white/55">
            Le pides algo al agente empresarial de LAV en lenguaje simple. Detrás, un agente
            especializado trabaja sobre módulos y datos reales para responder.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {examples.map((e) => (
            <GlowCard key={e.command} glowColor="blue" className="p-7">
              <p className="mb-4 text-base font-medium leading-snug text-white">
                &ldquo;{e.command}&rdquo;
              </p>
              <div className="flex items-start gap-2.5 border-t border-white/10 pt-4">
                <span className="mt-0.5 text-accent">→</span>
                <p className="text-sm leading-relaxed text-white/55">{e.action}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
