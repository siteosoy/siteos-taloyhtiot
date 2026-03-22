import type { UserRole } from "./types";

/** Nav item labels visible per role (matches `Navbar` link labels). */
export const roleNavigation: Record<UserRole, readonly string[]> = {
  asukas: ["Etusivu", "Asukas AI", "Huolto"],
  hallitus: ["Etusivu", "Työpöytä", "Talous", "Hallitus", "Toiveet"],
  isannointi: ["Etusivu", "Työpöytä", "Huolto", "Hallitus"],
  huolto: ["Etusivu", "Huolto"],
};

export function isNavLabelVisibleForRole(
  label: string,
  role: UserRole,
): boolean {
  return roleNavigation[role].includes(label);
}
