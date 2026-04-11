import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Shield, Clock, Users, Wifi, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const sprinterFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many passengers does the Sprinter hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Executive Sprinter accommodates up to 13 passengers comfortably."
      }
    },
    {
      "@type": "Question",
      "name": "Is there Wi-Fi in the Sprinter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the Sprinter features Wi-Fi, a flat-screen TV, and a premium sound system."
      }
    }
  ]
};
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import tarmacImg from "@/assets/sprinter-tarmac.jpg";
import interiorSideImg from "@/assets/sprinter-interior-side.jpg";
import interiorFullImg from "@/assets/sprinter-interior-full.jpg";
import sprinterExterior from "@/assets/sprinter.jpg";

const features = [
  {
    icon: Users,
    title: "Up to 13 VIP Passengers",
    description: "Spacious conference-style seating with individual leather captain's chairs for your entire group.",
  },
  {
    icon: Star,
    title: "Custom Luxury Interior",
    description: "Diamond-stitched leather seats, ambient LED lighting, hardwood conference table, and premium finishes throughout.",
  },
  {
    icon: Shield,
    title: "Professional Chauffeur",
    description: "Experienced, discreet chauffeurs who know every road in the Roaring Fork Valley.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book your Executive Sprinter any time—day or night, year-round in Aspen.",
  },
  {
    icon: Wifi,
    title: "Entertainment System",
    description: "Large flat-screen TV, premium sound system, and connectivity for presentations or entertainment.",
  },
  {
    icon: Music,
    title: "Ambient Lighting",
    description: "Customizable LED mood lighting throughout the cabin to set the perfect atmosphere for any occasion.",
  },
];

const occasions = [
  "Aspen airport transfers (ASE, EGE, DEN)",
  "Group ski resort transportation",
  "Corporate retreats and team outings",
  "Wedding party transportation",
  "Private jet tarmac pick-up and drop-off",
  "Bachelor and bachelorette parties",
  "Wine tours and scenic excursions",
  "Nightlife group transportation",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Executive Sprinter Van Service Aspen",
  "description": "Luxury Executive Sprinter van hire in Aspen, Colorado. Custom luxury interior with seating for up to 13 passengers, professional chauffeur, airport transfers, group transportation, and private events.",
  "serviceType": "Luxury Group Transportation",
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

const ExecutiveSprinter = () => {
  return (
    <>
      <SEOHead
        title="Executive Sprinter Van Service in Aspen"
        description="Luxury Executive Sprinter van service in Aspen, Colorado. Custom interior with seating for up to 13 passengers, ambient LED lighting, entertainment system & professional chauffeur. Airport transfers, group transportation & private events. Book today."
        keywords="Executive Sprinter Aspen, luxury Sprinter van Aspen, Sprinter van service Aspen Colorado, group transportation Aspen, luxury van hire Aspen, Mercedes Sprinter Aspen, party bus Aspen, corporate transportation Aspen, Sprinter airport transfer Aspen, luxury group travel Aspen, private Sprinter van Aspen, VIP group transport Aspen, Aspen ski shuttle luxury, wedding transportation Aspen"
        canonicalUrl="/executive-sprinter"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(sprinterFaqSchema)}</script>
      </Helmet>

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
                  Group Luxury Travel
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Executive <span className="text-gradient-gold">Sprinter</span> in Aspen
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                  Travel with your group in ultimate style. Our custom-built Executive Sprinter van features a luxury interior with diamond-stitched leather, ambient LED lighting, entertainment system, and seating for up to 13 passengers—perfect for any Aspen occasion.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#booking">Book the Sprinter</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                  <WhatsAppButton message="Hello, I'd like to book the Executive Sprinter in Aspen." />
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
                    src={tarmacImg}
                    alt="VIP Aspen Executive Sprinter van on airport tarmac next to private jet in Aspen Colorado"
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
                Inside the <span className="text-gradient-gold">Executive Sprinter</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A mobile VIP lounge on wheels. Custom-built with diamond-stitched leather, ambient LED lighting, a premium entertainment system, and conference-style seating for up to 13 guests.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: sprinterExterior, alt: "Executive Sprinter van exterior black luxury vehicle Aspen Colorado" },
                { src: interiorSideImg, alt: "Executive Sprinter luxury interior diamond-stitched leather seats with ambient LED lighting" },
                { src: interiorFullImg, alt: "Executive Sprinter full interior view conference seating entertainment system Aspen" },
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
                Why Choose the <span className="text-gradient-gold">Executive Sprinter</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The ultimate group luxury transportation solution in Aspen. Every detail has been curated to deliver an unforgettable travel experience for your entire party.
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

        {/* The Ultimate Group Transportation */}
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
                The Ultimate <span className="text-gradient-gold">Group Transportation</span> in Aspen
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  When your party is bigger than five, the Executive Sprinter is the only way to travel together in Aspen without splitting into multiple vehicles. With seating for up to 13 passengers, a hardwood conference table, diamond-stitched leather captain's chairs, a large flat-screen TV, premium sound system, and customizable LED mood lighting, it's a mobile luxury lounge that moves at your schedule. We provide the only Executive-class Sprinter for hire in the Aspen area — there is nothing else like it in the Roaring Fork Valley.
                </p>
                <p>
                  The Sprinter is the top choice for <Link to="/aspen-wedding-transportation" className="text-primary hover:text-primary/80 transition-colors">wedding parties</Link> traveling between ceremony and reception venues across Aspen, <Link to="/aspen-corporate-transportation" className="text-primary hover:text-primary/80 transition-colors">corporate retreat groups</Link> arriving from{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen Airport (ASE)</Link>{" "}
                  or{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Eagle County Airport (EGE)</Link>
                  , ski clubs heading to Aspen Mountain or Snowmass, and bachelor and bachelorette parties hitting Aspen's{" "}
                  <Link to="/aspen-clubs" className="text-primary hover:text-primary/80 transition-colors">VIP nightlife</Link>. The conference-style interior also makes it ideal for business groups who want to hold a mobile meeting during a{" "}
                  <Link to="/denver-to-aspen-car-service" className="text-primary hover:text-primary/80 transition-colors">Denver to Aspen transfer</Link>
                  , turning 3.5 hours of drive time into productive work time.
                </p>
                <p>
                  Like all VIP Aspen vehicles, the Sprinter comes with a professional chauffeur, complimentary refreshments, and flight tracking for airport pickups. VIP Aspen{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">membership</Link>{" "}
                  holders receive discounted hourly Sprinter rates and priority booking during Aspen's busiest weekends — including X Games, Food & Wine Classic, and peak ski season.
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
                  Perfect for Every <span className="text-gradient-gold">Group Occasion</span>
                </h2>
                <p className="text-foreground/70 mb-8">
                  From corporate retreats to wedding parties, our Executive Sprinter delivers luxury group transportation for every Aspen event and occasion. For smaller parties, see our <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link> and <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>.
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
                    alt="Executive Sprinter van tarmac service at Aspen airport with private jet"
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
                Book Your <span className="text-gradient-gold">Executive Sprinter</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your luxury Executive Sprinter in Aspen now, or call us for custom group itineraries and special requests.
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
                <WhatsAppButton message="Hello, I'd like to book the Executive Sprinter in Aspen." />
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

export default ExecutiveSprinter;
