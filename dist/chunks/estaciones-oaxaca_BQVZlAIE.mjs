const OAXACA_SEO = {
  // SEO Principal
  titulo: "Estaciones de Bomberos en Oaxaca",
  descripcion: "Directorio completo de las 16 estaciones de bomberos en Oaxaca. Teléfonos de emergencia, direcciones y cobertura del H. Cuerpo de Bomberos de Oaxaca, Tuxtepec, Huatulco y la Costa Oaxaqueña.",
  // SEO Bilingüe para Zonas Turísticas UNESCO
  bilingue: {
    descripcion: "Complete directory of 16 fire stations in Oaxaca, Mexico. Emergency services covering Oaxaca City, Huatulco, Puerto Escondido, Monte Albán UNESCO site, and the Oaxacan Coast."},
  // Configuración de Interlinking Estratégico
  interlinking: {
    estadosVecinos: [
      {
        estado: "Puebla",
        slug: "puebla",
        relacion: "Conexión Sierra Norte y corredor turístico",
        contexto: "Ruta de la Sierra Negra y Cuetzalan"
      },
      {
        estado: "Veracruz",
        slug: "veracruz",
        relacion: "Frontera Istmo y región petrolera",
        contexto: "Coordinación emergencias Coatzacoalcos-Salina Cruz"
      },
      {
        estado: "Chiapas",
        slug: "chiapas",
        relacion: "Frontera sureste y corredor turístico",
        contexto: "Ruta Maya y ecoturismo"
      },
      {
        estado: "Guerrero",
        slug: "guerrero",
        relacion: "Costa del Pacífico Sur",
        contexto: "Corredor turístico Puerto Escondido-Acapulco"
      }
    ],
    productosRelacionados: [
      { producto: "Equipo Rescate Altura", slug: "/productos/rescate-altura", contexto: "Zonas arqueológicas y montañosas" },
      { producto: "Equipos SCBA", slug: "/productos/scba", contexto: "Respiración autónoma incendios" },
      { producto: "Trajes Estructurales", slug: "/productos/trajes-para-bomberos", contexto: "Protección bomberos certificada NFPA" },
      { producto: "Equipos Forestales", slug: "/productos/forestales", contexto: "Incendios temporada seca" },
      { producto: "Rescate Acuático", slug: "/productos/rescate-acuatico", contexto: "Costa y sistemas lagunares" },
      { producto: "Cotización Personalizada", slug: "/cotizar", contexto: "Equipamiento para tu corporación" }
    ]
  }};
