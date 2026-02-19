# BOMBERO.MX — Guía: Páginas de Estado del Directorio

> **Propósito:** Al crear o actualizar cualquier página `/directorio/{estado}`, leer esta guía antes de escribir código. La arquitectura nueva usa **un único layout central** — `DirectorioEstadoLayout.astro` — que contiene todo el CSS y HTML. Las páginas de estado solo pasan datos como props.

---

## Índice

1. [Arquitectura General](#1-arquitectura-general)
2. [Crear una Nueva Página de Estado](#2-crear-una-nueva-página-de-estado)
3. [Props del Layout](#3-props-del-layout)
4. [Data File — Estructura de Estaciones](#4-data-file--estructura-de-estaciones)
5. [SEO y Schema Markup](#5-seo-y-schema-markup)
6. [Imágenes Disponibles](#6-imágenes-disponibles)
7. [Template Completo — Ejemplo](#7-template-completo--ejemplo)
8. [Checklist de Implementación](#8-checklist-de-implementación)

---

## 1. Arquitectura General

```
src/
  layouts/
    DirectorioEstadoLayout.astro   ← TODO el CSS y HTML vive aquí
  pages/
    directorio/
      aguascalientes.astro         ← Solo datos + props (~195 líneas)
      baja-california.astro        ← Solo datos + props (~195 líneas)
      {nuevo-estado}.astro         ← Solo datos + props (~195 líneas)
  data/
    estaciones-aguascalientes.ts   ← Array de estaciones + getMunicipios()
    estaciones-baja-california.ts  ← Array de estaciones + getMunicipios() + getEstadisticas()
    estaciones-{nuevo-estado}.ts   ← Array de estaciones + helpers
```

**Regla de oro:** Las páginas de estado NO contienen CSS ni HTML estructural. Solo importan el layout, preparan datos y pasan props.

### Secciones que renderiza el layout automáticamente

```
DirectorioEstadoLayout
  ├── 1. Hero              Fondo oscuro, imagen principal, thumbnails, 3 stats
  ├── 2. Emergency Banner  Banda roja — número 911 + teléfonos directos
  ├── 3. Gallery Strip     4 imágenes con etiquetas
  ├── 4. Main Grid         Lista estaciones (izq) + Sidebar (der)
  ├── 5. EPP Grid          4 tarjetas de equipo certificado NFPA
  └── 6. CTA Banner        Llamada a acción antes del footer
```

La sección Main Grid incluye un bloque SEO dinámico que se rellena con el slot `"seo"`.

---

## 2. Crear una Nueva Página de Estado

### Paso 1 — Crear el data file

Crea `src/data/estaciones-{slug}.ts` con la estructura descrita en la sección 4.

### Paso 2 — Crear la página

Crea `src/pages/directorio/{slug}.astro` siguiendo el template de la sección 7.

### Paso 3 — Verificar build

```bash
npx astro build
```

Sin errores = listo.

---

## 3. Props del Layout

Todas las props de `DirectorioEstadoLayout.astro`:

### Metadatos SEO
| Prop | Tipo | Ejemplo |
|------|------|---------|
| `estado` | `string` | `"Jalisco"` |
| `sigla` | `string` | `"JAL"` |
| `slug` | `string` | `"jalisco"` |
| `description` | `string` | Descripción meta (160 chars max) |
| `keywords` | `string[]` | `["bomberos jalisco", ...]` |
| `canonical` | `string` | `"https://bombero.mx/directorio/jalisco"` |
| `jsonLd` | `Record<string, unknown>[]` | Array de schemas JSON-LD |

### Estadísticas Hero
| Prop | Tipo | Ejemplo |
|------|------|---------|
| `totalEstaciones` | `number` | `42` |
| `totalMunicipios` | `number` | `125` |
| `habitantes` | `string` | `"8.3M+"` |

### Hero
| Prop | Tipo | Descripción |
|------|------|-------------|
| `heroDesc` | `string` | HTML — descripción principal. Usa `<strong>` |
| `heroImage` | `string` | Ruta `/images/directorio/...avif` |
| `heroImageAlt` | `string` | Alt text descriptivo |
| `heroCaption` | `string` | Leyenda bajo imagen. Ej: `"H. Cuerpo de Bomberos · Jalisco"` |
| `heroThumbs` | `HeroThumb[3]` | Exactamente 3 thumbs: `{ src, alt, label }` |

### Gallery
| Prop | Tipo | Descripción |
|------|------|-------------|
| `galleryImages` | `GalleryImage[4]` | Exactamente 4: `{ src, alt, label }` |

### Emergencias
| Prop | Tipo | Descripción |
|------|------|-------------|
| `emergencyNumbers` | `EmergencyNumber[]` | `{ number, label }[]`. El primero siempre `"911"` |

### Contenido Principal
| Prop | Tipo | Descripción |
|------|------|-------------|
| `municipios` | `string[]` | Lista de municipios (de `getMunicipios()`) |
| `regiones` | `Region[]` | `{ nombre, desc }[]` — máx 4 |
| `estadosVecinos` | `EstadoVecino[]` | `{ nombre, slug }[]` |
| `estaciones` | `EstacionData[]` | Array de estaciones (del data file) |
| `stationImages` | `string[]` | Array de rutas de imágenes para las tarjetas |

### EPP Cards
| Prop | Tipo | Descripción |
|------|------|-------------|
| `eppCards` | `EppCard[4]` | Exactamente 4 tarjetas EPP |

Estructura de `EppCard`:
```typescript
{
  image:     string;  // ruta imagen
  imageAlt:  string;
  badge:     string;  // "NFPA 1971" | "NFPA 1977"
  title:     string;
  text:      string;  // puede contener HTML con <strong>
  href:      string;  // ruta producto
  linkLabel: string;
}
```

### CTA Banner
| Prop | Tipo | Ejemplo |
|------|------|---------|
| `ctaTitle` | `string` | `"Equipamos a los Bomberos de Jalisco"` |
| `ctaDesc` | `string` | Texto descriptivo |
| `ctaBtnText` | `string` | `"Solicitar Cotización — Jalisco"` |
| `ctaBtnHref` | `string?` | Opcional, default: `"/cotizar"` |

### Slot SEO
El contenido H2 + párrafos de texto para SEO se pasa via named slot:
```astro
<DirectorioEstadoLayout ...props>
  <Fragment slot="seo">
    <h2>El H. Cuerpo de Bomberos de Jalisco</h2>
    <p>...</p>
  </Fragment>
</DirectorioEstadoLayout>
```

---

## 4. Data File — Estructura de Estaciones

```typescript
// src/data/estaciones-{slug}.ts

export interface EstacionBomberos {
  id:          number;
  nombreCorto: string;
  slug:        string;
  direccion:   string;
  colonia?:    string;
  municipio:   string;
  ciudad?:     string;
  telefono?:   string;
  servicios?:  string[];
  horario?:    string;
}

export const estaciones{Estado}: EstacionBomberos[] = [
  {
    id:          1,
    nombreCorto: "Estación Central",
    slug:        "estacion-central-guadalajara",
    direccion:   "Av. Federalismo Norte 220",
    colonia:     "Centro",
    municipio:   "Guadalajara",
    telefono:    "33 3619 0794",
    servicios:   ["Incendios estructurales", "Rescate vehicular", "HAZMAT"],
    horario:     "24/7",
  },
  // ...más estaciones
];

export function getMunicipios(): string[] {
  return [...new Set(estaciones{Estado}.map(e => e.municipio))].sort();
}

export function getEstadisticas() {
  return {
    totalEstaciones: estaciones{Estado}.length,
    totalMunicipios: getMunicipios().length,
  };
}
```

---

## 5. SEO y Schema Markup

En el frontmatter de la página construye siempre dos schemas:

### BreadcrumbList
```javascript
const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Inicio",                 url: "/" },
  { name: "Directorio de Bomberos", url: "/directorio" },
  { name: "Jalisco",                url: "/directorio/jalisco" },
]);
```

### ItemList con FireStation
```javascript
const itemListSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  "name":     "Estaciones de Bomberos en Jalisco, México",
  "description": "Directorio completo...",
  "numberOfItems": estaciones.length,
  "itemListElement": estaciones.map((e, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "FireStation",
      "name":  e.nombreCorto,
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   e.direccion,
        "addressLocality": e.municipio,
        "addressRegion":   "Jalisco",
        "addressCountry":  "MX",
      },
      "telephone": e.telefono,
      "url": `https://bombero.mx/directorio/jalisco/${e.slug}`,
    }
  }))
};
```

Ambos schemas se pasan a: `jsonLd={[breadcrumbSchema, itemListSchema]}`

---

## 6. Imágenes Disponibles

Todas en `/public/images/directorio/*.avif`. Referencia:

### Estaciones (para heroImage, stationImages)
- `estacion-bomberos-central-edificio-01.avif`
- `estacion-bomberos-equipada-01.avif`
- `estacion-bomberos-moderna-01.avif`
- `estacion-bomberos-mexico-01.avif`
- `estacion-bomberos-industrial-01.avif`
- `estacion-bomberos-norte-mexico-01.avif`
- `estacion-bomberos-guadalajara-01.avif`
- `estacion-bomberos-cdmx-01.avif`
- `estacion-bomberos-monterrey-01.avif`
- `estacion-bomberos-puebla-01.avif`
- `estacion-bomberos-queretaro-01.avif`
- `estacion-bomberos-veracruz-01.avif`
- `estacion-bomberos-oaxaca-01.avif`

### Camiones y Vehículos
- `camion-bomberos-moderno-01.avif`
- `camion-bomberos-autobomba-urbana-01.avif`
- `camion-escalera-bomberos-01.avif`
- `camion-cisterna-bomberos-01.avif`
- `camion-bomberos-torre-01.avif`
- `camion-forestal-bomberos-01.avif`
- `ambulancia-bomberos-emergencias-01.avif`
- `autobomba-bomberos-equipada-01.avif`

### Bomberos en Acción
- `bomberos-profesionales-accion-01.avif`
- `bomberos-accion-incendio-01.avif`
- `bomberos-emergencia-incendio-estructural-01.avif`
- `bomberos-trabajo-equipo-01.avif`
- `entrenamiento-bomberos-fuego-01.avif`
- `capacitacion-bomberos-profesional-01.avif`
- `simulacro-bomberos-profesional-01.avif`

### Rescate
- `rescate-urbano-bomberos-01.avif`
- `rescate-acuatico-bomberos-01.avif`
- `rescate-montana-bomberos-01.avif`
- `rescate-vehicular-bomberos-01.avif` *(equipo-bomberos-rescate-vehicular)*

### HAZMAT y EPP
- `equipo-hazmat-materiales-peligrosos-01.avif`
- `descontaminacion-hazmat-01.avif`
- `traje-hazmat-nivel-a-01.avif`
- `unidad-hazmat-emergencias-01.avif`

### EPP (para eppCards)
- `traje-bombero-estructural-nfpa-01.avif`
- `casco-bombero-proteccion-cabeza-01.avif`
- `guantes-bombero-resistentes-01.avif`
- `botas-bombero-proteccion-01.avif`
- `equipo-scba-aparato-respiratorio-01.avif`
- `mascara-scba-bombero-01.avif`
- `capucha-bombero-nomex-01.avif`

---

## 7. Template Completo — Ejemplo

```astro
---
/**
 * ─── Directorio Bomberos {Estado} ───
 * Solo datos — el diseño vive en DirectorioEstadoLayout.astro
 */
import DirectorioEstadoLayout from "@layouts/DirectorioEstadoLayout.astro";
import { estaciones{Estado}, getMunicipios, getEstadisticas } from "@data/estaciones-{slug}";
import { breadcrumbJsonLd } from "@utils/seo";

const municipios   = getMunicipios();
const estadisticas = getEstadisticas();

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Inicio",                 url: "/" },
  { name: "Directorio de Bomberos", url: "/directorio" },
  { name: "{Estado}",               url: "/directorio/{slug}" },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Estaciones de Bomberos en {Estado}, México",
  "description": "Directorio completo...",
  "numberOfItems": estaciones{Estado}.length,
  "itemListElement": estaciones{Estado}.map((e, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "item": {
      "@type": "FireStation",
      "name": e.nombreCorto,
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   e.direccion,
        "addressLocality": e.municipio,
        "addressRegion":   "{Estado}",
        "addressCountry":  "MX",
      },
      "telephone": e.telefono,
      "url": `https://bombero.mx/directorio/{slug}/${e.slug}`,
    }
  }))
};

