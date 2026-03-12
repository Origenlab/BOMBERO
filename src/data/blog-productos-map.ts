/**
 * Blog to Products Mapping
 * Maps blog article slugs to related product pages and CTA content
 * Used for inline product recommendations in blog articles
 */

export interface ProductLink {
  label: string;
  href: string;
  ctaText: string;
}

/**
 * Mapping of blog article slugs to arrays of related products
 * Organized by content type and product category
 */
export const BLOG_PRODUCTOS_MAP: Record<string, ProductLink[]> = {
  // NFPA 1971 - Normativa General (EPP Estructural Completo)
  "nfpa-1971-guia-completa": [
    {
      label: "Trajes Estructurales NFPA 1971",
      href: "/productos/trajes-para-bomberos/",
      ctaText: "Ver catálogo de trajes",
    },
    {
      label: "Cascos Estructurales NFPA 1971",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Explorar cascos certificados",
    },
    {
      label: "Guantes Estructurales NFPA 1971",
      href: "/productos/guantes-para-bomberos/estructurales/",
      ctaText: "Ver guantes de protección",
    },
    {
      label: "Cotizar EPP Completo",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // SCBA - Mantenimiento
  "mantenimiento-scba": [
    {
      label: "Equipos SCBA y Respiratorios",
      href: "/productos/scba/",
      ctaText: "Ver catálogo SCBA",
    },
    {
      label: "Servicios de Mantenimiento",
      href: "/cotizar/",
      ctaText: "Solicitar servicio técnico",
    },
    {
      label: "Repuestos y Accesorios",
      href: "/productos/scba/",
      ctaText: "Ver repuestos disponibles",
    },
    {
      label: "Capacitación NFPA 1852",
      href: "/cotizar/",
      ctaText: "Solicitar capacitación",
    },
  ],

  // Rescate Vehicular - Técnicas
  "rescate-vehicular-tecnicas": [
    {
      label: "Cascos de Rescate NFPA 1951",
      href: "/productos/cascos-para-bomberos/rescate-nfpa-1951/",
      ctaText: "Ver cascos de rescate",
    },
    {
      label: "Guantes Técnicos de Rescate",
      href: "/productos/guantes-para-bomberos/rescate-extricacion/",
      ctaText: "Explorar guantes de rescate",
    },
    {
      label: "Equipo Contra Incendios",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Ver herramientas de rescate",
    },
    {
      label: "Cotizar Equipo de Rescate",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Brigadas Industriales - EPP
  "brigadas-industriales-epp": [
    {
      label: "Trajes Estructurales",
      href: "/productos/trajes-para-bomberos/",
      ctaText: "Ver catálogo de trajes",
    },
    {
      label: "Cascos Industriales",
      href: "/productos/cascos-para-bomberos/",
      ctaText: "Explorar cascos certificados",
    },
    {
      label: "Trajes Químicos HAZMAT",
      href: "/productos/hazmat/",
      ctaText: "Ver protección química",
    },
    {
      label: "Evaluación de Brigada Industrial",
      href: "/cotizar/",
      ctaText: "Solicitar evaluación",
    },
  ],

  // Incendios Forestales
  "incendios-forestales-mexico": [
    {
      label: "Cascos Forestales NFPA 1977",
      href: "/productos/cascos-para-bomberos/forestal-nfpa-1977/",
      ctaText: "Ver cascos forestales",
    },
    {
      label: "Trajes Forestales NFPA 1977",
      href: "/productos/trajes-para-bomberos/forestales/",
      ctaText: "Explorar trajes forestales",
    },
    {
      label: "Guantes Forestales",
      href: "/productos/guantes-para-bomberos/forestales-nfpa-1977/",
      ctaText: "Ver guantes forestales",
    },
    {
      label: "Equipamiento Forestal Completo",
      href: "/cotizar/",
      ctaText: "Cotizar equipo forestal",
    },
  ],

  // Cascos - Tipos Generales
  "cascos-bombero-tipos": [
    {
      label: "Cascos Estructurales NFPA 1971",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Ver cascos estructurales",
    },
    {
      label: "Cascos Forestales NFPA 1977",
      href: "/productos/cascos-para-bomberos/forestal-nfpa-1977/",
      ctaText: "Explorar cascos forestales",
    },
    {
      label: "Cascos de Rescate NFPA 1951",
      href: "/productos/cascos-para-bomberos/rescate-nfpa-1951/",
      ctaText: "Ver cascos de rescate",
    },
    {
      label: "Catálogo Completo de Cascos",
      href: "/productos/cascos-para-bomberos/",
      ctaText: "Ver todos los cascos",
    },
  ],

  // Traje Estructural NFPA 1971
  "traje-estructural-nfpa-1971": [
    {
      label: "Catálogo de Trajes Estructurales",
      href: "/productos/trajes-para-bomberos/",
      ctaText: "Ver trajes disponibles",
    },
    {
      label: "Cascos Estructurales NFPA 1971",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Ver cascos certificados",
    },
    {
      label: "Guantes Estructurales",
      href: "/productos/guantes-para-bomberos/estructurales/",
      ctaText: "Explorar guantes",
    },
    {
      label: "Cotizar Equipo Estructural",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Trajes HAZMAT
  "traje-hazmat-proteccion-quimica": [
    {
      label: "Trajes Químicos HAZMAT",
      href: "/productos/hazmat/",
      ctaText: "Ver trajes HAZMAT",
    },
    {
      label: "Guantes Químicos HAZMAT",
      href: "/productos/guantes-para-bomberos/hazmat-proteccion-quimica/",
      ctaText: "Ver guantes químicos",
    },
    {
      label: "Protección Química Completa",
      href: "/productos/hazmat/",
      ctaText: "Explorar catálogo HAZMAT",
    },
    {
      label: "Cotizar Equipamiento HAZMAT",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Traje de Aproximación - Calor Radiante
  "traje-aproximacion-calor-radiante": [
    {
      label: "Trajes de Aproximación ARFF",
      href: "/productos/trajes-para-bomberos/aproximacion-calor-radiante/",
      ctaText: "Ver trajes de aproximación",
    },
    {
      label: "Cascos Estructurales",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Ver cascos certificados",
    },
    {
      label: "Guantes Especializados",
      href: "/productos/guantes-para-bomberos/estructurales/",
      ctaText: "Explorar guantes",
    },
    {
      label: "Cotizar Equipo Especializado",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Casco Estructural NFPA 1971
  "casco-estructural-nfpa-1971": [
    {
      label: "Cascos Estructurales NFPA 1971",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Ver cascos disponibles",
    },
    {
      label: "Capuchas Protectoras",
      href: "/productos/capuchas-para-bomberos/",
      ctaText: "Ver capuchas particuladas",
    },
    {
      label: "Trajes Estructurales",
      href: "/productos/trajes-para-bomberos/",
      ctaText: "Ver trajes certificados",
    },
    {
      label: "Cotizar Cascos",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Casco Forestal NFPA 1977
  "casco-forestal-nfpa-1977": [
    {
      label: "Cascos Forestales NFPA 1977",
      href: "/productos/cascos-para-bomberos/forestal-nfpa-1977/",
      ctaText: "Ver cascos forestales",
    },
    {
      label: "Trajes Forestales",
      href: "/productos/trajes-para-bomberos/forestales/",
      ctaText: "Ver trajes forestales",
    },
    {
      label: "Guantes Forestales",
      href: "/productos/guantes-para-bomberos/forestales-nfpa-1977/",
      ctaText: "Explorar guantes",
    },
    {
      label: "Equipamiento Forestal",
      href: "/cotizar/",
      ctaText: "Cotizar equipo completo",
    },
  ],

  // Casco Rescate NFPA 1951
  "casco-rescate-nfpa-1951": [
    {
      label: "Cascos de Rescate NFPA 1951",
      href: "/productos/cascos-para-bomberos/rescate-nfpa-1951/",
      ctaText: "Ver cascos de rescate",
    },
    {
      label: "Guantes de Rescate",
      href: "/productos/guantes-para-bomberos/rescate-extricacion/",
      ctaText: "Ver guantes técnicos",
    },
    {
      label: "Equipo Técnico de Rescate",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Explorar equipamiento",
    },
    {
      label: "Cotizar Equipo de Rescate",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Guantes Estructurales NFPA 1971
  "guantes-estructurales-nfpa-1971": [
    {
      label: "Guantes Estructurales NFPA 1971",
      href: "/productos/guantes-para-bomberos/estructurales/",
      ctaText: "Ver guantes disponibles",
    },
    {
      label: "Trajes Estructurales",
      href: "/productos/trajes-para-bomberos/",
      ctaText: "Ver trajes certificados",
    },
    {
      label: "Cascos Estructurales",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/",
      ctaText: "Explorar cascos",
    },
    {
      label: "Cotizar EPP Estructural",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Guantes Rescate/Extricación
  "guantes-rescate-extricacion": [
    {
      label: "Guantes de Rescate",
      href: "/productos/guantes-para-bomberos/rescate-extricacion/",
      ctaText: "Ver guantes de rescate",
    },
    {
      label: "Cascos de Rescate",
      href: "/productos/cascos-para-bomberos/rescate-nfpa-1951/",
      ctaText: "Ver cascos técnicos",
    },
    {
      label: "Equipo de Rescate",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Explorar herramientas",
    },
    {
      label: "Cotizar Equipo Técnico",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Guantes HAZMAT
  "guantes-hazmat-proteccion-quimica": [
    {
      label: "Guantes Químicos HAZMAT",
      href: "/productos/guantes-para-bomberos/hazmat-proteccion-quimica/",
      ctaText: "Ver guantes químicos",
    },
    {
      label: "Trajes Químicos",
      href: "/productos/hazmat/",
      ctaText: "Ver trajes HAZMAT",
    },
    {
      label: "Protección Química Completa",
      href: "/productos/hazmat/",
      ctaText: "Explorar catálogo",
    },
    {
      label: "Cotizar Equipamiento",
      href: "/cotizar/",
      ctaText: "Solicitar cotización",
    },
  ],

  // Guantes Forestales NFPA 1977
  "guantes-forestales-nfpa-1977": [
    {
      label: "Guantes Forestales NFPA 1977",
      href: "/productos/guantes-para-bomberos/forestales-nfpa-1977/",
      ctaText: "Ver guantes forestales",
    },
    {
      label: "Cascos Forestales",
      href: "/productos/cascos-para-bomberos/forestal-nfpa-1977/",
      ctaText: "Ver cascos forestales",
    },
    {
      label: "Trajes Forestales",
      href: "/productos/trajes-para-bomberos/forestales/",
      ctaText: "Explorar trajes",
    },
    {
      label: "Equipamiento Forestal",
      href: "/cotizar/",
      ctaText: "Cotizar equipo completo",
    },
  ],

  // Empresas/Proveedores - Distribuidor
  "gama-de-mexico-equipos-contra-incendio": [
    {
      label: "Catálogo de Productos",
      href: "/productos/",
      ctaText: "Ver productos disponibles",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Contactar a Gama de México",
    },
    {
      label: "Productos Elkhart Brass",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Ver equipos distribuidos",
    },
  ],

  // Empresas/Proveedores - Sistemas Contra Incendio
  "meseci-equipos-contra-incendio-mexico": [
    {
      label: "Catálogo de Productos",
      href: "/productos/",
      ctaText: "Ver sistemas disponibles",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Contactar a MESECI",
    },
    {
      label: "Equipo Contra Incendios",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Explorar equipamiento",
    },
  ],

  // Empresas/Proveedores - Extintores
  "manext-mantenimiento-extintores-cdmx": [
    {
      label: "Catálogo de Extintores",
      href: "/productos/extintores/",
      ctaText: "Ver extintores disponibles",
    },
    {
      label: "Servicio de Mantenimiento",
      href: "/cotizar/",
      ctaText: "Solicitar servicio MANEXT",
    },
    {
      label: "Recarga y Certificación",
      href: "/productos/extintores/",
      ctaText: "Más información",
    },
  ],

  // Empresas/Proveedores - Venta de Extintores
  "manext-venta-extintores-certificados-cdmx": [
    {
      label: "Extintores Certificados NOM",
      href: "/productos/extintores/",
      ctaText: "Ver catálogo de extintores",
    },
    {
      label: "Cotizar Extintores",
      href: "/cotizar/",
      ctaText: "Solicitar cotización MANEXT",
    },
    {
      label: "Servicio Técnico",
      href: "/cotizar/",
      ctaText: "Agendar mantenimiento",
    },
  ],

  // Análisis de Empresas
  "mejores-empresas-equipos-contra-incendio-mexico": [
    {
      label: "Catálogo General",
      href: "/productos/",
      ctaText: "Ver todos los productos",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Obtener presupuesto",
    },
  ],

  // Análisis Industrial
  "industria-proteccion-contra-incendio-mexico-analisis": [
    {
      label: "Catálogo Completo",
      href: "/productos/",
      ctaText: "Explorar opciones",
    },
    {
      label: "Solicitar Asesoría",
      href: "/cotizar/",
      ctaText: "Contactar experto",
    },
  ],

  // PROYECTO RED - Plataforma
  "proyecto-red-plataforma-equipos-contra-incendio": [
    {
      label: "Catálogo de Productos",
      href: "/productos/",
      ctaText: "Ver en PROYECTO RED",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Contactar proveedor",
    },
  ],

  // PROYECTO RED - Venta
  "proyecto-red-venta-equipos-contra-incendio-mexico": [
    {
      label: "Equipo Contra Incendios",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Ver productos PROYECTO RED",
    },
    {
      label: "Solicitar Compra",
      href: "/cotizar/",
      ctaText: "Hacer pedido",
    },
  ],

  // LGA - Proveedor Local
  "lga-contra-incendios-queretaro-equipos-certificados": [
    {
      label: "Equipo Contra Incendios",
      href: "/productos/equipo-contra-incendios/",
      ctaText: "Ver equipos certificados",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Contactar LGA",
    },
  ],

  // Guía de Empresas 2026
  "guia-empresas-equipos-contra-incendio-mexico-2026": [
    {
      label: "Catálogo General",
      href: "/productos/",
      ctaText: "Ver opciones disponibles",
    },
    {
      label: "Solicitar Cotización",
      href: "/cotizar/",
      ctaText: "Obtener presupuesto",
    },
  ],

  // Informe 2026 - Proveedores
  "informe-ejecutivo-proveedores-proteccion-incendio-mexico-2026": [
    {
      label: "Productos y Servicios",
      href: "/productos/",
      ctaText: "Explorar catálogo",
    },
    {
      label: "Solicitar Consulta",
      href: "/cotizar/",
      ctaText: "Contactar experto",
    },
  ],
};

/**
 * Default products set for articles without specific mappings
 * Used as fallback for general/normative articles
 */
const DEFAULT_PRODUCTOS: ProductLink[] = [
  {
    label: "Catálogo Completo de Productos",
    href: "/productos/",
    ctaText: "Explorar catálogo",
  },
  {
    label: "Trajes para Bomberos",
    href: "/productos/trajes-para-bomberos/",
    ctaText: "Ver trajes",
  },
  {
    label: "Cascos Certificados NFPA",
    href: "/productos/cascos-para-bomberos/",
    ctaText: "Ver cascos",
  },
  {
    label: "Guantes de Protección",
    href: "/productos/guantes-para-bomberos/",
    ctaText: "Explorar guantes",
  },
];

/**
 * Retrieve related products for a given blog article slug
 * Falls back to default products if slug not found in map
 *
 * @param slug - The blog article slug
 * @returns Array of related products with labels and links
 *
 * @example
 * const productos = getProductosRelacionados('nfpa-1971-guia-completa');
 * // Returns: [
 * //   { label: "Trajes Estructurales...", href: "/productos/...", ctaText: "..." },
 * //   ...
 * // ]
 */
export function getProductosRelacionados(slug: string): ProductLink[] {
  return BLOG_PRODUCTOS_MAP[slug] || DEFAULT_PRODUCTOS;
}

/**
 * Generate an inline CTA HTML block for blog articles
 * Displays the primary related product with a brief description and links
 *
 * @param slug - The blog article slug
 * @returns HTML string for inline CTA block
 *
 * @example
 * const ctaHtml = getCTAInline('casco-estructural-nfpa-1971');
 * // Returns: <div class="blog-cta-block">...
 */
export function getCTAInline(slug: string): string {
  const productos = getProductosRelacionados(slug);
  const mainProduct = productos[0];

  // Get article-specific messaging based on content category
  const ctaHeading = getCtaHeading(slug);
  const ctaDescription = getCtaDescription(slug);

  return `
<div class="blog-cta-block">
  <div class="blog-cta-container">
    <div class="blog-cta-content">
      <h3 class="blog-cta-heading">${ctaHeading}</h3>
      <p class="blog-cta-description">${ctaDescription}</p>
      <div class="blog-cta-buttons">
        <a href="${mainProduct.href}" class="blog-cta-button blog-cta-button-primary">
          ${mainProduct.label}
        </a>
        <a href="/cotizar/" class="blog-cta-button blog-cta-button-secondary">
          Solicitar Cotización
        </a>
      </div>
    </div>
    <div class="blog-cta-badge">
      <span class="blog-cta-badge-icon">✓</span>
      <span class="blog-cta-badge-text">Certificado NFPA</span>
    </div>
  </div>
</div>
  `.trim();
}

/**
 * Get category-specific CTA heading based on article slug
 * Provides contextual messaging for inline CTAs
 */
function getCtaHeading(slug: string): string {
  if (slug.includes("casco")) {
    return "¿Necesitas un casco certificado?";
  }
  if (slug.includes("traje")) {
    return "¿Necesitas equipo de protección?";
  }
  if (slug.includes("guante")) {
    return "¿Necesitas guantes especializados?";
  }
  if (slug.includes("forestales")) {
    return "¿Necesitas EPP para incendios forestales?";
  }
  if (slug.includes("hazmat") || slug.includes("quimica")) {
    return "¿Necesitas protección química?";
  }
  if (slug.includes("rescate")) {
    return "¿Necesitas equipo de rescate?";
  }
  if (slug.includes("scba") || slug.includes("mantenimiento")) {
    return "¿Necesitas equipo respiratorio?";
  }
  if (slug.includes("extintor")) {
    return "¿Necesitas extintores certificados?";
  }
  return "¿Necesitas equipamiento profesional?";
}

/**
 * Get category-specific CTA description based on article slug
 * Provides contextual information about product benefits
 */
function getCtaDescription(slug: string): string {
  if (slug.includes("nfpa-1971")) {
    return "Contamos con equipamiento completo certificado NFPA 1971. Nuestros especialistas pueden ayudarte a seleccionar la mejor opción para tu equipo.";
  }
  if (slug.includes("forestales")) {
    return "Equipamiento NFPA 1977 diseñado específicamente para combate de incendios forestales. Ligero, transpirable y altamente protector.";
  }
  if (slug.includes("hazmat") || slug.includes("quimica")) {
    return "Protección química certificada con compatibilidad comprobada contra múltiples sustancias. Máxima seguridad para operaciones HAZMAT.";
  }
  if (slug.includes("rescate")) {
    return "Equipo técnico especializado para operaciones de rescate con estándares NFPA 1951 y procedimientos de seguridad.";
  }
  if (slug.includes("scba")) {
    return "Sistemas respiratorios de aire comprimido certificados NFPA 1981 con mantenimiento profesional garantizado.";
  }
  if (slug.includes("extintor")) {
    return "Extintores certificados conforme a normas NOM con servicio de recarga y mantenimiento en toda la CDMX.";
  }
  return "Toda nuestra línea de productos cuenta con certificaciones NFPA vigentes y documentación verificable. Asesoría técnica gratuita incluida.";
}

/**
 * Get all unique product categories from the mapping
 * Useful for analytics and category-based filtering
 */
export function getAllProductCategories(): string[] {
  const categories = new Set<string>();

  Object.values(BLOG_PRODUCTOS_MAP).forEach((productos) => {
    productos.forEach((producto) => {
      const category = extractCategoryFromHref(producto.href);
      if (category) {
        categories.add(category);
      }
    });
  });

  return Array.from(categories).sort();
}

/**
 * Extract product category from href path
 */
function extractCategoryFromHref(href: string): string | null {
  const match = href.match(/\/productos\/([a-z0-9\-]+)\/?/);
  return match ? match[1] : null;
}

/**
 * Get count of articles mapped for a specific product category
 * Useful for tracking coverage and SEO optimization
 */
export function getArticleCountByCategory(
  category: string
): { slug: string; articleTitle: string }[] {
  const results: { slug: string; articleTitle: string }[] = [];

  for (const [slug, productos] of Object.entries(BLOG_PRODUCTOS_MAP)) {
    const hasCategory = productos.some((p) =>
      p.href.includes(`/productos/${category}/`) ||
      p.href.includes(`/productos/${category}`)
    );

    if (hasCategory) {
      results.push({
        slug,
        articleTitle: slug.replace(/-/g, " "),
      });
    }
  }

  return results;
}
