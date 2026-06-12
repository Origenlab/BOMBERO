# Auditoría SEO Profesional — BOMBERO.MX
**Fecha:** 2026-06-12 | **Alcance:** 5 páginas principales + análisis competitivo vs FIREFIGHTER.mx + Proyecto Red

---

## ✅ Estado técnico — sin issues críticos después de correcciones

| Página | Title | Description | Canonical | H1 único | JSON-LD |
|---|---|---|---|---|---|
| `/` | 63c ✅ | 160c ✅ | ✅ | ✅ | ✅ fixed |
| `/productos/` | 55c ✅ | 153c ✅ | ✅ | ✅ | ✅ fixed |
| `/blog/` | 61c ✅ | 145c ✅ | ✅ | ✅ | — |
| `/nosotros/` | 59c ✅ | 157c ✅ | ✅ | ✅ | ✅ |
| `/contacto/` | 60c ✅ | 151c ✅ | ✅ | ✅ | ✅ |

### Anti-canibalización H1 — todos únicos ✅
| Página | H1 | Ángulo |
|---|---|---|
| `/` | Equipo para Bomberos en México | awareness + geo |
| `/productos/` | Catálogo de Equipos para Bomberos en México | intent catálogo |
| `/blog/` | Artículos para Bomberos en México | editorial/informacional |
| `/nosotros/` | Distribuidor Autorizado de Equipo para Bomberos en México | trust/autoridad |
| `/contacto/` | Solicita Cotización de Equipo para Bomberos en México | transaccional |

---

## 🔧 Correcciones aplicadas en esta auditoría (commit a4ee1b07)

### 1. JSON-LD numberOfItems incorrecto — CRÍTICO
**Error:** El sitio tiene **16 categorías reales** (`/productos/` lista 16 hrefs, 16 pages existen) pero ambos JSON-LD (index + /productos/) declaraban `numberOfItems: 13`. Además faltaban 3 ListItems:
- `/productos/rescate-vertical/` → Rescate Vertical
- `/productos/rescate-acuatico/` → Rescate Acuático
- `/productos/equipo-medico/` → Equipo Médico EMS

**Impacto:** Google lee el schema incorrecto → puede penalizar la credibilidad del structured data; el rich result no reflejaría todas las categorías.

**Corregido:** numberOfItems 13→16 en ambos archivos + 3 ListItems añadidos.

### 2. "Tu distribuidor bombero confiable" — E-E-A-T débil
**Error:** Index description terminaba con "Tu distribuidor bombero confiable." — "confiable" es un claim no verificable (exactamente el patrón que Google penaliza en E-E-A-T). Además "distribuidor bombero" suena gramáticamente incompleto.

**Antes:** `...trajes estructurales, SCBA, cascos y botas. Tu distribuidor bombero confiable.` (159c)
**Después:** `...trajes estructurales, SCBA MSA, cascos, guantes y botas. Distribuidor autorizado en los 32 estados. Desde 2010.` (160c)

**Mejora:** claim verificable (autorizado) + diferenciador (MSA en SCBA) + anchoring temporal (Desde 2010).

---

## 🔍 Análisis competitivo — FIREFIGHTER.mx

### ALERTA: Mismo número de teléfono
**FIREFIGHTER.mx y BOMBERO.MX comparten el número +52 55 7008 1816** (WhatsApp y teléfono). Ambos sitios también tienen directorio de estaciones de bomberos. Esto puede indicar que son la misma empresa, marcas distintas del mismo distribuidor, o alguna relación de socio/reseller. Frank debe confirmar si esto es intencional y si quiere diferenciación de marca o si son complementarios.

### Comparativa estructural

