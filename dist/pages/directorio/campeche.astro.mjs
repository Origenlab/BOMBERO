import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { c as getMunicipios, d as getEstadisticas, e as estacionesCampeche } from '../../chunks/estaciones-campeche_DqMn496V.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Campeche = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const estadisticas = getEstadisticas();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Campeche", url: "/directorio/campeche" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Campeche, M\xE9xico",
    "description": "Directorio oficial de las 7 estaciones de bomberos en Campeche. Tel\xE9fonos directos en San Francisco de Campeche, Ciudad del Carmen, Esc\xE1rcega, Champot\xF3n, Calkin\xED, Candelaria y Calakmul. Cobertura 24/7. Emergencias: llama al 911.",
    "numberOfItems": estacionesCampeche.length,
    "itemListElement": estacionesCampeche.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio || e.ciudad,
          "addressRegion": "Campeche",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/campeche/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-petrolera-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/estacion-bomberos-selva-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/estacion-bomberos-maritimo-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/lancha-rescate-bomberos-01.avif",
    "/images/directorio/pick-up-bomberos-forestal-01.avif",
    "/images/directorio/estacion-bomberos-puerto-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/motobomba-incendios-forestal-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Campeche", "sigla": "CAMP", "slug": "campeche", "description": `Directorio oficial de las ${estadisticas.totalEstaciones} estaciones de bomberos en Campeche. Tel\xE9fonos de emergencia en San Francisco de Campeche, Ciudad del Carmen, Esc\xE1rcega, Champot\xF3n y Calakmul. HAZMAT petrolero, forestal selva maya y protecci\xF3n UNESCO. Emergencias: 911.`, "keywords": [
    "bomberos campeche",
    "estaciones bomberos ciudad del carmen",
    "bomberos hazmat pemex campeche",
    "emergencias campeche 911",
    "bomberos sonda de campeche",
    "bomberos calakmul selva maya",
    "cuerpo bomberos campeche",
    "bomberos ciudad amurallada unesco",
    "incendios forestales selva campeche",
    "bomberos escarcega",
    "bomberos champoton",
    "emergencias offshore plataformas campeche",
    "bomberos patrimonio unesco campeche",
    "directorio bomberos campeche",
    "emergencias 911 san francisco campeche"
  ], "canonical": "https://bombero.mx/directorio/campeche", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estadisticas.totalEstaciones, "totalMunicipios": estadisticas.totalMunicipios, "habitantes": "928K+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de Campeche</strong> protege los <strong>${estadisticas.totalMunicipios} municipios</strong> del \xFAnico estado de M\xE9xico con triple Patrimonio UNESCO con <strong>${estadisticas.totalEstaciones} estaciones activas</strong> y m\xE1s de <strong>322 bomberos profesionales</strong> \u2014 desde la ciudad amurallada del siglo XVII hasta las plataformas petroleras de la Sonda de Campeche, la selva de Calakmul y la frontera con Guatemala.`, "heroImage": "/images/directorio/estacion-bomberos-petrolera-01.avif", "heroImageAlt": "Estaci\xF3n de Bomberos Campeche \u2014 HAZMAT Sonda de Campeche ciudad amurallada UNESCO", "heroCaption": "H. Cuerpo de Bomberos \xB7 Campeche", "heroThumbs": [
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "HAZMAT bomberos Ciudad del Carmen plataformas petroleras PEMEX Sonda de Campeche", label: "HAZMAT Petrolero" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Incendio edificios coloniales Centro Hist\xF3rico Campeche ciudad amurallada UNESCO", label: "Patrimonio UNESCO" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Bomberos forestales selva Reserva Bi\xF3sfera Calakmul 723 mil hect\xE1reas UNESCO", label: "Forestal Selva Maya" }
  ], "galleryImages": [
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n HAZMAT plataformas petroleras Sonda de Campeche offshore PEMEX", label: "HAZMAT Offshore" },
    { src: "/images/directorio/estacion-bomberos-central-edificio-01.avif", alt: "Protecci\xF3n Centro Hist\xF3rico Campeche ciudad amurallada baluartes coloniales UNESCO", label: "Ciudad Amurallada UNESCO" },
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Incendio forestal Reserva Bi\xF3sfera Calakmul selva tropical M\xE9xico jaguar puma", label: "Reserva Calakmul UNESCO" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico Golfo de M\xE9xico Laguna T\xE9rminos Champot\xF3n flota pesquera", label: "Rescate Golfo de M\xE9xico" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "981 811 3636", label: "Bomberos Campeche" },
    { number: "938 382 5050", label: "Bomberos Cd. del Carmen" },
    { number: "982 824 0066", label: "Bomberos Esc\xE1rcega" },
    { number: "982 828 0038", label: "Bomberos Champot\xF3n" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Capital UNESCO", desc: "San Francisco de Campeche \xB7 Ciudad amurallada \xB7 Malec\xF3n" },
    { nombre: "Zona Petrolera", desc: "Ciudad del Carmen \xB7 Sonda de Campeche \xB7 Laguna de T\xE9rminos" },
    { nombre: "Zona Maya-Bi\xF3sfera", desc: "Calakmul \xB7 Xpujil \xB7 Reserva UNESCO 723K ha" },
    { nombre: "Zona Sur Selv\xE1tica", desc: "Candelaria \xB7 Esc\xE1rcega \xB7 Tren Maya \xB7 Frontera Guatemala" },
    { nombre: "Zona Norte Camino Real", desc: "Calkin\xED \xB7 Champot\xF3n \xB7 Hecelchak\xE1n \xB7 Costa del Golfo" }
  ], "estadosVecinos": [
    { nombre: "Yucat\xE1n", slug: "yucatan" },
    { nombre: "Quintana Roo", slug: "quintana-roo" },
    { nombre: "Tabasco", slug: "tabasco" }
  ], "estaciones": estacionesCampeche, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imageAlt: "Traje HAZMAT Nivel A bomberos Ciudad del Carmen plataformas petroleras PEMEX Sonda Campeche",
      badge: "NFPA 1991",
      title: "Traje HAZMAT Nivel A \u2014 Emergencias Petroleras",
      text: "Certificado NFPA 1991 para la <strong>Sonda de Campeche</strong>, la mayor zona de producci\xF3n petrolera de M\xE9xico: <strong>60% del petr\xF3leo nacional</strong> y <strong>30% del gas natural</strong> provienen de sus m\xE1s de 200 plataformas marinas. Protecci\xF3n total encapsulada contra hidrocarburos, gases t\xF3xicos y derrames en mar abierto. Compatible con los protocolos de emergencia de <strong>PEMEX, Halliburton, Schlumberger y Baker Hughes</strong> para incidentes offshore en la Sonda de Campeche.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje estructural NFPA 1971 bomberos Campeche ciudad amurallada UNESCO edificios coloniales siglo XVII",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: "Imprescindible para proteger la <strong>Ciudad Hist\xF3rica Fortificada de Campeche</strong> (Patrimonio UNESCO, 1999) \u2014 la <strong>\xFAnica ciudad amurallada de M\xE9xico</strong> con 8 baluartes y 2.5 km de murallas del siglo XVII. Los edificios de cantera del centro hist\xF3rico requieren t\xE9cnicas especializadas de extinci\xF3n para no da\xF1ar el patrimonio. Tambi\xE9n para incendios en la <strong>Antigua Ciudad Maya de Calakmul</strong> (UNESCO, 2002), el mayor sitio arqueol\xF3gico maya de M\xE9xico con 6,750 estructuras.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 bomberos selva Reserva Bi\xF3sfera Calakmul incendios forestales jaguar puma",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977",
      text: "Certificado para combate de incendios en la <strong>Reserva de la Bi\xF3sfera de Calakmul</strong> (Patrimonio UNESCO, 2014), con <strong>723,185 hect\xE1reas</strong> de selva tropical \u2014 la mayor reserva de bosque tropical de M\xE9xico y segunda del continente americano despu\xE9s del Amazonas. Hogar del jaguar, puma, tapir, guacamaya roja y m\xE1s de 300 especies de aves. Las brigadas de Calakmul trabajan en coordinaci\xF3n con <strong>CONANP y CONAFOR</strong> con drones t\xE9rmicos y tanques nodriza.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas estructurales NFPA 1971 bomberos Campeche terreno mixto plataformas selva ciudad colonial costal",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el terreno m\xE1s diverso del sureste: cubiertas de metal en <strong>plataformas petroleras offshore</strong> de la Sonda de Campeche, adoqu\xEDn hist\xF3rico de la <strong>ciudad amurallada de Campeche</strong>, suelo selv\xE1tico h\xFAmedo de la <strong>Reserva de Calakmul</strong>, muelles pesqueros de <strong>Champot\xF3n y la Laguna de T\xE9rminos</strong>, y suelo fronterizo de <strong>Candelaria</strong> junto al r\xEDo hom\xF3nimo. Resistencia garantizada en los ambientes m\xE1s extremos de M\xE9xico.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Campeche", "ctaDesc": `Cotiza equipo certificado NFPA para las ${estadisticas.totalEstaciones} estaciones en San Francisco de Campeche, Ciudad del Carmen, Esc\xE1rcega, Champot\xF3n, Calkin\xED, Candelaria y Calakmul. Env\xEDo a los 13 municipios del estado. Atenci\xF3n a licitaciones p\xFAblicas PEMEX y compra directa.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Campeche" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Campeche</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Campeche</strong> salvaguarda a los
