# Auditoría SEO Profesional — Páginas L3 BOMBERO.MX
**Fecha:** 2026-06-12  
**Alcance:** 8 páginas de categoría de producto (L3) + páginas L4 relacionadas  
**Metodología:** Lectura directa de archivos fuente Astro, grep exhaustivo, análisis cross-page

---

## RESUMEN EJECUTIVO

De las 8 páginas L3 auditadas, **3 tienen errores críticos activos** (BOMBERO.MX en contenido visible), **1 tiene un problema estructural mayor** (layout incorrecto), y **todas carecen de FAQPage schema** — la oportunidad técnica de mayor impacto inmediato. Las páginas editadas en sesiones recientes (gafas, SCBA, forestales, botas, capuchas) tienen la estructura E-E-A-T correcta; las primeras tres en ser trabajadas (trajes, cascos, guantes) quedaron con BOMBERO.MX residual en dos ubicaciones estándar cada una.

---

## PARTE I — ERRORES CRÍTICOS (corregir primero)

### 1.1 BOMBERO.MX residual en L3 — 9 instancias activas

Patrón consistente: cada página tiene dos bloques `<SectionHeader>` con párrafo `"En BOMBERO.MX..."` que NO fueron limpiados en las sesiones tempranas.

| Página | Ubicación | Línea aprox. | Texto |
|--------|-----------|--------------|-------|
| `trajes-para-bomberos/` | Comparativa — párrafo 2 | 327 | `"En BOMBERO.MX asesoramos sin costo a tu corporación..."` |
| `trajes-para-bomberos/` | EPP Complementario — párrafo 2 | 362 | `"En BOMBERO.MX equipamos a tu personal con todo el sistema..."` |
| `cascos-para-bomberos/` | Comparativa — párrafo 2 | 348 | `"En BOMBERO.MX elaboramos especificaciones técnicas de sistemas EPP completos..."` |
| `cascos-para-bomberos/` | EPP Complementario — párrafo 2 | 430 | `"En BOMBERO.MX equipamos a tu personal con todo el sistema..."` |
| `guantes-para-bomberos/` | Comparativa — párrafo 2 | 308 | `"En BOMBERO.MX elaboramos las especificaciones técnicas de sistemas EPP completos..."` |
| `guantes-para-bomberos/` | EPP Complementario — párrafo 2 | 381 | `"En BOMBERO.MX equipamos a tu personal con todo el sistema..."` |
| `forestales/` | FAQ "IUF" — respuesta | 150 | `"BOMBERO.MX asesora sobre el equipo correcto según la geografía..."` |
| `forestales/` | FAQ "¿Cuánto dura un traje forestal?" | 154 | `"BOMBERO.MX provee guías de mantenimiento e inspección..."` |
| `forestales/` | FAQ "Equipo mínimo brigadista" — cierre | 162 | `"el EPP completo por brigadista en BOMBERO.MX oscila entre $8,500 y $18,000 MXN"` |

**Fix estándar para trajes/cascos/guantes (comparativa + complementario):**  
Reemplazar el párrafo `"En BOMBERO.MX..."` por el mismo texto que usan las páginas ya corregidas (gafas/SCBA/capuchas/botas): especificaciones técnicas + licitaciones sin mencionar la marca.

**Fix forestales (FAQs):**  
- FAQ IUF: eliminar la última oración, terminar en `"...riesgo estructural y forestal simultáneamente. El bombero que opera en IUF necesita un traje que cumpla NFPA 1977 como mínimo, idealmente un sistema mixto con validación de laboratorio independiente por operación de IUF."`
- FAQ vida útil: eliminar última oración, terminar en `"...Consulta la tabla de retiro NFPA 1851 para decisiones de reemplazo basadas en inspección, no en calendario."`
- FAQ brigadista: eliminar el cierre con precio de BOMBERO.MX, terminar antes de `"El costo del EPP completo por brigadista en BOMBERO.MX..."` → reemplazar con `"El costo por brigadista varía entre $8,500 y $22,000 MXN según marcas y nivel de certificación — solicita cotización por volumen para brigadas de 10 o más personas."`

