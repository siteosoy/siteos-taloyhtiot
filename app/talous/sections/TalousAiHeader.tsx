import { RoleViewBadge } from "@/components/role/RoleViewBadge";
import { talousAiDemo } from "../talousAiDemo";

export function TalousAiHeader() {
  const { title, subtitle } = talousAiDemo.header;

  return (
    <header className="mb-10 space-y-3 sm:mb-12">
      <RoleViewBadge />
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-700">
        Talous
      </p>
      <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-[2.2rem] sm:leading-[1.15]">
        {title}
      </h1>
      <p className="max-w-xl text-[15px] leading-[1.65] text-slate-600">{subtitle}</p>
    </header>
  );
}
