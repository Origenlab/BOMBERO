# Migración a Cloudflare Pages — bombero.mx

**Fecha:** 2026-06-10
**Motivo:** El sitio se sirve hoy desde **GitHub Pages** (detrás del proxy de Cloudflare). GH Pages **ignora `public/_headers` y `public/_redirects`**: verificado el 10/06/2026, producción no envía CSP, HSTS, X-Frame-Options ni ningún header de seguridad. Cloudflare Pages sí los respeta nativamente.

## Estado del repo: LISTO ✅

- `public/_headers` — headers de seguridad + cache, con CSP estricta (sin `unsafe-inline`; hashes sha256 generados automáticamente en build por `scripts/gen-csp-hashes.mjs`)
- `public/_redirects` — redirects a nivel server (hoy muertos en GH Pages)
- `CNAME` — bombero.mx
- `npm run build` — produce `dist/` completo: Astro + índice Pagefind + CSP hashes

## Pasos en el dashboard de Cloudflare (haces tú, ~10 min)

1. **Workers & Pages → Create application → Pages → Connect to Git** → autoriza GitHub → selecciona `Origenlab/BOMBERO`.
2. Configuración de build:
   - Production branch: `main`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variables de entorno: `NODE_VERSION = 20`
3. **Save and Deploy** → espera el primer build → verifica el preview `*.pages.dev`.
4. **Custom domains → Add → bombero.mx** (y `www.bombero.mx` si aplica). Como el DNS ya está en Cloudflare, el CNAME se ajusta solo.
5. Verificación post-cutover (cualquier terminal):
   ```bash
   curl -sI https://bombero.mx/ | grep -i "content-security\|strict-transport\|x-frame"
   ```
   Deben aparecer los 3 headers.

## Después del cutover (limpieza)

1. Desactivar GitHub Pages: repo → Settings → Pages → Source: None.
2. Eliminar `.github/workflows/deploy.yml` (el deploy lo hace CF Pages al detectar push a main).
3. Opcional: eliminar `CNAME` de la raíz (era para GH Pages; CF Pages no lo necesita).

## Rollback

Si algo falla: en CF Pages → Custom domains → quitar bombero.mx, y reactivar GitHub Pages. El workflow `deploy.yml` sigue en el historial de git.

## Notas técnicas

- La CSP usa hashes por build: **no editar la línea CSP de `dist/_headers` a mano** — se regenera. La fuente es `public/_headers` (con `'unsafe-inline'` como placeholder que el script reemplaza).
- `'wasm-unsafe-eval'` se conserva: Pagefind usa WebAssembly para la búsqueda.
- Si un cambio añade un script inline nuevo, el hash se recalcula solo en el siguiente build. Si el build falla con ">30 hashes", hay un script no determinista (contenido distinto por página) — revisarlo.