---

### 1.2 BOMBERO.MX en títulos de páginas L4 — impacto SEO directo

El KW3 de todos los `<title>` en las páginas L4 no migradas es `| BOMBERO.MX` — exactamente el patrón prohibido. Google muestra estos títulos en SERPs.

| Página L4 | Title actual |
|-----------|-------------|
| `gafas/goggle/` | `"Goggle de Bombero NFPA 1971 — Protección Ocular Sellada \| BOMBERO.MX"` |
| `gafas/seguridad/` | `"Gafas de Seguridad Antiimpacto para Bombero ANSI Z87.1 \| BOMBERO.MX"` |
| `guantes/estructurales/` | `"Guantes Estructurales NFPA 1971 \| Bombero Certificados \| BOMBERO.MX"` |
| `guantes/forestales/` | `"Guantes Forestales NFPA 1977 \| Bombero Certificados \| BOMBERO.MX"` |
| `guantes/hazmat/` | `"Guantes HAZMAT NFPA 1991 \| Químicos Certificados \| BOMBERO.MX"` |
| `capuchas/nomex/` | `"Capucha Nomex® Estructural NFPA 1971 para Bombero \| BOMBERO.MX"` |
| `cascos/casco-brigada-industrial/` | `"Casco Brigada Industrial \| Bombero Industrial \| BOMBERO.MX"` |

Páginas fuera de scope L3/L4 con el mismo problema: `extintores/`, `hazmat/`, `equipo-medico/`, `productos/index`.

**Impacto:** CTR reducido en SERPs; señal débil de keyword relevance en KW3.  
**Fix:** Migrar KW3 a `| México` o geolocalización relevante, igual que en L3.

---

## PARTE II — INCONSISTENCIAS DE PATRÓN (impacto SEO medio)

### 2.1 Trajes — H1 sin marcas (único en todo el catálogo)

```
heroTitle actual:  "Trajes de Bombero NFPA 1971 y 1977"
Patrón del resto:  "[Producto] de Bombero NFPA [X] — Marca1, Marca2 y Marca3"
```

Todos los demás 7 H1 de L3 incluyen marcas como diferenciador. Trajes es el único que no. Además, "y 1977" al final del H1 es poco natural para búsqueda — los usuarios buscan "traje de bombero NFPA 1971", no "NFPA 1971 y 1977".

**Fix propuesto:**
```
heroTitle={`Trajes de <span class="hero__title-highlight">Bombero NFPA 1971</span> — Globe, Honeywell y MSA`}
```
La referencia a NFPA 1977 se puede mantener en el `heroSubtitle`.

---

### 2.2 Trajes — description usa "Los 32 estados" (única página)

```
description actual: "...Certificado por número de lote. Los 32 estados."
Todas las demás:   "...Certificado por número de lote. 32 estados."
```

"Los 32 estados" es una frase de 15 caracteres vs "32 estados" de 10 — desperdicia 5 caracteres y es inconsistente. Google puede mostrar variantes distintas. Unificar a `"32 estados."`.

---

### 2.3 Forestales — description usa "Certificado por laboratorio" en vez de "Certificado por número de lote"

```
description actual: "...CONAFOR, municipios. Certificado por laboratorio. 32 estados."
Patrón L3:         "...Certificado por número de lote. 32 estados."
```

"Número de lote" es la especificación de trazabilidad diferenciadora que usamos como KW de confianza en todas las páginas. "Por laboratorio" es genérico — cualquier competidor puede decirlo.

**Fix:**
```
description: "Equipo NFPA 1977 para bomberos forestales — Nomex®, casco, mochila bomba, Pulaski y Mcleod. CONAFOR, municipios. Certificado por número de lote. 32 estados."
```
(153c → dentro del límite)

---

### 2.4 Tecnología — títulos con prefijo "Materiales y Certificaciones:" (trajes y cascos)

