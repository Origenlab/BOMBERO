const estacionesNayarit = [
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA METROPOLITANA TEPIC
  // Capital del estado, centro político, administrativo y comercial
  // Población: 450,000+ habitantes en área metropolitana
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Tepic",
    slug: "estacion-central-tepic",
    direccion: "Av. México Norte 500, Col. Centro",
    ciudad: "Tepic",
    estado: "Nayarit",
    cp: "63000",
    telefono: "(311) 213-2232",
    telefono2: "(311) 213-2244",
    telefonoEmergencia: "911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y forestales",
      "Rescate urbano especializado USAR",
      "Materiales peligrosos HAZMAT Nivel II",
      "Rescate vehicular carreteras federales",
      "Coordinación estatal de emergencias",
      "Academia de formación bomberil del estado",
      "Atención de emergencias volcánicas (Ceboruco)",
      "Rescate en estructuras colapsadas",
      "Evacuación masiva huracanes",
      "Centro de operaciones de emergencia"
    ],
    coordenadas: { lat: 21.5085, lng: -104.8954 },
    zona: "Zona Metropolitana Tepic",
    especialidades: ["HAZMAT", "Rescate Urbano USAR", "Emergencias Volcánicas", "Coordinación Estatal"],
    comandancia: "Heroico Cuerpo de Bomberos de Tepic",
    historia: "Fundado en 1952, el Heroico Cuerpo de Bomberos de Tepic es la institución de emergencias más importante del estado. Como estación central, coordina las operaciones de todas las unidades en Nayarit y mantiene el único equipo HAZMAT Nivel II del estado. Cuenta con helipuerto para evacuaciones de emergencia.",
    cobertura: ["Centro Histórico", "Col. Centro", "Fray Junípero Serra", "Lomas de la Cruz", "Ciudad del Valle", "Zona Industrial"],
    tiempoRespuesta: "4-7 minutos zona centro",
    fundacion: "1952",
    personal: 85,
    unidades: 12
  },
  {
    nombre: "Estación de Bomberos Tepic Norte - Versalles",
    slug: "estacion-bomberos-tepic-norte",
    direccion: "Blvd. Luis Donaldo Colosio 2500, Fracc. Versalles",
    ciudad: "Tepic",
    estado: "Nayarit",
    cp: "63130",
    telefono: "(311) 129-5050",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios residenciales y comerciales",
      "Rescate vehicular periférico norte",
      "Atención fraccionamientos y plazas comerciales",
      "Emergencias centros comerciales",
      "Incendios forestales cerro de San Juan"
    ],
    coordenadas: { lat: 21.5356, lng: -104.8756 },
    zona: "Zona Metropolitana Tepic",
    especialidades: ["Rescate Vehicular", "Incendios Forestales"],
    cobertura: ["Versalles", "Las Brisas", "Jardines del Valle", "Villas del Roble", "Centro Comercial Forum"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Tepic Sur - IMSS",
    slug: "estacion-bomberos-tepic-sur",
    direccion: "Av. Insurgentes 1200, Col. Mololoa",
    ciudad: "Tepic",
    estado: "Nayarit",
    cp: "63050",
    telefono: "(311) 217-3030",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias zona hospitalaria",
      "Rescate carretero Tepic-Guadalajara",
      "Atención zona industrial sur",
      "Apoyo Hospital Regional IMSS"
    ],
    coordenadas: { lat: 21.4789, lng: -104.8923 },
    zona: "Zona Metropolitana Tepic",
    especialidades: ["Emergencias Hospitalarias", "Rescate Carretero"],
    cobertura: ["Mololoa", "Hospital IMSS", "Universidad Autónoma de Nayarit", "Zona Industrial Sur", "Libramiento Sur"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Xalisco",
    slug: "estacion-bomberos-xalisco",
    direccion: "Calle Hidalgo 100, Centro Xalisco",
    ciudad: "Xalisco",
    estado: "Nayarit",
    cp: "63780",
    telefono: "(311) 212-4545",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate zona conurbada Tepic-Xalisco",
      "Emergencias zonas agrícolas",
      "Incendios forestales Sierra de Álica"
    ],
    coordenadas: { lat: 21.4833, lng: -104.8833 },
    zona: "Zona Metropolitana Tepic",
    especialidades: ["Incendios Forestales", "Rescate Agrícola"],
    historia: "Xalisco es municipio conurbado con Tepic, conocido por la producción de jocuixtle y su cercanía a la Sierra de Álica.",
    cobertura: ["Xalisco Centro", "Zona agrícola", "Acceso Sierra de Álica", "Fraccionamientos conurbados"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // RIVIERA NAYARIT SUR
  // Destino turístico de clase mundial - Competencia directa de Cancún
  // Nuevo Vallarta, Bucerías, Punta de Mita, Cruz de Huanacaxtle
  // +3 millones de turistas internacionales anuales
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación Central de Bomberos Bahía de Banderas",
    slug: "estacion-central-bahia-banderas",
    direccion: "Av. Emiliano Zapata 150, Centro Mezcales",
    ciudad: "Bahía de Banderas",
    estado: "Nayarit",
    cp: "63735",
    telefono: "(329) 291-6060",
    telefono2: "(329) 291-6161",
    telefonoEmergencia: "911",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales y hoteleros",
      "Rescate acuático oceánico certificado",
      "Materiales peligrosos HAZMAT hotelería",
      "Emergencias resorts y desarrollos turísticos",
      "Rescate marítimo coordinado con Marina",
      "Atención accidentes de tránsito turístico",
      "Evacuación hotelera huracanes",
      "Protocolo de tsunami para costa",
      "Rescate de fauna marina (tortugas, ballenas)",
      "Coordinación con bomberos Puerto Vallarta"
    ],
    coordenadas: { lat: 20.7536, lng: -105.31 },
    zona: "Riviera Nayarit Sur",
    especialidades: ["Rescate Acuático Oceánico", "Emergencias Hoteleras", "HAZMAT", "Tsunami", "Turismo Internacional"],
    comandancia: "H. Cuerpo de Bomberos de Bahía de Banderas",
    historia: "La estación central de Bahía de Banderas atiende la Riviera Nayarit, uno de los destinos turísticos de más rápido crecimiento en México. Desde 2007, el desarrollo de resorts de lujo como Four Seasons, St. Regis, y W Hotel ha requerido capacitación especializada en emergencias de alta complejidad y turismo internacional.",
    cobertura: ["Nuevo Vallarta", "Bucerías", "Cruz de Huanacaxtle", "Flamingos", "Jardín del Edén", "Mezcales"],
    tiempoRespuesta: "5-12 minutos zona hotelera",
    fundacion: "1995",
    personal: 45,
    unidades: 8
  },
  {
    nombre: "Estación de Bomberos Punta de Mita",
    slug: "estacion-bomberos-punta-mita",
    direccion: "Carretera Punta de Mita Km 12, Corral del Risco",
    ciudad: "Bahía de Banderas",
    estado: "Nayarit",
    cp: "63734",
    telefono: "(329) 291-5500",
    telefono2: "(329) 291-5501",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios resorts de ultra lujo",
      "Rescate acuático Islas Marietas",
      "Emergencias Four Seasons / St. Regis / W Punta de Mita",
      "Rescate en playas de oleaje extremo",
      "Evacuación VIP huracanes",
      "Atención accidentes deportes acuáticos",
      "Rescate de surfistas",
      "Protección Islas Marietas (ANP)",
      "Emergencias campos de golf"
    ],
    coordenadas: { lat: 20.7678, lng: -105.5189 },
    zona: "Riviera Nayarit Sur",
    especialidades: ["Rescate Acuático Extremo", "Turismo de Ultra Lujo", "Islas Marietas", "Surf Rescue"],
    historia: "Punta de Mita es sede de los resorts más exclusivos de México: Four Seasons, St. Regis, W, y desarrollos residenciales de ultra lujo. La estación está especializada en atención a huéspedes internacionales y deportes acuáticos extremos.",
    cobertura: ["Punta de Mita", "Four Seasons Resort", "St. Regis Resort", "W Punta de Mita", "Islas Marietas acceso", "Playas de surf", "Campos de golf"],
    tiempoRespuesta: "5-15 minutos según ubicación"
  },
  {
    nombre: "Estación de Bomberos Aeropuerto Internacional Vallarta",
    slug: "estacion-bomberos-aeropuerto-vallarta",
    direccion: "Aeropuerto Internacional Licenciado Gustavo Díaz Ordaz",
    ciudad: "Bahía de Banderas",
    estado: "Nayarit",
    cp: "63732",
    telefono: "(322) 221-1298",
    telefono2: "(322) 221-1299",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Servicios ARFF (Aircraft Rescue and Fire Fighting)",
      "Combate de incendios aeronaves",
      "Rescate de aeronaves accidentadas",
      "Emergencias con combustible de aviación",
      "Materiales peligrosos HAZMAT aeroportuario",
      "Evacuación masiva de terminales",
      "Coordinación internacional de emergencias",
      "Atención VIP y jets privados"
    ],
    coordenadas: { lat: 20.6801, lng: -105.2541 },
    zona: "Riviera Nayarit Sur",
    especialidades: ["ARFF", "HAZMAT Aeroportuario", "Rescate Aeronáutico", "Evacuación Masiva"],
    comandancia: "Servicios de Rescate y Extinción de Incendios - AICM Grupo Aeroportuario del Pacífico",
    historia: "El Aeropuerto Internacional de Puerto Vallarta/Riviera Nayarit (PVR) es el segundo aeropuerto más importante del Pacífico mexicano, con más de 5 millones de pasajeros anuales. Los servicios ARFF cumplen con normativa OACI Categoría 9.",
    cobertura: ["Aeropuerto PVR", "Terminal 1 y 2", "Hangares", "Pistas de aterrizaje", "Zona de combustibles", "Jets privados"],
    tiempoRespuesta: "3 minutos máximo según norma OACI"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // RIVIERA NAYARIT NORTE
  // Sayulita (Pueblo Mágico), San Pancho, Lo de Marcos
  // Capital del surf en México - Turismo alternativo y bohemio
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Sayulita",
    slug: "estacion-bomberos-sayulita",
    direccion: "Calle Revolución 50, Centro Sayulita",
    ciudad: "Bahía de Banderas",
    estado: "Nayarit",
    cp: "63728",
    telefono: "(329) 291-3636",
    telefono2: "(329) 291-3637",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático surf y playas",
      "Protección Pueblo Mágico",
      "Emergencias turismo internacional alternativo",
      "Rescate de surfistas profesionales",
      "Atención eventos masivos (Festival Sayulita)",
      "Emergencias en selva y manglares",
      "Rescate fauna marina (tortugas)",
      "Evacuación huracanes zona norte"
    ],
    coordenadas: { lat: 20.8683, lng: -105.4397 },
    zona: "Riviera Nayarit Norte",
    especialidades: ["Surf Rescue", "Pueblo Mágico", "Rescate Acuático", "Eventos Masivos", "Turismo Alternativo"],
    historia: "Sayulita es Pueblo Mágico desde 2015 y capital del surf en México. Este pueblo costero recibe más de 500,000 visitantes anuales, principalmente surfistas y turismo bohemio internacional. El Festival Sayulita atrae a miles de personas cada año.",
    cobertura: ["Sayulita Centro", "Playa de Sayulita", "Playa de los Muertos", "San Pancho acceso", "Spots de surf"],
    tiempoRespuesta: "5-10 minutos"
  },
  {
    nombre: "Estación de Bomberos Rincón de Guayabitos",
    slug: "estacion-bomberos-guayabitos",
    direccion: "Av. Sol Nuevo 200, Rincón de Guayabitos",
    ciudad: "Compostela",
    estado: "Nayarit",
    cp: "63727",
    telefono: "(327) 274-0404",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate acuático playas familiares",
      "Emergencias turismo nacional",
      "Rescate Isla del Coral",
      "Evacuación huracanes",
      "Atención temporada alta vacacional"
    ],
    coordenadas: { lat: 21.0294, lng: -105.2742 },
    zona: "Riviera Nayarit Norte",
    especialidades: ["Rescate Acuático", "Turismo Nacional"],
    historia: "Rincón de Guayabitos es el destino de playa favorito del turismo nacional, especialmente familias de Guadalajara. La playa tranquila y la Isla del Coral atraen miles de visitantes en temporada alta.",
    cobertura: ["Rincón de Guayabitos", "La Peñita de Jaltemba", "Los Ayala", "Isla del Coral", "Lo de Marcos acceso"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // ZONA HISTÓRICA SAN BLAS
  // Puerto colonial, manglares, La Tovara, cocodrilos, ecoturismo
  // Ruta del Oro del Pacífico - Patrimonio histórico
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos San Blas",
    slug: "estacion-bomberos-san-blas",
    direccion: "Calle Juárez 80, Centro San Blas",
    ciudad: "San Blas",
    estado: "Nayarit",
    cp: "63740",
    telefono: "(323) 285-0505",
    telefono2: "(323) 285-0606",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate acuático estuarios y manglares",
      "Emergencias con cocodrilos",
      "Protección patrimonio histórico colonial",
      "Rescate en La Tovara y manglares",
      "Evacuación huracanes intensos",
      "Protocolo de tsunami",
      "Rescate de aves migratorias",
      "Incendios forestales estacionales",
      "Emergencias turismo ecológico"
    ],
    coordenadas: { lat: 21.5397, lng: -105.2833 },
    zona: "Zona Histórica San Blas",
    especialidades: ["Rescate en Manglares", "Emergencias con Fauna", "Patrimonio Histórico", "Ecoturismo", "Cocodrilos"],
    comandancia: "H. Cuerpo de Bomberos de San Blas",
    historia: "San Blas fue el puerto más importante del Pacífico mexicano durante la Colonia, punto de partida de las expediciones a California. Hoy es centro de ecoturismo con los manglares de La Tovara y reservas de aves. Los bomberos están especializados en rescate en manglares y emergencias con cocodrilos.",
    cobertura: ["San Blas Centro", "Puerto de San Blas", "La Tovara", "Manglares", "Contadero", "Playa Borrego", "Las Islitas"],
    tiempoRespuesta: "5-15 minutos según zona",
    fundacion: "1975"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // LLANURA COSTERA NORTE
  // Agricultura, Santiago Ixcuintla, marismas, Mexcaltitán
  // Reserva de la Biosfera Marismas Nacionales - Humedal RAMSAR
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Santiago Ixcuintla",
    slug: "estacion-bomberos-santiago-ixcuintla",
    direccion: "Calle Constitución 150, Centro Santiago Ixcuintla",
    ciudad: "Santiago Ixcuintla",
    estado: "Nayarit",
    cp: "63500",
    telefono: "(323) 235-1818",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias agrícolas (tabaco, caña)",
      "Rescate en Marismas Nacionales",
      "Protección Mexcaltitán (isla)",
      "Incendios en campos agrícolas",
      "Evacuación huracanes zona norte",
      "Rescate fluvial río Santiago",
      "Emergencias industriales agrícolas"
    ],
    coordenadas: { lat: 21.8117, lng: -105.2056 },
    zona: "Llanura Costera Norte",
    especialidades: ["Incendios Agrícolas", "Rescate en Humedales", "Marismas Nacionales"],
    historia: "Santiago Ixcuintla es centro de la producción tabacalera de Nayarit y puerta de entrada a Mexcaltitán, la 'Venecia Mexicana', isla considerada posible origen de los aztecas.",
    cobertura: ["Santiago Ixcuintla Centro", "Mexcaltitán (isla)", "Marismas Nacionales", "Zona tabacalera", "Río Santiago"],
    tiempoRespuesta: "5-20 minutos"
  },
  {
    nombre: "Estación de Bomberos Tuxpan",
    slug: "estacion-bomberos-tuxpan",
    direccion: "Calle Morelos 50, Centro Tuxpan",
    ciudad: "Tuxpan",
    estado: "Nayarit",
    cp: "63600",
    telefono: "(319) 232-2727",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Emergencias zona agrícola frutícola",
      "Rescate carretero norte del estado",
      "Incendios forestales zona serrana",
      "Atención comunidades rurales"
    ],
    coordenadas: { lat: 21.95, lng: -105.2667 },
    zona: "Llanura Costera Norte",
    especialidades: ["Incendios Agrícolas", "Rescate Carretero"],
    cobertura: ["Tuxpan Centro", "Zona frutícola", "Carretera federal 15", "Comunidades rurales norte"],
    tiempoRespuesta: "5-15 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // SIERRA DEL NAYAR
  // Comunidades Wixárikas (Huicholes), volcán Ceboruco, zona montañosa
  // Cultura indígena, artesanía sagrada, sitios ceremoniales
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Compostela",
    slug: "estacion-bomberos-compostela",
    direccion: "Calle Hidalgo 200, Centro Compostela",
    ciudad: "Compostela",
    estado: "Nayarit",
    cp: "63700",
    telefono: "(311) 215-4141",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios estructurales",
      "Rescate carretero Tepic-Puerto Vallarta",
      "Monitoreo volcán Ceboruco",
      "Incendios forestales zona serrana",
      "Emergencias comunidades serranas",
      "Rescate en zonas de difícil acceso",
      "Protocolo de emergencia volcánica"
    ],
    coordenadas: { lat: 21.2361, lng: -104.9028 },
    zona: "Sierra del Nayar",
    especialidades: ["Emergencias Volcánicas", "Incendios Forestales", "Rescate Montaña"],
    historia: "Compostela es centro de la zona serrana y punto de monitoreo del volcán Ceboruco, que tuvo su última erupción en 1870. La estación coordina emergencias con comunidades wixárikas de la sierra.",
    cobertura: ["Compostela Centro", "Volcán Ceboruco", "Zona serrana", "Comunidades wixárikas", "Carretera 200"],
    tiempoRespuesta: "5-25 minutos según zona"
  },
  {
    nombre: "Estación de Bomberos Ixtlán del Río",
    slug: "estacion-bomberos-ixtlan-rio",
    direccion: "Calle Juárez 75, Centro Ixtlán del Río",
    ciudad: "Ixtlán del Río",
    estado: "Nayarit",
    cp: "63940",
    telefono: "(324) 243-0808",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Protección zona arqueológica Los Toriles",
      "Rescate carretero autopista Guadalajara-Tepic",
      "Emergencias frontera Jalisco-Nayarit",
      "Incendios forestales zona sur"
    ],
    coordenadas: { lat: 21.0333, lng: -104.3667 },
    zona: "Sierra del Nayar",
    especialidades: ["Rescate Carretero", "Protección Arqueológica"],
    historia: "Ixtlán del Río es conocido por la zona arqueológica de Los Toriles, importante centro ceremonial prehispánico. Ubicado en la frontera con Jalisco, atiende emergencias en la autopista Guadalajara-Tepic.",
    cobertura: ["Ixtlán del Río Centro", "Los Toriles", "Autopista Guadalajara-Tepic", "Frontera Jalisco"],
    tiempoRespuesta: "5-12 minutos"
  },
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  // CORREDOR INDUSTRIAL SUR
  // ════════════════════════════════════════════════════════════════════════════════════════════════════════════════
  {
    nombre: "Estación de Bomberos Las Varas",
    slug: "estacion-bomberos-las-varas",
    direccion: "Carretera 200 Km 45, Las Varas",
    ciudad: "Compostela",
    estado: "Nayarit",
    cp: "63715",
    telefono: "(327) 270-2020",
    horario: "24 horas, 365 días del año",
    servicios: [
      "Combate de incendios",
      "Rescate carretero Tepic-Puerto Vallarta",
      "Emergencias zona agrícola",
      "Incendios forestales",
      "Atención accidentes turísticos"
    ],
    coordenadas: { lat: 21.1667, lng: -105.1833 },
    zona: "Corredor Industrial Sur",
    especialidades: ["Rescate Carretero", "Incendios Forestales"],
    cobertura: ["Las Varas", "Carretera 200", "Zacualpan", "Zona agrícola centro-sur"],
    tiempoRespuesta: "5-15 minutos"
  }
];
const NAYARIT_SEO = {
  // ─── Datos Demográficos y Geográficos Detallados ───
  demografia: {
    poblacion: "1,288,571",
    litoralCostero: "289 km"}};
