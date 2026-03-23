type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--v2-border)] bg-[var(--v2-surface)]/40 px-8 py-14 text-center ${className}`}
    >
      <p className="text-sm font-medium text-[var(--v2-foreground)]">{title}</p>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
