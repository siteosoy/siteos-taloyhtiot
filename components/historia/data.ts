/** Demo feature id: projektipankki — UI label: Taloyhtiön historia */
export const PROJEKTIPANKKI_ROUTE = "/historia" as const;

/** Yhteenveto: lyhyet havainnot (demo) */
export const summaryInsights = [
  "Suurimmat toteutuneet hankkeet: julkisivu (2018) ja hissit (2020).",
  "Vastike ja kulut: energia + vakuutus nousevat maltillisesti; isot remontit rahoitettu erillisesti.",
  "Seuraava painopiste: sähköautoinfra ja LVIS — aikataulu sidottu kunnossapitoon.",
] as const;

export type TimelineEvent = {
  year: number;
  title: string;
  description: string;
  status?: "done" | "ongoing" | "planned";
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: 2015,
    title: "Kattoremontti ja sadevedet",
    description: "Kate, rännit ja syöksyt — vesikatto kunnossa seuraavaksi vuosikymmeneksi.",
    status: "done",
  },
  {
    year: 2018,
    title: "Julkisivukorjaus",
    description: "Rappaus ja ikkunapellit; parempi energiatehokkuus ja julkisivun ikä.",
    status: "done",
  },
  {
    year: 2020,
    title: "Hissien modernisointi",
    description: "Ohjaus ja ovimekanismit — turvallisuus ja käytettävyys ajan tasalla.",
    status: "done",
  },
  {
    year: 2026,
    title: "Sähköautohanke",
    description: "Latauskapasiteetti ja sähkönsyöttö; kilpailutus käynnissä.",
    status: "ongoing",
  },
];

export type ProjectRow = {
  name: string;
  year: number;
  scope: string;
  cost: string;
  status: "Valmis" | "Käynnissä" | "Suunnitteilla";
};

/** Esimerkkihankkeet projektipankissa (demo) */
export const projectHistory: ProjectRow[] = [
  {
    name: "Julkisivu ja ikkunat",
    year: 2018,
    scope: "Rappaus, tiiliverhouksen korjaukset ja ikkunapellit — laajin yksittäinen urakka.",
    cost: "n. 420 000 €",
    status: "Valmis",
  },
  {
    name: "Sähköauton latausinfra",
    year: 2026,
    scope: "Tehonsyöttö ja latauspisteet; kilpailutus ja käyttöönotto.",
    cost: "arvio 120–160 000 €",
    status: "Käynnissä",
  },
];
