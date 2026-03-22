"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Quick entry to Asukas AI — sized and offset so it stays clear of bottom CTAs on small screens. */
export function SiteosAiFab() {
  const pathname = usePathname();
  if (pathname === "/asukas" || pathname.startsWith("/asukas/")) {
    return null;
  }

  return (
    <Link
      href="/asukas"
      className="fixed bottom-24 right-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/90 bg-white text-[10px] font-bold uppercase tracking-[0.08em] text-blue-800 shadow-[0_4px_14px_-4px_rgba(37,99,235,0.35)] ring-1 ring-slate-200/70 transition hover:bg-blue-50/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:bottom-8 sm:right-5 sm:h-11 sm:w-11 md:right-6 md:h-12 md:w-12 md:text-[11px]"
      aria-label="Asukas AI — avaa"
    >
      AI
    </Link>
  );
}
