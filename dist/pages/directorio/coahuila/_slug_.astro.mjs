import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesCoahuila } from '../../../chunks/estaciones-coahuila_ChC8n0-e.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesCoahuila.map((estacion) => ({
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
  const esSaltillo = ["Saltillo", "Ramos Arizpe"].includes(estacion.ciudad);
  const esArteaga = estacion.ciudad === "Arteaga";
  const esLaguna = ["Torre\xF3n", "Matamoros", "San Pedro"].includes(estacion.ciudad);
  const esMonclova = ["Monclova", "Frontera", "Casta\xF1os"].includes(estacion.ciudad);
  const esCuatroCienegas = estacion.ciudad === "Cuatro Ci\xE9negas";
  const esCarbonifera = ["Sabinas", "Nueva Rosita", "M\xFAzquiz", "San Juan de Sabinas"].includes(estacion.ciudad);
  const esFronteriza = ["Piedras Negras", "Ciudad Acu\xF1a", "Allende", "Nava"].includes(estacion.ciudad);
  const esVitivinicola = ["Parras de la Fuente", "General Cepeda"].includes(estacion.ciudad);
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-tnyk3vgt": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="coah-station" data-astro-cid-tnyk3vgt> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         HERO SECTION\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="coah-station-hero" data-astro-cid-tnyk3vgt> <div class="coah-station-hero__container" data-astro-cid-tnyk3vgt> <!-- Badges --> <div class="coah-station-hero__badges" data-astro-cid-tnyk3vgt> <span class="coah-station-hero__badge coah-station-hero__badge--state" data-astro-cid-tnyk3vgt>COAH</span> <span class="coah-station-hero__badge coah-station-hero__badge--zone" data-astro-cid-tnyk3vgt>', "</span> ", " ", " ", " ", " ", " ", " ", ' </div> <h1 class="coah-station-hero__title" data-astro-cid-tnyk3vgt>', '</h1> <p class="coah-station-hero__location" data-astro-cid-tnyk3vgt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-tnyk3vgt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-tnyk3vgt></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-tnyk3vgt></path> </svg> ', ', Coahuila, M\xE9xico\n</p> <!-- Estad\xEDsticas r\xE1pidas --> <div class="coah-station-hero__stats" data-astro-cid-tnyk3vgt> <div class="coah-station-hero__stat" data-astro-cid-tnyk3vgt> <span class="coah-station-hero__stat-value" data-astro-cid-tnyk3vgt>', '</span> <span class="coah-station-hero__stat-label" data-astro-cid-tnyk3vgt>Bomberos</span> </div> <div class="coah-station-hero__stat" data-astro-cid-tnyk3vgt> <span class="coah-station-hero__stat-value" data-astro-cid-tnyk3vgt>', '</span> <span class="coah-station-hero__stat-label" data-astro-cid-tnyk3vgt>Unidades</span> </div> <div class="coah-station-hero__stat" data-astro-cid-tnyk3vgt> <span class="coah-station-hero__stat-value" data-astro-cid-tnyk3vgt>24/7</span> <span class="coah-station-hero__stat-label" data-astro-cid-tnyk3vgt>Servicio</span> </div> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BANNER DE EMERGENCIA\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="coah-station-emergency" data-astro-cid-tnyk3vgt> <div class="coah-station-emergency__container" data-astro-cid-tnyk3vgt> <div class="coah-station-emergency__phone" data-astro-cid-tnyk3vgt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-tnyk3vgt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-tnyk3vgt></path> </svg> <div data-astro-cid-tnyk3vgt> <span class="coah-station-emergency__label" data-astro-cid-tnyk3vgt>Tel\xE9fono de emergencia</span> <a', ' class="coah-station-emergency__number" data-astro-cid-tnyk3vgt> ', ' </a> </div> </div> <div class="coah-station-emergency__national" data-astro-cid-tnyk3vgt> <span data-astro-cid-tnyk3vgt>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-tnyk3vgt><strong data-astro-cid-tnyk3vgt>911</strong></a> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         CONTENIDO PRINCIPAL\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div class="coah-station-content" data-astro-cid-tnyk3vgt> <div class="coah-station-content__container" data-astro-cid-tnyk3vgt> <!-- Columna Principal --> <div class="coah-station-content__main" data-astro-cid-tnyk3vgt> <!-- Descripci\xF3n y Contexto --> <section class="coah-station-section" data-astro-cid-tnyk3vgt> <h2 class="coah-station-section__title" data-astro-cid-tnyk3vgt>Acerca de esta Estaci\xF3n</h2> <div class="coah-station-section__content" data-astro-cid-tnyk3vgt> <p data-astro-cid-tnyk3vgt>', "</p>  ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios --> <section class="coah-station-section" data-astro-cid-tnyk3vgt> <h2 class="coah-station-section__title" data-astro-cid-tnyk3vgt>Servicios de Emergencia</h2> <ul class="coah-station-services" data-astro-cid-tnyk3vgt> ', ' </ul> </section> <!-- Equipamiento --> <section class="coah-station-section" data-astro-cid-tnyk3vgt> <h2 class="coah-station-section__title" data-astro-cid-tnyk3vgt>Equipamiento y Unidades</h2> <div class="coah-station-equipment" data-astro-cid-tnyk3vgt> ', ' </div> </section> <!-- Mapa --> <section class="coah-station-section" data-astro-cid-tnyk3vgt> <h2 class="coah-station-section__title" data-astro-cid-tnyk3vgt>Ubicaci\xF3n</h2> <div class="coah-station-map" data-astro-cid-tnyk3vgt> <div class="coah-station-map__placeholder" data-astro-cid-tnyk3vgt> <p data-astro-cid-tnyk3vgt><strong data-astro-cid-tnyk3vgt>Direcci\xF3n:</strong> ', "</p> <p data-astro-cid-tnyk3vgt><strong data-astro-cid-tnyk3vgt>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-tnyk3vgt><strong data-astro-cid-tnyk3vgt>Coordenadas:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="coah-station-map__link" data-astro-cid-tnyk3vgt>\nVer en Google Maps\n</a> </div> </div> </section> </div> <!-- Sidebar --> <aside class="coah-station-sidebar" data-astro-cid-tnyk3vgt> <!-- Informaci\xF3n de Contacto --> <div class="coah-station-card coah-station-card--contact" data-astro-cid-tnyk3vgt> <h3 class="coah-station-card__title" data-astro-cid-tnyk3vgt>Informaci\xF3n de Contacto</h3> <ul class="coah-station-card__list" data-astro-cid-tnyk3vgt> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Tel\xE9fono:</strong> <a', " data-astro-cid-tnyk3vgt>", "</a> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Email:</strong> <a", " data-astro-cid-tnyk3vgt>", "</a> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Horario:</strong> <span data-astro-cid-tnyk3vgt>", "</span> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Direcci\xF3n:</strong> <span data-astro-cid-tnyk3vgt>", "</span> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>C.P.:</strong> <span data-astro-cid-tnyk3vgt>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas --> <div class="coah-station-card" data-astro-cid-tnyk3vgt> <h3 class="coah-station-card__title" data-astro-cid-tnyk3vgt>Datos de la Estaci\xF3n</h3> <ul class="coah-station-card__list" data-astro-cid-tnyk3vgt> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Personal:</strong> <span data-astro-cid-tnyk3vgt>', " bomberos</span> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Unidades:</strong> <span data-astro-cid-tnyk3vgt>", " veh\xEDculos</span> </li> ", " <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Zona:</strong> <span data-astro-cid-tnyk3vgt>", "</span> </li> <li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Actualizado:</strong> <span data-astro-cid-tnyk3vgt>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos Regionales --> <div class="coah-station-card coah-station-card--phones" data-astro-cid-tnyk3vgt> <h3 class="coah-station-card__title" data-astro-cid-tnyk3vgt>Emergencias Coahuila</h3> <ul class="coah-station-card__phones" data-astro-cid-tnyk3vgt> <li data-astro-cid-tnyk3vgt> <span data-astro-cid-tnyk3vgt>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-tnyk3vgt>911</a> </li> <li data-astro-cid-tnyk3vgt> <span data-astro-cid-tnyk3vgt>Bomberos Saltillo</span> <a href="tel:+528444107900" data-astro-cid-tnyk3vgt>(844) 410-7900</a> </li> <li data-astro-cid-tnyk3vgt> <span data-astro-cid-tnyk3vgt>Bomberos Torre\xF3n</span> <a href="tel:+528717120000" data-astro-cid-tnyk3vgt>(871) 712-0000</a> </li> <li data-astro-cid-tnyk3vgt> <span data-astro-cid-tnyk3vgt>Protecci\xF3n Civil</span> <a href="tel:+528444115000" data-astro-cid-tnyk3vgt>(844) 411-5000</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="coah-station-card coah-station-card--back" data-astro-cid-tnyk3vgt> <a href="/directorio/coahuila" class="coah-station-back-link" data-astro-cid-tnyk3vgt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-tnyk3vgt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-tnyk3vgt></path> </svg>\nVer todas las estaciones de Coahuila\n</a> </div> </aside> </div> </div> <!-- Breadcrumb --> <nav class="coah-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-tnyk3vgt> <ol class="coah-station-breadcrumb__list" data-astro-cid-tnyk3vgt> <li class="coah-station-breadcrumb__item" data-astro-cid-tnyk3vgt><a href="/" data-astro-cid-tnyk3vgt>Inicio</a></li> <li class="coah-station-breadcrumb__item" data-astro-cid-tnyk3vgt><a href="/directorio" data-astro-cid-tnyk3vgt>Directorio</a></li> <li class="coah-station-breadcrumb__item" data-astro-cid-tnyk3vgt><a href="/directorio/coahuila" data-astro-cid-tnyk3vgt>Coahuila</a></li> <li class="coah-station-breadcrumb__item coah-station-breadcrumb__item--active" data-astro-cid-tnyk3vgt>', "</li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Coahuila de Zaragoza",
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
      { "@type": "ListItem", "position": 3, "name": "Coahuila", "item": "https://bombero.mx/directorio/coahuila" },
      { "@type": "ListItem", "position": 4, "name": estacion.nombre, "item": metaSEO.canonical }
    ]
  })), maybeRenderHead(), contextoZona.tipo, esSaltillo && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Zona Automotriz</span>`, esArteaga && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Pueblo Mágico</span>`, esMonclova && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>AHMSA</span>`, esCarbonifera && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Rescate Minero</span>`, esFronteriza && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Frontera Texas</span>`, esCuatroCienegas && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Área Protegida</span>`, esVitivinicola && renderTemplate`<span class="coah-station-hero__badge coah-station-hero__badge--special" data-astro-cid-tnyk3vgt>Ruta del Vino</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esSaltillo && renderTemplate`<div class="coah-station-context coah-station-context--automotriz" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Segundo Clúster Automotriz de México</h3> <p data-astro-cid-tnyk3vgt>
