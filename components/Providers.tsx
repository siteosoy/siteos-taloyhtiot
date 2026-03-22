"use client";

import type { ReactNode } from "react";
import { RoleProvider } from "./role/RoleProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <RoleProvider>{children}</RoleProvider>;
}