```
Trajes:  title="Materiales y Certificaciones: Nomex®, PBI Gold® y Gore-Tex®"
Cascos:  title="Materiales y Certificaciones: Termoplástico, Compuesto y Visor Anti-radiación"
```

El patrón prohibido exacto es `"Materiales, Certificaciones y Aplicaciones"` (completamente genérico). Estos tienen especificidad en el sufijo — están en zona gris. Sin embargo, empezar con sustantivos de categoría en lugar de con el diferenciador técnico real es más débil que el patrón implementado en las páginas más recientes.

**Comparar con gafas** (patrón correcto):
```
title="Policarbonato Balístico, Anti-vaho y Sellado Perimetral: Materiales de la Protección Ocular NFPA"
```

**Fix propuesto para trajes:**
```
title="Nomex®, PBI Gold® y Gore-Tex® en el Traje de Bombero NFPA 1971: Tecnología de Protección Térmica"
```

**Fix propuesto para cascos:**
```
title="Termoplástico ABS, Compuesto y Fibra de Carbono en el Casco NFPA 1971: Materiales que Aguantan 260 °C"
```

---

## PARTE III — GAPS TÉCNICOS DE SCHEMA (impacto alto, esfuerzo bajo)

### 3.1 FAQPage schema ausente en todas las páginas L3

**Impacto:** Cada página L3 tiene entre 5 y 8 preguntas técnicas de alto valor (precios, normas, licitación, CompraNet). Sin `FAQPage` schema, Google no puede mostrarlas como rich snippets en SERPs — se pierde visibilidad adicional sin costo.

**Estado actual:** `jsonLdSchemas = [productSchema]` — sin FAQPage.

**Fix:** Agregar a cada página L3 la función de utilidad que ya existe en el proyecto (o crearla):

```javascript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": trajesFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const jsonLdSchemas = [productSchema, faqSchema];
```

Impacto estimado: posibilidad de ocupar 2-3x más espacio vertical en SERPs para queries de pregunta relacionados con equipo de bombero.

---

### 3.2 Breadcrumb schema — verificar si ProductCategoryLayout lo inyecta internamente

En las páginas L3 con ProductCategoryLayout, el archivo de frontmatter genera `breadcrumbSchema` con `breadcrumbJsonLd(...)` pero en la mayoría de páginas ese schema **no se incluye** en `jsonLdSchemas`. Dos posibilidades:

- ProductCategoryLayout lo inyecta automáticamente usando el prop `breadcrumb={[...]}` → no hay problema
- No lo inyecta → el breadcrumb está siendo ignorado en todas las páginas L3

**Acción:** Verificar en `src/layouts/ProductCategoryLayout.astro` si hay inyección de `<script type="application/ld+json">` con el breadcrumb. Si no la hay, añadir `breadcrumbSchema` al array de jsonLdSchemas en cada página.

---

## PARTE IV — ESTRUCTURA Y LAYOUT

### 4.1 Forestales usa PageLayout — la única L3 sin estructura ProductCategoryLayout

`forestales/index.astro` usa `PageLayout` (layout genérico) mientras las otras 7 páginas usan `ProductCategoryLayout`. Diferencia funcional:

| Componente | ProductCategoryLayout | PageLayout (forestales) |
|------------|----------------------|------------------------|
| ProductSidebar (normas, marcas, recursos) | ✅ | ❌ |
| WhyChooseUs (foto grid) | ✅ | ❌ |
| Breadcrumb automático | ✅ | ❌ |
| CTABar integrado | ✅ | Manual / externo |
| Estructura de heading estándar | ✅ | Ad-hoc |

**Impacto SEO:** Forestales tiene menos contenido estructurado que las otras páginas, menor densidad de señales semánticas, y una UX inconsistente para el usuario que navega entre páginas L3.

**Recomendación:** Migrar forestales a `ProductCategoryLayout` en un sprint dedicado. Requiere definir el `sidebarData` (normas NFPA 1977, marcas, recursos PDF CONAFOR) y adaptar el hero inline a las props estándar del layout.

