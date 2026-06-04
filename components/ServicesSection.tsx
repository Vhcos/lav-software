import { ServicesCarousel, type ServiceSlide } from "@/components/ServicesCarousel";

function VisualDiagnostico() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-6 p-8"
      style={{ background: "linear-gradient(135deg, #0c2040 0%, #0d3565 50%, #072d45 100%)" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: "rgba(8,145,178,0.15)", border: "1px solid rgba(8,145,178,0.3)" }}
      >
        <svg className="h-8 w-8" fill="none" stroke="#0891b2" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
        </svg>
      </div>
      <div className="grid w-full max-w-[200px] grid-cols-2 gap-2">
        {["Procesos", "Datos", "IA", "Roadmap"].map((tag) => (
          <div
            key={tag}
            className="rounded-lg px-2 py-2 text-center text-xs"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: "radial-gradient(circle at 50% 35%, rgba(8,145,178,0.10) 0%, transparent 65%)" }}
      />
    </div>
  );
}

function VisualSoftware() {
  const lines = [
    { w: "w-3/4", c: "bg-accent/60" },
    { w: "w-1/2", c: "bg-white/20" },
    { w: "w-5/6", c: "bg-white/10" },
    { w: "w-2/3", c: "bg-accent/30" },
    { w: "w-1/3", c: "bg-white/15" },
  ];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-5 p-8"
      style={{ background: "linear-gradient(135deg, #091830 0%, #0c2244 60%, #081c38 100%)" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: "rgba(8,145,178,0.12)", border: "1px solid rgba(8,145,178,0.25)" }}
      >
        <svg className="h-8 w-8" fill="none" stroke="#0891b2" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      </div>
      <div className="w-full max-w-[200px] space-y-2 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        {lines.map((l, i) => (
          <div key={i} className={`h-1.5 rounded-full ${l.w} ${l.c}`} />
        ))}
      </div>
    </div>
  );
}

function VisualAutomatizacion() {
  const steps = ["Trigger", "Proceso", "Reporte", "Alerta"];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-6 p-8"
      style={{ background: "linear-gradient(135deg, #0b1e3a 0%, #0c2a4a 50%, #082030 100%)" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: "rgba(8,145,178,0.12)", border: "1px solid rgba(8,145,178,0.25)" }}
      >
        <svg className="h-8 w-8" fill="none" stroke="#0891b2" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      </div>
      <div className="flex w-full max-w-[220px] items-center justify-center gap-1">
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div
              className="rounded-lg px-2 py-1.5 text-center text-[10px]"
              style={{ background: "rgba(8,145,178,0.10)", border: "1px solid rgba(8,145,178,0.2)", color: "rgba(8,145,178,0.8)" }}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <div className="h-px w-3 flex-shrink-0" style={{ background: "rgba(8,145,178,0.3)" }} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function VisualIoT() {
  return (
    <div
      className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-8"
      style={{ background: "linear-gradient(135deg, #071a30 0%, #0a2540 60%, #061830 100%)" }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: "rgba(8,145,178,0.12)", border: "1px solid rgba(8,145,178,0.25)" }}
      >
        <svg className="h-8 w-8" fill="none" stroke="#0891b2" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      </div>
      <div className="flex gap-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex flex-col items-center gap-1.5">
            <div
              className="h-8 w-8 rounded-xl"
              style={{ background: "rgba(8,145,178,0.10)", border: "1px solid rgba(8,145,178,0.2)" }}
            />
            <div className="h-4 w-px" style={{ background: "rgba(8,145,178,0.3)" }} />
            <div
              className="h-2 w-2 rounded-full"
              style={{ background: "rgba(8,145,178,0.6)" }}
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ background: "radial-gradient(circle at 50% 60%, rgba(8,145,178,0.08) 0%, transparent 65%)" }}
      />
    </div>
  );
}

import React from "react";

const slides: ServiceSlide[] = [
  {
    name: "Diagnóstico IA 360",
    tag: "Punto de entrada",
    description:
      "Levantamos dolores, procesos y oportunidades de automatización. Incluye reunión inicial, mapa de procesos, detección de tareas manuales, oportunidades de IA y propuesta con roadmap y presupuesto estimado.",
    items: ["Reunión de diagnóstico", "Mapa de proceso actual", "Detección de tareas manuales", "Propuesta y roadmap"],
    visual: <VisualDiagnostico />,
  },
  {
    name: "Software personalizado con IA",
    tag: "Desarrollo a medida",
    description:
      "Aplicaciones web diseñadas para resolver un problema específico de tu empresa. Sistemas internos, dashboards, portales operacionales, copilotos internos, módulos de análisis y reportes automáticos.",
    items: ["Sistemas internos", "Dashboards ejecutivos", "Portales operacionales", "Copilotos con IA"],
    visual: <VisualSoftware />,
  },
  {
    name: "Automatización de procesos",
    tag: "Eliminar trabajo manual",
    description:
      "Para empresas que dependen de Excel, correos y WhatsApp. Generación automática de reportes, alertas, formularios inteligentes, flujos de aprobación e integración con Google Sheets, SharePoint u otros sistemas.",
    items: ["Reportes automáticos", "Alertas y notificaciones", "Flujos de aprobación", "Integraciones de sistemas"],
    visual: <VisualAutomatizacion />,
  },
  {
    name: "Integración de datos e IoT",
    tag: "Del terreno al sistema",
    description:
      "Conectamos información del mundo físico con software. Sensores, monitoreo operacional, tableros en tiempo real, alertas automáticas y trazabilidad completa desde terreno hasta gerencia.",
    items: ["Sensores y dispositivos IoT", "Monitoreo en tiempo real", "Alertas automáticas", "Trazabilidad operacional"],
    visual: <VisualIoT />,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl mx-auto text-center md:text-left md:mx-0">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Servicios</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
            Lo que construimos para tu empresa
          </h2>
          <p className="text-base leading-relaxed text-white/50">
            Ahorro de tiempo, reducción de errores, mejor control y decisiones más rápidas.
            Cada servicio está diseñado para resolver un problema concreto, no para impresionar.
          </p>
        </div>

        <ServicesCarousel slides={slides} />
      </div>
    </section>
  );
}
