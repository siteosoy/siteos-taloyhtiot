"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
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
  { href: "/asukas", label: "Asukas AI" },
  { href: "/huolto", label: "Huolto" },
  { href: "/hallitus", label: "Hallitus" },
  { href: "/toiveet", label: "Toiveet" },
  { href: "/hata", label: "Hätä" },
];

function linkIsActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const { role } = useRole();

  const visibleLinks = useMemo(
    () => links.filter((l) => isNavLabelVisibleForRole(l.label, role)),
    [role],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-slate-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-bold text-white shadow-[0_2px_6px_rgba(37,99,235,0.35)] ring-1 ring-white/20">
              S
            </span>
            <span>SITEOS</span>
          </Link>
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
            <RoleSelector />
            <RoleViewBadge variant="minimal" />
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-0.5 sm:gap-1" aria-label="Pääsivut">
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
                  className={`rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 ease-out ${
                    active
                      ? "bg-blue-50/95 font-semibold text-blue-900 ring-1 ring-blue-200/80"
                      : highlight
                        ? "text-emerald-900/90 hover:bg-emerald-50/90 hover:text-emerald-950"
                        : "text-slate-600 hover:bg-slate-100/90 hover:text-slate-900"
                  }`}
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
