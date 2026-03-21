"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

const suggestions = [
  "Hissi pysähtyy välillä kerrosten väliin.",
  "Porraskäytävän valo ei syty automaattisesti.",
  "Pesuhuoneen lattiakaivo haisee.",
];

export default function AsukasPage() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Asukas"
          title="Kerro tilanne omilla sanoillasi"
          description="Kirjoita luonnollisesti — SITEOS jäsentää viestin ja välittää sen oikealle taholle."
        />

        <Surface padding="lg">
          <label htmlFor="msg" className="text-sm font-medium text-slate-800">
            Viesti taloyhtiölle
          </label>
          <textarea
            id="msg"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setSubmitted(false);
            }}
            rows={5}
            placeholder="Esim. hissi ei kulje tasaisesti ja ovesta kuuluu outo ääni..."
            className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">Ei vaadi lomakkeen täyttöä — vain kuvaus.</p>
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 hover:bg-blue-500"
            >
              Lähetä SITEOS:lle
            </button>
          </div>
        </Surface>

        <div className="mt-8">
          <p className="mb-3 text-sm font-medium text-slate-700">Ehdotuksia aloitukseksi</p>
          <div className="flex flex-col gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setMessage(s);
                  setSubmitted(false);
                }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/50"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {(submitted || message.length > 40) && (
          <Surface variant="accent" padding="lg" className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              Vastauskortti (demo)
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Tekoäly tunnisti viestisi kategoriaksi{" "}
              <span className="font-semibold text-slate-900">tekniikka / hissi</span>.
              Kiireellisyys:{" "}
              <span className="font-semibold text-amber-800">arvioitu keskitaso</span>.
              Huolto saa tehtävän strukturoituna ja hallitus näkee tilanteen
              yhteenvetona.
            </p>
            {submitted ? (
              <p className="mt-3 text-xs font-medium text-green-700">
                Viesti lähetetty (demoesitys — ei oikeaa lähetystä).
              </p>
            ) : null}
          </Surface>
        )}
      </div>
    </div>
  );
}
