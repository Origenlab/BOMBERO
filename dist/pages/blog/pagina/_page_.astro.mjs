import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C37tG6Zv.mjs';
import { $ as $$Breadcrumb } from '../../../chunks/Breadcrumb_Bt_mkftY.mjs';
import { $ as $$CTABanner } from '../../../chunks/CTABanner_CozAoE6V.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_BYBrHFAU.mjs';
import { c as cdnW } from '../../../chunks/cdn_BlgyKQ2i.mjs';
import { g as getAllArticulos } from '../../../chunks/blog-articulos_BGTJ_V6r.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  const articulos = getAllArticulos();
  const perPage = 6;
  const totalPages = Math.ceil(articulos.length / perPage);
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    params: { page: String(i + 2) }
  }));
}
const $$page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const ARTICLES_PER_PAGE = 6;
  const allArticulos = getAllArticulos();
  const totalPages = Math.ceil(allArticulos.length / ARTICLES_PER_PAGE);
  const { page } = Astro2.params;
  const currentPage = parseInt(page, 10);
  if (isNaN(currentPage) || currentPage < 2 || currentPage > totalPages) {
    return Astro2.redirect("/blog");
  }
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const articulos = allArticulos.slice(startIndex, endIndex);
  const catsList = [
    { label: "Normativas", slug: "normativas" },
    { label: "Mantenimiento", slug: "mantenimiento" },
    { label: "T\xE9cnicas", slug: "tecnicas" },
    { label: "Industrial", slug: "industrial" },
    { label: "Forestales", slug: "forestales" },
    { label: "Equipo", slug: "equipo" }
  ];
  const categorias = catsList.map((cat) => ({
    ...cat,
    count: allArticulos.filter((a) => a.categoria.toLowerCase() === cat.label.toLowerCase()).length
  }));
  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    { label: `P\xE1gina ${currentPage}` }
  ];
  const articulosCdn = articulos.map((a) => ({ ...a, imagen: cdnW(a.imagen, 500) }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Blog BOMBERO.MX \u2014 P\xE1gina ${currentPage} | Art\xEDculos para Bomberos`, "description": `P\xE1gina ${currentPage} del blog de BOMBERO.MX. Art\xEDculos t\xE9cnicos sobre equipo para bomberos, normativas NFPA, t\xE9cnicas de rescate y mantenimiento de EPP.`, "keywords": ["blog bomberos", "art\xEDculos NFPA", "t\xE9cnicas rescate", "mantenimiento EPP", "brigadas industriales"], "canonical": `/blog/pagina/${currentPage}`, "data-astro-cid-wcnwzcuj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumb, "data-astro-cid-wcnwzcuj": true })}    ${maybeRenderHead()}<section class="blog-page-header" data-astro-cid-wcnwzcuj> <div class="container" data-astro-cid-wcnwzcuj> <div class="blog-page-header__content" data-astro-cid-wcnwzcuj> <span class="blog-page-header__badge" data-astro-cid-wcnwzcuj>Blog · Página ${currentPage}</span> <h1 class="blog-page-header__title" data-astro-cid-wcnwzcuj>
Artículos para
<span class="blog-page-header__highlight" data-astro-cid-wcnwzcuj>Bomberos</span> </h1> <p class="blog-page-header__desc" data-astro-cid-wcnwzcuj>
Continúa explorando nuestro contenido técnico profesional.
</p> </div> </div> </section>    <div class="blog-index-layout" data-astro-cid-wcnwzcuj> <div class="container blog-index-layout__inner" data-astro-cid-wcnwzcuj> <!-- ─── COLUMNA PRINCIPAL ─── --> <main class="blog-index-main" data-astro-cid-wcnwzcuj> <div class="blog-grid" data-astro-cid-wcnwzcuj> ${articulosCdn.map((articulo) => renderTemplate`<article class="blog-card" data-astro-cid-wcnwzcuj> <a${addAttribute(`/blog/${articulo.slug}`, "href")} class="blog-card__link" data-astro-cid-wcnwzcuj> <div class="blog-card__img-wrap" data-astro-cid-wcnwzcuj> <img${addAttribute(articulo.imagen, "src")}${addAttribute(articulo.titulo, "alt")} loading="lazy" width="500" height="280" class="blog-card__img" data-astro-cid-wcnwzcuj> <span class="blog-card__badge" data-astro-cid-wcnwzcuj>${articulo.categoria}</span> </div> <div class="blog-card__body" data-astro-cid-wcnwzcuj> <h2 class="blog-card__title" data-astro-cid-wcnwzcuj>${articulo.titulo}</h2> <p class="blog-card__excerpt" data-astro-cid-wcnwzcuj>${articulo.excerpt}</p> <div class="blog-card__tags" data-astro-cid-wcnwzcuj> ${articulo.tags.slice(0, 3).map((tag) => renderTemplate`<span class="blog-card__tag" data-astro-cid-wcnwzcuj>${tag}</span>`)} </div> <span class="blog-card__anchor" data-astro-cid-wcnwzcuj> ${articulo.anchorKeyword} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-wcnwzcuj> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-wcnwzcuj></path> </svg> </span> </div> </a> </article>`)} </div> <!-- Paginación --> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/blog", "data-astro-cid-wcnwzcuj": true })} </main> <!-- ─── SIDEBAR ─── --> <aside class="blog-index-sidebar" data-astro-cid-wcnwzcuj> <!-- CTA COTIZAR --> <div class="sb-card sb-card--cta" data-astro-cid-wcnwzcuj> <h3 class="sb-card__title" data-astro-cid-wcnwzcuj>Catálogo de Productos</h3> <p class="sb-card__text" data-astro-cid-wcnwzcuj>Equipo certificado NFPA listo para envío a toda la República.</p> <a href="/productos" class="sb-cta-btn" data-astro-cid-wcnwzcuj> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-wcnwzcuj></path></svg>
Ver Productos
</a> <div class="sb-card__contacts" data-astro-cid-wcnwzcuj> <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer" class="sb-contact sb-contact--wa" data-astro-cid-wcnwzcuj> <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-wcnwzcuj><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" data-astro-cid-wcnwzcuj></path></svg>
WhatsApp
</a> </div> </div> <!-- CATEGORÍAS --> <div class="sb-card" data-astro-cid-wcnwzcuj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-wcnwzcuj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-wcnwzcuj></path></svg>
Categorías
</h3> <ul class="sb-cats" data-astro-cid-wcnwzcuj> ${categorias.map((cat) => renderTemplate`<li class="sb-cat" data-astro-cid-wcnwzcuj> <a${addAttribute(`/blog/categoria/${cat.slug}`, "href")} class="sb-cat__link" data-astro-cid-wcnwzcuj> <span class="sb-cat__label" data-astro-cid-wcnwzcuj>${cat.label}</span> <span class="sb-cat__count" data-astro-cid-wcnwzcuj>${cat.count}</span> </a> </li>`)} </ul> </div> <!-- PRODUCTOS DESTACADOS --> <div class="sb-card" data-astro-cid-wcnwzcuj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-wcnwzcuj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-wcnwzcuj></path></svg>
Productos Destacados
</h3> <ul class="sb-links" data-astro-cid-wcnwzcuj> <li data-astro-cid-wcnwzcuj><a href="/productos/trajes-para-bomberos" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Trajes Estructurales
</a></li> <li data-astro-cid-wcnwzcuj><a href="/productos/cascos-para-bomberos" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Cascos NFPA
</a></li> <li data-astro-cid-wcnwzcuj><a href="/productos/capuchas-para-bomberos" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Capuchas NFPA
</a></li> <li data-astro-cid-wcnwzcuj><a href="/productos/guantes-para-bomberos" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Guantes Estructurales
</a></li> <li data-astro-cid-wcnwzcuj><a href="/productos/botas-para-bomberos" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Botas de Cuero
</a></li> </ul> <a href="/productos" class="sb-see-all" data-astro-cid-wcnwzcuj>Ver catálogo completo →</a> </div> <!-- DIRECTORIO --> <div class="sb-card" data-astro-cid-wcnwzcuj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-wcnwzcuj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-wcnwzcuj></path><circle cx="12" cy="10" r="3" data-astro-cid-wcnwzcuj></circle></svg>
Directorio de Bomberos
</h3> <ul class="sb-links" data-astro-cid-wcnwzcuj> <li data-astro-cid-wcnwzcuj><a href="/directorio/ciudad-de-mexico" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Ciudad de México
</a></li> <li data-astro-cid-wcnwzcuj><a href="/directorio/jalisco" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Jalisco
</a></li> <li data-astro-cid-wcnwzcuj><a href="/directorio/nuevo-leon" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Nuevo León
</a></li> <li data-astro-cid-wcnwzcuj><a href="/directorio/veracruz" class="sb-link" data-astro-cid-wcnwzcuj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-wcnwzcuj><path d="M9 18l6-6-6-6" data-astro-cid-wcnwzcuj></path></svg>
Veracruz
</a></li> </ul> <a href="/directorio" class="sb-see-all" data-astro-cid-wcnwzcuj>Ver directorio completo →</a> </div> </aside> </div> </div> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Explora Nuestro Cat\xE1logo Completo", "desc": "M\xE1s de 500 productos certificados NFPA listos para env\xEDo inmediato a toda la Rep\xFAblica.", "btnText": "Ver Cat\xE1logo", "btnHref": "/productos", "data-astro-cid-wcnwzcuj": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/pagina/[page].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/pagina/[page].astro";
const $$url = "/blog/pagina/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
