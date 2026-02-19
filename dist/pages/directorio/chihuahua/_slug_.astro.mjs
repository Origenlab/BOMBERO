import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, F as Fragment, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesChihuahua } from '../../../chunks/estaciones-chihuahua_oQYVy_Ag.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesChihuahua.map((estacion) => ({
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
  const esCapital = estacion.ciudad === "Chihuahua" && estacion.estado === "Chihuahua";
  const esJuarez = estacion.ciudad === "Ciudad Ju\xE1rez";
  const esSierra = ["Creel", "Guachochi", "Bocoyna", "Madera"].includes(estacion.ciudad);
  const esAgricola = ["Delicias", "Cuauht\xE9moc", "Camargo", "Jim\xE9nez", "Meoqui", "Saucillo"].includes(estacion.ciudad);
  const esMinera = ["Hidalgo del Parral", "Santa B\xE1rbara", "Valle de Allende"].includes(estacion.ciudad);
  const esPaquime = ["Nuevo Casas Grandes", "Casas Grandes", "Janos"].includes(estacion.ciudad);
  const esAeropuerto = estacion.slug.includes("aeropuerto");
  const fechaActualizacion = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "keywords": metaSEO.keywords.join(", "), "canonical": metaSEO.canonical, "data-astro-cid-u22usdxc": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", '<div class="chih-station" data-astro-cid-u22usdxc> <!-- Hero de la Estaci\xF3n --> <section class="chih-station-hero" data-astro-cid-u22usdxc> <div class="chih-station-hero__container" data-astro-cid-u22usdxc> <!-- Badges --> <div class="chih-station-hero__badges" data-astro-cid-u22usdxc> <span class="chih-station-hero__badge chih-station-hero__badge--state" data-astro-cid-u22usdxc>CHIH</span> <span class="chih-station-hero__badge chih-station-hero__badge--zone" data-astro-cid-u22usdxc>', "</span> ", " ", " ", " ", " ", ' </div> <h1 class="chih-station-hero__title" data-astro-cid-u22usdxc>', '</h1> <p class="chih-station-hero__location" data-astro-cid-u22usdxc> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-u22usdxc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-u22usdxc></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-u22usdxc></path> </svg> ', ', Chihuahua, M\xE9xico\n</p> <!-- Estad\xEDsticas r\xE1pidas --> <div class="chih-station-hero__stats" data-astro-cid-u22usdxc> <div class="chih-station-hero__stat" data-astro-cid-u22usdxc> <span class="chih-station-hero__stat-value" data-astro-cid-u22usdxc>', '</span> <span class="chih-station-hero__stat-label" data-astro-cid-u22usdxc>Bomberos</span> </div> <div class="chih-station-hero__stat" data-astro-cid-u22usdxc> <span class="chih-station-hero__stat-value" data-astro-cid-u22usdxc>', '</span> <span class="chih-station-hero__stat-label" data-astro-cid-u22usdxc>Unidades</span> </div> <div class="chih-station-hero__stat" data-astro-cid-u22usdxc> <span class="chih-station-hero__stat-value" data-astro-cid-u22usdxc>24/7</span> <span class="chih-station-hero__stat-label" data-astro-cid-u22usdxc>Servicio</span> </div> </div> </div> </section> <!-- Banner de Emergencia --> <section class="chih-station-emergency" data-astro-cid-u22usdxc> <div class="chih-station-emergency__container" data-astro-cid-u22usdxc> <div class="chih-station-emergency__phone" data-astro-cid-u22usdxc> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" data-astro-cid-u22usdxc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-u22usdxc></path> </svg> <div data-astro-cid-u22usdxc> <span class="chih-station-emergency__label" data-astro-cid-u22usdxc>Tel\xE9fono de emergencia</span> <a', ' class="chih-station-emergency__number" data-astro-cid-u22usdxc> ', ' </a> </div> </div> <div class="chih-station-emergency__national" data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Emergencias Nacional:</span> <a href="tel:911" data-astro-cid-u22usdxc><strong data-astro-cid-u22usdxc>911</strong></a> </div> </div> </section> <!-- Contenido Principal --> <div class="chih-station-content" data-astro-cid-u22usdxc> <div class="chih-station-content__container" data-astro-cid-u22usdxc> <!-- Columna Principal --> <div class="chih-station-content__main" data-astro-cid-u22usdxc> <!-- Descripci\xF3n y Contexto --> <section class="chih-station-section" data-astro-cid-u22usdxc> <h2 class="chih-station-section__title" data-astro-cid-u22usdxc>Acerca de esta Estaci\xF3n</h2> <div class="chih-station-section__content" data-astro-cid-u22usdxc> <p data-astro-cid-u22usdxc>', "</p>  ", " ", " ", " ", " ", " ", " ", ' </div> </section> <!-- Servicios --> <section class="chih-station-section" data-astro-cid-u22usdxc> <h2 class="chih-station-section__title" data-astro-cid-u22usdxc>Servicios de Emergencia</h2> <ul class="chih-station-services" data-astro-cid-u22usdxc> ', ' </ul> </section> <!-- Equipamiento --> <section class="chih-station-section" data-astro-cid-u22usdxc> <h2 class="chih-station-section__title" data-astro-cid-u22usdxc>Equipamiento y Unidades</h2> <div class="chih-station-equipment" data-astro-cid-u22usdxc> ', ' </div> </section> <!-- Mapa --> <section class="chih-station-section" data-astro-cid-u22usdxc> <h2 class="chih-station-section__title" data-astro-cid-u22usdxc>Ubicaci\xF3n</h2> <div class="chih-station-map" data-astro-cid-u22usdxc> <div class="chih-station-map__placeholder" data-astro-cid-u22usdxc> <p data-astro-cid-u22usdxc><strong data-astro-cid-u22usdxc>Direcci\xF3n:</strong> ', "</p> <p data-astro-cid-u22usdxc><strong data-astro-cid-u22usdxc>C\xF3digo Postal:</strong> ", "</p> <p data-astro-cid-u22usdxc><strong data-astro-cid-u22usdxc>Coordenadas:</strong> ", ", ", "</p> <a", ' target="_blank" rel="noopener noreferrer" class="chih-station-map__link" data-astro-cid-u22usdxc>\nVer en Google Maps\n</a> </div> </div> </section> </div> <!-- Sidebar --> <aside class="chih-station-sidebar" data-astro-cid-u22usdxc> <!-- Informaci\xF3n de Contacto --> <div class="chih-station-card chih-station-card--contact" data-astro-cid-u22usdxc> <h3 class="chih-station-card__title" data-astro-cid-u22usdxc>Informaci\xF3n de Contacto</h3> <ul class="chih-station-card__list" data-astro-cid-u22usdxc> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Tel\xE9fono:</strong> <a', " data-astro-cid-u22usdxc>", "</a> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Email:</strong> <a", " data-astro-cid-u22usdxc>", "</a> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Horario:</strong> <span data-astro-cid-u22usdxc>", "</span> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Direcci\xF3n:</strong> <span data-astro-cid-u22usdxc>", "</span> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>C.P.:</strong> <span data-astro-cid-u22usdxc>", '</span> </li> </ul> </div> <!-- Estad\xEDsticas --> <div class="chih-station-card" data-astro-cid-u22usdxc> <h3 class="chih-station-card__title" data-astro-cid-u22usdxc>Datos de la Estaci\xF3n</h3> <ul class="chih-station-card__list" data-astro-cid-u22usdxc> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Personal:</strong> <span data-astro-cid-u22usdxc>', " bomberos</span> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Unidades:</strong> <span data-astro-cid-u22usdxc>", " veh\xEDculos</span> </li> ", " <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Zona:</strong> <span data-astro-cid-u22usdxc>", "</span> </li> <li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Actualizado:</strong> <span data-astro-cid-u22usdxc>", '</span> </li> </ul> </div> <!-- Tel\xE9fonos Regionales --> <div class="chih-station-card chih-station-card--phones" data-astro-cid-u22usdxc> <h3 class="chih-station-card__title" data-astro-cid-u22usdxc>Emergencias Chihuahua</h3> <ul class="chih-station-card__phones" data-astro-cid-u22usdxc> <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Emergencias Nacional</span> <a href="tel:911" data-astro-cid-u22usdxc>911</a> </li> ', ' <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Protecci\xF3n Civil</span> <a href="tel:+526144293310" data-astro-cid-u22usdxc>(614) 429-3310</a> </li> </ul> </div> <!-- Redes Sociales --> ', ' <!-- Volver al directorio --> <div class="chih-station-card chih-station-card--back" data-astro-cid-u22usdxc> <a href="/directorio/chihuahua" class="chih-station-back-link" data-astro-cid-u22usdxc> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-u22usdxc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-u22usdxc></path> </svg>\nVer todas las estaciones de Chihuahua\n</a> </div> </aside> </div> </div> <!-- Breadcrumb --> <nav class="chih-station-breadcrumb" aria-label="Breadcrumb" data-astro-cid-u22usdxc> <ol class="chih-station-breadcrumb__list" data-astro-cid-u22usdxc> <li class="chih-station-breadcrumb__item" data-astro-cid-u22usdxc> <a href="/" data-astro-cid-u22usdxc>Inicio</a> </li> <li class="chih-station-breadcrumb__item" data-astro-cid-u22usdxc> <a href="/directorio" data-astro-cid-u22usdxc>Directorio</a> </li> <li class="chih-station-breadcrumb__item" data-astro-cid-u22usdxc> <a href="/directorio/chihuahua" data-astro-cid-u22usdxc>Chihuahua</a> </li> <li class="chih-station-breadcrumb__item chih-station-breadcrumb__item--active" data-astro-cid-u22usdxc> ', " </li> </ol> </nav> </div> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": estacion.descripcion,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Chihuahua",
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
    "image": `https://bombero.mx/images/estaciones/chihuahua/${estacion.slug}.jpg`,
    "sameAs": estacion.redes ? Object.values(estacion.redes) : []
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://bombero.mx"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Directorio",
        "item": "https://bombero.mx/directorio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Chihuahua",
        "item": "https://bombero.mx/directorio/chihuahua"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": estacion.nombre,
        "item": metaSEO.canonical
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "name": estacion.nombre,
    "serviceType": "Fire Department",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${estacion.ciudad}, Chihuahua, M\xE9xico`
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": estacion.telefono,
      "availableLanguage": ["es", "en"]
    },
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Gobierno del Estado de Chihuahua"
    }
  })), maybeRenderHead(), contextoZona.tipo, esJuarez && renderTemplate`<span class="chih-station-hero__badge chih-station-hero__badge--special" data-astro-cid-u22usdxc>Frontera EE.UU.</span>`, esSierra && renderTemplate`<span class="chih-station-hero__badge chih-station-hero__badge--special" data-astro-cid-u22usdxc>Sierra Tarahumara</span>`, esPaquime && renderTemplate`<span class="chih-station-hero__badge chih-station-hero__badge--special" data-astro-cid-u22usdxc>UNESCO</span>`, esMinera && renderTemplate`<span class="chih-station-hero__badge chih-station-hero__badge--special" data-astro-cid-u22usdxc>Zona Minera</span>`, esAeropuerto && renderTemplate`<span class="chih-station-hero__badge chih-station-hero__badge--special" data-astro-cid-u22usdxc>ARFF</span>`, estacion.nombre, estacion.ciudad, estacion.personal, estacion.unidades, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, estacion.descripcion, esCapital && renderTemplate`<div class="chih-station-context chih-station-context--capital" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Capital del Estado más Grande de México</h3> <p data-astro-cid-u22usdxc>
