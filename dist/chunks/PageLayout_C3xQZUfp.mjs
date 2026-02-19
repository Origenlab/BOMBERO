import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, h as renderScript, r as renderComponent, i as renderHead, j as renderSlot } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const SITE = {
  name: "BOMBERO.MX",
  tagline: "Venta de Equipo para Bomberos en México | Distribuidor Certificado NFPA",
  url: "https://bombero.mx",
  locale: "es_MX",
  language: "es",
  // ─── SEO Defaults ───
  seo: {
    title: "Venta de Equipo para Bomberos en México | BOMBERO.MX",
    titleTemplate: "%s | BOMBERO.MX - Equipo para Bomberos",
    description: "Distribuidor líder de equipo para bomberos en México. Trajes estructurales NFPA 1971, cascos, guantes, botas, equipos SCBA, extintores y herramientas de rescate certificadas. Envíos a CDMX, Monterrey, Guadalajara y los 32 estados. Cotiza sin compromiso.",
    image: "/images/bombero.png",
    type: "website",
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
      "distribuidor NFPA México"
    ]
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
      "Villahermosa"
    ]
  },
  // ─── Social & Contact ───
  social: {
    twitter: "@bomberomx",
    facebook: "https://facebook.com/bombero.mx",
    instagram: "https://instagram.com/bombero.mx"},
  contact: {
    email: "ventas@bombero.mx",
    phone: "+52 55 2078 0102",
    phoneRaw: "+525520780102",
    phoneTollFree: "800-BOMBERO",
    whatsapp: "525520780102"},
  // ─── Business Info (for Schema.org) ───
  business: {
    priceRange: "$$",
    paymentAccepted: ["Efectivo", "Tarjeta de crédito", "Transferencia bancaria", "PayPal"],
    currenciesAccepted: "MXN"},
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
      "https://linkedin.com/company/bomberomx"
    ]
  }};

