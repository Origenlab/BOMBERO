import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C37tG6Zv.mjs';
import { Z as ZONAS_QUINTANA_ROO, g as getEstacionesPorZona, a as getAlertasActivas, F as FAQ_QUINTANA_ROO, b as generarSchemaEstacion, e as estacionesQuintanaRoo } from '../../../chunks/estaciones-quintana-roo_fDcUNnLG.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesQuintanaRoo.map((estacion) => ({
    params: { slug: estacion.slug },
    props: { estacion }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { estacion } = Astro2.props;
  const nombreCorto = estacion.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central de Bomberos ", "");
  const title = `${estacion.nombre} | Bomberos Quintana Roo | BOMBERO.MX`;
  function truncateForSEO(text, maxLength) {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > maxLength * 0.7 ? truncated.slice(0, lastSpace) + "..." : truncated + "...";
  }
  const ubicacion = estacion.municipiosCubiertos?.[0] || "Quintana Roo";
  const seoDescription = `${truncateForSEO(estacion.descripcion || "", 120)} Tel: ${estacion.telefono}. ${ubicacion}, Quintana Roo.`;
  const esBilingue = estacion.idiomas?.includes("Ingl\xE9s");
  const esRescateAcuatico = estacion.servicios?.some(
    (s) => s.toLowerCase().includes("acu\xE1tico") || s.toLowerCase().includes("buceo") || s.toLowerCase().includes("mar\xEDtimo")
  );
  const esAeropuerto = estacion.servicios?.some(
    (s) => s.toLowerCase().includes("ssei") || s.toLowerCase().includes("aeron\xE1utico")
  );
  const esCrucero = estacion.servicios?.some((s) => s.toLowerCase().includes("crucero"));
  const esHotelero = estacion.servicios?.some((s) => s.toLowerCase().includes("hotel"));
  const esIsla = estacion.zona === "Cozumel" || estacion.zona === "Isla Mujeres";
  const zonaKey = Object.keys(ZONAS_QUINTANA_ROO).find(
    (k) => ZONAS_QUINTANA_ROO[k].nombre === estacion.zona
  );
  const zonaInfo = zonaKey ? ZONAS_QUINTANA_ROO[zonaKey] : null;
  const estacionesZona = getEstacionesPorZona(estacion.zona).filter((e) => e.slug !== estacion.slug);
  const alertasZona = getAlertasActivas(estacion.zona, "es");
  const alertasZonaEn = getAlertasActivas(estacion.zona, "en");
  const faqRelevantes = FAQ_QUINTANA_ROO.filter((faq) => {
    const preguntaLower = faq.pregunta.toLowerCase();
    if (esBilingue && preguntaLower.includes("ingl\xE9s")) return true;
    if (esRescateAcuatico && preguntaLower.includes("acu\xE1tico")) return true;
    if (esAeropuerto && preguntaLower.includes("aeropuerto")) return true;
    if (esCrucero && preguntaLower.includes("crucero")) return true;
    if (esHotelero && preguntaLower.includes("hotel")) return true;
    if (preguntaLower.includes("tel\xE9fono")) return true;
    return false;
  }).slice(0, 4);
  const schemaEstacion = generarSchemaEstacion(estacion);
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      schemaEstacion,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
          { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
          { "@type": "ListItem", "position": 3, "name": "Quintana Roo", "item": "https://bombero.mx/directorio/quintana-roo" },
          { "@type": "ListItem", "position": 4, "name": nombreCorto, "item": `https://bombero.mx/directorio/quintana-roo/${estacion.slug}` }
        ]
      },
      {
        "@type": "GovernmentService",
        "name": `Emergency Services - ${nombreCorto}`,
        "serviceType": estacion.servicios,
        "provider": {
          "@type": "GovernmentOrganization",
          "name": "H. Cuerpo de Bomberos de Quintana Roo"
        },
        "areaServed": estacion.municipiosCubiertos?.join(", "),
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": estacion.telefono,
          "availableLanguage": estacion.idiomas || ["Spanish"]
        }
      },
      ...faqRelevantes.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": faqRelevantes.map((faq) => ({
          "@type": "Question",
          "name": faq.pregunta,
          "acceptedAnswer": { "@type": "Answer", "text": faq.respuesta }
        }))
      }] : []
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": seoDescription, "data-astro-cid-3ltxtkuz": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script>    ", '<section class="qroo-detail-hero"', ' data-astro-cid-3ltxtkuz> <div class="qroo-detail-hero__bg" data-astro-cid-3ltxtkuz> <div class="qroo-detail-hero__gradient" data-astro-cid-3ltxtkuz></div> <div class="qroo-detail-hero__waves" data-astro-cid-3ltxtkuz></div> </div> <div class="container" data-astro-cid-3ltxtkuz> <!-- Breadcrumb --> <nav class="qroo-detail-breadcrumb" aria-label="Breadcrumb" data-astro-cid-3ltxtkuz> <ol data-astro-cid-3ltxtkuz> <li data-astro-cid-3ltxtkuz><a href="/" data-astro-cid-3ltxtkuz>Inicio</a></li> <li data-astro-cid-3ltxtkuz><a href="/directorio" data-astro-cid-3ltxtkuz>Directorio</a></li> <li data-astro-cid-3ltxtkuz><a href="/directorio/quintana-roo" data-astro-cid-3ltxtkuz>Quintana Roo</a></li> <li aria-current="page" data-astro-cid-3ltxtkuz>', "</li> </ol> </nav> <!-- Alertas Contextuales Biling\xFCes --> ", ' <div class="qroo-detail-hero__grid" data-astro-cid-3ltxtkuz> <div class="qroo-detail-hero__content" data-astro-cid-3ltxtkuz> <!-- Badges --> <div class="qroo-detail-badges" data-astro-cid-3ltxtkuz> <span class="qroo-detail-badge qroo-detail-badge--zone" data-astro-cid-3ltxtkuz>', "</span> ", " ", " ", " ", " ", " ", ' </div> <h1 class="qroo-detail-hero__title" data-astro-cid-3ltxtkuz>', '</h1> <p class="qroo-detail-hero__desc" data-astro-cid-3ltxtkuz>', "</p> ", ' <div class="qroo-detail-hero__address" data-astro-cid-3ltxtkuz> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ltxtkuz> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-3ltxtkuz></path><circle cx="12" cy="10" r="3" data-astro-cid-3ltxtkuz></circle> </svg> <span data-astro-cid-3ltxtkuz>', '</span> </div> <div class="qroo-detail-hero__meta" data-astro-cid-3ltxtkuz> <div class="qroo-detail-hero__meta-item" data-astro-cid-3ltxtkuz> <span class="qroo-detail-hero__meta-label" data-astro-cid-3ltxtkuz>Horario / Hours</span> <span class="qroo-detail-hero__meta-value" data-astro-cid-3ltxtkuz>', "</span> </div> ", " ", " ", ' </div> </div> <!-- Emergency Card Premium Biling\xFCe --> <div class="qroo-detail-emergency" data-astro-cid-3ltxtkuz> <div class="qroo-detail-emergency__main" data-astro-cid-3ltxtkuz> <span class="qroo-detail-emergency__label" data-astro-cid-3ltxtkuz>Emergency / Emergencias</span> <a href="tel:911" class="qroo-detail-emergency__911" data-astro-cid-3ltxtkuz>911</a> <span class="qroo-detail-emergency__note" data-astro-cid-3ltxtkuz> ', ' </span> </div> <div class="qroo-detail-emergency__local" data-astro-cid-3ltxtkuz> <span class="qroo-detail-emergency__local-label" data-astro-cid-3ltxtkuz>Direct Line / L\xEDnea Directa</span> <a', ' class="qroo-detail-emergency__phone" data-astro-cid-3ltxtkuz> ', " </a> </div> ", ' <div class="qroo-detail-emergency__actions" data-astro-cid-3ltxtkuz> <a', ' target="_blank" rel="noopener noreferrer" class="qroo-detail-emergency__action qroo-detail-emergency__action--directions" data-astro-cid-3ltxtkuz> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ltxtkuz> <polygon points="3 11 22 2 13 21 11 13 3 11" data-astro-cid-3ltxtkuz></polygon> </svg> <span data-astro-cid-3ltxtkuz>Directions / C\xF3mo llegar</span> </a> ', " ", ' </div> </div> </div> </div> </section>  <section class="qroo-detail-services" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>Capacidades / Capabilities</span> <h2 data-astro-cid-3ltxtkuz>Servicios Especializados / Specialized Services</h2> </div> <div class="qroo-detail-services__grid" data-astro-cid-3ltxtkuz> ', " </div> </div> </section>  ", ' <section class="qroo-detail-coverage" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-coverage__grid" data-astro-cid-3ltxtkuz> <div class="qroo-detail-coverage__info" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header qroo-detail-section-header--left" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>Cobertura / Coverage</span> <h2 data-astro-cid-3ltxtkuz>\xC1rea de Servicio / Service Area</h2> </div> <div class="qroo-detail-coverage__zone"', " data-astro-cid-3ltxtkuz> <h3 data-astro-cid-3ltxtkuz>", '</h3> <p class="qroo-detail-coverage__zone-en" data-astro-cid-3ltxtkuz>', "</p> <p data-astro-cid-3ltxtkuz>", '</p> </div> <div class="qroo-detail-coverage__municipalities" data-astro-cid-3ltxtkuz> <h4 data-astro-cid-3ltxtkuz>Zonas Cubiertas / Areas Covered</h4> <ul data-astro-cid-3ltxtkuz> ', ' </ul> </div> </div> <div class="qroo-detail-coverage__map" data-astro-cid-3ltxtkuz> <iframe', ' width="100%" height="350" style="border:0; border-radius: 16px;" allowfullscreen="" loading="lazy"', ' data-astro-cid-3ltxtkuz></iframe> <div class="qroo-detail-map__coords" data-astro-cid-3ltxtkuz> <span data-astro-cid-3ltxtkuz>GPS:</span> <code data-astro-cid-3ltxtkuz>', ", ", "</code> </div> </div> </div> </div> </section>  ", " ", ' <section class="qroo-detail-related" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>', "</span> <h2 data-astro-cid-3ltxtkuz>Otras Estaciones / Other Stations</h2> </div> ", ' <div class="qroo-detail-related__all" data-astro-cid-3ltxtkuz> <a href="/directorio/quintana-roo" class="qroo-detail-btn qroo-detail-btn--outline" data-astro-cid-3ltxtkuz>\nVer todas las estaciones de Quintana Roo\n<span class="qroo-detail-btn__en" data-astro-cid-3ltxtkuz>View all Quintana Roo stations</span> </a> </div> </div> </section>  <section class="qroo-detail-cta" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-cta__content" data-astro-cid-3ltxtkuz> <h2 data-astro-cid-3ltxtkuz> ', ' </h2> <p class="qroo-detail-cta__desc-es" data-astro-cid-3ltxtkuz> ', ' </p> <p class="qroo-detail-cta__desc-en" data-astro-cid-3ltxtkuz> ', ' </p> <a href="/cotizar" class="qroo-detail-cta__btn" data-astro-cid-3ltxtkuz> <span data-astro-cid-3ltxtkuz>Solicitar Cotizaci\xF3n</span> <span class="qroo-detail-cta__btn-en" data-astro-cid-3ltxtkuz>Request Quote</span> </a> </div> </div> </section> '])), unescapeHTML(JSON.stringify(schemaOrg)), maybeRenderHead(), addAttribute(`--zone-color: ${zonaInfo?.color || "#06b6d4"}`, "style"), nombreCorto, alertasZona.length > 0 && renderTemplate`<div class="qroo-detail-alerts" data-astro-cid-3ltxtkuz> ${alertasZona.slice(0, 1).map((alerta, i) => renderTemplate`<div${addAttribute(`qroo-detail-alert qroo-detail-alert--${alerta.tipo}`, "class")} data-astro-cid-3ltxtkuz> <span class="qroo-detail-alert__icon" data-astro-cid-3ltxtkuz>${alerta.icono}</span> <div class="qroo-detail-alert__content" data-astro-cid-3ltxtkuz> <span class="qroo-detail-alert__text" data-astro-cid-3ltxtkuz>${alerta.mensaje}</span> ${alertasZonaEn[i] && renderTemplate`<span class="qroo-detail-alert__text-en" data-astro-cid-3ltxtkuz>${alertasZonaEn[i].mensaje}</span>`} </div> </div>`)} </div>`, estacion.zona, esBilingue && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--bilingual" data-astro-cid-3ltxtkuz>Bilingual / Bilingüe</span>`, esRescateAcuatico && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--water" data-astro-cid-3ltxtkuz>🌊 Water Rescue</span>`, esAeropuerto && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--airport" data-astro-cid-3ltxtkuz>✈️ Airport ARFF</span>`, esCrucero && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--cruise" data-astro-cid-3ltxtkuz>🚢 Cruise Port</span>`, esHotelero && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--hotel" data-astro-cid-3ltxtkuz>🏨 Hotel Coverage</span>`, esIsla && renderTemplate`<span class="qroo-detail-badge qroo-detail-badge--island" data-astro-cid-3ltxtkuz>🏝️ Island</span>`, estacion.nombre, estacion.descripcion, estacion.descripcionEn && renderTemplate`<div class="qroo-detail-hero__desc-en" data-astro-cid-3ltxtkuz> <span class="qroo-detail-hero__desc-en-flag" data-astro-cid-3ltxtkuz>EN</span> <p data-astro-cid-3ltxtkuz>${estacion.descripcionEn}</p> </div>`, estacion.direccion, estacion.horario, estacion.personal && renderTemplate`<div class="qroo-detail-hero__meta-item" data-astro-cid-3ltxtkuz> <span class="qroo-detail-hero__meta-label" data-astro-cid-3ltxtkuz>Personal / Staff</span> <span class="qroo-detail-hero__meta-value" data-astro-cid-3ltxtkuz>${estacion.personal} bomberos</span> </div>`, estacion.tiempoRespuesta && renderTemplate`<div class="qroo-detail-hero__meta-item" data-astro-cid-3ltxtkuz> <span class="qroo-detail-hero__meta-label" data-astro-cid-3ltxtkuz>Tiempo Respuesta / Response</span> <span class="qroo-detail-hero__meta-value" data-astro-cid-3ltxtkuz>${estacion.tiempoRespuesta}</span> </div>`, estacion.idiomas && renderTemplate`<div class="qroo-detail-hero__meta-item" data-astro-cid-3ltxtkuz> <span class="qroo-detail-hero__meta-label" data-astro-cid-3ltxtkuz>Idiomas / Languages</span> <span class="qroo-detail-hero__meta-value" data-astro-cid-3ltxtkuz>${estacion.idiomas.join(", ")}</span> </div>`, esBilingue ? "English operators available" : "National Emergency Line", addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, esBilingue && renderTemplate`<div class="qroo-detail-emergency__bilingual" data-astro-cid-3ltxtkuz> <span class="qroo-detail-emergency__bilingual-flag" data-astro-cid-3ltxtkuz>EN</span> <span data-astro-cid-3ltxtkuz>English-speaking staff available 24/7</span> </div>`, addAttribute(`https://www.google.com/maps/dir/?api=1&destination=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), estacion.sitioWeb && renderTemplate`<a${addAttribute(estacion.sitioWeb, "href")} target="_blank" rel="noopener noreferrer" class="qroo-detail-emergency__action" data-astro-cid-3ltxtkuz> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3ltxtkuz> <circle cx="12" cy="12" r="10" data-astro-cid-3ltxtkuz></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-3ltxtkuz></line> </svg> <span data-astro-cid-3ltxtkuz>Website</span> </a>`, estacion.facebook && renderTemplate`<a${addAttribute(estacion.facebook, "href")} target="_blank" rel="noopener noreferrer" class="qroo-detail-emergency__action" data-astro-cid-3ltxtkuz> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-astro-cid-3ltxtkuz> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-astro-cid-3ltxtkuz></path> </svg> <span data-astro-cid-3ltxtkuz>Facebook</span> </a>`, estacion.servicios?.map((servicio, index) => {
    const esAcuatico = servicio.toLowerCase().includes("acu\xE1tico") || servicio.toLowerCase().includes("buceo");
    const esAeroServ = servicio.toLowerCase().includes("ssei") || servicio.toLowerCase().includes("aeron\xE1utico");
    const esMedico = servicio.toLowerCase().includes("hospitalaria");
    return renderTemplate`<div${addAttribute(`qroo-detail-service ${esAcuatico ? "qroo-detail-service--water" : ""} ${esAeroServ ? "qroo-detail-service--airport" : ""} ${esMedico ? "qroo-detail-service--medical" : ""}`, "class")} data-astro-cid-3ltxtkuz> <div class="qroo-detail-service__icon" data-astro-cid-3ltxtkuz> ${esAcuatico && "\u{1F30A}"} ${esAeroServ && "\u2708\uFE0F"} ${esMedico && "\u{1F3E5}"} ${!esAcuatico && !esAeroServ && !esMedico && "\u{1F525}"} </div> <span class="qroo-detail-service__name" data-astro-cid-3ltxtkuz>${servicio}</span> <span class="qroo-detail-service__number" data-astro-cid-3ltxtkuz>${String(index + 1).padStart(2, "0")}</span> </div>`;
  }), estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<section class="qroo-detail-equipment" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>Flota / Fleet</span> <h2 data-astro-cid-3ltxtkuz>Equipamiento / Equipment</h2> </div> <div class="qroo-detail-equipment__grid" data-astro-cid-3ltxtkuz> ${estacion.equipamiento.map((equipo) => {
    const esVehiculo = equipo.toLowerCase().includes("autobomba") || equipo.toLowerCase().includes("unidad") || equipo.toLowerCase().includes("veh\xEDculo") || equipo.toLowerCase().includes("ambulancia");
    const esAcuaticoEq = equipo.toLowerCase().includes("lancha") || equipo.toLowerCase().includes("moto acu\xE1tica") || equipo.toLowerCase().includes("buceo");
    const esArff = equipo.toLowerCase().includes("arff") || equipo.toLowerCase().includes("espuma");
    return renderTemplate`<div${addAttribute(`qroo-detail-equipment__item ${esVehiculo ? "qroo-detail-equipment__item--vehicle" : ""} ${esAcuaticoEq ? "qroo-detail-equipment__item--water" : ""} ${esArff ? "qroo-detail-equipment__item--arff" : ""}`, "class")} data-astro-cid-3ltxtkuz> <span class="qroo-detail-equipment__icon" data-astro-cid-3ltxtkuz> ${esVehiculo && !esAcuaticoEq && !esArff && "\u{1F692}"} ${esAcuaticoEq && "\u{1F6A4}"} ${esArff && "\u2708\uFE0F"} ${!esVehiculo && !esAcuaticoEq && !esArff && "\u{1F527}"} </span> <span class="qroo-detail-equipment__name" data-astro-cid-3ltxtkuz>${equipo}</span> </div>`;
  })} </div> </div> </section>`, addAttribute(`border-color: ${zonaInfo?.color}`, "style"), zonaInfo?.nombre, zonaInfo?.nombreEn, zonaInfo?.descripcion, estacion.municipiosCubiertos?.map((m) => renderTemplate`<li data-astro-cid-3ltxtkuz>${m}</li>`), addAttribute(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d${estacion.coordenadas.lng}!3d${estacion.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2smx!4v1`, "src"), addAttribute(`Map - ${estacion.nombre}`, "title"), estacion.coordenadas.lat.toFixed(4), estacion.coordenadas.lng.toFixed(4), estacion.caracteristicasEspeciales && estacion.caracteristicasEspeciales.length > 0 && renderTemplate`<section class="qroo-detail-features" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>Distintivos / Highlights</span> <h2 data-astro-cid-3ltxtkuz>Características Especiales / Special Features</h2> </div> <div class="qroo-detail-features__grid" data-astro-cid-3ltxtkuz> ${estacion.caracteristicasEspeciales.map((c) => renderTemplate`<div class="qroo-detail-feature" data-astro-cid-3ltxtkuz> <span class="qroo-detail-feature__icon" data-astro-cid-3ltxtkuz> ${c.toLowerCase().includes("biling\xFCe") && "\u{1F310}"} ${c.toLowerCase().includes("rescate") && "\u{1F6A8}"} ${c.toLowerCase().includes("crucero") && "\u{1F6A2}"} ${c.toLowerCase().includes("aeropuerto") && "\u2708\uFE0F"} ${c.toLowerCase().includes("hotel") && "\u{1F3E8}"} ${c.toLowerCase().includes("buceo") && "\u{1F93F}"} ${c.toLowerCase().includes("hurac\xE1n") && "\u{1F300}"} ${!c.toLowerCase().includes("biling\xFCe") && !c.toLowerCase().includes("rescate") && !c.toLowerCase().includes("crucero") && !c.toLowerCase().includes("aeropuerto") && !c.toLowerCase().includes("hotel") && !c.toLowerCase().includes("buceo") && !c.toLowerCase().includes("hurac\xE1n") && "\u2B50"} </span> <span class="qroo-detail-feature__text" data-astro-cid-3ltxtkuz>${c}</span> </div>`)} </div> </div> </section>`, faqRelevantes.length > 0 && renderTemplate`<section class="qroo-detail-faq" data-astro-cid-3ltxtkuz> <div class="container" data-astro-cid-3ltxtkuz> <div class="qroo-detail-section-header" data-astro-cid-3ltxtkuz> <span class="qroo-detail-section-label" data-astro-cid-3ltxtkuz>FAQ</span> <h2 data-astro-cid-3ltxtkuz>Preguntas Frecuentes / Frequently Asked Questions</h2> </div> <div class="qroo-detail-faq__grid" data-astro-cid-3ltxtkuz> ${faqRelevantes.map((faq, index) => renderTemplate`<details class="qroo-detail-faq__item"${addAttribute(index === 0, "open")} data-astro-cid-3ltxtkuz> <summary data-astro-cid-3ltxtkuz> <span class="qroo-detail-faq__q-es" data-astro-cid-3ltxtkuz>${faq.pregunta}</span> <span class="qroo-detail-faq__q-en" data-astro-cid-3ltxtkuz>${faq.preguntaEn}</span> </summary> <div class="qroo-detail-faq__answer" data-astro-cid-3ltxtkuz> <p class="qroo-detail-faq__a-es" data-astro-cid-3ltxtkuz>${faq.respuesta}</p> <p class="qroo-detail-faq__a-en" data-astro-cid-3ltxtkuz>${faq.respuestaEn}</p> </div> </details>`)} </div> </div> </section>`, estacion.zona, estacionesZona.length > 0 ? renderTemplate`<div class="qroo-detail-related__grid" data-astro-cid-3ltxtkuz> ${estacionesZona.slice(0, 3).map((e) => renderTemplate`<a${addAttribute(`/directorio/quintana-roo/${e.slug}`, "href")} class="qroo-detail-related__card" data-astro-cid-3ltxtkuz> <div class="qroo-detail-related__badges" data-astro-cid-3ltxtkuz> ${e.idiomas?.includes("Ingl\xE9s") && renderTemplate`<span class="qroo-detail-related__badge" data-astro-cid-3ltxtkuz>EN</span>`} </div> <h3 data-astro-cid-3ltxtkuz>${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central de Bomberos ", "")}</h3> <p data-astro-cid-3ltxtkuz>${e.direccion}</p> <div class="qroo-detail-related__meta" data-astro-cid-3ltxtkuz> <span class="qroo-detail-related__phone" data-astro-cid-3ltxtkuz>${e.telefono}</span> </div> </a>`)} </div>` : renderTemplate`<p class="qroo-detail-related__empty" data-astro-cid-3ltxtkuz>Only station in ${estacion.zona} / Única estación en ${estacion.zona}</p>`, esRescateAcuatico ? "\xBFNecesitas Equipo de Rescate Acu\xE1tico?" : esHotelero ? "Equipamiento de Seguridad para Hoteles" : "\xBFNecesitas Equipamiento Profesional?", esRescateAcuatico ? "Trajes de buceo, lanchas de rescate, equipo para cenotes y arrecifes" : esHotelero ? "Sistemas de detecci\xF3n, extintores, alarmas y equipos para resorts" : "Equipo profesional para bomberos y brigadas de emergencia", esRescateAcuatico ? "Diving suits, rescue boats, cenote and reef equipment" : esHotelero ? "Detection systems, extinguishers, alarms, and resort equipment" : "Professional equipment for firefighters and emergency brigades"), "head": ($$result2) => renderTemplate`<meta name="geo.region" content="MX-ROO"><meta name="geo.position"${addAttribute(`${estacion.coordenadas.lat};${estacion.coordenadas.lng}`, "content")}>${esBilingue && renderTemplate`<link rel="alternate" hreflang="en"${addAttribute(`https://bombero.mx/directorio/quintana-roo/${estacion.slug}?lang=en`, "href")}>`}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo/[slug].astro";
const $$url = "/directorio/quintana-roo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
