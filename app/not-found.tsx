import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sivua ei löytynyt",
};

export default function NotFound() {
  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="page-shell flex flex-1 flex-col items-center justify-center py-20 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Sivua ei löytynyt</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Linkki voi olla vanha tai sivu on poistettu. Tarkista osoite tai palaa etusivulle.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Etusivulle
        </Link>
      </div>
    </div>
  );
}