La zona metropolitana de <strong data-astro-cid-tnyk3vgt>Saltillo-Ramos Arizpe</strong> alberga plantas de
<strong data-astro-cid-tnyk3vgt>General Motors, Chrysler (Stellantis), Daimler, BMW y Toyota</strong>, además
                    de cientos de proveedores Tier 1 y Tier 2. Esta estación cuenta con personal
                    certificado en <strong data-astro-cid-tnyk3vgt>HAZMAT automotriz</strong> para emergencias con pinturas,
                    solventes, materiales compuestos y químicos de manufactura.
</p> </div>`, esArteaga && renderTemplate`<div class="coah-station-context coah-station-context--pueblo-magico" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Pueblo Mágico "La Suiza de México"</h3> <p data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Arteaga</strong> es conocido como "La Suiza de México" por sus bosques de
                    coníferas y nevadas invernales. La estación está especializada en
<strong data-astro-cid-tnyk3vgt>incendios forestales</strong> y <strong data-astro-cid-tnyk3vgt>rescate de montaña</strong>,
                    atendiendo emergencias en la Sierra de Arteaga y centros turísticos como Monterreal.
                    Más de 500,000 visitantes anuales.
</p> </div>`, esLaguna && renderTemplate`<div class="coah-station-context coah-station-context--laguna" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Comarca Lagunera - Principal Cuenca Lechera</h3> <p data-astro-cid-tnyk3vgt>
La <strong data-astro-cid-tnyk3vgt>Comarca Lagunera</strong> es la principal cuenca lechera de México, sede de
<strong data-astro-cid-tnyk3vgt>Grupo Lala</strong> y otras empresas lácteas. Esta estación tiene
                    especialización en emergencias con <strong data-astro-cid-tnyk3vgt>amoniaco</strong> (refrigeración industrial)
                    y atención a <strong data-astro-cid-tnyk3vgt>agroindustrias</strong>. La zona metropolitana supera 1.3 millones
                    de habitantes.
