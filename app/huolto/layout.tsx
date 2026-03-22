import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huolto",
};

export default function HuoltoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
