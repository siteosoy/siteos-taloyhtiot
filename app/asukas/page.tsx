"use client";

import { Fragment, useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const CONFIDENCE_LINE =
  "Vastaus perustuu taloyhtiön nykyisiin ohjeisiin ja käytäntöihin.";

/** Demo: yksi konkreettinen taloyhtiö, jotta sisäiset säännöt erottuvat yleisneuvosta. */
const DEMO_HOUSING_COMPANY = "Esimerkki Asunto Oy";

const suggestions = [
  "Hissi pysähtyy välillä kerrosten väliin.",
  "Porraskäytävän valo ei syty automaattisesti.",
  "Pesuhuoneen lattiakaivo haisee.",
];

type AiSection = {
  title: "Vastaus" | "Peruste taloyhtiön ohjeista" | "Toimenpiteet" | "Huomioitavaa";
  body: string | string[];
};

type WorkflowAttachment = {
  name: string;
  meta: string;
};

type WorkflowAction = {
  nextStepIntro: string;
  primaryLabel: string;
  modalTitle: string;
  modalDescription: string;
  attachments: WorkflowAttachment[];
};

type CompanyPolicy = {
  /** Erottaa tämän yhtiön sisäiset säännöt yleisestä neuvonnasta */
  intro: string;
  bullets: readonly string[];
};

const featuredDemos: {
  id: string;
  label: string;
  question: string;
  sourceLines: readonly string[];
  detailItems: string[];
  companyPolicy: CompanyPolicy;
  sections: AiSection[];
  workflow: WorkflowAction;
}[] = [
  {
    id: "ilp",
    label: "Ilmalämpöpumpun asennus",
    question:
      "Haluaisin asentaa ilmalämpöpumpun olohuoneeseen. Mitä taloyhtiö vaatii ja miten etenen?",
    sourceLines: [
      "Lähde: Taloyhtiön muutostyöohje",
      "Lähde: Järjestyssäännöt",
      "Lähde: Hallituksen päätöskäytäntö",
    ],
    detailItems: [
      "Hakemukseen liitetään laitelehti, ehdotettu ulkoyksikön paikka sekä asentajan pätevyystodistus (KTK tai vastaava).",
      "Ulkoyksikkö kiinnitetään hallituksen hyväksymään kohtaan; julkisivuun ei tehdä läpivientejä ilman hyväksyttyä yksityiskohtasuunnitelmaa.",
      "Melun rajaus: naapurihuoneistoihin kohdistuva ääni ei saa ylittää taloyhtiön ohjeessa määriteltyä tasoa; tarvittaessa esitetään toimittajan selvitys.",
      "Kondenssiveden ja sulatusveden johto ohjataan taloyhtiön osoittamaan paikkaan; tiivistys ja eristeet dokumentoidaan valmistumisilmoituksessa.",
      "Kunnossapitovastuu ja takuu kirjataan osakkaan vastuulle, mutta kiinteistöön jäävät muutokset arkistoidaan taloyhtiön tekniseen kansioon.",
    ],
    companyPolicy: {
      intro:
        `Tämä koskee nimenomaan ${DEMO_HOUSING_COMPANY}:n kirjattuja sisäisiä sääntöjä — tekoäly ei vastaa yleisellä mallilla, vaan käyttää tästä yhtiöstä ladattuja ohjeita.`,
      bullets: [
        "Sallitaan tapauskohtaisesti: jokainen hakemus käsitellään erikseen, ei oletuslupaa.",
        "Ulkoyksikön sijoittelu on rajattu: vain ikkunattomiin ulkoseiniin ja hallituksen osoittamiin paikkoihin.",
        "Vaatii hallituksen hyväksynnän ennen tilausta ja asennuksen aloitusta.",
      ],
    },
    sections: [
      {
        title: "Vastaus",
        body:
          "Ilmalämpöpumpun asennus on mahdollinen, kun saat hallitukselta kirjallisen luvan ennen töiden aloittamista ja tekninen ratkaisu täyttää taloyhtiön ulkoyksikön sijoittelua, melua ja julkisivua koskevat vaatimukset. Laite on pääsääntöisesti osakkaan kunnossapitovastuulla, mutta kiinteistöön vaikuttavat muutokset edellyttävät aina hyväksyntää.",
      },
      {
        title: "Peruste taloyhtiön ohjeista",
        body: [
          "Järjestyssäännöt ja yhtiöjärjestys: kiinteistöön kohdistuvat muutokset, jotka vaikuttavat ulkoseiniin, ilmanvaihtoon tai yhteisiin tekniikkaan, käsitellään hallituksessa.",
          "LVIS- ja sähköohje: asennus suoritetaan pätevöitetyn urakoitsijan toimesta; ulkoyksikkö sijoitetaan niin, ettei se estä huoltotöitä, heikennä rakennuksen tiiviyttä tai aiheuta kohtuutonta melua naapureille.",
          "Naapuruus: taloyhtiön käytännön mukaan naapureille ilmoitetaan ennen työntekoa, jos työ kohdistuu jaettuun seinään tai ulkoseinään.",
        ],
      },
      {
        title: "Toimenpiteet",
        body: [
          "Jätä isännöitsijälle kirjallinen hakemus: tarkoitus, laite- ja mallitiedot, ehdotettu ulkoyksikön paikka sekä asentajan yhteystiedot.",
          "Hallitus käsittelee hakemuksen kokouksessaan; tarvittaessa pyydetään LVIS-suunnittelijan tai talotekniikan lausunto.",
          "Hyväksynnän jälkeen sovi asennusajankohta ja mahdollinen naapuruusilmoitus taloyhtiön ohjeiden mukaisesti.",
          "Toimita valmistumisilmoitus, käyttöohje ja takuutiedot taloyhtiön dokumentaatioon arkistointia varten.",
        ],
      },
      {
        title: "Huomioitavaa",
        body:
          "Vanhemmissa taloissa sähkön liitäntäkapasiteetti ja lämmitysjärjestelmän yhteensopivuus on varmistettava ennen hankintaa. Julkisivuun ei tehdä pysyviä läpivientejä tai kiinnityksiä ilman hyväksyttyä yksityiskohtasuunnitelmaa; tiivistys ja kondenssiveden johto on tehtävä ammattimaisesti.",
      },
    ],
    workflow: {
      nextStepIntro: "Voit tehdä muutostyöilmoituksen suoraan tästä",
      primaryLabel: "Tee muutostyöilmoitus",
      modalTitle: "Muutostyöilmoitus — ilmalämpöpumppu",
      modalDescription:
        "Hakemus välittyy isännöitsijälle käsittelyyn. Hallitus arvioi pyynnön kokouksessaan; päätös toimitetaan kirjallisesti ennen töiden aloitusta. Puuttuvat liitteet voi täydentää myöhemmin samassa asiassa.",
      attachments: [
        { name: "Laitelehti ja mallitiedot", meta: "PDF" },
        { name: "Ehdotettu ulkoyksikön paikka", meta: "Kuva tai luonnos" },
        { name: "Urakoitsijan pätevyys (KTK tai vastaava)", meta: "PDF" },
      ],
    },
  },
  {
    id: "ev",
    label: "Sähköauton latauspisteen asennus",
    question:
      "Tarvitsen sähköauton latauspisteen autopaikalleni. Mitä taloyhtiö edellyttää ja kuka hyväksyy asennuksen?",
    sourceLines: [
      "Lähde: Hallituksen päätöskäytäntö",
      "Lähde: Taloyhtiön muutostyöohje",
      "Lähde: Järjestyssäännöt",
    ],
    detailItems: [
      "Liitäntä tehdään vain taloyhtiön sähkösuunnittelijan tai pääurakoitsijan hyväksymästä pääkeskuksesta; väliaikaiset jatkojohdot eivät ole sallittuja.",
      "Kuormitus ja samanaikaiset lataukset on rajattava taloyhtiön hyväksymän mallin mukaan (esim. dynaaminen kuormitus tai ryhmäkeskus).",
      "Mittaus: laskutus perustuu joko omaan alamittariin tai taloyhtiön jakamaan malliin; tämä kirjataan ennen käyttöönottoa.",
      "Asennus ja käyttöönotto: sähköpätevyysluokka, käyttöönottopöytäkirja ja mahdollinen paloturvallisuuslausunto toimitetaan isännöitsijälle.",
      "Autopaikan hallintaperuste (osake / vuokra) vaikuttaa sopimus- ja rekisteröintipolkuun; tarkista oma tilanteesi isännöitsijältä ennen töitä.",
    ],
    companyPolicy: {
      intro:
        `Tämä koskee nimenomaan ${DEMO_HOUSING_COMPANY}:n kirjattuja sisäisiä sääntöjä — tekoäly ei vastaa yleisellä mallilla, vaan käyttää tästä yhtiöstä ladattuja ohjeita.`,
      bullets: [
        "Sallitaan luvalla: kirjallinen hakemus ja hallituksen hyväksyntä ennen töitä.",
        "Kustannusvastuu osakkaalla: laite, asennus ja mittaus sekä mahdollinen pääkeskuksen kapasiteetin tarkistus.",
        "Kuormanhallinta vaaditaan: dynaaminen tai ryhmäkeskus, jotta talon pääsulku ei ylity.",
      ],
    },
    sections: [
      {
        title: "Vastaus",
        body:
          "Henkilökohtainen latauspiste voidaan asentaa, kun taloyhtiön sähkönjakelu ja pääkeskuksen kapasiteetti sen sallivat ja asennus on hallituksen hyväksymä kirjallisesti. Mittaus, kuormitus ja vastuunjako yhteisiin osuuksiin kirjataan ennen töiden aloitusta.",
      },
      {
        title: "Peruste taloyhtiön ohjeista",
        body: [
          "Sähköverkkoa ja yhteisiä tiloja koskevat muutokset kuuluvat taloyhtiön päätösvaltaan; osakkaan omaan käyttöön tuleva laite liitetään taloyhtiön vahvistaman suunnitelman mukaan.",
          "Sähköturvallisuus ja paloturvallisuus: asennus tehdään voimassa olevien normien mukaisesti, ja urakoitsijalla on vaadittava pätevyys.",
          "Pysäköinti: latauslaite sijoitetaan taloyhtiön osoittamaan paikkaan (esim. nimetty autopaikka tai autohalli), jotta huoltotiet ja pelastuskulkureitit säilyvät.",
        ],
      },
      {
        title: "Toimenpiteet",
        body: [
          "Ota yhteyttä isännöitsijään: kerro toivottu teho, paikka ja mahdollinen kiinteä asennus vs. irrotettava ratkaisu.",
          "Hallitus pyytää tarvittaessa sähkösuunnittelijalta kuormitusarvion ja liitäntäehdotuksen talon pääkeskuksesta.",
          "Hyväksynnän jälkeen valitse urakoitsija taloyhtiön edellyttämällä pätevyydellä; töiden valvonta sovitaan kirjallisesti.",
          "Käyttöönoton yhteydessä sovitaan mittaus ja laskutus taloyhtiön käytännön mukaisesti (esim. oma mittari tai jaettu malli).",
        ],
      },
      {
        title: "Huomioitavaa",
        body:
          "Useissa taloissa samanaikaiset lataukset on rajattava älykkäällä kuormituksella; tämä voi vaikuttaa laitteen valintaan. Autopaikan hallintaperuste (osake / vuokra) vaikuttaa siihen, miten asennus kirjataan — tarkista oma tilanteesi isännöitsijältä ennen investointia.",
      },
    ],
    workflow: {
      nextStepIntro: "Aloita hakemus taloyhtiölle",
      primaryLabel: "Aloita hakemus",
      modalTitle: "Hakemus — sähköauton latauspiste",
      modalDescription:
        "Hakemus välittyy isännöitsijälle. Tarvittaessa pyydämme sähkösuunnittelijalta kuormitusarvion ja liitäntäehdotuksen ennen hallituksen käsittelyä. Saat seurantaviestin, kun asia etenee.",
      attachments: [
        { name: "Toivottu teho ja lataustapa (kiinteä / irrotettava)", meta: "Teksti" },
        { name: "Autopaikan tunniste ja sijainti", meta: "Kuva tai numero" },
        { name: "Mahdollinen urakoitsija", meta: "Yhteystiedot" },
      ],
    },
  },
];

function AiSectionBlock({ section }: { section: AiSection }) {
  return (
    <div className="border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        {section.title}
      </h4>
      {Array.isArray(section.body) ? (
        <ul className="mt-2.5 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-700">
          {section.body.map((line) => (
            <li key={line} className="pl-0.5 marker:text-slate-400">
              {line}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{section.body}</p>
      )}
      {section.title === "Vastaus" ? (
        <p className="mt-2.5 text-[12px] leading-relaxed text-slate-500">
          Perustuu taloyhtiön tietoihin, historiatietoihin ja ajankohtaiseen tilanteeseen
        </p>
      ) : null}
    </div>
  );
}

function DocumentIcon() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-slate-50 text-slate-500 shadow-sm"
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
        <path
          d="M8 3.5h6l4.5 4.5V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <path d="M14 3.5v4.5H18" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M8.5 12.5h7M8.5 15.5h7M8.5 18.5h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function DocumentSources({ lines }: { lines: readonly string[] }) {
  return (
    <div className="border-t border-slate-100 pt-4">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
        Lähde
      </p>
      <ul className="mt-2.5 space-y-1.5 border-l border-slate-200/90 pl-3">
        {lines.map((line) => (
          <li
            key={line}
            className="text-[12.5px] leading-snug text-slate-600 [font-feature-settings:'tnum']"
          >
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConfidenceFootnote() {
  return (
    <p className="border-t border-slate-100 pt-3 text-[12px] leading-relaxed tracking-[0.01em] text-slate-500">
      {CONFIDENCE_LINE}
    </p>
  );
}

function CompanyPolicyBlock({ policy }: { policy: CompanyPolicy }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-gradient-to-br from-blue-50/50 to-slate-50/40 px-4 py-3.5 shadow-sm shadow-slate-900/[0.02]">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600">
        Taloyhtiön käytäntö
      </h4>
      <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">{policy.intro}</p>
      <ul className="mt-3 space-y-2 border-l border-slate-200/80 pl-3 text-[12.5px] leading-relaxed text-slate-700">
        {policy.bullets.map((line) => (
          <li key={line} className="relative">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailExpand({ items }: { items: string[] }) {
  return (
    <details className="group mt-4 border-t border-slate-100 pt-3 [&_summary::-webkit-details-marker]:hidden">
      <summary className="cursor-pointer list-none py-1 text-[12.5px] text-slate-500 transition-colors hover:text-slate-700">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="font-mono text-[11px] text-slate-400 transition-transform duration-150 group-open:rotate-90"
            aria-hidden
          >
            ›
          </span>
          Näytä tarkemmat ehdot
        </span>
      </summary>
      <ul className="mt-3 space-y-2.5 border-l border-slate-200/80 pl-3 text-[12.5px] leading-relaxed text-slate-600">
        {items.map((line) => (
          <li key={line} className="relative pl-0">
            {line}
          </li>
        ))}
      </ul>
    </details>
  );
}

function NextStepBlock({
  workflow,
  submitted,
  onDemoAction,
}: {
  workflow: WorkflowAction;
  submitted: boolean;
  onDemoAction: () => void;
}) {
  return (
    <div className="border-t border-slate-100 pt-5">
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        Seuraava askel
      </h4>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{workflow.nextStepIntro}</p>
      <div className="mt-4">
        <button type="button" onClick={onDemoAction} className="btn-primary w-full sm:w-auto">
          {workflow.primaryLabel}
        </button>
      </div>
      {submitted ? (
        <div className="mt-4">
          <DemoSuccessPanel
            title="Hakemus vastaanotettu"
            description="Pyyntö siirretty käsittelyyn. Saat ilmoituksen kun asia etenee."
          />
        </div>
      ) : null}
    </div>
  );
}

export default function AsukasPage() {
  const [message, setMessage] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});

  const showPreview = messageSubmitted || message.length > 40;

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell-narrow">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Asukas"
          title="Selkeät vastaukset taloyhtiön sääntöjen pohjalta"
          description="Kysy omalla tavallasi tai tutustu esimerkkeihin. Demo näyttää, miten ohjeista poimitaan oikeat vaatimukset ja etenemisjärjestys — ilman että asukkaan tarvitsee itse silmäillä koko sääntökirjaa."
        />

        <RoleEmphasis when="asukas">
          <section aria-labelledby="featured-demos-heading">
          <h2 id="featured-demos-heading" className="section-label-tight">
            Esimerkkikysymykset
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            Alla kaksi tyypillistä muutostyöhakemusta. Rakenne vastaa tuotantoa: järjestelmä lukee
            ohjeet ja päätökset, tiivistää vaatimukset ja etenemisjärjestyksen, ja listaa
            viittaukset taloyhtiön asiakirjoihin.
          </p>
          <div className="space-y-6">
            {featuredDemos.map((demo) => (
              <Surface
                key={demo.id}
                padding="lg"
                variant="elevated"
                className="overflow-hidden shadow-card-blue-lg ring-1 ring-slate-200/90"
              >
                <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <DocumentIcon />
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        Asiakirjahaku · ohjeistot
                      </p>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                        {demo.label}
                      </h3>
                    </div>
                  </div>
                </div>

                <figure className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3.5">
                  <figcaption className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Kysely
                  </figcaption>
                  <blockquote className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
                    &ldquo;{demo.question}&rdquo;
                  </blockquote>
                </figure>

                <div className="mt-6 space-y-5 rounded-xl border border-slate-100 bg-slate-50/30 p-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    Tiivistelmä ohjeista
                  </p>
                  <div className="space-y-5">
                    <CompanyPolicyBlock policy={demo.companyPolicy} />
                    {demo.sections.map((section) => (
                      <Fragment key={section.title}>
                        <AiSectionBlock section={section} />
                        {section.title === "Vastaus" ? (
                          <NextStepBlock
                            workflow={demo.workflow}
                            submitted={submitted[demo.id] === true}
                            onDemoAction={() =>
                              setSubmitted((prev) => ({ ...prev, [demo.id]: true }))
                            }
                          />
                        ) : null}
                      </Fragment>
                    ))}
                  </div>
                </div>

                <div className="mt-5 space-y-0">
                  <DocumentSources lines={demo.sourceLines} />
                  <ConfidenceFootnote />
                </div>

                <DetailExpand items={demo.detailItems} />

                <p className="mt-5 text-[11px] leading-relaxed text-slate-400">
                  Demo: vastaus ja &quot;Taloyhtiön käytäntö&quot; on rakennettu kuvitteellisen{" "}
                  {DEMO_HOUSING_COMPANY} -yhtiön ohjeista; ei yksittäisen yhtiön virallinen
                  asiakirja.
                </p>
              </Surface>
            ))}
          </div>
        </section>
        </RoleEmphasis>

        <Surface padding="lg" variant="elevated" className="section-y-tight">
          <div className="flex items-start gap-3 border-b border-slate-100 pb-5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-xs font-bold text-white shadow-sm shadow-blue-600/25"
              aria-hidden
            >
              S
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">Käsittely</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                Viesti menee huollolle tai hallituksen nähtäväksi. Demossa
                mitään ei tallenneta eikä lähetetä.
              </p>
            </div>
          </div>

          <label htmlFor="msg" className="mt-6 block text-sm font-medium text-slate-800">
            Viesti taloyhtiölle
          </label>
          <div className="mt-2 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-1 shadow-inner shadow-slate-900/[0.03]">
            <textarea
              id="msg"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setMessageSubmitted(false);
              }}
              rows={5}
              placeholder="Kerro missä olet, mitä tapahtuu ja tarvitaanko apua heti."
              className="w-full resize-y rounded-[0.85rem] border-0 bg-white px-4 py-3 text-sm leading-relaxed text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-slate-500">
              Lomakkeita ei tarvita — riittää lyhyt kuvaus.
            </p>
            <button
              type="button"
              disabled={messageSubmitted}
              onClick={() => setMessageSubmitted(true)}
              className="btn-primary w-full shrink-0 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
            >
              {messageSubmitted ? "Lähetetty (demo)" : "Lähetä käsittelyyn"}
            </button>
          </div>
          {messageSubmitted ? (
            <div className="mt-5">
              <DemoSuccessPanel
                title="Pyyntö siirretty käsittelyyn"
                description="Viesti näkyy alla esimerkkikäsittelynä. Tätä demoa ei tallenneta palvelimelle."
              />
            </div>
          ) : null}
        </Surface>

        <div className="mt-10">
          <p className="section-label-tight">Aloita näistä</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setMessage(s);
                  setMessageSubmitted(false);
                }}
                className="chip-suggestion"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {showPreview ? (
          <Surface
            variant="accent"
            padding="lg"
            className="mt-10 ring-1 ring-blue-100/85 shadow-md shadow-blue-500/[0.06]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
              Esimerkki käsittelystä (demo)
            </p>
            <p className="mt-3 text-sm font-medium leading-snug text-slate-900">
              Huolto- tai kunnossapitoasia: luokka ja kiireellisyys luetaan
              viestin sisällöstä.
            </p>
            <ul className="mt-5 space-y-2.5 border-l-2 border-blue-200/70 pl-4 text-sm leading-relaxed text-slate-700">
              <li>
                <span className="font-medium text-slate-800">Luokka (esimerkki):</span>{" "}
                tekniikka / hissi tai LVIS
              </li>
              <li>
                <span className="font-medium text-slate-800">Kiireellisyys (esimerkki):</span>{" "}
                keskitaso, ellei kyse ole välittömästä turvallisuusriskistä
              </li>
              <li>
                <span className="font-medium text-slate-800">Seuraava askel:</span>{" "}
                huollon tarkastuspyyntö tai tarkentava kysymys asukkaalle
              </li>
              <li>
                <span className="font-medium text-slate-800">Kenelle:</span> huoltoyhtiö ja
                tarvittaessa isännöitsijä; hallitus näkee tilannekortin ilman
                henkilötietoja
              </li>
            </ul>
            <p className="mt-5 rounded-lg bg-white/90 px-3 py-2.5 text-xs leading-relaxed text-slate-600 ring-1 ring-blue-100/70">
              Tuotannossa saat vahvistuksen ja viestinumeron. Demo ei tallenna
              lähetyksiä.
            </p>
            {messageSubmitted ? (
              <p className="mt-4 text-xs font-medium text-emerald-800">
                Esikatselu näytetään lähetettynä (vain tässä näkymässä).
              </p>
            ) : null}
          </Surface>
        ) : null}
      </div>
    </div>
  );
}
