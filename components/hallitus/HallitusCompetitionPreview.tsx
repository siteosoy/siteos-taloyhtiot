type ContractorRow = {
  name: string;
  priceHint: string;
};

type HallitusCompetitionPreviewProps = {
  title?: string;
  contractors: ContractorRow[];
};

export function HallitusCompetitionPreview({
  title = "Tuleva kilpailutus",
  contractors,
}: HallitusCompetitionPreviewProps) {
  const rows = contractors.slice(0, 3);

  return (
    <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-4 ring-1 ring-slate-200/60 sm:p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">Indikatiiviset vertailuhinnat (demo)</p>
      <ul className="mt-4 divide-y divide-slate-200/80" role="list">
        {rows.map((c) => (
          <li key={c.name} className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
            <span className="text-sm font-medium text-slate-800">{c.name}</span>
            <span className="shrink-0 text-sm tabular-nums text-slate-600">{c.priceHint}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
