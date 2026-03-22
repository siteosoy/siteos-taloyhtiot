"use client";

import { ROLE_LABELS } from "./types";
import { useRole } from "./RoleProvider";

type RoleViewBadgeProps = {
  className?: string;
  /** `minimal` — quiet text for dense chrome (e.g. navbar). Default pill for page headers. */
  variant?: "pill" | "minimal";
};

export function RoleViewBadge({
  className,
  variant = "pill",
}: RoleViewBadgeProps) {
  const { role } = useRole();

  const base =
    variant === "minimal"
      ? "inline-flex items-baseline gap-1.5 text-[11px] font-medium tracking-[0.02em] text-slate-500"
      : "inline-flex items-center rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-1 text-[11px] font-medium tracking-tight text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.03]";

  return (
    <p
      className={[base, className].filter(Boolean).join(" ")}
      aria-live="polite"
    >
      <span
        className={
          variant === "minimal"
            ? "font-normal text-slate-400"
            : "text-slate-500"
        }
      >
        Näkymä:
      </span>
      <span
        className={
          variant === "minimal"
            ? "font-semibold text-slate-700"
            : "ml-1.5 font-semibold text-slate-800"
        }
      >
        {ROLE_LABELS[role]}
      </span>
    </p>
  );
}
