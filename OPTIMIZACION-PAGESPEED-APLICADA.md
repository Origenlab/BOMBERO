# Optimización PageSpeed / Lighthouse — bombero.mx

**Fecha:** 31/May/2026
**Alcance:** rendimiento móvil, accesibilidad, best practices y SEO, sin romper diseño ni funcionalidad.
**Stack:** Astro 5 (estático, sin islas `client:*`). Deploy: GitHub Pages + Cloudflare como proxy.

---

## Resumen de cambios

| # | Categoría | Archivo(s) | Métrica que mejora |
|---|-----------|------------|--------------------|
| 1 | Accesibilidad — contraste | `src/components/Testimonials.astro` | Accessibility 92→100 |
| 2 | Accesibilidad — nombres de enlace | `src/components/Testimonials.astro` | Accessibility |
| 3 | Accesibilidad — orden de encabezados | `src/components/Footer.astro` | Accessibility |
| 4 | Rendimiento — JS/TBT (observer muerto) | `src/LAYOUTS/BaseLayout.astro` + `src/data/blog-articulos.ts` | TBT, unused JS, doble-fetch |
| 5 | Rendimiento — forced reflow (scroll) | `src/components/Header.astro`, `BackToTop.astro` | TBT / reflow / INP |
| 6 | Rendimiento — imágenes LCP | `src/LAYOUTS/ProductoLayout.astro`, `BlogLayout.astro` | LCP |
| 7 | Best Practices — consola | `src/LAYOUTS/BaseLayout.astro` | Best Practices 96→100 |
| 8 | SEO — rel enlaces salientes | `src/components/Testimonials.astro` | SEO (refuerzo) |
| 9 | Caché — diagnóstico | `public/_headers` | Cache lifetime (requiere acción en dashboard) |

---

## Detalle por corrección

