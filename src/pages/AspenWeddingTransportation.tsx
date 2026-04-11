import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Phone, CheckCircle, Users, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";
import rrCullinan from "@/assets/rr-cullinan-aspen-exit.webp";
import sprinter from "@/assets/sprinter-interior.webp";
import escalade from "@/assets/escalade-signature.webp";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Aspen Wedding Transportation",
  "description": "Luxury wedding transportation in Aspen, Colorado. Rolls Royce Cullinan, Executive Sprinter, and Cadillac Escalade for couples, bridal parties, and guest shuttles. Full wedding day coordination.",
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
  "areaServed": { "@type": "City", "name": "Aspen" },
  "serviceType": "Wedding Transportation"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far in advance should I book wedding transportation in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 3–6 months in advance, especially for peak wedding season (June–October) and ski season weekends. The Rolls Royce Cullinan is our most requested wedding vehicle and books early."
      }
    },
    {
      "@type": "Question",
      "name": "Can you coordinate transportation for the entire wedding day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We work directly with your wedding planner to coordinate every detail — from getting-ready shuttles and ceremony arrivals to reception transport, photo stops, and late-night guest shuttles. Multiple vehicles can be scheduled simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "How much does wedding transportation cost in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wedding transportation is customized based on your timeline, number of vehicles, and hours needed. Contact us at (970) 452-6636 for a personalized quote. We offer package pricing for full wedding day coordination."
      }
    },
    {
      "@type": "Question",
      "name": "Can the Rolls Royce be used for wedding photos in Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Rolls Royce Cullinan with its bespoke Mandarin interior is stunning in wedding photography. We can position the vehicle at your preferred location and coordinate timing with your photographer."
      }
    }
  ]
};

const venues = [
  "The Little Nell",
  "Hotel Jerome",
  "Aspen Meadows Resort",
  "Limelight Hotel",
  "T Lazy 7 Ranch",
  "Pine Creek Cookhouse",
  "Maroon Bells",
  "Castle Creek Valley",
  "Snowmass Club",
  "St. Regis Aspen",
];

const fleetOptions = [
  {
    name: "Rolls Royce Cullinan",
    role: "The Couple's Car",
    description: "Make your grand entrance in the only Rolls Royce Cullinan for hire in Aspen. Bespoke Mandarin interior, champagne in the cooler, and a photo-ready presence that elevates every moment — from the first look to the final send-off.",
    image: rrCullinan,
    link: "/rolls-royce-cullinan",
  },
  {
    name: "Executive Sprinter",
    role: "The Bridal Party",
    description: "Keep your entire bridal party together in one luxurious cabin. Seating for up to 13 guests, premium sound system, LED mood lighting, and room for champagne toasts on the way to the ceremony.",
    image: sprinter,
    link: "/executive-sprinter",
  },
  {
    name: "Cadillac Escalade",
    role: "Guest Shuttles & Family",
    description: "Reliable luxury for wedding day logistics. Escalades handle family transport between hotels and venues, vendor coordination, and guest shuttles — ensuring everyone arrives on time and in style.",
    image: escalade,
    link: "/cadillac-escalade",
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Tell us your wedding timeline, venues, headcount, and vision. We'll recommend the right vehicles and logistics plan.",
  },
  {
    icon: Clock,
    title: "Customization",
    description: "We plan the fleet, map the routes, coordinate timing with your planner, and handle every logistical detail.",
  },
  {
    icon: CheckCircle,
    title: "Execution",
    description: "Day-of coordination with professional chauffeurs. On-time, every time — so you can focus on celebrating.",
  },
];

