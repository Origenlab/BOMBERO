# Auditoría Técnica Completa — BOMBERO.MX (Astro 5)

**Fecha:** 10 de junio de 2026
**Alcance:** Arquitectura, componentes, layouts, Markdown, SEO técnico, rendimiento, accesibilidad, seguridad, UX y escalabilidad.
**Stack:** Astro 5.17 estático · MDX · @astrojs/sitemap · Pagefind · Cloudflare Pages (CNAME bombero.mx) · CDN ExactDN.
**Volumen:** 276 archivos `.astro` · 8 layouts · ~44 componentes · 32 datasets de estaciones (`src/data/estaciones-*.ts`) · ~1,400 páginas HTML generadas.

> Todos los hallazgos fueron verificados contra el código real. Los marcados con ✅ ya fueron corregidos durante esta auditoría (ver §16).

---

## 1. Resumen Ejecutivo

El proyecto está en un estado **notablemente mejor que el promedio**: tiene SEO técnico avanzado (canonicals, JSON-LD, sitemap dual, robots con soporte AI crawlers, llms.txt), seguridad razonable vía `_headers` de Cloudflare, fuentes self-hosted con preload, y configuración Astro correcta (`trailingSlash: "always"`, `inlineStylesheets: "auto"`, prefetch hover, compressHTML).

Los problemas reales se concentran en tres frentes:

1. **Un bug crítico en producción**: texto huérfano de un FAQ malformado se renderizaba como texto visible en la homepage live de bombero.mx (verificado contra el sitio en vivo el 10/06/2026). ✅ Corregido.
2. **Deuda de arquitectura por duplicación masiva**: ~150 páginas de producto con 200–340 líneas de datos inline cada una (estructura idéntica), 32 páginas de estado del directorio casi gemelas, y 2,500+ líneas de CSS dentro de layouts. El contenido vive en código en vez de en Content Collections.
3. **Brechas puntuales de accesibilidad y CSP**: sin skip-link, SVGs decorativos sin `aria-hidden`, contraste insuficiente en `--color-text-muted`, y CSP con `'unsafe-inline'`.

Nada de esto compromete el ranking actual, pero la duplicación sí compromete la velocidad de crecimiento: cada nuevo producto cuesta ~340 líneas copiadas y cada cambio estructural toca 150 archivos.

**Veredicto:** base sólida, ejecución SEO por encima de la media, arquitectura de contenido que necesita migrar de "páginas como código" a "contenido como datos" para escalar.

---

## 2. Problemas Críticos Detectados

### C1. ✅ FAQ corrupto renderizado como texto visible en la homepage LIVE

- **Descripción:** En `src/pages/index.astro` (líneas 408–412) quedó un fragmento huérfano de un item FAQ tras el cierre `/>` del componente `FAQQuote`. Astro lo trató como texto plano del template y lo renderizó literalmente en la homepage de producción: `question: "¿A qué otros sectores además de bomberos atienden?", answer: "Atendemos a..." }, ]} />`.
- **Evidencia:** Verificado en `https://bombero.mx/` en vivo (10/06/2026): el texto huérfano aparece en el HTML servido, justo después del script del cotizador. El commit `94abe29e` lo introdujo.
- **Impacto:** Crítico. Texto basura visible para todos los usuarios en la página más importante del sitio; daña confianza, conversión y percepción de calidad. Además el item FAQ (sectores atendidos, keyword relevante) no formaba parte del schema FAQPage.
- **Prioridad:** Crítico.
- **Solución aplicada:** El item se integró como noveno elemento del array `items` de `FAQQuote` y se eliminó el bloque huérfano. Ahora el contenido es visible como acordeón y entra al schema FAQPage.
- **Beneficio:** Homepage limpia + un FAQ adicional indexable con la keyword "sectores que atienden".

### C2. CSP con `'unsafe-inline'` en `script-src`

- **Descripción:** `public/_headers` línea 16 permite `script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' ...`. Esto anula gran parte del valor de tener CSP: cualquier XSS inyectado inline ejecuta sin restricción. `'wasm-unsafe-eval'` no parece necesario (no hay WASM propio; verificar si Pagefind lo requiere antes de quitarlo — Pagefind sí usa WASM para búsqueda, en cuyo caso debe conservarse solo en rutas con buscador).
- **Impacto:** Seguridad — superficie XSS sin mitigar. En un sitio estático sin inputs de usuario el riesgo práctico es bajo, pero es la brecha de seguridad más relevante del proyecto.
- **Prioridad:** Alto (Crítico si se añaden formularios con datos de usuario).
- **Solución recomendada:** Mover los scripts inline de `BaseLayout.astro` (carga de analytics, líneas ~65–101) a archivos `.js` propios servidos desde `/_astro/` o `/js/`, y endurecer CSP:

