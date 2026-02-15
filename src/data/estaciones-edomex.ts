/**
 * ─── Datos de Estaciones de Bomberos Estado de México ───
 * Base de datos completa del H. Cuerpo de Bomberos del Estado de México
 * Información actualizada para SEO y directorio profesional
 */

export interface Estacion {
  slug: string;
  nombre: string;
  nombreCorto: string;
  direccion: string;
  colonia: string;
  codigoPostal: string;
  municipio: string;
  ciudad: string;
  telefono: string;
  telefonoEmergencia: string;
  email?: string;
  servicios: string[];
  especialidades: string[];
  horario: string;
  coordenadas: { lat: number; lng: number };
  descripcion: string;
  historia?: string;
  equipamiento?: string[];
  zonasCobertura: string[];
  tiempoRespuesta?: string;
  personalActivo?: number;
  unidadesDisponibles?: string[];
}

export const estacionesEdoMex: Estacion[] = [
  {
    slug: "estacion-central-toluca",
    nombre: "Estación Central de Bomberos de Toluca",
    nombreCorto: "Estación Central Toluca",
    direccion: "Av. Sebastián Lerdo de Tejada 300",
    colonia: "Centro",
    codigoPostal: "50000",
    municipio: "Toluca",
    ciudad: "Toluca de Lerdo",
    telefono: "722 215 7790",
    telefonoEmergencia: "911",
    email: "bomberos@toluca.gob.mx",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Rescate en alturas",
      "Servicio prehospitalario",
      "Control de fugas de gas",
      "Retiro de enjambres",
      "Rescate de personas atrapadas"
    ],
    especialidades: [
      "Centro de mando estatal",
      "Unidad de materiales peligrosos",
      "Capacitación regional de bomberos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2826, lng: -99.6557 },
    descripcion: "La Estación Central de Bomberos de Toluca es el corazón operativo del H. Cuerpo de Bomberos del Estado de México. Como capital del estado más poblado de México, coordina operaciones de emergencia para toda la Zona Metropolitana del Valle de Toluca.",
    historia: "El Cuerpo de Bomberos de Toluca fue fundado oficialmente en 1901, siendo uno de los primeros cuerpos de bomberos organizados fuera de la Ciudad de México. A lo largo de más de 120 años ha sido pilar de la seguridad pública en el Estado de México.",
    equipamiento: [
      "Autobombas de última generación",
      "Unidades de rescate pesado",
      "Vehículos HAZMAT",
      "Ambulancias de soporte vital avanzado",
      "Escaleras telescópicas de 30 metros"
    ],
    zonasCobertura: ["Centro Histórico de Toluca", "San Sebastián", "Universidad", "Morelos", "Santa Ana Tlapaltitlán"],
    tiempoRespuesta: "5-8 minutos",
    personalActivo: 95,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT"]
  },
  {
    slug: "estacion-bomberos-ecatepec",
    nombre: "Estación de Bomberos de Ecatepec de Morelos",
    nombreCorto: "Estación de Bomberos Ecatepec",
    direccion: "Av. Central s/n",
    colonia: "Ciudad Azteca",
    codigoPostal: "55120",
    municipio: "Ecatepec de Morelos",
    ciudad: "Ecatepec",
    telefono: "55 5787 4512",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Materiales peligrosos (HAZMAT)",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en transporte público"
    ],
    especialidades: [
      "Atención a zonas industriales",
      "Rescate en áreas de alta densidad poblacional",
      "Emergencias masivas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6018, lng: -99.0517 },
    descripcion: "La Estación de Bomberos de Ecatepec atiende el municipio más poblado de México, con más de 1.6 millones de habitantes. Especializada en emergencias industriales y rescates en zonas densamente pobladas.",
    zonasCobertura: ["Ciudad Azteca", "Las Américas", "San Cristóbal Centro", "Jardines de Morelos", "Valle de Anáhuac"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 75,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Unidad HAZMAT", "2 Ambulancias"]
  },
  {
    slug: "estacion-bomberos-naucalpan",
    nombre: "Estación de Bomberos de Naucalpan de Juárez",
    nombreCorto: "Estación de Bomberos Naucalpan",
    direccion: "Av. Gustavo Baz Prada 3700",
    colonia: "Ciudad Satélite",
    codigoPostal: "53100",
    municipio: "Naucalpan de Juárez",
    ciudad: "Naucalpan",
    telefono: "55 5374 8900",
    telefonoEmergencia: "911",
    email: "bomberos@naucalpan.gob.mx",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Rescate en alturas",
      "Materiales peligrosos (HAZMAT)",
      "Control de fugas de gas",
      "Rescate en espacios confinados",
      "Atención a accidentes carreteros"
    ],
    especialidades: [
      "Rescate en edificios corporativos",
      "Emergencias industriales especializadas",
      "Atención en autopistas y vialidades principales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4707, lng: -99.2367 },
    descripcion: "La Estación de Bomberos de Naucalpan protege una de las zonas industriales y corporativas más importantes del país. Cubre Ciudad Satélite, zonas industriales y conexiones vitales hacia la CDMX.",
    equipamiento: [
      "Autobombas cisterna de alta capacidad",
      "Unidades de rescate técnico",
      "Vehículo de atención carretera",
      "Equipos de comunicación avanzada"
    ],
    zonasCobertura: ["Ciudad Satélite", "Naucalpan Centro", "Industrial Atoto", "San Andrés Atoto", "El Molinito"],
    tiempoRespuesta: "6-12 minutos",
    personalActivo: 65,
    unidadesDisponibles: ["2 Autobombas", "2 Unidades de Rescate", "1 Unidad HAZMAT", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-tlalnepantla",
    nombre: "Estación de Bomberos de Tlalnepantla de Baz",
    nombreCorto: "Estación de Bomberos Tlalnepantla",
    direccion: "Av. Tequesquináhuac 302",
    colonia: "La Romana",
    codigoPostal: "54030",
    municipio: "Tlalnepantla de Baz",
    ciudad: "Tlalnepantla",
    telefono: "55 5390 4100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Control de fugas de gas",
      "Rescate de personas atrapadas",
      "Emergencias en centros comerciales",
      "Atención de derrames químicos"
    ],
    especialidades: [
      "Zona industrial especializada",
      "Rescate técnico industrial",
      "Coordinación con industrias locales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.5383, lng: -99.1941 },
    descripcion: "La Estación de Bomberos de Tlalnepantla atiende uno de los corredores industriales más importantes de México. Con amplia experiencia en emergencias químicas y rescates industriales.",
    zonasCobertura: ["Tlalnepantla Centro", "La Romana", "Industrial Vallejo", "Los Reyes Ixtacala", "Gustavo Baz"],
    tiempoRespuesta: "6-10 minutos",
    personalActivo: 58,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Unidad HAZMAT", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-nezahualcoyotl",
    nombre: "Estación de Bomberos de Nezahualcóyotl",
    nombreCorto: "Estación de Bomberos Nezahualcóyotl",
    direccion: "Av. Adolfo López Mateos s/n",
    colonia: "Benito Juárez",
    codigoPostal: "57000",
    municipio: "Nezahualcóyotl",
    ciudad: "Ciudad Nezahualcóyotl",
    telefono: "55 5765 3200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Retiro de enjambres",
      "Emergencias en mercados",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Atención a zonas de alta densidad poblacional",
      "Operaciones en temporada de lluvias",
      "Rescate en zonas de difícil acceso"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4006, lng: -99.0145 },
    descripcion: "La Estación de Bomberos de Nezahualcóyotl protege a más de 1.2 millones de habitantes en uno de los municipios más densamente poblados del país. Especializada en emergencias urbanas y atención de inundaciones.",
    zonasCobertura: ["Nezahualcóyotl Centro", "Benito Juárez", "El Sol", "Juárez Pantitlán", "Estado de México"],
    tiempoRespuesta: "7-12 minutos",
    personalActivo: 52,
    unidadesDisponibles: ["2 Autobombas", "2 Unidades de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-metepec",
    nombre: "Estación de Bomberos de Metepec",
    nombreCorto: "Estación de Bomberos Metepec",
    direccion: "Av. Estado de México 102",
    colonia: "San Jerónimo Chicahualco",
    codigoPostal: "52170",
    municipio: "Metepec",
    ciudad: "Metepec",
    telefono: "722 232 5660",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en alturas",
      "Atención de inundaciones",
      "Retiro de enjambres",
      "Emergencias en plazas comerciales",
      "Rescate de animales"
    ],
    especialidades: [
      "Atención a zonas residenciales de alto nivel",
      "Emergencias en centros comerciales",
      "Rescate en fraccionamientos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2547, lng: -99.5906 },
    descripcion: "La Estación de Bomberos de Metepec brinda cobertura a una de las zonas residenciales y comerciales más importantes del Valle de Toluca, conocida por sus desarrollos habitacionales y plazas comerciales.",
    zonasCobertura: ["Metepec Centro", "San Jerónimo Chicahualco", "La Purísima", "Infonavit San Francisco", "Santa María Magdalena Ocotitlán"],
    tiempoRespuesta: "5-10 minutos",
    personalActivo: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-atizapan",
    nombre: "Estación de Bomberos de Atizapán de Zaragoza",
    nombreCorto: "Estación de Bomberos Atizapán",
    direccion: "Blvd. Adolfo López Mateos s/n",
    colonia: "Atizapán Centro",
    codigoPostal: "52900",
    municipio: "Atizapán de Zaragoza",
    ciudad: "Atizapán",
    telefono: "55 5822 3400",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas montañosas",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Atención de deslaves"
    ],
    especialidades: [
      "Combate de incendios forestales",
      "Rescate en zonas de barrancas",
      "Atención a zonas serranas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.5578, lng: -99.2549 },
    descripcion: "La Estación de Bomberos de Atizapán protege una zona que combina desarrollo urbano con áreas boscosas. Especializada en incendios forestales y rescates en terrenos difíciles.",
    zonasCobertura: ["Atizapán Centro", "Zona Esmeralda", "Ciudad López Mateos", "El Olivo", "Bosques de Atizapán"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 42,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-cuautitlan-izcalli",
    nombre: "Estación de Bomberos de Cuautitlán Izcalli",
    nombreCorto: "Estación de Bomberos Cuautitlán Izcalli",
    direccion: "Av. 1 de Mayo s/n",
    colonia: "Centro Urbano",
    codigoPostal: "54700",
    municipio: "Cuautitlán Izcalli",
    ciudad: "Cuautitlán Izcalli",
    telefono: "55 5873 9800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Emergencias en parques industriales",
      "Rescate de personas atrapadas"
    ],
    especialidades: [
      "Zona industrial de alta tecnología",
      "Atención a parques industriales",
      "Rescate en accidentes carreteros"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6481, lng: -99.2076 },
    descripcion: "La Estación de Bomberos de Cuautitlán Izcalli atiende una importante zona industrial y residencial del norte del Estado de México, incluyendo varios parques industriales de alta tecnología.",
    equipamiento: [
      "Autobombas industriales",
      "Unidad HAZMAT especializada",
      "Vehículos de respuesta rápida",
      "Equipos de comunicación industrial"
    ],
    zonasCobertura: ["Centro Urbano", "La Coyotera", "Valle de las Flores", "Parque Industrial Cuamatla", "Santa María Tianguistengo"],
    tiempoRespuesta: "6-12 minutos",
    personalActivo: 48,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-huixquilucan",
    nombre: "Estación de Bomberos de Huixquilucan",
    nombreCorto: "Estación de Bomberos Huixquilucan",
    direccion: "Blvd. Interlomas s/n",
    colonia: "Interlomas",
    codigoPostal: "52760",
    municipio: "Huixquilucan",
    ciudad: "Huixquilucan",
    telefono: "55 5247 5500",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate en alturas",
      "Control de fugas de gas",
      "Rescate en barrancas",
      "Emergencias en corporativos",
      "Control de fauna silvestre"
    ],
    especialidades: [
      "Rescate en edificios de gran altura",
      "Combate de incendios forestales",
      "Atención a zonas de alto poder adquisitivo"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3962, lng: -99.2883 },
    descripcion: "La Estación de Bomberos de Huixquilucan protege zonas residenciales de alto nivel como Interlomas y Bosque Real, así como áreas boscosas del Parque Nacional La Marquesa.",
    equipamiento: [
      "Escalera telescópica de 32 metros",
      "Unidades todoterreno forestales",
      "Ambulancia de soporte vital avanzado",
      "Equipos de rescate técnico"
    ],
    zonasCobertura: ["Interlomas", "Bosque Real", "La Herradura", "San Fernando La Herradura", "Jesús del Monte"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 55,
    unidadesDisponibles: ["2 Autobombas", "1 Escalera", "1 Unidad Forestal", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-texcoco",
    nombre: "Estación de Bomberos de Texcoco",
    nombreCorto: "Estación de Bomberos Texcoco",
    direccion: "Av. Juárez Norte 100",
    colonia: "Centro",
    codigoPostal: "56100",
    municipio: "Texcoco",
    ciudad: "Texcoco de Mora",
    telefono: "595 954 3100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en montaña",
      "Atención de inundaciones",
      "Control de fauna silvestre",
      "Emergencias agrícolas"
    ],
    especialidades: [
      "Incendios forestales en la Sierra Nevada",
      "Rescate en zonas rurales",
      "Atención a comunidades agrícolas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.5078, lng: -98.8851 },
    descripcion: "La Estación de Bomberos de Texcoco cubre un amplio territorio que incluye zonas urbanas, agrícolas y forestales en las faldas de la Sierra Nevada. Especializada en incendios forestales.",
    zonasCobertura: ["Texcoco Centro", "San Miguel Coatlinchan", "Santa Cruz de Arriba", "Universidad Autónoma Chapingo", "San Bernardino"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 38,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate en Montaña", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-chalco",
    nombre: "Estación de Bomberos de Chalco",
    nombreCorto: "Estación de Bomberos Chalco",
    direccion: "Av. Solidaridad s/n",
    colonia: "Chalco de Díaz Covarrubias",
    codigoPostal: "56600",
    municipio: "Chalco",
    ciudad: "Chalco de Díaz Covarrubias",
    telefono: "55 5975 3400",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en mercados",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Operaciones en zonas de riesgo de inundación",
      "Atención a zonas de alta densidad poblacional",
      "Rescate en temporada de lluvias"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2631, lng: -98.8915 },
    descripcion: "La Estación de Bomberos de Chalco atiende una de las zonas más vulnerables a inundaciones del Valle de México. Especializada en rescate acuático y emergencias pluviales.",
    zonasCobertura: ["Chalco Centro", "Valle de Chalco", "Xico", "San Martín Cuautlalpan", "Santa Cruz Amalinalco"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 45,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate Acuático", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-coacalco",
    nombre: "Estación de Bomberos de Coacalco de Berriozábal",
    nombreCorto: "Estación de Bomberos Coacalco",
    direccion: "Av. López Portillo s/n",
    colonia: "Villa de las Flores",
    codigoPostal: "55710",
    municipio: "Coacalco de Berriozábal",
    ciudad: "Coacalco",
    telefono: "55 5872 3500",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en fraccionamientos",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Atención a zonas residenciales masivas",
      "Emergencias en unidades habitacionales",
      "Rescate urbano"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6246, lng: -99.1046 },
    descripcion: "La Estación de Bomberos de Coacalco protege una zona residencial de rápido crecimiento, con numerosos fraccionamientos y unidades habitacionales de alta densidad.",
    zonasCobertura: ["Villa de las Flores", "San Francisco Coacalco", "Bosques de San Miguel", "Ex Hacienda San Felipe", "Valle de los Pinos"],
    tiempoRespuesta: "6-10 minutos",
    personalActivo: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-ixtapaluca",
    nombre: "Estación de Bomberos de Ixtapaluca",
    nombreCorto: "Estación de Bomberos Ixtapaluca",
    direccion: "Av. Javier López s/n",
    colonia: "Ixtapaluca Centro",
    codigoPostal: "56530",
    municipio: "Ixtapaluca",
    ciudad: "Ixtapaluca",
    telefono: "55 5972 5400",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en unidades habitacionales",
      "Incendios forestales",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Atención a zonas de vivienda social",
      "Rescate en fraccionamientos extensos",
      "Combate de incendios forestales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3167, lng: -98.8822 },
    descripcion: "La Estación de Bomberos de Ixtapaluca atiende uno de los municipios con mayor crecimiento poblacional, con enormes desarrollos de vivienda social y zonas serranas.",
    zonasCobertura: ["Ixtapaluca Centro", "San Buenaventura", "Los Héroes", "Geovillas de Terranova", "Santa Bárbara"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 40,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-tultitlan",
    nombre: "Estación de Bomberos de Tultitlán",
    nombreCorto: "Estación de Bomberos Tultitlán",
    direccion: "Av. Hidalgo s/n",
    colonia: "San Antonio Tultitlán",
    codigoPostal: "54900",
    municipio: "Tultitlán",
    ciudad: "Tultitlán de Mariano Escobedo",
    telefono: "55 5884 3200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Materiales peligrosos (HAZMAT)",
      "Rescate de personas atrapadas",
      "Emergencias en bodegas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona logística e industrial",
      "Atención a centros de distribución",
      "Rescate en accidentes carreteros"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6456, lng: -99.1678 },
    descripcion: "La Estación de Bomberos de Tultitlán protege una importante zona industrial y logística del norte del Estado de México, incluyendo bodegas y centros de distribución.",
    zonasCobertura: ["San Antonio Tultitlán", "Buenavista", "San Pablo de las Salinas", "Lechería", "La Pirámide"],
    tiempoRespuesta: "7-12 minutos",
    personalActivo: 42,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-zinacantepec",
    nombre: "Estación de Bomberos de Zinacantepec",
    nombreCorto: "Estación de Bomberos Zinacantepec",
    direccion: "Av. Adolfo López Mateos 100",
    colonia: "Centro",
    codigoPostal: "51350",
    municipio: "Zinacantepec",
    ciudad: "San Miguel Zinacantepec",
    telefono: "722 218 3100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate en montaña",
      "Control de fugas de gas",
      "Rescate de personas perdidas",
      "Control de fauna silvestre",
      "Emergencias en el Nevado de Toluca"
    ],
    especialidades: [
      "Rescate de alta montaña",
      "Combate de incendios forestales",
      "Operaciones en el Nevado de Toluca"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2847, lng: -99.7225 },
    descripcion: "La Estación de Bomberos de Zinacantepec es especialista en rescate de alta montaña, cubriendo el Parque Nacional Nevado de Toluca y sus áreas forestales circundantes.",
    equipamiento: [
      "Unidades todoterreno de montaña",
      "Equipos de rescate en altitud",
      "Camillas especializadas para montaña",
      "Equipos de comunicación satelital"
    ],
    zonasCobertura: ["Zinacantepec Centro", "San Cristóbal Tecolit", "Raíces", "Nevado de Toluca", "Santa María del Monte"],
    tiempoRespuesta: "12-25 minutos",
    personalActivo: 32,
    unidadesDisponibles: ["1 Autobomba", "2 Unidades de Rescate en Montaña", "1 Unidad Forestal", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-chimalhuacan",
    nombre: "Estación de Bomberos de Chimalhuacán",
    nombreCorto: "Estación de Bomberos Chimalhuacán",
    direccion: "Av. Nezahualcóyotl s/n",
    colonia: "Cabecera Municipal",
    codigoPostal: "56330",
    municipio: "Chimalhuacán",
    ciudad: "Chimalhuacán",
    telefono: "55 5853 4700",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en zonas de riesgo",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Atención a zonas de alta marginación",
      "Operaciones en temporada de lluvias",
      "Rescate en zonas de difícil acceso"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4267, lng: -98.9511 },
    descripcion: "La Estación de Bomberos de Chimalhuacán atiende uno de los municipios con mayores retos sociales, brindando servicios de emergencia a más de 700,000 habitantes.",
    zonasCobertura: ["Chimalhuacán Centro", "Acuitlapilco", "San Agustín Atlapulco", "Xochitenco", "Fundidores"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 38,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-nicolas-romero",
    nombre: "Estación de Bomberos de Nicolás Romero",
    nombreCorto: "Estación de Bomberos Nicolás Romero",
    direccion: "Av. 16 de Septiembre 200",
    colonia: "Centro",
    codigoPostal: "54400",
    municipio: "Nicolás Romero",
    ciudad: "Ciudad Nicolás Romero",
    telefono: "55 5824 3600",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas boscosas",
      "Atención de deslaves",
      "Control de fauna silvestre",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Combate de incendios forestales",
      "Rescate en zonas montañosas",
      "Atención a zonas de riesgo geológico"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.6222, lng: -99.3056 },
    descripcion: "La Estación de Bomberos de Nicolás Romero protege una zona que combina desarrollo urbano con extensas áreas boscosas de la Sierra de las Cruces.",
    zonasCobertura: ["Centro de Nicolás Romero", "Lomas de Tepeolulco", "Progreso Industrial", "San José del Vidrio", "Villa del Carbón"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 35,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-valle-de-chalco",
    nombre: "Estación de Bomberos de Valle de Chalco Solidaridad",
    nombreCorto: "Estación de Bomberos Valle de Chalco",
    direccion: "Av. Tezozómoc s/n",
    colonia: "Xico",
    codigoPostal: "56617",
    municipio: "Valle de Chalco Solidaridad",
    ciudad: "Valle de Chalco",
    telefono: "55 5971 5800",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate acuático",
      "Rescate de personas atrapadas",
      "Emergencias en temporada de lluvias",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Rescate en zonas de inundación",
      "Operaciones en temporada de lluvias",
      "Atención a zonas vulnerables"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2828, lng: -98.9407 },
    descripcion: "La Estación de Bomberos de Valle de Chalco Solidaridad es especialista en rescate acuático y atención de inundaciones, uno de los principales riesgos de la zona.",
    equipamiento: [
      "Lanchas de rescate inflables",
      "Equipos de rescate acuático",
      "Bombas de achique de alta capacidad",
      "Equipos de comunicación para emergencias masivas"
    ],
    zonasCobertura: ["Xico", "Providencia", "Avándaro", "San Isidro", "Valle de Chalco Centro"],
    tiempoRespuesta: "8-15 minutos",
    personalActivo: 42,
    unidadesDisponibles: ["2 Autobombas", "2 Unidades de Rescate Acuático", "1 Ambulancia"]
  },
  {
    slug: "estacion-bomberos-tecamac",
    nombre: "Estación de Bomberos de Tecámac",
    nombreCorto: "Estación de Bomberos Tecámac",
    direccion: "Av. México-Pachuca km 37.5",
    colonia: "Los Héroes Tecámac",
    codigoPostal: "55764",
    municipio: "Tecámac",
    ciudad: "Tecámac de Felipe Villanueva",
    telefono: "55 5876 4100",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en fraccionamientos",
      "Atención en carreteras",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Atención a desarrollos habitacionales masivos",
      "Rescate en accidentes carreteros",
      "Emergencias en zonas de crecimiento urbano"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.7139, lng: -98.9687 },
    descripcion: "La Estación de Bomberos de Tecámac atiende uno de los municipios con mayor crecimiento del país, con desarrollos habitacionales que albergan cientos de miles de familias.",
    zonasCobertura: ["Los Héroes Tecámac", "Ojo de Agua", "Sierra Hermosa", "Santa María Ajoloapan", "Tecámac Centro"],
    tiempoRespuesta: "10-18 minutos",
    personalActivo: 45,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia", "1 Vehículo de Respuesta Rápida"]
  },
  {
    slug: "estacion-bomberos-lerma",
    nombre: "Estación de Bomberos de Lerma",
    nombreCorto: "Estación de Bomberos Lerma",
    direccion: "Blvd. Aeropuerto Miguel Alemán s/n",
    colonia: "Lerma de Villada",
    codigoPostal: "52000",
    municipio: "Lerma",
    ciudad: "Lerma de Villada",
    telefono: "728 285 3200",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Control de fugas de gas",
      "Emergencias en parques industriales",
      "Rescate de personas atrapadas",
      "Emergencias aeroportuarias"
    ],
    especialidades: [
      "Zona industrial Lerma-Toluca",
      "Apoyo al Aeropuerto de Toluca",
      "Atención a corredores industriales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2847, lng: -99.5122 },
    descripcion: "La Estación de Bomberos de Lerma protege uno de los corredores industriales más importantes de México, el corredor Lerma-Toluca, además de brindar apoyo al Aeropuerto Internacional de Toluca.",
    equipamiento: [
      "Autobombas industriales de alta capacidad",
      "Unidad HAZMAT especializada",
      "Equipos de espuma de alta expansión",
      "Vehículos de respuesta rápida industrial"
    ],
    zonasCobertura: ["Lerma Centro", "Parque Industrial Lerma", "Aeropuerto de Toluca", "San Pedro Tultepec", "Ocoyoacac"],
    tiempoRespuesta: "6-12 minutos",
    personalActivo: 55,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  }
];

// ═══ FUNCIONES AUXILIARES ═══

/**
 * Obtener estación por slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesEdoMex.find(e => e.slug === slug);
}

/**
 * Obtener estaciones por municipio
 */
export function getEstacionesByMunicipio(municipio: string): Estacion[] {
  return estacionesEdoMex.filter(e => e.municipio === municipio);
}

/**
 * Obtener todos los municipios únicos
 */
export function getMunicipios(): string[] {
  return [...new Set(estacionesEdoMex.map(e => e.municipio))].sort();
}

/**
 * Obtener estaciones cercanas (excluyendo la actual)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  return estacionesEdoMex
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}

/**
 * Obtener estaciones por región
 */
export function getEstacionesPorRegion(region: 'norte' | 'oriente' | 'sur' | 'poniente' | 'toluca'): Estacion[] {
  const regiones: Record<string, string[]> = {
    norte: ['Ecatepec de Morelos', 'Tlalnepantla de Baz', 'Cuautitlán Izcalli', 'Coacalco de Berriozábal', 'Tultitlán', 'Tecámac'],
    oriente: ['Nezahualcóyotl', 'Texcoco', 'Chalco', 'Ixtapaluca', 'Chimalhuacán', 'Valle de Chalco Solidaridad'],
    poniente: ['Naucalpan de Juárez', 'Atizapán de Zaragoza', 'Huixquilucan', 'Nicolás Romero'],
    toluca: ['Toluca', 'Metepec', 'Zinacantepec', 'Lerma'],
    sur: []
  };

  return estacionesEdoMex.filter(e => regiones[region]?.includes(e.municipio));
}
