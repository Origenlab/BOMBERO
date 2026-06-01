/**
 * /api/og/estado/{estado}.svg
 * Open Graph image dinámica para páginas de estado.
 */
import type { APIRoute } from "astro";
import { renderOgSvg } from "@utils/og-svg";
import { getEstadoInfo, getEstacionesEstado, ESTACIONES_POR_ESTADO_SLUG } from "@utils/directorio-index";

export function getStaticPaths() {
  return Object.keys(ESTACIONES_POR_ESTADO_SLUG).map((slug) => ({
    params: { estado: slug },
    props: { estadoSlug: slug },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const { estadoSlug } = props as { estadoSlug: string };
  const info = getEstadoInfo(estadoSlug);
  if (!info) return new Response("not found", { status: 404 });
  const ests = getEstacionesEstado(estadoSlug);

  const svg = renderOgSvg({
    scope: "estado",
    title: `Bomberos en ${info.nombre}`,
    subtitle: `Directorio oficial · Capital: ${info.capital}`,
    stat: `${ests.length}+ estaciones`,
    tags: ["24/7", info.codigo, "NFPA", "Emergencia 911"],
    badge: `${info.nombre} · ${info.codigo}`,
  });

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
