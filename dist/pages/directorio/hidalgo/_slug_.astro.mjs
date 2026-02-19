import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesHidalgo, H as HIDALGO_SEO } from '../../../chunks/estaciones-hidalgo_CzNOQ97m.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesHidalgo.map((estacion) => ({
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
  const esPachuca = estacion.ciudad === "Pachuca de Soto";
  const esMineralReforma = estacion.ciudad === "Mineral de la Reforma";
  const esRealDelMonte = estacion.ciudad === "Mineral del Monte";
  const esTula = estacion.ciudad === "Tula de Allende";
  const esRefineria = estacion.slug.includes("refineria");
  const esTepeji = estacion.ciudad === "Tepeji del R\xEDo de Ocampo";
  const esTulancingo = estacion.ciudad === "Tulancingo de Bravo";
  const esCuautepec = estacion.ciudad === "Cuautepec de Hinojosa";
  const esAcaxochitlan = estacion.ciudad === "Acaxochitl\xE1n";
  const esHuasca = estacion.ciudad === "Huasca de Ocampo";
  const esMineralChico = estacion.ciudad === "Mineral del Chico";
  const esHuichapan = estacion.ciudad === "Huichapan";
  const esActopan = estacion.ciudad === "Actopan";
  const esIxmiquilpan = estacion.ciudad === "Ixmiquilpan";
  const esHuejutla = estacion.ciudad === "Huejutla de Reyes";
  const esMolango = estacion.ciudad === "Molango de Escamilla";
  const esTizayuca = estacion.ciudad === "Tizayuca";
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-dp5w2cnz": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="hgo-station" data-astro-cid-dp5w2cnz> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         HERO SECTION\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="hgo-station-hero" data-astro-cid-dp5w2cnz> <div class="hgo-station-hero__container" data-astro-cid-dp5w2cnz> <!-- Badges Informativos --> <div class="hgo-station-hero__badges" data-astro-cid-dp5w2cnz> <span class="hgo-station-hero__badge hgo-station-hero__badge--state" data-astro-cid-dp5w2cnz>HGO</span> <span class="hgo-station-hero__badge hgo-station-hero__badge--zone" data-astro-cid-dp5w2cnz>', "</span> ", " ", " ", " ", " ", " ", " ", " ", ' </div> <h1 class="hgo-station-hero__title" data-astro-cid-dp5w2cnz>', '</h1> <p class="hgo-station-hero__location" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-dp5w2cnz></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-dp5w2cnz></path> </svg> ', ', Hidalgo, M\xE9xico\n</p> <!-- Estad\xEDsticas de la Estaci\xF3n --> <div class="hgo-station-hero__stats" data-astro-cid-dp5w2cnz> <div class="hgo-station-hero__stat" data-astro-cid-dp5w2cnz> <span class="hgo-station-hero__stat-value" data-astro-cid-dp5w2cnz>', '</span> <span class="hgo-station-hero__stat-label" data-astro-cid-dp5w2cnz>Bomberos</span> </div> <div class="hgo-station-hero__stat" data-astro-cid-dp5w2cnz> <span class="hgo-station-hero__stat-value" data-astro-cid-dp5w2cnz>', '</span> <span class="hgo-station-hero__stat-label" data-astro-cid-dp5w2cnz>Unidades</span> </div> <div class="hgo-station-hero__stat" data-astro-cid-dp5w2cnz> <span class="hgo-station-hero__stat-value" data-astro-cid-dp5w2cnz>', '</span> <span class="hgo-station-hero__stat-label" data-astro-cid-dp5w2cnz>Min. Respuesta</span> </div> <div class="hgo-station-hero__stat" data-astro-cid-dp5w2cnz> <span class="hgo-station-hero__stat-value" data-astro-cid-dp5w2cnz>24/7</span> <span class="hgo-station-hero__stat-label" data-astro-cid-dp5w2cnz>Servicio</span> </div> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BANNER DE EMERGENCIA\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="hgo-station-emergency" data-astro-cid-dp5w2cnz> <div class="hgo-station-emergency__container" data-astro-cid-dp5w2cnz> <div class="hgo-station-emergency__phone" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-dp5w2cnz></path> </svg> <div data-astro-cid-dp5w2cnz> <span class="hgo-station-emergency__label" data-astro-cid-dp5w2cnz>L\xEDnea de emergencia directa</span> <a', ' class="hgo-station-emergency__number" data-astro-cid-dp5w2cnz> ', ' </a> </div> </div> <div class="hgo-station-emergency__national" data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-dp5w2cnz><strong data-astro-cid-dp5w2cnz>911</strong></a> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         CONTENIDO PRINCIPAL\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div class="hgo-station-content" data-astro-cid-dp5w2cnz> <div class="hgo-station-content__container" data-astro-cid-dp5w2cnz> <!-- Columna Principal --> <div class="hgo-station-content__main" data-astro-cid-dp5w2cnz> <!-- Descripci\xF3n y Contexto Enriquecido --> <section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Acerca de esta Estaci\xF3n</h2> <div class="hgo-station-section__content" data-astro-cid-dp5w2cnz> <p data-astro-cid-dp5w2cnz>', "</p>  ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios de Emergencia --> <section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Servicios de Emergencia Disponibles</h2> <ul class="hgo-station-services" data-astro-cid-dp5w2cnz> ', " </ul> </section> <!-- Especialidades (si existen) --> ", " <!-- Equipamiento y Unidades --> ", " <!-- Cobertura Geogr\xE1fica (si existe) --> ", ' <!-- Ubicaci\xF3n y Mapa --> <section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Ubicaci\xF3n</h2> <div class="hgo-station-map" data-astro-cid-dp5w2cnz> <div class="hgo-station-map__placeholder" data-astro-cid-dp5w2cnz> <p data-astro-cid-dp5w2cnz><strong data-astro-cid-dp5w2cnz>Direcci\xF3n completa:</strong> ', ", ", ", ", ", Hidalgo, M\xE9xico</p> <p data-astro-cid-dp5w2cnz><strong data-astro-cid-dp5w2cnz>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-dp5w2cnz><strong data-astro-cid-dp5w2cnz>Coordenadas GPS:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="hgo-station-map__link" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-dp5w2cnz></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-dp5w2cnz></path> </svg>\nAbrir en Google Maps\n</a> </div> </div> </section> <!-- Historia (si existe) --> ', ' </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n             SIDEBAR INFORMATIVO\n             \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <aside class="hgo-station-sidebar" data-astro-cid-dp5w2cnz> <!-- Informaci\xF3n de Contacto --> <div class="hgo-station-card hgo-station-card--contact" data-astro-cid-dp5w2cnz> <h3 class="hgo-station-card__title" data-astro-cid-dp5w2cnz>Informaci\xF3n de Contacto</h3> <ul class="hgo-station-card__list" data-astro-cid-dp5w2cnz> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tel\xE9fono:</strong> <a', " data-astro-cid-dp5w2cnz>", "</a> </li> ", " ", " <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Horario:</strong> <span data-astro-cid-dp5w2cnz>", "</span> </li> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Direcci\xF3n:</strong> <span data-astro-cid-dp5w2cnz>", "</span> </li> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>C\xF3digo Postal:</strong> <span data-astro-cid-dp5w2cnz>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas de la Estaci\xF3n --> <div class="hgo-station-card" data-astro-cid-dp5w2cnz> <h3 class="hgo-station-card__title" data-astro-cid-dp5w2cnz>Datos de la Estaci\xF3n</h3> <ul class="hgo-station-card__list" data-astro-cid-dp5w2cnz> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Personal activo:</strong> <span data-astro-cid-dp5w2cnz>', " bomberos profesionales</span> </li> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Unidades de emergencia:</strong> <span data-astro-cid-dp5w2cnz>", " veh\xEDculos</span> </li> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tiempo de respuesta:</strong> <span data-astro-cid-dp5w2cnz>", " minutos promedio</span> </li> ", " <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Zona:</strong> <span data-astro-cid-dp5w2cnz>", "</span> </li> <li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>\xDAltima actualizaci\xF3n:</strong> <span data-astro-cid-dp5w2cnz>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos de Emergencia Regionales --> <div class="hgo-station-card hgo-station-card--phones" data-astro-cid-dp5w2cnz> <h3 class="hgo-station-card__title" data-astro-cid-dp5w2cnz>Emergencias Hidalgo</h3> <ul class="hgo-station-card__phones" data-astro-cid-dp5w2cnz> <li data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-dp5w2cnz>911</a> </li> <li data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Bomberos Pachuca</span> <a href="tel:+527717131414" data-astro-cid-dp5w2cnz>(771) 713-1414</a> </li> <li data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Bomberos Tula</span> <a href="tel:+527737320303" data-astro-cid-dp5w2cnz>(773) 732-0303</a> </li> <li data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Bomberos Tulancingo</span> <a href="tel:+527757530202" data-astro-cid-dp5w2cnz>(775) 753-0202</a> </li> <li data-astro-cid-dp5w2cnz> <span data-astro-cid-dp5w2cnz>Protecci\xF3n Civil</span> <a href="tel:+527717174100" data-astro-cid-dp5w2cnz>(771) 717-4100</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="hgo-station-card hgo-station-card--back" data-astro-cid-dp5w2cnz> <a href="/directorio/hidalgo" class="hgo-station-back-link" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-dp5w2cnz></path> </svg>\nVer todas las estaciones de Hidalgo\n</a> </div> </aside> </div> </div> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BREADCRUMB SEO\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <nav class="hgo-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-dp5w2cnz> <ol class="hgo-station-breadcrumb__list" data-astro-cid-dp5w2cnz> <li class="hgo-station-breadcrumb__item" data-astro-cid-dp5w2cnz><a href="/" data-astro-cid-dp5w2cnz>Inicio</a></li> <li class="hgo-station-breadcrumb__item" data-astro-cid-dp5w2cnz><a href="/directorio" data-astro-cid-dp5w2cnz>Directorio</a></li> <li class="hgo-station-breadcrumb__item" data-astro-cid-dp5w2cnz><a href="/directorio/hidalgo" data-astro-cid-dp5w2cnz>Hidalgo</a></li> <li class="hgo-station-breadcrumb__item hgo-station-breadcrumb__item--active" data-astro-cid-dp5w2cnz>', "</li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Hidalgo",
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
    "sameAs": estacion.redes ? Object.values(estacion.redes) : [],
    "potentialAction": {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `tel:${estacion.telefono.replace(/[^\d+]/g, "")}`,
        "actionPlatform": ["http://schema.org/MobileWebPlatform"]
      }
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
      { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
      { "@type": "ListItem", "position": 3, "name": "Hidalgo", "item": "https://bombero.mx/directorio/hidalgo" },
      { "@type": "ListItem", "position": 4, "name": estacion.nombre, "item": metaSEO.canonical }
    ]
  })), maybeRenderHead(), contextoZona.tipo, esPachuca && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Capital del Estado</span>`, esRealDelMonte && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Pueblo Mágico</span>`, esRefineria && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--hazmat" data-astro-cid-dp5w2cnz>HAZMAT Especializado</span>`, esTula && !esRefineria && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Zona Arqueológica</span>`, esHuasca && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Prismas Basálticos</span>`, esMineralChico && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Parque Nacional</span>`, esIxmiquilpan && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Balnearios Termales</span>`, esHuejutla && renderTemplate`<span class="hgo-station-hero__badge hgo-station-hero__badge--special" data-astro-cid-dp5w2cnz>Huasteca Hidalguense</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, estacion.tiempoRespuestaMinutos || 8, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esPachuca && renderTemplate`<div class="hgo-station-context hgo-station-context--pachuca" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Pachuca de Soto - "La Bella Airosa"</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Pachuca</strong>, capital de Hidalgo conocida como <strong data-astro-cid-dp5w2cnz>"La Bella Airosa"</strong>
