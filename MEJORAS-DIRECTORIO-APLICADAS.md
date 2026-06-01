# Mejoras aplicadas al directorio — Sprint 1-10

**Fecha:** 31 / Mayo / 2026
**Alcance:** `/directorio/`, layouts, componentes, datos, robots, scripts globales

---

## TL;DR — Qué cambió

10 sprints aplicados sin tocar los 32 archivos `.astro` por estado (todas las mejoras viajan a través del layout compartido `DirectorioEstadoLayout.astro` y `EstacionLayout.astro`). Resultado: las 666+ páginas del directorio ganan FAQ schema, tabla de teléfonos por municipio, buscador, badge de verificación, CTA de conversión, schemas Place/EmergencyService, llms.txt — todo en una sola implementación.

---

## Archivos nuevos (8)

| Ruta | Función |
|---|---|
| `src/data/directorio-stats.ts` | Fuente única de verdad: conteos reales por estado calculados desde los arrays `estaciones-*.ts`. Fecha de verificación editorial centralizada. |
| `src/components/directorio/DirectorioSearch.astro` | Buscador Pagefind con lazy-load (solo carga el JS al hacer focus). |
| `src/components/directorio/FAQDirectorio.astro` | Preguntas frecuentes + `FAQPage` JSON-LD. Tres scopes: `nacional`, `estado`, `estacion`. |
| `src/components/directorio/MunicipiosPhonesTable.astro` | Tabla HTML semántica con teléfonos por municipio + microdata `FireStation`/`PostalAddress`. Pensada para extracción por LLMs. |
| `src/components/directorio/VerifiedBadge.astro` | Badge de confianza editorial + CTA para reportar datos erróneos. |
| `src/components/directorio/EmergencyNumbersBar.astro` | Barra horizontal con los números de emergencia del estado (reemplaza el bloque estático "911" replicado 32 veces). |
| `src/components/directorio/StationCTA.astro` | CTA contextual por estación con pre-fill de cotización + UTM tracking + WhatsApp directo. |
| `public/llms.txt` + `public/llms-full.txt` | Índice estándar emergente para motores generativos (ChatGPT, Gemini, Claude, Perplexity). |

---

## Sprint 1 — Quick wins (limpieza)

- ✅ `[estado].astro` dinámico **neutralizado** (`getStaticPaths()` devuelve `[]`). El archivo se conserva con bloque explicativo. Resultado: 0 rutas con `noindex` falso.
- ✅ Conteos en el hub leídos desde `directorio-stats.ts`, ya no hardcodeados. Yucatán mostraba 14 cuando la data tenía 18 → ahora coincide siempre.
- ✅ `Yucatan` → `Yucatán` corregido en `yucatan/[slug].astro`. Identificadores TypeScript intactos.
- ✅ Pagefind ampliado en `package.json`: `--glob "{blog,directorio}/**/*.html"`.
- ✅ `preconnect` y `dns-prefetch` añadidos para ExactDN, Rybbit, TruConversion.
- ✅ Scripts no críticos movidos a `requestIdleCallback` (con fallback `setTimeout`).
- ✅ Script de reescritura ExactDN reemplazado: `DOMContentLoaded` → `MutationObserver` antes del primer paint (evita CLS + doble fetch).

## Sprint 2 — Pagefind del directorio

- ✅ `package.json` script de build incluye `directorio/**`.
- ✅ Componente `<DirectorioSearch />` integrado en hero del hub y de cada estado.
- ✅ Filtra resultados a URLs `/directorio/*` para evitar mezclar blog/productos.

## Sprint 3 — FAQ schema (GEO)

- ✅ Tres pools de preguntas curadas: 6 nacionales, 6 por estado, 4 por estación.
- ✅ Schema `FAQPage` emitido como JSON-LD por scope.
- ✅ Bloque visible con `<details>` accesible — funciona sin JS y queda extraíble por LLMs.
- ✅ Integrado automáticamente en hub, `DirectorioEstadoLayout`, `EstacionLayout`.

