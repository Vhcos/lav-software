<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Guía para agentes IA — lav-software

## Contexto del proyecto

Sitio de ventas de una sola página (SPA con scroll) para **LAV Systems**, consultora chilena de software personalizado con IA. Todo el copy está en español chileno. El diseño es oscuro (navy `#0c1f35`) con acento cyan (`#0891b2`).

## Reglas de trabajo

### Next.js 16 + React 19 — gotchas críticos

- **Todos los componentes son Server Components por defecto.** Solo agrega `"use client"` cuando sea estrictamente necesario: event handlers, hooks de estado, refs al DOM, Three.js, Motion.
- **No uses `next/router`** — usa `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`).
- **No uses `getServerSideProps` ni `getStaticProps`** — usa `fetch()` directamente en Server Components o Route Handlers.
- **Los Route Handlers** van en `app/api/[ruta]/route.ts` y exportan funciones `GET`, `POST`, etc.
- **`next/font`** se importa desde `next/font/google`, no desde `@next/font`.
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
- Grid Three.js de 40×60 puntos animados con sine waves.
- `"use client"` — monta el canvas en un `useEffect`.
- Siempre dispose: `geometry.dispose()`, `material.dispose()`, `renderer.dispose()`.

#### TextHoverEffect (`components/TextHoverEffect.tsx`)
- SVG con radial gradient que sigue el mouse.
- `"use client"` — usa `useRef` y `onMouseMove`.

#### ContactSection (`components/ContactSection.tsx`)
- Tres paneles: Calendly (iframe embed), formulario de contacto, newsletter.
- `"use client"` — maneja estado de los forms.
- Usa `fetch` hacia `/api/contact` y `/api/newsletter`.

### API Routes

- **`/api/contact`**: Recibe `{name, email, company?, message}`, envía email con Resend a `vhurtado@grupohurtado.cl`. From: `contacto@lav.software`.
- **`/api/newsletter`**: Recibe `{email}`, agrega a la Audience de Resend ID `00821f58-5245-48dd-8343-9a0abe55c702`.
- La API key de Resend se lee de `process.env.RESEND_API_KEY` — nunca hardcodees credenciales.
- **CRÍTICO**: instancia `new Resend(...)` **dentro del handler**, no a nivel de módulo. Si lo instancias afuera, el build falla porque Next.js importa el módulo en build time cuando la variable aún no existe.
- Valida siempre el body antes de llamar a Resend. Retorna `{ error }` con status 4xx si faltan campos.

### SEO — archivos generados automáticamente

- `app/layout.tsx` — metadata completa: title, description, keywords, canonical, robots, OG, Twitter Card, JSON-LD (`Organization` + `WebSite` + `WebPage`).
- `app/opengraph-image.tsx` — imagen OG dinámica generada en edge con `next/og`. No requiere imagen estática. Next.js la detecta automáticamente y la inyecta en `og:image` y `twitter:image`.
- `app/sitemap.ts` — genera `/sitemap.xml`. Agregar nuevas URLs aquí si se crean rutas adicionales.
- `app/robots.ts` — genera `/robots.txt`. Permite `/`, bloquea `/api/`.

### Estructura de la página

`app/page.tsx` es el único entry point de UI. Las secciones se agregan aquí en orden. Cada sección tiene un `id` para el scroll del Header:

```
#inicio → Hero
#servicios → ServicesSection
#proceso → ProcessSection
#casos → CasesSection
#origen → OriginSection
#contacto → ContactSection
```

### Lo que NO hacer

- No crees páginas adicionales — es una SPA de una sola ruta.
- No uses `useEffect` para fetch de datos que pueden hacerse en Server Components.
- No agregues dependencias sin revisar si ya existe algo equivalente en el proyecto.
- No modifiques la palette de colores — está fijada por diseño de marca.
- No hagas `"use client"` en componentes que no lo necesitan — aumenta el bundle del cliente.
- No uses `FinalCTA.tsx` — existe pero fue descartado del diseño actual.
- No escribas comentarios que expliquen qué hace el código — solo el porqué cuando no sea obvio.

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