```text
Content-Security-Policy: default-src 'self'; script-src 'self' https://app.rybbit.io https://app.truconversion.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.exactdn.com; font-src 'self'; connect-src 'self' https://app.rybbit.io https://app.truconversion.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://wa.me
```

  Nota: en sitio 100% estático no hay nonces por request; la alternativa correcta es externalizar scripts o usar hashes `'sha256-...'` generados en build para los inline que queden.
- **Beneficio:** CSP real, no decorativa.

### C3. Accesibilidad: sin skip-link + SVGs decorativos sin `aria-hidden` (WCAG 2.4.1 / 1.1.1)

- **Descripción:** No existe enlace "Ir al contenido principal" (grep de `skip-link`/`skip-to-content`: 0 resultados). Los iconos SVG inyectados con `set:html` en `Nav.astro` (línea 57: `<span class="mega__icon" set:html={icons[cat.icon ?? "shield"]} />`), `Header.astro` y `WhatsAppFloat.astro` no llevan `aria-hidden="true"`, por lo que lectores de pantalla anuncian gráficos sin nombre en cada categoría del mega-menú.
- **Impacto:** Incumplimiento WCAG 2.1 AA en criterios 2.4.1 (Bypass Blocks) y ruido severo para usuarios de lector de pantalla en la navegación principal — presente en TODAS las páginas.
- **Prioridad:** Crítico (es transversal a todo el sitio y barato de corregir).
- **Solución recomendada:**

```astro
<!-- BaseLayout.astro, primera línea dentro de <body> -->
<a href="#main" class="skip-link">Ir al contenido principal</a>
<!-- y envolver el slot principal en <main id="main"> si no lo está -->
```

```css
.skip-link { position: absolute; top: -48px; left: 8px; z-index: 1000;
  background: var(--color-primary); color: #fff; padding: 8px 16px;
  border-radius: 4px; transition: top .15s; }
.skip-link:focus { top: 8px; }
```

```astro
<!-- Nav.astro: todo span que inyecte SVG decorativo -->
<span class="mega__icon" aria-hidden="true" set:html={icons[cat.icon ?? "shield"]} />
```

- **Beneficio:** Cumplimiento AA en navegación, mejor puntaje Lighthouse Accessibility en 1,400 páginas de golpe.

---

## 3. Problemas Importantes (Prioridad Alta)

### A1. Duplicación masiva en páginas de producto (~150 archivos, estructura idéntica)

- **Descripción:** Cada variante de producto es un `index.astro` de ~341 líneas (medido: `guantes-para-bomberos/hazmat/nitrilo/index.astro` y `hazmat/butilo/index.astro` tienen exactamente 341 líneas cada uno) con interfaces y datos (`capas`, `especificaciones`, `aplicaciones`, `faqs`) declarados inline en el frontmatter. Las interfaces se redeclaran en cada archivo en vez de importarse de `src/data/types.ts`.
- **Impacto:** ~30,000–45,000 líneas de estructura repetida. Cambiar el shape de `capas` = editar 150 archivos. Añadir un producto = copiar/pegar 340 líneas (el historial git ya muestra el costo: dos commits "fix: agregar import FAQQuote faltante" por errores de copy-paste).
- **Prioridad:** Alto.
- **Solución:** Migrar los datos a una Content Collection `productos` (type `data` o `content`) con schema Zod, y generar las rutas con UN solo `src/pages/productos/[...slug].astro` + `getStaticPaths()`. Ver ejemplo completo en §13.1.
- **Beneficio:** Crear un producto pasa de 340 líneas a un archivo de datos de ~60 líneas validado en build; los layouts se tocan en un solo lugar.

### A2. 32 páginas de estado del directorio casi gemelas

- **Descripción:** Cada estado tiene su `.astro` estático (`jalisco.astro` 264 líneas, `colima.astro` 371, etc.) que difieren esencialmente en el nombre del estado y el dataset importado. El archivo dinámico `src/pages/directorio/[estado].astro` existe pero está deliberadamente inerte (`getStaticPaths()` devuelve `[]`, documentado en su cabecera). Además cada carpeta `directorio/<estado>/` contiene un `[slug].astro` por estado para las estaciones.
- **Impacto:** ~32 × 300 líneas duplicadas + 32 `[slug].astro`. Homologar un cambio del template de estado (como ya pasó con el "Template L3" de categorías) requiere 32 ediciones.
- **Prioridad:** Alto.
- **Solución:** Reactivar `[estado].astro` como ruta dinámica real: `getStaticPaths()` sobre la lista de 32 estados, importando los datasets vía un índice central (`src/utils/directorio-index.ts` ya existe y puede ser la fuente). Las diferencias editoriales por estado (intro, FAQs locales) se mueven a un objeto de configuración por estado. Misma jugada para los 32 `[slug].astro` → un solo `directorio/[estado]/[slug].astro`.
- **Beneficio:** 64 archivos → 2; paridad garantizada entre estados.

### A3. 2,553 líneas de CSS embebidas en layouts

