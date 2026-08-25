import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/vip-aspen-logo.webp";
import { COMPANY } from "@/data/constants";

/**
 * Footer sitemap — four columns of EXACTLY eight links each so the columns
 * render at matching heights. Every indexable route is covered between these
 * four columns and the utility links in the bottom bar.
 */
const footerColumns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Car Service",
    links: [
      { label: "Black Car Service", href: "/black-car-service" },
      { label: "Hourly Chauffeur", href: "/hourly-chauffeur" },
      { label: "Multi-Day Chauffeur", href: "/multi-day-chauffeur" },
      { label: "Private Ski Transfers", href: "/private-ski-transfers" },
      { label: "Event Transportation", href: "/special-event-transportation" },
      { label: "Wedding Transportation", href: "/aspen-wedding-transportation" },
      { label: "Corporate Transportation", href: "/aspen-corporate-transportation" },
      { label: "Rates & Pricing", href: "/rates" },
    ],
  },
  {
    title: "Airports & Routes",
    links: [
      { label: "Aspen Airport (ASE)", href: "/aspen-airport-transfer" },
      { label: "Eagle Airport (EGE)", href: "/eagle-airport-transfer" },
      { label: "Rifle Airport (RIL)", href: "/rifle-airport-transfer" },
      { label: "Private Jet / FBO", href: "/aspen-private-jet-transfer" },
      { label: "Denver to Aspen", href: "/denver-to-aspen-car-service" },
      { label: "Vail to Aspen", href: "/vail-to-aspen-car-service" },
      { label: "Beaver Creek to Aspen", href: "/beaver-creek-to-aspen-car-service" },
      { label: "Glenwood Springs to Aspen", href: "/glenwood-springs-to-aspen-car-service" },
    ],
  },
  {
    title: "Resorts & Occasions",
    links: [
      { label: "Snowmass Village", href: "/snowmass-village-transfer" },
      { label: "Hotel Jerome", href: "/hotel-jerome-transportation" },
      { label: "St. Regis Aspen", href: "/st-regis-aspen-transportation" },
      { label: "The Little Nell", href: "/little-nell-transportation" },
      { label: "Food & Wine Classic", href: "/aspen-food-and-wine-transportation" },
      { label: "New Year's Eve & Holiday", href: "/aspen-new-years-eve-transportation" },
      { label: "VIP Club Access", href: "/aspen-clubs" },
      { label: "Travel Guides", href: "/guides" },
    ],
  },
  {
    title: "Fleet & Company",
    links: [
      { label: "Rolls-Royce Cullinan", href: "/rolls-royce-cullinan" },
      { label: "Cadillac Escalade", href: "/cadillac-escalade" },
      { label: "Executive Sprinter", href: "/executive-sprinter" },
      { label: "Security Drivers", href: "/security-driver" },
      { label: "Executive Protection", href: "/executive-protection" },
      { label: "VIP Membership", href: "/membership" },
      { label: "About VIP Aspen", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const utilityLinks = [
  { label: "Security Assessment", href: "/security-assessment" },
  { label: "Travel Guides", href: "/guides" },
];

const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="eyebrow eyebrow-tick !text-[11px] mb-4">
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
    <footer className="relative py-14 bg-navy-light border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 right-0 luxury-divider" aria-hidden />
      <div className="container mx-auto px-6 relative">
        {/* Brand block — full width above the sitemap so the link columns below
            get equal width and land on a clean, even grid. */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 mb-10 border-b border-border/50">
          <div className="max-w-md">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="VIP Aspen"
                width={160}
                height={48}
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-foreground/50 text-sm">
              Aspen's premier luxury car service and VIP concierge. Backed by Aspen
              Security LLC — Colorado-licensed, veteran and law-enforcement owned.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary/80" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
                  Call 24/7
                </span>
                {COMPANY.phoneDisplay}
              </span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary/80" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/40">
                  Email
                </span>
                {COMPANY.email}
              </span>
            </a>
          </div>
        </div>

        {/* Sitemap — 4 equal columns, 8 links apiece */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerColumns.map((column) => (
            <LinkColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>

        {/* SEO Paragraph */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <p className="text-foreground/40 text-sm leading-relaxed max-w-4xl">
            VIP Aspen is Aspen, Colorado's premier luxury car service and VIP concierge.
            We provide chauffeured Rolls Royce Cullinan, Cadillac Escalade, and Executive
            Sprinter service for airport transfers from ASE, Eagle (EGE), Rifle, and Denver
            (DEN) airports, private jet and FBO tarmac transfers, and resort routes including
            Denver to Aspen and Vail to Aspen. Our services span black car and hourly chauffeur,
            multi-day and concierge driving, private ski transfers across Aspen Mountain,
            Highlands, Buttermilk, and Snowmass, plus wedding, corporate, and special-event
            transportation, VIP nightlife access, security drivers,
            and executive protection. Serving Aspen, Snowmass Village, Basalt, Woody Creek,
            Carbondale, and the Roaring Fork Valley. Backed by Aspen Security LLC — a
            Colorado-licensed security company with veteran and law enforcement ownership.
            Available 24/7 —{" "}
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

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {utilityLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-foreground/40 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            <p className="text-foreground/40 text-sm">
              &copy; {new Date().getFullYear()} VIP Aspen. A service of Aspen Security LLC.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
