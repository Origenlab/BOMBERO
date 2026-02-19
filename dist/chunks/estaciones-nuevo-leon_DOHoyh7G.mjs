const estacionesNuevoLeon = [
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA CENTRO MONTERREY
  // Centro histórico, Macroplaza, Barrio Antiguo, zona de corporativos
  // Corazón administrativo y comercial de la ZMM
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Monterrey",
    slug: "estacion-central-monterrey",
    direccion: "Av. Ignacio Zaragoza 1000 Sur, Centro",
    ciudad: "Monterrey",
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
    slug: "estacion-bomberos-monterrey-norte",
    direccion: "Av. Ruiz Cortines 2500, Mitras Norte",
    ciudad: "Monterrey",
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
    slug: "estacion-bomberos-monterrey-sur",
    direccion: "Av. Lázaro Cárdenas 3000, Contry",
    ciudad: "Monterrey",
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
    slug: "estacion-bomberos-hazmat-norte",
    direccion: "Blvd. Fundidora 1500, Parque Industrial Norte",
    ciudad: "Monterrey",
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
    slug: "estacion-bomberos-apodaca-industrial",
    direccion: "Blvd. Industrial 800, Parque Industrial Apodaca",
    ciudad: "Apodaca",
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
    slug: "estacion-bomberos-hazmat-sur",
    direccion: "Carretera Nacional Km 265, Santa Catarina Industrial",
    ciudad: "Santa Catarina",
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
    slug: "estacion-bomberos-garcia-industrial",
    direccion: "Blvd. Interindustrial 500, Parque Industrial García",
    ciudad: "García",
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
    slug: "estacion-bomberos-san-pedro",
    direccion: "Av. Vasconcelos 1000, Valle Oriente",
    ciudad: "San Pedro Garza García",
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
    slug: "estacion-bomberos-santa-catarina",
    direccion: "Blvd. Gustavo Díaz Ordaz 100, Centro Santa Catarina",
    ciudad: "Santa Catarina",
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
    slug: "estacion-central-guadalupe",
    direccion: "Av. Pablo Livas 500, Centro Guadalupe",
    ciudad: "Guadalupe",
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
    slug: "estacion-bomberos-juarez",
    direccion: "Av. Juárez 800, Centro Juárez",
    ciudad: "Juárez",
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
    slug: "estacion-bomberos-escobedo",
    direccion: "Av. Raúl Salinas 300, Centro Escobedo",
    ciudad: "General Escobedo",
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
    slug: "estacion-bomberos-carretera-colombia",
    direccion: "Carretera a Colombia Km 25, General Zuazua",
    ciudad: "General Zuazua",
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
    slug: "estacion-bomberos-salinas-victoria",
    direccion: "Carretera a Laredo Km 40, Salinas Victoria",
    ciudad: "Salinas Victoria",
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
    slug: "estacion-bomberos-santiago-sierra",
    direccion: "Hidalgo 200, Centro Santiago",
    ciudad: "Santiago",
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
    slug: "estacion-bomberos-allende",
    direccion: "Juárez 150, Centro Allende",
    ciudad: "Allende",
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
    slug: "estacion-bomberos-montemorelos",
    direccion: "Av. Universidad 300, Centro Montemorelos",
    ciudad: "Montemorelos",
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
    slug: "estacion-bomberos-linares",
    direccion: "Morelos 400, Centro Linares",
    ciudad: "Linares",
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
const ZONAS_NUEVO_LEON = [
  {
    id: "centro",
    nombre: "Zona Centro Monterrey",
    icono: "🏙️",
    color: "#1e40af",
    colorSecundario: "#3b82f6",
    descripcion: "Centro histórico, Macroplaza, Barrio Antiguo, zona de corporativos. Corazón administrativo y comercial de la ZMM con más de 1 millón de habitantes.",
    poblacion: "1,100,000+ habitantes",
    municipios: ["Monterrey (centro)"],
    riesgos: ["Incendios estructurales", "Edificios de gran altura", "Metro", "Eventos masivos"],
    caracteristicas: ["Macroplaza", "Barrio Antiguo", "Torre KOI (280m)", "Metro L1-L2-L3", "Corporativos"],
    serviciosEspeciales: ["HAZMAT Nivel III", "USAR", "Edificios alto", "Metro", "Coordinación ZMM"],
    tiempoRespuestaPromedio: "4-6 minutos",
    interlinkingRelacionado: ["Centro CDMX", "Centro Guadalajara"]
  },
  {
    id: "industrial-norte",
    nombre: "Corredor Industrial Norte",
    icono: "🏭",
    color: "#dc2626",
    colorSecundario: "#f87171",
    descripcion: "TERNIUM, acerías, manufactura pesada. Mayor concentración de industria siderúrgica de México con más de 2,000 empresas manufactureras.",
    poblacion: "500,000+ trabajadores industriales",
    municipios: ["Monterrey (norte)", "Apodaca", "General Escobedo"],
    riesgos: ["HAZMAT Nivel III", "Metales fundidos", "Explosiones", "Espacios confinados", "Gases tóxicos"],
    caracteristicas: ["TERNIUM", "KIA Motors", "Navistar", "Aeropuerto MTY", "Parques industriales"],
    serviciosEspeciales: ["HAZMAT Nivel III", "Descontaminación masiva", "Incendios Clase D", "ARFF"],
    tiempoRespuestaPromedio: "5-10 minutos",
    empresasPrincipales: ["TERNIUM Monterrey", "KIA Motors México", "Navistar", "Whirlpool"]
  },
  {
    id: "industrial-sur",
    nombre: "Corredor Industrial Sur",
    icono: "🏭",
    color: "#7c3aed",
    colorSecundario: "#a78bfa",
    descripcion: "CEMEX, Vitro, petroquímica. Sede de corporativos globales de cemento y vidrio con operaciones HAZMAT de alta complejidad.",
    poblacion: "300,000+ trabajadores industriales",
    municipios: ["Santa Catarina", "García"],
    riesgos: ["HAZMAT Nivel III", "Hornos industriales", "Petroquímicos", "Gases tóxicos"],
    caracteristicas: ["CEMEX (cementera #1 mundial)", "Vitro", "PPG Industries", "Petroquímica"],
    serviciosEspeciales: ["HAZMAT Nivel III", "Altas temperaturas", "Petroquímica"],
    tiempoRespuestaPromedio: "6-12 minutos",
    empresasPrincipales: ["CEMEX", "Vitro", "PPG Industries"]
  },
  {
    id: "poniente",
    nombre: "Zona Metropolitana Poniente",
    icono: "🏘️",
    color: "#059669",
    colorSecundario: "#34d399",
    descripcion: "San Pedro Garza García, Santa Catarina. Zona residencial de más alto poder adquisitivo de América Latina con edificios corporativos de clase mundial.",
    poblacion: "250,000 habitantes",
    municipios: ["San Pedro Garza García", "Santa Catarina (residencial)"],
    riesgos: ["Edificios de gran altura", "Incendios forestales Chipinque", "Residencias alto valor"],
    caracteristicas: ["Torre KOI", "Pabellón M", "Valle Oriente", "Chipinque", "La Huasteca"],
    serviciosEspeciales: ["Alto valor", "VIP", "Edificios gran altura", "Incendios forestales"],
    tiempoRespuestaPromedio: "4-8 minutos",
    datoCurioso: "Mayor ingreso per cápita de América Latina"
  },
  {
    id: "oriente",
    nombre: "Zona Metropolitana Oriente",
    icono: "🏘️",
    color: "#f59e0b",
    colorSecundario: "#fbbf24",
    descripcion: "Guadalupe, Juárez, Escobedo. Alta densidad poblacional con industria mixta y comercio. Segundo municipio más poblado del estado.",
    poblacion: "1,500,000+ habitantes",
    municipios: ["Guadalupe", "Juárez", "General Escobedo"],
    riesgos: ["Alta densidad poblacional", "Industrial mixto", "Eventos masivos Expo"],
    caracteristicas: ["Expo Guadalupe", "Zona industrial oriente", "Alta densidad"],
    serviciosEspeciales: ["Eventos masivos", "Rescate urbano", "Coordinación oriente"],
    tiempoRespuestaPromedio: "5-12 minutos"
  },
  {
    id: "carretero-norte",
    nombre: "Corredor Carretero Norte",
    icono: "🛣️",
    color: "#0891b2",
    colorSecundario: "#22d3ee",
    descripcion: "Autopista Monterrey-Colombia-Laredo. Corredor comercial terrestre más importante de México hacia EE.UU. con 15,000+ tractocamiones diarios.",
    poblacion: "100,000 habitantes + tráfico comercial",
    municipios: ["General Zuazua", "Salinas Victoria", "Ciénega de Flores"],
    riesgos: ["Accidentes tractocamiones", "HAZMAT en tránsito", "Comercio internacional"],
    caracteristicas: ["Puente Colombia", "Aduanas", "15,000+ tractocamiones/día"],
    serviciosEspeciales: ["Rescate carretero especializado", "HAZMAT transporte", "Coordinación frontera"],
    tiempoRespuestaPromedio: "8-20 minutos"
  },
  {
    id: "sierra",
    nombre: "Sierra Madre Oriental",
    icono: "🏔️",
    color: "#16a34a",
    colorSecundario: "#4ade80",
    descripcion: "Santiago (Pueblo Mágico), Allende, Chipinque. Principal zona de ecoturismo y rescate de montaña del noreste de México con 100,000+ hectáreas de bosque.",
    poblacion: "80,000 habitantes + 1.5M turistas/año",
    municipios: ["Santiago", "Allende"],
    riesgos: ["Incendios forestales críticos", "Rescate de excursionistas", "Rescate en cascadas"],
    caracteristicas: ["Pueblo Mágico Santiago", "Cola de Caballo", "Chipinque", "La Huasteca"],
    serviciosEspeciales: ["Incendios forestales", "Rescate montaña", "Rescate vertical", "Cascadas"],
    tiempoRespuestaPromedio: "5-30 minutos según ubicación"
  },
  {
    id: "citricola",
    nombre: "Zona Citrícola",
    icono: "🍊",
    color: "#ea580c",
    colorSecundario: "#fb923c",
    descripcion: "Montemorelos, Linares. Capital citrícola de México con producción de 500,000+ toneladas de naranja anuales y agroindustria.",
    poblacion: "150,000 habitantes",
    municipios: ["Montemorelos", "Linares", "General Terán"],
    riesgos: ["Incendios agrícolas", "Empacadoras", "Carretero sur"],
    caracteristicas: ["Capital citrícola", "Universidad Montemorelos", "Empacadoras de naranja"],
    serviciosEspeciales: ["Agroindustrial", "Rescate carretero", "Turismo aventura"],
    tiempoRespuestaPromedio: "5-20 minutos"
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
function generarSchemaEstacion(estacion) {
  const esHAZMAT = estacion.especialidades?.some((e) => e.toLowerCase().includes("hazmat"));
  const esIndustrial = estacion.zona?.includes("Industrial");
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "@id": `https://bombero.mx/directorio/nuevo-leon/${estacion.slug}`,
    "name": estacion.nombre,
    "description": estacion.historia || `Estación de bomberos en ${estacion.ciudad}, Nuevo León. Servicios de emergencia 24/7.`,
    "url": `https://bombero.mx/directorio/nuevo-leon/${estacion.slug}`,
    "telephone": estacion.telefono,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Nuevo León",
      "postalCode": estacion.cp || "",
      "addressCountry": "MX"
    },
    ...estacion.coordenadas && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": estacion.coordenadas.lat,
        "longitude": estacion.coordenadas.lng
      }
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": estacion.cobertura?.map((area) => ({
      "@type": "Place",
      "name": area
    })) || [{ "@type": "City", "name": estacion.ciudad }],
    "serviceType": estacion.servicios,
    "parentOrganization": {
      "@type": "GovernmentOrganization",
      "name": estacion.comandancia || "Sistema Estatal de Bomberos de Nuevo León",
      "areaServed": "Estado de Nuevo León, México"
    },
    ...esHAZMAT && {
      "additionalType": "https://schema.org/EmergencyService",
      "specialty": "Materiales Peligrosos HAZMAT"
    },
    ...esIndustrial && {
      "knowsAbout": ["Industrial fire safety", "HAZMAT response", "Chemical emergencies"]
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `tel:${estacion.telefono.replace(/\D/g, "")}`,
        "actionPlatform": ["http://schema.org/TelephoneEntryPoint"]
      }
    }
  };
}
function generarInterlinking(estacion) {
  const esHAZMAT = estacion.especialidades?.some((e) => e.toLowerCase().includes("hazmat"));
  const esSierra = estacion.zona === "Sierra Madre Oriental";
  const esCarretero = estacion.zona?.includes("Carretero");
  const estadosRelacionados = [
    { nombre: "Coahuila", slug: "coahuila", razon: "Estado vecino industrial" },
    { nombre: "Tamaulipas", slug: "tamaulipas", razon: "Corredor comercial" }
  ];
  if (esHAZMAT) {
    estadosRelacionados.push({ nombre: "Estado de México", slug: "estado-de-mexico", razon: "Zona industrial similar" });
  }
  if (esSierra) {
    estadosRelacionados.push({ nombre: "Coahuila", slug: "coahuila", razon: "Sierra Madre compartida" });
  }
  const productosRelacionados = [
    { nombre: "Trajes de bombero", slug: "/productos/trajes-para-bomberos" }
  ];
  if (esHAZMAT) {
    productosRelacionados.push({ nombre: "Equipos HAZMAT", slug: "/productos/hazmat" });
    productosRelacionados.push({ nombre: "Equipos SCBA", slug: "/productos/scba" });
  }
  if (esCarretero) {
    productosRelacionados.push({ nombre: "Herramientas de rescate", slug: "/productos/rescate" });
  }
  const estacionesCercanas = estacionesNuevoLeon.filter((e) => e.zona === estacion.zona && e.slug !== estacion.slug).slice(0, 4);
  return { estadosRelacionados, productosRelacionados, estacionesCercanas };
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

export { ZONAS_NUEVO_LEON as Z, generarInterlinking as a, getMunicipios as b, estacionesNuevoLeon as e, generarSchemaEstacion as g };
