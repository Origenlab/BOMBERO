/**
 * ─── Datos de Estaciones de Bomberos CDMX ───
 * Base de datos completa del Heroico Cuerpo de Bomberos de la Ciudad de México
 * Información actualizada para SEO y directorio
 */

import type { Estacion } from './types';

export const estacionesCDMX: Estacion[] = [
  {
    id: "cdmx-central",
    slug: "estacion-central",
    nombre: "Estación Central de Bomberos de la Ciudad de México",
    nombreCorto: "Estación Central de Bomberos",
    direccion: "Av. Río de la Loza 156",
    colonia: "Doctores",
    ciudad: "Ciudad de México",
    codigoPostal: "06720",
    alcaldia: "Cuauhtémoc",
    estado: "Ciudad de México",
    telefono: "55 5768 3700",
    telefonoEmergencia: "911",
    email: "contacto@bomberos.cdmx.gob.mx",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Rescate en alturas",
      "Servicio prehospitalario",
      "Rescate acuático",
      "Control de fugas de gas",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Centro de mando y coordinación",
      "Unidad de materiales peligrosos",
      "Escuadra de rescate especializado"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4234, lng: -99.1443 },
    descripcion: "La Estación Central de Bomberos es el corazón operativo del Heroico Cuerpo de Bomberos de la Ciudad de México. Fundada en 1887, es la estación más antigua y emblemática del país, sirviendo como centro de coordinación para todas las emergencias en la capital.",
    historia: "Fundada el 22 de agosto de 1887, la Estación Central ha sido testigo y protagonista de los momentos más importantes en la historia del combate de incendios en México. Su edificio histórico en la Colonia Doctores es un símbolo del servicio y sacrificio de los bomberos mexicanos.",
    equipamiento: [
      "Autobombas de última generación",
      "Unidades de rescate pesado",
      "Vehículos HAZMAT",
      "Ambulancias de soporte vital avanzado",
      "Escaleras telescópicas de 32 metros"
    ],
    zonasCobertura: ["Centro Histórico", "Colonia Doctores", "Colonia Roma", "Colonia Condesa", "Zona Rosa"],
    tiempoRespuesta: "5-8 minutos",
    personal: 120,
    personalActivo: 120,
    unidades: 9,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT"]
  },
  {
    id: "cdmx-tacubaya",
    slug: "estacion-tacubaya",
    nombre: "Estación de Bomberos Tacubaya",
    nombreCorto: "Estación de Bomberos Tacubaya",
    direccion: "Av. Jalisco 318",
    colonia: "Tacubaya",
    ciudad: "Ciudad de México",
    codigoPostal: "11870",
    alcaldia: "Miguel Hidalgo",
    estado: "Ciudad de México",
    telefono: "55 5516 1092",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate en elevadores",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Rescate urbano",
      "Atención de emergencias en edificios altos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4021, lng: -99.1876 },
    descripcion: "La Estación de Bomberos Tacubaya brinda cobertura a una de las zonas más transitadas de la Ciudad de México, incluyendo áreas residenciales, comerciales y la importante zona de Santa Fe.",
    zonasCobertura: ["Tacubaya", "Observatorio", "Escandón", "Mixcoac", "Santa Fe"],
    tiempoRespuesta: "6-10 minutos",
    personal: 45,
    personalActivo: 45,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-tlalpan",
    slug: "estacion-tlalpan",
    nombre: "Estación de Bomberos Tlalpan",
    nombreCorto: "Estación de Bomberos Tlalpan",
    direccion: "Av. San Fernando 547",
    colonia: "Peña Pobre",
    ciudad: "Ciudad de México",
    codigoPostal: "14060",
    alcaldia: "Tlalpan",
    estado: "Ciudad de México",
    telefono: "55 5573 1396",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Rescate en montaña",
      "Incendios estructurales",
      "Rescate vehicular",
      "Búsqueda y rescate en áreas naturales",
      "Control de fauna silvestre"
    ],
    especialidades: [
      "Combate de incendios forestales",
      "Rescate en zonas de difícil acceso",
      "Operaciones en áreas naturales protegidas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2847, lng: -99.1698 },
    descripcion: "La Estación de Bomberos Tlalpan es especialista en incendios forestales y rescate en montaña, cubriendo las zonas boscosas del sur de la ciudad, incluyendo el Ajusco y áreas protegidas.",
    zonasCobertura: ["Tlalpan Centro", "Ajusco", "Pedregal", "Coapa", "Coyoacán Sur"],
    tiempoRespuesta: "8-15 minutos",
    personal: 50,
    personalActivo: 50,
    unidades: 5,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Unidad de Rescate en Montaña", "1 Ambulancia"]
  },
  {
    id: "cdmx-coyoacan",
    slug: "estacion-coyoacan",
    nombre: "Estación de Bomberos Coyoacán",
    nombreCorto: "Estación de Bomberos Coyoacán",
    direccion: "Av. División del Norte 1540",
    colonia: "Letrán Valle",
    ciudad: "Ciudad de México",
    codigoPostal: "03650",
    alcaldia: "Benito Juárez",
    estado: "Ciudad de México",
    telefono: "55 5524 6312",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Retiro de enjambres",
      "Rescate de animales",
      "Atención de inundaciones"
    ],
    especialidades: [
      "Rescate urbano",
      "Atención a zonas residenciales de alta densidad"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3715, lng: -99.1563 },
    descripcion: "La Estación de Bomberos Coyoacán atiende una de las zonas más pobladas del sur de la ciudad, con especialización en emergencias residenciales y comerciales.",
    zonasCobertura: ["Coyoacán", "Del Valle", "Narvarte", "Portales", "General Anaya"],
    tiempoRespuesta: "5-8 minutos",
    personal: 40,
    personalActivo: 40,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-azcapotzalco",
    slug: "estacion-azcapotzalco",
    nombre: "Estación de Bomberos Azcapotzalco",
    nombreCorto: "Estación de Bomberos Azcapotzalco",
    direccion: "Av. Azcapotzalco 378",
    colonia: "Azcapotzalco Centro",
    ciudad: "Ciudad de México",
    codigoPostal: "02000",
    alcaldia: "Azcapotzalco",
    estado: "Ciudad de México",
    telefono: "55 5352 8901",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios industriales",
      "Materiales peligrosos (HAZMAT)",
      "Rescate vehicular",
      "Incendios estructurales",
      "Control de derrames químicos",
      "Emergencias en instalaciones industriales"
    ],
    especialidades: [
      "Respuesta a emergencias industriales",
      "Manejo de materiales peligrosos",
      "Rescate en espacios confinados"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4872, lng: -99.1847 },
    descripcion: "La Estación de Bomberos Azcapotzalco se especializa en emergencias industriales, atendiendo la zona con mayor concentración de fábricas y bodegas en la Ciudad de México.",
    zonasCobertura: ["Azcapotzalco", "Vallejo", "Pantaco", "Industrial Vallejo", "Clavería"],
    tiempoRespuesta: "5-10 minutos",
    personal: 55,
    personalActivo: 55,
    unidades: 5,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-gam",
    slug: "estacion-gustavo-a-madero",
    nombre: "Estación de Bomberos Gustavo A. Madero",
    nombreCorto: "Estación de Bomberos Gustavo A. Madero",
    direccion: "Calzada de Guadalupe 574",
    colonia: "Gustavo A. Madero",
    ciudad: "Ciudad de México",
    codigoPostal: "07050",
    alcaldia: "Gustavo A. Madero",
    estado: "Ciudad de México",
    telefono: "55 5781 2345",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate en derrumbes",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Atención a zonas de alta densidad poblacional",
      "Rescate en mercados y zonas comerciales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4876, lng: -99.1143 },
    descripcion: "La Estación de Bomberos GAM cubre una de las alcaldías más pobladas de la ciudad, con especial atención a la Basílica de Guadalupe y zonas comerciales de alta afluencia.",
    zonasCobertura: ["Villa de Guadalupe", "La Villa", "Lindavista", "Tepeyac", "Martín Carrera"],
    tiempoRespuesta: "6-12 minutos",
    personal: 48,
    personalActivo: 48,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-iztapalapa",
    slug: "estacion-iztapalapa",
    nombre: "Estación de Bomberos Iztapalapa",
    nombreCorto: "Estación de Bomberos Iztapalapa",
    direccion: "Av. Ermita Iztapalapa 3428",
    colonia: "Santa María Aztahuacán",
    ciudad: "Ciudad de México",
    codigoPostal: "09500",
    alcaldia: "Iztapalapa",
    estado: "Ciudad de México",
    telefono: "55 5686 4523",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate en derrumbes",
      "Emergencias en mercados"
    ],
    especialidades: [
      "Atención masiva de emergencias",
      "Rescate en zonas de difícil acceso",
      "Operaciones durante temporada de lluvias"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3576, lng: -99.0543 },
    descripcion: "La Estación de Bomberos Iztapalapa atiende la alcaldía más poblada de la Ciudad de México, con especialización en inundaciones durante temporada de lluvias.",
    zonasCobertura: ["Iztapalapa", "Santa Cruz Meyehualco", "Ermita", "Central de Abasto", "Cabeza de Juárez"],
    tiempoRespuesta: "8-15 minutos",
    personal: 60,
    personalActivo: 60,
    unidades: 6,
    unidadesDisponibles: ["3 Autobombas", "1 Unidad de Rescate", "2 Ambulancias"]
  },
  {
    id: "cdmx-xochimilco",
    slug: "estacion-xochimilco",
    nombre: "Estación de Bomberos Xochimilco",
    nombreCorto: "Estación de Bomberos Xochimilco",
    direccion: "Av. Guadalupe I. Ramírez 279",
    colonia: "Barrio El Rosario",
    ciudad: "Ciudad de México",
    codigoPostal: "16070",
    alcaldia: "Xochimilco",
    estado: "Ciudad de México",
    telefono: "55 5676 0912",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Rescate acuático",
      "Incendios estructurales",
      "Rescate vehicular",
      "Emergencias en chinampas",
      "Control de fauna silvestre"
    ],
    especialidades: [
      "Rescate acuático en canales",
      "Combate de incendios en zonas de conservación",
      "Operaciones en chinampas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2634, lng: -99.1087 },
    descripcion: "La Estación de Bomberos Xochimilco se especializa en rescate acuático, atendiendo los famosos canales de Xochimilco y zonas de conservación ecológica.",
    zonasCobertura: ["Xochimilco Centro", "San Gregorio", "Santa Cruz Acalpixca", "Tulyehualco", "Los canales"],
    tiempoRespuesta: "8-12 minutos",
    personal: 35,
    personalActivo: 35,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Acuática", "1 Ambulancia"]
  },
  {
    id: "cdmx-alvaro-obregon",
    slug: "estacion-alvaro-obregon",
    nombre: "Estación de Bomberos Álvaro Obregón",
    nombreCorto: "Estación de Bomberos Álvaro Obregón",
    direccion: "Av. Revolución 1267",
    colonia: "Los Alpes",
    ciudad: "Ciudad de México",
    codigoPostal: "01010",
    alcaldia: "Álvaro Obregón",
    estado: "Ciudad de México",
    telefono: "55 5593 7821",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Rescate en barrancas",
      "Control de fugas de gas",
      "Rescate en deslizamientos",
      "Atención de inundaciones"
    ],
    especialidades: [
      "Rescate en zonas de barrancas",
      "Atención a zonas con pendientes pronunciadas",
      "Operaciones en temporada de lluvias"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3654, lng: -99.1987 },
    descripcion: "La Estación de Bomberos Álvaro Obregón se especializa en rescate en barrancas y zonas de riesgo geológico, características de esta alcaldía.",
    zonasCobertura: ["San Ángel", "Mixcoac", "Las Águilas", "Olivar de los Padres", "Santa Fe Sur"],
    tiempoRespuesta: "7-12 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-cuajimalpa",
    slug: "estacion-cuajimalpa",
    nombre: "Estación de Bomberos Cuajimalpa",
    nombreCorto: "Estación de Bomberos Cuajimalpa",
    direccion: "Av. Veracruz 10",
    colonia: "Cuajimalpa Centro",
    ciudad: "Ciudad de México",
    codigoPostal: "05000",
    alcaldia: "Cuajimalpa de Morelos",
    estado: "Ciudad de México",
    telefono: "55 5812 3456",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Rescate en montaña",
      "Incendios estructurales",
      "Atención en condiciones de neblina",
      "Rescate vehicular en carreteras",
      "Control de fauna silvestre"
    ],
    especialidades: [
      "Operaciones en zonas boscosas",
      "Rescate en carreteras de montaña",
      "Combate de incendios forestales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3587, lng: -99.2876 },
    descripcion: "La Estación de Bomberos Cuajimalpa atiende zonas boscosas y carreteras de montaña, incluyendo la autopista México-Toluca y el Desierto de los Leones.",
    zonasCobertura: ["Cuajimalpa Centro", "Santa Fe", "Contadero", "Desierto de los Leones", "La Marquesa"],
    tiempoRespuesta: "10-18 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Ambulancia"]
  },
  {
    id: "cdmx-venustiano-carranza",
    slug: "estacion-venustiano-carranza",
    nombre: "Estación de Bomberos Venustiano Carranza",
    nombreCorto: "Estación de Bomberos Venustiano Carranza",
    direccion: "Calzada Ignacio Zaragoza 1134",
    colonia: "Juan Escutia",
    ciudad: "Ciudad de México",
    codigoPostal: "09100",
    alcaldia: "Venustiano Carranza",
    estado: "Ciudad de México",
    telefono: "55 5764 8901",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Apoyo a operaciones aeroportuarias",
      "Emergencias en metro",
      "Control de fugas de gas"
    ],
    especialidades: [
      "Coordinación con servicios aeroportuarios",
      "Atención a zonas industriales",
      "Emergencias en transporte público"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4187, lng: -99.0876 },
    descripcion: "La Estación de Bomberos Venustiano Carranza brinda apoyo al Aeropuerto Internacional y atiende importantes zonas comerciales e industriales del oriente.",
    zonasCobertura: ["Venustiano Carranza Centro", "Aeropuerto AICM", "Jamaica", "Moctezuma", "Balbuena"],
    tiempoRespuesta: "5-10 minutos",
    personal: 52,
    personalActivo: 52,
    unidades: 5,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-iztacalco",
    slug: "estacion-iztacalco",
    nombre: "Estación de Bomberos Iztacalco",
    nombreCorto: "Estación de Bomberos Iztacalco",
    direccion: "Calzada de la Viga 1392",
    colonia: "El Triunfo",
    ciudad: "Ciudad de México",
    codigoPostal: "09430",
    alcaldia: "Iztacalco",
    estado: "Ciudad de México",
    telefono: "55 5654 2187",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate en edificios",
      "Retiro de enjambres"
    ],
    especialidades: [
      "Atención a zonas de vivienda popular",
      "Emergencias en unidades habitacionales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3876, lng: -99.0932 },
    descripcion: "La Estación de Bomberos Iztacalco atiende una zona densamente poblada con numerosas unidades habitacionales y mercados.",
    zonasCobertura: ["Iztacalco", "Agrícola Oriental", "Pantitlán", "Granjas México", "Santa Anita"],
    tiempoRespuesta: "5-10 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "cdmx-milpa-alta",
    slug: "estacion-milpa-alta",
    nombre: "Estación de Bomberos Milpa Alta",
    nombreCorto: "Estación de Bomberos Milpa Alta",
    direccion: "Av. Constitución 5",
    colonia: "Villa Milpa Alta",
    ciudad: "Ciudad de México",
    codigoPostal: "12000",
    alcaldia: "Milpa Alta",
    estado: "Ciudad de México",
    telefono: "55 5844 1234",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Rescate rural",
      "Incendios estructurales",
      "Atención a comunidades rurales",
      "Control de fauna silvestre",
      "Emergencias agrícolas"
    ],
    especialidades: [
      "Operaciones en zonas rurales",
      "Combate de incendios forestales",
      "Atención a comunidades de difícil acceso"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.1923, lng: -99.0234 },
    descripcion: "La Estación de Bomberos Milpa Alta es especialista en incendios forestales y atención a las comunidades rurales más alejadas de la Ciudad de México.",
    zonasCobertura: ["Milpa Alta", "San Antonio Tecómitl", "San Pablo Oztotepec", "San Pedro Atocpan", "Santa Ana Tlacotenco"],
    tiempoRespuesta: "12-25 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 3,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad Forestal", "1 Ambulancia"]
  },
  {
    id: "cdmx-tlahuac",
    slug: "estacion-tlahuac",
    nombre: "Estación de Bomberos Tláhuac",
    nombreCorto: "Estación de Bomberos Tláhuac",
    direccion: "Av. Tláhuac 5469",
    colonia: "Miguel Hidalgo",
    ciudad: "Ciudad de México",
    codigoPostal: "13200",
    alcaldia: "Tláhuac",
    estado: "Ciudad de México",
    telefono: "55 5842 6789",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Incendios en chinampas",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate acuático"
    ],
    especialidades: [
      "Emergencias en zonas de chinampas",
      "Rescate en cuerpos de agua",
      "Atención a zonas agrícolas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.2876, lng: -99.0043 },
    descripcion: "La Estación de Bomberos Tláhuac atiende la zona de chinampas y las comunidades lacustres del sureste de la Ciudad de México.",
    zonasCobertura: ["Tláhuac Centro", "San Pedro Tláhuac", "Los Olivos", "Zapotitla", "San Francisco Tlaltenco"],
    tiempoRespuesta: "8-15 minutos",
    personal: 32,
    personalActivo: 32,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Acuática", "1 Ambulancia"]
  },
  {
    id: "cdmx-magdalena-contreras",
    slug: "estacion-magdalena-contreras",
    nombre: "Estación de Bomberos Magdalena Contreras",
    nombreCorto: "Estación de Bomberos Magdalena Contreras",
    direccion: "Av. Luis Cabrera 1",
    colonia: "San Jerónimo Lídice",
    ciudad: "Ciudad de México",
    codigoPostal: "10200",
    alcaldia: "La Magdalena Contreras",
    estado: "Ciudad de México",
    telefono: "55 5595 4567",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios forestales",
      "Rescate en barrancas",
      "Incendios estructurales",
      "Atención de deslaves",
      "Rescate en zonas boscosas",
      "Control de fauna silvestre"
    ],
    especialidades: [
      "Rescate en barrancas y terrenos inestables",
      "Combate de incendios forestales",
      "Operaciones en zonas de conservación"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.3123, lng: -99.2234 },
    descripcion: "La Estación de Bomberos Magdalena Contreras se especializa en rescate en barrancas y atención de emergencias en la zona de Los Dinamos y áreas boscosas.",
    zonasCobertura: ["San Jerónimo", "Contreras", "Los Dinamos", "San Bernabé", "Pedregal de San Ángel"],
    tiempoRespuesta: "10-18 minutos",
    personal: 30,
    personalActivo: 30,
    unidades: 4,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad Forestal", "1 Unidad de Rescate en Montaña", "1 Ambulancia"]
  },
  {
    id: "cdmx-aeropuerto-aicm",
    slug: "estacion-aeropuerto-aicm",
    nombre: "Estación de Bomberos del Aeropuerto Internacional de la Ciudad de México",
    nombreCorto: "Estación de Bomberos del Aeropuerto AICM",
    direccion: "Terminal 1, Aeropuerto Internacional de la Ciudad de México",
    colonia: "Peñón de los Baños",
    ciudad: "Ciudad de México",
    codigoPostal: "15620",
    alcaldia: "Venustiano Carranza",
    estado: "Ciudad de México",
    telefono: "55 5786 9012",
    telefonoEmergencia: "911",
    servicios: [
      "ARFF (Rescate aeroportuario)",
      "Incendios de aeronaves",
      "Materiales peligrosos (HAZMAT)",
      "Rescate especializado en aviación",
      "Emergencias con combustible de aviación",
      "Evacuación de aeronaves"
    ],
    especialidades: [
      "Rescate y extinción de incendios en aeronaves (ARFF)",
      "Manejo de emergencias con combustible Jet-A",
      "Coordinación con autoridades aeronáuticas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 19.4360, lng: -99.0719 },
    descripcion: "La Estación de Bomberos del AICM es una unidad especializada en rescate aeroportuario (ARFF), equipada con vehículos de última generación para atender emergencias en el aeropuerto más grande de México.",
    equipamiento: [
      "Vehículos ARFF Oshkosh Striker",
      "Camiones de espuma de alta capacidad",
      "Unidades de comando móvil",
      "Equipos de comunicación aeronáutica"
    ],
    zonasCobertura: ["Aeropuerto Internacional CDMX", "Pistas", "Terminales 1 y 2", "Hangares", "Zona de carga"],
    tiempoRespuesta: "3 minutos (dentro del aeropuerto)",
    personal: 80,
    personalActivo: 80,
    unidades: 10,
    unidadesDisponibles: ["4 Vehículos ARFF", "2 Camiones de espuma", "2 Unidades de rescate", "2 Ambulancias"]
  }
];

// Obtener estación por slug
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesCDMX.find(e => e.slug === slug);
}

// Obtener estaciones por alcaldía
export function getEstacionesByAlcaldia(alcaldia: string): Estacion[] {
  return estacionesCDMX.filter(e => e.alcaldia === alcaldia);
}

// Obtener todas las alcaldías
export function getAlcaldias(): string[] {
  return [...new Set(estacionesCDMX.map(e => e.alcaldia))].sort();
}

// Obtener estaciones cercanas (simulado por alcaldías vecinas)
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  return estacionesCDMX
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}
