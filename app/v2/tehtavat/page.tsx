import Link from "next/link";
import { SectionHeader } from "@/components/v2/ui/SectionHeader";
import type { TaskListItem } from "@/components/v2/ui/TaskList";
import { TaskList } from "@/components/v2/ui/TaskList";

const ctaPrimary =
  "inline-flex shrink-0 items-center justify-center rounded-lg bg-[var(--v2-accent)] px-4 py-2.5 text-sm font-semibold text-[#0a0f18] transition-[filter] duration-150 hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/40";

type Area = "talous" | "dokumentit" | "kilpailutus";

const areaLabel: Record<Area, string> = {
  talous: "Talous",
  dokumentit: "Dokumentit",
  kilpailutus: "Kilpailutus",
};

const urgentTasks = [
  {
    id: "u1",
    title: "Hyväksy 3 laskua",
    context:
      "Kaksi huolto- ja yksi LVI-lasku odottaa hyväksyntää — erääntyminen kahden viikon sisällä.",
    cta: { label: "Avaa laskut", href: "/v2/talous" as const },
    area: "talous" as Area,
    urgency: "high" as const,
  },
  {
    id: "u2",
    title: "Tarkista budjettipoikkeama (huolto)",
    context:
      "Kulut ylittävät talousarvion huollon osalta; poikkeama vaatii kirjauksen ennen seuraavaa kokousta.",
    cta: { label: "Tarkista budjetti", href: "/v2/talous" as const },
    area: "talous" as Area,
    urgency: "high" as const,
  },
  {
    id: "u3",
    title: "Täydennä puuttuvat dokumentit kokoukseen",
    context:
      "Hallituksen kokoukseen 3.4. liittyy kaksi puuttuvaa liitettä esityslistalle.",
    cta: { label: "Avaa dokumentit", href: "/v2/dokumentit" as const },
    area: "dokumentit" as Area,
    urgency: "soon" as const,
  },
  {
    id: "u4",
    title: "Kilpailutus vaatii päätöksen",
    context:
      "Piha-alueen kunnostus: tarjoukset vertailussa — määräaika 30.3., päätös kirjattava järjestelmään.",
    cta: { label: "Avaa kilpailutus", href: "/v2/kilpailutus" as const },
    area: "kilpailutus" as Area,
    urgency: "soon" as const,
  },
] as const;

const myTasks: {
  id: string;
  title: string;
  meta: string;
  href: string;
  area: Area;
}[] = [
  {
    id: "m1",
    title: "Hyväksy lasku: Huoltoyhtiö Oy",
    meta: "Odottaa hyväksyntää · eräpäivä 26.3.",
    href: "/v2/talous",
    area: "talous",
  },
  {
    id: "m2",
    title: "Tarkista raportti",
    meta: "Valmis käsittelyyn · vesikaton kuntoarviointi",
    href: "/v2/dokumentit",
    area: "dokumentit",
  },
  {
    id: "m3",
    title: "Hyväksy kilpailutus",
    meta: "Tarjoukset vertailussa · piha-alue",
    href: "/v2/kilpailutus",
    area: "kilpailutus",
  },
];

const thisWeekTasks: TaskListItem[] = [
  {
    id: "w1",
    title: "Käy läpi talousennuste Q2",
    meta: "Valmistelu hallituksen kokoukseen",
    status: "Ei vielä kriittinen",
  },
  {
    id: "w2",
    title: "Päivitä yhtiön yhteystiedot rekisteriin",
    meta: "Isännöitsijän tehtävä",
    status: "Tällä viikolla",
  },
  {
    id: "w3",
    title: "Tarkista huoltosopimuksen jatko",
    meta: "Liittyy kokousmateriaaliin",
    status: "Muistutus",
  },
];

const waitingOnOthers = [
  {
    id: "o1",
    title: "Odottaa toimittajaa",
    body: "LVI-tarkastuksen täydennysraportti — toimittaja lupasi toimittaa 25.3.",
  },
  {
    id: "o2",
    title: "Odottaa hallituksen päätöstä",
    body: "Piha-urakan välitarjous vaatii päätöksen ennen maksuunlähetystä.",
  },
  {
    id: "o3",
    title: "Odottaa lisätietoja",
    body: "Huollon budjettipoikkeamaan pyydetty selvitys osakkaan vastauksesta.",
  },
] as const;

