import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import 'clsx';
import { c as cdnW } from './cdn_BlgyKQ2i.mjs';
/* empty css                         */

const $$Astro = createAstro("https://bombero.mx");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    nombre,
    slug,
    badge,
    badgeColor,
    imagen = null,
    descripcion,
    caracteristicas,
    aplicacion,
    altSuffix = "Equipo de bombero certificado",
    placeholderPaths = [
      "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
      "m9 12 2 2 4-4"
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="producto-card" data-astro-cid-tjdfhdqb> <div class="producto-card__image" data-astro-cid-tjdfhdqb> ${imagen ? renderTemplate`<img${addAttribute(cdnW(imagen, 600), "src")}${addAttribute(`${nombre} - ${altSuffix}`, "alt")} loading="lazy" width="600" height="450" data-astro-cid-tjdfhdqb>` : renderTemplate`<div class="producto-card__placeholder" data-astro-cid-tjdfhdqb> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" data-astro-cid-tjdfhdqb> ${placeholderPaths.map((d) => renderTemplate`<path${addAttribute(d, "d")} data-astro-cid-tjdfhdqb></path>`)} </svg> </div>`} <span${addAttribute(`producto-card__badge producto-card__badge--${badgeColor}`, "class")} data-astro-cid-tjdfhdqb> ${badge} </span> </div> <div class="producto-card__content" data-astro-cid-tjdfhdqb> <h3 class="producto-card__title" data-astro-cid-tjdfhdqb>${nombre}</h3> <p class="producto-card__desc" data-astro-cid-tjdfhdqb>${descripcion}</p> <ul class="producto-card__features" data-astro-cid-tjdfhdqb> ${caracteristicas.map((c) => renderTemplate`<li data-astro-cid-tjdfhdqb>${c}</li>`)} </ul> <p class="producto-card__app" data-astro-cid-tjdfhdqb> <span class="producto-card__app-label" data-astro-cid-tjdfhdqb>Aplicación:</span> ${aplicacion} </p> <a${addAttribute(slug, "href")} class="producto-card__btn" data-astro-cid-tjdfhdqb> <span data-astro-cid-tjdfhdqb>Ver Especificaciones</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-tjdfhdqb> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-tjdfhdqb></path> </svg> </a> </div> </article> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/ProductCard.astro", void 0);

export { $$ProductCard as $ };
