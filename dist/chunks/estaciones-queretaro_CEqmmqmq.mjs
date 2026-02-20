const estacionesQueretaro = [
  // ═══ CENTRO HISTÓRICO Y ZONA METROPOLITANA ═══
  {
    nombre: "Estación Central Querétaro",
    nombreCorto: "Est. Central Querétaro",
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
    ciudad: "Santiago de Querétaro Centro",
    municipio: "Santiago de Querétaro Centro",
    municipiosCubiertos: ["Santiago de Querétaro Centro", "Barrios históricos", "Zona de monumentos"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de Querétaro. Cobertura del Centro Histórico declarado Patrimonio de la Humanidad UNESCO en 1996, incluyendo el icónico Acueducto de 74 arcos, templos barrocos y edificios coloniales. Centro de despacho y coordinación estatal.",
    tiempoRespuesta: "4-6 minutos zona centro",
    sitioWeb: "https://queretaro.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosQueretaro",
    caracteristicasEspeciales: ["Centro Histórico UNESCO 1996", "Acueducto 74 arcos", "Coordinación estatal", "Escalera 42m"]
  },
  {
    nombre: "Estación de Bomberos Querétaro Norte",
    nombreCorto: "Est. Querétaro Norte",
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
    ciudad: "Querétaro Norte",
    municipio: "Querétaro Norte",
    municipiosCubiertos: ["Querétaro Norte", "San Pablo", "Cimatario", "Zona comercial norte"],
    descripcion: "Cobertura de la zona norte de la ciudad, incluyendo desarrollos residenciales de alta densidad, plazas comerciales (Antea, Paseo Querétaro) y acceso a la autopista México-Querétaro.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Plazas comerciales", "Zona residencial", "Acceso autopista 57D"]
  },
  {
    nombre: "Estación de Bomberos Querétaro Sur",
    nombreCorto: "Est. Querétaro Sur",
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
    ciudad: "Querétaro Sur",
    municipio: "Querétaro Sur",
    municipiosCubiertos: ["Querétaro Sur", "Las Américas", "Plaza del Sol"],
    descripcion: "Cobertura de la zona sur de la capital, incluyendo zona comercial de 5 de Febrero, acceso a carretera a San Juan del Río y apoyo a zona industrial básica.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona comercial", "Acceso carretera 57"]
  },
  // ═══ ZONA INDUSTRIAL NORTE - AEROESPACIAL ═══
  {
    nombre: "Estación de Bomberos HAZMAT El Marqués",
    nombreCorto: "Est. HAZMAT El Marqués",
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
    ciudad: "El Marqués",
    municipio: "El Marqués",
    municipiosCubiertos: ["El Marqués", "Parque Industrial El Marqués", "Parque Aeroespacial", "FINSA"],
    descripcion: "Estación especializada HAZMAT para el clúster aeroespacial más importante de México. Cobertura de Bombardier, Safran, ITP Aero y 200+ empresas aeroespaciales. Capacidad Nivel A para materiales compuestos, resinas epóxicas, combustibles de aviación y químicos especializados de la industria aeronáutica.",
    tiempoRespuesta: "3-5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel A", "Clúster aeroespacial", "Bombardier", "Safran", "Materiales compuestos"]
  },
  {
    nombre: "Estación de Bomberos Parque Aeroespacial",
    nombreCorto: "Est. Parque Aeroespacial",
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
    ciudad: "Parque Aeroespacial Querétaro",
    municipio: "Parque Aeroespacial Querétaro",
    municipiosCubiertos: ["Parque Aeroespacial Querétaro", "Zona MRO", "Colón Industrial"],
    descripcion: "Estación dedicada al Parque Aeroespacial Querétaro, concentración de empresas de manufactura y MRO (Mantenimiento, Reparación y Overhaul) aeronáutico. Especializada en emergencias con materiales compuestos (fibra de carbono, Kevlar), resinas y combustibles de aviación.",
    tiempoRespuesta: "2-4 minutos parque aeroespacial",
    caracteristicasEspeciales: ["Parque Aeroespacial", "MRO aeronáutico", "Materiales compuestos", "ITP Aero", "Airbus Helicopters"]
  },
  // ═══ CORREGIDORA Y JURIQUILLA ═══
  {
    nombre: "Estación de Bomberos Corregidora",
    nombreCorto: "Est. Corregidora",
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
    ciudad: "Corregidora",
    municipio: "Corregidora",
    municipiosCubiertos: ["Corregidora", "El Pueblito", "Candiles", "Real de Juriquilla Sur"],
    descripcion: "Cobertura del municipio de Corregidora, zona residencial de alto crecimiento. Atención de fraccionamientos residenciales, plazas comerciales y zona histórica de El Pueblito.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Zona residencial premium", "El Pueblito histórico", "Alto crecimiento poblacional"]
  },
  {
    nombre: "Estación de Bomberos Juriquilla",
    nombreCorto: "Est. Juriquilla",
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
    ciudad: "Juriquilla",
    municipio: "Juriquilla",
    municipiosCubiertos: ["Juriquilla", "Campus UNAM", "Parque Tecnológico", "Santa Fe Juriquilla"],
    descripcion: "Cobertura de Juriquilla, zona tecnológica y universitaria de Querétaro. Atención de emergencias en Campus UNAM, CIATEQ, CIDESI, empresas de tecnología y fraccionamientos residenciales AAA.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Campus UNAM", "Parques tecnológicos", "CIATEQ", "CIDESI", "Residencial AAA"]
  },
  // ═══ ZONA INDUSTRIAL SUR - SAN JUAN DEL RÍO ═══
  {
    nombre: "Estación Central San Juan del Río",
    nombreCorto: "Est. Central San Juan del Río",
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
    ciudad: "San Juan del Río Centro",
    municipio: "San Juan del Río Centro",
    municipiosCubiertos: ["San Juan del Río Centro", "Zona Industrial SJR", "Autopista 57D tramo sur"],
    descripcion: "Estación principal de San Juan del Río, segunda ciudad del estado. Cobertura de la zona industrial (Mabe, Kellogg's, Tremec), centro histórico y tramo sur de la autopista México-Querétaro. Segunda estación con mayor capacidad del estado.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Segunda ciudad Querétaro", "Zona industrial", "Mabe", "Kellogg's", "Autopista 57D"]
  },
  {
    nombre: "Estación de Bomberos Pedro Escobedo",
    nombreCorto: "Est. Pedro Escobedo",
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
    ciudad: "Pedro Escobedo",
    municipio: "Pedro Escobedo",
    municipiosCubiertos: ["Pedro Escobedo", "La D", "Zona agrícola"],
    descripcion: "Cobertura de Pedro Escobedo, zona agrícola e industrial. Apoyo a la zona industrial sur y atención de emergencias en la carretera 45D Querétaro-Celaya.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Zona agrícola", "Carretera 45D", "Apoyo industrial sur"]
  },
  // ═══ RUTA DEL VINO Y QUESO ═══
  {
    nombre: "Estación de Bomberos Tequisquiapan",
    nombreCorto: "Est. Tequisquiapan",
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
    ciudad: "Tequisquiapan",
    municipio: "Tequisquiapan",
    municipiosCubiertos: ["Tequisquiapan", "Viñedos zona", "Ruta del Vino"],
    descripcion: "Cobertura del Pueblo Mágico de Tequisquiapan, corazón de la Ruta del Vino y Queso de Querétaro. Atención de emergencias en los 35 viñedos, queserías, eventos masivos (Feria del Queso y Vino, Festival del Globo) y turismo.",
    tiempoRespuesta: "5-10 minutos",
    facebook: "https://facebook.com/BomberosTequisquiapan",
    caracteristicasEspeciales: ["Pueblo Mágico 2012", "Ruta del Vino", "Festival del Globo", "Feria Queso y Vino", "35 viñedos"]
  },
  {
    nombre: "Estación de Bomberos Bernal",
    nombreCorto: "Est. Bernal",
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
    ciudad: "Bernal",
    municipio: "Bernal",
    municipiosCubiertos: ["Bernal", "Ezequiel Montes", "Base Peña de Bernal"],
    descripcion: "Estación especializada en rescate vertical para la Peña de Bernal, el tercer monolito más grande del mundo (350m de altura). Atención de emergencias de escaladores, turistas y eventos del equinoccio de primavera (500,000+ visitantes). Cobertura del Pueblo Mágico más visitado de Querétaro.",
    tiempoRespuesta: "5-15 minutos (incluye acceso a Peña)",
    caracteristicasEspeciales: ["Peña de Bernal 350m", "Rescate vertical", "Pueblo Mágico 2005", "Equinoccio primavera", "800,000 visitantes/año"]
  },
  // ═══ SIERRA GORDA ═══
  {
    nombre: "Estación de Bomberos Jalpan de Serra",
    nombreCorto: "Est. Jalpan de Serra",
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
    ciudad: "Jalpan de Serra",
    municipio: "Jalpan de Serra",
    municipiosCubiertos: ["Jalpan de Serra", "Misiones Franciscanas", "Reserva Biósfera Sierra Gorda"],
    descripcion: "Estación especializada en incendios forestales y rescate de montaña para la Reserva de la Biósfera Sierra Gorda (383,567 hectáreas protegidas). Cobertura de las 5 Misiones Franciscanas declaradas Patrimonio UNESCO en 2003 y el Pueblo Mágico de Jalpan.",
    tiempoRespuesta: "10-30 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Reserva Biósfera", "Misiones UNESCO 2003", "Pueblo Mágico 2010", "Incendios forestales", "383,567 ha protegidas"]
  },
  // ═══ AEROPUERTO ═══
  {
    nombre: "Estación de Bomberos Aeropuerto Querétaro",
    nombreCorto: "Est. Aeropuerto Querétaro",
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
    ciudad: "Aeropuerto QRO",
    municipio: "Aeropuerto QRO",
    municipiosCubiertos: ["Aeropuerto QRO", "Hangares MRO", "Zona de carga"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Querétaro. Categoría 8 OACI con capacidad para aeronaves de fuselaje ancho. Cobertura adicional de hangares MRO de Airbus Helicopters y empresas de mantenimiento aeronáutico.",
    tiempoRespuesta: "3 minutos cualquier punto de pista (estándar OACI)",
    caracteristicasEspeciales: ["SSEI Categoría 8 OACI", "1.8M pasajeros anuales", "MRO aeronáutico", "Airbus Helicopters", "Centro carga aérea"]
  },
  // ═══ CARRETERO ═══
  {
    nombre: "Estación de Bomberos Carretero 57D",
    nombreCorto: "Est. Carretero 57D",
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
    ciudad: "Autopista 57D km 150-200",
    municipio: "Autopista 57D km 150-200",
    municipiosCubiertos: ["Autopista 57D km 150-200", "Caseta Palmillas", "Enlace autopistas"],
    descripcion: "Estación dedicada a rescate carretero en la autopista México-Querétaro (57D), la más transitada del país con 100,000+ vehículos diarios. Especializada en accidentes múltiples, volcaduras de tráileres y emergencias con materiales peligrosos en tránsito.",
    tiempoRespuesta: "5-10 minutos tramo asignado",
    caracteristicasEspeciales: ["Autopista más transitada México", "100,000+ vehículos/día", "Rescate carretero pesado", "HAZMAT tránsito"]
  }
];
function getMunicipios() {
  const ciudades = estacionesQueretaro.map((e) => {
    if (e.municipiosCubiertos && e.municipiosCubiertos.length > 0) {
      return e.municipiosCubiertos[0];
    }
    return e.zona || "";
  });
  return [...new Set(ciudades)].filter(Boolean).sort();
}
function getEstacionBySlug(slug) {
  return estacionesQueretaro.find((e) => e.slug === slug);
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismaZona = estacionesQueretaro.filter((e) => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesQueretaro.filter((e) => e.slug !== slug && e.zona !== estacion.zona);
  return [...mismaZona, ...otras].slice(0, limit);
}

export { getEstacionesCercanas as a, getMunicipios as b, estacionesQueretaro as e, getEstacionBySlug as g };
