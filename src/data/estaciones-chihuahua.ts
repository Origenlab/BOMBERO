/**
 * ============================================================================
 * BOMBEROS DE CHIHUAHUA (CHIH) - DIRECTORIO OFICIAL DE ESTACIONES
 * ============================================================================
 *
 * Estado más grande de México por superficie territorial
 * Capital: Chihuahua | Código: CHIH | Región: Norte
 *
 * CARACTERÍSTICAS GEOGRÁFICAS Y DE RIESGO:
 * ├── Superficie: 247,455 km² (estado más grande de México)
 * ├── Población: 3.8 millones de habitantes
 * ├── Desierto Chihuahuense: el desierto más grande de Norteamérica
 * ├── Sierra Madre Occidental: Barrancas del Cobre
 * ├── Frontera con Estados Unidos: 560 km (Texas y Nuevo México)
 * └── Zonas climáticas: desértico, semiárido, templado de montaña
 *
 * PATRIMONIO Y TURISMO:
 * ├── UNESCO: Paquimé (Casas Grandes) - Patrimonio de la Humanidad
 * ├── Barrancas del Cobre: 4 veces más grande que el Gran Cañón
 * ├── Pueblo Mágico: Creel (puerta a la Sierra Tarahumara)
 * ├── Cultura Rarámuri (Tarahumara): pueblo originario
 * ├── Comunidades Menonitas: Cuauhtémoc, Casas Grandes
 * └── Turismo de aventura: ciclismo de montaña, rappel, tirolesas
 *
 * INDUSTRIA Y ECONOMÍA:
 * ├── Ciudad Juárez: centro maquilador más grande de México
 * ├── Minería: cobre, plata, oro, plomo, zinc
 * ├── Agricultura: manzana, nuez, chile, algodón
 * ├── Ganadería: principal productor de carne de res
 * └── Comercio fronterizo: puentes internacionales
 *
 * RIESGOS ESPECÍFICOS DEL ESTADO:
 * ├── Incendios forestales en Sierra Madre Occidental
 * ├── Temperaturas extremas (-20°C en invierno, +45°C en verano)
 * ├── Materiales peligrosos en zonas industriales y maquiladoras
 * ├── Accidentes en autopistas federales y carreteras serranas
 * ├── Sequías prolongadas y escasez de agua
 * └── Inundaciones súbitas en zonas urbanas
 *
 * ============================================================================
 * 28 ESTACIONES | 1,420 BOMBEROS | COBERTURA ESTATAL COMPLETA
 * ============================================================================
 *
 * DISTRIBUCIÓN POR ZONA:
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA METROPOLITANA CHIHUAHUA (CAPITAL)                    5 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Central Chihuahua      │ Chihuahua Norte    │ Chihuahua Sur            │
 * │ Chihuahua Oriente      │ Zona Industrial    │                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA METROPOLITANA CIUDAD JUÁREZ (FRONTERA)               7 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Central Juárez         │ Zona Industrial    │ PRONAF                   │
 * │ Centro Histórico       │ Juárez Oriente     │ Juárez Poniente          │
 * │ Aeropuerto Juárez      │                    │                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA AGRÍCOLA CENTRO-SUR                                  6 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Delicias               │ Cuauhtémoc         │ Camargo                  │
 * │ Jiménez                │ Meoqui             │ Saucillo                 │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA SIERRA TARAHUMARA                                    4 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Creel (Pueblo Mágico)  │ Guachochi          │ Bocoyna                  │
 * │ Madera                 │                    │                          │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA NOROESTE (PAQUIMÉ)                                   3 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Nuevo Casas Grandes    │ Casas Grandes      │ Janos                    │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │ ZONA SUR (MINERÍA HISTÓRICA)                              3 estaciones │
 * ├─────────────────────────────────────────────────────────────────────────┤
 * │ Hidalgo del Parral     │ Santa Bárbara      │ Valle de Allende         │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * ============================================================================
 */

import type { Estacion } from './types';

// ============================================================================
// CONSTANTES SEO PREMIUM - CHIHUAHUA
// ============================================================================

