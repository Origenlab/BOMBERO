import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$PageLayout } from '../../chunks/PageLayout_C3xQZUfp.mjs';
import { c as getEstacionesBilingues, d as getEstacionesRescateAcuatico, f as getEstacionesHoteleras, h as getEstacionesAeropuertos, i as getEstacionesCruceros, j as getEstacionesIslas, a as getAlertasActivas, e as estacionesQuintanaRoo, Q as QUINTANA_ROO_SEO, F as FAQ_QUINTANA_ROO, Z as ZONAS_QUINTANA_ROO, g as getEstacionesPorZona, k as getEstadisticasTurismo, l as getZonasHoteleras, m as generarInterlinking } from '../../chunks/estaciones-quintana-roo_D1YQ--O8.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$QuintanaRoo = createComponent(($$result, $$props, $$slots) => {
  const title = `${QUINTANA_ROO_SEO.titulo} | Canc\xFAn, Riviera Maya | BOMBERO.MX`;
  const description = QUINTANA_ROO_SEO.descripcion;
  const totalEstaciones = estacionesQuintanaRoo.length;
  const estacionesBilingues = getEstacionesBilingues();
  const estacionesAcuatico = getEstacionesRescateAcuatico();
  const estacionesHoteleras = getEstacionesHoteleras();
  const estacionesAeropuertos = getEstacionesAeropuertos();
  getEstacionesCruceros();
  getEstacionesIslas();
  const statsTurismo = getEstadisticasTurismo();
  const zonasHoteleras = getZonasHoteleras();
  const { estados: estadosVecinos, productos: productosRelacionados } = generarInterlinking();
  const alertasActivas = getAlertasActivas(void 0, "es");
  const personalTotal = estacionesQuintanaRoo.reduce((sum, e) => sum + (e.personal || 0), 0);
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentOrganization",
        "@id": "https://bombero.mx/directorio/quintana-roo#organization",
        "name": "H. Cuerpo de Bomberos de Quintana Roo",
        "alternateName": ["Bomberos Quintana Roo", "Quintana Roo Fire Department", "Bomberos Canc\xFAn", "Cancun Fire Rescue"],
        "description": "Servicio de bomberos del estado de Quintana Roo, M\xE9xico. Cobertura especializada para el destino tur\xEDstico m\xE1s importante de Latinoam\xE9rica.",
        "areaServed": {
          "@type": "State",
          "name": "Quintana Roo",
          "containedInPlace": { "@type": "Country", "name": "M\xE9xico" }
        },
        "numberOfEmployees": personalTotal,
        "knowsAbout": ["Water Rescue", "Hotel Fire Safety", "Hurricane Response", "Tourist Emergency Services", "Cruise Ship Emergencies"],
        "availableLanguage": ["Spanish", "English"]
      },
      {
        "@type": "ItemList",
        "name": "Estaciones de Bomberos en Quintana Roo",
        "description": `Directorio de ${totalEstaciones} estaciones de bomberos en Quintana Roo, M\xE9xico`,
        "numberOfItems": totalEstaciones,
        "itemListElement": estacionesQuintanaRoo.map((estacion, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "FireStation",
            "name": estacion.nombre,
            "address": estacion.direccion,
            "telephone": estacion.telefono,
            "availableLanguage": estacion.idiomas || ["Spanish"]
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://bombero.mx" },
          { "@type": "ListItem", "position": 2, "name": "Directorio", "item": "https://bombero.mx/directorio" },
          { "@type": "ListItem", "position": 3, "name": "Quintana Roo", "item": "https://bombero.mx/directorio/quintana-roo" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_QUINTANA_ROO.slice(0, 8).map((faq) => ({
          "@type": "Question",
          "name": faq.pregunta,
          "acceptedAnswer": { "@type": "Answer", "text": faq.respuesta }
        }))
      },
      {
        "@type": "TouristDestination",
        "name": "Quintana Roo - Caribe Mexicano",
        "description": "Destino tur\xEDstico #1 de Latinoam\xE9rica con 25+ millones de visitantes anuales",
        "touristType": ["Beach Tourism", "Eco-tourism", "Archaeological Tourism", "Cruise Tourism"],
        "includesAttraction": [
          { "@type": "TouristAttraction", "name": "Canc\xFAn Zona Hotelera" },
          { "@type": "TouristAttraction", "name": "Riviera Maya" },
          { "@type": "TouristAttraction", "name": "Cozumel" },
          { "@type": "TouristAttraction", "name": "Tulum" },
          { "@type": "NaturalFeature", "name": "Gran Arrecife Maya" },
          { "@type": "LandmarksOrHistoricalBuildings", "name": "Reserva Sian Ka'an UNESCO" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://bombero.mx/directorio/quintana-roo#webpage",
        "url": "https://bombero.mx/directorio/quintana-roo",
        "name": title,
        "description": description,
        "inLanguage": ["es-MX", "en-US"],
        "isPartOf": { "@id": "https://bombero.mx/#website" }
      }
    ]
  };
  const keywords = [
    "bomberos quintana roo",
    "estaciones bomberos canc\xFAn",
    "emergencias quintana roo 911",
    "bomberos playa del carmen",
    "bomberos tulum",
    "bomberos cozumel",
    "cuerpo bomberos caribe"
  ];
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Quintana Roo", url: "/directorio/quintana-roo" }
  ]);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description, "keywords": keywords, "canonical": "https://bombero.mx/directorio/quintana-roo", "jsonLd": [breadcrumbSchema, schemaOrg], "data-astro-cid-lxfhnynn": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="qroo-hero" data-astro-cid-lxfhnynn> <div class="qroo-hero__bg" data-astro-cid-lxfhnynn> <div class="qroo-hero__gradient" data-astro-cid-lxfhnynn></div> <div class="qroo-hero__waves" data-astro-cid-lxfhnynn></div> <div class="qroo-hero__pattern" data-astro-cid-lxfhnynn></div> </div> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-hero__container" data-astro-cid-lxfhnynn> <!-- Breadcrumb --> <nav class="qroo-breadcrumb" aria-label="Breadcrumb" data-astro-cid-lxfhnynn> <ol data-astro-cid-lxfhnynn> <li data-astro-cid-lxfhnynn><a href="/" data-astro-cid-lxfhnynn>Inicio</a></li> <li data-astro-cid-lxfhnynn><a href="/directorio" data-astro-cid-lxfhnynn>Directorio</a></li> <li aria-current="page" data-astro-cid-lxfhnynn>Quintana Roo</li> </ol> </nav> <!-- Alertas Críticas --> ${alertasActivas.length > 0 && renderTemplate`<div class="qroo-alerts" data-astro-cid-lxfhnynn> ${alertasActivas.slice(0, 2).map((alerta) => renderTemplate`<div${addAttribute(`qroo-alert qroo-alert--${alerta.tipo}`, "class")} data-astro-cid-lxfhnynn> <span class="qroo-alert__icon" data-astro-cid-lxfhnynn>${alerta.icono}</span> <span class="qroo-alert__text" data-astro-cid-lxfhnynn>${alerta.mensaje}</span> <span class="qroo-alert__priority" data-astro-cid-lxfhnynn>${alerta.prioridad}</span> </div>`)} </div>`} <div class="qroo-hero__grid" data-astro-cid-lxfhnynn> <div class="qroo-hero__content" data-astro-cid-lxfhnynn> <!-- Badges Premium --> <div class="qroo-hero__badges" data-astro-cid-lxfhnynn> <span class="qroo-hero__badge qroo-hero__badge--tourism" data-astro-cid-lxfhnynn> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-lxfhnynn> <circle cx="12" cy="12" r="10" data-astro-cid-lxfhnynn></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" data-astro-cid-lxfhnynn></path> <path d="M2 12h20" data-astro-cid-lxfhnynn></path> </svg>
#1 Destino Latinoamérica
</span> <span class="qroo-hero__badge qroo-hero__badge--bilingual" data-astro-cid-lxfhnynn> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-lxfhnynn> <path d="M5 8l6 6" data-astro-cid-lxfhnynn></path><path d="M4 14l6-6 2-3" data-astro-cid-lxfhnynn></path><path d="M2 5h12" data-astro-cid-lxfhnynn></path><path d="M7 2h1" data-astro-cid-lxfhnynn></path> <path d="M22 22l-5-10-5 10" data-astro-cid-lxfhnynn></path><path d="M14 18h6" data-astro-cid-lxfhnynn></path> </svg>
Servicio Bilingüe 24/7
</span> <span class="qroo-hero__badge qroo-hero__badge--water" data-astro-cid-lxfhnynn>
🌊 Rescate Acuático
</span> </div> <h1 class="qroo-hero__title" data-astro-cid-lxfhnynn> <span class="qroo-hero__title-es" data-astro-cid-lxfhnynn>Estaciones de Bomberos en</span> <span class="qroo-hero__highlight" data-astro-cid-lxfhnynn>Quintana Roo</span> </h1> <p class="qroo-hero__title-en" data-astro-cid-lxfhnynn>Fire Stations in Quintana Roo - Cancun & Riviera Maya</p> <p class="qroo-hero__desc" data-astro-cid-lxfhnynn>
Directorio completo del <strong data-astro-cid-lxfhnynn>H. Cuerpo de Bomberos de Quintana Roo</strong>.
<strong data-astro-cid-lxfhnynn>${totalEstaciones} estaciones</strong> con cobertura especializada para
<strong data-astro-cid-lxfhnynn>Cancún, Riviera Maya, Playa del Carmen, Tulum y Cozumel</strong>.
              Rescate acuático, emergencias hoteleras y respuesta a huracanes.
</p> <p class="qroo-hero__desc-en" data-astro-cid-lxfhnynn>
Complete directory of Quintana Roo Fire Department. <strong data-astro-cid-lxfhnynn>${totalEstaciones} stations</strong> with
              specialized coverage for <strong data-astro-cid-lxfhnynn>Cancun, Riviera Maya, Playa del Carmen, Tulum, and Cozumel</strong>.
              Water rescue, hotel emergencies, and hurricane response. <strong data-astro-cid-lxfhnynn>English service available 24/7</strong>.
</p> <!-- Stats Grid --> <div class="qroo-hero__stats" data-astro-cid-lxfhnynn> <div class="qroo-hero__stat" data-astro-cid-lxfhnynn> <span class="qroo-hero__stat-number" data-astro-cid-lxfhnynn>${totalEstaciones}</span> <span class="qroo-hero__stat-label" data-astro-cid-lxfhnynn>Estaciones / Stations</span> </div> <div class="qroo-hero__stat" data-astro-cid-lxfhnynn> <span class="qroo-hero__stat-number" data-astro-cid-lxfhnynn>${estacionesBilingues.length}</span> <span class="qroo-hero__stat-label" data-astro-cid-lxfhnynn>Bilingües / Bilingual</span> </div> <div class="qroo-hero__stat" data-astro-cid-lxfhnynn> <span class="qroo-hero__stat-number" data-astro-cid-lxfhnynn>${personalTotal}+</span> <span class="qroo-hero__stat-label" data-astro-cid-lxfhnynn>Bomberos / Firefighters</span> </div> <div class="qroo-hero__stat qroo-hero__stat--emergency" data-astro-cid-lxfhnynn> <span class="qroo-hero__stat-number" data-astro-cid-lxfhnynn>911</span> <span class="qroo-hero__stat-label" data-astro-cid-lxfhnynn>Emergencias / Emergency</span> </div> </div> </div> <!-- Emergency Card Premium Bilingüe --> <div class="qroo-hero__emergency" data-astro-cid-lxfhnynn> <div class="qroo-emergency-card" data-astro-cid-lxfhnynn> <div class="qroo-emergency-card__header" data-astro-cid-lxfhnynn> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-lxfhnynn> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" data-astro-cid-lxfhnynn></path> </svg> <span data-astro-cid-lxfhnynn>Emergency / Emergencias</span> </div> <a href="tel:911" class="qroo-emergency-card__911" data-astro-cid-lxfhnynn>911</a> <p class="qroo-emergency-card__note" data-astro-cid-lxfhnynn> <span class="qroo-emergency-card__note-es" data-astro-cid-lxfhnynn>Línea Nacional - Operadores en Inglés</span> <span class="qroo-emergency-card__note-en" data-astro-cid-lxfhnynn>National Line - English Operators Available</span> </p> <div class="qroo-emergency-card__locals" data-astro-cid-lxfhnynn> <div class="qroo-emergency-card__local" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>Cancún Hotel Zone</span> <a href="tel:+529988852222" data-astro-cid-lxfhnynn>(998) 885-2222</a> </div> <div class="qroo-emergency-card__local" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>Cancún Central</span> <a href="tel:+529988841300" data-astro-cid-lxfhnynn>(998) 884-1300</a> </div> <div class="qroo-emergency-card__local" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>Playa del Carmen</span> <a href="tel:+529848730291" data-astro-cid-lxfhnynn>(984) 873-0291</a> </div> <div class="qroo-emergency-card__local" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>Cozumel</span> <a href="tel:+529878720800" data-astro-cid-lxfhnynn>(987) 872-0800</a> </div> </div> <div class="qroo-emergency-card__bilingual-notice" data-astro-cid-lxfhnynn> <span class="qroo-emergency-card__bilingual-flag" data-astro-cid-lxfhnynn>EN</span> <span data-astro-cid-lxfhnynn>All operators speak English / Todos los operadores hablan inglés</span> </div> </div> </div> </div> </div> </div> </section>  <section class="qroo-tourism" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>Industria Turística / Tourism Industry</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Destino #1 de Latinoamérica</h2> <p class="qroo-section-subtitle" data-astro-cid-lxfhnynn>Latin America's #1 Tourist Destination</p> </div> <div class="qroo-tourism__stats" data-astro-cid-lxfhnynn> <div class="qroo-tourism__stat" data-astro-cid-lxfhnynn> <span class="qroo-tourism__stat-value" data-astro-cid-lxfhnynn>${statsTurismo.visitantesAnuales}</span> <span class="qroo-tourism__stat-label" data-astro-cid-lxfhnynn>Visitantes/año<br data-astro-cid-lxfhnynn>Visitors/year</span> </div> <div class="qroo-tourism__stat" data-astro-cid-lxfhnynn> <span class="qroo-tourism__stat-value" data-astro-cid-lxfhnynn>${statsTurismo.habitacionesHoteleras}</span> <span class="qroo-tourism__stat-label" data-astro-cid-lxfhnynn>Habitaciones<br data-astro-cid-lxfhnynn>Hotel Rooms</span> </div> <div class="qroo-tourism__stat" data-astro-cid-lxfhnynn> <span class="qroo-tourism__stat-value" data-astro-cid-lxfhnynn>${statsTurismo.cruceristas}</span> <span class="qroo-tourism__stat-label" data-astro-cid-lxfhnynn>Cruceristas/año<br data-astro-cid-lxfhnynn>Cruisers/year</span> </div> <div class="qroo-tourism__stat" data-astro-cid-lxfhnynn> <span class="qroo-tourism__stat-value" data-astro-cid-lxfhnynn>${statsTurismo.aeropuertoPasajeros}</span> <span class="qroo-tourism__stat-label" data-astro-cid-lxfhnynn>Pasajeros Aeropuerto<br data-astro-cid-lxfhnynn>Airport Passengers</span> </div> </div> <!-- Hotel Zones --> <div class="qroo-tourism__zones" data-astro-cid-lxfhnynn> <h3 data-astro-cid-lxfhnynn>Zonas Hoteleras con Cobertura / Hotel Zones Coverage</h3> <div class="qroo-tourism__zones-grid" data-astro-cid-lxfhnynn> ${zonasHoteleras.map((zona) => renderTemplate`<div class="qroo-tourism__zone" data-astro-cid-lxfhnynn> <h4 data-astro-cid-lxfhnynn>${zona.nombre}</h4> <div class="qroo-tourism__zone-stats" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn><strong data-astro-cid-lxfhnynn>${zona.habitaciones.toLocaleString()}</strong> habitaciones</span> <span data-astro-cid-lxfhnynn><strong data-astro-cid-lxfhnynn>${zona.hoteles}</strong> hoteles</span> </div> <div class="qroo-tourism__zone-chains" data-astro-cid-lxfhnynn> ${zona.cadenasPrincipales?.slice(0, 3).map((c) => renderTemplate`<span class="qroo-tourism__chain" data-astro-cid-lxfhnynn>${c}</span>`)} </div> </div>`)} </div> </div> </div> </section>  <section class="qroo-services" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>Servicios Especializados / Specialized Services</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Capacidades de Emergencia</h2> </div> <div class="qroo-services__grid" data-astro-cid-lxfhnynn> <div class="qroo-service-card qroo-service-card--water" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>🌊</div> <h3 data-astro-cid-lxfhnynn>Rescate Acuático<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Water Rescue</span></h3> <p data-astro-cid-lxfhnynn>${estacionesAcuatico.length} estaciones con capacidad de rescate oceánico, cenotes y buceo profesional</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>${estacionesAcuatico.length} stations with ocean rescue, cenote rescue, and professional diving capability</p> </div> <div class="qroo-service-card qroo-service-card--hotel" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>🏨</div> <h3 data-astro-cid-lxfhnynn>Emergencias Hoteleras<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Hotel Emergencies</span></h3> <p data-astro-cid-lxfhnynn>${estacionesHoteleras.length} estaciones con cobertura de ${statsTurismo.habitacionesHoteleras} habitaciones y 400+ resorts</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>${estacionesHoteleras.length} stations covering ${statsTurismo.habitacionesHoteleras} rooms and 400+ resorts</p> </div> <div class="qroo-service-card qroo-service-card--airport" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>✈️</div> <h3 data-astro-cid-lxfhnynn>SSEI Aeroportuario<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Airport ARFF</span></h3> <p data-astro-cid-lxfhnynn>${estacionesAeropuertos.length} estaciones SSEI cubriendo aeropuerto Top 2 de Latinoamérica (25M pasajeros)</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>${estacionesAeropuertos.length} ARFF stations covering Latin America's #2 airport (25M passengers)</p> </div> <div class="qroo-service-card qroo-service-card--cruise" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>🚢</div> <h3 data-astro-cid-lxfhnynn>Emergencias Cruceros<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Cruise Emergencies</span></h3> <p data-astro-cid-lxfhnynn>Cobertura del puerto de cruceros #3 del mundo con 4.5 millones de pasajeros anuales</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>Coverage of world's #3 cruise port with 4.5 million passengers annually</p> </div> <div class="qroo-service-card qroo-service-card--hurricane" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>🌀</div> <h3 data-astro-cid-lxfhnynn>Respuesta Huracanes<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Hurricane Response</span></h3> <p data-astro-cid-lxfhnynn>Protocolo especializado junio-noviembre con evacuación coordinada y refugios</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>Specialized protocol June-November with coordinated evacuation and shelters</p> </div> <div class="qroo-service-card qroo-service-card--bilingual" data-astro-cid-lxfhnynn> <div class="qroo-service-card__icon" data-astro-cid-lxfhnynn>🌐</div> <h3 data-astro-cid-lxfhnynn>Servicio Bilingüe<br data-astro-cid-lxfhnynn><span data-astro-cid-lxfhnynn>Bilingual Service</span></h3> <p data-astro-cid-lxfhnynn>${estacionesBilingues.length} estaciones con personal bilingüe español/inglés en zonas turísticas</p> <p class="qroo-service-card__en" data-astro-cid-lxfhnynn>${estacionesBilingues.length} stations with bilingual Spanish/English staff in tourist zones</p> </div> </div> </div> </section>  <section class="qroo-zones" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>8 Zonas de Cobertura</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Cobertura Geográfica</h2> </div> <div class="qroo-zones__grid" data-astro-cid-lxfhnynn> ${Object.entries(ZONAS_QUINTANA_ROO).map(([key, zona]) => {
    const estacionesZona = getEstacionesPorZona(zona.nombre);
    return renderTemplate`<div class="qroo-zone-card"${addAttribute(`--zone-color: ${zona.color}`, "style")} data-astro-cid-lxfhnynn> <div class="qroo-zone-card__header" data-astro-cid-lxfhnynn> <div data-astro-cid-lxfhnynn> <h3 data-astro-cid-lxfhnynn>${zona.nombre}</h3> <p class="qroo-zone-card__name-en" data-astro-cid-lxfhnynn>${zona.nombreEn}</p> </div> <span class="qroo-zone-card__count" data-astro-cid-lxfhnynn>${estacionesZona.length}</span> </div> <p class="qroo-zone-card__desc" data-astro-cid-lxfhnynn>${zona.descripcion}</p> <div class="qroo-zone-card__meta" data-astro-cid-lxfhnynn> ${zona.poblacion && renderTemplate`<span data-astro-cid-lxfhnynn>👥 ${zona.poblacion}</span>`} ${zona.poblacionFlotante && renderTemplate`<span data-astro-cid-lxfhnynn>🏖️ ${zona.poblacionFlotante}</span>`} ${zona.cruceristas && renderTemplate`<span data-astro-cid-lxfhnynn>🚢 ${zona.cruceristas}</span>`} ${zona.visitantes && renderTemplate`<span data-astro-cid-lxfhnynn>📸 ${zona.visitantes}</span>`} </div> <div class="qroo-zone-card__response" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>⏱️ Tiempo respuesta: ${zona.tiempoRespuesta}</span> </div> <ul class="qroo-zone-card__stations" data-astro-cid-lxfhnynn> ${estacionesZona.slice(0, 2).map((e) => renderTemplate`<li data-astro-cid-lxfhnynn> <a${addAttribute(`/directorio/quintana-roo/${e.slug}`, "href")} data-astro-cid-lxfhnynn> ${e.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central de Bomberos ", "")} </a> </li>`)} </ul> </div>`;
  })} </div> </div> </section>  <section class="qroo-stations" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>${totalEstaciones} Estaciones</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Directorio Completo / Complete Directory</h2> </div> <div class="qroo-stations__grid" data-astro-cid-lxfhnynn> ${estacionesQuintanaRoo.map((estacion) => {
    const zonaInfo = ZONAS_QUINTANA_ROO[Object.keys(ZONAS_QUINTANA_ROO).find(
      (k) => ZONAS_QUINTANA_ROO[k].nombre === estacion.zona
    )];
    const esBilingue = estacion.idiomas?.includes("Ingl\xE9s");
    const esAcuatico = estacion.servicios?.some((s) => s.toLowerCase().includes("acu\xE1tico"));
    const esAeropuerto = estacion.servicios?.some((s) => s.toLowerCase().includes("ssei"));
    const esCrucero = estacion.servicios?.some((s) => s.toLowerCase().includes("crucero"));
    return renderTemplate`<a${addAttribute(`/directorio/quintana-roo/${estacion.slug}`, "href")} class="qroo-station-card" data-astro-cid-lxfhnynn> <div class="qroo-station-card__header" data-astro-cid-lxfhnynn> <span class="qroo-station-card__zone"${addAttribute(`--zone-color: ${zonaInfo?.color || "#0ea5e9"}`, "style")} data-astro-cid-lxfhnynn> ${estacion.zona} </span> <div class="qroo-station-card__badges" data-astro-cid-lxfhnynn> ${esBilingue && renderTemplate`<span class="qroo-station-card__badge qroo-station-card__badge--bilingual" title="Bilingual" data-astro-cid-lxfhnynn>EN</span>`} ${esAcuatico && renderTemplate`<span class="qroo-station-card__badge qroo-station-card__badge--water" title="Water Rescue" data-astro-cid-lxfhnynn>🌊</span>`} ${esAeropuerto && renderTemplate`<span class="qroo-station-card__badge qroo-station-card__badge--airport" title="Airport" data-astro-cid-lxfhnynn>✈️</span>`} ${esCrucero && renderTemplate`<span class="qroo-station-card__badge qroo-station-card__badge--cruise" title="Cruise" data-astro-cid-lxfhnynn>🚢</span>`} </div> </div> <h3 class="qroo-station-card__name" data-astro-cid-lxfhnynn> ${estacion.nombre.replace("Estaci\xF3n de Bomberos ", "").replace("Estaci\xF3n Central de Bomberos ", "")} </h3> <p class="qroo-station-card__address" data-astro-cid-lxfhnynn>${estacion.direccion}</p> <div class="qroo-station-card__contact" data-astro-cid-lxfhnynn> <span class="qroo-station-card__phone" data-astro-cid-lxfhnynn>${estacion.telefono}</span> ${estacion.personal && renderTemplate`<span class="qroo-station-card__personnel" data-astro-cid-lxfhnynn>${estacion.personal} bomberos</span>`} </div> ${estacion.tiempoRespuesta && renderTemplate`<p class="qroo-station-card__response" data-astro-cid-lxfhnynn>⏱️ ${estacion.tiempoRespuesta}</p>`} <span class="qroo-station-card__cta" data-astro-cid-lxfhnynn>Ver detalles / View details →</span> </a>`;
  })} </div> </div> </section>  <section class="qroo-faq" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>FAQ / Preguntas Frecuentes</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Información Importante</h2> <p class="qroo-section-subtitle" data-astro-cid-lxfhnynn>Important Information for Visitors</p> </div> <div class="qroo-faq__grid" data-astro-cid-lxfhnynn> ${FAQ_QUINTANA_ROO.slice(0, 8).map((faq, index) => renderTemplate`<details class="qroo-faq__item"${addAttribute(index < 2, "open")} data-astro-cid-lxfhnynn> <summary data-astro-cid-lxfhnynn> <span class="qroo-faq__q-es" data-astro-cid-lxfhnynn>${faq.pregunta}</span> <span class="qroo-faq__q-en" data-astro-cid-lxfhnynn>${faq.preguntaEn}</span> </summary> <div class="qroo-faq__answer" data-astro-cid-lxfhnynn> <p class="qroo-faq__a-es" data-astro-cid-lxfhnynn>${faq.respuesta}</p> <p class="qroo-faq__a-en" data-astro-cid-lxfhnynn>${faq.respuestaEn}</p> </div> </details>`)} </div> </div> </section>  <section class="qroo-interlinking" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>Península de Yucatán</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Bomberos en Estados Vecinos</h2> </div> <div class="qroo-interlinking__grid" data-astro-cid-lxfhnynn> ${estadosVecinos.map((estado) => renderTemplate`<a${addAttribute(`/directorio/${estado.slug}`, "href")}${addAttribute(`qroo-neighbor-card qroo-neighbor-card--${estado.prioridad}`, "class")} data-astro-cid-lxfhnynn> <div class="qroo-neighbor-card__header" data-astro-cid-lxfhnynn> <h3 data-astro-cid-lxfhnynn>${estado.estado}</h3> <span class="qroo-neighbor-card__priority" data-astro-cid-lxfhnynn>${estado.prioridad}</span> </div> <p class="qroo-neighbor-card__relation" data-astro-cid-lxfhnynn>${estado.relacion}</p> <p class="qroo-neighbor-card__context" data-astro-cid-lxfhnynn>${estado.contexto}</p> <div class="qroo-neighbor-card__distance" data-astro-cid-lxfhnynn> <span data-astro-cid-lxfhnynn>📍 ${estado.distanciaKm} km</span> <span data-astro-cid-lxfhnynn>🚗 ${estado.tiempoViaje}</span> </div> <span class="qroo-neighbor-card__link" data-astro-cid-lxfhnynn>Ver estaciones →</span> </a>`)} </div> </div> </section>  <section class="qroo-products" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-section-header qroo-section-header--center" data-astro-cid-lxfhnynn> <span class="qroo-section-label" data-astro-cid-lxfhnynn>Para Hoteles y Resorts / For Hotels & Resorts</span> <h2 class="qroo-section-title" data-astro-cid-lxfhnynn>Equipamiento de Seguridad</h2> <p class="qroo-section-subtitle" data-astro-cid-lxfhnynn>Safety Equipment for Tourism Industry</p> </div> <div class="qroo-products__grid" data-astro-cid-lxfhnynn> ${productosRelacionados.filter((p) => p.prioridad === "critica" || p.prioridad === "alta").map((producto) => renderTemplate`<a${addAttribute(producto.slug, "href")}${addAttribute(`qroo-product-card qroo-product-card--${producto.prioridad}`, "class")} data-astro-cid-lxfhnynn> <span class="qroo-product-card__priority" data-astro-cid-lxfhnynn>${producto.prioridad}</span> <h3 data-astro-cid-lxfhnynn>${producto.producto}</h3> <p data-astro-cid-lxfhnynn>${producto.contexto}</p> <div class="qroo-product-card__audience" data-astro-cid-lxfhnynn> ${producto.audiencia?.map((a) => renderTemplate`<span data-astro-cid-lxfhnynn>${a}</span>`)} </div> <span class="qroo-product-card__roi" data-astro-cid-lxfhnynn>${producto.roi}</span> </a>`)} </div> <div class="qroo-products__cta" data-astro-cid-lxfhnynn> <a href="/cotizar" class="qroo-btn qroo-btn--primary" data-astro-cid-lxfhnynn>
