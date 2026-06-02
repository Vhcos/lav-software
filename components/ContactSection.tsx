"use client";

import { useState } from "react";

// TODO: Replace with your LAV Systems Calendly event URL once created
const CALENDLY_URL = "https://calendly.com/vhurtado-lav/diagnostico-30min";

function CardPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

function InputField({
  label, type = "text", value, onChange, placeholder, required = false,
}: {
  label: string; type?: string; value: string;
  onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-white/50">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
      />
    </div>
  );
}

function CalendlyPanel() {
  return (
    <CardPanel>
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      </div>
      <h3 className="mb-2 font-semibold text-white">Agendar diagnóstico</h3>
      <p className="mb-6 text-sm leading-relaxed text-white/45">
        Reunión de 30 minutos para entender tu problema, revisar procesos y diseñar una propuesta clara. Sin compromiso.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
      >
        Elegir horario
      </a>
      <p className="mt-4 text-center text-xs text-white/25">Diagnóstico claro · Propuesta aterrizada</p>
    </CardPanel>
  );
}

function ContactFormPanel() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("No se pudo enviar. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardPanel>
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </div>
      <h3 className="mb-2 font-semibold text-white">Escríbenos</h3>
      <p className="mb-5 text-sm leading-relaxed text-white/45">Cuéntanos tu problema y te respondemos en menos de 24 horas.</p>

      {sent ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 py-8 text-center">
          <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-white/70">¡Mensaje enviado!<br />Te respondemos pronto.</p>
          <button onClick={() => setSent(false)} className="text-xs text-white/30 hover:text-white/60">
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField label="Nombre" value={name} onChange={setName} placeholder="Tu nombre" required />
          <InputField label="Empresa" value={company} onChange={setCompany} placeholder="Nombre de la empresa" />
          <InputField label="Email" type="email" value={email} onChange={setEmail} placeholder="tu@empresa.cl" required />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-white/50">Mensaje</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="¿Qué proceso te está quitando tiempo o control?"
              rows={3}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-white/10 text-sm font-medium text-white transition hover:bg-white/15 disabled:opacity-50"
          >
            {loading ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      )}
    </CardPanel>
  );
}

function NewsletterPanel() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("No se pudo suscribir. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardPanel>
      <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
        </svg>
      </div>
      <h3 className="mb-2 font-semibold text-white">Newsletter</h3>
      <p className="mb-5 text-sm leading-relaxed text-white/45">
        Contenido sobre software, automatización, IA y gestión para empresas. Sin spam, sin frecuencia forzada.
      </p>

      {sent ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-accent/20 bg-accent/5 py-8 text-center">
          <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-white/70">¡Suscrito!<br />Te añadiremos a la lista pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField label="Tu email" type="email" value={email} onChange={setEmail} placeholder="tu@empresa.cl" required />
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-white/10 text-sm font-medium text-white transition hover:bg-white/15 disabled:opacity-50"
          >
            {loading ? "Suscribiendo…" : "Suscribirse"}
          </button>
          <p className="text-center text-xs text-white/25">Sin spam · Puedes cancelar cuando quieras</p>
        </form>
      )}
    </CardPanel>
  );
}

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Contacto</p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            ¿Qué proceso de tu empresa te está<br className="hidden sm:block" /> quitando tiempo, dinero o control?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
            Partamos con una conversación de diagnóstico. Si el problema se puede resolver con
            software, automatización, datos o IA, diseñamos una solución clara, simple y lista para operar.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <CalendlyPanel />
          <ContactFormPanel />
          <NewsletterPanel />
        </div>
      </div>
    </section>
  );
}
