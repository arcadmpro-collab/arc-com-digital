import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
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
    <section id="hero" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Urgency Banner */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-highlight/20 rounded-full border border-highlight/30">
            <span className="text-primary font-semibold text-sm md:text-base">
              ✨ Téléchargez maintenant le guide gratuit et commencez à attirer vos clients alignés dès cette semaine !
            </span>
          </div>
        </div>

        <div className="mt-16 md:mt-0">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Identifiez vos blocages, clarifiez votre message et{" "}
              <span className="text-secondary">remplissez votre agenda</span> avec des clients alignés
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez les 7 erreurs qui bloquent votre visibilité et comment les corriger facilement
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-sm font-medium text-primary">
                ✨ Téléchargez le guide maintenant et commencez à attirer vos clients dès cette semaine !
              </p>
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
              <p className="text-xs text-muted-foreground pl-2">
                En téléchargeant ce guide, vous acceptez de recevoir nos conseils par email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
