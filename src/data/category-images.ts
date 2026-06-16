/**
 * Mapa href de categoría de producto (L3) → imagen representativa.
 * Se usa como fallback de imagen en las cards de "Categorías/Catálogo relacionado"
 * (CategoriaLayout y ProductL4Layout) para que ninguna card caiga al ícono.
 * Las rutas coinciden con las imágenes ya usadas en la home (index.astro).
 */
export const CATEGORY_IMAGES: Record<string, string> = {
  "/productos/trajes-para-bomberos/": "/images/trajes-para-bombero/bunker-gear-bombero-camion-estacion-01.avif",
  "/productos/cascos-para-bomberos/": "/images/cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif",
  "/productos/scba/": "/images/directorio/mascara-scba-bombero-01.avif",
  "/productos/guantes-para-bomberos/": "/images/guantes-para-bomberos/guante-bombero-estructural-nfpa-1971-01.avif",
  "/productos/botas-para-bomberos/": "/images/botas-para-bomberos/bota-bombero-estructural-nfpa-1971-01.avif",
  "/productos/forestales/": "/images/accion/bomberos-accion-incendio-estructural.avif",
  "/productos/herramientas-rescate/": "/images/directorio/equipo-rescate-tecnico-01.avif",
  "/productos/tecnologia/": "/images/directorio/detector-multigas-hazmat-01.avif",
  "/productos/capuchas-para-bomberos/": "/images/capucha-para-bombero/capucha-bombero-producto-pbi-gold-estudio-frontal-01.avif",
  "/productos/gafas-para-bomberos/": "/images/gafas-para-bomberos/gafas-bombero-producto-goggle-lente-espejo-premium-01.avif",
  "/productos/extintores/": "/images/directorio/bombero-mexicano-retrato-incendio-01.avif",
  "/productos/hazmat/": "/images/directorio/descontaminacion-hazmat-01.avif",
  "/productos/equipo-contra-incendios/": "/images/directorio/sistema-espuma-incendios-01.avif",
  "/productos/rescate-vertical/": "/images/directorio/equipo-rescate-vertical-01.avif",
  "/productos/rescate-acuatico/": "/images/directorio/traje-inmersion-rescate-01.avif",
  "/productos/equipo-medico/": "/images/directorio/pick-up-bomberos-forestal-01.avif",
};

/** Respaldo genérico si el href no corresponde a una categoría conocida. */
export const CATEGORY_IMAGE_FALLBACK = "/images/directorio/estacion-bomberos-mexico-01.avif";

/** Imagen de categoría para un href (normaliza trailing slash). undefined si no hay match. */
export function categoryImage(href?: string): string | undefined {
  if (!href) return undefined;
  const key = href.endsWith("/") ? href : `${href}/`;
  return CATEGORY_IMAGES[key];
}
