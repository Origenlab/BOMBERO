# BOMBERO.MX — Guía: Páginas de Detalle de Estación

> **Propósito:** Al crear o actualizar cualquier `[slug].astro` de estación individual, leer esta guía. La arquitectura usa **`DirectorioEstacionLayout.astro`** para todo el CSS y HTML — el `[slug].astro` solo tiene datos y rutas estáticas.

---

## Índice

1. [Arquitectura General](#1-arquitectura-general)
2. [Crear un nuevo [slug].astro](#2-crear-un-nuevo-slugastro)
3. [Props del Layout](#3-props-del-layout)
4. [Interfaz EstacionDetalle](#4-interfaz-estaciondetalle)
5. [Template Completo](#5-template-completo)
6. [Checklist de Implementación](#6-checklist-de-implementación)

---

## 1. Arquitectura General

```
src/
  LAYOUTS/
    DirectorioEstacionLayout.astro   ← TODO el CSS y HTML — cero duplicación
    DirectorioEstadoLayout.astro     ← Layout para páginas de estado
    BaseLayout.astro
    PageLayout.astro
  pages/
    directorio/
      baja-california/
        [slug].astro                 ← 49 líneas: solo datos + props
      jalisco/
        [slug].astro                 ← 49 líneas: solo datos + props
      {estado}/
        [slug].astro                 ← 49 líneas: solo datos + props
  data/
    estaciones-baja-california.ts    ← Fuente de datos (incluye helpers)
    estaciones-{estado}.ts
```

**Regla de oro:** El `[slug].astro` NO contiene CSS ni HTML estructural. Solo importa el layout, define `getStaticPaths()` y pasa props.

### Secciones que renderiza el layout automáticamente

```
DirectorioEstacionLayout
  ├── 1. Hero          Breadcrumb · Badges · H1 · Botones (Llamar, 911, Maps) · Tarjeta contacto
  └── 2. Main Grid
        ├── Contenido  Servicios · Especialidades · Zonas · Equipamiento · Personal · Historia · SEO
        └── Sidebar    Emergencias · Mismo municipio · Otras estaciones · Productos · CTA · Nacional · Contacto
```

---

## 2. Crear un nuevo [slug].astro

### Paso 1 — Asegurar que el data file tiene los helpers

El data file del estado (`src/data/estaciones-{estado}.ts`) debe exportar:
- `estaciones{Estado}` — array principal
- `getEstacionBySlug(slug)` — retorna la estación o undefined
- `getEstacionesCercanas(slug, limit)` — retorna estaciones cercanas (excluyendo la actual)
- `getEstacionesByMunicipio(municipio)` — retorna todas las estaciones del municipio
- `getEstadisticas()` — retorna `{ totalEstaciones, totalMunicipios }`

### Paso 2 — Crear `src/pages/directorio/{estado}/[slug].astro`

Usa el template de la sección 5. El archivo final tiene ~49 líneas.

### Paso 3 — Verificar build

```bash
npx astro build
```

---

## 3. Props del Layout

Todas las props de `DirectorioEstacionLayout.astro`:

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `estadoNombre` | `string` | ✅ | `"Baja California"` |
| `estadoSlug` | `string` | ✅ | `"baja-california"` |
| `estacion` | `EstacionDetalle` | ✅ | Objeto completo de la estación |
| `estacionesMismoMunicipio` | `EstacionRef[]` | ✅ | Estaciones del mismo municipio (sin la actual) |
| `estacionesCercanas` | `EstacionRef[]` | ✅ | Otras estaciones del estado (máx 4) |
| `estadosVecinos` | `EstadoVecino[]` | ✅ | Links al sidebar de Directorio Nacional |
| `totalEstacionesEstado` | `number` | ⬜ | Para el link "Ver las N estaciones de X" |
| `seoTitle` | `string` | ⬜ | Override del `<title>` (auto-generado si no se pasa) |
| `seoDescription` | `string` | ⬜ | Override del meta description (auto-generado si no se pasa) |
| `productosRelacionados` | `ProductoRef[]` | ⬜ | Default: 5 productos estándar |

### Tipos auxiliares

```typescript
interface EstacionRef {
  nombreCorto: string;
  slug:        string;
  colonia?:    string;
  municipio:   string;
}

interface EstadoVecino {
  nombre: string;
  slug:   string;
}

interface ProductoRef {
  nombre: string;
  href:   string;
  desc:   string;
}
```

---

## 4. Interfaz EstacionDetalle

El objeto `estacion` que se pasa al layout debe cumplir esta interfaz
(que también está exportada como `EstacionDetalle` desde el layout):

```typescript
interface EstacionDetalle {
  id:                   number;
  nombre:               string;       // "Estación Central de Bomberos Tijuana"
  nombreCorto:          string;       // "Estación Central Tijuana"
  slug:                 string;       // "estacion-central-tijuana"
  descripcion:          string;       // Párrafo descriptivo (1-2 oraciones)
  direccion:            string;       // "Av. Independencia 1234"
  colonia:              string;       // "Centro"
  codigoPostal:         string;       // "22000"
  ciudad:               string;       // "Tijuana"
  municipio:            string;       // "Tijuana"
  telefono:             string;       // "664 684 0580"
  email?:               string;       // Opcional
  horario:              string;       // "24/7" | "Lunes a Domingo 24 horas"
  tiempoRespuesta?:     string;       // "5-8 minutos" (opcional)
  personalActivo?:      number;       // 110 (opcional, muestra stat si existe)
  servicios:            string[];     // ["Incendios estructurales", ...]
  especialidades?:      string[];     // ["HAZMAT Nivel Técnico", ...] (opcional)
  zonasCobertura:       string[];     // ["Centro", "Zona Norte", ...] (tags)
  equipamiento?:        string[];     // ["Autobomba urbana", ...] (opcional)
  unidadesDisponibles?: string[];     // ["Autobomba 1", "Escalera 1", ...] (opcional)
  historia?:            string;       // Párrafo de historia (opcional)
}
```

---

## 5. Template Completo

```astro
---
/**
 * ─── Página de detalle de estación — {Estado} ───
 * Solo datos y rutas estáticas.
 * El diseño completo vive en DirectorioEstacionLayout.astro.
 */
import DirectorioEstacionLayout from "@layouts/DirectorioEstacionLayout.astro";
import {
  estaciones{Estado},
  getEstacionBySlug,
  getEstacionesCercanas,
  getEstacionesByMunicipio,
  getEstadisticas,
} from "@data/estaciones-{slug}";

export function getStaticPaths() {
  return estaciones{Estado}.map((estacion) => ({
    params: { slug: estacion.slug },
  }));
}

const { slug } = Astro.params;
const estacion  = getEstacionBySlug(slug as string);

if (!estacion) return Astro.redirect("/404");

const estadisticas             = getEstadisticas();
const estacionesCercanas       = getEstacionesCercanas(slug as string, 4);
const estacionesMismoMunicipio = getEstacionesByMunicipio(estacion.municipio)
                                   .filter((e) => e.slug !== slug);
---

<DirectorioEstacionLayout
  estadoNombre="{Estado}"
  estadoSlug="{slug-estado}"
  estacion={estacion}
  estacionesMismoMunicipio={estacionesMismoMunicipio}
  estacionesCercanas={estacionesCercanas}
  totalEstacionesEstado={estadisticas.totalEstaciones}
  estadosVecinos={[
    { nombre: "{EstadoVecino1}", slug: "{slug-vecino1}" },
    { nombre: "{EstadoVecino2}", slug: "{slug-vecino2}" },
    { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Jalisco",          slug: "jalisco"          },
  ]}
/>
```

---

## 6. Checklist de Implementación

- [ ] El data file exporta `getEstacionBySlug`, `getEstacionesCercanas`, `getEstacionesByMunicipio`, `getEstadisticas`
- [ ] Crear `src/pages/directorio/{estado}/[slug].astro` con el template
- [ ] `getStaticPaths()` mapea `estacion.slug` como `params.slug`
- [ ] El objeto `estacion` del data file cumple la interfaz `EstacionDetalle`
- [ ] Los campos obligatorios existen: `nombre`, `nombreCorto`, `slug`, `descripcion`, `direccion`, `colonia`, `codigoPostal`, `ciudad`, `municipio`, `telefono`, `horario`, `servicios[]`, `zonasCobertura[]`
- [ ] `estadosVecinos` contiene los estados limítrofes reales + 2-3 estados grandes
- [ ] Ejecutar `npx astro build` — sin errores

---

## Estado actual de layouts

```
src/LAYOUTS/
  BaseLayout.astro              ← Base HTML (head, meta, scripts)
  PageLayout.astro              ← Wrapper con Header + Footer
  DirectorioEstadoLayout.astro  ← /directorio/{estado}
  DirectorioEstacionLayout.astro ← /directorio/{estado}/{slug}
  ProductoLayout.astro          ← /productos/...
```
