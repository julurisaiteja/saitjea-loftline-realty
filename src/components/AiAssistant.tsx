"use client";
import { useState } from "react";
const faqs = [{"q":"How do building→floor→unit tours work?","a":"Each tour layer unlocks sightlines, materials, and offer context before you book."},{"q":"Is LOFT75 valid on listing media?","a":"Apply LOFT75 at checkout on tours and media bundles marked loft-ready."},{"q":"Do you offer architect consults?","a":"Every premium tour includes a styling consult block you can add at checkout."},{"q":"Can I share tours with co-buyers?","a":"Yes — demo links are shareable for 72 hours."}] as { q: string; a: string }[];
export function AiAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="rounded-sm border border-[var(--border)] bg-[var(--card)] overflow-hidden mb-3 max-h-[60vh] max-w-sm overflow-y-auto p-4 animate-rise">
          <p className="font-semibold">AI Assistant</p>
          <ul className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <li key={f.q}><p className="font-medium">{f.q}</p><p className="mt-1 text-[var(--muted)]">{f.a}</p></li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg">Ask AI</button>
    </div>
  );
}
