import { MessageCircle, Globe, Eye, Heart } from "lucide-react";

const OfferSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Sessions personnalisées",
      description:
        "Des sessions individuelles pour clarifier votre message et structurer votre offre",
    },
    {
      icon: Globe,
      title: "Création de site professionnel",
      description:
        "Un site web pensé pour attirer et convertir vos clients idéaux",
    },
    {
      icon: Eye,
      title: "Routines de visibilité",
      description:
        "Des routines simples pour rester visible sans vous épuiser",
    },
    {
      icon: Heart,
      title: "Accompagnement bienveillant",
      description:
        "Un accompagnement humain et bienveillant, sans jargon ni pression",
    },
  ];

  return (
    <section id="offre" className="py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comment je vous accompagne
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Je vous guide pas à pas pour clarifier votre offre, construire un
            site professionnel et mettre en place des routines de visibilité
            adaptées à votre rythme et vos valeurs.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            En travaillant ensemble, vous bénéficierez de :
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-secondary group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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

export default OfferSection;
