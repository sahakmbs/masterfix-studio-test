import { standards } from "@/lib/process";

export function StandardsSection() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="section-label mb-3">08 — Standards</p>
        <h2 className="font-display max-w-2xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Project standards, written down.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Scope, milestones, progress docs, change orders, QC, and walkthrough — the
          operating system behind every remodel.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border border-line bg-bg-elevated p-6 tech-grid-light"
            >
              <p className="font-mono-tech text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
