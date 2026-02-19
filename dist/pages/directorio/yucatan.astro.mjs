import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesYucatan } from '../../chunks/estaciones-yucatan_wGnjLXOj.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Yucatan = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Campeche", slug: "campeche" },
    { nombre: "Quintana Roo", slug: "quintana-roo" }
  ];
  const keywords = [
    "bomberos yucatan",
    "bomberos merida",
    "estaciones bomberos yucatan",
    "emergencias yucatan 911",
    "cuerpo bomberos merida",
    "rescate cenotes yucatan",
    "bomberos chichen itza",
    "bomberos progreso yucatan",
    "directorio bomberos sureste mexico"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Yucat\xE1n", url: "/directorio/yucatan" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Yucat\xE1n, M\xE9xico",
    "description": "Directorio completo de las estaciones de bomberos en Yucat\xE1n. Tel\xE9fonos de emergencia, direcciones y servicios. 18 estaciones cubriendo la Zona Metropolitana de M\xE9rida, Puerto Progreso, Chich\xE9n Itz\xE1, cenotes y reservas bi\xF3sfera UNESCO. Emergencias 911.",
    "numberOfItems": estacionesYucatan.length,
    "itemListElement": estacionesYucatan.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Yucat\xE1n",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/yucatan/${e.slug}`
      }
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1l es el tel\xE9fono de los bomberos en M\xE9rida, Yucat\xE1n?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El n\xFAmero de emergencias en M\xE9rida y toda Yucat\xE1n es el 911. El Cuartel Central de Bomberos de M\xE9rida tiene l\xEDnea directa al 999 924 9242. Para Puerto Progreso: 969 935 0071. Para Valladolid: 985 856 2023."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFQu\xE9 pasa si hay una emergencia en Chich\xE9n Itz\xE1?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Unidad de Bomberos de Tinum/Chich\xE9n Itz\xE1 est\xE1 estacionada dentro de la zona arqueol\xF3gica. Tienen protocolo especial ICOMOS para evacuaci\xF3n masiva de hasta 40,000 visitantes en equinoxios. Contacta al 911 o al 985 851 0129. El tiempo de respuesta es de 3-5 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFC\xF3mo pedir rescate en un cenote en Yucat\xE1n?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Llama inmediatamente al 911. Los bomberos de Yucat\xE1n tienen equipos especializados en rescate espeleoacu\xE1tico para los m\xE1s de 6,000 cenotes del estado. Las estaciones de Valladolid y M\xE9rida cuentan con equipos de buceo y rescate en espacios confinados subacu\xE1ticos."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFLos bomberos de Yucat\xE1n tienen equipo para emergencias en cruceros en Puerto Progreso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S\xED. La Estaci\xF3n de Progreso est\xE1 especializada en emergencias portuarias y mar\xEDtimas. Tienen protocolo para el muelle m\xE1s largo del mundo (6.5 km) y coordinaci\xF3n con Capitan\xEDa de Puerto SEMAR. Para emergencias en cruceros: 969 935 0071 o 911."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas estaciones de bomberos hay en Yucat\xE1n?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yucat\xE1n cuenta con 18 estaciones de bomberos activas con 620 elementos. La Zona Metropolitana de M\xE9rida tiene 5 estaciones, m\xE1s estaciones en Progreso, Valladolid, Chich\xE9n Itz\xE1, Tizim\xEDn, Izamal, Motul, Um\xE1n, Kanas\xEDn, Ticul, Oxkutzcab, Tekax, Celest\xFAn y R\xEDo Lagartos."
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Bomberos en Yucat\xE1n | 18 Estaciones | Directorio Oficial BOMBERO.MX", "description": "Directorio completo del H. Cuerpo de Bomberos de Yucat\xE1n. 18 estaciones en M\xE9rida, Progreso, Chich\xE9n Itz\xE1, cenotes y reservas UNESCO. Tel\xE9fonos de emergencia y servicios. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/yucatan", "jsonLd": [breadcrumbSchema, itemListSchema, faqSchema], "data-astro-cid-gciqoxzk": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="yuc-hero" data-astro-cid-gciqoxzk> <div class="yuc-hero__bg" data-astro-cid-gciqoxzk> <div class="yuc-hero__gradient" data-astro-cid-gciqoxzk></div> <div class="yuc-hero__pattern" data-astro-cid-gciqoxzk></div> </div> <div class="container" data-astro-cid-gciqoxzk> <div class="yuc-hero__container" data-astro-cid-gciqoxzk> <!-- Left Column --> <div class="yuc-hero__content" data-astro-cid-gciqoxzk> <nav class="yuc-hero__breadcrumb" data-astro-cid-gciqoxzk> <a href="/" data-astro-cid-gciqoxzk>Inicio</a> <span data-astro-cid-gciqoxzk>/</span> <a href="/directorio" data-astro-cid-gciqoxzk>Directorio</a> <span data-astro-cid-gciqoxzk>/</span> <span data-astro-cid-gciqoxzk>Yucatán</span> </nav> <span class="yuc-hero__badge" data-astro-cid-gciqoxzk> <span class="yuc-hero__badge-dot" data-astro-cid-gciqoxzk></span>
YUC
</span> <h1 class="yuc-hero__title" data-astro-cid-gciqoxzk>
Estaciones de Bomberos en
<span class="yuc-hero__highlight" data-astro-cid-gciqoxzk>Yucatán</span> </h1> <p class="yuc-hero__desc" data-astro-cid-gciqoxzk>
Directorio oficial del <strong data-astro-cid-gciqoxzk>H. Cuerpo de Bomberos de Yucatán</strong>.
            Chichén Itzá, 6,000+ cenotes, Puerto Progreso y las Reservas Biósfera
            UNESCO de Celestún y Ría Lagartos. El sureste más visitado de México.
