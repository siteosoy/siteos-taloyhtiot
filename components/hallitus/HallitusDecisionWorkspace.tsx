"use client";

import Link from "next/link";
import { useState } from "react";
import { KilpailutusProcurementPhase } from "@/components/hallitus/KilpailutusProcurementPhase";
import { HallitusCompetitionPreview } from "@/components/hallitus/HallitusCompetitionPreview";
import { HallitusOptions } from "@/components/hallitus/HallitusOptions";
import { HallitusProjectFlow } from "@/components/hallitus/HallitusProjectFlow";
import { HallitusRecommendation } from "@/components/hallitus/HallitusRecommendation";
import { HallitusKokousJaPoytakirjaSection } from "@/components/hallitus/HallitusKokousJaPoytakirjaSection";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";
import { Surface } from "@/components/ui/Surface";

const recommendation = {
  summary:
    "Keskitetty latausinfra ja teho-ohjaus: paras kokonaistaloudellinen ja turvallinen ratkaisu taloyhtiölle ja asukkaille.",
  reasons: [
    "Kuormitus pysyy hallittuna: dynaaminen jako vähentää pääkeskuksen riskiä.",
    "Skaalautuu: lisäpaikat ilman uutta kantavan rungon muutosta.",
    "Kilpailutettavissa yhtenä urakkana — selkeä vastuu ja yksi käyttöönotto.",
  ],
};

const options = [
  {
    id: "a",
    label: "Vaihtoehto A — Haja-asennukset",
    description: "Paikkakohtaiset laturit; nopea käyttöönotto, korkeampi käyttökustannus ja kuormituksen hallinta vaativampi.",
  },
  {
    id: "b",
    label: "Vaihtoehto B — Keskitetty lataus ja teho-ohjaus",
    description: "Yhteinen infra ja älykäs jako; paras elinkaarikustannus ja ennakoitava kuorma.",
    recommended: true,
  },
  {
    id: "c",
    label: "Vaihtoehto C — Hybridimalli",
    description: "Keskitetty runko + osa haja-asennuksista; kompromissi kustannuksen ja aikataulun välillä.",
  },
];

const competitionPreview = [
  { name: "NordicCharge Oy", priceHint: "n. 42–48 t€" },
  { name: "Virta Infra Ab", priceHint: "n. 45–52 t€" },
  { name: "SähköPartner Group", priceHint: "n. 48–55 t€" },
];

export function HallitusDecisionWorkspace() {
  const [procurementStarted, setProcurementStarted] = useState(false);

  const phase = procurementStarted ? "procurement" : "board";

  return (
    <div className="space-y-8 lg:space-y-10">
      <Surface
        variant="elevated"
        padding="lg"
        className="relative overflow-hidden shadow-card-blue-lg ring-slate-200/80"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/[0.06] blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Aktiivinen asia</p>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Sähköauton latausratkaisu
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                Valmisteltu
              </span>
              <span className="inline-flex rounded-full border border-amber-200/90 bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-950">
                Odottaa päätöstä
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-10">
              <section aria-labelledby="hallitus-seuraava">
                <p id="hallitus-seuraava" className="sr-only">
                  Seuraava toimenpide ja perustelut
                </p>
                <div className="rounded-xl border border-blue-100/90 bg-blue-50/40 p-4 ring-1 ring-blue-100/70 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-800">Seuraava toimenpide</p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">Aloita kilpailutus valitulla mallilla</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Kun hallitus valitsee vaihtoehdon, SITEOS valmistelee tarjouspyynnön ja kohdistaa urakoitsijat.
                  </p>
                </div>
              </section>

              <HallitusRecommendation summary={recommendation.summary} reasons={recommendation.reasons} />

              <p className="text-sm text-slate-600">
                Vastaavia hankkeita toteutettu aiemmin.{" "}
                <Link href="/historia" className="link-inline font-semibold text-slate-800">
                  Avaa historia
                </Link>
              </p>

              <HallitusOptions options={options} />

              <div className="space-y-3">
                <button
                  type="button"
                  disabled={procurementStarted}
                  onClick={() => setProcurementStarted(true)}
                  className="btn-primary-lg w-full sm:w-auto disabled:pointer-events-none disabled:opacity-60"
                >
                  {procurementStarted ? "Kilpailutus käynnissä" : "Aloita kilpailutus"}
                </button>
                <p className="max-w-lg text-sm leading-relaxed text-slate-500">
                  SITEOS valmistelee tarjouspyynnöt automaattisesti
                </p>
                {procurementStarted ? (
                  <div className="max-w-lg pt-1">
                    <DemoSuccessPanel
                      title="Kilpailutus käynnistetty (demo)"
                      description="Tämä näkymä päivittyy vain tässä selaimessa."
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <aside className="flex flex-col gap-8 lg:sticky lg:top-24">
              <Surface padding="md" variant="default" className="bg-white/90">
                <HallitusProjectFlow phase={phase} />
              </Surface>
              <HallitusCompetitionPreview contractors={competitionPreview} />
            </aside>
          </div>
        </div>
      </Surface>

      <HallitusKokousJaPoytakirjaSection />

      {procurementStarted ? (
        <section className="section-y-tight" aria-labelledby="kilpailutus-otsikko">
          <h2 id="kilpailutus-otsikko" className="section-label">
            Kilpailutus
          </h2>
          <KilpailutusProcurementPhase />
        </section>
      ) : null}
   </div>
  );
}