La ciudad de <strong data-astro-cid-u22usdxc>Chihuahua</strong>, capital del estado con el mismo nombre, es el
                    centro político, económico y cultural de la entidad más extensa de México. Con más de
<strong data-astro-cid-u22usdxc>900,000 habitantes</strong>, la zona metropolitana alberga industrias
                    aeroespaciales, automotrices y manufactureras de clase mundial. Esta estación protege
                    tanto zonas residenciales como complejos industriales con tecnología de punta en
                    respuesta a emergencias.
</p> </div>`, esJuarez && renderTemplate`<div class="chih-station-context chih-station-context--frontera" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Principal Frontera México-Estados Unidos</h3> <p data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Ciudad Juárez</strong> es la ciudad fronteriza más poblada de México con
<strong data-astro-cid-u22usdxc>1.5 millones de habitantes</strong>. Comparte frontera con <strong data-astro-cid-u22usdxc>El Paso, Texas</strong>,
                    formando una de las áreas metropolitanas binacionales más grandes del mundo. Los bomberos de
                    Ciudad Juárez mantienen <strong data-astro-cid-u22usdxc>protocolos de cooperación binacional</strong> con El Paso
                    Fire Department para emergencias transfronterizas. La ciudad es sede del centro
                    maquilador más grande del país con más de <strong data-astro-cid-u22usdxc>400 plantas de manufactura</strong>.
