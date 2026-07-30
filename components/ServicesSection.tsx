import { GlowCard } from "@/components/GlowCard";

type Agent = {
  code: string;
  title: string;
  tagline?: string;
  badge: "En uso real" | "Programa Fundadoras";
  problema: string;
  tareas: string[];
  beneficio: string;
  footnote?: string;
};

const agents: Agent[] = [
  {
    code: "GE",
    title: "Agente de gerencia",
    tagline: "Impulsado por Casiani",
    badge: "En uso real",
    problema: "Decides sin una vista consolidada del negocio.",
    tareas: [
      "Consolida indicadores de toda la empresa",
      "Explica qué cambió y por qué",
      "Identifica riesgos antes de que se conviertan en problemas",
      "Compara resultados entre períodos",
      "Prepara reportes para directorio y gerencia",
    ],
    beneficio: "Visión de negocio en minutos, no en días armando planillas.",
  },
  {
    code: "CO",
    title: "Agente contable",
    badge: "En uso real",
    problema: "Los cierres se atrasan y los errores de clasificación cuestan tiempo y plata.",
    tareas: [
      "Revisa documentos tributarios",
      "Propone clasificaciones",
      "Detecta inconsistencias",
      "Apoya conciliaciones",
      "Prepara información para cierres y explica estados financieros",
    ],
    beneficio: "Cierres más rápidos y confiables.",
    footnote: "Trabaja junto a tu contador — no lo reemplaza.",
  },
  {
    code: "TE",
    title: "Agente de tesorería",
    badge: "En uso real",
    problema: "Las sorpresas de caja llegan cuando ya es tarde para actuar.",
    tareas: [
      "Revisa caja y controla compromisos de pago",
      "Proyecta flujo de caja",
      "Detecta vencimientos",
      "Ayuda a conciliar movimientos bancarios",
      "Genera alertas",
    ],
    beneficio: "Visibilidad de caja antes de que el problema te alcance.",
  },
  {
    code: "RE",
    title: "Agente de remuneraciones",
    badge: "En uso real",
    problema: "El cálculo mensual consume días y cualquier error genera reclamos.",
    tareas: [
      "Revisa novedades del mes",
      "Prepara los cálculos",
      "Detecta datos faltantes",
      "Explica diferencias entre períodos",
      "Deja trazabilidad de cada revisión",
    ],
    beneficio: "Menos horas de revisión manual, más control del proceso.",
    footnote: "Remuneraciones asistidas con validación humana.",
  },
  {
    code: "OP",
    title: "Agente operacional",
    badge: "Programa Fundadoras",
    problema: "Los reportes de terreno llegan tarde o incompletos.",
    tareas: [
      "Consolida reportes diarios",
      "Detecta atrasos",
      "Identifica desviaciones",
      "Genera alertas",
      "Resume información de sucursales, obras o faenas",
    ],
    beneficio: "Terreno y gerencia mirando los mismos números.",
    footnote: "Se activa y se adapta a tu operación durante la implementación guiada.",
  },
  {
    code: "DO",
    title: "Agente documental",
    badge: "Programa Fundadoras",
    problema: "Los documentos se acumulan sin que nadie sepa qué falta o qué está por vencer.",
    tareas: [
      "Recibe y clasifica documentos",
      "Extrae información relevante",
      "Identifica vencimientos",
      "Permite consultar antecedentes con respaldo",
    ],
    beneficio: "Nunca más buscar un documento a ciegas.",
    footnote: "Se activa y se adapta a tu operación durante la implementación guiada.",
  },
];

export default function ServicesSection() {
  return (
    <section id="agentes" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Equipo de agentes</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Seis agentes especializados, coordinados por el agente empresarial de LAV
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Cada agente trabaja sobre módulos, datos y permisos reales de tu empresa — no sobre
            respuestas genéricas.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <GlowCard key={a.code} light glowColor="blue" className="flex flex-col p-7">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-sm font-bold text-navy">
                    {a.code}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{a.title}</h3>
                    {a.tagline && <p className="text-xs text-accent">{a.tagline}</p>}
                  </div>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    a.badge === "En uso real"
                      ? "bg-accent/10 text-accent-dark"
                      : "bg-navy/5 text-navy/60"
                  }`}
                >
                  {a.badge}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-500">{a.problema}</p>

              <ul className="mb-4 space-y-2">
                {a.tareas.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs leading-relaxed text-slate-500">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-navy/30" />
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-auto text-sm font-semibold text-navy">{a.beneficio}</p>
              {a.footnote && (
                <p className="mt-2 text-xs italic text-slate-400">{a.footnote}</p>
              )}
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
