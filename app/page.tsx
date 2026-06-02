"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background blobs */}
      <div
        className="blob-1 pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
      />
      <div
        className="blob-2 pointer-events-none absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)" }}
      />
      <div
        className="blob-3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)" }}
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Badge */}
        <div className="fade-up-1 mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/50 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_2px_rgba(167,139,250,0.6)]" />
          En construcción · Pronto disponible
        </div>

        {/* Brand */}
        <h1
          className="brand-glow fade-up-2 mb-6 font-mono text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          lav.software
          <span className="cursor-blink" aria-hidden />
        </h1>

        {/* Tagline */}
        <p className="fade-up-3 mb-4 max-w-md text-lg font-light leading-relaxed text-white/60 sm:text-xl">
          Building the future,{" "}
          <span className="text-violet-400">one line at a time.</span>
        </p>
        <p className="fade-up-3 mb-12 max-w-sm text-sm text-white/30">
          Estamos construyendo algo increíble. Déjanos tu email y serás el primero en saberlo.
        </p>

        {/* Email form */}
        <div className="fade-up-4 w-full max-w-sm">
          {submitted ? (
            <div className="flex items-center justify-center gap-3 rounded-2xl border border-violet-500/30 bg-violet-500/10 px-6 py-4 text-violet-300">
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">¡Listo! Te avisamos cuando lancemos.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none backdrop-blur-sm transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
              />
              <button
                type="submit"
                className="rounded-xl bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] transition hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] active:scale-95"
              >
                Notifícame
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fade-up-5 absolute bottom-8 flex flex-col items-center gap-4">
        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/30 transition hover:text-white/70"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/30 transition hover:text-white/70"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="text-white/30 transition hover:text-white/70"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-white/20">
          © {new Date().getFullYear()} lav.software · Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
}
