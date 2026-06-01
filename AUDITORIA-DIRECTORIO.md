# Auditoría Integral del Directorio BOMBERO.MX
**URL auditada:** `http://localhost:4322/directorio/`
**Fecha:** 31 / Mayo / 2026
**Stack:** Astro 5.7 · MDX · Sitemap dinámico · ExactDN · Pagefind · Rybbit + TruConversion
**Alcance:** 32 estados · 666 estaciones reales (TS) · index + layouts + per-state + per-station

---

## 0 · TL;DR EJECUTIVO

El directorio es **el activo SEO más valioso de bombero.mx** (~700 URLs indexables, contenido único, datos verificados, schema FireStation correcto). Pero arrastra **deuda técnica crítica** que está frenando 60–70% de su potencial:

1. **Routing duplicado**: 32 archivos `[estado].astro` estáticos + un `[estado].astro` dinámico que marca 20 estados como `noindex` cuando esos mismos estados YA tienen página estática. Es código muerto que confunde a crawlers y desarrolladores.
2. **Hardcode masivo**: cada uno de los 32 archivos de estado (250–400 líneas) duplica EPP cards, hero, imágenes, regiones, schemas. ~11,300 líneas de Astro replicadas. Cualquier cambio global = 32 ediciones manuales.
3. **Sin FAQ schema, sin búsqueda, sin filtros, sin mapa**, sin reseñas, sin paginación. Un directorio sin estos elementos pierde frente a competidores con la mitad de contenido.
4. **GEO sub-óptimo**: AI-bots bloqueados en `robots.txt` (GPTBot, Claude-Web, Google-Extended, CCBot). Estás regalando citas a la competencia en ChatGPT, Perplexity y AI Overviews.
5. **CSS inline gigantesco**: `EstacionLayout.astro` tiene 1,629 líneas (≈1,300 de CSS), `DirectorioEstadoLayout.astro` 1,197. Cero reutilización. Bundle inline desbordado.

**Potencial real**: con los cambios prioritarios (P0+P1) puede pasar de "directorio decente" a **el directorio de bomberos #1 de habla hispana**, indexable y citable por ChatGPT/Perplexity.

---

## FASE 1 · AUDITORÍA ESTRUCTURAL

### 1.1 Estructura de URLs (actual)

```
/directorio/                                     ← index (32 estados)
/directorio/{estado}/                            ← 32 estados (.astro estáticos)
/directorio/{estado}/{slug-estacion}/            ← 666 estaciones (dynamic [slug].astro × 32)
/directorio/{estado-noindex}/                    ← [estado].astro dinámico (DEAD CODE)
```

**Datos cuantificados**
- Hub `index.astro`: 1 página, 32 enlaces, sidebar, galería, ~1,155 líneas (≈900 de CSS inline).
- 32 archivos `*.astro` de estado (uno por entidad) + un `[estado].astro` dinámico = 33 archivos.
- 666 estaciones distribuidas: Colima 5 → Veracruz 47.
- 32 archivos `[slug].astro` dentro de `directorio/{estado}/`, cada uno generando rutas dinámicas.

### 1.2 Problemas estructurales detectados

| # | Severidad | Hallazgo |
|---|-----------|----------|
| 1 | 🔴 CRÍTICO | `[estado].astro` (dinámico) declara 20 estados como `noindex` pero esos 20 estados YA tienen archivo estático. Astro prioriza la estática → la dinámica nunca se ejecuta. Es 138 líneas de código muerto que ensucia el repo y confunde a auditores externos. |
| 2 | 🔴 CRÍTICO | El index.astro hardcodea el contador `stations: N` por estado en lugar de leerlo de `estaciones-*.ts`. Yucatán figura con 14 estaciones en index, pero el TS tiene 18. Datos divergentes en el mismo build. |
| 3 | 🟠 ALTO | Sin componentización: 32 archivos de estado replican ~280 líneas de configuración (heroThumbs, galleryImages, emergencyNumbers, regiones, eppCards, stationImages). Estimado: ~9,000 líneas redundantes. |
| 4 | 🟠 ALTO | `EstacionLayout.astro` 1,629 líneas; `DirectorioEstadoLayout.astro` 1,197. 80% es CSS inline. Sin extracción a `.css` o variables del design system. |
| 5 | 🟠 ALTO | Slug inconsistente: aguascalientes usa `estacion-central-aguascalientes` pero yucatán usa `yuc-merida-central`. Yucatán prefija con sigla estatal, otros no. Hace los slugs largos y rompe convención. |
| 6 | 🟡 MEDIO | El `[slug].astro` (estación) tiene textos hardcodeados específicos por estado (cenotes, Chichén Itzá, "Yucatan" sin acento). Debería leer estos del SEO del estado. |
| 7 | 🟡 MEDIO | "Yucatan" sin acento en 30+ instancias del `yucatan/[slug].astro`. Inconsistente con resto del sitio. |
| 8 | 🟡 MEDIO | El index NO incluye link a "Buscar estación", "Filtros por especialidad", "Ver mapa". No hay onboarding al directorio. |

