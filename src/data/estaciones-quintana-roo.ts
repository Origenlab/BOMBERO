/**
 * ═══════════════════════════════════════════════════════════════════════════════════════════════════════
 * ESTACIONES DE BOMBEROS - QUINTANA ROO
 * ═══════════════════════════════════════════════════════════════════════════════════════════════════════
 * "El Caribe Mexicano" - Destino Turístico #1 de Latinoamérica
 * Capital: Chetumal | Población: 1,857,985 (2020)
 *
 * DATOS CLAVE INDUSTRIA TURÍSTICA:
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────
 * • Aeropuerto Cancún: 25+ millones de pasajeros/año (Top 2 Latinoamérica)
 * • Zona Hotelera Cancún: 30,000+ habitaciones, 150+ resorts
 * • Riviera Maya: 60,000+ habitaciones totales
 * • Puerto Cozumel: 4+ millones de cruceristas/año (Top 3 mundial)
 * • PIB Turístico: $18,000 millones USD/año (35% del PIB estatal)
 * • Empleos Turísticos: 500,000+ directos e indirectos
 *
 * PATRIMONIO Y NATURALEZA:
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────
 * • Reserva Sian Ka'an UNESCO (1987) - 528,000 hectáreas
 * • Gran Arrecife Maya - 2do más grande del mundo (1,000 km)
 * • 6,000+ cenotes registrados
 * • 5 Parques Nacionales y Áreas Protegidas
 *
 * RIESGOS PRINCIPALES:
 * ────────────────────────────────────────────────────────────────────────────────────────────────────────
 * • Temporada de Huracanes: Junio-Noviembre (Categoría 5 históricos)
 * • Rescate Acuático: Playas, cenotes, deportes náuticos
 * • Incendios Hoteleros: Alta ocupación, cocinas industriales
 * • HAZMAT: Combustibles náuticos, químicos hoteleros
 * • Emergencias Masivas: Eventos con 50,000+ asistentes
 * ═══════════════════════════════════════════════════════════════════════════════════════════════════════
 */

