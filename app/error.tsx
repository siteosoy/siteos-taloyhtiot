"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          SITEOS
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Sivua ei voitu näyttää
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          Latauksessa tapahtui virhe. Kokeile uudelleen tai palaa etusivulle.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Yritä uudelleen
          </button>

          <Link
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Palaa etusivulle
          </Link>
        </div>
      </div>
    </main>
  );
}