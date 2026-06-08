---
proyecto: BOMBERO
fecha: 2026-06-05
tags:
  - template
  - L3
  - productos
  - sidebar
  - homologacion
---

# Template — Página L3 Categoría de Producto

> **Página de referencia:** `/productos/trajes-para-bomberos/`  
> **Archivo fuente:** `src/pages/productos/trajes-para-bomberos/index.astro`  
> **Status:** ✅ Completada y aprobada — usar como master para homologación

---

## Estructura de Layout

```
PageLayout
├── Breadcrumb
├── [HERO — full width, dark]
├── QuickNav (pool="categoria", count=7)
├── CTABar
│
├── .page-layout  ← contenedor del two-column grid
│   └── .page-layout__inner  (grid: 1fr + 288px)
│       ├── .page-main  (flex-col, gap=space-5)
│       │   ├── .content-panel  #catalogo
│       │   │   └── SectionHeader + .productos__grid (3 col)
│       │   ├── .content-panel--dark  #tecnologia
│       │   │   └── SectionHeader + .specs__grid (3 col)
│       │   ├── .content-panel  #comparativa
│       │   │   └── SectionHeader + .comparativa__table
│       │   ├── .content-panel--faq  #faq
│       │   │   └── <FAQ items={...} title description />
│       │   └── .content-panel  #complementario
│       │       └── SectionHeader + .rel__grid (4 col)
│       │
│       └── .page-sidebar  (sticky top: 88px)
│           └── .sidebar-sticky  (11 widgets — ver abajo)
│
├── WhyChooseUs  ← full width
└── CTABanner   ← full width
```

---

## Grids de contenido

| Sección | Clase | Columnas base | 1024px | 768px | 640px |
|---|---|---|---|---|---|
| Productos | `.productos__grid` | 3fr | 3fr | 2fr | 1fr |
| Specs | `.specs__grid` | 3fr | 3fr | 1fr | 1fr |
| Relacionados | `.rel__grid` | 4fr | 4fr | 2fr | 1fr |

---

## Sidebar — 11 Widgets

El sidebar tiene `position: sticky; top: 88px` y aparece sólo en ≥ 1024px.

| # | Widget | Clase / Tipo | Header |
|---|---|---|---|
| 1 | **Tipos de [Categoría]** | nav, sb-link con dot + badge | dark |
| 2 | **Especificaciones Clave** | sb-specs-grid (2×2), métricas técnicas | light |
| 3 | **Normas NFPA Aplicables** | sb-norms, chips ember/fire/smoke/neutral | dark |
| 4 | **CTA Cotización** | sb-cta (fondo ember), btn + whatsapp | — |
| 5 | **Materiales Certificados** | sb-materials, nombre + desc | light |
| 6 | **Marcas Distribuidas** | sb-brands, dot + nombre + sub | dark |
| 7 | **EPP Complementario** | nav, sb-link con icon-wrap | dark |
| 8 | **¿Por qué BOMBERO.MX?** | sb-why, checkmarks verdes | light |
| 9 | **Más Categorías** | nav, sb-link con icon-wrap + ver todos | dark |
| 10 | **Contacto Directo** | sb-contact, tel + email + whatsapp + horarios | light |
| 11 | **Guías y Recursos** | sb-resource, label de color + texto | light |

### Widgets dinámicos por categoría

Al homologar, los widgets que **cambian por categoría** son:

- **W1 — Tipos de [Categoría]:** cambiar links, dots, badges según subcategorías propias
- **W2 — Especificaciones Clave:** cambiar métricas relevantes (ej. botas: talla, resistencia al calor; cascos: clase de impacto, rating térmico)
- **W3 — Normas NFPA Aplicables:** filtrar solo normas relevantes para esa categoría
- **W5 — Materiales Certificados:** adaptar materiales propios (cuero, Kevlar, ABS, etc.)

Los widgets **W4, W6, W7, W8, W9, W10, W11** son **iguales en todas las categorías** — solo copiar tal cual.

---

## Clases CSS principales

### Layout two-column
```css
.page-layout          /* bg: smoke-50, padding-block: space-8 */
.page-layout__inner   /* grid: 1fr 288px, gap: space-8, max-width: container-max */
.page-main            /* flex-col, gap: space-5 */
.page-sidebar         /* width: 288px */
.sidebar-sticky       /* position: sticky, top: 88px, flex-col, gap: space-4 */
```

### Paneles de contenido
```css
.content-panel        /* bg: white, rounded: radius-2xl, border, shadow, padding: space-8 */
.content-panel--dark  /* bg: smoke-900, border: smoke-800, shadow dark */
.content-panel--faq   /* bg: smoke-50, border: smoke-100 */
```

