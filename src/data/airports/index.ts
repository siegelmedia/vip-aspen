import type { AirportPageData } from "@/types";
import aspenAse from "./aspen-ase";
import eagleEge from "./eagle-ege";
import rifleRil from "./rifle-ril";
import denverDen from "./denver-den";
import snowmass from "./snowmass";

export const airports: Record<string, AirportPageData> = {
  "aspen-airport-transfer": aspenAse,
  "eagle-airport-transfer": eagleEge,
  "rifle-airport-transfer": rifleRil,
  "denver-to-aspen-car-service": denverDen,
  "snowmass-village-transfer": snowmass,
};

export {
  aspenAse,
  eagleEge,
  rifleRil,
  denverDen,
  snowmass,
};
