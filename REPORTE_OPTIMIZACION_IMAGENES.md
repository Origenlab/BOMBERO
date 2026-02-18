# Reporte de Optimización de Imágenes — BOMBERO.MX
**Fecha:** 18 de febrero de 2026
**Directorio:** `/public/images/directorio/`

---

## Resumen Ejecutivo

| Métrica | Valor |
|---|---|
| **Imágenes procesadas** | 121 archivos |
| **Tamaño original** | 52.66 MB (JPEG) |
| **Tamaño final** | 4.26 MB (AVIF) |
| **Reducción total** | **48.4 MB (91.9%)** |
| **Promedio por imagen** | 36 KB (antes: 446 KB) |
| **Resolución** | 1408×768 px (mantenida) |
| **Formato** | JPEG → AVIF (quality 65) |
| **Build resultante** | 505 páginas compiladas ✓ |

---

## FASE 1 — Tabla de Control SEO

Se creó `/public/images/directorio/MAPEO_SEO_IMAGENES.csv` con 121 filas, columnas:
- `NUMERO` — índice
- `NOMBRE_ORIGINAL` — archivo JPEG original con timestamp
- `NOMBRE_SEO` — nombre optimizado para SEO (lowercase, hyphenated)
- `KEYWORD_PRINCIPAL` — keyword objetivo
- `USO_PLACEHOLDER` — sección/componente donde se usa
- `CATEGORIA` — clasificación (Estaciones, Vehículos, EPP, Equipos, Operaciones, Especializados, Servicios, Personal)

### Distribución por categoría

| Categoría | Cantidad |
|---|---|
| Estaciones | ~35 |
| Vehículos | ~18 |
| EPP (Equipo de Protección Personal) | ~14 |
| Equipos / Herramientas | ~22 |
| Operaciones | ~8 |
| Servicios / Rescate | ~8 |
| Especializados (HAZMAT) | ~6 |
| Personal | ~10 |

---

## FASE 2 — Conversión AVIF

### Proceso técnico
- **Herramienta:** `avifenc` v1.3.0 (libavif)
- **Pipeline:** JPEG → PNG (ImageMagick v7) → AVIF (avifenc)
- **Quality:** 65 (escala 0-100)
- **Speed:** 8 (balance calidad/velocidad)
- **Script:** `procesar_imagenes.sh` (procesamiento por lotes con log)

### Top 5 imágenes más pesadas (AVIF)
| Archivo | Peso |
|---|---|
| `estacion-bomberos-monterrey-01.avif` | 108 KB |
| `camion-bomberos-equipado-01.avif` | 104 KB |
| `bomberos-profesionales-accion-01.avif` | 84 KB |
| `camion-bomberos-aeropuerto-01.avif` | 80 KB |
| `estacion-bomberos-industrial-01.avif` | 76 KB |

### Top 5 imágenes más ligeras (AVIF)
| Archivo | Peso |
|---|---|
| `ambulancia-bomberos-emergencias-01.avif` | 8 KB |
| `equipo-bomberos-completo-01.avif` | 12 KB |
| `estacion-bomberos-equipada-01.avif` | 12 KB |
| `estacion-bomberos-guadalajara-01.avif` | 12 KB |
| `estacion-bomberos-oriente-01.avif` | 12 KB |

---

## FASE 3 — Asignación a Placeholders

Se implementaron imágenes en **3 páginas principales** del directorio:

### 1. `/directorio` (index.astro)
**Galería visual "Bomberos de México en Acción"** — 6 imágenes en grid 3×2:
- `estacion-bomberos-mexico-fachada-01.avif` — Hero principal (gran formato)
- `camion-bomberos-autobomba-urbana-01.avif` — Flota Vehicular
- `equipo-hazmat-materiales-peligrosos-01.avif` — Unidades HAZMAT
- `rescate-acuatico-bomberos-01.avif` — Rescate Acuático
- `bomberos-emergencia-incendio-estructural-01.avif` — Combate de Incendios
- `capacitacion-bomberos-profesional-01.avif` — Capacitación