### 1.3 Navegación / Búsqueda / Filtros / Paginación

| Componente | Estado |
|---|---|
| Búsqueda global | ❌ NO existe en `/directorio/` (Pagefind está limitado a `blog/**/*.html` en `package.json`) |
| Filtros por especialidad | ❌ NO existe |
| Filtros por servicio (HAZMAT, ARFF, rescate acuático…) | ❌ NO existe |
| Filtro por municipio | ❌ NO existe (los municipios están en la data pero no se exponen) |
| Mapa interactivo | ❌ NO existe (las 666 estaciones tienen `coordenadas: { lat, lng }`, datos listos para Mapbox/Leaflet) |
| Paginación | ❌ N/A (las páginas de estado listan todo en una sola vista) |
| Breadcrumb | ✅ existe + JSON-LD BreadcrumbList correcto |
| Estados vecinos | ✅ existe (`estados-vecinos.ts`) y se enlaza en ficha de estación |
| Estaciones cercanas | ✅ existe (`getEstacionesCercanas`) |
| Estados destacados | ✅ existe en sidebar (12 marcados `featured`) |

### 1.4 Fortalezas actuales

- ✅ Datos sólidos y verificados (teléfonos, direcciones, coordenadas, servicios, especialidades, horarios) en TypeScript tipado.
- ✅ Schema `FireStation` correcto con `geo`, `address`, `areaServed`, `openingHours`.
- ✅ Schema `ItemList` por estado.
- ✅ Schema `BreadcrumbList` global.
- ✅ Trailing slash consistente (`always`).
- ✅ Sitemap por prioridad granular.
- ✅ Hreflang `es-MX` + canonical.
- ✅ Open Graph + Twitter Cards bien configurados.
- ✅ Redirect 301 ya añadido para Kanasín con acento (manejo de errores).
- ✅ Cobertura nacional completa (32/32 estados con data real, no placeholders).
- ✅ CDN imágenes (ExactDN) + AVIF + lazy + width/height.

### 1.5 Debilidades sistémicas

- ❌ Cero UGC (reseñas, fotos de usuarios, reportes ciudadanos).
- ❌ Cero interactividad (sin búsqueda, sin filtros, sin mapa, sin clic-para-llamar prominente).
- ❌ Cero datos en tiempo real (alertas, clima, riesgo sísmico, calidad del aire).
- ❌ Cero contenido editorial por estación (historia detallada, héroes locales, casos famosos).
- ❌ Cero monetización del directorio (publirreportajes, listado patrocinado, leads para protección civil municipal).
- ❌ Sin claridad para Protección Civil municipal de "cómo aparecer aquí" / "actualizar mis datos".

---

## FASE 2 · AUDITORÍA ASTRO + MARKDOWN

### 2.1 Aprovechamiento del stack

| Capacidad de Astro 5 | Uso actual | Veredicto |
|---|---|---|
| `Content Collections` | Solo para 7 `.md` legales en `content/pages/` | 🔴 Subutilizado |
| `Content Layer` (5.0+) | NO usado | 🔴 No usado |
| MDX | Configurado, no usado en directorio | 🟡 |
| `getStaticPaths` | ✅ correcto en `[slug].astro` | ✅ |
| `astro:assets` `<Image />` | ❌ NO se usa; se usan `<img>` crudos + ExactDN script | 🟠 |
| View Transitions | ❌ NO activadas | 🟠 |
| `prefetch` | ✅ `defaultStrategy: "hover"` | ✅ |
| `compressHTML` | ✅ activado | ✅ |
| `inlineStylesheets: "always"` | ⚠️ peligroso: con 1,300 líneas CSS por layout, infla cada HTML. Sumado a múltiples páginas: bytes por petición altos. | 🟠 |
| Islands (React/Svelte) | ❌ no se usan (sería ideal para búsqueda, filtros, mapa) | 🟠 |

### 2.2 Problemas arquitectónicos de Astro

| # | Severidad | Hallazgo |
|---|-----------|----------|
| A1 | 🔴 CRÍTICO | Las 666 estaciones están en **archivos `.ts` con arrays exportados** en lugar de Content Collections. Esto bloquea: tipado validado en build, queries `getCollection()`, integración con `astro:assets`, sitemap automático por slug, schemas reutilizables. |
| A2 | 🔴 CRÍTICO | Los 32 estados deberían ser **un solo template dinámico `[estado].astro`** que reciba data de un Content Collection `estados`. Actualmente: 32 archivos con 80% código repetido. |
| A3 | 🟠 ALTO | `EstacionLayout.astro` y `DirectorioEstadoLayout.astro` tienen >1,000 líneas cada uno por CSS inline. Necesitan extracción a archivos CSS dedicados (`/styles/directorio.css`, `/styles/estacion.css`) o uso del design system existente. |
| A4 | 🟠 ALTO | `inlineStylesheets: "always"` + CSS inline gigante = cada HTML del directorio repite ~50KB de estilos. Multiplicado por 700 páginas y crawl-budget = desperdicio. |
| A5 | 🟠 ALTO | El script ExactDN en `BaseLayout` corre en `DOMContentLoaded` y re-escribe `src` de `<img>`. Esto causa CLS y rompe LCP. Debería resolver la URL **en build** (helper `cdnW` ya existe → aplicar consistentemente). |
| A6 | 🟡 MEDIO | TruConversion + Rybbit cargan en `<head>`. TruConversion bloquea el render por ~200ms. Mover a `defer` + `<body>` o cargar tras `requestIdleCallback`. |
| A7 | 🟡 MEDIO | Pagefind está restringido a `--glob "blog/**/*.html"` en build. Debería incluir `directorio/**/*.html` para habilitar búsqueda en el directorio. |
| A8 | 🟡 MEDIO | Sin `View Transitions` → navegación entre estados parpadea. Ganancia trivial con `<ViewTransitions />` en `BaseLayout`. |
| A9 | 🟡 MEDIO | Sin `<link rel="preconnect">` a `emwn2f4rcov.exactdn.com` → primera imagen tarda. |

