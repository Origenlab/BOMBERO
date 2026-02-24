

import type { Estacion } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES SEO - GUANAJUATO
// ═══════════════════════════════════════════════════════════════════════════

export const GUANAJUATO_SEO = {
  // ─── Información Básica del Estado ───
  estado: 'Guanajuato',
  estadoCorto: 'Guanajuato',
  codigo: 'GTO',
  capital: 'Guanajuato',
  gentilicio: 'guanajuatense',
  region: 'Bajío',
  lema: 'La Grandeza de México',
  apodo: 'Cuna de la Independencia',

  // ─── Datos Demográficos y Geográficos ───
  poblacion: 6_166_934,
  superficie_km2: 30_607,
  densidad: 201.5,
  municipios: 46,
  altitud_capital: 2_045,
  colindancias: ['San Luis Potosí', 'Querétaro', 'Michoacán', 'Jalisco', 'Zacatecas'],

  // ─── Datos Económicos ───
  pib_porcentaje_nacional: 4.2,
  ranking_economico: 6,
  sectores_principales: ['Automotriz', 'Calzado y Piel', 'Petroquímica', 'Agroindustria', 'Turismo'],

  // ─── Industria Automotriz ───
  industria_automotriz: {
    ranking_nacional: '#1 productor de vehículos',
    plantas: ['Toyota', 'General Motors', 'Mazda', 'Honda', 'Hino'],
    vehiculos_anuales: 900_000,
    empleos_directos: 85_000,
    parques_industriales: 25,
  },

  // ─── Industria del Calzado ───
  industria_calzado: {
    ciudad: 'León',
    ranking: 'Capital Mundial del Calzado y la Piel',
    porcentaje_nacional: 70,
    empresas: 1_500,
    empleos_directos: 160_000,
  },

  // ─── Refinería Salamanca ───
  refineria: {
    nombre: 'Refinería Antonio M. Amor',
    ubicacion: 'Salamanca',
    capacidad_bpd: 220_000,
    productos: ['Gasolina', 'Diésel', 'Turbosina', 'Gas LP', 'Asfalto'],
  },

  // ─── Turismo ───
  visitantes_anuales: 8_500_000,
  derrama_economica_mdp: 42_000,

  // ─── Paleta de Colores (Azul Colonial/Dorado) ───
  colores: {
    primario: 'rgb(30, 64, 175)',       // Blue-800
    secundario: 'rgb(59, 130, 246)',    // Blue-500
    claro: 'rgb(219, 234, 254)',        // Blue-100
    acento: 'rgb(202, 138, 4)',         // Amber-600 (dorado colonial)
    oscuro: 'rgb(30, 58, 138)',         // Blue-900
    alerta: 'rgb(239, 68, 68)',         // Red-500
  },

  // ─── Keywords SEO por Categoría ───
  keywords: {
    principales: [
      'bomberos guanajuato',
      'estaciones de bomberos guanajuato',
      'emergencias guanajuato mexico',
      'cuerpo de bomberos guanajuato',
      'heroico cuerpo de bomberos gto',
      'proteccion civil guanajuato',
      'servicios de emergencia guanajuato',
      '911 guanajuato',
      'bomberos bajio',
      'emergencias industriales guanajuato',
    ],

    leon: [
      'bomberos leon guanajuato',
      'bomberos leon gto',
      'emergencias leon',
      'cuerpo de bomberos leon',
      'proteccion civil leon',
      'bomberos zona industrial leon',
      'emergencias calzado leon',
    ],

    celaya: [
      'bomberos celaya',
      'bomberos celaya guanajuato',
      'emergencias celaya',
      'bomberos corredor industrial celaya',
      'proteccion civil celaya',
    ],

    salamanca: [
      'bomberos salamanca',
      'bomberos refineria salamanca',
      'emergencias salamanca guanajuato',
      'hazmat salamanca',
      'bomberos pemex salamanca',
    ],

    irapuato: [
      'bomberos irapuato',
      'bomberos irapuato guanajuato',
      'emergencias irapuato',
      'proteccion civil irapuato',
      'bomberos zona fresera',
    ],

    sanMiguel: [
      'bomberos san miguel de allende',
      'emergencias san miguel allende',
      'bomberos pueblo magico guanajuato',
      'proteccion civil san miguel',
      'bomberos turismo san miguel',
    ],

    capital: [
      'bomberos guanajuato capital',
      'bomberos ciudad de guanajuato',
      'emergencias guanajuato centro',
      'bomberos centro historico guanajuato',
      'bomberos unesco guanajuato',
    ],

    industrial: [
      'bomberos industriales guanajuato',
      'emergencias automotriz bajio',
      'hazmat guanajuato',
      'bomberos plantas automotrices',
      'emergencias refineria pemex',
    ],
  },

  // ─── Pueblos Mágicos ───
  pueblosMagicos: [
    {
      nombre: 'San Miguel de Allende',
      municipio: 'San Miguel de Allende',
      año_designacion: 2002,
      reconocimientos: ['#1 Ciudad del Mundo - Condé Nast Traveler', 'Patrimonio de la Humanidad UNESCO'],
      atractivos: ['La Parroquia', 'Santuario de Atotonilco', 'Centro histórico', 'Galerías de arte'],
    },
    {
      nombre: 'Dolores Hidalgo',
      municipio: 'Dolores Hidalgo',
      año_designacion: 2002,
      reconocimientos: ['Cuna de la Independencia Nacional'],
      atractivos: ['Parroquia de Nuestra Señora de los Dolores', 'Casa de Hidalgo', 'Cerámica artesanal'],
    },
    {
      nombre: 'Mineral de Pozos',
      municipio: 'San Luis de la Paz',
      año_designacion: 2012,
      atractivos: ['Pueblo fantasma minero', 'Minas históricas', 'Artesanías', 'Mezcal'],
    },
    {
      nombre: 'Salvatierra',
      municipio: 'Salvatierra',
      año_designacion: 2012,
      atractivos: ['Ex convento del Carmen', 'Haciendas', 'Puente de Batanes'],
    },
    {
      nombre: 'Yuriria',
      municipio: 'Yuriria',
      año_designacion: 2012,
      atractivos: ['Laguna de Yuriria', 'Ex convento agustino', 'Zona lacustre'],
    },
    {
      nombre: 'Jalpa de Cánovas',
      municipio: 'Purísima del Rincón',
      año_designacion: 2012,
      atractivos: ['Hacienda de Cánovas', 'Arquitectura porfiriana', 'Paisaje rural'],
    },
    {
      nombre: 'Comonfort',
      municipio: 'Comonfort',
      año_designacion: 2018,
      atractivos: ['Templo de San Francisco', 'Ex hacienda de Neutla', 'Aguas termales'],
    },
  ],

  // ─── UNESCO ───
  patrimonio_unesco: {
    nombre: 'Ciudad histórica de Guanajuato y minas adyacentes',
    año_inscripcion: 1988,
    criterios: ['I', 'II', 'IV', 'VI'],
    descripcion: 'Ciudad colonial fundada en el siglo XVI, centro de la industria minera de plata más importante del mundo durante el período colonial español.',
  },

  // ─── Teléfonos de Emergencia ───
  telefonos: {
    emergencias_nacional: '911',
    bomberos_leon: '(477) 712-5555',
    bomberos_celaya: '(461) 612-3222',
    bomberos_irapuato: '(462) 626-2222',
    bomberos_guanajuato: '(473) 732-0424',
    bomberos_salamanca: '(464) 648-0808',
    bomberos_san_miguel: '(415) 152-2888',
    proteccion_civil_estatal: '(473) 735-1500',
  },

  // ─── Especialidades Bomberiles por Zona ───
  especialidades: {
    industrial: ['HAZMAT nivel A/B', 'incendios en plantas automotrices', 'emergencias en refinería', 'rescate industrial'],
    calzado: ['incendios en curtidurías', 'materiales peligrosos (solventes)', 'espacios confinados'],
    urbana: ['incendios estructurales', 'rescate vehicular', 'emergencias en edificios altos'],
    turistica: ['emergencias en zonas patrimoniales', 'protección de monumentos históricos', 'atención multilingüe'],
    refineria: ['HAZMAT petroquímico', 'control de fugas de hidrocarburos', 'espuma AFFF', 'coordinación PEMEX'],
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// DATOS DE LAS 15 ESTACIONES DE BOMBEROS
// ═══════════════════════════════════════════════════════════════════════════

export const estacionesGuanajuato: Estacion[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA LEÓN - 4 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gto-leon-central',
    nombre: 'Estación Central de Bomberos de León',
    nombreCorto: 'Central de Bomberos León',
    slug: 'estacion-central-leon',
    direccion: 'Blvd. Adolfo López Mateos 1002, Col. Centro',
    colonia: 'Centro',
    ciudad: 'León',
    municipio: 'León',
    estado: 'Guanajuato',
    codigoPostal: '37000',
    telefono: '(477) 712-5555',
    telefonoEmergencia: '911',
    email: 'central@bomberosleon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.1261,
      lng: -101.6850
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Coordinación metropolitana de emergencias',
      'Rescate vehicular especializado',
      'Atención de emergencias HAZMAT',
      'Rescate en estructuras colapsadas (USAR)',
      'Emergencias en industria del calzado y curtidurías',
      'Academia de Bomberos de León',
      'Servicios de ambulancia de emergencia',
      'Investigación de causas de incendio',
      'Inspecciones de seguridad contra incendios',
      'Control de fugas de gas LP y natural',
      'Retiro de enjambres de abejas',
    ],
    especialidades: [
      'Emergencias en industria del calzado',
      'HAZMAT (solventes y químicos de curtidurías)',
      'Coordinación estatal de emergencias',
    ],
    equipamiento: [
      'Camiones cisterna de 12,000 litros',
      'Unidades de rescate urbano pesado',
      'Ambulancias de soporte vital avanzado',
      'Unidad HAZMAT con equipo de nivel A',
      'Escaleras telescópicas de 35 metros',
      'Centro de comando móvil',
      'Herramienta hidráulica de rescate Holmatro',
      'Equipo de protección respiratoria SCBA',
      'Detectores de gases múltiples',
    ],
    personal: 95,
    unidades: 14,
    descripcion: 'Comandancia General del Heroico Cuerpo de Bomberos de León, la ciudad más poblada de Guanajuato con más de 1.6 millones de habitantes. León es reconocida mundialmente como la Capital del Calzado y la Piel, concentrando el 70% de la producción nacional. La estación central coordina emergencias en más de 1,500 empresas de calzado y curtidurías, requiriendo especialización en materiales peligrosos como solventes, adhesivos y químicos de curtido. Sede de la Academia de Bomberos de León, referente en capacitación a nivel nacional.',
    fechaFundacion: '1921',
    redes: {
      facebook: 'https://facebook.com/BomberosLeon',
      twitter: 'https://twitter.com/bomberosleon',
    },
  },
  {
    id: 'gto-leon-norte',
    nombre: 'Estación de Bomberos León Norte',
    nombreCorto: 'Bomberos León Norte',
    slug: 'estacion-bomberos-leon-norte',
    direccion: 'Blvd. Juan Alonso de Torres 2200, Col. Valle de León',
    colonia: 'Valle de León',
    ciudad: 'León',
    municipio: 'León',
    estado: 'Guanajuato',
    codigoPostal: '37300',
    telefono: '(477) 711-2020',
    telefonoEmergencia: '911',
    email: 'norte@bomberosleon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.1589,
      lng: -101.6701
    },
    servicios: [
      'Combate de incendios industriales y comerciales',
      'Rescate vehicular en vialidades de alto tráfico',
      'Emergencias en parques industriales',
      'Atención de emergencias en centros comerciales',
      'Control de fugas de gas',
      'Rescate de personas atrapadas',
      'Atención prehospitalaria',
      'Prevención y capacitación empresarial',
    ],
    equipamiento: [
      'Autobombas de 10,000 litros',
      'Unidades de rescate vehicular',
      'Ambulancias tipo II',
      'Escalera mecánica de 28 metros',
      'Herramientas de extracción hidráulica',
      'Equipo de iluminación para emergencias nocturnas',
    ],
    personal: 45,
    unidades: 6,
    descripcion: 'Estación estratégica para la zona norte de León, cubriendo los principales parques industriales, centros comerciales de gran escala como Altacia y zonas residenciales de alto crecimiento. Primera respuesta para el corredor industrial norte y emergencias en vialidades de alto tráfico como el Blvd. Juan Alonso de Torres.',
    fechaFundacion: '1998',
  },
  {
    id: 'gto-leon-sur',
    nombre: 'Estación de Bomberos León Sur - Aeropuerto',
    nombreCorto: 'Bomberos León Sur-Aeropuerto',
    slug: 'estacion-bomberos-leon-sur',
    direccion: 'Blvd. Aeropuerto 500, Col. Lomas de la Presa',
    colonia: 'Lomas de la Presa',
    ciudad: 'León',
    municipio: 'León',
    estado: 'Guanajuato',
    codigoPostal: '37440',
    telefono: '(477) 713-4545',
    telefonoEmergencia: '911',
    email: 'sur@bomberosleon.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.0856,
      lng: -101.6456
    },
    servicios: [
      'Combate de incendios industriales',
      'Apoyo a operaciones aeroportuarias',
      'Emergencias en zona de plantas automotrices',
      'Rescate vehicular en autopista',
      'Control de emergencias HAZMAT',
      'Atención de emergencias en exposiciones y eventos',
      'Cobertura a zona industrial sur',
    ],
    equipamiento: [
      'Autobombas de 10,000 litros',
      'Unidades de rescate',
      'Ambulancias de emergencia',
      'Equipo HAZMAT básico',
      'Herramientas de rescate hidráulico',
    ],
    personal: 38,
    unidades: 5,
    descripcion: 'Estación con cobertura a la zona sur de León, incluyendo el Aeropuerto Internacional del Bajío (BJX), centros de exposiciones como Poliforum León y parques industriales donde operan plantas automotrices. Coordinación con servicios de emergencia aeroportuarios y respuesta en autopista León-Silao.',
    fechaFundacion: '2005',
  },
  {
    id: 'gto-silao',
    nombre: 'Estación de Bomberos de Silao',
    nombreCorto: 'Bomberos Silao',
    slug: 'estacion-bomberos-silao',
    direccion: 'Av. Guanajuato 450, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Silao de la Victoria',
    municipio: 'Silao de la Victoria',
    estado: 'Guanajuato',
    codigoPostal: '36100',
    telefono: '(472) 722-1234',
    telefonoEmergencia: '911',
    email: 'silao@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.9378,
      lng: -101.4267
    },
    servicios: [
      'Combate de incendios industriales',
      'Emergencias en plantas automotrices (Toyota, Mazda, Honda)',
      'Rescate vehicular en autopista',
      'Atención de emergencias HAZMAT',
      'Emergencias en Puerto Interior (puerto seco)',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Capacitación industrial',
    ],
    especialidades: [
      'Emergencias en plantas automotrices',
      'HAZMAT industrial (pinturas, solventes)',
      'Coordinación con brigadas industriales',
    ],
    equipamiento: [
      'Autobombas industriales de 12,000 litros',
      'Unidad HAZMAT especializada',
      'Ambulancias de emergencia',
      'Detectores multigas',
      'Trajes de protección química nivel B',
      'Equipo de espuma AFFF',
    ],
    personal: 42,
    unidades: 6,
    descripcion: 'Estación estratégica en el corazón del Corredor Industrial del Bajío, donde operan las principales armadoras automotrices del país: Toyota, Mazda y Honda. Silao alberga el Puerto Interior, principal puerto seco de México para logística automotriz. Personal altamente capacitado en emergencias industriales automotrices, manejo de materiales peligrosos utilizados en procesos de manufactura y pintura.',
    fechaFundacion: '1995',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CORREDOR INDUSTRIAL - 4 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gto-celaya-central',
    nombre: 'Estación Central de Bomberos de Celaya',
    nombreCorto: 'Central de Bomberos Celaya',
    slug: 'estacion-central-celaya',
    direccion: 'Av. Irrigación 105, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Celaya',
    municipio: 'Celaya',
    estado: 'Guanajuato',
    codigoPostal: '38000',
    telefono: '(461) 612-3222',
    telefonoEmergencia: '911',
    email: 'central@bomberoscelaya.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.5236,
      lng: -100.8157
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Coordinación de emergencias zona Celaya',
      'Rescate vehicular especializado',
      'Atención de emergencias HAZMAT',
      'Rescate en estructuras colapsadas',
      'Emergencias en corredor industrial automotriz',
      'Servicios de ambulancia',
      'Investigación de incendios',
      'Inspecciones de seguridad',
      'Control de fugas de gas',
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidades de rescate urbano',
      'Ambulancias de soporte vital avanzado',
      'Unidad HAZMAT',
      'Escaleras telescópicas de 30 metros',
      'Centro de comando móvil',
      'Herramienta hidráulica de rescate',
    ],
    personal: 65,
    unidades: 10,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de Celaya, tercera ciudad más poblada del estado con más de 520,000 habitantes. Centro estratégico del Corredor Industrial del Bajío donde operan plantas de Honda, proveedoras automotrices tier-1 y empresas manufactureras. La estación coordina emergencias en uno de los corredores industriales más importantes de México.',
    fechaFundacion: '1945',
    redes: {
      facebook: 'https://facebook.com/BomberosCelaya',
    },
  },
  {
    id: 'gto-salamanca',
    nombre: 'Estación de Bomberos de Salamanca',
    nombreCorto: 'Bomberos Salamanca',
    slug: 'estacion-bomberos-salamanca',
    direccion: 'Av. Faja de Oro 200, Col. Nativitas',
    colonia: 'Nativitas',
    ciudad: 'Salamanca',
    municipio: 'Salamanca',
    estado: 'Guanajuato',
    codigoPostal: '36700',
    telefono: '(464) 648-0808',
    telefonoEmergencia: '911',
    email: 'salamanca@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.5711,
      lng: -101.1961
    },
    servicios: [
      'Combate de incendios industriales y petroquímicos',
      'Emergencias en Refinería PEMEX (coordinación)',
      'Atención de emergencias HAZMAT nivel A',
      'Control de fugas y derrames de hidrocarburos',
      'Incendios con productos derivados del petróleo',
      'Rescate vehicular',
      'Incendios estructurales',
      'Emergencias con gas LP y natural',
      'Capacitación en seguridad industrial',
    ],
    especialidades: [
      'Emergencias petroquímicas',
      'HAZMAT hidrocarburos',
      'Espuma AFFF para incendios clase B',
      'Coordinación con PEMEX',
    ],
    equipamiento: [
      'Autobombas de alta capacidad 15,000 litros',
      'Unidad HAZMAT petroquímica especializada',
      'Camiones de espuma AFFF',
      'Detectores de gases de hidrocarburos',
      'Trajes de protección química nivel A',
      'Equipo de contención de derrames',
      'Monitores de extinción de largo alcance',
      'Centro de comando para incidentes HAZMAT',
    ],
    personal: 55,
    unidades: 8,
    descripcion: 'Estación de bomberos con especialización única en emergencias petroquímicas por su proximidad a la Refinería Antonio M. Amor de PEMEX, una de las más importantes de México con capacidad de 220,000 barriles diarios. Personal certificado en respuesta HAZMAT de alto nivel, manejo de hidrocarburos y uso de espuma AFFF. Mantiene protocolos de coordinación permanente con brigadas industriales de PEMEX y Plan de Auxilio Mutuo con plantas petroquímicas de la zona.',
    fechaFundacion: '1950',
  },
  {
    id: 'gto-villagran',
    nombre: 'Estación de Bomberos de Villagrán',
    nombreCorto: 'Bomberos Villagrán',
    slug: 'estacion-bomberos-villagran',
    direccion: 'Blvd. José María Morelos 250, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Villagrán',
    municipio: 'Villagrán',
    estado: 'Guanajuato',
    codigoPostal: '38260',
    telefono: '(411) 165-0123',
    telefonoEmergencia: '911',
    email: 'villagran@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.5150,
      lng: -100.9897
    },
    servicios: [
      'Combate de incendios industriales',
      'Emergencias en corredor automotriz',
      'Rescate vehicular en autopista',
      'Control de fugas de gas',
      'Emergencias agroindustriales',
      'Atención prehospitalaria',
      'Incendios en pastizales',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate vehicular',
      'Ambulancias',
      'Equipo de protección básico HAZMAT',
    ],
    personal: 22,
    unidades: 4,
    descripcion: 'Estación de bomberos ubicada en el corredor industrial Celaya-Salamanca, atendiendo emergencias en plantas manufactureras, agroindustrias y rescate vehicular en la autopista 45D. Villagrán conecta estratégicamente con los principales centros industriales del Bajío.',
    fechaFundacion: '2008',
  },
  {
    id: 'gto-apaseo-grande',
    nombre: 'Estación de Bomberos de Apaseo el Grande',
    nombreCorto: 'Bomberos Apaseo el Grande',
    slug: 'estacion-bomberos-apaseo-grande',
    direccion: 'Av. Benito Juárez 120, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Apaseo el Grande',
    municipio: 'Apaseo el Grande',
    estado: 'Guanajuato',
    codigoPostal: '38160',
    telefono: '(413) 158-0456',
    telefonoEmergencia: '911',
    email: 'apaseo@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.5456,
      lng: -100.6878
    },
    servicios: [
      'Combate de incendios industriales',
      'Emergencias en parques industriales automotrices',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Emergencias agroindustriales',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate',
      'Ambulancias',
      'Herramientas hidráulicas',
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos que atiende el creciente polo industrial de Apaseo el Grande, donde se ubican importantes plantas de autopartes y manufactura. Cobertura al corredor industrial hacia Querétaro y emergencias en zonas agrícolas.',
    fechaFundacion: '2010',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CAPITAL GUANAJUATO - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gto-guanajuato-central',
    nombre: 'Estación Central de Bomberos de Guanajuato',
    nombreCorto: 'Central de Bomberos Guanajuato',
    slug: 'estacion-central-guanajuato',
    direccion: 'Carretera Guanajuato-Dolores Km 2.5, Col. Marfil',
    colonia: 'Marfil',
    ciudad: 'Guanajuato',
    municipio: 'Guanajuato',
    estado: 'Guanajuato',
    codigoPostal: '36250',
    telefono: '(473) 732-0424',
    telefonoEmergencia: '911',
    email: 'central@bomberosguanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.0190,
      lng: -101.2574
    },
    servicios: [
      'Combate de incendios en centro histórico (UNESCO)',
      'Protección de patrimonio cultural',
      'Emergencias en túneles y callejones subterráneos',
      'Rescate en minas históricas',
      'Emergencias en Festival Internacional Cervantino',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Emergencias en eventos masivos',
    ],
    especialidades: [
      'Protección de patrimonio UNESCO',
      'Emergencias en espacios subterráneos',
      'Atención a eventos culturales masivos',
    ],
    equipamiento: [
      'Autobombas compactas para callejones estrechos',
      'Unidades de rescate especializadas',
      'Equipos portátiles para túneles',
      'Ambulancias',
      'Sistema de comunicación para espacios subterráneos',
      'Equipo de protección respiratoria',
    ],
    personal: 48,
    unidades: 7,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de la capital del estado, ciudad declarada Patrimonio de la Humanidad por UNESCO desde 1988. La singular geografía de Guanajuato, con sus túneles viales, callejones estrechos y edificios coloniales históricos, requiere técnicas especializadas de combate de incendios. Personal capacitado en protección de patrimonio cultural y atención durante el Festival Internacional Cervantino, que reúne a más de 200,000 visitantes.',
    fechaFundacion: '1938',
    redes: {
      facebook: 'https://facebook.com/BomberosGuanajuato',
    },
  },
  {
    id: 'gto-marfil',
    nombre: 'Subestación de Bomberos Marfil',
    nombreCorto: 'Bomberos Marfil',
    slug: 'estacion-bomberos-marfil',
    direccion: 'Carr. Panorámica s/n, Col. Marfil',
    colonia: 'Marfil',
    ciudad: 'Guanajuato',
    municipio: 'Guanajuato',
    estado: 'Guanajuato',
    codigoPostal: '36250',
    telefono: '(473) 733-1515',
    telefonoEmergencia: '911',
    email: 'marfil@bomberosguanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.0089,
      lng: -101.2478
    },
    servicios: [
      'Combate de incendios residenciales',
      'Emergencias en zona universitaria (UG)',
      'Rescate vehicular en carretera panorámica',
      'Control de fugas de gas',
      'Incendios en vegetación de cerros',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobombas de 6,000 litros',
      'Unidad de rescate',
      'Ambulancias',
      'Equipo para incendios forestales',
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Subestación con cobertura a la zona de Marfil, entrada principal a la ciudad de Guanajuato, campus de la Universidad de Guanajuato y carretera panorámica. Atiende emergencias en zonas residenciales, estudiantiles e incendios en los cerros que rodean la ciudad.',
    fechaFundacion: '2000',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA BAJÍO NORTE - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gto-irapuato-central',
    nombre: 'Estación Central de Bomberos de Irapuato',
    nombreCorto: 'Central de Bomberos Irapuato',
    slug: 'estacion-central-irapuato',
    direccion: 'Blvd. Díaz Ordaz 500, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Irapuato',
    municipio: 'Irapuato',
    estado: 'Guanajuato',
    codigoPostal: '36500',
    telefono: '(462) 626-2222',
    telefonoEmergencia: '911',
    email: 'central@bomberosirapuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.6767,
      lng: -101.3561
    },
    servicios: [
      'Combate de incendios urbanos e industriales',
      'Coordinación de emergencias zona Irapuato',
      'Rescate vehicular',
      'Emergencias agroindustriales',
      'Emergencias en empacadoras de fresa',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Investigación de incendios',
      'Inspecciones de seguridad',
    ],
    equipamiento: [
      'Camiones cisterna de 10,000 litros',
      'Unidades de rescate',
      'Ambulancias de soporte vital',
      'Escaleras de 24 metros',
      'Herramientas hidráulicas',
    ],
    personal: 55,
    unidades: 8,
    descripcion: 'Comandancia del Heroico Cuerpo de Bomberos de Irapuato, conocida como la Capital Mundial de la Fresa. Segunda ciudad más poblada del estado con más de 580,000 habitantes. Atiende emergencias en la importante agroindustria fresera, empacadoras, cámaras de refrigeración y zonas comerciales. Centro estratégico del Bajío agroindustrial.',
    fechaFundacion: '1940',
    redes: {
      facebook: 'https://facebook.com/BomberosIrapuato',
    },
  },
  {
    id: 'gto-san-francisco-rincon',
    nombre: 'Estación de Bomberos de San Francisco del Rincón',
    nombreCorto: 'Bomberos San Francisco del Rincón',
    slug: 'estacion-bomberos-san-francisco-rincon',
    direccion: 'Av. Benito Juárez 180, Col. Centro',
    colonia: 'Centro',
    ciudad: 'San Francisco del Rincón',
    municipio: 'San Francisco del Rincón',
    estado: 'Guanajuato',
    codigoPostal: '36300',
    telefono: '(476) 743-0123',
    telefonoEmergencia: '911',
    email: 'sanfrancisco@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.0183,
      lng: -101.8583
    },
    servicios: [
      'Combate de incendios urbanos',
      'Emergencias en industria del calzado',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Emergencias agrícolas',
      'Atención prehospitalaria',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidad de rescate',
      'Ambulancias',
      'Herramientas de rescate',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de San Francisco del Rincón, municipio con importante industria del calzado y sombrero. Atiende emergencias en talleres de manufactura, zona comercial y agrícola. Cobertura a Jalpa de Cánovas (Pueblo Mágico).',
    fechaFundacion: '1985',
  },
  {
    id: 'gto-penjamo',
    nombre: 'Estación de Bomberos de Pénjamo',
    nombreCorto: 'Bomberos Pénjamo',
    slug: 'estacion-bomberos-penjamo',
    direccion: 'Av. 5 de Mayo 90, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Pénjamo',
    municipio: 'Pénjamo',
    estado: 'Guanajuato',
    codigoPostal: '36900',
    telefono: '(469) 692-0789',
    telefonoEmergencia: '911',
    email: 'penjamo@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.4297,
      lng: -101.7239
    },
    servicios: [
      'Combate de incendios urbanos y rurales',
      'Emergencias agroindustriales',
      'Incendios en pastizales y parcelas',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Atención prehospitalaria',
      'Emergencias en comunidades rurales',
    ],
    equipamiento: [
      'Autobombas rurales',
      'Vehículos todo terreno',
      'Ambulancias',
      'Equipo para incendios en vegetación',
    ],
    personal: 22,
    unidades: 4,
    descripcion: 'Estación de bomberos de Pénjamo, municipio agrícola del sur de Guanajuato. Cobertura a zona rural extensa con producción de granos, hortalizas y ganadería. Personal capacitado para emergencias rurales, incendios en parcelas agrícolas y atención a comunidades dispersas.',
    fechaFundacion: '1990',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA PUEBLOS MÁGICOS - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'gto-san-miguel-allende',
    nombre: 'Estación de Bomberos de San Miguel de Allende',
    nombreCorto: 'Bomberos San Miguel de Allende',
    slug: 'estacion-bomberos-san-miguel-allende',
    direccion: 'Libramiento José Manuel Zavala s/n, Col. Independencia',
    colonia: 'Independencia',
    ciudad: 'San Miguel de Allende',
    municipio: 'San Miguel de Allende',
    estado: 'Guanajuato',
    codigoPostal: '37700',
    telefono: '(415) 152-2888',
    telefonoEmergencia: '911',
    email: 'sanmiguel@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 20.9139,
      lng: -100.7439
    },
    servicios: [
      'Combate de incendios en centro histórico (UNESCO)',
      'Protección de patrimonio arquitectónico colonial',
      'Emergencias en hoteles boutique y galerías',
      'Atención de emergencias turísticas (multilingüe)',
      'Rescate vehicular',
      'Control de fugas de gas en edificios históricos',
      'Emergencias en eventos y festivales',
      'Atención prehospitalaria',
      'Coordinación con brigadas de hoteles',
    ],
    especialidades: [
      'Protección de patrimonio UNESCO',
      'Atención turística multilingüe (inglés)',
      'Emergencias en edificios coloniales',
    ],
    equipamiento: [
      'Autobombas compactas para calles estrechas',
      'Unidades de rescate especializadas',
      'Ambulancias',
      'Equipo para edificios históricos',
      'Sistema de comunicación turístico',
    ],
    personal: 35,
    unidades: 5,
    descripcion: 'Estación de bomberos de San Miguel de Allende, votada múltiples veces como la Mejor Ciudad del Mundo por Condé Nast Traveler y Travel+Leisure. Ciudad Patrimonio de la Humanidad UNESCO con importante comunidad de residentes extranjeros. Personal capacitado en protección de patrimonio arquitectónico colonial, atención multilingüe en inglés y español, y emergencias en el sector hotelero de lujo y galerías de arte.',
    fechaFundacion: '1970',
    redes: {
      facebook: 'https://facebook.com/BomberosSanMiguel',
    },
  },
  {
    id: 'gto-dolores-hidalgo',
    nombre: 'Estación de Bomberos de Dolores Hidalgo',
    nombreCorto: 'Bomberos Dolores Hidalgo',
    slug: 'estacion-bomberos-dolores-hidalgo',
    direccion: 'Av. de los Héroes 250, Col. Centro',
    colonia: 'Centro',
    ciudad: 'Dolores Hidalgo',
    municipio: 'Dolores Hidalgo Cuna de la Independencia Nacional',
    estado: 'Guanajuato',
    codigoPostal: '37800',
    telefono: '(418) 182-0911',
    telefonoEmergencia: '911',
    email: 'dolores@proteccioncivil.guanajuato.gob.mx',
    horario: '24 horas, 365 días del año',
    coordenadas: {
      lat: 21.1561,
      lng: -100.9328
    },
    servicios: [
      'Combate de incendios en centro histórico',
      'Protección de patrimonio de la Independencia',
      'Emergencias en talleres de cerámica artesanal',
      'Atención de emergencias turísticas',
      'Rescate vehicular',
      'Control de fugas de gas',
      'Emergencias en hornos de cerámica',
      'Atención prehospitalaria',
    ],
    especialidades: [
      'Protección de patrimonio histórico',
      'Emergencias en talleres de cerámica',
    ],
    equipamiento: [
      'Autobombas de 8,000 litros',
      'Unidades de rescate',
      'Ambulancias',
      'Equipo para edificios históricos',
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de Dolores Hidalgo, Cuna de la Independencia Nacional, donde el padre Miguel Hidalgo dio el Grito de Independencia en 1810. Pueblo Mágico reconocido por su cerámica artesanal Talavera y su importancia histórica. Personal capacitado en protección del patrimonio histórico nacional, emergencias en los numerosos talleres de cerámica con hornos de alta temperatura y atención turística.',
    fechaFundacion: '1960',
    redes: {
      facebook: 'https://facebook.com/PCDoloresHidalgo',
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES SEO Y FILTRADO
// ═══════════════════════════════════════════════════════════════════════════


export function getEstacionesLeon(): Estacion[] {
  return estacionesGuanajuato.filter(e =>
    e.ciudad === 'León' || e.ciudad === 'Silao de la Victoria'
  );
}


export function getEstacionesCorredorIndustrial(): Estacion[] {
  const ciudades = ['Celaya', 'Salamanca', 'Villagrán', 'Apaseo el Grande'];
  return estacionesGuanajuato.filter(e => ciudades.includes(e.ciudad));
}


export function getEstacionesCapital(): Estacion[] {
  return estacionesGuanajuato.filter(e => e.ciudad === 'Guanajuato');
}


export function getEstacionesBajioNorte(): Estacion[] {
  const ciudades = ['Irapuato', 'San Francisco del Rincón', 'Pénjamo'];
  return estacionesGuanajuato.filter(e => ciudades.includes(e.ciudad));
}


export function getEstacionesPueblosMagicos(): Estacion[] {
  const ciudades = ['San Miguel de Allende', 'Dolores Hidalgo'];
  return estacionesGuanajuato.filter(e => ciudades.includes(e.ciudad));
}


export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesGuanajuato.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('hazmat') ||
      s.toLowerCase().includes('materiales peligrosos') ||
      s.toLowerCase().includes('petroquím') ||
      s.toLowerCase().includes('refinería')
    )
  );
}


