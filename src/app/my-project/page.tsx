import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "My Project",
  description: "Client project portal — coming for active MasterFix clients.",
};

export default function MyProjectPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-4 py-20 text-center lg:px-8">
      <p className="section-label mb-3">Client portal</p>
      <h1 className="font-display text-4xl tracking-tight sm:text-5xl">My Project</h1>
      <p className="mt-5 text-lg text-ink-muted">
        Coming for active clients — progress docs, milestones, and project communication in
        one place.
      </p>
      <p className="mt-3 text-sm text-ink-muted">
        If you&apos;re an active client, reach us at{" "}
        <a href={company.phoneHref} className="font-semibold text-ink hover:underline">
          {company.phone}
        </a>{" "}
        or{" "}
        <a
          href={`mailto:${company.email}`}
          className="font-semibold text-ink hover:underline"
        >
          {company.email}
        </a>
        .
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/contact"
          className="focus-ring rounded-full bg-dark px-5 py-3 text-sm font-semibold text-white"
        >
          Start Your Remodel →
        </Link>
        <Link
          href="/design"
          className="focus-ring rounded-full border border-line px-5 py-3 text-sm font-semibold"
        >
          Remodel My Space
        </Link>
      </div>
    </div>
  );
}
