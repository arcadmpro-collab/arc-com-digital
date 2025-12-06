import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ObjectionsSection />
        <SolutionSection />
        <HowItWorksSection />
        <WhoIsItForSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
