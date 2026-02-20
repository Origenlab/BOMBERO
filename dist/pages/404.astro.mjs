import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_C37tG6Zv.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "P\xE1gina no encontrada", "description": "La p\xE1gina que buscas no existe o fue movida.", "noindex": true, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="error-page section" data-astro-cid-zetdm5md> <div class="container" style="text-align: center;" data-astro-cid-zetdm5md> <p class="error-page__code" data-astro-cid-zetdm5md>404</p> <h1 class="error-page__title" data-astro-cid-zetdm5md>Página no encontrada</h1> <p class="error-page__description" data-astro-cid-zetdm5md>
Lo sentimos, la página que buscas no existe o fue movida a otra dirección.
</p> <a href="/" class="btn btn--primary" data-astro-cid-zetdm5md>Volver al inicio</a> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/404.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
