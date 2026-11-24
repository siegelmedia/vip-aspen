import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import Marquee from "@/components/site/Marquee";
import { CtaRound, FaqSection, RelatedLinks } from "@/components/site/Shared";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import PricingTable from "@/components/blocks/PricingTable";
import HowItWorks from "@/components/blocks/HowItWorks";
import BookingCTA from "@/components/blocks/BookingCTA";
import ProseSection from "@/components/blocks/ProseSection";
import LinkedPagesGrid from "@/components/blocks/LinkedPagesGrid";
import TrustBadges from "@/components/blocks/TrustBadges";
import DifferentiatorBlocks from "@/components/blocks/DifferentiatorBlocks";
import CancellationPolicy from "@/components/blocks/CancellationPolicy";
import { createServiceSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import type { ServicePageData } from "@/types";

interface ServicePageProps {
  data: ServicePageData;
  /** "form" for security and access pages, "widget" for transportation pages, "contact-only" for call/email */
  bookingVariant?: "form" | "widget" | "contact-only";
  /**
   * "hero" and "top" put the booking band directly under the page header (the
   * bookable transportation pages); "bottom" (default) closes the page with it.
   */
  bookingPosition?: "hero" | "top" | "bottom";
}

const ServicePage = ({ data, bookingVariant = "widget", bookingPosition = "bottom" }: ServicePageProps) => {
  const schema = createServiceSchema(data);
  const breadcrumbs = [
    { name: "Home", url: COMPANY.url },
    { name: data.hero.tagline, url: `${COMPANY.url}/${data.slug}` },
  ];
  const bookingFirst = bookingPosition !== "bottom";

  return (
    <PageWrapper seo={data.seo} schemaData={schema} faqs={data.faqs} breadcrumbs={breadcrumbs}>
      <PageHero data={data.hero} />
      <Marquee />

      {bookingFirst && (
        <BookingCTA
          id="booking"
          variant={bookingVariant}
          serviceType={data.slug}
          heading="Book {{Now}}"
          subheading="Select your vehicle, date, and route — we handle the rest."
        />
      )}

      {data.trustBadges && <TrustBadges badges={data.trustBadges} variant="inline" />}

      {data.intro && (
        <SectionContainer background="muted">
          <ProseSection content={data.intro} lead />
        </SectionContainer>
      )}

      {data.features && (
        <SectionContainer>
          <SectionHeader heading="What We {{Do}}" subtitle="Every detail handled with precision and discretion." />
          <FeatureGrid
            items={data.features}
            columns={data.features.length <= 4 ? (data.features.length as 2 | 3 | 4) : 3}
          />
        </SectionContainer>
      )}

      {data.linkedPageGroups?.map((group, i) => (
        <SectionContainer key={group.heading} background={i % 2 === 0 ? "muted" : "default"}>
          <LinkedPagesGrid group={group} />
        </SectionContainer>
      ))}

      {data.howItWorks && (
        <SectionContainer>
          <HowItWorks steps={data.howItWorks} />
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
        <SectionContainer>
          <CancellationPolicy policies={data.cancellationPolicy} />
        </SectionContainer>
      )}

      <FaqSection faqs={data.faqs} />

      <RelatedLinks items={data.relatedServices} paper />

      {bookingFirst ? (
        <CtaRound />
      ) : (
        <BookingCTA id="booking" variant={bookingVariant} serviceType={data.slug} heading="Ready to {{Get Started}}?" />
      )}
    </PageWrapper>
  );
};

export default ServicePage;
