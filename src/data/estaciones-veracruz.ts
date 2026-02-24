/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                                                                                                          ║
 * ║   ESTACIONES DE BOMBEROS - VERACRUZ                                                                      ║
 * ║   ══════════════════════════════════════════════════════════════════════════════════════════════════════║
 * ║                                                                                                          ║
 * ║   "El Puerto de México" - Costa del Golfo, Petróleo y Patrimonio UNESCO                                 ║
 * ║                                                                                                          ║
 * ║   Capital: Xalapa | Población: 8,062,579 (2020) - 3er estado más poblado                                ║
 * ║   Superficie: 71,820 km² | Costa: 745 km de litoral                                                     ║
 * ║                                                                                                          ║
 * ║   ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐   ║
 * ║   │ INDUSTRIA PETROLERA Y PETROQUÍMICA                                                              │   ║
 * ║   │ • PEMEX Refinería Minatitlán (150,000 barriles/día)                                            │   ║
 * ║   │ • Complejo Petroquímico Coatzacoalcos (más grande de Latinoamérica)                            │   ║
 * ║   │ • Terminal Marítima Pajaritos (exportación hidrocarburos)                                       │   ║
 * ║   │ • Pozos activos región Poza Rica-Altamira                                                       │   ║
 * ║   │ • 35% de producción petroquímica nacional                                                       │   ║
 * ║   └─────────────────────────────────────────────────────────────────────────────────────────────────┘   ║
 * ║                                                                                                          ║
 * ║   ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐   ║
 * ║   │ PUERTOS ESTRATÉGICOS                                                                            │   ║
 * ║   │ • Puerto de Veracruz - Principal puerto comercial de México                                     │   ║
 * ║   │ • Puerto de Coatzacoalcos - Exportación petroquímica                                            │   ║
 * ║   │ • Puerto de Tuxpan - Carga general y granel                                                     │   ║
 * ║   │ • 60% del comercio exterior mexicano pasa por puertos veracruzanos                              │   ║
 * ║   └─────────────────────────────────────────────────────────────────────────────────────────────────┘   ║
 * ║                                                                                                          ║
 * ║   ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐   ║
 * ║   │ PATRIMONIO UNESCO                                                                               │   ║
 * ║   │ • El Tajín (1992) - Ciudad prehispánica totonaca                                               │   ║
 * ║   │ • Sistema de Fuertes de San Juan de Ulúa                                                        │   ║
 * ║   │ • Reserva de la Biosfera Los Tuxtlas                                                            │   ║
 * ║   └─────────────────────────────────────────────────────────────────────────────────────────────────┘   ║
 * ║                                                                                                          ║
 * ║   ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐   ║
 * ║   │ RIESGO HURACANES - TEMPORADA JUNIO-NOVIEMBRE                                                    │   ║
 * ║   │ • 745 km de costa expuesta al Golfo de México                                                   │   ║
 * ║   │ • Promedio 2-3 ciclones tropicales/año                                                          │   ║
 * ║   │ • Zonas críticas: Veracruz, Tuxpan, Coatzacoalcos, Alvarado                                     │   ║
 * ║   │ • Sistema de alerta temprana coordinado con SMN                                                 │   ║
 * ║   └─────────────────────────────────────────────────────────────────────────────────────────────────┘   ║
 * ║                                                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

import type { Estacion } from './types';

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ SISTEMA DE MÉTRICAS Y KPIs ENTERPRISE - NIVEL SUPERIOR                                                   ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export interface MetricasOperativasVeracruz {
  emergenciasAnuales: number;
  emergenciasMaritimas: number;
  emergenciasPetroleras: number;
  emergenciasHuracanes: number;
  tiempoPromedioRespuesta: string;
  tiempoRespuestaPortuaria: string;
  tasaExitoMisiones: number;
  capacitacionHorasAnuales: number;
  certificacionesActivas: string[];
  certificacionesMaritimas: string[];
  equipoOperativo: number;
  vehiculosOperativos: number;
  embarcacionesRescate: number;
  coberturaPoblacional: number;
  satisfaccionCiudadana: number;
  coordinacionSEMAR: boolean;
  protocolosPEMEX: boolean;
}

export interface ProtocoloEmergenciaVeracruz {
  tipo: string;
  codigo: string;
  descripcion: string;
  nivelRiesgo: 'bajo' | 'medio' | 'alto' | 'critico' | 'catastrofico';
  tiempoMaximoRespuesta: string;
  recursosMinimos: string[];
  coordinacionRequerida: string[];
  equipoEspecializado: string[];
  procedimientoEvacuacion?: string;
  zonasAplicacion: string[];
}

export interface AlertaHuracanVeracruz {
  categoria: 'vigilancia' | 'alerta' | 'emergencia' | 'impacto';
  colorSemaforo: 'verde' | 'amarillo' | 'naranja' | 'rojo';
  accionesRequeridas: string[];
  personalMinimo: number;
  recursosPreposicionados: string[];
  refugiosActivados: number;
  coordinacionInterinstitucional: string[];
}

export interface InstalacionPEMEX {
  nombre: string;
  tipo: 'refineria' | 'petroquimica' | 'terminal' | 'pozos' | 'ductos';
  ubicacion: string;
  capacidad: string;
  empleados: number;
  riesgosHAZMAT: string[];
  clasificacionRiesgo: 'A' | 'B' | 'C';
  protocolosActivos: string[];
  brigadaInterna: boolean;
  tiempoRespuestaBomberos: string;
  estacionAsignada: string;
}

