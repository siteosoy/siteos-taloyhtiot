import type { Metadata } from "next";
import { HistoriaSections } from "@/components/historia/HistoriaSections";
import { SummaryCard } from "@/components/historia/SummaryCard";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Taloyhtiön historia",
  description:
    "Yhteenveto, aikajana ja esimerkkihankkeet — taloyhtiön projektipankki kevyesti yhdellä sivulla.",
  openGraph: {
    title: "Taloyhtiön historia",
    description:
      "Tiivis yhteenveto, keskeinen aikajana ja hankkeiden kustannustaso päätöksentekoon.",
    type: "website",
  },
};

export default function HistoriaPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Taloyhtiö"
          title="Taloyhtiön historia"
          description="Projektipankki: keskeiset hankkeet ja aikajana samassa näkymässä"
        />

        <RoleEmphasis when="hallitus" className="mb-10 max-w-3xl">
          <SummaryCard />
        </RoleEmphasis>

        <HistoriaSections />
      </div>
    </div>
  );
}
