import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesSanLuisPotosi, d as getMunicipios } from '../../chunks/estaciones-san-luis-potosi_CzG6xsO0.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$SanLuisPotosi = createComponent(($$result, $$props, $$slots) => {
  const estado = "San Luis Potos\xED";
  const sigla = "SLP";
  const slug = "san-luis-potosi";
  const heroThumbs = [
    {
      src: "/images/directorio/slp-centro-historico.avif",
      alt: "Centro Hist\xF3rico de San Luis Potos\xED - Candidato UNESCO",
      label: "Centro Hist\xF3rico"
    },
    {
      src: "/images/directorio/slp-bmw-plant.avif",
      alt: "Planta BMW Group San Luis Potos\xED",
      label: "BMW Plant"
    },
    {
      src: "/images/directorio/slp-huasteca-tamul.avif",
      alt: "Cascada de Tamul Huasteca Potosina",
      label: "Huasteca Potosina"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/slp-bomberos-hazmat.avif",
      alt: "Equipo HAZMAT de Bomberos de SLP en zona industrial automotriz",
      label: "HAZMAT Industrial"
    },
    {
      src: "/images/directorio/slp-sotano-golondrinas.avif",
      alt: "S\xF3tano de las Golondrinas 512m de profundidad Aquism\xF3n",
      label: "S\xF3tano Golondrinas"
    },
    {
      src: "/images/directorio/slp-real-catorce.avif",
      alt: "Real de Catorce Pueblo M\xE1gico desierto",
      label: "Real de Catorce"
    },
    {
      src: "/images/directorio/slp-gm-complejo.avif",
      alt: "General Motors Complejo San Luis Potos\xED",
      label: "GM Complejo"
    },
    {
      src: "/images/directorio/slp-xilitla-pozas.avif",
      alt: "Jard\xEDn Surrealista Edward James Las Pozas Xilitla",
      label: "Xilitla PM"
    },
    {
      src: "/images/directorio/slp-parque-tangamanga.avif",
      alt: "Parque Tangamanga uno de los m\xE1s grandes de Latinoam\xE9rica",
      label: "Parque Tangamanga"
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "(444) 812-2583", label: "Bomberos Central SLP" },
    { number: "(444) 815-7575", label: "HAZMAT Industrial" },
    { number: "(481) 382-1035", label: "Bomberos Ciudad Valles" }
  ];
  const regiones = [
    {
      nombre: "Zona Metropolitana SLP",
      desc: "Capital del estado, Centro Hist\xF3rico (candidato UNESCO), Parque Tangamanga, zona comercial"
    },
    {
      nombre: "Zona Industrial Automotriz",
      desc: "BMW Group Plant, GM Complejo, 12 parques industriales, 300+ proveedores tier 1-3"
    },
    {
      nombre: "Huasteca Potosina",
      desc: "Tamul, S\xF3tano de las Golondrinas, Xilitla, Aquism\xF3n - 2M+ turistas aventura anuales"
    },
    {
      nombre: "Zona Altiplano",
      desc: "Matehuala, Real de Catorce (Pueblo M\xE1gico), desierto Wirikuta, zona minera hist\xF3rica"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/equipo-hazmat-industrial.avif",
      imageAlt: "Equipo HAZMAT para industria automotriz BMW GM",
      badge: "HAZMAT",
      title: "HAZMAT Automotriz",
      text: "Equipamiento Nivel A para emergencias con pinturas, solventes y bater\xEDas de litio en plantas BMW y GM.",
      href: "/productos/hazmat",
      linkLabel: "Ver equipos HAZMAT"
    },
    {
      image: "/images/productos/equipo-espeleologia.avif",
      imageAlt: "Equipo de rescate espeleol\xF3gico para S\xF3tano de las Golondrinas",
      badge: "Espeleolog\xEDa",
      title: "Rescate en S\xF3tanos",
      text: "Cuerdas 600m, sistemas de anclaje y camillas t\xE9cnicas para el S\xF3tano de las Golondrinas (512m).",
      href: "/productos/rescate-montana",
      linkLabel: "Ver equipo espeleolog\xEDa"
    },
    {
      image: "/images/productos/equipo-swift-water.avif",
      imageAlt: "Equipo swift water rescue para r\xEDos de la Huasteca",
      badge: "Swift Water",
      title: "Rescate Acu\xE1tico R\xEDos",
      text: "PFDs clase V, lanchas y throw bags para rescate en r\xEDos Tampa\xF3n y Santa Mar\xEDa.",
      href: "/productos/rescate-acuatico",
      linkLabel: "Ver equipo acu\xE1tico"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesSanLuisPotosi.length} estaciones de bomberos en San Luis Potos\xED. HAZMAT especializado para BMW y GM. Rescate espeleol\xF3gico Huasteca Potosina. Cobertura 4 Pueblos M\xE1gicos.`,
    numberOfItems: estacionesSanLuisPotosi.length,
    itemListElement: estacionesSanLuisPotosi.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.zona,
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
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://bombero.mx" },
      { "@type": "ListItem", position: 2, name: "Directorio", item: "https://bombero.mx/directorio" },
      { "@type": "ListItem", position: 3, name: estado, item: `https://bombero.mx/directorio/${slug}` }
    ]
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/bombero-chaqueton-vestidor-oscuro-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("san-luis-potosi");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesSanLuisPotosi, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesSanLuisPotosi.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesSanLuisPotosi.length} estaciones de bomberos en San Luis Potos\xED 2024. HAZMAT especializado para BMW Group Plant y GM Complejo. Rescate espeleol\xF3gico S\xF3tano de las Golondrinas (512m). Cobertura Huasteca Potosina y 4 Pueblos M\xE1gicos. Tel: (444) 812-2583. Emergencias 911.`, "data-astro-cid-f36dpomv": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-f36dpomv> <h2 data-astro-cid-f36dpomv>Bomberos de San Luis Potosí: El Corazón de México</h2> <p data-astro-cid-f36dpomv>
El <strong data-astro-cid-f36dpomv>Heroico Cuerpo de Bomberos de San Luis Potosí</strong> protege a más de <strong data-astro-cid-f36dpomv>2.8 millones
        de habitantes</strong> en uno de los estados más diversos de México. Con <strong data-astro-cid-f36dpomv>16 estaciones
        estratégicamente distribuidas</strong>, los bomberos potosinos atienden desde <strong data-astro-cid-f36dpomv>emergencias HAZMAT
        en el clúster automotriz más importante del Bajío</strong> (BMW, GM, 300+ proveedores) hasta
<strong data-astro-cid-f36dpomv>rescates espeleológicos en el Sótano de las Golondrinas</strong>, el sótano natural más profundo
        de México con <strong data-astro-cid-f36dpomv>512 metros de caída libre</strong>.
</p> <h3 data-astro-cid-f36dpomv>Clúster Automotriz: BMW y General Motors</h3> <p data-astro-cid-f36dpomv>
San Luis Potosí es el <strong data-astro-cid-f36dpomv>cuarto estado automotriz de México</strong>, con <strong data-astro-cid-f36dpomv>45,000 empleos
        directos</strong> y <strong data-astro-cid-f36dpomv>$8,000 millones de dólares en exportaciones anuales</strong>. La
<strong data-astro-cid-f36dpomv>BMW Group Plant San Luis Potosí</strong> (Villa de Reyes) produce la <strong data-astro-cid-f36dpomv>Serie 3 y
        Serie 2 Coupé</strong> con inversión de <strong data-astro-cid-f36dpomv>$1,000 millones USD</strong>, mientras que el
<strong data-astro-cid-f36dpomv>Complejo General Motors</strong> opera la planta de motores y transmisiones más grande de
        Latinoamérica. Las <strong data-astro-cid-f36dpomv>3 estaciones HAZMAT</strong> del corredor industrial están certificadas
        para emergencias con <strong data-astro-cid-f36dpomv>pinturas automotrices, solventes, baterías de litio, aceites especiales
        y gases industriales</strong>, con personal bilingüe 24/7 para coordinación con ejecutivos internacionales.
</p> <h3 data-astro-cid-f36dpomv>Huasteca Potosina: Paraíso del Turismo de Aventura</h3> <p data-astro-cid-f36dpomv>
La <strong data-astro-cid-f36dpomv>Huasteca Potosina</strong> recibe más de <strong data-astro-cid-f36dpomv>2 millones de visitantes anuales</strong>
para actividades de aventura extrema. La <strong data-astro-cid-f36dpomv>Cascada de Tamul</strong> (105 metros de altura) es
        la más alta del estado, accesible únicamente por el <strong data-astro-cid-f36dpomv>río Tampaón</strong> en kayak o lancha.
        Los bomberos de <strong data-astro-cid-f36dpomv>Ciudad Valles</strong> y <strong data-astro-cid-f36dpomv>Aquismón</strong> mantienen equipos de
<strong data-astro-cid-f36dpomv>swift water rescue</strong> certificados para rescate en ríos con corrientes clase II-IV,
        incluyendo temporada de lluvias (junio-octubre) cuando el riesgo de inundaciones es crítico.
</p> <h3 data-astro-cid-f36dpomv>Sótano de las Golondrinas: Rescate Espeleológico Extremo</h3> <p data-astro-cid-f36dpomv>
El <strong data-astro-cid-f36dpomv>Sótano de las Golondrinas</strong> en Aquismón es una de las <strong data-astro-cid-f36dpomv>cavidades verticales
        más profundas del mundo</strong> con <strong data-astro-cid-f36dpomv>512 metros de caída libre</strong>. Atrae a más de
<strong data-astro-cid-f36dpomv>50,000 visitantes anuales</strong> para observación de vencejos y base jumping extremo.
        La estación de bomberos de Aquismón mantiene <strong data-astro-cid-f36dpomv>equipo certificado de espeleología</strong>
incluyendo <strong data-astro-cid-f36dpomv>cuerdas estáticas de 600m</strong>, sistemas de anclaje para sótanos, camillas
        técnicas verticales (Sked/Paraguard) y coordinación con grupos voluntarios de espeleología para
        rescates que pueden durar <strong data-astro-cid-f36dpomv>12-24 horas</strong>.
</p> <h3 data-astro-cid-f36dpomv>Cuatro Pueblos Mágicos con Cobertura Especializada</h3> <p data-astro-cid-f36dpomv>
San Luis Potosí cuenta con <strong data-astro-cid-f36dpomv>4 Pueblos Mágicos</strong> con necesidades de emergencia únicas:
<strong data-astro-cid-f36dpomv>Real de Catorce</strong> (pueblo fantasma minero a 2,750 msnm con minas abandonadas y clima
        extremo del desierto), <strong data-astro-cid-f36dpomv>Xilitla</strong> (Jardín Surrealista Edward James en selva húmeda),
<strong data-astro-cid-f36dpomv>Aquismón</strong> (puerta de entrada a sótanos y cascadas extremas), y
<strong data-astro-cid-f36dpomv>Santa María del Río</strong> (capital del rebozo con arquitectura histórica). Cada estación
        tiene protocolos adaptados a sus riesgos específicos.
</p> <h3 data-astro-cid-f36dpomv>Real de Catorce: Rescate en el Desierto</h3> <p data-astro-cid-f36dpomv> <strong data-astro-cid-f36dpomv>Real de Catorce</strong> es uno de los destinos de turismo místico más importantes de México,
        accesible únicamente a través del <strong data-astro-cid-f36dpomv>Túnel Ogarrio</strong> (2.3 km). Recibe <strong data-astro-cid-f36dpomv>350,000+
        visitantes anuales</strong> incluyendo peregrinos al desierto sagrado de <strong data-astro-cid-f36dpomv>Wirikuta</strong>
(territorio Wixárika/Huichol). Los bomberos de Matehuala mantienen capacidad de
<strong data-astro-cid-f36dpomv>búsqueda y rescate en desierto (SAR)</strong>, atención de emergencias por altitud,
        rescate en minas abandonadas del pueblo fantasma y coordinación con la comunidad Wixárika para
        emergencias en zona sagrada.
</p> <h3 data-astro-cid-f36dpomv>Zona Metropolitana: Centro Histórico Candidato UNESCO</h3> <p data-astro-cid-f36dpomv>
El <strong data-astro-cid-f36dpomv>Centro Histórico de San Luis Potosí</strong> está en la <strong data-astro-cid-f36dpomv>Lista Tentativa de
        UNESCO</strong> con su arquitectura barroca y neoclásica del siglo XVII-XIX. La
<strong data-astro-cid-f36dpomv>Estación Central</strong> cuenta con <strong data-astro-cid-f36dpomv>escalera telescópica de 42 metros</strong>
para emergencias en edificios históricos, protocolos de protección patrimonial y cobertura del
<strong data-astro-cid-f36dpomv>Parque Tangamanga</strong> (450 hectáreas, uno de los más grandes de Latinoamérica) para
        eventos masivos. También cubre la zona universitaria con <strong data-astro-cid-f36dpomv>UASLP, IPICYT y Tec de Monterrey</strong>.
</p> <h3 data-astro-cid-f36dpomv>Carretera 57D: Corredor Comercial Nacional</h3> <p data-astro-cid-f36dpomv>
La <strong data-astro-cid-f36dpomv>Autopista 57D México-Piedras Negras</strong> atraviesa San Luis Potosí transportando
<strong data-astro-cid-f36dpomv>25,000+ vehículos diarios</strong> incluyendo tractocamiones con materiales peligrosos.
        Las estaciones del corredor mantienen <strong data-astro-cid-f36dpomv>equipos de rescate vehicular pesado</strong>,
        capacidad <strong data-astro-cid-f36dpomv>HAZMAT para derrames en tránsito</strong> y coordinación con
<strong data-astro-cid-f36dpomv>Capufe y la Guardia Nacional</strong> para accidentes carreteros de alto impacto.
</p> <h3 data-astro-cid-f36dpomv>Clima Extremo: Del Desierto a la Selva</h3> <p data-astro-cid-f36dpomv>
San Luis Potosí presenta <strong data-astro-cid-f36dpomv>cuatro climas distintos</strong>: desierto extremo en el Altiplano
        (Real de Catorce con temperaturas de <strong data-astro-cid-f36dpomv>-5°C a 40°C</strong>), selva húmeda en la Huasteca
        (precipitaciones de <strong data-astro-cid-f36dpomv>2,000+ mm anuales</strong>), clima templado en la capital, y
        semiárido en la Zona Media. Los bomberos están capacitados para emergencias en todos estos
        escenarios, incluyendo <strong data-astro-cid-f36dpomv>incendios de matorrales, inundaciones súbitas y rescates en
        condiciones de hipotermia o golpe de calor</strong>.
</p> <h3 data-astro-cid-f36dpomv>Servicios Especializados de los Bomberos Potosinos</h3> <p data-astro-cid-f36dpomv>
Los bomberos de San Luis Potosí ofrecen: <strong data-astro-cid-f36dpomv>combate de incendios estructurales, industriales
        y forestales</strong>; <strong data-astro-cid-f36dpomv>respuesta HAZMAT Nivel A para industria automotriz</strong>;
<strong data-astro-cid-f36dpomv>rescate espeleológico certificado</strong>; <strong data-astro-cid-f36dpomv>swift water rescue en ríos de la
        Huasteca</strong>; <strong data-astro-cid-f36dpomv>búsqueda y rescate en desierto (SAR)</strong>; <strong data-astro-cid-f36dpomv>rescate en
        minas abandonadas</strong>; <strong data-astro-cid-f36dpomv>emergencias en edificios históricos</strong>;
<strong data-astro-cid-f36dpomv>atención de eventos masivos</strong>; y <strong data-astro-cid-f36dpomv>coordinación bilingüe 24/7</strong>
para industria internacional. El tiempo de respuesta varía de <strong data-astro-cid-f36dpomv>6 minutos</strong> en zona
        metropolitana a <strong data-astro-cid-f36dpomv>60+ minutos</strong> en zonas remotas de la Huasteca y el Altiplano.
</p> </section> ` })}` })} `;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/san-luis-potosi.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/san-luis-potosi.astro";
const $$url = "/directorio/san-luis-potosi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SanLuisPotosi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
