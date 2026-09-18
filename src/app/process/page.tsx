import type { Metadata } from "next";
import Link from "next/link";
import { contentProcess, processSteps, standards } from "@/lib/process";

export const metadata: Metadata = {
  title: "Our Process",
  description: "Transparent remodeling process — eight studio steps plus preconstruction through closeout.",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
      <p className="section-label mb-3">Our Process</p>
      <h1 className="font-display max-w-2xl text-4xl tracking-tight sm:text-5xl">
        Transparent from briefing to walkthrough.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        The studio experience maps to how we actually build — discovery, feasibility,
        written scope, craft, QC, and closeout.
      </p>

      <h2 className="mt-14 font-display text-2xl">Eight-step studio path</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s) => (
          <div key={s.n} className="rounded-xl border border-line bg-bg-elevated p-5">
            <p className="font-mono-tech text-xs text-accent">{s.n}</p>
            <h3 className="mt-2 font-display text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl">Delivery phases</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {contentProcess.map((p, i) => (
          <div key={p.title} className="rounded-xl border border-line p-6">
            <p className="font-mono-tech text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-display text-xl">{p.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{p.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl">Project standards</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {standards.map((s) => (
          <div key={s.title} className="rounded-xl bg-dark p-5 text-white">
            <h3 className="font-display text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-white/60">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/contact" className="focus-ring inline-flex rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white">
          Start Your Remodel →
        </Link>
      </div>
    </div>
  );
}
