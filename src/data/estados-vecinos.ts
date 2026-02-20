/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ESTADOS VECINOS - Gestión Centralizada de Interlinking SEO
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Este archivo centraliza los enlaces entre estados para:
 * 1. Mantener consistencia en el interlinking
 * 2. Garantizar reciprocidad bidireccional
 * 3. Facilitar auditorías SEO
 * 4. Evitar duplicación de código
 *
 * Uso:
 *   import { getEstadosVecinos } from '@data/estados-vecinos';
 *   const vecinos = getEstadosVecinos('zacatecas');
 */

export interface EstadoVecino {
  nombre: string;
  slug: string;
}

/**
 * Mapa completo de estados vecinos de México
 * Basado en fronteras geográficas reales
 */
export const estadosVecinos: Record<string, EstadoVecino[]> = {
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN NOROESTE
  // ═══════════════════════════════════════════════════════════════════════
  "baja-california": [
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Sonora", slug: "sonora" },
  ],

  "baja-california-sur": [
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" },
  ],

  "sonora": [
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Sinaloa", slug: "sinaloa" },
  ],

  "chihuahua": [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Coahuila", slug: "coahuila" },
  ],

  "sinaloa": [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Nayarit", slug: "nayarit" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN NORESTE
  // ═══════════════════════════════════════════════════════════════════════
  "coahuila": [
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Nuevo León", slug: "nuevo-leon" },
  ],

  "nuevo-leon": [
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Zacatecas", slug: "zacatecas" },
  ],

  "tamaulipas": [
    { nombre: "Nuevo León", slug: "nuevo-leon" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN OCCIDENTE
  // ═══════════════════════════════════════════════════════════════════════
  "durango": [
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Sinaloa", slug: "sinaloa" },
  ],

  "zacatecas": [
    { nombre: "Durango", slug: "durango" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Nayarit", slug: "nayarit" },
  ],

  "nayarit": [
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
  ],

  "jalisco": [
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Colima", slug: "colima" },
  ],

  "aguascalientes": [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
  ],

  "colima": [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoacán", slug: "michoacan" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO-NORTE
  // ═══════════════════════════════════════════════════════════════════════
  "san-luis-potosi": [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Nuevo León", slug: "nuevo-leon" },
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
  ],

  "guanajuato": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Querétaro", slug: "queretaro" },
  ],

  "queretaro": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Michoacán", slug: "michoacan" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO
  // ═══════════════════════════════════════════════════════════════════════
  "hidalgo": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Querétaro", slug: "queretaro" },
  ],

  "estado-de-mexico": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Puebla", slug: "puebla" },
  ],

  "ciudad-de-mexico": [
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
  ],

  "morelos": [
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Guerrero", slug: "guerrero" },
  ],

  "tlaxcala": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
  ],

  "puebla": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO-OCCIDENTE
  // ═══════════════════════════════════════════════════════════════════════
  "michoacan": [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Colima", slug: "colima" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Guerrero", slug: "guerrero" },
  ],

  "guerrero": [
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Oaxaca", slug: "oaxaca" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN SUR
  // ═══════════════════════════════════════════════════════════════════════
  "oaxaca": [
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Guerrero", slug: "guerrero" },
  ],

  "chiapas": [
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Tabasco", slug: "tabasco" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN GOLFO
  // ═══════════════════════════════════════════════════════════════════════
  "veracruz": [
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Tabasco", slug: "tabasco" },
  ],

  "tabasco": [
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Campeche", slug: "campeche" },
  ],

  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN PENÍNSULA DE YUCATÁN
  // ═══════════════════════════════════════════════════════════════════════
  "campeche": [
    { nombre: "Tabasco", slug: "tabasco" },
    { nombre: "Yucatán", slug: "yucatan" },
    { nombre: "Quintana Roo", slug: "quintana-roo" },
  ],

  "yucatan": [
    { nombre: "Campeche", slug: "campeche" },
    { nombre: "Quintana Roo", slug: "quintana-roo" },
  ],

  "quintana-roo": [
    { nombre: "Yucatán", slug: "yucatan" },
    { nombre: "Campeche", slug: "campeche" },
  ],
};

/**
 * Obtiene los estados vecinos de un estado dado
 * @param slug - Slug del estado (e.g., "zacatecas")
 * @returns Array de estados vecinos
 */
export function getEstadosVecinos(slug: string): EstadoVecino[] {
  return estadosVecinos[slug] ?? [];
}

/**
 * Verifica si dos estados son vecinos
 * @param slugA - Slug del primer estado
 * @param slugB - Slug del segundo estado
 * @returns true si son vecinos
 */
export function sonEstadosVecinos(slugA: string, slugB: string): boolean {
  const vecinosA = estadosVecinos[slugA];
  return vecinosA?.some(v => v.slug === slugB) ?? false;
}

/**
 * Valida la reciprocidad de todos los enlaces
 * @returns Array de errores de reciprocidad
 */
export function validarReciprocidad(): string[] {
  const errores: string[] = [];

  for (const [estado, vecinos] of Object.entries(estadosVecinos)) {
    for (const vecino of vecinos) {
      const vecinosDelVecino = estadosVecinos[vecino.slug];

      if (!vecinosDelVecino) {
        errores.push(`${vecino.slug} no existe en el mapa de estados`);
        continue;
      }

      const tieneReciprocidad = vecinosDelVecino.some(v => v.slug === estado);

      if (!tieneReciprocidad) {
        errores.push(`${estado} → ${vecino.slug} (sin reciprocidad inversa)`);
      }
    }
  }

  return errores;
}

/**
 * Obtiene estadísticas del mapa de interlinking
 */
export function getEstadisticasInterlinking(): {
  totalEstados: number;
  totalEnlaces: number;
  promedioVecinos: number;
  estadoMasConectado: string;
  estadoMenosConectado: string;
} {
  const estados = Object.entries(estadosVecinos);
  const totalEnlaces = estados.reduce((sum, [, vecinos]) => sum + vecinos.length, 0);

  const ordenados = estados.sort((a, b) => b[1].length - a[1].length);

  return {
    totalEstados: estados.length,
    totalEnlaces,
    promedioVecinos: Number((totalEnlaces / estados.length).toFixed(1)),
    estadoMasConectado: ordenados[0]?.[0] ?? "",
    estadoMenosConectado: ordenados[ordenados.length - 1]?.[0] ?? "",
  };
}

/**
 * Lista de todos los estados de México con sus nombres completos
 */
export const todosLosEstados: EstadoVecino[] = [
  { nombre: "Aguascalientes", slug: "aguascalientes" },
  { nombre: "Baja California", slug: "baja-california" },
  { nombre: "Baja California Sur", slug: "baja-california-sur" },
  { nombre: "Campeche", slug: "campeche" },
  { nombre: "Chiapas", slug: "chiapas" },
  { nombre: "Chihuahua", slug: "chihuahua" },
  { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
  { nombre: "Coahuila", slug: "coahuila" },
  { nombre: "Colima", slug: "colima" },
  { nombre: "Durango", slug: "durango" },
  { nombre: "Estado de México", slug: "estado-de-mexico" },
  { nombre: "Guanajuato", slug: "guanajuato" },
  { nombre: "Guerrero", slug: "guerrero" },
  { nombre: "Hidalgo", slug: "hidalgo" },
  { nombre: "Jalisco", slug: "jalisco" },
  { nombre: "Michoacán", slug: "michoacan" },
  { nombre: "Morelos", slug: "morelos" },
  { nombre: "Nayarit", slug: "nayarit" },
  { nombre: "Nuevo León", slug: "nuevo-leon" },
  { nombre: "Oaxaca", slug: "oaxaca" },
  { nombre: "Puebla", slug: "puebla" },
  { nombre: "Querétaro", slug: "queretaro" },
  { nombre: "Quintana Roo", slug: "quintana-roo" },
  { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
  { nombre: "Sinaloa", slug: "sinaloa" },
  { nombre: "Sonora", slug: "sonora" },
  { nombre: "Tabasco", slug: "tabasco" },
  { nombre: "Tamaulipas", slug: "tamaulipas" },
  { nombre: "Tlaxcala", slug: "tlaxcala" },
  { nombre: "Veracruz", slug: "veracruz" },
  { nombre: "Yucatán", slug: "yucatan" },
  { nombre: "Zacatecas", slug: "zacatecas" },
];
