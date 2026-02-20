const estacionesMorelos = [
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA CUERNAVACA
  // Capital del estado, "Ciudad de la Eterna Primavera"
  // Centro turístico, residencial y comercial más importante
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Cuernavaca",
    nombreCorto: "Est. Central Cuernavaca",
    slug: "estacion-central-cuernavaca",
    direccion: "Av. Emiliano Zapata 600, Col. Centro",
    ciudad: "Cuernavaca",
    municipio: "Cuernavaca",
    estado: "Morelos",
    cp: "62000",
    telefono: "(777) 312-3636",
    telefono2: "(777) 312-4242",
    telefonoEmergencia: "911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y forestales",
      "Rescate urbano especializado USAR",
      "Materiales peligrosos HAZMAT Nivel II",
      "Rescate vehicular autopista México-Cuernavaca",
      "Atención de emergencias en inmuebles históricos",
      "Protección Centro Histórico y Palacio de Cortés",
      "Rescate en barrancas urbanas",
      "Coordinación estatal de emergencias",
      "Academia de formación bomberil",
      "Atención eventos masivos turísticos"
    ],
    coordenadas: { lat: 18.9186, lng: -99.2342 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["HAZMAT", "Rescate Urbano USAR", "Rescate en Barrancas", "Protección Patrimonial"],
    comandancia: "Heroico Cuerpo de Bomberos de Cuernavaca",
    historia: "Fundado en 1943, el Heroico Cuerpo de Bomberos de Cuernavaca es el más antiguo del estado. Protege la 'Ciudad de la Eterna Primavera', destino turístico emblemático con más de 4 millones de visitantes anuales. Especializado en rescate en las múltiples barrancas que atraviesan la ciudad y protección de edificios coloniales como el Palacio de Cortés (1535).",
    cobertura: ["Centro Histórico", "Palacio de Cortés", "Jardín Borda", "Col. Chapultepec", "Col. Vista Hermosa", "Col. Del Bosque", "Acapantzingo"],
    tiempoRespuesta: "4-7 minutos zona centro",
    fundacion: "1943"
  },
  {
    nombre: "Estación de Bomberos Cuernavaca Norte - Tlaltenango",
    nombreCorto: "Est. Cuernavaca Norte - Tla...",
    slug: "estacion-bomberos-cuernavaca-norte",
    direccion: "Blvd. Benito Juárez 1500, Col. Tlaltenango",
    ciudad: "Cuernavaca",
    municipio: "Cuernavaca",
    estado: "Morelos",
    cp: "62170",
    telefono: "(777) 316-5050",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios residenciales y comerciales",
      "Rescate vehicular Autopista del Sol",
      "Atención zona residencial norte",
      "Emergencias centros comerciales",
      "Incendios forestales cerro Tlaltenango",
      "Rescate en barrancas sector norte"
    ],
    coordenadas: { lat: 18.945, lng: -99.2267 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["Rescate Vehicular", "Incendios Forestales"],
    cobertura: ["Tlaltenango", "Col. Buenavista", "Fraccionamiento Delicias", "Plaza Galerías", "Entrada Autopista del Sol"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Cuernavaca Sur - Teopanzolco",
    nombreCorto: "Est. Cuernavaca Sur - Teopa...",
    slug: "estacion-bomberos-cuernavaca-sur",
    direccion: "Av. Teopanzolco 800, Col. Reforma",
    ciudad: "Cuernavaca",
    municipio: "Cuernavaca",
    estado: "Morelos",
    cp: "62260",
    telefono: "(777) 318-2727",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Protección Zona Arqueológica Teopanzolco",
      "Rescate zona residencial sur",
      "Atención carretera federal a Taxco",
      "Emergencias zona comercial sur"
    ],
    coordenadas: { lat: 18.905, lng: -99.22 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["Protección Arqueológica"],
    historia: "Ubicada cerca de la Pirámide de Teopanzolco, esta estación protege uno de los sitios arqueológicos más importantes de Morelos y la zona residencial del sur de Cuernavaca.",
    cobertura: ["Col. Reforma", "Col. Vista Hermosa", "Zona Arqueológica Teopanzolco", "Av. San Diego", "Tabachines"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Temixco",
    nombreCorto: "Est. Temixco",
    slug: "estacion-bomberos-temixco",
    direccion: "Av. Revolución del Sur 250, Centro Temixco",
    ciudad: "Temixco",
    municipio: "Temixco",
    estado: "Morelos",
    cp: "62580",
    telefono: "(777) 325-1818",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias balnearios y parques acuáticos",
      "Rescate acuático (albercas, ríos)",
      "Atención zona residencial conurbada",
      "Incendios forestales barrancas"
    ],
    coordenadas: { lat: 18.85, lng: -99.2333 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["Rescate Acuático", "Emergencias Balnearios"],
    historia: "Temixco es famoso por sus balnearios y spas, incluyendo el icónico Ex-Hacienda de Temixco. Los bomberos atienden numerosas emergencias en parques acuáticos durante temporada alta.",
    cobertura: ["Temixco Centro", "Balnearios", "Ex-Hacienda de Temixco", "Real de Tezoyuca", "Condomios"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA INDUSTRIAL CIVAC - JIUTEPEC
  // Principal zona industrial del estado, manufactura y automotriz
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Zona Industrial CIVAC",
    nombreCorto: "Est. Zona Industrial CIVAC",
    slug: "estacion-bomberos-civac",
    direccion: "Av. de la Industria 1000, Parque Industrial CIVAC",
    ciudad: "Jiutepec",
    municipio: "Jiutepec",
    estado: "Morelos",
    cp: "62578",
    telefono: "(777) 320-4545",
    telefono2: "(777) 320-4646",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales especializados",
      "Materiales peligrosos HAZMAT Nivel III",
      "Respuesta a derrames químicos",
      "Emergencias plantas automotrices",
      "Incendios en bodegas industriales",
      "Rescate en espacios confinados",
      "Coordinación con brigadas industriales",
      "Atención emergencias Nissan/Bridgestone"
    ],
    coordenadas: { lat: 18.88, lng: -99.17 },
    zona: "Zona Industrial CIVAC",
    especialidades: ["HAZMAT Nivel III", "Incendios Industriales", "Espacios Confinados", "Automotriz"],
    comandancia: "Brigada Industrial de Bomberos CIVAC",
    historia: "CIVAC (Ciudad Industrial del Valle de Cuernavaca) es el parque industrial más importante del centro de México, sede de plantas de Nissan, Bridgestone, Roche y más de 150 empresas. Esta estación especializada en emergencias industriales es modelo nacional.",
    cobertura: ["Parque Industrial CIVAC", "Nissan Mexicana", "Bridgestone", "Roche", "Bodegas industriales", "Corredor industrial Jiutepec"],
    tiempoRespuesta: "3-6 minutos zona industrial"
  },
  {
    nombre: "Estación de Bomberos Jiutepec Centro",
    nombreCorto: "Est. Jiutepec Centro",
    slug: "estacion-bomberos-jiutepec",
    direccion: "Calle Morelos 100, Centro Jiutepec",
    ciudad: "Jiutepec",
    municipio: "Jiutepec",
    estado: "Morelos",
    cp: "62550",
    telefono: "(777) 321-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular periférico",
      "Atención zona residencial Jiutepec",
      "Apoyo emergencias industriales CIVAC",
      "Emergencias fraccionamientos"
    ],
    coordenadas: { lat: 18.8833, lng: -99.1833 },
    zona: "Zona Industrial CIVAC",
    especialidades: ["Rescate Vehicular", "Apoyo Industrial"],
    cobertura: ["Jiutepec Centro", "Cliserio Alanís", "Tejalpa", "Fraccionamientos residenciales"],
    tiempoRespuesta: "5-10 minutos"
  },
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // ALTOS DE MORELOS - TEPOZTLÁN
  // Pueblo Mágico, misticismo, ecoturismo y senderismo
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Tepoztlán",
    nombreCorto: "Est. Tepoztlán",
    slug: "estacion-bomberos-tepoztlan",
    direccion: "Av. del Tepozteco 50, Centro Tepoztlán",
    ciudad: "Tepoztlán",
    municipio: "Tepoztlán",
    estado: "Morelos",
    cp: "62520",
    telefono: "(739) 395-0505",
    telefono2: "(739) 395-1111",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate de montaña cerro Tepozteco",
      "Búsqueda y rescate de excursionistas",
      "Incendios forestales Sierra del Tepozteco",
      "Protección Pueblo Mágico",
      "Emergencias turismo masivo fin de semana",
      "Rescate vertical escaladores",
      "Atención Pirámide del Tepozteco",
      "Evacuación por fenómenos naturales"
    ],
    coordenadas: { lat: 18.9853, lng: -99.095 },
    zona: "Altos de Morelos",
    especialidades: ["Rescate de Montaña", "Búsqueda y Rescate", "Incendios Forestales", "Rescate Vertical", "Pueblo Mágico"],
    comandancia: "H. Cuerpo de Bomberos Tepoztlán",
    historia: "Tepoztlán es uno de los Pueblos Mágicos más visitados de México, famoso por su energía mística y el cerro del Tepozteco con su pirámide prehispánica a 600 metros de altura. Los bomberos atienden numerosos rescates de excursionistas cada año y protegen los frágiles ecosistemas de la sierra.",
    cobertura: ["Tepoztlán Centro", "Cerro del Tepozteco", "Pirámide del Tepozteco", "Sierra de Tepoztlán", "Rutas de senderismo", "Amatlán"],
    tiempoRespuesta: "5-20 minutos según ubicación en sierra"
  },
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // VALLE DE CUAUTLA
  // Segunda ciudad más importante, agricultura, historia zapatista, balnearios
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Cuautla",
    nombreCorto: "Est. Central Cuautla",
    slug: "estacion-central-cuautla",
    direccion: "Av. Insurgentes 1200, Col. Centro",
    ciudad: "Cuautla",
    municipio: "Cuautla",
    estado: "Morelos",
    cp: "62740",
    telefono: "(735) 352-2424",
    telefono2: "(735) 352-3535",
    telefonoEmergencia: "911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y agrícolas",
      "Rescate vehicular carretera federal 115",
      "Emergencias balnearios y aguas termales",
      "Materiales peligrosos agroquímicos",
      "Incendios campos agrícolas",
      "Protección patrimonio histórico zapatista",
      "Coordinación oriente de Morelos",
      "Atención eventos masivos feria de Cuautla"
    ],
    coordenadas: { lat: 18.8167, lng: -98.95 },
    zona: "Valle de Cuautla",
    especialidades: ["HAZMAT Agroquímicos", "Incendios Agrícolas", "Rescate Vehicular", "Rescate Acuático"],
    comandancia: "H. Cuerpo de Bomberos de Cuautla",
    historia: "Cuautla es cuna de la Revolución del Sur y ciudad heroica donde Emiliano Zapata resistió el Sitio de Cuautla en 1812. La ciudad es famosa por sus aguas termales y balnearios. El cuerpo de bomberos atiende la segunda zona urbana más importante del estado.",
    cobertura: ["Cuautla Centro", "Balneario Agua Hedionda", "Balneario El Almeal", "Casasano", "Peña Flores", "Zona agrícola oriente"],
    tiempoRespuesta: "5-10 minutos zona urbana",
    fundacion: "1958"
  },
  {
    nombre: "Estación de Bomberos Cuautla Oriente - Oaxtepec",
    nombreCorto: "Est. Cuautla Oriente - Oaxt...",
    slug: "estacion-bomberos-oaxtepec",
    direccion: "Av. del Trabajo s/n, Oaxtepec Centro",
    ciudad: "Oaxtepec",
    municipio: "Oaxtepec",
    estado: "Morelos",
    cp: "62738",
    telefono: "(735) 356-1515",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias parque acuático Oaxtepec",
      "Rescate acuático albercas y toboganes",
      "Atención masiva turismo familiar",
      "Emergencias Centro Vacacional IMSS",
      "Incendios zona hotelera"
    ],
    coordenadas: { lat: 18.8972, lng: -98.9667 },
    zona: "Valle de Cuautla",
    especialidades: ["Rescate Acuático", "Eventos Masivos", "Emergencias Parques Acuáticos"],
    historia: "Oaxtepec alberga el famoso Centro Vacacional del IMSS, el parque acuático más grande de América Latina con más de 50 hectáreas. Los bomberos están especializados en emergencias acuáticas y manejo de multitudes.",
    cobertura: ["Oaxtepec Centro", "Centro Vacacional IMSS", "Parque Acuático", "Six Flags Hurricane Harbor", "Zona hotelera"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Yautepec",
    nombreCorto: "Est. Yautepec",
    slug: "estacion-bomberos-yautepec",
    direccion: "Av. Oaxtepec 300, Centro Yautepec",
    ciudad: "Yautepec",
    municipio: "Yautepec",
    estado: "Morelos",
    cp: "62730",
    telefono: "(735) 394-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias balnearios locales",
      "Rescate fluvial Río Yautepec",
      "Incendios campos de caña",
      "Atención zona agrícola"
    ],
    coordenadas: { lat: 18.8833, lng: -99.0667 },
    zona: "Valle de Cuautla",
    especialidades: ["Rescate Fluvial", "Incendios Agrícolas"],
    cobertura: ["Yautepec Centro", "Balnearios", "Itzamatitlán", "Zona cañera"],
    tiempoRespuesta: "5-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Axochiapan",
    nombreCorto: "Est. Axochiapan",
    slug: "estacion-bomberos-axochiapan",
    direccion: "Calle Guerrero 50, Centro Axochiapan",
    ciudad: "Axochiapan",
    municipio: "Axochiapan",
    estado: "Morelos",
    cp: "62950",
    telefono: "(769) 351-0808",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias zona limítrofe Puebla",
      "Incendios campos agrícolas",
      "Rescate carretero federal",
      "Atención comunidades rurales"
    ],
    coordenadas: { lat: 18.5, lng: -98.75 },
    zona: "Valle de Cuautla",
    especialidades: ["Incendios Agrícolas", "Rescate Carretero"],
    cobertura: ["Axochiapan", "Tepalcingo", "Frontera con Puebla", "Zona rural oriente"],
    tiempoRespuesta: "5-15 minutos"
  },
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // HACIENDAS DEL SUR - JOJUTLA
  // Cañaverales, haciendas históricas azucareras, patrimonio colonial
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Jojutla",
    nombreCorto: "Est. Jojutla",
    slug: "estacion-bomberos-jojutla",
    direccion: "Calle Juárez 200, Centro Jojutla",
    ciudad: "Jojutla",
    municipio: "Jojutla",
    estado: "Morelos",
    cp: "62900",
    telefono: "(734) 343-1212",
    telefono2: "(734) 343-1313",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y agrícolas",
      "Rescate fluvial Río Amacuzac",
      "Incendios campos de caña de azúcar",
      "Emergencias Ingenio azucarero",
      "Protección haciendas históricas",
      "Rescate carretero sur de Morelos",
      "Coordinación sur del estado"
    ],
    coordenadas: { lat: 18.6167, lng: -99.1833 },
    zona: "Haciendas del Sur",
    especialidades: ["Incendios Agrícolas", "Rescate Fluvial", "Emergencias Industriales Azucareras"],
    comandancia: "H. Cuerpo de Bomberos de Jojutla",
    historia: "Jojutla es corazón de la zona cañera de Morelos, con haciendas azucareras que datan de la época colonial. La región fue escenario clave de la Revolución Zapatista. Severamente afectada por el sismo de 2017, la estación fue reconstruida y modernizada.",
    cobertura: ["Jojutla Centro", "Ingenio Emiliano Zapata", "Tlatenchi", "Higuerón", "Zona cañera sur"],
    tiempoRespuesta: "5-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Zacatepec",
    nombreCorto: "Est. Zacatepec",
    slug: "estacion-bomberos-zacatepec",
    direccion: "Av. Emiliano Zapata 400, Centro Zacatepec",
    ciudad: "Zacatepec de Hidalgo",
    municipio: "Zacatepec de Hidalgo",
    estado: "Morelos",
    cp: "62780",
    telefono: "(734) 345-2525",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias Ingenio de Zacatepec",
      "Incendios campos cañeros",
      "Rescate deportivo (Estadio Agustín Coruco Díaz)",
      "Atención zona conurbada Jojutla"
    ],
    coordenadas: { lat: 18.65, lng: -99.2 },
    zona: "Haciendas del Sur",
    especialidades: ["Emergencias Industriales", "Incendios Agrícolas"],
    historia: "Zacatepec es sede del histórico Ingenio Emiliano Zapata y del equipo de fútbol Club Zacatepec, uno de los más antiguos de México. Los bomberos atienden emergencias tanto industriales como deportivas.",
    cobertura: ["Zacatepec Centro", "Ingenio de Zacatepec", "Estadio Coruco Díaz", "Galeana", "Campo cañero"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Puente de Ixtla",
    nombreCorto: "Est. Puente de Ixtla",
    slug: "estacion-bomberos-puente-ixtla",
    direccion: "Calle Hidalgo 150, Centro Puente de Ixtla",
    ciudad: "Puente de Ixtla",
    municipio: "Puente de Ixtla",
    estado: "Morelos",
    cp: "62660",
    telefono: "(734) 341-0909",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate fluvial Río Chalma",
      "Emergencias zona arqueológica Xochicalco acceso",
      "Incendios forestales cerros sur",
      "Atención comunidades rurales"
    ],
    coordenadas: { lat: 18.6167, lng: -99.3167 },
    zona: "Haciendas del Sur",
    especialidades: ["Rescate Fluvial", "Incendios Forestales"],
    cobertura: ["Puente de Ixtla", "Tilzapotla", "Acceso Xochicalco", "Amacuzac norte"],
    tiempoRespuesta: "5-15 minutos"
  },
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // CORREDOR NORTE - CONEXIÓN CDMX
  // Alta densidad de tráfico, accesos desde la capital
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Xochitepec - Acceso Sur CDMX",
    nombreCorto: "Est. Xochitepec - Acceso Su...",
    slug: "estacion-bomberos-xochitepec",
    direccion: "Autopista México-Acapulco Km 85, Xochitepec",
    ciudad: "Xochitepec",
    municipio: "Xochitepec",
    estado: "Morelos",
    cp: "62790",
    telefono: "(777) 361-4141",
    telefono2: "(777) 361-4242",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular Autopista del Sol",
      "Atención accidentes múltiples carreteros",
      "Emergencias casetas de cobro",
      "Coordinación con servicios de CDMX",
      "Rescate zona boscosa Chalma"
    ],
    coordenadas: { lat: 18.7833, lng: -99.2333 },
    zona: "Corredor Norte CDMX",
    especialidades: ["Rescate Vehicular Carretero", "Accidentes Múltiples", "Coordinación Interestatal"],
    historia: "Ubicada estratégicamente en el corredor más transitado de Morelos, esta estación atiende los frecuentes accidentes en la Autopista del Sol, una de las más transitadas del país con más de 40 millones de vehículos anuales.",
    cobertura: ["Autopista México-Acapulco Km 80-95", "Caseta Xochitepec", "Alpuyeca", "Atlacholoaya"],
    tiempoRespuesta: "3-8 minutos autopista"
  },
  {
    nombre: "Estación de Bomberos Huitzilac",
    nombreCorto: "Est. Huitzilac",
    slug: "estacion-bomberos-huitzilac",
    direccion: "Carretera Federal México-Cuernavaca Km 55, Huitzilac",
    ciudad: "Huitzilac",
    municipio: "Huitzilac",
    estado: "Morelos",
    cp: "62510",
    telefono: "(777) 319-0606",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios forestales",
      "Rescate carretero zona montañosa",
      "Emergencias Lagunas de Zempoala",
      "Protección Parque Nacional Lagunas de Zempoala",
      "Atención neblina y condiciones climáticas adversas",
      "Rescate zona boscosa pino-encino"
    ],
    coordenadas: { lat: 19.0333, lng: -99.2667 },
    zona: "Corredor Norte CDMX",
    especialidades: ["Incendios Forestales", "Rescate Montaña", "Protección Parque Nacional"],
    historia: "Huitzilac es la puerta norte de Morelos, ubicada a 2,500 metros de altitud en pleno bosque de pino-encino. Protege el Parque Nacional Lagunas de Zempoala y atiende emergencias en la sinuosa carretera federal que cruza la sierra.",
    cobertura: ["Huitzilac Centro", "Parque Nacional Lagunas de Zempoala", "Tres Marías", "Coajomulco", "Carretera Federal 95D"],
    tiempoRespuesta: "5-20 minutos según zona boscosa"
  }
];
function getEstacionesCuernavaca() {
  return estacionesMorelos.filter((e) => e.zona === "Zona Metropolitana Cuernavaca");
}
function getEstacionesHAZMAT() {
  return estacionesMorelos.filter(
    (e) => e.especialidades?.some((esp) => esp.toLowerCase().includes("hazmat"))
  );
}
function getEstacionesCarreteras() {
  return estacionesMorelos.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("vehicular") || esp.toLowerCase().includes("carretero")
    ) || e.servicios.some((s) => s.toLowerCase().includes("autopista"))
  );
}
function getEstacionesTuristicas() {
  return estacionesMorelos.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("acuático") || esp.toLowerCase().includes("pueblo mágico") || esp.toLowerCase().includes("balneario")
    ) || e.servicios.some(
      (s) => s.toLowerCase().includes("balneario") || s.toLowerCase().includes("turismo") || s.toLowerCase().includes("acuático")
    )
  );
}
function getEstacionesMontana() {
  return estacionesMorelos.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("montaña") || esp.toLowerCase().includes("forestal") || esp.toLowerCase().includes("búsqueda")
    )
  );
}
function getMunicipios() {
  return [...new Set(estacionesMorelos.map((e) => e.ciudad))].filter(Boolean).sort();
}
function getEstacionBySlug(slug) {
  return estacionesMorelos.find((e) => e.slug === slug);
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismaZona = estacionesMorelos.filter((e) => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesMorelos.filter((e) => e.slug !== slug && e.zona !== estacion.zona);
  return [...mismaZona, ...otras].slice(0, limit);
}
({
  totalEstaciones: estacionesMorelos.length,
  estacionesCuernavaca: getEstacionesCuernavaca().length,
  estacionesHAZMAT: getEstacionesHAZMAT().length,
  estacionesCarreteras: getEstacionesCarreteras().length,
  estacionesTuristicas: getEstacionesTuristicas().length,
  estacionesMontana: getEstacionesMontana().length});

export { getEstacionesCercanas as a, getMunicipios as b, estacionesMorelos as e, getEstacionBySlug as g };
