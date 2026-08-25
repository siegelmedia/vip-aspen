import type { AirportPageData } from "@/types";

/** Airport pages load on demand — see the note in ../services/index.ts. */
export const airportLoaders: Record<
  string,
  () => Promise<{ default: AirportPageData }>
> = {
  "aspen-airport-transfer": () => import("./aspen-ase"),
  "eagle-airport-transfer": () => import("./eagle-ege"),
  "rifle-airport-transfer": () => import("./rifle-ril"),
  "denver-to-aspen-car-service": () => import("./denver-den"),
  "snowmass-village-transfer": () => import("./snowmass"),
};

export const airportSlugs = Object.keys(airportLoaders);
