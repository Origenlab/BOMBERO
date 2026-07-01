/**
 * catalog.ts — Fuente única de verdad para estadísticas del catálogo BOMBERO.MX.
 *
 * USO: import { CATALOG } from "@config/catalog";
 *
 * Actualizar aquí propaga el cambio a TODOS los componentes, layouts y páginas
 * que importen este módulo. Nunca escribir estos números directamente en código.
 */

export const CATALOG = {
  /** Categorías reales en src/pages/productos/ (16 directorios verificados) */
  categoriesCount: 16,

  /** Etiqueta de productos para UI ("500+") */
  productsLabel: "500+",

  /** Etiqueta de estaciones equipadas para UI ("500+") */
  stationsLabel: "500+",

  /** Número de estados con cobertura */
  statesCount: 32,

  /** Etiqueta de años de experiencia para UI ("+15") */
  yearsLabel: "+15",

  /** Año de fundación */
  foundedYear: 2010,
} as const;
