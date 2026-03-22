import type { ReactNode } from "react";

type SurfaceProps = {
  children: ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "elevated" | "accent";
};

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Surface({
  children,
  className = "",
  padding = "md",
  variant = "default",
}: SurfaceProps) {
  const variantClass =
    variant === "accent"
      ? "border-blue-200/75 bg-gradient-to-br from-white via-white to-blue-50/40 shadow-card-accent ring-1 ring-blue-100/70"
      : variant === "elevated"
        ? "border-slate-200/95 bg-white shadow-card ring-1 ring-slate-200/80"
        : "border-slate-200/95 bg-white shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-200/70";

  return (
    <div
      className={`rounded-2xl border ${variantClass} ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
