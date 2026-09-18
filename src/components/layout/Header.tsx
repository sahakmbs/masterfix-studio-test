"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, navLinks } from "@/lib/company";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="focus-ring relative flex shrink-0 items-center gap-2 rounded-sm">
          <Image
            src="/logos/smpc-logo.webp"
            alt={company.shortName}
            width={160}
            height={48}
            className="h-10 w-auto object-contain md:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring rounded-sm text-sm font-medium text-ink-muted transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring ml-2 inline-flex items-center gap-1 rounded-full bg-dark px-4 py-2 text-sm font-semibold text-white transition hover:bg-dark-elevated"
          >
            Start Your Remodel <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="focus-ring rounded-md px-3 py-3 text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/design"
              className="focus-ring rounded-md px-3 py-3 text-base font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Remodel My Space
            </Link>
            <Link
              href="/contact"
              className="focus-ring mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-dark px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Start Your Remodel →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
