# Optimización de Imágenes — BOMBERO.MX
**Auditoría técnica · Junio 2026**

---

## 1. Resumen Ejecutivo

La auditoría de imágenes revela que **bombero.mx está sirviendo todas sus imágenes sin CDN activo** desde GitHub Pages. Las suscripciones de EWWW.io están canceladas (desde 2022), y el helper `cdn.ts` fue deliberadamente desactivado. La cuenta ExactDN con dominio `emwn2f4rcov.exactdn.com` existe pero **no transforma ni distribuye** ninguna imagen.

El inventario de imágenes está en buen estado: 975 archivos AVIF, 29 MB total, promedio ~30 KB por imagen. Las correcciones de mayor impacto son **gratuitas** (atributos de carga, responsive images con srcset) y el CDN puede resolverse con la migración a Cloudflare Pages ya planeada.

---

## 2. Inventario de Imágenes

| Métrica | Valor |
|---|---|
| Total de imágenes | 979 archivos |
| Formato principal | AVIF (975 archivos, 99.6%) |
| Otros formatos | 2 PNG, 1 JPG, 1 SVG |
| Peso total | ~29 MB |
| Imagen más pesada | `stock-permanente-inventario-epp-bomberos.avif` — 192 KB |
| Promedio por imagen | ~30 KB |
| Carpetas | 14 categorías bajo `/public/images/` |

### Distribución por categoría

| Carpeta | Archivos | Peso |
|---|---|---|
| `/images/trajes-para-bombero/` | 220 | 10 MB |
| `/images/directorio/` | 228 | 5.6 MB |
| `/images/guantes-para-bomberos/` | 130 | 4.7 MB |
| `/images/cascos-para-bomberos/` | 129 | 3.7 MB |
| `/images/botas-para-bomberos/` | 81 | 1.2 MB |
| `/images/gafas-para-bomberos/` | 85 | 816 KB |
| Otras carpetas (8) | 105 | ~3 MB |

---

## 3. Diagnóstico: Qué Funciona Bien

Antes de señalar problemas, es importante reconocer lo que ya está implementado correctamente:

**Formato AVIF** — El 99.6% de imágenes usa AVIF, el formato de siguiente generación más eficiente disponible. AVIF ofrece 20-50% menor peso que WebP y 50-80% menor que JPEG a la misma calidad visual. Es soporte universal en navegadores modernos (Chrome 85+, Firefox 93+, Safari 16+, Edge 90+).

**Lazy loading** — 67 imágenes tienen `loading="lazy"` correctamente declarado.

**Dimensiones explícitas** — La mayoría de `<img>` tienen `width` y `height`, lo que evita Layout Shift (CLS = 0).

**Prioridad en LCP de productos** — `ProductoLayout` usa `fetchpriority="high"` + `loading="eager"` en la primera imagen de galería.

**`decoding="async"`** — Presente en `CategoryCard`, `ProductCard`, `StationCard` y otros componentes clave.

---

## 4. Hallazgos Críticos

### 🔴 CRÍTICO 1 — CDN completamente desactivado

**Archivo:** `src/utils/cdn.ts`

El helper CDN devuelve los paths sin modificar. Ninguna imagen pasa por `emwn2f4rcov.exactdn.com`.

```typescript
// Estado actual (cdn.ts) — INOPERATIVO
export function cdnW(path: string, _width: number): string {
  return path; // ← retorna path sin CDN
}

export function cdnSrcset(_path: string, _widths: number[]): string {
  return ""; // ← srcset vacío → el navegador no puede hacer responsive
}
```

**Causa raíz:** Las suscripciones EWWW.io fueron canceladas.
- `EWWW IO Unlimited — Infinite` ($25/mes) → Cancelado Nov 28, 2022
- `EWWW IO Unlimited — Growth` ($15/mes) → Cancelado Ago 12, 2022

