import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { b as getMunicipios, e as estacionesJalisco } from '../../chunks/estaciones-jalisco_kyNMw6MV.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C3xQZUfp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Jalisco = createComponent(($$result, $$props, $$slots) => {
  const municipios = getMunicipios();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Jalisco", url: "/directorio/jalisco" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Jalisco, M\xE9xico",
    "description": "Directorio completo de las estaciones de bomberos en Jalisco. 38 estaciones protegiendo la Zona Metropolitana de Guadalajara, Puerto Vallarta, la Ruta del Tequila y 8.3 millones de habitantes. Emergencias 911.",
    "numberOfItems": estacionesJalisco.length,
    "itemListElement": estacionesJalisco.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.ciudad,
          "addressRegion": "Jalisco",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/jalisco/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-guadalajara-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/bomberos-trabajo-equipo-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/entrenamiento-bomberos-fuego-01.avif",
    "/images/directorio/estacion-bomberos-mexico-01.avif",
    "/images/directorio/camion-bomberos-torre-01.avif",
    "/images/directorio/simulacro-bomberos-profesional-01.avif",
    "/images/directorio/autobomba-bomberos-equipada-01.avif",
    "/images/directorio/estacion-bomberos-industrial-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/estacion-bomberos-norte-mexico-01.avif",
    "/images/directorio/rescate-vehicular-bomberos-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif",
    "/images/directorio/traje-hazmat-nivel-a-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Jalisco", "sigla": "JAL", "slug": "jalisco", "description": "Directorio completo de las estaciones de bomberos en Jalisco. 38 estaciones protegiendo la ZMG, Puerto Vallarta, Ruta del Tequila y m\xE1s de 8.3 millones de habitantes. Emergencias 911.", "keywords": ["bomberos jalisco", "estaciones bomberos guadalajara", "bomberos puerto vallarta", "emergencias jalisco 911", "bomberos zapopan", "bomberos tonala", "rescate acu\xE1tico vallarta", "cuerpo bomberos jalisco", "bomberos tequila", "bomberos lago chapala"], "canonical": "https://bombero.mx/directorio/jalisco", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estacionesJalisco.length, "totalMunicipios": municipios.length, "habitantes": "8.3M+", "heroDesc": "Directorio completo del <strong>H. Cuerpo de Bomberos de Jalisco</strong>. Encuentra tel\xE9fonos de emergencia, direcciones y servicios de todas las estaciones en la segunda metr\xF3poli de M\xE9xico, Puerto Vallarta y la Ruta del Tequila UNESCO.", "heroImage": "/images/directorio/estacion-bomberos-guadalajara-01.avif", "heroImageAlt": "Estaci\xF3n Central de Bomberos Guadalajara, Jalisco", "heroCaption": "H. Cuerpo de Bomberos \xB7 Jalisco", "heroThumbs": [
    { src: "/images/directorio/camion-bomberos-moderno-01.avif", alt: "Cami\xF3n de bomberos Guadalajara ZMG", label: "Flota ZMG" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico bomberos Puerto Vallarta", label: "Rescate Acu\xE1tico" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos Jalisco en acci\xF3n", label: "Respuesta 24/7" }
  ], "galleryImages": [
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento de bomberos en Jalisco", label: "Capacitaci\xF3n NFPA" },
    { src: "/images/directorio/camion-escalera-bomberos-01.avif", alt: "Cami\xF3n escalera bomberos Guadalajara", label: "Rescate en Altura" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Rescate urbano bomberos Jalisco ZMG", label: "Rescate Urbano ZMG" },
    { src: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif", alt: "Equipo SCBA bomberos Jalisco", label: "SCBA Certificado" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "(33) 3619-1515", label: "Bomberos Guadalajara" },
    { number: "(33) 3818-2267", label: "Bomberos Zapopan" },
    { number: "(322) 222-0109", label: "Bomberos Vallarta" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana GDL", desc: "Guadalajara, Zapopan, Tlaquepaque, Tonal\xE1, Tlajomulco" },
    { nombre: "Costa Puerto Vallarta", desc: "Puerto Vallarta, Marina, Nuevo Vallarta" },
    { nombre: "Ruta del Tequila", desc: "Tequila, Amatit\xE1n (Patrimonio UNESCO)" },
    { nombre: "Lago de Chapala", desc: "Chapala, Ajijic, Jocotepec" }
  ], "estadosVecinos": [
    { nombre: "Nayarit", slug: "nayarit" },
    { nombre: "Zacatecas", slug: "zacatecas" },
    { nombre: "Aguascalientes", slug: "aguascalientes" },
    { nombre: "Guanajuato", slug: "guanajuato" },
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Colima", slug: "colima" }
  ], "estaciones": estacionesJalisco, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif",
      imageAlt: "Traje Estructural NFPA 1971 para bomberos Guadalajara",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: "Equipo certificado para los bomberos de la <strong>Zona Metropolitana de Guadalajara</strong>, segunda metr\xF3poli de M\xE9xico. Dise\xF1ado para incendios estructurales en zonas industriales, centros comerciales y edificios de gran altura del corredor tecnol\xF3gico.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco NFPA 1971 para bomberos Puerto Vallarta",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Protecci\xF3n certificada para emergencias en <strong>Puerto Vallarta</strong> y la zona hotelera. Compatible con equipos de comunicaci\xF3n para coordinaci\xF3n en emergencias tur\xEDsticas y rescate acu\xE1tico en la Bah\xEDa de Banderas.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/guantes-bombero-resistentes-01.avif",
      imageAlt: "Guantes NFPA 1971 para bomberos Tequila",
      badge: "NFPA 1971",
      title: "Guantes Estructurales NFPA 1971",
      text: "Resistencia t\xE9rmica certificada para emergencias en <strong>destiler\xEDas de la Ruta del Tequila</strong>, Patrimonio UNESCO. Prensi\xF3n segura para operaciones con materiales peligrosos y alcohol en zonas de producci\xF3n tequilera.",
      href: "/productos/guantes-para-bomberos",
      linkLabel: "Ver Guantes para Bombero"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas NFPA 1971 para bomberos Lago de Chapala",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Calzado certificado NFPA 1971 para los bomberos del <strong>Lago de Chapala</strong> y zonas ribere\xF1as. Resistentes al agua para operaciones de rescate acu\xE1tico lacustre y atenci\xF3n en comunidades de expatriados.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Jalisco", "ctaDesc": "Cotiza equipo certificado NFPA directamente para tu estaci\xF3n. Stock inmediato para licitaciones en Guadalajara, Zapopan, Puerto Vallarta y los 125 municipios del estado.", "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Jalisco" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El H. Cuerpo de Bomberos de Jalisco</h2> <p>
El <strong>H. Cuerpo de Bomberos de Jalisco</strong> es la institución encargada de
      proteger la vida, el medio ambiente y el patrimonio de los más de <strong>8.3 millones de jaliscienses</strong>.
      Con presencia estratégica en la Zona Metropolitana de Guadalajara, Puerto Vallarta, la Ruta del Tequila
      y todo el territorio estatal, los bomberos atienden emergencias las <strong>24 horas del día, los 365 días del año</strong>.
</p> <h3>¿Cómo contactar a los bomberos en Jalisco?</h3> <p>
En caso de <strong>emergencia en Jalisco</strong>, marca el <strong>911</strong> desde
      cualquier teléfono. Este número conecta con el <strong>C5 de Jalisco</strong> que coordina
      la respuesta de bomberos, policía y servicios médicos. En Guadalajara puedes llamar directamente
      al <strong>(33) 3619-1515</strong>, en Zapopan al <strong>(33) 3818-2267</strong> y en
      Puerto Vallarta al <strong>(322) 222-0109</strong>.
</p> <h3>Zona Metropolitana de Guadalajara (ZMG)</h3> <p>
La <strong>Zona Metropolitana de Guadalajara</strong> es la segunda más grande de México con más de
<strong>5.2 millones de habitantes</strong>. El Cuerpo de Bomberos de Guadalajara, fundado en 1873,
      es uno de los más antiguos y profesionales del país. Las estaciones de la ZMG cubren los municipios de
<strong>Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco</strong>, atendiendo emergencias en
      zonas residenciales, comerciales, industriales y el corredor tecnológico "Silicon Valley de México".
</p> <h3>Puerto Vallarta y Rescate Acuático</h3> <p> <strong>Puerto Vallarta</strong> es el principal destino turístico de playa del Pacífico mexicano,
      recibiendo más de <strong>7 millones de visitantes anuales</strong>. Los bomberos de Vallarta están
      especializados en <strong>rescate acuático oceánico</strong>, emergencias hoteleras y protocolos de
      huracanes. La estación cuenta con equipo bilingüe para atender a turistas internacionales.
</p> <h3>Ruta del Tequila - Patrimonio UNESCO</h3> <p>
El <strong>Paisaje Agavero</strong> fue declarado Patrimonio de la Humanidad por la UNESCO en 2006.
      Los bomberos de <strong>Tequila y Amatitán</strong> están especializados en incendios en destilerías
      y emergencias con materiales peligrosos relacionados con la producción de tequila. La concentración
      de alcohol y las instalaciones históricas requieren protocolos especiales de extinción.
</p> <h3>Servicios de los Bomberos Jaliscienses</h3> <p>
Los bomberos de Jalisco están capacitados para atender:
<strong>incendios estructurales, industriales y forestales</strong>;
<strong>rescate vehicular en autopistas</strong>;
<strong>rescate acuático en Puerto Vallarta y Lago de Chapala</strong>;
<strong>materiales peligrosos (HAZMAT)</strong>;
<strong>emergencias aeroportuarias ARFF</strong>;
<strong>incendios en destilerías de tequila</strong>;
<strong>protección del Bosque La Primavera</strong>; y atención especializada
      en eventos masivos como la Feria Internacional del Libro y el Festival de Cine de Guadalajara.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/jalisco.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/jalisco.astro";
const $$url = "/directorio/jalisco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Jalisco,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
