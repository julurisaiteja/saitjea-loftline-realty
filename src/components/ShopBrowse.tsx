"use client";
import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopBrowse() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || p.category === cat;
      return matchQ && matchC;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort]);
  return (
    <div className="mt-10 space-y-6">
      <div className="flex flex-col gap-3 border border-[var(--border)] bg-[var(--card)] p-4 md:flex-row md:items-center md:p-5">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search materials & fixtures"
          className="flex-1 border-b border-[var(--border)] bg-transparent px-2 py-3 text-sm focus:outline-none focus:border-[var(--accent)]"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm"
        >
          <option value="All">All lanes</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm"
        >
          <option value="featured">Curated</option>
          <option value="price-asc">Value ↑</option>
          <option value="price-desc">Value ↓</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">{filtered.length} pieces in view</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
