import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import livreImage from "@/assets/livre-7-erreurs.png";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Merci !",
        description: "Vous allez recevoir votre guide par email dans quelques instants.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-mint/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image du livre */}
          <div className="flex justify-center order-1 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-highlight/20 blur-3xl"></div>
              <img
                src={livreImage}
                alt="Les 7 erreurs qui bloquent la visibilité des coachs de vie"
                className="relative w-full max-w-md rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="order-2 md:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-highlight/20 rounded-full">
              <span className="text-primary font-semibold text-sm">
                GUIDE GRATUIT
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Les <span className="text-highlight">7 erreurs</span> qui
              bloquent la visibilité des coachs de vie
            </h2>

            <p className="text-lg text-muted-foreground">
              Guide pratique pour coachs qui veulent attirer plus de clients
              alignés
            </p>

            <div className="space-y-3 py-4">
              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-foreground">
                  Identifiez les blocages invisibles qui vous empêchent d'être
                  trouvé
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-foreground">
                  Découvrez comment clarifier votre message pour attirer les
                  bons clients
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-secondary font-bold text-xl">✓</span>
                <span className="text-foreground">
                  Recevez des actions concrètes à mettre en place dès
                  aujourd'hui
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 text-base border-2 border-primary/20 focus:border-primary"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-8 group whitespace-nowrap"
                >
                  Télécharger le guide
                  <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                En téléchargeant ce guide, vous acceptez de recevoir nos
                conseils par email. Désinscription possible à tout moment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
