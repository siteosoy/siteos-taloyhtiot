import Link from "next/link";
import { Surface } from "@/components/ui/Surface";

const statusOverview = [
  {
    id: "huolto",
    tone: "amber" as const,
    text: "1 kiireellinen huoltoasia",
  },
  {
    id: "board",
    tone: "slate" as const,
    text: "1 päätöstä odottava asia",
  },
  {
    id: "doc",
    tone: "blue" as const,
    text: "1 dokumentti valmis tarkistettavaksi",
  },
  {
    id: "auto",
    tone: "emerald" as const,
    text: "2 automaatiota käynnissä",
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
    <section className="section-y-tight" aria-labelledby="mission-control-heading">
      <h2 id="mission-control-heading" className="sr-only">
        Tilanne nyt
      </h2>
      <div className="rounded-2xl bg-slate-50/40 px-4 py-6 sm:px-6 sm:py-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Tilanne nyt
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5 xl:grid-cols-4">
          {statusOverview.map((item) => (
            <div key={item.id} className="flex gap-3">
              <span
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ring-2 ring-offset-2 ring-offset-slate-50/40 ${statusDotClass(item.tone)}`}
                aria-hidden
              />
              <p className="text-[14px] leading-snug text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
        className="relative overflow-hidden border-blue-300/50 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/60 shadow-[0_24px_60px_-28px_rgba(37,99,235,0.42)] ring-1 ring-blue-200/80 transition group-hover:ring-blue-300/90 sm:p-10"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-blue-400/[0.12] blur-3xl" />
        <div className="relative flex min-w-0 flex-col gap-7 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="min-w-0 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-blue-300/70 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-950">
                SITEOS suosittelee
              </span>
              <span className="text-[12px] tabular-nums text-slate-500">
                Perustuu järjestelmän dataan
              </span>
            </div>
            <p className="text-[17px] font-medium leading-[1.55] text-slate-900 sm:text-lg sm:leading-[1.62]">
              Valmistelkaa hallituksen käsittelyyn ilmalämpöpumppua koskeva päätös. Vaikutukset
              kustannuksiin ja dokumentit ovat valmiina.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <span className="btn-primary inline-flex min-h-[44px] w-full items-center justify-center px-8 py-3 text-[15px] font-semibold shadow-lg shadow-blue-600/25 transition group-hover:bg-blue-600 sm:w-auto">
              Avaa Hallitus
            </span>
            <span className="text-center text-[12px] text-slate-600 lg:text-right">
              Seuraava toimenpide: hallituksen käsittely
            </span>
          </div>
        </div>
      </Surface>
    </Link>
  );
}

const workflowRoutes = [
  {
    href: "/asukas",
    title: "Asukas",
    description: "Asukkaan kysymykset ja ohjaus oikeaan toimenpiteeseen",
    cta: "Avaa Asukas",
  },
  {
    href: "/huolto",
    title: "Huolto",
    description: "Ilmoitukset, kiireellisyys ja tilannekuva",
    cta: "Avaa Huolto",
  },
  {
    href: "/hallitus",
    title: "Hallitus",
    description: "Päätöksenteon tuki ja perustellut toimenpiteet",
    cta: "Avaa Hallitus",
  },
  {
    href: "/dokumentit",
    title: "Dokumentit",
    description: "Automaattisesti muodostuvat dokumentit ja raportit",
    cta: "Avaa Dokumentit",
  },
] as const;

export function CoreWorkflowRoutes() {
  return (
    <section
      id="demopolku"
      className="section-y scroll-mt-28"
      aria-labelledby="core-workflow-heading"
    >
      <h2 id="core-workflow-heading" className="section-label">
        Siirry ydintoimintoihin
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {workflowRoutes.map((r) => (
          <div
            key={r.href}
            className="flex flex-col rounded-xl border border-slate-200/70 bg-white/70 px-4 py-5 sm:px-5 sm:py-6"
          >
            <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">{r.title}</h3>
            <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{r.description}</p>
            <Link
              href={r.href}
              className="btn-secondary mt-5 inline-flex min-h-[44px] w-full items-center justify-center px-4 text-sm font-semibold"
            >
              {r.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[13px] text-slate-500 sm:text-left">
        <Link href="/talous" className="link-inline font-medium text-slate-700">
          Talous
        </Link>
        <span className="mx-2 text-slate-300" aria-hidden>
          ·
        </span>
        <Link href="/control" className="link-inline font-medium text-slate-700">
          Ohjauskeskus
        </Link>
        <span className="mx-2 text-slate-300" aria-hidden>
          ·
        </span>
        <Link href="/" className="link-inline font-medium text-slate-700">
          Etusivu
        </Link>
      </p>
    </section>
  );
}

export function ActiveMattersSection() {
  return (
    <section className="section-y" aria-labelledby="tyopoyta-active-heading">
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
              className={`${border} border-slate-200/80 bg-white/95 pt-7 shadow-sm shadow-slate-900/[0.02] ring-0 transition hover:border-slate-300/80`}
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
    <section className="section-y" aria-labelledby="tyopoyta-auto-impact-heading">
      <h2 id="tyopoyta-auto-impact-heading" className="section-label">
        Automaatioiden vaikutus
      </h2>
      <Surface variant="default" padding="lg" className="border border-slate-200/80 bg-slate-50/35">
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
          className="relative overflow-hidden border border-indigo-200/50 bg-gradient-to-br from-white via-white to-indigo-50/25 transition group-hover:border-indigo-200/70"
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
