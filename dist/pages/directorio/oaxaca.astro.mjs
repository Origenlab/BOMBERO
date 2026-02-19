import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { c as getEstacionesCosteras, d as getEstacionesHAZMAT, f as getEstacionesUNESCO, a as getAlertasActivas, e as estacionesOaxaca, F as FAQ_OAXACA, O as OAXACA_SEO, C as CONTEXTO_OAXACA, Z as ZONAS_OAXACA, h as getEstacionesPorZona, b as generarInterlinking } from '../../chunks/estaciones-oaxaca_BQVZlAIE.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Oaxaca = createComponent(($$result, $$props, $$slots) => {
  const title = `${OAXACA_SEO.titulo} | Directorio BOMBERO.MX`;
  const description = OAXACA_SEO.descripcion;
  const totalEstaciones = estacionesOaxaca.length;
  const estacionesCosteras = getEstacionesCosteras();
  getEstacionesHAZMAT();
  const estacionesUNESCO = getEstacionesUNESCO();
  const { estados: estadosVecinos, productos: productosRelacionados } = generarInterlinking();
  const alertasActivas = getAlertasActivas();
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      // GovernmentOrganization
      {
        "@type": "GovernmentOrganization",
        "name": "H. Cuerpo de Bomberos de Oaxaca",
        "description": "Servicio de bomberos del estado de Oaxaca, M\xE9xico",
        "areaServed": {
          "@type": "State",
          "name": "Oaxaca",
          "containedInPlace": { "@type": "Country", "name": "M\xE9xico" }
        },
        "numberOfEmployees": estacionesOaxaca.reduce((sum, e) => sum + (e.personal || 0), 0),
        "knowsAbout": ["Combate de incendios", "Rescate acu\xE1tico", "HAZMAT", "Rescate patrimonio UNESCO"]
      },
      // ItemList de estaciones
      {
        "@type": "ItemList",
        "name": "Estaciones de Bomberos en Oaxaca",
        "description": `Directorio de ${totalEstaciones} estaciones de bomberos en el estado de Oaxaca`,
        "numberOfItems": totalEstaciones,
        "itemListElement": estacionesOaxaca.map((estacion, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "FireStation",
            "name": estacion.nombre,
            "address": estacion.direccion,
            "telephone": estacion.telefono
          }
        }))
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
          { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
          { "@type": "ListItem", "position": 3, "name": "Oaxaca", "item": "https://bombero.mx/directorio/oaxaca" }
        ]
      },
      // FAQPage
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_OAXACA.map((faq) => ({
          "@type": "Question",
          "name": faq.pregunta,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.respuesta
          }
        }))
      },
      // TouristDestination (Oaxaca UNESCO)
      {
        "@type": "TouristDestination",
        "name": "Oaxaca de Ju\xE1rez",
        "description": "Ciudad Patrimonio de la Humanidad UNESCO con zonas arqueol\xF3gicas",
        "includesAttraction": [
          { "@type": "LandmarksOrHistoricalBuildings", "name": "Centro Hist\xF3rico de Oaxaca" },
          { "@type": "LandmarksOrHistoricalBuildings", "name": "Monte Alb\xE1n" }
        ]
      }
    ]
  };
  const keywords = [
    "bomberos oaxaca",
    "estaciones bomberos oaxaca ciudad",
    "emergencias oaxaca 911",
    "bomberos costa oaxaca",
    "bomberos sierra ju\xE1rez",
    "cuerpo bomberos oaxaca",
    "rescate oaxaca"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Oaxaca", url: "/directorio/oaxaca" }
  ]);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": "https://bombero.mx/directorio/oaxaca", "jsonLd": [breadcrumbSchema, schemaOrg], "data-astro-cid-3v2xg5ou": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="oax-hero" data-astro-cid-3v2xg5ou> <div class="oax-hero__bg" data-astro-cid-3v2xg5ou> <div class="oax-hero__gradient" data-astro-cid-3v2xg5ou></div> <div class="oax-hero__pattern" data-astro-cid-3v2xg5ou></div> </div> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-hero__container" data-astro-cid-3v2xg5ou> <!-- Breadcrumb --> <nav class="oax-breadcrumb" aria-label="Breadcrumb" data-astro-cid-3v2xg5ou> <ol data-astro-cid-3v2xg5ou> <li data-astro-cid-3v2xg5ou><a href="/" data-astro-cid-3v2xg5ou>Inicio</a></li> <li data-astro-cid-3v2xg5ou><a href="/directorio" data-astro-cid-3v2xg5ou>Directorio</a></li> <li aria-current="page" data-astro-cid-3v2xg5ou>Oaxaca</li> </ol> </nav> <!-- Alertas Activas --> ${alertasActivas.length > 0 && renderTemplate`<div class="oax-alerts" data-astro-cid-3v2xg5ou> ${alertasActivas.map((alerta) => renderTemplate`<div${addAttribute(`oax-alert oax-alert--${alerta.tipo}`, "class")} data-astro-cid-3v2xg5ou> <span class="oax-alert__icon" data-astro-cid-3v2xg5ou>${alerta.icono}</span> <span class="oax-alert__text" data-astro-cid-3v2xg5ou>${alerta.mensaje}</span> </div>`)} </div>`} <div class="oax-hero__content" data-astro-cid-3v2xg5ou> <div class="oax-hero__badges" data-astro-cid-3v2xg5ou> <span class="oax-hero__badge oax-hero__badge--unesco" data-astro-cid-3v2xg5ou> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3v2xg5ou> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-3v2xg5ou></path> <path d="M2 17l10 5 10-5" data-astro-cid-3v2xg5ou></path> <path d="M2 12l10 5 10-5" data-astro-cid-3v2xg5ou></path> </svg>
