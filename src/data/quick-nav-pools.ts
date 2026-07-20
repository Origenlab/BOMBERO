/**
 * Quick Nav — pools de links para interlinking contextual
 * Usados por <QuickNav /> para generar navegación intuitiva
 * en cada página del sitio sin repetir el mismo set.
 */

export interface Pill {
  label: string;
  norm?: string; // subtítulo (norma NFPA, descripción corta)
  href: string;
}

/* ──────────────────────────────────────────────────────────────
   POOLS TEMÁTICOS
   ────────────────────────────────────────────────────────────── */

export const POOL_PRODUCTOS_EPP: Pill[] = [
  { label: "Trajes",         norm: "NFPA 1970",   href: "/productos/trajes-para-bomberos/" },
  { label: "Cascos",         norm: "NFPA 1970",   href: "/productos/cascos-para-bomberos/" },
  { label: "Guantes",        norm: "NFPA 1970",   href: "/productos/guantes-para-bomberos/" },
  { label: "Botas",          norm: "NFPA 1970",   href: "/productos/botas-para-bomberos/" },
  { label: "Capuchas",       norm: "Anti-flama",  href: "/productos/capuchas-para-bomberos/" },
  { label: "Gafas",          norm: "Visión 360°", href: "/productos/gafas-para-bomberos/" },
];

export const POOL_PRODUCTOS_TECNICOS: Pill[] = [
  { label: "SCBA",           norm: "NFPA 1970",   href: "/productos/scba/" },
  { label: "Forestales",     norm: "NFPA 1950",   href: "/productos/forestales/" },
  { label: "Herramientas",   norm: "Rescate",     href: "/productos/herramientas-rescate/" },
  { label: "HAZMAT",         norm: "NFPA 1991",   href: "/productos/hazmat/" },
  { label: "Tecnología",     norm: "TIC · Drones",href: "/productos/tecnologia/" },
  { label: "Extintores",     norm: "NOM-154",     href: "/productos/extintores/" },
  { label: "Combate CI",     norm: "Hidrantes",   href: "/productos/equipo-contra-incendios/" },
];

export const POOL_BLOG_DESTACADO: Pill[] = [
  { label: "NFPA 1970",      norm: "Guía completa",     href: "/blog/nfpa-1971-guia-completa/" },
  { label: "SCBA",           norm: "Mantenimiento",     href: "/blog/mantenimiento-scba/" },
  { label: "Rescate",        norm: "Técnicas",          href: "/blog/rescate-vehicular-tecnicas/" },
  { label: "Brigadas",       norm: "EPP Industrial",    href: "/blog/brigadas-industriales-epp/" },
  { label: "Forestales",     norm: "México",            href: "/blog/incendios-forestales-mexico/" },
  { label: "Cascos",         norm: "Tipos y selección", href: "/blog/cascos-bombero-tipos/" },
  { label: "TIC",            norm: "Cámara térmica",    href: "/blog/camara-termica-tic-bomberos-nfpa-1801/" },
  { label: "Extricación",    norm: "Jaws of Life",      href: "/blog/extricacion-vehicular-jaws-of-life-mexico/" },
];

export const POOL_DIRECTORIO_ESTADOS: Pill[] = [
  { label: "CDMX",           norm: "Bomberos",          href: "/directorio/ciudad-de-mexico/" },
  { label: "Jalisco",        norm: "Bomberos",          href: "/directorio/jalisco/" },
  { label: "Nuevo León",     norm: "Bomberos",          href: "/directorio/nuevo-leon/" },
  { label: "Edomex",         norm: "Bomberos",          href: "/directorio/estado-de-mexico/" },
  { label: "Puebla",         norm: "Bomberos",          href: "/directorio/puebla/" },
  { label: "Guanajuato",     norm: "Bomberos",          href: "/directorio/guanajuato/" },
  { label: "Querétaro",      norm: "Bomberos",          href: "/directorio/queretaro/" },
  { label: "Veracruz",       norm: "Bomberos",          href: "/directorio/veracruz/" },
];

