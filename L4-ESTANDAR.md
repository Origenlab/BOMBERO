# Estándar Oficial L4 — Páginas de Producto Individual (BOMBERO.MX)

> **Plantilla de referencia:** `/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/`  
> **Última actualización:** 2026-06-12  
> **Versión:** 2.0 (ProductL4Layout)

---

## Índice

1. [Arquitectura General](#1-arquitectura-general)
2. [Stack Tecnológico](#2-stack-tecnológico)
3. [Layout Principal: ProductL4Layout](#3-layout-principal-productl4layout)
4. [Componentes del Sistema L4](#4-componentes-del-sistema-l4)
5. [Módulos y Secciones](#5-módulos-y-secciones)
6. [Sidebar: ProductL4Sidebar](#6-sidebar-productl4sidebar)
7. [Sistema CSS: product-l3.css](#7-sistema-css-product-l3css)
8. [Estructura de Datos de una Página L4](#8-estructura-de-datos-de-una-página-l4)
9. [SEO Técnico y Semántico](#9-seo-técnico-y-semántico)
10. [Schema.org Implementado](#10-schemaorg-implementado)
11. [Sistema Responsivo](#11-sistema-responsivo)
12. [Convenciones de Desarrollo](#12-convenciones-de-desarrollo)
13. [Checklist para Nuevo L4](#13-checklist-para-nuevo-l4)
14. [Plantilla Base Copy-Paste](#14-plantilla-base-copy-paste)

---

## 1. Arquitectura General

### Jerarquía de layouts

```
PageLayout (base HTML, <head>, <body>, nav global, footer)
└── ProductL4Layout (orquestador L4)
    ├── Breadcrumb
    ├── HeroSection
    ├── QuickNav
    ├── CTABar
    ├── .l4-layout (fondo gris)
    │   ├── .l4-layout__inner (grid 2 columnas: main + sidebar)
    │   │   ├── <main> (columna izquierda ~1fr)
    │   │   │   ├── Section: Catálogo de Perspectivas (#catalogo)
    │   │   │   ├── Section: Tecnología y Specs (#specs)
    │   │   │   └── Section: Tabla Comparativa (#comparativa)
    │   │   └── ProductL4Sidebar (columna derecha 288px)
    │   └── .l4-fullwidth (full-width sin sidebar)
    │       ├── Section: Catálogo Relacionado (#relacionados)
    │       └── Section: FAQ + Cotización (#faq)
    ├── WhyChooseUs (full-width)
    └── CTABanner (full-width)
```

### Flujo de lectura del usuario

```
Hero → CTA rápido → [Catálogo de perspectivas del producto] → [Specs técnicas]
→ [Tabla comparativa de configuraciones] → [Catálogo EPP complementario]
→ [FAQ] → [Por qué elegirnos] → [CTA final]
```

### Arquitectura de conversión

| Punto de conversión | Componente | Objetivo |
|---|---|---|
| Top | CTABar | Cotización rápida |
| Sidebar fijo | sb-cta + WhatsApp | Contacto en cualquier scroll |
| Relacionados | CategoryCard con CTA | Cross-sell de EPP complementario |
| FAQ | FAQQuote → formulario | Captura de leads |
| Footer | CTABanner | Cierre de sesión |

---

## 2. Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Astro 4.x (SSG) |
| Lenguaje | TypeScript (frontmatter) |
| Estilos | CSS vanilla + variables (`--color-*`, `--space-*`) |
| Hoja compartida | `src/styles/product-l3.css` |
| Imágenes | `.avif` (principal), `.webp` (fallback) |
| SEO | Schema.org JSON-LD (Product + FAQPage) |
| Interlinking | Sidebar de anchor links + widget de hermanos L4 |

---

## 3. Layout Principal: ProductL4Layout

**Archivo:** `src/layouts/ProductL4Layout.astro`

### Props completas

```typescript
interface Props {
  // ── SEO ──────────────────────────────────────────────────────────────
  title: string;               // "<Producto> | <Keyword principal> | México"
  description: string;         // ≤160 caracteres, incluir norma + material + región
  keywords: string[];          // 8–12 keywords long-tail
  canonical: string;           // Slug relativo: "/productos/categoria/producto/"
  type?: "website" | "product"; // Default: "product"
  image?: string;              // OG image — ruta /images/...avif

  // ── Breadcrumb ───────────────────────────────────────────────────────
  breadcrumb: { label: string; href?: string }[];
  // El último item NO lleva href (página actual)

  // ── Hero ─────────────────────────────────────────────────────────────
  heroBadge: string;           // "Traje Forestal · NFPA 1977 · Nomex®"
  heroTitle: string;           // Nombre del producto (sin norma)
  heroTitleHighlight: string;  // Norma/certificación en <span> destacado
  heroSubtitle: string;        // 2–3 líneas, propuesta de valor + geografía
  heroSeoBlocks: [             // Exactamente 2 bloques de texto SEO
    { title: string; text: string },
    { title: string; text: string }
  ];

  // ── CTABar ───────────────────────────────────────────────────────────
  ctaBarQuote: string;         // "Cotizar Traje Forestal NFPA 1977"

  // ── Sección Catálogo de Perspectivas ─────────────────────────────────
  productosLabel: string;      // Etiqueta del SectionHeader (eyebrow)
  productosTitle: string;      // H2 de la sección
  productosDesc: string;       // Subtítulo/bajada del H2
  productosContent: string;    // HTML: 2 párrafos SEO con <strong> para keywords
  productoCards: ProductCardItem[];  // Array de 4–6 tarjetas (ver tipo abajo)
  productosAltSuffix?: string; // Sufijo para alt de imágenes: "Traje forestal NFPA 1977 certificado"

  // ── Sección Specs ────────────────────────────────────────────────────
  specsLabel?: string;         // Default: "Tecnología y Certificaciones"
  specsTitle: string;          // H2 de la sección
  specsDesc: string;           // Bajada del H2
  specsContent: string;        // HTML: 2 párrafos técnicos
  specsCards: SpecCard[];      // 3 tarjetas (ver tipo abajo)

  // ── Sección Tabla Comparativa ─────────────────────────────────────────
  comparativaLabel?: string;   // Default: "Tabla Comparativa"
  comparativaTitle: string;
  comparativaDesc: string;
  comparativaContent: string;  // HTML: 2 párrafos con contexto de la tabla
  tablaHeaders: string[];      // Cabeceras de la tabla (6 columnas recomendado)
  tablaRows: TablaRow[];       // Filas (4–8 filas recomendado)

  // ── Sección Relacionados (full-width) ────────────────────────────────
  relacionadosLabel?: string;  // Default: "Catálogo Relacionado"
  relacionadosTitle: string;
  relacionadosDesc: string;
  relacionadosContent: string; // HTML: 2 párrafos de cross-sell
  relacionadoCards: RelacionadoCard[];  // 4 tarjetas (ver tipo abajo)

  // ── FAQ ──────────────────────────────────────────────────────────────
  faqs?: FaqItem[];            // 5–8 preguntas (ver tipo abajo)

  // ── WhyChooseUs ──────────────────────────────────────────────────────
  whyChooseImages?: string[];  // Opcional — imágenes del componente

  // ── Sidebar L4 ───────────────────────────────────────────────────────
  sidebarCategoryLabel: string;    // "Trajes para Bombero"
  sidebarCategoryHref: string;     // "/productos/trajes-para-bomberos/"
  sidebarSiblings: SidebarSibling[];    // Productos hermanos L4 (4–6 items)
  sidebarSections?: SidebarSection[];   // Anchor links de secciones (5 items)
  sidebarCtaText: string;          // Texto del CTA del sidebar
  sidebarWaMsg: string;            // Mensaje prellenado para WhatsApp
  sidebarArticleLinks?: ArticleLink[];  // Blog relacionado (3–5 artículos)
  sidebarNormLinks?: NormLink[];        // Normas NFPA relevantes (3–5 normas)
}
```

### Tipos de datos

```typescript
// Tarjeta de producto (Catálogo de perspectivas)
interface ProductCardItem {
  nombre: string;          // Nombre completo con norma y característica
  slug: string;            // Ruta absoluta o relativa — se normaliza automático
  badge: string;           // "MÁS VENDIDO" | "NFPA 1977" | "Inherente" | etc.
  badgeColor: "ember" | "fire" | "smoke";  // ember=naranja, fire=rojo, smoke=gris
  imagen: string | null;   // Ruta /images/...avif
  descripcion: string;     // 2–3 oraciones. Incluir keyword principal
  caracteristicas: string[]; // 5 bullets técnicos específicos
  aplicacion: string;      // "Incendio forestal · Quemas · Interface urbano-rural"
}

// Tarjeta de Specs (sección oscura)
interface SpecCard {
  title: string;
  icon: string;            // "shield" | "certificate" | "users" | "star"
  image?: string;          // Opcional — usa fallback de productoCards[i]
  description: string;     // Párrafo técnico detallado
}

// Fila de tabla comparativa
interface TablaRow {
  cells: {
    text: string;
    chip?: "ember" | "fire" | "smoke";  // Renderiza como pill coloreada
    strong?: boolean;                    // Primer cell siempre bold automático
  }[];
}

// Tarjeta de Relacionados
interface RelacionadoCard {
  title: string;
  icon?: string;
  image?: string;          // Ruta /images/...avif
  href: string;            // URL de destino
  buttonText: string;      // "Ver Traje Estructural" | "Cascos NFPA"
  description?: string;
  items?: { label: string; href: string }[];  // 3 sub-links
}

// FAQ item
interface FaqItem {
  q: string;  // Pregunta (usar H-question real de usuario)
  a: string;  // HTML con <strong> en keywords — sin tags de bloque
}

// Sidebar: producto hermano
interface SidebarSibling {
  href: string;
  label: string;
  badge?: string;          // "Esta página" para el activo
  badgeColor?: "ember" | "fire" | "smoke" | "neutral";
  active?: boolean;        // true solo en la página actual
}

// Sidebar: sección anchor
interface SidebarSection {
  anchor: string;          // "#catalogo" | "#specs" | etc.
  label: string;           // Texto descriptivo
  badge?: string;          // Número de items (ej: "6")
}

// Sidebar: artículo del blog
interface ArticleLink {
  href: string;
  label: string;
  date?: string;           // "2025" | "Jun 2025"
}

// Sidebar: norma/certificación
interface NormLink {
  href: string;
  label: string;
  badge?: string;          // "NFPA 1977" | "ASTM" | "CONAFOR"
}
```

---

## 4. Componentes del Sistema L4

### Mapa completo de componentes

| Componente | Archivo | Responsabilidad | Props clave |
|---|---|---|---|
| `ProductL4Layout` | `src/layouts/ProductL4Layout.astro` | Orquestador maestro L4 | Ver sección 3 |
| `ProductL4Sidebar` | `src/components/ProductL4Sidebar.astro` | Sidebar 9 widgets sticky | categoryLabel, siblings, sections, ctaText, waMsg, articleLinks, normLinks |
| `ProductCard` | `src/components/ProductCard.astro` | Tarjeta de perspectiva de producto | nombre, slug, badge, badgeColor, imagen, descripcion, caracteristicas, aplicacion |
| `CategoryCard` | `src/components/CategoryCard.astro` | Tarjeta de specs o relacionados | title, icon, image, href, buttonText, description, items |
| `HeroSection` | `src/components/HeroSection.astro` | Hero con badge + titulo + seo blocks | badge, title (HTML), subtitle, blocks[2] |
| `SectionHeader` | `src/components/SectionHeader.astro` | Eyebrow + H2 + desc + slot | label, title, description + slot |
| `Breadcrumb` | `src/components/Breadcrumb.astro` | Nav breadcrumb + Schema BreadcrumbList | items[]: {label, href?} |
| `CTABar` | `src/components/CTABar.astro` | Barra CTA sticky/fija post-hero | quote |
| `QuickNav` | `src/components/QuickNav.astro` | Links rápidos de la categoría | pool, count |
| `FAQQuote` | `src/components/FAQQuote.astro` | Acordeón FAQ + formulario cotización | title, description, items[]: {question, answer} |
| `WhyChooseUs` | `src/components/WhyChooseUs.astro` | Sección de confianza full-width | images? |
| `CTABanner` | `src/components/CTABanner.astro` | Banner CTA de cierre (no props) | — |
| `PageLayout` | `src/layouts/PageLayout.astro` | Base HTML, SEO, schemas, nav, footer | title, description, keywords, type, canonical, image, jsonLd |

### ProductCard — Estructura visual

```
┌──────────────────────────────────────────┐
│ [imagen 16:10]          [badge pill]     │
│──────────────────────────────────────────│
│ ▌ (accent line gradient ember→fire)      │
│ nombre (H3)                              │
│ descripcion (3 líneas)                   │
│ ──── chips ────                          │
│ [chip1] [chip2] [chip3] [chip4] [chip5]  │
│ ──── aplicacion ────                     │
│ 🔧 Incendio forestal · Quemas ·...       │
│ [btn Ver Especificaciones →]             │
└──────────────────────────────────────────┘
```

**Clases BEM:** `.pc`, `.pc__img-wrap`, `.pc__badge`, `.pc__body`, `.pc__accent`, `.pc__chips`, `.pc__app`, `.pc__btn`

**IMPORTANTE:** Todo el CSS de `.pc*` vive en `product-l3.css` (no en el `<style>` del componente) para evitar el bug de inyección de CSS scoped en Astro tras full-rewrite del componente.

---

## 5. Módulos y Secciones

### Módulo 1 — Hero del Producto

**Componente:** `HeroSection`  
**ID de sección:** (fuera del grid, full-width)  
**Datos requeridos:**
- `heroBadge`: línea de credenciales separadas por `·`
- `heroTitle` + `heroTitleHighlight`: genera `<h1>Título <span>Norma</span></h1>`
- `heroSubtitle`: propuesta de valor en 2–3 líneas
- `heroSeoBlocks[2]`: 2 bloques `{title, text}` con HTML — keyword density moderada, uso de `<strong>`

**Reglas SEO del Hero:**
- El H1 siempre incluye el keyword principal y la norma NFPA
- El bloque 1 establece la distribución en México y la certificación
- El bloque 2 describe el catálogo de perspectivas

### Módulo 2 — Catálogo de Perspectivas (Sección Productos)

**ID:** `#catalogo`  
**Componente:** `SectionHeader` + grid de `ProductCard`  
**Grid:** `.productos__grid.productos__grid--4col` → `repeat(3, 1fr)` dentro del main  
**Cantidad de cards:** 6 (ideal) — 3×2 grid perfecto  
**Datos por card:**

```
nombre      → incluir norma + característica específica
slug        → SIEMPRE la URL de la página L4 actual (todas las cards apuntan al mismo producto)
badge       → máximo 2–3 palabras en mayúsculas
badgeColor  → ember (técnico), fire (popular/recomendado), smoke (neutro)
imagen      → diferente por card — muestra ángulos o contextos distintos del producto
descripcion → 2–3 oraciones con keyword + beneficio medible
caracteristicas → exactamente 5 bullets técnicos concretos (no genéricos)
aplicacion  → máximo 3 contextos separados por ·
```

**Regla:** Cada card explora UNA dimensión del mismo producto (material, certificación, ergonomía, visibilidad, transpirabilidad, diseño operativo).

### Módulo 3 — Tecnología y Certificaciones (Specs)

**ID:** `#specs`  
**Componente:** `SectionHeader` + `specs__grid` de `CategoryCard`  
**Grid:** `.specs__grid` → 3 columnas  
**Fondo:** `content-panel--dark` (oscuro)  
**Cantidad de cards:** siempre 3  
**Estructura de cada SpecCard:**

```
title         → área temática: "Materiales", "Certificaciones NFPA", "Aplicaciones"
icon          → "shield" | "certificate" | "users"
image         → se usa specFallbacks[i] si no se provee (auto desde productoCards)
description   → párrafo técnico extendido. Incluir normas, pruebas ASTM, laboratorio ISO 17025
```

### Módulo 4 — Tabla Comparativa

**ID:** `#comparativa`  
**HTML:** `<table class="comparativa__table">` con `cert-chip`  
**Columnas recomendadas:** 6  
1. Configuración (siempre `<strong>`, primer cell)
2. Tejido/Material
3. Peso o Medida técnica (`chip: "smoke"`)
4. Característica clave (`chip: "fire"`)
5. Certificación (`chip: "ember"`)
6. Perfil de uso

**Filas recomendadas:** 4–8  
**Regla:** La primera fila debe ser la configuración más vendida/básica.

### Módulo 5 — Catálogo Relacionado (full-width, sin sidebar)

**ID:** `#relacionados`  
**Grid:** `.l4-fullwidth .rel__grid` → `repeat(4, 1fr)` desktop  
**Componente:** `CategoryCard`  
**Cantidad de cards:** siempre 4  
**Estructura estándar para EPP:**

```javascript
[
  { title: "Traje Estructural / Complementario", icon: "shield", ... },
  { title: "Cascos para Bombero",                icon: "helmet", ... },
  { title: "Botas para Bombero",                 icon: "boot",   ... },
  { title: "Guantes para Bombero",               icon: "glove",  ... },
]
```

Cada card lleva 3 sub-links (`.items[]`) que apuntan a L4 específicos dentro de esa categoría.

### Módulo 6 — FAQ

**ID:** `#faq`  
**Componente:** `FAQQuote`  
**Datos:** `faqs[]` con `{q, a}` — el `a` acepta HTML (`<strong>`)  
**Cantidad:** 5–8 preguntas  
**Schema:** Genera `FAQPage` JSON-LD automáticamente cuando `faqs.length > 0`

**Tipos de preguntas por categoría:**
1. Diferencia con producto alternativo (comparación)
2. ¿Qué certifica la norma X?
3. ¿El producto X protege igual que Y?
4. Datos técnicos medibles (peso, temperatura, tiempo)
5. Mantenimiento y vida útil
6. Casos de uso específicos (quemas, rescate, licitación)

### Módulo 7 — WhyChooseUs (full-width)

**Componente:** `WhyChooseUs`  
**Props:** `images?` (opcional)  
**Posición:** fuera del `.l4-layout`, después del `CTABanner`  
**Contenido:** hardcoded en el componente (trustmarks de BOMBERO.MX)

### Módulo 8 — CTABanner (full-width)

**Componente:** `CTABanner`  
**Sin props** — contenido hardcoded  
**Posición:** último elemento antes del footer global

---

## 6. Sidebar: ProductL4Sidebar

**Archivo:** `src/components/ProductL4Sidebar.astro`  
**CSS clase raíz:** `.page-sidebar`  
**Posición:** sticky dentro del grid `l4-layout__inner`  
**Desaparece en:** `max-width: 1024px`

### Los 9 Widgets

| Widget | Condición | Props fuente |
|---|---|---|
| W1 — En esta página | `sections.length > 0` | `sidebarSections` |
| W2 — Productos de la categoría | Siempre visible | `sidebarSiblings`, `sidebarCategoryLabel/Href` |
| W3 — CTA Principal | Siempre visible | `sidebarCtaText`, `sidebarWaMsg` |
| W4 — Artículos del Blog | `articleLinks.length > 0` | `sidebarArticleLinks` |
| W5 — Normas y Certificaciones | `normLinks.length > 0` | `sidebarNormLinks` |
| W6 — EPP Complementario | Siempre visible | Hardcoded (9 items) |
| W7 — Marcas que Distribuimos | Siempre visible | Hardcoded (8 marcas) |
| W8 — ¿Por qué BOMBERO.MX? | Siempre visible | Hardcoded (8 bullets) |
| W9 — Contacto Directo | Siempre visible | Hardcoded (tel, email, WhatsApp) |

### W1 — Secciones anchor (sidebarSections)

```javascript
const sidebarSections = [
  { anchor: "#catalogo",     label: "N Perspectivas del Producto", badge: "6" },
  { anchor: "#specs",        label: "Tecnología y Certificaciones" },
  { anchor: "#comparativa",  label: "Configuraciones [Norma]" },
  { anchor: "#relacionados", label: "EPP Complementario" },
  { anchor: "#faq",          label: "Preguntas Frecuentes" },
];
```

### W2 — Hermanos L4 (sidebarSiblings)

```javascript
const sidebarSiblings = [
  { label: "Producto A",  href: "/productos/categoria/producto-a/" },
  { label: "Producto B",  href: "/...",  active: true, badge: "Esta página" }, // ← página actual
  { label: "Producto C",  href: "/..." },
  { label: "Producto D",  href: "/..." },
  { label: "Producto E",  href: "/..." },
];
// REGLA: Exactamente 1 item con active: true y badge: "Esta página"
```

### W4 — Artículos blog (sidebarArticleLinks)

```javascript
const sidebarArticleLinks = [
  { href: "/blog/slug-articulo/", label: "Título del artículo", date: "2025" },
  // 3–5 artículos relacionados al producto
];
```

### W5 — Normas NFPA (sidebarNormLinks)

```javascript
const sidebarNormLinks = [
  { href: "/blog/nfpa-XXXX/", label: "NFPA XXXX — Descripción", badge: "NFPA XXXX" },
  { href: "/blog/astm-YYYY/", label: "ASTM YYYY — Descripción",  badge: "ASTM" },
  // 3–5 normas relevantes al producto
];
```

---

## 7. Sistema CSS: product-l3.css

**Archivo:** `src/styles/product-l3.css`  
**Importado en:** `ProductL4Layout.astro` y `ProductCategoryLayout.astro`

### Clases de grid principales

| Clase | Grid | Uso |
|---|---|---|
| `.productos__grid` | `repeat(3, 1fr)` | L3: catálogo de sub-categorías |
| `.productos__grid--4col` | `repeat(3, 1fr)` (override en L4 scoped) | L4: catálogo de perspectivas |
| `.specs__grid` | `repeat(3, 1fr)` | L4: specs cards |
| `.rel__grid` | `repeat(3, 1fr)` | Base para relacionados |
| `.l4-fullwidth .rel__grid` | `repeat(4, 1fr)` | L4: relacionados full-width (override scoped) |

### Clases de sidebar (`.sb-*`)

```
.page-sidebar          → <aside> contenedor
.sidebar-sticky        → inner sticky container
.sb-widget             → bloque de widget (borde, padding, radius)
.sb-widget--why        → variante fondo oscuro
.sb-widget--contact    → variante contacto
.sb-widget__header     → header del widget (icono + título)
.sb-widget__title      → texto del header
.sb-widget__body       → contenido del widget
.sb-link               → link individual del sidebar
.sb-link--active       → estado activo (página actual)
.sb-link--back         → link "← Ver todos"
.sb-link--sub          → sub-link (indentado, texto pequeño)
.sb-link--section      → link de sección principal
.sb-link--article      → link de artículo de blog
.sb-link--more         → "Ver todos →" al pie de widget
.sb-link__dot          → punto de color antes del link
.sb-link__badge        → pill de badge dentro del link
.sb-link__meta         → meta-info (fecha, sub-tipo)
.sb-link__arrow        → chevron al final del link
.sb-cta                → bloque CTA principal
.sb-brands             → grid de pills de marcas
.sb-brand              → pill individual de marca
.sb-why                → grid de bullets "¿Por qué?"
.sb-contact            → grid de contacto directo
```

### Clases de ProductCard (`.pc-*`)

```
.pc                → contenedor card
.pc__img-wrap      → wrapper de imagen (aspect-ratio 16/10)
.pc__badge         → badge posicionado sobre imagen
.pc__body          → columna flex del contenido
.pc__accent        → línea de 2px gradient ember→fire
.pc__chips         → lista de chips (list-style: none !important)
.pc__chip          → chip individual de característica
.pc__app           → barra oscura con aplicación
.pc__btn           → botón CTA al pie de la card
```

---

## 8. Estructura de Datos de una Página L4

### Patrón de archivos

```
src/pages/productos/
└── [categoria]/                          ← L3 index.astro
    └── [producto]/
        └── index.astro                   ← L4 (este estándar)
```

### Constantes recomendadas al inicio del frontmatter

```typescript
---
import ProductL4Layout from "@layouts/ProductL4Layout.astro";

// ── Constantes de imagen ──────────────────────────────────────────
const SLUG       = "/productos/[categoria]/[producto]/";
const IMAGE_BASE = "/images/[carpeta-de-imagenes]";
const IMAGES = {
  hero:          `${IMAGE_BASE}/imagen-hero.avif`,
  perspectiva1:  `${IMAGE_BASE}/imagen-1.avif`,
  perspectiva2:  `${IMAGE_BASE}/imagen-2.avif`,
  perspectiva3:  `${IMAGE_BASE}/imagen-3.avif`,
  perspectiva4:  `${IMAGE_BASE}/imagen-4.avif`,
  perspectiva5:  `${IMAGE_BASE}/imagen-5.avif`,
  perspectiva6:  `${IMAGE_BASE}/imagen-6.avif`,
};
const IMAGE = IMAGES.hero;

// ── Datos del catálogo ────────────────────────────────────────────
const productoCards = [ /* 6 cards */ ];
const specsCards    = [ /* 3 cards */ ];
const tablaHeaders  = [ /* 6 strings */ ];
const tablaRows     = [ /* 4–8 rows */ ];
const relacionadoCards = [ /* 4 cards */ ];

// ── Sidebar ───────────────────────────────────────────────────────
const sidebarSiblings      = [ /* 4–6 hermanos, 1 active */ ];
const sidebarSections      = [ /* 5 anchor links */ ];
const sidebarArticleLinks  = [ /* 3–5 artículos */ ];
const sidebarNormLinks     = [ /* 3–5 normas */ ];

// ── FAQ ───────────────────────────────────────────────────────────
const faqs = [ /* 5–8 preguntas */ ];
---
```

### Campos SEO obligatorios

| Campo | Formato | Ejemplo |
|---|---|---|
| `title` | `[Producto] \| [Keyword] \| México` | `Traje Forestal NFPA 1977 \| Nomex® Ultraligero < 400 g/m² \| México` |
| `description` | ≤160 chars, keyword + norma + región | `Traje forestal NFPA 1977 — Nomex® ultraligero...` |
| `keywords[]` | 8–12 strings long-tail | `["traje forestal NFPA 1977", "comprar traje bombero México", ...]` |
| `canonical` | `/productos/categoria/producto/` | trailing slash siempre |
| `image` | `/images/.../imagen.avif` | Primera imagen del catálogo |

### Campos opcionales con default

| Campo | Default si no se provee |
|---|---|
| `type` | `"product"` |
| `specsLabel` | `"Tecnología y Certificaciones"` |
| `comparativaLabel` | `"Tabla Comparativa"` |
| `relacionadosLabel` | `"Catálogo Relacionado"` |
| `faqs` | Array vacío → FAQ genérico de 3 preguntas |
| `sidebarSections` | Array vacío → W1 no se renderiza |
| `sidebarArticleLinks` | Array vacío → W4 no se renderiza |
| `sidebarNormLinks` | Array vacío → W5 no se renderiza |

---

## 9. SEO Técnico y Semántico

### Fórmulas de title y description

**Title:** `{Producto norma} | {Material/característica clave} | México`  
Ejemplos:
- `Traje Forestal NFPA 1977 | Nomex® Ultraligero < 400 g/m² | México`
- `Casco Estructural NFPA 1971 | Globe® GX-7 Fibra de Carbono | México`
- `Guantes Forestales NFPA 1977 | Cuero Vaqueta Nomex® | México`

**Description (≤160 chars):**  
`{Producto} {norma} — {material/característica}. {Marcas}. {Certificación organismo}. {Cobertura}`  
Ejemplo: `Traje forestal NFPA 1977 — Nomex® ultraligero < 400 g/m², resistencia inherente. Globe, Honeywell y MSA. Certificado CONAFOR y protección civil. 32 estados.`

### Jerarquía H1–H4

```
H1  → heroTitle + heroTitleHighlight (en HeroSection)
H2  → SectionHeader.title (uno por sección: Catálogo, Specs, Comparativa, Relacionados, FAQ)
H3  → ProductCard.nombre / CategoryCard.title / FAQQuote.question
H4  → Subsecciones internas (no usadas actualmente)
```

**Regla:** Un solo H1 por página. Todos los H2 incluyen keyword secundaria.

### Keywords por sección

| Sección | Densidad objetivo | Posición keywords |
|---|---|---|
| Hero | Alta | H1, subtitle, seoBlocks |
| Catálogo perspectivas | Media | card.nombre, card.descripcion |
| Specs | Alta técnica | description de cards (normas, pruebas ASTM) |
| Tabla | Media | primera columna de cada fila |
| Relacionados | Baja (cross-sell) | card.title, sub-links |
| FAQ | Alta (long-tail) | preguntas completas, primeras líneas de respuestas |

---

## 10. Schema.org Implementado

`ProductL4Layout` genera automáticamente 2 schemas JSON-LD:

### Schema Product (siempre presente)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "{canonical}#product",
  "name": "{heroTitle}",
  "description": "{description}",
  "image": "{image}",
  "url": "{canonical}",
  "brand": {
    "@type": "Brand",
    "name": "BOMBERO.MX",
    "logo": "{SITE.organization.logo}"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "MXN",
    "lowPrice": "1",
    "highPrice": "99999",
    "offerCount": "{productoCards.length}",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": "2027-02-24"
  }
}
```

### Schema FAQPage (cuando faqs.length > 0)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{faq.q}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{faq.a}"
      }
    }
  ]
}
```

### Schema BreadcrumbList

Generado automáticamente por el componente `Breadcrumb` según el array `breadcrumb[]`.

---

## 11. Sistema Responsivo

### Breakpoints del L4

| Breakpoint | Cambio principal |
|---|---|
| `max-width: 1280px` | Sidebar se estrecha a 260px. Catálogo perspectivas → 2 cols |
| `max-width: 1024px` | Sidebar desaparece. Layout pasa a 1 columna |
| `max-width: 768px` | Catálogo perspectivas → 2 cols. Tabla scroll horizontal |
| `max-width: 480px` | Catálogo perspectivas → 1 col |

### Grid de relacionados (l4-fullwidth)

| Breakpoint | Columnas |
|---|---|
| Desktop (>1024px) | 4 columnas |
| Tablet (≤1024px) | 2 columnas |
| Mobile (≤480px) | 1 columna |

---

## 12. Convenciones de Desarrollo

### Nomenclatura de imágenes

```
/images/[producto-categoria]/[producto-especifico]-[descriptivo]-[numero].avif
```

Ejemplos:
```
/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif
/images/cascos-para-bombero/casco-bombero-estructural-nfpa-1971-lateral-01.avif
```

### Nomenclatura de slugs L4

```
/productos/[categoria-plural]/[producto-norma]/
```

Siempre con trailing slash. Ejemplos:
```
/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/
/productos/cascos-para-bomberos/casco-estructural-nfpa-1971/
/productos/guantes-para-bomberos/guantes-estructurales/
```

### Reglas de código

1. **TypeScript en frontmatter** — todos los `as const` necesarios en arrays de badgeColor
2. **`SLUG` como constante** — el slug de la página actual siempre en una const, no repetido
3. **`IMAGE_BASE` como constante** — la ruta base de imágenes en una const
4. **`IMAGES` como objeto** — mapa de todas las imágenes con claves descriptivas
5. **`IMAGE = IMAGES.hero`** — imagen OG siempre la del hero
6. **productoCards slug** — siempre apunta a `SLUG` (misma página), no a sub-páginas
7. **HTML en strings de content** — siempre con template literal `` `...` ``
8. **Texto de FAQ** — HTML permitido en `a` con `<strong>` para keywords

### Anti-patterns a evitar

```typescript
// ❌ NO usar slug absoluto hardcoded
{ slug: "/productos/trajes/forestal/" }

// ✅ Usar la constante SLUG
{ slug: SLUG }

// ❌ NO mezclar HTML en strings sin template literal
productosContent="<p>Texto</p>"

// ✅ Siempre template literal
productosContent={`<p>Texto</p>`}

// ❌ NO más de 1 active: true en sidebarSiblings
{ active: true }, { active: true }

// ✅ Exactamente 1 activo
{ active: true, badge: "Esta página" } // solo 1
```

---

## 13. Checklist para Nuevo L4

### Datos básicos

- [ ] `SLUG` definido con trailing slash
- [ ] `IMAGE_BASE` y `IMAGES` definidos
- [ ] `title` ≤60 chars con keyword + "| México"
- [ ] `description` ≤160 chars con keyword + norma + marcas + región
- [ ] 8–12 `keywords` long-tail relevantes
- [ ] `canonical` = `SLUG`
- [ ] `breadcrumb` con 4 niveles (Inicio → Productos → Categoría → Producto)

### Catálogo de perspectivas

- [ ] 6 `productoCards` con imágenes distintas
- [ ] Cada card con `slug: SLUG` (misma página)
- [ ] 5 `caracteristicas` específicas y técnicas por card
- [ ] `badge` y `badgeColor` apropiados
- [ ] `aplicacion` con 2–3 contextos separados por `·`

### Specs

- [ ] 3 `specsCards`: Materiales, Certificaciones, Aplicaciones
- [ ] Cada card con normas, pruebas ASTM y laboratorio mencionados
- [ ] `specsTitle` incluye keyword de certificación

### Tabla comparativa

- [ ] 6 headers de columna
- [ ] 4–8 filas, primera fila = configuración más popular
- [ ] Columnas 3–4–5 usan `chip` (smoke, fire, ember)

### Relacionados

- [ ] 4 `relacionadoCards` (EPP complementario)
- [ ] Cada card con 3 `items` sub-links a L4 específicos
- [ ] `buttonText` conciso y accionable

### FAQ

- [ ] 5–8 preguntas de `faqs`
- [ ] Preguntas reales que un comprador haría
- [ ] `a` con `<strong>` en keywords principales
- [ ] Al menos 1 pregunta comparativa con producto alternativo

### Sidebar

- [ ] `sidebarSiblings`: 4–6 items, exactamente 1 `active: true`
- [ ] `sidebarSections`: 5 anchor links con labels descriptivos
- [ ] `sidebarArticleLinks`: 3–5 artículos relacionados
- [ ] `sidebarNormLinks`: 3–5 normas relevantes con badge
- [ ] `sidebarCtaText`: texto de conversión específico al producto
- [ ] `sidebarWaMsg`: mensaje WhatsApp prellenado con el producto

### Verificación final

- [ ] Build sin errores TypeScript
- [ ] Schema Product válido en Google Rich Results Test
- [ ] Schema FAQPage visible en Search Console
- [ ] Breadcrumb visible y con Schema BreadcrumbList
- [ ] Sidebar visible en desktop, oculto en ≤1024px
- [ ] Relacionados en 4 columnas desktop, 2 en tablet
- [ ] FAQ desplegable funcional

---

## 14. Plantilla Base Copy-Paste

```astro
---
import ProductL4Layout from "@layouts/ProductL4Layout.astro";

// ── Constantes ────────────────────────────────────────────────────
const SLUG       = "/productos/[CATEGORIA]/[PRODUCTO]/";
const IMAGE_BASE = "/images/[CARPETA]";
const IMAGES = {
  hero:  `${IMAGE_BASE}/[imagen-hero].avif`,
  p1:    `${IMAGE_BASE}/[imagen-1].avif`,
  p2:    `${IMAGE_BASE}/[imagen-2].avif`,
  p3:    `${IMAGE_BASE}/[imagen-3].avif`,
  p4:    `${IMAGE_BASE}/[imagen-4].avif`,
  p5:    `${IMAGE_BASE}/[imagen-5].avif`,
  p6:    `${IMAGE_BASE}/[imagen-6].avif`,
};
const IMAGE = IMAGES.hero;

// ── Catálogo de Perspectivas (6 cards) ───────────────────────────
const productoCards = [
  {
    nombre: "[Producto] [Norma] — [Característica 1]",
    slug: SLUG,
    badge: "MÁS VENDIDO",
    badgeColor: "fire" as const,
    imagen: IMAGES.p1,
    descripcion: "[2–3 oraciones con keyword principal y beneficio medible]",
    caracteristicas: [
      "[Característica técnica específica 1]",
      "[Característica técnica específica 2]",
      "[Característica técnica específica 3]",
      "[Característica técnica específica 4]",
      "[Característica técnica específica 5]",
    ],
    aplicacion: "[Contexto 1] · [Contexto 2] · [Contexto 3]",
  },
  // ... 5 cards más siguiendo el mismo patrón
];

// ── Specs (3 cards) ───────────────────────────────────────────────
const specsCards = [
  {
    title: "Materiales y Construcción",
    icon: "shield",
    description: "[Párrafo técnico: material, peso, normas de prueba, certificación ISO 17025]",
  },
  {
    title: "Certificaciones [Norma]",
    icon: "certificate",
    description: "[Párrafo: qué certifica la norma, pruebas ASTM obligatorias, quién la exige]",
  },
  {
    title: "Aplicaciones y Operaciones",
    icon: "users",
    description: "[Párrafo: contextos de uso, tipo de brigada, cobertura geográfica]",
  },
];

// ── Tabla Comparativa ─────────────────────────────────────────────
const tablaHeaders = [
  "Configuración", "[Tejido/Material]", "[Peso/Medida]",
  "[Característica]", "Certificación", "Perfil de Uso",
];
const tablaRows = [
  {
    cells: [
      { text: "[Configuración Base]" },
      { text: "[Material]" },
      { text: "[Valor]",        chip: "smoke" as const },
      { text: "[Característica]", chip: "fire"  as const },
      { text: "[Norma]",         chip: "ember" as const },
      { text: "[Uso típico]" },
    ],
  },
  // ... más filas
];

// ── Relacionados (4 cards) ────────────────────────────────────────
const relacionadoCards = [
  {
    title: "[Producto Relacionado 1]",
    icon: "shield",
    image: "/images/[ruta]/imagen.avif",
    href: "/productos/[categoria]/[producto]/",
    buttonText: "Ver [Producto 1]",
    items: [
      { label: "[Sub-producto A]", href: "/productos/[categoria]/[a]/" },
      { label: "[Sub-producto B]", href: "/productos/[categoria]/[b]/" },
      { label: "[Sub-producto C]", href: "/productos/[categoria]/[c]/" },
    ],
  },
  // ... 3 más (Cascos, Botas, Guantes típicamente)
];

// ── Sidebar ───────────────────────────────────────────────────────
const sidebarSiblings = [
  { label: "[Producto Hermano A]", href: "/productos/[cat]/[a]/" },
  { label: "[ESTE PRODUCTO]",      href: SLUG, active: true, badge: "Esta página" },
  { label: "[Producto Hermano C]", href: "/productos/[cat]/[c]/" },
  { label: "[Producto Hermano D]", href: "/productos/[cat]/[d]/" },
];
const sidebarSections = [
  { anchor: "#catalogo",    label: "[N] Perspectivas del Producto", badge: "6" },
  { anchor: "#specs",       label: "Tecnología y Certificaciones" },
  { anchor: "#comparativa", label: "Configuraciones [Norma]" },
  { anchor: "#relacionados", label: "EPP Complementario" },
  { anchor: "#faq",         label: "Preguntas Frecuentes" },
];
const sidebarArticleLinks = [
  { href: "/blog/[slug-1]/", label: "[Título artículo 1]", date: "2025" },
  { href: "/blog/[slug-2]/", label: "[Título artículo 2]", date: "2025" },
  { href: "/blog/[slug-3]/", label: "[Título artículo 3]", date: "2025" },
];
const sidebarNormLinks = [
  { href: "/blog/nfpa-[N]/",  label: "NFPA [N] — [Descripción]",   badge: "NFPA [N]" },
  { href: "/blog/astm-[N]/",  label: "ASTM [N] — [Descripción]",   badge: "ASTM" },
  { href: "/blog/[org]-epp/", label: "[Organismo] — [Descripción]", badge: "[Org]" },
];

// ── FAQ (5–8 preguntas) ───────────────────────────────────────────
const faqs = [
  {
    q: "¿Qué diferencia hay entre [este producto] y [alternativo]?",
    a: "El <strong>[este producto]</strong> está diseñado para <strong>[contexto]</strong>...",
  },
  {
    q: "¿Qué certifica la norma [NFPA N]?",
    a: "La norma <strong>[NFPA N]</strong> establece...",
  },
  // ... más preguntas
];
---

<ProductL4Layout
  title="[Producto] [Norma] | [Keyword/Material] | México"
  description="[Producto] [norma] — [material/característica]. [Marcas]. [Organismo cert]. [N] estados."
  keywords={[
    "[keyword principal con norma]",
    "[producto] [lugar]",
    "[material] [producto]",
    // 8–12 total
  ]}
  type="product"
  canonical={SLUG}
  image={IMAGE}
  breadcrumb={[
    { label: "Inicio",          href: "/" },
    { label: "Productos",       href: "/productos/" },
    { label: "[Categoría]",     href: "/productos/[categoria]/" },
    { label: "[Producto Norma]" }, // sin href = página actual
  ]}
  heroBadge="[Producto] · [Norma] · [Material/Marca]"
  heroTitle="[Nombre del Producto]"
  heroTitleHighlight="[Norma o certificación]"
  heroSubtitle="[Propuesta de valor en 2–3 líneas. Incluir material, operaciones, certificación y cobertura geográfica.]"
  heroSeoBlocks={[
    {
      title: "Distribuidor de [Producto] [Norma] en México",
      text: "El <strong>[producto] [norma]</strong> está diseñado para <strong>[contexto]</strong>...",
    },
    {
      title: "[N] Perspectivas del [Producto] [Norma]",
      text: "Cada tarjeta explora una característica clave del <strong>[producto] [norma]</strong>...",
    },
  ]}
  ctaBarQuote="Cotizar [Producto] [Norma]"
  productosLabel="[Producto] [Norma]"
  productosTitle="[N] Perspectivas del [Producto]"
  productosDesc="[Descripción de lo que muestra el catálogo de perspectivas]"
  productosContent={`
    <p>El <strong>[producto] [norma]</strong> no es solo [descripción genérica]: es <strong>[propuesta diferencial]</strong>...</p>
    <p>Todos los <strong>[productos] [norma]</strong> incluyen ficha técnica completa y certificados de laboratorio acreditado ISO/IEC 17025...</p>
  `}
  productoCards={productoCards}
  productosAltSuffix="[Producto] [norma] certificado"
  specsTitle="Lo que Hace al [Producto] [Norma]"
  specsDesc="[Descripción de los 3 pilares técnicos del producto]"
  specsContent={`
    <p>[Párrafo técnico 1 sobre el material o tecnología principal]</p>
    <p>[Párrafo técnico 2 sobre certificaciones y documentación para licitaciones]</p>
  `}
  specsCards={specsCards}
  comparativaTitle="Configuraciones del [Producto] [Norma]"
  comparativaDesc="[Descripción de qué se compara en la tabla]"
  comparativaContent={`
    <p>[Párrafo sobre cómo elegir la configuración correcta]</p>
    <p>[Párrafo sobre documentación incluida para licitaciones]</p>
  `}
  tablaHeaders={tablaHeaders}
  tablaRows={tablaRows}
  relacionadosTitle="[EPP Complementario] y [Sistema Completo]"
  relacionadosDesc="[El producto] es solo el inicio del sistema de EPP. [Descripción del sistema completo]."
  relacionadosContent={`
    <p>Un <strong>sistema de EPP [tipo] completo</strong> requiere que [componentes] sean compatibles con la norma <strong>[Norma]</strong>...</p>
    <p>Equipamos a [tipo de cliente] con el sistema EPP completo certificado. Documentación técnica completa disponible para <strong>licitaciones en los 32 estados de México</strong>.</p>
  `}
  relacionadoCards={relacionadoCards}
  faqs={faqs}
  sidebarCategoryLabel="[Categoría para Bombero]"
  sidebarCategoryHref="/productos/[categoria]/"
  sidebarSiblings={sidebarSiblings}
  sidebarSections={sidebarSections}
  sidebarCtaText="[Texto de asesoría específico al producto y su caso de uso en licitaciones/brigadas]"
  sidebarWaMsg="Hola, necesito cotizar [un/una] [Producto] [Norma]. ¿Pueden ayudarme?"
  sidebarArticleLinks={sidebarArticleLinks}
  sidebarNormLinks={sidebarNormLinks}
/>
```

---

## Escalabilidad

### Páginas L4 actualmente implementadas con ProductL4Layout

| Página | URL | Estado |
|---|---|---|
| Traje Forestal NFPA 1977 | `/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/` | ✅ Plantilla maestra |
| Traje Estructural NFPA 1971 | `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/` | ✅ Migrado |
| Traje HAZMAT NFPA 1991 | `/productos/trajes-para-bomberos/traje-hazmat/` | ✅ Migrado |
| Traje de Aproximación | `/productos/trajes-para-bomberos/traje-aproximacion/` | ✅ Migrado |

### Próximas migraciones pendientes

- `/productos/trajes-para-bomberos/traje-arff-aeroportuario/`
- Todos los L4 de cascos (`casco-estructural-nfpa-1971`, `casco-forestal-nfpa-1977`, `casco-rescate-tecnico-nfpa-1951`)
- Todos los L4 de guantes (`estructurales`, `forestales`, `rescate`)
- Todos los L4 de botas (`estructural`, `forestal`, `caucho`)
- Todos los L4 de capuchas

### Convención de escalado

Para agregar un nuevo L4:
1. Crear `src/pages/productos/[categoria]/[producto]/index.astro`
2. Copiar plantilla de la sección 14
3. Rellenar los datos (productoCards, specsCards, tablaRows, relacionadoCards, faqs, sidebar)
4. Verificar que `sidebarSiblings` incluye el nuevo producto en todos los hermanos existentes
5. Actualizar el `index.astro` de la L3 padre con el nuevo producto en su grid

---

*Documento generado el 2026-06-12 — BOMBERO.MX Desarrollo Web*
