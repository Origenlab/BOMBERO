

import { SITE, type SEOProps } from "@config/site";


export function canonicalURL(path: string): string {
  const base = SITE.url.endsWith("/") ? SITE.url.slice(0, -1) : SITE.url;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const url = `${base}${clean}`;

  // Add trailing slash for pages (not for files with extensions or root)
  // This matches trailingSlash: "always" in astro.config.mjs
  if (clean === "/") return url; // Homepage: no change needed
  if (/\.\w+$/.test(clean)) return url; // Files (e.g., /image.png): no trailing slash
  if (url.endsWith("/")) return url; // Already has trailing slash
  return `${url}/`; // Add trailing slash
}


// Longitud máxima recomendada del <title> (Google trunca ~580px ≈ 60 caracteres).
const TITLE_MAX = 60;
const TITLE_SUFFIX = ` | ${SITE.name}`; // " | BOMBERO.MX"

// Recorta un texto a `max` caracteres respetando límite de palabra y sin
// dejar separadores colgando ni puntuación débil al final.
function capTitleCore(text: string, max: number): string {
  const clean = text.replace(/[\s|·•\-–—,;:]+$/g, "").trim();
  if (clean.length <= max) return clean;
  let cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > max * 0.5) cut = cut.slice(0, lastSpace);
  return cut.replace(/[\s|·•\-–—,;:]+$/g, "").trim();
}

const BRAND_TAIL = new RegExp(
  `\\s*[|·•\\-–—]\\s*[^|]*${SITE.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^|]*$`,
  "i",
);

export function formatTitle(title?: string, brand = true): string {
  if (!title) return SITE.seo.title;
  const trimmed = title.trim();

  // Páginas long-tail (directorio, blog): sin sufijo de marca. Se elimina cualquier
  // marca "BOMBERO.MX" incrustada en el título de origen y se recorta a 60 caracteres,
  // dejando todo el ancho útil del <title> para keywords de intención.
  if (!brand) {
    const core = trimmed.replace(BRAND_TAIL, "").replace(/[\s|·•\-–—]+$/g, "").trim() || trimmed;
    return capTitleCore(core, TITLE_MAX);
  }

  const branded = new RegExp(SITE.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i").test(trimmed);

  // Título ya marcado (incluye "BOMBERO.MX"): respetar si cabe; si no, recortar
  // el cuerpo conservando un único sufijo de marca limpio.
  if (branded) {
    if (trimmed.length <= TITLE_MAX) return trimmed;
    const brandTail = new RegExp(
      `\\s*[|·•\\-–—]\\s*[^|]*${SITE.name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}[^|]*$`,
      "i",
    );
    const core = trimmed.replace(brandTail, "").replace(/[\s|·•\-–—]+$/g, "").trim() || SITE.name;
    return `${capTitleCore(core, TITLE_MAX - TITLE_SUFFIX.length)}${TITLE_SUFFIX}`;
  }

  // Título sin marca: añadir sufijo y recortar el cuerpo si excede el límite.
  const core = trimmed.replace(/[\s|·•\-–—]+$/g, "").trim();
  const full = `${core}${TITLE_SUFFIX}`;
  if (full.length <= TITLE_MAX) return full;
  return `${capTitleCore(core, TITLE_MAX - TITLE_SUFFIX.length)}${TITLE_SUFFIX}`;
}


export function truncateMetaDescription(description: string, maxLength = 160): string {
  const escapedLength = (text: string) =>
    text
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").length;

  const normalized = description
    .replace(/\.{3,}/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[“”"]/g, "'")
    .trim();

  const trimEnding = (text: string) => text.trim().replace(/[,:;.\-–—\s]+$/g, "").trim();
  const weakEndingWords = new Set([
    "a",
    "al",
    "con",
    "como",
    "de",
    "del",
    "el",
    "en",
    "la",
    "las",
    "los",
    "para",
    "por",
    "sin",
    "un",
    "una",
    "y",
  ]);
  const trimWeakEndingWords = (text: string) => {
    const words = trimEnding(text).split(" ").filter(Boolean);
    while (words.length > 3) {
      const lastWord = words[words.length - 1]
        ?.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
      if (!lastWord || !weakEndingWords.has(lastWord)) break;
      words.pop();
    }
    return words.join(" ");
  };
  const finalize = (text: string) => {
    let result = trimWeakEndingWords(text) || trimEnding(text);
    if (!result) return "";

    if (!/[.!?]$/.test(result)) {
      const punctuated = `${trimEnding(result)}.`;
      if (escapedLength(punctuated) <= maxLength) result = punctuated;
    }

    return result;
  };
  const tightenToTarget = (text: string, targetLength: number) => {
    let result = finalize(text);
    while (result.split(" ").length > 3 && escapedLength(result) > targetLength) {
      result = finalize(result.replace(/\s+\S+\.?$/, ""));
    }
    return result;
  };
  const applyPracticalTarget = (text: string) => {
    const practicalTarget = Math.min(maxLength, 155);
    return escapedLength(text) > practicalTarget ? tightenToTarget(text, practicalTarget) : text;
  };

  if (escapedLength(normalized) <= maxLength) return applyPracticalTarget(finalize(normalized));

  // Prefer whole sentences if we can keep enough context.
  const sentences = normalized.split(/(?<=[.!?])\s+/);
  let sentenceResult = "";
  for (const sentence of sentences) {
    const candidate = sentenceResult ? `${sentenceResult} ${sentence}` : sentence;
    if (escapedLength(candidate) > maxLength) break;
    sentenceResult = candidate;
  }
  if (sentenceResult && escapedLength(sentenceResult) >= Math.floor(maxLength * 0.65)) {
    return applyPracticalTarget(finalize(sentenceResult.trim()));
  }

  // Fallback: trim by whole words and close with a period when possible.
  const words = normalized.split(" ");
  let wordResult = "";
  for (const word of words) {
    const candidate = wordResult ? `${wordResult} ${word}` : word;
    if (escapedLength(candidate) > maxLength) break;
    wordResult = candidate;
  }

  let result = finalize(wordResult || normalized);

  while (result.length > 1 && escapedLength(result) > maxLength) {
    result = finalize(trimEnding(result.slice(0, -1)));
  }

  return applyPracticalTarget(result);
}


export function resolveSEO(props: SEOProps) {
  // Normalize canonical: convert relative paths to absolute URLs with trailing slash
  let normalizedCanonical = props.canonical;
  if (normalizedCanonical && !normalizedCanonical.startsWith("http")) {
    normalizedCanonical = canonicalURL(normalizedCanonical);
  } else if (normalizedCanonical?.startsWith("http") && !normalizedCanonical.endsWith("/")) {
    // Add trailing slash to absolute URLs (except for files)
    if (!/\.\w+$/.test(normalizedCanonical)) {
      normalizedCanonical = `${normalizedCanonical}/`;
    }
  }

  return {
    title: formatTitle(props.title, props.brand ?? true),
    description: truncateMetaDescription(props.description ?? SITE.seo.description),
    image: props.image ?? SITE.seo.image,
    type: props.type ?? SITE.seo.type,
    noindex: props.noindex ?? false,
    canonical: normalizedCanonical,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
    author: props.author,
    keywords: props.keywords ?? [],
  };
}


export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.organization.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: canonicalURL(SITE.organization.logo),
      // Dimensiones reales del archivo (PIL, 2026-07-10) — antes decía 512×512.
      width: "1905",
      height: "474",
    },
    image: canonicalURL(SITE.organization.logo),
    description: SITE.seo.description,
    foundingDate: SITE.organization.foundingDate,
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
  };
}


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
  };
}


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