function canonicalURL(path) {
  const base = SITE.url.endsWith("/") ? SITE.url.slice(0, -1) : SITE.url;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
function formatTitle(title) {
  if (!title) return SITE.seo.title;
  if (title.toLowerCase().includes(SITE.name.toLowerCase())) return title;
  return SITE.seo.titleTemplate.replace("%s", title);
}
function resolveSEO(props) {
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
    keywords: props.keywords ?? []
  };
}
function organizationJsonLd() {
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
      height: "512"
    },
    image: canonicalURL(SITE.organization.logo),
    description: SITE.seo.description,
    foundingDate: SITE.organization.foundingDate,
    founder: SITE.organization.founders.map((name) => ({
      "@type": "Person",
      name
    })),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: SITE.organization.numberOfEmployees
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Tamaulipas 150, Piso 13, Col. Condesa",
      addressLocality: "Ciudad de México",
      addressRegion: "CDMX",
      postalCode: "06140",
      addressCountry: "MX"
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phone,
        contactType: "sales",
        areaServed: "MX",
        availableLanguage: ["Spanish"]
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.contact.phoneTollFree,
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
        contactOption: "TollFree"
      }
    ],
    sameAs: SITE.organization.sameAs,
    slogan: SITE.tagline,
    knowsAbout: [
      "Equipo para bomberos",
      "Trajes estructurales NFPA",
      "Equipos SCBA",
      "Herramientas de rescate",
      "Protección contra incendios",
      "Equipos de protección personal"
    ],
    areaServed: {
      "@type": "Country",
      name: "México"
    }
  };
}
function localBusinessJsonLd() {
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
      addressCountry: "MX"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.432608,
      longitude: -99.133209
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    areaServed: SITE.geo.coverage.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "Country",
        name: "México"
      }
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de Equipo para Bomberos",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Trajes de Bombero",
          description: "Trajes estructurales, forestales y de proximidad certificados NFPA"
        },
        {
          "@type": "OfferCatalog",
          name: "Cascos para Bombero",
          description: "Cascos certificados NFPA con protección facial"
        },
        {
          "@type": "OfferCatalog",
          name: "Equipos SCBA",
          description: "Equipos de respiración autónoma certificados"
        },
        {
          "@type": "OfferCatalog",
          name: "Herramientas de Rescate",
          description: "Equipo de rescate vehicular y entrada forzada"
        },
        {
          "@type": "OfferCatalog",
          name: "Extintores",
          description: "Extintores certificados NOM y servicio de recarga"
        }
      ]
    },
    sameAs: SITE.organization.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    }
  };
}
function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    description: SITE.seo.description,
    url: SITE.url,
    inLanguage: SITE.locale,
    publisher: {
      "@id": `${SITE.url}/#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/buscar?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalURL(item.url)
    }))
  };
}

const $$Astro$8 = createAstro("https://bombero.mx");
const $$SEOHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SEOHead;
  const resolved = resolveSEO(Astro2.props);
  const canonical = resolved.canonical ?? canonicalURL(Astro2.url.pathname);
  const imageURL = resolved.image?.startsWith("http") ? resolved.image : canonicalURL(resolved.image);
  const pageKeywords = Array.isArray(resolved.keywords) ? resolved.keywords : typeof resolved.keywords === "string" ? resolved.keywords.split(",").map((k) => k.trim()).filter(Boolean) : [];
  const allKeywords = [.../* @__PURE__ */ new Set([...pageKeywords, ...SITE.seo.keywords])].join(", ");
  return renderTemplate`<!-- Primary Meta Tags --><title>${resolved.title}</title><meta name="description"${addAttribute(resolved.description, "content")}><meta name="keywords"${addAttribute(allKeywords, "content")}><meta name="author"${addAttribute(SITE.organization.name, "content")}><meta name="publisher"${addAttribute(SITE.organization.name, "content")}><meta name="copyright"${addAttribute(`\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.organization.name}`, "content")}>${resolved.noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`}${!resolved.noindex && renderTemplate`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`}<link rel="canonical"${addAttribute(canonical, "href")}><!-- Language & Region --><meta name="language"${addAttribute(SITE.language, "content")}><meta http-equiv="content-language"${addAttribute(SITE.locale, "content")}><link rel="alternate" hreflang="es-MX"${addAttribute(canonical, "href")}><link rel="alternate" hreflang="es"${addAttribute(canonical, "href")}><link rel="alternate" hreflang="x-default"${addAttribute(canonical, "href")}><!-- Geo Tags for Local SEO Mexico --><meta name="geo.region"${addAttribute(SITE.geo.region, "content")}><meta name="geo.placename"${addAttribute(SITE.geo.placename, "content")}><meta name="geo.position"${addAttribute(SITE.geo.position, "content")}><meta name="ICBM"${addAttribute(SITE.geo.icbm, "content")}><!-- Dublin Core Meta Tags --><meta name="DC.title"${addAttribute(resolved.title, "content")}><meta name="DC.description"${addAttribute(resolved.description, "content")}><meta name="DC.language"${addAttribute(SITE.language, "content")}><meta name="DC.coverage" content="México"><!-- Open Graph / Facebook / WhatsApp --><meta property="og:type"${addAttribute(resolved.type, "content")}><meta property="og:title"${addAttribute(resolved.title, "content")}><meta property="og:description"${addAttribute(resolved.description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(imageURL, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"${addAttribute(`${SITE.name} - Equipo para Bomberos en M\xE9xico`, "content")}><meta property="og:locale"${addAttribute(SITE.locale, "content")}><meta property="og:site_name"${addAttribute(SITE.name, "content")}><meta property="og:see_also"${addAttribute(SITE.social.facebook, "content")}>${resolved.publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(resolved.publishedTime, "content")}>`}${resolved.modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(resolved.modifiedTime, "content")}>`}<!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"${addAttribute(SITE.social.twitter, "content")}><meta name="twitter:creator"${addAttribute(SITE.social.twitter, "content")}><meta name="twitter:title"${addAttribute(resolved.title, "content")}><meta name="twitter:description"${addAttribute(resolved.description, "content")}><meta name="twitter:image"${addAttribute(imageURL, "content")}><meta name="twitter:image:alt"${addAttribute(`${SITE.name} - Equipo para Bomberos en M\xE9xico`, "content")}><!-- Additional SEO Tags --><meta name="rating" content="General"><meta name="distribution" content="global"><meta name="revisit-after" content="7 days"><meta name="target" content="all"><meta name="HandheldFriendly" content="True"><meta name="MobileOptimized" content="320"><!-- Business/E-commerce specific --><meta name="classification" content="Equipo de Seguridad, Equipo para Bomberos, Protección Civil"><meta name="category" content="Equipos de Protección Personal"><meta name="coverage" content="México, América Latina"><!-- Verification tags (add your IDs) --><!-- <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_ID" /> --><!-- <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_ID" /> --><!-- <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_ID" /> -->`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/SEOHead.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://bombero.mx");
const $$JsonLd = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$JsonLd;
  const { data } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(data, null, 0)));
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/JsonLd.astro", void 0);

const $$Astro$6 = createAstro("https://bombero.mx");
const $$WhatsAppFloat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WhatsAppFloat;
  const {
    message = "Hola, me interesa informaci\xF3n sobre equipo para bomberos",
    position = "right",
    showText = true,
    pulse = true
  } = Astro2.props;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${SITE.contact.whatsapp}?text=${encodedMessage}`;
  const buttonClasses = [
    "whatsapp-float",
    `whatsapp-float--${position}`,
    pulse && "whatsapp-float--pulse"
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")}${addAttribute(buttonClasses, "class")} aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer" data-astro-cid-y4hhiakm> ${showText && renderTemplate`<span class="whatsapp-float__text" data-astro-cid-y4hhiakm>
¿Necesitas ayuda?
</span>`} <span class="whatsapp-float__icon" data-astro-cid-y4hhiakm> <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-y4hhiakm> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-y4hhiakm></path> </svg> </span> </a> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/WhatsAppFloat.astro", void 0);

const $$Astro$5 = createAstro("https://bombero.mx");
const $$BackToTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BackToTop;
  const {
    threshold = 400,
    position = "left"
  } = Astro2.props;
  const buttonClasses = [
    "back-to-top",
    `back-to-top--${position}`
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(buttonClasses, "class")} aria-label="Volver al inicio"${addAttribute(threshold, "data-threshold")} type="button" data-astro-cid-wlspcwf4> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-wlspcwf4> <path d="M18 15l-6-6-6 6" data-astro-cid-wlspcwf4></path> </svg> </button> ${renderScript($$result, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/BackToTop.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/BackToTop.astro", void 0);

const $$Astro$4 = createAstro("https://bombero.mx");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { jsonLd = [], ...seoProps } = Astro2.props;
  const allJsonLd = [organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd(), ...jsonLd];
  return renderTemplate`<html${addAttribute(SITE.language, "lang")} dir="ltr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/images/bombero.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#1a1a2e"><!-- SEO -->${renderComponent($$result, "SEOHead", $$SEOHead, { ...seoProps })}<!-- JSON-LD Structured Data -->${allJsonLd.map((data) => renderTemplate`${renderComponent($$result, "JsonLd", $$JsonLd, { "data": data })}`)}<!-- Preload critical fonts (add paths when using custom fonts) --><!-- <link rel="preload" href="/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin /> -->${renderHead()}</head> <body> <!-- Accessibility: Skip to Content --> <a href="#main-content" class="skip-link">Saltar al contenido</a> ${renderSlot($$result, $$slots["default"])} <!-- WhatsApp Floating Button --> ${renderComponent($$result, "WhatsAppFloat", $$WhatsAppFloat, {})} <!-- Back to Top Button --> ${renderComponent($$result, "BackToTop", $$BackToTop, {})} </body></html>`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/LAYOUTS/BaseLayout.astro", void 0);

