import { BookOpen, CheckCircle2, Target, Sparkles } from "lucide-react";
import livreImage from "@/assets/livre-7-erreurs-new.jpg";

const WhatYouGetSection = () => {
  const benefits = [
    {
      icon: BookOpen,
      text: "Guide complet : Les 7 erreurs qui bloquent la visibilité des coachs de vie",
    },
    {
      icon: CheckCircle2,
      text: "Checklist et modèles pratiques inclus dans le guide",
    },
    {
      icon: Target,
      text: "Actions concrètes à mettre en place immédiatement",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ce que vous allez obtenir
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-highlight/20 blur-3xl"></div>
              <img
                src={livreImage}
                alt="Les 7 erreurs qui bloquent la visibilité des coachs de vie"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed pt-2">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Transformation Promise */}
            <div className="bg-card p-6 rounded-2xl border-2 border-highlight/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-highlight/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-highlight" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">La transformation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Vous serez capable d'identifier vos blocages et de commencer à attirer des clients alignés grâce à un message clair et un site optimisé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
