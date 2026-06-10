#!/usr/bin/env node
/**
 * extract-producto-data.mjs — Migración de páginas de producto a Content Collection
 * ──────────────────────────────────────────────────────────────────────────────
 * Convierte páginas estáticas de variante de producto (frontmatter con datos +
 * un único <ProductoLayout .../>) en archivos JSON para la colección `productos`.
 *
 * Uso:
 *   node scripts/extract-producto-data.mjs src/pages/productos/guantes-para-bomberos
 *
 * Para cada index.astro que use ProductoLayout:
 *   1. Separa frontmatter y template.
 *   2. Elimina el import del layout; el resto del frontmatter son solo datos.
 *   3. Convierte los atributos del componente a un objeto literal.
 *   4. Compila TS → JS con esbuild (el de node_modules) y lo importa.
 *   5. Escribe src/content/productos/<ruta>/<variante>.json
 *
 * NO borra los .astro originales — eso se hace tras verificar el diff de HTML.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { pathToFileURL } from "node:url";
import { transformSync } from "esbuild";

const ROOT = dirname(new URL("..", import.meta.url).pathname + "x");
const PAGES_BASE = join(ROOT, "src/pages/productos");
const OUT_BASE = join(ROOT, "src/content/productos");
const TMP = join(ROOT, ".astro/.extract-tmp");

const target = process.argv[2];
if (!target) {
  console.error("Uso: node scripts/extract-producto-data.mjs <dir bajo src/pages/productos>");
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name === "index.astro") out.push(p);
  }
  return out;
}

/** Extrae los atributos de <ProductoLayout ... /> como entradas de objeto literal. */
function attrsToObjectLiteral(template) {
  const start = template.indexOf("<ProductoLayout");
  if (start === -1) return null;
  // localizar el "/>" de cierre respetando llaves y strings
  let i = start + "<ProductoLayout".length;
  let depth = 0, inStr = null, end = -1;
  while (i < template.length) {
    const c = template[i], prev = template[i - 1];
    if (inStr) {
      if (c === inStr && prev !== "\\") inStr = null;
    } else if (c === '"' || c === "'" || c === "`") inStr = c;
    else if (c === "{") depth++;
    else if (c === "}") depth--;
    else if (c === "/" && template[i + 1] === ">" && depth === 0) { end = i; break; }
    i++;
  }
  if (end === -1) throw new Error("No se encontró /> de ProductoLayout");
  const attrSrc = template.slice(start + "<ProductoLayout".length, end);

  // parsear atributos: nombre="..." | nombre={...} | nombre
  const entries = [];
  let j = 0;
  while (j < attrSrc.length) {
    while (j < attrSrc.length && /\s/.test(attrSrc[j])) j++;
    if (j >= attrSrc.length) break;
    const nameM = /^[A-Za-z_][A-Za-z0-9_]*/.exec(attrSrc.slice(j));
    if (!nameM) throw new Error(`Atributo ilegible en: ${attrSrc.slice(j, j + 60)}`);
    const name = nameM[0];
    j += name.length;
    while (j < attrSrc.length && /\s/.test(attrSrc[j])) j++;
    if (attrSrc[j] !== "=") { entries.push(`${name}: true`); continue; }
    j++; // saltar =
    while (j < attrSrc.length && /\s/.test(attrSrc[j])) j++;
    if (attrSrc[j] === '"') {
      const close = attrSrc.indexOf('"', j + 1);
      entries.push(`${name}: ${JSON.stringify(attrSrc.slice(j + 1, close))}`);
      j = close + 1;
    } else if (attrSrc[j] === "{") {
      let d = 1, k = j + 1, s = null;
      while (k < attrSrc.length && d > 0) {
        const c = attrSrc[k], prev = attrSrc[k - 1];
        if (s) { if (c === s && prev !== "\\") s = null; }
        else if (c === '"' || c === "'" || c === "`") s = c;
        else if (c === "{") d++;
        else if (c === "}") d--;
        k++;
      }
      entries.push(`${name}: (${attrSrc.slice(j + 1, k - 1)})`);
      j = k;
    } else throw new Error(`Valor de atributo inesperado para ${name}`);
  }
  return entries.join(",\n");
}

const files = walk(join(PAGES_BASE, target)).filter((f) =>
  readFileSync(f, "utf8").includes("ProductoLayout")
);

mkdirSync(TMP, { recursive: true });
let ok = 0;
const errors = [];

for (const file of files) {
  try {
    const src = readFileSync(file, "utf8");
    const fmMatch = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(src);
    if (!fmMatch) throw new Error("Sin frontmatter");
    const [, fm, template] = fmMatch;
    const dataCode = fm.replace(/^\s*import\s.*$/gm, "");
    const objLiteral = attrsToObjectLiteral(template);
    if (!objLiteral) throw new Error("Sin <ProductoLayout>");

    const moduleTs = `${dataCode}\nexport default {\n${objLiteral}\n};\n`;
    const js = transformSync(moduleTs, { loader: "ts", format: "esm" }).code;
    const tmpFile = join(TMP, `m${ok}-${Date.now()}.mjs`);
    writeFileSync(tmpFile, js);
    const mod = await import(pathToFileURL(tmpFile).href);
    const data = mod.default;

    // ruta de salida espejo de la URL: .../guantes-para-bomberos/hazmat/nitrilo.json
    const rel = relative(PAGES_BASE, dirname(file)); // guantes-.../hazmat/nitrilo
    const outFile = join(OUT_BASE, `${rel}.json`);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, JSON.stringify(data, null, 2) + "\n");
    console.log(`✓ ${rel} (${Object.keys(data).length} props)`);
    ok++;
  } catch (e) {
    errors.push(`${file}: ${e.message}`);
  }
}

rmSync(TMP, { recursive: true, force: true });
console.log(`\n${ok}/${files.length} extraídos`);
if (errors.length) {
  console.error("ERRORES:\n" + errors.join("\n"));
  process.exit(1);
}
