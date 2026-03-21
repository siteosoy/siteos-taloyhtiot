import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const examples = [
  {
    title: "Vuoto tai vesivahinko",
    text: "Sammuta tarvittaessa talonvesi ja soita hätänumeroon jos tilanne on hengenvaarallinen.",
  },
  {
    title: "Sähköinen vaaratilanne",
    text: "Älä koske paljaisiin johtoihin. Tyhjennä tila ja pyydä ammattilainen.",
  },
  {
    title: "Hissi jumittaa ihmisiä",
    text: "Ohjeista rauhallisuuteen, ole yhteydessä huoltoon ja hätäkeskukseen tarvittaessa.",
  },
];

const steps = [
  "Varmista oma turvallisuutesi ja varoita naapureita tarvittaessa.",
  "Soita 112 vakavissa hengen tai terveyden uhka -tilanteissa.",
  "Ilmoita SITEOS:iin tai isännöitsijän päivystykseen — kiireellinen reitti aktivoituu.",
  "Seuraa päivityksiä ohjausnäkymässä; hallitus saa automaattisen yhteenvedon.",
];

export default function HataPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Hätä"
          title="Kiireelliset tilanteet"
          description="Esimerkkejä tilanteista, toimintaohjeet ja miten SITEOS nostaa tapauksen etusijalle."
        />

        <div className="rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/90 to-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-red-900">
            Hätätilanteessa soita aina 112.
          </p>
          <p className="mt-2 text-sm text-red-800/90">
            Tämä sivu on ohjeellinen demo eikä korvaa virallisia pelastus- tai
            turvallisuusohjeita.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Esimerkkitilanteet</h2>
          {examples.map((e) => (
            <Surface key={e.title} padding="lg">
              <p className="font-semibold text-slate-900">{e.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.text}</p>
            </Surface>
          ))}
        </div>

        <Surface variant="accent" padding="lg" className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">Mitä tehdä</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </Surface>

        <Surface padding="lg" className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">Eskalaatio SITEOS:ssa</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Kun merkitset tapauksen kriittiseksi tai asukasviesti tunnistetaan
            hätäluonteiseksi, tehtävä nousee ohjausnäkymän kiireellisten listan
            kärkeen. Hallitukselle generoidaan lyhyt tilannekatsaus ja
            aikajana tapahtumista.
          </p>
          <Link
            href="/control"
            className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:underline"
          >
            Siirry ohjausnäkymään →
          </Link>
        </Surface>
      </div>
    </div>
  );
}
