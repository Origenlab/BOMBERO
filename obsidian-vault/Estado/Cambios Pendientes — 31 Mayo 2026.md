---
proyecto: BOMBERO
fecha: 2026-05-31
estado: pendiente de commit + push
tags:
  - cambios
  - pendientes
  - git
---

# Cambios Pendientes — 31 Mayo 2026

Inventario completo del working tree de `~/Documents/Claude/Projects/BOMBERO` al **31 may 2026**, dividido por **autoría** y **tipo**.

**Último commit (HEAD):** `e67133f7 fix: revert blog-articulos.ts to last working version to fix build`

---

## 🟢 Sprints SEO/GEO del directorio (Claude — sesión actual)

### Archivos NUEVOS

```
AUDITORIA-DIRECTORIO.md
MEJORAS-DIRECTORIO-APLICADAS.md
obsidian-vault/                                ← este vault
public/llms.txt
public/llms-full.txt
src/data/directorio-stats.ts
src/components/directorio/DirectorioSearch.astro
src/components/directorio/EmergencyNumbersBar.astro
src/components/directorio/FAQDirectorio.astro
src/components/directorio/MunicipiosPhonesTable.astro
src/components/directorio/StationCTA.astro
src/components/directorio/VerifiedBadge.astro
```

### Archivos MODIFICADOS

```
package.json                                   ← Pagefind glob: blog→{blog,directorio}
public/robots.txt                              ← AI bots permitidos + Bytespider bloqueado
src/LAYOUTS/BaseLayout.astro                   ← preconnect, scripts diferidos, MutationObserver
src/LAYOUTS/DirectorioEstadoLayout.astro       ← FAQ, buscador, tabla municipios, verifiedBadge
src/LAYOUTS/EstacionLayout.astro               ← FAQ + StationCTA + schemas extendidos
src/pages/directorio/index.astro               ← conteos reales, FAQ, buscador
src/pages/directorio/[estado].astro            ← neutralizado (getStaticPaths = [])
src/pages/directorio/yucatan/[slug].astro      ← Yucatan → Yucatán
```

> **Sugerencia de mensaje de commit:**
> `seo+geo: directorio — FAQ schema, búsqueda Pagefind, tabla municipios, llms.txt, AI bots, conteos reales`

---

## 🟡 Cambios PRE-EXISTENTES en local (autoría previa — Frank o sesiones anteriores)

Estos archivos ya estaban modificados/nuevos en local antes de esta sesión. Decidir caso por caso si subir o descartar.

### Modificados — no relacionados al directorio

```
astro.config.mjs                               ← revisar diff
src/LAYOUTS/BlogLayout.astro
src/components/CategoryCard.astro
src/components/Footer.astro
src/components/Header.astro
src/components/Pagination.astro
src/components/ProductCard.astro
src/components/TopBar.astro
src/data/blog-articulos.ts
src/data/blog-productos-map.ts
src/pages/blog/index.astro
src/pages/blog/pagina/[page].astro
src/pages/cotizar/index.astro
src/pages/index.astro
src/pages/nosotros/index.astro
src/pages/productos/index.astro
src/pages/productos/equipo-contra-incendios/hidrantes-gabinetes/index.astro
src/pages/productos/equipo-medico/index.astro
src/pages/productos/hazmat/index.astro
src/pages/productos/herramientas-rescate/index.astro
src/pages/productos/rescate-acuatico/index.astro
src/pages/productos/rescate-vertical/index.astro
src/pages/productos/scba/index.astro
src/pages/productos/tecnologia/index.astro
src/styles/global.css
src/styles/tokens.css
```

### Modificados — los 32 archivos de estado del directorio

> ⚠️ **Yo NO los toqué en esta sesión.** Las mejoras se propagaron vía `DirectorioEstadoLayout`. Estos cambios son previos.

