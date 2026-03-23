export type DocumentListItem = {
  id: string;
  name: string;
  meta?: string;
};

type DocumentListProps = {
  items: DocumentListItem[];
  className?: string;
  emptyLabel?: string;
};

export function DocumentList({
  items,
  className = "",
  emptyLabel = "Ei dokumentteja",
}: DocumentListProps) {
  if (items.length === 0) {
    return (
      <p className={`text-sm text-[var(--v2-foreground-muted)] ${className}`}>
        {emptyLabel}
      </p>
    );
  }

  return (
    <ul className={`space-y-2 ${className}`} role="list">
      {items.map((doc) => (
        <li
          key={doc.id}
          className="flex items-start gap-3 rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/50 px-4 py-3"
        >
          <span
            className="mt-0.5 shrink-0 text-[var(--v2-accent)]"
            aria-hidden
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[var(--v2-foreground)]">
              {doc.name}
            </p>
            {doc.meta ? (
              <p className="mt-0.5 text-xs text-[var(--v2-foreground-muted)]">
                {doc.meta}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
