import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import Marquee from "@/components/site/Marquee";
import { FaqSection, RelatedLinks } from "@/components/site/Shared";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import ProseSection from "@/components/blocks/ProseSection";
import BookingCTA from "@/components/blocks/BookingCTA";
import { createAirportSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import type { AirportPageData } from "@/types";

interface AirportPageProps {
  data: AirportPageData;
}

const AirportPage = ({ data }: AirportPageProps) => {
  const schema = createAirportSchema(data);
  // Destination pages (e.g. Snowmass) reuse this template for an airport they
  // do not describe, so the labels say where the ride goes, not "to Aspen".
  const destination = data.destination || "Aspen";
  const breadcrumbs = [
    { name: "Home", url: COMPANY.url },
    { name: data.hero.tagline, url: `${COMPANY.url}/${data.slug}` },
  ];

  return (
    <PageWrapper seo={data.seo} schemaData={schema} faqs={data.faqs} breadcrumbs={breadcrumbs}>
      <PageHero data={data.hero} />
      <Marquee />

      <BookingCTA
        id="booking"
        variant="widget"
        serviceType={data.slug}
        heading={data.destination ? `Book Your {{${destination} Transfer}}` : `Book Your {{${data.airport.code} Transfer}}`}
        subheading="Flight-tracked pickups, luggage handled at the vehicle, and an all-inclusive quote before you book."
      />

      {/* Overview: the page's opening text beside the airport facts */}
      <section className="sec sec--paper overview">
        <div className="wrap overview__grid">
          <div className="overview__intro">
            {data.intro ? (
              <ProseSection content={data.intro} lead eyebrow="Overview" />
            ) : (
              <p className="lead">{data.hero.description}</p>
            )}
          </div>
          <aside className="glance" aria-labelledby="glance-h">
            <h2 id="glance-h">At a glance</h2>
            <dl>
              <div>
                <dt>Airport</dt>
                <dd>
                  {data.airport.name} ({data.airport.code})
                </dd>
              </div>
              <div>
                <dt>Distance to {destination}</dt>
                <dd>{data.airport.distanceToAspen}</dd>
              </div>
              <div>
                <dt>Transfer time</dt>
                <dd>{data.airport.driveTime}</dd>
              </div>
              <div>
                <dt>Dispatch</dt>
                <dd>
                  24/7 &middot; <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
            <a className="btn btn--brass" href="#booking">
              Get an Instant Quote
            </a>
          </aside>
        </div>
      </section>

      {data.features && (
        <SectionContainer>
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

      {data.destinations && data.destinations.length > 0 && (
        <SectionContainer background="muted">
          <SectionHeader
            heading="Popular {{Destinations}}"
            subtitle="We provide transfers to all hotels, resorts, and private residences."
          />
          <div className="svc svc--4">
            {data.destinations.map((dest) => (
              <div key={dest.name} className="svc__card">
                <h3>{dest.name}</h3>
                <p>{dest.detail}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      )}

      {data.fleetOptions && data.fleetOptions.length > 0 && (
        <SectionContainer>
          <SectionHeader heading="Our {{Transfer Fleet}}" subtitle="Choose the vehicle that suits your journey." />
          <div className="cards3">
            {data.fleetOptions.map((vehicle) => (
              <Link key={vehicle.name} to={vehicle.link} className="gcard">
                <div className="gcard__img">
                  <img src={vehicle.image} alt={vehicle.name} loading="lazy" decoding="async" />
                </div>
                <div className="gcard__body">
                  <h3>{vehicle.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".93rem" }}>{vehicle.description}</p>
                  <span className="go">
                    Learn more <i aria-hidden="true">&rarr;</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SectionContainer>
      )}

      <FaqSection faqs={data.faqs} paper />

      <RelatedLinks items={data.relatedServices} />

      {/* Closing conversion point for readers who scrolled past the booking form */}
      <BookingCTA
        variant="contact-only"
        serviceType={data.slug}
        heading={data.destination ? `Reserve Your {{${destination} Transfer}}` : `Reserve Your {{${data.airport.code} Transfer}}`}
        subheading="Flight-tracked pickups, luggage handled at the vehicle, and an all-inclusive quote before you book. Book online above or reach our 24/7 dispatch."
      />
    </PageWrapper>
  );
};

export default AirportPage;
