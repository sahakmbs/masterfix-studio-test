# Seattle MasterFix — Digital Remodeling Studio (test)

**Concept:** *Build your project before we build your project.*

This repo is an interactive **digital remodeling studio** — part portfolio, part design tool, part project-planning experience. Visitors **Imagine → experiment → understand process → contact**.

## How this differs from `masterfix-redesign-test`

| | **masterfix-studio-test** (this repo) | **masterfix-redesign-test** |
|---|----------------------------------------|------------------------------|
| Intent | Interactive studio / configurator experience | Premium traditional remodeler site |
| Flagship | `/design` Remodel My Space + Playground | Classic Home / Services / Contact |
| Before/After | Early, multi-example, keyboard accessible | May include, not the core product |
| Metaphor | Design tool + case studies + process | Atelier marketing site |
| Client portal | `/my-project` stub | N/A |

Both are **test** builds for Seattle MasterFix Precision Craftsmanship. Neither is the live production site (`seattlemasterfix.com`).

## Live preview (GitHub Pages)

**https://sahakmbs.github.io/masterfix-studio-test/**

Static export (`output: 'export'`) with `basePath` `/masterfix-studio-test`. Deployed from the `gh-pages` branch (`out/` build output). The `/design` configurator is a client component and works under this basePath.

## Stack

- Next.js App Router + TypeScript + Tailwind CSS v4
- Framer Motion (respects `prefers-reduced-motion`)
- Formspree + Calendly for leads
- Company photography from the MasterFix asset set (siding, fencing, tile, laminate, drywall, paint)

## Routes

- `/` — Homepage sections 01–09 (hero, before/after, explore, design CTA, case studies, craft, process, standards, final CTA)
- `/design` — Remodel My Space + Playground configurator (JSON → Formspree)
- `/projects`, `/projects/[slug]` — Case studies
- `/services`, `/services/[slug]` — Trades + kitchen/bath/addition shells
- `/residential`, `/commercial` — Journey pages
- `/process`, `/about`, `/contact`
- `/privacy`, `/terms`
- `/my-project` — Client portal stub

## Company facts

- Seattle MasterFix Precision Craftsmanship
- (206) 550-4576 · info@ / estimates@seattlemasterfix.com
- 5415 6th Ave NW, Seattle, WA 98107
- WA # SEATTMP744NL · UBI 605904953
- Formspree: `https://formspree.io/f/xnjeedlb`
- Calendly: `https://calendly.com/bill-seattlemasterfix`

**No reviews/testimonials section** by design.

## Develop

```bash
npm install
npm run dev
```

## Build & production preview

```bash
npm run build
npm run start -- -p 3001
```

## Notes

- Concept visualizations use CSS overlays + matched project comps and are clearly labeled **concept only** — not photoreal AI bids or precise dollar quotes.
- Project class bands: $$ Moderate / $$$ Premium / $$$$ Custom.
