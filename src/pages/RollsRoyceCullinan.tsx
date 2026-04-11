import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/rr-cullinan-doors.jpg";
import interiorImg from "@/assets/rr-cullinan-interior.jpg";
import frontImg from "@/assets/rr-cullinan-front.jpg";
import sideImg from "@/assets/rr-cullinan-side.jpg";
import aspenArrival from "@/assets/rr-cullinan-aspen-arrival.jpg";
import aspenExit from "@/assets/rr-cullinan-aspen-exit.jpg";

const features = [
  {
    icon: Star,
    title: "Bespoke Mandarin Interior",
    description: "Hand-stitched leather with signature orange accents and RR embroidered headrests.",
  },
  {
    icon: Shield,
    title: "Professional Chauffeur",
    description: "Experienced, discreet chauffeurs who know every road in the Roaring Fork Valley.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book your chauffeured Rolls Royce Cullinan any time—day or night, year-round in Aspen.",
  },
  {
    icon: Users,
    title: "Up to 3 VIP Passengers",
    description: "Intimate rear cabin with individual seats, fold-out tables, and champagne cooler.",
  },
];

const occasions = [
  "Aspen airport transfers (ASE, EGE, DEN)",
  "Ski resort drop-off and pick-up",
  "Fine dining reservations in downtown Aspen",
  "Aspen wedding transportation",
  "Corporate executive travel",
  "Scenic tours of Maroon Bells & Independence Pass",
  "Shopping excursions on Galena Street",
  "Private nightlife chauffeur service",
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Chauffeured Rolls Royce Cullinan Aspen",
  "description": "Hire a chauffeured Rolls Royce Cullinan in Aspen, Colorado. The ultimate luxury SUV experience with professional chauffeur for airport transfers, ski resorts, events, and private tours.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Rolls Royce in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our chauffeured Rolls Royce Cullinan starts at a flat rate for airport transfers and is available hourly. Contact (970) 452-6636 for current pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I book the Rolls Royce for a ski resort transfer in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide door-to-door Rolls Royce transfers to Aspen Mountain, Snowmass, Highlands, and Buttermilk ski resorts."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Rolls Royce Cullinan available for weddings in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Rolls Royce Cullinan is available for weddings and special events throughout Aspen and the Roaring Fork Valley."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer Rolls Royce service from Denver to Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer long-distance Rolls Royce Cullinan transfers between Denver International Airport and Aspen Colorado."
      }
    }
  ]
};

