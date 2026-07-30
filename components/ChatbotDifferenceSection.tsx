const chatbot = [
  "Responde preguntas",
  "No conoce tus procesos",
  "No ejecuta sobre datos confiables",
  "Vive aislado de tu operación",
  "No tiene trazabilidad empresarial",
];

const lav = [
  "Trabaja sobre módulos reales",
  "Consulta datos autorizados",
  "Coordina procesos",
  "Ejecuta acciones controladas",
  "Registra cada decisión",
];

export default function ChatbotDifferenceSection() {
  return (
    <section id="diferencia" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">La diferencia</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Un chatbot responde preguntas. LAV trabaja sobre los procesos reales de tu empresa.
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Los agentes de LAV no trabajan aislados. Operan sobre módulos, datos, permisos,
            integraciones y procesos estructurados.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8">
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-slate-400">Chatbot genérico</p>
            <ul className="space-y-3.5">
              {chatbot.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-500">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-accent/20 bg-navy p-8">
            <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">LAV</p>
            <ul className="space-y-3.5">
              {lav.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
