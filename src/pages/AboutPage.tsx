import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Car, MapPin, Star, Users, Clock, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImage from "@/assets/hero-aspen.jpg";
import cullinanImage from "@/assets/rolls-royce-cullinan.jpg";
import escaladeImage from "@/assets/escalade.jpg";
import sprinterImage from "@/assets/sprinter.jpg";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VIP Aspen",
  url: "https://www.vipaspen.com",
  logo: "https://www.vipaspen.com/og-image.jpg",
  description:
    "Aspen, Colorado's premier luxury car service, VIP nightlife access, and executive protection company.",
  telephone: "+1-970-452-6636",
  email: "info@vipaspen.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "411 E Main St, Suite 205H",
    addressLocality: "Aspen",
    addressRegion: "CO",
    postalCode: "81611",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Aspen, Colorado" },
    { "@type": "City", name: "Snowmass Village, Colorado" },
    { "@type": "City", name: "Basalt, Colorado" },
    { "@type": "City", name: "Carbondale, Colorado" },
    { "@type": "City", name: "Glenwood Springs, Colorado" },
  ],
  sameAs: [],
};

const fleet = [
  {
    name: "Rolls Royce Cullinan",
    description:
      "The only Rolls Royce Cullinan available for private hire in Aspen. Bespoke Mandarin interior, starlight headliner, champagne cooler — an experience no other car service in the valley can offer.",
    image: cullinanImage,
    link: "/rolls-royce-cullinan",
  },
  {
    name: "2025 Cadillac Escalade",
    description:
      "The newest-generation Escalade with massaging seats, 36-inch curved OLED display, and Super Cruise technology. Perfect for airport transfers, mountain excursions, and executive travel.",
    image: escaladeImage,
    link: "/cadillac-escalade",
  },
  {
    name: "Executive Sprinter",
    description:
      "Up to 13 passengers in first-class comfort. Conference table, flat-screen TV, Wi-Fi, and premium sound. Ideal for corporate groups, bridal parties, and group ski trips.",
    image: sprinterImage,
    link: "/executive-sprinter",
  },
];

const services = [
  { label: "Black Car Service", href: "/black-car-service", icon: Car },
  { label: "ASE Airport Transfer", href: "/aspen-airport-transfer", icon: MapPin },
  { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer", icon: MapPin },
  { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer", icon: MapPin },
  { label: "Denver to Aspen", href: "/denver-to-aspen-car-service", icon: MapPin },
  { label: "VIP Club Access", href: "/aspen-clubs", icon: Star },
  { label: "Executive Protection", href: "/executive-protection", icon: Shield },
  { label: "Membership", href: "/membership", icon: Users },
];

const serviceAreas = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Woody Creek",
  "Carbondale",
  "Glenwood Springs",
  "Vail & Beaver Creek",
  "Denver & Front Range",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="About VIP Aspen | Luxury Car Service & VIP Concierge in Aspen, CO"
        description="VIP Aspen is Aspen, Colorado's premier luxury car service, VIP nightlife access, and executive protection company. The only Rolls Royce Cullinan for hire in Aspen. Serving the Roaring Fork Valley 24/7."
        keywords="about VIP Aspen, luxury car service Aspen Colorado, VIP transportation Roaring Fork Valley, Aspen car service company, executive protection Aspen"
        canonicalUrl="/about"
        schemaData={organizationSchema}
      />

      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="VIP Aspen luxury car service in Aspen, Colorado"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center py-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-serif"
          >
            About VIP Aspen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Aspen's only full-service luxury transportation, VIP access, and executive protection company.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Our Story</h2>
            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
              <p>
                VIP Aspen was founded to fill a gap in the Aspen luxury market. While other car services offer basic
                point-to-point rides, VIP Aspen delivers something fundamentally different — a complete VIP experience
                that combines chauffeured luxury vehicles, exclusive nightlife and venue access, and professional
                executive protection under one roof. No other company in Aspen brings all three together. We saw that
                the clients who visit Aspen — the executives, celebrities, athletes, and families who choose this
                mountain town over anywhere else in the world — deserve more than a ride. They deserve an experience
                that matches the caliber of everything else Aspen offers.
              </p>
              <p>
                We understand what high-profile clients need: discretion above all, absolute reliability, and
                impeccable service delivered without pretension. Every chauffeur on our team is professionally trained,
                background-checked, and intimately familiar with the nuances of luxury hospitality. But beyond the
                professionalism, our team knows Aspen like no one else. We know every mountain road and its conditions
                in every season. We know every hotel entrance, every private residence gate code protocol, every
                restaurant valet. We know which routes avoid construction and which FBO terminals to pull into at
                ASE. This local knowledge isn't something you can train — it comes from years of living and operating
                in this valley.
              </p>
              <p>
                VIP Aspen is not a national franchise or a faceless app. We're Aspen-born and Aspen-focused. Every
                vehicle in our fleet was hand-selected for the demands of Colorado mountain driving and the
                expectations of our clientele. When you book with VIP Aspen, you're working with a team that treats
                your experience as personally as you do. That's the difference, and that's why Aspen's most
                discerning visitors choose us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 font-serif text-center"
          >
            Our Fleet — Vehicles No One Else in Aspen Has
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((vehicle, i) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to={vehicle.link} className="group block">
                  <div className="rounded-lg overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-300">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} luxury car service Aspen`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-primary transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">{vehicle.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Serving Aspen and the Roaring Fork Valley
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              VIP Aspen provides luxury car service throughout Aspen, Colorado and the entire Roaring Fork Valley.
              From downtown Aspen to Snowmass Village, Basalt, Woody Creek, Carbondale, and Glenwood Springs — our
              fleet operates wherever our clients need us. We also provide long-distance chauffeured service to Vail,
              Beaver Creek, and Denver, including private airport transfers from ASE, Eagle County (EGE), Rifle
              Garfield County (RIL), and Denver International (DEN). Wherever you're going in the Colorado mountains,
              VIP Aspen gets you there in style.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2 text-foreground/70"
                >
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-12 font-serif text-center"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 group"
                >
                  <service.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {service.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Experience VIP Aspen</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Ready to experience Aspen the way it was meant to be? Contact us to plan your luxury transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="luxury" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="luxuryOutline" size="xl" asChild>
                <a href="tel:+19704526636">
                  <Phone className="w-5 h-5 mr-2" />
                  (970) 452-6636
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