Cotización Corporativa Hotelera
<span class="qroo-btn__en" data-astro-cid-lxfhnynn>Hotel Corporate Quote</span> </a> </div> </div> </section>  <section class="qroo-seo" data-astro-cid-lxfhnynn> <div class="container" data-astro-cid-lxfhnynn> <div class="qroo-seo__grid" data-astro-cid-lxfhnynn> <div class="qroo-seo__content" data-astro-cid-lxfhnynn> <h2 data-astro-cid-lxfhnynn>Bomberos de Quintana Roo: Protección del Caribe Mexicano</h2> <p data-astro-cid-lxfhnynn>
El <strong data-astro-cid-lxfhnynn>H. Cuerpo de Bomberos de Quintana Roo</strong> protege el destino turístico más importante de
            Latinoamérica. Con <strong data-astro-cid-lxfhnynn>${totalEstaciones} estaciones especializadas</strong>, brindamos cobertura las 24 horas
            para los <strong data-astro-cid-lxfhnynn>25+ millones de visitantes anuales</strong> que disfrutan de Cancún, Riviera Maya, Playa del Carmen,
            Tulum y Cozumel.
</p> <h3 data-astro-cid-lxfhnynn>Capacidades de Rescate Acuático Certificadas</h3> <p data-astro-cid-lxfhnynn>
Nuestras <strong data-astro-cid-lxfhnynn>${estacionesAcuatico.length} estaciones de rescate acuático</strong> cuentan con personal certificado
            en rescate oceánico, rescate en cenotes (aguas confinadas) y buceo profesional. Cobertura del <strong data-astro-cid-lxfhnynn>Gran Arrecife Maya</strong>,
            segundo más grande del mundo, y más de <strong data-astro-cid-lxfhnynn>6,000 cenotes registrados</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Servicio Bilingüe para Turismo Internacional</h3> <p data-astro-cid-lxfhnynn>
