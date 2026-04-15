import { COMPANY } from "@/data/constants";
import type { FAQ, ServicePageData, VehiclePageData, AirportPageData } from "@/types";

const providerRef = { "@id": `${COMPANY.url}/#organization` };

const addressSchema = {
  "@type": "PostalAddress" as const,
  streetAddress: COMPANY.address.street,
  addressLocality: COMPANY.address.city,
  addressRegion: COMPANY.address.state,
  postalCode: COMPANY.address.zip,
  addressCountry: COMPANY.address.country,
};

export const createServiceSchema = (data: ServicePageData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `VIP Aspen ${data.seo.title.split("|")[0]?.trim() || data.seo.title}`,
  description: data.seo.description,
  url: `${COMPANY.url}/${data.slug}`,
  provider: providerRef,
  areaServed: {
    "@type": "City",
    name: "Aspen",
    containedInPlace: { "@type": "State", name: "Colorado" },
  },
});

export const createVehicleSchema = (data: VehiclePageData) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: data.seo.title.split("|")[0]?.trim() || data.seo.title,
  description: data.seo.description,
  url: `${COMPANY.url}/${data.slug}`,
  brand: { "@type": "Brand", name: "VIP Aspen" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
});

export const createAirportSchema = (data: AirportPageData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${data.airport.name} (${data.airport.code}) Transfer`,
  description: data.seo.description,
  url: `${COMPANY.url}/${data.slug}`,
  serviceType: "Airport Transfer",
  provider: providerRef,
  areaServed: {
    "@type": "City",
    name: "Aspen",
    containedInPlace: { "@type": "State", name: "Colorado" },
  },
});

export const createFAQSchema = (faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const createBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});
