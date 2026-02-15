# Guía Completa: Directorio Nacional de Estaciones de Bomberos
## BOMBERO.MX - Sistema de Páginas de Directorio

---

## Índice

1. [Visión General del Sistema](#1-visión-general-del-sistema)
2. [Arquitectura de Archivos](#2-arquitectura-de-archivos)
3. [Estructura de Datos](#3-estructura-de-datos)
4. [Componentes](#4-componentes)
5. [Páginas de Estado](#5-páginas-de-estado)
6. [Páginas de Estación Individual](#6-páginas-de-estación-individual)
7. [Estrategia SEO](#7-estrategia-seo)
8. [Estrategia de Interlinking](#8-estrategia-de-interlinking)
9. [Checklist de Implementación](#9-checklist-de-implementación)
10. [Plantillas de Código](#10-plantillas-de-código)

---

## 1. Visión General del Sistema

### 1.1 Objetivo
Crear el **directorio más completo de estaciones de bomberos en México**, con información detallada de cada estación en los **32 estados de la República Mexicana**, optimizado para SEO y con interlinking estratégico para posicionamiento web.

### 1.2 Estructura de URLs

```
/directorio                                    → Página principal (todos los estados)
/directorio/{estado}                           → Página del estado (todas las estaciones)
/directorio/{estado}/{slug-estacion}           → Página individual de estación
```

**Ejemplos:**
```
/directorio/ciudad-de-mexico
/directorio/ciudad-de-mexico/estacion-central
/directorio/nuevo-leon
/directorio/nuevo-leon/estacion-central-monterrey
/directorio/jalisco
/directorio/jalisco/estacion-bomberos-guadalajara
```

### 1.3 Jerarquía de Páginas

```
Directorio Nacional (32 estados)
├── Ciudad de México (16 estaciones)
│   ├── Estación Central de Bomberos
│   ├── Estación de Bomberos Tacubaya
│   └── ... (14 más)
├── Nuevo León (X estaciones)
│   ├── Estación Central Monterrey
│   └── ...
├── Jalisco (X estaciones)
│   └── ...
└── ... (29 estados más)
```

---

## 2. Arquitectura de Archivos

### 2.1 Estructura de Carpetas

```
src/
├── data/
│   ├── estaciones-cdmx.ts          ✅ Completado
│   ├── estaciones-nuevo-leon.ts    📝 Por crear
│   ├── estaciones-jalisco.ts       📝 Por crear
│   ├── estaciones-puebla.ts        📝 Por crear
│   └── ... (un archivo por estado)
│
├── components/
│   ├── StationCard.astro           ✅ Completado
│   ├── StatesDirectory.astro       ✅ Completado
│   └── SectionHeader.astro         ✅ Completado
│
├── pages/
│   └── directorio/
│       ├── index.astro             ✅ Página principal
│       ├── ciudad-de-mexico.astro  ✅ Completado
│       ├── ciudad-de-mexico/
│       │   └── [slug].astro        ✅ Páginas dinámicas
│       ├── nuevo-leon.astro        📝 Por crear
│       ├── nuevo-leon/
│       │   └── [slug].astro        📝 Por crear
│       └── ... (por cada estado)
```

### 2.2 Convención de Nombres

| Tipo | Formato | Ejemplo |
|------|---------|---------|
| Archivo de datos | `estaciones-{estado}.ts` | `estaciones-nuevo-leon.ts` |
| Página de estado | `{estado}.astro` | `nuevo-leon.astro` |
| Página dinámica | `[slug].astro` | `nuevo-leon/[slug].astro` |
| Slug de estación | `estacion-{nombre}` | `estacion-central-monterrey` |

---

## 3. Estructura de Datos

### 3.1 Interface de Estación

```typescript
// src/data/estaciones-{estado}.ts

export interface Estacion {
  // === IDENTIFICACIÓN ===
  slug: string;                    // URL amigable: "estacion-central"
  nombre: string;                  // Nombre completo para SEO
  nombreCorto: string;             // Nombre para cards y títulos

  // === UBICACIÓN ===
  direccion: string;               // Calle y número
  colonia: string;                 // Colonia/Barrio
  codigoPostal: string;            // CP
  alcaldia: string;                // Alcaldía/Municipio (para CDMX)
  municipio?: string;              // Municipio (para otros estados)
  ciudad?: string;                 // Ciudad principal

  // === CONTACTO ===
  telefono: string;                // Formato: "55 5768 3700"
  telefonoEmergencia: string;      // Generalmente "911"
  email?: string;                  // Email de contacto (opcional)

  // === SERVICIOS ===
  servicios: string[];             // Lista de servicios
  especialidades: string[];        // Especialidades destacadas

  // === OPERACIÓN ===
  horario: string;                 // "24 horas"
  tiempoRespuesta?: string;        // "5-8 minutos"
  personalActivo?: number;         // Número de elementos
  unidadesDisponibles?: string[];  // Lista de unidades

  // === GEOLOCALIZACIÓN ===
  coordenadas: {
    lat: number;
    lng: number;
  };

  // === COBERTURA ===
  zonasCobertura: string[];        // Colonias/zonas que cubre

  // === CONTENIDO SEO ===
  descripcion: string;             // Descripción principal (2-3 oraciones)
  historia?: string;               // Historia de la estación (opcional)
  equipamiento?: string[];         // Equipamiento especial (opcional)
}
```

### 3.2 Ejemplo de Archivo de Datos Completo

```typescript
// src/data/estaciones-nuevo-leon.ts

export interface Estacion {
  // ... (misma interface)
}

export const estacionesNuevoLeon: Estacion[] = [
  {
    slug: "estacion-central-monterrey",
    nombre: "Estación Central de Bomberos de Monterrey",
    nombreCorto: "Estación Central Monterrey",
    direccion: "Av. Constitución 500",
    colonia: "Centro",
    codigoPostal: "64000",
    municipio: "Monterrey",
    ciudad: "Monterrey",
    telefono: "81 8345 6789",
    telefonoEmergencia: "911",
    email: "central@bomberosmonterrey.gob.mx",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      "Materiales peligrosos (HAZMAT)",
      "Rescate en alturas",
      "Servicio prehospitalario",
      "Control de fugas de gas"
    ],
    especialidades: [
      "Centro de mando regional",
      "Unidad HAZMAT",
      "Rescate técnico especializado"
    ],
    horario: "24 horas",
    coordenadas: { lat: 25.6866, lng: -100.3161 },
    descripcion: "La Estación Central de Bomberos de Monterrey es el corazón operativo del H. Cuerpo de Bomberos de Nuevo León. Fundada en 1905, es la estación más antigua del norte de México.",
    historia: "Fundada el 15 de septiembre de 1905...",
    zonasCobertura: ["Centro", "Obispado", "Mitras Centro", "Alta Vista"],
    tiempoRespuesta: "5-8 minutos",
    personalActivo: 85,
    unidadesDisponibles: ["3 Autobombas", "2 Unidades de Rescate", "1 Escalera", "1 HAZMAT"]
  },
  // ... más estaciones
];

// === FUNCIONES AUXILIARES ===

export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estacionesNuevoLeon.find(e => e.slug === slug);
}

export function getEstacionesByMunicipio(municipio: string): Estacion[] {
  return estacionesNuevoLeon.filter(e => e.municipio === municipio);
}

export function getMunicipios(): string[] {
  return [...new Set(estacionesNuevoLeon.map(e => e.municipio))].sort();
}

export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  return estacionesNuevoLeon
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}
```

### 3.3 Servicios Estándar por Tipo de Estación

```typescript
// Servicios comunes para todas las estaciones
const serviciosBase = [
  "Incendios estructurales",
  "Rescate vehicular",
  "Control de fugas de gas",
  "Atención de inundaciones",
  "Retiro de enjambres"
];

// Servicios para estaciones industriales
const serviciosIndustriales = [
  ...serviciosBase,
  "Incendios industriales",
  "Materiales peligrosos (HAZMAT)",
  "Rescate en espacios confinados",
  "Control de derrames químicos"
];

// Servicios para estaciones forestales
const serviciosForestales = [
  ...serviciosBase,
  "Incendios forestales",
  "Rescate en montaña",
  "Búsqueda y rescate en áreas naturales",
  "Control de fauna silvestre"
];

// Servicios para estaciones costeras/acuáticas
const serviciosAcuaticos = [
  ...serviciosBase,
  "Rescate acuático",
  "Emergencias en embarcaciones",
  "Búsqueda subacuática"
];

// Servicios para estaciones aeroportuarias (ARFF)
const serviciosAeroportuarios = [
  "ARFF (Rescate aeroportuario)",
  "Incendios de aeronaves",
  "Materiales peligrosos (HAZMAT)",
  "Rescate especializado en aviación",
  "Emergencias con combustible de aviación"
];
```

---

## 4. Componentes

### 4.1 StationCard Component

**Ubicación:** `src/components/StationCard.astro`

**Propósito:** Tarjeta individual de estación para listados

**Props:**
```typescript
interface Props {
  nombre: string;      // Nombre corto para el botón
  slug: string;        // Para construir URL
  direccion: string;   // Dirección completa
  alcaldia: string;    // Alcaldía/Municipio
  telefono: string;    // Teléfono de contacto
  servicios: string[]; // Lista de servicios
  horario?: string;    // Default: "24 horas"
  image?: string;      // URL de imagen (opcional)
}
```

**Uso:**
```astro
<StationCard
  nombre={estacion.nombreCorto}
  slug={estacion.slug}
  direccion={`${estacion.direccion}, ${estacion.colonia}`}
  alcaldia={estacion.alcaldia}
  telefono={estacion.telefono}
  servicios={estacion.servicios}
  horario={estacion.horario}
/>
```

**Elementos visuales:**
- Placeholder con icono de estación
- Badge "24 horas" (esquina superior derecha)
- Badge alcaldía/municipio (esquina inferior izquierda)
- Título de la estación
- Dirección con icono
- Teléfono con icono
- Lista de servicios (máx. 3 + indicador "+X más")
- Botón con nombre de la estación → enlaza a página de detalle

### 4.2 Estructura Visual de StationCard

```
┌─────────────────────────────────────────┐
│  [Placeholder/Imagen]          [24 hrs] │
│  ┌─────────────────────────────────────┐│
│  │     🏛️ Estación de Bomberos        ││
│  │                                     ││
│  └─────────────────────────────────────┘│
│  [Alcaldía]                             │
├─────────────────────────────────────────┤
│  Estación Central de Bomberos           │
│                                         │
│  📍 Av. Río de la Loza 156, Doctores   │
│  📞 55 5768 3700                        │
│                                         │
│  ─────────────────────────────────────  │
│  SERVICIOS:                             │
│  • Incendios estructurales              │
│  • Rescate vehicular                    │
│  • HAZMAT                               │
│  • +2 más                               │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │   Estación Central de Bomberos  →   ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

---

## 5. Páginas de Estado

### 5.1 Estructura de Página de Estado

Cada página de estado debe contener:

1. **Hero Section** (dos columnas)
   - **Columna Izquierda:**
     - Breadcrumb: Inicio > Directorio > [Estado]
     - Badge del estado (ej: "CDMX", "EDOMEX")
     - Título H1: "Estaciones de Bomberos en [Estado]"
     - Descripción principal
     - Estadísticas (# estaciones, # municipios, 24/7)
   - **Columna Derecha:**
     - Contenido SEO como texto simple (sin cajas/bloques con fondo)
     - Títulos H2 y párrafos con información del cuerpo de bomberos
     - Texto sobre servicios de emergencia disponibles

2. **Banner de Emergencia**
   - Número 911 destacado
   - Mensaje de disponibilidad

3. **Grid de Estaciones**
   - Componentes StationCard
   - Grid de 2 columnas (desktop)
   - Grid de 1 columna (mobile)

4. **Contenido SEO**
   - Información del cuerpo de bomberos estatal
   - Cómo contactar en emergencias
   - Servicios disponibles

5. **Sidebar**
   - Filtro por municipio/alcaldía
   - Teléfonos de emergencia del estado
   - Estados cercanos (interlinking)
   - CTA de cotización
   - Contacto BOMBERO.MX

### 5.2 Plantilla de Página de Estado

```astro
---
/**
 * ─── Directorio de Estaciones de Bomberos [ESTADO] ───
 * Página con todas las estaciones de bomberos en [Estado]
 */
import PageLayout from "@layouts/PageLayout.astro";
import SectionHeader from "@components/SectionHeader.astro";
import StationCard from "@components/StationCard.astro";
import { estaciones[ESTADO], getMunicipios } from "@data/estaciones-[estado].ts";

const municipios = getMunicipios();

const estadosVecinos = [
  { nombre: "[Estado Vecino 1]", slug: "[slug-1]" },
  { nombre: "[Estado Vecino 2]", slug: "[slug-2]" },
  // ...
];
---

<PageLayout
  title="Estaciones de Bomberos en [Estado] | Directorio BOMBERO.MX"
  description="Directorio completo de estaciones de bomberos en [Estado]. Teléfonos de emergencia, direcciones y servicios. Encuentra la estación más cercana."
>
  <!-- Hero Section -->
  <!-- Emergency Banner -->
  <!-- Main Content with Grid -->
  <!-- Sidebar -->
  <!-- SEO Content -->
</PageLayout>
```

### 5.3 Contenido SEO para Página de Estado

Cada página de estado debe incluir:

```markdown
## H1: Estaciones de Bomberos en [Estado]

### Párrafo 1 (Introducción):
El [Heroico Cuerpo de Bomberos de Estado/H. Cuerpo de Bomberos] de [Estado]
es la institución encargada de la protección de la vida y patrimonio de
los [gentilicio] en caso de incendios, accidentes y emergencias. Con
presencia en [X municipios], los bomberos de [Estado] responden las 24
horas del día, los 365 días del año.

### Párrafo 2 (Estadísticas):
En [Estado] operan [X] estaciones de bomberos distribuidas estratégicamente
para garantizar tiempos de respuesta óptimos. Las principales ciudades como
[Ciudad 1], [Ciudad 2] y [Ciudad 3] cuentan con múltiples estaciones
equipadas con [tecnología/equipo destacado].

### H2: ¿Cómo contactar a los bomberos en [Estado]?
En caso de emergencia en [Estado], marca el **911** desde cualquier teléfono.
También puedes comunicarte directamente a la estación más cercana usando los
números listados en este directorio.

### H2: Servicios de emergencia en [Estado]
Los bomberos de [Estado] atienden:
- Incendios estructurales y forestales
- Rescate vehicular
- Fugas de gas
- Materiales peligrosos
- Inundaciones
- [Servicios específicos del estado]
```

---

## 6. Páginas de Estación Individual

### 6.1 Estructura de Página de Estación

1. **Hero Section**
   - Breadcrumb completo
   - Badges (municipio + 24 horas)
   - Título de la estación
   - Descripción
   - Botones: Llamar + Ver en Maps
   - Card de información de contacto

2. **Sección de Servicios**
   - Grid de servicios con iconos
   - Descripción de cada servicio

3. **Especialidades** (si aplica)
   - Cards destacadas para especialidades

4. **Zonas de Cobertura**
   - Tags con colonias/zonas

5. **Equipamiento** (si aplica)
   - Lista de equipamiento
   - Unidades operativas

6. **Historia** (si aplica)
   - Párrafo sobre la historia

7. **Contenido SEO**
   - Texto optimizado con keywords
   - Interlinking a productos
   - Interlinking a servicios

8. **Sidebar**
   - Card de emergencia 911
   - Otras estaciones del estado
   - Productos relacionados
   - CTA cotización
   - Estados cercanos
   - Contacto BOMBERO.MX

### 6.2 Keywords por Página de Estación

```
Primary Keywords:
- [Nombre Estación]
- Bomberos [Municipio/Ciudad]
- Estación de bomberos [Municipio]
- Teléfono bomberos [Municipio]

Secondary Keywords:
- Emergencias [Municipio]
- 911 [Estado]
- Bomberos cerca de mí
- Incendios [Municipio]
- Rescate [Municipio]

Long-tail Keywords:
- Teléfono de emergencia bomberos [Municipio]
- Dirección estación de bomberos [Municipio]
- Cuerpo de bomberos [Municipio] teléfono
- Bomberos [Municipio] horario
```

### 6.3 Schema Markup Recomendado

```json
{
  "@context": "https://schema.org",
  "@type": "FireStation",
  "name": "[Nombre de la Estación]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Dirección]",
    "addressLocality": "[Ciudad]",
    "addressRegion": "[Estado]",
    "postalCode": "[CP]",
    "addressCountry": "MX"
  },
  "telephone": "[Teléfono]",
  "openingHours": "Mo-Su 00:00-23:59",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  }
}
```

---

## 7. Estrategia SEO

### 7.1 Títulos de Página (Title Tags)

| Nivel | Formato | Caracteres |
|-------|---------|------------|
| Directorio | `Directorio de Estaciones de Bomberos en México \| BOMBERO.MX` | 60-65 |
| Estado | `Estaciones de Bomberos en [Estado] \| Directorio BOMBERO.MX` | 55-60 |
| Estación | `[Nombre Estación] \| Bomberos [Municipio] \| BOMBERO.MX` | 50-60 |

### 7.2 Meta Descriptions

| Nivel | Formato | Caracteres |
|-------|---------|------------|
| Directorio | `Directorio completo de estaciones de bomberos en los 32 estados de México. Teléfonos, direcciones y servicios de emergencia. Encuentra tu estación más cercana.` | 155-160 |
| Estado | `Directorio de estaciones de bomberos en [Estado]. [X] estaciones con teléfonos de emergencia, direcciones y servicios. 911 disponible 24/7.` | 150-155 |
| Estación | `[Nombre Estación]: Tel. [Teléfono]. [Dirección]. Servicios: incendios, rescate, emergencias. Disponible 24 horas. [Municipio], [Estado].` | 150-155 |

### 7.3 Headings Structure

```
Página de Estado:
H1: Estaciones de Bomberos en [Estado]
  H2: Heroico Cuerpo de Bomberos de [Estado]
  H2: Servicios de Emergencia en [Estado]
  H2: ¿Cómo contactar a los bomberos en [Estado]?
  H2: Estaciones por Municipio
    H3: [Municipio 1]
    H3: [Municipio 2]

Página de Estación:
H1: [Nombre Completo de la Estación]
  H2: Servicios de Emergencia
  H2: Especialidades
  H2: Zonas de Cobertura
  H2: Equipamiento y Unidades
  H2: Historia
  H2: Contacto de Emergencia
```

### 7.4 Internal Linking por Página

| Página | Links Mínimos |
|--------|---------------|
| Directorio | 32 (estados) + 5 (productos) + 3 (servicios) |
| Estado | X (estaciones) + 5 (estados vecinos) + 5 (productos) |
| Estación | 3 (otras estaciones) + 4 (productos) + 4 (estados) + 2 (servicios) |

### 7.5 Densidad de Keywords

- **Keyword principal:** 1-2% del contenido
- **Keywords secundarias:** 0.5-1% cada una
- **Keywords de cola larga:** Uso natural en contexto

### 7.6 Contenido Mínimo por Página

| Tipo de Página | Palabras Mínimas |
|----------------|------------------|
| Directorio Nacional | 500+ |
| Página de Estado | 800+ |
| Página de Estación | 600+ |

---

## 8. Estrategia de Interlinking

### 8.1 Mapa de Enlaces Internos

```
                    ┌─────────────┐
                    │   Inicio    │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Productos│ │Directorio│ │ Servicios│
        └────┬─────┘ └────┬─────┘ └────┬─────┘
             │            │            │
    ┌────────┼────────┐   │   ┌────────┼────────┐
    ▼        ▼        ▼   │   ▼        ▼        ▼
  Trajes  Cascos   SCBA   │  Mant.  Capac.  Consult.
    │        │        │   │   │        │        │
    └────────┼────────┴───┼───┴────────┼────────┘
             │            │            │
             ▼            ▼            ▼
        ┌─────────────────────────────────┐
        │     Estados (32 páginas)        │
        │  CDMX, NL, JAL, PUE, etc.       │
        └────────────────┬────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌─────────┐     ┌─────────┐     ┌─────────┐
   │Estación │     │Estación │     │Estación │
   │    1    │ ←→  │    2    │ ←→  │    3    │
   └─────────┘     └─────────┘     └─────────┘
```

### 8.2 Enlaces Obligatorios por Sección

**Sidebar de Estación:**
```
1. Emergencias
   └── Card 911 (siempre visible)

2. Otras Estaciones en [Estado]
   ├── Estación cercana 1 → /directorio/[estado]/[slug-1]
   ├── Estación cercana 2 → /directorio/[estado]/[slug-2]
   ├── Estación cercana 3 → /directorio/[estado]/[slug-3]
   └── Ver todas → /directorio/[estado]

3. Equipo para Bomberos
   ├── Trajes Estructurales → /productos/trajes
   ├── Cascos de Bombero → /productos/cascos
   ├── Equipos SCBA → /productos/scba
   ├── Herramientas de Rescate → /productos/herramientas-rescate
   └── Ver catálogo → /productos

4. CTA Cotización → /cotizar

5. Directorio Nacional
   ├── Estado vecino 1 → /directorio/[estado-1]
   ├── Estado vecino 2 → /directorio/[estado-2]
   ├── Estado vecino 3 → /directorio/[estado-3]
   ├── Estado vecino 4 → /directorio/[estado-4]
   └── Ver todos los estados → /directorio

6. Contacto BOMBERO.MX
   ├── Teléfono → tel:+525520780102
   ├── WhatsApp → https://wa.me/525520780102
   └── Email → mailto:ventas@bombero.mx
```

**Contenido SEO de Estación:**
```
Párrafo 1:
- Link a BOMBERO.MX (/)
- Link a "equipo para bomberos" (/productos)

Párrafo 2:
- Link a "911" (tel:911)
- Link al teléfono de la estación

Párrafo 3:
- Link a trajes estructurales (/productos/trajes)
- Link a cascos (/productos/cascos)
- Link a equipos SCBA (/productos/scba)
- Link a herramientas de rescate (/productos/herramientas-rescate)
- Link a cotización (/cotizar)
```

### 8.3 Estados Vecinos por Región

```typescript
const estadosVecinos = {
  // Norte
  "baja-california": ["baja-california-sur", "sonora"],
  "baja-california-sur": ["baja-california"],
  "sonora": ["baja-california", "chihuahua", "sinaloa"],
  "chihuahua": ["sonora", "coahuila", "durango", "sinaloa"],
  "coahuila": ["chihuahua", "nuevo-leon", "durango", "zacatecas"],
  "nuevo-leon": ["coahuila", "tamaulipas", "san-luis-potosi", "zacatecas"],
  "tamaulipas": ["nuevo-leon", "san-luis-potosi", "veracruz"],

  // Centro-Norte
  "durango": ["chihuahua", "coahuila", "zacatecas", "sinaloa", "nayarit"],
  "zacatecas": ["durango", "coahuila", "nuevo-leon", "san-luis-potosi", "aguascalientes", "jalisco"],
  "san-luis-potosi": ["nuevo-leon", "tamaulipas", "zacatecas", "guanajuato", "queretaro", "hidalgo", "veracruz"],
  "aguascalientes": ["zacatecas", "jalisco"],

  // Occidente
  "sinaloa": ["sonora", "chihuahua", "durango", "nayarit"],
  "nayarit": ["sinaloa", "durango", "zacatecas", "jalisco"],
  "jalisco": ["nayarit", "zacatecas", "aguascalientes", "guanajuato", "michoacan", "colima"],
  "colima": ["jalisco", "michoacan"],

  // Centro
  "guanajuato": ["san-luis-potosi", "zacatecas", "jalisco", "michoacan", "queretaro"],
  "queretaro": ["san-luis-potosi", "guanajuato", "hidalgo", "estado-de-mexico", "michoacan"],
  "hidalgo": ["san-luis-potosi", "veracruz", "puebla", "tlaxcala", "estado-de-mexico", "queretaro"],
  "estado-de-mexico": ["hidalgo", "queretaro", "michoacan", "guerrero", "morelos", "tlaxcala", "puebla", "ciudad-de-mexico"],
  "ciudad-de-mexico": ["estado-de-mexico", "morelos", "tlaxcala", "puebla", "hidalgo"],
  "tlaxcala": ["hidalgo", "puebla", "estado-de-mexico", "ciudad-de-mexico"],
  "morelos": ["estado-de-mexico", "ciudad-de-mexico", "puebla", "guerrero"],
  "puebla": ["veracruz", "hidalgo", "tlaxcala", "estado-de-mexico", "morelos", "guerrero", "oaxaca"],

  // Sur
  "michoacan": ["jalisco", "guanajuato", "queretaro", "estado-de-mexico", "guerrero", "colima"],
  "guerrero": ["michoacan", "estado-de-mexico", "morelos", "puebla", "oaxaca"],
  "oaxaca": ["puebla", "guerrero", "veracruz", "chiapas"],
  "chiapas": ["oaxaca", "veracruz", "tabasco"],

  // Golfo
  "veracruz": ["tamaulipas", "san-luis-potosi", "hidalgo", "puebla", "oaxaca", "chiapas", "tabasco"],
  "tabasco": ["veracruz", "chiapas", "campeche"],

  // Península de Yucatán
  "campeche": ["tabasco", "yucatan", "quintana-roo"],
  "yucatan": ["campeche", "quintana-roo"],
  "quintana-roo": ["yucatan", "campeche"]
};
```

---

## 9. Checklist de Implementación

### 9.1 Por Cada Estado Nuevo

```markdown
## Estado: [NOMBRE DEL ESTADO]

### Fase 1: Investigación
- [ ] Identificar todas las estaciones del estado
- [ ] Recopilar información de contacto
- [ ] Obtener direcciones exactas
- [ ] Investigar servicios de cada estación
- [ ] Identificar especialidades
- [ ] Mapear zonas de cobertura
- [ ] Obtener coordenadas geográficas

### Fase 2: Datos
- [ ] Crear archivo `src/data/estaciones-[estado].ts`
- [ ] Definir interface Estacion
- [ ] Agregar todas las estaciones con datos completos
- [ ] Crear funciones auxiliares (getBySlug, getByMunicipio, etc.)
- [ ] Verificar slugs únicos y correctos

### Fase 3: Página del Estado
- [ ] Crear `src/pages/directorio/[estado].astro`
- [ ] Implementar Hero con estadísticas
- [ ] Agregar Banner de emergencia
- [ ] Configurar Grid de StationCards
- [ ] Implementar Sidebar con interlinking
- [ ] Agregar contenido SEO
- [ ] Configurar meta tags

### Fase 4: Páginas de Estaciones
- [ ] Crear `src/pages/directorio/[estado]/[slug].astro`
- [ ] Configurar getStaticPaths
- [ ] Implementar Hero con info de contacto
- [ ] Agregar sección de servicios
- [ ] Implementar especialidades (si aplica)
- [ ] Agregar zonas de cobertura
- [ ] Implementar equipamiento (si aplica)
- [ ] Agregar historia (si aplica)
- [ ] Configurar Sidebar completo
- [ ] Agregar contenido SEO con interlinking

### Fase 5: Interlinking
- [ ] Actualizar CompanyInfo.astro con nuevo estado
- [ ] Actualizar Footer.astro con nuevo estado
- [ ] Actualizar StatesDirectory.astro si es necesario
- [ ] Verificar links desde estados vecinos
- [ ] Verificar links en Directorio principal

### Fase 6: Verificación
- [ ] Ejecutar build sin errores
- [ ] Verificar todas las URLs generadas
- [ ] Probar navegación completa
- [ ] Verificar responsive en mobile
- [ ] Validar meta tags
- [ ] Verificar interlinking funcional
```

### 9.2 Estados Pendientes

```markdown
## Estados por Implementar

### Región Norte
- [ ] Baja California
- [ ] Baja California Sur
- [ ] Sonora
- [ ] Chihuahua
- [ ] Coahuila
- [ ] Nuevo León
- [ ] Tamaulipas
- [ ] Sinaloa
- [ ] Durango

### Región Centro-Norte
- [ ] Zacatecas
- [ ] San Luis Potosí
- [ ] Aguascalientes
- [ ] Nayarit

### Región Occidente
- [ ] Jalisco
- [ ] Colima
- [ ] Michoacán

### Región Centro
- [ ] Guanajuato
- [ ] Querétaro
- [ ] Hidalgo
- [ ] Estado de México
- [x] Ciudad de México ✅
- [ ] Tlaxcala
- [ ] Morelos
- [ ] Puebla

### Región Sur
- [ ] Guerrero
- [ ] Oaxaca
- [ ] Chiapas

### Región Golfo
- [ ] Veracruz
- [ ] Tabasco

### Península de Yucatán
- [ ] Campeche
- [ ] Yucatán
- [ ] Quintana Roo
```

---

## 10. Plantillas de Código

### 10.1 Plantilla de Archivo de Datos

```typescript
// src/data/estaciones-[estado].ts

/**
 * ─── Datos de Estaciones de Bomberos [ESTADO] ───
 * Base de datos del H. Cuerpo de Bomberos de [Estado]
 */

export interface Estacion {
  slug: string;
  nombre: string;
  nombreCorto: string;
  direccion: string;
  colonia: string;
  codigoPostal: string;
  municipio: string;
  ciudad: string;
  telefono: string;
  telefonoEmergencia: string;
  email?: string;
  servicios: string[];
  especialidades: string[];
  horario: string;
  coordenadas: { lat: number; lng: number };
  descripcion: string;
  historia?: string;
  equipamiento?: string[];
  zonasCobertura: string[];
  tiempoRespuesta?: string;
  personalActivo?: number;
  unidadesDisponibles?: string[];
}

export const estaciones[ESTADO]: Estacion[] = [
  {
    slug: "estacion-[nombre]",
    nombre: "[Nombre Completo de la Estación]",
    nombreCorto: "[Nombre Corto]",
    direccion: "[Calle y Número]",
    colonia: "[Colonia]",
    codigoPostal: "[CP]",
    municipio: "[Municipio]",
    ciudad: "[Ciudad]",
    telefono: "[XX XXXX XXXX]",
    telefonoEmergencia: "911",
    servicios: [
      "Incendios estructurales",
      "Rescate vehicular",
      // ...
    ],
    especialidades: [
      // Solo si aplica
    ],
    horario: "24 horas",
    coordenadas: { lat: 0.0000, lng: 0.0000 },
    descripcion: "[Descripción de 2-3 oraciones]",
    zonasCobertura: ["Zona 1", "Zona 2"],
  },
  // ... más estaciones
];

export function getEstacionBySlug(slug: string): Estacion | undefined {
  return estaciones[ESTADO].find(e => e.slug === slug);
}

export function getEstacionesByMunicipio(municipio: string): Estacion[] {
  return estaciones[ESTADO].filter(e => e.municipio === municipio);
}

export function getMunicipios(): string[] {
  return [...new Set(estaciones[ESTADO].map(e => e.municipio))].sort();
}

export function getEstacionesCercanas(slug: string, limit: number = 3): Estacion[] {
  const estacion = getEstacionBySlug(slug);
  if (!estacion) return [];
  return estaciones[ESTADO]
    .filter(e => e.slug !== slug)
    .slice(0, limit);
}
```

### 10.2 Plantilla de Página de Estado

Ver archivo completo: `src/pages/directorio/ciudad-de-mexico.astro`

### 10.3 Plantilla de Página de Estación

Ver archivo completo: `src/pages/directorio/ciudad-de-mexico/[slug].astro`

---

## Notas Finales

### Prioridad de Estados (por población/importancia)

1. **Alta Prioridad:** CDMX ✅, Estado de México, Nuevo León, Jalisco, Puebla, Guanajuato
2. **Media Prioridad:** Veracruz, Chihuahua, Tamaulipas, Michoacán, Oaxaca, Chiapas
3. **Normal:** Resto de estados

### Tiempo Estimado por Estado

- Investigación: Variable (depende de disponibilidad de datos)
- Implementación código: 30-45 minutos
- Verificación y ajustes: 15-20 minutos

### Recursos Útiles

- Directorios oficiales de gobiernos estatales
- Redes sociales de cuerpos de bomberos
- Google Maps para coordenadas y verificación de direcciones
- Periódicos locales para información histórica

---

**Documento creado por:** Claude (Anthropic)
**Fecha:** Febrero 2025
**Versión:** 1.0
**Proyecto:** BOMBERO.MX - Directorio Nacional de Bomberos
