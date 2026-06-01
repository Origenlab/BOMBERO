/**
 * directorio-stats.ts
 * ──────────────────────────────────────────────────────────────────
 * Fuente única de verdad para los conteos de estaciones por estado.
 * Calcula los números directamente del array exportado por cada
 * archivo `estaciones-*.ts`, garantizando que el hub `/directorio/`
 * y cualquier otra vista siempre muestren los mismos totales.
 *
 * NO duplicar conteos en otros lugares — importar de aquí.
 * ──────────────────────────────────────────────────────────────────
 */

import { estacionesAguascalientes } from "./estaciones-aguascalientes";
import { estacionesBajaCalifornia } from "./estaciones-baja-california";
import { estacionesBajaCaliforniaSur } from "./estaciones-baja-california-sur";
import { estacionesCampeche } from "./estaciones-campeche";
import { estacionesCDMX } from "./estaciones-cdmx";
import { estacionesChiapas } from "./estaciones-chiapas";
import { estacionesChihuahua } from "./estaciones-chihuahua";
import { estacionesCoahuila } from "./estaciones-coahuila";
import { estacionesColima } from "./estaciones-colima";
import { estacionesDurango } from "./estaciones-durango";
import { estacionesEdoMex } from "./estaciones-edomex";
import { estacionesGuanajuato } from "./estaciones-guanajuato";
import { estacionesGuerrero } from "./estaciones-guerrero";
import { estacionesHidalgo } from "./estaciones-hidalgo";
import { estacionesJalisco } from "./estaciones-jalisco";
import { estacionesMichoacan } from "./estaciones-michoacan";
import { estacionesMorelos } from "./estaciones-morelos";
import { estacionesNayarit } from "./estaciones-nayarit";
import { estacionesNuevoLeon } from "./estaciones-nuevo-leon";
import { estacionesOaxaca } from "./estaciones-oaxaca";
import { estacionesPuebla } from "./estaciones-puebla";
import { estacionesQueretaro } from "./estaciones-queretaro";
import { estacionesQuintanaRoo } from "./estaciones-quintana-roo";
import { estacionesSanLuisPotosi } from "./estaciones-san-luis-potosi";
import { estacionesSinaloa } from "./estaciones-sinaloa";
import { estacionesSonora } from "./estaciones-sonora";
import { estacionesTabasco } from "./estaciones-tabasco";
import { estacionesTamaulipas } from "./estaciones-tamaulipas";
import { estacionesTlaxcala } from "./estaciones-tlaxcala";
import { estacionesVeracruz } from "./estaciones-veracruz";
import { estacionesYucatan } from "./estaciones-yucatan";
import { estacionesZacatecas } from "./estaciones-zacatecas";

/** Conteo real de estaciones por slug del estado. */
export const ESTACIONES_POR_ESTADO: Record<string, number> = {
  "aguascalientes": estacionesAguascalientes.length,
  "baja-california": estacionesBajaCalifornia.length,
  "baja-california-sur": estacionesBajaCaliforniaSur.length,
  "campeche": estacionesCampeche.length,
  "chiapas": estacionesChiapas.length,
  "chihuahua": estacionesChihuahua.length,
  "ciudad-de-mexico": estacionesCDMX.length,
  "coahuila": estacionesCoahuila.length,
  "colima": estacionesColima.length,
  "durango": estacionesDurango.length,
  "estado-de-mexico": estacionesEdoMex.length,
  "guanajuato": estacionesGuanajuato.length,
  "guerrero": estacionesGuerrero.length,
  "hidalgo": estacionesHidalgo.length,
  "jalisco": estacionesJalisco.length,
  "michoacan": estacionesMichoacan.length,
  "morelos": estacionesMorelos.length,
  "nayarit": estacionesNayarit.length,
  "nuevo-leon": estacionesNuevoLeon.length,
  "oaxaca": estacionesOaxaca.length,
  "puebla": estacionesPuebla.length,
  "queretaro": estacionesQueretaro.length,
  "quintana-roo": estacionesQuintanaRoo.length,
  "san-luis-potosi": estacionesSanLuisPotosi.length,
  "sinaloa": estacionesSinaloa.length,
  "sonora": estacionesSonora.length,
  "tabasco": estacionesTabasco.length,
  "tamaulipas": estacionesTamaulipas.length,
  "tlaxcala": estacionesTlaxcala.length,
  "veracruz": estacionesVeracruz.length,
  "yucatan": estacionesYucatan.length,
  "zacatecas": estacionesZacatecas.length,
};

/** Total nacional de estaciones registradas en el directorio. */
export const TOTAL_ESTACIONES_NACIONAL: number = Object.values(
  ESTACIONES_POR_ESTADO,
).reduce((a, b) => a + b, 0);

/** Total de estados con cobertura publicada. */
export const TOTAL_ESTADOS: number = Object.keys(ESTACIONES_POR_ESTADO).length;

/** Fecha de la última verificación editorial del directorio (ISO). */
export const DIRECTORIO_VERIFICADO_ISO = "2026-05-30";

/** Fecha legible para mostrar al usuario. */
export const DIRECTORIO_VERIFICADO_LEGIBLE = "30 de mayo de 2026";
