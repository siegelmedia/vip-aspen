import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AreasMarquee from "@/components/AreasMarquee";
import Services from "@/components/Services";
import WhyVIPAspen from "@/components/WhyVIPAspen";
import Fleet from "@/components/Fleet";
import HowWeWork from "@/components/HowWeWork";
import CTABand from "@/components/CTABand";
import AirportTransfers from "@/components/AirportTransfers";
import HomeGuides from "@/components/HomeGuides";
import HomeFAQ, { homeFaqs } from "@/components/HomeFAQ";
import { createFAQSchema } from "@/lib/schema";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingWidget from "@/components/BookingWidget";
import { fadeInUp } from "@/lib/animations";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Luxury Car Service Aspen CO | Rolls Royce, Escalade & Sprinter"
        description="Aspen's #1 luxury car service & VIP concierge. Chauffeured Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. Airport transfers, private ski transfers & executive protection. Available 24/7. Call (970) 452-6636."
        keywords="luxury car service Aspen, Aspen chauffeur, Rolls Royce Aspen, black car service Aspen Colorado, Aspen airport transfer, luxury transportation Aspen, VIP car service Aspen, private driver Aspen, Aspen security"
        canonicalUrl="/"
        ogImage="https://www.vipaspen.com/og-image.jpg"
        schemaData={createFAQSchema(homeFaqs)}
      />
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <AreasMarquee />
        <Services />
        <Fleet />
        <HowWeWork />
        <WhyVIPAspen />
        <AirportTransfers />
        <HomeGuides />

        {/* On-page booking — the BookRidesOnline reservation widget */}
        <section id="booking" className="py-20 md:py-28 bg-muted/20">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-10 max-w-2xl mx-auto">
              <p className="eyebrow mb-4">Reserve</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
                Book Your <span className="text-gradient-gold">Aspen Ride</span>
              </h2>
              <p className="text-foreground/60 text-lg">
                Select your vehicle, date, and route — confirmed in minutes. No surge pricing,
                available 24/7.
              </p>
            </motion.div>
            <BookingWidget />
          </div>
        </section>

        <HomeFAQ />
        <CTABand />

        <Footer />
      </main>
    </>
  );
};

export default Index;
