/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  BOMBEROS DE AGUASCALIENTES (AGS) - DIRECTORIO OFICIAL                    ║
 * ║  Base de datos completa del H. Cuerpo de Bomberos de Aguascalientes       ║
 * ╠═══════════════════════════════════════════════════════════════════════════╣
 * ║  Capital: Aguascalientes | Código: AGS | Región: Centro-Norte             ║
 * ║  13 Estaciones | 396 Bomberos | Cobertura en 11 Municipios                ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

import type { Estacion } from './types';

// ═══════════════════════════════════════════════════════════════════════════
// CONSTANTES SEO - AGUASCALIENTES
// ═══════════════════════════════════════════════════════════════════════════

export const AGUASCALIENTES_SEO = {
  estado: 'Aguascalientes',
  estadoCorto: 'Aguascalientes',
  codigo: 'AGS',
  capital: 'Aguascalientes',
  gentilicio: 'aguascalentense',
  region: 'Centro-Norte de México',
  poblacion: 1_425_607,
  superficie_km2: 5_618,
  municipios: 11,
};

export const ESTADISTICAS_AGUASCALIENTES = {
  total_estaciones: 13,
  total_bomberos: 396,
  total_unidades: 52,
  municipios_cubiertos: 11,
};

export const estacionesAguascalientes: Estacion[] = [
  {
    id: "ags-central",
    slug: "estacion-central-aguascalientes",
    estado: "Aguascalientes",
    nombre: "Estación Central de Bomberos de Aguascalientes",
    nombreCorto: "Estación Central Aguascalientes",
    direccion: "Av. Adolfo López Mateos Oriente 1801",
    colonia: "Lomas del Campestre",
    codigoPostal: "20120",
    municipio: "Aguascalientes",
    ciudad: "Aguascalientes",
    telefono: "449 910 2030",
    telefonoEmergencia: "911",
    email: "bomberos@aguascalientes.gob.mx",
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
      "Coordinación de emergencias metropolitanas",
      "Capacitación regional de bomberos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.8818, lng: -102.2916 },
    descripcion: "La Estación Central de Bomberos de Aguascalientes es la sede principal del H. Cuerpo de Bomberos del estado, coordinando operaciones de emergencia para toda la Zona Metropolitana de Aguascalientes y brindando apoyo a los 11 municipios de la entidad.",
    historia: "El H. Cuerpo de Bomberos de Aguascalientes fue fundado en 1943, siendo parte fundamental de la protección civil del estado. A lo largo de más de 80 años ha evolucionado hasta convertirse en uno de los cuerpos de bomberos más profesionales del centro-norte de México.",
    equipamiento: [
      "Autobombas de última generación",
      "Unidades de rescate pesado",
      "Vehículos HAZMAT",
      "Ambulancias de soporte vital avanzado",
      "Escaleras telescópicas de 32 metros"
    ],
    zonasCobertura: ["Centro Histórico", "Lomas del Campestre", "Jardines de la Asunción", "Colinas del Río", "Las Américas"],
    tiempoRespuesta: "5-8 minutos",
    personal: 85,
    personalActivo: 85,
    unidades: 9,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "2 Ambulancias", "1 Unidad HAZMAT"]
  },
  {
    id: "ags-norte",
    slug: "estacion-bomberos-norte-aguascalientes",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos Zona Norte de Aguascalientes",
    nombreCorto: "Estación Zona Norte AGS",
    direccion: "Blvd. Siglo XXI 1502",
    colonia: "Bosques del Prado Norte",
    codigoPostal: "20127",
    municipio: "Aguascalientes",
    ciudad: "Aguascalientes",
    telefono: "449 912 4567",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en alturas",
      "Servicio prehospitalario",
      "Retiro de enjambres",
      "Atención a accidentes carreteros",
      "Emergencias en fraccionamientos"
    ],
    especialidades: [
      "Atención a zonas residenciales de alta densidad",
      "Rescate en fraccionamientos",
      "Emergencias en corredores comerciales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.9242, lng: -102.2947 },
    descripcion: "La Estación Zona Norte atiende los desarrollos habitacionales y comerciales del norte de la ciudad de Aguascalientes, una de las zonas de mayor crecimiento del estado.",
    zonasCobertura: ["Bosques del Prado Norte", "Morelos", "Jardines del Parque", "Villas de Nuestra Señora de la Asunción", "Trojes de Alonso"],
    tiempoRespuesta: "6-10 minutos",
    personal: 42,
    personalActivo: 42,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "ags-sur",
    slug: "estacion-bomberos-sur-aguascalientes",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos Zona Sur de Aguascalientes",
    nombreCorto: "Estación Zona Sur AGS",
    direccion: "Av. Convención de 1914 Sur 701",
    colonia: "San Marcos",
    codigoPostal: "20070",
    municipio: "Aguascalientes",
    ciudad: "Aguascalientes",
    telefono: "449 915 3456",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Atención de inundaciones",
      "Rescate de personas atrapadas",
      "Emergencias en la Feria Nacional de San Marcos",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Eventos masivos (Feria de San Marcos)",
      "Atención a zonas tradicionales",
      "Emergencias en centros comerciales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.8714, lng: -102.2845 },
    descripcion: "La Estación Zona Sur cubre la zona tradicional de San Marcos, famosa mundialmente por la Feria Nacional de San Marcos. Especializada en atención de eventos masivos y zonas de alta concentración de personas.",
    historia: "Esta estación fue establecida estratégicamente para atender la zona de la Feria de San Marcos, el evento más importante del estado que recibe millones de visitantes cada año.",
    zonasCobertura: ["San Marcos", "La Cantera", "Ojocaliente", "Jardines de la Cruz", "Villa de Nuestra Señora de la Asunción"],
    tiempoRespuesta: "5-9 minutos",
    personal: 45,
    personalActivo: 45,
    unidades: 5,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate", "1 Ambulancia", "1 Unidad de Eventos Masivos"]
  },
  {
    id: "ags-jesus-maria",
    slug: "estacion-bomberos-jesus-maria",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Jesús María",
    nombreCorto: "Estación de Bomberos Jesús María",
    direccion: "Av. Independencia 210",
    colonia: "Centro",
    codigoPostal: "20920",
    municipio: "Jesús María",
    ciudad: "Jesús María",
    telefono: "449 965 0123",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas rurales",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona metropolitana de Aguascalientes",
      "Atención a zonas rurales",
      "Combate de incendios forestales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.9614, lng: -102.3431 },
    descripcion: "La Estación de Bomberos de Jesús María protege el segundo municipio más poblado del estado, parte fundamental de la Zona Metropolitana de Aguascalientes. Cubre zonas urbanas y rurales con especialidad en incendios forestales.",
    zonasCobertura: ["Centro de Jesús María", "Tapias Viejas", "La Labor", "Cañada Honda", "Gracias a Dios"],
    tiempoRespuesta: "8-15 minutos",
    personal: 32,
    personalActivo: 32,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad Forestal", "1 Ambulancia"]
  },
  {
    id: "ags-san-francisco-romo",
    slug: "estacion-bomberos-san-francisco-romo",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de San Francisco de los Romo",
    nombreCorto: "Estación de Bomberos San Francisco",
    direccion: "Av. San Francisco 105",
    colonia: "Centro",
    codigoPostal: "20300",
    municipio: "San Francisco de los Romo",
    ciudad: "San Francisco de los Romo",
    telefono: "449 966 0145",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Control de fugas de gas",
      "Emergencias en parques industriales",
      "Rescate de personas atrapadas",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona industrial automotriz",
      "Atención a parques industriales",
      "Emergencias con materiales peligrosos"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.0769, lng: -102.2706 },
    descripcion: "La Estación de Bomberos de San Francisco de los Romo atiende una de las zonas industriales más importantes del estado, donde se concentran plantas automotrices y de autopartes de clase mundial.",
    equipamiento: [
      "Autobombas industriales",
      "Unidad HAZMAT especializada",
      "Equipos de espuma AFFF",
      "Vehículos de respuesta rápida industrial"
    ],
    zonasCobertura: ["Centro de San Francisco", "Parque Industrial San Francisco", "Parque Industrial Altec", "Zona Industrial Nissan", "Comunidades rurales"],
    tiempoRespuesta: "6-12 minutos",
    personal: 38,
    personalActivo: 38,
    unidades: 5,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad HAZMAT", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "ags-rincon-romos",
    slug: "estacion-bomberos-rincon-romos",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Rincón de Romos",
    nombreCorto: "Estación de Bomberos Rincón de Romos",
    direccion: "Calle Juárez 45",
    colonia: "Centro",
    codigoPostal: "20400",
    municipio: "Rincón de Romos",
    ciudad: "Rincón de Romos",
    telefono: "465 958 0234",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas rurales",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Emergencias en bodegas agrícolas"
    ],
    especialidades: [
      "Zona agrícola del estado",
      "Incendios en rastrojos y pastizales",
      "Atención a comunidades rurales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2306, lng: -102.3181 },
    descripcion: "La Estación de Bomberos de Rincón de Romos protege uno de los municipios más importantes en actividad agrícola de Aguascalientes. Especializada en incendios agrícolas y atención a comunidades rurales.",
    zonasCobertura: ["Centro de Rincón de Romos", "La Punta", "Las Camas", "Escaleras", "Pabellón de Hidalgo"],
    tiempoRespuesta: "10-18 minutos",
    personal: 25,
    personalActivo: 25,
    unidades: 4,
    unidadesDisponibles: ["2 Autobombas", "1 Unidad de Rescate Rural", "1 Ambulancia"]
  },
  {
    id: "ags-calvillo",
    slug: "estacion-bomberos-calvillo",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Calvillo",
    nombreCorto: "Estación de Bomberos Calvillo",
    direccion: "Calle Victoria 120",
    colonia: "Centro",
    codigoPostal: "20800",
    municipio: "Calvillo",
    ciudad: "Calvillo",
    telefono: "495 956 0567",
    telefonoEmergencia: "911",
    email: "bomberos.calvillo@aguascalientes.gob.mx",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate en montaña",
      "Control de fugas de gas",
      "Rescate de personas perdidas",
      "Control de fauna silvestre",
      "Emergencias en zonas turísticas"
    ],
    especialidades: [
      "Rescate en la Sierra Fría",
      "Combate de incendios forestales",
      "Atención a zonas turísticas y ecoturísticas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.8444, lng: -102.7181 },
    descripcion: "La Estación de Bomberos de Calvillo, conocida como la capital mundial de la guayaba, protege una zona turística y boscosa con la Sierra Fría. Especializada en rescates en montaña e incendios forestales.",
    historia: "Calvillo es famoso por su producción de guayaba y sus hermosos paisajes serranos. El cuerpo de bomberos local está especialmente capacitado para atender emergencias en zonas de difícil acceso.",
    equipamiento: [
      "Unidades todoterreno de montaña",
      "Equipos de rescate en altitud",
      "Camillas especializadas para montaña",
      "Equipos de comunicación de largo alcance"
    ],
    zonasCobertura: ["Centro de Calvillo", "Presa de los Serna", "El Sauz", "Malpaso", "La Sierra Fría"],
    tiempoRespuesta: "12-25 minutos",
    personal: 28,
    personalActivo: 28,
    unidades: 5,
    unidadesDisponibles: ["1 Autobomba", "2 Unidades de Rescate en Montaña", "1 Unidad Forestal", "1 Ambulancia"]
  },
  {
    id: "ags-pabellon-arteaga",
    slug: "estacion-bomberos-pabellon-arteaga",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Pabellón de Arteaga",
    nombreCorto: "Estación de Bomberos Pabellón",
    direccion: "Av. Constitución 310",
    colonia: "Centro",
    codigoPostal: "20670",
    municipio: "Pabellón de Arteaga",
    ciudad: "Pabellón de Arteaga",
    telefono: "465 958 0789",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios industriales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Emergencias en industria textil",
      "Rescate de personas atrapadas",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Industria textil y maquiladora",
      "Zona comercial regional",
      "Atención carretera"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.1472, lng: -102.2722 },
    descripcion: "La Estación de Bomberos de Pabellón de Arteaga atiende un importante centro industrial y comercial del estado, con tradición en la industria textil y manufacturas.",
    zonasCobertura: ["Centro de Pabellón", "Santiago", "El Garabato", "Ojo de Agua de Crucitas", "Las Ánimas"],
    tiempoRespuesta: "8-15 minutos",
    personal: 22,
    personalActivo: 22,
    unidades: 3,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "ags-asientos",
    slug: "estacion-bomberos-asientos",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Asientos",
    nombreCorto: "Estación de Bomberos Asientos",
    direccion: "Calle Hidalgo 56",
    colonia: "Centro",
    codigoPostal: "20700",
    municipio: "Asientos",
    ciudad: "Asientos",
    telefono: "496 963 0123",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas mineras históricas",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Servicio prehospitalario"
    ],
    especialidades: [
      "Zona minera histórica",
      "Rescate en túneles y minas",
      "Atención a comunidades serranas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2358, lng: -102.0847 },
    descripcion: "La Estación de Bomberos de Asientos protege un municipio con rico patrimonio minero histórico. Ubicado en zona serrana, está especializado en rescates en terrenos difíciles y antiguas minas.",
    historia: "Asientos fue un importante centro minero durante la época colonial. Su cuerpo de bomberos mantiene capacitación especial para atender emergencias en las antiguas estructuras mineras.",
    zonasCobertura: ["Centro de Asientos", "Villa Juárez", "Pilotos", "El Llavero", "Ciénega Grande"],
    tiempoRespuesta: "12-20 minutos",
    personal: 18,
    personalActivo: 18,
    unidades: 3,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad de Rescate", "1 Ambulancia"]
  },
  {
    id: "ags-tepezala",
    slug: "estacion-bomberos-tepezala",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Tepezalá",
    nombreCorto: "Estación de Bomberos Tepezalá",
    direccion: "Plaza Principal s/n",
    colonia: "Centro",
    codigoPostal: "20600",
    municipio: "Tepezalá",
    ciudad: "Tepezalá",
    telefono: "465 959 0234",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas rurales",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Emergencias en bodegas"
    ],
    especialidades: [
      "Zona agrícola y ganadera",
      "Atención a comunidades rurales dispersas",
      "Incendios en pastizales"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.2194, lng: -102.1653 },
    descripcion: "La Estación de Bomberos de Tepezalá atiende un municipio principalmente rural con vocación agrícola y ganadera. Especializada en emergencias en zonas de difícil acceso.",
    zonasCobertura: ["Centro de Tepezalá", "El Tule", "Puerto de la Concepción", "San Antonio", "Mesillas"],
    tiempoRespuesta: "15-25 minutos",
    personal: 15,
    personalActivo: 15,
    unidades: 3,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad Rural", "1 Ambulancia"]
  },
  {
    id: "ags-cosio",
    slug: "estacion-bomberos-cosio",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de Cosío",
    nombreCorto: "Estación de Bomberos Cosío",
    direccion: "Calle Morelos 78",
    colonia: "Centro",
    codigoPostal: "20470",
    municipio: "Cosío",
    ciudad: "Cosío",
    telefono: "465 959 0345",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas rurales",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Emergencias ganaderas"
    ],
    especialidades: [
      "Zona ganadera del norte",
      "Incendios en pastizales",
      "Atención carretera federal"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.3658, lng: -102.3028 },
    descripcion: "La Estación de Bomberos de Cosío protege el municipio más al norte del estado, con fuerte vocación ganadera. Punto estratégico en la carretera federal hacia Zacatecas.",
    zonasCobertura: ["Centro de Cosío", "Soledad de Arriba", "La Punta de Cosío", "El Salero", "Tanque de Guadalupe"],
    tiempoRespuesta: "15-30 minutos",
    personal: 12,
    personalActivo: 12,
    unidades: 2,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad Rural"]
  },
  {
    id: "ags-el-llano",
    slug: "estacion-bomberos-el-llano",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de El Llano",
    nombreCorto: "Estación de Bomberos El Llano",
    direccion: "Av. Juárez 89",
    colonia: "Centro",
    codigoPostal: "20330",
    municipio: "El Llano",
    ciudad: "Palo Alto",
    telefono: "496 962 0567",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios agrícolas",
      "Rescate vehicular",
      "Control de fugas de gas",
      "Rescate en zonas rurales",
      "Control de fauna silvestre",
      "Retiro de enjambres",
      "Atención carretera"
    ],
    especialidades: [
      "Zona agrícola del oriente",
      "Atención en carretera a San Luis Potosí",
      "Emergencias en comunidades dispersas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 21.9236, lng: -102.0000 },
    descripcion: "La Estación de Bomberos de El Llano atiende el municipio más oriental del estado, punto estratégico en la carretera hacia San Luis Potosí. Zona agrícola con comunidades dispersas.",
    zonasCobertura: ["Palo Alto", "El Llano Centro", "Ojo de Agua", "La Escondida", "El Garabato"],
    tiempoRespuesta: "12-22 minutos",
    personal: 14,
    personalActivo: 14,
    unidades: 2,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad de Rescate"]
  },
  {
    id: "ags-san-jose-gracia",
    slug: "estacion-bomberos-san-jose-gracia",
    estado: "Aguascalientes",
    nombre: "Estación de Bomberos de San José de Gracia",
    nombreCorto: "Estación de Bomberos San José de Gracia",
    direccion: "Plaza Principal 12",
    colonia: "Centro",
    codigoPostal: "20540",
    municipio: "San José de Gracia",
    ciudad: "San José de Gracia",
    telefono: "495 957 0123",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Incendios forestales",
      "Rescate vehicular",
      "Rescate en la Presa Calles",
      "Control de fugas de gas",
      "Rescate acuático",
      "Control de fauna silvestre",
      "Emergencias turísticas"
    ],
    especialidades: [
      "Rescate acuático en Presa Calles",
      "Incendios forestales en Sierra Fría",
      "Atención a zonas turísticas"
    ],
    horario: "24 horas",
    coordenadas: { lat: 22.1500, lng: -102.4167 },
    descripcion: "La Estación de Bomberos de San José de Gracia protege uno de los destinos turísticos más importantes del estado, incluyendo la Presa Calles y zonas boscosas de la Sierra Fría.",
    historia: "San José de Gracia es conocido por la Presa Plutarco Elías Calles, la más grande del estado, y por ser la cuna del expresidente Plutarco Elías Calles. El cuerpo de bomberos está especializado en rescate acuático.",
    equipamiento: [
      "Lanchas de rescate",
      "Equipos de rescate acuático",
      "Unidades forestales todoterreno",
      "Equipos de comunicación de montaña"
    ],
    zonasCobertura: ["Centro de San José de Gracia", "Presa Calles", "Potrero de los López", "La Congoja", "Sierra Fría"],
    tiempoRespuesta: "10-20 minutos",
    personal: 20,
    personalActivo: 20,
    unidades: 4,
    unidadesDisponibles: ["1 Autobomba", "1 Unidad Forestal", "1 Lancha de Rescate", "1 Ambulancia"]
  }
];

