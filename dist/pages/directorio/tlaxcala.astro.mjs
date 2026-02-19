import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { $ as $$SectionHeader } from '../../chunks/SectionHeader_BM8Ucdq5.mjs';
import { $ as $$StationCard } from '../../chunks/StationCard_QIquacph.mjs';
import { b as getMunicipios, e as estacionesTlaxcala, E as ESTADISTICAS_TLAXCALA } from '../../chunks/estaciones-tlaxcala_u-Noz3c7.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Tlaxcala = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadosVecinos = [
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Hidalgo", slug: "hidalgo" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Veracruz", slug: "veracruz" }
  ];
  const keywords = [
    "bomberos tlaxcala",
    "estaciones bomberos tlaxcala",
    "bomberos apizaco tlaxcala",
    "emergencias tlaxcala 911",
    "bomberos planta audi san jose chiapa",
    "bomberos chiautempan textil",
    "bomberos volcan la malinche rescate",
    "cuerpo bomberos tlaxcala",
    "bomberos huamantla tlaxcala",
    "proteccion civil tlaxcala"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Tlaxcala", url: "/directorio/tlaxcala" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Tlaxcala, M\xE9xico",
    "description": "Directorio oficial de las 15 estaciones de bomberos en Tlaxcala. Tlaxcala capital, Apizaco, San Jos\xE9 Chiapa (Planta Audi), Chiautempan textil, Huamantla, Calpulalpan (Grupo Modelo) y todo el estado. Emergencias 911.",
    "numberOfItems": estacionesTlaxcala.length,
    "itemListElement": estacionesTlaxcala.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio,
          "addressRegion": "Tlaxcala",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/tlaxcala/${e.slug}`
      }
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "\xBFCu\xE1l es el tel\xE9fono de los bomberos en Tlaxcala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Tlaxcala, el n\xFAmero de emergencias es el 911 (disponible en todo el estado las 24 horas). Para contacto directo: Bomberos Tlaxcala capital 246 462 0100, Bomberos Apizaco 241 418 0300, Bomberos Huamantla 247 472 0500, Bomberos Calpulalpan 591 922 0300."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFQu\xE9 pasa si hay un incendio en la Planta Audi de San Jos\xE9 Chiapa, Tlaxcala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Planta Audi M\xE9xico en San Jos\xE9 Chiapa cuenta con una estaci\xF3n de bomberos dedicada y brigadas contraincendios propias certificadas VW Group. Ante cualquier emergencia se activa el 911 y la estaci\xF3n de San Jos\xE9 Chiapa responde en 3-5 minutos, con apoyo de la estaci\xF3n central de Tlaxcala. El personal est\xE1 especializado en HAZMAT automotriz, incendios de bater\xEDas de alta tensi\xF3n e instalaciones de pintura."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFC\xF3mo pedir rescate en el Volc\xE1n La Malinche en Tlaxcala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En caso de emergencia en el Volc\xE1n La Malinche (Parque Nacional Matlalcu\xE9itl, 4,461 msnm), llama al 911 o directamente a Bomberos Huamantla (ladera este: 247 472 0500) o Bomberos San Pablo del Monte (ladera sur). El rescate en alta monta\xF1a puede tomar entre 30 minutos y 2 horas dependiendo de la altitud. Se recomienda no ascender sin comunicaci\xF3n y registrar el ascenso en la caseta del Parque Nacional."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFCu\xE1ntas estaciones de bomberos hay en Tlaxcala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El estado de Tlaxcala cuenta con 15 estaciones de bomberos distribuidas en los municipios clave de sus 60 municipios totales. La red cubre los principales centros industriales, la capital, la zona textilera, el corredor automotriz Audi, el Volc\xE1n La Malinche y los accesos a Puebla, Hidalgo y el Estado de M\xE9xico."
        }
      },
      {
        "@type": "Question",
        "name": "\xBFLos bomberos de Tlaxcala tienen capacitaci\xF3n especial para industria textil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "S\xED. Los bomberos de Santa Ana Chiautempan est\xE1n especializados en HAZMAT textil: incendios de fibras sint\xE9ticas (poli\xE9ster, nylon, acr\xEDlico), colorantes azo y productos de tintura industrial como \xE1cido sulf\xFArico y sosa c\xE1ustica. Es la \xFAnica estaci\xF3n en M\xE9xico con protocolo espec\xEDfico para la industria saraperil e industrial textilera de esta escala."
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Bomberos en Tlaxcala | ${ESTADISTICAS_TLAXCALA.total_estaciones} Estaciones | Directorio Oficial BOMBERO.MX`, "description": "Directorio oficial de las 15 estaciones de bomberos en Tlaxcala. Planta Audi (\xFAnica en las Am\xE9ricas), capital textilera, Volc\xE1n La Malinche, Grupo Modelo Calpulalpan. El estado m\xE1s peque\xF1o de M\xE9xico con la mayor densidad industrial. Emergencias 911.", "keywords": keywords, "canonical": "https://bombero.mx/directorio/tlaxcala", "jsonLd": [breadcrumbSchema, itemListSchema, faqSchema], "data-astro-cid-vqhdmzcb": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="tla-hero" data-astro-cid-vqhdmzcb> <div class="tla-hero__bg" data-astro-cid-vqhdmzcb> <div class="tla-hero__gradient" data-astro-cid-vqhdmzcb></div> <div class="tla-hero__pattern" data-astro-cid-vqhdmzcb></div> </div> <div class="container" data-astro-cid-vqhdmzcb> <div class="tla-hero__container" data-astro-cid-vqhdmzcb> <!-- Left Column --> <div class="tla-hero__content" data-astro-cid-vqhdmzcb> <nav class="tla-hero__breadcrumb" data-astro-cid-vqhdmzcb> <a href="/" data-astro-cid-vqhdmzcb>Inicio</a> <span data-astro-cid-vqhdmzcb>/</span> <a href="/directorio" data-astro-cid-vqhdmzcb>Directorio</a> <span data-astro-cid-vqhdmzcb>/</span> <span data-astro-cid-vqhdmzcb>Tlaxcala</span> </nav> <span class="tla-hero__badge" data-astro-cid-vqhdmzcb> <span class="tla-hero__badge-dot" data-astro-cid-vqhdmzcb></span>
TLA
</span> <h1 class="tla-hero__title" data-astro-cid-vqhdmzcb>
Estaciones de Bomberos en
<span class="tla-hero__highlight" data-astro-cid-vqhdmzcb>Tlaxcala</span> </h1> <p class="tla-hero__desc" data-astro-cid-vqhdmzcb>
Directorio completo del <strong data-astro-cid-vqhdmzcb>H. Cuerpo de Bomberos de Tlaxcala</strong>.
            El estado más pequeño de México y paradójicamente uno de los más densos industrialmente: sede de la <strong data-astro-cid-vqhdmzcb>única planta Audi en las Américas</strong>, capital textilera nacional, el Volcán La Malinche y la cervecería más grande del centro del país.
</p> <div class="tla-hero__stats" data-astro-cid-vqhdmzcb> <div class="tla-hero__stat" data-astro-cid-vqhdmzcb> <span class="tla-hero__stat-number" data-astro-cid-vqhdmzcb>${estacionesTlaxcala.length}</span> <span class="tla-hero__stat-label" data-astro-cid-vqhdmzcb>Estaciones</span> </div> <div class="tla-hero__stat" data-astro-cid-vqhdmzcb> <span class="tla-hero__stat-number" data-astro-cid-vqhdmzcb>60</span> <span class="tla-hero__stat-label" data-astro-cid-vqhdmzcb>Municipios</span> </div> <div class="tla-hero__stat" data-astro-cid-vqhdmzcb> <span class="tla-hero__stat-number" data-astro-cid-vqhdmzcb>24/7</span> <span class="tla-hero__stat-label" data-astro-cid-vqhdmzcb>Servicio</span> </div> <div class="tla-hero__stat" data-astro-cid-vqhdmzcb> <span class="tla-hero__stat-number" data-astro-cid-vqhdmzcb>1.3M</span> <span class="tla-hero__stat-label" data-astro-cid-vqhdmzcb>Habitantes</span> </div> </div> </div> <!-- Right Column - SEO Content --> <div class="tla-hero__seo" data-astro-cid-vqhdmzcb> <h2 class="tla-hero__seo-title" data-astro-cid-vqhdmzcb>Audi, Textiles y Volcán: Tlaxcala Industrial Premium</h2> <p class="tla-hero__seo-text" data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Tlaxcala</strong> alberga la <strong data-astro-cid-vqhdmzcb>única planta de fabricación de automóviles Audi en todo el continente americano</strong>
(San José Chiapa, 2016), produciendo los modelos Q5 y A3 para el mundo con 12,000 empleados.
<strong data-astro-cid-vqhdmzcb>Santa Ana Chiautempan</strong> concentra el mayor número de telares industriales de México.
            Los bomberos tlaxcaltecas dominan HAZMAT automotriz premium, incendios de fibras sintéticas
            y rescate en el Volcán La Malinche a 4,461 msnm.
</p> <h2 class="tla-hero__seo-title" data-astro-cid-vqhdmzcb>El Paradox de Tlaxcala: Más Pequeño, Más Denso</h2> <p class="tla-hero__seo-text" data-astro-cid-vqhdmzcb>
Con apenas <strong data-astro-cid-vqhdmzcb>3,991 km²</strong> —el estado más pequeño de México—, Tlaxcala tiene la
<strong data-astro-cid-vqhdmzcb>mayor concentración de parques industriales por km² del país</strong>.
            Su posición en el corazón de la megalópolis del centro, entre Puebla, CDMX e Hidalgo,
            lo convierte en corredor de paso de la <strong data-astro-cid-vqhdmzcb>Autopista 150D México-Veracruz</strong>
(mayor tráfico de carga del centro) y nodo ferroviario nacional de Apizaco (Ferromex).
</p> </div> </div> </div> </section>  <section class="tla-emergency" data-astro-cid-vqhdmzcb> <div class="container" data-astro-cid-vqhdmzcb> <div class="tla-emergency__content" data-astro-cid-vqhdmzcb> <div class="tla-emergency__icon" data-astro-cid-vqhdmzcb> <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vqhdmzcb> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-vqhdmzcb></path> </svg> </div> <div class="tla-emergency__text" data-astro-cid-vqhdmzcb> <span class="tla-emergency__label" data-astro-cid-vqhdmzcb>Emergencias en Tlaxcala</span> <span class="tla-emergency__number" data-astro-cid-vqhdmzcb>911</span> </div> <p class="tla-emergency__desc" data-astro-cid-vqhdmzcb>
Número único en todo Tlaxcala — 24/7, 365 días. Capital: 246 462 0100 · Apizaco: 241 418 0300 · Huamantla: 247 472 0500
</p> </div> </div> </section>  <section class="tla-audi-banner" data-astro-cid-vqhdmzcb> <div class="container" data-astro-cid-vqhdmzcb> <div class="tla-audi-banner__content" data-astro-cid-vqhdmzcb> <div class="tla-audi-banner__icon" data-astro-cid-vqhdmzcb> <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vqhdmzcb> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" data-astro-cid-vqhdmzcb></path> </svg> </div> <div class="tla-audi-banner__text" data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Planta Audi México — San José Chiapa</strong> <span data-astro-cid-vqhdmzcb>Única en las Américas · 12,000 empleados · 150,000 Audi Q5 y A3 por año · Estación HAZMAT Premium dedicada</span> </div> </div> </div> </section>  <section class="tla-main" data-astro-cid-vqhdmzcb> <div class="container" data-astro-cid-vqhdmzcb> <div class="tla-main__grid" data-astro-cid-vqhdmzcb> <!-- Stations Grid --> <div class="tla-main__content" data-astro-cid-vqhdmzcb> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "label": "Directorio Completo", "title": "Estaciones de Bomberos en Tlaxcala", "description": "Informaci\xF3n de contacto actualizada de las 15 estaciones del H. Cuerpo de Bomberos de Tlaxcala. Desde la planta Audi hasta el Volc\xE1n La Malinche, pasando por la capital textilera de M\xE9xico. Selecciona una estaci\xF3n para ver datos completos de contacto, servicios especializados y zonas de cobertura.", "data-astro-cid-vqhdmzcb": true })} <div class="tla-stations-grid" data-astro-cid-vqhdmzcb> ${estacionesTlaxcala.map((estacion) => renderTemplate`${renderComponent($$result2, "StationCard", $$StationCard, { "nombre": estacion.nombreCorto, "slug": estacion.slug, "direccion": `${estacion.direccion}, ${estacion.colonia}`, "alcaldia": estacion.municipio, "telefono": estacion.telefono, "servicios": estacion.servicios, "horario": estacion.horario, "baseUrl": "/directorio/tlaxcala", "data-astro-cid-vqhdmzcb": true })}`)} </div> <!-- SEO Content --> <div class="tla-seo" data-astro-cid-vqhdmzcb> <h2 data-astro-cid-vqhdmzcb>El H. Cuerpo de Bomberos de Tlaxcala</h2> <p data-astro-cid-vqhdmzcb>
El <strong data-astro-cid-vqhdmzcb>H. Cuerpo de Bomberos de Tlaxcala</strong> protege a más de <strong data-astro-cid-vqhdmzcb>1.3 millones de tlaxcaltecas</strong>
en el estado más pequeño de México —y paradójicamente uno de los más importantes industrialmente—.
              Tlaxcala es el único estado de la República Mexicana que nunca fue conquistado ni sometido a la Corona española
              y que, aliado con Hernán Cortés, fue decisivo en la historia de México. Ese espíritu de excelencia y determinación
              se refleja hoy en un cuerpo de bomberos altamente especializado que enfrenta riesgos industriales de primer nivel mundial.
</p> <h3 data-astro-cid-vqhdmzcb>¿Cómo contactar a los bomberos en Tlaxcala?</h3> <p data-astro-cid-vqhdmzcb>
En cualquier <strong data-astro-cid-vqhdmzcb>emergencia en Tlaxcala</strong>, marca el <strong data-astro-cid-vqhdmzcb>911</strong>. Para contacto
              directo: <strong data-astro-cid-vqhdmzcb>Tlaxcala capital 246 462 0100</strong>,
<strong data-astro-cid-vqhdmzcb>Apizaco 241 418 0300</strong>,
<strong data-astro-cid-vqhdmzcb>Huamantla 247 472 0500</strong>,
<strong data-astro-cid-vqhdmzcb>Calpulalpan 591 922 0300</strong>,
<strong data-astro-cid-vqhdmzcb>Chiautempan 241 416 0200</strong>.
</p> <h3 data-astro-cid-vqhdmzcb>Planta Audi México — El Orgullo Industrial de Tlaxcala</h3> <p data-astro-cid-vqhdmzcb>
La <strong data-astro-cid-vqhdmzcb>Planta Audi México en San José Chiapa</strong>, inaugurada en 2016 con una inversión de
<strong data-astro-cid-vqhdmzcb>1,300 millones de dólares</strong>, es la única fábrica de automóviles <strong data-astro-cid-vqhdmzcb>Audi en todo el
              continente americano</strong>. Produce los modelos <strong data-astro-cid-vqhdmzcb>Audi Q5</strong> y <strong data-astro-cid-vqhdmzcb>Audi A3 Sedan</strong>
para distribución global —más de 150,000 unidades anuales— y emplea directa e indirectamente a más de
              12,000 personas. El taller de pintura (shop de pintura), con sus cabinas de disolventes orgánicos volátiles,
              las líneas de producción de baterías de alta tensión para los modelos plug-in hybrid, y las celdas de
              soldadura robotizada representan riesgos HAZMAT que demandan protocolos del Grupo Volkswagen y certificaciones
              internacionales del cuerpo de bomberos dedicado.
</p> <h3 data-astro-cid-vqhdmzcb>La Capital Textilera de México: Santa Ana Chiautempan</h3> <p data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Santa Ana Chiautempan</strong> concentra la mayor densidad de telares industriales del país,
              con más de 500 empresas textileras que producen <strong data-astro-cid-vqhdmzcb>sarapes, cobertores, ropa deportiva y telas técnicas</strong>
para mercados de América del Norte, Europa y Asia. El riesgo de incendio en esta zona es de alta complejidad:
              las fibras sintéticas (poliéster, nylon, acrílico) tienen una velocidad de propagación del fuego entre
              5 y 10 veces superior a la madera. Los colorantes azo empleados en los baños de tintura contienen precursores
              tóxicos que, al combustionar, generan gases como el cloruro de hidrógeno y el cianuro de hidrógeno.
              Los bomberos de Chiautempan poseen el <strong data-astro-cid-vqhdmzcb>único protocolo de México específico para incendios en la
              industria textilera-saraperil</strong>.
</p> <h3 data-astro-cid-vqhdmzcb>Volcán La Malinche: Rescate en Alta Montaña</h3> <p data-astro-cid-vqhdmzcb>
El <strong data-astro-cid-vqhdmzcb>Volcán La Malinche</strong> —también llamado <strong data-astro-cid-vqhdmzcb>Matlalcuéitl</strong>, «la señora de las
              faldas azules» en náhuatl— alcanza los <strong data-astro-cid-vqhdmzcb>4,461 msnm</strong>, siendo la segunda montaña más alta
              del centro de México. El Parque Nacional que lo rodea recibe más de <strong data-astro-cid-vqhdmzcb>200,000 visitantes anuales</strong>
entre excursionistas, montañistas y turistas. Los rescates en el volcán son frecuentes: hipotermia,
              torceduras en terreno volcánico irregular, lesiones por caídas en zonas de roca suelta y emergencias
              cardiorrespiratorias por el esfuerzo en altitud. Los bomberos de Huamantla y San Pablo del Monte mantienen
              equipos de <strong data-astro-cid-vqhdmzcb>rescate en alta montaña</strong> con indumentaria específica para nieve, hielo y hipotermia.
</p> <h3 data-astro-cid-vqhdmzcb>Grupo Modelo Calpulalpan y el Corredor Autopista 150D</h3> <p data-astro-cid-vqhdmzcb>
La <strong data-astro-cid-vqhdmzcb>Planta Cervecera Grupo Modelo de Calpulalpan</strong> es una de las tres cervecerías más grandes
              de México y la mayor del centro del país, produciendo más de <strong data-astro-cid-vqhdmzcb>10 millones de hectolitros</strong>
anuales de marcas como Corona, Modelo Especial y Pacífico. Sus riesgos industriales son específicos:
              el <strong data-astro-cid-vqhdmzcb>amoniaco</strong> empleado en refrigeración industrial puede ser letal en concentraciones de
              50 ppm; el <strong data-astro-cid-vqhdmzcb>CO₂</strong> producido en la fermentación alcohólica desplaza el oxígeno en espacios
              confinados causando muerte súbita. La autopista <strong data-astro-cid-vqhdmzcb>México 150D</strong> —la de mayor tráfico de carga
              del centro del país— pasa por el municipio, generando un riesgo permanente de accidentes con materiales peligrosos en tránsito.
</p> <h3 data-astro-cid-vqhdmzcb>Apizaco: El Nodo Ferroviario del Centro de México</h3> <p data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Apizaco</strong> es el principal nodo ferroviario del centro de México, donde confluyen las rutas
              de <strong data-astro-cid-vqhdmzcb>Ferromex</strong> que conectan la Ciudad de México con Veracruz (carga del Puerto de Veracruz),
              el Bajío con el Golfo, y el corredor norte-sur del sistema ferroviario nacional. Diariamente pasan por
              Apizaco <strong data-astro-cid-vqhdmzcb>decenas de trenes de carga</strong>, incluyendo convoyes con carga peligrosa clasificada
              (UN): clorosulfúrico, ácidos industriales, gases comprimidos, combustibles y productos petroquímicos.
              Los bomberos de Apizaco son los únicos en Tlaxcala con <strong data-astro-cid-vqhdmzcb>certificación de respuesta a accidentes
              ferroviarios</strong> y protocolos específicos con Ferromex para emergencias en vías.
</p> <h3 data-astro-cid-vqhdmzcb>Servicios de los Bomberos Tlaxcaltecas</h3> <p data-astro-cid-vqhdmzcb>
Los bomberos de Tlaxcala están certificados para atender:
<strong data-astro-cid-vqhdmzcb>incendios HAZMAT automotriz</strong> (Audi: VOCs, baterías HV, isocianatos);
<strong data-astro-cid-vqhdmzcb>incendios de fibras textiles</strong> y colorantes industriales;
<strong data-astro-cid-vqhdmzcb>HAZMAT ferroviario</strong> (carga peligrosa UN en tránsito Ferromex);
<strong data-astro-cid-vqhdmzcb>HAZMAT cervecería</strong> (amoniaco, CO₂, alcohol);
<strong data-astro-cid-vqhdmzcb>rescate en alta montaña</strong> (Volcán La Malinche, 4,461 msnm, nieve y hielo);
<strong data-astro-cid-vqhdmzcb>incendios forestales de altitud</strong> (bosque templado 2,800-4,200 msnm);
<strong data-astro-cid-vqhdmzcb>protección de patrimonio cultural</strong> (Centro Histórico colonial, zonas arqueológicas);
<strong data-astro-cid-vqhdmzcb>rescate vehicular</strong> en la Autopista 150D (mayor tráfico de carga del centro); y
<strong data-astro-cid-vqhdmzcb>HAZMAT químico-farmacéutico</strong> en el corredor norte de Tlaxcala.
</p> </div> <!-- FAQ Section --> <div class="tla-faq" data-astro-cid-vqhdmzcb> <h2 data-astro-cid-vqhdmzcb>Preguntas Frecuentes — Bomberos en Tlaxcala</h2> <div class="tla-faq__item" data-astro-cid-vqhdmzcb> <h3 data-astro-cid-vqhdmzcb>¿Cuál es el teléfono de los bomberos en Tlaxcala?</h3> <p data-astro-cid-vqhdmzcb>El número de emergencias en Tlaxcala es el <strong data-astro-cid-vqhdmzcb>911</strong> (disponible en todo el estado, 24 horas). Para contacto directo: Tlaxcala capital <strong data-astro-cid-vqhdmzcb>246 462 0100</strong>, Apizaco <strong data-astro-cid-vqhdmzcb>241 418 0300</strong>, Huamantla <strong data-astro-cid-vqhdmzcb>247 472 0500</strong>, Calpulalpan <strong data-astro-cid-vqhdmzcb>591 922 0300</strong>.</p> </div> <div class="tla-faq__item" data-astro-cid-vqhdmzcb> <h3 data-astro-cid-vqhdmzcb>¿Qué hacer en una emergencia en la Planta Audi de San José Chiapa?</h3> <p data-astro-cid-vqhdmzcb>Marcar inmediatamente el <strong data-astro-cid-vqhdmzcb>911</strong>. La estación dedicada de San José Chiapa responde en <strong data-astro-cid-vqhdmzcb>3-5 minutos</strong> con personal certificado en HAZMAT automotriz y baterías HV. La planta Audi tiene brigadas propias que coordinan con los bomberos municipales bajo protocolos del Grupo Volkswagen.</p> </div> <div class="tla-faq__item" data-astro-cid-vqhdmzcb> <h3 data-astro-cid-vqhdmzcb>¿Cómo pedir rescate en el Volcán La Malinche?</h3> <p data-astro-cid-vqhdmzcb>Llama al <strong data-astro-cid-vqhdmzcb>911</strong> o a Bomberos Huamantla (<strong data-astro-cid-vqhdmzcb>247 472 0500</strong>). Indica tu posición GPS (altitud aproximada), número de personas y tipo de emergencia. El rescate en alta montaña puede tomar <strong data-astro-cid-vqhdmzcb>30 minutos a 2 horas</strong> dependiendo de la altitud y el terreno. Registra tu ascenso en la caseta del Parque Nacional.</p> </div> <div class="tla-faq__item" data-astro-cid-vqhdmzcb> <h3 data-astro-cid-vqhdmzcb>¿Los bomberos de Tlaxcala tienen equipo especial para incendios textiles?</h3> <p data-astro-cid-vqhdmzcb>Sí. Los bomberos de <strong data-astro-cid-vqhdmzcb>Santa Ana Chiautempan</strong> cuentan con equipos de espuma y protocolos HAZMAT específicos para incendios de fibras sintéticas, colorantes azo y productos de tintura. Es la única estación en México con protocolo especializado para la industria textilera-saraperil a esta escala.</p> </div> </div> </div> <!-- Sidebar --> <aside class="tla-sidebar" data-astro-cid-vqhdmzcb> <!-- Quick Access --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Filtrar por Municipio</h4> <ul class="tla-sidebar__municipios" data-astro-cid-vqhdmzcb> ${municipios.map((municipio) => renderTemplate`<li data-astro-cid-vqhdmzcb> <a${addAttribute(`#${municipio.toLowerCase().replace(/\s+/g, "-").replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ñ/g, "n")}`, "href")} data-astro-cid-vqhdmzcb> <span class="tla-sidebar__bullet" data-astro-cid-vqhdmzcb></span> <span data-astro-cid-vqhdmzcb>${municipio}</span> </a> </li>`)} </ul> </div> <!-- Emergency Numbers --> <div class="tla-sidebar__card tla-sidebar__card--emergency" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Teléfonos de Emergencia</h4> <div class="tla-sidebar__emergency-list" data-astro-cid-vqhdmzcb> <div class="tla-sidebar__emergency-item" data-astro-cid-vqhdmzcb> <span class="tla-sidebar__emergency-number" data-astro-cid-vqhdmzcb>911</span> <span class="tla-sidebar__emergency-label" data-astro-cid-vqhdmzcb>Emergencias Nacionales</span> </div> <div class="tla-sidebar__emergency-item" data-astro-cid-vqhdmzcb> <span class="tla-sidebar__emergency-number" data-astro-cid-vqhdmzcb>246 462 0100</span> <span class="tla-sidebar__emergency-label" data-astro-cid-vqhdmzcb>Bomberos Tlaxcala</span> </div> <div class="tla-sidebar__emergency-item" data-astro-cid-vqhdmzcb> <span class="tla-sidebar__emergency-number" data-astro-cid-vqhdmzcb>241 418 0300</span> <span class="tla-sidebar__emergency-label" data-astro-cid-vqhdmzcb>Bomberos Apizaco</span> </div> <div class="tla-sidebar__emergency-item" data-astro-cid-vqhdmzcb> <span class="tla-sidebar__emergency-number" data-astro-cid-vqhdmzcb>247 472 0500</span> <span class="tla-sidebar__emergency-label" data-astro-cid-vqhdmzcb>Bomberos Huamantla</span> </div> <div class="tla-sidebar__emergency-item" data-astro-cid-vqhdmzcb> <span class="tla-sidebar__emergency-number" data-astro-cid-vqhdmzcb>591 922 0300</span> <span class="tla-sidebar__emergency-label" data-astro-cid-vqhdmzcb>Bomberos Calpulalpan</span> </div> </div> </div> <!-- Regiones --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Regiones del Estado</h4> <ul class="tla-sidebar__regiones" data-astro-cid-vqhdmzcb> <li data-astro-cid-vqhdmzcb> <span class="tla-sidebar__region-name" data-astro-cid-vqhdmzcb>Región Capital</span> <span class="tla-sidebar__region-desc" data-astro-cid-vqhdmzcb>Tlaxcala (capital), Papalotla, Ixtacuixtla, Zacatelco</span> </li> <li data-astro-cid-vqhdmzcb> <span class="tla-sidebar__region-name" data-astro-cid-vqhdmzcb>Corredor Industrial Norte</span> <span class="tla-sidebar__region-desc" data-astro-cid-vqhdmzcb>Apizaco (ferroviario), Chiautempan (textil), Tlaltelulco, Tetla, Tlaxco</span> </li> <li data-astro-cid-vqhdmzcb> <span class="tla-sidebar__region-name" data-astro-cid-vqhdmzcb>Corredor Audi</span> <span class="tla-sidebar__region-desc" data-astro-cid-vqhdmzcb>San José Chiapa (planta Audi), Tetlatlahuca, proveedores Tier-1</span> </li> <li data-astro-cid-vqhdmzcb> <span class="tla-sidebar__region-name" data-astro-cid-vqhdmzcb>Oriente / La Malinche</span> <span class="tla-sidebar__region-desc" data-astro-cid-vqhdmzcb>Huamantla, San Pablo del Monte, volcán 4,461 msnm</span> </li> <li data-astro-cid-vqhdmzcb> <span class="tla-sidebar__region-name" data-astro-cid-vqhdmzcb>Noroeste / Autopista 150D</span> <span class="tla-sidebar__region-desc" data-astro-cid-vqhdmzcb>Calpulalpan (Grupo Modelo), corredor CDMX-Veracruz</span> </li> </ul> </div> <!-- Nearby States --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Estados Vecinos</h4> <ul class="tla-sidebar__states" data-astro-cid-vqhdmzcb> ${estadosVecinos.map((estado) => renderTemplate`<li data-astro-cid-vqhdmzcb> <a${addAttribute(`/directorio/${estado.slug}`, "href")} data-astro-cid-vqhdmzcb> <span data-astro-cid-vqhdmzcb>${estado.nombre}</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vqhdmzcb> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-vqhdmzcb></path> </svg> </a> </li>`)} </ul> </div> <!-- CTA --> <div class="tla-sidebar__card tla-sidebar__card--cta" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>¿Equipas una Estación en TLA?</h4> <p data-astro-cid-vqhdmzcb>Distribuimos equipo NFPA certificado para Tlaxcala: HAZMAT automotriz Audi, textil, ferroviario y alta montaña</p> <a href="/cotizar" class="tla-sidebar__cta-btn" data-astro-cid-vqhdmzcb>Solicitar Cotización</a> </div> <!-- Products --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Equipo para Bomberos</h4> <ul class="tla-sidebar__products" data-astro-cid-vqhdmzcb> <li data-astro-cid-vqhdmzcb><a href="/productos/trajes-para-bomberos" data-astro-cid-vqhdmzcb>Trajes Estructurales NFPA</a></li> <li data-astro-cid-vqhdmzcb><a href="/productos/cascos-para-bomberos" data-astro-cid-vqhdmzcb>Cascos de Bombero</a></li> <li data-astro-cid-vqhdmzcb><a href="/productos/scba" data-astro-cid-vqhdmzcb>Equipos SCBA</a></li> <li data-astro-cid-vqhdmzcb><a href="/productos/herramientas-rescate" data-astro-cid-vqhdmzcb>Herramientas de Rescate</a></li> </ul> <a href="/productos" class="tla-sidebar__link" data-astro-cid-vqhdmzcb>
Ver catálogo completo
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vqhdmzcb> <path d="M5 12h14M12 5l7 7-7 7" data-astro-cid-vqhdmzcb></path> </svg> </a> </div> <!-- Back --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <a href="/directorio" class="tla-sidebar__back" data-astro-cid-vqhdmzcb> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-vqhdmzcb> <path d="M19 12H5M12 19l-7-7 7-7" data-astro-cid-vqhdmzcb></path> </svg> <span data-astro-cid-vqhdmzcb>Ver todos los estados</span> </a> </div> <!-- Contact --> <div class="tla-sidebar__card" data-astro-cid-vqhdmzcb> <h4 data-astro-cid-vqhdmzcb>Contacto BOMBERO.MX</h4> <ul class="tla-sidebar__contact" data-astro-cid-vqhdmzcb> <li data-astro-cid-vqhdmzcb><a href="tel:+525520780102" data-astro-cid-vqhdmzcb>55 2078 0102</a></li> <li data-astro-cid-vqhdmzcb><a href="https://wa.me/525520780102" data-astro-cid-vqhdmzcb>WhatsApp</a></li> <li data-astro-cid-vqhdmzcb><a href="mailto:ventas@bombero.mx" data-astro-cid-vqhdmzcb>ventas@bombero.mx</a></li> </ul> </div> </aside> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tlaxcala.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tlaxcala.astro";
const $$url = "/directorio/tlaxcala";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tlaxcala,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
