import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: `About ${company.name} — digital remodeling studio for King County.`,
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-dark py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="section-label mb-3">About</p>
          <h1 className="font-display max-w-3xl text-4xl sm:text-5xl">
            Architecture. Engineering. Craftsmanship. Technology.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/65">
            {company.name} is a high-performance contractor across King County — and this
            site is our digital remodeling studio: imagine, experiment, understand process,
            then contact.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h2 className="font-display text-3xl">{company.tagline}</h2>
          <p className="mt-4 text-ink-muted leading-relaxed">{company.positioning}</p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            We pair honest project photography with interactive planning tools so you can
            brief a remodel before crews mobilize — without pretending a web form is a
            precise bid.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-ink-muted">
            <li>
              <strong className="text-ink">Phone:</strong>{" "}
              <a href={company.phoneHref} className="underline-offset-4 hover:underline">
                {company.phone}
              </a>
            </li>
            <li>
              <strong className="text-ink">Email:</strong> {company.email} /{" "}
              {company.estimatesEmail}
            </li>
            <li>
              <strong className="text-ink">Address:</strong> {company.address}
            </li>
            <li>
              <strong className="text-ink">License:</strong> WA #{company.license}
            </li>
            <li>
              <strong className="text-ink">UBI:</strong> {company.ubi}
            </li>
            <li>{company.licensedBondedInsured}</li>
          </ul>
          <Link
            href="/contact"
            className="focus-ring mt-8 inline-flex rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white"
          >
            Start Your Remodel →
          </Link>
        </div>
        <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-2xl lg:mt-0">
          <Image
            src="/images/services/siding/siding6.webp"
            alt="MasterFix craftsmanship"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>
    </div>
  );
}
