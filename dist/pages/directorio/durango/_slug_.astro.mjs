import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesDurango } from '../../../chunks/estaciones-durango_BgbnrBUs.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesDurango.map((estacion) => ({
    params: { slug: estacion.slug },
    props: { estacion }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { estacion } = Astro2.props;
  const metaSEO = generarMetaSEO(estacion);
  const contextoZona = getContextoZona(estacion.ciudad);
  const esCapital = estacion.ciudad === "Durango";
  const esGomezPalacio = estacion.ciudad === "G\xF3mez Palacio";
  const esLerdo = estacion.ciudad === "Lerdo";
  const esSierra = ["Santiago Papasquiaro", "Pueblo Nuevo", "Pueblo Nuevo (El Salto)"].includes(estacion.ciudad);
  const esPuebloMagico = estacion.ciudad === "Nombre de Dios";
  const esAgricola = ["Canatl\xE1n", "Vicente Guerrero"].includes(estacion.ciudad);
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-ob6owvyj": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="dgo-station" data-astro-cid-ob6owvyj> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         HERO SECTION\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="dgo-station-hero" data-astro-cid-ob6owvyj> <div class="dgo-station-hero__container" data-astro-cid-ob6owvyj> <!-- Badges --> <div class="dgo-station-hero__badges" data-astro-cid-ob6owvyj> <span class="dgo-station-hero__badge dgo-station-hero__badge--state" data-astro-cid-ob6owvyj>DGO</span> <span class="dgo-station-hero__badge dgo-station-hero__badge--zone" data-astro-cid-ob6owvyj>', "</span> ", " ", " ", " ", " ", ' </div> <h1 class="dgo-station-hero__title" data-astro-cid-ob6owvyj>', '</h1> <p class="dgo-station-hero__location" data-astro-cid-ob6owvyj> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-ob6owvyj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-ob6owvyj></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-ob6owvyj></path> </svg> ', ', Durango, M\xE9xico\n</p> <!-- Estad\xEDsticas r\xE1pidas --> <div class="dgo-station-hero__stats" data-astro-cid-ob6owvyj> <div class="dgo-station-hero__stat" data-astro-cid-ob6owvyj> <span class="dgo-station-hero__stat-value" data-astro-cid-ob6owvyj>', '</span> <span class="dgo-station-hero__stat-label" data-astro-cid-ob6owvyj>Bomberos</span> </div> <div class="dgo-station-hero__stat" data-astro-cid-ob6owvyj> <span class="dgo-station-hero__stat-value" data-astro-cid-ob6owvyj>', '</span> <span class="dgo-station-hero__stat-label" data-astro-cid-ob6owvyj>Unidades</span> </div> <div class="dgo-station-hero__stat" data-astro-cid-ob6owvyj> <span class="dgo-station-hero__stat-value" data-astro-cid-ob6owvyj>24/7</span> <span class="dgo-station-hero__stat-label" data-astro-cid-ob6owvyj>Servicio</span> </div> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BANNER DE EMERGENCIA\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="dgo-station-emergency" data-astro-cid-ob6owvyj> <div class="dgo-station-emergency__container" data-astro-cid-ob6owvyj> <div class="dgo-station-emergency__phone" data-astro-cid-ob6owvyj> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-ob6owvyj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-ob6owvyj></path> </svg> <div data-astro-cid-ob6owvyj> <span class="dgo-station-emergency__label" data-astro-cid-ob6owvyj>Tel\xE9fono de emergencia</span> <a', ' class="dgo-station-emergency__number" data-astro-cid-ob6owvyj> ', ' </a> </div> </div> <div class="dgo-station-emergency__national" data-astro-cid-ob6owvyj> <span data-astro-cid-ob6owvyj>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-ob6owvyj><strong data-astro-cid-ob6owvyj>911</strong></a> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         CONTENIDO PRINCIPAL\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div class="dgo-station-content" data-astro-cid-ob6owvyj> <div class="dgo-station-content__container" data-astro-cid-ob6owvyj> <!-- Columna Principal --> <div class="dgo-station-content__main" data-astro-cid-ob6owvyj> <!-- Descripci\xF3n y Contexto --> <section class="dgo-station-section" data-astro-cid-ob6owvyj> <h2 class="dgo-station-section__title" data-astro-cid-ob6owvyj>Acerca de esta Estaci\xF3n</h2> <div class="dgo-station-section__content" data-astro-cid-ob6owvyj> <p data-astro-cid-ob6owvyj>', "</p>  ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios --> <section class="dgo-station-section" data-astro-cid-ob6owvyj> <h2 class="dgo-station-section__title" data-astro-cid-ob6owvyj>Servicios de Emergencia</h2> <ul class="dgo-station-services" data-astro-cid-ob6owvyj> ', ' </ul> </section> <!-- Equipamiento --> <section class="dgo-station-section" data-astro-cid-ob6owvyj> <h2 class="dgo-station-section__title" data-astro-cid-ob6owvyj>Equipamiento y Unidades</h2> <div class="dgo-station-equipment" data-astro-cid-ob6owvyj> ', ' </div> </section> <!-- Mapa --> <section class="dgo-station-section" data-astro-cid-ob6owvyj> <h2 class="dgo-station-section__title" data-astro-cid-ob6owvyj>Ubicaci\xF3n</h2> <div class="dgo-station-map" data-astro-cid-ob6owvyj> <div class="dgo-station-map__placeholder" data-astro-cid-ob6owvyj> <p data-astro-cid-ob6owvyj><strong data-astro-cid-ob6owvyj>Direcci\xF3n:</strong> ', "</p> <p data-astro-cid-ob6owvyj><strong data-astro-cid-ob6owvyj>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-ob6owvyj><strong data-astro-cid-ob6owvyj>Coordenadas:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="dgo-station-map__link" data-astro-cid-ob6owvyj>\nVer en Google Maps\n</a> </div> </div> </section> </div> <!-- Sidebar --> <aside class="dgo-station-sidebar" data-astro-cid-ob6owvyj> <!-- Informaci\xF3n de Contacto --> <div class="dgo-station-card dgo-station-card--contact" data-astro-cid-ob6owvyj> <h3 class="dgo-station-card__title" data-astro-cid-ob6owvyj>Informaci\xF3n de Contacto</h3> <ul class="dgo-station-card__list" data-astro-cid-ob6owvyj> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Tel\xE9fono:</strong> <a', " data-astro-cid-ob6owvyj>", "</a> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Email:</strong> <a", " data-astro-cid-ob6owvyj>", "</a> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Horario:</strong> <span data-astro-cid-ob6owvyj>", "</span> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Direcci\xF3n:</strong> <span data-astro-cid-ob6owvyj>", "</span> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>C.P.:</strong> <span data-astro-cid-ob6owvyj>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas --> <div class="dgo-station-card" data-astro-cid-ob6owvyj> <h3 class="dgo-station-card__title" data-astro-cid-ob6owvyj>Datos de la Estaci\xF3n</h3> <ul class="dgo-station-card__list" data-astro-cid-ob6owvyj> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Personal:</strong> <span data-astro-cid-ob6owvyj>', " bomberos</span> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Unidades:</strong> <span data-astro-cid-ob6owvyj>", " veh\xEDculos</span> </li> ", " <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Zona:</strong> <span data-astro-cid-ob6owvyj>", "</span> </li> <li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Actualizado:</strong> <span data-astro-cid-ob6owvyj>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos Regionales --> <div class="dgo-station-card dgo-station-card--phones" data-astro-cid-ob6owvyj> <h3 class="dgo-station-card__title" data-astro-cid-ob6owvyj>Emergencias Durango</h3> <ul class="dgo-station-card__phones" data-astro-cid-ob6owvyj> <li data-astro-cid-ob6owvyj> <span data-astro-cid-ob6owvyj>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-ob6owvyj>911</a> </li> <li data-astro-cid-ob6owvyj> <span data-astro-cid-ob6owvyj>Bomberos Durango</span> <a href="tel:+526188144555" data-astro-cid-ob6owvyj>(618) 814-4555</a> </li> <li data-astro-cid-ob6owvyj> <span data-astro-cid-ob6owvyj>Bomberos G\xF3mez Palacio</span> <a href="tel:+528717141210" data-astro-cid-ob6owvyj>(871) 714-1210</a> </li> <li data-astro-cid-ob6owvyj> <span data-astro-cid-ob6owvyj>CONAFOR Incendios</span> <a href="tel:+526188252003" data-astro-cid-ob6owvyj>(618) 825-2003</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="dgo-station-card dgo-station-card--back" data-astro-cid-ob6owvyj> <a href="/directorio/durango" class="dgo-station-back-link" data-astro-cid-ob6owvyj> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-ob6owvyj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-ob6owvyj></path> </svg>\nVer todas las estaciones de Durango\n</a> </div> </aside> </div> </div> <!-- Breadcrumb --> <nav class="dgo-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-ob6owvyj> <ol class="dgo-station-breadcrumb__list" data-astro-cid-ob6owvyj> <li class="dgo-station-breadcrumb__item" data-astro-cid-ob6owvyj><a href="/" data-astro-cid-ob6owvyj>Inicio</a></li> <li class="dgo-station-breadcrumb__item" data-astro-cid-ob6owvyj><a href="/directorio" data-astro-cid-ob6owvyj>Directorio</a></li> <li class="dgo-station-breadcrumb__item" data-astro-cid-ob6owvyj><a href="/directorio/durango" data-astro-cid-ob6owvyj>Durango</a></li> <li class="dgo-station-breadcrumb__item dgo-station-breadcrumb__item--active" data-astro-cid-ob6owvyj>', "</li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Durango",
      "postalCode": estacion.codigoPostal,
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "email": estacion.email,
    "openingHours": "Mo-Su 00:00-23:59",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    },
    "areaServed": {
      "@type": "City",
      "name": estacion.ciudad
    },
    "numberOfEmployees": estacion.personal,
    "url": metaSEO.canonical,
    "sameAs": estacion.redes ? Object.values(estacion.redes) : []
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
      { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
      { "@type": "ListItem", "position": 3, "name": "Durango", "item": "https://bombero.mx/directorio/durango" },
      { "@type": "ListItem", "position": 4, "name": estacion.nombre, "item": metaSEO.canonical }
    ]
  })), maybeRenderHead(), contextoZona.tipo, esCapital && renderTemplate`<span class="dgo-station-hero__badge dgo-station-hero__badge--special" data-astro-cid-ob6owvyj>Capital</span>`, esSierra && renderTemplate`<span class="dgo-station-hero__badge dgo-station-hero__badge--special" data-astro-cid-ob6owvyj>Zona Forestal</span>`, esGomezPalacio && renderTemplate`<span class="dgo-station-hero__badge dgo-station-hero__badge--special" data-astro-cid-ob6owvyj>La Laguna</span>`, esPuebloMagico && renderTemplate`<span class="dgo-station-hero__badge dgo-station-hero__badge--special" data-astro-cid-ob6owvyj>Pueblo Mágico</span>`, esAgricola && renderTemplate`<span class="dgo-station-hero__badge dgo-station-hero__badge--special" data-astro-cid-ob6owvyj>Zona Agrícola</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esCapital && renderTemplate`<div class="dgo-station-context dgo-station-context--capital" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Capital del Estado - Centro de Coordinación Forestal</h3> <p data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Victoria de Durango</strong> es la capital del estado más grande de México por superficie
                    forestal. Esta estación coordina las <strong data-astro-cid-ob6owvyj>13 brigadas estatales</strong> contra incendios forestales
                    y mantiene enlace permanente con <strong data-astro-cid-ob6owvyj>CONAFOR</strong>. El estado aporta el <strong data-astro-cid-ob6owvyj>25% de la
                    producción nacional de madera</strong>, lo que requiere capacidades especiales de respuesta forestal.
