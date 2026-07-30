import { GlowCard } from "@/components/GlowCard";

const problems = [
  {
    title: "Excel por todos lados",
    desc: "Planillas paralelas que solo una persona entiende, y que se desactualizan apenas alguien se va.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 3h6m-7.5 6h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0016.5 4.5h-9A2.25 2.25 0 005.25 6.75v10.5A2.25 2.25 0 007.5 21z" />
      </svg>
    ),
  },
  {
    title: "Correos y WhatsApp como sistema",
    desc: "Decisiones importantes que viven en hilos de mensajes, imposibles de auditar o recuperar.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Software contable aislado",
    desc: "Un sistema para contabilidad, otro para remuneraciones, y ninguno conversa con el otro.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Bancos y documentos por separado",
    desc: "Cartolas, facturas y comprobantes en sistemas que nunca se cruzan entre sí.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Reportes manuales y tardíos",
    desc: "Horas armando información a mano para que la gerencia decida con datos de la semana pasada.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Sin visión consolidada",
    desc: "La gerencia no tiene un solo lugar donde ver caja, ventas, gastos y operación al mismo tiempo.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">El problema</p>
          <h2 className="mb-5 text-3xl font-bold text-navy sm:text-4xl">
            Tu empresa no necesita otra plataforma aislada.
          </h2>
          <p className="text-base leading-relaxed text-slate-500">
            La mayoría de las pymes ya tiene demasiadas herramientas: un sistema contable, otro de
            remuneraciones, planillas Excel, correos, WhatsApp y carpetas compartidas. El problema
            no es la falta de software. Es que nada de eso se comunica entre sí.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <GlowCard key={p.title} light glowColor="blue" className="p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                {p.icon}
              </div>
              <h3 className="mb-2 font-semibold text-navy">{p.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </GlowCard>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-lg font-semibold text-navy">
          LAV conecta esa información y la convierte en un sistema que puede ayudarte a operar.
        </p>
      </div>
    </section>
  );
}
