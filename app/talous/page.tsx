import type { Metadata } from "next";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { TalousAiComparisonSection } from "./sections/TalousAiComparisonSection";
import { TalousAiHeader } from "./sections/TalousAiHeader";
import { TalousAiImpactSection } from "./sections/TalousAiImpactSection";
import { TalousAiObservationAndRecommendation } from "./sections/TalousAiObservationAndRecommendation";
import { TalousAiTrustAndCta } from "./sections/TalousAiTrustAndCta";

export const metadata: Metadata = {
  title: "Talous AI",
  description:
    "Ennakoi kustannukset ja tasaa ne ajoissa. Havainto, suositus ja vertailu päätöksentekoon.",
  openGraph: {
    title: "Talous AI",
    description:
      "Demossa: ennakoiva vastike vs. ei toimenpiteitä — vaikutus taloyhtiölle ja asuntojen arvoon.",
    type: "website",
  },
};

export default function TalousPage() {
  return (
    <div className="relative gradient-talous flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-emerald-500/[0.05] to-transparent" />
      <div className="relative z-[1] page-shell-narrow">
        <TalousAiHeader />
        <RoleEmphasis when={["hallitus", "isannointi"]}>
          <div className="space-y-0">
            <TalousAiObservationAndRecommendation />
            <TalousAiComparisonSection />
            <TalousAiImpactSection />
            <TalousAiTrustAndCta />
          </div>
        </RoleEmphasis>
      </div>
    </div>
  );
}