const AspenWeddingTransportation = () => {
  return (
    <>
      <SEOHead
        title="Aspen Wedding Transportation | Rolls Royce, Sprinter & Escalade"
        description="Luxury wedding transportation in Aspen, Colorado. Rolls Royce Cullinan for the couple, Executive Sprinter for the bridal party, Escalade shuttles for guests. Full wedding day coordination. Book (970) 452-6636."
        keywords="Aspen wedding transportation, wedding limo Aspen, wedding car service Aspen Colorado, Rolls Royce wedding Aspen, bridal transportation Aspen, wedding shuttle Aspen"
        canonicalUrl="/aspen-wedding-transportation"
        schemaData={schemaData}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="Luxury wedding transportation fleet in Aspen Colorado"
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
                <Heart className="w-5 h-5 text-primary" />
                <p className="text-primary uppercase tracking-[0.3em] text-sm">
                  Wedding Transportation
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Luxury Wedding Transportation in{" "}
                <span className="text-gradient-gold">Aspen, Colorado</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Make your Aspen wedding unforgettable with the Rolls Royce Cullinan, Cadillac
                Escalade, and Executive Sprinter. From the ceremony to the reception and everywhere
                in between.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Plan Your Wedding Transport</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need wedding transportation in Aspen." />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Grand Entrance */}
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
                Your Aspen Wedding Deserves a{" "}
                <span className="text-gradient-gold">Grand Entrance</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  Aspen is one of the most sought-after wedding destinations in the world — and for
                  good reason. Surrounded by 14,000-foot peaks, golden aspen groves, and a town that
                  radiates understated luxury, it's the kind of backdrop that makes every wedding feel
                  cinematic. Whether you're exchanging vows at the Aspen Meadows Resort, The Little
                  Nell, Hotel Jerome, the iconic Maroon Bells, or a private mountaintop estate above
                  Castle Creek Valley, how you arrive and depart is part of the story your guests will
                  tell for years.
                </p>
                <p>
                  Our{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">
                    Rolls Royce Cullinan
                  </Link>{" "}
                  with its bespoke Mandarin interior creates show-stopping wedding photos and an
                  unforgettable experience for the couple — from the first look reveal to the grand
                  exit. The champagne cooler is stocked, the cabin is whisper-quiet, and your
                  chauffeur ensures every transition between venues is seamless and on schedule. For
                  the bridal party, the{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">
                    Executive Sprinter
                  </Link>{" "}
                  keeps up to 13 of your closest friends together in one luxurious cabin — with music,
                  champagne, and celebration the entire way. Meanwhile, our fleet of{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">
                    Cadillac Escalades
                  </Link>{" "}
                  handles guest shuttles between hotels and venues, family transport, and vendor
                  coordination with clockwork precision.
                </p>
                <p>
                  We work directly with your wedding planner to coordinate timing, routes, vehicle
                  staging, and contingency plans so that transportation is one thing you never have to
                  worry about on your wedding day. From the rehearsal dinner to the after-party, VIP
                  Aspen has every movement covered. For couples who want priority fleet access during
                  peak wedding season, our{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">
                    membership program
                  </Link>{" "}
                  guarantees vehicle availability and dedicated concierge coordination.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Wedding Fleet Options */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Wedding <span className="text-gradient-gold">Fleet Options</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                The right vehicle for every role on your wedding day.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {fleetOptions.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <Link to={vehicle.link} className="block">
                    <div className="relative overflow-hidden rounded-sm mb-6">
                      <img
                        src={vehicle.image}
                        alt={`${vehicle.name} for Aspen wedding transportation`}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-xs text-primary bg-primary/10 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-primary/20">
                          {vehicle.role}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {vehicle.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Wedding Venues */}
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
                Popular Aspen <span className="text-gradient-gold">Wedding Venues</span> We Serve
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
              {venues.map((venue, index) => (
                <motion.div
                  key={venue}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass-card p-5 text-center flex items-center justify-center"
                >
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {venue}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
                How Wedding Transportation <span className="text-gradient-gold">Works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-primary font-display text-sm mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking */}
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
                Plan Your <span className="text-gradient-gold">Wedding Transport</span>
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto">
                Tell us about your wedding day and we'll put together a custom transportation plan.
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
              <p className="text-foreground/60 text-sm mb-4">
                Prefer a consultation? Call or message us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I'm planning a wedding in Aspen and need transportation." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AspenWeddingTransportation;
