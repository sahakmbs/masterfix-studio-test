import Image from "next/image";
import Link from "next/link";
import { company, navLinks } from "@/lib/company";

export function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Image
            src="/logos/smpc-logo-white.webp"
            alt={company.shortName}
            width={180}
            height={54}
            className="mb-5 h-12 w-auto object-contain"
          />
          <p className="font-display text-xl text-white/90">{company.studioLine}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
            {company.positioning}
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="section-label mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring rounded-sm hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/design" className="focus-ring rounded-sm hover:text-accent">
                Remodel My Space
              </Link>
            </li>
            <li>
              <Link href="/my-project" className="focus-ring rounded-sm hover:text-accent">
                My Project
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="section-label mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href={company.phoneHref} className="focus-ring rounded-sm hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="focus-ring rounded-sm hover:text-accent"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.estimatesEmail}`}
                className="focus-ring rounded-sm hover:text-accent"
              >
                {company.estimatesEmail}
              </a>
            </li>
            <li className="pt-1 text-white/50">{company.address}</li>
            <li className="font-mono-tech text-xs text-white/40">
              WA #{company.license} · UBI {company.ubi}
            </li>
            <li className="text-white/50">{company.licensedBondedInsured}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-dark-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