### 2.3 Propuesta de arquitectura Astro

```
src/
  content/
    config.ts                    ← añadir collections: estados, estaciones
    estados/
      aguascalientes.md          ← frontmatter con SEO, demografía, riesgos, héroes locales
      ...
    estaciones/
      ags-central.md             ← una ficha por estación (markdown + frontmatter tipado)
      yuc-merida-central.md
      ...
  pages/
    directorio/
      index.astro                ← hub nacional (lee collection 'estados')
      [estado]/
        index.astro              ← 1 template para los 32 estados
        [slug].astro             ← 1 template para las 666 estaciones
        municipios/              ← NUEVO (P1)
          [municipio].astro      ← landing por municipio (ej: /directorio/jalisco/municipios/zapopan/)
        especialidades/          ← NUEVO (P1)
          [especialidad].astro   ← /directorio/jalisco/especialidades/hazmat/
      mapa.astro                 ← NUEVO (P1) — mapa nacional Leaflet/MapLibre
      buscar.astro               ← NUEVO (P1) — Pagefind dirigido al directorio
      comparar.astro             ← NUEVO (P2) — comparar dos estaciones
  layouts/
    BaseLayout.astro
    PageLayout.astro
    DirectorioLayout.astro       ← shell del directorio (sidebar + filtros + search bar global)
    EstadoLayout.astro           ← renombrar DirectorioEstadoLayout
    EstacionLayout.astro
  components/directorio/
    StationCard.astro            ← ya existe pero subutilizado
    StationCardCompact.astro     ← NUEVO
    StationMap.astro             ← NUEVO (Leaflet island)
    StationSearch.astro          ← NUEVO (Pagefind island)
    StationFilters.astro         ← NUEVO (filtros por servicio/especialidad)
    EmergencyNumbersBar.astro    ← NUEVO (extraer de cada estado)
    StateRegionsList.astro       ← NUEVO (extraer de cada estado)
    EppRecommendations.astro     ← NUEVO (extraer eppCards)
    StateBadgesStrip.astro       ← NUEVO (stats hero)
    NeighborStates.astro         ← NUEVO
    FAQDirectorio.astro          ← NUEVO (FAQ schema)
  styles/
    directorio/
      hero.css
      hub.css
      state.css
      station.css
```

**Beneficio**: pasar de ~11,300 líneas Astro replicadas → ~2,500 líneas + collections markdown. Mantenimiento 5x más rápido, build time mejor, bundle inline 70% menor.

### 2.4 Optimización de rendimiento

| Mejora | Impacto LCP / CLS / Bytes |
|---|---|
| `<Image />` de `astro:assets` con AVIF + responsive `srcset` | LCP -25% en mobile |
| `preconnect` a ExactDN | LCP -100ms |
| Eliminar script de re-escritura de `src` en `DOMContentLoaded` | CLS -0.05 |
| Defer TruConversion (`type="module"` o `requestIdleCallback`) | TBT -300ms |
| Extraer CSS inline gigante a `.css` con caché de CDN | TTFB sin cambio, pero bytes/req -50KB |
| Activar `<ViewTransitions />` | Mejor INP, UX premium |
| Pre-renderizar 666 fichas (ya estático) + activar Pagefind del directorio | Búsqueda <100ms sin server |

---

## FASE 3 · SEO TÉCNICO, LOCAL, PROGRAMÁTICO, SEMÁNTICO

### 3.1 SEO On-Page

| Elemento | Estado | Notas |
|---|---|---|
| Title hub | ✅ "Directorio de Estaciones de Bomberos en México \| BOMBERO.MX" (66 chars) | OK |
| Title estado | ⚠️ "Bomberos en {estado} \| {N} Estaciones \| BOMBERO.MX" — consistente, pero genérico | Mejorar con palabras clave LSI |
| Title estación | ⚠️ "{nombreCorto} \| {ciudad} \| BOMBERO.MX" — corto pero pierde keyword "bomberos" en algunos casos | Cambiar a "{nombre} - Teléfono y Dirección Bomberos {ciudad}, {estado}" |
| Meta description | ✅ truncado a 155 (función robusta) | OK |
| H1 único por página | ✅ verificado | OK |
| H2/H3 jerarquía | ⚠️ index tiene 7+ H2; estación tiene H2/H3 mezclados | Auditar con `astro check` |
| URL slugs | ⚠️ inconsistentes (`estacion-central-aguascalientes` vs `yuc-merida-central`) | Normalizar |
| Canonical | ✅ self-canonical + función `canonicalURL` | OK |
| OG/Twitter por página | ✅ dinámicos | OK |
| Hreflang | ✅ `es-MX`, `es`, `x-default` | OK |
| Robots meta | ✅ con `max-image-preview:large` | OK |

