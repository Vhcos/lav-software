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

export const metadata: Metadata = {
  title: "LAV Systems | Software inteligente a medida para empresas",
  description:
    "Creamos software personalizado con IA para ordenar procesos, automatizar tareas, integrar datos y mejorar la toma de decisiones en empresas.",
  openGraph: {
    title: "LAV Systems | Software inteligente a medida para empresas",
    description:
      "Creamos software personalizado con IA para ordenar procesos, automatizar tareas, integrar datos y mejorar la toma de decisiones en empresas.",
    url: "https://lav.software",
    siteName: "LAV Systems",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
