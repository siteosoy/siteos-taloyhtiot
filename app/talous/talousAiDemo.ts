/** Staattinen demo — talousnäkymä, päätös ja vaikutus */
export const talousAiDemo = {
  header: {
    title: "Talous",
    subtitle: "Ennakoi kustannukset ja tasaa ne ajoissa järjestelmän datan perusteella",
  },
  observation: {
    title: "Havainto",
    text: "Taloyhtiössä on odotettavissa putkiremontti noin 15 vuoden sisällä.",
  },
  recommendation: {
    title: "Suositus",
    text: "Suosittelemme vastikkeen maltillista korotusta nyt, jotta tuleva kustannus voidaan tasata ilman merkittävää kertanousua.",
  },
  comparison: {
    optionA: {
      title: "Ei toimenpiteitä",
      lines: [
        { label: "Vastike nyt", value: "3,20 €/m²" },
        { label: "15 vuoden päästä", value: "+2,10 €/m² korotus" },
      ],
    },
    optionB: {
      title: "Ennakoiva ratkaisu (suositus)",
      lines: [
        { label: "Vastike nyt", value: "+0,30 €/m²" },
        { label: "15 vuoden päästä", value: "ei merkittävää korotusta" },
      ],
    },
  },
  impact: {
    title: "Vaikutus taloyhtiölle",
    bullets: [
      "Tasaisempi kustannuskehitys",
      "Parempi ennakoitavuus",
      "Asuntojen arvo säilyy vakaampana",
    ],
  },
  trust: {
    text: "Perustuu taloyhtiön historiallisiin kustannuksiin ja toteutuneisiin investointeihin",
    historyLinkLabel: "Avaa historia",
    historyHref: "/historia" as const,
  },
  cta: {
    label: "Vie hallituksen käsittelyyn",
    href: "/hallitus" as const,
  },
} as const;
