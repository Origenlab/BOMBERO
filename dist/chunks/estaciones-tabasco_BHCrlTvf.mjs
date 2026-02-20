const ESTADISTICAS_TABASCO = {
  municipios_cubiertos: 17
};
const estacionesTabasco = [
  // ─── VILLAHERMOSA — CENTRO (Capital del Estado) ─────────────────────────────
  {
    id: "tab-villahermosa-central",
    slug: "tab-villahermosa-central",
    estado: "Tabasco",
    nombre: "Estación Central de Bomberos de Villahermosa",
    nombreCorto: "Estación Central Villahermosa",
    direccion: "Calle Méndez 501",
    colonia: "Centro",
    codigoPostal: "86000",
    municipio: "Centro",
    ciudad: "Villahermosa",
    telefono: "993 315 3700",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales de alta complejidad",
      "Materiales peligrosos industriales HAZMAT nivel A/B",
      "Rescate en inundaciones y crecidas de ríos",
      "Rescate vehicular y atrapamientos",
      "Control de fugas de gas e hidrocarburos",
      "Rescate en altura y edificios corporativos",
      "Coordinación estatal de emergencias y Protección Civil",
      "Servicio prehospitalario avanzado (ALS)",
      "Apoyo en operativos por desbordamiento del río Grijalva"
    ],
    especialidades: [
      "Centro Estatal de Coordinación de Emergencias PEMEX",
      "HAZMAT Hidrocarburos: crudo, gas natural, H₂S",
      "Rescate acuático fluvial Grijalva/Carrizal",
      "Respuesta a inundaciones catastróficas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.9869, lng: -92.9303 },
    descripcion: "La Estación Central de Villahermosa es la sede principal del H. Cuerpo de Bomberos de Tabasco y el nodo de coordinación para toda la red estatal de emergencias. Ubicada en el corazón de la capital, cuenta con la mayor dotación de personal y equipo del estado, especializada en respuesta a incendios industriales relacionados con la industria petrolera y en operaciones de rescate acuático ante las frecuentes inundaciones que afectan a la región del sureste mexicano.",
    zonasCobertura: [
      "Centro Histórico de Villahermosa",
      "Col. Atasta",
      "Col. Tamulté de las Sábanas",
      "Col. Lindavista",
      "Zona PEMEX Villahermosa",
      "Col. Gaviotas"
    ],
    tiempoRespuesta: "4-7 minutos",
    personal: 95,
    personalActivo: 95,
    unidades: 12,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "2 Unidades HAZMAT Hidrocarburos",
      "2 Unidades de Rescate Acuático",
      "1 Escalera Telescópica 28m",
      "2 Ambulancias ALS",
      "1 Unidad de Mando Móvil",
      "1 Pick-up Forestal"
    ]
  },
  // ─── VILLAHERMOSA NORTE (Zona Industrial/PEMEX) ──────────────────────────────
  {
    id: "tab-villahermosa-norte",
    slug: "tab-villahermosa-norte",
    estado: "Tabasco",
    nombre: "Estación de Bomberos Villahermosa Norte",
    nombreCorto: "Estación Villahermosa Norte",
    direccion: "Blvd. Grijalva Norte 2800",
    colonia: "Villas del Lago",
    codigoPostal: "86190",
    municipio: "Centro",
    ciudad: "Villahermosa",
    telefono: "993 316 0200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en instalaciones industriales PEMEX",
      "Control de derrames de hidrocarburos",
      "HAZMAT emergencias con H₂S gas sulfhídrico",
      "Rescate industrial y confinados",
      "Incendios en parques industriales",
      "Atención a emergencias en oleoductos y gasoductos",
      "Rescate en inundaciones zona norte"
    ],
    especialidades: [
      "HAZMAT Petroquímico nivel industrial",
      "Respuesta a derrames de crudo y gas",
      "Emergencias en instalaciones PEMEX Exploración y Producción"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.0201, lng: -92.9147 },
    descripcion: "La Estación Norte de Villahermosa cubre la zona industrial donde se concentran las principales instalaciones de PEMEX Exploración y Producción en Tabasco. Su personal está altamente especializado en atención a emergencias con hidrocarburos, derrames de crudo y situaciones de riesgo con gas sulfhídrico (H₂S), uno de los principales riesgos industriales de la región petrolera tabasqueña.",
    zonasCobertura: [
      "Zona Industrial Norte Villahermosa",
      "Instalaciones PEMEX E&P",
      "Col. Villas del Lago",
      "Fraccionamiento Lomas de Ocuiltzapotlán",
      "Laguna de las Ilusiones zona norte"
    ],
    tiempoRespuesta: "5-9 minutos",
    personal: 55,
    personalActivo: 55,
    unidades: 7,
    unidadesDisponibles: [
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Petroquímica",
      "1 Camión Cisterna 10,000L",
      "1 Unidad de Rescate",
      "1 Ambulancia",
      "1 Pick-up de Mando"
    ]
  },
  // ─── VILLAHERMOSA AEROPUERTO (ARFF) ─────────────────────────────────────────
  {
    id: "tab-villahermosa-aeropuerto",
    slug: "tab-villahermosa-aeropuerto",
    estado: "Tabasco",
    nombre: "Estación de Bomberos Aeropuerto Internacional Carlos Rovirosa Pérez",
    nombreCorto: "Estación Aeropuerto Villahermosa",
    direccion: "Aeropuerto Internacional Carlos A. Rovirosa Pérez, Km 13.5",
    colonia: "Ranchería Coronel Traconis",
    codigoPostal: "86280",
    municipio: "Centro",
    ciudad: "Villahermosa",
    telefono: "993 356 0032",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate y extinción de incendios en aeronaves (ARFF)",
      "Incendios en instalaciones aeroportuarias",
      "Primeros auxilios y atención médica de urgencias",
      "Control de derrames de combustible de aviación (Jet A-1)",
      "Evacuación de emergencia de pasajeros",
      "Coordinación con torre de control y ASA"
    ],
    especialidades: [
      "ARFF Categoría 6 ICAO — Aeropuerto Internacional",
      "Control de incendios con foam/espuma en pistas",
      "Evacuación masiva de aeronaves comerciales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.9964, lng: -92.8173 },
    descripcion: "La estación de bomberos del Aeropuerto Internacional Carlos A. Rovirosa Pérez opera con categoría ARFF Categoría 6 ICAO, brindando cobertura a uno de los aeropuertos más importantes del sureste mexicano. El aeropuerto es el principal hub aéreo de Tabasco y punto de entrada para los ingenieros y trabajadores de la industria petrolera de PEMEX, lo que implica una alta frecuencia de vuelos regulares y chárter del sector energético.",
    zonasCobertura: [
      "Aeropuerto Internacional Carlos Rovirosa Pérez",
      "Pistas y plataformas aeroportuarias",
      "Terminal de pasajeros",
      "Zonas de hangares",
      "Accesos carreteros aeropuerto"
    ],
    tiempoRespuesta: "3 minutos (ICAO)",
    personal: 35,
    personalActivo: 35,
    unidades: 5,
    unidadesDisponibles: [
      "2 Camiones ARFF espuma (Oshkosh Striker)",
      "1 Unidad de Rescate Aeronáutico",
      "1 Ambulancia ALS aeronáutica",
      "1 Pick-up de Primer Respuesta"
    ]
  },
  // ─── CÁRDENAS (Chontalpa) ────────────────────────────────────────────────────
  {
    id: "tab-cardenas",
    slug: "tab-cardenas",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Cárdenas",
    nombreCorto: "Estación Cárdenas",
    direccion: "Calle 5 de Mayo 110",
    colonia: "Centro",
    codigoPostal: "86500",
    municipio: "Cárdenas",
    ciudad: "Cárdenas",
    telefono: "937 372 0600",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en plantaciones de caña de azúcar",
      "Atención a emergencias en el Ingenio Santa Rosalía",
      "HAZMAT fugas de gas LP en zona urbana y rural",
      "Rescate en inundaciones de la llanura Chontalpa",
      "Incendios estructurales y residenciales",
      "Rescate vehicular en carreteras principales",
      "Apoyo a comunidades rurales del municipio"
    ],
    especialidades: [
      "Incendios forestales y agroindustriales",
      "Respuesta a inundaciones llanura costera",
      "Atención a emergencias en zona cañera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.9884, lng: -91.4272 },
    descripcion: "La Estación de Bomberos de Cárdenas atiende el segundo municipio más poblado de Tabasco, ubicado en la fértil llanura de la Chontalpa. La región es el principal productor de caña de azúcar y ganado del estado, con el Ingenio Santa Rosalía como mayor empresa de la zona. La estación está preparada para atender incendios en cañaverales, que durante la temporada de zafra representan uno de los principales riesgos de la región.",
    zonasCobertura: [
      "Ciudad de Cárdenas",
      "Llanura de la Chontalpa",
      "Zona cañera del municipio",
      "Comunidades rurales Cárdenas",
      "Carretera federal 180 tramo Cárdenas"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Pick-up Forestal/Agrícola",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── COMALCALCO (Cacao #1 México) ────────────────────────────────────────────
  {
    id: "tab-comalcalco",
    slug: "tab-comalcalco",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Comalcalco",
    nombreCorto: "Estación Comalcalco",
    direccion: "Av. Insurgentes 320",
    colonia: "Centro",
    codigoPostal: "86300",
    municipio: "Comalcalco",
    ciudad: "Comalcalco",
    telefono: "933 334 1280",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en haciendas cacaoteras y beneficios de cacao",
      "Rescate en inundaciones y ríos de la zona costera",
      "Incendios estructurales urbanos y rurales",
      "Atención a emergencias en Zona Arqueológica Comalcalco",
      "HAZMAT fugas de gas en procesadoras de chocolate",
      "Rescate vehicular en carreteras",
      "Apoyo en temporada de inundaciones costeras"
    ],
    especialidades: [
      "Protección patrimonio arqueológico Maya en emergencias",
      "Rescate acuático en zona costera y manglar",
      "Incendios en industria cacaotera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.2779, lng: -93.2044 },
    descripcion: "Comalcalco es la capital mundial del cacao tabasqueño y el principal productor de cacao de México. La Estación de Bomberos de Comalcalco protege las icónicas haciendas cacaoteras y chocolateras de la región, incluyendo grandes marcas como Turín y Chocolates La Joya. Además, custodia la célebre Zona Arqueológica Comalcalco, único sitio Maya construido en ladrillo cocido, de gran valor histórico y turístico.",
    zonasCobertura: [
      "Ciudad de Comalcalco",
      "Zona Arqueológica Comalcalco",
      "Haciendas cacaoteras del municipio",
      "Zona costera y manglar",
      "Comunidades rurales de Comalcalco"
    ],
    tiempoRespuesta: "6-11 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 4,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Lancha de Rescate Acuático",
      "1 Ambulancia"
    ]
  },
  // ─── MACUSPANA (Campos Gas PEMEX) ────────────────────────────────────────────
  {
    id: "tab-macuspana",
    slug: "tab-macuspana",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Macuspana",
    nombreCorto: "Estación Macuspana",
    direccion: "Av. Benito Juárez 440",
    colonia: "Centro",
    codigoPostal: "86740",
    municipio: "Macuspana",
    ciudad: "Macuspana",
    telefono: "936 362 0500",
    telefonoEmergencia: "911",
    servicios: [
      "HAZMAT en campos gasíferos PEMEX Macuspana",
      "Control de incendios y fugas de gas natural",
      "Atención a emergencias en pozos y plataformas terrestres",
      "Rescate en inundaciones llanura fluvial",
      "Control de derrames de hidrocarburo en campo",
      "Incendios estructurales urbanos",
      "Apoyo a brigadas PEMEX ante emergencias industriales"
    ],
    especialidades: [
      "HAZMAT Gas Natural de alta presión",
      "Emergencias en campos de producción PEMEX",
      "Rescate acuático fluvial Usumacinta"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.7643, lng: -92.5875 },
    descripcion: "Macuspana alberga los principales campos productores de gas natural de PEMEX en Tabasco, siendo una de las zonas de mayor producción gasífera del país. La Estación de Bomberos de Macuspana opera con personal altamente capacitado en emergencias con hidrocarburos gaseosos y cuenta con equipo especializado para atender incidentes en los múltiples pozos, gasoductos e instalaciones de procesamiento que salpican su territorio.",
    zonasCobertura: [
      "Cabecera municipal de Macuspana",
      "Campos gasíferos PEMEX Macuspana",
      "Gasoductos zona noreste Tabasco",
      "Comunidades Chol del municipio",
      "Cuenca del río Usumacinta zona baja"
    ],
    tiempoRespuesta: "6-12 minutos",
    personal: 40,
    personalActivo: 40,
    unidades: 5,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad HAZMAT Gas",
      "1 Lancha de Rescate",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── TENOSIQUE (Frontera Guatemala/Usumacinta) ───────────────────────────────
  {
    id: "tab-tenosique",
    slug: "tab-tenosique",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Tenosique",
    nombreCorto: "Estación Tenosique",
    direccion: "Calle Corregidora 55",
    colonia: "Centro",
    codigoPostal: "86901",
    municipio: "Tenosique",
    ciudad: "Tenosique de Pino Suárez",
    telefono: "934 342 0345",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en el río Usumacinta",
      "Apoyo humanitario a migrantes en frontera Guatemala",
      "Rescate en selva tropical y zona de montaña",
      "Incendios en vegetación y selva",
      "Rescate vehicular en carreteras fronterizas",
      "Primeros auxilios y atención médica de urgencias",
      "Coordinación con autoridades migratorias y GN",
      "Apoyo en inundaciones ribereñas del Usumacinta"
    ],
    especialidades: [
      "Rescate acuático río Usumacinta internacional",
      "Operaciones humanitarias en corredor migratorio",
      "Rescate en selva y terreno irregular"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.4737, lng: -91.4243 },
    descripcion: "Tenosique es el municipio más oriental de Tabasco, fronterizo con Guatemala a través del majestuoso río Usumacinta —río más caudaloso de México y declarado patrimonio natural—. La estación desempeña un papel crucial en el apoyo humanitario a los flujos migratorios centroamericanos que atraviesan la región, en coordinación con el INM, Guardia Nacional y organizaciones de derechos humanos. El río Usumacinta requiere frecuentes operaciones de rescate acuático.",
    zonasCobertura: [
      "Tenosique de Pino Suárez",
      "Río Usumacinta y afluentes",
      "Frontera Tabasco-Guatemala",
      "Zona arqueológica Pomoná",
      "Comunidades selváticas del municipio"
    ],
    tiempoRespuesta: "8-15 minutos",
    personal: 32,
    personalActivo: 32,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "2 Lanchas de Rescate Fluvial",
      "1 Ambulancia"
    ]
  },
  // ─── PARAÍSO (Refinería Olmeca — Dos Bocas) ──────────────────────────────────
  {
    id: "tab-paraiso",
    slug: "tab-paraiso",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Paraíso — Dos Bocas",
    nombreCorto: "Estación Paraíso — Dos Bocas",
    direccion: "Av. Dos Bocas 890",
    colonia: "Fraccionamiento Pemex",
    codigoPostal: "86602",
    municipio: "Paraíso",
    ciudad: "Paraíso",
    telefono: "933 333 3900",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios industriales en Refinería Olmeca Dos Bocas",
      "Control de derrames de crudo en Terminal Marítima",
      "HAZMAT refinación: gasolina, diésel, turbosina, H₂S, amoniaco",
      "Rescate industrial en espacios confinados",
      "Control de fugas en ductos y líneas de proceso",
      "Espumas AFFF para incendios en tanques de almacenamiento",
      "Incendios en muelles y buques tanque",
      "Coordinación con brigadas contraincendios de PEMEX-DEER",
      "Emergencias ambientales por derrames costeros"
    ],
    especialidades: [
      "Refinería Olmeca — megaproyecto energético nacional",
      "HAZMAT Refinación nivel industrial máximo",
      "Espumas AFFF para grandes tanques hidrocarburos",
      "Control de derrames costeros Golfo de México",
      "Terminal marítima PEMEX exportaciones"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.4167, lng: -93.2167 },
    descripcion: "La Estación de Bomberos de Paraíso — Dos Bocas custodia uno de los proyectos energéticos más importantes en la historia de México: la Refinería Olmeca, inaugurada en 2023 con una inversión superior a 17,000 millones de dólares y una capacidad de refinar 340,000 barriles diarios de crudo. Esta megainstalación, ubicada en Dos Bocas sobre el Golfo de México, representa el mayor riesgo industrial del estado y exige una capacidad de respuesta de primer nivel mundial en incendios de hidrocarburos.",
    zonasCobertura: [
      "Refinería Olmeca Dos Bocas",
      "Terminal marítima PEMEX Dos Bocas",
      "Municipio de Paraíso",
      "Zona costera Golfo de México",
      "Comunidades pesqueras aledañas"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 60,
    personalActivo: 60,
    unidades: 8,
    unidadesDisponibles: [
      "2 Camiones Industriales Espuma AFFF",
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Refinación",
      "1 Camión Cisterna 15,000L",
      "1 Unidad de Rescate Industrial",
      "1 Ambulancia Industrial"
    ]
  },
  // ─── CENTLA (Pantanos de Centla / Usumacinta-Grijalva Delta) ────────────────
  {
    id: "tab-centla",
    slug: "tab-centla",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Centla",
    nombreCorto: "Estación Centla",
    direccion: "Av. Gregorio Méndez 200",
    colonia: "Centro",
    codigoPostal: "86720",
    municipio: "Centla",
    ciudad: "Frontera",
    telefono: "933 332 5010",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en Pantanos de Centla (Reserva de Biosfera)",
      "Rescate en delta Grijalva-Usumacinta",
      "Incendios en vegetación de manglar y tulares",
      "Emergencias en embarcaciones pesqueras del Golfo",
      "Rescate en inundaciones costeras",
      "HAZMAT derrames en zona costera y lagunar",
      "Coordinación con SEMAR en operaciones acuáticas",
      "Apoyo a pescadores en emergencias marinas"
    ],
    especialidades: [
      "Rescate acuático en humedales y pantanos",
      "Operaciones en la mayor reserva biósfera sureste México",
      "Incendios en ecosistemas de manglar",
      "Coordinación CONANP emergencias ambientales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.5467, lng: -92.6394 },
    descripcion: "La Estación de Centla opera en el corazón de los Pantanos de Centla, la Reserva de la Biósfera de humedales más grande del sureste mexicano y una de las más importantes de Latinoamérica. El municipio es completamente fluvial y lacustre, cruzado por el delta del Grijalva y el Usumacinta antes de su desembocadura en el Golfo de México. Sus bomberos están certificados en rescate acuático avanzado y operan con lanchas de motor en un entorno de canales, lagunas y pantanos.",
    zonasCobertura: [
      "Frontera, cabecera de Centla",
      "Pantanos de Centla — Reserva Biósfera",
      "Delta Grijalva-Usumacinta",
      "Lagunas del Carmen y Machona",
      "Zona costera Golfo de México Centla"
    ],
    tiempoRespuesta: "10-25 minutos",
    personal: 30,
    personalActivo: 30,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "2 Lanchas de Rescate Acuático",
      "1 Ambulancia"
    ]
  },
  // ─── NACAJUCA (Comunidades Chontal) ──────────────────────────────────────────
  {
    id: "tab-nacajuca",
    slug: "tab-nacajuca",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Nacajuca",
    nombreCorto: "Estación Nacajuca",
    direccion: "Calle Juárez 100",
    colonia: "Centro",
    codigoPostal: "86860",
    municipio: "Nacajuca",
    ciudad: "Nacajuca",
    telefono: "993 350 0180",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en comunidades Chontal",
      "Rescate en inundaciones frecuentes de la llanura",
      "Primeros auxilios en comunidades rurales e indígenas",
      "Control de fugas de gas y prevención de incendios",
      "Rescate vehicular en carreteras del municipio",
      "Apoyo a comunidades ante desbordamientos del Carrizal"
    ],
    especialidades: [
      "Atención multicultural — comunidades indígenas Chontal",
      "Rescate en llanuras inundables de alta frecuencia"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.1689, lng: -93.0997 },
    descripcion: "Nacajuca es el municipio con mayor concentración de población indígena Chontal (Yokot'an) de Tabasco, con comunidades que conservan lengua, tradiciones y arquitectura ancestral. La llanura de Nacajuca es de las más inundables del estado, con eventos recurrentes anuales. La estación ha desarrollado protocolos especiales de comunicación con comunidades hablantes de Chontal para garantizar una respuesta efectiva ante emergencias.",
    zonasCobertura: [
      "Nacajuca cabecera",
      "Comunidades Chontal del municipio",
      "Cuenca del río Carrizal",
      "Llanura inundable de Nacajuca"
    ],
    tiempoRespuesta: "7-14 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── CUNDUACÁN (PEMEX Complejo Procesador) ───────────────────────────────────
  {
    id: "tab-cunduacan",
    slug: "tab-cunduacan",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Cunduacán",
    nombreCorto: "Estación Cunduacán",
    direccion: "Calle Morelos 310",
    colonia: "Centro",
    codigoPostal: "86690",
    municipio: "Cunduacán",
    ciudad: "Cunduacán",
    telefono: "914 336 0750",
    telefonoEmergencia: "911",
    servicios: [
      "HAZMAT en Complejo Petroquímico Cunduacán PEMEX",
      "Control de incendios en instalaciones de proceso",
      "Emergencias con nitrógeno y productos petroquímicos",
      "Rescate industrial y espacios confinados",
      "Control de derrames en gasoductos y oleoductos",
      "Incendios estructurales en zona urbana",
      "Rescate en inundaciones locales"
    ],
    especialidades: [
      "HAZMAT Petroquímica Cunduacán",
      "Incendios en instalaciones de proceso gas-aceite",
      "Rescate industrial pesado"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.0669, lng: -93.1656 },
    descripcion: "Cunduacán alberga uno de los más importantes complejos de procesamiento de PEMEX en el sureste, parte del corredor petrolero que concentra buena parte de la infraestructura energética de Tabasco. La estación trabaja en estrecha coordinación con las brigadas contraincendios propias de PEMEX, actuando como primera respuesta externa ante cualquier incidente en las instalaciones de proceso, separación y transporte de hidrocarburos.",
    zonasCobertura: [
      "Cunduacán cabecera",
      "Complejo PEMEX Cunduacán",
      "Gasoductos zona occidente Tabasco",
      "Comunidades rurales del municipio"
    ],
    tiempoRespuesta: "6-11 minutos",
    personal: 35,
    personalActivo: 35,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad HAZMAT Petroquímica",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── JALPA DE MÉNDEZ (Agrícola) ─────────────────────────────────────────────
  {
    id: "tab-jalpa-mendez",
    slug: "tab-jalpa-mendez",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Jalpa de Méndez",
    nombreCorto: "Estación Jalpa de Méndez",
    direccion: "Av. Independencia 75",
    colonia: "Centro",
    codigoPostal: "86200",
    municipio: "Jalpa de Méndez",
    ciudad: "Jalpa de Méndez",
    telefono: "914 334 0400",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales y residenciales",
      "Rescate vehicular en carreteras federales",
      "Rescate en inundaciones de la llanura",
      "Control de fugas de gas LP",
      "Primeros auxilios y traslados médicos",
      "Incendios en cultivos de plátano y frutales"
    ],
    especialidades: [
      "Rescate en llanura inundable de la Chontalpa",
      "Atención a emergencias en zona bananera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 18.0956, lng: -93.0519 },
    descripcion: "Jalpa de Méndez es un municipio de tradición agrícola en el corazón de la llanura tabasqueña, con cultivos principalmente de plátano, cacao y maíz. La estación atiende a una población rural dispersa, cubriendo las comunidades del municipio y las vías de comunicación que lo atraviesan.",
    zonasCobertura: [
      "Jalpa de Méndez cabecera",
      "Zona agrícola platanera",
      "Comunidades rurales del municipio",
      "Carretera Villahermosa-Cárdenas"
    ],
    tiempoRespuesta: "8-16 minutos",
    personal: 26,
    personalActivo: 26,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── HUIMANGUILLO (Suroccidente / Sierra) ────────────────────────────────────
  {
    id: "tab-huimanguillo",
    slug: "tab-huimanguillo",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Huimanguillo",
    nombreCorto: "Estación Huimanguillo",
    direccion: "Calle Manuel Becerra 200",
    colonia: "Centro",
    codigoPostal: "86400",
    municipio: "Huimanguillo",
    ciudad: "Huimanguillo",
    telefono: "914 330 0555",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en selva y vegetación de montaña",
      "HAZMAT en oleoductos y gasoductos transversales",
      "Rescate vehicular en carreteras de montaña",
      "Incendios en zona palma africana (agroindustria)",
      "Rescate en ríos serranos",
      "Control de deslaves e inestabilidad de ladera",
      "Primeros auxilios en zona serrana"
    ],
    especialidades: [
      "Incendios en selva y montaña Sierra de Tabasco",
      "Rescate en terreno vertical serrano",
      "HAZMAT gasoductos zona de transición"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.8328, lng: -93.3769 },
    descripcion: "Huimanguillo es el municipio de mayor superficie de Tabasco y el que conecta el estado con Veracruz y Chiapas, siendo zona de tránsito de gasoductos y oleoductos nacionales. Su territorio abarca desde la llanura inundable hasta las primeras estribaciones de la Sierra Madre, con selvas tropicales y ríos torrentosos. El municipio es importante productor de palma africana para biocombustibles.",
    zonasCobertura: [
      "Huimanguillo cabecera",
      "Zona serrana Sierra de Tabasco",
      "Carreteras Tabasco-Veracruz",
      "Gasoductos zona suroccidente",
      "Zona palma africana"
    ],
    tiempoRespuesta: "9-18 minutos",
    personal: 30,
    personalActivo: 30,
    unidades: 4,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Forestal 4x4",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── EMILIANO ZAPATA (Usumacinta / Frontera Chiapas) ─────────────────────────
  {
    id: "tab-emiliano-zapata",
    slug: "tab-emiliano-zapata",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Emiliano Zapata",
    nombreCorto: "Estación Emiliano Zapata",
    direccion: "Calle Reforma 50",
    colonia: "Centro",
    codigoPostal: "86910",
    municipio: "Emiliano Zapata",
    ciudad: "Emiliano Zapata",
    telefono: "934 344 0320",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en el río Usumacinta",
      "Incendios estructurales y residenciales",
      "Primeros auxilios y traslados médicos",
      "Rescate vehicular en carreteras fronterizas",
      "Apoyo en inundaciones ribereñas",
      "Coordinación con bomberos de Chiapas en zona limítrofe"
    ],
    especialidades: [
      "Rescate fluvial río Usumacinta tramo Tabasco-Chiapas",
      "Coordinación interestatal con Chiapas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.5481, lng: -91.7678 },
    descripcion: "Emiliano Zapata, a orillas del río Usumacinta —frontera natural con el estado de Chiapas—, es punto de confluencia de rutas migratorias y corredor de paso entre el sureste y el país. La estación coordina operaciones de rescate fluvial con sus pares chiapanecos, compartiendo jurisdicción en el extenso río.",
    zonasCobertura: [
      "Emiliano Zapata cabecera",
      "Río Usumacinta tramo Tabasco",
      "Frontera Tabasco-Chiapas",
      "Comunidades ribereñas del municipio"
    ],
    tiempoRespuesta: "8-15 minutos",
    personal: 25,
    personalActivo: 25,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── BALANCÁN (Oriente — Frontera Guatemala) ─────────────────────────────────
  {
    id: "tab-balancan",
    slug: "tab-balancan",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Balancán",
    nombreCorto: "Estación Balancán",
    direccion: "Calle Independencia 180",
    colonia: "Centro",
    codigoPostal: "86930",
    municipio: "Balancán",
    ciudad: "Balancán",
    telefono: "934 343 0260",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en río San Pedro y afluentes",
      "Incendios forestales en selva tropical húmeda",
      "Apoyo humanitario en zona fronteriza Guatemala",
      "Incendios estructurales y residenciales",
      "Primeros auxilios en comunidades alejadas",
      "Rescate vehicular en carreteras remotas"
    ],
    especialidades: [
      "Incendios en selva tropical zona fronteriza",
      "Rescate fluvial río San Pedro",
      "Operaciones humanitarias frontera Guatemala"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.8031, lng: -91.5333 },
    descripcion: "Balancán es el municipio más oriental de Tabasco, fronterizo con Guatemala y Campeche, en uno de los paisajes más remotos y biodiversos del sureste. La selva tropical del municipio forma parte del corredor biológico Mesoamericano. La estación debe cubrir enormes extensiones de territorio con acceso limitado, dependiendo frecuentemente de embarcaciones fluviales para llegar a comunidades aisladas.",
    zonasCobertura: [
      "Balancán cabecera",
      "Selva tropical del municipio",
      "Río San Pedro y afluentes",
      "Frontera Tabasco-Guatemala-Campeche",
      "Comunidades remotas selváticas"
    ],
    tiempoRespuesta: "12-30 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha de Rescate Fluvial",
      "1 Ambulancia"
    ]
  },
  // ─── TACOTALPA (Sierra de Tabasco / Ecoturismo) ──────────────────────────────
  {
    id: "tab-tacotalpa",
    slug: "tab-tacotalpa",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Tacotalpa",
    nombreCorto: "Estación Tacotalpa",
    direccion: "Calle Juárez 80",
    colonia: "Centro",
    codigoPostal: "86870",
    municipio: "Tacotalpa",
    ciudad: "Tacotalpa",
    telefono: "919 336 0200",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate en cascadas y cuerpos de agua serranos",
      "Rescate en cuevas y grutas turísticas (Villa Luz)",
      "Incendios forestales en sierra de Tabasco",
      "Rescate de turistas en emergencias ecoturísticas",
      "Primeros auxilios en zona serrana",
      "Control de deslaves en temporada de lluvias"
    ],
    especialidades: [
      "Rescate espeleológico — Grutas de Coconá y Villa Luz",
      "Rescate acuático en cascadas y ríos de montaña",
      "Rescate vertical en terreno serrano"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.5781, lng: -92.8083 },
    descripcion: "Tacotalpa es la puerta a la Sierra de Tabasco y sede del parque ecoturístico más visitado del estado: las Grutas de Coconá y el Parque Yumká. Las grutas de Villa Luz, conocidas por sus singulares bacterias productoras de ácido sulfúrico, representan un riesgo espeleológico único. El río Oxolotán, con sus cascadas y pozas naturales, es escenario frecuente de rescates de turistas. La estación mantiene un equipo de rescate espeleológico y de aguas bravas.",
    zonasCobertura: [
      "Tacotalpa cabecera",
      "Grutas de Coconá y Villa Luz",
      "Sierra de Tabasco",
      "Cascadas Oxolotán y Malpasito",
      "Zona ecoturística serrana"
    ],
    tiempoRespuesta: "8-20 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate Técnico (espeleología)",
      "1 Ambulancia"
    ]
  },
  // ─── JALAPA (Municipio Central) ──────────────────────────────────────────────
  {
    id: "tab-jalapa",
    slug: "tab-jalapa",
    estado: "Tabasco",
    nombre: "Estación de Bomberos de Jalapa",
    nombreCorto: "Estación Jalapa",
    direccion: "Calle Hidalgo 95",
    colonia: "Centro",
    codigoPostal: "86750",
    municipio: "Jalapa",
    ciudad: "Jalapa",
    telefono: "919 336 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales y residenciales",
      "Rescate en inundaciones y crecidas de ríos",
      "Primeros auxilios y traslados médicos de urgencia",
      "Control de fugas de gas LP",
      "Rescate vehicular en carreteras",
      "Apoyo a comunidades rurales e indígenas Chol"
    ],
    especialidades: [
      "Rescate en ríos y lagunas zona sierra-llanura",
      "Atención multicultural — comunidades Chol"
    ],
    horario: "24 horas",
    coordenadas: { lat: 17.7161, lng: -92.8189 },
    descripcion: "Jalapa es un municipio de transición entre la sierra y la llanura tabasqueña, con presencia de comunidades Chol en sus zonas altas. La estación atiende un territorio diverso que incluye desde zonas agrícolas tropicales hasta las primeras elevaciones de la sierra, con ríos que frecuentemente se desbordan en temporada de lluvias.",
    zonasCobertura: [
      "Jalapa cabecera",
      "Comunidades Chol del municipio",
      "Zona de transición sierra-llanura",
      "Cuencas fluviales locales"
    ],
    tiempoRespuesta: "10-20 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Lancha de Rescate",
      "1 Ambulancia"
    ]
  }
];
function getEstacionBySlug(slug) {
  return estacionesTabasco.find((e) => e.slug === slug);
}
function getMunicipios() {
  return [...new Set(estacionesTabasco.map((e) => e.municipio))];
}
function getEstacionesCercanas(slug, limit = 3) {
  return estacionesTabasco.filter((e) => e.slug !== slug).slice(0, limit);
}

export { ESTADISTICAS_TABASCO as E, getEstacionesCercanas as a, getMunicipios as b, estacionesTabasco as e, getEstacionBySlug as g };
