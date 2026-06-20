
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    image: z.string().optional(),
    noindex: z.boolean().default(false),

    // Hero section (optional)
    hero: z
      .object({
        title: z.string(),
        description: z.string().optional(),
        // Campos opcionales consumidos por HeroSection vía [...slug].astro.
        // El frontmatter actual no los usa (se aplican fallbacks), pero el
        // schema debe reflejar el contrato del template para type-safety.
        badge: z.string().optional(),
        blocks: z
          .tuple([
            z.object({ title: z.string(), text: z.string() }),
            z.object({ title: z.string(), text: z.string() }),
          ])
          .optional(),
        primaryCTA: z
          .object({ label: z.string(), href: z.string() })
          .optional(),
        secondaryCTA: z
          .object({ label: z.string(), href: z.string() })
          .optional(),
        backgroundImage: z.string().optional(),
      })
      .optional(),
  }),
});

/* ──────────────────────────────────────────────────────────────────
   Colección `productos` (2026-06-10)
   Páginas de variante de producto (nivel L5) como datos JSON,
   renderizadas por src/pages/productos/[...slug].astro con ProductoLayout.
   El id de cada entrada (ruta del archivo sin .json) ES el slug de la URL:
   guantes-para-bomberos/hazmat/nitrilo.json → /productos/guantes-para-bomberos/hazmat/nitrilo/
   Schema espejo de la interface Props de ProductoLayout — si el layout
   cambia sus props, actualizar aquí también.
   Para migrar más variantes: node scripts/extract-producto-data.mjs <categoria>
   ────────────────────────────────────────────────────────────────── */

const linkItem = z.object({ label: z.string(), href: z.string() });
const linkItemTag = z.object({ label: z.string(), href: z.string(), tag: z.string() });
const labelValor = z.object({ label: z.string(), valor: z.string() });

const productos = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/productos" }),
  schema: z.object({
    // SEO
    // NOTA: ~80 descriptions heredadas miden 171–256 chars (Google trunca ~160;
    // la peor: capuchas/particulada con 256). Límite laxo a propósito para migrar
    // HTML idéntico; reescribirlas es tarea editorial — al terminar, bajar a .max(170).
    title: z.string().max(75),
    description: z.string().max(260),
    keywords: z.array(z.string()).optional(),
    canonical: z.string().startsWith("/productos/").endsWith("/"),
    image: z.string().optional(),

    breadcrumb: z.array(z.object({ label: z.string(), href: z.string().optional() })),

    // Hero
    heroBadge: z.string(),
    heroTitle: z.string(),
    heroTitleHighlight: z.string(),
    heroSubtitle: z.string(),
    heroSeoBlocks: z.array(z.object({ title: z.string(), text: z.string() })).length(2),

    ctaBarQuote: z.string(),

    // Ficha de producto
    productoCategoria: z.string(),
    productoBadges: z.array(z.object({ modifier: z.string(), text: z.string() })),
    productoMasVendido: z.boolean().optional(),
    productoSoldLabel: z.string().optional(),
    productoTitle: z.string(),
    productoTitleSub: z.string(),
    productoDesc: z.string(),
    productoFeatures: z.array(z.string()),
    productoAppTags: z.array(z.string()),

    gallery: z.array(z.object({ src: z.string(), alt: z.string() })),

    // Capas / construcción
    capasEyebrow: z.string().optional(),
    capasTitle: z.string(),
    capasDesc: z.string(),
    capas: z.array(
      z.object({
        num: z.string(),
        titulo: z.string(),
        descripcion: z.string(),
        specs: z.array(labelValor),
        color: z.enum(["ember", "smoke", "fire"]),
      })
    ),

    // Especificaciones
    specsEyebrow: z.string().optional(),
    specsTitle: z.string().optional(),
    specsDesc: z.string().optional(),
    especificaciones: z.array(z.object({ categoria: z.string(), label: z.string(), valor: z.string() })),
    catClass: z.record(z.string(), z.string()).optional(),

    // Aplicaciones
    aplicacionesLabel: z.string().optional(),
    aplicacionesTitle: z.string(),
    aplicacionesContent: z.string(),
    aplicaciones: z.array(z.object({ icono: z.string().optional(), titulo: z.string(), desc: z.string() })),

    // Certificaciones
    certsEyebrow: z.string().optional(),
    certsTitle: z.string(),
    certsDesc: z.string(),
    certItems: z.array(z.object({ code: z.string(), desc: z.string() })),

    // Sidebar
    specsRapidas: z.array(labelValor),
    otrosModelos: z.array(linkItem),
    otrosModelosSeeAllHref: z.string(),
    epp: z.array(linkItemTag),
    eppSeeAllHref: z.string().optional(),
    articulos: z.array(linkItemTag),
    directorioLinks: z.array(linkItem),

    // FAQ
    faqTitle: z.string(),
    faqDescription: z.string(),
    faqDocTitle: z.string().optional(),
    faqDocDesc: z.string().optional(),
    faqDocCtaHref: z.string().optional(),
    faqDocCtaText: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),

    // Relacionados
    relacionadosLabel: z.string().optional(),
    relacionadosTitle: z.string().optional(),
    relacionadosDesc: z.string().optional(),
    relacionados: z.array(
      z.object({
        title: z.string(),
        badge: z.string(),
        description: z.string(),
        href: z.string(),
        buttonText: z.string(),
        image: z.string(),
      })
    ),

    whyChooseImages: z.array(z.string()).optional(),
  }).strict(), // error explícito si una página trae props fuera del contrato de ProductoLayout
});

export const collections = { pages, productos };
