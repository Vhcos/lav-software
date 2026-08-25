import type { MetadataRoute } from "next";

const base = "https://lav.software";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                              lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${base}/plataforma`,                              lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/agentes`,                                 lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/diagnostico`,                             lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/programa-fundadores`,                     lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/precios`,                                 lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/casos`,                                   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/soluciones`,                              lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/pymes`,                                   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/contabilidad`,                            lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/tesoreria`,                               lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/remuneraciones`,                          lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/operaciones`,                             lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${base}/agentes/gerencia`,                        lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${base}/agentes/documentos`,                      lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${base}/integraciones`,                           lastModified: now, changeFrequency: "monthly",  priority: 0.7 },
    { url: `${base}/automatizacion-procesos`,                 lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-constructoras`,             lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-mineria`,                   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-empresas-familiares`,       lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/inversionistas`,                          lastModified: now, changeFrequency: "monthly",  priority: 0.5 },
  ];
}
