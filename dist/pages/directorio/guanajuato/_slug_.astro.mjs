import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesGuanajuato } from '../../../chunks/estaciones-guanajuato_B9RFEGiK.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesGuanajuato.map((estacion) => ({
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
  const esLeon = estacion.ciudad === "Le\xF3n";
  const esSilao = estacion.ciudad === "Silao de la Victoria";
  const esCelaya = estacion.ciudad === "Celaya";
  const esSalamanca = estacion.ciudad === "Salamanca";
  const esCapital = estacion.ciudad === "Guanajuato";
  const esIrapuato = estacion.ciudad === "Irapuato";
  const esSanMiguel = estacion.ciudad === "San Miguel de Allende";
  const esDolores = estacion.ciudad === "Dolores Hidalgo";
  const esCorredorIndustrial = ["Celaya", "Salamanca", "Villagr\xE1n", "Apaseo el Grande"].includes(estacion.ciudad);
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-6lvuq6po": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="gto-station" data-astro-cid-6lvuq6po> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         HERO SECTION\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="gto-station-hero" data-astro-cid-6lvuq6po> <div class="gto-station-hero__container" data-astro-cid-6lvuq6po> <!-- Badges --> <div class="gto-station-hero__badges" data-astro-cid-6lvuq6po> <span class="gto-station-hero__badge gto-station-hero__badge--state" data-astro-cid-6lvuq6po>GTO</span> <span class="gto-station-hero__badge gto-station-hero__badge--zone" data-astro-cid-6lvuq6po>', "</span> ", " ", " ", " ", " ", " ", " ", ' </div> <h1 class="gto-station-hero__title" data-astro-cid-6lvuq6po>', '</h1> <p class="gto-station-hero__location" data-astro-cid-6lvuq6po> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-6lvuq6po> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-6lvuq6po></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-6lvuq6po></path> </svg> ', ', Guanajuato, M\xE9xico\n</p> <!-- Estad\xEDsticas r\xE1pidas --> <div class="gto-station-hero__stats" data-astro-cid-6lvuq6po> <div class="gto-station-hero__stat" data-astro-cid-6lvuq6po> <span class="gto-station-hero__stat-value" data-astro-cid-6lvuq6po>', '</span> <span class="gto-station-hero__stat-label" data-astro-cid-6lvuq6po>Bomberos</span> </div> <div class="gto-station-hero__stat" data-astro-cid-6lvuq6po> <span class="gto-station-hero__stat-value" data-astro-cid-6lvuq6po>', '</span> <span class="gto-station-hero__stat-label" data-astro-cid-6lvuq6po>Unidades</span> </div> <div class="gto-station-hero__stat" data-astro-cid-6lvuq6po> <span class="gto-station-hero__stat-value" data-astro-cid-6lvuq6po>24/7</span> <span class="gto-station-hero__stat-label" data-astro-cid-6lvuq6po>Servicio</span> </div> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         BANNER DE EMERGENCIA\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <section class="gto-station-emergency" data-astro-cid-6lvuq6po> <div class="gto-station-emergency__container" data-astro-cid-6lvuq6po> <div class="gto-station-emergency__phone" data-astro-cid-6lvuq6po> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-6lvuq6po> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-6lvuq6po></path> </svg> <div data-astro-cid-6lvuq6po> <span class="gto-station-emergency__label" data-astro-cid-6lvuq6po>Tel\xE9fono de emergencia</span> <a', ' class="gto-station-emergency__number" data-astro-cid-6lvuq6po> ', ' </a> </div> </div> <div class="gto-station-emergency__national" data-astro-cid-6lvuq6po> <span data-astro-cid-6lvuq6po>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-6lvuq6po><strong data-astro-cid-6lvuq6po>911</strong></a> </div> </div> </section> <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n         CONTENIDO PRINCIPAL\n         \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 --> <div class="gto-station-content" data-astro-cid-6lvuq6po> <div class="gto-station-content__container" data-astro-cid-6lvuq6po> <!-- Columna Principal --> <div class="gto-station-content__main" data-astro-cid-6lvuq6po> <!-- Descripci\xF3n y Contexto --> <section class="gto-station-section" data-astro-cid-6lvuq6po> <h2 class="gto-station-section__title" data-astro-cid-6lvuq6po>Acerca de esta Estaci\xF3n</h2> <div class="gto-station-section__content" data-astro-cid-6lvuq6po> <p data-astro-cid-6lvuq6po>', "</p>  ", " ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios --> <section class="gto-station-section" data-astro-cid-6lvuq6po> <h2 class="gto-station-section__title" data-astro-cid-6lvuq6po>Servicios de Emergencia</h2> <ul class="gto-station-services" data-astro-cid-6lvuq6po> ', " </ul> </section> <!-- Equipamiento --> ", ' <!-- Mapa --> <section class="gto-station-section" data-astro-cid-6lvuq6po> <h2 class="gto-station-section__title" data-astro-cid-6lvuq6po>Ubicaci\xF3n</h2> <div class="gto-station-map" data-astro-cid-6lvuq6po> <div class="gto-station-map__placeholder" data-astro-cid-6lvuq6po> <p data-astro-cid-6lvuq6po><strong data-astro-cid-6lvuq6po>Direcci\xF3n:</strong> ', "</p> <p data-astro-cid-6lvuq6po><strong data-astro-cid-6lvuq6po>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-6lvuq6po><strong data-astro-cid-6lvuq6po>Coordenadas:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="gto-station-map__link" data-astro-cid-6lvuq6po>\nVer en Google Maps\n</a> </div> </div> </section> </div> <!-- Sidebar --> <aside class="gto-station-sidebar" data-astro-cid-6lvuq6po> <!-- Informaci\xF3n de Contacto --> <div class="gto-station-card gto-station-card--contact" data-astro-cid-6lvuq6po> <h3 class="gto-station-card__title" data-astro-cid-6lvuq6po>Informaci\xF3n de Contacto</h3> <ul class="gto-station-card__list" data-astro-cid-6lvuq6po> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Tel\xE9fono:</strong> <a', " data-astro-cid-6lvuq6po>", "</a> </li> ", " <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Horario:</strong> <span data-astro-cid-6lvuq6po>", "</span> </li> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Direcci\xF3n:</strong> <span data-astro-cid-6lvuq6po>", "</span> </li> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>C.P.:</strong> <span data-astro-cid-6lvuq6po>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas --> <div class="gto-station-card" data-astro-cid-6lvuq6po> <h3 class="gto-station-card__title" data-astro-cid-6lvuq6po>Datos de la Estaci\xF3n</h3> <ul class="gto-station-card__list" data-astro-cid-6lvuq6po> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Personal:</strong> <span data-astro-cid-6lvuq6po>', " bomberos</span> </li> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Unidades:</strong> <span data-astro-cid-6lvuq6po>", " veh\xEDculos</span> </li> ", " <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Zona:</strong> <span data-astro-cid-6lvuq6po>", "</span> </li> <li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Actualizado:</strong> <span data-astro-cid-6lvuq6po>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos Regionales --> <div class="gto-station-card gto-station-card--phones" data-astro-cid-6lvuq6po> <h3 class="gto-station-card__title" data-astro-cid-6lvuq6po>Emergencias Guanajuato</h3> <ul class="gto-station-card__phones" data-astro-cid-6lvuq6po> <li data-astro-cid-6lvuq6po> <span data-astro-cid-6lvuq6po>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-6lvuq6po>911</a> </li> <li data-astro-cid-6lvuq6po> <span data-astro-cid-6lvuq6po>Bomberos Le\xF3n</span> <a href="tel:+524777125555" data-astro-cid-6lvuq6po>(477) 712-5555</a> </li> <li data-astro-cid-6lvuq6po> <span data-astro-cid-6lvuq6po>Bomberos Celaya</span> <a href="tel:+524616123222" data-astro-cid-6lvuq6po>(461) 612-3222</a> </li> <li data-astro-cid-6lvuq6po> <span data-astro-cid-6lvuq6po>Bomberos Salamanca</span> <a href="tel:+524646480808" data-astro-cid-6lvuq6po>(464) 648-0808</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="gto-station-card gto-station-card--back" data-astro-cid-6lvuq6po> <a href="/directorio/guanajuato" class="gto-station-back-link" data-astro-cid-6lvuq6po> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-6lvuq6po> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-6lvuq6po></path> </svg>\nVer todas las estaciones de Guanajuato\n</a> </div> </aside> </div> </div> <!-- Breadcrumb --> <nav class="gto-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-6lvuq6po> <ol class="gto-station-breadcrumb__list" data-astro-cid-6lvuq6po> <li class="gto-station-breadcrumb__item" data-astro-cid-6lvuq6po><a href="/" data-astro-cid-6lvuq6po>Inicio</a></li> <li class="gto-station-breadcrumb__item" data-astro-cid-6lvuq6po><a href="/directorio" data-astro-cid-6lvuq6po>Directorio</a></li> <li class="gto-station-breadcrumb__item" data-astro-cid-6lvuq6po><a href="/directorio/guanajuato" data-astro-cid-6lvuq6po>Guanajuato</a></li> <li class="gto-station-breadcrumb__item gto-station-breadcrumb__item--active" data-astro-cid-6lvuq6po>', "</li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Guanajuato",
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
      { "@type": "ListItem", "position": 3, "name": "Guanajuato", "item": "https://bombero.mx/directorio/guanajuato" },
      { "@type": "ListItem", "position": 4, "name": estacion.nombre, "item": metaSEO.canonical }
    ]
  })), maybeRenderHead(), contextoZona.tipo, esLeon && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>Capital del Calzado</span>`, esSilao && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>Zona Automotriz</span>`, esSalamanca && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>Refinería PEMEX</span>`, esCapital && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>UNESCO</span>`, esSanMiguel && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>#1 Ciudad del Mundo</span>`, esDolores && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>Cuna de la Independencia</span>`, esIrapuato && renderTemplate`<span class="gto-station-hero__badge gto-station-hero__badge--special" data-astro-cid-6lvuq6po>Capital de la Fresa</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esLeon && renderTemplate`<div class="gto-station-context gto-station-context--leon" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Capital Mundial del Calzado y la Piel</h3> <p data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>León</strong> es la ciudad más poblada de Guanajuato con más de <strong data-astro-cid-6lvuq6po>1.6 millones
                    de habitantes</strong> y el motor industrial del estado. Conocida como la <strong data-astro-cid-6lvuq6po>Capital
                    Mundial del Calzado</strong>, concentra el <strong data-astro-cid-6lvuq6po>70% de la producción nacional</strong> de
                    calzado con más de 1,500 empresas. Los bomberos de León tienen especialización en emergencias
                    en curtidurías, manejo de solventes y adhesivos industriales.
