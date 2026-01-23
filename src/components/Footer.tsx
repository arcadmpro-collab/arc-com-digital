import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">TUNNELCOACH</h3>
          <p className="text-white/80">
            Accompagnement digital pour coachs de vie
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-sm">
          <Link
            to="/mentions-legales"
            className="text-white/70 hover:text-white transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            to="/confidentialite"
            className="text-white/70 hover:text-white transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link
            to="/politique-cookies"
            className="text-white/70 hover:text-white transition-colors"
          >
            Politique des cookies
          </Link>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-white/60 text-sm">
            © 2025 TUNNELCOACH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
