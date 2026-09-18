import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential",
  description: "Residential remodeling journey — exterior, interiors, and finish systems.",
};

const stops = [
  { title: "Imagine the elevation", href: "/services/siding", img: "/images/services/siding/siding.webp", body: "Siding and envelope that handle PNW weather." },
  { title: "Define the edge", href: "/services/fencing", img: "/images/services/fencing/fencing.webp", body: "Fencing for privacy, security, and site clarity." },
  { title: "Wet rooms done right", href: "/services/tile", img: "/images/services/tile/tile.webp", body: "Waterproof tile where moisture never forgives shortcuts." },
  { title: "Floors for real living", href: "/services/laminate", img: "/images/services/laminate/laminate.webp", body: "High-traffic laminate across open plans." },
  { title: "Walls that take light", href: "/services/drywall", img: "/images/services/drywall/drywall.webp", body: "Drywall finishing matched to how you light the room." },
  { title: "Paint that lasts", href: "/services/paint", img: "/images/services/paint/paint.webp", body: "Prep-first interior and exterior coatings." },
];

export default function ResidentialPage() {
  return (
    <div>
      <section className="relative min-h-[55vh] bg-dark text-white">
        <Image src="/images/front.webp" alt="" fill className="object-cover opacity-40" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-4 pb-14 lg:px-8">
          <p className="section-label mb-3">Residential journey</p>
          <h1 className="font-display max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
            Your home, designed before it&apos;s rebuilt.
          </h1>
          <p className="mt-4 max-w-xl text-white/65">
            Move from imagination → experiment in the studio → understand process → contact.
            Exterior to finish, one coherent path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/design" className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark">
              Design Your Space →
            </Link>
            <Link href="/projects" className="focus-ring rounded-full border border-white/25 px-5 py-3 text-sm font-semibold">
              See residential work
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">Journey stops</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stops.map((s, i) => (
            <Link key={s.href} href={s.href} className="focus-ring group overflow-hidden rounded-xl border border-line">
              <div className="relative aspect-[16/10]">
                <Image src={s.img} alt="" fill className="object-cover transition group-hover:scale-105" sizes="33vw" />
              </div>
              <div className="p-5">
                <p className="font-mono-tech text-[10px] text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-display text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{s.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
