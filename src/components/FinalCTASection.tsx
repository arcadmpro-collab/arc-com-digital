import { Button } from "@/components/ui/button";
import { Calendar, Heart, Shield } from "lucide-react";

const FinalCTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const guarantees = [
    {
      icon: Heart,
      text: "Accompagnement humain et bienveillant",
    },
    {
      icon: Shield,
      text: "Sans pression et adapté à votre rythme",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt(e) à transformer votre visibilité et à remplir votre agenda ?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Réservez votre appel découverte gratuit de 30 minutes pour obtenir un plan d'action personnalisé.
        </p>

        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-highlight hover:bg-highlight/90 text-primary font-bold rounded-full px-6 md:px-10 py-6 md:py-7 text-base md:text-lg group shadow-xl hover:shadow-2xl transition-all max-w-full"
        >
          <Calendar className="mr-2 w-5 h-5 md:w-6 md:h-6 shrink-0" />
          <span className="hidden sm:inline">Réservez votre appel</span>
          <span className="sm:hidden">Réservez votre appel gratuit</span>
        </Button>

        {/* Guarantees */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Icon className="w-5 h-5 text-highlight" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
