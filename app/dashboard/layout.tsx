import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Työpöytä",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
