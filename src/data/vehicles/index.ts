import type { VehiclePageData } from "@/types";
import rollsRoyceCullinan from "./rolls-royce-cullinan";
import cadillacEscalade from "./cadillac-escalade";
import executiveSprinter from "./executive-sprinter";

export const vehicles: Record<string, VehiclePageData> = {
  "rolls-royce-cullinan": rollsRoyceCullinan,
  "cadillac-escalade": cadillacEscalade,
  "executive-sprinter": executiveSprinter,
};

export { rollsRoyceCullinan, cadillacEscalade, executiveSprinter };
