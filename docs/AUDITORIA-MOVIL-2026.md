# Auditoría móvil / responsive — BOMBERO.MX

**Fecha:** 2026-06-11 · **Alcance:** mobile-first, responsive, rendimiento, accesibilidad, arquitectura de componentes y calidad de código.
**Método:** harness automatizado con Chrome headless + perfil iPhone/tablet real (puppeteer-core), 11 plantillas × 6 breakpoints (320 / 360 / 390 / 414 / 768 / 912 px), más inspección visual por captura y revisión de código fuente.

> **Por qué este método:** el viewport del Chrome MCP no baja del ancho real del monitor, así que no emula móvil. La medición se hizo con un navegador headless emulando iPhone (touch + viewport reales) contra el build servido en `localhost:4321`.

---

## 0-bis. Pasada final de QA (2026-06-12)

Barrido técnico completo tras todos los fixes. Estado: **limpio, sin errores.**

- **Build:** `npm run build` sin warnings ni errores (1354 páginas, CSP re-hasheado).
- **Errores de consola JS:** ninguno en las 11 plantillas.
- **Recursos 404:** ninguno real (el `HEAD` a `pagefind.js` está manejado con `catch`; el `import` responde 200 en producción).
- **Scroll horizontal:** **eliminado** — verificado `scrollX=0` y `scrollWidth==clientWidth` en 11 plantillas a 320/390/768. Solo scroll vertical.
- **Semántica/a11y:** `<h1>` único por página, todas las `<img>` con `alt`, botones con `aria-label`, drawer con `role=dialog`+`aria-modal`+focus-trap.
- **Robustez navegador:** `html/body` usan `overflow-x: clip` (no bloquea touch-scroll iOS); las secciones (`.hero`, `.bmx-ft`) usan `overflow: hidden` (recorta glows incluso en Safari <16).
- **Limpieza:** eliminados duplicados de CSS (`-webkit-text-size-adjust`, bloques `body` repetidos), `--z-fixed` definido.

Causa raíz del último arrastre horizontal: el drawer (`position:fixed` + `translateX(100%)`) sobresalía del viewport a la derecha; `html { overflow-x: clip }` lo recorta a nivel viewport sin crear contenedor de scroll, y el drawer cerrado pasa a `visibility:hidden`.

---

## 0. Veredicto general

La base responsive del sitio es **sólida**, mejor de lo que sugería el reporte inicial. La medición automatizada en 11 plantillas × 6 breakpoints arrojó:

- **0 desbordamientos horizontales** en cualquier breakpoint (320→912).
- **0 imágenes que se salgan del viewport**; todas escalan.
- **`<h1>` único y correcto** en todas las plantillas (semántica OK).
- Inputs ya a 16px en móvil (sin zoom iOS) hasta 640px.

Los problemas reales eran: (1) **UX del menú**, (2) **objetivos táctiles pequeños** en enlaces secundarios, (3) **micro-texto de 9–11px** en labels/badges, (4) **zoom de inputs en tablet/iPad**, y (5) un bug de **scroll bloqueado tras volver atrás (bfcache)** ya corregido en la sesión previa.

Este informe documenta todo lo encontrado. Lo marcado **[APLICADO]** ya está implementado, compilado y pusheado en esta sesión; lo demás queda como plan priorizado.

---

## 1. Resumen por prioridad

| # | Hallazgo | Prioridad | Estado |
|---|----------|-----------|--------|
| 1 | Scroll muerto + menú atascado al volver atrás (bfcache iOS) | **Crítico** | ✅ APLICADO |
| 2 | Botón "X" de cerrar tapado por el panel del menú | **Crítico** | ✅ APLICADO |
| 3 | Menú móvil: rediseño a drawer lateral profesional | **Alto** | ✅ APLICADO |
| 4 | Objetivos táctiles <44px en enlaces secundarios | **Alto** | ✅ APLICADO (primarios) |
| 5 | Inputs <16px en tablet/iPad → zoom al enfocar | **Alto** | ✅ APLICADO |
| 6 | Micro-texto 9–11px en labels/badges | **Medio** | ✅ APLICADO (clases clave) |
| 7 | Página de estado (directorio): muchos links densos <44px | **Medio** | 📋 Plan |
| 8 | Foco/teclado: focus-trap en drawer | **Medio** | ✅ APLICADO |
| 9 | Rendimiento: hidratación, fuentes, imágenes | **Medio** | 📋 Plan (ya muy optimizado) |
| 10 | Limpieza de CSS/JS muerto y consolidación | **Bajo** | 📋 Plan |

---

## 2. Cambios aplicados en esta sesión

### 2.1 [APLICADO] Scroll bloqueado tras navegar atrás (Crítico)

