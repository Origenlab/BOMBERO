import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as generarMetaSEO, a as getContextoZona, e as estacionesJalisco, J as JALISCO_SEO } from '../../../chunks/estaciones-jalisco_kyNMw6MV.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesJalisco.map((estacion) => ({
    params: { slug: estacion.slug },
    props: { estacion }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { estacion } = Astro2.props;
  const metaSEO = generarMetaSEO(estacion);
  const contextoZona = estacion.zona ? getContextoZona(estacion.zona) : null;
  const stationSchema = {
    "@context": "https://schema.org",
    "@type": "FireStation",
    "name": estacion.nombre,
    "description": `Estaci\xF3n de bomberos en ${estacion.ciudad}, Jalisco. ${estacion.servicios.slice(0, 3).join(", ")}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": estacion.direccion,
      "addressLocality": estacion.ciudad,
      "addressRegion": "Jalisco",
      "postalCode": estacion.cp,
      "addressCountry": "MX"
    },
    "telephone": estacion.telefono,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": estacion.coordenadas ? {
      "@type": "GeoCoordinates",
      "latitude": estacion.coordenadas.lat,
      "longitude": estacion.coordenadas.lng
    } : void 0,
    "areaServed": estacion.cobertura?.map((area) => ({
      "@type": "City",
      "name": area
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://bomberosmexico.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Directorio",
        "item": "https://bomberosmexico.com/directorio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Jalisco",
        "item": "https://bomberosmexico.com/directorio/jalisco"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": estacion.nombre,
        "item": `https://bomberosmexico.com/directorio/jalisco/${estacion.slug}`
      }
    ]
  };
  const esZMG = estacion.zona?.includes("Guadalajara");
  const esVallarta = estacion.zona?.includes("Vallarta");
  const esTequila = estacion.zona?.includes("Tequila");
  const esChapala = estacion.zona?.includes("Chapala");
  const esAeropuerto = estacion.slug.includes("aeropuerto");
  const esZonaSur = estacion.zona === "Zona Sur";
  estacion.zona?.includes("Industrial") || estacion.zona?.includes("Altos");
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": metaSEO.title, "description": metaSEO.description, "data-astro-cid-hqp77vwo": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> ", '<div class="station-page" data-astro-cid-hqp77vwo> <!-- Hero --> <section class="station-hero" data-astro-cid-hqp77vwo> <div class="hero-overlay" data-astro-cid-hqp77vwo></div> <div class="hero-content" data-astro-cid-hqp77vwo> <nav class="breadcrumb" data-astro-cid-hqp77vwo> <a href="/" data-astro-cid-hqp77vwo>Inicio</a> <span data-astro-cid-hqp77vwo>/</span> <a href="/directorio" data-astro-cid-hqp77vwo>Directorio</a> <span data-astro-cid-hqp77vwo>/</span> <a href="/directorio/jalisco" data-astro-cid-hqp77vwo>Jalisco</a> <span data-astro-cid-hqp77vwo>/</span> <span class="current" data-astro-cid-hqp77vwo>', '</span> </nav> <div class="hero-badges" data-astro-cid-hqp77vwo> ', " ", " </div> <h1 data-astro-cid-hqp77vwo>", '</h1> <p class="hero-location" data-astro-cid-hqp77vwo> <span class="icon" data-astro-cid-hqp77vwo>\u{1F4CD}</span> ', ", ", ", Jalisco C.P. ", ' </p> <div class="hero-phones" data-astro-cid-hqp77vwo> <a', ' class="phone-main" data-astro-cid-hqp77vwo> <span class="phone-icon" data-astro-cid-hqp77vwo>\u{1F4DE}</span> <span class="phone-number" data-astro-cid-hqp77vwo>', "</span> </a> ", ' </div> <div class="hero-status" data-astro-cid-hqp77vwo> <span class="status-badge open" data-astro-cid-hqp77vwo> <span class="pulse" data-astro-cid-hqp77vwo></span>\nAbierto 24 horas\n</span> ', " </div> </div> </section> <!-- Alerta contextual --> ", " ", " ", " ", " ", " ", ' <!-- Main Content --> <div class="main-container" data-astro-cid-hqp77vwo> <div class="content-grid" data-astro-cid-hqp77vwo> <main class="station-main" data-astro-cid-hqp77vwo> <!-- Servicios --> <section class="info-card services" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>\u{1F692} Servicios de Emergencia</h2> <ul class="services-list" data-astro-cid-hqp77vwo> ', " </ul> </section> <!-- Especialidades --> ", " <!-- Cobertura --> ", " <!-- Historia --> ", " <!-- Contexto de Zona --> ", " <!-- Contenido especial por tipo --> ", " ", " ", " ", " ", " ", ' </main> <!-- Sidebar --> <aside class="station-sidebar" data-astro-cid-hqp77vwo> <!-- Contacto --> <div class="sidebar-card contact-card" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>\u{1F4DE} Contacto de Emergencia</h3> <a', ' class="contact-phone main" data-astro-cid-hqp77vwo> <span class="phone-icon" data-astro-cid-hqp77vwo>\u{1F692}</span> <span class="phone-info" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>', "</strong> <small data-astro-cid-hqp77vwo>L\xEDnea principal</small> </span> </a> ", ' <a href="tel:911" class="contact-phone emergency" data-astro-cid-hqp77vwo> <span class="phone-icon" data-astro-cid-hqp77vwo>\u{1F198}</span> <span class="phone-info" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>911</strong> <small data-astro-cid-hqp77vwo>Emergencias Nacional</small> </span> </a> </div> <!-- Ubicaci\xF3n --> <div class="sidebar-card location-card" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>\u{1F4CD} Ubicaci\xF3n</h3> <address data-astro-cid-hqp77vwo> ', "<br data-astro-cid-hqp77vwo> ", ", Jalisco<br data-astro-cid-hqp77vwo>\nC.P. ", " </address> ", ' </div> <!-- Horario --> <div class="sidebar-card hours-card" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>\u{1F550} Horario de Servicio</h3> <div class="hours-status" data-astro-cid-hqp77vwo> <span class="status-dot" data-astro-cid-hqp77vwo></span> <span class="status-text" data-astro-cid-hqp77vwo>Operativo 24/7</span> </div> <p class="hours-detail" data-astro-cid-hqp77vwo>', "</p> ", " </div> <!-- Comandancia --> ", ' <!-- Jalisco Info --> <div class="sidebar-card state-card" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>\u{1F535} Jalisco</h3> <ul class="state-info" data-astro-cid-hqp77vwo> <li data-astro-cid-hqp77vwo><strong data-astro-cid-hqp77vwo>Capital:</strong> Guadalajara</li> <li data-astro-cid-hqp77vwo><strong data-astro-cid-hqp77vwo>Poblaci\xF3n:</strong> ', "</li> <li data-astro-cid-hqp77vwo><strong data-astro-cid-hqp77vwo>ZMG:</strong> ", " hab.</li> <li data-astro-cid-hqp77vwo><strong data-astro-cid-hqp77vwo>Municipios:</strong> ", '</li> </ul> <a href="/directorio/jalisco" class="back-link" data-astro-cid-hqp77vwo>\n\u2190 Ver todas las estaciones de Jalisco\n</a> </div> </aside> </div> </div> </div> '])), unescapeHTML(JSON.stringify(stationSchema)), unescapeHTML(JSON.stringify(breadcrumbSchema)), maybeRenderHead(), estacion.ciudad, estacion.zona && renderTemplate`<span class="badge zone" data-astro-cid-hqp77vwo>${estacion.zona}</span>`, estacion.especialidades?.map((esp) => renderTemplate`<span class="badge specialty"${addAttribute(esp.toLowerCase().includes("hazmat") ? "hazmat" : esp.toLowerCase().includes("arff") ? "arff" : esp.toLowerCase().includes("acu\xE1tico") ? "aquatic" : esp.toLowerCase().includes("volc\xE1n") ? "volcanic" : "default", "data-type")} data-astro-cid-hqp77vwo> ${esp} </span>`), estacion.nombre, estacion.direccion, estacion.ciudad, estacion.cp, addAttribute(`tel:${estacion.telefono.replace(/\D/g, "")}`, "href"), estacion.telefono, estacion.telefono2 && renderTemplate`<a${addAttribute(`tel:${estacion.telefono2.replace(/\D/g, "")}`, "href")} class="phone-secondary" data-astro-cid-hqp77vwo> ${estacion.telefono2} </a>`, estacion.tiempoRespuesta && renderTemplate`<span class="response-time" data-astro-cid-hqp77vwo>
⚡ Respuesta: ${estacion.tiempoRespuesta} </span>`, esZMG && renderTemplate`<div class="context-alert zmg" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>🏙️</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Zona Metropolitana de Guadalajara</strong> <span data-astro-cid-hqp77vwo>Segunda metrópoli más grande de México con más de 5.2 millones de habitantes. Centro económico, industrial y tecnológico del Occidente del país.</span> </div> </div>`, esVallarta && renderTemplate`<div class="context-alert vallarta" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>🏖️</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Puerto Vallarta - Destino Turístico Internacional</strong> <span data-astro-cid-hqp77vwo>Más de 7 millones de visitantes anuales. Especialización en rescate acuático, emergencias hoteleras y protocolos de temporada de huracanes.</span> </div> </div>`, esTequila && renderTemplate`<div class="context-alert tequila" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>🌵</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Paisaje Agavero - Patrimonio UNESCO</strong> <span data-astro-cid-hqp77vwo>Región productora de tequila con destilerías históricas. Especialización en incendios con alto contenido de alcohol y protección del patrimonio.</span> </div> </div>`, esChapala && renderTemplate`<div class="context-alert chapala" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>🚣</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Lago de Chapala - Mayor Lago Natural de México</strong> <span data-astro-cid-hqp77vwo>Hogar de la mayor comunidad de jubilados estadounidenses y canadienses fuera de sus países. Rescate acuático lacustre especializado.</span> </div> </div>`, esAeropuerto && renderTemplate`<div class="context-alert arff" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>✈️</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Servicios de Emergencia Aeroportuaria ARFF</strong> <span data-astro-cid-hqp77vwo>Unidad especializada en rescate y extinción de incendios aeronáuticos con certificación internacional y simulacros periódicos.</span> </div> </div>`, esZonaSur && renderTemplate`<div class="context-alert volcanic" data-astro-cid-hqp77vwo> <span class="alert-icon" data-astro-cid-hqp77vwo>🌋</span> <div class="alert-text" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>Zona de Influencia Volcán de Colima</strong> <span data-astro-cid-hqp77vwo>Uno de los volcanes más activos de México. Estación con protocolos especiales de evacuación, monitoreo sísmico y emergencias volcánicas.</span> </div> </div>`, estacion.servicios.map((servicio) => renderTemplate`<li data-astro-cid-hqp77vwo> <span class="service-icon" data-astro-cid-hqp77vwo>✓</span> ${servicio} </li>`), estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<section class="info-card specialties-section" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🎯 Especialidades</h2> <div class="specialties-grid" data-astro-cid-hqp77vwo> ${estacion.especialidades.map((esp) => renderTemplate`<div class="specialty-card"${addAttribute(esp.toLowerCase().includes("hazmat") ? "hazmat" : esp.toLowerCase().includes("arff") ? "arff" : esp.toLowerCase().includes("acu\xE1tico") ? "aquatic" : esp.toLowerCase().includes("volc\xE1n") || esp.toLowerCase().includes("sism") ? "volcanic" : "default", "data-type")} data-astro-cid-hqp77vwo> <span class="specialty-icon" data-astro-cid-hqp77vwo> ${esp.toLowerCase().includes("hazmat") ? "\u2623\uFE0F" : esp.toLowerCase().includes("arff") ? "\u2708\uFE0F" : esp.toLowerCase().includes("acu\xE1tico") || esp.toLowerCase().includes("n\xE1utico") ? "\u{1F30A}" : esp.toLowerCase().includes("volc\xE1n") || esp.toLowerCase().includes("sism") ? "\u{1F30B}" : esp.toLowerCase().includes("forestal") ? "\u{1F332}" : esp.toLowerCase().includes("rescate") ? "\u26D1\uFE0F" : esp.toLowerCase().includes("urbano") ? "\u{1F3E2}" : esp.toLowerCase().includes("vehicular") || esp.toLowerCase().includes("carretero") ? "\u{1F697}" : esp.toLowerCase().includes("peregrin") || esp.toLowerCase().includes("masivo") ? "\u{1F465}" : esp.toLowerCase().includes("tur\xEDstic") ? "\u{1F3E8}" : esp.toLowerCase().includes("patrimoni") ? "\u{1F3DB}\uFE0F" : "\u{1F527}"} </span> <span class="specialty-name" data-astro-cid-hqp77vwo>${esp}</span> </div>`)} </div> </section>`, estacion.cobertura && estacion.cobertura.length > 0 && renderTemplate`<section class="info-card coverage" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🗺️ Área de Cobertura</h2> <div class="coverage-tags" data-astro-cid-hqp77vwo> ${estacion.cobertura.map((area) => renderTemplate`<span class="coverage-tag" data-astro-cid-hqp77vwo>${area}</span>`)} </div> </section>`, estacion.historia && renderTemplate`<section class="info-card history" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>📜 Historia</h2> <p data-astro-cid-hqp77vwo>${estacion.historia}</p> </section>`, contextoZona && renderTemplate`<section class="info-card zone-context" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>📍 Contexto Regional: ${estacion.zona}</h2> <p class="zone-description" data-astro-cid-hqp77vwo>${contextoZona.descripcion}</p> <div class="zone-details" data-astro-cid-hqp77vwo> <div class="zone-risks" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>⚠️ Riesgos Principales</h3> <ul data-astro-cid-hqp77vwo> ${contextoZona.riesgos.map((riesgo) => renderTemplate`<li data-astro-cid-hqp77vwo>${riesgo}</li>`)} </ul> </div> <div class="zone-features" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>🏛️ Características</h3> <ul data-astro-cid-hqp77vwo> ${contextoZona.caracteristicas.map((caract) => renderTemplate`<li data-astro-cid-hqp77vwo>${caract}</li>`)} </ul> </div> </div> </section>`, estacion.slug === "estacion-central-guadalajara" && renderTemplate`<section class="info-card special-content" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🏛️ Cuerpo de Bomberos de Guadalajara</h2> <p data-astro-cid-hqp77vwo>
Fundado en <strong data-astro-cid-hqp77vwo>1873</strong>, el Cuerpo de Bomberos de Guadalajara es una de las
                corporaciones bomberiles más antiguas y prestigiosas de México. La Estación Central
                coordina todas las operaciones de la capital jalisciense y sirve como centro de
                capacitación para nuevos elementos.
