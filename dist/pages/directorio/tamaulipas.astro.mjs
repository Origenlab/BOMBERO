import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, e as estacionesTamaulipas, E as ESTADISTICAS_TAMAULIPAS } from '../../chunks/estaciones-tamaulipas_C4NUJspe.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Tamaulipas = createComponent(($$result, $$props, $$slots) => {
  const estado = "Tamaulipas";
  const sigla = "TAM";
  const slug = "tamaulipas";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-tamaulipas-01.avif", alt: "Bomberos de Tamaulipas en emergencia industrial" },
    { src: "/images/directorio/estacion-bomberos-tamaulipas-02.avif", alt: "Unidad HAZMAT en Puerto Industrial Altamira" },
    { src: "/images/directorio/estacion-bomberos-tamaulipas-03.avif", alt: "Coordinaci\xF3n binacional en puente fronterizo" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-tamaulipas-refineria.avif", alt: "Brigada en Refiner\xEDa PEMEX Madero" },
    { src: "/images/directorio/bomberos-tamaulipas-frontera.avif", alt: "Emergencia en puente internacional Nuevo Laredo" },
    { src: "/images/directorio/bomberos-tamaulipas-maquiladora.avif", alt: "Respuesta en planta maquiladora Reynosa" },
    { src: "/images/directorio/bomberos-tamaulipas-altamira.avif", alt: "HAZMAT qu\xEDmico en Puerto Altamira" }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "899 922 0500", label: "Bomberos Reynosa" },
    { number: "833 212 1515", label: "Bomberos Tampico" },
    { number: "867 712 8600", label: "Bomberos Nuevo Laredo" }
  ];
  const regiones = [
    { nombre: "Frontera Norte", desc: "Nuevo Laredo (40% exportaciones MX), Reynosa, Matamoros \u2014 500km frontera con Texas" },
    { nombre: "Zona Petrolera-Gas", desc: "Reynosa (Cuenca de Burgos), Ciudad Madero (Refiner\xEDa 190,000 bbl/d\xEDa)" },
    { nombre: "Puerto Industrial", desc: "Altamira (BASF, Celanese, Vitro), Tampico \u2014 petroqu\xEDmica de clase mundial" },
    { nombre: "Regi\xF3n Centro", desc: "Ciudad Victoria (capital), San Fernando \u2014 corredor carretero federal" },
    { nombre: "Zona Sur / Sierra", desc: "Ciudad Mante, Linares, Reserva El Cielo \u2014 bosque de niebla UNESCO" }
  ];
  const eppCards = [
    { title: "HAZMAT Gas Natural", desc: "Nivel A para Cuenca de Burgos: metano, condensado, H\u2082S", icon: "hazmat" },
    { title: "HAZMAT Qu\xEDmico", desc: "\xC1cido ac\xE9tico, amoniaco, metanol en Puerto Altamira", icon: "chemical" },
    { title: "Rescate Fluvial", desc: "Lanchas para R\xEDo Bravo/Grande y Presa Falc\xF3n", icon: "water" },
    { title: "Transporte Internacional", desc: "Protocolos UN/DOT para tractocamiones en puentes fronterizos", icon: "truck" }
  ];
  const municipios = getMunicipios();
  const keywords = [
    "bomberos tamaulipas",
    "estaciones bomberos reynosa",
    "bomberos tampico",
    "emergencias tamaulipas 911",
    "bomberos matamoros tamaulipas",
    "bomberos nuevo laredo",
    "cuerpo bomberos tamaulipas",
    "bomberos ciudad victoria tamaulipas",
    "proteccion civil tamaulipas",
    "bomberos frontera tamaulipas texas",
    "hazmat cuenca burgos",
    "puerto industrial altamira bomberos"
  ];
  const estadosVecinos = getEstadosVecinos("tamaulipas");
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/oficial-bomberos-camion-nocturno-lluvia-01.avif"
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesTamaulipas.length} estaciones de bomberos en Tamaulipas. Reynosa, Matamoros, Nuevo Laredo, Tampico, Ciudad Victoria. PEMEX Cuenca de Burgos, maquiladora automotriz, Puerto Industrial Altamira y ~500km frontera con Texas. Emergencias 911.`,
    numberOfItems: estacionesTamaulipas.length,
    itemListElement: estacionesTamaulipas.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.municipio,
          addressRegion: estado,
          addressCountry: "MX"
        },
        telephone: e.telefono,
        url: `https://bombero.mx/directorio/${slug}/${e.slug}`
      }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx/" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "title": `Bomberos en ${estado} | ${estacionesTamaulipas.length} Estaciones | Directorio Oficial BOMBERO.MX`, "description": `Directorio oficial de las ${estacionesTamaulipas.length} estaciones de bomberos en Tamaulipas. Reynosa, Matamoros, Nuevo Laredo, Tampico, Altamira. PEMEX Cuenca de Burgos, maquiladora automotriz, Puerto Industrial y el mayor puerto terrestre de las Am\xE9ricas. Emergencias 911.`, "keywords": keywords, "canonical": `https://bombero.mx/directorio/${slug}`, "estado": estado, "sigla": sigla, "slug": slug, "totalEstaciones": estacionesTamaulipas.length, "municipiosCount": ESTADISTICAS_TAMAULIPAS.municipios_cubiertos, "poblacion": "3.5M", "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "estaciones": estacionesTamaulipas, "stationImages": stationImages, "municipios": municipios, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "data-astro-cid-ihhemuyy": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2 class="hero-seo__title" data-astro-cid-ihhemuyy>Nuevo Laredo: 40% de Exportaciones a EE.UU.</h2> <p class="hero-seo__text" data-astro-cid-ihhemuyy>