</p> <div class="yuc-hero__stats" data-astro-cid-gciqoxzk> <div class="yuc-hero__stat" data-astro-cid-gciqoxzk> <span class="yuc-hero__stat-number" data-astro-cid-gciqoxzk>${estacionesYucatan.length}</span> <span class="yuc-hero__stat-label" data-astro-cid-gciqoxzk>Estaciones</span> </div> <div class="yuc-hero__stat" data-astro-cid-gciqoxzk> <span class="yuc-hero__stat-number" data-astro-cid-gciqoxzk>620</span> <span class="yuc-hero__stat-label" data-astro-cid-gciqoxzk>Bomberos</span> </div> <div class="yuc-hero__stat" data-astro-cid-gciqoxzk> <span class="yuc-hero__stat-number" data-astro-cid-gciqoxzk>24/7</span> <span class="yuc-hero__stat-label" data-astro-cid-gciqoxzk>Servicio</span> </div> <div class="yuc-hero__stat" data-astro-cid-gciqoxzk> <span class="yuc-hero__stat-number" data-astro-cid-gciqoxzk>2.3M</span> <span class="yuc-hero__stat-label" data-astro-cid-gciqoxzk>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="yuc-hero__seo" data-astro-cid-gciqoxzk> <h2 class="yuc-hero__seo-title" data-astro-cid-gciqoxzk>Chichén Itzá y 6,000 Cenotes</h2> <p class="yuc-hero__seo-text" data-astro-cid-gciqoxzk>
Yucatán alberga la <strong data-astro-cid-gciqoxzk>Maravilla del Mundo Moderno Chichén Itzá</strong>
con 5 millones de turistas/año, y más de <strong data-astro-cid-gciqoxzk>6,000 cenotes únicos en el mundo</strong>.
            Los bomberos yucatecos son los únicos en México especializados en
<strong data-astro-cid-gciqoxzk>rescate espeleoacuático en cenotes y sistemas kársticos subterráneos</strong>.
</p> <h2 class="yuc-hero__seo-title" data-astro-cid-gciqoxzk>Puerto Progreso y Corredor Industrial</h2> <p class="yuc-hero__seo-text" data-astro-cid-gciqoxzk>
El <strong data-astro-cid-gciqoxzk>Puerto de Progreso</strong> opera el muelle más largo del mundo (6.5 km)
            con 150+ cruceros internacionales al año. El <strong data-astro-cid-gciqoxzk>Corredor Industrial Mérida</strong>
