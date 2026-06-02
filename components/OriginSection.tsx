const names = ["Laura", "Agustina", "Valentina", "Victoria"];

export default function OriginSection() {
  return (
    <section id="origen" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">Origen</p>
        <h2 className="mb-10 text-3xl font-bold text-navy sm:text-4xl">El origen de LAV</h2>

        {/* Letters */}
        <div className="mx-auto mb-4 flex items-center justify-center gap-3">
          {["L", "A", "V"].map((letter) => (
            <div
              key={letter}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-lg font-bold text-white"
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Names */}
        <p className="mb-10 text-sm text-slate-400">
          {names.join(" · ")}
        </p>

        <blockquote className="mb-6 text-lg leading-relaxed text-slate-600 md:text-xl">
          LAV nace como una marca familiar inspirada en{" "}
          <span className="font-medium text-navy">Laura, Agustina, Valentina y Victoria</span>.
          Antes que cualquier empresa, software o proyecto, ellas son mi mejor creación.
        </blockquote>

        <p className="text-base leading-relaxed text-slate-500">
          Esa idea también define cómo trabajamos: construir cosas útiles, simples y duraderas.
          Sistemas que no existan solo para verse bien, sino porque resuelven un problema real
          y dejan algo funcionando.
        </p>

        <div className="mt-12 border-t border-slate-100 pt-10">
          <p className="text-sm text-slate-400">
            Criterio empresarial · Capacidad técnica · Experiencia demostrable
          </p>
        </div>
      </div>
    </section>
  );
}
