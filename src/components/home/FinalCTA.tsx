import Link from "next/link";
import { company } from "@/lib/company";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-dark py-24 text-white tech-grid lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="section-label mb-4">09 — Begin</p>
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl lg:text-6xl">
          Let&apos;s build this. →
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/60">
          Bring a concept from the studio — or just a clear problem. We&apos;ll turn it into
          a scoped, buildable plan.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="focus-ring rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-dark hover:bg-accent-hover"
          >
            Start Your Remodel →
          </Link>
          <a
            href={company.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold hover:bg-white/5"
          >
            Book on Calendly
          </a>
          <a
            href={company.phoneHref}
            className="focus-ring rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold hover:bg-white/5"
          >
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
