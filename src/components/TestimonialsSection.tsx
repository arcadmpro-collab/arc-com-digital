import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Caroline L.",
      content: "J'ai eu la chance de travailler avec Coralie pour la création de mon site web. Elle a su rendre ma vision concrète, tester plusieurs mises en page et rendre le processus très agréable. Mon site reflète parfaitement qui je suis et mes offres. Une expérience incroyable !",
      stars: 5,
    },
    {
      name: "Julie S.",
      content: "Coralie est très professionnelle et à l'écoute. Grâce à son travail, mon message est clair et mon site attire vraiment les bons clients. Je recommande vivement !",
      stars: 5,
    },
    {
      name: "Muriel A.",
      content: "Coralie est organisée, créative et très rapide. Elle s'adapte à mes besoins et m'a aidée à mettre en valeur mon activité de coaching en ligne. Tous mes clients me font des compliments sur mon site. Je recommande à 200 % !",
      stars: 5,
    },
    {
      name: "Christelle L.",
      content: "Travailler avec Coralie est un vrai plaisir ! Elle est professionnelle, adorable et sait exactement ce qui fonctionne. Son accompagnement a fait toute la différence dans la présentation de mon activité.",
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