const stationImages = [
  "/images/directorio/estacion-bomberos-central-edificio-01.avif",
  "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
  "/images/directorio/bomberos-profesionales-accion-01.avif",
  "/images/directorio/estacion-bomberos-equipada-01.avif",
  "/images/directorio/camion-bomberos-moderno-01.avif",
  "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
  "/images/directorio/estacion-bomberos-moderna-01.avif",
  "/images/directorio/bomberos-accion-incendio-01.avif",
  "/images/directorio/rescate-urbano-bomberos-01.avif",
  "/images/directorio/estacion-bomberos-norte-mexico-01.avif",
  "/images/directorio/camion-escalera-bomberos-01.avif",
  "/images/directorio/capacitacion-bomberos-profesional-01.avif",
  "/images/directorio/bomberos-trabajo-equipo-01.avif",
];
---

<DirectorioEstadoLayout
  estado="{Estado}"
  sigla="{SIG}"
  slug="{slug}"
  description="Directorio completo de las estaciones de bomberos en {Estado}. Teléfonos de emergencia y servicios. Emergencias 911."
  keywords={["bomberos {slug}", "estaciones bomberos {ciudad}", "emergencias {slug} 911"]}
  canonical="https://bombero.mx/directorio/{slug}"
  jsonLd={[breadcrumbSchema, itemListSchema]}

  totalEstaciones={estadisticas.totalEstaciones}
  totalMunicipios={estadisticas.totalMunicipios}
  habitantes="{X}M+"

  heroDesc="Directorio completo del <strong>H. Cuerpo de Bomberos de {Estado}</strong>. Encuentra teléfonos de emergencia, direcciones y servicios de todas las estaciones."
  heroImage="/images/directorio/estacion-bomberos-central-edificio-01.avif"
  heroImageAlt="Estación Central de Bomberos {Estado}"
  heroCaption="H. Cuerpo de Bomberos · {Estado}"
  heroThumbs={[
    { src: "/images/directorio/camion-bomberos-moderno-01.avif",            alt: "Flota vehicular bomberos {Estado}",     label: "Flota Vehicular"  },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT bomberos {Estado}",      label: "HAZMAT Industrial" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif",      alt: "Bomberos {Estado} en acción",          label: "Respuesta 24/7"   },
  ]}

  galleryImages={[
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif",     alt: "Entrenamiento bomberos {Estado}",  label: "Capacitación NFPA" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif",         alt: "Rescate en altura {Estado}",       label: "Rescate en Altura" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif",          alt: "Rescate urbano {Estado}",          label: "Rescate Urbano"    },
    { src: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif", alt: "Equipo SCBA bomberos {Estado}",    label: "SCBA Certificado"  },
  ]}

  emergencyNumbers={[
    { number: "911",          label: "Emergencias"          },
    { number: "XXX XXX XXXX", label: "Bomberos {Ciudad}"    },
  ]}

  municipios={municipios}

  regiones={[
    { nombre: "Zona Metropolitana", desc: "{Ciudad principal}, {Municipio2}" },
    { nombre: "Zona Norte",         desc: "{Municipio3}, {Municipio4}"       },
    { nombre: "Zona Sur",           desc: "{Municipio5}, {Municipio6}"       },
    { nombre: "Zona Oriente",       desc: "{Municipio7}, {Municipio8}"       },
  ]}

  estadosVecinos={[
    { nombre: "{EstadoVecino1}", slug: "{slug-vecino1}" },
    { nombre: "{EstadoVecino2}", slug: "{slug-vecino2}" },
  ]}

  estaciones={estaciones{Estado}}
  stationImages={stationImages}

  eppCards={[
    {
      image:     "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt:  "Traje NFPA 1977 para bomberos {Estado}",
      badge:     "NFPA 1977",
      title:     "Traje Forestal NFPA 1977",
      text:      "Descripción específica para el contexto geográfico e industrial de <strong>{Estado}</strong>.",
      href:      "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero",
    },
    {
      image:     "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt:  "Casco NFPA 1971 para bomberos {Estado}",
      badge:     "NFPA 1971",
      title:     "Casco Estructural NFPA 1971",
      text:      "Descripción específica para {Estado}.",
      href:      "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero",
    },
    {
      image:     "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt:  "Guantes NFPA 1971 para bomberos {Estado}",
      badge:     "NFPA 1971",
      title:     "Guantes Estructurales NFPA 1971",
      text:      "Descripción específica para {Estado}.",
      href:      "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero",
    },
    {
      image:     "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt:  "Botas NFPA 1971 para bomberos {Estado}",
      badge:     "NFPA 1971",
      title:     "Botas Estructurales de Cuero",
      text:      "Descripción específica para {Estado}.",
      href:      "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero",
    },
  ]}

  ctaTitle="Equipamos a los Bomberos de {Estado}"
  ctaDesc="Cotiza equipo certificado NFPA para tu estación. Stock inmediato para licitaciones en los {N} municipios del estado."
  ctaBtnText="Solicitar Cotización — {Estado}"
>
  <!-- Bloque SEO -->
  <Fragment slot="seo">
    <h2>El H. Cuerpo de Bomberos de {Estado}</h2>
    <p>
      El <strong>H. Cuerpo de Bomberos de {Estado}</strong> protege a más de
      <strong>{X} millones de habitantes</strong>...
    </p>
    <h3>¿Cómo contactar a los bomberos en {Estado}?</h3>
    <p>
      En caso de <strong>emergencia en {Estado}</strong>, marca el <strong>911</strong>...
    </p>
    <h3>Zonas de Mayor Riesgo en {Estado}</h3>
    <p>
      {Estado} presenta riesgos como: <strong>incendios forestales</strong>...
    </p>
    <h3>Servicios de los Bomberos de {Estado}</h3>
    <p>
      Los bomberos atienden: <strong>incendios estructurales</strong>...
    </p>
  </Fragment>
</DirectorioEstadoLayout>
```

---

## 8. Checklist de Implementación

- [ ] Crear `src/data/estaciones-{slug}.ts` con array + `getMunicipios()` + `getEstadisticas()`
- [ ] Crear `src/pages/directorio/{slug}.astro` siguiendo el template
- [ ] Seleccionar imágenes temáticas apropiadas para el estado (heroImage, heroThumbs, galleryImages)
- [ ] Escribir `heroDesc` con contexto geográfico/industrial único del estado
- [ ] Personalizar texto de `eppCards` con referencias al estado (industria, geografía)
- [ ] Escribir 4 bloques SEO en el slot: intro, contacto, riesgos, servicios
- [ ] Completar `emergencyNumbers` con números reales verificados
- [ ] Definir `regiones` con zonas geográficas auténticas del estado
- [ ] Definir `estadosVecinos` correctamente
- [ ] Ejecutar `npx astro build` — sin errores
