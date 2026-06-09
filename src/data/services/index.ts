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
import multiDayChauffeur from "./multi-day-chauffeur";
import privateSkiTransfers from "./private-ski-transfers";
import specialEventTransportation from "./special-event-transportation";
import newYearsEveTransportation from "./aspen-new-years-eve-transportation";
import privateJetTransfer from "./aspen-private-jet-transfer";
import vailToAspenCarService from "./vail-to-aspen-car-service";
import glenwoodToAspenCarService from "./glenwood-springs-to-aspen-car-service";
import beaverCreekToAspenCarService from "./beaver-creek-to-aspen-car-service";
import foodAndWineTransportation from "./aspen-food-and-wine-transportation";
import hotelJeromeTransportation from "./hotel-jerome-transportation";
import stRegisAspenTransportation from "./st-regis-aspen-transportation";
import littleNellTransportation from "./little-nell-transportation";
import securityDriver from "./security-driver";
import ratesPage from "./rates";

export const services: Record<string, ServicePageData> = {
  "black-car-service": blackCarService,
  "hourly-chauffeur": hourlyChauffeur,
  "multi-day-chauffeur": multiDayChauffeur,
  "private-ski-transfers": privateSkiTransfers,
  "aspen-private-jet-transfer": privateJetTransfer,
  "vail-to-aspen-car-service": vailToAspenCarService,
  "glenwood-springs-to-aspen-car-service": glenwoodToAspenCarService,
  "beaver-creek-to-aspen-car-service": beaverCreekToAspenCarService,
  "special-event-transportation": specialEventTransportation,
  "aspen-food-and-wine-transportation": foodAndWineTransportation,
  "aspen-new-years-eve-transportation": newYearsEveTransportation,
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
  "rates": ratesPage,
};

export {
  blackCarService,
  hourlyChauffeur,
  multiDayChauffeur,
  privateSkiTransfers,
  specialEventTransportation,
  newYearsEveTransportation,
  privateJetTransfer,
  vailToAspenCarService,
  glenwoodToAspenCarService,
  beaverCreekToAspenCarService,
  foodAndWineTransportation,
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
  ratesPage,
};