### Widgets del sidebar
```css
.sb-widget            /* bg: white, rounded: radius-xl, border, overflow: hidden */
.sb-widget__header    /* bg: smoke-900, flex, gap: space-3 */
.sb-widget__header--light  /* bg: smoke-50, border-bottom */
.sb-widget__title     /* 11px, 700, white, uppercase, tracking */
.sb-widget__title--dark    /* color: smoke-700 */
.sb-widget__icon      /* color: fire-400 */
.sb-widget__icon--dark     /* color: smoke-500 */
.sb-widget__body      /* padding: space-2 0 */

/* Navigation links */
.sb-link              /* flex, padding: 0.625rem space-4, border-left: 3px, hover: ember */
.sb-link--active      /* border-left: ember-500, bg: ember/6% */
.sb-link__dot         /* 8px circle — ember/fire/smoke */
.sb-link__text        /* flex-col, badged */
.sb-link__badge       /* 10px chip ember/fire/smoke */
.sb-link__arrow       /* hidden, visible on hover/active */
.sb-link__icon-wrap   /* 26x26px rounded icon container */

/* Specs grid */
.sb-specs-grid        /* grid 2×2, gap: 1px, bg: smoke-100 */
.sb-spec              /* flex-col, center, value + unit + label */
.sb-spec__value       /* 1.15rem, 800, ember-700 */

/* Normas */
.sb-norm              /* flex, code chip + desc */
.sb-norm__code--ember/fire/smoke/neutral

/* Materials */
.sb-material          /* flex-col, name + desc, border-bottom */
.sb-material__name    /* sm, 700, smoke-800 */

/* Brands */
.sb-brand             /* flex, dot + name/sub */
.sb-brand__dot        /* 7px, ember-500 */

/* Why */
.sb-why__item         /* flex, check svg verde + texto */
.sb-why__check        /* color: #16a34a */

/* Contact */
.sb-contact__item     /* flex, svg + label/value */
.sb-contact__item--wa /* whatsapp green */

/* CTA block */
.sb-cta               /* bg: gradient ember, text-center */
.sb-cta__btn          /* bg: white, color: ember-700 */
.sb-cta__whatsapp     /* bg: rgba(255,255,255,0.12), color: white */

/* Resources */
.sb-resource          /* flex, label badge + text */
.sb-resource__label   /* 10px chip ember */
```

---

## Responsive breakpoints

```
≥ 1024px  → two-column: main (1fr) + sidebar (288px)
< 1180px  → sidebar se reduce a 260px
< 1024px  → sidebar OCULTO, layout single-column
< 968px   → hero: single column, hero seo hidden
< 768px   → productos 2-col, specs 1-col, rel 2-col, table xs
< 640px   → todo 1-col, padding reducido
```

---

## Imports requeridos

```astro
import PageLayout from "@layouts/PageLayout.astro";
import QuickNav from "@components/QuickNav.astro";
import SectionHeader from "@components/SectionHeader.astro";
import CTABanner from "@components/CTABanner.astro";
import WhyChooseUs from "@components/WhyChooseUs.astro";
import FAQ from "@components/FAQ.astro";
import Breadcrumb from "@components/Breadcrumb.astro";
import CTABar from "@components/CTABar.astro";
import CategoryCard from "@components/CategoryCard.astro";
import ProductCard from "@components/ProductCard.astro";
import { productSchemaComplete, breadcrumbJsonLd } from "@utils/seo";
```

---

## Schema JSON-LD emitido

```
productSchemaComplete({ name, description, image, url, category, features, certifications })
breadcrumbJsonLd([Inicio, Productos, {Categoría}])
```

---

## Categorías L3 a homologar

| Categoría | URL | Status |
|---|---|---|
| Trajes para Bomberos | `/productos/trajes-para-bomberos/` | ✅ Master / Completada |
| Cascos para Bomberos | `/productos/cascos-para-bomberos/` | ✅ Completada |
| Botas para Bomberos | `/productos/botas-para-bomberos/` | ✅ Completada |
| Guantes para Bomberos | `/productos/guantes-para-bomberos/` | ✅ Completada |
| Capuchas para Bomberos | `/productos/capuchas-para-bomberos/` | ⏳ Pendiente |
| Gafas para Bomberos | `/productos/gafas-para-bomberos/` | ⏳ Pendiente |
| SCBA / ERA | `/productos/scba/` | ⏳ Pendiente |
| Herramientas de Rescate | `/productos/herramientas-rescate/` | ⏳ Pendiente |
| Equipo Contra Incendios | `/productos/equipo-contra-incendios/` | ⏳ Pendiente |
| Extintores | `/productos/extintores/` | ⏳ Pendiente |
| Equipos HAZMAT | `/productos/hazmat/` | ⏳ Pendiente |
| Rescate Vertical | `/productos/rescate-vertical/` | ⏳ Pendiente |
| Rescate Acuático | `/productos/rescate-acuatico/` | ⏳ Pendiente |
| Equipo Médico | `/productos/equipo-medico/` | ⏳ Pendiente |
| Equipo Forestal | `/productos/forestales/` | ⏳ Pendiente |

---

## Checklist de homologación por categoría

Al aplicar el template a una nueva categoría:

- [ ] Copiar `trajes-para-bomberos/index.astro` como base
- [ ] Actualizar `const productos = [...]` con los productos propios
- [ ] Actualizar `CANONICAL`, `title`, `description`, `keywords`
- [ ] Actualizar `breadcrumb` + `jsonLdSchemas`
- [ ] Actualizar `trajesFaqs` → `{categoria}Faqs` con preguntas propias
- [ ] **W1 sidebar:** cambiar links + dots + badges a las subcategorías propias
- [ ] **W2 sidebar:** cambiar las 4 métricas técnicas clave de esa categoría
- [ ] **W3 sidebar:** filtrar solo las normas NFPA relevantes
- [ ] **W5 sidebar:** cambiar materiales certificados propios
- [ ] Cambiar imágenes del hero, productos, specs y WhyChooseUs
- [ ] Cambiar textos de SectionHeader de cada panel
- [ ] Actualizar tabla comparativa (columnas + filas)
- [ ] Actualizar CategoryCards del panel #complementario

---

## Notas adicionales

- **No usar `CategoriaLayout.astro`** — este template usa `PageLayout` directamente con la estructura HTML inline. El `CategoriaLayout.astro` existente es un layout alternativo pero no corresponde a este diseño.
- El sidebar **se oculta en mobile** (`< 1024px`) — el contenido debe ser autocontenido sin el sidebar.
- La sección FAQ acepta `items` prop con `{ question, answer }[]` — pasar siempre al menos 6-8 preguntas relevantes.
- `WhyChooseUs` acepta array de imágenes — usar 6 imágenes de la carpeta de la categoría.
