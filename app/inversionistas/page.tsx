import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrackedLink } from "@/components/TrackedLink";
import { InvestorForm } from "@/components/InvestorForm";
import { InvestorPageViewTracker } from "@/components/InvestorPageViewTracker";

const siteUrl = "https://lav.software";
const pageUrl = `${siteUrl}/inversionistas`;
const CALENDLY_URL = "https://calendly.com/lav-software";

export const metadata: Metadata = {
  title: "Inversionistas",
  description:
    "Conoce LAV Systems, su plataforma empresarial modular con agentes de IA, su estrategia de entrada al mercado y la oportunidad de acompañar su próxima etapa de crecimiento.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Inversionistas | LAV Systems",
    description:
      "Conoce LAV Systems, su plataforma empresarial modular con agentes de IA, su estrategia de entrada al mercado y la oportunidad de acompañar su próxima etapa de crecimiento.",
    url: pageUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inversionistas | LAV Systems",
    description:
      "Conoce LAV Systems, su plataforma empresarial modular con agentes de IA, su estrategia de entrada al mercado y la oportunidad de acompañar su próxima etapa de crecimiento.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#aboutpage`,
      url: pageUrl,
      name: "Inversionistas | LAV Systems",
      description:
        "Información para fondos, family offices e inversionistas ángeles sobre LAV Systems y su plataforma empresarial modular con agentes de IA.",
      about: { "@id": `${siteUrl}/#organization` },
      isPartOf: { "@id": `${siteUrl}/#website` },
      inLanguage: "es-CL",
    },
  ],
};

const problems = [
  "Excel como sistema de gestión no oficial.",
  "Correos y WhatsApp como canal de decisiones operativas.",
  "Plataformas desconectadas que no se hablan entre sí.",
  "Información duplicada entre áreas.",
  "Reportes armados a mano, mes a mes.",
  "Dependencia de personas clave que concentran el conocimiento.",
  "Baja trazabilidad de decisiones y aprobaciones.",
  "Poca visibilidad gerencial en tiempo real.",
];

const solutionLayers = [
  {
    title: "Plataforma modular",
    items: ["Datos", "Procesos", "Permisos", "Trazabilidad", "Módulos empresariales", "Integraciones"],
  },
  {
    title: "Agentes especializados",
    items: ["Gerencia", "Contabilidad", "Tesorería", "Remuneraciones", "Operaciones", "Documentos"],
  },
  {
    title: "Implementación guiada",
    items: ["Diagnóstico", "Configuración", "Integración", "Carga inicial", "Capacitación", "Acompañamiento", "Medición de impacto"],
  },
];

const whyNow = [
  "El costo de desarrollar software ha bajado con mejores herramientas y modelos de IA disponibles.",
  "La infraestructura cloud permite operar sistemas empresariales robustos sin la inversión inicial que exigían hace una década.",
  "Las empresas medianas necesitan cada vez más consolidar herramientas dispersas en un solo sistema.",
  "Existe una oportunidad real de llevar agentes de IA a procesos empresariales concretos, no solo a interfaces conversacionales genéricas.",
];

const advantages = [
  "Combinación de criterio empresarial y capacidad técnica en el mismo equipo.",
  "Experiencia previa en finanzas, operaciones, control de gestión y construcción.",
  "Arquitectura modular pensada para múltiples empresas, no un desarrollo a medida por cliente.",
  "Agentes integrados en procesos reales, no respuestas aisladas de un chatbot.",
  "Permisos y trazabilidad como parte del diseño, no como agregado posterior.",
  "Implementación centrada en problemas concretos de cada empresa.",
  "Experiencia previa construyendo aplicaciones, dashboards, automatizaciones e IoT para operaciones reales.",
];

const currentState = [
  {
    title: "Plataforma base en desarrollo",
    desc: "Los módulos de contabilidad, tesorería, remuneraciones, operaciones y documentos están en distintas etapas de madurez, desde validado en operación hasta implementación guiada.",
  },
  {
    title: "Posicionamiento comercial desplegado",
    desc: "Sitio público, páginas por dominio y por industria, y formulario de captación ya están en producción.",
  },
  {
    title: "Programa de Empresas Fundadoras",
    desc: "Estrategia de entrada controlada: implementación guiada con un grupo limitado de pymes, en vez de una apertura comercial masiva.",
  },
  {
    title: "Infraestructura en Vercel",
    desc: "Despliegue continuo, entornos de preview por cambio y monitoreo básico ya operando.",
  },
  {
    title: "Producto modular por diseño",
    desc: "Los módulos y agentes se activan de forma independiente según los procesos prioritarios de cada empresa.",
  },
  {
    title: "Validaciones operacionales previas del equipo",
    desc: "Antecedentes documentados en gestión estratégica, operaciones, datos en tiempo real e IoT, que sustentan las capacidades que hoy integra LAV.",
  },
];

