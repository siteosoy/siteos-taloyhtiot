import { Surface } from "@/components/ui/Surface";
import { talousAiDemo } from "../talousAiDemo";

export function TalousAiObservationAndRecommendation() {
  const { observation, recommendation } = talousAiDemo;

  return (
    <section className="space-y-4" aria-label="Havainto ja suositus">
      <Surface variant="elevated" padding="lg" className="ring-1 ring-slate-200/80">
        <div className="space-y-8">
          <div>
            <h2 id="talous-ai-havainto" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              {observation.title}
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-800">{observation.text}</p>
          </div>
          <div className="border-t border-slate-200/90 pt-8">
            <h2 id="talous-ai-suositus" className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              {recommendation.title}
            </h2>
            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-800">{recommendation.text}</p>
          </div>
        </div>
      </Surface>
    </section>
  );
}
