/**
 * ─── Navigation Configuration ───
 * Centralizes all nav links for Header, Footer, and mobile menu.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Productos",
    href: "/productos",
    children: [
      { label: "Trajes de Bombero", href: "/productos/trajes" },
      { label: "Cascos y Protección", href: "/productos/cascos" },
      { label: "Guantes y Botas", href: "/productos/guantes-botas" },
      { label: "SCBA Respiración", href: "/productos/scba" },
      { label: "Equipo Contra Incendios", href: "/productos/equipo-contra-incendios" },
      { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate" },
      { label: "Tecnología", href: "/productos/tecnologia" },
      { label: "Extintores", href: "/productos/extintores" },
    ],
  },
  { label: "Directorio", href: "/directorio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const productCategories = [
  {
    id: "trajes",
    name: "Trajes de Bombero",
    description: "Trajes estructurales NFPA 1971, forestales, ARFF, aproximación y HAZMAT. Venta en México",
    icon: "shield",
    href: "/productos/trajes",
  },
  {
    id: "cascos",
    name: "Cascos para Bombero",
    description: "Cascos certificados NFPA con protección facial, monjas y gafas",
    icon: "helmet",
    href: "/productos/cascos",
  },
  {
    id: "guantes-botas",
    name: "Guantes y Botas",
    description: "Guantes y botas para bombero certificadas NFPA. Envío a todo México",
    icon: "gloves",
    href: "/productos/guantes-botas",
  },
  {
    id: "scba",
    name: "Equipos SCBA",
    description: "Equipos de respiración autónoma, cilindros, máscaras y compresores",
    icon: "lungs",
    href: "/productos/scba",
  },
  {
    id: "equipo-contra-incendios",
    name: "Equipo Contra Incendios",
    description: "Mangueras, boquillas, monitores e hidrantes para bomberos",
    icon: "fire",
    href: "/productos/equipo-contra-incendios",
  },
  {
    id: "herramientas-rescate",
    name: "Herramientas de Rescate",
    description: "Equipo de rescate vehicular, entrada forzada y espacios confinados",
    icon: "tools",
    href: "/productos/herramientas-rescate",
  },
  {
    id: "tecnologia",
    name: "Cámaras Térmicas",
    description: "Cámaras térmicas, detectores de gases, radios y linternas LED",
    icon: "camera",
    href: "/productos/tecnologia",
  },
  {
    id: "extintores",
    name: "Extintores",
    description: "Extintores portátiles y rodantes certificados NOM. Recarga disponible",
    icon: "extinguisher",
    href: "/productos/extintores",
  },
];

export const footerNav: Record<string, NavItem[]> = {
  productos: [
    { label: "Trajes de Bombero", href: "/productos/trajes" },
    { label: "Cascos y Protección", href: "/productos/cascos" },
    { label: "SCBA Respiración", href: "/productos/scba" },
    { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate" },
    { label: "Ver todos", href: "/productos" },
  ],
  servicios: [
    { label: "Mantenimiento de Equipos", href: "/servicios#mantenimiento" },
    { label: "Recarga de Extintores", href: "/servicios#recarga" },
    { label: "Capacitación NFPA", href: "/capacitacion" },
    { label: "Consultoría", href: "/servicios#consultoria" },
  ],
  directorio: [
    { label: "Todas las Estaciones", href: "/directorio" },
    { label: "CDMX", href: "/directorio/ciudad-de-mexico" },
    { label: "Jalisco", href: "/directorio/jalisco" },
    { label: "Nuevo León", href: "/directorio/nuevo-leon" },
    { label: "Estado de México", href: "/directorio/estado-de-mexico" },
  ],
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
    { label: "Cotizaciones", href: "/cotizar" },
  ],
  legal: [
    { label: "Aviso de privacidad", href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
};