</p> </div>`, esSilao && renderTemplate`<div class="gto-station-context gto-station-context--silao" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Corredor Automotriz del Bajío</h3> <p data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Silao</strong> es el epicentro de la industria automotriz mexicana, albergando plantas
                    de <strong data-astro-cid-6lvuq6po>Toyota, Mazda y Honda</strong>. El <strong data-astro-cid-6lvuq6po>Puerto Interior</strong> es el principal
                    puerto seco del país para logística automotriz. Los bomberos de Silao tienen capacitación
                    especializada en emergencias industriales automotrices, incluyendo manejo de pinturas,
                    solventes y procesos de manufactura avanzada.
</p> </div>`, esSalamanca && renderTemplate`<div class="gto-station-context gto-station-context--salamanca" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Zona Petroquímica - Refinería PEMEX</h3> <p data-astro-cid-6lvuq6po>
Esta estación tiene especialización única en <strong data-astro-cid-6lvuq6po>emergencias petroquímicas</strong> por
                    su proximidad a la <strong data-astro-cid-6lvuq6po>Refinería Antonio M. Amor</strong> de PEMEX, con capacidad de
<strong data-astro-cid-6lvuq6po>220,000 barriles diarios</strong>. Personal certificado en respuesta HAZMAT de alto
                    nivel, manejo de hidrocarburos, uso de espuma AFFF y coordinación con brigadas industriales
                    de PEMEX bajo el Plan de Auxilio Mutuo.
