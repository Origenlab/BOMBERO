
// CDN: DESACTIVADO — 2026-07-22. ExactDN (emwn2f4rcov.exactdn.com) devolvía 403
// en las 930 imágenes (zona muerta/bloqueada) → 2,831 páginas con imagen rota
// en Site Audit. Las imágenes existen en public/images/: se sirven locales
// vía Cloudflare CDN. Firmas intactas para no tocar a los llamadores.
// Para reactivar un CDN: restaurar CDN_BASE y los parámetros de URL.

/** URL base sin transformación (para rutas no-imagen). */
export function cdn(path: string): string {
  return path;
}

/**
 * Imagen redimensionada a un ancho fijo (sin CDN: se sirve el archivo local).
 * Úsalo como valor de `src` en <img>.
 */
export function cdnW(path: string, _width: number): string {
  return path;
}

/**
 * Imagen sin pérdida (logos, íconos, elementos con texto).
 */
export function cdnLossless(path: string): string {
  return path;
}

/**
 * srcset: sin CDN no hay variantes de ancho; se devuelve el archivo único.
 * Los navegadores usan el candidato único como fallback.
 */
export function cdnSrcset(path: string, _widths: number[]): string {
  return path;
}
