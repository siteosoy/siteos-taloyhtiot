const cases = [
  {
    title: "Sähköauton latauspisteet",
    criteria: [
      "Kokemus sähköautojen latausjärjestelmistä",
      "Kuormituksen hallinta ja verkkoanalyysi",
      "Taloyhtiöreferenssit ja toteutushistoria",
      "Turvallisuusvaatimusten täyttäminen (SFS / määräykset)",
    ],
    summary:
      "ValoTekniikka Ab tarjoaa parhaan kokonaisuuden sähköautojen latausratkaisuihin.",
  },
  {
    title: "Pihavalaistus",
    criteria: [
      "Ulkovalaistuksen erikoisosaaminen",
      "Energiatehokkuus ja valaistusluokitus",
      "Nopea toteutus ja aikataulun hallinta",
      "Kustannustehokkuus suhteessa laajuuteen",
    ],
    summary: "Sähköurakointi Oy tarjoaa edullisimman ja nopeimman toteutuksen pihavalaistukseen.",
  },
  {
    title: "Julkisivuremontti",
    criteria: [
      "Kokemus vastaavista saneerauksista",
      "Projektinhallinta ja urakkakoordinointi",
      "Pidempi takuu ja laatuparametrit",
      "Riskien hallinta (sääsuojaus, työmaa-aikataulu)",
    ],
    summary: "KiinteistöSähkö Group tarjoaa parhaan kokonaisratkaisun julkisivuremonttiin.",
  },
] as const;

export function AIPerustelutSection() {
  return (
    <section className="mt-10 border-t border-slate-200/80 pt-10" aria-labelledby="perustelut-otsikko">
      <h2 id="perustelut-otsikko" className="section-label">
        Perusteet
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
        Malli painottaa tarjoajia projektityypin mukaan: alla esimerkkejä siitä, mitä kriteerejä vertailussa käytettiin ja
        miksi yksi tarjoaja nousi etusijalle kussakin tapauksessa.
      </p>

      <div className="flex flex-col gap-6">
        {cases.map((c) => (
          <article
            key={c.title}
            className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-200/70 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 pb-4">
              <h3 className="text-base font-semibold tracking-tight text-slate-900">{c.title}</h3>
              <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-slate-400">Vertailun painopisteet</span>
            </div>

            <ul className="mt-5 list-none space-y-2.5 text-sm leading-relaxed text-slate-700">
              {c.criteria.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400/90" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-l-[3px] border-indigo-300/90 bg-gradient-to-r from-indigo-50/90 to-slate-50/40 px-4 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-900/90">Yhteenveto</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">{c.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
