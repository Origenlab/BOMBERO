
// CDN: ExactDN — emwn2f4rcov.exactdn.com (EWWW Image Optimizer)
// Activado: 2026-06-15
// Para cambiar de proveedor: reemplazar CDN_BASE y los parámetros de URL.
// Migración a Cloudflare Image Resizing: cambiar a /cdn-cgi/image/width=W,format=auto<path>

const CDN_BASE = "https://emwn2f4rcov.exactdn.com";

/** URL base del CDN sin transformación (para rutas no-imagen). */
export function cdn(path: string): string {
  return `${CDN_BASE}${path}`;
}

/**
 * Imagen redimensionada a un ancho fijo con compresión lossy.
 * Úsalo como valor de `src` en <img>.
 */
export function cdnW(path: string, width: number): string {
  return `${CDN_BASE}${path}?width=${width}&lossy=1&strip=all`;
}

/**
 * Imagen sin pérdida (logos, íconos, elementos con texto).
 * strip=all elimina metadatos EXIF sin degradar calidad visual.
 */
export function cdnLossless(path: string): string {
  return `${CDN_BASE}${path}?lossy=0&strip=all`;
}

/**
 * Genera un srcset con múltiples anchos para responsive images.
 * Úsalo junto con el atributo `sizes` en <img>.
 * Ejemplo: cdnSrcset("/images/producto.avif", [350, 550, 700])
 * → "https://...?width=350&lossy=1 350w, ..."
 */
export function cdnSrcset(path: string, widths: number[]): string {
  return widths
    .map((w) => `${CDN_BASE}${path}?width=${w}&lossy=1&strip=all ${w}w`)
    .join(", ");
}
