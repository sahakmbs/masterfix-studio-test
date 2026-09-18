"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const residentialZones = [
  { id: "exterior", label: "Exterior skin", href: "/services/siding", img: "/images/services/siding/siding1.webp", note: "Siding & envelope" },
  { id: "fence", label: "Yard edge", href: "/services/fencing", img: "/images/services/fencing/fencing1.webp", note: "Fencing & perimeter" },
  { id: "bath", label: "Wet rooms", href: "/services/tile", img: "/images/services/tile/tile1.webp", note: "Tile & waterproofing" },
  { id: "floors", label: "Living floors", href: "/services/laminate", img: "/images/services/laminate/laminate1.webp", note: "Laminate flooring" },
  { id: "walls", label: "Wall planes", href: "/services/drywall", img: "/images/services/drywall/drywall1.webp", note: "Drywall finishing" },
  { id: "paint", label: "Finish coat", href: "/services/paint", img: "/images/services/paint/paint.webp", note: "Interior & exterior paint" },
];

const commercialZones = [
  { id: "facade", label: "Facade & envelope", href: "/services/siding", img: "/images/services/siding/siding2.webp", note: "Commercial exterior" },
  { id: "common", label: "Common floors", href: "/services/laminate", img: "/images/services/laminate/laminate2.webp", note: "High-traffic flooring" },
  { id: "wet", label: "Restrooms / wet", href: "/services/tile", img: "/images/services/tile/tile2.webp", note: "Tile systems" },
  { id: "fitout", label: "Fit-out walls", href: "/services/drywall", img: "/images/services/drywall/drywall3.webp", note: "Drywall build-out" },
  { id: "finish", label: "Paint package", href: "/services/paint", img: "/images/services/paint/paint.webp", note: "Interior finish paint" },
  { id: "site", label: "Site perimeter", href: "/services/fencing", img: "/images/services/fencing/fencing2.webp", note: "Fencing & security edge" },
];

export function ExploreRemodel() {
  const [mode, setMode] = useState<"residential" | "commercial">("residential");
  const reduce = useReducedMotion();
  const zones = mode === "residential" ? residentialZones : commercialZones;

  return (
    <section className="border-y border-line bg-bg-elevated py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="section-label mb-3">03 — Explore</p>
        <h2 className="font-display max-w-2xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          What are you thinking about remodeling?
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Switch between residential house zones and commercial sectors. Click a zone to
          open the matching trade.
        </p>

        <div
          className="mt-8 inline-flex rounded-full border border-line bg-bg p-1"
          role="group"
          aria-label="Property type"
        >
          {(["residential", "commercial"] as const).map((m) => (
            <button
              key={m}
              type="button"
              className={`focus-ring rounded-full px-5 py-2.5 text-sm font-semibold capitalize transition ${
                mode === m ? "bg-dark text-white" : "text-ink-muted hover:text-ink"
              }`}
              onClick={() => setMode(m)}
              aria-pressed={mode === m}
            >
              {m}
            </button>
          ))}
        </div>

        <motion.div
          key={mode}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {zones.map((z) => (
            <Link
              key={z.id}
              href={z.href}
              className="focus-ring group relative aspect-[4/3] overflow-hidden rounded-xl bg-dark"
            >
              <Image
                src={z.img}
                alt={z.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-mono-tech text-[10px] tracking-widest text-accent">
                  {z.note}
                </p>
                <p className="font-display text-xl text-white">{z.label}</p>
              </div>
            </Link>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={mode === "residential" ? "/residential" : "/commercial"}
            className="focus-ring text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            Full {mode} journey →
          </Link>
        </div>
      </div>
    </section>
  );
}
