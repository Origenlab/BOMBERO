const INDUSTRIA_AUTOMOTRIZ_SLP = {
  plantasPrincipales: [
    {
      empresa: "BMW Group",
      nombrePlanta: "BMW Group Plant San Luis Potosí",
      ubicacion: "Villa de Reyes",
      empleados: 2500,
      produccion: "Serie 3, Serie 2 Coupé",
      capacidadAnual: "175,000 unidades",
      inversionTotal: "$1,000 millones USD",
      añoInicio: 2019,
      superficie: "300 hectáreas",
      riesgosHAZMAT: ["Pinturas automotrices", "Solventes", "Baterías litio", "Aceites", "Combustibles"],
      certificaciones: ["ISO 14001", "ISO 45001", "IATF 16949"],
      contactoEmergencias: "Coordinación con estación HAZMAT Zona Industrial"
    },
    {
      empresa: "General Motors",
      nombrePlanta: "Complejo San Luis Potosí",
      ubicacion: "San Luis Potosí - Villa de Reyes",
      empleados: 6e3,
      produccion: "Motores, transmisiones, componentes",
      capacidadAnual: "400,000 motores + 350,000 transmisiones",
      inversionTotal: "$3,500 millones USD acumulados",
      añoInicio: 2008,
      superficie: "450 hectáreas",
      riesgosHAZMAT: ["Fundición aluminio", "Aceites industriales", "Refrigerantes", "Gases industriales"],
      certificaciones: ["ISO 14001", "ISO 45001", "IATF 16949", "GM Global Manufacturing System"],
      contactoEmergencias: "Brigada interna + coordinación estación Soledad"
    }
  ]};
