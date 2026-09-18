import { Hero } from "@/components/home/Hero";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ExploreRemodel } from "@/components/home/ExploreRemodel";
import { DesignCTA } from "@/components/home/DesignCTA";
import { CaseStudiesTeaser } from "@/components/home/CaseStudiesTeaser";
import { BuiltDifferently } from "@/components/home/BuiltDifferently";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StandardsSection } from "@/components/home/StandardsSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfterSection />
      <ExploreRemodel />
      <DesignCTA />
      <CaseStudiesTeaser />
      <BuiltDifferently />
      <ProcessSection />
      <StandardsSection />
      <FinalCTA />
    </>
  );
}
