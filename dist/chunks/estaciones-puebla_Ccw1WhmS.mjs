const PUEBLA_SEO = {
  // SEO Principal
  titulo: "Estaciones de Bomberos en Puebla",
  descripcion: "Directorio completo de las 20 estaciones de bomberos en Puebla. Teléfonos de emergencia, direcciones y cobertura del H. Cuerpo de Bomberos de Puebla, Tehuacán, San Martín Texmelucan y la zona industrial automotriz.",
  // SEO Bilingüe para Turismo y Empresas
  bilingue: {
    descripcion: "Complete directory of 20 fire stations in Puebla, Mexico. Emergency services covering Puebla City UNESCO Heritage, Cholula pyramids, automotive industrial zone (Volkswagen, Audi), and Pueblos Mágicos."},
  // Configuración de Interlinking Estratégico
  interlinking: {
    estadosVecinos: [
      {
        estado: "Ciudad de México",
        slug: "ciudad-de-mexico",
        relacion: "Corredor industrial y megalópolis",
        contexto: "Autopista México-Puebla, coordinación metropolitana"
      },
      {
        estado: "Estado de México",
        slug: "estado-de-mexico",
        relacion: "Zona conurbada y corredor industrial",
        contexto: "Conexión con zona oriente"
      },
      {
        estado: "Tlaxcala",
        slug: "tlaxcala",
        relacion: "Zona metropolitana compartida",
        contexto: "Conurbación Puebla-Tlaxcala"
      },
      {
        estado: "Veracruz",
        slug: "veracruz",
        relacion: "Corredor comercial y turístico",
        contexto: "Ruta Puebla-Veracruz, sierra norte"
      },
      {
        estado: "Oaxaca",
        slug: "oaxaca",
        relacion: "Corredor sur y Sierra Negra",
        contexto: "Tehuacán-Oaxaca"
      },
      {
        estado: "Morelos",
        slug: "morelos",
        relacion: "Frontera occidental",
        contexto: "Zona volcánica Popocatépetl"
      }
    ],
    productosRelacionados: [
      { producto: "Trajes Estructurales NFPA", slug: "/productos/trajes-para-bomberos", contexto: "Protección en incendios industriales" },
      { producto: "Equipos HAZMAT", slug: "/productos/hazmat", contexto: "Materiales peligrosos industria química" },
      { producto: "Equipos SCBA", slug: "/productos/scba", contexto: "Respiración autónoma planta automotriz" },
      { producto: "Herramientas de Rescate", slug: "/productos/herramientas-rescate", contexto: "Rescate vehicular autopistas" },
      { producto: "Equipo Contra Incendios", slug: "/productos/equipo-contra-incendios", contexto: "Equipamiento completo bomberos" },
      { producto: "Cotización Personalizada", slug: "/cotizar", contexto: "Equipamiento para tu corporación" }
    ]
  }};