</p> </div>`, esSierra && renderTemplate`<div class="chih-station-context chih-station-context--sierra" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Sierra Tarahumara y Barrancas del Cobre</h3> <p data-astro-cid-u22usdxc>
Esta estación opera en el corazón de la <strong data-astro-cid-u22usdxc>Sierra Tarahumara</strong>, hogar de las
<strong data-astro-cid-u22usdxc>Barrancas del Cobre</strong> —un sistema de cañones cuatro veces más grande que
                    el Gran Cañón de Arizona. La región es territorio ancestral del pueblo
<strong data-astro-cid-u22usdxc>Rarámuri (Tarahumara)</strong> y destino de <strong data-astro-cid-u22usdxc>turismo de aventura</strong>
de clase mundial. Los bomberos están especializados en <strong data-astro-cid-u22usdxc>rescate de montaña</strong>,
<strong data-astro-cid-u22usdxc>incendios forestales</strong> y <strong data-astro-cid-u22usdxc>búsqueda de personas</strong> en terreno
                    extremadamente accidentado.
</p> </div>`, esAgricola && renderTemplate`<div class="chih-station-context chih-station-context--agricola" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Corazón Agrícola de Chihuahua</h3> <p data-astro-cid-u22usdxc>
Esta estación protege una de las zonas agrícolas más productivas de México.
<strong data-astro-cid-u22usdxc>Chihuahua es el principal productor nacional</strong> de manzana, nuez, chile
                    y algodón. La región también es conocida por las <strong data-astro-cid-u22usdxc>comunidades menonitas</strong>,
                    famosas por su queso artesanal y productos lácteos. Los bomberos atienden emergencias
                    en <strong data-astro-cid-u22usdxc>agroindustrias</strong>, <strong data-astro-cid-u22usdxc>frigoríficos</strong> y extensas áreas
                    de cultivo.
