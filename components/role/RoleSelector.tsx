"use client";

import { ROLE_LABELS, USER_ROLES, type UserRole } from "./types";
import { useRole } from "./RoleProvider";

export function RoleSelector() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="siteos-role"
        className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500"
      >
        Rooli
      </label>
      <select
        id="siteos-role"
        value={role}
        onChange={(e) => setRole(e.target.value as UserRole)}
        className="min-w-[9.5rem] cursor-pointer rounded-lg border border-slate-200/95 bg-white py-1.5 pl-2.5 pr-8 text-sm font-medium text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        {USER_ROLES.map((r) => (
          <option key={r} value={r}>
            {ROLE_LABELS[r]}
          </option>
        ))}
      </select>
    </div>
  );
}
