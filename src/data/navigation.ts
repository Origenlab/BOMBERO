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
      {
        label: "Trajes de Bombero",
        href: "/productos/trajes-para-bomberos",
        children: [
          { label: "Traje Estructural NFPA 1971",  href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
          { label: "Acolchado Térmico Caldura®",  href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico" },
          { label: "Alta Visibilidad SOLAS Cl.2", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" },
          { label: "Diseño Ergonómico 3D",        href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico" },
          { label: "Traje Forestal NFPA 1977",    href: "/productos/trajes-para-bomberos" },
          { label: "Traje ARFF (Aeroportuario)",  href: "/productos/trajes-para-bomberos" },
          { label: "Traje de Aproximación",       href: "/productos/trajes-para-bomberos" },
          { label: "Traje HAZMAT",                href: "/productos/trajes-para-bomberos" },
        ],
      },
      {
        label: "Cascos",
        href: "/productos/cascos-para-bomberos",
        children: [
          { label: "Casco Estructural",     href: "/productos/cascos-para-bomberos" },
          { label: "Casco Forestal",        href: "/productos/cascos-para-bomberos" },
          { label: "Casco de Rescate",      href: "/productos/cascos-para-bomberos" },
          { label: "Accesorios para Casco", href: "/productos/cascos-para-bomberos" },
        ],
      },
      {
        label: "Botas",
        href: "/productos/botas-para-bomberos",
        children: [
          { label: "Bota Estructural (Cuero)",  href: "/productos/botas-para-bomberos" },
          { label: "Bota de Caucho (HAZMAT)",   href: "/productos/botas-para-bomberos" },
          { label: "Bota Forestal",             href: "/productos/botas-para-bomberos" },
        ],
      },
      {
        label: "Guantes",
        href: "/productos/guantes-para-bomberos",
        children: [
          { label: "Guantes Estructurales",        href: "/productos/guantes-para-bomberos/estructurales" },
          { label: "Guantes de Rescate/Extricación", href: "/productos/guantes-para-bomberos" },
          { label: "Guantes HAZMAT",               href: "/productos/guantes-para-bomberos" },
          { label: "Guantes Forestales",           href: "/productos/guantes-para-bomberos" },
        ],
      },
      {
        label: "Capuchas y Monjas",
        href: "/productos/capuchas-para-bomberos",
        children: [
          { label: "Capucha Nomex®",                    href: "/productos/capuchas-para-bomberos" },
          { label: "Capucha PBI®",                      href: "/productos/capuchas-para-bomberos" },
          { label: "Capucha con Protección Particulada", href: "/productos/capuchas-para-bomberos" },
        ],
      },
      {
        label: "Gafas y Protección Visual",
        href: "/productos/gafas-para-bomberos",
        children: [
          { label: "Goggle de Bombero",              href: "/productos/gafas-para-bomberos" },
          { label: "Gafas de Seguridad Antiimpacto", href: "/productos/gafas-para-bomberos" },
        ],
      },
    ],
  },
  { label: "Directorio", href: "/directorio" },
  { label: "Servicios",  href: "/servicios" },
  { label: "Nosotros",   href: "/nosotros" },
  { label: "Contacto",   href: "/contacto" },
];

export const productCategories = [
  {
    id: "trajes",
    name: "Trajes de Bombero",
    description: "Trajes estructurales NFPA 1971, forestales, ARFF, aproximación y HAZMAT. Venta en México",
    icon: "shield",
    href: "/productos/trajes-para-bomberos",
  },
  {
    id: "cascos",
    name: "Cascos para Bombero",
    description: "Cascos certificados NFPA con protección facial, monjas y gafas",
    icon: "helmet",
    href: "/productos/cascos-para-bomberos",
  },
  {
    id: "guantes",
    name: "Guantes para Bombero",
    description: "Guantes estructurales, de rescate, HAZMAT y forestales certificados NFPA",
    icon: "gloves",
    href: "/productos/guantes-para-bomberos",
  },
  {
    id: "botas",
    name: "Botas para Bombero",
    description: "Botas estructurales de cuero, caucho HAZMAT y forestales certificadas",
    icon: "boot",
    href: "/productos/botas-para-bomberos",
  },
  {
    id: "capuchas",
    name: "Capuchas y Monjas",
    description: "Capuchas Nomex®, PBI Gold® y con protección particulada certificadas NFPA",
    icon: "hood",
    href: "/productos/capuchas-para-bomberos",
  },
  {
    id: "gafas",
    name: "Gafas y Protección Visual",
    description: "Goggle de bombero y gafas de seguridad antiimpacto certificadas",
    icon: "goggles",
    href: "/productos/gafas-para-bomberos",
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
    name: "Cámaras Térmicas y Tecnología",
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
    { label: "Trajes de Bombero",      href: "/productos/trajes-para-bomberos" },
    { label: "Cascos para Bombero",    href: "/productos/cascos-para-bomberos" },
    { label: "Guantes para Bombero",   href: "/productos/guantes-para-bomberos" },
    { label: "Botas para Bombero",     href: "/productos/botas-para-bomberos" },
    { label: "Capuchas y Monjas",      href: "/productos/capuchas-para-bomberos" },
    { label: "Gafas y Protección Visual", href: "/productos/gafas-para-bomberos" },
    { label: "SCBA Respiración",       href: "/productos/scba" },
    { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate" },
    { label: "Ver todos",              href: "/productos" },
  ],
  servicios: [
    { label: "Mantenimiento de Equipos", href: "/servicios#mantenimiento" },
    { label: "Recarga de Extintores",    href: "/servicios#recarga" },
    { label: "Capacitación NFPA",        href: "/capacitacion" },
    { label: "Consultoría",              href: "/servicios#consultoria" },
  ],
  directorio: [
    { label: "Todas las Estaciones",  href: "/directorio" },
    { label: "CDMX",                  href: "/directorio/ciudad-de-mexico" },
    { label: "Jalisco",               href: "/directorio/jalisco" },
    { label: "Nuevo León",            href: "/directorio/nuevo-leon" },
    { label: "Estado de México",      href: "/directorio/estado-de-mexico" },
  ],
  empresa: [
    { label: "Nosotros",    href: "/nosotros" },
    { label: "Contacto",    href: "/contacto" },
    { label: "Cotizaciones", href: "/cotizar" },
  ],
  legal: [
    { label: "Aviso de privacidad",    href: "/privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
};
