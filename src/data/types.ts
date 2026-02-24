

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// TIPOS BASE
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export interface Coordenadas {
  lat: number;
  lng: number;
}


export interface RedesSociales {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  sitioWeb?: string;
}


export type NivelRiesgo = 'critico' | 'muy_alto' | 'alto' | 'medio' | 'bajo';


export type TipoEspecialidad =
  | 'HAZMAT'
  | 'ARFF'
  | 'Rescate Urbano'
  | 'Rescate Acuático'
  | 'Rescate Vertical'
  | 'Rescate Vehicular'
  | 'Incendios Forestales'
  | 'Incendios Industriales'
  | 'Buceo'
  | 'K9'
  | 'Eventos Masivos'
  | 'Emergencias Volcánicas'
  | 'Emergencias Sísmicas'
  | string;


export type RegionMexico =
  | 'Norte'
  | 'Noroeste'
  | 'Noreste'
  | 'Centro'
  | 'Centro-Occidente'
  | 'Occidente'
  | 'Sur'
  | 'Sureste'
  | 'Península de Yucatán'
  | 'Golfo'
  | 'Pacífico';

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// INTERFAZ PRINCIPAL: ESTACIÓN DE BOMBEROS
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export interface Estacion {
  // ─── Identificación ───

  id?: string;


  nombre: string;


  nombreCorto?: string;


  slug: string;

  // ─── Ubicación ───

  direccion: string;


  colonia?: string;


  ciudad: string;


  municipio?: string;


  alcaldia?: string;


  estado: string;


  cp?: string;
  codigoPostal?: string;


  coordenadas?: Coordenadas;

  // ─── Contacto ───

  telefono: string;


  telefono2?: string;


  telefonoEmergencia?: string;


  email?: string;


  redes?: RedesSociales;

  // ─── Operación ───

  horario: string;


  tiempoRespuesta?: string;

  // ─── Servicios y Capacidades ───

  servicios: string[];


  especialidades?: TipoEspecialidad[];


  equipamiento?: string[];


  personal?: number;
  personalActivo?: number;


  unidades?: number;


  unidadesDisponibles?: string[];

  // ─── Cobertura ───

  cobertura?: string[];
  zonasCobertura?: string[];


  zona?: string;

  // ─── Información Adicional ───

  descripcion?: string;


  historia?: string;


  comandancia?: string;


  fundacion?: string;
  fechaFundacion?: string;


  imagen?: string;


  galeria?: string[];
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// INTERFAZ: CONFIGURACIÓN DE ESTADO
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export interface DemografiaEstado {
  poblacion: string | number;
  superficie: string;
  densidad?: string;
  municipios: number;
  capital: string;
  gentilicio: string;
}


export interface InfraestructuraEstado {
  aeropuertos?: {
    nombre: string;
    codigo: string;
    tipo: 'Internacional' | 'Nacional' | 'Regional';
    pasajeros?: string;
  }[];
  autopistas?: string[];
  puertos?: string[];
  ferrocarriles?: string[];
  zonasIndustriales?: string[];
}


export interface TurismoEstado {
  visitantesAnuales?: string;
  atracciones?: string[];
  pueblosMagicos?: {
    nombre: string;
    atraccion: string;
  }[];
  patrimonioUNESCO?: {
    nombre: string;
    año: number;
    tipo: 'Cultural' | 'Natural' | 'Mixto';
  }[];
}


export interface RiesgosEstado {
  sismico?: string;
  volcanico?: string;
  hidrologico?: string;
  incendiosForestales?: string;
  industrial?: string;
  costero?: string;
  otros?: string[];
}


export interface KeywordsSEO {
  principales: string[];
  ciudades?: string[];
  servicios?: string[];
  emergencias?: string[];
  industrial?: string[];
  turismo?: string[];
  geografico?: string[];
  [key: string]: string[] | undefined;
}


export interface TelefonosEmergencia {
  emergencias: string;
  bomberosEstatal?: string;
  bomberosCapital?: string;
  proteccionCivil?: string;
  cruzRoja?: string;
  policia?: string;
  [key: string]: string | undefined;
}


export interface EstadoSEO {
  // Identificación
  estado: string;
  slug: string;
  codigo?: string;
  capital: string;
  gentilicio: string;

  // Demografía
  poblacion: string | number;
  superficie?: string;
  densidad?: string;
  municipios: number;
  region?: RegionMexico;

  // Economía (opcional)
  economia?: {
    pib?: string;
    industrias?: string[];
    sectores?: string[];
  };

  // Infraestructura
  infraestructura?: InfraestructuraEstado;

  // Turismo
  turismo?: TurismoEstado;

  // Riesgos
  riesgos?: RiesgosEstado;

  // Emergencias
  emergencias: TelefonosEmergencia;

  // SEO
  keywords: KeywordsSEO;
  metaDescripcion: string;
  ogTitle?: string;
  ogDescription?: string;
}


export interface ZonaConfig {
  id: string;
  nombre: string;
  icono: string;
  color: string;
  descripcion: string;
  riesgos?: string[];
  caracteristicas?: string[];
}


export interface ContextoZona {
  tipo: string;
  descripcion: string;
  riesgos: string[];
  caracteristicas: string[];
  keywords?: string[];
  color?: string;
  icono?: string;
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// INTERFAZ: METADATOS SEO
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export interface MetaSEO {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}


export interface EstadisticasEstado {
  totalEstaciones: number;
  totalBomberos?: number;
  totalUnidades?: number;
  municipiosCubiertos?: number;
  poblacionCubierta?: string;
  zonasCount?: number;
}

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// CONSTANTES: ESTADOS DE MÉXICO
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export const ESTADOS_MEXICO = [
  { nombre: 'Aguascalientes', slug: 'aguascalientes', codigo: 'AGS', capital: 'Aguascalientes', region: 'Centro' },
  { nombre: 'Baja California', slug: 'baja-california', codigo: 'BC', capital: 'Mexicali', region: 'Noroeste' },
  { nombre: 'Baja California Sur', slug: 'baja-california-sur', codigo: 'BCS', capital: 'La Paz', region: 'Noroeste' },
  { nombre: 'Campeche', slug: 'campeche', codigo: 'CAM', capital: 'Campeche', region: 'Sureste' },
  { nombre: 'Chiapas', slug: 'chiapas', codigo: 'CHIS', capital: 'Tuxtla Gutiérrez', region: 'Sureste' },
  { nombre: 'Chihuahua', slug: 'chihuahua', codigo: 'CHIH', capital: 'Chihuahua', region: 'Norte' },
  { nombre: 'Ciudad de México', slug: 'ciudad-de-mexico', codigo: 'CDMX', capital: 'Ciudad de México', region: 'Centro' },
  { nombre: 'Coahuila', slug: 'coahuila', codigo: 'COAH', capital: 'Saltillo', region: 'Noreste' },
  { nombre: 'Colima', slug: 'colima', codigo: 'COL', capital: 'Colima', region: 'Occidente' },
  { nombre: 'Durango', slug: 'durango', codigo: 'DGO', capital: 'Durango', region: 'Norte' },
  { nombre: 'Estado de México', slug: 'estado-de-mexico', codigo: 'EDOMEX', capital: 'Toluca', region: 'Centro' },
  { nombre: 'Guanajuato', slug: 'guanajuato', codigo: 'GTO', capital: 'Guanajuato', region: 'Centro' },
  { nombre: 'Guerrero', slug: 'guerrero', codigo: 'GRO', capital: 'Chilpancingo', region: 'Sur' },
  { nombre: 'Hidalgo', slug: 'hidalgo', codigo: 'HGO', capital: 'Pachuca', region: 'Centro' },
  { nombre: 'Jalisco', slug: 'jalisco', codigo: 'JAL', capital: 'Guadalajara', region: 'Occidente' },
  { nombre: 'Michoacán', slug: 'michoacan', codigo: 'MICH', capital: 'Morelia', region: 'Occidente' },
  { nombre: 'Morelos', slug: 'morelos', codigo: 'MOR', capital: 'Cuernavaca', region: 'Centro' },
  { nombre: 'Nayarit', slug: 'nayarit', codigo: 'NAY', capital: 'Tepic', region: 'Occidente' },
  { nombre: 'Nuevo León', slug: 'nuevo-leon', codigo: 'NL', capital: 'Monterrey', region: 'Noreste' },
  { nombre: 'Oaxaca', slug: 'oaxaca', codigo: 'OAX', capital: 'Oaxaca', region: 'Sur' },
  { nombre: 'Puebla', slug: 'puebla', codigo: 'PUE', capital: 'Puebla', region: 'Centro' },
  { nombre: 'Querétaro', slug: 'queretaro', codigo: 'QRO', capital: 'Querétaro', region: 'Centro' },
  { nombre: 'Quintana Roo', slug: 'quintana-roo', codigo: 'QROO', capital: 'Chetumal', region: 'Sureste' },
  { nombre: 'San Luis Potosí', slug: 'san-luis-potosi', codigo: 'SLP', capital: 'San Luis Potosí', region: 'Centro' },
  { nombre: 'Sinaloa', slug: 'sinaloa', codigo: 'SIN', capital: 'Culiacán', region: 'Noroeste' },
  { nombre: 'Sonora', slug: 'sonora', codigo: 'SON', capital: 'Hermosillo', region: 'Noroeste' },
  { nombre: 'Tabasco', slug: 'tabasco', codigo: 'TAB', capital: 'Villahermosa', region: 'Sureste' },
  { nombre: 'Tamaulipas', slug: 'tamaulipas', codigo: 'TAMPS', capital: 'Ciudad Victoria', region: 'Noreste' },
  { nombre: 'Tlaxcala', slug: 'tlaxcala', codigo: 'TLAX', capital: 'Tlaxcala', region: 'Centro' },
  { nombre: 'Veracruz', slug: 'veracruz', codigo: 'VER', capital: 'Xalapa', region: 'Golfo' },
  { nombre: 'Yucatán', slug: 'yucatan', codigo: 'YUC', capital: 'Mérida', region: 'Sureste' },
  { nombre: 'Zacatecas', slug: 'zacatecas', codigo: 'ZAC', capital: 'Zacatecas', region: 'Centro' },
] as const;


export const COLORES_REGION: Record<string, { primary: string; secondary: string; accent: string }> = {
  Norte: { primary: '#b91c1c', secondary: '#dc2626', accent: '#fbbf24' },
  Noroeste: { primary: '#0369a1', secondary: '#0ea5e9', accent: '#f59e0b' },
  Noreste: { primary: '#1d4ed8', secondary: '#3b82f6', accent: '#f97316' },
  Centro: { primary: '#7c3aed', secondary: '#8b5cf6', accent: '#ec4899' },
  Occidente: { primary: '#1e3a8a', secondary: '#3b82f6', accent: '#f59e0b' },
  Sur: { primary: '#059669', secondary: '#10b981', accent: '#f59e0b' },
  Sureste: { primary: '#0891b2', secondary: '#06b6d4', accent: '#fbbf24' },
  Golfo: { primary: '#0284c7', secondary: '#0ea5e9', accent: '#22c55e' },
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// FUNCIONES UTILITARIAS
// ═══════════════════════════════════════════════════════════════════════════════════════════════


export function generarMetaSEOEstacion(estacion: Estacion, estadoNombre: string): MetaSEO {
  const serviciosResumen = estacion.servicios.slice(0, 3).join(', ');
  const cobertura = estacion.cobertura?.slice(0, 3).join(', ') || estacion.ciudad;

  return {
    title: `${estacion.nombre} | Bomberos ${estacion.ciudad}, ${estadoNombre}`,
    description: `${estacion.nombre} en ${estacion.direccion}. Tel: ${estacion.telefono}. Servicios: ${serviciosResumen}. Cobertura: ${cobertura}. Atención 24/7.`,
    keywords: `bomberos ${estacion.ciudad.toLowerCase()}, ${estacion.nombre.toLowerCase()}, emergencias ${estacion.ciudad.toLowerCase()}, ${estadoNombre.toLowerCase()}`,
    canonical: `https://bombero.mx/directorio/${estadoNombre.toLowerCase().replace(/\s+/g, '-')}/${estacion.slug}`
  };
}


export function getCodigoPostal(estacion: Estacion): string {
  return estacion.cp || estacion.codigoPostal || '';
}


export function getCobertura(estacion: Estacion): string[] {
  return estacion.cobertura || estacion.zonasCobertura || [];
}


export function formatTelefono(telefono: string): string {
  return telefono.replace(/\D/g, '');
}


export function getGoogleMapsUrl(coordenadas: Coordenadas): string {
  return `https://www.google.com/maps?q=${coordenadas.lat},${coordenadas.lng}`;
}


export function generarSchemaEstacion(estacion: Estacion, estadoNombre: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion || `Estación de bomberos en ${estacion.ciudad}, ${estadoNombre}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": estadoNombre,
      "postalCode": getCodigoPostal(estacion),
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    ...(estacion.coordenadas && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": estacion.coordenadas.lat,
        "longitude": estacion.coordenadas.lng
      }
    }),
    ...(estacion.cobertura && {
      "areaServed": estacion.cobertura.map(area => ({
        "@type": "City",
        "name": area
      }))
    })
  };
}
