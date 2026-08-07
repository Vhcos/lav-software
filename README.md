# LAV Systems — lav.software

Sitio web de **LAV Systems**, plataforma empresarial modular con agentes de IA para pymes y empresas familiares chilenas. Incluye landing page principal (SPA), páginas de producto/plataforma, landings SEO por vertical, un flujo de captación de inversionistas y una tarjeta digital.

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
│   │   ├── investors/route.ts                  # POST /api/investors → email via Resend
│   │   └── newsletter/route.ts                 # POST /api/newsletter → Resend Audience
│   ├── plataforma/page.tsx                     # Plataforma empresarial
│   ├── agentes/page.tsx                        # Agentes de LAV (overview)
│   ├── agentes/gerencia/page.tsx                # Agente de gerencia
│   ├── agentes/documentos/page.tsx              # Agente documental
│   ├── soluciones/page.tsx                     # Soluciones por dominio
│   ├── integraciones/page.tsx                  # Integraciones
│   ├── diagnostico/page.tsx                    # Diagnóstico empresarial
│   ├── programa-fundadores/page.tsx            # Programa de Empresas Fundadoras
│   ├── casos/page.tsx                          # Casos de estudio
│   ├── pymes/page.tsx                          # Software y agentes de IA para pymes
│   ├── contabilidad/page.tsx                   # Contabilidad asistida por IA
│   ├── tesoreria/page.tsx                      # Tesorería para pymes
│   ├── remuneraciones/page.tsx                 # Remuneraciones asistidas
│   ├── operaciones/page.tsx                    # Operaciones para pymes
│   ├── inversionistas/page.tsx                 # Captación de inversionistas + formulario
│   ├── automatizacion-procesos/page.tsx        # Landing SEO: Automatización de procesos
│   ├── software-para-constructoras/page.tsx    # Landing SEO: Software para constructoras
│   ├── software-para-mineria/page.tsx          # Landing SEO: Software para minería
│   ├── software-para-empresas-familiares/page.tsx  # Landing SEO: Empresas familiares
│   ├── globals.css                             # Tailwind v4 theme + global styles
│   ├── layout.tsx                              # Root layout: metadata, JSON-LD, fonts
│   ├── opengraph-image.tsx                     # OG image dinámica (edge) para redes sociales
│   ├── robots.ts                               # Genera /robots.txt
│   ├── sitemap.ts                              # Genera /sitemap.xml (20 URLs)
│   └── page.tsx                               # Página principal (SPA con secciones)
├── components/
│   ├── Header.tsx                    # Navegación sticky + menú móvil (pathname-aware)
│   ├── Hero.tsx                      # Portada con DottedSurface 3D
│   ├── ProblemSection.tsx            # Tarjetas de problemas
│   ├── SolutionSection.tsx           # Pasos de la solución
│   ├── HowItWorksSection.tsx         # Cómo funciona la plataforma
│   ├── ServicesSection.tsx           # Sección de agentes/servicios (id="agentes")
│   ├── ServicesCarousel.tsx          # Carrusel 3D circular con Motion
│   ├── UseCasesExamplesSection.tsx   # Ejemplos de casos de uso
│   ├── SecuritySection.tsx           # Seguridad y confianza
│   ├── ChatbotDifferenceSection.tsx  # Diferenciación vs. chatbots genéricos
│   ├── ProcessSection.tsx            # Pasos del proceso
│   ├── FoundersProgramSection.tsx    # Programa de Empresas Fundadoras (SPA)
│   ├── CasesSection.tsx              # Casos de estudio (SPA)
│   ├── OriginSection.tsx             # Origen profesional + chips + guiño sutil LAV
│   ├── ContactSection.tsx            # Formulario + newsletter + Calendly
│   ├── InvestorForm.tsx              # Formulario de contacto para inversionistas
│   ├── InvestorPageViewTracker.tsx   # Tracking de vista de /inversionistas
│   ├── TrackedLink.tsx               # Link con evento de analítica
│   ├── Footer.tsx                    # Footer con TextHoverEffect
│   ├── GlowCard.tsx                  # Card con glow border reactivo al cursor
│   ├── DottedSurface.tsx             # Grilla 3D animada con Three.js
│   ├── TextHoverEffect.tsx           # Texto SVG con reveal gradient
│   └── FinalCTA.tsx                  # Descartado del diseño actual — no usar
├── public/
│   ├── card.html                 # Tarjeta digital interactiva de Víctor Hurtado
│   ├── victor.vcf                # vCard para "Guardar contacto"
│   ├── victor.jpg                # Foto de Víctor Hurtado
│   └── icon.svg                  # Logo LAV Systems
└── lib/
    ├── utils.ts                  # cn() helper (clsx + tailwind-merge) + validaciones/sanitización
    └── investor-options.ts       # Enums del formulario de inversionistas
