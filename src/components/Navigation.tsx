import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="gradient-hero py-6 px-6 md:px-12 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-bold text-white">
          TUNNELCOACH
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white hover:text-highlight transition-colors font-medium"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("offre")}
            className="text-white hover:text-highlight transition-colors font-medium"
          >
            L'offre
          </button>
          <button
            onClick={() => scrollToSection("transformation")}
            className="text-white hover:text-highlight transition-colors font-medium"
          >
            Résultats
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="bg-highlight text-primary hover:bg-highlight/90 font-semibold rounded-full px-6"
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-6 pb-4 flex flex-col gap-4 animate-fade-in">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white hover:text-highlight transition-colors font-medium text-left"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("offre")}
            className="text-white hover:text-highlight transition-colors font-medium text-left"
          >
            L'offre
          </button>
          <button
            onClick={() => scrollToSection("transformation")}
            className="text-white hover:text-highlight transition-colors font-medium text-left"
          >
            Résultats
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            className="bg-highlight text-primary hover:bg-highlight/90 font-semibold rounded-full w-full"
          >
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
