const estacionesNuevoLeon = [
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA CENTRO MONTERREY
  // Centro histórico, Macroplaza, Barrio Antiguo, zona de corporativos
  // Corazón administrativo y comercial de la ZMM
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Monterrey",
    nombreCorto: "Est. Central Monterrey",
    slug: "estacion-central-monterrey",
    direccion: "Av. Ignacio Zaragoza 1000 Sur, Centro",
    ciudad: "Monterrey",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64000",
    telefono: "(81) 8345-2424",
    telefono2: "(81) 8345-2425",
    telefonoEmergencia: "911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y de alto riesgo",
      "Materiales peligrosos HAZMAT Nivel III",
      "Rescate urbano especializado USAR",
      "Coordinación metropolitana de emergencias",
      "Academia de formación bomberil del estado",
      "Rescate en estructuras colapsadas",
      "Rescate vehicular pesado",
      "Atención de emergencias en edificios de gran altura",
      "Centro de operaciones de emergencia (COE)",
      "Rescate en espacios confinados",
      "Control de fugas de gas masivas",
      "Emergencias en Metro de Monterrey"
    ],
    coordenadas: { lat: 25.6714, lng: -100.3089 },
    zona: "Zona Centro Monterrey",
    especialidades: ["HAZMAT Nivel III", "USAR", "Edificios Alto", "Coordinación Metropolitana", "Metro"],
    comandancia: "Heroico Cuerpo de Bomberos de Monterrey",
    historia: "Fundado en 1885, el H. Cuerpo de Bomberos de Monterrey es uno de los más antiguos y prestigiosos de México. La Estación Central coordina todas las operaciones de la zona metropolitana y cuenta con la única certificación HAZMAT Nivel III del norte de México. Desde 2010, opera el Centro de Operaciones de Emergencia (COE) que coordina respuesta con 12 municipios.",
    cobertura: ["Centro Histórico", "Macroplaza", "Barrio Antiguo", "Obispado", "Tecnológico", "Zona de corporativos", "Metro Línea 1 y 2"],
    tiempoRespuesta: "4-6 minutos zona centro",
    fundacion: "1885",
    personal: 120,
    unidades: 18
  },
  {
    nombre: "Estación de Bomberos Monterrey Norte - Mitras",
    nombreCorto: "Est. Monterrey Norte - Mitras",
    slug: "estacion-bomberos-monterrey-norte",
    direccion: "Av. Ruiz Cortines 2500, Mitras Norte",
    ciudad: "Monterrey",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64320",
    telefono: "(81) 8348-5050",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios residenciales e industriales",
      "Rescate vehicular autopista Monterrey-Laredo",
      "Emergencias centros comerciales",
      "Atención fraccionamientos zona norte",
      "Incendios forestales cerros circundantes"
    ],
    coordenadas: { lat: 25.7156, lng: -100.3234 },
    zona: "Zona Centro Monterrey",
    especialidades: ["Rescate Vehicular", "Incendios Forestales"],
    cobertura: ["Mitras Norte", "Mitras Centro", "Cumbres", "San Bernabé", "Linda Vista"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Monterrey Sur - Contry",
    nombreCorto: "Est. Monterrey Sur - Contry",
    slug: "estacion-bomberos-monterrey-sur",
    direccion: "Av. Lázaro Cárdenas 3000, Contry",
    ciudad: "Monterrey",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64860",
    telefono: "(81) 8357-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Emergencias zona hospitalaria",
      "Atención edificios corporativos",
      "Emergencias centros comerciales premium"
    ],
    coordenadas: { lat: 25.6389, lng: -100.2856 },
    zona: "Zona Centro Monterrey",
    especialidades: ["Emergencias Hospitalarias", "Edificios Corporativos"],
    cobertura: ["Contry", "Del Valle", "Cumbres Elite", "Zona hospitalaria TecSalud", "Centros comerciales"],
    tiempoRespuesta: "5-10 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // CORREDOR INDUSTRIAL NORTE
  // TERNIUM, acerías, manufactura pesada, parques industriales
  // Mayor concentración de industria pesada de México
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos HAZMAT Industrial Norte",
    nombreCorto: "Est. HAZMAT Industrial Norte",
    slug: "estacion-bomberos-hazmat-norte",
    direccion: "Blvd. Fundidora 1500, Parque Industrial Norte",
    ciudad: "Monterrey",
    municipio: "Monterrey",
    estado: "Nuevo León",
    cp: "64010",
    telefono: "(81) 8350-6060",
    telefono2: "(81) 8350-6061",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales clase A, B, C y D",
      "Materiales peligrosos HAZMAT Nivel III",
      "Emergencias en plantas siderúrgicas (TERNIUM, AHMSA)",
      "Rescate en espacios confinados industriales",
      "Control de derrames químicos masivos",
      "Emergencias con metales fundidos",
      "Atención explosiones industriales",
      "Monitoreo de calidad del aire post-incidente",
      "Descontaminación masiva",
      "Coordinación con brigadas industriales"
    ],
    coordenadas: { lat: 25.6923, lng: -100.2745 },
    zona: "Corredor Industrial Norte",
    especialidades: ["HAZMAT Nivel III", "Incendios Clase D", "Espacios Confinados", "Metales Fundidos", "Descontaminación"],
    comandancia: "Unidad Especializada HAZMAT - H. Cuerpo de Bomberos de Monterrey",
    historia: "Creada en 2005 específicamente para atender el Corredor Industrial Norte, esta estación es la más especializada en emergencias HAZMAT de todo México. Cuenta con equipamiento de nivel internacional y personal certificado por NFPA y OSHA. Atiende las instalaciones de TERNIUM, una de las siderúrgicas más grandes de América Latina.",
    cobertura: ["TERNIUM Monterrey", "Parque Industrial Stiva", "Parque Industrial Kalos", "Zona fundidora", "Refinería PEMEX"],
    tiempoRespuesta: "5-8 minutos zona industrial",
    fundacion: "2005",
    personal: 65,
    unidades: 10
  },
  {
    nombre: "Estación de Bomberos Apodaca Industrial",
    nombreCorto: "Est. Apodaca Industrial",
    slug: "estacion-bomberos-apodaca-industrial",
    direccion: "Blvd. Industrial 800, Parque Industrial Apodaca",
    ciudad: "Apodaca",
    municipio: "Apodaca",
    estado: "Nuevo León",
    cp: "66600",
    telefono: "(81) 8386-4040",
    telefono2: "(81) 8386-4041",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales",
      "Materiales peligrosos HAZMAT Nivel II",
      "Emergencias en plantas automotrices (KIA, Navistar)",
      "Rescate en plantas de manufactura",
      "Atención Aeropuerto Internacional Monterrey",
      "Emergencias en almacenes y centros de distribución",
      "Control de incendios en bodegas",
      "Coordinación con brigadas empresariales"
    ],
    coordenadas: { lat: 25.7678, lng: -100.1923 },
    zona: "Corredor Industrial Norte",
    especialidades: ["HAZMAT Nivel II", "Automotriz", "ARFF Aeropuerto", "Manufactura"],
    historia: "Apodaca concentra la industria automotriz del estado con plantas de KIA Motors, Navistar y cientos de proveedores Tier 1 y Tier 2. También alberga el Aeropuerto Internacional de Monterrey.",
    cobertura: ["Parque Industrial Apodaca", "KIA Motors", "Navistar", "Aeropuerto MTY", "Expo Guadalupe", "FINSA"],
    tiempoRespuesta: "5-12 minutos",
    personal: 45,
    unidades: 7
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // CORREDOR INDUSTRIAL SUR
  // CEMEX, Vitro, petroquímica, manufactura de vidrio, cemento, materiales peligrosos
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos HAZMAT Industrial Sur",
    nombreCorto: "Est. HAZMAT Industrial Sur",
    slug: "estacion-bomberos-hazmat-sur",
    direccion: "Carretera Nacional Km 265, Santa Catarina Industrial",
    ciudad: "Santa Catarina",
    municipio: "Santa Catarina",
    estado: "Nuevo León",
    cp: "66350",
    telefono: "(81) 8336-7070",
    telefono2: "(81) 8336-7071",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales especializados",
      "Materiales peligrosos HAZMAT Nivel III",
      "Emergencias en plantas cementeras (CEMEX)",
      "Emergencias en plantas de vidrio (Vitro)",
      "Control de derrames petroquímicos",
      "Rescate en hornos y altas temperaturas",
      "Atención explosiones y colapsos industriales",
      "Monitoreo ambiental post-incidente",
      "Emergencias con gases tóxicos industriales",
      "Coordinación regional industrial"
    ],
    coordenadas: { lat: 25.6456, lng: -100.4234 },
    zona: "Corredor Industrial Sur",
    especialidades: ["HAZMAT Nivel III", "Petroquímica", "Cementeras", "Vidriera", "Gases Tóxicos"],
    comandancia: "Unidad HAZMAT Sur - Bomberos Metropolitanos",
    historia: "Esta estación cubre el corredor industrial sur donde se ubican los corporativos globales de CEMEX (cementera #1 mundial) y Vitro (vidriera). Especializada en emergencias con altas temperaturas, hornos industriales y materiales de construcción. Coordina respuesta con bomberos de Santa Catarina y San Pedro.",
    cobertura: ["CEMEX Planta Monterrey", "Vitro", "Parque Industrial Santa Catarina", "Cementos Mexicanos", "PPG Industries"],
    tiempoRespuesta: "6-10 minutos zona industrial",
    fundacion: "2008",
    personal: 50,
    unidades: 8
  },
  {
    nombre: "Estación de Bomberos García Industrial",
    nombreCorto: "Est. García Industrial",
    slug: "estacion-bomberos-garcia-industrial",
    direccion: "Blvd. Interindustrial 500, Parque Industrial García",
    ciudad: "García",
    municipio: "García",
    estado: "Nuevo León",
    cp: "66000",
    telefono: "(81) 8287-5050",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios industriales",
      "Emergencias en parques industriales",
      "Rescate carretero autopista Monterrey-Saltillo",
      "Materiales peligrosos HAZMAT Nivel I",
      "Incendios forestales zona cerril",
      "Atención zona de crecimiento acelerado"
    ],
    coordenadas: { lat: 25.7934, lng: -100.5678 },
    zona: "Corredor Industrial Sur",
    especialidades: ["Industrial", "Rescate Carretero", "Incendios Forestales"],
    cobertura: ["Parque Industrial García", "Autopista MTY-Saltillo", "Zona habitacional García", "Sierra de García"],
    tiempoRespuesta: "6-15 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA PONIENTE
  // San Pedro Garza García, Santa Catarina - zona residencial AAA, corporativos
  // Municipio con mayor ingreso per cápita de América Latina
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos San Pedro Garza García",
    nombreCorto: "Est. San Pedro Garza García",
    slug: "estacion-bomberos-san-pedro",
    direccion: "Av. Vasconcelos 1000, Valle Oriente",
    ciudad: "San Pedro Garza García",
    municipio: "San Pedro Garza García",
    estado: "Nuevo León",
    cp: "66260",
    telefono: "(81) 8378-8080",
    telefono2: "(81) 8378-8081",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios en residencias de alto valor",
      "Emergencias en edificios corporativos Torre KOI, Pabellón M",
      "Rescate técnico especializado",
      "Emergencias centros comerciales premium",
      "Incendios forestales Parque Ecológico Chipinque",
      "Atención VIP ejecutivos y diplomáticos",
      "Emergencias en clubes y campos de golf",
      "Rescate vertical en edificios de gran altura",
      "Servicio de prevención para eventos de alto perfil"
    ],
    coordenadas: { lat: 25.6523, lng: -100.3756 },
    zona: "Zona Metropolitana Poniente",
    especialidades: ["Alto Valor", "Edificios Gran Altura", "Chipinque", "VIP", "Corporativos"],
    comandancia: "H. Cuerpo de Bomberos de San Pedro Garza García",
    historia: "San Pedro Garza García es el municipio con mayor ingreso per cápita de América Latina. Esta estación atiende las zonas residenciales más exclusivas de México, edificios corporativos de clase mundial como Torre KOI (280m, el más alto de México), y el Parque Ecológico Chipinque. Cuenta con protocolos VIP para atención de ejecutivos y diplomáticos.",
    cobertura: ["Valle Oriente", "Valle de San Ángel", "Chipinque", "Del Valle", "Fuentes del Valle", "Torre KOI", "Pabellón M", "Galerías Valle Oriente"],
    tiempoRespuesta: "4-8 minutos",
    fundacion: "1978",
    personal: 55,
    unidades: 9
  },
  {
    nombre: "Estación de Bomberos Santa Catarina",
    nombreCorto: "Est. Santa Catarina",
    slug: "estacion-bomberos-santa-catarina",
    direccion: "Blvd. Gustavo Díaz Ordaz 100, Centro Santa Catarina",
    ciudad: "Santa Catarina",
    municipio: "Santa Catarina",
    estado: "Nuevo León",
    cp: "66100",
    telefono: "(81) 8336-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate carretero autopistas",
      "Emergencias zona industrial",
      "Incendios forestales Sierra Madre",
      "Rescate en montaña (Huasteca)",
      "Atención eventos masivos Parque Fundidora"
    ],
    coordenadas: { lat: 25.6734, lng: -100.4567 },
    zona: "Zona Metropolitana Poniente",
    especialidades: ["Rescate Montaña", "Huasteca", "Industrial"],
    cobertura: ["Santa Catarina Centro", "La Huasteca", "Zona industrial", "Autopista MTY-Saltillo", "Parque La Huasteca"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA ORIENTE
  // Guadalupe, Juárez - zona industrial mixta, alta densidad poblacional
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Guadalupe",
    nombreCorto: "Est. Central Guadalupe",
    slug: "estacion-central-guadalupe",
    direccion: "Av. Pablo Livas 500, Centro Guadalupe",
    ciudad: "Guadalupe",
    municipio: "Guadalupe",
    estado: "Nuevo León",
    cp: "67100",
    telefono: "(81) 8367-9090",
    telefono2: "(81) 8367-9091",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular zona metropolitana oriente",
      "Emergencias industriales",
      "Atención masiva eventos Expo Guadalupe",
      "Rescate urbano",
      "Control de fugas de gas",
      "Emergencias en mercados y zonas comerciales",
      "Coordinación zona oriente ZMM"
    ],
    coordenadas: { lat: 25.6767, lng: -100.2234 },
    zona: "Zona Metropolitana Oriente",
    especialidades: ["Rescate Urbano", "Eventos Masivos", "Coordinación Oriente"],
    comandancia: "H. Cuerpo de Bomberos de Guadalupe",
    historia: "Guadalupe es el segundo municipio más poblado de Nuevo León con más de 700,000 habitantes. La estación central coordina la respuesta de emergencias para toda la zona oriente de la metrópoli, incluyendo eventos masivos en Expo Guadalupe que recibe millones de visitantes anualmente.",
    cobertura: ["Guadalupe Centro", "Linda Vista", "Valle de Linda Vista", "Expo Guadalupe", "Zona industrial oriente"],
    tiempoRespuesta: "5-10 minutos",
    fundacion: "1970",
    personal: 50,
    unidades: 8
  },
  {
    nombre: "Estación de Bomberos Juárez",
    nombreCorto: "Est. Juárez",
    slug: "estacion-bomberos-juarez",
    direccion: "Av. Juárez 800, Centro Juárez",
    ciudad: "Juárez",
    municipio: "Juárez",
    estado: "Nuevo León",
    cp: "67250",
    telefono: "(81) 8379-4040",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate vehicular",
      "Emergencias zona industrial",
      "Atención colonias populares",
      "Control de fugas de gas"
    ],
    coordenadas: { lat: 25.6456, lng: -100.0934 },
    zona: "Zona Metropolitana Oriente",
    especialidades: ["Rescate Vehicular", "Industrial"],
    cobertura: ["Juárez Centro", "Zona industrial Juárez", "Colonias circundantes"],
    tiempoRespuesta: "5-12 minutos"
  },
  {
    nombre: "Estación de Bomberos Escobedo",
    nombreCorto: "Est. Escobedo",
    slug: "estacion-bomberos-escobedo",
    direccion: "Av. Raúl Salinas 300, Centro Escobedo",
    ciudad: "General Escobedo",
    municipio: "General Escobedo",
    estado: "Nuevo León",
    cp: "66050",
    telefono: "(81) 8384-6060",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias zona industrial norte",
      "Rescate vehicular",
      "Materiales peligrosos HAZMAT Nivel I",
      "Atención zona de alto crecimiento"
    ],
    coordenadas: { lat: 25.7956, lng: -100.3234 },
    zona: "Zona Metropolitana Oriente",
    especialidades: ["Industrial Norte", "HAZMAT Nivel I"],
    cobertura: ["Escobedo Centro", "Zona industrial Escobedo", "Fraccionamientos norte", "Autopista Colombia"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // CORREDOR CARRETERO NORTE
  // Autopista Monterrey-Laredo, comercio internacional, zona fronteriza
  // Corredor comercial más importante de México hacia EE.UU.
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Carretera Colombia",
    nombreCorto: "Est. Carretera Colombia",
    slug: "estacion-bomberos-carretera-colombia",
    direccion: "Carretera a Colombia Km 25, General Zuazua",
    ciudad: "General Zuazua",
    municipio: "General Zuazua",
    estado: "Nuevo León",
    cp: "65760",
    telefono: "(81) 8229-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Rescate carretero especializado tractocamiones",
      "Emergencias con materiales peligrosos en tránsito",
      "Atención accidentes autopista a Colombia/Laredo",
      "Combate de incendios vehículos de carga",
      "Coordinación con Aduanas y CBP (US)",
      "Emergencias comercio internacional",
      "Derrames de combustible en carretera"
    ],
    coordenadas: { lat: 25.9234, lng: -100.2678 },
    zona: "Corredor Carretero Norte",
    especialidades: ["Rescate Carretero", "HAZMAT Transporte", "Tractocamiones", "Frontera"],
    historia: "La carretera Monterrey-Colombia-Laredo es el corredor comercial terrestre más importante de México hacia Estados Unidos, con más de 15,000 tractocamiones diarios. Esta estación especializada atiende emergencias con vehículos de carga pesada y materiales peligrosos en tránsito internacional.",
    cobertura: ["Autopista Monterrey-Colombia", "Puente Colombia", "General Zuazua", "Ciénega de Flores", "Aduanas"],
    tiempoRespuesta: "8-20 minutos según ubicación"
  },
  {
    nombre: "Estación de Bomberos Salinas Victoria",
    nombreCorto: "Est. Salinas Victoria",
    slug: "estacion-bomberos-salinas-victoria",
    direccion: "Carretera a Laredo Km 40, Salinas Victoria",
    ciudad: "Salinas Victoria",
    municipio: "Salinas Victoria",
    estado: "Nuevo León",
    cp: "65500",
    telefono: "(81) 8396-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate carretero norte",
      "Emergencias zona rural",
      "Incendios de pastizales",
      "Atención ranchos y zonas agrícolas"
    ],
    coordenadas: { lat: 25.9567, lng: -100.2934 },
    zona: "Corredor Carretero Norte",
    especialidades: ["Rescate Carretero", "Rural", "Pastizales"],
    cobertura: ["Salinas Victoria", "Carretera a Laredo norte", "Zona rural norte"],
    tiempoRespuesta: "8-20 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // SIERRA MADRE ORIENTAL
  // Santiago, Allende, Chipinque - incendios forestales, rescate de montaña, ecoturismo
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Santiago - Sierra Madre",
    nombreCorto: "Est. Santiago - Sierra Madre",
    slug: "estacion-bomberos-santiago-sierra",
    direccion: "Hidalgo 200, Centro Santiago",
    ciudad: "Santiago",
    municipio: "Santiago",
    estado: "Nuevo León",
    cp: "67300",
    telefono: "(81) 8285-1414",
    telefono2: "(81) 8285-1415",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios forestales Sierra Madre Oriental",
      "Rescate de montaña especializado",
      "Rescate en cascadas (Cola de Caballo, El Chipitín)",
      "Emergencias Pueblo Mágico Santiago",
      "Búsqueda y rescate de excursionistas",
      "Rescate vertical y rappel",
      "Emergencias en cabañas y hoteles de montaña",
      "Evacuación turística por incendios",
      "Coordinación con CONAFOR"
    ],
    coordenadas: { lat: 25.4234, lng: -100.1456 },
    zona: "Sierra Madre Oriental",
    especialidades: ["Incendios Forestales", "Rescate Montaña", "Cascadas", "Pueblo Mágico", "Excursionistas"],
    comandancia: "H. Cuerpo de Bomberos de Santiago",
    historia: "Santiago es Pueblo Mágico desde 2006 y puerta de entrada a la Sierra Madre Oriental. Esta estación es la más especializada en rescate de montaña de todo el noreste de México. Atiende las famosas cascadas Cola de Caballo y El Chipitín, que reciben más de 1 millón de visitantes al año. Durante la temporada de incendios (marzo-junio), coordina con CONAFOR la protección de más de 100,000 hectáreas de bosque.",
    cobertura: ["Santiago Centro", "Cola de Caballo", "El Chipitín", "Laguna de Sánchez", "El Cercado", "Parque Ecológico La Huasteca", "Carretera a Santiago"],
    tiempoRespuesta: "5-25 minutos según ubicación",
    fundacion: "1985",
    personal: 35,
    unidades: 6
  },
  {
    nombre: "Estación de Bomberos Allende",
    nombreCorto: "Est. Allende",
    slug: "estacion-bomberos-allende",
    direccion: "Juárez 150, Centro Allende",
    ciudad: "Allende",
    municipio: "Allende",
    estado: "Nuevo León",
    cp: "67350",
    telefono: "(81) 8286-0505",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios forestales",
      "Rescate en zonas rurales",
      "Emergencias agroindustriales",
      "Incendios de pastizales",
      "Apoyo a Santiago en temporada alta"
    ],
    coordenadas: { lat: 25.2834, lng: -100.0234 },
    zona: "Sierra Madre Oriental",
    especialidades: ["Incendios Forestales", "Rural", "Agroindustrial"],
    cobertura: ["Allende Centro", "Zona agrícola sur", "Acceso Sierra Madre sur"],
    tiempoRespuesta: "5-20 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA CITRÍCOLA
  // Montemorelos, Linares - agroindustria, producción de cítricos, zona rural
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Montemorelos",
    nombreCorto: "Est. Montemorelos",
    slug: "estacion-bomberos-montemorelos",
    direccion: "Av. Universidad 300, Centro Montemorelos",
    ciudad: "Montemorelos",
    municipio: "Montemorelos",
    estado: "Nuevo León",
    cp: "67500",
    telefono: "(826) 263-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y agrícolas",
      "Emergencias en empacadoras de cítricos",
      "Rescate carretero autopista Nacional",
      "Incendios en huertas y plantaciones",
      "Emergencias Universidad de Montemorelos",
      "Atención zona rural citrícola"
    ],
    coordenadas: { lat: 25.1867, lng: -99.8267 },
    zona: "Zona Citrícola",
    especialidades: ["Agroindustrial", "Empacadoras", "Rural"],
    comandancia: "H. Cuerpo de Bomberos de Montemorelos",
    historia: "Montemorelos es la capital citrícola de México y sede de la Universidad de Montemorelos. La estación atiende emergencias en las principales empacadoras de naranja del país y las extensas huertas de la región.",
    cobertura: ["Montemorelos Centro", "Zona citrícola", "Universidad de Montemorelos", "Autopista Nacional", "Empacadoras"],
    tiempoRespuesta: "5-15 minutos"
  },
  {
    nombre: "Estación de Bomberos Linares",
    nombreCorto: "Est. Linares",
    slug: "estacion-bomberos-linares",
    direccion: "Morelos 400, Centro Linares",
    ciudad: "Linares",
    municipio: "Linares",
    estado: "Nuevo León",
    cp: "67700",
    telefono: "(821) 212-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate carretero sur del estado",
      "Emergencias agroindustriales",
      "Incendios forestales zona sur",
      "Atención turismo aventura (rapel, kayak)"
    ],
    coordenadas: { lat: 24.8567, lng: -99.5634 },
    zona: "Zona Citrícola",
    especialidades: ["Carretero", "Agroindustrial", "Turismo Aventura"],
    cobertura: ["Linares Centro", "Zona agrícola sur", "Carretera a Ciudad Victoria", "Rapel y kayak zona"],
    tiempoRespuesta: "5-20 minutos"
  }
];
function getEstacionesHAZMAT() {
  return estacionesNuevoLeon.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("hazmat")
    )
  );
}
function getEstacionesIndustriales() {
  return estacionesNuevoLeon.filter(
    (e) => e.zona?.includes("Industrial") || e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("industrial") || esp.toLowerCase().includes("manufactura")
    )
  );
}
function getEstacionesMontana() {
  return estacionesNuevoLeon.filter(
    (e) => e.zona === "Sierra Madre Oriental" || e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("montaña") || esp.toLowerCase().includes("forestal") || esp.toLowerCase().includes("chipinque")
    )
  );
}
function getEstacionesCarreteras() {
  return estacionesNuevoLeon.filter(
    (e) => e.zona?.includes("Carretero") || e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("carretero") || esp.toLowerCase().includes("tractocamiones")
    )
  );
}
({
  totalEstaciones: estacionesNuevoLeon.length,
  estacionesHAZMAT: getEstacionesHAZMAT().length,
  estacionesIndustriales: getEstacionesIndustriales().length,
  estacionesMontana: getEstacionesMontana().length,
  estacionesCarreteras: getEstacionesCarreteras().length});
function getMunicipios() {
  return [...new Set(estacionesNuevoLeon.map((e) => e.ciudad))].filter(Boolean).sort();
}
function getEstacionBySlug(slug) {
  return estacionesNuevoLeon.find((e) => e.slug === slug);
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismaZona = estacionesNuevoLeon.filter((e) => e.slug !== slug && e.zona === estacion.zona);
  const otras = estacionesNuevoLeon.filter((e) => e.slug !== slug && e.zona !== estacion.zona);
  return [...mismaZona, ...otras].slice(0, limit);
}

export { getEstacionesCercanas as a, getMunicipios as b, estacionesNuevoLeon as e, getEstacionBySlug as g };
