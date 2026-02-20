const estacionesOaxaca = [
  // ═══ VALLES CENTRALES ═══
  {
    nombre: "Estación Central Oaxaca de Juárez",
    nombreCorto: "Est. Central Oaxaca de Juárez",
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
    ciudad: "Oaxaca de Juárez",
    municipio: "Oaxaca de Juárez",
    municipiosCubiertos: ["Oaxaca de Juárez", "Santa Lucía del Camino", "San Andrés Huayápam"],
    descripcion: "Estación central del H. Cuerpo de Bomberos de Oaxaca, responsable de la protección del Centro Histórico (Patrimonio UNESCO), la Catedral, el Ex Convento de Santo Domingo y las zonas aledañas. Equipo especializado para estructuras patrimoniales.",
    tiempoRespuesta: "5-8 minutos zona centro",
    facebook: "https://facebook.com/BomberosOaxaca",
    caracteristicasEspeciales: ["Protección Centro Histórico UNESCO", "Equipo patrimonio", "Eventos Guelaguetza y Día de Muertos"]
  },
  {
    nombre: "Estación de Bomberos Santa Cruz Xoxocotlán",
    nombreCorto: "Est. Santa Cruz Xoxocotlán",
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
    ciudad: "Santa Cruz Xoxocotlán",
    municipio: "Santa Cruz Xoxocotlán",
    municipiosCubiertos: ["Santa Cruz Xoxocotlán", "Monte Albán", "Atzompa"],
    descripcion: "Estación estratégica para la protección de la Zona Arqueológica de Monte Albán, Patrimonio de la Humanidad. Primera respuesta ante emergencias en el sitio UNESCO más visitado de Oaxaca.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Cobertura Monte Albán UNESCO", "Rescate arqueológico", "Incendios forestales cerro"]
  },
  {
    nombre: "Estación de Bomberos Tlacolula de Matamoros",
    nombreCorto: "Est. Tlacolula de Matamoros",
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
    ciudad: "Tlacolula",
    municipio: "Tlacolula",
    municipiosCubiertos: ["Tlacolula", "Mitla", "Santa Ana del Valle", "Teotitlán del Valle"],
    descripcion: "Cobertura del Valle de Tlacolula, incluyendo la zona arqueológica de Mitla y las comunidades artesanales zapotecas. Apoyo a eventos del tianguis dominical más grande de Oaxaca.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Protección Mitla", "Tianguis dominical", "Comunidades artesanales"]
  },
  // ═══ COSTA OAXAQUEÑA ═══
  {
    nombre: "Estación de Bomberos Bahías de Huatulco",
    nombreCorto: "Est. Bahías de Huatulco",
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
    ciudad: "Santa María Huatulco",
    municipio: "Santa María Huatulco",
    municipiosCubiertos: ["Santa María Huatulco", "Bahías de Huatulco", "San Agustín"],
    descripcion: "Protección del complejo turístico de las 9 Bahías de Huatulco. Personal con capacitación en rescate acuático y atención bilingüe para turistas internacionales. Coordinación con hoteles y marinas.",
    tiempoRespuesta: "5-12 minutos zona hotelera",
    sitioWeb: "https://huatulco.gob.mx/bomberos",
    caracteristicasEspeciales: ["Rescate acuático", "Atención bilingüe", "9 Bahías protegidas", "Turismo internacional"]
  },
  {
    nombre: "Estación de Bomberos Puerto Escondido",
    nombreCorto: "Est. Puerto Escondido",
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
    ciudad: "San Pedro Mixtepec",
    municipio: "San Pedro Mixtepec",
    municipiosCubiertos: ["San Pedro Mixtepec", "Puerto Escondido", "Puerto Angelito", "Carrizalillo"],
    descripcion: "Especializada en rescate acuático para las playas de alto oleaje de Puerto Escondido, incluyendo Playa Zicatela (Pipeline mexicano). Atención a la comunidad surfer internacional y accidentes en carretera costera.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Rescate surf Zicatela", "Alto oleaje", "Turismo surfer", "Carretera costera"]
  },
  {
    nombre: "Estación de Bomberos Pochutla",
    nombreCorto: "Est. Pochutla",
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
    ciudad: "San Pedro Pochutla",
    municipio: "San Pedro Pochutla",
    municipiosCubiertos: ["San Pedro Pochutla", "Zipolite", "Mazunte", "San Agustinillo"],
    descripcion: "Cobertura de la zona de playas alternativas de la Costa Oaxaqueña: Zipolite, Mazunte y San Agustinillo. Apoyo al Centro Mexicano de la Tortuga y comunidades costeras.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Playas alternativas", "Centro de la Tortuga", "Ecoturismo costero"]
  },
  // ═══ ISTMO DE TEHUANTEPEC ═══
  {
    nombre: "Estación Central Juchitán de Zaragoza",
    nombreCorto: "Est. Central Juchitán de Za...",
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
    ciudad: "Juchitán de Zaragoza",
    municipio: "Juchitán de Zaragoza",
    municipiosCubiertos: ["Juchitán de Zaragoza", "El Espinal", "Asunción Ixtaltepec"],
    descripcion: "Estación principal del Istmo, ciudad que sufrió graves daños en los sismos de 2017. Personal especializado en rescate estructural y evacuaciones. Zona de alta sismicidad.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona sísmica", "Rescate estructural", "Post-sismo 2017", "Vientos tehuanos"]
  },
  {
    nombre: "Estación de Bomberos HAZMAT Salina Cruz",
    nombreCorto: "Est. HAZMAT Salina Cruz",
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
    ciudad: "Salina Cruz",
    municipio: "Salina Cruz",
    municipiosCubiertos: ["Salina Cruz", "Zona Industrial", "Puerto de Salina Cruz"],
    descripcion: "Estación especializada HAZMAT para la Refinería Antonio Dovalí Jaime (330,000 barriles/día) y el Puerto de Salina Cruz. Capacidad de respuesta a emergencias con materiales peligrosos, derrames y explosiones industriales.",
    tiempoRespuesta: "3-5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel III", "Refinería PEMEX", "Puerto industrial", "Corredor interoceánico"]
  },
  {
    nombre: "Estación de Bomberos Tehuantepec",
    nombreCorto: "Est. Tehuantepec",
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
    ciudad: "Santo Domingo Tehuantepec",
    municipio: "Santo Domingo Tehuantepec",
    municipiosCubiertos: ["Santo Domingo Tehuantepec", "San Blas Atempa", "Santa María Mixtequilla"],
    descripcion: "Cobertura de la histórica ciudad de Tehuantepec, paso obligado del corredor transístmico. Apoyo en accidentes de la carretera 190 y emergencias en comunidades zapotecas del Istmo.",
    tiempoRespuesta: "6-12 minutos",
    caracteristicasEspeciales: ["Corredor transístmico", "Comunidades zapotecas", "Vientos tehuanos"]
  },
  // ═══ REGIÓN DEL PAPALOAPAN ═══
  {
    nombre: "Estación Central San Juan Bautista Tuxtepec",
    nombreCorto: "Est. Central San Juan Bauti...",
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
    ciudad: "San Juan Bautista Tuxtepec",
    municipio: "San Juan Bautista Tuxtepec",
    municipiosCubiertos: ["San Juan Bautista Tuxtepec", "San José Chiltepec", "Valle Nacional"],
    descripcion: "Estación principal de la Cuenca del Papaloapan, segunda ciudad más poblada de Oaxaca. Especializada en rescate acuático y atención de inundaciones. Cobertura de ingenios azucareros y agroindustria.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Rescate inundaciones", "Río Papaloapan", "Agroindustria", "Ingenios azucareros"]
  },
  {
    nombre: "Estación de Bomberos Loma Bonita",
    nombreCorto: "Est. Loma Bonita",
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
    ciudad: "Loma Bonita",
    municipio: "Loma Bonita",
    municipiosCubiertos: ["Loma Bonita", "Cosolapa", "Acatlán de Pérez Figueroa"],
    descripcion: "Cobertura de la zona agroindustrial fronteriza con Veracruz. Atención de emergencias en ingenios azucareros y cultivos de piña. Zona susceptible a inundaciones del Papaloapan.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Frontera Veracruz", "Ingenio azucarero", "Zona inundable", "Agroindustria"]
  },
  // ═══ SIERRA NORTE ═══
  {
    nombre: "Estación de Bomberos Ixtlán de Juárez",
    nombreCorto: "Est. Ixtlán de Juárez",
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
    ciudad: "Ixtlán de Juárez",
    municipio: "Ixtlán de Juárez",
    municipiosCubiertos: ["Ixtlán de Juárez", "Capulálpam de Méndez", "Guelatao de Juárez", "Santa Catarina Lachatao"],
    descripcion: "Estación especializada en incendios forestales y rescate de montaña en la Sierra Norte de Oaxaca. Protección de bosques templados de las comunidades zapotecas de la Sierra. Cobertura de Pueblos Mágicos como Capulálpam.",
    tiempoRespuesta: "10-20 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Incendios forestales", "Rescate montaña", "Pueblos Mágicos", "Comunidades indígenas"]
  },
  // ═══ LA MIXTECA ═══
  {
    nombre: "Estación Central Huajuapan de León",
    nombreCorto: "Est. Central Huajuapan de León",
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
    ciudad: "Huajuapan de León",
    municipio: "Huajuapan de León",
    municipiosCubiertos: ["Huajuapan de León", "Asunción Cuyotepeji", "San Andrés Dinicuiti"],
    descripcion: "Estación principal de la región Mixteca, zona de alta sismicidad. Cobertura de comunidades mixtecas y atención de accidentes en la autopista Oaxaca-México (carretera 190).",
    tiempoRespuesta: "5-10 minutos ciudad",
    caracteristicasEspeciales: ["Zona sísmica", "Carretera 190", "Comunidades mixtecas", "Capital regional"]
  },
  {
    nombre: "Estación de Bomberos Tlaxiaco",
    nombreCorto: "Est. Tlaxiaco",
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
    ciudad: "Heroica Ciudad de Tlaxiaco",
    municipio: "Heroica Ciudad de Tlaxiaco",
    municipiosCubiertos: ["Heroica Ciudad de Tlaxiaco", "Chalcatongo de Hidalgo", "Santa María Yucuhiti"],
    descripcion: "Cobertura de la Mixteca Alta, región de comunidades triquis y mixtecas. Apoyo en incendios forestales de temporada seca y emergencias en comunidades de difícil acceso.",
    tiempoRespuesta: "10-20 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Mixteca Alta", "Comunidades triquis", "Incendios forestales", "Zona montañosa"]
  },
  // ═══ AEROPUERTOS ═══
  {
    nombre: "Estación de Bomberos Aeropuerto Oaxaca",
    nombreCorto: "Est. Aeropuerto Oaxaca",
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
    ciudad: "Aeropuerto OAX",
    municipio: "Aeropuerto OAX",
    municipiosCubiertos: ["Aeropuerto OAX"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Oaxaca Xoxocotlán. Categoría 7 OACI con capacidad de respuesta para aeronaves de fuselaje ancho.",
    tiempoRespuesta: "3 minutos cualquier punto de pista",
    caracteristicasEspeciales: ["SSEI aeronáutico", "Categoría 7 OACI", "1.2M pasajeros anuales"]
  }
];
function getMunicipios() {
  const ciudades = estacionesOaxaca.map((e) => {
    if (e.municipiosCubiertos && e.municipiosCubiertos.length > 0) {
      return e.municipiosCubiertos[0];
    }
    return e.zona || "";
  });
  return [...new Set(ciudades)].filter(Boolean).sort();
}
function getEstacionBySlug(slug) {
  return estacionesOaxaca.find((e) => e.slug === slug);
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismaZona = estacionesOaxaca.filter((e) => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesOaxaca.filter((e) => e.slug !== slug && e.zona !== estacion.zona);
  return [...mismaZona, ...otras].slice(0, limit);
}

export { getEstacionesCercanas as a, getMunicipios as b, estacionesOaxaca as e, getEstacionBySlug as g };