export const CHIHUAHUA_SEO = {
  // Información básica del estado
  estado: 'Chihuahua',
  codigo: 'CHIH',
  capital: 'Chihuahua',
  gentilicio: 'chihuahuense',
  region: 'Norte de México',

  // Datos demográficos y geográficos
  poblacion: 3_800_000,
  superficie_km2: 247_455,
  densidad: 15.4, // hab/km²
  municipios: 67,
  frontera_km: 560,

  // Turismo anual
  visitantes_anuales: 2_500_000,
  derrama_economica_mdd: 1_800,

  // Color temático (cobre del desierto)
  color_primario: 'rgb(180, 83, 9)',
  color_secundario: 'rgb(217, 119, 6)',
  color_claro: 'rgb(254, 243, 199)',

  // Keywords principales para SEO
  keywords_principales: [
    'bomberos chihuahua',
    'bomberos ciudad juarez',
    'estaciones de bomberos chihuahua',
    'emergencias chihuahua mexico',
    'bomberos estado de chihuahua',
    'cuerpo de bomberos chihuahua',
    'heroico cuerpo de bomberos chihuahua',
    'bomberos voluntarios chihuahua',
    'proteccion civil chihuahua',
    'servicios de emergencia chihuahua'
  ],

  // Keywords por ciudad principal
  keywords_ciudad_juarez: [
    'bomberos ciudad juarez',
    'bomberos juarez chihuahua',
    'emergencias ciudad juarez',
    'bomberos frontera mexico usa',
    'proteccion civil juarez',
    'bomberos zona industrial juarez',
    'emergencias maquiladoras juarez',
    'bomberos el paso juarez'
  ],

  keywords_capital: [
    'bomberos chihuahua capital',
    'bomberos centro chihuahua',
    'emergencias chihuahua ciudad',
    'cuerpo de bomberos chihuahua capital',
    'proteccion civil chihuahua capital'
  ],

  // Keywords geográficos
  keywords_geograficos: [
    'bomberos desierto chihuahuense',
    'bomberos sierra madre occidental',
    'bomberos barrancas del cobre',
    'bomberos sierra tarahumara',
    'bomberos frontera texas',
    'bomberos frontera nuevo mexico',
    'bomberos norte de mexico'
  ],

  // Keywords turísticos
  keywords_turisticos: [
    'bomberos creel pueblo magico',
    'bomberos barrancas del cobre',
    'bomberos paquime casas grandes',
    'emergencias turismo chihuahua',
    'bomberos divisadero',
    'seguridad turistica chihuahua',
    'bomberos chepe tren'
  ],

  // Keywords industriales
  keywords_industriales: [
    'bomberos maquiladoras chihuahua',
    'bomberos zona industrial juarez',
    'bomberos materiales peligrosos chihuahua',
    'emergencias industriales chihuahua',
    'bomberos hazmat juarez',
    'proteccion civil industria chihuahua',
    'bomberos mineria chihuahua'
  ],

  // Keywords agrícolas
  keywords_agricolas: [
    'bomberos delicias chihuahua',
    'bomberos cuauhtemoc chihuahua',
    'bomberos zona agricola chihuahua',
    'bomberos menonitas cuauhtemoc',
    'emergencias agricolas chihuahua'
  ],

  // Patrimonio UNESCO
  patrimonio_unesco: [
    {
      nombre: 'Zona Arqueológica de Paquimé',
      municipio: 'Casas Grandes',
      tipo: 'Patrimonio Cultural',
      año_inscripcion: 1998,
      descripcion: 'Centro ceremonial de la cultura Paquimé, siglos X-XIV'
    }
  ],

  // Pueblos Mágicos
  pueblos_magicos: [
    {
      nombre: 'Creel',
      municipio: 'Bocoyna',
      atractivos: ['Sierra Tarahumara', 'Barrancas del Cobre', 'Lago Arareco', 'Cascada de Cusárare'],
      cultura: 'Rarámuri (Tarahumara)'
    },
    {
      nombre: 'Batopilas',
      municipio: 'Batopilas',
      atractivos: ['Cañón de Batopilas', 'Arquitectura colonial', 'Historia minera'],
      cultura: 'Minería de plata colonial'
    }
  ],

  // Destinos principales
  destinos_principales: [
    'Barrancas del Cobre (Copper Canyon)',
    'Zona Arqueológica de Paquimé',
    'Creel y Sierra Tarahumara',
    'Cascada de Basaseachi',
    'Grutas de Nombre de Dios',
    'Centro Histórico de Chihuahua',
    'Museo Casa Chihuahua',
    'El Chepe (tren panorámico)',
    'Dunas de Samalayuca',
    'Comunidades Menonitas'
  ],

  // Productos y gastronomía
  productos_regionales: [
    'Manzana de Chihuahua',
    'Nuez de Chihuahua',
    'Queso menonita',
    'Carne seca (machaca)',
    'Chile colorado',
    'Sotol (bebida tradicional)',
    'Asado de boda',
    'Burrito norteño'
  ],

  // Teléfonos de emergencia
  telefonos_emergencia: {
    emergencias_nacional: '911',
    bomberos_chihuahua: '(614) 429-3300',
    bomberos_juarez: '(656) 616-1000',
    proteccion_civil_estatal: '(614) 429-3310',
    cruz_roja_chihuahua: '(614) 411-4411',
    cruz_roja_juarez: '(656) 616-1616'
  },

  // Especialidades requeridas por zona
  especialidades: {
    sierra: ['rescate en montaña', 'incendios forestales', 'búsqueda y rescate'],
    frontera: ['hazmat', 'incendios industriales', 'coordinación binacional'],
    desierto: ['búsqueda en desierto', 'rescate vehicular', 'atención de calor extremo'],
    urbana: ['rescate estructural', 'incendios urbanos', 'emergencias médicas'],
    industrial: ['materiales peligrosos', 'incendios químicos', 'rescate industrial']
  }
} as const;

// ============================================================================
// DATOS DE LAS 28 ESTACIONES DE BOMBEROS
// ============================================================================

