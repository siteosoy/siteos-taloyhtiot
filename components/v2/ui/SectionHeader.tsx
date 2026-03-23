type SectionHeaderProps = {
  id?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  headingLevel?: 2 | 3;
};

export function SectionHeader({
  id,
  title,
  description,
  action,
  className = "",
  headingLevel = 2,
}: SectionHeaderProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}
    >
      <div className="min-w-0 space-y-2">
        <Heading
          id={id}
          className="text-lg font-semibold tracking-tight text-[var(--v2-foreground)]"
        >
          {title}
        </Heading>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="shrink-0 sm:pb-0.5">{action}</div>
      ) : null}
    </div>
  );
}
