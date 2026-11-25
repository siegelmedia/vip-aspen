import { Link } from "react-router-dom";
import { Shield, Car, MapPin, Star, Users, Clock, Award } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SiteShell from "@/components/site/SiteShell";
import Marquee from "@/components/site/Marquee";
import { CtaRound } from "@/components/site/Shared";
import PageHero from "@/components/layout/PageHero";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeader from "@/components/layout/SectionHeader";
import { createBreadcrumbSchema } from "@/lib/schema";
import { COMPANY } from "@/data/constants";
import heroImage from "@/assets/hero-aspen.webp";
import cullinanImage from "@/assets/rolls-royce-cullinan.webp";
import escaladeImage from "@/assets/escalade.webp";
import sprinterImage from "@/assets/sprinter.webp";
import teamImage from "@/assets/rr-cullinan-aspen-exit.webp";

/**
 * Leadership. The credentials here are the company's strongest trust signal
 * and are published so search engines and AI answer engines can attribute the
 * site to named, verifiable people (E-E-A-T). The @id anchors match the Person
 * nodes referenced from the Organization schema and every guide's author.
 */
const leaders = [
  {
    id: "andrew-siegel",
    name: "Andrew Siegel",
    title: "Founder",
    photo: "/andrewheadshot.jpg",
    credentials: ["Former Colorado State Trooper", "Reserve Colorado Ranger", "Dignitary protection certified"],
    bio: "Andrew Siegel is the founder of VIP Aspen and its sister company Summit Black Car, and the owner of Aspen Security. A former Colorado State Trooper and current Reserve Colorado Ranger, Andrew is certified in dignitary protection and has experience supporting high-profile motorcades, executive travel, and VIP movements throughout Colorado. His background in law enforcement, mountain operations, and executive protection shaped the company's focus on safety, discretion, and luxury service.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${COMPANY.url}/about#webpage`,
      url: `${COMPANY.url}/about`,
      name: "About VIP Aspen",
      about: { "@id": `${COMPANY.url}/#organization` },
      isPartOf: { "@type": "WebSite", url: COMPANY.url, name: COMPANY.name },
    },
    createBreadcrumbSchema([
      { name: "Home", url: COMPANY.url },
      { name: "About", url: `${COMPANY.url}/about` },
    ]),
    ...leaders.map((person) => ({
      "@type": "Person",
      "@id": `${COMPANY.url}/about#${person.id}`,
      name: person.name,
      jobTitle: person.title,
      description: person.bio,
      image: `${COMPANY.url}${person.photo}`,
      url: `${COMPANY.url}/about#${person.id}`,
      worksFor: { "@id": `${COMPANY.url}/#organization` },
      knowsAbout: person.credentials,
    })),
  ],
};

const pillars = [
  {
    icon: Award,
    title: "Vehicles Chosen for the Mountains",
    description:
      "A Rolls-Royce Cullinan with a bespoke interior, late-model Cadillac Escalades, and a 13-passenger Executive Sprinter, all selected for Colorado winters and the expectations of our clients.",
  },
  {
    icon: Shield,
    title: "Law Enforcement-Owned",
    description:
      "VIP Aspen is a law enforcement-owned company. Every chauffeur is background-checked and trained, and vetting, discretion, and planning are built into every ride, not added on.",
  },
  {
    icon: MapPin,
    title: "Aspen Local Knowledge",
    description:
      "Every hotel entrance, FBO gate, valet stand, and mountain road in every season. Our team lives and works in the Roaring Fork Valley, and it shows in the details.",
  },
  {
    icon: Clock,
    title: "One Call, Around the Clock",
    description:
      "Dispatch is staffed 24/7. Transportation, VIP access, and protection are coordinated by one team, so you make one call and everything else is handled.",
  },
];

