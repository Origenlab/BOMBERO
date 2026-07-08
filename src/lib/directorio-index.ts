/**
 * directorio-index.ts
 * ──────────────────────────────────────────────────────────────────
 * Índice agregado de todas las estaciones de bomberos del directorio.
 * Importa los 32 datasets `estaciones-*.ts` y los expone como una
 * única fuente para:
 *   - Landings programáticas por municipio.
 *   - Landings por especialidad.
 *   - Sitemap segmentado.
 *   - Internal linking.
 *   - Página de teléfonos por estado.
 *
 * Toda la lógica se ejecuta en build time → cero costo runtime.
 * ──────────────────────────────────────────────────────────────────
 */

import type { Estacion } from "@data/types";
import { ESTADOS_MEXICO } from "@data/types";

import { estacionesAguascalientes } from "@data/estaciones-aguascalientes";
import { estacionesBajaCalifornia } from "@data/estaciones-baja-california";
import { estacionesBajaCaliforniaSur } from "@data/estaciones-baja-california-sur";
import { estacionesCampeche } from "@data/estaciones-campeche";
import { estacionesCDMX } from "@data/estaciones-cdmx";
import { estacionesChiapas } from "@data/estaciones-chiapas";
import { estacionesChihuahua } from "@data/estaciones-chihuahua";
import { estacionesCoahuila } from "@data/estaciones-coahuila";
import { estacionesColima } from "@data/estaciones-colima";
import { estacionesDurango } from "@data/estaciones-durango";
import { estacionesEdoMex } from "@data/estaciones-edomex";
import { estacionesGuanajuato } from "@data/estaciones-guanajuato";
import { estacionesGuerrero } from "@data/estaciones-guerrero";
import { estacionesHidalgo } from "@data/estaciones-hidalgo";
import { estacionesJalisco } from "@data/estaciones-jalisco";
import { estacionesMichoacan } from "@data/estaciones-michoacan";
import { estacionesMorelos } from "@data/estaciones-morelos";
import { estacionesNayarit } from "@data/estaciones-nayarit";
import { estacionesNuevoLeon } from "@data/estaciones-nuevo-leon";
import { estacionesOaxaca } from "@data/estaciones-oaxaca";
import { estacionesPuebla } from "@data/estaciones-puebla";
import { estacionesQueretaro } from "@data/estaciones-queretaro";
import { estacionesQuintanaRoo } from "@data/estaciones-quintana-roo";
import { estacionesSanLuisPotosi } from "@data/estaciones-san-luis-potosi";
import { estacionesSinaloa } from "@data/estaciones-sinaloa";
import { estacionesSonora } from "@data/estaciones-sonora";
import { estacionesTabasco } from "@data/estaciones-tabasco";
import { estacionesTamaulipas } from "@data/estaciones-tamaulipas";
import { estacionesTlaxcala } from "@data/estaciones-tlaxcala";
import { estacionesVeracruz } from "@data/estaciones-veracruz";
import { estacionesYucatan } from "@data/estaciones-yucatan";
import { estacionesZacatecas } from "@data/estaciones-zacatecas";

// ────────────────────────────────────────────────────────────────────
// Helpers de slugificación
// ────────────────────────────────────────────────────────────────────

