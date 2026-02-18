/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * ESTACIONES DE BOMBEROS - QUERÉTARO
 * ═══════════════════════════════════════════════════════════════════════════════
 * "El Silicon Valley de México" - Hub aeroespacial y automotriz
 * Capital: Santiago de Querétaro | Población: 2,368,467 (2020)
 * Patrimonio: Centro Histórico UNESCO (1996)
 * Industria: Aeroespacial (#1 México), Automotriz, Tecnología
 * ═══════════════════════════════════════════════════════════════════════════════
 */

import type { Estacion } from './types';

// ─── Configuración SEO Ultra-Avanzada ────────────────────────────────────────
export const QUERETARO_SEO = {
  // Meta Principal
  titulo: "Estaciones de Bomberos en Querétaro",
  descripcion: "Directorio completo de las 15 estaciones de bomberos en Querétaro. Cobertura del Centro Histórico UNESCO, zona aeroespacial (Bombardier, Safran), parques industriales y Pueblos Mágicos. Teléfonos de emergencia 24/7.",

  // Meta Tags Avanzados
  metaTags: {
    robots: "index, follow, max-image-preview:large",
    author: "BOMBERO.MX - Directorio Nacional de Bomberos",
    language: "es-MX",
    geo: {
      region: "MX-QUE",
      placename: "Querétaro",
      position: "20.5881;-100.3899"
    }
  },

  // SEO Bilingüe Premium (para ejecutivos e industria internacional)
  bilingue: {
    titulo: "Fire Stations in Querétaro - Mexico's Aerospace Hub",
    descripcion: "Complete directory of 15 fire stations in Querétaro, Mexico. Emergency coverage for aerospace industry (Bombardier, Safran, ITP Aero), automotive plants, UNESCO Historic Centre, and industrial parks. 24/7 HAZMAT response.",
    keywords: [
      "fire department Querétaro",
      "emergency services aerospace industry Mexico",
      "bomberos zona industrial El Marqués",
      "fire station Bombardier Querétaro",
      "HAZMAT response aerospace",
      "emergency Querétaro industrial park",
      "fire rescue wine route Querétaro",
      "bomberos Peña de Bernal"
    ]
  },

  // Keywords SEO Exhaustivos
  keywords: {
    principales: [
      "bomberos Querétaro",
      "estaciones de bomberos Querétaro",
      "H. Cuerpo de Bomberos Querétaro",
      "teléfono bomberos Querétaro",
      "emergencias Querétaro 911"
    ],
    industriales: [
      "bomberos zona industrial Querétaro",
      "bomberos aeroespacial Querétaro",
      "bomberos El Marqués",
      "bomberos parque industrial Querétaro",
      "HAZMAT aeroespacial",
      "emergencias Bombardier Querétaro",
      "bomberos industria automotriz Querétaro"
    ],
    turisticos: [
      "bomberos Centro Histórico Querétaro UNESCO",
      "bomberos Peña de Bernal",
      "bomberos Tequisquiapan",
      "bomberos Ruta del Vino Querétaro",
      "emergencias viñedos Querétaro"
    ],
    geograficos: [
      "bomberos San Juan del Río",
      "bomberos Corregidora",
      "bomberos Juriquilla",
      "bomberos El Pueblito"
    ]
  },

  // Interlinking Estratégico Multi-nivel
  interlinking: {
    estadosVecinos: [
      {
        estado: "Guanajuato",
        slug: "guanajuato",
        relacion: "Corredor industrial Bajío",
        contexto: "Clúster automotriz compartido",
        prioridad: "alta"
      },
      {
        estado: "San Luis Potosí",
        slug: "san-luis-potosi",
        relacion: "Corredor industrial centro-norte",
        contexto: "Zona automotriz BMW-GM",
        prioridad: "alta"
      },
      {
        estado: "Hidalgo",
        slug: "hidalgo",
        relacion: "Conexión centro del país",
        contexto: "Autopista México-Querétaro",
        prioridad: "media"
      },
      {
        estado: "Estado de México",
        slug: "estado-de-mexico",
        relacion: "Corredor megalopolitano",
        contexto: "Conexión CDMX-Querétaro",
        prioridad: "media"
      },
      {
        estado: "Michoacán",
        slug: "michoacan",
        relacion: "Frontera suroeste",
        contexto: "Zona agrícola y turística",
        prioridad: "baja"
      }
    ],
    productosRelacionados: [
      { producto: "Equipos HAZMAT Nivel A", slug: "/productos/hazmat", contexto: "Industria aeroespacial y química", prioridad: "critica" },
      { producto: "Trajes Aluminizados", slug: "/productos/trajes-aluminizados", contexto: "Fundición y metalmecánica", prioridad: "alta" },
      { producto: "Equipos SCBA", slug: "/productos/scba", contexto: "Espacios confinados industriales", prioridad: "alta" },
      { producto: "Detectores Multigas", slug: "/productos/detectores", contexto: "Monitoreo atmosférico industrial", prioridad: "alta" },
      { producto: "Trajes Estructurales NFPA", slug: "/productos/trajes-para-bomberos", contexto: "Combate incendios", prioridad: "media" },
      { producto: "Herramientas Rescate Vehicular", slug: "/productos/herramientas-rescate", contexto: "Accidentes autopista", prioridad: "media" },
      { producto: "Cotización Corporativa", slug: "/cotizar", contexto: "Equipamiento completo", prioridad: "alta" }
    ],
    paginasInternas: [
      { titulo: "Directorio Nacional", slug: "/directorio", contexto: "32 estados" },
      { titulo: "Productos HAZMAT", slug: "/productos/hazmat", contexto: "Materiales peligrosos" },
      { titulo: "Sobre Nosotros", slug: "/nosotros", contexto: "BOMBERO.MX" }
    ]
  },

  // Open Graph y Social
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "BOMBERO.MX",
    image: "/images/og-queretaro-bomberos.jpg"
  },

  // Schema.org Avanzado
  schema: {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "H. Cuerpo de Bomberos de Querétaro",
    "alternateName": ["Bomberos Querétaro", "Querétaro Fire Department"],
    "areaServed": {
      "@type": "State",
      "name": "Querétaro",
      "containedInPlace": { "@type": "Country", "name": "México" }
    },
    "serviceType": ["Emergency Services", "Fire Fighting", "HAZMAT Response", "Technical Rescue"]
  }
};