por sus vientos característicos, es una ciudad con más de <strong data-astro-cid-dp5w2cnz>350,000 habitantes</strong>
en su zona metropolitana y <strong data-astro-cid-dp5w2cnz>500 años de historia minera</strong>. El icónico
<strong data-astro-cid-dp5w2cnz>Reloj Monumental</strong> (1910), réplica del Big Ben, es símbolo de la ciudad.
                    La <strong data-astro-cid-dp5w2cnz>Universidad Autónoma del Estado de Hidalgo (UAEH)</strong> con 60,000 estudiantes
                    y la cercanía a la CDMX (91 km) generan alta demanda de servicios de emergencia. Los
                    bomberos protegen el centro histórico, zonas comerciales y la autopista México-Pachuca.
</p> </div>`, esRealDelMonte && renderTemplate`<div class="hgo-station-context hgo-station-context--real-monte" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Real del Monte - Cuna del Fútbol Mexicano</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Real del Monte</strong> (Mineral del Monte) es <strong data-astro-cid-dp5w2cnz>Pueblo Mágico desde 2004</strong>
y ciudad minera con <strong data-astro-cid-dp5w2cnz>más de 500 años de historia</strong>. Los mineros ingleses de
<strong data-astro-cid-dp5w2cnz>Cornualles</strong> llegaron en 1824 trayendo los famosos <strong data-astro-cid-dp5w2cnz>"pastes"</strong>
(empanadas) y el <strong data-astro-cid-dp5w2cnz>fútbol</strong> - aquí se jugó el primer partido en México en 1900.
                    A <strong data-astro-cid-dp5w2cnz>2,660 msnm</strong>, con calles empedradas, arquitectura victoriana y el