</p> </div>`, esMonclova && renderTemplate`<div class="coah-station-context coah-station-context--siderurgica" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>AHMSA - Mayor Acería Integrada de México</h3> <p data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Monclova</strong> es sede de <strong data-astro-cid-tnyk3vgt>AHMSA (Altos Hornos de México, S.A.)</strong>,
                    el complejo siderúrgico integrado más grande del país. El personal está entrenado en
<strong data-astro-cid-tnyk3vgt>combate de incendios de metal fundido</strong>, <strong data-astro-cid-tnyk3vgt>rescate en altos
                    hornos</strong> y emergencias con <strong data-astro-cid-tnyk3vgt>gases industriales</strong>. Equipamiento
                    especializado para temperaturas extremas.
</p> </div>`, esCuatroCienegas && renderTemplate`<div class="coah-station-context coah-station-context--naturaleza" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Área de Protección de Flora y Fauna</h3> <p data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Cuatro Ciénegas</strong> es Pueblo Mágico y hogar de especies
<strong data-astro-cid-tnyk3vgt>endémicas únicas en el mundo</strong>, incluyendo estromatolitos vivos
                    (organismos de más de 3,500 millones de años). Esta estación coordina con
<strong data-astro-cid-tnyk3vgt>CONANP</strong> para la protección de las pozas, dunas de yeso y
                    ecosistemas frágiles del área natural protegida.