import type { Estacion } from './types';

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN SEO ENTERPRISE-LEVEL - BILINGÜE COMPLETO
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const QUINTANA_ROO_SEO = {
  // ─── Meta Principal (Español) ────────────────────────────────────────────────
  titulo: "Estaciones de Bomberos en Quintana Roo",
  descripcion: "Directorio oficial de las 17 estaciones de bomberos en Quintana Roo. Cobertura 24/7 para Cancún, Riviera Maya, Playa del Carmen, Tulum y Cozumel. Rescate acuático, emergencias hoteleras y respuesta a huracanes. Teléfono: 911.",

  // ─── Meta Tags Técnicos ──────────────────────────────────────────────────────
  metaTags: {
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    author: "BOMBERO.MX - Directorio Nacional de Bomberos",
    publisher: "BOMBERO.MX",
    language: "es-MX",
    alternateLanguage: "en-US",
    contentType: "directory",
    category: "Emergency Services",
    geo: {
      region: "MX-ROO",
      placename: "Quintana Roo",
      position: "21.1619;-86.8515",
      ICBM: "21.1619, -86.8515"
    },
    verification: {
      google: "verificacion-google",
      bing: "verificacion-bing"
    }
  },

  // ─── SEO Bilingüe Premium (Turismo Internacional) ────────────────────────────
  bilingue: {
    es: {
      titulo: "Bomberos Quintana Roo - Cancún, Riviera Maya, Playa del Carmen",
      descripcion: "Directorio completo de 17 estaciones de bomberos en Quintana Roo. Cobertura especializada para zona hotelera, aeropuerto internacional, cruceros y áreas turísticas. Rescate acuático certificado. Emergencias 24/7.",
      h1: "Estaciones de Bomberos en Quintana Roo",
      h2: ["Bomberos Cancún Zona Hotelera", "Bomberos Playa del Carmen", "Bomberos Riviera Maya", "Bomberos Cozumel"]
    },
    en: {
      titulo: "Fire Stations in Quintana Roo - Cancun, Riviera Maya Emergency Services",
      descripcion: "Complete directory of 17 fire stations in Quintana Roo, Mexico. 24/7 emergency coverage for Cancun Hotel Zone, Riviera Maya resorts, Playa del Carmen, Tulum, and Cozumel. Water rescue, hotel emergencies, and hurricane response. English-speaking coordination available.",
      h1: "Fire Stations in Quintana Roo, Mexico",
      h2: ["Cancun Hotel Zone Fire Department", "Riviera Maya Emergency Services", "Playa del Carmen Fire Station", "Cozumel Fire & Rescue"],
      callToAction: "For emergencies, call 911. English-speaking operators available 24/7."
    }
  },

  // ─── Keywords SEO Exhaustivos por Segmento ───────────────────────────────────
  keywords: {
    principales: [
      "bomberos Quintana Roo",
      "bomberos Cancún",
      "estaciones de bomberos Cancún",
      "fire department Cancun Mexico",
      "bomberos Riviera Maya",
      "emergency services Cancun",
      "teléfono bomberos Cancún",
      "911 Quintana Roo"
    ],
    turisticos: [
      "bomberos zona hotelera Cancún",
      "fire station Cancun hotel zone",
      "emergency Riviera Maya resort",
      "bomberos Playa del Carmen",
      "fire department Playa del Carmen",
      "bomberos Tulum",
      "emergency services Tulum",
      "bomberos Cozumel",
      "fire rescue Cozumel cruise port"
    ],
    rescateAcuatico: [
      "rescate acuático Cancún",
      "water rescue Cancun",
      "ocean rescue Riviera Maya",
      "cenote rescue Quintana Roo",
      "diving emergency Cozumel",
      "beach rescue Caribbean Mexico",
      "lifeguard Cancun",
      "rescate playas Quintana Roo"
    ],
    hoteleros: [
      "hotel fire emergency Cancun",
      "resort fire department Mexico",
      "hotel safety Riviera Maya",
      "fire prevention resort Cancun",
      "emergency plan hotel Mexico",
      "incendio hotel Cancún",
      "seguridad contra incendios hoteles"
    ],
    aeroportuarios: [
      "bomberos aeropuerto Cancún",
      "fire rescue Cancun airport",
      "SSEI aeropuerto CUN",
      "aircraft rescue Cancun",
      "emergency airport Mexico"
    ],
    cruceros: [
      "bomberos puerto Cozumel",
      "fire emergency cruise port",
      "Cozumel port emergency",
      "cruise ship fire Mexico",
      "terminal cruceros emergencia"
    ],
    huracanes: [
      "hurricane emergency Cancun",
      "emergencia huracán Quintana Roo",
      "storm response Riviera Maya",
      "disaster response Cancun",
      "hurricane shelter Quintana Roo"
    ]
  },

  // ─── Interlinking Estratégico Multi-Nivel con ROI ────────────────────────────
  interlinking: {
    estadosVecinos: [
      {
        estado: "Yucatán",
        slug: "yucatan",
        relacion: "Península de Yucatán - Corredor Turístico",
        contexto: "Chichén Itzá, Mérida, Valladolid",
        prioridad: "critica",
        distanciaKm: 310,
        tiempoViaje: "3.5 horas"
      },
      {
        estado: "Campeche",
        slug: "campeche",
        relacion: "Península de Yucatán - Ruta Maya",
        contexto: "Calakmul, Campeche histórico",
        prioridad: "alta",
        distanciaKm: 450,
        tiempoViaje: "5 horas"
      },
      {
        estado: "Tabasco",
        slug: "tabasco",
        relacion: "Conexión Sureste - Ruta Chiapas",
        contexto: "Palenque, ecoturismo",
        prioridad: "media",
        distanciaKm: 900,
        tiempoViaje: "10 horas"
      }
    ],
    productosRelacionados: [
      {
        producto: "Equipos de Rescate Acuático",
        slug: "/productos/rescate-acuatico",
        contexto: "Playas, cenotes, deportes náuticos",
        prioridad: "critica",
        audiencia: ["bomberos", "hoteles", "parques"],
        roi: "Alto - mercado turístico premium"
      },
      {
        producto: "Trajes de Buceo Profesional",
        slug: "/productos/buceo",
        contexto: "Rescate submarino, cenotes",
        prioridad: "critica",
        audiencia: ["bomberos", "operadores tours"],
        roi: "Alto - 6000+ cenotes"
      },
      {
        producto: "Sistemas de Detección de Incendios",
        slug: "/productos/deteccion-incendios",
        contexto: "Hoteles, resorts, centros comerciales",
        prioridad: "critica",
        audiencia: ["hoteleros", "desarrolladores"],
        roi: "Muy alto - 90,000+ habitaciones"
      },
      {
        producto: "Extintores Certificados",
        slug: "/productos/extintores",
        contexto: "Cocinas industriales, áreas comunes",
        prioridad: "alta",
        audiencia: ["hoteles", "restaurantes"],
        roi: "Alto - volumen masivo"
      },
      {
        producto: "Equipos SCBA",
        slug: "/productos/scba",
        contexto: "Rescate en edificios, humo",
        prioridad: "alta",
        audiencia: ["bomberos", "brigadas hoteleras"],
        roi: "Medio-alto"
      },
      {
        producto: "Chalecos Salvavidas Profesionales",
        slug: "/productos/chalecos-salvavidas",
        contexto: "Operaciones náuticas, rescate",
        prioridad: "alta",
        audiencia: ["hoteles", "operadores tours"],
        roi: "Alto - regulación obligatoria"
      },
      {
        producto: "Sistemas de Alarma Hotelera",
        slug: "/productos/alarmas",
        contexto: "Normativa hotelera internacional",
        prioridad: "alta",
        audiencia: ["hoteleros", "desarrolladores"],
        roi: "Muy alto - cumplimiento"
      },
      {
        producto: "Cotización Corporativa Hotelera",
        slug: "/cotizar",
        contexto: "Equipamiento completo para resorts",
        prioridad: "critica",
        audiencia: ["gerentes hoteles", "compras corporativas"],
        roi: "Muy alto - contratos B2B"
      }
    ],
    paginasInternas: [
      { titulo: "Directorio Nacional", slug: "/directorio", contexto: "32 estados de México" },
      { titulo: "Productos Rescate Acuático", slug: "/productos/rescate-acuatico", contexto: "Equipamiento especializado" },
      { titulo: "Cotización Empresas", slug: "/cotizar", contexto: "Hoteles y resorts" },
      { titulo: "Sobre Nosotros", slug: "/nosotros", contexto: "BOMBERO.MX" }
    ]
  },

  // ─── Open Graph y Social Media Marketing ─────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    siteName: "BOMBERO.MX",
    image: {
      url: "/images/og-quintana-roo-bomberos.jpg",
      width: 1200,
      height: 630,
      alt: "Bomberos Quintana Roo - Cancún, Riviera Maya"
    },
    twitter: {
      card: "summary_large_image",
      site: "@bomberomx",
      creator: "@bomberomx"
    }
  },

  // ─── Schema.org Enterprise-Level ─────────────────────────────────────────────
  schema: {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "H. Cuerpo de Bomberos de Quintana Roo",
    "alternateName": [
      "Bomberos Quintana Roo",
      "Quintana Roo Fire Department",
      "Bomberos Cancún",
      "Cancun Fire Rescue"
    ],
    "description": {
      "es": "Servicio de bomberos del estado de Quintana Roo, México. Cobertura especializada para la zona turística más importante de Latinoamérica.",
      "en": "Fire department of Quintana Roo state, Mexico. Specialized coverage for Latin America's most important tourist destination."
    },
    "areaServed": {
      "@type": "State",
      "name": "Quintana Roo",
      "containedInPlace": { "@type": "Country", "name": "México" }
    },
    "serviceType": [
      "Emergency Fire Services",
      "Water Rescue",
      "Hotel Fire Response",
      "Hurricane Emergency Response",
      "Airport Fire Rescue",
      "Cruise Port Emergency"
    ],
    "availableLanguage": ["Spanish", "English"],
    "knowsAbout": [
      "Water Rescue",
      "Hotel Fire Safety",
      "Hurricane Response",
      "Tourist Emergency Services",
      "Cenote Rescue",
      "Coral Reef Emergency"
    ]
  }
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// DATOS DE LA INDUSTRIA TURÍSTICA - PARA MARKETING Y CONTENIDO
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const INDUSTRIA_TURISTICA_QR = {
  estadisticas: {
    visitantesAnuales: "25,000,000+",
    habitacionesHoteleras: "90,000+",
    cruceristas: "4,500,000+",
    empleosTuristicos: "500,000+",
    pibTuristico: "$18,000 millones USD",
    porcentajePIB: "35%",
    aeropuertoPasajeros: "25,000,000+",
    resorts: "400+",
    restaurantes: "3,000+",
    toursOperadores: "500+"
  },

  zonasHoteleras: [
    {
      nombre: "Zona Hotelera Cancún",
      habitaciones: 30000,
      hoteles: 150,
      longitudKm: 25,
      riesgosPrincipales: ["Incendios cocina", "Evacuación masiva", "Huracanes"],
      cadenasPrincipales: ["Marriott", "Hilton", "Hyatt", "RIU", "Iberostar", "Palace Resorts"]
    },
    {
      nombre: "Riviera Maya Norte",
      habitaciones: 25000,
      hoteles: 100,
      municipios: ["Playa del Carmen", "Puerto Morelos"],
      riesgosPrincipales: ["Incendios forestales", "Rescate cenotes", "Evacuación"]
    },
    {
      nombre: "Riviera Maya Sur",
      habitaciones: 20000,
      hoteles: 80,
      municipios: ["Tulum", "Akumal", "Tankah"],
      riesgosPrincipales: ["Incendios ecológicos", "Rescate acuático", "Áreas remotas"]
    },
    {
      nombre: "Cozumel",
      habitaciones: 8000,
      hoteles: 50,
      cruceristas: "4,500,000/año",
      riesgosPrincipales: ["Emergencias cruceros", "Buceo", "Huracanes isla"]
    }
  ],

  aeropuertos: [
    {
      nombre: "Aeropuerto Internacional de Cancún",
      codigo: "CUN",
      pasajerosAnuales: "25,000,000+",
      ranking: "Top 2 Latinoamérica, Top 20 Mundial",
      terminales: 4,
      aerolineas: 90,
      destinos: 180,
      categoriaOACI: 9,
      riesgosPrincipales: ["Emergencias aeronáuticas", "HAZMAT combustibles", "Evacuación masiva"]
    },
    {
      nombre: "Aeropuerto Internacional de Cozumel",
      codigo: "CZM",
      pasajerosAnuales: "500,000+",
      categoriaOACI: 7,
      riesgosPrincipales: ["Emergencias aeronáuticas", "Isla aislada"]
    },
    {
      nombre: "Aeropuerto Internacional de Chetumal",
      codigo: "CTM",
      pasajerosAnuales: "150,000+",
      categoriaOACI: 6,
      riesgosPrincipales: ["Emergencias aeronáuticas", "Zona fronteriza"]
    }
  ],

  puertos: [
    {
      nombre: "Terminal Marítima Cozumel",
      tipo: "Cruceros",
      cruceristas: "4,500,000/año",
      ranking: "Top 3 Mundial",
      muelles: 3,
      capacidadBarcos: "5 simultáneos",
      riesgosPrincipales: ["Incendio embarcación", "Evacuación masiva", "HAZMAT náutico"]
    },
    {
      nombre: "Terminal Marítima Puerto Juárez",
      tipo: "Ferries",
      pasajerosAnuales: "2,000,000+",
      destino: "Isla Mujeres",
      riesgosPrincipales: ["Emergencias ferry", "Rescate marítimo"]
    },
    {
      nombre: "Terminal Marítima Playa del Carmen",
      tipo: "Ferries",
      pasajerosAnuales: "3,000,000+",
      destino: "Cozumel",
      riesgosPrincipales: ["Emergencias ferry", "Alto tráfico turístico"]
    }
  ],

  parquesNaturales: [
    {
      nombre: "Reserva de la Biósfera Sian Ka'an",
      declaracion: "UNESCO 1987",
      extension: "528,000 hectáreas",
      visitantes: "80,000/año",
      riesgosPrincipales: ["Incendios forestales", "Rescate áreas remotas", "Fauna peligrosa"]
    },
    {
      nombre: "Parque Nacional Arrecifes de Cozumel",
      extension: "11,987 hectáreas marinas",
      visitantes: "500,000/año",
      riesgosPrincipales: ["Emergencias buceo", "Rescate arrecife", "Embarcaciones"]
    },
    {
      nombre: "Parque Nacional Tulum",
      extension: "664 hectáreas",
      visitantes: "2,000,000/año",
      riesgosPrincipales: ["Emergencias médicas turistas", "Incendios", "Evacuación"]
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// ZONAS GEOGRÁFICAS CON PERFILES DE RIESGO DETALLADOS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const ZONAS_QUINTANA_ROO = {
  cancunZonaHotelera: {
    nombre: "Cancún Zona Hotelera",
    nombreEn: "Cancun Hotel Zone",
    descripcion: "Franja turística de 25 km con 150+ resorts y 30,000 habitaciones",
    descripcionEn: "25 km tourist strip with 150+ resorts and 30,000 rooms",
    caracteristicas: ["150+ hoteles 5 estrellas", "Centros comerciales", "Discotecas", "Convenciones"],
    poblacionFlotante: "100,000+ turistas/día",
    riesgosPrincipales: ["Incendios hoteleros", "Evacuación masiva", "Huracanes", "Eventos masivos"],
    tiempoRespuesta: "3-5 minutos",
    color: "#0ea5e9"
  },
  cancunCentro: {
    nombre: "Cancún Centro",
    nombreEn: "Downtown Cancun",
    descripcion: "Ciudad de servicios y residencial con 900,000 habitantes",
    caracteristicas: ["Zona comercial", "Hospitales", "Residencial", "Mercados"],
    poblacion: "900,000+",
    riesgosPrincipales: ["Incendios estructurales", "Emergencias médicas", "Accidentes viales"],
    tiempoRespuesta: "5-8 minutos",
    color: "#6366f1"
  },
  rivieraMayaNorte: {
    nombre: "Riviera Maya Norte",
    nombreEn: "Northern Riviera Maya",
    descripcion: "Playa del Carmen y Puerto Morelos - Corredor turístico premium",
    caracteristicas: ["Playa del Carmen", "Puerto Morelos", "100+ resorts", "5ta Avenida"],
    poblacionFlotante: "80,000+ turistas/día",
    riesgosPrincipales: ["Incendios hoteleros", "Rescate acuático", "Cenotes", "Incendios forestales"],
    tiempoRespuesta: "5-10 minutos",
    color: "#10b981"
  },
  rivieraMayaSur: {
    nombre: "Riviera Maya Sur",
    nombreEn: "Southern Riviera Maya",
    descripcion: "Tulum, Akumal, Tankah - Turismo ecológico y arqueológico",
    caracteristicas: ["Zona Arqueológica Tulum", "Cenotes", "Eco-resorts", "Gran Arrecife Maya"],
    visitantes: "2,000,000+/año zona arqueológica",
    riesgosPrincipales: ["Rescate cenotes", "Incendios selva", "Áreas remotas", "Turismo aventura"],
    tiempoRespuesta: "10-20 minutos",
    color: "#059669"
  },
  cozumel: {
    nombre: "Cozumel",
    nombreEn: "Cozumel Island",
    descripcion: "Isla - Puerto de cruceros #3 mundial y capital del buceo",
    caracteristicas: ["Terminal cruceros", "Arrecifes buceo", "Parque Nacional", "8,000 habitaciones"],
    cruceristas: "4,500,000/año",
    riesgosPrincipales: ["Emergencias cruceros", "Buceo", "Huracanes isla", "Evacuación marítima"],
    tiempoRespuesta: "5-15 minutos",
    color: "#8b5cf6"
  },
  islaMujeres: {
    nombre: "Isla Mujeres",
    nombreEn: "Isla Mujeres",
    descripcion: "Isla turística a 13 km de Cancún",
    caracteristicas: ["Turismo de día", "Buceo tiburón ballena", "Playas pristinas"],
    visitantes: "1,000,000+/año",
    riesgosPrincipales: ["Rescate marítimo", "Huracanes", "Evacuación isla", "Recursos limitados"],
    tiempoRespuesta: "Requiere traslado marítimo",
    color: "#ec4899"
  },
  zonaSelvatica: {
    nombre: "Zona Selvática Interior",
    nombreEn: "Inland Jungle Zone",
    descripcion: "Cenotes, comunidades mayas, reservas naturales",
    caracteristicas: ["6,000+ cenotes", "Comunidades rurales", "Tours aventura", "Reserva Sian Ka'an"],
    riesgosPrincipales: ["Rescate cenotes", "Incendios forestales", "Acceso difícil", "Fauna"],
    tiempoRespuesta: "15-45 minutos (terreno difícil)",
    color: "#16a34a"
  },
  chetumalFrontera: {
    nombre: "Chetumal y Zona Fronteriza",
    nombreEn: "Chetumal Border Zone",
    descripcion: "Capital del estado y frontera con Belice",
    caracteristicas: ["Capital estatal", "Frontera Belice", "Bahía de Chetumal", "Zona Libre"],
    poblacion: "250,000+",
    riesgosPrincipales: ["Incendios estructurales", "Huracanes", "Tráfico fronterizo", "Inundaciones"],
    tiempoRespuesta: "5-10 minutos",
    color: "#f59e0b"
  }
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// SISTEMA DE ALERTAS CONTEXTUALES AVANZADO
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const ALERTAS_QUINTANA_ROO = {
  temporadaHuracanes: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes >= 5 && mes <= 10; // Junio-Noviembre
    },
    mensaje: {
      es: "Temporada de huracanes activa. Siga las instrucciones de Protección Civil.",
      en: "Hurricane season active. Follow Civil Protection instructions."
    },
    tipo: "danger",
    icono: "🌀",
    prioridad: "critica",
    zonas: ["Todas"],
    urlInfo: "https://www.nhc.noaa.gov/",
    acciones: ["Consulte refugios", "Prepare kit de emergencia", "Check shelters", "Prepare emergency kit"]
  },
  temporadaAltaTuristica: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes === 11 || mes === 0 || mes === 2 || mes === 3 || mes === 6 || mes === 7;
      // Dic, Ene, Mar, Abr (Semana Santa), Jul, Ago
    },
    mensaje: {
      es: "Temporada alta turística - Personal reforzado en zonas hoteleras",
      en: "Peak tourist season - Reinforced personnel in hotel zones"
    },
    tipo: "info",
    icono: "🏨",
    prioridad: "alta",
    zonas: ["Cancún Zona Hotelera", "Riviera Maya Norte", "Cozumel"]
  },
  springBreak: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes === 2 || mes === 3; // Marzo-Abril
    },
    mensaje: {
      es: "Temporada Spring Break - Alta concentración de turistas jóvenes",
      en: "Spring Break season - High concentration of young tourists"
    },
    tipo: "warning",
    icono: "🎉",
    prioridad: "alta",
    zonas: ["Cancún Zona Hotelera"]
  },
  temporadaSargaza: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes >= 4 && mes <= 8; // Mayo-Septiembre
    },
    mensaje: {
      es: "Temporada de sargazo - Precaución en actividades acuáticas",
      en: "Sargassum season - Caution during water activities"
    },
    tipo: "info",
    icono: "🌿",
    prioridad: "media",
    zonas: ["Cancún Zona Hotelera", "Riviera Maya Norte", "Riviera Maya Sur"]
  },
  crucerosMasivos: {
    activa: () => {
      const dia = new Date().getDay();
      return dia >= 1 && dia <= 5; // Lunes a Viernes (días de cruceros)
    },
    mensaje: {
      es: "Operación de cruceros activa en Cozumel - Hasta 20,000 visitantes/día",
      en: "Cruise operations active in Cozumel - Up to 20,000 visitors/day"
    },
    tipo: "info",
    icono: "🚢",
    prioridad: "media",
    zonas: ["Cozumel"]
  },
  incendiosForestales: {
    activa: () => {
      const mes = new Date().getMonth();
      return mes >= 2 && mes <= 5; // Marzo-Junio (temporada seca)
    },
    mensaje: {
      es: "Temporada de incendios forestales - Prohibido fuego en áreas naturales",
      en: "Wildfire season - Fire prohibited in natural areas"
    },
    tipo: "warning",
    icono: "🔥",
    prioridad: "alta",
    zonas: ["Zona Selvática Interior", "Riviera Maya Sur"]
  }
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// FAQ EXHAUSTIVAS PARA RICH SNIPPETS - BILINGÜE
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const FAQ_QUINTANA_ROO = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en Cancún?",
    preguntaEn: "What is the fire department phone number in Cancun?",
    respuesta: "El número de emergencias en Cancún y todo Quintana Roo es el 911 nacional. La Central de Bomberos de Cancún atiende en (998) 884-1300. Para emergencias en la Zona Hotelera: (998) 885-2222. En Playa del Carmen: (984) 873-0291. Todos los operadores 911 tienen servicio en español e inglés.",
    respuestaEn: "The emergency number in Cancun and all of Quintana Roo is 911 (national). Cancun Fire Department main line: (998) 884-1300. Hotel Zone emergencies: (998) 885-2222. Playa del Carmen: (984) 873-0291. All 911 operators provide service in Spanish and English.",
    categoria: "contacto"
  },
  {
    pregunta: "¿Los bomberos de Cancún hablan inglés?",
    preguntaEn: "Do Cancun firefighters speak English?",
    respuesta: "Sí, las estaciones de bomberos en zonas turísticas de Quintana Roo cuentan con personal bilingüe. El servicio 911 tiene operadores en español e inglés 24/7. Las estaciones de la Zona Hotelera de Cancún, Playa del Carmen y Cozumel tienen coordinación en inglés para atender emergencias de turistas internacionales.",
    respuestaEn: "Yes, fire stations in tourist zones of Quintana Roo have bilingual personnel. The 911 service has operators in Spanish and English 24/7. Stations in Cancun Hotel Zone, Playa del Carmen, and Cozumel provide English coordination for international tourist emergencies.",
    categoria: "turismo"
  },
  {
    pregunta: "¿Hay bomberos especializados en rescate acuático en Quintana Roo?",
    preguntaEn: "Are there specialized water rescue firefighters in Quintana Roo?",
    respuesta: "Sí, Quintana Roo cuenta con 3 estaciones especializadas en rescate acuático: Cancún Zona Hotelera, Cozumel y Playa del Carmen. El personal está certificado en rescate oceánico, rescate en cenotes (aguas confinadas) y buceo de emergencia. También hay coordinación con la Guardia Costera para emergencias marítimas mayores.",
    respuestaEn: "Yes, Quintana Roo has 3 stations specialized in water rescue: Cancun Hotel Zone, Cozumel, and Playa del Carmen. Personnel are certified in ocean rescue, cenote rescue (confined waters), and emergency diving. There's also coordination with Coast Guard for major maritime emergencies.",
    categoria: "servicios"
  },
  {
    pregunta: "¿Qué hacer en caso de emergencia en un hotel de Cancún?",
    preguntaEn: "What to do in case of emergency at a Cancun hotel?",
    respuesta: "1) Llame al 911 inmediatamente (servicio en inglés disponible). 2) Notifique a la recepción del hotel. 3) Siga las instrucciones del personal de seguridad. 4) Ubique las salidas de emergencia de su habitación. La Estación Bomberos Zona Hotelera tiene tiempo de respuesta de 3-5 minutos para cualquier resort en la franja de 25 km.",
    respuestaEn: "1) Call 911 immediately (English service available). 2) Notify hotel reception. 3) Follow security personnel instructions. 4) Locate emergency exits from your room. Hotel Zone Fire Station has a 3-5 minute response time to any resort in the 25 km strip.",
    categoria: "turismo"
  },
  {
    pregunta: "¿Los bomberos atienden emergencias durante huracanes?",
    preguntaEn: "Do firefighters respond to emergencies during hurricanes?",
    respuesta: "Sí, los bomberos de Quintana Roo tienen protocolo especial para temporada de huracanes (junio-noviembre). Durante la fase de alerta, se activan refugios y se refuerza personal. Durante el impacto, las operaciones se suspenden temporalmente por seguridad. Inmediatamente después del paso del huracán, se inician operaciones de rescate y evaluación de daños.",
    respuestaEn: "Yes, Quintana Roo firefighters have a special hurricane season protocol (June-November). During the alert phase, shelters are activated and personnel reinforced. During impact, operations are temporarily suspended for safety. Immediately after the hurricane passes, rescue and damage assessment operations begin.",
    categoria: "huracanes"
  },
  {
    pregunta: "¿Hay servicio de bomberos en Isla Mujeres y Holbox?",
    preguntaEn: "Is there fire service on Isla Mujeres and Holbox?",
    respuesta: "Isla Mujeres cuenta con una unidad de bomberos con capacidad básica y apoyo de Protección Civil. Para emergencias mayores, se coordina con la estación de Cancún con traslado marítimo. Holbox tiene servicio de Protección Civil municipal; emergencias graves requieren evacuación aérea o marítima a Cancún.",
    respuestaEn: "Isla Mujeres has a fire unit with basic capability and Civil Protection support. For major emergencies, coordination with Cancun station via maritime transfer. Holbox has municipal Civil Protection service; serious emergencies require air or maritime evacuation to Cancun.",
    categoria: "islas"
  },
  {
    pregunta: "¿Los bomberos de Cozumel atienden emergencias de cruceros?",
    preguntaEn: "Do Cozumel firefighters respond to cruise ship emergencies?",
    respuesta: "Sí, la Estación de Bomberos de Cozumel tiene protocolo específico para emergencias en la terminal de cruceros, la más visitada de México con 4.5 millones de pasajeros anuales. Coordinación con autoridades portuarias, personal de los cruceros y Capitanía de Puerto para emergencias a bordo o en muelle.",
    respuestaEn: "Yes, Cozumel Fire Station has specific protocols for cruise terminal emergencies - Mexico's most visited with 4.5 million passengers annually. Coordination with port authorities, cruise personnel, and Harbor Master for onboard or dock emergencies.",
    categoria: "cruceros"
  },
  {
    pregunta: "¿Qué cobertura tienen los bomberos en la Riviera Maya?",
    preguntaEn: "What fire coverage exists in the Riviera Maya?",
    respuesta: "La Riviera Maya cuenta con 4 estaciones: Playa del Carmen Norte, Playa del Carmen Sur, Tulum y Akumal. Cobertura de los 100+ resorts del corredor, zonas arqueológicas (Tulum, Cobá), cenotes y el Gran Arrecife Maya. Personal especializado en rescate acuático, incendios forestales y emergencias turísticas.",
    respuestaEn: "Riviera Maya has 4 stations: Playa del Carmen North, Playa del Carmen South, Tulum, and Akumal. Coverage of 100+ resorts in the corridor, archaeological zones (Tulum, Cobá), cenotes, and the Great Mayan Reef. Personnel specialized in water rescue, forest fires, and tourist emergencies.",
    categoria: "cobertura"
  },
  {
    pregunta: "¿Cómo reportar una emergencia si no hablo español?",
    preguntaEn: "How to report an emergency if I don't speak Spanish?",
    respuesta: "Llame al 911 y diga 'English please'. Todos los operadores 911 de Quintana Roo tienen capacidad de atención en inglés. También puede usar la app 911CDMX (funciona en todo México) que tiene opción en inglés. Los hoteles tienen línea directa a emergencias con personal bilingüe.",
    respuestaEn: "Call 911 and say 'English please'. All 911 operators in Quintana Roo can assist in English. You can also use the 911CDMX app (works throughout Mexico) which has an English option. Hotels have direct emergency lines with bilingual staff.",
    categoria: "turismo"
  },
  {
    pregunta: "¿Los bomberos del aeropuerto de Cancún atienden emergencias de vuelos?",
    preguntaEn: "Do Cancun airport firefighters handle flight emergencies?",
    respuesta: "Sí, el Aeropuerto Internacional de Cancún tiene un Servicio de Salvamento y Extinción de Incendios (SSEI) Categoría 9 OACI, el nivel más alto para aeropuertos comerciales. Capacidad para atender aeronaves de fuselaje ancho (Boeing 787, Airbus A350). Tiempo de respuesta: 3 minutos a cualquier punto de pista según estándar internacional.",
    respuestaEn: "Yes, Cancun International Airport has an Aircraft Rescue and Firefighting Service (ARFF) ICAO Category 9, the highest level for commercial airports. Capability to handle wide-body aircraft (Boeing 787, Airbus A350). Response time: 3 minutes to any runway point per international standard.",
    categoria: "aeropuerto"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// INFRAESTRUCTURA CRÍTICA
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const INFRAESTRUCTURA_QUINTANA_ROO = {
  hospitales: [
    { nombre: "Hospital General de Cancún", tipo: "Público", nivel: "Segundo nivel", camas: 180, ubicacion: "Cancún Centro" },
    { nombre: "Hospital Galenia", tipo: "Privado", nivel: "Alta especialidad", certificacion: "JCI", ubicacion: "Cancún" },
    { nombre: "Hospiten Cancún", tipo: "Privado", nivel: "Alta especialidad", certificacion: "JCI", ubicacion: "Zona Hotelera" },
    { nombre: "Hospital Amerimed Cancún", tipo: "Privado", especialidad: "Turistas", ubicacion: "Zona Hotelera" },
    { nombre: "Hospital Playa del Carmen", tipo: "Público", nivel: "Segundo nivel", ubicacion: "Playa del Carmen" },
    { nombre: "Hospital IMSS Cozumel", tipo: "Público", nivel: "Primer nivel", ubicacion: "Cozumel" },
    { nombre: "Hospital General Chetumal", tipo: "Público", nivel: "Segundo nivel", camas: 150, ubicacion: "Chetumal" }
  ],

  carreteras: [
    {
      nombre: "Carretera 307 (Cancún-Chetumal)",
      trafico: "50,000+ vehículos/día tramo turístico",
      longitud: "380 km",
      caracteristicas: "Principal corredor turístico",
      riesgo: "Muy alto - Accidentes turistas, alta velocidad"
    },
    {
      nombre: "Carretera 180 (Cancún-Mérida)",
      trafico: "30,000+ vehículos/día",
      longitud: "310 km",
      caracteristicas: "Conexión Yucatán",
      riesgo: "Alto - Tráfico pesado, zona selvática"
    },
    {
      nombre: "Carretera 186 (Chetumal-Escárcega)",
      trafico: "5,000+ vehículos/día",
      longitud: "270 km",
      caracteristicas: "Zona fronteriza, selva",
      riesgo: "Medio - Áreas remotas, fauna"
    }
  ],

  centrosConvenciones: [
    {
      nombre: "Cancún ICC",
      capacidad: "20,000+ asistentes",
      eventos: "150+ anuales",
      riesgo: "Evacuación masiva, incendios"
    },
    {
      nombre: "Moon Palace Convention Center",
      capacidad: "10,000+ asistentes",
      eventos: "Corporativos internacionales",
      riesgo: "Emergencias hoteleras"
    }
  ]
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// ESTACIONES DE BOMBEROS - 17 ESTACIONES ULTRA-DETALLADAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

export const estacionesQuintanaRoo: Estacion[] = [
  // ═══ CANCÚN ZONA HOTELERA ═══
  {
    nombre: "Estación de Bomberos Zona Hotelera Cancún",
    slug: "estacion-bomberos-zona-hotelera-cancun",
    direccion: "Blvd. Kukulcán km 12.5, Zona Hotelera, Cancún, Q. Roo",
    coordenadas: { lat: 21.1285, lng: -86.7618 },
    telefono: "(998) 885-2222",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios hoteleros",
      "Rescate acuático oceánico",
      "Rescate en altura (edificios)",
      "Atención pre-hospitalaria bilingüe",
      "Emergencias en eventos masivos",
      "Respuesta huracanes",
      "Evacuación hotelera",
      "Coordinación con seguridad resorts"
    ],
    equipamiento: [
      "3 Autobombas urbanas",
      "1 Escalera telescópica 32m",
      "2 Unidades de rescate acuático",
      "2 Motos acuáticas de rescate",
      "3 Ambulancias SVAA bilingües",
      "1 Unidad de mando móvil",
      "Equipo de buceo recreativo/rescate",
      "Lanchas de rescate",
      "Equipo para huracanes"
    ],
    personal: 85,
    copiasActa: false,
    zona: "Cancún Zona Hotelera",
    municipiosCubiertos: ["Zona Hotelera km 1-25", "Punta Cancún", "Punta Nizuc", "Laguna Nichupté", "150+ resorts"],
    descripcion: "Estación estratégica para la franja hotelera de 25 km con 30,000+ habitaciones. Personal bilingüe certificado en rescate acuático oceánico, emergencias hoteleras y evacuación masiva. Tiempo de respuesta garantizado de 3-5 minutos a cualquier resort. Coordinación permanente con seguridad de las cadenas hoteleras Marriott, Hilton, Hyatt, RIU, Iberostar y Palace Resorts.",
    descripcionEn: "Strategic station for the 25 km hotel strip with 30,000+ rooms. Bilingual personnel certified in ocean water rescue, hotel emergencies, and mass evacuation. Guaranteed 3-5 minute response time to any resort. Permanent coordination with Marriott, Hilton, Hyatt, RIU, Iberostar, and Palace Resorts security teams.",
    tiempoRespuesta: "3-5 minutos cualquier punto zona hotelera",
    caracteristicasEspeciales: ["Bilingüe 24/7", "Rescate acuático oceánico", "30,000+ habitaciones", "150+ resorts", "Evacuación huracanes"]
  },
  {
    nombre: "Estación Central de Bomberos Cancún",
    slug: "estacion-central-bomberos-cancun",
    direccion: "Av. Xcaret esq. Av. Labná, SM 21, Cancún, Q. Roo",
    coordenadas: { lat: 21.1619, lng: -86.8515 },
    telefono: "(998) 884-1300",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular",
      "Atención pre-hospitalaria avanzada",
      "Rescate urbano",
      "Control de fugas de gas",
      "Coordinación estatal emergencias",
      "Capacitación brigadas"
    ],
    equipamiento: [
      "4 Autobombas",
      "1 Escalera telescópica 42m",
      "2 Unidades de rescate pesado",
      "4 Ambulancias SVAA",
      "1 Unidad de mando estatal",
      "Herramienta hidráulica completa"
    ],
    personal: 95,
    copiasActa: true,
    zona: "Cancún Centro",
    municipiosCubiertos: ["Cancún Centro", "SM 1-100", "Zona comercial", "Hospitales"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de Benito Juárez (Cancún). Centro de despacho para todas las estaciones del municipio y coordinación con Protección Civil estatal. Cobertura de la ciudad de Cancún con 900,000+ habitantes.",
    tiempoRespuesta: "5-8 minutos zona urbana",
    sitioWeb: "https://cancun.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosCancun",
    caracteristicasEspeciales: ["Estación central", "Coordinación estatal", "Escalera 42m", "Centro despacho", "900,000 habitantes"]
  },
  {
    nombre: "Estación de Bomberos Cancún Norte",
    slug: "estacion-bomberos-cancun-norte",
    direccion: "Av. Huayacán esq. López Portillo, SM 69, Cancún, Q. Roo",
    coordenadas: { lat: 21.1856, lng: -86.8734 },
    telefono: "(998) 880-5050",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias mercados",
      "Incendios forestales interfase"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias",
      "1 Unidad forestal"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Cancún Centro",
    municipiosCubiertos: ["Cancún Norte", "Puerto Juárez", "Bonfil", "Zona industrial norte"],
    descripcion: "Cobertura de la zona norte de Cancún, incluyendo Puerto Juárez (terminal ferries a Isla Mujeres), fraccionamientos populares y zona industrial. Apoyo a emergencias marítimas en coordinación con estación Zona Hotelera.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Puerto Juárez", "Terminal Isla Mujeres", "Zona industrial", "Interfase urbano-forestal"]
  },
  {
    nombre: "Estación de Bomberos Aeropuerto Cancún",
    slug: "estacion-bomberos-aeropuerto-cancun",
    direccion: "Aeropuerto Internacional de Cancún, Terminal 3, Cancún, Q. Roo",
    coordenadas: { lat: 21.0365, lng: -86.8771 },
    telefono: "(998) 848-7200",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Salvamento y Extinción de Incendios (SSEI)",
      "Rescate aeronáutico",
      "Emergencias en pista",
      "Derrames combustible aviación",
      "Evacuación aeronaves",
      "HAZMAT aeronáutico",
      "Emergencias terminales"
    ],
    equipamiento: [
      "5 Vehículos ARFF Categoría 9 OACI",
      "2 Autobombas apoyo",
      "Espuma AFFF 6% alta capacidad",
      "Polvo químico seco",
      "Agente limpio Halón/sustituto",
      "Escaleras aeronáuticas especiales",
      "Equipo rescate aeronaves wide-body",
      "Sistema comunicación multiagencia"
    ],
    personal: 75,
    copiasActa: false,
    zona: "Cancún Centro",
    municipiosCubiertos: ["Aeropuerto CUN terminales 1-4", "Zona de hangares", "FBO aviación privada"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Cancún, el 2do más grande de Latinoamérica con 25+ millones de pasajeros anuales. Categoría 9 OACI (máxima) con capacidad para aeronaves de fuselaje ancho. 90 aerolíneas, 180 destinos. Tiempo de respuesta: 3 minutos a cualquier punto de pista según estándar OACI.",
    descripcionEn: "Aircraft Rescue and Firefighting Service (ARFF) at Cancun International Airport, 2nd largest in Latin America with 25+ million passengers annually. ICAO Category 9 (maximum) with wide-body aircraft capability. 90 airlines, 180 destinations. Response time: 3 minutes to any runway point per ICAO standard.",
    tiempoRespuesta: "3 minutos cualquier punto pista (estándar OACI)",
    caracteristicasEspeciales: ["SSEI Categoría 9 OACI", "25M pasajeros/año", "Top 2 Latinoamérica", "90 aerolíneas", "Wide-body capability"]
  },

  // ═══ PLAYA DEL CARMEN ═══
  {
    nombre: "Estación Central de Bomberos Playa del Carmen",
    slug: "estacion-central-bomberos-playa-carmen",
    direccion: "Av. Juárez esq. Calle 15, Centro, Playa del Carmen, Q. Roo",
    coordenadas: { lat: 20.6296, lng: -87.0739 },
    telefono: "(984) 873-0291",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios hoteleros",
      "Rescate acuático playas y cenotes",
      "Atención pre-hospitalaria bilingüe",
      "Emergencias 5ta Avenida",
      "Rescate vehicular carretera 307",
      "Incendios forestales",
      "Evacuación centros comerciales"
    ],
    equipamiento: [
      "3 Autobombas",
      "2 Unidades rescate acuático",
      "1 Unidad rescate carretero",
      "3 Ambulancias SVAA",
      "Equipo buceo cenotes",
      "Motos acuáticas"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Riviera Maya Norte",
    municipiosCubiertos: ["Playa del Carmen Centro", "5ta Avenida", "Playacar", "Terminal Cozumel", "Carretera 307 norte"],
    descripcion: "Estación central de Solidaridad (Playa del Carmen), la ciudad de mayor crecimiento en México. Cobertura de la zona turística incluyendo la icónica 5ta Avenida, terminal de ferries a Cozumel, y decenas de resorts. Personal bilingüe especializado en rescate acuático (playas y cenotes) y emergencias turísticas.",
    descripcionEn: "Central station of Solidaridad (Playa del Carmen), Mexico's fastest-growing city. Coverage of tourist zone including the iconic 5th Avenue, Cozumel ferry terminal, and dozens of resorts. Bilingual personnel specialized in water rescue (beaches and cenotes) and tourist emergencies.",
    tiempoRespuesta: "5-8 minutos zona centro",
    sitioWeb: "https://solidaridad.gob.mx/bomberos",
    caracteristicasEspeciales: ["5ta Avenida", "Terminal Cozumel", "Bilingüe", "Rescate cenotes", "Ciudad más crecimiento México"]
  },
  {
    nombre: "Estación de Bomberos Playa del Carmen Sur",
    slug: "estacion-bomberos-playa-carmen-sur",
    direccion: "Av. Constituyentes km 3, Playa del Carmen, Q. Roo",
    coordenadas: { lat: 20.6012, lng: -87.1156 },
    telefono: "(984) 803-5500",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias residenciales",
      "Incendios interfase",
      "Apoyo zona hotelera sur"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias",
      "1 Unidad forestal"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Riviera Maya Norte",
    municipiosCubiertos: ["Playa del Carmen Sur", "Ejido", "Carretera 307 sur", "Resorts sur"],
    descripcion: "Cobertura de la zona sur de Playa del Carmen, incluyendo fraccionamientos residenciales, acceso a la carretera 307 sur y resorts del corredor sur hacia Tulum. Apoyo para emergencias de la zona de cenotes cercanos.",
    tiempoRespuesta: "6-12 minutos",
    caracteristicasEspeciales: ["Corredor sur", "Carretera 307", "Cenotes cercanos", "Zona residencial"]
  },
  {
    nombre: "Estación de Bomberos Puerto Morelos",
    slug: "estacion-bomberos-puerto-morelos",
    direccion: "Av. Javier Rojo Gómez, Centro, Puerto Morelos, Q. Roo",
    coordenadas: { lat: 20.8485, lng: -86.8754 },
    telefono: "(998) 206-9090",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios",
      "Rescate acuático arrecife",
      "Atención pre-hospitalaria",
      "Emergencias resorts",
      "Rescate buceo",
      "Incendios forestales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático",
      "1 Lancha rescate",
      "2 Ambulancias"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Riviera Maya Norte",
    municipiosCubiertos: ["Puerto Morelos", "Parque Nacional Arrecife", "Ruta de los Cenotes", "Resorts corredor norte"],
    descripcion: "Cobertura de Puerto Morelos, pueblo con encanto y acceso al Parque Nacional Arrecife de Puerto Morelos. Rescate acuático especializado en arrecife y cenotes de la famosa Ruta de los Cenotes. Atención de resorts del corredor norte hacia Cancún.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Parque Nacional Arrecife", "Ruta de los Cenotes", "Pueblo con encanto", "Buceo"]
  },

  // ═══ RIVIERA MAYA SUR ═══
  {
    nombre: "Estación de Bomberos Tulum",
    slug: "estacion-bomberos-tulum",
    direccion: "Av. Tulum esq. Orión Sur, Tulum Centro, Q. Roo",
    coordenadas: { lat: 20.2114, lng: -87.4654 },
    telefono: "(984) 802-4141",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios eco-resorts",
      "Rescate en cenotes",
      "Emergencias zona arqueológica",
      "Atención pre-hospitalaria",
      "Incendios forestales selva",
      "Rescate acuático playas",
      "Emergencias turismo aventura"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático/cenotes",
      "1 Unidad forestal 4x4",
      "2 Ambulancias 4x4",
      "Equipo buceo cenotes",
      "Equipo rappel"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Riviera Maya Sur",
    municipiosCubiertos: ["Tulum Centro", "Zona Arqueológica", "Zona Hotelera Tulum", "Gran Cenote", "Cenotes Sac Actun"],
    descripcion: "Cobertura del municipio de Tulum, incluyendo la Zona Arqueológica (2+ millones de visitantes/año) y los cenotes más famosos del mundo (Gran Cenote, Sistema Sac Actun). Personal especializado en rescate en cenotes (aguas confinadas) y emergencias de turismo ecológico y aventura.",
    descripcionEn: "Coverage of Tulum municipality, including the Archaeological Zone (2+ million visitors/year) and world's most famous cenotes (Gran Cenote, Sac Actun System). Personnel specialized in cenote rescue (confined waters) and eco-tourism/adventure emergencies.",
    tiempoRespuesta: "5-15 minutos según zona",
    caracteristicasEspeciales: ["Zona Arqueológica", "Gran Cenote", "Sistema Sac Actun", "Eco-resorts", "2M visitantes/año"]
  },
  {
    nombre: "Estación de Bomberos Akumal",
    slug: "estacion-bomberos-akumal",
    direccion: "Carretera 307 km 255, Akumal, Q. Roo",
    coordenadas: { lat: 20.3956, lng: -87.3134 },
    telefono: "(984) 875-9030",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios",
      "Rescate acuático bahía",
      "Rescate tortugas/fauna marina",
      "Atención pre-hospitalaria",
      "Emergencias esnórquel",
      "Incendios forestales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate acuático",
      "1 Ambulancia 4x4",
      "Equipo esnórquel profesional"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Riviera Maya Sur",
    municipiosCubiertos: ["Akumal", "Bahía de Akumal", "Xcacel", "Chemuyil"],
    descripcion: "Cobertura de Akumal, famoso santuario de tortugas marinas y destino de esnórquel. Rescate acuático especializado en bahía de aguas someras. Coordinación con programas de conservación de tortugas.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Santuario tortugas", "Bahía esnórquel", "Arrecife Maya", "Conservación"]
  },

  // ═══ COZUMEL ═══
  {
    nombre: "Estación Central de Bomberos Cozumel",
    slug: "estacion-central-bomberos-cozumel",
    direccion: "Av. Rafael E. Melgar esq. Calle 11, Centro, Cozumel, Q. Roo",
    coordenadas: { lat: 20.5104, lng: -86.9479 },
    telefono: "(987) 872-0800",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios",
      "Emergencias terminal cruceros",
      "Rescate buceo arrecifes",
      "Atención pre-hospitalaria bilingüe",
      "Emergencias embarcaciones",
      "Respuesta huracanes isla",
      "Rescate marítimo",
      "Coordinación evacuación isla"
    ],
    equipamiento: [
      "3 Autobombas",
      "2 Unidades rescate acuático",
      "2 Lanchas rescate profesionales",
      "3 Ambulancias SVAA",
      "Equipo buceo profundo",
      "Cámara hiperbárica móvil coordinación",
      "Equipo emergencias cruceros"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Cozumel",
    municipiosCubiertos: ["Cozumel Centro", "Terminal Cruceros", "Muelle Puerta Maya", "Muelle Punta Langosta", "Parque Chankanaab"],
    descripcion: "Estación central de la isla de Cozumel, puerto de cruceros #3 del mundo con 4.5 millones de cruceristas anuales. Personal bilingüe especializado en emergencias de cruceros, rescate de buceo profesional (arrecifes mundialmente famosos) y coordinación de evacuación insular ante huracanes. Enlace permanente con autoridades portuarias y Capitanía de Puerto.",
    descripcionEn: "Central station for Cozumel island, world's #3 cruise port with 4.5 million cruisers annually. Bilingual personnel specialized in cruise ship emergencies, professional dive rescue (world-famous reefs), and island evacuation coordination for hurricanes. Permanent liaison with port authorities and Harbor Master.",
    tiempoRespuesta: "5-10 minutos zona centro y muelles",
    sitioWeb: "https://cozumel.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosCozumel",
    caracteristicasEspeciales: ["Puerto cruceros #3 mundo", "4.5M cruceristas", "Buceo arrecifes", "Huracanes isla", "Bilingüe 24/7"]
  },
  {
    nombre: "Estación de Bomberos Cozumel Sur",
    slug: "estacion-bomberos-cozumel-sur",
    direccion: "Carretera Costera Sur km 5, Cozumel, Q. Roo",
    coordenadas: { lat: 20.4856, lng: -86.9623 },
    telefono: "(987) 872-5555",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios resorts",
      "Rescate buceo profesional",
      "Emergencias Parque Nacional",
      "Atención pre-hospitalaria",
      "Rescate embarcaciones"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático",
      "1 Lancha rescate",
      "2 Ambulancias"
    ],
    personal: 25,
    copiasActa: false,
    zona: "Cozumel",
    municipiosCubiertos: ["Zona Sur", "Parque Nacional Arrecifes", "Resorts sur", "Sitios buceo Palancar y Colombia"],
    descripcion: "Cobertura de la zona sur de Cozumel y el Parque Nacional Arrecifes de Cozumel. Rescate especializado en los arrecifes de buceo más famosos del mundo: Palancar, Colombia, Santa Rosa Wall. Coordinación con operadores de buceo para emergencias de descompresión.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Parque Nacional Arrecifes", "Palancar", "Colombia Wall", "Buceo profundo"]
  },
  {
    nombre: "Estación de Bomberos Aeropuerto Cozumel",
    slug: "estacion-bomberos-aeropuerto-cozumel",
    direccion: "Aeropuerto Internacional de Cozumel, Cozumel, Q. Roo",
    coordenadas: { lat: 20.5224, lng: -86.9256 },
    telefono: "(987) 872-0485",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Salvamento y Extinción (SSEI)",
      "Rescate aeronáutico",
      "Emergencias en pista",
      "HAZMAT combustibles"
    ],
    equipamiento: [
      "2 Vehículos ARFF Categoría 7",
      "1 Autobomba apoyo",
      "Espuma AFFF",
      "Equipo rescate aeronáutico"
    ],
    personal: 20,
    copiasActa: false,
    zona: "Cozumel",
    municipiosCubiertos: ["Aeropuerto CZM", "Pista y terminales"],
    descripcion: "Servicio SSEI del Aeropuerto Internacional de Cozumel. Categoría 7 OACI para aeronaves regionales. Único acceso aéreo a la isla.",
    tiempoRespuesta: "3 minutos pista",
    caracteristicasEspeciales: ["SSEI Categoría 7", "Único acceso aéreo isla", "500K pasajeros/año"]
  },

  // ═══ ISLA MUJERES ═══
  {
    nombre: "Estación de Bomberos Isla Mujeres",
    slug: "estacion-bomberos-isla-mujeres",
    direccion: "Av. Rueda Medina 130, Centro, Isla Mujeres, Q. Roo",
    coordenadas: { lat: 21.2312, lng: -86.7312 },
    telefono: "(998) 877-0098",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios básico",
      "Rescate acuático",
      "Atención pre-hospitalaria",
      "Emergencias turísticas",
      "Coordinación evacuación isla"
    ],
    equipamiento: [
      "1 Autobomba compacta",
      "1 Unidad rescate",
      "1 Ambulancia",
      "1 Lancha rescate"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Isla Mujeres",
    municipiosCubiertos: ["Isla Mujeres Centro", "Zona hotelera isla", "Punta Sur"],
    descripcion: "Única estación de bomberos en Isla Mujeres. Capacidad básica con apoyo de Protección Civil. Para emergencias mayores, coordinación con Cancún vía marítima o aérea. Personal bilingüe para atención de turistas. 1 millón+ de visitantes anuales.",
    tiempoRespuesta: "5-10 minutos cualquier punto isla",
    caracteristicasEspeciales: ["Isla turística", "1M visitantes/año", "Evacuación coordinada Cancún"]
  },

  // ═══ CHETUMAL Y ZONA SUR ═══
  {
    nombre: "Estación Central de Bomberos Chetumal",
    slug: "estacion-central-bomberos-chetumal",
    direccion: "Av. Insurgentes esq. Av. Héroes, Centro, Chetumal, Q. Roo",
    coordenadas: { lat: 18.5001, lng: -88.2961 },
    telefono: "(983) 832-0429",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias fronterizas",
      "Respuesta huracanes",
      "Rescate acuático Bahía Chetumal",
      "Coordinación estatal sur"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Escalera telescópica 25m",
      "2 Unidades de rescate",
      "3 Ambulancias SVAA",
      "1 Unidad acuática"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Chetumal y Zona Fronteriza",
    municipiosCubiertos: ["Chetumal Centro", "Zona Libre", "Bahía de Chetumal", "Frontera Belice"],
    descripcion: "Estación central de la capital del estado. Cobertura del centro histórico, zona comercial (Zona Libre), frontera con Belice y costa de la Bahía de Chetumal. Coordinación de emergencias para la zona sur del estado.",
    tiempoRespuesta: "5-10 minutos zona urbana",
    sitioWeb: "https://othon.gob.mx/bomberos",
    caracteristicasEspeciales: ["Capital estatal", "Frontera Belice", "Zona Libre", "Bahía Chetumal", "Coordinación sur"]
  },
  {
    nombre: "Estación de Bomberos Bacalar",
    slug: "estacion-bomberos-bacalar",
    direccion: "Av. 5 esq. Calle 24, Centro, Bacalar, Q. Roo",
    coordenadas: { lat: 18.6789, lng: -88.3923 },
    telefono: "(983) 834-2525",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático laguna",
      "Atención pre-hospitalaria",
      "Emergencias turísticas",
      "Incendios forestales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate acuático",
      "1 Ambulancia",
      "1 Lancha rescate"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Chetumal y Zona Fronteriza",
    municipiosCubiertos: ["Bacalar", "Laguna de los 7 Colores", "Cenote Azul", "Fuerte San Felipe"],
    descripcion: "Cobertura de Bacalar, Pueblo Mágico famoso por la Laguna de los 7 Colores. Rescate acuático especializado en laguna y cenotes. Atención de turistas nacionales e internacionales. Creciente destino ecoturístico.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Pueblo Mágico", "Laguna 7 Colores", "Cenote Azul", "Ecoturismo"]
  },
  {
    nombre: "Estación de Bomberos Felipe Carrillo Puerto",
    slug: "estacion-bomberos-felipe-carrillo-puerto",
    direccion: "Av. Benito Juárez esq. Calle 65, Centro, Felipe Carrillo Puerto, Q. Roo",
    coordenadas: { lat: 19.5778, lng: -88.0456 },
    telefono: "(983) 834-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular carretera",
      "Atención pre-hospitalaria",
      "Incendios forestales",
      "Emergencias comunidades mayas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate 4x4",
      "2 Ambulancias 4x4",
      "1 Unidad forestal"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Zona Selvática Interior",
    municipiosCubiertos: ["Felipe Carrillo Puerto", "Zona Maya", "Reserva Sian Ka'an acceso", "Carretera 307 tramo central"],
    descripcion: "Cobertura de la Zona Maya central de Quintana Roo. Acceso a la Reserva de la Biósfera Sian Ka'an (UNESCO). Atención de emergencias en comunidades mayas y tramo central de la carretera 307. Especialización en incendios forestales.",
    tiempoRespuesta: "10-30 minutos según zona",
    caracteristicasEspeciales: ["Zona Maya", "Acceso Sian Ka'an UNESCO", "Comunidades rurales", "Incendios forestales"]
  },
  {
    nombre: "Estación de Bomberos Puerto Aventuras",
    slug: "estacion-bomberos-puerto-aventuras",
    direccion: "Av. Xaman-Ha, Puerto Aventuras, Q. Roo",
    coordenadas: { lat: 20.4945, lng: -87.2312 },
    telefono: "(984) 873-5555",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios",
      "Rescate acuático marina",
      "Emergencias delfines cautivos",
      "Atención pre-hospitalaria",
      "Emergencias residenciales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate acuático",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: false,
    zona: "Riviera Maya Norte",
    municipiosCubiertos: ["Puerto Aventuras", "Marina", "Residencial", "Delfinario"],
    descripcion: "Cobertura del desarrollo turístico Puerto Aventuras, incluyendo marina privada, campo de golf, residencial de lujo y programas con delfines. Comunidad cerrada con alta presencia de residentes extranjeros.",
    tiempoRespuesta: "3-5 minutos",
    caracteristicasEspeciales: ["Marina privada", "Residencial lujo", "Comunidad expatriados", "Delfinario"]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════════════
// FUNCIONES DE UTILIDAD AVANZADAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Obtiene estaciones por zona geográfica
 */
export function getEstacionesPorZona(zona: string): Estacion[] {
  return estacionesQuintanaRoo.filter(e => e.zona === zona);
}

/**
 * Obtiene estaciones con servicio bilingüe
 */
export function getEstacionesBilingues(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.idiomas?.includes("Inglés") ||
    e.caracteristicasEspeciales?.some(c => c.toLowerCase().includes("bilingüe"))
  );
}