2 Sitios UNESCO
</span> <span class="oax-hero__badge oax-hero__badge--cultural" data-astro-cid-3v2xg5ou> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3v2xg5ou> <circle cx="12" cy="12" r="10" data-astro-cid-3v2xg5ou></circle> <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-3v2xg5ou></path> </svg>
16 Grupos Étnicos
</span> </div> <h1 class="oax-hero__title" data-astro-cid-3v2xg5ou>
Estaciones de Bomberos en
<span class="oax-hero__highlight" data-astro-cid-3v2xg5ou>Oaxaca</span> </h1> <p class="oax-hero__desc" data-astro-cid-3v2xg5ou>
Directorio completo del <strong data-astro-cid-3v2xg5ou>H. Cuerpo de Bomberos de Oaxaca</strong>.
${totalEstaciones} estaciones protegiendo el <strong data-astro-cid-3v2xg5ou>Centro Histórico UNESCO</strong>,
<strong data-astro-cid-3v2xg5ou>Monte Albán</strong>, la <strong data-astro-cid-3v2xg5ou>Costa Oaxaqueña</strong> y el
<strong data-astro-cid-3v2xg5ou>Istmo de Tehuantepec</strong>.
</p> <!-- Stats --> <div class="oax-hero__stats" data-astro-cid-3v2xg5ou> <div class="oax-hero__stat" data-astro-cid-3v2xg5ou> <span class="oax-hero__stat-number" data-astro-cid-3v2xg5ou>${totalEstaciones}</span> <span class="oax-hero__stat-label" data-astro-cid-3v2xg5ou>Estaciones</span> </div> <div class="oax-hero__stat" data-astro-cid-3v2xg5ou> <span class="oax-hero__stat-number" data-astro-cid-3v2xg5ou>${estacionesCosteras.length}</span> <span class="oax-hero__stat-label" data-astro-cid-3v2xg5ou>Rescate Acuático</span> </div> <div class="oax-hero__stat" data-astro-cid-3v2xg5ou> <span class="oax-hero__stat-number" data-astro-cid-3v2xg5ou>${estacionesUNESCO.length}</span> <span class="oax-hero__stat-label" data-astro-cid-3v2xg5ou>Cobertura UNESCO</span> </div> <div class="oax-hero__stat" data-astro-cid-3v2xg5ou> <span class="oax-hero__stat-number" data-astro-cid-3v2xg5ou>911</span> <span class="oax-hero__stat-label" data-astro-cid-3v2xg5ou>Emergencias</span> </div> </div> <!-- Bilingual Section --> <div class="oax-hero__bilingual" data-astro-cid-3v2xg5ou> <span class="oax-hero__bilingual-flag" data-astro-cid-3v2xg5ou>EN</span> <p data-astro-cid-3v2xg5ou>${OAXACA_SEO.bilingue.descripcion}</p> </div> </div> <!-- Emergency Card --> <div class="oax-hero__emergency" data-astro-cid-3v2xg5ou> <div class="oax-emergency-card" data-astro-cid-3v2xg5ou> <div class="oax-emergency-card__header" data-astro-cid-3v2xg5ou> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-3v2xg5ou> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-3v2xg5ou></path> </svg> <span data-astro-cid-3v2xg5ou>Emergencias Oaxaca</span> </div> <a href="tel:911" class="oax-emergency-card__number" data-astro-cid-3v2xg5ou>911</a> <p class="oax-emergency-card__note" data-astro-cid-3v2xg5ou>Número único de emergencias en todo México</p> <div class="oax-emergency-card__locals" data-astro-cid-3v2xg5ou> <div class="oax-emergency-card__local" data-astro-cid-3v2xg5ou> <span class="oax-emergency-card__local-city" data-astro-cid-3v2xg5ou>Oaxaca Centro</span> <a href="tel:+529515162424" data-astro-cid-3v2xg5ou>(951) 516-2424</a> </div> <div class="oax-emergency-card__local" data-astro-cid-3v2xg5ou> <span class="oax-emergency-card__local-city" data-astro-cid-3v2xg5ou>Huatulco</span> <a href="tel:+529585870106" data-astro-cid-3v2xg5ou>(958) 587-0106</a> </div> <div class="oax-emergency-card__local" data-astro-cid-3v2xg5ou> <span class="oax-emergency-card__local-city" data-astro-cid-3v2xg5ou>Puerto Escondido</span> <a href="tel:+529545820222" data-astro-cid-3v2xg5ou>(954) 582-0222</a> </div> </div> </div> </div> </div> </div> </section>  <section class="oax-unesco" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-unesco__header" data-astro-cid-3v2xg5ou> <span class="oax-unesco__badge" data-astro-cid-3v2xg5ou>Patrimonio de la Humanidad</span> <h2 data-astro-cid-3v2xg5ou>Protección de Sitios UNESCO en Oaxaca</h2> <p data-astro-cid-3v2xg5ou>Nuestros bomberos protegen dos de los tesoros culturales más importantes de México</p> </div> <div class="oax-unesco__grid" data-astro-cid-3v2xg5ou> ${CONTEXTO_OAXACA.patrimonioUnesco.map((sitio) => renderTemplate`<div class="oax-unesco__card" data-astro-cid-3v2xg5ou> <div class="oax-unesco__card-year" data-astro-cid-3v2xg5ou>${sitio.declaracion}</div> <h3 data-astro-cid-3v2xg5ou>${sitio.sitio}</h3> <p data-astro-cid-3v2xg5ou>${sitio.descripcion}</p> <div class="oax-unesco__card-stats" data-astro-cid-3v2xg5ou> <span data-astro-cid-3v2xg5ou>${sitio.visitantesAnuales} visitantes/año</span> </div> </div>`)} </div> </div> </section>  <section class="oax-zones" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-section-header" data-astro-cid-3v2xg5ou> <span class="oax-section-header__label" data-astro-cid-3v2xg5ou>6 Regiones</span> <h2 class="oax-section-header__title" data-astro-cid-3v2xg5ou>Cobertura por Zona Geográfica</h2> <p class="oax-section-header__desc" data-astro-cid-3v2xg5ou>
Oaxaca cuenta con ${totalEstaciones} estaciones distribuidas estratégicamente en sus 6 regiones principales
</p> </div> <div class="oax-zones__grid" data-astro-cid-3v2xg5ou> ${Object.entries(ZONAS_OAXACA).map(([key, zona]) => {
    const estacionesZona = getEstacionesPorZona(zona.nombre);
    return renderTemplate`<div class="oax-zone-card"${addAttribute(`--zone-color: ${zona.color}`, "style")} data-astro-cid-3v2xg5ou> <div class="oax-zone-card__header" data-astro-cid-3v2xg5ou> <h3 data-astro-cid-3v2xg5ou>${zona.nombre}</h3> <span class="oax-zone-card__count" data-astro-cid-3v2xg5ou>${estacionesZona.length} estaciones</span> </div> <p class="oax-zone-card__desc" data-astro-cid-3v2xg5ou>${zona.descripcion}</p> <div class="oax-zone-card__features" data-astro-cid-3v2xg5ou> ${zona.caracteristicas.slice(0, 3).map((car) => renderTemplate`<span class="oax-zone-card__feature" data-astro-cid-3v2xg5ou>${car}</span>`)} </div> <ul class="oax-zone-card__stations" data-astro-cid-3v2xg5ou> ${estacionesZona.slice(0, 3).map((e) => renderTemplate`<li data-astro-cid-3v2xg5ou> <a${addAttribute(`/directorio/oaxaca/${e.slug}`, "href")} data-astro-cid-3v2xg5ou>${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</a> </li>`)} ${estacionesZona.length > 3 && renderTemplate`<li class="oax-zone-card__more" data-astro-cid-3v2xg5ou>+${estacionesZona.length - 3} más</li>`} </ul> </div>`;
  })} </div> </div> </section>  <section class="oax-stations" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-section-header" data-astro-cid-3v2xg5ou> <span class="oax-section-header__label" data-astro-cid-3v2xg5ou>${totalEstaciones} Estaciones</span> <h2 class="oax-section-header__title" data-astro-cid-3v2xg5ou>Directorio Completo de Estaciones</h2> <p class="oax-section-header__desc" data-astro-cid-3v2xg5ou>
Información de contacto, servicios y cobertura de todas las estaciones de bomberos en Oaxaca
</p> </div> <div class="oax-stations__grid" data-astro-cid-3v2xg5ou> ${estacionesOaxaca.map((estacion) => renderTemplate`<a${addAttribute(`/directorio/oaxaca/${estacion.slug}`, "href")} class="oax-station-card" data-astro-cid-3v2xg5ou> <div class="oax-station-card__header" data-astro-cid-3v2xg5ou> <span class="oax-station-card__zone"${addAttribute(`--zone-color: ${ZONAS_OAXACA[Object.keys(ZONAS_OAXACA).find((k) => ZONAS_OAXACA[k].nombre === estacion.zona) || "vallesCentrales"]?.color || "#7c3aed"}`, "style")} data-astro-cid-3v2xg5ou> ${estacion.zona} </span> ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("unesco")) && renderTemplate`<span class="oax-station-card__badge oax-station-card__badge--unesco" data-astro-cid-3v2xg5ou>UNESCO</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("hazmat")) && renderTemplate`<span class="oax-station-card__badge oax-station-card__badge--hazmat" data-astro-cid-3v2xg5ou>HAZMAT</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("acu\xE1tico") || c.toLowerCase().includes("surf")) && renderTemplate`<span class="oax-station-card__badge oax-station-card__badge--aquatic" data-astro-cid-3v2xg5ou>Rescate Acuático</span>`} </div> <h3 class="oax-station-card__name" data-astro-cid-3v2xg5ou> ${estacion.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")} </h3> <p class="oax-station-card__address" data-astro-cid-3v2xg5ou>${estacion.direccion}</p> <div class="oax-station-card__contact" data-astro-cid-3v2xg5ou> <span class="oax-station-card__phone" data-astro-cid-3v2xg5ou>${estacion.telefono}</span> ${estacion.personal && renderTemplate`<span class="oax-station-card__personnel" data-astro-cid-3v2xg5ou>${estacion.personal} bomberos</span>`} </div> <div class="oax-station-card__services" data-astro-cid-3v2xg5ou> ${estacion.servicios.slice(0, 3).map((servicio) => renderTemplate`<span class="oax-station-card__service" data-astro-cid-3v2xg5ou>${servicio}</span>`)} </div> <span class="oax-station-card__cta" data-astro-cid-3v2xg5ou>Ver detalles completos</span> </a>`)} </div> </div> </section>  <section class="oax-faq" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-section-header" data-astro-cid-3v2xg5ou> <span class="oax-section-header__label" data-astro-cid-3v2xg5ou>Preguntas Frecuentes</span> <h2 class="oax-section-header__title" data-astro-cid-3v2xg5ou>Información sobre Bomberos en Oaxaca</h2> </div> <div class="oax-faq__grid" data-astro-cid-3v2xg5ou> ${FAQ_OAXACA.map((faq, index) => renderTemplate`<details class="oax-faq__item"${addAttribute(index === 0, "open")} data-astro-cid-3v2xg5ou> <summary class="oax-faq__question" data-astro-cid-3v2xg5ou>${faq.pregunta}</summary> <p class="oax-faq__answer" data-astro-cid-3v2xg5ou>${faq.respuesta}</p> </details>`)} </div> </div> </section>  <section class="oax-interlinking" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-section-header" data-astro-cid-3v2xg5ou> <span class="oax-section-header__label" data-astro-cid-3v2xg5ou>Estados Vecinos</span> <h2 class="oax-section-header__title" data-astro-cid-3v2xg5ou>Bomberos en Estados Cercanos a Oaxaca</h2> <p class="oax-section-header__desc" data-astro-cid-3v2xg5ou>
Coordinación regional con cuerpos de bomberos de estados limítrofes
</p> </div> <div class="oax-interlinking__grid" data-astro-cid-3v2xg5ou> ${estadosVecinos.map((estado) => renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")} class="oax-neighbor-card" data-astro-cid-3v2xg5ou> <h3 data-astro-cid-3v2xg5ou>${estado.estado}</h3> <p class="oax-neighbor-card__relation" data-astro-cid-3v2xg5ou>${estado.relacion}</p> <p class="oax-neighbor-card__context" data-astro-cid-3v2xg5ou>${estado.contexto}</p> <span class="oax-neighbor-card__link" data-astro-cid-3v2xg5ou>Ver estaciones en ${estado.estado}</span> </a>`)} </div> </div> </section>  <section class="oax-products" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-section-header" data-astro-cid-3v2xg5ou> <span class="oax-section-header__label" data-astro-cid-3v2xg5ou>Equipamiento</span> <h2 class="oax-section-header__title" data-astro-cid-3v2xg5ou>Equipo para Bomberos de Oaxaca</h2> <p class="oax-section-header__desc" data-astro-cid-3v2xg5ou>
Equipamiento certificado NFPA para las necesidades específicas de Oaxaca
</p> </div> <div class="oax-products__grid" data-astro-cid-3v2xg5ou> ${productosRelacionados.map((producto) => renderTemplate`<a${addAttribute(producto.slug, "href")} class="oax-product-card" data-astro-cid-3v2xg5ou> <h3 data-astro-cid-3v2xg5ou>${producto.producto}</h3> <p data-astro-cid-3v2xg5ou>${producto.contexto}</p> <span class="oax-product-card__cta" data-astro-cid-3v2xg5ou>Ver productos</span> </a>`)} </div> </div> </section>  <section class="oax-seo" data-astro-cid-3v2xg5ou> <div class="container" data-astro-cid-3v2xg5ou> <div class="oax-seo__content" data-astro-cid-3v2xg5ou> <h2 data-astro-cid-3v2xg5ou>Bomberos de Oaxaca: Protegiendo el Patrimonio Cultural de México</h2> <p data-astro-cid-3v2xg5ou>
El <strong data-astro-cid-3v2xg5ou>H. Cuerpo de Bomberos de Oaxaca</strong> tiene la importante misión de proteger uno de los
          estados más diversos culturalmente de México. Con <strong data-astro-cid-3v2xg5ou>${totalEstaciones} estaciones</strong> distribuidas
          en 6 regiones, los bomberos oaxaqueños cubren desde el <strong data-astro-cid-3v2xg5ou>Centro Histórico Patrimonio UNESCO</strong>
hasta las playas de <strong data-astro-cid-3v2xg5ou>Huatulco y Puerto Escondido</strong>, pasando por la zona industrial del
<strong data-astro-cid-3v2xg5ou>Istmo de Tehuantepec</strong>.
</p> <h3 data-astro-cid-3v2xg5ou>Protección del Patrimonio UNESCO</h3> <p data-astro-cid-3v2xg5ou>
Oaxaca alberga dos sitios declarados <strong data-astro-cid-3v2xg5ou>Patrimonio de la Humanidad por la UNESCO</strong>: el
          Centro Histórico de la ciudad y la zona arqueológica de <strong data-astro-cid-3v2xg5ou>Monte Albán</strong>. Los bomberos
          cuentan con equipo especializado para la protección de estructuras patrimoniales, con protocolos
          específicos para emergencias en edificios históricos y zonas arqueológicas.
</p> <h3 data-astro-cid-3v2xg5ou>Cobertura Turística Costa Oaxaqueña</h3> <p data-astro-cid-3v2xg5ou>
Las estaciones de <strong data-astro-cid-3v2xg5ou>Huatulco</strong>, <strong data-astro-cid-3v2xg5ou>Puerto Escondido</strong> y <strong data-astro-cid-3v2xg5ou>Pochutla</strong>
brindan cobertura a los principales destinos turísticos de playa del estado. Personal capacitado en
<strong data-astro-cid-3v2xg5ou>rescate acuático</strong>, atención bilingüe para turistas internacionales, y equipamiento
          especializado para emergencias en las 9 Bahías de Huatulco y las famosas olas de Zicatela.
</p> <h3 data-astro-cid-3v2xg5ou>Capacidad Industrial y HAZMAT</h3> <p data-astro-cid-3v2xg5ou>
La estación <strong data-astro-cid-3v2xg5ou>HAZMAT de Salina Cruz</strong> protege la <strong data-astro-cid-3v2xg5ou>Refinería Antonio Dovalí Jaime</strong>
(330,000 barriles/día) y el Puerto de Salina Cruz, parte del estratégico <strong data-astro-cid-3v2xg5ou>Corredor Interoceánico
          del Istmo de Tehuantepec</strong>. Capacidad de respuesta nivel III para materiales peligrosos,
          derrames de combustible y emergencias industriales.
</p> <h3 data-astro-cid-3v2xg5ou>Eventos Masivos: Guelaguetza y Día de Muertos</h3> <p data-astro-cid-3v2xg5ou>
Los bomberos de Oaxaca despliegan operativos especiales durante los eventos más importantes del estado:
          la <strong data-astro-cid-3v2xg5ou>Guelaguetza</strong> (julio, 100,000+ asistentes) y el <strong data-astro-cid-3v2xg5ou>Día de Muertos</strong>
(octubre-noviembre, 500,000+ turistas). Coordinación con protección civil para manejo de multitudes,
          prevención de incendios por veladoras y pirotecnia.
</p> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/oaxaca.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/oaxaca.astro";
const $$url = "/directorio/oaxaca";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Oaxaca,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
