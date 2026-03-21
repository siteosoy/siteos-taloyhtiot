import Link from "next/link";

const links = [
  { href: "/", label: "Etusivu" },
  { href: "/control", label: "Ohjaus" },
  { href: "/dashboard", label: "Työpöytä" },
  { href: "/asukas", label: "Asukas" },
  { href: "/huolto", label: "Huolto" },
  { href: "/hallitus", label: "Hallitus" },
  { href: "/toiveet", label: "Toiveet" },
  { href: "/hata", label: "Hätä" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-bold text-white shadow-md shadow-blue-600/25">
            S
          </span>
          <span>SITEOS</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
