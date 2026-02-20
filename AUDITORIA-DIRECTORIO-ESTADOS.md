# Auditoría Profesional: Directorio de Estaciones de Bomberos por Estado

**Proyecto:** BOMBERO.MX - Directorio Nacional
**Fecha:** 2026-02-19
**Framework:** Astro 5.x + TypeScript
**Auditor:** Claude Code (Opus 4.5)

---

## Resumen Ejecutivo

| Métrica | Valor | Estado |
|---------|-------|--------|
| Páginas de estado totales | 32 | ✅ Completas |
| Usando `DirectorioEstadoLayout` | 32 | ✅ Homologadas |
| Archivos de datos | 32 | ✅ Existentes |
| Funciones auxiliares completas | 25/32 | ⚠️ 7 faltantes |
| Errores TypeScript | 714 | ❌ Crítico |
| Interlinking implementado | 51 archivos | ✅ Funcional |

---

## 1. Estado de Páginas `.astro`

### ✅ Páginas Correctamente Homologadas (32/32)

Todas las páginas de estado utilizan el layout unificado `DirectorioEstadoLayout.astro`:

```
src/pages/directorio/
├── aguascalientes.astro      ├── nayarit.astro
├── baja-california.astro     ├── nuevo-leon.astro
├── baja-california-sur.astro ├── oaxaca.astro
├── campeche.astro            ├── puebla.astro
├── chiapas.astro             ├── queretaro.astro
├── chihuahua.astro           ├── quintana-roo.astro
├── ciudad-de-mexico.astro    ├── san-luis-potosi.astro
├── coahuila.astro            ├── sinaloa.astro
├── colima.astro              ├── sonora.astro
├── durango.astro             ├── tabasco.astro
├── estado-de-mexico.astro    ├── tamaulipas.astro
├── guanajuato.astro          ├── tlaxcala.astro
├── guerrero.astro            ├── veracruz.astro
├── hidalgo.astro             ├── yucatan.astro
├── jalisco.astro             ├── zacatecas.astro
├── michoacan.astro           └── morelos.astro
```

### Props Requeridos por `DirectorioEstadoLayout`

```typescript
interface Props {
  // SEO
  estado: string;               // "Baja California"
  sigla: string;                // "BC"
  slug: string;                 // "baja-california"
  description: string;
  keywords?: string[];
  canonical: string;
  jsonLd?: Record<string, unknown>[];

  // Hero Stats
  totalEstaciones: number;
  totalMunicipios: number;
  habitantes: string;           // "3.8M+"

  // Hero Content
  heroDesc: string;             // HTML
  heroImage: string;
  heroImageAlt: string;
  heroCaption: string;
  heroThumbs: [HeroThumb, HeroThumb, HeroThumb];  // exactamente 3

  // Gallery
  galleryImages: [GalleryImage, GalleryImage, GalleryImage, GalleryImage]; // exactamente 4

  // Emergency Numbers
  emergencyNumbers: EmergencyNumber[];

  // Stations
  estaciones: EstacionData[];
  stationImages: string[];

  // Sidebar
  municipios: string[];
  regiones: Region[];
  estadosVecinos: EstadoVecino[];

  // EPP Cards
  eppCards: [EppCard, EppCard, EppCard, EppCard];  // exactamente 4

  // CTA Banner
  ctaTitle: string;
  ctaDesc: string;
  ctaBtnText: string;
  ctaBtnHref?: string;          // default: "/cotizar"
}
```

---

## 2. Archivos de Datos TypeScript

### ✅ Archivos con Funciones Auxiliares Completas (25)

Los siguientes archivos tienen las 3 funciones requeridas:

| Función | Propósito | Archivos |
|---------|-----------|----------|
| `getMunicipios()` | Lista única de municipios | 24 |
| `getEstacionBySlug(slug)` | Buscar estación por slug | 25 |
| `getEstacionesCercanas(slug, limit)` | Estaciones cercanas | 25 |

**Archivos completos:**
- aguascalientes, baja-california, baja-california-sur, campeche
- cdmx, chiapas, edomex, jalisco, michoacan, morelos
- nayarit, nuevo-leon, oaxaca, puebla, queretaro
- quintana-roo, san-luis-potosi, sinaloa, sonora
- tabasco, tamaulipas, tlaxcala, veracruz, yucatan, zacatecas

### ❌ Archivos FALTANTES de Funciones Auxiliares (7)

| Archivo | getMunicipios | getEstacionBySlug | getEstacionesCercanas |
|---------|---------------|-------------------|----------------------|
| `estaciones-chihuahua.ts` | ❌ | ❌ | ❌ |
| `estaciones-coahuila.ts` | ❌ | ❌ | ❌ |
| `estaciones-colima.ts` | ❌ | ❌ | ❌ |
| `estaciones-durango.ts` | ❌ | ❌ | ❌ |
| `estaciones-guanajuato.ts` | ❌ | ❌ | ❌ |
| `estaciones-guerrero.ts` | ❌ | ❌ | ❌ |
| `estaciones-hidalgo.ts` | ❌ | ❌ | ❌ |

