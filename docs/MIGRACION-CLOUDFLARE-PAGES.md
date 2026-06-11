# Migración a Cloudflare Pages — bombero.mx

**Actualizado:** 2026-06-11
**Estado del repo:** LISTO ✅ — config verificada con build local.

## Por qué

El sitio se sirve hoy desde **GitHub Pages** (detrás del proxy de Cloudflare). GH Pages **ignora `_headers` y `_redirects`**: verificado en producción — hoy NO se envían CSP, HSTS, X-Frame-Options ni ningún header de seguridad, y los redirects "server-side" no existen (solo funcionan los HTML de respaldo que genera Astro). **Cloudflare Pages** respeta ambos archivos de forma nativa → seguridad real + 301 reales + brotli + mejor caché (mejora LCP en campo).

---

## Qué ya está en el repo (no tocar a mano)

| Archivo | Rol |
|---------|-----|
| `public/_headers` | Headers de seguridad + caché. CSP con `script-src` **por hash sha256** (sin `unsafe-inline`); el resto endurecido. |
| `public/_redirects` | 301 reales (legacy/marketing + blog). Espejo de `redirects` en `astro.config.mjs`. |
| `scripts/gen-csp-hashes.mjs` | Último paso del build: calcula los hashes de los `<script>` inline y los inyecta en `dist/_headers`. |
| `CNAME` | `bombero.mx` (solo lo usa GH Pages; CF Pages no lo necesita). |
| `.github/workflows/deploy.yml` | Deploy actual a GH Pages. Se retira tras el cutover. |

`npm run build` produce `dist/` completo: Astro → índice Pagefind → hashes CSP. **No editar la línea CSP de `dist/_headers` a mano** (se regenera cada build).

---

## Pre-flight (antes de tocar el dashboard)

1. **DNS ya en Cloudflare** (es el caso). Confirma en Cloudflare → DNS que `bombero.mx` (y `www` si existe) apuntan al proxy de Cloudflare (nube naranja).
2. ⚠️ **HSTS `includeSubDomains`**: el header fuerza HTTPS en TODOS los subdominios. Antes del cutover confirma que cualquier subdominio en uso (p.ej. `mail.bombero.mx`) soporta HTTPS, o se volverá inaccesible. La directiva `preload` está presente pero **NO** se activa sola — no envíes el dominio a hstspreload.org hasta estar 100% seguro (revertirlo tarda semanas).
3. Build local en verde:
   ```bash
   npm run build
   # esperado al final: "[csp] OK — N hashes inline inyectados…"
   ```

---

## Pasos en el dashboard de Cloudflare (~10 min)

1. **Workers & Pages → Create application → Pages → Connect to Git** → autoriza GitHub → selecciona `Origenlab/BOMBERO`.
2. **Build settings**:
   - Production branch: `main`
   - Framework preset: `Astro` (o None)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variable de entorno: `NODE_VERSION = 20`
3. **Save and Deploy** → espera el primer build → abre el preview `*.pages.dev` y haz el smoke test (abajo) **sobre el preview**, antes de tocar el dominio real.
4. **Custom domains → Set up a custom domain → `bombero.mx`**. Como el DNS ya está en Cloudflare, el registro se ajusta solo (puede tardar unos minutos en emitir el certificado).
5. **www**: añade también `www.bombero.mx` como custom domain y crea una **Redirect Rule** (Rules → Redirect Rules) `www.bombero.mx/* → https://bombero.mx/$1` (301), para no dividir señal SEO. Define un único canónico (apex).

---

## Smoke test (en el preview `*.pages.dev` y luego en producción)

