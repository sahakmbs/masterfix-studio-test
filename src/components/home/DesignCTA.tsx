"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function DesignCTA() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white tech-grid lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="section-label mb-3">04 — Remodel My Space</p>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
            Design your remodel before we build it.
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Upload a photo, pick a space type and style direction, toggle finishes in the
            Playground, and leave with a concept brief — clearly labeled as concept only.
            Real design, feasibility, and pricing happen in consultation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/design"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-dark hover:bg-accent-hover"
            >
              Open the design studio →
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/5"
            >
              Skip to consult
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { n: "01", t: "Brief the space", d: "Photo + type + what to change" },
            { n: "02", t: "Play with finishes", d: "Floor, cabinets, counter, style" },
            { n: "03", t: "Save the concept", d: "JSON brief → consult request" },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-dark-border bg-dark-elevated/80 p-5"
            >
              <p className="font-mono-tech text-xs text-accent">{s.n}</p>
              <p className="mt-2 font-display text-xl">{s.t}</p>
              <p className="mt-1 text-sm text-white/50">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
