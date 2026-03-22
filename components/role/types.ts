export type UserRole = "asukas" | "hallitus" | "isannointi" | "huolto";

export const USER_ROLES: readonly UserRole[] = [
  "asukas",
  "hallitus",
  "isannointi",
  "huolto",
] as const;

export const ROLE_LABELS: Record<UserRole, string> = {
  asukas: "Asukas",
  hallitus: "Hallitus",
  isannointi: "Isännöinti",
  huolto: "Huolto",
};
