import Link from "next/link";

type NextStepProps = {
  label: string;
  text: string;
  href: string;
  /** @default true */
  showArrow?: boolean;
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NextStep({ label, text, href, showArrow = true }: NextStepProps) {
  return (
    <div className="mt-12 border-t border-slate-200/40 pt-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <div className="mt-3">
        <Link
          href={href}
          className="group inline-flex max-w-full items-center gap-2.5 rounded-xl bg-white/90 px-4 py-3 text-sm font-semibold text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f7fb]"
        >
          <span className="min-w-0 leading-snug">{text}</span>
          {showArrow ? (
            <span
              className="shrink-0 text-slate-400 transition duration-200 group-hover:translate-x-0.5 group-hover:text-slate-600"
              aria-hidden
            >
              <ArrowIcon />
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
}
