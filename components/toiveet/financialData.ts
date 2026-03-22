export type TaloudellinenVaikutusData = {
  costMin: number;
  costMax: number;
  vastikeKuvaus: string;
  ajoitus: string;
  skenaarioNyt: string;
  skenaarioMyohemmin: string;
  aiSuositus: string;
};

export const financialByRequestId: Record<string, TaloudellinenVaikutusData> = {
  pihavalaistus: {
    costMin: 8_000,
    costMax: 15_000,
    vastikeKuvaus:
      "Arvioitu vaikutus vastikkeeseen noin +0,10–0,20 €/m²/kk, kun kustannus jaetaan koko huoneiston neliöille ja rahoitus on esimerkinomainen laina-aika.",
    ajoitus:
      "Kevät ja kesä ovat usein kustannustehokkaimpia: urakka ehtii valmiiksi ennen pimeää kautta ja urakoitsijoiden kapasiteetti on tasaisempi kuin syksyn ruuhkassa.",
    skenaarioNyt:
      "Valaistus on käytössä jo tulevana talvena, turvallisuus paranee ja pimeän ajan vikailmoitukset vähenevät.",
    skenaarioMyohemmin:
      "Investointi siirtyy, mutta hyöty viivästyy ja korjaus saattaa tulla tehtyä kiireessä kalliimpana.",
    aiSuositus:
      "Kohtuullinen kertakustannus ja selkeä asukashyöty — sopii hallituksen keväiseen päätöskierrokseen ja urakkakilpailutukseen.",
  },
  latauspisteet: {
    costMin: 38_000,
    costMax: 72_000,
    vastikeKuvaus:
      "Vaikutus vastikkeeseen arviolta +0,55–1,05 €/m²/kk riippuen pisteiden määrästä ja siitä, tarvitaanko sähkökeskuksen tai johdotuksen vahvistuksia.",
    ajoitus:
      "Kannattaa ajoittaa samaan remonttiin muiden sähkötöiden kanssa: yksi urakka, vähemmän katkaisuja ja selkeämpi kokonaiskuva.",
    skenaarioNyt:
      "Vastataan kasvavaan kysyntään ja hyödynnetään mahdolliset tuet ja kilpailutus yhdellä kertaa.",
    skenaarioMyohemmin:
      "Kaksi erillistä vaihetta (ensin verkko, myöhemmin lataus) nostaa usein kokonaiskustannusta ja jättää päätöksen uudelleen pöydälle.",
    aiSuositus:
      "Yhdistä isännöinnin kanssa laajempaan sähkösuunnitelmaan — päätös on kestävämpi, kun rahoitus ja tekninen malli tehdään kerralla kuntoon.",
  },
  leikkipaikka: {
    costMin: 18_000,
    costMax: 42_000,
    vastikeKuvaus:
      "Arvioitu vaikutus vastikkeeseen noin +0,22–0,52 €/m²/kk, kun mukaan lasketaan turvallisuuspinnoitteet, leikkivälineet ja mahdollinen pohjatyö.",
    ajoitus:
      "Asennukset ja pintatyöt kannattaa tehdä keväällä tai alkukesällä: maa on kantava ja käyttö alkaa heti lomakaudella.",
    skenaarioNyt:
      "Perheet saavat turvallisen ja päivitetyn leikkipaikan jo tulevana kesänä — näkyvä parannus koko taloyhtiölle.",
    skenaarioMyohemmin:
      "Lykkääminen säästää tämän vuoden budjettia, mutta vanhat rakenteet ja turvallisuusriskit jäävät voimaan pidempään.",
    aiSuositus:
      "Lasten käyttö ja turvallisuus puoltavat aikaistamista. Kilpailuta urakka keväällä ja varmista CE-merkinnät ja huolto-ohjelma.",
  },
};

export function formatEuroRange(min: number, max: number): string {
  const fmt = new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 });
  return `${fmt.format(min)} – ${fmt.format(max)} €`;
}
