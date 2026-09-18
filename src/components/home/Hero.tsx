"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/lib/company";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-dark text-white">
      <Image
        src="/images/front.webp"
        alt="Seattle MasterFix project exterior"
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/40" />
      <div className="absolute inset-0 tech-grid opacity-40" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 lg:px-8 lg:pb-24">
        <motion.p
          className="section-label mb-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          01 — Digital Remodeling Studio
        </motion.p>
        <motion.h1
          className="font-display max-w-3xl text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Imagine what this space could become.
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl text-lg text-white/70"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
        >
          {company.studioLine} Part portfolio, part design tool, part project-planning
          experience — for homeowners and commercial partners across King County.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <Link
            href="/residential"
            className="focus-ring rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10"
          >
            Residential
          </Link>
          <Link
            href="/commercial"
            className="focus-ring rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10"
          >
            Commercial
          </Link>
          <Link
            href="/projects"
            className="focus-ring rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10"
          >
            Explore Our Work
          </Link>
          <Link
            href="/design"
            className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark hover:bg-accent-hover"
          >
            Design Your Space →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
