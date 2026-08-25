import type { VehiclePageData } from "@/types";

/** Vehicle pages load on demand — see the note in ../services/index.ts. */
export const vehicleLoaders: Record<
  string,
  () => Promise<{ default: VehiclePageData }>
> = {
  "rolls-royce-cullinan": () => import("./rolls-royce-cullinan"),
  "cadillac-escalade": () => import("./cadillac-escalade"),
  "executive-sprinter": () => import("./executive-sprinter"),
};

export const vehicleSlugs = Object.keys(vehicleLoaders);
