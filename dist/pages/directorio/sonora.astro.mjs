import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesSonora, E as ESTADISTICAS_SONORA } from '../../chunks/estaciones-sonora_pOM4_Jnr.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Sonora = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Sinaloa", slug: "sinaloa" },
    { nombre: "Chihuahua", slug: "chihuahua" },
    { nombre: "Baja California", slug: "baja-california" },
    { nombre: "Nayarit", slug: "nayarit" }
  ];
  const keywords = [
    "bomberos sonora",
    "estaciones bomberos hermosillo",
    "bomberos nogales sonora",
    "emergencias sonora 911",
    "bomberos ciudad obregon",
    "bomberos guaymas",
    "cuerpo bomberos hermosillo",
    "bomberos cananea mineria",
    "proteccion civil sonora",
    "bomberos frontera sonora arizona"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Sonora", url: "/directorio/sonora" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Sonora, M\xE9xico",
    "description": "Directorio oficial de las 20 estaciones de bomberos en Sonora. Hermosillo, Nogales, Ciudad Obreg\xF3n, Guaymas, Cananea y todo el estado. Miner\xEDa, automotriz, frontera EE.UU. y Golfo de California. Emergencias 911.",
    "numberOfItems": estacionesSonora.length,
    "itemListElement": estacionesSonora.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Sonora",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/sonora/${e.slug}`
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Bomberos en Sonora | ${ESTADISTICAS_SONORA.total_estaciones} Estaciones | Directorio Oficial BOMBERO.MX`, "description": "Directorio oficial de las 20 estaciones de bomberos en Sonora. Hermosillo, Nogales, Ciudad Obreg\xF3n, Guaymas, Cananea. Miner\xEDa de cobre, automotriz, frontera con Arizona y Golfo de California. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/sonora", "jsonLd": [breadcrumbSchema, itemListSchema], "data-astro-cid-27sueora": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="son-hero" data-astro-cid-27sueora> <div class="son-hero__bg" data-astro-cid-27sueora> <div class="son-hero__gradient" data-astro-cid-27sueora></div> <div class="son-hero__pattern" data-astro-cid-27sueora></div> </div> <div class="container" data-astro-cid-27sueora> <div class="son-hero__container" data-astro-cid-27sueora> <!-- Left Column --> <div class="son-hero__content" data-astro-cid-27sueora> <nav class="son-hero__breadcrumb" data-astro-cid-27sueora> <a href="/" data-astro-cid-27sueora>Inicio</a> <span data-astro-cid-27sueora>/</span> <a href="/directorio" data-astro-cid-27sueora>Directorio</a> <span data-astro-cid-27sueora>/</span> <span data-astro-cid-27sueora>Sonora</span> </nav> <span class="son-hero__badge" data-astro-cid-27sueora> <span class="son-hero__badge-dot" data-astro-cid-27sueora></span>
SON
</span> <h1 class="son-hero__title" data-astro-cid-27sueora>
Estaciones de Bomberos en
<span class="son-hero__highlight" data-astro-cid-27sueora>Sonora</span> </h1> <p class="son-hero__desc" data-astro-cid-27sueora>
Directorio completo del <strong data-astro-cid-27sueora>H. Cuerpo de Bomberos de Sonora</strong>.
            Encuentra teléfonos de emergencia, direcciones y servicios en el estado más grande del noroeste: capital del cobre mexicano, corredor automotriz Ford-Kia, 588 km de frontera con Arizona y el Mar de Cortés.
</p> <div class="son-hero__stats" data-astro-cid-27sueora> <div class="son-hero__stat" data-astro-cid-27sueora> <span class="son-hero__stat-number" data-astro-cid-27sueora>${estacionesSonora.length}</span> <span class="son-hero__stat-label" data-astro-cid-27sueora>Estaciones</span> </div> <div class="son-hero__stat" data-astro-cid-27sueora> <span class="son-hero__stat-number" data-astro-cid-27sueora>72</span> <span class="son-hero__stat-label" data-astro-cid-27sueora>Municipios</span> </div> <div class="son-hero__stat" data-astro-cid-27sueora> <span class="son-hero__stat-number" data-astro-cid-27sueora>24/7</span> <span class="son-hero__stat-label" data-astro-cid-27sueora>Servicio</span> </div> <div class="son-hero__stat" data-astro-cid-27sueora> <span class="son-hero__stat-number" data-astro-cid-27sueora>3M+</span> <span class="son-hero__stat-label" data-astro-cid-27sueora>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="son-hero__seo" data-astro-cid-27sueora> <h2 class="son-hero__seo-title" data-astro-cid-27sueora>Industria y Minería: Riesgos Únicos en Sonora</h2> <p class="son-hero__seo-text" data-astro-cid-27sueora> <strong data-astro-cid-27sueora>Sonora</strong> produce el <strong data-astro-cid-27sueora>65% del cobre de México</strong> en las minas de
            Cananea y Nacozari (Grupo México), opera las plantas <strong data-astro-cid-27sueora>Ford Hermosillo y Kia Pesqueira</strong>,
            y concentra el mayor corredor maquilador del noroeste en Nogales y Agua Prieta. Los bomberos
            sonorenses dominan respuesta ante HAZMAT minero, automotriz e industrial.
</p> <h2 class="son-hero__seo-title" data-astro-cid-27sueora>Frontera, Desierto y Mar de Cortés</h2> <p class="son-hero__seo-text" data-astro-cid-27sueora>
Con <strong data-astro-cid-27sueora>588 km de frontera con Arizona</strong>, Sonora requiere coordinación binacional
            permanente con cuerpos de bomberos de EE.UU. El <strong data-astro-cid-27sueora>Desierto de Sonora</strong> impone
            temperaturas extremas y riesgo de rescate desértico, mientras el <strong data-astro-cid-27sueora>Golfo de California</strong>
(Mar de Cortés) exige capacidades marítimas en Guaymas y Puerto Peñasco.
</p> </div> </div> </div> </section>  <section class="son-emergency" data-astro-cid-27sueora> <div class="container" data-astro-cid-27sueora> <div class="son-emergency__content" data-astro-cid-27sueora> <div class="son-emergency__icon" data-astro-cid-27sueora> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-27sueora> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-27sueora></path> </svg> </div> <div class="son-emergency__text" data-astro-cid-27sueora> <span class="son-emergency__label" data-astro-cid-27sueora>Emergencias en Sonora</span> <span class="son-emergency__number" data-astro-cid-27sueora>911</span> </div> <p class="son-emergency__desc" data-astro-cid-27sueora>
Número único en todo Sonora — 24/7, 365 días. Hermosillo: 662 210 3600 · Nogales: 631 312 1690 · Obregón: 644 415 7070
</p> </div> </div> </section>  <section class="son-main" data-astro-cid-27sueora> <div class="container" data-astro-cid-27sueora> <div class="son-main__grid" data-astro-cid-27sueora> <!-- Stations Grid --> <div class="son-main__content" data-astro-cid-27sueora> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Sonora", "description": "Informaci\xF3n de contacto actualizada de las 20 estaciones del H. Cuerpo de Bomberos de Sonora, desde la frontera con Arizona hasta el Valle del Mayo. Selecciona una estaci\xF3n para ver datos de contacto, servicios especializados y zonas de cobertura.", "data-astro-cid-27sueora": true })} <div class="son-stations-grid" data-astro-cid-27sueora> ${estacionesSonora.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/sonora", "data-astro-cid-27sueora": true })}`)} </div> <!-- SEO Content --> <div class="son-seo" data-astro-cid-27sueora> <h2 data-astro-cid-27sueora>El H. Cuerpo de Bomberos de Sonora</h2> <p data-astro-cid-27sueora>
El <strong data-astro-cid-27sueora>H. Cuerpo de Bomberos de Sonora</strong> protege a más de <strong data-astro-cid-27sueora>3 millones de sonorenses</strong>
en el segundo estado más grande de México por superficie. Con 179,503 km² de territorio que abarca desde
              el Desierto de Sonora hasta la Sierra Madre Occidental, y desde la frontera con Arizona hasta las costas
              del Golfo de California, los bomberos sonorenses operan en condiciones de excepcional diversidad
              geográfica, climática e industrial.
