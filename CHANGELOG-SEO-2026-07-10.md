# CHANGELOG SEO — BOMBERO.MX — 2026-07-10

SOP Prompt Maestro SEO (Ola 1, alcance **TÉCNICO**). Commit principal: `ba742e4d`. Action verde + verificación en vivo OK.
Deploy real: **Cloudflare Pages, proyecto `bombero`** vía `deploy.yml` (el `deploy.yml.cfbak` es backup muerto). `bombero.mx` y `bombero.pages.dev` sirven contenido idéntico (hash igual) — sin drift tipo MEDEDUL.

## Cambios aplicados

### 1. og:image en AVIF → espejo JPEG (1145 páginas, 181 imágenes)
- Los crawlers sociales (WhatsApp/Facebook/LinkedIn/Twitter) no renderizan AVIF/WebP.
- `SEOHead.astro`: si la imagen resuelta termina en `.avif/.webp` se reescribe a `/images/og/<ruta-aplanada>.jpg` (ruta bajo `/images/` con `/`→`-`; también cubre `twitter:image`).
- 181 JPEG 1200×630 generados con PIL (crop cover, quality 82, progressive). **Excepción documentada**: el logo (1905×474) se generó en modo *contain* sobre lienzo blanco — un crop cover habría cortado ~50% del wordmark (el logo es el og por defecto de 826 páginas).
- `og:image:type` dinámico agregado en todo el sitio (`image/jpeg` / `image/png` / `image/svg+xml`). `og:image:alt` ya existía — no se tocó.

### 2. BreadcrumbList: home 1→0 y 446 páginas con doble schema → 1
- Home: `breadcrumbJsonLd(["Inicio"])` de un solo ítem eliminado de `src/pages/index.astro`.
- 439 páginas de municipio (`directorio/[estado]/municipios/[municipio]`): breadcrumb inline duplicaba el JSON-LD del componente `<Breadcrumb>` (mismos niveles) — inline eliminado.
- 7 páginas de productos (index + rescate-vertical, forestales, rescate-acuatico, tecnologia, herramientas-rescate, equipo-medico): mismo patrón, mismo fix.

### 3. Imágenes rotas remapeadas a archivos REALES del mismo tema (15 refs)
Referencias a archivos inexistentes en og/JSON-LD/cards (ninguna imagen nueva inventada):
- `blog-articulos.ts`: detector-humo → `equipo-contra-incendios/equipo-incendios-producto.avif`; ARFF → `cascos-para-bomberos/casco-bombero-arff-aeroportuario-01.avif`.
- `radio-digital-p25-bomberos.mdx` → `tecnologia/tecnologia-hero.avif`; `detector-gases-multigas-monitor.mdx` → `tecnologia/tecnologia-producto.avif`.
- Product schema: rescate-vertical → `directorio/equipo-rescate-vertical-01.avif`; rescate-acuatico → `directorio/rescate-acuatico-bomberos-01.avif`; tecnologia → `tecnologia/tecnologia-producto.avif`; herramientas-rescate → `herramientas-rescate/herramientas-rescate-hero.avif`; hazmat card → `directorio/traje-hazmat-nivel-a-01.avif`.
- `equipo-contra-incendios/index.astro` cards: boquillas → `accion/bomberos-accion-incendio-estructural.avif`; scba → `directorio/equipo-scba-aparato-respiratorio-01.avif`.
- `hidrantes-gabinetes.json` (galería + whyChoose): hidrante-columna-seca → `directorio/sistema-espuma-incendios-01.avif`; conexión-siamesa → `directorio/autobomba-panel-bombeo-manometros-01.avif`; boquillas → `accion/bomberos-accion-incendio-estructural.avif`; scba → `directorio/equipo-scba-aparato-respiratorio-01.avif`; escaleras → `directorio/camion-bomberos-equipado-01.avif`; accesorios → `directorio/equipo-bomberos-completo-01.avif`.

### 4. Logo schema con dimensiones reales
- `organizationJsonLd` decía `512×512`; el archivo real mide **1905×474** (PIL). Corregido.

### 5. Sitemap lastmod real (antes: 1724 URLs con la fecha del build)
- `astro.config.mjs`: eliminado `lastmod: new Date()`; resolver URL→archivo fuente (páginas exactas → colecciones `pages`/`productos` (.json) → registry de blog en `src/data/blog-articulos*.ts`/`blog-trajes-*.ts` por slug → `src/data/estaciones-<estado>.ts` para directorio) → `git log -1 --format=%cI` → mtime → **omitir** si no resuelve. Patrón EVENTECH.
- `deploy.yml`: `fetch-depth: 0` en checkout (sin esto git log daría la fecha del HEAD para todo).
- Resultado: 1596/1724 URLs con lastmod real (25-26 fechas distintas, feb–jul 2026); 128 omitidas honestamente (listados/paginación sin fuente clara).

## Hallazgos NO aplicados (con razón)
- **581 páginas del directorio usan og:image SVG dinámico** (`/api/og/estado|estacion/*.svg`, endpoints `.svg.ts` que sirven 200 `image/svg+xml`). Los crawlers sociales tampoco renderizan SVG, pero convertir el sistema a JPEG implica rediseñar 581 endpoints (raster server-side) — fuera del alcance quirúrgico. Se declaró `og:image:type: image/svg+xml` honesto. **Mejora futura recomendada**: generar esas cards como JPEG en build.
- **www.bombero.mx ya responde 301 → apex** (rama "ya resuelto" del SOP): no se tocó `_redirects` ni hace falta Redirect Rule en dashboard.
- `Product` en 148 páginas de `/productos/` es catálogo legítimo (0 híbridos `["Service","Product"]`, 0 bloques Service+Product duplicados) — no se tocó.
- `sitemap-directorio.xml.ts` ya usa fecha real (`DIRECTORIO_VERIFICADO_ISO`) — sin cambios.
- 14 páginas sin `og:image:type` = stubs de redirect + archivo de verificación de Google (no tienen og:image; correcto).

## Pendientes manuales (dashboard) 
- Ninguno bloqueante. Nota: robots.txt en producción lo gestiona Cloudflare (Content-Signals / AI Crawl Control) — revisar política account-wide cuando se decida sobre AI bots (no es de este alcance).

## Validación en vivo (2026-07-10, post-deploy)
- `https://bombero.mx/` → `og:image` = `/images/og/logo-equipo-para-bomberos.jpg` + `og:image:type image/jpeg` ✔
- `/images/og/logo-equipo-para-bomberos.jpg` → 200 `image/jpeg` ✔
- `/productos/trajes-para-bomberos/` → og .jpg ✔
- Sitemap live: 25 valores distintos de lastmod ✔
- Municipio (zitacuaro): 1 solo BreadcrumbList ✔ · Home: 0 ✔
- Estación: og svg declarado `image/svg+xml` ✔
- www → 301 apex ✔ · Action `29115981823` → success ✔

## Nota de higiene de repo
Al momento del commit existía WIP ajeno sin commitear (`Testimonials.astro`, `blog-seo-titles.ts`, `blog-articulos-firefighter.ts` untracked + su import en `blog-articulos.ts`). Se preservó fuera del commit (se commiteó `blog-articulos.ts` desde HEAD + solo los 2 remaps de este changelog; el WIP quedó intacto en working tree). **Ojo**: ese WIP importa un archivo untracked — si se commitea `blog-articulos.ts` sin `blog-articulos-firefighter.ts`, el build de CI romperá.