export function productSchemaComplete(product: {
  name: string;
  description: string;
  image: string | string[];
  url: string;
  category?: string;
  brand?: string;
  sku?: string;
  gtin?: string;
  mpn?: string;
  features?: string[];
  certifications?: string[];
}) {
  const productUrl = product.url.startsWith("http") ? product.url : canonicalURL(product.url);
  const images = Array.isArray(product.image)
    ? product.image.map(img => img.startsWith("http") ? img : canonicalURL(img))
    : [product.image.startsWith("http") ? product.image : canonicalURL(product.image)];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: images,
    url: productUrl,
    sku: product.sku ?? `BOMBERO-${product.name.replace(/\s+/g, '-').toUpperCase().slice(0, 20)}`,
    mpn: product.mpn ?? product.sku,
    gtin13: product.gtin,
    brand: {
      "@type": "Brand",
      name: product.brand ?? SITE.name,
      logo: canonicalURL(SITE.organization.logo),
    },
    category: product.category ?? "Equipo de Protección Personal",
    manufacturer: {
      "@type": "Organization",
      name: SITE.organization.name,
      url: SITE.url,
    },
    // Additional properties from features
    ...(product.features && product.features.length > 0 && {
      additionalProperty: product.features.map((feature, idx) => ({
        "@type": "PropertyValue",
        name: `Característica ${idx + 1}`,
        value: feature,
      })),
    }),
    // Certifications as keywords
    ...(product.certifications && product.certifications.length > 0 && {
      keywords: product.certifications.join(", "),
    }),
    // Offers
    offers: {
      "@type": "Offer",
      url: productUrl,
      price: "0",
      priceCurrency: "MXN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "0",
        priceCurrency: "MXN",
        description: "Precio bajo cotización — contáctenos para tarifa personalizada",
      },
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: SITE.organization.name,
        url: SITE.url,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "MXN",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "MX",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "MX",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    // Additional Schema.org recommendations
    isRelatedTo: {
      "@type": "Product",
      name: "Equipo de Protección Personal NFPA",
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Bomberos Profesionales, Brigadas Industriales, Protección Civil",
    },
  };
}


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
