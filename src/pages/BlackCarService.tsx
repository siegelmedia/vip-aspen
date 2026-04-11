import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Clock, MapPin, Star, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import escalade from "@/assets/escalade.webp";
import rollsRoyce from "@/assets/rolls-royce-cullinan.webp";
import sprinter from "@/assets/sprinter.webp";
import fleetHero from "@/assets/fleet-hero.webp";

const airportRoutes = [
  { name: "Aspen (ASE)", href: "/aspen-airport-transfer" },
  { name: "Eagle / Vail (EGE)", href: "/eagle-airport-transfer" },
  { name: "Rifle (RIL)", href: "/rifle-airport-transfer" },
];

const services = [
  {
    title: "Airport Transfers",
    description: "Seamless luxury transportation to and from Aspen-Pitkin County Airport (ASE), Eagle County Regional Airport (EGE), and Denver International Airport (DEN).",
    icon: MapPin,
    links: airportRoutes,
  },
  {
    title: "Hourly Charters",
    description: "Book our vehicles by the hour for shopping trips, dinner reservations, or exploring the Roaring Fork Valley in style.",
    icon: Clock,
  },
  {
    title: "Special Events",
    description: "Weddings, galas, corporate events, and private parties—arrive in a vehicle that matches the occasion.",
    icon: Star,
  },
  {
    title: "Ski Resort Transport",
    description: "Daily service to Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk with gear accommodations.",
    icon: Car,
  },
];

const fleet = [
  {
    name: "Rolls Royce Cullinan",
    passengers: "Up to 3 passengers",
    image: rollsRoyce,
    features: ["Ultimate luxury SUV", "Bespoke interior", "Whisper-quiet cabin"],
    href: "/rolls-royce-cullinan",
  },
  {
    name: "2025 Cadillac Escalade",
    passengers: "Up to 5 passengers",
    image: escalade,
    features: ["Latest 2025 facelift", "Premium entertainment", "Spacious interior"],
    href: "/cadillac-escalade",
  },
  {
    name: "Executive Sprinter",
    passengers: "Up to 13 passengers",
    image: sprinter,
    features: ["Group transportation", "Conference seating", "Premium amenities"],
    href: "/executive-sprinter",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury Black Car Service Aspen",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aspen",
      "addressRegion": "CO",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Aspen"
  },
  "description": "Premium luxury car service in Aspen, Colorado featuring Rolls Royce Cullinan, Cadillac Escalade, and Executive Sprinter. Airport transfers, hourly charters, and special events.",
  "serviceType": "Luxury Transportation"
};

