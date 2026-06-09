import type { MetadataRoute } from "next";

const base = "https://lav.software";
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base,                                              lastModified: now, changeFrequency: "monthly",  priority: 1.0 },
    { url: `${base}/diagnostico-ia-360`,                     lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/software-a-medida-ia`,                   lastModified: now, changeFrequency: "monthly",  priority: 0.9 },
    { url: `${base}/automatizacion-procesos`,                 lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/integracion-datos-iot`,                   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-constructoras`,             lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-mineria`,                   lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
    { url: `${base}/software-para-empresas-familiares`,       lastModified: now, changeFrequency: "monthly",  priority: 0.8 },
  ];
}
