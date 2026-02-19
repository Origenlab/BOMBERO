import type { Estacion } from './types';

/**
 * ╔═══════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  DIRECTORIO DE BOMBEROS - MICHOACÁN DE OCAMPO                                                ║
 * ╠═══════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  "Alma de México" - Cuna de la Independencia                                                  ║
 * ║                                                                                               ║
 * ║  ESTADÍSTICAS:                                                                               ║
 * ║  • 22 Estaciones de Bomberos                                                                  ║
 * ║  • 4.7 millones de habitantes                                                                 ║
 * ║  • 113 municipios                                                                             ║
 * ║  • 58,643 km² de superficie                                                                   ║
 * ║                                                                                               ║
 * ║  ZONAS ESTRATÉGICAS:                                                                         ║
 * ║  • Metropolitana Morelia (Capital UNESCO)                                                     ║
 * ║  • Región Lacustre (Pátzcuaro, Zirahuén)                                                     ║
 * ║  • Tierra Caliente (Apatzingán, Huetamo)                                                     ║
 * ║  • Costa del Pacífico (Lázaro Cárdenas)                                                      ║
 * ║  • Meseta Purépecha (Uruapan, Paracho)                                                       ║
 * ║  • Ciénega de Chapala (Zamora, Jiquilpan)                                                    ║
 * ║  • Oriente (Zitácuaro, Mariposa Monarca)                                                     ║
 * ║                                                                                               ║
 * ║  PATRIMONIO UNESCO:                                                                          ║
 * ║  • Centro Histórico de Morelia (1991)                                                        ║
 * ║  • Reserva Biosfera Mariposa Monarca (2008)                                                  ║
 * ║  • Pirekua - Canto Purépecha (2010)                                                          ║
 * ╚═══════════════════════════════════════════════════════════════════════════════════════════════╝
 */

