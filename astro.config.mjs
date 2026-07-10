import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { execSync } from "node:child_process";
import { existsSync, statSync, readdirSync, readFileSync } from "node:fs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// ─── Sitemap lastmod dinámico (2026-07-10, patrón EVENTECH) ─────────────────
// Resuelve URL → archivo fuente → fecha real (git log → mtime → omitir).
// Mejor omitir lastmod que mentir con la fecha del build.
const ROOT = dirname(fileURLToPath(import.meta.url));
const _dateCache = new Map();

function sourceDate(relPath) {
  if (_dateCache.has(relPath)) return _dateCache.get(relPath);
  let date = null;
  const abs = join(ROOT, relPath);
  if (existsSync(abs)) {
    try {
      const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
        cwd: ROOT,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (out) date = new Date(out);
    } catch {}
    if (!date) {
      try {
        date = statSync(abs).mtime;
      } catch {}
    }
  }
  _dateCache.set(relPath, date);
  return date;
}

// Artículos data-driven del blog: el slug vive como clave en src/data/blog-*.ts
let _blogRegistry = null;
function blogRegistryFileFor(slug) {
  if (_blogRegistry === null) {
    _blogRegistry = [];
    try {
      const dataDir = join(ROOT, "src/data");
      for (const f of readdirSync(dataDir)) {
        if (/^blog-(articulos|trajes)/.test(f) && f.endsWith(".ts")) {
          _blogRegistry.push({
            rel: `src/data/${f}`,
            text: readFileSync(join(dataDir, f), "utf8"),
          });
        }
      }
    } catch {}
  }
  const needle = `"${slug}"`;
  for (const f of _blogRegistry) {
    if (f.text.includes(needle)) return f.rel;
  }
  return null;
}

function lastmodForUrl(url) {
  const path = new URL(url).pathname.replace(/\/+$/, "");
  const rel = path === "" ? "index" : path.replace(/^\//, "");
  const parts = rel.split("/");
  const last = parts[parts.length - 1];
  const candidates = [
    `src/pages/${rel}/index.astro`,
    `src/pages/${rel}.astro`,
    `src/pages/${rel}/index.mdx`,
    `src/pages/${rel}.mdx`,
    `src/pages/${rel}/index.md`,
    `src/pages/${rel}.md`,
  ];
  // Content collections
  if (parts.length === 1) candidates.push(`src/content/pages/${last}.md`);
  if (parts[0] === "productos" && parts.length > 1) {
    const sub = parts.slice(1).join("/");
    candidates.push(`src/content/productos/${sub}.json`);
    candidates.push(`src/content/productos/${sub}.md`);
  }
  for (const c of candidates) {
    const d = sourceDate(c);
    if (d) return d;
  }
  // Blog registry (artículos en src/data/blog-articulos*.ts / blog-trajes-*.ts)
  if (parts[0] === "blog" && parts.length === 2) {
    const f = blogRegistryFileFor(last);
    if (f) {
      const d = sourceDate(f);
      if (d) return d;
    }
  }
  // Directorio: estaciones y municipios salen de src/data/estaciones-<estado>.ts
  if (parts[0] === "directorio" && parts.length >= 2) {
    const d = sourceDate(`src/data/estaciones-${parts[1]}.ts`);
    if (d) return d;
  }
  return null; // sin fuente clara → omitir lastmod
}

export default defineConfig({
  // ─── Site URL (required for sitemap, canonical URLs, OG images) ───
  site: "https://bombero.mx",
  base: "/",

  // ─── Integrations ───
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/draft/") && !page.includes("/api/"),
      changefreq: "weekly",
      priority: 0.7,
      // Custom serialization for SEO priorities
      serialize: (item) => {
        // lastmod real por archivo fuente (git log → mtime → omitir).
        // Antes: lastmod: new Date() → las 1724 URLs con la fecha del build.
        const lm = lastmodForUrl(item.url);
        if (lm) {
          item.lastmod = lm.toISOString();
        } else {
          delete item.lastmod;
        }
        // Homepage - highest priority
        if (item.url === "https://bombero.mx/") {
          return { ...item, priority: 1.0, changefreq: "daily" };
        }
        // Product pages - high priority
        if (item.url.includes("/productos/")) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        // Blog category listings - below posts (son páginas de listado, no contenido)
        if (item.url.includes("/blog/categoria/")) {
          return { ...item, priority: 0.6, changefreq: "weekly" };
        }
        // Services pages - medium-high priority
        if (item.url.includes("/servicios") || item.url.includes("/capacitacion")) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }
        // Contact and quote pages - medium priority
        if (item.url.includes("/contacto") || item.url.includes("/cotizar")) {
          return { ...item, priority: 0.75, changefreq: "monthly" };
        }
        // Blog posts - medium priority
        if (item.url.includes("/blog/")) {
          return { ...item, priority: 0.7, changefreq: "weekly" };
        }
        // About and other pages - lower priority
        if (item.url.includes("/nosotros") || item.url.includes("/privacidad") || item.url.includes("/terminos")) {
          return { ...item, priority: 0.5, changefreq: "monthly" };
        }
        // Default
        return { ...item, priority: 0.6, changefreq: "weekly" };
      },
      // i18n configuration for Mexico
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
        },
      },
    }),
  ],

  // ─── Markdown Configuration ───
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },

  // ─── Image Optimization ───
  image: {
    domains: ["bombero.mx"],
    remotePatterns: [{ protocol: "https" }],
  },

  // ─── Build Configuration ───
  build: {
    inlineStylesheets: "auto",
    // Generate clean URLs
    format: "directory",
  },

  // ─── Dev Server ───
  server: {
    port: 4321,
  },

  // ─── Prefetch (performance + SEO) ───
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },

  // ─── Trailing Slash (SEO consistency) ───
  // Cambiado a "always" para coincidir con build.format: "directory"
  // Esto evita redirects 301 innecesarios de /blog → /blog/
  trailingSlash: "always",

  // ─── Compression ───
  compressHTML: true,

  // ─── Redirects for SEO ───
  redirects: {
    // Common misspellings and variations
    "/equipo-bomberos": "/productos/",
    "/trajes-bombero": "/productos/trajes-para-bomberos/",
    "/cascos-bombero": "/productos/cascos-para-bomberos/",
    "/extintores-mexico": "/productos/extintores/",
    "/equipo-scba": "/productos/scba/",
    // Old URLs (if any)
    "/tienda": "/productos/",
    "/catalogo": "/productos/",
    // Fix 404: Kanasín slug con acento → sin acento (04/Mar/2026)
    "/directorio/yucatan/yuc-kanasín/": "/directorio/yucatan/yuc-kanasin/",

    // Gama de México: legacy .mdx slugs → versiones humanizadas en registry (31/May/2026)
    "/blog/gama-de-mexico-lider-equipo-contra-incendios/": "/blog/gama-de-mexico-aliado-industria-mexicana/",
    "/blog/gama-de-mexico-distribuidor-elkhart-brass/": "/blog/gama-de-mexico-elkhart-brass-distribuidor-autorizado/",
    "/blog/gama-de-mexico-cumplimiento-nfpa-nom-002-stps/": "/blog/gama-de-mexico-cumplimiento-normativo-nfpa-mexico/",
    "/blog/gama-de-mexico-logistica-nacional-equipos/": "/blog/gama-de-mexico-logistica-nacional-cdmx-queretaro/",
    "/blog/gama-de-mexico-sectores-industriales-atendidos/": "/blog/gama-de-mexico-sectores-industriales-mexico/",
  },
  // ─── Vite alias (mirror of tsconfig paths) ───
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
        "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
  },
});