const BlackCarService = () => {
  return (
    <>
      <SEOHead
        title="Luxury Black Car Service Aspen, Colorado"
        description="Premium Aspen car service featuring Rolls Royce Cullinan, 2025 Cadillac Escalade & Executive Sprinter. Airport transfers from ASE, EGE & DEN. Private chauffeur, hourly charters, ski resort transport. Book your luxury ride today."
        keywords="Aspen car service, luxury car service Aspen, Aspen airport transfer, private chauffeur Aspen, black car service Aspen Colorado, Aspen limo service, Rolls Royce Aspen, Escalade service Aspen, Sprinter van Aspen, ASE airport transfer, Eagle Vail airport transportation, Denver to Aspen car service, Aspen ski resort transport, executive transportation Aspen"
        canonicalUrl="/black-car-service"
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  Luxury Transportation
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Aspen <span className="text-gradient-gold">Black Car Service</span>
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                  Experience unparalleled luxury with our exclusive fleet. From airport transfers to special events, travel through Aspen and the Roaring Fork Valley in style with professional chauffeurs available 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#booking">Book Your Ride</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                  <WhatsAppButton message="Hello, I'm interested in booking a luxury car service in Aspen." />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:justify-self-end"
              >
                <div className="glass-card overflow-hidden">
                  <img
                    src={fleetHero}
                    alt="VIP Aspen luxury fleet Escalade and Sprinter vehicles on street in Aspen Colorado"
                    className="w-full h-full object-cover aspect-[4/3]"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
                Our Services
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Whether you need airport transportation, hourly charters, or special event service, we deliver excellence every time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {service.links && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="text-primary text-xs font-medium uppercase tracking-wider hover:text-primary/80 transition-colors underline underline-offset-4"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                The Fleet
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Our <span className="text-gradient-gold">Aspen Exclusive</span> Vehicles
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {fleet.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} luxury chauffeured car service in Aspen Colorado`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {vehicle.name}
                      </h3>
                      <p className="text-primary text-sm">{vehicle.passengers}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {vehicle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground/70 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {"href" in vehicle && vehicle.href && (
                      <Link
                        to={vehicle.href}
                        className="inline-block mt-4 text-primary text-sm font-medium uppercase tracking-wider hover:text-primary/80 transition-colors underline underline-offset-4"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes VIP Aspen Different */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
                  What Makes VIP Aspen's Black Car Service <span className="text-gradient-gold">Different</span>
                </h2>
                <div className="prose prose-lg max-w-none space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    In a town full of car services, VIP Aspen stands apart. Our fleet includes the only <Link to="/rolls-royce-cullinan" className="text-primary hover:underline">Rolls-Royce Cullinan</Link> available for hire in Aspen — a vehicle that turns heads on every street and creates an arrival experience unlike anything else in the valley. Our <Link to="/cadillac-escalade" className="text-primary hover:underline">2026 Cadillac Escalades</Link> and <Link to="/executive-sprinter" className="text-primary hover:underline">Executive Sprinters</Link> are the newest luxury vehicles on the road, maintained to the highest standards and equipped with premium amenities for every type of journey.
                  </p>
                  <p>
                    But it's not just about the cars. Our chauffeurs are local professionals who know every back road, every hotel entrance, every ski area drop-off, and every restaurant valet in the Roaring Fork Valley. They provide discreet, professional service whether you're a celebrity who needs privacy or a family that wants to explore Aspen in comfort. Every ride is an experience — not just a transfer — with attention to detail that national franchises and ride-share apps simply cannot replicate.
                  </p>
                  <p>
                    We offer hourly charters for flexible schedules, flat-rate <Link to="/aspen-airport-transfer" className="text-primary hover:underline">airport transfers</Link> from all four airports serving Aspen — <Link to="/aspen-airport-transfer" className="text-primary hover:underline">ASE</Link>, <Link to="/eagle-airport-transfer" className="text-primary hover:underline">EGE</Link>, <Link to="/rifle-airport-transfer" className="text-primary hover:underline">RIL</Link>, and <Link to="/denver-to-aspen-car-service" className="text-primary hover:underline">DEN</Link> — and event-based packages for <Link to="/aspen-wedding-transportation" className="text-primary hover:underline">weddings</Link>, <Link to="/aspen-corporate-transportation" className="text-primary hover:underline">corporate retreats</Link>, and private parties. Whether you need a single vehicle for the evening or a multi-vehicle fleet for a week-long event, we coordinate every detail so you can focus on enjoying Aspen.
                  </p>
                  <p>
                    For clients who visit regularly or want guaranteed availability, our <Link to="/membership" className="text-primary hover:underline">VIP Aspen membership program</Link> provides priority booking during peak seasons like Christmas, New Year's, X Games, and the Food &amp; Wine Classic — times when luxury vehicles book out weeks in advance. Members also receive discounted rates, complimentary airport transfers, and a dedicated concierge. And for high-profile clients requiring an additional layer of security, our <Link to="/executive-protection" className="text-primary hover:underline">executive protection services</Link> integrate seamlessly with our transportation fleet.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
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
                Book Your <span className="text-gradient-gold">Luxury Ride</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your private transportation now or call us for custom quotes and special requests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <BookingWidget />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-foreground/60 text-sm mb-4">Prefer to speak with us directly?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I'd like to book a luxury car service in Aspen." />
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlackCarService;
