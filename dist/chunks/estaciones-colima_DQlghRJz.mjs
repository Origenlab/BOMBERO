const COLIMA_SEO = {
  // ─── Riesgo Volcánico ───
  volcan: {
    altura_msnm: 3960,
    radio_exclusion_km: 8},
  // ─── Keywords SEO por Categoría ───
  keywords: {
    principales: [
      "bomberos colima",
      "estaciones de bomberos colima",
      "emergencias colima mexico",
      "cuerpo de bomberos colima",
      "heroico cuerpo de bomberos colima",
      "proteccion civil colima",
      "servicios de emergencia colima",
      "911 colima",
      "bomberos volcan colima",
      "emergencias volcanicas colima"
    ],
    capital: [
      "bomberos colima capital",
      "bomberos ciudad colima",
      "emergencias colima centro",
      "cuerpo de bomberos colima capital",
      "proteccion civil colima capital",
      "bomberos zona metropolitana colima"
    ],
    manzanillo: [
      "bomberos manzanillo",
      "bomberos puerto manzanillo",
      "emergencias manzanillo colima",
      "bomberos maritimos manzanillo",
      "emergencias portuarias manzanillo",
      "rescate acuatico manzanillo",
      "bomberos playas manzanillo",
      "emergencias turisticas manzanillo"
    ],
    tecomán: [
      "bomberos tecoman",
      "bomberos tecoman colima",
      "emergencias tecoman",
      "bomberos zona limonera",
      "emergencias agricolas colima",
      "proteccion civil tecoman"
    ],
    comala: [
      "bomberos comala",
      "bomberos pueblo magico comala",
      "emergencias volcanicas comala",
      "bomberos zona volcanica colima",
      "proteccion civil comala",
      "emergencias volcan de fuego"
    ],
    villaDeAlvarez: [
      "bomberos villa de alvarez",
      "bomberos villa de alvarez colima",
      "emergencias villa de alvarez",
      "proteccion civil villa de alvarez"
    ]},
  // ─── Teléfonos de Emergencia ───
  telefonos: {
    bomberos_colima: "(312) 312-3456",
    bomberos_manzanillo: "(314) 332-0911",
    monitoreo_volcanico: "(312) 316-2020"}};