---

## PARTE V — INTERNAL LINKING (gaps de arquitectura)

### 5.1 `/productos/scba/` no recibe links desde el cuerpo de otras L3

SCBA es la categoría de producto de mayor ticket (~$50K–$165K MXN por unidad). Sin embargo:

- Ninguna página L3 enlaza a `/productos/scba/` desde los bloques `heroSeoBlock`, comparativa o tecnología
- Capuchas menciona NFPA 1981 (norma SCBA) en el contexto de compatibilidad pero sin link
- Trajes menciona "SCBA autónomo" en el complementario sin link
- Guantes enlaza a `/productos/scba/` en el complementario ✅ (único caso)

**Fix de alto impacto (30 min):** En cada página L3 donde se mencione SCBA o "aire autónomo", convertir la primera mención en un `<a href="/productos/scba/">SCBA NFPA 1981</a>`. Páginas prioritarias: trajes, cascos, capuchas.

---

### 5.2 Forestales no enlaza a otras páginas L3 desde su contenido

La página forestales tiene links internos a:
- `/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/` (en heroSeoBlock inline) ✅
- `/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/` (en heroSeoBlock inline) ✅

Pero NO enlaza a:
- `/productos/cascos-para-bomberos/` (cascos forestales)
- `/productos/botas-para-bomberos/` (botas forestales)
- `/productos/gafas-para-bomberos/` (gafas anti-chispas para brigada)
- `/productos/guantes-para-bomberos/` (guantes forestales)

El FAQ "equipo mínimo brigadista" lista todo este equipo en texto pero sin ningún enlace. Es una oportunidad de linking exacta y natural.

---

### 5.3 Link desde pillar `/productos/trajes-para-bomberos/` → cluster forestales

El pillar de trajes (`/productos/trajes-para-bomberos/`) tiene una fila en la comparativa para "Forestal NFPA 1977" pero no enlaza a la página de categoría forestal `/productos/forestales/`. Debería haber un link natural en el texto de descripción de esa fila o en el EPP complementario.

---

## PARTE VI — GAPS DE CONTENIDO (oportunidades de expansión)

### 6.1 SCBA — sin páginas L4 individuales

Los 6 productos del catálogo SCBA apuntan todos al mismo slug:
```javascript
slug: "/productos/scba/"  // todos los 6 productos
```

No existen páginas como:
- `/productos/scba/scba-30-min/`
- `/productos/scba/scba-45-min/`
- `/productos/scba/msa-g1/`
- `/productos/scba/scott-air-pak/`

Cada una de estas páginas podría capturar tráfico de búsqueda de marca + especificación ("MSA G1 precio México", "SCBA 60 minutos NFPA 1981") que hoy no captura el sitio.

---

### 6.2 Página L3 de Rescate Técnico — inexistente

El sidebar de cascos incluye `casco-rescate-tecnico-nfpa-1951/` como un L4. Las páginas de botas y guantes mencionan NFPA 1951. Pero **no existe una página L3 `/productos/rescate/`** o equivalente para rescate técnico / USAR.

Búsquedas no capturadas: "equipo rescate técnico México", "equipo USAR NFPA 1951", "guantes de excarcelación".

---

### 6.3 Páginas de marca (Brand Pages) — inexistentes

Ninguna página de marca existe actualmente. Oportunidad:
- `/marcas/bullard/` → "cascos Bullard para bombero México"
- `/marcas/globe/` → "trajes Globe bombero México"
- `/marcas/haix/` → "botas Haix bombero México"
- `/marcas/msa/` → "MSA Safety México equipos bombero"
- `/marcas/honeywell-safety/`
- `/marcas/draeger/`

Búsquedas de marca + categoría son de alta intención de compra.

---

### 6.4 Landing pages por sector — inexistentes

