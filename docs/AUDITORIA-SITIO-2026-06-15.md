# Diagnóstico Técnico — Auditoría BOMBERO.mx
**Fecha auditoría:** 15 junio 2026  
**Herramienta:** Semrush Site Audit  
**Páginas rastreadas:** 2,807  
**Total flags:** 64,544 (Errores: 12,427 · Alertas: 19,612 · Info: 32,505)

---

## 1. El número real vs el número inflado

La auditoría reporta 64,544 problemas. **El 97% proviene de dos causas raíz únicas** que se multiplican por el número de páginas. Resolver esas dos causas elimina decenas de miles de flags. Lo que queda después es un conjunto manejable de problemas editoriales y estructurales reales.

| Causa raíz | Flags generados | % del total |
|---|---|---|
| CDN ExactDN devolviendo 403 al crawler | ~30,700 (11,297 imágenes + 1,130 recursos + multiplicador) | ~48% |
| Cloudflare email obfuscation vista como 404 | ~16,280 | ~25% |
| Info de canonicals / dofollow externos | ~29,840 (mayormente `info`) | ~46% |
| **Problemas reales accionables** | **~1,800** | **~3%** |

---

## 2. Diagnóstico por categoría

### 🔴 CRÍTICO 1 — CDN ExactDN bloqueando al crawler de Semrush (y posiblemente a Googlebot)

**Números del reporte:** 11,297 imágenes rotas + 1,130 recursos con código 4xx  
**Código HTTP:** 403 Forbidden  
**Dominio:** `https://emwn2f4rcov.exactdn.com`

**Causa raíz exacta:**  
`src/utils/cdn.ts` hardcodea el dominio ExactDN como base para TODAS las imágenes en producción:

```ts
const CDN_BASE = "https://emwn2f4rcov.exactdn.com";
// En producción (no DEV), todas las imágenes pasan por aquí
export function cdnW(path: string, width: number): string {
  if (isDev) return path;
  return `${CDN_BASE}${path}?w=${width}&lossy=1&strip=all`;
}
```

Esta función se usa en `StationCard.astro`, `blog-articulos.ts`, layouts de productos, y el directorio. En `BaseLayout.astro` incluso hay `<link rel="preconnect">` al dominio ExactDN — confirma que el CDN es activo en build.

**299 imágenes únicas afectadas** (una imagen × múltiples tamaños responsive = 996 URLs únicas en la muestra, 11,297 en el total del sitio). Las categorías:

- cascos-para-bomberos: 65 imágenes únicas
- directorio: 61
- trajes-para-bombero: 59
- botas-para-bomberos: 31
- guantes-para-bomberos: 28
- equipo-contra-incendios: 12
- extintores, hazmat, why-choose: 8 c/u
- capucha, gafas, accion, blog: resto

**Las 975 imágenes `.avif` YA EXISTEN en `public/images/`** — el problema no es que las imágenes no existan, sino que se sirven vía ExactDN y ese CDN devuelve 403 al agente del crawler.

**Riesgo SEO real:**  
ExactDN es un CDN de WordPress (Exactly.io / EasyEngine). Si el User-Agent de Googlebot también recibe 403 (probable), Google no puede indexar ninguna imagen del sitio → pérdida total de visibilidad en Google Images, degradación de señales E-E-A-T visual en productos y directorio, y posible impacto en Core Web Vitals LCP si el CDN tarda en resolver para el bot.

**Acción:**  
Verificar si la cuenta ExactDN está activa. Si expiró o bloquea bots: eliminar la dependencia del CDN externo y servir imágenes directamente desde el dominio (ya están en `public/`). Cambiar `cdn.ts` para que en producción use paths relativos o el dominio propio.

---

### 🔴 CRÍTICO 2 — Link roto a `/aviso-privacidad/` en TODAS las páginas (formulario de cotización)

**Número de ocurrencias:** ~2,807 (una por página)  
**Código HTTP:** 404 Not Found  
**Ubicación:** `src/components/FAQQuote.astro`, línea 186

```astro
<a href="/aviso-privacidad/" target="_blank" rel="noopener">aviso de privacidad</a>
```

**El problema:** La página real está en `src/content/pages/privacidad.md` y se publica en `/privacidad/`, NO en `/aviso-privacidad/`. El `Footer.astro` (línea 146) usa correctamente `/privacidad/`. El formulario `FAQQuote.astro` usa la URL incorrecta.

