import type { UserRole } from "./types";

/** Nav item labels visible per role (matches `Navbar` link labels). */
export const roleNavigation: Record<UserRole, readonly string[]> = {
  asukas: ["Etusivu", "Asukas", "Huolto"],
  hallitus: ["Etusivu", "Työpöytä", "Talous", "Hallitus", "Dokumentit", "Toiveet"],
  isannointi: ["Etusivu", "Työpöytä", "Huolto", "Hallitus", "Dokumentit"],
  huolto: ["Etusivu", "Huolto", "Dokumentit"],
};

export function isNavLabelVisibleForRole(
  label: string,
  role: UserRole,
): boolean {
  return roleNavigation[role].includes(label);
}
