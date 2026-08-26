// Avisa a Bing/Yandex (protocolo IndexNow) que las URLs del sitemap cambiaron,
// en vez de esperar a que su crawler pase solo. Correr tras cada deploy con cambios de contenido:
//   node scripts/submit-indexnow.mjs

const host = "lav.software";
const key = "faf00b859b0c15b1029f35abada3342f";
const keyLocation = `https://${host}/${key}.txt`;

const sitemapRes = await fetch(`https://${host}/sitemap.xml`);
const sitemapXml = await sitemapRes.text();
const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("No se encontraron URLs en el sitemap.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

console.log(`IndexNow: ${res.status} — ${urlList.length} URLs enviadas`);
if (!res.ok) {
  const body = await res.text();
  console.error(body);
  process.exit(1);
}
