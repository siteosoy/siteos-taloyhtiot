import { DigitaalinenTiedottaminenSection } from "@/components/dashboard/DigitaalinenTiedottaminenSection";
import {
  ActiveMattersSection,
  AutomationImpactSection,
  ProjektipankkiEntryCard,
  SiteosRecommendationHero,
  StatusOverviewStrip,
} from "@/components/dashboard/TyopoytaCommandView";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <div className="gradient-page relative flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-500/[0.06] to-transparent" />
      <div className="relative z-[1] page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          title="Työpöytä"
          description="Taloyhtiön tilannekuva, automaatiot ja seuraavat toimenpiteet yhdessä näkymässä"
        />

        <div className="space-y-8 sm:space-y-10">
          <RoleEmphasis when={["hallitus", "isannointi"]}>
            <StatusOverviewStrip />
          </RoleEmphasis>

          <section className="section-y-tight" aria-labelledby="tyopoyta-siteos-rec-heading">
            <h2 id="tyopoyta-siteos-rec-heading" className="sr-only">
              SITEOS suosittelee
            </h2>
            <SiteosRecommendationHero />
          </section>

          <RoleEmphasis when={["huolto", "hallitus"]}>
            <ActiveMattersSection />
          </RoleEmphasis>

          <RoleEmphasis when="isannointi">
            <AutomationImpactSection />
          </RoleEmphasis>

          <ProjektipankkiEntryCard />

          <div className="section-y border-t border-slate-200/70 pt-12">
            <DigitaalinenTiedottaminenSection />
          </div>
        </div>
      </div>
    </div>
  );
}
