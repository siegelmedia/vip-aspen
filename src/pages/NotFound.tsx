import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";
import SiteShell from "@/components/site/SiteShell";
import PageHero from "@/components/layout/PageHero";
import { COMPANY } from "@/data/constants";
import { TEL_HREF } from "@/data/site";

const popularPages = [
  { label: "Home", to: "/" },
  { label: "Rolls Royce Cullinan", to: "/rolls-royce-cullinan" },
  { label: "Aspen Airport Transfer", to: "/aspen-airport-transfer" },
  { label: "Denver to Aspen", to: "/denver-to-aspen-car-service" },
  { label: "Black Car Service", to: "/black-car-service" },
  { label: "Membership", to: "/membership" },
  { label: "Contact", to: "/contact" },
  { label: "Travel Guides", to: "/guides" },
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
        robots="noindex, nofollow"
      />

      <SiteShell>
        <PageHero
          data={{
            tagline: "Error 404",
            headline: "Page {{Not Found}}",
            description: "The page you're looking for may have moved or doesn't exist.",
            ctaLabel: "Return Home",
            ctaLink: "/",
          }}
          crumbs={[{ name: "Home", href: "/" }, { name: "Page not found" }]}
        />

        <section className="sec sec--paper">
          <div className="wrap">
            <p className="eyebrow">Popular pages</p>
            <h2 className="h2">These will get you where you are going</h2>
            <nav className="rel" aria-label="Popular pages">
              {popularPages.map((page) => (
                <Link key={page.to} to={page.to}>
                  <span>{page.label}</span>
                  <i aria-hidden="true">&rarr;</i>
                </Link>
              ))}
            </nav>
            <p className="note">
              Or call us directly: <a href={TEL_HREF}>{COMPANY.phoneDisplay}</a>
            </p>
          </div>
        </section>
      </SiteShell>
    </>
  );
};

export default NotFound;
