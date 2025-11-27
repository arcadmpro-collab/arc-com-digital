import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import TransformationSection from "@/components/TransformationSection";
import OfferSection from "@/components/OfferSection";
import CredibilitySection from "@/components/CredibilitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <TransformationSection />
        <OfferSection />
        <CredibilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
