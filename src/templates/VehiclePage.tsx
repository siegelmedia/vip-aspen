import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import Marquee from "@/components/site/Marquee";
import { FaqSection, RelatedLinks, plain } from "@/components/site/Shared";
import FeatureGrid from "@/components/blocks/FeatureGrid";
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
    { name: plain(data.hero.headline), url: `${COMPANY.url}/${data.slug}` },
  ];

  // "At a glance": the page's own spec list when it has one, else the vehicle's identity.
  const facts: { label: string; value: string }[] =
    data.specs && data.specs.length > 0
      ? data.specs
      : data.vehicle
        ? [
            { label: "Vehicle", value: `${data.vehicle.make} ${data.vehicle.model}` },
            { label: "Passengers", value: `Up to ${data.vehicle.passengers}` },
            { label: "Hourly service", value: "2-hour minimum, chauffeur and fuel included" },
            { label: "Pricing", value: "Shown instantly in the booking form" },
            { label: "Availability", value: "24/7, with a professional chauffeur" },
          ]
        : [];

  return (
    <PageWrapper seo={data.seo} schemaData={schema} faqs={data.faqs} breadcrumbs={breadcrumbs}>
      <PageHero
        data={data.hero}
        crumbs={[{ name: "Home", href: "/" }, { name: plain(data.hero.headline) }]}
      />
      <Marquee />

      {/* On-page booking form, directly below the header so the header's
          "Book the ..." button (#booking) lands on it. */}
      <BookingCTA
        id="booking"
        variant="widget"
        serviceType={data.slug}
        heading={data.hero.ctaLabel ? `{{${data.hero.ctaLabel}}}` : "Reserve Your {{Vehicle}}"}
        subheading="Select your date, route, and vehicle — reserve in under a minute."
      />

      <section className="sec sec--paper overview">
        <div className="wrap overview__grid">
          <div className="overview__intro">
            {data.intro ? (
              <ProseSection content={data.intro} lead eyebrow="Overview" />
            ) : (
              <p className="lead">{data.hero.description}</p>
            )}
          </div>
          {facts.length > 0 && (
            <aside className="glance" aria-labelledby="glance-h">
              <h2 id="glance-h">At a glance</h2>
              <dl>
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
              <a className="btn btn--brass" href="#booking">
                {data.hero.ctaLabel || "Get an Instant Quote"}
              </a>
            </aside>
          )}
        </div>
      </section>

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
          <SectionHeader heading="The {{Experience}}" subtitle="Step inside and see what awaits." />
          <div className={`gallery${data.gallery.length === 2 || data.gallery.length === 4 ? "" : " gallery--3"}`}>
            {data.gallery.map((src, index) => (
              <figure key={src}>
                <img src={src} alt={`${plain(data.hero.headline)}, photo ${index + 1}`} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>
        </SectionContainer>
      )}

      <FaqSection faqs={data.faqs} />

      <RelatedLinks items={data.relatedServices} paper />

      <BookingCTA
        variant="contact-only"
        serviceType={data.slug}
        heading="Prefer to {{Speak With Us}}?"
        subheading="Our team is available 24/7 to arrange your ride. Call, message, or email anytime."
      />
    </PageWrapper>
  );
};

export default VehiclePage;
