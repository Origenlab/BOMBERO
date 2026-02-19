import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesZacatecas } from '../../chunks/estaciones-zacatecas_CBAGRav2.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Zacatecas = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "San Luis Potos\xED", slug: "san-luis-potosi" },
    { nombre: "Jalisco", slug: "jalisco" },
    { nombre: "Durango", slug: "durango" }
  ];
  const keywords = [
    "bomberos zacatecas",
    "estaciones bomberos zacatecas",
    "emergencias zacatecas 911",
    "cuerpo bomberos zacatecas",
    "bomberos fresnillo minera penasquito",
    "bomberos hazmat mineria zacatecas",
    "bomberos centro historico zacatecas unesco",
    "rescate minero zacatecas",
    "directorio bomberos norte mexico"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Zacatecas", url: "/directorio/zacatecas" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Zacatecas, M\xE9xico",
    "description": "Directorio completo de las estaciones de bomberos en Zacatecas. Tel\xE9fonos de emergencia, direcciones y servicios. 15 estaciones con capacidades HAZMAT para el corredor minero de plata m\xE1s importante del mundo. Emergencias 911.",
    "numberOfItems": estacionesZacatecas.length,
    "itemListElement": estacionesZacatecas.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Zacatecas",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/zacatecas/${e.slug}`
      }
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1l es el tel\xE9fono de los bomberos en Zacatecas capital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El n\xFAmero de emergencias en Zacatecas y todo el estado es el 911. El Cuartel Central de Bomberos de Zacatecas tiene l\xEDnea directa al 492 922 0020. Para Fresnillo (hub minero): 493 932 0101. Para Protecci\xF3n Civil Zacatecas: 492 922 8823."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFLos bomberos de Zacatecas atienden emergencias en minas activas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S\xED. La estaci\xF3n de Fresnillo cuenta con equipo HAZMAT nivel 3 especializado en explosivos industriales, cianuro y xantatos usados en la Minera Pe\xF1asquito (Newmont), la mayor mina de plata del mundo. Los bomberos tienen protocolos ICS coordinados con las brigadas internas de Newmont y Fresnillo plc."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFHay protecci\xF3n especial para el Centro Hist\xF3rico UNESCO de Zacatecas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S\xED. El Cuartel Central de Bomberos de Zacatecas tiene protocolos especiales coordinados con el INAH para la Zona de Monumentos Hist\xF3ricos declarada Patrimonio de la Humanidad por la UNESCO en 1993. Los bomberos est\xE1n capacitados para proteger la Catedral Barroca, el Mercado Gonz\xE1lez Ortega, la mina El Ed\xE9n y el telef\xE9rico hist\xF3rico."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFQu\xE9 es el HAZMAT minero que manejan los bomberos de Zacatecas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El HAZMAT minero en Zacatecas incluye: explosivos industriales (ANFO, detonadores), cianuro de sodio (cianuraci\xF3n de plata), xantatos (flotaci\xF3n de minerales), \xE1cido sulf\xFArico y otros reactivos de procesamiento. Los bomberos de Fresnillo y Concepci\xF3n del Oro est\xE1n certificados con HAZMAT nivel 2 y 3 para estos materiales espec\xEDficos de la industria minera."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas estaciones de bomberos hay en Zacatecas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zacatecas cuenta con 15 estaciones de bomberos activas con 480 elementos. Las estaciones cubren: Zacatecas capital, Guadalupe, Fresnillo, Jerez, Sombrerete, R\xEDo Grande, Loreto, Tlaltenango, Juchipila, Valpara\xEDso, Nochistl\xE1n, Concepci\xF3n del Oro, Juan Aldama, Pinos y Villanueva, abarcando los principales corredores mineros, tur\xEDsticos y carreteros del estado."
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Bomberos en Zacatecas | 15 Estaciones | HAZMAT Minero | Directorio BOMBERO.MX", "description": "Directorio completo del H. Cuerpo de Bomberos de Zacatecas. 15 estaciones con HAZMAT especializado para la mayor mina de plata del mundo. Centro Hist\xF3rico UNESCO, Fresnillo, Jerez, Sombrerete. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/zacatecas", "jsonLd": [breadcrumbSchema, itemListSchema, faqSchema], "data-astro-cid-dqrlzvou": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="zac-hero" data-astro-cid-dqrlzvou> <div class="zac-hero__bg" data-astro-cid-dqrlzvou> <div class="zac-hero__gradient" data-astro-cid-dqrlzvou></div> <div class="zac-hero__pattern" data-astro-cid-dqrlzvou></div> </div> <div class="container" data-astro-cid-dqrlzvou> <div class="zac-hero__container" data-astro-cid-dqrlzvou> <!-- Left Column --> <div class="zac-hero__content" data-astro-cid-dqrlzvou> <nav class="zac-hero__breadcrumb" data-astro-cid-dqrlzvou> <a href="/" data-astro-cid-dqrlzvou>Inicio</a> <span data-astro-cid-dqrlzvou>/</span> <a href="/directorio" data-astro-cid-dqrlzvou>Directorio</a> <span data-astro-cid-dqrlzvou>/</span> <span data-astro-cid-dqrlzvou>Zacatecas</span> </nav> <span class="zac-hero__badge" data-astro-cid-dqrlzvou> <span class="zac-hero__badge-dot" data-astro-cid-dqrlzvou></span>
ZAC
</span> <h1 class="zac-hero__title" data-astro-cid-dqrlzvou>
Estaciones de Bomberos en
<span class="zac-hero__highlight" data-astro-cid-dqrlzvou>Zacatecas</span> </h1> <p class="zac-hero__desc" data-astro-cid-dqrlzvou>
Directorio oficial del <strong data-astro-cid-dqrlzvou>H. Cuerpo de Bomberos de Zacatecas</strong>.
            Centro Histórico Patrimonio UNESCO, la mayor mina de plata del mundo,
            Pueblos Mágicos Jerez y Sombrerete, Sierra de Órganos y 600 años
            de minería continua en el corazón de México.
