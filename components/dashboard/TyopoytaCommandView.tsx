import Link from "next/link";
import { Surface } from "@/components/ui/Surface";

const statusOverview = [
  {
    id: "board",
    tone: "slate" as const,
    text: "1 asia odottaa hallituksen päätöstä",
  },
  {
    id: "auto",
    tone: "emerald" as const,
    text: "2 automaatiota käynnissä",
  },
  {
    id: "notice",
    tone: "blue" as const,
    text: "1 tiedote valmiina lähetettäväksi",
  },
  {
    id: "risk",
    tone: "amber" as const,
    text: "1 kustannusriski tunnistettu",
  },
] as const;

const activeItems = [
  {
    title: "Sähköautohanke",
    status: "Hallituksen käsittelyssä",
    accent: "indigo" as const,
  },
  {
    title: "Pelastussuunnitelma",
    status: "Päivitys valmis hyväksyttäväksi",
    accent: "slate" as const,
  },
  {
    title: "Digitaalinen tiedottaminen",
    status: "Siirtymäkysely valmis lähetettäväksi",
    accent: "blue" as const,
  },
] as const;

const automationValue = [
  "Pöytäkirja muodostettu automaattisesti",
  "Tiedotteet kohdistettu oikeille asukkaille",
  "Manuaalinen työ vähentynyt",
] as const;

function statusDotClass(tone: (typeof statusOverview)[number]["tone"]) {
  switch (tone) {
    case "emerald":
      return "bg-emerald-500/90 ring-emerald-200/80";
    case "blue":
      return "bg-blue-500/90 ring-blue-200/80";
    case "amber":
      return "bg-amber-500/90 ring-amber-200/80";
    default:
      return "bg-slate-400/90 ring-slate-200/80";
  }
}

export function StatusOverviewStrip() {
  return (
    <Surface
      variant="elevated"
      padding="lg"
      className="overflow-hidden ring-1 ring-slate-200/70"
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
        {statusOverview.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 rounded-xl border border-slate-100/95 bg-slate-50/35 px-4 py-3.5 ring-1 ring-slate-100/80"
          >
            <span
              className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-white ${statusDotClass(item.tone)}`}
              aria-hidden
            />
            <p className="text-[14px] leading-snug text-slate-700">{item.text}</p>
          </div>
        ))}
      </div>
    </Surface>
  );
}

export function SiteosRecommendationHero() {
  return (
    <Link
      href="/hallitus"
      className="group block rounded-[1.35rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
    >
      <Surface
        variant="elevated"
        padding="lg"
        className="relative overflow-hidden border-blue-200/65 bg-gradient-to-br from-white via-white to-blue-50/55 shadow-[0_20px_50px_-24px_rgba(37,99,235,0.35)] ring-1 ring-blue-100/75 transition group-hover:ring-blue-200/90 sm:p-9"
      >
        <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-blue-400/[0.11] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-blue-200/90 bg-blue-50/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-900">
                SITEOS suosittelee
              </span>
              <span className="text-[12px] tabular-nums text-slate-500">Päivitetty tänään</span>
            </div>
            <p className="text-[17px] font-medium leading-[1.55] text-slate-800 sm:text-lg sm:leading-[1.6]">
              Valmistelkaa sähköautohankkeen kilpailutus seuraavaan hallituksen kokoukseen.
              Talousennusteen mukaan ennakoiva toteutus tasaa kustannuksia pitkällä aikavälillä.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <span className="btn-primary inline-flex justify-center px-8 py-3 text-[15px] font-semibold shadow-lg shadow-blue-600/[0.18] transition group-hover:bg-blue-600">
              Avaa Hallitus
            </span>
            <span className="text-center text-[12px] text-slate-500 lg:text-right">
              Kokous, päätökset ja aineisto
            </span>
          </div>
        </div>
      </Surface>
    </Link>
  );
}

export function ActiveMattersSection() {
  return (
    <section className="section-y-tight" aria-labelledby="tyopoyta-active-heading">
      <h2 id="tyopoyta-active-heading" className="section-label">
        Käynnissä olevat asiat
      </h2>
      <div className="grid gap-4 md:grid-cols-3 md:gap-5">
        {activeItems.map((item) => {
          const border =
            item.accent === "indigo"
              ? "border-t-[3px] border-t-indigo-400/90"
              : item.accent === "blue"
                ? "border-t-[3px] border-t-blue-400/85"
                : "border-t-[3px] border-t-slate-300/90";
          return (
            <Surface
              key={item.title}
              padding="lg"
              variant="elevated"
              className={`${border} pt-7 ring-1 ring-slate-200/75 transition hover:ring-slate-300/90`}
            >
              <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">{item.title}</h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-slate-600">{item.status}</p>
            </Surface>
          );
        })}
      </div>
    </section>
  );
}

export function AutomationImpactSection() {
  return (
    <section className="section-y-tight" aria-labelledby="tyopoyta-auto-impact-heading">
      <h2 id="tyopoyta-auto-impact-heading" className="section-label">
        Automaatioiden vaikutus
      </h2>
      <Surface variant="default" padding="lg" className="border-slate-200/90 bg-slate-50/40 ring-1 ring-slate-200/65">
        <ul className="divide-y divide-slate-200/80">
          {automationValue.map((line) => (
            <li key={line} className="flex gap-3 py-4 first:pt-0 last:pb-0">
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100/95 text-emerald-700 ring-1 ring-emerald-200/70"
                aria-hidden
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-[14px] leading-relaxed text-slate-800">{line}</span>
            </li>
          ))}
        </ul>
      </Surface>
    </section>
  );
}

export function ProjektipankkiEntryCard() {
  return (
    <section className="section-y-tight" aria-labelledby="tyopoyta-projektipankki-heading">
      <h2 id="tyopoyta-projektipankki-heading" className="sr-only">
        Projektipankki
      </h2>
      <Link
        href="/historia"
        className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
      >
        <Surface
          variant="elevated"
          padding="lg"
          className="relative overflow-hidden border-indigo-200/55 bg-gradient-to-br from-white via-white to-indigo-50/30 ring-1 ring-indigo-100/75 transition group-hover:ring-indigo-200/85"
        >
          <div className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-indigo-400/[0.09] blur-2xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="min-w-0 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-900/75">
                Taloyhtiön historia
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600">
                Kaikki projektit, kustannusjaksot ja keskeiset muutokset yhdessä paikassa
              </p>
            </div>
            <span className="btn-secondary inline-flex shrink-0 justify-center px-6 py-2.5 text-sm font-semibold transition group-hover:border-indigo-200 group-hover:bg-indigo-50/90">
              Avaa projektipankki
            </span>
          </div>
        </Surface>
      </Link>
    </section>
  );
}
