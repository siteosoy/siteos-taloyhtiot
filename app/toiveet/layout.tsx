import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toiveet",
};

export default function ToiveetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
