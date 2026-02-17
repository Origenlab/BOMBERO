/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  BOMBEROS DE GUERRERO (GRO) - DIRECTORIO OFICIAL                          ║
 * ║  Sistema de Información para SEO y Servicios de Emergencia               ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Capital: Chilpancingo de los Bravo | Código: GRO | Región: Sur          ║
 * ║  16 Estaciones | 520+ Bomberos | Cobertura Estatal                       ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                    PERFIL GEOGRÁFICO Y DEMOGRÁFICO                         │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  Superficie:        63,596 km² (14° lugar nacional)                        │
 * │  Población:         3,540,685 habitantes (12° lugar nacional)              │
 * │  Municipios:        81 municipios                                          │
 * │  Densidad:          55.7 hab/km²                                           │
 * │  PIB Estatal:       1.5% del PIB nacional                                  │
 * │  Altitud capital:   1,250 msnm                                             │
 * │  Clima:             Tropical a templado en sierra                          │
 * │  Litoral:           500 km de costa en el Pacífico                         │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                         RIESGOS NATURALES CRÍTICOS                         │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  🌀 HURACANES        │ Categoría 5 potencial, temporada jun-nov            │
 * │                      │ Huracán Otis (2023) Cat. 5 devastó Acapulco         │
 * │  🌊 TSUNAMIS         │ Zona de subducción Cocos-Norteamérica               │
 * │  🔴 SISMOS           │ Brecha de Guerrero, alto riesgo sísmico             │
 * │  🌊 INUNDACIONES     │ Ríos Balsas, Papagayo, temporada de lluvias         │
 * │  🔥 INCENDIOS        │ Sierra Madre del Sur, temporada seca                │
 * │  🏔️ DESLAVES         │ Zona serrana, carreteras de montaña                │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                         SECTORES ECONÓMICOS CLAVE                          │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  🏖️ TURISMO          │ Acapulco, Ixtapa-Zihuatanejo, Taxco                │
 * │                      │ 12+ millones de visitantes anuales                  │
 * │  💎 MINERÍA          │ Taxco: Capital Mundial de la Plata                  │
 * │  🌾 AGRICULTURA      │ Coco, mango, limón, maíz, café                      │
 * │  🐟 PESCA            │ Flota pesquera del Pacífico                         │
 * │  🎭 ARTESANÍAS       │ Plata, lacas, máscaras, textiles                    │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────────┐
 * │                    PATRIMONIO CULTURAL Y TURISMO                           │
 * ├─────────────────────────────────────────────────────────────────────────────┤
 * │  🏖️ Acapulco:        │ Bahía icónica, clavadistas de La Quebrada          │
 * │  💎 Taxco:           │ Pueblo Mágico, Ciudad de la Plata                   │
 * │  🏝️ Ixtapa:          │ Desarrollo turístico planificado                   │
 * │  🎣 Zihuatanejo:     │ Pueblo pesquero tradicional                        │
 * │  🏛️ Chilpancingo:    │ Capital histórica de la Independencia             │
 * └─────────────────────────────────────────────────────────────────────────────┘
 *
 * ════════════════════════════════════════════════════════════════════════════
 *  DISTRIBUCIÓN ESTRATÉGICA DE 16 ESTACIONES
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  ZONA ACAPULCO (Turístico Principal).................... 5 estaciones
 *  │ Central Acapulco │ Zona Dorada │ Diamante │ Pie de la Cuesta │ Aeropuerto
 *
 *  ZONA COSTA GRANDE (Ixtapa-Zihuatanejo)................. 2 estaciones
 *  │ Central Zihuatanejo │ Ixtapa
 *
 *  ZONA CENTRO (Capital)................................... 2 estaciones
 *  │ Central Chilpancingo │ Chilpancingo Sur
 *
 *  ZONA NORTE (Taxco-Iguala)............................... 3 estaciones
 *  │ Central Iguala │ Taxco │ Teloloapan
 *
 *  ZONA COSTA CHICA........................................ 2 estaciones
 *  │ Ometepec │ San Marcos
 *
 *  ZONA MONTAÑA Y TIERRA CALIENTE.......................... 2 estaciones
 *  │ Tlapa de Comonfort │ Altamirano
 *
 * ════════════════════════════════════════════════════════════════════════════
 */

import type { Estacion } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES SEO - GUERRERO
// ═══════════════════════════════════════════════════════════════════════════

