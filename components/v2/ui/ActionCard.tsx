type ActionCardProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function ActionCard({
  title,
  description,
  action,
  children,
  className = "",
}: ActionCardProps) {
  return (
    <div
      className={`flex flex-col gap-5 rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/55 p-6 v2-shadow-glow sm:flex-row sm:items-start sm:justify-between ${className}`}
    >
      <div className="min-w-0 flex-1 space-y-2">
        <h3 className="text-base font-semibold tracking-tight text-[var(--v2-foreground)]">
          {title}
        </h3>
        {description ? (
          <p className="max-w-xl text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="pt-1 text-sm text-[var(--v2-foreground-muted)]">
            {children}
          </div>
        ) : null}
      </div>
      {action ? <div className="shrink-0 sm:pt-0.5">{action}</div> : null}
    </div>
  );
}
