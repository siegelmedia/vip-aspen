import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BookingForm from "@/components/BookingForm";
import TalentCard from "@/components/TalentCard";
import TalentDetailDialog from "@/components/TalentDetailDialog";
import { talentProfiles, TALENT_CATEGORIES } from "@/data/talentProfiles";
import type { TalentProfile } from "@/data/talentProfiles";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "VIP Aspen Talent Gallery",
  description:
    "Browse available talent for private entertainment and promotional services in Aspen. Professional performers, brand ambassadors, and event models.",
  url: "https://www.vipaspen.com/talent",
  provider: {
    "@type": "LocalBusiness",
    name: "VIP Aspen",
    telephone: "+1-970-452-6636",
  },
};

const TalentGallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProfile, setSelectedProfile] = useState<TalentProfile | null>(null);
  const [requestedTalent, setRequestedTalent] = useState<string>("");

  const filteredProfiles =
    activeFilter === "All"
      ? talentProfiles
      : talentProfiles.filter((p) => p.categories.includes(activeFilter));

  const handleRequestTalent = (name: string) => {
    setRequestedTalent(name);
    setTimeout(() => {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <SEOHead
        title="Our Talent — Private Entertainment & Promotional Models"
        description="Browse VIP Aspen's talent roster. Professional performers, brand ambassadors, event hostesses, and atmosphere models available for private bookings and events in Aspen, Colorado."
        keywords="Aspen models, Aspen talent, private entertainment talent, brand ambassadors Aspen, event models Aspen, promotional models Colorado"
        canonicalUrl="/talent"
        schemaData={schemaData}
      />

      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">
                Our Talent
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                Meet Our <span className="text-gradient-gold">Talent</span>
              </h1>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
                Browse our curated roster of professional performers, brand ambassadors,
                and event models. Select your preferred talent and request a booking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            {/* Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-2 justify-center mb-12"
            >
              {TALENT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                    activeFilter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50 text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProfiles.map((profile, index) => (
                <TalentCard
                  key={profile.id}
                  profile={profile}
                  index={index}
                  onSelect={setSelectedProfile}
                />
              ))}
            </div>

            {filteredProfiles.length === 0 && (
              <p className="text-center text-foreground/50 text-lg py-12">
                No talent found in this category. Try selecting a different filter.
              </p>
            )}
          </div>
        </section>

        {/* Detail Dialog */}
        <TalentDetailDialog
          profile={selectedProfile}
          open={selectedProfile !== null}
          onClose={() => setSelectedProfile(null)}
          onRequestTalent={handleRequestTalent}
        />

        {/* Booking */}
        <section id="booking" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <BookingForm
                  talentName={requestedTalent}
                  heading="Request a Booking"
                  subheading="Select your service type and tell us about your event."
                  submitLabel="Request a Booking"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TalentGallery;
