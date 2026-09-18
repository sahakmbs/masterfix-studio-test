export type ProjectClassBand = "moderate" | "premium" | "custom";

export type ConfiguratorState = {
  spaceType: string;
  styleDirection: string;
  changes: string[];
  floor: string;
  cabinets: string;
  counter: string;
  style: string;
  projectClass: ProjectClassBand;
  notes: string;
  photoName: string | null;
  mode: "residential" | "commercial";
};

export const defaultConfigurator: ConfiguratorState = {
  spaceType: "",
  styleDirection: "",
  changes: [],
  floor: "oak-natural",
  cabinets: "warm-white",
  counter: "quartz-soft",
  style: "pacific-modern",
  projectClass: "premium",
  notes: "",
  photoName: null,
  mode: "residential",
};

export const spaceTypes = [
  "Kitchen",
  "Bathroom",
  "Living / open plan",
  "Exterior elevation",
  "Full home refresh",
  "Commercial suite",
  "Other",
];

export const styleDirections = [
  "Pacific Modern",
  "Warm Minimal",
  "Classic PNW",
  "Industrial Soft",
  "Coastal Neutral",
];

export const changeOptions = [
  "Flooring",
  "Tile / wet surfaces",
  "Paint / finish",
  "Drywall / walls",
  "Siding / exterior",
  "Fencing / perimeter",
  "Layout feel (concept only)",
];

export const floorOptions = [
  { id: "oak-natural", label: "Natural oak laminate", swatch: "#c4a574" },
  { id: "walnut-deep", label: "Deep walnut", swatch: "#5c4033" },
  { id: "ash-light", label: "Light ash", swatch: "#d9d2c5" },
  { id: "slate-gray", label: "Slate gray", swatch: "#6b7280" },
];

export const cabinetOptions = [
  { id: "warm-white", label: "Warm white", swatch: "#f5f0e8" },
  { id: "sage", label: "Sage", swatch: "#8a9a7b" },
  { id: "charcoal", label: "Charcoal", swatch: "#2a303c" },
  { id: "natural-wood", label: "Natural wood", swatch: "#b08968" },
];

export const counterOptions = [
  { id: "quartz-soft", label: "Soft quartz", swatch: "#e8e4dc" },
  { id: "marble-vein", label: "Veined marble look", swatch: "#d4d0c8" },
  { id: "concrete", label: "Concrete", swatch: "#9ca3af" },
  { id: "dark-stone", label: "Dark stone", swatch: "#3f4450" },
];

export const styleOptions = [
  { id: "pacific-modern", label: "Pacific Modern" },
  { id: "warm-minimal", label: "Warm Minimal" },
  { id: "classic-pnw", label: "Classic PNW" },
  { id: "industrial-soft", label: "Industrial Soft" },
];

export const classBands: {
  id: ProjectClassBand;
  label: string;
  dollars: string;
  desc: string;
}[] = [
  {
    id: "moderate",
    label: "Moderate",
    dollars: "$$",
    desc: "Focused scope, durable mid-tier materials, efficient install.",
  },
  {
    id: "premium",
    label: "Premium",
    dollars: "$$$",
    desc: "Elevated materials, tighter detailing, fuller finish quality.",
  },
  {
    id: "custom",
    label: "Custom",
    dollars: "$$$$",
    desc: "Complex detailing, specialty finishes, tailored sequencing.",
  },
];

export function configuratorToJson(state: ConfiguratorState) {
  return JSON.stringify(state, null, 2);
}
