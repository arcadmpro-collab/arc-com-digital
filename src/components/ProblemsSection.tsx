import { AlertCircle } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    "Vous dépendez du bouche-à-oreille et des opportunités du moment",
    "Vous postez régulièrement mais les demandes restent irrégulières",
    "Vous avez la sensation que votre message n'est pas assez clair ou percutant",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vous vous reconnaissez si...
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-highlight flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <p className="text-white leading-relaxed pt-2">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
