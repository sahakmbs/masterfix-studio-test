"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";

export type BeforeAfterPair = {
  id: string;
  label: string;
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
};

type Props = {
  pairs: BeforeAfterPair[];
  className?: string;
};

export function BeforeAfterSlider({ pairs, className = "" }: Props) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const pair = pairs[active] ?? pairs[0];

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(0, p - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(100, p + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  if (!pair) return null;

  return (
    <div className={className}>
      {pairs.length > 1 && (
        <div
          className="mb-4 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Before and after examples"
        >
          {pairs.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`focus-ring rounded-full px-3 py-1.5 text-xs font-medium transition ${
                i === active
                  ? "bg-dark text-white"
                  : "border border-line bg-bg-elevated text-ink-muted hover:text-ink"
              }`}
              onClick={() => {
                setActive(i);
                setPos(50);
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-xl bg-dark select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <Image
          src={pair.after}
          alt={pair.afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1200px"
          priority={active === 0}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={pair.beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `${pos}%` }}
        />

        <div
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-labelledby={labelId}
          aria-orientation="horizontal"
          className="focus-ring absolute top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-dark/80 text-white shadow-lg"
          style={{ left: `${pos}%` }}
          onKeyDown={onKeyDown}
        >
          <span className="font-mono-tech text-[10px]" aria-hidden>
            ↔
          </span>
        </div>

        <span
          className="pointer-events-none absolute left-3 top-3 rounded bg-dark/70 px-2 py-1 font-mono-tech text-[10px] tracking-wider text-white"
        >
          BEFORE
        </span>
        <span
          className="pointer-events-none absolute right-3 top-3 rounded bg-accent/90 px-2 py-1 font-mono-tech text-[10px] tracking-wider text-dark"
        >
          AFTER
        </span>
      </div>
      <p id={labelId} className="mt-3 text-sm text-ink-muted">
        Drag or use arrow keys to compare — {pair.label}
      </p>
    </div>
  );
}