export const POOL_INFO: Pill[] = [
  { label: "Catálogo",       norm: "500+ productos",  href: "/productos/" },
  { label: "Directorio",     norm: "32 estados",      href: "/directorio/" },
  { label: "Blog",           norm: "Guías NFPA",      href: "/blog/" },
  { label: "Nosotros",       norm: "BOMBERO.MX",      href: "/nosotros/" },
  { label: "Contacto",       norm: "Soporte directo", href: "/contacto/" },
];

/* CTA siempre presente al final (configurable por página) */
export const CTA_DEFAULT: Pill = {
  label: "Cotización",
  norm: "Respuesta <24 h",
  href: "/cotizar/",
};

export const CTA_WHATSAPP: Pill = {
  label: "WhatsApp",
  norm: "Directo",
  href: "https://wa.me/525560348981?text=Hola%2C%20quiero%20cotizar%20equipo%20NFPA",
};

/* ──────────────────────────────────────────────────────────────
   COMBOS PREDEFINIDOS POR TIPO DE PÁGINA
   ────────────────────────────────────────────────────────────── */

export const COMBO_POOLS: Record<string, Pill[]> = {
  // Home: mix general productos + tecnológicos
  home: [...POOL_PRODUCTOS_EPP, ...POOL_PRODUCTOS_TECNICOS],
  // Listado de productos: foco EPP + técnicos
  productos: [...POOL_PRODUCTOS_EPP, ...POOL_PRODUCTOS_TECNICOS],
  // Producto/Categoría individual: relacionados + 1 técnico + info
  categoria: [...POOL_PRODUCTOS_EPP, ...POOL_PRODUCTOS_TECNICOS, ...POOL_INFO],
  producto: [...POOL_PRODUCTOS_EPP, ...POOL_PRODUCTOS_TECNICOS, ...POOL_INFO],
  // Blog: artículos destacados + productos relevantes
  blog: [...POOL_BLOG_DESTACADO, ...POOL_PRODUCTOS_TECNICOS],
  blogPost: [...POOL_BLOG_DESTACADO, ...POOL_PRODUCTOS_EPP],
  // Directorio: estados + productos
  directorio: [...POOL_DIRECTORIO_ESTADOS, ...POOL_INFO],
  estado: [...POOL_DIRECTORIO_ESTADOS.filter(p => true), ...POOL_PRODUCTOS_EPP],
  estacion: [...POOL_PRODUCTOS_EPP, ...POOL_DIRECTORIO_ESTADOS],
  // Páginas info: cruce de todo
  info: [...POOL_PRODUCTOS_EPP, ...POOL_INFO, ...POOL_BLOG_DESTACADO],
  // Genérico (fallback)
  default: [...POOL_PRODUCTOS_EPP, ...POOL_PRODUCTOS_TECNICOS, ...POOL_INFO],
};

/* ──────────────────────────────────────────────────────────────
   SELECTOR DETERMINÍSTICO POR URL
   Cada página recibe el mismo subconjunto en cada build,
   pero distinto entre páginas → mejor interlinking.
   ────────────────────────────────────────────────────────────── */

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Fisher-Yates shuffle determinístico con seed */
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = arr.slice();
  let rng = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    rng = (rng * 9301 + 49297) % 233280;
    const j = Math.floor((rng / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Selecciona N pills de un pool, evitando que coincidan con la URL actual.
 * El subset elegido depende del path para que cada página muestre uno distinto.
 */
export function pickPills(
  poolName: keyof typeof COMBO_POOLS | string,
  currentPath: string,
  count: number = 7
): Pill[] {
  const pool = COMBO_POOLS[poolName] || COMBO_POOLS.default;
  // Deduplicar por href
  const seen = new Set<string>();
  const unique = pool.filter(p => {
    if (seen.has(p.href)) return false;
    seen.add(p.href);
    return true;
  });
  // Excluir página actual
  const normalized = currentPath.replace(/\/+$/, "");
  const filtered = unique.filter(p => p.href.replace(/\/+$/, "") !== normalized);
  // Shuffle determinístico por path
  const shuffled = seededShuffle(filtered, simpleHash(currentPath));
  return shuffled.slice(0, count);
}
