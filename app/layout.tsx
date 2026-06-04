import type { Metadata } from "next";
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
    "software con IA",
    "desarrollo de software para empresas",
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "dashboards empresariales",
    "sistemas internos",
    "software para construcción",
    "software para empresas familiares",
    "integración de datos",
    "IoT para empresas",
    "Chile",
  ],
  authors: [{ name: "LAV Systems", url: siteUrl }],
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
    title: "LAV Systems | Software a medida con IA para empresas",
    description:
      "Convertimos procesos desordenados, datos dispersos y reportes manuales en sistemas simples, inteligentes y listos para operar.",
    url: siteUrl,
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAV Systems | Software a medida con IA para empresas",
    description:
      "Convertimos procesos desordenados, datos dispersos y reportes manuales en sistemas simples, inteligentes y listos para operar.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "LAV Systems",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`,
      },
      description:
        "Software inteligente para resolver problemas reales de negocio.",
      email: "contacto@lav.software",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
      },
      areaServed: "CL",
      knowsAbout: [
        "Software a medida",
        "Automatización de procesos",
        "Inteligencia artificial empresarial",
        "Integración de datos",
        "IoT industrial",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "LAV Systems",
      description:
        "Software inteligente a medida para empresas en Chile",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "es-CL",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "LAV Systems | Software a medida con IA para empresas en Chile",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
