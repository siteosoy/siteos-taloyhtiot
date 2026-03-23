import Link from "next/link";
import { SectionHeader } from "@/components/v2/ui/SectionHeader";

const promiseLine =
  "Kilpailuta hankinnat hallitusti, vertailtavasti ja dokumentoidusti.";

const workflowSteps = [
  { id: "s1", label: "Luo kilpailutus", state: "done" as const },
  { id: "s2", label: "Lisää kohde ja tarpeet", state: "done" as const },
  { id: "s3", label: "Valitse toimittajat", state: "done" as const },
  { id: "s4", label: "Lähetä tarjouspyynnöt", state: "done" as const },
  { id: "s5", label: "Vertaa vastaukset", state: "current" as const },
  { id: "s6", label: "Tee päätös", state: "upcoming" as const },
  { id: "s7", label: "Tallenna dokumentaatio", state: "upcoming" as const },
] as const;

const activeCase = {
  title: "Ilmalämpöpumppujen hankinta",
  phase: "Vertaa vastauksia",
  deadline: "30.3.2025 klo 16.00",
  suppliersInvited: 4,
  responsesIn: 3,
  missing:
    "Yhden tarjouksen toimitusaika puuttuu — pyydetty täsmennystä toimittajalta.",
};

const offers = [
  {
    id: "o1",
    vendor: "Lämpötek Oy",
    price: "18 900 €",
    leadTime: "6 vk",
    status: "Vertailtavissa",
    notes: "Sisältää asennuksen ja käyttöönoton.",
  },
  {
    id: "o2",
    vendor: "Nordic Climate Ab",
    price: "19 400 €",
    leadTime: "—",
    status: "Odottaa",
    notes: "Toimitusaika täsmennetään — pyyntö lähetetty.",
  },
  {
    id: "o3",
    vendor: "Piharakentajat Oy",
    price: "17 650 €",
    leadTime: "8 vk",
    status: "Vertailtavissa",
    notes: "Pisin toimitusaika; hinta kilpailukykyinen.",
  },
] as const;

const ctaPrimary =
  "inline-flex items-center justify-center rounded-lg bg-[var(--v2-accent)] px-5 py-2.5 text-sm font-semibold text-[#0a0f18] transition-[filter] duration-150 hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/40";

const ctaSecondary =
  "inline-flex items-center justify-center rounded-lg border border-[var(--v2-border)] bg-[var(--v2-surface)]/70 px-5 py-2.5 text-sm font-medium text-[var(--v2-foreground)] transition-colors hover:bg-[var(--v2-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/25";

