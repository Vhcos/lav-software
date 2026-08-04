import { TextHoverEffect } from "@/components/TextHoverEffect";
import { TrackedLink } from "@/components/TrackedLink";

const links = [
  { label: "Plataforma", href: "/plataforma" },
  { label: "Agentes", href: "/agentes" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Casos", href: "/casos" },
  { label: "Fundadores", href: "/programa-fundadores" },
  { label: "Contacto", href: "/#contacto" },
];

const SHOW_INVESTORS_LINK = true;
const INVESTORS_HREF = "/inversionistas";

// Sin perfiles sociales reales configurados todavía: dejar vacío en vez de enlazar a URLs genéricas.
const SOCIAL_LINKS = {
  linkedin: "",
  github: "",
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-navy">
      {/* Radial background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, rgba(15,33,55,0.7) 50%, rgba(8,145,178,0.12) 100%)",
        }}
      />

      {/* Text hover effect */}
      <div className="relative mx-auto h-28 max-w-4xl px-6 pt-10">
        <TextHoverEffect text="LAV SYSTEMS" duration={0.3} />
      </div>

      {/* Footer content */}
      <div className="relative mx-auto max-w-6xl px-6 pb-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <p className="mb-1 text-sm text-white/50">
              Tu empresa en un solo sistema. Un equipo de agentes trabajando contigo.
            </p>
            <p className="mb-3 text-xs text-white/30">
              El agente empresarial para las pymes: contabilidad, tesorería, remuneraciones,
              operaciones y documentos, coordinados por agentes especializados.
            </p>
            <a
              href="https://lav.software"
              className="text-sm text-white/25 transition-colors hover:text-white/50"
            >
              lav.software
            </a>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) =>
                l.label === "Fundadores" ? (
                  <li key={l.label}>
                    <TrackedLink
                      href={l.href}
                      event="founders_program_clicked"
                      className="text-sm text-white/40 transition-colors hover:text-white/70"
                    >
                      {l.label}
                    </TrackedLink>
                  </li>
                ) : (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/40 transition-colors hover:text-white/70"
                    >
                      {l.label}
                    </a>
                  </li>
                ),
              )}
              {SHOW_INVESTORS_LINK && (
                <li>
                  <a
                    href={INVESTORS_HREF}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    Inversionistas
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contacto@lav.software"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              contacto@lav.software
            </a>
            {(SOCIAL_LINKS.linkedin || SOCIAL_LINKS.github) && (
              <div className="flex gap-4">
                {SOCIAL_LINKS.linkedin && (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/30 transition-colors hover:text-white/60"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
                {SOCIAL_LINKS.github && (
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white/30 transition-colors hover:text-white/60"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} LAV Systems · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
