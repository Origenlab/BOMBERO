import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesSinaloa } from '../../chunks/estaciones-sinaloa_CRVbGtV3.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Sinaloa = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Sonora", slug: "sonora" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Durango", slug: "durango" },
    { nombre: "Nayarit", slug: "nayarit" }
  ];
  const keywords = [
    "bomberos sinaloa",
    "estaciones bomberos culiacan",
    "bomberos mazatlan",
    "emergencias sinaloa 911",
    "bomberos los mochis",
    "cuerpo bomberos sinaloa",
    "bomberos puerto mazatlan",
    "rescate acuatico sinaloa",
    "bomberos agroexportacion"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Sinaloa", url: "/directorio/sinaloa" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Sinaloa, Mexico",
    "description": "Directorio oficial de las 20 estaciones de bomberos en Sinaloa. Telefonos de emergencia en Culiacan, Mazatlan, Los Mochis, Guasave y todo el estado. Puerto de Mazatlan, agroexportacion y zona de huracanes. Emergencias 911.",
    "numberOfItems": estacionesSinaloa.length,
    "itemListElement": estacionesSinaloa.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Sinaloa",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/sinaloa/${e.slug}`
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Bomberos en Sinaloa | 20 Estaciones | Directorio Oficial BOMBERO.MX", "description": "Directorio oficial de las 20 estaciones de bomberos en Sinaloa. Telefonos de emergencia en Culiacan, Mazatlan, Los Mochis, Guasave y todo el estado. Puerto de Mazatlan, agroexportacion y zona de huracanes. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/sinaloa", "jsonLd": [breadcrumbSchema, itemListSchema], "data-astro-cid-sbhnlk3m": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="sin-hero" data-astro-cid-sbhnlk3m> <div class="sin-hero__bg" data-astro-cid-sbhnlk3m> <div class="sin-hero__gradient" data-astro-cid-sbhnlk3m></div> <div class="sin-hero__pattern" data-astro-cid-sbhnlk3m></div> </div> <div class="container" data-astro-cid-sbhnlk3m> <div class="sin-hero__container" data-astro-cid-sbhnlk3m> <!-- Left Column --> <div class="sin-hero__content" data-astro-cid-sbhnlk3m> <nav class="sin-hero__breadcrumb" data-astro-cid-sbhnlk3m> <a href="/" data-astro-cid-sbhnlk3m>Inicio</a> <span data-astro-cid-sbhnlk3m>/</span> <a href="/directorio" data-astro-cid-sbhnlk3m>Directorio</a> <span data-astro-cid-sbhnlk3m>/</span> <span data-astro-cid-sbhnlk3m>Sinaloa</span> </nav> <span class="sin-hero__badge" data-astro-cid-sbhnlk3m> <span class="sin-hero__badge-dot" data-astro-cid-sbhnlk3m></span>
SIN
</span> <h1 class="sin-hero__title" data-astro-cid-sbhnlk3m>
Estaciones de Bomberos en
<span class="sin-hero__highlight" data-astro-cid-sbhnlk3m>Sinaloa</span> </h1> <p class="sin-hero__desc" data-astro-cid-sbhnlk3m>
Directorio completo del <strong data-astro-cid-sbhnlk3m>H. Cuerpo de Bomberos de Sinaloa</strong>.
            Encuentra teléfonos de emergencia, direcciones y servicios de todas las estaciones en el estado lider en agroexportacion y sede del Puerto de Mazatlan.
</p> <div class="sin-hero__stats" data-astro-cid-sbhnlk3m> <div class="sin-hero__stat" data-astro-cid-sbhnlk3m> <span class="sin-hero__stat-number" data-astro-cid-sbhnlk3m>${estacionesSinaloa.length}</span> <span class="sin-hero__stat-label" data-astro-cid-sbhnlk3m>Estaciones</span> </div> <div class="sin-hero__stat" data-astro-cid-sbhnlk3m> <span class="sin-hero__stat-number" data-astro-cid-sbhnlk3m>${municipios.length}</span> <span class="sin-hero__stat-label" data-astro-cid-sbhnlk3m>Municipios</span> </div> <div class="sin-hero__stat" data-astro-cid-sbhnlk3m> <span class="sin-hero__stat-number" data-astro-cid-sbhnlk3m>24/7</span> <span class="sin-hero__stat-label" data-astro-cid-sbhnlk3m>Servicio</span> </div> <div class="sin-hero__stat" data-astro-cid-sbhnlk3m> <span class="sin-hero__stat-number" data-astro-cid-sbhnlk3m>3M+</span> <span class="sin-hero__stat-label" data-astro-cid-sbhnlk3m>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="sin-hero__seo" data-astro-cid-sbhnlk3m> <h2 class="sin-hero__seo-title" data-astro-cid-sbhnlk3m>H. Cuerpo de Bomberos de Sinaloa</h2> <p class="sin-hero__seo-text" data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>Sinaloa</strong> es el estado <strong data-astro-cid-sbhnlk3m>numero uno en agroexportacion de Mexico</strong>, con mas de
<strong data-astro-cid-sbhnlk3m>3 millones de habitantes</strong> distribuidos en 18 municipios. Culiacan, la capital, coordina
            operaciones de emergencia para un estado que exporta <strong data-astro-cid-sbhnlk3m>tomate, pepino, chile y hortalizas</strong>
a mercados de Norteamerica y Europa, con riesgos especificos en bodegas y campos agricolas.
</p> <h2 class="sin-hero__seo-title" data-astro-cid-sbhnlk3m>Puerto de Mazatlan y Costa del Pacifico</h2> <p class="sin-hero__seo-text" data-astro-cid-sbhnlk3m> <strong data-astro-cid-sbhnlk3m>Mazatlan</strong> es el principal puerto del Pacifico mexicano y uno de los destinos turisticos
            mas importantes del pais, con su famosa <strong data-astro-cid-sbhnlk3m>Zona Dorada</strong>. La temporada de huracanes
            (junio a noviembre) representa un riesgo elevado para la franja costera, por lo que los bomberos
            cuentan con <strong data-astro-cid-sbhnlk3m>capacitacion especializada en rescate naval y proteccion civil ante ciclones</strong>.
</p> </div> </div> </div> </section>  <section class="sin-emergency" data-astro-cid-sbhnlk3m> <div class="container" data-astro-cid-sbhnlk3m> <div class="sin-emergency__content" data-astro-cid-sbhnlk3m> <div class="sin-emergency__icon" data-astro-cid-sbhnlk3m> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sbhnlk3m> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-sbhnlk3m></path> </svg> </div> <div class="sin-emergency__text" data-astro-cid-sbhnlk3m> <span class="sin-emergency__label" data-astro-cid-sbhnlk3m>Emergencias en Sinaloa</span> <span class="sin-emergency__number" data-astro-cid-sbhnlk3m>911</span> </div> <p class="sin-emergency__desc" data-astro-cid-sbhnlk3m>
Número único de emergencias en todo Sinaloa. Para Culiacan tambien: 667 715 8311. Para Mazatlan: 669 982 0800.
</p> </div> </div> </section>  <section class="sin-main" data-astro-cid-sbhnlk3m> <div class="container" data-astro-cid-sbhnlk3m> <div class="sin-main__grid" data-astro-cid-sbhnlk3m> <!-- Stations Grid --> <div class="sin-main__content" data-astro-cid-sbhnlk3m> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Sinaloa", "description": "Informaci\xF3n de contacto actualizada de todas las estaciones del H. Cuerpo de Bomberos en Sinaloa. Selecciona una estaci\xF3n para ver sus datos de contacto, servicios y zonas de cobertura.", "data-astro-cid-sbhnlk3m": true })} <!-- Stations Grid --> <div class="sin-stations-grid" data-astro-cid-sbhnlk3m> ${estacionesSinaloa.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/sinaloa", "data-astro-cid-sbhnlk3m": true })}`)} </div> <!-- SEO Content --> <div class="sin-seo" data-astro-cid-sbhnlk3m> <h2 data-astro-cid-sbhnlk3m>El H. Cuerpo de Bomberos de Sinaloa</h2> <p data-astro-cid-sbhnlk3m>
El <strong data-astro-cid-sbhnlk3m>H. Cuerpo de Bomberos de Sinaloa</strong> es la institución encargada de
              el medio ambiente y el patrimonio de los mas de <strong data-astro-cid-sbhnlk3m>3 millones de sinaloenses</strong>.
              Con presencia en los 18 municipios del estado, los bomberos atienden emergencias las
<strong data-astro-cid-sbhnlk3m>24 horas del dia, los 365 dias del ano</strong>, en una entidad que combina una
              potente industria agroexportadora con un extenso litoral pacifico.
</p> <h3 data-astro-cid-sbhnlk3m>¿Como contactar a los bomberos en Sinaloa?</h3> <p data-astro-cid-sbhnlk3m>
En caso de <strong data-astro-cid-sbhnlk3m>emergencia en Sinaloa</strong>, marca el <strong data-astro-cid-sbhnlk3m>911</strong> desde cualquier
              telefono. Este numero conecta con el <strong data-astro-cid-sbhnlk3m>C5 de Sinaloa</strong> que coordina la respuesta de
              bomberos, policia y servicios medicos. Tambien puedes comunicarte directamente a la estacion mas
              cercana usando los telefonos de este directorio. Bomberos Culiacan: <strong data-astro-cid-sbhnlk3m>667 715 8311</strong>,
              Bomberos Mazatlan: <strong data-astro-cid-sbhnlk3m>669 982 0800</strong>, Bomberos Los Mochis: <strong data-astro-cid-sbhnlk3m>668 815 7050</strong>.
</p> <h3 data-astro-cid-sbhnlk3m>Riesgos Especificos en Sinaloa</h3> <p data-astro-cid-sbhnlk3m>
Sinaloa presenta riesgos multiples y diferenciados: <strong data-astro-cid-sbhnlk3m>incendios agricolas</strong> en campos
              de tomate, chile y hortalizas durante la cosecha; <strong data-astro-cid-sbhnlk3m>huracanes del Pacifico</strong> (temporada
              junio-noviembre) que amenazan la costa y el Puerto de Mazatlan; <strong data-astro-cid-sbhnlk3m>emergencias industriales
              y portuarias</strong> en los corredores de agroexportacion y terminales maritimas; <strong data-astro-cid-sbhnlk3m>incendios
              forestales</strong> en la Sierra Madre Occidental (Badiraguato, Choix, Cosala); y <strong data-astro-cid-sbhnlk3m>rescates
              en carretera</strong> en la Carretera Internacional Mexico 15.
</p> <h3 data-astro-cid-sbhnlk3m>Servicios de los Bomberos Aguascalentenses</h3> <p data-astro-cid-sbhnlk3m>
Los bomberos de Sinaloa estan capacitados para atender:
<strong data-astro-cid-sbhnlk3m>incendios estructurales e industriales</strong>;
<strong data-astro-cid-sbhnlk3m>HAZMAT agroindustrial</strong> en bodegas y empacadoras;
<strong data-astro-cid-sbhnlk3m>rescate acuatico</strong> en playas, puertos y lagunas costeras;
<strong data-astro-cid-sbhnlk3m>proteccion civil ante huracanes</strong> en toda la franja costera;
<strong data-astro-cid-sbhnlk3m>rescate en sierra</strong> y zonas de dificil acceso;
<strong data-astro-cid-sbhnlk3m>emergencias portuarias</strong> en Mazatlan y puertos pesqueros;
<strong data-astro-cid-sbhnlk3m>rescate turistico</strong> en Pueblos Magicos y el Tren Chepe; y muchos otros servicios.
</p> </div> </div> <!-- Sidebar --> <aside class="sin-sidebar" data-astro-cid-sbhnlk3m> <!-- Quick Access --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Filtrar por Municipio</h4> <ul class="sin-sidebar__municipios" data-astro-cid-sbhnlk3m> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-sbhnlk3m> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")}`, "href")} data-astro-cid-sbhnlk3m> <span class="sin-sidebar__bullet" data-astro-cid-sbhnlk3m></span> <span data-astro-cid-sbhnlk3m>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="sin-sidebar__card ags-sidebar__card--emergency" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Teléfonos de Emergencia</h4> <div class="sin-sidebar__emergency-list" data-astro-cid-sbhnlk3m> <div class="sin-sidebar__emergency-item" data-astro-cid-sbhnlk3m> <span class="sin-sidebar__emergency-number" data-astro-cid-sbhnlk3m>911</span> <span class="sin-sidebar__emergency-label" data-astro-cid-sbhnlk3m>Emergencias</span> </div> <div class="sin-sidebar__emergency-item" data-astro-cid-sbhnlk3m> <span class="sin-sidebar__emergency-number" data-astro-cid-sbhnlk3m>449 910 2030</span> <span class="sin-sidebar__emergency-label" data-astro-cid-sbhnlk3m>Bomberos Central</span> </div> <div class="sin-sidebar__emergency-item" data-astro-cid-sbhnlk3m> <span class="sin-sidebar__emergency-number" data-astro-cid-sbhnlk3m>449 910 3300</span> <span class="sin-sidebar__emergency-label" data-astro-cid-sbhnlk3m>Protección Civil SIN</span> </div> </div> </div> <!-- Regiones --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Regiones del Estado</h4> <ul class="sin-sidebar__regiones" data-astro-cid-sbhnlk3m> <li data-astro-cid-sbhnlk3m> <span class="sin-sidebar__region-name" data-astro-cid-sbhnlk3m>Zona Centro</span> <span class="sin-sidebar__region-desc" data-astro-cid-sbhnlk3m>Culiacan, Navolato, Sinaloa de Leyva, Angostura</span> </li> <li data-astro-cid-sbhnlk3m> <span class="sin-sidebar__region-name" data-astro-cid-sbhnlk3m>Zona Norte</span> <span class="sin-sidebar__region-desc" data-astro-cid-sbhnlk3m>Los Mochis, Guasave, El Fuerte, Choix</span> </li> <li data-astro-cid-sbhnlk3m> <span class="sin-sidebar__region-name" data-astro-cid-sbhnlk3m>Zona Sur</span> <span class="sin-sidebar__region-desc" data-astro-cid-sbhnlk3m>Mazatlan, Escuinapa, Rosario, Concordia</span> </li> <li data-astro-cid-sbhnlk3m> <span class="sin-sidebar__region-name" data-astro-cid-sbhnlk3m>Zona Oriente</span> <span class="sin-sidebar__region-desc" data-astro-cid-sbhnlk3m>El Llano, Pabellón de Arteaga</span> </li> </ul> </div> <!-- Nearby States --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Estados Vecinos</h4> <ul class="sin-sidebar__states" data-astro-cid-sbhnlk3m> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-sbhnlk3m> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-sbhnlk3m> <span data-astro-cid-sbhnlk3m>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sbhnlk3m> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-sbhnlk3m></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="sin-sidebar__card ags-sidebar__card--cta" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>¿Equipas una Estacion en SIN?</h4> <p data-astro-cid-sbhnlk3m>Somos distribuidores de equipo certificado NFPA para cuerpos de bomberos en todo Sinaloa</p> <a href="/cotizar" class="sin-sidebar__cta-btn" data-astro-cid-sbhnlk3m>Solicitar Cotización</a> </div> <!-- Products --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Equipo para Bomberos</h4> <ul class="sin-sidebar__products" data-astro-cid-sbhnlk3m> <li data-astro-cid-sbhnlk3m><a href="/productos/trajes-para-bomberos" data-astro-cid-sbhnlk3m>Trajes Estructurales NFPA</a></li> <li data-astro-cid-sbhnlk3m><a href="/productos/cascos-para-bomberos" data-astro-cid-sbhnlk3m>Cascos de Bombero</a></li> <li data-astro-cid-sbhnlk3m><a href="/productos/scba" data-astro-cid-sbhnlk3m>Equipos SCBA</a></li> <li data-astro-cid-sbhnlk3m><a href="/productos/herramientas-rescate" data-astro-cid-sbhnlk3m>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="sin-sidebar__link" data-astro-cid-sbhnlk3m>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sbhnlk3m> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-sbhnlk3m></path> </svg> </a> </div> <!-- Back to Directory --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <a href="/directorio" class="sin-sidebar__back" data-astro-cid-sbhnlk3m> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-sbhnlk3m> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-sbhnlk3m></path> </svg> <span data-astro-cid-sbhnlk3m>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="sin-sidebar__card" data-astro-cid-sbhnlk3m> <h4 data-astro-cid-sbhnlk3m>Contacto BOMBERO.MX</h4> <ul class="sin-sidebar__contact" data-astro-cid-sbhnlk3m> <li data-astro-cid-sbhnlk3m><a href="tel:+525520780102" data-astro-cid-sbhnlk3m>55 2078 0102</a></li> <li data-astro-cid-sbhnlk3m><a href="https://wa.me/525520780102" data-astro-cid-sbhnlk3m>WhatsApp</a></li> <li data-astro-cid-sbhnlk3m><a href="mailto:ventas@bombero.mx" data-astro-cid-sbhnlk3m>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sinaloa.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sinaloa.astro";
const $$url = "/directorio/sinaloa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sinaloa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
