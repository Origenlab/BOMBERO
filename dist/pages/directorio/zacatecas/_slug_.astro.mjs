import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesZacatecas } from '../../../chunks/estaciones-zacatecas_CBAGRav2.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesZacatecas.map((estacion) => ({
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
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Durango", slug: "durango" }
  ];
  const productosRelacionados = [
    { nombre: "Trajes Estructurales NFPA", href: "/productos/trajes-para-bomberos", desc: "Trajes NFPA 1971 certificados" },
    { nombre: "Cascos de Bombero", href: "/productos/cascos-para-bomberos", desc: "Cascos certificados NFPA" },
    { nombre: "Equipos SCBA", href: "/productos/scba", desc: "Equipos de respiraci\xF3n aut\xF3noma" },
    { nombre: "Herramientas de Rescate", href: "/productos/herramientas-rescate", desc: "Equipo Holmatro y herramientas de excarcelaci\xF3n" }
  ];
  const telefonoLink = estacion.telefono.replace(/\s/g, "");
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(estacion.nombre + " " + estacion.direccion + " " + estacion.colonia + " " + ubicacion + " Zacatecas")}`;
  const canonical = `https://bombero.mx/directorio/zacatecas/${estacion.slug}`;
  const seoKeywords = [
    `bomberos ${ubicacion.toLowerCase()}`,
    `estacion bomberos ${ubicacion.toLowerCase()}`,
    `telefono bomberos ${ubicacion.toLowerCase()} zacatecas`,
    "bomberos zacatecas",
    "bomberos fresnillo",
    "emergencias zacatecas 911",
    "hazmat minero zacatecas",
    "directorio bomberos norte mexico"
  ];
  const stationJsonLd = {
    "@context": "https://schema.org",
    "@type": "FireStation",
    name: estacion.nombre,
    description: estacion.descripcion,
    url: canonical,
    telephone: estacion.telefono,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      streetAddress: [estacion.direccion, estacion.colonia].filter(Boolean).join(", "),
      addressLocality: estacion.ciudad,
      addressRegion: "Zacatecas",
      postalCode: estacion.codigoPostal,
      addressCountry: "MX"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: estacion.coordenadas.lat,
      longitude: estacion.coordenadas.lng
    },
    areaServed: {
      "@type": "City",
      name: ubicacion
    }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: "Zacatecas", item: "https://bombero.mx/directorio/zacatecas" },
      { "@type": "ListItem", position: 4, name: estacion.nombre, item: canonical }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${estacion.nombreCorto} | Bomberos ${ubicacion}, Zacatecas | BOMBERO.MX`, "description": `${estacion.descripcion} Tel\xE9fono: ${estacion.telefono}. Direcci\xF3n: ${estacion.direccion}, ${estacion.colonia}, ${ubicacion}, Zacatecas. Emergencias 911.`, "keywords": seoKeywords, "canonical": canonical, "jsonLd": [stationJsonLd, breadcrumbJsonLd], "data-astro-cid-q7jin6e6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="est-hero" data-astro-cid-q7jin6e6> <div class="est-hero__bg" data-astro-cid-q7jin6e6> <div class="est-hero__gradient" data-astro-cid-q7jin6e6></div> </div> <div class="container" data-astro-cid-q7jin6e6> <nav class="est-hero__breadcrumb" data-astro-cid-q7jin6e6> <a href="/" data-astro-cid-q7jin6e6>Inicio</a> <span data-astro-cid-q7jin6e6>/</span> <a href="/directorio" data-astro-cid-q7jin6e6>Directorio</a> <span data-astro-cid-q7jin6e6>/</span> <a href="/directorio/zacatecas" data-astro-cid-q7jin6e6>Zacatecas</a> <span data-astro-cid-q7jin6e6>/</span> <span data-astro-cid-q7jin6e6>${estacion.nombreCorto}</span> </nav> <div class="est-hero__grid" data-astro-cid-q7jin6e6> <div class="est-hero__content" data-astro-cid-q7jin6e6> <div class="est-hero__badges" data-astro-cid-q7jin6e6> <span class="est-hero__badge est-hero__badge--municipio" data-astro-cid-q7jin6e6>${estacion.municipio}</span> <span class="est-hero__badge est-hero__badge--horario" data-astro-cid-q7jin6e6>${estacion.horario}</span> </div> <h1 class="est-hero__title" data-astro-cid-q7jin6e6>${estacion.nombre}</h1> <p class="est-hero__desc" data-astro-cid-q7jin6e6>${estacion.descripcion}</p> <div class="est-hero__actions" data-astro-cid-q7jin6e6> <a${addAttribute(`tel:${telefonoLink}`, "href")} class="est-hero__btn est-hero__btn--primary" data-astro-cid-q7jin6e6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-q7jin6e6></path> </svg> <span data-astro-cid-q7jin6e6>Llamar: ${estacion.telefono}</span> </a> <a${addAttribute(mapUrl, "href")} target="_blank" rel="noopener" class="est-hero__btn est-hero__btn--secondary" data-astro-cid-q7jin6e6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-q7jin6e6></path> <circle cx="12" cy="10" r="3" data-astro-cid-q7jin6e6></circle> </svg> <span data-astro-cid-q7jin6e6>Ver en Google Maps</span> </a> </div> </div> <div class="est-hero__card" data-astro-cid-q7jin6e6> <div class="est-hero__card-header" data-astro-cid-q7jin6e6> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M3 21h18" data-astro-cid-q7jin6e6></path> <path d="M5 21V7l8-4 8 4v14" data-astro-cid-q7jin6e6></path> <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" data-astro-cid-q7jin6e6></path> </svg> <span data-astro-cid-q7jin6e6>Información de Contacto</span> </div> <div class="est-hero__card-body" data-astro-cid-q7jin6e6> <div class="est-hero__info-row" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-q7jin6e6></path> <circle cx="12" cy="10" r="3" data-astro-cid-q7jin6e6></circle> </svg> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>Dirección</strong> <span data-astro-cid-q7jin6e6>${estacion.direccion}, ${estacion.colonia}, CP ${estacion.codigoPostal}</span> </div> </div> <div class="est-hero__info-row" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-q7jin6e6></path> </svg> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>Teléfono Directo</strong> <a${addAttribute(`tel:${telefonoLink}`, "href")} data-astro-cid-q7jin6e6>${estacion.telefono}</a> </div> </div> <div class="est-hero__info-row" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" data-astro-cid-q7jin6e6></polygon> </svg> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>Emergencias</strong> <a href="tel:911" class="est-hero__emergency" data-astro-cid-q7jin6e6>911</a> </div> </div> ${estacion.tiempoRespuesta && renderTemplate`<div class="est-hero__info-row" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <circle cx="12" cy="12" r="10" data-astro-cid-q7jin6e6></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-q7jin6e6></polyline> </svg> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>Tiempo de Respuesta</strong> <span data-astro-cid-q7jin6e6>${estacion.tiempoRespuesta}</span> </div> </div>`} <div class="est-hero__info-row" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-q7jin6e6></path> <circle cx="12" cy="7" r="4" data-astro-cid-q7jin6e6></circle> </svg> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>Personal Activo</strong> <span data-astro-cid-q7jin6e6>${estacion.personalActivo} bomberos</span> </div> </div> </div> </div> </div> </div> </section>  <section class="est-services" data-astro-cid-q7jin6e6> <div class="container" data-astro-cid-q7jin6e6> <div class="est-services__grid" data-astro-cid-q7jin6e6> <!-- Services List --> <div class="est-services__main" data-astro-cid-q7jin6e6> <h2 class="est-services__title" data-astro-cid-q7jin6e6>Servicios de Emergencia</h2> <ul class="est-services__list" data-astro-cid-q7jin6e6> ${estacion.servicios.map((servicio) => renderTemplate`<li class="est-services__item" data-astro-cid-q7jin6e6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <polyline points="20 6 9 17 4 12" data-astro-cid-q7jin6e6></polyline> </svg> <span data-astro-cid-q7jin6e6>${servicio}</span> </li>`)} </ul> ${estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<div class="est-specialties" data-astro-cid-q7jin6e6> <h3 class="est-specialties__title" data-astro-cid-q7jin6e6>Especialidades y Capacidades Únicas</h3> <ul class="est-specialties__list" data-astro-cid-q7jin6e6> ${estacion.especialidades.map((esp) => renderTemplate`<li class="est-specialties__item" data-astro-cid-q7jin6e6> <span class="est-specialties__dot" data-astro-cid-q7jin6e6></span> <span data-astro-cid-q7jin6e6>${esp}</span> </li>`)} </ul> </div>`} </div> <!-- Sidebar --> <aside class="est-sidebar" data-astro-cid-q7jin6e6> <!-- Emergency CTA --> <div class="est-sidebar__emergency" data-astro-cid-q7jin6e6> <div class="est-sidebar__emergency-icon" data-astro-cid-q7jin6e6> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-q7jin6e6> <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" data-astro-cid-q7jin6e6></polygon> </svg> </div> <div class="est-sidebar__emergency-text" data-astro-cid-q7jin6e6> <span data-astro-cid-q7jin6e6>Emergencias</span> <a href="tel:911" data-astro-cid-q7jin6e6>911</a> </div> </div> <!-- Nearby Stations --> ${estacionesCercanas.length > 0 && renderTemplate`<div class="est-sidebar__card" data-astro-cid-q7jin6e6> <h4 data-astro-cid-q7jin6e6>Estaciones Cercanas</h4> <ul class="est-sidebar__nearby" data-astro-cid-q7jin6e6> ${estacionesCercanas.map((ec) => renderTemplate`<li data-astro-cid-q7jin6e6> <a${addAttribute(`/directorio/zacatecas/${ec.slug}`, "href")} data-astro-cid-q7jin6e6> <div data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>${ec.nombreCorto}</strong> <span data-astro-cid-q7jin6e6>${ec.municipio}</span> </div> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-q7jin6e6></path> </svg> </a> </li>`)} </ul> </div>`} <!-- Nearby States --> <div class="est-sidebar__card" data-astro-cid-q7jin6e6> <h4 data-astro-cid-q7jin6e6>Estados Vecinos</h4> <ul class="est-sidebar__states" data-astro-cid-q7jin6e6> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-q7jin6e6> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-q7jin6e6> <span data-astro-cid-q7jin6e6>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-q7jin6e6></path> </svg> </a> </li>`)} </ul> </div> <!-- Products --> <div class="est-sidebar__card" data-astro-cid-q7jin6e6> <h4 data-astro-cid-q7jin6e6>Equipo Certificado NFPA</h4> <ul class="est-sidebar__products" data-astro-cid-q7jin6e6> ${productosRelacionados.map((prod) => renderTemplate`<li data-astro-cid-q7jin6e6> <a${addAttribute(prod.href, "href")} data-astro-cid-q7jin6e6> <strong data-astro-cid-q7jin6e6>${prod.nombre}</strong> <span data-astro-cid-q7jin6e6>${prod.desc}</span> </a> </li>`)} </ul> <a href="/cotizar" class="est-sidebar__cta" data-astro-cid-q7jin6e6>Solicitar Cotización</a> </div> <!-- Back Links --> <div class="est-sidebar__card est-sidebar__card--nav" data-astro-cid-q7jin6e6> <a href="/directorio/zacatecas" class="est-sidebar__back" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-q7jin6e6></path> </svg> <span data-astro-cid-q7jin6e6>Ver todas las estaciones en Zacatecas</span> </a> <a href="/directorio" class="est-sidebar__back" data-astro-cid-q7jin6e6> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-q7jin6e6> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-q7jin6e6></path> </svg> <span data-astro-cid-q7jin6e6>Ver todos los estados</span> </a> </div> </aside> </div> </div> </section>  <section class="est-seo" data-astro-cid-q7jin6e6> <div class="container" data-astro-cid-q7jin6e6> <h2 data-astro-cid-q7jin6e6>Bomberos de ${ubicacion}, Zacatecas — Estado de la Plata</h2> <p data-astro-cid-q7jin6e6>
