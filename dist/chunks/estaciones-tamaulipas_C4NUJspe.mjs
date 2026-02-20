const ESTADISTICAS_TAMAULIPAS = {
  municipios_cubiertos: 20
};
const estacionesTamaulipas = [
  // ─── CIUDAD VICTORIA (Capital del Estado) ────────────────────────────────────
  {
    id: "tam-ciudad-victoria-central",
    slug: "tam-ciudad-victoria-central",
    estado: "Tamaulipas",
    nombre: "Estación Central de Bomberos de Ciudad Victoria",
    nombreCorto: "Estación Central Ciudad Victoria",
    direccion: "Av. 8 de Julio 1200",
    colonia: "Centro",
    codigoPostal: "87000",
    municipio: "Victoria",
    ciudad: "Ciudad Victoria",
    telefono: "834 312 1330",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales de alta complejidad",
      "Coordinación estatal de emergencias",
      "HAZMAT fugas de gas e hidrocarburos",
      "Rescate vehicular y atrapamientos",
      "Rescate en altura y edificios de gobierno",
      "Control de incendios en instituciones educativas",
      "Servicio prehospitalario avanzado (ALS)",
      "Apoyo en emergencias de la Sierra Madre Oriental"
    ],
    especialidades: [
      "Centro de Coordinación Estatal de Emergencias TAM",
      "HAZMAT industrial y de transporte carretero",
      "Rescate técnico en entorno urbano y serrano"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.7364, lng: -99.1434 },
    descripcion: "La Estación Central de Ciudad Victoria es la sede principal del H. Cuerpo de Bomberos de Tamaulipas y el nodo de coordinación para toda la red estatal de emergencias. Ubicada en la capital del estado, a los pies de la Sierra Madre Oriental, cubre tanto el entorno urbano de la capital como el corredor carretero que une el norte y sur de Tamaulipas, atendiendo emergencias en una de las vías más transitadas del noreste mexicano.",
    zonasCobertura: [
      "Centro Histórico de Ciudad Victoria",
      "Zona Dorada y Zona Rosa",
      "Parque Industrial Ciudad Victoria",
      "Col. Jardín",
      "Col. Unidad Nacional",
      "Corredor carretero Victoria-Monterrey"
    ],
    tiempoRespuesta: "4-7 minutos",
    personal: 85,
    personalActivo: 85,
    unidades: 10,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "1 Unidad HAZMAT Transporte",
      "1 Escalera Telescópica 28m",
      "2 Unidades de Rescate",
      "2 Ambulancias ALS",
      "1 Unidad de Mando Móvil"
    ]
  },
  // ─── REYNOSA CENTRAL (Ciudad más grande de TAM / PEMEX Burgos / Maquiladoras) ─
  {
    id: "tam-reynosa-central",
    slug: "tam-reynosa-central",
    estado: "Tamaulipas",
    nombre: "Estación Central de Bomberos de Reynosa",
    nombreCorto: "Estación Central Reynosa",
    direccion: "Av. Juárez 1050",
    colonia: "Centro",
    codigoPostal: "88500",
    municipio: "Reynosa",
    ciudad: "Reynosa",
    telefono: "899 922 0500",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en plantas maquiladoras y parques industriales",
      "HAZMAT en Cuenca de Burgos (gas natural, condensado)",
      "Control de fugas en gasoductos y compresoras PEMEX",
      "Rescate vehicular en puentes internacionales y carreteras",
      "Incendios estructurales en zona urbana densamente poblada",
      "Rescate acuático en el río Bravo/Grande",
      "Respuesta a emergencias en puentes fronterizos McAllen-Reynosa",
      "Servicio prehospitalario avanzado en zona metropolitana"
    ],
    especialidades: [
      "HAZMAT Gas Natural — Cuenca de Burgos (mayor reserva onshore MX)",
      "Respuesta industrial maquiladora: electrónica, automotriz",
      "Rescate fluvial Río Bravo/Rio Grande frontera EE.UU.",
      "Coordinación binacional con McAllen/Hidalgo County Fire (Texas)"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.0822, lng: -98.2868 },
    descripcion: "La Estación Central de Reynosa cubre la mayor ciudad de Tamaulipas y uno de los corredores industriales fronterizos más importantes de México. Reynosa alberga plantas de Samsung SDI, Emerson Electric, TRW, Delphi y decenas de empresas del sector electrónico y automotriz. La Cuenca de Burgos, el mayor yacimiento onshore de gas natural de México, ubica en el municipio compresoras, pozos y gasoductos que generan riesgos HAZMAT de alta complejidad para los bomberos locales.",
    zonasCobertura: [
      "Centro de Reynosa",
      "Parque Industrial Reynosa",
      "Col. Rodolfo Garza Cantú",
      "Puentes Internacionales Reynosa-McAllen",
      "Corredor gasoducto PEMEX zona norte",
      "Zona industrial electrónica (Samsung, Emerson)"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 100,
    personalActivo: 100,
    unidades: 12,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "2 Unidades HAZMAT Gas Natural",
      "1 Escalera Telescópica 30m",
      "2 Unidades de Rescate",
      "2 Ambulancias ALS",
      "1 Lancha Rescate Fluvial Río Bravo",
      "1 Unidad de Mando Móvil"
    ]
  },
  // ─── REYNOSA INDUSTRIAL (Zona Industrial Sur / PEMEX Burgos) ─────────────────
  {
    id: "tam-reynosa-industrial",
    slug: "tam-reynosa-industrial",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Reynosa Industrial",
    nombreCorto: "Estación Reynosa Industrial",
    direccion: "Blvd. Morales 3400",
    colonia: "Parque Industrial Reynosa",
    codigoPostal: "88588",
    municipio: "Reynosa",
    ciudad: "Reynosa",
    telefono: "899 922 1800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en parques industriales y maquiladoras Sur",
      "HAZMAT solventes y materiales electrónicos (Samsung SDI)",
      "Control de fugas en subestaciones de gasoductos",
      "Emergencias industriales en compresoras PEMEX",
      "Rescate en espacios confinados industriales",
      "Incendios en bodegas y centros de distribución",
      "Primeros auxilios en zonas industriales"
    ],
    especialidades: [
      "HAZMAT Industria Electrónica — materiales de baterías Li-ion",
      "Emergencias en parques industriales maquiladores"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.0461, lng: -98.2602 },
    descripcion: "La Estación Industrial de Reynosa da cobertura a los extensos parques industriales del sur de la ciudad, donde operan plantas maquiladoras de primera línea mundial como Samsung SDI (baterías), Emerson Electric, y numerosas empresas Tier-1 de la industria automotriz y electrónica. El riesgo de materiales de baterías de litio, solventes industriales y gases de proceso requiere personal certificado HAZMAT nivel B/C permanente.",
    zonasCobertura: [
      "Parque Industrial Reynosa Sur",
      "Plantas Samsung SDI, Emerson, TRW",
      "Zona de Bodegas Reynosa Sur",
      "Infraestructura PEMEX Gas y Petroquímica"
    ],
    tiempoRespuesta: "5-9 minutos",
    personal: 55,
    personalActivo: 55,
    unidades: 6,
    unidadesDisponibles: [
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Industrial",
      "1 Camión Cisterna 8,000L",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── MATAMOROS CENTRAL (Frontera Brownsville TX / Maquiladora Automotriz) ─────
  {
    id: "tam-matamoros-central",
    slug: "tam-matamoros-central",
    estado: "Tamaulipas",
    nombre: "Estación Central de Bomberos de Matamoros",
    nombreCorto: "Estación Central Matamoros",
    direccion: "Av. Lauro Villar 120",
    colonia: "Centro",
    codigoPostal: "87300",
    municipio: "Matamoros",
    ciudad: "Heroica Matamoros",
    telefono: "868 813 2222",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en plantas automotrices y maquiladoras",
      "HAZMAT materiales automotrices (pinturas, solventes, fluidos)",
      "Rescate en puentes internacionales Matamoros-Brownsville",
      "Rescate acuático en el río Bravo/Grande",
      "Control de incendios en industria agroindustrial",
      "Emergencias en el Puerto Internacional de Matamoros",
      "Coordinación binacional con Brownsville TX Fire Dept.",
      "Servicio prehospitalario avanzado"
    ],
    especialidades: [
      "Maquiladora automotriz: Delphi, Pioneer, Continental, Remy",
      "Rescate fluvial Río Bravo frontera Matamoros-Brownsville TX",
      "Coordinación binacional con Brownsville/Cameron County Fire",
      "HAZMAT automotriz nivel A"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.8691, lng: -97.5044 },
    descripcion: "Matamoros, apodada 'la Detroit de México', alberga el mayor clúster automotriz de Tamaulipas con plantas de Delphi Technologies (la mayor planta en su tipo en México), Pioneer Speakers, Continental, Remy, y decenas de proveedores Tier-1 del sector automotriz global. Los bomberos de Matamoros dominan la respuesta a incendios con materiales automotrices y mantienen acuerdos formales de cooperación con el Cuerpo de Bomberos de Brownsville, Texas para emergencias en la franja fronteriza.",
    zonasCobertura: [
      "Centro Histórico de Matamoros",
      "Parque Industrial Matamoros",
      "Plantas Delphi, Pioneer, Continental",
      "Puentes Internacionales Matamoros-Brownsville",
      "Río Bravo/Grande zona fronteriza"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 90,
    personalActivo: 90,
    unidades: 10,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "1 Unidad HAZMAT Automotriz",
      "1 Escalera Telescópica 28m",
      "2 Unidades de Rescate",
      "1 Lancha Rescate Fluvial",
      "2 Ambulancias ALS"
    ]
  },
  // ─── NUEVO LAREDO (Mayor Puerto Terrestre de las Américas) ───────────────────
  {
    id: "tam-nuevo-laredo-central",
    slug: "tam-nuevo-laredo-central",
    estado: "Tamaulipas",
    nombre: "Estación Central de Bomberos de Nuevo Laredo",
    nombreCorto: "Estación Central Nuevo Laredo",
    direccion: "Av. Guerrero 3200",
    colonia: "Colonia Guerrero",
    codigoPostal: "88000",
    municipio: "Nuevo Laredo",
    ciudad: "Nuevo Laredo",
    telefono: "867 712 8600",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en bodegas de transporte internacional y patios",
      "HAZMAT en carga terrestre (productos químicos, combustibles)",
      "Rescate vehicular en accidentes de tráilers y tractos",
      "Emergencias en puentes internacionales Nuevo Laredo-Laredo TX",
      "Control de incendios en patios aduaneros y zonas fiscales",
      "Rescate acuático en el río Bravo/Grande",
      "Coordinación binacional con Laredo TX Fire Dept.",
      "Apoyo en emergencias con mercancías peligrosas en tránsito"
    ],
    especialidades: [
      "Mayor puerto terrestre de las Américas: 40% exportaciones MX a EE.UU.",
      "HAZMAT Transporte Terrestre Internacional (UN/DOT)",
      "Coordinación binacional Laredo TX Fire Department",
      "Rescate en accidentes de tractocamiones y transporte de carga"
    ],
    horario: "24 horas",
    coordenadas: { lat: 27.4787, lng: -99.5151 },
    descripcion: "Nuevo Laredo es el mayor puerto terrestre de las Américas y el punto de cruce más activo de la frontera México-EE.UU.: más del 40% de las exportaciones mexicanas hacia Estados Unidos pasan por sus puentes internacionales. Los cinco puentes de la ciudad mueven diariamente miles de tractocamiones con mercancías de todo tipo —incluyendo productos químicos y materiales peligrosos— lo que exige bomberos especializados en HAZMAT de transporte terrestre internacional y protocolos binacionales con Laredo, Texas.",
    zonasCobertura: [
      "Centro de Nuevo Laredo",
      "Puentes Internacionales I, II, III, IV y V",
      "Patios aduaneros y zonas de libre comercio",
      "Parques Industriales Nuevo Laredo",
      "Río Bravo/Grande zona fronteriza",
      "Corredor carretero Laredo-Monterrey"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 90,
    personalActivo: 90,
    unidades: 11,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "2 Unidades HAZMAT Transporte Internacional",
      "1 Escalera Telescópica 30m",
      "2 Unidades de Rescate Pesado (tractocamiones)",
      "1 Lancha Rescate Fluvial Río Bravo",
      "2 Ambulancias ALS"
    ]
  },
  // ─── TAMPICO CENTRAL (Ciudad del Petróleo / Puerto Histórico) ────────────────
  {
    id: "tam-tampico-central",
    slug: "tam-tampico-central",
    estado: "Tamaulipas",
    nombre: "Estación Central de Bomberos de Tampico",
    nombreCorto: "Estación Central Tampico",
    direccion: "Av. Ejército Mexicano 210",
    colonia: "Centro",
    codigoPostal: "89000",
    municipio: "Tampico",
    ciudad: "Tampico",
    telefono: "833 212 1515",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona portuaria e industrial",
      "HAZMAT petroquímico en instalaciones del Puerto de Tampico",
      "Rescate acuático en Laguna del Carpintero y río Pánuco",
      "Control de incendios en buques y embarcaciones de carga",
      "Rescate en el Puente Tampico sobre el río Pánuco",
      "Emergencias en zona histórica y centro de Tampico",
      "Apoyo a brigadas de PEMEX en la zona del Complejo Industrial",
      "Servicio prehospitalario avanzado"
    ],
    especialidades: [
      "Puerto de Tampico: primer boom petrolero de México (1900-1920)",
      "HAZMAT Petroquímico portuario — crudo, derivados y productos refinados",
      "Rescate acuático en Laguna del Carpintero y río Pánuco",
      "Control de incendios en buques tanque y carga general"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2597, lng: -97.8686 },
    descripcion: "Tampico, la histórica 'Ciudad del Petróleo', fue el corazón del primer boom petrolero de México entre 1900 y 1920, cuando fue el mayor exportador de crudo del mundo. Su Puerto —uno de los más activos del Golfo de México— y la proximidad a la Refinería Francisco I. Madero en Ciudad Madero generan riesgos HAZMAT de primera magnitud. La Laguna del Carpintero, ecosistema urbano único en México, y el río Pánuco requieren capacidades de rescate acuático permanentes.",
    zonasCobertura: [
      "Centro Histórico de Tampico",
      "Puerto de Tampico",
      "Laguna del Carpintero",
      "Col. Petrolera",
      "Zona portuaria industrial",
      "Puente Tampico sobre el Pánuco"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 80,
    personalActivo: 80,
    unidades: 10,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "1 Unidad HAZMAT Petroquímica",
      "1 Escalera Telescópica 28m",
      "2 Lanchas Rescate Acuático",
      "2 Unidades de Rescate",
      "1 Ambulancia ALS"
    ]
  },
  // ─── TAMPICO AEROPUERTO (ARFF) ────────────────────────────────────────────────
  {
    id: "tam-tampico-aeropuerto",
    slug: "tam-tampico-aeropuerto",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Aeropuerto Internacional General Francisco Javier Mina",
    nombreCorto: "Estación Aeropuerto Tampico",
    direccion: "Aeropuerto Internacional Gral. F.J. Mina, Acceso Aeropuerto s/n",
    colonia: "Zona Aeroportuaria",
    codigoPostal: "89339",
    municipio: "Altamira",
    ciudad: "Tampico",
    telefono: "833 228 0014",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate y extinción de incendios en aeronaves (ARFF)",
      "Control de derrames de combustible Jet A-1 en pistas",
      "Evacuación de emergencia de pasajeros",
      "Primeros auxilios y atención médica aeronáutica",
      "Incendios en instalaciones aeroportuarias",
      "Coordinación con torre de control y ASA"
    ],
    especialidades: [
      "ARFF Categoría 6 ICAO — Aeropuerto Internacional",
      "Control de incendios con foam/espuma en pistas",
      "Evacuación de aeronaves de pasajeros y carga"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2961, lng: -97.8659 },
    descripcion: "El Aeropuerto Internacional General Francisco Javier Mina de Tampico es el principal hub aéreo del sur de Tamaulipas, operando vuelos regulares y chárter hacia destinos nacionales e internacionales, además de vuelos ejecutivos para la industria petrolera del Golfo de México. La estación ARFF opera bajo estándar ICAO Categoría 6 y da cobertura a los helicópteros que sirven a las plataformas petroleras offshore.",
    zonasCobertura: [
      "Aeropuerto Internacional Tampico",
      "Pistas y plataformas aeroportuarias",
      "Terminal de pasajeros",
      "Hangares de aviación ejecutiva"
    ],
    tiempoRespuesta: "3 minutos (ICAO)",
    personal: 32,
    personalActivo: 32,
    unidades: 5,
    unidadesDisponibles: [
      "2 Camiones ARFF Espuma (Oshkosh Striker)",
      "1 Unidad Rescate Aeronáutico",
      "1 Ambulancia ALS Aeronáutica",
      "1 Pick-up Primer Respuesta"
    ]
  },
  // ─── CIUDAD MADERO (Refinería PEMEX Francisco I. Madero) ─────────────────────
  {
    id: "tam-ciudad-madero",
    slug: "tam-ciudad-madero",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Ciudad Madero",
    nombreCorto: "Estación Ciudad Madero",
    direccion: "Blvd. Morelos 1200",
    colonia: "Centro",
    codigoPostal: "89400",
    municipio: "Ciudad Madero",
    ciudad: "Ciudad Madero",
    telefono: "833 215 4800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en Refinería Francisco I. Madero (PEMEX-DEER)",
      "HAZMAT refinación: gasolina, diésel, naftas, H₂S, amoniaco",
      "Control de fugas y derrames en instalaciones de proceso",
      "Espumas AFFF para incendios en grandes tanques de crudo",
      "Rescate industrial en espacios confinados",
      "Coordinación con brigadas contraincendios PEMEX",
      "Emergencias en zona petroquímica anexa",
      "Incendios estructurales en zona residencial petrolera"
    ],
    especialidades: [
      "Refinería PEMEX Francisco I. Madero (190,000 bbl/día)",
      "HAZMAT Refinación — petrolíferos y petroquímicos",
      "Espumas AFFF para grandes incendios de tanques",
      "Coordinación brigadas PEMEX Refinación"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2706, lng: -97.8374 },
    descripcion: "Ciudad Madero alberga la Refinería Francisco I. Madero de PEMEX, una de las más grandes de México con capacidad de procesar 190,000 barriles diarios de crudo. Esta refinería, ubicada a orillas del Golfo de México, procesa crudo pesado Maya y genera productos como gasolina, diésel, turbosina y petroquímicos. Los bomberos de Ciudad Madero trabajan en coordinación permanente con las brigadas contraincendios propias de PEMEX Refinación y están certificados al más alto nivel en incendios de hidrocarburos.",
    zonasCobertura: [
      "Refinería PEMEX Francisco I. Madero",
      "Zona petroquímica anexa",
      "Col. Petrolera Ciudad Madero",
      "Zona residencial del personal PEMEX",
      "Puerto de Altamira zona sur"
    ],
    tiempoRespuesta: "4-7 minutos",
    personal: 65,
    personalActivo: 65,
    unidades: 8,
    unidadesDisponibles: [
      "2 Camiones Industriales Espuma AFFF",
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Refinación",
      "1 Camión Cisterna 12,000L",
      "1 Unidad Rescate Industrial",
      "1 Ambulancia"
    ]
  },
  // ─── ALTAMIRA (Puerto Industrial — BASF, Celanese, Vitro) ────────────────────
  {
    id: "tam-altamira",
    slug: "tam-altamira",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Altamira — Puerto Industrial",
    nombreCorto: "Estación Altamira Puerto Industrial",
    direccion: "Av. Plutarco Elías Calles 800",
    colonia: "Centro",
    codigoPostal: "89600",
    municipio: "Altamira",
    ciudad: "Altamira",
    telefono: "833 260 3200",
    telefonoEmergencia: "911",
    servicios: [
      "HAZMAT en Complejo Petroquímico de Altamira (BASF, Celanese)",
      "Control de incendios en el Puerto Industrial de Altamira",
      "Emergencias en buques tanque y cisternas de amoniaco",
      "Control de derrames químicos en zona portuaria",
      "Incendios en plantas de Vitro, Pemex Petroquímica y Braskem",
      "Rescate industrial en torres de destilación",
      "Coordinación con SEMAR ante emergencias marítimas costeras",
      "Espumas AFFF para incendios en tanques de almacenamiento"
    ],
    especialidades: [
      "Puerto Industrial Altamira: top 3 industrial de México (BASF, Celanese, Vitro)",
      "HAZMAT Químico máxima complejidad: ácido acético, metanol, amoniaco",
      "Incendios en buques tanque y plataformas de carga química",
      "Coordinación SEMAR emergencias Golfo de México"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.4011, lng: -97.9286 },
    descripcion: "El Puerto Industrial de Altamira es uno de los tres principales puertos industriales de México y el más activo del Golfo en movimiento de carga química y petroquímica. BASF (la mayor planta química privada de México), Celanese (ácido acético y acetato de vinilo), Vitro (sosa cáustica), Braskem, PEMEX Petroquímica y decenas de plantas hacen de Altamira uno de los mayores riesgos HAZMAT del país. Los bomberos de Altamira poseen certificación HAZMAT nivel A en productos químicos industriales.",
    zonasCobertura: [
      "Puerto Industrial Altamira",
      "Complejo Petroquímico Altamira",
      "Plantas BASF, Celanese, Vitro, Braskem",
      "Muelles de carga química",
      "Zona portuaria Golfo de México"
    ],
    tiempoRespuesta: "5-9 minutos",
    personal: 70,
    personalActivo: 70,
    unidades: 9,
    unidadesDisponibles: [
      "2 Camiones HAZMAT Químico Nivel A",
      "2 Autobombas Industriales",
      "1 Camión Cisterna 15,000L",
      "1 Unidad Espuma AFFF",
      "1 Unidad Rescate Industrial",
      "1 Ambulancia Industrial",
      "1 Pick-up Mando"
    ]
  },
  // ─── RÍO BRAVO (Valle Bajo del Río Bravo / Agrícola) ─────────────────────────
  {
    id: "tam-rio-bravo",
    slug: "tam-rio-bravo",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Río Bravo",
    nombreCorto: "Estación Río Bravo",
    direccion: "Calle Benito Juárez 400",
    colonia: "Centro",
    codigoPostal: "88900",
    municipio: "Río Bravo",
    ciudad: "Río Bravo",
    telefono: "899 934 0300",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales y residenciales",
      "Rescate acuático en canales de riego del Valle Bajo",
      "Incendios en cultivos de sorgo, maíz y caña de azúcar",
      "Control de fugas de gas LP y agroquímicos",
      "Rescate vehicular en carreteras del valle",
      "Primeros auxilios en comunidades rurales"
    ],
    especialidades: [
      "Incendios agroindustriales en zona sorguera",
      "Rescate en canales del sistema de riego del Valle Bajo"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26, lng: -98.0833 },
    descripcion: "Río Bravo es el corazón agrícola del Valle Bajo del Río Bravo, zona de intensa producción de sorgo, maíz y caña de azúcar irrigada por un extenso sistema de canales provenientes del Río Bravo/Grande. La estación atiende a la segunda ciudad en importancia del municipio de Río Bravo, cubriendo tanto el entorno urbano como las vastas extensiones agrícolas del valle.",
    zonasCobertura: [
      "Ciudad de Río Bravo",
      "Valle Bajo del Río Bravo",
      "Sistema de canales de riego",
      "Comunidades rurales del municipio",
      "Carreteras Reynosa-Matamoros"
    ],
    tiempoRespuesta: "6-12 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Agrícola 4x4",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── CAMARGO (Frontera Roma TX / Presa Falcón) ────────────────────────────────
  {
    id: "tam-camargo",
    slug: "tam-camargo",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Camargo",
    nombreCorto: "Estación Camargo",
    direccion: "Calle Hidalgo 220",
    colonia: "Centro",
    codigoPostal: "88700",
    municipio: "Camargo",
    ciudad: "Ciudad Camargo",
    telefono: "891 720 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en Presa Internacional Falcón",
      "Incendios estructurales y residenciales",
      "Emergencias en cruce internacional hacia Roma TX",
      "Rescate vehicular en carreteras",
      "Incendios en matorral y vegetación árida",
      "Primeros auxilios en zona fronteriza"
    ],
    especialidades: [
      "Rescate acuático en Presa Internacional Falcón (superficie >400 km²)",
      "Operaciones de emergencia en zona fronteriza Roma TX"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.3167, lng: -98.8333 },
    descripcion: "Ciudad Camargo, a orillas de la Presa Internacional Falcón —que comparte México y Texas como reservorio del Río Bravo/Grande—, es un punto estratégico fronterizo con el cruce hacia Roma, Texas. La inmensa presa Falcón, con más de 400 km² de superficie, requiere operaciones de rescate acuático especializadas. La zona también cuenta con extensa actividad ganadera y agrícola.",
    zonasCobertura: [
      "Ciudad Camargo",
      "Presa Internacional Falcón",
      "Cruce fronterizo Roma TX",
      "Comunidades ribereñas del Río Bravo"
    ],
    tiempoRespuesta: "7-15 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha Rescate Acuático (Presa Falcón)",
      "1 Ambulancia"
    ]
  },
  // ─── MIGUEL ALEMÁN (Frontera Internacional Roma TX) ──────────────────────────
  {
    id: "tam-miguel-aleman",
    slug: "tam-miguel-aleman",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Miguel Alemán",
    nombreCorto: "Estación Miguel Alemán",
    direccion: "Av. Juárez 80",
    colonia: "Centro",
    codigoPostal: "88780",
    municipio: "Miguel Alemán",
    ciudad: "Ciudad Miguel Alemán",
    telefono: "893 732 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Emergencias en puente internacional hacia Roma TX",
      "Incendios estructurales y residenciales",
      "Rescate acuático en el río Bravo/Grande",
      "Rescate vehicular en carreteras fronterizas",
      "Primeros auxilios y traslados de urgencia",
      "Control de fugas de gas LP"
    ],
    especialidades: [
      "Rescate fluvial Río Bravo en cruce fronterizo",
      "Coordinación con Roma TX Fire Department"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.4042, lng: -99.0217 },
    descripcion: "Ciudad Miguel Alemán es un municipio fronterizo frente a Roma, Texas, con un activo puente internacional para cruce comercial y de personas. Su posición estratégica sobre el Río Bravo requiere capacidades de rescate fluvial y coordinación con las autoridades de emergencias del condado de Starr, Texas.",
    zonasCobertura: [
      "Ciudad Miguel Alemán",
      "Puente Internacional Miguel Alemán-Roma TX",
      "Río Bravo/Grande tramo fronterizo",
      "Comunidades rurales del municipio"
    ],
    tiempoRespuesta: "8-16 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha de Rescate Fluvial",
      "1 Ambulancia"
    ]
  },
  // ─── SAN FERNANDO (Corredor Carretero / Ganadería) ───────────────────────────
  {
    id: "tam-san-fernando",
    slug: "tam-san-fernando",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de San Fernando",
    nombreCorto: "Estación San Fernando",
    direccion: "Calle Zaragoza 110",
    colonia: "Centro",
    codigoPostal: "87600",
    municipio: "San Fernando",
    ciudad: "San Fernando",
    telefono: "841 842 0200",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate vehicular en la Carretera Federal 101 (Victoria-Matamoros)",
      "Incendios en pastizales y matorral ganadero",
      "Incendios estructurales y residenciales",
      "Control de fugas de gas LP y accidentes de pipa",
      "Primeros auxilios en zona rural de amplio municipio",
      "Apoyo en emergencias de la Laguna de San Andrés"
    ],
    especialidades: [
      "Rescate vehicular en corredor carretero federal",
      "Incendios en pastizales y matorral semiárido"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.85, lng: -98.15 },
    descripcion: "San Fernando es un municipio ganadero de gran extensión, surcado por la Carretera Federal 101 que conecta Ciudad Victoria con Matamoros. Su posición en este corredor carretero clave lo convierte en punto frecuente de atención a accidentes viales. El municipio también alberga la Laguna de San Andrés, área natural protegida de gran importancia ecológica en la costa tamaulipeca.",
    zonasCobertura: [
      "San Fernando cabecera",
      "Carretera Federal 101 tramo Victoria-Matamoros",
      "Zona ganadera del municipio",
      "Laguna de San Andrés",
      "Comunidades rurales del municipio"
    ],
    tiempoRespuesta: "8-18 minutos",
    personal: 26,
    personalActivo: 26,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Forestal/Ganadero",
      "1 Ambulancia"
    ]
  },
  // ─── CIUDAD MANTE (Agroindustria Azucarera) ──────────────────────────────────
  {
    id: "tam-ciudad-mante",
    slug: "tam-ciudad-mante",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Ciudad Mante",
    nombreCorto: "Estación Ciudad Mante",
    direccion: "Av. Constitución 560",
    colonia: "Centro",
    codigoPostal: "89800",
    municipio: "El Mante",
    ciudad: "Ciudad Mante",
    telefono: "831 232 0800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en Ingenio Azucarero El Mante y cañaverales",
      "HAZMAT en destilería de alcohol y planta azucarera",
      "Incendios estructurales y residenciales",
      "Rescate vehicular en carreteras del sur de TAM",
      "Control de fugas de gas LP e industriales",
      "Primeros auxilios en zona agroindustrial",
      "Incendios forestales en estribaciones de la Sierra"
    ],
    especialidades: [
      "Incendios agroindustriales azucareros",
      "HAZMAT en destilería de alcohol industrial"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.74, lng: -98.97 },
    descripcion: "Ciudad Mante es la capital agroindustrial del sur de Tamaulipas, con el Ingenio Azucarero El Mante como mayor empresa de la región y uno de los más importantes del noreste de México. La zafra cañera (noviembre a mayo) genera riesgos específicos de incendios en los cañaverales y en la destilería de alcohol adyacente. La ciudad es también punto de acceso a las estribaciones de la Sierra Madre Oriental.",
    zonasCobertura: [
      "Ciudad Mante",
      "Ingenio Azucarero El Mante",
      "Zona cañera del municipio",
      "Carretera Mante-Victoria",
      "Estribaciones sierra sur TAM"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 36,
    personalActivo: 36,
    unidades: 4,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Pick-up Forestal 4x4",
      "1 Ambulancia"
    ]
  },
  // ─── TAMPICO NORTE (Conurbación Tampico-Madero-Altamira) ─────────────────────
  {
    id: "tam-tampico-norte",
    slug: "tam-tampico-norte",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Tampico Norte",
    nombreCorto: "Estación Tampico Norte",
    direccion: "Blvd. Adolfo López Mateos 4500",
    colonia: "Las Flores",
    codigoPostal: "89340",
    municipio: "Tampico",
    ciudad: "Tampico",
    telefono: "833 213 7700",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona norte de Tampico",
      "HAZMAT en corredor industrial Tampico-Altamira",
      "Rescate vehicular en Blvd. López Mateos",
      "Control de fugas de gas industrial y doméstico",
      "Primeros auxilios en zona residencial norte",
      "Apoyo a zona portuaria industrial norte"
    ],
    especialidades: [
      "HAZMAT corredor industrial Tampico-Altamira",
      "Rescate en zona de crecimiento norte metropolitana"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.3106, lng: -97.8778 },
    descripcion: "La Estación Norte cubre el corredor de expansión entre Tampico y Altamira, zona de intenso crecimiento industrial y residencial que conecta los dos polos del conglomerado portuario del sur de Tamaulipas. Su posición estratégica entre la Refinería Francisco I. Madero y el Puerto Industrial de Altamira la convierte en una estación de apoyo clave para ambas instalaciones.",
    zonasCobertura: [
      "Zona norte de Tampico",
      "Corredor industrial Tampico-Altamira",
      "Fraccionamientos del norte metropolitano",
      "Blvd. López Mateos tramo norte"
    ],
    tiempoRespuesta: "6-11 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Unidad HAZMAT Industrial",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── MATAMOROS INDUSTRIAL (Valle Hermoso / Maquiladoras Sur) ─────────────────
  {
    id: "tam-matamoros-industrial",
    slug: "tam-matamoros-industrial",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Matamoros Industrial",
    nombreCorto: "Estación Matamoros Industrial",
    direccion: "Blvd. Lauro Villar 3200",
    colonia: "Parque Industrial",
    codigoPostal: "87346",
    municipio: "Matamoros",
    ciudad: "Heroica Matamoros",
    telefono: "868 813 5000",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en plantas automotrices Parque Industrial Sur",
      "HAZMAT lubricantes, pinturas y solventes automotrices",
      "Control de fugas de gas en subestaciones industriales",
      "Rescate industrial y atrapamientos en maquinaria",
      "Incendios en bodegas de aduanas Matamoros",
      "Apoyo a estación central en grandes emergencias"
    ],
    especialidades: [
      "Maquiladoras automotrices Sur: plásticos, cables, arneses",
      "HAZMAT Industrial electrónica y automotriz"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.8392, lng: -97.5296 },
    descripcion: "La Estación Industrial de Matamoros da cobertura al extenso Parque Industrial del sur, donde operan plantas proveedoras Tier-1 y Tier-2 de la industria automotriz mundial, fabricando arneses eléctricos, plásticos de ingeniería, sistemas de frenos y componentes electrónicos para las principales marcas de automóviles del mundo.",
    zonasCobertura: [
      "Parque Industrial Matamoros Sur",
      "Plantas automotrices Tier-1 y Tier-2",
      "Zona de bodegas y logística fronteriza",
      "Corredor industrial carretera Matamoros-Reynosa"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Automotriz",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── LINARES (Sierra Madre / Reserva El Cielo) ────────────────────────────────
  {
    id: "tam-linares",
    slug: "tam-linares",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Linares",
    nombreCorto: "Estación Linares",
    direccion: "Av. Madero Oriente 340",
    colonia: "Centro",
    codigoPostal: "67700",
    municipio: "Linares",
    ciudad: "Linares",
    telefono: "821 212 0300",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate en zonas montañosas Sierra Madre Oriental",
      "Incendios forestales en bosques de niebla (Reserva El Cielo)",
      "Incendios estructurales y residenciales",
      "Rescate vehicular en carreteras de montaña",
      "Control de deslaves en época de lluvias",
      "Primeros auxilios en zona turística y serrana"
    ],
    especialidades: [
      "Incendios forestales en zona de bosque de niebla (Reserva El Cielo)",
      "Rescate técnico en terreno montañoso Sierra Madre"
    ],
    horario: "24 horas",
    coordenadas: { lat: 24.8628, lng: -99.5706 },
    descripcion: "Linares es la puerta de entrada a la Reserva de la Biósfera El Cielo, la única zona de bosque de niebla (cloud forest) del noreste de México, declarada reserva de la biosfera UNESCO. Sus bomberos están especializados en incendios forestales en la Sierra Madre Oriental y en rescate de montaña, cubriendo los cañones, cascadas y senderos ecoturísticos que cada año atraen a miles de visitantes.",
    zonasCobertura: [
      "Linares cabecera",
      "Reserva de la Biósfera El Cielo",
      "Sierra Madre Oriental zona sureste TAM",
      "Zona turística Gómez Farías",
      "Carreteras serranas Linares-Ciudad Victoria"
    ],
    tiempoRespuesta: "7-15 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Forestal 4x4",
      "1 Unidad Rescate Técnico Montaña",
      "1 Ambulancia"
    ]
  },
  // ─── SOTO LA MARINA (Costa del Golfo / Pesca) ────────────────────────────────
  {
    id: "tam-soto-la-marina",
    slug: "tam-soto-la-marina",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos de Soto La Marina",
    nombreCorto: "Estación Soto la Marina",
    direccion: "Calle Guerrero 55",
    colonia: "Centro",
    codigoPostal: "87550",
    municipio: "Soto la Marina",
    ciudad: "Soto la Marina",
    telefono: "841 860 0200",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en el río Soto la Marina y Laguna Morales",
      "Incendios en comunidades pesqueras costeras",
      "Emergencias en embarcaciones en la boca del río",
      "Incendios estructurales y residenciales",
      "Primeros auxilios en zona costera",
      "Apoyo ante ciclones tropicales en costa tamaulipeca"
    ],
    especialidades: [
      "Rescate acuático en Laguna Madre tamaulipeca",
      "Respuesta ante ciclones en costa del Golfo de México"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.7761, lng: -98.2028 },
    descripcion: "Soto la Marina, a orillas del río homónimo y próxima a la Laguna Madre —el estuario hipersalino más importante del norte del Golfo de México—, combina vocación pesquera y agrícola. Su posición costera la expone al paso de huracanes y ciclones tropicales durante la temporada junio-noviembre, requiriendo preparación permanente para evacuaciones y rescates en inundaciones costeras.",
    zonasCobertura: [
      "Soto la Marina cabecera",
      "Laguna Madre tamaulipeca",
      "Boca del río Soto la Marina",
      "Comunidades pesqueras costeras",
      "Costa norte del Golfo de México"
    ],
    tiempoRespuesta: "8-18 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha Rescate Acuático",
      "1 Ambulancia"
    ]
  },
  // ─── CIUDAD VICTORIA NORTE (Zona Industrial) ─────────────────────────────────
  {
    id: "tam-victoria-norte",
    slug: "tam-victoria-norte",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Victoria Norte",
    nombreCorto: "Estación Victoria Norte",
    direccion: "Blvd. Praxédis Balboa 2400",
    colonia: "Parque Industrial",
    codigoPostal: "87140",
    municipio: "Victoria",
    ciudad: "Ciudad Victoria",
    telefono: "834 316 0800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en parque industrial norte de Ciudad Victoria",
      "HAZMAT en transporte de carga carretera 101",
      "Rescate vehicular en autopista Victoria-Monterrey",
      "Incendios en universidades e instituciones del norte",
      "Control de fugas de gas y materiales peligrosos",
      "Apoyo a estación central en grandes emergencias"
    ],
    especialidades: [
      "Rescate en autopista Victoria-Monterrey (tráfico pesado)",
      "HAZMAT transporte carretero en corredor noreste"
    ],
    horario: "24 horas",
    coordenadas: { lat: 23.76, lng: -99.12 },
    descripcion: "La Estación Norte de Ciudad Victoria cubre la zona de crecimiento industrial y universitario al norte de la capital, incluyendo el Parque Industrial y el tramo urbano de la autopista que une Victoria con Monterrey, uno de los corredores carreteros de mayor tráfico pesado del noreste mexicano.",
    zonasCobertura: [
      "Parque Industrial Ciudad Victoria Norte",
      "Zona universitaria norte",
      "Autopista Victoria-Monterrey tramo urbano",
      "Fraccionamientos norte de Victoria"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 4,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── REYNOSA AEROPUERTO (ARFF) ───────────────────────────────────────────────
  {
    id: "tam-reynosa-aeropuerto",
    slug: "tam-reynosa-aeropuerto",
    estado: "Tamaulipas",
    nombre: "Estación de Bomberos Aeropuerto Internacional General Lucio Blanco",
    nombreCorto: "Estación Aeropuerto Reynosa",
    direccion: "Aeropuerto Internacional Gral. Lucio Blanco, s/n",
    colonia: "Zona Aeroportuaria",
    codigoPostal: "88614",
    municipio: "Reynosa",
    ciudad: "Reynosa",
    telefono: "899 921 0024",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate y extinción de incendios en aeronaves (ARFF)",
      "Control de derrames de combustible de aviación (Jet A-1)",
      "Evacuación de emergencia de pasajeros y tripulación",
      "Primeros auxilios y atención médica aeronáutica",
      "Incendios en instalaciones aeroportuarias",
      "Coordinación con torre de control y operaciones"
    ],
    especialidades: [
      "ARFF Categoría 6 ICAO — Aeropuerto Internacional",
      "Vuelos privados industria maquiladora y PEMEX",
      "Control de espuma AFFF en pistas Reynosa"
    ],
    horario: "24 horas",
    coordenadas: { lat: 26.0089, lng: -98.2285 },
    descripcion: "El Aeropuerto Internacional General Lucio Blanco de Reynosa es clave para la operación de la industria maquiladora y las empresas multinacionales instaladas en el corredor fronterizo Reynosa-McAllen. Opera bajo categoría ARFF 6 ICAO y maneja vuelos privados y ejecutivos, además de vuelos comerciales regulares hacia el centro del país.",
    zonasCobertura: [
      "Aeropuerto Internacional Reynosa",
      "Pistas y plataformas aeroportuarias",
      "Terminal de pasajeros y carga",
      "Hangares de aviación ejecutiva"
    ],
    tiempoRespuesta: "3 minutos (ICAO)",
    personal: 28,
    personalActivo: 28,
    unidades: 4,
    unidadesDisponibles: [
      "2 Camiones ARFF Espuma",
      "1 Unidad Rescate Aeronáutico",
      "1 Ambulancia ALS"
    ]
  }
];
function getEstacionBySlug(slug) {
  return estacionesTamaulipas.find((e) => e.slug === slug);
}
function getMunicipios() {
  return [...new Set(estacionesTamaulipas.map((e) => e.municipio))];
}
function getEstacionesCercanas(slug, limit = 3) {
  return estacionesTamaulipas.filter((e) => e.slug !== slug).slice(0, limit);
}

export { ESTADISTICAS_TAMAULIPAS as E, getEstacionesCercanas as a, getMunicipios as b, estacionesTamaulipas as e, getEstacionBySlug as g };