</p> <div class="zac-hero__stats" data-astro-cid-dqrlzvou> <div class="zac-hero__stat" data-astro-cid-dqrlzvou> <span class="zac-hero__stat-number" data-astro-cid-dqrlzvou>${estacionesZacatecas.length}</span> <span class="zac-hero__stat-label" data-astro-cid-dqrlzvou>Estaciones</span> </div> <div class="zac-hero__stat" data-astro-cid-dqrlzvou> <span class="zac-hero__stat-number" data-astro-cid-dqrlzvou>480</span> <span class="zac-hero__stat-label" data-astro-cid-dqrlzvou>Bomberos</span> </div> <div class="zac-hero__stat" data-astro-cid-dqrlzvou> <span class="zac-hero__stat-number" data-astro-cid-dqrlzvou>24/7</span> <span class="zac-hero__stat-label" data-astro-cid-dqrlzvou>Servicio</span> </div> <div class="zac-hero__stat" data-astro-cid-dqrlzvou> <span class="zac-hero__stat-number" data-astro-cid-dqrlzvou>1.6M</span> <span class="zac-hero__stat-label" data-astro-cid-dqrlzvou>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="zac-hero__seo" data-astro-cid-dqrlzvou> <h2 class="zac-hero__seo-title" data-astro-cid-dqrlzvou>Centro Histórico UNESCO y La Mina Más Profunda</h2> <p class="zac-hero__seo-text" data-astro-cid-dqrlzvou>
Zacatecas alberga el <strong data-astro-cid-dqrlzvou>Centro Histórico Patrimonio de la Humanidad UNESCO 1993</strong>,
            con la Catedral Barroca más elaborada de México, la Mina El Edén y el teleférico
            histórico sobre la ciudad. Los bomberos protegen este patrimonio irrepetible
            con <strong data-astro-cid-dqrlzvou>protocolos especiales coordinados con el INAH</strong>.
</p> <h2 class="zac-hero__seo-title" data-astro-cid-dqrlzvou>Minera Peñasquito — Mayor Mina de Plata del Mundo</h2> <p class="zac-hero__seo-text" data-astro-cid-dqrlzvou>
El <strong data-astro-cid-dqrlzvou>corredor minero de Zacatecas</strong> produce el 25% de la plata mundial.
            Minera Peñasquito (Newmont/Goldcorp) en Fresnillo es la
<strong data-astro-cid-dqrlzvou>mayor mina de plata del mundo</strong>, con 6,000+ trabajadores.
            Los bomberos tienen <strong data-astro-cid-dqrlzvou>HAZMAT nivel 3 para explosivos, cianuro y xantatos</strong>
