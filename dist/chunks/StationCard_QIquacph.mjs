import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                  */

const $$Astro = createAstro("https://bombero.mx");
const $$StationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

export { $$StationCard as $ };
