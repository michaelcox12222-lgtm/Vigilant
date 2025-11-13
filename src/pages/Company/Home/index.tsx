import { Hero } from "./Hero";
import { ProblemsSection } from "./ProblemsSection";
import { BenefitsSection } from "./BenefitsSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { ProofSection } from "./ProofSection";
import { CTABand } from "./CTABand";
import { FAQSection } from "./FAQSection";

export function Home({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ProblemsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ProofSection />
      <CTABand onNavigate={onNavigate} />
      <FAQSection />
    </>
  );
}
