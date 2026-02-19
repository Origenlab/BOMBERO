const DURANGO_SEO = {
  // ─── Keywords SEO por Categoría ───
  keywords: {
    principales: [
      "bomberos durango",
      "estaciones de bomberos durango",
      "emergencias durango mexico",
      "cuerpo de bomberos durango",
      "heroico cuerpo de bomberos durango",
      "proteccion civil durango",
      "servicios de emergencia durango",
      "911 durango",
      "bomberos incendios forestales durango",
      "brigadas forestales durango"
    ],
    capital: [
      "bomberos durango capital",
      "bomberos victoria de durango",
      "emergencias durango centro",
      "cuerpo de bomberos durango capital",
      "proteccion civil durango capital",
      "bomberos zona metropolitana durango"
    ],
    gomezPalacio: [
      "bomberos gomez palacio",
      "bomberos gomez palacio durango",
      "emergencias gomez palacio",
      "bomberos la laguna durango",
      "bomberos zona industrial gomez palacio",
      "proteccion civil gomez palacio"
    ],
    lerdo: [
      "bomberos lerdo",
      "bomberos lerdo durango",
      "emergencias lerdo",
      "proteccion civil lerdo",
      "bomberos ciudad jardin lerdo"
    ],
    sierra: [
      "bomberos sierra durango",
      "bomberos santiago papasquiaro",
      "bomberos pueblo nuevo durango",
      "bomberos el salto durango",
      "brigadas forestales sierra madre",
      "incendios forestales durango"
    ]}};