const ZONAS_NAYARIT = [
  {
    id: "tepic",
    nombre: "Zona Metropolitana Tepic",
    icono: "🏙️",
    color: "#7c3aed",
    colorSecundario: "#a78bfa",
    descripcion: "Capital del estado, centro político, administrativo y comercial. Sede de la coordinación estatal de emergencias.",
    poblacion: "450,000+ habitantes",
    municipios: ["Tepic", "Xalisco"],
    riesgos: ["Incendios estructurales", "Inundaciones urbanas", "Incendios forestales cerro San Juan"],
    caracteristicas: ["Centro administrativo", "Universidad Autónoma de Nayarit", "Hospital Regional", "Zona industrial"],
    serviciosEspeciales: ["HAZMAT Nivel II", "Coordinación estatal", "Academia de bomberos"],
    tiempoRespuestaPromedio: "5-8 minutos"
  },
  {
    id: "riviera-sur",
    nombre: "Riviera Nayarit Sur",
    icono: "🏖️",
    color: "#0891b2",
    colorSecundario: "#22d3ee",
    descripcion: "Destino turístico de clase mundial. Nuevo Vallarta, Bucerías, Punta de Mita. Resorts de ultra lujo y turismo internacional.",
    poblacion: "80,000 residentes + 500,000+ turistas temporada alta",
    municipios: ["Bahía de Banderas (sur)"],
    riesgos: ["Huracanes Cat. 5", "Tsunami", "Rescate oceánico", "Incendios hoteleros", "Emergencias masivas"],
    caracteristicas: ["Four Seasons", "St. Regis", "W Hotel", "Aeropuerto Internacional", "3M+ turistas/año"],
    serviciosEspeciales: ["Rescate acuático oceánico", "ARFF aeroportuario", "Evacuación VIP", "Emergencias hoteleras"],
    tiempoRespuestaPromedio: "5-12 minutos",
    idiomasServicio: ["Español", "English"]
  },
  {
    id: "riviera-norte",
    nombre: "Riviera Nayarit Norte",
    icono: "🏄",
    color: "#f59e0b",
    colorSecundario: "#fbbf24",
    descripcion: "Sayulita (Pueblo Mágico), San Pancho, Guayabitos. Capital del surf en México, turismo alternativo y bohemio.",
    poblacion: "25,000 residentes + 600,000+ visitantes/año",
    municipios: ["Bahía de Banderas (norte)", "Compostela (costa)"],
    riesgos: ["Rescate de surfistas", "Ahogamientos", "Huracanes", "Eventos masivos"],
    caracteristicas: ["Pueblo Mágico Sayulita", "Surf profesional", "Turismo bohemio internacional", "Festival Sayulita"],
    serviciosEspeciales: ["Surf rescue", "Rescate acuático", "Eventos masivos"],
    tiempoRespuestaPromedio: "5-15 minutos"
  },
  {
    id: "san-blas",
    nombre: "Zona Histórica San Blas",
    icono: "🐊",
    color: "#16a34a",
    colorSecundario: "#4ade80",
    descripcion: "Puerto colonial histórico, manglares La Tovara, ecoturismo. Reserva de cocodrilos y aves migratorias.",
    poblacion: "45,000 habitantes",
    municipios: ["San Blas"],
    riesgos: ["Cocodrilos en zonas urbanas", "Huracanes", "Rescate en manglares", "Incendios forestales"],
    caracteristicas: ["Puerto histórico", "Manglares La Tovara", "Patrimonio colonial", "Ecoturismo"],
    serviciosEspeciales: ["Rescate en manglares", "Emergencias con fauna", "Protección patrimonial"],
    tiempoRespuestaPromedio: "5-20 minutos"
  },
  {
    id: "llanura-norte",
    nombre: "Llanura Costera Norte",
    icono: "🌾",
    color: "#ca8a04",
    colorSecundario: "#facc15",
    descripcion: "Zona agrícola, Santiago Ixcuintla, Marismas Nacionales. Mexcaltitán (Venecia Mexicana), producción tabacalera.",
    poblacion: "120,000 habitantes",
    municipios: ["Santiago Ixcuintla", "Tuxpan", "Ruiz"],
    riesgos: ["Inundaciones", "Huracanes", "Incendios agrícolas", "Rescate en humedales"],
    caracteristicas: ["Marismas Nacionales RAMSAR", "Mexcaltitán", "Tabaco", "Pesca"],
    serviciosEspeciales: ["Rescate en humedales", "Emergencias agrícolas", "Evacuación islas"],
    tiempoRespuestaPromedio: "5-25 minutos"
  },
  {
    id: "sierra",
    nombre: "Sierra del Nayar",
    icono: "🌋",
    color: "#dc2626",
    colorSecundario: "#f87171",
    descripcion: "Zona montañosa, volcán Ceboruco, comunidades Wixárikas. Cultura indígena viva, sitios ceremoniales sagrados.",
    poblacion: "80,000 habitantes",
    municipios: ["Compostela", "Ixtlán del Río", "Jala", "Del Nayar", "La Yesca", "Huajicori"],
    riesgos: ["Emergencias volcánicas", "Incendios forestales críticos", "Difícil acceso", "Deslaves temporada lluvias"],
    caracteristicas: ["Volcán Ceboruco activo", "Comunidades Wixárikas", "Zona arqueológica Los Toriles", "Pueblo Mágico Jala"],
    serviciosEspeciales: ["Monitoreo volcánico", "Rescate montaña", "Coordinación comunidades indígenas"],
    tiempoRespuestaPromedio: "10-40 minutos según ubicación"
  },
  {
    id: "corredor-sur",
    nombre: "Corredor Industrial Sur",
    icono: "🚗",
    color: "#1e40af",
    colorSecundario: "#3b82f6",
    descripcion: "Corredor carretero Tepic-Puerto Vallarta, desarrollo turístico en expansión, zona de transición.",
    poblacion: "35,000 habitantes",
    municipios: ["Compostela (interior)"],
    riesgos: ["Accidentes carreteros", "Incendios forestales", "Fauna silvestre en carretera"],
    caracteristicas: ["Carretera 200", "Desarrollo turístico", "Zona agrícola"],
    serviciosEspeciales: ["Rescate carretero", "Atención accidentes turísticos"],
    tiempoRespuestaPromedio: "8-20 minutos"
  }
];
const ALERTAS_NAYARIT = {
  huracanes: {
    telefonoEvacuacion: "(329) 291-0909"}};
