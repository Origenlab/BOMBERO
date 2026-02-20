const estacionesBajaCalifornia = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MEXICALI - CAPITAL DEL ESTADO (6 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bc-central-mexicali",
    slug: "estacion-central-mexicali",
    estado: "Baja California",
    nombre: "Estación Central de Bomberos de Mexicali",
    nombreCorto: "Estación Central Mexicali",
    direccion: "Calzada Independencia 998",
    colonia: "Centro Cívico",
    codigoPostal: "21000",
    municipio: "Mexicali",
    ciudad: "Mexicali",
    telefono: "686 558 1616",
    telefonoEmergencia: "911",
    email: "bomberos.central@mexicali.gob.mx",
    servicios: [
      "Combate de incendios estructurales y urbanos",
      "Rescate vehicular con equipo hidráulico",
      "Atención de materiales peligrosos (HAZMAT)",
      "Rescate en espacios confinados",
      "Servicio de atención prehospitalaria",
      "Control de fugas de gas LP y natural",
      "Retiro técnico de enjambres de abejas",
      "Rescate de personas atrapadas en estructuras colapsadas",
      "Atención de emergencias por ondas de calor extremo"
    ],
    especialidades: [
      "Centro de mando y coordinación estatal de emergencias",
      "Base de operaciones para desastres naturales",
      "Unidad especializada en temperaturas extremas (hasta 50°C)",
      "Coordinación binacional con California Fire Department"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.6245, lng: -115.4523 },
    descripcion: "La Estación Central de Bomberos de Mexicali constituye el eje operativo del Heroico Cuerpo de Bomberos de la capital de Baja California. Ubicada estratégicamente en el Centro Cívico, esta instalación coordina la respuesta a emergencias para una población superior a los 1.1 millones de habitantes en condiciones climáticas extremas, donde las temperaturas pueden superar los 50°C en verano. Como ciudad fronteriza con Calexico, California, mantiene protocolos de cooperación binacional con agencias de emergencia estadounidenses.",
    historia: "El Cuerpo de Bomberos de Mexicali fue fundado el 15 de septiembre de 1915, siendo uno de los primeros del noroeste de México. A lo largo de más de un siglo de servicio, ha enfrentado los desafíos únicos del desierto de Sonora, desarrollando técnicas especializadas para operar en temperaturas extremas y condiciones de sequía. La estación central fue modernizada en 2018 con equipamiento de última generación.",
    equipamiento: [
      "3 Autobombas urbanas con sistema de enfriamiento para clima extremo",
      "2 Unidades de rescate pesado con equipo hidráulico Holmatro",
      "1 Unidad HAZMAT con trajes encapsulados Nivel A",
      "2 Ambulancias de soporte vital avanzado",
      "1 Escalera telescópica de 32 metros",
      "1 Unidad de comando móvil con comunicaciones satelitales",
      "Drones térmicos para búsqueda y rescate"
    ],
    zonasCobertura: ["Centro Cívico", "Centro Histórico", "Zona Río Nuevo", "Industrial", "Pueblo Nuevo", "Ex-Ejido Coahuila"],
    tiempoRespuesta: "4-7 minutos en zona urbana",
    personalActivo: 95,
    personal: 95,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT", "1 Comando Móvil"],
    unidades: 10
  },
  {
    id: "bc-mexicali-zona-este",
    slug: "estacion-bomberos-mexicali-zona-este",
    estado: "Baja California",
    nombre: "Estación de Bomberos Mexicali Zona Este",
    nombreCorto: "Estación Zona Este Mexicali",
    direccion: "Blvd. Lázaro Cárdenas 2100",
    colonia: "Ex-Ejido Coahuila",
    codigoPostal: "21360",
    municipio: "Mexicali",
    ciudad: "Mexicali",
    telefono: "686 564 2323",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios en zonas agrícolas y campos de cultivo",
      "Rescate vehicular en carreteras",
      "Control de fugas de gas y amoniaco",
      "Atención de derrames de agroquímicos",
      "Rescate de personas en canales de riego",
      "Retiro de enjambres",
      "Servicio prehospitalario de emergencia"
    ],
    especialidades: [
      "Emergencias en zona agrícola del Valle de Mexicali",
      "Incendios en rastrojos y cultivos",
      "Atención a industria empacadora y agroindustrial",
      "Rescate en canales de riego del Distrito 014"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.6102, lng: -115.3856 },
    descripcion: "La Estación Zona Este de Mexicali brinda cobertura especializada al Valle de Mexicali, una de las regiones agrícolas más productivas de México. Esta zona, irrigada por el sistema de canales del Río Colorado, presenta riesgos únicos como incendios en campos de cultivo, emergencias con maquinaria agrícola y exposición a agroquímicos. El personal está capacitado para responder a emergencias en terrenos extensos con acceso limitado.",
    equipamiento: [
      "2 Autobombas con tanque de alta capacidad (3,000 galones)",
      "1 Unidad todoterreno para zonas agrícolas",
      "1 Unidad de rescate con equipo para espacios abiertos",
      "1 Ambulancia de soporte vital básico"
    ],
    zonasCobertura: ["Ex-Ejido Coahuila", "Colonia Progreso", "Ejido Nuevo León", "Valle de Mexicali Este", "Zona Agrícola Oriental"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 42,
    personal: 42,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Todoterreno", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 5
  },
  {
    id: "bc-mexicali-zona-industrial",
    slug: "estacion-bomberos-mexicali-zona-industrial",
    estado: "Baja California",
    nombre: "Estación de Bomberos Mexicali Zona Industrial",
    nombreCorto: "Estación Industrial Mexicali",
    direccion: "Blvd. Venustiano Carranza 1500",
    colonia: "Parque Industrial El Vigía",
    codigoPostal: "21395",
    municipio: "Mexicali",
    ciudad: "Mexicali",
    telefono: "686 565 8080",
    telefonoEmergencia: "911",
    email: "bomberos.industrial@mexicali.gob.mx",
    servicios: [
      "Combate de incendios industriales de gran magnitud",
      "Atención de emergencias con materiales peligrosos (HAZMAT)",
      "Rescate en maquinaria y equipo industrial",
      "Control de derrames químicos y combustibles",
      "Emergencias en líneas de producción",
      "Incendios en bodegas y almacenes",
      "Rescate de trabajadores atrapados",
      "Evacuaciones industriales masivas"
    ],
    especialidades: [
      "Emergencias en industria maquiladora de exportación",
      "Certificación HAZMAT Nivel Técnico",
      "Atención a parques industriales con más de 200 plantas",
      "Coordinación con brigadas industriales privadas"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.6534, lng: -115.4012 },
    descripcion: "La Estación Industrial de Mexicali está estratégicamente ubicada para atender los principales corredores industriales de la ciudad, que albergan más de 200 plantas maquiladoras de sectores como electrónica, aeroespacial, dispositivos médicos y automotriz. Esta estación cuenta con personal certificado en materiales peligrosos y equipamiento especializado para emergencias industriales de alta complejidad, incluyendo incendios con solventes, metales y materiales plásticos.",
    historia: "Establecida en 2005 como respuesta al crecimiento exponencial del sector maquilador en Mexicali. Ha atendido emergencias de clase mundial incluyendo incendios en plantas de componentes electrónicos y derrames de materiales regulados por la EPA.",
    equipamiento: [
      "2 Autobombas industriales con sistema de espuma AFFF",
      "1 Unidad HAZMAT completa con laboratorio móvil",
      "1 Unidad de rescate pesado industrial",
      "Equipos de respiración autónoma SCBA para 30 minutos",
      "Trajes encapsulados Nivel A, B y C",
      "Detectores multigas y cámaras termográficas"
    ],
    zonasCobertura: ["Parque Industrial El Vigía", "Parque Industrial Cachanilla", "Parque Industrial Mexicali", "Corredor Industrial 2000", "Zona Industrial Sur"],
    tiempoRespuesta: "5-10 minutos en zona industrial",
    personalActivo: 55,
    personal: 55,
    unidadesDisponibles: ["2 Autobombas Industriales", "1 Unidad HAZMAT", "1 Unidad de Rescate Pesado", "1 Ambulancia"],
    unidades: 5
  },
  {
    id: "bc-mexicali-zona-rio",
    slug: "estacion-bomberos-mexicali-zona-rio",
    estado: "Baja California",
    nombre: "Estación de Bomberos Mexicali Zona Río",
    nombreCorto: "Estación Zona Río Mexicali",
    direccion: "Blvd. Adolfo López Mateos 800",
    colonia: "Nueva Mexicali",
    codigoPostal: "21100",
    municipio: "Mexicali",
    ciudad: "Mexicali",
    telefono: "686 552 4545",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular en vialidades principales",
      "Emergencias en centros comerciales",
      "Incendios en edificios de altura media",
      "Control de fugas de gas",
      "Atención de accidentes de tránsito masivos",
      "Emergencias en hoteles y restaurantes",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Zona comercial y de entretenimiento de mayor afluencia",
      "Emergencias en eventos masivos y festivales",
      "Atención a corredores gastronómicos",
      "Rescate en edificios comerciales y hoteles"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.6389, lng: -115.4678 },
    descripcion: "La Estación Zona Río de Mexicali protege el corazón comercial y turístico de la ciudad, incluyendo la emblemática Zona Río con sus restaurantes de cocina china-mexicana, centros comerciales, hoteles y centros de entretenimiento. Esta área concentra la vida nocturna y recibe miles de visitantes diarios, tanto locales como turistas provenientes de California, Estados Unidos.",
    zonasCobertura: ["Zona Río", "Nueva Mexicali", "Zona Dorada", "Centro Comercial La Cachanilla", "Hoteles Boulevard López Mateos"],
    tiempoRespuesta: "4-8 minutos",
    personalActivo: 38,
    personal: 38,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-mexicali-sur",
    slug: "estacion-bomberos-mexicali-sur",
    estado: "Baja California",
    nombre: "Estación de Bomberos Mexicali Zona Sur",
    nombreCorto: "Estación Sur Mexicali",
    direccion: "Av. Calafia 2500",
    colonia: "Residencial del Bosque",
    codigoPostal: "21250",
    municipio: "Mexicali",
    ciudad: "Mexicali",
    telefono: "686 566 7878",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular",
      "Incendios en viviendas y fraccionamientos",
      "Control de fugas de gas residencial",
      "Emergencias en escuelas y universidades",
      "Atención a fraccionamientos residenciales",
      "Retiro de enjambres",
      "Rescate de mascotas y fauna"
    ],
    especialidades: [
      "Zona residencial de alta densidad",
      "Atención a desarrollos habitacionales",
      "Emergencias en centros educativos (UABC, CETYS)"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5978, lng: -115.4534 },
    descripcion: "La Estación Sur de Mexicali brinda protección a las zonas residenciales de mayor crecimiento de la ciudad, incluyendo fraccionamientos de clase media y alta, centros educativos de nivel superior como la UABC y CETYS Universidad, así como desarrollos comerciales emergentes. El personal está especialmente capacitado para emergencias en viviendas unifamiliares y edificios de departamentos.",
    zonasCobertura: ["Residencial del Bosque", "Fraccionamiento Valle Dorado", "UABC Campus Mexicali", "CETYS Universidad", "Colonia Calafia"],
    tiempoRespuesta: "6-10 minutos",
    personalActivo: 32,
    personal: 32,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-san-luis-rio-colorado",
    slug: "estacion-bomberos-san-luis-rio-colorado",
    estado: "Baja California",
    nombre: "Estación de Bomberos de San Luis Río Colorado",
    nombreCorto: "Estación San Luis Río Colorado",
    direccion: "Av. Kino 450",
    colonia: "Centro",
    codigoPostal: "21480",
    municipio: "Mexicali",
    ciudad: "San Luis Río Colorado",
    telefono: "653 534 2525",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios en zonas agrícolas",
      "Rescate vehicular en carreteras federales",
      "Emergencias en cruces fronterizos",
      "Control de fugas de gas",
      "Atención de accidentes en desierto",
      "Rescate de migrantes en zona desértica",
      "Emergencias por calor extremo"
    ],
    especialidades: [
      "Ciudad fronteriza con Arizona, Estados Unidos",
      "Zona agrícola del Valle de San Luis",
      "Rescate en condiciones desérticas extremas",
      "Coordinación con Fire Department de Arizona"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.4567, lng: -114.7723 },
    descripcion: "La Estación de Bomberos de San Luis Río Colorado protege esta importante ciudad fronteriza ubicada en el punto donde convergen Baja California, Sonora y Arizona, Estados Unidos. El clima desértico extremo, con temperaturas que pueden alcanzar los 52°C, requiere equipamiento y protocolos especializados. La estación también participa en operaciones de rescate de migrantes en zonas desérticas.",
    historia: "San Luis Río Colorado, fundada como estación del ferrocarril, ha crecido significativamente debido al comercio fronterizo y la agricultura. Su cuerpo de bomberos fue establecido formalmente en 1962 y ha desarrollado protocolos únicos para operar en uno de los climas más extremos del continente.",
    zonasCobertura: ["Centro de San Luis RC", "Zona Agrícola", "Puerto Fronterizo", "Colonia Comercial", "Ejidos aledaños"],
    tiempoRespuesta: "6-12 minutos",
    personalActivo: 35,
    personal: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Unidad Todoterreno", "1 Ambulancia"],
    unidades: 5
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // TIJUANA - CIUDAD MÁS POBLADA (8 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bc-central-tijuana",
    slug: "estacion-central-tijuana",
    estado: "Baja California",
    nombre: "Estación Central de Bomberos de Tijuana",
    nombreCorto: "Estación Central Tijuana",
    direccion: "Blvd. Agua Caliente 4500",
    colonia: "Aviación",
    codigoPostal: "22420",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 684 0580",
    telefonoEmergencia: "911",
    email: "bomberos.central@tijuana.gob.mx",
    servicios: [
      "Combate de incendios estructurales de alta complejidad",
      "Rescate vehicular con equipo hidráulico avanzado",
      "Atención de materiales peligrosos (HAZMAT)",
      "Rescate en estructuras colapsadas (USAR)",
      "Servicio prehospitalario de emergencia",
      "Control de fugas de gas y combustibles",
      "Incendios en edificios de gran altura",
      "Coordinación de emergencias metropolitanas",
      "Rescate en eventos masivos"
    ],
    especialidades: [
      "Centro de mando metropolitano de Tijuana",
      "Unidad USAR (Búsqueda y Rescate Urbano)",
      "Coordinación binacional con San Diego Fire-Rescue",
      "Respuesta a desastres naturales (sismos, deslaves)"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5027, lng: -117.0389 },
    descripcion: "La Estación Central de Bomberos de Tijuana es el núcleo operativo del Heroico Cuerpo de Bomberos de la ciudad más poblada de Baja California y una de las 10 más grandes de México. Con más de 2 millones de habitantes y una dinámica fronteriza única con San Diego, California, esta estación coordina la respuesta a emergencias en una metrópolis que crece verticalmente y enfrenta retos como deslaves en temporada de lluvias, incendios forestales en cañones y emergencias industriales en su vasto sector maquilador.",
    historia: "El Cuerpo de Bomberos de Tijuana fue fundado el 20 de noviembre de 1925 por ciudadanos voluntarios preocupados por la protección de la entonces pequeña ciudad fronteriza. En casi un siglo de servicio, ha evolucionado hasta convertirse en uno de los cuerpos de bomberos más experimentados de México, con capacitación continua del San Diego Fire-Rescue Department y otras agencias internacionales.",
    equipamiento: [
      "4 Autobombas de última generación",
      "2 Unidades de rescate técnico avanzado",
      "1 Unidad HAZMAT con capacidad de descontaminación masiva",
      "2 Ambulancias de soporte vital avanzado",
      "1 Escalera telescópica de 35 metros",
      "1 Unidad de comando móvil",
      "Equipo USAR completo para rescate en estructuras colapsadas",
      "Sistema de drones con cámaras térmicas"
    ],
    zonasCobertura: ["Zona Río Tijuana", "Aviación", "Cacho", "Chapultepec", "Hipódromo", "Zona Centro", "Zona Urbana Río"],
    tiempoRespuesta: "4-8 minutos en zona urbana central",
    personalActivo: 110,
    personal: 110,
    unidadesDisponibles: ["4 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT", "1 Comando Móvil"],
    unidades: 11
  },
  {
    id: "bc-tijuana-otay",
    slug: "estacion-bomberos-tijuana-otay",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana Otay",
    nombreCorto: "Estación Otay Tijuana",
    direccion: "Blvd. Industrial Otay 500",
    colonia: "Ciudad Industrial Nueva Tijuana",
    codigoPostal: "22500",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 623 8585",
    telefonoEmergencia: "911",
    email: "bomberos.otay@tijuana.gob.mx",
    servicios: [
      "Combate de incendios industriales especializados",
      "Atención de emergencias HAZMAT en plantas maquiladoras",
      "Rescate en maquinaria industrial",
      "Control de derrames químicos",
      "Emergencias en bodegas y centros de distribución",
      "Incendios en líneas de producción electrónica",
      "Evacuaciones industriales",
      "Emergencias en cruces fronterizos comerciales"
    ],
    especialidades: [
      "Mayor concentración industrial de Tijuana (500+ plantas)",
      "Especialistas HAZMAT certificados",
      "Puerto fronterizo de Otay Mesa (comercio internacional)",
      "Sector aeroespacial y dispositivos médicos"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5512, lng: -116.9712 },
    descripcion: "La Estación Otay de Tijuana está posicionada en el corazón del complejo industrial más importante del noroeste de México. La zona de Otay alberga más de 500 plantas maquiladoras de sectores como aeroespacial, electrónica, dispositivos médicos y automotriz, generando emergencias de alta complejidad técnica. Adicionalmente, el Puerto Fronterizo de Otay Mesa es el cruce comercial más transitado de la frontera México-Estados Unidos.",
    equipamiento: [
      "3 Autobombas industriales con sistemas de espuma",
      "1 Unidad HAZMAT completamente equipada",
      "2 Unidades de rescate industrial",
      "Equipos de contención de derrames",
      "Trajes de protección química Nivel A y B",
      "Detectores de gases múltiples"
    ],
    zonasCobertura: ["Ciudad Industrial Nueva Tijuana", "Parque Industrial Otay", "El Florido Industrial", "Mesa de Otay", "Puerto Fronterizo Otay Mesa"],
    tiempoRespuesta: "5-10 minutos en zona industrial",
    personalActivo: 65,
    personal: 65,
    unidadesDisponibles: ["3 Autobombas", "1 Unidad HAZMAT", "2 Unidades de Rescate", "1 Ambulancia"],
    unidades: 7
  },
  {
    id: "bc-tijuana-playas",
    slug: "estacion-bomberos-tijuana-playas",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana Playas",
    nombreCorto: "Estación Playas de Tijuana",
    direccion: "Paseo Playas de Tijuana 1200",
    colonia: "Playas de Tijuana",
    codigoPostal: "22500",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 680 2121",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales costeros",
      "Rescate acuático en playas del Pacífico",
      "Emergencias en zona turística internacional",
      "Incendios en restaurantes y hoteles costeros",
      "Rescate en acantilados",
      "Atención a bañistas y surfistas",
      "Emergencias en eventos playeros masivos",
      "Colaboración con Guardavidas"
    ],
    especialidades: [
      "Rescate acuático en océano Pacífico",
      "Zona turística fronteriza (colinda con Border Field State Park, USA)",
      "Emergencias en acantilados y zona costera",
      "Atención a turismo internacional"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5312, lng: -117.1234 },
    descripcion: "La Estación Playas de Tijuana protege la icónica zona costera donde el muro fronterizo México-Estados Unidos se adentra en el océano Pacífico. Esta área turística de alto perfil incluye playas, restaurantes de mariscos, hoteles boutique y el emblemático Faro de Playas de Tijuana. El personal cuenta con certificación en rescate acuático y opera en coordinación con guardavidas y la Guardia Costera.",
    equipamiento: [
      "2 Autobombas",
      "1 Unidad de rescate acuático con motos acuáticas",
      "Tablas de rescate y kayaks de emergencia",
      "Equipo de rapel para rescate en acantilados",
      "1 Ambulancia"
    ],
    zonasCobertura: ["Playas de Tijuana Sección Costa", "Playas de Tijuana Sección Jardines", "Monumental", "San Antonio del Mar", "Playas Coronado"],
    tiempoRespuesta: "5-10 minutos",
    personalActivo: 35,
    personal: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate Acuático", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-tijuana-zona-este",
    slug: "estacion-bomberos-tijuana-zona-este",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana Zona Este",
    nombreCorto: "Estación Zona Este Tijuana",
    direccion: "Blvd. Insurgentes 15000",
    colonia: "La Presa Este",
    codigoPostal: "22645",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 900 3434",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios en asentamientos irregulares",
      "Rescate vehicular en carreteras",
      "Emergencias en zonas de difícil acceso",
      "Control de fugas de gas",
      "Atención de deslaves e inundaciones",
      "Incendios forestales en cañones",
      "Rescate de personas en barrancas"
    ],
    especialidades: [
      "Zonas de asentamientos en cañones y laderas",
      "Incendios forestales urbanos",
      "Emergencias por deslaves en temporada de lluvias",
      "Acceso a zonas de topografía compleja"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.4923, lng: -116.8856 },
    descripcion: "La Estación Zona Este de Tijuana atiende una de las áreas de mayor complejidad topográfica de la ciudad, caracterizada por cañones, laderas pronunciadas y asentamientos en zonas de riesgo. Durante la temporada de lluvias (diciembre-marzo), esta estación es clave en la respuesta a deslaves e inundaciones que afectan a miles de familias. El personal está especializado en operaciones en terreno difícil.",
    zonasCobertura: ["La Presa Este", "Valle Redondo", "Cañón del Padre", "Terrazas del Valle", "Lomas del Valle"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 38,
    personal: 38,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Todoterreno", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 5
  },
  {
    id: "bc-tijuana-zona-norte",
    slug: "estacion-bomberos-tijuana-zona-norte",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana Zona Norte",
    nombreCorto: "Estación Zona Norte Tijuana",
    direccion: "Calle Segunda 8050",
    colonia: "Zona Norte",
    codigoPostal: "22000",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 685 9090",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Emergencias en zona de tolerancia",
      "Rescate vehicular",
      "Atención a intoxicaciones masivas",
      "Control de fugas de gas",
      "Incendios en hoteles y establecimientos nocturnos",
      "Emergencias médicas masivas",
      "Evacuaciones de edificios"
    ],
    especialidades: [
      "Zona de mayor densidad nocturna",
      "Atención a turismo de San Diego",
      "Emergencias en zona histórica",
      "Coordinación con autoridades sanitarias"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5334, lng: -117.0312 },
    descripcion: "La Estación Zona Norte de Tijuana protege el histórico centro de la ciudad y la emblemática Avenida Revolución, destino de millones de turistas estadounidenses anualmente. Esta zona de alta densidad comercial, con bares, restaurantes, hoteles y comercios, requiere atención especializada para emergencias en espacios con alta concentración de personas y construcciones históricas.",
    zonasCobertura: ["Zona Norte", "Zona Centro", "Avenida Revolución", "Colonia Federal", "Colonia Libertad"],
    tiempoRespuesta: "4-7 minutos",
    personalActivo: 42,
    personal: 42,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-tijuana-mesa",
    slug: "estacion-bomberos-tijuana-mesa",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana La Mesa",
    nombreCorto: "Estación La Mesa Tijuana",
    direccion: "Blvd. Díaz Ordaz 12500",
    colonia: "La Mesa",
    codigoPostal: "22450",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 681 5656",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate vehicular en vías rápidas",
      "Emergencias en plazas comerciales",
      "Incendios en edificios residenciales",
      "Control de fugas de gas",
      "Emergencias en hospitales y clínicas",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona residencial de clase media-alta",
      "Corredores comerciales modernos",
      "Hospitales y centros médicos privados",
      "Centros educativos de nivel superior"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.4867, lng: -116.9578 },
    descripcion: "La Estación La Mesa de Tijuana atiende una zona residencial y comercial de alto desarrollo, caracterizada por plazas comerciales modernas, hospitales privados de especialidades, universidades y fraccionamientos residenciales de clase media-alta. El Blvd. Díaz Ordaz es una de las vialidades más transitadas de la ciudad.",
    zonasCobertura: ["La Mesa", "Otay Universidad", "Las Palmas", "Santa Fe", "Vista Hermosa"],
    tiempoRespuesta: "5-10 minutos",
    personalActivo: 35,
    personal: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-tijuana-san-antonio",
    slug: "estacion-bomberos-tijuana-san-antonio",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana San Antonio de los Buenos",
    nombreCorto: "Estación San Antonio Tijuana",
    direccion: "Blvd. 2000 km 18",
    colonia: "San Antonio de los Buenos",
    codigoPostal: "22560",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 625 7878",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios forestales en zona costera",
      "Rescate vehicular en carretera libre Tijuana-Ensenada",
      "Emergencias en desarrollos turísticos",
      "Control de fugas de gas",
      "Rescate en acantilados costeros",
      "Atención a comunidades rurales",
      "Incendios en vegetación costera"
    ],
    especialidades: [
      "Corredor costero Tijuana-Ensenada",
      "Incendios forestales en zona de acantilados",
      "Desarrollos turísticos y residenciales de playa",
      "Carretera escénica Tijuana-Ensenada"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.4123, lng: -117.0945 },
    descripcion: "La Estación San Antonio de los Buenos protege el corredor costero sur de Tijuana, una zona de acantilados espectaculares, desarrollos turísticos de lujo y la famosa carretera escénica Tijuana-Ensenada. El área enfrenta riesgos de incendios forestales en la vegetación costera y emergencias en los fraccionamientos de playa que se extienden hacia Rosarito.",
    zonasCobertura: ["San Antonio de los Buenos", "Real del Mar", "Popotla", "Puerto Nuevo", "Carretera Escénica"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 28,
    personal: 28,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 5
  },
  {
    id: "bc-tijuana-presa",
    slug: "estacion-bomberos-tijuana-presa",
    estado: "Baja California",
    nombre: "Estación de Bomberos Tijuana La Presa",
    nombreCorto: "Estación La Presa Tijuana",
    direccion: "Blvd. Cucapah 26000",
    colonia: "La Presa",
    codigoPostal: "22643",
    municipio: "Tijuana",
    ciudad: "Tijuana",
    telefono: "664 901 2323",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático en presa Abelardo L. Rodríguez",
      "Incendios forestales periurbanos",
      "Rescate vehicular",
      "Emergencias en zonas de rápido crecimiento",
      "Control de fugas de gas",
      "Atención de deslaves",
      "Rescate en zonas de difícil acceso"
    ],
    especialidades: [
      "Rescate acuático en presa municipal",
      "Incendios forestales en zona periurbana",
      "Atención a desarrollos habitacionales emergentes",
      "Emergencias en temporada de lluvias"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.4567, lng: -116.8234 },
    descripcion: "La Estación La Presa de Tijuana cubre la zona aledaña a la Presa Abelardo L. Rodríguez, principal reserva de agua de la ciudad, así como los desarrollos habitacionales de rápido crecimiento en el sureste de Tijuana. El personal está capacitado en rescate acuático y operaciones en zonas de expansión urbana con infraestructura limitada.",
    zonasCobertura: ["La Presa", "Ejido Francisco Villa", "Villa del Campo", "Los Valles", "Zona de la Presa Abelardo L. Rodríguez"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 32,
    personal: 32,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate Acuático", "1 Unidad Forestal", "1 Ambulancia"],
    unidades: 5
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ENSENADA - PUERTO Y ZONA VITIVINÍCOLA (4 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bc-central-ensenada",
    slug: "estacion-central-ensenada",
    estado: "Baja California",
    nombre: "Estación Central de Bomberos de Ensenada",
    nombreCorto: "Estación Central Ensenada",
    direccion: "Calle Novena 650",
    colonia: "Zona Centro",
    codigoPostal: "22800",
    municipio: "Ensenada",
    ciudad: "Ensenada",
    telefono: "646 178 2388",
    telefonoEmergencia: "911",
    email: "bomberos@ensenada.gob.mx",
    servicios: [
      "Combate de incendios estructurales y urbanos",
      "Rescate vehicular especializado",
      "Emergencias portuarias y marítimas",
      "Atención de materiales peligrosos (HAZMAT)",
      "Rescate en embarcaciones",
      "Control de fugas de gas y combustibles",
      "Emergencias en cruceros turísticos",
      "Incendios en instalaciones portuarias"
    ],
    especialidades: [
      "Puerto de altura más importante del Pacífico mexicano",
      "Emergencias en Terminal de Cruceros",
      "Zona vitivinícola del Valle de Guadalupe",
      "Coordinación con Armada de México y Capitanía de Puerto"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 31.8667, lng: -116.5964 },
    descripcion: "La Estación Central de Bomberos de Ensenada protege el puerto de altura más importante del Pacífico mexicano, destino de cruceros internacionales que traen más de 500,000 turistas anuales. La ciudad, conocida como la 'Capital del Vino Mexicano' por su cercanía al Valle de Guadalupe, presenta riesgos únicos que incluyen emergencias portuarias, industriales y en la creciente industria turística y vitivinícola.",
    historia: "El Cuerpo de Bomberos de Ensenada fue fundado en 1918, respondiendo a las necesidades de un puerto en crecimiento. Ha desarrollado capacidades únicas para atender emergencias marítimas y colabora estrechamente con la Armada de México y la Guardia Costera estadounidense.",
    equipamiento: [
      "3 Autobombas de última generación",
      "1 Unidad de rescate marítimo con lancha de alta velocidad",
      "1 Unidad HAZMAT",
      "2 Ambulancias de soporte vital avanzado",
      "Equipos de rescate acuático especializados",
      "Escalera telescópica de 25 metros"
    ],
    zonasCobertura: ["Centro Histórico", "Zona Portuaria", "Terminal de Cruceros", "Muelle Fiscal", "Colonia Popular 89", "Bahía de Todos Santos"],
    tiempoRespuesta: "5-8 minutos en zona central",
    personalActivo: 65,
    personal: 65,
    unidadesDisponibles: ["3 Autobombas", "1 Unidad de Rescate Marítimo", "1 Unidad HAZMAT", "2 Ambulancias", "1 Escalera"],
    unidades: 8
  },
  {
    id: "bc-ensenada-valle-guadalupe",
    slug: "estacion-bomberos-ensenada-valle-guadalupe",
    estado: "Baja California",
    nombre: "Estación de Bomberos Ensenada Valle de Guadalupe",
    nombreCorto: "Estación Valle de Guadalupe",
    direccion: "Carretera Tecate-Ensenada km 75",
    colonia: "Francisco Zarco",
    codigoPostal: "22750",
    municipio: "Ensenada",
    ciudad: "Valle de Guadalupe",
    telefono: "646 155 3030",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales en viñedos",
      "Incendios forestales en zona vitivinícola",
      "Emergencias en bodegas de vino y restaurantes campestres",
      "Rescate vehicular en carretera del vino",
      "Control de fugas de gas propano",
      "Incendios en vegetación y chaparral",
      "Atención a turismo enológico",
      "Rescate en zonas rurales"
    ],
    especialidades: [
      "Principal región vitivinícola de México",
      "Combate de incendios forestales en temporada seca",
      "Protección de más de 150 vinícolas artesanales",
      "Emergencias en zona turística de alta afluencia"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.0534, lng: -116.6012 },
    descripcion: "La Estación Valle de Guadalupe protege la región vitivinícola más importante de México y una de las más reconocidas de América Latina. Con más de 150 vinícolas, decenas de restaurantes campestres de clase mundial y miles de visitantes semanales, el Valle de Guadalupe requiere protección especializada contra incendios forestales que amenazan viñedos valuados en millones de dólares.",
    historia: "El Valle de Guadalupe tiene una tradición vitivinícola que se remonta a las misiones jesuitas del siglo XVIII. El cuerpo de bomberos local trabaja en estrecha coordinación con vinicultores para proteger este patrimonio agrícola y cultural único.",
    equipamiento: [
      "2 Autobombas rurales de alta capacidad",
      "2 Unidades forestales todoterreno",
      "Equipos de líneas cortafuegos",
      "Tanques nodrizas de 10,000 litros",
      "1 Ambulancia"
    ],
    zonasCobertura: ["Valle de Guadalupe", "San Antonio de las Minas", "El Porvenir", "Francisco Zarco", "Ruta del Vino"],
    tiempoRespuesta: "10-20 minutos",
    personalActivo: 28,
    personal: 28,
    unidadesDisponibles: ["2 Autobombas", "2 Unidades Forestales", "1 Tanque Nodriza", "1 Ambulancia"],
    unidades: 6
  },
  {
    id: "bc-ensenada-sur",
    slug: "estacion-bomberos-ensenada-sur",
    estado: "Baja California",
    nombre: "Estación de Bomberos Ensenada Zona Sur",
    nombreCorto: "Estación Sur Ensenada",
    direccion: "Av. Reforma 3500",
    colonia: "Maneadero",
    codigoPostal: "22790",
    municipio: "Ensenada",
    ciudad: "Maneadero",
    telefono: "646 177 4545",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios agrícolas en campos de cultivo",
      "Rescate vehicular en carretera transpeninsular",
      "Emergencias en invernaderos y agroindustrias",
      "Control de fugas de agroquímicos",
      "Incendios en empacadoras",
      "Atención a comunidades rurales",
      "Rescate en zonas agrícolas"
    ],
    especialidades: [
      "Zona agrícola productora de tomate, fresa y hortalizas",
      "Emergencias en invernaderos de alta tecnología",
      "Carretera Transpeninsular hacia San Quintín",
      "Industria empacadora y exportadora"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 31.7167, lng: -116.5667 },
    descripcion: "La Estación Sur de Ensenada protege la zona agrícola de Maneadero y el corredor transpeninsular hacia San Quintín, una de las regiones productoras de hortalizas más importantes de México. La zona concentra cientos de invernaderos de alta tecnología y empacadoras que exportan a Estados Unidos y Canadá.",
    zonasCobertura: ["Maneadero", "Ejido Chapultepec", "Rodolfo Sánchez Taboada", "Santo Tomás", "Zona Agrícola Sur"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 25,
    personal: 25,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Rural", "1 Ambulancia"],
    unidades: 4
  },
  {
    id: "bc-san-quintin",
    slug: "estacion-bomberos-san-quintin",
    estado: "Baja California",
    nombre: "Estación de Bomberos de San Quintín",
    nombreCorto: "Estación San Quintín",
    direccion: "Carretera Transpeninsular km 178",
    colonia: "San Quintín",
    codigoPostal: "22930",
    municipio: "Ensenada",
    ciudad: "San Quintín",
    telefono: "616 165 2020",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios agrícolas extensivos",
      "Rescate vehicular en carretera transpeninsular",
      "Emergencias en campos agrícolas",
      "Control de fugas de agroquímicos",
      "Atención a comunidades jornaleras",
      "Incendios en empacadoras",
      "Emergencias en zonas remotas"
    ],
    especialidades: [
      "Valle agrícola de San Quintín (principal productor de fresa)",
      "Zona remota a 300 km de Ensenada",
      "Atención a población jornalera migrante",
      "Emergencias agroindustriales"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 30.55, lng: -115.9333 },
    descripcion: "La Estación de Bomberos de San Quintín es la más austral de Baja California, atendiendo el valle agrícola más productivo del estado. Esta zona, ubicada a 300 km de Ensenada, es el principal productor de fresa, frambuesa y tomate de México para exportación. La estación brinda cobertura a una población que incluye miles de trabajadores jornaleros migrantes.",
    zonasCobertura: ["San Quintín", "Vicente Guerrero", "Camalú", "Colonet", "Valle de San Quintín"],
    tiempoRespuesta: "15-30 minutos",
    personalActivo: 22,
    personal: 22,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Rural", "1 Ambulancia"],
    unidades: 4
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // TECATE - CIUDAD CERVECERA (2 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bc-central-tecate",
    slug: "estacion-central-tecate",
    estado: "Baja California",
    nombre: "Estación Central de Bomberos de Tecate",
    nombreCorto: "Estación Central Tecate",
    direccion: "Av. Juárez 500",
    colonia: "Centro",
    codigoPostal: "21400",
    municipio: "Tecate",
    ciudad: "Tecate",
    telefono: "665 654 1313",
    telefonoEmergencia: "911",
    email: "bomberos@tecate.gob.mx",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios forestales en sierras de Juárez y La Rumorosa",
      "Rescate vehicular en carretera Tecate-Tijuana",
      "Emergencias en industria cervecera",
      "Control de fugas de gas",
      "Rescate en zonas montañosas",
      "Incendios en zona comercial fronteriza",
      "Atención de accidentes en La Rumorosa"
    ],
    especialidades: [
      "Combate de incendios forestales en Sierra de Juárez",
      "Sede de Cervecería Tecate (Heineken México)",
      "Paso fronterizo hacia Tecate, California",
      "Rescate en carretera escénica La Rumorosa"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5728, lng: -116.6264 },
    descripcion: "La Estación Central de Bomberos de Tecate protege esta pintoresca ciudad fronteriza, mundialmente conocida por su industria cervecera. Tecate, rodeada por montañas y bosques de la Sierra de Juárez, enfrenta riesgos significativos de incendios forestales. Además, la estación atiende emergencias en el peligroso tramo carretero de La Rumorosa, famoso por sus curvas pronunciadas y condiciones climáticas extremas.",
    historia: "Tecate fue fundada en 1892 y su industria cervecera data de 1944. El cuerpo de bomberos ha desarrollado expertise único en combate de incendios forestales debido a la geografía montañosa de la región y los veranos calurosos y secos.",
    equipamiento: [
      "2 Autobombas urbanas",
      "2 Unidades forestales todoterreno",
      "Equipos de líneas cortafuegos y herramientas manuales",
      "1 Unidad de rescate para carretera",
      "1 Ambulancia de soporte vital avanzado"
    ],
    zonasCobertura: ["Centro de Tecate", "Zona Industrial Cervecera", "El Descanso", "La Puerta", "Zona Fronteriza"],
    tiempoRespuesta: "5-10 minutos en zona urbana",
    personalActivo: 38,
    personal: 38,
    unidadesDisponibles: ["2 Autobombas", "2 Unidades Forestales", "1 Unidad de Rescate", "1 Ambulancia"],
    unidades: 6
  },
  {
    id: "bc-la-rumorosa",
    slug: "estacion-bomberos-la-rumorosa",
    estado: "Baja California",
    nombre: "Estación de Bomberos de La Rumorosa",
    nombreCorto: "Estación La Rumorosa",
    direccion: "Carretera Tecate-Mexicali km 50",
    colonia: "La Rumorosa",
    codigoPostal: "21520",
    municipio: "Tecate",
    ciudad: "La Rumorosa",
    telefono: "686 567 0101",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate vehicular en carretera de alta peligrosidad",
      "Combate de incendios forestales en bosque de pino",
      "Atención de accidentes múltiples",
      "Rescate en zona de rocas y cañones",
      "Emergencias por condiciones climáticas extremas",
      "Incendios en cabañas y áreas recreativas",
      "Rescate de motociclistas y ciclistas",
      "Atención de nevadas y hielo en carretera"
    ],
    especialidades: [
      "Carretera más peligrosa de Baja California (La Rumorosa)",
      "Incendios forestales en bosque de pino-encino",
      "Rescate en alturas de 1,200+ metros sobre el nivel del mar",
      "Condiciones climáticas extremas (nieve, neblina, viento)"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.5333, lng: -116.0333 },
    descripcion: "La Estación de Bomberos de La Rumorosa está ubicada en uno de los puntos más críticos de Baja California: el paso de montaña de La Rumorosa a 1,275 metros de altitud. Este tramo carretero, conocido por sus 80+ curvas cerradas, neblina densa, nieve invernal y vientos intensos, registra numerosos accidentes anualmente. La estación también protege los bosques de pino-encino del Parque Nacional Constitución de 1857.",
    historia: "La Rumorosa debe su nombre al sonido del viento entre las rocas. La estación de bomberos fue establecida en 1985 como respuesta a la alta tasa de accidentes vehiculares y los incendios forestales que amenazaban la zona boscosa.",
    equipamiento: [
      "2 Unidades de rescate pesado para accidentes carreteros",
      "2 Autobombas forestales todoterreno",
      "Equipos de rescate técnico para barrancas",
      "Motosierras y herramientas forestales",
      "1 Ambulancia 4x4"
    ],
    zonasCobertura: ["La Rumorosa", "El Condor", "Parque Nacional Constitución de 1857", "Laguna Hanson", "Carretera Federal 2"],
    tiempoRespuesta: "10-20 minutos según condiciones climáticas",
    personalActivo: 25,
    personal: 25,
    unidadesDisponibles: ["2 Autobombas Forestales", "2 Unidades de Rescate", "1 Ambulancia 4x4"],
    unidades: 5
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // PLAYAS DE ROSARITO (2 estaciones)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "bc-central-rosarito",
    slug: "estacion-central-rosarito",
    estado: "Baja California",
    nombre: "Estación Central de Bomberos de Playas de Rosarito",
    nombreCorto: "Estación Central Rosarito",
    direccion: "Blvd. Benito Juárez 900",
    colonia: "Centro",
    codigoPostal: "22710",
    municipio: "Playas de Rosarito",
    ciudad: "Playas de Rosarito",
    telefono: "661 612 0808",
    telefonoEmergencia: "911",
    email: "bomberos@rosarito.gob.mx",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático en playas del Pacífico",
      "Emergencias en hoteles y condominios turísticos",
      "Incendios en restaurantes de mariscos y langosta",
      "Rescate vehicular",
      "Atención a turismo internacional",
      "Emergencias en eventos masivos (Spring Break, conciertos)",
      "Control de fugas de gas propano"
    ],
    especialidades: [
      "Destino turístico de playa internacional",
      "Rescate acuático certificado",
      "Eventos masivos de Spring Break",
      "Estudios cinematográficos Fox Baja Studios"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.3639, lng: -117.0531 },
    descripcion: "La Estación Central de Bomberos de Playas de Rosarito protege este popular destino turístico de playa, famoso por sus restaurantes de langosta estilo Puerto Nuevo, hoteles frente al mar y vida nocturna que atrae a miles de visitantes estadounidenses semanalmente. La ciudad también alberga los estudios cinematográficos Fox Baja Studios, donde se han filmado producciones de Hollywood como Titanic y Piratas del Caribe.",
    historia: "Playas de Rosarito se independizó de Tijuana en 1995, convirtiéndose en el quinto municipio de Baja California. Su cuerpo de bomberos ha crecido al ritmo del desarrollo turístico, especializándose en atención a visitantes internacionales y eventos masivos.",
    equipamiento: [
      "2 Autobombas urbanas",
      "1 Unidad de rescate acuático con motos acuáticas",
      "1 Unidad de rescate técnico",
      "2 Ambulancias de soporte vital",
      "Equipos de buceo y salvamento marítimo"
    ],
    zonasCobertura: ["Centro de Rosarito", "Zona Hotelera", "Playas del Norte", "Puerto Nuevo", "Calafia"],
    tiempoRespuesta: "5-10 minutos",
    personalActivo: 42,
    personal: 42,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate Acuático", "1 Unidad de Rescate", "2 Ambulancias"],
    unidades: 6
  },
  {
    id: "bc-rosarito-sur",
    slug: "estacion-bomberos-rosarito-sur",
    estado: "Baja California",
    nombre: "Estación de Bomberos Playas de Rosarito Zona Sur",
    nombreCorto: "Estación Sur Rosarito",
    direccion: "Blvd. Popotla km 35",
    colonia: "Primo Tapia",
    codigoPostal: "22716",
    municipio: "Playas de Rosarito",
    ciudad: "Primo Tapia",
    telefono: "661 614 3232",
    telefonoEmergencia: "911",
    servicios: [
      "Combate de incendios estructurales",
      "Incendios forestales en cañones costeros",
      "Rescate vehicular en carretera libre Tijuana-Ensenada",
      "Rescate en acantilados y playas remotas",
      "Emergencias en desarrollos turísticos",
      "Control de fugas de gas",
      "Incendios en vegetación costera",
      "Atención a comunidades rurales costeras"
    ],
    especialidades: [
      "Corredor costero hacia Ensenada",
      "Incendios forestales en zona de acantilados",
      "Desarrollos turísticos de lujo (Las Gaviotas, La Fonda)",
      "Playas remotas de difícil acceso"
    ],
    horario: "24 horas, 365 días del año",
    coordenadas: { lat: 32.2845, lng: -117.0456 },
    descripcion: "La Estación Sur de Rosarito atiende la zona costera hacia Ensenada, caracterizada por acantilados espectaculares, playas semiprivadas y desarrollos turísticos de lujo como Las Gaviotas, La Fonda y K-38. Esta zona, popular entre surfistas y turistas de fin de semana, presenta desafíos de acceso y riesgos de incendios forestales en la vegetación costera.",
    zonasCobertura: ["Primo Tapia", "La Fonda", "Las Gaviotas", "K-38", "Campo López", "La Misión"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 22,
    personal: 22,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Ambulancia"],
    unidades: 4
  }
];
function getEstacionBySlug(slug) {
  return estacionesBajaCalifornia.find((e) => e.slug === slug);
}
function getEstacionesByMunicipio(municipio) {
  return estacionesBajaCalifornia.filter((e) => e.municipio === municipio);
}
function getMunicipios() {
  return [...new Set(estacionesBajaCalifornia.map((e) => e.municipio))].sort();
}
function getEstacionesCercanas(slug, limit = 3) {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  const mismoMunicipio = estacionesBajaCalifornia.filter(
    (e) => e.municipio === estacion.municipio && e.slug !== slug
  );
  const otrosMunicipios = estacionesBajaCalifornia.filter(
    (e) => e.municipio !== estacion.municipio
  );
  return [...mismoMunicipio, ...otrosMunicipios].slice(0, limit);
}
function getEstadisticas() {
  const totalEstaciones = estacionesBajaCalifornia.length;
  const totalPersonal = estacionesBajaCalifornia.reduce((acc, e) => acc + (e.personalActivo || 0), 0);
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

export { getEstacionesCercanas as a, getMunicipios as b, getEstadisticas as c, estacionesBajaCalifornia as e, getEstacionBySlug as g };
