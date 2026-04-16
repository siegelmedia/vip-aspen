import type { ServicePageData } from "@/types";
import blackCarService from "./black-car-service";
import executiveProtection from "./executive-protection";
import aspenClubs from "./aspen-clubs";
import weddingTransportation from "./wedding-transportation";
import corporateTransportation from "./corporate-transportation";
import privateEntertainment from "./private-entertainment";
import promotionalServices from "./promotional-services";
import propertyWatch from "./property-watch";
import hourlyChauffeur from "./hourly-chauffeur";
import specialEventTransportation from "./special-event-transportation";
import hotelJeromeTransportation from "./hotel-jerome-transportation";
import stRegisAspenTransportation from "./st-regis-aspen-transportation";
import littleNellTransportation from "./little-nell-transportation";
import securityDriver from "./security-driver";

export const services: Record<string, ServicePageData> = {
  "black-car-service": blackCarService,
  "hourly-chauffeur": hourlyChauffeur,
  "special-event-transportation": specialEventTransportation,
  "hotel-jerome-transportation": hotelJeromeTransportation,
  "st-regis-aspen-transportation": stRegisAspenTransportation,
  "little-nell-transportation": littleNellTransportation,
  "security-driver": securityDriver,
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
  hourlyChauffeur,
  specialEventTransportation,
  executiveProtection,
  aspenClubs,
  weddingTransportation,
  corporateTransportation,
  privateEntertainment,
  promotionalServices,
  propertyWatch,
  hotelJeromeTransportation,
  stRegisAspenTransportation,
  littleNellTransportation,
  securityDriver,
};
