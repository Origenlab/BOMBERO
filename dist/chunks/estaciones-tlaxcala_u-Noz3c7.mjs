const ESTADISTICAS_TLAXCALA = {
  total_estaciones: 15};
const estacionesTlaxcala = [
  // ─── TLAXCALA DE XICOHTÉNCATL (Capital del Estado) ───────────────────────────
  {
    id: "tla-tlaxcala-central",
    slug: "tla-tlaxcala-central",
    estado: "Tlaxcala",
    nombre: "Estación Central de Bomberos de Tlaxcala de Xicohténcatl",
    nombreCorto: "Estación Central Tlaxcala",
    direccion: "Blvd. Mariano Sánchez 420",
    colonia: "Centro Histórico",
    codigoPostal: "90000",
    municipio: "Tlaxcala",
    ciudad: "Tlaxcala de Xicohténcatl",
    telefono: "246 462 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona histórica colonial (s. XVI-XVII)",
      "Coordinación estatal de emergencias y Protección Civil Tlaxcala",
      "HAZMAT en corredor carretero y transporte terrestre",
      "Rescate vehicular en carreteras federales y autopistas",
      "Incendios en edificios de gobierno estatal e instituciones",
      "Rescate técnico urbano y en altura",
      "Servicio prehospitalario avanzado (ALS) zona capital",
      "Protección de patrimonio cultural: monumentos coloniales y zona arqueológica Xochitécatl"
    ],
    especialidades: [
      "Protección del Centro Histórico de Tlaxcala (s. XVI): convento franciscano más antiguo de América en pie",
      "Coordinación Estatal de Emergencias — nodo TLA",
      "HAZMAT Transporte Carretero corredor México-Veracruz",
      "Rescate en Zona Arqueológica Xochitécatl-Cacaxtla (UNESCO Tentativa)"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3139, lng: -98.2404 },
    descripcion: "La Estación Central de Tlaxcala de Xicohténcatl es la sede del H. Cuerpo de Bomberos del estado y el nodo de coordinación para las 15 estaciones de la red estatal. Ubicada en la capital del estado más pequeño de México —pero también uno de los más históricamente significativos—, protege el Centro Histórico de Tlaxcala, cuyo convento franciscano de la Asunción (1527) es uno de los más antiguos del continente. La capital tlaxcalteca y sus zonas arqueológicas de Xochitécatl y Cacaxtla, en proceso de candidatura UNESCO, requieren protocolos especializados de patrimonio ante cualquier emergencia.",
    zonasCobertura: [
      "Centro Histórico de Tlaxcala de Xicohténcatl",
      "Zona Arqueológica Xochitécatl-Cacaxtla",
      "Gobierno del Estado de Tlaxcala",
      "Col. San Diego Metepec",
      "Col. El Carmen Tequexquitla",
      "Corredor carretero capital-Apizaco"
    ],
    tiempoRespuesta: "4-7 minutos",
    personal: 65,
    personalActivo: 65,
    unidades: 8,
    unidadesDisponibles: [
      "2 Autobombas Estructurales",
      "1 Unidad HAZMAT Transporte",
      "1 Escalera Telescópica 24m",
      "1 Unidad de Rescate Técnico",
      "2 Ambulancias ALS",
      "1 Unidad de Mando Móvil"
    ]
  },
  // ─── APIZACO (Capital Industrial / Nodo Logístico Nacional) ──────────────────
  {
    id: "tla-apizaco-central",
    slug: "tla-apizaco-central",
    estado: "Tlaxcala",
    nombre: "Estación Central de Bomberos de Apizaco",
    nombreCorto: "Estación Central Apizaco",
    direccion: "Av. 12 de Diciembre 800",
    colonia: "Centro",
    codigoPostal: "90300",
    municipio: "Apizaco",
    ciudad: "Apizaco",
    telefono: "241 418 0300",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en parques industriales y bodegas de logística",
      "HAZMAT en transporte ferroviario (nodo ferroviario nacional)",
      "Control de fugas industriales en plantas químicas y textiles",
      "Rescate vehicular en autopista México 136 y carretera federal",
      "Incendios en plantas textiles (algodón, poliéster, azo-colorantes)",
      "Rescate industrial y espacios confinados",
      "Coordinación con Ferromex ante emergencias ferroviarias",
      "Servicio prehospitalario avanzado zona industrial"
    ],
    especialidades: [
      "HAZMAT Ferroviario: nodo de la red ferroviaria Ferromex más activo del centro de México",
      "Incendios industriales textiles — fibras sintéticas y colorantes azo",
      "Rescate en accidentes ferroviarios de carga y pasajeros",
      "HAZMAT productos químicos en tránsito por corredor logístico"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4119, lng: -98.1403 },
    descripcion: "Apizaco es la mayor ciudad industrial de Tlaxcala y uno de los nodos logísticos más importantes del centro de México. Su estación ferroviaria es punto de confluencia de las rutas Ferromex que conectan el Pacífico con el Golfo, el norte con el sureste, y la Ciudad de México con Veracruz —lo que implica que diariamente pasan por Apizaco trenes con carga peligrosa clasificada. La industria textil, históricamente arraigada, genera riesgos específicos de incendios en fibras sintéticas y almacenes de colorantes industriales. Apizaco alberga también el mayor parque industrial del estado.",
    zonasCobertura: [
      "Centro Industrial de Apizaco",
      "Parque Industrial Apizaco",
      "Nodo ferroviario Ferromex Apizaco",
      "Corredor autopista México-136",
      "Col. San Felipe Cuauhtenco",
      "Zona textil noreste Tlaxcala"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 70,
    personalActivo: 70,
    unidades: 9,
    unidadesDisponibles: [
      "3 Autobombas Estructurales",
      "1 Unidad HAZMAT Ferroviaria",
      "1 Unidad HAZMAT Industrial",
      "1 Escalera Telescópica 28m",
      "1 Unidad Rescate Ferroviario",
      "1 Unidad de Rescate",
      "1 Ambulancia ALS"
    ]
  },
  // ─── SAN JOSÉ CHIAPA — PLANTA AUDI (ÚNICO EN LAS AMÉRICAS) ──────────────────
  {
    id: "tla-san-jose-chiapa-audi",
    slug: "tla-san-jose-chiapa-audi",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos San José Chiapa — Complejo Audi México",
    nombreCorto: "Estación San José Chiapa — Audi",
    direccion: "Blvd. Audi 1",
    colonia: "Zona Industrial Audi",
    codigoPostal: "90687",
    municipio: "San José Chiapa",
    ciudad: "San José Chiapa",
    telefono: "246 476 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios industriales en taller de pintura (shop de pintura Audi — cabinas con VOCs)",
      "HAZMAT disolventes y lacas automotrices de alta inflamabilidad",
      "Incendios en celdas de producción de baterías PHEV (HV Battery Pack Q5 TFSI e)",
      "Rescate industrial en carrocería, taller de prensas y ensamble",
      "Control de fugas de gases industriales: argón, CO₂, N₂, acetileno",
      "Emergencias en instalaciones de pintura electroforética (e-coat)",
      "HAZMAT derrames de electrolito en líneas de baterías de alta tensión",
      "Incendios en bodegas de componentes CKD (vehículos de importación)",
      "Rescate de trabajadores en prensas de carrocería y zonas de soldadura robotizada",
      "Coordinación con brigada contraincendios propia de Audi México"
    ],
    especialidades: [
      "ÚNICA PLANTA AUDI EN LAS AMÉRICAS: 12,000 empleados, Audi Q5 / A3 (150,000+ unidades/año)",
      "HAZMAT Automotriz Premium — disolventes, isocianatos, aprestos, pinturas UV",
      "Incendios en baterías de ión de litio y sistemas HV (alta tensión vehicular 400V)",
      "Rescate industrial en líneas de producción robotizadas (KUKA, FANUC)",
      "Coordinación con brigadas Audi México y protocolo VW Group emergency"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3864, lng: -98.0558 },
    descripcion: "La Estación de San José Chiapa es la más especializada de Tlaxcala: custodia la planta de Audi México, la ÚNICA planta de fabricación de automóviles Audi en toda América. Inaugurada en 2016 con una inversión de 1,300 millones de dólares, la planta produce los modelos Audi Q5 y Audi A3 Sedan para los mercados mundial —más de 150,000 unidades al año— y emplea directa e indirectamente a más de 12,000 personas. La extraordinaria complejidad industrial de sus instalaciones —taller de pintura con disolventes orgánicos volátiles, líneas de producción de baterías de alta tensión para híbridos enchufables, celdas de soldadura robotizada y el shop de prensas— exige bomberos con certificación HAZMAT automotriz de clase mundial y protocolos específicos del Grupo Volkswagen.",
    zonasCobertura: [
      "Planta Audi México — San José Chiapa (248 hectáreas)",
      "Shop de Pintura Audi (área de máximo riesgo VOC)",
      "Línea de Baterías HV Pack (Q5 TFSI e)",
      "Taller de Carrocería y Prensas",
      "Centro de Logística y CKD",
      "Zona Industrial aledaña y proveedores Tier-1 Audi"
    ],
    tiempoRespuesta: "3-5 minutos",
    personal: 55,
    personalActivo: 55,
    unidades: 7,
    unidadesDisponibles: [
      "1 Camión HAZMAT Automotriz Premium (disolventes/isocianatos)",
      "2 Autobombas Industriales",
      "1 Unidad HAZMAT Baterías Li-ion HV",
      "1 Unidad Rescate Industrial Pesado",
      "1 Ambulancia Industrial ALS",
      "1 Pick-up Mando Coordinación"
    ]
  },
  // ─── SANTA ANA CHIAUTEMPAN (Capital Textilera de México) ─────────────────────
  {
    id: "tla-chiautempan",
    slug: "tla-chiautempan",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Santa Ana Chiautempan",
    nombreCorto: "Estación Santa Ana Chiautempan",
    direccion: "Av. 16 de Septiembre 320",
    colonia: "Centro",
    codigoPostal: "90800",
    municipio: "Chiautempan",
    ciudad: "Santa Ana Chiautempan",
    telefono: "241 416 0200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en fábricas textiles y talleres de confección",
      "HAZMAT azo-colorantes y productos de tinción industrial (ácido sulfúrico, sosa cáustica)",
      "Incendios en almacenes de telas, hilos y fibras sintéticas altamente inflamables",
      "Control de fugas de vapor y derrames en plantas de acabado textil",
      "Rescate en accidentes industriales con maquinaria textil pesada",
      "Incendios estructurales y residenciales en zona urbana densa",
      "HAZMAT solventes en plantas de lavado y tintura a alta temperatura",
      "Primeros auxilios en trabajadores de la industria textil"
    ],
    especialidades: [
      "Capital textilera de México: mayor concentración de telares industriales del país",
      "HAZMAT Textil — azo-colorantes, dispersantes, fijadores y auxiliares de tintura",
      "Incendios en almacenes de fibras sintéticas (poliéster, nylon, acrílico) de alta propagación",
      "Control de emergencias en procesos de acabado textil: blanqueo, mercerizado, estampado"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3114, lng: -98.1858 },
    descripcion: "Santa Ana Chiautempan es reconocida internacionalmente como la capital textilera de México, con más de 500 años de tradición en la producción de sarapes, cobertores y prendas textiles. En la actualidad, concentra el mayor número de telares industriales y plantas de confección del país, exportando productos a América del Norte, Europa y Asia. Los riesgos de incendio en almacenes de fibras sintéticas son extraordinariamente altos: el poliéster y el nylon tienen tasas de combustión superiores a la madera, propagándose a velocidades que superan la capacidad de respuesta manual. Además, los baños de tintura con colorantes azo y productos auxiliares generan riesgos HAZMAT específicos que demandan equipos de protección personal de nivel B.",
    zonasCobertura: [
      "Santa Ana Chiautempan cabecera",
      "Zona Industrial Textil (500+ fábricas)",
      "Corredor carretero Chiautempan-Tlaxcala",
      "Col. San Luis Huexotla",
      "San Marcos Contla (zona textilera)",
      "Municipios textileros colindantes"
    ],
    tiempoRespuesta: "4-8 minutos",
    personal: 48,
    personalActivo: 48,
    unidades: 6,
    unidadesDisponibles: [
      "2 Autobombas con Espuma (incendios de fibras)",
      "1 Unidad HAZMAT Textil",
      "1 Camión Cisterna 8,000L",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── HUAMANTLA (Segunda Ciudad / Volcán La Malinche) ─────────────────────────
  {
    id: "tla-huamantla",
    slug: "tla-huamantla",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Huamantla",
    nombreCorto: "Estación Huamantla",
    direccion: "Av. Juárez 650",
    colonia: "Centro",
    codigoPostal: "90500",
    municipio: "Huamantla",
    ciudad: "Huamantla",
    telefono: "247 472 0500",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate en alta montaña — Volcán La Malinche (4,461 msnm)",
      "Incendios forestales en bosques de pino-oyamel del Parque Nacional La Malinche",
      "Rescate de montañistas, excursionistas y personas extraviadas en el volcán",
      "Incendios estructurales en zona urbana de Huamantla",
      "Rescate vehicular en carretera federal Tlaxcala-Puebla y libramiento",
      "Control de emergencias durante el Festival Agostino y Feria de Huamantla",
      "Rescate de ganado taurino durante la temporada de Huamantla la Inmortal",
      "Primeros auxilios en visitantes al Parque Nacional"
    ],
    especialidades: [
      "Rescate en alta montaña y volcán — La Malinche (Matlalcuéitl) 4,461 msnm",
      "Incendios forestales de altitud (bosque templado húmedo a 2,800-4,200 msnm)",
      "Coordinación con CONANP y CENAPRED ante actividad volcánica del Popocatépetl cercano",
      "Rescate en condiciones de nieve, hielo y hipotermia severa (cima La Malinche)"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3053, lng: -97.9227 },
    descripcion: "Huamantla, la segunda ciudad más importante de Tlaxcala y cabecera del oriente estatal, está ubicada a los pies del Volcán La Malinche (Matlalcuéitl), segunda montaña más alta del centro de México con 4,461 msnm. El Parque Nacional La Malinche recibe miles de visitantes y montañistas cada año, generando situaciones de emergencia en alta montaña que requieren equipos de rescate especializados en altitud, hipotermia y terreno volcánico. Huamantla es además mundialmente famosa por su Festival Agostino —«Huamantla la Inmortal»—, con tapetes de arena y encierros taurinos que concentran a cientos de miles de visitantes en agosto, exigiendo operativos de seguridad pública masivos.",
    zonasCobertura: [
      "Huamantla cabecera",
      "Parque Nacional Volcán La Malinche",
      "Laderas y rutas de ascenso La Malinche",
      "Zona ganadera y campirana del oriente",
      "Carretera federal Puebla-Huamantla",
      "Comunidades rurales del municipio"
    ],
    tiempoRespuesta: "5-10 minutos (urbano) / 30-90 minutos (alta montaña)",
    personal: 42,
    personalActivo: 42,
    unidades: 5,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad Rescate en Alta Montaña (equipo especializado)",
      "1 Pick-up 4x4 Forestal/Volcánico",
      "1 Ambulancia ALS",
      "1 Pick-up Mando"
    ]
  },
  // ─── CALPULALPAN (Grupo Modelo / Corredor México 150D) ───────────────────────
  {
    id: "tla-calpulalpan",
    slug: "tla-calpulalpan",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Calpulalpan",
    nombreCorto: "Estación Calpulalpan",
    direccion: "Calle Reforma 200",
    colonia: "Centro",
    codigoPostal: "90200",
    municipio: "Calpulalpan",
    ciudad: "Calpulalpan",
    telefono: "591 922 0300",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios industriales en Planta Cervecera Grupo Modelo (una de las 3 más grandes de México)",
      "HAZMAT Amoniaco refrigeración industrial — sala de máquinas cervecería",
      "Control de fugas de CO₂ (gas de fermentación) en tanques de 200,000 litros",
      "Incendios en silo de almacenamiento de malta y granos",
      "Rescate vehicular en Autopista México-Puebla 150D (una de las más transitadas del país)",
      "Control de derrames de materiales peligrosos en transporte carretero",
      "Incendios en bodegas logísticas del corredor Mexico City-Veracruz",
      "Primeros auxilios en trabajadores cerveceros"
    ],
    especialidades: [
      "Grupo Modelo Calpulalpan: producción de 10+ millones de hectolitros/año (Corona, Modelo, Pacífico)",
      "HAZMAT Amoniaco Industrial — refrigeración en cervecería grado alimenticio",
      "HAZMAT CO₂ industrial en espacios confinados (fermentación cervecera)",
      "Accidentes con carga peligrosa en Autopista 150D (Peñón-Veracruz, mayor flujo del centro)"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.5928, lng: -98.5693 },
    descripcion: "Calpulalpan alberga una de las tres plantas cerveceras más grandes de México: la Planta Calpulalpan de Grupo Modelo, que produce más de 10 millones de hectolitros anuales de cervezas Corona, Modelo Especial, Pacífico y Victoria. El riesgo industrial de esta instalación es de alta complejidad: el amoniaco empleado en los sistemas de refrigeración industrial representa uno de los gases más peligrosos en ambientes cerrados, y el CO₂ generado en la fermentación alcanza concentraciones letales en espacios confinados. La autopista 150D México-Puebla, que pasa tangencialmente por el municipio, es una de las más transitadas del país y escenario frecuente de accidentes con carga peligrosa.",
    zonasCobertura: [
      "Calpulalpan cabecera",
      "Planta Cervecera Grupo Modelo Calpulalpan",
      "Autopista México-Puebla 150D tramo Tlaxcala",
      "Corredor logístico México City-Veracruz",
      "Parque Industrial Calpulalpan",
      "Municipios del noroeste tlaxcalteca"
    ],
    tiempoRespuesta: "5-9 minutos",
    personal: 40,
    personalActivo: 40,
    unidades: 5,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad HAZMAT Amoniaco/CO₂",
      "1 Unidad Rescate Vehicular (autopista)",
      "1 Camión Cisterna 6,000L",
      "1 Ambulancia"
    ]
  },
  // ─── ZACATELCO (Sur Densamente Poblado / Frontera Puebla) ────────────────────
  {
    id: "tla-zacatelco",
    slug: "tla-zacatelco",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Zacatelco",
    nombreCorto: "Estación Zacatelco",
    direccion: "Av. 5 de Mayo 110",
    colonia: "Centro",
    codigoPostal: "90740",
    municipio: "Zacatelco",
    ciudad: "Zacatelco",
    telefono: "246 465 0100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona sur densamente poblada",
      "Rescate vehicular en carretera federal Tlaxcala-Puebla",
      "HAZMAT en tránsito industrial corredor sur Tlaxcala",
      "Incendios en industria mueblera y de madera (alta inflamabilidad)",
      "Control de fugas de gas LP en zona urbana y semiurbana",
      "Primeros auxilios y traslados de urgencia al IMSS",
      "Apoyo a municipios del sur conurbados con Puebla"
    ],
    especialidades: [
      "Rescate en zona de mayor densidad poblacional del sur tlaxcalteca",
      "Coordinación con bomberos de Puebla en zona conurbada"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2236, lng: -98.2317 },
    descripcion: "Zacatelco es uno de los municipios más densamente poblados del sur de Tlaxcala, en la zona de conurbación con Puebla. Su cercanía con el AMSMP (Área Metropolitana de la Zona Metropolitana Puebla-Tlaxcala) genera una alta concentración de actividad industrial y de servicios, con riesgos de incendio en manufactura de muebles —industria característica de la región— y en la intensa actividad de transporte en la carretera federal.",
    zonasCobertura: [
      "Zacatelco cabecera",
      "Zona industrial mueblera del sur",
      "Carretera federal Tlaxcala-Puebla sur",
      "Municipios conurbados con Puebla",
      "Col. San Miguel Xochitecatitla"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 30,
    personalActivo: 30,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── SAN PABLO DEL MONTE (Volcán Malinche Sur / Conurbación Puebla) ──────────
  {
    id: "tla-san-pablo-monte",
    slug: "tla-san-pablo-monte",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de San Pablo del Monte",
    nombreCorto: "Estación San Pablo del Monte",
    direccion: "Calle Benito Juárez 80",
    colonia: "Centro",
    codigoPostal: "90900",
    municipio: "San Pablo del Monte",
    ciudad: "San Pablo del Monte",
    telefono: "246 468 0080",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate en ladera sur del Volcán La Malinche",
      "Incendios forestales en zona de pino-oyamel sur de La Malinche",
      "Incendios estructurales en zona semirural sur",
      "Rescate vehicular en autopista Puebla-Tlaxcala",
      "Primeros auxilios en comunidades rurales del sur",
      "Apoyo a bomberos de Puebla en zona conurbada",
      "Control de fugas de gas LP en zona urbana"
    ],
    especialidades: [
      "Rescate forestal en ladera sur del volcán La Malinche",
      "Coordinación interestatal con bomberos de Puebla"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.1789, lng: -98.2006 },
    descripcion: "San Pablo del Monte es el municipio más austral de Tlaxcala, en la zona de mayor conurbación con el estado de Puebla. Su ladera sur del Volcán La Malinche es accesible desde el municipio, siendo uno de los puntos de entrada para los montañistas que ascienden desde Puebla. La estación coordina habitualmente con el Cuerpo de Bomberos de Puebla ante incendios forestales en la zona limítrofe del Parque Nacional.",
    zonasCobertura: [
      "San Pablo del Monte cabecera",
      "Ladera sur Parque Nacional La Malinche",
      "Zona conurbada Tlaxcala-Puebla sur",
      "Autopista Puebla-Tlaxcala tramo sur"
    ],
    tiempoRespuesta: "6-12 minutos",
    personal: 26,
    personalActivo: 26,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Forestal 4x4",
      "1 Ambulancia"
    ]
  },
  // ─── TLAXCO (Norte Serrano / Bosques de Pino-Encino) ─────────────────────────
  {
    id: "tla-tlaxco",
    slug: "tla-tlaxco",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Tlaxco",
    nombreCorto: "Estación Tlaxco",
    direccion: "Calle Zaragoza 50",
    colonia: "Centro",
    codigoPostal: "90250",
    municipio: "Tlaxco",
    ciudad: "Tlaxco",
    telefono: "241 437 0080",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales en bosques de pino-encino del norte de Tlaxcala",
      "Rescate en cañadas y barrancas serranas",
      "Control de incendios agrícolas y de pastizales",
      "Rescate vehicular en carreteras de montaña al norte",
      "Control de deslizamientos en temporada de lluvias",
      "Primeros auxilios en comunidades rurales alejadas"
    ],
    especialidades: [
      "Incendios forestales en monte norte tlaxcalteca (bosque templado)",
      "Rescate en terreno serrano y barrancas sin acceso vehicular"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6225, lng: -98.1261 },
    descripcion: "Tlaxco es el municipio con mayor extensión boscosa del norte de Tlaxcala. Sus bosques de pino-encino, distribuidos en un relieve de laderas y cañadas que alcanzan los 2,800 msnm, son escenario frecuente de incendios forestales durante la temporada seca (febrero-mayo). La estación opera con unidades forestales 4x4 adaptadas para terreno irregular y el personal está certificado en técnicas de control de incendios de interface bosque-comunidad.",
    zonasCobertura: [
      "Tlaxco cabecera",
      "Bosques de pino norte Tlaxcala",
      "Sierra norte tlaxcalteca",
      "Comunidades rurales del municipio",
      "Carreteras serranas zona norte"
    ],
    tiempoRespuesta: "8-20 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Pick-up Forestal 4x4 (modular)",
      "1 Ambulancia"
    ]
  },
  // ─── IXTACUIXTLA (Valle Central / Industrial Ligero) ─────────────────────────
  {
    id: "tla-ixtacuixtla",
    slug: "tla-ixtacuixtla",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Ixtacuixtla de Mariano Matamoros",
    nombreCorto: "Estación Ixtacuixtla",
    direccion: "Calle Independencia 90",
    colonia: "Centro",
    codigoPostal: "90660",
    municipio: "Ixtacuixtla",
    ciudad: "Ixtacuixtla de Mariano Matamoros",
    telefono: "241 440 0060",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en industria ligera del corredor Apizaco-Tlaxcala",
      "Control de fugas de gas LP e industrial",
      "Incendios estructurales y residenciales",
      "Rescate vehicular en carreteras del valle central",
      "Primeros auxilios en zona agrícola e industrial"
    ],
    especialidades: [
      "Cobertura del corredor industrial ligero valle central tlaxcalteca"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3631, lng: -98.1642 },
    descripcion: "Ixtacuixtla se ubica en el corredor del Valle Central que une Apizaco con Tlaxcala, una de las áreas de mayor densidad industrial ligera del estado. La estación cubre un territorio diverso entre campos agrícolas y pequeños parques industriales, prestando servicio de respaldo a las estaciones de Apizaco y la capital.",
    zonasCobertura: [
      "Ixtacuixtla cabecera",
      "Corredor industrial Apizaco-Tlaxcala",
      "Zona agrícola valle central",
      "Municipios limítrofes del corredor"
    ],
    tiempoRespuesta: "6-12 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── PAPALOTLA (Zona Metropolitana Este) ─────────────────────────────────────
  {
    id: "tla-papalotla",
    slug: "tla-papalotla",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Papalotla de Xicohténcatl",
    nombreCorto: "Estación Papalotla",
    direccion: "Av. Guerrero 40",
    colonia: "Centro",
    codigoPostal: "90060",
    municipio: "Papalotla",
    ciudad: "Papalotla de Xicohténcatl",
    telefono: "246 462 0060",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona metropolitana este",
      "HAZMAT en industria de plásticos y hule del corredor",
      "Rescate vehicular en carretera estatal",
      "Control de fugas de gas LP en zona residencial",
      "Primeros auxilios y traslados de urgencia"
    ],
    especialidades: [
      "Cobertura zona metropolitana este — conurbación capital",
      "HAZMAT plásticos y elastómeros industria ligera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3289, lng: -98.1794 },
    descripcion: "Papalotla de Xicohténcatl forma parte de la zona metropolitana de la capital tlaxcalteca, con un crecimiento industrial y residencial acelerado impulsado por la expansión de Apizaco y la propia capital. La estación cubre los parques industriales de industria ligera establecidos en el corredor metropolitano este.",
    zonasCobertura: [
      "Papalotla de Xicohténcatl",
      "Zona metropolitana este de la capital",
      "Parques industriales ligeros",
      "Fraccionamientos del corredor este"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── TETLA DE LA SOLIDARIDAD (Norte / Industria Química) ─────────────────────
  {
    id: "tla-tetla",
    slug: "tla-tetla",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Tetla de la Solidaridad",
    nombreCorto: "Estación Tetla de la Solidaridad",
    direccion: "Calle Hidalgo 60",
    colonia: "Centro",
    codigoPostal: "90380",
    municipio: "Tetla",
    ciudad: "Tetla de la Solidaridad",
    telefono: "241 420 0070",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en plantas químicas y farmacéuticas del parque industrial norte",
      "HAZMAT productos farmacéuticos y químicos finos",
      "Incendios estructurales en zona urbana",
      "Rescate vehicular en autopista Apizaco-norte",
      "Control de fugas de productos industriales",
      "Primeros auxilios y traslados"
    ],
    especialidades: [
      "HAZMAT Industria Farmacéutica — solventes y activos farmacéuticos",
      "Cobertura corredor químico norte Tlaxcala"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4656, lng: -98.0689 },
    descripcion: "Tetla de la Solidaridad alberga un parque industrial con presencia importante de empresas del sector químico y farmacéutico, aprovechando su posición en el corredor norte de Tlaxcala. Los riesgos de incendio con solventes y materias primas farmacéuticas requieren personal con HAZMAT de nivel B/C y equipos de detección de gases específicos.",
    zonasCobertura: [
      "Tetla de la Solidaridad cabecera",
      "Parque Industrial Tetla (sector químico/farmacéutico)",
      "Corredor norte Tlaxcala",
      "Comunidades rurales del municipio"
    ],
    tiempoRespuesta: "6-12 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad HAZMAT Químico",
      "1 Ambulancia"
    ]
  },
  // ─── TEOLOCHOLCO (Sur / Corredor Puebla) ────────────────────────────────────
  {
    id: "tla-teolocholco",
    slug: "tla-teolocholco",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Teolocholco",
    nombreCorto: "Estación Teolocholco",
    direccion: "Av. Independencia 70",
    colonia: "Centro",
    codigoPostal: "90960",
    municipio: "Teolocholco",
    ciudad: "Teolocholco",
    telefono: "246 467 0060",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales en zona sur de Tlaxcala",
      "Rescate vehicular en carretera federal Tlaxcala-Puebla",
      "Incendios en industria ligera y mueblera",
      "Primeros auxilios en comunidades del sur",
      "Apoyo en operativos de seguridad frontera Puebla"
    ],
    especialidades: [
      "Cobertura corredor sur frontera Tlaxcala-Puebla"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2217, lng: -98.1628 },
    descripcion: "Teolocholco es un municipio del sur de Tlaxcala en la zona de mayor tránsito carretero hacia Puebla. Su posición en el corredor de la carretera federal lo convierte en punto de apoyo clave para accidentes viales y emergencias en la transición entre ambas entidades.",
    zonasCobertura: [
      "Teolocholco cabecera",
      "Corredor carretero sur Tlaxcala-Puebla",
      "Comunidades del sur municipal",
      "Frontera estatal con Puebla"
    ],
    tiempoRespuesta: "7-14 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Unidad de Rescate",
      "1 Ambulancia"
    ]
  },
  // ─── TLALTELULCO (Corredor Industrial Tlaxcala-Apizaco) ──────────────────────
  {
    id: "tla-tlaltelulco",
    slug: "tla-tlaltelulco",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Tlaltelulco",
    nombreCorto: "Estación Tlaltelulco",
    direccion: "Calle Morelos 35",
    colonia: "Centro",
    codigoPostal: "90312",
    municipio: "Tlaltelulco",
    ciudad: "Tlaltelulco",
    telefono: "241 419 0050",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en el corredor industrial Tlaxcala-Apizaco",
      "Apoyo a planta Audi y proveedores en emergencias de segundo nivel",
      "HAZMAT en empresas proveedoras de la industria automotriz",
      "Incendios estructurales zona metropolitana",
      "Primeros auxilios y traslados",
      "Rescate vehicular en carretera estatal"
    ],
    especialidades: [
      "Segundo nivel de respuesta para Planta Audi México",
      "HAZMAT Automotriz proveedores Tier-1/Tier-2"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3906, lng: -98.1119 },
    descripcion: "Tlaltelulco se ubica en el corredor industrial que conecta Tlaxcala con Apizaco, en la zona de mayor concentración de empresas proveedoras Tier-1 y Tier-2 de la planta Audi México. La estación actúa como segundo nivel de respuesta para la planta automotriz y como primera respuesta para el denso tejido industrial de proveedores automotrices y de manufactura que rodea al complejo.",
    zonasCobertura: [
      "Tlaltelulco cabecera",
      "Corredor industrial proveedores Audi",
      "Zona industrial Tlaxcala-Apizaco",
      "San Cosme Xalostoc y colindancias"
    ],
    tiempoRespuesta: "5-10 minutos",
    personal: 24,
    personalActivo: 24,
    unidades: 3,
    unidadesDisponibles: [
      "1 Autobomba Industrial",
      "1 Unidad HAZMAT Automotriz",
      "1 Ambulancia"
    ]
  },
  // ─── TETLATLAHUCA (Corredor Agro-Industrial Este) ─────────────────────────────
  {
    id: "tla-tetlatlahuca",
    slug: "tla-tetlatlahuca",
    estado: "Tlaxcala",
    nombre: "Estación de Bomberos de Tetlatlahuca",
    nombreCorto: "Estación Tetlatlahuca",
    direccion: "Calle Reforma 45",
    colonia: "Centro",
    codigoPostal: "90615",
    municipio: "Tetlatlahuca",
    ciudad: "Tetlatlahuca",
    telefono: "241 444 0055",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios en zona agro-industrial este de Tlaxcala",
      "Rescate vehicular en carretera federal Apizaco-Huamantla",
      "Incendios estructurales y residenciales",
      "Control de fugas de gas e incendios en almacenes agrícolas",
      "Primeros auxilios en comunidades rurales del este",
      "Apoyo en rescates de La Malinche ladera norte"
    ],
    especialidades: [
      "Primer apoyo en rescates ladera norte volcán La Malinche",
      "Cobertura corredor carretero Apizaco-Huamantla"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3556, lng: -98.0872 },
    descripcion: "Tetlatlahuca es un municipio de vocación agroindustrial ubicado en el corredor que une Apizaco con Huamantla, siendo también uno de los puntos de acceso más próximos a la ladera norte del Volcán La Malinche. La estación actúa como punto de apoyo logístico para operativos de rescate en el volcán y cubre las comunidades rurales del corredor este.",
    zonasCobertura: [
      "Tetlatlahuca cabecera",
      "Corredor Apizaco-Huamantla",
      "Ladera norte acceso La Malinche",
      "Comunidades agrícolas del municipio"
    ],
    tiempoRespuesta: "7-15 minutos",
    personal: 20,
    personalActivo: 20,
    unidades: 2,
    unidadesDisponibles: [
      "1 Autobomba Estructural",
      "1 Ambulancia"
    ]
  }
];
function getEstacionBySlug(slug) {
  return estacionesTlaxcala.find((e) => e.slug === slug);
}
function getMunicipios() {
  return [...new Set(estacionesTlaxcala.map((e) => e.municipio))];
}
function getEstacionesCercanas(slug, limit = 3) {
  return estacionesTlaxcala.filter((e) => e.slug !== slug).slice(0, limit);
}

export { ESTADISTICAS_TLAXCALA as E, getEstacionesCercanas as a, getMunicipios as b, estacionesTlaxcala as e, getEstacionBySlug as g };