**Impacto:** El bandwidth de 1.05 GB mostrado en el dashboard es caché histórica. Las imágenes se sirven crudas desde GitHub Pages, sin resize, sin distribución CDN global, sin cache headers optimizados.

---

### 🔴 CRÍTICO 2 — Sin Responsive Images (srcset vacío)

Como consecuencia directa del punto anterior, `cdnSrcset()` retorna `""` para todos los componentes que lo usan:

- `CategoryCard.astro` — llama `cdnSrcset(image, [240, 360, 480])` → `""` vacío
- `ProductCard.astro` — llama `cdnSrcset(imagen, [350, 550, 700])` → `""` vacío

**Impacto real:** Un usuario en móvil (viewport 375px) descarga la misma imagen que un usuario de escritorio. Si el CDN estuviera activo y el `srcset` funcionara, móvil podría recibir una imagen a 240px (~8 KB) en lugar de una a 700px (~35 KB). Con 10 productos en pantalla eso es **270 KB de datos innecesarios por página en móvil**.

---

### 🟡 MODERADO 3 — `fetchpriority` ausente en hero de Directorio

**Archivo:** `src/layouts/DirectorioEstadoLayout.astro` (líneas 252, 263)

```html
<!-- Estado actual — falta fetchpriority="high" -->
<img
  src={heroImageCdn}
  alt={heroImageAlt}
  width="800" height="450"
  loading="eager" decoding="async"
/>
```

El hero del layout de directorio tiene `loading="eager"` pero sin `fetchpriority="high"`. El navegador no puede priorizar esta imagen sobre otros recursos en el head. **Es la imagen LCP de 32 páginas de estado.**

---

### 🟡 MODERADO 4 — Imágenes de galería en EstacionLayout sin CDN

**Archivo:** `src/layouts/EstacionLayout.astro` (línea 94)

```typescript
const eppCardsCdn = eppCards.map(c => ({ ...c, image: cdnW(c.image, 400) }));
```

La función `cdnW` es un no-op, por lo que las tarjetas EPP de estación cargan imágenes a tamaño original. Las 228 estaciones del directorio generan 228 páginas con este comportamiento.

---

### 🟡 MODERADO 5 — Sin Preload para imagen LCP

**Archivo:** `src/layouts/BaseLayout.astro`

El `<head>` hace preload de fuentes pero no de ninguna imagen LCP:

```html
<!-- Sí existe -->
<link rel="preload" href="/fonts/inter-latin-400-normal.woff2" as="font" .../>

<!-- No existe — debería estar en páginas con hero de imagen -->
<link rel="preload" href="/images/hero-principal.avif" as="image" fetchpriority="high"/>
```

Las páginas de directorio y estación tienen una imagen grande above-the-fold que no se preloadeada → el navegador la descubre tarde → LCP alto.

---

## 5. Plan de Acción

### FASE 1 — Correcciones de Atributos (Gratis, 2-3 horas)

Estas mejoras no requieren CDN ni subscripción. Impacto directo en Core Web Vitals.

#### 1.1 `fetchpriority` en hero de Directorio

**Archivo:** `src/layouts/DirectorioEstadoLayout.astro`

```html
<!-- ANTES -->
<img
  src={heroImageCdn}
  alt={heroImageAlt}
  width="800" height="450"
  loading="eager" decoding="async"
/>

<!-- DESPUÉS -->
<img
  src={heroImageCdn}
  alt={heroImageAlt}
  width="800" height="450"
  loading="eager"
  fetchpriority="high"
  decoding="async"
/>
```

Cambiar también las thumbs `loading="eager"` → `loading="lazy"` (están below-fold en mobile).

#### 1.2 Preload dinámico de imagen LCP

**Archivo:** `src/layouts/DirectorioEstadoLayout.astro` — agregar en el `<head>` (via slot o prop):

```html
<link
  rel="preload"
  href={heroImageCdn}
  as="image"
  fetchpriority="high"
/>
```

