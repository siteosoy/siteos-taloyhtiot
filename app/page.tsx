import Link from "next/link";
import { Surface } from "@/components/ui/Surface";

const features = [
  {
    title: "Luonnollinen asukasviesti",
    text: "Asukas kuvaa tilanteen omilla sanoillaan — tekoäly tiivistää ja luokittelee.",
  },
  {
    title: "Oikea reitti ensi yrityksellä",
    text: "Viestit ohjautuvat huollolle, hallitukselle tai hätäketjuun sääntöjen mukaan.",
  },
  {
    title: "Yksi näkymä koko taloyhtiölle",
    text: "Tilannekuva, tehtävät ja päätökset samassa premium-käyttöliittymässä.",
  },
];

export default function Home() {
  return (
    <div className="gradient-hero flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Taloyhtiöille
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Kiinteistön hallinta, joka ymmärtää asukkaan viestin
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              SITEOS yhdistää asukkaan kuvauksen, tekoälyreitityksen ja huollon
              tehtävät. Hallitus näkee kokonaiskuvan — kiireelliset tapaukset
              erottuvat selvästi.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/control"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                Avaa ohjausnäkymä
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                Katso työpöytä
              </Link>
            </div>
          </div>
          <Surface variant="accent" padding="lg" className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Esikatselu
            </p>
            <p className="mt-2 text-sm font-medium text-slate-800">
              &quot;Hissi pysähtyy kerrosten välillä ja oveni edessä on vettä
              lattialla…&quot;
            </p>
            <div className="mt-4 space-y-2 rounded-xl border border-blue-100 bg-white/80 p-4 text-sm text-slate-700">
              <p>
                <span className="font-semibold text-blue-700">AI:</span>{" "}
                Luokiteltu: tekniikka / hissi. Kiireellisyys: korkea.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Kohde:</span>{" "}
                Huolto + ilmoitus isännöitsijälle.
              </p>
            </div>
          </Surface>
        </div>

        <div>
          <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-slate-900">
            Miksi SITEOS?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <Surface key={f.title} padding="lg">
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.text}
                </p>
              </Surface>
            ))}
          </div>
        </div>

        <Surface variant="elevated" padding="lg" className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Demoesitys
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                Koe koko ketju: asukas → AI → huolto → hallitus
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Aloita ohjausnäkymästä tai asukaspolusta.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/asukas"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-500"
              >
                Asukkaan polku
              </Link>
              <Link
                href="/huolto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-blue-200"
              >
                Huollon näkymä
              </Link>
            </div>
          </div>
        </Surface>
      </section>

      <footer className="mt-auto border-t border-slate-200/80 bg-white/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              S
            </span>
            <span className="font-semibold text-slate-900">SITEOS</span>
            <span className="text-sm text-slate-500">Taloyhtiöille</span>
          </div>
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} SITEOS. Esittelyversio.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/hallitus" className="text-blue-600 hover:underline">
              Hallitus
            </Link>
            <Link href="/hata" className="text-blue-600 hover:underline">
              Hätäohjeet
            </Link>
            <Link href="/toiveet" className="text-blue-600 hover:underline">
              Toiveet
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