export function getEstacionesIndustriales(): Estacion[] {
  return estacionesGuanajuato.filter(e =>
    e.servicios.some(s =>
      s.toLowerCase().includes('industrial') ||
      s.toLowerCase().includes('automotri') ||
      s.toLowerCase().includes('planta') ||
      s.toLowerCase().includes('calzado')
    )
  );
}


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

  if (estacion.ciudad === 'León') {
    contexto = 'Capital del Calzado, zona industrial';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.leon;
  } else if (estacion.ciudad === 'Celaya') {
    contexto = 'corredor industrial automotriz';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.celaya;
  } else if (estacion.ciudad === 'Salamanca') {
    contexto = 'zona refinería PEMEX';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.salamanca;
  } else if (estacion.ciudad === 'Irapuato') {
    contexto = 'Capital de la Fresa, agroindustria';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.irapuato;
  } else if (estacion.ciudad === 'San Miguel de Allende') {
    contexto = 'Pueblo Mágico, patrimonio UNESCO';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.sanMiguel;
  } else if (estacion.ciudad === 'Guanajuato') {
    contexto = 'capital del estado, patrimonio UNESCO';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.capital;
  } else {
    contexto = 'estado de Guanajuato';
    keywordsAdicionales = GUANAJUATO_SEO.keywords.principales.slice(0, 5);
  }

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Guanajuato`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Tel: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(', ')}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} guanajuato`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      'bomberos guanajuato',
      'emergencias guanajuato',
      'protección civil guanajuato',
      ...keywordsAdicionales.slice(0, 5),
    ],
    canonical: `https://bombero.mx/directorio/guanajuato/${estacion.slug}`,
  };
}


