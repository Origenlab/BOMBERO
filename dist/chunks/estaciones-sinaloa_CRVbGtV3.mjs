const estacionesSinaloa = [
  {
    id: "sin-culiacan-central",
    slug: "sin-culiacan-central",
    estado: "Sinaloa",
    nombre: "Estación Central de Bomberos de Culiacán",
    nombreCorto: "Estación Central Culiacán",
    direccion: "Blvd. Francisco I. Madero 1150",
    colonia: "Centro",
    codigoPostal: "80000",
    municipio: "Culiacán",
    ciudad: "Culiacán",
    telefono: "667 715 8311",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Rescate urbano pesado",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Coordinación estatal de emergencias"
    ],
    especialidades: [
      "Centro de coordinación estatal",
      "HAZMAT agroindustrial",
      "Rescate urbano de área crítica"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.8091, lng: -107.394 },
    descripcion: "La Estación Central de Bomberos de Culiacán es la sede principal del H. Cuerpo de Bomberos de Sinaloa, coordinando operaciones de emergencia para toda la Zona Metropolitana de Culiacán y brindando apoyo al estado con capacidad HAZMAT agroindustrial.",
    zonasCobertura: [
      "Centro Histórico de Culiacán",
      "Col. Guadalupe",
      "Col. Rosales",
      "Col. Tierra Blanca",
      "Col. Las Quintas"
    ],
    tiempoRespuesta: "4-7 minutos",
    personal: 90,
    personalActivo: 90,
    unidades: 9,
    unidadesDisponibles: [
      "3 Autobombas",
      "2 Unidades de Rescate",
      "1 Escalera",
      "2 Ambulancias",
      "1 Unidad HAZMAT"
    ]
  },
  {
    id: "sin-culiacan-norte",
    slug: "sin-culiacan-norte",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Norte Culiacán",
    nombreCorto: "Estación Norte Culiacán",
    direccion: "Av. Universitarios 2340",
    colonia: "Universidad",
    codigoPostal: "80010",
    municipio: "Culiacán",
    ciudad: "Culiacán",
    telefono: "667 714 2200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en alturas",
      "Servicio prehospitalario",
      "Emergencias en universidades y campus",
      "Retiro de enjambres",
      "Atención a accidentes en Blvd. Universitarios"
    ],
    especialidades: [
      "Zona universitaria y residencial norte",
      "Emergencias en centros educativos",
      "Atención a corredores comerciales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.835, lng: -107.385 },
    descripcion: "La Estación Norte de Culiacán atiende la zona universitaria y los fraccionamientos residenciales del norte de la ciudad, una de las áreas de mayor densidad poblacional y actividad educativa de la capital sinaloense.",
    zonasCobertura: [
      "Col. Universidad",
      "Col. Chapultepec",
      "Col. Las Américas",
      "Fracc. Los Alamos",
      "Col. Burócrata"
    ],
    tiempoRespuesta: "6-10 minutos",
    personal: 45,
    personalActivo: 45,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad de Rescate",
      "1 Ambulancia",
      "1 Vehículo de Mando"
    ]
  },
  {
    id: "sin-culiacan-sur",
    slug: "sin-culiacan-sur",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Sur Culiacán",
    nombreCorto: "Estación Sur Culiacán",
    direccion: "Blvd. Emiliano Zapata 890",
    colonia: "Bachigualato",
    codigoPostal: "80140",
    municipio: "Culiacán",
    ciudad: "Culiacán",
    telefono: "667 716 3400",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Control de incendios en bodegas y almacenes",
      "Rescate de personas atrapadas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona agroindustrial sur de Culiacán",
      "Emergencias en bodegas de agroexportación",
      "Atención a parques industriales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.785, lng: -107.405 },
    descripcion: "La Estación Sur de Culiacán protege la zona industrial y agroindustrial del sur de la ciudad, donde se concentran importantes bodegas y empresas del sector agroexportador sinaloense.",
    zonasCobertura: [
      "Col. Bachigualato",
      "Parque Industrial Sur",
      "Col. Villa Verde",
      "Fracc. El Toreo",
      "Zona Industrial Culiacán"
    ],
    tiempoRespuesta: "7-11 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 4,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad Industrial",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-culiacan-aeropuerto",
    slug: "sin-culiacan-aeropuerto",
    estado: "Sinaloa",
    nombre: "Estación Contra Incendios Aeropuerto Internacional de Culiacán",
    nombreCorto: "Estación Aeropuerto Culiacán",
    direccion: "Carr. a Navolato Km 5",
    colonia: "Zona Aeropuerto",
    codigoPostal: "80170",
    municipio: "Culiacán",
    ciudad: "Culiacán",
    telefono: "667 761 2100",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate y extinción en aeronaves (ARFF)",
      "Incendios estructurales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Emergencias con combustible de aviación",
      "Evacuación de aeronaves",
      "Control de derrames de hidrocarburo",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "ARFF aeroportuario certificado",
      "Rescate en pista y plataforma",
      "HAZMAT con combustible de aviación"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.7647, lng: -107.4745 },
    descripcion: "La Estación Aeroportuaria de Culiacán opera en el Aeropuerto Internacional Federal de Bachigualato, equipada y certificada para operaciones de rescate y extinción de incendios en aeronaves (ARFF) conforme a estándares internacionales de la ICAO.",
    zonasCobertura: [
      "Aeropuerto Internacional de Culiacán",
      "Pista y plataformas",
      "Zona de hangares",
      "Accesos aeroportuarios",
      "Carretera Navolato tramo aeropuerto"
    ],
    tiempoRespuesta: "2-3 minutos",
    personal: 35,
    personalActivo: 35,
    unidades: 5,
    unidadesDisponibles: [
      "2 Vehículos ARFF",
      "1 Autobomba",
      "1 Unidad HAZMAT",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-mazatlan-central",
    slug: "sin-mazatlan-central",
    estado: "Sinaloa",
    nombre: "Estación Central de Bomberos de Mazatlán",
    nombreCorto: "Estación Central Mazatlán",
    direccion: "Av. Ejército Mexicano 701",
    colonia: "Centro",
    codigoPostal: "82000",
    municipio: "Mazatlán",
    ciudad: "Mazatlán",
    telefono: "669 982 0800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate acuático",
      "Materiales peligrosos portuarios (HAZMAT)",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Protección civil por huracanes",
      "Emergencias en instalaciones portuarias",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "HAZMAT portuario",
      "Rescate acuático Pacífico",
      "Coordinación de emergencias durante huracanes"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.2494, lng: -106.4111 },
    descripcion: "La Estación Central de Mazatlán coordina la respuesta de emergencias para el principal puerto del Pacífico mexicano, con capacidades especializadas en rescate acuático, HAZMAT portuario y protección civil durante la temporada de huracanes.",
    zonasCobertura: [
      "Centro Histórico de Mazatlán",
      "Puerto de Mazatlán",
      "Col. Juárez",
      "Zona Industrial Portuaria",
      "Malecón"
    ],
    tiempoRespuesta: "5-8 minutos",
    personal: 75,
    personalActivo: 75,
    unidades: 8,
    unidadesDisponibles: [
      "3 Autobombas",
      "2 Lanchas de Rescate",
      "1 Unidad HAZMAT",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-mazatlan-norte",
    slug: "sin-mazatlan-norte",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Norte Mazatlán - Zona Dorada",
    nombreCorto: "Estación Norte Mazatlán Zona Dorada",
    direccion: "Av. Camarón Sábalo 3200",
    colonia: "Gaviotas",
    codigoPostal: "82110",
    municipio: "Mazatlán",
    ciudad: "Mazatlán",
    telefono: "669 914 1700",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate en playas y litoral",
      "Incendios estructurales",
      "Rescate acuático",
      "Control de fugas de gas",
      "Protección civil por huracanes",
      "Emergencias en hoteles y centros turísticos",
      "Rescate vehicular",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Rescate en playas y turismo costero",
      "Emergencias en zona hotelera",
      "Protección civil costera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.29, lng: -106.43 },
    descripcion: "La Estación Norte de Mazatlán opera en la Zona Dorada, el principal corredor hotelero y turístico del Puerto, atendiendo emergencias en hoteles, restaurantes, playas y la zona costera de mayor afluencia turística de Sinaloa.",
    zonasCobertura: [
      "Zona Dorada",
      "Col. Gaviotas",
      "Fracc. Marina Mazatlán",
      "Playas del Norte",
      "Col. Lomas de Mazatlán"
    ],
    tiempoRespuesta: "5-9 minutos",
    personal: 48,
    personalActivo: 48,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Lancha de Rescate",
      "1 Unidad de Rescate Costero",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-los-mochis",
    slug: "sin-los-mochis",
    estado: "Sinaloa",
    nombre: "Estación Central de Bomberos Los Mochis",
    nombreCorto: "Estación Central Los Mochis",
    direccion: "Blvd. Castro s/n",
    colonia: "5 de Mayo",
    codigoPostal: "81200",
    municipio: "Ahome",
    ciudad: "Los Mochis",
    telefono: "668 815 7050",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos agrícolas",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Emergencias agroindustriales",
      "Control de incendios en campos de caña y hortalizas",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Emergencias en zona cañera e industrial",
      "HAZMAT agroindustrial norte",
      "Atención a infraestructura ferroviaria Tren Chepe"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.79, lng: -108.995 },
    descripcion: "La Estación Central de Los Mochis atiende el principal centro urbano del norte de Sinaloa, con especialidad en emergencias agroindustriales de la zona cañera y de hortalizas, además de su proximidad al inicio del recorrido del Tren Chepe.",
    zonasCobertura: [
      "Centro de Los Mochis",
      "Col. Independencia",
      "Col. Bienestar",
      "Parque Industrial Los Mochis",
      "Col. Chapultepec"
    ],
    tiempoRespuesta: "6-10 minutos",
    personal: 55,
    personalActivo: 55,
    unidades: 6,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad HAZMAT",
      "1 Unidad de Rescate",
      "1 Autobomba Agrícola",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-guasave",
    slug: "sin-guasave",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Guasave",
    nombreCorto: "Estación Bomberos Guasave",
    direccion: "Av. Álvaro Obregón 450",
    colonia: "Centro",
    codigoPostal: "81000",
    municipio: "Guasave",
    ciudad: "Guasave",
    telefono: "687 872 2180",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos de tomate y pepino",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Control de incendios en campos agrícolas",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona hortícola de exportación",
      "Incendios en campos y bodegas agrícolas",
      "Emergencias en empacadoras"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.567, lng: -108.467 },
    descripcion: "La Estación de Bomberos de Guasave protege uno de los municipios más productivos de México en horticultura de exportación, con especialidad en emergencias en campos de tomate, pepino, chile y en las empacadoras que abastecen mercados internacionales.",
    zonasCobertura: [
      "Centro de Guasave",
      "Col. Las Flores",
      "Zona Agrícola Norte",
      "Col. El Modelo",
      "Zona de Empacadoras"
    ],
    tiempoRespuesta: "8-14 minutos",
    personal: 32,
    personalActivo: 32,
    unidades: 4,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad Agrícola",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-guamuchil",
    slug: "sin-guamuchil",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Guamúchil",
    nombreCorto: "Estación Bomberos Guamúchil",
    direccion: "Calle Guerrero 320",
    colonia: "Centro",
    codigoPostal: "81400",
    municipio: "Salvador Alvarado",
    ciudad: "Guamúchil",
    telefono: "673 732 1900",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos y rastrojos",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Control de incendios en campos agrícolas",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona agrícola de garbanzo y maíz",
      "Atención a comunidades rurales",
      "Incendios en rastrojos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.464, lng: -108.085 },
    descripcion: "La Estación de Bomberos de Guamúchil sirve a la cabecera municipal de Salvador Alvarado, una de las zonas agrícolas más importantes del estado en producción de garbanzo y maíz, con una extensa zona rural de cobertura.",
    zonasCobertura: [
      "Centro de Guamúchil",
      "Col. Constitución",
      "Comunidades rurales de Salvador Alvarado",
      "Zona Agrícola Poniente",
      "Col. Nueva"
    ],
    tiempoRespuesta: "9-16 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad Agrícola",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-navolato",
    slug: "sin-navolato",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Navolato",
    nombreCorto: "Estación Bomberos Navolato",
    direccion: "Av. Hidalgo 210",
    colonia: "Centro",
    codigoPostal: "80370",
    municipio: "Navolato",
    ciudad: "Navolato",
    telefono: "672 722 0123",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos de caña de azúcar",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Control de incendios en campos agrícolas",
      "Rescate acuático en zona costera",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona cañera y azucarera",
      "Emergencias en Ingenio Azucarero El Dorado",
      "Rescate acuático en laguna costera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.759, lng: -107.699 },
    descripcion: "La Estación de Bomberos de Navolato protege el municipio cañero por excelencia de Sinaloa, sede del Ingenio Azucarero El Dorado, con extensa zona costera que incluye poblados pesqueros y lagunas.",
    zonasCobertura: [
      "Centro de Navolato",
      "El Dorado",
      "Altata (zona costera)",
      "Zona Cañera",
      "Poblados pesqueros costeros"
    ],
    tiempoRespuesta: "10-18 minutos",
    personal: 25,
    personalActivo: 25,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad Cañera",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-el-fuerte",
    slug: "sin-el-fuerte",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos El Fuerte",
    nombreCorto: "Estación Bomberos El Fuerte",
    direccion: "Calle Morelos 45",
    colonia: "Centro",
    codigoPostal: "81890",
    municipio: "El Fuerte",
    ciudad: "El Fuerte",
    telefono: "698 893 0245",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate turístico",
      "Control de fugas de gas",
      "Rescate en sierra",
      "Emergencias en ruta del Tren Chepe",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Rescate turístico Ruta del Tren Chepe",
      "Incendios forestales en sierra norte",
      "Pueblo Mágico El Fuerte"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.418, lng: -108.616 },
    descripcion: "La Estación de Bomberos de El Fuerte atiende el Pueblo Mágico más septentrional de Sinaloa, punto de partida del legendario Tren Chepe hacia las Barrancas del Cobre. Especializada en rescate turístico y en emergencias en las serranías del norte del estado.",
    zonasCobertura: [
      "Centro El Fuerte",
      "Mochicahui",
      "San Blas (inicio ruta Chepe)",
      "Zona Sierra Norte",
      "Comunidades indígenas mayo"
    ],
    tiempoRespuesta: "10-22 minutos",
    personal: 20,
    personalActivo: 20,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad Forestal Todoterreno",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-choix",
    slug: "sin-choix",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Choix",
    nombreCorto: "Estación Bomberos Choix",
    direccion: "Plaza Principal s/n",
    colonia: "Centro",
    codigoPostal: "81700",
    municipio: "Choix",
    ciudad: "Choix",
    telefono: "698 895 0167",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Incendios estructurales",
      "Rescate en sierra",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate de personas perdidas en sierra",
      "Control de fauna silvestre",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Incendios forestales en Sierra Madre Occidental",
      "Rescate en zonas de alta montaña",
      "Atención a comunidades indígenas serranas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.71, lng: -108.327 },
    descripcion: "La Estación de Bomberos de Choix opera en el municipio más serrano del norte de Sinaloa, con acceso a los límites con Chihuahua y Sonora. Especializada en combate de incendios forestales en la Sierra Madre Occidental y rescate en zonas de difícil acceso.",
    zonasCobertura: [
      "Centro de Choix",
      "Comunidades serranas",
      "Zona limítrofe con Chihuahua",
      "Sierra Madre Occidental norte",
      "Comunidades indígenas"
    ],
    tiempoRespuesta: "15-35 minutos",
    personal: 15,
    personalActivo: 15,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba Forestal 4x4",
      "1 Unidad de Rescate en Sierra"
    ]
  },
  {
    id: "sin-sinaloa-leyva",
    slug: "sin-sinaloa-leyva",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Sinaloa de Leyva",
    nombreCorto: "Estación Bomberos Sinaloa de Leyva",
    direccion: "Calle Juárez 130",
    colonia: "Centro",
    codigoPostal: "80600",
    municipio: "Sinaloa",
    ciudad: "Sinaloa de Leyva",
    telefono: "672 724 0345",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Rescate en río Sinaloa",
      "Control de fauna silvestre",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona agrícola del Río Sinaloa",
      "Rescate acuático en río",
      "Emergencias en comunidades ribereñas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.831, lng: -107.948 },
    descripcion: "La Estación de Bomberos de Sinaloa de Leyva atiende la histórica cabecera municipal que da nombre al estado, ubicada en la ribera del Río Sinaloa. Protege una zona agrícola y ganadera con varias comunidades ribereñas.",
    zonasCobertura: [
      "Centro Sinaloa de Leyva",
      "Comunidades ribereñas del Río Sinaloa",
      "Zona Agrícola Norte",
      "Col. Libertad",
      "Comunidades serranas"
    ],
    tiempoRespuesta: "12-22 minutos",
    personal: 18,
    personalActivo: 18,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad de Rescate"
    ]
  },
  {
    id: "sin-angostura",
    slug: "sin-angostura",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Angostura",
    nombreCorto: "Estación Bomberos Angostura",
    direccion: "Av. Constitución 78",
    colonia: "Centro",
    codigoPostal: "80900",
    municipio: "Angostura",
    ciudad: "Angostura",
    telefono: "673 734 0234",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios en campos de garbanzo y maíz",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias agroindustriales",
      "Control de incendios en campos agrícolas",
      "Rescate acuático en esteros",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona agrícola y costera de Angostura",
      "Rescate acuático en esteros y lagunas",
      "Emergencias en comunidades pesqueras"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.366, lng: -108.176 },
    descripcion: "La Estación de Bomberos de Angostura sirve a un municipio con vocación agrícola y costera, colindante con la Bahía de Santa María-La Reforma, protegiendo tanto campos agrícolas como comunidades pesqueras.",
    zonasCobertura: [
      "Centro de Angostura",
      "Las Chicuras",
      "Zona costera Bahía Santa María",
      "Col. Ejidal",
      "Comunidades pesqueras"
    ],
    tiempoRespuesta: "12-22 minutos",
    personal: 16,
    personalActivo: 16,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad de Rescate"
    ]
  },
  {
    id: "sin-mocorito",
    slug: "sin-mocorito",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Mocorito",
    nombreCorto: "Estación Bomberos Mocorito",
    direccion: "Plaza Municipal s/n",
    colonia: "Centro",
    codigoPostal: "80500",
    municipio: "Mocorito",
    ciudad: "Mocorito",
    telefono: "673 733 0456",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Incendios en rastrojos y campos",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en sierra baja",
      "Control de fauna silvestre",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Pueblo Mágico Mocorito (primero de Sinaloa)",
      "Rescate en sierra y presierra",
      "Protección de patrimonio histórico"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.478, lng: -107.915 },
    descripcion: "La Estación de Bomberos de Mocorito protege al primer Pueblo Mágico de Sinaloa, resguardando su valioso patrimonio histórico-cultural. Ubicado en la transición entre el valle agrícola y la sierra, atiende tanto zonas urbanas como comunidades serranas.",
    zonasCobertura: [
      "Centro Histórico de Mocorito",
      "Zona Serrana",
      "Comunidades de la presierra",
      "Valle agrícola",
      "Col. Ejidal"
    ],
    tiempoRespuesta: "12-22 minutos",
    personal: 16,
    personalActivo: 16,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad Forestal"
    ]
  },
  {
    id: "sin-badiraguato",
    slug: "sin-badiraguato",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Badiraguato",
    nombreCorto: "Estación Bomberos Badiraguato",
    direccion: "Calle Hidalgo 23",
    colonia: "Centro",
    codigoPostal: "80200",
    municipio: "Badiraguato",
    ciudad: "Badiraguato",
    telefono: "671 726 0178",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Incendios estructurales",
      "Rescate en sierra",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate de personas perdidas en sierra",
      "Atención a accidentes en caminos de sierra",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Rescate en sierra y zonas de difícil acceso",
      "Incendios forestales en Sierra Madre",
      "Operaciones en alta montaña"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.365, lng: -107.545 },
    descripcion: "La Estación de Bomberos de Badiraguato opera en la puerta de entrada a la sierra sinaloense, uno de los municipios más montañosos y de mayor altitud del estado. Sus unidades están equipadas para operar en terrenos de alta pendiente y condiciones extremas.",
    zonasCobertura: [
      "Centro de Badiraguato",
      "Comunidades serranas",
      "Sierra Madre Occidental Sinaloa",
      "Caminos de terraceria",
      "Comunidades dispersas de alta montaña"
    ],
    tiempoRespuesta: "15-40 minutos",
    personal: 14,
    personalActivo: 14,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba Forestal 4x4",
      "1 Vehículo de Rescate Sierra"
    ]
  },
  {
    id: "sin-cosala",
    slug: "sin-cosala",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Cosalá",
    nombreCorto: "Estación Bomberos Cosalá",
    direccion: "Calle Benito Juárez 56",
    colonia: "Centro",
    codigoPostal: "80700",
    municipio: "Cosalá",
    ciudad: "Cosalá",
    telefono: "696 965 0134",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate en minas históricas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate turístico",
      "Protección de patrimonio histórico",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Pueblo Mágico Cosalá, rescate histórico y minero",
      "Incendios en minas y túneles históricos",
      "Rescate en sierra sur"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.413, lng: -106.692 },
    descripcion: "La Estación de Bomberos de Cosalá protege el Pueblo Mágico con mayor riqueza minera colonial de Sinaloa, salvaguardando su excepcional patrimonio histórico-arquitectónico y atendiendo emergencias en las antiguas minas de plata que rodean el municipio.",
    zonasCobertura: [
      "Centro Histórico de Cosalá",
      "Zona Minera",
      "Sierra Sur de Sinaloa",
      "Presa Josefa Ortiz de Domínguez",
      "Comunidades serranas"
    ],
    tiempoRespuesta: "14-30 minutos",
    personal: 14,
    personalActivo: 14,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad de Rescate Minero"
    ]
  },
  {
    id: "sin-escuinapa",
    slug: "sin-escuinapa",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Escuinapa",
    nombreCorto: "Estación Bomberos Escuinapa",
    direccion: "Av. Benito Juárez 340",
    colonia: "Centro",
    codigoPostal: "82400",
    municipio: "Escuinapa",
    ciudad: "Escuinapa",
    telefono: "695 953 0289",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate acuático",
      "Protección civil por huracanes",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias en manglares y zona costera",
      "Atención a inundaciones",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Protección civil ante huracanes Marismas Nacionales",
      "Rescate acuático en lagunas y manglares",
      "Emergencias en zona de alta vulnerabilidad costera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.838, lng: -105.78 },
    descripcion: "La Estación de Bomberos de Escuinapa atiende el municipio más austral de Sinaloa, colindante con Nayarit, dentro de la Reserva de la Biosfera Marismas Nacionales. Especializada en protección civil ante huracanes del Pacífico y rescate acuático en ecosistemas de manglar.",
    zonasCobertura: [
      "Centro de Escuinapa",
      "Marismas Nacionales",
      "Isla del Bosque",
      "Zona costera",
      "Poblados pesqueros sur"
    ],
    tiempoRespuesta: "10-25 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Lancha de Rescate",
      "1 Ambulancia"
    ]
  },
  {
    id: "sin-rosario",
    slug: "sin-rosario",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Rosario",
    nombreCorto: "Estación Bomberos Rosario",
    direccion: "Calle Constitución 89",
    colonia: "Centro",
    codigoPostal: "82800",
    municipio: "Rosario",
    ciudad: "Rosario",
    telefono: "694 952 0156",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate acuático en zona costera",
      "Control de fugas de gas",
      "Protección civil por huracanes",
      "Rescate turístico",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Pueblo Mágico Rosario, costa sur sinaloense",
      "Protección civil costera",
      "Rescate en playas del Pacífico sur"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.996, lng: -105.856 },
    descripcion: "La Estación de Bomberos del Rosario protege el Pueblo Mágico que alberga el Santuario de Nuestra Señora del Rosario, así como las playas de Las Cabras y Chametla. Atiende emergencias en la zona costera sur del estado durante la temporada turística y de huracanes.",
    zonasCobertura: [
      "Centro Histórico de Rosario",
      "Playas Las Cabras",
      "Chametla",
      "Sierra baja de Rosario",
      "Comunidades costeras"
    ],
    tiempoRespuesta: "12-22 minutos",
    personal: 18,
    personalActivo: 18,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad de Rescate Costero"
    ]
  },
  {
    id: "sin-concordia",
    slug: "sin-concordia",
    estado: "Sinaloa",
    nombre: "Estación de Bomberos Concordia",
    nombreCorto: "Estación Bomberos Concordia",
    direccion: "Av. Principal 34",
    colonia: "Centro",
    codigoPostal: "82600",
    municipio: "Concordia",
    ciudad: "Concordia",
    telefono: "694 951 0267",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate en sierra",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate turístico en cascadas",
      "Protección de patrimonio histórico",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Pueblo Mágico Concordia, sierra y cascadas",
      "Rescate en cascadas turísticas",
      "Incendios forestales en sierra sur"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.288, lng: -106.064 },
    descripcion: "La Estación de Bomberos de Concordia protege este Pueblo Mágico enclavado en la sierra sur de Sinaloa, famoso por sus artesanías de barro y madera, sus cascadas turísticas y el paisaje de la sierra. Especializada en rescate en barrancos y cascadas.",
    zonasCobertura: [
      "Centro Histórico de Concordia",
      "Cascadas La Noria",
      "Sierra sur de Sinaloa",
      "Zona artesanal",
      "Comunidades serranas"
    ],
    tiempoRespuesta: "12-28 minutos",
    personal: 16,
    personalActivo: 16,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba",
      "1 Unidad de Rescate en Sierra"
    ]
  }
];
function getEstacionBySlug(slug) {
  return estacionesSinaloa.find((e) => e.slug === slug);
}
function getMunicipios() {
  return [...new Set(estacionesSinaloa.map((e) => e.municipio))].sort();
}
function getEstacionesCercanas(slug, limit = 3) {
  return estacionesSinaloa.filter((e) => e.slug !== slug).slice(0, limit);
}

export { getEstacionesCercanas as a, getMunicipios as b, estacionesSinaloa as e, getEstacionBySlug as g };
