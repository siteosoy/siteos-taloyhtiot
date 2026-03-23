export type ComparisonColumn = {
  key: string;
  label: string;
  align?: "left" | "right";
};

export type ComparisonRow = Record<string, React.ReactNode>;

type ComparisonTableProps = {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  className?: string;
  caption?: string;
};

export function ComparisonTable({
  columns,
  rows,
  className = "",
  caption,
}: ComparisonTableProps) {
  return (
    <div
      className={`overflow-x-auto rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface)]/50 ${className}`}
    >
      <table className="w-full min-w-[320px] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/40">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={`px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--v2-foreground-muted)] ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[var(--v2-border)]/70 last:border-0"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-5 py-4 text-[var(--v2-foreground)] ${
                    col.align === "right"
                      ? "text-right tabular-nums text-[var(--v2-foreground-muted)]"
                      : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
