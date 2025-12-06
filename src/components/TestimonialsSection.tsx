import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Coach en développement personnel",
      content: "Grâce au guide et à l'accompagnement, j'ai enfin compris pourquoi je n'attirais pas les bons clients. Mon agenda commence à se remplir !",
      stars: 5,
    },
    {
      name: "Sophie D.",
      role: "Coach de vie certifiée",
      content: "Le guide m'a permis d'identifier mes erreurs et l'appel découverte m'a donné un plan d'action concret. Je recommande à 100% !",
      stars: 5,
    },
    {
      name: "Julie M.",
      role: "Coach en transition de carrière",
      content: "Enfin une approche humaine et sans pression ! Mon message est maintenant clair et mon site reflète vraiment qui je suis.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ce qu'en disent les coachs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Des coachs comme vous ont transformé leur visibilité
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-secondary" />
                </div>
              </div>

              <div className="pt-4 space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
