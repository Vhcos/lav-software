import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://lav.software";

export const viewport: Viewport = {
  themeColor: "#0c1f35",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LAV Systems | Software a medida con IA para empresas en Chile",
    template: "%s | LAV Systems",
  },
  description:
    "Desarrollamos software a medida con IA para empresas que necesitan ordenar procesos, automatizar tareas, integrar datos y mejorar su toma de decisiones.",
  keywords: [
    "software a medida",
    "software a medida Chile",
    "software con IA",
    "desarrollo de software para empresas",
    "automatización de procesos con IA",
    "inteligencia artificial para empresas",
    "dashboards empresariales",
    "sistemas internos empresas",
    "software para construcción Chile",
    "software para empresas familiares",
    "integración de datos",
    "IoT para empresas",
    "software para minería Chile",
    "diagnóstico IA empresas",
    "Chile",
    "Santiago",
  ],
  authors: [{ name: "Víctor Hurtado", url: siteUrl }],
  creator: "LAV Systems",
  publisher: "LAV Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "LAV Systems | Software a medida con IA para empresas en Chile",
    description:
      "Convertimos procesos desordenados, datos dispersos y reportes manuales en sistemas simples, inteligentes y listos para operar.",
    url: siteUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAV Systems | Software a medida con IA para empresas en Chile",
    description:
      "Convertimos procesos desordenados, datos dispersos y reportes manuales en sistemas simples, inteligentes y listos para operar.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    apple: [{ url: "/icon.svg", sizes: "any" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "LAV Systems",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
        width: 512,
        height: 512,
      },
      description:
        "Consultora chilena de software a medida con IA para empresas medianas. Especializados en automatización de procesos, dashboards, sistemas internos e integración de datos.",
      email: "contacto@lav.software",
      foundingDate: "2024",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contacto@lav.software",
        availableLanguage: "Spanish",
        url: `${siteUrl}/#contacto`,
      },
      knowsAbout: [
        "Software a medida",
        "Automatización de procesos con IA",
        "Inteligencia artificial empresarial",
        "Integración de datos",
        "IoT industrial",
        "Dashboards empresariales",
        "Sistemas internos",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios LAV Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico IA 360",
              description:
                "Diagnóstico completo del estado operacional de la empresa: procesos, datos, sistemas y oportunidades de automatización con IA.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Backoffice Autónomo",
              description:
                "Sistema interno a medida que reemplaza Excel, correos y WhatsApp con flujos automatizados y datos centralizados.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Operación en Terreno Inteligente",
              description:
                "Sistema móvil para captura de datos en terreno, órdenes de trabajo, reportes de turno y trazabilidad operacional.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Copiloto Operacional con IA",
              description:
                "Asistente con IA integrado a los sistemas de la empresa para consultas, alertas y soporte a la toma de decisiones.",
            },
          },
        ],
      },
      founder: { "@id": `${siteUrl}/#founder` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Víctor Hurtado",
      jobTitle: "Fundador",
      worksFor: { "@id": `${siteUrl}/#organization` },
      url: `${siteUrl}/card.html`,
      email: "vhurtado@grupohurtado.cl",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "LAV Systems",
      description: "Software inteligente a medida para empresas en Chile",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "LAV Systems | Software a medida con IA para empresas en Chile",
      description:
        "Desarrollamos software a medida con IA para empresas que necesitan ordenar procesos, automatizar tareas, integrar datos y mejorar su toma de decisiones.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué tipo de empresas trabajan con LAV Systems?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos con empresas medianas en Chile, especialmente en construcción, servicios industriales, minería, empresas familiares y finanzas. Empresas que operan con Excel, correos y procesos manuales que necesitan ordenar su operación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta desarrollar software a medida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo depende del alcance. Un Diagnóstico IA 360 parte desde USD 2.500. Un sistema de backoffice a medida va entre USD 8.000 y USD 25.000. Trabajamos con precio fijo por entregable, no por hora.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo toma desarrollar un sistema a medida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un diagnóstico tarda 1–2 semanas. Un sistema de backoffice a medida entre 4 y 8 semanas. Empezamos siempre con un diagnóstico para definir alcance y prioridades antes de desarrollar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es el Diagnóstico IA 360?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es una evaluación completa del estado operacional de tu empresa: mapeamos procesos, identificamos datos dispersos, detectamos cuellos de botella y entregamos un plan concreto de qué automatizar con software e IA para generar el mayor impacto.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
