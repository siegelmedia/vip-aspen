import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, Plane } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import BookingWidget from "@/components/BookingWidget";
import ProseSection from "@/components/blocks/ProseSection";
import { createAirportSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import { fadeInUp } from "@/lib/animations";
import type { AirportPageData } from "@/types";

interface AirportPageProps {
  data: AirportPageData;
}

const AirportPage = ({ data }: AirportPageProps) => {
  const schema = createAirportSchema(data);
  const breadcrumbs = [
    { name: "Home", url: COMPANY.url },
    { name: data.hero.tagline, url: `${COMPANY.url}/${data.slug}` },
  ];

  return (
    <PageWrapper
      seo={data.seo}
      schemaData={schema}
      faqs={data.faqs}
      breadcrumbs={breadcrumbs}
    >
      <PageHero data={data.hero}>
        <div id="booking">
          <BookingWidget />
        </div>
      </PageHero>

      {/* Airport Info Card */}
      <SectionContainer background="muted">
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
          <div className="glass-card p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="p-4 bg-primary/10 rounded-sm flex-shrink-0">
              <Plane className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                {data.airport.name}{" "}
                <span className="text-primary">({data.airport.code})</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{data.airport.distanceToAspen} to Aspen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{data.airport.driveTime} transfer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Intro Prose */}
      {data.intro && (
        <SectionContainer>
          <ProseSection content={data.intro} />
        </SectionContainer>
      )}

      {/* Features */}
      {data.features && (
        <SectionContainer background="muted">
          <SectionHeader
            heading="Why Choose {{VIP Aspen}}"
            subtitle="Every detail handled with precision and discretion."
          />
          <FeatureGrid
            items={data.features}
            columns={data.features.length <= 4 ? (data.features.length as 2 | 3 | 4) : 3}
          />
        </SectionContainer>
      )}

      {/* Destinations Grid */}
      {data.destinations && data.destinations.length > 0 && (
        <SectionContainer>
          <SectionHeader
            heading="Popular {{Destinations}}"
            subtitle="We provide transfers to all hotels, resorts, and private residences."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {data.destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {dest.name}
                </h3>
                <p className="text-primary text-sm">{dest.detail}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Fleet Options */}
      {data.fleetOptions && data.fleetOptions.length > 0 && (
        <SectionContainer background="muted">
          <SectionHeader
            heading="Our {{Transfer Fleet}}"
            subtitle="Choose the vehicle that suits your journey."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.fleetOptions.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                    {vehicle.description}
                  </p>
                  <Link
                    to={vehicle.link}
                    className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* FAQs */}
      {data.faqs && (
        <SectionContainer>
          <FAQAccordion faqs={data.faqs} />
        </SectionContainer>
      )}

    </PageWrapper>
  );
};

export default AirportPage;