### 3.2 SEO Técnico

| Elemento | Estado | Notas |
|---|---|---|
| Sitemap | ✅ generado por `@astrojs/sitemap` con prioridades | NO incluye `<lastmod>` por URL — añadir |
| Robots.txt | ⚠️ bloquea GPTBot, Claude-Web, CCBot, Google-Extended → mala decisión para GEO | Ver Fase 4 |
| Sitemap del directorio separado | ❌ no existe | Sería ideal `/sitemap-directorio.xml` |
| `noindex` mal aplicado | 🔴 `[estado].astro` aplica noindex pero la página real es estática (sin noindex). Código muerto + falsa señal en auditorías. |
| Imágenes con `alt` | ✅ todas | OK |
| Imágenes con `width/height` | ✅ explícitos | OK |
| Imágenes `loading="lazy"` | ✅ excepto hero (eager) | OK |
| Estructured data global | ✅ Organization + WebSite + LocalBusiness | OK |
| `FireStation` schema | ✅ correcto | OK |
| `ItemList` schema por estado | ✅ correcto | OK |
| `FAQPage` schema | ❌ NO existe en directorio | Falta crítico |
| `Place` / `City` / `AdministrativeArea` schema | ❌ NO existe | Falta para GEO/local |
| `Article` schema en fichas | ❌ podría añadirse | Opcional |
| `Review` / `AggregateRating` | ❌ NO existe (no hay reseñas) | Sin UGC todavía |
| Canonical absoluto con trailing slash | ✅ función robusta | OK |
| 404 personalizado | ✅ existe en `/pages/404` | OK |

### 3.3 SEO Programático (oportunidad masiva)

Cada combinación es una landing potencial. **Volumen estimado**:

| Tipo de landing programática | URLs generables | Esfuerzo |
|---|---|---|
| `/directorio/{estado}/municipios/{municipio}/` | ~500 (todos los municipios con estaciones) | Bajo (ya hay data) |
| `/directorio/{estado}/especialidades/{especialidad}/` | 32 × 8 esp = ~250 | Bajo |
| `/directorio/{estado}/servicios/{servicio}/` | 32 × 12 srv = ~380 | Bajo |
| `/directorio/cerca-de-mi/` | 1 (con geolocalización JS) | Medio |
| `/directorio/{ciudad-importante}/` (alias) | ~50 | Medio |
| Comparativas `/directorio/comparar/{estacion-a}/vs/{estacion-b}/` | ~1,000 (curadas) | Alto |
| `/directorio/telefonos-emergencia/{estado}/` | 32 | Bajo |
| `/directorio/equipo-bomberos/{estado}/` (cross-sell EPP) | 32 | Bajo (genera leads) |

**Resultado**: pasar de ~700 URLs → 2,000–3,000 URLs indexables sin escribir contenido manual, con alto match de intent local.

### 3.4 SEO Local

| Señal | Estado |
|---|---|
| NAP (Name-Address-Phone) consistente en todas las fichas | ✅ |
| Coordenadas en todas las estaciones | ✅ 666/666 |
| `geo.region`, `geo.placename`, `ICBM` | ✅ pero CDMX-céntricos en SITE.geo |
| Google Maps embebido | ❌ NO (solo link externo) |
| GMB/Profile fichas vinculadas | ❌ NO |
| Reseñas con `Review` schema | ❌ |
| Horarios visibles (`openingHours` JSON-LD) | ✅ |
| `areaServed` con polígonos | ❌ (solo nombre de ciudad) |
| Schema `EmergencyService` | ❌ (se usa `FireStation` correctamente, pero podría duplicarse con `EmergencyService` para más cobertura semántica) |

### 3.5 EEAT (Experience, Expertise, Authoritativeness, Trustworthiness)

| Pilar | Estado |
|---|---|
| Experience | 🟡 textos detallados, falta UGC, reseñas, casos reales |
| Expertise | 🟢 contenido técnico NFPA correcto, citas a normas |
| Authoritativeness | 🟡 sin enlaces salientes a fuentes oficiales (CENAPRED, CONAFOR, Coordinación Nacional de Protección Civil, gobiernos estatales) |
| Trustworthiness | 🟡 sin fecha de "última actualización" visible por estación, sin atribución de fuentes |

**Acción**: añadir en cada estación: badge "Datos verificados 30/05/2026" + `dateModified` + link al cuerpo oficial del estado.

### 3.6 Internal linking — gaps

