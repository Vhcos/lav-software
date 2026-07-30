import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/agentes/contabilidad", destination: "/contabilidad", permanent: true },
      { source: "/agentes/tesoreria", destination: "/tesoreria", permanent: true },
      { source: "/agentes/remuneraciones", destination: "/remuneraciones", permanent: true },
      { source: "/agentes/operaciones", destination: "/operaciones", permanent: true },
      { source: "/construccion", destination: "/software-para-constructoras", permanent: true },
      { source: "/mineria", destination: "/software-para-mineria", permanent: true },
      { source: "/empresas-familiares", destination: "/software-para-empresas-familiares", permanent: true },
    ];
  },
};

export default nextConfig;
