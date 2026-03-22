"use client";

import { useState } from "react";
import { DemoSuccessPanel } from "@/components/demo/DemoSuccessPanel";

export function HallitusDemoActions() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="mt-10 border-t border-slate-100 pt-8">
      <p className="text-sm font-medium text-slate-900">Seuraava kokous (demo)</p>
      <p className="mt-1 text-sm text-slate-600">
        Merkitse muistiinpanot valmiiksi — sama rauhallinen palaute kuin muissa demoissa.
      </p>
      <button
        type="button"
        disabled={saved}
        onClick={() => setSaved(true)}
        className="btn-primary mt-4 disabled:pointer-events-none disabled:opacity-60"
      >
        {saved ? "Tallennettu (demo)" : "Tallenna kokousmuistiinpanot (demo)"}
      </button>
      {saved ? (
        <div className="mt-4 max-w-lg">
          <DemoSuccessPanel
            title="Ilmoitus tallennettu demoon"
            description="Muistiinpanot näkyvät vain tässä selaimessa."
          />
        </div>
      ) : null}
    </div>
  );
}