// ─── Zonas Geográficas Detalladas ────────────────────────────────────────────
export const ZONAS_QUERETARO = {
  centroHistorico: {
    nombre: "Centro Histórico",
    descripcion: "Patrimonio de la Humanidad UNESCO desde 1996",
    municipios: ["Querétaro Centro", "Santiago de Querétaro"],
    caracteristicas: ["UNESCO 1996", "Acueducto colonial", "Templos históricos", "Turismo cultural"],
    poblacion: "350,000+",
    riesgosPrincipales: ["Incendios estructurales", "Patrimonio histórico", "Eventos masivos"],
    color: "#7c3aed"
  },
  zonaIndustrialNorte: {
    nombre: "Zona Industrial Norte",
    descripcion: "Clúster aeroespacial más importante de México",
    municipios: ["El Marqués", "Colón", "Parque Aeroespacial"],
    caracteristicas: ["Bombardier", "Safran", "ITP Aero", "200+ empresas aeroespaciales"],
    empleos: "40,000+",
    riesgosPrincipales: ["HAZMAT aeroespacial", "Materiales compuestos", "Combustibles aviación"],
    color: "#0ea5e9"
  },
  zonaIndustrialSur: {
    nombre: "Zona Industrial Sur",
    descripcion: "Parques industriales automotrices y manufactura",
    municipios: ["San Juan del Río", "Pedro Escobedo"],
    caracteristicas: ["Mabe", "Kellogg's", "Tremec", "Automotriz tier 1"],
    empleos: "60,000+",
    riesgosPrincipales: ["Incendios industriales", "Químicos", "Rescate técnico"],
    color: "#dc2626"
  },
  corregidora: {
    nombre: "Corregidora y Juriquilla",
    descripcion: "Zona residencial premium y tecnológica",
    municipios: ["Corregidora", "Juriquilla", "El Pueblito"],
    caracteristicas: ["Parques tecnológicos", "Universidades", "Residencial AAA", "Campus UNAM"],
    poblacion: "250,000+",
    riesgosPrincipales: ["Incendios residenciales", "Emergencias médicas", "Plazas comerciales"],
    color: "#16a34a"
  },
  sierrGorda: {
    nombre: "Sierra Gorda",
    descripcion: "Reserva de la Biósfera y misiones franciscanas",
    municipios: ["Jalpan de Serra", "Pinal de Amoles", "Arroyo Seco", "Landa de Matamoros"],
    caracteristicas: ["Reserva Biósfera", "Misiones UNESCO", "Pueblo Mágico", "Ecoturismo"],
    extension: "383,567 ha protegidas",
    riesgosPrincipales: ["Incendios forestales", "Rescate montaña", "Comunidades aisladas"],
    color: "#059669"
  },
  rutaVino: {
    nombre: "Ruta del Vino y Queso",
    descripcion: "Zona vitivinícola y turismo enológico",
    municipios: ["Tequisquiapan", "Ezequiel Montes", "Bernal"],
    caracteristicas: ["30+ viñedos", "Pueblos Mágicos", "Turismo enológico", "Peña de Bernal"],
    visitantes: "2,000,000+ anuales",
    riesgosPrincipales: ["Eventos masivos", "Rescate Peña Bernal", "Emergencias turísticas"],
    color: "#9333ea"
  }
};

// ─── Industria Aeroespacial Detallada ────────────────────────────────────────
export const INDUSTRIA_QUERETARO = {
  aeroespacial: {
    descripcion: "Querétaro es el hub aeroespacial #1 de México y Top 10 mundial",
    estadisticas: {
      empresas: "200+",
      empleos: "40,000+",
      exportaciones: "$3,000 millones USD anuales",
      crecimiento: "12% anual"
    },
    empresasPrincipales: [
      {
        nombre: "Bombardier Aerospace",
        ubicacion: "Parque Aeroespacial Querétaro",
        empleados: 2000,
        actividad: "Manufactura de componentes estructurales",
        riesgo: "Materiales compuestos, resinas, HAZMAT Nivel B"
      },
      {
        nombre: "Safran Aircraft Engines",
        ubicacion: "El Marqués",
        empleados: 1800,
        actividad: "Motores aeronáuticos",
        riesgo: "Combustibles aviación, aleaciones especiales"
      },
      {
        nombre: "ITP Aero",
        ubicacion: "Parque Industrial Querétaro",
        empleados: 1200,
        actividad: "Turbinas y componentes",
        riesgo: "Metales especiales, tratamientos térmicos"
      },
      {
        nombre: "Airbus Helicopters",
        ubicacion: "Aeropuerto Internacional",
        empleados: 800,
        actividad: "Ensamble y MRO helicópteros",
        riesgo: "Combustibles, hidráulicos, composites"
      }
    ],
    certificaciones: ["AS9100", "NADCAP", "ISO 14001", "ITAR compliance"]
  },
  automotriz: {
    descripcion: "Cluster automotriz con proveedores tier 1 y tier 2",
    empresas: [
      { nombre: "Tremec", actividad: "Transmisiones", empleados: 3500 },
      { nombre: "Mabe", actividad: "Electrodomésticos", empleados: 8000 },
      { nombre: "Kellogg's", actividad: "Alimentos", empleados: 2500 },
      { nombre: "Brembo", actividad: "Frenos", empleados: 1500 }
    ]
  },
  tecnologia: {
    descripcion: "Hub tecnológico - 'Silicon Valley de México'",
    parques: ["Parque Tecnológico Querétaro", "CIATEQ", "CIDESI", "Campus UNAM Juriquilla"],
    empresas: ["Samsung", "Continental", "Siemens", "HP", "Dell"]
  }
};

