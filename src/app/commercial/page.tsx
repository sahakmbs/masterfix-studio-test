import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Commercial",
  description: "Commercial contracting journey — fit-outs, floors, wet areas, envelope.",
};

export default function CommercialPage() {
  return (
    <div>
      <section className="bg-dark py-20 text-white tech-grid lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="section-label mb-3">Commercial journey</p>
          <h1 className="font-display max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Performance contracting for suites, fit-outs, and property owners.
          </h1>
          <p className="mt-5 max-w-2xl text-white/65">
            {company.positioning} Clear scope, schedule control, and documentation for GCs
            and owners who need reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark">
              Request commercial consult →
            </Link>
            <a href={company.calendly} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full border border-white/25 px-5 py-3 text-sm font-semibold">
              Book Calendly
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-display text-3xl">Commercial sectors we support</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Facade & envelope", h: "/services/siding", img: "/images/services/siding/siding2.webp" },
            { t: "High-traffic floors", h: "/services/laminate", img: "/images/services/laminate/laminate5.webp" },
            { t: "Restrooms / wet zones", h: "/services/tile", img: "/images/services/tile/tile7.webp" },
            { t: "Fit-out drywall", h: "/services/drywall", img: "/images/services/drywall/drywall.webp" },
            { t: "Paint packages", h: "/services/paint", img: "/images/services/paint/paint.webp" },
            { t: "Site perimeter", h: "/services/fencing", img: "/images/services/fencing/fencing3.webp" },
          ].map((x) => (
            <Link key={x.h} href={x.h} className="focus-ring group relative aspect-[4/3] overflow-hidden rounded-xl bg-dark">
              <Image src={x.img} alt={x.t} fill className="object-cover opacity-70 transition group-hover:scale-105" sizes="33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
              <p className="absolute bottom-4 left-4 font-display text-xl text-white">{x.t}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