<strong data-astro-cid-dp5w2cnz>Cementerio Inglés</strong>, requiere técnicas especializadas. Los bomberos atienden
                    emergencias en minas turísticas, protegen el patrimonio y responden a clima extremo con
                    temperaturas bajo cero.
</p> </div>`, esRefineria && renderTemplate`<div class="hgo-station-context hgo-station-context--refineria" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Refinería Miguel Hidalgo - PEMEX</h3> <p data-astro-cid-dp5w2cnz>
Esta estación opera dentro de la <strong data-astro-cid-dp5w2cnz>Refinería Miguel Hidalgo de PEMEX</strong>,
                    la <strong data-astro-cid-dp5w2cnz>segunda más grande de México</strong> con capacidad de
<strong data-astro-cid-dp5w2cnz>${HIDALGO_SEO.industria.refineria_tula.capacidad_barriles_dia.toLocaleString("es-MX")} barriles diarios</strong>.
                    En operación desde <strong data-astro-cid-dp5w2cnz>1976</strong>, produce gasolina, diésel, turbosina, gas LP y
                    asfalto. El personal cuenta con <strong data-astro-cid-dp5w2cnz>certificación internacional HAZMAT</strong> y
                    especialización en incendios petroquímicos. Tiempo de respuesta máximo de