concentra a LaFarge-Holcim, Grupo Bimbo, FEMSA y más de 200 empresas
            en el <strong data-astro-cid-gciqoxzk>Parque Industrial más activo del sureste</strong>.
</p> </div> </div> </div> </section>  <section class="yuc-cenotes-banner" data-astro-cid-gciqoxzk> <div class="container" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__grid" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__item" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__icon" data-astro-cid-gciqoxzk>🏺</div> <div data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Chichén Itzá</strong> <span data-astro-cid-gciqoxzk>Maravilla del Mundo · 5M turistas/año · Protocolo ICOMOS</span> </div> </div> <div class="yuc-cenotes-banner__item" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__icon" data-astro-cid-gciqoxzk>💧</div> <div data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>6,000+ Cenotes</strong> <span data-astro-cid-gciqoxzk>Rescate espeleoacuático · Únicos en el mundo</span> </div> </div> <div class="yuc-cenotes-banner__item" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__icon" data-astro-cid-gciqoxzk>⚓</div> <div data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>Puerto Progreso</strong> <span data-astro-cid-gciqoxzk>Muelle 6.5 km · 150+ cruceros/año · HAZMAT marítimo</span> </div> </div> <div class="yuc-cenotes-banner__item" data-astro-cid-gciqoxzk> <div class="yuc-cenotes-banner__icon" data-astro-cid-gciqoxzk>🦩</div> <div data-astro-cid-gciqoxzk> <strong data-astro-cid-gciqoxzk>2 Reservas UNESCO</strong> <span data-astro-cid-gciqoxzk>Celestún y Ría Lagartos · Flamingos · Rescate acuático</span> </div> </div> </div> </div> </section>  <section class="yuc-emergency" data-astro-cid-gciqoxzk> <div class="container" data-astro-cid-gciqoxzk> <div class="yuc-emergency__content" data-astro-cid-gciqoxzk> <div class="yuc-emergency__icon" data-astro-cid-gciqoxzk> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gciqoxzk> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-gciqoxzk></path> </svg> </div> <div class="yuc-emergency__text" data-astro-cid-gciqoxzk> <span class="yuc-emergency__label" data-astro-cid-gciqoxzk>Emergencias en Yucatán</span> <span class="yuc-emergency__number" data-astro-cid-gciqoxzk>911</span> </div> <p class="yuc-emergency__desc" data-astro-cid-gciqoxzk>
Número único de emergencias en todo Yucatán. Centro de Coordinación CECOM Yucatán, disponible 24/7 los 365 días del año.
</p> </div> </div> </section>  <section class="yuc-main" data-astro-cid-gciqoxzk> <div class="container" data-astro-cid-gciqoxzk> <div class="yuc-main__grid" data-astro-cid-gciqoxzk> <!-- Stations Grid --> <div class="yuc-main__content" data-astro-cid-gciqoxzk> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Yucat\xE1n", "description": "Informaci\xF3n de contacto actualizada de todas las estaciones del H. Cuerpo de Bomberos en Yucat\xE1n. Desde la Zona Metropolitana de M\xE9rida hasta las reservas bi\xF3sfera UNESCO. Selecciona una estaci\xF3n para ver sus servicios, cobertura y datos de contacto.", "data-astro-cid-gciqoxzk": true })} <div class="yuc-stations-grid" data-astro-cid-gciqoxzk> ${estacionesYucatan.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/yucatan", "data-astro-cid-gciqoxzk": true })}`)} </div> <!-- FAQ Section --> <div class="yuc-faq" data-astro-cid-gciqoxzk> <h2 class="yuc-faq__title" data-astro-cid-gciqoxzk>Preguntas Frecuentes — Bomberos Yucatán</h2> <div class="yuc-faq__list" data-astro-cid-gciqoxzk> <div class="yuc-faq__item" data-astro-cid-gciqoxzk> <h3 data-astro-cid-gciqoxzk>¿Cuál es el teléfono de los bomberos en Mérida?</h3> <p data-astro-cid-gciqoxzk>Marca el <strong data-astro-cid-gciqoxzk>911</strong> desde cualquier teléfono. Cuartel Central Mérida: <a href="tel:9999249242" data-astro-cid-gciqoxzk>999 924 9242</a>. Puerto Progreso: <a href="tel:9699350071" data-astro-cid-gciqoxzk>969 935 0071</a>. Valladolid (acceso a cenotes y Chichén Itzá): <a href="tel:9858562023" data-astro-cid-gciqoxzk>985 856 2023</a>.</p> </div> <div class="yuc-faq__item" data-astro-cid-gciqoxzk> <h3 data-astro-cid-gciqoxzk>¿Hay bomberos especializados en rescate en cenotes?</h3> <p data-astro-cid-gciqoxzk>Sí. Las estaciones de Valladolid y Mérida cuentan con unidades de <strong data-astro-cid-gciqoxzk>rescate espeleoacuático</strong> entrenadas para los más de 6,000 cenotes de Yucatán. Son los únicos bomberos de México con esta especialidad certificada para sistemas kársticos subterráneos.</p> </div> <div class="yuc-faq__item" data-astro-cid-gciqoxzk> <h3 data-astro-cid-gciqoxzk>¿Qué pasa si hay emergencia en Chichén Itzá?</h3> <p data-astro-cid-gciqoxzk>La <strong data-astro-cid-gciqoxzk>Unidad de Tinum/Chichén Itzá</strong> responde en 3-5 minutos con protocolo ICOMOS especial. Para equinoxios (40,000+ visitantes en un día), activa el plan de evacuación masiva coordinado con INAH y Policía Federal.</p> </div> <div class="yuc-faq__item" data-astro-cid-gciqoxzk> <h3 data-astro-cid-gciqoxzk>¿Los bomberos de Yucatán atienden huracanes?</h3> <p data-astro-cid-gciqoxzk>Sí. Las estaciones costeras de <strong data-astro-cid-gciqoxzk>Progreso, Celestún y Río Lagartos</strong> tienen protocolos específicos de evacuación por huracanes, coordinados con el Sistema Nacional de Protección Civil (CENAPRED) y Protección Civil Yucatán.</p> </div> </div> </div> <!-- SEO Content --> <div class="yuc-seo" data-astro-cid-gciqoxzk> <h2 data-astro-cid-gciqoxzk>El H. Cuerpo de Bomberos de Yucatán</h2> <p data-astro-cid-gciqoxzk>
El <strong data-astro-cid-gciqoxzk>H. Cuerpo de Bomberos de Yucatán</strong> protege a más de <strong data-astro-cid-gciqoxzk>2.3 millones de yucatecos</strong>
en 106 municipios del estado más turístico del sureste de México. Con 18 estaciones estratégicamente
              ubicadas, los bomberos yucatecos son los únicos del país certificados para rescate espeleoacuático
              en cenotes, emergencias en zonas arqueológicas UNESCO y operaciones en reservas de biósfera.
</p> <h3 data-astro-cid-gciqoxzk>¿Cómo contactar a los bomberos en Yucatán?</h3> <p data-astro-cid-gciqoxzk>
En caso de <strong data-astro-cid-gciqoxzk>emergencia en Yucatán</strong>, marca el <strong data-astro-cid-gciqoxzk>911</strong> desde cualquier teléfono.
              El <strong data-astro-cid-gciqoxzk>CECOM Yucatán</strong> coordina la respuesta de bomberos, policía y servicios médicos.
              Para emergencias específicas en Puerto Progreso contacta al 969 935 0071, en Valladolid al
              985 856 2023, o directamente a la estación más cercana usando este directorio.
</p> <h3 data-astro-cid-gciqoxzk>Especialidades Únicas de los Bomberos de Yucatán</h3> <p data-astro-cid-gciqoxzk>
Los bomberos yucatecos desarrollaron capacidades únicas en México:
<strong data-astro-cid-gciqoxzk>rescate espeleoacuático</strong> en los 6,000+ cenotes y sistemas kársticos subterráneos;
<strong data-astro-cid-gciqoxzk>emergencias en zonas arqueológicas</strong> (Chichén Itzá con 5M turistas/año, Uxmal UNESCO,
              Ek Balam); <strong data-astro-cid-gciqoxzk>operaciones portuarias</strong> en el Puerto de Progreso (muelle más largo
              del mundo); <strong data-astro-cid-gciqoxzk>rescate en humedales</strong> de Celestún y Ría Lagartos (Reservas Biósfera UNESCO);
              y <strong data-astro-cid-gciqoxzk>protección de patrimonio histórico colonial</strong> en el Centro de Mérida
              (Patrimonio Mundial UNESCO).
</p> <h3 data-astro-cid-gciqoxzk>Zonas de Mayor Riesgo en Yucatán</h3> <p data-astro-cid-gciqoxzk>
Yucatán presenta riesgos únicos: <strong data-astro-cid-gciqoxzk>aglomeraciones turísticas masivas</strong> en Chichén Itzá,
              Uxmal y cenotes; <strong data-astro-cid-gciqoxzk>emergencias industriales</strong> en el Corredor Industrial Mérida-Umán
              (LaFarge-Holcim, Grupo Bimbo, FEMSA); <strong data-astro-cid-gciqoxzk>HAZMAT marítimo</strong> en Puerto Progreso
              (granelera, cruceros); <strong data-astro-cid-gciqoxzk>incendios forestales</strong> en selva maya durante estiaje
              (enero-mayo); <strong data-astro-cid-gciqoxzk>huracanes</strong> en zona costera norte; y <strong data-astro-cid-gciqoxzk>rescates subacuáticos</strong>
en cenotes y sistemas espeleológicos.
</p> </div> </div> <!-- Sidebar --> <aside class="yuc-sidebar" data-astro-cid-gciqoxzk> <!-- Municipios --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Filtrar por Municipio</h4> <ul class="yuc-sidebar__municipios" data-astro-cid-gciqoxzk> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-gciqoxzk> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ü/g, "u")}`, "href")} data-astro-cid-gciqoxzk> <span class="yuc-sidebar__bullet" data-astro-cid-gciqoxzk></span> <span data-astro-cid-gciqoxzk>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="yuc-sidebar__card yuc-sidebar__card--emergency" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Teléfonos de Emergencia</h4> <div class="yuc-sidebar__emergency-list" data-astro-cid-gciqoxzk> <div class="yuc-sidebar__emergency-item" data-astro-cid-gciqoxzk> <span class="yuc-sidebar__emergency-number" data-astro-cid-gciqoxzk>911</span> <span class="yuc-sidebar__emergency-label" data-astro-cid-gciqoxzk>Emergencias</span> </div> <div class="yuc-sidebar__emergency-item" data-astro-cid-gciqoxzk> <span class="yuc-sidebar__emergency-number" data-astro-cid-gciqoxzk>999 924 9242</span> <span class="yuc-sidebar__emergency-label" data-astro-cid-gciqoxzk>Cuartel Central Mérida</span> </div> <div class="yuc-sidebar__emergency-item" data-astro-cid-gciqoxzk> <span class="yuc-sidebar__emergency-number" data-astro-cid-gciqoxzk>969 935 0071</span> <span class="yuc-sidebar__emergency-label" data-astro-cid-gciqoxzk>Bomberos Progreso</span> </div> <div class="yuc-sidebar__emergency-item" data-astro-cid-gciqoxzk> <span class="yuc-sidebar__emergency-number" data-astro-cid-gciqoxzk>985 856 2023</span> <span class="yuc-sidebar__emergency-label" data-astro-cid-gciqoxzk>Bomberos Valladolid</span> </div> <div class="yuc-sidebar__emergency-item" data-astro-cid-gciqoxzk> <span class="yuc-sidebar__emergency-number" data-astro-cid-gciqoxzk>999 930 3760</span> <span class="yuc-sidebar__emergency-label" data-astro-cid-gciqoxzk>Protección Civil YUC</span> </div> </div> </div> <!-- Regiones --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Regiones del Estado</h4> <ul class="yuc-sidebar__regiones" data-astro-cid-gciqoxzk> <li data-astro-cid-gciqoxzk> <span class="yuc-sidebar__region-name" data-astro-cid-gciqoxzk>Zona Metropolitana Mérida</span> <span class="yuc-sidebar__region-desc" data-astro-cid-gciqoxzk>Central, Norte, Aeropuerto, Industrial, Kanasín, Umán</span> </li> <li data-astro-cid-gciqoxzk> <span class="yuc-sidebar__region-name" data-astro-cid-gciqoxzk>Zona Costera y Puerto</span> <span class="yuc-sidebar__region-desc" data-astro-cid-gciqoxzk>Progreso, Celestún, Río Lagartos</span> </li> <li data-astro-cid-gciqoxzk> <span class="yuc-sidebar__region-name" data-astro-cid-gciqoxzk>Zona Turística Maya</span> <span class="yuc-sidebar__region-desc" data-astro-cid-gciqoxzk>Valladolid, Chichén Itzá/Tinum, Izamal</span> </li> <li data-astro-cid-gciqoxzk> <span class="yuc-sidebar__region-name" data-astro-cid-gciqoxzk>Zona Norte</span> <span class="yuc-sidebar__region-desc" data-astro-cid-gciqoxzk>Tizimín, Motul</span> </li> <li data-astro-cid-gciqoxzk> <span class="yuc-sidebar__region-name" data-astro-cid-gciqoxzk>Zona Sur — Ruta Puuc</span> <span class="yuc-sidebar__region-desc" data-astro-cid-gciqoxzk>Ticul, Oxkutzcab, Tekax</span> </li> </ul> </div> <!-- Nearby States --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Estados Vecinos</h4> <ul class="yuc-sidebar__states" data-astro-cid-gciqoxzk> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-gciqoxzk> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-gciqoxzk> <span data-astro-cid-gciqoxzk>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gciqoxzk> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-gciqoxzk></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="yuc-sidebar__card yuc-sidebar__card--cta" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>¿Equipas una Estación en YUC?</h4> <p data-astro-cid-gciqoxzk>Distribuimos equipo NFPA certificado para cenotes, HAZMAT marítimo portuario, zonas arqueológicas y emergencias costeras</p> <a href="/cotizar" class="yuc-sidebar__cta-btn" data-astro-cid-gciqoxzk>Solicitar Cotización</a> </div> <!-- Products --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Equipo para Bomberos</h4> <ul class="yuc-sidebar__products" data-astro-cid-gciqoxzk> <li data-astro-cid-gciqoxzk><a href="/productos/trajes-para-bomberos" data-astro-cid-gciqoxzk>Trajes Estructurales NFPA</a></li> <li data-astro-cid-gciqoxzk><a href="/productos/cascos-para-bomberos" data-astro-cid-gciqoxzk>Cascos de Bombero</a></li> <li data-astro-cid-gciqoxzk><a href="/productos/scba" data-astro-cid-gciqoxzk>Equipos SCBA</a></li> <li data-astro-cid-gciqoxzk><a href="/productos/herramientas-rescate" data-astro-cid-gciqoxzk>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="yuc-sidebar__link" data-astro-cid-gciqoxzk>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gciqoxzk> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-gciqoxzk></path> </svg> </a> </div> <!-- Back to Directory --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <a href="/directorio" class="yuc-sidebar__back" data-astro-cid-gciqoxzk> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-gciqoxzk> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-gciqoxzk></path> </svg> <span data-astro-cid-gciqoxzk>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="yuc-sidebar__card" data-astro-cid-gciqoxzk> <h4 data-astro-cid-gciqoxzk>Contacto BOMBERO.MX</h4> <ul class="yuc-sidebar__contact" data-astro-cid-gciqoxzk> <li data-astro-cid-gciqoxzk><a href="tel:+525520780102" data-astro-cid-gciqoxzk>55 2078 0102</a></li> <li data-astro-cid-gciqoxzk><a href="https://wa.me/525520780102" data-astro-cid-gciqoxzk>WhatsApp</a></li> <li data-astro-cid-gciqoxzk><a href="mailto:ventas@bombero.mx" data-astro-cid-gciqoxzk>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/yucatan.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/yucatan.astro";
const $$url = "/directorio/yucatan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Yucatan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
