import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Shield, Clock, Users, Monitor, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import tarmacImg from "@/assets/escalade-tarmac.jpg";
import nightImg from "@/assets/escalade-night.jpg";
import interiorImg from "@/assets/escalade-interior.jpg";
import signatureImg from "@/assets/escalade-signature.jpg";

const features = [
  {
    icon: Star,
    title: "2025 Facelift Design",
    description: "The latest Cadillac Escalade featuring the illuminated crest, vertical LED light bars, and bold new front fascia.",
  },
  {
    icon: Shield,
    title: "Professional Chauffeur",
    description: "Experienced, discreet chauffeurs who know every road in the Roaring Fork Valley.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book your chauffeured Escalade any time—day or night, year-round in Aspen.",
  },
  {
    icon: Users,
    title: "Up to 5 VIP Passengers",
    description: "Spacious cabin with premium leather seating, ample legroom, and luggage capacity for your group.",
  },
  {
    icon: Monitor,
    title: "Rear Entertainment",
    description: "Tablet entertainment system and premium refreshments including Saratoga spring water for every ride.",
  },
  {
    icon: Car,
    title: "Tarmac Service",
    description: "Direct private jet tarmac pick-up and drop-off at ASE, EGE, and regional airports.",
  },
];

const occasions = [
  "Aspen airport transfers (ASE, EGE, DEN)",
  "Private jet tarmac pick-up and drop-off",
  "Ski resort drop-off and pick-up",
  "Fine dining reservations in downtown Aspen",
  "Wedding and special event transportation",
  "Corporate executive travel",
  "Scenic tours of Maroon Bells & Independence Pass",
  "Shopping excursions and nightlife chauffeur service",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chauffeured 2025 Cadillac Escalade Aspen",
  "description": "Hire a chauffeured 2025 Cadillac Escalade in Aspen, Colorado. Premium luxury SUV with professional chauffeur for airport transfers, ski resorts, events, and private tours. Up to 5 passengers.",
  "serviceType": "Luxury Chauffeur Service",
  "areaServed": {
    "@type": "City",
    "name": "Aspen",
    "containedInPlace": {
      "@type": "State",
      "name": "Colorado",
    },
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "telephone": "+19704526636",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aspen",
      "addressRegion": "CO",
      "addressCountry": "US",
    },
  },
};

const CadillacEscalade = () => {
  return (
    <>
      <SEOHead
        title="Chauffeured 2025 Cadillac Escalade in Aspen"
        description="Ride in a chauffeured 2025 Cadillac Escalade in Aspen, Colorado. Premium luxury SUV with professional driver for airport transfers, ski resorts, weddings & private tours. Up to 5 passengers. Book today."
        keywords="Cadillac Escalade Aspen, chauffeured Escalade Aspen, 2025 Escalade Aspen Colorado, luxury SUV Aspen, Escalade rental Aspen, Escalade chauffeur service, Aspen luxury car hire, Escalade airport transfer Aspen, black car Escalade Aspen, private chauffeur Escalade, VIP car service Aspen, Cadillac Escalade hire Aspen"
        canonicalUrl="/cadillac-escalade"
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
                  Premium SUV
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Chauffeured <span className="text-gradient-gold">2025 Cadillac Escalade</span> in Aspen
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                  Command Aspen's roads in the iconic 2025 Cadillac Escalade. Featuring the bold new facelift design, premium leather interior, rear entertainment, and complimentary refreshments—all with a professional chauffeur at your service 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#booking">Book the Escalade</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                  <WhatsAppButton message="Hello, I'd like to book the Cadillac Escalade in Aspen." />
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
                    src={nightImg}
                    alt="2025 Cadillac Escalade with illuminated LED crest parked in downtown Aspen at night"
                    className="w-full h-full object-cover aspect-[3/4] md:aspect-[4/3]"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                The Experience
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Inside the <span className="text-gradient-gold">2025 Escalade</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                From the commanding exterior with its illuminated Cadillac crest to the premium interior with rear entertainment and complimentary refreshments, every detail has been curated for Aspen's most discerning travelers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: signatureImg, alt: "2025 Cadillac Escalade at Signature Aviation FBO Aspen Colorado" },
                { src: interiorImg, alt: "2025 Cadillac Escalade premium interior with tablet entertainment and Saratoga refreshments" },
                { src: tarmacImg, alt: "VIP Aspen Cadillac Escalade and Sprinter on tarmac next to private jet" },
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden rounded-sm group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Why Ride an <span className="text-gradient-gold">Escalade</span> in Aspen
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The 2025 Cadillac Escalade combines commanding presence with refined luxury. Our chauffeured Escalade service is the go-to choice for families, executives, and VIPs visiting Aspen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aspen's Go-To Luxury SUV */}
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
                Aspen's Go-To <span className="text-gradient-gold">Luxury SUV</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  The 2026 Cadillac Escalade is the workhorse of the VIP Aspen fleet and the perfect vehicle for life in the mountains. With seating for up to 5 passengers, full-time 4WD capability built for Colorado's mountain roads, and generous cargo space for luggage and ski equipment, the Escalade handles everything from{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">ASE airport transfers</Link>{" "}
                  to multi-day resort transportation with effortless composure. It's the most requested vehicle for families visiting Aspen, corporate groups attending conferences, and clients who need reliable luxury transportation in every weather condition — from bluebird powder days to late-season spring storms.
                </p>
                <p>
                  Inside, our Escalades feature premium leather interiors, a rear-seat tablet entertainment system for passengers, Saratoga spring water, and full connectivity for business travelers who need to stay productive between meetings. The Escalade is equally at home pulling up to The Little Nell as it is navigating the winding road to Snowmass Village or making the 90-minute drive from{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Eagle County Airport</Link>. For longer journeys from{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">Denver International Airport</Link>
                  , the Escalade's smooth ride and spacious cabin make the 3.5-hour mountain transfer feel effortless.
                </p>
                <p>
                  The Escalade is also the foundation of our{" "}
                  <Link to="/black-car-service" className="text-primary hover:text-primary/80 transition-colors">black car service</Link>{" "}
                  — available for hourly charter, point-to-point transfers, and full-day bookings throughout Aspen and the Roaring Fork Valley. VIP Aspen{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">members</Link>{" "}
                  receive discounted Escalade hourly rates and complimentary airport transfers included with every membership tier.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Occasions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Perfect for Every <span className="text-gradient-gold">Aspen Occasion</span>
                </h2>
                <p className="text-foreground/70 mb-8">
                  Whether you're arriving by private jet, heading to the slopes, or enjoying a night out in downtown Aspen, our chauffeured Escalade delivers premium comfort for every moment. For the ultimate luxury, explore our <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>, or choose our <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link> for groups up to 13.
                </p>
                <ul className="space-y-3">
                  {occasions.map((occasion) => (
                    <li key={occasion} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {occasion}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="glass-card overflow-hidden">
                  <img
                    src={tarmacImg}
                    alt="2025 Cadillac Escalade on airport tarmac with private jet in Aspen Colorado"
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
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
                Book Your <span className="text-gradient-gold">Cadillac Escalade</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your chauffeured 2025 Cadillac Escalade in Aspen now, or call us for custom itineraries and special requests.
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
                <WhatsAppButton message="Hello, I'd like to book the Cadillac Escalade in Aspen." />
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

export default CadillacEscalade;
