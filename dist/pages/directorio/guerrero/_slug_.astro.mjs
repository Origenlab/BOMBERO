import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesGuerrero } from '../../../chunks/estaciones-guerrero_DHdXNMFX.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesGuerrero.map((estacion) => ({
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
  const esAcapulco = estacion.ciudad === "Acapulco de Ju\xE1rez";
  const esZihuatanejo = estacion.ciudad === "Zihuatanejo de Azueta";
  const esIxtapa = estacion.ciudad === "Ixtapa";
  const esChilpancingo = estacion.ciudad === "Chilpancingo de los Bravo";
  const esTaxco = estacion.ciudad === "Taxco de Alarc\xF3n";
  const esIguala = estacion.ciudad === "Iguala de la Independencia";
  const esTlapa = estacion.ciudad === "Tlapa de Comonfort";
  const esAltamirano = estacion.ciudad === "Ciudad Altamirano";
  const esCostaChica = ["Ometepec", "San Marcos"].includes(estacion.ciudad);
  const esAeropuerto = estacion.slug.includes("aeropuerto");
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-hl5p4ak3": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="gro-station" data-astro-cid-hl5p4ak3> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         HERO SECTION\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="gro-station-hero" data-astro-cid-hl5p4ak3> <div class="gro-station-hero__container" data-astro-cid-hl5p4ak3> <!-- Badges --> <div class="gro-station-hero__badges" data-astro-cid-hl5p4ak3> <span class="gro-station-hero__badge gro-station-hero__badge--state" data-astro-cid-hl5p4ak3>GRO</span> <span class="gro-station-hero__badge gro-station-hero__badge--zone" data-astro-cid-hl5p4ak3>', "</span> ", " ", " ", " ", " ", " ", " ", ' </div> <h1 class="gro-station-hero__title" data-astro-cid-hl5p4ak3>', '</h1> <p class="gro-station-hero__location" data-astro-cid-hl5p4ak3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-hl5p4ak3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-hl5p4ak3></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-hl5p4ak3></path> </svg> ', ', Guerrero, M\xE9xico\n</p> <!-- Estad\xEDsticas r\xE1pidas --> <div class="gro-station-hero__stats" data-astro-cid-hl5p4ak3> <div class="gro-station-hero__stat" data-astro-cid-hl5p4ak3> <span class="gro-station-hero__stat-value" data-astro-cid-hl5p4ak3>', '</span> <span class="gro-station-hero__stat-label" data-astro-cid-hl5p4ak3>Bomberos</span> </div> <div class="gro-station-hero__stat" data-astro-cid-hl5p4ak3> <span class="gro-station-hero__stat-value" data-astro-cid-hl5p4ak3>', '</span> <span class="gro-station-hero__stat-label" data-astro-cid-hl5p4ak3>Unidades</span> </div> <div class="gro-station-hero__stat" data-astro-cid-hl5p4ak3> <span class="gro-station-hero__stat-value" data-astro-cid-hl5p4ak3>24/7</span> <span class="gro-station-hero__stat-label" data-astro-cid-hl5p4ak3>Servicio</span> </div> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BANNER DE EMERGENCIA\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="gro-station-emergency" data-astro-cid-hl5p4ak3> <div class="gro-station-emergency__container" data-astro-cid-hl5p4ak3> <div class="gro-station-emergency__phone" data-astro-cid-hl5p4ak3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-hl5p4ak3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-hl5p4ak3></path> </svg> <div data-astro-cid-hl5p4ak3> <span class="gro-station-emergency__label" data-astro-cid-hl5p4ak3>Tel\xE9fono de emergencia</span> <a', ' class="gro-station-emergency__number" data-astro-cid-hl5p4ak3> ', ' </a> </div> </div> <div class="gro-station-emergency__national" data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-hl5p4ak3><strong data-astro-cid-hl5p4ak3>911</strong></a> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         CONTENIDO PRINCIPAL\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div class="gro-station-content" data-astro-cid-hl5p4ak3> <div class="gro-station-content__container" data-astro-cid-hl5p4ak3> <!-- Columna Principal --> <div class="gro-station-content__main" data-astro-cid-hl5p4ak3> <!-- Descripci\xF3n y Contexto --> <section class="gro-station-section" data-astro-cid-hl5p4ak3> <h2 class="gro-station-section__title" data-astro-cid-hl5p4ak3>Acerca de esta Estaci\xF3n</h2> <div class="gro-station-section__content" data-astro-cid-hl5p4ak3> <p data-astro-cid-hl5p4ak3>', "</p>  ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios --> <section class="gro-station-section" data-astro-cid-hl5p4ak3> <h2 class="gro-station-section__title" data-astro-cid-hl5p4ak3>Servicios de Emergencia</h2> <ul class="gro-station-services" data-astro-cid-hl5p4ak3> ', " </ul> </section> <!-- Equipamiento --> ", ' <!-- Mapa --> <section class="gro-station-section" data-astro-cid-hl5p4ak3> <h2 class="gro-station-section__title" data-astro-cid-hl5p4ak3>Ubicaci\xF3n</h2> <div class="gro-station-map" data-astro-cid-hl5p4ak3> <div class="gro-station-map__placeholder" data-astro-cid-hl5p4ak3> <p data-astro-cid-hl5p4ak3><strong data-astro-cid-hl5p4ak3>Direcci\xF3n:</strong> ', "</p> <p data-astro-cid-hl5p4ak3><strong data-astro-cid-hl5p4ak3>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-hl5p4ak3><strong data-astro-cid-hl5p4ak3>Coordenadas:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="gro-station-map__link" data-astro-cid-hl5p4ak3>\nVer en Google Maps\n</a> </div> </div> </section> </div> <!-- Sidebar --> <aside class="gro-station-sidebar" data-astro-cid-hl5p4ak3> <!-- Informaci\xF3n de Contacto --> <div class="gro-station-card gro-station-card--contact" data-astro-cid-hl5p4ak3> <h3 class="gro-station-card__title" data-astro-cid-hl5p4ak3>Informaci\xF3n de Contacto</h3> <ul class="gro-station-card__list" data-astro-cid-hl5p4ak3> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Tel\xE9fono:</strong> <a', " data-astro-cid-hl5p4ak3>", "</a> </li> ", " <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Horario:</strong> <span data-astro-cid-hl5p4ak3>", "</span> </li> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Direcci\xF3n:</strong> <span data-astro-cid-hl5p4ak3>", "</span> </li> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>C.P.:</strong> <span data-astro-cid-hl5p4ak3>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas --> <div class="gro-station-card" data-astro-cid-hl5p4ak3> <h3 class="gro-station-card__title" data-astro-cid-hl5p4ak3>Datos de la Estaci\xF3n</h3> <ul class="gro-station-card__list" data-astro-cid-hl5p4ak3> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Personal:</strong> <span data-astro-cid-hl5p4ak3>', " bomberos</span> </li> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Unidades:</strong> <span data-astro-cid-hl5p4ak3>", " veh\xEDculos</span> </li> ", " <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Zona:</strong> <span data-astro-cid-hl5p4ak3>", "</span> </li> <li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Actualizado:</strong> <span data-astro-cid-hl5p4ak3>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos Regionales --> <div class="gro-station-card gro-station-card--phones" data-astro-cid-hl5p4ak3> <h3 class="gro-station-card__title" data-astro-cid-hl5p4ak3>Emergencias Guerrero</h3> <ul class="gro-station-card__phones" data-astro-cid-hl5p4ak3> <li data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-hl5p4ak3>911</a> </li> <li data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Bomberos Acapulco</span> <a href="tel:+527444850808" data-astro-cid-hl5p4ak3>(744) 485-0808</a> </li> <li data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Bomberos Zihuatanejo</span> <a href="tel:+527555542020" data-astro-cid-hl5p4ak3>(755) 554-2020</a> </li> <li data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Bomberos Chilpancingo</span> <a href="tel:+527474720505" data-astro-cid-hl5p4ak3>(747) 472-0505</a> </li> <li data-astro-cid-hl5p4ak3> <span data-astro-cid-hl5p4ak3>Protecci\xF3n Civil Estatal</span> <a href="tel:+527474719911" data-astro-cid-hl5p4ak3>(747) 471-9911</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="gro-station-card gro-station-card--back" data-astro-cid-hl5p4ak3> <a href="/directorio/guerrero" class="gro-station-back-link" data-astro-cid-hl5p4ak3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-hl5p4ak3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-hl5p4ak3></path> </svg>\nVer todas las estaciones de Guerrero\n</a> </div> </aside> </div> </div> <!-- Breadcrumb --> <nav class="gro-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-hl5p4ak3> <ol class="gro-station-breadcrumb__list" data-astro-cid-hl5p4ak3> <li class="gro-station-breadcrumb__item" data-astro-cid-hl5p4ak3><a href="/" data-astro-cid-hl5p4ak3>Inicio</a></li> <li class="gro-station-breadcrumb__item" data-astro-cid-hl5p4ak3><a href="/directorio" data-astro-cid-hl5p4ak3>Directorio</a></li> <li class="gro-station-breadcrumb__item" data-astro-cid-hl5p4ak3><a href="/directorio/guerrero" data-astro-cid-hl5p4ak3>Guerrero</a></li> <li class="gro-station-breadcrumb__item gro-station-breadcrumb__item--active" data-astro-cid-hl5p4ak3>', "</li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Guerrero",
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
      { "@type": "ListItem", "position": 3, "name": "Guerrero", "item": "https://bombero.mx/directorio/guerrero" },
      { "@type": "ListItem", "position": 4, "name": estacion.nombre, "item": metaSEO.canonical }
    ]
  })), maybeRenderHead(), contextoZona.tipo, esAcapulco && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Destino Turístico #1</span>`, (esZihuatanejo || esIxtapa) && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Costa Grande</span>`, esTaxco && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Capital de la Plata</span>`, esIguala && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Cuna de la Bandera</span>`, esChilpancingo && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Capital del Estado</span>`, esTlapa && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>Región Montaña</span>`, esAeropuerto && renderTemplate`<span class="gro-station-hero__badge gro-station-hero__badge--special" data-astro-cid-hl5p4ak3>ARFF Aeroportuario</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esAcapulco && !esAeropuerto && renderTemplate`<div class="gro-station-context gro-station-context--acapulco" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Acapulco - Principal Destino Turístico de Playa</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Acapulco</strong> es el destino de playa más icónico de México con más de
