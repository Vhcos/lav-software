import { ServicesCarousel, type ServiceSlide } from "@/components/ServicesCarousel";

const photos = {
  diagnostico:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop",
  software:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&fit=crop",
  automatizacion:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&fit=crop",
  iot:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop",
};

function ServicePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      loading="lazy"
      decoding="async"
    />
  );
}

const slides: ServiceSlide[] = [
  {
    name: "Diagnóstico IA 360",
    tag: "Punto de entrada",
    description:
      "Levantamos dolores, procesos y oportunidades de automatización. Incluye reunión inicial, mapa de procesos, detección de tareas manuales, oportunidades de IA y propuesta con roadmap y presupuesto estimado.",
    items: ["Reunión de diagnóstico", "Mapa de proceso actual", "Detección de tareas manuales", "Propuesta y roadmap"],
    visual: <ServicePhoto src={photos.diagnostico} alt="Análisis de datos empresariales" />,
  },
  {
    name: "Software personalizado con IA",
    tag: "Desarrollo a medida",
    description:
      "Aplicaciones web diseñadas para resolver un problema específico de tu empresa. Sistemas internos, dashboards, portales operacionales, copilotos internos, módulos de análisis y reportes automáticos.",
    items: ["Sistemas internos", "Dashboards ejecutivos", "Portales operacionales", "Copilotos con IA"],
    visual: <ServicePhoto src={photos.software} alt="Desarrollo de software a medida" />,
  },
  {
    name: "Automatización de procesos",
    tag: "Eliminar trabajo manual",
    description:
      "Para empresas que dependen de Excel, correos y WhatsApp. Generación automática de reportes, alertas, formularios inteligentes, flujos de aprobación e integración con Google Sheets, SharePoint u otros sistemas.",
    items: ["Reportes automáticos", "Alertas y notificaciones", "Flujos de aprobación", "Integraciones de sistemas"],
    visual: <ServicePhoto src={photos.automatizacion} alt="Automatización de procesos empresariales" />,
  },
  {
    name: "Integración de datos e IoT",
    tag: "Del terreno al sistema",
    description:
      "Conectamos información del mundo físico con software. Sensores, monitoreo operacional, tableros en tiempo real, alertas automáticas y trazabilidad completa desde terreno hasta gerencia.",
    items: ["Sensores y dispositivos IoT", "Monitoreo en tiempo real", "Alertas automáticas", "Trazabilidad operacional"],
    visual: <ServicePhoto src={photos.iot} alt="Integración de datos e IoT industrial" />,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
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