// ═══ FUNCIONES AUXILIARES ═══

/**
 * Obtener estación por slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesAguascalientes.find(e => e.slug === slug);
}

/**
 * Obtener estaciones por municipio
 */
export function getEstacionesByMunicipio(municipio: string): Estacion[] {
  return estacionesAguascalientes.filter(e => e.municipio === municipio);
}

/**
 * Obtener todos los municipios únicos
 */
export function getMunicipios(): string[] {
  return [...new Set(estacionesAguascalientes.map(e => e.municipio))].sort();
}

/**
 * Obtener estaciones cercanas (excluyendo la actual)
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];

  return estacionesAguascalientes
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}

/**
 * Obtener estaciones por región
 */
export function getEstacionesPorRegion(region: 'metropolitana' | 'norte' | 'sur' | 'oriente'): Estacion[] {
  const regiones: Record<string, string[]> = {
    metropolitana: ['Aguascalientes', 'Jesús María', 'San Francisco de los Romo'],
    norte: ['Rincón de Romos', 'Cosío', 'Tepezalá', 'Asientos'],
    sur: ['Calvillo', 'San José de Gracia'],
    oriente: ['El Llano', 'Pabellón de Arteaga']
  };

  return estacionesAguascalientes.filter(e => regiones[region]?.includes(e.municipio));
}
