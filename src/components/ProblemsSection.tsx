import { AlertCircle } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    "Vous dépendez du bouche-à-oreille et des opportunités du moment",
    "Vous postez régulièrement mais les demandes restent irrégulières",
    "Vous avez la sensation que votre message n'est pas assez clair ou percutant",
    "Vous vous demandez si vous êtes vraiment légitime pour vous montrer davantage",
    "Vous repoussez la création d'un vrai site ou d'un système d'acquisition",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Vous vous reconnaissez si...
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <AlertCircle className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-foreground leading-relaxed pt-2">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
