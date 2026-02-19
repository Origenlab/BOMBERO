const estacionesYucatan = [
  {
    id: "yuc-merida-central",
    slug: "yuc-merida-central",
    estado: "Yucatán",
    nombre: "Cuartel Central de Bomberos de Mérida",
    nombreCorto: "Cuartel Central Mérida",
    direccion: "Calle 60 No. 474 x 53 y 55",
    colonia: "Centro Histórico",
    codigoPostal: "97000",
    municipio: "Mérida",
    ciudad: "Mérida",
    telefono: "999 924 9242",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Cuartel Central del H. Cuerpo de Bomberos de Mérida, hub de coordinación regional para el sureste de México. Protege el Centro Histórico de Mérida y la Zona Metropolitana con 1.2 millones de habitantes.",
    servicios: [
      "Incendios estructurales e industriales",
      "Rescate vehicular y excarcelación",
      "Materiales peligrosos (HAZMAT)",
      "Rescate acuático y en cenotes",
      "Rescate en alturas y estructuras colapsadas",
      "Servicio prehospitalario de emergencias",
      "Control de fugas de gas LP e industrial",
      "Emergencias en eventos masivos",
      "Protección de patrimonio histórico"
    ],
    especialidades: [
      "Centro de mando y coordinación estatal CECOM Yucatán",
      "Protocolo de emergencias en Zona de Monumentos Históricos",
      "Hub de coordinación regional sureste de México",
      "Centro de capacitación regional del sureste mexicano"
    ],
    personalActivo: 90,
    tiempoRespuesta: "4-6 minutos",
    coordenadas: { lat: 20.9674, lng: -89.6237 }
  },
  {
    id: "yuc-merida-norte",
    slug: "yuc-merida-norte",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Mérida Norte",
    nombreCorto: "Estación Norte Mérida",
    direccion: "Av. Prolongación Montejo No. 451",
    colonia: "Altabrisa",
    codigoPostal: "97130",
    municipio: "Mérida",
    ciudad: "Mérida",
    telefono: "999 944 1155",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación Norte de Mérida cubriendo Altabrisa, Gran Plaza, Lagunas de Miralta y la zona hospitalaria privada más importante del sureste mexicano.",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Emergencias en centros comerciales",
      "Primeros auxilios avanzados",
      "Control de fugas de gas",
      "Rescate en alturas"
    ],
    especialidades: [
      "Emergencias en hospitales y clínicas privadas",
      "Rescate en centros comerciales y plazas",
      "Zona hotelera y de convenciones"
    ],
    personalActivo: 55,
    tiempoRespuesta: "5-7 minutos",
    coordenadas: { lat: 21.0124, lng: -89.6073 }
  },
  {
    id: "yuc-merida-oriente-aeropuerto",
    slug: "yuc-merida-oriente-aeropuerto",
    estado: "Yucatán",
    nombre: "Estación Bomberos Mérida Oriente — ARFF Aeropuerto",
    nombreCorto: "Bomberos Aeropuerto Mérida",
    direccion: "Av. Itzaes No. 700",
    colonia: "Mérida",
    codigoPostal: "97150",
    municipio: "Mérida",
    ciudad: "Mérida",
    telefono: "999 946 1530",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación especializada en ARFF para el Aeropuerto Internacional de Mérida Manuel Crescencio Rejón, categorizado ICAO Cat. 7. Atiende vuelos nacionales e internacionales con aeronaves de largo alcance.",
    servicios: [
      "ARFF: Aircraft Rescue and Fire Fighting Cat. 7 ICAO",
      "Incendios en aeronaves comerciales",
      "Rescate de pasajeros en emergencias aéreas",
      "HAZMAT: combustible de aviación (Jet-A, Avgas)",
      "Incendios estructurales perímetro aeroportuario",
      "Emergencias médicas en área aeroportuaria"
    ],
    especialidades: [
      "ARFF certificado ICAO Cat. 7 — largo alcance",
      "Espuma AFFF para incendios de combustible de aviación",
      "Coordinación ATC y AFAC para emergencias aéreas",
      "Aeropuerto Manuel Crescencio Rejón: 3M pasajeros por año"
    ],
    personalActivo: 45,
    tiempoRespuesta: "3-5 minutos (zona aeroportuaria)",
    coordenadas: { lat: 20.9379, lng: -89.6577 }
  },
  {
    id: "yuc-merida-poniente-industrial",
    slug: "yuc-merida-poniente-industrial",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Mérida Poniente — Corredor Industrial",
    nombreCorto: "Bomberos Industrial Mérida",
    direccion: "Av. de la Industria No. 280",
    colonia: "Parque Industrial",
    codigoPostal: "97280",
    municipio: "Mérida",
    ciudad: "Mérida",
    telefono: "999 938 2214",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación especializada para emergencias industriales en el Corredor Industrial Mérida-Umán. Cubre LaFarge-Holcim, Grupo Bimbo, FEMSA y más de 200 empresas manufactureras.",
    servicios: [
      "Incendios industriales y de proceso",
      "HAZMAT industrial: químicos, gases, inflamables",
      "Control de derrames y confinamiento",
      "Rescate en espacios confinados industriales",
      "Incendios en instalaciones de manufactura",
      "Emergencias en plantas de tratamiento",
      "Brigadas de primera respuesta HAZMAT"
    ],
    especialidades: [
      "HAZMAT nivel 3: industria de cemento, alimentos y bebidas",
      "Parque Industrial Mérida: 200 empresas incluyendo LaFarge-Holcim, Bimbo, FEMSA",
      "Corredor nearshoring sureste de México",
      "Apoyo mutuo con brigadas internas industriales"
    ],
    personalActivo: 50,
    tiempoRespuesta: "5-8 minutos",
    coordenadas: { lat: 20.928, lng: -89.721 }
  },
  {
    id: "yuc-merida-sur",
    slug: "yuc-merida-sur",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Mérida Sur",
    nombreCorto: "Estación Sur Mérida",
    direccion: "Av. Jacinto Canek No. 150",
    colonia: "Sambula",
    codigoPostal: "97240",
    municipio: "Mérida",
    ciudad: "Mérida",
    telefono: "999 987 3320",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación Sur de Mérida cubriendo colonias populares del sur y poniente de la ciudad, incluyendo Ciudad Caucel y zonas de alta densidad habitacional.",
    servicios: [
      "Incendios estructurales y habitacionales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Primeros auxilios avanzados",
      "Emergencias prehospitalarias"
    ],
    especialidades: [
      "Zona sur y poniente de la ZM Mérida",
      "Alta densidad habitacional: colonias populares",
      "Apoyo al corredor industrial poniente"
    ],
    personalActivo: 40,
    tiempoRespuesta: "6-9 minutos",
    coordenadas: { lat: 20.9205, lng: -89.645 }
  },
  {
    id: "yuc-kanasín",
    slug: "yuc-kanasín",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Kanasín",
    nombreCorto: "Bomberos Kanasín",
    direccion: "Calle 24 No. 180",
    colonia: "Centro",
    codigoPostal: "97370",
    municipio: "Kanasín",
    ciudad: "Kanasín",
    telefono: "999 988 1240",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Kanasín, municipio conurbado oriente de la ZM Mérida con 100,000 habitantes. Cubre la salida Cancún-Mérida y zonas industriales del oriente metropolitano.",
    servicios: [
      "Incendios estructurales y vehiculares",
      "Rescate en accidentes carreteros",
      "Control de fugas de gas",
      "Emergencias prehospitalarias",
      "Protección civil ante inundaciones"
    ],
    especialidades: [
      "ZM Mérida zona oriente: alta densidad",
      "Carretera federal Mérida-Cancún: alto tránsito",
      "Coordinación con municipios metropolitanos"
    ],
    personalActivo: 35,
    tiempoRespuesta: "6-10 minutos",
    coordenadas: { lat: 20.9374, lng: -89.5598 }
  },
  {
    id: "yuc-uman",
    slug: "yuc-uman",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Umán",
    nombreCorto: "Bomberos Umán",
    direccion: "Calle 26 No. 90",
    colonia: "Centro",
    codigoPostal: "97340",
    municipio: "Umán",
    ciudad: "Umán",
    telefono: "999 912 0867",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Umán, municipio conurbado sur-poniente de la ZM Mérida. Cubre el Parque Industrial Umán (LaFarge-Holcim) y el corredor carretero Mérida-Campeche.",
    servicios: [
      "Incendios industriales (cemento, químicos)",
      "HAZMAT: cementera LaFarge-Holcim",
      "Rescate vehicular en corredor Mérida-Campeche",
      "Incendios estructurales",
      "Control de fugas de gas"
    ],
    especialidades: [
      "Planta LaFarge-Holcim: cemento y materiales peligrosos",
      "ZM Mérida zona sur-poniente",
      "Corredor Mérida-Campeche: carretera federal 261"
    ],
    personalActivo: 30,
    tiempoRespuesta: "7-11 minutos",
    coordenadas: { lat: 20.886, lng: -89.757 }
  },
  {
    id: "yuc-progreso",
    slug: "yuc-progreso",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Progreso — Puerto de Altura",
    nombreCorto: "Bomberos Puerto Progreso",
    direccion: "Calle 72 No. 136 x 29",
    colonia: "Centro",
    codigoPostal: "97320",
    municipio: "Progreso",
    ciudad: "Progreso",
    telefono: "969 935 0071",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación especializada en emergencias portuarias del Puerto de Progreso, el muelle más largo del mundo con 6.5 km. Atiende 150 cruceros internacionales por año y operaciones de carga a granel.",
    servicios: [
      "Emergencias en cruceros internacionales",
      "Incendios en embarcaciones y muelles",
      "HAZMAT marítimo: combustibles MARPOL",
      "Rescate acuático costero",
      "Incendios en instalaciones portuarias",
      "Emergencias en pesca industrial",
      "Coordinación con Capitanía de Puerto SEMAR"
    ],
    especialidades: [
      "Puerto de Progreso: muelle más largo del mundo 6.5 km",
      "150 cruceros internacionales por año — protocolo IMO/OMI",
      "HAZMAT marítimo: combustibles bunker, gasolina marina",
      "Coordinación SEMAR y Capitanía de Puerto"
    ],
    personalActivo: 40,
    tiempoRespuesta: "5-8 minutos",
    coordenadas: { lat: 21.2854, lng: -89.6631 }
  },
  {
    id: "yuc-valladolid",
    slug: "yuc-valladolid",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Valladolid — Rescate en Cenotes",
    nombreCorto: "Bomberos Valladolid",
    direccion: "Calle 37 No. 200 x 42",
    colonia: "Centro",
    codigoPostal: "97780",
    municipio: "Valladolid",
    ciudad: "Valladolid",
    telefono: "985 856 2023",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación estratégica del oriente de Yucatán, hub para emergencias en Chichén Itzá y cenotes. Única estación en México con certificación en rescate espeleoacuático en cenotes.",
    servicios: [
      "Rescate espeleoacuático en cenotes y sistemas kársticos",
      "Emergencias en zona arqueológica Chichén Itzá",
      "Incendios estructurales en zona colonial",
      "Rescate vehicular en corredor Mérida-Cancún",
      "Emergencias en cenotes turísticos",
      "Control de fugas de gas",
      "Emergencias prehospitalarias"
    ],
    especialidades: [
      "Rescate espeleoacuático certificado en cenotes",
      "Hub oriente: Chichén Itzá, Ek Balam, cenotes",
      "Única estación con buceo subterráneo kárstico",
      "Protección turístico-arqueológica corredor Ruta Puuc"
    ],
    personalActivo: 35,
    tiempoRespuesta: "6-10 minutos",
    coordenadas: { lat: 20.69, lng: -88.2023 }
  },
  {
    id: "yuc-chichen-itza",
    slug: "yuc-chichen-itza",
    estado: "Yucatán",
    nombre: "Unidad de Bomberos Tinum — Chichén Itzá",
    nombreCorto: "Bomberos Chichén Itzá",
    direccion: "Carretera Mérida-Cancún Km 120",
    colonia: "Tinum",
    codigoPostal: "97751",
    municipio: "Tinum",
    ciudad: "Tinum",
    telefono: "985 851 0129",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Unidad de respuesta especializada en Chichén Itzá, Maravilla del Mundo Moderno con 5 millones de turistas anuales. Protocolos ICOMOS para evacuación masiva durante equinoccios.",
    servicios: [
      "Emergencias en zona arqueológica UNESCO",
      "Evacuación masiva de visitantes",
      "Incendios en instalaciones turísticas",
      "Emergencias prehospitalarias en turistas",
      "Rescate en terreno cálizo y cenotes cercanos",
      "Coordinación INAH y Policía Federal Turística"
    ],
    especialidades: [
      "Protocolo ICOMOS: evacuación Chichén Itzá 5M turistas por año",
      "Equinoccios: protocolo especial 40,000 visitantes por día",
      "Coordinación con INAH para protección patrimonio UNESCO",
      "Respuesta 3-5 minutos dentro de zona arqueológica"
    ],
    personalActivo: 25,
    tiempoRespuesta: "3-5 minutos",
    coordenadas: { lat: 20.6829, lng: -88.5686 }
  },
  {
    id: "yuc-tizimin",
    slug: "yuc-tizimin",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Tizimín",
    nombreCorto: "Bomberos Tizimín",
    direccion: "Calle 47 No. 310",
    colonia: "Centro",
    codigoPostal: "97700",
    municipio: "Tizimín",
    ciudad: "Tizimín",
    telefono: "986 863 2156",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación del norte-oriente de Yucatán, centro ganadero con acceso a la Reserva de la Biósfera Ría Lagartos. Cubre el corredor ganadero y zonas rurales del noreste yucateco.",
    servicios: [
      "Incendios estructurales y agrícolas",
      "Rescate vehicular en carreteras del noreste",
      "Emergencias agropecuarias y ganaderas",
      "Rescate acuático en Ría Lagartos",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Corredor ganadero norte-oriente Yucatán",
      "Apoyo a Reserva Biósfera Ría Lagartos",
      "Emergencias en zonas rurales de difícil acceso"
    ],
    personalActivo: 30,
    tiempoRespuesta: "8-12 minutos",
    coordenadas: { lat: 21.143, lng: -88.1645 }
  },
  {
    id: "yuc-izamal",
    slug: "yuc-izamal",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Izamal",
    nombreCorto: "Bomberos Izamal",
    direccion: "Calle 28 No. 301",
    colonia: "Centro",
    codigoPostal: "97540",
    municipio: "Izamal",
    ciudad: "Izamal",
    telefono: "988 954 0234",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de la Ciudad Amarilla, Pueblo Mágico y Ciudad Sagrada de los Mayas. Cubre la zona arqueológica y el convento franciscano del siglo XVI.",
    servicios: [
      "Protección de patrimonio histórico-colonial",
      "Incendios estructurales en zona colonial",
      "Emergencias en eventos religiosos masivos",
      "Rescate vehicular",
      "Control de fugas de gas"
    ],
    especialidades: [
      "Pueblo Mágico: Ciudad Sagrada Maya",
      "Convento franciscano siglo XVI y pirámides mayas",
      "Emergencias en eventos religiosos masivos"
    ],
    personalActivo: 25,
    tiempoRespuesta: "7-10 minutos",
    coordenadas: { lat: 20.9297, lng: -89.0182 }
  },
  {
    id: "yuc-motul",
    slug: "yuc-motul",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Motul",
    nombreCorto: "Bomberos Motul",
    direccion: "Calle 15 No. 128",
    colonia: "Centro",
    codigoPostal: "97430",
    municipio: "Motul",
    ciudad: "Motul",
    telefono: "991 910 0089",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Motul, centro agrícola y pecuario del corredor norte entre Mérida y Tizimín.",
    servicios: [
      "Incendios estructurales y agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Corredor norte Mérida-Tizimín",
      "Zona agrícola y pecuaria norte de Yucatán"
    ],
    personalActivo: 20,
    tiempoRespuesta: "8-13 minutos",
    coordenadas: { lat: 21.096, lng: -89.2863 }
  },
  {
    id: "yuc-ticul",
    slug: "yuc-ticul",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Ticul",
    nombreCorto: "Bomberos Ticul",
    direccion: "Calle 26 No. 215",
    colonia: "Centro",
    codigoPostal: "97860",
    municipio: "Ticul",
    ciudad: "Ticul",
    telefono: "997 972 0445",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Ticul, capital de la Ruta Puuc. Acceso a las zonas arqueológicas Uxmal, Kabah, Sayil y Labná.",
    servicios: [
      "Incendios estructurales y arqueológicos",
      "Emergencias en zonas rurales sur de Yucatán",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Acceso a Ruta Puuc: Uxmal UNESCO, Kabah, Sayil",
      "Sur de Yucatán: corredor Ruta Puuc"
    ],
    personalActivo: 25,
    tiempoRespuesta: "8-13 minutos",
    coordenadas: { lat: 20.393, lng: -89.5296 }
  },
  {
    id: "yuc-oxkutzcab",
    slug: "yuc-oxkutzcab",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Oxkutzcab",
    nombreCorto: "Bomberos Oxkutzcab",
    direccion: "Calle 51 No. 100",
    colonia: "Centro",
    codigoPostal: "97880",
    municipio: "Oxkutzcab",
    ciudad: "Oxkutzcab",
    telefono: "997 975 0167",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Oxkutzcab, municipio fruticultor del sur de Yucatán y puerta de la Sierra Puuc.",
    servicios: [
      "Incendios forestales sur de Yucatán",
      "Emergencias en zonas agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Sierra Puuc: incendios forestales",
      "Zona fruticultura: naranjos, ciruelas, cítricos"
    ],
    personalActivo: 20,
    tiempoRespuesta: "9-14 minutos",
    coordenadas: { lat: 20.3069, lng: -89.4158 }
  },
  {
    id: "yuc-tekax",
    slug: "yuc-tekax",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Tekax",
    nombreCorto: "Bomberos Tekax",
    direccion: "Calle 47 No. 200",
    colonia: "Centro",
    codigoPostal: "97970",
    municipio: "Tekax",
    ciudad: "Tekax",
    telefono: "997 974 0230",
    telefonoEmergencia: "911",
    horario: "24 horas / 365 días",
    descripcion: "Estación de Tekax, municipio más extenso de Yucatán. Cubre extensas zonas forestales de la selva maya y el corredor rural sur, frontera con Campeche.",
    servicios: [
      "Incendios forestales en selva maya",
      "Emergencias en comunidades rurales remotas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Municipio más extenso de Yucatán: alto tiempo de respuesta",
      "Selva maya sur: incendios forestales de estiaje",
      "Frontera Yucatán-Campeche"
    ],
    personalActivo: 20,
    tiempoRespuesta: "10-18 minutos",
    coordenadas: { lat: 20.1969, lng: -89.2863 }
  },
  // ─── CELESTÚN (Reserva Biósfera — Costa Oeste) ──────────────────────────────────────
  {
    id: "yuc-celestun",
    slug: "yuc-celestun",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Celestún — Reserva Biósfera",
    nombreCorto: "Bomberos Celestún",
    direccion: "Calle 12 No. 99",
    colonia: "Centro",
    codigoPostal: "97367",
    municipio: "Celestún",
    ciudad: "Celestún",
    telefono: "988 916 0012",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en estuarios y humedales",
      "Incendios en manglares y zonas costeras",
      "Emergencias en embarcaciones pesqueras",
      "Coordinación SEMARNAT Reserva Biósfera",
      "Rescate en zonas inundadas por huracanes",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Reserva Biósfera Ría Celestún UNESCO: flamingos y humedales",
      "Rescate acuático en estuarios costeros",
      "Incendios en manglares: técnica especial",
      "Protocolo huracanes costa oeste de Yucatán"
    ],
    horario: "24 horas / 365 días",
    coordenadas: { lat: 20.8614, lng: -90.399 },
    descripcion: "Estación en la Reserva de la Biósfera Ría Celestún (UNESCO), hogar del mayor flamenco rosado de Norteamérica. Atiende emergencias en humedales costeros y manglares del Golfo de México.",
    zonasCobertura: ["Centro de Celestún", "Zona de Playa", "Ría y Estero", "Reserva Biósfera"],
    tiempoRespuesta: "10-15 minutos",
    personal: 20,
    personalActivo: 20,
    unidades: 3,
    unidadesDisponibles: ["Autobomba forestal ×1", "Unidad de rescate acuático ×1", "Ambulancia ×1"]
  },
  // ─── RÍO LAGARTOS (Reserva Biósfera — Costa Norte) ──────────────────────────────────────
  {
    id: "yuc-rio-lagartos",
    slug: "yuc-rio-lagartos",
    estado: "Yucatán",
    nombre: "Estación de Bomberos Río Lagartos — Reserva Biósfera",
    nombreCorto: "Bomberos Río Lagartos",
    direccion: "Calle 14 No. 51",
    colonia: "Centro",
    codigoPostal: "97777",
    municipio: "Río Lagartos",
    ciudad: "Río Lagartos",
    telefono: "986 862 0028",
    telefonoEmergencia: "911",
    servicios: [
      "Rescate acuático en ría y litoral costero",
      "Incendios en manglares y humedales RAMSAR",
      "Emergencias en embarcaciones pesqueras",
      "Coordinación CONANP Reserva Biósfera",
      "Rescate en inundaciones costeras",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Reserva Biósfera Ría Lagartos UNESCO/RAMSAR",
      "Flamingos: protocolo especial de protección",
      "Las Coloradas: turismo fotográfico emergente",
      "Protocolo huracanes costa norte de Yucatán"
    ],
    horario: "24 horas / 365 días",
    coordenadas: { lat: 21.594, lng: -88.166 },
    descripcion: "Estación en la Reserva de la Biósfera Ría Lagartos (UNESCO/RAMSAR), la mayor colonia de flamenco rosado de México. Cubre la costa norte de Yucatán y Las Coloradas.",
    zonasCobertura: ["Centro de Río Lagartos", "Ría Lagartos", "Las Coloradas", "San Felipe", "Costa Norte"],
    tiempoRespuesta: "10-18 minutos",
    personal: 20,
    personalActivo: 20,
    unidades: 3,
    unidadesDisponibles: ["Autobomba forestal ×1", "Unidad de rescate acuático ×1", "Ambulancia ×1"]
  }
];
function getEstacionBySlug(slug) {
  return estacionesYucatan.find((e) => e.slug === slug);
}
function getMunicipios() {
  return [...new Set(estacionesYucatan.map((e) => e.municipio))];
}
function getEstacionesCercanas(slug, limit = 3) {
  return estacionesYucatan.filter((e) => e.slug !== slug).slice(0, limit);
}

export { getEstacionesCercanas as a, getMunicipios as b, estacionesYucatan as e, getEstacionBySlug as g };
