import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, e as renderSlot, m as maybeRenderHead, u as unescapeHTML, F as Fragment } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C37tG6Zv.mjs';
import { $ as $$Breadcrumb } from '../../chunks/Breadcrumb_Bt_mkftY.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_DiQp1BQS.mjs';
import { $ as $$CTABanner } from '../../chunks/CTABanner_CozAoE6V.mjs';
import { c as cdnW } from '../../chunks/cdn_BlgyKQ2i.mjs';
/* empty css                                     */
import { g as getAllArticulos, a as getArticulo, b as getArticuloSlugs } from '../../chunks/blog-articulos_BGTJ_V6r.mjs';
import { marked } from 'marked';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://bombero.mx");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const {
    title,
    description,
    keywords,
    canonical,
    image,
    breadcrumb,
    heroBadge,
    heroTitle,
    heroExcerpt,
    heroImage,
    autor,
    autorRol,
    tags = [],
    categorias = [],
    articulosPopulares = [],
    productosRelacionados = [],
    directorioLinks = [],
    relacionados = []
  } = Astro2.props;
  const heroImageCdn = heroImage ? cdnW(heroImage, 800) : void 0;
  const relacionadosCdn = relacionados.map((r) => ({ ...r, image: cdnW(r.image, 400) }));
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": heroTitle,
    "description": description,
    "image": heroImage ? `https://bombero.mx${heroImage}` : "https://bombero.mx/images/og-default.jpg",
    "author": {
      "@type": "Organization",
      "name": autor || "BOMBERO.MX",
      "url": "https://bombero.mx"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BOMBERO.MX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bombero.mx/images/logo-bombero-mx.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bombero.mx${canonical}`
    },
    "keywords": keywords?.join(", ") || "",
    "articleSection": heroBadge.replace("Blog \xB7 ", ""),
    "inLanguage": "es-MX"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "image": image, "data-astro-cid-z5plraay": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script>    ", "    ", '<section class="blog-hero" data-astro-cid-z5plraay> <div class="blog-hero__bg" data-astro-cid-z5plraay> <div class="blog-hero__gradient" data-astro-cid-z5plraay></div> <div class="blog-hero__grid" data-astro-cid-z5plraay></div> <div class="blog-hero__glow blog-hero__glow--1" data-astro-cid-z5plraay></div> <div class="blog-hero__glow blog-hero__glow--2" data-astro-cid-z5plraay></div> </div> <div class="container blog-hero__container" data-astro-cid-z5plraay> <div class="blog-hero__content" data-astro-cid-z5plraay> <div class="blog-hero__badge" data-astro-cid-z5plraay> <span class="blog-hero__badge-dot" data-astro-cid-z5plraay></span> ', ' </div> <h1 class="blog-hero__title" data-astro-cid-z5plraay>', '</h1> <p class="blog-hero__excerpt" data-astro-cid-z5plraay>', "</p> ", " </div> ", ' </div> </section>    <div class="blog-layout" data-astro-cid-z5plraay> <div class="container blog-layout__inner" data-astro-cid-z5plraay> <!-- \u2500\u2500\u2500 COLUMNA PRINCIPAL \u2500\u2500\u2500 --> <main class="blog-main" data-astro-cid-z5plraay> <!-- CONTENIDO DEL ART\xCDCULO --> <article class="blog-article" data-astro-cid-z5plraay> <div class="blog-article__content prose" data-astro-cid-z5plraay> ', " </div> ", ' </article> <!-- CTA DENTRO DEL ART\xCDCULO --> <div class="blog-cta-inline" data-astro-cid-z5plraay> <div class="blog-cta-inline__icon" data-astro-cid-z5plraay> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-z5plraay> <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-astro-cid-z5plraay></path> <polyline points="14 2 14 8 20 8" data-astro-cid-z5plraay></polyline> <line x1="16" y1="13" x2="8" y2="13" data-astro-cid-z5plraay></line> <line x1="16" y1="17" x2="8" y2="17" data-astro-cid-z5plraay></line> </svg> </div> <div class="blog-cta-inline__content" data-astro-cid-z5plraay> <h3 data-astro-cid-z5plraay>\xBFNecesitas equipo certificado?</h3> <p data-astro-cid-z5plraay>Cotiza sin compromiso equipo NFPA para tu estaci\xF3n o brigada industrial.</p> </div> <a href="/cotizar" class="blog-cta-inline__btn" data-astro-cid-z5plraay>Solicitar Cotizaci\xF3n</a> </div> </main> <!-- \u2500\u2500\u2500 SIDEBAR \u2500\u2500\u2500 --> <aside class="blog-sidebar" data-astro-cid-z5plraay> <!-- CTA COTIZAR --> <div class="sb-card sb-card--cta" data-astro-cid-z5plraay> <h3 class="sb-card__title" data-astro-cid-z5plraay>Cat\xE1logo Completo</h3> <p class="sb-card__text" data-astro-cid-z5plraay>Equipo certificado NFPA listo para env\xEDo a toda la Rep\xFAblica.</p> <a href="/productos" class="sb-cta-btn" data-astro-cid-z5plraay> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-z5plraay><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-z5plraay></path></svg>\nVer Productos\n</a> <div class="sb-card__contacts" data-astro-cid-z5plraay> <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer" class="sb-contact sb-contact--wa" data-astro-cid-z5plraay> <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-z5plraay><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" data-astro-cid-z5plraay></path></svg>\nWhatsApp\n</a> <a href="tel:+525520780102" class="sb-contact" data-astro-cid-z5plraay> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-z5plraay><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-z5plraay></path></svg>\n55 2078 0102\n</a> </div> </div> <!-- CATEGOR\xCDAS --> ', " <!-- ART\xCDCULOS POPULARES --> ", " <!-- PRODUCTOS RELACIONADOS --> ", " <!-- DIRECTORIO DE BOMBEROS --> ", " </aside> </div> </div>    ", " ", " "])), unescapeHTML(JSON.stringify(schemaOrg)), renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumb, "data-astro-cid-z5plraay": true }), maybeRenderHead(), heroBadge, heroTitle, heroExcerpt, tags.length > 0 && renderTemplate`<div class="blog-hero__tags" data-astro-cid-z5plraay> ${tags.map((tag) => renderTemplate`<span class="blog-hero__tag" data-astro-cid-z5plraay>${tag}</span>`)} </div>`, heroImageCdn && renderTemplate`<div class="blog-hero__image-wrap" data-astro-cid-z5plraay> <img${addAttribute(heroImageCdn, "src")}${addAttribute(heroTitle, "alt")} class="blog-hero__image" width="800" height="450" loading="eager" data-astro-cid-z5plraay> </div>`, renderSlot($$result2, $$slots["default"]), (autor || tags.length > 0) && renderTemplate`<footer class="blog-article__footer" data-astro-cid-z5plraay> ${autor && renderTemplate`<div class="blog-article__autor" data-astro-cid-z5plraay> <div class="blog-article__autor-avatar" data-astro-cid-z5plraay> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-z5plraay> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-z5plraay></path> <circle cx="12" cy="7" r="4" data-astro-cid-z5plraay></circle> </svg> </div> <div class="blog-article__autor-info" data-astro-cid-z5plraay> <p class="blog-article__autor-name" data-astro-cid-z5plraay>${autor}</p> ${autorRol && renderTemplate`<p class="blog-article__autor-rol" data-astro-cid-z5plraay>${autorRol}</p>`} </div> </div>`} ${tags.length > 0 && renderTemplate`<div class="blog-article__tags" data-astro-cid-z5plraay> <span class="blog-article__tags-label" data-astro-cid-z5plraay>Etiquetas:</span> <div class="blog-article__tags-list" data-astro-cid-z5plraay> ${tags.map((tag) => renderTemplate`<span class="blog-article__tag" data-astro-cid-z5plraay>${tag}</span>`)} </div> </div>`} </footer>`, categorias.length > 0 && renderTemplate`<div class="sb-card" data-astro-cid-z5plraay> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-z5plraay> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-z5plraay><path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-z5plraay></path></svg>
Categorías
</h3> <ul class="sb-cats" data-astro-cid-z5plraay> ${categorias.map((cat) => renderTemplate`<li class="sb-cat" data-astro-cid-z5plraay> <a${addAttribute(cat.href, "href")} class="sb-cat__link" data-astro-cid-z5plraay> <span class="sb-cat__label" data-astro-cid-z5plraay>${cat.label}</span> ${cat.count && renderTemplate`<span class="sb-cat__count" data-astro-cid-z5plraay>${cat.count}</span>`} </a> </li>`)} </ul> </div>`, articulosPopulares.length > 0 && renderTemplate`<div class="sb-card" data-astro-cid-z5plraay> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-z5plraay> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-z5plraay><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-z5plraay></polygon></svg>
Artículos Populares
</h3> <ul class="sb-links" data-astro-cid-z5plraay> ${articulosPopulares.map((a) => renderTemplate`<li data-astro-cid-z5plraay> <a${addAttribute(a.href, "href")} class="sb-link" data-astro-cid-z5plraay> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-z5plraay><path d="M9 18l6-6-6-6" data-astro-cid-z5plraay></path></svg> ${a.label} </a> </li>`)} </ul> <a href="/blog" class="sb-see-all" data-astro-cid-z5plraay>Ver todos los artículos →</a> </div>`, productosRelacionados.length > 0 && renderTemplate`<div class="sb-card" data-astro-cid-z5plraay> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-z5plraay> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-z5plraay><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-z5plraay></path></svg>
Productos Relacionados
</h3> <ul class="sb-links" data-astro-cid-z5plraay> ${productosRelacionados.map((p) => renderTemplate`<li data-astro-cid-z5plraay> <a${addAttribute(p.href, "href")} class="sb-link" data-astro-cid-z5plraay> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-z5plraay><path d="M9 18l6-6-6-6" data-astro-cid-z5plraay></path></svg> ${p.label} </a> </li>`)} </ul> <a href="/productos" class="sb-see-all" data-astro-cid-z5plraay>Ver catálogo completo →</a> </div>`, directorioLinks.length > 0 && renderTemplate`<div class="sb-card" data-astro-cid-z5plraay> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-z5plraay> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-z5plraay><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-z5plraay></path><circle cx="12" cy="10" r="3" data-astro-cid-z5plraay></circle></svg>
Directorio de Bomberos
</h3> <ul class="sb-links" data-astro-cid-z5plraay> ${directorioLinks.map((d) => renderTemplate`<li data-astro-cid-z5plraay> <a${addAttribute(d.href, "href")} class="sb-link" data-astro-cid-z5plraay> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-z5plraay><path d="M9 18l6-6-6-6" data-astro-cid-z5plraay></path></svg> ${d.label} </a> </li>`)} </ul> <a href="/directorio" class="sb-see-all" data-astro-cid-z5plraay>Ver directorio completo →</a> </div>`, relacionadosCdn.length > 0 && renderTemplate`<section class="blog-relacionados" data-astro-cid-z5plraay> <div class="container" data-astro-cid-z5plraay> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Sigue Leyendo", "title": "Art\xEDculos Relacionados", "description": "Contenido relevante para bomberos y brigadas industriales.", "data-astro-cid-z5plraay": true })} <div class="blog-rel__grid" data-astro-cid-z5plraay> ${relacionadosCdn.map((r) => renderTemplate`<article class="blog-rel-card" data-astro-cid-z5plraay> <div class="blog-rel-card__img-wrap" data-astro-cid-z5plraay> <img${addAttribute(r.image, "src")}${addAttribute(r.title, "alt")} loading="lazy" width="400" height="225" class="blog-rel-card__img" data-astro-cid-z5plraay> ${r.categoria && renderTemplate`<span class="blog-rel-card__badge" data-astro-cid-z5plraay>${r.categoria}</span>`} </div> <div class="blog-rel-card__body" data-astro-cid-z5plraay> <h3 class="blog-rel-card__title" data-astro-cid-z5plraay>${r.title}</h3> <p class="blog-rel-card__excerpt" data-astro-cid-z5plraay>${r.excerpt}</p> <a${addAttribute(r.href, "href")} class="blog-rel-card__btn" data-astro-cid-z5plraay>
Leer más
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-z5plraay> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-z5plraay></path> </svg> </a> </div> </article>`)} </div> </div> </section>`, renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Explora Nuestro Cat\xE1logo Completo", "btnText": "Ver Productos", "btnHref": "/productos", "data-astro-cid-z5plraay": true })) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/LAYOUTS/BlogLayout.astro", void 0);

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return getArticuloSlugs().map((slug) => ({
    params: { slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const articulo = getArticulo(slug);
  if (!articulo) {
    return Astro2.redirect("/404");
  }
  const contenidoHTML = marked(articulo.contenido);
  const breadcrumb = [
    { label: "Blog", href: "/blog" },
    { label: articulo.titulo }
  ];
  const allArticulos = getAllArticulos();
  const catsList = [
    { label: "Normativas", slug: "normativas" },
    { label: "Mantenimiento", slug: "mantenimiento" },
    { label: "T\xE9cnicas", slug: "tecnicas" },
    { label: "Industrial", slug: "industrial" },
    { label: "Forestales", slug: "forestales" },
    { label: "Equipo", slug: "equipo" }
  ];
  const categorias = catsList.map((cat) => ({
    label: cat.label,
    href: `/blog/categoria/${cat.slug}`,
    count: allArticulos.filter((a) => a.categoria.toLowerCase() === cat.label.toLowerCase()).length
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
  const otrosArticulos = getAllArticulos().filter((a) => a.slug !== slug).slice(0, 3).map((a) => ({
    title: a.titulo,
    excerpt: a.excerpt,
    href: `/blog/${a.slug}`,
    image: a.imagen,
    categoria: a.categoria
  }));
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": `${articulo.titulo} | Blog BOMBERO.MX`, "description": articulo.excerpt, "keywords": articulo.tags, "canonical": `/blog/${slug}`, "image": articulo.imagen, "breadcrumb": breadcrumb, "heroBadge": `Blog \xB7 ${articulo.categoria}`, "heroTitle": articulo.titulo, "heroExcerpt": articulo.excerpt, "heroImage": articulo.imagen, "autor": articulo.autor, "autorRol": articulo.autorRol, "tags": articulo.tags, "categorias": categorias, "articulosPopulares": articulosPopulares, "productosRelacionados": productosRelacionados, "directorioLinks": directorioLinks, "relacionados": otrosArticulos }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(contenidoHTML)}` })} ` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
