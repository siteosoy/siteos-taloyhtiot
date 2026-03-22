import type { Metadata } from "next";
import Link from "next/link";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

export const metadata: Metadata = {
  title: "Hätä",
};

const examples = [
  {
    title: "Vuoto tai vesivahinko",
    text: "Katkaise tarvittaessa talonvesi. Soita 112, jos ihmishenki tai terveys on vaarassa.",
  },
  {
    title: "Sähköinen vaaratilanne",
    text: "Älä koske paljaisiin johtoihin. Tyhjennä tila ja kutsu sähköalan ammattilainen.",
  },
  {
    title: "Hissi jumittaa ihmisiä",
    text: "Rauhoita tilanne. Ole yhteydessä huoltoon ja hätäkeskukseen tarvittaessa.",
  },
];

const steps = [
  "Huolehdi ensin omasta turvallisuudestasi ja varoita naapureita tarvittaessa.",
  "Soita 112, jos henki tai terveys on vaarassa.",
  "Ilmoita SITEOS:iin tai isännöitsijän päivystykseen — kiireellinen reitti käynnistyy.",
  "Seuraa tilannetta ohjausnäkymässä; hallitus saa lyhyen yhteenvedon.",
];

export default function HataPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell-narrow">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Hätä"
          title="Kiireelliset tilanteet"
          description="Esimerkkejä ja lyhyt ohje. Kiireellinen tapaus nousee ohjausnäkymän kärkeen."
        />

        <Surface
          padding="lg"
          className="border-red-200/70 bg-gradient-to-br from-red-50/95 to-white shadow-md shadow-red-900/[0.06] ring-1 ring-red-200/50"
        >
          <p className="text-sm font-semibold text-red-950">
            Hätätilanteessa soita aina 112.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-red-900/85">
            Tämä sivu on demo. Se ei korvaa pelastuslaitoksen tai viranomaisten
            ohjeita.
          </p>
        </Surface>

        <RoleEmphasis when={["huolto", "isannointi"]}>
          <div className="section-y-tight">
            <h2 className="section-label">Esimerkkitilanteet</h2>
            <div className="mt-2 space-y-4">
              {examples.map((e) => (
                <Surface key={e.title} padding="lg" variant="elevated">
                  <p className="font-semibold text-slate-900">{e.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.text}</p>
                </Surface>
              ))}
            </div>
          </div>
        </RoleEmphasis>

        <RoleEmphasis when="asukas">
          <Surface variant="accent" padding="lg" className="section-y-tight">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">Mitä tehdä</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-slate-700">
            {steps.map((s) => (
              <li key={s} className="pl-1">
                {s}
              </li>
            ))}
          </ol>
        </Surface>
        </RoleEmphasis>

        <RoleEmphasis when="hallitus">
          <Surface padding="lg" variant="elevated" className="mt-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900">Kiireellinen tapaus SITEOS:ssa</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Kriittiseksi merkitty tai hätäluonteiseksi luokiteltu tapaus nousee
            ohjausnäkymän kiireellisten listan alkuun. Hallitukselle koostetaan
            lyhyt tilannekatsaus ja tapahtumien aikajana.
          </p>
          <Link href="/control" className="link-inline mt-5 inline-flex">
            Siirry ohjausnäkymään →
          </Link>
        </Surface>
        </RoleEmphasis>
      </div>
    </div>
  );
}
