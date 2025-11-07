/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEMO_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_GA_ID?: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
