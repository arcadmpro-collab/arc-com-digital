import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import TransformationSection from "@/components/TransformationSection";
import OfferSection from "@/components/OfferSection";
import CredibilitySection from "@/components/CredibilitySection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-mint/10">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <TransformationSection />
        <OfferSection />
        <CredibilitySection />
        <LeadMagnetSection />
        <ContactSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
