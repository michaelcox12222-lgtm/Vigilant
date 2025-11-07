// Brand Constants
export const BRAND = {
  name: "Vigilant",
  tagline: "Real-time safety intelligence for your entire workforce",
  color: {
    primary: "#1a9d8f",
    primaryHover: "#188f83",
    secondary: "#1e3a5f",
  },
} as const;

// URLs and Links
export const LINKS = {
  demo: "https://www.loom.com/share/b897560895234780b53e1319c053104e?sid=9be90857-f317-4511-8826-4925791d3064",
  email: "info@govigilant.app",
} as const;

// Page Routes
export const ROUTES = {
  home: "home",
  about: "about",
  features: "features",
  pricing: "pricing",
  contact: "contact",
  beta: "beta",
  terms: "terms",
  privacy: "privacy",
  lawEnforcement: "law-enforcement",
} as const;

// Animation Configuration
export const ANIMATION_CONFIG = {
  bokeh: {
    smallDots: 450,
    largeDots: 30,
    blueDots: 25,
  },
  lines: {
    speed: 0.008,
  },
} as const;