<strong>928,363 campechanos</strong> en los <strong>13 municipios</strong> del único
      estado de México con <strong>triple Patrimonio de la Humanidad UNESCO</strong>. Con
<strong>7 estaciones operativas</strong> y más de <strong>322 bomberos profesionales
      activos</strong>, opera las <strong>24 horas del día, los 365 días del año</strong>,
      enfrentando desafíos que van desde emergencias en plataformas petroleras offshore hasta
      incendios en la selva tropical de Calakmul y protección de la única ciudad amurallada
      de México.
</p> <h3>¿Cómo llamar a los Bomberos en Campeche?</h3> <p>
En cualquier <strong>emergencia en Campeche</strong>, marca el <strong>911</strong>
desde cualquier teléfono — fijo o celular, con o sin saldo. Para contacto directo:
<strong>Campeche (capital): 981 811 3636</strong> ·
<strong>Ciudad del Carmen: 938 382 5050</strong> ·
<strong>Escárcega: 982 824 0066</strong> ·
<strong>Champotón: 982 828 0038</strong> ·
<strong>Calkiní: 996 963 0033</strong> ·
<strong>Candelaria: 982 826 0025</strong> ·
<strong>Calakmul (Xpujil): 983 871 6036</strong>.
      Para emergencias offshore en la Sonda de Campeche, el 911 coordina con la