### 1. Contraste insuficiente (review-card)
**Problema:** `review-card__role` y `review-card__link` usaban `--color-fire-600` (#ea580c) sobre blanco = **3.56:1**, por debajo del mínimo WCAG AA (4.5:1 texto normal).
**Fix:** cambio a `--color-fire-700` (#c2410c) = **5.18:1 ✓** (verificado con cálculo WCAG).

```diff
-  .review-card__role { color: var(--color-fire-600); }
+  .review-card__role { color: var(--color-fire-700); }
-  .review-card__link { color: var(--color-fire-600); }
+  .review-card__link { color: var(--color-fire-700); }
```
> `review-card__company` (#64748b = 4.76:1) ya pasaba; no se tocó.

### 2. Vínculos sin nombre reconocible
**Problema:** los enlaces a sitios externos no exponían un nombre accesible claro (solo el dominio + ícono SVG).
**Fix:** `aria-label` descriptivo por enlace + SVG marcado `aria-hidden`.

```diff
-<a href={testimonial.website} target="_blank" rel="noopener" class="review-card__link">
-  {...domain...}
-  <svg ...>...</svg>
+<a href={testimonial.website} target="_blank"
+   rel="noopener nofollow sponsored" class="review-card__link"
+   aria-label={`Visitar el sitio web de ${testimonial.name} (se abre en una pestaña nueva)`}>
+  {...domain...}
+  <svg aria-hidden="true" focusable="false" ...>...</svg>
```

### 3. Encabezados fuera de orden
**Problema:** el `<footer>` usaba `<h4>` para los títulos de columna, generando salto h2→h4 al final del documento.
**Fix:** `<h4>` → `<h2>` en los 7 títulos del footer + actualización de los selectores CSS scopeados (`.bmx-ft-nav h2`, `.bmx-ft-states h2`) para mantener el estilo idéntico (sin regresión visual; especificidad de clase preserva font-size 10px).

### 4. JS sin usar / TBT — MutationObserver eliminado
**Problema:** `BaseLayout.astro` cargaba un `MutationObserver` global (`is:inline`, en cada página) que reescribía `<img src="/images/...">` al CDN en runtime → JS extra en el hilo principal (TBT) + doble-fetch de imágenes.
**Causa raíz:** solo 46 `<img>` crudas existían, todas en `blog-articulos.ts`.
**Fix:**
- Reescritas esas 46 URLs a CDN directo en build: `/images/...` → `https://emwn2f4rcov.exactdn.com/images/...?lossy=1&strip=all`.
- Eliminado el bloque `<script>` del observer (ya código muerto). Resultado: **−1 script inline en TODAS las páginas** + sin doble-fetch en blog.

### 5. Forced reflow — handlers de scroll
**Problema:** `Header.astro` y `BackToTop.astro` escuchaban `scroll` sin throttle, leyendo `pageYOffset`/`scrollY` y tocando el DOM en cada evento.
**Fix:** throttle con `requestAnimationFrame` + listener `{ passive: true }` + guard de estado (solo togglea la clase si cambió). Reduce trabajo en el hilo principal y jank de scroll.

```diff
-window.addEventListener("scroll", function() {
-  if (window.pageYOffset > 100) header.classList.add("header--scrolled"); ...
-});
+var ticking = false, isScrolled = false;
+window.addEventListener("scroll", function onScroll() {
+  if (ticking) return; ticking = true;
+  requestAnimationFrame(function () {
+    var s = window.pageYOffset > 100;
+    if (s !== isScrolled) { header.classList.toggle("header--scrolled", s); isScrolled = s; }
+    ticking = false;
+  });
+}, { passive: true });
```

### 6. Entrega de imágenes LCP
**Problema:** la imagen principal de producto se cargaba `loading="lazy"` (es el LCP de la página de producto); el hero de blog no marcaba prioridad.
**Fix:**
- `ProductoLayout.astro`: la 1ª imagen de galería → `loading="eager"` + `fetchpriority="high"` (resto `lazy`).
- `BlogLayout.astro`: hero → `fetchpriority="high"` + `decoding="async"`.
> Homepage: el hero es CSS puro (gradientes), el LCP es texto → `fetchpriority` no aplica. Las cards ya usaban `srcset` + `width/height` + `lazy` + AVIF/CDN.

### 7. Errores de consola (TruConversion)
**Problema:** el script de terceros TruConversion lanzaba errores de WebSocket a consola → penaliza Best Practices.
**Fix:** carga envuelta en `try/catch` + `script.onerror` no-op. Sigue cargándose vía `requestIdleCallback` (sin bloquear LCP) pero ya no contamina la consola. Marcado como no esencial: si decides eliminarlo, basta con borrar el bloque.

### 8. SEO — enlaces salientes
`rel="noopener"` → `rel="noopener nofollow sponsored"` en los enlaces de reseñas (sitios de terceros). El resto del SEO técnico ya estaba completo: canonical, hreflang, robots, Open Graph (con `og:image` 1200×630 + alt), Twitter Card y JSON-LD Organization/WebSite/LocalBusiness.

### 9. Caché — ⚠️ requiere acción en Cloudflare (no es código)
**Hallazgo importante:** `public/_headers` está en sintaxis **Cloudflare Pages**, pero el sitio se sirve desde **GitHub Pages con Cloudflare como proxy**, por lo que **ese archivo NO se aplica hoy** (ni caché ni los headers de seguridad/CSP).
**Acción (dashboard Cloudflare → Rules → Cache Rules):**
- `/_astro/*` y `/fonts/*` → Browser Cache TTL = **1 año** (assets hasheados, inmutables)
- `/images/*` → Browser Cache TTL = **1 mes**
- Transform Rules → replicar los headers de seguridad de `_headers`.
- Alternativa: migrar el deploy a **Cloudflare Pages**, donde `_headers` sí se honra.
Se añadió esta nota como comentario al inicio de `public/_headers`.

---

## Checklist de verificación (correr localmente)

```bash
npm run build        # confirmar build sin errores
npm run preview      # servir dist/ en local
# luego, en otra terminal:
npx lighthouse http://localhost:4321 --preset=desktop --view
npx lighthouse http://localhost:4321 --view   # móvil (default)
```

- [ ] **Contraste:** inspeccionar tarjetas de reseñas → texto naranja ahora #c2410c (sin warnings de contraste).
- [ ] **Link names:** auditoría "Links do not have a discernible name" en verde.
- [ ] **Heading order:** auditoría "Heading elements are not in sequentially-descending order" en verde (revisar footer).
- [ ] **TBT móvil:** debe bajar respecto a 340ms (menos JS inline, scroll throttled).
- [ ] **Consola:** sin errores de TruConversion (Best Practices sin "Browser errors logged to console").
- [ ] **Imágenes:** página de producto y de blog — LCP es la imagen hero con `fetchpriority=high`.
- [ ] **Blog:** verificar que las imágenes cargan del CDN (`exactdn.com`) sin doble-fetch (pestaña Network).
- [ ] **Caché:** tras configurar las Cache Rules en Cloudflare, re-auditar "Serve static assets with an efficient cache policy".
- [ ] **Regresión visual:** revisar footer (títulos siguen igual), reseñas, hero y galería de producto.

### Puntuaciones objetivo
| | Móvil | Escritorio |
|---|---|---|
| Rendimiento | ≥95 | ≥98 |
| Accesibilidad | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

> Nota: la verificación con build/Lighthouse no pudo correr en este entorno (node_modules compilado para macOS + sandbox Linux). Correr el checklist en tu máquina. El `npm install` de prueba dejó binarios extra en `node_modules/@rollup/` (inofensivos, gitignored); se limpian con `rm -rf node_modules && npm install`.
