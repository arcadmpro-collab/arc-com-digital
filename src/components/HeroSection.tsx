import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import coachPortrait from "@/assets/coach-portrait.png";
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

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Image with Colorful Arcs */}
          <div className="flex justify-center order-1 md:col-span-2">
            <div className="relative">
              {/* Colored arc rings */}
              <div className="absolute inset-0 -m-8 rounded-full border-[12px] border-primary opacity-20"></div>
              <div className="absolute inset-0 -m-12 rounded-full border-[12px] border-secondary opacity-30"></div>
              <div className="absolute inset-0 -m-16 rounded-full border-[12px] border-accent opacity-30"></div>
              <div className="absolute inset-0 -m-20 rounded-full border-[12px] border-highlight opacity-30"></div>
              
              {/* Main circular image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={coachPortrait}
                  alt="Coach professionnelle"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 space-y-6 md:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Identifiez vos blocages, clarifiez votre message et remplissez votre agenda avec des{" "}
              <span className="text-secondary">clients alignés</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez les 7 erreurs qui bloquent votre visibilité et comment les corriger facilement
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
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