</p> </div>`, esCarbonifera && renderTemplate`<div class="coah-station-context coah-station-context--minera" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Región Carbonífera - 95% Producción Nacional</h3> <p data-astro-cid-tnyk3vgt>
La <strong data-astro-cid-tnyk3vgt>Región Carbonífera de Coahuila</strong> produce el <strong data-astro-cid-tnyk3vgt>95% del
                    carbón nacional</strong>. Esta estación cuenta con personal altamente especializado
                    en <strong data-astro-cid-tnyk3vgt>rescate minero</strong>, <strong data-astro-cid-tnyk3vgt>detección de gases explosivos</strong>
(metano, grisú) y operaciones de <strong data-astro-cid-tnyk3vgt>búsqueda en ambientes subterráneos</strong>.
                    Equipamiento de última generación para emergencias en minas de carbón.
</p> </div>`, esFronteriza && renderTemplate`<div class="coah-station-context coah-station-context--frontera" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Coordinación Binacional México-EE.UU.</h3> <p data-astro-cid-tnyk3vgt>
Esta estación mantiene <strong data-astro-cid-tnyk3vgt>protocolos de cooperación binacional</strong> con
                    departamentos de bomberos de Texas (Eagle Pass, Del Rio). Especialización en
                    emergencias de <strong data-astro-cid-tnyk3vgt>comercio internacional</strong>, <strong data-astro-cid-tnyk3vgt>puentes fronterizos</strong>
y zona maquiladora. Personal bilingüe y entrenamiento conjunto con bomberos
                    estadounidenses.
</p> </div>`, esVitivinicola && renderTemplate`<div class="coah-station-context coah-station-context--vitivinicola" data-astro-cid-tnyk3vgt> <h3 data-astro-cid-tnyk3vgt>Cuna de la Vitivinicultura en América</h3> <p data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Parras de la Fuente</strong> es Pueblo Mágico y sede de <strong data-astro-cid-tnyk3vgt>Casa Madero</strong>,
                    el viñedo más antiguo del continente americano (fundado en 1597). Esta estación tiene
                    protocolos especiales para la <strong data-astro-cid-tnyk3vgt>protección del patrimonio histórico</strong>,
                    bodegas de vino coloniales y arquitectura del siglo XVI. Ruta del Vino de Coahuila.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="coah-station-services__item" data-astro-cid-tnyk3vgt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-tnyk3vgt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-tnyk3vgt></path> </svg> <span data-astro-cid-tnyk3vgt>${servicio}</span> </li>`), estacion.equipamiento.map((equipo) => renderTemplate`<div class="coah-station-equipment__item" data-astro-cid-tnyk3vgt> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-tnyk3vgt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-tnyk3vgt></path> </svg> <span data-astro-cid-tnyk3vgt>${equipo}</span> </div>`), estacion.direccion, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, addAttribute(`mailto:${estacion.email}`, "href"), estacion.email, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-tnyk3vgt> <strong data-astro-cid-tnyk3vgt>Fundación:</strong> <span data-astro-cid-tnyk3vgt>${estacion.fechaFundacion}</span> </li>`, contextoZona.tipo, fechaActualizacion, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="coah-station-card" data-astro-cid-tnyk3vgt> <h3 class="coah-station-card__title" data-astro-cid-tnyk3vgt>Redes Sociales</h3> <div class="coah-station-social" data-astro-cid-tnyk3vgt> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="coah-station-social__link" data-astro-cid-tnyk3vgt>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="coah-station-social__link" data-astro-cid-tnyk3vgt>
Twitter/X
</a>`} </div> </div>`, estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/coahuila/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/coahuila/[slug].astro";
const $$url = "/directorio/coahuila/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
