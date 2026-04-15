import type { ServicePageData } from "@/types";
import blackCarService from "./black-car-service";
import executiveProtection from "./executive-protection";
import aspenClubs from "./aspen-clubs";
import weddingTransportation from "./wedding-transportation";
import corporateTransportation from "./corporate-transportation";
import privateEntertainment from "./private-entertainment";
import promotionalServices from "./promotional-services";
import propertyWatch from "./property-watch";

export const services: Record<string, ServicePageData> = {
  "black-car-service": blackCarService,
  "executive-protection": executiveProtection,
  "aspen-clubs": aspenClubs,
  "aspen-wedding-transportation": weddingTransportation,
  "aspen-corporate-transportation": corporateTransportation,
  "private-entertainment": privateEntertainment,
  "promotional-services": promotionalServices,
  "property-watch": propertyWatch,
};

export {
  blackCarService,
  executiveProtection,
  aspenClubs,
  weddingTransportation,
  corporateTransportation,
  privateEntertainment,
  promotionalServices,
  propertyWatch,
};