Esto reduce LCP en las 32 páginas de estado típicamente en 200-400ms.

#### 1.3 `sizes` en componentes que ya generan srcset

Una vez reactivado el CDN, agregar el atributo `sizes` a `CategoryCard` y `ProductCard`:

```html
<!-- CategoryCard -->
<img
  src={imageCdn}
  srcset={cdnSrcset(image, [240, 360, 480])}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
  ...
/>

<!-- ProductCard -->
<img
  src={cdnW(imagen, 700)}
  srcset={cdnSrcset(imagen, [350, 550, 700])}
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 700px"
  ...
/>
```

---

### FASE 2 — CDN + Responsive Images (Opciones)

Se presentan 3 rutas. La recomendación está marcada.

#### Opción A — Reactivar EWWW.io ExactDN ⭐ Más rápido

| Aspecto | Detalle |
|---|---|
| Costo | $15/mes (plan Growth) o $25/mes (plan Infinite) |
| Tiempo de activación | ~30 minutos |
| Lo que hay que hacer | Reactivar suscripción → reactivar `cdn.ts` |
| CDN ya configurado | Sí — `emwn2f4rcov.exactdn.com` ya apunta a `bombero.mx` |

**Actualización de `cdn.ts`:**

```typescript
// ACTIVAR esto al reactivar suscripción EWWW.io
const CDN_BASE = "https://emwn2f4rcov.exactdn.com";

export function cdn(path: string): string {
  return `${CDN_BASE}${path}`;
}

export function cdnW(path: string, width: number): string {
  return `${CDN_BASE}${path}?width=${width}&lossy=1&strip=all`;
}

export function cdnLossless(path: string): string {
  return `${CDN_BASE}${path}?lossy=0&strip=all`;
}

export function cdnSrcset(path: string, widths: number[]): string {
  return widths
    .map(w => `${CDN_BASE}${path}?width=${w}&lossy=1 ${w}w`)
    .join(", ");
}
```

ExactDN aplica automáticamente: resize, compresión, cache headers de larga duración, distribución CDN global. Los archivos AVIF ya existentes son servidos directamente (no re-convierte formatos modernos).

---

#### Opción B — Cloudflare Images ⭐ Recomendado a mediano plazo

Disponible tras la migración a Cloudflare Pages (ya planeada en `docs/MIGRACION-CLOUDFLARE-PAGES.md`).

| Aspecto | Detalle |
|---|---|
| Costo | $5/mes para 100,000 transformaciones |
| Tiempo de activación | ~2-3 horas de implementación |
| Ventaja | Todo en un solo proveedor (hosting + CDN + imágenes) |
| Desventaja | Requiere subir imágenes a CF Images o usar Image Resizing |

Con **Cloudflare Image Resizing** (incluido en CF Pro $20/mes o por consumo en Free):

```
/cdn-cgi/image/width=480,format=auto,quality=80/images/product.avif
```

Actualización de `cdn.ts` para CF Image Resizing:

```typescript
// Para Cloudflare Pages con Image Resizing habilitado
const CF_IMG = "/cdn-cgi/image";

export function cdnW(path: string, width: number): string {
  return `${CF_IMG}/width=${width},format=auto,quality=82${path}`;
}

export function cdnSrcset(path: string, widths: number[]): string {
  return widths
    .map(w => `${CF_IMG}/width=${w},format=auto,quality=82${path} ${w}w`)
    .join(", ");
}

export function cdnLossless(path: string): string {
  return `${CF_IMG}/format=auto,quality=100${path}`;
}
```

---

#### Opción C — Astro `<Image>` en Build Time (Gratis)

Sin CDN externo. Astro genera variantes de imagen durante `npm run build`.

| Aspecto | Detalle |
|---|---|
| Costo | $0 — incluido en Astro |
| Tiempo de implementación | 3-5 días (refactor de componentes) |
| Ventaja | Sin dependencia externa, imágenes pre-generadas |
| Desventaja | Aumenta build time y tamaño del repositorio |

