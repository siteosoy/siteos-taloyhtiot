import Link from "next/link";

const navItems = [
  { href: "/v2", label: "Etusivu" },
  { href: "/v2/talous", label: "Talous" },
  { href: "/v2/dokumentit", label: "Dokumentit" },
  { href: "/v2/kilpailutus", label: "Kilpailutus" },
  { href: "/v2/tehtavat", label: "Tehtävät" },
  { href: "/v2/taloyhtio", label: "Taloyhtiön tiedot" },
] as const;

const navLinkClass =
  "rounded-lg border border-[var(--v2-border)] bg-[var(--v2-surface)]/70 px-3 py-2 text-sm font-medium text-[var(--v2-foreground-muted)] transition-colors hover:border-[var(--v2-accent)]/35 hover:bg-[var(--v2-accent-dim)]/60 hover:text-[var(--v2-foreground)]";

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="v2-scope w-full bg-[var(--v2-background)] text-[var(--v2-foreground)]">
      <div className="page-shell flex max-w-6xl flex-col gap-6 py-8 sm:py-10">
        <div className="flex flex-col gap-1 border-b border-[var(--v2-border)] pb-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--v2-foreground-muted)]">
            SITEOS Taloyhtiöt
          </p>
          <p className="text-sm font-semibold text-[var(--v2-foreground)]">v2</p>
        </div>
        <nav
          className="flex flex-wrap gap-2"
          aria-label="SITEOS Taloyhtiöt v2"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="min-h-[40vh]">{children}</main>
      </div>
    </div>
  );
}
