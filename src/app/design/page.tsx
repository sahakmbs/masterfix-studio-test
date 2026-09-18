import type { Metadata } from "next";
import { DesignStudio } from "@/components/design/DesignStudio";

export const metadata: Metadata = {
  title: "Remodel My Space",
  description:
    "Interactive remodeling studio — brief your space, playground finishes, concept visualization, then consult.",
};

export default function DesignPage() {
  return <DesignStudio />;
}
