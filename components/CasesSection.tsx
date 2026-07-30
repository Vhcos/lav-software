import { GlowCard } from "@/components/GlowCard";

const cases = [
  {
    name: "aret3",
    area: "Software con IA",
    problema: "Evaluar ideas y oportunidades de negocio sin un método estructurado.",
    solucion: "Plataforma que analiza viabilidad, mercado y riesgo con inteligencia artificial.",
    capacidades: ["Software con IA", "Análisis estructurado", "Datos"],
    resultado: "Plataforma en uso real para evaluar oportunidades de negocio.",
  },
  {
    name: "SEEConsulting",
    area: "Gestión estratégica",
    problema: "El seguimiento de la estrategia vivía en presentaciones sueltas, sin trazabilidad.",
    solucion: "Plataforma de gestión estratégica con KPIs, roadmap y seguimiento de iniciativas para gerencia y directorio.",
    capacidades: ["Control de gestión", "Reportes", "IA aplicada (Casiani)"],
    resultado: "Base directa del agente de gerencia que hoy integra LAV.",
  },
  {
    name: "Casia",
    area: "Operaciones · SGI · Documentos",
    problema: "Reportes operacionales manuales y documentación dispersa entre sistemas.",
    solucion: "Plataforma operacional con reportes automáticos, sistema de gestión integrado (SGI), integración con SharePoint y flujos de aprobación.",
    capacidades: ["Operaciones", "Automatización", "Documentos"],
    resultado: "Plataforma en producción con flujos de aprobación y alertas internas activos.",
  },
  {
    name: "Blizcoms / SuperBet",
    area: "API · Datos en tiempo real",
    problema: "Procesar y normalizar grandes volúmenes de datos deportivos en tiempo real.",
    solucion: "Motor de datos y API para procesamiento, normalización y entrega de información en tiempo real.",
    capacidades: ["Datos", "Integraciones", "Software"],
    resultado: "API en producción sirviendo datos en tiempo real.",
  },
  {
    name: "IoT Cachimba y Dantino",
    area: "IoT · Operaciones en terreno",
    problema: "Sin visibilidad de la operación real en terreno, más allá de reportes manuales.",
    solucion: "Sensores y soluciones conectadas para capturar datos operativos desde terreno, con trazabilidad y monitoreo.",
    capacidades: ["IoT", "Operaciones", "Trazabilidad"],
    resultado: "Sensores y monitoreo en uso real en operaciones industriales.",
  },
];

export default function CasesSection() {
  return (
    <section id="casos" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Experiencia</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            La experiencia que construyó las capacidades de LAV
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Proyectos reales, en producción, resolviendo problemas concretos de empresas.
            Sin métricas inventadas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <GlowCard key={c.name} light glowColor="blue" className="flex flex-col p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-navy">{c.name}</h3>
                <span className="shrink-0 rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-navy/60">
                  {c.area}
                </span>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-slate-500">
                <p><span className="font-semibold text-navy">Problema: </span>{c.problema}</p>
                <p><span className="font-semibold text-navy">Solución: </span>{c.solucion}</p>
              </div>

              <div className="my-4 flex flex-wrap gap-1.5">
                {c.capacidades.map((cap) => (
                  <span key={cap} className="rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-navy/60">
                    {cap}
                  </span>
                ))}
              </div>

              <p className="mt-auto text-sm font-semibold text-navy">{c.resultado}</p>
            </GlowCard>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-base leading-relaxed text-slate-500">
          Esta experiencia en datos, software, automatización, finanzas, control, operaciones, IoT
          e IA aplicada es la base sobre la que construimos LAV.
        </p>
        <a href="/casos" className="mt-4 inline-block text-sm text-accent transition-colors hover:text-accent-dark">
          Ver todos los casos en detalle →
        </a>
      </div>
    </section>
  );
}
