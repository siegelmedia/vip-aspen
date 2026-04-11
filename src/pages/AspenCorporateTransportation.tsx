import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Phone, CheckCircle, Plane, Users, Shield, Utensils, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";
import escalade from "@/assets/escalade-signature.webp";
import sprinter from "@/assets/sprinter-interior.webp";
import rrCullinan from "@/assets/rr-cullinan-front.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Transportation Aspen",
  "description": "Professional corporate transportation and executive car service in Aspen, Colorado. Fleet management for conferences, corporate retreats, board meetings, and executive travel.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "telephone": "+19704526636",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aspen",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  },
  "areaServed": { "@type": "City", "name": "Aspen" },
  "serviceType": "Corporate Transportation"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you manage transportation for a multi-day corporate retreat in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide dedicated fleet management for multi-day corporate events, including assigned vehicles and chauffeurs, real-time schedule coordination, and on-call availability throughout your event. Contact us for a custom fleet plan."
      }
    },
    {
      "@type": "Question",
      "name": "How many passengers can your corporate fleet handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We can scale to any group size. A single Escalade seats 5, each Executive Sprinter seats 13, and we can deploy multiple vehicles simultaneously. For large conferences, we coordinate full shuttle operations between hotels and venues."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer executive protection for corporate VIPs visiting Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our executive protection team can be coordinated alongside your corporate transportation. Our specialists are former military and law enforcement professionals who provide discreet, professional security for high-profile executives and guests."
      }
    },
    {
      "@type": "Question",
      "name": "Can the Executive Sprinter be used as a mobile meeting room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Executive Sprinter features a hardwood conference table, flat-screen TV, Wi-Fi connectivity, and captain's chair seating — making it ideal for productive travel between venues or a mobile boardroom during transfers from Denver or Eagle airports."
      }
    }
  ]
};

const fleetOptions = [
  {
    name: "Cadillac Escalade",
    role: "Executive Transport",
    description: "The go-to vehicle for C-suite travel, investor pickups, and client-facing transportation. Premium leather, connectivity, and refined presence.",
    image: escalade,
    link: "/cadillac-escalade",
  },
  {
    name: "Executive Sprinter",
    role: "Mobile Conference Room",
    description: "Turn travel time into productive time. Conference table, flat-screen, Wi-Fi, and seating for up to 13 — ideal for team shuttles and executive off-sites.",
    image: sprinter,
    link: "/executive-sprinter",
  },
  {
    name: "Rolls Royce Cullinan",
    role: "VIP & Client Entertaining",
    description: "When the impression matters as much as the meeting. The ultimate statement vehicle for board members, keynote speakers, and distinguished guests.",
    image: rrCullinan,
    link: "/rolls-royce-cullinan",
  },
];

const services = [
  { icon: Plane, title: "Airport Transfers for Attendees", description: "Coordinated arrivals and departures from ASE, EGE, RIL, and DEN for every member of your team." },
  { icon: Users, title: "Multi-Day Fleet Management", description: "Dedicated vehicles and chauffeurs assigned to your event for the entire duration — on-call and on-schedule." },
  { icon: CheckCircle, title: "Site-to-Site Shuttle Service", description: "Seamless transportation loops between hotels, conference venues, restaurants, and activity locations." },
  { icon: Shield, title: "Executive Protection for VIPs", description: "Discreet, professional security for high-profile guests and executives.", link: "/executive-protection" },
  { icon: Utensils, title: "Nightlife & Dining Transportation", description: "After-hours service for team dinners, client entertainment, and Aspen's best restaurants." },
  { icon: Tag, title: "Branded Vehicle Signage", description: "Custom branded signage available for your vehicles to reinforce your event identity." },
];

const venues = [
  "The Limelight Hotel",
  "W Aspen",
  "Hotel Jerome",
  "The Little Nell",
  "Aspen Institute",
  "Aspen Meadows Resort",
  "Snowmass Conference Center",
];

