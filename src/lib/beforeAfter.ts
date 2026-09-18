import type { BeforeAfterPair } from "@/components/ui/BeforeAfterSlider";

/** Paired comps from real trade photos (concept before/after using project imagery). */
export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: "siding",
    label: "Exterior siding",
    before: "/images/services/siding/siding3.webp",
    after: "/images/services/siding/siding.webp",
    beforeAlt: "Exterior elevation before siding refresh",
    afterAlt: "Completed premium siding elevation",
  },
  {
    id: "tile",
    label: "Tile finish",
    before: "/images/services/tile/tile4.webp",
    after: "/images/services/tile/tile.webp",
    beforeAlt: "Tile work in progress",
    afterAlt: "Completed custom tile installation",
  },
  {
    id: "flooring",
    label: "Flooring",
    before: "/images/services/laminate/laminate3.webp",
    after: "/images/services/laminate/laminate.webp",
    beforeAlt: "Flooring install in progress",
    afterAlt: "Completed laminate flooring",
  },
  {
    id: "fencing",
    label: "Fencing",
    before: "/images/services/fencing/fencing5.webp",
    after: "/images/services/fencing/fencing.webp",
    beforeAlt: "Fence line during construction",
    afterAlt: "Completed custom fence",
  },
  {
    id: "drywall",
    label: "Drywall",
    before: "/images/services/drywall/drywall2.webp",
    after: "/images/services/drywall/drywall.webp",
    beforeAlt: "Drywall finishing in progress",
    afterAlt: "Smooth finished drywall ready for paint",
  },
];
