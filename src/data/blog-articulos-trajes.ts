/**
 * Serie editorial: Trajes para Bomberos (impulso SEO del servicio de venta de trajes)
 * 5 artículos interlinkeados — categorías Equipo / Mantenimiento / Forestales / Normativas
 * Cada artículo vive en su propio archivo blog-trajes-N.ts (ArticuloData).
 */
import type { ArticuloData } from "./blog-articulos";

import { slug as s1, articulo as a1 } from "./blog-trajes-1";
import { slug as s2, articulo as a2 } from "./blog-trajes-2";
import { slug as s3, articulo as a3 } from "./blog-trajes-3";
import { slug as s4, articulo as a4 } from "./blog-trajes-4";
import { slug as s5, articulo as a5 } from "./blog-trajes-5";

export const articulosTrajesData: Record<string, ArticuloData> = {
  [s1]: a1,
  [s2]: a2,
  [s3]: a3,
  [s4]: a4,
  [s5]: a5,
};