No recomendado para bombero.mx porque: el sitio tiene 979 imágenes × múltiples breakpoints = miles de variantes generadas en build. Con 1,532 páginas el build ya tarda ~30s; con variantes de imagen podría superar los 5 minutos.

---

### FASE 3 — Cache Headers (Post-migración CF Pages)

En `public/_headers` (ya existente):

```
/images/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/favicon.ico
  Cache-Control: public, max-age=86400
```

Las imágenes son estáticas y tienen nombres semánticos (no hashed), por lo que `max-age=31536000` (1 año) es seguro. Cualquier imagen nueva simplemente tiene un nombre diferente.

---

### FASE 4 — `dns-prefetch` y `preconnect` para CDN

Una vez activado el CDN, agregar en `BaseLayout.astro`:

```html
<!-- Para EWWW.io / ExactDN (Opción A) -->
<link rel="preconnect" href="https://emwn2f4rcov.exactdn.com" crossorigin />
<link rel="dns-prefetch" href="https://emwn2f4rcov.exactdn.com" />

<!-- Para Cloudflare Images (Opción B — no necesario, mismo origen) -->
```

---

## 6. Hoja de Ruta Recomendada

```
HOY (sin costo)
├── Agregar fetchpriority="high" en DirectorioEstadoLayout hero
├── Cambiar thumbs de estado a loading="lazy"
└── Agregar <link rel="preload"> para imagen LCP en DirectorioEstadoLayout

ESTA SEMANA (con costo / según decisión de CDN)
├── Opción A: Reactivar EWWW.io → actualizar cdn.ts → build + push
│   └── Resultado: srcset + CDN global + resize automático en ~30 min
└── Opción B: Esperar migración CF Pages → activar Image Resizing

TRAS MIGRACIÓN CF PAGES
├── Configurar /images/* cache headers en _headers
├── Activar Cloudflare Polish si plan lo incluye (compresión automática)
└── Habilitar Early Hints para preload de imágenes críticas
```

---

## 7. Impacto Estimado por Fase

| Mejora | LCP | Ahorro de datos (móvil) | Esfuerzo |
|---|---|---|---|
| `fetchpriority` en Directorio hero | −200 a −400 ms | 0 | 5 min |
| Preload imagen LCP | −150 a −300 ms adicionales | 0 | 10 min |
| CDN activo (distribución) | −300 a −800 ms (latencia red) | 0 | 30 min |
| srcset responsive activo | Indirecto | 60-80% en móvil | 30 min |
| Cache headers 1 año | −500 ms en visitas recurrentes | 100% en visitas repetidas | 15 min |
| **Total acumulado** | **~1-2 s de mejora en LCP** | **+70% datos ahorrados en móvil** | **~90 min** |

---

## 8. Decisión de CDN — Resumen

| | EWWW.io ExactDN | CF Image Resizing | Astro Build |
|---|---|---|---|
| Costo mensual | $15-25 | $0-20 (según plan CF) | $0 |
| Activación | Inmediata | Post-migración CF | Semanas |
| Resize dinámico | ✅ Sí | ✅ Sí | ❌ Solo en build |
| CDN global | ✅ Sí | ✅ Sí (CF red) | ✅ Via CF Pages |
| Un solo proveedor | ❌ Dos: CF + EWWW | ✅ Solo CF | ✅ Solo CF |
| Integración actual | ✅ Ya configurado | Requiere implementar | Requiere refactor |

**Recomendación:** Reactivar EWWW.io temporalmente (Opción A) para tener CDN + srcset hoy, y evaluar migración a CF Image Resizing tras el cutover a Cloudflare Pages. El `cdn.ts` abstrae el proveedor, por lo que cambiar de EWWW a CF es un cambio de ~10 líneas.

---

*Documento generado: Junio 2026 — BOMBERO.MX*
*Para ejecutar cambios de código, ver sección 5 de este documento.*
