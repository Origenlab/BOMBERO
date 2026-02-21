/**
 * ─── ExactDN (Easy IO) CDN Helper ───
 * Sirve imágenes a través del CDN de ewww.io para:
 * - Distribución global desde edge nodes
 * - Compresión adicional automática (lossy)
 * - Strips de metadatos EXIF
 *
 * Documentación: https://docs.ewww.io/article/115-exactdn-easy-io-api
 */

const CDN_BASE = "https://emwn2f4rcov.exactdn.com";
const isDev = import.meta.env.DEV;

/**
 * Devuelve la URL CDN de una imagen local.
 * Aplica compresión lossy y elimina metadatos por defecto.
 * En desarrollo sirve la ruta local directamente (las imágenes pueden no estar en el CDN aún).
 * @param path - Ruta local (ej: "/images/directorio/imagen.avif")
 */
export function cdn(path: string): string {
  if (isDev) return path;
  return `${CDN_BASE}${path}?lossy=1&strip=all`;
}

/**
 * Devuelve la URL CDN con ancho específico (responsive).
 * ExactDN redimensiona la imagen al vuelo si es necesario.
 * En desarrollo sirve la ruta local directamente.
 * @param path  - Ruta local
 * @param width - Ancho en píxeles
 */
export function cdnW(path: string, width: number): string {
  if (isDev) return path;
  return `${CDN_BASE}${path}?w=${width}&lossy=1&strip=all`;
}
