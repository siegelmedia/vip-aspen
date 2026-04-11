import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Phone, CheckCircle, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const aseFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far is Aspen Airport from downtown?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ASE is just 3 miles from downtown Aspen, approximately a 5-minute drive."
      }
    },
    {
      "@type": "Question",
      "name": "Do you track my flight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we monitor every flight in real time and adjust pickup accordingly, including weather delays."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fit ski equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our vehicles accommodate ski and snowboard equipment with dedicated cargo space."
      }
    }
  ]
};
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";

const features = [
  "5-minute drive to downtown Aspen",
  "Meet & greet at arrivals",
  "Flight tracking included",
  "Complimentary wait time",
  "Ski & luggage assistance",
  "24/7 availability",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Aspen Airport Transfer Service",
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
  "description": "Premium luxury car service from Aspen-Pitkin County Airport (ASE) to Aspen hotels, resorts, and residences. Professional chauffeurs, flight tracking, and meet & greet service.",
  "serviceType": "Airport Transfer"
};

const AspenAirportTransfer = () => {
  return (
    <>
      <SEOHead
        title="Aspen Airport Transfer | ASE Luxury Car Service"
        description="Premium Aspen-Pitkin County Airport (ASE) transfer service. Luxury Escalade, Rolls Royce & Sprinter rides to downtown Aspen, Snowmass & resorts. Flight tracking, meet & greet, 24/7 availability. Book now."
        keywords="Aspen airport transfer, ASE airport car service, Aspen-Pitkin airport transportation, Aspen airport limo, ASE airport shuttle, Aspen airport to downtown, Aspen airport to Snowmass, luxury airport transfer Aspen, private car Aspen airport"
        canonicalUrl="/aspen-airport-transfer"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(aseFaqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="VIP Aspen luxury Escalade and Sprinter fleet for Aspen-Pitkin County Airport transfers in Colorado"
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
                <Plane className="w-5 h-5 text-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-sm">
                  ASE Airport Transfers
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Aspen-Pitkin <span className="text-gradient-gold">Airport Transfer</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Just 5 minutes from downtown Aspen, our luxury fleet provides seamless transfers from ASE airport to your destination. Professional chauffeurs, flight tracking, and first-class service guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Book ASE Transfer</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need an Aspen Airport (ASE) transfer." />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Airport Info Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-3xl font-semibold text-foreground">
                    About ASE Airport
                  </h2>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Aspen-Pitkin County Airport (ASE) is the closest airport to downtown Aspen, located just 3 miles from the heart of town. Despite its convenience, the airport's high-altitude location (7,820 ft) means weather-related delays are common during winter months.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Our experienced chauffeurs monitor all flights in real-time, ensuring we're there when you land—even when schedules change. We provide complimentary wait time and assist with all luggage, including ski equipment.
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>3 miles to downtown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>5-10 min transfer</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-8"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Our ASE Transfer Service Includes
                </h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose VIP Aspen */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Why Choose VIP Aspen for Your <span className="text-gradient-gold">ASE Airport Transfer</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Aspen-Pitkin County Airport is one of the most challenging airports in North America. Sitting at 7,820 feet of elevation with a single runway flanked by mountains, ASE is notorious for weather-related delays — especially during the winter ski season when snowstorms, crosswinds, and low visibility can push arrivals back by hours. Unlike a standard taxi or rideshare, our luxury Aspen airport transfer service accounts for this reality. Every chauffeur monitors your flight in real-time, so whether your plane lands on schedule or three hours late, a professionally dressed driver is waiting at arrivals the moment you step off the jet bridge.
                </p>
                <p>
                  The difference between a VIP Aspen car service and a standard ASE airport pickup goes far beyond the vehicle. From the moment you're greeted, your luggage and ski equipment are handled for you, and you step into a climate-controlled cabin stocked with chilled water and refreshments. Within five minutes you're pulling up to your destination — whether that's The Little Nell, St. Regis Aspen, the Limelight Hotel, a private residence in the West End, or a ski-in/ski-out lodge in Snowmass Village. We also serve Aspen Highlands, Buttermilk, and the entire Roaring Fork Valley. For clients flying into other airports, we offer transfers from{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Eagle County Airport (EGE)</Link>,{" "}
                  <Link to="/rifle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Rifle Airport (RIL)</Link>, and{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">Denver International (DEN)</Link>.
                </p>
                <p>
                  VIP Aspen <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">membership</Link> holders enjoy priority booking and complimentary ASE transfers included with their plan — making it effortless to arrange luxury airport pickup every time you visit Aspen.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ASE Transfer Fleet */}
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
                Our ASE <span className="text-gradient-gold">Transfer Fleet</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  For the ultimate VIP arrival, choose the{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>{" "}
                  — the only one available for hire in Aspen, featuring a bespoke Mandarin interior and champagne cooler. It's the definitive statement for high-profile guests, celebrities, and special occasions.
                </p>
                <p>
                  The{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>{" "}
                  is our most popular ASE transfer vehicle. With seating for up to five passengers and generous cargo space for luggage and ski equipment, it delivers comfort and practicality in equal measure — ideal for families and small groups arriving for a ski vacation.
                </p>
                <p>
                  Traveling with a larger party? The{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link>{" "}
                  seats up to 13 passengers in a first-class cabin with captain's chairs, a conference setup, and an entertainment system. Perfect for corporate retreats, wedding parties, and group ski trips arriving at ASE.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Destinations */}
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
                Popular <span className="text-gradient-gold">Destinations</span> from ASE
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We provide transfers from Aspen Airport to all hotels, resorts, and private residences in the Roaring Fork Valley.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Downtown Aspen", time: "5 min" },
                { name: "Snowmass Village", time: "15 min" },
                { name: "Aspen Highlands", time: "8 min" },
                { name: "Buttermilk", time: "5 min" },
              ].map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-primary text-sm">~{dest.time}</p>
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
                Book Your <span className="text-gradient-gold">ASE Transfer</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your Aspen Airport transfer now. Include your flight details for real-time tracking.
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
              <p className="text-foreground/60 text-sm mb-4">Need assistance or custom arrangements?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need to book an Aspen Airport (ASE) transfer." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AspenAirportTransfer;
