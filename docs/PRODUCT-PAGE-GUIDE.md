# BOMBERO.MX — Guía de Páginas de Producto

> Guía técnica de referencia para la generación de páginas de producto del sitio BOMBERO.MX.
> Basada en el template aprobado: **Traje Estructural NFPA 1971 — Sistema 3 Capas**.
> Última actualización: 2026-02-18

---

## Índice

1. [Convención de rutas y archivos](#1-convención-de-rutas-y-archivos)
2. [Imports requeridos](#2-imports-requeridos)
3. [Constantes de página](#3-constantes-de-página)
4. [Estructura de datos — Frontmatter](#4-estructura-de-datos--frontmatter)
5. [Layout HTML completo](#5-layout-html-completo)
6. [Módulos del área principal (prod-main)](#6-módulos-del-área-principal-prod-main)
7. [Sidebar (prod-sidebar)](#7-sidebar-prod-sidebar)
8. [Secciones full-width](#8-secciones-full-width)
9. [SEO — Reglas obligatorias](#9-seo--reglas-obligatorias)
10. [CSS — Clases clave](#10-css--clases-clave)
11. [Imágenes — Convención de nombres](#11-imágenes--convención-de-nombres)
12. [Checklist al crear una página nueva](#12-checklist-al-crear-una-página-nueva)

---

## 1. Convención de rutas y archivos

```
src/pages/productos/
  {categoria-slug}/
    index.astro                 ← Página de categoría
    {producto-slug}/
      index.astro               ← Página de familia de producto
      {variante-slug}/
        index.astro             ← Página de variante/modelo (ESTE TEMPLATE)
```

**Ejemplo real:**
```
src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro
```

**URL resultante:**
```
/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas
```

**Reglas de slugs:**
- Solo minúsculas, sin acentos, guiones medios como separadores
- Categoría: `trajes-para-bomberos`, `cascos-para-bomberos`, `guantes-para-bomberos`, `botas-para-bomberos`
- No usar underscore ni espacios

---

## 2. Imports requeridos

```typescript
import PageLayout from "@layouts/PageLayout.astro";
import Breadcrumb from "@components/Breadcrumb.astro";
import CTABar from "@components/CTABar.astro";
import SectionHeader from "@components/SectionHeader.astro";
import WhyChooseUs from "@components/WhyChooseUs.astro";
import CTABanner from "@components/CTABanner.astro";
```

> **Nota:** `CategoryCard` NO se usa en páginas de producto. El componente `rel-card` es custom dentro de la página.

---

## 3. Constantes de página

```typescript
const IMAGE = "/images/directorio/{slug-imagen-principal}.avif";
const SLUG  = "/productos/{categoria}/{familia}/{variante}";

// Mapa de categorías de specs → clase CSS (para la tabla de especificaciones)
const catClass: Record<string, string> = {
  "Construcción":  "construccion",
  "Protección":    "proteccion",
  "Visibilidad":   "visibilidad",
  "Ergonomía":     "ergonomia",
  "Certificación": "certificacion",
  // Agregar más según el producto
};
```

---

## 4. Estructura de datos — Frontmatter

### 4.1 `capas` — Módulo técnico específico del producto

Usado en: sección "Sistema de Capas" (o "Características Técnicas").
Adaptar nombre del array y del módulo según el producto.

```typescript
const capas = [
  {
    num: "01",                           // Número de capa (string "01", "02", "03")
    titulo: "Nombre de la capa",         // Ej: "Capa Exterior — Nomex® IIIA"
    descripcion: "Descripción técnica...",
    specs: [
      { label: "Material",   valor: "Nomex® IIIA" },
      { label: "Parámetro",  valor: "Valor certificado" },
      { label: "Norma",      valor: "ASTM D6413" },
      { label: "Propiedad",  valor: "Sí / No / Valor" },
    ],                                   // Siempre exactamente 4 specs para el grid 2×2
    color: "ember",                      // "ember" | "smoke" | "fire" → colores del círculo num
  },
];
```

### 4.2 `especificaciones` — Tabla técnica completa

```typescript
const especificaciones = [
  { categoria: "Construcción",  label: "Número de capas",  valor: "3 (exterior + barrera + liner)" },
  { categoria: "Protección",    label: "TPP mínimo",       valor: "≥ 35 cal/cm²" },
  { categoria: "Visibilidad",   label: "Bandas reflec.",   valor: "Scotchlite™ 3M 5 cm" },
  { categoria: "Ergonomía",     label: "Tallas",           valor: "S · M · L · XL · 2XL · 3XL · 4XL" },
  { categoria: "Certificación", label: "Norma principal",  valor: "NFPA 1971 edición vigente" },
  // Agrupar rows por categoría — aparecerán con badge solo en la primera fila del grupo
];
```

**Categorías disponibles con colores CSS:**

| categoria       | catClass key    | color badge |
|-----------------|-----------------|-------------|
| Construcción    | construccion    | azul slate  |
| Protección      | proteccion      | rojo fire   |
| Visibilidad     | visibilidad     | naranja     |
| Ergonomía       | ergonomia       | verde       |
| Certificación   | certificacion   | púrpura     |

### 4.3 `aplicaciones` — Escenarios de uso

```typescript
const aplicaciones = [
  {
    icono: "...",  // SVG path string — actualmente NO se renderiza (campo mantenido por compatibilidad)
    titulo: "Nombre del escenario",
    desc: "Descripción del escenario de uso para este producto.",
  },
  // Mínimo 2, máximo 4 items (grid 2×2)
];
```

### 4.4 `faqs` — Preguntas frecuentes

```typescript
const faqs = [
  {
    q: "¿Pregunta técnica frecuente?",
    a: "Respuesta detallada con información técnica precisa. Puede incluir cifras y normas.",
  },
  // 4 a 8 items recomendados
];
```

### 4.5 `relacionados` — EPP Complementario

```typescript
const relacionados = [
  {
    title:       "Nombre del producto relacionado",
    badge:       "NFPA 1971",                // Norma o etiqueta corta (max 12 chars)
    description: "Descripción breve del producto relacionado.",
    href:        "/productos/{categoria}",    // URL de la categoría o del producto
    buttonText:  "Palabra Clave Exacta",      // SEO: término exacto de búsqueda ej: "Cascos para Bombero"
    image:       "/images/directorio/{imagen}.avif",
  },
  // Exactamente 4 items — grid de 4 columnas en desktop
];
```

> **Regla SEO crítica para `buttonText`:** El texto del botón debe coincidir exactamente con la keyword objetivo de la página destino. Formato: "[Producto] para Bombero". Ej: "Cascos para Bombero", "Guantes para Bombero", "Botas para Bombero", "Trajes para Bombero".

### 4.6 Datos del sidebar

#### `otrosModelos` — Variantes del mismo producto
```typescript
const otrosModelos = [
  { label: "Nombre del modelo/variante", href: "/productos/{categoria}/{familia}" },
  // 3 a 6 items
];
```

#### `epp` — EPP complementario en sidebar
```typescript
const epp = [
  { label: "Nombre del EPP",  href: "/productos/{categoria}", tag: "Cabeza" },
  // tag: parte del cuerpo protegida. Ej: "Cabeza", "Manos", "Pies", "Resp.", "Cuerpo"
  // 4 a 6 items
];
```

#### `articulos` — Catálogos y recursos
```typescript
const articulos = [
  { label: "Nombre del recurso", href: "/productos/{categoria}", tag: "Catálogo" },
  // tag: "Catálogo" | "Producto" | "Guía" | "Blog"
  // 4 a 6 items
];
```

#### `directorioLinks` — Directorio de bomberos
```typescript
const directorioLinks = [
  { label: "Bomberos Ciudad de México",       href: "/directorio/ciudad-de-mexico" },
  { label: "Bomberos Jalisco — Guadalajara",  href: "/directorio/jalisco" },
  { label: "Bomberos Nuevo León — Monterrey", href: "/directorio/nuevo-leon" },
  { label: "Bomberos Puebla",                 href: "/directorio/puebla" },
  { label: "Bomberos Querétaro",              href: "/directorio/queretaro" },
  { label: "Directorio Nacional Bomberos",    href: "/directorio" },
  // Estos 6 links son estándar — usar los mismos en TODOS los productos
];
```

#### `specsRapidas` — Especificaciones en sidebar
```typescript
const specsRapidas = [
  { label: "Norma",     valor: "NFPA 1971" },
  { label: "Sistema",   valor: "3 capas" },
  { label: "TPP mín.",  valor: "≥ 35 cal/cm²" },
  // 6 a 8 items — los más importantes del producto
];
```

---

## 5. Layout HTML completo

```
PageLayout
  ├── Breadcrumb
  ├── section.hero
  ├── CTABar
  ├── div.prod-layout
  │   └── div.prod-layout__inner
  │       ├── main.prod-main
  │       │   ├── section.prod-intro#producto
  │       │   ├── div.prod-gallery
  │       │   ├── section.prod-section#sistema-capas
  │       │   ├── section.prod-section#especificaciones
  │       │   ├── section.prod-section.prod-section--light#aplicaciones
  │       │   └── section.certs-dark#certificaciones
  │       └── aside.prod-sidebar
  │           ├── div.sb-card.sb-card--cta
  │           ├── div.sb-card (specsRapidas)
  │           ├── div.sb-card (otrosModelos)
  │           ├── div.sb-card (epp)
  │           ├── div.sb-card (articulos)
  │           └── div.sb-card (directorioLinks)
  ├── WhyChooseUs
  ├── section.faq-prod#preguntas-frecuentes
  ├── section.relacionados
  └── CTABanner
```

---

## 6. Módulos del área principal (prod-main)

### 6.1 `prod-intro` — Tarjeta de producto

Sin imagen. Estructura de 2 columnas: izquierda (título, descripción, features) | derecha (apps, CTA).

```html
<section class="prod-intro" id="producto">

  <!-- Barra superior -->
  <div class="prod-intro__topbar">
    <span class="prod-intro__category">{Categoría del producto}</span>
    <div class="prod-intro__topbar-badges">
      <span class="pcert pcert--nfpa">NFPA 1971</span>      <!-- badge norma -->
      <span class="pcert pcert--tpp">TPP ≥ 35</span>         <!-- badge técnico -->
      <span class="pcert pcert--solas">SOLAS Cl.2</span>     <!-- badge adicional -->
      <span class="prod-intro__sold">MÁS VENDIDO</span>      <!-- opcional -->
    </div>
  </div>

  <!-- Cuerpo 2 columnas -->
  <div class="prod-intro__body">
    <div class="prod-intro__left">
      <h2 class="prod-intro__title">
        {Nombre Principal}
        <span class="prod-intro__title-sub">{Subtítulo / Variante}</span>
      </h2>
      <p class="prod-intro__desc">{Descripción técnica breve con keyword principal.}</p>
      <ul class="prod-intro__features">
        <!-- 4 a 6 items — características más relevantes -->
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 1</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 2</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 3</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 4</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 5</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature 6</li>
      </ul>
    </div>

    <div class="prod-intro__right">
      <div class="prod-intro__app">
        <p class="prod-intro__app-label">Aplicaciones principales</p>
        <div class="prod-intro__app-tags">
          <span>App 1</span>
          <span>App 2</span>
          <span>App 3</span>
          <span>App 4</span>
          <span>App 5</span>
        </div>
      </div>
      <div class="prod-intro__actions">
        <a href="/cotizar" class="btn btn--primary">Solicitar Cotización</a>
      </div>
    </div>
  </div>
</section>
```

**Badges disponibles (`.pcert`):**

| clase           | contenido típico    | color     |
|-----------------|---------------------|-----------|
| pcert--nfpa     | NFPA 1971           | rojo      |
| pcert--tpp      | TPP ≥ 35            | naranja   |
| pcert--solas    | SOLAS Cl.2          | azul      |

---

### 6.2 `prod-gallery` — Galería estática de 6 imágenes

Grid 3×2 estático (todas las imágenes siempre visibles = indexadas por Google).
Formato portrait `aspect-ratio: 3/4`.

```html
<div class="prod-gallery" aria-label="Galería del producto">
  <div class="prod-gallery__track">
    <figure class="prod-gallery__item">
      <img src="/images/directorio/{imagen-1}.avif"
        alt="{descripción-seo-imagen-1}" loading="lazy" width="420" height="300" />
    </figure>
    <!-- Repetir exactamente 6 figures -->
    <!-- Imágenes: usar fotos de bomberos en acción con el producto, no solo producto aislado -->
  </div>
</div>
```

**Reglas de galería:**
- Siempre 6 imágenes
- Sin hover animation (afecta rendimiento, no aporta SEO)
- `loading="lazy"` en todas las imágenes de galería (excepto la primera si está above the fold)
- Alt descriptivo y único por imagen
- Todas las imágenes en formato `.avif`

---

### 6.3 `prod-section` — Sección de contenido estándar

```html
<section class="prod-section" id="{id-anchor}">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">{Etiqueta pequeña}</span>
    <h2 class="prod-section__title">{Título H2 con keyword}</h2>
    <p class="prod-section__desc">{Descripción de la sección.}</p>
  </div>
  <!-- Contenido específico del módulo -->
</section>
```

**Variante con fondo claro:** `<section class="prod-section prod-section--light">`

---

### 6.4 `capas` — Sistema de capas / características técnicas

```html
<section class="prod-section" id="sistema-capas">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Anatomía del Producto</span>
    <h2 class="prod-section__title">Sistema Integrado de {N} Capas</h2>
    <p class="prod-section__desc">Descripción general del sistema.</p>
  </div>

  <div class="capas__grid">
    {capas.map((capa) => (
      <div class={`capa-card capa-card--${capa.color}`}>

        <!-- Header horizontal -->
        <div class="capa-card__head">
          <span class="capa-card__num">{capa.num}</span>
          <h3 class="capa-card__title">{capa.titulo}</h3>
        </div>

        <!-- Cuerpo: descripción | specs 2×2 -->
        <div class="capa-card__body">
          <p class="capa-card__desc">{capa.descripcion}</p>
          <ul class="capa-card__specs">
            {capa.specs.map((s) => (
              <li class="capa-card__spec">
                <span class="capa-card__spec-label">{s.label}</span>
                <span class="capa-card__spec-val">{s.valor}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    ))}
  </div>
</section>
```

**Colores de círculo (`capa.color`):**
- `ember` → rojo (color-fire-700)
- `smoke` → gris (color-smoke-600)
- `fire`  → naranja (color-ember-700)

---

### 6.5 `especificaciones` — Tabla técnica

```html
<section class="prod-section" id="especificaciones">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Ficha Técnica</span>
    <h2 class="prod-section__title">Especificaciones Completas</h2>
    <p class="prod-section__desc">Parámetros verificados en laboratorio certificado ISO/IEC 17025.</p>
  </div>

  <div class="specs__table-wrap">
    <table class="specs__table">
      <thead>
        <tr>
          <th scope="col">Categoría</th>
          <th scope="col">Parámetro</th>
          <th scope="col">Valor certificado</th>
        </tr>
      </thead>
      <tbody>
        {(() => {
          let lastCat = "";
          return especificaciones.map((row) => {
            const isNew = row.categoria !== lastCat;
            lastCat = row.categoria;
            return (
              <tr>
                <td class="specs__cat">
                  {isNew
                    ? <span class={`specs__cat-badge specs__cat-badge--${catClass[row.categoria] ?? row.categoria.toLowerCase()}`}>{row.categoria}</span>
                    : null}
                </td>
                <td class="specs__label">{row.label}</td>
                <td class="specs__val">{row.valor}</td>
              </tr>
            );
          });
        })()}
      </tbody>
    </table>
  </div>
  <p class="specs__note">* Valores según pruebas de laboratorio acreditado ISO/IEC 17025.</p>
</section>
```

---

### 6.6 `aplicaciones` — Escenarios de uso

```html
<section class="prod-section prod-section--light" id="aplicaciones">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Escenarios de Uso</span>
    <h2 class="prod-section__title">¿Dónde se Usa {Nombre del producto}?</h2>
    <p class="prod-section__desc">Descripción general de los escenarios.</p>
  </div>
  <div class="aplic__grid">
    {aplicaciones.map((a, i) => (
      <div class="aplic-card">
        <div class="aplic-card__head">
          <span class="aplic-card__num">0{i + 1}</span>
          <h3 class="aplic-card__title">{a.titulo}</h3>
        </div>
        <p class="aplic-card__desc">{a.desc}</p>
      </div>
    ))}
  </div>
</section>
```

> Grid 2×2 para 4 items. No usar iconos — usar el número como elemento visual.

---

### 6.7 `certs-dark` — Certificaciones (sección oscura)

```html
<section class="certs-dark" id="certificaciones">
  <div class="certs-dark__head">
    <p class="certs-dark__eyebrow">Normas y Certificaciones</p>
    <h2 class="certs-dark__title">Certificado {NORMA} — {Subtítulo}</h2>
    <p class="certs-dark__desc">Descripción de la norma y su relevancia.</p>
  </div>

  <div class="certs-dark__grid">
    <!-- 5 cert-item estándar + 1 cert-item--cta -->
    <div class="cert-item">
      <p class="cert-item__code">NFPA 1971</p>
      <p class="cert-item__desc">Protección estructural — edición vigente</p>
    </div>
    <!-- ... más cert-items ... -->
    <div class="cert-item cert-item--cta">
      <p class="cert-item__cta-label">¿Necesitas la documentación?</p>
      <a href="/cotizar" class="cert-item__cta-btn">Solicitar Ficha Técnica</a>
    </div>
  </div>
</section>
```

---

## 7. Sidebar (prod-sidebar)

El sidebar contiene siempre **6 tarjetas** en este orden fijo:

| # | sb-card | Contenido |
|---|---------|-----------|
| 1 | `sb-card--cta` | Botón cotizar + WhatsApp + teléfono |
| 2 | sb-card | `specsRapidas` — lista de specs clave |
| 3 | sb-card | `otrosModelos` — links a variantes |
| 4 | sb-card | `epp` — EPP complementario |
| 5 | sb-card | `articulos` — catálogos y recursos |
| 6 | sb-card | `directorioLinks` — directorio de bomberos |

### 7.1 CTA Card (siempre igual)

```html
<div class="sb-card sb-card--cta">
  <h3 class="sb-card__title">Solicita Cotización</h3>
  <p class="sb-card__text">Precios especiales para cuerpos de bomberos y licitaciones.</p>
  <a href="/cotizar" class="sb-cta-btn">
    <!-- SVG icono documento -->
    Cotizar Ahora
  </a>
  <div class="sb-card__contacts">
    <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer" class="sb-contact sb-contact--wa">
      <!-- SVG WhatsApp -->
      WhatsApp
    </a>
    <a href="tel:+525520780102" class="sb-contact">
      <!-- SVG teléfono -->
      55 2078 0102
    </a>
  </div>
</div>
```

> El número de WhatsApp y teléfono `525520780102` es el mismo en todas las páginas.

### 7.2 Cards estándar con título + ícono

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <!-- SVG inline 14×14 -->
    Título de la tarjeta
  </h3>
  <!-- contenido específico (sb-specs, sb-links, sb-epp, sb-articles) -->
</div>
```

### 7.3 Patterns de listas del sidebar

**`sb-specs` (specs rápidas):**
```html
<ul class="sb-specs">
  {specsRapidas.map((s) => (
    <li class="sb-specs__row">
      <span class="sb-specs__label">{s.label}</span>
      <span class="sb-specs__val">{s.valor}</span>
    </li>
  ))}
</ul>
```

**`sb-links` (modelos y directorio):**
```html
<ul class="sb-links">
  {lista.map((m) => (
    <li>
      <a href={m.href} class="sb-link">
        <!-- SVG chevron 12×12 -->
        {m.label}
      </a>
    </li>
  ))}
</ul>
<a href="{url-ver-todos}" class="sb-see-all">Ver todos →</a>
```

**`sb-epp` (EPP complementario):**
```html
<ul class="sb-epp">
  {epp.map((e) => (
    <li class="sb-epp__item">
      <a href={e.href} class="sb-epp__link">
        <span class="sb-epp__tag">{e.tag}</span>
        <span class="sb-epp__label">{e.label}</span>
        <!-- SVG chevron 12×12 -->
      </a>
    </li>
  ))}
</ul>
```

**`sb-articles` (catálogos):**
```html
<ul class="sb-articles">
  {articulos.map((a) => (
    <li class="sb-article">
      <a href={a.href} class="sb-article__link">
        <span class="sb-article__tag">{a.tag}</span>
        <span class="sb-article__label">{a.label}</span>
      </a>
    </li>
  ))}
</ul>
```

---

## 8. Secciones full-width

Estas secciones van **fuera** de `prod-layout` y son full-width (sin sidebar).

### 8.1 Hero — Siempre igual en estructura

```html
<section class="hero">
  <div class="hero__bg">
    <div class="hero__gradient"></div>
    <div class="hero__grid"></div>
    <div class="hero__glow hero__glow--1"></div>
    <div class="hero__glow hero__glow--2"></div>
  </div>

  <div class="container hero__container">
    <!-- Columna izquierda: badge + H1 + subtítulo -->
    <div class="hero__content">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        {Categoría · Norma · Variante}
      </div>
      <h1 class="hero__title">
        {Título Principal H1}
        <span class="hero__title-highlight">{Keyword secundaria}</span>
      </h1>
      <p class="hero__subtitle">{Subtítulo con keywords principales.}</p>
    </div>

    <!-- Columna derecha: 2 bloques de texto SEO con H2 -->
    <div class="hero__seo">
      <div class="hero__seo-block">
        <h2 class="hero__seo-title">{H2 con keyword larga 1}</h2>
        <p class="hero__seo-text">{Párrafo SEO 1 con <strong>keywords</strong>.}</p>
      </div>
      <div class="hero__seo-block">
        <h2 class="hero__seo-title">{H2 con keyword larga 2}</h2>
        <p class="hero__seo-text">{Párrafo SEO 2 con <strong>keywords</strong>.}</p>
      </div>
    </div>
  </div>
</section>
```

> La columna derecha contiene texto SEO visible pero diseñado para complementar el contenido del hero. Los H2 allí son parte de la jerarquía SEO pero secundarios al H1.

### 8.2 CTABar

```html
<CTABar quote="Cotizar {Nombre del Producto}" />
```

> Adaptar el texto del quote al producto específico.

### 8.3 WhyChooseUs

```html
<WhyChooseUs />
```

> Componente estático — mismo en todos los productos.

### 8.4 FAQ

```html
<section class="faq-prod" id="preguntas-frecuentes">
  <div class="container">
    <SectionHeader
      label="Preguntas Frecuentes"
      title="Todo sobre {Nombre del Producto}"
      description="{Descripción del contenido del FAQ.}"
    />

    <div class="faq-prod__grid">
      <!-- Lista de preguntas -->
      <div class="faq-prod__list">
        {faqs.map((faq) => (
          <details class="faq-item" name="faq-producto">
            <summary class="faq-item__q">
              <span>{faq.q}</span>
              <span class="faq-item__toggle" aria-hidden="true"></span>
            </summary>
            <div class="faq-item__a">
              <p>{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      <!-- Aside: 2 cards de CTA -->
      <aside class="faq-prod__aside">
        <div class="faq-aside-card">
          <!-- SVG icono documento -->
          <h4>Descarga la Ficha Técnica</h4>
          <p>Solicita la ficha técnica completa y el certificado de laboratorio.</p>
          <a href="/cotizar" class="faq-aside-card__btn">Solicitar Documentación</a>
        </div>
        <div class="faq-aside-card faq-aside-card--fire">
          <h4>¿Necesitas asesoría técnica?</h4>
          <p>Nuestros especialistas te ayudan a elegir la configuración correcta.</p>
          <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer"
            class="faq-aside-card__btn faq-aside-card__btn--wa">
            Consultar por WhatsApp
          </a>
        </div>
      </aside>
    </div>
  </div>
</section>
```

### 8.5 Relacionados

```html
<section class="relacionados">
  <div class="container">
    <SectionHeader
      label="EPP Complementario"
      title="Completa tu Equipo de Protección"
      description="{Descripción: este producto trabaja como parte de un sistema.}"
    />
    <div class="rel__grid">
      {relacionados.map((r) => (
        <article class="rel-card">
          <div class="rel-card__img-wrap">
            <img
              src={r.image}
              alt={r.title + " — EPP certificado NFPA para bomberos México"}
              loading="lazy"
              width="400"
              height="400"
              class="rel-card__img"
            />
            <span class="rel-card__badge">{r.badge}</span>
          </div>
          <div class="rel-card__body">
            <h3 class="rel-card__title">{r.title}</h3>
            <p class="rel-card__desc">{r.description}</p>
            <a href={r.href} class="rel-card__btn">
              {r.buttonText}
              <!-- SVG flecha 14×14 -->
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

### 8.6 CTABanner

```html
<CTABanner />
```

> Componente estático — mismo en todos los productos.

---

## 9. SEO — Reglas obligatorias

### 9.1 PageLayout props

```astro
<PageLayout
  title="{Nombre Completo del Producto} | BOMBERO.MX"
  description="{Descripción de 150-160 caracteres con keyword principal, certificación y CTA.}"
  keywords={[
    "{keyword principal exacta}",
    "{keyword variante 1}",
    "{keyword variante 2}",
    "{keyword con norma}",
    "{keyword con precio/México}",
    "{keyword con certificado}",
    "{keyword marca material}",
    "{keyword compra/distribuidor}",
  ]}
  canonical={SLUG}
  image={IMAGE}
>
```

**Formato del título:** `{Producto Principal} — {Variante/Sistema} | BOMBERO.MX`
**Formato description:** Incluir keyword principal + norma + TPP u otro valor técnico clave + entrega a 32 estados.

### 9.2 Jerarquía de encabezados

```
H1: [Nombre principal] (en hero__title)    — 1 por página
H2: [Keyword larga 1] (en hero__seo)       — SEO secundario
H2: [Keyword larga 2] (en hero__seo)       — SEO secundario
H2: [Título de sección] (prod-section__title) — cada sección de contenido
H3: [Título de card/capa] (capa-card__title, aplic-card__title, rel-card__title)
H4: [Títulos de FAQ aside]
```

> No usar H1 fuera del hero. No saltar niveles (H1 → H3 sin H2).

### 9.3 Breadcrumb

```astro
<Breadcrumb
  items={[
    { label: "Inicio",                           href: "/" },
    { label: "Productos",                        href: "/productos" },
    { label: "{Categoría}",                      href: "/productos/{categoria-slug}" },
    { label: "{Familia de producto}",            href: "/productos/{categoria-slug}/{familia-slug}" },
    { label: "{Variante actual}" },              // Sin href — es la página actual
  ]}
/>
```

### 9.4 Keywords SEO por categoría

| Categoría               | Keywords base                              |
|-------------------------|--------------------------------------------|
| Trajes para bomberos    | traje bombero, traje NFPA 1971, Nomex     |
| Cascos para bomberos    | casco bombero, casco NFPA 1971            |
| Guantes para bomberos   | guantes bombero, guantes NFPA 1971        |
| Botas para bomberos     | botas bombero, calzado bombero NFPA       |
| Capuchas para bomberos  | capucha Nomex, capucha bombero            |

---

## 10. CSS — Clases clave

### 10.1 Layout principal

| Clase                   | Descripción                                               |
|-------------------------|-----------------------------------------------------------|
| `.prod-layout`          | Wrapper del área de contenido + sidebar                   |
| `.prod-layout__inner`   | Grid `1fr 320px` (main + sidebar). Container centrado.    |
| `.prod-main`            | Columna principal de contenido                            |
| `.prod-sidebar`         | Sidebar derecho — sticky en desktop                       |

### 10.2 prod-intro

| Clase                    | Descripción                              |
|--------------------------|------------------------------------------|
| `.prod-intro`            | Card blanca, borde smoke-200             |
| `.prod-intro__topbar`    | Barra superior: categoría + badges       |
| `.prod-intro__category`  | Etiqueta de categoría (texto fire-700)   |
| `.prod-intro__topbar-badges` | Flex row de badges de certificación  |
| `.pcert`                 | Badge de certificación (pill)            |
| `.pcert--nfpa`           | Badge rojo NFPA                          |
| `.pcert--tpp`            | Badge naranja TPP                        |
| `.pcert--solas`          | Badge azul SOLAS                         |
| `.prod-intro__sold`      | Badge "MÁS VENDIDO" (fire-600)           |
| `.prod-intro__body`      | Grid 2 cols: `1fr 300px`                 |
| `.prod-intro__left`      | Columna: título + desc + features        |
| `.prod-intro__right`     | Columna: apps + CTA                      |
| `.prod-intro__title`     | H2 principal del producto                |
| `.prod-intro__title-sub` | Sub-título (block, fire-600)             |
| `.prod-intro__features`  | Lista de 6 features con check dot        |
| `.prod-intro__check`     | Punto verde antes de cada feature        |
| `.prod-intro__app`       | Box de aplicaciones                      |
| `.prod-intro__app-tags`  | Flex wrap de pills de aplicación         |
| `.prod-intro__actions`   | Contenedor del botón CTA                 |

### 10.3 prod-gallery

| Clase                   | Descripción                                    |
|-------------------------|------------------------------------------------|
| `.prod-gallery`         | Wrapper de galería, margen exterior            |
| `.prod-gallery__track`  | Grid `repeat(3, 1fr)`, gap space-3             |
| `.prod-gallery__item`   | `figure`, `aspect-ratio: 3/4`, border-radius   |

### 10.4 capa-card

| Clase                    | Descripción                                   |
|--------------------------|-----------------------------------------------|
| `.capas__grid`           | Grid de capas (auto-fill, min 300px)          |
| `.capa-card`             | Card blanca con borde smoke-200               |
| `.capa-card--ember`      | Variante roja (círculo num en fire-700)       |
| `.capa-card--smoke`      | Variante gris (círculo num en smoke-600)      |
| `.capa-card--fire`       | Variante naranja (círculo num en ember-700)   |
| `.capa-card__head`       | Header horizontal: flex, bg smoke-50          |
| `.capa-card__num`        | Círculo numerado 46×46px                      |
| `.capa-card__title`      | H3 horizontal del header                      |
| `.capa-card__body`       | Grid `1fr 1fr`: descripción | specs           |
| `.capa-card__desc`       | Párrafo de descripción con padding            |
| `.capa-card__specs`      | Lista grid `1fr 1fr` de specs                 |
| `.capa-card__spec-label` | Label 11px uppercase smoke-400                |
| `.capa-card__spec-val`   | Valor bold smoke-900                          |

### 10.5 aplic-card

| Clase                  | Descripción                                  |
|------------------------|----------------------------------------------|
| `.aplic__grid`         | Grid `repeat(2, 1fr)`                        |
| `.aplic-card`          | Card blanca, padding space-7                 |
| `.aplic-card__head`    | Flex: num pill + H3 título                   |
| `.aplic-card__num`     | Pill "0X" rojo (fire-700)                    |
| `.aplic-card__title`   | H3, font-weight 800                          |
| `.aplic-card__desc`    | Párrafo con border-top smoke-100             |

### 10.6 rel-card

| Clase                  | Descripción                                      |
|------------------------|--------------------------------------------------|
| `.rel__grid`           | Grid `repeat(4, 1fr)`, gap space-5               |
| `.rel-card`            | article blanco, flex col, borde smoke-200        |
| `.rel-card__img-wrap`  | `aspect-ratio: 1/1`, overflow hidden, position relative |
| `.rel-card__img`       | 100% × 100%, object-fit cover                   |
| `.rel-card__badge`     | Absoluto top-right, fire-600                     |
| `.rel-card__body`      | padding space-5, flex col, gap space-3           |
| `.rel-card__title`     | H3, font-weight 800                              |
| `.rel-card__desc`      | Párrafo sm, smoke-600                            |
| `.rel-card__btn`       | Botón smoke-950 → hover fire-600                 |

### 10.7 sidebar (sb-*)

| Clase                  | Descripción                                  |
|------------------------|----------------------------------------------|
| `.sb-card`             | Card sidebar blanca, borde smoke-200         |
| `.sb-card--cta`        | Card CTA con fondo fire-gradient             |
| `.sb-card__title`      | Título h3 de la card                         |
| `.sb-card__title--dark`| Con ícono SVG inline                         |
| `.sb-cta-btn`          | Botón principal de cotizar (rojo)            |
| `.sb-contact`          | Link de contacto (tel/wa)                    |
| `.sb-contact--wa`      | Variante verde WhatsApp                      |
| `.sb-specs`            | Lista de specs clave                         |
| `.sb-specs__row`       | Fila label + val                             |
| `.sb-links`            | Lista de links con chevron                   |
| `.sb-link`             | Link con flecha                              |
| `.sb-see-all`          | "Ver todos →" link                           |
| `.sb-epp`              | Lista de EPP con tags                        |
| `.sb-epp__tag`         | Pill de parte del cuerpo                     |
| `.sb-articles`         | Lista de artículos                           |
| `.sb-article__tag`     | Pill tipo artículo                           |
| `.sb-card__subtext`    | Texto secundario bajo título                 |

---

## 11. Imágenes — Convención de nombres

Todas las imágenes están en: `/public/images/directorio/`

**Formato:** `{descripción-seo-del-objeto}-{número}.avif`

**Ejemplos por tipo de producto:**

| Producto                     | Imagen principal recomendada                      |
|------------------------------|--------------------------------------------------|
| Traje estructural NFPA 1971  | `traje-bombero-estructural-nfpa-01.avif`         |
| Casco bombero NFPA 1971      | `casco-bombero-proteccion-cabeza-01.avif`        |
| Guantes bombero              | `guantes-bombero-resistentes-01.avif`            |
| Botas bombero                | `botas-bombero-proteccion-01.avif`               |
| Capucha Nomex                | `capucha-bombero-nomex-01.avif`                  |
| SCBA / Equipo respiratorio   | `equipo-scba-aparato-respiratorio-01.avif`       |

**Para galerías — usar en este orden de preferencia:**
1. Imagen directa del producto
2. Imagen de bombero usando el producto en acción
3. Imagen de equipo o detalle técnico relacionado
4. Imagen de entrenamiento o simulacro con el producto

**Siempre usar `.avif`** — nunca `.jpg`, `.png` o `.webp` en producción.

---

## 12. Checklist al crear una página nueva

### Datos (frontmatter)
- [ ] `IMAGE` apunta a imagen `.avif` existente en `/images/directorio/`
- [ ] `SLUG` coincide exactamente con la ruta del archivo
- [ ] `catClass` tiene todas las categorías usadas en `especificaciones`
- [ ] `capas` tiene exactamente 4 specs por capa
- [ ] `especificaciones` agrupadas por `categoria` (mismo string que en catClass)
- [ ] `aplicaciones` tiene 2 a 4 items
- [ ] `faqs` tiene 4 a 8 preguntas técnicas relevantes al producto
- [ ] `relacionados` tiene exactamente 4 items con `image`, `badge`, `buttonText` SEO
- [ ] `specsRapidas` tiene 6 a 8 items con los valores más relevantes
- [ ] `directorioLinks` usa los 6 links estándar nacionales

### SEO
- [ ] `title` en formato: `{Producto} — {Variante} | BOMBERO.MX`
- [ ] `description` entre 150-160 caracteres con keyword + norma + CTA
- [ ] `keywords` array con mínimo 6 keywords específicas del producto
- [ ] `canonical` igual a `SLUG`
- [ ] `image` igual a `IMAGE`
- [ ] Breadcrumb con 5 niveles (Inicio > Productos > Categoría > Familia > Variante actual)
- [ ] H1 único en `hero__title`
- [ ] H2s en hero__seo con keywords long-tail
- [ ] Alts de imágenes descriptivos y únicos

### Hero
- [ ] `hero__badge` con texto descriptivo: `{Categoría · Norma · Variante}`
- [ ] `hero__title` = keyword principal
- [ ] `hero__title-highlight` = keyword secundaria o variante
- [ ] 2 bloques `hero__seo-block` con H2 + párrafo SEO

### prod-intro
- [ ] Topbar con badges relevantes al producto (`pcert--nfpa`, `pcert--tpp`, etc.)
- [ ] H2 con nombre completo del producto
- [ ] 6 features relevantes (no genéricas)
- [ ] 3 a 6 pills de aplicación
- [ ] CTA a `/cotizar`

### Galería
- [ ] Exactamente 6 imágenes
- [ ] Alt único y descriptivo por imagen
- [ ] Todas las imágenes en `.avif`

### CTABar
- [ ] Texto del quote adaptado al producto

### Secciones de contenido
- [ ] `id="sistema-capas"` (o nombre del módulo técnico)
- [ ] `id="especificaciones"`
- [ ] `id="aplicaciones"`
- [ ] `id="certificaciones"`
- [ ] `id="preguntas-frecuentes"`

### Sidebar
- [ ] CTA card con botón + WhatsApp + teléfono
- [ ] specsRapidas con valores correctos
- [ ] otrosModelos apuntando a la familia del producto
- [ ] epp con productos complementarios relevantes
- [ ] articulos con catálogos de la misma categoría
- [ ] directorioLinks con los 6 estándar

### Relacionados
- [ ] 4 products con imagen `.avif` real
- [ ] buttonText usa keyword exacta de la categoría destino
- [ ] href apunta a la URL correcta de cada categoría

### Componentes globales
- [ ] `<WhyChooseUs />` presente
- [ ] `<CTABanner />` al final
- [ ] `<CTABar quote="..." />` después del hero

---

*Guía generada el 2026-02-18 — Template: sistema-3-capas/index.astro*