const fleet = [
  {
    name: "Rolls-Royce Cullinan",
    description:
      "Bespoke Mandarin interior, starlight headliner, and a champagne cooler. The flagship of the fleet and the vehicle Aspen's most discerning guests request by name.",
    image: cullinanImage,
    alt: "Rolls-Royce Cullinan available for chauffeured hire in Aspen",
    link: "/rolls-royce-cullinan",
  },
  {
    name: "Cadillac Escalade",
    description:
      "The latest-generation Escalade with massaging seats, a curved OLED display, and full-time four-wheel drive. Our workhorse for airport transfers, ski days, and executive travel.",
    image: escaladeImage,
    alt: "Cadillac Escalade luxury SUV for Aspen airport transfers",
    link: "/cadillac-escalade",
  },
  {
    name: "Executive Sprinter",
    description:
      "Up to 13 passengers in first-class comfort with a conference layout, entertainment system, and room for everyone's gear. Built for corporate groups, wedding parties, and group ski trips.",
    image: sprinterImage,
    alt: "Executive Mercedes Sprinter van for group transportation in Aspen",
    link: "/executive-sprinter",
  },
];

const services = [
  { label: "Black Car Service", href: "/black-car-service", icon: Car },
  { label: "ASE Airport Transfer", href: "/aspen-airport-transfer", icon: MapPin },
  { label: "Eagle Airport Transfer", href: "/eagle-airport-transfer", icon: MapPin },
  { label: "Rifle Airport Transfer", href: "/rifle-airport-transfer", icon: MapPin },
  { label: "Denver to Aspen", href: "/denver-to-aspen-car-service", icon: MapPin },
  { label: "VIP Club Access", href: "/aspen-clubs", icon: Star },
  { label: "Executive Protection", href: "/executive-protection", icon: Shield },
  { label: "Membership", href: "/membership", icon: Users },
];