- ✅ Estado ↔ estaciones del estado
- ✅ Estación ↔ estados vecinos
- ✅ Estación ↔ estaciones cercanas
- ❌ Falta: estación ↔ municipio (no existe landing de municipio)
- ❌ Falta: estación ↔ otras estaciones con la misma especialidad
- ❌ Falta: blog ↔ directorio (artículos del blog deberían linkear estaciones relevantes)
- ❌ Falta: productos ↔ directorio (página de extintores debería linkear "compradores municipales del estado")
- ❌ Falta: hub del directorio ↔ landing por especialidad/región

### 3.7 Keywords / clusters faltantes

Por estado, hay clusters obvios sin atacar:

- "Teléfono bomberos {ciudad}" → existen pero no como landing dedicada
- "Bomberos {ciudad} 911" → idem
- "Estación de bomberos cerca de mí" → ninguna página
- "Bomberos {municipio} dirección" → solo en ficha (mismo H1 ya saturado)
- "Cómo ser bombero en {estado}" → tema pilar enorme, sin artículo
- "Sueldo de un bombero en México" → tema viral, alto CTR
- "Cuántos bomberos hay en {estado}" → respuesta directa que AI quisiera
- "Bomberos voluntarios {estado}" → query con bajo CPC y alto volumen
- "Patronato de bomberos {estado}" → bomberos de Veracruz, Querétaro etc.

---

## FASE 4 · GEO (Generative Engine Optimization)

### 4.1 Diagnóstico crítico

🔴 **`robots.txt` bloquea explícitamente** a:
- GPTBot (ChatGPT)
- CCBot (Common Crawl → entrena casi todo)
- Google-Extended (AI Overviews + Gemini training)
- anthropic-ai + Claude-Web (Claude)

**Consecuencia directa**: cuando un usuario pregunta a ChatGPT/Gemini/Claude "¿cuáles son los teléfonos de bomberos en Yucatán?", BOMBERO.MX **no puede ser citado**, y la respuesta va a competidores (Wikipedia, sitios gubernamentales, agregadores).

**Decisión**: en un directorio de información pública, el GEO traffic vale más que el "control" sobre el training. Tu data ya es pública.

**Acción inmediata**: permitir GPTBot, Google-Extended, CCBot (mantener bloqueo a scraper comerciales como AhrefsBot/SemrushBot/DataForSeoBot si así lo prefieres).

### 4.2 Citabilidad por motores generativos

| Elemento que un AI cita bien | Estado |
|---|---|
| Tablas claras de teléfonos | ⚠️ solo lista en sidebar |
| Listas numeradas/bullets con NAP | ✅ |
| Definiciones inequívocas ("La Estación X es…") | ✅ |
| FAQ con preguntas tal cual se hacen | ❌ NO existe FAQ en el directorio |
| Datos atomizados (`<dl>`, `<address>`) | ⚠️ parcial |
| Fecha visible de actualización | ❌ |
| Schema completo con `mainEntity` | ⚠️ falta `FAQPage`, `WebPage` con `mainEntity` |
| `aboutPage` / `contactPoint` por estado | ❌ |

### 4.3 Estrategia GEO sugerida

1. **Permitir AI bots** en robots.txt (excepto los puramente comerciales).
2. **Bloque FAQ por estado** con `FAQPage` schema. Preguntas reales:
   - "¿Cuál es el teléfono de bomberos en {estado}?"
   - "¿Cuántas estaciones de bomberos hay en {estado}?"
   - "¿Cómo solicitar servicio de bomberos en {ciudad}?"
   - "¿Los bomberos cobran por sus servicios en {estado}?"
   - "¿Dónde está la estación de bomberos más cercana en {ciudad}?"
3. **Bloque "Respuesta rápida"** al inicio de cada página de estado: 2–3 oraciones con stats + teléfono nacional (911) + tel. capital. Esto es lo que AI extrae.
4. **Tablas explícitas** "Teléfonos por municipio" con `<table>` semántico (no flexbox), que AI lee fácil.
5. **Schemas `Place`, `City`, `AdministrativeArea`** anidados al `ItemList`.
6. **`speakable`** schema para voice (Google Assistant).
7. **`dateModified` por página** en HTML y JSON-LD.
8. **Atribución**: "Fuente: H. Cuerpo de Bomberos de {estado} — actualizado {fecha}" como microcopy → fortalece confianza editorial.
9. **Llms.txt** (estándar emergente): publicar `/llms.txt` con índice del directorio y `/llms-full.txt` con resumen completo, optimizado para extracción por AI.
10. **Entidades enlazadas**: usar `sameAs` con Wikipedia/Wikidata para "Mérida", "Cuauhtémoc", "Zona Metropolitana de Guadalajara". Refuerza Knowledge Graph.

---

## FASE 5 · MARKETING Y CONVERSIÓN

### 5.1 Propuesta de valor actual

- Hero index: claro pero genérico ("El directorio más completo")
- Falta diferenciador: ¿por qué este vs Wikipedia? → "Datos verificados, actualizados {fecha}, con teléfonos directos a estación + 911"
- CTA principal en hub: "Selecciona tu Estado" → bien, pero abajo del fold en mobile

