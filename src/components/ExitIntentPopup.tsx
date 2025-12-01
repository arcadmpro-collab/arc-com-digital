import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import livreImage from "@/assets/livre-7-erreurs-new.jpg";
import { supabase } from "@/integrations/supabase/client";

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const { error } = await supabase.functions.invoke("send-to-sheet", {
          body: { email },
        });

        if (error) throw error;

        toast({
          title: "Merci !",
          description: "Vous allez recevoir votre guide par email dans quelques instants.",
        });
        setEmail("");
        setIsOpen(false);
      } catch (error) {
        console.error("Error submitting email:", error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden border-4 border-primary/20">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-mint/10 p-8 flex items-center justify-center">
            <img
              src={livreImage}
              alt="Les 7 erreurs qui bloquent la visibilité des coachs de vie"
              className="w-full max-w-xs rounded-xl shadow-2xl"
            />
          </div>

          {/* Contenu */}
          <div className="p-8 space-y-6">
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div className="inline-block px-3 py-1 bg-highlight/20 rounded-full mb-3">
                  <span className="text-primary font-semibold text-xs">
                    AVANT DE PARTIR...
                  </span>
                </div>
              </div>
              <DialogTitle className="text-3xl font-bold text-primary leading-tight">
                Recevez votre guide gratuit
              </DialogTitle>
              <DialogDescription className="text-base text-muted-foreground pt-2">
                Découvrez les 7 erreurs qui vous empêchent d'attirer plus de
                clients alignés
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold text-lg">✓</span>
                <span className="text-sm text-foreground">
                  Les blocages invisibles de votre visibilité
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold text-lg">✓</span>
                <span className="text-sm text-foreground">
                  Comment clarifier votre message
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-secondary font-bold text-lg">✓</span>
                <span className="text-sm text-foreground">
                  Des actions concrètes et immédiates
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 text-base border-2 border-primary/20 focus:border-primary"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 group disabled:opacity-50"
              >
                {isSubmitting ? "Envoi en cours..." : "Télécharger le guide gratuit"}
                <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Aucun spam. Désinscription possible à tout moment.
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
