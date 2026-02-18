import type { Estacion } from './types';

/**
 * ╔═══════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  DIRECTORIO DE BOMBEROS - MORELOS                                                                 ║
 * ╠═══════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  "La Ciudad de la Eterna Primavera" - Cuna del Zapatismo                                          ║
 * ║                                                                                                   ║
 * ║  ESTADÍSTICAS CLAVE:                                                                              ║
 * ║  • 16 Estaciones de Bomberos estratégicamente distribuidas                                        ║
 * ║  • 2,044,058 habitantes (2024)                                                                    ║
 * ║  • 36 municipios                                                                                  ║
 * ║  • 4,893 km² de superficie (segundo estado más pequeño)                                           ║
 * ║  • Densidad: 418 hab/km² (cuarto más denso de México)                                             ║
 * ║                                                                                                   ║
 * ║  ZONAS ESTRATÉGICAS DE COBERTURA:                                                                 ║
 * ║  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐  ║
 * ║  │ 🏛️ Zona Metropolitana Cuernavaca     │ Capital estatal, turismo, comercio                  │  ║
 * ║  │ 🏭 Zona Industrial CIVAC             │ Parques industriales, manufactura, automotriz       │  ║
 * ║  │ 🌄 Altos de Morelos                  │ Tepoztlán, misticismo, ecoturismo, senderismo       │  ║
 * ║  │ 🌾 Valle de Cuautla                  │ Agricultura, historia zapatista, balnearios         │  ║
 * ║  │ 🏯 Haciendas del Sur                 │ Jojutla, cañaverales, patrimonio histórico          │  ║
 * ║  │ 🚗 Corredor Norte CDMX               │ Tráfico intenso, conexión con capital del país      │  ║
 * ║  └─────────────────────────────────────────────────────────────────────────────────────────────┘  ║
 * ║                                                                                                   ║
 * ║  PATRIMONIO UNESCO:                                                                               ║
 * ║  • Zona Arqueológica de Xochicalco (1999) - Centro ceremonial prehispánico                       ║
 * ║                                                                                                   ║
 * ║  POSICIÓN ESTRATÉGICA:                                                                            ║
 * ║  • A solo 85 km de Ciudad de México                                                               ║
 * ║  • Destino #1 de fin de semana para capitalinos                                                   ║
 * ║  • Más de 4 millones de visitantes anuales                                                        ║
 * ║  • Clima primaveral todo el año (18-27°C)                                                         ║
 * ╚═══════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

export const estacionesMorelos: Estacion[] = [
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA CUERNAVACA
  // Capital del estado, "Ciudad de la Eterna Primavera"
  // Centro turístico, residencial y comercial más importante
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Cuernavaca",
    slug: "estacion-central-cuernavaca",
    direccion: "Av. Emiliano Zapata 600, Col. Centro",
    ciudad: "Cuernavaca",
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
    slug: "estacion-bomberos-cuernavaca-norte",
    direccion: "Blvd. Benito Juárez 1500, Col. Tlaltenango",
    ciudad: "Cuernavaca",
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
    coordenadas: { lat: 18.9450, lng: -99.2267 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["Rescate Vehicular", "Incendios Forestales"],
    cobertura: ["Tlaltenango", "Col. Buenavista", "Fraccionamiento Delicias", "Plaza Galerías", "Entrada Autopista del Sol"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Cuernavaca Sur - Teopanzolco",
    slug: "estacion-bomberos-cuernavaca-sur",
    direccion: "Av. Teopanzolco 800, Col. Reforma",
    ciudad: "Cuernavaca",
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
    coordenadas: { lat: 18.9050, lng: -99.2200 },
    zona: "Zona Metropolitana Cuernavaca",
    especialidades: ["Protección Arqueológica"],
    historia: "Ubicada cerca de la Pirámide de Teopanzolco, esta estación protege uno de los sitios arqueológicos más importantes de Morelos y la zona residencial del sur de Cuernavaca.",
    cobertura: ["Col. Reforma", "Col. Vista Hermosa", "Zona Arqueológica Teopanzolco", "Av. San Diego", "Tabachines"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Temixco",
    slug: "estacion-bomberos-temixco",
    direccion: "Av. Revolución del Sur 250, Centro Temixco",
    ciudad: "Temixco",
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
    coordenadas: { lat: 18.8500, lng: -99.2333 },
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
    slug: "estacion-bomberos-civac",
    direccion: "Av. de la Industria 1000, Parque Industrial CIVAC",
    ciudad: "Jiutepec",
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
    coordenadas: { lat: 18.8800, lng: -99.1700 },
    zona: "Zona Industrial CIVAC",
    especialidades: ["HAZMAT Nivel III", "Incendios Industriales", "Espacios Confinados", "Automotriz"],
    comandancia: "Brigada Industrial de Bomberos CIVAC",
    historia: "CIVAC (Ciudad Industrial del Valle de Cuernavaca) es el parque industrial más importante del centro de México, sede de plantas de Nissan, Bridgestone, Roche y más de 150 empresas. Esta estación especializada en emergencias industriales es modelo nacional.",
    cobertura: ["Parque Industrial CIVAC", "Nissan Mexicana", "Bridgestone", "Roche", "Bodegas industriales", "Corredor industrial Jiutepec"],
    tiempoRespuesta: "3-6 minutos zona industrial"
  },
  {
    nombre: "Estación de Bomberos Jiutepec Centro",
    slug: "estacion-bomberos-jiutepec",
    direccion: "Calle Morelos 100, Centro Jiutepec",
    ciudad: "Jiutepec",
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
    slug: "estacion-bomberos-tepoztlan",
    direccion: "Av. del Tepozteco 50, Centro Tepoztlán",
    ciudad: "Tepoztlán",
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
    coordenadas: { lat: 18.9853, lng: -99.0950 },
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
    slug: "estacion-central-cuautla",
    direccion: "Av. Insurgentes 1200, Col. Centro",
    ciudad: "Cuautla",
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
    coordenadas: { lat: 18.8167, lng: -98.9500 },
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
    slug: "estacion-bomberos-oaxtepec",
    direccion: "Av. del Trabajo s/n, Oaxtepec Centro",
    ciudad: "Oaxtepec",
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
    slug: "estacion-bomberos-yautepec",
    direccion: "Av. Oaxtepec 300, Centro Yautepec",
    ciudad: "Yautepec",
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
    slug: "estacion-bomberos-axochiapan",
    direccion: "Calle Guerrero 50, Centro Axochiapan",
    ciudad: "Axochiapan",
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
    coordenadas: { lat: 18.5000, lng: -98.7500 },
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
    slug: "estacion-bomberos-jojutla",
    direccion: "Calle Juárez 200, Centro Jojutla",
    ciudad: "Jojutla",
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
    slug: "estacion-bomberos-zacatepec",
    direccion: "Av. Emiliano Zapata 400, Centro Zacatepec",
    ciudad: "Zacatepec de Hidalgo",
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
    coordenadas: { lat: 18.6500, lng: -99.2000 },
    zona: "Haciendas del Sur",
    especialidades: ["Emergencias Industriales", "Incendios Agrícolas"],
    historia: "Zacatepec es sede del histórico Ingenio Emiliano Zapata y del equipo de fútbol Club Zacatepec, uno de los más antiguos de México. Los bomberos atienden emergencias tanto industriales como deportivas.",
    cobertura: ["Zacatepec Centro", "Ingenio de Zacatepec", "Estadio Coruco Díaz", "Galeana", "Campo cañero"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Puente de Ixtla",
    slug: "estacion-bomberos-puente-ixtla",
    direccion: "Calle Hidalgo 150, Centro Puente de Ixtla",
    ciudad: "Puente de Ixtla",
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
    slug: "estacion-bomberos-xochitepec",
    direccion: "Autopista México-Acapulco Km 85, Xochitepec",
    ciudad: "Xochitepec",
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
    slug: "estacion-bomberos-huitzilac",
    direccion: "Carretera Federal México-Cuernavaca Km 55, Huitzilac",
    ciudad: "Huitzilac",
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

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN SEO ULTRA-PROFESIONAL - MORELOS
// Sistema de metadatos optimizado para máximo posicionamiento
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

export const MORELOS_SEO = {
  // ─── Identificación del Estado ───
  estado: "Morelos",
  nombreOficial: "Estado Libre y Soberano de Morelos",
  slug: "morelos",
  codigo: "MOR",
  capital: "Cuernavaca",
  gentilicio: "Morelense",
  lema: "La Tierra del Zapata - Ciudad de la Eterna Primavera",

  // ─── Datos Demográficos y Geográficos ───
  demografia: {
    poblacion: "2,044,058",
    poblacionMetro: "1,200,000 (Zona Metropolitana Cuernavaca)",
    superficie: "4,893 km²",
    densidad: "418 hab/km²",
    posicionDensidad: "4° más denso de México",
    municipios: 36,
    localidades: 1432,
    region: "Centro",
    colindancias: {
      norte: "Ciudad de México y Estado de México",
      sur: "Guerrero",
      este: "Puebla",
      oeste: "Estado de México y Guerrero"
    }
  },

  // ─── Patrimonio UNESCO ───
  patrimonioUNESCO: [
    {
      nombre: "Zona Arqueológica de Xochicalco",
      año: 1999,
      tipo: "Cultural",
      descripcion: "Centro ceremonial fortificado (650-900 d.C.) con la famosa Pirámide de la Serpiente Emplumada",
      importancia: "Sitio de confluencia de culturas mesoamericanas, observatorio astronómico"
    }
  ],

  // ─── Posición Estratégica ───
  posicionEstrategica: {
    distanciaCDMX: "85 km (1 hora)",
    visitantesAnuales: "4.2 millones",
    flujoVehicular: "40+ millones de vehículos anuales en Autopista del Sol",
    importancia: "Principal destino de fin de semana para habitantes de CDMX",
    clima: "Primaveral todo el año (18-27°C)",
    apodos: ["Ciudad de la Eterna Primavera", "La tierra del buen tiempo", "El jardín de México"]
  },

  // ─── Economía ───
  economia: {
    pib: "1.7% del PIB nacional",
    pibPerCapita: "$112,543 MXN",
    crecimiento: "2.8% anual",
    sectores: {
      industria: {
        porcentaje: "35%",
        principales: [
          "Automotriz (Nissan, proveedores Tier 1)",
          "Farmacéutica (Roche, Pfizer proveedores)",
          "Manufactura de autopartes",
          "Industria química",
          "Textil y confección"
        ],
        parquesIndustriales: ["CIVAC", "Cuautla Industrial", "Emiliano Zapata"]
      },
      turismo: {
        porcentaje: "25%",
        tipos: ["Turismo de fin de semana", "Turismo de salud (spas/balnearios)", "Ecoturismo", "Turismo cultural", "Turismo místico"]
      },
      agricultura: {
        porcentaje: "12%",
        productos: ["Caña de azúcar", "Arroz", "Sorgo", "Jitomate", "Plantas ornamentales", "Flores de nochebuena"]
      },
      servicios: {
        porcentaje: "28%",
        tipos: ["Comercio", "Educación superior", "Servicios de salud", "Inmobiliario"]
      }
    }
  },

  // ─── Turismo Detallado ───
  turismo: {
    visitantesAnuales: "4.2 millones",
    derramamaEconomica: "$8,500 millones MXN",
    temporadaAlta: ["Semana Santa", "Puentes festivos", "Fin de año", "Fines de semana todo el año"],
    atracciones: [
      "Palacio de Cortés (1535) - Museo Diego Rivera",
      "Jardín Borda - Jardín imperial de Maximiliano",
      "Catedral de Cuernavaca",
      "Pirámide de Teopanzolco",
      "Zona Arqueológica de Xochicalco (UNESCO)",
      "Parque Nacional Lagunas de Zempoala",
      "Cerro y Pirámide del Tepozteco",
      "Convento de Tepoztlán (s. XVI)",
      "Balnearios y aguas termales de Cuautla",
      "Centro Vacacional Oaxtepec IMSS",
      "Haciendas azucareras coloniales",
      "Ruta de Zapata"
    ],
    pueblosMagicos: [
      {
        nombre: "Tepoztlán",
        designacion: 2002,
        atraccion: "Cerro del Tepozteco, pirámide prehispánica, misticismo, artesanías",
        visitantes: "1.5 millones anuales"
      },
      {
        nombre: "Tlayacapan",
        designacion: 2011,
        atraccion: "Convento agustino (s. XVI), momias, Carnaval de Chinelos",
        visitantes: "350,000 anuales"
      }
    ],
    balnearios: [
      "Agua Hedionda (Cuautla)",
      "El Almeal (Cuautla)",
      "Las Estacas (Tlaltizapán)",
      "Ex-Hacienda de Temixco",
      "Centro Vacacional Oaxtepec"
    ],
    rutasEcoturisticas: [
      "Corredor Biológico Ajusco-Chichinautzin",
      "Parque Nacional Lagunas de Zempoala",
      "Sierra de Tepoztlán",
      "Cañón de Lobos"
    ]
  },

  // ─── Perfil de Riesgos ───
  riesgos: {
    sismico: {
      nivel: "MUY ALTO",
      descripcion: "Zona sísmica activa - afectado severamente por sismos de 2017",
      eventos: ["19/09/2017 (Mw 7.1) - 74 muertos en Morelos, miles de edificios dañados"],
      preparacion: "Protocolos antisísmicos reforzados post-2017"
    },
    volcanico: {
      nivel: "MODERADO",
      descripcion: "Cercanía al Popocatépetl (60 km), caída de ceniza ocasional",
      monitoreo: "Sistema de alerta volcánica CENAPRED"
    },
    hidrologico: {
      nivel: "ALTO",
      descripcion: "Inundaciones en temporada de lluvias, desbordamiento de ríos y barrancas",
      zonas: ["Barrancas urbanas Cuernavaca", "Ríos Yautepec y Amacuzac", "Zonas bajas Jojutla"]
    },
    incendiosForestales: {
      nivel: "ALTO",
      descripcion: "Temporada crítica marzo-mayo en sierras y bosques",
      zonas: ["Sierra de Tepoztlán", "Lagunas de Zempoala", "Cerros de Huitzilac"]
    },
    industrial: {
      nivel: "MODERADO-ALTO",
      descripcion: "Zona industrial CIVAC con plantas químicas y automotrices",
      zonas: ["CIVAC Jiutepec", "Parque Industrial Cuautla"]
    },
    carretero: {
      nivel: "ALTO",
      descripcion: "Alto índice de accidentes en Autopista del Sol",
      estadistica: "200+ accidentes anuales en tramo Cuernavaca"
    }
  },

  // ─── Historia y Cultura ───
  historia: {
    fundacion: "1869 (como estado)",
    nombreOrigen: "En honor a José María Morelos y Pavón",
    periodosPrehispanicos: ["Tlahuicas", "Xochimilcas"],
    hitos: [
      "Xochicalco - Centro ceremonial (650-900 d.C.)",
      "Conquista española (1521)",
      "Fundación haciendas azucareras (s. XVI-XIX)",
      "Sitio de Cuautla (1812) - Morelos vs. realistas",
      "Plan de Ayala (1911) - Emiliano Zapata",
      "Muerte de Zapata en Chinameca (1919)",
      "Sismo de 2017 - reconstrucción"
    ],
    personajesCelebres: [
      "Emiliano Zapata (Anenecuilco, 1879)",
      "José María Morelos (Valladolid, actuó en la región)"
    ]
  },

  // ─── Infraestructura ───
  infraestructura: {
    aeropuertos: [
      {
        nombre: "Aeropuerto Internacional Mariano Matamoros",
        codigo: "CVJ",
        tipo: "Internacional/Carga",
        ubicacion: "Temixco",
        pasajeros: "Principalmente carga y aviación privada"
      }
    ],
    autopistas: [
      {
        nombre: "Autopista del Sol (95D)",
        ruta: "México-Cuernavaca-Acapulco",
        casetas: ["Tlalpan", "Xochitepec", "Alpuyeca"],
        trafico: "40+ millones vehículos/año"
      },
      {
        nombre: "Autopista Siglo XXI",
        ruta: "Cuernavaca-Cuautla"
      },
      {
        nombre: "Autopista La Pera-Cuautla",
        ruta: "México-Cuautla"
      }
    ],
    carreteras: [
      "Federal 95 (México-Acapulco)",
      "Federal 95D (Autopista del Sol)",
      "Federal 115 (Cuautla-Amecameca)",
      "Federal 160 (Cuernavaca-Taxco)"
    ],
    zonasIndustriales: [
      {
        nombre: "CIVAC",
        ubicacion: "Jiutepec",
        empresas: "150+",
        destacadas: ["Nissan Mexicana", "Bridgestone", "Roche", "Syntex"]
      },
      {
        nombre: "Parque Industrial Cuautla",
        ubicacion: "Cuautla"
      }
    ],
    hospitales: [
      "Hospital General de Cuernavaca Dr. José G. Parres",
      "IMSS Hospital General Regional No. 1",
      "Hospital del Niño Morelense",
      "ISSSTE Cuernavaca"
    ]
  },

  // ─── Teléfonos de Emergencia ───
  emergencias: {
    emergencias: "911",
    bomberosCuernavaca: "(777) 312-3636",
    bomberosCuautla: "(735) 352-2424",
    bomberosJojutla: "(734) 343-1212",
    bomberosCIVAC: "(777) 320-4545",
    bomberosTepoztlan: "(739) 395-0505",
    proteccionCivilEstatal: "(777) 100-1100",
    cruzRojaCuernavaca: "(777) 315-3535",
    cruzRojaCuautla: "(735) 352-0202",
    policiaEstatal: "(777) 100-9100",
    angelesVerdes: "078",
    reporteSismico: "800-1135-1135"
  },

  // ─── Keywords SEO Exhaustivas ───
  keywords: {
    principales: [
      "bomberos morelos",
      "estaciones bomberos cuernavaca",
      "bomberos cuautla",
      "emergencias morelos",
      "cuerpo bomberos morelos",
      "bomberos 24 horas morelos",
      "directorio bomberos morelos",
      "telefono bomberos cuernavaca"
    ],
    ciudades: [
      "bomberos cuernavaca",
      "bomberos cuautla morelos",
      "bomberos jiutepec",
      "bomberos temixco",
      "bomberos tepoztlan",
      "bomberos jojutla",
      "bomberos yautepec",
      "bomberos xochitepec",
      "bomberos oaxtepec",
      "bomberos zacatepec"
    ],
    turistico: [
      "emergencias tepoztlan pueblo magico",
      "bomberos cerro tepozteco",
      "rescate tepozteco",
      "emergencias balnearios cuautla",
      "bomberos oaxtepec parque acuatico",
      "emergencias centro vacacional imss",
      "rescate lagunas zempoala",
      "emergencias xochicalco"
    ],
    industrial: [
      "bomberos civac jiutepec",
      "emergencias zona industrial morelos",
      "hazmat morelos",
      "bomberos nissan cuernavaca",
      "emergencias parque industrial",
      "bomberos planta automotriz morelos"
    ],
    carretero: [
      "accidentes autopista del sol",
      "rescate carretero morelos",
      "bomberos autopista mexico cuernavaca",
      "emergencias caseta xochitepec",
      "accidentes carretera cuernavaca"
    ],
    naturaleza: [
      "incendios forestales morelos",
      "bomberos sierra tepoztlan",
      "emergencias lagunas zempoala",
      "rescate montana morelos",
      "incendios huitzilac"
    ],
    servicios: [
      "rescate vehicular morelos",
      "ambulancia morelos",
      "atencion emergencias morelos",
      "numero emergencias cuernavaca",
      "911 morelos"
    ],
    geografico: [
      "bomberos zona centro morelos",
      "bomberos oriente morelos cuautla",
      "bomberos sur morelos jojutla",
      "bomberos norte morelos huitzilac",
      "bomberos corredor cdmx morelos"
    ]
  },

  // ─── Meta Descripción Optimizada ───
  metaDescripcion: "Directorio completo de 16 estaciones de bomberos en Morelos 2024. Cobertura total: Cuernavaca, Cuautla, Tepoztlán, CIVAC, Jojutla. Rescate carretero Autopista del Sol, emergencias balnearios, HAZMAT industrial, rescate de montaña. Teléfonos verificados, ubicaciones GPS y servicios 24/7. A 85 km de CDMX.",

  // ─── Open Graph ───
  ogTitle: "Bomberos Morelos - Directorio Oficial 2024 | Cuernavaca, Cuautla, Tepoztlán",
  ogDescription: "16 estaciones de bomberos en Morelos con cobertura total. Rescate Autopista del Sol, emergencias balnearios, HAZMAT zona industrial CIVAC, rescate en el Tepozteco. Atención 24/7 a 85 km de CDMX.",

  // ─── Schema.org ───
  schemaType: "GovernmentOrganization",
  areaServed: "Estado de Morelos, México"
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// ZONAS GEOGRÁFICAS DETALLADAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

export const ZONAS_MORELOS = [
  {
    id: "cuernavaca",
    nombre: "Zona Metropolitana Cuernavaca",
    icono: "🏛️",
    color: "#7c3aed",
    colorSecundario: "#a78bfa",
    descripcion: "Capital del estado, 'Ciudad de la Eterna Primavera'. Centro histórico con Palacio de Cortés, turismo y comercio.",
    poblacion: "1,200,000 (área metropolitana)",
    municipios: ["Cuernavaca", "Temixco", "Emiliano Zapata", "Xochitepec"],
    riesgos: ["Sismos", "Inundaciones barrancas", "Incendios estructurales históricos"],
    caracteristicas: ["Clima primaveral (22°C promedio)", "Turismo de fin de semana", "Patrimonio colonial", "Alta densidad"]
  },
  {
    id: "civac",
    nombre: "Zona Industrial CIVAC",
    icono: "🏭",
    color: "#1e40af",
    colorSecundario: "#60a5fa",
    descripcion: "Principal parque industrial del centro de México. Nissan, Bridgestone, Roche y 150+ empresas.",
    poblacion: "300,000 (Jiutepec)",
    municipios: ["Jiutepec"],
    riesgos: ["HAZMAT químicos", "Incendios industriales", "Derrames tóxicos", "Emergencias automotrices"],
    caracteristicas: ["150+ empresas", "Industria automotriz", "Farmacéutica", "Brigadas industriales capacitadas"]
  },
  {
    id: "altos",
    nombre: "Altos de Morelos",
    icono: "🌄",
    color: "#16a34a",
    colorSecundario: "#4ade80",
    descripcion: "Zona montañosa con Tepoztlán (Pueblo Mágico), misticismo, ecoturismo y senderismo.",
    poblacion: "50,000",
    municipios: ["Tepoztlán", "Tlalnepantla"],
    riesgos: ["Rescate de montaña", "Incendios forestales", "Excursionistas extraviados", "Caídas escaladores"],
    caracteristicas: ["Cerro del Tepozteco", "Pirámide prehispánica", "Turismo místico", "Artesanías", "1.5M visitantes/año"]
  },
  {
    id: "cuautla",
    nombre: "Valle de Cuautla",
    icono: "♨️",
    color: "#0891b2",
    colorSecundario: "#22d3ee",
    descripcion: "Segunda ciudad del estado. Aguas termales, balnearios, historia zapatista y agricultura.",
    poblacion: "450,000 (zona metropolitana)",
    municipios: ["Cuautla", "Oaxtepec", "Yautepec", "Ayala", "Axochiapan"],
    riesgos: ["Rescate acuático balnearios", "Incendios agrícolas", "HAZMAT agroquímicos", "Aglomeraciones turísticas"],
    caracteristicas: ["Balnearios termales", "Centro Vacacional IMSS", "Cuna del Zapatismo", "Agricultura"]
  },
  {
    id: "sur",
    nombre: "Haciendas del Sur",
    icono: "🏯",
    color: "#ca8a04",
    colorSecundario: "#facc15",
    descripcion: "Zona cañera tradicional. Haciendas azucareras coloniales, ingenios, patrimonio histórico.",
    poblacion: "180,000",
    municipios: ["Jojutla", "Zacatepec", "Tlaquiltenango", "Puente de Ixtla", "Amacuzac"],
    riesgos: ["Incendios campos caña", "Emergencias ingenios", "Inundaciones ríos", "Sismos (muy afectada 2017)"],
    caracteristicas: ["Ingenios azucareros", "Haciendas coloniales", "Zona cañera", "Reconstrucción post-sismo"]
  },
  {
    id: "norte",
    nombre: "Corredor Norte CDMX",
    icono: "🚗",
    color: "#dc2626",
    colorSecundario: "#f87171",
    descripcion: "Entrada a Morelos desde CDMX. Autopista del Sol, bosques de pino, Lagunas de Zempoala.",
    poblacion: "25,000",
    municipios: ["Huitzilac", "Tepoztlán (norte)"],
    riesgos: ["Accidentes carreteros severos", "Incendios forestales", "Neblina y hielo", "Rescate montaña"],
    caracteristicas: ["Autopista más transitada del país", "2,500 msnm", "Parque Nacional Zempoala", "Clima frío"]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES PROFESIONALES
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Obtiene estaciones por zona geográfica
 */
