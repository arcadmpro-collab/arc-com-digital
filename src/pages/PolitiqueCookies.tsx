import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolitiqueCookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-secondary hover:text-secondary/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-primary mb-8">
          Politique des Cookies
        </h1>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground mb-6">
            Dernière mise à jour : Décembre 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <p className="text-muted-foreground">
              Un cookie est un petit fichier texte déposé sur votre ordinateur,
              tablette ou smartphone lors de la visite d'un site web. Il permet
              au site de mémoriser des informations sur votre visite, comme
              votre langue préférée et d'autres paramètres.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Les cookies que nous utilisons
            </h2>
            <h3 className="text-xl font-medium text-primary mb-2">
              Cookies essentiels
            </h3>
            <p className="text-muted-foreground mb-4">
              Ces cookies sont nécessaires au fonctionnement du site. Ils vous
              permettent d'utiliser les principales fonctionnalités du site.
              Sans ces cookies, vous ne pourrez pas utiliser notre site
              normalement.
            </p>
            <h3 className="text-xl font-medium text-primary mb-2">
              Cookies analytiques
            </h3>
            <p className="text-muted-foreground">
              Ces cookies nous permettent de mesurer l'audience de notre site et
              d'améliorer son contenu. Les données collectées sont anonymes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Gestion des cookies
            </h2>
            <p className="text-muted-foreground">
              Vous pouvez à tout moment modifier vos préférences en matière de
              cookies via les paramètres de votre navigateur. La plupart des
              navigateurs vous permettent de refuser ou d'accepter les cookies,
              de supprimer les cookies existants ou d'être averti avant qu'un
              cookie ne soit stocké.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Contact
            </h2>
            <p className="text-muted-foreground">
              Pour toute question concernant notre politique des cookies, vous
              pouvez nous contacter à l'adresse : arcadm.pro@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueCookies;