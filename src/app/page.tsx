"use client";
import Link from "next/link";
import Image from "next/image";
import { PromoStrip } from "@/components/PromoStrip";
import { Reviews } from "@/components/Reviews";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover kenburns opacity-80" autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-black/50" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 md:px-6 md:pb-24">
          <h1 className="font-serif text-5xl leading-none text-[var(--fg)] md:text-8xl">Loftline Realty</h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--fg)]/90 md:text-xl">See the volume before you sign.</p>
          <p className="mt-3 max-w-lg text-sm text-[var(--muted)]">Walk buildings, floors, and units with a continuous photo river — no generic listing grids.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/tour" className="motion-rise rounded-sm bg-[var(--accent)] px-8 py-4 text-center text-sm font-semibold text-black">Start property tour</Link>
            <Link href="/book" className="motion-rise px-8 py-4 text-center text-sm text-[var(--fg)] underline-offset-4 hover:underline">Book a viewing</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <div className="loft-rule mb-10" />
        <h2 className="font-serif text-3xl md:text-4xl">Material index</h2>
        <p className="mt-3 max-w-2xl text-[var(--muted)]">Three editorial lanes — structure, light, and staging — each tied to live inventory.</p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[{ t: "Structure", d: "Concrete, steel, timber — annotated floor plates." }, { t: "Light", d: "North exposure, sunset slots, twilight stills." }, { t: "Staging", d: "Architect-led neutral palettes for offer-ready units." }].map((x) => (
            <div key={x.t} className="animate-rise border border-[var(--border)] bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">{x.t}</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-[var(--border)] py-12">
        <div className="marquee-track flex gap-6 px-4">
          {[...products, ...products].map((p, i) => (
            <div key={`${p.id}-${i}`} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-sm border border-[var(--border)]">
              <Image src={p.image} alt={p.name} fill className="object-cover" sizes="320px" />
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <h2 className="font-serif text-3xl">Featured listings</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <PromoStrip />
      <Reviews />
    </main>
  );
}