export function getEstacionesPorZona(zonaId: string): Estacion[] {
  const zonaMap: Record<string, string> = {
    cuernavaca: "Zona Metropolitana Cuernavaca",
    civac: "Zona Industrial CIVAC",
    altos: "Altos de Morelos",
    cuautla: "Valle de Cuautla",
    sur: "Haciendas del Sur",
    norte: "Corredor Norte CDMX"
  };
  return estacionesMorelos.filter(e => e.zona === zonaMap[zonaId]);
}

/**
 * Obtiene estaciones de la Zona Metropolitana Cuernavaca
 */
export function getEstacionesCuernavaca(): Estacion[] {
  return estacionesMorelos.filter(e => e.zona === "Zona Metropolitana Cuernavaca");
}

/**
 * Obtiene estaciones con capacidad HAZMAT
 */
export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesMorelos.filter(e =>
    e.especialidades?.some(esp => esp.toLowerCase().includes("hazmat"))
  );
}

/**
 * Obtiene estaciones de rescate carretero (Autopista del Sol)
 */
export function getEstacionesCarreteras(): Estacion[] {
  return estacionesMorelos.filter(e =>
    e.especialidades?.some(esp =>
      esp.toLowerCase().includes("vehicular") ||
      esp.toLowerCase().includes("carretero")
    ) ||
    e.servicios.some(s => s.toLowerCase().includes("autopista"))
  );
}

