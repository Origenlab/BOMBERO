#!/usr/bin/env node
/**
 * gen-csp-hashes.mjs — Post-build CSP hardening (2026-06-10)
 * ──────────────────────────────────────────────────────────────────
 * Escanea todos los HTML de dist/, calcula el hash sha256 de cada
 * <script> inline único (Astro inlinea los scripts hoisted pequeños)
 * y reescribe la línea Content-Security-Policy de dist/_headers
 * reemplazando 'unsafe-inline' por la lista de hashes.
 *
 * Así la CSP es estricta (los scripts inline legítimos están
 * whitelisteados por hash; cualquier inyección XSS inline NO ejecuta)
 * sin tener que externalizar los scripts ni mantener hashes a mano.
 *
 * Se ejecuta como último paso de `npm run build`.
 * Nota: los bloques <script type="application/ld+json"> son data
 * blocks — CSP no los bloquea — y se excluyen del hashing.
 */
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const HEADERS_FILE = join(DIST, "_headers");

if (!existsSync(HEADERS_FILE)) {
  console.error("[csp] dist/_headers no existe — ¿corrió astro build?");
  process.exit(1);
}

/** Walk recursivo compatible con Node 18+ (sin fs.globSync, que requiere Node 22) */
function walkHtml(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walkHtml(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}
const htmlFiles = walkHtml(DIST);
const hashes = new Set();
const scriptRe = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;

for (const f of htmlFiles) {
  const html = readFileSync(f, "utf8");
  for (const m of html.matchAll(scriptRe)) {
    const [, attrs, body] = m;
    if (/ld\+json/.test(attrs)) continue; // data block, no ejecutable
    const h = createHash("sha256").update(body, "utf8").digest("base64");
    hashes.add(`'sha256-${h}'`);
  }
}

if (hashes.size === 0) {
  console.warn("[csp] 0 scripts inline encontrados — no se modifica _headers");
  process.exit(0);
}
if (hashes.size > 30) {
  console.error(`[csp] ${hashes.size} hashes únicos — demasiados; revisar scripts no deterministas`);
  process.exit(1);
}

const headers = readFileSync(HEADERS_FILE, "utf8");
const hashList = [...hashes].sort().join(" ");
const updated = headers.replace(
  /(Content-Security-Policy:[^\n]*script-src[^;]*?)'unsafe-inline'/,
  `$1${hashList}`
);

if (updated === headers) {
  console.warn("[csp] no se encontró 'unsafe-inline' en script-src de _headers — sin cambios");
  process.exit(0);
}

writeFileSync(HEADERS_FILE, updated);
console.log(`[csp] OK — ${hashes.size} hashes inline inyectados en dist/_headers (${htmlFiles.length} HTML escaneados)`);