// ─── Patrimonio UNESCO y Turismo ─────────────────────────────────────────────
export const TURISMO_QUERETARO = {
  patrimonioUnesco: [
    {
      sitio: "Centro Histórico de Querétaro",
      declaracion: 1996,
      descripcion: "Arquitectura barroca, Acueducto de 74 arcos",
      visitantes: "3,000,000+ anuales"
    },
    {
      sitio: "Misiones Franciscanas de la Sierra Gorda",
      declaracion: 2003,
      descripcion: "5 misiones del siglo XVIII",
      visitantes: "200,000+ anuales"
    }
  ],
  pueblosMagicos: [
    {
      nombre: "Bernal",
      designacion: 2005,
      atractivo: "Peña de Bernal - 3er monolito más grande del mundo (350m)",
      visitantes: "800,000+ anuales",
      riesgo: "Rescate en altura, escalada"
    },
    {
      nombre: "Tequisquiapan",
      designacion: 2012,
      atractivo: "Centro de la Ruta del Vino y Queso",
      visitantes: "600,000+ anuales",
      riesgo: "Eventos masivos, globos aerostáticos"
    },
    {
      nombre: "Jalpan de Serra",
      designacion: 2010,
      atractivo: "Misión franciscana UNESCO, Sierra Gorda",
      visitantes: "150,000+ anuales",
      riesgo: "Incendios forestales, rescate montaña"
    },
    {
      nombre: "Cadereyta de Montes",
      designacion: 2011,
      atractivo: "Jardín Botánico Regional, zona semiárida",
      visitantes: "100,000+ anuales",
      riesgo: "Incendios matorrales, clima extremo"
    }
  ],
  rutaVino: {
    viñedos: 35,
    queserias: 20,
    visitantesAnuales: "500,000+",
    eventos: ["Feria del Queso y Vino", "Vendimia", "Festival del Globo"]
  }
};

// ─── Sistema de Alertas Contextuales Avanzado ────────────────────────────────
export const ALERTAS_QUERETARO = {
  actividadIndustrial: {
    activa: () => true,
    mensaje: "Zona industrial con protocolos HAZMAT activos 24/7",
    tipo: "info",
    icono: "🏭",
    zonas: ["Zona Industrial Norte", "Zona Industrial Sur"],
    prioridad: "alta"
  },
  temporadaIncendios: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes >= 2 && mes <= 5; // Marzo-Junio
    },
    mensaje: "Alto riesgo de incendios forestales en Sierra Gorda",
    tipo: "danger",
    icono: "🔥",
    zonas: ["Sierra Gorda"],
    prioridad: "critica"
  },
  eventosMasivos: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes === 8 || mes === 9 || mes === 10; // Sep-Nov (Vendimia, Globos)
    },
    mensaje: "Temporada de eventos masivos - Festival del Globo y Vendimia",
    tipo: "info",
    icono: "🎈",
    zonas: ["Ruta del Vino y Queso"],
    prioridad: "media"
  },
  rescatePena: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes === 2; // Marzo - Equinoccio
    },
    mensaje: "Alto flujo turístico en Peña de Bernal por equinoccio de primavera",
    tipo: "warning",
    icono: "⛰️",
    zonas: ["Ruta del Vino y Queso"],
    prioridad: "alta"
  },
  calidadAire: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes >= 11 || mes <= 1; // Dic-Feb (inversiones térmicas)
    },
    mensaje: "Temporada de inversiones térmicas - Monitoreo de calidad del aire",
    tipo: "info",
    icono: "🌫️",
    zonas: ["Centro Histórico", "Zona Industrial Norte"],
    prioridad: "baja"
  }
};