<strong data-astro-cid-hl5p4ak3>800,000 habitantes</strong> y <strong data-astro-cid-hl5p4ak3>12+ millones de visitantes anuales</strong>.
                    La bahía de Acapulco, los famosos <strong data-astro-cid-hl5p4ak3>clavadistas de La Quebrada</strong>, la
                    Zona Dorada y Acapulco Diamante requieren atención especializada. El <strong data-astro-cid-hl5p4ak3>Huracán
                    Otis (2023)</strong>, categoría 5, devastó la ciudad con vientos de 270 km/h,
                    recordando la importancia crítica de bomberos preparados para desastres.
</p> </div>`, esAeropuerto && renderTemplate`<div class="gro-station-context gro-station-context--aeropuerto" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Servicio ARFF - Rescate y Extinción de Incendios en Aeronaves</h3> <p data-astro-cid-hl5p4ak3>
Esta estación cuenta con <strong data-astro-cid-hl5p4ak3>certificación ARFF</strong> (Aircraft Rescue and
                    Fire Fighting) para el <strong data-astro-cid-hl5p4ak3>Aeropuerto Internacional General Juan N. Álvarez</strong>
de Acapulco. Con más de <strong data-astro-cid-hl5p4ak3>1.2 millones de pasajeros anuales</strong>, el aeropuerto
                    requiere personal especializado en emergencias aeronáuticas, manejo de combustible
                    Jet-A, evacuación de aeronaves y uso de agentes extintores especiales. Tiempo de
                    respuesta de <strong data-astro-cid-hl5p4ak3>3 minutos</strong> a cualquier punto de las pistas.
