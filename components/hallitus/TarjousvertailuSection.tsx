"use client";

import { useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";

const fmtEuro = (n: number) =>
  `${new Intl.NumberFormat("fi-FI", { maximumFractionDigits: 0 }).format(n)} €`;

const offers = [
  { name: "Sähköurakointi Oy", price: 9_800, weeks: 3, warrantyMonths: 24 },
  { name: "ValoTekniikka Ab", price: 11_200, weeks: 2, warrantyMonths: 36 },
  { name: "KiinteistöSähkö Group", price: 10_400, weeks: 4, warrantyMonths: 24 },
];

function SparkIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-indigo-700" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l1.2 4.2L17.5 7.5l-4.3 1.3L12 13l-1.2-4.2L6.5 7.5l4.3-1.3L12 2z"
        className="fill-indigo-600/90"
      />
      <path
        d="M5 14l.8 2.8L8.5 17.5l-2.7.8L5 21l-.8-2.7L1.5 17.5l2.7-.8L5 14z"
        className="fill-violet-500/80"
      />
    </svg>
  );
}

export function TarjousvertailuSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="mt-10 border-t border-slate-200/80 pt-10" aria-labelledby="tarjousvertailu-otsikko">
      <h2 id="tarjousvertailu-otsikko" className="section-label">
        Tarjousvertailu
      </h2>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-600">
        Tarjoukset samassa näkymässä — vertailu on nopeaa ja päätösperusteet jäävät dokumentoiduiksi.
      </p>

      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {offers.map((o) => (
          <div
            key={o.name}
            className="relative flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-200/70"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Urakoitsija</p>
            <p className="mt-2 text-base font-semibold leading-snug text-slate-900">{o.name}</p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Hinta</p>
            <p className="mt-1.5 text-2xl font-semibold tabular-nums tracking-tight text-slate-950">{fmtEuro(o.price)}</p>
            <dl className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <dt className="text-slate-500">Toteutusaika</dt>
                <dd className="font-medium tabular-nums text-slate-900">{o.weeks} viikkoa</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-500">Takuu</dt>
                <dd className="font-medium tabular-nums text-slate-900">{o.warrantyMonths} kk</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-indigo-200/70 bg-gradient-to-br from-indigo-50/95 via-slate-50/40 to-white px-5 py-6 shadow-md shadow-indigo-900/[0.06] ring-1 ring-indigo-100/80 sm:px-6 sm:py-7">
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full bg-violet-400/10 blur-2xl" aria-hidden />
        <div className="relative flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/90 shadow-sm ring-1 ring-indigo-100/80">
            <SparkIcon />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-900">AI-yhteenveto</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">
              <span className="font-medium text-slate-900">Sähköurakointi Oy</span> on edullisin (9 800 €).{" "}
              <span className="font-medium text-slate-900">ValoTekniikka Ab</span> on nopein (2 viikkoa) ja tarjoaa
              pisimman takuun (36 kk). <span className="font-medium text-slate-900">KiinteistöSähkö Group</span> on
              hintatasolta välissä ja hitain aikataulultaan (4 viikkoa).
            </p>
            <p className="mt-4 rounded-xl border border-indigo-100/90 bg-white/70 px-4 py-3 text-sm font-medium leading-relaxed text-slate-900 ring-1 ring-indigo-50/90">
              Paras kokonaisarvo tässä vertailussa:{" "}
              <span className="text-indigo-950">Sähköurakointi Oy</span> — merkittävä hintaetu suhteessa muihin, ja
              toteutusaika sekä 24 kk takuu ovat hallituksen päätökselle riittävät.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-4 sm:items-start">
        <button
          type="button"
          disabled={sent}
          onClick={() => setSent(true)}
          className="btn-primary w-full px-8 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {sent ? "Suositus kirjattu (demo)" : "Suosittele hallitukselle"}
        </button>
        {sent ? (
          <div className="max-w-lg">
            <DemoSuccessPanel
              title="Suositus välitetty demossa"
              description="Hallitus näkee tämän esityslistalla tuotannossa; tässä näkymässä vain tämä selain."
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
