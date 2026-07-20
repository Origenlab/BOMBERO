

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
    description: "Estructurales NFPA 1970, forestales, ARFF y HAZMAT",
    badge: "Más vendido",
    children: [
      { label: "Traje Estructural NFPA 1970", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/" },
      { label: "Traje Forestal NFPA 1950", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/" },
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
      { label: "Casco Estructural NFPA 1970", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/" },
      { label: "Casco Forestal NFPA 1950", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/" },
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
      { label: "Guantes Estructurales NFPA 1970", href: "/productos/guantes-para-bomberos/estructurales/" },
      { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate/" },
      { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/" },
      { label: "Guantes Forestales NFPA 1950", href: "/productos/guantes-para-bomberos/forestales/" },
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

// Categorías secundarias (grid unificado — Equipos Especializados)
export const secondaryCategories: NavItem[] = [
  {
    label: "SCBA — Respiración",
    href: "/productos/scba/",
    icon: "lungs",
    description: "Aparatos autónomos NFPA 1970. MSA y Honeywell.",
    children: [
      { label: "SCBA 30 min NFPA 1970", href: "/productos/scba/" },
      { label: "SCBA 45 min NFPA 1970", href: "/productos/scba/" },
      { label: "Máscara Panorámica + Cilindro", href: "/productos/scba/" },
    ],
  },
  {
    label: "Equipo Forestal",
    href: "/productos/forestales/",
    icon: "forest",
    description: "Certificado NFPA 1950 y CONAFOR.",
    children: [
      { label: "Traje Forestal NFPA 1950", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/" },
      { label: "Casco Forestal NFPA 1950", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/" },
      { label: "Guantes Forestales Nomex®", href: "/productos/guantes-para-bomberos/forestales/" },
      { label: "Bota Forestal Vibram®", href: "/productos/botas-para-bomberos/forestal/" },
    ],
  },
  {
    label: "HAZMAT y CBRN",
    href: "/productos/hazmat/",
    icon: "hazmat",
    description: "Trajes encapsulados Nivel A y B.",
    children: [
      { label: "Traje HAZMAT Nivel A Encapsulado", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a/" },
      { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b/" },
      { label: "Kit Descontaminación Rápida", href: "/productos/hazmat/" },
    ],
  },
  {
    label: "Rescate Vertical",
    href: "/productos/rescate-vertical/",
    icon: "rope",
    description: "Arneses y sistemas NFPA 1983. Petzl y CMC.",
    children: [
      { label: "Arnés de Rescate NFPA 1983", href: "/productos/rescate-vertical/" },
      { label: "Sistema Descenso Controlado", href: "/productos/rescate-vertical/" },
      { label: "Polipasto y Sistemas de Izaje", href: "/productos/rescate-vertical/" },
      { label: "Cuerdas y Accesorios", href: "/productos/rescate-vertical/" },
    ],
  },
  {
    label: "Rescate Acuático",
    href: "/productos/rescate-acuatico/",
    icon: "water",
    description: "Swift water, inmersión y salvamento.",
    children: [
      { label: "Traje de Inmersión / Neopreno", href: "/productos/rescate-acuatico/" },
      { label: "Chaleco Salvavidas NFPA", href: "/productos/rescate-acuatico/" },
      { label: "Tabla y Equipo Swift Water", href: "/productos/rescate-acuatico/" },
      { label: "Lancha y Motor de Rescate", href: "/productos/rescate-acuatico/" },
    ],
  },
  {
    label: "Herramientas de Rescate",
    href: "/productos/herramientas-rescate/",
    icon: "tools",
    description: "Jaws of Life® y USAR certificado NFPA 1936.",
    children: [
      { label: "Cizalla Hidráulica de Rescate", href: "/productos/herramientas-rescate/" },
      { label: "Expansor / Separador USAR", href: "/productos/herramientas-rescate/" },
      { label: "Combo Cizalla + Expansor", href: "/productos/herramientas-rescate/" },
      { label: "Herramientas Manuales Rescate", href: "/productos/herramientas-rescate/" },
    ],
  },
  {
    label: "Tecnología y Detección",
    href: "/productos/tecnologia/",
    icon: "camera",
    description: "Cámaras TIC, detectores multigas y drones.",
    children: [
      { label: "Cámara Termográfica TIC", href: "/productos/tecnologia/" },
      { label: "Detector de Gas Multigas", href: "/productos/tecnologia/" },
      { label: "Dron de Reconocimiento", href: "/productos/tecnologia/" },
    ],
  },
  {
    label: "Extintores",
    href: "/productos/extintores/",
    icon: "extinguisher",
    description: "PQS, CO₂, AFFF y Halotron. Certificados NOM-100.",
    children: [
      { label: "Extintor PQS — Polvo Químico", href: "/productos/extintores/" },
      { label: "Extintor CO₂", href: "/productos/extintores/" },
      { label: "Extintor Espuma AFFF", href: "/productos/extintores/" },
      { label: "Extintor Halotron — Limpio", href: "/productos/extintores/" },
    ],
  },
  {
    label: "Equipo Contra Incendios",
    href: "/productos/equipo-contra-incendios/",
    icon: "fire",
    description: "Mangueras, lanzas y gabinetes NOM/NFPA.",
    children: [
      { label: "Manguera contra Incendio NFPA", href: "/productos/equipo-contra-incendios/" },
      { label: "Lanza de Ataque Ajustable", href: "/productos/equipo-contra-incendios/" },
      { label: "Gabinete contra Incendio NOM", href: "/productos/equipo-contra-incendios/" },
      { label: "Hidrante y Accesorios", href: "/productos/equipo-contra-incendios/" },
    ],
  },
  {
    label: "Equipo Médico / EMS",
    href: "/productos/equipo-medico/",
    icon: "medical",
    description: "DEA, camillas y kits de trauma prehospitalario.",
    children: [
      { label: "Camilla de Rescate Plegable", href: "/productos/equipo-medico/" },
      { label: "Desfibrilador DEA Semiautomático", href: "/productos/equipo-medico/" },
      { label: "Kit de Trauma / Bolsa de Emergencia", href: "/productos/equipo-medico/" },
    ],
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
    { label: "Equipo Forestal", href: "/productos/forestales/" },
    { label: "HAZMAT y CBRN", href: "/productos/hazmat/" },
    { label: "Herramientas de Rescate", href: "/productos/herramientas-rescate/" },
    { label: "Rescate Vertical", href: "/productos/rescate-vertical/" },
    { label: "Rescate Acuático", href: "/productos/rescate-acuatico/" },
    { label: "Tecnología y Detección", href: "/productos/tecnologia/" },
    { label: "Extintores", href: "/productos/extintores/" },
    { label: "Equipo Contra Incendios", href: "/productos/equipo-contra-incendios/" },
    { label: "Equipo Médico / EMS", href: "/productos/equipo-medico/" },
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
    { label: "Guía NFPA 1970", href: "/blog/nfpa-1971-guia-completa/" },
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
