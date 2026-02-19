# DOCUMENTO: Creación de Categoría Completa — Estructura de 3 Niveles

**BOMBERO.MX** — Guía paso a paso para generar categorías profesionales con SEO, Schema.org y cross-linking optimizado.

---

## 📋 Índice

1. [Estructura de 3 Niveles](#estructura-de-3-niveles)
2. [Layouts Reutilizables](#layouts-reutilizables)
3. [Nivel 1: Página Principal de Categoría](#nivel-1-página-principal-de-categoría)
4. [Nivel 2: Subcategorías](#nivel-2-subcategorías)
5. [Nivel 3: Productos Individuales](#nivel-3-productos-individuales)
6. [Flujo de Trabajo Completo](#flujo-de-trabajo-completo)
7. [Checklist de Calidad](#checklist-de-calidad)
8. [Ejemplos de Referencia](#ejemplos-de-referencia)

---

## 🏗️ Estructura de 3 Niveles

### Jerarquía de URLs

```
/productos/trajes-para-bomberos                                    ← Nivel 1: Categoría Principal
├── /productos/trajes-para-bomberos/traje-estructural-nfpa-1971   ← Nivel 2: Subcategoría
│   ├── /productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas       ← Nivel 3: Producto
│   ├── /productos/trajes-para-bomberos/traje-estructural-nfpa-1971/tejido-ultraligero    ← Nivel 3: Producto
│   └── /productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad      ← Nivel 3: Producto
├── /productos/trajes-para-bomberos/traje-forestal-nfpa-1977      ← Nivel 2: Subcategoría
│   ├── /productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base            ← Nivel 3: Producto
│   └── ...
└── /productos/trajes-para-bomberos/traje-hazmat                  ← Nivel 2: Subcategoría
    └── ...
```

### Arquitectura de Archivos

```
src/
├── layouts/
│   ├── PageLayout.astro          ← Layout base (usado en Nivel 1)
│   ├── CategoriaLayout.astro     ← Layout para subcategorías (Nivel 2)
│   └── ProductoLayout.astro      ← Layout para productos (Nivel 3)
├── pages/
│   └── productos/
│       └── trajes-para-bomberos/
│           ├── index.astro                                    ← NIVEL 1
│           ├── traje-estructural-nfpa-1971/
│           │   ├── index.astro                                ← NIVEL 2
│           │   ├── sistema-3-capas/index.astro                ← NIVEL 3
│           │   ├── tejido-ultraligero/index.astro             ← NIVEL 3
│           │   └── alta-visibilidad/index.astro               ← NIVEL 3
│           ├── traje-forestal-nfpa-1977/
│           │   ├── index.astro                                ← NIVEL 2
│           │   └── sistema-base/index.astro                   ← NIVEL 3
│           └── traje-hazmat/
│               ├── index.astro                                ← NIVEL 2
│               └── nivel-a-encapsulado/index.astro            ← NIVEL 3
└── components/
    ├── ProductCard.astro
    ├── CategoryCard.astro
    ├── SectionHeader.astro
    ├── Breadcrumb.astro
    ├── CTABar.astro
    ├── WhyChooseUs.astro
    ├── CTABanner.astro
    └── FAQ.astro
```

---

## 🎨 Layouts Reutilizables

### 1. `CategoriaLayout.astro` — Para Subcategorías (Nivel 2)

**Ubicación**: `src/layouts/CategoriaLayout.astro`

**Props Interface**:
```typescript
interface Props {
  // SEO
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  type?: "website" | "product";
  image?: string;

  // Breadcrumb
  breadcrumb: BreadcrumbItem[];

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroSeoBlocks: HeroSeoBlock[];    // 2 bloques H2 + párrafo

  // CTABar
  ctaBarQuote: string;

  // Productos/Variantes
  productosLabel: string;
  productosTitle: string;
  productosDesc: string;
  productosContent: string;         // HTML
  productoCards: ProductCardItem[]; // 6 variantes típicamente
  productosAltSuffix?: string;

  // Tecnología (dark section)
  specsLabel?: string;
  specsTitle: string;
  specsDesc: string;
  specsContent: string;             // HTML
  specsCards: SpecCard[];           // exactamente 3

  // Tabla comparativa
  comparativaLabel?: string;
  comparativaTitle: string;
  comparativaDesc: string;
  comparativaContent: string;       // HTML
  tablaHeaders: string[];
  tablaRows: TablaRow[];

  // Relacionados
  relacionadosLabel?: string;
  relacionadosTitle: string;
  relacionadosDesc: string;
  relacionadosContent: string;      // HTML
  relacionadoCards: RelacionadoCard[];

  // FAQ (opcional)
  faqs?: FaqItem[];
}
```

**Secciones incluidas**:
1. Breadcrumb
2. Hero (badge + título + 2 bloques SEO)
3. CTABar
4. Grid de productos/variantes (ProductCard)
5. Tecnología y certificaciones (dark, 3 cards)
6. Tabla comparativa
7. WhyChooseUs
8. FAQ (si se proveen)
9. Relacionados / EPP complementario
10. CTABanner

**Schema.org**:
- `BreadcrumbList`
- `ItemList` (productos)
- `FAQPage` (si hay FAQs)

---

### 2. `ProductoLayout.astro` — Para Productos (Nivel 3)

**Ubicación**: `src/layouts/ProductoLayout.astro`

**Props Interface** (principales):
```typescript
interface Props {
  // SEO
  title: string;
  description: string;
  keywords?: string[];
  canonical: string;
  image?: string;

  // Breadcrumb
  breadcrumb: BreadcrumbItem[];

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  heroSeoBlocks: [HeroSeoBlock, HeroSeoBlock];

  // CTABar
  ctaBarQuote: string;

  // Intro del producto
  productoCategoria: string;
  productoBadges: BadgeItem[];
  productoMasVendido?: boolean;
  productoSoldLabel?: string;
  productoTitle: string;
  productoTitleSub: string;
  productoDesc: string;
  productoFeatures: string[];
  productoAppTags: string[];

  // Galería (6 imágenes)
  gallery: { src: string; alt: string }[];

  // Sistema de capas/características
  capasEyebrow?: string;
  capasTitle: string;
  capasDesc: string;
  capas: CapaItem[];

  // Especificaciones técnicas
  especificaciones: EspecificacionItem[];
  catClass?: Record<string, string>;

  // Aplicaciones
  aplicacionesTitle: string;
  aplicacionesContent: string;      // HTML
  aplicaciones: AplicacionItem[];

  // Certificaciones (dark)
  certsTitle: string;
  certsDesc: string;                // HTML
  certItems: CertItem[];            // 5 items + 1 CTA

  // Sidebar
  specsRapidas: SpecRapida[];
  otrosModelos: SidebarLinkItem[];
  otrosModelosSeeAllHref: string;
  epp: EppSidebarItem[];
  articulos: ArticuloItem[];
  directorioLinks: SidebarLinkItem[];

  // FAQ
  faqTitle: string;
  faqDescription: string;
  faqs: FaqItem[];

  // Relacionados
  relacionados: RelacionadoItem[];
}
```

**Secciones incluidas**:
1. Breadcrumb
2. Hero
3. CTABar
4. Layout principal (main + sidebar sticky)
   - Tarjeta intro del producto
   - Galería horizontal (6 imgs)
   - Sistema de capas (3 capas típicamente)
   - Especificaciones técnicas (tabla)
   - Aplicaciones (4 cards)
   - Certificaciones (dark, 5 + 1 CTA)
5. WhyChooseUs
6. FAQ con aside
7. Relacionados
8. CTABanner

---

## 📦 NIVEL 1: Página Principal de Categoría

**URL**: `/productos/trajes-para-bomberos`
**Archivo**: `src/pages/productos/trajes-para-bomberos/index.astro`
**Layout usado**: `PageLayout` (custom HTML/CSS directo)

### Objetivo

Presentar todas las **subcategorías** disponibles (Nivel 2) con descripción, badges y links a cada una.

### Estructura HTML

```astro
---
import PageLayout from "@layouts/PageLayout.astro";
import Breadcrumb from "@components/Breadcrumb.astro";
import CTABar from "@components/CTABar.astro";
import SectionHeader from "@components/SectionHeader.astro";
import ProductCard from "@components/ProductCard.astro";
import CategoryCard from "@components/CategoryCard.astro";
import WhyChooseUs from "@components/WhyChooseUs.astro";
import CTABanner from "@components/CTABanner.astro";

const productos = [
  {
    id: "estructural",
    nombre: "Traje Estructural NFPA 1971",
    slug: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
    badge: "NFPA 1971",
    badgeColor: "ember" as const,
    imagen: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
    descripcion: "Protección máxima para combate de incendios estructurales...",
    caracteristicas: [
      "Capa exterior: Nomex® o PBI® certificada",
      "Barrera Gore-Tex® o equivalente NFPA",
      // ...
    ],
    aplicacion: "Incendio estructural · Rescate urbano · Colapso de estructuras",
  },
  // ... más productos (5 subcategorías total)
];
---

<PageLayout
  title="Trajes para Bomberos Certificados NFPA | Estructural, Forestal, HAZMAT | BOMBERO.MX"
  description="Trajes de bombero certificados NFPA 1971 y 1977..."
  keywords={[...]}
>
  <Breadcrumb items={[
    { label: "Productos", href: "/productos" },
    { label: "Trajes de Bombero" },
  ]} />

  <!-- HERO -->
  <section class="hero">
    <!-- Background gradients -->
    <div class="container hero__container">
      <div class="hero__content">
        <div class="hero__badge">5 Tipos de Trajes · Certificados NFPA</div>
        <h1 class="hero__title">
          Trajes para <span class="hero__title-highlight">Bomberos</span> Certificados NFPA
        </h1>
        <p class="hero__subtitle">El equipo de protección personal más crítico...</p>
      </div>

      <div class="hero__seo">
        <div class="hero__seo-block">
          <h2 class="hero__seo-title">Distribuidores de Trajes de Bombero Certificados NFPA en México</h2>
          <p class="hero__seo-text">En <strong>BOMBERO.MX</strong> somos el distribuidor autorizado...</p>
        </div>
        <div class="hero__seo-block">
          <h2 class="hero__seo-title">Trajes con Certificación NFPA para Cuerpos de Bomberos</h2>
          <p class="hero__seo-text">Cada <strong>traje de bombero</strong> cumple con...</p>
        </div>
      </div>
    </div>
  </section>

  <CTABar quote="Cotizar Trajes de Bombero" />

  <!-- GRID DE SUBCATEGORÍAS -->
  <section class="section productos">
    <div class="container">
      <SectionHeader
        label="Catálogo de Trajes para Bomberos"
        title="5 Tipos de Trajes de Bombero"
        description="Desde combate estructural hasta operaciones con materiales peligrosos..."
      >
        <p>Un <strong>traje de bombero</strong> no es simplemente ropa de protección...</p>
      </SectionHeader>

      <div class="productos__grid">
        {productos.map((producto) => (
          <ProductCard {...producto} altSuffix="Traje de bombero certificado" />
        ))}
      </div>
    </div>
  </section>

  <!-- MATERIALES Y CERTIFICACIONES — DARK -->
  <section class="section section--dark specs">
    <div class="container">
      <SectionHeader
        label="Tecnología y Materiales"
        title="Materiales, Certificaciones y Aplicaciones"
        description="Los mejores trajes de bombero del mundo..."
      >
        <p>Los <strong>trajes estructurales NFPA 1971</strong> combinan...</p>
      </SectionHeader>
      <div class="specs__grid">
        <CategoryCard
          title="Materiales de Alta Protección"
          icon="shield"
          description="Nomex® IIIA y PBI Gold® para resistencia inherente..."
        />
        <CategoryCard
          title="Certificaciones Internacionales"
          icon="certificate"
          description="NFPA 1971 para trajes estructurales..."
        />
        <CategoryCard
          title="Aplicaciones y Operaciones"
          icon="users"
          description="Cuerpos de bomberos municipales y estatales..."
        />
      </div>
    </div>
  </section>

  <!-- TABLA COMPARATIVA -->
  <section class="section comparativa">
    <div class="container">
      <SectionHeader
        label="Tabla Comparativa"
        title="¿Qué Traje de Bombero Necesitas?"
        description="Compara los 5 tipos de trajes..."
      />
      <div class="comparativa__wrapper">
        <table class="comparativa__table">
          <thead>
            <tr>
              <th>Traje</th>
              <th>Norma Principal</th>
              <th>Aplicación</th>
              <th>Nivel de Protección Térmica</th>
              <th>Material Exterior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Estructural</strong></td>
              <td><span class="cert-chip cert-chip--ember">NFPA 1971</span></td>
              <td>Incendio estructural, colapso, rescate urbano</td>
              <td>Alto — TPP ≥ 35 cal/cm²</td>
              <td>Nomex® / PBI Gold®</td>
            </tr>
            <!-- ... más filas -->
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <WhyChooseUs />
  <FAQ />

  <!-- EPP COMPLEMENTARIO -->
  <section class="section relacionados">
    <div class="container">
      <SectionHeader
        label="Equipo Complementario"
        title="Completa tu EPP de Bombero"
        description="El traje es solo el comienzo..."
      />
      <div class="rel__grid">
        <CategoryCard
          title="Cascos para Bombero"
          icon="helmet"
          image="/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
          href="/productos/cascos-para-bomberos"
          buttonText="Cascos para Bombero"
          items={[
            { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/estructural" },
            // ...
          ]}
        />
        <!-- ... más cards de EPP -->
      </div>
    </div>
  </section>

  <CTABanner />
</PageLayout>

<style>
  /* CSS custom para esta página (hero, productos__grid, specs, comparativa, etc.) */
</style>
```

### Puntos Clave — Nivel 1

1. **Array de productos**: Define las 5 subcategorías con `slug` absoluto apuntando al Nivel 2
2. **Hero con 2 bloques SEO H2**: Para keywords específicas
3. **Grid de 5 tarjetas**: `ProductCard` para cada subcategoría
4. **Tabla comparativa**: Compara las 5 opciones con chips de certificación
5. **EPP complementario**: Links a cascos, guantes, botas, SCBA
6. **CSS custom**: Estilos propios en `<style>` scoped

---

## 📂 NIVEL 2: Subcategorías

**URL ejemplo**: `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971`
**Archivo**: `src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/index.astro`
**Layout usado**: `CategoriaLayout.astro` (reutilizable)

### Objetivo

Presentar las **6 variantes de producto** de esta subcategoría (Nivel 3) con tabla comparativa, specs, y cross-linking a otras subcategorías.

### Estructura (Data-Only)

```astro
---
/**
 * ─── BOMBERO.MX ───
 * Subcategoría: Traje Estructural NFPA 1971
 * URL: /productos/trajes-para-bomberos/traje-estructural-nfpa-1971
 * SEO Target: "traje estructural NFPA 1971", "traje bombero 3 capas", "traje Nomex Gore-Tex"
 */
import CategoriaLayout from "@layouts/CategoriaLayout.astro";

const SLUG = "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971";
const IMAGE = "/images/directorio/traje-bombero-estructural-nfpa-01.avif";

/* ── Breadcrumb ─────────────────────────────────────────────────── */
const breadcrumb = [
  { label: "Productos", href: "/productos" },
  { label: "Trajes de Bombero", href: "/productos/trajes-para-bomberos" },
  { label: "Traje Estructural NFPA 1971" },
];

/* ── Hero ───────────────────────────────────────────────────────── */
const heroSeoBlocks = [
  {
    title: "El Estándar de Oro para Incendios Estructurales en México",
    text: `El <strong>traje estructural NFPA 1971</strong> es el EPP más utilizado...`,
  },
  {
    title: "Sistema de 3 Capas con Certificación NFPA 1971",
    text: `Cada <strong>traje de bombero estructural</strong> combina...`,
  },
];

/* ── 6 Variantes de producto ────────────────────────────────────── */
const productoCards = [
  {
    nombre: "Traje Estructural NFPA 1971 — Sistema 3 Capas",
    slug: SLUG + "/sistema-3-capas",
    badge: "MÁS VENDIDO",
    badgeColor: "fire" as const,
    imagen: IMAGE,
    descripcion: "El estándar de oro para incendios estructurales...",
    caracteristicas: [
      "Sistema 3 capas certificado NFPA 1971",
      "Protección térmica TPP ≥ 35 cal/cm²",
      "Capa exterior Nomex® IIIA resistente a llama",
      "Barrera Gore-Tex® impermeable y transpirable",
      "Liner térmico Caldura® / PBI® Gold",
      "Bandas retroreflectivas SOLAS clase 2",
    ],
    aplicacion: "Incendio estructural · Rescate urbano · Colapso de estructuras",
  },
  {
    nombre: "Traje Estructural NFPA 1971 — Tejido Ultraligero",
    slug: SLUG + "/tejido-ultraligero",
    badge: "LIGERO",
    badgeColor: "smoke" as const,
    imagen: IMAGE,
    descripcion: "Máxima movilidad sin comprometer protección...",
    caracteristicas: [
      "Peso reducido: 20% menos que el estándar",
      "Nomex® Nano 6.0 oz/yd² ultraligero",
      "TPP ≥ 35 cal/cm² certificado",
      "Alta transpirabilidad MVTR > 2,000 g/m²/24h",
      "Ideal para climas cálidos y operaciones prolongadas",
      "Certificado NFPA 1971 edición vigente",
    ],
    aplicacion: "Clima cálido · Operaciones prolongadas · Alta movilidad",
  },
  // ... 4 variantes más
];

/* ── Specs Cards (dark section) ─────────────────────────────────── */
const specsCards = [
  {
    title: "Sistema de 3 Capas",
    icon: "shield",
    description: "Nomex® IIIA exterior, Gore-Tex® PTFE barrera y Caldura® liner...",
  },
  {
    title: "Certificación NFPA 1971",
    icon: "certificate",
    description: "Cumple todos los requisitos de la norma NFPA 1971 edición vigente...",
  },
  {
    title: "Aplicaciones Municipales",
    icon: "users",
    description: "Cuerpos de bomberos municipales y estatales en los 32 estados...",
  },
];

/* ── Tabla Comparativa ──────────────────────────────────────────── */
const tablaHeaders = ["Configuración", "Capa Exterior", "Peso Total", "TPP", "Certificación", "Aplicación Ideal"];

const tablaRows = [
  {
    cells: [
      { text: "Sistema 3 Capas" },
      { text: "Nomex® IIIA 7.0 oz" },
      { text: "3.5 kg",          chip: "smoke" as const },
      { text: "≥ 35 cal/cm²",    chip: "fire"  as const },
      { text: "NFPA 1971",       chip: "ember" as const },
      { text: "Uso general municipal y estatal" },
    ],
  },
  {
    cells: [
      { text: "Tejido Ultraligero" },
      { text: "Nomex® Nano 6.0 oz" },
      { text: "2.8 kg",          chip: "smoke" as const },
      { text: "≥ 35 cal/cm²",    chip: "fire"  as const },
      { text: "NFPA 1971",       chip: "ember" as const },
      { text: "Clima cálido, operaciones largas" },
    ],
  },
  // ... 4 filas más (6 configuraciones total)
];

/* ── Relacionados / Cross-linking ───────────────────────────────── */
const relacionadoCards = [
  {
    title: "Traje Forestal NFPA 1977",
    icon: "shield",
    image: "/images/directorio/pick-up-bomberos-forestal-01.avif",
    href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
    buttonText: "Ver Traje Forestal",
    items: [
      { label: "Tejido Nomex® ultraligero menor a 400 g/m²", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
      { label: "Alta transpirabilidad para campo",           href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
      { label: "Certificado NFPA 1977 edición vigente",      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" },
    ],
  },
  {
    title: "Traje HAZMAT Nivel A y B",
    icon: "shield",
    image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
    href: "/productos/trajes-para-bomberos/traje-hazmat",
    buttonText: "Ver Traje HAZMAT",
    items: [
      { label: "Encapsulamiento total Nivel A NFPA 1991", href: "/productos/trajes-para-bomberos/traje-hazmat" },
      { label: "Splash-proof Nivel B NFPA 1992",          href: "/productos/trajes-para-bomberos/traje-hazmat" },
      { label: "Resistente a 200+ productos químicos",    href: "/productos/trajes-para-bomberos/traje-hazmat" },
    ],
  },
  {
    title: "Cascos para Bombero",
    icon: "helmet",
    image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
    href: "/productos/cascos-para-bomberos",
    buttonText: "Cascos NFPA 1971",
    items: [
      { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos" },
      { label: "Casco Forestal NFPA 1977",    href: "/productos/cascos-para-bomberos" },
      { label: "Casco de Rescate NFPA 1951",  href: "/productos/cascos-para-bomberos" },
    ],
  },
  {
    title: "Guantes para Bombero",
    icon: "glove",
    image: "/images/directorio/guantes-bombero-resistentes-01.avif",
    href: "/productos/guantes-para-bomberos",
    buttonText: "Guantes NFPA",
    items: [
      { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales" },
      { label: "Guantes de Rescate NFPA 1951",    href: "/productos/guantes-para-bomberos" },
      { label: "Guantes HAZMAT NFPA 1991",        href: "/productos/guantes-para-bomberos" },
    ],
  },
];

/* ── FAQ (opcional) ─────────────────────────────────────────────── */
const faqs = [
  {
    q: "¿Qué norma certifica el traje estructural?",
    a: "El <strong>traje estructural para bomberos</strong> se certifica bajo la norma <strong>NFPA 1971</strong>...",
  },
  {
    q: "¿Qué significa TPP ≥ 35 cal/cm²?",
    a: "El TPP (Thermal Protective Performance) mide...",
  },
  // ... 4 FAQs más (6 total)
];
---

<CategoriaLayout
  title="Traje Estructural NFPA 1971 — Sistema 3 Capas, Ultraligero, Alta Visibilidad | BOMBERO.MX"
  description="Traje estructural NFPA 1971 con sistema de 3 capas certificado..."
  keywords={[
    "traje estructural NFPA 1971",
    "traje bombero 3 capas",
    "traje Nomex Gore-Tex",
    // ...
  ]}
  canonical="https://bombero.mx/productos/trajes-para-bomberos/traje-estructural-nfpa-1971"

  {breadcrumb}

  heroBadge="6 Configuraciones · NFPA 1971"
  heroTitle="Traje Estructural"
  heroTitleHighlight="NFPA 1971"
  heroSubtitle="El estándar de oro para combate de incendios estructurales..."
  {heroSeoBlocks}

  ctaBarQuote="Cotizar Traje Estructural NFPA 1971"

  productosLabel="Catálogo de Configuraciones"
  productosTitle="6 Configuraciones Disponibles"
  productosDesc="Desde el sistema estándar hasta configuraciones especializadas..."
  productosContent={`
    <p>Cada <strong>traje estructural NFPA 1971</strong> en este catálogo cumple...</p>
    <p>Todos los modelos incluyen fichas técnicas completas...</p>
  `}
  {productoCards}
  productosAltSuffix="Traje estructural NFPA 1971 certificado bomberos México"

  specsTitle="Sistema de 3 Capas con Certificación NFPA 1971"
  specsDesc="Tecnología de capas múltiples que equilibra protección y ergonomía..."
  specsContent={`
    <p>Los <strong>trajes estructurales NFPA 1971</strong> combinan...</p>
    <p>Todos nuestros modelos incluyen certificados de laboratorio...</p>
  `}
  {specsCards}

  comparativaTitle="Comparativo de Configuraciones"
  comparativaDesc="Elige la configuración correcta según el clima y tipo de operación..."
  comparativaContent={`
    <p>La elección del <strong>traje estructural</strong> depende...</p>
    <p>En <strong>BOMBERO.MX</strong> asesoramos sin costo...</p>
  `}
  {tablaHeaders}
  {tablaRows}

  relacionadosTitle="Otros Trajes y EPP Complementario"
  relacionadosDesc="Completa tu EPP con trajes especializados y accesorios certificados..."
  relacionadosContent={`
    <p>Un <strong>sistema de EPP completo</strong> requiere...</p>
    <p>En <strong>BOMBERO.MX</strong> equipamos a tu personal...</p>
  `}
  {relacionadoCards}

  {faqs}
/>
```

### Puntos Clave — Nivel 2

1. **Data-Only**: Solo TypeScript frontmatter, cero HTML/CSS
2. **6 variantes de producto**: Array `productoCards` con slugs absolutos al Nivel 3
3. **Tabla comparativa**: 6 filas comparando las configuraciones
4. **Cross-linking**: 2 trajes relacionados + 2 EPP (cascos, guantes)
5. **FAQs con Schema.org**: 6 preguntas típicas
6. **Props HTML strings**: `productosContent`, `specsContent`, etc. con `set:html` en el layout

---

## 🎯 NIVEL 3: Productos Individuales

**URL ejemplo**: `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas`
**Archivo**: `src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro`
**Layout usado**: `ProductoLayout.astro` (reutilizable)

### Objetivo

Página de producto individual con especificaciones técnicas completas, galería de 6 imágenes, tabla de specs, aplicaciones, certificaciones, sidebar con specs rápidas y FAQs.

### Estructura (Data-Only)

```astro
---
/**
 * ─── BOMBERO.MX ───
 * Producto: Traje Estructural NFPA 1971 — Sistema 3 Capas
 * URL: /productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas
 * SEO Target: "traje estructural NFPA 1971 sistema 3 capas", "traje Nomex Gore-Tex bombero"
 */
import ProductoLayout from "@layouts/ProductoLayout.astro";

const IMAGE = "/images/directorio/traje-bombero-estructural-nfpa-01.avif";

/* ── Sistema de capas ───────────────────────────────────────────── */
const capas = [
  {
    num: "01",
    titulo: "Capa Exterior — Nomex® IIIA",
    descripcion: "Primera barrera de defensa...",
    specs: [
      { label: "Material", valor: "Nomex® IIIA / Nomex® Nano" },
      { label: "Peso tela", valor: "6.0 – 7.5 oz/yd²" },
      { label: "Norma llama", valor: "ASTM D6413 — Clase 1" },
      { label: "Resistencia inherente", valor: "Sí — no se lava" },
    ],
    color: "ember" as const,
  },
  {
    num: "02",
    titulo: "Barrera de Humedad — Gore-Tex® PTFE",
    descripcion: "Segunda capa: membrana de politetrafluoroetileno...",
    specs: [
      { label: "Membrana", valor: "Gore-Tex® ePTFE expandido" },
      { label: "Impermeabilidad", valor: "NFPA 1971 Method 6 ✓" },
      { label: "Transpirabilidad", valor: "MVTR > 1,500 g/m²/24 h" },
      { label: "Líquidos peligrosos", valor: "Clase F3 certificada" },
    ],
    color: "smoke" as const,
  },
  {
    num: "03",
    titulo: "Acolchado Térmico — Caldura® / PBI® Gold",
    descripcion: "Tercera capa: liner térmico...",
    specs: [
      { label: "Liner", valor: "Caldura® E89 o PBI® Gold Comfort" },
      { label: "TPP mínimo", valor: "≥ 35 cal/cm² certificado" },
      { label: "THL", valor: "> 205 W/m²" },
      { label: "Peso liner", valor: "< 400 g total" },
    ],
    color: "fire" as const,
  },
];

/* ── Especificaciones técnicas (tabla) ──────────────────────────── */
const especificaciones = [
  { categoria: "Construcción", label: "Número de capas", valor: "3 (exterior + barrera + liner)" },
  { categoria: "Construcción", label: "Capa exterior", valor: "Nomex® IIIA o Nomex® Nano" },
  { categoria: "Construcción", label: "Barrera de humedad", valor: "Gore-Tex® PTFE expandido" },
  { categoria: "Construcción", label: "Liner térmico", valor: "Caldura® E89 / PBI® Gold Comfort" },
  { categoria: "Protección",   label: "TPP mínimo", valor: "≥ 35 cal/cm²" },
  { categoria: "Protección",   label: "THL mínimo", valor: "> 205 W/m²" },
  { categoria: "Visibilidad",  label: "Bandas retroreflectivas", valor: "Scotchlite™ 3M 5 cm — esquema 360°" },
  { categoria: "Certificación", label: "Norma principal", valor: "NFPA 1971 edición vigente" },
  // ... más especificaciones
];

const catClass: Record<string, string> = {
  "Construcción": "construccion",
  "Protección": "proteccion",
  "Visibilidad": "visibilidad",
  "Certificación": "certificacion",
};

/* ── Aplicaciones ───────────────────────────────────────────────── */
const aplicaciones = [
  {
    titulo: "Incendio Estructural",
    desc: "Combate activo en edificios residenciales, comerciales e industriales...",
  },
  {
    titulo: "Rescate Urbano",
    desc: "Búsqueda y rescate en estructuras colapsadas o incendiadas...",
  },
  {
    titulo: "Colapso de Estructuras",
    desc: "Escenarios de derrumbe con riesgo de llama, gas e inflamables...",
  },
  {
    titulo: "Operaciones de Alto Riesgo",
    desc: "Accidentes con combustible y explosiones menores...",
  },
];

/* ── Certificaciones (5 + 1 CTA) ────────────────────────────────── */
const certItems = [
  { code: "NFPA 1971", desc: "Edición vigente" },
  { code: "ASTM D6413", desc: "Resistencia a la llama" },
  { code: "NFPA Method 6", desc: "Impermeabilidad" },
  { code: "SOLAS Clase 2", desc: "Retroreflectividad" },
  { code: "ISO/IEC 17025", desc: "Laboratorio acreditado" },
];

/* ── Sidebar ────────────────────────────────────────────────────── */
const specsRapidas = [
  { label: "Capas", valor: "3 (exterior + barrera + liner)" },
  { label: "TPP", valor: "≥ 35 cal/cm²" },
  { label: "Norma", valor: "NFPA 1971" },
  { label: "Peso", valor: "3.5 kg aprox." },
  { label: "Tallas", valor: "S a 4XL" },
];

const otrosModelos = [
  { label: "Tejido Ultraligero", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/tejido-ultraligero" },
  { label: "Alta Visibilidad", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" },
  { label: "PBI Gold Premium", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/pbi-gold" },
];

const epp = [
  { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "NFPA" },
  { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "NFPA" },
  { label: "Botas de Cuero", href: "/productos/botas-para-bomberos", tag: "NFPA" },
  { label: "SCBA 30/45/60 min", href: "/productos/scba", tag: "AIRE" },
];

const articulos = [
  { label: "Catálogo Trajes Estructurales 2026", href: "/recursos/catalogo-trajes", tag: "PDF" },
  { label: "Guía de Mantenimiento NFPA", href: "/recursos/mantenimiento", tag: "GUÍA" },
];

const directorioLinks = [
  { label: "Bomberos CDMX", href: "/directorio/ciudad-de-mexico" },
  { label: "Bomberos Guadalajara", href: "/directorio/jalisco" },
  { label: "Bomberos Monterrey", href: "/directorio/nuevo-leon" },
];

/* ── FAQ ────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "¿Cuánto dura un traje estructural NFPA 1971?",
    a: "La vida útil depende de la frecuencia de uso y el mantenimiento...",
  },
  {
    q: "¿El traje incluye el casco y las botas?",
    a: "No. El traje estructural se vende por separado...",
  },
  // ... 4 FAQs más
];

/* ── Relacionados ───────────────────────────────────────────────── */
const relacionados = [
  {
    title: "Casco Estructural NFPA 1971",
    badge: "NFPA 1971",
    description: "Protección craneal certificada compatible con todos los trajes estructurales.",
    href: "/productos/cascos-para-bomberos/estructural",
    buttonText: "Ver Casco Estructural",
    image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
  },
  {
    title: "Guantes Estructurales NFPA 1971",
    badge: "NFPA 1971",
    description: "Resistencia térmica y destreza para operaciones en incendios estructurales.",
    href: "/productos/guantes-para-bomberos/estructurales",
    buttonText: "Ver Guantes",
    image: "/images/directorio/guantes-bombero-resistentes-01.avif",
  },
  {
    title: "Botas Estructurales de Cuero",
    badge: "NFPA 1971",
    description: "Protección completa para pies y tobillos con suela antiderrapante.",
    href: "/productos/botas-para-bomberos/estructural",
    buttonText: "Ver Botas",
    image: "/images/directorio/botas-bombero-proteccion-01.avif",
  },
  {
    title: "SCBA Autónomo 45 min",
    badge: "NFPA 1981",
    description: "Equipo de respiración autónomo certificado para atmósferas IDLH.",
    href: "/productos/scba/45-minutos",
    buttonText: "Ver SCBA",
    image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
  },
];
---

<ProductoLayout
  title="Traje Estructural NFPA 1971 Sistema 3 Capas | Nomex® Gore-Tex® | BOMBERO.MX"
  description="Traje estructural NFPA 1971 con sistema de 3 capas certificado..."
  keywords={[
    "traje estructural NFPA 1971 sistema 3 capas",
    "traje bombero Nomex Gore-Tex",
    // ...
  ]}
  canonical="https://bombero.mx/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas"
  image={IMAGE}

  breadcrumb={[
    { label: "Productos", href: "/productos" },
    { label: "Trajes de Bombero", href: "/productos/trajes-para-bomberos" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Sistema 3 Capas" },
  ]}

  heroBadge="NFPA 1971 · MÁS VENDIDO"
  heroTitle="Traje Estructural Sistema 3 Capas"
  heroTitleHighlight="Nomex® Gore-Tex® Caldura®"
  heroSubtitle="El estándar de protección para combate de incendios estructurales..."
  heroSeoBlocks={[
    {
      title: "El Sistema de 3 Capas Más Vendido en México",
      text: `El <strong>traje estructural NFPA 1971 sistema 3 capas</strong>...`,
    },
    {
      title: "Certificado NFPA 1971 con TPP ≥ 35 cal/cm²",
      text: `Cada <strong>traje de bombero</strong> incluye certificados...`,
    },
  ]}

  ctaBarQuote="Cotizar Traje Sistema 3 Capas"

  productoCategoria="Traje Estructural NFPA 1971"
  productoBadges={[
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP ≥ 35" },
    { modifier: "solas", text: "SOLAS Clase 2" },
  ]}
  productoMasVendido={true}
  productoTitle="Traje Estructural Sistema 3 Capas"
  productoTitleSub="Nomex® IIIA + Gore-Tex® + Caldura®"
  productoDesc="El estándar de oro para combate de incendios estructurales..."
  productoFeatures={[
    "Sistema de 3 capas certificado NFPA 1971",
    "TPP ≥ 35 cal/cm² — protección térmica superior",
    "Capa exterior Nomex® IIIA 7.0 oz/yd²",
    "Barrera Gore-Tex® impermeable y transpirable",
    "Liner térmico Caldura® / PBI® Gold",
    "Bandas SOLAS clase 2 retroreflectivas 360°",
    "Peso total: 3.5 kg — movilidad óptima",
    "Tallas: S · M · L · XL · 2XL · 3XL · 4XL",
  ]}
  productoAppTags={[
    "Incendio Estructural",
    "Rescate Urbano",
    "Colapso de Estructuras",
    "Alto Riesgo",
  ]}

  gallery={[
    { src: IMAGE, alt: "Traje estructural NFPA 1971 sistema 3 capas vista frontal" },
    { src: IMAGE, alt: "Traje estructural NFPA 1971 sistema 3 capas vista lateral" },
    { src: IMAGE, alt: "Traje estructural NFPA 1971 sistema 3 capas vista posterior" },
    { src: IMAGE, alt: "Traje estructural NFPA 1971 detalles cierres" },
    { src: IMAGE, alt: "Traje estructural NFPA 1971 bandas retroreflectivas" },
    { src: IMAGE, alt: "Traje estructural NFPA 1971 certificaciones" },
  ]}

  capasTitle="Anatomía del Sistema de 3 Capas"
  capasDesc="Cada capa cumple una función específica..."
  {capas}

  {especificaciones}
  {catClass}

  aplicacionesTitle="4 Escenarios Principales de Uso"
  aplicacionesContent={`
    <p>El <strong>traje estructural sistema 3 capas</strong> está diseñado...</p>
    <p>Cada escenario exige un equilibrio entre protección térmica...</p>
  `}
  {aplicaciones}

  certsTitle="Certificaciones y Normas Internacionales"
  certsDesc={`
    Este <strong>traje estructural NFPA 1971</strong> cumple todas las normativas...
    Incluye <strong>certificado de laboratorio</strong> acreditado ISO/IEC 17025.
  `}
  {certItems}

  {specsRapidas}
  {otrosModelos}
  otrosModelosSeeAllHref="/productos/trajes-para-bomberos/traje-estructural-nfpa-1971"
  {epp}
  {articulos}
  {directorioLinks}

  faqTitle="Todo lo que Necesitas Saber"
  faqDescription="Respuestas a las preguntas más frecuentes sobre el traje estructural sistema 3 capas"
  {faqs}

  {relacionados}
/>
```

### Puntos Clave — Nivel 3

1. **Data-Only**: 100% TypeScript, cero HTML/CSS
2. **Sistema de capas**: Array de 3 capas con specs individuales
3. **Tabla de especificaciones**: Agrupadas por categoría con badges de colores
4. **Galería de 6 imágenes**: Alt text descriptivo para cada una
5. **Sidebar sticky**: Specs rápidas, otros modelos, EPP, artículos, directorio
6. **4 productos relacionados**: EPP complementario (casco, guantes, botas, SCBA)
7. **FAQs**: 6 preguntas típicas del producto

---

## ⚡ Flujo de Trabajo Completo

### Paso 1: Planificación

1. **Definir la categoría principal**: Ejemplo: "Trajes de Bombero"
2. **Identificar subcategorías**: 5 tipos (Estructural, Forestal, ARFF, Aproximación, HAZMAT)
3. **Definir variantes por subcategoría**: 6 configuraciones típicamente
4. **Mapear keywords**: SEO primario, secundario, long-tail

### Paso 2: Crear Nivel 1 — Página Principal

1. Crear `/productos/trajes-para-bomberos/index.astro`
2. Usar `PageLayout` con HTML/CSS custom
3. Definir array `productos` con las 5 subcategorías
4. Crear hero con 2 bloques SEO H2
5. Grid de 5 `ProductCard`
6. Tabla comparativa de 5 filas
7. Sección de EPP complementario (4 cards)

### Paso 3: Crear Nivel 2 — Subcategorías (×5)

Para cada subcategoría:

1. Crear carpeta `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/`
2. Crear `index.astro` dentro
3. Usar `CategoriaLayout.astro`
4. Definir 6 `productoCards` (variantes) con slugs absolutos
5. Crear `specsCards` (3 cards dark section)
6. Tabla comparativa (`tablaRows`) con 6 filas
7. **Cross-linking**: `relacionadoCards` con:
   - 2 otras subcategorías de trajes
   - 2 categorías de EPP (cascos, guantes)
8. 6 FAQs

Repetir para las 5 subcategorías.

### Paso 4: Crear Nivel 3 — Productos (×6 por subcategoría = 30 productos)

Para cada producto:

1. Crear carpeta `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/`
2. Crear `index.astro` dentro
3. Usar `ProductoLayout.astro`
4. Definir:
   - `capas` (3 capas con specs)
   - `especificaciones` (tabla completa 15-20 filas)
   - `aplicaciones` (4 escenarios)
   - `certItems` (5 certificaciones)
   - `gallery` (6 imágenes)
   - `specsRapidas`, `otrosModelos`, `epp`, `articulos`, `directorioLinks`
   - `faqs` (6 preguntas)
   - `relacionados` (4 productos EPP)

Repetir para cada variante de cada subcategoría.

### Paso 5: Optimización de Cross-linking

1. **Nivel 1 → Nivel 2**: Links directos a cada subcategoría
2. **Nivel 2 → Nivel 3**: Links a las 6 variantes de producto
3. **Nivel 2 → Nivel 2**: Cross-linking entre subcategorías (relacionadoCards)
4. **Nivel 3 → Nivel 3**: Links a "otros modelos" de la misma subcategoría (sidebar)
5. **Nivel 3 → EPP**: 4 productos complementarios (relacionados)

### Paso 6: Verificación y Build

```bash
npm run build
```

Verificar:
- 648 páginas compiladas sin errores
- Todas las URLs responden correctamente
- Schema.org válido en todas las páginas
- Cross-linking funcional
- Imágenes optimizadas cargando

---

## ✅ Checklist de Calidad

### Nivel 1 — Página Principal

- [ ] Hero con 2 bloques SEO H2
- [ ] 5 tarjetas `ProductCard` con slugs correctos
- [ ] Tabla comparativa con 5 filas + chips de certificación
- [ ] Sección dark de tecnología (3 cards)
- [ ] EPP complementario (4 cards con links)
- [ ] FAQ global
- [ ] WhyChooseUs
- [ ] CTABanner

### Nivel 2 — Subcategorías

- [ ] Usa `CategoriaLayout.astro` (data-only)
- [ ] 6 variantes de producto con slugs absolutos Nivel 3
- [ ] 2 bloques SEO H2 en hero
- [ ] Tabla comparativa con 6 filas
- [ ] 3 cards de tecnología (dark)
- [ ] Cross-linking: 2 subcategorías + 2 EPP
- [ ] 6 FAQs con Schema.org
- [ ] Keywords específicas de la subcategoría

### Nivel 3 — Productos

- [ ] Usa `ProductoLayout.astro` (data-only)
- [ ] 3 capas con specs individuales
- [ ] Tabla de especificaciones completa (15+ filas)
- [ ] Galería de 6 imágenes con alt descriptivo
- [ ] 4 aplicaciones/escenarios
- [ ] 5 certificaciones + 1 CTA
- [ ] Sidebar: specs rápidas, otros modelos, EPP, artículos, directorio
- [ ] 6 FAQs del producto
- [ ] 4 productos relacionados (EPP)
- [ ] Breadcrumb completo (4 niveles)

### SEO y Schema.org

- [ ] Title optimizado (< 60 caracteres)
- [ ] Meta description (< 155 caracteres)
- [ ] Keywords específicas por nivel
- [ ] Canonical URL absoluta
- [ ] Schema.org `BreadcrumbList`
- [ ] Schema.org `ItemList` (Nivel 2 y 3)
- [ ] Schema.org `FAQPage` (si hay FAQs)
- [ ] Imágenes optimizadas (AVIF)
- [ ] Alt text descriptivo en todas las imágenes

### Cross-linking

- [ ] Nivel 1 → Nivel 2 (links directos)
- [ ] Nivel 2 → Nivel 3 (6 variantes)
- [ ] Nivel 2 ↔ Nivel 2 (entre subcategorías)
- [ ] Nivel 3 → Nivel 3 ("otros modelos")
- [ ] Nivel 3 → EPP (4 complementarios)
- [ ] No hay links rotos

---

## 📚 Ejemplos de Referencia

### Estructura Actual Completa

**Nivel 1**: `/productos/trajes-para-bomberos`

**Nivel 2** (5 subcategorías):
1. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971`
2. `/productos/trajes-para-bomberos/traje-forestal-nfpa-1977`
3. `/productos/trajes-para-bomberos/traje-arff-aeroportuario`
4. `/productos/trajes-para-bomberos/traje-aproximacion`
5. `/productos/trajes-para-bomberos/traje-hazmat`

**Nivel 3** (ejemplo Estructural, 6 variantes):
1. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas`
2. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/tejido-ultraligero`
3. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad`
4. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/pbi-gold-premium`
5. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/resistencia-inherente`
6. `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/transpirabilidad-maxima`

**Total de páginas** para esta categoría:
- 1 página principal (Nivel 1)
- 5 subcategorías (Nivel 2)
- 30 productos (5 × 6 variantes) (Nivel 3)
- **Total: 36 páginas**

### Archivos Clave de Referencia

1. **Nivel 1**: `src/pages/productos/trajes-para-bomberos/index.astro`
2. **Nivel 2**: `src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/index.astro`
3. **Nivel 3**: `src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro`
4. **Layout Nivel 2**: `src/layouts/CategoriaLayout.astro`
5. **Layout Nivel 3**: `src/layouts/ProductoLayout.astro`

---

## 🎯 Resumen Ejecutivo

### Para crear una categoría completa:

1. **Definir jerarquía**: Categoría → Subcategorías (5) → Productos (6 por sub = 30)
2. **Nivel 1**: Usar `PageLayout` con HTML custom, grid de subcategorías, tabla comparativa
3. **Nivel 2**: Usar `CategoriaLayout` data-only, 6 variantes, cross-linking a otras subs + EPP
4. **Nivel 3**: Usar `ProductoLayout` data-only, specs completas, galería, sidebar, FAQs
5. **Cross-linking optimizado**: Cada nivel enlaza al siguiente y entre niveles paralelos
6. **SEO**: Title/description/keywords específicos, Schema.org en todos los niveles
7. **Build**: `npm run build` debe compilar ~36 páginas sin errores por categoría

### Tiempo estimado:

- Nivel 1: 2-3 horas (investigación + copy + HTML custom)
- Nivel 2 (×5): 1 hora cada = 5 horas (data-only rápido con layout)
- Nivel 3 (×30): 30 min cada = 15 horas (data-only con layout)
- **Total: ~23 horas** por categoría completa

### Resultado final:

Una categoría profesional de **36 páginas** con:
- SEO optimizado en 3 niveles
- Schema.org completo
- Cross-linking estratégico
- Diseño responsive
- 0 duplicación de código (layouts reutilizables)
- Build rápido y mantenible

---

**Versión**: 1.0
**Fecha**: Febrero 2026
**Autor**: Equipo BOMBERO.MX
**Última actualización**: 2026-02-19
