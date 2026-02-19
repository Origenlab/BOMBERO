import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesTamaulipas, E as ESTADISTICAS_TAMAULIPAS } from '../../chunks/estaciones-tamaulipas_yLF55nr9.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Tamaulipas = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Nuevo Le\xF3n", slug: "nuevo-leon" },
    { nombre: "Tamaulipas", slug: "tamaulipas" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Veracruz", slug: "veracruz" }
  ];
  const keywords = [
    "bomberos tamaulipas",
    "estaciones bomberos reynosa",
    "bomberos tampico",
    "emergencias tamaulipas 911",
    "bomberos matamoros tamaulipas",
    "bomberos nuevo laredo",
    "cuerpo bomberos tamaulipas",
    "bomberos ciudad victoria tamaulipas",
    "proteccion civil tamaulipas",
    "bomberos frontera tamaulipas texas"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Tamaulipas", url: "/directorio/tamaulipas" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Tamaulipas, M\xE9xico",
    "description": "Directorio oficial de las 20 estaciones de bomberos en Tamaulipas. Reynosa, Matamoros, Nuevo Laredo, Tampico, Ciudad Victoria y todo el estado. PEMEX, maquiladora, Puerto Industrial Altamira y frontera con Texas. Emergencias 911.",
    "numberOfItems": estacionesTamaulipas.length,
    "itemListElement": estacionesTamaulipas.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Tamaulipas",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/tamaulipas/${e.slug}`
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Bomberos en Tamaulipas | ${ESTADISTICAS_TAMAULIPAS.total_estaciones} Estaciones | Directorio Oficial BOMBERO.MX`, "description": "Directorio oficial de las 20 estaciones de bomberos en Tamaulipas. Reynosa, Matamoros, Nuevo Laredo, Tampico, Altamira. PEMEX Cuenca de Burgos, maquiladora automotriz y el mayor puerto terrestre de las Am\xE9ricas. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/tamaulipas", "jsonLd": [breadcrumbSchema, itemListSchema], "data-astro-cid-ihhemuyy": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="tam-hero" data-astro-cid-ihhemuyy> <div class="tam-hero__bg" data-astro-cid-ihhemuyy> <div class="tam-hero__gradient" data-astro-cid-ihhemuyy></div> <div class="tam-hero__pattern" data-astro-cid-ihhemuyy></div> </div> <div class="container" data-astro-cid-ihhemuyy> <div class="tam-hero__container" data-astro-cid-ihhemuyy> <!-- Left Column --> <div class="tam-hero__content" data-astro-cid-ihhemuyy> <nav class="tam-hero__breadcrumb" data-astro-cid-ihhemuyy> <a href="/" data-astro-cid-ihhemuyy>Inicio</a> <span data-astro-cid-ihhemuyy>/</span> <a href="/directorio" data-astro-cid-ihhemuyy>Directorio</a> <span data-astro-cid-ihhemuyy>/</span> <span data-astro-cid-ihhemuyy>Tamaulipas</span> </nav> <span class="tam-hero__badge" data-astro-cid-ihhemuyy> <span class="tam-hero__badge-dot" data-astro-cid-ihhemuyy></span>
TAM
</span> <h1 class="tam-hero__title" data-astro-cid-ihhemuyy>
Estaciones de Bomberos en
<span class="tam-hero__highlight" data-astro-cid-ihhemuyy>Tamaulipas</span> </h1> <p class="tam-hero__desc" data-astro-cid-ihhemuyy>
Directorio completo del <strong data-astro-cid-ihhemuyy>H. Cuerpo de Bomberos de Tamaulipas</strong>.
            Encuentra teléfonos de emergencia, direcciones y servicios en el estado con la frontera más activa de México con Texas: el mayor puerto terrestre de las Américas, la Cuenca de Burgos, y los corredores maquiladores de Reynosa y Matamoros.
</p> <div class="tam-hero__stats" data-astro-cid-ihhemuyy> <div class="tam-hero__stat" data-astro-cid-ihhemuyy> <span class="tam-hero__stat-number" data-astro-cid-ihhemuyy>${estacionesTamaulipas.length}</span> <span class="tam-hero__stat-label" data-astro-cid-ihhemuyy>Estaciones</span> </div> <div class="tam-hero__stat" data-astro-cid-ihhemuyy> <span class="tam-hero__stat-number" data-astro-cid-ihhemuyy>43</span> <span class="tam-hero__stat-label" data-astro-cid-ihhemuyy>Municipios</span> </div> <div class="tam-hero__stat" data-astro-cid-ihhemuyy> <span class="tam-hero__stat-number" data-astro-cid-ihhemuyy>24/7</span> <span class="tam-hero__stat-label" data-astro-cid-ihhemuyy>Servicio</span> </div> <div class="tam-hero__stat" data-astro-cid-ihhemuyy> <span class="tam-hero__stat-number" data-astro-cid-ihhemuyy>3.5M</span> <span class="tam-hero__stat-label" data-astro-cid-ihhemuyy>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="tam-hero__seo" data-astro-cid-ihhemuyy> <h2 class="tam-hero__seo-title" data-astro-cid-ihhemuyy>Maquiladora, PEMEX y Frontera Texas: Riesgos Industriales Únicos</h2> <p class="tam-hero__seo-text" data-astro-cid-ihhemuyy> <strong data-astro-cid-ihhemuyy>Tamaulipas</strong> concentra la mayor densidad industrial fronteriza de México. <strong data-astro-cid-ihhemuyy>Reynosa</strong>
alberga la Cuenca de Burgos (mayor reserva onshore de gas natural del país) y plantas de <strong data-astro-cid-ihhemuyy>Samsung, Emerson,
            TRW y Delphi</strong>. <strong data-astro-cid-ihhemuyy>Matamoros</strong> —la "Detroit de México"— fabrica arneses y componentes para
            las principales marcas automotrices mundiales. Los bomberos tamaulipecos son expertos en HAZMAT industrial
            de primer nivel mundial.
</p> <h2 class="tam-hero__seo-title" data-astro-cid-ihhemuyy>Nuevo Laredo, Tampico-Altamira y 500 km de Frontera con EE.UU.</h2> <p class="tam-hero__seo-text" data-astro-cid-ihhemuyy> <strong data-astro-cid-ihhemuyy>Nuevo Laredo</strong> es el mayor puerto terrestre de las Américas: el <strong data-astro-cid-ihhemuyy>40% de las exportaciones
            mexicanas a EE.UU.</strong> pasan por sus puentes. El corredor Tampico-<strong data-astro-cid-ihhemuyy>Altamira</strong>-Madero alberga
            la Refinería PEMEX (<strong data-astro-cid-ihhemuyy>190,000 bbl/día</strong>) y el Puerto Industrial con <strong data-astro-cid-ihhemuyy>BASF, Celanese y Vitro</strong>.
            La <strong data-astro-cid-ihhemuyy>frontera de ~500 km con Texas</strong> exige coordinación binacional permanente con bomberos de
            Laredo, Brownsville y McAllen.
</p> </div> </div> </div> </section>  <section class="tam-emergency" data-astro-cid-ihhemuyy> <div class="container" data-astro-cid-ihhemuyy> <div class="tam-emergency__content" data-astro-cid-ihhemuyy> <div class="tam-emergency__icon" data-astro-cid-ihhemuyy> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ihhemuyy> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-ihhemuyy></path> </svg> </div> <div class="tam-emergency__text" data-astro-cid-ihhemuyy> <span class="tam-emergency__label" data-astro-cid-ihhemuyy>Emergencias en Tamaulipas</span> <span class="tam-emergency__number" data-astro-cid-ihhemuyy>911</span> </div> <p class="tam-emergency__desc" data-astro-cid-ihhemuyy>
Número único en todo Tamaulipas — 24/7, 365 días. Reynosa: 899 922 0500 · Tampico: 833 212 1515 · Nuevo Laredo: 867 712 8600
</p> </div> </div> </section>  <section class="tam-main" data-astro-cid-ihhemuyy> <div class="container" data-astro-cid-ihhemuyy> <div class="tam-main__grid" data-astro-cid-ihhemuyy> <!-- Stations Grid --> <div class="tam-main__content" data-astro-cid-ihhemuyy> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Tamaulipas", "description": "Informaci\xF3n de contacto actualizada de las 20 estaciones del H. Cuerpo de Bomberos de Tamaulipas, desde la frontera con Texas hasta el Golfo de M\xE9xico. Selecciona una estaci\xF3n para ver datos de contacto, servicios especializados y zonas de cobertura.", "data-astro-cid-ihhemuyy": true })} <div class="tam-stations-grid" data-astro-cid-ihhemuyy> ${estacionesTamaulipas.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/tamaulipas", "data-astro-cid-ihhemuyy": true })}`)} </div> <!-- SEO Content --> <div class="tam-seo" data-astro-cid-ihhemuyy> <h2 data-astro-cid-ihhemuyy>El H. Cuerpo de Bomberos de Tamaulipas</h2> <p data-astro-cid-ihhemuyy>
El <strong data-astro-cid-ihhemuyy>H. Cuerpo de Bomberos de Tamaulipas</strong> protege a más de <strong data-astro-cid-ihhemuyy>3.5 millones de tamaulipecos</strong>
en el estado con la línea fronteriza más estratégica de México. Tamaulipas comparte cerca de <strong data-astro-cid-ihhemuyy>500 km de frontera
              con el estado de Texas</strong>, albergando los cruces fronterizos de mayor actividad comercial del continente americano.
              La diversidad industrial —petróleo, maquiladora, petroquímica y agroindustria— forja bomberos de alta especialización
              técnica con protocolos únicos en el país.
