const phases = [
  { name: "Suunnittelu", state: "done" as const },
  { name: "Materiaalit", state: "done" as const },
  { name: "Asennus", state: "active" as const },
  { name: "Tarkastus", state: "pending" as const },
];

const timeline = [
  { label: "Työ aloitettu", detail: "3.3.2025" },
  { label: "Materiaalit toimitettu", detail: "12.3.2025" },
  { label: "Tarkastus varattu", detail: "22.4.2025" },
];

function PhaseStep({
  name,
  state,
}: {
  name: string;
  state: "done" | "active" | "pending";
}) {
  const circle =
    state === "done"
      ? "border-emerald-400 bg-emerald-50 text-emerald-800 ring-emerald-200/80"
      : state === "active"
        ? "border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-400/50"
        : "border-slate-200 bg-white text-slate-400 ring-slate-200/80";

  const label =
    state === "done" ? "text-slate-800" : state === "active" ? "font-semibold text-slate-900" : "text-slate-500";

  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${circle}`}
        aria-hidden
      >
        {state === "done" ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : state === "active" ? (
          <span className="tabular-nums">…</span>
        ) : (
          <span className="tabular-nums opacity-70">—</span>
        )}
      </div>
      <p className={`mt-2.5 text-[11px] leading-tight sm:text-xs ${label}`}>{name}</p>
      {state === "active" ? (
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-blue-700">Käynnissä</p>
      ) : null}
      {state === "done" ? (
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-emerald-700/90">Valmis</p>
      ) : null}
      {state === "pending" ? (
        <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-400">Odottaa</p>
      ) : null}
    </div>
  );
}

function SparkMini() {
  return (
    <svg className="h-4 w-4 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2z" className="fill-indigo-600/90" />
    </svg>
  );
}

export function UrakanSeurantaSection() {
  const progress = 45;

  return (
    <section className="mt-10 border-t border-slate-200/80 pt-10" aria-labelledby="urakan-seuranta-otsikko">
      <h2 id="urakan-seuranta-otsikko" className="section-label">
        Urakan seuranta
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
        Päätöksestä valmistumiseen: sama näkymä hallitukselle — eteneminen, vaiheet ja dokumentointi yhdessä ketjussa.
      </p>

      {/* Käynnissä */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card-blue-lg ring-1 ring-slate-200/75 sm:p-7">
        <div className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-blue-400/[0.06] blur-3xl" aria-hidden />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Kohde</p>
              <p className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900">Pihavalaistus</p>
            </div>
            <span className="shrink-0 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-900 ring-1 ring-blue-200/70">
              Käynnissä
            </span>
          </div>

          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Urakoitsija</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">Sähköurakointi Oy</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Aloituspäivä</dt>
              <dd className="mt-1 text-sm font-semibold tabular-nums text-slate-900">3.3.2025</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-2">
              <dt className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Arvioitu valmistuminen</dt>
              <dd className="mt-1 text-sm font-semibold tabular-nums text-slate-900">28.4.2025</dd>
            </div>
          </dl>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-slate-700">Eteneminen</span>
              <span className="tabular-nums font-semibold text-slate-900">{progress} %</span>
            </div>
            <div
              className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200/80"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Urakka valmis ${progress} prosenttia`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-sm transition-[width]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Vaiheet</p>
            <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
              {phases.map((p) => (
                <PhaseStep key={p.name} name={p.name} state={p.state} />
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Aikajana</p>
            <ul className="mt-4 space-y-4">
              {timeline.map((t) => (
                <li key={t.label} className="flex flex-wrap items-baseline justify-between gap-2 border-l-2 border-slate-200 pl-4">
                  <span className="text-sm font-medium text-slate-900">{t.label}</span>
                  <span className="text-sm tabular-nums text-slate-500">{t.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/90 to-white px-4 py-4 ring-1 ring-indigo-100/80">
            <div className="flex gap-3">
              <SparkMini />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-900">Huomio</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
                  Asennus etenee suunnitellusti ilman viivästyksiä.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lopputila — esimerkki */}
      <div className="mt-6 rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-sm ring-1 ring-emerald-100/90 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-100/90 pb-4">
          <p className="text-lg font-semibold text-emerald-950">Urakka valmis</p>
          <span className="rounded-full border border-emerald-200/90 bg-emerald-100/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/70">
            Esimerkki luovutuksesta
          </span>
        </div>
        <ul className="mt-5 space-y-3 text-sm text-slate-800">
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
            <span className="font-medium text-slate-900">Hyväksytty</span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
            <span className="font-medium text-slate-900">Dokumentit tallennettu</span>
          </li>
          <li className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
            <span className="font-medium text-slate-900">Huoltokirja päivitetty</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
