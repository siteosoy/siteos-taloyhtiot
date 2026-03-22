import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  /** E.g. role context badge — render near the title */
  badge?: ReactNode;
};

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  badge,
}: PageHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0 max-w-2xl space-y-3 sm:space-y-3.5">
        {badge ? <div className="flex flex-wrap items-center gap-2">{badge}</div> : null}
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-[2.2rem] sm:leading-[1.15]">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-[15px] leading-[1.65] text-slate-600">
            {description}
          </p>
        ) : null}
      </div>
      {actions ? (
        <div className="w-full shrink-0 sm:w-auto sm:max-w-md sm:text-right">{actions}</div>
      ) : null}
    </div>
  );
}