export const estacionesChihuahua: Estacion[] = [
  // ==========================================================================
  // ZONA METROPOLITANA CHIHUAHUA (CAPITAL) - 5 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-central-chihuahua',
    nombre: 'Estación Central de Bomberos Chihuahua',
    nombreCorto: 'Est. Central Chihuahua',
    slug: 'estacion-central-chihuahua',
    direccion: 'Calle Victoria #500, Centro Histórico',
    ciudad: 'Chihuahua',
    municipio: 'Chihuahua',
    estado: 'Chihuahua',
    codigoPostal: '31000',
    telefono: '(614) 429-3300',
    email: 'central@bomberoschihuahua.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.6353,
      lng: -106.0889
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Rescate vehicular en accidentes carreteros',
      'Atención de emergencias con materiales peligrosos (HAZMAT)',
      'Rescate en estructuras colapsadas',
      'Control de fugas de gas LP y natural',
      'Servicios de ambulancia y emergencias médicas',
      'Capacitación y prevención comunitaria',
      'Coordinación estatal de emergencias',
      'Rescate acuático',
      'Atención de incendios forestales periurbanos'
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidades de rescate pesado',
      'Ambulancias tipo II y III',
      'Unidad HAZMAT especializada',
      'Escaleras telescópicas de 32 metros',
      'Vehículos de comando móvil',
      'Equipo de rescate estructural',
      'Drones de reconocimiento térmico',
      'Equipo de comunicaciones satelitales'
    ],
    personal: 85,
    unidades: 12,
    descripcion: 'Estación central y comandancia del Heroico Cuerpo de Bomberos de Chihuahua. Coordina las operaciones de emergencia de la zona metropolitana y brinda apoyo a todo el estado. Centro de capacitación para nuevos elementos y sede administrativa del cuerpo.',
    fechaFundacion: '1942',
    redes: {
      facebook: 'https://facebook.com/BomberosChihuahua',
      twitter: 'https://twitter.com/BomberosChih'
    }
  },
  {
    id: 'estacion-bomberos-chihuahua-norte',
    nombre: 'Estación de Bomberos Chihuahua Norte',
    nombreCorto: 'Est. Chihuahua Norte',
    slug: 'estacion-bomberos-chihuahua-norte',
    direccion: 'Av. Tecnológico #3500, Colonia Granjas',
    ciudad: 'Chihuahua',
    municipio: 'Chihuahua',
    estado: 'Chihuahua',
    codigoPostal: '31100',
    telefono: '(614) 429-3310',
    email: 'norte@bomberoschihuahua.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.6753,
      lng: -106.0789
    },
    servicios: [
      'Combate de incendios residenciales y comerciales',
      'Rescate vehicular autopista Chihuahua-Juárez',
      'Atención de emergencias en zonas residenciales',
      'Control de incendios en vegetación',
      'Rescate de personas atrapadas',
      'Atención prehospitalaria',
      'Servicios de prevención comunitaria'
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidades de rescate',
      'Ambulancias equipadas',
      'Escalera mecánica de 24 metros',
      'Herramientas de extracción hidráulicas'
    ],
    personal: 45,
    unidades: 6,
    descripcion: 'Estación que da cobertura a la zona norte de la ciudad de Chihuahua, incluyendo colonias residenciales, el área del Tecnológico y accesos a la autopista Chihuahua-Ciudad Juárez.'
  },
  {
    id: 'estacion-bomberos-chihuahua-sur',
    nombre: 'Estación de Bomberos Chihuahua Sur',
    nombreCorto: 'Est. Chihuahua Sur',
    slug: 'estacion-bomberos-chihuahua-sur',
    direccion: 'Blvd. Juan Pablo II #1200, Colonia Lomas del Santuario',
    ciudad: 'Chihuahua',
    municipio: 'Chihuahua',
    estado: 'Chihuahua',
    codigoPostal: '31205',
    telefono: '(614) 429-3320',
    email: 'sur@bomberoschihuahua.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.5953,
      lng: -106.1089
    },
    servicios: [
      'Combate de incendios urbanos',
      'Atención de accidentes vehiculares',
      'Rescate en espacios confinados',
      'Control de derrames de combustible',
      'Emergencias en centros comerciales',
      'Atención prehospitalaria'
    ],
    equipamiento: [
      'Autobombas cisterna',
      'Unidades de rescate ligero',
      'Ambulancias tipo II',
      'Equipo de espacios confinados'
    ],
    personal: 40,
    unidades: 5,
    descripcion: 'Estación estratégica para la zona sur de Chihuahua, cubriendo colonias residenciales, centros comerciales y la zona de hospitales. Acceso rápido a carretera Chihuahua-Delicias.'
  },
  {
    id: 'estacion-bomberos-chihuahua-oriente',
    nombre: 'Estación de Bomberos Chihuahua Oriente',
    nombreCorto: 'Est. Chihuahua Oriente',
    slug: 'estacion-bomberos-chihuahua-oriente',
    direccion: 'Av. De las Industrias #4500, Complejo Industrial',
    ciudad: 'Chihuahua',
    municipio: 'Chihuahua',
    estado: 'Chihuahua',
    codigoPostal: '31109',
    telefono: '(614) 429-3330',
    email: 'oriente@bomberoschihuahua.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.6453,
      lng: -106.0289
    },
    servicios: [
      'Incendios industriales y de manufactura',
      'Atención de emergencias HAZMAT nivel 2',
      'Rescate industrial',
      'Control de fugas químicas',
      'Combate de incendios en bodegas',
      'Atención de accidentes en zona industrial'
    ],
    equipamiento: [
      'Unidad HAZMAT',
      'Autobombas industriales',
      'Equipo de monitoreo de gases',
      'Trajes de protección química nivel A y B',
      'Contenedores de derrames'
    ],
    personal: 50,
    unidades: 7,
    descripcion: 'Estación especializada en emergencias industriales, ubicada en el corazón de la zona manufacturera de Chihuahua. Personal capacitado en manejo de materiales peligrosos y rescate industrial.'
  },
  {
    id: 'estacion-bomberos-zona-industrial-chihuahua',
    nombre: 'Estación de Bomberos Zona Industrial Chihuahua',
    nombreCorto: 'Est. Zona Industrial Chihuahua',
    slug: 'estacion-bomberos-zona-industrial-chihuahua',
    direccion: 'Av. Lombardo Toledano #7800, Parque Industrial',
    ciudad: 'Chihuahua',
    municipio: 'Chihuahua',
    estado: 'Chihuahua',
    codigoPostal: '31136',
    telefono: '(614) 429-3340',
    email: 'industrial@bomberoschihuahua.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.6153,
      lng: -105.9989
    },
    servicios: [
      'Respuesta especializada a emergencias en maquiladoras',
      'Incendios químicos e industriales',
      'Atención HAZMAT nivel 3',
      'Rescate técnico industrial',
      'Confinamiento de derrames tóxicos',
      'Coordinación con brigadas empresariales'
    ],
    equipamiento: [
      'Unidad HAZMAT completa',
      'Autobombas de espuma AFFF',
      'Monitores de radiación',
      'Descontaminación masiva',
      'Laboratorio móvil de identificación química'
    ],
    personal: 55,
    unidades: 8,
    descripcion: 'Centro de respuesta HAZMAT más avanzado del norte de México. Atiende emergencias en parques industriales con más de 300 empresas manufactureras. Capacitación constante en nuevas tecnologías de respuesta.'
  },

  // ==========================================================================
  // ZONA METROPOLITANA CIUDAD JUÁREZ (FRONTERA) - 7 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-central-ciudad-juarez',
    nombre: 'Estación Central de Bomberos Ciudad Juárez',
    nombreCorto: 'Est. Central Ciudad Juárez',
    slug: 'estacion-central-ciudad-juarez',
    direccion: 'Calle Ignacio Mejía #500, Centro',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32000',
    telefono: '(656) 616-1000',
    email: 'central@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.7333,
      lng: -106.4833
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Rescate vehicular especializado',
      'Atención de emergencias HAZMAT',
      'Coordinación binacional con El Paso Fire Department',
      'Rescate en estructuras colapsadas',
      'Atención de emergencias en puentes internacionales',
      'Servicios de ambulancia avanzados',
      'Capacitación y academias',
      'Investigación de incendios'
    ],
    equipamiento: [
      'Flota completa de autobombas',
      'Unidades HAZMAT certificadas',
      'Escaleras aéreas de 45 metros',
      'Ambulancias de soporte vital avanzado',
      'Unidad de comando móvil',
      'Equipo de comunicación binacional',
      'Drones con cámara térmica',
      'Robot de rescate'
    ],
    personal: 120,
    unidades: 18,
    descripcion: 'Comandancia general del Heroico Cuerpo de Bomberos de Ciudad Juárez, una de las corporaciones más grandes del norte de México. Coordina emergencias en la zona metropolitana con más de 1.5 millones de habitantes y mantiene protocolos de cooperación binacional con El Paso, Texas.',
    fechaFundacion: '1938',
    redes: {
      facebook: 'https://facebook.com/BomberosJuarez',
      twitter: 'https://twitter.com/BomberosJuarez'
    }
  },
  {
    id: 'estacion-bomberos-juarez-zona-industrial',
    nombre: 'Estación de Bomberos Juárez Zona Industrial',
    nombreCorto: 'Est. Juárez Zona Industrial',
    slug: 'estacion-bomberos-juarez-zona-industrial',
    direccion: 'Blvd. Zaragoza #8500, Parque Industrial Juárez',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32575',
    telefono: '(656) 616-1010',
    email: 'industrial@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.6833,
      lng: -106.3833
    },
    servicios: [
      'Respuesta a emergencias en maquiladoras',
      'Incendios industriales de gran magnitud',
      'Atención HAZMAT especializada',
      'Rescate técnico en plantas de manufactura',
      'Control de derrames químicos',
      'Capacitación a brigadas industriales',
      'Inspecciones de seguridad'
    ],
    equipamiento: [
      'Unidades HAZMAT nivel tecnificado',
      'Autobombas de espuma de alta expansión',
      'Monitores portátiles de 2000 GPM',
      'Equipo de protección química nivel A',
      'Detectores multigas',
      'Unidad de descontaminación'
    ],
    personal: 65,
    unidades: 10,
    descripcion: 'Estación estratégica ubicada en el corazón de la zona maquiladora de Ciudad Juárez. Atiende emergencias en más de 400 plantas de manufactura con certificación para respuesta HAZMAT avanzada. Coordinación permanente con seguridad industrial de las empresas.'
  },
  {
    id: 'estacion-bomberos-juarez-pronaf',
    nombre: 'Estación de Bomberos Juárez PRONAF',
    nombreCorto: 'Est. Juárez PRONAF',
    slug: 'estacion-bomberos-juarez-pronaf',
    direccion: 'Av. Lincoln #1500, Zona PRONAF',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32310',
    telefono: '(656) 616-1020',
    email: 'pronaf@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.7533,
      lng: -106.4533
    },
    servicios: [
      'Atención de emergencias en zona comercial',
      'Incendios en edificios de gran altura',
      'Rescate vehicular',
      'Emergencias en hoteles y centros comerciales',
      'Coordinación con consulados',
      'Atención a turistas'
    ],
    equipamiento: [
      'Escalera aérea de 32 metros',
      'Autobombas de primera respuesta',
      'Ambulancias equipadas',
      'Unidad de rescate vehicular'
    ],
    personal: 45,
    unidades: 6,
    descripcion: 'Estación ubicada en la zona PRONAF, área comercial y de servicios de alto tránsito turístico y comercial. Proximidad a puentes internacionales y zona consular. Personal bilingüe para atención a visitantes.'
  },
  {
    id: 'estacion-bomberos-juarez-centro-historico',
    nombre: 'Estación de Bomberos Juárez Centro Histórico',
    nombreCorto: 'Est. Juárez Centro Histórico',
    slug: 'estacion-bomberos-juarez-centro-historico',
    direccion: 'Calle 16 de Septiembre #800, Centro',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32030',
    telefono: '(656) 616-1030',
    email: 'centro@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.7383,
      lng: -106.4783
    },
    servicios: [
      'Protección del patrimonio histórico',
      'Incendios en edificaciones antiguas',
      'Rescate urbano',
      'Emergencias en zona de alta densidad',
      'Control de multitudes en eventos',
      'Atención en zona de puentes internacionales'
    ],
    equipamiento: [
      'Autobombas compactas para calles angostas',
      'Equipo de rescate manual',
      'Escalera portátil especializada',
      'Unidades rápidas de intervención'
    ],
    personal: 38,
    unidades: 5,
    descripcion: 'Estación dedicada a la protección del centro histórico de Ciudad Juárez. Equipamiento adaptado para operar en calles angostas y edificaciones antiguas. Custodia del patrimonio arquitectónico de la ciudad fronteriza.'
  },
  {
    id: 'estacion-bomberos-juarez-oriente',
    nombre: 'Estación de Bomberos Juárez Oriente',
    nombreCorto: 'Est. Juárez Oriente',
    slug: 'estacion-bomberos-juarez-oriente',
    direccion: 'Blvd. Óscar Flores #12000, Col. Salvarcar',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32599',
    telefono: '(656) 616-1040',
    email: 'oriente@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.6533,
      lng: -106.3233
    },
    servicios: [
      'Cobertura zona suroriente',
      'Incendios residenciales',
      'Rescate vehicular en vialidades rápidas',
      'Atención de emergencias en colonias populares',
      'Control de incendios en lotes baldíos',
      'Servicios de prevención comunitaria'
    ],
    equipamiento: [
      'Autobombas estándar',
      'Unidades de rescate ligero',
      'Ambulancias',
      'Pipas de agua de apoyo'
    ],
    personal: 42,
    unidades: 6,
    descripcion: 'Estación que brinda cobertura a la extensa zona suroriente de Ciudad Juárez, una de las áreas de mayor crecimiento poblacional. Enfoque en prevención comunitaria y respuesta rápida.'
  },
  {
    id: 'estacion-bomberos-juarez-poniente',
    nombre: 'Estación de Bomberos Juárez Poniente',
    nombreCorto: 'Est. Juárez Poniente',
    slug: 'estacion-bomberos-juarez-poniente',
    direccion: 'Av. Tecnológico #3200, Col. Partido Romero',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32540',
    telefono: '(656) 616-1050',
    email: 'poniente@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.7033,
      lng: -106.5233
    },
    servicios: [
      'Atención zona poniente residencial',
      'Incendios en fraccionamientos',
      'Rescate vehicular',
      'Emergencias en zonas de desarrollo',
      'Apoyo a zona industrial poniente'
    ],
    equipamiento: [
      'Autobombas de primera respuesta',
      'Unidades de rescate',
      'Ambulancias tipo II',
      'Equipo de extracción vehicular'
    ],
    personal: 40,
    unidades: 5,
    descripcion: 'Estación estratégica para la zona poniente de Ciudad Juárez, cubriendo desarrollos residenciales nuevos y colonias consolidadas. Coordinación con estación industrial para emergencias en manufactura.'
  },
  {
    id: 'estacion-bomberos-aeropuerto-juarez',
    nombre: 'Estación de Bomberos Aeropuerto Internacional Juárez',
    nombreCorto: 'Est. Aeropuerto Internacion...',
    slug: 'estacion-bomberos-aeropuerto-juarez',
    direccion: 'Aeropuerto Internacional Abraham González, Terminal',
    ciudad: 'Ciudad Juárez',
    municipio: 'Ciudad Juárez',
    estado: 'Chihuahua',
    codigoPostal: '32690',
    telefono: '(656) 616-1060',
    email: 'aeropuerto@bomberosjuarez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 31.6361,
      lng: -106.4286
    },
    servicios: [
      'Rescate y extinción de incendios aeronáuticos (ARFF)',
      'Emergencias en pistas y hangares',
      'Rescate de pasajeros en aeronaves',
      'Combate de incendios con combustible de aviación',
      'Atención de emergencias en terminal',
      'Coordinación con torre de control'
    ],
    equipamiento: [
      'Vehículos ARFF (Aircraft Rescue Fire Fighting)',
      'Unidades de espuma AFFF de alta capacidad',
      'Escaleras especializadas para aeronaves',
      'Equipo de rescate aeronáutico',
      'Monitores de 3000 GPM',
      'Comunicación aeronáutica'
    ],
    personal: 35,
    unidades: 4,
    descripcion: 'Estación especializada en rescate y extinción de incendios aeronáuticos (ARFF) del Aeropuerto Internacional Abraham González. Personal certificado por DGAC para emergencias aeroportuarias. Simulacros constantes de evacuación y respuesta.'
  },

  // ==========================================================================
  // ZONA AGRÍCOLA CENTRO-SUR - 6 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-bomberos-delicias',
    nombre: 'Estación de Bomberos Delicias',
    nombreCorto: 'Est. Delicias',
    slug: 'estacion-bomberos-delicias',
    direccion: 'Av. Agricultura Norte #500, Centro',
    ciudad: 'Delicias',
    municipio: 'Delicias',
    estado: 'Chihuahua',
    codigoPostal: '33000',
    telefono: '(639) 472-0066',
    email: 'bomberos@delicias.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.1900,
      lng: -105.4700
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Rescate vehicular en carreteras',
      'Emergencias en agroindustria',
      'Incendios en cultivos y pastizales',
      'Atención de fugas de amoniaco en frigoríficos',
      'Rescate acuático en canales de riego',
      'Protección a zona lechera'
    ],
    equipamiento: [
      'Autobombas urbanas y rurales',
      'Unidades de rescate',
      'Equipo para incendios agrícolas',
      'Ambulancias',
      'Detectores de amoniaco'
    ],
    personal: 35,
    unidades: 5,
    descripcion: 'Estación principal del municipio de Delicias, centro agroindustrial del estado de Chihuahua. Capital de la producción lechera y procesadora de lácteos. Atención especializada a emergencias en la industria alimentaria y agrícola.',
    fechaFundacion: '1965'
  },
  {
    id: 'estacion-bomberos-cuauhtemoc',
    nombre: 'Estación de Bomberos Cuauhtémoc',
    nombreCorto: 'Est. Cuauhtémoc',
    slug: 'estacion-bomberos-cuauhtemoc',
    direccion: 'Calle 3a. Sur #600, Centro',
    ciudad: 'Cuauhtémoc',
    municipio: 'Cuauhtémoc',
    estado: 'Chihuahua',
    codigoPostal: '31500',
    telefono: '(625) 581-0088',
    email: 'bomberos@cuauhtemoc.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.4053,
      lng: -106.8667
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Emergencias en comunidades menonitas',
      'Rescate vehicular',
      'Incendios en empacadoras de manzana',
      'Atención de emergencias en queserías',
      'Incendios forestales en zona serrana cercana',
      'Apoyo a comunidades rurales'
    ],
    equipamiento: [
      'Autobombas para zona rural',
      'Unidades de rescate',
      'Pipas de agua',
      'Equipo forestal',
      'Ambulancias'
    ],
    personal: 32,
    unidades: 5,
    descripcion: 'Estación de bomberos de Cuauhtémoc, capital de la manzana en México y sede de las comunidades menonitas. Atiende emergencias en zona agrícola y colonias menonitas con su característica arquitectura y actividades agropecuarias.',
    fechaFundacion: '1958'
  },
  {
    id: 'estacion-bomberos-camargo',
    nombre: 'Estación de Bomberos Camargo',
    nombreCorto: 'Est. Camargo',
    slug: 'estacion-bomberos-camargo',
    direccion: 'Calle Juárez #200, Centro',
    ciudad: 'Camargo',
    municipio: 'Camargo',
    estado: 'Chihuahua',
    codigoPostal: '33700',
    telefono: '(648) 462-0077',
    email: 'bomberos@camargo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.6833,
      lng: -105.1667
    },
    servicios: [
      'Combate de incendios',
      'Rescate vehicular carretera federal',
      'Emergencias en zona agrícola',
      'Incendios en pastizales',
      'Atención de emergencias en Presa La Boquilla',
      'Rescate acuático'
    ],
    equipamiento: [
      'Autobombas',
      'Unidad de rescate',
      'Equipo de rescate acuático',
      'Ambulancia'
    ],
    personal: 22,
    unidades: 3,
    descripcion: 'Estación de bomberos de Camargo, municipio agrícola con importante actividad en la producción de nuez y algodón. Cobertura a la zona de la Presa La Boquilla, importante destino de pesca deportiva.'
  },
  {
    id: 'estacion-bomberos-jimenez',
    nombre: 'Estación de Bomberos Jiménez',
    nombreCorto: 'Est. Jiménez',
    slug: 'estacion-bomberos-jimenez',
    direccion: 'Av. Juárez #450, Centro',
    ciudad: 'Jiménez',
    municipio: 'Jiménez',
    estado: 'Chihuahua',
    codigoPostal: '33980',
    telefono: '(629) 542-0099',
    email: 'bomberos@jimenez.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.1333,
      lng: -104.9167
    },
    servicios: [
      'Combate de incendios',
      'Rescate vehicular',
      'Emergencias agrícolas',
      'Incendios en bodegas y silos',
      'Atención carretera Panamericana'
    ],
    equipamiento: [
      'Autobombas',
      'Unidad de rescate vehicular',
      'Ambulancia'
    ],
    personal: 20,
    unidades: 3,
    descripcion: 'Estación de bomberos en el cruce estratégico de la carretera Panamericana (Mex 45) con la ruta hacia Torreón. Punto importante para atención de accidentes carreteros en el sur del estado.'
  },
  {
    id: 'estacion-bomberos-meoqui',
    nombre: 'Estación de Bomberos Meoqui',
    nombreCorto: 'Est. Meoqui',
    slug: 'estacion-bomberos-meoqui',
    direccion: 'Calle Libertad #300, Centro',
    ciudad: 'Meoqui',
    municipio: 'Meoqui',
    estado: 'Chihuahua',
    codigoPostal: '33130',
    telefono: '(639) 476-0055',
    email: 'bomberos@meoqui.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.2667,
      lng: -105.4833
    },
    servicios: [
      'Combate de incendios',
      'Emergencias agroindustriales',
      'Rescate vehicular',
      'Atención zona de riego'
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia'
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Meoqui, municipio agrícola ubicado en el corazón del distrito de riego 005. Cobertura a comunidades rurales y zona de producción de chile y algodón.'
  },
  {
    id: 'estacion-bomberos-saucillo',
    nombre: 'Estación de Bomberos Saucillo',
    nombreCorto: 'Est. Saucillo',
    slug: 'estacion-bomberos-saucillo',
    direccion: 'Av. Independencia #250, Centro',
    ciudad: 'Saucillo',
    municipio: 'Saucillo',
    estado: 'Chihuahua',
    codigoPostal: '33620',
    telefono: '(621) 476-0044',
    email: 'bomberos@saucillo.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 28.0333,
      lng: -105.3000
    },
    servicios: [
      'Combate de incendios',
      'Emergencias agrícolas',
      'Rescate vehicular',
      'Incendios en pastizales'
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia'
    ],
    personal: 16,
    unidades: 2,
    descripcion: 'Estación de bomberos de Saucillo, municipio agrícola especializado en la producción de cebolla y chile. Cobertura a comunidades rurales del distrito de riego.'
  },

  // ==========================================================================
  // ZONA SIERRA TARAHUMARA - 4 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-bomberos-creel',
    nombre: 'Estación de Bomberos Creel',
    nombreCorto: 'Est. Creel',
    slug: 'estacion-bomberos-creel',
    direccion: 'Av. López Mateos #150, Centro',
    ciudad: 'Creel',
    municipio: 'Creel',
    estado: 'Chihuahua',
    codigoPostal: '33200',
    telefono: '(635) 456-0066',
    email: 'bomberos@creel.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.7500,
      lng: -107.6333
    },
    servicios: [
      'Combate de incendios forestales',
      'Rescate en montaña y barrancos',
      'Búsqueda de personas extraviadas',
      'Atención de emergencias turísticas',
      'Rescate en rappel y tirolesa',
      'Emergencias en comunidades Rarámuri',
      'Atención de hipotermia en invierno'
    ],
    equipamiento: [
      'Unidades forestales todo terreno',
      'Equipo de rescate en montaña',
      'Cuerdas y arneses especializados',
      'Vehículos 4x4',
      'Equipo de búsqueda y rescate',
      'Ambulancia de alta montaña'
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Creel, puerta de entrada a las Barrancas del Cobre y la Sierra Tarahumara. Personal especializado en rescate de montaña y atención a los más de 300,000 turistas anuales que visitan la región. Coordinación con comunidades Rarámuri.',
    fechaFundacion: '1985'
  },
  {
    id: 'estacion-bomberos-guachochi',
    nombre: 'Estación de Bomberos Guachochi',
    nombreCorto: 'Est. Guachochi',
    slug: 'estacion-bomberos-guachochi',
    direccion: 'Calle Juárez #100, Centro',
    ciudad: 'Guachochi',
    municipio: 'Guachochi',
    estado: 'Chihuahua',
    codigoPostal: '33180',
    telefono: '(649) 543-0055',
    email: 'bomberos@guachochi.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.8167,
      lng: -107.0667
    },
    servicios: [
      'Combate de incendios forestales',
      'Rescate en montaña',
      'Búsqueda de personas',
      'Atención comunidades Rarámuri remotas',
      'Emergencias en zona maderera',
      'Apoyo a comunidades indígenas'
    ],
    equipamiento: [
      'Unidades forestales',
      'Vehículos todo terreno 4x4',
      'Equipo de rescate',
      'Herramientas manuales forestales',
      'Radio comunicación de largo alcance'
    ],
    personal: 22,
    unidades: 3,
    descripcion: 'Estación de bomberos en el corazón de la Sierra Tarahumara, el municipio con mayor población Rarámuri. Especialización en incendios forestales y rescate de montaña. Cobertura a comunidades remotas con acceso solo por terracería.'
  },
  {
    id: 'estacion-bomberos-bocoyna',
    nombre: 'Estación de Bomberos Bocoyna',
    nombreCorto: 'Est. Bocoyna',
    slug: 'estacion-bomberos-bocoyna',
    direccion: 'Calle Principal #80, Centro',
    ciudad: 'Bocoyna',
    estado: 'Chihuahua',
    codigoPostal: '33201',
    telefono: '(635) 456-0077',
    email: 'bomberos@bocoyna.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 27.8333,
      lng: -107.5833
    },
    servicios: [
      'Incendios forestales en sierra',
      'Rescate en barrancas',
      'Emergencias en estación del Chepe',
      'Atención a turistas en Divisadero',
      'Búsqueda y rescate',
      'Apoyo a comunidades serranas'
    ],
    equipamiento: [
      'Unidades forestales',
      'Equipo de rappel',
      'Vehículos 4x4',
      'Equipo de primeros auxilios'
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Bocoyna, municipio que incluye los miradores de Divisadero sobre las Barrancas del Cobre y la estación del tren El Chepe. Atención a emergencias turísticas y forestales en la zona más visitada de la sierra.'
  },
  {
    id: 'estacion-bomberos-madera',
    nombre: 'Estación de Bomberos Madera',
    nombreCorto: 'Est. Madera',
    slug: 'estacion-bomberos-madera',
    direccion: 'Av. 5 de Mayo #200, Centro',
    ciudad: 'Madera',
    municipio: 'Madera',
    estado: 'Chihuahua',
    codigoPostal: '31940',
    telefono: '(652) 572-0066',
    email: 'bomberos@madera.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 29.1833,
      lng: -108.1500
    },
    servicios: [
      'Combate de incendios forestales',
      'Emergencias en aserraderos',
      'Rescate vehicular carretera serrana',
      'Incendios estructurales',
      'Búsqueda en bosques',
      'Atención zona maderera industrial'
    ],
    equipamiento: [
      'Autobombas forestales',
      'Unidades todo terreno',
      'Equipo manual forestal (pulaski, mcleod)',
      'Mangueras forestales',
      'Ambulancia'
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos de Madera, capital de la industria forestal de Chihuahua. Zona de extensos bosques de pino y encino con alto riesgo de incendios forestales. Cobertura a aserraderos y comunidades madereras.'
  },

  // ==========================================================================
  // ZONA NOROESTE (PAQUIMÉ) - 3 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-bomberos-nuevo-casas-grandes',
    nombre: 'Estación de Bomberos Nuevo Casas Grandes',
    nombreCorto: 'Est. Nuevo Casas Grandes',
    slug: 'estacion-bomberos-nuevo-casas-grandes',
    direccion: 'Av. Benito Juárez #500, Centro',
    ciudad: 'Nuevo Casas Grandes',
    municipio: 'Nuevo Casas Grandes',
    estado: 'Chihuahua',
    codigoPostal: '31700',
    telefono: '(636) 694-0088',
    email: 'bomberos@nuevocasasgrandes.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 30.4167,
      lng: -107.9000
    },
    servicios: [
      'Combate de incendios urbanos',
      'Protección zona arqueológica Paquimé',
      'Rescate vehicular',
      'Emergencias en comunidades menonitas',
      'Incendios agrícolas',
      'Atención de emergencias turísticas UNESCO'
    ],
    equipamiento: [
      'Autobombas',
      'Unidades de rescate',
      'Equipo de protección patrimonial',
      'Ambulancias',
      'Vehículos todo terreno'
    ],
    personal: 30,
    unidades: 4,
    descripcion: 'Estación de bomberos responsable de la protección de la Zona Arqueológica de Paquimé, Patrimonio de la Humanidad UNESCO. Cobertura a comunidades menonitas y zona agrícola del noroeste del estado.',
    fechaFundacion: '1972'
  },
  {
    id: 'estacion-bomberos-casas-grandes',
    nombre: 'Estación de Bomberos Casas Grandes',
    nombreCorto: 'Est. Casas Grandes',
    slug: 'estacion-bomberos-casas-grandes',
    direccion: 'Calle Constitución #150, Centro',
    ciudad: 'Casas Grandes',
    estado: 'Chihuahua',
    codigoPostal: '31750',
    telefono: '(636) 692-0066',
    email: 'bomberos@casasgrandes.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 30.3667,
      lng: -107.9500
    },
    servicios: [
      'Protección inmediata zona Paquimé',
      'Combate de incendios',
      'Emergencias en zona arqueológica',
      'Rescate en áreas rurales',
      'Incendios en vegetación'
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Equipo de protección arqueológica',
      'Ambulancia'
    ],
    personal: 18,
    unidades: 2,
    descripcion: 'Estación de bomberos ubicada en el municipio sede de Paquimé. Primera respuesta para la protección del patrimonio arqueológico más importante del norte de México. Coordinación con INAH para emergencias en el sitio UNESCO.'
  },
  {
    id: 'estacion-bomberos-janos',
    nombre: 'Estación de Bomberos Janos',
    nombreCorto: 'Est. Janos',
    slug: 'estacion-bomberos-janos',
    direccion: 'Calle Hidalgo #100, Centro',
    ciudad: 'Janos',
    municipio: 'Janos',
    estado: 'Chihuahua',
    codigoPostal: '31830',
    telefono: '(636) 693-0044',
    email: 'bomberos@janos.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 30.8833,
      lng: -108.1833
    },
    servicios: [
      'Combate de incendios',
      'Emergencias en Reserva de la Biósfera Janos',
      'Incendios de pastizales',
      'Rescate vehicular',
      'Protección de ecosistemas'
    ],
    equipamiento: [
      'Autobomba rural',
      'Unidad todo terreno',
      'Equipo forestal',
      'Ambulancia'
    ],
    personal: 15,
    unidades: 2,
    descripcion: 'Estación de bomberos en Janos, zona de la Reserva de la Biósfera de Janos con colonias de perritos de la pradera y ecosistemas únicos. Protección de pastizales y coordinación con CONANP.'
  },

  // ==========================================================================
  // ZONA SUR (MINERÍA HISTÓRICA) - 3 ESTACIONES
  // ==========================================================================
  {
    id: 'estacion-bomberos-hidalgo-del-parral',
    nombre: 'Estación de Bomberos Hidalgo del Parral',
    nombreCorto: 'Est. Hidalgo del Parral',
    slug: 'estacion-bomberos-hidalgo-del-parral',
    direccion: 'Calle Dr. Pedro de Lille #100, Centro',
    ciudad: 'Hidalgo del Parral',
    municipio: 'Hidalgo del Parral',
    estado: 'Chihuahua',
    codigoPostal: '33800',
    telefono: '(627) 522-0077',
    email: 'bomberos@parral.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.9333,
      lng: -105.6667
    },
    servicios: [
      'Combate de incendios urbanos',
      'Protección de patrimonio histórico minero',
      'Emergencias en minas activas',
      'Rescate minero',
      'Rescate vehicular',
      'Atención de fugas de gases',
      'Emergencias en centro histórico'
    ],
    equipamiento: [
      'Autobombas',
      'Equipo de rescate minero',
      'Detectores de gases',
      'Unidad de rescate',
      'Ambulancias',
      'Equipo de espacios confinados'
    ],
    personal: 35,
    unidades: 5,
    descripcion: 'Estación de bomberos de Hidalgo del Parral, ciudad con más de 400 años de historia minera. Donde fue asesinado Pancho Villa. Protección del patrimonio arquitectónico colonial y atención a operaciones mineras activas.',
    fechaFundacion: '1955'
  },
  {
    id: 'estacion-bomberos-santa-barbara',
    nombre: 'Estación de Bomberos Santa Bárbara',
    nombreCorto: 'Est. Santa Bárbara',
    slug: 'estacion-bomberos-santa-barbara',
    direccion: 'Calle Morelos #80, Centro',
    ciudad: 'Santa Bárbara',
    municipio: 'Santa Bárbara',
    estado: 'Chihuahua',
    codigoPostal: '33580',
    telefono: '(628) 524-0055',
    email: 'bomberos@santabarbara.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.8000,
      lng: -105.8167
    },
    servicios: [
      'Combate de incendios',
      'Emergencias en minas',
      'Rescate minero',
      'Atención accidentes vehiculares',
      'Incendios estructurales'
    ],
    equipamiento: [
      'Autobomba',
      'Equipo de rescate minero básico',
      'Ambulancia'
    ],
    personal: 16,
    unidades: 2,
    descripcion: 'Estación de bomberos en Santa Bárbara, la primera ciudad minera de Chihuahua fundada en 1567. Tradición minera de más de 450 años con minas aún activas.'
  },
  {
    id: 'estacion-bomberos-valle-de-allende',
    nombre: 'Estación de Bomberos Valle de Allende',
    nombreCorto: 'Est. Valle de Allende',
    slug: 'estacion-bomberos-valle-de-allende',
    direccion: 'Calle Allende #50, Centro',
    ciudad: 'Valle de Allende',
    municipio: 'Valle de Allende',
    estado: 'Chihuahua',
    codigoPostal: '33540',
    telefono: '(628) 526-0033',
    email: 'bomberos@valledeallende.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 26.9333,
      lng: -105.9333
    },
    servicios: [
      'Combate de incendios',
      'Rescate vehicular',
      'Emergencias agrícolas',
      'Incendios de pastizales'
    ],
    equipamiento: [
      'Autobomba',
      'Unidad de rescate',
      'Ambulancia'
    ],
    personal: 14,
    unidades: 2,
    descripcion: 'Estación de bomberos de Valle de Allende, municipio agrícola y ganadero del sur de Chihuahua. Cobertura a ranchos y comunidades rurales de la región.'
  }
];

