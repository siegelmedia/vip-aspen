import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import SiteShell from "@/components/site/SiteShell";
import Marquee from "@/components/site/Marquee";
import { CtaRound, FaqSection, GuideCards } from "@/components/site/Shared";
import VideoHero from "@/components/home/VideoHero";
import FleetShowcase from "@/components/home/FleetShowcase";
import WhereWeDrive from "@/components/home/WhereWeDrive";
import { AboutBand, Chauffeurs, Intro, SeoBlock, ServiceTiles, Standards, WhatToExpect } from "@/components/home/Sections";
import { homeFaqs } from "@/components/HomeFAQ";
import { guideSummaries } from "@/data/guides";
import { createFAQSchema } from "@/lib/schema";

/**
 * Homepage, section for section in the order of summitblackcar.com
 * (2026-11-23 rebuild). Sections that need material VIP Aspen does not have
 * yet (partner logos, memberships, client reviews) are left out until Andrew
 * supplies them; see REDESIGN-PLAN.md.
 */
const Index = () => {
  return (
    <>
      <SEOHead
        title="Aspen Luxury Car Service | Rolls Royce, Escalade"
        description="Luxury car service in Aspen, Colorado: chauffeured Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. Airport transfers, ski transfers & executive protection, 24/7."
        keywords="luxury car service Aspen, Aspen chauffeur, Rolls Royce Aspen, black car service Aspen Colorado, Aspen airport transfer, luxury transportation Aspen, VIP car service Aspen, private driver Aspen"
        canonicalUrl="/"
        ogImage="https://www.vipaspen.com/og-image.jpg"
        schemaData={createFAQSchema(homeFaqs)}
      />
      <SiteShell>
        <VideoHero />
        <Marquee />
        <Intro />
        <ServiceTiles />
        <Standards />
        <FleetShowcase />
        <WhatToExpect />
        <Chauffeurs />
        <WhereWeDrive />
        <AboutBand />
        <FaqSection faqs={homeFaqs} heading="Questions We Hear {{Every Day}}" />
        <section className="sec sec--paper" id="guides">
          <div className="wrap">
            <div className="sec__head center">
              <p className="eyebrow">Aspen Travel Guides</p>
              <h2 className="h2">
                Plan Your Trip Like a <em>Local</em>
              </h2>
              <p className="lead">
                Honest answers to the questions every Aspen visitor asks, written by the team that drives these roads
                every day.
              </p>
            </div>
            <GuideCards guides={guideSummaries.slice(0, 3)} />
            <div className="btns center" style={{ justifyContent: "center" }}>
              <Link className="btn btn--dark" to="/guides">
                All Aspen Guides
              </Link>
            </div>
          </div>
        </section>
        <SeoBlock />
        <CtaRound />
      </SiteShell>
    </>
  );
};

export default Index;