<strong data-astro-cid-dp5w2cnz>3 minutos</strong> a cualquier punto de las instalaciones. Coordinación permanente
                    con brigadas industriales bajo el <strong data-astro-cid-dp5w2cnz>Plan de Auxilio Mutuo</strong>.
</p> </div>`, esTula && !esRefineria && renderTemplate`<div class="hgo-station-context hgo-station-context--tula" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Tula de Allende - Capital Industrial y Arqueológica</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tula</strong> combina patrimonio arqueológico de primer nivel con el
<strong data-astro-cid-dp5w2cnz>principal corredor industrial de Hidalgo</strong>. La <strong data-astro-cid-dp5w2cnz>Zona Arqueológica
                    de Tula</strong> fue capital del <strong data-astro-cid-dp5w2cnz>Imperio Tolteca</strong> (900-1150 d.C.), famosa
                    por los <strong data-astro-cid-dp5w2cnz>Atlantes</strong> de 4.6 metros. La zona industrial incluye la
<strong data-astro-cid-dp5w2cnz>Refinería PEMEX</strong>, cementeras <strong data-astro-cid-dp5w2cnz>CEMEX, Cruz Azul y Holcim</strong>,
                    y la <strong data-astro-cid-dp5w2cnz>Termoeléctrica CFE</strong>. Los bomberos tienen especialización
