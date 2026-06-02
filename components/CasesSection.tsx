const cases = [
  {
    name: "aret3",
    area: "Software con IA",
    desc: "Plataforma para evaluar ideas y oportunidades de negocio con inteligencia artificial. Análisis estructurado de viabilidad, mercado y riesgo.",
  },
  {
    name: "SEEConsulting",
    area: "Gestión estratégica",
    desc: "Plataforma para gestión de estrategia empresarial: KPIs, roadmap, seguimiento de iniciativas y ejecución. Diseñada para gerencia y directorio.",
  },
  {
    name: "Casia",
    area: "Operaciones · SGI · Documentos",
    desc: "Plataforma operacional con reportes automáticos, sistema de gestión integrado (SGI), integración con SharePoint, flujos de aprobación y alertas internas.",
  },
  {
    name: "Blizcoms / SuperBet",
    area: "API · Datos deportivos",
    desc: "Motor y API de datos deportivos y odds en tiempo real. Integración de múltiples fuentes, procesamiento y entrega de datos a plataformas de apuestas.",
  },
  {
    name: "IoT Cachimba y Dantino",
    area: "IoT · Operaciones en terreno",
    desc: "Soluciones conectadas para capturar datos operativos desde terreno. Sensores, trazabilidad, monitoreo y reportes automáticos para operaciones industriales.",
  },
];

export default function CasesSection() {
  return (
    <section id="casos" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Experiencia</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Experiencia construyendo software real
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Proyectos reales, en producción, resolviendo problemas concretos de empresas.
            Sin métricas inventadas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-navy">{c.name}</h3>
                <span className="shrink-0 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/60">
                  {c.area}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">{c.desc}</p>
            </div>
          ))}

          {/* Spacer card */}
          <div className="hidden rounded-2xl border border-dashed border-slate-200 p-7 lg:flex lg:items-center lg:justify-center">
            <p className="text-center text-sm text-slate-400">
              Más proyectos en desarrollo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
