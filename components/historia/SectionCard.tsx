import type { ReactNode } from "react";
import { Surface } from "@/components/ui/Surface";

type SectionCardProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard({
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <Surface variant="default" padding="lg" className={className}>
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
        {description ? (
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
        ) : null}
      </div>
      <div className="pt-5">{children}</div>
    </Surface>
  );
}