export const estacionesMichoacan: Estacion[] = [
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA MORELIA
  // Capital del estado, Centro Histórico Patrimonio UNESCO
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Morelia",
    slug: "estacion-central-morelia",
    direccion: "Av. Acueducto 1860, Col. Chapultepec Norte",
    ciudad: "Morelia",
    estado: "Michoacán",
    cp: "58260",
    telefono: "(443) 312-3232",
    telefono2: "(443) 312-6060",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano especializado",
      "Materiales peligrosos HAZMAT Nivel II",
      "Protección Centro Histórico UNESCO",
      "Rescate vehicular avanzado",
      "Atención eventos masivos",
      "Coordinación estatal de emergencias",
      "Academia de formación bomberil"
    ],
    coordenadas: { lat: 19.7014, lng: -101.1842 },
    zona: "Zona Metropolitana Morelia",
    especialidades: ["HAZMAT", "Rescate Urbano", "Protección Patrimonial"],
    comandancia: "H. Cuerpo de Bomberos de Morelia",
    historia: "Fundado en 1954, el Cuerpo de Bomberos de Morelia protege el Centro Histórico declarado Patrimonio de la Humanidad por la UNESCO en 1991. Especializado en protección de edificios coloniales y cantera rosa.",
    cobertura: ["Centro Histórico", "Chapultepec", "Camelinas", "Lomas del Valle", "Ciudad Jardín"],
    tiempoRespuesta: "4-8 minutos zona central"
  },
  {
    nombre: "Estación de Bomberos Morelia Norte",
    slug: "estacion-bomberos-morelia-norte",
    direccion: "Av. Periodismo 2500, Col. Primo Tapia",
    ciudad: "Morelia",
    estado: "Michoacán",
    cp: "58197",
    telefono: "(443) 324-5656",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular periférico norte",
      "Atención colonias populares",
      "Incendios forestales cerro del Punhuato"
    ],
    coordenadas: { lat: 19.7356, lng: -101.1789 },
    zona: "Zona Metropolitana Morelia",
    especialidades: ["Rescate Vehicular", "Incendios Forestales"],
    cobertura: ["Primo Tapia", "Villas del Pedregal", "ISSSTE", "Universidad Michoacana"]
  },
  {
    nombre: "Estación de Bomberos Morelia Sur - Tres Marías",
    slug: "estacion-bomberos-morelia-sur",
    direccion: "Libramiento Sur Km 8, Col. Tres Marías",
    ciudad: "Morelia",
    estado: "Michoacán",
    cp: "58254",
    telefono: "(443) 327-8080",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate carretero autopista Morelia-Pátzcuaro",
      "Atención zona industrial sur",
      "Emergencias centros comerciales"
    ],
    coordenadas: { lat: 19.6589, lng: -101.2156 },
    zona: "Zona Metropolitana Morelia",
    especialidades: ["Rescate Carretero"],
    cobertura: ["Tres Marías", "Altozano", "Zona Industrial", "Libramiento Sur"]
  },
  {
    nombre: "Estación de Bomberos Tarímbaro",
    slug: "estacion-bomberos-tarimbaro",
    direccion: "Av. Principal 150, Centro Tarímbaro",
    ciudad: "Tarímbaro",
    estado: "Michoacán",
    cp: "58880",
    telefono: "(443) 275-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Emergencias zona conurbada norte",
      "Incendios agrícolas"
    ],
    coordenadas: { lat: 19.8000, lng: -101.1500 },
    zona: "Zona Metropolitana Morelia",
    especialidades: ["Incendios Agrícolas"],
    cobertura: ["Tarímbaro", "Fraccionamientos norte", "Zona agrícola periurbana"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // REGIÓN LACUSTRE - PÁTZCUARO
  // Lago de Pátzcuaro, cultura purépecha, Día de Muertos
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Pátzcuaro",
    slug: "estacion-bomberos-patzcuaro",
    direccion: "Calle Libertad 45, Centro Pátzcuaro",
    ciudad: "Pátzcuaro",
    estado: "Michoacán",
    cp: "61600",
    telefono: "(434) 342-1111",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático Lago de Pátzcuaro",
      "Protección Pueblo Mágico",
      "Emergencias Isla de Janitzio",
      "Atención masiva Día de Muertos",
      "Rescate en cerros circundantes"
    ],
    coordenadas: { lat: 19.5156, lng: -101.6083 },
    zona: "Región Lacustre",
    especialidades: ["Rescate Acuático", "Eventos Masivos", "Pueblo Mágico"],
    historia: "Pátzcuaro es corazón del Día de Muertos en México, recibiendo miles de visitantes cada noviembre. El cuerpo de bomberos maneja emergencias en el lago y la tradicional celebración en Janitzio.",
    cobertura: ["Pátzcuaro Centro", "Isla de Janitzio", "Tzintzuntzan", "Ribera del Lago"],
    tiempoRespuesta: "5-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Quiroga",
    slug: "estacion-bomberos-quiroga",
    direccion: "Calle Vasco de Quiroga 88, Centro",
    ciudad: "Quiroga",
    estado: "Michoacán",
    cp: "61440",
    telefono: "(434) 154-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate lacustre zona norte",
      "Atención artesanos de madera",
      "Emergencias carretera Morelia-Quiroga"
    ],
    coordenadas: { lat: 19.6667, lng: -101.5167 },
    zona: "Región Lacustre",
    especialidades: ["Rescate Lacustre"],
    cobertura: ["Quiroga", "Santa Fe de la Laguna", "Tzintzuntzan norte"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // MESETA PURÉPECHA - URUAPAN
  // Capital mundial del aguacate, cascada Tzararacua
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Uruapan",
    slug: "estacion-central-uruapan",
    direccion: "Av. Latinoamericana 500, Col. Ramón Farías",
    ciudad: "Uruapan",
    estado: "Michoacán",
    cp: "60050",
    telefono: "(452) 524-5252",
    telefono2: "(452) 524-6767",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales e industriales",
      "Emergencias industria aguacatera",
      "Rescate en Parque Nacional Barranca del Cupatitzio",
      "Materiales peligrosos empacadoras",
      "Rescate vehicular carreteras serranas",
      "Incendios forestales zona boscosa"
    ],
    coordenadas: { lat: 19.4117, lng: -102.0528 },
    zona: "Meseta Purépecha",
    especialidades: ["HAZMAT", "Incendios Forestales", "Industria Aguacatera"],
    historia: "Uruapan es la 'Capital Mundial del Aguacate', con más de 100 empacadoras y huertas. Los bomberos están especializados en emergencias agroindustriales y protección de bosques de pino-encino.",
    cobertura: ["Uruapan Centro", "Zona Industrial", "Parque Nacional", "Huertas aguacateras"],
    tiempoRespuesta: "5-10 minutos zona urbana"
  },
  {
    nombre: "Estación de Bomberos Paracho",
    slug: "estacion-bomberos-paracho",
    direccion: "Calle Morelos 55, Centro Paracho",
    ciudad: "Paracho de Verduzco",
    estado: "Michoacán",
    cp: "60250",
    telefono: "(423) 525-1515",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias talleres de guitarras",
      "Incendios forestales sierra",
      "Rescate comunidades purépechas"
    ],
    coordenadas: { lat: 19.6500, lng: -102.0500 },
    zona: "Meseta Purépecha",
    especialidades: ["Incendios Forestales", "Artesanal"],
    historia: "Paracho es famoso mundialmente por la fabricación artesanal de guitarras y otros instrumentos de cuerda. Los bomberos protegen cientos de talleres de laudería.",
    cobertura: ["Paracho", "Cherán", "Nahuatzen", "Comunidades purépechas"]
  },
  {
    nombre: "Estación de Bomberos Tancítaro",
    slug: "estacion-bomberos-tancitaro",
    direccion: "Av. Constitución 100, Centro Tancítaro",
    ciudad: "Tancítaro",
    estado: "Michoacán",
    cp: "60470",
    telefono: "(452) 597-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias huertas de aguacate",
      "Incendios forestales Pico de Tancítaro",
      "Rescate zonas montañosas"
    ],
    coordenadas: { lat: 19.3500, lng: -102.3667 },
    zona: "Meseta Purépecha",
    especialidades: ["Incendios Forestales", "Rescate Montaña"],
    cobertura: ["Tancítaro", "Pico de Tancítaro", "Zona aguacatera alta"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // COSTA DEL PACÍFICO - LÁZARO CÁRDENAS
  // Puerto industrial más importante del Pacífico mexicano
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Lázaro Cárdenas",
    slug: "estacion-central-lazaro-cardenas",
    direccion: "Av. Lázaro Cárdenas 1500, Col. Centro",
    ciudad: "Lázaro Cárdenas",
    estado: "Michoacán",
    cp: "60950",
    telefono: "(753) 532-1234",
    telefono2: "(753) 532-5678",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales y estructurales",
      "Materiales peligrosos HAZMAT Nivel III",
      "Emergencias portuarias",
      "Incendios en buques y contenedores",
      "Rescate marítimo costero",
      "Emergencias siderúrgica ArcelorMittal",
      "Coordinación con Capitanía de Puerto"
    ],
    coordenadas: { lat: 17.9578, lng: -102.2000 },
    zona: "Costa del Pacífico",
    especialidades: ["HAZMAT", "Emergencias Portuarias", "Industria Siderúrgica"],
    comandancia: "H. Cuerpo de Bomberos de Lázaro Cárdenas",
    historia: "El Puerto de Lázaro Cárdenas es el más importante del Pacífico mexicano, manejando millones de contenedores. La estación está especializada en emergencias portuarias e industriales de alta complejidad.",
    cobertura: ["Puerto de Lázaro Cárdenas", "Zona Industrial", "ArcelorMittal", "Terminal de Contenedores"],
    tiempoRespuesta: "5-10 minutos zona portuaria"
  },
  {
    nombre: "Estación de Bomberos Zona Industrial Las Truchas",
    slug: "estacion-bomberos-las-truchas",
    direccion: "Corredor Industrial Las Truchas Km 5",
    ciudad: "Lázaro Cárdenas",
    estado: "Michoacán",
    cp: "60980",
    telefono: "(753) 533-4545",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios industriales",
      "Emergencias planta siderúrgica",
      "HAZMAT materiales peligrosos",
      "Rescate en altura instalaciones"
    ],
    coordenadas: { lat: 17.9300, lng: -102.2100 },
    zona: "Costa del Pacífico",
    especialidades: ["HAZMAT", "Incendios Industriales", "Rescate Industrial"],
    cobertura: ["Complejo Siderúrgico", "Parque Industrial Las Truchas", "Zona Franca"]
  },
  {
    nombre: "Estación de Bomberos Playa Azul",
    slug: "estacion-bomberos-playa-azul",
    direccion: "Av. Costera s/n, Playa Azul",
    ciudad: "Playa Azul",
    estado: "Michoacán",
    cp: "60982",
    telefono: "(753) 536-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático oceánico",
      "Emergencias zona turística costera",
      "Protocolo huracanes y tormentas"
    ],
    coordenadas: { lat: 17.9833, lng: -102.3500 },
    zona: "Costa del Pacífico",
    especialidades: ["Rescate Acuático", "Emergencias Costeras"],
    cobertura: ["Playa Azul", "La Mira", "Zona costera norte"]
  },
  {
    nombre: "Estación de Bomberos Caleta de Campos",
    slug: "estacion-bomberos-caleta-campos",
    direccion: "Calle Principal s/n, Caleta de Campos",
    ciudad: "Caleta de Campos",
    estado: "Michoacán",
    cp: "60930",
    telefono: "(753) 531-0808",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático",
      "Emergencias comunidades costeras",
      "Atención zona tortugera"
    ],
    coordenadas: { lat: 18.0667, lng: -102.7500 },
    zona: "Costa del Pacífico",
    especialidades: ["Rescate Acuático"],
    cobertura: ["Caleta de Campos", "Coahuayana acceso", "Costa sur Michoacán"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // TIERRA CALIENTE
  // Apatzingán - Centro agrícola, clima tropical
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Apatzingán",
    slug: "estacion-central-apatzingan",
    direccion: "Av. Constitución 800, Col. Centro",
    ciudad: "Apatzingán",
    estado: "Michoacán",
    cp: "60600",
    telefono: "(453) 534-2424",
    telefono2: "(453) 534-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias agrícolas limón/mango",
      "Rescate vehicular carreteras",
      "Incendios en empacadoras de frutas",
      "Emergencias clima extremo (calor)"
    ],
    coordenadas: { lat: 19.0883, lng: -102.3528 },
    zona: "Tierra Caliente",
    especialidades: ["Emergencias Agrícolas", "Incendios Agroindustriales"],
    historia: "Apatzingán es el corazón de Tierra Caliente, principal productor de limón en México. El clima extremo (hasta 45°C) representa un desafío adicional para los bomberos.",
    cobertura: ["Apatzingán Centro", "Valle de Apatzingán", "Zona limonera"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Huetamo",
    slug: "estacion-bomberos-huetamo",
    direccion: "Calle Madero 200, Centro Huetamo",
    ciudad: "Huetamo",
    estado: "Michoacán",
    cp: "61940",
    telefono: "(435) 552-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate fluvial Río Balsas",
      "Emergencias agrícolas",
      "Incendios temporada seca"
    ],
    coordenadas: { lat: 18.6333, lng: -100.9000 },
    zona: "Tierra Caliente",
    especialidades: ["Rescate Fluvial"],
    cobertura: ["Huetamo", "Carácuaro", "Región del Balsas"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // CIÉNEGA DE CHAPALA - ZAMORA
  // Zona agrícola berries, frontera con Jalisco
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Zamora",
    slug: "estacion-central-zamora",
    direccion: "Av. Juárez Sur 500, Col. Centro",
    ciudad: "Zamora de Hidalgo",
    estado: "Michoacán",
    cp: "59600",
    telefono: "(351) 512-1212",
    telefono2: "(351) 512-3434",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales e industriales",
      "Emergencias industria fresera/berries",
      "Rescate vehicular autopista",
      "Materiales peligrosos agroquímicos",
      "Incendios invernaderos"
    ],
    coordenadas: { lat: 19.9833, lng: -102.2833 },
    zona: "Ciénega de Chapala",
    especialidades: ["Incendios Agroindustriales", "HAZMAT Agroquímicos"],
    historia: "Zamora es la capital nacional de la fresa y los berries, con miles de hectáreas de invernaderos. Los bomberos están especializados en emergencias agroindustriales y materiales peligrosos agrícolas.",
    cobertura: ["Zamora Centro", "Zona de invernaderos", "Jacona", "Tangancícuaro"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Jiquilpan",
    slug: "estacion-bomberos-jiquilpan",
    direccion: "Calle Lázaro Cárdenas 80, Centro",
    ciudad: "Jiquilpan de Juárez",
    estado: "Michoacán",
    cp: "59510",
    telefono: "(353) 533-0606",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate zona Ciénega",
      "Emergencias agrícolas",
      "Protección Pueblo Mágico"
    ],
    coordenadas: { lat: 19.9833, lng: -102.7167 },
    zona: "Ciénega de Chapala",
    especialidades: ["Pueblo Mágico"],
    historia: "Cuna del presidente Lázaro Cárdenas y Pueblo Mágico. Importante centro cultural e histórico de la Ciénega.",
    cobertura: ["Jiquilpan", "Sahuayo acceso", "Ciénega de Chapala oeste"]
  },
  {
    nombre: "Estación de Bomberos Sahuayo",
    slug: "estacion-bomberos-sahuayo",
    direccion: "Av. Constitución 350, Centro",
    ciudad: "Sahuayo de Morelos",
    estado: "Michoacán",
    cp: "59050",
    telefono: "(353) 532-1515",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias industria del huarache",
      "Rescate carretero Ciénega",
      "Incendios comerciales"
    ],
    coordenadas: { lat: 20.0500, lng: -102.7333 },
    zona: "Ciénega de Chapala",
    especialidades: ["Incendios Comerciales"],
    historia: "Sahuayo es la capital del huarache en México, con cientos de talleres de calzado artesanal.",
    cobertura: ["Sahuayo", "Venustiano Carranza", "Zona comercial huarachera"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // REGIÓN ORIENTE - ZITÁCUARO
  // Mariposa Monarca, frontera Estado de México
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Zitácuaro",
    slug: "estacion-central-zitacuaro",
    direccion: "Av. Revolución Sur 400, Col. Centro",
    ciudad: "Zitácuaro",
    estado: "Michoacán",
    cp: "61500",
    telefono: "(715) 153-2525",
    telefono2: "(715) 153-3535",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y forestales",
      "Protección Reserva Mariposa Monarca",
      "Rescate en bosques de oyamel",
      "Incendios forestales temporada seca",
      "Emergencias turismo Mariposa Monarca",
      "Rescate carretero zona serrana"
    ],
    coordenadas: { lat: 19.4361, lng: -100.3528 },
    zona: "Región Oriente",
    especialidades: ["Incendios Forestales", "Protección Biosfera", "Patrimonio UNESCO"],
    comandancia: "H. Cuerpo de Bomberos de Zitácuaro",
    historia: "Zitácuaro es puerta de entrada a la Reserva de la Biosfera Mariposa Monarca, Patrimonio UNESCO. Los bomberos protegen los bosques de oyamel donde hibernan millones de mariposas.",
    cobertura: ["Zitácuaro Centro", "Santuarios Mariposa Monarca", "Sierra Oriente", "Angangueo"],
    tiempoRespuesta: "5-15 minutos según zona"
  },
  {
    nombre: "Estación de Bomberos Angangueo",
    slug: "estacion-bomberos-angangueo",
    direccion: "Calle Nacional 50, Centro Angangueo",
    ciudad: "Angangueo",
    estado: "Michoacán",
    cp: "61410",
    telefono: "(715) 156-0404",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios forestales",
      "Protección santuarios Mariposa Monarca",
      "Rescate de montaña",
      "Emergencias turísticas temporada alta"
    ],
    coordenadas: { lat: 19.6222, lng: -100.2833 },
    zona: "Región Oriente",
    especialidades: ["Incendios Forestales", "Rescate Montaña", "Mariposa Monarca"],
    historia: "Pueblo Mágico minero, sede del Santuario El Rosario de la Mariposa Monarca. Recibe miles de visitantes de noviembre a marzo.",
    cobertura: ["Angangueo", "Santuario El Rosario", "Santuario Sierra Chincua", "Ocampo"]
  },

  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  // OTRAS CIUDADES IMPORTANTES
  // ═══════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos La Piedad",
    slug: "estacion-bomberos-la-piedad",
    direccion: "Av. Lázaro Cárdenas 600, Col. Centro",
    ciudad: "La Piedad de Cabadas",
    estado: "Michoacán",
    cp: "59300",
    telefono: "(352) 522-1818",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias industria porcina",
      "Rescate vehicular autopista",
      "Emergencias comerciales"
    ],
    coordenadas: { lat: 20.3500, lng: -102.0333 },
    zona: "Norte de Michoacán",
    especialidades: ["Incendios Industriales"],
    historia: "La Piedad es el principal centro de producción porcina de México, con importantes plantas procesadoras.",
    cobertura: ["La Piedad", "Santa Ana Maya", "Penjamillo", "Zona porcícola"]
  },
  {
    nombre: "Estación de Bomberos Hidalgo",
    slug: "estacion-bomberos-hidalgo-michoacan",
    direccion: "Calle Juárez 120, Centro Ciudad Hidalgo",
    ciudad: "Ciudad Hidalgo",
    estado: "Michoacán",
    cp: "61100",
    telefono: "(786) 154-2727",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias frontera con Estado de México",
      "Rescate carretero",
      "Incendios forestales"
    ],
    coordenadas: { lat: 19.6931, lng: -100.5553 },
    zona: "Región Oriente",
    especialidades: ["Rescate Carretero"],
    cobertura: ["Ciudad Hidalgo", "Tuxpan", "Frontera Edomex"]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// CONFIGURACIÓN SEO PROFESIONAL - MICHOACÁN
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const MICHOACAN_SEO = {
  // Identificación
  estado: "Michoacán",
  nombreOficial: "Michoacán de Ocampo",
  slug: "michoacan",
  codigo: "MICH",
  capital: "Morelia",
  gentilicio: "Michoacano/a",
  lema: "Alma de México",

  // Demografía
  poblacion: "4,748,846",
  superficie: "58,643 km²",
  densidad: "81 hab/km²",
  municipios: 113,
  region: "Occidente",

  // Patrimonio UNESCO (2 sitios + 1 intangible)
  patrimonioUNESCO: [
    {
      nombre: "Centro Histórico de Morelia",
      año: 1991,
      tipo: "Cultural",
      descripcion: "Arquitectura colonial en cantera rosa, acueducto del siglo XVIII"
    },
    {
      nombre: "Reserva de la Biosfera Mariposa Monarca",
      año: 2008,
      tipo: "Natural",
      descripcion: "Santuarios donde hibernan millones de mariposas monarca"
    },
    {
      nombre: "Pirekua - Canto Purépecha",
      año: 2010,
      tipo: "Intangible",
      descripcion: "Tradición musical del pueblo purépecha"
    }
  ],

  // Economía
  economia: {
    pib: "2.1% del PIB nacional",
    industrias: [
      "Agroindustria (aguacate, berries, limón)",
      "Industria siderúrgica (ArcelorMittal)",
      "Puerto marítimo de altura",
      "Turismo cultural y natural",
      "Artesanías (guitarras, lacas, textiles)",
      "Industria porcina",
      "Minería"
    ],
    produccionDestacada: {
      aguacate: "Primer productor mundial",
      fresa: "Primer productor nacional",
      guayaba: "Primer productor nacional",
      limon: "Segundo productor nacional"
    }
  },

  // Turismo
  turismo: {
    visitantesAnuales: "4.2 millones",
    atracciones: [
      "Centro Histórico de Morelia",
      "Lago de Pátzcuaro e Isla Janitzio",
      "Reserva Mariposa Monarca",
      "Volcán Paricutín",
      "Cascada Tzararacua",
      "Parque Nacional Barranca del Cupatitzio",
      "Costa michoacana"
    ],
    pueblosMagicos: [
      { nombre: "Pátzcuaro", atraccion: "Día de Muertos, cultura purépecha" },
      { nombre: "Santa Clara del Cobre", atraccion: "Artesanía en cobre" },
      { nombre: "Tlalpujahua", atraccion: "Esferas navideñas" },
      { nombre: "Angangueo", atraccion: "Mariposa Monarca" },
      { nombre: "Tacámbaro", atraccion: "Historia y naturaleza" },
      { nombre: "Jiquilpan", atraccion: "Cuna de Lázaro Cárdenas" },
      { nombre: "Cuitzeo", atraccion: "Lago y convento agustino" },
      { nombre: "Tzintzuntzan", atraccion: "Zona arqueológica purépecha" }
    ],
    diaDeMuertos: {
      sede: "Pátzcuaro - Janitzio",
      fecha: "1 y 2 de noviembre",
      importancia: "Celebración más tradicional de México",
      visitantes: "Cientos de miles"
    }
  },

  // Riesgos
  riesgos: {
    sismico: "Zona de actividad sísmica moderada-alta (Eje Volcánico Transversal)",
    volcanico: "Volcán Paricutín (inactivo), zona de vulcanismo histórico",
    incendiosForestales: "Alto riesgo en temporada seca (marzo-mayo), bosques de oyamel y pino",
    hidrologico: "Ciclones tropicales en costa, inundaciones en Ciénega",
    industrial: "Puerto Lázaro Cárdenas, siderúrgica, industria química"
  },

  // Infraestructura
  infraestructura: {
    aeropuertos: [
      { nombre: "Aeropuerto Internacional de Morelia", codigo: "MLM", tipo: "Internacional" },
      { nombre: "Aeropuerto de Uruapan", codigo: "UPN", tipo: "Nacional" },
      { nombre: "Aeropuerto de Lázaro Cárdenas", codigo: "LZC", tipo: "Nacional" }
    ],
    puertos: [
      { nombre: "Puerto de Lázaro Cárdenas", tipo: "Altura", importancia: "Principal del Pacífico" }
    ],
    autopistas: [
      "México-Morelia-Guadalajara",
      "Morelia-Pátzcuaro-Uruapan",
      "Morelia-Salamanca (Bajío)",
      "Lázaro Cárdenas-Uruapan"
    ]
  },

  // Teléfonos de emergencia
  emergencias: {
    emergencias: "911",
    bomberosMorelia: "(443) 312-3232",
    bomberosUruapan: "(452) 524-5252",
    bomberosLazaroCardenas: "(753) 532-1234",
    proteccionCivil: "(443) 315-3100",
    cruzRoja: "(443) 314-5100"
  },

  // Keywords SEO
  keywords: {
    principales: [
      "bomberos michoacan",
      "estaciones bomberos morelia",
      "bomberos uruapan",
      "bomberos lazaro cardenas",
      "emergencias michoacan",
      "cuerpo bomberos michoacan"
    ],
    ciudades: [
      "bomberos patzcuaro",
      "bomberos zamora michoacan",
      "bomberos zitacuaro",
      "bomberos apatzingan",
      "bomberos la piedad michoacan"
    ],
    turistico: [
      "bomberos mariposa monarca",
      "emergencias dia de muertos patzcuaro",
      "bomberos centro historico morelia",
      "rescate lago patzcuaro"
    ],
    industrial: [
      "bomberos puerto lazaro cardenas",
      "hazmat michoacan",
      "emergencias arcelormittal",
      "bomberos zona aguacatera uruapan"
    ],
    regional: [
      "bomberos tierra caliente",
      "bomberos meseta purepecha",
      "bomberos cienega chapala michoacan",
      "bomberos costa michoacan"
    ]
  },

  // Meta descripción
  metaDescripcion: "Directorio completo de estaciones de bomberos en Michoacán. 22 estaciones cubriendo Morelia (UNESCO), Uruapan, Lázaro Cárdenas, Pátzcuaro y región Mariposa Monarca. Teléfonos de emergencia, ubicaciones y servicios 24/7.",

  // Open Graph
  ogTitle: "Bomberos Michoacán - Directorio de Estaciones | Morelia, Uruapan, Lázaro Cárdenas",
  ogDescription: "Encuentra la estación de bomberos más cercana en Michoacán. Cobertura en zonas UNESCO, costa del Pacífico, meseta purépecha y reserva Mariposa Monarca. Información verificada 2024."
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// ZONAS GEOGRÁFICAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════

export const ZONAS_MICHOACAN = [
  {
    id: "morelia",
    nombre: "Zona Metropolitana Morelia",
    icono: "🏛️",
    color: "#7c3aed",
    descripcion: "Capital del estado, Centro Histórico Patrimonio UNESCO"
  },
  {
    id: "lacustre",
    nombre: "Región Lacustre",
    icono: "🚣",
    color: "#0891b2",
    descripcion: "Pátzcuaro, Lago de Pátzcuaro, cultura purépecha, Día de Muertos"
  },
  {
    id: "meseta",
    nombre: "Meseta Purépecha",
    icono: "🥑",
    color: "#16a34a",
    descripcion: "Uruapan, capital mundial del aguacate, bosques de pino-encino"
  },
  {
    id: "costa",
    nombre: "Costa del Pacífico",
    icono: "🏭",
    color: "#1e40af",
    descripcion: "Lázaro Cárdenas, puerto industrial, siderúrgica"
  },
  {
    id: "tierracaliente",
    nombre: "Tierra Caliente",
    icono: "🌡️",
    color: "#dc2626",
    descripcion: "Apatzingán, clima tropical, producción de limón"
  },
  {
    id: "cienega",
    nombre: "Ciénega de Chapala",
    icono: "🍓",
    color: "#db2777",
    descripcion: "Zamora, capital de la fresa y berries, frontera con Jalisco"
  },
  {
    id: "oriente",
    nombre: "Región Oriente",
    icono: "🦋",
    color: "#f59e0b",
    descripcion: "Zitácuaro, Reserva Mariposa Monarca UNESCO"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES
// ═══════════════════════════════════════════════════════════════════════════════════════════════

/**
 * Obtiene estaciones por zona
 */
export function getEstacionesPorZona(zona: string): Estacion[] {
  return estacionesMichoacan.filter(e => e.zona === zona);
}

/**
 * Obtiene estaciones de la Zona Metropolitana de Morelia
 */
export function getEstacionesMorelia(): Estacion[] {
  return estacionesMichoacan.filter(e => e.zona === "Zona Metropolitana Morelia");
}

/**
 * Obtiene estaciones de la costa (Lázaro Cárdenas)
 */
export function getEstacionesCosta(): Estacion[] {
  return estacionesMichoacan.filter(e => e.zona === "Costa del Pacífico");
}

/**
 * Obtiene estaciones con especialidad HAZMAT
 */
export function getEstacionesHAZMAT(): Estacion[] {
  return estacionesMichoacan.filter(e =>
    e.especialidades?.some(esp => esp.toLowerCase().includes("hazmat"))
  );
}

/**
 * Obtiene estaciones relacionadas con Mariposa Monarca
 */
export function getEstacionesMariposaMonarca(): Estacion[] {
  return estacionesMichoacan.filter(e =>
    e.zona === "Región Oriente" ||
    e.especialidades?.some(esp =>
      esp.toLowerCase().includes("mariposa") ||
      esp.toLowerCase().includes("biosfera")
    )
  );
}

/**
 * Genera meta tags SEO para una estación
 */
export function generarMetaSEO(estacion: Estacion): { title: string; description: string; keywords: string } {
  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Michoacán`,
    description: `${estacion.nombre} en ${estacion.direccion}. Tel: ${estacion.telefono}. Servicios: ${estacion.servicios.slice(0, 3).join(", ")}. Cobertura: ${estacion.cobertura?.join(", ") || estacion.ciudad}. Atención 24/7.`,
    keywords: `bomberos ${estacion.ciudad.toLowerCase()}, ${estacion.nombre.toLowerCase()}, emergencias ${estacion.ciudad.toLowerCase()}, michoacan, ${estacion.zona?.toLowerCase() || ""}`
  };
}

/**
 * Obtiene contexto geográfico y cultural de una zona
 */
export function getContextoZona(zona: string): { descripcion: string; riesgos: string[]; caracteristicas: string[] } {
  const contextos: Record<string, { descripcion: string; riesgos: string[]; caracteristicas: string[] }> = {
    "Zona Metropolitana Morelia": {
      descripcion: "Capital de Michoacán con Centro Histórico Patrimonio de la Humanidad UNESCO (1991). Arquitectura colonial en cantera rosa, acueducto del siglo XVIII y catedral barroca.",
      riesgos: ["Incendios en edificios históricos", "Sismicidad moderada", "Incendios forestales periféricos"],
      caracteristicas: ["Patrimonio UNESCO", "800,000+ habitantes", "Centro universitario", "Turismo cultural"]
    },
    "Región Lacustre": {
      descripcion: "Corazón de la cultura purépecha y sede del Día de Muertos más tradicional de México. Lago de Pátzcuaro con isla Janitzio y pueblos ribereños.",
      riesgos: ["Rescate acuático lacustre", "Aglomeraciones Día de Muertos", "Incendios forestales"],
      caracteristicas: ["Día de Muertos patrimonio", "Cultura purépecha", "Artesanías", "Turismo masivo noviembre"]
    },
    "Meseta Purépecha": {
      descripcion: "Uruapan es la capital mundial del aguacate con más de 100 empacadoras. Bosques de pino-encino, cascadas y comunidades indígenas.",
      riesgos: ["Incendios forestales", "Emergencias agroindustriales", "HAZMAT agroquímicos"],
      caracteristicas: ["Producción aguacate mundial", "Parque Nacional Cupatitzio", "Guitarras de Paracho"]
    },
    "Costa del Pacífico": {
      descripcion: "Puerto de Lázaro Cárdenas, el más importante del Pacífico mexicano. Siderúrgica ArcelorMittal y zona franca de comercio internacional.",
      riesgos: ["Incendios industriales", "HAZMAT portuario", "Huracanes", "Emergencias marítimas"],
      caracteristicas: ["Puerto de altura", "Siderúrgica", "Zona industrial", "Comercio internacional"]
    },
    "Tierra Caliente": {
      descripcion: "Región de clima tropical extremo (hasta 45°C). Principal productor de limón de México y valle agrícola del Tepalcatepec.",
      riesgos: ["Golpes de calor", "Incendios agrícolas", "Inundaciones temporada lluvias"],
      caracteristicas: ["Producción limón", "Clima extremo", "Agricultura tropical"]
    },
    "Ciénega de Chapala": {
      descripcion: "Zamora es la capital nacional de la fresa y berries. Miles de hectáreas de invernaderos de alta tecnología.",
      riesgos: ["Incendios invernaderos", "HAZMAT agroquímicos", "Emergencias agroindustriales"],
      caracteristicas: ["Producción fresa/berries", "Invernaderos", "Frontera con Jalisco"]
    },
    "Región Oriente": {
      descripcion: "Sede de la Reserva de la Biosfera Mariposa Monarca, Patrimonio UNESCO. Millones de mariposas hibernan en bosques de oyamel de noviembre a marzo.",
      riesgos: ["Incendios forestales críticos", "Protección fauna UNESCO", "Emergencias turísticas temporada alta"],
      caracteristicas: ["Mariposa Monarca UNESCO", "Bosques de oyamel", "Turismo ecológico", "Pueblos Mágicos"]
    }
  };

  return contextos[zona] || {
    descripcion: "Zona de Michoacán con servicios de emergencia especializados.",
    riesgos: ["Incendios estructurales", "Rescate vehicular"],
    caracteristicas: ["Servicio 24/7"]
  };
}

/**
 * Obtiene todos los municipios/ciudades únicos
 */
export function getMunicipios(): string[] {
  return [...new Set(estacionesMichoacan.map(e => e.ciudad))].filter(Boolean).sort() as string[];
}

/**
 * Obtiene estación por slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesMichoacan.find(e => e.slug === slug);
}

/**
 * Obtiene estaciones cercanas (excluyendo la actual)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  // Priorizar misma zona
  const mismaZona = estacionesMichoacan.filter(e => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesMichoacan.filter(e => e.slug !== slug && e.zona !== estacion.zona);
  return [...mismaZona, ...otras].slice(0, limit);
}

// Estadísticas agregadas
export const ESTADISTICAS_MICHOACAN = {
  totalEstaciones: estacionesMichoacan.length,
  totalMunicipios: 113,
  estacionesMorelia: getEstacionesMorelia().length,
  estacionesCosta: getEstacionesCosta().length,
  estacionesHAZMAT: getEstacionesHAZMAT().length,
  estacionesMariposa: getEstacionesMariposaMonarca().length,
  poblacionCubierta: "4,748,846",
  municipiosCubiertos: 30,
  zonasPatrimonioUNESCO: 2
};
