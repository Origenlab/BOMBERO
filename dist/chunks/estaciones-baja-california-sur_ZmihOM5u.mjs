const estacionesBajaCaliforniaSur = [
  // ═══════════════════════════════════════════════════════════════════════════
  // LA PAZ - CAPITAL DEL ESTADO (1 estación)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bcs-la-paz-central",
    slug: "estacion-central-la-paz",
    nombre: "Estación Central de Bomberos de La Paz",
    estado: "Baja California Sur",
    nombreCorto: "Estación Central La Paz",
    direccion: "Calle Ignacio Altamirano 2790",
    colonia: "Centro",
    codigoPostal: "23000",
    municipio: "La Paz",
    ciudad: "La Paz",
    telefono: "612 122 0054",
    telefonoEmergencia: "911",
    email: "bomberos.central@lapaz.gob.mx",
    servicios: [
      "Combate de incendios estructurales y urbanos",
      "Rescate vehicular con equipo hidráulico de extricación",
      "Atención de materiales peligrosos (HAZMAT)",
      "Rescate acuático en bahía y mar abierto",
      "Servicio de atención prehospitalaria avanzada",
      "Control de fugas de gas LP y natural",
      "Rescate de personas atrapadas en estructuras",
      "Retiro técnico de enjambres de abejas africanizadas",
      "Emergencias por huracanes y fenómenos meteorológicos",
      "Coordinación estatal de emergencias mayores"
    ],
    especialidades: [
      "Centro de mando y coordinación estatal de emergencias",
      "Base de operaciones para huracanes categoría 1-5",
      "Rescate acuático certificado en Mar de Cortés",
      "Respuesta a emergencias turísticas internacionales",
      "Unidad especializada en fauna marina (ballenas, lobos marinos)"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 24.1426, lng: -110.3128 },
    descripcion: "La Estación Central de Bomberos de La Paz constituye el eje operativo del Heroico Cuerpo de Bomberos de la capital de Baja California Sur. Ubicada en el corazón de esta ciudad costera de 290,000 habitantes, la estación protege una urbe que combina patrimonio histórico, actividad portuaria y turismo de naturaleza. La Paz, bañada por el Mar de Cortés —llamado 'el acuario del mundo' por Jacques Cousteau—, enfrenta retos únicos que incluyen huracanes del Pacífico, emergencias marítimas y la atención a turistas que practican deportes acuáticos en la bahía más segura de México.",
    historia: "El Cuerpo de Bomberos de La Paz fue fundado el 22 de febrero de 1944, inicialmente como un grupo de voluntarios preocupados por la protección de la entonces pequeña capital territorial. Durante más de 80 años de servicio, ha evolucionado para enfrentar los desafíos únicos de una ciudad peninsular: huracanes devastadores como Odile (2014) y Lidia (2017), el crecimiento turístico exponencial y las emergencias en el Mar de Cortés. En 2014, durante el huracán Odile categoría 4, el cuerpo de bomberos realizó más de 500 rescates en 72 horas continuas.",
    equipamiento: [
      "3 Autobombas urbanas con sistema de espuma AFFF",
      "2 Unidades de rescate técnico con equipo hidráulico Holmatro",
      "1 Unidad de rescate acuático con lancha de 25 pies",
      "1 Unidad HAZMAT con trajes encapsulados Nivel A",
      "2 Ambulancias de soporte vital avanzado",
      "1 Escalera telescópica de 30 metros",
      "1 Unidad de comando móvil con comunicaciones satelitales",
      "Drones con cámaras térmicas para búsqueda y rescate",
      "Equipos de buceo profesional PADI certificados"
    ],
    zonasCobertura: ["Centro Histórico", "Malecón de La Paz", "Zona Portuaria", "Bahía de La Paz", "El Mogote", "Costa Baja", "Palmira"],
    tiempoRespuesta: "4-8 minutos en zona urbana central",
    personalActivo: 85,
    personal: 85,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT", "1 Lancha de Rescate", "1 Comando Móvil"],
    unidades: 7
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // LOS CABOS - DESTINO TURÍSTICO DE CLASE MUNDIAL (2 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bcs-san-jose-del-cabo",
    slug: "estacion-bomberos-san-jose-del-cabo",
    nombre: "Estación de Bomberos de San José del Cabo",
    estado: "Baja California Sur",
    nombreCorto: "Estación San José del Cabo",
    direccion: "Blvd. Antonio Mijares s/n",
    colonia: "Centro",
    codigoPostal: "23400",
    municipio: "Los Cabos",
    ciudad: "San José del Cabo",
    telefono: "624 142 2466",
    telefonoEmergencia: "911",
    email: "bomberos.sanjose@loscabos.gob.mx",
    servicios: [
      "Combate de incendios estructurales y hoteleros",
      "Rescate vehicular en Corredor Turístico",
      "Emergencias en resorts y campos de golf",
      "Atención de materiales peligrosos",
      "Rescate acuático en playas y estero",
      "Emergencias médicas turísticas",
      "Control de fugas de gas en restaurantes",
      "Incendios en galerías de arte y comercios",
      "Evacuación de hoteles por huracanes",
      "Rescate en zona de manglares del Estero"
    ],
    especialidades: [
      "Centro histórico y artístico de Los Cabos",
      "Atención a turismo cultural y gastronómico de lujo",
      "Emergencias en 15+ campos de golf de clase mundial",
      "Protección del Estero de San José (reserva ecológica)",
      "Coordinación con hoteles de 5 estrellas y resorts all-inclusive"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 23.0598, lng: -109.6978 },
    descripcion: "La Estación de Bomberos de San José del Cabo protege el corazón cultural del destino turístico más exclusivo de México. San José del Cabo combina un centro histórico con galerías de arte, restaurantes gourmet y arquitectura colonial con desarrollos turísticos de ultra lujo. El Estero de San José, reserva ecológica con más de 200 especies de aves, presenta riesgos únicos de rescate en zonas de manglar. La estación atiende emergencias en hoteles de cadenas como Four Seasons, One&Only, St. Regis y Ritz-Carlton.",
    historia: "San José del Cabo fue fundada como misión jesuita en 1730. Su transformación en destino turístico inició en los años 80, y el cuerpo de bomberos ha evolucionado para proteger infraestructura hotelera valuada en miles de millones de dólares. En 2014, durante el huracán Odile, la estación coordinó la evacuación de más de 30,000 turistas atrapados.",
    equipamiento: [
      "2 Autobombas urbanas de última generación",
      "1 Unidad de rescate técnico especializado",
      "1 Unidad de rescate acuático con motos de agua",
      "2 Ambulancias de soporte vital avanzado",
      "Equipos de comunicación multilingüe (español, inglés)",
      "Detectores de gases y cámaras termográficas"
    ],
    zonasCobertura: ["Centro Histórico San José", "Zona Hotelera Fonatur", "Estero de San José", "Puerto Los Cabos", "Campos de Golf", "Palmilla", "Querencia"],
    tiempoRespuesta: "5-10 minutos",
    personalActivo: 55,
    personal: 55,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Unidad Acuática", "2 Ambulancias"],
    unidades: 4
  },
  {
    id: "bcs-cabo-san-lucas",
    slug: "estacion-bomberos-cabo-san-lucas",
    estado: "Baja California Sur",
    nombre: "Estación de Bomberos de Cabo San Lucas",
    nombreCorto: "Estación Cabo San Lucas",
    direccion: "Calle 20 de Noviembre s/n",
    colonia: "Centro",
    codigoPostal: "23450",
    municipio: "Los Cabos",
    ciudad: "Cabo San Lucas",
    telefono: "624 143 3577",
    telefonoEmergencia: "911",
    email: "bomberos.cabosanlucas@loscabos.gob.mx",
    servicios: [
      "Combate de incendios estructurales y en embarcaciones",
      "Rescate acuático en playas de alto riesgo (Playa del Amor, Divorce Beach)",
      "Emergencias en marina y yates de lujo",
      "Incendios en zona de entretenimiento nocturno",
      "Rescate vehicular en carretera transpeninsular",
      "Atención a turistas en actividades extremas (tirolesas, ATV)",
      "Emergencias en cruceros y embarcaciones turísticas",
      "Control de fugas de gas en restaurantes",
      "Evacuación masiva de zona turística por huracanes",
      "Rescate en formaciones rocosas de El Arco"
    ],
    especialidades: [
      "Marina de yates más grande del Pacífico mexicano",
      "Destino #1 de turismo de cruceros en México",
      "Playas de alto riesgo por corrientes del Pacífico",
      "Zona de vida nocturna internacional (Medano, Marina)",
      "Rescate en formación rocosa El Arco (ícono de México)"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 22.8905, lng: -109.9167 },
    descripcion: "La Estación de Bomberos de Cabo San Lucas protege el epicentro turístico más dinámico de Baja California Sur, donde el Mar de Cortés se encuentra con el Océano Pacífico en la icónica formación rocosa de El Arco. Con más de 3 millones de visitantes anuales, 350+ restaurantes, la marina de yates más grande del Pacífico mexicano y una vida nocturna de fama internacional, Cabo San Lucas presenta desafíos únicos de emergencias masivas. El personal está capacitado en rescate acuático de alto riesgo, ya que las corrientes del Pacífico en playas como Divorce Beach son extremadamente peligrosas.",
    historia: "Cabo San Lucas pasó de ser un pequeño pueblo pesquero en los años 70 a convertirse en uno de los destinos turísticos más importantes del mundo. El cuerpo de bomberos ha crecido exponencialmente para atender la demanda de una ciudad que recibe cruceros con 5,000+ pasajeros diarios durante temporada alta. La estación ha sido reconstruida dos veces tras huracanes mayores (1993 y 2014).",
    equipamiento: [
      "3 Autobombas urbanas con capacidad extendida",
      "2 Unidades de rescate técnico",
      "1 Unidad de rescate marítimo con lancha de 30 pies",
      "2 Motos acuáticas de rescate Sea-Doo",
      "2 Ambulancias de soporte vital avanzado",
      "Equipos de buceo profesional",
      "1 Escalera telescópica de 25 metros",
      "Comunicaciones en español, inglés y otros idiomas"
    ],
    zonasCobertura: ["Centro de Cabo San Lucas", "Marina Cabo San Lucas", "Playa El Médano", "Playa del Amor", "El Arco", "Zona Hotelera", "Pedregal de Cabo San Lucas"],
    tiempoRespuesta: "4-8 minutos",
    personalActivo: 72,
    personal: 72,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Lancha de Rescate", "2 Motos Acuáticas"],
    unidades: 6
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // LORETO - PUEBLO MÁGICO Y TURISMO ECOLÓGICO (1 estación)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bcs-loreto",
    slug: "estacion-bomberos-loreto",
    nombre: "Estación de Bomberos de Loreto",
    estado: "Baja California Sur",
    nombreCorto: "Estación Loreto",
    direccion: "Calle Salvatierra s/n",
    colonia: "Centro",
    codigoPostal: "23880",
    municipio: "Loreto",
    ciudad: "Loreto",
    telefono: "613 135 0059",
    telefonoEmergencia: "911",
    email: "bomberos@loreto.gob.mx",
    servicios: [
      "Combate de incendios estructurales en centro histórico",
      "Rescate acuático en Bahía de Loreto (Parque Nacional)",
      "Emergencias en islas del Mar de Cortés",
      "Incendios forestales en Sierra de la Giganta",
      "Rescate vehicular en carretera transpeninsular",
      "Atención de emergencias turísticas",
      "Control de fugas de gas",
      "Rescate de fauna marina (ballenas, delfines, tortugas)",
      "Emergencias en misiones históricas",
      "Evacuación por huracanes"
    ],
    especialidades: [
      "Pueblo Mágico - Primera capital de las Californias (1697)",
      "Parque Nacional Bahía de Loreto (Patrimonio UNESCO)",
      "Rescate en islas del Mar de Cortés (Coronado, Carmen, Danzante)",
      "Protección de Misión de Nuestra Señora de Loreto (más antigua de California)",
      "Atención a turismo ecológico y avistamiento de ballena azul"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 26.0122, lng: -111.3486 },
    descripcion: "La Estación de Bomberos de Loreto protege la primera capital de las Californias, fundada en 1697 con el establecimiento de la Misión de Nuestra Señora de Loreto. Este Pueblo Mágico de 20,000 habitantes es la puerta de entrada al Parque Nacional Bahía de Loreto, parte del Patrimonio Natural de la Humanidad UNESCO que protege el Mar de Cortés. La estación enfrenta retos únicos: rescates en islas remotas accesibles solo por mar, incendios forestales en la Sierra de la Giganta, protección de estructuras coloniales del siglo XVII y atención a turistas que practican kayak, buceo y avistamiento de ballenas.",
    historia: "Loreto fue la primera población permanente de las Californias, desde donde los misioneros jesuitas exploraron y colonizaron lo que hoy es California, Arizona y Nevada. El cuerpo de bomberos local trabaja en estrecha colaboración con CONANP (Parque Nacional), la Armada de México y organizaciones de conservación marina para proteger este sitio de valor histórico y ecológico incalculable.",
    equipamiento: [
      "2 Autobombas urbanas",
      "1 Unidad de rescate técnico",
      "1 Lancha de rescate para operaciones en islas",
      "1 Unidad forestal todoterreno",
      "1 Ambulancia de soporte vital avanzado",
      "Equipos de buceo para rescate submarino",
      "Radios de largo alcance para islas"
    ],
    zonasCobertura: ["Centro Histórico Loreto", "Bahía de Loreto", "Isla Coronado", "Isla Carmen", "Isla Danzante", "Nopoló", "Puerto Escondido", "Sierra de la Giganta"],
    tiempoRespuesta: "5-10 minutos en zona urbana, 30-60 minutos en islas",
    personalActivo: 32,
    personal: 32,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Unidad Forestal", "1 Lancha", "1 Ambulancia"],
    unidades: 5
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // COMONDÚ - ZONA AGRÍCOLA (1 estación)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bcs-ciudad-constitucion",
    slug: "estacion-bomberos-ciudad-constitucion",
    nombre: "Estación de Bomberos de Ciudad Constitución",
    estado: "Baja California Sur",
    nombreCorto: "Estación Ciudad Constitución",
    direccion: "Calle Agustín Olachea s/n",
    colonia: "Centro",
    codigoPostal: "23600",
    municipio: "Comondú",
    ciudad: "Ciudad Constitución",
    telefono: "613 132 0303",
    telefonoEmergencia: "911",
    email: "bomberos@comondu.gob.mx",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios agrícolas en campos de cultivo",
      "Rescate vehicular en carretera transpeninsular",
      "Emergencias en invernaderos y empacadoras",
      "Control de fugas de agroquímicos y fertilizantes",
      "Incendios en maquinaria agrícola",
      "Atención a comunidades rurales del Valle de Santo Domingo",
      "Rescate de personas en pozos y norias",
      "Emergencias en el Puerto de San Carlos",
      "Evacuación por huracanes en zona costera"
    ],
    especialidades: [
      "Valle de Santo Domingo - principal zona agrícola de BCS",
      "Puerto San Carlos - avistamiento de ballena gris",
      "Emergencias en zona de producción de algodón, trigo y garbanzo",
      "Atención a población rural dispersa en 300+ km²",
      "Cooperación con brigadas agrícolas de productores"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 25.0256, lng: -111.6608 },
    descripcion: "La Estación de Bomberos de Ciudad Constitución es el centro operativo de emergencias para el municipio más extenso de Baja California Sur. Ciudad Constitución, con 45,000 habitantes, es el corazón del Valle de Santo Domingo, la zona agrícola más productiva del estado con cultivos de algodón, trigo, garbanzo, espárrago y cítricos. La estación también brinda cobertura al Puerto de San Carlos, santuario de la ballena gris donde cada invierno miles de turistas llegan para el avistamiento de cetáceos.",
    historia: "Ciudad Constitución fue fundada en 1953 como parte del proyecto de colonización del Valle de Santo Domingo, transformando el desierto en tierras de cultivo mediante sistemas de irrigación con agua de pozos profundos. El cuerpo de bomberos se estableció en 1965 para proteger la creciente infraestructura agrícola y las comunidades de colonos.",
    equipamiento: [
      "2 Autobombas con tanques de alta capacidad (4,000 galones)",
      "1 Unidad rural todoterreno para zonas agrícolas",
      "1 Unidad de rescate técnico",
      "1 Ambulancia de soporte vital básico",
      "Equipos de contención de derrames químicos",
      "Tanque nodriza de 10,000 litros"
    ],
    zonasCobertura: ["Ciudad Constitución", "Valle de Santo Domingo", "Puerto San Carlos", "Puerto Adolfo López Mateos", "Ejidos agrícolas", "Ciudad Insurgentes"],
    tiempoRespuesta: "8-15 minutos en zona urbana, 20-40 minutos en zona rural",
    personalActivo: 28,
    personal: 28,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Rural", "1 Unidad de Rescate", "1 Ambulancia", "1 Tanque Nodriza"],
    unidades: 5
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // MULEGÉ - ZONA HISTÓRICA Y MINERA (1 estación)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bcs-santa-rosalia",
    slug: "estacion-bomberos-santa-rosalia",
    nombre: "Estación de Bomberos de Santa Rosalía",
    estado: "Baja California Sur",
    nombreCorto: "Estación Santa Rosalía",
    direccion: "Calle Constitución s/n",
    colonia: "Mesa México",
    codigoPostal: "23920",
    municipio: "Mulegé",
    ciudad: "Santa Rosalía",
    telefono: "615 152 0050",
    telefonoEmergencia: "911",
    email: "bomberos@mulege.gob.mx",
    servicios: [
      "Combate de incendios estructurales (edificios históricos de madera)",
      "Emergencias en instalaciones mineras",
      "Rescate vehicular en carretera transpeninsular",
      "Incendios en puerto pesquero y embarcaciones",
      "Control de fugas de gas y combustibles",
      "Emergencias en ferry Santa Rosalía-Guaymas",
      "Incendios forestales en zona serrana",
      "Rescate acuático en Mar de Cortés",
      "Evacuación por huracanes",
      "Atención a poblaciones remotas (San Ignacio, Guerrero Negro)"
    ],
    especialidades: [
      "Patrimonio arquitectónico francés del siglo XIX",
      "Iglesia de Santa Bárbara diseñada por Gustave Eiffel",
      "Puerto de ferry hacia Sonora (conexión peninsular)",
      "Zona minera histórica (cobre, El Boleo)",
      "Coordinación con Santa Rosalía-Guaymas ferry emergencies"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 27.3397, lng: -112.2706 },
    descripcion: "La Estación de Bomberos de Santa Rosalía protege una ciudad única en México: un pueblo minero fundado por la compañía francesa El Boleo en 1885, con arquitectura de madera prefabricada traída desde Francia. El patrimonio incluye la iglesia de Santa Bárbara, diseñada por Gustave Eiffel (creador de la Torre Eiffel) y exhibida en la Exposición Universal de París de 1889. Santa Rosalía es puerto del ferry que conecta Baja California Sur con Guaymas, Sonora, siendo punto crítico para el tránsito vehicular peninsular. Los edificios históricos de madera presentan alto riesgo de incendio en el clima desértico.",
    historia: "Santa Rosalía fue fundada en 1885 por la Compagnie du Boleo, empresa francesa que explotó las minas de cobre por más de 70 años. Los edificios de madera prefabricada, únicos en México, fueron diseñados en Francia y ensamblados en el desierto de Baja California. El cuerpo de bomberos enfrenta el reto de proteger este patrimonio arquitectónico irreemplazable con técnicas especializadas para estructuras históricas de madera.",
    equipamiento: [
      "2 Autobombas con sistemas de niebla para estructuras de madera",
      "1 Unidad de rescate técnico",
      "1 Lancha de rescate para emergencias portuarias",
      "1 Ambulancia de soporte vital básico",
      "Equipos especializados para incendios en madera",
      "Detectores de humo y cámaras térmicas"
    ],
    zonasCobertura: ["Santa Rosalía Centro", "Mesa México", "Mesa Francia", "Puerto de Ferry", "Zona Minera El Boleo", "San Lucas", "San Bruno"],
    tiempoRespuesta: "5-10 minutos en zona urbana",
    personalActivo: 24,
    personal: 24,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Lancha", "1 Ambulancia"],
    unidades: 4
  }
];
function getEstacionBySlug(slug) {
  return estacionesBajaCaliforniaSur.find((e) => e.slug === slug);
}
function getEstacionesByMunicipio(municipio) {
  return estacionesBajaCaliforniaSur.filter((e) => e.municipio === municipio);
}
function getMunicipios() {
  return [...new Set(estacionesBajaCaliforniaSur.map((e) => e.municipio))].sort();
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismoMunicipio = estacionesBajaCaliforniaSur.filter(
    (e) => e.municipio === estacion.municipio && e.slug !== slug
  );
  const otrosMunicipios = estacionesBajaCaliforniaSur.filter(
    (e) => e.municipio !== estacion.municipio
  );
  return [...mismoMunicipio, ...otrosMunicipios].slice(0, limit);
}
function getEstadisticas() {
  const totalEstaciones = estacionesBajaCaliforniaSur.length;
  const totalPersonal = estacionesBajaCaliforniaSur.reduce((acc, e) => acc + (e.personalActivo || 0), 0);
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

export { getEstacionesCercanas as a, getMunicipios as b, getEstadisticas as c, estacionesBajaCaliforniaSur as e, getEstacionBySlug as g };
