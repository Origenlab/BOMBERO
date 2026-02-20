import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML, e as renderSlot } from './astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$PageLayout } from './PageLayout_C37tG6Zv.mjs';
import { $ as $$SectionHeader } from './SectionHeader_DiQp1BQS.mjs';
import { $ as $$CTABanner } from './CTABanner_CozAoE6V.mjs';
import 'clsx';
/* empty css                                  */
import { c as cdnW } from './cdn_BlgyKQ2i.mjs';

const $$Astro$1 = createAstro("https://bombero.mx");
const $$StationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StationCard;
  const {
    nombre,
    slug,
    direccion,
    alcaldia,
    telefono,
    servicios,
    horario = "24 horas",
    image,
    baseUrl = "/directorio/ciudad-de-mexico",
    href
  } = Astro2.props;
  const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const detalleUrl = href ?? (slug.startsWith("/") ? slug : `${cleanBaseUrl}/${slug}`);
  const nombreEstacion = nombre ?? "Estaci\xF3n de Bomberos";
  const zona = alcaldia ?? "Cobertura local";
  return renderTemplate`${maybeRenderHead()}<article class="station-card" data-astro-cid-hcor2hlt> <!-- Image Section --> <a${addAttribute(detalleUrl, "href")} class="station-card__image" data-astro-cid-hcor2hlt> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(nombreEstacion, "alt")} width="400" height="250" loading="lazy" decoding="async" data-astro-cid-hcor2hlt>` : renderTemplate`<div class="station-card__placeholder" data-astro-cid-hcor2hlt> <div class="station-card__icon" data-astro-cid-hcor2hlt> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-astro-cid-hcor2hlt> <path d="M3 21h18" data-astro-cid-hcor2hlt></path> <path d="M5 21V7l8-4 8 4v14" data-astro-cid-hcor2hlt></path> <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" data-astro-cid-hcor2hlt></path> <path d="M10 9h4" data-astro-cid-hcor2hlt></path> <path d="M12 9v3" data-astro-cid-hcor2hlt></path> </svg> </div> <span data-astro-cid-hcor2hlt>Estación de Bomberos</span> </div>`} <span class="station-card__badge" data-astro-cid-hcor2hlt>${horario}</span> <span class="station-card__alcaldia" data-astro-cid-hcor2hlt>${zona}</span> </a> <!-- Content Section --> <div class="station-card__content" data-astro-cid-hcor2hlt> <h3 class="station-card__title" data-astro-cid-hcor2hlt>${nombreEstacion}</h3> <!-- Info List --> <ul class="station-card__info" data-astro-cid-hcor2hlt> <li class="station-card__info-item" data-astro-cid-hcor2hlt> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-hcor2hlt> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-hcor2hlt></path> <circle cx="12" cy="10" r="3" data-astro-cid-hcor2hlt></circle> </svg> <span data-astro-cid-hcor2hlt>${direccion}</span> </li> <li class="station-card__info-item" data-astro-cid-hcor2hlt> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-hcor2hlt> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-hcor2hlt></path> </svg> <span data-astro-cid-hcor2hlt>${telefono}</span> </li> </ul> <!-- Services Preview --> <div class="station-card__services" data-astro-cid-hcor2hlt> <span class="station-card__services-label" data-astro-cid-hcor2hlt>Servicios:</span> <ul class="station-card__services-list" data-astro-cid-hcor2hlt> ${servicios.slice(0, 3).map((servicio) => renderTemplate`<li data-astro-cid-hcor2hlt>${servicio}</li>`)} ${servicios.length > 3 && renderTemplate`<li class="station-card__services-more" data-astro-cid-hcor2hlt>+${servicios.length - 3} más</li>`} </ul> </div> <!-- Single CTA Button --> <a${addAttribute(detalleUrl, "href")} class="station-card__btn" data-astro-cid-hcor2hlt> <span data-astro-cid-hcor2hlt>${nombreEstacion}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-hcor2hlt> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-hcor2hlt></path> </svg> </a> </div> </article> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/StationCard.astro", void 0);

