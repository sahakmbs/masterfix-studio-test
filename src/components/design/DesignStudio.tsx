"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { company } from "@/lib/company";
import {
  changeOptions,
  classBands,
  cabinetOptions,
  configuratorToJson,
  counterOptions,
  defaultConfigurator,
  floorOptions,
  spaceTypes,
  styleDirections,
  styleOptions,
  type ConfiguratorState,
} from "@/lib/configurator";

const STEPS = [
  "Space",
  "Direction",
  "Playground",
  "Concept",
  "Build this",
] as const;

export function DesignStudio() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<ConfiguratorState>(defaultConfigurator);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const reduce = useReducedMotion();

  const jsonPayload = useMemo(() => configuratorToJson(state), [state]);

  useEffect(() => {
    try {
      sessionStorage.setItem("masterfix-configurator", jsonPayload);
    } catch {
      /* ignore */
    }
  }, [jsonPayload]);

  const floor = floorOptions.find((f) => f.id === state.floor) ?? floorOptions[0];
  const cabinets = cabinetOptions.find((c) => c.id === state.cabinets) ?? cabinetOptions[0];
  const counter = counterOptions.find((c) => c.id === state.counter) ?? counterOptions[0];
  const style = styleOptions.find((s) => s.id === state.style) ?? styleOptions[0];
  const band = classBands.find((c) => c.id === state.projectClass) ?? classBands[1];

  const conceptFilter = useMemo(() => {
    // CSS-only concept visualization — not photoreal AI
    const hue =
      state.style === "pacific-modern"
        ? "saturate(1.05) contrast(1.05)"
        : state.style === "warm-minimal"
          ? "sepia(0.15) brightness(1.05)"
          : state.style === "classic-pnw"
            ? "saturate(0.9) contrast(1.08)"
            : "contrast(1.1) grayscale(0.15)";
    return hue;
  }, [state.style]);

  function toggleChange(c: string) {
    setState((s) => ({
      ...s,
      changes: s.changes.includes(c)
        ? s.changes.filter((x) => x !== c)
        : [...s.changes, c],
    }));
  }

  function onPhoto(file: File | null) {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    if (!file) {
      setPreviewUrl(null);
      setState((s) => ({ ...s, photoName: null }));
      return;
    }
    setPreviewUrl(URL.createObjectURL(file));
    setState((s) => ({ ...s, photoName: file.name }));
  }

  async function submitConsult(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(company.formspree, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          _subject: "Studio consult — Remodel My Space",
          source: "design-studio",
          configurator: jsonPayload,
          spaceType: state.spaceType,
          styleDirection: state.styleDirection,
          projectClass: state.projectClass,
          changes: state.changes.join(", "),
          notes: state.notes,
          photoName: state.photoName,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Call us or email estimates@seattlemasterfix.com.");
    } finally {
      setSubmitting(false);
    }
  }

  const canNext =
    step === 0
      ? Boolean(state.spaceType)
      : step === 1
        ? Boolean(state.styleDirection)
        : true;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
      <div className="mb-10 max-w-2xl">
        <p className="section-label mb-3">Remodel My Space</p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
          Build your project before we build your project.
        </h1>
        <p className="mt-4 text-ink-muted">
          Multi-step studio: brief the space, play with finishes, review a concept
          visualization (CSS overlays + matched comps — not a fake bid), then request a
          consult with your selections saved as JSON.
        </p>
      </div>

      {/* Stepper */}
      <ol className="mb-10 flex flex-wrap gap-2" aria-label="Design steps">
        {STEPS.map((label, i) => (
          <li key={label}>
            <button
              type="button"
              className={`focus-ring rounded-full px-3 py-1.5 font-mono-tech text-[11px] tracking-wide transition ${
                i === step
                  ? "bg-dark text-white"
                  : i < step
                    ? "bg-accent/20 text-ink"
                    : "border border-line text-ink-muted"
              }`}
              onClick={() => i <= step && setStep(i)}
              aria-current={i === step ? "step" : undefined}
            >
              {String(i + 1).padStart(2, "0")} {label}
            </button>
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -12 }}
          transition={{ duration: 0.25 }}
        >
          {step === 0 && (
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl">Space briefing</h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Optional photo helps us understand existing conditions. Not required.
                </p>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium">Mode</label>
                  <div className="inline-flex rounded-full border border-line p-1">
                    {(["residential", "commercial"] as const).map((m) => (
                      <button
                        key={m}
                        type="button"
                        className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold capitalize ${
                          state.mode === m ? "bg-dark text-white" : "text-ink-muted"
                        }`}
                        onClick={() => setState((s) => ({ ...s, mode: m }))}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium" htmlFor="space-type">
                    Space type
                  </label>
                  <select
                    id="space-type"
                    className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
                    value={state.spaceType}
                    onChange={(e) => setState((s) => ({ ...s, spaceType: e.target.value }))}
                  >
                    <option value="">Select…</option>
                    {spaceTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium" htmlFor="photo">
                    Upload a photo (optional)
                  </label>
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    className="focus-ring block w-full text-sm"
                    onChange={(e) => onPhoto(e.target.files?.[0] ?? null)}
                  />
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-dark">
                {previewUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl} alt="Your upload" className="h-full w-full object-cover" />
                ) : (
                  <Image
                    src="/images/front.webp"
                    alt="Placeholder space"
                    fill
                    className="object-cover opacity-70"
                    sizes="50vw"
                  />
                )}
                <div className="absolute bottom-3 left-3 rounded bg-dark/70 px-2 py-1 font-mono-tech text-[10px] text-white">
                  {state.photoName ? `Uploaded: ${state.photoName}` : "Studio placeholder"}
                </div>
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl">Style direction & what to change</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {styleDirections.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`focus-ring rounded-xl border p-4 text-left transition ${
                      state.styleDirection === d
                        ? "border-accent bg-accent-dim"
                        : "border-line bg-bg-elevated hover:border-ink/20"
                    }`}
                    onClick={() => setState((s) => ({ ...s, styleDirection: d }))}
                  >
                    <span className="font-display text-lg">{d}</span>
                  </button>
                ))}
              </div>

              <p className="mt-8 mb-3 text-sm font-medium">What do you want to change?</p>
              <div className="flex flex-wrap gap-2">
                {changeOptions.map((c) => {
                  const on = state.changes.includes(c);
                  return (
                    <button
                      key={c}
                      type="button"
                      className={`focus-ring rounded-full px-4 py-2 text-sm font-medium ${
                        on ? "bg-dark text-white" : "border border-line text-ink-muted"
                      }`}
                      onClick={() => toggleChange(c)}
                      aria-pressed={on}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl">Remodeling Playground</h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Toggle finishes. Project class is a band — not a precise dollar bid.
                </p>

                <PlayField
                  label="Floor"
                  options={floorOptions}
                  value={state.floor}
                  onChange={(id) => setState((s) => ({ ...s, floor: id }))}
                />
                <PlayField
                  label="Cabinets"
                  options={cabinetOptions}
                  value={state.cabinets}
                  onChange={(id) => setState((s) => ({ ...s, cabinets: id }))}
                />
                <PlayField
                  label="Counter"
                  options={counterOptions}
                  value={state.counter}
                  onChange={(id) => setState((s) => ({ ...s, counter: id }))}
                />

                <div className="mt-6">
                  <p className="mb-2 text-sm font-medium">Style</p>
                  <div className="flex flex-wrap gap-2">
                    {styleOptions.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        className={`focus-ring rounded-full px-3 py-1.5 text-sm ${
                          state.style === o.id
                            ? "bg-dark text-white"
                            : "border border-line text-ink-muted"
                        }`}
                        onClick={() => setState((s) => ({ ...s, style: o.id }))}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-2 text-sm font-medium">Project class</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {classBands.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        className={`focus-ring rounded-xl border p-4 text-left ${
                          state.projectClass === c.id
                            ? "border-accent bg-accent-dim"
                            : "border-line"
                        }`}
                        onClick={() => setState((s) => ({ ...s, projectClass: c.id }))}
                      >
                        <p className="font-mono-tech text-accent">{c.dollars}</p>
                        <p className="font-display text-lg">{c.label}</p>
                        <p className="mt-1 text-xs text-ink-muted">{c.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live concept board */}
              <div className="rounded-xl border border-line bg-dark p-4 text-white">
                <p className="font-mono-tech text-[10px] tracking-widest text-accent">
                  LIVE PLAYGROUND PREVIEW
                </p>
                <div className="relative mt-3 aspect-[4/3] overflow-hidden rounded-lg concept-overlay">
                  <Image
                    src="/images/services/laminate/laminate.webp"
                    alt="Concept base"
                    fill
                    className="object-cover"
                    style={{ filter: conceptFilter }}
                    sizes="50vw"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 opacity-70"
                    style={{
                      background: `linear-gradient(transparent, ${floor.swatch})`,
                    }}
                  />
                  <div
                    className="absolute bottom-[18%] left-[10%] right-[40%] h-[12%] rounded-sm opacity-90"
                    style={{ background: counter.swatch }}
                  />
                  <div
                    className="absolute bottom-[30%] left-[10%] right-[55%] top-[25%] opacity-40"
                    style={{ background: cabinets.swatch }}
                  />
                </div>
                <ul className="mt-4 space-y-1 text-sm text-white/70">
                  <li>Floor — {floor.label}</li>
                  <li>Cabinets — {cabinets.label}</li>
                  <li>Counter — {counter.label}</li>
                  <li>Style — {style.label}</li>
                  <li>
                    Class — {band.dollars} {band.label}
                  </li>
                </ul>
                <p className="mt-3 text-xs text-white/45">
                  Concept visualization — actual design, feasibility and pricing after
                  consultation.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl">Concept visualization</h2>
                <div
                  className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl border border-line bg-dark concept-overlay"
                  role="img"
                  aria-label="Concept visualization — not a final design"
                >
                  <Image
                    src={
                      previewUrl
                        ? "/images/services/tile/tile.webp"
                        : "/images/services/siding/siding.webp"
                    }
                    alt="Matched MasterFix project comp for concept"
                    fill
                    className="object-cover"
                    style={{ filter: conceptFilter }}
                    sizes="50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-50"
                    style={{
                      background: `linear-gradient(135deg, ${cabinets.swatch}, ${floor.swatch} 60%, ${counter.swatch})`,
                    }}
                  />
                </div>
                <p className="mt-3 rounded-lg border border-accent/40 bg-accent-dim px-4 py-3 text-sm text-ink">
                  <strong>Concept visualization only.</strong> Actual design, feasibility,
                  and pricing after consultation. CSS overlays + matched MasterFix project
                  comps — not a photoreal AI bid or precise dollar quote.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl">Your brief</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row k="Mode" v={state.mode} />
                  <Row k="Space" v={state.spaceType || "—"} />
                  <Row k="Direction" v={state.styleDirection || "—"} />
                  <Row k="Changes" v={state.changes.join(", ") || "—"} />
                  <Row k="Floor" v={floor.label} />
                  <Row k="Cabinets" v={cabinets.label} />
                  <Row k="Counter" v={counter.label} />
                  <Row k="Style" v={style.label} />
                  <Row k="Class" v={`${band.dollars} ${band.label}`} />
                </dl>
                <label className="mt-6 block text-sm font-medium" htmlFor="notes">
                  Notes
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="focus-ring mt-2 w-full rounded-lg border border-line bg-bg-elevated px-4 py-3 text-sm"
                  value={state.notes}
                  onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
                  placeholder="Timeline, constraints, must-haves…"
                />
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-medium text-ink-muted">
                    View configurator JSON
                  </summary>
                  <pre className="mt-2 max-h-48 overflow-auto rounded-lg bg-dark p-4 font-mono-tech text-[11px] text-accent">
                    {jsonPayload}
                  </pre>
                </details>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="mx-auto max-w-xl text-center">
              {!submitted ? (
                <>
                  <h2 className="font-display text-4xl sm:text-5xl">
                    Let&apos;s build this. →
                  </h2>
                  <p className="mt-4 text-ink-muted">
                    Request a consult. Your playground selections travel with the form as
                    JSON so we start from your concept — not a blank slate.
                  </p>
                  <form onSubmit={submitConsult} className="mt-8 space-y-4 text-left">
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        required
                        className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
                        value={contact.name}
                        onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
                        value={contact.email}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, email: e.target.value }))
                        }
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="focus-ring w-full rounded-lg border border-line bg-bg-elevated px-4 py-3"
                        value={contact.phone}
                        onChange={(e) =>
                          setContact((c) => ({ ...c, phone: e.target.value }))
                        }
                      />
                    </div>
                    <input type="hidden" name="configurator" value={jsonPayload} readOnly />
                    {error && <p className="text-sm text-red-700">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="focus-ring w-full rounded-full bg-dark py-3.5 text-sm font-semibold text-white hover:bg-dark-elevated disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Request consult with my concept"}
                    </button>
                  </form>
                  <p className="mt-4 text-sm text-ink-muted">
                    Or{" "}
                    <a
                      href={company.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      book on Calendly
                    </a>
                    .
                  </p>
                </>
              ) : (
                <div className="rounded-2xl border border-line bg-bg-elevated p-8">
                  <p className="section-label mb-2">Received</p>
                  <h2 className="font-display text-3xl">We have your concept.</h2>
                  <p className="mt-3 text-ink-muted">
                    Our team will review your studio brief and follow up. You can also book
                    a time directly.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={company.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-semibold text-dark"
                    >
                      Book Calendly
                    </a>
                    <Link
                      href="/projects"
                      className="focus-ring rounded-full border border-line px-5 py-3 text-sm font-semibold"
                    >
                      Browse projects
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav */}
      {!(step === 4 && submitted) && (
        <div className="mt-12 flex items-center justify-between border-t border-line pt-6">
          <button
            type="button"
            className="focus-ring rounded-full border border-line px-5 py-2.5 text-sm font-semibold disabled:opacity-40"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            Back
          </button>
          {step < STEPS.length - 1 && (
            <button
              type="button"
              className="focus-ring rounded-full bg-dark px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              disabled={!canNext}
              onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
            >
              Continue →
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function PlayField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string; swatch: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mt-6">
      <p className="mb-2 text-sm font-medium">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`focus-ring flex items-center gap-2 rounded-full border px-3 py-2 text-sm ${
              value === o.id ? "border-accent bg-accent-dim" : "border-line"
            }`}
            onClick={() => onChange(o.id)}
          >
            <span
              className="h-4 w-4 rounded-full border border-black/10"
              style={{ background: o.swatch }}
              aria-hidden
            />
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-4 border-b border-line pb-2">
      <dt className="w-28 shrink-0 font-mono-tech text-[11px] uppercase tracking-wider text-ink-muted">
        {k}
      </dt>
      <dd className="text-ink">{v}</dd>
    </div>
  );
}
