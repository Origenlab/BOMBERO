import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

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
      lastmod: new Date(),
      // Custom serialization for SEO priorities
      serialize: (item) => {
        // Homepage - highest priority
        if (item.url === "https://bombero.mx/") {
          return { ...item, priority: 1.0, changefreq: "daily" };
        }
        // Product pages - high priority
        if (item.url.includes("/productos/")) {
          return { ...item, priority: 0.9, changefreq: "weekly" };
        }
        // Category pages - high priority
        if (item.url.includes("/categoria/")) {
          return { ...item, priority: 0.85, changefreq: "weekly" };
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
  trailingSlash: "never",

  // ─── Compression ───
  compressHTML: true,

  // ─── Redirects for SEO ───
  redirects: {
    // Common misspellings and variations
    "/equipo-bomberos": "/productos",
    "/trajes-bombero": "/productos/epp-bomberos",
    "/cascos-bombero": "/productos/cascos",
    "/extintores-mexico": "/productos/extintores",
    "/equipo-scba": "/productos/scba",
    // Old URLs (if any)
    "/tienda": "/productos",
    "/catalogo": "/productos",
  },
});
