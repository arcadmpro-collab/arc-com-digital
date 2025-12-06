import { AlertCircle, UserX, MessageSquareOff, Globe, Users } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: UserX,
      text: "Les clients ne vous contactent pas régulièrement",
    },
    {
      icon: MessageSquareOff,
      text: "Votre message est flou ou trop général",
    },
    {
      icon: Globe,
      text: "Votre site web ne convertit pas",
    },
    {
      icon: Users,
      text: "Vous dépendez du bouche-à-oreille",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 gradient-hero">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Vous êtes coach de vie et vous avez du mal à remplir votre agenda malgré vos compétences ?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Voici les frustrations courantes :
          </p>
          <div className="w-24 h-1 bg-highlight mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-highlight flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-white leading-relaxed font-medium">{problem.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
