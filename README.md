# LAV Systems — lav.software

Sitio web de **LAV Systems**, consultora chilena de software personalizado con IA para empresas medianas y familiares. Incluye landing page principal (SPA) y 7 páginas SEO por vertical.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.7 (App Router) |
| Lenguaje | TypeScript 5 |
| UI | React 19 |
| Estilos | Tailwind CSS v4 |
| Animaciones | Motion (`motion/react`) |
| 3D / WebGL | Three.js |
| Email | Resend API |
| Deploy | Vercel |

## Requisitos previos

- Node.js 20+
- npm 10+
- Cuenta en [Resend](https://resend.com) con dominio `lav.software` verificado

## Configuración del entorno

Crea un archivo `.env.local` en la raíz:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

## Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## Estructura del proyecto

```
lav-software/
├── app/
│   ├── api/
│   │   ├── contact/route.ts                    # POST /api/contact → email via Resend
│   │   └── newsletter/route.ts                 # POST /api/newsletter → Resend Audience
│   ├── diagnostico-ia-360/page.tsx             # Landing SEO: Diagnóstico IA 360
│   ├── software-a-medida-ia/page.tsx           # Landing SEO: Software a medida con IA
│   ├── automatizacion-procesos/page.tsx        # Landing SEO: Automatización de procesos
│   ├── integracion-datos-iot/page.tsx          # Landing SEO: Integración de datos e IoT
│   ├── software-para-constructoras/page.tsx    # Landing SEO: Software para constructoras
│   ├── software-para-mineria/page.tsx          # Landing SEO: Software para minería
│   ├── software-para-empresas-familiares/page.tsx  # Landing SEO: Empresas familiares
│   ├── globals.css                             # Tailwind v4 theme + global styles
│   ├── layout.tsx                              # Root layout: metadata, JSON-LD, fonts
│   ├── opengraph-image.tsx                     # OG image dinámica (edge) para redes sociales
│   ├── robots.ts                               # Genera /robots.txt
│   ├── sitemap.ts                              # Genera /sitemap.xml (8 URLs)
│   └── page.tsx                               # Página principal (SPA con secciones)
├── components/
│   ├── Header.tsx                # Navegación sticky + menú móvil (pathname-aware)
│   ├── Hero.tsx                  # Portada con DottedSurface 3D
│   ├── ProblemSection.tsx        # 6 tarjetas de problemas
│   ├── SolutionSection.tsx       # 4 pasos de la solución
│   ├── ServicesSection.tsx       # Carrusel 3D de servicios
│   ├── ServicesCarousel.tsx      # Carrusel 3D circular con Motion
│   ├── TargetAudienceSection.tsx # 5 industrias objetivo (construcción, minería, etc.)
│   ├── ProcessSection.tsx        # 8 pasos del proceso
│   ├── CasesSection.tsx          # 5 casos de estudio
│   ├── OriginSection.tsx         # Origen profesional + chips + guiño sutil LAV
│   ├── ContactSection.tsx        # Formulario + newsletter + Calendly
│   ├── Footer.tsx                # Footer con TextHoverEffect
│   ├── GlowCard.tsx              # Card con glow border reactivo al cursor
│   ├── DottedSurface.tsx         # Grilla 3D animada con Three.js
│   └── TextHoverEffect.tsx       # Texto SVG con reveal gradient
├── public/
│   ├── card.html                 # Tarjeta digital interactiva de Víctor Hurtado
│   ├── victor.vcf                # vCard para "Guardar contacto"
│   ├── victor.jpg                # Foto de Víctor Hurtado
│   └── icon.svg                  # Logo LAV Systems
└── lib/
    └── utils.ts                  # cn() helper (clsx + tailwind-merge)
```

## Páginas

### Página principal (SPA)

`/` — Sección única con scroll. Secciones conectadas por `id`:

```
#inicio    → Hero
#servicios → ServicesSection
#proceso   → ProcessSection
#casos     → CasesSection
#origen    → OriginSection
#contacto  → ContactSection
```

### Landing pages SEO

Páginas estáticas independientes con metadata, JSON-LD y contenido por vertical:

| Ruta | Keyword objetivo |
|------|----------------|
| `/diagnostico-ia-360` | diagnóstico IA empresas Chile |
| `/software-a-medida-ia` | software a medida con IA Chile |
| `/automatizacion-procesos` | automatización de procesos empresariales |
| `/integracion-datos-iot` | integración de datos IoT industrial |
| `/software-para-constructoras` | software constructoras Chile |
| `/software-para-mineria` | software minería Chile |
| `/software-para-empresas-familiares` | software empresas familiares Chile |

### Tarjeta digital

`/card.html` — Tarjeta de presentación digital de Víctor Hurtado. Mobile-first, con botones de llamada, email, WhatsApp y descarga de vCard.

## API Routes

### `POST /api/contact`

```json
// Body
{ "name": "string", "email": "string", "company": "string?", "message": "string" }
// Respuesta 200
{ "success": true }
```

### `POST /api/newsletter`

```json
// Body
{ "email": "string" }
// Respuesta 200
{ "success": true }
```

## SEO

| Elemento | Archivo | Estado |
|----------|---------|--------|
| Metadata global | `app/layout.tsx` | ✅ title, description, keywords, canonical, OG, Twitter Card |
| JSON-LD | `app/layout.tsx` | ✅ Organization + ProfessionalService + Person + FAQPage + WebSite + WebPage |
| OG Image dinámica | `app/opengraph-image.tsx` | ✅ Edge runtime, next/og |
| Sitemap | `app/sitemap.ts` | ✅ 8 URLs con prioridades |
| Robots | `app/robots.ts` | ✅ Allow /, Disallow /api/ |
| H1 local | `components/Hero.tsx` | ✅ Incluye "en Chile" |
| JSON-LD por página | Cada landing page | ✅ Service + WebPage schema |
| viewport / themeColor | `app/layout.tsx` | ✅ #0c1f35 |

## Colores del tema

Definidos en `app/globals.css` como variables CSS de Tailwind v4:

| Variable | Valor | Uso |
|---------|-------|-----|
| `--color-navy` | `#0c1f35` | Fondo principal |
| `--color-navy-light` | `#163352` | Fondo de cards |
| `--color-accent` | `#0891b2` | Cyan de acento |
| `--color-accent-dark` | `#0e7490` | Cyan oscuro |

## Deploy

Auto-deploy en Vercel desde push a `main`. Variable de entorno requerida:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```
