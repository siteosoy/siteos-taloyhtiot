"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Quick entry to Asukas — sized and offset so it stays clear of bottom CTAs on small screens. */
export function SiteosAiFab() {
  const pathname = usePathname();
  if (pathname === "/asukas" || pathname.startsWith("/asukas/")) {
    return null;
  }

  return (
    <Link
      href="/asukas"
      className="fixed bottom-24 right-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200/90 bg-white text-blue-800 shadow-[0_4px_14px_-4px_rgba(37,99,235,0.35)] ring-1 ring-slate-200/70 transition hover:bg-blue-50/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:bottom-8 sm:right-5 sm:h-11 sm:w-11 md:right-6 md:h-12 md:w-12"
      aria-label="Asukas — avaa"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="text-blue-700">
        <path
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01M8.5 14h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