industriales mineros.
</p> </div> </div> </div> </section>  <section class="zac-mining-banner" data-astro-cid-dqrlzvou> <div class="container" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__grid" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__item" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__icon" data-astro-cid-dqrlzvou>🏛️</div> <div data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Centro Histórico UNESCO</strong> <span data-astro-cid-dqrlzvou>Patrimonio Humanidad 1993 · Catedral Barroca · Mina El Edén</span> </div> </div> <div class="zac-mining-banner__item" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__icon" data-astro-cid-dqrlzvou>⛏️</div> <div data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Mayor Mina de Plata del Mundo</strong> <span data-astro-cid-dqrlzvou>Peñasquito/Newmont · HAZMAT explosivos y cianuro minero</span> </div> </div> <div class="zac-mining-banner__item" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__icon" data-astro-cid-dqrlzvou>🏘️</div> <div data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>2 Pueblos Mágicos</strong> <span data-astro-cid-dqrlzvou>Jerez "La Ciudad Perfecta" · Sombrerete 450 años minería</span> </div> </div> <div class="zac-mining-banner__item" data-astro-cid-dqrlzvou> <div class="zac-mining-banner__icon" data-astro-cid-dqrlzvou>⛰️</div> <div data-astro-cid-dqrlzvou> <strong data-astro-cid-dqrlzvou>Sierra de Órganos</strong> <span data-astro-cid-dqrlzvou>Parque Nacional · Formaciones volcánicas únicas · Rescate montaña</span> </div> </div> </div> </div> </section>  <section class="zac-emergency" data-astro-cid-dqrlzvou> <div class="container" data-astro-cid-dqrlzvou> <div class="zac-emergency__content" data-astro-cid-dqrlzvou> <div class="zac-emergency__icon" data-astro-cid-dqrlzvou> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-dqrlzvou> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-dqrlzvou></path> </svg> </div> <div class="zac-emergency__text" data-astro-cid-dqrlzvou> <span class="zac-emergency__label" data-astro-cid-dqrlzvou>Emergencias en Zacatecas</span> <span class="zac-emergency__number" data-astro-cid-dqrlzvou>911</span> </div> <p class="zac-emergency__desc" data-astro-cid-dqrlzvou>
Número único de emergencias en todo Zacatecas. Centro de Coordinación C4 Zacatecas, disponible 24/7 los 365 días del año.
</p> </div> </div> </section>  <section class="zac-main" data-astro-cid-dqrlzvou> <div class="container" data-astro-cid-dqrlzvou> <div class="zac-main__grid" data-astro-cid-dqrlzvou> <!-- Stations Grid --> <div class="zac-main__content" data-astro-cid-dqrlzvou> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Zacatecas", "description": "Informaci\xF3n de contacto actualizada de todas las estaciones del H. Cuerpo de Bomberos en Zacatecas. Desde el Centro Hist\xF3rico UNESCO hasta el corredor minero de Fresnillo y la Sierra de \xD3rganos. Selecciona una estaci\xF3n para ver sus servicios, cobertura y datos de contacto.", "data-astro-cid-dqrlzvou": true })} <div class="zac-stations-grid" data-astro-cid-dqrlzvou> ${estacionesZacatecas.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/zacatecas", "data-astro-cid-dqrlzvou": true })}`)} </div> <!-- FAQ Section --> <div class="zac-faq" data-astro-cid-dqrlzvou> <h2 class="zac-faq__title" data-astro-cid-dqrlzvou>Preguntas Frecuentes — Bomberos Zacatecas</h2> <div class="zac-faq__list" data-astro-cid-dqrlzvou> <div class="zac-faq__item" data-astro-cid-dqrlzvou> <h3 data-astro-cid-dqrlzvou>¿Cuál es el teléfono de los bomberos en Zacatecas capital?</h3> <p data-astro-cid-dqrlzvou>Marca el <strong data-astro-cid-dqrlzvou>911</strong> desde cualquier teléfono. Cuartel Central: <a href="tel:4929220020" data-astro-cid-dqrlzvou>492 922 0020</a>. Fresnillo (hub minero): <a href="tel:4939320101" data-astro-cid-dqrlzvou>493 932 0101</a>. Protección Civil ZAC: <a href="tel:4929228823" data-astro-cid-dqrlzvou>492 922 8823</a>.</p> </div> <div class="zac-faq__item" data-astro-cid-dqrlzvou> <h3 data-astro-cid-dqrlzvou>¿Los bomberos de Zacatecas atienden emergencias en minas activas?</h3> <p data-astro-cid-dqrlzvou>Sí. La estación de <strong data-astro-cid-dqrlzvou>Fresnillo</strong> tiene HAZMAT nivel 3 para <strong data-astro-cid-dqrlzvou>explosivos, cianuro y xantatos</strong> de la Minera Peñasquito (Newmont), la mayor mina de plata del mundo. Coordinación directa ICS con brigadas internas de Newmont y Fresnillo plc.</p> </div> <div class="zac-faq__item" data-astro-cid-dqrlzvou> <h3 data-astro-cid-dqrlzvou>¿Hay protección especial para el Centro Histórico UNESCO?</h3> <p data-astro-cid-dqrlzvou>Sí. El Cuartel Central tiene <strong data-astro-cid-dqrlzvou>protocolos especiales con INAH</strong> para la Zona de Monumentos Históricos UNESCO 1993: Catedral Barroca, Mercado González Ortega, Mina El Edén y teleférico histórico. Tiempo de respuesta: 4-6 minutos.</p> </div> <div class="zac-faq__item" data-astro-cid-dqrlzvou> <h3 data-astro-cid-dqrlzvou>¿Qué hace especiales a los bomberos de Zacatecas frente a la minería?</h3> <p data-astro-cid-dqrlzvou>Zacatecas produce el <strong data-astro-cid-dqrlzvou>25% de la plata mundial</strong>. Los bomberos están capacitados con HAZMAT nivel 1-3 para: <strong data-astro-cid-dqrlzvou>explosivos industriales (ANFO)</strong>, <strong data-astro-cid-dqrlzvou>cianuro de sodio</strong> (cianuración), <strong data-astro-cid-dqrlzvou>xantatos</strong> (flotación) y ácidos de procesamiento. Certificaciones específicas para la industria minera de talla mundial.</p> </div> </div> </div> <!-- SEO Content --> <div class="zac-seo" data-astro-cid-dqrlzvou> <h2 data-astro-cid-dqrlzvou>El H. Cuerpo de Bomberos de Zacatecas</h2> <p data-astro-cid-dqrlzvou>
El <strong data-astro-cid-dqrlzvou>H. Cuerpo de Bomberos de Zacatecas</strong> protege a más de <strong data-astro-cid-dqrlzvou>1.6 millones de zacatecanos</strong>
en 58 municipios del estado con mayor producción de plata del mundo y uno de los patrimonios
              históricos más importantes de México. Con 15 estaciones estratégicamente ubicadas en los
              corredores mineros, turísticos y carreteros del estado, los bomberos zacatecanos son los únicos
              del país certificados para HAZMAT especializado en la industria minera de plata a escala mundial.
</p> <h3 data-astro-cid-dqrlzvou>¿Cómo contactar a los bomberos en Zacatecas?</h3> <p data-astro-cid-dqrlzvou>
En caso de <strong data-astro-cid-dqrlzvou>emergencia en Zacatecas</strong>, marca el <strong data-astro-cid-dqrlzvou>911</strong> desde cualquier teléfono.
              El <strong data-astro-cid-dqrlzvou>C4 de Zacatecas</strong> coordina la respuesta de bomberos, policía y servicios médicos.
              Para emergencias específicas en el corredor minero de Fresnillo contacta al 493 932 0101,
              en Zacatecas capital al 492 922 0020, o directamente a la estación más cercana usando este directorio.
</p> <h3 data-astro-cid-dqrlzvou>El Corredor Minero — 600 Años de Plata</h3> <p data-astro-cid-dqrlzvou>
Zacatecas fue el mayor productor de plata del mundo durante el Virreinato y sigue siéndolo hoy.
              La <strong data-astro-cid-dqrlzvou>Minera Peñasquito en Fresnillo</strong>, operada por Newmont (la mayor minera de oro del mundo),
              es la <strong data-astro-cid-dqrlzvou>mina de plata más grande del planeta</strong> con producción de 15+ millones de onzas anuales.
              Junto con <strong data-astro-cid-dqrlzvou>Fresnillo plc, Endeavour Silver y Pan American Silver</strong>, el corredor minero
              de Zacatecas genera el <strong data-astro-cid-dqrlzvou>25% de la producción mundial de plata</strong>.
              Los bomberos de Fresnillo tienen protocolos ICS coordinados con las brigadas internas para
<strong data-astro-cid-dqrlzvou>HAZMAT nivel 3: explosivos industriales, cianuro de sodio y xantatos</strong>.
</p> <h3 data-astro-cid-dqrlzvou>Patrimonio de la Humanidad — Centro Histórico UNESCO 1993</h3> <p data-astro-cid-dqrlzvou>
Declarado <strong data-astro-cid-dqrlzvou>Patrimonio de la Humanidad por la UNESCO en 1993</strong>, el Centro Histórico de
              Zacatecas es uno de los conjuntos barrocos mejor conservados de América. La
<strong data-astro-cid-dqrlzvou>Catedral de Zacatecas</strong> (barroco churrigueresco más ornamentado de México),
              el <strong data-astro-cid-dqrlzvou>Palacio de Gobierno</strong>, el <strong data-astro-cid-dqrlzvou>Mercado González Ortega</strong>,
              el <strong data-astro-cid-dqrlzvou>Teatro Calderón</strong> y la mítica <strong data-astro-cid-dqrlzvou>Mina El Edén</strong> exigen protocolos
              especiales coordinados con el INAH. El teleférico histórico que cruza el cerro del Grillo
              añade una complejidad única a las emergencias urbanas de la ciudad más alta de México a 2,500 msnm.
</p> <h3 data-astro-cid-dqrlzvou>Zonas de Mayor Riesgo en Zacatecas</h3> <p data-astro-cid-dqrlzvou>
Zacatecas presenta riesgos únicos en México: <strong data-astro-cid-dqrlzvou>HAZMAT minero</strong> (explosivos, cianuro, xantatos
              en el corredor Fresnillo-Zacatecas); <strong data-astro-cid-dqrlzvou>incendios en patrimonio colonial UNESCO</strong>;
<strong data-astro-cid-dqrlzvou>incendios forestales</strong> en Sierra Madre Occidental (Tlaltenango, Valparaíso, Sombrerete);
<strong data-astro-cid-dqrlzvou>rescate en zonas montañosas y barrancos</strong> (Cañón de Juchipila, Sierra del Tigre);
<strong data-astro-cid-dqrlzvou>accidentes en carreteras federales 45 y 54</strong> (alto tránsito de carga minera);
              y <strong data-astro-cid-dqrlzvou>emergencias en eventos masivos</strong> (Festival Cultural Zacatecas, Feria Nacional).
</p> </div> </div> <!-- Sidebar --> <aside class="zac-sidebar" data-astro-cid-dqrlzvou> <!-- Municipios --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Filtrar por Municipio</h4> <ul class="zac-sidebar__municipios" data-astro-cid-dqrlzvou> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-dqrlzvou> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ñ/g, "n")}`, "href")} data-astro-cid-dqrlzvou> <span class="zac-sidebar__bullet" data-astro-cid-dqrlzvou></span> <span data-astro-cid-dqrlzvou>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="zac-sidebar__card zac-sidebar__card--emergency" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Teléfonos de Emergencia</h4> <div class="zac-sidebar__emergency-list" data-astro-cid-dqrlzvou> <div class="zac-sidebar__emergency-item" data-astro-cid-dqrlzvou> <span class="zac-sidebar__emergency-number" data-astro-cid-dqrlzvou>911</span> <span class="zac-sidebar__emergency-label" data-astro-cid-dqrlzvou>Emergencias</span> </div> <div class="zac-sidebar__emergency-item" data-astro-cid-dqrlzvou> <span class="zac-sidebar__emergency-number" data-astro-cid-dqrlzvou>492 922 0020</span> <span class="zac-sidebar__emergency-label" data-astro-cid-dqrlzvou>Cuartel Central ZAC</span> </div> <div class="zac-sidebar__emergency-item" data-astro-cid-dqrlzvou> <span class="zac-sidebar__emergency-number" data-astro-cid-dqrlzvou>493 932 0101</span> <span class="zac-sidebar__emergency-label" data-astro-cid-dqrlzvou>Bomberos Fresnillo</span> </div> <div class="zac-sidebar__emergency-item" data-astro-cid-dqrlzvou> <span class="zac-sidebar__emergency-number" data-astro-cid-dqrlzvou>494 945 0123</span> <span class="zac-sidebar__emergency-label" data-astro-cid-dqrlzvou>Bomberos Jerez</span> </div> <div class="zac-sidebar__emergency-item" data-astro-cid-dqrlzvou> <span class="zac-sidebar__emergency-number" data-astro-cid-dqrlzvou>492 922 8823</span> <span class="zac-sidebar__emergency-label" data-astro-cid-dqrlzvou>Protección Civil ZAC</span> </div> </div> </div> <!-- Regiones --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Regiones del Estado</h4> <ul class="zac-sidebar__regiones" data-astro-cid-dqrlzvou> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Zona Metropolitana</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Zacatecas capital, Guadalupe, Villanueva</span> </li> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Corredor Minero Centro</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Fresnillo, Loreto — HAZMAT minero</span> </li> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Zona de Pueblos Mágicos</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Jerez, Sombrerete — patrimonio colonial</span> </li> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Corredor Norte</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Río Grande, Juan Aldama, Sombrerete</span> </li> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Sierra y Barrancas Sur</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Tlaltenango, Juchipila, Nochistlán, Valparaíso</span> </li> <li data-astro-cid-dqrlzvou> <span class="zac-sidebar__region-name" data-astro-cid-dqrlzvou>Corredor Noreste Minero</span> <span class="zac-sidebar__region-desc" data-astro-cid-dqrlzvou>Concepción del Oro, Juan Aldama, Pinos</span> </li> </ul> </div> <!-- Nearby States --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Estados Vecinos</h4> <ul class="zac-sidebar__states" data-astro-cid-dqrlzvou> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-dqrlzvou> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-dqrlzvou> <span data-astro-cid-dqrlzvou>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-dqrlzvou> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-dqrlzvou></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="zac-sidebar__card zac-sidebar__card--cta" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>¿Equipas una Estación en ZAC?</h4> <p data-astro-cid-dqrlzvou>Distribuidores especializados en equipo NFPA para HAZMAT minero, corredor de plata y patrimonio histórico UNESCO en Zacatecas</p> <a href="/cotizar" class="zac-sidebar__cta-btn" data-astro-cid-dqrlzvou>Solicitar Cotización</a> </div> <!-- Products --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Equipo para Bomberos</h4> <ul class="zac-sidebar__products" data-astro-cid-dqrlzvou> <li data-astro-cid-dqrlzvou><a href="/productos/trajes-para-bomberos" data-astro-cid-dqrlzvou>Trajes Estructurales NFPA</a></li> <li data-astro-cid-dqrlzvou><a href="/productos/cascos-para-bomberos" data-astro-cid-dqrlzvou>Cascos de Bombero</a></li> <li data-astro-cid-dqrlzvou><a href="/productos/scba" data-astro-cid-dqrlzvou>Equipos SCBA</a></li> <li data-astro-cid-dqrlzvou><a href="/productos/herramientas-rescate" data-astro-cid-dqrlzvou>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="zac-sidebar__link" data-astro-cid-dqrlzvou>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-dqrlzvou> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-dqrlzvou></path> </svg> </a> </div> <!-- Back to Directory --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <a href="/directorio" class="zac-sidebar__back" data-astro-cid-dqrlzvou> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-dqrlzvou> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-dqrlzvou></path> </svg> <span data-astro-cid-dqrlzvou>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="zac-sidebar__card" data-astro-cid-dqrlzvou> <h4 data-astro-cid-dqrlzvou>Contacto BOMBERO.MX</h4> <ul class="zac-sidebar__contact" data-astro-cid-dqrlzvou> <li data-astro-cid-dqrlzvou><a href="tel:+525520780102" data-astro-cid-dqrlzvou>55 2078 0102</a></li> <li data-astro-cid-dqrlzvou><a href="https://wa.me/525520780102" data-astro-cid-dqrlzvou>WhatsApp</a></li> <li data-astro-cid-dqrlzvou><a href="mailto:ventas@bombero.mx" data-astro-cid-dqrlzvou>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/zacatecas.astro";
const $$url = "/directorio/zacatecas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Zacatecas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
