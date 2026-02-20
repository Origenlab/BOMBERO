import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../../../chunks/PageLayout_C37tG6Zv.mjs';
import { g as getEstacionBySlug, a as getEstacionesCercanas, e as estacionesTamaulipas } from '../../../chunks/estaciones-tamaulipas_C4NUJspe.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
function getStaticPaths() {
  return estacionesTamaulipas.map((estacion) => ({
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
    { nombre: "Nuevo Le\xF3n", slug: "nuevo-leon" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Coahuila", slug: "coahuila" }
  ];
  const productosRelacionados = [
    { nombre: "Trajes Estructurales NFPA", href: "/productos/trajes-para-bomberos", desc: "Trajes NFPA 1971 certificados" },
    { nombre: "Cascos de Bombero", href: "/productos/cascos-para-bomberos", desc: "Cascos certificados NFPA" },
    { nombre: "Equipos SCBA", href: "/productos/scba", desc: "Equipos de respiraci\xF3n aut\xF3noma" },
    { nombre: "Herramientas de Rescate", href: "/productos/herramientas-rescate", desc: "Equipo Holmatro y herramientas de excarcelaci\xF3n" }
  ];
  const telefonoLink = estacion.telefono.replace(/\s/g, "");
  const ubicacion = estacion.municipio ?? estacion.ciudad;
  const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(estacion.nombre + " " + estacion.direccion + " " + estacion.colonia + " " + ubicacion + " Tamaulipas")}`;
  const canonical = `https://bombero.mx/directorio/tamaulipas/${estacion.slug}`;
  const seoKeywords = [
    `bomberos ${ubicacion.toLowerCase()}`,
    `estacion bomberos ${ubicacion.toLowerCase()}`,
    `telefono bomberos ${ubicacion.toLowerCase()} tamaulipas`,
    "bomberos tamaulipas",
    "emergencias tamaulipas 911",
    "directorio bomberos mexico"
  ];
  function truncateForSEO(text, maxLength) {
    if (!text || text.length <= maxLength) return text;
    const truncated = text.slice(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > maxLength * 0.7 ? truncated.slice(0, lastSpace) + "..." : truncated + "...";
  }
  const seoDescription = `${truncateForSEO(estacion.descripcion || "", 120)} Tel: ${estacion.telefono}. ${ubicacion}, Tamaulipas.`;
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
      addressRegion: "Tamaulipas",
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
      { "@type": "ListItem", position: 3, name: "Tamaulipas", item: "https://bombero.mx/directorio/tamaulipas" },
      { "@type": "ListItem", position: 4, name: estacion.nombre, item: canonical }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `${estacion.nombreCorto} | Bomberos ${ubicacion}, Tamaulipas | BOMBERO.MX`, "description": seoDescription, "keywords": seoKeywords, "canonical": canonical, "jsonLd": [stationJsonLd, breadcrumbJsonLd], "data-astro-cid-3kj2poli": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="est-hero" data-astro-cid-3kj2poli> <div class="est-hero__bg" data-astro-cid-3kj2poli> <div class="est-hero__gradient" data-astro-cid-3kj2poli></div> </div> <div class="container" data-astro-cid-3kj2poli> <nav class="est-hero__breadcrumb" data-astro-cid-3kj2poli> <a href="/" data-astro-cid-3kj2poli>Inicio</a> <span data-astro-cid-3kj2poli>/</span> <a href="/directorio" data-astro-cid-3kj2poli>Directorio</a> <span data-astro-cid-3kj2poli>/</span> <a href="/directorio/tamaulipas" data-astro-cid-3kj2poli>Tamaulipas</a> <span data-astro-cid-3kj2poli>/</span> <span data-astro-cid-3kj2poli>${estacion.nombreCorto}</span> </nav> <div class="est-hero__grid" data-astro-cid-3kj2poli> <div class="est-hero__content" data-astro-cid-3kj2poli> <div class="est-hero__badges" data-astro-cid-3kj2poli> <span class="est-hero__badge est-hero__badge--municipio" data-astro-cid-3kj2poli>${estacion.municipio}</span> <span class="est-hero__badge est-hero__badge--horario" data-astro-cid-3kj2poli>${estacion.horario}</span> </div> <h1 class="est-hero__title" data-astro-cid-3kj2poli>${estacion.nombre}</h1> <p class="est-hero__desc" data-astro-cid-3kj2poli>${estacion.descripcion}</p> <div class="est-hero__actions" data-astro-cid-3kj2poli> <a${addAttribute(`tel:${telefonoLink}`, "href")} class="est-hero__btn est-hero__btn--primary" data-astro-cid-3kj2poli> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-3kj2poli></path> </svg> <span data-astro-cid-3kj2poli>Llamar: ${estacion.telefono}</span> </a> <a${addAttribute(mapUrl, "href")} target="_blank" rel="noopener" class="est-hero__btn est-hero__btn--secondary" data-astro-cid-3kj2poli> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-3kj2poli></path> <circle cx="12" cy="10" r="3" data-astro-cid-3kj2poli></circle> </svg> <span data-astro-cid-3kj2poli>Ver en Google Maps</span> </a> </div> </div> <div class="est-hero__card" data-astro-cid-3kj2poli> <div class="est-hero__card-header" data-astro-cid-3kj2poli> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M3 21h18" data-astro-cid-3kj2poli></path> <path d="M5 21V7l8-4 8 4v14" data-astro-cid-3kj2poli></path> <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" data-astro-cid-3kj2poli></path> </svg> <span data-astro-cid-3kj2poli>Información de Contacto</span> </div> <div class="est-hero__card-body" data-astro-cid-3kj2poli> <div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-3kj2poli></path> <circle cx="12" cy="10" r="3" data-astro-cid-3kj2poli></circle> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Dirección</strong> <span data-astro-cid-3kj2poli>${estacion.direccion}, ${estacion.colonia}, CP ${estacion.codigoPostal}</span> </div> </div> <div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-3kj2poli></path> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Teléfono Directo</strong> <a${addAttribute(`tel:${telefonoLink}`, "href")} data-astro-cid-3kj2poli>${estacion.telefono}</a> </div> </div> <div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" data-astro-cid-3kj2poli></polygon> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Emergencias</strong> <a href="tel:911" class="est-hero__emergency" data-astro-cid-3kj2poli>911</a> </div> </div> ${estacion.tiempoRespuesta && renderTemplate`<div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <circle cx="12" cy="12" r="10" data-astro-cid-3kj2poli></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-3kj2poli></polyline> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Tiempo de Respuesta</strong> <span data-astro-cid-3kj2poli>${estacion.tiempoRespuesta}</span> </div> </div>`} <div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" data-astro-cid-3kj2poli></path> <circle cx="12" cy="7" r="4" data-astro-cid-3kj2poli></circle> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Personal Activo</strong> <span data-astro-cid-3kj2poli>${estacion.personalActivo} bomberos</span> </div> </div> <div class="est-hero__info-row" data-astro-cid-3kj2poli> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-3kj2poli></rect> <line x1="16" y1="2" x2="16" y2="6" data-astro-cid-3kj2poli></line> <line x1="8" y1="2" x2="8" y2="6" data-astro-cid-3kj2poli></line> <line x1="3" y1="10" x2="21" y2="10" data-astro-cid-3kj2poli></line> </svg> <div data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Municipio</strong> <span data-astro-cid-3kj2poli>${estacion.municipio}, Tamaulipas</span> </div> </div> </div> </div> </div> </div> </section> <section class="est-main" data-astro-cid-3kj2poli> <div class="container" data-astro-cid-3kj2poli> <div class="est-main__grid" data-astro-cid-3kj2poli> <div class="est-main__content" data-astro-cid-3kj2poli> <!-- Servicios --> <article class="est-section" data-astro-cid-3kj2poli> <h2 class="est-section__title" data-astro-cid-3kj2poli> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-3kj2poli></path> </svg>
Servicios de Emergencia
</h2> <p class="est-section__intro" data-astro-cid-3kj2poli>
La <strong data-astro-cid-3kj2poli>${estacion.nombreCorto}</strong> presta los siguientes servicios de emergencia
              a los habitantes de <strong data-astro-cid-3kj2poli>${estacion.municipio}</strong> y zonas de cobertura en Tamaulipas:
</p> <ul class="est-services" data-astro-cid-3kj2poli> ${estacion.servicios.map((servicio) => renderTemplate`<li class="est-services__item" data-astro-cid-3kj2poli> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-3kj2poli> <polyline points="20 6 9 17 4 12" data-astro-cid-3kj2poli></polyline> </svg> <span data-astro-cid-3kj2poli>${servicio}</span> </li>`)} </ul> </article> <!-- Especialidades --> ${estacion.especialidades && estacion.especialidades.length > 0 && renderTemplate`<article class="est-section" data-astro-cid-3kj2poli> <h2 class="est-section__title" data-astro-cid-3kj2poli> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" data-astro-cid-3kj2poli></polygon> </svg>
Especialidades y Capacidades Únicas
</h2> <div class="est-specialties" data-astro-cid-3kj2poli> ${estacion.especialidades.map((esp) => renderTemplate`<div class="est-specialties__item" data-astro-cid-3kj2poli> <span class="est-specialties__icon" data-astro-cid-3kj2poli> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-3kj2poli></path> </svg> </span> <span data-astro-cid-3kj2poli>${esp}</span> </div>`)} </div> </article>`} <!-- Personal y Recursos --> ${(estacion.personalActivo || estacion.unidadesDisponibles) && renderTemplate`<article class="est-section" data-astro-cid-3kj2poli> <h2 class="est-section__title" data-astro-cid-3kj2poli> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-3kj2poli></path> <circle cx="9" cy="7" r="4" data-astro-cid-3kj2poli></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-3kj2poli></path> <path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-3kj2poli></path> </svg>
Personal y Flota Operativa
</h2> <div class="est-stats" data-astro-cid-3kj2poli> ${estacion.personalActivo && renderTemplate`<div class="est-stats__item" data-astro-cid-3kj2poli> <span class="est-stats__number" data-astro-cid-3kj2poli>${estacion.personalActivo}</span> <span class="est-stats__label" data-astro-cid-3kj2poli>Elementos Activos</span> </div>`} ${estacion.unidades && renderTemplate`<div class="est-stats__item" data-astro-cid-3kj2poli> <span class="est-stats__number" data-astro-cid-3kj2poli>${estacion.unidades}</span> <span class="est-stats__label" data-astro-cid-3kj2poli>Unidades Totales</span> </div>`} <div class="est-stats__item" data-astro-cid-3kj2poli> <span class="est-stats__number" data-astro-cid-3kj2poli>24/7</span> <span class="est-stats__label" data-astro-cid-3kj2poli>Disponibilidad</span> </div> </div> ${estacion.unidadesDisponibles && renderTemplate`<div class="est-units" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Flota Operativa:</h4> <div class="est-units__grid" data-astro-cid-3kj2poli> ${estacion.unidadesDisponibles.map((unidad) => renderTemplate`<span class="est-units__item" data-astro-cid-3kj2poli>${unidad}</span>`)} </div> </div>`} </article>`} <!-- Cobertura --> <article class="est-section" data-astro-cid-3kj2poli> <h2 class="est-section__title" data-astro-cid-3kj2poli> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <circle cx="12" cy="12" r="10" data-astro-cid-3kj2poli></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-3kj2poli></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-3kj2poli></path> </svg>
Zonas de Cobertura
</h2> <p class="est-section__intro" data-astro-cid-3kj2poli>
Esta estación brinda cobertura a las siguientes colonias y zonas del municipio de <strong data-astro-cid-3kj2poli>${estacion.municipio}</strong> en Tamaulipas:
</p> <div class="est-zones" data-astro-cid-3kj2poli> ${estacion.zonasCobertura.map((zona) => renderTemplate`<span class="est-zones__tag" data-astro-cid-3kj2poli>${zona}</span>`)} </div> </article> <!-- SEO Content --> <article class="est-section est-section--seo" data-astro-cid-3kj2poli> <h2 data-astro-cid-3kj2poli>Bomberos en ${estacion.municipio}, Tamaulipas</h2> <p data-astro-cid-3kj2poli>
La <strong data-astro-cid-3kj2poli>${estacion.nombreCorto}</strong> forma parte del <strong data-astro-cid-3kj2poli>H. Cuerpo de Bomberos de Tamaulipas</strong>,
              institución que protege a más de <strong data-astro-cid-3kj2poli>3.5 millones de tamaulipecos</strong> en el estado con la
              frontera más activa de México con Texas. Ubicada en <strong data-astro-cid-3kj2poli>${estacion.direccion}, ${estacion.colonia},
${estacion.municipio}</strong>, opera las 24 horas del día, los 365 días del año.
</p> <p data-astro-cid-3kj2poli>
En caso de <strong data-astro-cid-3kj2poli>emergencia en ${estacion.municipio}</strong>, llama al <strong data-astro-cid-3kj2poli>911</strong> o directamente
              al <strong data-astro-cid-3kj2poli>${estacion.telefono}</strong>. El tiempo de respuesta para esta zona es de <strong data-astro-cid-3kj2poli>${estacion.tiempoRespuesta}</strong>.
              Los bomberos de Tamaulipas están certificados para incendios, rescates, HAZMAT y todo tipo de emergencias industriales y fronterizas.
</p> <h3 data-astro-cid-3kj2poli>Tamaulipas: El Noreste Industrial y la Frontera más Activa de México</h3> <p data-astro-cid-3kj2poli> <strong data-astro-cid-3kj2poli>Tamaulipas</strong> concentra la mayor densidad industrial fronteriza de México. La <strong data-astro-cid-3kj2poli>Cuenca de
              Burgos</strong> en Reynosa es la mayor reserva de gas natural onshore del país. La zona maquiladora de
<strong data-astro-cid-3kj2poli>Matamoros</strong> —apodada la "Detroit de México"— produce componentes automotrices para las
              principales marcas mundiales. El <strong data-astro-cid-3kj2poli>Puerto Industrial de Altamira</strong> alberga a BASF, Celanese y
              Vitro. La <strong data-astro-cid-3kj2poli>Refinería PEMEX Francisco I. Madero</strong> procesa 190,000 barriles diarios en Ciudad
              Madero. Y <strong data-astro-cid-3kj2poli>Nuevo Laredo</strong> es el mayor puerto terrestre de las Américas, con el 40% de las
              exportaciones mexicanas a EE.UU.
</p> <h3 data-astro-cid-3kj2poli>¿Necesitas equipo certificado para bomberos en Tamaulipas?</h3> <p data-astro-cid-3kj2poli>
En <strong data-astro-cid-3kj2poli><a href="/" data-astro-cid-3kj2poli>BOMBERO.MX</a></strong> somos distribuidores autorizados de <strong data-astro-cid-3kj2poli>equipo para bomberos certificado NFPA</strong>
para todas las condiciones de Tamaulipas: HAZMAT gas natural, petroquímica, maquiladora y frontera.
              Equipamos con <a href="/productos/trajes-para-bomberos" data-astro-cid-3kj2poli>trajes estructurales NFPA 1971</a>,
<a href="/productos/cascos-para-bomberos" data-astro-cid-3kj2poli>cascos certificados</a>, <a href="/productos/guantes-para-bomberos" data-astro-cid-3kj2poli>guantes</a> y
<a href="/productos/botas-para-bomberos" data-astro-cid-3kj2poli>botas certificadas</a>.
<a href="/cotizar" data-astro-cid-3kj2poli>Solicita cotización</a> sin compromiso.
</p> </article> </div> <!-- Sidebar --> <aside class="est-sidebar" data-astro-cid-3kj2poli> <div class="est-sidebar__card est-sidebar__card--emergency" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Emergencias</h4> <a href="tel:911" class="est-sidebar__emergency" data-astro-cid-3kj2poli> <span class="est-sidebar__emergency-number" data-astro-cid-3kj2poli>911</span> <span class="est-sidebar__emergency-label" data-astro-cid-3kj2poli>Llamar ahora</span> </a> <p data-astro-cid-3kj2poli>Número único de emergencias en Tamaulipas</p> </div> <div class="est-sidebar__card" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Otras Estaciones en TAM</h4> <ul class="est-sidebar__stations" data-astro-cid-3kj2poli> ${estacionesCercanas.map((est) => renderTemplate`<li data-astro-cid-3kj2poli> <a${addAttribute(`/directorio/tamaulipas/${est.slug}`, "href")} data-astro-cid-3kj2poli> <span class="est-sidebar__station-name" data-astro-cid-3kj2poli>${est.nombreCorto}</span> <span class="est-sidebar__station-municipio" data-astro-cid-3kj2poli>${est.municipio}</span> </a> </li>`)} </ul> <a href="/directorio/tamaulipas" class="est-sidebar__link" data-astro-cid-3kj2poli>
Ver todas las estaciones
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-3kj2poli></path> </svg> </a> </div> <div class="est-sidebar__card" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Equipo para Bomberos</h4> <ul class="est-sidebar__products" data-astro-cid-3kj2poli> ${productosRelacionados.map((prod) => renderTemplate`<li data-astro-cid-3kj2poli> <a${addAttribute(prod.href, "href")} data-astro-cid-3kj2poli> <span class="est-sidebar__product-name" data-astro-cid-3kj2poli>${prod.nombre}</span> <span class="est-sidebar__product-desc" data-astro-cid-3kj2poli>${prod.desc}</span> </a> </li>`)} </ul> <a href="/productos" class="est-sidebar__link" data-astro-cid-3kj2poli>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-3kj2poli></path> </svg> </a> </div> <div class="est-sidebar__card est-sidebar__card--cta" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>¿Equipas Bomberos en TAM?</h4> <p data-astro-cid-3kj2poli>Distribuimos equipo NFPA para HAZMAT gas natural, petroquímica, maquiladora y emergencias fronterizas</p> <a href="/cotizar" class="est-sidebar__cta-btn" data-astro-cid-3kj2poli>Solicitar Cotización</a> </div> <div class="est-sidebar__card" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Directorio Nacional</h4> <ul class="est-sidebar__states" data-astro-cid-3kj2poli> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-3kj2poli> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-3kj2poli> ${estado.nombre} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-3kj2poli></path> </svg> </a> </li>`)} </ul> <a href="/directorio" class="est-sidebar__link" data-astro-cid-3kj2poli>
Ver todos los estados
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-3kj2poli></path> </svg> </a> </div> <div class="est-sidebar__card" data-astro-cid-3kj2poli> <h4 data-astro-cid-3kj2poli>Contacto BOMBERO.MX</h4> <ul class="est-sidebar__contact" data-astro-cid-3kj2poli> <li data-astro-cid-3kj2poli> <a href="tel:+525520780102" data-astro-cid-3kj2poli> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" data-astro-cid-3kj2poli></path> </svg>
55 2078 0102
</a> </li> <li data-astro-cid-3kj2poli> <a href="https://wa.me/525520780102" data-astro-cid-3kj2poli> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" data-astro-cid-3kj2poli></path> </svg>
WhatsApp
</a> </li> <li data-astro-cid-3kj2poli> <a href="mailto:ventas@bombero.mx" data-astro-cid-3kj2poli> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3kj2poli> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-3kj2poli></path> <polyline points="22,6 12,13 2,6" data-astro-cid-3kj2poli></polyline> </svg>
ventas@bombero.mx
</a> </li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas/[slug].astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas/[slug].astro";
const $$url = "/directorio/tamaulipas/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
