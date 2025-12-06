import { Download, Rocket, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      step: "Étape 1",
      title: "Téléchargez le guide",
      description: "Identifiez les erreurs qui bloquent votre visibilité",
    },
    {
      icon: Rocket,
      step: "Étape 2",
      title: "Passez à l'action",
      description: "Implémentez vos premières actions concrètes (message, offre ou site)",
    },
    {
      icon: Calendar,
      step: "Étape 3",
      title: "Réservez votre appel",
      description: "Obtenez un plan d'action personnalisé lors de votre appel découverte gratuit",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            3 étapes simples pour transformer votre visibilité
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>

          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-secondary font-bold text-sm uppercase tracking-wider">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
