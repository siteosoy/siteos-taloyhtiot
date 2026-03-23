type AlertVariant = "info" | "warning" | "danger" | "success";

const variantClass: Record<AlertVariant, string> = {
  info: "border-[var(--v2-accent)]/30 bg-[var(--v2-accent-dim)]/80",
  warning: "border-amber-400/25 bg-amber-500/[0.08]",
  danger: "border-[var(--v2-danger)]/35 bg-[var(--v2-danger)]/[0.08]",
  success: "border-[var(--v2-success)]/30 bg-[var(--v2-success)]/[0.08]",
};

const variantLabel: Record<AlertVariant, string> = {
  info: "Tieto",
  warning: "Huomio",
  danger: "Kriittinen",
  success: "Valmis",
};

type AlertCardProps = {
  title: string;
  children?: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
};

export function AlertCard({
  title,
  children,
  variant = "info",
  className = "",
}: AlertCardProps) {
  return (
    <div
      role="status"
      className={`rounded-2xl border px-5 py-4 ${variantClass[variant]} ${className}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--v2-foreground-muted)]">
          {variantLabel[variant]}
        </span>
        <h3 className="text-sm font-semibold text-[var(--v2-foreground)]">
          {title}
        </h3>
      </div>
      {children ? (
        <div className="mt-2 text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          {children}
        </div>
      ) : null}
    </div>
  );
}