const $$Astro = createAstro("https://bombero.mx");
const $$DirectorioEstadoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DirectorioEstadoLayout;
  const {
    estado,
    sigla,
    slug,
    description,
    keywords,
    canonical,
    jsonLd,
    totalEstaciones,
    totalMunicipios,
    habitantes,
    heroDesc,
    heroImage,
    heroImageAlt,
    heroCaption,
    heroThumbs,
    galleryImages,
    emergencyNumbers,
    estaciones,
    stationImages,
    municipios,
    regiones,
    estadosVecinos,
    eppCards,
    ctaTitle,
    ctaDesc,
    ctaBtnText,
    ctaBtnHref = "/cotizar"
  } = Astro2.props;
  const heroImageCdn = cdnW(heroImage, 800);
  const heroThumbsCdn = heroThumbs.map((t) => ({ ...t, src: cdnW(t.src, 400) }));
  const galleryImagesCdn = galleryImages.map((g) => ({ ...g, src: cdnW(g.src, 500) }));
  const stationImagesCdn = stationImages.map((s) => cdnW(s, 400));
  const eppCardsCdn = eppCards.map((c) => ({ ...c, image: cdnW(c.image, 400) }));
  const toAnchor = (s) => s.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ñ/g, "n");
  const title = `Bomberos en ${estado} | ${totalEstaciones} Estaciones | BOMBERO.MX`;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": canonical, "jsonLd": jsonLd, "data-astro-cid-i4qmjdv5": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="de-hero" data-astro-cid-i4qmjdv5> <div class="de-hero__bg" data-astro-cid-i4qmjdv5> <div class="de-hero__gradient" data-astro-cid-i4qmjdv5></div> <div class="de-hero__pattern" data-astro-cid-i4qmjdv5></div> </div> <div class="container" data-astro-cid-i4qmjdv5> <div class="de-hero__container" data-astro-cid-i4qmjdv5> <!-- Columna izquierda --> <div class="de-hero__content" data-astro-cid-i4qmjdv5> <nav class="de-hero__breadcrumb" data-astro-cid-i4qmjdv5> <a href="/" data-astro-cid-i4qmjdv5>Inicio</a> <span data-astro-cid-i4qmjdv5>/</span> <a href="/directorio" data-astro-cid-i4qmjdv5>Directorio</a> <span data-astro-cid-i4qmjdv5>/</span> <span data-astro-cid-i4qmjdv5>${estado}</span> </nav> <span class="de-hero__badge" data-astro-cid-i4qmjdv5> <span class="de-hero__badge-dot" data-astro-cid-i4qmjdv5></span> ${sigla} </span> <h1 class="de-hero__title" data-astro-cid-i4qmjdv5>