export function getContextoZona(ciudad: string): {
  tipo: string;
  descripcion: string;
  keywords: string[];
  color: string;
  icono: string;
} {
  if (ciudad === 'León' || ciudad === 'Silao de la Victoria') {
    return {
      tipo: 'industrial-calzado',
      descripcion: 'Zona metropolitana León, Capital del Calzado y corredor automotriz',
      keywords: GUANAJUATO_SEO.keywords.leon,
      color: 'blue',
      icono: '👟',
    };
  }

  if (['Celaya', 'Villagrán', 'Apaseo el Grande'].includes(ciudad)) {
    return {
      tipo: 'corredor-industrial',
      descripcion: 'Corredor Industrial del Bajío, zona automotriz',
      keywords: GUANAJUATO_SEO.keywords.celaya,
      color: 'indigo',
      icono: '🚗',
    };
  }

  if (ciudad === 'Salamanca') {
    return {
      tipo: 'petroquímica',
      descripcion: 'Zona petroquímica, Refinería PEMEX',
      keywords: GUANAJUATO_SEO.keywords.salamanca,
      color: 'orange',
      icono: '🛢️',
    };
  }

  if (ciudad === 'Guanajuato') {
    return {
      tipo: 'capital-unesco',
      descripcion: 'Capital del estado, Patrimonio de la Humanidad UNESCO',
      keywords: GUANAJUATO_SEO.keywords.capital,
      color: 'amber',
      icono: '🏛️',
    };
  }

  if (['Irapuato', 'San Francisco del Rincón', 'Pénjamo'].includes(ciudad)) {
    return {
      tipo: 'agroindustrial',
      descripcion: 'Zona agroindustrial del Bajío',
      keywords: GUANAJUATO_SEO.keywords.irapuato,
      color: 'green',
      icono: '🍓',
    };
  }

  if (ciudad === 'San Miguel de Allende') {
    return {
      tipo: 'pueblo-magico-premium',
      descripcion: 'Mejor Ciudad del Mundo, Patrimonio UNESCO',
      keywords: GUANAJUATO_SEO.keywords.sanMiguel,
      color: 'rose',
      icono: '⭐',
    };
  }

  if (ciudad === 'Dolores Hidalgo') {
    return {
      tipo: 'pueblo-magico-historico',
      descripcion: 'Cuna de la Independencia Nacional',
      keywords: GUANAJUATO_SEO.keywords.principales,
      color: 'red',
      icono: '🎺',
    };
  }

  return {
    tipo: 'regional',
    descripcion: 'Estado de Guanajuato',
    keywords: GUANAJUATO_SEO.keywords.principales,
    color: 'gray',
    icono: '📍',
  };
}


export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesGuanajuato.find(e => e.slug === slug);
}


export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  return estacionesGuanajuato
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}


export const ESTADISTICAS_GUANAJUATO = {
  total_estaciones: estacionesGuanajuato.length,
  total_bomberos: estacionesGuanajuato.reduce((sum, e) => sum + (e.personal || 0), 0),
  total_unidades: estacionesGuanajuato.reduce((sum, e) => sum + (e.unidades || 0), 0),
  estaciones_leon: getEstacionesLeon().length,
  estaciones_corredor_industrial: getEstacionesCorredorIndustrial().length,
  estaciones_capital: getEstacionesCapital().length,
  estaciones_bajio_norte: getEstacionesBajioNorte().length,
  estaciones_pueblos_magicos: getEstacionesPueblosMagicos().length,
  estaciones_hazmat: getEstacionesHAZMAT().length,
  municipios_cubiertos: new Set(estacionesGuanajuato.map(e => e.municipio)).size,
  riesgo_principal: 'Incendios industriales (automotriz, calzado, refinería)',
  industria_principal: 'Automotriz (#1 nacional) y Calzado (70% producción nacional)',
};

export default estacionesGuanajuato;
