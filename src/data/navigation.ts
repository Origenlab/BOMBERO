/**
 * ─── Navigation Configuration ───
 * Estructura de navegación profesional para BOMBERO.MX
 * Diseño limpio con mega menu para productos
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
};

// ══════════════════════════════════════════════════════════════════════════════
// NAVEGACIÓN PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Productos",
    href: "/productos/",
    children: [], // Se usa productCategories para el mega menu
  },
  { label: "Directorio", href: "/directorio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Nosotros", href: "/nosotros/" },
  { label: "Contacto", href: "/contacto/" },
];

// ══════════════════════════════════════════════════════════════════════════════
// CATEGORÍAS DE PRODUCTOS (Para Mega Menu)
// ══════════════════════════════════════════════════════════════════════════════

export const productCategories: NavItem[] = [
  {
    label: "Trajes de Bombero",
    href: "/productos/trajes-para-bomberos/",
    icon: "shield",
    description: "Estructurales NFPA 1971, forestales, ARFF y HAZMAT",
    badge: "Más vendido",
    children: [
      { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/" },
      { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/" },
      { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/" },
      { label: "Traje de Aproximación", href: "/productos/trajes-para-bomberos/traje-aproximacion/" },
      { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat/" },
    ],
  },
  {
    label: "Cascos para Bombero",
    href: "/productos/cascos-para-bomberos/",
    icon: "helmet",
    description: "Estructurales, forestales, rescate y accesorios",
    children: [
      { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/" },
      { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/" },
      { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/" },
      { label: "Casco ARFF Aeroportuario", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/" },
      { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/" },
    ],
  },
  {
    label: "Guantes para Bombero",
    href: "/productos/guantes-para-bomberos/",
    icon: "gloves",
    description: "Estructurales, rescate, HAZMAT y forestales",
    children: [
      { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales/" },
      { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate/" },
      { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/" },
      { label: "Guantes Forestales NFPA 1977", href: "/productos/guantes-para-bomberos/forestales/" },
    ],
  },
  {
    label: "Botas para Bombero",
    href: "/productos/botas-para-bomberos/",
    icon: "boot",
    description: "Estructurales de cuero, caucho y forestales",
    children: [
      { label: "Bota Estructural de Cuero", href: "/productos/botas-para-bomberos/estructural/" },
      { label: "Bota de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho/" },
      { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal/" },
    ],
  },
  {
    label: "Capuchas y Monjas",
    href: "/productos/capuchas-para-bomberos/",
    icon: "hood",
    description: "Nomex, PBI Gold y protección particulada",
    children: [
      { label: "Capucha Nomex", href: "/productos/capuchas-para-bomberos/nomex/" },
      { label: "Capucha PBI Gold", href: "/productos/capuchas-para-bomberos/pbi/" },
      { label: "Capucha Particulada", href: "/productos/capuchas-para-bomberos/particulada/" },
    ],
  },
  {
    label: "Gafas y Protección Visual",
    href: "/productos/gafas-para-bomberos/",
    icon: "goggles",
    description: "Goggles y gafas de seguridad certificadas",
    children: [
      { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle/" },
      { label: "Gafas de Seguridad", href: "/productos/gafas-para-bomberos/seguridad/" },
    ],
  },
];

// Categorías secundarias (mostradas en columna aparte del mega menu)
export const secondaryCategories: NavItem[] = [
  {
    label: "Equipos SCBA",
    href: "/productos/scba/",
    icon: "lungs",
    description: "Respiración autónoma",
  },
  {
    label: "Equipo Contra Incendios",
    href: "/productos/equipo-contra-incendios/",
    icon: "fire",
    description: "Mangueras y boquillas",
  },
  {
    label: "Herramientas de Rescate",
    href: "/productos/herramientas-rescate/",
    icon: "tools",
    description: "Rescate vehicular",
  },
  {
    label: "Cámaras Térmicas",
    href: "/productos/tecnologia/",
    icon: "camera",
    description: "Tecnología y detección",
  },
  {
    label: "Extintores",
    href: "/productos/extintores/",
    icon: "extinguisher",
    description: "Portátiles y rodantes",
  },
];

// ══════════════════════════════════════════════════════════════════════════════
// NAVEGACIÓN DEL FOOTER
// ══════════════════════════════════════════════════════════════════════════════

export const footerNav: Record<string, NavItem[]> = {
  productos: [
    { label: "Trajes de Bombero", href: "/productos/trajes-para-bomberos/" },
    { label: "Cascos para Bombero", href: "/productos/cascos-para-bomberos/" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos/" },
    { label: "Botas para Bombero", href: "/productos/botas-para-bomberos/" },
    { label: "Capuchas y Monjas", href: "/productos/capuchas-para-bomberos/" },
    { label: "Gafas y Protección Visual", href: "/productos/gafas-para-bomberos/" },
    { label: "SCBA Respiración", href: "/productos/scba/" },
    { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate/" },
    { label: "Ver todos", href: "/productos/" },
  ],
  servicios: [
    { label: "Mantenimiento de Equipos", href: "/servicios/#mantenimiento" },
    { label: "Recarga de Extintores", href: "/servicios/#recarga" },
    { label: "Capacitación NFPA", href: "/capacitacion/" },
    { label: "Consultoría", href: "/servicios/#consultoria" },
  ],
  directorio: [
    { label: "Todas las Estaciones", href: "/directorio/" },
    { label: "CDMX", href: "/directorio/ciudad-de-mexico/" },
    { label: "Jalisco", href: "/directorio/jalisco/" },
    { label: "Nuevo León", href: "/directorio/nuevo-leon/" },
    { label: "Estado de México", href: "/directorio/estado-de-mexico/" },
  ],
  blog: [
    { label: "Todos los Artículos", href: "/blog/" },
    { label: "Guía NFPA 1971", href: "/blog/nfpa-1971-guia-completa/" },
    { label: "Mantenimiento SCBA", href: "/blog/mantenimiento-scba/" },
    { label: "Rescate Vehicular", href: "/blog/rescate-vehicular-tecnicas/" },
    { label: "Brigadas Industriales", href: "/blog/brigadas-industriales-epp/" },
    { label: "Incendios Forestales", href: "/blog/incendios-forestales-mexico/" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros/" },
    { label: "Contacto", href: "/contacto/" },
    { label: "Cotizaciones", href: "/cotizar/" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/privacidad/" },
    { label: "Términos y condiciones", href: "/terminos/" },
  ],
};
