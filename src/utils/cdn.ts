
// CDN desactivado — imágenes servidas directamente desde el dominio propio.
// Las imágenes existen en public/images/ y se sirven vía GH Pages / CF Pages.
// Para reactivar un CDN: reemplazar estas funciones con el nuevo proveedor.

export function cdn(path: string): string {
  return path;
}

export function cdnW(path: string, _width: number): string {
  return path;
}

export function cdnLossless(path: string): string {
  return path;
}

/**
 * Sin CDN de redimensionado activo, cdnSrcset devuelve vacío.
 * El elemento <img> usa src como fallback.
 */
export function cdnSrcset(_path: string, _widths: number[]): string {
  return "";
}