- **Descripción:** `ProductoLayout.astro` tiene 1,838 líneas (≈67% es `<style>`, líneas 648–1837) y `CategoriaLayout.astro` 715 (≈65% CSS, líneas 444–714). Comparten familias de selectores (`.prod-*`, `.rel-*`) con variantes duplicadas. Los 8 layouts suman 8,281 líneas.
- **Impacto:** Mantenibilidad (dos fuentes de verdad para los mismos patrones visuales) y peso: estilos casi idénticos se compilan por separado para cada layout.
- **Prioridad:** Alto.
- **Solución:** Extraer a `src/styles/products.css` y `src/styles/category.css` (o un `components.css` común), importados desde el layout. Dejar en `<style>` scoped solo lo verdaderamente específico del layout. `astro.config` ya tiene `inlineStylesheets: "auto"`, así que el CSS pequeño seguirá inline.
- **Beneficio:** −30–40 KB de CSS duplicado estimado; un solo lugar para el design system de producto.

### A4. Imágenes fuera del pipeline de Astro (`astro:assets` sin uso)

- **Descripción:** 0 usos de `astro:assets`/`<Image>`. Todas las imágenes van por `<img>` + helpers manuales de ExactDN (`src/utils/cdn.ts`: `cdnW()`, `cdnSrcset()`). `public/images` pesa 28 MB con ~945 archivos. Algunos componentes sí ponen `width/height` + `loading="lazy"` (p. ej. `StationCard.astro` línea 45 ✓), pero no es sistemático (`ProductCard.astro` no siempre).
- **Impacto:** CWV — riesgo de CLS donde faltan dimensiones, y dependencia total de un CDN externo para formatos/responsive. Sin validación en build de que la imagen exista (un typo = 404 silencioso en og:image).
- **Prioridad:** Alto (esfuerzo medio-alto; el CDN actual mitiga parte del problema).
- **Solución pragmática en dos fases:** (1) corto plazo: auditar que TODO `<img>` lleve `width`, `height`, `loading="lazy"` (salvo hero con `fetchpriority="high"`), `decoding="async"`; (2) mediano plazo: migrar imágenes de contenido a `src/assets/` + `<Image>`, manteniendo ExactDN solo como CDN de entrega si se desea.
- **Beneficio:** CLS ≈ 0 garantizado, formatos óptimos automáticos, errores de ruta detectados en build.

### A5. Contraste insuficiente en texto atenuado (WCAG 1.4.3)

