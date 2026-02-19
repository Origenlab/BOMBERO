import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesCDMX } from '../../../chunks/estaciones-cdmx_C9d9vCJz.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesCDMX.map((estacion) => ({
    params: { slug: estacion.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const estacion = getEstacionBySlug(slug);
  if (!estacion) {
    return Astro2.redirect("/404");
  }
  const estacionesCercanas = getEstacionesCercanas(slug, 3);
  const estadosVecinos = [
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" }
  ];
  const productosRelacionados = [
    { nombre: "Trajes Estructurales", href: "/productos/trajes-para-bomberos", desc: "Trajes NFPA 1971 para bomberos" },
    { nombre: "Cascos de Bombero", href: "/productos/cascos-para-bomberos", desc: "Cascos certificados NFPA" },
    { nombre: "Equipos SCBA", href: "/productos/scba", desc: "Equipos de respiraci\xF3n aut\xF3noma" },
    { nombre: "Herramientas de Rescate", href: "/productos/herramientas-rescate", desc: "Equipo Holmatro y m\xE1s" }
  ];
  const telefonoLink = estacion.telefono.replace(/\s/g, "");
  const ubicacion = estacion.alcaldia ?? estacion.ciudad;
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(estacion.nombre + " " + estacion.direccion + " " + estacion.colonia + " " + ubicacion + " CDMX")}`;
  const canonical = `https://bombero.mx/directorio/ciudad-de-mexico/${estacion.slug}`;
  const seoKeywords = [
    `bomberos ${ubicacion.toLowerCase()}`,
    `estacion de bomberos ${ubicacion.toLowerCase()}`,
    `telefono bomberos ${ubicacion.toLowerCase()}`,
    "bomberos cdmx",
    "estaciones de bomberos en mexico"
  ];
  const stationJsonLd = {
    "@context": "https://schema.org",
    "@type": "FireStation",
    name: estacion.nombre,
    description: estacion.descripcion,
    url: canonical,
    telephone: estacion.telefono,
    email: estacion.email,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: [estacion.direccion, estacion.colonia].filter(Boolean).join(", "),
      addressLocality: estacion.ciudad,
      addressRegion: "Ciudad de M\xE9xico",
      postalCode: estacion.codigoPostal,
      addressCountry: "MX"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: estacion.coordenadas.lat,
      longitude: estacion.coordenadas.lng
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: ubicacion
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: "Ciudad de M\xE9xico", item: "https://bombero.mx/directorio/ciudad-de-mexico" },
      { "@type": "ListItem", position: 4, name: estacion.nombre, item: canonical }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${estacion.nombreCorto} | Bomberos ${ubicacion}, CDMX`, "description": `${estacion.descripcion} Tel\xE9fono: ${estacion.telefono}. Direcci\xF3n: ${estacion.direccion}, ${estacion.colonia}, ${ubicacion}, CDMX.`, "keywords": seoKeywords, "canonical": canonical, "jsonLd": [stationJsonLd, breadcrumbJsonLd], "data-astro-cid-qfua636n": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="est-hero" data-astro-cid-qfua636n> <div class="est-hero__bg" data-astro-cid-qfua636n> <div class="est-hero__gradient" data-astro-cid-qfua636n></div> </div> <div class="container" data-astro-cid-qfua636n> <!-- Breadcrumb --> <nav class="est-hero__breadcrumb" data-astro-cid-qfua636n> <a href="/" data-astro-cid-qfua636n>Inicio</a> <span data-astro-cid-qfua636n>/</span> <a href="/directorio" data-astro-cid-qfua636n>Directorio</a> <span data-astro-cid-qfua636n>/</span> <a href="/directorio/ciudad-de-mexico" data-astro-cid-qfua636n>CDMX</a> <span data-astro-cid-qfua636n>/</span> <span data-astro-cid-qfua636n>${estacion.nombreCorto}</span> </nav> <div class="est-hero__grid" data-astro-cid-qfua636n> <div class="est-hero__content" data-astro-cid-qfua636n> <div class="est-hero__badges" data-astro-cid-qfua636n> <span class="est-hero__badge est-hero__badge--alcaldia" data-astro-cid-qfua636n>${estacion.alcaldia}</span> <span class="est-hero__badge est-hero__badge--horario" data-astro-cid-qfua636n>${estacion.horario}</span> </div> <h1 class="est-hero__title" data-astro-cid-qfua636n>${estacion.nombre}</h1> <p class="est-hero__desc" data-astro-cid-qfua636n>${estacion.descripcion}</p> <div class="est-hero__actions" data-astro-cid-qfua636n> <a${addAttribute(`tel:${telefonoLink}`, "href")} class="est-hero__btn est-hero__btn--primary" data-astro-cid-qfua636n> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-qfua636n></path> </svg> <span data-astro-cid-qfua636n>Llamar: ${estacion.telefono}</span> </a> <a${addAttribute(mapUrl, "href")} target="_blank" rel="noopener" class="est-hero__btn est-hero__btn--secondary" data-astro-cid-qfua636n> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-qfua636n></path> <circle cx="12" cy="10" r="3" data-astro-cid-qfua636n></circle> </svg> <span data-astro-cid-qfua636n>Ver en Google Maps</span> </a> </div> </div> <div class="est-hero__card" data-astro-cid-qfua636n> <div class="est-hero__card-header" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M3 21h18" data-astro-cid-qfua636n></path> <path d="M5 21V7l8-4 8 4v14" data-astro-cid-qfua636n></path> <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" data-astro-cid-qfua636n></path> </svg> <span data-astro-cid-qfua636n>Información de Contacto</span> </div> <div class="est-hero__card-body" data-astro-cid-qfua636n> <div class="est-hero__info-row" data-astro-cid-qfua636n> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-qfua636n></path> <circle cx="12" cy="10" r="3" data-astro-cid-qfua636n></circle> </svg> <div data-astro-cid-qfua636n> <strong data-astro-cid-qfua636n>Dirección</strong> <span data-astro-cid-qfua636n>${estacion.direccion}, ${estacion.colonia}, CP ${estacion.codigoPostal}</span> </div> </div> <div class="est-hero__info-row" data-astro-cid-qfua636n> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-qfua636n></path> </svg> <div data-astro-cid-qfua636n> <strong data-astro-cid-qfua636n>Teléfono</strong> <a${addAttribute(`tel:${telefonoLink}`, "href")} data-astro-cid-qfua636n>${estacion.telefono}</a> </div> </div> <div class="est-hero__info-row" data-astro-cid-qfua636n> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" data-astro-cid-qfua636n></path> </svg> <div data-astro-cid-qfua636n> <strong data-astro-cid-qfua636n>Emergencias</strong> <a href="tel:911" class="est-hero__emergency" data-astro-cid-qfua636n>911</a> </div> </div> ${estacion.tiempoRespuesta && renderTemplate`<div class="est-hero__info-row" data-astro-cid-qfua636n> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <circle cx="12" cy="12" r="10" data-astro-cid-qfua636n></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-qfua636n></polyline> </svg> <div data-astro-cid-qfua636n> <strong data-astro-cid-qfua636n>Tiempo de Respuesta</strong> <span data-astro-cid-qfua636n>${estacion.tiempoRespuesta}</span> </div> </div>`} </div> </div> </div> </div> </section>  <section class="est-main" data-astro-cid-qfua636n> <div class="container" data-astro-cid-qfua636n> <div class="est-main__grid" data-astro-cid-qfua636n> <!-- Content --> <div class="est-main__content" data-astro-cid-qfua636n> <!-- Servicios --> <article class="est-section" data-astro-cid-qfua636n> <h2 class="est-section__title" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-qfua636n></path> </svg>
Servicios de Emergencia
</h2> <p class="est-section__intro" data-astro-cid-qfua636n>
La <strong data-astro-cid-qfua636n>${estacion.nombreCorto}</strong> ofrece los siguientes servicios de emergencia
              a los habitantes de <strong data-astro-cid-qfua636n>${estacion.alcaldia}</strong> y zonas aledañas:
</p> <ul class="est-services" data-astro-cid-qfua636n> ${estacion.servicios.map((servicio) => renderTemplate`<li class="est-services__item" data-astro-cid-qfua636n> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-qfua636n> <polyline points="20 6 9 17 4 12" data-astro-cid-qfua636n></polyline> </svg> <span data-astro-cid-qfua636n>${servicio}</span> </li>`)} </ul> </article> <!-- Especialidades --> ${estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<article class="est-section" data-astro-cid-qfua636n> <h2 class="est-section__title" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-qfua636n></polygon> </svg>
Especialidades
</h2> <div class="est-specialties" data-astro-cid-qfua636n> ${estacion.especialidades.map((esp) => renderTemplate`<div class="est-specialties__item" data-astro-cid-qfua636n> <span class="est-specialties__icon" data-astro-cid-qfua636n> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-qfua636n></path> </svg> </span> <span data-astro-cid-qfua636n>${esp}</span> </div>`)} </div> </article>`} <!-- Cobertura --> <article class="est-section" data-astro-cid-qfua636n> <h2 class="est-section__title" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <circle cx="12" cy="12" r="10" data-astro-cid-qfua636n></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-qfua636n></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-qfua636n></path> </svg>
Zonas de Cobertura
</h2> <p class="est-section__intro" data-astro-cid-qfua636n>
Esta estación brinda cobertura a las siguientes colonias y zonas de la <strong data-astro-cid-qfua636n>Alcaldía ${estacion.alcaldia}</strong>:
</p> <div class="est-zones" data-astro-cid-qfua636n> ${estacion.zonasCobertura.map((zona) => renderTemplate`<span class="est-zones__tag" data-astro-cid-qfua636n>${zona}</span>`)} </div> </article> <!-- Equipamiento --> ${estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<article class="est-section" data-astro-cid-qfua636n> <h2 class="est-section__title" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" data-astro-cid-qfua636n></path> <path d="M15 18H9" data-astro-cid-qfua636n></path> <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" data-astro-cid-qfua636n></path> <circle cx="17" cy="18" r="2" data-astro-cid-qfua636n></circle> <circle cx="7" cy="18" r="2" data-astro-cid-qfua636n></circle> </svg>
Equipamiento y Unidades
</h2> <ul class="est-equipment" data-astro-cid-qfua636n> ${estacion.equipamiento.map((equipo) => renderTemplate`<li data-astro-cid-qfua636n>${equipo}</li>`)} </ul> ${estacion.unidadesDisponibles && renderTemplate`<div class="est-units" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Unidades Operativas:</h4> <div class="est-units__grid" data-astro-cid-qfua636n> ${estacion.unidadesDisponibles.map((unidad) => renderTemplate`<span class="est-units__item" data-astro-cid-qfua636n>${unidad}</span>`)} </div> </div>`} </article>`} <!-- Historia --> ${estacion.historia && renderTemplate`<article class="est-section" data-astro-cid-qfua636n> <h2 class="est-section__title" data-astro-cid-qfua636n> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-astro-cid-qfua636n></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-astro-cid-qfua636n></path> </svg>
Historia
</h2> <p class="est-section__text" data-astro-cid-qfua636n>${estacion.historia}</p> </article>`} <!-- SEO Content --> <article class="est-section est-section--seo" data-astro-cid-qfua636n> <h2 data-astro-cid-qfua636n>Estaciones de Bomberos en ${estacion.alcaldia}, CDMX</h2> <p data-astro-cid-qfua636n>
La <strong data-astro-cid-qfua636n>${estacion.nombreCorto}</strong> es parte del <strong data-astro-cid-qfua636n>Heroico Cuerpo de Bomberos de la Ciudad de México</strong>,
              institución que desde 1887 protege a los habitantes de la capital mexicana. Esta estación, ubicada en
<strong data-astro-cid-qfua636n>${estacion.direccion}, Colonia ${estacion.colonia}</strong>, brinda atención las 24 horas del día,
              los 365 días del año.
</p> <p data-astro-cid-qfua636n>
En caso de <strong data-astro-cid-qfua636n>emergencia en ${estacion.alcaldia}</strong>, marca el <strong data-astro-cid-qfua636n>911</strong> o comunícate directamente
              a esta estación al <strong data-astro-cid-qfua636n>${estacion.telefono}</strong>. Los bomberos de CDMX están capacitados para atender
              incendios, rescates vehiculares, fugas de gas, inundaciones y todo tipo de emergencias.
</p> <h3 data-astro-cid-qfua636n>¿Necesitas equipo certificado para bomberos?</h3> <p data-astro-cid-qfua636n>
En <strong data-astro-cid-qfua636n><a href="/" data-astro-cid-qfua636n>BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong data-astro-cid-qfua636n>equipo para bomberos certificado NFPA</strong>.
              Equipamos estaciones en toda la República Mexicana con <a href="/productos/trajes-para-bomberos" data-astro-cid-qfua636n>trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos" data-astro-cid-qfua636n>cascos</a>, <a href="/productos/scba" data-astro-cid-qfua636n>equipos SCBA</a>,
<a href="/productos/herramientas-rescate" data-astro-cid-qfua636n>herramientas de rescate</a> y más.
<a href="/cotizar" data-astro-cid-qfua636n>Solicita una cotización</a> sin compromiso.
</p> </article> </div> <!-- Sidebar --> <aside class="est-sidebar" data-astro-cid-qfua636n> <!-- Emergency Card --> <div class="est-sidebar__card est-sidebar__card--emergency" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Emergencias</h4> <a href="tel:911" class="est-sidebar__emergency" data-astro-cid-qfua636n> <span class="est-sidebar__emergency-number" data-astro-cid-qfua636n>911</span> <span class="est-sidebar__emergency-label" data-astro-cid-qfua636n>Llamar ahora</span> </a> <p data-astro-cid-qfua636n>Número único de emergencias en CDMX</p> </div> <!-- Estaciones Cercanas --> <div class="est-sidebar__card" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Otras Estaciones en CDMX</h4> <ul class="est-sidebar__stations" data-astro-cid-qfua636n> ${estacionesCercanas.map((est) => renderTemplate`<li data-astro-cid-qfua636n> <a${addAttribute(`/directorio/ciudad-de-mexico/${est.slug}`, "href")} data-astro-cid-qfua636n> <span class="est-sidebar__station-name" data-astro-cid-qfua636n>${est.nombreCorto}</span> <span class="est-sidebar__station-alcaldia" data-astro-cid-qfua636n>${est.alcaldia}</span> </a> </li>`)} </ul> <a href="/directorio/ciudad-de-mexico" class="est-sidebar__link" data-astro-cid-qfua636n>
Ver todas las estaciones
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-qfua636n></path> </svg> </a> </div> <!-- Productos Relacionados --> <div class="est-sidebar__card" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Equipo para Bomberos</h4> <ul class="est-sidebar__products" data-astro-cid-qfua636n> ${productosRelacionados.map((prod) => renderTemplate`<li data-astro-cid-qfua636n> <a${addAttribute(prod.href, "href")} data-astro-cid-qfua636n> <span class="est-sidebar__product-name" data-astro-cid-qfua636n>${prod.nombre}</span> <span class="est-sidebar__product-desc" data-astro-cid-qfua636n>${prod.desc}</span> </a> </li>`)} </ul> <a href="/productos" class="est-sidebar__link" data-astro-cid-qfua636n>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-qfua636n></path> </svg> </a> </div> <!-- CTA --> <div class="est-sidebar__card est-sidebar__card--cta" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>¿Equipas Bomberos?</h4> <p data-astro-cid-qfua636n>Distribuimos equipo certificado NFPA a estaciones de bomberos en todo México</p> <a href="/cotizar" class="est-sidebar__cta-btn" data-astro-cid-qfua636n>Solicitar Cotización</a> </div> <!-- Estados Cercanos --> <div class="est-sidebar__card" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Directorio Nacional</h4> <ul class="est-sidebar__states" data-astro-cid-qfua636n> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-qfua636n> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-qfua636n> ${estado.nombre} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-qfua636n></path> </svg> </a> </li>`)} </ul> <a href="/directorio" class="est-sidebar__link" data-astro-cid-qfua636n>
Ver todos los estados
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-qfua636n></path> </svg> </a> </div> <!-- Contacto BOMBERO.MX --> <div class="est-sidebar__card" data-astro-cid-qfua636n> <h4 data-astro-cid-qfua636n>Contacto BOMBERO.MX</h4> <ul class="est-sidebar__contact" data-astro-cid-qfua636n> <li data-astro-cid-qfua636n> <a href="tel:+525520780102" data-astro-cid-qfua636n> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" data-astro-cid-qfua636n></path> </svg>
55 2078 0102
</a> </li> <li data-astro-cid-qfua636n> <a href="https://wa.me/525520780102" data-astro-cid-qfua636n> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" data-astro-cid-qfua636n></path> </svg>
WhatsApp
</a> </li> <li data-astro-cid-qfua636n> <a href="mailto:ventas@bombero.mx" data-astro-cid-qfua636n> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-qfua636n> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-qfua636n></path> <polyline points="22,6 12,13 2,6" data-astro-cid-qfua636n></polyline> </svg>
ventas@bombero.mx
</a> </li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/ciudad-de-mexico/[slug].astro";
const $$url = "/directorio/ciudad-de-mexico/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