/** Convierte un texto en kebab-case ASCII sin acentos ni símbolos. */
export function toSlug(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // sin acentos
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ────────────────────────────────────────────────────────────────────
// Mapa estado-slug → estaciones
// ────────────────────────────────────────────────────────────────────

export const ESTACIONES_POR_ESTADO_SLUG: Record<string, Estacion[]> = {
  "aguascalientes": estacionesAguascalientes,
  "baja-california": estacionesBajaCalifornia,
  "baja-california-sur": estacionesBajaCaliforniaSur,
  "campeche": estacionesCampeche,
  "chiapas": estacionesChiapas,
  "chihuahua": estacionesChihuahua,
  "ciudad-de-mexico": estacionesCDMX,
  "coahuila": estacionesCoahuila,
  "colima": estacionesColima,
  "durango": estacionesDurango,
  "estado-de-mexico": estacionesEdoMex,
  "guanajuato": estacionesGuanajuato,
  "guerrero": estacionesGuerrero,
  "hidalgo": estacionesHidalgo,
  "jalisco": estacionesJalisco,
  "michoacan": estacionesMichoacan,
  "morelos": estacionesMorelos,
  "nayarit": estacionesNayarit,
  "nuevo-leon": estacionesNuevoLeon,
  "oaxaca": estacionesOaxaca,
  "puebla": estacionesPuebla,
  "queretaro": estacionesQueretaro,
  "quintana-roo": estacionesQuintanaRoo,
  "san-luis-potosi": estacionesSanLuisPotosi,
  "sinaloa": estacionesSinaloa,
  "sonora": estacionesSonora,
  "tabasco": estacionesTabasco,
  "tamaulipas": estacionesTamaulipas,
  "tlaxcala": estacionesTlaxcala,
  "veracruz": estacionesVeracruz,
  "yucatan": estacionesYucatan,
  "zacatecas": estacionesZacatecas,
};

// ────────────────────────────────────────────────────────────────────
// Lookup helpers
// ────────────────────────────────────────────────────────────────────

/** Datos del estado por slug (nombre oficial, capital, código, región…). */
export function getEstadoInfo(slug: string) {
  return ESTADOS_MEXICO.find((e) => e.slug === slug);
}

/** Todas las estaciones del estado. */
export function getEstacionesEstado(estadoSlug: string): Estacion[] {
  return ESTACIONES_POR_ESTADO_SLUG[estadoSlug] ?? [];
}

// ────────────────────────────────────────────────────────────────────
// Municipios — agrupador y enumerador
// ────────────────────────────────────────────────────────────────────

export interface MunicipioRow {
  estadoSlug: string;
  estadoNombre: string;
  municipio: string; // nombre legible (acentos)
  municipioSlug: string;
  estaciones: Estacion[];
  totalEstaciones: number;
  telefonos: string[];
  serviciosUnicos: string[];
  especialidadesUnicas: string[];
}

/** Devuelve todos los pares (estado, municipio) para getStaticPaths. */
export function getAllMunicipios(): MunicipioRow[] {
  const result: MunicipioRow[] = [];
  for (const [estadoSlug, estaciones] of Object.entries(ESTACIONES_POR_ESTADO_SLUG)) {
    const estadoInfo = getEstadoInfo(estadoSlug);
    if (!estadoInfo) continue;

    const grupo: Record<string, Estacion[]> = {};
    for (const est of estaciones) {
      const muni = est.municipio || est.ciudad || "Sin municipio";
      if (!grupo[muni]) grupo[muni] = [];
      grupo[muni].push(est);
    }
    for (const [municipio, ests] of Object.entries(grupo)) {
      const telefonos = Array.from(
        new Set(ests.map((e) => e.telefono).filter((t): t is string => Boolean(t))),
      );
      const serviciosUnicos = Array.from(
        new Set(ests.flatMap((e) => e.servicios || [])),
      ).sort();
      const especialidadesUnicas = Array.from(
        new Set(ests.flatMap((e) => especialidadesCanonicasDeEstacion(e))),
      ).sort();

      result.push({
        estadoSlug,
        estadoNombre: estadoInfo.nombre,
        municipio,
        municipioSlug: toSlug(municipio),
        estaciones: ests,
        totalEstaciones: ests.length,
        telefonos,
        serviciosUnicos,
        especialidadesUnicas,
      });
    }
  }
  return result;
}

/** Devuelve municipios agrupados por estado (para el hub `/directorio/{estado}/municipios/`). */
export function getMunicipiosByEstado(estadoSlug: string): MunicipioRow[] {
  return getAllMunicipios().filter((m) => m.estadoSlug === estadoSlug);
}

/** Encuentra un municipio específico. */
export function findMunicipio(estadoSlug: string, municipioSlug: string): MunicipioRow | undefined {
  return getAllMunicipios().find(
    (m) => m.estadoSlug === estadoSlug && m.municipioSlug === municipioSlug,
  );
}

// ────────────────────────────────────────────────────────────────────
// Especialidades
// ────────────────────────────────────────────────────────────────────

export interface EspecialidadRow {
  estadoSlug: string;
  estadoNombre: string;
  especialidad: string;
  especialidadSlug: string;
  estaciones: Estacion[];
  totalEstaciones: number;
}

/** Mapa canónico de especialidades → slug + descripción + producto enlazado. */
export const ESPECIALIDADES_CANONICAS: Record<
  string,
  { label: string; slug: string; descripcion: string; productoHref: string }
> = {
  HAZMAT: {
    label: "HAZMAT — Materiales Peligrosos",
    slug: "hazmat",
    descripcion:
      "Atención de derrames químicos, fugas industriales, contenedores comprometidos y emergencias con materiales peligrosos.",
    productoHref: "/productos/hazmat/",
  },
  ARFF: {
    label: "ARFF — Aeroportuario",
    slug: "arff",
    descripcion:
      "Aircraft Rescue and Fire Fighting: respuesta a emergencias en aeropuertos certificados ICAO.",
    productoHref: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/",
  },
  "Rescate Acuático": {
    label: "Rescate Acuático",
    slug: "rescate-acuatico",
    descripcion: "Operaciones en ríos, presas, cenotes, costa y embarcaciones turísticas.",
    productoHref: "/productos/rescate-acuatico/",
  },
  "Rescate Vertical": {
    label: "Rescate Vertical",
    slug: "rescate-vertical",
    descripcion: "Rescate en alturas, espacios confinados, edificios y estructuras colapsadas.",
    productoHref: "/productos/rescate-vertical/",
  },
  "Rescate Vehicular": {
    label: "Rescate Vehicular",
    slug: "rescate-vehicular",
    descripcion: "Excarcelación en accidentes de tránsito con quijadas y separadores hidráulicos.",
    productoHref: "/productos/herramientas-rescate/",
  },
  "Rescate Urbano": {
    label: "Rescate Urbano (USAR)",
    slug: "rescate-urbano",
    descripcion: "Búsqueda y rescate urbano en colapsos estructurales y desastres.",
    productoHref: "/productos/herramientas-rescate/",
  },
  "Incendios Forestales": {
    label: "Incendios Forestales",
    slug: "incendios-forestales",
    descripcion: "Combate de incendios forestales con equipo NFPA 1977 y coordinación CONAFOR.",
    productoHref: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/",
  },
  "Incendios Industriales": {
    label: "Incendios Industriales",
    slug: "incendios-industriales",
    descripcion: "Combate de incendios en parques industriales, plantas y refinerías.",
    productoHref: "/productos/trajes-para-bomberos/",
  },
  Buceo: {
    label: "Buceo Técnico",
    slug: "buceo",
    descripcion: "Inmersiones técnicas en cenotes, cavernas y estructuras sumergidas.",
    productoHref: "/productos/rescate-acuatico/",
  },
  K9: {
    label: "Brigada K9",
    slug: "k9",
    descripcion: "Equipos caninos para búsqueda y rescate.",
    productoHref: "/productos/tecnologia/",
  },
  "Eventos Masivos": {
    label: "Eventos Masivos",
    slug: "eventos-masivos",
    descripcion: "Cobertura preventiva en conciertos, ferias y manifestaciones.",
    productoHref: "/productos/trajes-para-bomberos/",
  },
  "Emergencias Volcánicas": {
    label: "Emergencias Volcánicas",
    slug: "emergencias-volcanicas",
    descripcion: "Protocolos de evacuación y atención en zonas volcánicamente activas.",
    productoHref: "/productos/trajes-para-bomberos/",
  },
  "Emergencias Sísmicas": {
    label: "Emergencias Sísmicas",
    slug: "emergencias-sismicas",
    descripcion: "Respuesta a sismos: rescate, evaluación estructural y atención prehospitalaria.",
    productoHref: "/productos/herramientas-rescate/",
  },
};

/** Normaliza un texto (especialidad declarada o servicio) a una especialidad canónica, o null. */
export function mapEspecialidadCanonica(esp: string): string | null {
  if (/hazmat/i.test(esp)) return "HAZMAT";
  if (/arff/i.test(esp)) return "ARFF";
  if (/acuat/i.test(esp)) return "Rescate Acuático";
  if (/vertical|alturas/i.test(esp)) return "Rescate Vertical";
  if (/vehicular|excarcel/i.test(esp)) return "Rescate Vehicular";
  if (/urbano|usar/i.test(esp)) return "Rescate Urbano";
  if (/forestal/i.test(esp)) return "Incendios Forestales";
  if (/industri/i.test(esp)) return "Incendios Industriales";
  if (/buceo/i.test(esp)) return "Buceo";
  if (/^k9|canino/i.test(esp)) return "K9";
  if (/masiv|evento/i.test(esp)) return "Eventos Masivos";
  if (/volc[áa]n/i.test(esp)) return "Emergencias Volcánicas";
  if (/s[íi]smic|sismo|terremoto/i.test(esp)) return "Emergencias Sísmicas";
  return null;
}

/**
 * Especialidades canónicas de una estación. Prioriza el campo `especialidades`;
 * si no mapea a ninguna canónica (muchos estados solo declaran `servicios`), las
 * deriva de los servicios. No fabrica datos: clasifica lo que la estación ya declara.
 */
export function especialidadesCanonicasDeEstacion(est: Estacion): string[] {
  const desde = (fuente: string[]) =>
    Array.from(
      new Set(fuente.map(mapEspecialidadCanonica).filter((x): x is string => Boolean(x))),
    );
  const porEspecialidad = desde(((est.especialidades ?? []) as string[]));
  return porEspecialidad.length ? porEspecialidad : desde(est.servicios ?? []);
}

/** Devuelve todos los pares (estado, especialidad) para getStaticPaths. */
export function getAllEspecialidades(): EspecialidadRow[] {
  const result: EspecialidadRow[] = [];
  for (const [estadoSlug, estaciones] of Object.entries(ESTACIONES_POR_ESTADO_SLUG)) {
    const estadoInfo = getEstadoInfo(estadoSlug);
    if (!estadoInfo) continue;

    const grupo: Record<string, Estacion[]> = {};
    for (const est of estaciones) {
      for (const canonico of especialidadesCanonicasDeEstacion(est)) {
        if (!grupo[canonico]) grupo[canonico] = [];
        if (!grupo[canonico].includes(est)) grupo[canonico].push(est);
      }
    }
    for (const [esp, ests] of Object.entries(grupo)) {
      const info = ESPECIALIDADES_CANONICAS[esp];
      if (!info) continue;
      result.push({
        estadoSlug,
        estadoNombre: estadoInfo.nombre,
        especialidad: info.label,
        especialidadSlug: info.slug,
        estaciones: ests,
        totalEstaciones: ests.length,
      });
    }
  }
  return result;
}

/** Especialidades disponibles en un estado. */
export function getEspecialidadesEstado(estadoSlug: string): EspecialidadRow[] {
  return getAllEspecialidades().filter((e) => e.estadoSlug === estadoSlug);
}

/** Lookup específico. */
export function findEspecialidad(
  estadoSlug: string,
  especialidadSlug: string,
): EspecialidadRow | undefined {
  return getAllEspecialidades().find(
    (e) => e.estadoSlug === estadoSlug && e.especialidadSlug === especialidadSlug,
  );
}