const $$TopBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="topbar" data-astro-cid-lq7i5isa> <div class="container topbar__inner" data-astro-cid-lq7i5isa> <!-- Headline SEO --> <span class="topbar__headline" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-lq7i5isa> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" data-astro-cid-lq7i5isa></path> </svg>
Equipo para Bomberos
</span> <div class="topbar__divider" data-astro-cid-lq7i5isa></div> <!-- Contact Info --> <div class="topbar__contact" data-astro-cid-lq7i5isa> <a${addAttribute(`tel:${SITE.contact.phoneRaw}`, "href")} class="topbar__link" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-lq7i5isa> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-lq7i5isa></path> </svg> <span data-astro-cid-lq7i5isa>${SITE.contact.phoneTollFree}</span> </a> <a${addAttribute(`mailto:${SITE.contact.email}`, "href")} class="topbar__link" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-lq7i5isa> <rect width="20" height="16" x="2" y="4" rx="2" data-astro-cid-lq7i5isa></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-astro-cid-lq7i5isa></path> </svg> <span data-astro-cid-lq7i5isa>${SITE.contact.email}</span> </a> </div> <!-- Right Side: Promo + Social --> <div class="topbar__right" data-astro-cid-lq7i5isa> <span class="topbar__promo" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-lq7i5isa> <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" data-astro-cid-lq7i5isa></path> <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" data-astro-cid-lq7i5isa></path> <circle cx="7" cy="18" r="2" data-astro-cid-lq7i5isa></circle> <circle cx="17" cy="18" r="2" data-astro-cid-lq7i5isa></circle> </svg>
Envíos a toda la República
</span> <div class="topbar__divider" data-astro-cid-lq7i5isa></div> <!-- Social Links --> <div class="topbar__social" data-astro-cid-lq7i5isa> <a${addAttribute(SITE.social.facebook, "href")} class="topbar__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-lq7i5isa> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-lq7i5isa></path> </svg> </a> <a${addAttribute(SITE.social.instagram, "href")} class="topbar__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-lq7i5isa> <rect width="20" height="20" x="2" y="2" rx="5" ry="5" data-astro-cid-lq7i5isa></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-astro-cid-lq7i5isa></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" data-astro-cid-lq7i5isa></line> </svg> </a> <a${addAttribute(`https://wa.me/${SITE.contact.whatsapp}`, "href")} class="topbar__social-link topbar__social-link--whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" data-astro-cid-lq7i5isa> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-lq7i5isa> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-lq7i5isa></path> </svg> </a> </div> </div> </div> </div> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/TopBar.astro", void 0);

