/**
 * ─── SEO Utilities ───
 * Comprehensive helpers for SEO optimization in Mexico market:
 * - Canonical URLs
 * - Title formatting
 * - JSON-LD Structured Data (Organization, LocalBusiness, WebSite, Product, etc.)
 */

import { SITE, type SEOProps } from "@data/site";

/** Build a full canonical URL from a relative path */
export function canonicalURL(path: string): string {
  const base = SITE.url.endsWith("/") ? SITE.url.slice(0, -1) : SITE.url;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Apply the title template from site config */
export function formatTitle(title?: string): string {
  if (!title) return SITE.seo.title;
  return SITE.seo.titleTemplate.replace("%s", title);
}

/** Merge page-level SEO props with site defaults */
export function resolveSEO(props: SEOProps) {
  return {
    title: formatTitle(props.title),
    description: props.description ?? SITE.seo.description,
    image: props.image ?? SITE.seo.image,
    type: props.type ?? SITE.seo.type,
    noindex: props.noindex ?? false,
    canonical: props.canonical,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author,
    keywords: props.keywords ?? [],
  };
}

/** Generate Organization JSON-LD - Enhanced for Mexico */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.organization.name,
    legalName: SITE.organization.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: canonicalURL(SITE.organization.logo),
      width: "512",
      height: "512",
    },
    image: canonicalURL(SITE.organization.logo),
    description: SITE.seo.description,
    foundingDate: SITE.organization.foundingDate,
    founder: SITE.organization.founders.map(name => ({
      "@type": "Person",
      name,
    })),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: SITE.organization.numberOfEmployees,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tamaulipas 150, Piso 13, Col. Condesa",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "06140",
      addressCountry: "MX",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phone,
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phoneTollFree,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
        contactOption: "TollFree",
      },
    ],
    sameAs: SITE.organization.sameAs,
    slogan: SITE.tagline,
    knowsAbout: [
      "Equipo para bomberos",
      "Trajes estructurales NFPA",
      "Equipos SCBA",
      "Herramientas de rescate",
      "Protección contra incendios",
      "Equipos de protección personal",
    ],
    areaServed: {
      "@type": "Country",
      name: "México",
    },
  };
}

/** Generate LocalBusiness JSON-LD - Critical for local SEO in Mexico */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.organization.name,
    description: SITE.seo.description,
    url: SITE.url,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    image: canonicalURL(SITE.organization.logo),
    logo: canonicalURL(SITE.organization.logo),
    priceRange: SITE.business.priceRange,
    currenciesAccepted: SITE.business.currenciesAccepted,
    paymentAccepted: SITE.business.paymentAccepted.join(", "),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tamaulipas 150, Piso 13, Col. Condesa",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "06140",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.432608,
      longitude: -99.133209,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: SITE.geo.coverage.map(city => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "Country",
        name: "México",
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Equipo para Bomberos",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Trajes de Bombero",
          description: "Trajes estructurales, forestales y de proximidad certificados NFPA",
        },
        {
          "@type": "OfferCatalog",
          name: "Cascos para Bombero",
          description: "Cascos certificados NFPA con protección facial",
        },
        {
          "@type": "OfferCatalog",
          name: "Equipos SCBA",
          description: "Equipos de respiración autónoma certificados",
        },
        {
          "@type": "OfferCatalog",
          name: "Herramientas de Rescate",
          description: "Equipo de rescate vehicular y entrada forzada",
        },
        {
          "@type": "OfferCatalog",
          name: "Extintores",
          description: "Extintores certificados NOM y servicio de recarga",
        },
      ],
    },
    sameAs: SITE.organization.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/** Generate WebSite JSON-LD with SearchAction */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    description: SITE.seo.description,
    url: SITE.url,
    inLanguage: SITE.locale,
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Generate Product JSON-LD for product pages */
export function productJsonLd(product: {
  name: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
  sku?: string;
  brand?: string;
  category?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image.startsWith("http") ? product.image : canonicalURL(product.image),
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand ?? SITE.name,
    },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: product.url,
      priceCurrency: product.currency ?? "MXN",
      price: product.price,
      availability: `https://schema.org/${product.availability ?? "InStock"}`,
      seller: {
        "@type": "Organization",
        name: SITE.organization.name,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "MX",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
    },
  };
}

/** Generate Article JSON-LD for blog posts */
export function articleJsonLd(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${article.url}/#article`,
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image ? canonicalURL(article.image) : undefined,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    author: {
      "@type": "Person",
      name: article.author ?? SITE.organization.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.organization.name,
      logo: {
        "@type": "ImageObject",
        url: canonicalURL(SITE.organization.logo),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    inLanguage: SITE.locale,
  };
}

/** Generate BreadcrumbList JSON-LD */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalURL(item.url),
    })),
  };
}

/** Generate FAQPage JSON-LD for FAQ sections */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Generate Service JSON-LD for service pages */
export function serviceJsonLd(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image ? canonicalURL(service.image) : undefined,
    provider: {
      "@type": "Organization",
      name: SITE.organization.name,
      url: SITE.url,
    },
    areaServed: (service.areaServed ?? SITE.geo.coverage).map(city => ({
      "@type": "City",
      name: city,
    })),
    serviceType: "Venta de Equipo para Bomberos",
  };
}