</p> <h3 data-astro-cid-ihhemuyy>¿Cómo contactar a los bomberos en Tamaulipas?</h3> <p data-astro-cid-ihhemuyy>
En cualquier <strong data-astro-cid-ihhemuyy>emergencia en Tamaulipas</strong>, marca el <strong data-astro-cid-ihhemuyy>911</strong>. El C4 estatal
              despacha la unidad más cercana. Contactos directos: <strong data-astro-cid-ihhemuyy>Reynosa 899 922 0500</strong>,
<strong data-astro-cid-ihhemuyy>Tampico 833 212 1515</strong>, <strong data-astro-cid-ihhemuyy>Nuevo Laredo 867 712 8600</strong>,
<strong data-astro-cid-ihhemuyy>Matamoros 868 813 2222</strong>, <strong data-astro-cid-ihhemuyy>Ciudad Victoria 834 312 1330</strong>,
<strong data-astro-cid-ihhemuyy>Ciudad Madero 833 215 4800</strong>.
</p> <h3 data-astro-cid-ihhemuyy>Cuenca de Burgos y PEMEX: Gas Natural del Noreste</h3> <p data-astro-cid-ihhemuyy>
La <strong data-astro-cid-ihhemuyy>Cuenca de Burgos</strong>, que cubre gran parte del norte de Tamaulipas, es la mayor reserva de
<strong data-astro-cid-ihhemuyy>gas natural no asociado de México</strong>, con cientos de pozos, compresoras y gasoductos operados
              por PEMEX E&P. La concentración de infraestructura gasífera en Reynosa y municipios aledaños genera riesgos
              HAZMAT de máxima complejidad: fugas de gas metano, incendios en compresoras y emergencias en instalaciones
              de deshidratación. Los bomberos de Reynosa poseen <strong data-astro-cid-ihhemuyy>certificación HAZMAT nivel A/B</strong> específica
              para gas natural de alta presión.