- **Problema:** el menú bloqueaba el scroll con `document.body.style.overflow='hidden'`. En iOS Safari, al volver atrás la página se restaura desde *bfcache* con ese estilo pegado y el menú en estado "abierto" → el usuario no puede hacer scroll y el menú queda inconsistente.
- **Impacto actual:** abandono inmediato en móvil; era el síntoma reportado ("no se puede dar scroll").
- **Solución:** resetear estado en el evento `pageshow` (cubre restauraciones bfcache), cerrar el menú al tocar cualquier enlace, y bloquear scroll en `html`+`body`.
- **Código:**
  ```js
  window.addEventListener("pageshow", function () { closeMenu(); });
  function setScrollLock(locked){
    document.documentElement.style.overflow = locked ? "hidden" : "";
    document.body.style.overflow = locked ? "hidden" : "";
    document.body.classList.toggle("menu-open", locked);
  }
  ```
- **Beneficio:** scroll siempre disponible; el caso "atrás" deja de romper la página.

### 2.2 [APLICADO] Botón de cerrar tapado (Crítico)

- **Problema:** el panel `.mobile-menu` es hijo de `<header>` y, dentro del mismo *stacking context*, su `z-index:99` tapaba la barra (logo + botón X).
- **Solución:** elevar la barra sobre el panel al abrir.
  ```css
  .header--menu-open .header__bar { position: relative; z-index: 100; }
  ```
- **Beneficio:** la X siempre visible y tocable.

### 2.3 [APLICADO] Menú móvil → drawer lateral profesional (Alto)

- **Antes:** panel a pantalla completa, sin overlay, sin contexto detrás.
- **Ahora:** drawer que entra desde la derecha (`min(86vw, 380px)`), **overlay oscuro con blur** detrás (cierra al tocar), animación con `cubic-bezier`, `role="dialog"` + `aria-modal`, **focus-trap** con Tab y foco automático al primer enlace, respeto a `prefers-reduced-motion`.
- **Código (esencia):**
  ```css
  .mobile-menu {
    position: fixed; top:0; right:0; bottom:0; left:auto;
    width: min(86vw, 380px);
    transform: translateX(100%);
    transition: transform .32s cubic-bezier(.4,0,.2,1);
    box-shadow: -8px 0 40px -10px rgba(15,23,42,.35);
  }
  .mobile-menu--open { transform: translateX(0); }
  .mobile-menu__overlay { position:fixed; inset:0; background:rgba(15,23,42,.55);
    backdrop-filter: blur(2px); opacity:0; visibility:hidden; }
  .mobile-menu__overlay.is-active { opacity:1; visibility:visible; }
  ```
- **Impacto UX:** patrón moderno usable a una mano; descubrimiento de productos vía acordeón; cierre intuitivo (overlay, X o Escape).
- **Impacto conversión:** los CTA "Solicitar Cotización" y "WhatsApp" quedan prominentes y siempre accesibles desde el drawer.

### 2.4 [APLICADO] Objetivos táctiles ≥44px (Alto)

- **Problema (medido):** `prefooter-nav__link` 32px (×133), `cat-card__list-link` 26px (×84), `review-card__link` 18px, `sb-contact` 20px, `blog-rel-card__btn` 23px, etc. Por debajo del mínimo táctil recomendado (Apple HIG / WCAG 2.5.5 = 44px).
- **Solución:** `min-height:44px` + flex en enlaces de lista/nav y CTAs de card (en `mobile.css`, scope ≤768px).
- **Beneficio:** menos toques fallidos; mejor usabilidad a una mano.

### 2.5 [APLICADO] Inputs sin zoom en tablet/iPad (Alto)

- **Problema:** la regla anti-zoom (`font-size:16px`) sólo cubría ≤768px; en iPad (768–1024) Safari hacía zoom al enfocar inputs.
- **Solución:** ampliar el bloque de formularios a `@media (max-width:1024px)`.
- **Beneficio:** formularios de cotización/contacto cómodos en tablet.

### 2.6 [APLICADO] Legibilidad de micro-texto (Medio)

- **Problema (medido):** labels/badges a 9–11px (`bmx-ft-certs-label` 9px, `producto-card__badge` 9px, `cat-card__badge-count` 10px, `section-header__label` 10.5px…).
- **Solución:** piso de 11px (`0.6875rem`) + `letter-spacing` en las clases de label/badge en móvil. Texto <11px bajó de **cientos** a **22** elementos residuales.
- **Beneficio:** legibilidad y percepción de calidad.

### 2.7 [APLICADO] Accesibilidad del drawer (Medio)

- `role="dialog"`, `aria-modal="true"`, `aria-label`, foco al abrir, **focus-trap** con Tab/Shift+Tab, cierre con Escape, `aria-expanded` sincronizado en el botón.

---

## 3. Hallazgos pendientes (plan priorizado)

