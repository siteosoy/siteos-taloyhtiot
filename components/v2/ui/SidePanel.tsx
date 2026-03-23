type SidePanelProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function SidePanel({ title, children, className = "" }: SidePanelProps) {
  return (
    <aside
      className={`rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/45 p-6 v2-shadow-glow ${className}`}
    >
      {title ? (
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
          {title}
        </h3>
      ) : null}
      <div
        className={
          title
            ? "mt-4 space-y-3 text-sm leading-relaxed text-[var(--v2-foreground-muted)]"
            : "space-y-3 text-sm leading-relaxed text-[var(--v2-foreground-muted)]"
        }
      >
        {children}
      </div>
    </aside>
  );
}