### 5.2 CRO — Funnels existentes

| Funnel | Estado |
|---|---|
| Usuario buscando emergencia → encontrar tel. | ⚠️ funcional pero requiere 3 clics (hub → estado → estación). Debería haber atajo "marca rápida: 911" + buscador prominente |
| Usuario protección civil municipal → quiere su ficha → contactarte | ❌ no existe formulario "Soy bombero / Protección Civil" ni "Reporta un dato erróneo" |
| Usuario comprador de equipo (B2G) → ve estación → cotiza EPP | ✅ sidebar de productos por servicio, pero CTA "Solicitar Cotización" → form genérico. Falta CTA específico "Cotizar EPP para mi estación" con campos pre-llenos |
| Usuario investigador → necesita datos del directorio | ❌ no hay export CSV/PDF ni API pública (oportunidad B2B → universidades, aseguradoras) |
| Usuario blog → entra a estación | ⚠️ blog no enlaza estaciones todavía |

### 5.3 Oportunidades de monetización

1. **Lead-gen B2G**: form "Soy responsable de procurement de mi municipio" → captación de RFPs/licitaciones.
2. **Listados patrocinados éticos**: estaciones que pagan por destacar SU ficha (badge "Verificado por su comandancia"). Cuidar la confianza editorial: distinguir claramente.
3. **Publirreportajes** por estado: "Cómo {empresa local} dotó de SCBA a Bomberos de Veracruz" — patrocinado, con SEO local masivo.
4. **Cursos / capacitación** afiliados (NFPA Mexico, ICS) por estado.
5. **Marketplace de equipos usados** entre estaciones (revolucionario, alta intención).
6. **API privada** para aseguradoras (riesgo de incendio por zona).
7. **Newsletter** "Bomberos de México" — base para email marketing futuro.

### 5.4 Confianza / autoridad

- Añadir: "Datos verificados con la comandancia el {dateModified}" por ficha.
- Añadir: logos de fuentes (gobiernos estatales, CENAPRED) en footer del directorio.
- Añadir: contador agregado en hub "X teléfonos verificados, Y estaciones, Z millones de ciudadanos cubiertos".
- Añadir: badge "Reportar error" → forma rápida (1 input) → fortalece UX y data.

---

## FASE 6 · FUNCIONALIDADES NUEVAS (priorizadas)

### P0 — Imprescindibles (3 meses)

| # | Funcionalidad | Por qué | Esfuerzo |
|---|---|---|---|
| F1 | **Búsqueda global del directorio** (Pagefind ya instalado, solo extender glob a `directorio/**`) | UX y SEO de cola larga | S |
| F2 | **Refactor a Content Collections** (estados + estaciones) | Mantenibilidad 5× | M |
| F3 | **Componentes reutilizables** (extraer 9k líneas duplicadas) | Bundle -50%, velocidad de desarrollo | M |
| F4 | **FAQ schema por estado + por hub** | GEO/SERPs/Rich Results | S |
| F5 | **Habilitar AI bots** en robots.txt | GEO (P0) | XS |
| F6 | **Tabla "Teléfonos por municipio"** en cada página de estado | GEO + UX | S |
| F7 | **Eliminar `[estado].astro` dinámico de pendientes** (código muerto) | Limpieza P0 | XS |
| F8 | **Unificar slugs de estaciones** (decidir patrón) | SEO + URL hygiene | M |
| F9 | **`dateModified` + "Datos verificados {fecha}"** | EEAT + Trust | S |
| F10 | **Mapa nacional interactivo** con MapLibre/Leaflet + cluster | Differentiator vs competencia | L |

### P1 — Alto impacto (3–6 meses)

| # | Funcionalidad | Esfuerzo |
|---|---|---|
| F11 | Landings por **municipio** (`/directorio/{estado}/municipios/{municipio}/`) | M |
| F12 | Landings por **especialidad** (`/directorio/{estado}/especialidades/{esp}/`) | M |
| F13 | **Filtros** (servicio, especialidad, horario, distancia) island | M |
| F14 | **"Cerca de mí"** con geolocalización (HTML5 + reverse geocoding) | M |
| F15 | **Formulario "Soy bombero" / "Reportar dato"** | S |
| F16 | **CTA contextual "Cotizar EPP para esta estación"** (pre-llena form) | S |
| F17 | **Newsletter "Bomberos de México"** | M |
| F18 | **`Place` + `AdministrativeArea` schemas** | S |
| F19 | **Llms.txt + llms-full.txt** | S |
| F20 | **Comparador de estaciones** (`/comparar/{a}/vs/{b}/`) | M |

### P2 — Crecimiento exponencial (6–12 meses)

| # | Funcionalidad | Esfuerzo |
|---|---|---|
| F21 | **Reseñas + AggregateRating** moderadas | L |
| F22 | **UGC**: subir fotos de estación (moderado) | L |
| F23 | **Heatmap nacional** de riesgo / cobertura | L |
| F24 | **Alertas en tiempo real** (incendios CONAFOR + sismos SSN) integradas en hub | L |
| F25 | **Centro de equipo recomendado por estación** (matriz IA: servicios → EPP) | M |
| F26 | **Generador AI de fichas faltantes** (con verificación humana) | M |
| F27 | **Marketplace de equipo usado** | XL |
| F28 | **API pública** del directorio (rate-limited) → backlinks orgánicos | M |
| F29 | **Programa "Padrino de estación"** (donaciones a una estación específica) | L |
| F30 | **App móvil** (PWA con offline + emergency dial) | XL |