</p> <h3 data-astro-cid-ihhemuyy>Puerto Industrial Altamira: Química y Petroquímica de Clase Mundial</h3> <p data-astro-cid-ihhemuyy>
El <strong data-astro-cid-ihhemuyy>Puerto Industrial de Altamira</strong> es uno de los tres puertos industriales más importantes de
              México y el principal del Golfo de México por movimiento de carga química. <strong data-astro-cid-ihhemuyy>BASF</strong> —la mayor planta
              química privada de México—, <strong data-astro-cid-ihhemuyy>Celanese</strong> (ácido acético y acetato de vinilo), <strong data-astro-cid-ihhemuyy>Vitro</strong>
(sosa cáustica), <strong data-astro-cid-ihhemuyy>Braskem</strong> y la terminal petroquímica de PEMEX generan riesgos HAZMAT de primera
              magnitud: ácido acético, amoniaco, metanol, sosa cáustica y productos petroquímicos de alta toxicidad. Los
              bomberos de Altamira poseen <strong data-astro-cid-ihhemuyy>certificación HAZMAT nivel A</strong> en productos químicos industriales.
</p> <h3 data-astro-cid-ihhemuyy>Nuevo Laredo: El Mayor Puerto Terrestre de las Américas</h3> <p data-astro-cid-ihhemuyy>
Los <strong data-astro-cid-ihhemuyy>cinco puentes internacionales de Nuevo Laredo</strong> mueven más del <strong data-astro-cid-ihhemuyy>40% de las
              exportaciones mexicanas a Estados Unidos</strong>, con miles de tractocamiones diarios que transportan
              desde electrónica y automóviles hasta productos químicos y alimentos. El riesgo de incendios en cargas
              de materiales peligrosos en tránsito internacional es cotidiano. Los bomberos de Nuevo Laredo trabajan
              bajo protocolos <strong data-astro-cid-ihhemuyy>UN/DOT para HAZMAT de transporte terrestre internacional</strong> y mantienen
              acuerdos de cooperación binacional con el Cuerpo de Bomberos de Laredo, Texas.
