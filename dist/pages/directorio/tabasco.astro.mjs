import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesTabasco, E as ESTADISTICAS_TABASCO } from '../../chunks/estaciones-tabasco_BALsjXiy.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Tabasco = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Campeche", slug: "campeche" },
    { nombre: "Chiapas", slug: "chiapas" },
    { nombre: "Veracruz", slug: "veracruz" }
  ];
  const keywords = [
    "bomberos tabasco",
    "estaciones bomberos villahermosa",
    "bomberos villahermosa",
    "emergencias tabasco 911",
    "bomberos paraiso tabasco",
    "refineria olmeca dos bocas bomberos",
    "cuerpo bomberos tabasco",
    "bomberos pemex tabasco",
    "proteccion civil tabasco",
    "bomberos inundaciones tabasco"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Tabasco", url: "/directorio/tabasco" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Tabasco, M\xE9xico",
    "description": "Directorio oficial de las 17 estaciones de bomberos en Tabasco. Villahermosa, Para\xEDso-Dos Bocas, Macuspana, C\xE1rdenas, Comalcalco y los 17 municipios. Petr\xF3leo PEMEX, Refiner\xEDa Olmeca, inundaciones y Pantanos de Centla. Emergencias 911.",
    "numberOfItems": estacionesTabasco.length,
    "itemListElement": estacionesTabasco.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Tabasco",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/tabasco/${e.slug}`
      }
    }))
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Bomberos en Tabasco | ${ESTADISTICAS_TABASCO.total_estaciones} Estaciones | Directorio Oficial BOMBERO.MX`, "description": "Directorio oficial de las 17 estaciones de bomberos en Tabasco. Villahermosa, Para\xEDso-Dos Bocas, Macuspana, C\xE1rdenas. PEMEX, Refiner\xEDa Olmeca, inundaciones y Pantanos de Centla. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/tabasco", "jsonLd": [breadcrumbSchema, itemListSchema], "data-astro-cid-xxcpe5nt": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="tab-hero" data-astro-cid-xxcpe5nt> <div class="tab-hero__bg" data-astro-cid-xxcpe5nt> <div class="tab-hero__gradient" data-astro-cid-xxcpe5nt></div> <div class="tab-hero__pattern" data-astro-cid-xxcpe5nt></div> </div> <div class="container" data-astro-cid-xxcpe5nt> <div class="tab-hero__container" data-astro-cid-xxcpe5nt> <!-- Left Column --> <div class="tab-hero__content" data-astro-cid-xxcpe5nt> <nav class="tab-hero__breadcrumb" data-astro-cid-xxcpe5nt> <a href="/" data-astro-cid-xxcpe5nt>Inicio</a> <span data-astro-cid-xxcpe5nt>/</span> <a href="/directorio" data-astro-cid-xxcpe5nt>Directorio</a> <span data-astro-cid-xxcpe5nt>/</span> <span data-astro-cid-xxcpe5nt>Tabasco</span> </nav> <span class="tab-hero__badge" data-astro-cid-xxcpe5nt> <span class="tab-hero__badge-dot" data-astro-cid-xxcpe5nt></span>
TAB
</span> <h1 class="tab-hero__title" data-astro-cid-xxcpe5nt>
Estaciones de Bomberos en
<span class="tab-hero__highlight" data-astro-cid-xxcpe5nt>Tabasco</span> </h1> <p class="tab-hero__desc" data-astro-cid-xxcpe5nt>
Directorio completo del <strong data-astro-cid-xxcpe5nt>H. Cuerpo de Bomberos de Tabasco</strong>.
            Encuentra teléfonos de emergencia, direcciones y servicios en el corazón petrolero de México: sede de la Refinería Olmeca Dos Bocas, ríos Grijalva y Usumacinta, y el estado con mayor riesgo de inundaciones del país.
</p> <div class="tab-hero__stats" data-astro-cid-xxcpe5nt> <div class="tab-hero__stat" data-astro-cid-xxcpe5nt> <span class="tab-hero__stat-number" data-astro-cid-xxcpe5nt>${estacionesTabasco.length}</span> <span class="tab-hero__stat-label" data-astro-cid-xxcpe5nt>Estaciones</span> </div> <div class="tab-hero__stat" data-astro-cid-xxcpe5nt> <span class="tab-hero__stat-number" data-astro-cid-xxcpe5nt>17</span> <span class="tab-hero__stat-label" data-astro-cid-xxcpe5nt>Municipios</span> </div> <div class="tab-hero__stat" data-astro-cid-xxcpe5nt> <span class="tab-hero__stat-number" data-astro-cid-xxcpe5nt>24/7</span> <span class="tab-hero__stat-label" data-astro-cid-xxcpe5nt>Servicio</span> </div> <div class="tab-hero__stat" data-astro-cid-xxcpe5nt> <span class="tab-hero__stat-number" data-astro-cid-xxcpe5nt>2.4M</span> <span class="tab-hero__stat-label" data-astro-cid-xxcpe5nt>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="tab-hero__seo" data-astro-cid-xxcpe5nt> <h2 class="tab-hero__seo-title" data-astro-cid-xxcpe5nt>PEMEX y Refinería Olmeca: El Mayor Riesgo Industrial</h2> <p class="tab-hero__seo-text" data-astro-cid-xxcpe5nt> <strong data-astro-cid-xxcpe5nt>Tabasco</strong> produce el <strong data-astro-cid-xxcpe5nt>25-30% del petróleo y gas de México</strong> a través de
            PEMEX Exploración y Producción. La <strong data-astro-cid-xxcpe5nt>Refinería Olmeca en Dos Bocas (Paraíso)</strong>,
            inaugurada en 2023 con capacidad de 340,000 barriles diarios, es el mayor proyecto energético
            en la historia del país y exige bomberos especializados en HAZMAT de refinación al nivel industrial más alto.
</p> <h2 class="tab-hero__seo-title" data-astro-cid-xxcpe5nt>Inundaciones y Rescate Acuático en el Sureste</h2> <p class="tab-hero__seo-text" data-astro-cid-xxcpe5nt>
Tabasco es el estado <strong data-astro-cid-xxcpe5nt>más inundable de México</strong>. Las crecidas del <strong data-astro-cid-xxcpe5nt>Grijalva y el
            Usumacinta</strong> —los dos ríos más caudalosos del país— han inundado hasta el <strong data-astro-cid-xxcpe5nt>80% del territorio
            tabasqueño</strong> (2007), afectando 1.5 millones de personas. Los bomberos tabasqueños dominan
            el rescate acuático fluvial y lacustre en los Pantanos de Centla.
</p> </div> </div> </div> </section>  <section class="tab-emergency" data-astro-cid-xxcpe5nt> <div class="container" data-astro-cid-xxcpe5nt> <div class="tab-emergency__content" data-astro-cid-xxcpe5nt> <div class="tab-emergency__icon" data-astro-cid-xxcpe5nt> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-xxcpe5nt> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-xxcpe5nt></path> </svg> </div> <div class="tab-emergency__text" data-astro-cid-xxcpe5nt> <span class="tab-emergency__label" data-astro-cid-xxcpe5nt>Emergencias en Tabasco</span> <span class="tab-emergency__number" data-astro-cid-xxcpe5nt>911</span> </div> <p class="tab-emergency__desc" data-astro-cid-xxcpe5nt>
Número único en todo Tabasco — 24/7, 365 días. Villahermosa: 993 315 3700 · Paraíso: 933 333 3900 · Macuspana: 936 362 0500
</p> </div> </div> </section>  <section class="tab-main" data-astro-cid-xxcpe5nt> <div class="container" data-astro-cid-xxcpe5nt> <div class="tab-main__grid" data-astro-cid-xxcpe5nt> <!-- Stations Grid --> <div class="tab-main__content" data-astro-cid-xxcpe5nt> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Tabasco", "description": "Informaci\xF3n de contacto actualizada de las 17 estaciones del H. Cuerpo de Bomberos de Tabasco, cubriendo los 17 municipios del estado. Desde Villahermosa hasta Tenosique y la frontera con Guatemala. Selecciona una estaci\xF3n para ver datos de contacto, servicios especializados y zonas de cobertura.", "data-astro-cid-xxcpe5nt": true })} <div class="tab-stations-grid" data-astro-cid-xxcpe5nt> ${estacionesTabasco.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/tabasco", "data-astro-cid-xxcpe5nt": true })}`)} </div> <!-- SEO Content --> <div class="tab-seo" data-astro-cid-xxcpe5nt> <h2 data-astro-cid-xxcpe5nt>El H. Cuerpo de Bomberos de Tabasco</h2> <p data-astro-cid-xxcpe5nt>
El <strong data-astro-cid-xxcpe5nt>H. Cuerpo de Bomberos de Tabasco</strong> protege a más de <strong data-astro-cid-xxcpe5nt>2.4 millones de tabasqueños</strong>
en uno de los estados más estratégicos de México por su riqueza petrolera y su singular geografía hídrica.
              Con 24,661 km² de territorio surcado por ríos, lagunas y pantanos, Tabasco presenta condiciones de emergencia
              únicas en el país que han forjado a un cuerpo de bomberos especializado tanto en HAZMAT industrial como en
              rescate acuático de alta complejidad.
