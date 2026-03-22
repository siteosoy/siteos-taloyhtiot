import Link from "next/link";
import { talousAiDemo } from "../talousAiDemo";

export function TalousAiTrustAndCta() {
  const { trust, cta } = talousAiDemo;

  return (
    <footer className="section-y-tight space-y-8 pb-2">
      <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
        {trust.text}{" "}
        <Link href={trust.historyHref} className="link-inline font-semibold text-slate-700">
          {trust.historyLinkLabel}
        </Link>
      </p>
      <Link href={cta.href} className="btn-primary-lg w-full text-center sm:inline-flex sm:w-auto sm:min-w-[280px]">
        {cta.label}
      </Link>
    </footer>
  );
}
