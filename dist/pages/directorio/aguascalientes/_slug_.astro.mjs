import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C3xQZUfp.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesAguascalientes } from '../../../chunks/estaciones-aguascalientes_CwGT9pc-.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesAguascalientes.map((estacion) => ({
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
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const productosRelacionados = [
    { nombre: "Trajes Estructurales", href: "/productos/trajes-para-bomberos", desc: "Trajes NFPA 1971 para bomberos" },
    { nombre: "Cascos de Bombero", href: "/productos/cascos-para-bomberos", desc: "Cascos certificados NFPA" },
    { nombre: "Equipos SCBA", href: "/productos/scba", desc: "Equipos de respiraci\xF3n aut\xF3noma" },
    { nombre: "Herramientas de Rescate", href: "/productos/herramientas-rescate", desc: "Equipo Holmatro y m\xE1s" }
  ];
  const telefonoLink = estacion.telefono.replace(/\s/g, "");
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(estacion.nombre + " " + estacion.direccion + " " + estacion.colonia + " " + ubicacion + " Aguascalientes")}`;
  const canonical = `https://bombero.mx/directorio/aguascalientes/${estacion.slug}`;
  const seoKeywords = [
    `bomberos ${ubicacion.toLowerCase()}`,
    `estacion de bomberos ${ubicacion.toLowerCase()}`,
    `telefono bomberos ${ubicacion.toLowerCase()}`,
    "bomberos aguascalientes",
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
      addressRegion: "Aguascalientes",
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
      { "@type": "ListItem", position: 3, name: "Aguascalientes", item: "https://bombero.mx/directorio/aguascalientes" },
      { "@type": "ListItem", position: 4, name: estacion.nombre, item: canonical }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${estacion.nombreCorto} | Bomberos ${ubicacion} | BOMBERO.MX`, "description": `${estacion.descripcion} Tel\xE9fono: ${estacion.telefono}. Direcci\xF3n: ${estacion.direccion}, ${estacion.colonia}, ${ubicacion}, Aguascalientes.`, "keywords": seoKeywords, "canonical": canonical, "jsonLd": [stationJsonLd, breadcrumbJsonLd], "data-astro-cid-kdv37akp": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="est-hero" data-astro-cid-kdv37akp> <div class="est-hero__bg" data-astro-cid-kdv37akp> <div class="est-hero__gradient" data-astro-cid-kdv37akp></div> </div> <div class="container" data-astro-cid-kdv37akp> <!-- Breadcrumb --> <nav class="est-hero__breadcrumb" data-astro-cid-kdv37akp> <a href="/" data-astro-cid-kdv37akp>Inicio</a> <span data-astro-cid-kdv37akp>/</span> <a href="/directorio" data-astro-cid-kdv37akp>Directorio</a> <span data-astro-cid-kdv37akp>/</span> <a href="/directorio/aguascalientes" data-astro-cid-kdv37akp>Aguascalientes</a> <span data-astro-cid-kdv37akp>/</span> <span data-astro-cid-kdv37akp>${estacion.nombreCorto}</span> </nav> <div class="est-hero__grid" data-astro-cid-kdv37akp> <div class="est-hero__content" data-astro-cid-kdv37akp> <div class="est-hero__badges" data-astro-cid-kdv37akp> <span class="est-hero__badge est-hero__badge--municipio" data-astro-cid-kdv37akp>${estacion.municipio}</span> <span class="est-hero__badge est-hero__badge--horario" data-astro-cid-kdv37akp>${estacion.horario}</span> </div> <h1 class="est-hero__title" data-astro-cid-kdv37akp>${estacion.nombre}</h1> <p class="est-hero__desc" data-astro-cid-kdv37akp>${estacion.descripcion}</p> <div class="est-hero__actions" data-astro-cid-kdv37akp> <a${addAttribute(`tel:${telefonoLink}`, "href")} class="est-hero__btn est-hero__btn--primary" data-astro-cid-kdv37akp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-kdv37akp></path> </svg> <span data-astro-cid-kdv37akp>Llamar: ${estacion.telefono}</span> </a> <a${addAttribute(mapUrl, "href")} target="_blank" rel="noopener" class="est-hero__btn est-hero__btn--secondary" data-astro-cid-kdv37akp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-kdv37akp></path> <circle cx="12" cy="10" r="3" data-astro-cid-kdv37akp></circle> </svg> <span data-astro-cid-kdv37akp>Ver en Google Maps</span> </a> </div> </div> <div class="est-hero__card" data-astro-cid-kdv37akp> <div class="est-hero__card-header" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M3 21h18" data-astro-cid-kdv37akp></path> <path d="M5 21V7l8-4 8 4v14" data-astro-cid-kdv37akp></path> <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" data-astro-cid-kdv37akp></path> </svg> <span data-astro-cid-kdv37akp>Información de Contacto</span> </div> <div class="est-hero__card-body" data-astro-cid-kdv37akp> <div class="est-hero__info-row" data-astro-cid-kdv37akp> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-kdv37akp></path> <circle cx="12" cy="10" r="3" data-astro-cid-kdv37akp></circle> </svg> <div data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Dirección</strong> <span data-astro-cid-kdv37akp>${estacion.direccion}, ${estacion.colonia}, CP ${estacion.codigoPostal}</span> </div> </div> <div class="est-hero__info-row" data-astro-cid-kdv37akp> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-kdv37akp></path> </svg> <div data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Teléfono</strong> <a${addAttribute(`tel:${telefonoLink}`, "href")} data-astro-cid-kdv37akp>${estacion.telefono}</a> </div> </div> <div class="est-hero__info-row" data-astro-cid-kdv37akp> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" data-astro-cid-kdv37akp></path> </svg> <div data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Emergencias</strong> <a href="tel:911" class="est-hero__emergency" data-astro-cid-kdv37akp>911</a> </div> </div> ${estacion.tiempoRespuesta && renderTemplate`<div class="est-hero__info-row" data-astro-cid-kdv37akp> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <circle cx="12" cy="12" r="10" data-astro-cid-kdv37akp></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-kdv37akp></polyline> </svg> <div data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Tiempo de Respuesta</strong> <span data-astro-cid-kdv37akp>${estacion.tiempoRespuesta}</span> </div> </div>`} <div class="est-hero__info-row" data-astro-cid-kdv37akp> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-kdv37akp></rect> <line x1="16" y1="2" x2="16" y2="6" data-astro-cid-kdv37akp></line> <line x1="8" y1="2" x2="8" y2="6" data-astro-cid-kdv37akp></line> <line x1="3" y1="10" x2="21" y2="10" data-astro-cid-kdv37akp></line> </svg> <div data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Municipio</strong> <span data-astro-cid-kdv37akp>${estacion.municipio}, Aguascalientes</span> </div> </div> </div> </div> </div> </div> </section>  <section class="est-main" data-astro-cid-kdv37akp> <div class="container" data-astro-cid-kdv37akp> <div class="est-main__grid" data-astro-cid-kdv37akp> <!-- Content --> <div class="est-main__content" data-astro-cid-kdv37akp> <!-- Servicios --> <article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-kdv37akp></path> </svg>
Servicios de Emergencia
</h2> <p class="est-section__intro" data-astro-cid-kdv37akp>
La <strong data-astro-cid-kdv37akp>${estacion.nombreCorto}</strong> ofrece los siguientes servicios de emergencia
              a los habitantes de <strong data-astro-cid-kdv37akp>${estacion.municipio}</strong> y zonas aledañas en Aguascalientes:
</p> <ul class="est-services" data-astro-cid-kdv37akp> ${estacion.servicios.map((servicio) => renderTemplate`<li class="est-services__item" data-astro-cid-kdv37akp> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-kdv37akp> <polyline points="20 6 9 17 4 12" data-astro-cid-kdv37akp></polyline> </svg> <span data-astro-cid-kdv37akp>${servicio}</span> </li>`)} </ul> </article> <!-- Especialidades --> ${estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-kdv37akp></polygon> </svg>
Especialidades
</h2> <div class="est-specialties" data-astro-cid-kdv37akp> ${estacion.especialidades.map((esp) => renderTemplate`<div class="est-specialties__item" data-astro-cid-kdv37akp> <span class="est-specialties__icon" data-astro-cid-kdv37akp> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-kdv37akp></path> </svg> </span> <span data-astro-cid-kdv37akp>${esp}</span> </div>`)} </div> </article>`} <!-- Cobertura --> <article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <circle cx="12" cy="12" r="10" data-astro-cid-kdv37akp></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-kdv37akp></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-kdv37akp></path> </svg>
Zonas de Cobertura
</h2> <p class="est-section__intro" data-astro-cid-kdv37akp>
Esta estación brinda cobertura a las siguientes colonias y zonas del municipio de <strong data-astro-cid-kdv37akp>${estacion.municipio}</strong>:
</p> <div class="est-zones" data-astro-cid-kdv37akp> ${estacion.zonasCobertura.map((zona) => renderTemplate`<span class="est-zones__tag" data-astro-cid-kdv37akp>${zona}</span>`)} </div> </article> <!-- Equipamiento --> ${estacion.equipamiento && estacion.equipamiento.length > 0 && renderTemplate`<article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" data-astro-cid-kdv37akp></path> <path d="M15 18H9" data-astro-cid-kdv37akp></path> <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" data-astro-cid-kdv37akp></path> <circle cx="17" cy="18" r="2" data-astro-cid-kdv37akp></circle> <circle cx="7" cy="18" r="2" data-astro-cid-kdv37akp></circle> </svg>
Equipamiento y Unidades
</h2> <ul class="est-equipment" data-astro-cid-kdv37akp> ${estacion.equipamiento.map((equipo) => renderTemplate`<li data-astro-cid-kdv37akp>${equipo}</li>`)} </ul> ${estacion.unidadesDisponibles && renderTemplate`<div class="est-units" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Unidades Operativas:</h4> <div class="est-units__grid" data-astro-cid-kdv37akp> ${estacion.unidadesDisponibles.map((unidad) => renderTemplate`<span class="est-units__item" data-astro-cid-kdv37akp>${unidad}</span>`)} </div> </div>`} </article>`} <!-- Personal y Estadísticas --> ${(estacion.personalActivo || estacion.unidadesDisponibles) && renderTemplate`<article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-kdv37akp></path> <circle cx="9" cy="7" r="4" data-astro-cid-kdv37akp></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-kdv37akp></path> <path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-kdv37akp></path> </svg>
Personal y Recursos
</h2> <div class="est-stats" data-astro-cid-kdv37akp> ${estacion.personalActivo && renderTemplate`<div class="est-stats__item" data-astro-cid-kdv37akp> <span class="est-stats__number" data-astro-cid-kdv37akp>${estacion.personalActivo}</span> <span class="est-stats__label" data-astro-cid-kdv37akp>Elementos Activos</span> </div>`} ${estacion.unidadesDisponibles && renderTemplate`<div class="est-stats__item" data-astro-cid-kdv37akp> <span class="est-stats__number" data-astro-cid-kdv37akp>${estacion.unidadesDisponibles.length}</span> <span class="est-stats__label" data-astro-cid-kdv37akp>Unidades Operativas</span> </div>`} <div class="est-stats__item" data-astro-cid-kdv37akp> <span class="est-stats__number" data-astro-cid-kdv37akp>24/7</span> <span class="est-stats__label" data-astro-cid-kdv37akp>Disponibilidad</span> </div> </div> </article>`} <!-- Historia --> ${estacion.historia && renderTemplate`<article class="est-section" data-astro-cid-kdv37akp> <h2 class="est-section__title" data-astro-cid-kdv37akp> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" data-astro-cid-kdv37akp></path> <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" data-astro-cid-kdv37akp></path> </svg>
Historia
</h2> <p class="est-section__text" data-astro-cid-kdv37akp>${estacion.historia}</p> </article>`} <!-- SEO Content --> <article class="est-section est-section--seo" data-astro-cid-kdv37akp> <h2 data-astro-cid-kdv37akp>Bomberos en ${estacion.municipio}, Aguascalientes</h2> <p data-astro-cid-kdv37akp>
La <strong data-astro-cid-kdv37akp>${estacion.nombreCorto}</strong> es parte del <strong data-astro-cid-kdv37akp>H. Cuerpo de Bomberos de Aguascalientes</strong>,
              institución que protege a los más de <strong data-astro-cid-kdv37akp>1.5 millones de aguascalentenses</strong>. Esta estación, ubicada en