**Acción Requerida:** Agregar las 3 funciones auxiliares a cada archivo.

---

## 3. Errores de TypeScript (714 errores)

### 3.1 Error Tipo A: `string | undefined` no asignable a `string`

**Archivos afectados:** 12+
**Causa:** La propiedad `municipio` es opcional en la interfaz `Estacion`.

```typescript
// ❌ Error actual
export function getMunicipios(): string[] {
  return [...new Set(estaciones.map(e => e.municipio))].sort();
}

// ✅ Solución
export function getMunicipios(): string[] {
  return [...new Set(
    estaciones
      .map(e => e.municipio)
      .filter((m): m is string => m !== undefined)
  )].sort();
}
```

**Archivos a corregir:**
- `estaciones-aguascalientes.ts:585`
- `estaciones-baja-california.ts:1025`
- `estaciones-baja-california-sur.ts:402`
- `estaciones-campeche.ts:624`
- `estaciones-cdmx.ts:613`
- `estaciones-chiapas.ts:1541`
- `estaciones-edomex.ts:838`

### 3.2 Error Tipo B: Arrays `readonly` no asignables a `string[]`

**Archivos afectados:** coahuila, colima, durango, guanajuato, guerrero, hidalgo
**Causa:** Uso de `as const` en arrays de keywords.

```typescript
// ❌ Error actual
const keywords = [
  "bomberos coahuila",
  "emergencias saltillo"
] as const;

// ✅ Solución
const keywords: string[] = [
  "bomberos coahuila",
  "emergencias saltillo"
];
```

### 3.3 Error Tipo C: Propiedades posiblemente `undefined`

**Archivos afectados:** chiapas, chihuahua, coahuila, colima, durango
**Causa:** Acceso a propiedades opcionales sin verificación.

```typescript
// ❌ Error actual
total_unidades: estaciones.reduce((sum, e) => sum + e.unidades, 0),

// ✅ Solución
total_unidades: estaciones.reduce((sum, e) => sum + (e.unidades ?? 0), 0),
```

### 3.4 Error Tipo D: Propiedad inexistente

**Archivo:** `estaciones-hidalgo.ts:1943`

```typescript
// ❌ Error
e.tiempoRespuestaMinutos  // No existe

// ✅ Corrección
e.tiempoRespuesta         // Propiedad correcta
```

---

## 4. Análisis de Interlinking SEO

### 4.1 Estado Actual

El interlinking entre estados está implementado mediante el array `estadosVecinos`:

```typescript
const estadosVecinos = [
  { nombre: "Aguascalientes", slug: "aguascalientes" },
  { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
  // ...
];
```

**Implementación detectada en:**
- 32 páginas de estado (`{estado}.astro`)
- 19 páginas de estación individual (`{estado}/[slug].astro`)

### 4.2 Verificación de Reciprocidad

Para SEO óptimo, los enlaces deben ser **bidireccionales**:

| Estado A | → Estado B | ← Reciprocidad |
|----------|------------|----------------|
| Zacatecas | Aguascalientes | ✅ Verificar |
| Zacatecas | San Luis Potosí | ✅ Verificar |
| Zacatecas | Jalisco | ✅ Verificar |
| Zacatecas | Durango | ✅ Verificar |
| Zacatecas | Coahuila | ✅ Verificar |
| Zacatecas | Nayarit | ✅ Verificar |

### 4.3 Mejoras de Interlinking Recomendadas

#### A. Centralizar Estados Vecinos

Crear archivo único para gestión centralizada:

```typescript
// src/data/estados-vecinos.ts
export const estadosVecinos: Record<string, EstadoVecino[]> = {
  "aguascalientes": [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
  ],
  "baja-california": [
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Sonora", slug: "sonora" },
  ],
  // ... todos los 32 estados
};

export function getEstadosVecinos(slug: string): EstadoVecino[] {
  return estadosVecinos[slug] ?? [];
}
```

#### B. Validar Reciprocidad Automática

```typescript
// Script de validación
export function validarReciprocidad(): string[] {
  const errores: string[] = [];

  for (const [estado, vecinos] of Object.entries(estadosVecinos)) {
    for (const vecino of vecinos) {
      const vecinosDelVecino = estadosVecinos[vecino.slug];
      const tieneReciprocidad = vecinosDelVecino?.some(v => v.slug === estado);

      if (!tieneReciprocidad) {
        errores.push(`${estado} → ${vecino.slug} (sin reciprocidad)`);
      }
    }
  }

  return errores;
}
```

#### C. Agregar Microdatos Schema.org