### 3.1 [Medio] Directorio de estado — links densos <44px
- **Problema:** las páginas `/directorio/<estado>/` tienen muchos enlaces de estación/teléfono compactos (≈61 por página bajo 44px).
- **Solución propuesta:** aumentar el alto de fila táctil de `.station-card` / listas de teléfonos a 48px y separar con divisores; envolver tablas densas en contenedor con scroll-x (ya existe el patrón `.muni-phones__table-wrap`).
- **Riesgo:** medio (afecta layout de tablas) → validar visualmente antes de aplicar masivamente.

### 3.2 [Medio] Rendimiento (ya muy optimizado — afinar)
Lo que **ya está bien**: preconnect/dns-prefetch al CDN, `preload` de fuentes 400/700, analítica diferida a primera interacción, imágenes `loading="lazy"`+`decoding="async"`, CSS partido por sección, CSP por hashes, Astro = HTML estático (hidratación casi nula).

Recomendaciones incrementales:
- **LCP:** marcar la imagen/heading hero de la home con prioridad; evitar `font-display` bloqueante (verificar `swap`).
- **CLS:** confirmar `width`/`height` o `aspect-ratio` en todas las `<img>` de cards (auditoría no detectó desbordes, pero faltan dimensiones explícitas en varias → reserva de espacio).
- **INP:** el `<script>` del header ya es mínimo y pasivo; mantener.
- **Imágenes:** servir AVIF/WebP responsivo (`srcset`/`sizes`) desde el CDN donde aún se use un solo tamaño.

### 3.3 [Bajo] Limpieza de código
- `--z-fixed` no existía (los floats quedaban en `z-index:auto`) → **[APLICADO]** se definió.
- Revisar CSS de componentes desactivados tras el split por sección (`mobile-blog.css`, overrides movidos a `StatesDirectory`/`CompanyInfo`/`Testimonials`) para confirmar que no quedó CSS duplicado entre global y scoped.
- El mega-menú desktop (`.mega`) genera ~36px de ancho extra contenido por `overflow-x:hidden`; no afecta móvil pero conviene `right:auto`/clamp para limpieza.

---

## 4. Componentes — evaluación

| Componente | Estado móvil | Acción |
|------------|--------------|--------|
| Header / Nav | ✅ Rediseñado (drawer) | Hecho |
| Hero (L1–L4) | ✅ Bien proporcionado | — |
| Cards (cat-card, product, review) | ✅ OK; tap targets subidos | Hecho |
| Formularios (cotizar/contacto) | ✅ 16px hasta 1024; 48px alto | Hecho |
| Tablas (comparativa/specs/muni) | ✅ Scroll-x envuelto | Mantener |
| Footer / Prefooter | ✅ tap targets subidos | Hecho |
| Floats (WhatsApp/BackToTop) | ✅ `--z-fixed`; ocultos con menú abierto | Hecho |
| Breadcrumb | ✅ Compacto | — |

**Arquitectura:** el patrón L1/L2/L3/L4 con `pages.css` compartida + estilos scoped y `mobile.css` central (cargada al final del cascade vía `BaseLayout`) es limpio y escalable. Recomendación: mantener los overrides móviles **solo** en `mobile.css` para evitar divergencias.

---

## 5. Impacto esperado

| Eje | Antes | Después |
|-----|-------|---------|
| **UX móvil** | Scroll roto, menú confuso | Drawer moderno, scroll estable, una mano |
| **Conversión** | CTA poco accesibles en menú | CTA Cotizar/WhatsApp prominentes en drawer |
| **Accesibilidad** | Sin focus-trap, X oculta | Dialog accesible, foco gestionado, 44px táctil |
| **SEO** | Base correcta (h1, semántica) | Sin cambios negativos; mejor "mobile usability" |
| **Rendimiento** | Ya optimizado | Sin regresiones (CSS-only + JS mínimo) |

---

## 6. Checklist de implementación

- [x] Reset de estado en `pageshow`/bfcache (scroll siempre disponible)
- [x] Cierre del menú al tocar enlaces / overlay / Escape
- [x] Drawer lateral con overlay, animación y sombra
- [x] `role="dialog"` + `aria-modal` + focus-trap + foco inicial
- [x] Botón X siempre visible sobre el panel
- [x] Touch targets ≥44px en nav/prefooter/cards primarios
- [x] Inputs 16px hasta 1024px (anti-zoom tablet)
- [x] Labels/badges ≥11px
- [x] `--z-fixed` definido; floats ocultos con menú abierto
- [x] Build verde + CSP re-hasheado + verificación con screenshots iPhone
- [ ] Densidad táctil en `/directorio/<estado>/` (Medio)
- [ ] `aspect-ratio`/dimensiones explícitas en todas las `<img>` de cards (CLS)
- [ ] `srcset`/`sizes` AVIF/WebP donde falte (peso)
- [ ] Limpieza de CSS duplicado tras split por sección

---

*Generado tras medición automatizada en dispositivo emulado real. Los cambios "APLICADO" están compilados y desplegados; los pendientes requieren validación visual por su impacto en layout.*
