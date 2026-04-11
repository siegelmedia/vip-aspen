import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Plane, Clock, MapPin, Phone, CheckCircle, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const egeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is the drive from Eagle Airport to Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Approximately 90 minutes via I-70 and Highway 82 through the scenic Roaring Fork Valley."
      }
    },
    {
      "@type": "Question",
      "name": "Do you also serve Vail from Eagle Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide transfers from EGE to both Aspen and Vail/Beaver Creek."
      }
    }
  ]
};
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.jpg";

const features = [
  "Door-to-door luxury service",
  "Real-time flight monitoring",
  "Meet & greet at arrivals",
  "Complimentary 60-min wait time",
  "Ski gear & luggage handling",
  "Scenic I-70 corridor route",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Eagle Vail Airport Transfer Service",
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
    { "@type": "City", "name": "Vail" },
    { "@type": "City", "name": "Beaver Creek" }
  ],
  "description": "Premium luxury car service from Eagle County Regional Airport (EGE) to Aspen, Vail, and Beaver Creek. Professional chauffeurs, flight tracking, and first-class amenities.",
  "serviceType": "Airport Transfer"
};

const EagleAirportTransfer = () => {
  return (
    <>
      <SEOHead
        title="Eagle Vail Airport Transfer | EGE to Aspen Car Service"
        description="Luxury Eagle County Airport (EGE) transfer to Aspen, Vail & Beaver Creek. Premium Escalade, Rolls Royce & Sprinter service. Flight tracking, meet & greet, ski equipment handling. Book your EGE transfer."
        keywords="Eagle airport transfer, EGE airport car service, Eagle Vail airport to Aspen, Eagle airport limo, EGE to Vail transportation, Eagle airport to Beaver Creek, luxury airport transfer Eagle, private car Eagle airport, Vail airport shuttle"
        canonicalUrl="/eagle-airport-transfer"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(egeFaqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="VIP Aspen luxury fleet for Eagle County Regional Airport EGE transfers to Aspen Colorado"
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
                  EGE Airport Transfers
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Eagle Vail <span className="text-gradient-gold">Airport Transfer</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Eagle County Regional Airport (EGE) offers the most reliable flight options to the Vail Valley. Our luxury fleet provides comfortable transfers to Aspen, Vail, Beaver Creek, and beyond—turning your 90-minute journey into a first-class experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Book EGE Transfer</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need an Eagle Airport (EGE) transfer to Aspen." />
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
                    About EGE Airport
                  </h2>
                </div>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  Eagle County Regional Airport (EGE) is the primary gateway for travelers heading to the Vail Valley and Aspen area. Located 70 miles from Aspen and just 35 miles from Vail, EGE offers more reliable flight schedules than smaller mountain airports, especially during winter weather.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6">
                  The scenic drive through Glenwood Canyon on I-70 is spectacular, and our professional chauffeurs ensure you arrive relaxed and refreshed. We track all flights in real-time and provide complimentary wait time for delayed arrivals.
                </p>
                <div className="flex items-center gap-4 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>70 miles to Aspen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>~90 min transfer</span>
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
                  Our EGE Transfer Service Includes
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

        {/* The EGE to Aspen Experience */}
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
                The Eagle County Airport to <span className="text-gradient-gold">Aspen Experience</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Eagle County Regional Airport sits 70 miles from Aspen, connected by Interstate 70 and Highway 82 — a 90-minute drive through some of Colorado's most dramatic landscape. The route passes through Glenwood Canyon, a stunning 12-mile stretch where the Colorado River carves through 1,800-foot canyon walls, before turning south along the Roaring Fork River into Aspen. It's a journey that feels less like a transfer and more like a private sightseeing tour — especially when experienced from the back seat of a luxury vehicle with a professional chauffeur at the wheel.
                </p>
                <p>
                  Many visitors choose EGE over{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen-Pitkin County Airport (ASE)</Link>{" "}
                  because Eagle offers significantly more commercial flight options and far fewer weather-related delays. The airport also serves Vail and Beaver Creek, making it the busiest gateway to Colorado's ski country during winter. Our chauffeurs know every mile of the mountain roads between Eagle and Aspen in every season and weather condition — from summer road construction to winter snowstorms on Vail Pass. If you'd like, we can arrange a stop in Glenwood Springs to visit the famous hot springs or grab a meal before continuing to Aspen.
                </p>
                <p>
                  For frequent visitors, our{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">membership program</Link>{" "}
                  includes complimentary EGE airport transfers, priority booking, and discounted hourly rates. Flying into Denver instead?{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">See our Denver to Aspen transfer service</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EGE Transfer Fleet */}
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
                Our EGE <span className="text-gradient-gold">Transfer Fleet</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  The 90-minute drive from Eagle to Aspen deserves a vehicle that makes the journey feel effortless. Our{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>{" "}
                  transforms the transfer into a first-class experience with its whisper-quiet cabin, massaging seats, and champagne cooler. The{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>{" "}
                  is the go-to choice for families and groups with ski gear, offering premium comfort with generous luggage capacity. For larger parties of up to 13, the{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link>{" "}
                  provides a conference-style interior perfect for corporate groups or wedding parties heading from EGE to Aspen.
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
                Popular <span className="text-gradient-gold">Destinations</span> from EGE
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We provide transfers from Eagle Airport to all resort destinations in the Vail Valley and Roaring Fork Valley.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Vail Village", time: "30 min" },
                { name: "Beaver Creek", time: "25 min" },
                { name: "Aspen", time: "90 min" },
                { name: "Snowmass", time: "80 min" },
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
                Book Your <span className="text-gradient-gold">EGE Transfer</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your Eagle Airport transfer now. Include your flight details for real-time tracking.
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
                <WhatsAppButton message="Hello, I need to book an Eagle Airport (EGE) transfer to Aspen." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default EagleAirportTransfer;