</p> </div>`, esSierra && renderTemplate`<div class="dgo-station-context dgo-station-context--forestal" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Sierra Madre Occidental - Zona de Alto Riesgo Forestal</h3> <p data-astro-cid-ob6owvyj>
Esta estación opera en el <strong data-astro-cid-ob6owvyj>corazón forestal de México</strong>, donde se encuentran los
                    bosques de pino-encino más extensos del país. La temporada de incendios forestales
                    (<strong data-astro-cid-ob6owvyj>enero-junio</strong>) requiere personal altamente especializado en combate de fuego
                    en terrenos extremos. El municipio de <strong data-astro-cid-ob6owvyj>Pueblo Nuevo</strong> concentra la mayor superficie
                    boscosa afectable de Durango.
</p> </div>`, esGomezPalacio && renderTemplate`<div class="dgo-station-context dgo-station-context--industrial" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Comarca Lagunera - Principal Cuenca Lechera de México</h3> <p data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Gómez Palacio</strong> es parte de la Comarca Lagunera, sede de <strong data-astro-cid-ob6owvyj>Grupo Lala</strong>
y otras empresas lácteas que conforman la principal cuenca lechera del país. Esta estación
                    tiene especialización en emergencias con <strong data-astro-cid-ob6owvyj>amoniaco</strong> (refrigeración industrial)
                    y <strong data-astro-cid-ob6owvyj>HAZMAT agroindustrial</strong>. La zona metropolitana La Laguna supera 1.3 millones
                    de habitantes.
