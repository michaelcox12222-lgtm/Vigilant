import { useState, useEffect, Suspense, lazy } from "react";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import { BokehBackground } from "./components/animations/BokehBackground";
import { GradientBackground } from "./components/animations/GradientBackground";
import { Toaster } from "./components/ui/sonner";
import { SEO } from "./components/common/SEO";
import { ROUTES } from "./lib/constants";

// Lazy load pages for code splitting
const Home = lazy(() =>
  import("./pages/Company/Home").then((module) => ({
    default: module.Home,
  }))
);
const About = lazy(() =>
  import("./pages/Company/About").then((module) => ({
    default: module.About,
  }))
);
const Beta = lazy(() =>
  import("./pages/Legal/Beta").then((module) => ({
    default: module.Beta,
  }))
);
const Features = lazy(() =>
  import("./pages/Company/Features").then((module) => ({
    default: module.Features,
  }))
);
const Pricing = lazy(() =>
  import("./pages/Company/Pricing").then((module) => ({
    default: module.Pricing,
  }))
);
const Contact = lazy(() =>
  import("./pages/Company/Contact").then((module) => ({
    default: module.Contact,
  }))
);
const Terms = lazy(() =>
  import("./pages/Legal/Terms").then((module) => ({
    default: module.Terms,
  }))
);
const Privacy = lazy(() =>
  import("./pages/Legal/Privacy").then((module) => ({
    default: module.Privacy,
  }))
);
const LawEnforcement = lazy(() =>
  import("./pages/Legal/LawEnforcement").then((module) => ({
    default: module.LawEnforcement,
  }))
);

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}

// Page metadata for SEO
const PAGE_META = {
  [ROUTES.home]: {
    title: "Vigilant - Real-time Safety Intelligence",
    description:
      "Command center intelligence in every employee's pocket. Real-time safety intelligence for your entire workforce.",
  },
  [ROUTES.about]: {
    title: "About Us - Vigilant",
    description:
      "Founded by intelligence officers, federal agents, and special ops veterans. Learn about our mission to deliver real-time safety intelligence.",
  },
  [ROUTES.features]: {
    title: "Features - Vigilant",
    description:
      "Intel, Secure Comms, Safety Tracking, Academy Training, and AI Travel Companion - all in one enterprise-ready platform.",
  },
  [ROUTES.pricing]: {
    title: "Pricing - Vigilant",
    description:
      "Choose the plan that fits your organization. From Team to Scale, we have enterprise-grade safety tools for every need.",
  },
  [ROUTES.contact]: {
    title: "Contact Us - Vigilant",
    description:
      "Get in touch with our team for enterprise licensing, custom training, or API integration options.",
  },
  [ROUTES.beta]: {
    title: "Join Beta Program - Vigilant",
    description:
      "Become a beta tester and get early access to Vigilant's safety intelligence platform.",
  },
  [ROUTES.terms]: {
    title: "Terms & Conditions - Vigilant",
    description: "Terms of Service for Vigilant platform and services.",
  },
  [ROUTES.privacy]: {
    title: "Privacy Policy - Vigilant",
    description: "Privacy Policy and data protection information for Vigilant.",
  },
  [ROUTES.lawEnforcement]: {
    title: "Law Enforcement Guide - Vigilant",
    description:
      "Information for law enforcement authorities on requesting user data from Vigilant.",
  },
} as const satisfies Record<string, { title: string; description: string }>;

type PageRoute = keyof typeof ROUTES;
type RouteValue = typeof ROUTES[PageRoute];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(ROUTES.home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case ROUTES.about:
        return <About />;
      case ROUTES.beta:
        return <Beta />;
      case ROUTES.features:
        return <Features />;
      case ROUTES.pricing:
        return <Pricing onNavigate={handleNavigate} />;
      case ROUTES.contact:
        return <Contact />;
      case ROUTES.terms:
        return <Terms />;
      case ROUTES.privacy:
        return <Privacy />;
      case ROUTES.lawEnforcement:
        return <LawEnforcement />;
      case ROUTES.home:
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const currentMeta = PAGE_META[currentPage as RouteValue] || PAGE_META[ROUTES.home];

  return (
    <>
      <SEO title={currentMeta.title} description={currentMeta.description} />
      <div className="min-h-screen bg-black relative overflow-hidden">
        <GradientBackground />
        <BokehBackground />
        <div className="relative z-20">
          <Navigation onNavigate={handleNavigate} />
          <main id="main-content">
            <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
          </main>
          <Footer onNavigate={handleNavigate} />
        </div>
        <Toaster position="top-right" />
      </div>
    </>
  );
}
