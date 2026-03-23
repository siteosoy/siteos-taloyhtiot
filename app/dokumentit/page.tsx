import type { Metadata } from "next";
import { DokumentitSection } from "@/components/control/DokumentitSection";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Dokumentit ja raportit",
};

export default function DokumentitPage() {
  return (
    <div className="gradient-control relative flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-500/[0.08] to-transparent" />

      <div className="relative page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Asiakirjat"
          title="Dokumentit ja raportit"
          description="Automaattinen isännöintityö: dokumentit muodostuvat järjestelmän ajantasaisesta datasta, ovat valmiita tarkistettavaksi ja päivittyvät automaattisesti."
        />

        <DokumentitSection headingId="dokumentit-page-heading" className="section-y pb-2" />
      </div>
    </div>
  );
}
