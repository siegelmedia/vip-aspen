import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/vip-aspen-logo.webp";
import { COMPANY } from "@/data/constants";

const fleetLinks = [
  { label: "Rolls Royce Cullinan", href: "/rolls-royce-cullinan" },
  { label: "Cadillac Escalade", href: "/cadillac-escalade" },
  { label: "Executive Sprinter", href: "/executive-sprinter" },
];

const transportationLinks = [
  { label: "Black Car Service", href: "/black-car-service" },
  { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
  { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
  { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
  { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
  { label: "Snowmass Transfers", href: "/snowmass-village-transfer" },
  { label: "Property Security Watch", href: "/property-watch" },
];

const entertainmentLinks = [
  { label: "Private Entertainment", href: "/private-entertainment" },
  { label: "Promotional Services", href: "/promotional-services" },
  { label: "VIP Club Access", href: "/aspen-clubs" },
  { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
  { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
  { label: "Executive Protection", href: "/executive-protection" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Membership", href: "/membership" },
  { label: "Security Assessment", href: "/security-assessment" },
];

const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
      {title}
    </h4>
    <nav className="flex flex-col gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className="text-foreground/60 hover:text-primary transition-colors text-sm"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/">
              <img src={logo} alt="VIP Aspen" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-foreground/50 text-sm mb-4">
              Aspen's premier luxury service provider. Backed by Aspen Security LLC.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <LinkColumn title="Fleet" links={fleetLinks} />
          <LinkColumn title="Transportation" links={transportationLinks} />
          <LinkColumn title="Entertainment" links={entertainmentLinks} />
          <LinkColumn title="Company" links={companyLinks} />
        </div>

        {/* SEO Paragraph */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <p className="text-foreground/40 text-sm leading-relaxed max-w-4xl">
            VIP Aspen is Aspen, Colorado's premier luxury car service and VIP concierge.
            We provide chauffeured Rolls Royce Cullinan, Cadillac Escalade, and Executive
            Sprinter service for airport transfers from ASE, Eagle, Rifle, and Denver airports.
            We also offer property security watch, private entertainment, promotional staffing,
            VIP nightlife access, executive protection, and membership programs. Serving Aspen,
            Snowmass Village, Basalt, Woody Creek, and the Roaring Fork Valley. Backed by
            Aspen Security LLC — a Colorado-licensed security company with veteran and law
            enforcement ownership. Available 24/7 —{" "}
            <a href={`tel:${COMPANY.phoneRaw}`} className="text-foreground/60 hover:text-primary transition-colors">
              call {COMPANY.phoneDisplay}
            </a>.
          </p>
        </div>

        {/* Address + Copyright */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <address
            className="not-italic text-foreground/40 text-sm flex items-start gap-2"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <span itemProp="streetAddress">{COMPANY.address.street}</span>,{" "}
              <span itemProp="addressLocality">{COMPANY.address.city}</span>,{" "}
              <span itemProp="addressRegion">{COMPANY.address.state}</span>{" "}
              <span itemProp="postalCode">{COMPANY.address.zip}</span>
            </span>
          </address>
          <p className="text-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} VIP Aspen. All rights reserved. A service of Aspen Security LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