// ─── FAQ Exhaustivas para Rich Snippets ──────────────────────────────────────
export const FAQ_QUERETARO = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en Querétaro?",
    respuesta: "El número de emergencias en Querétaro es el 911 nacional. La Central de Bomberos de Querétaro atiende en (442) 212-3939. Para emergencias industriales en El Marqués: (442) 221-7800. En San Juan del Río: (427) 272-0066."
  },
  {
    pregunta: "¿Los bomberos de Querétaro tienen capacidad HAZMAT para la industria aeroespacial?",
    respuesta: "Sí, Querétaro cuenta con 2 estaciones especializadas HAZMAT (El Marqués y Parque Aeroespacial) con capacidad Nivel A para atención de emergencias en las plantas de Bombardier, Safran, ITP Aero y las 200+ empresas del clúster aeroespacial. Personal certificado en materiales compuestos, combustibles de aviación y químicos industriales."
  },
  {
    pregunta: "¿Hay bomberos especializados para rescate en la Peña de Bernal?",
    respuesta: "Sí, la estación de Bernal-Ezequiel Montes cuenta con equipo y personal especializado en rescate vertical para la Peña de Bernal (350m de altura). Coordinación con Protección Civil para emergencias de escaladores y turistas en el tercer monolito más grande del mundo."
  },
  {
    pregunta: "¿Los bomberos cubren la Ruta del Vino y Queso?",
    respuesta: "Sí, las estaciones de Tequisquiapan, Ezequiel Montes y Bernal cubren toda la Ruta del Vino y Queso. Atención de emergencias en los 35 viñedos, queserías, y eventos masivos como la Feria del Queso y Vino y el Festival Internacional del Globo."
  },
  {
    pregunta: "¿Qué cobertura tienen los bomberos en el Centro Histórico UNESCO?",
    respuesta: "La Estación Central de Querétaro cubre todo el Centro Histórico declarado Patrimonio UNESCO en 1996. Personal capacitado en protección de patrimonio histórico, con protocolos especiales para el Acueducto, templos coloniales y edificios históricos."
  },
  {
    pregunta: "¿Hay bomberos en la Sierra Gorda de Querétaro?",
    respuesta: "Sí, la estación de Jalpan de Serra cubre la Reserva de la Biósfera Sierra Gorda (383,567 hectáreas) y las 5 Misiones Franciscanas UNESCO. Especializada en incendios forestales, rescate en montaña y atención de comunidades aisladas."
  },
  {
    pregunta: "¿Los bomberos atienden emergencias en la autopista México-Querétaro?",
    respuesta: "Sí, las estaciones de San Juan del Río y El Marqués cubren los tramos de la autopista 57D y 45D. Equipos de rescate vehicular pesado para atención de accidentes, volcaduras y emergencias con materiales peligrosos en tránsito."
  },
  {
    pregunta: "¿Qué capacidad tienen los bomberos para emergencias en parques tecnológicos?",
    respuesta: "Las estaciones de Juriquilla y Corregidora cubren los parques tecnológicos donde operan Samsung, Continental, HP y centros de investigación como CIATEQ, CIDESI y Campus UNAM. Atención de emergencias eléctricas, data centers y laboratorios."
  }
];

// ─── Infraestructura Crítica ─────────────────────────────────────────────────
export const INFRAESTRUCTURA_QUERETARO = {
  aeropuerto: {
    nombre: "Aeropuerto Internacional de Querétaro",
    codigo: "QRO",
    pasajeros: "1,800,000 anuales",
    operaciones: "Comercial + Carga + MRO aeronáutico",
    riesgo: "Emergencias aeronáuticas, combustibles, HAZMAT"
  },
  autopistas: [
    {
      nombre: "Autopista México-Querétaro (57D)",
      trafico: "100,000+ vehículos/día",
      longitud: "210 km",
      riesgo: "Muy alto - más transitada del país"
    },
    {
      nombre: "Autopista Querétaro-Irapuato (45D)",
      trafico: "40,000+ vehículos/día",
      longitud: "93 km",
      riesgo: "Alto - corredor industrial Bajío"
    },
    {
      nombre: "Autopista Querétaro-San Luis Potosí",
      trafico: "25,000+ vehículos/día",
      longitud: "198 km",
      riesgo: "Alto - materiales peligrosos"
    }
  ],
  hospitales: [
    { nombre: "Hospital General de Querétaro", tipo: "Público", nivel: "Tercer nivel", camas: 300 },
    { nombre: "Hospital Ángeles Querétaro", tipo: "Privado", nivel: "Alta especialidad" },
    { nombre: "Hospital San José de Querétaro", tipo: "Privado", especialidad: "Trauma" },
    { nombre: "IMSS HGZ No. 1", tipo: "Público", camas: 250 }
  ],
  parquesIndustriales: [
    { nombre: "Parque Aeroespacial Querétaro", empresas: 35, empleos: 8000 },
    { nombre: "Parque Industrial El Marqués", empresas: 120, empleos: 25000 },
    { nombre: "Parque Industrial Querétaro", empresas: 85, empleos: 18000 },
    { nombre: "Parque Industrial Finsa", empresas: 60, empleos: 12000 },
    { nombre: "Parque Industrial San Juan del Río", empresas: 95, empleos: 22000 }
  ]
};