### 2. `/directorio/veracruz`
**Thumbnails en 28 tarjetas de estaciones** (lógica contextual):
- Estaciones HAZMAT/Petroleras → `equipo-hazmat-materiales-peligrosos-01.avif`
- Estaciones Marítimas → `estacion-bomberos-maritimo-01.avif`
- Estaciones generales → `estacion-bomberos-veracruz-01.avif`

**Galería Visual Temática "Capacidades Operativas Veracruz"** — 4 imágenes:
- `estacion-bomberos-veracruz-01.avif` — Estaciones Veracruz
- `estacion-bomberos-maritimo-01.avif` — Rescate Marítimo / SEMAR
- `equipo-hazmat-materiales-peligrosos-01.avif` — HAZMAT Petrolero
- `estacion-bomberos-refineria-01.avif` — Cobertura Industrial PEMEX
- `estacion-bomberos-huracanes-01.avif` — Sistema Alertas Huracanes

### 3. `/directorio/san-luis-potosi`
**Thumbnails en 16 tarjetas de estaciones** (lógica contextual):
- Estaciones HAZMAT → `equipo-hazmat-materiales-peligrosos-01.avif`
- Estaciones Espeleología → `rescate-espeleologico-cuevas-01.avif`
- Estaciones Swift Water → `rescate-swift-water-rios-01.avif`
- Estaciones generales → `estacion-bomberos-profesional-01.avif`

**Galería Visual Temática "Capacidades Operativas San Luis Potosí"** — 4 imágenes:
- `estacion-bomberos-profesional-01.avif` — Estaciones SLP
- `equipo-hazmat-materiales-peligrosos-01.avif` — HAZMAT Industrial (BMW/GM)
- `rescate-espeleologico-cuevas-01.avif` — Rescate Espeleológico
- `rescate-swift-water-rios-01.avif` — Rescate Acuático Huasteca
- `capacitacion-bomberos-profesional-01.avif` — Capacitación NFPA

---

## FASE 4 — Recomendaciones

### Core Web Vitals (LCP)
Para las imágenes **above the fold** en páginas de alto tráfico, agregar `fetchpriority="high"`:
```html
<img
  src="/images/directorio/estacion-bomberos-mexico-fachada-01.avif"
  alt="..."
  fetchpriority="high"
  loading="eager"
/>
```

### Lazy Loading
Todas las imágenes implementadas ya usan `loading="lazy"` y `decoding="async"`.
Mantener `loading="eager"` solo para la primera imagen visible en el viewport.

### Dimensiones explícitas
Todas las imágenes tienen `width` y `height` declarados, eliminando CLS (Cumulative Layout Shift).

### Preload hint (opcional)
Para el LCP de la página index del directorio, agregar en `<head>`:
```html
<link rel="preload" as="image" href="/images/directorio/estacion-bomberos-mexico-fachada-01.avif" type="image/avif" />
```

### Backup de originales
Los 121 archivos JPEG originales se conservan en:
```
/public/images/directorio/backup_originales/
```
Se pueden eliminar cuando se confirme que las AVIF están en producción correctamente.

---

## Archivos modificados

| Archivo | Cambio |
|---|---|
| `src/pages/directorio/index.astro` | +Galería visual 6 imágenes + CSS responsive |
| `src/pages/directorio/veracruz.astro` | +Thumbnails tarjetas + Galería temática 5 imágenes + CSS |
| `src/pages/directorio/san-luis-potosi.astro` | +Thumbnails tarjetas + Galería temática 5 imágenes + CSS |
| `public/images/directorio/` | 121 JPEG → 121 AVIF (91.9% menos peso) |
| `public/images/directorio/MAPEO_SEO_IMAGENES.csv` | Tabla de control SEO creada |

---

*Generado automáticamente por el proceso de optimización de imágenes BOMBERO.MX*
