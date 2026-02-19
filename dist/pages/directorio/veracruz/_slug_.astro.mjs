import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { Z as ZONAS_VERACRUZ, g as getEstacionesPorZona, a as getAlertaHuracanActual, P as PROTOCOLOS_VERACRUZ, b as getInstalacionesPEMEX, c as getPuertos, F as FAQ_VERACRUZ, e as estacionesVeracruz, S as SISTEMA_HURACANES_VERACRUZ } from '../../../chunks/estaciones-veracruz_BNG6Av4m.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesVeracruz.map((estacion) => ({
    params: { slug: estacion.slug },
    props: { estacion }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { estacion } = Astro2.props;
  const nombreCorto = estacion.nombre.replace("Estacion de Bomberos ", "").replace("Estacion Central de Bomberos ", "").replace("Estacion HAZMAT ", "");
  const title = `${estacion.nombre} | Bomberos Veracruz | BOMBERO.MX`;
  const description = `${estacion.descripcion} Tel: ${estacion.telefono}. ${estacion.horario}.`;
  const esHAZMAT = estacion.nombre.toLowerCase().includes("hazmat") || estacion.servicios?.some((s) => s.toLowerCase().includes("hazmat"));
  const esMaritimo = estacion.servicios?.some(
    (s) => s.toLowerCase().includes("maritimo") || s.toLowerCase().includes("mar\xEDtimo") || s.toLowerCase().includes("buque") || s.toLowerCase().includes("portuario")
  );
  const esPEMEX = estacion.caracteristicasEspeciales?.some(
    (c) => c.toLowerCase().includes("pemex") || c.toLowerCase().includes("refiner\xEDa") || c.toLowerCase().includes("petroqu\xEDmic")
  );
  const esCoordinacionSEMAR = estacion.servicios?.some(
    (s) => s.toLowerCase().includes("semar") || s.toLowerCase().includes("marina")
  ) || estacion.caracteristicasEspeciales?.some(
    (c) => c.toLowerCase().includes("semar")
  );
  const esPuerto = estacion.caracteristicasEspeciales?.some(
    (c) => c.toLowerCase().includes("puerto")
  ) || estacion.servicios?.some(
    (s) => s.toLowerCase().includes("portuario") || s.toLowerCase().includes("puerto")
  );
  const esHuracanes = estacion.zona.includes("Puerto") || estacion.zona.includes("Tuxpan") || estacion.zona.includes("Papaloapan") || estacion.servicios?.some((s) => s.toLowerCase().includes("inundacion"));
  const esBilingue = estacion.idiomas?.includes("Ingles") || estacion.idiomas?.includes("Ingl\xE9s");
  const esCentral = estacion.nombre.toLowerCase().includes("central");
  estacion.zona === "Zona Papaloapan" || estacion.servicios?.some((s) => s.toLowerCase().includes("inundacion"));
  const zonaKey = Object.keys(ZONAS_VERACRUZ).find(
    (k) => ZONAS_VERACRUZ[k].nombre === estacion.zona
  );
  const zonaInfo = zonaKey ? ZONAS_VERACRUZ[zonaKey] : null;
  const estacionesZona = getEstacionesPorZona(estacion.zona).filter((e) => e.slug !== estacion.slug);
  const alertaHuracan = getAlertaHuracanActual();
  const protocolosRelevantes = PROTOCOLOS_VERACRUZ.filter((p) => {
    if (esHAZMAT && (p.codigo.includes("HAZMAT") || p.codigo.includes("FIRE-TANK") || p.codigo.includes("TOXIC"))) return true;
    if (esMaritimo && (p.codigo.includes("SHIP") || p.codigo.includes("SAR-MAR") || p.codigo.includes("SPILL"))) return true;
    if (esPEMEX && (p.codigo.includes("TANK") || p.codigo.includes("BLOWOUT"))) return true;
    if (esHuracanes && p.codigo.includes("HURR")) return true;
    if (estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("taj\xEDn")) && p.codigo.includes("UNESCO")) return true;
    return false;
  }).slice(0, 3);
  const instalacionesPEMEX = esHAZMAT || esPEMEX ? getInstalacionesPEMEX().filter(
    (inst) => inst.estacionAsignada.toLowerCase().includes(estacion.nombre.toLowerCase().split(" ").slice(-1)[0]) || estacion.municipiosCubiertos?.some((m) => inst.ubicacion.toLowerCase().includes(m.toLowerCase()))
  ) : [];
  const puertos = esMaritimo || esPuerto ? getPuertos().filter(
    (puerto) => puerto.estacionAsignada.toLowerCase().includes(nombreCorto.toLowerCase()) || estacion.municipiosCubiertos?.some((m) => puerto.ubicacion.toLowerCase().includes(m.toLowerCase()))
  ) : [];
  const faqRelevantes = FAQ_VERACRUZ.filter((faq) => {
    const categoriaLower = faq.categoria.toLowerCase();
    if (esHAZMAT && categoriaLower === "industrial") return true;
    if (esMaritimo && categoriaLower === "maritimo") return true;
    if (esHuracanes && categoriaLower === "huracanes") return true;
    if (categoriaLower === "contacto") return true;
    return false;
  }).slice(0, 4);
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FireStation",
        "@id": `https://bombero.mx/directorio/veracruz/${estacion.slug}`,
        "name": estacion.nombre,
        "description": estacion.descripcion,
        "url": `https://bombero.mx/directorio/veracruz/${estacion.slug}`,
        "telephone": estacion.telefono,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": estacion.direccion,
          "addressLocality": estacion.municipiosCubiertos?.[0] || "Veracruz",
          "addressRegion": "Veracruz",
          "addressCountry": "MX"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": estacion.coordenadas.lat,
          "longitude": estacion.coordenadas.lng
        },
        "openingHours": "Mo-Su 00:00-24:00",
        "areaServed": estacion.municipiosCubiertos?.map((m) => ({
          "@type": "AdministrativeArea",
          "name": m
        })),
        "availableLanguage": estacion.idiomas || ["Spanish"],
        "numberOfEmployees": estacion.personal,
        "serviceType": estacion.servicios,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Emergencia",
          "itemListElement": estacion.servicios?.map((servicio, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": servicio
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
          { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
          { "@type": "ListItem", "position": 3, "name": "Veracruz", "item": "https://bombero.mx/directorio/veracruz" },
          { "@type": "ListItem", "position": 4, "name": nombreCorto, "item": `https://bombero.mx/directorio/veracruz/${estacion.slug}` }
        ]
      },
      {
        "@type": "GovernmentService",
        "name": `Emergency Services - ${nombreCorto}`,
        "serviceType": estacion.servicios,
        "provider": {
          "@type": "GovernmentOrganization",
          "name": "H. Cuerpo de Bomberos de Veracruz"
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
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "data-astro-cid-x3heieyw": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script>    ", '<section class="ver-detail-hero"', ' data-astro-cid-x3heieyw> <div class="ver-detail-hero__bg" data-astro-cid-x3heieyw> <div class="ver-detail-hero__gradient" data-astro-cid-x3heieyw></div> <div class="ver-detail-hero__pattern" data-astro-cid-x3heieyw></div> </div> <div class="container" data-astro-cid-x3heieyw> <!-- Breadcrumb --> <nav class="ver-detail-breadcrumb" aria-label="Breadcrumb" data-astro-cid-x3heieyw> <ol data-astro-cid-x3heieyw> <li data-astro-cid-x3heieyw><a href="/" data-astro-cid-x3heieyw>Inicio</a></li> <li data-astro-cid-x3heieyw><a href="/directorio" data-astro-cid-x3heieyw>Directorio</a></li> <li data-astro-cid-x3heieyw><a href="/directorio/veracruz" data-astro-cid-x3heieyw>Veracruz</a></li> <li aria-current="page" data-astro-cid-x3heieyw>', "</li> </ol> </nav> <!-- Alertas Contextuales --> ", ' <div class="ver-detail-hero__grid" data-astro-cid-x3heieyw> <div class="ver-detail-hero__content" data-astro-cid-x3heieyw> <!-- Badges Dinamicos --> <div class="ver-detail-badges" data-astro-cid-x3heieyw> <span class="ver-detail-badge ver-detail-badge--zone" data-astro-cid-x3heieyw>', "</span> ", " ", " ", " ", " ", " ", " ", " ", ' </div> <h1 class="ver-detail-hero__title" data-astro-cid-x3heieyw>', '</h1> <p class="ver-detail-hero__desc" data-astro-cid-x3heieyw>', '</p> <div class="ver-detail-hero__address" data-astro-cid-x3heieyw> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-x3heieyw> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-x3heieyw></path><circle cx="12" cy="10" r="3" data-astro-cid-x3heieyw></circle> </svg> <span data-astro-cid-x3heieyw>', '</span> </div> <div class="ver-detail-hero__meta" data-astro-cid-x3heieyw> <div class="ver-detail-hero__meta-item" data-astro-cid-x3heieyw> <span class="ver-detail-hero__meta-label" data-astro-cid-x3heieyw>Horario</span> <span class="ver-detail-hero__meta-value" data-astro-cid-x3heieyw>', "</span> </div> ", " ", " ", ' </div> </div> <!-- Emergency Card Enterprise --> <div class="ver-detail-emergency" data-astro-cid-x3heieyw> <div class="ver-detail-emergency__main" data-astro-cid-x3heieyw> <span class="ver-detail-emergency__label" data-astro-cid-x3heieyw>Emergencias</span> <a href="tel:911" class="ver-detail-emergency__911" data-astro-cid-x3heieyw>911</a> <span class="ver-detail-emergency__note" data-astro-cid-x3heieyw>Linea Nacional</span> </div> <div class="ver-detail-emergency__local" data-astro-cid-x3heieyw> <span class="ver-detail-emergency__local-label" data-astro-cid-x3heieyw>Linea Directa</span> <a', ' class="ver-detail-emergency__phone" data-astro-cid-x3heieyw> ', " </a> </div> ", " ", " ", ' <div class="ver-detail-emergency__actions" data-astro-cid-x3heieyw> <a', ' target="_blank" rel="noopener noreferrer" class="ver-detail-emergency__action ver-detail-emergency__action--directions" data-astro-cid-x3heieyw> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-x3heieyw> <polygon points="3 11 22 2 13 21 11 13 3 11" data-astro-cid-x3heieyw></polygon> </svg> <span data-astro-cid-x3heieyw>Como llegar</span> </a> ', ' </div> </div> </div> </div> </section>  <section class="ver-detail-services" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Capacidades</span> <h2 data-astro-cid-x3heieyw>Servicios Especializados</h2> </div> <div class="ver-detail-services__grid" data-astro-cid-x3heieyw> ', " </div> </div> </section>  ", " ", " ", " ", " ", ' <section class="ver-detail-coverage" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-coverage__grid" data-astro-cid-x3heieyw> <div class="ver-detail-coverage__info" data-astro-cid-x3heieyw> <div class="ver-detail-section-header ver-detail-section-header--left" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Cobertura</span> <h2 data-astro-cid-x3heieyw>Area de Servicio</h2> </div> <div class="ver-detail-coverage__zone"', " data-astro-cid-x3heieyw> <h3 data-astro-cid-x3heieyw>", '</h3> <p class="ver-detail-coverage__zone-short" data-astro-cid-x3heieyw>', "</p> <p data-astro-cid-x3heieyw>", '</p> <div class="ver-detail-coverage__zone-meta" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>Poblacion: ', "</span> <span", " data-astro-cid-x3heieyw>\nRiesgo: ", ' </span> </div> </div> <div class="ver-detail-coverage__municipalities" data-astro-cid-x3heieyw> <h4 data-astro-cid-x3heieyw>Zonas Cubiertas</h4> <ul data-astro-cid-x3heieyw> ', ' </ul> </div> </div> <div class="ver-detail-coverage__map" data-astro-cid-x3heieyw> <iframe', ' width="100%" height="350" style="border:0; border-radius: 16px;" allowfullscreen="" loading="lazy"', ' data-astro-cid-x3heieyw></iframe> <div class="ver-detail-map__coords" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>GPS:</span> <code data-astro-cid-x3heieyw>', ", ", "</code> </div> </div> </div> </div> </section>  ", " ", ' <section class="ver-detail-related" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>', "</span> <h2 data-astro-cid-x3heieyw>Otras Estaciones</h2> </div> ", ' <div class="ver-detail-related__all" data-astro-cid-x3heieyw> <a href="/directorio/veracruz" class="ver-detail-btn ver-detail-btn--outline" data-astro-cid-x3heieyw>\nVer todas las estaciones de Veracruz\n</a> </div> </div> </section>  <section class="ver-detail-cta" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-cta__content" data-astro-cid-x3heieyw> <h2 data-astro-cid-x3heieyw> ', " </h2> <p data-astro-cid-x3heieyw> ", ' </p> <a href="/cotizar" class="ver-detail-cta__btn" data-astro-cid-x3heieyw>\nSolicitar Cotizacion\n</a> </div> </div> </section> '])), unescapeHTML(JSON.stringify(schemaOrg)), maybeRenderHead(), addAttribute(`--zone-color: ${zonaInfo?.color || "#0ea5e9"}`, "style"), nombreCorto, alertaHuracan && esHuracanes && renderTemplate`<div class="ver-detail-alerts" data-astro-cid-x3heieyw> <div${addAttribute(`ver-detail-alert ver-detail-alert--${alertaHuracan.colorSemaforo}`, "class")} data-astro-cid-x3heieyw> <span class="ver-detail-alert__icon" data-astro-cid-x3heieyw>🌀</span> <span class="ver-detail-alert__text" data-astro-cid-x3heieyw>Temporada de Huracanes Activa (Jun-Nov) - Semaforo: ${alertaHuracan.colorSemaforo.toUpperCase()}</span> </div> </div>`, estacion.zona, esCentral && renderTemplate`<span class="ver-detail-badge ver-detail-badge--central" data-astro-cid-x3heieyw>Central</span>`, esHAZMAT && renderTemplate`<span class="ver-detail-badge ver-detail-badge--hazmat" data-astro-cid-x3heieyw>HAZMAT</span>`, esMaritimo && renderTemplate`<span class="ver-detail-badge ver-detail-badge--maritime" data-astro-cid-x3heieyw>Rescate Maritimo</span>`, esPEMEX && renderTemplate`<span class="ver-detail-badge ver-detail-badge--pemex" data-astro-cid-x3heieyw>PEMEX</span>`, esCoordinacionSEMAR && renderTemplate`<span class="ver-detail-badge ver-detail-badge--semar" data-astro-cid-x3heieyw>Coordinacion SEMAR</span>`, esPuerto && renderTemplate`<span class="ver-detail-badge ver-detail-badge--port" data-astro-cid-x3heieyw>Puerto</span>`, esHuracanes && renderTemplate`<span class="ver-detail-badge ver-detail-badge--hurricane" data-astro-cid-x3heieyw>Huracanes</span>`, esBilingue && renderTemplate`<span class="ver-detail-badge ver-detail-badge--bilingual" data-astro-cid-x3heieyw>Bilingue</span>`, estacion.nombre, estacion.descripcion, estacion.direccion, estacion.horario, estacion.personal && renderTemplate`<div class="ver-detail-hero__meta-item" data-astro-cid-x3heieyw> <span class="ver-detail-hero__meta-label" data-astro-cid-x3heieyw>Personal</span> <span class="ver-detail-hero__meta-value" data-astro-cid-x3heieyw>${estacion.personal} bomberos</span> </div>`, estacion.tiempoRespuesta && renderTemplate`<div class="ver-detail-hero__meta-item" data-astro-cid-x3heieyw> <span class="ver-detail-hero__meta-label" data-astro-cid-x3heieyw>Tiempo Respuesta</span> <span class="ver-detail-hero__meta-value" data-astro-cid-x3heieyw>${estacion.tiempoRespuesta}</span> </div>`, estacion.idiomas && renderTemplate`<div class="ver-detail-hero__meta-item" data-astro-cid-x3heieyw> <span class="ver-detail-hero__meta-label" data-astro-cid-x3heieyw>Idiomas</span> <span class="ver-detail-hero__meta-value" data-astro-cid-x3heieyw>${estacion.idiomas.join(", ")}</span> </div>`, addAttribute(`tel:${estacion.telefono.replace(/[^\d+]/g, "")}`, "href"), estacion.telefono, esHAZMAT && renderTemplate`<div class="ver-detail-emergency__hazmat" data-astro-cid-x3heieyw> <span class="ver-detail-emergency__hazmat-badge" data-astro-cid-x3heieyw>HAZMAT</span> <span data-astro-cid-x3heieyw>Emergencias petroleras 24/7</span> </div>`, esMaritimo && renderTemplate`<div class="ver-detail-emergency__maritime" data-astro-cid-x3heieyw> <span class="ver-detail-emergency__maritime-badge" data-astro-cid-x3heieyw>VHF 16</span> <span data-astro-cid-x3heieyw>Canal emergencias maritimas</span> </div>`, esBilingue && renderTemplate`<div class="ver-detail-emergency__bilingual" data-astro-cid-x3heieyw> <span class="ver-detail-emergency__bilingual-flag" data-astro-cid-x3heieyw>EN</span> <span data-astro-cid-x3heieyw>English coordination available</span> </div>`, addAttribute(`https://www.google.com/maps/dir/?api=1&destination=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href"), estacion.sitioWeb && renderTemplate`<a${addAttribute(estacion.sitioWeb, "href")} target="_blank" rel="noopener noreferrer" class="ver-detail-emergency__action" data-astro-cid-x3heieyw> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-x3heieyw> <circle cx="12" cy="12" r="10" data-astro-cid-x3heieyw></circle><line x1="2" y1="12" x2="22" y2="12" data-astro-cid-x3heieyw></line> </svg> <span data-astro-cid-x3heieyw>Sitio Web</span> </a>`, estacion.servicios?.map((servicio, index) => {
    const esHazmatServ = servicio.toLowerCase().includes("hazmat");
    const esMaritServ = servicio.toLowerCase().includes("mar\xEDtimo") || servicio.toLowerCase().includes("maritimo") || servicio.toLowerCase().includes("buque");
    const esPuertoServ = servicio.toLowerCase().includes("portuario") || servicio.toLowerCase().includes("puerto");
    const esMedico = servicio.toLowerCase().includes("hospitalaria");
    const esForestal = servicio.toLowerCase().includes("forestal");
    const esInundacion = servicio.toLowerCase().includes("inundacion");
    return renderTemplate`<div${addAttribute(`ver-detail-service ${esHazmatServ ? "ver-detail-service--hazmat" : ""} ${esMaritServ ? "ver-detail-service--maritime" : ""} ${esPuertoServ ? "ver-detail-service--port" : ""} ${esMedico ? "ver-detail-service--medical" : ""} ${esForestal ? "ver-detail-service--forest" : ""} ${esInundacion ? "ver-detail-service--flood" : ""}`, "class")} data-astro-cid-x3heieyw> <div class="ver-detail-service__icon" data-astro-cid-x3heieyw> ${esHazmatServ && "\u2622\uFE0F"} ${esMaritServ && "\u2693"} ${esPuertoServ && "\u{1F6A2}"} ${esMedico && "\u{1F3E5}"} ${esForestal && "\u{1F332}"} ${esInundacion && "\u{1F30A}"} ${!esHazmatServ && !esMaritServ && !esPuertoServ && !esMedico && !esForestal && !esInundacion && "\u{1F525}"} </div> <span class="ver-detail-service__name" data-astro-cid-x3heieyw>${servicio}</span> <span class="ver-detail-service__number" data-astro-cid-x3heieyw>${String(index + 1).padStart(2, "0")}</span> </div>`;
  }), estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<section class="ver-detail-equipment" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Flota y Equipo</span> <h2 data-astro-cid-x3heieyw>Equipamiento</h2> </div> <div class="ver-detail-equipment__grid" data-astro-cid-x3heieyw> ${estacion.equipamiento.map((equipo) => {
    const esVehiculo = equipo.toLowerCase().includes("autobomba") || equipo.toLowerCase().includes("unidad") || equipo.toLowerCase().includes("ambulancia") || equipo.toLowerCase().includes("escalera");
    const esHazmatEq = equipo.toLowerCase().includes("hazmat") || equipo.toLowerCase().includes("encapsulado") || equipo.toLowerCase().includes("espuma");
    const esMaritEq = equipo.toLowerCase().includes("lancha") || equipo.toLowerCase().includes("buceo") || equipo.toLowerCase().includes("maritimo");
    const esPuertoEq = equipo.toLowerCase().includes("remolcador") || equipo.toLowerCase().includes("marina");
    return renderTemplate`<div${addAttribute(`ver-detail-equipment__item ${esVehiculo ? "ver-detail-equipment__item--vehicle" : ""} ${esHazmatEq ? "ver-detail-equipment__item--hazmat" : ""} ${esMaritEq ? "ver-detail-equipment__item--maritime" : ""} ${esPuertoEq ? "ver-detail-equipment__item--port" : ""}`, "class")} data-astro-cid-x3heieyw> <span class="ver-detail-equipment__icon" data-astro-cid-x3heieyw> ${esVehiculo && !esHazmatEq && "\u{1F692}"} ${esHazmatEq && "\u2622\uFE0F"} ${esMaritEq && "\u{1F6A4}"} ${esPuertoEq && "\u{1F6A2}"} ${!esVehiculo && !esHazmatEq && !esMaritEq && !esPuertoEq && "\u{1F527}"} </span> <span class="ver-detail-equipment__name" data-astro-cid-x3heieyw>${equipo}</span> </div>`;
  })} </div> </div> </section>`, protocolosRelevantes.length > 0 && renderTemplate`<section class="ver-detail-protocols" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Documentacion</span> <h2 data-astro-cid-x3heieyw>Protocolos de Emergencia</h2> </div> <div class="ver-detail-protocols__grid" data-astro-cid-x3heieyw> ${protocolosRelevantes.map((proto) => renderTemplate`<div class="ver-detail-protocol-card" data-astro-cid-x3heieyw> <div class="ver-detail-protocol-card__header" data-astro-cid-x3heieyw> <span class="ver-detail-protocol-card__code" data-astro-cid-x3heieyw>${proto.codigo}</span> <span class="ver-detail-protocol-card__time" data-astro-cid-x3heieyw>⏱️ ${proto.tiempoMaximoRespuesta}</span> </div> <h3 data-astro-cid-x3heieyw>${proto.tipo}</h3> <p data-astro-cid-x3heieyw>${proto.descripcion}</p> <div class="ver-detail-protocol-card__resources" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>Recursos:</span> <ul data-astro-cid-x3heieyw> ${proto.recursosMinimos.slice(0, 3).map((r) => renderTemplate`<li data-astro-cid-x3heieyw>${r}</li>`)} </ul> </div> </div>`)} </div> </div> </section>`, (esHAZMAT || esPEMEX) && instalacionesPEMEX.length > 0 && renderTemplate`<section class="ver-detail-pemex" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Cobertura Industrial</span> <h2 data-astro-cid-x3heieyw>Instalaciones PEMEX</h2> </div> <div class="ver-detail-pemex__grid" data-astro-cid-x3heieyw> ${instalacionesPEMEX.map((inst) => renderTemplate`<div class="ver-detail-pemex-card" data-astro-cid-x3heieyw> <div class="ver-detail-pemex-card__header" data-astro-cid-x3heieyw> <span${addAttribute(`ver-detail-pemex-card__risk ver-detail-pemex-card__risk--${inst.clasificacionRiesgo.toLowerCase()}`, "class")} data-astro-cid-x3heieyw>
Riesgo ${inst.clasificacionRiesgo} </span> <span class="ver-detail-pemex-card__type" data-astro-cid-x3heieyw>${inst.tipo}</span> </div> <h3 data-astro-cid-x3heieyw>${inst.nombre}</h3> <p class="ver-detail-pemex-card__location" data-astro-cid-x3heieyw>${inst.ubicacion}</p> <div class="ver-detail-pemex-card__stats" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw><strong data-astro-cid-x3heieyw>${inst.empleados.toLocaleString()}</strong> empleados</span> <span data-astro-cid-x3heieyw><strong data-astro-cid-x3heieyw>${inst.capacidad}</strong></span> </div> <div class="ver-detail-pemex-card__hazmat" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>Riesgos HAZMAT:</span> <div class="ver-detail-pemex-card__hazmat-tags" data-astro-cid-x3heieyw> ${inst.riesgosHAZMAT.slice(0, 4).map((r) => renderTemplate`<span data-astro-cid-x3heieyw>${r}</span>`)} </div> </div> <div class="ver-detail-pemex-card__response" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>⏱️ Respuesta: ${inst.tiempoRespuestaBomberos}</span> </div> </div>`)} </div> </div> </section>`, (esMaritimo || esPuerto) && puertos.length > 0 && renderTemplate`<section class="ver-detail-ports" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Cobertura Portuaria</span> <h2 data-astro-cid-x3heieyw>Puertos Atendidos</h2> </div> <div class="ver-detail-ports__grid" data-astro-cid-x3heieyw> ${puertos.map((puerto) => renderTemplate`<div class="ver-detail-port-card" data-astro-cid-x3heieyw> <div class="ver-detail-port-card__header" data-astro-cid-x3heieyw> <span class="ver-detail-port-card__type" data-astro-cid-x3heieyw>${puerto.tipo}</span> ${puerto.coordinacionSEMAR && renderTemplate`<span class="ver-detail-port-card__semar" data-astro-cid-x3heieyw>SEMAR</span>`} </div> <h3 data-astro-cid-x3heieyw>${puerto.nombre}</h3> <p class="ver-detail-port-card__traffic" data-astro-cid-x3heieyw>${puerto.traficoAnual}</p> <div class="ver-detail-port-card__risks" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>Riesgos:</span> <ul data-astro-cid-x3heieyw> ${puerto.riesgosMaritimos.slice(0, 3).map((r) => renderTemplate`<li data-astro-cid-x3heieyw>${r}</li>`)} </ul> </div> <div class="ver-detail-port-card__services" data-astro-cid-x3heieyw> <span data-astro-cid-x3heieyw>Servicios disponibles:</span> <div class="ver-detail-port-card__services-tags" data-astro-cid-x3heieyw> ${puerto.serviciosEmergencia.slice(0, 3).map((s) => renderTemplate`<span data-astro-cid-x3heieyw>${s}</span>`)} </div> </div> </div>`)} </div> </div> </section>`, esHuracanes && renderTemplate`<section class="ver-detail-hurricane" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Temporada Jun-Nov</span> <h2 data-astro-cid-x3heieyw>Protocolos Huracanes</h2> </div> <div class="ver-detail-hurricane__info" data-astro-cid-x3heieyw> <div class="ver-detail-hurricane__stat" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__stat-value" data-astro-cid-x3heieyw>745 km</span> <span class="ver-detail-hurricane__stat-label" data-astro-cid-x3heieyw>Costa Expuesta</span> </div> <div class="ver-detail-hurricane__stat" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__stat-value" data-astro-cid-x3heieyw>${SISTEMA_HURACANES_VERACRUZ.recursosTotales.embarcaciones}</span> <span class="ver-detail-hurricane__stat-label" data-astro-cid-x3heieyw>Embarcaciones Rescate</span> </div> <div class="ver-detail-hurricane__stat" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__stat-value" data-astro-cid-x3heieyw>${SISTEMA_HURACANES_VERACRUZ.recursosTotales.refugios}</span> <span class="ver-detail-hurricane__stat-label" data-astro-cid-x3heieyw>Refugios Disponibles</span> </div> <div class="ver-detail-hurricane__stat" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__stat-value" data-astro-cid-x3heieyw>${SISTEMA_HURACANES_VERACRUZ.recursosTotales.capacidadRefugios.toLocaleString()}</span> <span class="ver-detail-hurricane__stat-label" data-astro-cid-x3heieyw>Capacidad Refugios</span> </div> </div> <div class="ver-detail-hurricane__levels" data-astro-cid-x3heieyw> <h3 data-astro-cid-x3heieyw>Niveles de Alerta</h3> <div class="ver-detail-hurricane__levels-grid" data-astro-cid-x3heieyw> <div class="ver-detail-hurricane__level ver-detail-hurricane__level--verde" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__level-color" data-astro-cid-x3heieyw>VERDE</span> <span class="ver-detail-hurricane__level-name" data-astro-cid-x3heieyw>Vigilancia</span> </div> <div class="ver-detail-hurricane__level ver-detail-hurricane__level--amarillo" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__level-color" data-astro-cid-x3heieyw>AMARILLO</span> <span class="ver-detail-hurricane__level-name" data-astro-cid-x3heieyw>Alerta 72h</span> </div> <div class="ver-detail-hurricane__level ver-detail-hurricane__level--naranja" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__level-color" data-astro-cid-x3heieyw>NARANJA</span> <span class="ver-detail-hurricane__level-name" data-astro-cid-x3heieyw>Emergencia 48h</span> </div> <div class="ver-detail-hurricane__level ver-detail-hurricane__level--rojo" data-astro-cid-x3heieyw> <span class="ver-detail-hurricane__level-color" data-astro-cid-x3heieyw>ROJO</span> <span class="ver-detail-hurricane__level-name" data-astro-cid-x3heieyw>Impacto</span> </div> </div> </div> </div> </section>`, addAttribute(`border-color: ${zonaInfo?.color || "#0ea5e9"}`, "style"), zonaInfo?.nombre || estacion.zona, zonaInfo?.nombreCorto, zonaInfo?.descripcion, zonaInfo?.poblacion?.toLocaleString(), addAttribute(`ver-detail-coverage__risk ver-detail-coverage__risk--${zonaInfo?.nivelRiesgo?.toLowerCase().replace(/\s+/g, "-")}`, "class"), zonaInfo?.nivelRiesgo, estacion.municipiosCubiertos?.map((m) => renderTemplate`<li data-astro-cid-x3heieyw>${m}</li>`), addAttribute(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5000!2d${estacion.coordenadas.lng}!3d${estacion.coordenadas.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2smx!4v1`, "src"), addAttribute(`Mapa - ${estacion.nombre}`, "title"), estacion.coordenadas.lat.toFixed(4), estacion.coordenadas.lng.toFixed(4), estacion.caracteristicasEspeciales && estacion.caracteristicasEspeciales.length > 0 && renderTemplate`<section class="ver-detail-features" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>Distintivos</span> <h2 data-astro-cid-x3heieyw>Caracteristicas Especiales</h2> </div> <div class="ver-detail-features__grid" data-astro-cid-x3heieyw> ${estacion.caracteristicasEspeciales.map((c) => renderTemplate`<div class="ver-detail-feature" data-astro-cid-x3heieyw> <span class="ver-detail-feature__icon" data-astro-cid-x3heieyw> ${c.toLowerCase().includes("hazmat") && "\u2622\uFE0F"} ${c.toLowerCase().includes("pemex") && "\u{1F6E2}\uFE0F"} ${c.toLowerCase().includes("refiner\xEDa") && "\u{1F3ED}"} ${c.toLowerCase().includes("petroqu\xEDmic") && "\u{1F3ED}"} ${c.toLowerCase().includes("puerto") && "\u{1F6A2}"} ${c.toLowerCase().includes("semar") && "\u2693"} ${c.toLowerCase().includes("mar\xEDtimo") && "\u{1F30A}"} ${c.toLowerCase().includes("taj\xEDn") && "\u{1F3DB}\uFE0F"} ${c.toLowerCase().includes("unesco") && "\u{1F3DB}\uFE0F"} ${c.toLowerCase().includes("inundab") && "\u{1F4A7}"} ${c.toLowerCase().includes("hurac\xE1n") && "\u{1F300}"} ${c.toLowerCase().includes("central") && "\u{1F3DB}\uFE0F"} ${c.toLowerCase().includes("biling\xFCe") && "\u{1F310}"} ${c.toLowerCase().includes("carnaval") && "\u{1F3AD}"} ${!c.toLowerCase().includes("hazmat") && !c.toLowerCase().includes("pemex") && !c.toLowerCase().includes("refiner\xEDa") && !c.toLowerCase().includes("petroqu\xEDmic") && !c.toLowerCase().includes("puerto") && !c.toLowerCase().includes("semar") && !c.toLowerCase().includes("mar\xEDtimo") && !c.toLowerCase().includes("taj\xEDn") && !c.toLowerCase().includes("unesco") && !c.toLowerCase().includes("inundab") && !c.toLowerCase().includes("hurac\xE1n") && !c.toLowerCase().includes("central") && !c.toLowerCase().includes("biling\xFCe") && !c.toLowerCase().includes("carnaval") && "\u2B50"} </span> <span class="ver-detail-feature__text" data-astro-cid-x3heieyw>${c}</span> </div>`)} </div> </div> </section>`, faqRelevantes.length > 0 && renderTemplate`<section class="ver-detail-faq" data-astro-cid-x3heieyw> <div class="container" data-astro-cid-x3heieyw> <div class="ver-detail-section-header" data-astro-cid-x3heieyw> <span class="ver-detail-section-label" data-astro-cid-x3heieyw>FAQ</span> <h2 data-astro-cid-x3heieyw>Preguntas Frecuentes</h2> </div> <div class="ver-detail-faq__grid" data-astro-cid-x3heieyw> ${faqRelevantes.map((faq, index) => renderTemplate`<details class="ver-detail-faq__item"${addAttribute(index === 0, "open")} data-astro-cid-x3heieyw> <summary data-astro-cid-x3heieyw> <span class="ver-detail-faq__category" data-astro-cid-x3heieyw>${faq.categoria}</span> <span class="ver-detail-faq__question" data-astro-cid-x3heieyw>${faq.pregunta}</span> </summary> <div class="ver-detail-faq__answer" data-astro-cid-x3heieyw> <p data-astro-cid-x3heieyw>${faq.respuesta}</p> </div> </details>`)} </div> </div> </section>`, estacion.zona, estacionesZona.length > 0 ? renderTemplate`<div class="ver-detail-related__grid" data-astro-cid-x3heieyw> ${estacionesZona.slice(0, 3).map((e) => renderTemplate`<a${addAttribute(`/directorio/veracruz/${e.slug}`, "href")} class="ver-detail-related__card" data-astro-cid-x3heieyw> <div class="ver-detail-related__badges" data-astro-cid-x3heieyw> ${e.nombre.toLowerCase().includes("hazmat") && renderTemplate`<span class="ver-detail-related__badge ver-detail-related__badge--hazmat" data-astro-cid-x3heieyw>HAZMAT</span>`} ${e.servicios?.some((s) => s.toLowerCase().includes("mar\xEDtimo")) && renderTemplate`<span class="ver-detail-related__badge ver-detail-related__badge--maritime" data-astro-cid-x3heieyw>Maritimo</span>`} ${e.idiomas?.includes("Ingl\xE9s") && renderTemplate`<span class="ver-detail-related__badge ver-detail-related__badge--en" data-astro-cid-x3heieyw>EN</span>`} </div> <h3 data-astro-cid-x3heieyw>${e.nombre.replace("Estacion de Bomberos ", "").replace("Estacion Central de Bomberos ", "").replace("Estacion HAZMAT ", "")}</h3> <p data-astro-cid-x3heieyw>${e.direccion}</p> <div class="ver-detail-related__meta" data-astro-cid-x3heieyw> <span class="ver-detail-related__phone" data-astro-cid-x3heieyw>${e.telefono}</span> </div> </a>`)} </div>` : renderTemplate`<p class="ver-detail-related__empty" data-astro-cid-x3heieyw>Unica estacion en ${estacion.zona}</p>`, esHAZMAT ? "Necesitas Equipo HAZMAT Petrolero?" : esMaritimo ? "Equipo de Rescate Maritimo?" : esHuracanes ? "Preparacion para Temporada de Huracanes?" : "Necesitas Equipamiento Profesional?", esHAZMAT ? "Trajes encapsulados Nivel A, detectores multigas, sistemas AFFF para refineria y petroquimica" : esMaritimo ? "Lanchas de rescate, equipo de buceo, trajes de inmersion para operaciones portuarias" : esHuracanes ? "Embarcaciones rescate aguas rapidas, equipos de evacuacion, generadores y bombas" : "Equipo profesional para bomberos y brigadas de emergencia"), "head": ($$result2) => renderTemplate`<meta name="geo.region" content="MX-VER"><meta name="geo.position"${addAttribute(`${estacion.coordenadas.lat};${estacion.coordenadas.lng}`, "content")}>` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/veracruz/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/veracruz/[slug].astro";
const $$url = "/directorio/veracruz/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