// ─── Estaciones de Bomberos ──────────────────────────────────────────────────
export const estacionesQueretaro: Estacion[] = [
  // ═══ CENTRO HISTÓRICO Y ZONA METROPOLITANA ═══
  {
    nombre: "Estación Central Querétaro",
    slug: "estacion-central-queretaro",
    direccion: "Av. Constituyentes Ote. 75, Centro Histórico, Santiago de Querétaro, Qro.",
    coordenadas: { lat: 20.5881, lng: -100.3899 },
    telefono: "(442) 212-3939",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Atención pre-hospitalaria avanzada",
      "Rescate vehicular",
      "Rescate en altura",
      "Control de fugas de gas",
      "Protección patrimonio UNESCO",
      "Coordinación estatal emergencias",
      "Capacitación ciudadana"
    ],
    equipamiento: [
      "4 Autobombas",
      "1 Escalera telescópica 42m",
      "2 Unidades de rescate pesado",
      "3 Ambulancias SVAA",
      "1 Unidad de mando móvil",
      "Equipo rescate altura certificado",
      "Equipo protección patrimonio"
    ],
    personal: 95,
    copiasActa: true,
    zona: "Centro Histórico",
    municipiosCubiertos: ["Santiago de Querétaro Centro", "Barrios históricos", "Zona de monumentos"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de Querétaro. Cobertura del Centro Histórico declarado Patrimonio de la Humanidad UNESCO en 1996, incluyendo el icónico Acueducto de 74 arcos, templos barrocos y edificios coloniales. Centro de despacho y coordinación estatal.",
    tiempoRespuesta: "4-6 minutos zona centro",
    sitioWeb: "https://queretaro.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosQueretaro",
    caracteristicasEspeciales: ["Centro Histórico UNESCO 1996", "Acueducto 74 arcos", "Coordinación estatal", "Escalera 42m"]
  },
  {
    nombre: "Estación de Bomberos Querétaro Norte",
    slug: "estacion-bomberos-queretaro-norte",
    direccion: "Blvd. Bernardo Quintana 500, Col. Desarrollo San Pablo, Querétaro, Qro.",
    coordenadas: { lat: 20.6234, lng: -100.4012 },
    telefono: "(442) 215-8080",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias plazas comerciales",
      "Control de fugas de gas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 28,
    copiasActa: true,
    zona: "Centro Histórico",
    municipiosCubiertos: ["Querétaro Norte", "San Pablo", "Cimatario", "Zona comercial norte"],
    descripcion: "Cobertura de la zona norte de la ciudad, incluyendo desarrollos residenciales de alta densidad, plazas comerciales (Antea, Paseo Querétaro) y acceso a la autopista México-Querétaro.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Plazas comerciales", "Zona residencial", "Acceso autopista 57D"]
  },
  {
    nombre: "Estación de Bomberos Querétaro Sur",
    slug: "estacion-bomberos-queretaro-sur",
    direccion: "Av. 5 de Febrero 1200, Col. Las Américas, Querétaro, Qro.",
    coordenadas: { lat: 20.5567, lng: -100.4234 },
    telefono: "(442) 216-4040",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias industriales básicas",
      "Apoyo zona comercial"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Centro Histórico",
    municipiosCubiertos: ["Querétaro Sur", "Las Américas", "Plaza del Sol"],
    descripcion: "Cobertura de la zona sur de la capital, incluyendo zona comercial de 5 de Febrero, acceso a carretera a San Juan del Río y apoyo a zona industrial básica.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona comercial", "Acceso carretera 57"]
  },

  // ═══ ZONA INDUSTRIAL NORTE - AEROESPACIAL ═══
  {
    nombre: "Estación de Bomberos HAZMAT El Marqués",
    slug: "estacion-bomberos-hazmat-marques",
    direccion: "Av. Epigmenio González km 8.5, Parque Industrial El Marqués, El Marqués, Qro.",
    coordenadas: { lat: 20.6456, lng: -100.3234 },
    telefono: "(442) 221-7800",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT Nivel A",
      "Emergencias materiales compuestos",
      "Derrames químicos industriales",
      "Rescate en espacios confinados",
      "Emergencias aeroespaciales",
      "Atención pre-hospitalaria industrial",
      "Descontaminación masiva"
    ],
    equipamiento: [
      "3 Autobombas industriales",
      "1 Unidad HAZMAT completa Nivel A",
      "1 Unidad espuma AFFF/AR-AFFF",
      "1 Unidad descontaminación",
      "3 Ambulancias SVAA",
      "Trajes encapsulados Nivel A",
      "Detectores multigas portátiles",
      "Equipo espacios confinados",
      "Ducha descontaminación masiva"
    ],
    personal: 55,
    copiasActa: false,
    zona: "Zona Industrial Norte",
    municipiosCubiertos: ["El Marqués", "Parque Industrial El Marqués", "Parque Aeroespacial", "FINSA"],
    descripcion: "Estación especializada HAZMAT para el clúster aeroespacial más importante de México. Cobertura de Bombardier, Safran, ITP Aero y 200+ empresas aeroespaciales. Capacidad Nivel A para materiales compuestos, resinas epóxicas, combustibles de aviación y químicos especializados de la industria aeronáutica.",
    tiempoRespuesta: "3-5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel A", "Clúster aeroespacial", "Bombardier", "Safran", "Materiales compuestos"]
  },
  {
    nombre: "Estación de Bomberos Parque Aeroespacial",
    slug: "estacion-bomberos-parque-aeroespacial",
    direccion: "Carretera Estatal 200 km 2, Parque Aeroespacial Querétaro, Colón, Qro.",
    coordenadas: { lat: 20.6789, lng: -100.2987 },
    telefono: "(442) 221-9500",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios aeronáuticos",
      "Respuesta HAZMAT aeroespacial",
      "Emergencias materiales compuestos",
      "Emergencias combustibles aviación",
      "Rescate técnico especializado",
      "Atención pre-hospitalaria"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT",
      "1 Vehículo ARFF apoyo",
      "2 Ambulancias",
      "Equipo materiales compuestos",
      "Detectores VOC"
    ],
    personal: 35,
    copiasActa: false,
    zona: "Zona Industrial Norte",
    municipiosCubiertos: ["Parque Aeroespacial Querétaro", "Zona MRO", "Colón Industrial"],
    descripcion: "Estación dedicada al Parque Aeroespacial Querétaro, concentración de empresas de manufactura y MRO (Mantenimiento, Reparación y Overhaul) aeronáutico. Especializada en emergencias con materiales compuestos (fibra de carbono, Kevlar), resinas y combustibles de aviación.",
    tiempoRespuesta: "2-4 minutos parque aeroespacial",
    caracteristicasEspeciales: ["Parque Aeroespacial", "MRO aeronáutico", "Materiales compuestos", "ITP Aero", "Airbus Helicopters"]
  },

  // ═══ CORREGIDORA Y JURIQUILLA ═══
  {
    nombre: "Estación de Bomberos Corregidora",
    slug: "estacion-bomberos-corregidora",
    direccion: "Av. Constitución 500, El Pueblito, Corregidora, Qro.",
    coordenadas: { lat: 20.5234, lng: -100.4567 },
    telefono: "(442) 225-6060",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias residenciales",
      "Control de enjambres",
      "Rescate de personas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Corregidora y Juriquilla",
    municipiosCubiertos: ["Corregidora", "El Pueblito", "Candiles", "Real de Juriquilla Sur"],
    descripcion: "Cobertura del municipio de Corregidora, zona residencial de alto crecimiento. Atención de fraccionamientos residenciales, plazas comerciales y zona histórica de El Pueblito.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona residencial premium", "El Pueblito histórico", "Alto crecimiento poblacional"]
  },
  {
    nombre: "Estación de Bomberos Juriquilla",
    slug: "estacion-bomberos-juriquilla",
    direccion: "Blvd. Juriquilla 1000, Juriquilla, Querétaro, Qro.",
    coordenadas: { lat: 20.7012, lng: -100.4478 },
    telefono: "(442) 238-5050",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias tecnológicas",
      "Atención pre-hospitalaria",
      "Emergencias laboratorios",
      "Rescate urbano"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo emergencias eléctricas"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Corregidora y Juriquilla",
    municipiosCubiertos: ["Juriquilla", "Campus UNAM", "Parque Tecnológico", "Santa Fe Juriquilla"],
    descripcion: "Cobertura de Juriquilla, zona tecnológica y universitaria de Querétaro. Atención de emergencias en Campus UNAM, CIATEQ, CIDESI, empresas de tecnología y fraccionamientos residenciales AAA.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Campus UNAM", "Parques tecnológicos", "CIATEQ", "CIDESI", "Residencial AAA"]
  },

  // ═══ ZONA INDUSTRIAL SUR - SAN JUAN DEL RÍO ═══
  {
    nombre: "Estación Central San Juan del Río",
    slug: "estacion-central-san-juan-rio",
    direccion: "Av. Juárez Poniente 100, Centro, San Juan del Río, Qro.",
    coordenadas: { lat: 20.3867, lng: -99.9956 },
    telefono: "(427) 272-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular autopista",
      "Atención pre-hospitalaria",
      "Emergencias industriales",
      "HAZMAT básico",
      "Rescate urbano"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Unidad rescate carretero",
      "1 Unidad HAZMAT básica",
      "2 Ambulancias"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Industrial Sur",
    municipiosCubiertos: ["San Juan del Río Centro", "Zona Industrial SJR", "Autopista 57D tramo sur"],
    descripcion: "Estación principal de San Juan del Río, segunda ciudad del estado. Cobertura de la zona industrial (Mabe, Kellogg's, Tremec), centro histórico y tramo sur de la autopista México-Querétaro. Segunda estación con mayor capacidad del estado.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Segunda ciudad Querétaro", "Zona industrial", "Mabe", "Kellogg's", "Autopista 57D"]
  },
  {
    nombre: "Estación de Bomberos Pedro Escobedo",
    slug: "estacion-bomberos-pedro-escobedo",
    direccion: "Calle Hidalgo 50, Centro, Pedro Escobedo, Qro.",
    coordenadas: { lat: 20.4956, lng: -100.1434 },
    telefono: "(442) 276-0044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas",
      "Apoyo industrial"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Zona Industrial Sur",
    municipiosCubiertos: ["Pedro Escobedo", "La D", "Zona agrícola"],
    descripcion: "Cobertura de Pedro Escobedo, zona agrícola e industrial. Apoyo a la zona industrial sur y atención de emergencias en la carretera 45D Querétaro-Celaya.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Zona agrícola", "Carretera 45D", "Apoyo industrial sur"]
  },

  // ═══ RUTA DEL VINO Y QUESO ═══
  {
    nombre: "Estación de Bomberos Tequisquiapan",
    slug: "estacion-bomberos-tequisquiapan",
    direccion: "Calle Morelos 25, Centro, Tequisquiapan, Qro.",
    coordenadas: { lat: 20.5189, lng: -99.8911 },
    telefono: "(414) 273-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias turísticas",
      "Atención pre-hospitalaria",
      "Emergencias viñedos",
      "Eventos masivos",
      "Rescate globos aerostáticos"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo eventos masivos"
    ],
    personal: 20,
    copiasActa: true,
    zona: "Ruta del Vino y Queso",
    municipiosCubiertos: ["Tequisquiapan", "Viñedos zona", "Ruta del Vino"],
    descripcion: "Cobertura del Pueblo Mágico de Tequisquiapan, corazón de la Ruta del Vino y Queso de Querétaro. Atención de emergencias en los 35 viñedos, queserías, eventos masivos (Feria del Queso y Vino, Festival del Globo) y turismo.",
    tiempoRespuesta: "5-10 minutos",
    facebook: "https://facebook.com/BomberosTequisquiapan",
    caracteristicasEspeciales: ["Pueblo Mágico 2012", "Ruta del Vino", "Festival del Globo", "Feria Queso y Vino", "35 viñedos"]
  },
  {
    nombre: "Estación de Bomberos Bernal",
    slug: "estacion-bomberos-bernal",
    direccion: "Calle Principal s/n, Bernal, Ezequiel Montes, Qro.",
    coordenadas: { lat: 20.7456, lng: -99.9412 },
    telefono: "(441) 277-0055",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vertical Peña de Bernal",
      "Rescate de escaladores",
      "Atención pre-hospitalaria",
      "Emergencias turísticas",
      "Búsqueda y rescate"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate vertical",
      "1 Ambulancia 4x4",
      "Equipo rescate altura completo",
      "Cuerdas y arneses certificados"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Ruta del Vino y Queso",
    municipiosCubiertos: ["Bernal", "Ezequiel Montes", "Base Peña de Bernal"],
    descripcion: "Estación especializada en rescate vertical para la Peña de Bernal, el tercer monolito más grande del mundo (350m de altura). Atención de emergencias de escaladores, turistas y eventos del equinoccio de primavera (500,000+ visitantes). Cobertura del Pueblo Mágico más visitado de Querétaro.",
    tiempoRespuesta: "5-15 minutos (incluye acceso a Peña)",
    caracteristicasEspeciales: ["Peña de Bernal 350m", "Rescate vertical", "Pueblo Mágico 2005", "Equinoccio primavera", "800,000 visitantes/año"]
  },

  // ═══ SIERRA GORDA ═══
  {
    nombre: "Estación de Bomberos Jalpan de Serra",
    slug: "estacion-bomberos-jalpan-serra",
    direccion: "Calle Fray Junípero Serra 10, Centro, Jalpan de Serra, Qro.",
    coordenadas: { lat: 21.2178, lng: -99.4722 },
    telefono: "(441) 296-0077",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios forestales",
      "Rescate en montaña",
      "Protección Misiones UNESCO",
      "Búsqueda y rescate",
      "Atención pre-hospitalaria",
      "Apoyo comunidades aisladas"
    ],
    equipamiento: [
      "1 Autobomba forestal",
      "1 Unidad rescate montaña 4x4",
      "1 Ambulancia 4x4",
      "Equipo forestal completo",
      "Equipo rescate técnico"
    ],
    personal: 20,
    copiasActa: true,
    zona: "Sierra Gorda",
    municipiosCubiertos: ["Jalpan de Serra", "Misiones Franciscanas", "Reserva Biósfera Sierra Gorda"],
    descripcion: "Estación especializada en incendios forestales y rescate de montaña para la Reserva de la Biósfera Sierra Gorda (383,567 hectáreas protegidas). Cobertura de las 5 Misiones Franciscanas declaradas Patrimonio UNESCO en 2003 y el Pueblo Mágico de Jalpan.",
    tiempoRespuesta: "10-30 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Reserva Biósfera", "Misiones UNESCO 2003", "Pueblo Mágico 2010", "Incendios forestales", "383,567 ha protegidas"]
  },

  // ═══ AEROPUERTO ═══
  {
    nombre: "Estación de Bomberos Aeropuerto Querétaro",
    slug: "estacion-bomberos-aeropuerto-queretaro",
    direccion: "Aeropuerto Internacional de Querétaro, Carretera Estatal 200, Colón, Qro.",
    coordenadas: { lat: 20.6173, lng: -100.1856 },
    telefono: "(442) 192-5500",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Rescate y extinción aeronáutica (SSEI)",
      "Combate de incendios aeronaves",
      "Rescate de pasajeros",
      "Emergencias pista",
      "Derrames combustible aviación",
      "Emergencias hangares MRO"
    ],
    equipamiento: [
      "3 Vehículos ARFF categoría 8",
      "1 Autobomba apoyo",
      "Espuma AFFF 6%",
      "Polvo químico seco",
      "Escaleras aeronáuticas",
      "Equipo rescate aeronáutico"
    ],
    personal: 32,
    copiasActa: false,
    zona: "Zona Industrial Norte",
    municipiosCubiertos: ["Aeropuerto QRO", "Hangares MRO", "Zona de carga"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Querétaro. Categoría 8 OACI con capacidad para aeronaves de fuselaje ancho. Cobertura adicional de hangares MRO de Airbus Helicopters y empresas de mantenimiento aeronáutico.",
    tiempoRespuesta: "3 minutos cualquier punto de pista (estándar OACI)",
    caracteristicasEspeciales: ["SSEI Categoría 8 OACI", "1.8M pasajeros anuales", "MRO aeronáutico", "Airbus Helicopters", "Centro carga aérea"]
  },

  // ═══ CARRETERO ═══
  {
    nombre: "Estación de Bomberos Carretero 57D",
    slug: "estacion-bomberos-carretero-57d",
    direccion: "Autopista 57D km 175, Caseta Palmillas, El Marqués, Qro.",
    coordenadas: { lat: 20.5912, lng: -100.2234 },
    telefono: "(442) 221-5757",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Rescate carretero especializado",
      "Atención accidentes múltiples",
      "HAZMAT tránsito",
      "Volcaduras tráileres",
      "Atención pre-hospitalaria carretera",
      "Derrames en autopista"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate carretero pesado",
      "1 Unidad HAZMAT tránsito",
      "2 Ambulancias SVAA",
      "Herramienta hidráulica pesada",
      "Equipo estabilización vehicular"
    ],
    personal: 25,
    copiasActa: false,
    zona: "Zona Industrial Norte",
    municipiosCubiertos: ["Autopista 57D km 150-200", "Caseta Palmillas", "Enlace autopistas"],
    descripcion: "Estación dedicada a rescate carretero en la autopista México-Querétaro (57D), la más transitada del país con 100,000+ vehículos diarios. Especializada en accidentes múltiples, volcaduras de tráileres y emergencias con materiales peligrosos en tránsito.",
    tiempoRespuesta: "5-10 minutos tramo asignado",
    caracteristicasEspeciales: ["Autopista más transitada México", "100,000+ vehículos/día", "Rescate carretero pesado", "HAZMAT tránsito"]
  }
];

