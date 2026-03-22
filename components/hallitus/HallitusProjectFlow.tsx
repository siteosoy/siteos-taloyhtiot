type StepState = "completed" | "current" | "upcoming";

type FlowStep = {
  label: string;
  state: StepState;
};

type HallitusProjectFlowProps = {
  phase: "board" | "procurement";
};

function stepsForPhase(phase: HallitusProjectFlowProps["phase"]): FlowStep[] {
  if (phase === "board") {
    return [
      { label: "Toive vastaanotettu", state: "completed" },
      { label: "Analyysi tehty", state: "completed" },
      { label: "Hallituksen käsittely", state: "current" },
      { label: "Kilpailutus", state: "upcoming" },
      { label: "Urakka", state: "upcoming" },
    ];
  }
  return [
    { label: "Toive vastaanotettu", state: "completed" },
    { label: "Analyysi tehty", state: "completed" },
    { label: "Hallituksen käsittely", state: "completed" },
    { label: "Kilpailutus", state: "current" },
    { label: "Urakka", state: "upcoming" },
  ];
}

export function HallitusProjectFlow({ phase }: HallitusProjectFlowProps) {
  const steps = stepsForPhase(phase);

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Projektin eteneminen</p>
      <ol className="relative mt-4 space-y-0" aria-label="Projektin vaiheet">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;

          return (
            <li key={step.label} className="relative flex gap-3 pb-8 last:pb-0 sm:gap-4">
              {!isLast ? (
                <span
                  className={`absolute left-[15px] top-8 h-[calc(100%-0.5rem)] w-px sm:left-[15px] ${
                    step.state === "completed" ? "bg-emerald-300/90" : "bg-slate-200/90"
                  }`}
                  aria-hidden
                />
              ) : null}
              <div className="relative z-[1] flex w-8 shrink-0 justify-center">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums ${
                    step.state === "completed"
                      ? "bg-emerald-600 text-white shadow-sm shadow-emerald-900/15"
                      : step.state === "current"
                        ? "bg-blue-600 text-white shadow-[0_0_0_4px_rgba(37,99,235,0.2)] ring-2 ring-blue-100"
                        : "border border-slate-200 bg-white text-slate-400"
                  }`}
                  aria-current={step.state === "current" ? "step" : undefined}
                >
                  {step.state === "completed" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span className="text-[10px]">{i + 1}</span>
                  )}
                </span>
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p
                  className={`text-sm font-medium leading-snug ${
                    step.state === "current"
                      ? "text-slate-900"
                      : step.state === "completed"
                        ? "text-slate-800"
                        : "text-slate-500"
                  }`}
                >
                  {step.label}
                </p>
                {step.state === "current" ? (
                  <p className="mt-1 text-xs leading-relaxed text-blue-800/90">Seuraava painopiste tässä vaiheessa</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