```typescript
// Enriquecer JSON-LD con relaciones
const geoJsonLd = {
  "@context": "https://schema.org",
  "@type": "AdministrativeArea",
  "name": estado,
  "containedInPlace": {
    "@type": "Country",
    "name": "México"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": coordenadas.lat,
    "longitude": coordenadas.lng
  }
};
```

---

## 5. Mejoras Profesionales Recomendadas

### 5.1 Prioridad Alta (Crítico)

| # | Mejora | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | Corregir 714 errores TypeScript | Build fallará | Alto |
| 2 | Agregar funciones auxiliares a 7 archivos | Runtime errors | Medio |
| 3 | Centralizar `estadosVecinos` | Mantenibilidad | Medio |

### 5.2 Prioridad Media (SEO)

| # | Mejora | Impacto SEO | Esfuerzo |
|---|--------|-------------|----------|
| 4 | Validar reciprocidad de enlaces | Link equity | Bajo |
| 5 | Agregar `<link rel="canonical">` dinámico | Duplicados | Bajo |
| 6 | Implementar breadcrumbs JSON-LD | Rich snippets | Bajo |
| 7 | Agregar sitemap dinámico con estados | Indexación | Medio |

### 5.3 Prioridad Baja (UX/Performance)

| # | Mejora | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 8 | Lazy loading en galería | Core Web Vitals | Bajo |
| 9 | Prefetch de estados vecinos | Navegación | Bajo |
| 10 | Cache de funciones getMunicipios | Performance | Bajo |

---

## 6. Plan de Acción Inmediato

### Fase 1: Corrección de Errores TypeScript

```bash
# 1. Corregir filtrado de undefined en getMunicipios
# Archivos: aguascalientes, baja-california, baja-california-sur,
#           campeche, cdmx, chiapas, edomex

# 2. Eliminar 'as const' en arrays de keywords
# Archivos: coahuila, colima, durango, guanajuato, guerrero, hidalgo

# 3. Agregar nullish coalescing para propiedades opcionales
# Archivos: chiapas, chihuahua, coahuila, colima, durango

# 4. Corregir propiedad tiempoRespuestaMinutos → tiempoRespuesta
# Archivo: hidalgo
```

### Fase 2: Completar Funciones Auxiliares

Para cada archivo faltante, agregar:

```typescript
// ═══════════════════════════════════════════════════════════
// FUNCIONES AUXILIARES
// ═══════════════════════════════════════════════════════════

/**
 * Obtiene lista única de municipios del estado
 */
export function getMunicipios(): string[] {
  return [...new Set(
    estaciones{Estado}
      .map(e => e.municipio)
      .filter((m): m is string => m !== undefined)
  )].sort();
}

/**
 * Busca una estación por su slug
 */
export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estaciones{Estado}.find(e => e.slug === slug);
}

/**
 * Obtiene estaciones cercanas basándose en coordenadas
 */
export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return estaciones{Estado}.slice(0, limit);

  return estaciones{Estado}
    .filter(e => e.slug !== slug)
    .sort((a, b) => {
      const distA = Math.abs(a.coordenadas.lat - estacion.coordenadas.lat) +
                    Math.abs(a.coordenadas.lng - estacion.coordenadas.lng);
      const distB = Math.abs(b.coordenadas.lat - estacion.coordenadas.lat) +
                    Math.abs(b.coordenadas.lng - estacion.coordenadas.lng);
      return distA - distB;
    })
    .slice(0, limit);
}
```

### Fase 3: Interlinking Profesional

1. **Crear archivo centralizado:**
   ```
   src/data/estados-vecinos.ts
   ```

2. **Actualizar todas las páginas de estado para importar de archivo central**

3. **Implementar script de validación de reciprocidad**

4. **Agregar tests automatizados:**
   ```typescript
   // tests/interlinking.test.ts
   import { validarReciprocidad } from '../src/data/estados-vecinos';

   test('Todos los enlaces tienen reciprocidad', () => {
     const errores = validarReciprocidad();
     expect(errores).toHaveLength(0);
   });
   ```

---

## 7. Conclusiones

### Fortalezas
- ✅ Arquitectura de layout unificada bien implementada
- ✅ Separación clara entre datos y presentación
- ✅ Schema.org JSON-LD presente en todas las páginas
- ✅ Interlinking entre estados funcional

### Debilidades a Corregir
- ❌ 714 errores TypeScript comprometen la estabilidad del build
- ❌ 7 archivos de datos incompletos
- ❌ Interlinking no centralizado dificulta mantenimiento
- ❌ Falta validación de reciprocidad en enlaces

### Siguiente Paso Recomendado

Ejecutar corrección de errores TypeScript en orden de prioridad:

```bash
# Verificar estado actual
npx astro check

# Después de correcciones
npx astro build

# Verificar producción
npx astro preview
```

---

*Reporte generado automáticamente por Claude Code (Opus 4.5)*
*BOMBERO.MX - Directorio Nacional de Estaciones de Bomberos*