/**
 * Obtiene estaciones de turismo/balnearios
 */
export function getEstacionesTuristicas(): Estacion[] {
  return estacionesMorelos.filter(e =>
    e.especialidades?.some(esp =>
      esp.toLowerCase().includes("acuático") ||
      esp.toLowerCase().includes("pueblo mágico") ||
      esp.toLowerCase().includes("balneario")
    ) ||
    e.servicios.some(s =>
      s.toLowerCase().includes("balneario") ||
      s.toLowerCase().includes("turismo") ||
      s.toLowerCase().includes("acuático")
    )
  );
}

/**
 * Obtiene estaciones de rescate de montaña
 */
export function getEstacionesMontana(): Estacion[] {
  return estacionesMorelos.filter(e =>
    e.especialidades?.some(esp =>
      esp.toLowerCase().includes("montaña") ||
      esp.toLowerCase().includes("forestal") ||
      esp.toLowerCase().includes("búsqueda")
    )
  );
}

/**
 * Genera meta tags SEO optimizados para una estación
 */
export function generarMetaSEOEstacion(estacion: Estacion): {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
} {
  const serviciosTop = estacion.servicios.slice(0, 3).join(', ');
  const coberturaStr = estacion.cobertura?.slice(0, 4).join(', ') || estacion.ciudad;

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Morelos - Tel: ${estacion.telefono}`,
    description: `${estacion.nombre} en ${estacion.direccion}, ${estacion.ciudad}. Tel: ${estacion.telefono}. Servicios 24/7: ${serviciosTop}. Cobertura: ${coberturaStr}. ${estacion.historia?.slice(0, 100) || ''}`,
    keywords: `bomberos ${estacion.ciudad.toLowerCase()}, ${estacion.nombre.toLowerCase()}, emergencias ${estacion.ciudad.toLowerCase()}, morelos, ${estacion.zona?.toLowerCase() || ''}, ${estacion.especialidades?.join(', ').toLowerCase() || ''}`,
    canonical: `https://bombero.mx/directorio/morelos/${estacion.slug}`
  };
}