</p> <h3 data-astro-cid-ihhemuyy>Coordinación Binacional con Bomberos de Texas</h3> <p data-astro-cid-ihhemuyy>
Los cuerpos de bomberos de <strong data-astro-cid-ihhemuyy>Reynosa, Matamoros y Nuevo Laredo</strong> mantienen acuerdos formales
              de <strong data-astro-cid-ihhemuyy>cooperación binacional</strong> con sus pares texanos (McAllen/Hidalgo County, Brownsville/Cameron
              County y Laredo Fire Department), compartiendo recursos, capacitación y protocolos de respuesta en la
              franja fronteriza. Esta coordinación —única entre todos los estados fronterizos mexicanos por su nivel
              de formalización— permite tiempos de respuesta óptimos ante emergencias en los puentes y cruces internacionales.
</p> <h3 data-astro-cid-ihhemuyy>Servicios de los Bomberos Tamaulipecos</h3> <p data-astro-cid-ihhemuyy>
Los bomberos de Tamaulipas están certificados para atender:
<strong data-astro-cid-ihhemuyy>incendios industriales HAZMAT</strong> (gas natural, productos petroquímicos, automotriz);
<strong data-astro-cid-ihhemuyy>rescate acuático</strong> en el Río Bravo/Grande, Presa Falcón y Laguna Madre;
<strong data-astro-cid-ihhemuyy>ARFF aeroportuario</strong> en Tampico y Reynosa;
<strong data-astro-cid-ihhemuyy>rescate en accidentes de tractocamiones</strong> en corredores fronterizos;
<strong data-astro-cid-ihhemuyy>incendios en refinería</strong> con espumas AFFF;
<strong data-astro-cid-ihhemuyy>rescate técnico de montaña</strong> en la Sierra Madre Oriental;
<strong data-astro-cid-ihhemuyy>coordinación binacional</strong> con bomberos de Texas; y
<strong data-astro-cid-ihhemuyy>rescate de turistas</strong> en la Reserva El Cielo (bosque de niebla UNESCO).
</p> </div> </div> <!-- Sidebar --> <aside class="tam-sidebar" data-astro-cid-ihhemuyy> <!-- Quick Access --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Filtrar por Municipio</h4> <ul class="tam-sidebar__municipios" data-astro-cid-ihhemuyy> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-ihhemuyy> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")}`, "href")} data-astro-cid-ihhemuyy> <span class="tam-sidebar__bullet" data-astro-cid-ihhemuyy></span> <span data-astro-cid-ihhemuyy>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="tam-sidebar__card tam-sidebar__card--emergency" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Teléfonos de Emergencia</h4> <div class="tam-sidebar__emergency-list" data-astro-cid-ihhemuyy> <div class="tam-sidebar__emergency-item" data-astro-cid-ihhemuyy> <span class="tam-sidebar__emergency-number" data-astro-cid-ihhemuyy>911</span> <span class="tam-sidebar__emergency-label" data-astro-cid-ihhemuyy>Emergencias Nacionales</span> </div> <div class="tam-sidebar__emergency-item" data-astro-cid-ihhemuyy> <span class="tam-sidebar__emergency-number" data-astro-cid-ihhemuyy>899 922 0500</span> <span class="tam-sidebar__emergency-label" data-astro-cid-ihhemuyy>Bomberos Reynosa</span> </div> <div class="tam-sidebar__emergency-item" data-astro-cid-ihhemuyy> <span class="tam-sidebar__emergency-number" data-astro-cid-ihhemuyy>833 212 1515</span> <span class="tam-sidebar__emergency-label" data-astro-cid-ihhemuyy>Bomberos Tampico</span> </div> <div class="tam-sidebar__emergency-item" data-astro-cid-ihhemuyy> <span class="tam-sidebar__emergency-number" data-astro-cid-ihhemuyy>867 712 8600</span> <span class="tam-sidebar__emergency-label" data-astro-cid-ihhemuyy>Bomberos Nuevo Laredo</span> </div> <div class="tam-sidebar__emergency-item" data-astro-cid-ihhemuyy> <span class="tam-sidebar__emergency-number" data-astro-cid-ihhemuyy>868 813 2222</span> <span class="tam-sidebar__emergency-label" data-astro-cid-ihhemuyy>Bomberos Matamoros</span> </div> </div> </div> <!-- Regiones --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Regiones del Estado</h4> <ul class="tam-sidebar__regiones" data-astro-cid-ihhemuyy> <li data-astro-cid-ihhemuyy> <span class="tam-sidebar__region-name" data-astro-cid-ihhemuyy>Frontera Norte</span> <span class="tam-sidebar__region-desc" data-astro-cid-ihhemuyy>Nuevo Laredo, Reynosa, Matamoros, Río Bravo, Miguel Alemán, Camargo</span> </li> <li data-astro-cid-ihhemuyy> <span class="tam-sidebar__region-name" data-astro-cid-ihhemuyy>Región Centro</span> <span class="tam-sidebar__region-desc" data-astro-cid-ihhemuyy>Ciudad Victoria (capital), San Fernando, Victoria Norte</span> </li> <li data-astro-cid-ihhemuyy> <span class="tam-sidebar__region-name" data-astro-cid-ihhemuyy>Corredor Petroquímico Sur</span> <span class="tam-sidebar__region-desc" data-astro-cid-ihhemuyy>Tampico, Ciudad Madero, Altamira (Puerto Industrial)</span> </li> <li data-astro-cid-ihhemuyy> <span class="tam-sidebar__region-name" data-astro-cid-ihhemuyy>Región Sur / Sierra</span> <span class="tam-sidebar__region-desc" data-astro-cid-ihhemuyy>Ciudad Mante, Linares, Soto la Marina, El Cielo</span> </li> </ul> </div> <!-- Nearby States --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Estados Vecinos</h4> <ul class="tam-sidebar__states" data-astro-cid-ihhemuyy> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-ihhemuyy> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-ihhemuyy> <span data-astro-cid-ihhemuyy>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ihhemuyy> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-ihhemuyy></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="tam-sidebar__card tam-sidebar__card--cta" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>¿Equipas una Estación en TAM?</h4> <p data-astro-cid-ihhemuyy>Distribuimos equipo NFPA certificado para bomberos en Tamaulipas: HAZMAT gas natural, maquiladora, petroquímica y frontera</p> <a href="/cotizar" class="tam-sidebar__cta-btn" data-astro-cid-ihhemuyy>Solicitar Cotización</a> </div> <!-- Products --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Equipo para Bomberos</h4> <ul class="tam-sidebar__products" data-astro-cid-ihhemuyy> <li data-astro-cid-ihhemuyy><a href="/productos/trajes-para-bomberos" data-astro-cid-ihhemuyy>Trajes Estructurales NFPA</a></li> <li data-astro-cid-ihhemuyy><a href="/productos/cascos-para-bomberos" data-astro-cid-ihhemuyy>Cascos de Bombero</a></li> <li data-astro-cid-ihhemuyy><a href="/productos/scba" data-astro-cid-ihhemuyy>Equipos SCBA</a></li> <li data-astro-cid-ihhemuyy><a href="/productos/herramientas-rescate" data-astro-cid-ihhemuyy>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="tam-sidebar__link" data-astro-cid-ihhemuyy>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ihhemuyy> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-ihhemuyy></path> </svg> </a> </div> <!-- Back to Directory --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <a href="/directorio" class="tam-sidebar__back" data-astro-cid-ihhemuyy> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-ihhemuyy> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-ihhemuyy></path> </svg> <span data-astro-cid-ihhemuyy>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="tam-sidebar__card" data-astro-cid-ihhemuyy> <h4 data-astro-cid-ihhemuyy>Contacto BOMBERO.MX</h4> <ul class="tam-sidebar__contact" data-astro-cid-ihhemuyy> <li data-astro-cid-ihhemuyy><a href="tel:+525520780102" data-astro-cid-ihhemuyy>55 2078 0102</a></li> <li data-astro-cid-ihhemuyy><a href="https://wa.me/525520780102" data-astro-cid-ihhemuyy>WhatsApp</a></li> <li data-astro-cid-ihhemuyy><a href="mailto:ventas@bombero.mx" data-astro-cid-ihhemuyy>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas.astro";
const $$url = "/directorio/tamaulipas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tamaulipas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