</p> <div class="special-facts" data-astro-cid-hqp77vwo> <div class="fact" data-astro-cid-hqp77vwo> <span class="fact-number" data-astro-cid-hqp77vwo>151+</span> <span class="fact-label" data-astro-cid-hqp77vwo>Años de servicio</span> </div> <div class="fact" data-astro-cid-hqp77vwo> <span class="fact-number" data-astro-cid-hqp77vwo>1.5M</span> <span class="fact-label" data-astro-cid-hqp77vwo>Habitantes GDL</span> </div> <div class="fact" data-astro-cid-hqp77vwo> <span class="fact-number" data-astro-cid-hqp77vwo>HAZMAT III</span> <span class="fact-label" data-astro-cid-hqp77vwo>Certificación</span> </div> </div> </section>`, estacion.slug === "estacion-central-puerto-vallarta" && renderTemplate`<section class="info-card special-content vallarta-special" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🏖️ Bomberos de Puerto Vallarta</h2> <p data-astro-cid-hqp77vwo>
Puerto Vallarta recibe más de <strong data-astro-cid-hqp77vwo>7 millones de visitantes</strong> anualmente,
                incluyendo turismo nacional e internacional. Los bomberos de Vallarta cuentan con
                personal bilingüe y especialización en emergencias turísticas, rescate acuático
                oceánico y protocolos de temporada de huracanes (junio-noviembre).
