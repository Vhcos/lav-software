import { DottedSurface } from "@/components/DottedSurface";

const before = ["Excel por persona", "WhatsApp operacional", "Correos con adjuntos", "Reportes manuales"];
const after  = ["Panel unificado", "Alertas automáticas", "Datos en tiempo real", "Reportes al instante"];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center bg-navy pt-16">
      <DottedSurface />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">

        {/* Copy */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software · Automatización · IA · IoT
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Software inteligente a medida para resolver{" "}
            <span className="text-accent">problemas reales</span> de empresas en Chile
          </h1>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
            Ayudamos a empresas que operan con Excel, correos, WhatsApp y procesos manuales
            a convertir información dispersa en sistemas simples, automatizados y listos para operar.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-7 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#proceso"
              className="inline-flex h-12 items-center rounded-xl border border-white/15 px-7 text-sm text-white/70 transition-colors hover:bg-white/5"
            >
              Ver cómo trabajamos
            </a>
          </div>

          <p className="text-xs uppercase tracking-widest text-white/25">
            Diagnóstico · Software a medida · Automatización · Datos · IA · IoT
          </p>
        </div>

        {/* Visual: Before / After */}
        <div className="hidden md:block">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <p className="mb-5 text-xs uppercase tracking-widest text-white/25">
              Transformación típica
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-3 text-xs text-white/30">Antes</p>
                <div className="space-y-2">
                  {before.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-red-500/10 bg-red-500/5 px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/50" />
                      <span className="text-xs leading-snug text-white/35">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs text-white/30">Después</p>
                <div className="space-y-2">
                  {after.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2.5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-xs leading-snug text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
              <span className="text-xs text-white/20">LAV Systems</span>
              <span className="text-xs font-medium text-accent">→ Software inteligente a medida</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