function getEstacionesRivieraNayarit() {
  return estacionesNayarit.filter(
    (e) => e.zona?.includes("Riviera Nayarit")
  );
}
function getEstacionesRescateAcuatico() {
  return estacionesNayarit.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("acuático") || esp.toLowerCase().includes("oceánico") || esp.toLowerCase().includes("surf")
    ) || e.servicios.some(
      (s) => s.toLowerCase().includes("acuático") || s.toLowerCase().includes("oceánico") || s.toLowerCase().includes("surf")
    )
  );
}
function getEstacionesARFF() {
  return estacionesNayarit.filter(
    (e) => e.especialidades?.some((esp) => esp.toLowerCase().includes("arff"))
  );
}
function getEstacionesTuristicas() {
  return estacionesNayarit.filter(
    (e) => e.especialidades?.some(
      (esp) => esp.toLowerCase().includes("turismo") || esp.toLowerCase().includes("hotelera") || esp.toLowerCase().includes("pueblo mágico")
    ) || e.zona?.includes("Riviera") || e.servicios.some(
      (s) => s.toLowerCase().includes("turismo") || s.toLowerCase().includes("hotel") || s.toLowerCase().includes("resort")
    )
  );
}
function generarSchemaEstacion(estacion) {
  const esZonaTuristica = estacion.zona?.includes("Riviera") || estacion.ciudad === "Bahía de Banderas";
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "@id": `https://bombero.mx/directorio/nayarit/${estacion.slug}`,
    "name": estacion.nombre,
    "alternateName": esZonaTuristica ? `Fire Department ${estacion.ciudad}` : void 0,
    "description": estacion.historia || `Estación de bomberos en ${estacion.ciudad}, Nayarit. Servicios de emergencia 24/7.`,
    "url": `https://bombero.mx/directorio/nayarit/${estacion.slug}`,
    "telephone": estacion.telefono,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Nayarit",
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
    "availableLanguage": esZonaTuristica ? ["Spanish", "English"] : ["Spanish"],
    "parentOrganization": {
      "@type": "GovernmentOrganization",
      "name": estacion.comandancia || "Sistema Estatal de Bomberos de Nayarit",
      "areaServed": "Estado de Nayarit, México"
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `tel:${estacion.telefono.replace(/\D/g, "")}`,
        "actionPlatform": ["http://schema.org/TelephoneEntryPoint"]
      }
    },
    ...esZonaTuristica && {
      "touristType": "International Tourist",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Bilingual Staff" },
        { "@type": "LocationFeatureSpecification", "name": "Ocean Rescue" },
        { "@type": "LocationFeatureSpecification", "name": "Hurricane Evacuation" }
      ]
    }
  };
}
function getMunicipios() {
  return [...new Set(estacionesNayarit.map((e) => e.ciudad))].filter(Boolean).sort();
}
({
  totalEstaciones: estacionesNayarit.length,
  estacionesRiviera: getEstacionesRivieraNayarit().length,
  estacionesRescateAcuatico: getEstacionesRescateAcuatico().length,
  estacionesARFF: getEstacionesARFF().length,
  estacionesTuristicas: getEstacionesTuristicas().length});

export { ALERTAS_NAYARIT as A, NAYARIT_SEO as N, ZONAS_NAYARIT as Z, getMunicipios as a, estacionesNayarit as e, generarSchemaEstacion as g };