<strong data-astro-cid-kdv37akp>${estacion.direccion}, ${estacion.colonia}, ${estacion.municipio}</strong>, brinda atención las 24 horas del día,
              los 365 días del año.
</p> <p data-astro-cid-kdv37akp>
En caso de <strong data-astro-cid-kdv37akp>emergencia en ${estacion.municipio}</strong>, marca el <strong data-astro-cid-kdv37akp>911</strong> o comunícate directamente
              a esta estación al <strong data-astro-cid-kdv37akp>${estacion.telefono}</strong>. Los bomberos de Aguascalientes están capacitados para atender
              incendios, rescates vehiculares, fugas de gas, emergencias industriales y todo tipo de emergencias.
</p> <h3 data-astro-cid-kdv37akp>Aguascalientes: Industria y Tradición</h3> <p data-astro-cid-kdv37akp> <strong data-astro-cid-kdv37akp>Aguascalientes</strong> es uno de los estados más dinámicos de México, sede de la industria automotriz
              con plantas de <strong data-astro-cid-kdv37akp>Nissan, Jatco y cientos de proveedores</strong>. También es famoso por la
<strong data-astro-cid-kdv37akp>Feria Nacional de San Marcos</strong>, el evento más importante de su tipo en el país.
              Los bomberos atienden emergencias tanto industriales como en eventos masivos.
