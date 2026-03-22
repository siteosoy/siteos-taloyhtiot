import { Surface } from "@/components/ui/Surface";

const REQUIREMENTS = [
  "Työt suoritetaan arkipäivisin klo 8–18",
  "Asukastiedotus ennen työn aloitusta",
  "Sähkötöiden dokumentointi toimitettava valmistumisen yhteydessä",
  "Piha-alueiden suojaus työn aikana",
  "Loppudokumentit ja käyttöohjeet luovutettava hallitukselle",
  "Mahdolliset käyttökatkot sovittava etukäteen",
] as const;

function StatusBadges() {
  return (
    <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-5">
      <span className="inline-flex rounded-full border border-slate-200/90 bg-slate-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200/80">
        Koottu automaattisesti SITEOSissa
      </span>
      <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-900 ring-1 ring-blue-100/80">
        Liitetään tarjouspyyntöön
      </span>
    </div>
  );
}

function InsightBox() {
  return (
    <div className="mt-6 rounded-xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/90 via-white to-slate-50/40 px-5 py-4 ring-1 ring-indigo-100/80 sm:px-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-900">Miksi tämä on tärkeää</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        Ilman taloyhtiökohtaisia vaatimuksia tarjoukset voivat sisältää eri oletuksia, jolloin vertailu ei ole luotettavaa.
      </p>
    </div>
  );
}

export function TaloyhtioToteutusvaatimuksetSection() {
  return (
    <section className="mt-10 border-t border-slate-200/80 pt-10" aria-labelledby="toteutusvaatimukset-otsikko">
      <h2 id="toteutusvaatimukset-otsikko" className="section-label">
        Taloyhtiökohtaiset toteutusvaatimukset
      </h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-600">
        SITEOS kokoaa tarjouspyynnön liitteeksi taloyhtiön omat toteutusvaatimukset, jotta tarjoukset voidaan laskea samalla
        lähtötiedolla ja vertailla luotettavasti.
      </p>

      <Surface variant="elevated" padding="lg" className="shadow-card">
        <StatusBadges />
        <ul className="mt-5 divide-y divide-slate-100" role="list">
          {REQUIREMENTS.map((line) => (
            <li key={line} className="flex gap-3 py-3.5 first:pt-0 last:pb-0 sm:gap-4 sm:py-4">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
              <span className="text-sm font-medium leading-relaxed text-slate-800">{line}</span>
            </li>
          ))}
        </ul>
      </Surface>

      <InsightBox />
    </section>
  );
}
