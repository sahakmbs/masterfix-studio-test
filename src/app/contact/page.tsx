import type { Metadata } from "next";
import { company } from "@/lib/company";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Start Your Remodel",
  description: "Request a project consultation with Seattle MasterFix.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
      <div className="lg:col-span-5">
        <p className="section-label mb-3">Consult</p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          Start Your Remodel
        </h1>
        <p className="mt-4 text-ink-muted">
          Tell us about the space. If you used Remodel My Space, mention it — or paste notes
          from your concept brief. We respond with next steps, not a fake instant bid.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-ink-muted">
          <li>
            <a href={company.phoneHref} className="font-semibold text-ink hover:underline">
              {company.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${company.estimatesEmail}`} className="hover:underline">
              {company.estimatesEmail}
            </a>
          </li>
          <li>{company.address}</li>
          <li>
            <a
              href={company.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Book on Calendly →
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-10 lg:col-span-7 lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}
