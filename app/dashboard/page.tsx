import type { Metadata } from "next";
import { DashboardSalesHero } from "@/components/dashboard/DashboardSalesHero";
import { DigitaalinenTiedottaminenSection } from "@/components/dashboard/DigitaalinenTiedottaminenSection";
import {
  ActiveMattersSection,
  AutomationImpactSection,
  CoreWorkflowRoutes,
  ProjektipankkiEntryCard,
  SiteosRecommendationHero,
  StatusOverviewStrip,
} from "@/components/dashboard/TyopoytaCommandView";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";

export const metadata: Metadata = {
  title: "Työpöytä",
  description:
    "SITEOS-järjestelmän tilannekuva: suositus, ydintoiminnot ja seuraavat toimenpiteet.",
};

export default function DashboardPage() {
  return (
    <div className="gradient-page relative flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-500/[0.06] to-transparent" />
      <div className="relative z-[1] page-shell">
        <DashboardSalesHero />

        <div className="space-y-10 sm:space-y-12">
          <StatusOverviewStrip />

          <section className="section-y-tight" aria-labelledby="tyopoyta-siteos-rec-heading">
            <h2 id="tyopoyta-siteos-rec-heading" className="sr-only">
              Suositus
            </h2>
            <SiteosRecommendationHero />
          </section>

          <CoreWorkflowRoutes />

          <RoleEmphasis when={["huolto", "hallitus"]}>
            <ActiveMattersSection />
          </RoleEmphasis>

          <RoleEmphasis when="isannointi">
            <AutomationImpactSection />
          </RoleEmphasis>

          <ProjektipankkiEntryCard />

          <div className="section-y border-t border-slate-200/60 pt-12 sm:pt-14">
            <DigitaalinenTiedottaminenSection />
          </div>
        </div>
      </div>
    </div>
  );
}