</p> <h3 data-astro-cid-27sueora>¿Cómo contactar a los bomberos en Sonora?</h3> <p data-astro-cid-27sueora>
En cualquier <strong data-astro-cid-27sueora>emergencia en Sonora</strong>, marca el <strong data-astro-cid-27sueora>911</strong>. El Centro de Control,
              Comando, Comunicaciones y Cómputo (<strong data-astro-cid-27sueora>C4 Sonora</strong>) despacha la unidad más cercana.
              Para contacto directo: <strong data-astro-cid-27sueora>Hermosillo 662 210 3600</strong>,
<strong data-astro-cid-27sueora>Nogales 631 312 1690</strong>, <strong data-astro-cid-27sueora>Ciudad Obregón 644 415 7070</strong>,
<strong data-astro-cid-27sueora>Guaymas 622 226 0095</strong>.
</p> <h3 data-astro-cid-27sueora>Riesgos Industriales y Mineros en Sonora</h3> <p data-astro-cid-27sueora>
Sonora concentra la mayor actividad minera de México: la <strong data-astro-cid-27sueora>Mina Buenavista del Cobre en Cananea</strong>
y la <strong data-astro-cid-27sueora>Mina La Caridad en Nacozari</strong> producen juntas más del 50% del cobre nacional.
              El <strong data-astro-cid-27sueora>corredor automotriz Hermosillo-Pesqueira</strong> (Ford Bronco Sport, Kia Sportage) genera
              riesgos específicos con pinturas, solventes y materiales peligrosos automotrices. Los bomberos de estas
              zonas cuentan con <strong data-astro-cid-27sueora>certificación HAZMAT nivel A</strong> y protocolos especializados.