const estacionesDurango = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA DURANGO - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-central-durango",
    nombre: "Estación Central de Bomberos Durango",
    slug: "estacion-central-durango",
    direccion: "Calle Aquiles Serdán #200, Col. 8 de Septiembre",
    ciudad: "Durango",
    estado: "Durango",
    codigoPostal: "34196",
    telefono: "(618) 814-4555",
    email: "central@bomberosdurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 24.0277,
      lng: -104.6532
    },
    servicios: [
      "Combate de incendios urbanos e industriales",
      "Coordinación estatal de emergencias",
      "Rescate vehicular especializado",
      "Atención de emergencias con materiales peligrosos (HAZMAT)",
      "Rescate en estructuras colapsadas (USAR)",
      "Coordinación de brigadas forestales",
      "Academia Estatal de Bomberos de Durango",
      "Servicios de ambulancia y emergencias médicas",
      "Investigación de causas de incendio",
      "Inspecciones de seguridad contra incendios",
      "Control de fugas de gas LP y natural",
      "Retiro de enjambres de abejas"
    ],
    equipamiento: [
      "Camiones cisterna de 12,000 litros",
      "Unidades de rescate urbano pesado (USAR)",
      "Ambulancias de soporte vital avanzado",
      "Unidad HAZMAT con equipo de nivel A",
      "Escaleras telescópicas de 32 metros",
      "Centro de comando móvil",
      "Vehículos todo terreno para zona serrana",
      "Equipo de comunicaciones de largo alcance",
      "Herramienta hidráulica de rescate Holmatro",
      "Equipo de protección respiratoria SCBA"
    ],
    personal: 75,
    unidades: 12,
    descripcion: "Comandancia General del Heroico Cuerpo de Bomberos de Durango. Centro de operaciones para la capital del estado y sede de la Academia Estatal. Coordina las 13 brigadas forestales estatales durante la temporada de incendios (enero-junio). Responsable de la zona metropolitana de Victoria de Durango con más de 700,000 habitantes. Mantiene enlace permanente con CONAFOR para el combate de incendios forestales en la Sierra Madre Occidental.",
    fechaFundacion: "1935",
    redes: {
      facebook: "https://facebook.com/BomberosDurango",
      twitter: "https://twitter.com/PCDurango"
    }
  },
  {
    id: "estacion-bomberos-durango-norte",
    nombre: "Estación de Bomberos Durango Norte",
    slug: "estacion-bomberos-durango-norte",
    direccion: "Blvd. Felipe Pescador #1500, Fracc. Valle del Guadiana",
    ciudad: "Durango",
    estado: "Durango",
    codigoPostal: "34166",
    telefono: "(618) 812-3456",
    email: "norte@bomberosdurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 24.0522,
      lng: -104.6689
    },
    servicios: [
      "Combate de incendios residenciales y comerciales",
      "Rescate vehicular en carretera a Parral",
      "Atención de emergencias en zona industrial norte",
      "Control de fugas de gas LP y natural",
      "Rescate de personas atrapadas",
      "Atención prehospitalaria",
      "Prevención y capacitación comunitaria",
      "Emergencias en centros comerciales",
      "Cobertura a fraccionamientos residenciales"
    ],
    equipamiento: [
      "Autobombas de 8,000 litros",
      "Unidades de rescate vehicular",
      "Ambulancias tipo II",
      "Escalera mecánica de 24 metros",
      "Herramientas de extracción hidráulica",
      "Equipo de iluminación para emergencias nocturnas"
    ],
    personal: 35,
    unidades: 5,
    descripcion: "Estación estratégica para la zona norte de la capital duranguense, cubriendo los fraccionamientos de mayor crecimiento, zonas industriales y acceso a carretera federal a Chihuahua. Primera respuesta para el corredor industrial norte y centros comerciales de la zona. Atiende también emergencias en la salida hacia la Sierra de Durango.",
    fechaFundacion: "1998"
  },
  {
    id: "estacion-bomberos-durango-sur",
    nombre: "Estación de Bomberos Durango Sur",
    slug: "estacion-bomberos-durango-sur",
    direccion: "Av. Heroico Colegio Militar #800, Col. Ciénega",
    ciudad: "Durango",
    estado: "Durango",
    codigoPostal: "34089",
    telefono: "(618) 813-7890",
    email: "sur@bomberosdurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 23.9967,
      lng: -104.6358
    },
    servicios: [
      "Combate de incendios residenciales e industriales",
      "Rescate vehicular en carretera a Mazatlán",
      "Atención de emergencias en zona industrial sur",
      "Emergencias en plantas madereras",
      "Control de fugas de gas",
      "Rescate de personas atrapadas",
      "Atención prehospitalaria",
      "Capacitación a industrias",
      "Apoyo a brigadas forestales"
    ],
    equipamiento: [
      "Autobombas de 10,000 litros",
      "Unidades de rescate vehicular",
      "Ambulancias de emergencia",
      "Vehículos todo terreno",
      "Equipo forestal para apoyo en incendios",
      "Herramientas de rescate hidráulico"
    ],
    personal: 32,
    unidades: 5,
    descripcion: "Estación que cubre la zona sur de Victoria de Durango, incluyendo la zona industrial maderera, colonias populares y el acceso a la carretera Durango-Mazatlán (Espina del Diablo). Proporciona apoyo a las brigadas forestales que combaten incendios en la Sierra Madre Occidental. Especialización en emergencias industriales del sector maderero.",
    fechaFundacion: "2005"
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA LA LAGUNA - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-central-gomez-palacio",
    nombre: "Estación Central de Bomberos Gómez Palacio",
    slug: "estacion-central-gomez-palacio",
    direccion: "Av. Francisco I. Madero #400, Col. Centro",
    ciudad: "Gómez Palacio",
    estado: "Durango",
    codigoPostal: "35000",
    telefono: "(871) 714-1210",
    email: "central@bomberosgomezpalacio.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 25.5611,
      lng: -103.4956
    },
    servicios: [
      "Combate de incendios urbanos e industriales",
      "Coordinación de emergencias Comarca Lagunera (Durango)",
      "Rescate vehicular especializado",
      "Atención de emergencias HAZMAT (amoniaco, químicos lácteos)",
      "Emergencias en plantas lecheras y agroindustriales",
      "Rescate en estructuras colapsadas",
      "Servicios de ambulancia",
      "Investigación de causas de incendio",
      "Control de fugas de gas industrial",
      "Capacitación a empresas"
    ],
    equipamiento: [
      "Camiones cisterna de 12,000 litros",
      "Unidades HAZMAT especializadas",
      "Ambulancias de soporte vital avanzado",
      "Escaleras telescópicas de 28 metros",
      "Detectores de amoniaco y gases industriales",
      "Trajes de protección química nivel A y B",
      "Equipo de rescate industrial",
      "Centro de comando móvil"
    ],
    personal: 55,
    unidades: 9,
    descripcion: "Comandancia del Heroico Cuerpo de Bomberos de Gómez Palacio, segunda ciudad más poblada del estado con más de 370,000 habitantes. Centro de coordinación para la porción duranguense de la Comarca Lagunera, la principal cuenca lechera de México. Especialización en emergencias con amoniaco (refrigeración industrial) y HAZMAT agroindustrial. Coordina con bomberos de Torreón, Coahuila para emergencias metropolitanas.",
    fechaFundacion: "1952",
    redes: {
      facebook: "https://facebook.com/BomberosGomezPalacio"
    }
  },
  {
    id: "estacion-bomberos-gomez-palacio-industrial",
    nombre: "Subestación de Bomberos Gómez Palacio Zona Industrial",
    slug: "estacion-bomberos-gomez-palacio-industrial",
    direccion: "Calle Canatlán #500, Parque Industrial Lagunero",
    ciudad: "Gómez Palacio",
    estado: "Durango",
    codigoPostal: "35079",
    telefono: "(871) 714-1210",
    email: "industrial@bomberosgomezpalacio.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 25.5389,
      lng: -103.4583
    },
    servicios: [
      "Combate de incendios industriales",
      "Emergencias en parques industriales",
      "Atención HAZMAT en plantas manufactureras",
      "Emergencias en industria lechera (Grupo Lala)",
      "Rescate industrial especializado",
      "Control de derrames químicos",
      "Prevención industrial",
      "Capacitación a personal de plantas"
    ],
    equipamiento: [
      "Autobombas industriales",
      "Unidad HAZMAT con equipo especializado",
      "Detectores multigas",
      "Trajes de protección química",
      "Espuma AFFF para incendios clase B",
      "Equipo de contención de derrames"
    ],
    personal: 28,
    unidades: 4,
    descripcion: "Subestación estratégica ubicada en el Parque Industrial Lagunero, con cobertura a las principales plantas manufactureras y agroindustriales de Gómez Palacio. Especialización en emergencias industriales, particularmente en plantas de procesamiento lácteo y refrigeración que utilizan amoniaco. Respuesta rápida al corredor industrial de La Laguna.",
    fechaFundacion: "2010"
  },
  {
    id: "estacion-bomberos-lerdo",
    nombre: "Estación de Bomberos Lerdo",
    slug: "estacion-bomberos-lerdo",
    direccion: "Av. Matamoros #300, Col. Centro",
    ciudad: "Lerdo",
    estado: "Durango",
    codigoPostal: "35150",
    telefono: "(871) 725-3252",
    email: "lerdo@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 25.5342,
      lng: -103.5239
    },
    servicios: [
      "Combate de incendios urbanos y residenciales",
      "Rescate vehicular",
      "Emergencias en zona agrícola",
      "Control de fugas de gas",
      "Atención prehospitalaria",
      "Rescate de personas atrapadas",
      "Emergencias en industrias locales",
      "Prevención comunitaria",
      "Apoyo a zonas rurales"
    ],
    equipamiento: [
      "Autobombas de 8,000 litros",
      "Unidad de rescate vehicular",
      "Ambulancias",
      "Vehículos todo terreno para zona rural",
      "Herramientas de extracción hidráulica",
      "Equipo de protección respiratoria"
    ],
    personal: 32,
    unidades: 5,
    descripcion: 'Estación de bomberos de Ciudad Lerdo, conocida como "La Ciudad Jardín" por sus áreas verdes y viñedos. Cubre el tercer municipio más poblado de La Laguna duranguense con más de 160,000 habitantes. Las nuevas instalaciones inauguradas en 2023 cuentan con más de 680 metros cuadrados, incluyendo dormitorios, gimnasio, cocina y área de capacitación. Cobertura a zona urbana, agrícola y ejidos circundantes.',
    fechaFundacion: "1975",
    redes: {
      facebook: "https://facebook.com/PCLerdo"
    }
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA SIERRA - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-bomberos-santiago-papasquiaro",
    nombre: "Estación de Bomberos Santiago Papasquiaro",
    slug: "estacion-bomberos-santiago-papasquiaro",
    direccion: "Av. Hidalgo #250, Col. Centro",
    ciudad: "Santiago Papasquiaro",
    estado: "Durango",
    codigoPostal: "34600",
    telefono: "(674) 862-0911",
    email: "santiago@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 25.0439,
      lng: -105.4183
    },
    servicios: [
      "Combate de incendios forestales (especialidad principal)",
      "Coordinación de brigadas forestales zona sierra",
      "Combate de incendios urbanos",
      "Rescate en montaña y zonas remotas",
      "Emergencias en aserraderos y plantas madereras",
      "Rescate vehicular en carreteras de montaña",
      "Atención de emergencias invernales (nevadas)",
      "Búsqueda y rescate en sierra",
      "Atención prehospitalaria"
    ],
    equipamiento: [
      "Camiones cisterna todo terreno",
      "Vehículos 4x4 para zona serrana",
      "Equipo de combate de incendios forestales",
      "Herramientas forestales (hachas, palas, rastrillos)",
      "Mochilas extintoras",
      "Equipo de comunicación satelital",
      "Ambulancia todo terreno",
      "Equipo para emergencias invernales"
    ],
    personal: 35,
    unidades: 6,
    descripcion: "Estación estratégica en el corazón de la Sierra Madre Occidental, uno de los municipios con mayor superficie forestal de México. Santiago Papasquiaro es centro de la industria maderera duranguense y punto crítico para el combate de incendios forestales. Personal especializado en emergencias forestales con capacitación de CONAFOR. Coordina brigadas en una de las zonas de mayor riesgo de incendios del país. Nuevas instalaciones inauguradas en 2024 con infraestructura moderna.",
    fechaFundacion: "1968"
  },
  {
    id: "estacion-bomberos-pueblo-nuevo",
    nombre: "Estación de Bomberos Pueblo Nuevo",
    slug: "estacion-bomberos-pueblo-nuevo",
    direccion: "Calle Principal #100, Centro",
    ciudad: "Pueblo Nuevo",
    estado: "Durango",
    codigoPostal: "34940",
    telefono: "(675) 876-0123",
    email: "pueblonuevo@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 23.65,
      lng: -105.3667
    },
    servicios: [
      "Combate de incendios forestales (especialidad principal)",
      "Primera respuesta incendios Sierra Madre",
      "Rescate en montaña",
      "Emergencias en comunidades remotas",
      "Atención de emergencias en carretera Durango-Mazatlán",
      "Rescate vehicular en curvas peligrosas",
      "Emergencias invernales",
      "Búsqueda y rescate",
      "Atención básica prehospitalaria"
    ],
    equipamiento: [
      "Vehículos todo terreno especializados",
      "Equipo completo de combate forestal",
      "Mochilas aspersoras",
      "Herramienta manual forestal",
      "Radio comunicación de largo alcance",
      "Equipo de rescate en montaña",
      "Ambulancia rural"
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación ubicada en Pueblo Nuevo, municipio con la mayor superficie de bosques de pino-encino del estado. Primera línea de defensa contra incendios forestales en la Sierra Madre Occidental. El municipio sufrió devastadores incendios en 2024 con pérdidas significativas de hectáreas forestales. Personal altamente capacitado en combate de incendios forestales y rescate en terrenos extremos. Cubre la carretera Durango-Mazatlán conocida como "La Espina del Diablo".',
    fechaFundacion: "1985"
  },
  {
    id: "estacion-bomberos-el-salto",
    nombre: "Estación de Bomberos El Salto",
    slug: "estacion-bomberos-el-salto",
    direccion: "Av. Juárez #50, Centro",
    ciudad: "Pueblo Nuevo (El Salto)",
    estado: "Durango",
    codigoPostal: "34947",
    telefono: "(675) 878-0456",
    email: "elsalto@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 23.7833,
      lng: -105.3667
    },
    servicios: [
      "Combate de incendios forestales",
      "Emergencias en aserraderos y plantas madereras",
      "Rescate en zonas boscosas",
      "Atención de emergencias en carretera federal",
      "Emergencias por nevadas y heladas",
      "Rescate vehicular",
      "Atención prehospitalaria básica",
      "Apoyo a comunidades serranas"
    ],
    equipamiento: [
      "Camión cisterna todo terreno",
      "Vehículos 4x4",
      "Equipo forestal completo",
      "Motosierras de emergencia",
      "Equipo de comunicación VHF",
      "Herramientas de rescate básico"
    ],
    personal: 20,
    unidades: 3,
    descripcion: "Estación de bomberos en El Salto, importante centro maderero de la Sierra de Durango. Cobertura a la zona forestal más productiva del estado y una de las más importantes del país. Atiende emergencias en los numerosos aserraderos de la región y combate incendios forestales en coordinación con CONAFOR y brigadas estatales. Clima extremo con nevadas en invierno que requieren preparación especial.",
    fechaFundacion: "1990"
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA CENTRO-SUR - 3 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-bomberos-canatlan",
    nombre: "Estación de Bomberos Canatlán",
    slug: "estacion-bomberos-canatlan",
    direccion: "Calle Independencia #75, Centro",
    ciudad: "Canatlán",
    estado: "Durango",
    codigoPostal: "34450",
    telefono: "(618) 816-0789",
    email: "canatlan@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 24.5208,
      lng: -104.7783
    },
    servicios: [
      "Combate de incendios urbanos y rurales",
      "Emergencias en zonas agrícolas",
      "Rescate vehicular en carretera federal",
      "Control de incendios en pastizales",
      "Emergencias con maquinaria agrícola",
      "Atención prehospitalaria",
      "Control de fugas de gas",
      "Apoyo a comunidades rurales"
    ],
    equipamiento: [
      "Autobomba de 6,000 litros",
      "Vehículo de rescate",
      "Ambulancia",
      "Vehículo todo terreno",
      "Herramientas de rescate",
      "Equipo de protección básico"
    ],
    personal: 18,
    unidades: 3,
    descripcion: 'Estación de bomberos de Canatlán, conocida como "La Capital del Mundo" por su feria internacional de la manzana. Municipio agrícola importante con producción frutícola y ganadera. Cobertura a zona rural extensa con comunidades dispersas. Atiende emergencias en carretera federal Durango-Parral y zona agrícola. Personal capacitado para emergencias rurales y climáticas.',
    fechaFundacion: "1995"
  },
  {
    id: "estacion-bomberos-nombre-de-dios",
    nombre: "Estación de Bomberos Nombre de Dios",
    slug: "estacion-bomberos-nombre-de-dios",
    direccion: "Calle Francisco I. Madero #40, Centro Histórico",
    ciudad: "Nombre de Dios",
    estado: "Durango",
    codigoPostal: "34960",
    telefono: "(618) 868-0234",
    email: "nombrededios@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 23.8467,
      lng: -104.2422
    },
    servicios: [
      "Combate de incendios urbanos",
      "Protección del patrimonio histórico (Pueblo Mágico)",
      "Emergencias en zona agrícola",
      "Rescate vehicular",
      "Atención de emergencias turísticas",
      "Control de fugas de gas",
      "Atención prehospitalaria",
      "Prevención y capacitación comunitaria"
    ],
    equipamiento: [
      "Autobomba de 5,000 litros",
      "Unidad de rescate",
      "Ambulancia",
      "Equipo de protección patrimonial",
      "Herramientas de rescate ligero"
    ],
    personal: 15,
    unidades: 3,
    descripcion: "Estación de bomberos del Pueblo Mágico de Nombre de Dios, la primera población española fundada en Durango (1555). Responsabilidad especial en la protección del patrimonio histórico colonial incluyendo templos y arquitectura virreinal del siglo XVI. Designado Pueblo Mágico en 2023, recibe creciente afluencia turística. Cobertura a zona centro-sur del estado con vocación agrícola.",
    fechaFundacion: "2000"
  },
  {
    id: "estacion-bomberos-vicente-guerrero",
    nombre: "Estación de Bomberos Vicente Guerrero",
    slug: "estacion-bomberos-vicente-guerrero",
    direccion: "Calle Benito Juárez #80, Centro",
    ciudad: "Vicente Guerrero",
    estado: "Durango",
    codigoPostal: "34970",
    telefono: "(618) 869-0567",
    email: "vicenteguerrero@proteccioncivildurango.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 23.7389,
      lng: -103.9847
    },
    servicios: [
      "Combate de incendios urbanos y rurales",
      "Emergencias en comunidades menonitas",
      "Rescate vehicular en carretera",
      "Emergencias agrícolas",
      "Control de incendios en pastizales",
      "Atención prehospitalaria",
      "Apoyo a ejidos y comunidades",
      "Control de fugas de gas"
    ],
    equipamiento: [
      "Autobomba rural",
      "Vehículo de rescate",
      "Ambulancia",
      "Vehículo 4x4",
      "Herramientas básicas de rescate"
    ],
    personal: 15,
    unidades: 3,
    descripcion: "Estación de bomberos de Vicente Guerrero, municipio con importante presencia de comunidades menonitas dedicadas a la agricultura y ganadería. Zona productora de lácteos, quesos y productos agrícolas. Cobertura a área rural extensa incluyendo ejidos y pequeñas comunidades. Personal capacitado para emergencias rurales, agrícolas y vehiculares en carreteras federales.",
    fechaFundacion: "2008"
  }
];
function getEstacionesMetropolitanas() {
  return estacionesDurango.filter((e) => e.ciudad === "Durango");
}
function getEstacionesLaLaguna() {
  const ciudadesLaguna = ["Gómez Palacio", "Lerdo"];
  return estacionesDurango.filter((e) => ciudadesLaguna.includes(e.ciudad));
}
function getEstacionesSierra() {
  const ciudadesSierra = ["Santiago Papasquiaro", "Pueblo Nuevo", "Pueblo Nuevo (El Salto)"];
  return estacionesDurango.filter((e) => ciudadesSierra.includes(e.ciudad));
}
function getEstacionesForestales() {
  return estacionesDurango.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("forestal") || s.toLowerCase().includes("brigada") || s.toLowerCase().includes("bosque")
    )
  );
}
function getEstacionesHAZMAT() {
  return estacionesDurango.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("hazmat") || s.toLowerCase().includes("materiales peligrosos") || s.toLowerCase().includes("químic") || s.toLowerCase().includes("amoniaco")
    )
  );
}
function generarMetaSEO(estacion) {
  const ciudadSlug = estacion.ciudad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  let contexto = "";
  let keywordsAdicionales = [];
  if (estacion.ciudad === "Durango") {
    contexto = "capital del estado, coordinación forestal";
    keywordsAdicionales = ["bomberos capital durango", "emergencias forestales durango"];
  } else if (estacion.ciudad === "Gómez Palacio") {
    contexto = "Comarca Lagunera, zona industrial lechera";
    keywordsAdicionales = ["bomberos gomez palacio", "emergencias industriales laguna"];
  } else if (estacion.ciudad === "Lerdo") {
    contexto = "Ciudad Jardín, La Laguna";
    keywordsAdicionales = ["bomberos lerdo durango", "emergencias lerdo"];
  } else if (estacion.ciudad === "Santiago Papasquiaro") {
    contexto = "corazón de la Sierra Madre, zona forestal";
    keywordsAdicionales = ["bomberos santiago papasquiaro", "incendios forestales sierra"];
  } else if (estacion.ciudad.includes("Pueblo Nuevo")) {
    contexto = "Sierra Madre Occidental, zona boscosa";
    keywordsAdicionales = ["bomberos pueblo nuevo durango", "brigadas forestales"];
  } else if (estacion.ciudad === "Nombre de Dios") {
    contexto = "Pueblo Mágico, patrimonio histórico";
    keywordsAdicionales = ["bomberos nombre de dios", "pueblo magico durango"];
  } else {
    contexto = "estado de Durango";
  }
  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Durango`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Tel: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(", ")}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} durango`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      "bomberos durango",
      "emergencias durango",
      "protección civil durango",
      ...keywordsAdicionales
    ],
    canonical: `https://bombero.mx/directorio/durango/${estacion.slug}`
  };
}
function getContextoZona(ciudad) {
  if (ciudad === "Durango") {
    return {
      tipo: "capital",
      descripcion: "Capital del estado y centro de coordinación forestal",
      keywords: DURANGO_SEO.keywords.capital,
      color: "green",
      icono: "🏛️"
    };
  }
  if (ciudad === "Gómez Palacio") {
    return {
      tipo: "industrial-lechera",
      descripcion: "Segunda ciudad del estado, zona industrial La Laguna",
      keywords: DURANGO_SEO.keywords.gomezPalacio,
      color: "blue",
      icono: "🏭"
    };
  }
  if (ciudad === "Lerdo") {
    return {
      tipo: "laguna",
      descripcion: "Ciudad Jardín, Comarca Lagunera",
      keywords: DURANGO_SEO.keywords.lerdo,
      color: "emerald",
      icono: "🌳"
    };
  }
  if (ciudad === "Santiago Papasquiaro" || ciudad.includes("Pueblo Nuevo") || ciudad.includes("El Salto")) {
    return {
      tipo: "forestal-sierra",
      descripcion: "Sierra Madre Occidental, zona de incendios forestales",
      keywords: DURANGO_SEO.keywords.sierra,
      color: "amber",
      icono: "🌲"
    };
  }
  if (ciudad === "Canatlán") {
    return {
      tipo: "agricola",
      descripcion: "Capital de la Manzana, zona agrícola",
      keywords: DURANGO_SEO.keywords.principales,
      color: "red",
      icono: "🍎"
    };
  }
  if (ciudad === "Nombre de Dios") {
    return {
      tipo: "pueblo-magico",
      descripcion: "Pueblo Mágico, patrimonio histórico colonial",
      keywords: DURANGO_SEO.keywords.principales,
      color: "purple",
      icono: "🏛️"
    };
  }
  if (ciudad === "Vicente Guerrero") {
    return {
      tipo: "agricola-menonita",
      descripcion: "Zona agrícola con comunidades menonitas",
      keywords: DURANGO_SEO.keywords.principales,
      color: "yellow",
      icono: "🌾"
    };
  }
  return {
    tipo: "regional",
    descripcion: "Estado de Durango",
    keywords: DURANGO_SEO.keywords.principales,
    color: "gray",
    icono: "📍"
  };
}
const ESTADISTICAS_DURANGO = {
  total_estaciones: estacionesDurango.length,
  total_bomberos: estacionesDurango.reduce((sum, e) => sum + e.personal, 0),
  total_unidades: estacionesDurango.reduce((sum, e) => sum + e.unidades, 0),
  estaciones_metropolitanas: getEstacionesMetropolitanas().length,
  estaciones_laguna: getEstacionesLaLaguna().length,
  estaciones_sierra: getEstacionesSierra().length,
  estaciones_forestales: getEstacionesForestales().length,
  estaciones_hazmat: getEstacionesHAZMAT().length,
  municipios_cubiertos: new Set(estacionesDurango.map((e) => e.ciudad)).size};

export { ESTADISTICAS_DURANGO as E, getContextoZona as a, estacionesDurango as e, generarMetaSEO as g };
