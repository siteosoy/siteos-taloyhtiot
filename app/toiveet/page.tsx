"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Surface } from "@/components/ui/Surface";

type Idea = {
  id: string;
  title: string;
  votes: number;
  status: "Ehdotus" | "Tutkitaan" | "Toteutuu";
};

const initial: Idea[] = [
  { id: "1", title: "Yhteinen komposti pihan nurkkaan", votes: 42, status: "Tutkitaan" },
  { id: "2", title: "Porraskäytävän maalaus vuosittaiseen ohjelmaan", votes: 38, status: "Ehdotus" },
  { id: "3", title: "Lasten leikkipaikan uudistus", votes: 55, status: "Toteutuu" },
];

export default function ToiveetPage() {
  const [ideas, setIdeas] = useState(initial);

  function vote(id: string) {
    setIdeas((prev) =>
      prev.map((i) => (i.id === id ? { ...i, votes: i.votes + 1 } : i)),
    );
  }

  return (
    <div className="gradient-page flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Toiveet"
          title="Ideat, äänestys ja tila"
          description="Asukkaiden toiveet näkyvät läpinäkyvästi: äänet, priorisointi ja tilannekuva hallitukselle."
        />

        <ul className="space-y-4">
          {ideas
            .slice()
            .sort((a, b) => b.votes - a.votes)
            .map((idea) => (
              <Surface key={idea.id} padding="lg">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{idea.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Tila:{" "}
                      <span className="font-medium text-slate-700">{idea.status}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-600">
                      {idea.votes} ääntä
                    </span>
                    <button
                      type="button"
                      onClick={() => vote(idea.id)}
                      className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-100"
                    >
                      Äänestä
                    </button>
                  </div>
                </div>
              </Surface>
            ))}
        </ul>

        <Surface className="mt-8" padding="md">
          <p className="text-sm text-slate-600">
            Demossa äänestys päivittää lukuja vain selaimessasi. Tuotannossa
            äänestys voidaan rajata osakkaille ja kirjautuneille käyttäjille.
          </p>
        </Surface>
      </div>
    </div>
  );
}
