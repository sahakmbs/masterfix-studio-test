"use client";

import Link from "next/link";
import { company } from "@/lib/company";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={company.phoneHref}
          className="focus-ring flex h-12 flex-1 items-center justify-center rounded-full border border-line text-sm font-semibold text-ink"
        >
          Call {company.phone}
        </a>
        <Link
          href="/contact"
          className="focus-ring flex h-12 flex-1 items-center justify-center rounded-full bg-dark text-sm font-semibold text-white"
        >
          Start Your Remodel
        </Link>
      </div>
    </div>
  );
}
