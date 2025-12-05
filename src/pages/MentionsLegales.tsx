import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
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
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Éditeur du site
            </h2>
            <p className="text-muted-foreground">
              Le site ARC'COM est édité par :<br />
              <br />
              <strong>ARC'COM</strong>
              <br />
              Email : arcadm.pro@gmail.com
              <br />
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Hébergement
            </h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par :<br />
              <br />
              <strong>Lovable</strong>
              <br />
              Site web : lovable.dev
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-muted-foreground">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos,
              graphismes) est la propriété exclusive d'ARC'COM ou de ses
              partenaires. Toute reproduction, représentation, modification,
              publication ou adaptation de tout ou partie des éléments du site
              est strictement interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Responsabilité
            </h2>
            <p className="text-muted-foreground">
              ARC'COM s'efforce de fournir des informations aussi précises que
              possible. Toutefois, elle ne pourra être tenue responsable des
              omissions, des inexactitudes et des carences dans la mise à jour,
              qu'elles soient de son fait ou du fait des tiers partenaires qui
              lui fournissent ces informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Liens hypertextes
            </h2>
            <p className="text-muted-foreground">
              Le site peut contenir des liens hypertextes vers d'autres sites.
              ARC'COM décline toute responsabilité quant au contenu de ces sites
              externes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Droit applicable
            </h2>
            <p className="text-muted-foreground">
              Le présent site et ses mentions légales sont régis par le droit
              français. En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              7. Contact
            </h2>
            <p className="text-muted-foreground">
              Pour toute question, vous pouvez nous contacter à l'adresse :
              arcadm.pro@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;