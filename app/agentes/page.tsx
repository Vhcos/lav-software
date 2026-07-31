import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/agentes`;

export const metadata: Metadata = {
  title: "Agentes de LAV",
  description:
    "Conoce al agente empresarial de LAV y al equipo de agentes especializados: gerencia, contabilidad, tesorería, remuneraciones, operaciones y documentos.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Agentes de LAV | LAV Systems",
    description:
      "El agente empresarial de LAV coordina a un equipo de agentes especializados que trabajan sobre módulos, datos y permisos reales de tu empresa.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentes de LAV | LAV Systems",
    description:
      "El agente empresarial de LAV coordina a un equipo de agentes especializados que trabajan sobre módulos, datos y permisos reales de tu empresa.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Agentes especializados de LAV",
      description:
        "Equipo de agentes de IA especializados en gerencia, contabilidad, tesorería, remuneraciones, operaciones y documentos, coordinados por el agente empresarial de LAV.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Chile" },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Agentes de LAV | LAV Systems",
      description:
        "Conoce al agente empresarial de LAV y al equipo de agentes especializados que trabajan sobre tu empresa real.",
      inLanguage: "es-CL",
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};

type Agent = {
  code: string;
  title: string;
  tagline?: string;
  badge: "En uso real" | "Programa Fundadoras";
  problema: string;
  tareas: string[];
  beneficio: string;
  ejemplo: string;
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
      "Ayuda a priorizar decisiones",
    ],
    beneficio: "Visión de negocio en minutos, no en días armando planillas.",
    ejemplo: "\"Prepara el reporte mensual de gerencia.\"",
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
      "Prepara información para cierres",
      "Explica estados financieros en lenguaje simple",
    ],
    beneficio: "Cierres más rápidos y confiables.",
    ejemplo: "\"¿Qué documentos faltan para cerrar este proceso?\"",
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
    ejemplo: "\"¿Por qué bajó la caja esta semana?\"",
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
    ejemplo: "\"Revisa las novedades antes de calcular remuneraciones.\"",
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
    ejemplo: "\"Compara el resultado de cada faena con su presupuesto.\"",
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
    ejemplo: "\"Revisa los documentos recibidos y dime cuáles requieren atención.\"",
    footnote: "Se activa y se adapta a tu operación durante la implementación guiada.",
  },
];

export default function AgentesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy pt-32 pb-20">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 60% 0%, rgba(8,145,178,0.13) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Agentes
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Un equipo de agentes trabajando{" "}
              <span className="text-accent">sobre tu empresa real</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              El agente empresarial de LAV es tu punto de entrada: le preguntas en lenguaje simple
              y él coordina al agente especializado correcto, que trabaja sobre módulos, datos y
              permisos reales — no sobre respuestas genéricas.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
          </div>
        </section>

        {/* Agents */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {agents.map((a) => (
                <div key={a.code} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-sm font-bold text-navy">
                        {a.code}
                      </div>
                      <div>
                        <h2 className="font-semibold text-navy">{a.title}</h2>
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

                  <div className="mb-4 rounded-lg bg-navy/[0.03] px-4 py-3">
                    <p className="text-xs italic text-slate-500">{a.ejemplo}</p>
                  </div>

                  <p className="mt-auto text-sm font-semibold text-navy">{a.beneficio}</p>
                  {a.footnote && <p className="mt-2 text-xs italic text-slate-400">{a.footnote}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security note */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy sm:text-3xl">
              La IA propone y ejecuta dentro de reglas.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-500">
              Permisos por usuario, separación entre empresas, aprobación humana y trazabilidad
              completa. Las decisiones sensibles siguen bajo control humano.
            </p>
            <a href="/#seguridad" className="text-sm text-accent transition-colors hover:text-accent-dark">
              Ver seguridad y control →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Activa a los agentes en tu empresa
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/50">
              Empezamos siempre con un diagnóstico para entender qué agentes tienen mayor impacto
              en tu operación.
            </p>
            <a
              href="/#contacto"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
            >
              Agendar diagnóstico empresarial
            </a>
            <div className="mt-10 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
              <a href="/plataforma" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Plataforma →
              </a>
              <a href="/programa-fundadores" className="text-sm text-accent/70 transition-colors hover:text-accent">
                Programa de Empresas Fundadoras →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
