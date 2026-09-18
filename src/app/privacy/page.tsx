import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8 lg:py-20">
      <Link href="/" className="text-sm font-medium text-ink-muted hover:text-ink">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-muted">Last Updated: September 2026</p>
      <div className="prose-studio mt-10">
        <h2>1. Introduction</h2>
        <p>
          At {company.name}, we respect your privacy and are committed to protecting the
          personal information you share with us. This Privacy Policy explains how we
          collect, use, and safeguard your data when you visit our website or contact us
          for contracting services.
        </p>
        <h2>2. Information We Collect</h2>
        <p>
          We only collect information that is necessary to provide you with our services.
          When you use our website, we may collect the following:
        </p>
        <ul>
          <li>
            <strong>Voluntary Information:</strong> Information you provide directly
            through our project form, design studio, or scheduling tools, including your
            name, company, email address, phone number, project location, property and
            service type, estimated budget band, desired timeline, communication
            preferences, project details, and configurator selections.
          </li>
          <li>
            <strong>Automated Information:</strong> Basic, non-identifying technical data
            (such as browser type or IP address) collected standardly by web hosting
            platforms to ensure our website functions correctly.
          </li>
        </ul>
        <h2>3. How We Use Your Information</h2>
        <p>
          The information we collect is strictly used for business and communication
          purposes, specifically to:
        </p>
        <ul>
          <li>Respond to your inquiries and provide accurate project estimates.</li>
          <li>
            Communicate with you regarding project scheduling, feasibility, and execution.
          </li>
          <li>Maintain internal administrative and financial records.</li>
        </ul>
        <h2>4. Form and Scheduling Providers</h2>
        <p>
          We use Formspree to securely process website form submissions and Calendly to
          provide online appointment scheduling. Information you submit through those
          features is processed by the applicable provider under its own privacy and
          security practices. Please provide only information relevant to your project or
          meeting request.
        </p>
        <h2>5. Information Sharing and Disclosure</h2>
        <p>
          <strong>We do not sell, rent, or trade your personal data to third parties.</strong>
        </p>
        <p>We may only share your information in the following limited circumstances:</p>
        <ul>
          <li>
            <strong>Project Execution:</strong> With verified subcontractors, municipal
            permit offices, or engineers solely for the purpose of executing your requested
            work.
          </li>
          <li>
            <strong>Legal Requirements:</strong> If required by Washington State law, court
            order, or to protect the rights and safety of {company.name}.
          </li>
        </ul>
        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal
          information from unauthorized access, alteration, or disclosure. However, please
          be aware that no method of digital transmission over the Internet is 100% secure.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or how your
          data is handled, please contact us at:
        </p>
        <p>
          <strong>{company.name}</strong>
          <br />
          Email: {company.email}
          <br />
          Phone: {company.phone}
          <br />
          {company.address}
        </p>
      </div>
    </div>
  );
}