const serviceAreas = [
  "Aspen",
  "Snowmass Village",
  "Basalt",
  "Woody Creek",
  "Carbondale",
  "Glenwood Springs",
  "Vail & Beaver Creek",
  "Denver & Front Range",
];

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About VIP Aspen | Law Enforcement-Owned Car Service"
        description="VIP Aspen is a law enforcement-owned luxury car service in Aspen, Colorado. Chauffeured Rolls-Royce Cullinan, Cadillac Escalade & Executive Sprinter, available 24/7."
        keywords="about VIP Aspen, luxury car service Aspen Colorado, VIP transportation Roaring Fork Valley, Aspen car service company, Aspen chauffeur service"
        canonicalUrl="/about"
        schemaData={aboutSchema}
      />

      <SiteShell>
        <PageHero
          data={{
            tagline: "About VIP Aspen",
            headline: "Transportation, Access & Protection. {{One Aspen Team.}}",
            description:
              "VIP Aspen is a law enforcement-owned company built for the way people actually visit Aspen: arriving by jet, moving between mountains and dinners, and expecting every detail to be handled quietly.",
            bgImage: heroImage,
            ctaLabel: "Contact Us",
            ctaLink: "/contact",
          }}
          crumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        />
        <Marquee />

        {/* Story */}
        <section className="sec sec--split">
          <div className="wrap duo">
            <figure className="duo__img">
              <img
                src={teamImage}
                alt="VIP Aspen chauffeur with the Rolls-Royce Cullinan in downtown Aspen"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="duo__copy">
              <p className="eyebrow">Our Story</p>
              <h2 className="h2">
                Built for Aspen's <em>Most Demanding Guests</em>
              </h2>
              <p>
                VIP Aspen was founded to fill a gap in the Aspen luxury market. Most car services offer a ride from A
                to B. The executives, athletes, entertainers, and families who choose this town over anywhere else in
                the world need more than that: a chauffeur who understands discretion, a vehicle that belongs on Main
                Street, and a team that can arrange the table, the tarmac, and the security detail with the same phone
                call.
              </p>
              <p>
                VIP Aspen is a law enforcement-owned company, and that background shapes everything about how we
                work. Every chauffeur is
                background-checked and trained. Every itinerary is planned in advance. Confidentiality is a standing
                policy, not a request.
              </p>
              <p>
                We are also unapologetically local. Our team knows every hotel entrance, every FBO gate at ASE, every
                valet stand, and how Highway 82 behaves in a February storm. That knowledge cannot be trained into a
                national franchise or an app. It comes from living and working in the Roaring Fork Valley, and it is
                the reason our clients come back season after season.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="sec sec--paper">
          <div className="wrap">
            <SectionHeader
              eyebrow="Founder"
              heading="The Person {{Behind VIP Aspen}}"
              subtitle="A law enforcement background, not a dispatch desk. Andrew sets the standard for every ride."
            />
            <div className="crew crew--1" style={{ marginTop: 0 }}>
              {leaders.map((person) => (
                <article key={person.id} id={person.id} className="crew__card">
                  <div className="crew__photo">
                    <img
                      src={person.photo}
                      alt={`${person.name}, ${person.title} at VIP Aspen`}
                      width={900}
                      height={1125}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="crew__body">
                    <h3>{person.name}</h3>
                    <p className="crew__role">{person.title}</p>
                    <ul className="crew__creds">
                      {person.credentials.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                    <p className="crew__bio">
                      <b className="crew__who">{person.name}</b> {person.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <SectionContainer>
          <SectionHeader
            eyebrow="What Sets Us Apart"
            heading="The VIP Aspen {{Standard}}"
            subtitle="Four commitments that apply to every ride, every client, every season."
          />
          <div className="svc svc--4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="svc__card">
                  <span className="svc__icon">
                    <Icon aria-hidden="true" strokeWidth={1.5} />
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </SectionContainer>

        {/* Fleet */}
        <SectionContainer background="muted">
          <SectionHeader
            eyebrow="The Fleet"
            heading="Three Vehicles, {{Hand-Selected}}"
            subtitle="Chosen for Colorado mountain driving and the expectations of the people who ride in them."
          />
          <div className="cards3">
            {fleet.map((vehicle) => (
              <Link key={vehicle.name} to={vehicle.link} className="gcard">
                <div className="gcard__img">
                  <img src={vehicle.image} alt={vehicle.alt} loading="lazy" decoding="async" />
                </div>
                <div className="gcard__body">
                  <h3>{vehicle.name}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".93rem" }}>{vehicle.description}</p>
                  <span className="go">
                    View vehicle <i aria-hidden="true">&rarr;</i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SectionContainer>

        {/* Service Area */}
        <section className="sec sec--ink overview">
          <div className="wrap overview__grid">
            <div className="overview__intro">
              <p className="eyebrow">Where We Operate</p>
              <h2 className="h2">
                Aspen and the <em>Roaring Fork Valley</em>
              </h2>
              <p className="lead" style={{ marginTop: "1.25rem", maxWidth: "60ch" }}>
                VIP Aspen provides luxury car service throughout Aspen and the entire Roaring Fork Valley, from
                downtown to Snowmass Village, Basalt, Woody Creek, Carbondale, and Glenwood Springs. We also run
                long-distance chauffeured service to Vail, Beaver Creek, and Denver, and private airport transfers from
                Aspen (ASE), Rifle Garfield County (RIL), Eagle County (EGE), and Denver International (DEN). Wherever
                you are headed in the Colorado mountains, we get you there in style.
              </p>
            </div>
            <aside className="glance" style={{ background: "var(--graphite)" }} aria-labelledby="areas-h">
              <h2 id="areas-h">Service Areas</h2>
              <ul className="ticks" style={{ gridTemplateColumns: "1fr 1fr" }}>
                {serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* Services */}
        <SectionContainer>
          <SectionHeader
            eyebrow="What We Do"
            heading="Explore Our {{Services}}"
            subtitle="Transportation, VIP access, and security, coordinated by one team."
          />
          <nav className="rel" aria-label="Services" style={{ marginTop: 0 }}>
            {services.map((service) => (
              <Link key={service.href} to={service.href}>
                <span>{service.label}</span>
                <i aria-hidden="true">&rarr;</i>
              </Link>
            ))}
          </nav>
        </SectionContainer>

        <CtaRound
          title="Experience {{VIP Aspen}}"
          text="Tell us your dates, your flights, and your plans. We will handle the rest. Book online or call"
        />
      </SiteShell>
    </>
  );
};

export default AboutPage;
