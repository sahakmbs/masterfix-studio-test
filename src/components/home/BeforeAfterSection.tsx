"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { beforeAfterPairs } from "@/lib/beforeAfter";

export function BeforeAfterSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">02 — Transformation</p>
          <h2 className="font-display max-w-2xl text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            See the shift. Feel the craft.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Drag between real MasterFix project moments — process honesty on the left,
            finished craft on the right. Multiple trades, one standard.
          </p>
        </motion.div>

        <div className="mt-10">
          <BeforeAfterSlider pairs={beforeAfterPairs} />
        </div>
      </div>
    </section>
  );
}
