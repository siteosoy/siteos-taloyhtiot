import type { Metadata } from "next";
import Link from "next/link";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { Surface } from "@/components/ui/Surface";

export const metadata: Metadata = {
  title: "Etusivu",
};

const features = [
  {
    title: "Asukas kirjoittaa itse",
    text: "Teksti pysyy asukkaan sanoina. Järjestelmä tiivistää, luokittelee ja tekee tehtävän.",
  },
  {
    title: "Oikea vastaanottaja talon säännöillä",
    text: "Huolto, hallitus tai hätä: viesti ohjautuu sille, jolle se kuuluu.",
  },
  {
    title: "Sama näkymä kaikille",
    text: "Tehtävät ja kiireellisyys yhdessä listassa. Ei viestiketjuja sähköpostissa.",
  },
];

export default function Home() {
  return (
    <div className="gradient-hero flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-3.5 pb-24 pt-12 sm:gap-16 sm:px-6 sm:pb-28 sm:pt-16 lg:gap-20 lg:px-8">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <RoleEmphasis when="asukas" className="min-w-0">
            <div className="space-y-8">
              <RoleViewBadge />
              <p className="inline-flex rounded-full border border-blue-200/85 bg-blue-50/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800">
                Taloyhtiön viestit ja tehtävät
              </p>
              <h1 className="headline-hero">
                Asukkaan viesti tehtäväksi ja oikealle taholle
              </h1>
              <p className="prose-width text-base leading-[1.65] text-slate-600 sm:text-lg">
                Asukkaan kuvauksesta syntyy tehtävä, joka ohjautuu talon sääntöjen
                mukaan. Huolto ja hallitus näkevät saman tilanteen. Kiireelliset
                nousevat esiin ilman sähköpostin kiertämistä.
              </p>
              <p className="max-w-xl text-sm leading-relaxed text-slate-500">
                Demo vastaa tuotantoa; tässä näkymässä asukasviestejä ei tallenneta.
              </p>
              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
                <Link href="/control" className="btn-primary-lg w-full text-center sm:w-auto">
                  Siirry ohjausnäkymään
                </Link>
                <Link href="/dashboard" className="btn-secondary-lg w-full text-center sm:w-auto">
                  Hallituksen työpöytä
                </Link>
              </div>
            </div>
          </RoleEmphasis>
          <Surface variant="accent" padding="lg" className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-400/18 blur-3xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
              Esimerkki viestistä
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-800">
              &quot;Hissi pysähtyy kerrosten välillä ja oveni edessä on vettä
              lattialla…&quot;
            </p>
            <div className="mt-5 space-y-2.5 rounded-xl border border-blue-100/95 bg-white/95 p-4 text-sm leading-relaxed text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <p>
                <span className="font-semibold text-blue-800">Tiivistelmä:</span>{" "}
                Tekniikka / hissi. Kiireellisyys: korkea.
              </p>
              <p>
                <span className="font-semibold text-slate-800">Seuraava askel:</span>{" "}
                Huolto ja isännöitsijä tiedoksi.
              </p>
            </div>
          </Surface>
        </div>

        <div>
          <p className="section-label text-center">Käytännössä</p>
          <p className="mx-auto mb-10 max-w-2xl text-balance px-0.5 text-center text-xl font-semibold tracking-tight text-slate-900 sm:mb-12 sm:text-2xl">
            Mitä tästä jää sähköpostiin verrattuna
          </p>
          <div className="grid min-w-0 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
            {features.map((f) => (
              <Surface key={f.title} padding="lg" variant="elevated">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.6] text-slate-600">
                  {f.text}
                </p>
              </Surface>
            ))}
          </div>
        </div>

        <Surface variant="elevated" padding="lg" className="mx-auto w-full max-w-4xl">
          <div className="flex min-w-0 flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
                Koko ketju demossa
              </p>
              <p className="mt-3 text-lg font-semibold leading-snug text-slate-900">
                Asukas → käsittely → huolto → hallitus samassa ketjussa
              </p>
              <p className="mt-2 text-sm leading-[1.6] text-slate-600">
                Voit aloittaa ohjausnäkymästä tai käydä vaiheet läpi järjestyksessä.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/asukas" className="btn-primary w-full text-center sm:w-auto">
                Asukas
              </Link>
              <Link href="/huolto" className="btn-secondary w-full text-center sm:w-auto">
                Huollon näkymä
              </Link>
            </div>
          </div>
        </Surface>
      </section>
    </div>
  );
}