</p> </div>`, esCapital && renderTemplate`<div class="gto-station-context gto-station-context--capital" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Patrimonio de la Humanidad UNESCO</h3> <p data-astro-cid-6lvuq6po>
La ciudad de <strong data-astro-cid-6lvuq6po>Guanajuato</strong> es Patrimonio de la Humanidad desde <strong data-astro-cid-6lvuq6po>1988</strong>.
                    Su singular geografía con <strong data-astro-cid-6lvuq6po>túneles viales</strong>, callejones estrechos y edificios
                    coloniales históricos requiere técnicas especializadas de combate de incendios. Personal
                    capacitado en protección de patrimonio cultural y atención durante el <strong data-astro-cid-6lvuq6po>Festival
                    Internacional Cervantino</strong>, que reúne más de 200,000 visitantes.
</p> </div>`, esSanMiguel && renderTemplate`<div class="gto-station-context gto-station-context--san-miguel" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>San Miguel de Allende - La Mejor Ciudad del Mundo</h3> <p data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>San Miguel de Allende</strong> ha sido votada múltiples veces como la <strong data-astro-cid-6lvuq6po>#1
                    Ciudad del Mundo</strong> por Condé Nast Traveler y Travel+Leisure. Ciudad <strong data-astro-cid-6lvuq6po>Patrimonio
                    UNESCO</strong> con importante comunidad de residentes extranjeros. Personal capacitado en
                    protección de patrimonio arquitectónico colonial, <strong data-astro-cid-6lvuq6po>atención multilingüe</strong>
