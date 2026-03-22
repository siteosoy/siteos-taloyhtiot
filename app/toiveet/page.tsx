"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";
import { TaloudellinenVaikutus } from "@/components/toiveet/TaloudellinenVaikutus";
import { financialByRequestId } from "@/components/toiveet/financialData";
import { RoleEmphasis } from "@/components/role/RoleEmphasis";
import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { NextStep } from "@/components/ui/NextStep";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

type Toive = {
  id: keyof typeof financialByRequestId;
  title: string;
  kuvaus: string;
  kiinnostuneita: number;
  votes: number;
  status: "Ehdotus" | "Tutkitaan" | "Toteutuu";
};

const initial: Toive[] = [
  {
    id: "pihavalaistus",
    title: "Pihavalaistuksen uusiminen",
    kuvaus: "Led-valot, valaisimet ja turvallisuus pimeään vuodenaikaan.",
    kiinnostuneita: 18,
    votes: 71,
    status: "Tutkitaan",
  },
  {
    id: "latauspisteet",
    title: "Sähköauton latauspisteet",
    kuvaus: "Muutama piste pysäköintiin; sähköverkon tarkistus mukana.",
    kiinnostuneita: 14,
    votes: 64,
    status: "Tutkitaan",
  },
  {
    id: "leikkipaikka",
    title: "Leikkipaikan kunnostus",
    kuvaus: "Pinnat, hiekkalaatikko ja leikkivälineiden turvallisuuspäivitys.",
    kiinnostuneita: 12,
    votes: 52,
    status: "Ehdotus",
  },
];

function statusStyle(status: Toive["status"]) {
  switch (status) {
    case "Toteutuu":
      return "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200/80";
    case "Tutkitaan":
      return "bg-blue-50 text-blue-900 ring-1 ring-blue-200/80";
    default:
      return "bg-slate-100 text-slate-800 ring-1 ring-slate-200/90";
  }
}

export default function ToiveetPage() {
  const [toiveet, setToiveet] = useState(initial);
  const [selectedId, setSelectedId] = useState<Toive["id"]>(initial[0].id);
  const [voteRecorded, setVoteRecorded] = useState(false);
  const [handoffRecorded, setHandoffRecorded] = useState(false);

  const maxVotes = useMemo(() => Math.max(...toiveet.map((t) => t.votes)), [toiveet]);

  const selected = useMemo(
    () => toiveet.find((t) => t.id === selectedId) ?? toiveet[0],
    [toiveet, selectedId],
  );
  const analysis = financialByRequestId[selected.id];

  function vote(id: Toive["id"]) {
    setToiveet((prev) => prev.map((t) => (t.id === id ? { ...t, votes: t.votes + 1 } : t)));
    setVoteRecorded(true);
  }

  function sendToBoard() {
    setHandoffRecorded(true);
  }

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell">
        <PageHeader
          badge={<RoleViewBadge />}
          eyebrow="Toiveet"
          title="Toiveiden arviointi"
          description="Valitse toive vasemmalta — oikealla näet kustannukset, vaikutukset ja vertailun. Demo käyttää esimerkkilukuja."
        />

        <p className="-mt-6 mb-6 text-sm text-slate-600">
          <Link href="/historia" className="link-inline font-semibold">
            Samankaltaiset toteutukset aiemmin
          </Link>
          <span className="text-slate-500"> — vertaa aiempiin hankkeisiin ja kustannuksiin.</span>
        </p>

        {voteRecorded || handoffRecorded ? (
          <div className="mb-5 flex flex-col gap-3">
            {voteRecorded ? (
              <DemoSuccessPanel
                title="Ääni tallennettu demoon"
                description="Luku päivittyy vain tässä selaimessa."
              />
            ) : null}
            {handoffRecorded ? (
              <DemoSuccessPanel
                title="Toive siirretty hallituksen käsittelyyn"
                description="Ilmoitus näkyy vain tässä selaimessa."
              />
            ) : null}
          </div>
        ) : null}

        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
          <RoleEmphasis when="asukas" className="min-w-0">
          <div className="flex flex-col gap-3">
            <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Toiveet</p>
            <ul className="flex flex-col gap-2.5" role="listbox" aria-label="Asukkaiden toiveet">
              {toiveet.map((t) => {
                const isActive = t.id === selectedId;
                const isSuosittu = t.votes === maxVotes;
                return (
                  <li key={t.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => setSelectedId(t.id)}
                      className={`group w-full rounded-2xl border px-4 py-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500/80 ${
                        isActive
                          ? "border-blue-400/85 bg-gradient-to-br from-blue-50 via-white to-slate-50/40 shadow-lg shadow-blue-900/[0.08] ring-2 ring-blue-500/40"
                          : "border-slate-200/90 bg-white shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-200/75 hover:-translate-y-0.5 hover:border-slate-300/95 hover:bg-slate-50/90 hover:shadow-md hover:shadow-slate-900/[0.06]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 flex-wrap items-center gap-2">
                          <p className="font-semibold leading-snug text-slate-900">{t.title}</p>
                          {isSuosittu ? (
                            <span className="inline-flex shrink-0 rounded-full border border-amber-200/90 bg-gradient-to-b from-amber-50 to-amber-100/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-900/90 ring-1 ring-amber-200/70">
                              Suosittu
                            </span>
                          ) : null}
                        </div>
                        <span
                          className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${statusStyle(t.status)}`}
                        >
                          {t.status}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.kuvaus}</p>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/70 pt-3">
                        <span className="text-xs font-medium text-slate-500">
                          {t.kiinnostuneita} asukasta kiinnostunut
                        </span>
                        <span className="text-xs tabular-nums text-slate-600">
                          <span className="font-semibold text-slate-800">{t.votes}</span> ääntä
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => vote(selected.id)}
                className="btn-accent w-full px-5 py-2.5 text-sm font-semibold sm:w-auto"
              >
                Äänestä valittua
              </button>
              <button
                type="button"
                onClick={sendToBoard}
                className="btn-secondary w-full px-5 py-2.5 text-sm font-semibold sm:w-auto"
              >
                Vie hallitukselle
              </button>
            </div>
          </div>
          </RoleEmphasis>

          <RoleEmphasis when={["hallitus", "isannointi"]} className="min-w-0 lg:sticky lg:top-6 lg:self-start">
            <Surface
              padding="lg"
              variant="elevated"
              className="relative overflow-hidden shadow-card-blue-lg ring-1 ring-slate-200/75"
            >
              <div className="pointer-events-none absolute -right-24 top-0 h-48 w-48 rounded-full bg-blue-400/[0.06] blur-3xl" aria-hidden />
              <div className="relative flex flex-wrap items-start justify-between gap-3 border-b border-slate-200/75 pb-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Analyysi</p>
                  <h2 className="mt-1.5 text-lg font-semibold leading-snug tracking-tight text-slate-900">
                    {selected.title}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 ring-1 ring-slate-200/70">
                  Päätöstuki
                </span>
              </div>
              <div className="pt-5">
                <TaloudellinenVaikutus data={analysis} />
              </div>
            </Surface>
          </RoleEmphasis>
        </div>

        <Surface className="mt-10" padding="lg" variant="elevated">
          <p className="text-sm leading-relaxed text-slate-600">
            Demo päivittää ääniä vain tässä selaimessa. Tuotannossa äänestys voi olla rajattu osakkaille ja
            kirjautuneille käyttäjille.
          </p>
        </Surface>

        <NextStep
          label="Seuraava"
          text="Siirrä hallituksen käsittelyyn"
          href="/hallitus"
        />
      </div>
    </div>
  );
}
