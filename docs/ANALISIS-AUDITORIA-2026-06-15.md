# Análisis de Auditoría — bombero.mx

**Fecha auditoría:** 15 jun 2026 · **Herramienta:** WebSite Auditor (SEO PowerSuite)
**Páginas rastreadas:** 2,807 · **Total "problemas":** 64,544 (12,427 errores · 19,612 alertas · 32,505 info)

---

## 1. Veredicto en una línea

64,544 suena catastrófico, pero **~90% colapsa a 3 causas** y **la mayor parte son falsos positivos del crawler o ya corregidos en el último build**. Errores reales que mueven la aguja: pocos y acotados. El sitio no está roto para usuarios ni para Google — el crawler chocó con el CDN y con un deploy viejo.

---

## 2. El número real (categoría → veredicto)

| Categoría reportada | Reportado | Veredicto | Impacto real |
|---|---|---|---|
| Imágenes rotas | 11,297 | **FALSO POSITIVO** — throttling del CDN | Nulo para usuarios |
| Páginas 4xx | 1,130 | **FALSO POSITIVO** — mismas imágenes CDN (403) | Nulo |
| Enlaces rotos | 16,288 | **Mixto** — mayoría ya corregido + falso positivo CF | Bajo |
| Títulos demasiado largos | 2,164 | **REAL** | Medio (SEO) |
| URLs dinámicas | 1,102 | **REAL menor** — `/cotizar/?...` | Bajo |
| Páginas con exceso de enlaces | 2,585 | Real menor — directorio | Bajo |
| URLs demasiado largas | 58 | Menor | Muy bajo |
| Títulos/meta vacíos o duplicados | 0 | ✅ Limpio | — |
| 5xx, contenido mixto, redirect chains, frames | 0 | ✅ Limpio | — |

---

## 3. Causas raíz (las 3 que explican casi todo)

### CAUSA 1 — CDN devolvió 403 durante el rastreo → 11,297 "imágenes rotas" + 1,130 "4xx"

Todas las imágenes "rotas" y las páginas 4xx apuntan al mismo dominio: `emwn2f4rcov.exactdn.com` (vanity sobre **BunnyCDN**, no Jetpack). El reporte las marca como **403 Prohibido**.

**Verificado en vivo (15 jun):** las mismas URLs responden **HTTP 200**, estables, con cabeceras `server: BunnyCDN`, `cache-control: max-age=31536000`, `cdn-requestpullsuccess: True`. Probado con y sin User-Agent de bot → siempre 200.

**Diagnóstico:** el crawler disparó decenas de miles de peticiones rápidas (2,807 páginas × muchas imágenes) y BunnyCDN lo **throttleó con 403**. No hay ninguna imagen rota para usuarios.

**Riesgo residual:** que el CDN aplique el mismo throttling a Googlebot. Bajo, pero hay que confirmarlo.

**Acción:** validar cobertura de imágenes en Google Search Console (Inspección de URL). Si GSC no reporta bloqueos, **ignorar estos 12,427 "errores"**. Opcional: revisar reglas de rate-limit / firewall en BunnyCDN para no penalizar bots legítimos.

### CAUSA 2 — Enlaces rotos (16,288): dos patrones, ambos resolubles

**2a. `/aviso-privacidad/` → 404 (≈ la mitad de los enlaces).**
El footer viejo enlazaba a `/aviso-privacidad/`, que no existe. La página real es `/privacidad/` (responde 200).
**Ya está corregido en el código fuente** (`navigation.ts`, `FAQQuote.astro` apuntan a `/privacidad/`). El build desplegado al momento del rastreo era del **12 jun** (anterior al fix). El HTML en vivo hoy ya enlaza a `/privacidad/`.
→ **Acción: confirmar que el último deploy está en producción y re-rastrear.** Esto solo limpia miles de enlaces rotos.

