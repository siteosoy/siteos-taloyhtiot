import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const kpis = [
  { label: "Avoimet tehtävät", value: "24", delta: "+3 tänään" },
  { label: "SLA kunnossa", value: "94%", delta: "7 päivän keskiarvo" },
  { label: "Kiireelliset", value: "5", delta: "2 odottaa vastausta" },
  { label: "Asukasviestejä (viikko)", value: "118", delta: "AI luokitellut 100%" },
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

export default function ControlPage() {
  return (
    <div className="gradient-control flex flex-1 flex-col">
      <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-blue-500/15 to-transparent blur-3xl" />

        <PageHeader
          eyebrow="Operatiivinen ohjaus"
          title="Ohjausnäkymä"
          description="Koko taloyhtiön tilanne yhdellä silmäyksellä: KPI:t, tekoälyn tiivistelmä ja kiireelliset erillisellä paneelilla."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {kpis.map((k) => (
            <Surface key={k.label} variant="elevated" className="relative overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-500/10 blur-2xl" />
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {k.label}
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                {k.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{k.delta}</p>
            </Surface>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Surface variant="accent" padding="lg" className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Tekoälyn tiivistelmä
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Viikon viestit painottuivat hissi- ja LVIS-aiheisiin. Kolme
              toistuvaa aihetta: hissin oven tunnistin, lämmön vaihtelut
              porraskäytävässä ja parkkipaikan valaistus. Suositus: yhdistä
              hissi-tehtävät yhdeksi urakkaohjelmaksi ja päivitä asukaille
              eteneminen viikoittain.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Hissi", "LVIS", "Sähkö", "Turvallisuus"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-medium text-blue-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </Surface>

          <Surface padding="lg" className="border-amber-200/80 bg-gradient-to-br from-amber-50/90 to-white">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Kiireelliset
            </p>
            <ul className="mt-4 space-y-3">
              {urgent.map((u) => (
                <li
                  key={u.title}
                  className="rounded-xl border border-amber-100 bg-white/90 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-slate-900">{u.title}</p>
                    <span className="shrink-0 rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-900">
                      {u.tag}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{u.time}</p>
                </li>
              ))}
            </ul>
          </Surface>
        </div>

        <Surface padding="lg" className="mt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Huolto ja tehtävät
              </p>
              <p className="text-sm text-slate-600">
                Strukturoidut tehtävät reititetty oikeille tahoille.
              </p>
            </div>
            <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Synkronoitu SITEOS:iin
            </span>
          </div>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Tehtävä</th>
                  <th className="px-4 py-3 font-medium">Vastuu</th>
                  <th className="px-4 py-3 font-medium">Määräaika</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {maintenance.map((m) => (
                  <tr key={m.task}>
                    <td className="px-4 py-3 font-medium text-slate-900">{m.task}</td>
                    <td className="px-4 py-3 text-slate-600">{m.owner}</td>
                    <td className="px-4 py-3 text-slate-600">{m.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Surface>
      </div>
    </div>
  );
}