const ZONAS_PUEBLA = {
  zonaMetropolitana: {
    nombre: "Zona Metropolitana",
    descripcion: "Capital del estado y conurbación con Tlaxcala",
    municipios: ["Puebla", "Cholula", "Cuautlancingo", "San Andrés Cholula", "Amozoc"],
    caracteristicas: ["Centro Histórico UNESCO", "Alta densidad poblacional", "Zona comercial", "Universidades"],
    color: "#1e40af"
  },
  zonaIndustrial: {
    nombre: "Zona Industrial Automotriz",
    descripcion: "Corredor industrial con plantas Volkswagen, Audi y proveedores",
    municipios: ["San José Chiapa", "Cuautlancingo", "Huejotzingo"],
    caracteristicas: ["Volkswagen", "Audi México", "Proveedores tier 1", "HAZMAT"],
    color: "#dc2626"
  },
  sierraNorte: {
    nombre: "Sierra Norte",
    descripcion: "Zona montañosa con Pueblos Mágicos y comunidades indígenas",
    municipios: ["Zacatlán", "Chignahuapan", "Cuetzalan", "Xicotepec"],
    caracteristicas: ["Pueblos Mágicos", "Turismo de aventura", "Incendios forestales", "Rescate montaña"],
    color: "#059669"
  },
  valleTehuacan: {
    nombre: "Valle de Tehuacán",
    descripcion: "Zona agroindustrial y Reserva de la Biósfera",
    municipios: ["Tehuacán", "Ajalpan", "Coxcatlán"],
    caracteristicas: ["Agroindustria", "Reserva Biósfera", "Agua mineral", "Zona semiárida"],
    color: "#0891b2"
  },
  mixteca: {
    nombre: "Mixteca Poblana",
    descripcion: "Región sur con patrimonio histórico",
    municipios: ["Izúcar de Matamoros", "Acatlán de Osorio", "Chiautla"],
    caracteristicas: ["Balnearios", "Zona agrícola", "Patrimonio histórico"],
    color: "#7c3aed"
  },
  corredorAtlixco: {
    nombre: "Corredor Atlixco-Matamoros",
    descripcion: "Valle de las flores y zona turística",
    municipios: ["Atlixco", "Metepec", "Tochimilco"],
    caracteristicas: ["Pueblo Mágico", "Volcán Popocatépetl", "Floricultura", "Turismo"],
    color: "#f59e0b"
  }
};
const ALERTAS_PUEBLA = {
  actividadVolcanica: {
    activa: () => true,
    // Siempre activa - monitoreo permanente Popocatépetl
    mensaje: "Monitoreo permanente del Volcán Popocatépetl. Conozca las rutas de evacuación",
    tipo: "warning",
    icono: "🌋",
    zonas: ["Corredor Atlixco-Matamoros", "Zona Metropolitana"]
  },
  temporadaIncendios: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 1 && mes <= 4;
    },
    mensaje: "Alto riesgo de incendios forestales en Sierra Norte",
    tipo: "danger",
    icono: "🔥",
    zonas: ["Sierra Norte", "Corredor Atlixco-Matamoros"]
  },
  temporadaLluvias: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 5 && mes <= 9;
    },
    mensaje: "Temporada de lluvias - Riesgo de inundaciones y deslaves",
    tipo: "info",
    icono: "🌧️",
    zonas: ["Sierra Norte", "Zona Metropolitana"]
  },
  zonaIndustrialHAZMAT: {
    activa: () => true,
    // Siempre activa
    mensaje: "Zona industrial con protocolos HAZMAT activos",
    tipo: "info",
    icono: "⚠️",
    zonas: ["Zona Industrial Automotriz"]
  }
};
const FAQ_PUEBLA = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en Puebla?",
    respuesta: "El número de emergencias en Puebla es el 911 nacional. La Central de Bomberos de Puebla atiende en (222) 309-9400. En Tehuacán: (238) 382-0033. En Cholula: (222) 247-0707."
  },
  {
    pregunta: "¿Los bomberos de Puebla atienden emergencias industriales?",
    respuesta: "Sí, Puebla cuenta con estaciones especializadas HAZMAT para la zona industrial automotriz (Volkswagen, Audi). Las estaciones de San José Chiapa y Cuautlancingo tienen capacidad de respuesta a materiales peligrosos y emergencias industriales."
  },
  {
    pregunta: "¿Hay bomberos especializados para el Volcán Popocatépetl?",
    respuesta: "Sí, las estaciones de Atlixco, San Nicolás de los Ranchos y Tochimilco están capacitadas para emergencias volcánicas, incluyendo evacuaciones, rescate y atención de afectados por caída de ceniza."
  },
  {
    pregunta: "¿Los bomberos atienden emergencias en Cholula?",
    respuesta: "Sí, San Pedro Cholula y San Andrés Cholula cuentan con estación de bomberos que cubre la zona arqueológica (Pirámide de Cholula), el centro histórico y las áreas universitarias. Teléfono: (222) 247-0707."
  },
  {
    pregunta: "¿Qué servicios ofrecen los bomberos en la autopista México-Puebla?",
    respuesta: "Las estaciones de San Martín Texmelucan y Huejotzingo ofrecen rescate carretero especializado para la autopista México-Puebla, una de las más transitadas del país. Atienden accidentes vehiculares, volcaduras y emergencias con materiales peligrosos."
  },
  {
    pregunta: "¿Hay bomberos en la Sierra Norte de Puebla?",
    respuesta: "Sí, las estaciones de Zacatlán, Chignahuapan, Cuetzalan y Xicotepec cubren la Sierra Norte. Están especializadas en rescate de montaña, incendios forestales y emergencias en comunidades de difícil acceso."
  }
];
const INDUSTRIA_PUEBLA = {
  // Sector Automotriz
  automotriz: {
    plantas: [
      {
        empresa: "Volkswagen de México",
        ubicacion: "Cuautlancingo",
        empleados: 15e3,
        produccion: "400,000+ vehículos anuales",
        modelos: ["Jetta", "Tiguan", "Taos"],
        riesgo: "HAZMAT, incendios industriales"
      },
      {
        empresa: "Audi México",
        ubicacion: "San José Chiapa",
        empleados: 5200,
        produccion: "150,000+ vehículos anuales",
        modelos: ["Q5"],
        riesgo: "HAZMAT, prensas, pintura"
      }
    ]}};