<strong>Armada de México</strong> y brigadas industriales de <strong>PEMEX</strong>.
</p> <h3>Triple Patrimonio UNESCO — El Reto Único de Campeche</h3> <p>
Campeche es el único estado de México con tres sitios Patrimonio de la Humanidad UNESCO,
      y los bomberos deben protegerlos con técnicas altamente especializadas:
      la <strong>Ciudad Histórica Fortificada de Campeche (1999)</strong> — con
      8 baluartes, 2 fuertes y murallas de 2.5 km construidos en el siglo XVII para
      repeler ataques piratas — requiere extinción de incendios sin dañar la cantera original;
      la <strong>Antigua Ciudad Maya de Calakmul (2002)</strong> — con 6,750 estructuras
      arqueológicas y rival histórica de Tikal — exige coordinación con el INAH en cada
      emergencia dentro de la zona de monumentos;
      la <strong>Reserva de la Biósfera de Calakmul (2014)</strong> — con 723,185 hectáreas
      de selva tropical — demanda brigadas forestales especializadas y drones térmicos para
      detectar focos de incendio antes de que se propaguen.
</p> <h3>Bomberos y la Industria Petrolera — Sonda de Campeche</h3> <p>
La <strong>Estación de Ciudad del Carmen</strong> es una de las más especializadas de
      México, respondiendo a emergencias en la <strong>Sonda de Campeche</strong>:
      la mayor zona de producción petrolera del país, con <strong>200+ plataformas marinas</strong>
