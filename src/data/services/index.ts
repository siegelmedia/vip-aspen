import type { ServicePageData } from "@/types";

/**
 * Service pages are loaded on demand, one chunk per page.
 *
 * These data objects are large (long-form copy, FAQs, pricing tables) and used
 * to be imported eagerly so App.tsx could enumerate routes — which parked every
 * page's content in the main bundle whether or not the visitor ever opened it.
 * The route table only needs the slugs, so the values stay behind dynamic
 * imports and each page's copy ships with the page.
 *
 * Adding a page = add a data file + one line here. Nothing else to register:
 * the router, the sitemap generator, and the slug list all read this map.
 */
export const serviceLoaders: Record<
  string,
  () => Promise<{ default: ServicePageData }>
> = {
  "black-car-service": () => import("./black-car-service"),
  "hourly-chauffeur": () => import("./hourly-chauffeur"),
  "multi-day-chauffeur": () => import("./multi-day-chauffeur"),
  "private-ski-transfers": () => import("./private-ski-transfers"),
  "aspen-private-jet-transfer": () => import("./aspen-private-jet-transfer"),
  "vail-to-aspen-car-service": () => import("./vail-to-aspen-car-service"),
  "glenwood-springs-to-aspen-car-service": () =>
    import("./glenwood-springs-to-aspen-car-service"),
  "beaver-creek-to-aspen-car-service": () => import("./beaver-creek-to-aspen-car-service"),
  "special-event-transportation": () => import("./special-event-transportation"),
  "aspen-food-and-wine-transportation": () => import("./aspen-food-and-wine-transportation"),
  "aspen-new-years-eve-transportation": () => import("./aspen-new-years-eve-transportation"),
  "hotel-jerome-transportation": () => import("./hotel-jerome-transportation"),
  "st-regis-aspen-transportation": () => import("./st-regis-aspen-transportation"),
  "little-nell-transportation": () => import("./little-nell-transportation"),
  "security-driver": () => import("./security-driver"),
  "executive-protection": () => import("./executive-protection"),
  "aspen-clubs": () => import("./aspen-clubs"),
  "aspen-wedding-transportation": () => import("./wedding-transportation"),
  "aspen-corporate-transportation": () => import("./corporate-transportation"),
  rates: () => import("./rates"),
};

export const serviceSlugs = Object.keys(serviceLoaders);
