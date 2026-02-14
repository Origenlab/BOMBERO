/**
 * ─── Content Collections Configuration ───
 * Defines schemas for static pages.
 * Astro validates frontmatter at build time using these schemas.
 */
import { defineCollection, z } from "astro:content";

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

export const collections = { pages };
