import type { ReactNode } from "react";
import { AIPerustelutSection } from "@/components/hallitus/AIPerustelutSection";
import { TaloyhtioToteutusvaatimuksetSection } from "@/components/hallitus/TaloyhtioToteutusvaatimuksetSection";
import { TarjousvertailuSection } from "@/components/hallitus/TarjousvertailuSection";
import { UrakanSeurantaSection } from "@/components/hallitus/UrakanSeurantaSection";

function CheckRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-slate-700">
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100/95 text-emerald-800 ring-1 ring-emerald-200/80"
        aria-hidden
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="opacity-95">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

const contractors: { name: string; status: "odottaa" | "vastaanotettu" }[] = [
  { name: "Sähköurakointi Oy", status: "vastaanotettu" },
  { name: "ValoTekniikka Ab", status: "odottaa" },
  { name: "KiinteistöSähkö Group", status: "odottaa" },
];

function statusLabel(s: (typeof contractors)[number]["status"]) {
  if (s === "vastaanotettu") {
    return {
      text: "Tarjous vastaanotettu (demo)",
      className: "bg-emerald-50 text-emerald-900 ring-emerald-200/80",
    };
  }
  return { text: "Odottaa vastausta", className: "bg-amber-50 text-amber-950 ring-amber-200/75" };
}

export function KilpailutusProcurementPhase() {
  return (
    <div className="flex flex-col gap-6" role="region" aria-live="polite" aria-label="Kilpailutuksen tila">
      <div className="relative overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/95 to-white p-6 shadow-md shadow-emerald-900/[0.06] ring-1 ring-emerald-100/90 sm:p-7">
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/[0.08] blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-800/90">Seuraava vaihe</p>
          <p className="mt-2 text-xl font-semibold tracking-tight text-emerald-950">Kilpailutus käynnistetty</p>
          <ul className="mt-5 flex flex-col gap-3" role="list">
            <CheckRow>Tarjouspyyntö muodostettu automaattisesti</CheckRow>
            <CheckRow>Lähetetty 3 urakoitsijalle</CheckRow>
            <CheckRow>Arvioitu vastausaika 3–5 päivää</CheckRow>
          </ul>
        </div>
      </div>

      <div>
        <p className="px-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Urakoitsijat</p>
        <ul className="mt-3 flex flex-col gap-3" role="list">
          {contractors.map((c) => {
            const st = statusLabel(c.status);
            return (
              <li
                key={c.name}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-200/70"
              >
                <span className="font-semibold text-slate-900">{c.name}</span>
                <span
                  className={`inline-flex shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide ring-1 ${st.className}`}
                >
                  {st.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="rounded-xl border border-slate-200/85 bg-slate-50/90 px-4 py-3 text-sm leading-relaxed text-slate-600 ring-1 ring-slate-200/65">
        SITEOS kokoaa tarjouspyynnön ja valitsee sopivat urakoitsijat automaattisesti.
      </p>

      <TaloyhtioToteutusvaatimuksetSection />

      <TarjousvertailuSection />

      <AIPerustelutSection />

      <UrakanSeurantaSection />

      <p className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
        Demo — ei tallennusta palvelimelle
      </p>
    </div>
  );
}
