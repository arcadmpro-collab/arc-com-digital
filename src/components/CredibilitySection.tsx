import { Award, Users, TrendingUp } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Pourquoi je peux vous aider
          </h2>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full"></div>
        </div>

        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            J'ai accompagné de nombreux coachs et entrepreneurs à structurer leur
            communication et à générer plus de visibilité grâce à des sites
            clairs et des parcours simples. Je connais vos défis et vos croyances
            limitantes, et je vous propose une approche honnête et respectueuse.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="text-center p-6 bg-background rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Expertise</h4>
              <p className="text-muted-foreground text-sm">
                Spécialisée dans l'accompagnement des coachs
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-bold text-primary mb-2">Résultats</h4>
              <p className="text-muted-foreground text-sm">
                Des clients satisfaits et des agendas remplis
              </p>
            </div>

            <div className="text-center p-6 bg-background rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-highlight/20 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-highlight-foreground" />
              </div>
              <h4 className="font-bold text-primary mb-2">Méthode</h4>
              <p className="text-muted-foreground text-sm">
                Une approche simple, efficace et bienveillante
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-2xl border-l-4 border-highlight">
            <p className="text-muted-foreground italic">
              <strong className="text-primary">Note :</strong> Les témoignages de
              coachs ayant suivi le programme, les chiffres concrets (nombre de
              demandes générées, taux de transformation) et les exemples de sites
              réalisés seront ajoutés prochainement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
