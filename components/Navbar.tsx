"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { RoleSelector } from "@/components/role/RoleSelector";
import { isNavLabelVisibleForRole } from "@/components/role/roleNavigation";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { useRole } from "@/components/role/RoleProvider";

const links: { href: string; label: string; highlight?: boolean }[] = [
  { href: "/", label: "Etusivu" },
  { href: "/control", label: "Ohjaus" },
  { href: "/dashboard", label: "Työpöytä" },
  { href: "/talous", label: "Talous", highlight: true },
  { href: "/historia", label: "Historia" },
  { href: "/asukas", label: "Asukas" },
  { href: "/huolto", label: "Huolto" },
  { href: "/hallitus", label: "Hallitus" },
  { href: "/dokumentit", label: "Dokumentit" },
  { href: "/toiveet", label: "Toiveet" },
  { href: "/hata", label: "Hätä" },
];

function linkIsActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkClassName(active: boolean, highlight?: boolean): string {
  return `rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 ease-out ${
    active
      ? "bg-blue-50/95 font-semibold text-blue-900 ring-1 ring-blue-200/80"
      : highlight
        ? "text-emerald-900/90 hover:bg-emerald-50/90 hover:text-emerald-950"
        : "text-slate-600 hover:bg-slate-100/90 hover:text-slate-900"
  }`;
}

export function Navbar() {
  const pathname = usePathname();
  const { role } = useRole();
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleLinks = useMemo(
    () => links.filter((l) => isNavLabelVisibleForRole(l.label, role)),
    [role],
  );

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-3.5 py-3.5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8">
        <div className="flex items-center justify-between gap-3 lg:min-w-0 lg:flex-1 lg:justify-start lg:gap-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-900"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-bold text-white shadow-[0_2px_6px_rgba(37,99,235,0.35)] ring-1 ring-white/20">
              S
            </span>
            <span>SITEOS</span>
          </Link>

          <div className="hidden min-w-0 flex-wrap items-center gap-x-4 gap-y-2 lg:flex lg:gap-x-5">
            <RoleSelector />
            <RoleViewBadge variant="minimal" />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="siteos-mobile-nav"
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200/70 pt-3 lg:hidden">
          <RoleSelector />
          <RoleViewBadge variant="minimal" />
        </div>

        <nav
          id="siteos-mobile-nav"
          className={`flex-col gap-0.5 border-t border-slate-200/80 pt-3 ${menuOpen ? "flex" : "hidden"} lg:hidden`}
          aria-label="Pääsivut"
        >
          <div
            key={role}
            className="flex flex-col gap-0.5 animate-nav-role"
          >
            {visibleLinks.map(({ href, label, highlight }) => {
              const active = linkIsActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`${linkClassName(active, highlight)} px-3 py-2.5`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        <nav
          className="hidden flex-wrap items-center gap-0.5 sm:gap-1 lg:flex"
          aria-label="Pääsivut"
        >
          <div
            key={role}
            className="flex flex-wrap items-center gap-0.5 sm:gap-1 animate-nav-role"
          >
            {visibleLinks.map(({ href, label, highlight }) => {
              const active = linkIsActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={linkClassName(active, highlight)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