</p> </div>`, esZihuatanejo && renderTemplate`<div class="gro-station-context gro-station-context--zihuatanejo" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Zihuatanejo - Pueblo Pesquero Tradicional</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Zihuatanejo</strong> conserva su encanto de pueblo pesquero tradicional
                    mientras se ha convertido en un destino turístico boutique de clase mundial. La
<strong data-astro-cid-hl5p4ak3>bahía de Zihuatanejo</strong> con playas como La Ropa y Las Gatas atrae
                    turismo internacional. Los bomberos tienen especialización en <strong data-astro-cid-hl5p4ak3>rescate
                    acuático</strong>, emergencias en el muelle pesquero y coordinación con pescadores
                    locales para búsqueda y rescate en mar abierto.
</p> </div>`, esIxtapa && renderTemplate`<div class="gro-station-context gro-station-context--ixtapa" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Ixtapa - Desarrollo Turístico de Clase Mundial</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Ixtapa</strong> es un desarrollo turístico planificado con <strong data-astro-cid-hl5p4ak3>resorts
                    todo incluido</strong>, campos de golf de campeonato y <strong data-astro-cid-hl5p4ak3>Marina Ixtapa</strong>.
                    A diferencia del tradicional Zihuatanejo, Ixtapa ofrece turismo de gran escala con
                    alta ocupación. El personal está capacitado en <strong data-astro-cid-hl5p4ak3>atención bilingüe</strong>
