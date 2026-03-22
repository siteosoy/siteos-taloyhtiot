import { Surface } from "@/components/ui/Surface";

const agendaItems = [
  "Sähköauton lataushanke",
  "Pelastussuunnitelman päivitys",
  "Vastiketason tarkastelu",
] as const;

const minutesEntries = [
  {
    title: "Sähköauton lataushanke",
    summary:
      "Keskustelussa arvioitiin hankkeen ajoitusta, kustannusvaikutuksia ja kilpailutuksen laajuutta. Hallitus piti keskitettyä toteutusmallia tarkoituksenmukaisena.",
    responsible: "Puheenjohtaja",
    nextStep: "Kilpailutuksen valmistelu",
  },
  {
    title: "Pelastussuunnitelman päivitys",
    summary:
      "Todettiin, että pelastussuunnitelma tulee päivittää vastaamaan nykyisiä käytäntöjä ja dokumentoida järjestelmään.",
    responsible: "Isännöinti",
    nextStep: "Päivityksen viimeistely ja hyväksyntä",
  },
  {
    title: "Vastiketason tarkastelu",
    summary:
      "Keskustelussa arvioitiin pitkän aikavälin korjaustarpeita ja mahdollisuutta tasata tulevia kustannuksia ennakoivasti.",
    responsible: "Hallitus",
    nextStep: "Vaihtoehtojen vertailu Talous AI:ssa",
  },
] as const;

const aiSuggestions = [
  {
    recommendation: "Käynnistetään sähköautohankkeen kilpailutus Q2/2026.",
    reason: "Talousennusteen mukaan ennakoiva toteutus tasaa kustannuksia paremmin kuin lykkäys.",
  },
  {
    recommendation: "Valmistellaan vastikkeen maltillinen ennakkotarkistus.",
    reason: "Historiallisten kustannusjaksojen perusteella pienempi korotus nyt voi ehkäistä merkittävän korotustarpeen myöhemmin.",
  },
  {
    recommendation: "Hyväksytään pelastussuunnitelman päivitys seuraavassa kokouksessa.",
    reason: "Dokumentaation ajantasaisuus vähentää operatiivista riskiä ja parantaa valmiutta.",
  },
] as const;

function MeetingSummaryCard() {
  return (
    <Surface variant="elevated" padding="lg" className="shadow-card ring-slate-200/80">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">Hallituksen kokous 03/2026</h3>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
        <span className="text-sm text-slate-700">
          <span className="font-medium text-slate-900">Käsitellyt asiat:</span> 3
        </span>
        <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden />
        <span className="text-sm text-slate-700">
          <span className="font-medium text-slate-900">Tunnistetut puhujat:</span> 4
        </span>
        <span className="hidden h-4 w-px bg-slate-200 sm:block" aria-hidden />
        <span className="inline-flex w-fit rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-100/80">
          Pöytäkirja muodostettu automaattisesti
        </span>
      </div>

      <div className="mt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Esityslista</p>
        <ol className="mt-4 divide-y divide-slate-100 border-t border-slate-100" role="list">
          {agendaItems.map((item, i) => (
            <li key={item} className="flex gap-4 py-3.5 first:pt-4 sm:gap-5 sm:py-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold tabular-nums text-slate-700 ring-1 ring-slate-200/80">
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-relaxed text-slate-800">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </Surface>
  );
}

function AutomaattinenPoytakirjaCard() {
  return (
    <Surface variant="default" padding="lg" className="h-full border-slate-200/95 bg-white">
      <h3 className="text-base font-semibold tracking-tight text-slate-900">Automaattinen pöytäkirja</h3>

      <div className="mt-8 space-y-0">
        {minutesEntries.map((entry) => (
          <article
            key={entry.title}
            className="border-t border-slate-100 py-7 first:border-t-0 first:pt-0 last:pb-0"
          >
            <h4 className="text-sm font-semibold text-slate-900">{entry.title}</h4>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Yhteenveto</dt>
                <dd className="mt-1.5 leading-relaxed text-slate-700">{entry.summary}</dd>
              </div>
              <div className="grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Vastuu</dt>
                  <dd className="mt-1.5 font-medium text-slate-800">{entry.responsible}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Seuraava toimenpide</dt>
                  <dd className="mt-1.5 text-slate-800">{entry.nextStep}</dd>
                </div>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Surface>
  );
}

function AiPaatosehdotuksetCard() {
  return (
    <Surface variant="accent" padding="lg" className="h-full ring-blue-100/60">
      <h3 className="text-base font-semibold tracking-tight text-slate-900">AI-päätösehdotukset</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Ehdotukset perustuvat talous- ja historiatietoon — tukemaan hallituksen valmistelua ennen vahvistusta.
      </p>

      <ul className="mt-8 space-y-0 divide-y divide-blue-100/80" role="list">
        {aiSuggestions.map((block) => (
          <li key={block.recommendation} className="py-6 first:pt-0 last:pb-0">
            <p className="text-sm font-semibold leading-relaxed text-slate-900">{block.recommendation}</p>
            <div className="mt-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Peruste</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{block.reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </Surface>
  );
}

function TrustInfoRow() {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-5 py-5 ring-1 ring-slate-200/60 sm:px-6">
      <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
        <li className="flex gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden />
          <span>Puheenvuorot tunnistettu hallituksen jäsenten profiilien perusteella</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" aria-hidden />
          <span>Päätöskohdat tarkistettavissa ennen lähettämistä</span>
        </li>
      </ul>
    </div>
  );
}

function JakeluCard() {
  const methods = ["Osakkaille järjestelmässä", "Sähköpostitse", "PDF tallennettu arkistoon"] as const;

  return (
    <Surface variant="default" padding="lg" className="border-slate-200/95 bg-white">
      <h3 className="text-base font-semibold tracking-tight text-slate-900">Jakelu</h3>
      <ul className="mt-5 divide-y divide-slate-100 border-t border-slate-100" role="list">
        {methods.map((m) => (
          <li key={m} className="flex items-center gap-3 py-3.5 text-sm text-slate-700 first:pt-4">
            <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600/90" aria-hidden />
            {m}
          </li>
        ))}
      </ul>
    </Surface>
  );
}

export function HallitusKokousJaPoytakirjaSection() {
  return (
    <section className="section-y-tight" aria-labelledby="hallitus-kokous-otsikko">
      <h2 id="hallitus-kokous-otsikko" className="section-label">
        Kokous ja pöytäkirja
      </h2>
      <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-600">
        SITEOS muodostaa kokouspöytäkirjan automaattisesti, tukee päätöksiä AI-ehdotuksilla ja jakaa lopputuloksen
        hallitustyön mukaisesti — ilman erillistä litterointinäkymää.
      </p>

      <div className="space-y-10">
        <MeetingSummaryCard />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <AutomaattinenPoytakirjaCard />
          <AiPaatosehdotuksetCard />
        </div>

        <TrustInfoRow />

        <JakeluCard />
      </div>
    </section>
  );
}