</p> </div>`, esLerdo && renderTemplate`<div class="dgo-station-context dgo-station-context--laguna" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Ciudad Jardín - Comarca Lagunera</h3> <p data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Lerdo</strong>, conocida como "La Ciudad Jardín" por sus áreas verdes y viñedos,
                    es el tercer municipio más poblado de La Laguna duranguense. Las nuevas instalaciones
                    inauguradas en <strong data-astro-cid-ob6owvyj>2023</strong> cuentan con infraestructura moderna de más de
                    680 metros cuadrados para mejorar los tiempos de respuesta.
</p> </div>`, esPuebloMagico && renderTemplate`<div class="dgo-station-context dgo-station-context--pueblo-magico" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Pueblo Mágico - Primera Villa de Durango (1555)</h3> <p data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Nombre de Dios</strong> fue la primera población española fundada en Durango en
<strong data-astro-cid-ob6owvyj>1555</strong>. Designado Pueblo Mágico en <strong data-astro-cid-ob6owvyj>2023</strong>, cuenta con
                    templos coloniales y arquitectura virreinal del siglo XVI que requieren protocolos
                    especiales de <strong data-astro-cid-ob6owvyj>protección patrimonial</strong>. La estación atiende tanto
                    emergencias turísticas como la preservación del patrimonio histórico.
