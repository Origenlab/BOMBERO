import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, F as Fragment, d as addAttribute } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from './PageLayout_C3xQZUfp.mjs';
import { $ as $$Breadcrumb, a as $$CTABar } from './CTABar_BFZT9nZk.mjs';
import { $ as $$SectionHeader } from './SectionHeader_BM8Ucdq5.mjs';
import { $ as $$CategoryCard, a as $$WhyChooseUs } from './WhyChooseUs_BCDa-qO3.mjs';
import { $ as $$ProductCard } from './ProductCard_DtmtO2cB.mjs';
import { $ as $$CTABanner } from './CTABanner_CJ5vrrrF.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
const $$CategoriaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoriaLayout;
  const {
    title,
    description,
    keywords,
    canonical,
    type = "website",
    image,
    breadcrumb,
    heroBadge,
    heroTitle,
    heroTitleHighlight,
    heroSubtitle,
    heroSeoBlocks,
    ctaBarQuote,
    productosLabel,
    productosTitle,
    productosDesc,
    productosContent,
    productoCards,
    productosAltSuffix = "equipo de bombero certificado",
    specsLabel = "Tecnolog\xEDa y Certificaciones",
    specsTitle,
    specsDesc,
    specsContent,
    specsCards,
    comparativaLabel = "Tabla Comparativa",
    comparativaTitle,
    comparativaDesc,
    comparativaContent,
    tablaHeaders,
    tablaRows,
    relacionadosLabel = "Cat\xE1logo Relacionado",
    relacionadosTitle,
    relacionadosDesc,
    relacionadosContent,
    relacionadoCards,
    faqs = []
  } = Astro2.props;
  const schemaGraph = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.label,
        ...item.href ? { "item": `https://bombero.mx${item.href}` } : {}
      }))
    },
    {
      "@type": "ItemList",
      "name": productosTitle,
      "description": productosDesc,
      "numberOfItems": productoCards.length,
      "itemListElement": productoCards.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "url": `https://bombero.mx${p.slug}`,
        "name": p.nombre
      }))
    },
    ...faqs.length > 0 ? [{
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }] : []
  ];
  const schemaJson = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemaGraph
  });
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "type": type, "canonical": canonical, "image": image ?? "/images/directorio/estacion-bomberos-mexico-01.avif", "data-astro-cid-cfyjaozz": true }, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumb, "data-astro-cid-cfyjaozz": true })}  ${maybeRenderHead()}<section class="hero" data-astro-cid-cfyjaozz> <div class="hero__bg" data-astro-cid-cfyjaozz> <div class="hero__gradient" data-astro-cid-cfyjaozz></div> <div class="hero__grid" data-astro-cid-cfyjaozz></div> <div class="hero__glow hero__glow--1" data-astro-cid-cfyjaozz></div> <div class="hero__glow hero__glow--2" data-astro-cid-cfyjaozz></div> </div> <div class="container hero__container" data-astro-cid-cfyjaozz> <div class="hero__content" data-astro-cid-cfyjaozz> <div class="hero__badge" data-astro-cid-cfyjaozz> <span class="hero__badge-dot" data-astro-cid-cfyjaozz></span> ${heroBadge} </div> <h1 class="hero__title" data-astro-cid-cfyjaozz> ${heroTitle} <span class="hero__title-highlight" data-astro-cid-cfyjaozz>${heroTitleHighlight}</span> </h1> <p class="hero__subtitle" data-astro-cid-cfyjaozz>${heroSubtitle}</p> </div> <div class="hero__seo" data-astro-cid-cfyjaozz> ${heroSeoBlocks.map((block) => renderTemplate`<div class="hero__seo-block" data-astro-cid-cfyjaozz> <h2 class="hero__seo-title" data-astro-cid-cfyjaozz>${block.title}</h2> <p class="hero__seo-text" data-astro-cid-cfyjaozz>${unescapeHTML(block.text)}</p> </div>`)} </div> </div> </section>  ${renderComponent($$result2, "CTABar", $$CTABar, { "quote": ctaBarQuote, "data-astro-cid-cfyjaozz": true })}  <section class="section productos" id="catalogo" data-astro-cid-cfyjaozz> <div class="container" data-astro-cid-cfyjaozz> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": productosLabel, "title": productosTitle, "description": productosDesc, "data-astro-cid-cfyjaozz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(productosContent)}` })} ` })} <div class="productos__grid"${addAttribute(productoCards.length, "data-count")} data-astro-cid-cfyjaozz> ${productoCards.map((card) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "nombre": card.nombre, "slug": card.slug, "badge": card.badge, "badgeColor": card.badgeColor, "imagen": card.imagen, "descripcion": card.descripcion, "caracteristicas": card.caracteristicas, "aplicacion": card.aplicacion, "altSuffix": productosAltSuffix, "data-astro-cid-cfyjaozz": true })}`)} </div> </div> </section>  <section class="section section--dark specs" data-astro-cid-cfyjaozz> <div class="container" data-astro-cid-cfyjaozz> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": specsLabel, "title": specsTitle, "description": specsDesc, "data-astro-cid-cfyjaozz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(specsContent)}` })} ` })} <div class="specs__grid" data-astro-cid-cfyjaozz> ${specsCards.map((card) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": card.title, "icon": card.icon, "description": card.description, "data-astro-cid-cfyjaozz": true })}`)} </div> </div> </section>  <section class="section comparativa" data-astro-cid-cfyjaozz> <div class="container" data-astro-cid-cfyjaozz> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": comparativaLabel, "title": comparativaTitle, "description": comparativaDesc, "data-astro-cid-cfyjaozz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(comparativaContent)}` })} ` })} <div class="comparativa__wrapper" data-astro-cid-cfyjaozz> <table class="comparativa__table" data-astro-cid-cfyjaozz> <thead data-astro-cid-cfyjaozz> <tr data-astro-cid-cfyjaozz> ${tablaHeaders.map((h) => renderTemplate`<th data-astro-cid-cfyjaozz>${h}</th>`)} </tr> </thead> <tbody data-astro-cid-cfyjaozz> ${tablaRows.map((row) => renderTemplate`<tr data-astro-cid-cfyjaozz> ${row.cells.map((cell, ci) => renderTemplate`<td data-astro-cid-cfyjaozz> ${cell.chip ? renderTemplate`<span${addAttribute(`cert-chip cert-chip--${cell.chip}`, "class")} data-astro-cid-cfyjaozz>${cell.text}</span>` : cell.strong || ci === 0 ? renderTemplate`<strong data-astro-cid-cfyjaozz>${cell.text}</strong>` : cell.text} </td>`)} </tr>`)} </tbody> </table> </div> </div> </section>  ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, { "data-astro-cid-cfyjaozz": true })}  ${faqs.length > 0 && renderTemplate`<section class="section faq" id="faq" data-astro-cid-cfyjaozz> <div class="container faq__container" data-astro-cid-cfyjaozz> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Preguntas Frecuentes", "title": "Todo lo que Necesitas Saber", "description": "Respuestas a las preguntas m\xE1s frecuentes de cuerpos de bomberos y brigadas industriales sobre este producto.", "data-astro-cid-cfyjaozz": true })} <div class="faq__list" data-astro-cid-cfyjaozz> ${faqs.map((item) => renderTemplate`<details class="faq__item" data-astro-cid-cfyjaozz> <summary class="faq__question" data-astro-cid-cfyjaozz> <span data-astro-cid-cfyjaozz>${item.q}</span> <svg class="faq__icon" width="20" height="20" viewBox="0 0 20 20" fill="none" data-astro-cid-cfyjaozz> <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-cfyjaozz></path> </svg> </summary> <div class="faq__answer" data-astro-cid-cfyjaozz> <p data-astro-cid-cfyjaozz>${unescapeHTML(item.a)}</p> </div> </details>`)} </div> </div> </section>`} <section class="section relacionados" data-astro-cid-cfyjaozz> <div class="container" data-astro-cid-cfyjaozz> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": relacionadosLabel, "title": relacionadosTitle, "description": relacionadosDesc, "data-astro-cid-cfyjaozz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(relacionadosContent)}` })} ` })} <div class="rel__grid"${addAttribute(relacionadoCards.length, "data-count")} data-astro-cid-cfyjaozz> ${relacionadoCards.map((card) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { "title": card.title, "icon": card.icon, "image": card.image, "href": card.href, "buttonText": card.buttonText, "description": card.description, "items": card.items, "data-astro-cid-cfyjaozz": true })}`)} </div> </div> </section>  ${renderComponent($$result2, "CTABanner", $$CTABanner, { "data-astro-cid-cfyjaozz": true })} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(schemaJson)) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/LAYOUTS/CategoriaLayout.astro", void 0);

export { $$CategoriaLayout as $ };