/**
 * Obtiene contexto geográfico detallado de una zona
 */
export function getContextoZona(zonaId: string): {
  zona: typeof ZONAS_MORELOS[0];
  estaciones: Estacion[];
  alertas: string[];
  recomendaciones: string[];
} {
  const zona = ZONAS_MORELOS.find(z => z.id === zonaId);
  if (!zona) {
    return {
      zona: ZONAS_MORELOS[0],
      estaciones: [],
      alertas: [],
      recomendaciones: []
    };
  }

  const estaciones = getEstacionesPorZona(zonaId);

  const alertas: string[] = [];
  const recomendaciones: string[] = [];

  // Generar alertas y recomendaciones según la zona
  switch (zonaId) {
    case "cuernavaca":
      alertas.push("Zona sísmica activa - sigue protocolos de evacuación");
      recomendaciones.push("Verifica rutas de evacuación en inmuebles históricos");
      recomendaciones.push("En caso de sismo, aléjate de barrancas y edificios antiguos");
      break;
    case "civac":
      alertas.push("Zona industrial con materiales peligrosos");
      recomendaciones.push("En emergencia industrial, evacúa en dirección contraria al viento");
      recomendaciones.push("Sigue instrucciones de brigadas industriales capacitadas");
      break;
    case "altos":
      alertas.push("Rescate de montaña requiere equipos especializados");
      recomendaciones.push("Registra tu ruta antes de subir al Tepozteco");
      recomendaciones.push("Lleva agua, protección solar y calzado adecuado");
      break;
    case "cuautla":
      alertas.push("Emergencias acuáticas frecuentes en balnearios");
      recomendaciones.push("Supervisa a menores en albercas y toboganes");
      recomendaciones.push("Conoce ubicación de salvavidas y servicios médicos");
      break;
    case "sur":
      alertas.push("Zona severamente afectada por sismo 2017 - infraestructura en reconstrucción");
      recomendaciones.push("Reporta grietas o daños estructurales inmediatamente");
      break;
    case "norte":
      alertas.push("Autopista del Sol: alto índice de accidentes");
      recomendaciones.push("Respeta límites de velocidad, especialmente en curvas");
      recomendaciones.push("En neblina, enciende luces y reduce velocidad");
      break;
  }

  return { zona, estaciones, alertas, recomendaciones };
}

