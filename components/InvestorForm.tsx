"use client";

import { useRef, useState } from "react";
import { GlowCard } from "@/components/GlowCard";
import { trackEvent } from "@/lib/analytics";

const ORGANIZATION_TYPES = [
  "Fondo de venture capital",
  "Family office",
  "Inversionista ángel",
  "Corporate venture capital",
  "Aceleradora o incubadora",
  "Institución pública",
  "Asesor o intermediario",
  "Otro",
];

const INVESTMENT_RANGES = [
  "Menos de USD 100.000",
  "USD 100.000–250.000",
  "USD 250.000–500.000",
  "USD 500.000–1.000.000",
  "Más de USD 1.000.000",
  "Prefiero no indicarlo",
];

const INVESTMENT_STAGES = [
  "Pre-seed",
  "Seed",
  "Serie A",
  "Growth",
  "Etapa flexible",
  "No aplica",
];

const GEOGRAPHIES = [
  "Chile",
  "Latinoamérica",
  "Estados Unidos",
  "Europa",
  "Global",
  "Otro",
];

function InputField({
  id, label, type = "text", value, onChange, onFocus, placeholder, required = false,
}: {
  id: string; label: string; type?: string; value: string;
  onChange: (v: string) => void; onFocus?: () => void; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-white/50">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
      />
    </div>
  );
}

function SelectField({
  id, label, value, onChange, onFocus, options,
}: {
  id: string; label: string; value: string;
  onChange: (v: string) => void; onFocus?: () => void; options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-white/50">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
      >
        <option value="" className="bg-navy">Selecciona…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-navy">{o}</option>
        ))}
      </select>
    </div>
  );
}

export function InvestorForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [website, setWebsite] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [investmentStage, setInvestmentStage] = useState("");
  const [geography, setGeography] = useState("");
  const [thesis, setThesis] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startedRef = useRef(false);
  const handleFirstInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("investor_form_started");
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!consent) {
      setError("Debes aceptar el uso de tus datos para continuar.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/investors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, email, organization, role, organizationType,
          website, investmentRange, investmentStage, geography, thesis, message, consent,
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      trackEvent("investor_form_submitted", {
        organization_type: organizationType || undefined,
        investment_stage: investmentStage || undefined,
        geography: geography || undefined,
      } as Record<string, string>);
    } catch {
      setError("No se pudo enviar. Intenta nuevamente.");
      trackEvent("investor_form_failed");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <GlowCard glowColor="blue" className="p-8">
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-white/70">
            Gracias por tu interés en LAV Systems.<br />
            Recibimos tus antecedentes y los revisaremos para evaluar compatibilidad con la etapa
            y estrategia de la compañía. Si existe encaje, coordinaremos una conversación y
            compartiremos información adicional.
          </p>
        </div>
      </GlowCard>
    );
  }

  return (
    <GlowCard glowColor="blue" className="p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Sobre ti y tu organización</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <InputField id="investor-first-name" label="Nombre" value={firstName} onChange={setFirstName} onFocus={handleFirstInteraction} placeholder="Tu nombre" required />
            <InputField id="investor-last-name" label="Apellido" value={lastName} onChange={setLastName} onFocus={handleFirstInteraction} placeholder="Tu apellido" required />
            <InputField id="investor-email" label="Email" type="email" value={email} onChange={setEmail} onFocus={handleFirstInteraction} placeholder="tu@fondo.com" required />
            <InputField id="investor-organization" label="Organización" value={organization} onChange={setOrganization} onFocus={handleFirstInteraction} placeholder="Nombre de tu organización" />
            <InputField id="investor-role" label="Cargo" value={role} onChange={setRole} onFocus={handleFirstInteraction} placeholder="Tu cargo" />
            <SelectField id="investor-org-type" label="Tipo de organización" value={organizationType} onChange={setOrganizationType} onFocus={handleFirstInteraction} options={ORGANIZATION_TYPES} />
            <InputField id="investor-website" label="Sitio web" value={website} onChange={setWebsite} onFocus={handleFirstInteraction} placeholder="https://" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Tu perfil de inversión</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <SelectField id="investor-range" label="Rango de inversión habitual" value={investmentRange} onChange={setInvestmentRange} onFocus={handleFirstInteraction} options={INVESTMENT_RANGES} />
            <SelectField id="investor-stage" label="Etapa de inversión" value={investmentStage} onChange={setInvestmentStage} onFocus={handleFirstInteraction} options={INVESTMENT_STAGES} />
            <SelectField id="investor-geography" label="Foco geográfico" value={geography} onChange={setGeography} onFocus={handleFirstInteraction} options={GEOGRAPHIES} />
          </div>
          <div className="mt-3">
            <label htmlFor="investor-thesis" className="mb-1.5 block text-xs font-medium text-white/50">Tesis o sectores de interés</label>
            <textarea
              id="investor-thesis"
              value={thesis}
              onChange={(e) => setThesis(e.target.value)}
              onFocus={handleFirstInteraction}
              placeholder="¿Qué tipo de oportunidades sueles buscar?"
              rows={2}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="investor-message" className="mb-1.5 block text-xs font-medium text-white/50">Mensaje</label>
            <textarea
              id="investor-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={handleFirstInteraction}
              placeholder="Cuéntanos qué te interesa conversar"
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
            />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <input
            id="investor-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-accent"
          />
          <label htmlFor="investor-consent" className="text-xs leading-relaxed text-white/50">
            Acepto que LAV Systems utilice estos datos para evaluar una potencial conversación de
            inversión y contactarme en relación con esta solicitud.
          </label>
        </div>

        <p className="text-xs leading-relaxed text-white/30">
          Tus datos serán utilizados únicamente para responder esta solicitud y evaluar una posible
          relación con LAV Systems.
        </p>

        {error && <p className="text-xs text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading || !consent}
          className="flex h-11 w-full items-center justify-center rounded-xl bg-accent text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Enviando…" : "Solicitar teaser"}
        </button>
      </form>
    </GlowCard>
  );
}
