import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { d as getEstacionesHAZMAT, f as getEstacionesVolcanicas, h as getEstacionesPueblosMagicos, a as getAlertasActivas, e as estacionesPuebla, F as FAQ_PUEBLA, P as PUEBLA_SEO, I as INFRAESTRUCTURA_PUEBLA, b as INDUSTRIA_PUEBLA, Z as ZONAS_PUEBLA, i as getEstacionesPorZona, T as TURISMO_PUEBLA, c as generarInterlinking } from '../../chunks/estaciones-puebla_Ccw1WhmS.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Puebla = createComponent(($$result, $$props, $$slots) => {
  const title = `${PUEBLA_SEO.titulo} | Directorio BOMBERO.MX`;
  const description = PUEBLA_SEO.descripcion;
  const totalEstaciones = estacionesPuebla.length;
  const estacionesHAZMAT = getEstacionesHAZMAT();
  const estacionesVolcanicas = getEstacionesVolcanicas();
  getEstacionesPueblosMagicos();
  const { estados: estadosVecinos, productos: productosRelacionados } = generarInterlinking();
  const alertasActivas = getAlertasActivas();
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "name": "H. Cuerpo de Bomberos de Puebla",
        "description": "Servicio de bomberos del estado de Puebla, M\xE9xico",
        "areaServed": {
          "@type": "State",
          "name": "Puebla",
          "containedInPlace": { "@type": "Country", "name": "M\xE9xico" }
        },
        "numberOfEmployees": estacionesPuebla.reduce((sum, e) => sum + (e.personal || 0), 0)
      },
      {
        "@type": "ItemList",
        "name": "Estaciones de Bomberos en Puebla",
        "numberOfItems": totalEstaciones,
        "itemListElement": estacionesPuebla.map((estacion, index) => ({
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
          { "@type": "ListItem", "position": 3, "name": "Puebla", "item": "https://bombero.mx/directorio/puebla" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_PUEBLA.map((faq) => ({
          "@type": "Question",
          "name": faq.pregunta,
          "acceptedAnswer": { "@type": "Answer", "text": faq.respuesta }
        }))
      }
    ]
  };
  const keywords = [
    "bomberos puebla",
    "estaciones bomberos puebla ciudad",
    "emergencias puebla 911",
    "bomberos tehuac\xE1n",
    "cuerpo bomberos puebla",
    "rescate puebla",
    "bomberos volc\xE1n popocat\xE9petl"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Puebla", url: "/directorio/puebla" }
  ]);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": "https://bombero.mx/directorio/puebla", "jsonLd": [breadcrumbSchema, schemaOrg], "data-astro-cid-fypxzouz": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="pue-hero" data-astro-cid-fypxzouz> <div class="pue-hero__bg" data-astro-cid-fypxzouz> <div class="pue-hero__gradient" data-astro-cid-fypxzouz></div> <div class="pue-hero__pattern" data-astro-cid-fypxzouz></div> </div> <div class="container" data-astro-cid-fypxzouz> <div class="pue-hero__container" data-astro-cid-fypxzouz> <nav class="pue-breadcrumb" aria-label="Breadcrumb" data-astro-cid-fypxzouz> <ol data-astro-cid-fypxzouz> <li data-astro-cid-fypxzouz><a href="/" data-astro-cid-fypxzouz>Inicio</a></li> <li data-astro-cid-fypxzouz><a href="/directorio" data-astro-cid-fypxzouz>Directorio</a></li> <li aria-current="page" data-astro-cid-fypxzouz>Puebla</li> </ol> </nav> ${alertasActivas.length > 0 && renderTemplate`<div class="pue-alerts" data-astro-cid-fypxzouz> ${alertasActivas.map((alerta) => renderTemplate`<div${addAttribute(`pue-alert pue-alert--${alerta.tipo}`, "class")} data-astro-cid-fypxzouz> <span class="pue-alert__icon" data-astro-cid-fypxzouz>${alerta.icono}</span> <span class="pue-alert__text" data-astro-cid-fypxzouz>${alerta.mensaje}</span> </div>`)} </div>`} <div class="pue-hero__content" data-astro-cid-fypxzouz> <div class="pue-hero__badges" data-astro-cid-fypxzouz> <span class="pue-hero__badge pue-hero__badge--industrial" data-astro-cid-fypxzouz> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fypxzouz> <path d="M2 20h20M5 20V10l5-4v4l5-4v4l4-4v14" data-astro-cid-fypxzouz></path> </svg>
Zona Industrial Automotriz
</span> <span class="pue-hero__badge pue-hero__badge--volcano" data-astro-cid-fypxzouz> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fypxzouz> <path d="M12 2l3 5h-2l4 6h-3l5 9H5l5-9H7l4-6H9l3-5z" data-astro-cid-fypxzouz></path> </svg>
Monitoreo Popocatépetl
</span> <span class="pue-hero__badge pue-hero__badge--unesco" data-astro-cid-fypxzouz>
8 Pueblos Mágicos
</span> </div> <h1 class="pue-hero__title" data-astro-cid-fypxzouz>
Estaciones de Bomberos en
<span class="pue-hero__highlight" data-astro-cid-fypxzouz>Puebla</span> </h1> <p class="pue-hero__desc" data-astro-cid-fypxzouz>
Directorio completo del <strong data-astro-cid-fypxzouz>H. Cuerpo de Bomberos de Puebla</strong>.
${totalEstaciones} estaciones protegiendo el <strong data-astro-cid-fypxzouz>Centro Histórico UNESCO</strong>,
            la <strong data-astro-cid-fypxzouz>zona industrial automotriz</strong> (Volkswagen, Audi) y las comunidades
            cercanas al <strong data-astro-cid-fypxzouz>Volcán Popocatépetl</strong>.
</p> <div class="pue-hero__stats" data-astro-cid-fypxzouz> <div class="pue-hero__stat" data-astro-cid-fypxzouz> <span class="pue-hero__stat-number" data-astro-cid-fypxzouz>${totalEstaciones}</span> <span class="pue-hero__stat-label" data-astro-cid-fypxzouz>Estaciones</span> </div> <div class="pue-hero__stat" data-astro-cid-fypxzouz> <span class="pue-hero__stat-number" data-astro-cid-fypxzouz>${estacionesHAZMAT.length}</span> <span class="pue-hero__stat-label" data-astro-cid-fypxzouz>HAZMAT</span> </div> <div class="pue-hero__stat" data-astro-cid-fypxzouz> <span class="pue-hero__stat-number" data-astro-cid-fypxzouz>${estacionesVolcanicas.length}</span> <span class="pue-hero__stat-label" data-astro-cid-fypxzouz>Volcánicas</span> </div> <div class="pue-hero__stat" data-astro-cid-fypxzouz> <span class="pue-hero__stat-number" data-astro-cid-fypxzouz>911</span> <span class="pue-hero__stat-label" data-astro-cid-fypxzouz>Emergencias</span> </div> </div> <div class="pue-hero__bilingual" data-astro-cid-fypxzouz> <span class="pue-hero__bilingual-flag" data-astro-cid-fypxzouz>EN</span> <p data-astro-cid-fypxzouz>${PUEBLA_SEO.bilingue.descripcion}</p> </div> </div> <div class="pue-hero__emergency" data-astro-cid-fypxzouz> <div class="pue-emergency-card" data-astro-cid-fypxzouz> <div class="pue-emergency-card__header" data-astro-cid-fypxzouz> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-fypxzouz> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-fypxzouz></path> </svg> <span data-astro-cid-fypxzouz>Emergencias Puebla</span> </div> <a href="tel:911" class="pue-emergency-card__number" data-astro-cid-fypxzouz>911</a> <p class="pue-emergency-card__note" data-astro-cid-fypxzouz>Número único de emergencias</p> <div class="pue-emergency-card__locals" data-astro-cid-fypxzouz> <div class="pue-emergency-card__local" data-astro-cid-fypxzouz> <span data-astro-cid-fypxzouz>Central Puebla</span> <a href="tel:+522223099400" data-astro-cid-fypxzouz>(222) 309-9400</a> </div> <div class="pue-emergency-card__local" data-astro-cid-fypxzouz> <span data-astro-cid-fypxzouz>Tehuacán</span> <a href="tel:+522383820033" data-astro-cid-fypxzouz>(238) 382-0033</a> </div> <div class="pue-emergency-card__local" data-astro-cid-fypxzouz> <span data-astro-cid-fypxzouz>Cholula</span> <a href="tel:+522222470707" data-astro-cid-fypxzouz>(222) 247-0707</a> </div> </div> </div> </div> </div> </div> </section>  <section class="pue-industrial" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>Zona Industrial</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Protección Industrial Automotriz</h2> <p class="pue-section-header__desc" data-astro-cid-fypxzouz>
Puebla es sede de las plantas más importantes de Volkswagen y Audi en América
</p> </div> <div class="pue-industrial__grid" data-astro-cid-fypxzouz> ${INDUSTRIA_PUEBLA.automotriz.plantas.map((planta) => renderTemplate`<div class="pue-industrial__card" data-astro-cid-fypxzouz> <h3 data-astro-cid-fypxzouz>${planta.empresa}</h3> <p class="pue-industrial__location" data-astro-cid-fypxzouz>${planta.ubicacion}</p> <div class="pue-industrial__stats" data-astro-cid-fypxzouz> <div class="pue-industrial__stat" data-astro-cid-fypxzouz> <span class="pue-industrial__stat-value" data-astro-cid-fypxzouz>${planta.empleados.toLocaleString()}</span> <span class="pue-industrial__stat-label" data-astro-cid-fypxzouz>Empleados</span> </div> <div class="pue-industrial__stat" data-astro-cid-fypxzouz> <span class="pue-industrial__stat-value" data-astro-cid-fypxzouz>${planta.produccion}</span> <span class="pue-industrial__stat-label" data-astro-cid-fypxzouz>Producción</span> </div> </div> <div class="pue-industrial__models" data-astro-cid-fypxzouz> <span data-astro-cid-fypxzouz>Modelos:</span> ${planta.modelos.join(", ")} </div> <div class="pue-industrial__risk" data-astro-cid-fypxzouz> <span class="pue-industrial__risk-icon" data-astro-cid-fypxzouz>⚠️</span> <span data-astro-cid-fypxzouz>Riesgo: ${planta.riesgo}</span> </div> </div>`)} </div> </div> </section>  <section class="pue-volcano" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-volcano__card" data-astro-cid-fypxzouz> <div class="pue-volcano__icon" data-astro-cid-fypxzouz>🌋</div> <div class="pue-volcano__content" data-astro-cid-fypxzouz> <h2 data-astro-cid-fypxzouz>Monitoreo Volcán Popocatépetl</h2> <p data-astro-cid-fypxzouz>
El <strong data-astro-cid-fypxzouz>Volcán Popocatépetl</strong> se encuentra en estado activo
            (<strong data-astro-cid-fypxzouz>${INFRAESTRUCTURA_PUEBLA.volcanPopocatepetl.estado}</strong>).
${estacionesVolcanicas.length} estaciones de bomberos están capacitadas para
            emergencias volcánicas y evacuaciones.
</p> <div class="pue-volcano__info" data-astro-cid-fypxzouz> <div class="pue-volcano__info-item" data-astro-cid-fypxzouz> <span class="pue-volcano__info-label" data-astro-cid-fypxzouz>Altitud</span> <span class="pue-volcano__info-value" data-astro-cid-fypxzouz>${INFRAESTRUCTURA_PUEBLA.volcanPopocatepetl.altitud}</span> </div> <div class="pue-volcano__info-item" data-astro-cid-fypxzouz> <span class="pue-volcano__info-label" data-astro-cid-fypxzouz>Radio evacuación</span> <span class="pue-volcano__info-value" data-astro-cid-fypxzouz>${INFRAESTRUCTURA_PUEBLA.volcanPopocatepetl.radioEvacuacion}</span> </div> </div> <div class="pue-volcano__stations" data-astro-cid-fypxzouz> <h4 data-astro-cid-fypxzouz>Estaciones con capacidad volcánica:</h4> <ul data-astro-cid-fypxzouz> ${estacionesVolcanicas.map((e) => renderTemplate`<li data-astro-cid-fypxzouz><a${addAttribute(`/directorio/puebla/${e.slug}`, "href")} data-astro-cid-fypxzouz>${e.nombre.replace("Estaci\xF3n de Bomberos ", "")}</a></li>`)} </ul> </div> </div> </div> </div> </section>  <section class="pue-zones" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>6 Zonas</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Cobertura por Zona Geográfica</h2> </div> <div class="pue-zones__grid" data-astro-cid-fypxzouz> ${Object.entries(ZONAS_PUEBLA).map(([key, zona]) => {
    const estacionesZona = getEstacionesPorZona(zona.nombre);
    return renderTemplate`<div class="pue-zone-card"${addAttribute(`--zone-color: ${zona.color}`, "style")} data-astro-cid-fypxzouz> <div class="pue-zone-card__header" data-astro-cid-fypxzouz> <h3 data-astro-cid-fypxzouz>${zona.nombre}</h3> <span class="pue-zone-card__count" data-astro-cid-fypxzouz>${estacionesZona.length}</span> </div> <p class="pue-zone-card__desc" data-astro-cid-fypxzouz>${zona.descripcion}</p> <div class="pue-zone-card__features" data-astro-cid-fypxzouz> ${zona.caracteristicas.slice(0, 3).map((car) => renderTemplate`<span class="pue-zone-card__feature" data-astro-cid-fypxzouz>${car}</span>`)} </div> <ul class="pue-zone-card__stations" data-astro-cid-fypxzouz> ${estacionesZona.slice(0, 2).map((e) => renderTemplate`<li data-astro-cid-fypxzouz><a${addAttribute(`/directorio/puebla/${e.slug}`, "href")} data-astro-cid-fypxzouz>${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</a></li>`)} </ul> </div>`;
  })} </div> </div> </section>  <section class="pue-stations" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>${totalEstaciones} Estaciones</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Directorio Completo</h2> </div> <div class="pue-stations__grid" data-astro-cid-fypxzouz> ${estacionesPuebla.map((estacion) => renderTemplate`<a${addAttribute(`/directorio/puebla/${estacion.slug}`, "href")} class="pue-station-card" data-astro-cid-fypxzouz> <div class="pue-station-card__header" data-astro-cid-fypxzouz> <span class="pue-station-card__zone"${addAttribute(`--zone-color: ${ZONAS_PUEBLA[Object.keys(ZONAS_PUEBLA).find((k) => ZONAS_PUEBLA[k].nombre === estacion.zona) || "zonaMetropolitana"]?.color || "#1e40af"}`, "style")} data-astro-cid-fypxzouz> ${estacion.zona} </span> ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("hazmat")) && renderTemplate`<span class="pue-station-card__badge pue-station-card__badge--hazmat" data-astro-cid-fypxzouz>HAZMAT</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("popocat\xE9petl") || c.toLowerCase().includes("volc\xE1n")) && renderTemplate`<span class="pue-station-card__badge pue-station-card__badge--volcano" data-astro-cid-fypxzouz>Volcánica</span>`} ${estacion.caracteristicasEspeciales?.some((c) => c.toLowerCase().includes("pueblo m\xE1gico")) && renderTemplate`<span class="pue-station-card__badge pue-station-card__badge--magic" data-astro-cid-fypxzouz>Pueblo Mágico</span>`} </div> <h3 class="pue-station-card__name" data-astro-cid-fypxzouz>${estacion.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central ", "")}</h3> <p class="pue-station-card__address" data-astro-cid-fypxzouz>${estacion.direccion}</p> <div class="pue-station-card__contact" data-astro-cid-fypxzouz> <span class="pue-station-card__phone" data-astro-cid-fypxzouz>${estacion.telefono}</span> ${estacion.personal && renderTemplate`<span class="pue-station-card__personnel" data-astro-cid-fypxzouz>${estacion.personal} bomberos</span>`} </div> <span class="pue-station-card__cta" data-astro-cid-fypxzouz>Ver detalles</span> </a>`)} </div> </div> </section>  <section class="pue-magicos" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>Turismo</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Cobertura en Pueblos Mágicos</h2> </div> <div class="pue-magicos__grid" data-astro-cid-fypxzouz> ${TURISMO_PUEBLA.pueblosMagicos.slice(0, 6).map((pueblo) => renderTemplate`<div class="pue-magico-card" data-astro-cid-fypxzouz> <span class="pue-magico-card__year" data-astro-cid-fypxzouz>${pueblo.designacion}</span> <h3 data-astro-cid-fypxzouz>${pueblo.nombre}</h3> <p data-astro-cid-fypxzouz>${pueblo.atractivo}</p> </div>`)} </div> </div> </section>  <section class="pue-faq" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>FAQ</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Preguntas Frecuentes</h2> </div> <div class="pue-faq__grid" data-astro-cid-fypxzouz> ${FAQ_PUEBLA.map((faq, index) => renderTemplate`<details class="pue-faq__item"${addAttribute(index === 0, "open")} data-astro-cid-fypxzouz> <summary data-astro-cid-fypxzouz>${faq.pregunta}</summary> <p data-astro-cid-fypxzouz>${faq.respuesta}</p> </details>`)} </div> </div> </section>  <section class="pue-interlinking" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>Estados Vecinos</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Bomberos en Estados Cercanos</h2> </div> <div class="pue-interlinking__grid" data-astro-cid-fypxzouz> ${estadosVecinos.map((estado) => renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")} class="pue-neighbor-card" data-astro-cid-fypxzouz> <h3 data-astro-cid-fypxzouz>${estado.estado}</h3> <p data-astro-cid-fypxzouz>${estado.relacion}</p> <span data-astro-cid-fypxzouz>Ver estaciones</span> </a>`)} </div> </div> </section>  <section class="pue-products" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-section-header" data-astro-cid-fypxzouz> <span class="pue-section-header__label" data-astro-cid-fypxzouz>Equipamiento</span> <h2 class="pue-section-header__title" data-astro-cid-fypxzouz>Equipo para Bomberos de Puebla</h2> </div> <div class="pue-products__grid" data-astro-cid-fypxzouz> ${productosRelacionados.map((producto) => renderTemplate`<a${addAttribute(producto.slug, "href")} class="pue-product-card" data-astro-cid-fypxzouz> <h3 data-astro-cid-fypxzouz>${producto.producto}</h3> <p data-astro-cid-fypxzouz>${producto.contexto}</p> </a>`)} </div> </div> </section>  <section class="pue-seo" data-astro-cid-fypxzouz> <div class="container" data-astro-cid-fypxzouz> <div class="pue-seo__content" data-astro-cid-fypxzouz> <h2 data-astro-cid-fypxzouz>Bomberos de Puebla: Protección Industrial y Patrimonial</h2> <p data-astro-cid-fypxzouz>
El <strong data-astro-cid-fypxzouz>H. Cuerpo de Bomberos de Puebla</strong> protege uno de los estados más importantes de México,
          con <strong data-astro-cid-fypxzouz>${totalEstaciones} estaciones</strong> cubriendo desde el <strong data-astro-cid-fypxzouz>Centro Histórico UNESCO</strong>
hasta la <strong data-astro-cid-fypxzouz>zona industrial automotriz más grande de América Latina</strong>.
</p> <h3 data-astro-cid-fypxzouz>Protección Industrial de Clase Mundial</h3> <p data-astro-cid-fypxzouz>
Las estaciones HAZMAT de <strong data-astro-cid-fypxzouz>Cuautlancingo</strong> y <strong data-astro-cid-fypxzouz>San José Chiapa</strong> protegen las plantas
          de <strong data-astro-cid-fypxzouz>Volkswagen</strong> (15,000 empleados, 400,000+ vehículos/año) y <strong data-astro-cid-fypxzouz>Audi México</strong>
(5,200 empleados, 150,000+ Q5/año). Personal especializado en emergencias químicas, derrames industriales
          y rescate técnico en líneas de producción.
</p> <h3 data-astro-cid-fypxzouz>Monitoreo del Volcán Popocatépetl</h3> <p data-astro-cid-fypxzouz> ${estacionesVolcanicas.length} estaciones están capacitadas para emergencias volcánicas. Las estaciones de
<strong data-astro-cid-fypxzouz>Atlixco</strong>, <strong data-astro-cid-fypxzouz>San Nicolás de los Ranchos</strong> y <strong data-astro-cid-fypxzouz>Tochimilco</strong> operan
          dentro del radio de evacuación de 12 km del Popocatépetl, con equipo especializado para atención de
          afectados por ceniza y evacuaciones masivas.
</p> <h3 data-astro-cid-fypxzouz>Cobertura de Pueblos Mágicos</h3> <p data-astro-cid-fypxzouz>
Puebla cuenta con <strong data-astro-cid-fypxzouz>8 Pueblos Mágicos</strong>: Cholula, Zacatlán, Chignahuapan, Cuetzalan, Atlixco,
          Xicotepec, Pahuatlán y Tlatlauquitepec. Cada uno cuenta con cobertura de bomberos para proteger el
          patrimonio histórico, los visitantes y las comunidades locales.
</p> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/puebla.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/puebla.astro";
const $$url = "/directorio/puebla";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Puebla,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