const businessModel = [
  "Implementación inicial.",
  "Suscripción mensual.",
  "Módulos adicionales.",
  "Agentes especializados.",
  "Integraciones.",
  "Soporte.",
  "Servicios de configuración avanzada.",
];

const targetMarket = [
  "Empresas medianas.",
  "Empresas familiares.",
  "Construcción.",
  "Minería y servicios industriales.",
  "Operaciones en terreno.",
  "Servicios profesionales.",
  "Áreas de finanzas, personas, operaciones y gerencia.",
];

const entryStrategy = [
  { n: "01", title: "Programa de Empresas Fundadoras", desc: "Selección de un grupo limitado de pymes para implementar LAV de forma guiada." },
  { n: "02", title: "Diagnóstico empresarial", desc: "Levantamiento de procesos, datos y prioridades de cada empresa." },
  { n: "03", title: "Implementación de procesos prioritarios", desc: "Se resuelve primero el problema que más tiempo, control o dinero está consumiendo." },
  { n: "04", title: "Activación de módulos y agentes", desc: "Los módulos y agentes se ponen en marcha sobre datos reales de la empresa." },
  { n: "05", title: "Medición de impacto", desc: "Se mide el resultado concreto de la implementación en cada empresa." },
  { n: "06", title: "Conversión en caso de éxito", desc: "La empresa fundadora pasa a una relación comercial continua." },
  { n: "07", title: "Expansión por módulos y referidos", desc: "Nuevos módulos dentro de la misma empresa, y nuevas empresas por referencia directa." },
];

const experienceCases = [
  {
    name: "aret3",
    area: "Software con IA",
    desc: "Plataforma que analiza viabilidad, mercado y riesgo con inteligencia artificial para evaluar oportunidades de negocio.",
  },
  {
    name: "SEEConsulting",
    area: "Gestión estratégica",
    desc: "Plataforma de gestión estratégica con KPIs, roadmap y seguimiento de iniciativas para gerencia y directorio — base directa del agente de gerencia que hoy integra LAV.",
  },
  {
    name: "Casia",
    area: "Operaciones · SGI · Documentos",
    desc: "Plataforma operacional con reportes automáticos, sistema de gestión integrado y flujos de aprobación en producción.",
  },
  {
    name: "Blizcoms / SuperBet",
    area: "Datos en tiempo real",
    desc: "Motor de datos y API para procesamiento, normalización y entrega de información en tiempo real.",
  },
  {
    name: "IoT Cachimba y Dantino",
    area: "IoT · Operaciones en terreno",
    desc: "Sensores y soluciones conectadas para capturar datos operativos desde terreno, con trazabilidad y monitoreo.",
  },
];

const founderBackground = [
  "MBA Executive",
  "Ingeniería Comercial",
  "Estrategia",
  "Finanzas",
  "Operaciones",
  "Control de gestión",
  "Construcción y obras públicas",
  "Creación de empresas",
  "Desarrollo de soluciones digitales",
  "IA aplicada",
];

const fundUse = [
  { title: "Producto e ingeniería", desc: "Completar y madurar los módulos y agentes de la plataforma." },
  { title: "Seguridad y confiabilidad", desc: "Cerrar brechas de seguridad, permisos y operación del sistema." },
  { title: "Implementación de clientes", desc: "Acompañar la puesta en marcha de nuevas empresas fundadoras." },
  { title: "Ventas y adquisición", desc: "Construir un proceso repetible de captación e implementación." },
  { title: "Soporte y operaciones", desc: "Sostener la calidad de servicio a medida que crece la base de empresas." },
  { title: "Integraciones y ecosistema", desc: "Ampliar las conexiones con bancos, SII, Previred y sistemas ya usados por las empresas." },
];

const milestones = [
  "Completar la preparación comercial del producto.",
  "Cerrar brechas de seguridad y operación.",
  "Implementar las primeras empresas fundadoras.",
  "Medir ahorro de tiempo y reducción de errores en procesos activados.",
  "Validar el modelo de precios con casos reales.",
  "Construir casos de éxito documentados.",
  "Mejorar el proceso de onboarding.",
  "Crear un proceso comercial repetible.",
];

