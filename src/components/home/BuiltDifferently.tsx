import Image from "next/image";

const details = [
  {
    img: "/images/services/tile/tile6.webp",
    title: "Joints & layout",
    body: "Tile lines that hold under scrutiny — substrate first, pattern second.",
  },
  {
    img: "/images/services/siding/siding4.webp",
    title: "Envelope transitions",
    body: "Flashing and weather barrier continuity where water actually attacks.",
  },
  {
    img: "/images/services/drywall/drywall4.webp",
    title: "Surface under light",
    body: "Finish levels matched to lighting — Level 5 when grazing light demands it.",
  },
];

export function BuiltDifferently() {
  return (
    <section className="border-y border-line bg-bg-elevated py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="section-label mb-3">06 — Craft</p>
        <h2 className="font-display max-w-2xl text-3xl tracking-tight sm:text-4xl lg:text-5xl">
          Built differently.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Macro detail over marketing gloss. The work you live with is in the layers —
          membranes, fasteners, prep, and inspection under real light.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {details.map((d) => (
            <article key={d.title} className="overflow-hidden rounded-xl border border-line bg-bg">
              <div className="relative aspect-square">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{d.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