export interface PuertoVeracruz {
  nombre: string;
  tipo: 'comercial' | 'petrolero' | 'pesquero' | 'turistico';
  ubicacion: string;
  traficoAnual: string;
  riesgosMaritimos: string[];
  serviciosEmergencia: string[];
  coordinacionSEMAR: boolean;
  estacionAsignada: string;
}

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ CONFIGURACIÓN SEO COMPETITIVA ENTERPRISE - NIVEL SUPERIOR                                                ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const VERACRUZ_SEO = {
  titulo: "Estaciones de Bomberos en Veracruz",
  tituloCompleto: "Estaciones de Bomberos Veracruz 2024 | Directorio Oficial con Cobertura Portuaria y Petrolera",
  descripcion: "Directorio oficial verificado de 28 estaciones de bomberos en Veracruz. Cobertura especializada PEMEX, rescate marítimo con SEMAR, protocolos huracanes Golfo de México. El Tajín UNESCO, Puerto de Veracruz, Coatzacoalcos petroquímico. Emergencias: 911.",

  metaTags: {
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    author: "BOMBERO.MX - Directorio Nacional Verificado",
    publisher: "BOMBERO.MX",
    language: "es-MX",
    contentRating: "General",
    distribution: "global",
    revisitAfter: "3 days",
    geo: {
      region: "MX-VER",
      placename: "Veracruz",
      position: "19.1738;-96.1342",
      ICBM: "19.1738, -96.1342"
    },
    classification: "Emergency Services Directory - Maritime & Petroleum Specialized"
  },

  petrolero: {
    titulo: "Fire & Emergency Services for Oil & Gas Industry - Veracruz",
    descripcion: "Specialized HAZMAT and industrial fire response for PEMEX refinery, petrochemical complex Coatzacoalcos, and oil terminals. API 2021/ISO 45001 certified. 24/7 coordination with PEMEX emergency brigades. Bilingual operations center.",
    keywords: [
      "fire department PEMEX Veracruz",
      "emergency services petrochemical Mexico",
      "HAZMAT oil refinery Minatitlan",
      "industrial fire response Coatzacoalcos",
      "petroleum emergency services Gulf Mexico",
      "API certified fire department",
      "petrochemical zone fire coverage Veracruz"
    ],
    callToAction: "For petroleum emergencies: 911 | PEMEX Hotline: (921) 211-7000 | Port Emergency: VHF Ch. 16"
  },

  maritimo: {
    titulo: "Maritime Rescue & Port Emergency Services - Veracruz",
    descripcion: "Coordinated maritime rescue with Mexican Navy (SEMAR) for Port of Veracruz, Mexico's largest commercial port. Ship fire response, oil spill containment, search and rescue operations. VHF Channel 16 monitoring 24/7.",
    keywords: [
      "maritime rescue Veracruz",
      "port fire department Mexico",
      "ship fire emergency Gulf Mexico",
      "SEMAR coordination Veracruz",
      "oil spill response Veracruz",
      "search and rescue Gulf Mexico",
      "port emergency services Veracruz"
    ]
  },

  huracanes: {
    titulo: "Hurricane Emergency Response - Veracruz Gulf Coast",
    descripcion: "Specialized hurricane and tropical storm emergency response for 745km of Veracruz coastline. Pre-positioned resources, evacuation protocols, and coordination with National Meteorological Service. Active June-November.",
    keywords: [
      "hurricane emergency Veracruz",
      "tropical storm response Gulf Mexico",
      "emergency services hurricane season",
      "evacuation Veracruz coast",
      "disaster response Veracruz",
      "storm surge emergency Mexico"
    ]
  },

  keywords: {
    transaccionales: [
      "teléfono bomberos Veracruz",
      "número emergencias Veracruz",
      "bomberos cerca de mí Veracruz",
      "emergencia puerto Veracruz",
      "HAZMAT Coatzacoalcos teléfono"
    ],
    informacionales: [
      "estaciones de bomberos Veracruz",
      "directorio bomberos Veracruz",
      "cobertura bomberos zona petrolera",
      "bomberos puerto Veracruz",
      "rescate marítimo Veracruz"
    ],
    navegacionales: [
      "H. Cuerpo de Bomberos Veracruz",
      "bomberos Xalapa",
      "bomberos Coatzacoalcos",
      "estación central bomberos Veracruz puerto"
    ],
    comerciales: [
      "equipamiento bomberos Veracruz",
      "equipo HAZMAT petrolero",
      "sistemas contra incendios PEMEX",
      "extintores industriales Veracruz",
      "equipo rescate marítimo"
    ],
    locales: [
      "bomberos zona portuaria Veracruz",
      "bomberos refinería Minatitlán",
      "bomberos Poza Rica",
      "bomberos Tuxpan",
      "bomberos Córdoba Orizaba"
    ],
    longtail: [
      "bomberos especializados derrames petróleo Golfo México",
      "emergencia incendio barco puerto Veracruz",
      "rescate marítimo coordinación Marina Veracruz",
      "HAZMAT refinería PEMEX Minatitlán emergencia",
      "bomberos protocolos huracán costa Veracruz"
    ]
  },

  interlinking: {
    estadosVecinos: [
      {
        estado: "Tamaulipas",
        slug: "tamaulipas",
        relacion: "Corredor Petrolero Golfo",
        contexto: "PEMEX, puertos, refinería Madero",
        prioridad: "critica",
        distanciaKm: 450,
        tiempoViaje: "5 horas",
        valorSEO: 95,
        motivoBusqueda: "Coordinación emergencias petroleras costa"
      },
      {
        estado: "Tabasco",
        slug: "tabasco",
        relacion: "Región Petrolera Sur",
        contexto: "PEMEX exploración, Dos Bocas",
        prioridad: "critica",
        distanciaKm: 380,
        tiempoViaje: "4.5 horas",
        valorSEO: 92,
        motivoBusqueda: "Industria petrolera coordinada"
      },
      {
        estado: "Puebla",
        slug: "puebla",
        relacion: "Corredor Industrial Centro",
        contexto: "VW, Audi, industria manufactura",
        prioridad: "alta",
        distanciaKm: 280,
        tiempoViaje: "3.5 horas",
        valorSEO: 85,
        motivoBusqueda: "Corredor logístico Veracruz-Puebla"
      },
      {
        estado: "Oaxaca",
        slug: "oaxaca",
        relacion: "Costa Pacífico-Golfo",
        contexto: "Turismo, Istmo de Tehuantepec",
        prioridad: "alta",
        distanciaKm: 350,
        tiempoViaje: "5 horas",
        valorSEO: 75,
        motivoBusqueda: "Corredor transístmico"
      },
      {
        estado: "Chiapas",
        slug: "chiapas",
        relacion: "Frontera Sur",
        contexto: "Turismo, selva, hidroeléctricas",
        prioridad: "media",
        distanciaKm: 650,
        tiempoViaje: "8 horas",
        valorSEO: 65,
        motivoBusqueda: "Emergencias región sur"
      }
    ],
    productosRelacionados: [
      {
        producto: "Equipos HAZMAT Industria Petrolera",
        slug: "/productos/hazmat-petrolero",
        contexto: "Refinería, petroquímica, derrames hidrocarburos",
        prioridad: "critica",
        audiencia: ["PEMEX", "bomberos", "brigadas petroleras"],
        roi: "Muy alto - sector estratégico nacional",
        precioRango: "$80,000 - $800,000 MXN"
      },
      {
        producto: "Equipos Rescate Marítimo",
        slug: "/productos/rescate-maritimo",
        contexto: "Puertos, embarcaciones, ahogamiento",
        prioridad: "critica",
        audiencia: ["bomberos portuarios", "Marina", "capitanías"],
        roi: "Muy alto - puerto más grande de México",
        precioRango: "$50,000 - $500,000 MXN"
      },
      {
        producto: "Sistemas Espuma AFFF Petrolera",
        slug: "/productos/espuma-afff",
        contexto: "Incendios clase B, tanques almacenamiento",
        prioridad: "critica",
        audiencia: ["PEMEX", "bomberos industriales", "terminales"],
        roi: "Muy alto - normativa obligatoria",
        precioRango: "$25,000 - $300,000 MXN"
      },
      {
        producto: "Embarcaciones Rescate Profesional",
        slug: "/productos/embarcaciones-rescate",
        contexto: "Rescate costero, inundaciones, huracanes",
        prioridad: "alta",
        audiencia: ["bomberos", "protección civil", "Marina"],
        roi: "Alto - 745km de costa",
        precioRango: "$150,000 - $2,000,000 MXN"
      },
      {
        producto: "Trajes Inmersión y Neopreno",
        slug: "/productos/trajes-inmersion",
        contexto: "Rescate acuático, buceo, agua fría",
        prioridad: "alta",
        audiencia: ["rescatistas", "buzos", "bomberos"],
        roi: "Alto",
        precioRango: "$15,000 - $80,000 MXN"
      }
    ]
  },

  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "BOMBERO.MX",
    image: {
      url: "/images/og/veracruz-bomberos-puerto.jpg",
      width: 1200,
      height: 630,
      alt: "Bomberos Veracruz - Cobertura Portuaria, Petrolera y Costera"
    }
  },

  schemaTypes: [
    "GovernmentOrganization",
    "FireStation",
    "EmergencyService",
    "LocalBusiness",
    "Place",
    "ItemList",
    "BreadcrumbList",
    "FAQPage",
    "HowTo",
    "ContactPage",
    "MaritimeService",
    "IndustrialService"
  ]
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ INDUSTRIA PETROLERA Y PETROQUÍMICA - DATOS PEMEX                                                         ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const INDUSTRIA_PETROLERA_VERACRUZ: { instalaciones: InstalacionPEMEX[], resumen: any } = {
  resumen: {
    descripcion: "Veracruz concentra el 35% de la industria petroquímica de México",
    empleosDirectos: 45000,
    empleosIndirectos: 180000,
    produccionPetroquimica: "35% nacional",
    refinacionCapacidad: "150,000 barriles/día",
    terminalesMaritimas: 4,
    ductosPrincipales: 8,
    inversionAnual: "$12,000 millones USD",
    riesgoHAZMAT: "Muy Alto"
  },

  // Formato para UI
  estadisticas: {
    capacidadRefinacion: "150K bbl/día",
    empleosDirectos: 45000,
    complejosPetroquimicos: "3",
    terminalesMaritimas: "4"
  },

  instalaciones: [
    {
      nombre: "Refinería Ing. Antonio Dovalí Jaime",
      tipo: "refineria",
      ubicacion: "Minatitlán",
      capacidad: "150,000 barriles/día",
      empleados: 3500,
      productos: ["Gasolinas", "Diésel", "Turbosina", "Gas LP", "Asfalto"],
      riesgosHAZMAT: ["Crudo pesado", "Gasolinas", "Diésel", "Turbosina", "Gas LP", "Azufre", "Ácido sulfhídrico"],
      clasificacionRiesgo: "A",
      protocolosActivos: ["HAZMAT-REF-01", "FIRE-TANK-01", "EVAC-REF-01", "SPILL-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "5 minutos",
      estacionAsignada: "Estación HAZMAT Minatitlán"
    },
    {
      nombre: "Complejo Petroquímico Pajaritos",
      tipo: "petroquimica",
      ubicacion: "Coatzacoalcos",
      capacidad: "2.1 millones ton/año",
      empleados: 2800,
      productos: ["Etileno", "Polietileno", "Cloruro de vinilo", "PVC"],
      riesgosHAZMAT: ["Etileno", "Polietileno", "Cloruro de vinilo", "Amoniaco", "Cloro"],
      clasificacionRiesgo: "A",
      protocolosActivos: ["HAZMAT-PQ-01", "TOXIC-CLOUD-01", "EVAC-MASS-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "6 minutos",
      estacionAsignada: "Estación HAZMAT Coatzacoalcos"
    },
    {
      nombre: "Complejo Petroquímico Cangrejera",
      tipo: "petroquimica",
      ubicacion: "Coatzacoalcos",
      capacidad: "1.8 millones ton/año",
      empleados: 2200,
      productos: ["Etileno", "Propileno", "Butadieno", "Aromáticos"],
      riesgosHAZMAT: ["Etileno", "Propileno", "Butadieno", "Aromáticos"],
      clasificacionRiesgo: "A",
      protocolosActivos: ["HAZMAT-PQ-01", "FIRE-PLANT-01", "EVAC-ZONE-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "7 minutos",
      estacionAsignada: "Estación HAZMAT Coatzacoalcos"
    },
    {
      nombre: "Complejo Petroquímico Morelos",
      tipo: "petroquimica",
      ubicacion: "Coatzacoalcos",
      capacidad: "1.5 millones ton/año",
      empleados: 1800,
      riesgosHAZMAT: ["Amoniaco", "Urea", "Fertilizantes nitrogenados"],
      clasificacionRiesgo: "A",
      protocolosActivos: ["HAZMAT-NH3-01", "TOXIC-01", "EVAC-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "8 minutos",
      estacionAsignada: "Estación HAZMAT Coatzacoalcos"
    },
    {
      nombre: "Terminal Marítima Pajaritos",
      tipo: "terminal",
      ubicacion: "Coatzacoalcos",
      capacidad: "500,000 barriles almacenamiento",
      empleados: 450,
      riesgosHAZMAT: ["Hidrocarburos líquidos", "Gas LP", "Productos petroquímicos"],
      clasificacionRiesgo: "A",
      protocolosActivos: ["SPILL-MAR-01", "FIRE-TERM-01", "EVAC-PORT-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "5 minutos",
      estacionAsignada: "Estación HAZMAT Coatzacoalcos"
    },
    {
      nombre: "Activo Integral Poza Rica-Altamira",
      tipo: "pozos",
      ubicacion: "Poza Rica - Papantla",
      capacidad: "45,000 barriles/día extracción",
      empleados: 2500,
      riesgosHAZMAT: ["Crudo", "Gas natural", "H2S", "Lodos de perforación"],
      clasificacionRiesgo: "B",
      protocolosActivos: ["WELL-CONTROL-01", "BLOWOUT-01", "FIRE-WELL-01"],
      brigadaInterna: true,
      tiempoRespuestaBomberos: "15 minutos",
      estacionAsignada: "Estación HAZMAT Poza Rica"
    }
  ]
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ PUERTOS Y OPERACIONES MARÍTIMAS                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const PUERTOS_VERACRUZ: PuertoVeracruz[] = [
  {
    nombre: "Puerto de Veracruz",
    tipo: "comercial",
    ubicacion: "Veracruz Centro",
    traficoAnual: "24 millones de toneladas, 1.1 millones TEUs",
    riesgosMaritimos: ["Incendio buque", "Derrame combustible", "Contenedor HAZMAT", "Hombre al agua", "Colisión"],
    serviciosEmergencia: ["Remolcadores bombero", "Lanchas rescate", "Buzos", "HAZMAT portuario"],
    coordinacionSEMAR: true,
    estacionAsignada: "Estación Bomberos Puerto Veracruz"
  },
  {
    nombre: "Puerto de Coatzacoalcos",
    tipo: "petrolero",
    ubicacion: "Coatzacoalcos",
    traficoAnual: "18 millones de toneladas (petroquímicos)",
    riesgosMaritimos: ["Derrame petroquímico", "Incendio tanquero", "Explosión carga", "Nube tóxica"],
    serviciosEmergencia: ["Buque combate incendios", "Contención derrames", "HAZMAT marítimo"],
    coordinacionSEMAR: true,
    estacionAsignada: "Estación HAZMAT Coatzacoalcos"
  },
  {
    nombre: "Puerto de Tuxpan",
    tipo: "comercial",
    ubicacion: "Tuxpan",
    traficoAnual: "8 millones de toneladas",
    riesgosMaritimos: ["Incendio buque", "Derrame", "Carga peligrosa"],
    serviciosEmergencia: ["Lancha rescate", "Bomba portátil marina"],
    coordinacionSEMAR: true,
    estacionAsignada: "Estación Bomberos Tuxpan"
  }
];

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ SISTEMA DE ALERTAS HURACANES - GOLFO DE MÉXICO                                                           ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const SISTEMA_HURACANES_VERACRUZ = {
  temporada: {
    inicio: "1 de junio",
    fin: "30 de noviembre",
    pico: "Agosto-Octubre",
    promedioAnual: "2-3 ciclones afectan la costa"
  },

  costasVulnerables: [
    { zona: "Norte (Tuxpan-Nautla)", km: 180, poblacion: 450000, riesgo: "Alto" },
    { zona: "Centro (Veracruz-Boca del Río)", km: 120, poblacion: 950000, riesgo: "Muy Alto" },
    { zona: "Sur (Alvarado-Coatzacoalcos)", km: 200, poblacion: 650000, riesgo: "Alto" },
    { zona: "Papaloapan (zona inundable)", km: 150, poblacion: 380000, riesgo: "Crítico inundación" }
  ],

  nivelesAlerta: {
    verde: {
      categoria: "vigilancia",
      descripcion: "Sistema tropical en vigilancia",
      accionesRequeridas: ["Monitoreo continuo", "Revisión equipos", "Comunicación a personal"],
      personalMinimo: 100,
      recursosPreposicionados: ["Vehículos 4x4 revisados", "Combustible reserva", "Comunicaciones verificadas"]
    },
    amarillo: {
      categoria: "alerta",
      descripcion: "Ciclón tropical a 72 horas",
      accionesRequeridas: ["Personal en alerta", "Posicionamiento equipos", "Coordinación refugios", "Alerta hospitales"],
      personalMinimo: 200,
      recursosPreposicionados: ["Embarcaciones listas", "Generadores", "Bombas extracción", "Víveres 72h"]
    },
    naranja: {
      categoria: "emergencia",
      descripcion: "Ciclón tropical a 48 horas",
      accionesRequeridas: ["Evacuación zonas de riesgo", "Refugios activos", "Personal máximo", "Suspensión labores"],
      personalMinimo: 350,
      recursosPreposicionados: ["Todo equipo operativo", "Ambulancias preposicionadas", "Helipuertos habilitados"]
    },
    rojo: {
      categoria: "impacto",
      descripcion: "Impacto inminente o en curso",
      accionesRequeridas: ["Solo emergencias vida", "Refugio en sitio", "Coordinación central activa", "Rescates post-impacto"],
      personalMinimo: 400,
      recursosPreposicionados: ["Búsqueda y rescate activado", "Equipos corte", "Lanchas rescate desplegadas"]
    }
  },

  recursosTotales: {
    embarcaciones: 28,
    vehiculos4x4: 65,
    bombas: 40,
    generadores: 55,
    refugios: 180,
    capacidadRefugios: 95000,
    helicopterosCoordinacion: 3
  },

  // Formato para UI
  niveles: [
    { color: "verde", nombre: "Vigilancia", descripcion: "Sistema tropical en vigilancia", acciones: ["Monitoreo continuo", "Revisión equipos", "Comunicación a personal"], personalRequerido: "100 elementos" },
    { color: "amarillo", nombre: "Alerta", descripcion: "Ciclón tropical a 72 horas", acciones: ["Personal en alerta", "Posicionamiento equipos", "Coordinación refugios"], personalRequerido: "200 elementos" },
    { color: "naranja", nombre: "Emergencia", descripcion: "Ciclón tropical a 48 horas", acciones: ["Evacuación zonas de riesgo", "Refugios activos", "Personal máximo"], personalRequerido: "350 elementos" },
    { color: "rojo", nombre: "Impacto", descripcion: "Impacto inminente o en curso", acciones: ["Solo emergencias vida", "Refugio en sitio", "Rescates post-impacto"], personalRequerido: "400 elementos" }
  ],

  estadisticas: {
    huracanesHistoricos: "150+",
    temporadaInicio: "1 Junio",
    temporadaFin: "30 Nov",
    refugiosDisponibles: "180"
  },

  coordinacion: [
    { icono: "🌊", nombre: "SEMAR", rol: "Rescate marítimo y evacuación costera" },
    { icono: "🎖️", nombre: "Ejército", rol: "Plan DN-III-E y apoyo logístico" },
    { icono: "🛡️", nombre: "Protección Civil", rol: "Coordinación refugios y alertas" },
    { icono: "🌡️", nombre: "SMN", rol: "Pronósticos y alertas meteorológicas" },
    { icono: "🏥", nombre: "Salud", rol: "Atención médica y epidemiología" },
    { icono: "🚁", nombre: "Fuerza Aérea", rol: "Evacuación aérea y reconocimiento" }
  ]
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ PROTOCOLOS DE EMERGENCIA ESPECIALIZADOS                                                                   ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const PROTOCOLOS_VERACRUZ: ProtocoloEmergenciaVeracruz[] = [
  {
    tipo: "Incendio Tanque Almacenamiento Petrolero",
    codigo: "FIRE-TANK-01",
    descripcion: "Incendio en tanque de almacenamiento de hidrocarburos (crudo, gasolinas, diésel)",
    nivelRiesgo: "catastrofico",
    tiempoMaximoRespuesta: "5 minutos en refinería",
    recursosMinimos: ["4 autobombas industriales", "2 unidades espuma AFFF", "1 unidad comando", "4 ambulancias"],
    coordinacionRequerida: ["Brigada PEMEX", "HAZMAT estatal", "Protección Civil", "Hospitales trauma"],
    equipoEspecializado: ["Monitores espuma alta capacidad", "Trajes proximidad", "Detectores LEL", "Cañones espuma"],
    procedimientoEvacuacion: "Radio 1km inmediato, 3km preventivo",
    zonasAplicacion: ["Refinería Minatitlán", "Terminales marítimas", "Parques tanques"]
  },
  {
    tipo: "Fuga Tóxica Nube Química",
    codigo: "TOXIC-CLOUD-01",
    descripcion: "Liberación de gases tóxicos (cloro, amoniaco, H2S) con formación de nube",
    nivelRiesgo: "catastrofico",
    tiempoMaximoRespuesta: "8 minutos",
    recursosMinimos: ["2 unidades HAZMAT Nivel A", "1 unidad descontaminación", "6 ambulancias", "1 comando"],
    coordinacionRequerida: ["PEMEX", "SEMARNAT", "Protección Civil", "Ejército", "Hospitales toxicología"],
    equipoEspecializado: ["Trajes encapsulados Nivel A", "SCBA 60min", "Detectores multigas", "Duchas descontaminación masiva"],
    procedimientoEvacuacion: "Evacuación según viento, hasta 5km en dirección",
    zonasAplicacion: ["Complejo Pajaritos", "Complejo Cangrejera", "Complejo Morelos"]
  },
  {
    tipo: "Incendio Buque en Puerto",
    codigo: "FIRE-SHIP-01",
    descripcion: "Incendio a bordo de embarcación en puerto o rada",
    nivelRiesgo: "critico",
    tiempoMaximoRespuesta: "10 minutos",
    recursosMinimos: ["Remolcador bombero", "2 lanchas rescate", "2 autobombas muelle", "3 ambulancias"],
    coordinacionRequerida: ["SEMAR", "API Puerto", "Capitanía de Puerto", "Agente naviero"],
    equipoEspecializado: ["Bombas portátiles marinas", "Equipo rescate marítimo", "Trajes inmersión", "Escaleras portátiles"],
    zonasAplicacion: ["Puerto de Veracruz", "Puerto de Coatzacoalcos", "Puerto de Tuxpan"]
  },
  {
    tipo: "Derrame Petrolero Costero",
    codigo: "SPILL-COAST-01",
    descripcion: "Derrame de hidrocarburos en costa o aguas portuarias",
    nivelRiesgo: "critico",
    tiempoMaximoRespuesta: "20 minutos contención inicial",
    recursosMinimos: ["Equipo contención (barreras)", "Skimmers", "Lanchas trabajo", "Material absorbente"],
    coordinacionRequerida: ["SEMAR", "PEMEX", "PROFEPA", "SEMARNAT", "API Puerto"],
    equipoEspecializado: ["Barreras flotantes 2000m", "Skimmers oleofílicos", "Dispersantes autorizados", "Equipo bombeo"],
    zonasAplicacion: ["Todos los puertos", "Terminales marítimas", "Zona costera 745km"]
  },
  {
    tipo: "Huracán Impacto Directo",
    codigo: "HURR-IMPACT-01",
    descripcion: "Respuesta durante y post impacto de huracán categoría 1-5",
    nivelRiesgo: "catastrofico",
    tiempoMaximoRespuesta: "Variable según condiciones",
    recursosMinimos: ["100% personal activo", "Todas las embarcaciones", "Vehículos 4x4", "Equipos corte", "Generadores"],
    coordinacionRequerida: ["Ejército", "Marina", "Protección Civil Federal", "Cruz Roja", "CENACOM"],
    equipoEspecializado: ["Lanchas rescate aguas rápidas", "Motosierras", "Equipos extracción", "Plantas potabilizadoras"],
    procedimientoEvacuacion: "Según Plan Estatal de Contingencias Hidrometeorológicas",
    zonasAplicacion: ["745km de costa", "Zonas inundables Papaloapan", "Cuencas bajas"]
  },
  {
    tipo: "Rescate Marítimo Coordenado SEMAR",
    codigo: "SAR-MAR-01",
    descripcion: "Búsqueda y rescate marítimo en coordinación con Armada de México",
    nivelRiesgo: "alto",
    tiempoMaximoRespuesta: "15 minutos zona portuaria, 45 min zona costera",
    recursosMinimos: ["2 lanchas rescate", "Equipo buceo", "2 ambulancias", "Helicóptero (si disponible)"],
    coordinacionRequerida: ["SEMAR Sector Naval", "Capitanía de Puerto", "Cruz Roja", "Protección Civil"],
    equipoEspecializado: ["Equipo buceo completo", "Sonar localización", "Cámara hiperbárica (hospital)", "Balizas EPIRB"],
    zonasAplicacion: ["Aguas territoriales", "Zona costera", "Ríos navegables"]
  },
  {
    tipo: "Blowout Pozo Petrolero",
    codigo: "BLOWOUT-01",
    descripcion: "Descontrol de pozo petrolero con surgencia de crudo/gas",
    nivelRiesgo: "catastrofico",
    tiempoMaximoRespuesta: "30 minutos llegada, control variable",
    recursosMinimos: ["Equipo especializado Boots & Coots/Wild Well", "Bomberos apoyo", "HAZMAT", "Evacuación masiva"],
    coordinacionRequerida: ["PEMEX Perforación", "Especialistas internacionales", "Ejército", "Protección Civil"],
    equipoEspecializado: ["Equipos control pozos", "Preventer, bombas alta presión", "Monitores enfriamiento"],
    procedimientoEvacuacion: "Radio 5km mínimo, según condiciones",
    zonasAplicacion: ["Activo Poza Rica", "Zonas de perforación activa"]
  },
  {
    tipo: "Emergencia El Tajín UNESCO",
    codigo: "UNESCO-TAJIN-01",
    descripcion: "Emergencia en zona arqueológica patrimonio mundial",
    nivelRiesgo: "alto",
    tiempoMaximoRespuesta: "15 minutos",
    recursosMinimos: ["1 autobomba ligera", "1 ambulancia", "Equipo rescate básico"],
    coordinacionRequerida: ["INAH", "Protección Civil Papantla", "Cruz Roja"],
    equipoEspecializado: ["Extintores manuales (protección estructuras)", "Camillas técnicas", "Equipo primeros auxilios"],
    zonasAplicacion: ["Zona arqueológica El Tajín", "Zona buffer patrimonio"]
  }
];

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ TURISMO Y PATRIMONIO                                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const TURISMO_VERACRUZ = {
  patrimonio: {
    unesco: [
      {
        nombre: "Ciudad Prehispánica de El Tajín",
        año: 1992,
        descripcion: "Capital de la civilización totonaca con Pirámide de los Nichos",
        visitantes: "800,000+/año",
        riesgos: ["Incendios vegetación", "Emergencias médicas turistas", "Lluvias intensas"],
        cobertura: ["Estación Papantla", "Protección INAH"]
      }
    ],
    listaIndicativa: [
      { nombre: "San Juan de Ulúa", descripcion: "Fortaleza colonial, símbolo de Veracruz" },
      { nombre: "Centro Histórico de Veracruz", descripcion: "Arquitectura portuaria colonial" },
      { nombre: "Reserva de la Biosfera Los Tuxtlas", descripcion: "Selva tropical húmeda" }
    ]
  },

  carnavalVeracruz: {
    descripcion: "Carnaval más importante de México, 9 días de festividades",
    asistentes: "1,500,000+/año",
    fechas: "Febrero-Marzo (móvil)",
    riesgos: ["Aglomeraciones", "Accidentes pirotecnia", "Emergencias médicas masivas", "Incendios carros alegóricos"],
    cobertura: "Plan especial multisectorial"
  },

  playas: [
    { nombre: "Boca del Río", visitantes: "2M+/año", riesgos: ["Ahogamiento", "Corrientes"] },
    { nombre: "Costa Esmeralda", visitantes: "1.5M+/año", riesgos: ["Ahogamiento", "Fauna marina"] },
    { nombre: "Chachalacas", visitantes: "500K+/año", riesgos: ["Ahogamiento", "Dunas"] }
  ],

  pueblosMagicos: [
    { nombre: "Coatepec", designacion: 2006, tema: "Café y orquídeas" },
    { nombre: "Xico", designacion: 2011, tema: "Cascadas y tradiciones" },
    { nombre: "Papantla", designacion: 2012, tema: "Vainilla y Voladores" },
    { nombre: "Zozocolco", designacion: 2015, tema: "Cultura totonaca" },
    { nombre: "Orizaba", designacion: 2015, tema: "Teleférico y montaña" }
  ]
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ ZONAS GEOGRÁFICAS CON ANÁLISIS DE RIESGO DETALLADO                                                        ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const ZONAS_VERACRUZ = {
  zonaPuerto: {
    nombre: "Zona Metropolitana Puerto Veracruz",
    nombreCorto: "ZM Veracruz",
    municipios: ["Veracruz", "Boca del Río", "Medellín", "Alvarado"],
    poblacion: 950000,
    descripcion: "Puerto comercial más importante de México, zona turística",
    caracteristicas: ["Puerto 24M ton/año", "Turismo costero", "Carnaval", "San Juan de Ulúa"],
    nivelRiesgo: "Alto",
    riesgosPrincipales: ["Incendios portuarios", "Derrames", "Huracanes", "Rescate marítimo"],
    estaciones: 5,
    tiempoRespuestaPromedio: "6 minutos",
    color: "#0ea5e9"
  },
  zonaMetroXalapa: {
    nombre: "Zona Metropolitana Xalapa",
    nombreCorto: "ZM Xalapa",
    municipios: ["Xalapa", "Banderilla", "Coatepec", "Emiliano Zapata"],
    poblacion: 750000,
    descripcion: "Capital del estado, zona universitaria y administrativa",
    caracteristicas: ["Capital estatal", "Universidades", "Zona cafetalera", "Clima templado"],
    nivelRiesgo: "Medio",
    riesgosPrincipales: ["Incendios estructurales", "Deslaves", "Neblina", "Accidentes viales"],
    estaciones: 4,
    tiempoRespuestaPromedio: "7 minutos",
    color: "#16a34a"
  },
  zonaPetroquimica: {
    nombre: "Zona Petroquímica Coatzacoalcos",
    nombreCorto: "Petroquímica",
    municipios: ["Coatzacoalcos", "Minatitlán", "Cosoleacaque", "Nanchital"],
    poblacion: 520000,
    descripcion: "Mayor concentración petroquímica de Latinoamérica",
    caracteristicas: ["3 complejos petroquímicos", "Refinería", "Puerto petrolero", "HAZMAT crítico"],
    nivelRiesgo: "Muy Alto",
    riesgosPrincipales: ["HAZMAT industrial", "Incendios planta", "Fugas tóxicas", "Explosiones"],
    estaciones: 4,
    tiempoRespuestaPromedio: "5 minutos zona industrial",
    color: "#dc2626"
  },
  zonaPozaRica: {
    nombre: "Zona Petrolera Poza Rica-Papantla",
    nombreCorto: "Poza Rica",
    municipios: ["Poza Rica", "Papantla", "Tihuatlán", "Coatzintla"],
    poblacion: 380000,
    descripcion: "Zona de extracción petrolera y patrimonio UNESCO El Tajín",
    caracteristicas: ["Pozos petroleros activos", "El Tajín UNESCO", "Voladores de Papantla"],
    nivelRiesgo: "Alto",
    riesgosPrincipales: ["Emergencias pozos", "HAZMAT", "Turismo masivo", "Incendios forestales"],
    estaciones: 3,
    tiempoRespuestaPromedio: "8 minutos",
    color: "#f59e0b"
  },
  zonaCordova: {
    nombre: "Zona Córdoba-Orizaba",
    nombreCorto: "Córdoba-Orizaba",
    municipios: ["Córdoba", "Orizaba", "Fortín", "Ixtaczoquitlán", "Río Blanco"],
    poblacion: 450000,
    descripcion: "Zona montañosa, industrial y cafetalera",
    caracteristicas: ["Pico de Orizaba", "Industria manufactura", "Teleférico", "Cañonismo"],
    nivelRiesgo: "Medio-Alto",
    riesgosPrincipales: ["Rescate montaña", "Incendios industriales", "Deslaves", "Neblina"],
    estaciones: 3,
    tiempoRespuestaPromedio: "8 minutos",
    color: "#8b5cf6"
  },
  zonaTuxpan: {
    nombre: "Zona Norte Tuxpan-Pánuco",
    nombreCorto: "Norte",
    municipios: ["Tuxpan", "Poza Rica", "Álamo", "Cerro Azul"],
    poblacion: 280000,
    descripcion: "Puerto comercial norte, zona petrolera histórica",
    caracteristicas: ["Puerto Tuxpan", "Pesca", "Turismo playa", "Petróleo histórico"],
    nivelRiesgo: "Alto",
    riesgosPrincipales: ["Huracanes", "Rescate marítimo", "Inundaciones costeras"],
    estaciones: 2,
    tiempoRespuestaPromedio: "10 minutos",
    color: "#06b6d4"
  },
  zonaTuxtlas: {
    nombre: "Zona Los Tuxtlas",
    nombreCorto: "Tuxtlas",
    municipios: ["San Andrés Tuxtla", "Santiago Tuxtla", "Catemaco"],
    poblacion: 220000,
    descripcion: "Reserva de la biosfera, selva tropical húmeda",
    caracteristicas: ["Selva tropical", "Lagos", "Volcanes", "Ecoturismo"],
    nivelRiesgo: "Medio",
    riesgosPrincipales: ["Incendios forestales", "Rescate selva", "Inundaciones"],
    estaciones: 2,
    tiempoRespuestaPromedio: "15 minutos",
    color: "#22c55e"
  },
  zonaPapaloapan: {
    nombre: "Zona Papaloapan",
    nombreCorto: "Papaloapan",
    municipios: ["Tierra Blanca", "Cosamaloapan", "Tlacotalpan", "Alvarado"],
    poblacion: 350000,
    descripcion: "Cuenca baja del Papaloapan, zona inundable crítica",
    caracteristicas: ["Zona inundable", "Agricultura", "Ganadería", "Ríos caudalosos"],
    nivelRiesgo: "Muy Alto (inundaciones)",
    riesgosPrincipales: ["Inundaciones masivas", "Rescate acuático", "Evacuaciones"],
    estaciones: 3,
    tiempoRespuestaPromedio: "12 minutos",
    color: "#3b82f6"
  }
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ FAQ EXHAUSTIVAS - OPTIMIZADAS PARA FEATURED SNIPPETS                                                     ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const FAQ_VERACRUZ = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en Veracruz?",
    respuesta: "El número de emergencias en Veracruz es el 911 nacional. La Central de Bomberos de Veracruz Puerto atiende en (229) 932-0202. Para emergencias PEMEX/petroquímicas en Coatzacoalcos: (921) 211-7000. Para emergencias marítimas use VHF Canal 16 o contacte a SEMAR: (229) 932-0090.",
    categoria: "contacto"
  },
  {
    pregunta: "¿Los bomberos de Veracruz tienen capacidad para emergencias petroleras PEMEX?",
    respuesta: "Sí, Veracruz cuenta con 3 estaciones especializadas HAZMAT con capacidad Nivel A para emergencias petroleras y petroquímicas. La Estación HAZMAT Coatzacoalcos cubre los 3 complejos petroquímicos (Pajaritos, Cangrejera, Morelos) y la Refinería Minatitlán. Personal certificado API 2021 e ISO 45001 para incendios de hidrocarburos, fugas tóxicas y derrames. Coordinación 24/7 con brigadas internas PEMEX.",
    categoria: "industrial"
  },
  {
    pregunta: "¿Hay bomberos especializados en rescate marítimo en el Puerto de Veracruz?",
    respuesta: "Sí, la Estación de Bomberos Puerto Veracruz cuenta con equipo de rescate marítimo en coordinación permanente con la Secretaría de Marina (SEMAR). Disponen de lanchas de rescate, equipo de buceo, y acceso a remolcadores con capacidad bombero. Monitoreo VHF Canal 16 las 24 horas. Tiempo de respuesta: 10 minutos en zona portuaria.",
    categoria: "maritimo"
  },
  {
    pregunta: "¿Qué cobertura tienen los bomberos durante temporada de huracanes en Veracruz?",
    respuesta: "Veracruz tiene un Sistema de Alerta de Huracanes con 4 niveles (Verde, Amarillo, Naranja, Rojo). Durante temporada (junio-noviembre), se activan hasta 400 elementos, 28 embarcaciones de rescate, 65 vehículos 4x4 y 180 refugios con capacidad para 95,000 personas. Coordinación con SEMAR, Ejército, Protección Civil Federal y SMN.",
    categoria: "huracanes"
  },
  {
    pregunta: "¿Cómo reportar una emergencia en la refinería de Minatitlán?",
    respuesta: "1) Llame al 911 indicando 'emergencia industrial refinería'. 2) Active la brigada interna PEMEX si es empleado. 3) Línea directa PEMEX emergencias: (921) 211-7000. 4) Proporcione ubicación exacta dentro de la refinería, tipo de material involucrado, número de afectados. La estación HAZMAT Minatitlán tiene tiempo de respuesta de 5 minutos.",
    categoria: "industrial"
  },
  {
    pregunta: "¿Los bomberos de Veracruz hablan inglés para emergencias portuarias?",
    respuesta: "La Estación de Bomberos Puerto Veracruz cuenta con personal con inglés operativo para coordinación con tripulaciones extranjeras. La API Puerto Veracruz también tiene coordinadores bilingües. Para emergencias marítimas internacionales, VHF Canal 16 opera en inglés estándar marítimo. SEMAR también mantiene capacidad de comunicación en inglés.",
    categoria: "internacional"
  },
  {
    pregunta: "¿Qué bomberos cubren emergencias en El Tajín?",
    respuesta: "La zona arqueológica de El Tajín (Patrimonio UNESCO) es cubierta por la Estación de Bomberos Papantla, con tiempo de respuesta de 15 minutos. Cuentan con protocolo especial de protección de patrimonio que limita uso de agua en estructuras arqueológicas. Coordinación directa con INAH para cualquier emergencia en el sitio.",
    categoria: "turismo"
  },
  {
    pregunta: "¿Cuál es el tiempo de respuesta de los bomberos en las diferentes zonas de Veracruz?",
    respuesta: "Los tiempos varían por zona: Puerto de Veracruz: 6 minutos. Xalapa capital: 7 minutos. Zona petroquímica Coatzacoalcos: 5 minutos (crítico HAZMAT). Poza Rica: 8 minutos. Córdoba-Orizaba: 8 minutos. Tuxpan: 10 minutos. Zona inundable Papaloapan: 12 minutos. Tuxtlas: 15 minutos (zona selvática).",
    categoria: "servicio"
  },
  {
    pregunta: "¿Qué hacer en caso de derrame petrolero en la costa de Veracruz?",
    respuesta: "1) Llame al 911 y SEMAR (229) 932-0090. 2) No intente limpiar sin equipo de protección. 3) Aléjese de la zona afectada. 4) Proporcione ubicación exacta, extensión aproximada y tipo de hidrocarburo si es visible. Los equipos de contención tienen 2,000m de barreras flotantes y skimmers. PROFEPA y SEMARNAT son notificados automáticamente.",
    categoria: "ambiental"
  },
  {
    pregunta: "¿Los bomberos atienden emergencias durante el Carnaval de Veracruz?",
    respuesta: "Sí, durante el Carnaval de Veracruz (febrero-marzo) se activa un plan especial con personal reforzado al 150%. Cobertura de desfiles de carros alegóricos, eventos masivos (1.5 millones de asistentes) y pirotecnia. Puestos de socorro cada 200m en rutas de desfile. Coordinación con Cruz Roja, Protección Civil y servicios médicos privados.",
    categoria: "eventos"
  }
];

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ INFRAESTRUCTURA CRÍTICA Y CONVENIOS                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const INFRAESTRUCTURA_VERACRUZ = {
  hospitales: [
    { nombre: "Hospital Regional de Alta Especialidad de Veracruz", tipo: "Público", nivel: "Tercer nivel", camas: 200, trauma: true, quemados: true, descompresion: true },
    { nombre: "IMSS HGZ No. 71 Veracruz", tipo: "Público", nivel: "Segundo nivel", camas: 250 },
    { nombre: "Hospital Regional de Coatzacoalcos", tipo: "Público", nivel: "Segundo nivel", camas: 180, toxicologia: true },
    { nombre: "Hospital PEMEX Minatitlán", tipo: "PEMEX", nivel: "Segundo nivel", camas: 120, quemados: true },
    { nombre: "Hospital Naval de Veracruz", tipo: "SEMAR", nivel: "Segundo nivel", camas: 80, camaraHiperbarica: true },
    { nombre: "Hospital Español de Veracruz", tipo: "Privado", nivel: "Alta especialidad" }
  ],

  puertos: PUERTOS_VERACRUZ,

  aeropuertos: [
    { nombre: "Aeropuerto Internacional de Veracruz", codigo: "VER", pasajeros: "1.8M/año", ssei: true },
    { nombre: "Aeropuerto Nacional de Minatitlán", codigo: "MTT", pasajeros: "150K/año", ssei: true }
  ],

  carreteras: [
    { nombre: "Autopista Veracruz-Xalapa", trafico: "35,000 veh/día", riesgo: "Alto - neblina, curvas" },
    { nombre: "Autopista Veracruz-Cardel-Poza Rica", trafico: "20,000 veh/día", riesgo: "Medio" },
    { nombre: "Carretera Coatzacoalcos-Villahermosa", trafico: "15,000 veh/día", riesgo: "Alto - tráfico pesado PEMEX" },
    { nombre: "Autopista México-Veracruz (150D)", trafico: "25,000 veh/día", riesgo: "Alto - Cumbres de Maltrata" }
  ],

  convenios: [
    { institucion: "PEMEX", tipo: "Coordinación emergencias petroleras", alcance: "Refinería, petroquímicas, terminales", vigente: true },
    { institucion: "SEMAR Sector Naval Veracruz", tipo: "Rescate marítimo coordinado", alcance: "Puertos y aguas territoriales", vigente: true },
    { institucion: "API Puerto Veracruz", tipo: "Emergencias portuarias", alcance: "Muelles, rada, canales", vigente: true },
    { institucion: "CONAFOR", tipo: "Incendios forestales", alcance: "Sierra y Tuxtlas", vigente: true },
    { institucion: "INAH", tipo: "Protección patrimonio", alcance: "El Tajín y sitios arqueológicos", vigente: true },
    { institucion: "SMN/CONAGUA", tipo: "Alertas hidrometeorológicas", alcance: "Todo el estado", vigente: true }
  ]
};

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ ESTACIONES DE BOMBEROS - 28 ESTACIONES CON DATOS COMPLETOS                                               ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export const estacionesVeracruz: Estacion[] = [
  // ═══ ZONA METROPOLITANA PUERTO VERACRUZ ═══
  {
    nombre: "Estación Central de Bomberos Puerto Veracruz",
    slug: "estacion-central-puerto-veracruz",
    direccion: "Av. Ignacio Zaragoza 1000, Centro, Veracruz, Ver.",
    coordenadas: { lat: 19.1910, lng: -96.1533 },
    telefono: "(229) 932-0202",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios estructurales",
      "Combate de incendios portuarios",
      "Rescate marítimo coordinado SEMAR",
      "Atención pre-hospitalaria avanzada",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias buques en puerto",
      "Coordinación estatal de emergencias",
      "Capacitación y certificación"
    ],
    equipamiento: [
      "5 Autobombas urbanas",
      "1 Escalera telescópica 32m",
      "2 Lanchas rescate marítimo",
      "3 Unidades de rescate",
      "4 Ambulancias SVAA",
      "1 Unidad de mando móvil",
      "1 Unidad HAZMAT básica",
      "Equipo buceo rescate"
    ],
    personal: 130,
    copiasActa: true,
    zona: "Zona Metropolitana Puerto Veracruz",
    ciudad: 'Veracruz Centro',

    municipio: 'Veracruz Centro',

    municipiosCubiertos: ["Veracruz Centro", "Zona portuaria", "Centro histórico", "San Juan de Ulúa"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de Veracruz. Cobertura del puerto comercial más importante de México (24 millones de toneladas anuales). Coordinación permanente con SEMAR para emergencias marítimas. Centro de mando estatal. Atención de emergencias en buques, muelles y fortaleza de San Juan de Ulúa.",
    tiempoRespuesta: "5-7 minutos zona centro y puerto",
    sitioWeb: "https://veracruz.gob.mx/bomberos",
    caracteristicasEspeciales: ["Estación central estatal", "Puerto comercial #1 México", "Coordinación SEMAR", "Rescate marítimo", "San Juan de Ulúa"]
  },
  {
    nombre: "Estación de Bomberos Boca del Río",
    slug: "estacion-bomberos-boca-del-rio",
    direccion: "Blvd. Adolfo Ruiz Cortines 3500, Costa de Oro, Boca del Río, Ver.",
    coordenadas: { lat: 19.1167, lng: -96.1167 },
    telefono: "(229) 935-5050",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático playas",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Emergencias zona hotelera",
      "Cobertura eventos masivos"
    ],
    equipamiento: [
      "3 Autobombas",
      "2 Unidades rescate acuático",
      "2 Unidades rescate",
      "3 Ambulancias",
      "Motos acuáticas rescate"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Zona Metropolitana Puerto Veracruz",
    ciudad: 'Boca del Río',

    municipio: 'Boca del Río',

    municipiosCubiertos: ["Boca del Río", "Costa de Oro", "Zona hotelera", "Playas"],
    descripcion: "Cobertura de la zona turística y hotelera de Boca del Río. Rescate acuático especializado en playas de alta afluencia turística. Cobertura de eventos masivos en World Trade Center y zona de espectáculos.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Rescate acuático", "Zona hotelera", "Playas turísticas", "Eventos masivos"]
  },
  {
    nombre: "Estación de Bomberos Carnaval Veracruz",
    slug: "estacion-bomberos-carnaval-veracruz",
    direccion: "Blvd. Manuel Ávila Camacho 1200, Zona Centro, Veracruz, Ver.",
    coordenadas: { lat: 19.1834, lng: -96.1456 },
    telefono: "(229) 931-3030",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Cobertura desfiles Carnaval",
      "Emergencias pirotecnia",
      "Atención pre-hospitalaria",
      "Emergencias eventos masivos"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate eventos",
      "2 Ambulancias",
      "Equipo contra incendios pirotecnia"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Metropolitana Puerto Veracruz",
    ciudad: 'Zona Malecón',

    municipio: 'Zona Malecón',

    municipiosCubiertos: ["Zona Malecón", "Ruta Carnaval", "Centro histórico"],
    descripcion: "Estación estratégica para cobertura del Carnaval de Veracruz (1.5 millones de asistentes). Especialización en emergencias de eventos masivos, carros alegóricos y pirotecnia. Reforzada al 150% durante temporada de carnaval.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Carnaval de Veracruz", "1.5M asistentes", "Pirotecnia", "Eventos masivos"]
  },
  {
    nombre: "Estación de Bomberos Veracruz Norte",
    slug: "estacion-bomberos-veracruz-norte",
    direccion: "Av. Rafael Cuervo 500, Floresta, Veracruz, Ver.",
    coordenadas: { lat: 19.2134, lng: -96.1789 },
    telefono: "(229) 937-4040",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias industriales ligeras"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Zona Metropolitana Puerto Veracruz",
    ciudad: 'Veracruz Norte',

    municipio: 'Veracruz Norte',

    municipiosCubiertos: ["Veracruz Norte", "Floresta", "Las Bajadas", "Zona industrial ligera"],
    descripcion: "Cobertura de la zona norte de Veracruz, incluyendo fraccionamientos populares y zona industrial ligera. Apoyo a estación central para emergencias mayores.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Zona residencial", "Industrial ligera"]
  },
  {
    nombre: "Estación de Bomberos Medellín-Alvarado",
    slug: "estacion-bomberos-medellin-alvarado",
    direccion: "Carretera Veracruz-Alvarado km 15, Medellín, Ver.",
    coordenadas: { lat: 19.0534, lng: -96.1523 },
    telefono: "(229) 938-2020",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático río Jamapa",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate acuático",
      "1 Ambulancia 4x4"
    ],
    personal: 20,
    copiasActa: true,
    zona: "Zona Metropolitana Puerto Veracruz",
    ciudad: 'Medellín',

    municipio: 'Medellín',

    municipiosCubiertos: ["Medellín", "Alvarado acceso", "Zona rural costera"],
    descripcion: "Cobertura de la zona sur del área metropolitana. Rescate acuático en desembocadura del río Jamapa. Apoyo para zona agrícola y pesquera.",
    tiempoRespuesta: "10-15 minutos",
    caracteristicasEspeciales: ["Río Jamapa", "Zona pesquera", "Rural costera"]
  },

  // ═══ ZONA METROPOLITANA XALAPA ═══
  {
    nombre: "Estación Central de Bomberos Xalapa",
    slug: "estacion-central-xalapa",
    direccion: "Av. Lázaro Cárdenas 500, Centro, Xalapa, Ver.",
    coordenadas: { lat: 19.5438, lng: -96.9102 },
    telefono: "(228) 812-4545",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano avanzado",
      "Atención pre-hospitalaria avanzada",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en altura",
      "Coordinación regional zona centro"
    ],
    equipamiento: [
      "4 Autobombas",
      "1 Escalera telescópica 24m",
      "2 Unidades de rescate",
      "3 Ambulancias SVAA",
      "1 Unidad de mando"
    ],
    personal: 85,
    copiasActa: true,
    zona: "Zona Metropolitana Xalapa",
    ciudad: 'Xalapa Centro',

    municipio: 'Xalapa Centro',

    municipiosCubiertos: ["Xalapa Centro", "Zona universitaria", "Centros comerciales", "Gobierno estatal"],
    descripcion: "Estación central de la capital del estado. Cobertura del centro histórico, zona universitaria (UV, ITESM), centros comerciales y edificios de gobierno estatal. Coordinación regional para la zona montañosa del centro de Veracruz.",
    tiempoRespuesta: "6-8 minutos zona urbana",
    sitioWeb: "https://xalapa.gob.mx/bomberos",
    caracteristicasEspeciales: ["Capital estatal", "Zona universitaria", "Gobierno estatal", "Centro histórico"]
  },
  {
    nombre: "Estación de Bomberos Xalapa Sur",
    slug: "estacion-bomberos-xalapa-sur",
    direccion: "Av. Américas 1200, Jardines de las Ánimas, Xalapa, Ver.",
    coordenadas: { lat: 19.5012, lng: -96.8934 },
    telefono: "(228) 815-6060",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias residenciales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Zona Metropolitana Xalapa",
    ciudad: 'Xalapa Sur',

    municipio: 'Xalapa Sur',

    municipiosCubiertos: ["Xalapa Sur", "Ánimas", "Sumidero", "Zona residencial sur"],
    descripcion: "Cobertura de la zona sur de Xalapa, incluyendo fraccionamientos residenciales y acceso a la autopista Xalapa-Veracruz.",
    tiempoRespuesta: "7-12 minutos",
    caracteristicasEspeciales: ["Zona residencial", "Acceso autopista"]
  },
  {
    nombre: "Estación de Bomberos Coatepec",
    slug: "estacion-bomberos-coatepec",
    direccion: "Av. Constitución 200, Centro, Coatepec, Ver.",
    coordenadas: { lat: 19.4567, lng: -96.9612 },
    telefono: "(228) 816-2020",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate básico",
      "Atención pre-hospitalaria",
      "Emergencias zona cafetalera"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate 4x4",
      "1 Ambulancia"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Zona Metropolitana Xalapa",
    ciudad: 'Coatepec',

    municipio: 'Coatepec',

    municipiosCubiertos: ["Coatepec", "Zona cafetalera", "Xico acceso"],
    descripcion: "Cobertura del Pueblo Mágico de Coatepec. Atención de emergencias en zona cafetalera y acceso a Xico. Apoyo de Xalapa para emergencias mayores.",
    tiempoRespuesta: "10-15 minutos",
    caracteristicasEspeciales: ["Pueblo Mágico", "Zona cafetalera", "Turismo"]
  },
  {
    nombre: "Estación de Bomberos Banderilla",
    slug: "estacion-bomberos-banderilla",
    direccion: "Av. Hidalgo 50, Centro, Banderilla, Ver.",
    coordenadas: { lat: 19.5912, lng: -96.9434 },
    telefono: "(228) 818-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate básico",
      "Atención pre-hospitalaria",
      "Emergencias carreteras"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Zona Metropolitana Xalapa",
    ciudad: 'Banderilla',

    municipio: 'Banderilla',

    municipiosCubiertos: ["Banderilla", "Carretera Xalapa-Perote", "Zona norte metro"],
    descripcion: "Cobertura de Banderilla y la carretera hacia Perote. Primera respuesta para accidentes en zona de neblina frecuente.",
    tiempoRespuesta: "10-18 minutos",
    caracteristicasEspeciales: ["Zona neblina", "Carretera Perote"]
  },

  // ═══ ZONA PETROQUÍMICA COATZACOALCOS ═══
  {
    nombre: "Estación HAZMAT Coatzacoalcos",
    slug: "estacion-hazmat-coatzacoalcos",
    direccion: "Av. Universidad km 5, Zona Industrial, Coatzacoalcos, Ver.",
    coordenadas: { lat: 18.1345, lng: -94.4789 },
    telefono: "(921) 211-5000",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Respuesta HAZMAT Nivel A completa",
      "Combate incendios petroquímicos",
      "Emergencias gases tóxicos",
      "Descontaminación masiva",
      "Coordinación PEMEX permanente",
      "Rescate espacios confinados",
      "Control derrames químicos",
      "Atención pre-hospitalaria toxicológica"
    ],
    equipamiento: [
      "4 Autobombas industriales alta capacidad",
      "3 Unidades HAZMAT Nivel A completas",
      "2 Unidades espuma AFFF/AR-AFFF alta expansión",
      "1 Unidad descontaminación masiva (100 personas/hora)",
      "5 Ambulancias SVAA con antídotos",
      "Trajes encapsulados Nivel A (24 sets)",
      "Detectores multigas calibrados diario",
      "Cañones espuma alta capacidad",
      "1 Unidad mando con comunicación satelital"
    ],
    personal: 120,
    copiasActa: false,
    zona: "Zona Petroquímica Coatzacoalcos",
    ciudad: 'Complejo Pajaritos',

    municipio: 'Complejo Pajaritos',

    municipiosCubiertos: ["Complejo Pajaritos", "Complejo Cangrejera", "Complejo Morelos", "Terminal Marítima", "Puerto Coatzacoalcos"],
    descripcion: "Estación especializada HAZMAT más importante del sureste mexicano. Cobertura de los 3 complejos petroquímicos más grandes de Latinoamérica y puerto petrolero de Coatzacoalcos. Personal certificado API 2021 e ISO 45001. Capacidad de respuesta a nubes tóxicas (cloro, amoniaco, H2S), incendios de hidrocarburos clase B y explosiones petroquímicas. Descontaminación masiva para hasta 100 personas/hora. Coordinación 24/7 con brigadas PEMEX y SEMAR para derrames marítimos.",
    tiempoRespuesta: "5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel A máximo", "3 complejos petroquímicos", "API 2021", "Descontaminación masiva", "Puerto petrolero", "Bilingüe 24/7"]
  },
  {
    nombre: "Estación HAZMAT Minatitlán",
    slug: "estacion-hazmat-minatitlan",
    direccion: "Av. Refinería s/n, Zona Refinería, Minatitlán, Ver.",
    coordenadas: { lat: 17.9912, lng: -94.5234 },
    telefono: "(922) 225-3030",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés básico"],
    servicios: [
      "Respuesta HAZMAT Nivel A refinería",
      "Combate incendios tanques almacenamiento",
      "Emergencias proceso refinación",
      "Control fugas H2S",
      "Descontaminación",
      "Rescate industrial",
      "Coordinación brigada PEMEX refinería"
    ],
    equipamiento: [
      "3 Autobombas industriales",
      "2 Unidades HAZMAT Nivel A",
      "2 Unidades espuma AFFF",
      "1 Unidad descontaminación",
      "3 Ambulancias SVAA",
      "Monitores espuma tanques",
      "Trajes proximidad (12 sets)"
    ],
    personal: 85,
    copiasActa: false,
    zona: "Zona Petroquímica Coatzacoalcos",
    ciudad: 'Refinería Minatitlán',

    municipio: 'Refinería Minatitlán',

    municipiosCubiertos: ["Refinería Minatitlán", "Parques tanques", "Zona industrial Minatitlán"],
    descripcion: "Estación especializada para la Refinería Ing. Antonio Dovalí Jaime (150,000 barriles/día). Capacidad de respuesta a incendios de tanques de almacenamiento, fugas de H2S y emergencias de proceso. Coordinación permanente con brigada interna PEMEX. Monitores de espuma para tanques hasta 80,000 barriles.",
    tiempoRespuesta: "5 minutos refinería",
    caracteristicasEspeciales: ["Refinería PEMEX", "150K barriles/día", "HAZMAT Nivel A", "Tanques almacenamiento", "H2S"]
  },
  {
    nombre: "Estación de Bomberos Coatzacoalcos Centro",
    nombreCorto: "Bomberos Coatzacoalcos",
    slug: "estacion-bomberos-coatzacoalcos-centro",
    direccion: "Av. Ignacio Zaragoza 500, Centro, Coatzacoalcos, Ver.",
    coordenadas: { lat: 18.1456, lng: -94.4356 },
    telefono: "(921) 212-2020",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Control fugas gas doméstico"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 45,
    copiasActa: true,
    zona: "Zona Petroquímica Coatzacoalcos",
    ciudad: 'Coatzacoalcos',
    municipio: 'Coatzacoalcos',

    municipiosCubiertos: ["Coatzacoalcos Centro", "Zona comercial", "Colonias residenciales"],
    descripcion: "Cobertura de la zona urbana de Coatzacoalcos. Atención de emergencias estructurales y residenciales. Apoyo a estación HAZMAT para evacuaciones civiles en caso de emergencia industrial.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Zona urbana", "Apoyo evacuaciones"]
  },
  {
    nombre: "Estación de Bomberos Nanchital",
    slug: "estacion-bomberos-nanchital",
    direccion: "Calle PEMEX s/n, Nanchital, Ver.",
    coordenadas: { lat: 18.0612, lng: -94.4123 },
    telefono: "(921) 213-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Apoyo HAZMAT industrial",
      "Atención pre-hospitalaria",
      "Emergencias comunidades petroleras"
    ],
    equipamiento: [
      "1 Autobomba industrial",
      "1 Unidad HAZMAT apoyo",
      "1 Ambulancia"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Zona Petroquímica Coatzacoalcos",
    ciudad: 'Nanchital',

    municipio: 'Nanchital',

    municipiosCubiertos: ["Nanchital", "Comunidades petroleras", "Zona sur Coatzacoalcos"],
    descripcion: "Cobertura de Nanchital y comunidades de trabajadores PEMEX. Apoyo a las estaciones HAZMAT principales para emergencias industriales extendidas.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Comunidad PEMEX", "Apoyo HAZMAT"]
  },

  // ═══ ZONA POZA RICA - PAPANTLA ═══
  {
    nombre: "Estación HAZMAT Poza Rica",
    slug: "estacion-hazmat-poza-rica",
    direccion: "Av. Lázaro Cárdenas 1500, Zona Industrial, Poza Rica, Ver.",
    coordenadas: { lat: 20.5334, lng: -97.4567 },
    telefono: "(782) 823-5050",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Respuesta HAZMAT pozos petroleros",
      "Control de pozos (well control)",
      "Combate incendios industriales",
      "Emergencias H2S",
      "Atención pre-hospitalaria",
      "Rescate industrial"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT Nivel A",
      "1 Unidad control pozos",
      "2 Ambulancias",
      "Detectores H2S portátiles",
      "SCBA 60 minutos"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Zona Petrolera Poza Rica-Papantla",
    ciudad: 'Poza Rica',

    municipio: 'Poza Rica',

    municipiosCubiertos: ["Poza Rica", "Campos petroleros activos", "Tihuatlán", "Coatzintla"],
    descripcion: "Estación HAZMAT para la zona de extracción petrolera Poza Rica-Altamira. Capacidad de respuesta a emergencias de pozos petroleros, incluyendo descontrol (blowout) y fugas de H2S. Coordinación con equipos especializados de control de pozos para emergencias mayores.",
    tiempoRespuesta: "8 minutos zona industrial, 15-30 minutos campos",
    caracteristicasEspeciales: ["Pozos petroleros", "Control pozos", "H2S", "PEMEX extracción"]
  },
  {
    nombre: "Estación de Bomberos Papantla",
    slug: "estacion-bomberos-papantla",
    direccion: "Calle 20 de Noviembre 100, Centro, Papantla, Ver.",
    coordenadas: { lat: 20.4545, lng: -97.3212 },
    telefono: "(784) 842-0033",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias El Tajín UNESCO",
      "Protección patrimonio",
      "Rescate turístico",
      "Atención pre-hospitalaria",
      "Incendios forestales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad forestal 4x4",
      "1 Unidad rescate",
      "2 Ambulancias",
      "Extintores portátiles protección patrimonio"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Petrolera Poza Rica-Papantla",
    ciudad: 'Papantla Centro',

    municipio: 'Papantla Centro',

    municipiosCubiertos: ["Papantla Centro", "El Tajín UNESCO", "Zona vainilla", "Voladores"],
    descripcion: "Cobertura del Pueblo Mágico de Papantla y la zona arqueológica de El Tajín (Patrimonio UNESCO, 800,000 visitantes/año). Protocolo especial de protección de patrimonio con INAH. Cobertura de festivales de Voladores de Papantla.",
    tiempoRespuesta: "8 minutos centro, 15 minutos El Tajín",
    caracteristicasEspeciales: ["El Tajín UNESCO", "Pueblo Mágico", "Voladores Papantla", "800K visitantes"]
  },
  {
    nombre: "Estación de Bomberos Poza Rica Centro",
    slug: "estacion-bomberos-poza-rica-centro",
    direccion: "Av. Central Oriente 200, Centro, Poza Rica, Ver.",
    coordenadas: { lat: 20.5312, lng: -97.4612 },
    telefono: "(782) 822-3030",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Rescate vehicular"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Petrolera Poza Rica-Papantla",
    ciudad: 'Poza Rica Centro',

    municipio: 'Poza Rica Centro',

    municipiosCubiertos: ["Poza Rica Centro", "Zona comercial", "Colonias residenciales"],
    descripcion: "Cobertura de la zona urbana de Poza Rica. Atención de emergencias estructurales y residenciales. Apoyo a estación HAZMAT para evacuaciones.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Zona urbana", "Apoyo HAZMAT"]
  },

  // ═══ ZONA CÓRDOBA - ORIZABA ═══
  {
    nombre: "Estación Central de Bomberos Córdoba",
    slug: "estacion-central-cordoba",
    direccion: "Av. 11 Oriente 500, Centro, Córdoba, Ver.",
    coordenadas: { lat: 18.8934, lng: -96.9345 },
    telefono: "(271) 712-3030",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Rescate montaña básico",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Emergencias industriales"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Escalera 18m",
      "2 Unidades rescate",
      "3 Ambulancias"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Zona Córdoba-Orizaba",
    ciudad: 'Córdoba Centro',

    municipio: 'Córdoba Centro',

    municipiosCubiertos: ["Córdoba Centro", "Fortín", "Zona cafetalera", "Industrial ligera"],
    descripcion: "Estación central de la zona Córdoba-Orizaba. Cobertura de zona industrial, comercial y cafetalera. Coordinación regional para emergencias en zona montañosa.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Centro regional", "Zona cafetalera", "Industria"]
  },
  {
    nombre: "Estación de Bomberos Orizaba",
    slug: "estacion-bomberos-orizaba",
    direccion: "Av. Colón Oriente 800, Centro, Orizaba, Ver.",
    coordenadas: { lat: 18.8512, lng: -97.1045 },
    telefono: "(272) 726-2020",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate montaña Pico de Orizaba",
      "Rescate teleférico",
      "Atención pre-hospitalaria montaña",
      "Emergencias clima frío"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate montaña 4x4",
      "1 Unidad rescate alta montaña",
      "2 Ambulancias 4x4"
    ],
    personal: 40,
    copiasActa: true,
    zona: "Zona Córdoba-Orizaba",
    ciudad: 'Orizaba',

    municipio: 'Orizaba',

    municipiosCubiertos: ["Orizaba", "Teleférico", "Acceso Pico de Orizaba", "Pueblo Mágico"],
    descripcion: "Cobertura del Pueblo Mágico de Orizaba y acceso al Pico de Orizaba (5,636 msnm, volcán más alto de México). Rescate de montañistas y emergencias del teleférico más largo de México. Equipo para rescate en clima frío y altura.",
    tiempoRespuesta: "8 minutos ciudad, variable montaña",
    caracteristicasEspeciales: ["Pico de Orizaba 5,636m", "Teleférico", "Pueblo Mágico", "Rescate alta montaña"]
  },
  {
    nombre: "Estación de Bomberos Río Blanco",
    slug: "estacion-bomberos-rio-blanco",
    direccion: "Av. Juárez 100, Centro, Río Blanco, Ver.",
    coordenadas: { lat: 18.8356, lng: -97.1534 },
    telefono: "(272) 728-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias textiles industriales",
      "Atención pre-hospitalaria",
      "Rescate vehicular"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Zona Córdoba-Orizaba",
    ciudad: 'Río Blanco',

    municipio: 'Río Blanco',

    municipiosCubiertos: ["Río Blanco", "Zona textil", "Nogales acceso"],
    descripcion: "Cobertura de Río Blanco y zona industrial textil histórica. Apoyo a Orizaba para emergencias en zona urbana del valle.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Zona textil", "Industrial histórica"]
  },

  // ═══ ZONA NORTE - TUXPAN ═══
  {
    nombre: "Estación de Bomberos Tuxpan",
    slug: "estacion-bomberos-tuxpan",
    direccion: "Blvd. Reyes Heroles 500, Centro, Tuxpan, Ver.",
    coordenadas: { lat: 20.9545, lng: -97.4067 },
    telefono: "(783) 834-2020",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate marítimo río y puerto",
      "Emergencias portuarias",
      "Atención pre-hospitalaria",
      "Rescate acuático playas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Lancha rescate",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Norte Tuxpan-Pánuco",
    ciudad: 'Tuxpan Centro',

    municipio: 'Tuxpan Centro',

    municipiosCubiertos: ["Tuxpan Centro", "Puerto de Tuxpan", "Río Tuxpan", "Playas norte"],
    descripcion: "Cobertura del puerto de Tuxpan (8 millones toneladas/año) y zona turística del norte. Rescate en río y zona costera. Coordinación con SEMAR para emergencias marítimas.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Puerto Tuxpan", "Rescate marítimo", "Zona turística norte"]
  },
  {
    nombre: "Estación de Bomberos Álamo",
    slug: "estacion-bomberos-alamo",
    direccion: "Calle Principal s/n, Centro, Álamo Temapache, Ver.",
    coordenadas: { lat: 20.9145, lng: -97.6834 },
    telefono: "(765) 856-0022",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias citrícolas",
      "Atención pre-hospitalaria",
      "Rescate rural"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad 4x4",
      "1 Ambulancia"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Zona Norte Tuxpan-Pánuco",
    ciudad: 'Álamo Temapache',

    municipio: 'Álamo Temapache',

    municipiosCubiertos: ["Álamo Temapache", "Zona citrícola", "Comunidades rurales"],
    descripcion: "Cobertura de la zona citrícola del norte de Veracruz. Emergencias agrícolas y comunidades rurales. Apoyo a Tuxpan y Poza Rica.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Zona citrícola", "Rural"]
  },

  // ═══ ZONA LOS TUXTLAS ═══
  {
    nombre: "Estación de Bomberos San Andrés Tuxtla",
    slug: "estacion-bomberos-san-andres-tuxtla",
    direccion: "Av. Constitución 300, Centro, San Andrés Tuxtla, Ver.",
    coordenadas: { lat: 18.4512, lng: -95.2134 },
    telefono: "(294) 942-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Incendios forestales selva",
      "Rescate selva tropical",
      "Atención pre-hospitalaria",
      "Emergencias ecoturismo"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad forestal 4x4",
      "1 Unidad rescate",
      "2 Ambulancias"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Zona Los Tuxtlas",
    ciudad: 'San Andrés Tuxtla',

    municipio: 'San Andrés Tuxtla',

    municipiosCubiertos: ["San Andrés Tuxtla", "Reserva Biosfera", "Zona tabacalera", "Volcán San Martín"],
    descripcion: "Cobertura de la Reserva de la Biosfera Los Tuxtlas (selva tropical húmeda) y zona tabacalera. Incendios forestales en selva y rescate de ecoturistas. Coordinación con CONAFOR.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Reserva Biosfera", "Selva tropical", "Volcán San Martín", "Ecoturismo"]
  },
  {
    nombre: "Estación de Bomberos Catemaco",
    slug: "estacion-bomberos-catemaco",
    direccion: "Av. Malecón 100, Centro, Catemaco, Ver.",
    coordenadas: { lat: 18.4234, lng: -95.1145 },
    telefono: "(294) 943-0505",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático lago",
      "Emergencias turísticas",
      "Atención pre-hospitalaria"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Lancha rescate lago",
      "1 Ambulancia"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Zona Los Tuxtlas",
    ciudad: 'Catemaco',

    municipio: 'Catemaco',

    municipiosCubiertos: ["Catemaco", "Lago de Catemaco", "Zona turística mística"],
    descripcion: "Cobertura del Lago de Catemaco y zona turística. Rescate acuático en el lago. Atención de emergencias durante festivales y temporada alta de turismo místico.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Lago Catemaco", "Turismo místico", "Rescate lacustre"]
  },

  // ═══ ZONA PAPALOAPAN (INUNDABLE) ═══
  {
    nombre: "Estación de Bomberos Tierra Blanca",
    slug: "estacion-bomberos-tierra-blanca",
    direccion: "Av. Independencia 400, Centro, Tierra Blanca, Ver.",
    coordenadas: { lat: 18.4534, lng: -96.3445 },
    telefono: "(274) 743-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate inundaciones",
      "Evacuaciones masivas",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "2 Autobombas",
      "2 Lanchas rescate aguas rápidas",
      "1 Unidad rescate 4x4",
      "2 Ambulancias 4x4",
      "Motores fuera de borda"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Papaloapan",
    ciudad: 'Tierra Blanca',

    municipio: 'Tierra Blanca',

    municipiosCubiertos: ["Tierra Blanca", "Cuenca baja Papaloapan", "Zona azucarera"],
    descripcion: "Estación clave para zona inundable de la cuenca baja del Papaloapan. Especialización en rescate durante inundaciones masivas (frecuentes en temporada de lluvias y huracanes). Evacuaciones y apoyo a refugios.",
    tiempoRespuesta: "10-15 minutos",
    caracteristicasEspeciales: ["Zona inundable crítica", "Rescate inundaciones", "Evacuaciones masivas"]
  },
  {
    nombre: "Estación de Bomberos Cosamaloapan",
    slug: "estacion-bomberos-cosamaloapan",
    direccion: "Calle Hidalgo 200, Centro, Cosamaloapan, Ver.",
    coordenadas: { lat: 18.3645, lng: -95.8012 },
    telefono: "(288) 882-0808",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate inundaciones río Papaloapan",
      "Evacuaciones",
      "Atención pre-hospitalaria"
    ],
    equipamiento: [
      "1 Autobomba",
      "2 Lanchas rescate",
      "1 Ambulancia 4x4"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Zona Papaloapan",
    ciudad: 'Cosamaloapan',

    municipio: 'Cosamaloapan',

    municipiosCubiertos: ["Cosamaloapan", "Río Papaloapan", "Zona ganadera"],
    descripcion: "Cobertura de Cosamaloapan y río Papaloapan. Rescate durante crecidas del río y temporada de huracanes. Zona crítica de inundaciones.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Río Papaloapan", "Zona inundable", "Ganadería"]
  },
  {
    nombre: "Estación de Bomberos Tlacotalpan",
    slug: "estacion-bomberos-tlacotalpan",
    direccion: "Calle Carranza 50, Centro, Tlacotalpan, Ver.",
    coordenadas: { lat: 18.6134, lng: -95.6634 },
    telefono: "(288) 884-0202",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Protección patrimonio colonial",
      "Rescate río Papaloapan",
      "Emergencias Candelaria"
    ],
    equipamiento: [
      "1 Autobomba ligera",
      "1 Lancha rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Zona Papaloapan",
    ciudad: 'Tlacotalpan',

    municipio: 'Tlacotalpan',

    municipiosCubiertos: ["Tlacotalpan", "Patrimonio Colonial", "Río Papaloapan"],
    descripcion: "Cobertura del pueblo colonial de Tlacotalpan (arquitectura virreinal). Protección de patrimonio y atención durante fiestas de la Candelaria (alta afluencia). Rescate en río Papaloapan.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Patrimonio colonial", "Candelaria", "Río Papaloapan"]
  }
];

// ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════╗
// ║ FUNCIONES DE UTILIDAD AVANZADAS                                                                          ║
// ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════╝

export function getEstacionesPorZona(zona: string): Estacion[] {
  return estacionesVeracruz.filter(e => e.zona === zona);
}

export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesVeracruz.filter(e =>
    e.nombre.toLowerCase().includes("hazmat") ||
    e.servicios?.some(s => s.toLowerCase().includes("hazmat"))
  );
}

export function getEstacionesMaritimas(): Estacion[] {
  return estacionesVeracruz.filter(e =>
    e.servicios?.some(s =>
      s.toLowerCase().includes("marítimo") ||
      s.toLowerCase().includes("puerto") ||
      s.toLowerCase().includes("buque")
    )
  );
}

export function getEstacionesPetroleras(): Estacion[] {
  return estacionesVeracruz.filter(e =>
    e.caracteristicasEspeciales?.some(c =>
      c.toLowerCase().includes("pemex") ||
      c.toLowerCase().includes("refinería") ||
      c.toLowerCase().includes("petroquímic") ||
      c.toLowerCase().includes("pozos")
    )
  );
}

export function getEstacionesInundaciones(): Estacion[] {
  return estacionesVeracruz.filter(e =>
    e.servicios?.some(s => s.toLowerCase().includes("inundacion")) ||
    e.zona === "Zona Papaloapan"
  );
}