en inglés y español, y emergencias en el sector hotelero de lujo y galerías de arte.
</p> </div>`, esDolores && renderTemplate`<div class="gto-station-context gto-station-context--dolores" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Cuna de la Independencia Nacional</h3> <p data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Dolores Hidalgo</strong> es donde el padre Miguel Hidalgo dio el <strong data-astro-cid-6lvuq6po>Grito de
                    Independencia en 1810</strong>. Pueblo Mágico reconocido por su cerámica artesanal Talavera
                    y su importancia histórica. Personal capacitado en protección del patrimonio histórico
                    nacional, emergencias en los numerosos talleres de cerámica con hornos de alta temperatura
                    y atención turística.
</p> </div>`, esIrapuato && renderTemplate`<div class="gto-station-context gto-station-context--irapuato" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Capital Mundial de la Fresa</h3> <p data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Irapuato</strong> es la segunda ciudad más poblada del estado con más de
<strong data-astro-cid-6lvuq6po>580,000 habitantes</strong>. Reconocida como la <strong data-astro-cid-6lvuq6po>Capital Mundial de la
                    Fresa</strong>, su economía gira en torno a la agroindustria fresera, empacadoras y
                    cámaras de refrigeración. Centro estratégico del Bajío agroindustrial con cobertura
                    a zonas comerciales e industriales.
</p> </div>`, esCorredorIndustrial && !esSalamanca && !esCelaya && renderTemplate`<div class="gto-station-context gto-station-context--corredor" data-astro-cid-6lvuq6po> <h3 data-astro-cid-6lvuq6po>Corredor Industrial del Bajío</h3> <p data-astro-cid-6lvuq6po>
Esta estación forma parte del <strong data-astro-cid-6lvuq6po>principal corredor industrial de México</strong>,
                    donde operan plantas automotrices y manufactureras de clase mundial. El Bajío se ha
                    consolidado como el <strong data-astro-cid-6lvuq6po>#1 productor de vehículos del país</strong>, requiriendo
                    personal especializado en emergencias industriales, manejo de materiales peligrosos
                    y coordinación con brigadas empresariales.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="gto-station-services__item" data-astro-cid-6lvuq6po> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-6lvuq6po> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-6lvuq6po></path> </svg> <span data-astro-cid-6lvuq6po>${servicio}</span> </li>`), estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<section class="gto-station-section" data-astro-cid-6lvuq6po> <h2 class="gto-station-section__title" data-astro-cid-6lvuq6po>Equipamiento y Unidades</h2> <div class="gto-station-equipment" data-astro-cid-6lvuq6po> ${estacion.equipamiento.map((equipo) => renderTemplate`<div class="gto-station-equipment__item" data-astro-cid-6lvuq6po> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-6lvuq6po> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-6lvuq6po></path> </svg> <span data-astro-cid-6lvuq6po>${equipo}</span> </div>`)} </div> </section>`, estacion.direccion, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.email && renderTemplate`<li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Email:</strong> <a${addAttribute(`mailto:${estacion.email}`, "href")} data-astro-cid-6lvuq6po>${estacion.email}</a> </li>`, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-6lvuq6po> <strong data-astro-cid-6lvuq6po>Fundación:</strong> <span data-astro-cid-6lvuq6po>${estacion.fechaFundacion}</span> </li>`, contextoZona.tipo, fechaActualizacion, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="gto-station-card" data-astro-cid-6lvuq6po> <h3 class="gto-station-card__title" data-astro-cid-6lvuq6po>Redes Sociales</h3> <div class="gto-station-social" data-astro-cid-6lvuq6po> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="gto-station-social__link" data-astro-cid-6lvuq6po>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="gto-station-social__link" data-astro-cid-6lvuq6po>
Twitter/X
</a>`} </div> </div>`, estacion.nombreCorto || estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato/[slug].astro";
const $$url = "/directorio/guanajuato/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
