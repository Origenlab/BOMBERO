---
proyecto: BOMBERO
fecha: 2026-05-31
tags:
  - arquitectura
  - urls
  - seo
---

# Arquitectura del Sitio — BOMBERO.MX

## Mapa de URLs

```
/                                            ← homepage
├── productos/
│   ├── trajes-para-bomberos/
│   │   ├── traje-estructural-nfpa-1971/
│   │   ├── traje-forestal-nfpa-1977/
│   │   ├── traje-arff-aeroportuario/
│   │   ├── traje-aproximacion/
│   │   └── traje-hazmat/
│   ├── cascos-para-bomberos/
│   │   ├── casco-estructural-nfpa-1971/
│   │   ├── casco-forestal-nfpa-1977/
│   │   └── casco-arff-aeroportuario/
│   ├── botas-para-bomberos/{estructural,forestal,caucho}/
│   ├── capuchas-para-bomberos/{nomex,pbi,particulada}/
│   ├── scba/
│   ├── herramientas-rescate/
│   ├── equipo-contra-incendios/hidrantes-gabinetes/
│   ├── extintores/
│   ├── tecnologia/
│   ├── rescate-vertical/
│   ├── rescate-acuatico/
│   ├── hazmat/
│   ├── forestales/
│   └── gafas-para-bomberos/{seguridad,goggle}/
│
├── directorio/                              ← HUB
│   ├── {estado}/                            ← 32 estados (.astro estáticos)
│   │   └── {slug-estacion}/                 ← 666+ fichas (dynamic [slug].astro)
│   └── [estado].astro                       ← NEUTRALIZADO (getStaticPaths = [])
│
├── blog/
│   ├── categoria/
│   └── pagina/
│
├── cotizar/
├── contacto/
├── nosotros/
└── 404
```

## Schemas estructurados emitidos

### Globales (en cada página vía BaseLayout)

- `Organization` (BOMBERO.MX)
- `WebSite`
- `LocalBusiness`

### Directorio

- **Hub:** `CollectionPage` + `ItemList` (32 estados) + `speakable` + `BreadcrumbList` + `FAQPage`
- **Estado:** `ItemList` (estaciones) + `AdministrativeArea` (con `containedInPlace: Country`) + `FAQPage` + `BreadcrumbList`
- **Estación:** `FireStation` + `EmergencyService` (multi-tipo) + `PostalAddress` + `GeoCoordinates` + `OpeningHoursSpecification` + `ContactPoint` + `speakable` + `FAQPage` + `BreadcrumbList` + `dateModified`

### Productos

- `Product` + `Offer`
- `BreadcrumbList`
- `FAQ` (via CategoriaLayout / ProductoLayout)

## Robots.txt — estado actual

- ✅ Permitidos: GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, GoogleOther, anthropic-ai, Claude-Web, ClaudeBot, PerplexityBot, Perplexity-User, Applebot-Extended, CCBot
- ❌ Bloqueados (scrapers comerciales): AhrefsBot, SemrushBot, MJ12bot, DotBot, BLEXBot, DataForSeoBot, Bytespider
- Sitemap referenciado: `https://bombero.mx/sitemap-index.xml`
- LLM index referenciado: `/llms.txt`, `/llms-full.txt`

## Redirects 301 (en `astro.config.mjs`)

| De | A |
|---|---|
| `/equipo-bomberos` | `/productos/` |
| `/trajes-bombero` | `/productos/epp-bomberos/` |
| `/cascos-bombero` | `/productos/cascos/` |
| `/extintores-mexico` | `/productos/extintores/` |
| `/equipo-scba` | `/productos/scba/` |
| `/tienda` | `/productos/` |
| `/catalogo` | `/productos/` |
| `/directorio/yucatan/yuc-kanasín/` | `/directorio/yucatan/yuc-kanasin/` |

## Trailing slash

- Política: `trailingSlash: "always"` + `build.format: "directory"`
- Razón: evitar 301 innecesarios `/blog` → `/blog/`

## Sitemap

- Prioridades granulares por tipo de URL:
  - `/` → 1.0
  - `/productos/*` → 0.9
  - `/categoria/*` → 0.85
  - `/servicios` / `/capacitacion` → 0.8
  - `/contacto` / `/cotizar` → 0.75
  - `/blog/*` → 0.7
  - `/nosotros` / `/privacidad` / `/terminos` → 0.5
  - default → 0.6
- Locale: `es-MX`

## Alias TypeScript (tsconfig.json)

```json
{
  "@/*":          "src/*",
  "@components/*": "src/components/*",
  "@layouts/*":   "src/LAYOUTS/*",
  "@data/*":      "src/data/*",
  "@utils/*":     "src/utils/*",
  "@styles/*":    "src/styles/*"
}
```

## Convenciones de slug

- **Estados:** kebab-case sin acentos (`yucatan`, `nuevo-leon`, `ciudad-de-mexico`).
- **Estaciones:** patrón inconsistente — algunos usan prefijo de sigla (`yuc-merida-central`), otros no (`estacion-central-aguascalientes`). Normalizar en P1.
- **Productos:** kebab-case con palabras clave (`traje-estructural-nfpa-1971`).