<strong data-astro-cid-dp5w2cnz>HAZMAT de alto nivel</strong> para emergencias petroquímicas e industriales.
</p> </div>`, esTulancingo && renderTemplate`<div class="hgo-station-context hgo-station-context--tulancingo" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Tulancingo - Capital de la Industria Textil</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tulancingo de Bravo</strong> es la segunda ciudad más importante de Hidalgo con
                    más de <strong data-astro-cid-dp5w2cnz>160,000 habitantes</strong> y capital del <strong data-astro-cid-dp5w2cnz>Valle de Tulancingo</strong>.
                    Centro histórico de la <strong data-astro-cid-dp5w2cnz>industria textil mexicana</strong> con más de
<strong data-astro-cid-dp5w2cnz>450 empresas</strong> que producen lana, algodón y fibras sintéticas, generando
<strong data-astro-cid-dp5w2cnz>25,000 empleos</strong>. La carretera <strong data-astro-cid-dp5w2cnz>México-Tuxpan</strong> presenta
                    alto tránsito de carga. Los bomberos coordinan emergencias en toda la región, incluyendo
                    municipios serranos.
</p> </div>`, esHuasca && renderTemplate`<div class="hgo-station-context hgo-station-context--huasca" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Huasca de Ocampo - Prismas Basálticos</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Huasca de Ocampo</strong> fue el <strong data-astro-cid-dp5w2cnz>primer Pueblo Mágico de Hidalgo</strong>
designado en 2001. Su principal atractivo son los impresionantes <strong data-astro-cid-dp5w2cnz>Prismas
                    Basálticos de Santa María Regla</strong>, columnas hexagonales de basalto de hasta
<strong data-astro-cid-dp5w2cnz>40 metros de altura</strong> formadas hace millones de años. Las
<strong data-astro-cid-dp5w2cnz>haciendas de beneficio de plata del siglo XVIII</strong> (Santa María y San
                    Miguel Regla) son patrimonio histórico. Miles de visitantes llegan cada fin de semana.
                    Los bomberos atienden emergencias turísticas, rescates en barrancas y protección del
                    patrimonio hacendario.
</p> </div>`, esMineralChico && renderTemplate`<div class="hgo-station-context hgo-station-context--mineral-chico" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Mineral del Chico - Primer Parque Nacional de México</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Mineral del Chico</strong>, Pueblo Mágico desde 2011, alberga el
<strong data-astro-cid-dp5w2cnz>Parque Nacional El Chico</strong>, el <strong data-astro-cid-dp5w2cnz>primer parque nacional de México</strong>
decretado en <strong data-astro-cid-dp5w2cnz>1898</strong>. Con más de <strong data-astro-cid-dp5w2cnz>2,700 hectáreas</strong> de bosques
                    de oyamel a <strong data-astro-cid-dp5w2cnz>3,000 msnm</strong>, es destino de escaladores, ciclistas de montaña
                    y excursionistas. Las famosas <strong data-astro-cid-dp5w2cnz>peñas</strong> (Las Ventanas, Las Monjas, El Cuervo)
                    atraen a escaladores de todo México. Los bomberos tienen <strong data-astro-cid-dp5w2cnz>especialización en
                    rescate técnico de montaña</strong>, búsqueda de extraviados y combate de incendios
                    forestales en terreno de difícil acceso.
</p> </div>`, esIxmiquilpan && renderTemplate`<div class="hgo-station-context hgo-station-context--ixmiquilpan" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Ixmiquilpan - Corazón de la Cultura Otomí</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Ixmiquilpan</strong> es el corazón del <strong data-astro-cid-dp5w2cnz>Valle del Mezquital</strong> y
                    capital cultural del pueblo <strong data-astro-cid-dp5w2cnz>hñähñu (otomí)</strong>. Famoso por sus