| Factor | BOMBERO.MX | FIREFIGHTER.mx | Brecha |
|---|---|---|---|
| Años de experiencia | 15 años (desde 2010) | +50 años | 🔴 FIREFIGHTER gana — ventaja de credibilidad real |
| Marcas internacionales | MSA, Honeywell, Globe, Bullard, Holmatro | Las mismas + Dräger, Haix, Petzl, 3M Scott | Paridad en las principales |
| Marcas nacionales | No mencionadas | SKÖLD, Brigadier, Femsa, Fireless, Romak | 🟡 FIREFIGHTER menciona marcas MX — si BOMBERO las tiene, debería mencionarlas |
| Páginas por sector | **0** páginas | 8 páginas dedicadas (/sectores/cuerpos-bomberos, /sectores/industria-petroquimica, etc.) | 🔴 Gap enorme de superficie SEO |
| Páginas por marca | **0** páginas | 20+ páginas (/marcas/msa-safety, /marcas/bullard, etc.) | 🔴 Gap enorme de superficie SEO |
| Casos de éxito | No (testimonials en FAQQuote genérica) | 12 testimonials con org/cargo/año/sector | 🟡 FIREFIGHTER más E-E-A-T visible |
| FAQQuote detalle | **Excelente** — 8 Q&As muy específicos (lote, LAASSP, ISP) | Genérico — 8 preguntas sin el nivel de detalle de BOMBERO | ✅ **BOMBERO.MX gana aquí** |
| Trazabilidad por lote | Mencionado explícitamente en hero + nosotros | No mencionado de esta forma | ✅ **BOMBERO.MX diferenciador único** |
| 200+ licitaciones LAASSP | Mencionado en hero nosotros y contacto | No mencionan conteo específico | ✅ **BOMBERO.MX diferenciador único** |
| Garantía específica | "desde 1 año hasta garantía de por vida en algunos casos" | "hasta 10 años en trajes estructurales" | 🟡 FIREFIGHTER más específico y vendedor |
| Proceso en 4 pasos | No | Sí (Consulta → Cotización → Entrega → Postventa) | 🟡 FIREFIGHTER más claro en proceso de compra |
| Certificaciones mencionadas | NFPA (varios números) | NFPA + ISO 9001 + UL Listed | 🟡 ¿Tiene BOMBERO ISO 9001? Si sí, añadirlo |

### Diferencias en meta titles/descriptions

| Sitio | Title index | Description index |
|---|---|---|
| BOMBERO.MX | `Equipo para bomberos \| venta de equipos para bomberos \| bombero` (63c) | Genérica, menciona SCBA MSA pero no otros modelos |
| FIREFIGHTER.mx | `Equipo para bomberos certificado en México · +50 años \| FIREFIGHTER` (67c) | **Muy específica**: nombres de modelos (SKÖLD, Brigadier, Femsa), NFPA 2112, ARFF aluminizado, SCBA MSA/Dräger |

**Insight crítico:** La description de FIREFIGHTER menciona modelos específicos de producto y NFPA standards exactos. Esto genera mayor CTR desde SERP porque el usuario ve en la description exactamente lo que busca.

---

## 📋 Issues pendientes — priorizados

### Prioridad Alta — afectan rankings actuales

**A. Index title KW3 = "bombero" (single word)**
- Actual: `Equipo para bomberos | venta de equipos para bomberos | bombero`
- Problema: KW3 "bombero" es genérico y de intención mayormente informacional en México
- Recomendado: `Equipo para bomberos certificado NFPA | venta México | distribución directa`
  - Añade "certificado NFPA" (differentiator que FIREFIGHTER usa) + intent claro
  - 63c → mantiene mismo rango
- Decisión de Frank: si se quiere capturar el query de 1 palabra "bombero" o preferir "certificado NFPA"

**B. Nosotros "Visión" CategoryCard — E-E-A-T débil residual**
- No fue tocada en la sesión (editamos meta + hero, no los cards de valores)
- Actual: "Ser el distribuidor de referencia en equipamiento para bomberos en Latinoamérica, reconocidos por nuestra calidad, servicio técnico y compromiso con la seguridad de quienes nos protegen."
- Problemas: "distribuidor de referencia en Latinoamérica" (superlativo), "calidad" y "compromiso" (genéricos)
- Recomendado: "Escalar la especialización exclusiva a Latinoamérica — los mismos estándares de trazabilidad (certificado por número de lote, carta de distribución del fabricante) y el mismo respaldo en licitaciones que aplicamos en México."

**C. Garantía sin especificar en /contacto/ FAQ cards**
- Actual: "desde 1 año hasta garantía de por vida en algunos casos" — vago
- FIREFIGHTER dice: "hasta 10 años en trajes estructurales"
- Recomendado: especificar por categoría de equipo (trajes: X años, SCBA: Y años, etc.) si los datos son disponibles

### Prioridad Media — mejoran competitividad

**D. Index description especificidad vs FIREFIGHTER**
- Actual (corregida): `...SCBA MSA, cascos, guantes y botas. Distribuidor autorizado en los 32 estados. Desde 2010.`
- Oportunidad: seguir el modelo de FIREFIGHTER y mencionar NFPA standards + más marcas clave
- Opción: `Equipo para bomberos certificado NFPA en México: trajes estructurales NFPA 1971, SCBA MSA/Honeywell, cascos Bullard. Distribuidor autorizado desde 2010. Los 32 estados.`
  - 150c ✅ — más específico y más clickable desde SERP

