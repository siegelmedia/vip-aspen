import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import PricingTable from "@/components/blocks/PricingTable";
import FAQAccordion from "@/components/blocks/FAQAccordion";
import HowItWorks from "@/components/blocks/HowItWorks";
import BookingCTA from "@/components/blocks/BookingCTA";
import ProseSection from "@/components/blocks/ProseSection";
import TrustBadges from "@/components/blocks/TrustBadges";
import DifferentiatorBlocks from "@/components/blocks/DifferentiatorBlocks";
import CancellationPolicy from "@/components/blocks/CancellationPolicy";
import { createServiceSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import type { ServicePageData } from "@/types";

interface ServicePageProps {
  data: ServicePageData;
  /** "form" for entertainment/promo pages, "widget" for transportation pages */
  bookingVariant?: "form" | "widget";
  /** Cinematic full-viewport hero for property watch style */
  heroVariant?: "standard" | "cinematic";
}

const ServicePage = ({
  data,
  bookingVariant = "widget",
  heroVariant = "standard",
}: ServicePageProps) => {
  const schema = createServiceSchema(data);
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
      <PageHero data={data.hero} variant={heroVariant} />

      {data.trustBadges && (
        <TrustBadges badges={data.trustBadges} variant="inline" />
      )}

      {data.intro && (
        <SectionContainer>
          <ProseSection content={data.intro} />
        </SectionContainer>
      )}

      {data.howItWorks && (
        <SectionContainer background="muted">
          <HowItWorks steps={data.howItWorks} />
        </SectionContainer>
      )}

      {data.features && (
        <SectionContainer>
          <SectionHeader
            heading="What We {{Do}}"
            subtitle="Every detail handled with precision and discretion."
          />
          <FeatureGrid
            items={data.features}
            columns={data.features.length <= 4 ? (data.features.length as 2 | 3 | 4) : 3}
          />
        </SectionContainer>
      )}

      {data.differentiators && (
        <SectionContainer background="muted">
          <DifferentiatorBlocks items={data.differentiators} />
        </SectionContainer>
      )}

      {data.pricing && (
        <SectionContainer>
          <PricingTable tiers={data.pricing} />
        </SectionContainer>
      )}

      {data.cancellationPolicy && (
        <SectionContainer className="py-8">
          <CancellationPolicy policies={data.cancellationPolicy} />
        </SectionContainer>
      )}

      {data.faqs && (
        <SectionContainer>
          <FAQAccordion faqs={data.faqs} />
        </SectionContainer>
      )}

      <SectionContainer id="booking" background="gradient">
        <BookingCTA
          variant={bookingVariant}
          serviceType={data.slug}
          heading={data.hero.ctaLabel ? `{{${data.hero.ctaLabel}}}` : "Ready to {{Book}}?"}
        />
      </SectionContainer>
    </PageWrapper>
  );
};

export default ServicePage;
