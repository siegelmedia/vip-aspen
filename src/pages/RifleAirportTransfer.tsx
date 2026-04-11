import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Phone, CheckCircle, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";

const features = [
  "Private jet & charter specialist",
  "Door-to-door luxury service",
  "Meet & greet on the tarmac",
  "Complimentary wait time",
  "Ski gear & luggage handling",
  "Scenic Roaring Fork route",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Rifle Garfield County Airport Transfer Service",
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
  "areaServed": [
    { "@type": "City", "name": "Aspen" },
    { "@type": "City", "name": "Glenwood Springs" },
    { "@type": "City", "name": "Carbondale" }
  ],
  "description": "Premium luxury car service from Rifle Garfield County Airport (RIL) to Aspen and the Roaring Fork Valley. Specializing in private jet arrivals with tarmac meet & greet service.",
  "serviceType": "Airport Transfer"
};

const RifleAirportTransfer = () => {
  return (
    <>
      <SEOHead
        title="Rifle Airport Transfer | RIL to Aspen Private Jet Service"
        description="Luxury Rifle Garfield County Airport (RIL) transfer to Aspen. Premium car service for private jet arrivals. Tarmac meet & greet, Escalade, Rolls Royce & Sprinter. Book your RIL transfer."
        keywords="Rifle airport transfer, RIL airport car service, Rifle to Aspen transportation, Rifle airport limo, private jet Rifle airport, Garfield County airport car service, luxury transfer Rifle, Rifle airport to Aspen, private aviation Rifle"
        canonicalUrl="/rifle-airport-transfer"
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="VIP Aspen luxury fleet for Rifle Garfield County Airport private jet transfers in Colorado"
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
                  RIL Private Jet Transfers
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Rifle Airport <span className="text-gradient-gold">Private Jet Service</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Rifle Garfield County Airport (RIL) is the preferred choice for private jet travelers heading to Aspen. With longer runways and fewer weather restrictions, RIL offers reliable access year-round. Our luxury fleet meets you on the tarmac for seamless, VIP-level transfers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Book RIL Transfer</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need a Rifle Airport (RIL) transfer to Aspen." />
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
                    About RIL Airport
                  </h2>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Rifle Garfield County Airport (RIL) has become the go-to destination for discerning travelers arriving by private jet. Located 60 miles from Aspen, the airport features a 7,000-foot runway capable of handling the largest private aircraft, with fewer weather delays than higher-altitude airports.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  For VIP clients, we provide tarmac meet & greet service—your chauffeur will be waiting steps from your aircraft. The scenic drive along Highway 82 through Glenwood Springs and Carbondale takes approximately 75 minutes, offering stunning views of the Colorado River and Roaring Fork Valley.
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>60 miles to Aspen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>~75 min transfer</span>
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
                  Our RIL Transfer Service Includes
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

        {/* Why Private Jet Travelers Choose RIL */}
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
                Why Private Jet Travelers Choose <span className="text-gradient-gold">Rifle-Garfield County Airport</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Rifle-Garfield County Airport has quietly become the preferred arrival point for private jet travelers heading to Aspen. Located 60 miles from downtown Aspen with no commercial airline restrictions, RIL accommodates larger aircraft — including heavy jets and wide-body planes — that simply cannot land at{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen-Pitkin County Airport (ASE)</Link>{" "}
                  due to its shorter runway and steep mountain approach. At RIL, the experience begins the moment your wheels stop: our tarmac meet-and-greet service means your chauffeur is standing on the ramp, steps from your aircraft, ready to handle luggage and escort you to a waiting luxury vehicle.
                </p>
                <p>
                  The drive from Rifle to Aspen follows Highway 82 through the heart of the Roaring Fork Valley, passing through Glenwood Springs, Carbondale, and Basalt before arriving in Aspen. The 60-minute journey is scenic and relaxed — a far cry from the congestion and baggage carousels of commercial airports. For clients who value discretion and efficiency, RIL offers the most private, streamlined way to arrive in Aspen. No terminals, no crowds, no waiting.
                </p>
                <p>
                  Whether you're arriving for ski season, a summer retreat, or a high-profile event, our Rifle airport car service ensures your ground transportation matches the caliber of your private aviation. <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">VIP Aspen members</Link> receive priority booking and complimentary RIL transfers. Flying commercial instead? See our transfers from{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen-Pitkin County Airport (ASE)</Link>,{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Eagle County Airport (EGE)</Link>, or{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">Denver International (DEN)</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* RIL Transfer Fleet */}
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
                Our RIL <span className="text-gradient-gold">Transfer Fleet</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Private jet arrivals at Rifle deserve a vehicle that matches the occasion. The{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>{" "}
                  is the ultimate tarmac-to-resort transfer — your chauffeur pulls directly onto the ramp and you step from your jet into the most prestigious SUV in the world. The{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>{" "}
                  offers spacious luxury with ample room for luggage, ski equipment, and up to five passengers. For larger private jet parties, the{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link>{" "}
                  seats up to 13 in a first-class cabin configuration.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Rifle */}
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
                Why <span className="text-gradient-gold">Private Jet</span> Clients Choose RIL
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Rifle Airport offers distinct advantages for private aviation that make it the preferred choice for experienced travelers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Superior Runway",
                  description: "7,000-foot runway at lower altitude accommodates all private jet types, from light jets to heavy aircraft.",
                },
                {
                  title: "Weather Reliability",
                  description: "Lower elevation means fewer weather-related delays and cancellations compared to mountain airports.",
                },
                {
                  title: "VIP Experience",
                  description: "Less congestion, faster ground handling, and our tarmac meet & greet for a truly private arrival.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations */}
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
                Popular <span className="text-gradient-gold">Destinations</span> from RIL
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Aspen", time: "75 min" },
                { name: "Snowmass", time: "65 min" },
                { name: "Glenwood Springs", time: "20 min" },
                { name: "Carbondale", time: "40 min" },
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
                Book Your <span className="text-gradient-gold">RIL Transfer</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your Rifle Airport transfer now. For private jet arrivals, provide your tail number for tarmac coordination.
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
              <p className="text-foreground/60 text-sm mb-4">Private jet coordination or custom arrangements?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need to arrange a private jet transfer from Rifle Airport to Aspen." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default RifleAirportTransfer;