// ─── Funciones de Utilidad Avanzadas ─────────────────────────────────────────

/**
 * Obtiene estaciones por zona geográfica
 */
export function getEstacionesPorZona(zona: string): Estacion[] {
  return estacionesQueretaro.filter(e => e.zona === zona);
}

/**
 * Obtiene estaciones HAZMAT (industriales)
 */
export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.servicios.some(s => s.toLowerCase().includes("hazmat")) ||
    e.caracteristicasEspeciales?.some(c => c.toLowerCase().includes("hazmat"))
  );
}

/**
 * Obtiene estaciones aeroespaciales
 */
export function getEstacionesAeroespaciales(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.zona === "Zona Industrial Norte" ||
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("aeroespacial") ||
      c.toLowerCase().includes("bombardier") ||
      c.toLowerCase().includes("safran")
    )
  );
}

/**
 * Obtiene estaciones en Pueblos Mágicos
 */
export function getEstacionesPueblosMagicos(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.caracteristicasEspeciales?.some(c => c.toLowerCase().includes("pueblo mágico"))
  );
}

/**
 * Obtiene estaciones UNESCO
 */
export function getEstacionesUNESCO(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("unesco") ||
      c.toLowerCase().includes("misiones")
    )
  );
}

/**
 * Obtiene estaciones de rescate carretero
 */
