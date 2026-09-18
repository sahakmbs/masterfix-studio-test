import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy, projectClassLabel } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getCaseStudy(slug);
  if (!p) return { title: "Project" };
  return { title: p.title, description: p.subtitle };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getCaseStudy(slug);
  if (!p) notFound();

  return (
    <article>
      <div className="relative min-h-[50vh] bg-dark text-white">
        <Image
          src={p.hero}
          alt={p.title}
          fill
          className="object-cover opacity-50"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-12 lg:px-8">
          <p className="section-label mb-3">
            {p.location} · {projectClassLabel[p.projectClass]}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl">{p.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/70">{p.subtitle}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-12 lg:px-8">
        <div className="space-y-10 lg:col-span-7">
          <section>
            <h2 className="font-display text-2xl">Challenge</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">{p.challenge}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Approach</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">{p.approach}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Process</h2>
            <ol className="mt-4 space-y-3">
              {p.process.map((step, i) => (
                <li key={step} className="flex gap-3 text-ink-muted">
                  <span className="font-mono-tech text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h2 className="font-display text-2xl">Outcome</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">{p.outcome}</p>
          </section>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-24 rounded-2xl border border-line bg-bg-elevated p-6">
            <p className="section-label mb-4">Services on this project</p>
            <ul className="space-y-2">
              {p.services.map((s) => (
                <li key={s}>
                  <Link
                    href={`/services/${s}`}
                    className="focus-ring text-sm font-medium capitalize text-ink underline-offset-4 hover:underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex w-full items-center justify-center rounded-full bg-dark py-3 text-sm font-semibold text-white"
            >
              Start a similar remodel →
            </Link>
            <Link
              href="/design"
              className="focus-ring mt-3 inline-flex w-full items-center justify-center rounded-full border border-line py-3 text-sm font-semibold"
            >
              Design your space
            </Link>
          </div>
        </aside>
      </div>

      <div className="border-t border-line bg-bg-elevated py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-dark">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
