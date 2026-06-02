const sectors = [
  {
    title: "Construcción e ingeniería",
    desc: "Seguimiento de obras, costos, estados de pago, documentos, reportes y trazabilidad.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Servicios industriales y operaciones en terreno",
    desc: "Información desde faena, reportes operativos, alertas, monitoreo e indicadores para gerencia.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: "Empresas familiares",
    desc: "Orden operacional, control de gestión, procesos internos y menor dependencia de personas clave.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Finanzas, operaciones y control de gestión",
    desc: "Consolidación de datos, reportes automáticos, dashboards y sistemas internos simples.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function TargetAudienceSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Para quién trabajamos</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Para quién trabajamos
          </h2>
          <p className="mb-4 text-base leading-relaxed text-slate-500">
            Ayudamos a empresas que necesitan ordenar procesos, automatizar tareas y mejorar
            visibilidad sobre su operación.
          </p>
          <p className="text-base leading-relaxed text-slate-500">
            Trabajamos especialmente con empresas medianas, empresas familiares y organizaciones
            con procesos críticos que todavía dependen de Excel, correos, WhatsApp y reportes manuales.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                {s.icon}
              </div>
              <h3 className="mb-2 font-semibold text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
