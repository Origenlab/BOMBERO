

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
      "Distribuidor autorizado de equipo para bomberos en México. Trajes estructurales NFPA 1970, cascos, guantes, botas, equipos SCBA, extintores y herramientas de rescate certificadas. Envíos a CDMX, Monterrey, Guadalajara y los 32 estados. Cotiza sin compromiso.",
    image: "/images/logo-equipo-para-bomberos.avif",
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
    email: "ventas.bomberosmx@gmail.com",
    emailSupport: "ventas.bomberosmx@gmail.com",
    phone: "+52 55 6034 8981",
    phoneRaw: "+525560348981",
    phoneTollFree: "+52 55 6034 8981",
    address: "Av. Tamaulipas 150, Piso 13, Col. Condesa, Cuauhtémoc, 06140 Ciudad de México, CDMX",
    addressShort: "Col. Condesa, CDMX",
    whatsapp: "525560348981",
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
    logo: "/images/logo-equipo-para-bomberos.avif",
    foundingDate: "2010",
    founders: ["BOMBERO.MX"],
    sameAs: [
      "https://facebook.com/bombero.mx",
      "https://instagram.com/bombero.mx",
      "https://youtube.com/@bomberomx",
      "https://linkedin.com/company/bomberomx",
      "https://x.com/bomberomx",
      "https://twitter.com/bomberomx",
    ],
  },

  // ─── Product Categories for SEO ───
  productKeywords: {
    "epp-bomberos": "trajes de bombero, trajes estructurales, NFPA 1970, equipo de protección personal bomberos",
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
    { name: "EN", fullName: "European Standards (EN 469:2020, EN 443:2008)" },
    { name: "ISO", fullName: "ISO 9001:2015" },
    { name: "NOM", fullName: "Norma Oficial Mexicana" },
  ],
} as const;


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
  /**
   * Controla el sufijo de marca " | BOMBERO.MX" en el <title>.
   * true  (default) → páginas dinero (home, categorías de producto): conservan marca corta.
   * false → páginas long-tail (directorio, blog): sin sufijo, todo el espacio para keywords.
   */
  brand?: boolean;
};
