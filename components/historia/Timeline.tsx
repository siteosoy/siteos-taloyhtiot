import type { TimelineEvent } from "./data";

type TimelineProps = {
  events: TimelineEvent[];
};

function statusLabel(status: TimelineEvent["status"]) {
  if (status === "ongoing") return "Käynnissä";
  if (status === "planned") return "Suunnitteilla";
  return null;
}

export function Timeline({ events }: TimelineProps) {
  return (
    <ol className="relative space-y-0">
      {events.map((event, index) => {
        const isLast = index === events.length - 1;
        const badge = statusLabel(event.status);
        return (
          <li key={`${event.year}-${event.title}`} className="relative flex gap-4 pb-10 last:pb-0">
            {!isLast ? (
              <span
                className="absolute left-[15px] top-8 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent"
                aria-hidden
              />
            ) : null}
            <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200/95 bg-white shadow-sm ring-2 ring-white">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" aria-hidden />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-sm font-semibold tabular-nums text-slate-500">{event.year}</span>
                <span className="text-[15px] font-semibold text-slate-900">{event.title}</span>
                {badge ? (
                  <span className="inline-flex items-center rounded-full border border-amber-200/90 bg-amber-50/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-900/90">
                    {badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{event.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
