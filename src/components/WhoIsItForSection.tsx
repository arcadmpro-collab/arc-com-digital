import { Check, X } from "lucide-react";

const WhoIsItForSection = () => {
  const forYou = [
    "Coachs de vie en lancement ou relance",
    "Coachs ayant du mal à remplir leur agenda malgré leurs compétences",
    "Coachs qui veulent se démarquer sans devenir marketeur",
  ];

  const notForYou = [
    "Vous ne souhaitez pas investir un minimum de temps pour améliorer votre visibilité",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Pour qui c'est fait ?
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* For You */}
          <div className="bg-background p-8 rounded-2xl shadow-lg border-l-4 border-accent">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </span>
              C'est pour vous si...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent font-bold text-xl mt-0.5">✓</span>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="bg-background p-8 rounded-2xl shadow-lg border-l-4 border-destructive/50">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              Ce n'est pas pour vous si...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-destructive font-bold text-xl mt-0.5">✗</span>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