/**
 * Obtiene estaciones con rescate acuático
 */
export function getEstacionesRescateAcuatico(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.servicios?.some(s =>
      s.toLowerCase().includes("acuático") ||
      s.toLowerCase().includes("buceo") ||
      s.toLowerCase().includes("marítimo")
    )
  );
}

/**
 * Obtiene estaciones con cobertura hotelera
 */
export function getEstacionesHoteleras(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.servicios?.some(s => s.toLowerCase().includes("hotel")) ||
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("resort") ||
      c.toLowerCase().includes("hotel") ||
      c.toLowerCase().includes("habitaciones")
    )
  );
}

/**
 * Obtiene estaciones aeroportuarias
 */
export function getEstacionesAeropuertos(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.servicios?.some(s =>
      s.toLowerCase().includes("ssei") ||
      s.toLowerCase().includes("aeronáutico") ||
      s.toLowerCase().includes("aeronaves")
    )
  );
}

/**
 * Obtiene estaciones de cruceros
 */
export function getEstacionesCruceros(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.servicios?.some(s => s.toLowerCase().includes("crucero")) ||
    e.caracteristicasEspeciales?.some(c => c.toLowerCase().includes("crucero"))
  );
}

/**
 * Obtiene estaciones en islas
 */
export function getEstacionesIslas(): Estacion[] {
  return estacionesQuintanaRoo.filter(e =>
    e.zona === "Cozumel" || e.zona === "Isla Mujeres"
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
    "alternateName": estacion.nombre.replace("Estación de Bomberos ", "").replace("Estación Central de Bomberos ", ""),
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressRegion": "Quintana Roo",
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
    "serviceType": estacion.servicios,
    "availableLanguage": estacion.idiomas || ["Spanish"]
  };
}