<strong data-astro-cid-dp5w2cnz>balnearios de aguas termales</strong> y <strong data-astro-cid-dp5w2cnz>parques acuáticos</strong> que
                    atraen miles de visitantes cada fin de semana, especialmente en Semana Santa. El
<strong data-astro-cid-dp5w2cnz>Ex Convento de San Miguel Arcángel</strong> con sus frescos únicos de guerreros
                    indígenas es patrimonio invaluable. Los bomberos están especializados en
<strong data-astro-cid-dp5w2cnz>rescate acuático</strong> para atender emergencias en los numerosos balnearios.
</p> </div>`, esHuejutla && renderTemplate`<div class="hgo-station-context hgo-station-context--huejutla" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Huejutla - Capital de la Huasteca Hidalguense</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Huejutla de Reyes</strong> es la capital de la <strong data-astro-cid-dp5w2cnz>Huasteca Hidalguense</strong>,
                    región de clima tropical con importante población <strong data-astro-cid-dp5w2cnz>nahua</strong>. Es el centro
                    comercial y de servicios para decenas de comunidades indígenas de la sierra. El
<strong data-astro-cid-dp5w2cnz>río Huejutla</strong> y numerosos arroyos representan riesgo de
<strong data-astro-cid-dp5w2cnz>inundaciones</strong> en temporada de lluvias. Los bomberos tienen especialización
                    en <strong data-astro-cid-dp5w2cnz>rescate acuático en ríos de corriente</strong> y personal que habla
<strong data-astro-cid-dp5w2cnz>náhuatl</strong> para atención culturalmente apropiada a comunidades indígenas.
</p> </div>`, esTizayuca && renderTemplate`<div class="hgo-station-context hgo-station-context--tizayuca" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Tizayuca - Puerta de Entrada desde la CDMX</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tizayuca</strong> es el municipio más al sur de Hidalgo, a solo <strong data-astro-cid-dp5w2cnz>52 km
                    de la Ciudad de México</strong>. Su ubicación estratégica en la <strong data-astro-cid-dp5w2cnz>autopista
                    México-Pachuca</strong>, una de las más transitadas del país con más de
<strong data-astro-cid-dp5w2cnz>50,000 vehículos diarios</strong>, lo ha convertido en importante
<strong data-astro-cid-dp5w2cnz>centro logístico e industrial</strong>. El crecimiento habitacional explosivo
                    con fraccionamientos de interés social suma más de 100,000 habitantes. Los bomberos
                    atienden alto volumen de <strong data-astro-cid-dp5w2cnz>accidentes vehiculares</strong>, emergencias
                    industriales y la zona habitacional densamente poblada.
</p> </div>`, esAcaxochitlan && renderTemplate`<div class="hgo-station-context hgo-station-context--acaxochitlan" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Acaxochitlán - El Pueblo de las Flores</h3> <p data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Acaxochitlán</strong> es conocido como el <strong data-astro-cid-dp5w2cnz>"Pueblo de las Flores"</strong>
por su importante industria de <strong data-astro-cid-dp5w2cnz>viveros y producción de plantas de ornato</strong>.
                    Ubicado en la <strong data-astro-cid-dp5w2cnz>Sierra Norte de Hidalgo</strong> a más de <strong data-astro-cid-dp5w2cnz>2,200 msnm</strong>,
                    los bomberos están especializados en <strong data-astro-cid-dp5w2cnz>incendios forestales</strong> en bosques de
                    oyamel y pino, rescate en terreno montañoso y atención a comunidades otomíes dispersas
                    en la sierra. El <strong data-astro-cid-dp5w2cnz>clima extremo</strong> con heladas y neblina presenta retos
                    adicionales.