export default function InversionistasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InvestorPageViewTracker />
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
              Información para inversionistas
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Construyendo la plataforma empresarial con{" "}
              <span className="text-accent">agentes de IA</span> para pymes y empresas medianas
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
              LAV integra finanzas, personas, operaciones y documentos en un sistema modular,
              reduciendo la dependencia de planillas, procesos manuales y plataformas desconectadas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TrackedLink
                href="#formulario"
                event="investor_teaser_clicked"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
              >
                Solicitar teaser
              </TrackedLink>
              <TrackedLink
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                event="investor_meeting_clicked"
                className="inline-flex h-12 items-center rounded-xl border border-white/15 px-8 text-sm text-white/70 transition-colors hover:bg-white/5"
              >
                Conversar con el fundador
              </TrackedLink>
            </div>
            <p className="mx-auto mt-8 max-w-xl text-xs text-white/30">
              La información de esta página tiene fines informativos y no constituye una oferta
              pública de inversión.
            </p>
          </div>
        </section>

        {/* El problema */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">El problema</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Muchas pymes y empresas medianas todavía operan con herramientas que no fueron
              diseñadas para gestionar una empresa completa.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {problems.map((p) => (
                <div key={p} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* La solución */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">La solución</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              LAV se construye en tres capas que trabajan juntas, no como productos separados.
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {solutionLayers.map((layer) => (
                <div key={layer.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 font-semibold text-navy">{layer.title}</h3>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-500">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-navy/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué ahora */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Por qué ahora</h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Varios cambios de fondo hacen posible este producto hoy, sin que eso signifique que
              todo el mercado cambiará de un día para otro.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whyNow.map((w) => (
                <li key={w} className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ventaja competitiva */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Ventaja competitiva</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              La diferenciación de LAV está en combinar producto, implementación y conocimiento
              operativo.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {advantages.map((a) => (
                <div key={a} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estado actual */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Estado actual</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              LAV se encuentra en etapa de producto inicial y validación comercial, con una
              estrategia de implementación controlada mediante empresas fundadoras.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {currentState.map((s) => (
                <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelo de negocio */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Modelo de negocio</h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Una estructura potencial de ingresos, que puede evolucionar según la validación
              comercial con las primeras empresas.
            </p>
            <div className="flex flex-wrap gap-3">
              {businessModel.map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/70">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Mercado objetivo */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Mercado objetivo</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Segmentos prioritarios para la implementación de LAV.
            </p>
            <div className="flex flex-wrap gap-3">
              {targetMarket.map((m) => (
                <span key={m} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm text-slate-600">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Estrategia de entrada */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Estrategia de entrada</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Primero el problema. Después la tecnología. Un camino controlado antes de escalar.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {entryStrategy.map((s) => (
                <div key={s.n} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="mb-4 block font-mono text-2xl font-bold text-accent/40">{s.n}</span>
                  <h3 className="mb-2 font-semibold text-navy">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiencia demostrable */}
        <section className="bg-navy py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
              Experiencia que sustenta el desarrollo de LAV
            </h2>
            <p className="mb-10 text-base leading-relaxed text-white/50">
              Estos antecedentes corresponden a soluciones, plataformas y experiencias previas del
              equipo fundador que construyeron las capacidades que hoy integra el producto. No
              representan necesariamente clientes actuales, ingresos actuales ni tracción comercial
              validada de LAV Plataforma.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceCases.map((c) => (
                <div key={c.name} className="rounded-xl border border-white/8 bg-white/[0.04] p-6">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">{c.name}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/60">{c.area}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipo fundador */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Equipo fundador</h2>
            <p className="mb-6 text-base leading-relaxed text-slate-500">
              Víctor Hurtado combina formación de negocios con experiencia operativa directa:
              estrategia, finanzas, operaciones, control de gestión, construcción y obras públicas,
              creación de empresas, desarrollo de soluciones digitales e IA aplicada.
            </p>
            <div className="flex flex-wrap gap-2">
              {founderBackground.map((b) => (
                <span key={b} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium text-slate-500">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Uso potencial de fondos */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">Uso potencial de fondos</h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Una futura ronda tendría como objetivo acelerar la preparación comercial del producto,
              incorporar empresas fundadoras, fortalecer seguridad y soporte, y construir un proceso
              repetible de adquisición e implementación.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {fundUse.map((f) => (
                <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-navy">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hitos */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-3 text-2xl font-bold text-navy sm:text-3xl">
              Hitos que una ronda debería financiar
            </h2>
            <p className="mb-10 text-base leading-relaxed text-slate-500">
              Objetivos concretos para la próxima etapa, sin comprometer fechas que aún no están
              definidas.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {milestones.map((m) => (
                <li key={m} className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-600 shadow-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formulario */}
        <section id="formulario" className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Solicita el teaser</h2>
              <p className="text-base leading-relaxed text-white/50">
                El teaser se comparte previa revisión para proteger información comercial y técnica.
              </p>
            </div>
            <InvestorForm />
          </div>
        </section>

        {/* CTA final */}
        <section className="border-t border-white/5 bg-navy py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
              Conversemos sobre la próxima etapa de LAV
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TrackedLink
                href="#formulario"
                event="investor_teaser_clicked"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-8 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
              >
                Solicitar teaser
              </TrackedLink>
              <TrackedLink
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                event="investor_meeting_clicked"
                className="inline-flex h-12 items-center rounded-xl border border-white/15 px-8 text-sm text-white/70 transition-colors hover:bg-white/5"
              >
                Agendar conversación
              </TrackedLink>
            </div>
            <p className="mx-auto mt-10 max-w-xl border-t border-white/5 pt-8 text-xs leading-relaxed text-white/30">
              La información contenida en esta página es de carácter general y no constituye una
              oferta pública de valores, una recomendación de inversión ni una solicitud vinculante
              de capital.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
