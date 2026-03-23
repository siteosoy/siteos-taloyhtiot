import Link from "next/link";
import { SectionHeader } from "@/components/v2/ui/SectionHeader";
import { StatCard } from "@/components/v2/ui/StatCard";

const ctaPrimary =
  "inline-flex shrink-0 items-center justify-center rounded-lg bg-[var(--v2-accent)] px-4 py-2.5 text-sm font-semibold text-[#0a0f18] transition-[filter] duration-150 hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/40";

const ctaSecondary =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--v2-border)] bg-[var(--v2-surface)]/70 px-4 py-2.5 text-sm font-medium text-[var(--v2-foreground)] transition-colors hover:bg-[var(--v2-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/25";

const statCardTone =
  "!shadow-none [box-shadow:0_1px_0_rgba(255,255,255,0.04)] !p-7 sm:!p-8";

const attentionItems = [
  {
    id: "a1",
    title: "Huollon kulut ylittymässä",
    body: "Huollon kustannukset ovat noin 8 % talousarvion yläpuolella kolmen kuukauden jaksolla. Poikkeama on kirjattu, mutta ei vielä kommentoitu.",
    step: "Tarkista erittely ja kirjaa perustelu hallitukselle.",
    cta: { label: "Tarkista poikkeama", href: "#yhteenveto", variant: "primary" as const },
  },
  {
    id: "a2",
    title: "3 laskua odottaa hyväksyntää",
    body: "Kaksi huolto- ja yksi LVI-lasku ovat hyväksyntäjonossa. Erääntyminen kahden viikon sisällä.",
    step: "Käy laskut läpi ja vapauta maksuun tai palauta täsmennyttävällä.",
    cta: { label: "Avaa hyväksyntä", href: "#tulevat-maksut", variant: "primary" as const },
  },
  {
    id: "a3",
    title: "Yksi tuleva maksu vaatii päätöksen",
    body: "Piha-alueen urakan välitarjous 12 400 € — hallitus on pyytänyt liitteen päätösesitykseen ennen maksuunlähetystä.",
    step: "Avaa päätösesitys ja varmista, että kokousmateriaali on kunnossa.",
    cta: {
      label: "Avaa liittyvä dokumentti",
      href: "/v2/dokumentit",
      variant: "secondary" as const,
    },
  },
] as const;

const recentEvents = [
  {
    id: "e1",
    text: "Lasku lisätty hyväksyntään — LVI-Nordic, 3 180 €",
    time: "Tänään 10.22",
  },
  {
    id: "e2",
    text: "Budjettipoikkeama havaittu — huolto",
    time: "Eilen",
  },
  {
    id: "e3",
    text: "Talousennuste-raportti päivitetty",
    time: "17.3.",
  },
  {
    id: "e4",
    text: "Maksu erääntyy pian — piha-urakka (välisuoritus)",
    time: "16.3.",
  },
] as const;

const upcomingPayments = [
  {
    id: "m1",
    name: "LVI-Nordic Oy — huoltosopimus",
    amount: "3 180 €",
    due: "26.3.2025",
    status: "Odottaa hyväksyntää",
  },
  {
    id: "m2",
    name: "Piha-alueen urakka — välisuoritus",
    amount: "12 400 €",
    due: "2.4.2025",
    status: "Vaatii päätöksen",
  },
  {
    id: "m3",
    name: "Hallinnon kuukausipalkkiot",
    amount: "890 €",
    due: "5.4.2025",
    status: "Vahvistettu",
  },
] as const;

const expenseCategories = [
  { id: "c1", label: "Huolto ja ympäristö", pct: 38 },
  { id: "c2", label: "LVI ja energia", pct: 22 },
  { id: "c3", label: "Hallinto ja neuvonta", pct: 15 },
  { id: "c4", label: "Muut", pct: 25 },
] as const;

export default function V2TalousPage() {
  return (
    <div className="space-y-0 pb-12">
      <header className="max-w-3xl space-y-5 pb-12 sm:pb-16">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-[1.85rem] sm:leading-snug">
          Talous
        </h1>
        <p className="text-pretty text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-lg">
          Näe budjetti, poikkeamat, hyväksynnät ja tulevat maksut ilman raskasta
          kirjanpitonäkymää.
        </p>
        <p className="border-l-2 border-[var(--v2-accent)]/55 pl-4 text-base font-medium leading-snug text-[var(--v2-foreground)]">
          Talous näkyy yhdellä silmäyksellä.
        </p>
      </header>

      <section
        id="yhteenveto"
        aria-labelledby="yhteenveto-heading"
        className="border-t border-[var(--v2-border)] pt-12 sm:pt-14"
      >
        <h2 id="yhteenveto-heading" className="sr-only">
          Talouden yhteenveto
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            className={statCardTone}
            label="Budjetin tila"
            value="Linjassa"
            hint="Poikkeama kirjattu huollosta — vaatii huomiota."
          />
          <StatCard
            className={statCardTone}
            label="Kulut vs budjetti"
            value="104 %"
            hint="Huollon osalta; muut luokat alle budjetin."
          />
          <StatCard
            className={statCardTone}
            label="Kassatilanne"
            value="Vakaa"
            hint="Arvioitu kassavirta seuraavat 90 päivää."
          />
          <StatCard
            className={statCardTone}
            label="Avoimet hyväksynnät"
            value="3"
            hint="Laskut valmiina käsittelyjonossa."
          />
        </div>
      </section>

      <section
        id="vaatii-huomiota"
        aria-labelledby="vaatii-huomiota-heading"
        className="mt-16 space-y-8 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:space-y-10 sm:pt-16"
      >
        <SectionHeader
          id="vaatii-huomiota-heading"
          title="Vaatii huomiota"
          description="Toimenpiteet, jotka vaikuttavat maksamiseen, budjettiin tai päätöksentekoon — ei pelkkä lista lukuja."
        />
        <ul className="flex flex-col gap-4" role="list">
          {attentionItems.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col gap-5 rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/80 p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:p-8">
                <div className="min-w-0 flex-1 space-y-3">
                  <h3 className="text-base font-semibold tracking-tight text-[var(--v2-foreground)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                    {item.body}
                  </p>
                  <p className="text-sm font-medium text-[var(--v2-foreground)]">
                    <span className="text-[var(--v2-foreground-muted)]">
                      Seuraava askel:{" "}
                    </span>
                    {item.step}
                  </p>
                </div>
                <div className="shrink-0 sm:pt-1">
                  <Link
                    href={item.cta.href}
                    className={
                      item.cta.variant === "primary"
                        ? ctaPrimary
                        : ctaSecondary
                    }
                  >
                    {item.cta.label}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="tapahtumat-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="tapahtumat-heading"
          title="Viimeisimmät tapahtumat"
          description="Mitä taloudessa on tapahtunut — lyhyesti ja ajantasaisesti."
        />
        <ul
          className="divide-y divide-[var(--v2-border)] rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/70"
          role="list"
        >
          {recentEvents.map((ev) => (
            <li
              key={ev.id}
              className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
            >
              <span className="text-sm leading-snug text-[var(--v2-foreground)]">
                {ev.text}
              </span>
              <span className="shrink-0 tabular-nums text-xs text-[var(--v2-foreground-muted)]">
                {ev.time}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="tulevat-maksut"
        aria-labelledby="maksut-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="maksut-heading"
          title="Tulevat maksut"
          description="Lähestyvät eräpäivät ja niiden tila — yksi lista, ei erillistä maksupinoa."
        />
        <ul className="flex flex-col gap-3" role="list">
          {upcomingPayments.map((row) => (
            <li key={row.id}>
              <div className="flex flex-col gap-4 rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="font-medium leading-snug text-[var(--v2-foreground)]">
                    {row.name}
                  </p>
                  <p className="text-sm text-[var(--v2-foreground-muted)]">
                    {row.status}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-baseline gap-6 text-sm tabular-nums sm:justify-end">
                  <span className="font-medium text-[var(--v2-foreground)]">
                    {row.amount}
                  </span>
                  <span className="text-[var(--v2-foreground-muted)]">
                    Eräpäivä {row.due}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="kululuokat-heading"
        className="mt-16 space-y-8 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="kululuokat-heading"
          title="Suurimmat kululuokat"
          description="Jakauma kuluvuoden toteutuneista kuluista — vertailuun ja keskusteluun, ei tilinpäätöstasoa."
        />
        <div className="max-w-2xl space-y-5">
          {expenseCategories.map((cat) => (
            <div key={cat.id} className="space-y-2">
              <div className="flex items-baseline justify-between gap-4 text-sm">
                <span className="font-medium text-[var(--v2-foreground)]">
                  {cat.label}
                </span>
                <span className="tabular-nums text-[var(--v2-foreground-muted)]">
                  {cat.pct} %
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[var(--v2-border)]">
                <div
                  className="h-full rounded-full bg-[var(--v2-accent)]/65"
                  style={{ width: `${cat.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
