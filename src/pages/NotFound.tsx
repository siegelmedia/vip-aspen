import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const popularPages = [
  { label: "Rolls Royce Cullinan", to: "/rolls-royce-cullinan" },
  { label: "Aspen Airport Transfer", to: "/aspen-airport-transfer" },
  { label: "Denver to Aspen", to: "/denver-to-aspen-car-service" },
  { label: "Black Car Service", to: "/black-car-service" },
  { label: "Membership", to: "/membership" },
  { label: "Contact", to: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse VIP Aspen's luxury car service, airport transfers, and VIP services in Aspen, Colorado."
        keywords="VIP Aspen, luxury car service Aspen"
        canonicalUrl={location.pathname}
        robots="noindex, nofollow"
      />

      <main className="min-h-screen bg-background">
        <Header />

        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-6 text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">404</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-4">
              Page <span className="text-gradient-gold">Not Found</span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-xl mx-auto mb-10">
              The page you're looking for may have moved or doesn't exist.
            </p>

            <Button variant="luxury" size="lg" asChild>
              <Link to="/">Return Home</Link>
            </Button>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Popular <span className="text-gradient-gold">Pages</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="glass-card px-4 py-3 text-sm text-foreground/70 hover:text-primary transition-colors text-center rounded-sm"
                >
                  {page.label}
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-foreground/60 text-sm mb-2">Or call us directly:</p>
              <a
                href="tel:+19704526636"
                className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                (970) 452-6636
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default NotFound;
