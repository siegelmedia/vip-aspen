import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

const BlackCarService = lazy(() => import("./pages/BlackCarService"));
const AspenAirportTransfer = lazy(() => import("./pages/AspenAirportTransfer"));
const EagleAirportTransfer = lazy(() => import("./pages/EagleAirportTransfer"));
const RifleAirportTransfer = lazy(() => import("./pages/RifleAirportTransfer"));
const AspenClubs = lazy(() => import("./pages/AspenClubs"));
const ExecutiveProtection = lazy(() => import("./pages/ExecutiveProtection"));
const MembershipPage = lazy(() => import("./pages/MembershipPage"));
const RollsRoyceCullinan = lazy(() => import("./pages/RollsRoyceCullinan"));
const ExecutiveSprinter = lazy(() => import("./pages/ExecutiveSprinter"));
const CadillacEscalade = lazy(() => import("./pages/CadillacEscalade"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DenverToAspen = lazy(() => import("./pages/DenverToAspen"));
const SnowmassVillageTransfer = lazy(() => import("./pages/SnowmassVillageTransfer"));
const AspenWeddingTransportation = lazy(() => import("./pages/AspenWeddingTransportation"));
const AspenCorporateTransportation = lazy(() => import("./pages/AspenCorporateTransportation"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/black-car-service" element={<BlackCarService />} />
              <Route path="/aspen-airport-transfer" element={<AspenAirportTransfer />} />
              <Route path="/eagle-airport-transfer" element={<EagleAirportTransfer />} />
              <Route path="/rifle-airport-transfer" element={<RifleAirportTransfer />} />
              <Route path="/aspen-clubs" element={<AspenClubs />} />
              <Route path="/executive-protection" element={<ExecutiveProtection />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/rolls-royce-cullinan" element={<RollsRoyceCullinan />} />
              <Route path="/executive-sprinter" element={<ExecutiveSprinter />} />
              <Route path="/cadillac-escalade" element={<CadillacEscalade />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/denver-to-aspen-car-service" element={<DenverToAspen />} />
              <Route path="/snowmass-village-transfer" element={<SnowmassVillageTransfer />} />
              <Route path="/aspen-wedding-transportation" element={<AspenWeddingTransportation />} />
              <Route path="/aspen-corporate-transportation" element={<AspenCorporateTransportation />} />
              <Route path="/about" element={<AboutPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