const AspenCorporateTransportation = () => {
  return (
    <>
      <SEOHead
        title="Corporate Transportation Aspen CO | Executive Car Service & Retreats"
        description="Professional corporate transportation in Aspen, Colorado. Executive car service, fleet management for retreats & conferences, Sprinter shuttles. Escalade, Rolls Royce & Sprinter fleet. Book (970) 452-6636."
        keywords="corporate transportation Aspen, executive car service Aspen, corporate retreat transportation Aspen Colorado, business travel Aspen, conference transportation Aspen, corporate shuttle Aspen"
        canonicalUrl="/aspen-corporate-transportation"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="Corporate transportation fleet in Aspen Colorado"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          </div>

          <div className="container mx-auto px-6 relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-sm">
                  Corporate & Executive
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Corporate Transportation & Executive Car Service in{" "}
                <span className="text-gradient-gold">Aspen</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Professional fleet management for conferences, corporate retreats, board meetings,
                and executive travel throughout Aspen and the Roaring Fork Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Request Corporate Quote</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need corporate transportation in Aspen." />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive-Level Transportation */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Executive-Level Transportation for{" "}
                <span className="text-gradient-gold">Business in Aspen</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Aspen has long been a premier destination for corporate retreats, investor
                  conferences, board off-sites, and executive gatherings. Fortune 500 companies, top
                  private equity firms, and leading technology organizations regularly choose Aspen for
                  high-stakes meetings where the setting matters as much as the agenda. VIP Aspen
                  provides the caliber of corporate transportation these events demand — professional
                  chauffeurs in business attire, on-time reliability measured in minutes not hours, and
                  a fleet that makes the right impression from the moment your guests land at{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">
                    ASE
                  </Link>,{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">
                    Eagle
                  </Link>, or{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">
                    Denver
                  </Link>{" "}
                  airports.
                </p>
                <p>
                  Whether you need a single{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">
                    Escalade
                  </Link>{" "}
                  for your CEO or a fleet of{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">
                    Executive Sprinters
                  </Link>{" "}
                  for your entire team, we handle the logistics so you can focus on business. We
                  coordinate multi-vehicle operations across multiple venues, manage last-minute
                  schedule changes in real time, and provide dedicated fleet management for multi-day
                  events. Our Executive Sprinter doubles as a mobile conference room with Wi-Fi, a
                  flat-screen TV, hardwood conference table, and captain's chair seating — turning a
                  3.5-hour Denver to Aspen transfer into productive work time rather than dead time.
                </p>
                <p>
                  For companies that bring executives to Aspen regularly, our{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">
                    membership program
                  </Link>{" "}
                  provides discounted corporate rates, priority fleet access during peak conference
                  periods, and a dedicated concierge who knows your preferences and requirements. When
                  high-profile guests require additional security, our{" "}
                  <Link to="/executive-protection" className="text-primary hover:text-primary/80 transition-colors">
                    executive protection
                  </Link>{" "}
                  team integrates seamlessly with the transportation plan.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Fleet Options */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Corporate <span className="text-gradient-gold">Fleet Options</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The right vehicle for every corporate need — from executive pickups to full team
                logistics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {fleetOptions.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Link to={vehicle.link} className="block">
                    <div className="relative overflow-hidden rounded-sm mb-6">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} for corporate transportation in Aspen`}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs text-primary bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-primary/20">
                          {vehicle.role}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {vehicle.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Corporate Services <span className="text-gradient-gold">We Provide</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.link ? (
                      <Link to={service.link} className="hover:text-primary transition-colors">
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conference & Event Venues */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Aspen Conference &{" "}
                <span className="text-gradient-gold">Event Venues</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We provide transportation to all major conference and event venues in Aspen and
                Snowmass.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {venues.map((venue, index) => (
                <motion.div
                  key={venue}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-5 text-center flex items-center justify-center"
                >
                  <h3 className="font-display text-sm font-semibold text-foreground">{venue}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Request a <span className="text-gradient-gold">Corporate Quote</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Tell us about your event and we'll build a custom transportation plan and quote.
              </p>
            </motion.div>

            <BookingWidget />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-8"
            >
              <p className="text-foreground/60 text-sm mb-4">
                Prefer to discuss your event directly?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need corporate transportation for an event in Aspen." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AspenCorporateTransportation;
