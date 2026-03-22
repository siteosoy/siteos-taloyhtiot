import { Surface } from "@/components/ui/Surface";
import { summaryInsights } from "./data";

export function SummaryCard() {
  return (
    <Surface
      variant="elevated"
      padding="lg"
      className="relative overflow-hidden border-slate-200/70 bg-gradient-to-br from-slate-50/90 via-white to-indigo-50/25 shadow-card-blue-lg ring-1 ring-slate-200/80"
    >
      <div className="blur-blob pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-indigo-400/[0.07] blur-3xl" />
      <div className="blur-blob pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-blue-500/[0.06] blur-3xl" />
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-indigo-200/90 bg-indigo-50/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-900/90 shadow-sm">
            Yhteenveto
          </span>
          <span className="text-[11px] font-medium text-slate-500">
            Tiivistelmä päätöksentekoon (demo)
          </span>
        </div>
        <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">Yhteenveto</h2>
        <ul className="mt-4 space-y-2.5">
          {summaryInsights.map((line) => (
            <li
              key={line}
              className="border-l-2 border-indigo-500/75 pl-3 text-sm font-medium leading-snug text-slate-800"
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[11px] text-slate-500">
          Demo: yhteenveto perustuu taloyhtiön toteutuneisiin ja suunnitteilla oleviin hankkeisiin.
        </p>
      </div>
    </Surface>
  );
}
