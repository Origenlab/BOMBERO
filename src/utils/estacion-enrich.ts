/**
 * estacion-enrich.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Enriquecimiento NO destructivo de fichas de estación para el directorio.
 *
 * Objetivo: que las 722 estaciones rendericen contenido rico y único aunque
 * su registro original tenga campos vacíos, SIN inventar datos duros (tiempos
 * de respuesta, historia, personal, coordenadas, CP). Solo se generan campos
 * DERIVADOS de información ya presente (nombre, ciudad, servicios, dirección).
 *
 * Reglas:
 *   - Nunca sobrescribe un valor existente: solo rellena lo que falta.
 *   - Determinista: misma entrada → misma salida (estable para build/SEO).
 *   - Puro: devuelve una copia; no muta el objeto original.
 * ──────────────────────────────────────────────────────────────────────────
 */

import type { Estacion } from "@data/types";

/** Reglas de inferencia servicio → especialidad (orden = prioridad de aparición). */
const REGLAS_ESPECIALIDAD: { test: RegExp; label: string }[] = [
  { test: /hazmat|materiales? peligros|químic|quimic|fuga[s]? de gas|derrame/i, label: "Materiales peligrosos (HAZMAT)" },
  { test: /forestal|pastizal|incendios? de vegetaci/i, label: "Incendios forestales" },
  { test: /industrial|maquila|manufactura|bodega|fábrica|fabrica|planta/i, label: "Emergencias industriales" },
  { test: /aeroport|arff|aviaci/i, label: "Rescate aeroportuario (ARFF)" },
  { test: /confinad/i, label: "Rescate en espacios confinados" },
  { test: /vertical|altura|rappel|cuerda/i, label: "Rescate vertical y en altura" },
  { test: /acuátic|acuatic|buceo|agua|inundaci|rí[oa]|playa|mar/i, label: "Rescate acuático" },
  { test: /vehicular|extricaci|excarcelaci|accidente|carretero|vial/i, label: "Rescate vehicular" },
  { test: /estructural|urban[oa]|incendios? estructural|edificio/i, label: "Combate de incendios estructurales" },
  { test: /prehospitalaria|médic|medic|ambulancia|primeros auxilios|paramédic/i, label: "Atención prehospitalaria" },
  { test: /minas?|miner/i, label: "Rescate minero" },
  { test: /enjambre|abeja|avispa/i, label: "Manejo de enjambres" },
  { test: /sísmic|sismic|terremoto|colapso|estructuras colapsadas|usar/i, label: "Búsqueda y rescate urbano (USAR)" },
];

/**
 * Deriva especialidades a partir de la lista de servicios.
 * Devuelve hasta `max` etiquetas únicas. Si no hay coincidencias, garantiza
 * al menos "Combate de incendios estructurales" (servicio base de todo cuerpo).
 */
export function deriveEspecialidades(servicios: string[] = [], max = 6): string[] {
  const texto = servicios.join(" • ");
  const out: string[] = [];
  for (const regla of REGLAS_ESPECIALIDAD) {
    if (regla.test.test(texto) && !out.includes(regla.label)) out.push(regla.label);
    if (out.length >= max) break;
  }
  if (out.length === 0) out.push("Combate de incendios estructurales");
  return out;
}

/** Une elementos de lista en prosa natural: "a, b y c". */
function listaProsa(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  return items.slice(0, -1).join(", ") + " y " + items[items.length - 1];
}

/** Minúscula sólo en la primera letra (para encajar servicios dentro de una frase). */
function aMinusculaInicial(s: string): string {
  return s ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

/**
 * Construye una descripción única y rica en palabras clave a partir de los
 * datos reales de la estación. Pensada para el hero y la meta description.
 */
export function buildDescripcion(estacion: Estacion, estadoNombre: string): string {
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const corto = estacion.nombreCorto ?? estacion.nombre;
  const serviciosTop = (estacion.servicios ?? []).slice(0, 3).map(aMinusculaInicial);
  const lugar = [estacion.colonia, ubicacion].filter(Boolean).join(", ");

  const frase1 = `La ${corto} es una estación de bomberos en ${ubicacion}, ${estadoNombre}`;
  const frase2 = lugar ? `, ubicada en ${lugar}` : "";
  const frase3 = serviciosTop.length
    ? `. Brinda servicios de ${listaProsa(serviciosTop)} las 24 horas, los 365 días del año`
    : ". Brinda atención de emergencias las 24 horas, los 365 días del año";
  const frase4 = `. Para emergencias marca el 911 o llama directamente al ${estacion.telefono}.`;

  return (frase1 + frase2 + frase3 + frase4).replace(/\s+/g, " ").trim();
}

/** Considera "pobre" una descripción ausente o demasiado corta para SEO. */
function descripcionPobre(d?: string): boolean {
  return !d || d.trim().length < 60;
}

/**
 * Devuelve una copia de la estación con los campos DERIVADOS rellenados
 * donde falten. No toca campos con datos reales ni inventa datos duros.
 */
export function enrichEstacion(estacion: Estacion, estadoNombre: string): Estacion {
  const e: Estacion = { ...estacion };

  // Horario: estándar operativo de un cuerpo de bomberos.
  if (!e.horario || e.horario.trim().length === 0) {
    e.horario = "24 horas, los 365 días del año";
  }

  // Código postal: unifica el alias `cp` hacia `codigoPostal` (lo que usa el layout).
  if (!e.codigoPostal && e.cp) {
    e.codigoPostal = e.cp;
  }

  // Especialidades: inferidas de los servicios reales si faltan.
  if (!e.especialidades || e.especialidades.length === 0) {
    e.especialidades = deriveEspecialidades(e.servicios);
  }

  // Descripción: única y rica si está ausente o es demasiado corta.
  if (descripcionPobre(e.descripcion)) {
    e.descripcion = buildDescripcion(e, estadoNombre);
  }

  return e;
}