---

## FASE 7 · PLAN MAESTRO + ROADMAPS

### 7.1 Matriz impacto × esfuerzo (TOP 30)

| # | Iniciativa | Impacto | Dificultad | Prioridad | KPI |
|---|---|---|---|---|---|
| 1 | Eliminar `[estado].astro` dinámico muerto | Bajo | XS | P0 | Limpieza repo |
| 2 | Permitir GPTBot/Google-Extended/CCBot | ALTO | XS | P0 | Citas en AI |
| 3 | Refactor a Content Collections | ALTO | M | P0 | Líneas -70% |
| 4 | Extraer componentes reutilizables | ALTO | M | P0 | Bundle -50% |
| 5 | Pagefind para directorio | ALTO | S | P0 | CTR interno |
| 6 | FAQ schema + bloque visible por estado | ALTO | S | P0 | Rich Results |
| 7 | Tabla teléfonos por municipio | ALTO | S | P0 | GEO citation |
| 8 | dateModified visible + JSON-LD | Medio | S | P0 | EEAT |
| 9 | Mapa nacional Leaflet | ALTO | L | P0–P1 | Sesión +40% |
| 10 | Landings por municipio | ALTO | M | P1 | URLs +500 |
| 11 | Landings por especialidad | ALTO | M | P1 | Long-tail |
| 12 | "Cerca de mí" + filtros | Medio | M | P1 | UX |
| 13 | CTA "Cotizar para esta estación" | ALTO | S | P1 | Leads B2G |
| 14 | Form "Reportar dato" | Medio | S | P1 | Calidad data |
| 15 | Schemas Place/AdministrativeArea | Medio | S | P1 | GEO |
| 16 | llms.txt + llms-full.txt | Medio | S | P1 | AI citations |
| 17 | View Transitions | Bajo | XS | P1 | UX |
| 18 | astro:assets `<Image />` | Medio | M | P1 | LCP -25% |
| 19 | Quitar script ExactDN runtime | Medio | S | P1 | CLS -0.05 |
| 20 | Sitemap dedicado de directorio | Bajo | XS | P1 | Crawl budget |
| 21 | Blog ↔ Directorio interlinking | Medio | M | P1 | Topical authority |
| 22 | Newsletter por estado | Medio | M | P1–P2 | Retention |
| 23 | Reseñas + AggregateRating | ALTO | L | P2 | CTR SERP |
| 24 | Comparador estación vs estación | Medio | M | P2 | Pages/session |
| 25 | UGC fotos | Medio | L | P2 | Engagement |
| 26 | Alertas tiempo real (sismos/incendios) | ALTO | L | P2 | Sesiones recurrentes |
| 27 | Matriz EPP recomendado AI | Medio | M | P2 | Lead quality |
| 28 | Generador AI fichas | ALTO | M | P2 | Coverage 100% municipios |
| 29 | API pública del directorio | Medio | M | P2 | Backlinks |
| 30 | App PWA con marcado offline | ALTO | XL | P2–P3 | Brand |

### 7.2 Roadmap 3 meses (jul–sep 2026)

**Mes 1 — fundamentos & quick wins**
- Limpieza: eliminar `[estado].astro` muerto; unificar `EstadoLayout`.
- Activar AI bots en robots.txt.
- Extender Pagefind a `directorio/**`; añadir caja de búsqueda en hub + sidebar.
- Crear `dateModified` + microcopy "verificado el…" en EstacionLayout.
- Añadir `<link rel="preconnect">` a ExactDN.
- Defer scripts no críticos.

**Mes 2 — refactor & schemas**
- Migrar 666 estaciones a Content Collection `estaciones`.
- Migrar 32 estados a Content Collection `estados`.
- Consolidar layouts a un `[estado]/index.astro` + `[estado]/[slug].astro` únicos.
- Extraer componentes (`StationCard`, `StationMap`, `EmergencyNumbersBar`, `EppRecommendations`, `FAQDirectorio`).
- FAQ schema por estado y hub (8 preguntas tipo).
- Tabla "Teléfonos por municipio" en cada estado (HTML semántico).
- Schemas `Place` + `AdministrativeArea` anidados.

**Mes 3 — mapa + GEO**
- Mapa nacional Leaflet/MapLibre (island con cluster).
- Mapa por estado embebido.
- llms.txt + llms-full.txt.
- `astro:assets` + `<Image />` global del directorio.
- Lighthouse mobile ≥95.
- Submit a Bing/Yandex; preparar GMB API para fichas.

**Métricas objetivo a 90 días**
- Páginas indexadas: 700 → 1,200.
- LCP mobile P75: −25%.
- CTR Google Search Console (directorio): +30%.
- Tiempo medio en `/directorio/*`: +40%.
- 0 errores en Rich Results Test.

