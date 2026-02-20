const estacionesJalisco = [
  // ===== ZONA METROPOLITANA DE GUADALAJARA (ZMG) =====
  {
    nombre: "Estación Central de Bomberos Guadalajara",
    nombreCorto: "Est. Central Guadalajara",
    slug: "estacion-central-guadalajara",
    direccion: "Av. Enrique Díaz de León Sur 782, Col. Americana",
    ciudad: "Guadalajara",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44160",
    telefono: "(33) 3619-1515",
    telefono2: "(33) 3619-0294",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano especializado",
      "Materiales peligrosos HAZMAT Nivel III",
      "Rescate vehicular avanzado",
      "Atención de emergencias masivas",
      "Coordinación metropolitana ZMG",
      "Capacitación bomberil estatal"
    ],
    coordenadas: { lat: 20.6683, lng: -103.3621 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["HAZMAT", "Rescate Urbano", "Incidentes Masivos"],
    comandancia: "Cuerpo de Bomberos de Guadalajara",
    historia: "Fundada en 1873, es una de las corporaciones bomberiles más antiguas de México. Pionera en profesionalización y equipamiento del occidente del país.",
    cobertura: ["Centro Histórico", "Zona Americana", "Chapultepec", "Providencia", "Lafayette"],
    tiempoRespuesta: "4-8 minutos en zona central"
  },
  {
    nombre: "Estación de Bomberos Guadalajara Norte - Huentitán",
    nombreCorto: "Est. Guadalajara Norte - Hu...",
    slug: "estacion-bomberos-guadalajara-huentitan",
    direccion: "Calzada Independencia Norte 3500, Col. Huentitán el Bajo",
    ciudad: "Guadalajara",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44390",
    telefono: "(33) 3674-8530",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate en Barranca de Huentitán",
      "Atención emergencias Estadio Jalisco",
      "Rescate acuático Río Santiago",
      "Control de incendios forestales"
    ],
    coordenadas: { lat: 20.7156, lng: -103.3347 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Rescate Vertical", "Incendios Forestales"],
    cobertura: ["Huentitán", "Oblatos", "Tetlán", "Estadio Jalisco", "Zoológico Guadalajara"]
  },
  {
    nombre: "Estación de Bomberos Guadalajara Oriente",
    nombreCorto: "Est. Guadalajara Oriente",
    slug: "estacion-bomberos-guadalajara-oriente",
    direccion: "Av. Revolución 1450, Col. La Perla",
    ciudad: "Guadalajara",
    municipio: "Guadalajara",
    estado: "Jalisco",
    cp: "44360",
    telefono: "(33) 3617-4589",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención emergencias zona industrial Oriente",
      "Primeros auxilios avanzados"
    ],
    coordenadas: { lat: 20.6789, lng: -103.3189 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Rescate Vehicular"],
    cobertura: ["La Perla", "San Juan de Dios", "Mercado Libertad", "Central de Autobuses"]
  },
  {
    nombre: "Estación de Bomberos Zapopan Centro",
    nombreCorto: "Est. Zapopan Centro",
    slug: "estacion-bomberos-zapopan-centro",
    direccion: "Av. Hidalgo 151, Centro Zapopan",
    ciudad: "Zapopan",
    municipio: "Zapopan",
    estado: "Jalisco",
    cp: "45100",
    telefono: "(33) 3818-2267",
    telefono2: "(33) 3833-0911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano y vehicular",
      "Materiales peligrosos",
      "Atención a eventos Basílica de Zapopan",
      "Coordinación emergencias Zapopan"
    ],
    coordenadas: { lat: 20.7215, lng: -103.3942 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Rescate Urbano", "Eventos Masivos"],
    cobertura: ["Centro Zapopan", "Basílica", "Atemajac", "Auditorio Telmex"]
  },
  {
    nombre: "Estación de Bomberos Zapopan Zona Norte",
    nombreCorto: "Est. Zapopan Zona Norte",
    slug: "estacion-bomberos-zapopan-norte",
    direccion: "Av. Acueducto 5200, Col. Real Acueducto",
    ciudad: "Zapopan",
    municipio: "Zapopan",
    estado: "Jalisco",
    cp: "45116",
    telefono: "(33) 3110-2715",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios residenciales y comerciales",
      "Rescate en zonas residenciales de alta gama",
      "Atención emergencias centros comerciales",
      "Control incendios bosque Primavera"
    ],
    coordenadas: { lat: 20.7556, lng: -103.4156 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Incendios Forestales", "Rescate Técnico"],
    cobertura: ["Puerta de Hierro", "Real Acueducto", "Solares", "Andares"]
  },
  {
    nombre: "Estación de Bomberos Tlaquepaque Centro",
    nombreCorto: "Est. Tlaquepaque Centro",
    slug: "estacion-bomberos-tlaquepaque-centro",
    direccion: "Calle Florida 50, Centro San Pedro Tlaquepaque",
    ciudad: "San Pedro Tlaquepaque",
    municipio: "San Pedro Tlaquepaque",
    estado: "Jalisco",
    cp: "45500",
    telefono: "(33) 3657-0112",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención zona turística artesanal",
      "Protección patrimonio cultural"
    ],
    coordenadas: { lat: 20.6408, lng: -103.3119 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Protección Patrimonial"],
    cobertura: ["Centro Histórico Tlaquepaque", "El Parian", "Zona Artesanal", "Las Juntas"]
  },
  {
    nombre: "Estación de Bomberos Tonalá",
    nombreCorto: "Est. Tonalá",
    slug: "estacion-bomberos-tonala",
    direccion: "Av. Tonaltecas 135, Centro Tonalá",
    ciudad: "Tonalá",
    municipio: "Tonalá",
    estado: "Jalisco",
    cp: "45400",
    telefono: "(33) 3683-1915",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención emergencias zona artesanal",
      "Incendios en talleres de cerámica"
    ],
    coordenadas: { lat: 20.6251, lng: -103.2339 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Incendios Industriales Artesanales"],
    cobertura: ["Centro Tonalá", "Tianguis Tonalá", "Zalatitán", "Coyula"]
  },
  {
    nombre: "Estación de Bomberos Tlajomulco de Zúñiga",
    nombreCorto: "Est. Tlajomulco de Zúñiga",
    slug: "estacion-bomberos-tlajomulco",
    direccion: "Carretera Guadalajara-Chapala Km 19, Tlajomulco",
    ciudad: "Tlajomulco de Zúñiga",
    municipio: "Tlajomulco de Zúñiga",
    estado: "Jalisco",
    cp: "45640",
    telefono: "(33) 3686-0228",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular carretera Chapala",
      "Atención fraccionamientos expansión sur",
      "Emergencias zona aeropuerto"
    ],
    coordenadas: { lat: 20.4708, lng: -103.4439 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["Rescate Carretero"],
    cobertura: ["Tlajomulco Centro", "Santa Fe", "El Palomar", "Fraccionamientos Sur"]
  },
  {
    nombre: "Estación de Bomberos Aeropuerto Internacional de Guadalajara",
    nombreCorto: "Est. Aeropuerto Internacion...",
    slug: "estacion-bomberos-aeropuerto-guadalajara",
    direccion: "Aeropuerto Internacional Miguel Hidalgo y Costilla",
    ciudad: "Tlajomulco de Zúñiga",
    municipio: "Tlajomulco de Zúñiga",
    estado: "Jalisco",
    cp: "45659",
    telefono: "(33) 3688-5248",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Rescate y extinción aeronáutico ARFF",
      "Combate incendios aeronaves",
      "Rescate en pistas",
      "Atención emergencias materiales peligrosos aviación",
      "Simulacros aeroportuarios"
    ],
    coordenadas: { lat: 20.5218, lng: -103.3111 },
    zona: "Zona Metropolitana de Guadalajara",
    especialidades: ["ARFF", "Rescate Aeronáutico"],
    comandancia: "Servicios de Emergencia Aeroportuaria",
    cobertura: ["Aeropuerto GDL", "Zonas de aproximación", "Instalaciones aeroportuarias"]
  },
  // ===== ZONA COSTA - PUERTO VALLARTA =====
  {
    nombre: "Estación Central de Bomberos Puerto Vallarta",
    nombreCorto: "Est. Central Puerto Vallarta",
    slug: "estacion-central-puerto-vallarta",
    direccion: "Calle Prisciliano Sánchez 460, Col. Centro",
    ciudad: "Puerto Vallarta",
    municipio: "Puerto Vallarta",
    estado: "Jalisco",
    cp: "48300",
    telefono: "(322) 222-0109",
    telefono2: "(322) 222-1572",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y hoteleros",
      "Rescate acuático oceánico",
      "Atención a turistas emergencias",
      "Materiales peligrosos",
      "Rescate en zonas montañosas",
      "Coordinación temporada huracanes"
    ],
    coordenadas: { lat: 20.6093, lng: -105.2353 },
    zona: "Costa - Puerto Vallarta",
    especialidades: ["Rescate Acuático", "Emergencias Turísticas", "Huracanes"],
    comandancia: "H. Cuerpo de Bomberos de Puerto Vallarta",
    historia: "Fundada para atender el crecimiento turístico de Vallarta, especializada en rescate acuático y atención a visitantes internacionales.",
    cobertura: ["Zona Romántica", "Centro", "Malecón", "Playa Los Muertos", "Zona Hotelera Sur"],
    tiempoRespuesta: "5-10 minutos zona turística"
  },
  {
    nombre: "Estación de Bomberos Puerto Vallarta - Marina",
    nombreCorto: "Est. Puerto Vallarta - Marina",
    slug: "estacion-bomberos-vallarta-marina",
    direccion: "Av. Francisco Medina Ascencio, Zona Hotelera Norte",
    ciudad: "Puerto Vallarta",
    municipio: "Puerto Vallarta",
    estado: "Jalisco",
    cp: "48333",
    telefono: "(322) 221-1234",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios zona hotelera",
      "Rescate acuático Marina Vallarta",
      "Atención emergencias náuticas",
      "Incendios embarcaciones"
    ],
    coordenadas: { lat: 20.6656, lng: -105.2464 },
    zona: "Costa - Puerto Vallarta",
    especialidades: ["Rescate Náutico", "Incendios Marina"],
    cobertura: ["Marina Vallarta", "Zona Hotelera Norte", "Campo de Golf", "Terminal Marítima"]
  },
  {
    nombre: "Estación de Bomberos Nuevo Vallarta",
    nombreCorto: "Est. Nuevo Vallarta",
    slug: "estacion-bomberos-nuevo-vallarta",
    direccion: "Blvd. Nuevo Vallarta, Bahía de Banderas",
    ciudad: "Nuevo Vallarta",
    municipio: "Nuevo Vallarta",
    estado: "Jalisco",
    cp: "63732",
    telefono: "(322) 297-6130",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios resorts",
      "Rescate acuático",
      "Atención emergencias condominios",
      "Parques acuáticos"
    ],
    coordenadas: { lat: 20.7001, lng: -105.2897 },
    zona: "Costa - Puerto Vallarta",
    especialidades: ["Rescate Acuático", "Resorts"],
    cobertura: ["Nuevo Vallarta", "Flamingos", "Bucerías acceso", "Riviera Nayarit sur"]
  },
  // ===== ZONA TEQUILA - VALLES =====
  {
    nombre: "Estación de Bomberos Tequila",
    nombreCorto: "Est. Tequila",
    slug: "estacion-bomberos-tequila",
    direccion: "Calle Ramón Corona 25, Centro Tequila",
    ciudad: "Tequila",
    municipio: "Tequila",
    estado: "Jalisco",
    cp: "46400",
    telefono: "(374) 742-0039",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios destilerías",
      "Emergencias materiales peligrosos alcohol",
      "Rescate zona agavera",
      "Atención turismo Ruta del Tequila",
      "Incendios campos de agave"
    ],
    coordenadas: { lat: 20.8782, lng: -103.8367 },
    zona: "Zona Tequila - Valles",
    especialidades: ["Incendios Destilerías", "HAZMAT Alcohol", "Patrimonio UNESCO"],
    historia: "Especializada en atención de emergencias en destilerías de tequila y protección del Paisaje Agavero, Patrimonio de la Humanidad.",
    cobertura: ["Tequila Centro", "Destilerías", "Paisaje Agavero UNESCO", "Volcán de Tequila"],
    tiempoRespuesta: "5-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Amatitán",
    nombreCorto: "Est. Amatitán",
    slug: "estacion-bomberos-amatitan",
    direccion: "Calle Hidalgo 45, Centro Amatitán",
    ciudad: "Amatitán",
    municipio: "Amatitán",
    estado: "Jalisco",
    cp: "45380",
    telefono: "(374) 745-0118",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios destilerías",
      "Emergencias campos de agave",
      "Rescate vehicular carretera Tequila",
      "Atención Ruta del Tequila"
    ],
    coordenadas: { lat: 20.8333, lng: -103.7333 },
    zona: "Zona Tequila - Valles",
    especialidades: ["Incendios Agroindustriales"],
    cobertura: ["Amatitán", "Destilerías locales", "Carretera Guadalajara-Tequila"]
  },
  // ===== ZONA LAGO DE CHAPALA =====
  {
    nombre: "Estación de Bomberos Chapala",
    nombreCorto: "Est. Chapala",
    slug: "estacion-bomberos-chapala",
    direccion: "Calle Madero 202, Centro Chapala",
    ciudad: "Chapala",
    municipio: "Chapala",
    estado: "Jalisco",
    cp: "45900",
    telefono: "(376) 765-2525",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático Lago de Chapala",
      "Atención comunidad extranjera residente",
      "Emergencias náuticas lago"
    ],
    coordenadas: { lat: 20.2956, lng: -103.1919 },
    zona: "Lago de Chapala",
    especialidades: ["Rescate Acuático Lacustre"],
    historia: "Atiende la ribera del lago de Chapala, hogar de la mayor comunidad de jubilados estadounidenses y canadienses en México.",
    cobertura: ["Chapala Centro", "Ribera del Lago", "Isla de los Alacranes"],
    tiempoRespuesta: "6-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Ajijic",
    nombreCorto: "Est. Ajijic",
    slug: "estacion-bomberos-ajijic",
    direccion: "Carretera Chapala-Jocotepec, Ajijic",
    ciudad: "Ajijic",
    municipio: "Ajijic",
    estado: "Jalisco",
    cp: "45920",
    telefono: "(376) 766-1777",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate en sierra",
      "Atención comunidad expatriada",
      "Emergencias ribera oeste"
    ],
    coordenadas: { lat: 20.2975, lng: -103.2603 },
    zona: "Lago de Chapala",
    especialidades: ["Rescate en Sierra", "Comunidad Internacional"],
    cobertura: ["Ajijic", "San Antonio Tlayacapan", "San Juan Cosalá", "Ribera Oeste"]
  },
  {
    nombre: "Estación de Bomberos Jocotepec",
    nombreCorto: "Est. Jocotepec",
    slug: "estacion-bomberos-jocotepec",
    direccion: "Calle Hidalgo 100, Centro Jocotepec",
    ciudad: "Jocotepec",
    municipio: "Jocotepec",
    estado: "Jalisco",
    cp: "45800",
    telefono: "(387) 763-0808",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático extremo oeste lago",
      "Emergencias agrícolas",
      "Rescate vehicular"
    ],
    coordenadas: { lat: 20.2833, lng: -103.4333 },
    zona: "Lago de Chapala",
    especialidades: ["Rescate Lacustre"],
    cobertura: ["Jocotepec", "Extremo Oeste Lago Chapala", "San Cristóbal Zapotitlán"]
  },
  // ===== ZONA INDUSTRIAL - CORREDOR DEL BAJÍO =====
  {
    nombre: "Estación de Bomberos Lagos de Moreno",
    nombreCorto: "Est. Lagos de Moreno",
    slug: "estacion-bomberos-lagos-moreno",
    direccion: "Calle Miguel Leandro Guerra 156, Centro",
    ciudad: "Lagos de Moreno",
    municipio: "Lagos de Moreno",
    estado: "Jalisco",
    cp: "47400",
    telefono: "(474) 742-1010",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales e industriales",
      "Rescate vehicular autopista León-Lagos",
      "Materiales peligrosos zona industrial",
      "Atención Pueblo Mágico"
    ],
    coordenadas: { lat: 21.3575, lng: -101.9306 },
    zona: "Zona Industrial - Altos de Jalisco",
    especialidades: ["Incendios Industriales", "Rescate Carretero", "Pueblo Mágico"],
    historia: "Pueblo Mágico con importante zona industrial y posición estratégica en el corredor del Bajío.",
    cobertura: ["Lagos de Moreno Centro", "Zona Industrial", "Autopista Guadalajara-León"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Tepatitlán de Morelos",
    nombreCorto: "Est. Tepatitlán de Morelos",
    slug: "estacion-bomberos-tepatitlan",
    direccion: "Calle Morelos 250, Centro Tepatitlán",
    ciudad: "Tepatitlán de Morelos",
    municipio: "Tepatitlán de Morelos",
    estado: "Jalisco",
    cp: "47600",
    telefono: "(378) 782-0400",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias industria avícola y láctea",
      "Rescate vehicular",
      "Incendios agroindustriales"
    ],
    coordenadas: { lat: 20.8167, lng: -102.7667 },
    zona: "Zona Industrial - Altos de Jalisco",
    especialidades: ["Agroindustria", "Industria Alimentaria"],
    cobertura: ["Tepatitlán Centro", "Zona Avícola", "Carretera a San Juan de los Lagos"]
  },
  {
    nombre: "Estación de Bomberos San Juan de los Lagos",
    nombreCorto: "Est. San Juan de los Lagos",
    slug: "estacion-bomberos-san-juan-lagos",
    direccion: "Calle Pedro Moreno 45, Centro",
    ciudad: "San Juan de los Lagos",
    municipio: "San Juan de los Lagos",
    estado: "Jalisco",
    cp: "47000",
    telefono: "(395) 785-0303",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Atención emergencias peregrinos",
      "Eventos religiosos masivos",
      "Rescate en aglomeraciones"
    ],
    coordenadas: { lat: 21.2472, lng: -102.3336 },
    zona: "Zona Industrial - Altos de Jalisco",
    especialidades: ["Eventos Masivos", "Peregrinaciones"],
    historia: "Centro religioso que recibe millones de peregrinos anualmente a la Basílica de la Virgen de San Juan de los Lagos.",
    cobertura: ["San Juan de los Lagos", "Basílica", "Zonas de peregrinos"]
  },
  {
    nombre: "Estación de Bomberos Ocotlán",
    nombreCorto: "Est. Ocotlán",
    slug: "estacion-bomberos-ocotlan",
    direccion: "Calle Hidalgo 340, Centro Ocotlán",
    ciudad: "Ocotlán",
    municipio: "Ocotlán",
    estado: "Jalisco",
    cp: "47800",
    telefono: "(392) 922-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate incendios industriales",
      "Emergencias industria mueblera",
      "Rescate Río Lerma",
      "Materiales peligrosos"
    ],
    coordenadas: { lat: 20.35, lng: -102.7667 },
    zona: "Zona Industrial - Ciénega",
    especialidades: ["Industria Mueblera", "Rescate Fluvial"],
    cobertura: ["Ocotlán Centro", "Zona Industrial Mueblera", "Ribera Río Lerma"]
  },
  {
    nombre: "Estación de Bomberos La Barca",
    nombreCorto: "Est. La Barca",
    slug: "estacion-bomberos-la-barca",
    direccion: "Calle Juárez 180, Centro La Barca",
    ciudad: "La Barca",
    municipio: "La Barca",
    estado: "Jalisco",
    cp: "47910",
    telefono: "(393) 935-0808",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate agrícola",
      "Emergencias carretera Guadalajara-México",
      "Incendios forestales"
    ],
    coordenadas: { lat: 20.2833, lng: -102.5667 },
    zona: "Zona Industrial - Ciénega",
    especialidades: ["Rescate Carretero"],
    cobertura: ["La Barca", "Carretera a Michoacán", "Zona agrícola Ciénega"]
  },
  // ===== ZONA COSTA SUR - COSTALEGRE =====
  {
    nombre: "Estación de Bomberos Cihuatlán - Barra de Navidad",
    nombreCorto: "Est. Cihuatlán - Barra de N...",
    slug: "estacion-bomberos-cihuatlan",
    direccion: "Calle Veracruz 100, Cihuatlán",
    ciudad: "Cihuatlán",
    municipio: "Cihuatlán",
    estado: "Jalisco",
    cp: "48970",
    telefono: "(315) 355-5588",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático Barra de Navidad",
      "Emergencias turísticas costa",
      "Atención huracanes"
    ],
    coordenadas: { lat: 19.2333, lng: -104.4667 },
    zona: "Costa Sur - Costalegre",
    especialidades: ["Rescate Acuático", "Huracanes"],
    cobertura: ["Barra de Navidad", "Melaque", "Cihuatlán", "Costa Sur Jalisco"]
  },
  {
    nombre: "Estación de Bomberos Autlán de Navarro",
    nombreCorto: "Est. Autlán de Navarro",
    slug: "estacion-bomberos-autlan",
    direccion: "Calle Juárez 55, Centro Autlán",
    ciudad: "Autlán de Navarro",
    municipio: "Autlán de Navarro",
    estado: "Jalisco",
    cp: "48900",
    telefono: "(317) 382-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate en Sierra de Manantlán",
      "Incendios forestales reserva biosfera",
      "Emergencias agrícolas"
    ],
    coordenadas: { lat: 19.7717, lng: -104.3694 },
    zona: "Costa Sur - Costalegre",
    especialidades: ["Incendios Forestales", "Rescate Sierra"],
    cobertura: ["Autlán", "Sierra de Manantlán", "Reserva de la Biosfera"]
  },
  // ===== ZONA SUR =====
  {
    nombre: "Estación de Bomberos Ciudad Guzmán",
    nombreCorto: "Est. Ciudad Guzmán",
    slug: "estacion-bomberos-ciudad-guzman",
    direccion: "Calle Colón 175, Centro Ciudad Guzmán",
    ciudad: "Ciudad Guzmán",
    municipio: "Ciudad Guzmán",
    estado: "Jalisco",
    cp: "49000",
    telefono: "(341) 412-3030",
    telefono2: "(341) 412-3434",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias sismológicas Volcán de Colima",
      "Rescate vehicular",
      "Materiales peligrosos",
      "Coordinación regional sur"
    ],
    coordenadas: { lat: 19.7033, lng: -103.4625 },
    zona: "Zona Sur",
    especialidades: ["Emergencias Volcánicas", "Sismos"],
    historia: "Ciudad marcada por sismos históricos (1985), especializada en respuesta a emergencias volcánicas del Volcán de Colima.",
    cobertura: ["Ciudad Guzmán", "Zapotlán el Grande", "Proximidad Volcán de Colima"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Tamazula de Gordiano",
    nombreCorto: "Est. Tamazula de Gordiano",
    slug: "estacion-bomberos-tamazula",
    direccion: "Calle Morelos 88, Centro Tamazula",
    ciudad: "Tamazula de Gordiano",
    municipio: "Tamazula de Gordiano",
    estado: "Jalisco",
    cp: "49650",
    telefono: "(358) 416-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias industria azucarera",
      "Rescate agrícola",
      "Incendios cañaverales"
    ],
    coordenadas: { lat: 19.6833, lng: -103.25 },
    zona: "Zona Sur",
    especialidades: ["Incendios Agrícolas", "Industria Azucarera"],
    cobertura: ["Tamazula", "Ingenios azucareros", "Zona cañera"]
  },
  // ===== ZONA NORTE =====
  {
    nombre: "Estación de Bomberos Colotlán",
    nombreCorto: "Est. Colotlán",
    slug: "estacion-bomberos-colotlan",
    direccion: "Calle Hidalgo 67, Centro Colotlán",
    ciudad: "Colotlán",
    municipio: "Colotlán",
    estado: "Jalisco",
    cp: "46200",
    telefono: "(499) 992-0202",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate en zona Wixárika",
      "Emergencias comunidades indígenas",
      "Incendios forestales sierra"
    ],
    coordenadas: { lat: 22.1167, lng: -103.2667 },
    zona: "Zona Norte - Sierra Huichola",
    especialidades: ["Rescate en Sierra", "Comunidades Indígenas"],
    cobertura: ["Colotlán", "Norte de Jalisco", "Zona Huichola"]
  }
];
function getEstacionesZMG() {
  return estacionesJalisco.filter((e) => e.zona === "Zona Metropolitana de Guadalajara");
}
function getEstacionesCosta() {
  return estacionesJalisco.filter(
    (e) => e.zona?.includes("Costa") || e.zona?.includes("Puerto Vallarta")
  );
}
function getEstacionesHAZMAT() {
  return estacionesJalisco.filter(
    (e) => e.especialidades?.some((esp) => esp.toLowerCase().includes("hazmat"))
  );
}
function getEstacionesRescateAcuatico() {
  return estacionesJalisco.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("acuático") || esp.toLowerCase().includes("náutico") || esp.toLowerCase().includes("lacustre")
    )
  );
}
function getMunicipios() {
  return [...new Set(estacionesJalisco.map((e) => e.ciudad))].sort();
}
function getEstacionBySlug(slug) {
  return estacionesJalisco.find((e) => e.slug === slug);
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  return estacionesJalisco.filter((e) => e.slug !== slug).slice(0, limit);
}
({
  totalEstaciones: estacionesJalisco.length,
  estacionesZMG: getEstacionesZMG().length,
  estacionesCosta: getEstacionesCosta().length,
  estacionesRescateAcuatico: getEstacionesRescateAcuatico().length,
  estacionesHAZMAT: getEstacionesHAZMAT().length});

export { getEstacionesCercanas as a, getMunicipios as b, estacionesJalisco as e, getEstacionBySlug as g };