const ZONAS_OAXACA = {
  vallesCentrales: {
    nombre: "Valles Centrales",
    descripcion: "Centro histórico UNESCO y zona arqueológica Monte Albán",
    municipios: ["Oaxaca de Juárez", "Santa Cruz Xoxocotlán", "Santa Lucía del Camino", "Zaachila", "Tlacolula", "Mitla"],
    caracteristicas: ["Patrimonio UNESCO", "Alta densidad turística", "Zona arqueológica", "Mezcal artesanal"],
    color: "#7c3aed"
  },
  istmoTehuantepec: {
    nombre: "Istmo de Tehuantepec",
    descripcion: "Corredor logístico, refinería y puerto industrial",
    municipios: ["Juchitán de Zaragoza", "Salina Cruz", "Tehuantepec", "Ixtepec"],
    caracteristicas: ["Puerto industrial", "Refinería PEMEX", "Corredor interoceánico", "Vientos extremos"],
    color: "#0891b2"
  },
  costaOaxaquena: {
    nombre: "Costa Oaxaqueña",
    descripcion: "Destinos turísticos de playa y Bahías de Huatulco",
    municipios: ["Santa María Huatulco", "San Pedro Pochutla", "Santa María Tonameca", "Puerto Escondido"],
    caracteristicas: ["Turismo internacional", "Bahías protegidas", "Surf", "Temporada huracanes"],
    color: "#f59e0b"
  },
  papaloapan: {
    nombre: "Región del Papaloapan",
    descripcion: "Zona agroindustrial y frontera con Veracruz",
    municipios: ["San Juan Bautista Tuxtepec", "Loma Bonita", "Acatlán de Pérez Figueroa"],
    caracteristicas: ["Agroindustria", "Ingenios azucareros", "Zona inundable", "Frontera Veracruz"],
    color: "#16a34a"
  },
  sierraNorte: {
    nombre: "Sierra Norte",
    descripcion: "Comunidades indígenas y ecoturismo de montaña",
    municipios: ["Ixtlán de Juárez", "Guelatao", "Capulálpam de Méndez"],
    caracteristicas: ["Pueblos Mágicos", "Comunidades indígenas", "Bosques templados", "Ecoturismo"],
    color: "#059669"
  },
  mixteca: {
    nombre: "La Mixteca",
    descripcion: "Zona histórica y comunidades tradicionales",
    municipios: ["Huajuapan de León", "Tlaxiaco", "Nochixtlán"],
    caracteristicas: ["Arte rupestre", "Zona sismica", "Patrimonio mixteco", "Migración"],
    color: "#dc2626"
  }
};
const ALERTAS_OAXACA = {
  temporadaHuracanes: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 4 && mes <= 10;
    },
    mensaje: "Temporada de huracanes activa en la Costa Oaxaqueña",
    tipo: "warning",
    icono: "🌀",
    zonas: ["Costa Oaxaqueña", "Istmo de Tehuantepec"]
  },
  temporadaSeca: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 1 && mes <= 4;
    },
    mensaje: "Alto riesgo de incendios forestales en Sierra Norte y Mixteca",
    tipo: "danger",
    icono: "🔥",
    zonas: ["Sierra Norte", "Mixteca", "Valles Centrales"]
  },
  temporadaSismica: {
    activa: () => true,
    // Siempre activa - zona altamente sísmica
    mensaje: "Oaxaca es zona de alta sismicidad. Conoce tu protocolo de evacuación",
    tipo: "info",
    icono: "⚠️",
    zonas: ["Todo el estado"]
  },
  vientosTehuanos: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 9 || mes <= 2;
    },
    mensaje: "Temporada de vientos Tehuanos extremos en el Istmo",
    tipo: "warning",
    icono: "💨",
    zonas: ["Istmo de Tehuantepec"]
  },
  turismaMasivo: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes === 6 || mes === 9 || mes === 10;
    },
    mensaje: "Alto flujo turístico por Guelaguetza / Día de Muertos - Mayor demanda de servicios",
    tipo: "info",
    icono: "🎭",
    zonas: ["Valles Centrales", "Costa Oaxaqueña"]
  }
};
const FAQ_OAXACA = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en Oaxaca?",
    respuesta: "El número de emergencias en Oaxaca es el 911 nacional. La Central de Bomberos de Oaxaca de Juárez también atiende en (951) 516-2424. En Huatulco: (958) 587-0106. En Puerto Escondido: (954) 582-0222."
  },
  {
    pregunta: "¿Los bomberos de Oaxaca atienden emergencias en Monte Albán?",
    respuesta: "Sí, el H. Cuerpo de Bomberos de Oaxaca de Juárez y la estación de Santa Cruz Xoxocotlán cubren la zona arqueológica de Monte Albán, patrimonio UNESCO. Cuentan con equipo especializado para rescate en altura y estructuras antiguas."
  },
  {
    pregunta: "¿Hay bomberos en las Bahías de Huatulco?",
    respuesta: "Sí, Huatulco cuenta con una estación de bomberos que cubre las 9 bahías del complejo turístico. Ofrecen servicios de rescate acuático, atención de incendios y emergencias turísticas con personal bilingüe."
  },
  {
    pregunta: "¿Qué servicios ofrecen los bomberos en Puerto Escondido?",
    respuesta: "Los bomberos de Puerto Escondido ofrecen: rescate acuático en playas (Zicatela, Carrizalillo, Marinero), atención de incendios, rescate vehicular en la carretera costera, y apoyo en emergencias por oleaje alto durante temporada de surf."
  },
  {
    pregunta: "¿Los bomberos de Oaxaca atienden incendios forestales?",
    respuesta: "Sí, especialmente en temporada seca (febrero-mayo). Trabajan coordinados con CONAFOR para proteger la Sierra Norte, la Mixteca y las áreas boscosas. La estación de Ixtlán de Juárez está especializada en combate de incendios forestales."
  },
  {
    pregunta: "¿Hay bomberos en el Istmo de Tehuantepec?",
    respuesta: "Sí, el Istmo cuenta con estaciones en Juchitán, Salina Cruz y Tehuantepec. La estación de Salina Cruz incluye capacidad HAZMAT para emergencias en la refinería y el puerto industrial."
  }
];
const CONTEXTO_OAXACA = {
  // Patrimonio UNESCO
  patrimonioUnesco: [
    {
      sitio: "Centro Histórico de Oaxaca",
      declaracion: 1987,
      descripcion: "Arquitectura colonial y prehispánica",
      visitantesAnuales: "1,500,000+"
    },
    {
      sitio: "Zona Arqueológica de Monte Albán",
      declaracion: 1987,
      descripcion: "Capital zapoteca, 500 a.C. - 850 d.C.",
      visitantesAnuales: "500,000+"
    }
  ]};