</p> <h3 data-astro-cid-27sueora>Coordinación Binacional con Bomberos de Arizona</h3> <p data-astro-cid-27sueora>
Los cuerpos de bomberos de <strong data-astro-cid-27sueora>Nogales, Agua Prieta y San Luis Río Colorado</strong> operan bajo
              acuerdos de <strong data-astro-cid-27sueora>cooperación binacional con bomberos de Arizona</strong> (Nogales AZ, Douglas AZ,
              San Luis AZ), compartiendo recursos, protocolos y capacitación. Esta coordinación es única en México
              y permite respuestas más rápidas en la franja fronteriza de alta densidad industrial y comercial.
</p> <h3 data-astro-cid-27sueora>Servicios de los Bomberos Sonorenses</h3> <p data-astro-cid-27sueora>
Los bomberos de Sonora están certificados para atender:
<strong data-astro-cid-27sueora>incendios industriales, estructurales y forestales</strong>;
<strong data-astro-cid-27sueora>HAZMAT minero</strong> (ácido sulfúrico, cianuro, reactivos metalúrgicos);
<strong data-astro-cid-27sueora>HAZMAT automotriz</strong> (pinturas, solventes, baterías de vehículos eléctricos);
<strong data-astro-cid-27sueora>rescate acuático marino</strong> en el Golfo de California;
<strong data-astro-cid-27sueora>rescate aeroportuario ARFF</strong> en Hermosillo y Nogales;
<strong data-astro-cid-27sueora>rescate desértico</strong> en el Desierto de Sonora y Altar;
<strong data-astro-cid-27sueora>coordinación binacional</strong> con cuerpos de bomberos de Arizona; y
<strong data-astro-cid-27sueora>rescate minero</strong> en tajo abierto y socavón.
</p> </div> </div> <!-- Sidebar --> <aside class="son-sidebar" data-astro-cid-27sueora> <!-- Quick Access --> <div class="son-sidebar__card" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Filtrar por Municipio</h4> <ul class="son-sidebar__municipios" data-astro-cid-27sueora> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-27sueora> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")}`, "href")} data-astro-cid-27sueora> <span class="son-sidebar__bullet" data-astro-cid-27sueora></span> <span data-astro-cid-27sueora>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="son-sidebar__card son-sidebar__card--emergency" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Teléfonos de Emergencia</h4> <div class="son-sidebar__emergency-list" data-astro-cid-27sueora> <div class="son-sidebar__emergency-item" data-astro-cid-27sueora> <span class="son-sidebar__emergency-number" data-astro-cid-27sueora>911</span> <span class="son-sidebar__emergency-label" data-astro-cid-27sueora>Emergencias Nacionales</span> </div> <div class="son-sidebar__emergency-item" data-astro-cid-27sueora> <span class="son-sidebar__emergency-number" data-astro-cid-27sueora>662 210 3600</span> <span class="son-sidebar__emergency-label" data-astro-cid-27sueora>Bomberos Hermosillo</span> </div> <div class="son-sidebar__emergency-item" data-astro-cid-27sueora> <span class="son-sidebar__emergency-number" data-astro-cid-27sueora>631 312 1690</span> <span class="son-sidebar__emergency-label" data-astro-cid-27sueora>Bomberos Nogales</span> </div> <div class="son-sidebar__emergency-item" data-astro-cid-27sueora> <span class="son-sidebar__emergency-number" data-astro-cid-27sueora>644 415 7070</span> <span class="son-sidebar__emergency-label" data-astro-cid-27sueora>Bomberos Cd. Obregón</span> </div> <div class="son-sidebar__emergency-item" data-astro-cid-27sueora> <span class="son-sidebar__emergency-number" data-astro-cid-27sueora>622 226 0095</span> <span class="son-sidebar__emergency-label" data-astro-cid-27sueora>Bomberos Guaymas</span> </div> </div> </div> <!-- Regiones --> <div class="son-sidebar__card" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Regiones del Estado</h4> <ul class="son-sidebar__regiones" data-astro-cid-27sueora> <li data-astro-cid-27sueora> <span class="son-sidebar__region-name" data-astro-cid-27sueora>Región Centro</span> <span class="son-sidebar__region-desc" data-astro-cid-27sueora>Hermosillo (capital), Magdalena, Ures</span> </li> <li data-astro-cid-27sueora> <span class="son-sidebar__region-name" data-astro-cid-27sueora>Región Norte/Fronteriza</span> <span class="son-sidebar__region-desc" data-astro-cid-27sueora>Nogales, Agua Prieta, Cananea, Nacozari, San Luis R.C., Caborca</span> </li> <li data-astro-cid-27sueora> <span class="son-sidebar__region-name" data-astro-cid-27sueora>Región Sur/Yaqui-Mayo</span> <span class="son-sidebar__region-desc" data-astro-cid-27sueora>Ciudad Obregón, Navojoa, Álamos, Huatabampo</span> </li> <li data-astro-cid-27sueora> <span class="son-sidebar__region-name" data-astro-cid-27sueora>Región Costera/Golfo</span> <span class="son-sidebar__region-desc" data-astro-cid-27sueora>Guaymas, San Carlos, Puerto Peñasco</span> </li> </ul> </div> <!-- Nearby States --> <div class="son-sidebar__card" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Estados Vecinos</h4> <ul class="son-sidebar__states" data-astro-cid-27sueora> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-27sueora> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-27sueora> <span data-astro-cid-27sueora>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-27sueora> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-27sueora></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="son-sidebar__card son-sidebar__card--cta" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>¿Equipas una Estación en SON?</h4> <p data-astro-cid-27sueora>Distribuimos equipo NFPA certificado para bomberos en Sonora: minería, industrial, automotriz y costero</p> <a href="/cotizar" class="son-sidebar__cta-btn" data-astro-cid-27sueora>Solicitar Cotización</a> </div> <!-- Products --> <div class="son-sidebar__card" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Equipo para Bomberos</h4> <ul class="son-sidebar__products" data-astro-cid-27sueora> <li data-astro-cid-27sueora><a href="/productos/trajes-para-bomberos" data-astro-cid-27sueora>Trajes Estructurales NFPA</a></li> <li data-astro-cid-27sueora><a href="/productos/cascos-para-bomberos" data-astro-cid-27sueora>Cascos de Bombero</a></li> <li data-astro-cid-27sueora><a href="/productos/scba" data-astro-cid-27sueora>Equipos SCBA</a></li> <li data-astro-cid-27sueora><a href="/productos/herramientas-rescate" data-astro-cid-27sueora>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="son-sidebar__link" data-astro-cid-27sueora>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-27sueora> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-27sueora></path> </svg> </a> </div> <!-- Back to Directory --> <div class="son-sidebar__card" data-astro-cid-27sueora> <a href="/directorio" class="son-sidebar__back" data-astro-cid-27sueora> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-27sueora> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-27sueora></path> </svg> <span data-astro-cid-27sueora>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="son-sidebar__card" data-astro-cid-27sueora> <h4 data-astro-cid-27sueora>Contacto BOMBERO.MX</h4> <ul class="son-sidebar__contact" data-astro-cid-27sueora> <li data-astro-cid-27sueora><a href="tel:+525520780102" data-astro-cid-27sueora>55 2078 0102</a></li> <li data-astro-cid-27sueora><a href="https://wa.me/525520780102" data-astro-cid-27sueora>WhatsApp</a></li> <li data-astro-cid-27sueora><a href="mailto:ventas@bombero.mx" data-astro-cid-27sueora>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sonora.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/sonora.astro";
const $$url = "/directorio/sonora";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sonora,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
