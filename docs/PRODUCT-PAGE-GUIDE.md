# BOMBERO.MX — Guía de Páginas de Producto

> **Template canónico:** `src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro`
> Última actualización: 2026-02-19

---

## Índice

1. [Estructura de rutas](#1-estructura-de-rutas)
2. [Imports requeridos](#2-imports-requeridos)
3. [Variables de página](#3-variables-de-página)
4. [Datos del frontmatter](#4-datos-del-frontmatter)
5. [Layout HTML — árbol completo](#5-layout-html--árbol-completo)
6. [Secciones de contenido principal](#6-secciones-de-contenido-principal)
7. [Sidebar](#7-sidebar)
8. [Secciones full-width](#8-secciones-full-width)
9. [SEO — Reglas obligatorias](#9-seo--reglas-obligatorias)
10. [Clases CSS clave](#10-clases-css-clave)
11. [Imágenes disponibles](#11-imágenes-disponibles)
12. [Adaptaciones por tipo de producto](#12-adaptaciones-por-tipo-de-producto)
13. [Checklist completo](#13-checklist-completo)

---

## 1. Estructura de rutas

```
src/pages/productos/
  {categoria-slug}/
    index.astro                       ← Página de categoría (lista de productos)
    {familia-slug}/
      index.astro                     ← Página de familia (variantes del producto)
      {variante-slug}/
        index.astro                   ← Página de variante ← ESTE TEMPLATE
```

**Ejemplo real:**
```
src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro
URL: /productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas
```

**Reglas de slugs:**
- Solo minúsculas, sin acentos, guiones medios
- No usar underscore ni espacios
- Categorías activas: `trajes-para-bomberos`, `cascos-para-bomberos`, `guantes-para-bomberos`, `botas-para-bomberos`, `capuchas-para-bomberos`, `scba`, `herramientas-rescate`

---

## 2. Imports requeridos

```typescript
import PageLayout    from "@layouts/PageLayout.astro";
import Breadcrumb    from "@components/Breadcrumb.astro";
import CTABar        from "@components/CTABar.astro";
import SectionHeader from "@components/SectionHeader.astro";
import WhyChooseUs   from "@components/WhyChooseUs.astro";
import CTABanner     from "@components/CTABanner.astro";
```

> **Nunca usar** `CategoryCard` dentro de páginas de producto.
> El componente `rel-card` de la sección "Relacionados" es HTML inline.

---

## 3. Variables de página

```typescript
// Imagen OG y gallery principal — siempre .avif
const IMAGE = "/images/directorio/{slug-imagen}.avif";

// Canonical — debe coincidir exactamente con la URL del archivo
const SLUG  = "/productos/{categoria}/{familia}/{variante}";

// Mapa categoría → clave CSS para los badges de la tabla de specs
// Agregar TODAS las categorías usadas en `especificaciones`
const catClass: Record<string, string> = {
  "Construcción":  "construccion",
  "Protección":    "proteccion",
  "Visibilidad":   "visibilidad",
  "Ergonomía":     "ergonomia",
  "Certificación": "certificacion",
  // Adicionales según el producto:
  "Material":      "material",
  "Resistencia":   "resistencia",
  "Comodidad":     "comodidad",
};
```

---

## 4. Datos del frontmatter

### 4.1 `capas` — Módulo técnico del producto

Array de objetos usado en la sección "Sistema de Capas". Puede renombrarse a `componentes`, `sensores`, etc. según el producto.

```typescript
const capas = [
  {
    num: "01",                         // String de 2 dígitos: "01", "02", "03"
    titulo: "Capa Exterior — Nomex® IIIA",
    descripcion: "Descripción técnica de 2-3 líneas...",
    specs: [                           // SIEMPRE exactamente 4 specs (renderiza en grid 2×2)
      { label: "Material",             valor: "Nomex® IIIA / Nomex® Nano" },
      { label: "Peso tela",            valor: "6.0 – 7.5 oz/yd²" },
      { label: "Norma llama",          valor: "ASTM D6413 — Clase 1" },
      { label: "Resistencia inherente", valor: "Sí — no se lava" },
    ],
    color: "ember",                    // "ember" | "smoke" | "fire"
  },
  // Mínimo 2 items, máximo 5
];
```

**Colores del número circular:**
| Posición estándar | color   | Fondo / texto del número   |
|-------------------|---------|----------------------------|
| 01                | ember   | Rojo claro / fire-700      |
| 02                | smoke   | Gris / smoke-600           |
| 03                | fire    | Naranja / ember-700        |
| 04+               | ember   | Reiniciar ciclo            |

### 4.2 `especificaciones` — Tabla técnica

```typescript
const especificaciones = [
  // Agrupar SIEMPRE por categoría — badge aparece solo en el primer row del grupo
  { categoria: "Construcción",  label: "Número de capas",       valor: "3 (exterior + barrera + liner)" },
  { categoria: "Construcción",  label: "Capa exterior",          valor: "Nomex® IIIA o Nomex® Nano" },
  { categoria: "Protección",    label: "TPP mínimo",             valor: "≥ 35 cal/cm²" },
  { categoria: "Protección",    label: "Resistencia a la llama", valor: "ASTM D6413 Clase 1" },
  { categoria: "Visibilidad",   label: "Bandas retroreflect.",   valor: "Scotchlite™ 3M 5 cm — 360°" },
  { categoria: "Ergonomía",     label: "Tallas disponibles",     valor: "S · M · L · XL · 2XL · 3XL · 4XL" },
  { categoria: "Certificación", label: "Norma principal",        valor: "NFPA 1971 edición vigente" },
  { categoria: "Certificación", label: "Documentación",          valor: "Ficha técnica + Certificado lab." },
  // Mínimo 8 rows, máximo ~20
];
```

**Categorías estándar con sus claves de badge:**

| categoria       | catClass key    | Color badge  |
|-----------------|-----------------|--------------|
| Construcción    | construccion    | Azul pizarra |
| Protección      | proteccion      | Rojo fire    |
| Visibilidad     | visibilidad     | Naranja      |
| Ergonomía       | ergonomia       | Verde        |
| Certificación   | certificacion   | Púrpura      |
| Material        | material        | Azul claro   |
| Resistencia     | resistencia     | Rojo oscuro  |
| Comodidad       | comodidad       | Verde claro  |

> Si usas una categoría nueva, agrégala a `catClass` con su key en minúsculas sin acentos.

### 4.3 `aplicaciones` — Escenarios de uso

```typescript
const aplicaciones = [
  {
    icono: "M19 9V7a2 2 0 0 0-2-2...",  // SVG path — en datos pero NO se renderiza en el HTML
    titulo: "Incendio Estructural",
    desc: "Descripción del escenario. 1-2 líneas.",
  },
  // Exactamente 4 items — el grid es 2×2
];
```

> El campo `icono` se mantiene en los datos por compatibilidad futura.
> El template renderiza únicamente el número `0{i+1}` como elemento visual.

### 4.4 `faqs` — Preguntas frecuentes

```typescript
const faqs = [
  {
    q: "¿Pregunta técnica específica del producto?",
    a: "Respuesta técnica precisa. Puede incluir cifras, normas, comparaciones.",
  },
  // 4 a 6 items
];
```

**Tipos de preguntas que funcionan:**
- Diferencia con otro producto / norma
- Qué significa X parámetro técnico (TPP, THL, etc.)
- Documentación incluida / certificados
- Compatibilidad con otros EPP
- Tiempo de entrega / tallas disponibles
- Mantenimiento / lavado del producto

### 4.5 `relacionados` — EPP Complementario (sección final)

```typescript
const relacionados = [
  {
    title:       "Casco Estructural NFPA 1971",
    badge:       "NFPA 1971",                        // Norma corta — max 12 chars
    description: "Descripción breve de 1-2 líneas.",
    href:        "/productos/cascos-para-bomberos",   // URL de la categoría destino
    buttonText:  "Cascos para Bombero",               // SEO: keyword exacta de la página destino
    image:       "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
  },
  // SIEMPRE exactamente 4 items
];
```

> **Regla SEO `buttonText`:** Debe coincidir con la keyword objetivo de la página destino.
> Formato canónico: `"{Producto} para Bombero"`.
> Ejemplos: `"Cascos para Bombero"`, `"Guantes para Bombero"`, `"Botas para Bombero"`, `"Trajes para Bombero"`.

### 4.6 `specsRapidas` — Sidebar

```typescript
const specsRapidas = [
  { label: "Norma",         valor: "NFPA 1971" },
  { label: "Sistema",       valor: "3 capas" },
  { label: "TPP mínimo",    valor: "≥ 35 cal/cm²" },
  { label: "THL mínimo",    valor: "> 205 W/m²" },
  { label: "Capa exterior", valor: "Nomex® IIIA" },
  { label: "Barrera",       valor: "Gore-Tex® PTFE" },
  { label: "Liner",         valor: "Caldura® / PBI®" },
  { label: "Visibilidad",   valor: "SOLAS Clase 2" },
  // 6 a 8 items — los más relevantes del producto
];
```

### 4.7 `otrosModelos` — Variantes de la familia (sidebar)

```typescript
const otrosModelos = [
  { label: "Capa Exterior Nomex® IIIA",  href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex" },
  { label: "Barrera Gore-Tex® PTFE",     href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/membrana-gore-tex"   },
  { label: "Acolchado Térmico Caldura®", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico"  },
  { label: "Alta Visibilidad SOLAS Cl.2",href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad"   },
  { label: "Diseño Ergonómico 3D",       href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico"  },
  { label: "Ver Todos los Trajes",       href: "/productos/trajes-para-bomberos"                                                },
  // 3 a 6 items — el último siempre apunta a la categoría general
];
```

### 4.8 `epp` — EPP complementario (sidebar)

```typescript
const epp = [
  { label: "Casco Estructural NFPA 1971",  href: "/productos/cascos-para-bomberos",                tag: "Cabeza" },
  { label: "Guantes Estructurales",         href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos"  },
  { label: "Botas de Cuero Bombero",        href: "/productos/botas-para-bomberos",                 tag: "Pies"   },
  { label: "Capucha Nomex® Bombero",        href: "/productos/capuchas-para-bomberos",              tag: "Cabeza" },
  { label: "SCBA Equipo Respiratorio",      href: "/productos",                                     tag: "Resp."  },
  // tag = parte del cuerpo: "Cabeza" | "Manos" | "Pies" | "Resp." | "Cuerpo" | "Vista"
  // 4 a 6 items
];
```

### 4.9 `articulos` — Catálogos y recursos (sidebar)

```typescript
const articulos = [
  { label: "Catálogo Trajes de Bombero NFPA",  href: "/productos/trajes-para-bomberos",  tag: "Catálogo" },
  { label: "Trajes Forestales NFPA 1977",       href: "/productos/trajes-para-bomberos",  tag: "Producto" },
  { label: "EPP Completo para Bomberos",        href: "/productos",                       tag: "Guía"     },
  { label: "Cascos NFPA 1971 y 1977",           href: "/productos/cascos-para-bomberos",  tag: "Catálogo" },
  { label: "Guantes y Protección de Manos",     href: "/productos/guantes-para-bomberos", tag: "Catálogo" },
  { label: "Botas y Calzado para Bomberos",     href: "/productos/botas-para-bomberos",   tag: "Catálogo" },
  // tag: "Catálogo" | "Producto" | "Guía" | "Blog"
  // 4 a 6 items — esta tarjeta NO tiene sb-see-all
];
```

### 4.10 `directorioLinks` — Directorio (sidebar — estándar fijo)

```typescript
// ESTOS 6 LINKS SON IDÉNTICOS EN TODOS LOS PRODUCTOS — no modificar
const directorioLinks = [
  { label: "Bomberos Ciudad de México",       href: "/directorio/ciudad-de-mexico" },
  { label: "Bomberos Jalisco — Guadalajara",  href: "/directorio/jalisco"          },
  { label: "Bomberos Nuevo León — Monterrey", href: "/directorio/nuevo-leon"       },
  { label: "Bomberos Puebla",                 href: "/directorio/puebla"           },
  { label: "Bomberos Querétaro",              href: "/directorio/queretaro"        },
  { label: "Directorio Nacional Bomberos",    href: "/directorio"                  },
  // Esta tarjeta NO tiene sb-see-all
];
```

---

## 5. Layout HTML — árbol completo

```
PageLayout (title, description, keywords, canonical, image)
  │
  ├── <Breadcrumb items={[...5 niveles...]} />
  │
  ├── <section class="hero">                    ← Dark, full-width
  │     hero__bg (hero__gradient + hero__grid + hero__glow×2)
  │     hero__container (grid 1fr 1fr)
  │       hero__content (hero__badge + H1 + hero__subtitle)
  │       hero__seo (2× hero__seo-block con H2 + párrafo)
  │
  ├── <CTABar quote="Cotizar {Producto}" />     ← Full-width, SIEMPRE justo tras hero
  │
  ├── <div class="prod-layout">
  │   └── <div class="container prod-layout__inner">   ← Grid: minmax(0,1fr) 340px
  │         │
  │         ├── <main class="prod-main">
  │         │     ├── section.prod-intro#producto
  │         │     │     topbar (prod-intro__category + pcert badges + prod-intro__sold)
  │         │     │     prod-intro__body (grid 1fr 300px)
  │         │     │       left: H2 + desc + features (grid 2 cols)
  │         │     │       right: app-tags + CTA cotizar
  │         │     │
  │         │     ├── div.prod-gallery
  │         │     │     prod-gallery__track (3 cols) → 6× prod-gallery__item <figure><img>
  │         │     │
  │         │     ├── section.prod-section#sistema-capas
  │         │     │     prod-section__head (eyebrow + H2 + desc)
  │         │     │     capas__grid (flex col) → capa-card × N
  │         │     │
  │         │     ├── section.prod-section#especificaciones
  │         │     │     prod-section__head
  │         │     │     specs__table-wrap → specs__table (thead + tbody agrupado)
  │         │     │     specs__note
  │         │     │
  │         │     ├── section.prod-section.prod-section--light#aplicaciones
  │         │     │     <SectionHeader label="..." title="..."> <p>×2 </SectionHeader>
  │         │     │     aplic__grid (2 cols) → aplic-card × 4
  │         │     │
  │         │     └── section.certs-dark#certificaciones
  │         │           certs-dark__head (eyebrow + H2 + desc)
  │         │           certs-dark__grid (3 cols) → 5× cert-item + 1× cert-item--cta
  │         │
  │         └── <aside class="prod-sidebar">
  │               sb-card--cta      (cotizar + WhatsApp + tel)
  │               sb-card           (specsRapidas)
  │               sb-card           (otrosModelos + sb-see-all)
  │               sb-card           (epp + sb-see-all)
  │               sb-card           (articulos — sin sb-see-all)
  │               sb-card           (directorioLinks — con sb-card__subtext, sin sb-see-all)
  │
  ├── <WhyChooseUs />                           ← Full-width, componente fijo
  │
  ├── <section class="faq-prod" id="preguntas-frecuentes">
  │     container
  │       <SectionHeader label="..." title="..." description="..." />
  │       faq-prod__grid
  │         faq-prod__list  → details.faq-item × N
  │         aside.faq-prod__aside → 2× faq-aside-card
  │
  ├── <section class="relacionados">
  │     container
  │       <SectionHeader label="..." title="..." description="..." />
  │       rel__grid (4 cols) → article.rel-card × 4
  │
  └── <CTABanner />                             ← Full-width, siempre al final
```

---

## 6. Secciones de contenido principal

### 6.1 `prod-intro` — Tarjeta de producto

Sin imagen. Layout 2 columnas internas con topbar.

```html
<section class="prod-intro" id="producto">

  <!-- Barra superior: categoría + badges norma + badge sold -->
  <div class="prod-intro__topbar">
    <span class="prod-intro__category">Traje de Bombero Estructural</span>
    <div class="prod-intro__topbar-badges">
      <span class="pcert pcert--nfpa">NFPA 1971</span>
      <span class="pcert pcert--tpp">TPP ≥ 35</span>
      <span class="pcert pcert--solas">SOLAS Cl.2</span>
      <span class="prod-intro__sold">MÁS VENDIDO</span>   <!-- opcional -->
    </div>
  </div>

  <!-- Cuerpo: grid 1fr 300px -->
  <div class="prod-intro__body">

    <!-- Columna izquierda -->
    <div class="prod-intro__left">
      <h2 class="prod-intro__title">
        Traje Estructural NFPA 1971
        <span class="prod-intro__title-sub">Sistema 3 Capas</span>
      </h2>
      <p class="prod-intro__desc">Descripción técnica 2-3 líneas con keyword principal.</p>
      <!-- features: grid 2 cols internamente; 4-6 items -->
      <ul class="prod-intro__features">
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 1</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 2</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 3</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 4</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 5</li>
        <li><span class="prod-intro__check" aria-hidden="true"></span>Feature específica 6</li>
      </ul>
    </div>

    <!-- Columna derecha — fondo smoke-50 -->
    <div class="prod-intro__right">
      <div class="prod-intro__app">
        <p class="prod-intro__app-label">Aplicaciones principales</p>
        <div class="prod-intro__app-tags">
          <!-- 3 a 6 pills -->
          <span>Incendio estructural</span>
          <span>Rescate urbano</span>
          <span>Brigadas industriales</span>
        </div>
      </div>
      <div class="prod-intro__actions">
        <a href="/cotizar" class="btn btn--primary">Solicitar Cotización</a>
      </div>
    </div>

  </div>
</section>
```

**Badges `pcert` disponibles:**

| Clase          | Contenido   | Color               |
|----------------|-------------|---------------------|
| pcert--nfpa    | NFPA 1971   | Rojo (fire-700)     |
| pcert--tpp     | TPP ≥ 35    | Naranja (ember-700) |
| pcert--solas   | SOLAS Cl.2  | Azul (#1d4ed8)      |

### 6.2 `prod-gallery` — Galería de 6 imágenes

Grid 3 columnas, 2 filas. Sin slider, sin hover animations.

```html
<div class="prod-gallery" aria-label="Galería del producto">
  <div class="prod-gallery__track">
    <!-- Exactamente 6 <figure> con aspect-ratio 3/4 cada uno -->
    <figure class="prod-gallery__item">
      <img src="/images/directorio/traje-bombero-estructural-nfpa-01.avif"
        alt="Traje estructural NFPA 1971 sistema 3 capas"
        loading="lazy" width="420" height="300" />
    </figure>
    <figure class="prod-gallery__item">
      <img src="/images/directorio/bomberos-emergencia-incendio-estructural-01.avif"
        alt="Bombero con traje estructural en incendio"
        loading="lazy" width="420" height="300" />
    </figure>
    <figure class="prod-gallery__item">
      <img src="/images/directorio/bomberos-accion-incendio-01.avif"
        alt="Bomberos en acción con traje NFPA 1971"
        loading="lazy" width="420" height="300" />
    </figure>
    <figure class="prod-gallery__item">
      <img src="/images/directorio/bomberos-profesionales-accion-01.avif"
        alt="Bomberos profesionales equipados"
        loading="lazy" width="420" height="300" />
    </figure>
    <figure class="prod-gallery__item">
      <img src="/images/directorio/equipo-bomberos-completo-01.avif"
        alt="Equipo completo de bombero NFPA"
        loading="lazy" width="420" height="300" />
    </figure>
    <figure class="prod-gallery__item">
      <img src="/images/directorio/entrenamiento-bomberos-fuego-01.avif"
        alt="Entrenamiento con traje estructural"
        loading="lazy" width="420" height="300" />
    </figure>
  </div>
</div>
```

**Orden recomendado de imágenes:**
1. Imagen principal del producto
2. Bombero usando el producto en acción real
3. Bomberos en incendio con el producto puesto
4. Bomberos profesionales equipados
5. Equipo completo / sistema EPP
6. Entrenamiento o simulacro con el producto

**Reglas:**
- Siempre exactamente **6 imágenes**
- `loading="lazy"` en todas
- Alt único y descriptivo por imagen
- Solo formato `.avif`
- `width="420" height="300"` en todas (el CSS hace el recorte con `aspect-ratio: 3/4`)

### 6.3 `prod-section` — Encabezado de sección estándar

```html
<section class="prod-section" id="{anchor}">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Anatomía del Traje</span>
    <h2 class="prod-section__title">Sistema Integrado de 3 Capas</h2>
    <p class="prod-section__desc">Descripción 1-2 líneas de la sección.</p>
  </div>
  <!-- Contenido del módulo aquí -->
</section>
```

**Variante con fondo gris claro:**
```html
<section class="prod-section prod-section--light" id="{anchor}">
```

> La sección `aplicaciones` es la única que usa `<SectionHeader>` en lugar de `prod-section__head` inline.
> Ver sección 6.5 de esta guía.

### 6.4 `capas__grid` — Sistema de capas / características técnicas

> **CSS crítico:** `capas__grid` usa `flex-direction: column` (stack vertical), NO CSS Grid.

```html
<section class="prod-section" id="sistema-capas">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Anatomía del Traje</span>
    <h2 class="prod-section__title">Sistema Integrado de 3 Capas</h2>
    <p class="prod-section__desc">Descripción general del sistema técnico.</p>
  </div>

  <div class="capas__grid">
    {capas.map((capa) => (
      <div class={`capa-card capa-card--${capa.color}`}>

        <!-- Header: smoke-50 bg + borde inferior -->
        <div class="capa-card__head">
          <span class="capa-card__num">{capa.num}</span>
          <h3 class="capa-card__title">{capa.titulo}</h3>
        </div>

        <!-- Cuerpo: grid 1fr 1fr — descripción | specs 2×2 -->
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

### 6.5 `aplicaciones` — Escenarios de uso

> **IMPORTANTE:** Esta sección usa el componente `<SectionHeader>` (no `prod-section__head` inline).
> Cada card incluye `aplic-card__deco` (número decorativo grande en background).
> Las cards **NO tienen** `border-top` de color — solo `border: 1px solid smoke-200`.

```html
<section class="prod-section prod-section--light" id="aplicaciones">
  <SectionHeader
    label="Escenarios de Uso"
    title="¿Dónde se Usa el Sistema 3 Capas?"
  >
    <p>Párrafo intro 1 sobre los escenarios de uso del producto.</p>
    <p>Párrafo intro 2 complementando la descripción.</p>
  </SectionHeader>

  <div class="aplic__grid">
    {aplicaciones.map((a, i) => (
      <div class="aplic-card">
        {/* Número decorativo de 96px, opacity ~0.05, posición absolute bottom-right */}
        <span class="aplic-card__deco">0{i + 1}</span>
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

**CSS exacto de `.aplic-card`:**
```css
.aplic-card {
  background: white;
  border-radius: var(--radius-2xl, 16px);
  padding: var(--space-10, 40px);
  border: 1px solid var(--color-smoke-200, #e5e7eb);  /* ← Solo borde gris suave */
  /* SIN border-top de color — fue eliminado deliberadamente */
  display: flex;
  flex-direction: column;
  gap: var(--space-5, 20px);
  position: relative;
  overflow: hidden;
}

.aplic-card__deco {
  position: absolute;
  bottom: -12px;
  right: 20px;
  font-size: 96px;
  font-weight: 900;
  color: rgba(220, 38, 38, 0.05);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}
```

### 6.6 `specs__table` — Tabla de especificaciones

```html
<section class="prod-section" id="especificaciones">
  <div class="prod-section__head">
    <span class="prod-section__eyebrow">Ficha Técnica</span>
    <h2 class="prod-section__title">Especificaciones Completas</h2>
    <p class="prod-section__desc">
      Parámetros verificados en laboratorio certificado ISO/IEC 17025.
      Todos los valores cumplen o superan los mínimos exigidos por NFPA 1971 edición vigente.
    </p>
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
              <tr class={isNew ? "specs__row--first" : ""}>
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
  <p class="specs__note">
    * Valores según pruebas de laboratorio acreditado ISO/IEC 17025.
    Documentación completa disponible bajo solicitud.
  </p>
</section>
```

> **`specs__row--first`:** Se aplica en la `<tr>` cuando `isNew === true`. Agrega `border-top: 2px solid smoke-200` y `padding-top` extra para separar grupos. La primera `<tr>` del tbody NO tiene borde superior (CSS rule `specs__row--first:first-child { border-top: none }`).

### 6.7 `certs-dark` — Certificaciones

Fondo oscuro (smoke-900) con patrón de rejilla sutil. Siempre 5 `cert-item` + 1 `cert-item--cta` en grid de 3 columnas.

```html
<section class="certs-dark" id="certificaciones">
  <div class="certs-dark__head">
    <p class="certs-dark__eyebrow">Normas y Certificaciones</p>
    <h2 class="certs-dark__title">Certificado NFPA 1971 — El estándar que salva vidas</h2>
    <p class="certs-dark__desc">
      La norma <strong>NFPA 1971</strong> (<em>Standard on Protective Ensembles...</em>)
      es el referente mundial para la protección del bombero estructural.
    </p>
  </div>

  <div class="certs-dark__grid">
    <!-- 5 cert-item estándar -->
    <div class="cert-item">
      <p class="cert-item__code">NFPA 1971</p>
      <p class="cert-item__desc">Protección estructural — edición vigente</p>
    </div>
    <div class="cert-item">
      <p class="cert-item__code">ASTM D6413</p>
      <p class="cert-item__desc">Resistencia a la llama vertical</p>
    </div>
    <div class="cert-item">
      <p class="cert-item__code">TPP ≥ 35</p>
      <p class="cert-item__desc">cal/cm² — protección térmica mínima</p>
    </div>
    <div class="cert-item">
      <p class="cert-item__code">SOLAS Cl.2</p>
      <p class="cert-item__desc">Bandas retroreflectivas alta visibilidad</p>
    </div>
    <div class="cert-item">
      <p class="cert-item__code">ISO/IEC 17025</p>
      <p class="cert-item__desc">Laboratorio acreditado para certificación</p>
    </div>

    <!-- Último item siempre es el CTA — gradient rojo -->
    <div class="cert-item cert-item--cta">
      <p class="cert-item__cta-label">¿Necesitas la documentación?</p>
      <a href="/cotizar" class="cert-item__cta-btn">Solicitar Ficha Técnica</a>
    </div>
  </div>
</section>
```

---

## 7. Sidebar

El sidebar tiene siempre **6 tarjetas en este orden fijo:**

| # | Tipo          | Contenido                                      | sb-see-all |
|---|---------------|------------------------------------------------|------------|
| 1 | sb-card--cta  | Cotizar + WhatsApp + teléfono                  | No         |
| 2 | sb-card       | specsRapidas — specs clave del producto        | No         |
| 3 | sb-card       | otrosModelos — variantes de la misma familia   | Sí         |
| 4 | sb-card       | epp — EPP complementario con tags              | Sí         |
| 5 | sb-card       | articulos — catálogos y recursos               | No         |
| 6 | sb-card       | directorioLinks — con sb-card__subtext, sin sb-see-all | No  |

> El sidebar es `position: sticky; top: 90px` en desktop.

### 7.1 Card 1 — CTA Cotizar

```html
<div class="sb-card sb-card--cta">
  <h3 class="sb-card__title">Solicita Cotización</h3>
  <p class="sb-card__text">Precios especiales para cuerpos de bomberos y licitaciones.</p>
  <a href="/cotizar" class="sb-cta-btn">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
    Cotizar Ahora
  </a>
  <div class="sb-card__contacts">
    <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer"
      class="sb-contact sb-contact--wa">
      <!-- SVG WhatsApp path completo — copiar del template -->
      WhatsApp
    </a>
    <a href="tel:+525520780102" class="sb-contact">
      <!-- SVG teléfono 14×14 -->
      55 2078 0102
    </a>
  </div>
</div>
```

> WhatsApp y teléfono `525520780102` son **idénticos en todos los productos**. No cambiar.
> El `sb-card__title` en esta card usa color blanco (no `--dark`).

### 7.2 Card 2 — Especificaciones clave

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M9 12h6m-6 4h6M9 8h6M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/>
    </svg>
    Especificaciones Clave
  </h3>
  <ul class="sb-specs">
    {specsRapidas.map((s) => (
      <li class="sb-specs__row">
        <span class="sb-specs__label">{s.label}</span>
        <span class="sb-specs__val">{s.valor}</span>
      </li>
    ))}
  </ul>
</div>
```

### 7.3 Card 3 — Otros modelos (con sb-see-all)

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
    Otros Modelos del Traje
  </h3>
  <ul class="sb-links">
    {otrosModelos.map((m) => (
      <li>
        <a href={m.href} class="sb-link">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          {m.label}
        </a>
      </li>
    ))}
  </ul>
  <a href="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" class="sb-see-all">
    Ver todos los modelos →
  </a>
</div>
```

### 7.4 Card 4 — EPP complementario (con sb-see-all)

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    </svg>
    EPP Complementario
  </h3>
  <ul class="sb-epp">
    {epp.map((e) => (
      <li class="sb-epp__item">
        <a href={e.href} class="sb-epp__link">
          <span class="sb-epp__tag">{e.tag}</span>
          <span class="sb-epp__label">{e.label}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </a>
      </li>
    ))}
  </ul>
  <a href="/productos" class="sb-see-all">Ver catálogo completo →</a>
</div>
```

### 7.5 Card 5 — Catálogos y recursos (sin sb-see-all)

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
    Catálogos y Recursos
  </h3>
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
  <!-- SIN sb-see-all -->
</div>
```

### 7.6 Card 6 — Directorio de Bomberos (sin sb-see-all, con sb-card__subtext)

```html
<div class="sb-card">
  <h3 class="sb-card__title sb-card__title--dark">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
    Directorio de Bomberos
  </h3>
  <p class="sb-card__subtext">Estaciones que usan nuestro equipo:</p>
  <ul class="sb-links">
    {directorioLinks.map((d) => (
      <li>
        <a href={d.href} class="sb-link">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6"/>
          </svg>
          {d.label}
        </a>
      </li>
    ))}
  </ul>
  <!-- SIN sb-see-all -->
</div>
```

---

## 8. Secciones full-width

### 8.1 Hero

```html
<section class="hero">
  <div class="hero__bg">
    <div class="hero__gradient"></div>
    <div class="hero__grid"></div>
    <div class="hero__glow hero__glow--1"></div>
    <div class="hero__glow hero__glow--2"></div>
  </div>

  <div class="container hero__container">  <!-- grid 1fr 1fr -->

    <!-- Columna izquierda: badge animado + H1 + subtítulo -->
    <div class="hero__content">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>  <!-- punto rojo con animación pulse -->
        Traje Estructural · NFPA 1971 · Sistema 3 Capas
      </div>
      <h1 class="hero__title">
        Traje Estructural NFPA 1971
        <span class="hero__title-highlight">Sistema 3 Capas</span>  <!-- gradient fire -->
      </h1>
      <p class="hero__subtitle">
        Subtítulo 2-3 líneas con keywords principales y propuesta de valor.
      </p>
    </div>

    <!-- Columna derecha: 2 bloques H2 + párrafo SEO -->
    <div class="hero__seo">
      <div class="hero__seo-block">
        <h2 class="hero__seo-title">Long-tail keyword 1 — con variación geográfica o marca</h2>
        <p class="hero__seo-text">
          Párrafo SEO con <strong>keywords</strong> en negrita. 3-4 líneas.
          Mencionar BOMBERO.MX y cobertura nacional.
        </p>
      </div>
      <div class="hero__seo-block">
        <h2 class="hero__seo-title">Long-tail keyword 2 — con certificación o documentación</h2>
        <p class="hero__seo-text">
          Párrafo SEO. Mencionar <strong>licitaciones gubernamentales</strong>
          y <strong>32 estados de México</strong>.
        </p>
      </div>
    </div>

  </div>
</section>
```

> Los H2 del `hero__seo` son SEO secundarios. Deben ser descriptivos pero no competir con el H1.
> `hero__title-highlight` usa `var(--gradient-fire)` con `background-clip: text`.

### 8.2 CTABar

```astro
<CTABar quote="Cotizar Traje Estructural NFPA 1971" />
```

> Siempre va **inmediatamente después** del `</section>` del hero. Nunca dentro.

### 8.3 FAQ

```html
<section class="faq-prod" id="preguntas-frecuentes">
  <div class="container">
    <SectionHeader
      label="Preguntas Frecuentes"
      title="Todo sobre el Traje Estructural NFPA 1971"
      description="Respondemos las dudas técnicas más frecuentes sobre el sistema de 3 capas,
        certificaciones, mantenimiento y compatibilidad con el resto del EPP."
    />

    <div class="faq-prod__grid">
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

      <aside class="faq-prod__aside">
        <!-- Card 1: documentación -->
        <div class="faq-aside-card">
          <div class="faq-aside-card__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/>
            </svg>
          </div>
          <h4>Descarga la Ficha Técnica</h4>
          <p>Solicita la ficha técnica completa y el certificado de laboratorio NFPA 1971.</p>
          <a href="/cotizar" class="faq-aside-card__btn">Solicitar Documentación</a>
        </div>

        <!-- Card 2: asesoría — fondo rojo -->
        <div class="faq-aside-card faq-aside-card--fire">
          <h4>¿Necesitas asesoría técnica?</h4>
          <p>Nuestros especialistas te ayudan a elegir la configuración correcta según el riesgo operativo.</p>
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

> La primera `faq-aside-card` tiene `faq-aside-card__icon` (wrapper div con `aria-hidden="true"` + SVG).
> La segunda `faq-aside-card--fire` NO tiene el `__icon` div.

### 8.4 Relacionados

```html
<section class="relacionados">
  <div class="container">
    <SectionHeader
      label="EPP Complementario"
      title="Completa tu Equipo de Protección"
      description="El traje estructural NFPA 1971 trabaja como parte de un sistema.
        Todos los equipos están certificados con la misma edición de norma."
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
```

### 8.5 CTABanner

```astro
<CTABanner />
```

> Sin props — el componente tiene su propio contenido genérico. Siempre es el último elemento antes de `</PageLayout>`.

---

## 9. SEO — Reglas obligatorias

### 9.1 PageLayout

```astro
<PageLayout
  title="Traje Estructural NFPA 1971 — Sistema 3 Capas | BOMBERO.MX"
  description="Traje estructural NFPA 1971 Sistema 3 Capas certificado. Capa exterior Nomex®, barrera Gore-Tex® y liner térmico TPP ≥ 35 cal/cm². Ficha técnica incluida. Envío a los 32 estados de México."
  keywords={[
    "traje estructural NFPA 1971 sistema 3 capas",
    "traje bombero 3 capas México",
    "traje Nomex Gore-Tex bombero",
    "traje bombero TPP 35",
    "traje NFPA 1971 precio México",
    "traje bombero certificado México",
    "traje estructural bombero Nomex",
    "comprar traje bombero NFPA 1971",
  ]}
  canonical={SLUG}
  image={IMAGE}
>
```

**Reglas del `title`:** Máximo 60 caracteres. Formato: `{Producto} — {Variante} | BOMBERO.MX`
**Reglas del `description`:** 150–160 caracteres exactos. Incluir: keyword principal + norma + valor técnico clave + "32 estados de México".

### 9.2 Jerarquía de encabezados (obligatoria)

```
H1 — 1 único por página — hero__title (afuera del prod-layout)
H2 — hero__seo-title (×2) — long-tail SEO secundarios
H2 — prod-intro__title — nombre del producto con variante
H2 — prod-section__title (×N) — capas, especificaciones, certs-dark
H3 — capa-card__title, aplic-card__title, rel-card__title, sb-card__title
H4 — faq-aside-card > h4
```

> Regla absoluta: NO saltar niveles. NO usar H1 fuera del hero.

### 9.3 Breadcrumb — siempre 5 niveles

```astro
<Breadcrumb
  items={[
    { label: "Inicio",                      href: "/" },
    { label: "Productos",                   href: "/productos" },
    { label: "Trajes de Bombero",           href: "/productos/trajes-para-bomberos" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Sistema 3 Capas" },           // Sin href — página activa
  ]}
/>
```

### 9.4 IDs de sección (anclas estándar)

| ID                       | Sección               |
|--------------------------|-----------------------|
| `#producto`              | prod-intro            |
| `#sistema-capas`         | Capas / componentes   |
| `#especificaciones`      | Tabla técnica         |
| `#aplicaciones`          | Escenarios de uso     |
| `#certificaciones`       | certs-dark            |
| `#preguntas-frecuentes`  | FAQ                   |

---

## 10. Clases CSS clave

### Layout

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.prod-layout`         | Wrapper bg smoke-50, padding space-12 0 space-16          |
| `.prod-layout__inner`  | Grid `minmax(0, 1fr) 340px`, gap space-10                 |
| `.prod-main`           | Flex col, gap space-2                                     |
| `.prod-sidebar`        | Flex col, gap space-4, sticky top 90px                    |

### Hero

| Clase                    | Descripción                                              |
|--------------------------|----------------------------------------------------------|
| `.hero`                  | bg smoke-950, padding space-16 0                         |
| `.hero__container`       | Grid `1fr 1fr`, gap space-12                             |
| `.hero__badge`           | Pill rojo sutil con puntito pulsante                     |
| `.hero__badge-dot`       | Círculo 8px ember-500 con `animation: pulse 2s infinite` |
| `.hero__title`           | clamp(2.5rem, 5vw, 4rem), weight 800, color white        |
| `.hero__title-highlight` | Texto con gradient-fire, `background-clip: text`         |
| `.hero__subtitle`        | text-xl, smoke-300                                       |
| `.hero__seo-title`       | text-lg, weight 700, fire-400                            |
| `.hero__seo-text`        | text-base, smoke-300; `strong` → white                   |

### prod-intro

| Clase                      | Descripción                                          |
|----------------------------|------------------------------------------------------|
| `.prod-intro`              | bg white, border-radius 2xl, border smoke-200        |
| `.prod-intro__topbar`      | Flex row, bg smoke-50, border-bottom smoke-100       |
| `.prod-intro__category`    | text-xs uppercase, color fire-600                    |
| `.pcert`                   | Pill de certificación 10px uppercase                 |
| `.pcert--nfpa`             | Rojo claro (fire-700)                                |
| `.pcert--tpp`              | Naranja (ember-700)                                  |
| `.pcert--solas`            | Azul (#1d4ed8)                                       |
| `.prod-intro__sold`        | Pill fire-600 "MÁS VENDIDO" 10px                     |
| `.prod-intro__body`        | Grid `1fr 300px`                                     |
| `.prod-intro__left`        | Padding space-8, border-right smoke-100              |
| `.prod-intro__features`    | Grid `1fr 1fr`, gap space-2 space-6                  |
| `.prod-intro__check`       | Círculo 18px con checkmark CSS (fire-600)            |
| `.prod-intro__right`       | Padding space-8 space-6, bg smoke-50                 |
| `.prod-intro__app-tags`    | Flex wrap de pills (bg white, border smoke-200)      |
| `.prod-intro__title-sub`   | display block, fire-600, 0.72em, weight 700          |

### capas

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.capas__grid`         | **Flex col** (NO grid), gap space-5                       |
| `.capa-card`           | bg white, border 1px smoke-200, overflow hidden           |
| `.capa-card--ember`    | Número: fondo rgba(220,38,38,0.10), texto fire-700        |
| `.capa-card--smoke`    | Número: fondo rgba(100,116,139,0.10), texto smoke-600     |
| `.capa-card--fire`     | Número: fondo rgba(234,88,12,0.10), texto ember-700       |
| `.capa-card__head`     | Flex, bg smoke-50, border-bottom smoke-100                |
| `.capa-card__num`      | Círculo 46×46px, weight 900                               |
| `.capa-card__body`     | Grid `1fr 1fr`                                            |
| `.capa-card__desc`     | Padding space-6, border-right smoke-100                   |
| `.capa-card__specs`    | Grid `1fr 1fr`, bg smoke-50, padding space-5 space-6     |
| `.capa-card__spec-label` | 11px uppercase, smoke-400                               |
| `.capa-card__spec-val` | text-sm, smoke-900, weight 700                            |

### specs table

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.specs__table-wrap`   | overflow-x auto, border smoke-200, border-radius xl       |
| `.specs__table thead`  | bg smoke-900                                              |
| `.specs__table th`     | text-xs uppercase smoke-300                               |
| `.specs__row--first`   | border-top 2px smoke-200; primera fila sin border-top     |
| `.specs__cat`          | width 150px                                               |
| `.specs__cat-badge`    | Pill inline-flex, colores según catClass                  |
| `.specs__label`        | smoke-700, weight 500                                     |
| `.specs__val`          | smoke-900, weight 700                                     |
| `.specs__note`         | text-xs, italic, bg smoke-50, border smoke-100            |

### aplic-card

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.aplic__grid`         | Grid `repeat(2, 1fr)`, gap space-6                        |
| `.aplic-card`          | bg white, border 1px smoke-200, padding space-10, SIN border-top de color |
| `.aplic-card__deco`    | Número 96px, color rgba(220,38,38,0.05), absolute bottom-right |
| `.aplic-card__head`    | Flex, gap space-3                                         |
| `.aplic-card__num`     | Pill 11px "0X", fire-700, bg rgba(220,38,38,0.08)         |
| `.aplic-card__desc`    | text-sm, border-top smoke-100, padding-top space-5        |

### certs-dark

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.certs-dark`          | bg smoke-900, border-radius 2xl, con patrón rejilla ::before |
| `.certs-dark__grid`    | Grid `repeat(3, 1fr)`, gap space-3                        |
| `.cert-item`           | bg rgba(255,255,255,0.06), border rgba(255,255,255,0.10)  |
| `.cert-item__code`     | text-sm, weight 800, fire-400                             |
| `.cert-item__desc`     | text-xs, smoke-500                                        |
| `.cert-item--cta`      | Gradient rojo, con label + botón fire-600                 |

### sidebar

| Clase                    | Descripción                                             |
|--------------------------|---------------------------------------------------------|
| `.sb-card`               | bg white, border smoke-100, border-radius 2xl           |
| `.sb-card--cta`          | Gradient fire-600 → ember-600, border transparent       |
| `.sb-card__title`        | display flex, align-items center, gap space-2           |
| `.sb-card__title--dark`  | Color smoke-800 (en lugar de white); SVG → fire-500     |
| `.sb-card__text`         | text-sm, rgba(255,255,255,0.85) — solo en CTA card      |
| `.sb-card__subtext`      | text-xs, smoke-500 — solo en directorio card            |
| `.sb-cta-btn`            | Full width, bg white, color fire-700, weight 800        |
| `.sb-contact--wa`        | Color #86efac / hover #4ade80                           |
| `.sb-specs__row`         | justify-content space-between                           |
| `.sb-specs__label`       | text-xs, smoke-500                                      |
| `.sb-specs__val`         | text-xs, weight 700, smoke-900                          |
| `.sb-link`               | Flex, gap space-2, text-sm, smoke-700                   |
| `.sb-see-all`            | Enlace completo al final de la lista, solo en cards 3 y 4 |
| `.sb-epp__tag`           | Pill xs, bg smoke-100, weight 700                       |
| `.sb-article__tag`       | Pill xs, bg smoke-100                                   |

### rel-card

| Clase                  | Descripción                                               |
|------------------------|-----------------------------------------------------------|
| `.rel__grid`           | Grid `repeat(4, 1fr)`, gap space-5                        |
| `.rel-card`            | Article white, flex col, border smoke-200                 |
| `.rel-card__img-wrap`  | aspect-ratio 1/1, overflow hidden, relative               |
| `.rel-card__img`       | width/height 100%, object-fit cover                       |
| `.rel-card__badge`     | Absolute top-right, fire-600                              |
| `.rel-card__btn`       | flex + arrow SVG; bg smoke-950 → hover fire-600           |

---

## 11. Imágenes disponibles

Todas en `/public/images/directorio/` — formato `.avif`.

**Imágenes de producto específico:**

| Producto             | Imagen recomendada                                    |
|----------------------|-------------------------------------------------------|
| Traje estructural    | `traje-bombero-estructural-nfpa-01.avif`              |
| Casco                | `casco-bombero-proteccion-cabeza-01.avif`             |
| Guantes              | `guantes-bombero-resistentes-01.avif`                 |
| Botas                | `botas-bombero-proteccion-01.avif`                    |
| Capucha Nomex        | `capucha-bombero-nomex-01.avif`                       |
| SCBA / Respiratorio  | `equipo-scba-aparato-respiratorio-01.avif`            |
| Cilindro SCBA        | `cilindro-scba-bomberos-01.avif`                      |
| Máscara SCBA         | `mascara-scba-bombero-01.avif`                        |
| Traje HAZMAT         | `traje-hazmat-nivel-a-01.avif`                        |
| Traje inmersión      | `traje-inmersion-rescate-01.avif`                     |
| Extintor             | `extintor-polvo-quimico-01.avif`                      |
| Detector multigas    | `detector-multigas-hazmat-01.avif`                    |
| Detector de gases    | `detector-gases-bomberos-01.avif`                     |

**Imágenes de acción (para galerías):**

| Uso                           | Imagen                                              |
|-------------------------------|-----------------------------------------------------|
| Bombero en incendio           | `bomberos-accion-incendio-01.avif`                  |
| Incendio estructural          | `bomberos-emergencia-incendio-estructural-01.avif`  |
| Profesionales equipados       | `bomberos-profesionales-accion-01.avif`             |
| Trabajo en equipo             | `bomberos-trabajo-equipo-01.avif`                   |
| Entrenamiento en fuego        | `entrenamiento-bomberos-fuego-01.avif`              |
| Capacitación                  | `capacitacion-bomberos-profesional-01.avif`         |
| Equipo completo               | `equipo-bomberos-completo-01.avif`                  |
| Equipo personal               | `equipo-bomberos-personal-01.avif`                  |
| Rescate urbano                | `rescate-urbano-bomberos-01.avif`                   |
| Rescate acuático              | `rescate-acuatico-bomberos-01.avif`                 |
| HAZMAT materiales peligrosos  | `equipo-hazmat-materiales-peligrosos-01.avif`       |
| Simulacro                     | `simulacro-bomberos-profesional-01.avif`            |

---

## 12. Adaptaciones por tipo de producto

### Traje Forestal NFPA 1977

- `capas`: 2 capas (Exterior Nomex® + liner mínimo) — sin barrera Gore-Tex
- `pcert`: `pcert--nfpa` con texto "NFPA 1977" + badge personalizado para peso/transpirabilidad
- `aplicaciones`: incendio forestal, control de quemas, incendio interfaz urbano-forestal, RTP
- H1: `Traje Forestal NFPA 1977`, highlight: `Combat Wildland`
- IMAGE: `traje-bombero-estructural-nfpa-01.avif`

### Casco Estructural NFPA 1971

- `capas` → renombrar a `componentes`: [Casco exterior, Arnés interior, Protector facial]
- `pcert`: `pcert--nfpa` (NFPA 1971)
- specs clave: TPP, impacto, penetración, retención, temperatura, peso
- `aplicaciones`: incendio estructural, rescate, operaciones HAZMAT, trabajos en altura
- IMAGE: `casco-bombero-proteccion-cabeza-01.avif`

### Guantes Estructurales NFPA 1971

- `capas` → `componentes`: [Capa exterior cuero/Nomex®, Barrera de humedad, Liner térmico]
- specs clave: TPP manual, resistencia a corte/perforación, destreza (NFPA 1971 §8.6), tallas
- `aplicaciones`: incendio estructural, rescate vehicular, manejo de mangueras, HAZMAT
- IMAGE: `guantes-bombero-resistentes-01.avif`

### Botas Estructurales NFPA 1971

- `capas` → `componentes`: [Exterior cuero, Membrana impermeable, Suela/puntera acero]
- specs clave: resistencia a perforación, puntera acero 200 J, temperatura, tallas
- `aplicaciones`: incendio estructural, rescate, trabajo en altura, pisos industriales
- IMAGE: `botas-bombero-proteccion-01.avif`

### Capucha Nomex NFPA 1971

- `capas` → 1 sola capa (tejido Nomex® circular knit)
- specs clave: peso en gramos, apertura facial (cm), compatibilidad SCBA/casco, lavados
- `aplicaciones`: incendio estructural (bajo casco), rescate en calor, post-flash-over
- IMAGE: `capucha-bombero-nomex-01.avif`

### Detector Multigas HAZMAT

- `capas` → `sensores`: [Sensor O₂, Sensor CO, Sensor LEL, Sensor H₂S]
- specs: rangos de detección, tiempos de alarma (T20/T90), batería, certificación ATEX
- `aplicaciones`: HAZMAT, espacios confinados, escenas de gas, post-incendio
- IMAGE: `detector-multigas-hazmat-01.avif`

---

## 13. Checklist completo

### Antes de empezar
- [ ] Definir `SLUG` exacto y crear la carpeta correspondiente
- [ ] Confirmar qué imagen `.avif` existe para el producto (`IMAGE`)
- [ ] Definir las keywords objetivo (1 principal + 7 variantes)

### Datos (frontmatter)
- [ ] `IMAGE` apunta a un `.avif` existente en `/images/directorio/`
- [ ] `SLUG` coincide exactamente con la ruta del archivo
- [ ] `catClass` incluye TODAS las categorías usadas en `especificaciones`
- [ ] `capas` (o equivalente): exactamente **4 specs por item** (grid 2×2)
- [ ] `especificaciones`: agrupadas por `categoria` (string idéntico al usado en `catClass`)
- [ ] `aplicaciones`: exactamente **4 items** (grid 2×2 completo)
- [ ] `faqs`: 4 a 6 preguntas técnicas específicas del producto
- [ ] `relacionados`: exactamente **4 items** con `image`, `badge`, `buttonText` SEO correcto
- [ ] `specsRapidas`: 6 a 8 items con los valores más relevantes
- [ ] `directorioLinks`: los 6 links estándar nacionales (no modificar)

### SEO
- [ ] `title`: formato `{Producto} — {Variante} | BOMBERO.MX`, máx 60 chars
- [ ] `description`: 150–160 chars con keyword + norma + valor técnico + "32 estados de México"
- [ ] `keywords`: array con mínimo 6, máximo 10 keywords
- [ ] `canonical` === `SLUG`
- [ ] `image` === `IMAGE`

### Hero
- [ ] Breadcrumb con 5 niveles (último sin href)
- [ ] `hero__badge`: texto `{Categoría · Norma · Variante}`
- [ ] H1 único en `hero__title`
- [ ] `hero__title-highlight` contiene keyword secundaria
- [ ] Exactamente 2 `hero__seo-block` con H2 + párrafo SEO con keywords

### prod-intro
- [ ] Badges `pcert` relevantes al producto
- [ ] H2 `prod-intro__title` con nombre completo + `prod-intro__title-sub` con variante
- [ ] 4 a 6 features **específicas** del producto (no genéricas)
- [ ] 3 a 6 pills de aplicación en `prod-intro__app-tags`
- [ ] CTA apuntando a `/cotizar`

### Galería
- [ ] Exactamente **6 imágenes** en 6 `<figure class="prod-gallery__item">`
- [ ] `loading="lazy"` en todas
- [ ] `width="420" height="300"` en todas
- [ ] Alt único y descriptivo por imagen
- [ ] Todas `.avif`

### CTABar
- [ ] `quote` adaptado al producto específico

### prod-section: capas
- [ ] `id="sistema-capas"`
- [ ] `capas__grid` es flex col (no grid) ← punto crítico
- [ ] Cada `capa-card` tiene exactamente **4 specs**
- [ ] Color del círculo: ember/smoke/fire según posición

### prod-section: especificaciones
- [ ] `id="especificaciones"`
- [ ] Filas agrupadas por `categoria` con `isNew` correctamente calculado
- [ ] `catClass` cubre todos los valores de `categoria` usados

### prod-section: aplicaciones
- [ ] `id="aplicaciones"`
- [ ] Usa `<SectionHeader>` (NO `prod-section__head` inline)
- [ ] Cada `aplic-card` tiene `<span class="aplic-card__deco">0{i+1}</span>`
- [ ] **NO hay `border-top` de color** en `.aplic-card`

### certs-dark
- [ ] `id="certificaciones"`
- [ ] Exactamente 5 `cert-item` + 1 `cert-item--cta`

### Sidebar
- [ ] Card 1 CTA: botón + WhatsApp + teléfono (`525520780102`)
- [ ] Cards 2-6: todos con `sb-card__title--dark` (no solo `sb-card__title`)
- [ ] Card 3 `otrosModelos`: tiene `sb-see-all` → "Ver todos los modelos →"
- [ ] Card 4 `epp`: tiene `sb-see-all` → "Ver catálogo completo →"
- [ ] Card 5 `articulos`: **sin** `sb-see-all`
- [ ] Card 6 `directorioLinks`: tiene `sb-card__subtext` "Estaciones que usan nuestro equipo:", **sin** `sb-see-all`

### FAQ
- [ ] `id="preguntas-frecuentes"`
- [ ] `details` con `name="faq-producto"` (permite accordion nativo)
- [ ] Primera `faq-aside-card`: tiene `faq-aside-card__icon` div wrapper con SVG
- [ ] Segunda `faq-aside-card--fire`: sin `faq-aside-card__icon` div

### Relacionados
- [ ] 4 `article.rel-card`
- [ ] `rel-card__img`: `width="400" height="400"` (square 1:1)
- [ ] `buttonText` = keyword exacta de la categoría destino

### Componentes globales (en este orden)
- [ ] `<Breadcrumb>` — antes del hero
- [ ] `<CTABar>` — inmediatamente después del `</section>` hero
- [ ] `<WhyChooseUs />` — después de `</div>` prod-layout
- [ ] FAQ section — después de WhyChooseUs
- [ ] Relacionados section — después de FAQ
- [ ] `<CTABanner />` — último elemento antes de `</PageLayout>`

### Validación final
- [ ] `npm run build` compila sin errores
- [ ] La página aparece en el sitemap generado (`dist/sitemap-*.xml`)
- [ ] Verificar en browser que las 6 imágenes de galería cargan correctamente

---

*Template canónico: `sistema-3-capas/index.astro` — Actualizado: 2026-02-19*