const urgencyStrip: Record<"high" | "soon", string> = {
  high: "bg-[color-mix(in_srgb,var(--v2-warning)_70%,transparent)]",
  soon: "bg-[color-mix(in_srgb,var(--v2-accent)_50%,transparent)]",
};

export default function V2TehtavatPage() {
  return (
    <div className="space-y-0 pb-12">
      <header className="max-w-3xl space-y-4 pb-12 sm:pb-16">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-[1.85rem] sm:leading-snug">
          Tehtävät
        </h1>
        <p className="text-pretty text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-lg">
          Näe mitä pitää tehdä, mikä on myöhässä ja mitä odottaa käsittelyä.
        </p>
      </header>

      <section
        id="vaatii-huomiota"
        aria-labelledby="vaatii-huomiota-heading"
        className="border-t border-[var(--v2-border)] pt-12 sm:pt-14"
      >
        <SectionHeader
          id="vaatii-huomiota-heading"
          title="Vaatii huomiota"
          description="Kiireelliset ja määräajat lähestyvät — yhdistyvät talouteen, dokumentteihin ja kilpailutuksiin."
        />
        <ul className="mt-8 flex flex-col gap-4" role="list">
          {urgentTasks.map((task) => (
            <li key={task.id}>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/80 sm:flex-row sm:items-stretch">
                <div
                  className={`h-1 w-full shrink-0 sm:h-auto sm:w-1.5 sm:min-h-[5rem] ${urgencyStrip[task.urgency]}`}
                  aria-hidden
                />
                <div className="flex min-w-0 flex-1 flex-col gap-4 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-6 sm:py-6">
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
                        {areaLabel[task.area]}
                      </span>
                      {task.urgency === "high" ? (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-warning)]">
                          Vaatii huomiota
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-accent)]">
                          Määräaika lähestyy
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--v2-foreground)]">
                      {task.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                      {task.context}
                    </p>
                  </div>
                  <div className="shrink-0 sm:pt-1">
                    <Link href={task.cta.href} className={ctaPrimary}>
                      {task.cta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="minun-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="minun-heading"
          title="Minun tehtäväni"
          description="Sinulle osoitetut asiat — avaa suoraan oikeaan näkymään."
        />
        <ul className="mt-2 flex flex-col gap-3" role="list">
          {myTasks.map((t) => (
            <li key={t.id}>
              <Link
                href={t.href}
                className="flex flex-col gap-3 rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/70 px-5 py-5 transition-colors hover:bg-[var(--v2-surface-elevated)] sm:flex-row sm:items-center sm:justify-between sm:px-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
                      {areaLabel[t.area]}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--v2-foreground)]">
                    {t.title}
                  </p>
                  <p className="mt-1 text-xs text-[var(--v2-foreground-muted)]">
                    {t.meta}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-[var(--v2-accent)]">
                  Avaa →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="viikko-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="viikko-heading"
          title="Tällä viikolla"
          description="Tulevat tehtävät — ei vielä kriittisiä, mutta kannattaa pitää silmällä."
        />
        <TaskList
          items={thisWeekTasks}
          className="gap-3 [&_li]:border [&_li]:border-[var(--v2-border)] [&_li]:bg-[var(--v2-surface-elevated)]/60 [&_li]:py-5"
        />
      </section>

      <section
        aria-labelledby="odottaa-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="odottaa-heading"
          title="Odottaa muita"
          description="Ei vaadi välitöntä toimenpidettä sinulta — odottaa toista osapuolta tai päätöstä."
        />
        <ul className="flex flex-col gap-4" role="list">
          {waitingOnOthers.map((item) => (
            <li
              key={item.id}
              className="rounded-xl border border-dashed border-[var(--v2-border)] bg-[var(--v2-surface)]/40 px-5 py-5 sm:px-6"
            >
              <p className="text-sm font-semibold text-[var(--v2-foreground)]">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
