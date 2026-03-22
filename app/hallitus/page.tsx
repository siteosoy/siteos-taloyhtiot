import type { Metadata } from "next";
import { HallitusDecisionWorkspace } from "@/components/hallitus/HallitusDecisionWorkspace";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Hallitus",
};

export default function HallitusPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          title="Hallitus"
          description="Päätökset, kilpailutukset ja projektien eteneminen yhdessä näkymässä"
        />

        <RoleEmphasis when="hallitus">
          <HallitusDecisionWorkspace />
        </RoleEmphasis>
      </div>
    </div>
  );
}