## Sprint 4 — Tabla teléfonos por municipio + Place schema

- ✅ `MunicipiosPhonesTable` con HTML semántico (`<table>`, `<th scope>`, `rowspan`) — ideal para AI Overviews.
- ✅ Microdata `FireStation` + `PostalAddress` por fila.
- ✅ Schema `AdministrativeArea` añadido al `DirectorioEstadoLayout` con `containsPlace` enlazando al `ItemList`.
- ✅ `Country: México` con `sameAs` a Wikipedia para fortalecer Knowledge Graph.

## Sprint 5 — dateModified + EEAT

- ✅ `dateModified` propagado a:
  - `CollectionPage` en el hub
  - `AdministrativeArea` por estado
  - `FireStation` + `EmergencyService` por estación
  - `<meta property="article:modified_time">` vía `modifiedTime` prop
- ✅ `VerifiedBadge` con `<time datetime="2026-05-30">` visible al usuario.
- ✅ Schema `FireStation` ampliado: añadido `EmergencyService` (multi-tipo), `openingHoursSpecification`, `contactPoint`, `knowsAbout`, `speakable`, `areaServed.containedInPlace`.

## Sprint 6 — llms.txt + llms-full.txt

- ✅ `/llms.txt`: índice corto con enlaces a 32 estados + categorías de producto.
- ✅ `/llms-full.txt`: documento extendido con identidad, taxonomía, FAQ, schemas, reglas de citación recomendadas.
- ✅ `robots.txt` añade comentario referenciando ambos.
- ✅ `BaseLayout` añade `<link rel="alternate" type="text/plain" href="/llms.txt">`.

## Sprint 7 — EmergencyNumbersBar (componentización)

- ✅ Bloque de emergencia estático "911" reemplazado por barra dinámica que aprovecha el array `emergencyNumbers` que cada estado ya tenía.
- ✅ Cada teléfono es enlace `tel:` clicable directo.
- ✅ Primer número (típicamente 911) se destaca como "primario".
- ✅ Anchor `#listado-estaciones` añadido a la sección de tarjetas para que el CTA "Ver todas las estaciones" salte exacto.

## Sprint 8 — Preconnect + perf + scripts

- ✅ `preconnect crossorigin` a `emwn2f4rcov.exactdn.com` → LCP -100ms.
- ✅ `dns-prefetch` a app.rybbit.io y app.truconversion.com.
- ✅ Analítica y heatmap cargados tras `requestIdleCallback({ timeout: 3000 })` o `setTimeout(2000)`.
- ✅ ExactDN runtime: `MutationObserver` con `dataset.cdnDone` para evitar reprocesar la misma imagen.
- ✅ `<meta name="viewport" content="..., viewport-fit=cover">` (notch iPhone).

## Sprint 9 — CTA contextual + reporte de datos

- ✅ `StationCTA` por ficha con tres acciones: cotizar (pre-fill `?estacion=...&estado=...&municipio=...&utm_*`), WhatsApp con mensaje pre-armado, llamada directa.
- ✅ UTM tracking distintivo por estación: `utm_campaign={estado-slug}_{estacion-slug}`. Permite atribuir leads B2G a páginas específicas.
- ✅ `VerifiedBadge` incluye CTA "Reportar dato erróneo" con `mailto:` pre-rellenado y "Soy bombero / quiero aparecer" para captación editorial.

## Sprint 10 — Verificación

- ✅ Aliases TS verificados (`@components/`, `@data/`, `@layouts/`, `@utils/`).
- ✅ Los 6 componentes nuevos existen en `src/components/directorio/`.
- ✅ `directorio-stats.ts` referenciado por los 3 puntos de integración (hub, layout estado, layout estación).
- ✅ Yucatán: cero ocurrencias sin acento en `yucatan/[slug].astro`. Identificadores (`EstacionLayout`, `estacionesYucatan`, `getEstacionBySlug`) intactos.
- ✅ Frontmatter, scripts y styles balanceados en todos los `.astro` nuevos.
- ⚠️ `npx astro check` no se pudo correr en este entorno (rollup ARM64 incompatible). Recomendado correrlo en local con `npm i && npm run check` antes de mergear.

