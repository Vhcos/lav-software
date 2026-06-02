const services = [
  {
    title: "Diagnóstico IA 360",
    tag: "Punto de entrada",
    desc: "Levantamos dolores, procesos y oportunidades de automatización. Incluye reunión inicial, mapa de procesos, detección de tareas manuales, oportunidades de IA y propuesta con roadmap y presupuesto estimado.",
    items: ["Reunión de diagnóstico", "Mapa de proceso actual", "Detección de tareas manuales", "Propuesta y roadmap"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "Software personalizado con IA",
    tag: "Desarrollo a medida",
    desc: "Aplicaciones web diseñadas para resolver un problema específico de tu empresa. Sistemas internos, dashboards, portales operacionales, copilotos internos, módulos de análisis y reportes automáticos.",
    items: ["Sistemas internos", "Dashboards ejecutivos", "Portales operacionales", "Copilotos con IA"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Automatización de procesos",
    tag: "Eliminar trabajo manual",
    desc: "Para empresas que dependen de Excel, correos y WhatsApp. Generación automática de reportes, alertas, formularios inteligentes, flujos de aprobación e integración con Google Sheets, SharePoint u otros sistemas.",
    items: ["Reportes automáticos", "Alertas y notificaciones", "Flujos de aprobación", "Integraciones de sistemas"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Integración de datos e IoT",
    tag: "Del terreno al sistema",
    desc: "Conectamos información del mundo físico con software. Sensores, monitoreo operacional, tableros en tiempo real, alertas automáticas y trazabilidad completa desde terreno hasta gerencia.",
    items: ["Sensores y dispositivos IoT", "Monitoreo en tiempo real", "Alertas automáticas", "Trazabilidad operacional"],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Servicios</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Lo que construimos para tu empresa
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            Ahorro de tiempo, reducción de errores, mejor control y decisiones más rápidas.
            Cada servicio está diseñado para resolver un problema concreto, no para impresionar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                  {s.icon}
                </div>
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                  {s.tag}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