que producen el <strong>60% del petróleo</strong> y <strong>30% del gas natural</strong>
de México. El personal mantiene certificaciones internacionales en HAZMAT nivel técnico
      para hidrocarburos, rescate marítimo offshore y coordinación con brigadas industriales de
<strong>PEMEX, Halliburton, Schlumberger y Baker Hughes</strong>. Ciudad del Carmen,
      isla conectada por los puentes Zacatal (3.2 km) y La Unidad (3.8 km), requiere
      protocolos especiales de respuesta en isla ante huracanes del Golfo de México.
</p> <h3>Incendios Forestales en la Selva Maya</h3> <p>
La <strong>Estación de Calakmul</strong> opera en una de las zonas más críticas
      ambientalmente de América: la selva tropical que conecta con la <strong>selva de
      Petén (Guatemala)</strong>, formando el segundo bloque de bosque tropical del continente
      después del Amazonas. Los incendios forestales en esta zona pueden consumir miles de
      hectáreas en horas, amenazando fauna protegida (jaguar, tapir, guacamaya roja) y
      estructuras arqueológicas milenarias. La estación emplea <strong>drones con cámaras
      térmicas</strong>, radios satelitales y equipos forestales de la <strong>brigada Calakmul</strong>
en coordinación permanente con <strong>CONANP y CONAFOR</strong> durante la temporada
      seca (febrero-mayo).
</p> <h3>Especialidades del Cuerpo de Bomberos de Campeche</h3> <p>
Los bomberos campechanos poseen capacidades únicas en México:
<strong>HAZMAT nivel técnico</strong> para hidrocarburos, gases y derrames offshore
      en la Sonda de Campeche;
<strong>protección de patrimonio histórico</strong> con técnicas de mínimo impacto en
      edificios coloniales del siglo XVII y estructuras mayas;
<strong>combate forestal en selva tropical</strong> con brigadas certificadas y
      drones de detección;
<strong>rescate vehicular pesado</strong> en el cruce carretero estratégico de Escárcega
      (tres carreteras federales y el Tren Maya);
<strong>rescate acuático en Golfo de México</strong>, Laguna de Términos y
      ríos Candelaria y San Pedro;
      y <strong>coordinación transfronteriza</strong> con Guatemala para incendios forestales
      que cruzan la frontera en Candelaria.
</p> <h3>Municipios y Cobertura por Zona</h3> <p> <strong>Campeche (capital)</strong> — 1 estación central para los 295K habitantes: Centro
      Histórico UNESCO, 8 baluartes, malecón y zona hotelera.
<strong>Carmen</strong> — 1 estación especializada en industria petrolera: plataformas
      offshore, Laguna de Términos y puertos petroleros de la isla.
<strong>Calakmul</strong> — 1 estación en Xpujil: reserva biósfera UNESCO (723K ha),
      zona arqueológica y comunidades rurales remotas.
<strong>Escárcega</strong> — 1 estación en el cruce carretero estratégico hacia
      Quintana Roo, Tabasco y Yucatán; incluye estación del Tren Maya.
<strong>Champotón</strong> — 1 estación costera: puerto pesquero, río Champotón y
      carretera 180.
<strong>Calkiní</strong> — 1 estación norte: Camino Real histórico Campeche-Mérida,
      haciendas henequeneras y comunidades mayas.
<strong>Candelaria</strong> — 1 estación fronteriza: selva tropical, río Candelaria
      y frontera con Guatemala (Petén).
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/campeche.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/campeche.astro";
const $$url = "/directorio/campeche";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Campeche,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
