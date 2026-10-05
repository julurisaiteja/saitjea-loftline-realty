import { ShopBrowse } from "@/components/ShopBrowse";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <div className="loft-rule mb-8" />
      <h1 className="font-serif text-4xl md:text-5xl">Material library</h1>
      <p className="mt-3 max-w-2xl text-[var(--muted)]">
        Editorial finishes, fixtures, and staging pieces — filter by lane, compare ratings, open any PDP for specs.
      </p>
      <ShopBrowse />
    </main>
  );
}