8 sectores identificados con necesidades de EPP distintas que justifican páginas propias:
- Municipios / cuerpos de bomberos
- Protección civil estatal
- ARFF aeroportuario (NFPA 403)
- Petroquímica / brigadas industriales
- CONAFOR / brigadas forestales federales
- CBRN / HAZMAT especializado
- Parques nacionales
- Cruz Roja / paramédico

Estas páginas actuarían como landing de conversión para licitaciones por sector.

---

## PARTE VII — ANÁLISIS CROSS-PAGE

### 7.1 Consistencia de H1 — verificación anti-canibalización

| Página | H1 renderizado | Ángulo único |
|--------|---------------|--------------|
| Trajes | "Trajes de Bombero NFPA 1971 y 1977" | ✅ (único con doble norma) |
| Cascos | "Cascos de Bombero NFPA 1971 — Bullard, Cairns y MSA" | ✅ |
| Guantes | "Guantes de Bombero NFPA 1971 — Kevlar, Gore-Tex® y Nomex®" | ✅ |
| Botas | "Botas de Bombero NFPA 1971 — Haix, Thorogood y MSA" | ✅ |
| Capuchas | "Capuchas de Bombero NFPA 1971 — Nomex®, PBI Gold® y Particulada PM2.5" | ✅ |
| Gafas | "Goggle de Bombero NFPA 1971 — Bollé, MSA y Honeywell" | ✅ |
| SCBA | "SCBA de Bombero NFPA 1981 — MSA G1, Scott Air-Pak y Dräger" | ✅ |
| Forestales | "Equipo para Bomberos Forestales NFPA 1977 — Nomex®, Herramientas y Mochila Bomba" | ✅ |

Sin riesgo de canibalización entre páginas. ✅

---

### 7.2 Consistencia de meta titles

| Página | Title | Chars | KW3 | Estado |
|--------|-------|-------|-----|--------|
| Trajes | "Trajes de Bombero NFPA 1971 \| Globe, Honeywell y MSA \| México" | 60 | México ✅ | ✅ |
| Cascos | "Cascos de Bombero NFPA 1971 \| Bullard, Cairns y MSA \| México" | 60 | México ✅ | ✅ |
| Guantes | "Guantes de Bombero NFPA 1971 \| Kevlar y Gore-Tex® \| México" | 57 | México ✅ | ✅ |
| Botas | "Botas de Bombero NFPA 1971 \| Haix, Thorogood y MSA \| México" | 58 | México ✅ | ✅ |
| Capuchas | "Capuchas de Bombero NFPA 1971 \| Nomex® y PBI Gold® \| México" | 59 | México ✅ | ✅ |
| Gafas | "Goggle de Bombero NFPA 1971 \| Bollé, MSA y Honeywell \| México" | 60 | México ✅ | ✅ |
| SCBA | "SCBA para Bomberos NFPA 1981 \| MSA G1, Scott y Dräger \| México" | 62 | México ✅ | ✅ |
| Forestales | "Equipo Forestal NFPA 1977 \| Nomex® y Herramientas \| México" | 58 | México ✅ | ✅ |

Todos dentro del límite. Sin BOMBERO.MX en títulos L3. ✅

---

### 7.3 Trazabilidad — consistencia entre páginas

| Página | Frase de trazabilidad | Correcto |
|--------|----------------------|---------|
| Trajes | "Certificado por número de lote" | ✅ |
| Cascos | "Certificado por número de lote" | ✅ |
| Guantes | "Certificado por número de lote" | ✅ |
| Botas | "Certificado por número de lote" | ✅ |
| Capuchas | "Certificado por número de lote" | ✅ |
| Gafas | "Certificado por número de lote" | ✅ |
| **SCBA** | "Certificado por número de serie" | ✅ (correcto — SCBA es por unidad) |
| **Forestales desc.** | "Certificado por laboratorio" | ❌ (debe ser "número de lote") |

---

## PARTE VIII — PLAN DE ACCIÓN PRIORIZADO

### Sprint inmediato (1-2 horas) — Errores activos