const estacionesColima = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA COLIMA - 2 ESTACIONES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-central-colima",
    nombre: "Estación Central de Bomberos Colima",
    slug: "estacion-central-colima",
    direccion: "Av. Rey Colimán #500, Col. Centro",
    ciudad: "Colima",
    estado: "Colima",
    codigoPostal: "28000",
    telefono: "(312) 312-3456",
    email: "central@bomberoscolima.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 19.2433,
      lng: -103.7247
    },
    servicios: [
      "Combate de incendios urbanos e industriales",
      "Coordinación estatal de emergencias",
      "Centro de monitoreo volcánico (enlace con CENAPRED)",
      "Rescate vehicular especializado",
      "Atención de emergencias con materiales peligrosos (HAZMAT)",
      "Rescate en estructuras colapsadas (USAR)",
      "Coordinación de evacuaciones por actividad volcánica",
      "Academia Estatal de Bomberos de Colima",
      "Servicios de ambulancia y emergencias médicas",
      "Investigación de causas de incendio",
      "Inspecciones de seguridad contra incendios",
      "Planes de contingencia volcánica"
    ],
    equipamiento: [
      "Camiones cisterna de 12,000 litros",
      "Unidades de rescate urbano pesado (USAR)",
      "Ambulancias de soporte vital avanzado",
      "Unidad HAZMAT con equipo de nivel A",
      "Escaleras telescópicas de 32 metros",
      "Centro de comando móvil para emergencias masivas",
      "Drones con cámara térmica para monitoreo volcánico",
      "Equipo de comunicaciones con CENAPRED",
      "Máscaras y filtros para ceniza volcánica",
      "Vehículos de evacuación masiva",
      "Sistema de alerta temprana volcánica"
    ],
    personal: 65,
    unidades: 10,
    descripcion: "Comandancia General del Heroico Cuerpo de Bomberos de Colima. Centro de operaciones para la capital del estado y sede de la Academia Estatal. Mantiene coordinación permanente con el Centro Nacional de Prevención de Desastres (CENAPRED) para monitoreo del Volcán de Fuego de Colima, uno de los más activos de Norteamérica. Responsable de coordinar evacuaciones masivas y respuesta a emergencias volcánicas.",
    fechaFundacion: "1942",
    redes: {
      facebook: "https://facebook.com/BomberosColima",
      twitter: "https://twitter.com/BomberosColima"
    }
  },
  {
    id: "estacion-bomberos-villa-de-alvarez",
    nombre: "Estación de Bomberos Villa de Álvarez",
    slug: "estacion-bomberos-villa-de-alvarez",
    direccion: "Av. Tecnológico #800, Col. Las Palmas",
    ciudad: "Villa de Álvarez",
    estado: "Colima",
    codigoPostal: "28970",
    telefono: "(312) 313-5678",
    email: "villadealvarez@bomberoscolima.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 19.2667,
      lng: -103.7583
    },
    servicios: [
      "Combate de incendios residenciales y comerciales",
      "Rescate vehicular en zona urbana",
      "Atención de emergencias en centros comerciales",
      "Control de fugas de gas LP y natural",
      "Rescate de personas atrapadas",
      "Atención prehospitalaria",
      "Prevención y capacitación comunitaria",
      "Cobertura a zona universitaria",
      "Apoyo en emergencias volcánicas"
    ],
    equipamiento: [
      "Autobombas de 8,000 litros",
      "Unidades de rescate vehicular",
      "Ambulancias tipo II",
      "Escalera mecánica de 24 metros",
      "Herramientas de extracción hidráulica Holmatro",
      "Equipo de protección para ceniza volcánica"
    ],
    personal: 35,
    unidades: 5,
    descripcion: "Estación estratégica para la zona metropolitana de Colima, cubriendo Villa de Álvarez, el municipio de mayor crecimiento del estado. Cobertura a zonas residenciales de alta densidad, centros comerciales, el Instituto Tecnológico de Colima y la Universidad de Colima Campus Norte. Primera respuesta para el corredor comercial de la zona metropolitana.",
    fechaFundacion: "1985"
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA PORTUARIA MANZANILLO - 1 ESTACIÓN
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-bomberos-manzanillo",
    nombre: "Estación de Bomberos Manzanillo",
    slug: "estacion-bomberos-manzanillo",
    direccion: "Blvd. Miguel de la Madrid #2500, Col. Playa Azul",
    ciudad: "Manzanillo",
    estado: "Colima",
    codigoPostal: "28867",
    telefono: "(314) 332-0911",
    email: "manzanillo@bomberoscolima.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 19.0522,
      lng: -104.3158
    },
    servicios: [
      "Combate de incendios portuarios y marítimos",
      "Respuesta HAZMAT para comercio internacional",
      "Emergencias en terminales de contenedores",
      "Rescate acuático en playas y bahía",
      "Incendios en embarcaciones y buques",
      "Coordinación con Capitanía de Puerto",
      "Emergencias en cruceros turísticos",
      "Atención a derrames de combustible marino",
      "Rescate en estructuras portuarias",
      "Emergencias turísticas en zona hotelera",
      "Preparación para tsunamis",
      "Respuesta a huracanes y tormentas tropicales"
    ],
    equipamiento: [
      "Unidades HAZMAT marítimas especializadas",
      "Autobombas de espuma AFFF para combustibles",
      "Lancha de rescate y combate de incendios",
      "Equipo de buceo de rescate",
      "Detectores de gases para contenedores",
      "Trajes de protección química nivel A y B",
      "Equipo de rescate en alturas (grúas portuarias)",
      "Ambulancias de soporte vital avanzado",
      "Vehículo de comando móvil",
      "Sistema de comunicación con buques",
      "Monitores de espuma de alto flujo"
    ],
    personal: 52,
    unidades: 8,
    descripcion: "Estación especializada en emergencias del Puerto de Manzanillo, el más importante del Pacífico mexicano y #1 nacional en movimiento de contenedores (3.4 millones TEU anuales). Personal certificado en HAZMAT marítimo, rescate acuático y combate de incendios en embarcaciones. Coordinación permanente con Capitanía de Puerto, Armada de México y terminales portuarias. También cubre emergencias turísticas en las playas de Manzanillo y la zona hotelera.",
    fechaFundacion: "1958",
    redes: {
      facebook: "https://facebook.com/BomberosManzanillo"
    }
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA AGRÍCOLA TECOMÁN - 1 ESTACIÓN
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-bomberos-tecoman",
    nombre: "Estación de Bomberos Tecomán",
    slug: "estacion-bomberos-tecoman",
    direccion: "Av. Insurgentes #450, Col. Centro",
    ciudad: "Tecomán",
    estado: "Colima",
    codigoPostal: "28100",
    telefono: "(313) 324-1234",
    email: "tecoman@bomberoscolima.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 18.9083,
      lng: -103.8744
    },
    servicios: [
      "Combate de incendios urbanos y agrícolas",
      "Emergencias en empacadoras de limón",
      "Atención de derrames de agroquímicos",
      "Incendios en cultivos y vegetación",
      "Rescate vehicular en carretera costera",
      "Emergencias en industria procesadora de cítricos",
      "Control de plagas de abejas africanizadas",
      "Atención prehospitalaria",
      "Rescate en zonas rurales y ranchos",
      "Emergencias en la industria salinera"
    ],
    equipamiento: [
      "Autobombas rurales todo terreno",
      "Unidad de rescate vehicular",
      "Equipo de protección para agroquímicos",
      "Ambulancia",
      "Vehículos 4x4 para zonas de cultivo",
      "Equipo de apicultura de emergencia",
      "Herramientas para emergencias agrícolas"
    ],
    personal: 28,
    unidades: 4,
    descripcion: 'Estación de bomberos de Tecomán, conocida como la "Capital Mundial del Limón". Cobertura al municipio con mayor producción de limón mexicano del país (35% de la producción nacional). Especialización en emergencias agrícolas, incendios en empacadoras de cítricos y manejo de agroquímicos. También cubre emergencias en la Laguna de Cuyutlán y las salinas de Colima.',
    fechaFundacion: "1972"
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ZONA VOLCÁNICA COMALA - 1 ESTACIÓN
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "estacion-bomberos-comala",
    nombre: "Estación de Bomberos Comala",
    slug: "estacion-bomberos-comala",
    direccion: "Portal Morelos #15, Centro Histórico",
    ciudad: "Comala",
    estado: "Colima",
    codigoPostal: "28450",
    telefono: "(312) 315-5555",
    email: "comala@bomberoscolima.gob.mx",
    horario: "24 horas, 365 días del año",
    coordenadas: {
      lat: 19.3167,
      lng: -103.7617
    },
    servicios: [
      "Monitoreo y respuesta a actividad volcánica",
      "Coordinación de evacuaciones por el Volcán de Fuego",
      "Combate de incendios forestales en zona volcánica",
      "Rescate en comunidades cercanas al volcán",
      "Emergencias turísticas en Pueblo Mágico",
      "Atención de caída de ceniza volcánica",
      "Rescate en lahares y flujos piroclásticos",
      "Protección del patrimonio histórico",
      "Búsqueda y rescate en sierra",
      "Enlace con estaciones sismológicas"
    ],
    equipamiento: [
      "Unidades todo terreno para zona volcánica",
      "Equipo de monitoreo de actividad volcánica",
      "Máscaras y filtros especiales para ceniza",
      "Vehículos de evacuación masiva",
      "Equipo de comunicaciones de largo alcance",
      "Ambulancia de alta montaña",
      "Herramienta forestal",
      "Sistemas de alerta temprana",
      "Equipo de rescate técnico en montaña"
    ],
    personal: 25,
    unidades: 4,
    descripcion: 'Estación de bomberos del Pueblo Mágico de Comala, ubicada en la zona de influencia directa del Volcán de Fuego de Colima. Responsable de coordinar evacuaciones de comunidades cercanas al volcán y atender emergencias relacionadas con actividad volcánica (caída de ceniza, lahares, flujos piroclásticos). También protege el patrimonio histórico del "Pueblo Blanco", escenario de la novela "Pedro Páramo" de Juan Rulfo. Enlace permanente con CENAPRED y la Red Sismológica.',
    fechaFundacion: "1990"
  }
];
function getEstacionesMetropolitanas() {
  const ciudadesMetro = ["Colima", "Villa de Álvarez"];
  return estacionesColima.filter((e) => ciudadesMetro.includes(e.ciudad));
}
function getEstacionesVolcanicas() {
  return estacionesColima.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("volcán") || s.toLowerCase().includes("volcánic") || s.toLowerCase().includes("ceniza") || s.toLowerCase().includes("lahar")
    )
  );
}
function getEstacionesPortuarias() {
  return estacionesColima.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("portuar") || s.toLowerCase().includes("marítim") || s.toLowerCase().includes("buque")
    )
  );
}
function getEstacionesHAZMAT() {
  return estacionesColima.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("hazmat") || s.toLowerCase().includes("materiales peligrosos") || s.toLowerCase().includes("químic")
    )
  );
}
function getEstacionesAgricolas() {
  return estacionesColima.filter(
    (e) => e.servicios.some(
      (s) => s.toLowerCase().includes("agríc") || s.toLowerCase().includes("limón") || s.toLowerCase().includes("cultivo") || s.toLowerCase().includes("agroquím")
    )
  );
}
function generarMetaSEO(estacion) {
  const ciudadSlug = estacion.ciudad.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  let contexto = "";
  let keywordsAdicionales = [];
  if (estacion.ciudad === "Colima") {
    contexto = "capital del estado, coordinación volcánica";
    keywordsAdicionales = ["bomberos capital colima", "emergencias volcan de fuego"];
  } else if (estacion.ciudad === "Manzanillo") {
    contexto = "puerto principal del Pacífico mexicano";
    keywordsAdicionales = ["bomberos puerto manzanillo", "emergencias maritimas pacifico"];
  } else if (estacion.ciudad === "Tecomán") {
    contexto = "capital mundial del limón";
    keywordsAdicionales = ["bomberos tecoman", "emergencias agricolas limon"];
  } else if (estacion.ciudad === "Comala") {
    contexto = "Pueblo Mágico, zona volcánica";
    keywordsAdicionales = ["bomberos comala", "emergencias volcanicas colima"];
  } else if (estacion.ciudad === "Villa de Álvarez") {
    contexto = "zona metropolitana de Colima";
    keywordsAdicionales = ["bomberos villa de alvarez", "emergencias zona metropolitana colima"];
  } else {
    contexto = "estado de Colima";
  }
  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, Colima`,
    description: `${estacion.nombre} en ${estacion.ciudad}, ${contexto}. Tel: ${estacion.telefono}. ${estacion.personal} bomberos, ${estacion.unidades} unidades. Servicios: ${estacion.servicios.slice(0, 3).join(", ")}.`,
    keywords: [
      `bomberos ${estacion.ciudad.toLowerCase()}`,
      `bomberos ${ciudadSlug} colima`,
      `estación bomberos ${estacion.ciudad.toLowerCase()}`,
      `emergencias ${estacion.ciudad.toLowerCase()}`,
      `teléfono bomberos ${estacion.ciudad.toLowerCase()}`,
      "bomberos colima",
      "emergencias colima",
      "protección civil colima",
      ...keywordsAdicionales
    ],
    canonical: `https://bombero.mx/directorio/colima/${estacion.slug}`
  };
}
function getContextoZona(ciudad) {
  if (ciudad === "Colima") {
    return {
      tipo: "capital-volcanica",
      descripcion: "Capital del estado y centro de coordinación volcánica",
      keywords: COLIMA_SEO.keywords.capital,
      color: "emerald",
      icono: "🏛️"
    };
  }
  if (ciudad === "Villa de Álvarez") {
    return {
      tipo: "metropolitana",
      descripcion: "Zona metropolitana de mayor crecimiento",
      keywords: COLIMA_SEO.keywords.villaDeAlvarez,
      color: "green",
      icono: "🏘️"
    };
  }
  if (ciudad === "Manzanillo") {
    return {
      tipo: "portuaria",
      descripcion: "Puerto #1 del Pacífico mexicano, 3.4 millones TEU",
      keywords: COLIMA_SEO.keywords.manzanillo,
      color: "blue",
      icono: "🚢"
    };
  }
  if (ciudad === "Tecomán") {
    return {
      tipo: "agricola",
      descripcion: "Capital Mundial del Limón, 35% producción nacional",
      keywords: COLIMA_SEO.keywords.tecomán,
      color: "lime",
      icono: "🍋"
    };
  }
  if (ciudad === "Comala") {
    return {
      tipo: "volcanica-turistica",
      descripcion: "Pueblo Mágico en zona de riesgo volcánico",
      keywords: COLIMA_SEO.keywords.comala,
      color: "orange",
      icono: "🌋"
    };
  }
  return {
    tipo: "regional",
    descripcion: "Estado de Colima",
    keywords: COLIMA_SEO.keywords.principales,
    color: "gray",
    icono: "📍"
  };
}
function getNivelRiesgoVolcanico(ciudad) {
  if (ciudad === "Comala") {
    return {
      nivel: "muy alto",
      radio_km: 8,
      descripcion: "Zona de exclusión permanente del Volcán de Fuego"
    };
  }
  if (ciudad === "Colima" || ciudad === "Villa de Álvarez") {
    return {
      nivel: "alto",
      radio_km: 15,
      descripcion: "Zona metropolitana en radio de afectación por ceniza"
    };
  }
  if (ciudad === "Tecomán") {
    return {
      nivel: "medio",
      radio_km: 35,
      descripcion: "Afectación menor por caída de ceniza con vientos sur"
    };
  }
  return {
    nivel: "bajo",
    radio_km: 60,
    descripcion: "Lejos del radio de afectación directa"
  };
}
const ESTADISTICAS_COLIMA = {
  total_estaciones: estacionesColima.length,
  total_bomberos: estacionesColima.reduce((sum, e) => sum + e.personal, 0),
  total_unidades: estacionesColima.reduce((sum, e) => sum + e.unidades, 0),
  estaciones_metropolitanas: getEstacionesMetropolitanas().length,
  estaciones_portuarias: getEstacionesPortuarias().length,
  estaciones_volcanicas: getEstacionesVolcanicas().length,
  estaciones_hazmat: getEstacionesHAZMAT().length,
  estaciones_agricolas: getEstacionesAgricolas().length,
  municipios_cubiertos: new Set(estacionesColima.map((e) => e.ciudad)).size};

export { COLIMA_SEO as C, ESTADISTICAS_COLIMA as E, getContextoZona as a, getNivelRiesgoVolcanico as b, estacionesColima as e, generarMetaSEO as g };