export function getAlertaHuracanActual(): AlertaHuracanVeracruz | null {
  const mes = new Date().getMonth();
  if (mes >= 5 && mes <= 10) {
    return {
      categoria: "vigilancia",
      colorSemaforo: "verde",
      accionesRequeridas: ["Monitoreo continuo", "Revisión equipos"],
      personalMinimo: 100,
      recursosPreposicionados: ["Vehículos 4x4 revisados", "Combustible reserva"],
      refugiosActivados: 0,
      coordinacionInterinstitucional: ["SMN", "Protección Civil"]
    };
  }
  return null;
}

export function getInstalacionesPEMEX() {
  return INDUSTRIA_PETROLERA_VERACRUZ.instalaciones;
}

export function getPuertos() {
  return PUERTOS_VERACRUZ;
}

export function getProtocoloPetrolero(codigo: string) {
  return PROTOCOLOS_VERACRUZ.find(p => p.codigo === codigo);
}

export function getEstacionesBilingues(): Estacion[] {
  return estacionesVeracruz.filter(e => e.idiomas?.includes("Inglés"));
}

export function generarInterlinking() {
  return {
    estados: VERACRUZ_SEO.interlinking.estadosVecinos,
    productos: VERACRUZ_SEO.interlinking.productosRelacionados
  };
}

