export type RecommendationCardProps = {
  title?: string;
  content: string;
  highlight?: boolean;
  className?: string;
};

export function RecommendationCard({
  title = "Suositus",
  content,
  highlight = false,
  className = "",
}: RecommendationCardProps) {
  const surface = highlight
    ? "border-blue-200/85 bg-gradient-to-br from-white via-blue-50/45 to-slate-50/70 shadow-card-accent ring-1 ring-blue-100/75"
    : "border-slate-200/85 bg-gradient-to-br from-white via-slate-50/35 to-blue-50/25 shadow-sm shadow-slate-900/[0.035] ring-1 ring-slate-200/65";

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 ${surface} ${className}`.trim()}
    >
      <div className="flex flex-col gap-4">
        <span className="inline-flex w-fit rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
          SITEOS suosittelee
        </span>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          {title}
        </p>
        <p className="text-balance text-base font-semibold leading-[1.55] tracking-tight text-slate-900 sm:text-[1.0625rem]">
          {content}
        </p>
      </div>
    </div>
  );
}