</p> <h3 data-astro-cid-xxcpe5nt>¿Cómo contactar a los bomberos en Tabasco?</h3> <p data-astro-cid-xxcpe5nt>
En cualquier <strong data-astro-cid-xxcpe5nt>emergencia en Tabasco</strong>, marca el <strong data-astro-cid-xxcpe5nt>911</strong>. El Centro Estatal de
              Emergencias despacha la unidad más cercana. Para contacto directo: <strong data-astro-cid-xxcpe5nt>Villahermosa 993 315 3700</strong>,
<strong data-astro-cid-xxcpe5nt>Paraíso 933 333 3900</strong>, <strong data-astro-cid-xxcpe5nt>Macuspana 936 362 0500</strong>,
<strong data-astro-cid-xxcpe5nt>Cárdenas 937 372 0600</strong>, <strong data-astro-cid-xxcpe5nt>Comalcalco 933 334 1280</strong>.
</p> <h3 data-astro-cid-xxcpe5nt>Refinería Olmeca y la Industria Petrolera de Tabasco</h3> <p data-astro-cid-xxcpe5nt>
La <strong data-astro-cid-xxcpe5nt>Refinería Olmeca de Dos Bocas</strong>, en el municipio de Paraíso, es el mayor proyecto
              energético construido en México en décadas. Con una capacidad de <strong data-astro-cid-xxcpe5nt>340,000 barriles diarios</strong>
