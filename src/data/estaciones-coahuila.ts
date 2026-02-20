/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  BOMBEROS DE COAHUILA DE ZARAGOZA (COAH) - DIRECTORIO OFICIAL             ║
 * ║  Sistema de Información Premium para SEO y Marketing Digital              ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Capital: Saltillo | Código: COAH | Región: Noreste de México             ║
 * ║  24 Estaciones | 1,180 Bomberos | Cobertura Estatal Completa              ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                    PERFIL GEOGRÁFICO Y DEMOGRÁFICO                         │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  Superficie:        151,563 km² (3er lugar nacional)                       │
 * │  Población:         3.2 millones de habitantes                             │
 * │  Municipios:        38 municipios                                          │
 * │  Frontera EE.UU.:   512 km con Texas                                       │
 * │  Densidad:          21.1 hab/km²                                           │
 * │  PIB Estatal:       4.1% del PIB nacional (6° economía de México)          │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                         SECTORES ECONÓMICOS CLAVE                          │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  🚗 AUTOMOTRIZ       │ Saltillo-Ramos Arizpe: GM, Chrysler, Daimler        │
 * │  🔩 SIDERÚRGICA      │ Monclova: AHMSA (mayor acería de México)            │
 * │  ⚫ MINERÍA CARBÓN   │ Región Carbonífera: 95% producción nacional         │
 * │  🍷 VITIVINÍCOLA     │ Parras: Casa Madero (viñedo más antiguo América)    │
 * │  🥛 AGROINDUSTRIA    │ La Laguna: principal cuenca lechera del país        │
 * │  🏭 MAQUILADORA      │ Frontera: Piedras Negras, Acuña                     │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                    PATRIMONIO Y TURISMO                                    │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  🏛️ Pueblos Mágicos: │ Parras de la Fuente, Cuatro Ciénegas, Arteaga,     │
 * │                       │ Viesca, Candela, Guerrero                          │
 * │  🌿 Áreas Protegidas: │ Cuatro Ciénegas (especies endémicas únicas),       │
 * │                       │ Sierra de Arteaga, Maderas del Carmen              │
 * │  🏔️ Geografía:        │ Desierto Chihuahuense, Sierra Madre Oriental       │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                    RIESGOS Y ESPECIALIDADES BOMBERILES                     │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  ⚠️ HAZMAT Industrial │ Siderúrgicas, automotrices, químicas               │
 * │  ⛏️ Rescate Minero    │ Minas de carbón activas, riesgo de colapso         │
 * │  🔥 Incendios Forest. │ Sierra de Arteaga, bosques de coníferas            │
 * │  🌡️ Calor Extremo     │ +45°C en verano, deshidratación, golpe de calor   │
 * │  🌊 Inundaciones      │ Temporada de lluvias en La Laguna                  │
 * │  🚛 Carreteros        │ Autopistas federales de alto tránsito              │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ════════════════════════════════════════════════════════════════════════════
 *  DISTRIBUCIÓN DE 24 ESTACIONES POR ZONA GEOGRÁFICA
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ZONA METROPOLITANA SALTILLO (Capital).............. 5 estaciones
 *  │ Central Saltillo │ Norte │ Sur │ Ramos Arizpe │ Arteaga
 *
 *  ZONA METROPOLITANA LA LAGUNA (Torreón)............ 5 estaciones
 *  │ Central Torreón │ Norte │ Industrial │ Matamoros │ San Pedro
 *
 *  ZONA CENTRO (Monclova - Acero).................... 4 estaciones
 *  │ Central Monclova │ Frontera │ Castaños │ Cuatro Ciénegas
 *
 *  ZONA CARBONÍFERA (Minería)........................ 4 estaciones
 *  │ Sabinas │ Nueva Rosita │ Múzquiz │ San Juan de Sabinas
 *
 *  ZONA FRONTERIZA (Texas)........................... 4 estaciones
 *  │ Piedras Negras │ Acuña │ Allende │ Nava
 *
 *  ZONA SUR (Vitivinícola)........................... 2 estaciones
 *  │ Parras de la Fuente │ General Cepeda
 *
 * ════════════════════════════════════════════════════════════════════════════
 */

import type { Estacion } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES SEO ULTRA-PREMIUM - COAHUILA
// ═══════════════════════════════════════════════════════════════════════════

