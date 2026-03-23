"use client";

import { Surface } from "@/components/ui/Surface";
import { IsannointitodistusDocumentPreview } from "@/components/control/IsannointitodistusDocumentPreview";

type DokumentitSectionProps = {
  /** Stable id for `aria-labelledby` (e.g. control page vs. /dokumentit). */
  headingId?: string;
  className?: string;
};

export function DokumentitSection({
  headingId = "dokumentit-heading",
  className = "section-y",
}: DokumentitSectionProps) {
  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId} className="section-label">
        Dokumentit ja raportit
      </h2>
      <div className="space-y-6">
        <Surface padding="lg" variant="elevated" className="border border-slate-200/75 bg-white/90">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="min-w-0 max-w-xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700 ring-1 ring-slate-200/90">
                  Velvoitteet seurannassa
                </span>
                <span className="text-xs text-slate-500">Päivitetty 02/2027</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                Pelastussuunnitelma
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Automaattinen isännöintityö: muodostuu järjestelmän datasta; valmis tarkistettavaksi ennen
                hyväksyntää.
              </p>
            </div>
            <ul className="w-full shrink-0 space-y-2.5 text-sm text-slate-700 lg:max-w-sm">
              <li className="flex gap-2">
                <span className="text-slate-400" aria-hidden>
                  ·
                </span>
                Riskikartoitus ja poistumistiet tarkistettu
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400" aria-hidden>
                  ·
                </span>
                Vastuut ja yhteystiedot päivitetty
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400" aria-hidden>
                  ·
                </span>
                Uudet tarkastusvälit huomioitu
              </li>
            </ul>
          </div>
        </Surface>

        <IsannointitodistusDocumentPreview />
      </div>
    </section>
  );
}
