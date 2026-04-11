import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVIPAspen from "@/components/WhyVIPAspen";
import Fleet from "@/components/Fleet";
import AirportTransfers from "@/components/AirportTransfers";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.vipaspen.com/#organization",
  "name": "VIP Aspen",
  "alternateName": "VIP Aspen Luxury Transportation",
  "description": "Premier luxury black car service, VIP nightlife access, and executive protection in Aspen, Colorado. Rolls Royce, Escalade & Sprinter fleet. Airport transfers from ASE, EGE, RIL & DEN.",
  "url": "https://www.vipaspen.com",
  "logo": "https://www.vipaspen.com/favicon-192.png",
  "telephone": "+1-970-452-6636",
  "email": "info@vipaspen.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "411 E Main St, Suite 205H",
    "addressLocality": "Aspen",
    "addressRegion": "CO",
    "postalCode": "81611",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.1911,
    "longitude": -106.8175
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-970-452-6636",
    "contactType": "reservations",
    "availableLanguage": "English",
    "areaServed": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "Aspen", "containedInPlace": {"@type": "State", "name": "Colorado"}},
    {"@type": "City", "name": "Snowmass Village"},
    {"@type": "City", "name": "Basalt"},
    {"@type": "City", "name": "Carbondale"}
  ],
  "knowsAbout": ["Luxury Transportation", "Airport Transfers", "Executive Protection", "VIP Concierge", "Wedding Transportation", "Corporate Transportation"],
  "sameAs": [
    "https://www.instagram.com/vipaspen",
    "https://www.facebook.com/vipaspen"
  ]
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Luxury Car Service Aspen CO | Rolls Royce, Escalade & Sprinter"
        description="Aspen's #1 luxury car service. Chauffeured Rolls Royce Cullinan, Cadillac Escalade & Executive Sprinter. Airport transfers from ASE/EGE/DEN, ski resort shuttles, VIP nightlife & executive protection. Available 24/7. Call (970) 452-6636."
        keywords="luxury car service Aspen, Aspen chauffeur, Rolls Royce Aspen, black car service Aspen Colorado, Aspen airport transfer, luxury transportation Aspen, VIP car service Aspen, private driver Aspen, chauffeured car Aspen"
        canonicalUrl="/"
        ogImage="https://www.vipaspen.com/og-image.jpg"
        schemaData={homepageSchema}
      />
      <main className="min-h-screen bg-background">
        <Header />
      <Hero />
      <Services />
      <WhyVIPAspen />
      <Fleet />
      <AirportTransfers />
      <Membership />
      <Contact />
      <Footer />
    </main>
    </>
  );
};

export default Index;
