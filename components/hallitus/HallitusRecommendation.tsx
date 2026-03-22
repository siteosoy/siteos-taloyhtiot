import { Surface } from "@/components/ui/Surface";

type HallitusRecommendationProps = {
  title?: string;
  summary: string;
  reasons: string[];
};

export function HallitusRecommendation({
  title = "Suositus",
  summary,
  reasons,
}: HallitusRecommendationProps) {
  const items = reasons.slice(0, 3);

  return (
    <div className="space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
      <Surface variant="accent" padding="md" className="shadow-card-accent ring-blue-100/60">
        <p className="text-sm font-medium leading-relaxed text-slate-900">{summary}</p>
      </Surface>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Perusteet</p>
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-700">
          {items.map((line) => (
            <li key={line} className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-600" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