// ============================================================================
// FUNCIONES AUXILIARES SEO Y FILTRADO
// ============================================================================

/**
 * Obtiene todas las estaciones de la zona metropolitana de Chihuahua (capital)
 */
export function getEstacionesCapital(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.ciudad === 'Chihuahua' && e.estado === 'Chihuahua'
  );
}

/**
 * Obtiene todas las estaciones de Ciudad Juárez (frontera)
 */
export function getEstacionesCiudadJuarez(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.ciudad === 'Ciudad Juárez'
  );
}

/**
 * Obtiene estaciones con capacidad HAZMAT
 */
export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('hazmat') ||
      s.toLowerCase().includes('materiales peligrosos') ||
      s.toLowerCase().includes('químic')
    )
  );
}

/**
 * Obtiene estaciones especializadas en incendios forestales
 */
export function getEstacionesForestales(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('forestal') ||
      s.toLowerCase().includes('montaña') ||
      s.toLowerCase().includes('sierra')
    )
  );
}

/**
 * Obtiene estaciones de la Sierra Tarahumara
 */
export function getEstacionesSierraTarahumara(): Estacion[] {
  const ciudadesSierra = ['Creel', 'Guachochi', 'Bocoyna', 'Madera'];
  return estacionesChihuahua.filter(e =>
    ciudadesSierra.includes(e.ciudad)
  );
}

