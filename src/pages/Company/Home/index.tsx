import { Hero } from "./Hero";
import { ProblemsSection } from "./ProblemsSection";
import { BenefitsSection } from "./BenefitsSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { ProofSection } from "./ProofSection";
import { CTABand } from "./CTABand";
import { FAQSection } from "./FAQSection";

export function Home() {
  return (
    <>
      <Hero />
      <ProblemsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ProofSection />
      <CTABand />
      <FAQSection />
    </>
  );
}