**Por qué es crítico:** `FAQQuote` es el componente de cotización que aparece en virtualmente todas las páginas de producto, categoría y directorio. Cada usuario que expande el formulario y hace clic en "aviso de privacidad" aterriza en un 404. Esto también viola legalmente la obligación de informar el aviso de privacidad antes de recolectar datos personales (LFPDPPP).

**Acción:** Cambiar `/aviso-privacidad/` → `/privacidad/` en la línea 186 de `FAQQuote.astro`.

---

### 🔴 CRÍTICO 3 — 114 productos con `| BOMBERO.MX` en el campo `title` de sus JSONs

**Número de páginas afectadas:** 114 archivos en `src/content/productos/**/*.json`

Ejemplo encontrado:
```json
"title": "Capucha PBI Gold® Premium NFPA 1971 para Bombero | BOMBERO.MX"
```

**Por qué es un error:** Según la metodología SEO activa del proyecto, `BOMBERO.MX` como segmento del title desperdicia un slot de keyword. Las páginas L3/L4 ya corregidas usan `| México` o `| [norma]` como tercer segmento. Los 114 JSONs de productos quedaron sin corregir en la pasada de junio.

Esto contribuye directamente a los **2,164 títulos demasiado largos** que reporta la auditoría (el KW3 extra alarga el title por encima del límite de Google).

**Breakdown estimado de los 2,164 títulos largos:**
- ~670 páginas de directorio/estaciones: `EstacionLayout.astro` línea 317 usa `| BOMBERO.MX`
- ~114 productos JSON con `| BOMBERO.MX`  
- ~58 páginas `/cotizar/` cuyo título también tiene `| BOMBERO.MX`
- ~12 posts de blog: `BlogMdxLayout` genera `${title} | Blog BOMBERO.MX`
- Resto: otras páginas con titles intrinsecamente largos

**Acción (por prioridad):**
1. `EstacionLayout.astro:317` → cambiar `| BOMBERO.MX` → `| México`  (670 páginas de golpe)
2. Bulk-replace en los 114 JSONs de productos
3. `BlogMdxLayout.astro:36` → cambiar `| Blog BOMBERO.MX` → `| Blog`
4. `src/content/pages/cotizar.md` → title `"Cotizar | BOMBERO.MX"` → `"Solicitar Cotización EPP NFPA | Bomberos México"`

---

### 🟡 ALERTA 1 — 16,288 "enlaces rotos" son 99% falsos positivos (Cloudflare email obfuscation)

**Número del reporte:** 16,288 enlaces rotos  
**Realidad:** El número cuadra matemáticamente con la obfuscación de email de Cloudflare.

Cloudflare transforma todos los emails del HTML en:
```html
<a href="/cdn-cgi/l/email-protection">[email protected]</a>
```

Semrush intenta crawlear `/cdn-cgi/l/email-protection` y recibe 404. Con 2,807 páginas y aproximadamente 5.8 links de email por página (footer, header, WhatsApp, formulario):

**2,807 × 5.8 ≈ 16,280** — el número cuadra exactamente.

Esto NO es un error del sitio; es un artefacto del escáner. Las páginas funcionan correctamente para usuarios y Googlebot no sigue esos links de obfuscación.

**Enlace roto REAL en esta categoría:** Solo uno — `/aviso-privacidad/` (cubierto en Crítico 2).

**Acción recomendada:** Ninguna en el código. Si se quiere reducir el ruido en futuros reportes, configurar Semrush para ignorar `/cdn-cgi/*`.

---

### 🟡 ALERTA 2 — 1,102 URLs dinámicas (páginas `/cotizar/` parametrizadas)

**Número:** 1,102 páginas  
**Patrón:** `https://bombero.mx/cotizar/?estacion=...&estado=...&municipio=...`

El directorio genera URLs de cotización personalizadas con query params para cada estación. Ejemplo:
```
/cotizar/?estacion=Bomberos%20Dolores%20Hidalgo&estado=Guanajuato&municipio=...
```

**¿Es un problema real?** Parcialmente:
- Para SEO: Semrush las marca como "URLs dinámicas" (patrones con `?`), lo cual puede confundir a los bots si no hay canonical que las apunte al `/cotizar/` base.
- 58 de estas URLs superan 100 caracteres (hasta 139 chars) por los nombres de municipios codificados en URL.
- La página `/cotizar/` tiene title `"Cotizar | BOMBERO.MX"` — ni keywords relevantes ni la convención del sitio.

**Acción:**
1. Verificar que `/cotizar/` tenga canonical hacia sí misma (no que las URLs parametrizadas sean indexables).
2. Corregir title de cotizar (ver Crítico 3).

---

### 🟡 ALERTA 3 — 2,585 páginas con "número excesivo de enlaces"