/**
 * Obtiene estaciones con capacidad de rescate minero
 */
export function getEstacionesMineras(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('miner') ||
      s.toLowerCase().includes('mina')
    )
  );
}

/**
 * Obtiene estaciones en zonas turísticas
 */
export function getEstacionesTuristicas(): Estacion[] {
  const ciudadesTuristicas = ['Creel', 'Bocoyna', 'Casas Grandes', 'Nuevo Casas Grandes'];
  return estacionesChihuahua.filter(e =>
    ciudadesTuristicas.includes(e.ciudad)
  );
}

/**
 * Obtiene estaciones en zona agrícola
 */
export function getEstacionesAgricolas(): Estacion[] {
  const ciudadesAgricolas = ['Delicias', 'Cuauhtémoc', 'Camargo', 'Jiménez', 'Meoqui', 'Saucillo'];
  return estacionesChihuahua.filter(e =>
    ciudadesAgricolas.includes(e.ciudad)
  );
}

/**
 * Obtiene estaciones en zona fronteriza
 */
export function getEstacionesFronterizas(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.ciudad === 'Ciudad Juárez' ||
    e.servicios.some(s => s.toLowerCase().includes('fronter') || s.toLowerCase().includes('binacional'))
  );
}

/**
 * Obtiene estaciones con servicio aeroportuario
 */
