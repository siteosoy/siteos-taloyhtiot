import type { TaloudellinenVaikutusData } from "./financialData";
import { formatEuroRange } from "./financialData";

type Props = {
  data: TaloudellinenVaikutusData;
};

const cardBase =
  "rounded-2xl border bg-white shadow-sm ring-1 transition-[box-shadow] duration-200";

function SparkIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-indigo-700" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2z"
        className="fill-indigo-600/90"
      />
      <path
        d="M5 14l.8 2.8L8.5 17.5l-2.7.8L5 21l-.8-2.7L1.5 17.5l2.7-.8L5 14z"
        className="fill-violet-500/80"
      />
      <path
        d="M18 15l.6 2.1L20.5 17.5l-1.9.6L18 20.5l-.6-2.1-1.9-.6 1.9-.6L18 15z"
        className="fill-slate-400/75"
      />
    </svg>
  );
}

export function TaloudellinenVaikutus({ data }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* Kustannus — dominant */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-slate-200/85 px-5 py-7 shadow-md shadow-slate-900/[0.06] ring-1 ring-slate-200/70`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(59,130,246,0.11),transparent_55%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-blue-400/[0.07] blur-3xl" aria-hidden />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Kustannus</p>
          <p className="mt-4 text-[1.75rem] font-semibold leading-none tracking-[-0.03em] text-slate-950 tabular-nums sm:text-[2.125rem] md:text-[2.375rem]">
            {formatEuroRange(data.costMin, data.costMax)}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
            Vaihteluväli demossa — tarkentuu kilpailutuksella.
          </p>
        </div>
      </div>

      <div className={`${cardBase} border-slate-200/85 px-5 py-4 shadow-slate-900/[0.04] ring-slate-200/65`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Vaikutus</p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-800">{data.vastikeKuvaus}</p>
      </div>

      <div className={`${cardBase} border-slate-200/85 px-5 py-4 shadow-slate-900/[0.04] ring-slate-200/65`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Ajoitus</p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-800">{data.ajoitus}</p>
      </div>

      {/* Nyt vs myöhemmin */}
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-3.5">
        <div
          className={`${cardBase} border-emerald-200/70 bg-gradient-to-b from-emerald-50/90 to-white px-4 py-4 shadow-emerald-900/[0.04] ring-emerald-200/55`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-900/95">Jos toteutetaan nyt</p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-800">{data.skenaarioNyt}</p>
        </div>
        <div
          className={`${cardBase} border-orange-200/65 bg-gradient-to-b from-amber-50/85 to-orange-50/20 px-4 py-4 shadow-amber-900/[0.035] ring-amber-200/50`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-amber-950/90">Jos siirretään myöhemmäksi</p>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-800">{data.skenaarioMyohemmin}</p>
        </div>
      </div>

      {/* Suositus */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/95 via-blue-50/50 to-white px-5 py-5 shadow-md shadow-indigo-900/[0.07] ring-1 ring-indigo-100/80`}
      >
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-violet-400/10 blur-2xl" aria-hidden />
        <div className="relative flex gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 shadow-sm ring-1 ring-indigo-100/80">
            <SparkIcon />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-900">Suositus</p>
            <p className="mt-2 text-[15px] font-medium leading-relaxed text-slate-900">{data.aiSuositus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