const INFRAESTRUCTURA_OAXACA = {
  // Refinería
  refineria: {
    capacidad: "330,000 barriles/día",
    tipoRiesgo: "HAZMAT, explosiones, derrames"},
  // Puerto
  puerto: {
    tipo: "Comercial e Industrial",
    trafico: "Contenedores, petróleo, granel"}};
const estacionesOaxaca = [
  // ═══ VALLES CENTRALES ═══
  {
    nombre: "Estación Central Oaxaca de Juárez",
    slug: "estacion-central-oaxaca",
    direccion: "Calle Macedonio Alcalá 500, Centro Histórico, Oaxaca de Juárez, Oax.",
    coordenadas: { lat: 17.0618, lng: -96.7265 },
    telefono: "(951) 516-2424",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Rescate en altura",
      "Protección patrimonio UNESCO",
      "Servicios especiales eventos masivos",
      "Capacitación ciudadana"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Escalera telescópica 30m",
      "1 Unidad de rescate pesado",
      "2 Ambulancias",
      "Equipo rescate altura",
      "Equipo patrimonio histórico"
    ],
    personal: 65,
    copiasActa: true,
    zona: "Valles Centrales",
    municipiosCubiertos: ["Oaxaca de Juárez", "Santa Lucía del Camino", "San Andrés Huayápam"],
    descripcion: "Estación central del H. Cuerpo de Bomberos de Oaxaca, responsable de la protección del Centro Histórico (Patrimonio UNESCO), la Catedral, el Ex Convento de Santo Domingo y las zonas aledañas. Equipo especializado para estructuras patrimoniales.",
    tiempoRespuesta: "5-8 minutos zona centro",
    facebook: "https://facebook.com/BomberosOaxaca",
    caracteristicasEspeciales: ["Protección Centro Histórico UNESCO", "Equipo patrimonio", "Eventos Guelaguetza y Día de Muertos"]
  },
  {
    nombre: "Estación de Bomberos Santa Cruz Xoxocotlán",
    slug: "estacion-bomberos-xoxocotlan",
    direccion: "Av. Principal s/n, Centro, Santa Cruz Xoxocotlán, Oax.",
    coordenadas: { lat: 17.0283, lng: -96.7333 },
    telefono: "(951) 517-0188",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate en zona arqueológica",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Apoyo Monte Albán",
      "Incendios forestales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo rescate altura"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Valles Centrales",
    municipiosCubiertos: ["Santa Cruz Xoxocotlán", "Monte Albán", "Atzompa"],
    descripcion: "Estación estratégica para la protección de la Zona Arqueológica de Monte Albán, Patrimonio de la Humanidad. Primera respuesta ante emergencias en el sitio UNESCO más visitado de Oaxaca.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Cobertura Monte Albán UNESCO", "Rescate arqueológico", "Incendios forestales cerro"]
  },
  {
    nombre: "Estación de Bomberos Tlacolula de Matamoros",
    slug: "estacion-bomberos-tlacolula",
    direccion: "Calle Hidalgo 45, Centro, Tlacolula de Matamoros, Oax.",
    coordenadas: { lat: 16.9536, lng: -96.4775 },
    telefono: "(951) 562-0077",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular carretera 190",
      "Atención pre-hospitalaria",
      "Protección zona arqueológica Mitla",
      "Apoyo comunidades rurales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Valles Centrales",
    municipiosCubiertos: ["Tlacolula", "Mitla", "Santa Ana del Valle", "Teotitlán del Valle"],
    descripcion: "Cobertura del Valle de Tlacolula, incluyendo la zona arqueológica de Mitla y las comunidades artesanales zapotecas. Apoyo a eventos del tianguis dominical más grande de Oaxaca.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Protección Mitla", "Tianguis dominical", "Comunidades artesanales"]
  },
  // ═══ COSTA OAXAQUEÑA ═══
  {
    nombre: "Estación de Bomberos Bahías de Huatulco",
    slug: "estacion-bomberos-huatulco",
    direccion: "Boulevard Benito Juárez s/n, La Crucecita, Huatulco, Oax.",
    coordenadas: { lat: 15.7731, lng: -96.1344 },
    telefono: "(958) 587-0106",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático 9 bahías",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias hoteleras",
      "Apoyo turistas internacionales",
      "Rescate embarcaciones"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático",
      "1 Ambulancia",
      "Motos acuáticas rescate",
      "Equipo buceo básico"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Costa Oaxaqueña",
    municipiosCubiertos: ["Santa María Huatulco", "Bahías de Huatulco", "San Agustín"],
    descripcion: "Protección del complejo turístico de las 9 Bahías de Huatulco. Personal con capacitación en rescate acuático y atención bilingüe para turistas internacionales. Coordinación con hoteles y marinas.",
    tiempoRespuesta: "5-12 minutos zona hotelera",
    sitioWeb: "https://huatulco.gob.mx/bomberos",
    caracteristicasEspeciales: ["Rescate acuático", "Atención bilingüe", "9 Bahías protegidas", "Turismo internacional"]
  },
  {
    nombre: "Estación de Bomberos Puerto Escondido",
    slug: "estacion-bomberos-puerto-escondido",
    direccion: "Calle 1a Norte s/n, Centro, Puerto Escondido, Oax.",
    coordenadas: { lat: 15.8615, lng: -97.0731 },
    telefono: "(954) 582-0222",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático playas",
      "Rescate surf Zicatela",
      "Rescate vehicular costera",
      "Atención pre-hospitalaria",
      "Emergencias turísticas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático",
      "1 Ambulancia",
      "Tablas rescate surf",
      "Motos acuáticas"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Costa Oaxaqueña",
    municipiosCubiertos: ["San Pedro Mixtepec", "Puerto Escondido", "Puerto Angelito", "Carrizalillo"],
    descripcion: "Especializada en rescate acuático para las playas de alto oleaje de Puerto Escondido, incluyendo Playa Zicatela (Pipeline mexicano). Atención a la comunidad surfer internacional y accidentes en carretera costera.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Rescate surf Zicatela", "Alto oleaje", "Turismo surfer", "Carretera costera"]
  },
  {
    nombre: "Estación de Bomberos Pochutla",
    slug: "estacion-bomberos-pochutla",
    direccion: "Calle Lázaro Cárdenas 23, Centro, San Pedro Pochutla, Oax.",
    coordenadas: { lat: 15.7439, lng: -96.465 },
    telefono: "(958) 584-0077",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Apoyo playas Zipolite y Mazunte",
      "Incendios forestales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Costa Oaxaqueña",
    municipiosCubiertos: ["San Pedro Pochutla", "Zipolite", "Mazunte", "San Agustinillo"],
    descripcion: "Cobertura de la zona de playas alternativas de la Costa Oaxaqueña: Zipolite, Mazunte y San Agustinillo. Apoyo al Centro Mexicano de la Tortuga y comunidades costeras.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Playas alternativas", "Centro de la Tortuga", "Ecoturismo costero"]
  },
  // ═══ ISTMO DE TEHUANTEPEC ═══
  {
    nombre: "Estación Central Juchitán de Zaragoza",
    slug: "estacion-central-juchitan",
    direccion: "Calle 16 de Septiembre 50, Centro, Juchitán de Zaragoza, Oax.",
    coordenadas: { lat: 16.4361, lng: -95.0197 },
    telefono: "(971) 711-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate estructural",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Apoyo sismos",
      "Evacuaciones"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate pesado",
      "1 Ambulancia",
      "Equipo rescate estructural"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Istmo de Tehuantepec",
    municipiosCubiertos: ["Juchitán de Zaragoza", "El Espinal", "Asunción Ixtaltepec"],
    descripcion: "Estación principal del Istmo, ciudad que sufrió graves daños en los sismos de 2017. Personal especializado en rescate estructural y evacuaciones. Zona de alta sismicidad.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona sísmica", "Rescate estructural", "Post-sismo 2017", "Vientos tehuanos"]
  },
  {
    nombre: "Estación de Bomberos HAZMAT Salina Cruz",
    slug: "estacion-bomberos-hazmat-salina-cruz",
    direccion: "Av. Puerto Industrial s/n, Zona Industrial, Salina Cruz, Oax.",
    coordenadas: { lat: 16.1642, lng: -95.1956 },
    telefono: "(971) 714-0099",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT nivel III",
      "Emergencias refinería",
      "Emergencias portuarias",
      "Derrames combustibles",
      "Rescate técnico",
      "Atención pre-hospitalaria"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT completa",
      "1 Unidad espuma AFFF",
      "2 Ambulancias",
      "Trajes encapsulados Nivel A",
      "Detectores multigas"
    ],
    personal: 40,
    copiasActa: true,
    zona: "Istmo de Tehuantepec",
    municipiosCubiertos: ["Salina Cruz", "Zona Industrial", "Puerto de Salina Cruz"],
    descripcion: "Estación especializada HAZMAT para la Refinería Antonio Dovalí Jaime (330,000 barriles/día) y el Puerto de Salina Cruz. Capacidad de respuesta a emergencias con materiales peligrosos, derrames y explosiones industriales.",
    tiempoRespuesta: "3-5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel III", "Refinería PEMEX", "Puerto industrial", "Corredor interoceánico"]
  },
  {
    nombre: "Estación de Bomberos Tehuantepec",
    slug: "estacion-bomberos-tehuantepec",
    direccion: "Calle Hidalgo 78, Centro, Santo Domingo Tehuantepec, Oax.",
    coordenadas: { lat: 16.3261, lng: -95.2403 },
    telefono: "(971) 715-0055",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular carretera 190",
      "Atención pre-hospitalaria",
      "Apoyo comunidades",
      "Rescate estructural"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Istmo de Tehuantepec",
    municipiosCubiertos: ["Santo Domingo Tehuantepec", "San Blas Atempa", "Santa María Mixtequilla"],
    descripcion: "Cobertura de la histórica ciudad de Tehuantepec, paso obligado del corredor transístmico. Apoyo en accidentes de la carretera 190 y emergencias en comunidades zapotecas del Istmo.",
    tiempoRespuesta: "6-12 minutos",
    caracteristicasEspeciales: ["Corredor transístmico", "Comunidades zapotecas", "Vientos tehuanos"]
  },
  // ═══ REGIÓN DEL PAPALOAPAN ═══
  {
    nombre: "Estación Central San Juan Bautista Tuxtepec",
    slug: "estacion-central-tuxtepec",
    direccion: "Av. Independencia 200, Centro, San Juan Bautista Tuxtepec, Oax.",
    coordenadas: { lat: 18.0883, lng: -96.1225 },
    telefono: "(287) 875-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático río Papaloapan",
      "Rescate inundaciones",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias agroindustriales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Lancha rescate",
      "1 Unidad rescate",
      "2 Ambulancias",
      "Equipo inundaciones"
    ],
    personal: 28,
    copiasActa: true,
    zona: "Papaloapan",
    municipiosCubiertos: ["San Juan Bautista Tuxtepec", "San José Chiltepec", "Valle Nacional"],
    descripcion: "Estación principal de la Cuenca del Papaloapan, segunda ciudad más poblada de Oaxaca. Especializada en rescate acuático y atención de inundaciones. Cobertura de ingenios azucareros y agroindustria.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Rescate inundaciones", "Río Papaloapan", "Agroindustria", "Ingenios azucareros"]
  },
  {
    nombre: "Estación de Bomberos Loma Bonita",
    slug: "estacion-bomberos-loma-bonita",
    direccion: "Calle Juárez 45, Centro, Loma Bonita, Oax.",
    coordenadas: { lat: 18.1086, lng: -95.8753 },
    telefono: "(287) 872-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate inundaciones",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias ingenio azucarero"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Papaloapan",
    municipiosCubiertos: ["Loma Bonita", "Cosolapa", "Acatlán de Pérez Figueroa"],
    descripcion: "Cobertura de la zona agroindustrial fronteriza con Veracruz. Atención de emergencias en ingenios azucareros y cultivos de piña. Zona susceptible a inundaciones del Papaloapan.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Frontera Veracruz", "Ingenio azucarero", "Zona inundable", "Agroindustria"]
  },
  // ═══ SIERRA NORTE ═══
  {
    nombre: "Estación de Bomberos Ixtlán de Juárez",
    slug: "estacion-bomberos-ixtlan",
    direccion: "Calle Principal s/n, Centro, Ixtlán de Juárez, Oax.",
    coordenadas: { lat: 17.3294, lng: -96.4869 },
    telefono: "(951) 553-6044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios forestales",
      "Rescate en montaña",
      "Atención pre-hospitalaria",
      "Apoyo comunidades serranas",
      "Búsqueda y rescate"
    ],
    equipamiento: [
      "1 Autobomba forestal",
      "1 Unidad rescate montaña",
      "1 Ambulancia 4x4",
      "Equipo forestal completo"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Sierra Norte",
    municipiosCubiertos: ["Ixtlán de Juárez", "Capulálpam de Méndez", "Guelatao de Juárez", "Santa Catarina Lachatao"],
    descripcion: "Estación especializada en incendios forestales y rescate de montaña en la Sierra Norte de Oaxaca. Protección de bosques templados de las comunidades zapotecas de la Sierra. Cobertura de Pueblos Mágicos como Capulálpam.",
    tiempoRespuesta: "10-20 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Incendios forestales", "Rescate montaña", "Pueblos Mágicos", "Comunidades indígenas"]
  },
  // ═══ LA MIXTECA ═══
  {
    nombre: "Estación Central Huajuapan de León",
    slug: "estacion-central-huajuapan",
    direccion: "Calle Nuyoo 34, Centro, Huajuapan de León, Oax.",
    coordenadas: { lat: 17.8067, lng: -97.7767 },
    telefono: "(953) 532-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular carretera 190",
      "Atención pre-hospitalaria",
      "Rescate estructural sismos",
      "Incendios forestales",
      "Apoyo comunidades mixtecos"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo rescate estructural"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Mixteca",
    municipiosCubiertos: ["Huajuapan de León", "Asunción Cuyotepeji", "San Andrés Dinicuiti"],
    descripcion: "Estación principal de la región Mixteca, zona de alta sismicidad. Cobertura de comunidades mixtecas y atención de accidentes en la autopista Oaxaca-México (carretera 190).",
    tiempoRespuesta: "5-10 minutos ciudad",
    caracteristicasEspeciales: ["Zona sísmica", "Carretera 190", "Comunidades mixtecas", "Capital regional"]
  },
  {
    nombre: "Estación de Bomberos Tlaxiaco",
    slug: "estacion-bomberos-tlaxiaco",
    direccion: "Calle Porfirio Díaz 12, Centro, Heroica Ciudad de Tlaxiaco, Oax.",
    coordenadas: { lat: 17.2725, lng: -97.6794 },
    telefono: "(953) 552-0044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Incendios forestales",
      "Apoyo comunidades rurales"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Ambulancia",
      "Equipo forestal"
    ],
    personal: 12,
    copiasActa: true,
    zona: "Mixteca",
    municipiosCubiertos: ["Heroica Ciudad de Tlaxiaco", "Chalcatongo de Hidalgo", "Santa María Yucuhiti"],
    descripcion: "Cobertura de la Mixteca Alta, región de comunidades triquis y mixtecas. Apoyo en incendios forestales de temporada seca y emergencias en comunidades de difícil acceso.",
    tiempoRespuesta: "10-20 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Mixteca Alta", "Comunidades triquis", "Incendios forestales", "Zona montañosa"]
  },
  // ═══ AEROPUERTOS ═══
  {
    nombre: "Estación de Bomberos Aeropuerto Oaxaca",
    slug: "estacion-bomberos-aeropuerto-oaxaca",
    direccion: "Aeropuerto Internacional de Oaxaca, Xoxocotlán, Oax.",
    coordenadas: { lat: 17.0008, lng: -96.7261 },
    telefono: "(951) 511-5044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Rescate y extinción aeronáutica (SSEI)",
      "Combate de incendios aeronaves",
      "Rescate pasajeros",
      "Emergencias pista",
      "Derrames combustible aviación"
    ],
    equipamiento: [
      "2 Vehículos ARFF categoría 7",
      "1 Autobomba apoyo",
      "Espuma AFFF",
      "Escaleras aeronáuticas"
    ],
    personal: 24,
    copiasActa: false,
    zona: "Valles Centrales",
    municipiosCubiertos: ["Aeropuerto OAX"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Oaxaca Xoxocotlán. Categoría 7 OACI con capacidad de respuesta para aeronaves de fuselaje ancho.",
    tiempoRespuesta: "3 minutos cualquier punto de pista",
    caracteristicasEspeciales: ["SSEI aeronáutico", "Categoría 7 OACI", "1.2M pasajeros anuales"]
  }
];
function getEstacionesPorZona(zona) {
  return estacionesOaxaca.filter((e) => e.zona === zona);
}
function getEstacionesCosteras() {
  return estacionesOaxaca.filter(
    (e) => e.zona === "Costa Oaxaqueña" || e.servicios.some((s) => s.toLowerCase().includes("acuático"))
  );
}
function getEstacionesHAZMAT() {
  return estacionesOaxaca.filter(
    (e) => e.servicios.some((s) => s.toLowerCase().includes("hazmat"))
  );
}
function getEstacionesUNESCO() {
  return estacionesOaxaca.filter(
    (e) => e.descripcion?.toLowerCase().includes("unesco") || e.descripcion?.toLowerCase().includes("monte albán") || e.descripcion?.toLowerCase().includes("patrimonio")
  );
}
function generarSchemaEstacion(estacion) {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressRegion": "Oaxaca",
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": estacion.municipiosCubiertos?.join(", ")
  };
}
function generarInterlinking() {
  return {
    estados: OAXACA_SEO.interlinking.estadosVecinos,
    productos: OAXACA_SEO.interlinking.productosRelacionados
  };
}
function getAlertasActivas(zona) {
  const alertasActivas = [];
  for (const [, alerta] of Object.entries(ALERTAS_OAXACA)) {
    if (alerta.activa()) {
      if (!zona || alerta.zonas.includes(zona) || alerta.zonas.includes("Todo el estado")) {
        alertasActivas.push({
          mensaje: alerta.mensaje,
          tipo: alerta.tipo,
          icono: alerta.icono
        });
      }
    }
  }
  return alertasActivas;
}

export { CONTEXTO_OAXACA as C, FAQ_OAXACA as F, INFRAESTRUCTURA_OAXACA as I, OAXACA_SEO as O, ZONAS_OAXACA as Z, getAlertasActivas as a, generarInterlinking as b, getEstacionesCosteras as c, getEstacionesHAZMAT as d, estacionesOaxaca as e, getEstacionesUNESCO as f, generarSchemaEstacion as g, getEstacionesPorZona as h };
