export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  timeline: string;
  costDrivers: string[];
  materials: string;
  mistakes: string[];
  images: string[];
  hero: string;
  category: "exterior" | "interior" | "finish";
};

export const services: Service[] = [
  {
    slug: "siding",
    name: "Premium Exterior Siding",
    short: "PNW weather durability + curb appeal",
    intro:
      "Exterior siding built for Seattle rain, wind, and seasonal swings — clean lines, sealed transitions, and finishes that hold up year after year.",
    timeline: "Typically 1–3 weeks depending on elevation count and prep",
    costDrivers: [
      "Square footage and story height",
      "Substrate repair / weather barrier work",
      "Material grade (fiber cement, engineered wood, composite)",
      "Trim, corners, and architectural detailing",
    ],
    materials:
      "Fiber cement, engineered wood, and composite systems selected for Pacific Northwest exposure.",
    mistakes: [
      "Skipping weather-barrier continuity",
      "Poor flashing at windows and transitions",
      "Installing over unresolved rot or moisture issues",
    ],
    images: [
      "/images/services/siding/siding.webp",
      "/images/services/siding/siding1.webp",
      "/images/services/siding/siding2.webp",
      "/images/services/siding/siding3.webp",
      "/images/services/siding/siding4.webp",
      "/images/services/siding/siding5.webp",
      "/images/services/siding/siding6.webp",
      "/images/services/siding/siding7.webp",
    ],
    hero: "/images/services/siding/siding.webp",
    category: "exterior",
  },
  {
    slug: "fencing",
    name: "Custom Fencing & Perimeter",
    short: "Privacy, security, and site definition",
    intro:
      "Custom fencing that defines property edges with craft — privacy screens, gates, and durable posts set for Seattle soils and weather.",
    timeline: "Typically 3–10 days depending on linear footage and gates",
    costDrivers: [
      "Linear footage and height",
      "Gate count and hardware",
      "Post footing conditions",
      "Material (cedar, composite, metal accents)",
    ],
    materials: "Cedar, composite, and hybrid systems with corrosion-resistant hardware.",
    mistakes: [
      "Undersized posts or shallow footings",
      "Ignoring grade changes along the run",
      "Cheap hardware that fails in wet climates",
    ],
    images: [
      "/images/services/fencing/fencing.webp",
      "/images/services/fencing/fencing1.webp",
      "/images/services/fencing/fencing2.webp",
      "/images/services/fencing/fencing3.webp",
      "/images/services/fencing/fencing4.webp",
      "/images/services/fencing/fencing5.webp",
      "/images/services/fencing/fencing6.webp",
      "/images/services/fencing/fencing7.webp",
    ],
    hero: "/images/services/fencing/fencing.webp",
    category: "exterior",
  },
  {
    slug: "tile",
    name: "Custom Tile Work",
    short: "Precise layout, waterproofing, lasting finish",
    intro:
      "Tile installations where layout, substrate, and waterproofing matter as much as the surface — baths, kitchens, entries, and commercial wet areas.",
    timeline: "Typically 3–14 days depending on area and pattern complexity",
    costDrivers: [
      "Square footage and pattern complexity",
      "Waterproofing system requirements",
      "Tile size, cut density, and specialty pieces",
      "Substrate prep and leveling",
    ],
    materials:
      "Porcelain, ceramic, and natural stone with appropriate thinset, membranes, and grout systems.",
    mistakes: [
      "Skipping proper waterproofing in wet zones",
      "Uneven substrate leading to lippage",
      "Rushing cure times before exposure to water",
    ],
    images: [
      "/images/services/tile/tile.webp",
      "/images/services/tile/tile1.webp",
      "/images/services/tile/tile2.webp",
      "/images/services/tile/tile3.webp",
      "/images/services/tile/tile4.webp",
      "/images/services/tile/tile5.webp",
      "/images/services/tile/tile6.webp",
      "/images/services/tile/tile7.webp",
      "/images/services/tile/tile8.webp",
      "/images/services/tile/tile9.webp",
      "/images/services/tile/tile10.webp",
      "/images/services/tile/tile11.webp",
      "/images/services/tile/tile12.webp",
      "/images/services/tile/tile13.webp",
    ],
    hero: "/images/services/tile/tile.webp",
    category: "interior",
  },
  {
    slug: "laminate",
    name: "High-Traffic Laminate Flooring",
    short: "Durable floors for real living",
    intro:
      "Laminate and engineered flooring chosen for high-traffic durability — clean transitions, proper underlayment, and finishes that survive daily use.",
    timeline: "Typically 2–7 days depending on square footage and prep",
    costDrivers: [
      "Square footage and room count",
      "Subfloor leveling and moisture mitigation",
      "Product wear rating and thickness",
      "Transitions, stairs, and trim",
    ],
    materials:
      "High-AC-rated laminate and engineered products with moisture-appropriate underlayment.",
    mistakes: [
      "Installing over uneven or damp subfloors",
      "Insufficient expansion gaps",
      "Cheap transitions that telegraph movement",
    ],
    images: [
      "/images/services/laminate/laminate.webp",
      "/images/services/laminate/laminate1.webp",
      "/images/services/laminate/laminate2.webp",
      "/images/services/laminate/laminate3.webp",
      "/images/services/laminate/laminate4.webp",
      "/images/services/laminate/laminate5.webp",
      "/images/services/laminate/laminate6.webp",
      "/images/services/laminate/laminate7.webp",
      "/images/services/laminate/laminate8.webp",
      "/images/services/laminate/laminate9.webp",
      "/images/services/laminate/laminate10.webp",
      "/images/services/laminate/laminate11.webp",
      "/images/services/laminate/laminate12.webp",
    ],
    hero: "/images/services/laminate/laminate.webp",
    category: "interior",
  },
  {
    slug: "drywall",
    name: "Flawless Drywall Finishing",
    short: "Smooth walls that take paint beautifully",
    intro:
      "Drywall hanging, taping, and finishing to levels that disappear under paint — repairs, full rooms, and commercial build-outs.",
    timeline: "Typically 2–10 days including dry and sand cycles",
    costDrivers: [
      "Square footage and ceiling height",
      "Finish level (Level 4 vs Level 5)",
      "Repair vs new hang",
      "Texture match requirements",
    ],
    materials: "Quality board, joint compounds, and corner systems matched to the finish level.",
    mistakes: [
      "Rushing dry times between coats",
      "Poor lighting during sanding inspection",
      "Mismatched texture on repairs",
    ],
    images: [
      "/images/services/drywall/drywall.webp",
      "/images/services/drywall/drywall1.webp",
      "/images/services/drywall/drywall2.webp",
      "/images/services/drywall/drywall3.webp",
      "/images/services/drywall/drywall4.webp",
      "/images/services/drywall/drywall5.webp",
      "/images/services/drywall/drywall6.webp",
    ],
    hero: "/images/services/drywall/drywall.webp",
    category: "finish",
  },
  {
    slug: "paint",
    name: "Professional Interior & Exterior Paint",
    short: "Prep-first finishes that last",
    intro:
      "Interior and exterior painting where prep and product selection drive longevity — crisp lines, sealed surfaces, and color that holds.",
    timeline: "Typically 2–8 days depending on scope and weather windows",
    costDrivers: [
      "Surface area and story height",
      "Prep intensity (scraping, priming, repairs)",
      "Coat count and product grade",
      "Trim, doors, and detail work",
    ],
    materials:
      "Premium interior and exterior coatings selected for substrate and PNW exposure.",
    mistakes: [
      "Painting over unresolved moisture or peel",
      "Skipping primer on repairs and bare wood",
      "Thin coats that fail early in weather",
    ],
    images: ["/images/services/paint/paint.webp"],
    hero: "/images/services/paint/paint.webp",
    category: "finish",
  },
];

/** Kitchen / bath / addition shells that map to real trades */
export const remodelShells = [
  {
    slug: "kitchen",
    name: "Kitchen Remodel",
    short: "Floors, tile, paint, and finish coordination",
    mapsTo: ["laminate", "tile", "paint", "drywall"],
    intro:
      "Kitchen transformations through the trades we execute — flooring, tile backsplashes, drywall, and paint — coordinated for a cohesive result. Full cabinetry and plumbing partnerships as needed.",
  },
  {
    slug: "bathroom",
    name: "Bathroom Remodel",
    short: "Waterproof tile, drywall, paint, floors",
    mapsTo: ["tile", "drywall", "paint", "laminate"],
    intro:
      "Bath remodels centered on waterproofing, precise tile, drywall, and finish paint — the wet-area work that determines longevity.",
  },
  {
    slug: "addition",
    name: "Addition & Expansion Support",
    short: "Exterior skin + interior finishes",
    mapsTo: ["siding", "drywall", "paint", "laminate"],
    intro:
      "Addition and expansion support focused on exterior envelope (siding) and interior finish systems — drywall, paint, and flooring — integrated with your GC or design team.",
  },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