```
src/pages/directorio/aguascalientes.astro
src/pages/directorio/baja-california.astro
src/pages/directorio/baja-california-sur.astro
src/pages/directorio/campeche.astro
src/pages/directorio/chiapas.astro
src/pages/directorio/chihuahua.astro
src/pages/directorio/ciudad-de-mexico.astro
src/pages/directorio/coahuila.astro
src/pages/directorio/colima.astro
src/pages/directorio/durango.astro
src/pages/directorio/estado-de-mexico.astro
src/pages/directorio/guanajuato.astro
src/pages/directorio/guerrero.astro
src/pages/directorio/hidalgo.astro
src/pages/directorio/jalisco.astro
src/pages/directorio/michoacan.astro
src/pages/directorio/morelos.astro
src/pages/directorio/nayarit.astro
src/pages/directorio/nuevo-leon.astro
src/pages/directorio/oaxaca.astro
src/pages/directorio/puebla.astro
src/pages/directorio/queretaro.astro
src/pages/directorio/quintana-roo.astro
src/pages/directorio/san-luis-potosi.astro
src/pages/directorio/sinaloa.astro
src/pages/directorio/sonora.astro
src/pages/directorio/tabasco.astro
src/pages/directorio/tamaulipas.astro
src/pages/directorio/tlaxcala.astro
src/pages/directorio/veracruz.astro
src/pages/directorio/yucatan.astro
src/pages/directorio/zacatecas.astro
```

### Archivos NUEVOS — no relacionados al directorio

```
src/components/FAQQuote.astro
src/styles/mobile.css
src/pages/blog/gama-de-mexico-cumplimiento-nfpa-nom-002-stps.mdx
src/pages/blog/gama-de-mexico-distribuidor-elkhart-brass.mdx
src/pages/blog/gama-de-mexico-lider-equipo-contra-incendios.mdx
src/pages/blog/gama-de-mexico-logistica-nacional-equipos.mdx
src/pages/blog/gama-de-mexico-sectores-industriales-atendidos.mdx
```

---

## ⚠️ Antes de subir — decisión necesaria

### Opción A — Un solo commit gigante (rápido pero impuro)

```bash
cd ~/Documents/Claude/Projects/BOMBERO
git add -A
git commit -m "seo+geo: directorio (FAQ, búsqueda, tabla municipios, llms.txt, AI bots) + cambios previos blog/productos/layouts"
git push origin main
```

### Opción B — Commits separados por temática (recomendado)

```bash
cd ~/Documents/Claude/Projects/BOMBERO

# 1) Mis sprints del directorio
git add \
  AUDITORIA-DIRECTORIO.md MEJORAS-DIRECTORIO-APLICADAS.md \
  obsidian-vault/ \
  public/llms.txt public/llms-full.txt public/robots.txt \
  package.json \
  src/data/directorio-stats.ts \
  src/components/directorio/ \
  src/LAYOUTS/BaseLayout.astro \
  src/LAYOUTS/DirectorioEstadoLayout.astro \
  src/LAYOUTS/EstacionLayout.astro \
  src/pages/directorio/index.astro \
  src/pages/directorio/[estado].astro \
  src/pages/directorio/yucatan/[slug].astro
git commit -m "seo+geo: directorio — FAQ schema, Pagefind, tabla municipios, llms.txt, AI bots, conteos reales"

# 2) Cambios previos del blog (si los quieres)
git add src/data/blog-articulos.ts src/data/blog-productos-map.ts \
        src/pages/blog/ src/LAYOUTS/BlogLayout.astro \
        src/components/FAQQuote.astro
git commit -m "blog: cinco artículos Gama de México + ajustes layout"

# 3) Resto (layout/styles/productos previos)
git add -A
git commit -m "ui: ajustes Footer/Header/Pagination/styles + productos"

# 4) Push
git push origin main
```

### Opción C — Solo lo del directorio, descartar lo previo

```bash
cd ~/Documents/Claude/Projects/BOMBERO

# Guardar el resto a un stash por si lo recuperas
git stash -u -m "cambios-previos-pre-sprint-2026-05-31"

# Restaurar SOLO los archivos del sprint del directorio
git stash pop
# (luego git checkout -- en los archivos que no querías)
```

---

## Recomendación de Claude

**Opción B**. Es la que mejor preserva el historial: cada commit explica qué cambió. Si Frank dice *"sube los cambios"* sin precisar, hago **Opción A** para no bloquear.

---

## Enlaces

- Workflow base → [[../Workflows/Workflow — Subir Cambios a GitHub]]
- Estado del sitio → [[Estado del Sitio]]
- Mejoras aplicadas → [[Mejoras Directorio — Sprint 1-10]]