export const GUERRERO_SEO = {
  // ─── Información Básica del Estado ───
  estado: 'Guerrero',
  estadoCorto: 'Guerrero',
  codigo: 'GRO',
  capital: 'Chilpancingo de los Bravo',
  gentilicio: 'guerrerense',
  region: 'Sur de México',
  lema: 'Guerrero, Alma de México',
  apodo: 'El Suriano',

  // ─── Datos Demográficos y Geográficos ───
  poblacion: 3_540_685,
  superficie_km2: 63_596,
  densidad: 55.7,
  municipios: 81,
  altitud_capital: 1_250,
  litoral_km: 500,
  colindancias: ['Michoacán', 'Estado de México', 'Morelos', 'Puebla', 'Oaxaca', 'Océano Pacífico'],

  // ─── Datos Económicos ───
  pib_porcentaje_nacional: 1.5,
  ranking_economico: 20,
  sectores_principales: ['Turismo', 'Minería', 'Agricultura', 'Pesca', 'Artesanías'],

  // ─── Turismo ───
  turismo: {
    visitantes_anuales: 12_000_000,
    derrama_economica_mdp: 85_000,
    destinos_principales: ['Acapulco', 'Ixtapa-Zihuatanejo', 'Taxco'],
    cuartos_hotel: 25_000,
    playas_blue_flag: 3,
  },

  // ─── Minería de Plata ───
  mineria: {
    ciudad_principal: 'Taxco de Alarcón',
    producto: 'Plata y joyería',
    reconocimiento: 'Capital Mundial de la Plata',
    talleres_artesanales: 1_200,
    empleos_directos: 15_000,
  },

  // ─── Riesgos Naturales ───
  riesgos: {
    huracanes: {
      categoria_maxima: 5,
      temporada: 'Junio - Noviembre',
      ultimo_mayor: 'Huracán Otis (2023) - Categoría 5',
      danos_estimados_mdd: 15_000,
    },
    sismos: {
      zona: 'Brecha de Guerrero',
      magnitud_potencial: 8.4,
      ultimo_significativo: 'Septiembre 2021, M 7.0',
    },
    tsunamis: {
      riesgo: 'Alto',
      zona: 'Costa del Pacífico',
      tiempo_llegada_minutos: 15,
    },
  },

  // ─── Paleta de Colores (Azul Pacífico/Dorado Sol) ───
  colores: {
    primario: 'rgb(14, 116, 144)',        // Cyan-700
    secundario: 'rgb(6, 182, 212)',       // Cyan-500
    claro: 'rgb(207, 250, 254)',          // Cyan-100
    acento: 'rgb(245, 158, 11)',          // Amber-500
    oscuro: 'rgb(22, 78, 99)',            // Cyan-900
    alerta: 'rgb(239, 68, 68)',           // Red-500
  },

  // ─── Keywords SEO por Categoría ───
  keywords: {
    principales: [
      'bomberos guerrero',
      'estaciones de bomberos guerrero',
      'emergencias guerrero mexico',
      'cuerpo de bomberos guerrero',
      'heroico cuerpo de bomberos guerrero',
      'proteccion civil guerrero',
      'servicios de emergencia guerrero',
      '911 guerrero',
      'bomberos acapulco',
      'emergencias costa guerrero',
    ],

    acapulco: [
      'bomberos acapulco',
      'bomberos acapulco guerrero',
      'emergencias acapulco',
      'cuerpo de bomberos acapulco',
      'proteccion civil acapulco',
      'bomberos zona dorada acapulco',
      'emergencias hoteles acapulco',
      'bomberos diamante acapulco',
    ],

    ixtapa: [
      'bomberos ixtapa zihuatanejo',
      'bomberos zihuatanejo',
      'emergencias ixtapa',
      'bomberos costa grande',
      'proteccion civil zihuatanejo',
    ],

    taxco: [
      'bomberos taxco',
      'bomberos taxco de alarcon',
      'emergencias taxco guerrero',
      'bomberos pueblo magico taxco',
      'proteccion civil taxco',
    ],

    chilpancingo: [
      'bomberos chilpancingo',
      'bomberos chilpancingo guerrero',
      'emergencias chilpancingo',
      'cuerpo de bomberos capital guerrero',
      'proteccion civil chilpancingo',
    ],

    huracanes: [
      'emergencias huracanes guerrero',
      'bomberos huracan acapulco',
      'proteccion civil huracanes',
      'emergencias otis acapulco',
      'rescate huracanes costa guerrero',
    ],

    turistico: [
      'bomberos zona turistica guerrero',
      'emergencias hoteles acapulco',
      'bomberos playas guerrero',
      'emergencias turistas acapulco',
      'rescate acuatico guerrero',
    ],
  },

  // ─── Pueblos Mágicos ───
  pueblosMagicos: [
    {
      nombre: 'Taxco de Alarcón',
      municipio: 'Taxco de Alarcón',
      año_designacion: 2002,
      reconocimientos: ['Capital Mundial de la Plata', 'Patrimonio de la Humanidad (propuesto)'],
      atractivos: ['Santa Prisca', 'Talleres de plata', 'Arquitectura colonial', 'Teleférico'],
    },
  ],

  // ─── Teléfonos de Emergencia ───
  telefonos: {
    emergencias_nacional: '911',
    bomberos_acapulco: '(744) 485-0808',
    bomberos_chilpancingo: '(747) 472-0505',
    bomberos_zihuatanejo: '(755) 554-2020',
    bomberos_iguala: '(733) 332-1234',
    bomberos_taxco: '(762) 622-0707',
    proteccion_civil_estatal: '(747) 471-9911',
    cruz_roja_acapulco: '(744) 485-4100',
    capitania_puerto_acapulco: '(744) 483-0164',
  },

  // ─── Especialidades Bomberiles por Zona ───
  especialidades: {
    costero: ['rescate acuático', 'emergencias en embarcaciones', 'tsunamis', 'huracanes'],
    turistico: ['emergencias en hoteles', 'atención multilingüe', 'rescate en playas', 'evacuaciones masivas'],
    urbano: ['incendios estructurales', 'rescate vehicular', 'colapso de edificios', 'fugas de gas'],
    montaña: ['incendios forestales', 'rescate en sierra', 'deslaves', 'comunidades remotas'],
    sismico: ['búsqueda y rescate USAR', 'evaluación de daños', 'colapso estructural'],
  },

  // ─── Infraestructura Turística ───
  infraestructura_turistica: {
    aeropuertos: [
      { nombre: 'Aeropuerto Internacional de Acapulco', codigo: 'ACA', pasajeros_anuales: 1_200_000 },
      { nombre: 'Aeropuerto Internacional Ixtapa-Zihuatanejo', codigo: 'ZIH', pasajeros_anuales: 800_000 },
    ],
    puertos: ['Puerto de Acapulco', 'Marina Ixtapa'],
    carreteras_principales: ['Autopista del Sol (México-Acapulco)', 'Carretera Federal 200 (Costera)'],
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// DATOS DE LAS 16 ESTACIONES DE BOMBEROS
// ═══════════════════════════════════════════════════════════════════════════

export const estacionesGuerrero: Estacion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA ACAPULCO - 5 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-acapulco-central',
    nombre: 'Estación Central de Bomberos de Acapulco',
    nombreCorto: 'Central de Bomberos Acapulco',
    slug: 'estacion-central-acapulco',
    direccion: 'Av. Cuauhtémoc 97, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Acapulco de Juárez',
    municipio: 'Acapulco de Juárez',
    estado: 'Guerrero',
    codigoPostal: '39300',
    telefono: '(744) 485-0808',
    telefonoEmergencia: '911',
    email: 'central@bomberosacapulco.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.8531,
      lng: -99.8901
    },
    servicios: [
      'Combate de incendios urbanos y estructurales',
      'Coordinación de emergencias zona turística',
      'Rescate acuático en playas y bahía',
      'Emergencias en hoteles y centros turísticos',
      'Atención de emergencias por huracanes',
      'Rescate vehicular',
      'Atención de emergencias en cruceros',
      'HAZMAT básico',
      'Búsqueda y rescate USAR',
      'Investigación de incendios',
      'Evacuaciones masivas',
      'Coordinación con Capitanía de Puerto',
    ],
    especialidades: [
      'Emergencias turísticas',
      'Rescate acuático',
      'Respuesta a huracanes',
      'Evacuación de hoteles',
    ],
    equipamiento: [
      'Camiones cisterna de 12,000 litros',
      'Unidades de rescate acuático',
      'Lanchas de rescate',
      'Ambulancias de soporte vital avanzado',
      'Escaleras telescópicas de 32 metros',
      'Centro de comando móvil',
      'Equipo de buceo de rescate',
      'Herramientas hidráulicas Holmatro',
      'Generadores de emergencia',
      'Equipos de comunicación satelital',
    ],
    personal: 85,
    unidades: 14,
    descripcion: 'Comandancia General del Heroico Cuerpo de Bomberos de Acapulco, principal destino turístico de playa en México con más de 800,000 habitantes y millones de visitantes anuales. Estación especializada en emergencias turísticas, rescate acuático y respuesta a desastres naturales. El personal está capacitado para atención multilingüe y coordinación con autoridades marítimas. Tras el Huracán Otis (2023), se reforzó la capacidad de respuesta a fenómenos meteorológicos extremos.',
    fechaFundacion: '1942',
    redes: {
      facebook: 'https://facebook.com/BomberosAcapulco',
      twitter: 'https://twitter.com/PCGuerrero',
    },
  },
  {
    id: 'gro-acapulco-dorada',
    nombre: 'Estación de Bomberos Acapulco Zona Dorada',
    nombreCorto: 'Bomberos Zona Dorada',
    slug: 'estacion-bomberos-acapulco-zona-dorada',
    direccion: 'Av. Costera Miguel Alemán 1252, Fracc. Costa Azul',
    colonia: 'Costa Azul',
    ciudad: 'Acapulco de Juárez',
    municipio: 'Acapulco de Juárez',
    estado: 'Guerrero',
    codigoPostal: '39850',
    telefono: '(744) 484-1111',
    telefonoEmergencia: '911',
    email: 'zonadorada@bomberosacapulco.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.8650,
      lng: -99.8756
    },
    servicios: [
      'Combate de incendios en zona hotelera',
      'Emergencias en hoteles de alta ocupación',
      'Rescate acuático en playas turísticas',
      'Atención de emergencias en centros nocturnos',
      'Emergencias en centros comerciales',
      'Rescate vehicular en Costera',
      'Control de fugas de gas',
      'Atención prehospitalaria turística',
    ],
    equipamiento: [
      'Autobombas de 10,000 litros',
      'Unidad de rescate acuático',
      'Ambulancias bilingües',
      'Escalera de 24 metros',
      'Equipo de rescate en alturas',
      'Motos acuáticas de rescate',
    ],
    personal: 45,
    unidades: 7,
    descripcion: 'Estación estratégica en la Zona Dorada de Acapulco, el corazón turístico de la ciudad con la mayor concentración de hoteles, restaurantes y centros nocturnos. Personal capacitado en atención bilingüe (español-inglés) para turistas internacionales. Cobertura prioritaria a la Costera Miguel Alemán y principales playas como Condesa e Icacos.',
    fechaFundacion: '1985',
  },
  {
    id: 'gro-acapulco-diamante',
    nombre: 'Estación de Bomberos Acapulco Diamante',
    nombreCorto: 'Bomberos Acapulco Diamante',
    slug: 'estacion-bomberos-acapulco-diamante',
    direccion: 'Blvd. de las Naciones 500, Fracc. Granjas del Marqués',
    colonia: 'Granjas del Marqués',
    ciudad: 'Acapulco de Juárez',
    municipio: 'Acapulco de Juárez',
    estado: 'Guerrero',
    codigoPostal: '39890',
    telefono: '(744) 462-2222',
    telefonoEmergencia: '911',
    email: 'diamante@bomberosacapulco.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.7978,
      lng: -99.8289
    },
    servicios: [
      'Combate de incendios en zona residencial de lujo',
      'Emergencias en resorts y hoteles boutique',
      'Rescate acuático en Playa Diamante',
      'Emergencias en campos de golf',
      'Atención a condominios de alta gama',
      'Rescate vehicular en autopista',
      'Control de fauna silvestre',
      'Emergencias en marinas',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate acuático',
      'Ambulancias',
      'Cuatrimotos para playa',
      'Equipo de rescate en agua',
    ],
    personal: 35,
    unidades: 5,
    descripcion: 'Estación que cubre la exclusiva zona Diamante de Acapulco, el desarrollo turístico más moderno con resorts de lujo, campos de golf y condominios de alta gama. Cobertura al Boulevard de las Naciones, Playa Diamante y acceso a la Autopista del Sol. Zona severamente afectada por el Huracán Otis, con infraestructura reforzada para respuesta a desastres.',
    fechaFundacion: '2000',
  },
  {
    id: 'gro-acapulco-pie-cuesta',
    nombre: 'Estación de Bomberos Pie de la Cuesta',
    nombreCorto: 'Bomberos Pie de la Cuesta',
    slug: 'estacion-bomberos-pie-de-la-cuesta',
    direccion: 'Carretera Pie de la Cuesta Km 5, Col. Pie de la Cuesta',
    colonia: 'Pie de la Cuesta',
    ciudad: 'Acapulco de Juárez',
    municipio: 'Acapulco de Juárez',
    estado: 'Guerrero',
    codigoPostal: '39900',
    telefono: '(744) 460-1234',
    telefonoEmergencia: '911',
    email: 'piedelacuesta@bomberosacapulco.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.8847,
      lng: -99.9478
    },
    servicios: [
      'Combate de incendios costeros',
      'Rescate acuático en laguna y mar abierto',
      'Emergencias en zona de laguna Coyuca',
      'Atención de emergencias en palapas y restaurantes',
      'Rescate de embarcaciones menores',
      'Incendios en vegetación costera',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobomba de 6,000 litros',
      'Lancha de rescate',
      'Ambulancia',
      'Equipo de rescate acuático',
      'Vehículo todo terreno',
    ],
    personal: 20,
    unidades: 4,
    descripcion: 'Estación de bomberos en Pie de la Cuesta, zona turística famosa por sus atardeceres y la Laguna de Coyuca. Especialización en rescate acuático tanto en mar abierto como en laguna. Cobertura a restaurantes de mariscos, palapas turísticas y comunidades costeras. Punto estratégico para emergencias en la carretera hacia Zihuatanejo.',
    fechaFundacion: '1995',
  },
  {
    id: 'gro-acapulco-aeropuerto',
    nombre: 'Estación de Bomberos del Aeropuerto de Acapulco',
    nombreCorto: 'Bomberos Aeropuerto Acapulco',
    slug: 'estacion-bomberos-aeropuerto-acapulco',
    direccion: 'Aeropuerto Internacional de Acapulco, Carr. México-Acapulco Km 14',
    colonia: 'Plan de los Amates',
    ciudad: 'Acapulco de Juárez',
    municipio: 'Acapulco de Juárez',
    estado: 'Guerrero',
    codigoPostal: '39931',
    telefono: '(744) 466-9250',
    telefonoEmergencia: '911',
    email: 'aeropuerto@bomberosacapulco.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.7572,
      lng: -99.7539
    },
    servicios: [
      'ARFF (Rescate y extinción de incendios en aeronaves)',
      'Emergencias en aeronaves comerciales y privadas',
      'Atención de emergencias con combustible de aviación',
      'Evacuación de aeronaves',
      'Emergencias en instalaciones aeroportuarias',
      'HAZMAT aeronáutico',
      'Coordinación con torre de control',
    ],
    especialidades: [
      'ARFF - Aircraft Rescue and Fire Fighting',
      'Emergencias con Jet-A y combustibles',
      'Evacuación masiva de aeronaves',
    ],
    equipamiento: [
      'Vehículos ARFF Oshkosh Striker',
      'Camiones de espuma de alta capacidad',
      'Unidades de respuesta rápida',
      'Equipo de protección ARFF',
      'Sistemas de agentes extintores especiales',
      'Comunicación aeronáutica',
    ],
    personal: 28,
    unidades: 5,
    descripcion: 'Estación especializada ARFF (Aircraft Rescue and Fire Fighting) del Aeropuerto Internacional General Juan N. Álvarez de Acapulco. Personal certificado internacionalmente en rescate aeroportuario. El aeropuerto recibe más de 1.2 millones de pasajeros anuales con vuelos nacionales e internacionales. Tiempo de respuesta de 3 minutos a cualquier punto de las pistas.',
    fechaFundacion: '1965',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA COSTA GRANDE (IXTAPA-ZIHUATANEJO) - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-zihuatanejo-central',
    nombre: 'Estación Central de Bomberos de Zihuatanejo',
    nombreCorto: 'Central de Bomberos Zihuatanejo',
    slug: 'estacion-central-zihuatanejo',
    direccion: 'Av. Morelos 28, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Zihuatanejo de Azueta',
    municipio: 'Zihuatanejo de Azueta',
    estado: 'Guerrero',
    codigoPostal: '40880',
    telefono: '(755) 554-2020',
    telefonoEmergencia: '911',
    email: 'central@bomberoszihuatanejo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 17.6413,
      lng: -101.5517
    },
    servicios: [
      'Combate de incendios urbanos',
      'Coordinación de emergencias Costa Grande',
      'Rescate acuático en bahía y playas',
      'Emergencias en embarcaciones pesqueras',
      'Atención a zona hotelera tradicional',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Emergencias en mercado de mariscos',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidad de rescate acuático',
      'Lanchas de rescate',
      'Ambulancias',
      'Equipo de buceo',
      'Herramientas de rescate hidráulico',
    ],
    personal: 40,
    unidades: 6,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de Zihuatanejo, tradicional pueblo pesquero convertido en destino turístico de clase mundial. Especialización en rescate acuático y emergencias en la bahía de Zihuatanejo. Coordinación con pescadores locales y operadores turísticos. Cobertura a la zona del muelle, mercado de mariscos y playas como La Ropa y Las Gatas.',
    fechaFundacion: '1978',
    redes: {
      facebook: 'https://facebook.com/BomberosZihuatanejo',
    },
  },
  {
    id: 'gro-ixtapa',
    nombre: 'Estación de Bomberos de Ixtapa',
    nombreCorto: 'Bomberos Ixtapa',
    slug: 'estacion-bomberos-ixtapa',
    direccion: 'Blvd. Ixtapa s/n, Zona Hotelera',
    colonia: 'Zona Hotelera Ixtapa',
    ciudad: 'Ixtapa',
    municipio: 'Zihuatanejo de Azueta',
    estado: 'Guerrero',
    codigoPostal: '40884',
    telefono: '(755) 553-1111',
    telefonoEmergencia: '911',
    email: 'ixtapa@bomberoszihuatanejo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 17.6667,
      lng: -101.6167
    },
    servicios: [
      'Combate de incendios en zona hotelera',
      'Emergencias en resorts todo incluido',
      'Rescate acuático en Playa El Palmar',
      'Emergencias en campos de golf',
      'Atención a Marina Ixtapa',
      'Emergencias en centros comerciales turísticos',
      'Control de fauna silvestre (cocodrilos)',
      'Atención prehospitalaria bilingüe',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate acuático',
      'Motos acuáticas de rescate',
      'Ambulancia bilingüe',
      'Cuatrimotos para playa',
    ],
    personal: 32,
    unidades: 5,
    descripcion: 'Estación de bomberos en Ixtapa, desarrollo turístico planificado con hoteles todo incluido, campos de golf y marina. Personal capacitado en atención bilingüe para turismo internacional. Cobertura a Playa El Palmar, Isla Ixtapa y Marina Ixtapa. Especialización en emergencias en resorts de gran escala con alta ocupación turística.',
    fechaFundacion: '1982',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CENTRO (CAPITAL) - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-chilpancingo-central',
    nombre: 'Estación Central de Bomberos de Chilpancingo',
    nombreCorto: 'Central de Bomberos Chilpancingo',
    slug: 'estacion-central-chilpancingo',
    direccion: 'Av. Insurgentes 45, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Chilpancingo de los Bravo',
    municipio: 'Chilpancingo de los Bravo',
    estado: 'Guerrero',
    codigoPostal: '39000',
    telefono: '(747) 472-0505',
    telefonoEmergencia: '911',
    email: 'central@bomberoschilpancingo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 17.5507,
      lng: -99.5014
    },
    servicios: [
      'Combate de incendios urbanos',
      'Coordinación estatal de emergencias',
      'Rescate vehicular en autopista del Sol',
      'Emergencias en edificios gubernamentales',
      'Atención de emergencias sísmicas',
      'Rescate en estructuras colapsadas (USAR)',
      'Control de fugas de gas',
      'Investigación de incendios',
      'Capacitación a brigadas',
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidades de rescate urbano pesado',
      'Ambulancias de soporte vital avanzado',
      'Escalera telescópica de 28 metros',
      'Equipo USAR para colapsos',
      'Centro de comando móvil',
      'Herramientas de rescate sísmico',
    ],
    personal: 55,
    unidades: 8,
    descripcion: 'Comandancia General del Heroico Cuerpo de Bomberos de Chilpancingo, capital del estado con más de 280,000 habitantes. Centro de coordinación estatal para emergencias mayores. Especialización en respuesta sísmica debido a la ubicación en la Brecha de Guerrero, una de las zonas de mayor riesgo sísmico en México. Cobertura a edificios gubernamentales, universidad estatal y zona comercial.',
    fechaFundacion: '1955',
    redes: {
      facebook: 'https://facebook.com/BomberosChilpancingo',
    },
  },
  {
    id: 'gro-chilpancingo-sur',
    nombre: 'Estación de Bomberos Chilpancingo Sur',
    nombreCorto: 'Bomberos Chilpancingo Sur',
    slug: 'estacion-bomberos-chilpancingo-sur',
    direccion: 'Blvd. Vicente Guerrero 1500, Col. Burócratas',
    colonia: 'Burócratas',
    ciudad: 'Chilpancingo de los Bravo',
    municipio: 'Chilpancingo de los Bravo',
    estado: 'Guerrero',
    codigoPostal: '39090',
    telefono: '(747) 494-3333',
    telefonoEmergencia: '911',
    email: 'sur@bomberoschilpancingo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 17.5289,
      lng: -99.5156
    },
    servicios: [
      'Combate de incendios residenciales',
      'Rescate vehicular en autopista',
      'Emergencias en zona universitaria',
      'Control de fugas de gas',
      'Incendios en vegetación periurbana',
      'Atención prehospitalaria',
      'Emergencias en centros comerciales',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate vehicular',
      'Ambulancias',
      'Equipo forestal básico',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación que cubre la zona sur de Chilpancingo, incluyendo el acceso a la Autopista del Sol hacia Acapulco. Primera respuesta para rescate vehicular en la autopista, zona universitaria y colonias residenciales del sur. Apoyo en temporada de incendios en los cerros circundantes.',
    fechaFundacion: '1998',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA NORTE (TAXCO-IGUALA) - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-iguala-central',
    nombre: 'Estación Central de Bomberos de Iguala',
    nombreCorto: 'Central de Bomberos Iguala',
    slug: 'estacion-central-iguala',
    direccion: 'Av. Bandera Nacional 120, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Iguala de la Independencia',
    municipio: 'Iguala de la Independencia',
    estado: 'Guerrero',
    codigoPostal: '40000',
    telefono: '(733) 332-1234',
    telefonoEmergencia: '911',
    email: 'central@bomberosiguala.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 18.3444,
      lng: -99.5389
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Coordinación de emergencias zona Norte',
      'Rescate vehicular',
      'Emergencias en zona comercial e industrial',
      'Control de fugas de gas',
      'Incendios en vegetación',
      'Atención prehospitalaria',
      'Capacitación a empresas',
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidades de rescate',
      'Ambulancias',
      'Escalera de 20 metros',
      'Herramientas de rescate hidráulico',
    ],
    personal: 38,
    unidades: 5,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de Iguala, ciudad histórica donde se creó la Bandera de México. Tercera ciudad más poblada del estado con aproximadamente 150,000 habitantes. Centro comercial e industrial del norte de Guerrero. Cobertura a zona industrial, comercio y carretera federal hacia Taxco y Ciudad de México.',
    fechaFundacion: '1968',
  },
  {
    id: 'gro-taxco',
    nombre: 'Estación de Bomberos de Taxco',
    nombreCorto: 'Bomberos Taxco',
    slug: 'estacion-bomberos-taxco',
    direccion: 'Calle Benito Juárez 8, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Taxco de Alarcón',
    municipio: 'Taxco de Alarcón',
    estado: 'Guerrero',
    codigoPostal: '40200',
    telefono: '(762) 622-0707',
    telefonoEmergencia: '911',
    email: 'taxco@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 18.5564,
      lng: -99.6050
    },
    servicios: [
      'Combate de incendios en centro histórico',
      'Protección de patrimonio arquitectónico colonial',
      'Emergencias en talleres de platería',
      'Atención de emergencias turísticas',
      'Rescate vehicular en carreteras de montaña',
      'Control de fugas de gas en edificios antiguos',
      'Emergencias en minas históricas',
      'Incendios forestales en cerros',
    ],
    especialidades: [
      'Protección de patrimonio colonial',
      'Emergencias en callejones estrechos',
      'Rescate en terreno montañoso',
    ],
    equipamiento: [
      'Autobombas compactas para calles estrechas',
      'Unidad de rescate especializada',
      'Ambulancia',
      'Equipo portátil para callejones',
      'Vehículo 4x4 para montaña',
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Taxco, la Capital Mundial de la Plata. Ciudad colonial con calles empedradas estrechas y arquitectura histórica que requiere técnicas especializadas de combate de incendios. Personal capacitado en protección del patrimonio colonial, emergencias en los 1,200+ talleres de platería con uso de soplete y químicos, y rescate en terreno montañoso.',
    fechaFundacion: '1960',
    redes: {
      facebook: 'https://facebook.com/PCTaxco',
    },
  },
  {
    id: 'gro-teloloapan',
    nombre: 'Estación de Bomberos de Teloloapan',
    nombreCorto: 'Bomberos Teloloapan',
    slug: 'estacion-bomberos-teloloapan',
    direccion: 'Av. Insurgentes 50, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Teloloapan',
    municipio: 'Teloloapan',
    estado: 'Guerrero',
    codigoPostal: '40400',
    telefono: '(736) 361-0123',
    telefonoEmergencia: '911',
    email: 'teloloapan@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 18.3675,
      lng: -99.8756
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Emergencias en zona agrícola',
      'Rescate vehicular en carreteras',
      'Incendios forestales',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Apoyo a comunidades rurales',
    ],
    equipamiento: [
      'Autobomba rural',
      'Vehículo de rescate',
      'Ambulancia',
      'Equipo forestal',
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Teloloapan, municipio de la región Norte con vocación agrícola y ganadera. Cobertura a zona rural extensa y carreteras que conectan con el Estado de México. Personal capacitado en emergencias rurales, incendios en pastizales y rescate vehicular.',
    fechaFundacion: '2005',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA COSTA CHICA - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-ometepec',
    nombre: 'Estación de Bomberos de Ometepec',
    nombreCorto: 'Bomberos Ometepec',
    slug: 'estacion-bomberos-ometepec',
    direccion: 'Calle Cuauhtémoc 25, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Ometepec',
    municipio: 'Ometepec',
    estado: 'Guerrero',
    codigoPostal: '41700',
    telefono: '(741) 412-0456',
    telefonoEmergencia: '911',
    email: 'ometepec@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.6867,
      lng: -98.4050
    },
    servicios: [
      'Combate de incendios urbanos',
      'Emergencias en comunidades afromexicanas',
      'Rescate vehicular en Carretera Costera',
      'Emergencias por inundaciones',
      'Incendios en vegetación tropical',
      'Atención prehospitalaria',
      'Apoyo a comunidades costeras',
    ],
    equipamiento: [
      'Autobomba de 6,000 litros',
      'Unidad de rescate',
      'Ambulancia',
      'Lancha para inundaciones',
    ],
    personal: 22,
    unidades: 4,
    descripcion: 'Estación de bomberos de Ometepec, centro de la Costa Chica guerrerense con importante población afromexicana. Cobertura a comunidades costeras y rurales entre Acapulco y la frontera con Oaxaca. Especialización en emergencias por inundaciones durante temporada de lluvias y huracanes. Conexión con la Carretera Federal 200 (Costera del Pacífico).',
    fechaFundacion: '1990',
  },
  {
    id: 'gro-san-marcos',
    nombre: 'Estación de Bomberos de San Marcos',
    nombreCorto: 'Bomberos San Marcos',
    slug: 'estacion-bomberos-san-marcos',
    direccion: 'Av. Principal 15, Col. Centro',
    colonia: 'Centro',
    ciudad: 'San Marcos',
    municipio: 'San Marcos',
    estado: 'Guerrero',
    codigoPostal: '39960',
    telefono: '(745) 453-0789',
    telefonoEmergencia: '911',
    email: 'sanmarcos@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 16.7956,
      lng: -99.3867
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Emergencias en zona agrícola (coco, mango)',
      'Rescate vehicular en carretera costera',
      'Emergencias por huracanes',
      'Incendios en plantaciones',
      'Atención prehospitalaria',
      'Inundaciones en temporada de lluvias',
    ],
    equipamiento: [
      'Autobomba rural',
      'Unidad de rescate',
      'Ambulancia',
      'Equipo para inundaciones',
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de San Marcos, municipio costero entre Acapulco y la Costa Chica. Zona agrícola importante con producción de coco, mango y limón. Personal capacitado en emergencias agrícolas, incendios en plantaciones y respuesta a huracanes que impactan la costa del Pacífico.',
    fechaFundacion: '2000',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA MONTAÑA Y TIERRA CALIENTE - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gro-tlapa',
    nombre: 'Estación de Bomberos de Tlapa de Comonfort',
    nombreCorto: 'Bomberos Tlapa',
    slug: 'estacion-bomberos-tlapa',
    direccion: 'Calle Guerrero 80, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Tlapa de Comonfort',
    municipio: 'Tlapa de Comonfort',
    estado: 'Guerrero',
    codigoPostal: '41304',
    telefono: '(757) 476-0234',
    telefonoEmergencia: '911',
    email: 'tlapa@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 17.5456,
      lng: -98.5756
    },
    servicios: [
      'Combate de incendios urbanos',
      'Emergencias en comunidades indígenas (Nahua, Mixteco, Tlapaneco)',
      'Incendios forestales en Sierra Madre del Sur',
      'Rescate en montaña',
      'Deslaves en temporada de lluvias',
      'Atención prehospitalaria en zonas remotas',
      'Emergencias en mercados tradicionales',
    ],
    especialidades: [
      'Atención a comunidades indígenas',
      'Rescate en terreno montañoso',
      'Incendios forestales',
    ],
    equipamiento: [
      'Autobomba todo terreno',
      'Vehículos 4x4',
      'Ambulancia rural',
      'Equipo de rescate en montaña',
      'Herramientas forestales',
    ],
    personal: 28,
    unidades: 5,
    descripcion: 'Estación de bomberos de Tlapa de Comonfort, centro de la región Montaña de Guerrero con importante población indígena Nahua, Mixteca y Tlapaneca. Zona de alta marginación con comunidades dispersas en la Sierra Madre del Sur. Personal capacitado en atención culturalmente apropiada, rescate en terreno montañoso y respuesta a deslaves. Centro comercial para decenas de comunidades serranas.',
    fechaFundacion: '1985',
  },
  {
    id: 'gro-altamirano',
    nombre: 'Estación de Bomberos de Ciudad Altamirano',
    nombreCorto: 'Bomberos Ciudad Altamirano',
    slug: 'estacion-bomberos-ciudad-altamirano',
    direccion: 'Av. Morelos 45, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Ciudad Altamirano',
    municipio: 'Pungarabato',
    estado: 'Guerrero',
    codigoPostal: '40660',
    telefono: '(767) 672-0567',
    telefonoEmergencia: '911',
    email: 'altamirano@proteccioncivil.guerrero.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 18.3578,
      lng: -100.6678
    },
    servicios: [
      'Combate de incendios urbanos',
      'Emergencias en zona agrícola (Tierra Caliente)',
      'Rescate vehicular en carretera hacia Michoacán',
      'Incendios en pastizales y cultivos',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Emergencias por calor extremo',
    ],
    equipamiento: [
      'Autobomba rural',
      'Unidad de rescate',
      'Ambulancia',
      'Vehículo todo terreno',
    ],
    personal: 20,
    unidades: 3,
    descripcion: 'Estación de bomberos de Ciudad Altamirano, centro de la región Tierra Caliente en el límite con Michoacán. Zona agrícola con clima cálido extremo que supera los 40°C en verano. Personal capacitado en emergencias por golpes de calor, incendios agrícolas y rescate vehicular en la carretera hacia Michoacán y el Bajío.',
    fechaFundacion: '1995',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES SEO Y FILTRADO
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Obtiene estaciones de la zona Acapulco
 */