</p> <div class="vallarta-services" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>Servicios Especializados</h3> <ul data-astro-cid-hqp77vwo> <li data-astro-cid-hqp77vwo>🏊 Rescate acuático en playas y mar abierto</li> <li data-astro-cid-hqp77vwo>🏨 Emergencias en zona hotelera</li> <li data-astro-cid-hqp77vwo>🚢 Incidentes náuticos y marina</li> <li data-astro-cid-hqp77vwo>🌀 Protocolo huracanes activo</li> <li data-astro-cid-hqp77vwo>🗣️ Atención bilingüe español/inglés</li> </ul> </div> </section>`, estacion.slug === "estacion-bomberos-tequila" && renderTemplate`<section class="info-card special-content tequila-special" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🥃 Bomberos en la Cuna del Tequila</h2> <p data-astro-cid-hqp77vwo>
La zona de Tequila es <strong data-astro-cid-hqp77vwo>Patrimonio de la Humanidad por la UNESCO</strong> desde 2006.
                Los bomberos de esta región están especializados en incendios en destilerías y emergencias
                con alto contenido de alcohol, que requieren técnicas especiales de extinción debido
                a la naturaleza inflamable de los destilados.
</p> <div class="tequila-info" data-astro-cid-hqp77vwo> <div class="unesco-badge" data-astro-cid-hqp77vwo> <span class="unesco-icon" data-astro-cid-hqp77vwo>🏛️</span> <span data-astro-cid-hqp77vwo>Patrimonio UNESCO 2006</span> </div> <p class="tequila-note" data-astro-cid-hqp77vwo>
Las destilerías históricas de José Cuervo, Sauza y otras casas tequileras
                  requieren protocolos especiales de protección contra incendios.
