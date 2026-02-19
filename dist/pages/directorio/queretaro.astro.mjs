import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { d as getEstacionesHAZMAT, f as getEstacionesAeroespaciales, h as getEstacionesPueblosMagicos, i as getEstacionesUNESCO, j as getEstacionesCarreteras, a as getAlertasActivas, e as estacionesQueretaro, F as FAQ_QUERETARO, Q as QUERETARO_SEO, T as TURISMO_QUERETARO, Z as ZONAS_QUERETARO, g as getEstacionesPorZona, k as getEmpresasAeroespaciales, l as getEstadisticasAeroespaciales, c as generarInterlinking } from '../../chunks/estaciones-queretaro_AUcGp5cr.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$Queretaro = createComponent(($$result, $$props, $$slots) => {
  const title = `${QUERETARO_SEO.titulo} | Directorio BOMBERO.MX`;
  const description = QUERETARO_SEO.descripcion;
  const totalEstaciones = estacionesQueretaro.length;
  const estacionesHAZMAT = getEstacionesHAZMAT();
  const estacionesAeroespaciales = getEstacionesAeroespaciales();
  getEstacionesPueblosMagicos();
  getEstacionesUNESCO();
  getEstacionesCarreteras();
  const empresasAero = getEmpresasAeroespaciales();
  const statsAero = getEstadisticasAeroespaciales();
  const { estados: estadosVecinos, productos: productosRelacionados } = generarInterlinking();
  const alertasActivas = getAlertasActivas();
  const personalTotal = estacionesQueretaro.reduce((sum, e) => sum + (e.personal || 0), 0);
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "name": "H. Cuerpo de Bomberos de Quer\xE9taro",
        "alternateName": "Bomberos Quer\xE9taro",
        "description": "Servicio de bomberos del estado de Quer\xE9taro, M\xE9xico. Cobertura especializada para industria aeroespacial, Centro Hist\xF3rico UNESCO y Pueblos M\xE1gicos.",
        "areaServed": {
          "@type": "State",
          "name": "Quer\xE9taro",
          "containedInPlace": { "@type": "Country", "name": "M\xE9xico" }
        },
        "numberOfEmployees": personalTotal,
        "knowsAbout": [
          "Combate de incendios",
          "HAZMAT aeroespacial",
          "Rescate vertical",
          "Protecci\xF3n patrimonio UNESCO",
          "Rescate carretero"
        ]
      },
      {
        "@type": "ItemList",
        "name": "Estaciones de Bomberos en Quer\xE9taro",
        "description": `Directorio de ${totalEstaciones} estaciones de bomberos en Quer\xE9taro`,
        "numberOfItems": totalEstaciones,
        "itemListElement": estacionesQueretaro.map((estacion, index) => ({
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
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
          { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
          { "@type": "ListItem", "position": 3, "name": "Quer\xE9taro", "item": "https://bombero.mx/directorio/queretaro" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_QUERETARO.map((faq) => ({
          "@type": "Question",
          "name": faq.pregunta,
          "acceptedAnswer": { "@type": "Answer", "text": faq.respuesta }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "Quer\xE9taro",
        "description": "Estado con 2 sitios UNESCO y 4 Pueblos M\xE1gicos",
        "includesAttraction": [
          { "@type": "LandmarksOrHistoricalBuildings", "name": "Centro Hist\xF3rico UNESCO" },
          { "@type": "LandmarksOrHistoricalBuildings", "name": "Misiones Franciscanas UNESCO" },
          { "@type": "TouristAttraction", "name": "Pe\xF1a de Bernal" }
        ]
      }
    ]
  };
  const keywords = [
    "bomberos quer\xE9taro",
    "estaciones bomberos quer\xE9taro ciudad",
    "emergencias quer\xE9taro 911",
    "cuerpo bomberos quer\xE9taro",
    "rescate quer\xE9taro",
    "bomberos san juan del r\xEDo"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Quer\xE9taro", url: "/directorio/queretaro" }
  ]);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": "https://bombero.mx/directorio/queretaro", "jsonLd": [breadcrumbSchema, schemaOrg], "data-astro-cid-fr6qplzu": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="qro-hero" data-astro-cid-fr6qplzu> <div class="qro-hero__bg" data-astro-cid-fr6qplzu> <div class="qro-hero__gradient" data-astro-cid-fr6qplzu></div> <div class="qro-hero__pattern" data-astro-cid-fr6qplzu></div> <div class="qro-hero__overlay" data-astro-cid-fr6qplzu></div> </div> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-hero__container" data-astro-cid-fr6qplzu> <nav class="qro-breadcrumb" aria-label="Breadcrumb" data-astro-cid-fr6qplzu> <ol data-astro-cid-fr6qplzu> <li data-astro-cid-fr6qplzu><a href="/" data-astro-cid-fr6qplzu>Inicio</a></li> <li data-astro-cid-fr6qplzu><a href="/directorio" data-astro-cid-fr6qplzu>Directorio</a></li> <li aria-current="page" data-astro-cid-fr6qplzu>Querétaro</li> </ol> </nav> ${alertasActivas.length > 0 && renderTemplate`<div class="qro-alerts" data-astro-cid-fr6qplzu> ${alertasActivas.slice(0, 2).map((alerta) => renderTemplate`<div${addAttribute(`qro-alert qro-alert--${alerta.tipo}`, "class")} data-astro-cid-fr6qplzu> <span class="qro-alert__icon" data-astro-cid-fr6qplzu>${alerta.icono}</span> <span class="qro-alert__text" data-astro-cid-fr6qplzu>${alerta.mensaje}</span> <span class="qro-alert__priority" data-astro-cid-fr6qplzu>${alerta.prioridad}</span> </div>`)} </div>`} <div class="qro-hero__content" data-astro-cid-fr6qplzu> <div class="qro-hero__badges" data-astro-cid-fr6qplzu> <span class="qro-hero__badge qro-hero__badge--aero" data-astro-cid-fr6qplzu> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fr6qplzu> <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" data-astro-cid-fr6qplzu></path> </svg>
Hub Aeroespacial #1 México
</span> <span class="qro-hero__badge qro-hero__badge--unesco" data-astro-cid-fr6qplzu> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fr6qplzu> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-fr6qplzu></path><path d="M2 17l10 5 10-5" data-astro-cid-fr6qplzu></path><path d="M2 12l10 5 10-5" data-astro-cid-fr6qplzu></path> </svg>
2 Sitios UNESCO
</span> <span class="qro-hero__badge qro-hero__badge--magic" data-astro-cid-fr6qplzu>
4 Pueblos Mágicos
</span> </div> <h1 class="qro-hero__title" data-astro-cid-fr6qplzu>
Estaciones de Bomberos en
<span class="qro-hero__highlight" data-astro-cid-fr6qplzu>Querétaro</span> </h1> <p class="qro-hero__desc" data-astro-cid-fr6qplzu>
Directorio completo del <strong data-astro-cid-fr6qplzu>H. Cuerpo de Bomberos de Querétaro</strong>.
<strong data-astro-cid-fr6qplzu>${totalEstaciones} estaciones</strong> con cobertura especializada para el
<strong data-astro-cid-fr6qplzu>clúster aeroespacial #1 de México</strong>, el <strong data-astro-cid-fr6qplzu>Centro Histórico UNESCO</strong>,
            y la <strong data-astro-cid-fr6qplzu>Ruta del Vino y Queso</strong>.
</p> <div class="qro-hero__stats" data-astro-cid-fr6qplzu> <div class="qro-hero__stat" data-astro-cid-fr6qplzu> <span class="qro-hero__stat-number" data-astro-cid-fr6qplzu>${totalEstaciones}</span> <span class="qro-hero__stat-label" data-astro-cid-fr6qplzu>Estaciones</span> </div> <div class="qro-hero__stat" data-astro-cid-fr6qplzu> <span class="qro-hero__stat-number" data-astro-cid-fr6qplzu>${estacionesHAZMAT.length}</span> <span class="qro-hero__stat-label" data-astro-cid-fr6qplzu>HAZMAT</span> </div> <div class="qro-hero__stat" data-astro-cid-fr6qplzu> <span class="qro-hero__stat-number" data-astro-cid-fr6qplzu>${personalTotal}+</span> <span class="qro-hero__stat-label" data-astro-cid-fr6qplzu>Bomberos</span> </div> <div class="qro-hero__stat" data-astro-cid-fr6qplzu> <span class="qro-hero__stat-number" data-astro-cid-fr6qplzu>911</span> <span class="qro-hero__stat-label" data-astro-cid-fr6qplzu>Emergencias</span> </div> </div> <div class="qro-hero__bilingual" data-astro-cid-fr6qplzu> <div class="qro-hero__bilingual-header" data-astro-cid-fr6qplzu> <span class="qro-hero__bilingual-flag" data-astro-cid-fr6qplzu>EN</span> <span data-astro-cid-fr6qplzu>For International Business</span> </div> <p data-astro-cid-fr6qplzu>${QUERETARO_SEO.bilingue.descripcion}</p> </div> </div> <div class="qro-hero__emergency" data-astro-cid-fr6qplzu> <div class="qro-emergency-card" data-astro-cid-fr6qplzu> <div class="qro-emergency-card__header" data-astro-cid-fr6qplzu> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fr6qplzu> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-fr6qplzu></path> </svg> <span data-astro-cid-fr6qplzu>Emergency Numbers</span> </div> <a href="tel:911" class="qro-emergency-card__number" data-astro-cid-fr6qplzu>911</a> <p class="qro-emergency-card__note" data-astro-cid-fr6qplzu>National Emergency Line / Línea Nacional</p> <div class="qro-emergency-card__locals" data-astro-cid-fr6qplzu> <div class="qro-emergency-card__local" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu>Central Querétaro</span> <a href="tel:+524422123939" data-astro-cid-fr6qplzu>(442) 212-3939</a> </div> <div class="qro-emergency-card__local" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu>HAZMAT Industrial</span> <a href="tel:+524422217800" data-astro-cid-fr6qplzu>(442) 221-7800</a> </div> <div class="qro-emergency-card__local" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu>San Juan del Río</span> <a href="tel:+524272720066" data-astro-cid-fr6qplzu>(427) 272-0066</a> </div> </div> </div> </div> </div> </div> </section>  <section class="qro-aerospace" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-aerospace__header" data-astro-cid-fr6qplzu> <span class="qro-aerospace__badge" data-astro-cid-fr6qplzu>Clúster Aeroespacial #1 México</span> <h2 data-astro-cid-fr6qplzu>Protección Industrial Aeroespacial</h2> <p data-astro-cid-fr6qplzu>
Querétaro es el hub aeroespacial más importante de México con ${statsAero.empresas} empresas
          y ${statsAero.empleos} empleos directos
</p> </div> <div class="qro-aerospace__stats" data-astro-cid-fr6qplzu> <div class="qro-aerospace__stat" data-astro-cid-fr6qplzu> <span class="qro-aerospace__stat-value" data-astro-cid-fr6qplzu>${statsAero.empresas}</span> <span class="qro-aerospace__stat-label" data-astro-cid-fr6qplzu>Empresas Aeroespaciales</span> </div> <div class="qro-aerospace__stat" data-astro-cid-fr6qplzu> <span class="qro-aerospace__stat-value" data-astro-cid-fr6qplzu>${statsAero.empleos}</span> <span class="qro-aerospace__stat-label" data-astro-cid-fr6qplzu>Empleos Directos</span> </div> <div class="qro-aerospace__stat" data-astro-cid-fr6qplzu> <span class="qro-aerospace__stat-value" data-astro-cid-fr6qplzu>${statsAero.exportaciones}</span> <span class="qro-aerospace__stat-label" data-astro-cid-fr6qplzu>Exportaciones Anuales</span> </div> <div class="qro-aerospace__stat" data-astro-cid-fr6qplzu> <span class="qro-aerospace__stat-value" data-astro-cid-fr6qplzu>${statsAero.crecimiento}</span> <span class="qro-aerospace__stat-label" data-astro-cid-fr6qplzu>Crecimiento Anual</span> </div> </div> <div class="qro-aerospace__companies" data-astro-cid-fr6qplzu> ${empresasAero.map((empresa) => renderTemplate`<div class="qro-aerospace__company" data-astro-cid-fr6qplzu> <h3 data-astro-cid-fr6qplzu>${empresa.nombre}</h3> <p class="qro-aerospace__company-location" data-astro-cid-fr6qplzu>${empresa.ubicacion}</p> <div class="qro-aerospace__company-info" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu><strong data-astro-cid-fr6qplzu>${empresa.empleados.toLocaleString()}</strong> empleados</span> <span data-astro-cid-fr6qplzu>${empresa.actividad}</span> </div> <div class="qro-aerospace__company-risk" data-astro-cid-fr6qplzu> <span class="qro-aerospace__company-risk-icon" data-astro-cid-fr6qplzu>⚠️</span> <span data-astro-cid-fr6qplzu>Riesgo HAZMAT: ${empresa.riesgo}</span> </div> </div>`)} </div> <div class="qro-aerospace__coverage" data-astro-cid-fr6qplzu> <h3 data-astro-cid-fr6qplzu>Estaciones con Cobertura Aeroespacial HAZMAT</h3> <div class="qro-aerospace__stations" data-astro-cid-fr6qplzu> ${estacionesAeroespaciales.slice(0, 4).map((e) => renderTemplate`<a${addAttribute(`/directorio/queretaro/${e.slug}`, "href")} class="qro-aerospace__station" data-astro-cid-fr6qplzu> <span class="qro-aerospace__station-name" data-astro-cid-fr6qplzu>${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</span> <span class="qro-aerospace__station-phone" data-astro-cid-fr6qplzu>${e.telefono}</span> </a>`)} </div> </div> </div> </section>  <section class="qro-unesco" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>Patrimonio UNESCO</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>2 Sitios Patrimonio de la Humanidad</h2> </div> <div class="qro-unesco__grid" data-astro-cid-fr6qplzu> ${TURISMO_QUERETARO.patrimonioUnesco.map((sitio) => renderTemplate`<div class="qro-unesco__card" data-astro-cid-fr6qplzu> <span class="qro-unesco__card-year" data-astro-cid-fr6qplzu>UNESCO ${sitio.declaracion}</span> <h3 data-astro-cid-fr6qplzu>${sitio.sitio}</h3> <p data-astro-cid-fr6qplzu>${sitio.descripcion}</p> <div class="qro-unesco__card-visitors" data-astro-cid-fr6qplzu> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fr6qplzu> <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-astro-cid-fr6qplzu></path><circle cx="9" cy="7" r="4" data-astro-cid-fr6qplzu></circle> <path d="M23 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-fr6qplzu></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-fr6qplzu></path> </svg> <span data-astro-cid-fr6qplzu>${sitio.visitantes}</span> </div> </div>`)} </div> </div> </section>  <section class="qro-zones" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>6 Zonas</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>Cobertura Geográfica Especializada</h2> </div> <div class="qro-zones__grid" data-astro-cid-fr6qplzu> ${Object.entries(ZONAS_QUERETARO).map(([key, zona]) => {
    const estacionesZona = getEstacionesPorZona(zona.nombre);
    return renderTemplate`<div class="qro-zone-card"${addAttribute(`--zone-color: ${zona.color}`, "style")} data-astro-cid-fr6qplzu> <div class="qro-zone-card__header" data-astro-cid-fr6qplzu> <h3 data-astro-cid-fr6qplzu>${zona.nombre}</h3> <span class="qro-zone-card__count" data-astro-cid-fr6qplzu>${estacionesZona.length}</span> </div> <p class="qro-zone-card__desc" data-astro-cid-fr6qplzu>${zona.descripcion}</p> <div class="qro-zone-card__meta" data-astro-cid-fr6qplzu> ${zona.poblacion && renderTemplate`<span data-astro-cid-fr6qplzu>Población: ${zona.poblacion}</span>`} ${zona.empleos && renderTemplate`<span data-astro-cid-fr6qplzu>Empleos: ${zona.empleos}</span>`} ${zona.extension && renderTemplate`<span data-astro-cid-fr6qplzu>${zona.extension}</span>`} ${zona.visitantes && renderTemplate`<span data-astro-cid-fr6qplzu>${zona.visitantes}</span>`} </div> <div class="qro-zone-card__risks" data-astro-cid-fr6qplzu> <span class="qro-zone-card__risks-title" data-astro-cid-fr6qplzu>Riesgos:</span> ${zona.riesgosPrincipales.slice(0, 2).map((r) => renderTemplate`<span class="qro-zone-card__risk" data-astro-cid-fr6qplzu>${r}</span>`)} </div> <ul class="qro-zone-card__stations" data-astro-cid-fr6qplzu> ${estacionesZona.slice(0, 2).map((e) => renderTemplate`<li data-astro-cid-fr6qplzu><a${addAttribute(`/directorio/queretaro/${e.slug}`, "href")} data-astro-cid-fr6qplzu>${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</a></li>`)} </ul> </div>`;
  })} </div> </div> </section>  <section class="qro-magicos" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>Turismo</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>4 Pueblos Mágicos de Querétaro</h2> </div> <div class="qro-magicos__grid" data-astro-cid-fr6qplzu> ${TURISMO_QUERETARO.pueblosMagicos.map((pueblo) => renderTemplate`<div class="qro-magico-card" data-astro-cid-fr6qplzu> <div class="qro-magico-card__header" data-astro-cid-fr6qplzu> <span class="qro-magico-card__year" data-astro-cid-fr6qplzu>Desde ${pueblo.designacion}</span> <span class="qro-magico-card__visitors" data-astro-cid-fr6qplzu>${pueblo.visitantes}</span> </div> <h3 data-astro-cid-fr6qplzu>${pueblo.nombre}</h3> <p data-astro-cid-fr6qplzu>${pueblo.atractivo}</p> <div class="qro-magico-card__risk" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu>Riesgo principal:</span> ${pueblo.riesgo} </div> </div>`)} </div> </div> </section>  <section class="qro-wine" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-wine__content" data-astro-cid-fr6qplzu> <div class="qro-wine__info" data-astro-cid-fr6qplzu> <span class="qro-wine__badge" data-astro-cid-fr6qplzu>Ruta del Vino y Queso</span> <h2 data-astro-cid-fr6qplzu>Cobertura Zona Vitivinícola</h2> <p data-astro-cid-fr6qplzu>
La Ruta del Vino y Queso de Querétaro cuenta con <strong data-astro-cid-fr6qplzu>${TURISMO_QUERETARO.rutaVino.vi\u00F1edos} viñedos</strong> y
<strong data-astro-cid-fr6qplzu>${TURISMO_QUERETARO.rutaVino.queserias} queserías</strong>, atrayendo a
<strong data-astro-cid-fr6qplzu>${TURISMO_QUERETARO.rutaVino.visitantesAnuales}</strong> visitantes cada año.
</p> <div class="qro-wine__events" data-astro-cid-fr6qplzu> <h4 data-astro-cid-fr6qplzu>Eventos Principales:</h4> <ul data-astro-cid-fr6qplzu> ${TURISMO_QUERETARO.rutaVino.eventos.map((evento) => renderTemplate`<li data-astro-cid-fr6qplzu>${evento}</li>`)} </ul> </div> </div> <div class="qro-wine__stations" data-astro-cid-fr6qplzu> <h4 data-astro-cid-fr6qplzu>Estaciones de Cobertura:</h4> ${getEstacionesPorZona("Ruta del Vino y Queso").map((e) => renderTemplate`<a${addAttribute(`/directorio/queretaro/${e.slug}`, "href")} class="qro-wine__station" data-astro-cid-fr6qplzu> <span data-astro-cid-fr6qplzu>${e.nombre.replace("Estaci\xF3n de Bomberos ", "")}</span> <span data-astro-cid-fr6qplzu>${e.telefono}</span> </a>`)} </div> </div> </div> </section>  <section class="qro-stations" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>${totalEstaciones} Estaciones</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>Directorio Completo</h2> </div> <div class="qro-stations__grid" data-astro-cid-fr6qplzu> ${estacionesQueretaro.map((estacion) => renderTemplate`<a${addAttribute(`/directorio/queretaro/${estacion.slug}`, "href")} class="qro-station-card" data-astro-cid-fr6qplzu> <div class="qro-station-card__header" data-astro-cid-fr6qplzu> <span class="qro-station-card__zone"${addAttribute(`--zone-color: ${ZONAS_QUERETARO[Object.keys(ZONAS_QUERETARO).find((k) => ZONAS_QUERETARO[k].nombre === estacion.zona) || "centroHistorico"]?.color || "#7c3aed"}`, "style")} data-astro-cid-fr6qplzu> ${estacion.zona} </span> ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("hazmat")) && renderTemplate`<span class="qro-station-card__badge qro-station-card__badge--hazmat" data-astro-cid-fr6qplzu>HAZMAT</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("unesco")) && renderTemplate`<span class="qro-station-card__badge qro-station-card__badge--unesco" data-astro-cid-fr6qplzu>UNESCO</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("pueblo m\xE1gico")) && renderTemplate`<span class="qro-station-card__badge qro-station-card__badge--magic" data-astro-cid-fr6qplzu>P. Mágico</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("aeroespacial") || c.toLowerCase().includes("bombardier")) && renderTemplate`<span class="qro-station-card__badge qro-station-card__badge--aero" data-astro-cid-fr6qplzu>Aeroespacial</span>`} </div> <h3 class="qro-station-card__name" data-astro-cid-fr6qplzu>${estacion.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</h3> <p class="qro-station-card__address" data-astro-cid-fr6qplzu>${estacion.direccion}</p> <div class="qro-station-card__contact" data-astro-cid-fr6qplzu> <span class="qro-station-card__phone" data-astro-cid-fr6qplzu>${estacion.telefono}</span> ${estacion.personal && renderTemplate`<span class="qro-station-card__personnel" data-astro-cid-fr6qplzu>${estacion.personal} bomberos</span>`} </div> <span class="qro-station-card__cta" data-astro-cid-fr6qplzu>Ver detalles</span> </a>`)} </div> </div> </section>  <section class="qro-faq" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>FAQ</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>Preguntas Frecuentes</h2> </div> <div class="qro-faq__grid" data-astro-cid-fr6qplzu> ${FAQ_QUERETARO.slice(0, 6).map((faq, index) => renderTemplate`<details class="qro-faq__item"${addAttribute(index === 0, "open")} data-astro-cid-fr6qplzu> <summary data-astro-cid-fr6qplzu>${faq.pregunta}</summary> <p data-astro-cid-fr6qplzu>${faq.respuesta}</p> </details>`)} </div> </div> </section>  <section class="qro-interlinking" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>Corredor Industrial Bajío</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>Bomberos en Estados Vecinos</h2> </div> <div class="qro-interlinking__grid" data-astro-cid-fr6qplzu> ${estadosVecinos.map((estado) => renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")}${addAttribute(`qro-neighbor-card qro-neighbor-card--${estado.prioridad}`, "class")} data-astro-cid-fr6qplzu> <div class="qro-neighbor-card__priority" data-astro-cid-fr6qplzu>${estado.prioridad}</div> <h3 data-astro-cid-fr6qplzu>${estado.estado}</h3> <p class="qro-neighbor-card__relation" data-astro-cid-fr6qplzu>${estado.relacion}</p> <p class="qro-neighbor-card__context" data-astro-cid-fr6qplzu>${estado.contexto}</p> <span class="qro-neighbor-card__link" data-astro-cid-fr6qplzu>Ver estaciones</span> </a>`)} </div> </div> </section>  <section class="qro-products" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-section-header" data-astro-cid-fr6qplzu> <span class="qro-section-header__label" data-astro-cid-fr6qplzu>Equipamiento Especializado</span> <h2 class="qro-section-header__title" data-astro-cid-fr6qplzu>Equipo para Industria Aeroespacial</h2> </div> <div class="qro-products__grid" data-astro-cid-fr6qplzu> ${productosRelacionados.filter((p) => p.prioridad === "critica" || p.prioridad === "alta").map((producto) => renderTemplate`<a${addAttribute(producto.slug, "href")}${addAttribute(`qro-product-card qro-product-card--${producto.prioridad}`, "class")} data-astro-cid-fr6qplzu> <span class="qro-product-card__priority" data-astro-cid-fr6qplzu>${producto.prioridad}</span> <h3 data-astro-cid-fr6qplzu>${producto.producto}</h3> <p data-astro-cid-fr6qplzu>${producto.contexto}</p> </a>`)} </div> </div> </section>  <section class="qro-seo" data-astro-cid-fr6qplzu> <div class="container" data-astro-cid-fr6qplzu> <div class="qro-seo__content" data-astro-cid-fr6qplzu> <h2 data-astro-cid-fr6qplzu>Bomberos de Querétaro: Protección del Hub Aeroespacial de México</h2> <p data-astro-cid-fr6qplzu>
El <strong data-astro-cid-fr6qplzu>H. Cuerpo de Bomberos de Querétaro</strong> protege uno de los estados más dinámicos de México,
          con <strong data-astro-cid-fr6qplzu>${totalEstaciones} estaciones especializadas</strong> que cubren desde el clúster aeroespacial
          más importante del país hasta sitios Patrimonio de la Humanidad UNESCO.
</p> <h3 data-astro-cid-fr6qplzu>Capacidad HAZMAT Aeroespacial de Clase Mundial</h3> <p data-astro-cid-fr6qplzu>
Las estaciones <strong data-astro-cid-fr6qplzu>HAZMAT de El Marqués</strong> y <strong data-astro-cid-fr6qplzu>Parque Aeroespacial</strong> cuentan con
          capacidad <strong data-astro-cid-fr6qplzu>Nivel A</strong> para emergencias en las ${statsAero.empresas} empresas aeroespaciales,
          incluyendo <strong data-astro-cid-fr6qplzu>Bombardier, Safran, ITP Aero y Airbus Helicopters</strong>. Personal certificado en
          materiales compuestos (fibra de carbono, Kevlar), resinas epóxicas y combustibles de aviación.
</p> <h3 data-astro-cid-fr6qplzu>Protección del Patrimonio UNESCO</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación Central de Querétaro</strong> protege el Centro Histórico declarado Patrimonio UNESCO
          en 1996, incluyendo el icónico Acueducto de 74 arcos. La estación de <strong data-astro-cid-fr6qplzu>Jalpan de Serra</strong>
cubre las 5 Misiones Franciscanas de la Sierra Gorda (UNESCO 2003) y la Reserva de la Biósfera.
</p> <h3 data-astro-cid-fr6qplzu>Rescate Especializado en Peña de Bernal</h3> <p data-astro-cid-fr6qplzu>
La estación de <strong data-astro-cid-fr6qplzu>Bernal</strong> cuenta con equipo especializado en rescate vertical para la
<strong data-astro-cid-fr6qplzu>Peña de Bernal</strong>, el tercer monolito más grande del mundo (350m). Atención de 800,000+
          visitantes anuales y eventos del equinoccio de primavera.
</p> <h3 data-astro-cid-fr6qplzu>Cobertura de la Autopista Más Transitada de México</h3> <p data-astro-cid-fr6qplzu>
La <strong data-astro-cid-fr6qplzu>Estación Carretera 57D</strong> cubre la autopista México-Querétaro con 100,000+ vehículos
          diarios. Equipo de rescate carretero pesado, HAZMAT en tránsito y atención de accidentes múltiples.
</p> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/queretaro.astro";
const $$url = "/directorio/queretaro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Queretaro,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