La <strong data-astro-cid-q7jin6e6>estación de bomberos de ${ubicacion}</strong> es parte del
<strong data-astro-cid-q7jin6e6>H. Cuerpo de Bomberos de Zacatecas</strong>, el estado que produce el
<strong data-astro-cid-q7jin6e6>25% de la plata mundial</strong> y alberga el
<strong data-astro-cid-q7jin6e6>Centro Histórico Patrimonio de la Humanidad UNESCO 1993</strong>.
        Los bomberos zacatecanos están capacitados con estándares NFPA internacionales y
        protocolos HAZMAT especializados para la industria minera de plata más importante del mundo,
        incluyendo la Minera Peñasquito (Newmont/Goldcorp), la mayor mina de plata del planeta.
</p> <p data-astro-cid-q7jin6e6>
En caso de emergencia en ${ubicacion}, <strong data-astro-cid-q7jin6e6>marca el 911</strong> o contacta directamente
        a esta estación al <strong data-astro-cid-q7jin6e6>${estacion.telefono}</strong>.
        El C4 de Zacatecas coordina la respuesta de todos los servicios de emergencia del estado
        las <strong data-astro-cid-q7jin6e6>24 horas del día, 365 días del año</strong>.
</p> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas/[slug].astro";
const $$url = "/directorio/zacatecas/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
