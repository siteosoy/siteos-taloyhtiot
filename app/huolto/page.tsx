"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const requests = [
  { id: "T-1042", title: "Hissi B — oven tunnistin", urgency: "Korkea", status: "Työn alla" },
  { id: "T-1038", title: "Pihan valaisimet, osa sammuu", urgency: "Normaali", status: "Jonossa" },
  { id: "T-1031", title: "Lämmön vaihtelu 3. kerros", urgency: "Matala", status: "Suunniteltu" },
];

const urgencyOptions = ["Matala", "Normaali", "Korkea", "Kriittinen"] as const;

export default function HuoltoPage() {
  const [title, setTitle] = useState("");
  const [urgency, setUrgency] = useState<(typeof urgencyOptions)[number]>("Normaali");
  const [note, setNote] = useState("");

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Huolto"
          title="Tehtävät ja kiireellisyys"
          description="Luo tai päivitä tehtävä — kiireellisyys näkyy ohjausnäkymässä ja hätäpolulla erikseen."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Surface padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Uusi tehtävä
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="title" className="text-sm font-medium text-slate-800">
                  Otsikko
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Esim. Vesivuoto talovarastossa"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-slate-800">Kiireellisyys</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {urgencyOptions.map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                        urgency === u
                          ? "border-blue-500 bg-blue-50 text-blue-800"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="note" className="text-sm font-medium text-slate-800">
                  Huomiot
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={3}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Turvallisuus, käyttöönottorajoitukset..."
                />
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Tallenna tehtävä (demo)
              </button>
            </div>
          </Surface>

          <Surface padding="lg">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Avoimet pyynnöt
            </p>
            <ul className="mt-4 space-y-3">
              {requests.map((r) => (
                <li
                  key={r.id}
                  className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-medium text-slate-500">{r.id}</p>
                    <p className="font-medium text-slate-900">{r.title}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                        r.urgency === "Korkea" || r.urgency === "Kriittinen"
                          ? "bg-amber-100 text-amber-900"
                          : "bg-slate-200/80 text-slate-700"
                      }`}
                    >
                      {r.urgency}
                    </span>
                    <span className="text-xs text-slate-600">{r.status}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Surface>
        </div>
      </div>
    </div>
  );
}
