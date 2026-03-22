import { SectionCard } from "./SectionCard";
import { Timeline } from "./Timeline";
import { projectHistory, timelineEvents } from "./data";

function statusStyle(status: (typeof projectHistory)[number]["status"]) {
  switch (status) {
    case "Käynnissä":
      return "border-amber-200/90 bg-amber-50/80 text-amber-950";
    case "Suunnitteilla":
      return "border-slate-200/90 bg-slate-50 text-slate-800";
    default:
      return "border-emerald-200/90 bg-emerald-50/70 text-emerald-950";
  }
}

export function HistoriaSections() {
  return (
    <div className="space-y-0">
      <section className="section-y" aria-labelledby="historia-aikajana">
        <h2 id="historia-aikajana" className="section-label">
          Aikajana
        </h2>
        <div className="rounded-2xl border border-slate-200/95 bg-white p-6 shadow-card shadow-slate-900/[0.04] ring-1 ring-slate-200/70 sm:p-8">
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="section-y pb-2" aria-labelledby="historia-projektit">
        <h2 id="historia-projektit" className="section-label">
          Esimerkkihankkeet
        </h2>
        <SectionCard
          title="Valitut hankkeet"
          description="Nimi, vuosi, kuvaus ja kustannustaso — kevyt viite päätöksentekoon."
        >
          <ul className="space-y-4">
            {projectHistory.map((p) => (
              <li
                key={`${p.name}-${p.year}`}
                className="rounded-xl border border-slate-100 bg-slate-50/35 px-4 py-4 ring-1 ring-slate-100/90"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                    <p className="mt-1 text-xs font-medium tabular-nums text-slate-500">{p.year}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${statusStyle(p.status)}`}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">{p.scope}</p>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2 border-t border-slate-200/60 pt-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Arvioitu kustannus
                  </span>
                  <span className="text-sm font-semibold tabular-nums text-slate-900">{p.cost}</span>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>
    </div>
  );
}
