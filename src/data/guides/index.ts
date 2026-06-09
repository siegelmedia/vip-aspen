import type { GuidePageData } from "@/types";
import denverToAspen from "./denver-to-aspen";
import aseVsEge from "./ase-vs-ege-airport";
import gettingAroundAspen from "./getting-around-aspen";
import foodAndWineClassic from "./aspen-food-and-wine-classic";

export const guides: Record<string, GuidePageData> = {
  "denver-to-aspen": denverToAspen,
  "ase-vs-ege-airport": aseVsEge,
  "getting-around-aspen": gettingAroundAspen,
  "aspen-food-and-wine-classic": foodAndWineClassic,
};

/** Ordered list for the guides index page — most timely first */
export const guidesList: GuidePageData[] = [
  foodAndWineClassic,
  denverToAspen,
  aseVsEge,
  gettingAroundAspen,
];

export { denverToAspen, aseVsEge, gettingAroundAspen, foodAndWineClassic };