</p> <h3 data-astro-cid-kdv37akp>¿Necesitas equipo certificado para bomberos?</h3> <p data-astro-cid-kdv37akp>
En <strong data-astro-cid-kdv37akp><a href="/" data-astro-cid-kdv37akp>BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong data-astro-cid-kdv37akp>equipo para bomberos certificado NFPA</strong>.
              Equipamos estaciones en todo Aguascalientes con <a href="/productos/trajes-para-bomberos" data-astro-cid-kdv37akp>trajes estructurales</a>,
<a href="/productos/cascos-para-bomberos" data-astro-cid-kdv37akp>cascos</a>, <a href="/productos/scba" data-astro-cid-kdv37akp>equipos SCBA</a>,
<a href="/productos/herramientas-rescate" data-astro-cid-kdv37akp>herramientas de rescate</a> y más.
<a href="/cotizar" data-astro-cid-kdv37akp>Solicita una cotización</a> sin compromiso.
</p> </article> </div> <!-- Sidebar --> <aside class="est-sidebar" data-astro-cid-kdv37akp> <!-- Emergency Card --> <div class="est-sidebar__card est-sidebar__card--emergency" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Emergencias</h4> <a href="tel:911" class="est-sidebar__emergency" data-astro-cid-kdv37akp> <span class="est-sidebar__emergency-number" data-astro-cid-kdv37akp>911</span> <span class="est-sidebar__emergency-label" data-astro-cid-kdv37akp>Llamar ahora</span> </a> <p data-astro-cid-kdv37akp>Número único de emergencias en Aguascalientes</p> </div> <!-- Estaciones Cercanas --> <div class="est-sidebar__card" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Otras Estaciones en AGS</h4> <ul class="est-sidebar__stations" data-astro-cid-kdv37akp> ${estacionesCercanas.map((est) => renderTemplate`<li data-astro-cid-kdv37akp> <a${addAttribute(`/directorio/aguascalientes/${est.slug}`, "href")} data-astro-cid-kdv37akp> <span class="est-sidebar__station-name" data-astro-cid-kdv37akp>${est.nombreCorto}</span> <span class="est-sidebar__station-municipio" data-astro-cid-kdv37akp>${est.municipio}</span> </a> </li>`)} </ul> <a href="/directorio/aguascalientes" class="est-sidebar__link" data-astro-cid-kdv37akp>
Ver todas las estaciones
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-kdv37akp></path> </svg> </a> </div> <!-- Productos Relacionados --> <div class="est-sidebar__card" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Equipo para Bomberos</h4> <ul class="est-sidebar__products" data-astro-cid-kdv37akp> ${productosRelacionados.map((prod) => renderTemplate`<li data-astro-cid-kdv37akp> <a${addAttribute(prod.href, "href")} data-astro-cid-kdv37akp> <span class="est-sidebar__product-name" data-astro-cid-kdv37akp>${prod.nombre}</span> <span class="est-sidebar__product-desc" data-astro-cid-kdv37akp>${prod.desc}</span> </a> </li>`)} </ul> <a href="/productos" class="est-sidebar__link" data-astro-cid-kdv37akp>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-kdv37akp></path> </svg> </a> </div> <!-- CTA --> <div class="est-sidebar__card est-sidebar__card--cta" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>¿Equipas Bomberos?</h4> <p data-astro-cid-kdv37akp>Distribuimos equipo certificado NFPA a estaciones de bomberos en todo México</p> <a href="/cotizar" class="est-sidebar__cta-btn" data-astro-cid-kdv37akp>Solicitar Cotización</a> </div> <!-- Estados Cercanos --> <div class="est-sidebar__card" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Directorio Nacional</h4> <ul class="est-sidebar__states" data-astro-cid-kdv37akp> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-kdv37akp> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-kdv37akp> ${estado.nombre} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-kdv37akp></path> </svg> </a> </li>`)} </ul> <a href="/directorio" class="est-sidebar__link" data-astro-cid-kdv37akp>
Ver todos los estados
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-kdv37akp></path> </svg> </a> </div> <!-- Contacto BOMBERO.MX --> <div class="est-sidebar__card" data-astro-cid-kdv37akp> <h4 data-astro-cid-kdv37akp>Contacto BOMBERO.MX</h4> <ul class="est-sidebar__contact" data-astro-cid-kdv37akp> <li data-astro-cid-kdv37akp> <a href="tel:+525520780102" data-astro-cid-kdv37akp> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" data-astro-cid-kdv37akp></path> </svg>
55 2078 0102
</a> </li> <li data-astro-cid-kdv37akp> <a href="https://wa.me/525520780102" data-astro-cid-kdv37akp> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" data-astro-cid-kdv37akp></path> </svg>
WhatsApp
</a> </li> <li data-astro-cid-kdv37akp> <a href="mailto:ventas@bombero.mx" data-astro-cid-kdv37akp> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-kdv37akp> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-kdv37akp></path> <polyline points="22,6 12,13 2,6" data-astro-cid-kdv37akp></polyline> </svg>
ventas@bombero.mx
</a> </li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/aguascalientes/[slug].astro";
const $$url = "/directorio/aguascalientes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
