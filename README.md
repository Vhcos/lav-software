# LAV Systems — lav.software

Landing page de ventas de **LAV Systems**, consultora de software personalizado con IA para empresas medianas y familiares en Chile.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.7 (App Router) |
| Lenguaje | TypeScript 5 |
| UI | React 19 |
| Estilos | Tailwind CSS v4 |
| Animaciones | Motion (Framer Motion) |
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
│   │   ├── contact/route.ts      # POST /api/contact → email via Resend
│   │   └── newsletter/route.ts   # POST /api/newsletter → Resend Audience
│   ├── globals.css               # Tailwind v4 theme + global styles
│   ├── layout.tsx                # Root layout: metadata, JSON-LD, fonts
│   ├── opengraph-image.tsx       # OG image dinámica (edge) para redes sociales
│   ├── robots.ts                 # Genera /robots.txt
│   ├── sitemap.ts                # Genera /sitemap.xml
│   └── page.tsx                  # Página principal (SPA con secciones)
├── components/
│   ├── Header.tsx                # Navegación sticky + menú móvil
│   ├── Hero.tsx                  # Portada con DottedSurface 3D
│   ├── ProblemSection.tsx        # 6 tarjetas de problemas
│   ├── SolutionSection.tsx       # 4 pasos de la solución
│   ├── ServicesSection.tsx       # 4 servicios principales
│   ├── TargetAudienceSection.tsx # 4 industrias objetivo (con referencia Chile)
│   ├── ProcessSection.tsx        # 8 pasos del proceso
│   ├── CasesSection.tsx          # 5 casos de estudio
│   ├── OriginSection.tsx         # Origen profesional + chips + guiño sutil LAV
│   ├── ContactSection.tsx        # Formulario + newsletter + Calendly
│   ├── Footer.tsx                # Footer con TextHoverEffect
│   ├── GlowCard.tsx              # Card con glow border reactivo al cursor
│   ├── DottedSurface.tsx         # Grilla 3D animada con Three.js
│   └── TextHoverEffect.tsx       # Texto SVG con reveal gradient
└── lib/
    └── utils.ts                  # cn() helper (clsx + tailwind-merge)
```

## Flujo de la página

```
Header (sticky)
├── Hero                    → #inicio
├── ProblemSection
├── SolutionSection
├── ServicesSection         → #servicios
├── TargetAudienceSection
├── ProcessSection          → #proceso
├── CasesSection            → #casos
├── OriginSection           → #origen
├── ContactSection          → #contacto
└── Footer
```

## API Routes

### `POST /api/contact`

Envía un email de contacto al equipo.

```json
// Body
{ "name": "string", "email": "string", "company": "string?", "message": "string" }

// Respuesta 200
{ "success": true }
```

### `POST /api/newsletter`

Suscribe un email a la audiencia de Resend y notifica al equipo.

```json
// Body
{ "email": "string" }

// Respuesta 200
{ "success": true }
```

## Colores del tema

Definidos en `app/globals.css` como variables CSS de Tailwind v4:

| Variable | Valor | Uso |
|---------|-------|-----|
| `--color-navy` | `#0c1f35` | Fondo principal |
| `--color-navy-light` | `#163352` | Fondo de cards |
| `--color-accent` | `#0891b2` | Cyan de acento |
| `--color-accent-dark` | `#0e7490` | Cyan oscuro |

## SEO

El proyecto tiene SEO completo configurado en `app/layout.tsx`:

- **Metadata**: title, description, keywords, canonical, robots, Twitter Card, Open Graph
- **OG Image dinámica**: `app/opengraph-image.tsx` genera el preview visual para LinkedIn, Twitter, WhatsApp e iMessage usando `next/og` (edge runtime)
- **sitemap.xml**: generado automáticamente en `/sitemap.xml`
- **robots.txt**: generado automáticamente en `/robots.txt` (permite todo, bloquea `/api/`)
- **JSON-LD**: schema `Organization` + `WebSite` + `WebPage` inyectado en el `<head>`

## Deploy

El proyecto está configurado para Vercel. La variable de entorno `RESEND_API_KEY` debe estar configurada en el panel de Vercel (Settings → Environment Variables).

```bash
vercel --prod
```
