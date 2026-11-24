import PageWrapper from "@/components/layout/PageWrapper";
import PageHero from "@/components/layout/PageHero";
import Marquee from "@/components/site/Marquee";
import { CtaRound, GuideCards } from "@/components/site/Shared";
import { guideSummaries } from "@/data/guides";
import { COMPANY } from "@/data/constants";
import heroImage from "@/assets/guide-winter-travel.webp";
import type { SEOData } from "@/types";

const seo: SEOData = {
  title: "Aspen Travel & Transportation Guides",
  description:
    "Practical guides to getting to and around Aspen: how to get from Denver, which airport to fly into (ASE vs. Eagle), whether you need a car, and more.",
  keywords:
    "Aspen travel guide, Aspen transportation guide, how to get to Aspen, getting around Aspen, Aspen airport guide",
  canonicalUrl: "/guides",
  ogImage: "https://www.vipaspen.com/og-image.jpg",
};

const breadcrumbs = [
  { name: "Home", url: COMPANY.url },
  { name: "Guides", url: `${COMPANY.url}/guides` },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aspen Travel & Transportation Guides",
  itemListElement: guideSummaries.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.title.replace(/\{\{|\}\}/g, ""),
    url: `${COMPANY.url}/guides/${g.slug}`,
  })),
};

const GuidesIndex = () => {
  return (
    <PageWrapper seo={seo} schemaData={itemListSchema} breadcrumbs={breadcrumbs}>
      <PageHero
        data={{
          tagline: "Aspen Travel Guides",
          headline: "Getting To & Around {{Aspen}}",
          description:
            "Honest, practical answers to the questions every Aspen visitor asks — written by a team that drives these roads every day.",
          bgImage: heroImage,
        }}
        crumbs={[{ name: "Home", href: "/" }, { name: "Guides" }]}
        cta={false}
      />
      <Marquee />

      <section className="sec sec--paper">
        <div className="wrap">
          <GuideCards guides={guideSummaries} h="h2" excerpt />
        </div>
      </section>

      <CtaRound />
    </PageWrapper>
  );
};

export default GuidesIndex;
