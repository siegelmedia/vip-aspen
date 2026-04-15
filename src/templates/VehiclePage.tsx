import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import BookingCTA from "@/components/blocks/BookingCTA";
import ProseSection from "@/components/blocks/ProseSection";
import { createVehicleSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import type { VehiclePageData } from "@/types";

interface VehiclePageProps {
  data: VehiclePageData;
}

const VehiclePage = ({ data }: VehiclePageProps) => {
  const schema = createVehicleSchema(data);
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
      <PageHero data={data.hero} />

      {data.intro && (
        <SectionContainer>
          <ProseSection content={data.intro} />
        </SectionContainer>
      )}

      {data.features && (
        <SectionContainer>
          <SectionHeader
            heading="What Sets It {{Apart}}"
            subtitle="Every detail crafted for discerning Aspen travelers."
          />
          <FeatureGrid
            items={data.features}
            columns={data.features.length <= 4 ? (data.features.length as 2 | 3 | 4) : 3}
          />
        </SectionContainer>
      )}

      {data.gallery && data.gallery.length > 0 && (
        <SectionContainer background="muted">
          <SectionHeader
            heading="The {{Experience}}"
            subtitle="Step inside and see what awaits."
          />
          <div
            className={`grid gap-4 ${
              data.gallery.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {data.gallery.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      )}

      {data.faqs && (
        <SectionContainer>
          <FAQAccordion faqs={data.faqs} />
        </SectionContainer>
      )}

      <SectionContainer id="booking" background="gradient">
        <BookingCTA
          variant="widget"
          serviceType={data.slug}
          heading={data.hero.ctaLabel ? `{{${data.hero.ctaLabel}}}` : "Ready to {{Book}}?"}
        />
      </SectionContainer>
    </PageWrapper>
  );
};

export default VehiclePage;
