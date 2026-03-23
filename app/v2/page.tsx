import Link from "next/link";
import { ActionCard } from "@/components/v2/ui/ActionCard";
import { SearchBar } from "@/components/v2/ui/SearchBar";

const workflowPrimaryCtaEmphasisClassName =
  "inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--v2-accent)] px-7 py-3.5 text-[15px] font-semibold text-[#0a0f18] shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-[filter] duration-150 hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--v2-surface-elevated)]";

const workflowSecondaryCtaClassName =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--v2-border)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--v2-foreground)] transition-colors duration-150 hover:bg-[var(--v2-surface)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/20";

const missionCardSecondaryClassName =
  "sm:!flex-col [&_h3]:text-lg !p-10 sm:!p-11 !gap-6 !shadow-none [box-shadow:0_1px_0_rgba(255,255,255,0.04)] border-[var(--v2-border)]";

const missionCardPrimaryClassName =
  "sm:!flex-col [&_h3]:!text-xl !p-11 sm:!min-h-[188px] sm:!p-[3.25rem] !gap-8 !shadow-none [box-shadow:0_1px_0_rgba(255,255,255,0.04)] !border-[color-mix(in_srgb,var(--v2-accent)_28%,var(--v2-border)_72%)] bg-[color-mix(in_srgb,var(--v2-surface-elevated)_70%,#ffffff_30%)]";

const situationActionClassName =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--v2-border)] bg-[color-mix(in_srgb,var(--v2-surface)_50%,#ffffff_12%)] px-4 py-2.5 text-sm font-medium text-[var(--v2-foreground)] transition-colors hover:border-[color-mix(in_srgb,var(--v2-border)_100%,#ffffff_20%)] hover:bg-[var(--v2-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/25";

const sectionHeadingClass =
  "text-xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-2xl sm:leading-snug";

const sectionEyebrowClass =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--v2-foreground-muted)]";

type PriorityLevel = "urgent" | "high" | "soon";

const priorityAccent: Record<
  PriorityLevel,
  { strip: string; label: string }
> = {
  urgent: {
    strip: "bg-[var(--v2-danger)]",
    label: "Kiireellinen",
  },
  high: {
    strip: "bg-[var(--v2-warning)]",
    label: "Korkea",
  },
  soon: {
    strip: "bg-[var(--v2-accent)]",
    label: "Määräaika",
  },
};

const priorities = [
  {
    id: "p1",
    href: "/v2/talous",
    level: "high" as PriorityLevel,
    title: "3 laskua odottaa hyväksyntää",
    hint: "Käsittele ennen maksuunlähetystä.",
    actionLabel: "Avaa hyväksyntäjonoon",
  },
  {
    id: "p2",
    href: "/v2/talous",
    level: "urgent" as PriorityLevel,
    title: "Budjetti ylittymässä huollon osalta",
    hint: "Kirjaa selvitys tai kommentoi poikkeama.",
    actionLabel: "Tarkista poikkeama",
  },
  {
    id: "p3",
    href: "/v2/dokumentit",
    level: "high" as PriorityLevel,
    title: "2 dokumenttia puuttuu hallituksen kokouksesta",
    hint: "Liitteet tarvitaan ennen kokousta.",
    actionLabel: "Täydennä dokumentit",
  },
  {
    id: "p4",
    href: "/v2/kilpailutus",
    level: "soon" as PriorityLevel,
    title: "Kilpailutus vanhenee 5 päivän päästä",
    hint: "Piha-alue — päätä tai jatka määräaikaa.",
    actionLabel: "Avaa kilpailutus",
  },
] as const;