Estaciones de Bomberos en
<span class="de-hero__highlight" data-astro-cid-i4qmjdv5>${estado}</span> </h1> <p class="de-hero__desc" data-astro-cid-i4qmjdv5>${unescapeHTML(heroDesc)}</p> <div class="de-hero__stats" data-astro-cid-i4qmjdv5> <div class="de-hero__stat" data-astro-cid-i4qmjdv5> <span class="de-hero__stat-number" data-astro-cid-i4qmjdv5>${totalEstaciones}</span> <span class="de-hero__stat-label" data-astro-cid-i4qmjdv5>Estaciones</span> </div> <div class="de-hero__stat" data-astro-cid-i4qmjdv5> <span class="de-hero__stat-number" data-astro-cid-i4qmjdv5>${totalMunicipios}</span> <span class="de-hero__stat-label" data-astro-cid-i4qmjdv5>Municipios</span> </div> <div class="de-hero__stat" data-astro-cid-i4qmjdv5> <span class="de-hero__stat-number" data-astro-cid-i4qmjdv5>24/7</span> <span class="de-hero__stat-label" data-astro-cid-i4qmjdv5>Servicio</span> </div> <div class="de-hero__stat" data-astro-cid-i4qmjdv5> <span class="de-hero__stat-number" data-astro-cid-i4qmjdv5>${habitantes}</span> <span class="de-hero__stat-label" data-astro-cid-i4qmjdv5>Habitantes</span> </div> </div> </div> <!-- Columna derecha — Mosaico de imágenes --> <div class="de-hero__visual" data-astro-cid-i4qmjdv5> <div class="de-hero__visual-main" data-astro-cid-i4qmjdv5> <img${addAttribute(heroImageCdn, "src")}${addAttribute(heroImageAlt, "alt")} width="600" height="340" loading="eager" decoding="async" data-astro-cid-i4qmjdv5> <span class="de-hero__visual-caption" data-astro-cid-i4qmjdv5>${heroCaption}</span> </div> <div class="de-hero__visual-row" data-astro-cid-i4qmjdv5> ${heroThumbsCdn.map((thumb) => renderTemplate`<div class="de-hero__visual-thumb" data-astro-cid-i4qmjdv5> <img${addAttribute(thumb.src, "src")}${addAttribute(thumb.alt, "alt")} width="280" height="160" loading="eager" decoding="async" data-astro-cid-i4qmjdv5> <span data-astro-cid-i4qmjdv5>${thumb.label}</span> </div>`)} </div> </div> </div> </div> </section>  <section class="de-emergency" data-astro-cid-i4qmjdv5> <div class="container" data-astro-cid-i4qmjdv5> <div class="de-emergency__content" data-astro-cid-i4qmjdv5> <div class="de-emergency__icon" data-astro-cid-i4qmjdv5> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-i4qmjdv5> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-i4qmjdv5></path> </svg> </div> <div class="de-emergency__text" data-astro-cid-i4qmjdv5> <span class="de-emergency__label" data-astro-cid-i4qmjdv5>Emergencias en ${estado}</span> <span class="de-emergency__number" data-astro-cid-i4qmjdv5>911</span> </div> <p class="de-emergency__desc" data-astro-cid-i4qmjdv5>
Número único de emergencias en todo ${estado}. Disponible las 24 horas, los 365 días del año.
</p> </div> </div> </section>  <section class="de-gallery" data-astro-cid-i4qmjdv5> <div class="container" data-astro-cid-i4qmjdv5> <div class="de-gallery__grid" data-astro-cid-i4qmjdv5> ${galleryImagesCdn.map((img) => renderTemplate`<div class="de-gallery__item" data-astro-cid-i4qmjdv5> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} width="320" height="200" loading="lazy" decoding="async" data-astro-cid-i4qmjdv5> <div class="de-gallery__item-label" data-astro-cid-i4qmjdv5> <span data-astro-cid-i4qmjdv5>${img.label}</span> </div> </div>`)} </div> </div> </section>  <section class="de-main" data-astro-cid-i4qmjdv5> <div class="container" data-astro-cid-i4qmjdv5> <div class="de-main__grid" data-astro-cid-i4qmjdv5> <!-- Contenido principal --> <div class="de-main__content" data-astro-cid-i4qmjdv5> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": `Estaciones de Bomberos en ${estado}`, "description": `Informaci\xF3n de contacto actualizada de todas las estaciones del H. Cuerpo de Bomberos en ${estado}. Selecciona una estaci\xF3n para ver sus datos de contacto, servicios y zonas de cobertura.`, "data-astro-cid-i4qmjdv5": true })} <div class="de-stations-grid" data-astro-cid-i4qmjdv5> ${estaciones.map((estacion, i) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}${estacion.colonia ? ", " + estacion.colonia : ""}`, "alcaldia": estacion.municipio || estacion.ciudad || "", "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "image": stationImagesCdn[i % stationImagesCdn.length], "baseUrl": `/directorio/${slug}`, "data-astro-cid-i4qmjdv5": true })}`)} </div> <!-- Slot SEO — contenido de texto para posicionamiento --> <div class="de-seo" data-astro-cid-i4qmjdv5> ${renderSlot($$result2, $$slots["seo"])} </div> </div> <!-- Sidebar --> <aside class="de-sidebar" data-astro-cid-i4qmjdv5> <!-- 1. Filtrar por Municipio --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Filtrar por Municipio</h4> <ul class="de-sidebar__municipios" data-astro-cid-i4qmjdv5> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-i4qmjdv5> <a${addAttribute(`#${toAnchor(municipio)}`, "href")} data-astro-cid-i4qmjdv5> <span class="de-sidebar__bullet" data-astro-cid-i4qmjdv5></span> <span data-astro-cid-i4qmjdv5>${municipio}</span> </a> </li>`)} </ul> </div> <!-- 2. Teléfonos de Emergencia --> <div class="de-sidebar__card de-sidebar__card--emergency" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Teléfonos de Emergencia</h4> <div class="de-sidebar__emergency-list" data-astro-cid-i4qmjdv5> ${emergencyNumbers.map((item) => renderTemplate`<div class="de-sidebar__emergency-item" data-astro-cid-i4qmjdv5> <span class="de-sidebar__emergency-number" data-astro-cid-i4qmjdv5>${item.number}</span> <span class="de-sidebar__emergency-label" data-astro-cid-i4qmjdv5>${item.label}</span> </div>`)} </div> </div> <!-- 3. Regiones del Estado --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Regiones del Estado</h4> <ul class="de-sidebar__regiones" data-astro-cid-i4qmjdv5> ${regiones.map((region) => renderTemplate`<li data-astro-cid-i4qmjdv5> <span class="de-sidebar__region-name" data-astro-cid-i4qmjdv5>${region.nombre}</span> <span class="de-sidebar__region-desc" data-astro-cid-i4qmjdv5>${region.desc}</span> </li>`)} </ul> </div> <!-- 4. Estados Vecinos --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Estados Vecinos</h4> <ul class="de-sidebar__states" data-astro-cid-i4qmjdv5> ${estadosVecinos.map((estado2) => renderTemplate`<li data-astro-cid-i4qmjdv5> <a${addAttribute(`/directorio/${estado2.slug}`, "href")} data-astro-cid-i4qmjdv5> <span data-astro-cid-i4qmjdv5>${estado2.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-i4qmjdv5> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-i4qmjdv5></path> </svg> </a> </li>`)} </ul> </div> <!-- 5. CTA Cotización --> <div class="de-sidebar__card de-sidebar__card--cta" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>¿Equipas una Estación en ${sigla}?</h4> <p data-astro-cid-i4qmjdv5>Somos distribuidores de equipo certificado NFPA para cuerpos de bomberos en todo ${estado}</p> <a href="/cotizar" class="de-sidebar__cta-btn" data-astro-cid-i4qmjdv5>Solicitar Cotización</a> </div> <!-- 6. Equipo para Bomberos --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Equipo para Bomberos</h4> <ul class="de-sidebar__products" data-astro-cid-i4qmjdv5> <li data-astro-cid-i4qmjdv5><a href="/productos/trajes-para-bomberos" data-astro-cid-i4qmjdv5>Trajes Estructurales NFPA</a></li> <li data-astro-cid-i4qmjdv5><a href="/productos/cascos-para-bomberos" data-astro-cid-i4qmjdv5>Cascos de Bombero</a></li> <li data-astro-cid-i4qmjdv5><a href="/productos/guantes-para-bomberos" data-astro-cid-i4qmjdv5>Guantes para Bombero</a></li> <li data-astro-cid-i4qmjdv5><a href="/productos/botas-para-bomberos" data-astro-cid-i4qmjdv5>Botas para Bombero</a></li> </ul> <a href="/productos" class="de-sidebar__link" data-astro-cid-i4qmjdv5>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-i4qmjdv5> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-i4qmjdv5></path> </svg> </a> </div> <!-- 7. Volver al Directorio --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <a href="/directorio" class="de-sidebar__back" data-astro-cid-i4qmjdv5> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-i4qmjdv5> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-i4qmjdv5></path> </svg> <span data-astro-cid-i4qmjdv5>Ver todos los estados</span> </a> </div> <!-- 8. Contacto BOMBERO.MX --> <div class="de-sidebar__card" data-astro-cid-i4qmjdv5> <h4 data-astro-cid-i4qmjdv5>Contacto BOMBERO.MX</h4> <ul class="de-sidebar__contact" data-astro-cid-i4qmjdv5> <li data-astro-cid-i4qmjdv5><a href="tel:+525520780102" data-astro-cid-i4qmjdv5>55 2078 0102</a></li> <li data-astro-cid-i4qmjdv5><a href="https://wa.me/525520780102" data-astro-cid-i4qmjdv5>WhatsApp</a></li> <li data-astro-cid-i4qmjdv5><a href="mailto:ventas@bombero.mx" data-astro-cid-i4qmjdv5>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section>  <section class="de-epp" data-astro-cid-i4qmjdv5> <div class="container" data-astro-cid-i4qmjdv5> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "EPP Certificado NFPA", "title": "Completa tu Equipo de Protecci\xF3n", "data-astro-cid-i4qmjdv5": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-i4qmjdv5>El traje estructural NFPA 1971 trabaja como parte de un sistema. Distribuimos equipo certificado directamente a los cuerpos de bomberos de <strong data-astro-cid-i4qmjdv5>${estado}</strong>. Todos los equipos cumplen la misma edición de norma y están disponibles en stock inmediato.</p> <p data-astro-cid-i4qmjdv5>Desde cascos y guantes estructurales hasta equipos SCBA y extintores certificados NOM, cada pieza del catálogo está disponible para licitación gubernamental con ficha técnica y certificado de laboratorio incluidos.</p> ` })} <div class="de-epp__grid" data-astro-cid-i4qmjdv5> ${eppCardsCdn.map((card) => renderTemplate`<article class="de-epp__card" data-astro-cid-i4qmjdv5> <a${addAttribute(card.href, "href")} class="de-epp__card-image" data-astro-cid-i4qmjdv5> <img${addAttribute(card.image, "src")}${addAttribute(card.imageAlt, "alt")} width="400" height="260" loading="lazy" decoding="async" data-astro-cid-i4qmjdv5> <span class="de-epp__card-badge" data-astro-cid-i4qmjdv5>${card.badge}</span> </a> <div class="de-epp__card-content" data-astro-cid-i4qmjdv5> <h3 class="de-epp__card-title" data-astro-cid-i4qmjdv5>${card.title}</h3> <p class="de-epp__card-text" data-astro-cid-i4qmjdv5>${unescapeHTML(card.text)}</p> <a${addAttribute(card.href, "href")} class="de-epp__card-link" data-astro-cid-i4qmjdv5> ${card.linkLabel} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-i4qmjdv5> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-i4qmjdv5></path> </svg> </a> </div> </article>`)} </div> </div> </section>  ${renderComponent($$result2, "CTABanner", $$CTABanner, { "title": ctaTitle, "desc": ctaDesc, "btnText": ctaBtnText, "btnHref": ctaBtnHref, "whatsapp": true, "data-astro-cid-i4qmjdv5": true })} ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/LAYOUTS/DirectorioEstadoLayout.astro", void 0);

