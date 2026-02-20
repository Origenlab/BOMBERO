import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C37tG6Zv.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  const estadosPendientes = [
    { slug: "guerrero", nombre: "Guerrero" },
    { slug: "hidalgo", nombre: "Hidalgo" },
    { slug: "jalisco", nombre: "Jalisco" },
    { slug: "michoacan", nombre: "Michoac\xE1n" },
    { slug: "morelos", nombre: "Morelos" },
    { slug: "nayarit", nombre: "Nayarit" },
    { slug: "nuevo-leon", nombre: "Nuevo Le\xF3n" },
    { slug: "oaxaca", nombre: "Oaxaca" },
    { slug: "puebla", nombre: "Puebla" },
    { slug: "queretaro", nombre: "Quer\xE9taro" },
    { slug: "quintana-roo", nombre: "Quintana Roo" },
    { slug: "san-luis-potosi", nombre: "San Luis Potos\xED" },
    { slug: "sinaloa", nombre: "Sinaloa" },
    { slug: "sonora", nombre: "Sonora" },
    { slug: "tabasco", nombre: "Tabasco" },
    { slug: "tamaulipas", nombre: "Tamaulipas" },
    { slug: "tlaxcala", nombre: "Tlaxcala" },
    { slug: "veracruz", nombre: "Veracruz" },
    { slug: "yucatan", nombre: "Yucat\xE1n" },
    { slug: "zacatecas", nombre: "Zacatecas" }
  ];
  return estadosPendientes.map((estado) => ({
    params: { estado: estado.slug },
    props: { estado }
  }));
}
const $$estado = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$estado;
  const estadosPublicados = [
    { slug: "aguascalientes", nombre: "Aguascalientes" },
    { slug: "baja-california", nombre: "Baja California" },
    { slug: "baja-california-sur", nombre: "Baja California Sur" },
    { slug: "campeche", nombre: "Campeche" },
    { slug: "chiapas", nombre: "Chiapas" },
    { slug: "chihuahua", nombre: "Chihuahua" },
    { slug: "ciudad-de-mexico", nombre: "Ciudad de M\xE9xico" },
    { slug: "coahuila", nombre: "Coahuila" },
    { slug: "colima", nombre: "Colima" },
    { slug: "durango", nombre: "Durango" },
    { slug: "estado-de-mexico", nombre: "Estado de M\xE9xico" }
  ];
  const { estado } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Bomberos en ${estado.nombre} | Directorio en Actualizaci\xF3n`, "description": `Estamos completando la cobertura del directorio de estaciones de bomberos en ${estado.nombre}. Mientras tanto, consulta los estados ya publicados.`, "noindex": true, "canonical": `https://bombero.mx/directorio/${estado.slug}`, "data-astro-cid-bnlyn6oz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="pending-state section" data-astro-cid-bnlyn6oz> <div class="container container--narrow" data-astro-cid-bnlyn6oz> <nav class="pending-state__breadcrumb" aria-label="Breadcrumb" data-astro-cid-bnlyn6oz> <a href="/" data-astro-cid-bnlyn6oz>Inicio</a> <span data-astro-cid-bnlyn6oz>/</span> <a href="/directorio" data-astro-cid-bnlyn6oz>Directorio</a> <span data-astro-cid-bnlyn6oz>/</span> <span data-astro-cid-bnlyn6oz>${estado.nombre}</span> </nav> <h1 data-astro-cid-bnlyn6oz>Directorio de Bomberos en ${estado.nombre}</h1> <p data-astro-cid-bnlyn6oz>
Esta sección está en proceso de publicación editorial.
        Nuestro equipo está validando teléfonos, direcciones y cobertura operativa
        para mantener calidad y precisión en cada ficha.
</p> <h2 data-astro-cid-bnlyn6oz>Estados disponibles actualmente</h2> <ul class="pending-state__list" data-astro-cid-bnlyn6oz> ${estadosPublicados.map((item) => renderTemplate`<li data-astro-cid-bnlyn6oz> <a${addAttribute(`/directorio/${item.slug}`, "href")} data-astro-cid-bnlyn6oz>${item.nombre}</a> </li>`)} </ul> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/[estado].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/[estado].astro";
const $$url = "/directorio/[estado]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$estado,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
