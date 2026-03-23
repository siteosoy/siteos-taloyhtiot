import Link from "next/link";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";

export function DashboardSalesHero() {
  return (
    <header className="mb-10 sm:mb-14">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <RoleViewBadge />
      </div>
      <div className="rounded-2xl border border-slate-200/55 bg-gradient-to-b from-white/95 to-slate-50/30 px-5 py-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-8 sm:py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800/90">
          SITEOS-järjestelmä
        </p>
        <h1 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2.35rem] sm:leading-[1.12]">
          Taloyhtiön käyttöjärjestelmä
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          SITEOS ohjaa asukkaita, huoltoa ja hallitusta yhdestä järjestelmästä.
        </p>
        <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="#demopolku"
            className="btn-primary-lg w-full min-h-[44px] text-center sm:w-auto sm:min-w-[200px]"
          >
            Katso demopolku
          </Link>
          <Link
            href="/hallitus"
            className="btn-secondary-lg w-full min-h-[44px] text-center sm:w-auto sm:min-w-[200px]"
          >
            Avaa Hallitus
          </Link>
        </div>
      </div>
    </header>
  );
}
