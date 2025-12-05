import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Confidentialite = () => {
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
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none text-foreground">
          <p className="text-muted-foreground mb-6">
            Dernière mise à jour : Décembre 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              1. Collecte des données
            </h2>
            <p className="text-muted-foreground">
              Nous collectons les informations que vous nous fournissez
              directement, notamment lorsque vous remplissez un formulaire de
              contact ou téléchargez notre guide gratuit. Ces informations
              peuvent inclure votre nom, votre adresse email et tout autre
              information que vous choisissez de nous communiquer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              2. Utilisation des données
            </h2>
            <p className="text-muted-foreground mb-4">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Répondre à vos demandes de contact</li>
              <li>Vous envoyer le guide gratuit demandé</li>
              <li>
                Vous tenir informé(e) de nos offres et actualités (avec votre
                consentement)
              </li>
              <li>Améliorer nos services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              3. Protection des données
            </h2>
            <p className="text-muted-foreground">
              Nous mettons en œuvre des mesures de sécurité appropriées pour
              protéger vos données personnelles contre tout accès non autorisé,
              modification, divulgation ou destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              4. Vos droits
            </h2>
            <p className="text-muted-foreground mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              5. Conservation des données
            </h2>
            <p className="text-muted-foreground">
              Nous conservons vos données personnelles aussi longtemps que
              nécessaire pour les finalités pour lesquelles elles ont été
              collectées, sauf si une durée de conservation plus longue est
              requise ou permise par la loi.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              6. Contact
            </h2>
            <p className="text-muted-foreground">
              Pour toute question concernant notre politique de confidentialité
              ou pour exercer vos droits, vous pouvez nous contacter à
              l'adresse : arcadm.pro@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Confidentialite;