"use client";

type DemoSuccessPanelProps = {
  title: string;
  description?: string;
  className?: string;
};

/**
 * Calm, premium confirmation for demo-only actions (no backend).
 */
export function DemoSuccessPanel({ title, description, className = "" }: DemoSuccessPanelProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`rounded-xl border border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-white p-4 shadow-sm ring-1 ring-emerald-100/80 ${className}`}
    >
      <div className="flex gap-3">
        <span
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100/90 text-emerald-800 ring-1 ring-emerald-200/80"
          aria-hidden
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-emerald-950">{title}</p>
          {description ? (
            <p className="mt-1.5 text-sm leading-relaxed text-emerald-900/85">{description}</p>
          ) : null}
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-emerald-800/70">
            Demo — ei tallennusta palvelimelle
          </p>
        </div>
      </div>
    </div>
  );
}
