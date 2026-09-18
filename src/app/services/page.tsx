import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { remodelShells, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Siding, fencing, tile, laminate, drywall, paint — plus kitchen, bath, and addition landing shells.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
      <p className="section-label mb-3">Services</p>
      <h1 className="font-display max-w-2xl text-4xl tracking-tight sm:text-5xl">
        Trades we execute. Spaces we shape.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Six core trades with dedicated pages — plus kitchen, bathroom, and addition shells
        that map to the real work we perform.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="focus-ring group overflow-hidden rounded-2xl border border-line bg-bg-elevated"
          >
            <div className="relative aspect-[4/3] bg-dark">
              <Image
                src={s.hero}
                alt={s.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-display text-xl">{s.name}</h2>
              <p className="mt-1 text-sm text-ink-muted">{s.short}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl">Remodel pathways</h2>
      <p className="mt-2 max-w-xl text-sm text-ink-muted">
        Landing shells for common remodel intents — each maps to our real trades.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {remodelShells.map((r) => (
          <Link
            key={r.slug}
            href={`/services/${r.slug}`}
            className="focus-ring rounded-xl border border-line bg-bg p-6 hover:border-accent"
          >
            <h3 className="font-display text-xl">{r.name}</h3>
            <p className="mt-2 text-sm text-ink-muted">{r.short}</p>
            <p className="mt-3 font-mono-tech text-[10px] tracking-wider text-accent">
              Maps to: {r.mapsTo.join(" · ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