export function getEstacionesCarreteras(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.servicios?.some(s =>
      s.toLowerCase().includes("carretero") ||
      s.toLowerCase().includes("autopista")
    ) ||
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("autopista") ||
      c.toLowerCase().includes("57d")
    )
  );
}

/**
 * Obtiene estaciones de rescate vertical
 */
export function getEstacionesRescateVertical(): Estacion[] {
  return estacionesQueretaro.filter(e =>
    e.servicios?.some(s => s.toLowerCase().includes("vertical")) ||
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("peña") ||
      c.toLowerCase().includes("bernal")
    )
  );
}

/**
 * Genera schema de estación para SEO
 */
export function generarSchemaEstacion(estacion: Estacion) {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressRegion": "Querétaro",
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": estacion.municipiosCubiertos?.join(", "),
    "serviceType": estacion.servicios
  };
}

/**
 * Genera interlinking completo
 */
export function generarInterlinking(): {
  estados: typeof QUERETARO_SEO.interlinking.estadosVecinos,
  productos: typeof QUERETARO_SEO.interlinking.productosRelacionados,
  paginas: typeof QUERETARO_SEO.interlinking.paginasInternas
} {
  return {
    estados: QUERETARO_SEO.interlinking.estadosVecinos,
    productos: QUERETARO_SEO.interlinking.productosRelacionados,
    paginas: QUERETARO_SEO.interlinking.paginasInternas
  };
}