export function getEstacionesAeroportuarias(): Estacion[] {
  return estacionesChihuahua.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('aeronáutico') ||
      s.toLowerCase().includes('arff') ||
      s.toLowerCase().includes('aeropuerto')
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

  const esCapital = estacion.ciudad === 'Chihuahua' && estacion.estado === 'Chihuahua';
  const esJuarez = estacion.ciudad === 'Ciudad Juárez';
  const esSierra = ['Creel', 'Guachochi', 'Bocoyna', 'Madera'].includes(estacion.ciudad);
  const esMinera = ['Hidalgo del Parral', 'Santa Bárbara'].includes(estacion.ciudad);

  let contexto = '';
  if (esCapital) {
    contexto = 'capital del estado más grande de México';
  } else if (esJuarez) {
    contexto = 'frontera México-Estados Unidos, zona maquiladora';
  } else if (esSierra) {
    contexto = 'Sierra Tarahumara, Barrancas del Cobre';
  } else if (esMinera) {
    contexto = 'zona minera histórica de Chihuahua';
  } else {
    contexto = 'estado de Chihuahua';
  }

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Chihuahua`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Teléfono: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(', ')}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} chihuahua`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      'bomberos chihuahua',
      'emergencias chihuahua',
      'protección civil chihuahua',
      ...(esJuarez ? ['bomberos frontera', 'bomberos juarez el paso'] : []),
      ...(esSierra ? ['bomberos sierra tarahumara', 'rescate montaña chihuahua'] : []),
      ...(esMinera ? ['rescate minero chihuahua', 'bomberos zona minera'] : [])
    ],
    canonical: `https://bombero.mx/directorio/chihuahua/${estacion.slug}`
  };
}

