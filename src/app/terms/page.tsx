import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8 lg:py-20">
      <Link href="/" className="text-sm font-medium text-ink-muted hover:text-ink">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-ink-muted">Last Updated: September 2026</p>
      <div className="prose-studio mt-10">
        <h2>1. Introduction</h2>
        <p>
          Welcome to the official website of {company.name}. By accessing and using this
          website, you agree to comply with and be bound by the following Terms of Service.
          If you do not agree with these terms, please refrain from using our website.
        </p>
        <h2>2. Use of Website and Content</h2>
        <p>
          All materials, including but not limited to text, photographs, project galleries,
          branding, design studio concepts, and layouts displayed on this website, are the
          intellectual property of {company.name}. Users may not copy, reproduce,
          distribute, or misrepresent our project photography or brand assets without
          explicit, prior written consent. Concept visualizations generated in the design
          studio are illustrative only and not final designs or bids.
        </p>
        <h2>3. Estimates, Timelines, and Scopes</h2>
        <p>
          Any estimates, project class bands ($$ / $$$ / $$$$), timelines, or service scopes
          discussed or generated via website contact forms, the design studio, emails, or
          preliminary phone calls are strictly informational and non-binding. Formal
          project commencement requires a mutually executed contract and any necessary
          permits. We reserve the right to alter preliminary guidance following on-site
          feasibility studies.
        </p>
        <h2>4. Warranties and Limitation of Liability</h2>
        <p>
          While we execute every project with craftsmanship and adherence to code, the
          digital content on this website is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis without any digital warranties of any kind.
        </p>
        <p>
          Specific physical construction warranties, bonding protections, and liability
          terms are strictly governed by your individual project contract, not the contents
          of this website. {company.name} shall not be held liable for any direct,
          indirect, incidental, or consequential damages arising from the use of, or
          inability to use, this website.
        </p>
        <h2>5. Governing Law and Jurisdiction</h2>
        <p>
          These terms, as well as any resulting business agreements, are governed
          exclusively by and construed in accordance with the laws of the State of
          Washington, without regard to its conflict of law principles.
        </p>
        <h2>6. Company Information</h2>
        <p>
          <strong>{company.name}</strong>
          <br />
          State of Washington UBI: {company.ubi}
          <br />
          WA License #: {company.license}
          <br />
          {company.address}
        </p>
      </div>
    </div>
  );
}