y una inversión superior a 17,000 millones de dólares, esta mega-refinería genera riesgos HAZMAT de
              máxima complejidad: incendios de tanques, derrames de hidrocarburos refinados, fugas de gas H₂S y
              emergencias costeras en el Golfo de México. Los bomberos de Paraíso operan con los estándares más altos
              de respuesta industrial del sureste mexicano.
</p> <h3 data-astro-cid-xxcpe5nt>Inundaciones: El Principal Riesgo Crónico de Tabasco</h3> <p data-astro-cid-xxcpe5nt>
La llanura fluvial de Tabasco, dominada por los ríos <strong data-astro-cid-xxcpe5nt>Grijalva y Usumacinta</strong>, es la zona
              con mayor frecuencia de inundaciones de México. En 2007, la catástrofe hídrica más severa del país en el
              siglo XXI inundó el <strong data-astro-cid-xxcpe5nt>80% del territorio tabasqueño</strong> y afectó a más de <strong data-astro-cid-xxcpe5nt>1.5 millones
              de personas</strong>. Los bomberos tabasqueños han desarrollado protocolos únicos de evacuación masiva,
              rescate en corriente, y operación de flotas de lanchas para atender emergencias en comunidades rurales
              inaccesibles por tierra durante las lluvias.
</p> <h3 data-astro-cid-xxcpe5nt>Pantanos de Centla y Rescate Acuático Especializado</h3> <p data-astro-cid-xxcpe5nt>
Los <strong data-astro-cid-xxcpe5nt>Pantanos de Centla</strong> son la Reserva de la Biósfera de humedales más grande del
              sureste mexicano, declarada sitio Ramsar de importancia internacional. Sus 302,706 hectáreas de pantanos,
              lagunas, manglares y canales fluviales exigen bomberos con <strong data-astro-cid-xxcpe5nt>certificación avanzada en rescate
              acuático</strong>: manejo de lanchas de motor en zonas de alta vegetación, buceo en aguas turbias,
              y coordinación con la CONANP y la SEMAR para emergencias en este ecosistema único.
