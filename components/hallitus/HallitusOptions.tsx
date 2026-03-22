type OptionItem = {
  id: string;
  label: string;
  description: string;
  recommended?: boolean;
};

type HallitusOptionsProps = {
  title?: string;
  options: OptionItem[];
};

export function HallitusOptions({ title = "Vaihtoehdot", options }: HallitusOptionsProps) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{title}</p>
      <ul className="mt-4 flex flex-col gap-3" role="list">
        {options.map((opt) => (
          <li
            key={opt.id}
            className={`rounded-xl border px-4 py-3.5 transition-colors sm:px-5 sm:py-4 ${
              opt.recommended
                ? "border-blue-200/90 bg-blue-50/50 ring-1 ring-blue-100/80"
                : "border-slate-200/90 bg-white ring-1 ring-slate-200/70"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-semibold text-slate-900">{opt.label}</p>
              {opt.recommended ? (
                <span className="inline-flex rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Suositeltu
                </span>
              ) : null}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{opt.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