</p> </div>`, esPaquime && renderTemplate`<div class="chih-station-context chih-station-context--unesco" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Patrimonio de la Humanidad UNESCO</h3> <p data-astro-cid-u22usdxc>
Esta estación tiene la responsabilidad de proteger la <strong data-astro-cid-u22usdxc>Zona Arqueológica de
                    Paquimé</strong>, declarada <strong data-astro-cid-u22usdxc>Patrimonio de la Humanidad por la UNESCO en 1998</strong>.
                    Paquimé fue el centro ceremonial más importante de la cultura del mismo nombre, que
                    floreció entre los siglos X y XIV. Los bomberos cuentan con protocolos especiales
                    para la <strong data-astro-cid-u22usdxc>protección del patrimonio arqueológico</strong> y coordinación con
                    el INAH para emergencias en el sitio.
</p> </div>`, esMinera && renderTemplate`<div class="chih-station-context chih-station-context--minera" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Tradición Minera de Más de 400 Años</h3> <p data-astro-cid-u22usdxc>
Esta estación opera en la <strong data-astro-cid-u22usdxc>zona minera histórica</strong> del sur de Chihuahua.
<strong data-astro-cid-u22usdxc>Hidalgo del Parral</strong>, donde fue asesinado Pancho Villa, y
<strong data-astro-cid-u22usdxc>Santa Bárbara</strong> (fundada en 1567) tienen más de cuatro siglos de
                    historia minera. Los bomberos están capacitados en <strong data-astro-cid-u22usdxc>rescate minero</strong>
