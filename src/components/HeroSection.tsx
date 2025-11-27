import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image with Colorful Arcs */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="relative">
              {/* Colored arc rings */}
              <div className="absolute inset-0 -m-8 rounded-full border-[12px] border-primary opacity-20"></div>
              <div className="absolute inset-0 -m-12 rounded-full border-[12px] border-secondary opacity-30"></div>
              <div className="absolute inset-0 -m-16 rounded-full border-[12px] border-accent opacity-30"></div>
              <div className="absolute inset-0 -m-20 rounded-full border-[12px] border-highlight opacity-30"></div>
              
              {/* Main circular image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={coachPortrait}
                  alt="Coach professionnelle"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Gagnez un flux régulier de{" "}
              <span className="text-secondary">clients alignés</span> grâce à
              une présence en ligne claire et professionnelle
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Finis les hauts et bas de l'activité, les messages flous et les
              demandes aléatoires : transformez votre communication pour attirer
              naturellement les bonnes personnes.
            </p>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 py-6 text-lg group"
            >
              Découvrir le programme
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="pt-6 space-y-3">
              <p className="font-semibold text-primary text-lg">
                Pour qui c'est idéal
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>Coachs de vie en lancement ou relance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>
                    Coachs qui ont du mal à remplir leur agenda malgré leurs
                    compétences
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold text-xl">✓</span>
                  <span>
                    Coachs qui veulent se démarquer sans se transformer en
                    marketeur
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
