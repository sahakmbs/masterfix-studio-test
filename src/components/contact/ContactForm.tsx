"use client";

import { useState } from "react";
import { company } from "@/lib/company";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => {
      payload[k] = String(v);
    });
    payload._subject = "Start Your Remodel — consult request";
    payload.source = "contact-page";

    try {
      const saved = sessionStorage.getItem("masterfix-configurator");
      if (saved) payload.configurator = saved;
    } catch {
      /* ignore */
    }

    try {
      const res = await fetch(company.formspree, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-line bg-bg-elevated p-8 text-center">
        <p className="section-label mb-2">Sent</p>
        <h2 className="font-display text-2xl">We&apos;ll be in touch.</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Prefer a calendar hold?{" "}
          <a
            href={company.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-4 hover:underline"
          >
            Book on Calendly
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="projectType">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select…
            </option>
            <option>Residential remodel</option>
            <option>Commercial</option>
            <option>Siding</option>
            <option>Fencing</option>
            <option>Tile</option>
            <option>Flooring</option>
            <option>Drywall</option>
            <option>Paint</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="budget">
            Budget band
          </label>
          <select
            id="budget"
            name="budget"
            className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
            defaultValue="$$$ Premium"
          >
            <option>$$ Moderate</option>
            <option>$$$ Premium</option>
            <option>$$$$ Custom</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <Field label="Desired timeline" name="timeline" placeholder="e.g. Spring 2026" />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="details">
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
          placeholder="Space, goals, constraints…"
        />
      </div>
      {status === "err" && (
        <p className="text-sm text-red-700">
          Could not send. Call {company.phone} or email {company.estimatesEmail}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring w-full rounded-full bg-dark py-3.5 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request consult →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
      />
    </div>
  );
}