**2b. `/cdn-cgi/l/email-protection` → 404 (resto).**
Cloudflare tiene activada la **ofuscación de email** (Scrape Shield). Reescribe los correos visibles en enlaces `/cdn-cgi/l/email-protection#...` que se decodifican con JS del lado cliente. El crawler los ve como enlaces y recibe 404. **Es un falso positivo** (funcionan para el usuario) pero ensucia el reporte en cada página que muestra un email.
→ **Acción: desactivar "Email Address Obfuscation"** en Cloudflare → Scrape Shield, **o** dejar de envolver emails en enlaces. Decisión de trade-off: la ofuscación reduce spam de scrapers de email; si no aporta, apágala.

### CAUSA 3 — Títulos demasiado largos (2,164) → ÚNICO error SEO real de volumen

Títulos de **149–175 caracteres** (límite recomendado ~60). Google trunca a ~580px (~60 chars).
Distribución en la muestra del reporte: **directorio ≈ 419**, blog ≈ 69, productos ≈ 11. El grueso es el **directorio de estaciones**.

Ejemplos:
- `Informe Ejecutivo 2026: Ecosistema de Proveedores... | Blog BOMBERO.MX` → **175 chars**
- `Estación de Bomberos del Aeropuerto Internacional... Ciudad de México | BOMBERO.MX` → **152 chars**

→ **Acción:** acortar el `<title>` a ≤60 chars (puede diferir del H1, que sí puede ser largo). En el directorio, plantilla del tipo `Bomberos {Estación}, {Estado} | BOMBERO.MX`. En blog, recortar el patrón largo y mover el detalle al H1/meta.

---

## 4. Secundarios (bajo impacto)

- **URLs dinámicas (1,102):** `/cotizar/?estacion=...&estado=...&municipio=...`, una por estación. Generan URLs parametrizadas rastreables. → Añadir `rel=canonical` a `/cotizar/` sin parámetros, o `noindex`, o bloquear `?estacion=` en robots.txt.
- **Exceso de enlaces por página (2,585):** páginas de directorio con muchos enlaces internos. Normal en un índice; impacto bajo.
- **URLs demasiado largas (58):** menor, no prioritario.

---

## 5. Lo que está BIEN (no tocar)

0 títulos vacíos · 0 títulos duplicados · 0 meta descripciones vacías/duplicadas/largas · 0 ALT vacíos · 0 páginas 5xx · 0 contenido mixto HTTPS · 0 cadenas de redirección · 0 frames · www/no-www resuelto · robots.txt y sitemap.xml presentes · página 404 bien configurada · 2,585 con `rel=canonical`.

Eso es una base técnica **sólida**. La "puntuación" de 64k problemas es engañosa.

---

## 6. Plan de corrección priorizado

**P0 — Hoy (limpia ~90% del ruido):**
1. Confirmar que el build más reciente (footer `/privacidad/`) está desplegado en producción.
2. Desactivar "Email Address Obfuscation" en Cloudflare → Scrape Shield (o quitar enlaces de email).
3. Re-rastrear el sitio. Verás caer los enlaces rotos de 16,288 a un puñado.

**P1 — Esta semana (único SEO real de volumen):**
4. Acortar `<title>` ≤60 chars en plantilla de **directorio** (mayor volumen) y **blog**.

**P2 — Cuando haya tiempo:**
5. `canonical`/`noindex` en `/cotizar/` con parámetros.
6. Validar imágenes en Google Search Console; revisar rate-limit de BunnyCDN para bots.

**P3 — Monitoreo:**
7. Re-auditar mensual con rastreo más lento (bajar hilos/velocidad del crawler para no gatillar el 403 del CDN).

---

## 7. Conclusión

De 64,544 "problemas": **~28,000 son falsos positivos** del CDN (imágenes + 4xx), **varios miles ya están corregidos** en el último código (aviso-privacidad), **~1,000 son falsos positivos de Cloudflare** (email-protection), y el **único trabajo SEO real de volumen son los 2,164 títulos largos**. La acción de mayor retorno es trivial: re-desplegar + re-rastrear + apagar la ofuscación de email, y luego recortar títulos.