Las <strong data-astro-cid-lxfhnynn>${estacionesBilingues.length} estaciones bilingües</strong> en zonas turísticas cuentan con personal que habla
            español e inglés. El servicio 911 tiene operadores bilingües 24/7. Coordinación con seguridad de
<strong data-astro-cid-lxfhnynn>Marriott, Hilton, Hyatt, RIU, Iberostar y Palace Resorts</strong>.
</p> </div> <div class="qroo-seo__content qroo-seo__content--en" data-astro-cid-lxfhnynn> <h2 data-astro-cid-lxfhnynn>Quintana Roo Fire Department: Protecting the Mexican Caribbean</h2> <p data-astro-cid-lxfhnynn>
The <strong data-astro-cid-lxfhnynn>Quintana Roo Fire Department</strong> protects Latin America's most important tourist destination.
            With <strong data-astro-cid-lxfhnynn>${totalEstaciones} specialized stations</strong>, we provide 24-hour coverage for the
<strong data-astro-cid-lxfhnynn>25+ million annual visitors</strong> enjoying Cancun, Riviera Maya, Playa del Carmen, Tulum, and Cozumel.
</p> <h3 data-astro-cid-lxfhnynn>Certified Water Rescue Capabilities</h3> <p data-astro-cid-lxfhnynn>
Our <strong data-astro-cid-lxfhnynn>${estacionesAcuatico.length} water rescue stations</strong> have personnel certified in ocean rescue,
            cenote rescue (confined waters), and professional diving. Coverage of the <strong data-astro-cid-lxfhnynn>Great Mayan Reef</strong>,
            world's second largest, and more than <strong data-astro-cid-lxfhnynn>6,000 registered cenotes</strong>.
</p> <h3 data-astro-cid-lxfhnynn>Bilingual Service for International Tourism</h3> <p data-astro-cid-lxfhnynn>
The <strong data-astro-cid-lxfhnynn>${estacionesBilingues.length} bilingual stations</strong> in tourist zones have Spanish and English-speaking
            personnel. 911 service has bilingual operators 24/7. Coordination with <strong data-astro-cid-lxfhnynn>Marriott, Hilton, Hyatt, RIU,
            Iberostar, and Palace Resorts</strong> security teams.
</p> </div> </div> </div> </section> ` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/quintana-roo.astro";
const $$url = "/directorio/quintana-roo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuintanaRoo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
