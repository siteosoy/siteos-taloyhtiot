import type { Metadata } from "next";
import Link from "next/link";
import { DokumentitSection } from "@/components/control/DokumentitSection";
import { DigitaalinenTiedottaminenSection } from "@/components/dashboard/DigitaalinenTiedottaminenSection";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

export const metadata: Metadata = {
  title: "Ohjaus",
};

const snapshot = [
  { label: "Avoimet tehtävät", value: "24", hint: "+3 tänään" },
  { label: "Kiireelliset", value: "5", hint: "2 odottaa vastausta", emphasis: true as const },
  { label: "SLA (7 pv)", value: "94%", hint: "Keskiarvo" },
];

const urgent = [
  { title: "Hissi B — pysähdyskerrokset", tag: "Korkea", time: "12 min sitten" },
  { title: "Vuoto pesuhuoneessa, 4. krs", tag: "Kriittinen", time: "28 min sitten" },
  { title: "Sähkökeskus — haju", tag: "Korkea", time: "1 h sitten" },
];

const maintenance = [
  { task: "Tarkista hissin loki, huoltokirjaus", owner: "Huolto", due: "Tänään" },
  { task: "Lämmitysjärjestelmän venttiilit", owner: "Urakoitsija", due: "Pe" },
  { task: "Pihan valaistuksen tarkastus", owner: "Kiinteistö", due: "Ma" },
];

const automations = [
  {
    text: "Palotarkastusmuistutus lähetetty",
    meta: "Isännöitsijä · tänään 08:12",
  },
  {
    text: "Pihavalojen huolto lisätty tehtävälistaan",
    meta: "Kiinteistö · eilen",
  },
  {
    text: "Asukkaille tiedote: vesikatko huomenna",
    meta: "Hallitus ja asukkaat · eilen",
  },
  {
    text: "Huoltokirjan merkintä päivitetty automaattisesti",
    meta: "LVIS · 3 pv sitten",
  },
];

const whySiteos = [
  {
    title: "Vähemmän kysymyksiä",
    body: "SITEOS-järjestelmä vastaa asukkaiden yleisiin kysymyksiin automaattisesti taloyhtiön omien sääntöjen perusteella.",
  },
  {
    title: "Selkeä toiminta",
    body: "Järjestelmä ei vain näytä tietoa, vaan ohjaa suoraan oikeaan toimenpiteeseen.",
  },
  {
    title: "Parempi ennakointi",
    body: "Talousnäkymä auttaa välttämään kalliita yllätyksiä ja ajoittamaan remontit oikein.",
  },
] as const;