```bash
DOM="https://bombero.mx"   # o el *.pages.dev en la fase de preview

# 1) Headers de seguridad presentes
curl -sI "$DOM/" | grep -iE "content-security-policy|strict-transport|x-frame-options|x-content-type|referrer-policy|cross-origin-opener"

# 2) La CSP debe traer hashes sha256 en script-src y NO 'unsafe-inline'
curl -sI "$DOM/" | grep -i content-security-policy | grep -q "sha256-" && echo "CSP hashes OK" || echo "FALLA CSP"

# 3) 301 reales
curl -sI "$DOM/trajes-bombero" | grep -i "location\|^HTTP"      # → 301 a /productos/trajes-para-bomberos/
curl -sI "$DOM/catalogo"       | grep -i "location\|^HTTP"      # → 301 a /productos/

# 4) Caché inmutable en assets hasheados
curl -sI "$DOM/_astro/" 2>/dev/null  # los /_astro/*.css|js deben traer Cache-Control: max-age=31536000, immutable

# 5) Sin errores de consola por CSP: abrir el sitio en el navegador → DevTools → Console.
#    Verificar que cargan analytics (rybbit/truconversion), búsqueda Pagefind (wasm) e imágenes del CDN.
```

Checklist visual en el navegador (preview): home, una página de producto (p.ej. trajes), un artículo de blog, directorio y cotizar. Revisar Console: **0 errores `Refused to … because it violates the … Content Security Policy`**.

---

## Post-cutover (limpieza, solo cuando producción esté verde)

1. GitHub → repo → **Settings → Pages → Source: None** (apaga GH Pages).
2. Eliminar `.github/workflows/deploy.yml` (CF Pages ya despliega en cada push a `main`).
3. Opcional: eliminar `CNAME` de la raíz (era solo para GH Pages).
4. En CF: **Caching → Purge Everything** una vez, para no servir respuestas viejas de GH Pages cacheadas en el edge.

---

## Rollback (si algo falla en producción)

1. CF Pages → **Custom domains → quitar `bombero.mx`**.
2. GitHub → Settings → Pages → Source: `GitHub Actions` (reactivar). `deploy.yml` sigue en git.
3. (Si rompió la CSP) identificar la directiva ofensora con el error de consola y ajustar `public/_headers`; commit → CF redeploya solo.

---

## Notas técnicas de seguridad (qué cambió y por qué)

- **CSP `script-src` por hash**: el build calcula el sha256 de cada `<script>` inline determinista y reemplaza el placeholder `'unsafe-inline'` de `public/_headers`. Verificado: el HTML no usa handlers inline (`onclick=`, etc.) ni `javascript:` → la CSP por hash no rompe interacciones. El único script externo es `/_astro/*.js` (self). Si un cambio futuro mete un `<script>` inline no determinista (contenido distinto por página), el build aborta con ">30 hashes": revisar ese script.
- **`style-src 'unsafe-inline'` se mantiene a propósito**: Astro inlinea CSS crítico y hay atributos `style=`; hashear estilos es inviable y el riesgo de inyección de estilos es bajo. Es una decisión consciente, no un descuido.
- **`'wasm-unsafe-eval'`**: necesario para la búsqueda Pagefind (usa WebAssembly).
- **COEP eliminado** (antes `credentialless`): no aportaba nada (el sitio no usa cross-origin isolation / SharedArrayBuffer) y podía bloquear el iframe de TruConversion e imágenes del CDN. Se sustituyó por `Cross-Origin-Resource-Policy: same-origin` (anti-hotlink, sin riesgo de romper terceros).
- **`X-XSS-Protection: 0`**: el filtro legacy se desactiva siguiendo OWASP (puede introducir bugs en navegadores viejos); la CSP cubre XSS.
- **CSP endurecida**: añadidos `object-src 'none'`, `manifest-src 'self'`, `upgrade-insecure-requests`; `frame-ancestors 'none'` + `X-Frame-Options: DENY` (anti-clickjacking).
- **Allowlist de terceros**: `app.rybbit.io` y `app.truconversion.com` (script/connect), `*.exactdn.com` (img CDN), `wa.me` (connect/form). Si se añade otro tercero, sumarlo a la directiva correspondiente en `public/_headers`.

## Mantener sincronizado

`public/_redirects` (301 nativos CF) y `redirects` de `astro.config.mjs` (páginas HTML de respaldo) deben coincidir mientras GH Pages siga activo como rollback. Tras retirar GH Pages, los redirects pueden vivir solo en `_redirects`.
