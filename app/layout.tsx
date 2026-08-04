import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "LAV Systems | El agente empresarial para las pymes",
    template: "%s | LAV Systems",
  },
  description:
    "LAV conecta contabilidad, tesorería, remuneraciones y operaciones en una plataforma empresarial coordinada por agentes especializados, para pymes chilenas.",
  keywords: [
    "agente empresarial para pymes",
    "agentes de IA para empresas",
    "plataforma empresarial",
    "software para pymes",
    "automatización para pymes",
    "sistema de gestión para pymes",
    "contabilidad asistida por IA",
    "tesorería para pymes",
    "remuneraciones asistidas",
    "automatización de procesos",
    "software empresarial Chile",
    "inteligencia artificial para empresas chilenas",
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
    title: "LAV Systems | El agente empresarial para las pymes",
    description:
      "Tu empresa en un solo sistema. Un equipo de agentes trabajando contigo: contabilidad, tesorería, remuneraciones y operaciones.",
    url: siteUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAV Systems | El agente empresarial para las pymes",
    description:
      "Tu empresa en un solo sistema. Un equipo de agentes trabajando contigo: contabilidad, tesorería, remuneraciones y operaciones.",
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
        "Plataforma empresarial agéntica para pymes chilenas. LAV conecta contabilidad, tesorería, remuneraciones, operaciones y documentos, coordinados por un agente empresarial y un equipo de agentes especializados.",
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
        "Plataforma empresarial agéntica",
        "Agentes de IA para empresas",
        "Contabilidad asistida por IA",
        "Tesorería para pymes",
        "Remuneraciones asistidas",
        "Automatización de procesos",
        "Software empresarial Chile",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Soluciones LAV Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico empresarial",
              description:
                "Diagnóstico del estado operacional de la empresa: procesos, datos, sistemas y oportunidades de integrar agentes especializados.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plataforma empresarial LAV",
              description:
                "Plataforma modular con contabilidad, tesorería, remuneraciones, operaciones y documentos, coordinada por agentes especializados.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Programa de Empresas Fundadoras",
              description:
                "Implementación guiada de LAV para un grupo limitado de pymes, con configuración según el negocio y soporte directo.",
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
      email: "contacto@lav.software",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "LAV Systems",
      description: "El agente empresarial para las pymes chilenas",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "LAV Systems | El agente empresarial para las pymes",
      description:
        "LAV conecta contabilidad, tesorería, remuneraciones, operaciones y datos en una plataforma empresarial coordinada por agentes especializados.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
