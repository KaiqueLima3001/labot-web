import { siteConfig } from "./site";

export const seoConfig = {
  title: siteConfig.name,

  description: siteConfig.description,

  keywords: [
    "RPA",
    "Automação",
    "Workflow",
    "Software",
    "Power Automate",
    "Produtividade",
  ],

  robots: "index, follow",
} as const;