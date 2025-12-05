import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground">
            Nous utilisons des cookies pour améliorer votre expérience sur notre
            site. En continuant à naviguer, vous acceptez notre{" "}
            <Link
              to="/politique-cookies"
              className="text-secondary hover:underline"
            >
              politique des cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={refuseCookies}
            className="text-muted-foreground"
          >
            Refuser
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            Accepter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;