export const COAHUILA_SEO = {
  // ─── Información Básica del Estado ───
  estado: 'Coahuila de Zaragoza',
  estadoCorto: 'Coahuila',
  codigo: 'COAH',
  capital: 'Saltillo',
  gentilicio: 'coahuilense',
  region: 'Noreste de México',
  lema: 'Unidad, Trabajo y Progreso',

  // ─── Datos Demográficos y Geográficos ───
  poblacion: 3_218_720,
  superficie_km2: 151_563,
  densidad: 21.1,
  municipios: 38,
  frontera_km: 512,
  colindancias: ['Texas (EE.UU.)', 'Nuevo León', 'Zacatecas', 'Durango', 'Chihuahua', 'San Luis Potosí'],

  // ─── Datos Económicos ───
  pib_porcentaje_nacional: 4.1,
  ranking_economico: 6,
  sectores_principales: ['Automotriz', 'Siderúrgica', 'Minería de carbón', 'Agroindustria', 'Maquiladora'],

  // ─── Turismo ───
  visitantes_anuales: 1_800_000,
  derrama_economica_mdd: 980,

  // ─── Paleta de Colores (Acero/Industrial) ───
  colores: {
    primario: 'rgb(71, 85, 105)',      // Slate-600
    secundario: 'rgb(100, 116, 139)',   // Slate-500
    claro: 'rgb(226, 232, 240)',        // Slate-200
    acento: 'rgb(14, 165, 233)',        // Sky-500 (contraste)
    oscuro: 'rgb(30, 41, 59)',          // Slate-800
  },

  // ─── Keywords SEO por Categoría ───
  keywords: {
    principales: [
      'bomberos coahuila',
      'bomberos saltillo',
      'estaciones de bomberos coahuila',
      'emergencias coahuila mexico',
      'cuerpo de bomberos coahuila',
      'heroico cuerpo de bomberos saltillo',
      'proteccion civil coahuila',
      'servicios de emergencia coahuila',
      '911 coahuila',
      'bomberos torreon coahuila',
    ],

    saltillo: [
      'bomberos saltillo coahuila',
      'bomberos capital coahuila',
      'emergencias saltillo',
      'cuerpo de bomberos saltillo',
      'proteccion civil saltillo',
      'bomberos ramos arizpe',
      'bomberos zona automotriz saltillo',
    ],

    torreon: [
      'bomberos torreon',
      'bomberos la laguna',
      'emergencias torreon coahuila',
      'bomberos comarca lagunera',
      'proteccion civil torreon',
      'bomberos zona industrial torreon',
    ],

    monclova: [
      'bomberos monclova',
      'bomberos zona acerera',
      'emergencias monclova coahuila',
      'bomberos ahmsa',
      'bomberos siderurgica monclova',
      'proteccion civil monclova',
    ],

    frontera: [
      'bomberos piedras negras',
      'bomberos acuna coahuila',
      'bomberos frontera texas',
      'emergencias frontera coahuila',
      'bomberos eagle pass',
      'bomberos del rio texas',
    ],

    carboniferos: [
      'bomberos sabinas coahuila',
      'bomberos zona carbonifera',
      'rescate minero coahuila',
      'emergencias minas carbon',
      'bomberos muzquiz',
      'bomberos nueva rosita',
    ],

    industriales: [
      'bomberos zona industrial coahuila',
      'bomberos automotriz saltillo',
      'bomberos siderurgica',
      'emergencias industriales coahuila',
      'hazmat coahuila',
      'bomberos maquiladoras coahuila',
    ],

    turisticos: [
      'bomberos parras de la fuente',
      'bomberos cuatro cienegas',
      'emergencias turismo coahuila',
      'bomberos pueblo magico coahuila',
      'seguridad turistica coahuila',
      'bomberos arteaga coahuila',
    ],
  },

  // ─── Pueblos Mágicos ───
  pueblosMagicos: [
    {
      nombre: 'Parras de la Fuente',
      municipio: 'Parras',
      año_designacion: 2004,
      atractivos: ['Casa Madero (viñedo más antiguo de América)', 'Arquitectura colonial', 'Ruta del Vino'],
      especialidad: 'Vitivinicultura',
    },
    {
      nombre: 'Cuatro Ciénegas',
      municipio: 'Cuatro Ciénegas',
      año_designacion: 2012,
      atractivos: ['Pozas de aguas termales', 'Dunas de yeso', 'Especies endémicas únicas'],
      especialidad: 'Ecoturismo',
    },
    {
      nombre: 'Arteaga',
      municipio: 'Arteaga',
      año_designacion: 2012,
      atractivos: ['Bosques de coníferas', 'Nieve en invierno', 'Deportes de montaña'],
      especialidad: 'Turismo de montaña',
    },
    {
      nombre: 'Viesca',
      municipio: 'Viesca',
      año_designacion: 2012,
      atractivos: ['Dunas de Bilbao', 'Arquitectura histórica', 'Laguna de Mayrán'],
      especialidad: 'Turismo de desierto',
    },
    {
      nombre: 'Candela',
      municipio: 'Candela',
      año_designacion: 2015,
      atractivos: ['Presa de la Amistad', 'Cañón de Boquillas', 'Historia colonial'],
      especialidad: 'Turismo de aventura',
    },
    {
      nombre: 'Guerrero',
      municipio: 'Guerrero',
      año_designacion: 2018,
      atractivos: ['Misiones coloniales', 'Arquitectura histórica', 'Gastronomía'],
      especialidad: 'Turismo cultural',
    },
  ],

  // ─── Áreas Naturales Protegidas ───
  areasProtegidas: [
    {
      nombre: 'Área de Protección de Flora y Fauna Cuatro Ciénegas',
      tipo: 'APFF',
      superficie_ha: 84_347,
      importancia: 'Especies endémicas únicas en el mundo, estromatolitos vivos',
    },
    {
      nombre: 'Área de Protección de Flora y Fauna Maderas del Carmen',
      tipo: 'APFF',
      superficie_ha: 208_381,
      importancia: 'Corredor biológico con Big Bend National Park (Texas)',
    },
    {
      nombre: 'Parque Nacional Los Novillos',
      tipo: 'Parque Nacional',
      superficie_ha: 42,
      importancia: 'Ecosistemas de montaña cerca de Saltillo',
    },
  ],

  // ─── Industrias Principales ───
  industrias: {
    automotriz: {
      ubicacion: 'Saltillo-Ramos Arizpe',
      empresas: ['General Motors', 'Chrysler/Stellantis', 'Daimler', 'BMW', 'Toyota'],
      empleos: 85000,
      descripcion: 'Segundo clúster automotriz más grande de México',
    },
    siderurgica: {
      ubicacion: 'Monclova',
      empresas: ['AHMSA (Altos Hornos de México)', 'De Acero', 'Ternium'],
      empleos: 25000,
      descripcion: 'Mayor complejo siderúrgico integrado de México',
    },
    carbonifera: {
      ubicacion: 'Región Carbonífera (Sabinas, Múzquiz, Nueva Rosita)',
      empresas: ['MICARE', 'MIMOSA', 'Minerales de Monclova'],
      empleos: 15000,
      descripcion: '95% de la producción nacional de carbón',
    },
    lactea: {
      ubicacion: 'Comarca Lagunera',
      empresas: ['Lala', 'Alpura', 'Chilchota'],
      empleos: 45000,
      descripcion: 'Principal cuenca lechera de México',
    },
  },

  // ─── Teléfonos de Emergencia ───
  telefonos: {
    emergencias_nacional: '911',
    bomberos_saltillo: '(844) 410-7900',
    bomberos_torreon: '(871) 712-0000',
    bomberos_monclova: '(866) 633-1111',
    bomberos_piedras_negras: '(878) 782-0000',
    proteccion_civil_estatal: '(844) 411-5000',
    cruz_roja_saltillo: '(844) 414-3535',
    cruz_roja_torreon: '(871) 712-1212',
  },

  // ─── Especialidades Bomberiles por Zona ───
  especialidades: {
    automotriz: ['HAZMAT químico', 'incendios industriales', 'rescate técnico', 'fugas de pinturas y solventes'],
    siderurgica: ['incendios de metal fundido', 'rescate en altos hornos', 'HAZMAT metalúrgico', 'explosiones'],
    carbonifera: ['rescate minero', 'colapsos de mina', 'explosiones de grisú', 'incendios subterráneos'],
    fronteriza: ['coordinación binacional', 'HAZMAT comercio exterior', 'rescate vehicular internacional'],
    turistica: ['rescate en montaña', 'incendios forestales', 'emergencias en áreas protegidas'],
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// DATOS DE LAS 24 ESTACIONES DE BOMBEROS
// ═══════════════════════════════════════════════════════════════════════════

export const estacionesCoahuila: Estacion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA SALTILLO (CAPITAL) - 5 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-central-saltillo',
    nombre: 'Estación Central de Bomberos Saltillo',
    nombreCorto: 'Est. Central Saltillo',
    slug: 'estacion-central-saltillo',
    direccion: 'Blvd. Venustiano Carranza #1500, Col. República',
    ciudad: 'Saltillo',
    municipio: 'Saltillo',
    estado: 'Coahuila',
    codigoPostal: '25280',
    telefono: '(844) 410-7900',
    email: 'central@bomberossaltillo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.4260,
      lng: -100.9925
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Rescate vehicular en accidentes carreteros',
      'Atención de emergencias con materiales peligrosos (HAZMAT)',
      'Rescate en estructuras colapsadas (USAR)',
      'Control de fugas de gas LP y natural',
      'Servicios de ambulancia y emergencias médicas',
      'Coordinación estatal de emergencias',
      'Academia y capacitación de bomberos',
      'Investigación de causas de incendio',
      'Inspecciones de seguridad contra incendios',
    ],
    equipamiento: [
      'Camiones cisterna de 12,000 litros',
      'Unidades de rescate pesado tipo USAR',
      'Ambulancias de soporte vital avanzado',
      'Unidad HAZMAT nivel tecnificado',
      'Escaleras telescópicas de 42 metros',
      'Vehículo de comando móvil',
      'Drones con cámara térmica e IR',
      'Equipo de comunicaciones satelitales',
      'Robot de reconocimiento para estructuras',
      'Generadores de espuma de alta expansión',
    ],
    personal: 95,
    unidades: 14,
    descripcion: 'Comandancia General del Heroico Cuerpo de Bomberos de Saltillo. Centro de operaciones para la capital del estado y sede de la Academia Estatal de Bomberos. Coordina la respuesta a emergencias mayores en toda la zona metropolitana, incluyendo el corredor industrial automotriz más importante del noreste de México.',
    fechaFundacion: '1945',
    redes: {
      facebook: 'https://facebook.com/BomberosSaltillo',
      twitter: 'https://twitter.com/BomberosSaltillo',
    },
  },
  {
    id: 'estacion-bomberos-saltillo-norte',
    nombre: 'Estación de Bomberos Saltillo Norte',
    nombreCorto: 'Est. Saltillo Norte',
    slug: 'estacion-bomberos-saltillo-norte',
    direccion: 'Blvd. Eulalio Gutiérrez #2800, Col. Los Maestros',
    ciudad: 'Saltillo',
    municipio: 'Saltillo',
    estado: 'Coahuila',
    codigoPostal: '25260',
    telefono: '(844) 410-7910',
    email: 'norte@bomberossaltillo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.4580,
      lng: -100.9785
    },
    servicios: [
      'Combate de incendios residenciales y comerciales',
      'Rescate vehicular autopista Saltillo-Monterrey',
      'Atención de emergencias en zonas residenciales',
      'Control de incendios en vegetación y pastizales',
      'Rescate de personas atrapadas',
      'Atención prehospitalaria',
      'Prevención comunitaria',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidades de rescate vehicular',
      'Ambulancias tipo II',
      'Escalera mecánica de 24 metros',
      'Herramientas de extracción hidráulica Holmatro',
    ],
    personal: 48,
    unidades: 7,
    descripcion: 'Estación estratégica para la zona norte de Saltillo, cubriendo colonias residenciales de alta densidad, centros comerciales y el acceso a la autopista Saltillo-Monterrey. Primera respuesta para accidentes en el periférico Luis Echeverría.',
  },
  {
    id: 'estacion-bomberos-saltillo-sur',
    nombre: 'Estación de Bomberos Saltillo Sur',
    nombreCorto: 'Est. Saltillo Sur',
    slug: 'estacion-bomberos-saltillo-sur',
    direccion: 'Blvd. Nazario Ortiz Garza #3500, Col. Valle de las Flores',
    ciudad: 'Saltillo',
    municipio: 'Saltillo',
    estado: 'Coahuila',
    codigoPostal: '25297',
    telefono: '(844) 410-7920',
    email: 'sur@bomberossaltillo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.3880,
      lng: -101.0125
    },
    servicios: [
      'Combate de incendios urbanos',
      'Atención de accidentes vehiculares',
      'Rescate en espacios confinados',
      'Control de derrames de combustible',
      'Emergencias en centros comerciales',
      'Atención prehospitalaria',
      'Cobertura zona universitaria',
    ],
    equipamiento: [
      'Autobombas cisterna',
      'Unidades de rescate ligero',
      'Ambulancias tipo II',
      'Equipo de espacios confinados',
      'Kit de contención de derrames',
    ],
    personal: 42,
    unidades: 6,
    descripcion: 'Estación que brinda cobertura a la zona sur de Saltillo, incluyendo la zona universitaria (UAdeC, Tec de Monterrey), centros comerciales y fraccionamientos residenciales. Acceso rápido a carretera a Zacatecas.',
  },
  {
    id: 'estacion-bomberos-ramos-arizpe',
    nombre: 'Estación de Bomberos Ramos Arizpe',
    nombreCorto: 'Est. Ramos Arizpe',
    slug: 'estacion-bomberos-ramos-arizpe',
    direccion: 'Blvd. Industrias #1000, Parque Industrial',
    ciudad: 'Ramos Arizpe',
    municipio: 'Ramos Arizpe',
    estado: 'Coahuila',
    codigoPostal: '25900',
    telefono: '(844) 488-0088',
    email: 'bomberos@ramosarizpe.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.5389,
      lng: -100.9478
    },
    servicios: [
      'Respuesta especializada a emergencias automotrices',
      'Incendios industriales de gran magnitud',
      'Atención HAZMAT en plantas de manufactura',
      'Rescate técnico industrial',
      'Control de derrames de pinturas y solventes',
      'Emergencias en líneas de ensamble',
      'Coordinación con brigadas industriales',
      'Capacitación a personal de plantas',
    ],
    equipamiento: [
      'Unidades HAZMAT nivel tecnificado',
      'Autobombas industriales de espuma AFFF/AR',
      'Monitores de gases múltiples',
      'Trajes de protección química nivel A y B',
      'Unidad de descontaminación masiva',
      'Equipo de rescate en alturas industriales',
      'Sistema de supresión de incendios móvil',
    ],
    personal: 58,
    unidades: 9,
    descripcion: 'Estación especializada en emergencias del sector automotriz. Ramos Arizpe alberga plantas de General Motors, Chrysler (Stellantis), Daimler y decenas de proveedores Tier 1. Personal certificado en respuesta HAZMAT avanzada para químicos automotrices, pinturas, solventes y materiales compuestos.',
    fechaFundacion: '1982',
  },
  {
    id: 'estacion-bomberos-arteaga',
    nombre: 'Estación de Bomberos Arteaga',
    nombreCorto: 'Est. Arteaga',
    slug: 'estacion-bomberos-arteaga',
    direccion: 'Calle Hidalgo #200, Centro',
    ciudad: 'Arteaga',
    estado: 'Coahuila',
    codigoPostal: '25350',
    telefono: '(844) 483-0066',
    email: 'bomberos@arteaga.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.4500,
      lng: -100.8500
    },
    servicios: [
      'Combate de incendios forestales',
      'Rescate en montaña y rappel',
      'Búsqueda de personas extraviadas',
      'Atención de emergencias turísticas',
      'Emergencias por nevadas y heladas',
      'Rescate vehicular en carretera de montaña',
      'Atención de hipotermia',
      'Apoyo a comunidades serranas',
    ],
    equipamiento: [
      'Unidades forestales todo terreno',
      'Equipo de rescate en montaña',
      'Cuerdas y arneses especializados',
      'Vehículos 4x4 de alta montaña',
      'Motosierras y herramienta forestal',
      'Ambulancia de alta montaña',
      'Equipo para clima extremo frío',
    ],
    personal: 32,
    unidades: 5,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Arteaga, conocido como "La Suiza de México" por sus bosques de coníferas y nevadas invernales. Especialización en incendios forestales y rescate de montaña. Cobertura a la Sierra de Arteaga y centros turísticos como Monterreal.',
    fechaFundacion: '1978',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA LA LAGUNA (TORREÓN) - 5 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-central-torreon',
    nombre: 'Estación Central de Bomberos Torreón',
    nombreCorto: 'Est. Central Torreón',
    slug: 'estacion-central-torreon',
    direccion: 'Av. Juárez #500, Centro',
    ciudad: 'Torreón',
    municipio: 'Torreón',
    estado: 'Coahuila',
    codigoPostal: '27000',
    telefono: '(871) 712-0000',
    email: 'central@bomberostorreon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.5428,
      lng: -103.4067
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Rescate vehicular especializado',
      'Atención de emergencias HAZMAT',
      'Rescate en estructuras colapsadas',
      'Coordinación metropolitana La Laguna',
      'Servicios de ambulancia avanzados',
      'Academia de bomberos regional',
      'Investigación de incendios',
    ],
    equipamiento: [
      'Flota completa de autobombas',
      'Unidades HAZMAT certificadas',
      'Escaleras aéreas de 45 metros',
      'Ambulancias de soporte vital avanzado',
      'Unidad de comando móvil',
      'Equipo de rescate acuático',
      'Drones de reconocimiento',
    ],
    personal: 88,
    unidades: 12,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de Torreón, principal ciudad de la Comarca Lagunera. Coordina operaciones con Gómez Palacio y Lerdo (Durango) para formar la respuesta metropolitana de La Laguna, una de las zonas urbanas más grandes del norte de México con más de 1.3 millones de habitantes.',
    fechaFundacion: '1936',
    redes: {
      facebook: 'https://facebook.com/BomberosTorreon',
      twitter: 'https://twitter.com/BomberosTorreon',
    },
  },
  {
    id: 'estacion-bomberos-torreon-norte',
    nombre: 'Estación de Bomberos Torreón Norte',
    nombreCorto: 'Est. Torreón Norte',
    slug: 'estacion-bomberos-torreon-norte',
    direccion: 'Blvd. Independencia #3000, Col. La Rosita',
    ciudad: 'Torreón',
    municipio: 'Torreón',
    estado: 'Coahuila',
    codigoPostal: '27100',
    telefono: '(871) 712-0010',
    email: 'norte@bomberostorreon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.5728,
      lng: -103.3867
    },
    servicios: [
      'Combate de incendios residenciales',
      'Rescate vehicular',
      'Atención de emergencias en colonias populares',
      'Control de incendios en vegetación',
      'Servicios de prevención',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidades de rescate',
      'Ambulancias',
      'Equipo de extracción vehicular',
    ],
    personal: 42,
    unidades: 6,
    descripcion: 'Estación que cubre la zona norte de Torreón, incluyendo colonias de alta densidad poblacional y accesos a la autopista Torreón-Saltillo. Primera respuesta para emergencias en el sector educativo y comercial del norte de la ciudad.',
  },
  {
    id: 'estacion-bomberos-torreon-zona-industrial',
    nombre: 'Estación de Bomberos Torreón Zona Industrial',
    nombreCorto: 'Est. Torreón Zona Industrial',
    slug: 'estacion-bomberos-torreon-zona-industrial',
    direccion: 'Blvd. Revolución #5000, Parque Industrial Oriente',
    ciudad: 'Torreón',
    municipio: 'Torreón',
    estado: 'Coahuila',
    codigoPostal: '27277',
    telefono: '(871) 712-0020',
    email: 'industrial@bomberostorreon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.5128,
      lng: -103.3567
    },
    servicios: [
      'Incendios industriales',
      'Respuesta HAZMAT especializada',
      'Emergencias en plantas de manufactura',
      'Control de derrames químicos',
      'Rescate industrial',
      'Capacitación a brigadas empresariales',
    ],
    equipamiento: [
      'Unidades HAZMAT',
      'Autobombas industriales',
      'Equipo de protección química',
      'Detectores multigas',
      'Sistema de espuma AFFF',
    ],
    personal: 48,
    unidades: 7,
    descripcion: 'Estación especializada en emergencias industriales del corredor manufacturero de Torreón. Cobertura a parques industriales, empresas de procesamiento de alimentos, industria metalmecánica y plantas de productos químicos.',
  },
  {
    id: 'estacion-bomberos-matamoros',
    nombre: 'Estación de Bomberos Matamoros',
    nombreCorto: 'Est. Matamoros',
    slug: 'estacion-bomberos-matamoros',
    direccion: 'Calle Juárez #300, Centro',
    ciudad: 'Matamoros',
    municipio: 'Matamoros',
    estado: 'Coahuila',
    codigoPostal: '27440',
    telefono: '(871) 760-0055',
    email: 'bomberos@matamoros.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.5289,
      lng: -103.2283
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Emergencias agrícolas',
      'Rescate vehicular en carreteras',
      'Incendios en cultivos y pastizales',
      'Atención de emergencias en agroindustria',
      'Rescate acuático en canales',
    ],
    equipamiento: [
      'Autobombas urbanas y rurales',
      'Unidades de rescate',
      'Equipo para incendios agrícolas',
      'Ambulancias',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de Matamoros, Coahuila (parte de la Comarca Lagunera). Cobertura a zona agrícola de producción de algodón, sorgo y vid. Atiende emergencias en empacadoras y agroindustrias de la región.',
  },
  {
    id: 'estacion-bomberos-san-pedro',
    nombre: 'Estación de Bomberos San Pedro',
    nombreCorto: 'Est. San Pedro',
    slug: 'estacion-bomberos-san-pedro',
    direccion: 'Av. Hidalgo #400, Centro',
    ciudad: 'San Pedro',
    municipio: 'San Pedro',
    estado: 'Coahuila',
    codigoPostal: '27800',
    telefono: '(872) 772-0066',
    email: 'bomberos@sanpedro.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.7572,
      lng: -102.9833
    },
    servicios: [
      'Combate de incendios',
      'Emergencias en industria lechera',
      'Atención de fugas de amoniaco',
      'Rescate vehicular',
      'Emergencias en establos y forrajes',
      'Incendios de pastizales',
    ],
    equipamiento: [
      'Autobombas',
      'Unidades de rescate',
      'Detectores de amoniaco',
      'Ambulancia',
      'Equipo de protección respiratoria',
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos de San Pedro de las Colonias, corazón de la industria lechera de La Laguna. Especialización en emergencias con amoniaco en plantas de refrigeración y procesadoras lácteas. Cobertura a Grupo Lala y otras empresas del sector.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CENTRO (MONCLOVA - ACERO) - 4 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-central-monclova',
    nombre: 'Estación Central de Bomberos Monclova',
    nombreCorto: 'Est. Central Monclova',
    slug: 'estacion-central-monclova',
    direccion: 'Blvd. Harold R. Pape #1500, Col. Guadalupe',
    ciudad: 'Monclova',
    municipio: 'Monclova',
    estado: 'Coahuila',
    codigoPostal: '25750',
    telefono: '(866) 633-1111',
    email: 'central@bomberosmonclova.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.9067,
      lng: -101.4200
    },
    servicios: [
      'Combate de incendios siderúrgicos especializados',
      'Emergencias en altos hornos',
      'Rescate en instalaciones metalúrgicas',
      'Atención HAZMAT industrial',
      'Incendios de metal fundido y escoria',
      'Control de explosiones industriales',
      'Coordinación con brigadas AHMSA',
      'Emergencias con gases industriales',
    ],
    equipamiento: [
      'Unidades especializadas para incendios metalúrgicos',
      'Autobombas de espuma especial para metales',
      'Equipo de protección térmica extrema',
      'Monitores de radiación de alta temperatura',
      'Trajes aluminizados de aproximación',
      'Unidad HAZMAT para gases industriales',
      'Equipo de rescate en alturas industriales',
      'Ambulancias de trauma industrial',
    ],
    personal: 72,
    unidades: 10,
    descripcion: 'Comandancia de Bomberos de Monclova, especializada en emergencias del sector siderúrgico. Monclova es sede de AHMSA (Altos Hornos de México), el complejo acerero integrado más grande del país. El personal está entrenado en combate de incendios de metal fundido, rescate en altos hornos y emergencias industriales de alta complejidad.',
    fechaFundacion: '1952',
    redes: {
      facebook: 'https://facebook.com/BomberosMonclova',
    },
  },
  {
    id: 'estacion-bomberos-frontera',
    nombre: 'Estación de Bomberos Frontera',
    nombreCorto: 'Est. Frontera',
    slug: 'estacion-bomberos-frontera',
    direccion: 'Calle Allende #250, Centro',
    ciudad: 'Frontera',
    municipio: 'Frontera',
    estado: 'Coahuila',
    codigoPostal: '25600',
    telefono: '(866) 634-0077',
    email: 'bomberos@frontera.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.9267,
      lng: -101.4500
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Apoyo a emergencias siderúrgicas',
      'Rescate vehicular',
      'Emergencias en zona habitacional',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobombas',
      'Unidades de rescate',
      'Ambulancias',
      'Equipo de protección industrial',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de Frontera, parte de la zona metropolitana Monclova-Frontera. Apoyo a emergencias en el corredor siderúrgico y cobertura a zonas habitacionales. Coordinación permanente con bomberos de Monclova.',
  },
  {
    id: 'estacion-bomberos-castanos',
    nombre: 'Estación de Bomberos Castaños',
    nombreCorto: 'Est. Castaños',
    slug: 'estacion-bomberos-castanos',
    direccion: 'Av. Carranza #180, Centro',
    ciudad: 'Castaños',
    municipio: 'Castaños',
    estado: 'Coahuila',
    codigoPostal: '25870',
    telefono: '(866) 635-0055',
    email: 'bomberos@castanos.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.7833,
      lng: -101.4333
    },
    servicios: [
      'Combate de incendios',
      'Rescate vehicular autopista',
      'Emergencias agrícolas',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia',
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Castaños, municipio ubicado en la autopista Monclova-Saltillo. Cobertura a zona residencial y accidentes carreteros en el corredor industrial del centro de Coahuila.',
  },
  {
    id: 'estacion-bomberos-cuatro-cienegas',
    nombre: 'Estación de Bomberos Cuatro Ciénegas',
    nombreCorto: 'Est. Cuatro Ciénegas',
    slug: 'estacion-bomberos-cuatro-cienegas',
    direccion: 'Calle Zaragoza #150, Centro',
    ciudad: 'Cuatro Ciénegas',
    estado: 'Coahuila',
    codigoPostal: '27640',
    telefono: '(869) 696-0044',
    email: 'bomberos@cuatrocienegas.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.9850,
      lng: -102.0667
    },
    servicios: [
      'Protección de Área Natural Protegida',
      'Combate de incendios en ecosistemas frágiles',
      'Emergencias turísticas en pozas y dunas',
      'Búsqueda y rescate en desierto',
      'Coordinación con CONANP',
      'Atención de emergencias en Pueblo Mágico',
    ],
    equipamiento: [
      'Unidades todo terreno',
      'Equipo de rescate en desierto',
      'Ambulancia',
      'Equipo de protección ambiental',
      'Comunicación de largo alcance',
    ],
    personal: 22,
    unidades: 3,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Cuatro Ciénegas, responsable de la protección del Área de Protección de Flora y Fauna con especies endémicas únicas en el mundo, incluyendo estromatolitos vivos. Coordinación permanente con CONANP para emergencias en las pozas y dunas de yeso.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CARBONÍFERA (MINERÍA) - 4 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-bomberos-sabinas',
    nombre: 'Estación de Bomberos Sabinas',
    nombreCorto: 'Est. Sabinas',
    slug: 'estacion-bomberos-sabinas',
    direccion: 'Av. Juárez #500, Centro',
    ciudad: 'Sabinas',
    municipio: 'Sabinas',
    estado: 'Coahuila',
    codigoPostal: '26700',
    telefono: '(861) 613-0088',
    email: 'bomberos@sabinas.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.8500,
      lng: -101.1167
    },
    servicios: [
      'Rescate minero especializado',
      'Combate de incendios en minas de carbón',
      'Emergencias por explosiones de grisú',
      'Rescate en colapsos de mina',
      'Atención de incendios subterráneos',
      'Búsqueda de mineros atrapados',
      'Coordinación con empresas carboníferas',
      'Emergencias en plantas de procesamiento',
    ],
    equipamiento: [
      'Unidades de rescate minero',
      'Equipo de respiración autónomo de larga duración',
      'Detectores de gases mineros (metano, CO, CO2)',
      'Equipo de comunicación subterránea',
      'Winches y malacates de rescate',
      'Camillas especializadas para mina',
      'Equipo de ventilación forzada',
    ],
    personal: 45,
    unidades: 6,
    descripcion: 'Centro de operaciones de rescate minero para la Región Carbonífera de Coahuila. Sabinas es el corazón de la industria del carbón en México (95% de la producción nacional). Personal altamente especializado en rescate minero, detección de gases explosivos y operaciones de búsqueda en ambientes subterráneos.',
    fechaFundacion: '1960',
  },
  {
    id: 'estacion-bomberos-nueva-rosita',
    nombre: 'Estación de Bomberos Nueva Rosita',
    nombreCorto: 'Est. Nueva Rosita',
    slug: 'estacion-bomberos-nueva-rosita',
    direccion: 'Calle Carranza #350, Centro',
    ciudad: 'Nueva Rosita',
    municipio: 'Nueva Rosita',
    estado: 'Coahuila',
    codigoPostal: '26830',
    telefono: '(861) 614-0066',
    email: 'bomberos@nuevarosita.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.9333,
      lng: -101.2167
    },
    servicios: [
      'Rescate minero',
      'Combate de incendios',
      'Emergencias en pozos carboníferos',
      'Apoyo a operaciones de rescate regional',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Equipo de rescate minero',
      'Autobomba',
      'Detectores de gases',
      'Ambulancia',
      'Equipo de respiración autónomo',
    ],
    personal: 32,
    unidades: 4,
    descripcion: 'Estación de bomberos de Nueva Rosita, municipio con intensa actividad de minería de carbón. Apoyo a las operaciones de rescate minero de la región y cobertura a las minas activas en el municipio. Historia de respuesta a accidentes mineros históricos.',
  },
  {
    id: 'estacion-bomberos-muzquiz',
    nombre: 'Estación de Bomberos Múzquiz',
    nombreCorto: 'Est. Múzquiz',
    slug: 'estacion-bomberos-muzquiz',
    direccion: 'Calle Hidalgo #200, Centro',
    ciudad: 'Múzquiz',
    municipio: 'Múzquiz',
    estado: 'Coahuila',
    codigoPostal: '26340',
    telefono: '(864) 634-0077',
    email: 'bomberos@muzquiz.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.8833,
      lng: -101.5167
    },
    servicios: [
      'Rescate minero',
      'Combate de incendios forestales',
      'Emergencias en minas de carbón',
      'Búsqueda y rescate en sierra',
      'Atención de emergencias en comunidades kikapú',
      'Incendios en vegetación',
    ],
    equipamiento: [
      'Equipo de rescate minero',
      'Unidades forestales',
      'Vehículos todo terreno',
      'Ambulancia',
      'Herramienta forestal',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de Múzquiz, puerta de entrada a la Sierra de Santa Rosa y zona de minería de carbón. Cobertura a comunidades indígenas Kikapú y minas activas. Especialización dual en rescate minero e incendios forestales.',
  },
  {
    id: 'estacion-bomberos-san-juan-de-sabinas',
    nombre: 'Estación de Bomberos San Juan de Sabinas',
    nombreCorto: 'Est. San Juan de Sabinas',
    slug: 'estacion-bomberos-san-juan-de-sabinas',
    direccion: 'Av. Coahuila #280, Centro',
    ciudad: 'San Juan de Sabinas',
    municipio: 'San Juan de Sabinas',
    estado: 'Coahuila',
    codigoPostal: '26560',
    telefono: '(861) 615-0055',
    email: 'bomberos@sanjuandesabinas.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.9333,
      lng: -101.3000
    },
    servicios: [
      'Rescate minero',
      'Combate de incendios',
      'Emergencias en plantas de carbón',
      'Atención prehospitalaria',
      'Rescate vehicular',
    ],
    equipamiento: [
      'Equipo de rescate minero básico',
      'Autobomba',
      'Ambulancia',
      'Detectores de gases',
    ],
    personal: 24,
    unidades: 3,
    descripcion: 'Estación de bomberos de San Juan de Sabinas, municipio de la Región Carbonífera. Cobertura a minas de carbón activas y plantas de procesamiento. Apoyo a las estaciones principales de la zona en operaciones de rescate minero.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA FRONTERIZA (TEXAS) - 4 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-central-piedras-negras',
    nombre: 'Estación Central de Bomberos Piedras Negras',
    nombreCorto: 'Est. Central Piedras Negras',
    slug: 'estacion-central-piedras-negras',
    direccion: 'Av. Lázaro Cárdenas #800, Centro',
    ciudad: 'Piedras Negras',
    municipio: 'Piedras Negras',
    estado: 'Coahuila',
    codigoPostal: '26000',
    telefono: '(878) 782-0000',
    email: 'central@bomberospiedrasnegras.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.7000,
      lng: -100.5167
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Coordinación binacional con Eagle Pass Fire Dept.',
      'Emergencias en puentes internacionales',
      'Atención HAZMAT en comercio exterior',
      'Rescate vehicular en cruces fronterizos',
      'Emergencias en maquiladoras',
      'Protocolos de emergencia binacional',
      'Atención a migrantes en emergencias',
    ],
    equipamiento: [
      'Autobombas de primera respuesta',
      'Unidad HAZMAT para comercio exterior',
      'Equipo de comunicación binacional',
      'Ambulancias de soporte vital',
      'Escalera aérea',
      'Equipo de rescate acuático para río Bravo',
    ],
    personal: 55,
    unidades: 8,
    descripcion: 'Comandancia de Bomberos de Piedras Negras, ciudad fronteriza con Eagle Pass, Texas. Mantiene protocolos de cooperación binacional con bomberos estadounidenses. Especialización en emergencias de comercio internacional, maquiladoras y cruces fronterizos. Sede de entrenamiento conjunto México-EE.UU.',
    fechaFundacion: '1955',
    redes: {
      facebook: 'https://facebook.com/BomberosPiedrasNegras',
    },
  },
  {
    id: 'estacion-bomberos-acuna',
    nombre: 'Estación de Bomberos Acuña',
    nombreCorto: 'Est. Acuña',
    slug: 'estacion-bomberos-acuna',
    direccion: 'Calle Hidalgo #400, Centro',
    ciudad: 'Ciudad Acuña',
    municipio: 'Ciudad Acuña',
    estado: 'Coahuila',
    codigoPostal: '26200',
    telefono: '(877) 772-0088',
    email: 'bomberos@acuna.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 29.3167,
      lng: -100.9333
    },
    servicios: [
      'Combate de incendios',
      'Coordinación binacional con Del Rio Fire Dept.',
      'Emergencias en maquiladoras',
      'Rescate vehicular',
      'Emergencias en Presa de la Amistad',
      'Rescate acuático',
      'Atención HAZMAT comercio exterior',
    ],
    equipamiento: [
      'Autobombas',
      'Unidad de rescate acuático',
      'Ambulancias',
      'Equipo de comunicación binacional',
      'Lancha de rescate',
    ],
    personal: 42,
    unidades: 6,
    descripcion: 'Estación de bomberos de Ciudad Acuña, frontera con Del Rio, Texas. Cobertura a la zona industrial maquiladora y emergencias en la Presa de la Amistad, uno de los cuerpos de agua binacionales más grandes. Coordinación con bomberos de Texas para emergencias conjuntas.',
  },
  {
    id: 'estacion-bomberos-allende',
    nombre: 'Estación de Bomberos Allende',
    nombreCorto: 'Est. Allende',
    slug: 'estacion-bomberos-allende',
    direccion: 'Plaza Principal #100, Centro',
    ciudad: 'Allende',
    municipio: 'Allende',
    estado: 'Coahuila',
    codigoPostal: '26530',
    telefono: '(862) 622-0066',
    email: 'bomberos@allende.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.3500,
      lng: -100.8500
    },
    servicios: [
      'Combate de incendios',
      'Emergencias agrícolas y ganaderas',
      'Rescate vehicular',
      'Atención de emergencias rurales',
      'Incendios de pastizales',
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia',
      'Vehículo todo terreno',
    ],
    personal: 20,
    unidades: 3,
    descripcion: 'Estación de bomberos de Allende, municipio agrícola y ganadero de la zona norte de Coahuila. Cobertura a ranchos, comunidades rurales y carretera hacia la frontera.',
  },
  {
    id: 'estacion-bomberos-nava',
    nombre: 'Estación de Bomberos Nava',
    nombreCorto: 'Est. Nava',
    slug: 'estacion-bomberos-nava',
    direccion: 'Calle Juárez #150, Centro',
    ciudad: 'Nava',
    municipio: 'Nava',
    estado: 'Coahuila',
    codigoPostal: '26180',
    telefono: '(862) 623-0055',
    email: 'bomberos@nava.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.4167,
      lng: -100.7667
    },
    servicios: [
      'Combate de incendios',
      'Emergencias en zona agrícola',
      'Rescate vehicular',
      'Apoyo a zona fronteriza',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia',
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Nava, municipio cercano a Piedras Negras. Cobertura a zona agrícola de producción de sorgo y algodón. Apoyo a la zona fronteriza en emergencias mayores.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA SUR (VITIVINÍCOLA) - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'estacion-bomberos-parras',
    nombre: 'Estación de Bomberos Parras de la Fuente',
    nombreCorto: 'Est. Parras de la Fuente',
    slug: 'estacion-bomberos-parras',
    direccion: 'Calle Ramos Arizpe #200, Centro',
    ciudad: 'Parras de la Fuente',
    municipio: 'Parras de la Fuente',
    estado: 'Coahuila',
    codigoPostal: '27980',
    telefono: '(842) 422-0077',
    email: 'bomberos@parras.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.4500,
      lng: -102.1833
    },
    servicios: [
      'Protección del patrimonio histórico vitivinícola',
      'Combate de incendios en bodegas de vino',
      'Emergencias en viñedos',
      'Atención de emergencias turísticas',
      'Incendios en el Pueblo Mágico',
      'Rescate vehicular ruta del vino',
      'Protección de Casa Madero',
    ],
    equipamiento: [
      'Autobomba especializada para espacios históricos',
      'Equipo de protección patrimonial',
      'Ambulancia',
      'Unidad de rescate',
      'Equipo de combate de incendios delicado',
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Parras de la Fuente, cuna de la vitivinicultura en América. Protección de Casa Madero (viñedo más antiguo del continente, fundado en 1597) y del patrimonio arquitectónico colonial. Personal capacitado en protección de bienes culturales.',
    fechaFundacion: '1970',
  },
  {
    id: 'estacion-bomberos-general-cepeda',
    nombre: 'Estación de Bomberos General Cepeda',
    nombreCorto: 'Est. General Cepeda',
    slug: 'estacion-bomberos-general-cepeda',
    direccion: 'Calle Zaragoza #80, Centro',
    ciudad: 'General Cepeda',
    municipio: 'General Cepeda',
    estado: 'Coahuila',
    codigoPostal: '27700',
    telefono: '(842) 423-0044',
    email: 'bomberos@generalcepeda.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 25.3833,
      lng: -101.4833
    },
    servicios: [
      'Combate de incendios',
      'Emergencias agrícolas',
      'Rescate vehicular',
      'Incendios de pastizales',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobomba',
      'Ambulancia',
      'Vehículo de rescate',
    ],
    personal: 16,
    unidades: 2,
    descripcion: 'Estación de bomberos de General Cepeda, municipio agrícola del sureste de Coahuila. Cobertura a zona de producción de sorgo, maíz y frijol. Enlace entre la Comarca Lagunera y Saltillo.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES SEO Y FILTRADO
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Obtiene estaciones de la zona metropolitana de Saltillo
 */
