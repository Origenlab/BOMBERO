/**
 * /sitemap-directorio.xml
 * Sitemap dedicado del directorio (separado del sitemap-index principal).
 * Aprovecha el crawl budget: cada URL del directorio con su lastmod real.
 *
 * Incluye:
 *   - hub `/directorio/`
 *   - 32 estados `/directorio/{estado}/`
 *   - 666+ fichas `/directorio/{estado}/{slug}/`
 *   - hub municipios + landings municipio
 *   - hub especialidades + landings especialidad
 *   - página teléfonos por estado
 */
import type { APIRoute } from "astro";
import {
  ESTACIONES_POR_ESTADO_SLUG,
  getAllMunicipios,
  getAllEspecialidades,
} from "@lib/directorio-index";
import { DIRECTORIO_VERIFICADO_ISO } from "@data/directorio-stats";

const SITE = "https://bombero.mx";

interface Url {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const GET: APIRoute = async () => {
  const urls: Url[] = [];

  // Hub nacional
  urls.push({
    loc: `${SITE}/directorio/`,
    lastmod: DIRECTORIO_VERIFICADO_ISO,
    changefreq: "weekly",
    priority: "1.0",
  });

  for (const estadoSlug of Object.keys(ESTACIONES_POR_ESTADO_SLUG)) {
    const ests = ESTACIONES_POR_ESTADO_SLUG[estadoSlug];

    // Estado
    urls.push({
      loc: `${SITE}/directorio/${estadoSlug}/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "weekly",
      priority: "0.92",
    });
    // Página de teléfonos del estado
    urls.push({
      loc: `${SITE}/directorio/${estadoSlug}/telefonos/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "weekly",
      priority: "0.88",
    });
    // Hub municipios
    urls.push({
      loc: `${SITE}/directorio/${estadoSlug}/municipios/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "weekly",
      priority: "0.86",
    });
    // Hub especialidades
    urls.push({
      loc: `${SITE}/directorio/${estadoSlug}/especialidades/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "weekly",
      priority: "0.84",
    });

    // Fichas de estación
    for (const est of ests) {
      urls.push({
        loc: `${SITE}/directorio/${estadoSlug}/${est.slug}/`,
        lastmod: DIRECTORIO_VERIFICADO_ISO,
        changefreq: "monthly",
        priority: "0.78",
      });
    }
  }

  // Landings por municipio
  for (const m of getAllMunicipios()) {
    urls.push({
      loc: `${SITE}/directorio/${m.estadoSlug}/municipios/${m.municipioSlug}/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "monthly",
      priority: "0.80",
    });
  }

  // Landings por especialidad
  for (const e of getAllEspecialidades()) {
    urls.push({
      loc: `${SITE}/directorio/${e.estadoSlug}/especialidades/${e.especialidadSlug}/`,
      lastmod: DIRECTORIO_VERIFICADO_ISO,
      changefreq: "monthly",
      priority: "0.78",
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