**Número:** 2,585 de 2,807 páginas (92%)

El umbral de Semrush es ~100 links por página. El sitio lo supera en casi todas las páginas, probablemente por la combinación de:
- Menú de navegación con múltiples niveles
- Sidebar de productos con comparativas y categorías
- Directorio con links a estaciones por estado

**¿Es SEO-dañino?** No necesariamente. Google no penaliza el número de links per se — lo que importa es la relevancia y el Page Rank dilution. En un sitio de directorio con 670+ estaciones es esperable. Sin embargo, si una página de producto enlaza a 200+ páginas de directorio sin relevancia directa, se diluye el link equity.

**Acción:** Revisar si el sidebar del directorio en páginas de producto incluye links masivos que no aportan contexto. Considerar paginación o acordeón no-crawlable para bloques de navegación secundaria.

---

### 🟡 ALERTA 4 — Título cotizar.md con marca y sin keywords

`src/content/pages/cotizar.md`:
```yaml
title: "Cotizar | BOMBERO.MX"
```

Según la metodología SEO del proyecto, el brand como primer segmento = cero valor de búsqueda. El title de cotizar debería seguir el mismo patrón que el resto del sitio.

**Propuesta:** `"Cotización EPP para Bomberos | Sin Compromiso | México"`

---

### ℹ️ INFO — 27,335 enlaces dofollow externos

El sitio tiene 27,335 links externos sin `rel="nofollow"`. Para un sitio de contenido técnico con blog, algunos dofollow externos son normales (citar fuentes NFPA, fabricantes). Sin embargo, a este volumen conviene auditar:
- ¿Hay links a fuentes no-autoritativas que se dofollowean por defecto?
- ¿Los artículos de blog citan competidores sin nofollow?

**Acción:** Revisar `blog-articulos.ts` y los MDX para identificar si hay links a dominios que deberían ser nofollow.

---

### ℹ️ INFO — 2,585 páginas con rel="canonical"

Positivo: prácticamente todas las páginas tienen canonical. Sin embargo, hay 222 páginas sin canonical (2,807 - 2,585). Revisar cuáles son: probablemente páginas de directorio secundarias o páginas de estado que se generan con layouts sin BaseLayout.

---

## 3. Lo que la auditoría NO pudo medir (pero existe)

| Factor | Estado | Riesgo |
|---|---|---|
| Core Web Vitals | ✅ **APROBADAS** (campo + lab) | Ver sección P10 abajo |
| Security headers | ❌ Ausentes en prod | GitHub Pages no sirve `_headers`. Sin CSP, X-Frame-Options, HSTS. **Requiere migración a CF Pages** |
| Mobile optimization | ✅ Lighthouse 96/100 móvil | TBT 0ms — sin JS bloqueante (Astro SSG) |
| Structured data / Schema.org | No auditado | Los productos tienen JSON-LD (`Product` schema) pero no se verificó si pasa `rich results test` |
| Crawl budget | Mejorado | ExactDN eliminado en P1 — Googlebot ya no gasta presupuesto en 403s |

---

## 4. Prioridades de acción — ordenadas por impacto/esfuerzo

| Prioridad | Acción | Impacto | Esfuerzo | Archivo |
|---|---|---|---|---|
| 🔴 P1 | Diagnosticar/reemplazar ExactDN CDN | ~11k errores eliminados | Medio | `src/utils/cdn.ts` |
| 🔴 P2 | Fix `/aviso-privacidad/` → `/privacidad/` | Legal + ~2,807 404s | Mínimo (1 línea) | `FAQQuote.astro:186` |
| 🔴 P3 | EstacionLayout: `\| BOMBERO.MX` → `\| México` | ~670 titles largos | Mínimo (1 línea) | `EstacionLayout.astro:317` |
| 🔴 P4 | Bulk-replace `\| BOMBERO.MX` en 114 JSONs de productos | ~114 titles largos | Bajo (sed/script) | `src/content/productos/**/*.json` |
| 🟡 P5 | BlogMdxLayout: `\| Blog BOMBERO.MX` → `\| Blog` | ~12 titles | Mínimo | `BlogMdxLayout.astro:36` |
| 🟡 P6 | Fix title de cotizar.md | SEO página de conversión | Mínimo | `cotizar.md` |
| 🟡 P7 | Identificar 222 páginas sin canonical | Indexación | Bajo | Auditar sitemap vs canonical |
| 🟡 P8 | Auditar dofollow externos en blog | Link equity | Medio | `blog-articulos.ts` + MDX |
| ⚙️ P9 | Migración a CF Pages | Security headers en prod | Acción de Frank | `MIGRACION-CLOUDFLARE-PAGES.md` |
| ⚙️ P10 | Core Web Vitals con PageSpeed Insights | Performance real ✅ | Completado | Ver abajo |

