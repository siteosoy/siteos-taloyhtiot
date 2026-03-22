import { Surface } from "@/components/ui/Surface";
import { talousAiDemo } from "../talousAiDemo";

export function TalousAiComparisonSection() {
  const { comparison } = talousAiDemo;
  const a = comparison.optionA;
  const b = comparison.optionB;

  return (
    <section className="section-y-tight" aria-labelledby="talous-ai-vertailu-heading">
      <h2 id="talous-ai-vertailu-heading" className="section-label-tight">
        Vertailu
      </h2>
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <Surface variant="default" padding="lg" className="border-slate-200/95 ring-1 ring-slate-200/75">
          <h3 className="text-base font-semibold tracking-tight text-slate-900">{a.title}</h3>
          <ul className="mt-5 space-y-4 divide-y divide-slate-100">
            {a.lines.map((row) => (
              <li key={row.label} className="flex flex-col gap-1 pt-4 first:pt-0">
                <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {row.label}
                </span>
                <span className="text-lg font-semibold tabular-nums text-slate-900">{row.value}</span>
              </li>
            ))}
          </ul>
        </Surface>

        <Surface
          variant="elevated"
          padding="lg"
          className="relative overflow-hidden border-emerald-200/85 bg-gradient-to-br from-white via-emerald-50/40 to-white shadow-card-hero ring-2 ring-emerald-400/45"
        >
          <div className="pointer-events-none absolute -right-10 -top-8 h-36 w-36 rounded-full bg-emerald-400/18 blur-2xl" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                Suositus
              </span>
            </div>
            <h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900">{b.title}</h3>
            <ul className="mt-5 space-y-4 divide-y divide-emerald-100/90">
              {b.lines.map((row) => (
                <li key={row.label} className="flex flex-col gap-1 pt-4 first:pt-0">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-900/75">
                    {row.label}
                  </span>
                  <span className="text-lg font-semibold tabular-nums text-emerald-950">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Surface>
      </div>
    </section>
  );
}
