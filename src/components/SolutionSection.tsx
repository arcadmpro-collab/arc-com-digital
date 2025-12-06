import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SolutionSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    <section className="py-16 md:py-24 px-6 md:px-12 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Voici comment je vous accompagne
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Téléchargez le guide gratuit pour identifier vos blocages, puis bénéficiez d'un accompagnement personnalisé pour clarifier votre message, créer un site professionnel et mettre en place une routine de visibilité efficace.
          </p>
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 md:p-12 rounded-3xl border border-primary/10">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 text-base border-2 border-primary/20 focus:border-primary rounded-full px-6"
              />
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-highlight hover:bg-highlight/90 text-primary font-bold h-14 px-8 rounded-full group whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? "Envoi..." : "Télécharger le guide gratuit"}
                <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