export default function ControlPage() {
  return (
    <div className="gradient-control relative flex flex-1 flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-500/[0.08] to-transparent" />

      <div className="relative page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Ohjauskeskus"
          title="Päivän tilanne ja kiireelliset"
          description="Talous, kiireelliset, automaatiot ja dokumentit samassa näkymässä. Kiireelliset näkyvät ensin."
          actions={
            <div className="flex w-full flex-col gap-1.5 sm:w-auto sm:items-end sm:text-right">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-900/90">
                Vaatii huomiota
              </p>
              <p className="text-2xl font-semibold tabular-nums text-slate-900">5</p>
              <p className="text-xs text-slate-500">kiireellistä tehtävää</p>
              <Link
                href="/dashboard"
                className="link-inline mt-1.5 flex w-full justify-center text-sm sm:inline-flex sm:w-auto sm:justify-end"
              >
                Avaa työpöytä
              </Link>
            </div>
          }
        />

        {/* Miksi SITEOS */}
        <RoleEmphasis when="asukas">
          <section className="section-y-tight" aria-labelledby="control-why-heading">
          <h2 id="control-why-heading" className="section-label">
            Miksi SITEOS
          </h2>
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
            {whySiteos.map((item, i) => (
              <Surface
                key={item.title}
                variant="elevated"
                padding="lg"
                className="border border-slate-200/70 border-l-[3px] border-l-slate-300/90 bg-white/90 shadow-sm shadow-slate-900/[0.02]"
              >
                <p className="text-[11px] font-medium tabular-nums text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </Surface>
            ))}
          </div>
        </section>
        </RoleEmphasis>

        {/* Talous ja analyysi */}
        <RoleEmphasis when={["hallitus", "isannointi"]}>
          <section className="section-y" aria-labelledby="control-talous-heading">
          <h2 id="control-talous-heading" className="section-label">
            Talous ja analyysi
          </h2>
          <Link
            href="/talous"
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
          >
            <Surface
              variant="elevated"
              padding="lg"
              className="relative overflow-hidden border-emerald-200/70 shadow-card-hero ring-2 ring-emerald-300/50 transition group-hover:ring-emerald-400/60"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600/90" />
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-400/12 blur-2xl" />
              <div className="relative flex flex-col gap-6 pl-1 sm:pl-2 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="min-w-0 max-w-2xl space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      Talous
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800">
                      Keskeinen näkymä
                    </span>
                  </div>
                  <p className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl sm:leading-snug">
                    Kulut, vastike ja remonttien ajoitus
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Kulut, kunnossapitosuunnitelma ja tehtävät samassa: arvioitu säästö,
                    seuraavat vaiheet ja vastikkeeseen vaikuttavat riskit.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    <span className="inline-flex items-center rounded-lg border border-emerald-200/90 bg-emerald-50/80 px-3 py-1.5 text-xs font-semibold tabular-nums text-emerald-950">
                      12 400 € / 12 kk
                    </span>
                    <span className="inline-flex items-center rounded-lg border border-slate-200/90 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700">
                      5 etappia · 24 kk
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-end">
                  <span className="btn-primary inline-flex justify-center px-6 shadow-lg shadow-blue-600/20 transition group-hover:bg-blue-500">
                    Avaa talousnäkymä
                  </span>
                  <span className="text-center text-xs text-slate-500 lg:text-right">
                    Aineistoa hallituksen kokoukseen
                  </span>
                </div>
              </div>
            </Surface>
          </Link>

          <Link
            href="/historia"
            className="group section-y-tight block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
          >
            <Surface
              variant="elevated"
              padding="lg"
              className="relative overflow-hidden border-indigo-200/70 shadow-card ring-2 ring-indigo-200/45 transition group-hover:ring-indigo-300/55"
            >
              <div className="pointer-events-none absolute -right-14 top-0 h-36 w-36 rounded-full bg-indigo-400/10 blur-2xl" />
              <div className="relative flex flex-col gap-5 pl-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="min-w-0 max-w-2xl space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      Taloyhtiö
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-900/85">
                      Projektipankki
                    </span>
                  </div>
                  <p className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                    Taloyhtiön historia
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Kaikki projektit, taloustiedot ja muutokset yhdessä paikassa
                  </p>
                </div>
                <span className="btn-secondary inline-flex shrink-0 justify-center px-6 transition group-hover:border-indigo-200 group-hover:bg-indigo-50/80">
                  Avaa projektipankki
                </span>
              </div>
            </Surface>
          </Link>

          <div className="section-y-tight">
            <Surface
              variant="accent"
              padding="lg"
              className="relative overflow-hidden shadow-card-blue-lg ring-1 ring-blue-100/80"
            >
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
                  Viikkokatsaus
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Painopiste: hissi ja LVIS
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Toistuvat teemat: hissin ovitunnistin, lämpötilan vaihtelu porraskäytävässä ja
                  parkkipaikan valaistus. Ehdotus: hissi yhdeksi urakkaohjelmaksi; asukkaille
                  lyhyt viikkotiedote etenemisestä.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Hissi", "LVIS", "Sähkö", "Turvallisuus"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-100/90 bg-white/90 px-3 py-1 text-xs font-medium text-blue-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Surface>
          </div>
        </section>
        </RoleEmphasis>

        {/* Kiireelliset */}
        <RoleEmphasis when={["huolto", "hallitus"]}>
          <section className="section-y" aria-labelledby="control-alerts-heading">
          <h2 id="control-alerts-heading" className="section-label">
            Kiireelliset
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
            <Surface
              padding="lg"
              className="relative overflow-hidden border-slate-200/90 bg-white ring-1 ring-slate-200/75 lg:col-span-1"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Tilannekuva
              </p>
              <dl className="mt-5 space-y-4">
                {snapshot.map((s) => (
                  <div
                    key={s.label}
                    className={
                      s.emphasis
                        ? "rounded-xl border border-amber-200/80 bg-amber-50/50 px-3.5 py-3"
                        : "border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    }
                  >
                    <dt className="text-xs text-slate-500">{s.label}</dt>
                    <dd
                      className={`mt-1 text-2xl font-semibold tabular-nums tracking-tight ${
                        s.emphasis ? "text-amber-950" : "text-slate-900"
                      }`}
                    >
                      {s.value}
                    </dd>
                    <dd className="mt-0.5 text-xs text-slate-500">{s.hint}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
                Asukasviestejä viikossa: <span className="font-medium text-slate-700">118</span>
                <span className="text-slate-400"> · </span>
                luokittelu järjestelmässä
              </p>
            </Surface>

            <Surface
              padding="lg"
              className="relative overflow-hidden border-amber-200/60 bg-gradient-to-b from-amber-50/90 to-white ring-1 ring-amber-200/50 lg:col-span-2"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-900">
                    Vaatii toimenpiteen
                  </p>
                  <p className="mt-1 text-sm text-amber-900/80">
                    Kolme viimeisintä; koko lista työpöydällä
                  </p>
                </div>
                <Link
                  href="/dashboard"
                  className="link-inline shrink-0 self-start sm:self-auto"
                >
                  Avaa työpöytä
                </Link>
              </div>
              <ul className="mt-5 space-y-2.5">
                {urgent.map((u) => (
                  <li
                    key={u.title}
                    className="rounded-xl border border-amber-100/95 bg-white/95 px-4 py-3.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold leading-snug text-slate-900">{u.title}</p>
                      <span
                        className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                          u.tag === "Kriittinen"
                            ? "bg-red-100 text-red-900"
                            : "bg-amber-100 text-amber-950"
                        }`}
                      >
                        {u.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-xs tabular-nums text-slate-500">{u.time}</p>
                  </li>
                ))}
              </ul>
            </Surface>
          </div>
        </section>
        </RoleEmphasis>

        {/* Automaatiot */}
        <RoleEmphasis when="isannointi">
          <section className="section-y" aria-labelledby="control-auto-heading">
          <h2 id="control-auto-heading" className="section-label">
            Automaatiot
          </h2>
          <Surface
            padding="lg"
            variant="elevated"
            className="overflow-hidden ring-1 ring-slate-200/75"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm font-medium text-slate-900">Käynnissä ja viimeksi suoritetut</p>
                <p className="mt-1 text-sm text-slate-500">
                  Muistutukset, tiedotteet ja kirjaukset talon säännöillä — vähemmän käsityötä.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1.5 text-xs font-semibold text-emerald-900">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Automaatiot käynnissä
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              {automations.map((a) => (
                <li key={a.text} className="flex gap-3 py-4 first:pt-5">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500/90"
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-slate-800">{a.text}</p>
                    <p className="mt-1 text-xs tabular-nums text-slate-500">{a.meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Surface>
        </section>
        </RoleEmphasis>

        <DigitaalinenTiedottaminenSection />

        <DokumentitSection headingId="control-docs-heading" />

        {/* Seuraavat tehtävät */}
        <section className="section-y pb-2" aria-labelledby="control-tasks-heading">
          <h2 id="control-tasks-heading" className="section-label">
            Seuraavat tehtävät
          </h2>
          <Surface padding="lg" variant="elevated" className="ring-1 ring-slate-200/75">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-600">
                Tehtävät jaettu vastuille — näkyvät SITEOS:ssa.
              </p>
            </div>
            <div className="-mx-1 mt-6 overflow-x-auto rounded-xl border border-slate-200/85 bg-slate-50/30 sm:mx-0">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead className="border-b border-slate-200/90 bg-white text-[11px] uppercase tracking-[0.12em] text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Tehtävä</th>
                    <th className="px-4 py-3 font-semibold">Vastuu</th>
                    <th className="px-4 py-3 font-semibold">Määräaika</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {maintenance.map((m) => (
                    <tr key={m.task} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3.5 font-medium text-slate-900">{m.task}</td>
                      <td className="px-4 py-3.5 text-slate-600">{m.owner}</td>
                      <td className="px-4 py-3.5 tabular-nums text-slate-600">{m.due}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Surface>
        </section>
      </div>
    </div>
  );
}
