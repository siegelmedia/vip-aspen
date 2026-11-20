import { COMPANY } from "@/data/constants";
import type { FAQ, ServicePageData, VehiclePageData, AirportPageData, GuidePageData } from "@/types";

const providerRef = { "@id": `${COMPANY.url}/#organization` };

export const addressSchema = {
  "@type": "PostalAddress" as const,
  streetAddress: COMPANY.address.street,
  addressLocality: COMPANY.address.city,
  addressRegion: COMPANY.address.state,
  postalCode: COMPANY.address.zip,
  addressCountry: COMPANY.address.country,
};

/** Turns a Vite asset path ("/assets/hero-x.webp") or an absolute URL into an absolute URL. */
export const absoluteUrl = (path?: string) =>
  !path ? undefined : /^https?:\/\//.test(path) ? path : `${COMPANY.url}${path.startsWith("/") ? "" : "/"}${path}`;

const colorado = { "@type": "State", name: "Colorado" };
const cityIn = (name: string) => ({ "@type": "City", name, containedInPlace: colorado });
const defaultArea = [cityIn("Aspen")];

/** Strips the page title down to the part before the first pipe. */
const shortTitle = (title: string) => title.split("|")[0]?.trim() || title;

const imageOf = (primary?: string, fallback?: string) => {
  const url = absoluteUrl(primary || fallback);
  return url ? { image: url } : {};
};

export const createServiceSchema = (data: ServicePageData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `VIP Aspen ${shortTitle(data.seo.title)}`,
  description: data.seo.description,
  url: `${COMPANY.url}/${data.slug}`,
  serviceType: data.serviceType || data.hero.tagline,
  provider: providerRef,
  areaServed: data.areaServed?.length ? data.areaServed.map(cityIn) : defaultArea,
  ...imageOf(data.hero.bgImage, data.hero.image),
});

/**
 * A chauffeured vehicle is a service you book, not a product you buy, so this
 * is a Service with the vehicle's maker as its brand. Product markup without a
 * price or review is rejected by Google's rich-result validator.
 */
export const createVehicleSchema = (data: VehiclePageData) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: shortTitle(data.seo.title),
  description: data.seo.description,
  url: `${COMPANY.url}/${data.slug}`,
  serviceType: "Chauffeured vehicle hire",
  provider: providerRef,
  areaServed: defaultArea,
  ...imageOf(data.hero.image, data.hero.bgImage),
  ...(data.vehicle
    ? {
        brand: { "@type": "Brand", name: data.vehicle.make },
        ...(data.vehicle.hourlyRateFrom
          ? {
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: data.vehicle.hourlyRateFrom,
                  priceCurrency: "USD",
                  unitText: "HOUR",
                  description: `From $${data.vehicle.hourlyRateFrom}/hr, 2-hour minimum, chauffeur and fuel included`,
                },
              },
            }
          : {}),
      }
    : {}),
});

export const createAirportSchema = (data: AirportPageData) => {
  const destination = data.destination || "Aspen";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.destination
      ? `${data.airport.code} to ${destination} Transfer`
      : `${data.airport.name} (${data.airport.code}) Transfer`,
    description: data.seo.description,
    url: `${COMPANY.url}/${data.slug}`,
    serviceType: "Airport Transfer",
    provider: providerRef,
    areaServed: destination === "Aspen" ? defaultArea : [cityIn(destination), cityIn("Aspen")],
    ...imageOf(data.hero.bgImage, data.hero.image),
  };
};

/** The named author of every guide: the owner, whose bio and headshot are on /about. */
export const AUTHOR = {
  "@type": "Person",
  "@id": `${COMPANY.url}/about#andrew-siegel`,
  name: "Andrew Siegel",
  jobTitle: "Founder",
  url: `${COMPANY.url}/about`,
  worksFor: providerRef,
};

export const createArticleSchema = (data: GuidePageData) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: data.title.replace(/\{\{|\}\}/g, ""),
  description: data.seo.description,
  url: `${COMPANY.url}/guides/${data.slug}`,
  datePublished: data.datePublished,
  dateModified: data.dateModified,
  author: AUTHOR,
  publisher: providerRef,
  image: absoluteUrl(data.heroImage) || data.seo.ogImage || `${COMPANY.url}/og-image.jpg`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${COMPANY.url}/guides/${data.slug}`,
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

type Node = Record<string, unknown>;

/**
 * Merges several JSON-LD objects into one `@graph` so a page emits a single,
 * connected structured-data block instead of several disconnected scripts.
 * Objects that are already a graph are flattened in.
 */
export const combineSchema = (...nodes: (object | undefined | null | false)[]) => {
  const items: Node[] = [];
  for (const node of nodes) {
    if (!node) continue;
    const { "@context": _context, "@graph": graph, ...rest } = node as Node & { "@graph"?: Node[] };
    void _context;
    if (Array.isArray(graph)) {
      for (const g of graph) {
        const { "@context": _inner, ...item } = g;
        void _inner;
        items.push(item);
      }
    } else {
      items.push(rest);
    }
  }
  return items.length ? { "@context": "https://schema.org", "@graph": items } : undefined;
};
