const estacionesCampeche = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CAMPECHE - CAPITAL DEL ESTADO (1 estación)
  // Ciudad Histórica Fortificada - Patrimonio UNESCO
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-central",
    slug: "estacion-central-campeche",
    nombre: "Estación Central de Bomberos de San Francisco de Campeche",
    nombreCorto: "Estación Central Campeche",
    direccion: "Avenida Resurgimiento 120",
    colonia: "Santa Ana",
    codigoPostal: "24050",
    municipio: "Campeche",
    ciudad: "San Francisco de Campeche",
    estado: "Campeche",
    telefono: "981 811 3636",
    telefonoEmergencia: "911",
    email: "bomberos.central@campeche.gob.mx",
    servicios: [
      "Combate de incendios estructurales en edificios coloniales",
      "Protección del Centro Histórico Patrimonio UNESCO",
      "Rescate vehicular con equipo hidráulico de extricación",
      "Atención de materiales peligrosos (HAZMAT)",
      "Rescate acuático en malecón y costa del Golfo de México",
      "Servicio de atención prehospitalaria avanzada",
      "Control de fugas de gas LP y natural",
      "Rescate de personas atrapadas en estructuras coloniales",
      "Retiro técnico de enjambres de abejas africanizadas",
      "Emergencias por huracanes del Golfo de México",
      "Atención de inundaciones urbanas y costeras",
      "Coordinación estatal de emergencias mayores"
    ],
    especialidades: [
      "Centro de mando y coordinación estatal de emergencias",
      "Protección del Centro Histórico UNESCO y 8 baluartes coloniales",
      "Técnicas especializadas para edificios patrimoniales del siglo XVII",
      "Base de operaciones para huracanes del Golfo de México",
      "Rescate acuático certificado en costa del Golfo",
      "Coordinación con INAH para emergencias en zonas arqueológicas"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 19.8301, lng: -90.5349 },
    descripcion: "La Estación Central de Bomberos de San Francisco de Campeche es el corazón operativo del Heroico Cuerpo de Bomberos de la capital del estado. Ubicada estratégicamente para proteger la Ciudad Histórica Fortificada de Campeche, declarada Patrimonio de la Humanidad por UNESCO en 1999, esta estación enfrenta retos únicos que combinan la protección de arquitectura colonial del siglo XVII con emergencias modernas. El centro histórico, con sus 8 baluartes, murallas de 2.5 km y edificios de cantera, requiere técnicas especializadas de combate de incendios que no dañen el patrimonio. Como capital estatal, la estación coordina la respuesta a huracanes del Golfo de México que impactan regularmente la Península de Yucatán.",
    historia: "El Cuerpo de Bomberos de Campeche fue fundado oficialmente el 22 de agosto de 1921, aunque la tradición de protección contra incendios en la ciudad amurallada se remonta al siglo XVIII, cuando la amenaza de ataques piratas hacía del fuego un peligro constante. Durante más de un siglo de servicio, los bomberos campechanos han protegido el invaluable patrimonio colonial, respondido a huracanes devastadores como Isidore (2002) y Dean (2007), y desarrollado técnicas únicas para emergencias en estructuras históricas. La estación actual fue inaugurada en 1985 y modernizada en 2018 con equipamiento especializado para protección patrimonial.",
    equipamiento: [
      "3 Autobombas urbanas con sistema de niebla para edificios históricos",
      "2 Unidades de rescate técnico con equipo hidráulico Holmatro",
      "1 Unidad de rescate acuático con lancha de 22 pies",
      "1 Unidad HAZMAT con trajes encapsulados Nivel A y B",
      "2 Ambulancias de soporte vital avanzado",
      "1 Escalera telescópica de 32 metros",
      "1 Unidad de comando móvil con comunicaciones satelitales",
      "Sistema de cámaras térmicas FLIR para detección de puntos calientes",
      "Equipos de ventilación positiva para control de humo en edificios cerrados"
    ],
    zonasCobertura: [
      "Centro Histórico UNESCO",
      "Baluarte de San Carlos",
      "Baluarte de la Soledad",
      "Baluarte de Santiago",
      "Malecón de Campeche",
      "Barrio de San Francisco",
      "Barrio de San Román",
      "Barrio de Guadalupe",
      "Zona Hotelera Campeche"
    ],
    tiempoRespuesta: "4-8 minutos en zona urbana central",
    personal: 78,
    personalActivo: 78,
    unidades: 11,
    unidadesDisponibles: [
      "3 Autobombas",
      "2 Unidades de Rescate",
      "1 Escalera Telescópica",
      "2 Ambulancias",
      "1 Unidad HAZMAT",
      "1 Lancha de Rescate",
      "1 Comando Móvil"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CARMEN - CAPITAL PETROLERA DE MÉXICO (1 estación)
  // Sonda de Campeche - Mayor producción petrolera del país
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-carmen",
    slug: "estacion-bomberos-ciudad-del-carmen",
    nombre: "Estación de Bomberos de Ciudad del Carmen",
    nombreCorto: "Estación Ciudad del Carmen",
    direccion: "Calle 31 por 20",
    colonia: "Centro",
    codigoPostal: "24100",
    municipio: "Carmen",
    ciudad: "Ciudad del Carmen",
    estado: "Campeche",
    telefono: "938 382 5050",
    telefonoEmergencia: "911",
    email: "bomberos@carmen.gob.mx",
    servicios: [
      "Combate de incendios industriales petroleros",
      "Emergencias en plataformas marinas offshore",
      "Atención de materiales peligrosos (HAZMAT) nivel avanzado",
      "Control de derrames de hidrocarburos",
      "Rescate acuático en Laguna de Términos y Golfo de México",
      "Incendios en embarcaciones y muelles petroleros",
      "Rescate vehicular en puentes Zacatal y La Unidad",
      "Emergencias en helipuertos petroleros",
      "Evacuación de plataformas por huracanes",
      "Atención prehospitalaria industrial",
      "Incendios en tanques de almacenamiento",
      "Coordinación con brigadas industriales PEMEX"
    ],
    especialidades: [
      "Capital petrolera de México - Sonda de Campeche",
      "Certificación HAZMAT Nivel Técnico para hidrocarburos",
      "Respuesta a emergencias en 200+ plataformas marinas",
      "Coordinación con PEMEX, Halliburton, Schlumberger y Baker Hughes",
      "Rescate marítimo certificado para operaciones offshore",
      "Base de respuesta para huracanes en zona petrolera"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 18.651, lng: -91.8305 },
    descripcion: "La Estación de Bomberos de Ciudad del Carmen es una de las más especializadas de México, ubicada en la capital petrolera del país. Ciudad del Carmen, una isla conectada por los puentes Zacatal (3.2 km) y La Unidad (3.8 km), es la base de operaciones para la Sonda de Campeche, que produce el 60% del petróleo y 30% del gas natural de México. Con más de 200 plataformas marinas operando 24/7 y miles de trabajadores petroleros, esta estación enfrenta emergencias de alta complejidad técnica incluyendo incendios en plataformas, derrames de hidrocarburos, rescate marítimo y evacuaciones por huracanes del Golfo de México. El personal mantiene certificaciones internacionales en respuesta a emergencias petroleras.",
    historia: "El auge petrolero de Ciudad del Carmen inició en 1979 con el descubrimiento de los yacimientos de Cantarell, transformando un tranquilo puerto pesquero en la capital petrolera de México. El cuerpo de bomberos evolucionó rápidamente para responder a las demandas de la industria petrolera, recibiendo capacitación especializada de empresas internacionales. En 2007, durante el huracán Dean categoría 5, coordinó la evacuación de más de 20,000 trabajadores petroleros de plataformas marinas. La estación ha atendido emergencias históricas como el incendio de la plataforma Abkatún en 1986.",
    equipamiento: [
      "3 Autobombas industriales con sistema de espuma AFFF clase B",
      "2 Unidades HAZMAT completas con laboratorio móvil",
      "2 Unidades de rescate técnico industrial",
      "2 Lanchas de rescate marítimo de alta velocidad (30 pies)",
      "2 Ambulancias de soporte vital avanzado",
      "Equipos de respiración autónoma SCBA para 45 minutos",
      "Trajes encapsulados Nivel A para hidrocarburos",
      "Cañones de espuma de alto alcance (100 metros)",
      "Equipos de contención de derrames en agua",
      "Sistema de comunicaciones marítimas VHF"
    ],
    zonasCobertura: [
      "Centro de Ciudad del Carmen",
      "Zona Industrial Petrolera",
      "Puerto Comercial",
      "Playa Norte",
      "Laguna de Términos",
      "Puente Zacatal",
      "Puente La Unidad",
      "Helipuertos petroleros",
      "Coordinación offshore Sonda de Campeche"
    ],
    tiempoRespuesta: "5-10 minutos zona urbana, 45-90 minutos offshore",
    personal: 92,
    personalActivo: 92,
    unidades: 11,
    unidadesDisponibles: [
      "3 Autobombas Industriales",
      "2 Unidades HAZMAT",
      "2 Unidades de Rescate",
      "2 Lanchas de Rescate",
      "2 Ambulancias"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ESCÁRCEGA - CRUCE ESTRATÉGICO DE CARRETERAS (1 estación)
  // Punto de conexión hacia Chetumal, Villahermosa y Campeche
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-escarcega",
    slug: "estacion-bomberos-escarcega",
    nombre: "Estación de Bomberos de Escárcega",
    nombreCorto: "Estación Escárcega",
    direccion: "Calle 25 esquina Calle 30",
    colonia: "Centro",
    codigoPostal: "24350",
    municipio: "Escárcega",
    ciudad: "Escárcega",
    estado: "Campeche",
    telefono: "982 824 0066",
    telefonoEmergencia: "911",
    email: "bomberos.escarcega@campeche.gob.mx",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular en carreteras federales 186 y 261",
      "Atención de accidentes de tránsito múltiples",
      "Incendios forestales en selva baja",
      "Emergencias en autobuses de pasajeros",
      "Atención de fugas de gas y combustibles",
      "Rescate de personas en accidentes de trailer",
      "Control de derrames en carretera",
      "Emergencias en zona ferroviaria (Tren Maya)",
      "Incendios agrícolas y ganaderos",
      "Retiro de enjambres de abejas",
      "Apoyo a comunidades rurales"
    ],
    especialidades: [
      "Cruce estratégico de carreteras hacia 3 estados (Quintana Roo, Tabasco, Yucatán)",
      "Rescate vehicular pesado en carretera federal 186 (Chetumal-Villahermosa)",
      "Cobertura de zona del Tren Maya (estación Escárcega)",
      "Atención a comunidades mayas rurales",
      "Incendios forestales en transición selva-sabana"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 18.6061, lng: -90.7433 },
    descripcion: "La Estación de Bomberos de Escárcega es crucial para la seguridad del sureste mexicano, ubicada en el cruce estratégico donde convergen las carreteras federales 186 (Chetumal-Villahermosa) y 261 (Campeche-Escárcega). Este punto de conexión entre Quintana Roo, Tabasco, Campeche y Yucatán registra alto flujo de tráfico pesado, autobuses de pasajeros y vehículos de carga. La estación también cubre la zona del Tren Maya, el proyecto ferroviario más grande de México, con una estación en Escárcega. El personal está especializado en rescate vehicular pesado y atención de accidentes múltiples en carreteras de alta velocidad.",
    historia: "Escárcega fue fundada en 1936 como campamento maderero y ferroviario. Su ubicación estratégica la convirtió en punto clave de la red carretera del sureste. El cuerpo de bomberos se estableció formalmente en 1978, creciendo con el desarrollo de la zona. Ha respondido a innumerables accidentes carreteros, incluyendo el trágico accidente de autobús de 2019 con múltiples víctimas. Con la llegada del Tren Maya, la estación se ha modernizado para atender emergencias ferroviarias.",
    equipamiento: [
      "2 Autobombas urbanas con tanque de 3,000 galones",
      "1 Unidad de rescate pesado para accidentes de trailer",
      "1 Unidad forestal todoterreno",
      "1 Ambulancia de soporte vital básico",
      "Equipo hidráulico de extricación Holmatro",
      "Cámaras térmicas portátiles",
      "Equipos de iluminación para operaciones nocturnas en carretera"
    ],
    zonasCobertura: [
      "Centro de Escárcega",
      "Carretera Federal 186",
      "Carretera Federal 261",
      "Estación Tren Maya Escárcega",
      "Comunidades rurales",
      "Zona forestal",
      "Ejidos aledaños"
    ],
    tiempoRespuesta: "6-12 minutos zona urbana, 15-30 minutos carreteras",
    personal: 35,
    personalActivo: 35,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad de Rescate Pesado",
      "1 Unidad Forestal",
      "1 Ambulancia"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CHAMPOTÓN - COSTA DEL GOLFO Y PESCA (1 estación)
  // Puerto pesquero y turístico
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-champoton",
    slug: "estacion-bomberos-champoton",
    nombre: "Estación de Bomberos de Champotón",
    nombreCorto: "Estación Champotón",
    direccion: "Calle 28 s/n",
    colonia: "Centro",
    codigoPostal: "24400",
    municipio: "Champotón",
    ciudad: "Champotón",
    estado: "Campeche",
    telefono: "982 828 0038",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático en río Champotón y costa del Golfo",
      "Emergencias en embarcaciones pesqueras",
      "Incendios en procesadoras de mariscos",
      "Rescate vehicular en carretera costera",
      "Control de fugas de gas",
      "Incendios forestales costeros",
      "Atención de huracanes e inundaciones",
      "Emergencias en playas turísticas",
      "Retiro de enjambres",
      "Apoyo a comunidades pesqueras"
    ],
    especialidades: [
      "Puerto pesquero del Golfo de México",
      "Rescate acuático en río Champotón y zona costera",
      "Emergencias en flota pesquera camaronera",
      "Respuesta a huracanes del Golfo",
      "Protección de zona turística costera"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 19.3574, lng: -90.7214 },
    descripcion: "La Estación de Bomberos de Champotón protege uno de los principales puertos pesqueros del Golfo de México. Champotón, conocida como 'la novia del mar', es famosa por su producción de camarón y la belleza del río Champotón que desemboca en el Golfo. La estación enfrenta emergencias marítimas, incendios en la flota pesquera, procesadoras de mariscos y los impactos de huracanes que regularmente tocan tierra en la costa campechana. El personal está certificado en rescate acuático y atención de emergencias costeras.",
    historia: "Champotón tiene historia milenaria: aquí ocurrió la famosa Batalla de Champotón (1517) donde los mayas derrotaron a la expedición de Francisco Hernández de Córdoba. La tradición pesquera se remonta siglos, y el cuerpo de bomberos se estableció en 1985 para proteger la creciente actividad portuaria y turística. Ha respondido a múltiples huracanes, incluyendo Isidore (2002) que devastó la costa campechana.",
    equipamiento: [
      "2 Autobombas urbanas",
      "1 Unidad de rescate acuático con lancha de 18 pies",
      "1 Unidad de rescate técnico",
      "1 Ambulancia de soporte vital básico",
      "Equipos de buceo para rescate",
      "Chalecos salvavidas y equipos de flotación"
    ],
    zonasCobertura: [
      "Centro de Champotón",
      "Puerto Pesquero",
      "Río Champotón",
      "Playa Champotón",
      "Zona Hotelera",
      "Carretera Costera 180",
      "Comunidades costeras"
    ],
    tiempoRespuesta: "5-10 minutos zona urbana",
    personal: 28,
    personalActivo: 28,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad de Rescate",
      "1 Lancha de Rescate",
      "1 Ambulancia"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CALKINÍ - NORTE DEL ESTADO Y CAMINO REAL (1 estación)
  // Zona de artesanías y haciendas históricas
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-calkini",
    slug: "estacion-bomberos-calkini",
    nombre: "Estación de Bomberos de Calkiní",
    nombreCorto: "Estación Calkiní",
    direccion: "Calle 18 s/n",
    colonia: "Centro",
    codigoPostal: "24900",
    municipio: "Calkiní",
    ciudad: "Calkiní",
    estado: "Campeche",
    telefono: "996 963 0033",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Protección de haciendas históricas",
      "Rescate vehicular en carretera 180",
      "Incendios forestales en zona henequenera",
      "Emergencias en talleres de artesanías",
      "Control de fugas de gas",
      "Incendios agrícolas",
      "Atención a comunidades mayas",
      "Retiro de enjambres de abejas",
      "Emergencias en iglesias coloniales"
    ],
    especialidades: [
      "Protección del Camino Real histórico Campeche-Mérida",
      "Emergencias en haciendas henequeneras del siglo XIX",
      "Zona de artesanías de jipi japa (sombreros)",
      "Atención a comunidades mayas hablantes",
      "Cobertura frontera Campeche-Yucatán"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 20.3689, lng: -90.0494 },
    descripcion: "La Estación de Bomberos de Calkiní protege la zona norte de Campeche, rica en patrimonio cultural maya y colonial. Calkiní es famosa por sus artesanías de jipi japa (sombreros de palma), haciendas henequeneras del siglo XIX y comunidades mayas que mantienen tradiciones ancestrales. La estación cubre la carretera 180 (Camino Real) que conecta Campeche con Mérida, así como comunidades donde el idioma maya es predominante. El personal trabaja en coordinación con autoridades de Yucatán dada la cercanía de la frontera estatal.",
    historia: "Calkiní fue un importante centro maya prehispánico y posteriormente parte del Camino Real español. Sus haciendas henequeneras fueron parte del auge económico del siglo XIX. El cuerpo de bomberos se estableció en 1990 para proteger el patrimonio histórico y las comunidades de la zona norte. Mantiene presencia bilingüe español-maya para mejor comunicación con las comunidades.",
    equipamiento: [
      "2 Autobombas urbanas",
      "1 Unidad de rescate técnico",
      "1 Unidad forestal",
      "1 Ambulancia de soporte vital básico"
    ],
    zonasCobertura: [
      "Centro de Calkiní",
      "Becal",
      "Dzitbalché",
      "Santa Cruz",
      "Nunkiní",
      "Carretera 180 Camino Real",
      "Zona de haciendas"
    ],
    tiempoRespuesta: "5-10 minutos zona urbana, 15-25 minutos comunidades",
    personal: 22,
    personalActivo: 22,
    unidades: 5,
    unidadesDisponibles: [
      "2 Autobombas",
      "1 Unidad de Rescate",
      "1 Unidad Forestal",
      "1 Ambulancia"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CANDELARIA - FRONTERA CON GUATEMALA (1 estación)
  // Zona selvática y cruces fronterizos
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-candelaria",
    slug: "estacion-bomberos-candelaria",
    nombre: "Estación de Bomberos de Candelaria",
    nombreCorto: "Estación Candelaria",
    direccion: "Calle Principal s/n",
    colonia: "Centro",
    codigoPostal: "24330",
    municipio: "Candelaria",
    ciudad: "Candelaria",
    estado: "Campeche",
    telefono: "982 826 0025",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios forestales en selva tropical",
      "Rescate vehicular en carretera 186",
      "Emergencias en comunidades rurales remotas",
      "Control de quemas agrícolas",
      "Rescate acuático en ríos Candelaria y San Pedro",
      "Atención de accidentes en zona fronteriza",
      "Incendios en zonas ganaderas",
      "Apoyo a Protección Civil en emergencias",
      "Retiro de fauna silvestre peligrosa"
    ],
    especialidades: [
      "Zona fronteriza con Guatemala (Petén)",
      "Incendios forestales en selva tropical húmeda",
      "Cobertura de comunidades rurales dispersas",
      "Rescate en ríos Candelaria y San Pedro",
      "Coordinación con autoridades migratorias y fronterizas"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 18.1833, lng: -91.05 },
    descripcion: "La Estación de Bomberos de Candelaria opera en una de las zonas más desafiantes de Campeche: la frontera con Guatemala en plena selva tropical. Este municipio, uno de los más extensos del estado con 5,518 km², tiene baja densidad poblacional pero enfrenta incendios forestales que pueden consumir miles de hectáreas de selva, emergencias en comunidades rurales dispersas y accidentes en la carretera 186 hacia Chetumal. Los ríos Candelaria y San Pedro cruzan la zona, requiriendo capacidad de rescate acuático fluvial.",
    historia: "Candelaria fue zona chiclera a principios del siglo XX, cuando la extracción de chicle del árbol de chicozapote era industria principal. La colonización formal inició en los años 60. El cuerpo de bomberos se estableció en 1995 ante la necesidad de atender incendios forestales y emergencias en la creciente zona ganadera. Trabaja en coordinación transfronteriza con Guatemala para incendios forestales que cruzan la frontera.",
    equipamiento: [
      "2 Autobombas rurales de alta capacidad",
      "1 Unidad forestal todoterreno 4x4",
      "1 Unidad de rescate",
      "1 Lancha de rescate fluvial",
      "1 Ambulancia todoterreno",
      "Herramientas forestales manuales",
      "Radios de largo alcance"
    ],
    zonasCobertura: [
      "Centro de Candelaria",
      "El Pedregal",
      "Nueva Vida",
      "Río Candelaria",
      "Río San Pedro",
      "Carretera 186",
      "Frontera Guatemala",
      "Zona selvática"
    ],
    tiempoRespuesta: "10-15 minutos zona urbana, 30-60 minutos rural",
    personal: 25,
    personalActivo: 25,
    unidades: 6,
    unidadesDisponibles: [
      "2 Autobombas Rurales",
      "1 Unidad Forestal 4x4",
      "1 Unidad de Rescate",
      "1 Lancha Fluvial",
      "1 Ambulancia 4x4"
    ]
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CALAKMUL - RESERVA DE LA BIÓSFERA UNESCO (1 estación)
  // Mayor zona maya de México y reserva natural
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "camp-calakmul",
    slug: "estacion-bomberos-calakmul",
    nombre: "Estación de Bomberos de Calakmul",
    nombreCorto: "Estación Calakmul",
    direccion: "Carretera Escárcega-Chetumal km 95",
    colonia: "Xpujil",
    codigoPostal: "24640",
    municipio: "Calakmul",
    ciudad: "Xpujil",
    estado: "Campeche",
    telefono: "983 871 6036",
    telefonoEmergencia: "911",
    email: "bomberos.calakmul@campeche.gob.mx",
    servicios: [
      "Combate de incendios forestales en Reserva de la Biósfera UNESCO",
      "Protección de zona arqueológica maya Calakmul",
      "Emergencias en sitios patrimonio de la humanidad",
      "Rescate vehicular en carretera 186",
      "Atención de fauna silvestre en peligro (jaguar, puma, tapir)",
      "Rescate de turistas en zonas arqueológicas remotas",
      "Incendios en comunidades rurales aisladas",
      "Control de quemas agrícolas ilegales",
      "Emergencias médicas en zonas sin acceso vehicular",
      "Coordinación con CONANP y CONAFOR"
    ],
    especialidades: [
      "Reserva de la Biósfera Calakmul - Patrimonio UNESCO (723,185 ha)",
      "Zona Arqueológica Calakmul - mayor ciudad maya de México",
      "Combate de incendios forestales en bosque tropical",
      "Protección de fauna en peligro: jaguar, puma, tapir, guacamaya",
      "Emergencias en zonas remotas sin acceso vehicular",
      "Coordinación con guardaparques CONANP"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 18.5181, lng: -89.42 },
    descripcion: "La Estación de Bomberos de Calakmul es única en México: opera en el corazón de la Reserva de la Biósfera Calakmul, la mayor área protegida de bosque tropical de México con 723,185 hectáreas, declarada Patrimonio Natural y Cultural de la Humanidad por UNESCO. Esta estación protege tanto la biodiversidad (incluyendo la mayor población de jaguares en México) como la Antigua Ciudad Maya de Calakmul, rival histórica de Tikal con 6,750 estructuras arqueológicas. El combate de incendios forestales en esta zona requiere técnicas especializadas para no dañar el ecosistema ni el patrimonio arqueológico. El personal trabaja en coordinación estrecha con CONANP (guardaparques) y CONAFOR.",
    historia: "Calakmul fue redescubierta en 1931 por el biólogo Cyrus Lundell desde un avión, oculta durante siglos bajo la selva. La Reserva de la Biósfera fue establecida en 1989 y declarada Patrimonio UNESCO en 2002 (cultural) y 2014 (natural). El cuerpo de bomberos se estableció en 2005 específicamente para proteger este invaluable patrimonio dual. Ha combatido incendios forestales que amenazaron zonas arqueológicas y participado en rescates de fauna silvestre. En 2019, combatió incendios que afectaron más de 3,000 hectáreas de la reserva.",
    equipamiento: [
      "3 Unidades forestales todoterreno 4x4",
      "2 Autobombas rurales de alta capacidad (5,000 galones)",
      "1 Unidad de rescate técnico",
      "Tanques nodriza de 15,000 litros",
      "Equipos de líneas cortafuegos manuales y mecánicos",
      "Mochilas extintoras de 20 litros",
      "1 Ambulancia todoterreno",
      "Drones con cámara térmica para detección de incendios",
      "Radios satelitales para zonas sin cobertura celular",
      "Equipos de rescate de fauna silvestre"
    ],
    zonasCobertura: [
      "Reserva de la Biósfera Calakmul (723,185 ha)",
      "Zona Arqueológica Calakmul",
      "Xpujil",
      "Zoh-Laguna",
      "Conhuas",
      "Carretera 186 Escárcega-Chetumal",
      "Comunidades rurales de la reserva",
      "Zona de amortiguamiento"
    ],
    tiempoRespuesta: "15-30 minutos zona accesible, 1-3 horas zonas remotas",
    personal: 42,
    personalActivo: 42,
    unidades: 11,
    unidadesDisponibles: [
      "3 Unidades Forestales 4x4",
      "2 Autobombas Rurales",
      "1 Unidad de Rescate",
      "2 Tanques Nodriza",
      "1 Ambulancia 4x4",
      "2 Drones"
    ]
  }
];
function getEstacionBySlug(slug) {
  return estacionesCampeche.find((e) => e.slug === slug);
}
function getEstacionesByMunicipio(municipio) {
  return estacionesCampeche.filter((e) => e.municipio === municipio);
}
function getMunicipios() {
  return [...new Set(estacionesCampeche.map((e) => e.municipio))].sort();
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismoMunicipio = estacionesCampeche.filter(
    (e) => e.municipio === estacion.municipio && e.slug !== slug
  );
  const otrosMunicipios = estacionesCampeche.filter(
    (e) => e.municipio !== estacion.municipio
  );
  return [...mismoMunicipio, ...otrosMunicipios].slice(0, limit);
}
function getEstadisticas() {
  const totalEstaciones = estacionesCampeche.length;
  const totalPersonal = estacionesCampeche.reduce(
    (acc, e) => acc + (e.personalActivo || 0),
    0
  );
  const municipios = getMunicipios();
  return {
    totalEstaciones,
    totalPersonal,
    totalMunicipios: municipios.length,
    estacionesPorMunicipio: municipios.map((m) => ({
      municipio: m,
      cantidad: getEstacionesByMunicipio(m).length
    }))
  };
}

export { getEstacionesCercanas as a, getMunicipios as b, getEstadisticas as c, estacionesCampeche as e, getEstacionBySlug as g };
