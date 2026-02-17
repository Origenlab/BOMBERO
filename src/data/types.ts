/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║  TIPOS COMPARTIDOS - DIRECTORIO DE BOMBEROS DE MÉXICO                     ║
 * ║  Interfaces y tipos para todas las estaciones de bomberos                 ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */

/**
 * Interfaz principal para estaciones de bomberos
 * Usada por todos los estados del directorio
 *
 * IMPORTANTE: Esta interfaz es el estándar para TODAS las estaciones.
 * Todos los archivos de datos deben importar este tipo.
 */
export interface Estacion {
  /** Identificador único de la estación */
  id: string;

  /** Nombre completo de la estación */
  nombre: string;

  /** Nombre corto de la estación (opcional) */
  nombreCorto?: string;

  /** Slug para URL amigable */
  slug: string;

  /** Dirección física (calle y número) */
  direccion: string;

  /** Colonia o fraccionamiento (opcional) */
  colonia?: string;

  /** Ciudad o localidad */
  ciudad: string;

  /** Municipio (para estados que lo requieren) */
  municipio?: string;

  /** Alcaldía (específico para CDMX) */
  alcaldia?: string;

  /** Estado de la república */
  estado: string;

  /** Código postal (5 dígitos) */
  codigoPostal: string;

  /** Teléfono principal de la estación */
  telefono: string;

  /** Teléfono de emergencias (generalmente 911) */
  telefonoEmergencia?: string;

  /** Correo electrónico de contacto */
  email?: string;

  /** Horario de atención (generalmente "24 horas") */
  horario: string;

  /** Coordenadas geográficas */
  coordenadas: {
    lat: number;
    lng: number;
  };

  /** Lista de servicios que ofrece la estación */
  servicios: string[];

  /** Especialidades de la estación (opcional) */
  especialidades?: string[];

  /** Equipamiento disponible (lista, opcional) */
  equipamiento?: string[];

  /** Número de personal activo (opcional) */
  personal?: number;

  /** Personal activo (alias para compatibilidad) */
  personalActivo?: number;

  /** Número de unidades/vehículos (opcional) */
  unidades?: number;

  /** Lista descriptiva de unidades disponibles (opcional) */
  unidadesDisponibles?: string[];

  /** Descripción detallada de la estación */
  descripcion: string;

  /** Historia de la estación (opcional, contenido SEO rico) */
  historia?: string;

  /** Zonas de cobertura de la estación (opcional) */
  zonasCobertura?: string[];

  /** Tiempo promedio de respuesta (opcional) */
  tiempoRespuesta?: string;

  /** Año de fundación (opcional) */
  fechaFundacion?: string;

  /** Redes sociales (opcional) */
  redes?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

/**
 * Interfaz para datos SEO del estado
 */
export interface EstadoSEO {
  estado: string;
  estadoCorto: string;
  codigo: string;
  capital: string;
  gentilicio: string;
  region: string;
  poblacion: number;
  superficie_km2: number;
  municipios: number;
}

/**
 * Interfaz para estadísticas del estado
 */
export interface EstadisticasEstado {
  total_estaciones: number;
  total_bomberos: number;
  total_unidades: number;
  municipios_cubiertos: number;
}

/**
 * Tipo para niveles de riesgo
 */
export type NivelRiesgo = 'muy alto' | 'alto' | 'medio' | 'bajo';

/**
 * Interfaz para contexto de zona
 */
export interface ContextoZona {
  tipo: string;
  descripcion: string;
  keywords: string[];
  color: string;
  icono: string;
}

/**
 * Interfaz para metadatos SEO
 */
export interface MetaSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}