</p> <h3 data-astro-cid-xxcpe5nt>Cacao, Patrimonio Olmeca y Diversidad Cultural</h3> <p data-astro-cid-xxcpe5nt>
Tabasco es el <strong data-astro-cid-xxcpe5nt>principal productor de cacao de México</strong>, con Comalcalco como capital
              mundial del chocolate artesanal tabasqueño. La región también alberga la <strong data-astro-cid-xxcpe5nt>Zona Arqueológica
              La Venta</strong>, sede de la civilización Olmeca —la madre de todas las culturas mesoamericanas—
              y la <strong data-astro-cid-xxcpe5nt>Zona Arqueológica Comalcalco</strong>, único sitio maya construido en ladrillo cocido.
              Los bomberos de estas zonas tienen protocolos especiales de protección del patrimonio histórico
              ante incendios y emergencias.
</p> <h3 data-astro-cid-xxcpe5nt>Servicios de los Bomberos Tabasqueños</h3> <p data-astro-cid-xxcpe5nt>
Los bomberos de Tabasco están certificados para atender:
<strong data-astro-cid-xxcpe5nt>incendios industriales HAZMAT</strong> (crudo, gas natural, H₂S, productos refinados);
<strong data-astro-cid-xxcpe5nt>rescate acuático fluvial y lacustre</strong> (Grijalva, Usumacinta, Pantanos de Centla);
<strong data-astro-cid-xxcpe5nt>evacuaciones masivas por inundación</strong>;
<strong data-astro-cid-xxcpe5nt>rescate aeroportuario ARFF</strong> en el Aeropuerto Carlos Rovirosa Pérez;
<strong data-astro-cid-xxcpe5nt>incendios forestales y de manglar</strong>;
<strong data-astro-cid-xxcpe5nt>rescate espeleológico</strong> en las Grutas de Coconá y Villa Luz (Tacotalpa);
<strong data-astro-cid-xxcpe5nt>apoyo humanitario migratorio</strong> en la frontera con Guatemala (Tenosique); y
<strong data-astro-cid-xxcpe5nt>coordinación con PEMEX</strong> ante emergencias en pozos, ductos y plantas.
</p> </div> </div> <!-- Sidebar --> <aside class="tab-sidebar" data-astro-cid-xxcpe5nt> <!-- Quick Access --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Filtrar por Municipio</h4> <ul class="tab-sidebar__municipios" data-astro-cid-xxcpe5nt> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-xxcpe5nt> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u")}`, "href")} data-astro-cid-xxcpe5nt> <span class="tab-sidebar__bullet" data-astro-cid-xxcpe5nt></span> <span data-astro-cid-xxcpe5nt>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="tab-sidebar__card tab-sidebar__card--emergency" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Teléfonos de Emergencia</h4> <div class="tab-sidebar__emergency-list" data-astro-cid-xxcpe5nt> <div class="tab-sidebar__emergency-item" data-astro-cid-xxcpe5nt> <span class="tab-sidebar__emergency-number" data-astro-cid-xxcpe5nt>911</span> <span class="tab-sidebar__emergency-label" data-astro-cid-xxcpe5nt>Emergencias Nacionales</span> </div> <div class="tab-sidebar__emergency-item" data-astro-cid-xxcpe5nt> <span class="tab-sidebar__emergency-number" data-astro-cid-xxcpe5nt>993 315 3700</span> <span class="tab-sidebar__emergency-label" data-astro-cid-xxcpe5nt>Bomberos Villahermosa</span> </div> <div class="tab-sidebar__emergency-item" data-astro-cid-xxcpe5nt> <span class="tab-sidebar__emergency-number" data-astro-cid-xxcpe5nt>933 333 3900</span> <span class="tab-sidebar__emergency-label" data-astro-cid-xxcpe5nt>Bomberos Paraíso</span> </div> <div class="tab-sidebar__emergency-item" data-astro-cid-xxcpe5nt> <span class="tab-sidebar__emergency-number" data-astro-cid-xxcpe5nt>937 372 0600</span> <span class="tab-sidebar__emergency-label" data-astro-cid-xxcpe5nt>Bomberos Cárdenas</span> </div> <div class="tab-sidebar__emergency-item" data-astro-cid-xxcpe5nt> <span class="tab-sidebar__emergency-number" data-astro-cid-xxcpe5nt>933 334 1280</span> <span class="tab-sidebar__emergency-label" data-astro-cid-xxcpe5nt>Bomberos Comalcalco</span> </div> </div> </div> <!-- Regiones --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Regiones del Estado</h4> <ul class="tab-sidebar__regiones" data-astro-cid-xxcpe5nt> <li data-astro-cid-xxcpe5nt> <span class="tab-sidebar__region-name" data-astro-cid-xxcpe5nt>Región Centro</span> <span class="tab-sidebar__region-desc" data-astro-cid-xxcpe5nt>Villahermosa (capital), Nacajuca, Jalapa</span> </li> <li data-astro-cid-xxcpe5nt> <span class="tab-sidebar__region-name" data-astro-cid-xxcpe5nt>Región Petrolera</span> <span class="tab-sidebar__region-desc" data-astro-cid-xxcpe5nt>Macuspana, Cunduacán, Paraíso-Dos Bocas</span> </li> <li data-astro-cid-xxcpe5nt> <span class="tab-sidebar__region-name" data-astro-cid-xxcpe5nt>Región Chontalpa</span> <span class="tab-sidebar__region-desc" data-astro-cid-xxcpe5nt>Cárdenas, Comalcalco, Jalpa de Méndez, Huimanguillo</span> </li> <li data-astro-cid-xxcpe5nt> <span class="tab-sidebar__region-name" data-astro-cid-xxcpe5nt>Región Ríos</span> <span class="tab-sidebar__region-desc" data-astro-cid-xxcpe5nt>Tenosique, Emiliano Zapata, Balancán, Tacotalpa, Centla</span> </li> </ul> </div> <!-- Nearby States --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Estados Vecinos</h4> <ul class="tab-sidebar__states" data-astro-cid-xxcpe5nt> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-xxcpe5nt> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-xxcpe5nt> <span data-astro-cid-xxcpe5nt>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-xxcpe5nt> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-xxcpe5nt></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="tab-sidebar__card tab-sidebar__card--cta" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>¿Equipas una Estación en TAB?</h4> <p data-astro-cid-xxcpe5nt>Distribuimos equipo NFPA certificado para bomberos en Tabasco: HAZMAT petroquímico, rescate acuático y respuesta a inundaciones</p> <a href="/cotizar" class="tab-sidebar__cta-btn" data-astro-cid-xxcpe5nt>Solicitar Cotización</a> </div> <!-- Products --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Equipo para Bomberos</h4> <ul class="tab-sidebar__products" data-astro-cid-xxcpe5nt> <li data-astro-cid-xxcpe5nt><a href="/productos/trajes-para-bomberos" data-astro-cid-xxcpe5nt>Trajes Estructurales NFPA</a></li> <li data-astro-cid-xxcpe5nt><a href="/productos/cascos-para-bomberos" data-astro-cid-xxcpe5nt>Cascos de Bombero</a></li> <li data-astro-cid-xxcpe5nt><a href="/productos/scba" data-astro-cid-xxcpe5nt>Equipos SCBA</a></li> <li data-astro-cid-xxcpe5nt><a href="/productos/herramientas-rescate" data-astro-cid-xxcpe5nt>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="tab-sidebar__link" data-astro-cid-xxcpe5nt>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-xxcpe5nt> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-xxcpe5nt></path> </svg> </a> </div> <!-- Back to Directory --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <a href="/directorio" class="tab-sidebar__back" data-astro-cid-xxcpe5nt> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-xxcpe5nt> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-xxcpe5nt></path> </svg> <span data-astro-cid-xxcpe5nt>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="tab-sidebar__card" data-astro-cid-xxcpe5nt> <h4 data-astro-cid-xxcpe5nt>Contacto BOMBERO.MX</h4> <ul class="tab-sidebar__contact" data-astro-cid-xxcpe5nt> <li data-astro-cid-xxcpe5nt><a href="tel:+525520780102" data-astro-cid-xxcpe5nt>55 2078 0102</a></li> <li data-astro-cid-xxcpe5nt><a href="https://wa.me/525520780102" data-astro-cid-xxcpe5nt>WhatsApp</a></li> <li data-astro-cid-xxcpe5nt><a href="mailto:ventas@bombero.mx" data-astro-cid-xxcpe5nt>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tabasco.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tabasco.astro";
const $$url = "/directorio/tabasco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tabasco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
