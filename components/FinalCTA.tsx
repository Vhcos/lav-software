export default function FinalCTA() {
  return (
    <section id="contacto" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Contacto</p>
        <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          ¿Qué proceso de tu empresa te está quitando tiempo, dinero o control?
        </h2>
        <p className="mb-10 text-base leading-relaxed text-white/55 md:text-lg">
          Partamos con una conversación de diagnóstico. Si el problema se puede resolver con
          software, automatización, datos o IA, diseñamos una solución clara, simple y lista
          para operar.
        </p>
        <a
          href="mailto:contacto@lav.software"
          className="inline-flex h-14 items-center rounded-xl bg-accent px-9 text-base font-semibold text-white shadow-xl shadow-accent/20 transition-colors hover:bg-accent-dark"
        >
          Agendar diagnóstico
        </a>
        <p className="mt-6 text-sm text-white/30">
          Reunión inicial · Diagnóstico claro · Propuesta aterrizada
        </p>
      </div>
    </section>
  );
}
