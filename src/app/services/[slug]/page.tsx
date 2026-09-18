import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, remodelShells, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...remodelShells.map((r) => ({ slug: r.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (s) return { title: s.name, description: s.intro };
  const shell = remodelShells.find((r) => r.slug === slug);
  if (shell) return { title: shell.name, description: shell.intro };
  return { title: "Service" };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  const shell = remodelShells.find((r) => r.slug === slug);

  if (shell && !service) {
    const mapped = services.filter((s) =>
      (shell.mapsTo as readonly string[]).includes(s.slug)
    );
    return (
      <div>
        <div className="bg-dark py-20 text-white tech-grid">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <p className="section-label mb-3">Remodel pathway</p>
            <h1 className="font-display text-4xl sm:text-5xl">{shell.name}</h1>
            <p className="mt-4 max-w-2xl text-white/65">{shell.intro}</p>
            <p className="mt-4 font-mono-tech text-xs text-accent">
              Maps to real trades: {shell.mapsTo.join(" · ")}
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mapped.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="focus-ring overflow-hidden rounded-xl border border-line"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={s.hero} alt={s.name} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="p-4">
                  <h2 className="font-display text-lg">{s.name}</h2>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/design"
              className="focus-ring rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white"
            >
              Design this remodel →
            </Link>
            <Link
              href="/contact"
              className="focus-ring rounded-full border border-line px-5 py-3 text-sm font-semibold"
            >
              Start consult
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!service) notFound();

  return (
    <div>
      <div className="relative min-h-[42vh] bg-dark text-white">
        <Image
          src={service.hero}
          alt={service.name}
          fill
          className="object-cover opacity-45"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-7xl flex-col justify-end px-4 pb-12 lg:px-8">
          <p className="section-label mb-3">{service.category}</p>
          <h1 className="font-display text-4xl sm:text-5xl">{service.name}</h1>
          <p className="mt-3 max-w-2xl text-white/70">{service.short}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7 space-y-10">
          <section>
            <h2 className="font-display text-2xl">Overview</h2>
            <p className="mt-3 text-ink-muted leading-relaxed">{service.intro}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Timeline (directional)</h2>
            <p className="mt-3 text-ink-muted">{service.timeline}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Cost drivers</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted">
              {service.costDrivers.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl">Materials notes</h2>
            <p className="mt-3 text-ink-muted">{service.materials}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl">Common mistakes to avoid</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink-muted">
              {service.mistakes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="mt-10 lg:col-span-5 lg:mt-0">
          <div className="rounded-2xl border border-line bg-bg-elevated p-6">
            <p className="section-label mb-3">Next step</p>
            <p className="text-sm text-ink-muted">
              Explore this trade in the design studio, or request a consult with photos and
              scope notes.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-flex w-full justify-center rounded-full bg-dark py-3 text-sm font-semibold text-white"
            >
              Start Your Remodel →
            </Link>
            <Link
              href="/design"
              className="focus-ring mt-3 inline-flex w-full justify-center rounded-full border border-line py-3 text-sm font-semibold"
            >
              Remodel My Space
            </Link>
          </div>
        </aside>
      </div>

      <div className="border-t border-line bg-bg-elevated py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-2xl">Project photography</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.images.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-dark">
                <Image src={src} alt="" fill className="object-cover" sizes="33vw" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
