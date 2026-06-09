<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Guía para agentes IA — lav-software

## Contexto del proyecto

Sitio web de **LAV Systems**, consultora chilena de software personalizado con IA. Incluye una landing page principal (SPA con scroll) y 7 páginas SEO estáticas por vertical de industria. Todo el copy está en español chileno. El diseño es oscuro (navy `#0c1f35`) con acento cyan (`#0891b2`).

## Reglas de trabajo

### Next.js 16 + React 19 — gotchas críticos

- **Todos los componentes son Server Components por defecto.** Solo agrega `"use client"` cuando sea estrictamente necesario: event handlers, hooks de estado, refs al DOM, Three.js, Motion.
- **No uses `next/router`** — usa `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`).
- **No uses `getServerSideProps` ni `getStaticProps`** — usa `fetch()` directamente en Server Components o Route Handlers.
- **Los Route Handlers** van en `app/api/[ruta]/route.ts` y exportan funciones `GET`, `POST`, etc.
- **`next/font`** se importa desde `next/font/google`, no desde `@next/font`.
- **`viewport`** se exporta como constante separada de `metadata` — `export const viewport: Viewport = { themeColor: "..." }`.
- Antes de usar cualquier API de Next.js, verifica en `node_modules/next/dist/docs/`.

### Tailwind CSS v4

- La configuración del tema está en `app/globals.css` con `@theme inline { ... }`, **no en `tailwind.config.js`** (no existe).
- Los colores del proyecto son `navy`, `navy-light`, `accent`, `accent-dark` — úsalos como clases Tailwind (`bg-navy`, `text-accent`, etc.).
- Usa `cn()` de `lib/utils.ts` para componer clases condicionales.
- No instales ni uses plugins de Tailwind v3 — la API cambió.

### Estilos y animaciones

- **Motion** (no Framer Motion): `import { motion } from "motion/react"`. El paquete es `motion`, no `framer-motion`.
- **Three.js**: siempre limpia recursos en el `return` del `useEffect` (`.dispose()` en geometría, material y renderer).
- CSS inline para efectos que dependen de variables JS (posición del cursor, valores dinámicos). CSS Modules o Tailwind para todo lo estático.
- No uses `styled-components` ni ninguna librería CSS-in-JS adicional.

### Componentes

#### GlowCard (`components/GlowCard.tsx`)
- Card reutilizable con borde que sigue el cursor usando CSS variables `--xp`, `--yp`, `--hue`.
- Props: `children`, `className?`, `light?` (variante fondo claro), `color?` (`blue|purple|green|red|orange`).
- Ignora eventos de touch (`pointerType === 'touch'`).
- Inyecta los estilos CSS globales necesarios una sola vez al montar.
- `"use client"` porque usa `useRef` y `onPointerMove`.

#### DottedSurface (`components/DottedSurface.tsx`)
- Grid Three.js de 40×60 puntos animados con sine waves (20×30 en móvil).
- `"use client"` — monta el canvas en un `useEffect`.
- Siempre dispose: `geometry.dispose()`, `material.dispose()`, `renderer.dispose()`.
- Pausa con `visibilitychange` cuando la pestaña queda en segundo plano.

#### ServicesCarousel (`components/ServicesCarousel.tsx`)
- Carrusel 3D circular de servicios con transforms CSS (left/center/right).
- Autoplay 5s, navegación con flechas/dots/teclado/swipe táctil.
- `"use client"` — usa `useState`, `useEffect`, eventos touch.
- Usa `motion/react` para AnimatePresence y animación blur-in por palabra.

#### TextHoverEffect (`components/TextHoverEffect.tsx`)
- SVG con radial gradient que sigue el mouse.
- `"use client"` — usa `useRef` y `onMouseMove`.

#### ContactSection (`components/ContactSection.tsx`)
- Tres paneles: Calendly (iframe embed), formulario de contacto, newsletter.
- `"use client"` — maneja estado de los forms.
- Usa `fetch` hacia `/api/contact` y `/api/newsletter`.

