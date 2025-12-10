import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Caroline Leroux",
      content: "J'ai eu la chance de bénéficier des services de Coralie, qui a créé le site internet de mon entreprise. Je n'aurais pas pu trouver meilleure professionnelle ! Prix imbattables ! Rend la création de site enfin accessible aux jeunes entreprises. Très à l'écoute, très investie, agréable, n'hésite pas à tester nombre d'effets et mises en page pour que nous puissions visualiser et choisir ce qui nous plaît le plus.",
      stars: 5,
    },
    {
      name: "Fezai Choko",
      content: "Je recommande vivement ! Super développeuse ! Elle connaît très bien le marketing. Grâce à son travail, on a gagné beaucoup de visibilité et de nouveaux clients. Très pro et sympa, je recommande à 100 % !",
      stars: 5,
    },
    {
      name: "Muriel Arquey",
      content: "Coralie est une personne extrêmement bienveillante et à l'écoute de mes besoins. Elle s'adapte à chaque personne et à chaque demande avec calme et patience. Elle est organisée et structurée ce qui est très rassurant. Elle s'est occupée de mon site et de mes réseaux d'une façon prodigieuse ! Tout le monde me fait des compliments dessus. Je la recommande à 200% !!",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ils ont transformé leur visibilité en ligne
          </h2>
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
