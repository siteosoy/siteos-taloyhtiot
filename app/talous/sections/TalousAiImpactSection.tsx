import { Surface } from "@/components/ui/Surface";
import { talousAiDemo } from "../talousAiDemo";

export function TalousAiImpactSection() {
  const { impact } = talousAiDemo;

  return (
    <section className="section-y-tight" aria-labelledby="talous-ai-vaikutus-heading">
      <h2 id="talous-ai-vaikutus-heading" className="section-label-tight">
        {impact.title}
      </h2>
      <Surface variant="default" padding="lg" className="ring-1 ring-slate-200/75">
        <ul className="space-y-3">
          {impact.bullets.map((line) => (
            <li key={line} className="flex gap-3 text-sm font-medium leading-snug text-slate-800">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Surface>
    </section>
  );
}
