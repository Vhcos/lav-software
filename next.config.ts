import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://vitals.vercel-insights.com",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/agentes/contabilidad", destination: "/contabilidad", permanent: true },
      { source: "/agentes/tesoreria", destination: "/tesoreria", permanent: true },
      { source: "/agentes/remuneraciones", destination: "/remuneraciones", permanent: true },
      { source: "/agentes/operaciones", destination: "/operaciones", permanent: true },
      { source: "/construccion", destination: "/software-para-constructoras", permanent: true },
      { source: "/mineria", destination: "/software-para-mineria", permanent: true },
      { source: "/empresas-familiares", destination: "/software-para-empresas-familiares", permanent: true },
      { source: "/diagnostico-ia-360", destination: "/diagnostico", permanent: true },
      { source: "/software-a-medida-ia", destination: "/plataforma", permanent: true },
      { source: "/integracion-datos-iot", destination: "/integraciones", permanent: true },
    ];
  },
};

export default nextConfig;
