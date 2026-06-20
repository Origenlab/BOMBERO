# Cambio de número de contacto — 2026-06-20

Cambio del número de teléfono/WhatsApp de contacto de **BOMBERO.MX** en todo el sitio.

## Resumen

| | Anterior | Nuevo |
|---|---|---|
| **Display (texto visible)** | `55 7008 1816` / `+52 (55) 7008-1816` / `+52 55 7008 1816` | `+52 55 6034 8981` |
| **Internacional (tel:)** | `+525570081816` | `+525560348981` |
| **WhatsApp (wa.me / JS)** | `525570081816` | `525560348981` |
| **Local (10 dígitos)** | `5570081816` | `5560348981` |

El display se **unificó con código de país** (`+52 55 6034 8981`) en todo el sitio; antes convivían formatos con y sin lada/país.

## Alcance

- **34 archivos** modificados en `src/` — 136 reemplazos.
- Fuente central: `src/config/site.ts` (`contact.phone`, `phoneRaw`, `phoneTollFree`, `whatsapp`).
- Cubre: enlaces `tel:`, `wa.me`, JSON-LD (`telephone`), variables JS, sidebars, footer, FAQs, CTAs, blog (`blog-articulos.ts` + `.mdx`) y páginas de contenido (`.md`).

## NO modificado (intencional)

- **Teléfonos reales del directorio de bomberos** (`src/data/estaciones-*.ts` y tablas del directorio): son números públicos de las estaciones, no de la empresa. Sin cambios.
- `dist/` y `.astro/` (artefactos de build, gitignoreados): se regeneran en el próximo build/deploy.

## Verificación

- `grep` de control: **0** ocurrencias del número anterior en `src/` y `public/`.
- Nuevo número presente: 52 display + 98 dígitos.
- Comillas balanceadas en `site.ts` y `blog-articulos.ts` (sin romper sintaxis).

## Commits

- `2808ebfa` — reemplazo en `src/` (34 archivos).
- Este doc + actualización de `BOMBERO-SEO-Auditoria-2026-06-12.md` (alerta de número compartido marcada como resuelta).

## Pendiente para Frank

- Confirmar relación de marca con **FIREFIGHTER.mx** (compartían el número anterior).
- Verificar el número nuevo en Google Business Profile / GSC y demás perfiles externos.
