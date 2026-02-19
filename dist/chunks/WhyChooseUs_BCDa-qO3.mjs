import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$SectionHeader } from './SectionHeader_BM8Ucdq5.mjs';
/* empty css                         */

const $$Astro = createAstro("https://bombero.mx");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const {
    title,
    badge,
    items = [],
    href,
    buttonText,
    icon = "shield",
    image,
    description
  } = Astro2.props;
  const icons = {
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
    helmet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3"/></svg>`,
    boot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 21h10"/><path d="M12 21V11"/><path d="M6 11V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6"/><path d="M5 11h14l-2 10H7l-2-10z"/></svg>`,
    glove: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
    hood: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="5"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg>`,
    goggles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M10 12h4"/><path d="M2 12h0"/><path d="M22 12h0"/></svg>`,
    certificate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    headphones: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  };
  return renderTemplate`${maybeRenderHead()}<article class="category-card" data-astro-cid-d242pyyr> <div class="category-card__image" data-astro-cid-d242pyyr> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} width="400" height="300" loading="lazy" decoding="async" data-astro-cid-d242pyyr>` : renderTemplate`<div class="category-card__placeholder" data-astro-cid-d242pyyr> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(icons[icon] || icons.shield)}` })} <span data-astro-cid-d242pyyr>Imagen próximamente</span> </div>`} ${badge && renderTemplate`<span class="category-card__badge" data-astro-cid-d242pyyr>${badge}</span>`} </div> <div class="category-card__content" data-astro-cid-d242pyyr> <h3 class="category-card__title" data-astro-cid-d242pyyr>${title}</h3> ${description && renderTemplate`<p class="category-card__description" data-astro-cid-d242pyyr>${description}</p>`} ${items.length > 0 && renderTemplate`<ul class="category-card__list" data-astro-cid-d242pyyr> ${items.map((item) => renderTemplate`<li data-astro-cid-d242pyyr> <a${addAttribute(item.href, "href")} data-astro-cid-d242pyyr>${item.label}</a> </li>`)} </ul>`} ${href && buttonText && renderTemplate`<a${addAttribute(href, "href")} class="category-card__btn" data-astro-cid-d242pyyr> <span data-astro-cid-d242pyyr>${buttonText}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-d242pyyr> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-d242pyyr></path> </svg> </a>`} </div> </article> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/CategoryCard.astro", void 0);

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="why-choose" id="por-que-elegirnos" data-astro-cid-fcgrrunm> <div class="container" data-astro-cid-fcgrrunm> <!-- Header --> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "label": "Por qu\xE9 confiar en BOMBERO.MX", "title": "Tu Proveedor de Equipo para Bomberos en M\xE9xico", "description": "Distribuidor especializado en equipo de protecci\xF3n personal para bomberos con cobertura nacional, asesor\xEDa t\xE9cnica y disponibilidad inmediata de las mejores marcas del mundo.", "data-astro-cid-fcgrrunm": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-fcgrrunm>
La selección de un proveedor de <strong data-astro-cid-fcgrrunm>equipo para bomberos</strong> impacta directamente en la seguridad
        del personal de primera respuesta. En <strong data-astro-cid-fcgrrunm>BOMBERO.MX</strong> combinamos la distribución de las
        marcas líderes mundiales —MSA, Honeywell, Globe, Bullard— con conocimiento técnico del mercado mexicano.
</p> <p data-astro-cid-fcgrrunm>
Operamos desde Ciudad de México con capacidad de envío a los <strong data-astro-cid-fcgrrunm>32 estados de la República</strong>.
        Nuestro inventario permanente reduce tiempos de entrega, mientras que el equipo técnico proporciona
        asesoría personalizada para equipar estaciones de bomberos, brigadas industriales y unidades de
        protección civil de cualquier tamaño.
</p> ` })} <!-- Features Grid --> <div class="why-choose__grid" data-astro-cid-fcgrrunm> ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Experiencia Comprobada", "icon": "certificate", "description": "M\xE1s de 500 estaciones de bomberos equipadas en M\xE9xico. Proveedor de confianza para Protecci\xF3n Civil estatal, brigadas de PEMEX, CFE y empresas del sector industrial. Casos de \xE9xito documentados y referencias verificables.", "data-astro-cid-fcgrrunm": true })} ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Marcas L\xEDderes Mundiales", "icon": "shield", "description": "Distribuidores autorizados de MSA, Honeywell, Globe, Bullard, Cairns, Lion y Holmatro. Equipos de protecci\xF3n personal fabricados bajo los m\xE1s altos est\xE1ndares internacionales. Autenticidad garantizada con n\xFAmeros de serie verificables.", "data-astro-cid-fcgrrunm": true })} ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Asesor\xEDa T\xE9cnica Gratuita", "icon": "headphones", "description": "Especialistas certificados en normativa NFPA y equipamiento contra incendios. Elaboramos especificaciones t\xE9cnicas, comparativos de productos y recomendaciones personalizadas seg\xFAn el tipo de riesgo. Apoyo en procesos de licitaci\xF3n p\xFAblica.", "data-astro-cid-fcgrrunm": true })} ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Stock Permanente", "icon": "clock", "description": "Inventario activo de los productos m\xE1s demandados: trajes estructurales, cascos, guantes, botas y SCBA en tallas est\xE1ndar. Disponibilidad inmediata sin tiempos de espera. Equipos especializados bajo pedido con tiempos garantizados.", "data-astro-cid-fcgrrunm": true })} ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Log\xEDstica Nacional", "icon": "truck", "description": "Red de distribuci\xF3n optimizada para equipo contra incendios. Entregas coordinadas directamente en estaciones, dependencias gubernamentales e instalaciones industriales. Embalaje especializado y seguro de env\xEDo incluido.", "data-astro-cid-fcgrrunm": true })} ${renderComponent($$result, "CategoryCard", $$CategoryCard, { "title": "Ejecutivo de Cuenta Asignado", "icon": "users", "description": "Un solo contacto para todas tus necesidades. Seguimiento personalizado desde la cotizaci\xF3n hasta la entrega. Recordatorios de mantenimiento, renovaci\xF3n de equipos y acceso prioritario a nuevos productos y promociones.", "data-astro-cid-fcgrrunm": true })} </div> </div> </section> `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/components/WhyChooseUs.astro", void 0);

export { $$CategoryCard as $, $$WhyChooseUs as a };