/**
 * Genera interlinking completo con métricas
 */
export function generarInterlinking() {
  return {
    estados: QUINTANA_ROO_SEO.interlinking.estadosVecinos,
    productos: QUINTANA_ROO_SEO.interlinking.productosRelacionados,
    paginas: QUINTANA_ROO_SEO.interlinking.paginasInternas
  };
}

/**
 * Obtiene alertas activas con soporte bilingüe
 */
export function getAlertasActivas(zona?: string, idioma: "es" | "en" = "es"): Array<{
  mensaje: string;
  tipo: string;
  icono: string;
  prioridad: string;
}> {
  const alertasActivas: Array<{ mensaje: string; tipo: string; icono: string; prioridad: string }> = [];

  for (const [, alerta] of Object.entries(ALERTAS_QUINTANA_ROO)) {
    if (alerta.activa()) {
      if (!zona || alerta.zonas.includes(zona) || alerta.zonas.includes("Todas")) {
        const mensaje = typeof alerta.mensaje === "object"
          ? alerta.mensaje[idioma] || alerta.mensaje.es
          : alerta.mensaje;
        alertasActivas.push({
          mensaje,
          tipo: alerta.tipo,
          icono: alerta.icono,
          prioridad: alerta.prioridad
        });
      }
    }
  }

  const prioridadOrden = { critica: 0, alta: 1, media: 2, baja: 3 };
  return alertasActivas.sort((a, b) =>
    (prioridadOrden[a.prioridad as keyof typeof prioridadOrden] || 3) -
    (prioridadOrden[b.prioridad as keyof typeof prioridadOrden] || 3)
  );
}

