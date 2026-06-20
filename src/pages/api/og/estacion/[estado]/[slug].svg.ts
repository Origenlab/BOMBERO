/**
 * /api/og/estacion/{estado}/{slug}.svg
 * Open Graph image dinámica para cada ficha de estación.
 */
import type { APIRoute } from "astro";
import { renderOgSvg } from "@lib/og-svg";
import {
  ESTACIONES_POR_ESTADO_SLUG,
  getEstadoInfo,
} from "@lib/directorio-index";

export function getStaticPaths() {
  const paths: { params: { estado: string; slug: string }; props: any }[] = [];
  for (const [estadoSlug, ests] of Object.entries(ESTACIONES_POR_ESTADO_SLUG)) {
    for (const e of ests) {
      paths.push({
        params: { estado: estadoSlug, slug: e.slug },
        props: { estadoSlug, estacion: e },
      });
    }
  }
  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { estadoSlug, estacion } = props as { estadoSlug: string; estacion: any };
  const info = getEstadoInfo(estadoSlug);
  if (!info) return new Response("not found", { status: 404 });

  const tags = [
    ...(estacion.servicios ?? []).slice(0, 3),
    "24/7",
  ];

  const svg = renderOgSvg({
    scope: "estacion",
    title: estacion.nombreCorto ?? estacion.nombre,
    subtitle: `${estacion.municipio ?? estacion.ciudad}, ${info.nombre} · ${estacion.telefono ?? "911"}`,
    stat: estacion.tiempoRespuesta ? `⏱ ${estacion.tiempoRespuesta}` : "24/7",
    tags,
    badge: `${info.codigo} · ${estacion.municipio ?? estacion.ciudad}`,
  });

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