export function getEstacionesSaltillo(): Estacion[] {
  const ciudadesSaltillo = ['Saltillo', 'Ramos Arizpe', 'Arteaga'];
  return estacionesCoahuila.filter(e => ciudadesSaltillo.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la Comarca Lagunera (Torreón)
 */
export function getEstacionesLaLaguna(): Estacion[] {
  const ciudadesLaguna = ['Torreón', 'Matamoros', 'San Pedro'];
  return estacionesCoahuila.filter(e => ciudadesLaguna.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la zona acerera (Monclova)
 */
export function getEstacionesMonclova(): Estacion[] {
  const ciudadesMonclova = ['Monclova', 'Frontera', 'Castaños', 'Cuatro Ciénegas'];
  return estacionesCoahuila.filter(e => ciudadesMonclova.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la Región Carbonífera
 */
export function getEstacionesCarboniferas(): Estacion[] {
  const ciudadesCarboniferas = ['Sabinas', 'Nueva Rosita', 'Múzquiz', 'San Juan de Sabinas'];
  return estacionesCoahuila.filter(e => ciudadesCarboniferas.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la zona fronteriza
 */
export function getEstacionesFrontera(): Estacion[] {
  const ciudadesFrontera = ['Piedras Negras', 'Ciudad Acuña', 'Allende', 'Nava'];
  return estacionesCoahuila.filter(e => ciudadesFrontera.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la zona vitivinícola
 */
export function getEstacionesVitivinicola(): Estacion[] {
  const ciudadesVino = ['Parras de la Fuente', 'General Cepeda'];
  return estacionesCoahuila.filter(e => ciudadesVino.includes(e.ciudad));
}

/**
 * Obtiene estaciones con capacidad HAZMAT
 */
export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesCoahuila.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('hazmat') ||
      s.toLowerCase().includes('materiales peligrosos') ||
      s.toLowerCase().includes('químic')
    )
  );
}

/**
 * Obtiene estaciones con rescate minero
 */
export function getEstacionesRescateMinero(): Estacion[] {
  return estacionesCoahuila.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('miner') ||
      s.toLowerCase().includes('mina') ||
      s.toLowerCase().includes('carbón')
    )
  );
}

/**
 * Obtiene estaciones en Pueblos Mágicos
 */
export function getEstacionesPueblosMagicos(): Estacion[] {
  const pueblosMagicos = ['Parras de la Fuente', 'Cuatro Ciénegas', 'Arteaga'];
  return estacionesCoahuila.filter(e => pueblosMagicos.includes(e.ciudad));
}

/**
 * Obtiene estaciones con coordinación binacional
 */
export function getEstacionesBinacionales(): Estacion[] {
  return estacionesCoahuila.filter(e =>
    e.servicios.some(s => s.toLowerCase().includes('binacional'))
  );
}

/**
 * Genera metadatos SEO para una estación específica
 */
export function generarMetaSEO(estacion: Estacion): {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
} {
  const ciudadSlug = estacion.ciudad.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');

  // Determinar contexto de la estación
  let contexto = '';
  let keywordsAdicionales: string[] = [];

  if (['Saltillo', 'Ramos Arizpe'].includes(estacion.ciudad)) {
    contexto = 'capital de Coahuila, zona automotriz';
    keywordsAdicionales = ['bomberos zona automotriz', 'emergencias industria automotriz'];
  } else if (estacion.ciudad === 'Arteaga') {
    contexto = 'Pueblo Mágico, La Suiza de México';
    keywordsAdicionales = ['bomberos arteaga', 'rescate montaña coahuila'];
  } else if (['Torreón', 'Matamoros', 'San Pedro'].includes(estacion.ciudad)) {
    contexto = 'Comarca Lagunera';
    keywordsAdicionales = ['bomberos comarca lagunera', 'emergencias torreon'];
  } else if (['Monclova', 'Frontera'].includes(estacion.ciudad)) {
    contexto = 'zona siderúrgica, AHMSA';
    keywordsAdicionales = ['bomberos siderurgica', 'emergencias ahmsa'];
  } else if (['Sabinas', 'Nueva Rosita', 'Múzquiz', 'San Juan de Sabinas'].includes(estacion.ciudad)) {
    contexto = 'Región Carbonífera, minería de carbón';
    keywordsAdicionales = ['rescate minero', 'bomberos minas carbon'];
  } else if (['Piedras Negras', 'Ciudad Acuña'].includes(estacion.ciudad)) {
    contexto = 'frontera con Texas, coordinación binacional';
    keywordsAdicionales = ['bomberos frontera texas', 'emergencias binacionales'];
  } else if (estacion.ciudad === 'Parras de la Fuente') {
    contexto = 'Pueblo Mágico, Ruta del Vino';
    keywordsAdicionales = ['bomberos parras', 'emergencias casa madero'];
  } else if (estacion.ciudad === 'Cuatro Ciénegas') {
    contexto = 'Pueblo Mágico, Área Natural Protegida';
    keywordsAdicionales = ['bomberos cuatro cienegas', 'emergencias area protegida'];
  } else {
    contexto = 'estado de Coahuila';
  }

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Coahuila`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Tel: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(', ')}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} coahuila`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      'bomberos coahuila',
      'emergencias coahuila',
      'protección civil coahuila',
      ...keywordsAdicionales,
    ],
    canonical: `https://bombero.mx/directorio/coahuila/${estacion.slug}`,
  };
}

/**
 * Obtiene contexto SEO por zona
 */
export function getContextoZona(ciudad: string): {
  tipo: string;
  descripcion: string;
  keywords: string[];
  color: string;
} {
  if (['Saltillo', 'Ramos Arizpe'].includes(ciudad)) {
    return {
      tipo: 'capital-automotriz',
      descripcion: 'Capital de Coahuila y segundo clúster automotriz de México',
      keywords: COAHUILA_SEO.keywords.saltillo,
      color: 'blue',
    };
  }

  if (ciudad === 'Arteaga') {
    return {
      tipo: 'pueblo-magico-montana',
      descripcion: 'Pueblo Mágico "La Suiza de México", bosques y nieve',
      keywords: COAHUILA_SEO.keywords.turisticos,
      color: 'green',
    };
  }

  if (['Torreón', 'Matamoros', 'San Pedro'].includes(ciudad)) {
    return {
      tipo: 'laguna',
      descripcion: 'Comarca Lagunera, principal cuenca lechera de México',
      keywords: COAHUILA_SEO.keywords.torreon,
      color: 'amber',
    };
  }

  if (['Monclova', 'Frontera', 'Castaños'].includes(ciudad)) {
    return {
      tipo: 'siderurgica',
      descripcion: 'Zona siderúrgica, sede de AHMSA',
      keywords: COAHUILA_SEO.keywords.monclova,
      color: 'slate',
    };
  }

  if (ciudad === 'Cuatro Ciénegas') {
    return {
      tipo: 'pueblo-magico-naturaleza',
      descripcion: 'Pueblo Mágico con ecosistemas únicos en el mundo',
      keywords: COAHUILA_SEO.keywords.turisticos,
      color: 'cyan',
    };
  }

  if (['Sabinas', 'Nueva Rosita', 'Múzquiz', 'San Juan de Sabinas'].includes(ciudad)) {
    return {
      tipo: 'carbonifera',
      descripcion: 'Región Carbonífera, 95% producción nacional de carbón',
      keywords: COAHUILA_SEO.keywords.carboniferos,
      color: 'stone',
    };
  }

  if (['Piedras Negras', 'Ciudad Acuña', 'Allende', 'Nava'].includes(ciudad)) {
    return {
      tipo: 'frontera',
      descripcion: 'Zona fronteriza con Texas, coordinación binacional',
      keywords: COAHUILA_SEO.keywords.frontera,
      color: 'indigo',
    };
  }

  if (['Parras de la Fuente', 'General Cepeda'].includes(ciudad)) {
    return {
      tipo: 'vitivinicola',
      descripcion: 'Zona vitivinícola, cuna del vino en América',
      keywords: COAHUILA_SEO.keywords.turisticos,
      color: 'purple',
    };
  }

  return {
    tipo: 'regional',
    descripcion: 'Estado de Coahuila de Zaragoza',
    keywords: COAHUILA_SEO.keywords.principales,
    color: 'gray',
  };
}

/**
 * Obtener estación por slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesCoahuila.find((e) => e.slug === slug);
}

/**
 * Obtener estaciones cercanas (excluyendo la actual)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  const mismoMunicipio = estacionesCoahuila.filter(
    (e) => e.ciudad === estacion.ciudad && e.slug !== slug
  );

  const otrosMunicipios = estacionesCoahuila.filter(
    (e) => e.ciudad !== estacion.ciudad
  );

  return [...mismoMunicipio, ...otrosMunicipios].slice(0, limit);
}

/**
 * Estadísticas totales del estado
 */
export const ESTADISTICAS_COAHUILA = {
  total_estaciones: estacionesCoahuila.length,
  total_bomberos: estacionesCoahuila.reduce((sum, e) => sum + e.personal, 0),
  total_unidades: estacionesCoahuila.reduce((sum, e) => sum + e.unidades, 0),
  estaciones_saltillo: getEstacionesSaltillo().length,
  estaciones_laguna: getEstacionesLaLaguna().length,
  estaciones_monclova: getEstacionesMonclova().length,
  estaciones_carboniferas: getEstacionesCarboniferas().length,
  estaciones_frontera: getEstacionesFrontera().length,
  estaciones_vitivinicola: getEstacionesVitivinicola().length,
  estaciones_hazmat: getEstacionesHAZMAT().length,
  estaciones_rescate_minero: getEstacionesRescateMinero().length,
  estaciones_pueblos_magicos: getEstacionesPueblosMagicos().length,
  municipios_cubiertos: new Set(estacionesCoahuila.map(e => e.ciudad)).size,
};

export default estacionesCoahuila;
