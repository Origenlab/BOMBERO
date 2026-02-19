import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$PageLayout } from '../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../chunks/SectionHeader_BM8Ucdq5.mjs';
import { c as cdnW } from '../chunks/cdn_BlgyKQ2i.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const estados = [
    { name: "Aguascalientes", slug: "aguascalientes", abbr: "AGS", capital: "Aguascalientes", stations: 13 },
    { name: "Baja California", slug: "baja-california", abbr: "BC", capital: "Mexicali", stations: 22, featured: true },
    { name: "Baja California Sur", slug: "baja-california-sur", abbr: "BCS", capital: "La Paz", stations: 6 },
    { name: "Campeche", slug: "campeche", abbr: "CAM", capital: "Campeche", stations: 7 },
    { name: "Chiapas", slug: "chiapas", abbr: "CHIS", capital: "Tuxtla Guti\xE9rrez", stations: 18 },
    { name: "Chihuahua", slug: "chihuahua", abbr: "CHIH", capital: "Chihuahua", stations: 28, featured: true },
    { name: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico", abbr: "CDMX", capital: "Ciudad de M\xE9xico", stations: 16, featured: true },
    { name: "Coahuila", slug: "coahuila", abbr: "COAH", capital: "Saltillo", stations: 24 },
    { name: "Colima", slug: "colima", abbr: "COL", capital: "Colima", stations: 5 },
    { name: "Durango", slug: "durango", abbr: "DGO", capital: "Durango", stations: 12 },
    { name: "Estado de M\xE9xico", slug: "estado-de-mexico", abbr: "EDOMEX", capital: "Toluca", stations: 20, featured: true },
    { name: "Guanajuato", slug: "guanajuato", abbr: "GTO", capital: "Guanajuato", stations: 32, featured: true },
    { name: "Guerrero", slug: "guerrero", abbr: "GRO", capital: "Chilpancingo", stations: 15 },
    { name: "Hidalgo", slug: "hidalgo", abbr: "HGO", capital: "Pachuca", stations: 14 },
    { name: "Jalisco", slug: "jalisco", abbr: "JAL", capital: "Guadalajara", stations: 38, featured: true },
    { name: "Michoac\xE1n", slug: "michoacan", abbr: "MICH", capital: "Morelia", stations: 22 },
    { name: "Morelos", slug: "morelos", abbr: "MOR", capital: "Cuernavaca", stations: 16 },
    { name: "Nayarit", slug: "nayarit", abbr: "NAY", capital: "Tepic", stations: 14 },
    { name: "Nuevo Le\xF3n", slug: "nuevo-leon", abbr: "NL", capital: "Monterrey", stations: 18, featured: true },
    { name: "Oaxaca", slug: "oaxaca", abbr: "OAX", capital: "Oaxaca", stations: 16, featured: true },
    { name: "Puebla", slug: "puebla", abbr: "PUE", capital: "Puebla", stations: 18, featured: true },
    { name: "Quer\xE9taro", slug: "queretaro", abbr: "QRO", capital: "Quer\xE9taro", stations: 15, featured: true },
    { name: "Quintana Roo", slug: "quintana-roo", abbr: "QROO", capital: "Chetumal", stations: 17, featured: true },
    { name: "San Luis Potos\xED", slug: "san-luis-potosi", abbr: "SLP", capital: "San Luis Potos\xED", stations: 16, featured: true },
    { name: "Sinaloa", slug: "sinaloa", abbr: "SIN", capital: "Culiac\xE1n", stations: 18 },
    { name: "Sonora", slug: "sonora", abbr: "SON", capital: "Hermosillo", stations: 22 },
    { name: "Tabasco", slug: "tabasco", abbr: "TAB", capital: "Villahermosa", stations: 12 },
    { name: "Tamaulipas", slug: "tamaulipas", abbr: "TAMPS", capital: "Ciudad Victoria", stations: 20 },
    { name: "Tlaxcala", slug: "tlaxcala", abbr: "TLAX", capital: "Tlaxcala", stations: 6 },
    { name: "Veracruz", slug: "veracruz", abbr: "VER", capital: "Xalapa", stations: 28, featured: true },
    { name: "Yucat\xE1n", slug: "yucatan", abbr: "YUC", capital: "M\xE9rida", stations: 14 },
    { name: "Zacatecas", slug: "zacatecas", abbr: "ZAC", capital: "Zacatecas", stations: 10 }
  ];
  const totalEstaciones = estados.reduce((sum, e) => sum + e.stations, 0);
  const estadosDestacados = estados.filter((e) => e.featured);
  const regiones = [
    { name: "Norte", states: ["Baja California", "Sonora", "Chihuahua", "Coahuila", "Nuevo Le\xF3n", "Tamaulipas"] },
    { name: "Centro", states: ["Ciudad de M\xE9xico", "Estado de M\xE9xico", "Puebla", "Quer\xE9taro", "Guanajuato", "Hidalgo", "Morelos"] },
    { name: "Sur", states: ["Oaxaca", "Chiapas", "Guerrero", "Veracruz", "Tabasco"] },
    { name: "Occidente", states: ["Jalisco", "Michoac\xE1n", "Colima", "Nayarit", "Sinaloa"] }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Directorio de Estaciones de Bomberos en M\xE9xico | BOMBERO.MX", "description": "Directorio completo de estaciones de bomberos en los 32 estados de M\xE9xico. Encuentra tel\xE9fonos de emergencia, direcciones y contacto de tu cuerpo de bomberos local. Informaci\xF3n verificada.", "data-astro-cid-7xm65fjf": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="dir-hero" data-astro-cid-7xm65fjf> <div class="dir-hero__bg" data-astro-cid-7xm65fjf> <div class="dir-hero__gradient" data-astro-cid-7xm65fjf></div> <div class="dir-hero__grid-pattern" data-astro-cid-7xm65fjf></div> </div> <div class="container" data-astro-cid-7xm65fjf> <div class="dir-hero__container" data-astro-cid-7xm65fjf> <!-- Left Column --> <div class="dir-hero__content" data-astro-cid-7xm65fjf> <span class="dir-hero__badge" data-astro-cid-7xm65fjf> <span class="dir-hero__badge-dot" data-astro-cid-7xm65fjf></span>
Directorio Nacional
</span> <h1 class="dir-hero__title" data-astro-cid-7xm65fjf>
Estaciones de Bomberos en
<span class="dir-hero__highlight" data-astro-cid-7xm65fjf>México</span> </h1> <p class="dir-hero__desc" data-astro-cid-7xm65fjf>
El directorio más completo de <strong data-astro-cid-7xm65fjf>estaciones de bomberos</strong> en la República Mexicana.
            Encuentra información de contacto, teléfonos de emergencia y ubicación de los
<strong data-astro-cid-7xm65fjf>H. Cuerpos de Bomberos</strong> en los 32 estados.
</p> <div class="dir-hero__stats" data-astro-cid-7xm65fjf> <div class="dir-hero__stat" data-astro-cid-7xm65fjf> <span class="dir-hero__stat-number" data-astro-cid-7xm65fjf>32</span> <span class="dir-hero__stat-label" data-astro-cid-7xm65fjf>Estados</span> </div> <div class="dir-hero__stat" data-astro-cid-7xm65fjf> <span class="dir-hero__stat-number" data-astro-cid-7xm65fjf>${totalEstaciones}+</span> <span class="dir-hero__stat-label" data-astro-cid-7xm65fjf>Estaciones</span> </div> <div class="dir-hero__stat" data-astro-cid-7xm65fjf> <span class="dir-hero__stat-number" data-astro-cid-7xm65fjf>24/7</span> <span class="dir-hero__stat-label" data-astro-cid-7xm65fjf>Emergencias</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="dir-hero__seo" data-astro-cid-7xm65fjf> <div class="dir-hero__seo-block" data-astro-cid-7xm65fjf> <h2 class="dir-hero__seo-title" data-astro-cid-7xm65fjf>El Directorio de Bomberos Más Completo de México</h2> <p class="dir-hero__seo-text" data-astro-cid-7xm65fjf>
En <strong data-astro-cid-7xm65fjf>BOMBERO.MX</strong> hemos desarrollado la base de datos más completa y actualizada de
<strong data-astro-cid-7xm65fjf>estaciones de bomberos en México</strong>. Nuestro directorio incluye información verificada
              de los <strong data-astro-cid-7xm65fjf>H. Cuerpos de Bomberos</strong> en cada uno de los 32 estados: <strong data-astro-cid-7xm65fjf>Ciudad de México,
              Monterrey, Guadalajara, Puebla, Tijuana, León, Cancún, Mérida, Querétaro</strong> y todas las
              entidades federativas del país.
</p> </div> <div class="dir-hero__seo-block" data-astro-cid-7xm65fjf> <h2 class="dir-hero__seo-title" data-astro-cid-7xm65fjf>Información de Emergencia al Alcance de Todos</h2> <p class="dir-hero__seo-text" data-astro-cid-7xm65fjf>
Cada ficha incluye <strong data-astro-cid-7xm65fjf>teléfonos de emergencia locales</strong>, dirección física, horarios de
              atención y servicios especializados: rescate vehicular, atención de incendios estructurales,
<strong data-astro-cid-7xm65fjf>materiales peligrosos (HAZMAT)</strong>, rescate acuático y servicios pre-hospitalarios.
              Un <strong data-astro-cid-7xm65fjf>servicio gratuito</strong> para facilitar el acceso a los servicios de emergencia en
              todo el territorio nacional.
</p> </div> </div> </div> </div> </section>  <section class="dir-main" data-astro-cid-7xm65fjf> <div class="container" data-astro-cid-7xm65fjf> <div class="dir-main__grid" data-astro-cid-7xm65fjf> <!-- Estados Grid --> <div class="dir-main__content" data-astro-cid-7xm65fjf> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "32 Estados", "title": "Selecciona tu Estado", "description": "Haz clic en cualquier estado para ver el directorio completo de estaciones de bomberos, tel\xE9fonos de emergencia y ubicaciones.", "data-astro-cid-7xm65fjf": true })} <div class="dir-states" data-astro-cid-7xm65fjf> ${estados.map((estado) => renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")}${addAttribute(`dir-state ${estado.featured ? "dir-state--featured" : ""}`, "class")} data-astro-cid-7xm65fjf> <div class="dir-state__abbr" data-astro-cid-7xm65fjf>${estado.abbr}</div> <div class="dir-state__info" data-astro-cid-7xm65fjf> <h3 class="dir-state__name" data-astro-cid-7xm65fjf>${estado.name}</h3> <p class="dir-state__meta" data-astro-cid-7xm65fjf> <span class="dir-state__capital" data-astro-cid-7xm65fjf>${estado.capital}</span> <span class="dir-state__stations" data-astro-cid-7xm65fjf>${estado.stations} estaciones</span> </p> </div> <div class="dir-state__arrow" data-astro-cid-7xm65fjf> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-7xm65fjf> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-7xm65fjf></path> </svg> </div> </a>`)} </div> <!-- SEO Content --> <div class="dir-seo" data-astro-cid-7xm65fjf> <h2 data-astro-cid-7xm65fjf>Directorio Nacional de Bomberos de México</h2> <p data-astro-cid-7xm65fjf> <strong data-astro-cid-7xm65fjf>BOMBERO.MX</strong> presenta el directorio más completo y actualizado de
<strong data-astro-cid-7xm65fjf>estaciones de bomberos en México</strong>. Nuestra base de datos incluye información
              verificada de los <strong data-astro-cid-7xm65fjf>H. Cuerpos de Bomberos</strong> en cada uno de los 32 estados de la
              República Mexicana: <strong data-astro-cid-7xm65fjf>Ciudad de México, Jalisco, Nuevo León, Estado de México, Veracruz,
              Puebla, Guanajuato, Chihuahua</strong> y todas las entidades federativas.
</p> <p data-astro-cid-7xm65fjf>
Cada ficha de estación incluye: <strong data-astro-cid-7xm65fjf>teléfonos de emergencia locales</strong>, dirección física,
              horarios de atención, servicios especializados (rescate vehicular, HAZMAT, rescate acuático,
              atención pre-hospitalaria) y datos de contacto directo. Este directorio es un <strong data-astro-cid-7xm65fjf>servicio
              gratuito para la comunidad</strong> mexicana que busca facilitar el acceso a los servicios de
              emergencia en todo el país.
</p> <h3 data-astro-cid-7xm65fjf>¿Por qué es importante conocer tu estación de bomberos local?</h3> <p data-astro-cid-7xm65fjf>
Los <strong data-astro-cid-7xm65fjf>bomberos de México</strong> son héroes que arriesgan su vida para proteger a la ciudadanía.
              Conocer la ubicación y teléfono de tu <strong data-astro-cid-7xm65fjf>estación de bomberos más cercana</strong> puede marcar
              la diferencia en una emergencia. Además de atender incendios, los cuerpos de bomberos ofrecen servicios
              de <strong data-astro-cid-7xm65fjf>rescate, atención de fugas de gas, retiro de enjambres, rescate de personas atrapadas</strong>
y muchos otros servicios vitales para la comunidad.
</p> </div> </div> <!-- Sidebar --> <aside class="dir-sidebar" data-astro-cid-7xm65fjf> <!-- Estados Destacados --> <div class="dir-sidebar__card" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>Estados Más Buscados</h4> <ul class="dir-sidebar__list" data-astro-cid-7xm65fjf> ${estadosDestacados.map((estado) => renderTemplate`<li data-astro-cid-7xm65fjf> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-7xm65fjf> <span class="dir-sidebar__bullet" data-astro-cid-7xm65fjf></span> <span class="dir-sidebar__state-name" data-astro-cid-7xm65fjf>${estado.name}</span> <span class="dir-sidebar__state-count" data-astro-cid-7xm65fjf>${estado.stations}</span> </a> </li>`)} </ul> </div> <!-- Regiones --> <div class="dir-sidebar__card" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>Buscar por Región</h4> <div class="dir-sidebar__regions" data-astro-cid-7xm65fjf> ${regiones.map((region) => renderTemplate`<div class="dir-sidebar__region" data-astro-cid-7xm65fjf> <h5 data-astro-cid-7xm65fjf>${region.name}</h5> <div class="dir-sidebar__region-states" data-astro-cid-7xm65fjf> ${region.states.map((stateName) => {
    const estado = estados.find((e) => e.name === stateName);
    return estado ? renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-7xm65fjf>${estado.abbr}</a>` : null;
  })} </div> </div>`)} </div> </div> <!-- Emergencias --> <div class="dir-sidebar__card dir-sidebar__card--emergency" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>Números de Emergencia</h4> <div class="dir-sidebar__emergency" data-astro-cid-7xm65fjf> <div class="dir-sidebar__emergency-item" data-astro-cid-7xm65fjf> <span class="dir-sidebar__emergency-number" data-astro-cid-7xm65fjf>911</span> <span class="dir-sidebar__emergency-label" data-astro-cid-7xm65fjf>Emergencias Nacional</span> </div> <div class="dir-sidebar__emergency-item" data-astro-cid-7xm65fjf> <span class="dir-sidebar__emergency-number" data-astro-cid-7xm65fjf>068</span> <span class="dir-sidebar__emergency-label" data-astro-cid-7xm65fjf>Bomberos (algunas ciudades)</span> </div> </div> <p class="dir-sidebar__emergency-note" data-astro-cid-7xm65fjf>
En caso de emergencia, llama inmediatamente al <strong data-astro-cid-7xm65fjf>911</strong>.
              Es el número único de emergencias en toda la República Mexicana.
</p> </div> <!-- CTA Equipamiento --> <div class="dir-sidebar__card dir-sidebar__card--cta" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>¿Eres Bombero?</h4> <p data-astro-cid-7xm65fjf>Equipamos a estaciones de bomberos en los 32 estados con equipo certificado NFPA</p> <a href="/cotizar" class="dir-sidebar__cta-btn" data-astro-cid-7xm65fjf>Solicitar Cotización</a> </div> <!-- Links Útiles --> <div class="dir-sidebar__card" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>Explora Nuestro Sitio</h4> <ul class="dir-sidebar__links" data-astro-cid-7xm65fjf> <li data-astro-cid-7xm65fjf><a href="/productos/trajes-para-bomberos" data-astro-cid-7xm65fjf>Trajes de Bombero</a></li> <li data-astro-cid-7xm65fjf><a href="/productos/cascos-para-bomberos" data-astro-cid-7xm65fjf>Cascos Certificados</a></li> <li data-astro-cid-7xm65fjf><a href="/productos/scba" data-astro-cid-7xm65fjf>Equipos SCBA</a></li> <li data-astro-cid-7xm65fjf><a href="/productos/botas-para-bomberos" data-astro-cid-7xm65fjf>Botas de Bombero</a></li> <li data-astro-cid-7xm65fjf><a href="/productos/guantes-para-bomberos" data-astro-cid-7xm65fjf>Guantes de Protección</a></li> <li data-astro-cid-7xm65fjf><a href="/#preguntas-frecuentes" data-astro-cid-7xm65fjf>Preguntas Frecuentes</a></li> </ul> </div> <!-- Contacto --> <div class="dir-sidebar__card" data-astro-cid-7xm65fjf> <h4 data-astro-cid-7xm65fjf>Contacto BOMBERO.MX</h4> <ul class="dir-sidebar__contact" data-astro-cid-7xm65fjf> <li data-astro-cid-7xm65fjf> <a href="tel:+525520780102" data-astro-cid-7xm65fjf>55 2078 0102</a> </li> <li data-astro-cid-7xm65fjf> <a href="https://wa.me/525520780102" data-astro-cid-7xm65fjf>WhatsApp</a> </li> <li data-astro-cid-7xm65fjf> <a href="mailto:ventas@bombero.mx" data-astro-cid-7xm65fjf>ventas@bombero.mx</a> </li> </ul> <address class="dir-sidebar__address" data-astro-cid-7xm65fjf>
Av. Tamaulipas 150, Piso 13<br data-astro-cid-7xm65fjf>
Col. Condesa, Cuauhtémoc<br data-astro-cid-7xm65fjf>
06140 CDMX
</address> </div> </aside> </div> </div> </section>  <section class="dir-gallery" data-astro-cid-7xm65fjf> <div class="container" data-astro-cid-7xm65fjf> <div class="dir-gallery__header" data-astro-cid-7xm65fjf> <h2 class="dir-gallery__title" data-astro-cid-7xm65fjf>Bomberos de México en Acción</h2> <p class="dir-gallery__desc" data-astro-cid-7xm65fjf>Estaciones equipadas, vehículos de emergencia y personal especializado al servicio de la ciudadanía</p> </div> <div class="dir-gallery__grid" data-astro-cid-7xm65fjf> <div class="dir-gallery__item dir-gallery__item--large" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/estacion-bomberos-mexico-fachada-01.avif", 800), "src")} alt="Estación de bomberos México fachada - instalaciones profesionales" width="800" height="450" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Estaciones Modernas</span> <p data-astro-cid-7xm65fjf>Instalaciones equipadas en los 32 estados</p> </div> </div> <div class="dir-gallery__item" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/camion-bomberos-autobomba-urbana-01.avif", 400), "src")} alt="Camión de bomberos autobomba urbana - vehículo de emergencias" width="400" height="280" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Flota Vehicular</span> <p data-astro-cid-7xm65fjf>Autobombas y vehículos especializados</p> </div> </div> <div class="dir-gallery__item" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", 400), "src")} alt="Equipo HAZMAT materiales peligrosos bomberos - protección especializada" width="400" height="280" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Unidades HAZMAT</span> <p data-astro-cid-7xm65fjf>Protocolos para materiales peligrosos</p> </div> </div> <div class="dir-gallery__item" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/rescate-acuatico-bomberos-01.avif", 400), "src")} alt="Rescate acuático bomberos - operaciones de rescate en agua" width="400" height="280" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Rescate Acuático</span> <p data-astro-cid-7xm65fjf>Especialistas en operaciones acuáticas</p> </div> </div> <div class="dir-gallery__item" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", 400), "src")} alt="Bomberos en emergencia incendio estructural - combate activo" width="400" height="280" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Combate de Incendios</span> <p data-astro-cid-7xm65fjf>Respuesta inmediata 24/7</p> </div> </div> <div class="dir-gallery__item" data-astro-cid-7xm65fjf> <img${addAttribute(cdnW("/images/directorio/capacitacion-bomberos-profesional-01.avif", 400), "src")} alt="Capacitación de bomberos profesional - formación especializada" width="400" height="280" loading="lazy" decoding="async" data-astro-cid-7xm65fjf> <div class="dir-gallery__caption" data-astro-cid-7xm65fjf> <span data-astro-cid-7xm65fjf>Capacitación Continua</span> <p data-astro-cid-7xm65fjf>Formación y certificación NFPA</p> </div> </div> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/index.astro";
const $$url = "/directorio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
