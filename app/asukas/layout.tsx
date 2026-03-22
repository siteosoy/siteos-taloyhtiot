import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asukas AI",
};

export default function AsukasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