</p> </div>`, esAgricola && renderTemplate`<div class="dgo-station-context dgo-station-context--agricola" data-astro-cid-ob6owvyj> <h3 data-astro-cid-ob6owvyj>Zona Agrícola y Ganadera</h3> <p data-astro-cid-ob6owvyj>
Esta estación cubre una zona de vocación agrícola y ganadera con comunidades
                    menonitas dedicadas a la producción de lácteos y agricultura. <strong data-astro-cid-ob6owvyj>Canatlán</strong>
es conocida como "Capital de la Manzana" por su feria internacional de este fruto.
                    Personal capacitado para emergencias rurales, incendios en pastizales y rescate
                    vehicular en carreteras federales.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="dgo-station-services__item" data-astro-cid-ob6owvyj> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-ob6owvyj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ob6owvyj></path> </svg> <span data-astro-cid-ob6owvyj>${servicio}</span> </li>`), estacion.equipamiento.map((equipo) => renderTemplate`<div class="dgo-station-equipment__item" data-astro-cid-ob6owvyj> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-ob6owvyj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-ob6owvyj></path> </svg> <span data-astro-cid-ob6owvyj>${equipo}</span> </div>`), estacion.direccion, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, addAttribute(`mailto:${estacion.email}`, "href"), estacion.email, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-ob6owvyj> <strong data-astro-cid-ob6owvyj>Fundación:</strong> <span data-astro-cid-ob6owvyj>${estacion.fechaFundacion}</span> </li>`, contextoZona.tipo, fechaActualizacion, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="dgo-station-card" data-astro-cid-ob6owvyj> <h3 class="dgo-station-card__title" data-astro-cid-ob6owvyj>Redes Sociales</h3> <div class="dgo-station-social" data-astro-cid-ob6owvyj> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="dgo-station-social__link" data-astro-cid-ob6owvyj>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="dgo-station-social__link" data-astro-cid-ob6owvyj>
Twitter/X
</a>`} </div> </div>`, estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/durango/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/durango/[slug].astro";
const $$url = "/directorio/durango/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