export default function V2KilpailutusPage() {
  return (
    <div className="space-y-0 pb-12">
      <header className="max-w-3xl space-y-5 pb-12 sm:pb-16">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-[1.85rem] sm:leading-snug">
          Kilpailutus
        </h1>
        <p className="text-pretty text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-lg">
          Seuraa kilpailutuksen etenemistä, vertaile tarjoukset ja pidä
          päätöksen perusteet tallessa.
        </p>
        <p className="border-l-2 border-[var(--v2-accent)]/55 pl-4 text-base font-medium leading-snug text-[var(--v2-foreground)]">
          {promiseLine}
        </p>
      </header>

      <section
        aria-labelledby="vaiheet-heading"
        className="border-t border-[var(--v2-border)] pt-12 sm:pt-14"
      >
        <SectionHeader
          id="vaiheet-heading"
          title="Eteneminen"
          description="Missä vaiheessa olette, mitä puuttuu ja mikä on seuraava askel — yksi ketju, ei irrallisia sähköposteja."
        />

        <ol className="relative mt-10 list-none space-y-0 pl-1 sm:pl-0">
          {workflowSteps.map((step, index) => {
            const isLast = index === workflowSteps.length - 1;
            const isDone = step.state === "done";
            const isCurrent = step.state === "current";

            return (
              <li
                key={step.id}
                className="relative flex gap-4 pb-10 last:pb-0 sm:gap-6"
              >
                {!isLast ? (
                  <span
                    className={`absolute left-[15px] top-9 h-[calc(100%-0.5rem)] w-px sm:left-[19px] ${
                      isDone
                        ? "bg-[color-mix(in_srgb,var(--v2-accent)_55%,var(--v2-border)_45%)]"
                        : "bg-[var(--v2-border)]"
                    }`}
                    aria-hidden
                  />
                ) : null}
                <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold sm:h-10 sm:w-10 sm:text-sm">
                  {isDone ? (
                    <span className="flex h-full w-full items-center justify-center rounded-full border-[var(--v2-accent)]/45 bg-[color-mix(in_srgb,var(--v2-accent)_20%,transparent)] text-[var(--v2-accent)]">
                      ✓
                    </span>
                  ) : isCurrent ? (
                    <span className="flex h-full w-full items-center justify-center rounded-full border-[var(--v2-accent)] bg-[var(--v2-accent)]/12 text-[var(--v2-foreground)] ring-2 ring-[var(--v2-accent)]/35">
                      {index + 1}
                    </span>
                  ) : (
                    <span className="flex h-full w-full items-center justify-center rounded-full border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/80 text-[var(--v2-foreground-muted)]">
                      {index + 1}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p
                    className={`text-sm font-semibold sm:text-base ${
                      isCurrent
                        ? "text-[var(--v2-foreground)]"
                        : isDone
                          ? "text-[var(--v2-foreground)]"
                          : "text-[var(--v2-foreground-muted)]"
                    }`}
                  >
                    {step.label}
                  </p>
                  {isCurrent ? (
                    <p className="mt-1.5 text-sm text-[var(--v2-accent)]">
                      Etenee — vertailtavissa olevat tarjoukset alla.
                    </p>
                  ) : null}
                  {isDone && !isCurrent ? (
                    <p className="mt-1 text-xs text-[var(--v2-foreground-muted)]">
                      Valmis
                    </p>
                  ) : null}
                  {!isDone && !isCurrent ? (
                    <p className="mt-1 text-xs text-[var(--v2-foreground-muted)]">
                      Odottaa
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <section
        aria-labelledby="tilanne-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="tilanne-heading"
          title="Aktiivinen kilpailutus"
          description="Hallitus ja isännöinti näkevät saman tilannekuvan — määräajat ja puutteet näkyvät suoraan."
        />
        <div className="rounded-2xl border border-[var(--v2-border)] bg-[color-mix(in_srgb,var(--v2-surface-elevated)_85%,#ffffff_15%)] p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
            Käynnissä
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--v2-foreground)]">
            {activeCase.title}
          </h3>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium text-[var(--v2-foreground-muted)]">
                Nykyinen vaihe
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--v2-foreground)]">
                {activeCase.phase}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--v2-foreground-muted)]">
                Määräaika
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--v2-foreground)]">
                {activeCase.deadline}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-[var(--v2-foreground-muted)]">
                Toimittajat
              </dt>
              <dd className="mt-1 text-sm text-[var(--v2-foreground)]">
                {activeCase.suppliersInvited} kutsuttu · {activeCase.responsesIn}{" "}
                vastausta vastaanotettu
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium text-[var(--v2-foreground-muted)]">
                Puuttuu
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                {activeCase.missing}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        aria-labelledby="vertailu-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="vertailu-heading"
          title="Tarjousten vertailu"
          description="Yksi näkymä — hinnat, ajat ja huomiot rinnakkain, ilman raskasta taulukkoa."
        />
        <div className="flex flex-col gap-4">
          {offers.map((row) => (
            <div
              key={row.id}
              className="rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/75 p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-[var(--v2-foreground)]">
                    {row.vendor}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                    {row.notes}
                  </p>
                </div>
                <span
                  className={`shrink-0 self-start rounded-md px-2.5 py-1 text-xs font-medium ${
                    row.status === "Vertailtavissa"
                      ? "bg-[color-mix(in_srgb,var(--v2-accent)_22%,transparent)] text-[var(--v2-foreground)]"
                      : "bg-white/[0.06] text-[var(--v2-foreground-muted)]"
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 border-t border-[var(--v2-border)] pt-4 text-sm">
                <div>
                  <span className="text-[var(--v2-foreground-muted)]">
                    Hinta ·{" "}
                  </span>
                  <span className="font-medium tabular-nums text-[var(--v2-foreground)]">
                    {row.price}
                  </span>
                </div>
                <div>
                  <span className="text-[var(--v2-foreground-muted)]">
                    Toimitusaika ·{" "}
                  </span>
                  <span className="tabular-nums text-[var(--v2-foreground)]">
                    {row.leadTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="toiminnot-heading"
        className="mt-16 space-y-6 border-t border-[var(--v2-border)] pt-14 sm:mt-20 sm:pt-16"
      >
        <SectionHeader
          id="toiminnot-heading"
          title="Seuraavat toimet"
          description="Valitse askel — kaikki linkittyy samaan kilpailutukseen ja dokumentteihin."
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" className={ctaPrimary}>
            Lähetä tarjouspyyntö
          </button>
          <button type="button" className={ctaSecondary}>
            Täydennä tiedot
          </button>
          <Link href="/v2/dokumentit" className={ctaSecondary}>
            Avaa dokumentit
          </Link>
          <button type="button" className={ctaSecondary}>
            Tee päätös
          </button>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          Kaikki kilpailutuksen vaiheet, tarjoukset ja päätökset säilyvät yhdessä
          paikassa.
        </p>
      </section>
    </div>
  );
}
