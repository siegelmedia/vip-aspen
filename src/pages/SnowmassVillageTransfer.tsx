import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Phone, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Snowmass Village Car Service",
  "description": "Luxury private car service to Snowmass Village, Colorado. Chauffeured Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter transfers from ASE, EGE, RIL, and DEN airports to all Snowmass Village resorts and residences.",
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
  "areaServed": [
    { "@type": "City", "name": "Snowmass Village" },
    { "@type": "City", "name": "Aspen" }
  ],
  "serviceType": "Luxury Transportation"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far is Snowmass Village from Aspen Airport (ASE)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Snowmass Village is approximately 20 minutes from Aspen-Pitkin County Airport (ASE). VIP Aspen provides door-to-door luxury transfers directly to your Snowmass hotel, condo, or residence."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best way to get to Snowmass Village from Denver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most comfortable option is a private luxury transfer from Denver International Airport (DEN). The 3.5-hour scenic drive through the Rocky Mountains can be made in a Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter with a professional chauffeur."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide car service to all Snowmass Village hotels and resorts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide door-to-door service to every property in Snowmass Village including the Viceroy, Limelight Snowmass, Westin Snowmass, Snowmass Base Village condos, Snowmass Club, and all private residences."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book a Snowmass transfer from Eagle Airport (EGE)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Eagle County Regional Airport is approximately 80 minutes from Snowmass Village. We offer luxury transfers in our full fleet with flight tracking and meet-and-greet service at EGE arrivals."
      }
    }
  ]
};

const airports = [
  { code: "ASE", name: "Aspen Airport", detail: "~20 min to Snowmass", link: "/aspen-airport-transfer" },
  { code: "EGE", name: "Eagle Airport", detail: "~80 min to Snowmass", link: "/eagle-airport-transfer" },
  { code: "RIL", name: "Rifle Airport", detail: "~50 min to Snowmass", link: "/rifle-airport-transfer" },
  { code: "DEN", name: "Denver Airport", detail: "~3.5 hours to Snowmass", link: "/denver-to-aspen-car-service" },
];

const destinations = [
  "The Viceroy Snowmass",
  "Limelight Hotel Snowmass",
  "Westin Snowmass",
  "Snowmass Base Village",
  "Snowmass Club",
  "Snowmass Ski Area",
  "Anderson Ranch Arts Center",
  "Private Residences",
];

const SnowmassVillageTransfer = () => {
  return (
    <>
      <SEOHead
        title="Snowmass Village Car Service | Luxury Transfers from Aspen & Airports"
        description="Private luxury car service to Snowmass Village, CO. Chauffeured Rolls Royce, Escalade & Sprinter from ASE, Eagle, Rifle & Denver airports. Door-to-door service to all Snowmass resorts. Book (970) 452-6636."
        keywords="Snowmass Village car service, Snowmass Village transportation, Aspen to Snowmass transfer, Snowmass airport shuttle, luxury car Snowmass Colorado, Snowmass Village limo"
        canonicalUrl="/snowmass-village-transfer"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="Luxury chauffeured car service to Snowmass Village Colorado from Aspen and airports"
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
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-sm">
                  Snowmass Village Transfers
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Luxury Car Service to <span className="text-gradient-gold">Snowmass Village</span>, Colorado
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Private chauffeured transfers from Aspen, ASE Airport, Eagle Airport, and Denver to Snowmass Village resorts, hotels, and residences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Book Snowmass Transfer</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need a transfer to Snowmass Village." />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Getting to Snowmass Village */}
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
                Getting to Snowmass Village <span className="text-gradient-gold">in Style</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Snowmass Village is just 15 minutes from downtown Aspen and 20 minutes from{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen-Pitkin County Airport (ASE)</Link>
                  , but getting there with luggage, ski equipment, and family in a standard taxi or rideshare isn't the luxury experience you came to the mountains for. VIP Aspen provides private, door-to-door Snowmass Village car service in the{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>,{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>, or{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link>{" "}
                  — directly to the front entrance of your Snowmass hotel, condominium, or private residence with every piece of luggage and ski gear handled for you.
                </p>
                <p>
                  We know every property in Snowmass Village intimately — from the slope-side luxury of the Viceroy and the modern energy of the Limelight Snowmass to the refined comfort of the Westin, the condos scattered through Base Village, and the private homes tucked into the mountainside above the village center. Our chauffeurs pull up to the correct entrance, know where the bellhops are, and ensure your arrival is seamless regardless of which property you call home during your stay.
                </p>
                <p>
                  Snowmass Village itself is a destination worth the journey. Home to four mountains of world-class skiing with over 3,300 acres of terrain, Snowmass also boasts exceptional dining, the acclaimed Anderson Ranch Arts Center, and a vibrant base village that comes alive after the lifts close. Whether you're visiting for a ski vacation, a summer mountain retreat, or an event at the Snowmass Club, VIP Aspen's luxury Snowmass transportation ensures you arrive relaxed and ready to enjoy everything the village has to offer.{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">Membership</Link>{" "}
                  holders enjoy complimentary Snowmass transfers and priority booking during peak season.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Snowmass Transfers from Every Airport */}
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
                Snowmass Transfers from <span className="text-gradient-gold">Every Airport</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Luxury chauffeured service from all four airports serving Snowmass Village, with flight tracking and meet-and-greet at every arrival.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {airports.map((airport, index) => (
                <motion.div
                  key={airport.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-sm mb-4">
                    <Plane className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary font-display text-2xl font-semibold mb-1">
                    {airport.code}
                  </span>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {airport.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-6">{airport.detail}</p>
                  <Button variant="luxury" size="sm" className="mt-auto" asChild>
                    <Link to={airport.link} className="flex items-center gap-2">
                      Book Transfer <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Snowmass Destinations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Popular Snowmass <span className="text-gradient-gold">Destinations</span> We Serve
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Door-to-door luxury service to every hotel, resort, condominium, and private residence in Snowmass Village.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {destinations.map((dest, index) => (
                <motion.div
                  key={dest}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {dest}
                    </h3>
                  </div>
                </motion.div>
              ))}
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
                Book Your <span className="text-gradient-gold">Snowmass Transfer</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your luxury transfer to Snowmass Village. Include your flight details for real-time tracking and meet-and-greet service.
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
              <p className="text-foreground/60 text-sm mb-4">Need assistance or custom arrangements?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need to book a transfer to Snowmass Village." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default SnowmassVillageTransfer;
