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
      ? "border-blue-200/80 bg-gradient-to-br from-white to-blue-50/50 shadow-sm shadow-blue-500/5"
      : variant === "elevated"
        ? "border-slate-200/90 bg-white shadow-md shadow-slate-900/5"
        : "border-slate-200/80 bg-white/90 shadow-sm shadow-slate-900/[0.04]";

  return (
    <div
      className={`rounded-2xl border ${variantClass} ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
