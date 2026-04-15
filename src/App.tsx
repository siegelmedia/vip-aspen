import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Homepage — direct import (not lazy)
import Index from "./pages/Index";

// Custom pages — lazy loaded
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const MembershipPage = lazy(() => import("./pages/MembershipPage"));
const TalentGallery = lazy(() => import("./pages/TalentGallery"));
const SecurityAssessment = lazy(() => import("./pages/SecurityAssessment"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Templates — lazy loaded
const ServicePage = lazy(() => import("./templates/ServicePage"));
const VehiclePage = lazy(() => import("./templates/VehiclePage"));
const AirportPage = lazy(() => import("./templates/AirportPage"));

// Data
import { services } from "./data/services";
import { vehicles } from "./data/vehicles";
import { airports } from "./data/airports";

const queryClient = new QueryClient();

/** Wrapper to render a ServicePage template with data for a given slug */
const ServiceRoute = ({ slug }: { slug: string }) => {
  const data = services[slug];
  if (!data) return <NotFoundFallback />;

  // Contact-only pages show call/email CTA; form pages use BookingForm; rest use widget
  const contactOnlyPages = ["private-entertainment"];
  const formPages = ["promotional-services", "property-watch"];
  const bookingVariant = contactOnlyPages.includes(slug)
    ? "contact-only" as const
    : formPages.includes(slug)
    ? "form" as const
    : "widget" as const;
  const heroVariant = slug === "property-watch" ? "cinematic" as const : "standard" as const;

  return <ServicePage data={data} bookingVariant={bookingVariant} heroVariant={heroVariant} />;
};

const VehicleRoute = ({ slug }: { slug: string }) => {
  const data = vehicles[slug];
  if (!data) return <NotFoundFallback />;
  return <VehiclePage data={data} />;
};

const AirportRoute = ({ slug }: { slug: string }) => {
  const data = airports[slug];
  if (!data) return <NotFoundFallback />;
  return <AirportPage data={data} />;
};

const NotFoundFallback = () => {
  const NF = lazy(() => import("./pages/NotFound"));
  return (
    <Suspense fallback={null}>
      <NF />
    </Suspense>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Index />} />

              {/* Custom pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/talent" element={<TalentGallery />} />
              <Route path="/security-assessment" element={<SecurityAssessment />} />

              {/* Service pages — template-driven */}
              {Object.keys(services).map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<ServiceRoute slug={slug} />} />
              ))}

              {/* Vehicle pages — template-driven */}
              {Object.keys(vehicles).map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<VehicleRoute slug={slug} />} />
              ))}

              {/* Airport pages — template-driven */}
              {Object.keys(airports).map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<AirportRoute slug={slug} />} />
              ))}

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
