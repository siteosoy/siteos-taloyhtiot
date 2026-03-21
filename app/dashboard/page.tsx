import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const stats = [
  { name: "Ratkaistu (30 pv)", value: "186" },
  { name: "Keskim. käsittely", value: "4,2 h" },
  { name: "Tyytyväisyys", value: "4,6 / 5" },
];

const events = [
  { time: "09:14", text: "Uusi tehtävä: hissi B — tarkastus tilattu" },
  { time: "08:02", text: "Hallitus: päätös parkkialueen valaistuksesta kirjattu" },
  { time: "Eilen", text: "Asukasviesti luokiteltu: LVIS, ei kiireellinen" },
];

export default function DashboardPage() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Työpöytä"
          title="Tilanne ja tapahtumat"
          description="Nopea tilannekuva: tilastot, viimeisimmät tapahtumat ja tekoälyn ehdotus seuraavaksi."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <Surface key={s.name} variant="elevated">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {s.name}
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{s.value}</p>
            </Surface>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Surface padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tapahtumavirta
            </p>
            <ul className="mt-4 space-y-4">
              {events.map((e) => (
                <li key={e.text} className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <span className="shrink-0 text-xs font-medium text-blue-600">
                    {e.time}
                  </span>
                  <span className="text-sm text-slate-700">{e.text}</span>
                </li>
              ))}
            </ul>
          </Surface>

          <Surface variant="accent" padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Tekoälyn ehdotus
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Seuraavaksi: lähetä asukkaille viesti hissi B:n huollon aikataulusta.
              Viestipohja on valmiina — voit muokata sävyn yhdellä napilla.
            </p>
            <div className="mt-4 rounded-xl border border-blue-100 bg-white/90 p-4 text-sm text-slate-800">
              &quot;Huoltokäynti hissi B:ssä torstaina klo 9–12. Hissi voi olla
              poissa käytöstä lyhyesti. Kiitos kärsivällisyydestänne.&quot;
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-500 sm:w-auto sm:px-6"
            >
              Käytä ehdotusta (demo)
            </button>
          </Surface>
        </div>
      </div>
    </div>
  );
}
