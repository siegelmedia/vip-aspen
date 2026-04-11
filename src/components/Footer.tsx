import { Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/vip-aspen-logo.webp";

const fleetLinks = [
  { label: "Rolls Royce Cullinan", href: "/rolls-royce-cullinan" },
  { label: "Cadillac Escalade", href: "/cadillac-escalade" },
  { label: "Executive Sprinter", href: "/executive-sprinter" },
];

const serviceLinks = [
  { label: "Black Car Service", href: "/black-car-service" },
  { label: "Aspen Airport Transfer", href: "/aspen-airport-transfer" },
  { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer" },
  { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer" },
  { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
  { label: "Snowmass Transfers", href: "/snowmass-village-transfer" },
  { label: "Executive Protection", href: "/executive-protection" },
  { label: "VIP Club Access", href: "/aspen-clubs" },
  { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
  { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
  { label: "Membership", href: "/membership" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <Link to="/">
              <img src={logo} alt="VIP Aspen" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-foreground/50 text-sm">
              Aspen's premier luxury service provider.
            </p>
          </div>

          {/* Our Fleet */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Our Fleet
            </h4>
            <nav className="flex flex-col gap-2">
              {fleetLinks.map((link) => (
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

          {/* Services */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
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

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+19704526636"
                className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                (970) 452-6636
              </a>
              <a
                href="mailto:info@vipaspen.com"
                className="text-foreground/60 hover:text-primary transition-colors text-sm"
              >
                info@vipaspen.com
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm uppercase tracking-wider">
              Location
            </h4>
            <address
              className="not-italic"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-start gap-2 text-foreground/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <span itemProp="streetAddress">411 E Main St, Suite 205H</span>
                  <br />
                  <span itemProp="addressLocality">Aspen</span>,{" "}
                  <span itemProp="addressRegion">CO</span>{" "}
                  <span itemProp="postalCode">81611</span>
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* SEO Paragraph */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <p className="text-foreground/40 text-sm leading-relaxed max-w-4xl">
            VIP Aspen is Aspen, Colorado's premier luxury car service. We provide chauffeured Rolls
            Royce Cullinan, Cadillac Escalade, and Executive Sprinter service for airport transfers
            from ASE, Eagle, Rifle, and Denver airports. We also offer VIP nightlife access,
            executive protection, and exclusive membership programs. Serving Aspen, Snowmass Village,
            Basalt, Woody Creek, and the Roaring Fork Valley. Available 24/7 — call{" "}
            <a href="tel:+19704526636" className="text-foreground/60 hover:text-primary transition-colors">
              (970) 452-6636
            </a>.
          </p>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} VIP Aspen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
