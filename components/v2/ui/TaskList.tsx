export type TaskListItem = {
  id: string;
  title: string;
  meta?: string;
  status?: string;
};

type TaskListProps = {
  items: TaskListItem[];
  className?: string;
  emptyLabel?: string;
};

export function TaskList({
  items,
  className = "",
  emptyLabel = "Ei tehtäviä",
}: TaskListProps) {
  if (items.length === 0) {
    return (
      <p className={`text-sm text-[var(--v2-foreground-muted)] ${className}`}>
        {emptyLabel}
      </p>
    );
  }

  return (
    <ul
      className={`divide-y divide-[var(--v2-border)] rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface)]/60 ${className}`}
      role="list"
    >
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0">
            <p className="text-sm font-medium text-[var(--v2-foreground)]">
              {item.title}
            </p>
            {item.meta ? (
              <p className="mt-1 text-xs text-[var(--v2-foreground-muted)]">
                {item.meta}
              </p>
            ) : null}
          </div>
          {item.status ? (
            <span className="shrink-0 rounded-md bg-[var(--v2-accent-dim)] px-2.5 py-1 text-xs font-medium text-[var(--v2-accent)]">
              {item.status}
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
