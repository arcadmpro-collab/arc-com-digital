import { X, Check } from "lucide-react";

const ObjectionsSection = () => {
  const objections = [
    { wrong: "Être un expert en marketing", right: "Un message clair et authentique" },
    { wrong: "Dépenser des milliers d'euros", right: "Des actions simples et ciblées" },
    { wrong: "Créer un site parfait", right: "Un site qui vous ressemble et convertit" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Pas besoin d'être un expert en marketing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pour améliorer votre visibilité et attirer vos clients idéaux, vous n'avez pas besoin de :
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {objections.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* What you don't need */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-muted-foreground line-through pt-1">{item.wrong}</p>
                </div>
                
                {/* What you need */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-primary font-semibold pt-1">{item.right}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