const estadosVecinos = {
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN NOROESTE
  // ═══════════════════════════════════════════════════════════════════════
  "baja-california": [
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Sonora", slug: "sonora" }
  ],
  "baja-california-sur": [
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" }
  ],
  "sonora": [
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Baja California Sur", slug: "baja-california-sur" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Sinaloa", slug: "sinaloa" }
  ],
  "chihuahua": [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Coahuila", slug: "coahuila" }
  ],
  "sinaloa": [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Nayarit", slug: "nayarit" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN NORESTE
  // ═══════════════════════════════════════════════════════════════════════
  "coahuila": [
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Nuevo León", slug: "nuevo-leon" }
  ],
  "nuevo-leon": [
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Zacatecas", slug: "zacatecas" }
  ],
  "tamaulipas": [
    { nombre: "Nuevo León", slug: "nuevo-leon" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN OCCIDENTE
  // ═══════════════════════════════════════════════════════════════════════
  "durango": [
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Sinaloa", slug: "sinaloa" }
  ],
  "zacatecas": [
    { nombre: "Durango", slug: "durango" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Nayarit", slug: "nayarit" }
  ],
  "nayarit": [
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" }
  ],
  "jalisco": [
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Colima", slug: "colima" }
  ],
  "aguascalientes": [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" }
  ],
  "colima": [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoacán", slug: "michoacan" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO-NORTE
  // ═══════════════════════════════════════════════════════════════════════
  "san-luis-potosi": [
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Coahuila", slug: "coahuila" },
    { nombre: "Nuevo León", slug: "nuevo-leon" },
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Aguascalientes", slug: "aguascalientes" }
  ],
  "guanajuato": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Querétaro", slug: "queretaro" }
  ],
  "queretaro": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Michoacán", slug: "michoacan" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO
  // ═══════════════════════════════════════════════════════════════════════
  "hidalgo": [
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Querétaro", slug: "queretaro" }
  ],
  "estado-de-mexico": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
    { nombre: "Tlaxcala", slug: "tlaxcala" },
    { nombre: "Puebla", slug: "puebla" }
  ],
  "ciudad-de-mexico": [
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" }
  ],
  "morelos": [
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Ciudad de México", slug: "ciudad-de-mexico" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Guerrero", slug: "guerrero" }
  ],
  "tlaxcala": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Estado de México", slug: "estado-de-mexico" }
  ],
  "puebla": [
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Guerrero", slug: "guerrero" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Tlaxcala", slug: "tlaxcala" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN CENTRO-OCCIDENTE
  // ═══════════════════════════════════════════════════════════════════════
  "michoacan": [
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Colima", slug: "colima" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Querétaro", slug: "queretaro" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Guerrero", slug: "guerrero" }
  ],
  "guerrero": [
    { nombre: "Michoacán", slug: "michoacan" },
    { nombre: "Estado de México", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Oaxaca", slug: "oaxaca" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN SUR
  // ═══════════════════════════════════════════════════════════════════════
  "oaxaca": [
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Guerrero", slug: "guerrero" }
  ],
  "chiapas": [
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Tabasco", slug: "tabasco" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN GOLFO
  // ═══════════════════════════════════════════════════════════════════════
  "veracruz": [
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "San Luis Potosí", slug: "san-luis-potosi" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Tabasco", slug: "tabasco" }
  ],
  "tabasco": [
    { nombre: "Veracruz", slug: "veracruz" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Campeche", slug: "campeche" }
  ],
  // ═══════════════════════════════════════════════════════════════════════
  // REGIÓN PENÍNSULA DE YUCATÁN
  // ═══════════════════════════════════════════════════════════════════════
  "campeche": [
    { nombre: "Tabasco", slug: "tabasco" },
    { nombre: "Yucatán", slug: "yucatan" },
    { nombre: "Quintana Roo", slug: "quintana-roo" }
  ],
  "yucatan": [
    { nombre: "Campeche", slug: "campeche" },
    { nombre: "Quintana Roo", slug: "quintana-roo" }
  ],
  "quintana-roo": [
    { nombre: "Yucatán", slug: "yucatan" },
    { nombre: "Campeche", slug: "campeche" }
  ]
};
function getEstadosVecinos(slug) {
  return estadosVecinos[slug] ?? [];
}

export { $$DirectorioEstadoLayout as $, getEstadosVecinos as g };
