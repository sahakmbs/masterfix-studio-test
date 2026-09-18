import Image from "next/image";
import Link from "next/link";
import { caseStudies, projectClassLabel } from "@/lib/projects";

export function CaseStudiesTeaser() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label mb-3">05 — Case studies</p>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl lg:text-5xl">
              Projects told as stories.
            </h2>
          </div>
          <Link
            href="/projects"
            className="focus-ring text-sm font-semibold text-ink underline-offset-4 hover:underline"
          >
            All projects →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="focus-ring group overflow-hidden rounded-xl border border-line bg-bg-elevated"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-dark">
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-mono-tech text-[10px] tracking-widest text-ink-muted">
                  {p.trade} · {projectClassLabel[p.projectClass]}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