Los <strong data-astro-cid-ihhemuyy>cinco puentes internacionales de Nuevo Laredo</strong> mueven más del
<strong data-astro-cid-ihhemuyy>40% de las exportaciones mexicanas</strong> hacia Estados Unidos. Miles de tractocamiones
      diarios transportan productos químicos y materiales peligrosos, requiriendo bomberos especializados
      en <strong data-astro-cid-ihhemuyy>HAZMAT de transporte terrestre internacional</strong> con protocolos UN/DOT.
</p> <h2 class="hero-seo__title" data-astro-cid-ihhemuyy>Maquiladora y Cuenca de Burgos</h2> <p class="hero-seo__text" data-astro-cid-ihhemuyy> <strong data-astro-cid-ihhemuyy>Reynosa</strong> alberga la Cuenca de Burgos (mayor reserva onshore de gas natural) y plantas
      de <strong data-astro-cid-ihhemuyy>Samsung, Emerson, TRW</strong>. <strong data-astro-cid-ihhemuyy>Matamoros</strong> —la "Detroit de México"—
      fabrica componentes para las principales marcas automotrices. Los bomberos dominan
<strong data-astro-cid-ihhemuyy>HAZMAT industrial de primer nivel mundial</strong>.
</p> <h2 class="hero-seo__title" data-astro-cid-ihhemuyy>Puerto Industrial Altamira: BASF, Celanese, Vitro</h2> <p class="hero-seo__text" data-astro-cid-ihhemuyy>
El <strong data-astro-cid-ihhemuyy>Puerto Industrial de Altamira</strong> es el principal del Golfo en carga química:
<strong data-astro-cid-ihhemuyy>BASF</strong> (mayor planta química privada de México), <strong data-astro-cid-ihhemuyy>Celanese</strong>,
<strong data-astro-cid-ihhemuyy>Vitro</strong> y PEMEX Petroquímica. Los bomberos poseen <strong data-astro-cid-ihhemuyy>certificación HAZMAT nivel A</strong>
en productos químicos de alta toxicidad.
</p> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-ihhemuyy>H. Cuerpo de Bomberos de Tamaulipas</strong>.
    Encuentra teléfonos de emergencia, direcciones y servicios en el estado con la