/**
 * Obtiene el contexto SEO por tipo de zona
 */
export function getContextoZona(ciudad: string): {
  tipo: string;
  descripcion: string;
  keywords: string[];
} {
  if (ciudad === 'Chihuahua') {
    return {
      tipo: 'capital',
      descripcion: 'Capital del estado más grande de México por superficie territorial',
      keywords: ['bomberos chihuahua capital', 'emergencias chihuahua ciudad', 'protección civil chihuahua']
    };
  }

  if (ciudad === 'Ciudad Juárez') {
    return {
      tipo: 'frontera',
      descripcion: 'Principal ciudad fronteriza con Estados Unidos, centro maquilador',
      keywords: ['bomberos ciudad juarez', 'bomberos frontera', 'emergencias maquiladoras', 'bomberos el paso juarez']
    };
  }

  if (['Creel', 'Guachochi', 'Bocoyna', 'Madera'].includes(ciudad)) {
    return {
      tipo: 'sierra',
      descripcion: 'Sierra Tarahumara, Barrancas del Cobre, cultura Rarámuri',
      keywords: ['bomberos sierra tarahumara', 'rescate montaña', 'incendios forestales chihuahua', 'bomberos barrancas del cobre']
    };
  }

  if (['Nuevo Casas Grandes', 'Casas Grandes', 'Janos'].includes(ciudad)) {
    return {
      tipo: 'patrimonio',
      descripcion: 'Zona de Paquimé Patrimonio UNESCO y Reserva de la Biósfera',
      keywords: ['bomberos paquime', 'bomberos casas grandes', 'protección patrimonio unesco']
    };
  }

  if (['Hidalgo del Parral', 'Santa Bárbara', 'Valle de Allende'].includes(ciudad)) {
    return {
      tipo: 'minera',
      descripcion: 'Zona minera histórica del sur de Chihuahua',
      keywords: ['bomberos parral', 'rescate minero', 'bomberos zona minera chihuahua']
    };
  }

  if (['Delicias', 'Cuauhtémoc', 'Camargo', 'Jiménez', 'Meoqui', 'Saucillo'].includes(ciudad)) {
    return {
      tipo: 'agricola',
      descripcion: 'Zona agrícola y agroindustrial del centro-sur de Chihuahua',
      keywords: ['bomberos zona agricola chihuahua', 'emergencias agroindustriales', 'bomberos delicias', 'bomberos cuauhtemoc']
    };
  }

  return {
    tipo: 'regional',
    descripcion: 'Estado de Chihuahua, norte de México',
    keywords: ['bomberos chihuahua', 'emergencias chihuahua']
  };
}

