import rss from '@astrojs/rss';
import { g as getAllArticulos } from '../../chunks/blog-articulos_BGTJ_V6r.mjs';
export { renderers } from '../../renderers.mjs';

async function GET(context) {
  const articulos = getAllArticulos();
  return rss({
    title: "Blog BOMBERO.MX — Artículos para Bomberos",
    description: "Artículos técnicos sobre equipo para bomberos, normativas NFPA, técnicas de rescate, mantenimiento de EPP y guías profesionales para cuerpos de bomberos y brigadas industriales en México.",
    site: context.site ?? "https://bombero.mx",
    items: articulos.map((articulo) => ({
      title: articulo.titulo,
      pubDate: /* @__PURE__ */ new Date(),
      // Sin fechas en artículos, usar fecha actual
      description: articulo.excerpt,
      link: `/blog/${articulo.slug}`,
      categories: [articulo.categoria, ...articulo.tags.slice(0, 3)],
      author: articulo.autor
    })),
    customData: `
      <language>es-MX</language>
      <copyright>© ${(/* @__PURE__ */ new Date()).getFullYear()} BOMBERO.MX - Todos los derechos reservados</copyright>
      <managingEditor>contacto@bombero.mx (BOMBERO.MX)</managingEditor>
      <webMaster>contacto@bombero.mx (BOMBERO.MX)</webMaster>
      <image>
        <url>https://bombero.mx/images/logo-bombero-mx.png</url>
        <title>Blog BOMBERO.MX</title>
        <link>https://bombero.mx/blog</link>
      </image>
    `,
    stylesheet: "/rss/styles.xsl"
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