export function getComplejosPetroquimicos() {
  return INDUSTRIA_PETROLERA_VERACRUZ.instalaciones.filter(i =>
    i.tipo === 'petroquimica' || i.tipo === 'refineria'
  );
}

export function getEstadisticasPuertos() {
  return {
    puertos: PUERTOS_VERACRUZ,
    total: PUERTOS_VERACRUZ.length,
    comerciales: PUERTOS_VERACRUZ.filter(p => p.tipo === 'comercial').length,
    petroleros: PUERTOS_VERACRUZ.filter(p => p.tipo === 'petrolero').length
  };
}

export function getAtraccionesTuristicas() {
  return TURISMO_VERACRUZ.patrimonio.unesco;
}

export function getPueblosMagicos() {
  return TURISMO_VERACRUZ.pueblosMagicos;
}

export function getEstadisticasIndustria() {
  return INDUSTRIA_PETROLERA_VERACRUZ.resumen;
}

// ─── FUNCIONES AUXILIARES ESTÁNDAR (DirectorioEstadoLayout) ─────────────────

export function getMunicipios(): string[] {
  // Usar zona como agrupación ya que las estaciones de Veracruz usan zonas en lugar de municipios individuales
  return [...new Set(estacionesVeracruz.map(e => e.zona).filter((z): z is string => !!z))];
}

export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesVeracruz.find(e => e.slug === slug);
}

export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return estacionesVeracruz.slice(0, limit);

  return estacionesVeracruz
    .filter(e => e.slug !== slug)
    .sort((a, b) => {
      const distA = Math.abs(a.coordenadas.lat - estacion.coordenadas.lat) +
                    Math.abs(a.coordenadas.lng - estacion.coordenadas.lng);
      const distB = Math.abs(b.coordenadas.lat - estacion.coordenadas.lat) +
                    Math.abs(b.coordenadas.lng - estacion.coordenadas.lng);
      return distA - distB;
    })
    .slice(0, limit);
}

export default estacionesVeracruz;