/**
 * Obtiene FAQ por categoría
 */
export function getFAQPorCategoria(categoria: string) {
  return FAQ_QUINTANA_ROO.filter(faq => faq.categoria === categoria);
}

/**
 * Obtiene estadísticas de la industria turística
 */
export function getEstadisticasTurismo() {
  return INDUSTRIA_TURISTICA_QR.estadisticas;
}

/**
 * Obtiene zonas hoteleras con detalles
 */
export function getZonasHoteleras() {
  return INDUSTRIA_TURISTICA_QR.zonasHoteleras;
}

// ─── Funciones Auxiliares Estándar para Directorio ───────────────────────────

/**
 * Obtiene lista única de municipios/ciudades ordenados alfabéticamente
 */
export function getMunicipios(): string[] {
  const ciudades = estacionesQuintanaRoo.map(e => {
    if (e.municipiosCubiertos && e.municipiosCubiertos.length > 0) {
      return e.municipiosCubiertos[0];
    }
    return e.zona || '';
  });
  return [...new Set(ciudades)].filter(Boolean).sort();
}

/**
 * Obtiene una estación por su slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesQuintanaRoo.find(e => e.slug === slug);
}

/**
 * Obtiene estaciones cercanas (misma zona primero, luego otras)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  const mismaZona = estacionesQuintanaRoo.filter(e => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesQuintanaRoo.filter(e => e.slug !== slug && e.zona !== estacion.zona);

  return [...mismaZona, ...otras].slice(0, limit);
}

// ─── Export Default ──────────────────────────────────────────────────────────
export default estacionesQuintanaRoo;
