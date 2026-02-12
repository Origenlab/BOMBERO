/**
 * ─── Content Collections Configuration ───
 * Defines schemas for blog posts and static pages.
 * Astro validates frontmatter at build time using these schemas.
 */
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Equipo Editorial"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),

    // SEO overrides (optional)
    seoTitle: z.string().max(70).optional(),
    seoDescription: z.string().max(160).optional(),
    noindex: z.boolean().default(false),

    // CTA (optional per-post override)
    cta: z
      .object({
        label: z.string(),
        href: z.string(),
      })
      .optional(),
  }),
});

const pages = defineCollection({
  type: "content",
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

export const collections = { blog, pages };
