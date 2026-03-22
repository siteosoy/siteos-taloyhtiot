"use client";

import { useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";
import { Surface } from "@/components/ui/Surface";

const summaryLines = [
  "68 % vastaanottaa tiedotteet digitaalisesti",
  "14 asuntoa käyttää vielä paperitiedotteita",
  "Arvioitu säästö hallinnollisessa työssä: merkittävä",
] as const;

export function DigitaalinenTiedottaminenSection() {
  const [surveySent, setSurveySent] = useState(false);

  return (
    <section className="section-y" aria-labelledby="dashboard-digitaalinen-heading">
      <h2 id="dashboard-digitaalinen-heading" className="section-label">
        Digitaalisen tiedottamisen siirtymä
      </h2>
      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-600">
        Vähennä manuaalityötä: kysy asukkailta lupa siirtyä digitaaliseen tiedotukseen ensisijaisena
        kanavana. SITEOS kohdistaa viestin ja kirjaa vastaukset.
      </p>

      <div className="space-y-6">
        <Surface variant="elevated" padding="lg" className="ring-slate-200/80">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Tilannekuva</p>
          <div className="mt-6 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-3 sm:gap-8">
            {summaryLines.map((line, i) => (
              <div
                key={line}
                className={i < summaryLines.length - 1 ? "sm:border-r sm:border-slate-100 sm:pr-8" : ""}
              >
                <p className="text-sm leading-relaxed text-slate-800">{line}</p>
              </div>
            ))}
          </div>
        </Surface>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] lg:items-start lg:gap-8">
          <Surface variant="default" padding="lg" className="border-slate-200/95 bg-white lg:min-h-0">
            <h3 className="text-base font-semibold tracking-tight text-slate-900">AI-suositus</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              SITEOS suosittelee lähettämään asukkaille siirtymäkyselyn digitaalisten tiedotteiden
              ensisijaisesta käytöstä.
            </p>

            <button
              type="button"
              disabled={surveySent}
              onClick={() => setSurveySent(true)}
              className="btn-primary mt-6 w-full disabled:pointer-events-none disabled:opacity-60 sm:w-auto sm:px-8"
            >
              {surveySent ? "Siirtymäkysely lähetetty (demo)" : "Lähetä siirtymäkysely"}
            </button>

            {surveySent ? (
              <div className="mt-4">
                <DemoSuccessPanel
                  title="Kysely merkitty lähetetyksi"
                  description="Demossa vastaukset kirjautuisivat asuntoihin ja päivittäisivät tiedotustavan valinnan."
                />
              </div>
            ) : null}
          </Surface>

          <aside
            className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 shadow-sm shadow-slate-900/[0.03] ring-1 ring-slate-200/70"
            aria-label="Viestin esikatselu"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Esikatselu</p>
            <blockquote className="mt-4 border-l-[3px] border-slate-300/90 pl-4 text-sm italic leading-relaxed text-slate-800">
              Voimmeko toimittaa taloyhtiön tiedotteet jatkossa ensisijaisesti digitaalisesti?
            </blockquote>
          </aside>
        </div>
      </div>
    </section>
  );
}
