---
proyecto: BOMBERO
fecha: 2026-05-31
estado: aplicado en local (pendiente push)
tags:
  - mejoras
  - directorio
  - seo
  - geo
---

# Mejoras Directorio — Sprint 1-10 (31 mayo 2026)

> Resumen ejecutivo para Obsidian. Versión extendida en `MEJORAS-DIRECTORIO-APLICADAS.md` (raíz del proyecto).

## Archivos NUEVOS (8)

| Ruta | Función |
|---|---|
| `src/data/directorio-stats.ts` | Conteos reales por estado + fecha verificación centralizada |
| `src/components/directorio/DirectorioSearch.astro` | Buscador Pagefind con lazy-load |
| `src/components/directorio/FAQDirectorio.astro` | FAQ + `FAQPage` JSON-LD (3 scopes: nacional/estado/estacion) |
| `src/components/directorio/MunicipiosPhonesTable.astro` | Tabla HTML semántica por municipio + microdata |
| `src/components/directorio/VerifiedBadge.astro` | Badge de verificación + CTA reportar datos |
| `src/components/directorio/EmergencyNumbersBar.astro` | Barra horizontal con tels de emergencia |
| `src/components/directorio/StationCTA.astro` | CTA contextual + UTM tracking por estación |
| `public/llms.txt` + `public/llms-full.txt` | Índice GEO para LLMs |

## Archivos MODIFICADOS (7)

- `src/pages/directorio/index.astro` — conteos del dataset real, buscador, FAQ
- `src/LAYOUTS/DirectorioEstadoLayout.astro` — buscador en hero, FAQ, tabla municipios, verifiedBadge, EmergencyNumbersBar
- `src/LAYOUTS/EstacionLayout.astro` — FAQ por estación, StationCTA, schemas extendidos (FireStation+EmergencyService+ContactPoint+speakable)
- `src/LAYOUTS/BaseLayout.astro` — preconnect/dns-prefetch, scripts diferidos (requestIdleCallback), MutationObserver ExactDN
- `public/robots.txt` — AI bots permitidos, Bytespider bloqueado, referencia a llms.txt
- `package.json` — Pagefind incluye `{blog,directorio}/**/*.html`
- `src/pages/directorio/[estado].astro` — neutralizado (getStaticPaths = [])
- `src/pages/directorio/yucatan/[slug].astro` — Yucatan → Yucatán (identificadores intactos)

## Impacto esperado

| Métrica | Hoy | 90 días | 180 días |
|---|---|---|---|
| URLs indexadas | 700 | 1.200 | 2.400 |
| LCP mobile P75 | baseline | -25% | -35% |
| CTR GSC `/directorio/*` | baseline | +30% | +60% |
| Leads B2G desde directorio | baseline | ×3 | ×5 |
| Citas en ChatGPT/Perplexity | 0 (bloqueado) | medidas | recurrentes |

## Pendiente antes de push

1. Correr local: `npm i && npm run check && npm run build`
2. Validar visualmente:
   - `localhost:4321/directorio/` — buscador, FAQ, conteos
   - `localhost:4321/directorio/yucatan/` — barra emergencia, tabla municipios, FAQ
   - `localhost:4321/directorio/yucatan/yuc-merida-central/` — StationCTA, FAQ, badge verificado
   - `localhost:4321/llms.txt` y `/llms-full.txt`
3. Rich Results Test (Google) sobre 3 URLs muestra
4. Confirmar URL del repo Origenlab
5. **Frank dice "sube los cambios"** → ejecuto [[../Workflows/Workflow — Subir Cambios a GitHub]]

## Roadmap siguiente

- **P1 (30 días):** landings por municipio (~500 URLs), landings por especialidad (~250), mapa Leaflet
- **P1 (60 días):** Content Collections, extracción CSS, view transitions
- **P2 (90+):** reseñas+AggregateRating, comparador, UGC fotos, alertas tiempo real

Detalles completos en [[Auditoría del Directorio]] § Plan Maestro.
