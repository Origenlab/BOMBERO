---
proyecto: BOMBERO
fecha: 2026-05-31
tags:
  - estado
  - bombero
  - origenlab
---

# Estado del Sitio — BOMBERO.MX

## Identidad

- **Nombre comercial:** BOMBERO.MX
- **Razón social:** BOMBERO.MX S.A. de C.V.
- **Fundación:** 2010
- **Sede:** Av. Tamaulipas 150, Piso 13, Col. Condesa, Cuauhtémoc, 06140 CDMX
- **Contacto comercial:** ventas@bombero.mx · +52 55 2078 0102
- **Contacto editorial directorio:** directorio@bombero.mx
- **Repo:** [Origenlab/BOMBERO](https://github.com/Origenlab/BOMBERO)
- **Ruta local:** `~/Documents/Claude/Projects/BOMBERO` (creado 2026-05-31)

## Stack técnico

- Astro 5.7
- MDX
- `@astrojs/sitemap` (con prioridades granulares)
- Pagefind (ahora incluye `directorio/**` además de `blog/**`)
- ExactDN (CDN de imágenes)
- Rybbit + TruConversion (analytics + heatmap)
- Fuente: Inter (preload de 400 y 700)
- Despliegue: confirmar plataforma (Vercel/Netlify/Cloudflare Pages)

## Estructura macro

```
src/
├── content/pages/          # markdown de páginas legales
├── data/
│   ├── estaciones-*.ts     # 32 archivos, 666+ estaciones
│   ├── directorio-stats.ts # ★ NUEVO: fuente única de conteos
│   ├── site.ts             # SITE global
│   ├── navigation.ts
│   └── ...
├── components/
│   └── directorio/         # ★ NUEVOS:
│       ├── DirectorioSearch.astro
│       ├── EmergencyNumbersBar.astro
│       ├── FAQDirectorio.astro
│       ├── MunicipiosPhonesTable.astro
│       ├── StationCTA.astro
│       └── VerifiedBadge.astro
├── LAYOUTS/
│   ├── BaseLayout.astro          # preconnect, scripts diferidos, MutationObserver
│   ├── PageLayout.astro
│   ├── DirectorioEstadoLayout.astro  # FAQ + tabla + verifiedBadge
│   ├── EstacionLayout.astro          # FAQ + StationCTA + schemas extendidos
│   └── ...
└── pages/
    └── directorio/
        ├── index.astro              # FAQ + buscador + conteos reales
        ├── [estado].astro           # NEUTRALIZADO (getStaticPaths = [])
        ├── aguascalientes.astro     # 32 archivos estado
        ├── jalisco.astro
        ├── ...
        └── yucatan/[slug].astro     # dynamic per estación (×32 estados)
```

## Estado de las mejoras (Sprint 1-10 — 31 mayo 2026)

| Sprint | Tema | Estado |
|---|---|---|
| 1 | Quick wins (robots, conteos, código muerto) | ✅ |
| 2 | Pagefind del directorio | ✅ |
| 3 | FAQ schema + bloque visible | ✅ |
| 4 | Tabla municipios + Place schema | ✅ |
| 5 | dateModified + EEAT | ✅ |
| 6 | llms.txt + llms-full.txt | ✅ |
| 7 | EmergencyNumbersBar | ✅ |
| 8 | preconnect + scripts defer | ✅ |
| 9 | StationCTA + reporte de datos | ✅ |
| 10 | Verificación final | ✅ |

## Cobertura nacional del directorio

- **32 estados** publicados
- **666+ estaciones** verificadas (al 30/05/2026)
- Estado con más estaciones: Veracruz (47)
- Estado con menos: Colima (5)

## Próximos sprints sugeridos

- Landings por **municipio** (`/directorio/{estado}/municipios/{municipio}/`)
- Landings por **especialidad** (HAZMAT, ARFF, rescate acuático)
- Migración a **Content Collections** (Astro 5)
- **Mapa interactivo** Leaflet/MapLibre como Astro island
- Extracción de **CSS inline** gigantesco (1,200-1,700 líneas por layout)
- Componente `MapEmbed` por ficha (Google Maps lazy)
- Comparador `/comparar/{a}/vs/{b}/`
- Sistema de **reseñas + AggregateRating**

Ver [[../Estado/Roadmap 3-6-12 meses]] para detalles.

## Enlaces

- Auditoría completa → [[Auditoría del Directorio]]
- Mejoras aplicadas → [[Mejoras Directorio — Sprint 1-10]]
- Workflow GitHub → [[../Workflows/Workflow — Subir Cambios a GitHub]]
- Arquitectura URLs → [[../Arquitectura/Arquitectura del Sitio]]