#### Header (`components/Header.tsx`)
- `"use client"` — usa `usePathname()` para adaptar los links.
- En la home (`/`): links con `#section`. En sub-páginas: links con `/#section`.
- El logo enlaza a `#inicio` en home, a `/` en sub-páginas.

### API Routes

- **`/api/contact`**: Recibe `{name, email, company?, message}`, envía email con Resend a `vhurtado@grupohurtado.cl`. From: `contacto@lav.software`.
- **`/api/newsletter`**: Recibe `{email}`, agrega a la Audience de Resend ID `00821f58-5245-48dd-8343-9a0abe55c702`.
- La API key de Resend se lee de `process.env.RESEND_API_KEY` — nunca hardcodees credenciales.
- **CRÍTICO**: instancia `new Resend(...)` **dentro del handler**, no a nivel de módulo. Si lo instancias afuera, el build falla porque Next.js importa el módulo en build time cuando la variable aún no existe.
- Valida siempre el body antes de llamar a Resend. Retorna `{ error }` con status 4xx si faltan campos.

### SEO

#### Archivos de SEO global (`app/layout.tsx`)
- Metadata completa: title template `"%s | LAV Systems"`, description, keywords, canonical, robots, OG, Twitter Card.
- `viewport` exportado separado con `themeColor: "#0c1f35"`.
- JSON-LD: `Organization` + `ProfessionalService` + `Person` (Víctor Hurtado) + `FAQPage` + `WebSite` + `WebPage`.
- Logo en schema: `/icon.svg` (no `/favicon.svg` que no existe).

#### Sitemap (`app/sitemap.ts`)
- Genera `/sitemap.xml` con 8 URLs y prioridades.
- Al crear nuevas rutas, agregar la URL aquí.

#### Robots (`app/robots.ts`)
- Genera `/robots.txt`. Permite `/`, bloquea `/api/`.

#### OG Image (`app/opengraph-image.tsx`)
- Imagen OG dinámica generada en edge con `next/og`. Next.js la detecta automáticamente para `og:image` y `twitter:image`.

#### Landing pages SEO (`app/[slug]/page.tsx`)
- Cada landing tiene su propio `export const metadata` con title, description y canonical únicos.
- JSON-LD inline: `Service` + `WebPage` schema.
- Estructura: Hero (H1 + bajada + CTA) → Pain points → Solución → CTA final + enlaces internos.
- Son Server Components estáticos — no llevan `"use client"`.
- Los CTAs apuntan a `/#contacto`.

### Estructura del sitio

```
/                          → SPA principal (scroll con secciones)
/diagnostico-ia-360        → Landing SEO
/software-a-medida-ia      → Landing SEO
/automatizacion-procesos   → Landing SEO
/integracion-datos-iot     → Landing SEO
/software-para-constructoras → Landing SEO
/software-para-mineria     → Landing SEO
/software-para-empresas-familiares → Landing SEO
/card.html                 → Tarjeta digital Víctor Hurtado (HTML estático)
```

#### Secciones de la SPA (`app/page.tsx`)

```
#inicio    → Hero
#servicios → ServicesSection
#proceso   → ProcessSection
#casos     → CasesSection
#origen    → OriginSection
#contacto  → ContactSection
```

### Lo que NO hacer

- No uses `useEffect` para fetch de datos que pueden hacerse en Server Components.
- No agregues dependencias sin revisar si ya existe algo equivalente en el proyecto.
- No modifiques la palette de colores — está fijada por diseño de marca.
- No hagas `"use client"` en componentes que no lo necesitan — aumenta el bundle del cliente.
- No uses `FinalCTA.tsx` — existe pero fue descartado del diseño actual.
- No escribas comentarios que expliquen qué hace el código — solo el porqué cuando no sea obvio.
- No pongas `new Resend(...)` a nivel de módulo — va dentro del handler.

### Comandos útiles

```bash
npm run dev     # Desarrollo — hot reload
npm run build   # Verifica que el build de producción funcione
npm run lint    # ESLint — corre antes de commitear
```

### Variables de entorno requeridas

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

Sin esta variable, las rutas `/api/contact` y `/api/newsletter` fallarán.
