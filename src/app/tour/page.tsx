"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const buildings = [
  { id: "b1", name: "River & Steel", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900", floors: ["12", "18", "24"] },
  { id: "b2", name: "Brick Line", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900", floors: ["3", "5", "7"] },
];
const units: Record<string, { id: string; name: string; img: string; note: string }[]> = {
  "12": [{ id: "u1", name: "Corner studio", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", note: "North light, steel column" }],
  "18": [{ id: "u2", name: "Double-height loft", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", note: "Mezzanine-ready" }],
  "24": [{ id: "u3", name: "Penthouse shell", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", note: "Roof access" }],
  "3": [{ id: "u4", name: "Brick studio", img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800", note: "Exposed brick" }],
  "5": [{ id: "u5", name: "Gallery loft", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", note: "12ft ceilings" }],
  "7": [{ id: "u6", name: "Corner two-bed", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", note: "River glimpse" }],
};

type Step = "building" | "floor" | "unit";
export default function TourPage() {
  const [step, setStep] = useState<Step>("building");
  const [buildingId, setBuildingId] = useState(buildings[0].id);
  const [floor, setFloor] = useState<string | null>(null);
  const building = buildings.find((b) => b.id === buildingId)!;
  const floorUnits = useMemo(() => (floor ? units[floor] || [] : []), [floor]);
  const selectedUnit = floorUnits[0];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="font-serif text-4xl md:text-5xl">Property tour</h1>
      <p className="mt-2 text-[var(--muted)]">Building → floor → unit with persistent state.</p>
      <div className="mt-8 flex gap-2 text-sm">
        {(["building", "floor", "unit"] as Step[]).map((s) => (
          <button key={s} type="button" onClick={() => setStep(s)} className={`flex-1 border px-3 py-3 capitalize ${step === s ? "border-[var(--accent)] bg-[var(--card)]" : "border-[var(--border)]"}`}>{s}</button>
        ))}
      </div>
      {step === "building" && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {buildings.map((b) => (
            <button key={b.id} type="button" onClick={() => { setBuildingId(b.id); setFloor(null); setStep("floor"); }} className={`overflow-hidden rounded-sm border text-left ${buildingId === b.id ? "border-[var(--accent)]" : "border-[var(--border)]"}`}>
              <div className="relative h-40"><Image src={b.img} alt={b.name} fill className="object-cover" sizes="400px" /></div>
              <div className="p-4"><p className="font-semibold">{b.name}</p><p className="text-xs text-[var(--muted)]">{b.floors.length} floors</p></div>
            </button>
          ))}
        </div>
      )}
      {step === "floor" && (
        <div className="mt-8">
          <p className="text-sm text-[var(--muted)]">{building.name}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {building.floors.map((f) => (
              <button key={f} type="button" onClick={() => { setFloor(f); setStep("unit"); }} className={`border px-4 py-2 ${floor === f ? "border-[var(--accent)]" : "border-[var(--border)]"}`}>Floor {f}</button>
            ))}
          </div>
        </div>
      )}
      {step === "unit" && selectedUnit && (
        <div className="mt-8 grid gap-8 md:grid-cols-2 animate-rise">
          <div className="relative h-72 overflow-hidden rounded-sm border border-[var(--border)]">
            <Image src={selectedUnit.img} alt={selectedUnit.name} fill className="object-cover kenburns" sizes="500px" />
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">{building.name} · Floor {floor}</p>
            <h2 className="mt-2 font-serif text-3xl">{selectedUnit.name}</h2>
            <p className="mt-4 text-[var(--muted)]">{selectedUnit.note}</p>
            <Link href="/book" className="mt-8 inline-block rounded-sm bg-[var(--accent)] px-6 py-3 font-semibold text-black">Book this unit</Link>
          </div>
        </div>
      )}
    </main>
  );
}