export default function V2HomePage() {
  return (
    <div className="space-y-24 pb-24 sm:space-y-32 sm:pb-32">
      <section
        id="tilanne"
        aria-labelledby="v2-tilanne-heading"
        className="scroll-mt-28 space-y-9 sm:space-y-11"
      >
        <div className="max-w-2xl space-y-3">
          <h1 id="v2-tilanne-heading" className={sectionHeadingClass}>
            Tilanne nyt
          </h1>
          <p className="text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-base">
            Näe yhdellä silmäyksellä, mikä vaatii huomiota juuri nyt.
          </p>
        </div>

        <ul className="flex flex-col gap-3.5 sm:gap-4" role="list">
          {priorities.map((item) => {
            const accent = priorityAccent[item.level];
            return (
              <li key={item.id}>
                <div className="flex flex-col gap-4 rounded-xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/80 shadow-[0_1px_0_rgba(255,255,255,0.04)] sm:flex-row sm:items-stretch sm:gap-0">
                  <div className="flex min-w-0 flex-1 items-stretch">
                    <span
                      className={`w-[3px] shrink-0 rounded-l-[inherit] ${accent.strip}`}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1 space-y-1.5 px-5 py-4 sm:px-6 sm:py-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
                        {accent.label}
                      </span>
                      <p className="text-[15px] font-semibold leading-snug text-[var(--v2-foreground)] sm:text-base">
                        {item.title}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                        {item.hint}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center border-t border-[var(--v2-border)] px-5 py-3 sm:border-l sm:border-t-0 sm:px-5 sm:py-5">
                    <Link
                      href={item.href}
                      className={`${situationActionClassName} w-full sm:w-auto`}
                    >
                      {item.actionLabel}
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        aria-labelledby="v2-search-heading"
        className="space-y-5 sm:space-y-6"
      >
        <div className="space-y-2">
          <p className={sectionEyebrowClass}>Haku</p>
          <h2 id="v2-search-heading" className={sectionHeadingClass}>
            Etsi koko taloyhtiön sisällöistä
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[var(--v2-foreground-muted)] sm:text-[15px]">
            Yksi kenttä dokumenteille, päätöksille, laskuille ja toimittajille.
          </p>
        </div>
        <div className="w-full rounded-2xl border border-[var(--v2-border)] bg-[color-mix(in_srgb,var(--v2-surface-elevated)_68%,#ffffff_32%)] p-6 sm:p-8">
          <SearchBar
            id="v2-home-search"
            label="Hae taloyhtiön sisällöistä"
            placeholder="Hae dokumenttia, päätöstä, laskua tai toimittajaa"
            autoComplete="off"
            className="[&_span]:left-5 [&_span]:top-1/2 [&_svg]:h-5 [&_svg]:w-5 [&_input]:min-h-[58px] [&_input]:rounded-xl [&_input]:border-2 [&_input]:border-[var(--v2-border)] [&_input]:bg-[color-mix(in_srgb,var(--v2-surface)_55%,#ffffff_45%)] [&_input]:py-5 [&_input]:pl-14 [&_input]:pr-5 [&_input]:text-base [&_input]:shadow-none [&_input]:hover:bg-[color-mix(in_srgb,var(--v2-surface)_45%,#ffffff_55%)] [&_input]:focus-visible:shadow-none [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-[var(--v2-accent)]/30"
          />
        </div>
      </section>

      <section
        aria-labelledby="v2-toimi-heading"
        className="space-y-9 border-t border-[var(--v2-border)] pt-14 sm:space-y-11 sm:pt-20"
      >
        <div className="max-w-2xl space-y-3">
          <p className={sectionEyebrowClass}>Toimenpiteet</p>
          <h2 id="v2-toimi-heading" className={sectionHeadingClass}>
            Toimi nyt
          </h2>
          <p className="text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-base">
            Valitse seuraava askel ja siirry suoraan oikeaan näkymään.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <ActionCard
            className={missionCardPrimaryClassName}
            title="Hyväksy laskut"
            description="Käy läpi hyväksyntäjono ja vapauta maksuun valmiit laskut."
            action={
              <Link
                href="/v2/talous"
                className={workflowPrimaryCtaEmphasisClassName}
              >
                Avaa hyväksyntäjonoon
              </Link>
            }
          />
          <ActionCard
            className={missionCardSecondaryClassName}
            title="Luo dokumentti"
            description="Aloita uusi luonnos kokoukseen tai jaettavaksi."
            action={
              <Link
                href="/v2/dokumentit"
                className={workflowSecondaryCtaClassName}
              >
                Aloita luonnos
              </Link>
            }
          />
          <ActionCard
            className={missionCardSecondaryClassName}
            title="Käynnistä kilpailutus"
            description="Määritä kohde, määräajat ja julkaise."
            action={
              <Link
                href="/v2/kilpailutus"
                className={workflowSecondaryCtaClassName}
              >
                Aloita kilpailutus
              </Link>
            }
          />
          <ActionCard
            className={missionCardSecondaryClassName}
            title="Avaa kaikki dokumentit"
            description="Selaa ja suodata koko dokumenttikirjastoa."
            action={
              <Link
                href="/v2/dokumentit"
                className={workflowSecondaryCtaClassName}
              >
                Avaa kirjasto
              </Link>
            }
          />
        </div>
      </section>
    </div>
  );
}