| Prioridad | Acción | Archivos | Impacto |
|-----------|--------|----------|---------|
| 🔴 1 | Eliminar BOMBERO.MX en trajes (2 instancias) | `trajes-para-bomberos/index.astro` líneas 327, 362 | SEO + E-E-A-T |
| 🔴 2 | Eliminar BOMBERO.MX en cascos (2 instancias) | `cascos-para-bomberos/index.astro` líneas 348, 430 | SEO + E-E-A-T |
| 🔴 3 | Eliminar BOMBERO.MX en guantes (2 instancias) | `guantes-para-bomberos/index.astro` líneas 308, 381 | SEO + E-E-A-T |
| 🔴 4 | Eliminar BOMBERO.MX en forestales FAQs (3 instancias) | `forestales/index.astro` líneas 150, 154, 162 | SEO + E-E-A-T |

### Sprint corto (2-3 horas) — Quick wins de alta visibilidad

| Prioridad | Acción | Archivos | Impacto |
|-----------|--------|----------|---------|
| 🟠 5 | Fix trajes H1 → agregar marcas | `trajes-para-bomberos/index.astro` | Consistencia + CTR |
| 🟠 6 | Fix trajes description → "Los 32 estados" → "32 estados" | `trajes-para-bomberos/index.astro` | Consistencia |
| 🟠 7 | Fix forestales description → "número de lote" | `forestales/index.astro` | Consistencia trazabilidad |
| 🟠 8 | Fix BOMBERO.MX en titles L4 (7 páginas) | goggle, seguridad, estructurales, forestales-guantes, hazmat, nomex, brigada-industrial | SERP visibility |

### Sprint medio (4-6 horas) — Mejoras técnicas

| Prioridad | Acción | Archivos | Impacto |
|-----------|--------|----------|---------|
| 🟡 9 | Agregar FAQPage schema a las 8 páginas L3 | Todas las L3 | Rich snippets |
| 🟡 10 | Verificar BreadcrumbSchema en ProductCategoryLayout | `ProductCategoryLayout.astro` | Structured data |
| 🟡 11 | Fix títulos Tecnología en trajes/cascos | `trajes/`, `cascos/` | KW authority |
| 🟡 12 | Agregar links a `/productos/scba/` en trajes, cascos, capuchas | 3 páginas | PageRank SCBA |

### Sprint largo (sprint dedicado) — Expansión de contenido

| Prioridad | Acción | Estimado |
|-----------|--------|----------|
| 🔵 13 | Migrar forestales a ProductCategoryLayout | 4-6h |
| 🔵 14 | Crear páginas L4 para SCBA (MSA G1, Scott, Dräger, 30/45/60 min) | 8-12h |
| 🔵 15 | Crear página L3 de Rescate Técnico NFPA 1951 | 4-6h |
| 🔵 16 | Crear 6 brand pages (Bullard, Globe, Haix, MSA, Honeywell, Dräger) | 12-16h |
| 🔵 17 | Crear 4-8 landing pages por sector | 8-12h |
| 🔵 18 | Migración a Cloudflare Pages (security headers, CF CDN, analytics) | Ya documentado en MIGRACION-CLOUDFLARE-PAGES.md |

---

## APÉNDICE — Comandos de verificación post-fix

```bash
# Verificar que no quede BOMBERO.MX en L3 después de fixes
grep -r "BOMBERO\.MX" src/pages/productos/trajes-para-bomberos/ src/pages/productos/cascos-para-bomberos/ src/pages/productos/guantes-para-bomberos/ src/pages/productos/forestales/

# Conteo global de instancias restantes en todo el sitio
grep -rc "BOMBERO\.MX" src/pages/productos/ | grep -v ":0"

# Verificar character count de descriptions (deben ser ≤160)
grep -h "description=\"" src/pages/productos/*/index.astro | awk '{print length, $0}' | sort -rn | head -20
```

---

*Auditoría generada el 2026-06-12. Próxima revisión recomendada post-Sprint inmediato.*