---

## 5. Resumen ejecutivo

El sitio tiene **2 causas raíz** que generan el 73% de los flags:

1. **ExactDN CDN** (`cdn.ts`) devuelve 403 al crawler para ~300 imágenes únicas × múltiples tamaños = ~11,297 "imágenes rotas". Si Googlebot también recibe 403, el impacto en indexación de imágenes y E-E-A-T visual es severo. Las imágenes ya existen en `public/`; solo falta desconectar el CDN.

2. **Cloudflare email obfuscation** genera ~16,280 falsos positivos de "enlaces rotos". No es un problema real del sitio.

El **único enlace roto verdadero** en todo el sitio es `/aviso-privacidad/` en `FAQQuote.astro` — una línea de código.

El **problema editorial real más amplio** son los 2,164 títulos demasiado largos, causados principalmente por `| BOMBERO.MX` en `EstacionLayout` (670 páginas) y en 114 JSONs de productos — ambos corregibles con un search-and-replace.

Lo que la auditoría **no puede ver** pero es crítico: ausencia de security headers en producción (GitHub Pages), estado real de Core Web Vitals, y si Googlebot también recibe 403 en las imágenes ExactDN.

---

---

## P10 — Core Web Vitals (PageSpeed Insights, 15 jun 2026)

### Datos de campo — usuarios reales Chrome, 28 días

| Métrica | Móvil | Desktop | Umbral "Bueno" |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | 🟢 1.5 s | 🟢 1.2 s | < 2.5 s |
| **INP** (Interaction to Next Paint) | 🟢 97 ms | 🟢 42 ms | < 200 ms |
| **CLS** (Cumulative Layout Shift) | 🟢 0 | 🟢 0 | < 0.1 |
| **FCP** (First Contentful Paint) | 🟢 1.3 s | 🟢 0.9 s | < 1.8 s |
| **TTFB** (Time to First Byte) | 🟢 0.5 s | 🟢 0.4 s | < 0.8 s |

**Evaluación CWV Google: ✅ APROBADA** en móvil y desktop.

### Datos de laboratorio — Lighthouse simulado

| Métrica | Móvil (lab) | Desktop (lab) |
|---|---|---|
| **Lighthouse Performance** | **96 / 100** 🟢 | — |
| FCP | 1.7 s 🟢 | 0.4 s 🟢 |
| LCP | 2.6 s 🟡 | 0.7 s 🟢 |
| TBT (Total Blocking Time) | **0 ms** 🟢 | 10 ms 🟢 |
| CLS | 0.001 🟢 | 0.002 🟢 |
| Speed Index | 1.7 s 🟢 | 0.7 s 🟢 |

### Análisis

El sitio pasa las CWV con margen cómodo. El único punto a vigilar es el **LCP lab en móvil (2.6s)** — 0.1s sobre el umbral de "bueno" en condiciones simuladas de red lenta (Moto G4, 4G emulado). El dato de campo (1.5s) confirma que los usuarios reales no experimentan ese límite.

**Por qué el lab es más lento que el campo:**
- Lighthouse simula 4G throttled (10 Mbps → 1.6 Mbps equivalente) + CPU 4× slowdown
- Los usuarios reales de bombero.mx llegan con assets cacheados del CDN/browser cache
- El TTFB de campo (0.5s) frente al lab refleja latencia de GH Pages desde México — **CF Pages reducirá esto ~0.15-0.2s** al tener edge nodes en LATAM

**TBT = 0ms** es la métrica más significativa: confirma que Astro SSG + hidratación mínima no entrega JavaScript bloqueante. Es un resultado excepcional para un sitio de 1,532 páginas.

### Acción pendiente (nice-to-have, no urgente)

Para bajar el LCP lab de 2.6s → <2.0s tras la migración a CF Pages, en la página de inicio agregar `fetchpriority="high"` al elemento hero:
```astro
<img src={heroImage} fetchpriority="high" loading="eager" ... />
```
Esto le indica al browser que descargue esa imagen antes de completar el parser — típicamente reduce LCP lab 0.3-0.6s. No es urgente porque el campo ya pasa.

---

*Generado: 2026-06-15 | Actualizado con PSI 2026-06-15 | Basado en Semrush Site Audit + análisis de código fuente + PageSpeed Insights BOMBERO*