### 7.3 Roadmap 6 meses (oct–dic 2026)

- Landings programáticas por municipio (~500 URLs).
- Landings por especialidad (~250 URLs).
- "Cerca de mí" + filtros como Astro island.
- Reseñas + AggregateRating (moderadas).
- Form "Soy bombero / Reportar dato" → captación + UGC light.
- Newsletter mensual por estado.
- Blog ↔ Directorio interlinking sistemático.
- Comparador (`/comparar/`).
- Programa "Verificado por la comandancia" (acuerdos con 5 cuerpos piloto).
- Apariciones en AI: monitorear citas en ChatGPT/Perplexity con queries directas.

**Objetivo a 180 días**
- URLs indexadas: 1,200 → 2,400.
- Tráfico orgánico directorio: ×2.
- Leads cotización (origen directorio): ×3.
- 50 reseñas reales agregadas.
- Citas en respuestas de ChatGPT/Perplexity para queries top de cada estado.

### 7.4 Roadmap 12 meses (ene–jun 2027)

- Alertas en tiempo real (sismos SSN-UNAM + CONAFOR incendios) en hub + por estado.
- UGC fotos moderadas (carga, moderación, publicación).
- Matriz IA "EPP recomendado para esta estación".
- Generador AI de fichas faltantes (municipios sin estación → cuál es la más cercana + cobertura).
- API pública del directorio (rate-limited) con docs públicas → estrategia link-building masiva.
- Marketplace de equipo usado entre estaciones (B2B vertical único).
- PWA con marcado offline para emergencias.
- Programa "Padrino de estación" (donaciones segmentadas).
- Heatmap nacional de riesgo / cobertura → ganchos PR.

**Objetivo a 365 días**
- URLs indexadas: 2,400 → 4,000+.
- Tráfico orgánico directorio: ×5 vs línea base.
- Posición #1 en SERP para "directorio bomberos México" + 100+ keywords long-tail.
- 5 fuentes oficiales con backlink al directorio.
- 200+ reseñas reales.
- Reconocimiento sectorial: prensa + universidades + protección civil federal.

---

## ANEXO A · Decisiones de diseño que recomiendo cerrar antes de empezar

1. **Patrón de slug**: `{estado-codigo}-{municipio}-{zona}` (corto) vs `{nombre-completo-descriptivo}` (SEO). Recomiendo el primero, alias 301 desde el segundo.
2. **Política de noindex en estados sin estaciones**: mejor 100% indexable; no hay estado sin estaciones, así que esto es moot.
3. **Política de UGC**: moderación pre-publicación obligatoria para evitar spam y proteger reputación de cuerpos de bomberos.
4. **Posición editorial**: ¿es BOMBERO.MX un directorio independiente o un brazo de marketing del e-commerce? Sé honesto y declarado en una página `/directorio/acerca-de/`. Esto es lo que más confianza genera.
5. **Política de datos**: cómo se reciben actualizaciones de las comandancias (mail dedicado, form, API privada).

---

## ANEXO B · Quick wins esta semana (sin refactor)

1. Cambiar `Disallow` por `Allow` en GPTBot, Google-Extended, CCBot.
2. Borrar `src/pages/directorio/[estado].astro` (código muerto).
3. Corregir contadores `stations:` en `index.astro` para que lean del TS.
4. Añadir `<link rel="preconnect" href="https://emwn2f4rcov.exactdn.com">` en `BaseLayout`.
5. Quitar el script `is:inline` que reescribe `src` en `DOMContentLoaded`; usar `cdnW()` directamente en todos los `<img>` del directorio (ya existe en index y layouts, pero no en todos los datos).
6. Añadir bloque "Última verificación: 30 mayo 2026" en hero del hub.
7. Activar Pagefind en directorio: cambiar build script de `--glob "blog/**/*.html"` a `--glob "{blog,directorio}/**/*.html"`.
8. "Yucatan" → "Yucatán" (script de reemplazo en `yucatan/[slug].astro`).
9. Pagefind ya genera índice de búsqueda — solo falta añadir el componente `<Search />` en sidebar del directorio.
10. Aplanar `inlineStylesheets`: cambiar a `"auto"` para que Astro decida; con CSS grande es mejor archivo cacheado.

---

## ANEXO C · KPIs sugeridos para tracking

- **SEO**: páginas indexadas, impresiones, clics, CTR, posición media — segmentado por `/directorio/*` (filtro GSC).
- **GEO**: queries en ChatGPT/Perplexity donde aparece BOMBERO.MX como fuente (medir con muestreo manual + futuras herramientas tipo Otterly/Profound).
- **UX**: LCP/INP/CLS por path, scroll depth en hub vs estado vs estación, % de clics a "Llamar" vs "Ver Maps".
- **Conversión**: leads B2G por origen (directorio vs producto), formularios "Reportar dato", suscripciones newsletter.
- **Calidad data**: % de fichas con dateModified <60 días, % de estaciones con reseña, % con foto verificada.

---

**Fin de la auditoría.**
