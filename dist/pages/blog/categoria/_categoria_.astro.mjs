import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C37tG6Zv.mjs';
import { $ as $$Breadcrumb } from '../../../chunks/Breadcrumb_Bt_mkftY.mjs';
import { $ as $$CTABanner } from '../../../chunks/CTABanner_CozAoE6V.mjs';
import { c as cdnW } from '../../../chunks/cdn_BlgyKQ2i.mjs';
import { g as getAllArticulos } from '../../../chunks/blog-articulos_BGTJ_V6r.mjs';
/* empty css                                             */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  const cats = [
    { slug: "normativas", nombre: "Normativas", descripcion: "Art\xEDculos sobre normas NFPA, certificaciones y requisitos legales para equipo de bomberos.", keywords: ["NFPA 1971", "certificaci\xF3n EPP", "normas bomberos", "requisitos legales"] },
    { slug: "mantenimiento", nombre: "Mantenimiento", descripcion: "Gu\xEDas de mantenimiento, inspecci\xF3n y cuidado de equipos de protecci\xF3n personal.", keywords: ["mantenimiento SCBA", "inspecci\xF3n EPP", "cuidado equipo bomberos"] },
    { slug: "tecnicas", nombre: "T\xE9cnicas", descripcion: "T\xE9cnicas modernas de rescate, extricaci\xF3n y operaciones de emergencia.", keywords: ["rescate vehicular", "t\xE9cnicas bomberos", "extricaci\xF3n", "operaciones emergencia"] },
    { slug: "industrial", nombre: "Industrial", descripcion: "Contenido especializado para brigadas industriales y equipos de respuesta en plantas.", keywords: ["brigadas industriales", "EPP industrial", "seguridad planta", "respuesta emergencia"] },
    { slug: "forestales", nombre: "Forestales", descripcion: "Art\xEDculos sobre combate de incendios forestales, temporadas y equipo especializado.", keywords: ["incendios forestales", "NFPA 1977", "combate forestal", "temporada incendios"] },
    { slug: "equipo", nombre: "Equipo", descripcion: "Gu\xEDas de selecci\xF3n, comparativas y an\xE1lisis de equipo de protecci\xF3n personal.", keywords: ["cascos bombero", "equipo EPP", "selecci\xF3n equipo", "comparativa EPP"] }
  ];
  return cats.map((cat) => ({
    params: { categoria: cat.slug },
    props: { catData: cat }
  }));
}
const $$categoria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categoria;
  const { categoria } = Astro2.params;
  const { catData } = Astro2.props;
  const todosArticulos = getAllArticulos();
  const articulosCategoria = todosArticulos.filter(
    (a) => a.categoria.toLowerCase() === catData.nombre.toLowerCase()
  );
  const catsList = [
    { slug: "normativas", nombre: "Normativas" },
    { slug: "mantenimiento", nombre: "Mantenimiento" },
    { slug: "tecnicas", nombre: "T\xE9cnicas" },
    { slug: "industrial", nombre: "Industrial" },
    { slug: "forestales", nombre: "Forestales" },
    { slug: "equipo", nombre: "Equipo" }
  ];
  const categorias = catsList.map((cat) => ({
    label: cat.nombre,
    slug: cat.slug,
    count: todosArticulos.filter((a) => a.categoria.toLowerCase() === cat.nombre.toLowerCase()).length,
    active: cat.slug === categoria
  }));
  const articulosPopulares = [
    { label: "NFPA 1971: Gu\xEDa Completa", href: "/blog/nfpa-1971-guia-completa" },
    { label: "Mantenimiento SCBA", href: "/blog/mantenimiento-scba" },
    { label: "Rescate Vehicular", href: "/blog/rescate-vehicular-tecnicas" },
    { label: "EPP para Brigadas", href: "/blog/brigadas-industriales-epp" }
  ];
  const productosRelacionados = [
    { label: "Trajes Estructurales", href: "/productos/trajes-para-bomberos" },
    { label: "Cascos NFPA", href: "/productos/cascos-para-bomberos" },
    { label: "Equipos SCBA", href: "/productos/scba" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos" }
  ];
  const directorioLinks = [
    { label: "Ciudad de M\xE9xico", href: "/directorio/ciudad-de-mexico" },
    { label: "Jalisco", href: "/directorio/jalisco" },
    { label: "Nuevo Le\xF3n", href: "/directorio/nuevo-leon" }
  ];
  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    { label: catData.nombre }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${catData.nombre} \u2014 Blog BOMBERO.MX`, "description": catData.descripcion, "keywords": catData.keywords, "canonical": `/blog/categoria/${categoria}`, "data-astro-cid-7kfv2ql4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumb, "data-astro-cid-7kfv2ql4": true })}    ${maybeRenderHead()}<section class="blog-index-hero" data-astro-cid-7kfv2ql4> <div class="blog-index-hero__bg" data-astro-cid-7kfv2ql4> <div class="blog-index-hero__gradient" data-astro-cid-7kfv2ql4></div> <div class="blog-index-hero__grid" data-astro-cid-7kfv2ql4></div> <div class="blog-index-hero__glow blog-index-hero__glow--1" data-astro-cid-7kfv2ql4></div> <div class="blog-index-hero__glow blog-index-hero__glow--2" data-astro-cid-7kfv2ql4></div> </div> <div class="container hero__container" data-astro-cid-7kfv2ql4> <div class="hero__content" data-astro-cid-7kfv2ql4> <div class="hero__badge" data-astro-cid-7kfv2ql4> <span class="hero__badge-dot" data-astro-cid-7kfv2ql4></span>
Blog · ${catData.nombre} </div> <h1 class="hero__title" data-astro-cid-7kfv2ql4> ${catData.nombre} <span class="hero__title-highlight" data-astro-cid-7kfv2ql4>BOMBERO.MX</span> </h1> <p class="hero__subtitle" data-astro-cid-7kfv2ql4> ${catData.descripcion} </p> <div class="hero__actions" data-astro-cid-7kfv2ql4> <a href="#articulos" class="btn btn--primary btn--lg" data-astro-cid-7kfv2ql4> <span data-astro-cid-7kfv2ql4>Ver artículos (${articulosCategoria.length})</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-7kfv2ql4></path> </svg> </a> <a href="/blog" class="btn btn--ghost btn--lg" data-astro-cid-7kfv2ql4> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-7kfv2ql4></path> </svg> <span data-astro-cid-7kfv2ql4>Todos los artículos</span> </a> </div> </div> <div class="hero__seo" data-astro-cid-7kfv2ql4> <div class="hero__seo-block" data-astro-cid-7kfv2ql4> <h2 class="hero__seo-title" data-astro-cid-7kfv2ql4>Artículos de ${catData.nombre}</h2> <p class="hero__seo-text" data-astro-cid-7kfv2ql4>
Explora nuestra colección de artículos sobre <strong data-astro-cid-7kfv2ql4>${catData.nombre.toLowerCase()}</strong>. Contenido técnico creado por especialistas para <strong data-astro-cid-7kfv2ql4>cuerpos de bomberos</strong>, protección civil y <strong data-astro-cid-7kfv2ql4>brigadas industriales</strong> en México.
</p> </div> <div class="hero__seo-block" data-astro-cid-7kfv2ql4> <h2 class="hero__seo-title" data-astro-cid-7kfv2ql4>Contenido Profesional</h2> <p class="hero__seo-text" data-astro-cid-7kfv2ql4>
En <strong data-astro-cid-7kfv2ql4>BOMBERO.MX</strong> publicamos guías técnicas actualizadas sobre <strong data-astro-cid-7kfv2ql4>normativas NFPA</strong>, selección de equipo y mejores prácticas. Todo el contenido es revisado por expertos con experiencia en el sector.
</p> </div> </div> </div> </section>    <section class="blog-layout" data-astro-cid-7kfv2ql4> <div class="container" data-astro-cid-7kfv2ql4> <div class="blog-layout__grid" data-astro-cid-7kfv2ql4> <!-- Main Content --> <main class="blog-main" data-astro-cid-7kfv2ql4> ${articulosCategoria.length > 0 ? renderTemplate`<div class="articles-grid" data-astro-cid-7kfv2ql4> ${articulosCategoria.map((articulo) => renderTemplate`<article class="article-card" data-astro-cid-7kfv2ql4> <div class="article-card__img-wrap" data-astro-cid-7kfv2ql4> <img${addAttribute(cdnW(articulo.imagen, 500), "src")}${addAttribute(articulo.titulo, "alt")} width="500" height="280" loading="lazy" class="article-card__img" data-astro-cid-7kfv2ql4> <span class="article-card__cat" data-astro-cid-7kfv2ql4>${articulo.categoria}</span> </div> <div class="article-card__body" data-astro-cid-7kfv2ql4> <h2 class="article-card__title" data-astro-cid-7kfv2ql4> <a${addAttribute(`/blog/${articulo.slug}`, "href")} data-astro-cid-7kfv2ql4>${articulo.titulo}</a> </h2> <p class="article-card__excerpt" data-astro-cid-7kfv2ql4>${articulo.excerpt}</p> <div class="article-card__footer" data-astro-cid-7kfv2ql4> <div class="article-card__tags" data-astro-cid-7kfv2ql4> ${articulo.tags.slice(0, 2).map((tag) => renderTemplate`<span class="article-card__tag" data-astro-cid-7kfv2ql4>${tag}</span>`)} </div> <a${addAttribute(`/blog/${articulo.slug}`, "href")} class="article-card__link" data-astro-cid-7kfv2ql4> ${articulo.anchorKeyword} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-7kfv2ql4></path> </svg> </a> </div> </div> </article>`)} </div>` : renderTemplate`<div class="no-articles" data-astro-cid-7kfv2ql4> <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-7kfv2ql4> <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V9a2 2 0 0 0-2-2h-1" data-astro-cid-7kfv2ql4></path> <line x1="9" y1="9" x2="13" y2="9" data-astro-cid-7kfv2ql4></line> <line x1="9" y1="13" x2="15" y2="13" data-astro-cid-7kfv2ql4></line> </svg> <h3 data-astro-cid-7kfv2ql4>Próximamente</h3> <p data-astro-cid-7kfv2ql4>Estamos preparando contenido para esta categoría. Mientras tanto, explora otras secciones del blog.</p> <a href="/blog" class="btn btn--primary" data-astro-cid-7kfv2ql4>Ver todos los artículos</a> </div>`} </main> <!-- Sidebar --> <aside class="blog-sidebar" data-astro-cid-7kfv2ql4> <!-- Categorías --> <div class="sb-card" data-astro-cid-7kfv2ql4> <h3 class="sb-card__title" data-astro-cid-7kfv2ql4>Categorías</h3> <div class="sb-cats" data-astro-cid-7kfv2ql4> ${categorias.map((cat) => renderTemplate`<a${addAttribute(`/blog/categoria/${cat.slug}`, "href")}${addAttribute(`sb-cat__link ${cat.active ? "sb-cat__link--active" : ""}`, "class")} data-astro-cid-7kfv2ql4> <span data-astro-cid-7kfv2ql4>${cat.label}</span> <span class="sb-cat__count" data-astro-cid-7kfv2ql4>${cat.count}</span> </a>`)} </div> </div> <!-- Artículos Populares --> <div class="sb-card" data-astro-cid-7kfv2ql4> <h3 class="sb-card__title" data-astro-cid-7kfv2ql4>Artículos Populares</h3> <ul class="sb-links" data-astro-cid-7kfv2ql4> ${articulosPopulares.map((item) => renderTemplate`<li data-astro-cid-7kfv2ql4> <a${addAttribute(item.href, "href")} class="sb-link" data-astro-cid-7kfv2ql4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M9 18l6-6-6-6" data-astro-cid-7kfv2ql4></path> </svg> ${item.label} </a> </li>`)} </ul> </div> <!-- Productos Relacionados --> <div class="sb-card" data-astro-cid-7kfv2ql4> <h3 class="sb-card__title" data-astro-cid-7kfv2ql4>Productos Relacionados</h3> <ul class="sb-links" data-astro-cid-7kfv2ql4> ${productosRelacionados.map((item) => renderTemplate`<li data-astro-cid-7kfv2ql4> <a${addAttribute(item.href, "href")} class="sb-link" data-astro-cid-7kfv2ql4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" data-astro-cid-7kfv2ql4></path> <line x1="7" y1="7" x2="7.01" y2="7" data-astro-cid-7kfv2ql4></line> </svg> ${item.label} </a> </li>`)} </ul> <a href="/productos" class="sb-see-all" data-astro-cid-7kfv2ql4>Ver catálogo completo →</a> </div> <!-- Directorio --> <div class="sb-card" data-astro-cid-7kfv2ql4> <h3 class="sb-card__title" data-astro-cid-7kfv2ql4>Directorio de Bomberos</h3> <ul class="sb-links" data-astro-cid-7kfv2ql4> ${directorioLinks.map((item) => renderTemplate`<li data-astro-cid-7kfv2ql4> <a${addAttribute(item.href, "href")} class="sb-link" data-astro-cid-7kfv2ql4> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7kfv2ql4> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-7kfv2ql4></path> <circle cx="12" cy="10" r="3" data-astro-cid-7kfv2ql4></circle> </svg> ${item.label} </a> </li>`)} </ul> <a href="/directorio" class="sb-see-all" data-astro-cid-7kfv2ql4>Ver todas las estaciones →</a> </div> </aside> </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Equipa a tu Departamento", "desc": "M\xE1s de 500 productos certificados NFPA listos para env\xEDo inmediato a toda la Rep\xFAblica.", "btnText": "Solicitar Cotizaci\xF3n", "btnHref": "/cotizar", "data-astro-cid-7kfv2ql4": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/categoria/[categoria].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/categoria/[categoria].astro";
const $$url = "/blog/categoria/[categoria]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categoria,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
