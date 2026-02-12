/**
 * ─── Site-wide Configuration ───
 * Single source of truth for SEO defaults, branding, and contact info.
 * Import this in layouts, components, and pages.
 */

export const SITE = {
  name: "BOMBERO.MX",
  tagline: "Equipo profesional para bomberos certificado NFPA",
  url: "https://bombero.mx",
  locale: "es-MX",
  language: "es",

  // ─── SEO Defaults ───
  seo: {
    title: "BOMBERO.MX — Venta de Equipo para Bomberos en México",
    titleTemplate: "%s | BOMBERO.MX",
    description:
      "Venta de equipo para bomberos certificado NFPA: trajes estructurales, SCBA, cascos, guantes, herramientas de rescate y más. Envíos a toda la República Mexicana.",
    image: "/images/og-default.jpg",
    type: "website" as const,
  },

  // ─── Social & Contact ───
  social: {
    twitter: "@bombaboramx",
    facebook: "https://facebook.com/bombero.mx",
    instagram: "https://instagram.com/bombero.mx",
  },

  contact: {
    email: "ventas@bombero.mx",
    phone: "+52 55 1234 5678",
    phoneRaw: "+525512345678",
    address: "Ciudad de México, México",
    whatsapp: "525512345678",
  },

  // ─── Organization (JSON-LD) ───
  organization: {
    name: "BOMBERO.MX",
    logo: "/images/logo.png",
    foundingDate: "2024",
    sameAs: [
      "https://facebook.com/bombero.mx",
      "https://instagram.com/bombero.mx",
    ],
  },
} as const;

/** Type helper for SEO props */
export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  canonical?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};
