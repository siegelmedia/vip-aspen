import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Wine, Music, Users, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import vipClub from "@/assets/vip-club.jpg";

const benefits = [
  {
    icon: Star,
    title: "Priority Entry",
    description: "Skip the line at Aspen's hottest clubs and venues. Our members receive immediate VIP access.",
  },
  {
    icon: Wine,
    title: "Bottle Service",
    description: "Enjoy complimentary upgrades and discounted bottle service at partner establishments.",
  },
  {
    icon: Users,
    title: "Reserved Tables",
    description: "Guaranteed table reservations at peak times when others are turned away.",
  },
  {
    icon: Music,
    title: "Exclusive Events",
    description: "Access to private events, album release parties, and celebrity appearances.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "VIP Club Access Aspen",
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
  "description": "Exclusive VIP access to Aspen's premier nightclubs, lounges, and restaurants. Priority entry, bottle service, and reserved tables.",
  "serviceType": "VIP Concierge Services"
};

const AspenClubs = () => {
  return (
    <>
      <SEOHead
        title="VIP Club Access & Nightlife in Aspen, Colorado"
        description="Skip the line at Aspen's best clubs, lounges, and restaurants. VIP Aspen offers priority entry, bottle service, reserved tables, and exclusive nightlife access. Tell us where you want to be — we'll get you in."
        keywords="Aspen nightlife, VIP club access Aspen, Aspen nightclubs, bottle service Aspen, VIP tables Aspen, Aspen après-ski, Aspen bars, exclusive venues Aspen Colorado, Aspen party, Aspen VIP experience, nightlife concierge Aspen, restaurant reservations Aspen, private club access Aspen"
        canonicalUrl="/aspen-clubs"
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                  VIP Access
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Aspen <span className="text-gradient-gold">Nightlife</span> & Clubs
                </h1>
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-8">
                  Experience Aspen after dark like never before. Skip the lines, secure the best tables, and enjoy exclusive access to the mountain town's most coveted venues and experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#contact">Get VIP Access</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={vipClub}
                  alt="Exclusive VIP nightlife and club access experience in Aspen Colorado"
                  className="rounded-sm w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-sm" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                VIP <span className="text-gradient-gold">Benefits</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Our relationships with Aspen's premier venues ensure you receive treatment befitting your status.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Aspen's Nightlife Demands VIP Access */}
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
                  Aspen's Nightlife Demands <span className="text-gradient-gold">VIP Access</span>
                </h2>
                <div className="prose prose-lg max-w-none space-y-6 text-foreground/70 leading-relaxed">
                  <p>
                    Aspen's nightlife scene is exclusive by nature. The best venues have limited capacity, VIP-only areas, and guest lists that fill up fast — especially during peak winter season and marquee events like the X Games, Food &amp; Wine Classic, and New Year's Eve. Without the right connections, even well-connected travelers can find themselves waiting in line or turned away at the door. VIP Aspen's club access service changes that equation entirely, getting our members and clients past the velvet rope at Aspen's top nightclubs, lounges, and restaurants.
                  </p>
                  <p>
                    What sets our service apart is the seamless integration of VIP entry with <Link to="/black-car-service" className="text-primary hover:underline">chauffeured luxury transportation</Link>. You arrive at the door in the <Link to="/rolls-royce-cullinan" className="text-primary hover:underline">Rolls-Royce Cullinan</Link>, skip the line, and have your table waiting — the entire experience curated from pickup to last call. Whether it's bottle service at a private event, a reserved table at a packed restaurant, or entry to an exclusive after-party, we handle every detail so you can simply enjoy the evening.
                  </p>
                  <p>
                    Our <Link to="/membership" className="text-primary hover:underline">VIP Aspen membership program</Link> takes nightlife access even further. Gold and Black members receive club access included with their membership, along with bottle service discounts and priority reservations at partner venues. It's the only membership in Aspen that combines luxury transportation, nightlife access, and dedicated concierge service under one roof — because your night out should be extraordinary from start to finish.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Have a Venue in Mind */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card max-w-3xl mx-auto p-10 md:p-14 text-center"
            >
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Have a Venue <span className="text-gradient-gold">in Mind?</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                Whether it's a sought-after restaurant reservation or VIP entry to a private club, let us know where you want to be — and we'll make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready for VIP Treatment?
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Contact us to arrange VIP access for your next Aspen night out or special celebration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
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

export default AspenClubs;
