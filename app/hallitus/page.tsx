import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const decisions = [
  {
    title: "Parkkialueen LED-valaistus",
    date: "Maaliskuu 2025",
    outcome: "Hyväksytty, toteutus Q2",
  },
  {
    title: "Hissisopimuksen jatkaminen",
    date: "Helmikuu 2025",
    outcome: "Jatkettu 24 kk",
  },
];

export default function HallitusPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Hallitus"
          title="Yhteenveto ja päätökset"
          description="Hallituksen näkymä: strateginen tiivistelmä, kirjatut päätökset ja tekoälyn havainnot riskeistä ja mahdollisuuksista."
        />

        <Surface variant="accent" padding="lg" className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            Kuukausiyhteenveto
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Taloyhtiön viestimäärä pysyi vakaana. Kiireellisiä tapauksia 12 %
            viesteistä — enimmäkseen hissi ja LVIS. Korjausvelan kannalta
            keskiössä: hissin huoltosopimuksen seuranta ja vedeneristysten
            kuntoarviot seuraavan vuosikokouksen esityslistalle.
          </p>
        </Surface>

        <div className="grid gap-6 lg:grid-cols-2">
          <Surface padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Päätökset
            </p>
            <ul className="mt-4 space-y-4">
              {decisions.map((d) => (
                <li key={d.title} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <p className="font-semibold text-slate-900">{d.title}</p>
                  <p className="text-xs text-slate-500">{d.date}</p>
                  <p className="mt-1 text-sm text-slate-600">{d.outcome}</p>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tekoälyn havainnot
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Hissiin liittyvät viestit kasvoivat 9 % — suositus: ennaltaehkäisevä
                huoltokierros.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Asukasviestien käsittelyaika lyheni 11 % edelliseen neljännekseen.
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">•</span>
                Hallituksen esityslistalla toistuva teema: energiatehokkuus.
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/80 p-4 text-xs text-slate-600">
              Havainnot perustuvat anonymisoituun viesti- ja tehtävädataan (demo).
            </div>
          </Surface>
        </div>
      </div>
    </div>
  );
}
