export type ProjectClass = "moderate" | "premium" | "custom";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  trade: string;
  location: string;
  projectClass: ProjectClass;
  hero: string;
  gallery: string[];
  challenge: string;
  approach: string;
  process: string[];
  outcome: string;
  services: string[];
};

export const projectClassLabel: Record<ProjectClass, string> = {
  moderate: "$$ Moderate",
  premium: "$$$ Premium",
  custom: "$$$$ Custom",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ballard-siding-refresh",
    title: "Ballard Exterior Refresh",
    subtitle: "Fiber-cement siding with weather-barrier continuity",
    trade: "Siding",
    location: "Ballard, Seattle",
    projectClass: "premium",
    hero: "/images/services/siding/siding.webp",
    gallery: [
      "/images/services/siding/siding.webp",
      "/images/services/siding/siding1.webp",
      "/images/services/siding/siding2.webp",
      "/images/services/siding/siding3.webp",
      "/images/services/siding/siding4.webp",
    ],
    challenge:
      "Aging cladding with moisture risk at window transitions and inconsistent prior repairs across multiple elevations.",
    approach:
      "Strip compromised areas, reinstate weather barrier continuity, install premium fiber-cement with proper flashing, and finish trim for a unified curb elevation.",
    process: [
      "Elevation survey and moisture check",
      "Selective demo and substrate repair",
      "Weather barrier + flashing detailing",
      "Panel install, trim, and final seal",
    ],
    outcome:
      "A weather-ready exterior with clean lines and documented transitions — built for PNW seasons, not just day-one photos.",
    services: ["siding", "paint"],
  },
  {
    slug: "queen-anne-fence-line",
    title: "Queen Anne Perimeter Fence",
    subtitle: "Custom cedar privacy run with grade-aware posts",
    trade: "Fencing",
    location: "Queen Anne, Seattle",
    projectClass: "moderate",
    hero: "/images/services/fencing/fencing.webp",
    gallery: [
      "/images/services/fencing/fencing.webp",
      "/images/services/fencing/fencing1.webp",
      "/images/services/fencing/fencing2.webp",
      "/images/services/fencing/fencing3.webp",
      "/images/services/fencing/fencing4.webp",
    ],
    challenge:
      "Sloped side yard requiring consistent top line while maintaining privacy height and solid gate swing clearances.",
    approach:
      "Stepped and racked sections where appropriate, oversized posts with proper footings, and gate hardware rated for wet-climate use.",
    process: [
      "Layout and grade stakes",
      "Post footing and set",
      "Rail and panel assembly",
      "Gate hang and latch tuning",
    ],
    outcome:
      "A continuous privacy edge that follows the land honestly — no wavy top rail, no leaning posts after the first wet season.",
    services: ["fencing"],
  },
  {
    slug: "capitol-hill-bath-tile",
    title: "Capitol Hill Bath Tile",
    subtitle: "Waterproofed wet-zone tile with precise layout",
    trade: "Tile",
    location: "Capitol Hill, Seattle",
    projectClass: "premium",
    hero: "/images/services/tile/tile.webp",
    gallery: [
      "/images/services/tile/tile.webp",
      "/images/services/tile/tile1.webp",
      "/images/services/tile/tile2.webp",
      "/images/services/tile/tile3.webp",
      "/images/services/tile/tile5.webp",
      "/images/services/tile/tile8.webp",
    ],
    challenge:
      "Small bath footprint demanding large-format tile without lippage, plus full wet-zone waterproofing before finish.",
    approach:
      "Membrane-first waterproofing, laser-leveled substrate, and layout that centers visual mass on the wet wall while controlling cuts at edges.",
    process: [
      "Demo and substrate evaluation",
      "Waterproof membrane system",
      "Layout dry-run and cut plan",
      "Set, grout, seal, and cure window",
    ],
    outcome:
      "A tight, waterproof tile envelope with clean joints — concept-to-craft without shortcuts on the invisible layers.",
    services: ["tile", "drywall", "paint"],
  },
  {
    slug: "fremont-flooring-run",
    title: "Fremont High-Traffic Floors",
    subtitle: "Laminate install across open living zones",
    trade: "Laminate",
    location: "Fremont, Seattle",
    projectClass: "moderate",
    hero: "/images/services/laminate/laminate.webp",
    gallery: [
      "/images/services/laminate/laminate.webp",
      "/images/services/laminate/laminate1.webp",
      "/images/services/laminate/laminate2.webp",
      "/images/services/laminate/laminate4.webp",
      "/images/services/laminate/laminate7.webp",
    ],
    challenge:
      "Open plan with mixed subfloor conditions and high daily traffic from kitchen through living zones.",
    approach:
      "Moisture check and leveling where needed, high wear-rated laminate, continuous run with expansion planned at transitions.",
    process: [
      "Subfloor prep and moisture readings",
      "Underlayment selection",
      "Direction planning and install",
      "Transitions, base, and punch",
    ],
    outcome:
      "A durable, continuous floor surface ready for real living — not a showroom that fails at the first doorway.",
    services: ["laminate"],
  },
  {
    slug: "wallingford-drywall-finish",
    title: "Wallingford Level-5 Finish",
    subtitle: "Full-room drywall for critical light conditions",
    trade: "Drywall",
    location: "Wallingford, Seattle",
    projectClass: "premium",
    hero: "/images/services/drywall/drywall.webp",
    gallery: [
      "/images/services/drywall/drywall.webp",
      "/images/services/drywall/drywall1.webp",
      "/images/services/drywall/drywall2.webp",
      "/images/services/drywall/drywall3.webp",
      "/images/services/drywall/drywall4.webp",
    ],
    challenge:
      "Large north-facing walls under grazing light that reveal every joint and sand mark — Level 5 required.",
    approach:
      "Proper hang and screw pattern, multi-coat compound with full dry cycles, skim for Level 5, and inspection lighting before paint.",
    process: [
      "Hang and fastener pattern",
      "Tape and build coats",
      "Skim and sand under work lights",
      "Prime readiness handoff",
    ],
    outcome:
      "Walls that disappear under paint — the finish standard that makes lighting and color actually work.",
    services: ["drywall", "paint"],
  },
  {
    slug: "greenwood-paint-envelope",
    title: "Greenwood Paint Envelope",
    subtitle: "Interior + exterior prep-first coating",
    trade: "Paint",
    location: "Greenwood, Seattle",
    projectClass: "moderate",
    hero: "/images/services/paint/paint.webp",
    gallery: [
      "/images/services/paint/paint.webp",
      "/images/services/siding/siding5.webp",
      "/images/services/drywall/drywall5.webp",
    ],
    challenge:
      "Mixed interior touch-up and exterior weathering requiring honest prep before any color went on.",
    approach:
      "Scraping and priming failed areas, sealing bare wood, then premium coats with weather-window scheduling for exterior elevations.",
    process: [
      "Surface assessment and scrape",
      "Prime and spot repair",
      "Cut-and-roll coats",
      "Detail trim and final walk",
    ],
    outcome:
      "A coherent paint envelope — interior crispness and exterior durability from prep, not from marketing coats.",
    services: ["paint"],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((p) => p.slug === slug);
}
