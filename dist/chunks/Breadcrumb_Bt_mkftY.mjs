import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from './astro/server_D9FxF255.mjs';
import 'piccolore';
import 'clsx';
import { S as SITE } from './PageLayout_C37tG6Zv.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
const $$Breadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumb;
  const { items } = Astro2.props;
  const allItems = [{ label: "Inicio", href: "/" }, ...items];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...item.href ? { item: `${SITE.url}${item.href}` } : {}
    }))
  };
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script> ", '<nav class="breadcrumb" aria-label="Ruta de navegaci\xF3n" data-astro-cid-qaanghzh> <div class="breadcrumb__track" data-astro-cid-qaanghzh> <div class="container" data-astro-cid-qaanghzh> <ol class="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList" data-astro-cid-qaanghzh> ', " </ol> </div> </div> </nav> "])), unescapeHTML(JSON.stringify(breadcrumbJsonLd)), maybeRenderHead(), allItems.map((item, index) => {
    const isLast = index === allItems.length - 1;
    return renderTemplate`<li${addAttribute(["breadcrumb__item", isLast && "breadcrumb__item--current"].filter(Boolean).join(" "), "class")} itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" data-astro-cid-qaanghzh> ${index === 0 && renderTemplate`<svg class="breadcrumb__home-icon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-astro-cid-qaanghzh> <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" data-astro-cid-qaanghzh></path> </svg>`} ${isLast ? renderTemplate`<span itemprop="name" aria-current="page" data-astro-cid-qaanghzh> ${item.label} </span>` : renderTemplate`<a${addAttribute(item.href, "href")} itemprop="item" data-astro-cid-qaanghzh> <span itemprop="name" data-astro-cid-qaanghzh>${item.label}</span> </a>`} <meta itemprop="position"${addAttribute(String(index + 1), "content")}> ${!isLast && renderTemplate`<svg class="breadcrumb__sep" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-qaanghzh> <polyline points="9 18 15 12 9 6" data-astro-cid-qaanghzh></polyline> </svg>`} </li>`;
  }));
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/Breadcrumb.astro", void 0);

export { $$Breadcrumb as $ };
