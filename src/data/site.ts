/**
 * ─── Site-wide Configuration ───
 * Single source of truth for SEO defaults, branding, and contact info.
 * Optimized for positioning "equipo para bomberos" in Mexico.
 */

export const SITE = {
  name: "BOMBERO.MX",
  tagline: "Venta de Equipo para Bomberos en México | Distribuidor Certificado NFPA",
  url: "https://bombero.mx",
  locale: "es_MX",
  language: "es",
  country: "MX",
  currency: "MXN",

  // ─── SEO Defaults ───
  seo: {
    title: "Venta de Equipo para Bomberos en México | BOMBERO.MX",
    titleTemplate: "%s | BOMBERO.MX - Equipo para Bomberos",
    description:
      "Distribuidor líder de equipo para bomberos en México. Trajes estructurales NFPA 1971, cascos, guantes, botas, equipos SCBA, extintores y herramientas de rescate certificadas. Envíos a CDMX, Monterrey, Guadalajara y los 32 estados. Cotiza sin compromiso.",
    image: "/images/bombero.png",
    type: "website" as const,
    keywords: [
      "equipo para bomberos",
      "trajes de bombero",
      "trajes estructurales NFPA",
      "cascos para bombero",
      "equipos SCBA",
      "guantes de bombero",
      "botas de bombero",
      "extintores México",
      "herramientas de rescate",
      "equipo contra incendios",
      "protección civil México",
      "equipamiento bomberos CDMX",
      "venta equipo bomberos Monterrey",
      "distribuidor NFPA México",
    ],
  },

  // ─── Geographic SEO ───
  geo: {
    region: "MX",
    placename: "Ciudad de México, México",
    position: "19.432608;-99.133209",
    icbm: "19.432608, -99.133209",
    coverage: [
      "Ciudad de México",
      "Monterrey",
      "Guadalajara",
      "Puebla",
      "Tijuana",
      "León",
      "Cancún",
      "Mérida",
      "Querétaro",
      "San Luis Potosí",
      "Aguascalientes",
      "Chihuahua",
      "Hermosillo",
      "Morelia",
      "Toluca",
      "Veracruz",
      "Acapulco",
      "Oaxaca",
      "Tampico",
      "Villahermosa",
    ],
  },

  // ─── Social & Contact ───
  social: {
    twitter: "@bomberomx",
    facebook: "https://facebook.com/bombero.mx",
    instagram: "https://instagram.com/bombero.mx",
    youtube: "https://youtube.com/@bomberomx",
    linkedin: "https://linkedin.com/company/bomberomx",
  },

  contact: {
    email: "ventas@bombero.mx",
    emailSupport: "soporte@bombero.mx",
    phone: "+52 55 2078 0102",
    phoneRaw: "+525520780102",
    phoneTollFree: "800-BOMBERO",
    address: "Av. Tamaulipas 150, Piso 13, Col. Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX",
    addressShort: "Col. Condesa, CDMX",
    whatsapp: "525520780102",
    hours: "Lunes a Viernes: 9:00 AM - 6:00 PM",
    hoursEmergency: "24/7 para emergencias",
  },

  // ─── Business Info (for Schema.org) ───
  business: {
    type: "Store",
    priceRange: "$$",
    paymentAccepted: ["Efectivo", "Tarjeta de crédito", "Transferencia bancaria", "PayPal"],
    currenciesAccepted: "MXN",
    areaServed: "México",
    hasOfferCatalog: true,
  },

  // ─── Organization (JSON-LD) ───
  organization: {
    name: "BOMBERO.MX",
    legalName: "BOMBERO.MX S.A. de C.V.",
    logo: "/images/bombero.png",
    foundingDate: "2010",
    founders: ["BOMBERO.MX"],
    numberOfEmployees: "50-100",
    sameAs: [
      "https://facebook.com/bombero.mx",
      "https://instagram.com/bombero.mx",
      "https://youtube.com/@bomberomx",
      "https://linkedin.com/company/bomberomx",
    ],
  },

  // ─── Product Categories for SEO ───
  productKeywords: {
    "epp-bomberos": "trajes de bombero, trajes estructurales, NFPA 1971, equipo de protección personal bomberos",
    "cascos": "cascos para bombero, cascos NFPA, cascos de rescate, protección facial bomberos",
    "guantes-botas": "guantes de bombero, botas de bombero, guantes estructurales, botas NFPA",
    "scba": "equipos SCBA, respiración autónoma, máscaras de bombero, cilindros de aire",
    "equipo-contra-incendios": "mangueras contra incendio, boquillas, hidrantes, equipo contra incendios",
    "herramientas-rescate": "herramientas de rescate, rescate vehicular, quijadas de la vida, entrada forzada",
    "tecnologia": "cámaras térmicas bomberos, detectores de gases, radios bomberos, linternas LED",
    "extintores": "extintores México, recarga extintores, extintores certificados NOM, extintores industriales",
  },

  // ─── Certifications ───
  certifications: [
    { name: "NFPA", fullName: "National Fire Protection Association" },
    { name: "UL", fullName: "Underwriters Laboratories" },
    { name: "EN", fullName: "European Standards (EN 469, EN 443)" },
    { name: "ISO", fullName: "ISO 9001:2015" },
    { name: "NOM", fullName: "Norma Oficial Mexicana" },
  ],
} as const;

/** Type helper for SEO props */
export type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "product";
  noindex?: boolean;
  canonical?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[] | string;
};