y atención de emergencias en <strong data-astro-cid-u22usdxc>minas activas</strong> de cobre, plata y otros
                    minerales.
</p> </div>`, esAeropuerto && renderTemplate`<div class="chih-station-context chih-station-context--aeropuerto" data-astro-cid-u22usdxc> <h3 data-astro-cid-u22usdxc>Servicios Aeroportuarios ARFF</h3> <p data-astro-cid-u22usdxc>
Estación especializada en <strong data-astro-cid-u22usdxc>Rescue and Fire Fighting (ARFF)</strong> con
                    certificación de la <strong data-astro-cid-u22usdxc>Dirección General de Aeronáutica Civil</strong>. Personal
                    capacitado en <strong data-astro-cid-u22usdxc>rescate de aeronaves</strong>, <strong data-astro-cid-u22usdxc>combate de incendios
                    con combustible de aviación</strong> y <strong data-astro-cid-u22usdxc>evacuación de pasajeros</strong>.
                    Equipamiento especializado con vehículos ARFF y espuma de alta capacidad.
</p> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li class="chih-station-services__item" data-astro-cid-u22usdxc> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" data-astro-cid-u22usdxc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-u22usdxc></path> </svg> <span data-astro-cid-u22usdxc>${servicio}</span> </li>`), estacion.equipamiento.map((equipo) => renderTemplate`<div class="chih-station-equipment__item" data-astro-cid-u22usdxc> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" height="18" data-astro-cid-u22usdxc> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-u22usdxc></path> </svg> <span data-astro-cid-u22usdxc>${equipo}</span> </div>`), estacion.direccion, estacion.codigoPostal, estacion.coordenadas.lat, estacion.coordenadas.lng, addAttribute(`https://www.google.com/maps/search/?api=1&query=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, addAttribute(`mailto:${estacion.email}`, "href"), estacion.email, estacion.horario, estacion.direccion, estacion.codigoPostal, estacion.personal, estacion.unidades, estacion.fechaFundacion && renderTemplate`<li data-astro-cid-u22usdxc> <strong data-astro-cid-u22usdxc>Fundación:</strong> <span data-astro-cid-u22usdxc>${estacion.fechaFundacion}</span> </li>`, contextoZona.tipo, fechaActualizacion, esJuarez ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-u22usdxc": true }, { "default": ($$result3) => renderTemplate` <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Bomberos Cd. Juárez</span> <a href="tel:+526566161000" data-astro-cid-u22usdxc>(656) 616-1000</a> </li> <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Cruz Roja Juárez</span> <a href="tel:+526566161616" data-astro-cid-u22usdxc>(656) 616-1616</a> </li> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-u22usdxc": true }, { "default": ($$result3) => renderTemplate` <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Bomberos Chihuahua</span> <a href="tel:+526144293300" data-astro-cid-u22usdxc>(614) 429-3300</a> </li> <li data-astro-cid-u22usdxc> <span data-astro-cid-u22usdxc>Cruz Roja Chihuahua</span> <a href="tel:+526144114411" data-astro-cid-u22usdxc>(614) 411-4411</a> </li> ` })}`, estacion.redes && Object.keys(estacion.redes).length > 0 && renderTemplate`<div class="chih-station-card" data-astro-cid-u22usdxc> <h3 class="chih-station-card__title" data-astro-cid-u22usdxc>Redes Sociales</h3> <div class="chih-station-social" data-astro-cid-u22usdxc> ${estacion.redes.facebook && renderTemplate`<a${addAttribute(estacion.redes.facebook, "href")} target="_blank" rel="noopener noreferrer" class="chih-station-social__link" data-astro-cid-u22usdxc>
Facebook
</a>`} ${estacion.redes.twitter && renderTemplate`<a${addAttribute(estacion.redes.twitter, "href")} target="_blank" rel="noopener noreferrer" class="chih-station-social__link" data-astro-cid-u22usdxc>
Twitter/X
</a>`} </div> </div>`, estacion.nombre) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chihuahua/[slug].astro";
const $$url = "/directorio/chihuahua/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
