import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/90 bg-white/85 py-10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white shadow-sm shadow-blue-600/20">
            S
          </span>
          <span className="font-semibold text-slate-900">SITEOS</span>
          <span className="text-sm text-slate-500">Taloyhtiöille</span>
        </div>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} SITEOS — demo, ei oikeaa taloyhtiödataa.
        </p>
        <nav className="flex flex-wrap gap-5 text-sm" aria-label="Alatunniste">
          <Link href="/" className="link-inline">
            Etusivu
          </Link>
          <Link href="/talous" className="link-inline">
            Talous
          </Link>
          <Link href="/control" className="link-inline">
            Ohjaus
          </Link>
        </nav>
      </div>
    </footer>
  );
}
