import { Sparkles, TrendingUp, Users, Target, DollarSign } from "lucide-react";

const TransformationSection = () => {
  const transformations = [
    {
      icon: TrendingUp,
      text: "Votre agenda se remplit plus régulièrement",
    },
    {
      icon: Target,
      text: "Votre message devient clair et reconnaissable",
    },
    {
      icon: Sparkles,
      text: "Vous gagnez en légitimité et en confiance",
    },
    {
      icon: Users,
      text: "Vous choisissez davantage vos clients",
    },
    {
      icon: DollarSign,
      text: "Vous stabilisez vos revenus et ouvrez la porte à la montée en gamme",
    },
  ];

  return (
    <section
      id="transformation"
      className="py-16 md:py-24 px-6 md:px-12 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Le changement que vous vivez
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Grâce à ce programme, vous posez des fondations solides pour votre
            activité : une offre phare claire, un site qui vous ressemble et qui
            attire les bonnes personnes, et des routines simples pour générer des
            demandes de rendez-vous régulièrement.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            Ce que ça change concrètement
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {transformations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-accent group"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {item.text}
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

export default TransformationSection;
