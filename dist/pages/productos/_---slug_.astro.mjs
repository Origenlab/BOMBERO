import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../chunks/PageLayout_C37tG6Zv.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  const rutas = [
    { slug: "epp-bomberos", nombre: "EPP Bomberos" },
    { slug: "trajes", nombre: "Trajes" },
    { slug: "trajes/estructural", nombre: "Trajes Estructurales" },
    { slug: "trajes/forestal", nombre: "Trajes Forestales" },
    { slug: "trajes/arff", nombre: "Trajes ARFF" },
    { slug: "trajes/aproximacion", nombre: "Trajes de Aproximaci\xF3n" },
    { slug: "trajes/hazmat", nombre: "Trajes HAZMAT" },
    { slug: "cascos", nombre: "Cascos" },
    { slug: "cascos/estructural", nombre: "Cascos Estructurales" },
    { slug: "cascos/forestal", nombre: "Cascos Forestales" },
    { slug: "cascos/rescate", nombre: "Cascos de Rescate" },
    { slug: "cascos/accesorios", nombre: "Accesorios para Cascos" },
    { slug: "guantes-botas", nombre: "Guantes y Botas" },
    { slug: "botas", nombre: "Botas" },
    { slug: "botas/estructural", nombre: "Botas Estructurales" },
    { slug: "botas/caucho", nombre: "Botas de Caucho" },
    { slug: "botas/forestal", nombre: "Botas Forestales" },
    { slug: "guantes", nombre: "Guantes" },
    { slug: "guantes/estructurales", nombre: "Guantes Estructurales" },
    { slug: "guantes/rescate", nombre: "Guantes de Rescate" },
    { slug: "guantes/hazmat", nombre: "Guantes HAZMAT" },
    { slug: "guantes/forestales", nombre: "Guantes Forestales" },
    { slug: "capuchas", nombre: "Capuchas" },
    { slug: "gafas", nombre: "Gafas" },
    { slug: "scba", nombre: "SCBA" },
    { slug: "equipo-contra-incendios", nombre: "Equipo Contra Incendios" },
    { slug: "herramientas-rescate", nombre: "Herramientas de Rescate" },
    { slug: "tecnologia", nombre: "Tecnolog\xEDa" },
    { slug: "extintores", nombre: "Extintores" },
    { slug: "forestales", nombre: "Equipos Forestales" },
    { slug: "rescate-acuatico", nombre: "Rescate Acu\xE1tico" },
    { slug: "hazmat", nombre: "Equipos HAZMAT" },
    { slug: "buceo", nombre: "Equipos de Buceo" }
  ];
  return rutas.map((item) => ({
    params: { slug: item.slug },
    props: { item }
  }));
}
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { item } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${item.nombre} | Cat\xE1logo en Actualizaci\xF3n`, "description": `Estamos preparando la ficha t\xE9cnica de ${item.nombre} con especificaciones, comparativos y opciones de cotizaci\xF3n.`, "noindex": true, "canonical": `https://bombero.mx/productos/${item.slug}`, "data-astro-cid-774ccp2p": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section" data-astro-cid-774ccp2p> <div class="container container--narrow" data-astro-cid-774ccp2p> <nav aria-label="Breadcrumb" class="products-breadcrumb" data-astro-cid-774ccp2p> <a href="/" data-astro-cid-774ccp2p>Inicio</a> <span data-astro-cid-774ccp2p>/</span> <a href="/productos" data-astro-cid-774ccp2p>Productos</a> <span data-astro-cid-774ccp2p>/</span> <span data-astro-cid-774ccp2p>${item.nombre}</span> </nav> <h1 data-astro-cid-774ccp2p>${item.nombre}</h1> <p data-astro-cid-774ccp2p>
Esta categoría está en actualización editorial.
        Próximamente publicaremos información técnica detallada,
        aplicaciones recomendadas y guías de selección por riesgo operativo.
</p> <a class="products-link" href="/cotizar" data-astro-cid-774ccp2p>Solicitar cotización</a> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/[...slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/[...slug].astro";
const $$url = "/productos/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