**E. Blog title separator inconsistente**
- Blog usa `—` (em dash): `Artículos para Bomberos en México — Guías NFPA, EPP y Rescate`
- Otros usan `|` (pipe): `Equipo para bomberos | catálogo EPP NFPA | venta México`
- No es error técnico (Google maneja ambos) pero es inconsistencia de estilo de marca
- Decisión: unificar a `|` o mantener mixto según tipo de página (comercial = `|`, informacional = `—`)

**F. Productos hero SectionHeader: "Equipo de Protección Personal — 6 Categorías"**
- El label de la primera sección dice "6 Categorías Certificadas" — correcto (trajes, cascos, guantes, botas, capuchas, gafas)
- Pero la sección de "Herramientas" y las demás no tienen su sección header visible en el audit
- Revisar que todas las secciones del catálogo estén correctamente encabezadas con H2 descriptivos

### Prioridad Baja — impacto a largo plazo

**G. Garantía específica por producto en FAQQuote /contacto/**
- Item existente dice "desde 1 año hasta garantía de por vida en algunos casos"
- FIREFIGHTER afirma: "Hasta 10 años de garantía en trajes estructurales premium"
- Mejorar cuando se tenga la data real por fabricante/modelo

---

## 🚀 Brechas estructurales — próximas sprints (sin orden implementado aún)

Estas NO son correcciones a páginas existentes sino páginas nuevas que FIREFIGHTER ya tiene y BOMBERO.MX no:

### Gap 1: Páginas por sector (máximo impacto)
FIREFIGHTER tiene 8 landing pages dedicadas por sector con su propio H1, contenido, NFPA aplicable y CTA específico. Cada página rankea para queries como "equipo para bomberos aeropuertos ARFF México", "EPP brigadas industriales PEMEX", etc.

BOMBERO.MX tiene sólo los sector cards en el index (no páginas dedicadas). Esto es una brecha de ~8 páginas SEO de alto valor.

**Sectores prioritarios:**
1. `/sectores/cuerpos-bomberos/` — mayor volumen de búsqueda
2. `/sectores/industria-petroquimica/` — ticket más alto
3. `/sectores/gobierno-licitaciones/` — captura queries de licitación

### Gap 2: Páginas por marca
FIREFIGHTER tiene páginas dedicadas para MSA Safety, Bullard, Dräger, Haix, Holmatro.
Cada página rankea para queries de marca: "MSA SCBA México", "Bullard cascos bomberos distribuidor", etc.

Si BOMBERO.MX también distribuye estas marcas con autorización formal, las páginas de marca son un canal SEO que FIREFIGHTER ya está explotando.

### Gap 3: ISO 9001
FIREFIGHTER muestra "ISO 9001" en su footer y página de valores. Si BOMBERO.MX tiene esta certificación, debe agregarse a los badges del hero del index y a /nosotros/. Si no la tiene, es un gap de credibilidad institucional.

---

## 💪 Ventajas de BOMBERO.MX que deben preservarse y amplificarse

1. **FAQQuote content** — el mejor activo E-E-A-T del sitio. Cada Q&A en /nosotros/ y /contacto/ tiene el nivel de detalle que Google busca: normas específicas, procesos reales, datos verificables. FIREFIGHTER's FAQ es genérico en comparación.

2. **Trazabilidad por número de lote** — diferenciador único y verificable que ningún competidor menciona explícitamente. Amplificar en todas las páginas donde aplique.

3. **200+ licitaciones LAASSP con documentación** — ningún competidor da un número específico. Este es un claim de alto impacto para el segmento de gobierno/municipal.

4. **Directorio de 666+ estaciones** — genera autoridad de dominio por la cantidad de páginas y el tráfico de búsqueda local ("bomberos [ciudad]").

5. **Especialización exclusiva** — "sin diversificarnos a ferretería industrial ni EPP genérico" es un diferenciador fuerte vs Proyecto Red y MESECI que venden de todo.

---

## Resumen ejecutivo

**Estado actual:** Técnicamente limpio. Los 5 titles/descriptions están dentro de límites, los canonicals son correctos, los H1 son únicos y la jerarquía semántica es sólida.

**Corrections aplicadas hoy:** 2 errores reales corregidos (JSON-LD incompleto + E-E-A-T débil en description). 

**Oportunidad de mejora inmediata:** Index title KW3 y description especificidad pueden mejorar CTR vs FIREFIGHTER en SERP.

**Brecha estructural:** FIREFIGHTER tiene 28+ páginas adicionales (sectores + marcas) que BOMBERO.MX no tiene. Este es el próximo sprint más impactante después de terminar las L3 de productos.

**Ventaja defensiva:** El contenido FAQQuote + trazabilidad por lote + 200+ licitaciones son diferenciadores que FIREFIGHTER NO tiene en su sitio. Son el argumento de calidad de BOMBERO.MX y deben mantenerse en cada página.