const TURISMO_PUEBLA = {
  pueblosMagicos: [
    { nombre: "Cholula", designacion: 2012, atractivo: "Pirámide más grande del mundo por volumen" },
    { nombre: "Zacatlán", designacion: 2011, atractivo: "Relojes monumentales, manzanas, niebla" },
    { nombre: "Chignahuapan", designacion: 2012, atractivo: "Esferas navideñas, aguas termales" },
    { nombre: "Cuetzalan", designacion: 2002, atractivo: "Cascadas, voladores, café" },
    { nombre: "Atlixco", designacion: 2015, atractivo: "Valle de las flores, Ex Convento" },
    { nombre: "Xicotepec", designacion: 2012, atractivo: "Café, cascadas, Virgen de Guadalupe gigante" },
    { nombre: "Pahuatlán", designacion: 2012, atractivo: "Papel amate, tradiciones" },
    { nombre: "Tlatlauquitepec", designacion: 2012, atractivo: "Peña del Aire, bosque de niebla" }
  ]};
const INFRAESTRUCTURA_PUEBLA = {
  volcanPopocatepetl: {
    altitud: "5,426 msnm",
    estado: "Activo - Amarillo Fase 2",
    radioEvacuacion: "12 km"}
};
const estacionesPuebla = [
  // ═══ ZONA METROPOLITANA ═══
  {
    nombre: "Estación Central Puebla",
    slug: "estacion-central-puebla",
    direccion: "Av. 25 Poniente 1502, Col. Volcanes, Puebla, Pue.",
    coordenadas: { lat: 19.0348, lng: -98.2135 },
    telefono: "(222) 309-9400",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Rescate en altura",
      "Control de fugas de gas",
      "Capacitación ciudadana",
      "Coordinación estatal"
    ],
    equipamiento: [
      "4 Autobombas",
      "1 Escalera telescópica 35m",
      "2 Unidades de rescate",
      "3 Ambulancias",
      "Equipo HAZMAT básico",
      "Equipo rescate altura"
    ],
    personal: 85,
    copiasActa: true,
    zona: "Zona Metropolitana",
    municipiosCubiertos: ["Puebla Centro", "Col. Volcanes", "La Paz", "Analco"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de Puebla. Cubre el Centro Histórico UNESCO, zonas comerciales y residenciales de alta densidad. Centro de despacho y coordinación estatal.",
    tiempoRespuesta: "5-8 minutos zona centro",
    sitioWeb: "https://puebla.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosPuebla",
    caracteristicasEspeciales: ["Centro Histórico UNESCO", "Coordinación estatal", "Talavera poblana"]
  },
  {
    nombre: "Estación de Bomberos Puebla Norte",
    slug: "estacion-bomberos-puebla-norte",
    direccion: "Blvd. Norte 2802, Col. Bosques de San Sebastián, Puebla, Pue.",
    coordenadas: { lat: 19.0765, lng: -98.1987 },
    telefono: "(222) 309-9410",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Control de fugas de gas",
      "Rescate urbano"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 25,
    copiasActa: true,
    zona: "Zona Metropolitana",
    municipiosCubiertos: ["Puebla Norte", "Bosques de San Sebastián", "Castillotla"],
    descripcion: "Cobertura de la zona norte de la ciudad de Puebla, incluyendo zonas residenciales de alta densidad, plazas comerciales y accesos a la autopista México-Puebla.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Zona residencial alta densidad", "Plazas comerciales", "Acceso autopista"]
  },
  {
    nombre: "Estación de Bomberos Puebla Sur",
    slug: "estacion-bomberos-puebla-sur",
    direccion: "Av. 11 Sur 4500, Col. Anzures, Puebla, Pue.",
    coordenadas: { lat: 18.9987, lng: -98.2054 },
    telefono: "(222) 309-9420",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Rescate urbano",
      "Control de abejas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Zona Metropolitana",
    municipiosCubiertos: ["Puebla Sur", "Anzures", "El Mirador", "Agua Santa"],
    descripcion: "Cobertura de la zona sur de Puebla, zonas residenciales, universidades (BUAP, UDLAP cercana) y acceso a la autopista Puebla-Atlixco.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Zona universitaria", "Residencial", "Acceso autopista Atlixco"]
  },
  {
    nombre: "Estación de Bomberos Cholula",
    slug: "estacion-bomberos-cholula",
    direccion: "Av. Morelos 100, Centro, San Pedro Cholula, Pue.",
    coordenadas: { lat: 19.0634, lng: -98.3063 },
    telefono: "(222) 247-0707",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Protección zona arqueológica",
      "Rescate en altura",
      "Emergencias turísticas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo rescate altura"
    ],
    personal: 28,
    copiasActa: true,
    zona: "Zona Metropolitana",
    municipiosCubiertos: ["San Pedro Cholula", "San Andrés Cholula", "UDLAP"],
    descripcion: "Cobertura de Cholula (Pueblo Mágico), incluyendo la Gran Pirámide de Cholula, el Santuario de los Remedios, la zona universitaria (UDLAP) y el corredor gastronómico. Personal capacitado para emergencias en estructuras patrimoniales.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Pueblo Mágico", "Gran Pirámide", "Zona universitaria UDLAP", "Patrimonio histórico"]
  },
  {
    nombre: "Estación de Bomberos Amozoc",
    slug: "estacion-bomberos-amozoc",
    direccion: "Calle 5 de Mayo 10, Centro, Amozoc de Mota, Pue.",
    coordenadas: { lat: 19.0378, lng: -98.0464 },
    telefono: "(222) 280-0077",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular autopista",
      "Atención pre-hospitalaria",
      "Emergencias industriales pequeñas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Zona Metropolitana",
    municipiosCubiertos: ["Amozoc de Mota", "Acajete"],
    descripcion: "Cobertura del municipio de Amozoc, famoso por su artesanía en plata y talabartería. Apoyo en accidentes de la autopista Puebla-Tehuacán y emergencias en talleres artesanales.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Artesanía plata", "Autopista Puebla-Tehuacán", "Talleres artesanales"]
  },
  // ═══ ZONA INDUSTRIAL AUTOMOTRIZ ═══
  {
    nombre: "Estación de Bomberos HAZMAT Cuautlancingo",
    slug: "estacion-bomberos-hazmat-cuautlancingo",
    direccion: "Av. Volkswagen s/n, Zona Industrial, Cuautlancingo, Pue.",
    coordenadas: { lat: 19.1067, lng: -98.2589 },
    telefono: "(222) 303-8000",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT nivel III",
      "Emergencias planta Volkswagen",
      "Rescate técnico industrial",
      "Derrames químicos",
      "Atención pre-hospitalaria industrial"
    ],
    equipamiento: [
      "3 Autobombas industriales",
      "1 Unidad HAZMAT completa",
      "1 Unidad espuma AFFF",
      "2 Ambulancias",
      "Trajes encapsulados Nivel A",
      "Detectores multigas",
      "Equipo descontaminación"
    ],
    personal: 45,
    copiasActa: false,
    zona: "Zona Industrial Automotriz",
    municipiosCubiertos: ["Cuautlancingo", "Planta Volkswagen", "Parques industriales"],
    descripcion: "Estación especializada HAZMAT para el corredor industrial automotriz. Cobertura principal de la planta Volkswagen de México (15,000 empleados, 400,000+ vehículos/año) y parques industriales circundantes. Capacidad Nivel III para materiales peligrosos.",
    tiempoRespuesta: "3-5 minutos zona industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel III", "Planta Volkswagen", "Industria automotriz", "Parques industriales"]
  },
  {
    nombre: "Estación de Bomberos San José Chiapa (Audi)",
    slug: "estacion-bomberos-san-jose-chiapa",
    direccion: "Carretera Federal 129 km 4, San José Chiapa, Pue.",
    coordenadas: { lat: 19.2378, lng: -97.7789 },
    telefono: "(276) 476-3000",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT nivel III",
      "Emergencias planta Audi México",
      "Rescate técnico industrial",
      "Derrames químicos pintura",
      "Emergencias prensas industriales"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT",
      "1 Unidad espuma",
      "2 Ambulancias",
      "Trajes encapsulados",
      "Equipo rescate técnico"
    ],
    personal: 35,
    copiasActa: false,
    zona: "Zona Industrial Automotriz",
    municipiosCubiertos: ["San José Chiapa", "Planta Audi México", "Parque Industrial Audi"],
    descripcion: "Estación dedicada al complejo industrial Audi México (5,200 empleados, 150,000+ Q5/año). Especializada en emergencias de línea de producción automotriz: prensas, pintura, ensamble. Capacidad HAZMAT para químicos industriales.",
    tiempoRespuesta: "2-4 minutos planta Audi",
    caracteristicasEspeciales: ["Planta Audi México", "HAZMAT industrial", "Prensas y pintura", "Premium automotriz"]
  },
  {
    nombre: "Estación de Bomberos Huejotzingo",
    slug: "estacion-bomberos-huejotzingo",
    direccion: "Calle 5 de Mayo 20, Centro, Huejotzingo, Pue.",
    coordenadas: { lat: 19.1594, lng: -98.4069 },
    telefono: "(227) 275-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate carretero autopista",
      "Atención pre-hospitalaria",
      "Emergencias sidra y destilados",
      "Incendios agrícolas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate carretero",
      "1 Ambulancia"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Zona Industrial Automotriz",
    municipiosCubiertos: ["Huejotzingo", "San Salvador el Verde", "Autopista México-Puebla"],
    descripcion: "Cobertura de Huejotzingo y la autopista México-Puebla. Apoyo a empresas de sidra y destilados. Acceso rápido al corredor industrial automotriz y zona agrícola.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Autopista México-Puebla", "Industria sidra", "Ex Convento Franciscano", "Carnaval"]
  },
  // ═══ SIERRA NORTE ═══
  {
    nombre: "Estación de Bomberos Zacatlán",
    slug: "estacion-bomberos-zacatlan",
    direccion: "Av. Benito Juárez 15, Centro, Zacatlán, Pue.",
    coordenadas: { lat: 19.9317, lng: -97.9589 },
    telefono: "(797) 975-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios forestales",
      "Rescate de montaña",
      "Atención pre-hospitalaria",
      "Búsqueda y rescate",
      "Apoyo comunidades serranas"
    ],
    equipamiento: [
      "1 Autobomba forestal",
      "1 Unidad rescate montaña 4x4",
      "1 Ambulancia 4x4",
      "Equipo forestal completo"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Sierra Norte",
    municipiosCubiertos: ["Zacatlán", "Ahuacatlán", "Tepetzintla"],
    descripcion: "Estación especializada en emergencias de montaña y combate de incendios forestales en la Sierra Norte. Cobertura del Pueblo Mágico de Zacatlán, famoso por sus relojes monumentales, manzanas y neblina.",
    tiempoRespuesta: "10-20 minutos (terreno montañoso)",
    caracteristicasEspeciales: ["Pueblo Mágico", "Relojes monumentales", "Incendios forestales", "Rescate montaña"]
  },
  {
    nombre: "Estación de Bomberos Chignahuapan",
    slug: "estacion-bomberos-chignahuapan",
    direccion: "Calle Porfirio Díaz 8, Centro, Chignahuapan, Pue.",
    coordenadas: { lat: 19.8378, lng: -98.0294 },
    telefono: "(797) 971-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Incendios forestales",
      "Rescate de montaña",
      "Atención pre-hospitalaria",
      "Emergencias talleres esferas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate 4x4",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Sierra Norte",
    municipiosCubiertos: ["Chignahuapan", "Ixtacamaxtitlán"],
    descripcion: "Cobertura del Pueblo Mágico de Chignahuapan, capital mexicana de las esferas navideñas. Atención de emergencias en talleres de esferas (riesgo de incendio por pinturas) y zona boscosa.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Pueblo Mágico", "Esferas navideñas", "Aguas termales", "Laguna de Chignahuapan"]
  },
  {
    nombre: "Estación de Bomberos Cuetzalan",
    slug: "estacion-bomberos-cuetzalan",
    direccion: "Calle Miguel Hidalgo s/n, Centro, Cuetzalan del Progreso, Pue.",
    coordenadas: { lat: 20.0283, lng: -97.5217 },
    telefono: "(233) 331-0044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate de montaña",
      "Rescate en cascadas",
      "Atención pre-hospitalaria",
      "Búsqueda y rescate",
      "Apoyo comunidades indígenas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate 4x4",
      "1 Ambulancia",
      "Equipo rescate vertical"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Sierra Norte",
    municipiosCubiertos: ["Cuetzalan del Progreso", "Jonotla", "Zoquiapan"],
    descripcion: "Estación en uno de los Pueblos Mágicos más emblemáticos de México. Cobertura de zona de cascadas (Las Brisas, Las Golondrinas), tirolesas y turismo de aventura. Rescate en terreno montañoso y comunidades nahuas.",
    tiempoRespuesta: "10-25 minutos (terreno difícil)",
    caracteristicasEspeciales: ["Pueblo Mágico", "Cascadas", "Voladores de Papantla", "Café de altura", "Comunidades nahuas"]
  },
  {
    nombre: "Estación de Bomberos Xicotepec",
    slug: "estacion-bomberos-xicotepec",
    direccion: "Av. Juárez 50, Centro, Xicotepec de Juárez, Pue.",
    coordenadas: { lat: 20.2756, lng: -97.9589 },
    telefono: "(764) 764-0077",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Incendios forestales",
      "Rescate de montaña",
      "Atención pre-hospitalaria",
      "Emergencias cafetaleras"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate 4x4",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Sierra Norte",
    municipiosCubiertos: ["Xicotepec de Juárez", "Zihuateutla", "Jalpan"],
    descripcion: "Cobertura del Pueblo Mágico de Xicotepec, zona cafetalera con la Virgen de Guadalupe gigante más alta del mundo (32m). Emergencias en fincas de café y rescate en zona montañosa.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Pueblo Mágico", "Virgen de Guadalupe 32m", "Café de altura", "Cascadas"]
  },
  // ═══ VALLE DE TEHUACÁN ═══
  {
    nombre: "Estación Central Tehuacán",
    slug: "estacion-central-tehuacan",
    direccion: "Calle 1 Norte 200, Centro, Tehuacán, Pue.",
    coordenadas: { lat: 18.4617, lng: -97.3928 },
    telefono: "(238) 382-0033",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Rescate vehicular",
      "Emergencias agroindustriales",
      "Búsqueda y rescate"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias",
      "Equipo rescate técnico"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Valle de Tehuacán",
    municipiosCubiertos: ["Tehuacán", "Ajalpan", "San Gabriel Chilac"],
    descripcion: "Estación principal del Valle de Tehuacán, segunda ciudad más importante de Puebla. Cobertura de la industria del agua mineral, granjas avícolas y acceso a la Reserva de la Biósfera Tehuacán-Cuicatlán.",
    tiempoRespuesta: "5-10 minutos",
    caracteristicasEspeciales: ["Agua mineral", "Reserva Biósfera", "Agroindustria avícola", "Segunda ciudad Puebla"]
  },
  // ═══ CORREDOR ATLIXCO-MATAMOROS ═══
  {
    nombre: "Estación de Bomberos Atlixco",
    slug: "estacion-bomberos-atlixco",
    direccion: "Av. Independencia 300, Centro, Atlixco, Pue.",
    coordenadas: { lat: 18.9067, lng: -98.4378 },
    telefono: "(244) 445-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias volcánicas",
      "Evacuaciones Popocatépetl",
      "Incendios forestales"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Ambulancia",
      "Equipo monitoreo volcánico"
    ],
    personal: 22,
    copiasActa: true,
    zona: "Corredor Atlixco-Matamoros",
    municipiosCubiertos: ["Atlixco", "Metepec", "Tochimilco"],
    descripcion: "Cobertura del Pueblo Mágico de Atlixco (Valle de las Flores) y zona de influencia del Volcán Popocatépetl. Capacitada para emergencias volcánicas, evacuaciones y rescate en zona de exclusión.",
    tiempoRespuesta: "6-12 minutos",
    facebook: "https://facebook.com/BomberosAtlixco",
    caracteristicasEspeciales: ["Pueblo Mágico", "Valle de las Flores", "Volcán Popocatépetl", "Emergencias volcánicas"]
  },
  {
    nombre: "Estación de Bomberos San Nicolás de los Ranchos",
    slug: "estacion-bomberos-san-nicolas-ranchos",
    direccion: "Calle Principal s/n, Centro, San Nicolás de los Ranchos, Pue.",
    coordenadas: { lat: 19.0583, lng: -98.4756 },
    telefono: "(222) 229-6044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias volcánicas",
      "Evacuaciones Popocatépetl",
      "Rescate de montaña",
      "Atención pre-hospitalaria",
      "Monitoreo ceniza volcánica"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate 4x4",
      "1 Ambulancia 4x4",
      "Equipo monitoreo volcánico",
      "Mascarillas protección ceniza"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Corredor Atlixco-Matamoros",
    municipiosCubiertos: ["San Nicolás de los Ranchos", "Paso de Cortés"],
    descripcion: "Estación de primera respuesta ante emergencias del Volcán Popocatépetl. Ubicada en la zona de exclusión (12km del cráter). Personal especializado en evacuaciones, rescate en zona volcánica y atención de afectados por ceniza.",
    tiempoRespuesta: "5-15 minutos (zona montañosa)",
    caracteristicasEspeciales: ["Primera respuesta Popocatépetl", "Zona de exclusión 12km", "Evacuaciones volcánicas", "Paso de Cortés"]
  },
  {
    nombre: "Estación de Bomberos Izúcar de Matamoros",
    slug: "estacion-bomberos-izucar-matamoros",
    direccion: "Calle Porfirio Díaz 50, Centro, Izúcar de Matamoros, Pue.",
    coordenadas: { lat: 18.5989, lng: -98.4633 },
    telefono: "(243) 436-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Rescate acuático balnearios",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate",
      "1 Ambulancia"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Mixteca Poblana",
    municipiosCubiertos: ["Izúcar de Matamoros", "Epatlán", "Ahuatlán"],
    descripcion: "Cobertura de la cabecera de la Mixteca Poblana, zona de balnearios de aguas termales y sulfurosas. Atención de emergencias en manantiales y temporada alta de visitantes.",
    tiempoRespuesta: "6-12 minutos",
    caracteristicasEspeciales: ["Balnearios aguas termales", "Mixteca Poblana", "Zona agrícola"]
  },
  // ═══ CORREDOR AUTOPISTA ═══
  {
    nombre: "Estación de Bomberos San Martín Texmelucan",
    slug: "estacion-bomberos-san-martin-texmelucan",
    direccion: "Av. Reforma 500, Centro, San Martín Texmelucan, Pue.",
    coordenadas: { lat: 19.2842, lng: -98.4386 },
    telefono: "(248) 484-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate carretero especializado",
      "Emergencias HAZMAT carreteras",
      "Atención pre-hospitalaria",
      "Volcaduras y choques múltiples",
      "Emergencias ducto PEMEX"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate carretero pesado",
      "1 Unidad HAZMAT",
      "2 Ambulancias",
      "Equipo rescate vehicular pesado"
    ],
    personal: 28,
    copiasActa: true,
    zona: "Zona Industrial Automotriz",
    municipiosCubiertos: ["San Martín Texmelucan", "San Salvador el Seco", "Autopista México-Puebla"],
    descripcion: "Estación especializada en rescate carretero de la autopista México-Puebla (80,000+ vehículos/día). Atención de accidentes múltiples, volcaduras de tráileres y emergencias con materiales peligrosos en tránsito. También cubre el ducto Tuxpan-Azcapotzalco de PEMEX.",
    tiempoRespuesta: "5-10 minutos autopista",
    caracteristicasEspeciales: ["Autopista México-Puebla", "Rescate carretero", "HAZMAT tránsito", "Ducto PEMEX"]
  },
  {
    nombre: "Estación de Bomberos Aeropuerto Puebla",
    slug: "estacion-bomberos-aeropuerto-puebla",
    direccion: "Aeropuerto Internacional de Puebla, Huejotzingo, Pue.",
    coordenadas: { lat: 19.1567, lng: -98.3714 },
    telefono: "(222) 232-0032",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Rescate y extinción aeronáutica (SSEI)",
      "Combate de incendios aeronaves",
      "Rescate pasajeros",
      "Emergencias pista",
      "Derrames combustible aviación"
    ],
    equipamiento: [
      "2 Vehículos ARFF categoría 7",
      "1 Autobomba apoyo",
      "Espuma AFFF",
      "Escaleras aeronáuticas"
    ],
    personal: 24,
    copiasActa: false,
    zona: "Zona Industrial Automotriz",
    municipiosCubiertos: ["Aeropuerto PBC"],
    descripcion: "Servicio de Salvamento y Extinción de Incendios (SSEI) del Aeropuerto Internacional de Puebla. Categoría 7 OACI con capacidad de respuesta para aeronaves comerciales.",
    tiempoRespuesta: "3 minutos cualquier punto de pista",
    caracteristicasEspeciales: ["SSEI aeronáutico", "Categoría 7 OACI", "800,000 pasajeros anuales"]
  }
];
function getEstacionesPorZona(zona) {
  return estacionesPuebla.filter((e) => e.zona === zona);
}
function getEstacionesHAZMAT() {
  return estacionesPuebla.filter(
    (e) => e.servicios.some((s) => s.toLowerCase().includes("hazmat")) || e.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("hazmat"))
  );
}
function getEstacionesVolcanicas() {
  return estacionesPuebla.filter(
    (e) => e.servicios?.some(
      (s) => s.toLowerCase().includes("volcán") || s.toLowerCase().includes("volcánica")
    ) || e.caracteristicasEspeciales?.some(
      (c) => c.toLowerCase().includes("popocatépetl") || c.toLowerCase().includes("volcán")
    )
  );
}
function getEstacionesPueblosMagicos() {
  return estacionesPuebla.filter(
    (e) => e.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("pueblo mágico"))
  );
}
function generarSchemaEstacion(estacion) {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressRegion": "Puebla",
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": estacion.municipiosCubiertos?.join(", ")
  };
}
function generarInterlinking() {
  return {
    estados: PUEBLA_SEO.interlinking.estadosVecinos,
    productos: PUEBLA_SEO.interlinking.productosRelacionados
  };
}
function getAlertasActivas(zona) {
  const alertasActivas = [];
  for (const [, alerta] of Object.entries(ALERTAS_PUEBLA)) {
    if (alerta.activa()) {
      if (!zona || alerta.zonas.includes(zona) || alerta.zonas.includes("Todo el estado")) {
        alertasActivas.push({
          mensaje: alerta.mensaje,
          tipo: alerta.tipo,
          icono: alerta.icono
        });
      }
    }
  }
  return alertasActivas;
}

export { FAQ_PUEBLA as F, INFRAESTRUCTURA_PUEBLA as I, PUEBLA_SEO as P, TURISMO_PUEBLA as T, ZONAS_PUEBLA as Z, getAlertasActivas as a, INDUSTRIA_PUEBLA as b, generarInterlinking as c, getEstacionesHAZMAT as d, estacionesPuebla as e, getEstacionesVolcanicas as f, generarSchemaEstacion as g, getEstacionesPueblosMagicos as h, getEstacionesPorZona as i };
