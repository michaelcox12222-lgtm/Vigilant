// Environment variables with fallbacks
export const env = {
  DEMO_URL:
    import.meta.env.VITE_DEMO_URL ||
    "https://www.loom.com/share/b897560895234780b53e1319c053104e",
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "info@govigilant.app",
  GA_ID: import.meta.env.VITE_GA_ID || "",
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,
} as const;
