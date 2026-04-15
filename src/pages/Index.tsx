import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVIPAspen from "@/components/WhyVIPAspen";
import Fleet from "@/components/Fleet";
import AirportTransfers from "@/components/AirportTransfers";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StatsBar from "@/components/blocks/StatsBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { COMPANY } from "@/data/constants";
import { fadeInUp } from "@/lib/animations";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Luxury Car Service Aspen CO | Rolls Royce, Escalade & Sprinter"
        description="Aspen's #1 luxury car service & VIP concierge. Chauffeured Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. Airport transfers, property security, VIP entertainment & executive protection. Available 24/7. Call (970) 452-6636."
        keywords="luxury car service Aspen, Aspen chauffeur, Rolls Royce Aspen, black car service Aspen Colorado, Aspen airport transfer, luxury transportation Aspen, VIP car service Aspen, private driver Aspen, property watch Aspen, Aspen security"
        canonicalUrl="/"
        ogImage="https://www.vipaspen.com/og-image.jpg"
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <StatsBar
          stats={[
            { label: "Available 24/7" },
            { label: "Veteran & LEO Owned" },
            { label: "Colorado Licensed Security" },
            { label: "Serving the Roaring Fork Valley" },
          ]}
        />
        <Services />
        <Fleet />
        <WhyVIPAspen />
        <AirportTransfers />

        {/* Contact CTA — membership mention but not the focus */}
        <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Ready to Experience <span className="text-gradient-gold">VIP Aspen</span>?
              </h2>
              <p className="text-foreground/70 text-lg mb-4 max-w-xl mx-auto">
                Contact us today for transportation, entertainment, security, or property watch services.
              </p>
              <p className="text-foreground/50 text-sm mb-8 max-w-md mx-auto">
                <Link to="/membership" className="text-primary hover:underline">
                  VIP Members
                </Link>{" "}
                save 10-20% on all services with priority booking and dedicated concierge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call {COMPANY.phoneDisplay}
                  </a>
                </Button>
                <WhatsAppButton message="Hello, I'd like to learn more about VIP Aspen services." />
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

export default Index;
