import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, CheckCircle, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const denFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is the drive from Denver to Aspen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Approximately 3.5 hours (225 miles) via I-70 through the Rocky Mountains."
      }
    },
    {
      "@type": "Question",
      "name": "Is Independence Pass open in winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Independence Pass closes in winter. The I-70 route through Glenwood Springs is used year-round."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make stops along the way?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can arrange stops in Vail, Glenwood Springs, or other locations along the route."
      }
    }
  ]
};
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import fleetHero from "@/assets/fleet-hero.webp";

const denverSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Denver to Aspen Car Service",
  "description": "Luxury private car service from Denver International Airport to Aspen, Colorado. Rolls Royce, Escalade, and Sprinter options. 3.5 hour scenic mountain transfer.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VIP Aspen",
    "telephone": "+19704526636"
  },
  "areaServed": [
    {"@type": "City", "name": "Denver"},
    {"@type": "City", "name": "Aspen"}
  ]
};

const DenverToAspen = () => {
  return (
    <>
      <SEOHead
        title="Denver to Aspen Car Service | Luxury Private Transfer"
        description="Luxury private car service from Denver International Airport (DEN) to Aspen, Colorado. Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. 3.5-hour scenic mountain transfer with professional chauffeur. Book (970) 452-6636."
        keywords="Denver to Aspen car service, DEN to Aspen transfer, Denver airport to Aspen, private car Denver to Aspen, luxury transfer Denver Aspen, chauffeur Denver to Aspen Colorado, Denver International to Aspen"
        canonicalUrl="/denver-to-aspen-car-service"
        schemaData={denverSchema}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(denFaqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center z-0">
          <div className="absolute inset-0 -z-10">
            <img
              src={fleetHero}
              alt="Luxury private car service from Denver International Airport to Aspen Colorado through the Rocky Mountains"
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
                  Denver International → Aspen
                </p>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Private Luxury Car Service <span className="text-gradient-gold">Denver to Aspen</span>
              </h1>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                Skip the shuttle van. Your Aspen experience begins the moment you land at DEN. Choose between the Rolls Royce Cullinan, Cadillac Escalade, or Executive Sprinter for a 3.5-hour transfer through some of the most spectacular mountain scenery in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="luxury" size="lg" asChild>
                  <a href="#booking">Book Your Transfer</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need a Denver to Aspen transfer." />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Route Info */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid gap-6"
              >
                {[
                  { icon: MapPin, title: "225 Miles", detail: "Denver International Airport to Aspen via I-70 & CO-82" },
                  { icon: Clock, title: "~3.5 Hours", detail: "Direct, non-stop transfer with your personal chauffeur" },
                  { icon: Star, title: "Meet & Greet", detail: "Your chauffeur meets you at baggage claim with a name sign" },
                ].map((item) => (
                  <div key={item.title} className="glass-card p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-sm flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-8"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  What's Included
                </h2>
                <ul className="space-y-4">
                  {[
                    "Flight tracking & complimentary wait time",
                    "Meet & greet at baggage claim",
                    "All luggage and ski equipment handled",
                    "Chilled water and refreshments onboard",
                    "Wi-Fi available (select vehicles)",
                    "Door-to-door delivery to your Aspen property",
                    "Return trip scheduling available",
                    "Child seats available on request",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
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
                What to Expect on the <span className="text-gradient-gold">Denver to Aspen Drive</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  The 225-mile journey from Denver International Airport to Aspen is one of the most spectacular drives in the state of Colorado — and one of the most demanding. The route follows Interstate 70 west from Denver through the foothills, climbing to the Eisenhower-Johnson Memorial Tunnel at 11,158 feet before descending past the world-famous ski resorts of Vail and Beaver Creek. From there, the highway drops into Glenwood Canyon — a breathtaking 12-mile corridor where the road is carved into the walls of the Colorado River gorge — before exiting at Glenwood Springs and turning south on Highway 82 along the Roaring Fork River into Aspen.
                </p>
                <p>
                  In winter, Independence Pass (Highway 82 over the Continental Divide) is closed, making the I-70 corridor the only route between Denver and Aspen. Mountain passes, black ice, sudden whiteouts, and altitude all make this a drive that demands an experienced hand. Our professional chauffeurs navigate these roads year-round and know exactly how to handle Colorado's unpredictable mountain weather. That means you can sit back in a heated leather seat, enjoy the scenery, and arrive in Aspen relaxed rather than white-knuckled.
                </p>
                <p>
                  Choose the{" "}
                  <Link to="/rolls-royce-cullinan" className="text-primary hover:text-primary/80 transition-colors">Rolls Royce Cullinan</Link>{" "}
                  for the ultimate Denver to Aspen luxury transfer experience — complete with champagne cooler and bespoke interior. The{" "}
                  <Link to="/cadillac-escalade" className="text-primary hover:text-primary/80 transition-colors">Cadillac Escalade</Link>{" "}
                  is ideal for families and groups with ski equipment, while the{" "}
                  <Link to="/executive-sprinter" className="text-primary hover:text-primary/80 transition-colors">Executive Sprinter</Link>{" "}
                  accommodates up to 13 passengers for corporate retreats and group travel. Prefer a shorter flight?{" "}
                  <Link to="/eagle-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Fly into Eagle (EGE)</Link>{" "}
                  for a 90-minute drive, or{" "}
                  <Link to="/aspen-airport-transfer" className="text-primary hover:text-primary/80 transition-colors">Aspen (ASE)</Link>{" "}
                  for a 5-minute transfer.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stops Along the Way */}
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
                Stops <span className="text-gradient-gold">Along the Way</span>
              </h2>
              <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                <p>
                  One of the advantages of a private Denver to Aspen car service is the ability to customize your route. Many clients request a stop in Vail Village — whether for lunch, shopping, or simply to admire the Bavarian-style architecture. Others prefer to pause in Glenwood Springs to visit the famous Glenwood Hot Springs Pool or the newer Iron Mountain Hot Springs perched along the Colorado River. Both make for a perfect mid-journey break during the 3.5-hour drive.
                </p>
                <p>
                  There are also scenic pulloffs throughout Glenwood Canyon and along the Roaring Fork Valley that offer stunning photo opportunities — your chauffeur can recommend the best viewpoints based on the season and time of day. Whether you want a direct, non-stop transfer or a leisurely journey with curated stops, the itinerary is entirely yours. Just let us know your preferences when booking, or discuss the route with your chauffeur en route.{" "}
                  <Link to="/membership" className="text-primary hover:text-primary/80 transition-colors">Membership</Link>{" "}
                  holders enjoy priority scheduling and complimentary route customization on every trip.
                </p>
              </div>
            </motion.div>
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
                Book Your Denver → <span className="text-gradient-gold">Aspen Transfer</span>
              </h2>
            </motion.div>
            <BookingWidget />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+19704526636" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call (970) 452-6636
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I need to book a Denver to Aspen transfer." />
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default DenverToAspen;