</p> </div> </section>`, esChapala && renderTemplate`<section class="info-card special-content chapala-special" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🚣 Emergencias en el Lago de Chapala</h2> <p data-astro-cid-hqp77vwo>
El Lago de Chapala es el <strong data-astro-cid-hqp77vwo>lago natural más grande de México</strong> y hogar
                de la mayor comunidad de jubilados estadounidenses y canadienses fuera de sus países.
                Las estaciones de la ribera cuentan con equipos de rescate acuático lacustre y
                personal capacitado para atender a residentes internacionales.
</p> <div class="chapala-stats" data-astro-cid-hqp77vwo> <div class="chapala-stat" data-astro-cid-hqp77vwo> <span class="stat-icon" data-astro-cid-hqp77vwo>🌊</span> <span class="stat-text" data-astro-cid-hqp77vwo>1,100 km² de superficie</span> </div> <div class="chapala-stat" data-astro-cid-hqp77vwo> <span class="stat-icon" data-astro-cid-hqp77vwo>🇺🇸</span> <span class="stat-text" data-astro-cid-hqp77vwo>+30,000 expatriados</span> </div> <div class="chapala-stat" data-astro-cid-hqp77vwo> <span class="stat-icon" data-astro-cid-hqp77vwo>🏘️</span> <span class="stat-text" data-astro-cid-hqp77vwo>Ajijic, Chapala, Jocotepec</span> </div> </div> </section>`, esZonaSur && renderTemplate`<section class="info-card special-content volcanic-special" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>🌋 Zona de Riesgo Volcánico</h2> <p data-astro-cid-hqp77vwo>
La zona sur de Jalisco está bajo la influencia del <strong data-astro-cid-hqp77vwo>Volcán de Colima</strong>,
                uno de los más activos de México. Ciudad Guzmán fue afectada por el sismo de 1985
                y cuenta con protocolos especiales de respuesta a emergencias sísmicas y volcánicas.