const RollsRoyceCullinan = () => {
  return (
    <>
      <SEOHead
        title="Rolls Royce Cullinan Aspen | Chauffeured Luxury SUV Hire"
        description="Hire a chauffeured Rolls Royce Cullinan in Aspen, Colorado. Bespoke Mandarin interior, professional discreet chauffeur. Airport transfers, ski resorts, weddings, scenic tours & corporate travel. The most exclusive ride in the Rockies. Book (970) 452-6636."
        keywords="Rolls Royce Cullinan Aspen, Rolls Royce hire Aspen, chauffeured Rolls Royce Aspen Colorado, Rolls Royce rental Aspen, Rolls Royce airport transfer Aspen, Rolls Royce ski resort Aspen, luxury SUV chauffeur Aspen, Rolls Royce wedding Aspen, Rolls Royce Black Badge Aspen"
        canonicalUrl="/rolls-royce-cullinan"
        ogImage="https://www.vipaspen.com/og-rolls-royce.jpg"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                  Aspen's Finest
                </p>
                <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                  Chauffeured <span className="text-gradient-gold">Rolls Royce Cullinan</span> in Aspen
                </h1>
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                  Experience Aspen from the back seat of the world's most luxurious SUV. Our Rolls Royce Cullinan with professional chauffeur delivers an unmatched ride through the Roaring Fork Valley—whether you're heading to the slopes, a private dinner, or the airport.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="luxury" size="lg" asChild>
                    <a href="#booking">Book the Cullinan</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+19704526636" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (970) 452-6636
                    </a>
                  </Button>
                  <WhatsAppButton message="Hello, I'd like to book the Rolls Royce Cullinan in Aspen." />
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
                    src={aspenExit}
                    alt="VIP guest exiting chauffeured Rolls Royce Cullinan in downtown Aspen, Colorado"
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
                Inside Aspen's <span className="text-gradient-gold">Rolls Royce Cullinan</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                From the iconic Pantheon grille to the hand-crafted Mandarin leather interior, every detail of this Rolls Royce Cullinan has been curated for the most discerning Aspen visitors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: frontImg, alt: "Rolls Royce Cullinan front view with Aspen fall foliage" },
                { src: interiorImg, alt: "Rolls Royce Cullinan bespoke leather interior with RR headrests" },
                { src: sideImg, alt: "Rolls Royce Cullinan side profile in Aspen Colorado mountains" },
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
                Why Ride a <span className="text-gradient-gold">Rolls Royce</span> in Aspen
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The Rolls Royce Cullinan isn't just a ride—it's a statement. Our chauffeured Cullinan service brings the pinnacle of automotive luxury to every Aspen occasion.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* The Only Rolls Royce Cullinan for Hire in Aspen */}
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
                The Only Rolls Royce Cullinan <span className="text-gradient-gold">for Hire in Aspen</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  This is not a standard luxury rental. VIP Aspen's Rolls Royce Cullinan is the only one available for chauffeured hire in Aspen, Colorado — and it is unlike any other vehicle on the road in the Roaring Fork Valley. Finished with a bespoke Mandarin orange interior, hand-stitched leather throughout, embroidered RR headrests, and an onboard champagne cooler, this Cullinan has been configured for clients who accept nothing less than the absolute pinnacle of automotive luxury. Every surface you touch has been crafted by hand at the Rolls Royce atelier in Goodwood, England.
                </p>
                <p>
                  Whether you're stepping off a flight at{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen-Pitkin County Airport</Link>
                  , arriving for a wedding at The Little Nell, touring Maroon Bells on a private excursion, or being dropped at an intimate dinner on Galena Street, the Cullinan makes a statement before you even open the door. Our professional chauffeurs know every mountain road in the valley and provide discreet, impeccable service — they are trained to anticipate your needs while remaining invisible. For clients requiring an additional layer of security, our{" "}
                  <Link to="/executive-protection" className="text-primary hover:text-primary/80 transition-colors">executive protection</Link>{" "}
                  team can be coordinated alongside your Cullinan reservation.
                </p>
                <p>
                  Frequent visitors to Aspen can lock in priority Rolls Royce availability through our{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">membership program</Link>
                  , which includes complimentary airport transfers, discounted hourly rates, and dedicated concierge support. During peak ski season and major Aspen events, the Cullinan books weeks in advance — members always get first priority.
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
                  Whether you're visiting Aspen for skiing, a <Link to="/aspen-wedding-transportation" className="text-primary hover:text-primary/80 transition-colors">wedding</Link>, or a corporate retreat, our chauffeured Rolls Royce Cullinan elevates every moment. See also our <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link> for families and our <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link> for group travel.
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
                    src={aspenArrival}
                    alt="VIP guest arriving in Rolls Royce Cullinan in downtown Aspen Colorado"
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
                Book Your <span className="text-gradient-gold">Rolls Royce Cullinan</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Reserve your chauffeured Rolls Royce Cullinan in Aspen now, or call us for custom itineraries and special requests.
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
                <WhatsAppButton message="Hello, I'd like to book the Rolls Royce Cullinan in Aspen." />
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section — boosts featured snippets */}
        <section className="py-20 md:py-28 bg-muted/20">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h2>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  q: "How much does it cost to hire a Rolls Royce in Aspen?",
                  a: "Our chauffeured Rolls Royce Cullinan starts at a flat rate for airport transfers and is also available by the hour for half-day or full-day bookings. Contact us at (970) 452-6636 for current pricing and availability."
                },
                {
                  q: "Can I book the Rolls Royce for a ski resort transfer?",
                  a: "Absolutely. We provide door-to-door chauffeured service to Aspen Mountain, Aspen Highlands, Buttermilk, Snowmass, and beyond. Our professional driver handles all luggage and ski equipment."
                },
                {
                  q: "Is the Rolls Royce Cullinan available for weddings in Aspen?",
                  a: "Yes — our Rolls Royce Cullinan is one of Aspen's most requested wedding vehicles. We coordinate with your wedding planner to handle timelines, decorations, and multi-stop itineraries."
                },
                {
                  q: "Do you offer Rolls Royce service from Denver to Aspen?",
                  a: "Yes. We offer long-distance transfers between Denver International Airport and Aspen in the Rolls Royce Cullinan — approximately 3.5 to 4 hours of unmatched mountain scenery in ultimate comfort."
                },
                {
                  q: "Is your chauffeur discreet and professional?",
                  a: "Discretion is our highest priority. All VIP Aspen chauffeurs are background-checked, professionally trained, and experienced in serving high-profile clients. NDAs are available upon request."
                }
              ].map(({ q, a }) => (
                <div key={q} className="glass-card p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{q}</h3>
                  <p className="text-foreground/70 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default RollsRoyceCullinan;
