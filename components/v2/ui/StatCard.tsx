type StatCardProps = {
  label: string;
  value: React.ReactNode;
  hint?: string;
  className?: string;
};

export function StatCard({ label, value, hint, className = "" }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface)]/70 p-6 v2-shadow-glow ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--v2-foreground-muted)]">
        {label}
      </p>
      <p className="mt-4 text-3xl font-semibold tabular-nums tracking-tight text-[var(--v2-foreground)]">
        {value}
      </p>
      {hint ? (
        <p className="mt-3 text-sm leading-snug text-[var(--v2-foreground-muted)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