export function getEstacionesAcapulco(): Estacion[] {
  return estacionesGuerrero.filter(e => e.ciudad === 'Acapulco de Juárez');
}

/**
 * Obtiene estaciones de la Costa Grande (Ixtapa-Zihuatanejo)
 */
export function getEstacionesCostaGrande(): Estacion[] {
  const ciudades = ['Zihuatanejo de Azueta', 'Ixtapa'];
  return estacionesGuerrero.filter(e => ciudades.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la zona Centro (Capital)
 */
export function getEstacionesCentro(): Estacion[] {
  return estacionesGuerrero.filter(e => e.ciudad === 'Chilpancingo de los Bravo');
}

/**
 * Obtiene estaciones de la zona Norte
 */
export function getEstacionesNorte(): Estacion[] {
  const ciudades = ['Iguala de la Independencia', 'Taxco de Alarcón', 'Teloloapan'];
  return estacionesGuerrero.filter(e => ciudades.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la Costa Chica
 */
export function getEstacionesCostaChica(): Estacion[] {
  const ciudades = ['Ometepec', 'San Marcos'];
  return estacionesGuerrero.filter(e => ciudades.includes(e.ciudad));
}

/**
 * Obtiene estaciones de la Montaña y Tierra Caliente
 */
export function getEstacionesMontana(): Estacion[] {
  const ciudades = ['Tlapa de Comonfort', 'Ciudad Altamirano'];
  return estacionesGuerrero.filter(e => ciudades.includes(e.ciudad));
}

/**
 * Obtiene estaciones con capacidad de rescate acuático
 */
export function getEstacionesRescateAcuatico(): Estacion[] {
  return estacionesGuerrero.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('acuático') ||
      s.toLowerCase().includes('embarcacion') ||
      s.toLowerCase().includes('playa') ||
      s.toLowerCase().includes('lancha')
    )
  );
}

/**
 * Obtiene estaciones turísticas
 */
export function getEstacionesTuristicas(): Estacion[] {
  return estacionesGuerrero.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('turís') ||
      s.toLowerCase().includes('hotel') ||
      s.toLowerCase().includes('resort')
    )
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

  let contexto = '';
  let keywordsAdicionales: string[] = [];

  if (estacion.ciudad === 'Acapulco de Juárez') {
    contexto = 'principal destino turístico de playa en México';
    keywordsAdicionales = GUERRERO_SEO.keywords.acapulco;
  } else if (estacion.ciudad === 'Zihuatanejo de Azueta' || estacion.ciudad === 'Ixtapa') {
    contexto = 'Costa Grande, destino turístico internacional';
    keywordsAdicionales = GUERRERO_SEO.keywords.ixtapa;
  } else if (estacion.ciudad === 'Chilpancingo de los Bravo') {
    contexto = 'capital del estado de Guerrero';
    keywordsAdicionales = GUERRERO_SEO.keywords.chilpancingo;
  } else if (estacion.ciudad === 'Taxco de Alarcón') {
    contexto = 'Pueblo Mágico, Capital Mundial de la Plata';
    keywordsAdicionales = GUERRERO_SEO.keywords.taxco;
  } else if (estacion.ciudad === 'Iguala de la Independencia') {
    contexto = 'cuna de la Bandera de México';
    keywordsAdicionales = GUERRERO_SEO.keywords.principales.slice(0, 5);
  } else {
    contexto = 'estado de Guerrero';
    keywordsAdicionales = GUERRERO_SEO.keywords.principales.slice(0, 5);
  }

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Guerrero`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Tel: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(', ')}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} guerrero`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      'bomberos guerrero',
      'emergencias guerrero',
      'protección civil guerrero',
      ...keywordsAdicionales.slice(0, 5),
    ],
    canonical: `https://bombero.mx/directorio/guerrero/${estacion.slug}`,
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
  icono: string;
} {
  if (ciudad === 'Acapulco de Juárez') {
    return {
      tipo: 'turístico-playa',
      descripcion: 'Principal destino turístico de playa en México',
      keywords: GUERRERO_SEO.keywords.acapulco,
      color: 'cyan',
      icono: '🏖️',
    };
  }

  if (ciudad === 'Zihuatanejo de Azueta' || ciudad === 'Ixtapa') {
    return {
      tipo: 'costa-grande',
      descripcion: 'Costa Grande, turismo internacional de playa',
      keywords: GUERRERO_SEO.keywords.ixtapa,
      color: 'teal',
      icono: '🌴',
    };
  }

  if (ciudad === 'Chilpancingo de los Bravo') {
    return {
      tipo: 'capital',
      descripcion: 'Capital del estado de Guerrero',
      keywords: GUERRERO_SEO.keywords.chilpancingo,
      color: 'blue',
      icono: '🏛️',
    };
  }

  if (ciudad === 'Taxco de Alarcón') {
    return {
      tipo: 'pueblo-magico',
      descripcion: 'Pueblo Mágico, Capital Mundial de la Plata',
      keywords: GUERRERO_SEO.keywords.taxco,
      color: 'slate',
      icono: '💎',
    };
  }

  if (ciudad === 'Iguala de la Independencia') {
    return {
      tipo: 'histórico',
      descripcion: 'Cuna de la Bandera de México',
      keywords: GUERRERO_SEO.keywords.principales,
      color: 'green',
      icono: '🇲🇽',
    };
  }

  if (['Ometepec', 'San Marcos'].includes(ciudad)) {
    return {
      tipo: 'costa-chica',
      descripcion: 'Costa Chica, comunidades afromexicanas',
      keywords: GUERRERO_SEO.keywords.principales,
      color: 'amber',
      icono: '🌊',
    };
  }

  if (ciudad === 'Tlapa de Comonfort') {
    return {
      tipo: 'montaña',
      descripcion: 'Región Montaña, comunidades indígenas',
      keywords: GUERRERO_SEO.keywords.principales,
      color: 'emerald',
      icono: '🏔️',
    };
  }

  if (ciudad === 'Ciudad Altamirano') {
    return {
      tipo: 'tierra-caliente',
      descripcion: 'Tierra Caliente, zona agrícola',
      keywords: GUERRERO_SEO.keywords.principales,
      color: 'orange',
      icono: '🌡️',
    };
  }

  return {
    tipo: 'regional',
    descripcion: 'Estado de Guerrero',
    keywords: GUERRERO_SEO.keywords.principales,
    color: 'gray',
    icono: '📍',
  };
}

/**
 * Estadísticas totales del estado
 */
export const ESTADISTICAS_GUERRERO = {
  total_estaciones: estacionesGuerrero.length,
  total_bomberos: estacionesGuerrero.reduce((sum, e) => sum + (e.personal || 0), 0),
  total_unidades: estacionesGuerrero.reduce((sum, e) => sum + (e.unidades || 0), 0),
  estaciones_acapulco: getEstacionesAcapulco().length,
  estaciones_costa_grande: getEstacionesCostaGrande().length,
  estaciones_centro: getEstacionesCentro().length,
  estaciones_norte: getEstacionesNorte().length,
  estaciones_costa_chica: getEstacionesCostaChica().length,
  estaciones_montana: getEstacionesMontana().length,
  estaciones_rescate_acuatico: getEstacionesRescateAcuatico().length,
  municipios_cubiertos: new Set(estacionesGuerrero.map(e => e.municipio)).size,
  riesgo_principal: 'Huracanes categoría 5, sismos (Brecha de Guerrero), tsunamis',
  industria_principal: 'Turismo (12M visitantes anuales)',
};

export default estacionesGuerrero;