<strong data-astro-cid-ihhemuyy>frontera más activa de México con Texas</strong>: el mayor puerto terrestre de las Américas,
    la Cuenca de Burgos, y los corredores maquiladores de Reynosa y Matamoros.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-ihhemuyy> <h2 data-astro-cid-ihhemuyy>El H. Cuerpo de Bomberos de Tamaulipas</h2> <p data-astro-cid-ihhemuyy>
El <strong data-astro-cid-ihhemuyy>H. Cuerpo de Bomberos de Tamaulipas</strong> protege a más de <strong data-astro-cid-ihhemuyy>3.5 millones de tamaulipecos</strong>
en el estado con la línea fronteriza más estratégica de México. Tamaulipas comparte cerca de <strong data-astro-cid-ihhemuyy>500 km de frontera
        con el estado de Texas</strong>, albergando los cruces fronterizos de mayor actividad comercial del continente americano.
        La diversidad industrial —petróleo, maquiladora, petroquímica y agroindustria— forja bomberos de alta especialización
        técnica con protocolos únicos en el país.
</p> <h3 data-astro-cid-ihhemuyy>Nuevo Laredo: El Mayor Puerto Terrestre de las Américas</h3> <p data-astro-cid-ihhemuyy>
Los <strong data-astro-cid-ihhemuyy>cinco puentes internacionales de Nuevo Laredo</strong> mueven más del <strong data-astro-cid-ihhemuyy>40% de las
        exportaciones mexicanas a Estados Unidos</strong>, con miles de tractocamiones diarios transportando
        mercancías de todo tipo —incluyendo productos químicos y materiales peligrosos—. Los bomberos trabajan
        bajo protocolos <strong data-astro-cid-ihhemuyy>UN/DOT para HAZMAT de transporte terrestre internacional</strong> y mantienen
        acuerdos de cooperación binacional con el Cuerpo de Bomberos de Laredo, Texas.
</p> <h3 data-astro-cid-ihhemuyy>Cuenca de Burgos: Gas Natural del Noreste</h3> <p data-astro-cid-ihhemuyy>
La <strong data-astro-cid-ihhemuyy>Cuenca de Burgos</strong>, que cubre el norte de Tamaulipas, es la mayor reserva de
<strong data-astro-cid-ihhemuyy>gas natural no asociado de México</strong>, con cientos de pozos, compresoras y gasoductos
        operados por PEMEX. La concentración de infraestructura gasífera en Reynosa genera riesgos HAZMAT
        de máxima complejidad: fugas de gas metano, incendios en compresoras y emergencias con gas sulfhídrico (H₂S).
</p> <h3 data-astro-cid-ihhemuyy>Puerto Industrial Altamira: Química de Clase Mundial</h3> <p data-astro-cid-ihhemuyy>
El <strong data-astro-cid-ihhemuyy>Puerto Industrial de Altamira</strong> es el principal del Golfo de México en movimiento
        de carga química. <strong data-astro-cid-ihhemuyy>BASF</strong> (la mayor planta química privada de México), <strong data-astro-cid-ihhemuyy>Celanese</strong>
(ácido acético y acetato de vinilo), <strong data-astro-cid-ihhemuyy>Vitro</strong> (sosa cáustica), <strong data-astro-cid-ihhemuyy>Braskem</strong>
y PEMEX Petroquímica generan riesgos HAZMAT de primera magnitud: ácido acético, amoniaco, metanol
        y productos petroquímicos de alta toxicidad.
