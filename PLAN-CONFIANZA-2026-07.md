# Plan de Confianza y Credibilidad — bombero.mx vs FEM S.A.
**Fecha:** 2026-07-06 · **Base:** estudio comparativo fireequipmentmexico.com vs bombero.mx, verificado contra el repo y producción.

## Diagnóstico en una línea
Bombero.mx gana en ejecución técnica (schema, contenido, directorio), pero FEM gana en **verificabilidad**: sus claims se pueden comprobar por terceros (números de registro UL, certificados en UL Prospector). Los nuestros hoy no. Un auditor externo ya detectó los dos puntos débiles (Gmail y reseñas genéricas) — si él los vio, un comprador de gobierno también los ve.

## Hallazgos verificados en código y producción

| # | Hallazgo | Evidencia | Riesgo |
|---|----------|-----------|--------|
| 1 | Correo de ventas es Gmail (`ventas.bomberosmx@gmail.com`), visible en header, contacto, schema y 18 archivos | `src/config/site.ts:78-79` + confirmado en prod | Alto. Incongruente con el nivel técnico del sitio. Señal #1 de desconfianza B2G |
| 2 | 9 "reseñas" con 5 estrellas hardcodeadas, de empresas con nombres genéricos, todas con el mismo tono redaccional. Ninguna es de una estación de bomberos, pero el título dice "500 Estaciones Confían en Nosotros" | `src/components/Testimonials.astro` + confirmado en prod | Alto. Se perciben como fabricadas. Incongruencia título↔contenido |
| 3 | Sellos NFPA/UL/EN/ISO/NOM sin número de registro ni enlace de verificación. ISO 9001:2015 listado como certificación propia — como distribuidor, ¿de quién es ese ISO? | `src/components/Certifications.astro`, `site.ts:131-137` | Medio-alto. Claim no sustentable si un comprador lo cuestiona en licitación |
| 4 | `legalName: "BOMBERO.MX S.A. de C.V."` y `numberOfEmployees: 50-100` en JSON-LD | `site.ts:103,107` | Medio. Si la razón social no existe tal cual, es un dato falso en datos estructurados |
| 5 | Claims fuertes sin respaldo publicado: "distribuidor autorizado MSA/Honeywell/Globe/Bullard", "200 licitaciones LAASSP", "certificado por lote" | `nosotros/index.astro`, `contacto/index.astro` | Medio. El texto es excelente; falta la evidencia descargable que FEM sí publica |
| 6 | Dirección Av. Tamaulipas 150 Piso 13 (oficinas flex, Condesa) | `site.ts:83` | Bajo-medio. El estudio externo lo notó. Sin contexto parece "empresa de escritorio" |

**Punto a favor:** no hay `AggregateRating`/`Review` en schema — no estamos marcando reseñas dudosas como datos estructurados. Mantenerlo así hasta tener reseñas reales.

## Fase 1 — Quick wins · **APLICADA 2026-07-06** (build ✅ 1601 páginas)

### 1.1 Correo con dominio propio — ❌ DESCARTADO por decisión de Frank
- El Gmail (`ventas.bomberosmx@gmail.com`) se queda visible. Queda documentada la alternativa por si se retoma: Cloudflare Email Routing gratis → `ventas@bombero.mx` reenvía al Gmail actual; cambio de código solo en `site.ts:78-79` + grep de residuos en .mdx.

### 1.2 Reencuadrar la sección de testimonios — ✅ HECHO
- `Testimonials.astro`: label → "Empresas y Aliados", título → "Empresas del Sector que Trabajan con Nosotros" (ya no promete 500 estaciones en una sección sin estaciones), descripción honesta (integradores/empresas del sector).
- Estrellas 5★ eliminadas (markup + CSS).
- Enlaces a sitios reales de las empresas se conservan.

### 1.3 Depurar claims no sustentables — ✅ HECHO
- `legalName: "BOMBERO.MX S.A. de C.V."` eliminado de `site.ts`, `lib/seo.ts` y `nosotros/index.astro` (reintroducir solo con razón social real).
- `numberOfEmployees: 50-100` eliminado de los 3 mismos archivos.
- `Certifications.astro`: título → "Estándares que cumplen los productos que distribuimos"; ISO → "9001:2015 · Fabricantes".

> Nota build local: pagefind falla vía npx wrapper en darwin-arm64 — preexistente, no relacionado con estos cambios.

## Fase 2 — Mediano plazo (2-4 semanas)

### 2.1 Verificabilidad estilo FEM (el gap central)
- Página o sección **/certificaciones**: por cada marca, qué certificado entrega, ejemplo real de certificado por lote (PDF con datos del cliente tachados) y **enlaces a verificadores de terceros**: UL Product iQ, SEI Certified Product List, y localizador de distribuidores autorizados de MSA/Honeywell si la marca lo publica.
- Publicar (o mostrar fragmento de) cartas de distribución autorizada si existen. Esto convierte el claim #5 en evidencia.

### 2.2 Reseñas reales
- **Google Business Profile** activo y enlazado. 3-5 reseñas reales de clientes verificables valen más que las 9 actuales.
- Cuando existan: reintegrar estrellas enlazando a la URL pública de GBP (verificable por cualquiera) y solo entonces evaluar `AggregateRating` en schema.

### 2.3 Prueba social con nombre propio
- 2-3 **casos de entrega documentados**: "H. Cuerpo de Bomberos de [municipio] — 20 trajes NFPA 1971, 2025" con foto de entrega y, con permiso, nombre del comandante. Una sola entrega real con foto vale más que las 9 reseñas actuales.

### 2.4 Contexto de dirección
- Añadir en contacto: "Oficinas comerciales en Condesa · Almacén y entregas en [ubicación real] · Visitas con cita". Neutraliza la lectura de "oficina compartida".

## Fase 3 — Largo plazo

- Página tipo **"Entregas"** (timeline de proyectos con actas/fotos) — el equivalente propio del timeline histórico de FEM, pero hacia adelante: no podemos competir con 47 años de historia, sí con evidencia fresca y fotográfica.
- Profundizar timeline de /nosotros (hoy 4 hitos 2010-2024) con hitos verificables: primera licitación ganada, alianzas con fecha, expansiones.
- Mantener la ventaja del **directorio** (549+ estaciones): es nuestro activo E-E-A-T más fuerte y FEM no tiene equivalente. Ciclo de re-verificación semestral con fecha visible "verificado el…".

## Orden de ejecución sugerido
1. **1.1 correo** (desbloquea todo, cero riesgo)
2. **1.2 testimonios** (un componente, sin efectos colaterales)
3. **1.3 claims** (site.ts + nosotros)
4. Fase 2 según disponibilidad de documentos reales (cartas, fotos, GBP)

**Regla general adoptada de FEM:** ningún claim de confianza sin ruta de verificación por un tercero. Si no se puede verificar, se reformula o se quita.
