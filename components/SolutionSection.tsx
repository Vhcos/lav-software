import { GlowCard } from "@/components/GlowCard";

const platform = [
  "Datos confiables, en un solo lugar",
  "Procesos y flujos estructurados",
  "Módulos empresariales determinísticos",
  "Permisos por usuario y por empresa",
  "Integraciones con tus herramientas actuales",
  "Trazabilidad completa de cada acción",
];

const agentTeam = [
  "Analiza tu información en segundos",
  "Explica qué pasó y por qué",
  "Coordina tareas entre módulos",
  "Recomienda el siguiente paso",
  "Prepara reportes y documentación",
  "Ejecuta tareas dentro de reglas y permisos",
];

export default function SolutionSection() {
  return (
    <section id="plataforma" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Qué es LAV</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Un sistema empresarial con un equipo de agentes trabajando contigo
          </h2>
          <p className="text-base leading-relaxed text-white/55">
            LAV combina una plataforma empresarial modular con un equipo de agentes especializados
            que ayuda con contabilidad, tesorería, remuneraciones, operaciones y documentos. No es
            un chatbot aislado: es un sistema que opera sobre tus procesos reales.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <GlowCard glowColor="blue" className="p-8">
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">Plataforma empresarial</p>
            <ul className="space-y-3.5">
              {platform.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </GlowCard>

          <GlowCard glowColor="blue" className="p-8">
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">Equipo de agentes</p>
            <ul className="space-y-3.5">
              {agentTeam.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </GlowCard>
        </div>

        <p className="mt-12 max-w-2xl text-lg font-semibold text-white">
          La plataforma hace confiable el trabajo. Los agentes hacen más simple y productiva la interacción.
        </p>
      </div>
    </section>
  );
}