</p> <h3 data-astro-cid-ihhemuyy>Coordinación Binacional con Texas</h3> <p data-astro-cid-ihhemuyy>
Los cuerpos de bomberos de <strong data-astro-cid-ihhemuyy>Reynosa, Matamoros y Nuevo Laredo</strong> mantienen acuerdos formales
        de <strong data-astro-cid-ihhemuyy>cooperación binacional</strong> con sus pares texanos (McAllen/Hidalgo County, Brownsville/Cameron
        County y Laredo Fire Department). Esta coordinación —única entre estados fronterizos por su nivel de
        formalización— permite tiempos de respuesta óptimos en puentes y cruces internacionales.
</p> <h3 data-astro-cid-ihhemuyy>Matamoros: La Detroit de México</h3> <p data-astro-cid-ihhemuyy> <strong data-astro-cid-ihhemuyy>Matamoros</strong> alberga el mayor clúster automotriz de Tamaulipas con plantas de
<strong data-astro-cid-ihhemuyy>Delphi Technologies</strong> (la mayor en su tipo en México), <strong data-astro-cid-ihhemuyy>Pioneer, Continental,
        Remy</strong> y decenas de proveedores Tier-1. Los bomberos dominan la respuesta a incendios con
        materiales automotrices: pinturas, solventes, lubricantes y componentes electrónicos.
</p> <h3 data-astro-cid-ihhemuyy>Reserva El Cielo: Bosque de Niebla UNESCO</h3> <p data-astro-cid-ihhemuyy>
La <strong data-astro-cid-ihhemuyy>Reserva de la Biósfera El Cielo</strong>, la única zona de bosque de niebla del noreste
        de México, es patrimonio UNESCO. Los bomberos de Linares están especializados en <strong data-astro-cid-ihhemuyy>incendios
        forestales en la Sierra Madre Oriental</strong> y rescate de montaña, cubriendo los cañones,
        cascadas y senderos ecoturísticos que atraen miles de visitantes.
</p> <h3 data-astro-cid-ihhemuyy>Servicios de los Bomberos Tamaulipecos</h3> <p data-astro-cid-ihhemuyy>
Los bomberos de Tamaulipas están certificados para atender:
<strong data-astro-cid-ihhemuyy>incendios industriales HAZMAT</strong> (gas natural, productos petroquímicos, automotriz);
<strong data-astro-cid-ihhemuyy>rescate acuático</strong> en el Río Bravo/Grande, Presa Falcón y Laguna Madre;
<strong data-astro-cid-ihhemuyy>ARFF aeroportuario</strong> en Tampico y Reynosa;
<strong data-astro-cid-ihhemuyy>rescate en accidentes de tractocamiones</strong> en corredores fronterizos;
<strong data-astro-cid-ihhemuyy>incendios en refinería</strong> con espumas AFFF;
<strong data-astro-cid-ihhemuyy>rescate técnico de montaña</strong> en la Sierra Madre Oriental;
<strong data-astro-cid-ihhemuyy>coordinación binacional</strong> con bomberos de Texas; y
<strong data-astro-cid-ihhemuyy>protección civil ante huracanes</strong> en la costa del Golfo.
</p> <h3 data-astro-cid-ihhemuyy>¿Cómo contactar a los Bomberos en Tamaulipas?</h3> <p data-astro-cid-ihhemuyy>
En cualquier <strong data-astro-cid-ihhemuyy>emergencia en Tamaulipas</strong>, marca el <strong data-astro-cid-ihhemuyy>911</strong>.
        El C4 estatal despacha la unidad más cercana. Contactos directos:
<strong data-astro-cid-ihhemuyy>Reynosa 899 922 0500</strong>,
<strong data-astro-cid-ihhemuyy>Tampico 833 212 1515</strong>,
<strong data-astro-cid-ihhemuyy>Nuevo Laredo 867 712 8600</strong>,
<strong data-astro-cid-ihhemuyy>Matamoros 868 813 2222</strong>,
<strong data-astro-cid-ihhemuyy>Ciudad Victoria 834 312 1330</strong>.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/tamaulipas.astro";
const $$url = "/directorio/tamaulipas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tamaulipas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