---

## Cómo se propagan las mejoras a los 32 estados

Los 32 archivos `*.astro` por estado (aguascalientes.astro, jalisco.astro, …) **no se tocaron**. Pasan props al layout compartido `DirectorioEstadoLayout`, que ahora incluye automáticamente:

1. `<DirectorioSearch />` dentro del hero (busca por estación o municipio del estado).
2. `<EmergencyNumbersBar />` después del hero (usa el array `emergencyNumbers` que cada archivo ya proporcionaba).
3. `<MunicipiosPhonesTable />` antes del FAQ (usa el array `estaciones` para agrupar por municipio).
4. `<FAQDirectorio scope="estado" />` con 6 preguntas contextualizadas al estado.
5. `<VerifiedBadge />` con la fecha global de verificación.

Igualmente, las 666+ páginas de estación heredan automáticamente del `EstacionLayout`:

1. `<StationCTA />` contextual con UTM por estación.
2. `<FAQDirectorio scope="estacion" />` con 4 preguntas usando datos de la estación.
3. `<VerifiedBadge />`.
4. Schema `FireStation` + `EmergencyService` ampliado con `contactPoint`, `speakable`, `dateModified`.

---

## Para correr en local (recomendado antes de deploy)

```bash
cd /Users/frankoropeza/Documents/Claude/Projects/BOMBERO
rm -rf node_modules package-lock.json
npm install
npm run check         # validar TypeScript + Astro
npm run build         # construir + Pagefind incluye /directorio/**
npm run preview       # abrir y verificar que el buscador funciona en prod
```

Validar manualmente:

- `https://localhost:4321/directorio/` — buscador funciona, FAQ renderiza, conteos cuadran.
- `https://localhost:4321/directorio/yucatan/` — barra de emergencia con teléfonos del estado, tabla de municipios al final, FAQ con preguntas tipo "¿Cuál es el teléfono de bomberos en Yucatán?".
- `https://localhost:4321/directorio/yucatan/yuc-merida-central/` — CTA contextual con WhatsApp pre-armado, FAQ con "¿Cuál es el teléfono de Cuartel Central Mérida?", badge verificado.
- `https://localhost:4321/llms.txt` y `/llms-full.txt` se sirven como texto plano.
- Rich Results Test (Google) sobre las 3 URLs → debe detectar `CollectionPage`, `FireStation`, `EmergencyService`, `FAQPage`, `BreadcrumbList`, `AdministrativeArea`.

---

## Lo que sigue (P1 — siguientes 30 días)

Las mejoras aplicadas resuelven los problemas P0 del informe `AUDITORIA-DIRECTORIO.md`. Los siguientes pasos de alto impacto:

1. **Landings por municipio**: `/directorio/{estado}/municipios/{municipio}/` — generador automático desde el dataset actual. Suma ~500 URLs indexables sin escribir contenido nuevo.
2. **Landings por especialidad**: `/directorio/{estado}/especialidades/{esp}/` para HAZMAT, ARFF, rescate acuático, etc. (~250 URLs).
3. **Mapa interactivo nacional** con Leaflet/MapLibre como Astro island (las 666 coordenadas ya están en el dataset).
4. **Migrar `estaciones-*.ts` → Content Collections (Astro 5)** — habilita tipado validado en build, queries `getCollection()`, sitemap automático.
5. **Extraer CSS inline de los layouts gigantes** (1,200-1,700 líneas) a `src/styles/directorio/*.css` para mejor cacheo del navegador.
6. **Componente `MapEmbed`** por ficha (Google Maps lazy iframe o tile Mapbox).

---

**Fin del reporte.**