```

## Páginas

### Página principal (SPA)

`/` — Sección única con scroll. Secciones con ancla:

```
#inicio    → Hero
#agentes   → ServicesSection
#proceso   → ProcessSection
#casos     → CasesSection
#origen    → OriginSection
#contacto  → ContactSection
```

Entre estas, sin ancla propia, corren además: `ProblemSection`, `SolutionSection`, `HowItWorksSection`, `UseCasesExamplesSection`, `SecuritySection`, `ChatbotDifferenceSection`, `FoundersProgramSection`.

### Páginas de producto / plataforma

Páginas estáticas independientes con su propio nav (via `Header`, pathname-aware):

| Ruta | Contenido |
|------|-----------|
| `/plataforma` | Plataforma empresarial |
| `/agentes` | Overview de agentes de IA |
| `/agentes/gerencia` | Agente de gerencia |
| `/agentes/documentos` | Agente documental |
| `/soluciones` | Soluciones por dominio |
| `/integraciones` | Integraciones |
| `/diagnostico` | Diagnóstico empresarial |
| `/programa-fundadores` | Programa de Empresas Fundadoras |
| `/casos` | Casos de estudio |
| `/pymes` | Software y agentes de IA para pymes |
| `/contabilidad` | Contabilidad asistida por IA |
| `/tesoreria` | Tesorería para pymes |
| `/remuneraciones` | Remuneraciones asistidas |
| `/operaciones` | Operaciones para pymes |
| `/inversionistas` | Captación de inversionistas + formulario (`InvestorForm`) |

### Landing pages SEO por vertical

Páginas estáticas con metadata, JSON-LD y contenido por vertical industrial:

| Ruta | Keyword objetivo |
|------|----------------|
| `/automatizacion-procesos` | automatización de procesos empresariales |
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

### `POST /api/investors`

```json
// Body
{
  "firstName": "string", "lastName": "string", "email": "string",
  "organization": "string?", "role": "string?", "organizationType": "string?",
  "website": "string?", "investmentRange": "string?", "investmentStage": "string?",
  "geography": "string?", "thesis": "string?", "message": "string?",
  "consent": true
}
// Respuesta 200
{ "ok": true }
```

Envía el detalle por email vía Resend. La respuesta automática al inversionista está implementada pero desactivada (`SEND_AUTO_REPLY = false` en `app/api/investors/route.ts`) hasta confirmar deliverability del dominio para envíos salientes.

## SEO

| Elemento | Archivo | Estado |
|----------|---------|--------|
| Metadata global | `app/layout.tsx` | ✅ title, description, keywords, canonical, OG, Twitter Card |
| JSON-LD | `app/layout.tsx` | ✅ Organization + ProfessionalService + Person + FAQPage + WebSite + WebPage |
| OG Image dinámica | `app/opengraph-image.tsx` | ✅ Edge runtime, next/og |
| Sitemap | `app/sitemap.ts` | ✅ 20 URLs con prioridades |
| Robots | `app/robots.ts` | ✅ Allow /, Disallow /api/ |
| H1 local | `components/Hero.tsx` | ✅ Incluye "en Chile" |
| JSON-LD por página | Cada landing/producto | ✅ Service + WebPage schema |
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