const mainNav = [
  { label: "Inicio", href: "/" },
  {
    label: "Productos",
    href: "/productos",
    children: [
      {
        label: "Trajes de Bombero",
        href: "/productos/trajes-para-bomberos",
        children: [
          { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
          { label: "Sistema 3 Capas NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas" },
          { label: "Capa Exterior Nomex® IIIA", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex" },
          { label: "Membrana Gore-Tex® PTFE", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/membrana-gore-tex" },
          { label: "Acolchado Térmico Caldura®", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico" },
          { label: "Alta Visibilidad SOLAS Cl.2", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" },
          { label: "Diseño Ergonómico 3D", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico" },
          { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos" },
          { label: "Traje ARFF (Aeroportuario)", href: "/productos/trajes-para-bomberos" },
          { label: "Traje de Aproximación", href: "/productos/trajes-para-bomberos" },
          { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos" }
        ]
      },
      {
        label: "Cascos",
        href: "/productos/cascos-para-bomberos",
        children: [
          { label: "Casco Estructural", href: "/productos/cascos-para-bomberos" },
          { label: "Casco Forestal", href: "/productos/cascos-para-bomberos" },
          { label: "Casco de Rescate", href: "/productos/cascos-para-bomberos" },
          { label: "Accesorios para Casco", href: "/productos/cascos-para-bomberos" }
        ]
      },
      {
        label: "Botas",
        href: "/productos/botas-para-bomberos",
        children: [
          { label: "Bota Estructural (Cuero)", href: "/productos/botas-para-bomberos" },
          { label: "Bota de Caucho (HAZMAT)", href: "/productos/botas-para-bomberos" },
          { label: "Bota Forestal", href: "/productos/botas-para-bomberos" }
        ]
      },
      {
        label: "Guantes",
        href: "/productos/guantes-para-bomberos",
        children: [
          { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
          { label: "Guantes de Rescate/Extricación", href: "/productos/guantes-para-bomberos" },
          { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos" },
          { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos" }
        ]
      },
      {
        label: "Capuchas y Monjas",
        href: "/productos/capuchas-para-bomberos",
        children: [
          { label: "Capucha Nomex®", href: "/productos/capuchas-para-bomberos" },
          { label: "Capucha PBI®", href: "/productos/capuchas-para-bomberos" },
          { label: "Capucha con Protección Particulada", href: "/productos/capuchas-para-bomberos" }
        ]
      },
      {
        label: "Gafas y Protección Visual",
        href: "/productos/gafas-para-bomberos",
        children: [
          { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos" },
          { label: "Gafas de Seguridad Antiimpacto", href: "/productos/gafas-para-bomberos" }
        ]
      }
    ]
  },
  { label: "Directorio", href: "/directorio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" }
];

const $$Astro$3 = createAstro("https://bombero.mx");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="nav" aria-label="Navegación principal" data-astro-cid-dmqpwcec> <ul class="nav__list" role="list" data-astro-cid-dmqpwcec> ${mainNav.map((item) => {
    const isMega = item.children?.some((c) => c.children?.length);
    return renderTemplate`<li${addAttribute([
      "nav__item",
      { "nav__item--has-dropdown": item.children?.length && !isMega },
      { "nav__item--has-mega": isMega }
    ], "class:list")} data-astro-cid-dmqpwcec> <a${addAttribute(item.href, "href")}${addAttribute([
      "nav__link",
      {
        "nav__link--active": item.href === "/" ? currentPath === "/" : currentPath === item.href || currentPath.startsWith(item.href + "/")
      }
    ], "class:list")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-astro-cid-dmqpwcec> ${item.label} ${item.children?.length && renderTemplate`<svg class="nav__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-dmqpwcec> <path d="M6 9l6 6 6-6" data-astro-cid-dmqpwcec></path> </svg>`} </a>  ${!isMega && item.children?.length && renderTemplate`<ul class="nav__dropdown" role="list" data-astro-cid-dmqpwcec> ${item.children.map((child) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(child.href, "href")}${addAttribute([
      "nav__dropdown-link",
      {
        "nav__dropdown-link--active": currentPath === child.href || currentPath.startsWith(child.href + "/")
      }
    ], "class:list")} data-astro-cid-dmqpwcec> ${child.label} </a> </li>`)} </ul>`}  ${isMega && renderTemplate`<div class="nav__mega" role="region"${addAttribute(`Submen\xFA de ${item.label}`, "aria-label")} data-astro-cid-dmqpwcec> <div class="nav__mega-inner" data-astro-cid-dmqpwcec> ${item.children.map((group) => renderTemplate`<div class="nav__mega-col" data-astro-cid-dmqpwcec> <a${addAttribute(group.href, "href")}${addAttribute([
      "nav__mega-heading",
      {
        "nav__mega-heading--active": currentPath === group.href || currentPath.startsWith(group.href + "/")
      }
    ], "class:list")} data-astro-cid-dmqpwcec> ${group.label} </a> ${group.children?.length && renderTemplate`<ul class="nav__mega-list" role="list" data-astro-cid-dmqpwcec> ${group.children.map((sub) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(sub.href, "href")}${addAttribute([
      "nav__mega-link",
      {
        "nav__mega-link--active": currentPath === sub.href || currentPath.startsWith(sub.href + "/")
      }
    ], "class:list")} data-astro-cid-dmqpwcec> ${sub.label} </a> </li>`)} </ul>`} <a${addAttribute(group.href, "href")} class="nav__mega-see-all" data-astro-cid-dmqpwcec>
Ver todos →
</a> </div>`)} </div> </div>`} </li>`;
  })} </ul> </nav> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Nav.astro", void 0);

const $$Astro$2 = createAstro("https://bombero.mx");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { variant = "default", size = "md", showText = false } = Astro2.props;
  const sizes = {
    sm: { height: 50, width: 125 },
    md: { height: 90, width: 225 },
    lg: { height: 120, width: 300 }
  };
  const currentSize = sizes[size];
  const logoClasses = [
    "logo",
    `logo--${variant}`,
    `logo--${size}`
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(logoClasses, "class")}${addAttribute(`${SITE.name} \u2014 Ir al inicio`, "aria-label")} data-astro-cid-tvrurpns> <img src="/images/bombero.png"${addAttribute(`${SITE.name} - Venta de Equipo para Bomberos en M\xE9xico`, "alt")} class="logo__image"${addAttribute(currentSize.width, "width")}${addAttribute(currentSize.height, "height")} loading="eager" decoding="async" data-astro-cid-tvrurpns> ${showText && renderTemplate`<span class="logo__text" data-astro-cid-tvrurpns> <span class="logo__name" data-astro-cid-tvrurpns>${SITE.name}</span> <span class="logo__tagline" data-astro-cid-tvrurpns>Equipo para Bomberos</span> </span>`} </a> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Logo.astro", void 0);

const $$Astro$1 = createAstro("https://bombero.mx");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { variant = "default", sticky = true } = Astro2.props;
  const headerClasses = [
    "header",
    `header--${variant}`,
    sticky && "header--sticky"
  ].filter(Boolean).join(" ");
  return renderTemplate`<!-- Top Bar -->${renderComponent($$result, "TopBar", $$TopBar, { "data-astro-cid-3ef6ksr2": true })} <!-- Main Header --> ${maybeRenderHead()}<header${addAttribute(headerClasses, "class")} role="banner" data-astro-cid-3ef6ksr2> <div class="container header__inner" data-astro-cid-3ef6ksr2> <!-- Logo --> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-3ef6ksr2": true })} <!-- Desktop Navigation --> <nav class="header__nav" id="main-nav" aria-label="Navegación principal" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-3ef6ksr2": true })} </nav> <!-- Header Actions --> <div class="header__actions" data-astro-cid-3ef6ksr2> <!-- WhatsApp Quick Contact --> <a${addAttribute(`https://wa.me/${SITE.contact.whatsapp}?text=Hola, me interesa informaci\xF3n sobre equipo para bomberos`, "href")} class="header__whatsapp" aria-label="Contactar por WhatsApp" target="_blank" rel="noopener noreferrer" data-astro-cid-3ef6ksr2> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-3ef6ksr2></path> </svg> </a> <!-- CTA Button --> <a href="/cotizar" class="header__cta" data-astro-cid-3ef6ksr2> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M9 12h6M12 9v6" data-astro-cid-3ef6ksr2></path> <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>Cotizar</span> </a> <!-- Mobile Menu Toggle --> <button class="header__toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú de navegación" type="button" data-astro-cid-3ef6ksr2> <span class="header__toggle-bar" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="header__toggle-bar" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="header__toggle-bar" aria-hidden="true" data-astro-cid-3ef6ksr2></span> </button> </div> </div> <!-- Mobile Menu --> <div class="header__mobile-menu" id="mobile-menu" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="header__mobile-inner" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-3ef6ksr2": true })} <!-- Mobile CTA --> <div class="header__mobile-cta" data-astro-cid-3ef6ksr2> <a href="/cotizar" class="btn btn--primary btn--lg header__mobile-btn" data-astro-cid-3ef6ksr2> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M9 12h6M12 9v6" data-astro-cid-3ef6ksr2></path> <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" data-astro-cid-3ef6ksr2></path> </svg>
Solicitar Cotización
</a> <a${addAttribute(`https://wa.me/${SITE.contact.whatsapp}`, "href")} class="btn btn--secondary btn--lg header__mobile-btn" target="_blank" rel="noopener noreferrer" data-astro-cid-3ef6ksr2> <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-astro-cid-3ef6ksr2></path> </svg>
WhatsApp
</a> </div> <!-- Mobile Contact --> <div class="header__mobile-contact" data-astro-cid-3ef6ksr2> <a${addAttribute(`tel:${SITE.contact.phoneRaw}`, "href")} class="header__mobile-contact-item" data-astro-cid-3ef6ksr2> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-3ef6ksr2> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>${SITE.contact.phoneTollFree}</span> </a> <a${addAttribute(`mailto:${SITE.contact.email}`, "href")} class="header__mobile-contact-item" data-astro-cid-3ef6ksr2> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-3ef6ksr2> <rect width="20" height="16" x="2" y="4" rx="2" data-astro-cid-3ef6ksr2></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-astro-cid-3ef6ksr2></path> </svg> <span data-astro-cid-3ef6ksr2>${SITE.contact.email}</span> </a> </div> </div> </div> </header> ${renderScript($$result, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bmx-ft" data-astro-cid-sz7xmlte> <div class="bmx-ft-inner" data-astro-cid-sz7xmlte> <!-- Main Grid --> <div class="bmx-ft-main" data-astro-cid-sz7xmlte> <div class="bmx-ft-brand" data-astro-cid-sz7xmlte> <a href="/" class="bmx-ft-logo" data-astro-cid-sz7xmlte>BOMBERO<span data-astro-cid-sz7xmlte>.MX</span></a> <p class="bmx-ft-slogan" data-astro-cid-sz7xmlte>Protegiendo a quienes nos protegen</p> <p class="bmx-ft-desc" data-astro-cid-sz7xmlte>Distribuidor líder de equipo profesional para bomberos en México. Más de 15 años equipando estaciones con equipo certificado NFPA.</p> <div class="bmx-ft-stats" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte><strong data-astro-cid-sz7xmlte>15+</strong><span data-astro-cid-sz7xmlte>Años</span></div> <div data-astro-cid-sz7xmlte><strong data-astro-cid-sz7xmlte>500+</strong><span data-astro-cid-sz7xmlte>Estaciones</span></div> <div data-astro-cid-sz7xmlte><strong data-astro-cid-sz7xmlte>32</strong><span data-astro-cid-sz7xmlte>Estados</span></div> </div> </div> <nav class="bmx-ft-nav" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Trajes de Bombero</h4> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" data-astro-cid-sz7xmlte>Traje Estructural NFPA 1971</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas" data-astro-cid-sz7xmlte>Sistema 3 Capas</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex" data-astro-cid-sz7xmlte>Capa Exterior Nomex®</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/membrana-gore-tex" data-astro-cid-sz7xmlte>Membrana Gore-Tex®</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico" data-astro-cid-sz7xmlte>Acolchado Térmico</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" data-astro-cid-sz7xmlte>Alta Visibilidad SOLAS</a> <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico" data-astro-cid-sz7xmlte>Diseño Ergonómico</a> <a href="/productos/trajes-para-bomberos" data-astro-cid-sz7xmlte>Traje Forestal NFPA 1977</a> <a href="/productos/trajes-para-bomberos" data-astro-cid-sz7xmlte>Traje ARFF</a> <a href="/productos/trajes-para-bomberos" data-astro-cid-sz7xmlte>Traje HAZMAT</a> <a href="/productos/trajes-para-bomberos" data-astro-cid-sz7xmlte>Ver todos los Trajes</a> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Equipo de Protección</h4> <a href="/productos/cascos-para-bomberos" data-astro-cid-sz7xmlte>Cascos para Bombero</a> <a href="/productos/guantes-para-bomberos/estructurales" data-astro-cid-sz7xmlte>Guantes Estructurales</a> <a href="/productos/guantes-para-bomberos" data-astro-cid-sz7xmlte>Guantes para Bombero</a> <a href="/productos/botas-para-bomberos" data-astro-cid-sz7xmlte>Botas para Bombero</a> <a href="/productos/capuchas-para-bomberos" data-astro-cid-sz7xmlte>Capuchas y Monjas</a> <a href="/productos/gafas-para-bomberos" data-astro-cid-sz7xmlte>Gafas y Protección Visual</a> <a href="/productos" data-astro-cid-sz7xmlte>Ver Catálogo Completo</a> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Directorio de Bomberos</h4> <a href="/directorio" data-astro-cid-sz7xmlte>Todas las Estaciones</a> <a href="/directorio/ciudad-de-mexico" data-astro-cid-sz7xmlte>CDMX</a> <a href="/directorio/jalisco" data-astro-cid-sz7xmlte>Jalisco</a> <a href="/directorio/nuevo-leon" data-astro-cid-sz7xmlte>Nuevo León</a> <a href="/directorio/estado-de-mexico" data-astro-cid-sz7xmlte>Estado de México</a> <a href="/directorio/veracruz" data-astro-cid-sz7xmlte>Veracruz</a> </div> <div data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Contacto</h4> <a href="tel:+525520780102" data-astro-cid-sz7xmlte>55 2078 0102</a> <a href="https://wa.me/525520780102" data-astro-cid-sz7xmlte>WhatsApp</a> <a href="mailto:ventas@bombero.mx" data-astro-cid-sz7xmlte>ventas@bombero.mx</a> <a href="/contacto" data-astro-cid-sz7xmlte>Formulario</a> <span class="bmx-ft-address" data-astro-cid-sz7xmlte>Av. Tamaulipas 150, Piso 13<br data-astro-cid-sz7xmlte>Col. Condesa, CDMX 06140</span> </div> </nav> </div> <!-- Directorio de Estados --> <div class="bmx-ft-states" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Directorio de Estaciones de Bomberos por Estado</h4> <div class="bmx-ft-states-grid" data-astro-cid-sz7xmlte> <a href="/directorio/aguascalientes" data-astro-cid-sz7xmlte>Aguascalientes</a> <a href="/directorio/baja-california" data-astro-cid-sz7xmlte>Baja California</a> <a href="/directorio/baja-california-sur" data-astro-cid-sz7xmlte>Baja California Sur</a> <a href="/directorio/campeche" data-astro-cid-sz7xmlte>Campeche</a> <a href="/directorio/chiapas" data-astro-cid-sz7xmlte>Chiapas</a> <a href="/directorio/chihuahua" data-astro-cid-sz7xmlte>Chihuahua</a> <a href="/directorio/ciudad-de-mexico" data-astro-cid-sz7xmlte>Ciudad de México</a> <a href="/directorio/coahuila" data-astro-cid-sz7xmlte>Coahuila</a> <a href="/directorio/colima" data-astro-cid-sz7xmlte>Colima</a> <a href="/directorio/durango" data-astro-cid-sz7xmlte>Durango</a> <a href="/directorio/estado-de-mexico" data-astro-cid-sz7xmlte>Estado de México</a> <a href="/directorio/guanajuato" data-astro-cid-sz7xmlte>Guanajuato</a> <a href="/directorio/guerrero" data-astro-cid-sz7xmlte>Guerrero</a> <a href="/directorio/hidalgo" data-astro-cid-sz7xmlte>Hidalgo</a> <a href="/directorio/jalisco" data-astro-cid-sz7xmlte>Jalisco</a> <a href="/directorio/michoacan" data-astro-cid-sz7xmlte>Michoacán</a> <a href="/directorio/morelos" data-astro-cid-sz7xmlte>Morelos</a> <a href="/directorio/nayarit" data-astro-cid-sz7xmlte>Nayarit</a> <a href="/directorio/nuevo-leon" data-astro-cid-sz7xmlte>Nuevo León</a> <a href="/directorio/oaxaca" data-astro-cid-sz7xmlte>Oaxaca</a> <a href="/directorio/puebla" data-astro-cid-sz7xmlte>Puebla</a> <a href="/directorio/queretaro" data-astro-cid-sz7xmlte>Querétaro</a> <a href="/directorio/quintana-roo" data-astro-cid-sz7xmlte>Quintana Roo</a> <a href="/directorio/san-luis-potosi" data-astro-cid-sz7xmlte>San Luis Potosí</a> <a href="/directorio/sinaloa" data-astro-cid-sz7xmlte>Sinaloa</a> <a href="/directorio/sonora" data-astro-cid-sz7xmlte>Sonora</a> <a href="/directorio/tabasco" data-astro-cid-sz7xmlte>Tabasco</a> <a href="/directorio/tamaulipas" data-astro-cid-sz7xmlte>Tamaulipas</a> <a href="/directorio/tlaxcala" data-astro-cid-sz7xmlte>Tlaxcala</a> <a href="/directorio/veracruz" data-astro-cid-sz7xmlte>Veracruz</a> <a href="/directorio/yucatan" data-astro-cid-sz7xmlte>Yucatán</a> <a href="/directorio/zacatecas" data-astro-cid-sz7xmlte>Zacatecas</a> </div> </div> <!-- Certs Row --> <div class="bmx-ft-certs" data-astro-cid-sz7xmlte> <div class="bmx-ft-certs-group" data-astro-cid-sz7xmlte> <span class="bmx-ft-certs-label" data-astro-cid-sz7xmlte>Certificaciones:</span> <span data-astro-cid-sz7xmlte>NFPA</span><span data-astro-cid-sz7xmlte>UL</span><span data-astro-cid-sz7xmlte>NOM</span><span data-astro-cid-sz7xmlte>EN</span> </div> <div class="bmx-ft-certs-group" data-astro-cid-sz7xmlte> <span class="bmx-ft-certs-label" data-astro-cid-sz7xmlte>Marcas:</span> <span data-astro-cid-sz7xmlte>MSA</span><span data-astro-cid-sz7xmlte>Honeywell</span><span data-astro-cid-sz7xmlte>Globe</span><span data-astro-cid-sz7xmlte>Bullard</span><span data-astro-cid-sz7xmlte>Cairns</span> </div> </div> <!-- Bottom --> <div class="bmx-ft-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${year} BOMBERO.MX — Todos los derechos reservados</p> <div class="bmx-ft-legal" data-astro-cid-sz7xmlte> <a href="/privacidad" data-astro-cid-sz7xmlte>Privacidad</a> <a href="/terminos" data-astro-cid-sz7xmlte>Términos</a> <a href="/devoluciones" data-astro-cid-sz7xmlte>Devoluciones</a> </div> </div> </div> </footer> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://bombero.mx");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { jsonLd, ...seoProps } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { ...seoProps, "jsonLd": jsonLd }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main id="main-content"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/LAYOUTS/PageLayout.astro", void 0);

export { $$PageLayout as $, SITE as S, breadcrumbJsonLd as b };
