"use client";

import { useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

type Urgency = "Matala" | "Normaali" | "Korkea" | "Kriittinen";
type WorkflowStatus = "Avoin" | "Käsittelyssä" | "Kiireellinen";

const requests: {
  id: string;
  title: string;
  location: string;
  urgency: Urgency;
  status: WorkflowStatus;
  updated: string;
  summary: string;
}[] = [
  {
    id: "T-1042",
    title: "Hissi B — oven tunnistin",
    location: "Porrashuone B, kerrokset 1–7",
    urgency: "Korkea",
    status: "Käsittelyssä",
    updated: "Päivitetty tänään 09:14",
    summary: "Huoltoliike tilattu, tarkastus tänään klo 14–16.",
  },
  {
    id: "T-1038",
    title: "Pihan valaisimet, osa sammuu",
    location: "Piha-alue, pääsisäänkäynnin puoli",
    urgency: "Korkea",
    status: "Kiireellinen",
    updated: "Eilen 16:42",
    summary:
      "Sähköurakoitsija priorisoitu — korjausikkuna torstaihin mennessä, valaistus osittain pois käytöstä.",
  },
  {
    id: "T-1031",
    title: "Lämmön vaihtelu 3. kerros",
    location: "Porras A, lämmityspatterit",
    urgency: "Matala",
    status: "Avoin",
    updated: "Ma 11.3.",
    summary: "Seuranta — ei toistuvaa häiriötä viime päivinä.",
  },
];

const urgencyOptions: {
  value: Urgency;
  hint: string;
  active: string;
  idle: string;
}[] = [
  {
    value: "Matala",
    hint: "Seuranta, ei välitöntä toimenpidettä",
    active: "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30",
    idle: "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:bg-emerald-50/40",
  },
  {
    value: "Normaali",
    hint: "Tyypillinen huoltokierros",
    active: "border-blue-500 bg-blue-50 text-blue-950 ring-2 ring-blue-500/30",
    idle: "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/40",
  },
  {
    value: "Korkea",
    hint: "Tarkastus tai vastaus pian",
    active: "border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-500/35",
    idle: "border-slate-200 bg-white text-slate-700 hover:border-amber-200 hover:bg-amber-50/40",
  },
  {
    value: "Kriittinen",
    hint: "Turvallisuus tai käyttö estetty",
    active: "border-red-500 bg-red-50 text-red-950 ring-2 ring-red-500/35",
    idle: "border-slate-200 bg-white text-slate-700 hover:border-red-200 hover:bg-red-50/40",
  },
];

function statusBadgeClasses(status: WorkflowStatus) {
  switch (status) {
    case "Avoin":
      return "border-slate-200 bg-white text-slate-800";
    case "Käsittelyssä":
      return "border-blue-200 bg-blue-50 text-blue-900";
    case "Kiireellinen":
      return "border-red-200 bg-red-50 text-red-900";
  }
}

function urgencyBadgeClasses(u: Urgency) {
  if (u === "Kriittinen") return "bg-red-100 text-red-950";
  if (u === "Korkea") return "bg-amber-100 text-amber-950";
  if (u === "Normaali") return "bg-slate-200/90 text-slate-800";
  return "bg-emerald-100/90 text-emerald-950";
}

export default function HuoltoPage() {
  const [title, setTitle] = useState("");
  const [urgency, setUrgency] = useState<Urgency>("Normaali");
  const [note, setNote] = useState("");
  const [taskSavedDemo, setTaskSavedDemo] = useState(false);

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Huolto"
          title="Tehtävät ja kiireellisyys"
          description="Lisää tehtävä tai seuraa avoimia pyyntöjä. Kiireellisyys näkyy myös ohjausnäkymässä."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <RoleEmphasis when="huolto">
            <Surface padding="lg" variant="elevated">
            <div className="border-b border-slate-100 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Uusi tehtävä
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Lyhyt otsikko riittää; lisää huollolle tarvittavat tiedot alle.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="title" className="text-sm font-medium text-slate-900">
                  Tehtävän otsikko
                </label>
                <p className="mt-0.5 text-xs text-slate-500">Näkyy listassa ja tehtäväkortilla</p>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Esim. Vesivuoto talovarastossa, takaovi"
                  autoComplete="off"
                />
              </div>

              <div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-sm font-medium text-slate-900">Kiireellisyys</span>
                  <span className="text-xs text-slate-500">Vaikuttaa järjestykseen ja näkyvyyteen</span>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {urgencyOptions.map((opt) => {
                    const selected = urgency === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setUrgency(opt.value)}
                        className={`flex flex-col rounded-xl border px-3 py-2.5 text-left transition ${
                          selected ? opt.active : opt.idle
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-wide">
                          {opt.value}
                        </span>
                        <span
                          className={`mt-1 text-[11px] leading-snug ${
                            selected ? "text-current opacity-90" : "text-slate-500"
                          }`}
                        >
                          {opt.hint}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="note" className="text-sm font-medium text-slate-900">
                  Huomiot huollolle
                </label>
                <p className="mt-0.5 text-xs text-slate-500">
                  Turvallisuus, avaimet, käyttörajoitukset
                </p>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={4}
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 text-sm leading-relaxed text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Esim. Avain huoltokopissa, hissi käytössä vain huollolle..."
                />
              </div>

              <div className="border-t border-slate-100 pt-4">
                <button
                  type="button"
                  disabled={taskSavedDemo}
                  onClick={() => setTaskSavedDemo(true)}
                  className="btn-primary w-full py-3 disabled:pointer-events-none disabled:opacity-60"
                >
                  {taskSavedDemo ? "Tehtävä tallennettu (demo)" : "Tallenna tehtävä"}
                </button>
                {taskSavedDemo ? (
                  <div className="mt-4">
                    <DemoSuccessPanel
                      title="Ilmoitus tallennettu demoon"
                      description="Tehtävä näkyy tässä näkymässä vain osoituksena — palvelimelle ei lähetetä mitään."
                    />
                  </div>
                ) : null}
                <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
                  Demo: muutokset säilyvät vain tässä selaimen istunnossa.
                </p>
              </div>
            </div>
          </Surface>
          </RoleEmphasis>

          <RoleEmphasis when={["huolto", "isannointi"]}>
            <Surface padding="lg" variant="elevated">
            <div className="border-b border-slate-100 pb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Avoimet pyynnöt
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Tehtävänumero, tila ja kiireellisyys samalla rivillä.
              </p>
            </div>

            <ul className="mt-6 space-y-4">
              {requests.map((r) => (
                <li
                  key={r.id}
                  className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm shadow-slate-900/[0.04]"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                        {r.id}
                      </p>
                      <p className="mt-1 font-semibold leading-snug text-slate-900">{r.title}</p>
                      <p className="mt-1 text-xs text-slate-600">{r.location}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <span
                        className={`rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusBadgeClasses(r.status)}`}
                      >
                        {r.status}
                      </span>
                      <span
                        className={`rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${urgencyBadgeClasses(r.urgency)}`}
                      >
                        {r.urgency}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-relaxed text-slate-700">
                    {r.summary}
                  </p>
                  <p className="mt-2 text-xs tabular-nums text-slate-500">{r.updated}</p>
                </li>
              ))}
            </ul>
          </Surface>
          </RoleEmphasis>
        </div>
      </div>
    </div>
  );
}