</p> </div>`, (esMineralReforma || esCuautepec || esTepeji || esActopan || esMolango || esHuichapan) && renderTemplate`<div class="hgo-station-context hgo-station-context--general" data-astro-cid-dp5w2cnz> <h3 data-astro-cid-dp5w2cnz>Contexto Regional de la Estación</h3> <p data-astro-cid-dp5w2cnz>
Esta estación forma parte de la red de <strong data-astro-cid-dp5w2cnz>${estacionesHidalgo.length} estaciones
                    de bomberos de Hidalgo</strong>, un estado que combina tradición minera, desarrollo
                    industrial, patrimonio cultural y diversidad geográfica única. La cobertura incluye
                    zonas ${contextoZona.descripcion.toLowerCase()}. Los principales riesgos en esta área son:
<strong data-astro-cid-dp5w2cnz> ${contextoZona.riesgosPrincipales.join(", ")}</strong>. El tiempo de respuesta
                    promedio es de <strong data-astro-cid-dp5w2cnz>${estacion.tiempoRespuestaMinutos || 8} minutos</strong>.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="hgo-station-services__item" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-dp5w2cnz></path> </svg> <span data-astro-cid-dp5w2cnz>${servicio}</span> </li>`), estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Especialidades Certificadas</h2> <div class="hgo-station-specialties" data-astro-cid-dp5w2cnz> ${estacion.especialidades.map((esp) => renderTemplate`<span class="hgo-station-specialty" data-astro-cid-dp5w2cnz>${esp}</span>`)} </div> </section>`, estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Equipamiento y Unidades de Emergencia</h2> <div class="hgo-station-equipment" data-astro-cid-dp5w2cnz> ${estacion.equipamiento.map((equipo) => renderTemplate`<div class="hgo-station-equipment__item" data-astro-cid-dp5w2cnz> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-dp5w2cnz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-dp5w2cnz></path> </svg> <span data-astro-cid-dp5w2cnz>${equipo}</span> </div>`)} </div> </section>`, estacion.cobertura && estacion.cobertura.length > 0 && renderTemplate`<section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Área de Cobertura</h2> <ul class="hgo-station-coverage" data-astro-cid-dp5w2cnz> ${estacion.cobertura.map((zona) => renderTemplate`<li class="hgo-station-coverage__item" data-astro-cid-dp5w2cnz>${zona}</li>`)} </ul> </section>`, estacion.direccion, estacion.colonia, estacion.ciudad, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), estacion.historia && renderTemplate`<section class="hgo-station-section" data-astro-cid-dp5w2cnz> <h2 class="hgo-station-section__title" data-astro-cid-dp5w2cnz>Historia de la Estación</h2> <div class="hgo-station-section__content" data-astro-cid-dp5w2cnz> <p data-astro-cid-dp5w2cnz>${estacion.historia}</p> </div> </section>`, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.telefonoAlterno && renderTemplate`<li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Tel. Alterno:</strong> <a${addAttribute(`tel:${estacion.telefonoAlterno.replace(/[^\d+]/g, "")}`, "href")} data-astro-cid-dp5w2cnz>${estacion.telefonoAlterno}</a> </li>`, estacion.email && renderTemplate`<li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Email:</strong> <a${addAttribute(`mailto:${estacion.email}`, "href")} data-astro-cid-dp5w2cnz>${estacion.email}</a> </li>`, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.tiempoRespuestaMinutos || 8, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-dp5w2cnz> <strong data-astro-cid-dp5w2cnz>Fundación:</strong> <span data-astro-cid-dp5w2cnz>${estacion.fechaFundacion}</span> </li>`, contextoZona.nombre, fechaActualizacion, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="hgo-station-card" data-astro-cid-dp5w2cnz> <h3 class="hgo-station-card__title" data-astro-cid-dp5w2cnz>Redes Sociales Oficiales</h3> <div class="hgo-station-social" data-astro-cid-dp5w2cnz> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="hgo-station-social__link hgo-station-social__link--facebook" data-astro-cid-dp5w2cnz>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="hgo-station-social__link hgo-station-social__link--twitter" data-astro-cid-dp5w2cnz>
Twitter/X
</a>`} </div> </div>`, estacion.nombreCorto || estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo/[slug].astro";
const $$url = "/directorio/hidalgo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
