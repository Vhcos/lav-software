import { DottedSurface } from "@/components/DottedSurface";
import { TrackedLink } from "@/components/TrackedLink";

const agentPills = ["Gerencia", "Contabilidad", "Tesorería", "Remuneraciones", "Operaciones", "Documentos"];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center bg-navy pt-16">
      <DottedSurface />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">

        {/* Copy */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Plataforma empresarial agéntica · Para pymes chilenas
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            El <span className="text-accent">agente empresarial</span> para las pymes
          </h1>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            Conecta contabilidad, tesorería, remuneraciones, operaciones y datos en una sola
            plataforma, coordinada por agentes especializados que trabajan contigo.
          </p>

          <p className="mb-10 max-w-lg text-sm font-medium leading-relaxed text-accent/80">
            Menos plataformas separadas. Menos Excel. Menos trabajo manual. Más control,
            trazabilidad y mejores decisiones.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <TrackedLink
              href="#contacto"
              event="diagnostic_cta_clicked"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-7 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </TrackedLink>
            <a
              href="#como-funciona"
              className="inline-flex h-12 items-center rounded-xl border border-white/15 px-7 text-sm text-white/70 transition-colors hover:bg-white/5"
            >
              Conocer cómo funciona LAV
            </a>
          </div>

          <p className="text-xs uppercase tracking-widest text-white/25">
            Tu empresa en un solo sistema · Un equipo de agentes trabajando contigo
          </p>
        </div>

        {/* Visual: arquitectura del agente empresarial */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/25">
              Cómo opera LAV en tu empresa
            </p>

            <div className="space-y-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[11px] uppercase tracking-wide text-white/30">Tú preguntas</p>
                <p className="mt-1 text-sm text-white/70">&ldquo;¿Por qué bajó la caja esta semana?&rdquo;</p>
              </div>

              <div className="flex justify-center py-0.5">
                <svg className="h-4 w-4 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className="rounded-lg border border-accent/25 bg-accent/10 px-4 py-3">
                <p className="text-[11px] uppercase tracking-wide text-accent/70">Agente empresarial LAV</p>
                <p className="mt-1 text-sm text-white/80">Coordina a los agentes especializados</p>
              </div>

              <div className="flex justify-center py-0.5">
                <svg className="h-4 w-4 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="mb-2 text-[11px] uppercase tracking-wide text-white/30">Agentes especializados</p>
                <div className="flex flex-wrap gap-1.5">
                  {agentPills.map((a) => (
                    <span key={a} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/60">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center py-0.5">
                <svg className="h-4 w-4 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <p className="text-[11px] uppercase tracking-wide text-white/30">Módulos, datos e integraciones</p>
                <p className="mt-1 text-sm text-white/70">Tus procesos reales, con permisos y trazabilidad</p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <span className="text-xs text-white/20">LAV Systems</span>
              <span className="text-xs font-medium text-accent">→ El agente empresarial para las pymes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