(español-inglés), emergencias en hoteles de gran capacidad y rescate acuático en
<strong data-astro-cid-hl5p4ak3>Playa El Palmar</strong> e <strong data-astro-cid-hl5p4ak3>Isla Ixtapa</strong>.
</p> </div>`, esChilpancingo && renderTemplate`<div class="gro-station-context gro-station-context--chilpancingo" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Capital del Estado - Brecha de Guerrero</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Chilpancingo</strong> es la capital del estado con más de <strong data-astro-cid-hl5p4ak3>280,000
                    habitantes</strong>. Centro de coordinación estatal para emergencias mayores.
                    Ubicada sobre la <strong data-astro-cid-hl5p4ak3>Brecha de Guerrero</strong>, una de las zonas sísmicas
                    más activas del mundo con potencial de sismos superiores a <strong data-astro-cid-hl5p4ak3>magnitud 8.0</strong>.
                    Personal especializado en <strong data-astro-cid-hl5p4ak3>respuesta sísmica USAR</strong>, evaluación de
                    daños estructurales y búsqueda y rescate en edificios colapsados.
</p> </div>`, esTaxco && renderTemplate`<div class="gro-station-context gro-station-context--taxco" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Pueblo Mágico - Capital Mundial de la Plata</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Taxco de Alarcón</strong> es reconocido como Pueblo Mágico y la
<strong data-astro-cid-hl5p4ak3>Capital Mundial de la Plata</strong> con más de <strong data-astro-cid-hl5p4ak3>1,200 talleres
                    de joyería artesanal</strong>. Su arquitectura colonial con calles empedradas
                    estrechas, la icónica <strong data-astro-cid-hl5p4ak3>iglesia de Santa Prisca</strong> y el teleférico
                    de Monte Taxco requieren técnicas especializadas. Los bomberos atienden
                    emergencias en talleres de platería con sopletes, emergencias en callejones
                    donde no entran vehículos grandes y protección del patrimonio histórico.
</p> </div>`, esIguala && renderTemplate`<div class="gro-station-context gro-station-context--iguala" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Iguala - Cuna de la Bandera de México</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Iguala de la Independencia</strong> es la ciudad donde se creó la
<strong data-astro-cid-hl5p4ak3>Bandera de México</strong> en 1821. Tercera ciudad más poblada de
                    Guerrero con aproximadamente <strong data-astro-cid-hl5p4ak3>150,000 habitantes</strong>. Centro
                    comercial e industrial del norte del estado. Los bomberos proporcionan cobertura
                    a la zona industrial, comercio y la carretera federal hacia Taxco y Ciudad de México.