const PROTOCOLOS_SLP = [
  {
    tipo: "Incendio Industrial Automotriz",
    codigo: "IND-AUTO-01",
    descripcion: "Protocolo para incendios en plantas automotrices con materiales especiales",
    tiempoMaximoRespuesta: "8 minutos zona industrial",
    recursosMinimos: ["2 autobombas", "1 unidad HAZMAT", "2 ambulancias", "1 mando"],
    coordinacionRequerida: ["Brigada interna planta", "HAZMAT estatal", "Protección Civil"]
  },
  {
    tipo: "HAZMAT Nivel A",
    codigo: "HAZ-A-01",
    descripcion: "Emergencia con materiales altamente peligrosos (pinturas, solventes, baterías litio)",
    tiempoMaximoRespuesta: "10 minutos",
    recursosMinimos: ["1 unidad HAZMAT completa", "Trajes Nivel A", "Descontaminación", "2 ambulancias"],
    coordinacionRequerida: ["Empresa responsable", "PROFEPA", "Protección Civil", "Hospitales"]
  },
  {
    tipo: "Rescate Espeleológico",
    codigo: "RES-ESP-01",
    descripcion: "Rescate en sótanos y cuevas de la Huasteca (Golondrinas, etc.)",
    tiempoMaximoRespuesta: "45-90 minutos según ubicación",
    recursosMinimos: ["Equipo espeleología certificado", "Cuerdas estáticas 600m", "Camilla técnica", "2 ambulancias 4x4"],
    coordinacionRequerida: ["Protección Civil", "Cruz Roja", "Grupos voluntarios espeleología", "Helicóptero si disponible"]
  },
  {
    tipo: "Rescate Acuático Río",
    codigo: "RES-SWR-01",
    descripcion: "Swift water rescue en ríos de la Huasteca (Tampaón, Santa María)",
    tiempoMaximoRespuesta: "15-30 minutos",
    recursosMinimos: ["Equipo swift water", "PFDs clase V", "Lanchas inflables", "Cuerdas throw bags"],
    coordinacionRequerida: ["Protección Civil", "Marina si aplica", "Operadores turísticos"]
  },
  {
    tipo: "Incendio Forestal Zona Huasteca",
    codigo: "FOR-HUA-01",
    descripcion: "Incendios en zona selvática de la Huasteca Potosina",
    tiempoMaximoRespuesta: "30-60 minutos (acceso difícil)",
    recursosMinimos: ["2 unidades forestales 4x4", "Herramienta manual", "Equipo comunicación", "Apoyo aéreo si disponible"],
    coordinacionRequerida: ["CONAFOR", "Comunidades locales", "Ejidos", "Protección Civil"]
  },
  {
    tipo: "Búsqueda y Rescate Desierto",
    codigo: "SAR-DES-01",
    descripcion: "SAR en zona desértica (Real de Catorce, Wirikuta)",
    tiempoMaximoRespuesta: "60-120 minutos",
    recursosMinimos: ["Vehículos 4x4", "GPS", "Equipo supervivencia", "Agua/suministros", "Drones si disponible"],
    coordinacionRequerida: ["Protección Civil", "Comunidad Wixárika", "Guías locales"]
  }
];
const ZONAS_SLP = {
  zonaMetropolitana: {
    nombre: "Zona Metropolitana SLP",
    nombreCorto: "ZM SLP",
    municipios: ["San Luis Potosí", "Soledad de Graciano Sánchez"],
    poblacion: 125e4,
    descripcion: "Capital del estado y zona urbana principal",
    caracteristicas: ["Centro histórico colonial", "Zona comercial", "Universidades", "Hospitales"],
    nivelRiesgo: "Medio",
    riesgosPrincipales: ["Incendios estructurales", "Accidentes viales", "Emergencias médicas"],
    estaciones: 4,
    tiempoRespuestaPromedio: "6 minutos",
    color: "#7c3aed"
  },
  zonaIndustrial: {
    nombre: "Zona Industrial Automotriz",
    nombreCorto: "ZI Automotriz",
    municipios: ["San Luis Potosí", "Villa de Reyes", "Soledad de Graciano Sánchez"],
    poblacion: 18e4,
    descripcion: "Clúster automotriz BMW, GM y 300+ proveedores",
    caracteristicas: ["BMW Plant", "GM Complejo", "12 parques industriales", "45,000 empleos"],
    nivelRiesgo: "Alto",
    riesgosPrincipales: ["HAZMAT industrial", "Incendios planta", "Accidentes químicos", "Derrames"],
    estaciones: 3,
    tiempoRespuestaPromedio: "8 minutos",
    color: "#dc2626"
  },
  huastecaNorte: {
    nombre: "Huasteca Norte",
    nombreCorto: "Huasteca N",
    municipios: ["Ciudad Valles", "Tamuín", "Ébano", "El Naranjo"],
    poblacion: 32e4,
    descripcion: "Zona turística con ríos, cascadas y selva",
    caracteristicas: ["Rafting", "Cascadas", "Selva", "Turismo aventura"],
    nivelRiesgo: "Alto",
    riesgosPrincipales: ["Rescate acuático", "Ahogamientos", "Inundaciones", "Incendios forestales"],
    estaciones: 2,
    tiempoRespuestaPromedio: "15-25 minutos",
    color: "#0ea5e9"
  },
  huastecaSur: {
    nombre: "Huasteca Sur",
    nombreCorto: "Huasteca S",
    municipios: ["Aquismón", "Tancanhuitz", "Xilitla", "Tamasopo", "Axtla"],
    poblacion: 28e4,
    descripcion: "Sótanos, cascadas extremas y Pueblos Mágicos",
    caracteristicas: ["Sótano Golondrinas", "Tamul", "Xilitla", "Comunidades indígenas"],
    nivelRiesgo: "Muy Alto",
    riesgosPrincipales: ["Rescate espeleológico", "Rescate vertical", "Swift water", "Acceso difícil"],
    estaciones: 2,
    tiempoRespuestaPromedio: "30-60 minutos",
    color: "#16a34a"
  },
  zonaAltiplano: {
    nombre: "Zona Altiplano",
    nombreCorto: "Altiplano",
    municipios: ["Matehuala", "Catorce", "Charcas", "Cedral", "Vanegas"],
    poblacion: 18e4,
    descripcion: "Zona semidesértica, minería histórica, Real de Catorce",
    caracteristicas: ["Desierto", "Minería", "Real de Catorce", "Cultura Wixárika"],
    nivelRiesgo: "Medio-Alto",
    riesgosPrincipales: ["SAR desierto", "Minas abandonadas", "Clima extremo", "Incendios matorrales"],
    estaciones: 2,
    tiempoRespuestaPromedio: "20-40 minutos",
    color: "#f59e0b"
  },
  zonaMedia: {
    nombre: "Zona Media",
    nombreCorto: "Media",
    municipios: ["Rioverde", "Ciudad Fernández", "San Ciro", "Cerritos"],
    poblacion: 2e5,
    descripcion: "Zona agrícola y comercial, Media Luna",
    caracteristicas: ["Agricultura", "Media Luna", "Comercio", "Ganadería"],
    nivelRiesgo: "Medio",
    riesgosPrincipales: ["Rescate acuático Media Luna", "Incendios agrícolas", "Accidentes carreteros"],
    estaciones: 2,
    tiempoRespuestaPromedio: "15-25 minutos",
    color: "#10b981"
  }
};
const ALERTAS_SLP = {
  temporadaLluvias: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 5 && mes <= 9;
    },
    mensaje: "Temporada de lluvias activa - Alto riesgo de inundaciones en Huasteca",
    mensajeEn: "Rainy season active - High flood risk in Huasteca region",
    tipo: "warning",
    icono: "🌧️",
    prioridad: "alta",
    zonas: ["Huasteca Norte", "Huasteca Sur"],
    acciones: ["Evite ríos crecidos", "Consulte condiciones antes de actividades"]
  },
  temporadaIncendios: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes >= 1 && mes <= 5;
    },
    mensaje: "Temporada de incendios forestales - Prohibido fuego en zonas naturales",
    tipo: "danger",
    icono: "🔥",
    prioridad: "critica",
    zonas: ["Huasteca Norte", "Huasteca Sur", "Zona Altiplano"],
    acciones: ["No hacer fogatas", "Reporte columnas de humo al 911"]
  },
  semanaSanta: {
    activa: () => {
      const fecha = /* @__PURE__ */ new Date();
      const mes = fecha.getMonth();
      const dia = fecha.getDate();
      return mes === 2 && dia >= 24 || mes === 3 && dia <= 15;
    },
    mensaje: "Semana Santa - Afluencia masiva en Huasteca Potosina",
    tipo: "info",
    icono: "🏊",
    prioridad: "alta",
    zonas: ["Huasteca Norte", "Huasteca Sur"],
    acciones: ["Personal reforzado", "Vigilancia en cuerpos de agua"]
  },
  actividadIndustrial: {
    activa: () => true,
    mensaje: "Zona industrial activa 24/7 - Protocolos HAZMAT disponibles",
    mensajeEn: "Industrial zone active 24/7 - HAZMAT protocols available",
    tipo: "info",
    icono: "🏭",
    prioridad: "media",
    zonas: ["Zona Industrial Automotriz"],
    acciones: ["Coordinación con brigadas de planta", "HAZMAT en alerta"]
  },
  realDeCatorce: {
    activa: () => {
      const mes = (/* @__PURE__ */ new Date()).getMonth();
      return mes === 2 || mes === 10 || mes === 11;
    },
    mensaje: "Alta afluencia turística en Real de Catorce",
    tipo: "info",
    icono: "⛰️",
    prioridad: "media",
    zonas: ["Zona Altiplano"],
    acciones: ["Personal reforzado", "Atención clima extremo"]
  }
};
const FAQ_SLP = [
  {
    pregunta: "¿Cuál es el teléfono de los bomberos en San Luis Potosí?",
    respuesta: "El número de emergencias en San Luis Potosí es el 911 nacional. La Central de Bomberos de San Luis Potosí atiende directamente en (444) 812-2583. Para emergencias industriales HAZMAT en zona automotriz: (444) 815-7575. En Ciudad Valles (Huasteca): (481) 382-1035. En Matehuala (Altiplano): (488) 882-0033.",
    categoria: "contacto",
    busquedasRelacionadas: ["telefono bomberos slp", "numero emergencias san luis potosi", "911 san luis potosi"]
  },
  {
    pregunta: "¿Los bomberos de San Luis Potosí tienen capacidad HAZMAT para plantas automotrices?",
    respuesta: "Sí, San Luis Potosí cuenta con 2 estaciones especializadas HAZMAT con capacidad Nivel A para atender emergencias en BMW, General Motors y los 300+ proveedores del clúster automotriz. Personal certificado en materiales peligrosos automotrices: pinturas, solventes, baterías de litio, aceites y gases industriales. Coordinación 24/7 con brigadas internas de plantas.",
    categoria: "industrial",
    busquedasRelacionadas: ["hazmat bmw san luis potosi", "emergencias planta automotriz", "bomberos zona industrial slp"]
  },
  {
    pregunta: "¿Hay bomberos especializados en rescate en el Sótano de las Golondrinas?",
    respuesta: "Sí, la estación de Aquismón cuenta con equipo certificado en espeleología y rescate vertical extremo para el Sótano de las Golondrinas (512m de profundidad). Equipo especializado incluye cuerdas de 600m, sistemas de anclaje para sótanos, camillas técnicas verticales y coordinación con grupos voluntarios de espeleología. Tiempo de respuesta: 45-90 minutos según condiciones.",
    categoria: "rescate",
    busquedasRelacionadas: ["rescate sotano golondrinas", "emergencia cueva huasteca", "espeleologia san luis potosi"]
  },
  {
    pregunta: "¿Qué cobertura tienen los bomberos en la Huasteca Potosina?",
    respuesta: "La Huasteca Potosina cuenta con 4 estaciones: Ciudad Valles (central regional), Aquismón (rescate espeleológico), Tamasopo (rescate acuático) y Xilitla (zona selvática). Cobertura de Cascada de Tamul, Sótano de las Golondrinas, Puente de Dios y todos los sitios de turismo de aventura. Equipos de swift water rescue, rappel y espeleología disponibles.",
    categoria: "huasteca",
    busquedasRelacionadas: ["bomberos cascada tamul", "emergencias huasteca potosina", "rescate rafting san luis potosi"]
  },
  {
    pregunta: "¿Los bomberos atienden emergencias en Real de Catorce?",
    respuesta: "Sí, la estación de Matehuala cubre Real de Catorce y toda la zona del Altiplano. Capacidad de búsqueda y rescate en desierto (SAR), atención de emergencias por altitud (2,750 msnm), rescate en minas abandonadas y clima extremo. Coordinación con guías locales y comunidad Wixárika para emergencias en la zona sagrada de Wirikuta.",
    categoria: "altiplano",
    busquedasRelacionadas: ["bomberos real de catorce", "emergencias matehuala", "rescate desierto wirikuta"]
  },
  {
    pregunta: "¿Cómo reportar una emergencia en una planta automotriz de San Luis Potosí?",
    respuesta: "1) Llame al 911 inmediatamente e indique que es emergencia industrial. 2) Active la brigada interna de la planta. 3) Para HAZMAT específico, línea directa: (444) 815-7575. 4) Proporcione nombre de empresa, ubicación exacta, tipo de material involucrado y número de afectados. Las plantas BMW y GM tienen protocolos de coordinación directa con estaciones designadas.",
    categoria: "industrial",
    busquedasRelacionadas: ["emergencia planta bmw", "protocolo incendio fabrica", "hazmat industria automotriz mexico"]
  },
  {
    pregunta: "¿Qué hacer en caso de emergencia durante rafting en la Huasteca?",
    respuesta: "1) Mantenga la calma y siga instrucciones del guía certificado. 2) Si hay lesionado, llame al 911 (cobertura limitada - use radio del operador). 3) Para emergencias en río, la estación Ciudad Valles tiene equipo swift water rescue. 4) Los operadores turísticos certificados tienen comunicación directa con servicios de emergencia. 5) Siempre use chaleco salvavidas clase V.",
    categoria: "turismo",
    busquedasRelacionadas: ["emergencia rafting huasteca", "rescate rio tampao", "accidente turismo aventura"]
  },
  {
    pregunta: "¿Los bomberos de San Luis Potosí hablan inglés para emergencias industriales?",
    respuesta: "Las estaciones de la Zona Industrial Automotriz (HAZMAT Villa de Reyes y Soledad) cuentan con personal con capacidad de coordinación en inglés para atender emergencias de ejecutivos y personal extranjero de BMW, GM y proveedores internacionales. El 911 tiene operadores con inglés básico; para emergencias complejas, se activa coordinador bilingüe.",
    categoria: "internacional",
    busquedasRelacionadas: ["fire department english san luis potosi", "emergency bmw plant mexico", "industrial emergency english speaking"]
  },
  {
    pregunta: "¿Cuál es el tiempo de respuesta de los bomberos en San Luis Potosí?",
    respuesta: "El tiempo de respuesta varía por zona: Zona Metropolitana: 6 minutos promedio. Zona Industrial: 8 minutos (protocolo especial). Huasteca Norte (Ciudad Valles): 15-25 minutos. Huasteca Sur (Aquismón, Xilitla): 30-60 minutos por acceso difícil. Altiplano (Matehuala, Real de Catorce): 20-40 minutos. Zona Media (Rioverde): 15-25 minutos.",
    categoria: "servicio",
    busquedasRelacionadas: ["tiempo respuesta bomberos slp", "cuanto tardan los bomberos", "cobertura emergencias san luis potosi"]
  },
  {
    pregunta: "¿Los bomberos realizan inspecciones de seguridad para empresas?",
    respuesta: "Sí, el H. Cuerpo de Bomberos de San Luis Potosí realiza inspecciones de seguridad contra incendios para empresas, comercios e industrias. Los servicios incluyen: dictámenes de seguridad, revisión de extintores, evaluación de rutas de evacuación, capacitación de brigadas y certificación para licencias de funcionamiento. Contacto: (444) 812-2583 extensión 102.",
    categoria: "comercial",
    busquedasRelacionadas: ["inspeccion bomberos empresa slp", "dictamen seguridad incendios", "certificacion bomberos comercio"]
  }
];
const estacionesSanLuisPotosi = [
  // ═══ ZONA METROPOLITANA ═══
  {
    nombre: "Estación Central de Bomberos San Luis Potosí",
    slug: "estacion-central-san-luis-potosi",
    direccion: "Av. Venustiano Carranza 1950, Col. Tequisquiapan, San Luis Potosí, S.L.P.",
    coordenadas: { lat: 22.1565, lng: -100.9855 },
    telefono: "(444) 812-2583",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate urbano avanzado",
      "Atención pre-hospitalaria avanzada",
      "Rescate vehicular pesado",
      "Control de fugas de gas",
      "Rescate en altura",
      "Coordinación estatal de emergencias",
      "Capacitación y certificación",
      "Inspecciones de seguridad",
      "Dictámenes técnicos"
    ],
    equipamiento: [
      "5 Autobombas urbanas",
      "1 Escalera telescópica 42m",
      "2 Unidades de rescate pesado",
      "4 Ambulancias SVAA",
      "1 Unidad de mando móvil estatal",
      "1 Unidad HAZMAT básica",
      "Herramienta hidráulica Holmatro completa",
      "Equipo rescate altura certificado"
    ],
    personal: 120,
    copiasActa: true,
    zona: "Zona Metropolitana SLP",
    ciudad: "San Luis Potosí Centro",
    municipio: "San Luis Potosí Centro",
    municipiosCubiertos: ["San Luis Potosí Centro", "Centro Histórico", "Zona comercial", "Universidades"],
    descripcion: "Estación central y coordinadora del H. Cuerpo de Bomberos de San Luis Potosí. Centro de mando estatal para coordinación de emergencias mayores. Cobertura del Centro Histórico (candidato UNESCO), zona comercial principal y área universitaria. Personal altamente capacitado con certificaciones nacionales e internacionales. Centro de capacitación para todo el estado.",
    tiempoRespuesta: "5-7 minutos zona centro",
    sitioWeb: "https://sanluispotosi.gob.mx/bomberos",
    facebook: "https://facebook.com/BomberosSLP",
    caracteristicasEspeciales: ["Estación central estatal", "Escalera 42m", "Centro capacitación", "Coordinación estatal", "Centro Histórico colonial"]
  },
  {
    nombre: "Estación de Bomberos San Luis Potosí Norte",
    slug: "estacion-bomberos-slp-norte",
    direccion: "Blvd. Antonio Rocha Cordero 555, Zona Industrial Norte, San Luis Potosí, S.L.P.",
    coordenadas: { lat: 22.1934, lng: -100.9612 },
    telefono: "(444) 824-5050",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias residenciales",
      "Apoyo zona comercial norte",
      "Control de fugas"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "2 Ambulancias",
      "Herramienta hidráulica"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Metropolitana SLP",
    ciudad: "SLP Norte",
    municipio: "SLP Norte",
    municipiosCubiertos: ["SLP Norte", "Fraccionamientos norte", "Plaza Tangamanga", "Zona comercial norte"],
    descripcion: "Cobertura de la zona norte de la capital, incluyendo desarrollos residenciales de alta densidad, plazas comerciales y acceso a la carretera 57 norte hacia Matehuala.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["Zona residencial", "Plazas comerciales", "Acceso carretera 57"]
  },
  {
    nombre: "Estación de Bomberos Soledad de Graciano Sánchez",
    slug: "estacion-bomberos-soledad",
    direccion: "Av. Himno Nacional 500, Centro, Soledad de Graciano Sánchez, S.L.P.",
    coordenadas: { lat: 22.1834, lng: -100.9334 },
    telefono: "(444) 832-1010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés básico"],
    servicios: [
      "Combate de incendios estructurales",
      "Combate de incendios industriales",
      "HAZMAT básico",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Apoyo zona industrial este"
    ],
    equipamiento: [
      "3 Autobombas",
      "1 Unidad HAZMAT básica",
      "2 Unidades rescate",
      "3 Ambulancias"
    ],
    personal: 55,
    copiasActa: true,
    zona: "Zona Metropolitana SLP",
    ciudad: "Soledad Centro",
    municipio: "Soledad Centro",
    municipiosCubiertos: ["Soledad Centro", "Zona industrial este", "Parque Industrial PISA", "Fraccionamientos populares"],
    descripcion: "Segunda estación más grande del área metropolitana. Cobertura del municipio conurbado de Soledad y acceso a zona industrial este. Capacidad HAZMAT básica para apoyo a emergencias industriales. Coordinación con estación HAZMAT para eventos mayores.",
    tiempoRespuesta: "6-10 minutos",
    caracteristicasEspeciales: ["2da más grande", "HAZMAT básico", "Zona industrial este", "Municipio conurbado"]
  },
  {
    nombre: "Estación de Bomberos Tangamanga",
    slug: "estacion-bomberos-tangamanga",
    direccion: "Blvd. Salvador Nava 3000, Col. Las Águilas, San Luis Potosí, S.L.P.",
    coordenadas: { lat: 22.1234, lng: -101.0234 },
    telefono: "(444) 817-4040",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Emergencias parque Tangamanga",
      "Rescate urbano",
      "Atención pre-hospitalaria",
      "Emergencias eventos masivos"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate",
      "1 Unidad forestal ligera",
      "2 Ambulancias"
    ],
    personal: 28,
    copiasActa: true,
    zona: "Zona Metropolitana SLP",
    ciudad: "Parque Tangamanga",
    municipio: "Parque Tangamanga",
    municipiosCubiertos: ["Parque Tangamanga", "Las Águilas", "Zona poniente", "Pedregal"],
    descripcion: "Cobertura de la zona poniente incluyendo el Parque Tangamanga (450 hectáreas), uno de los parques urbanos más grandes de Latinoamérica. Atención de emergencias durante eventos masivos y conciertos en el parque.",
    tiempoRespuesta: "5-8 minutos",
    caracteristicasEspeciales: ["Parque Tangamanga", "450 ha", "Eventos masivos", "Zona poniente premium"]
  },
  // ═══ ZONA INDUSTRIAL AUTOMOTRIZ ═══
  {
    nombre: "Estación de Bomberos HAZMAT Zona Industrial",
    slug: "estacion-bomberos-hazmat-zona-industrial",
    direccion: "Carretera 57 km 12, Parque Industrial Logistik, Villa de Reyes, S.L.P.",
    coordenadas: { lat: 22.0834, lng: -100.9012 },
    telefono: "(444) 815-7575",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT Nivel A",
      "Emergencias pinturas automotrices",
      "Emergencias solventes industriales",
      "Emergencias baterías litio",
      "Derrames químicos",
      "Descontaminación masiva",
      "Coordinación brigadas plantas",
      "Rescate espacios confinados",
      "Atención pre-hospitalaria industrial"
    ],
    equipamiento: [
      "3 Autobombas industriales alta capacidad",
      "2 Unidades HAZMAT completas Nivel A",
      "1 Unidad espuma AFFF/AR-AFFF",
      "1 Unidad descontaminación masiva",
      "4 Ambulancias SVAA",
      "Trajes encapsulados Nivel A (12 sets)",
      "Detectores multigas portátiles (8)",
      "Equipo espacios confinados completo",
      "Ducha descontaminación 6 estaciones",
      "Contenedores retención derrames"
    ],
    personal: 75,
    copiasActa: false,
    zona: "Zona Industrial Automotriz",
    ciudad: "Parque Industrial Logistik",
    municipio: "Parque Industrial Logistik",
    municipiosCubiertos: ["Parque Industrial Logistik", "Parque Industrial El Potosí", "BMW Plant", "Proveedores zona sur"],
    descripcion: "Estación especializada HAZMAT Nivel A para el clúster automotriz de San Luis Potosí. Cobertura primaria de BMW Group Plant (2,500 empleados) y proveedores tier 1. Personal certificado en materiales peligrosos específicos de industria automotriz: pinturas base solvente, baterías de litio, aceites especiales y gases industriales. Protocolo de coordinación 24/7 con brigadas internas de plantas. Capacidad bilingüe para coordinación con ejecutivos internacionales.",
    tiempoRespuesta: "5-8 minutos parques industriales",
    caracteristicasEspeciales: ["HAZMAT Nivel A", "BMW Plant", "Bilingüe 24/7", "Pinturas automotrices", "Baterías litio", "Descontaminación masiva"]
  },
  {
    nombre: "Estación de Bomberos Villa de Reyes",
    slug: "estacion-bomberos-villa-reyes",
    direccion: "Carretera Villa de Reyes km 5, Villa de Reyes, S.L.P.",
    coordenadas: { lat: 21.8012, lng: -100.9345 },
    telefono: "(444) 815-9090",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés básico"],
    servicios: [
      "Combate de incendios industriales",
      "Apoyo HAZMAT",
      "Rescate vehicular carretero",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT apoyo",
      "1 Unidad rescate carretero",
      "2 Ambulancias"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Industrial Automotriz",
    ciudad: "Villa de Reyes",
    municipio: "Villa de Reyes",
    municipiosCubiertos: ["Villa de Reyes", "Carretera 57D tramo sur", "Parque Industrial Millennium", "Zona agrícola"],
    descripcion: "Apoyo a la zona industrial sur y cobertura de Villa de Reyes. Respaldo para emergencias HAZMAT y cobertura de la carretera 57D hacia Querétaro. Atención de zona agrícola del municipio.",
    tiempoRespuesta: "8-12 minutos",
    caracteristicasEspeciales: ["Apoyo HAZMAT", "Carretera 57D", "Parque Millennium", "Zona agrícola"]
  },
  {
    nombre: "Estación de Bomberos Parque Tres Naciones",
    slug: "estacion-bomberos-tres-naciones",
    direccion: "Av. Industrial 100, Parque Industrial Tres Naciones, San Luis Potosí, S.L.P.",
    coordenadas: { lat: 22.2156, lng: -100.8834 },
    telefono: "(444) 820-6060",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    idiomas: ["Español", "Inglés"],
    servicios: [
      "Combate de incendios industriales",
      "Respuesta HAZMAT Nivel B",
      "Coordinación con GM Complejo",
      "Emergencias fundición",
      "Rescate industrial",
      "Atención pre-hospitalaria"
    ],
    equipamiento: [
      "2 Autobombas industriales",
      "1 Unidad HAZMAT Nivel B",
      "2 Unidades rescate",
      "2 Ambulancias",
      "Equipo fundición (trajes aluminizados)"
    ],
    personal: 45,
    copiasActa: false,
    zona: "Zona Industrial Automotriz",
    ciudad: "Parque Industrial Tres Naciones",
    municipio: "Parque Industrial Tres Naciones",
    municipiosCubiertos: ["Parque Industrial Tres Naciones", "GM Complejo", "Zona fundición", "Proveedores GM"],
    descripcion: "Cobertura del Parque Industrial Tres Naciones y coordinación directa con General Motors Complejo San Luis Potosí (6,000 empleados). Especialización en emergencias de fundición de aluminio y procesos metalúrgicos. Capacidad HAZMAT Nivel B para aceites, refrigerantes y gases industriales.",
    tiempoRespuesta: "5-8 minutos parque industrial",
    caracteristicasEspeciales: ["HAZMAT Nivel B", "GM Complejo", "Fundición aluminio", "Coordinación permanente GM"]
  },
  // ═══ HUASTECA NORTE ═══
  {
    nombre: "Estación Central de Bomberos Ciudad Valles",
    slug: "estacion-central-ciudad-valles",
    direccion: "Blvd. México-Laredo 1500, Centro, Ciudad Valles, S.L.P.",
    coordenadas: { lat: 21.9967, lng: -99.0145 },
    telefono: "(481) 382-1035",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático swift water",
      "Rescate en ríos y cascadas",
      "Atención pre-hospitalaria",
      "Rescate vehicular carretero",
      "Incendios forestales",
      "Búsqueda y rescate",
      "Coordinación regional Huasteca"
    ],
    equipamiento: [
      "3 Autobombas",
      "2 Unidades rescate acuático swift water",
      "1 Unidad forestal 4x4",
      "3 Ambulancias 4x4",
      "Lanchas inflables rescate",
      "PFDs clase V completos",
      "Throw bags y cuerdas acuáticas",
      "Equipo comunicación montaña"
    ],
    personal: 50,
    copiasActa: true,
    zona: "Huasteca Norte",
    ciudad: "Ciudad Valles",
    municipio: "Ciudad Valles",
    municipiosCubiertos: ["Ciudad Valles", "Río Tampaón", "Tamuín", "El Naranjo", "Zona rafting"],
    descripcion: "Estación central de la región Huasteca Norte. Centro de coordinación para emergencias de turismo de aventura en ríos (rafting, kayak). Especialización en swift water rescue para el río Tampaón y afluentes. Cobertura de 2+ millones de turistas anuales que visitan la Huasteca.",
    tiempoRespuesta: "10-15 minutos zona urbana, 20-40 minutos zona rural",
    sitioWeb: "https://ciudadvalles.gob.mx/bomberos",
    caracteristicasEspeciales: ["Coordinación Huasteca", "Swift water rescue", "Río Tampaón", "2M+ turistas/año", "Rafting/kayak"]
  },
  {
    nombre: "Estación de Bomberos Tamuín",
    slug: "estacion-bomberos-tamuin",
    direccion: "Calle Juárez 200, Centro, Tamuín, S.L.P.",
    coordenadas: { lat: 22.0012, lng: -98.7834 },
    telefono: "(489) 386-0044",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático",
      "Atención pre-hospitalaria",
      "Incendios forestales",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Unidad rescate acuático",
      "1 Unidad forestal",
      "1 Ambulancia 4x4"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Huasteca Norte",
    ciudad: "Tamuín",
    municipio: "Tamuín",
    municipiosCubiertos: ["Tamuín", "Zona arqueológica Tamtok", "Río Tampaón bajo"],
    descripcion: "Cobertura de Tamuín y la zona arqueológica de Tamtok (cultura huasteca). Apoyo a Ciudad Valles para emergencias en el tramo bajo del río Tampaón y zona agrícola de la Huasteca.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Zona arqueológica Tamtok", "Río Tampaón bajo", "Zona agrícola"]
  },
  // ═══ HUASTECA SUR ═══
  {
    nombre: "Estación de Bomberos Aquismón",
    slug: "estacion-bomberos-aquismon",
    direccion: "Calle Independencia 50, Centro, Aquismón, S.L.P.",
    coordenadas: { lat: 21.6267, lng: -99.0167 },
    telefono: "(482) 363-0088",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate espeleológico certificado",
      "Rescate vertical extremo",
      "Rescate en Sótano de las Golondrinas",
      "Swift water rescue",
      "Rescate Cascada de Tamul",
      "Atención pre-hospitalaria montaña",
      "Búsqueda y rescate"
    ],
    equipamiento: [
      "2 Autobombas 4x4",
      "1 Unidad rescate espeleológico completa",
      "1 Unidad rescate acuático",
      "2 Ambulancias 4x4",
      "Cuerdas estáticas 600m certificadas",
      "Sistemas anclaje sótanos",
      "Camilla técnica Sked/Paraguard",
      "Equipo comunicación subterráneo",
      "Polipastos y sistemas descenso controlado"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Huasteca Sur",
    ciudad: "Aquismón",
    municipio: "Aquismón",
    municipiosCubiertos: ["Aquismón", "Sótano de las Golondrinas", "Cascada de Tamul", "Comunidades Tének"],
    descripcion: "Estación especializada en rescate espeleológico para el Sótano de las Golondrinas (512m profundidad) y rescate vertical extremo en Cascada de Tamul (105m). Personal certificado en espeleología por grupos nacionales. Coordinación con grupos voluntarios especializados para rescates complejos. Pueblo Mágico de Aquismón.",
    tiempoRespuesta: "15-45 minutos según ubicación (terreno extremo)",
    caracteristicasEspeciales: ["Espeleología certificada", "Sótano Golondrinas 512m", "Cascada Tamul 105m", "Pueblo Mágico", "Rescate vertical extremo"]
  },
  {
    nombre: "Estación de Bomberos Xilitla",
    slug: "estacion-bomberos-xilitla",
    direccion: "Calle Escobedo 25, Centro, Xilitla, S.L.P.",
    coordenadas: { lat: 21.3912, lng: -98.9923 },
    telefono: "(489) 365-0055",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate urbano",
      "Emergencias turísticas",
      "Atención pre-hospitalaria",
      "Incendios forestales selva",
      "Rescate fauna"
    ],
    equipamiento: [
      "1 Autobomba 4x4",
      "1 Unidad rescate",
      "1 Unidad forestal",
      "1 Ambulancia 4x4"
    ],
    personal: 18,
    copiasActa: true,
    zona: "Huasteca Sur",
    ciudad: "Xilitla",
    municipio: "Xilitla",
    municipiosCubiertos: ["Xilitla", "Jardín Edward James", "Las Pozas", "Comunidades serranas"],
    descripcion: "Cobertura del Pueblo Mágico de Xilitla y el Jardín Escultórico de Edward James (Las Pozas). Atención de emergencias turísticas en zona de selva húmeda. Apoyo para incendios forestales en la sierra.",
    tiempoRespuesta: "10-20 minutos zona urbana, 30-60 minutos zona rural",
    caracteristicasEspeciales: ["Pueblo Mágico", "Jardín Edward James", "Selva húmeda", "Las Pozas"]
  },
  {
    nombre: "Estación de Bomberos Tamasopo",
    slug: "estacion-bomberos-tamasopo",
    direccion: "Av. Hidalgo 100, Centro, Tamasopo, S.L.P.",
    coordenadas: { lat: 21.9234, lng: -99.3912 },
    telefono: "(482) 367-0033",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático",
      "Emergencias Puente de Dios",
      "Atención pre-hospitalaria",
      "Rescate cascadas"
    ],
    equipamiento: [
      "1 Autobomba 4x4",
      "1 Unidad rescate acuático",
      "1 Ambulancia 4x4",
      "Equipo buceo básico"
    ],
    personal: 15,
    copiasActa: true,
    zona: "Huasteca Sur",
    ciudad: "Tamasopo",
    municipio: "Tamasopo",
    municipiosCubiertos: ["Tamasopo", "Puente de Dios", "Cascadas de Tamasopo", "El Trampolín"],
    descripcion: "Cobertura de Tamasopo y el popular sitio turístico Puente de Dios. Rescate acuático especializado en pozas y cascadas. Atención de 400,000+ visitantes anuales al Puente de Dios.",
    tiempoRespuesta: "10-20 minutos",
    caracteristicasEspeciales: ["Puente de Dios", "400K visitantes/año", "Cascadas", "Rescate pozas"]
  },
  // ═══ ZONA ALTIPLANO ═══
  {
    nombre: "Estación Central de Bomberos Matehuala",
    slug: "estacion-central-matehuala",
    direccion: "Calle Guerrero 300, Centro, Matehuala, S.L.P.",
    coordenadas: { lat: 23.6534, lng: -100.6445 },
    telefono: "(488) 882-0033",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular carretero",
      "Búsqueda y rescate desierto",
      "Rescate minas abandonadas",
      "Atención pre-hospitalaria",
      "Emergencias clima extremo",
      "Incendios matorrales",
      "Coordinación regional Altiplano"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate 4x4 desierto",
      "1 Unidad SAR equipada",
      "2 Ambulancias",
      "GPS y equipo navegación",
      "Equipo supervivencia desierto",
      "Drones búsqueda (coordinación)"
    ],
    personal: 35,
    copiasActa: true,
    zona: "Zona Altiplano",
    ciudad: "Matehuala",
    municipio: "Matehuala",
    municipiosCubiertos: ["Matehuala", "Cedral", "Carretera 57", "Real de Catorce acceso"],
    descripcion: "Estación central de la región Altiplano. Coordinación de emergencias para Real de Catorce, zona minera histórica y desierto de Wirikuta. Capacidad de búsqueda y rescate en terreno desértico. Atención de emergencias por clima extremo (calor intenso y frío nocturno).",
    tiempoRespuesta: "8-15 minutos zona urbana, 30-60 minutos zona rural",
    caracteristicasEspeciales: ["Coordinación Altiplano", "SAR desierto", "Acceso Real de Catorce", "Carretera 57"]
  },
  {
    nombre: "Estación de Bomberos Real de Catorce",
    slug: "estacion-bomberos-real-catorce",
    direccion: "Calle Lanzagorta s/n, Real de Catorce, S.L.P.",
    coordenadas: { lat: 23.6912, lng: -100.8845 },
    telefono: "(488) 887-5010",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Búsqueda y rescate montaña",
      "Emergencias por altitud",
      "Rescate minas abandonadas",
      "Atención pre-hospitalaria",
      "Emergencias clima extremo"
    ],
    equipamiento: [
      "1 Autobomba compacta 4x4",
      "1 Unidad rescate montaña",
      "1 Ambulancia 4x4",
      "Equipo rescate minas",
      "Oxígeno suplementario (altitud)"
    ],
    personal: 12,
    copiasActa: true,
    zona: "Zona Altiplano",
    ciudad: "Real de Catorce",
    municipio: "Real de Catorce",
    municipiosCubiertos: ["Real de Catorce", "Túnel Ogarrio", "Zona sagrada Wirikuta", "Cerro del Quemado"],
    descripcion: "Estación en el Pueblo Mágico de Real de Catorce (2,750 msnm). Capacidad limitada con apoyo de Matehuala para emergencias mayores. Rescate en minas abandonadas del pueblo fantasma. Coordinación con comunidad Wixárika para emergencias en zona sagrada de Wirikuta. Atención de 350,000+ turistas anuales.",
    tiempoRespuesta: "5-15 minutos pueblo, 30-90 minutos zona desierto",
    caracteristicasEspeciales: ["Pueblo Mágico", "2,750 msnm", "Minas abandonadas", "Wirikuta", "Turismo místico", "350K visitantes"]
  },
  // ═══ ZONA MEDIA ═══
  {
    nombre: "Estación Central de Bomberos Rioverde",
    slug: "estacion-central-rioverde",
    direccion: "Av. Juárez 500, Centro, Rioverde, S.L.P.",
    coordenadas: { lat: 21.9312, lng: -99.9867 },
    telefono: "(487) 872-0066",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate acuático Media Luna",
      "Rescate vehicular",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas",
      "Incendios cañaverales",
      "Coordinación regional Zona Media"
    ],
    equipamiento: [
      "2 Autobombas",
      "1 Unidad rescate acuático",
      "1 Unidad rescate carretero",
      "2 Ambulancias"
    ],
    personal: 30,
    copiasActa: true,
    zona: "Zona Media",
    ciudad: "Rioverde",
    municipio: "Rioverde",
    municipiosCubiertos: ["Rioverde", "Media Luna", "Ciudad Fernández", "Zona agrícola"],
    descripcion: "Estación central de la Zona Media. Rescate acuático especializado en la Media Luna (laguna de manantial popular para buceo y natación). Atención de emergencias agrícolas y temporada de quema de cañaverales.",
    tiempoRespuesta: "8-15 minutos",
    caracteristicasEspeciales: ["Media Luna", "Buceo", "Zona agrícola", "Cañaverales"]
  },
  {
    nombre: "Estación de Bomberos San Ciro de Acosta",
    slug: "estacion-bomberos-san-ciro",
    direccion: "Plaza Principal s/n, San Ciro de Acosta, S.L.P.",
    coordenadas: { lat: 21.6234, lng: -99.8312 },
    telefono: "(487) 878-0022",
    telefonoEmergencias: "911",
    horario: "24 horas, 365 días",
    servicios: [
      "Combate de incendios",
      "Rescate básico",
      "Atención pre-hospitalaria",
      "Emergencias agrícolas"
    ],
    equipamiento: [
      "1 Autobomba",
      "1 Ambulancia",
      "Equipo básico"
    ],
    personal: 12,
    copiasActa: true,
    zona: "Zona Media",
    ciudad: "San Ciro de Acosta",
    municipio: "San Ciro de Acosta",
    municipiosCubiertos: ["San Ciro de Acosta", "Comunidades rurales", "Zona agrícola sur"],
    descripcion: "Estación de apoyo para la zona sur de la región Media. Cobertura de comunidades rurales y zona agrícola. Apoyo de Rioverde para emergencias mayores.",
    tiempoRespuesta: "10-25 minutos",
    caracteristicasEspeciales: ["Zona rural", "Agricultura", "Apoyo regional"]
  }
];
function getEstacionesPorZona(zona) {
  return estacionesSanLuisPotosi.filter((e) => e.zona === zona);
}
function getAlertasActivas(zona) {
  const alertasActivas = [];
  for (const [, alerta] of Object.entries(ALERTAS_SLP)) {
    if (alerta.activa()) {
      if (!zona || alerta.zonas.some((z) => z.toLowerCase().includes(zona.toLowerCase()))) {
        alertasActivas.push({
          mensaje: alerta.mensaje,
          tipo: alerta.tipo,
          icono: alerta.icono,
          prioridad: alerta.prioridad
        });
      }
    }
  }
  const prioridadOrden = { critica: 0, alta: 1, media: 2, baja: 3 };
  return alertasActivas.sort(
    (a, b) => (prioridadOrden[a.prioridad] || 3) - (prioridadOrden[b.prioridad] || 3)
  );
}
function generarSchemaEstacion(estacion) {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressRegion": "San Luis Potosí",
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": estacion.municipiosCubiertos?.join(", "),
    "serviceType": estacion.servicios,
    "availableLanguage": estacion.idiomas || ["Spanish"]
  };
}
function getPlantasAutomotrices() {
  return INDUSTRIA_AUTOMOTRIZ_SLP.plantasPrincipales;
}
function getMunicipios() {
  const ciudades = estacionesSanLuisPotosi.map((e) => {
    if (e.municipiosCubiertos && e.municipiosCubiertos.length > 0) {
      return e.municipiosCubiertos[0];
    }
    return e.zona || "";
  });
  return [...new Set(ciudades)].filter(Boolean).sort();
}

export { FAQ_SLP as F, PROTOCOLOS_SLP as P, ZONAS_SLP as Z, getAlertasActivas as a, generarSchemaEstacion as b, getPlantasAutomotrices as c, getMunicipios as d, estacionesSanLuisPotosi as e, getEstacionesPorZona as g };