/**
 * Genera Schema.org completo para una estación
 */
export function generarSchemaEstacion(estacion: Estacion): object {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "@id": `https://bombero.mx/directorio/morelos/${estacion.slug}`,
    "name": estacion.nombre,
    "description": estacion.historia || `Estación de bomberos en ${estacion.ciudad}, Morelos. Servicios de emergencia 24/7.`,
    "image": estacion.imagen || "https://bombero.mx/images/estacion-bomberos-morelos.jpg",
    "url": `https://bombero.mx/directorio/morelos/${estacion.slug}`,
    "telephone": estacion.telefono,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Morelos",
      "postalCode": estacion.cp || "",
      "addressCountry": "MX"
    },
    ...(estacion.coordenadas && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": estacion.coordenadas.lat,
        "longitude": estacion.coordenadas.lng
      }
    }),
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": estacion.cobertura?.map(area => ({
      "@type": "Place",
      "name": area
    })) || [{ "@type": "City", "name": estacion.ciudad }],
    "serviceType": estacion.servicios,
    "parentOrganization": {
      "@type": "GovernmentOrganization",
      "name": estacion.comandancia || "Heroico Cuerpo de Bomberos de Morelos",
      "areaServed": "Estado de Morelos, México"
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `tel:${estacion.telefono.replace(/\D/g, '')}`,
        "actionPlatform": ["http://schema.org/TelephoneEntryPoint"]
      }
    }
  };
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// ESTADÍSTICAS AGREGADAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

export const ESTADISTICAS_MORELOS = {
  totalEstaciones: estacionesMorelos.length,
  estacionesCuernavaca: getEstacionesCuernavaca().length,
  estacionesHAZMAT: getEstacionesHAZMAT().length,
  estacionesCarreteras: getEstacionesCarreteras().length,
  estacionesTuristicas: getEstacionesTuristicas().length,
  estacionesMontana: getEstacionesMontana().length,
  poblacionCubierta: "2,044,058",
  superficieCubierta: "4,893 km²",
  municipiosCubiertos: 36,
  zonasOperativas: ZONAS_MORELOS.length,
  patrimoniUNESCO: 1,
  pueblosMagicos: 2,
  distanciaCDMX: "85 km",
  visitantesAnuales: "4.2 millones"
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════════
// EXPORT DEFAULT
// ═══════════════════════════════════════════════════════════════════════════════════════════════════

export default estacionesMorelos;