</p> </div>`, esTlapa && renderTemplate`<div class="gro-station-context gro-station-context--tlapa" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Región Montaña - Comunidades Indígenas</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Tlapa de Comonfort</strong> es el centro de la <strong data-astro-cid-hl5p4ak3>Región Montaña</strong>
de Guerrero con importante población indígena <strong data-astro-cid-hl5p4ak3>Nahua, Mixteca y Tlapaneca</strong>.
                    Zona de alta marginación con comunidades dispersas en la <strong data-astro-cid-hl5p4ak3>Sierra Madre del Sur</strong>.
                    El personal está capacitado en atención culturalmente apropiada, rescate en terreno
                    montañoso de difícil acceso, respuesta a <strong data-astro-cid-hl5p4ak3>deslaves</strong> en temporada de
                    lluvias e <strong data-astro-cid-hl5p4ak3>incendios forestales</strong> en la sierra.
</p> </div>`, esAltamirano && renderTemplate`<div class="gro-station-context gro-station-context--altamirano" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Tierra Caliente - Zona Agrícola</h3> <p data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Ciudad Altamirano</strong> es el centro de la región <strong data-astro-cid-hl5p4ak3>Tierra
                    Caliente</strong> en el límite con Michoacán. Zona agrícola con clima cálido
                    extremo que supera los <strong data-astro-cid-hl5p4ak3>40°C en verano</strong>. El personal está
                    capacitado en emergencias por <strong data-astro-cid-hl5p4ak3>golpes de calor</strong>, incendios en
                    pastizales y cultivos, y rescate vehicular en la carretera hacia Michoacán y el Bajío.
</p> </div>`, esCostaChica && renderTemplate`<div class="gro-station-context gro-station-context--costa-chica" data-astro-cid-hl5p4ak3> <h3 data-astro-cid-hl5p4ak3>Costa Chica - Comunidades Afromexicanas</h3> <p data-astro-cid-hl5p4ak3>
La <strong data-astro-cid-hl5p4ak3>Costa Chica</strong> de Guerrero alberga una importante población
<strong data-astro-cid-hl5p4ak3>afromexicana</strong> con rica cultura y tradiciones. Zona agrícola
                    con producción de <strong data-astro-cid-hl5p4ak3>coco, mango y limón</strong>. La Carretera Federal
                    200 (Costera del Pacífico) conecta con Oaxaca. Personal especializado en
                    emergencias por <strong data-astro-cid-hl5p4ak3>huracanes e inundaciones</strong> durante la temporada
                    de lluvias y ciclones tropicales.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="gro-station-services__item" data-astro-cid-hl5p4ak3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-hl5p4ak3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-hl5p4ak3></path> </svg> <span data-astro-cid-hl5p4ak3>${servicio}</span> </li>`), estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<section class="gro-station-section" data-astro-cid-hl5p4ak3> <h2 class="gro-station-section__title" data-astro-cid-hl5p4ak3>Equipamiento y Unidades</h2> <div class="gro-station-equipment" data-astro-cid-hl5p4ak3> ${estacion.equipamiento.map((equipo) => renderTemplate`<div class="gro-station-equipment__item" data-astro-cid-hl5p4ak3> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-hl5p4ak3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-hl5p4ak3></path> </svg> <span data-astro-cid-hl5p4ak3>${equipo}</span> </div>`)} </div> </section>`, estacion.direccion, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.email && renderTemplate`<li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Email:</strong> <a${addAttribute(`mailto:${estacion.email}`, "href")} data-astro-cid-hl5p4ak3>${estacion.email}</a> </li>`, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-hl5p4ak3> <strong data-astro-cid-hl5p4ak3>Fundación:</strong> <span data-astro-cid-hl5p4ak3>${estacion.fechaFundacion}</span> </li>`, contextoZona.tipo, fechaActualizacion, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="gro-station-card" data-astro-cid-hl5p4ak3> <h3 class="gro-station-card__title" data-astro-cid-hl5p4ak3>Redes Sociales</h3> <div class="gro-station-social" data-astro-cid-hl5p4ak3> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="gro-station-social__link" data-astro-cid-hl5p4ak3>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="gro-station-social__link" data-astro-cid-hl5p4ak3>
Twitter/X
</a>`} </div> </div>`, estacion.nombreCorto || estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero/[slug].astro";
const $$url = "/directorio/guerrero/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
