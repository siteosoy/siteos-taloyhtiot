"use client";

import { useState } from "react";
import { Surface } from "@/components/ui/Surface";

const DEMO_COMPANY = "Esimerkki Asunto Oy";

const previewSections = [
  {
    title: "Taloyhtiön tiedot",
    items: [
      `${DEMO_COMPANY} · kiinteistötunnus 91-416-0001-2`,
      "Osoite: Puistokatu 12, 00100 Helsinki · 48 huoneistoa",
      "Rakennusvuosi 1986, talot A–B, yhteinen piharakenteisto",
    ],
  },
  {
    title: "Viimeisimmät korjaukset",
    items: [
      "Hissi B: ovitunnistimen ja turvakytkimen vaihto (12.3.2026) — huoltokirjaus valmis",
      "LVIS: lämmityksen venttiilisäätö ja tasapainotus (21.2.2026)",
      "Porraskäytävän paloilmoittimet: huoltokierros OK (5.2.2026)",
    ],
  },
  {
    title: "Käynnissä olevat asiat",
    items: [
      "Pihavalojen LED-uudistus — urakkasopimus allekirjoitettu, asennusviikko 14",
      "Julkisivun paikkauskartoitus — tarjouspyyntökierros käynnissä, määräaika 28.3.",
      "Hissi B: seurantajakso (ovien tunnistus) — huolto seuraa viikon ajan",
    ],
  },
  {
    title: "Päätökset",
    items: [
      "Yhtiökokous 12.2.2026: kunnossapitovara päivitetty KPTS:n mukaiseksi",
      "Hallitus 18.2.2026: autolatauspilotti hyväksytty ehdoin (3 paikkaa, mittaus mallilla A)",
    ],
  },
  {
    title: "Havainnot",
    items: [
      "Toistuva havainto: piharännin tukkeuma sateella — urakoitsija tilattu, aikataulu viikolle 12",
      "Asukaspalaute: hissi B odotusaika — seuranta päällä, huoltokierros kirjattu",
    ],
  },
] as const;

function AutoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 3v2.5M10 14.5V17M3 10h2.5M14.5 10H17M5.17 5.17l1.77 1.77M13.06 13.06l1.77 1.77M5.17 14.83l1.77-1.77M13.06 6.94l1.77-1.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IsannointitodistusDocumentPreview() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-5">
      <Surface padding="lg" variant="elevated" className="ring-1 ring-slate-200/80">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 max-w-xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-800 ring-1 ring-blue-200/90">
                Asiakirja
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/80">
                Valmis tarkistettavaksi
              </span>
              <span className="text-xs text-slate-500">Muodostuu järjestelmän ajantasaisesta datasta</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              Isännöitsijäntodistus
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Kooste taloyhtiön tilanteesta — tarkoitettu luottamushenkilöille ja osakkaille.
              Dokumentti muodostuu automaattisesti järjestelmän tapahtumista ja kirjauksista.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row sm:items-center lg:w-auto lg:flex-col lg:items-stretch">
            <button
              type="button"
              onClick={() => setShowPreview((v) => !v)}
              className="btn-primary inline-flex min-h-[44px] justify-center px-6"
            >
              {showPreview ? "Piilota esikatselu" : "Esikatsele dokumentti"}
            </button>
            <p className="text-center text-xs text-slate-500 lg:text-left">
              Dokumentti muodostuu automaattisesti — ei käsin täytettävää lomaketta
            </p>
          </div>
        </div>
      </Surface>

      {showPreview ? (
        <Surface
          padding="lg"
          variant="elevated"
          className="relative overflow-hidden border border-blue-200/70 shadow-md shadow-blue-900/[0.06]"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"
            aria-hidden
          />
          <div className="pointer-events-none absolute -right-20 top-24 h-48 w-48 rounded-full bg-blue-400/[0.07] blur-3xl" />

          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-slate-100 pb-4 text-[11px] text-slate-500 sm:text-xs">
              <span className="font-medium text-emerald-800">Päivitetty automaattisesti</span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                ·
              </span>
              <span className="tabular-nums">Viimeisin päivitys: 2 min sitten</span>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                ·
              </span>
              <span>Perustuu järjestelmän dataan</span>
            </div>

            <div className="space-y-3 border-b border-slate-100 pb-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3 py-1.5 text-xs font-semibold text-blue-950 shadow-sm shadow-blue-900/[0.04]">
                <AutoIcon className="h-4 w-4 text-blue-600" />
                Järjestelmän data
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
                <span className="font-medium text-slate-800">Ei erillistä lomaketta</span> — sisältö
                koostuu taloyhtiön kirjauksista, tehtävistä ja päätöksistä. Muokkaus ja vienti ovat
                seuraavat askeleet.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Esikatselu
              </p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                Isännöitsijäntodistus
              </h4>
              <p className="mt-1 text-sm text-slate-500">{DEMO_COMPANY}</p>
            </div>

            <div className="space-y-6">
              {previewSections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-xl border border-slate-100 bg-white/90 px-4 py-4 shadow-sm shadow-slate-900/[0.03] sm:px-5"
                >
                  <h5 className="text-sm font-semibold text-slate-900">{section.title}</h5>
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-600">
                    {section.items.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400/90" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Demo: painikkeet eivät tallenna — tarkoitus näyttää myyntitilanteessa luonteva polku.
              </p>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn-secondary px-5 py-2.5 text-sm">
                  Esikatsele
                </button>
                <button type="button" className="btn-secondary px-5 py-2.5 text-sm">
                  Muokkaa
                </button>
                <button type="button" className="btn-primary px-5 py-2.5 text-sm">
                  Lataa PDF
                </button>
              </div>
            </div>
          </div>
        </Surface>
      ) : null}
    </div>
  );
}
