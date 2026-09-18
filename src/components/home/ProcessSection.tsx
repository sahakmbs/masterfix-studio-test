"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/process";

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label mb-3">07 — Process</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Eight steps. One house metaphor.
            </h2>
            <p className="mt-4 max-w-xl text-white/60">
              From discovery to walkthrough — transparent sequence with progress you can
              follow. Scroll the build path.
            </p>
          </div>
          <Link
            href="/process"
            className="focus-ring text-sm font-semibold text-accent hover:text-accent-hover"
          >
            Full process →
          </Link>
        </div>

        {/* House progress metaphor */}
        <div className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-[640px] items-end gap-1">
            {processSteps.map((s, i) => (
              <div key={s.n} className="flex-1">
                <div
                  className="mx-auto w-full rounded-t-md bg-accent/80"
                  style={{ height: `${28 + i * 8}px` }}
                  aria-hidden
                />
                <p className="mt-2 text-center font-mono-tech text-[9px] text-white/40">
                  {s.n}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <motion.article
              key={s.n}
              className="rounded-xl border border-dark-border bg-dark-elevated p-5"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: reduce ? 0 : i * 0.04 }}
            >
              <p className="font-mono-tech text-xs text-accent">{s.n}</p>
              <h3 className="mt-2 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