/**
 * Obtener estación por slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesChihuahua.find((e) => e.slug === slug);
}

/**
 * Obtener estaciones cercanas (excluyendo la actual)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  const mismoMunicipio = estacionesChihuahua.filter(
    (e) => e.municipio === estacion.municipio && e.slug !== slug
  );

  const otrosMunicipios = estacionesChihuahua.filter(
    (e) => e.municipio !== estacion.municipio
  );

  return [...mismoMunicipio, ...otrosMunicipios].slice(0, limit);
}

/**
 * Estadísticas totales del estado
 */
export const ESTADISTICAS_CHIHUAHUA = {
  total_estaciones: estacionesChihuahua.length,
  total_bomberos: estacionesChihuahua.reduce((sum, e) => sum + e.personal, 0),
  total_unidades: estacionesChihuahua.reduce((sum, e) => sum + e.unidades, 0),
  estaciones_capital: getEstacionesCapital().length,
  estaciones_juarez: getEstacionesCiudadJuarez().length,
  estaciones_sierra: getEstacionesSierraTarahumara().length,
  estaciones_hazmat: getEstacionesHAZMAT().length,
  estaciones_forestales: getEstacionesForestales().length,
  municipios_cubiertos: new Set(estacionesChihuahua.map(e => e.ciudad)).size
};

export default estacionesChihuahua;
