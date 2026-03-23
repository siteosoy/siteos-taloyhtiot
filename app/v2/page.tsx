import Link from "next/link";
import { ActionCard } from "@/components/v2/ui/ActionCard";
import { AlertCard } from "@/components/v2/ui/AlertCard";
import { ComparisonTable } from "@/components/v2/ui/ComparisonTable";
import { DocumentList } from "@/components/v2/ui/DocumentList";
import { EmptyState } from "@/components/v2/ui/EmptyState";
import { SearchBar } from "@/components/v2/ui/SearchBar";
import { SectionHeader } from "@/components/v2/ui/SectionHeader";
import { SidePanel } from "@/components/v2/ui/SidePanel";
import { StatCard } from "@/components/v2/ui/StatCard";
import { TaskList } from "@/components/v2/ui/TaskList";

const demoTasks = [
  {
    id: "1",
    title: "LVI-sopimus allekirjoitettavaksi",
    meta: "Määräaika 28.3.",
    status: "Avoin",
  },
  {
    id: "2",
    title: "Piha-alueen tarjousvertailu",
    meta: "Kilpailutus",
    status: "Kesken",
  },
] as const;

const demoDocs = [
  { id: "d1", name: "Yhtiöjärjestys.pdf", meta: "Päivitetty 2024" },
  { id: "d2", name: "Hallituksen kokous 2/2025.pdf", meta: "Julkaistu 12.3." },
] as const;

const secondaryLinkClassName =
  "inline-flex cursor-pointer items-center justify-center rounded-lg bg-[var(--v2-accent-dim)] px-4 py-2.5 text-sm font-medium text-[var(--v2-accent)] hover:bg-[var(--v2-accent)]/20";

export default function V2HomePage() {
  return (
    <div className="space-y-20 pb-4">
      <header className="max-w-3xl">
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-3xl">
          Etusivu
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          Komponenttikirjasto SITEOS Taloyhtiöt v2:lle — tumma teema, sähkönsininen
          korostus. Demo vain visuaalista tarkistusta varten.
        </p>
      </header>

      <section aria-labelledby="v2-showcase-stats" className="space-y-6">
        <SectionHeader
          id="v2-showcase-stats"
          title="Tilastokortit"
          description="Tiivis yhteenveto ilman ruukkua."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <StatCard label="Avoimet tehtävät" value="12" hint="3 määräajan sisällä" />
          <StatCard label="Dokumentteja (kv)" value="48" hint="Uusin 5 pv sitten" />
          <StatCard label="Käyttöaste" value="94 %" hint="Viimeiset 30 päivää" />
        </div>
      </section>

      <section aria-labelledby="v2-showcase-search" className="space-y-4">
        <SectionHeader id="v2-showcase-search" title="Haku" />
        <SearchBar
          id="v2-showcase-search-input"
          label="Esimerkkihaku"
          placeholder="Hae tehtäviä, dokumentteja tai päätöksiä…"
        />
      </section>

      <div className="grid gap-10 lg:grid-cols-[1fr_min(360px,100%)] lg:items-start">
        <div className="space-y-10">
          <section aria-labelledby="v2-showcase-alerts" className="space-y-4">
            <SectionHeader id="v2-showcase-alerts" title="Ilmoitukset" />
            <div className="grid gap-3 md:grid-cols-2">
              <AlertCard title="Huolto pyytää käyntilupaa">
                Tekninen tila 14.3. klo 9–11.
              </AlertCard>
              <AlertCard variant="warning" title="Talousarvio luonnos">
                Tarkista luvut ennen kokousta.
              </AlertCard>
            </div>
          </section>

          <ActionCard
            title="Esimerkkitoiminto"
            description="Toimintokortti yhdellä painikkeella."
            action={
              <Link href="/v2/tehtavat" className={secondaryLinkClassName}>
                Siirry tehtäviin
              </Link>
            }
          />

          <section aria-labelledby="v2-showcase-lists" className="space-y-6">
            <SectionHeader id="v2-showcase-lists" title="Listat" />
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--v2-foreground-muted)]">
                  Tehtävät
                </p>
                <TaskList items={[...demoTasks]} />
              </div>
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--v2-foreground-muted)]">
                  Dokumentit
                </p>
                <DocumentList items={[...demoDocs]} />
              </div>
            </div>
          </section>

          <section aria-labelledby="v2-showcase-table" className="space-y-4">
            <SectionHeader id="v2-showcase-table" title="Vertailu" />
            <ComparisonTable
              caption="Tarjousvertailu (demo)"
              columns={[
                { key: "name", label: "Tarjoaja" },
                { key: "price", label: "Hinta", align: "right" },
                { key: "eta", label: "Toimitus" },
              ]}
              rows={[
                { name: "LVI-Nordic Oy", price: "42 800 €", eta: "8 vk" },
                { name: "Piharakentajat", price: "39 200 €", eta: "10 vk" },
              ]}
            />
          </section>

          <EmptyState
            title="Ei raportteja valittuna"
            description="Valitse aikaväli tai tuo raportti näkyviin."
            action={
              <button
                type="button"
                className="rounded-lg border border-[var(--v2-border)] bg-[var(--v2-surface)] px-4 py-2 text-sm font-medium text-[var(--v2-foreground)] hover:border-[var(--v2-accent)]/35"
              >
                Valitse aikaväli
              </button>
            }
          />
        </div>

        <SidePanel title="Sivupaneeli">
          <p>
            Käytä tukipaneelina lyhyitä ohjeita tai hallinnon yhteenvetoa ilman
            että pääsisältö täyttyy widgeteillä.
          </p>
        </SidePanel>
      </div>
    </div>
  );
}