- **Descripción:** `src/styles/tokens.css` define `--color-text-muted: var(--color-smoke-400)` (#94a3b8). Sobre fondo blanco da ≈ **2.9:1**, por debajo del 4.5:1 exigido para texto normal. `--color-text-light` (#64748b, smoke-500) da ≈4.8:1 — pasa AA justo, pero sin margen.
- **Impacto:** Falla AA en cualquier texto de cuerpo que use `text-muted` (metadatos, descripciones secundarias) en ~1,400 páginas.
- **Prioridad:** Alto.
- **Solución:** Subir `--color-text-muted` a smoke-500 (#64748b) y `--color-text-light` a smoke-600 (#475569, ≈7.5:1). Reservar smoke-400 exclusivamente para texto grande (≥24px) o decorativo.
- **Beneficio:** Cumplimiento 1.4.3 global con un cambio de 2 líneas en tokens.

### A6. `marked` renderiza HTML crudo sin sanitización

- **Descripción:** `src/utils/blog-enhance.ts` línea 13 importa `marked` y en la línea ~253 hace `marked(md, { renderer })` sin sanitizar. Hoy el input es admin-controlled (artículos en `src/data/blog-articulos*.ts`), así que no hay XSS explotable actualmente, pero el patrón es frágil: el día que el contenido venga de un CMS o colaborador externo, es XSS directo. Hay además ~varios `set:html` en componentes (Nav, HeroSection, FAQ) — todos con contenido controlado, mismo caveat.
- **Prioridad:** Alto (riesgo latente, fix barato).
- **Solución:** Documentar el contrato ("solo contenido de confianza") y/o sanitizar en build: `import DOMPurify from "isomorphic-dompurify"; const html = DOMPurify.sanitize(marked(md, { renderer }));`. Coste cero en runtime (todo ocurre en build).
- **Beneficio:** Inmunidad XSS aunque cambie la fuente del contenido.

### A7. Higiene del repositorio: documentos de oficina versionados y raíz saturada

- **Descripción:** 5 archivos `.docx/.pdf` están trackeados en git (`Plan_SEO_bombero_mx.docx`, `SEO_Plan_BOMBERO_MX_2026.docx`, etc.) y hay 11 `.docx` más sin trackear en la raíz (`art1_...` a `art10_...`, `historia_bomberos_mexico.docx`). También viven en la raíz carpetas ajenas al build: `obsidian-vault/`, `articulos-aqueon/`, `gbp-upload/`, `imagenes-google-business/`. **Aclaración importante:** `dist/` y `node_modules/` NO están commiteados — `.gitignore` está bien en eso (verificado con `git ls-files`).
- **Impacto:** Repo y clones inflados, ruido en `git status`, confusión sobre qué es fuente y qué es material de trabajo.
- **Prioridad:** Alto (organizacional, no técnico).
- **Solución:** Crear `docs/` para material de trabajo versionable en Markdown; sacar los `.docx/.pdf` del repo (`git rm --cached *.docx *.pdf`) hacia Drive/almacenamiento externo; añadir a `.gitignore`: `*.docx`, `*.pdf` (raíz), `obsidian-vault/`, `articulos-aqueon/`, `gbp-upload/`, `imagenes-google-business/`.

---

## 4. Problemas Menores (Prioridad Media)

### M1. Blog implementado en TypeScript en vez de Content Collections

`src/data/blog-articulos.ts` + 4 archivos hermanos contienen los artículos como objetos TS (`Record<string, ArticuloData>`), renderizados por `blog/[slug].astro` vía `marked`. Funciona, pero: campos opcionales sin validación (`pubDate?: string` — una fecha malformada produce `article:published_time` inválido sin error de build), edición editorial requiere tocar código, y conviven 7 `.mdx` sueltos en `src/pages/blog/` como segundo sistema paralelo. **Solución:** colección `blog` con schema Zod (fechas `z.coerce.date()`, imagen validada), migración gradual: los artículos nuevos a la colección, los viejos se migran por lotes. Ver §13.2.

### M2. JSON-LD global emitido en todas las páginas

`BaseLayout.astro` líneas 17–18 emite `organizationJsonLd() + websiteJsonLd() + localBusinessJsonLd()` en TODAS las páginas. Google lo tolera, pero son ~2–4 KB extra por página × 1,400 páginas, y diluye la señal. **Solución:** Organization+WebSite solo en home; LocalBusiness en home y `/contacto/`. (Snippet en §13.3.)

### M3. Hreflang autorreferente en sitio monolingüe

`SEOHead.astro` líneas 43–49 emite `es-MX`, `es` y `x-default` apuntando a la misma URL. No penaliza, pero es ruido. **Solución:** eliminar el bloque hasta que exista un segundo idioma.

### M4. Fuentes: 12 `@font-face` (6 pesos × 2 subsets)

Inter en 400–900. Solo se preloadan 400 y 700 (correcto), `font-display: swap` ✓. Pesos 800/900 probablemente usados en pocos lugares. **Solución:** auditar uso real (`grep -r "font-weight: 8\|font-weight: 9" src/`) y eliminar variantes sin uso, o migrar a Inter Variable (1 archivo woff2 ≈ todos los pesos).

### M5. Sitemap: prioridad de categorías de blog mayor que la de posts

`astro.config.mjs` línea 29: `item.url.includes("/categoria/")` SÍ matchea `/blog/categoria/*` (a diferencia de lo que sugiere el comentario "Category pages", no existe `/categoria/` raíz) y les asigna 0.85, por encima de los posts (0.7). Las páginas de listado no deberían superar al contenido. **Solución:** cambiar la condición a `/blog/categoria/` con prioridad 0.6.

### M6. Datasets de estaciones como TS plano

32 archivos `estaciones-*.ts` homogéneos (~19,000 líneas). Funciona y es type-safe, pero sin validación de datos en build (un teléfono mal formateado no truena). **Solución (opcional, va con A2):** colección `type: "data"` con Zod, o al menos un script de validación en CI que recorra los datasets contra el tipo `Estacion` con asserts de formato.

### M7. Canonicals hardcodeados puntuales

`index.astro` línea 59 pasa `canonical="https://bombero.mx/"` literal en vez de derivarlo de `Astro.site`/`canonicalURL()`. Frágil ante staging. Mismo patrón en algunas páginas de directorio. **Solución:** `canonical={canonicalURL("/")}` (helper ya existe en `src/utils/seo.ts`).

### M8. Pagefind: verificar que el índice se publique

El build local de `dist/` no contiene `pagefind/` (el `dist` analizado estaba incompleto — sin `index.html`). Verificar que en el build de producción el paso `npx pagefind --site dist` corre y el índice llega a Cloudflare. Si falla, falla silenciosamente (`&&` lo protege solo en parte). **Solución:** añadir verificación post-build (`test -d dist/pagefind || exit 1`) en CI.

### M9. LocalBusiness sin horario de fin de semana

`src/utils/seo.ts` líneas 249–256: solo Mon–Fri 09:00–18:00. Google Maps puede mostrar información incompleta. **Solución:** añadir `OpeningHoursSpecification` para Sat/Sun con `opens: "00:00", closes: "00:00"` (convención schema.org para "cerrado").

### M10. Componentes con responsabilidades anchas y sin documentación de utils

`src/utils/seo.ts` mezcla canonical, títulos, truncado y 5+ generadores de schema (~600 líneas). Útil pero monolítico. **Solución:** separar `seo/canonical.ts`, `seo/schemas.ts` + JSDoc por módulo. Bajo riesgo, hacer al tocar el archivo por otra razón.

---

## 5. Oportunidades de Optimización

- **Contenido como datos:** la mayor oportunidad del proyecto. Productos (A1), directorio (A2), blog (M1) y estaciones (M6) convergen en el mismo movimiento: schema Zod + Content Collections + rutas dinámicas. Hecho una vez, añadir el producto #151 o el estado #33 es escribir un archivo de datos.
- **Layout L3 homologado:** el memo del proyecto registra 14 categorías pendientes de homologar al template aprobado (two-column + sidebar 11 widgets, master en `trajes-para-bomberos/index.astro`). Si se ejecuta A1 primero, la homologación es automática (todas las categorías comparten layout); si no, son 14 ediciones manuales más.
- **Inter Variable:** 12 woff2 → 2 (latin + latin-ext), menos requests y CSS.
- **`quick-nav-pools.ts` / enlazado interno:** ya existe maquinaria de enlazado interno (QuickNav, StateDeepLinks, PreFooterNav) — bien. Oportunidad: generar los pools desde las colecciones para que nunca enlacen a rutas muertas.
- **CI:** no hay workflow de validación visible más allá del build. Añadir: `astro check` + `npm audit` + Lighthouse CI sobre 4 URLs representativas + verificación de Pagefind.

---

## 6. Mejoras SEO

Estado actual: **fuerte**. Canonicals correctos con trailing slash consistente, OG/Twitter completos con imagen absoluta, robots.txt con sitemaps declarados y AI crawlers contemplados, sitemap dual (general + directorio), redirects 301 para slugs legacy, llms.txt/llms-full.txt referenciados, 404/500 con noindex.

Mejoras pendientes por prioridad:

1. ✅ **FAQ de homepage reparado** (C1) — el schema FAQPage de la home vuelve a ser válido y gana un item.
2. ✅ **RSS autodescubrible** — añadido `<link rel="alternate" type="application/rss+xml">` en `BaseLayout.astro` (antes el feed existía pero ningún agregador lo descubría).
3. **JSON-LD por tipo de página** (M2): Organization/WebSite solo en home.
4. **Quitar hreflang autorreferente** (M3).
5. **Prioridades de sitemap** (M5): listados de categoría de blog a 0.6.
6. **`dateModified`/`datePublished` en páginas estáticas** (`src/content/config.ts` no los define; los `.md` de `content/pages` no los traen). Añadir al schema y emitir `article:modified_time`.
7. **BreadcrumbList:** ya se emite; opcionalmente añadir `@id` por item (best practice menor).
8. **Unicidad de titles:** sin garantía estructural en 150 páginas de producto manuales — la migración a colecciones (A1) permite validar unicidad en build con un assert sobre `getCollection()`.

---

## 7. Mejoras de Rendimiento

Estado actual: bueno para un sitio estático (HTML comprimido, CSS inline auto, prefetch hover, fuentes preloaded con swap, cache headers correctos: fonts/`_astro` immutable 1 año, imágenes 1 mes con SWR).

Plan por impacto:

1. **LCP:** asegurar `fetchpriority="high"` + sin lazy en la imagen hero de cada template (verificar `HeroSection.astro`); preload de la imagen LCP en home. ExactDN ya sirve AVIF/WebP negociado.
2. **CLS:** `width`/`height` obligatorios en todo `<img>` (A4 fase 1). Es el riesgo CWV más concreto encontrado.
3. **CSS:** extraer los ~2,5K líneas de los layouts (A3); revisar `mobile.css` (40 KB, el archivo CSS más pesado) por reglas muertas tras la homologación de templates.
4. **Fuentes:** M4 (Inter Variable o poda de pesos).
5. **JS:** el JS propio es mínimo (escaneo: scripts inline pequeños para menú/cotizador/analytics diferido) — correcto. Pagefind solo debe cargarse en blog/directorio (verificar M8).
6. **INP:** sin frameworks cliente ni hidratación — riesgo INP casi nulo. Mantenerlo así: cualquier interactividad nueva, preferir `<script>` vanilla o islands con `client:visible`.
7. **TTFB:** Cloudflare Pages estático — ya óptimo.

---

## 8. Mejoras de Arquitectura

1. **Una sola fuente de verdad por tipo de contenido** (productos, estaciones, artículos) en `src/content/` con schema Zod. Hoy `src/content/config.ts` solo define la colección `pages`.
2. **Rutas dinámicas sobre rutas estáticas duplicadas:** `productos/[...slug].astro` (A1) y `directorio/[estado].astro` + `directorio/[estado]/[slug].astro` (A2). El archivo inerte `[estado].astro` ya documenta cómo reactivarlo.
3. **Renombrar `src/LAYOUTS/` → `src/layouts/`:** convención de la comunidad, evita sorpresas en filesystems case-sensitive (CI/Linux). Riesgo bajo, hacer en commit aislado.
4. **Jerarquía de layouts limpia:** BaseLayout (head/header/footer) ← PageLayout (página genérica) ← ProductoLayout/CategoriaLayout/BlogLayout (solo estructura específica, sin head propio ni CSS masivo). Hoy ya componen, pero arrastran CSS gigante (A3).
5. **Carpeta `docs/`** para material de trabajo, raíz limpia (A7).
6. **`src/utils/index.ts`** como barrel + JSDoc (M10).
7. **Dependencias:** todas se usan (`marked` incluido — lo usa `blog-enhance.ts`). `package.json` correcto; considerar fijar Astro con `~` para upgrades deliberados.

---

## 9. Mejoras de UX

1. ✅ **Texto basura en homepage eliminado** (C1) — era el problema de UX más grave.
2. ✅ **404 sin botón a redirect:** el botón "Catálogo" apuntaba a `/catalogo/` (un redirect 301 a `/productos/`, duplicando el botón "Ver Productos" ya presente). Eliminado.
3. **Conversión:** el flujo WhatsApp-first está bien resuelto (WhatsAppFloat con `aria-label`, CTABar, cotizador en FAQQuote). Oportunidad: en páginas de producto profundas (variantes L4/L5), el CTA podría llevar contexto del producto en el texto prellenado de WhatsApp — verificar que `FAQQuote`/CTA reciban el nombre del producto actual.
4. **Búsqueda:** si Pagefind no está activo en producción (M8), el directorio de ~1,000 estaciones solo es navegable por jerarquía — la búsqueda es crítica para "bomberos cerca de mí". Prioridad de verificación alta.
5. **Velocidad percibida:** prefetch hover ya activo ✓. Considerar `prefetchAll: true` con `strategy: "viewport"` para el mega-menú (los targets más clickeados).
6. **Mobile:** existe `mobile.css` central con breakpoints homologados (overhaul previo). Mantener la regla de que todo template nuevo pase por esos breakpoints.

---

## 10. Mejoras de Accesibilidad

Prioridad de ejecución:

1. Skip-link global (C3) — 1 hora.
2. `aria-hidden="true"` en todos los SVG decorativos inyectados con `set:html` (C3) — grep sistemático: `grep -rn "set:html={icons" src/`.
3. Tokens de contraste (A5) — 2 líneas.
4. **Verificar landmark `<main>`:** confirmar que todos los layouts envuelven el contenido en `<main id="main">` único (requisito del skip-link).
5. **Hamburguesa/mega-menú:** confirmar `aria-expanded` en el toggle y manejo de foco (Escape cierra, foco vuelve al botón). `Nav.astro` ya tiene `role="dialog"` y `aria-label` ✓.
6. **Focus visible:** revisar que el design system no haga `outline: none` sin reemplazo (`grep -rn "outline: none" src/styles/`).
7. **Auditoría instrumental:** correr axe-core/Lighthouse sobre home + producto + estado + artículo y tratar los hallazgos como bugs.

---

## 11. Mejoras de Seguridad

1. **CSP sin `'unsafe-inline'`** (C2) — la mejora principal.
2. **Sanitizar salida de `marked`** (A6) con isomorphic-dompurify en build.
3. **Cabeceras ya correctas:** HSTS con preload ✓, X-Frame-Options DENY + frame-ancestors 'none' ✓, nosniff ✓, Referrer-Policy ✓, Permissions-Policy ✓, COOP/COEP ✓. Por encima de la media.
4. **`X-XSS-Protection`:** obsoleta; inofensiva, puede eliminarse.
5. **Dependencias:** `npm audit` en CI + Dependabot/Renovate. Stack pequeño (5 deps runtime) = superficie chica, mantenerla así.
6. **Secrets:** no se detectaron API keys ni `import.meta.env.PUBLIC_*` sensibles en cliente ✓. Analytics cargado por dominio explícito ✓.
7. **SRI:** aplicable solo si se cargan scripts third-party estáticos por URL versionada; con loaders dinámicos de Rybbit/TruConversion no es viable — mitigado por CSP estricta (C2).

---

## 12. Refactorización Recomendada (orden quirúrgico)

| Paso | Refactor | Archivos | Riesgo | Esfuerzo |
|---|---|---|---|---|
| 1 | Tokens de contraste + skip-link + aria-hidden | 4–6 | Bajo | 0.5 día |
| 2 | CSP: externalizar scripts inline + endurecer `_headers` | 3 | Medio | 1 día |
| 3 | Extraer CSS de ProductoLayout/CategoriaLayout a `src/styles/` | 4 | Medio | 2 días |
| 4 | Colección `productos` + `productos/[...slug].astro` (piloto: 1 categoría, p.ej. guantes) | nueva + 30 | Medio | 3–4 días |
| 5 | Extender a las 14 categorías restantes (homologación L3 incluida) | ~150 → ~5 | Medio | 1–2 semanas |
| 6 | Directorio: reactivar `[estado].astro` dinámico + `[estado]/[slug].astro` | 64 → 2 | Medio | 3–4 días |
| 7 | Blog → colección `blog` (artículos nuevos primero) | gradual | Bajo | 2–3 días |
| 8 | `LAYOUTS/` → `layouts/`, limpieza raíz, `docs/` | repo | Bajo | 0.5 día |

Regla de oro para 4–6: **comparar el HTML generado antes/después** (`diff -r dist-old dist-new` sobre la categoría piloto) — el refactor es correcto solo si el HTML servido es idéntico (módulo hashes de assets).

---

## 13. Ejemplos de Código Mejorado

### 13.1 Productos como Content Collection + ruta única

```ts
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const productos = defineCollection({
  type: "data",
  schema: z.object({
    titulo: z.string().max(70),
    descripcion: z.string().max(160),
    categoria: z.string(),          // "guantes-para-bomberos"
    subcategoria: z.string(),       // "hazmat"
    variante: z.string().optional(),// "nitrilo"
    norma: z.string().optional(),   // "NFPA 1991"
    imagen: z.string(),
    capas: z.array(z.object({ nombre: z.string(), material: z.string(), funcion: z.string() })),
    especificaciones: z.array(z.object({ etiqueta: z.string(), valor: z.string() })),
    aplicaciones: z.array(z.object({ titulo: z.string(), descripcion: z.string() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

export const collections = { pages, productos };
```

```astro
---
// src/pages/productos/[...slug].astro — reemplaza ~150 index.astro
import { getCollection } from "astro:content";
import ProductoLayout from "@/LAYOUTS/ProductoLayout.astro";

export async function getStaticPaths() {
  const productos = await getCollection("productos");
  return productos.map((p) => ({
    params: { slug: [p.data.categoria, p.data.subcategoria, p.data.variante].filter(Boolean).join("/") },
    props: { producto: p.data },
  }));
}
const { producto } = Astro.props;
---
<ProductoLayout {...producto} />
```

```json
// src/content/productos/guantes-hazmat-nitrilo.json — ~60 líneas vs 341
{
  "titulo": "Guantes de Nitrilo para HAZMAT | BOMBERO.MX",
  "descripcion": "Guantes de nitrilo certificados para respuesta a materiales peligrosos…",
  "categoria": "guantes-para-bomberos",
  "subcategoria": "hazmat",
  "variante": "nitrilo",
  "capas": [ { "nombre": "Exterior", "material": "Nitrilo 0.38mm", "funcion": "Barrera química" } ],
  "especificaciones": [ { "etiqueta": "Norma", "valor": "NFPA 1991 / EN 374" } ],
  "aplicaciones": [],
  "faqs": []
}
```

### 13.2 Blog como colección con fechas validadas

```ts
const blog = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string().max(70),
    excerpt: z.string().max(160),
    imagen: z.string(),
    categoria: z.enum(["Normativas", "Mantenimiento", "Guías", "Empresa", "Reseñas"]),
    tags: z.array(z.string()).default([]),
    autor: z.string().default("Equipo BOMBERO.MX"),
    pubDate: z.coerce.date(),        // truena en build si la fecha es inválida
    updatedDate: z.coerce.date().optional(),
  }),
});
```

### 13.3 JSON-LD condicionado por ruta

```astro
---
// BaseLayout.astro
const path = Astro.url.pathname;
const globalJsonLd =
  path === "/" ? [organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()]
  : path === "/contacto/" ? [localBusinessJsonLd()]
  : [];
const allJsonLd = [...globalJsonLd, ...jsonLd];
---
```

### 13.4 Directorio dinámico

```astro
---
// src/pages/directorio/[estado].astro (reactivado)
import { ESTADOS } from "@/utils/directorio-index";
import DirectorioEstadoLayout from "@/LAYOUTS/DirectorioEstadoLayout.astro";

export async function getStaticPaths() {
  return ESTADOS.map((e) => ({ params: { estado: e.slug }, props: { estado: e } }));
}
const { estado } = Astro.props;
const { estaciones } = await import(`../../data/estaciones-${estado.slug}.ts`);
---
<DirectorioEstadoLayout estado={estado} estaciones={estaciones} />
```

---

## 14. Roadmap de Implementación Priorizado

**Sprint 0 — Inmediato (hecho en esta auditoría) ✅**
FAQ homepage reparado · RSS autodescubrible · botón 404 redundante eliminado.

**Sprint 1 — Semana 1 (críticos restantes, riesgo bajo)**
Skip-link + `<main id="main">` · `aria-hidden` en SVGs · tokens de contraste · quitar hreflang · JSON-LD condicional · prioridad sitemap blog/categoria · verificación Pagefind en producción.

**Sprint 2 — Semanas 2–3 (seguridad + CSS)**
CSP sin `unsafe-inline` (externalizar scripts) · DOMPurify sobre marked · extraer CSS de layouts · `npm audit` + Dependabot · auditoría axe sobre 4 templates.

**Sprint 3 — Semanas 4–6 (arquitectura de productos)**
Colección `productos` + `[...slug].astro` piloto (guantes) → diff de HTML → extender a 14 categorías (cierra también la homologación L3 pendiente) · validación de unicidad de titles en build.

**Sprint 4 — Semanas 7–8 (directorio + blog)**
`[estado].astro` dinámico + `[estado]/[slug].astro` · colección `blog` para artículos nuevos · `dateModified` en pages.

**Sprint 5 — Continuo**
Lighthouse CI · migración gradual a `astro:assets` · limpieza de raíz y `docs/` · `LAYOUTS→layouts`.

**Criterio de éxito:** archivos `.astro` en `src/pages/`: ~276 → ~80. Líneas duplicadas: −35,000. Lighthouse Accessibility ≥ 95 en los 4 templates. CSP sin `unsafe-inline`. Añadir un producto nuevo: 1 archivo de datos.

---

## 15. Checklist Completo de Optimización

**Crítico**
- [x] Reparar FAQ corrupto en homepage (texto visible en producción)
- [ ] Desplegar el fix a producción (commit + push)
- [ ] CSP sin `'unsafe-inline'` en script-src
- [ ] Skip-link + `aria-hidden` en SVGs decorativos

**SEO**
- [x] RSS autodescubrible en `<head>`
- [ ] JSON-LD Organization/WebSite solo en home
- [ ] Eliminar hreflang autorreferente
- [ ] Prioridad sitemap `/blog/categoria/` → 0.6
- [ ] `datePublished`/`dateModified` en schema de `pages`
- [ ] Canonicals siempre vía `canonicalURL()` (sin hardcode)
- [ ] Horario weekend en LocalBusiness
- [ ] Validar unicidad de titles en build

**Rendimiento**
- [ ] `width`/`height` + `loading` correcto en TODO `<img>`
- [ ] `fetchpriority="high"` en imagen LCP de cada template
- [ ] Extraer CSS de ProductoLayout/CategoriaLayout
- [ ] Poda de pesos de fuente o Inter Variable
- [ ] Verificar índice Pagefind en producción + carga condicional
- [ ] Lighthouse CI (home, producto, estado, artículo)

**Accesibilidad**
- [ ] Tokens: `text-muted` → smoke-500, `text-light` → smoke-600
- [ ] `<main id="main">` único en todos los layouts
- [ ] `aria-expanded` + gestión de foco en menú móvil
- [ ] Auditoría axe-core en 4 templates
- [ ] Revisar `outline: none` sin reemplazo

**Seguridad**
- [ ] Externalizar scripts inline de BaseLayout
- [ ] DOMPurify sobre salida de marked
- [ ] `npm audit` en CI + Dependabot
- [ ] Eliminar header obsoleto `X-XSS-Protection`

**Arquitectura / Escalabilidad**
- [ ] Colección `productos` + `productos/[...slug].astro`
- [ ] Homologar 14 categorías L3 vía layout único
- [ ] Directorio dinámico: 64 archivos → 2
- [ ] Colección `blog` (artículos nuevos)
- [ ] Validación Zod de datasets de estaciones
- [ ] `src/LAYOUTS/` → `src/layouts/`
- [ ] Raíz limpia: `docs/`, `.docx` fuera de git, gitignore ampliado
- [ ] Barrel + JSDoc en `src/utils/`

---

## 16. Correcciones Aplicadas en Esta Auditoría (Quick Wins)

| Archivo | Cambio | Motivo |
|---|---|---|
| `src/pages/index.astro` | Item FAQ huérfano (líneas 408–412) integrado como 9º item del array de `FAQQuote`; bloque corrupto eliminado | Texto basura visible en homepage LIVE (C1) |
| `src/LAYOUTS/BaseLayout.astro` | Añadido `<link rel="alternate" type="application/rss+xml" href="/blog/rss.xml">` | Feed RSS no era descubrible (§6.2) |
| `src/pages/404.astro` | Eliminado botón "Catálogo" → `/catalogo/` (redirect 301 redundante con "Ver Productos") | Hop 301 innecesario y botón duplicado |

**Nota de verificación de hallazgos de terceros descartados durante la auditoría:** `marked` SÍ se usa (`blog-enhance.ts:13`); `dist/` y `node_modules/` NO están en git; `Testimonials`/`Certifications` SÍ se importan (home, nosotros); `[estado].astro` está inerte deliberadamente (documentado); el matcher de sitemap `/categoria/` SÍ aplica (a `/blog/categoria/*`). Este informe solo contiene hallazgos verificados.