</p> <div class="volcanic-protocols" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>⚠️ Protocolos Especiales</h3> <ul data-astro-cid-hqp77vwo> <li data-astro-cid-hqp77vwo>Monitoreo constante de actividad volcánica</li> <li data-astro-cid-hqp77vwo>Rutas de evacuación preestablecidas</li> <li data-astro-cid-hqp77vwo>Coordinación con Protección Civil estatal</li> <li data-astro-cid-hqp77vwo>Simulacros periódicos de emergencia volcánica</li> <li data-astro-cid-hqp77vwo>Equipo para lahares y caída de ceniza</li> </ul> </div> </section>`, estacion.slug === "estacion-bomberos-san-juan-lagos" && renderTemplate`<section class="info-card special-content pilgrimage-special" data-astro-cid-hqp77vwo> <h2 data-astro-cid-hqp77vwo>⛪ Centro de Peregrinación</h2> <p data-astro-cid-hqp77vwo>
San Juan de los Lagos es el <strong data-astro-cid-hqp77vwo>segundo centro de peregrinación más importante
                de México</strong> después de la Basílica de Guadalupe. Recibe millones de peregrinos
                anualmente, especialmente durante la Candelaria (febrero) y la fiesta patronal.
</p> <div class="pilgrimage-info" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>🙏 Eventos de Alta Concentración</h3> <ul data-astro-cid-hqp77vwo> <li data-astro-cid-hqp77vwo>Fiesta de la Candelaria - 2 de febrero</li> <li data-astro-cid-hqp77vwo>Fiesta de la Asunción - 15 de agosto</li> <li data-astro-cid-hqp77vwo>Peregrinaciones durante Semana Santa</li> </ul> <p class="pilgrimage-note" data-astro-cid-hqp77vwo>
Estación capacitada para emergencias en eventos masivos y aglomeraciones.
</p> </div> </section>`, addAttribute(`tel:${estacion.telefono.replace(/\D/g, "")}`, "href"), estacion.telefono, estacion.telefono2 && renderTemplate`<a${addAttribute(`tel:${estacion.telefono2.replace(/\D/g, "")}`, "href")} class="contact-phone secondary" data-astro-cid-hqp77vwo> <span class="phone-icon" data-astro-cid-hqp77vwo>📞</span> <span class="phone-info" data-astro-cid-hqp77vwo> <strong data-astro-cid-hqp77vwo>${estacion.telefono2}</strong> <small data-astro-cid-hqp77vwo>Línea secundaria</small> </span> </a>`, estacion.direccion, estacion.ciudad, estacion.cp, estacion.coordenadas && renderTemplate`<a${addAttribute(`https://www.google.com/maps?q=${estacion.coordenadas.lat},${estacion.coordenadas.lng}`, "href")} target="_blank" rel="noopener noreferrer" class="map-link" data-astro-cid-hqp77vwo>
Ver en Google Maps →
</a>`, estacion.horario || "24 horas, 365 d\xEDas del a\xF1o", estacion.tiempoRespuesta && renderTemplate`<div class="response-info" data-astro-cid-hqp77vwo> <span class="response-icon" data-astro-cid-hqp77vwo>⚡</span> <span data-astro-cid-hqp77vwo>Tiempo de respuesta: ${estacion.tiempoRespuesta}</span> </div>`, estacion.comandancia && renderTemplate`<div class="sidebar-card command-card" data-astro-cid-hqp77vwo> <h3 data-astro-cid-hqp77vwo>🏛️ Comandancia</h3> <p data-astro-cid-hqp77vwo>${estacion.comandancia}</p> </div>`, JALISCO_SEO.poblacion, JALISCO_SEO.zmg.poblacion, JALISCO_SEO.municipios) })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/jalisco/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/jalisco/[slug].astro";
const $$url = "/directorio/jalisco/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