/**
 * Obtiene alertas activas filtradas por zona y prioridad
 */
export function getAlertasActivas(zona?: string): Array<{
  mensaje: string;
  tipo: string;
  icono: string;
  prioridad: string;
}> {
  const alertasActivas: Array<{ mensaje: string; tipo: string; icono: string; prioridad: string }> = [];

  for (const [, alerta] of Object.entries(ALERTAS_QUERETARO)) {
    if (alerta.activa()) {
      if (!zona || alerta.zonas.includes(zona)) {
        alertasActivas.push({
          mensaje: alerta.mensaje,
          tipo: alerta.tipo,
          icono: alerta.icono,
          prioridad: alerta.prioridad
        });
      }
    }
  }

  // Ordenar por prioridad
  const prioridadOrden = { critica: 0, alta: 1, media: 2, baja: 3 };
  return alertasActivas.sort((a, b) =>
    (prioridadOrden[a.prioridad as keyof typeof prioridadOrden] || 3) -
    (prioridadOrden[b.prioridad as keyof typeof prioridadOrden] || 3)
  );
}

/**
 * Obtiene empresas aeroespaciales para una zona
 */
export function getEmpresasAeroespaciales() {
  return INDUSTRIA_QUERETARO.aeroespacial.empresasPrincipales;
}

/**
 * Obtiene estadísticas del clúster aeroespacial
 */
export function getEstadisticasAeroespaciales() {
  return INDUSTRIA_QUERETARO.aeroespacial.estadisticas;
}

// ─── Export Default ──────────────────────────────────────────────────────────
export default estacionesQueretaro;
