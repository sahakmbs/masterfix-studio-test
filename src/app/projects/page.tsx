import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, projectClassLabel } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies from Seattle MasterFix — challenge, approach, process, outcome.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">
      <p className="section-label mb-3">Projects</p>
      <h1 className="font-display max-w-2xl text-4xl tracking-tight sm:text-5xl">
        Case studies, not a flat gallery.
      </h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Challenge → approach → process → outcome. Real trades, real photos, construction
        honesty where the images allow.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {caseStudies.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="focus-ring group overflow-hidden rounded-2xl border border-line bg-bg-elevated"
          >
            <div className="relative aspect-[16/10] bg-dark">
              <Image
                src={p.hero}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="font-mono-tech text-[10px] tracking-widest text-ink-muted">
                {p.location} · {p.trade} · {projectClassLabel[p.projectClass]}
              </p>
              <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">{p.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
