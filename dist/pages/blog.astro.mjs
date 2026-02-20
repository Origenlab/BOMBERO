import { c as createComponent, a as renderTemplate, m as maybeRenderHead, r as renderComponent, d as addAttribute } from '../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_C37tG6Zv.mjs';
import { $ as $$Breadcrumb } from '../chunks/Breadcrumb_Bt_mkftY.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_DiQp1BQS.mjs';
import { $ as $$CTABanner } from '../chunks/CTABanner_CozAoE6V.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_BYBrHFAU.mjs';
import 'clsx';
/* empty css                                 */
import { c as cdnW } from '../chunks/cdn_BlgyKQ2i.mjs';
import { g as getAllArticulos } from '../chunks/blog-articulos_BGTJ_V6r.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BlogSearch = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="blog-search" data-astro-cid-ezfxcgpt> <div class="blog-search__input-wrap" data-astro-cid-ezfxcgpt> <svg class="blog-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ezfxcgpt> <circle cx="11" cy="11" r="8" data-astro-cid-ezfxcgpt></circle> <path d="m21 21-4.35-4.35" data-astro-cid-ezfxcgpt></path> </svg> <input type="search" id="blog-search-input" class="blog-search__input" placeholder="Buscar art\xEDculos..." autocomplete="off" data-astro-cid-ezfxcgpt> <kbd class="blog-search__kbd" data-astro-cid-ezfxcgpt>\u2318K</kbd> </div> <div id="blog-search-results" class="blog-search__results" data-astro-cid-ezfxcgpt></div> </div> <script>
  // Inicializar Pagefind cuando el DOM est\xE9 listo
  (async function initPagefind() {
    const input = document.getElementById('blog-search-input');
    const resultsContainer = document.getElementById('blog-search-results');

    if (!input || !resultsContainer) return;

    // Cargar Pagefind din\xE1micamente (solo disponible despu\xE9s del build)
    let pagefind;

    try {
      pagefind = await import('/pagefind/pagefind.js');
      await pagefind.init();
    } catch (e) {
      // Pagefind no disponible en dev mode - mostrar mensaje
      input.placeholder = 'B\xFAsqueda disponible en producci\xF3n';
      return;
    }

    // Debounce para b\xFAsqueda
    let timeout;

    input.addEventListener('input', async () => {
      clearTimeout(timeout);
      const query = input.value.trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('active');
        return;
      }

      timeout = setTimeout(async () => {
        const search = await pagefind.search(query);
        const results = await Promise.all(
          search.results.slice(0, 5).map((r) => r.data())
        );

        if (results.length === 0) {
          resultsContainer.innerHTML = \`
            <div class="blog-search__no-results">
              No se encontraron resultados para "\${query}"
            </div>
          \`;
        } else {
          resultsContainer.innerHTML = results.map((result) => \`
            <a href="\${result.url}" class="blog-search__result">
              <span class="blog-search__result-title">\${result.meta.title || 'Sin t\xEDtulo'}</span>
              <span class="blog-search__result-excerpt">\${result.excerpt}</span>
            </a>
          \`).join('');
        }

        resultsContainer.classList.add('active');
      }, 200);
    });

    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
        resultsContainer.classList.remove('active');
      }
    });

    // Atajo de teclado Cmd+K / Ctrl+K
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
      }
      if (e.key === 'Escape') {
        resultsContainer.classList.remove('active');
        input.blur();
      }
    });
  })();
<\/script> `], ["", `<div class="blog-search" data-astro-cid-ezfxcgpt> <div class="blog-search__input-wrap" data-astro-cid-ezfxcgpt> <svg class="blog-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-ezfxcgpt> <circle cx="11" cy="11" r="8" data-astro-cid-ezfxcgpt></circle> <path d="m21 21-4.35-4.35" data-astro-cid-ezfxcgpt></path> </svg> <input type="search" id="blog-search-input" class="blog-search__input" placeholder="Buscar art\xEDculos..." autocomplete="off" data-astro-cid-ezfxcgpt> <kbd class="blog-search__kbd" data-astro-cid-ezfxcgpt>\u2318K</kbd> </div> <div id="blog-search-results" class="blog-search__results" data-astro-cid-ezfxcgpt></div> </div> <script>
  // Inicializar Pagefind cuando el DOM est\xE9 listo
  (async function initPagefind() {
    const input = document.getElementById('blog-search-input');
    const resultsContainer = document.getElementById('blog-search-results');

    if (!input || !resultsContainer) return;

    // Cargar Pagefind din\xE1micamente (solo disponible despu\xE9s del build)
    let pagefind;

    try {
      pagefind = await import('/pagefind/pagefind.js');
      await pagefind.init();
    } catch (e) {
      // Pagefind no disponible en dev mode - mostrar mensaje
      input.placeholder = 'B\xFAsqueda disponible en producci\xF3n';
      return;
    }

    // Debounce para b\xFAsqueda
    let timeout;

    input.addEventListener('input', async () => {
      clearTimeout(timeout);
      const query = input.value.trim();

      if (query.length < 2) {
        resultsContainer.innerHTML = '';
        resultsContainer.classList.remove('active');
        return;
      }

      timeout = setTimeout(async () => {
        const search = await pagefind.search(query);
        const results = await Promise.all(
          search.results.slice(0, 5).map((r) => r.data())
        );

        if (results.length === 0) {
          resultsContainer.innerHTML = \\\`
            <div class="blog-search__no-results">
              No se encontraron resultados para "\\\${query}"
            </div>
          \\\`;
        } else {
          resultsContainer.innerHTML = results.map((result) => \\\`
            <a href="\\\${result.url}" class="blog-search__result">
              <span class="blog-search__result-title">\\\${result.meta.title || 'Sin t\xEDtulo'}</span>
              <span class="blog-search__result-excerpt">\\\${result.excerpt}</span>
            </a>
          \\\`).join('');
        }

        resultsContainer.classList.add('active');
      }, 200);
    });

    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
        resultsContainer.classList.remove('active');
      }
    });

    // Atajo de teclado Cmd+K / Ctrl+K
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
      }
      if (e.key === 'Escape') {
        resultsContainer.classList.remove('active');
        input.blur();
      }
    });
  })();
<\/script> `])), maybeRenderHead());
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/BlogSearch.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const ARTICLES_PER_PAGE = 6;
  const currentPage = 1;
  const allArticulos = getAllArticulos();
  const totalPages = Math.ceil(allArticulos.length / ARTICLES_PER_PAGE);
  const articulos = allArticulos.slice(0, ARTICLES_PER_PAGE);
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
    { label: "Blog" }
  ];
  const articulosCdn = articulos.map((a) => ({ ...a, imagen: cdnW(a.imagen, 500) }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Blog BOMBERO.MX \u2014 Art\xEDculos para Bomberos y Brigadas", "description": "Art\xEDculos t\xE9cnicos sobre equipo para bomberos, normativas NFPA, t\xE9cnicas de rescate, mantenimiento de EPP y m\xE1s. Contenido profesional para cuerpos de bomberos y brigadas industriales.", "keywords": ["blog bomberos", "art\xEDculos NFPA", "t\xE9cnicas rescate", "mantenimiento EPP", "brigadas industriales"], "canonical": "/blog", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "items": breadcrumb, "data-astro-cid-5tznm7mj": true })}    ${maybeRenderHead()}<section class="blog-index-hero" data-astro-cid-5tznm7mj> <div class="blog-index-hero__bg" data-astro-cid-5tznm7mj> <div class="blog-index-hero__gradient" data-astro-cid-5tznm7mj></div> <div class="blog-index-hero__grid" data-astro-cid-5tznm7mj></div> <div class="blog-index-hero__glow blog-index-hero__glow--1" data-astro-cid-5tznm7mj></div> <div class="blog-index-hero__glow blog-index-hero__glow--2" data-astro-cid-5tznm7mj></div> </div> <div class="container hero__container" data-astro-cid-5tznm7mj> <div class="hero__content" data-astro-cid-5tznm7mj> <div class="hero__badge" data-astro-cid-5tznm7mj> <span class="hero__badge-dot" data-astro-cid-5tznm7mj></span>
Blog · Artículos · Guías Técnicas
</div> <h1 class="hero__title" data-astro-cid-5tznm7mj>
Blog
<span class="hero__title-highlight" data-astro-cid-5tznm7mj>BOMBERO.MX</span> </h1> <p class="hero__subtitle" data-astro-cid-5tznm7mj>
Artículos técnicos, guías de normativas, técnicas de rescate y todo lo que necesitas saber sobre equipo para bomberos y brigadas industriales.
</p> <div class="hero__actions" data-astro-cid-5tznm7mj> <a href="#articulos" class="btn btn--primary btn--lg" data-astro-cid-5tznm7mj> <span data-astro-cid-5tznm7mj>Ver artículos</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-5tznm7mj></path> </svg> </a> <a href="/cotizar" class="btn btn--ghost btn--lg" data-astro-cid-5tznm7mj> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-5tznm7mj> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" data-astro-cid-5tznm7mj></path> </svg> <span data-astro-cid-5tznm7mj>Solicitar cotización</span> </a> </div> </div> <div class="hero__seo" data-astro-cid-5tznm7mj> <div class="hero__seo-block" data-astro-cid-5tznm7mj> <h2 class="hero__seo-title" data-astro-cid-5tznm7mj>Contenido Técnico para Bomberos Profesionales</h2> <p class="hero__seo-text" data-astro-cid-5tznm7mj>
En el <strong data-astro-cid-5tznm7mj>Blog de BOMBERO.MX</strong> publicamos artículos técnicos sobre <strong data-astro-cid-5tznm7mj>normativas NFPA</strong>, guías de mantenimiento de <strong data-astro-cid-5tznm7mj>equipos SCBA</strong>, técnicas modernas de <strong data-astro-cid-5tznm7mj>rescate vehicular</strong> y forestales. Contenido creado por especialistas para cuerpos de bomberos, protección civil y <strong data-astro-cid-5tznm7mj>brigadas industriales</strong> en México.
</p> </div> <div class="hero__seo-block" data-astro-cid-5tznm7mj> <h2 class="hero__seo-title" data-astro-cid-5tznm7mj>Guías de Selección y Uso de EPP</h2> <p class="hero__seo-text" data-astro-cid-5tznm7mj>
Aprende a seleccionar el <strong data-astro-cid-5tznm7mj>equipo de protección personal</strong> correcto según tu tipo de operación. Desde <strong data-astro-cid-5tznm7mj>cascos estructurales NFPA 1971</strong> hasta <strong data-astro-cid-5tznm7mj>trajes forestales NFPA 1977</strong>, nuestros artículos te ayudan a entender las certificaciones, requisitos de mantenimiento y mejores prácticas para cada pieza de tu equipamiento.
</p> </div> </div> </div> </section>    <div class="blog-index-layout" data-astro-cid-5tznm7mj> <div class="container blog-index-layout__inner" data-astro-cid-5tznm7mj> <!-- ─── COLUMNA PRINCIPAL ─── --> <main class="blog-index-main" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "\xDAltimos Art\xEDculos", "title": "Contenido para Profesionales", "description": "Gu\xEDas t\xE9cnicas y art\xEDculos especializados para cuerpos de bomberos y brigadas industriales.", "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-5tznm7mj>Nuestro equipo de <strong data-astro-cid-5tznm7mj>especialistas en protección contra incendios</strong> investiga y documenta las mejores prácticas para bomberos profesionales, incluyendo análisis de <strong data-astro-cid-5tznm7mj>normativas NFPA</strong>, guías de mantenimiento de SCBA, y técnicas modernas de rescate.</p> <p data-astro-cid-5tznm7mj>Cada artículo está diseñado para aportar valor real a <strong data-astro-cid-5tznm7mj>estaciones de bomberos</strong>, <strong data-astro-cid-5tznm7mj>brigadas industriales</strong> y equipos de protección civil que buscan mejorar sus protocolos y selección de equipo.</p> ` })} <div class="blog-grid" id="articulos" data-astro-cid-5tznm7mj> ${articulosCdn.map((articulo) => renderTemplate`<article class="blog-card" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${articulo.slug}`, "href")} class="blog-card__link" data-astro-cid-5tznm7mj> <div class="blog-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(articulo.imagen, "src")}${addAttribute(articulo.titulo, "alt")} loading="lazy" width="500" height="280" class="blog-card__img" data-astro-cid-5tznm7mj> <span class="blog-card__badge" data-astro-cid-5tznm7mj>${articulo.categoria}</span> </div> <div class="blog-card__body" data-astro-cid-5tznm7mj> <h2 class="blog-card__title" data-astro-cid-5tznm7mj>${articulo.titulo}</h2> <p class="blog-card__excerpt" data-astro-cid-5tznm7mj>${articulo.excerpt}</p> <div class="blog-card__tags" data-astro-cid-5tznm7mj> ${articulo.tags.slice(0, 3).map((tag) => renderTemplate`<span class="blog-card__tag" data-astro-cid-5tznm7mj>${tag}</span>`)} </div> <span class="blog-card__anchor" data-astro-cid-5tznm7mj> ${articulo.anchorKeyword} <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true" data-astro-cid-5tznm7mj> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-5tznm7mj></path> </svg> </span> </div> </a> </article>`)} </div> <!-- Paginación --> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": currentPage, "totalPages": totalPages, "baseUrl": "/blog", "data-astro-cid-5tznm7mj": true })}`} </main> <!-- ─── SIDEBAR ─── --> <aside class="blog-index-sidebar" data-astro-cid-5tznm7mj> <!-- BÚSQUEDA --> <div class="sb-card sb-card--search" data-astro-cid-5tznm7mj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-5tznm7mj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><circle cx="11" cy="11" r="8" data-astro-cid-5tznm7mj></circle><path d="m21 21-4.35-4.35" data-astro-cid-5tznm7mj></path></svg>
Buscar
</h3> ${renderComponent($$result2, "BlogSearch", $$BlogSearch, { "data-astro-cid-5tznm7mj": true })} <a href="/blog/rss.xml" class="sb-rss-link" target="_blank" rel="noopener" data-astro-cid-5tznm7mj> <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-5tznm7mj><path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z" data-astro-cid-5tznm7mj></path></svg>
Suscríbete al RSS
</a> </div> <!-- CTA COTIZAR --> <div class="sb-card sb-card--cta" data-astro-cid-5tznm7mj> <h3 class="sb-card__title" data-astro-cid-5tznm7mj>Catálogo de Productos</h3> <p class="sb-card__text" data-astro-cid-5tznm7mj>Equipo certificado NFPA listo para envío a toda la República.</p> <a href="/productos" class="sb-cta-btn" data-astro-cid-5tznm7mj> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-5tznm7mj></path></svg>
Ver Productos
</a> <div class="sb-card__contacts" data-astro-cid-5tznm7mj> <a href="https://wa.me/525520780102" target="_blank" rel="noopener noreferrer" class="sb-contact sb-contact--wa" data-astro-cid-5tznm7mj> <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-5tznm7mj><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" data-astro-cid-5tznm7mj></path></svg>
WhatsApp
</a> </div> </div> <!-- CATEGORÍAS --> <div class="sb-card" data-astro-cid-5tznm7mj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-5tznm7mj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5tznm7mj></path></svg>
Categorías
</h3> <ul class="sb-cats" data-astro-cid-5tznm7mj> ${categorias.map((cat) => renderTemplate`<li class="sb-cat" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/categoria/${cat.slug}`, "href")} class="sb-cat__link" data-astro-cid-5tznm7mj> <span class="sb-cat__label" data-astro-cid-5tznm7mj>${cat.label}</span> <span class="sb-cat__count" data-astro-cid-5tznm7mj>${cat.count}</span> </a> </li>`)} </ul> </div> <!-- PRODUCTOS DESTACADOS --> <div class="sb-card" data-astro-cid-5tznm7mj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-5tznm7mj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-5tznm7mj></path></svg>
Productos Destacados
</h3> <ul class="sb-links" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/productos/trajes-para-bomberos" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Trajes Estructurales
</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/cascos-para-bomberos" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Cascos NFPA
</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/capuchas-para-bomberos" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Capuchas NFPA
</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/guantes-para-bomberos" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Guantes Estructurales
</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/botas-para-bomberos" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Botas de Cuero
</a></li> </ul> <a href="/productos" class="sb-see-all" data-astro-cid-5tznm7mj>Ver catálogo completo →</a> </div> <!-- DIRECTORIO --> <div class="sb-card" data-astro-cid-5tznm7mj> <h3 class="sb-card__title sb-card__title--dark" data-astro-cid-5tznm7mj> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-5tznm7mj></path><circle cx="12" cy="10" r="3" data-astro-cid-5tznm7mj></circle></svg>
Directorio de Bomberos
</h3> <ul class="sb-links" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/directorio/ciudad-de-mexico" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Ciudad de México
</a></li> <li data-astro-cid-5tznm7mj><a href="/directorio/jalisco" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Jalisco
</a></li> <li data-astro-cid-5tznm7mj><a href="/directorio/nuevo-leon" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Nuevo León
</a></li> <li data-astro-cid-5tznm7mj><a href="/directorio/veracruz" class="sb-link" data-astro-cid-5tznm7mj> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-5tznm7mj><path d="M9 18l6-6-6-6" data-astro-cid-5tznm7mj></path></svg>
Veracruz
</a></li> </ul> <a href="/directorio" class="sb-see-all" data-astro-cid-5tznm7mj>Ver directorio completo →</a> </div> </aside> </div> </div>    <section class="epp-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Equipo Complementario", "title": "Completa tu EPP de Bombero", "description": "El traje es solo el comienzo. Equipa a tu personal con el sistema de protecci\xF3n completo.", "data-astro-cid-5tznm7mj": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-5tznm7mj>Un sistema de EPP completo requiere que traje, casco, guantes y botas sean compatibles y cumplan la misma edición de norma <strong data-astro-cid-5tznm7mj>NFPA</strong>. El traje estructural NFPA 1971 debe usarse con casco estructural NFPA 1971, guantes estructurales, botas de cuero certificadas y <strong data-astro-cid-5tznm7mj>SCBA autónomo</strong> para garantizar protección integral en cada operación.</p> <p data-astro-cid-5tznm7mj>En <strong data-astro-cid-5tznm7mj>BOMBERO.MX</strong> equipamos a tu personal con todo el sistema de protección personal de una sola fuente: cascos para bombero, guantes, botas certificadas NFPA y SCBA, con asesoría técnica sin costo y disponibilidad inmediata para los <strong data-astro-cid-5tznm7mj>32 estados de México</strong>.</p> ` })} <div class="epp-grid" data-astro-cid-5tznm7mj> <!-- Cascos --> <article class="epp-card" data-astro-cid-5tznm7mj> <div class="epp-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(cdnW("/images/directorio/casco-bombero-proteccion-cabeza-01.avif", 400), "src")} alt="Cascos para Bombero" width="400" height="225" loading="lazy" class="epp-card__img" data-astro-cid-5tznm7mj> </div> <div class="epp-card__body" data-astro-cid-5tznm7mj> <h3 class="epp-card__title" data-astro-cid-5tznm7mj>Cascos para Bombero</h3> <ul class="epp-card__list" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/productos/cascos-para-bomberos/casco-estructural-nfpa-1971" data-astro-cid-5tznm7mj>Casco Estructural NFPA 1971</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" data-astro-cid-5tznm7mj>Casco Forestal NFPA 1977</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" data-astro-cid-5tznm7mj>Casco de Rescate NFPA 1951</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/cascos-para-bomberos/casco-hazmat-quimico" data-astro-cid-5tznm7mj>Casco HAZMAT Químico</a></li> </ul> <a href="/productos/cascos-para-bomberos" class="epp-card__link" data-astro-cid-5tznm7mj>Cascos para Bombero</a> </div> </article> <!-- Guantes --> <article class="epp-card" data-astro-cid-5tznm7mj> <div class="epp-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(cdnW("/images/directorio/guantes-bombero-resistentes-01.avif", 400), "src")} alt="Guantes para Bombero" width="400" height="225" loading="lazy" class="epp-card__img" data-astro-cid-5tznm7mj> </div> <div class="epp-card__body" data-astro-cid-5tznm7mj> <h3 class="epp-card__title" data-astro-cid-5tznm7mj>Guantes para Bombero</h3> <ul class="epp-card__list" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/productos/guantes-para-bomberos/estructurales" data-astro-cid-5tznm7mj>Guantes Estructurales</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/guantes-para-bomberos/rescate" data-astro-cid-5tznm7mj>Guantes de Rescate / Extricación</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/guantes-para-bomberos/hazmat" data-astro-cid-5tznm7mj>Guantes HAZMAT</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/guantes-para-bomberos/forestales" data-astro-cid-5tznm7mj>Guantes Forestales</a></li> </ul> <a href="/productos/guantes-para-bomberos" class="epp-card__link" data-astro-cid-5tznm7mj>Guantes para Bombero</a> </div> </article> <!-- Botas --> <article class="epp-card" data-astro-cid-5tznm7mj> <div class="epp-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(cdnW("/images/directorio/botas-bombero-proteccion-01.avif", 400), "src")} alt="Botas para Bombero" width="400" height="225" loading="lazy" class="epp-card__img" data-astro-cid-5tznm7mj> </div> <div class="epp-card__body" data-astro-cid-5tznm7mj> <h3 class="epp-card__title" data-astro-cid-5tznm7mj>Botas para Bombero</h3> <ul class="epp-card__list" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/productos/botas-para-bomberos/estructural" data-astro-cid-5tznm7mj>Bota Estructural (Cuero)</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/botas-para-bomberos/caucho" data-astro-cid-5tznm7mj>Bota de Caucho (HAZMAT)</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/botas-para-bomberos/forestal" data-astro-cid-5tznm7mj>Bota Forestal</a></li> </ul> <a href="/productos/botas-para-bomberos" class="epp-card__link" data-astro-cid-5tznm7mj>Botas para Bombero</a> </div> </article> <!-- Capuchas --> <article class="epp-card" data-astro-cid-5tznm7mj> <div class="epp-card__img-wrap" data-astro-cid-5tznm7mj> <img${addAttribute(cdnW("/images/directorio/capucha-bombero-nomex-01.avif", 400), "src")} alt="Capuchas para Bombero" width="400" height="225" loading="lazy" class="epp-card__img" data-astro-cid-5tznm7mj> </div> <div class="epp-card__body" data-astro-cid-5tznm7mj> <h3 class="epp-card__title" data-astro-cid-5tznm7mj>Capuchas para Bombero</h3> <ul class="epp-card__list" data-astro-cid-5tznm7mj> <li data-astro-cid-5tznm7mj><a href="/productos/capuchas-para-bomberos/nomex" data-astro-cid-5tznm7mj>Capucha Nomex® Estructural</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/capuchas-para-bomberos/pbi" data-astro-cid-5tznm7mj>Capucha PBI Gold® Premium</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/capuchas-para-bomberos/particulada" data-astro-cid-5tznm7mj>Capucha Particulada PM2.5</a></li> <li data-astro-cid-5tznm7mj><a href="/productos/gafas-para-bomberos" data-astro-cid-5tznm7mj>Gafas y Protección Visual</a></li> </ul> <a href="/productos/capuchas-para-bomberos" class="epp-card__link" data-astro-cid-5tznm7mj>Capuchas para Bombero</a> </div> </article> </div> </div> </section> ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": "Explora Nuestro Cat\xE1logo Completo", "desc": "M\xE1s de 500 productos certificados NFPA listos para env\xEDo inmediato a toda la Rep\xFAblica.", "btnText": "Ver Cat\xE1logo", "btnHref": "/productos", "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
