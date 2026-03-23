type SearchBarProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "type"
> & {
  label?: string;
};

export function SearchBar({
  label = "Haku",
  placeholder = "Hae…",
  className = "",
  id,
  ...props
}: SearchBarProps) {
  const inputId = id ?? "v2-search";

  return (
    <div className={`relative ${className}`}>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <span
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--v2-foreground-muted)]"
        aria-hidden
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.2-4.2" />
        </svg>
      </span>
      <input
        id={inputId}
        type="search"
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface)]/80 py-3 pl-12 pr-4 text-sm text-[var(--v2-foreground)] placeholder:text-[var(--v2-foreground-muted)]/80 outline-none ring-[var(--v2-accent)]/0 transition-shadow focus:border-[var(--v2-accent)]/40 focus:ring-2 focus:ring-[var(--v2-accent)]/25"
        {...props}
      />
    </div>
  );
}
