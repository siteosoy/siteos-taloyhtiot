"use client";

import type { ReactNode } from "react";
import { useRole } from "./RoleProvider";
import type { UserRole } from "./types";

type RoleEmphasisProps = {
  when: UserRole | readonly UserRole[];
  children: ReactNode;
  className?: string;
};

/** Subtle ring/background when the selected role matches — all content stays visible. */
export function RoleEmphasis({ when, children, className }: RoleEmphasisProps) {
  const { role } = useRole();
  const roles = Array.isArray(when) ? when : [when];
  const active = roles.includes(role);

  return (
    <div
      className={[
        className,
        active
          ? "relative rounded-2xl p-[3px] ring-1 ring-slate-300/50 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-[box-shadow,background-color] duration-300"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
