import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesTlaxcala, b as getMunicipios } from '../../chunks/estaciones-tlaxcala_DCTVtxOC.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Tlaxcala = createComponent(($$result, $$props, $$slots) => {
  const estado = "Tlaxcala";
  const sigla = "TLA";
  const slug = "tlaxcala";
  const heroThumbs = [
    { src: "/images/directorio/estacion-bomberos-tlaxcala-01.avif", alt: "Estaci\xF3n Central de Bomberos Tlaxcala" },
    { src: "/images/directorio/estacion-bomberos-tlaxcala-02.avif", alt: "Bomberos planta Audi San Jos\xE9 Chiapa" },
    { src: "/images/directorio/estacion-bomberos-tlaxcala-03.avif", alt: "Rescate Volc\xE1n La Malinche Tlaxcala" }
  ];
  const galleryImages = [
    { src: "/images/directorio/bomberos-tlaxcala-audi.avif", alt: "HAZMAT automotriz planta Audi M\xE9xico" },
    { src: "/images/directorio/bomberos-tlaxcala-malinche.avif", alt: "Rescate en alta monta\xF1a Volc\xE1n La Malinche" },
    { src: "/images/directorio/bomberos-tlaxcala-textil.avif", alt: "Bomberos industria textil Chiautempan" },
    { src: "/images/directorio/bomberos-tlaxcala-apizaco.avif", alt: "HAZMAT ferroviario Apizaco Ferromex" }
  ];
  const emergencyNumbers = [
    { name: "Emergencias", number: "911" },
    { name: "Bomberos Tlaxcala Capital", number: "246 462 0100" },
    { name: "Bomberos Apizaco", number: "241 418 0300" },
    { name: "Bomberos Huamantla", number: "247 472 0500" },
    { name: "Bomberos Calpulalpan", number: "591 922 0300" },
    { name: "Bomberos Chiautempan", number: "241 416 0200" }
  ];
  const regiones = [
    { nombre: "Corredor Audi", desc: "San Jos\xE9 Chiapa (\xDANICA planta Audi Am\xE9ricas), proveedores Tier-1/Tier-2, Tlaltelulco" },
    { nombre: "Capital Industrial", desc: "Apizaco (nodo ferroviario Ferromex), Tetla (farmac\xE9utico), corredor log\xEDstico" },
    { nombre: "Capital Textilera", desc: "Santa Ana Chiautempan (mayor concentraci\xF3n telares de M\xE9xico), Papalotla" },
    { nombre: "Regi\xF3n Capital", desc: "Tlaxcala de Xicoht\xE9ncatl (capital), Centro Hist\xF3rico colonial, Ixtacuixtla" },
    { nombre: "Oriente / La Malinche", desc: "Huamantla (volc\xE1n 4,461 msnm), San Pablo del Monte, Tetlatlahuca \u2014 rescate alta monta\xF1a" },
    { nombre: "Noroeste / Autopista 150D", desc: "Calpulalpan (Grupo Modelo cervecer\xEDa), corredor M\xE9xico-Puebla-Veracruz" }
  ];
  const eppCards = [
    { icon: "factory", title: "HAZMAT Automotriz", desc: "Audi M\xE9xico: bater\xEDas HV, VOCs pintura, isocianatos" },
    { icon: "flame", title: "Incendios Textiles", desc: "Fibras sint\xE9ticas poli\xE9ster/nylon, colorantes azo t\xF3xicos" },
    { icon: "mountain", title: "Rescate Alta Monta\xF1a", desc: "Volc\xE1n La Malinche 4,461 msnm \u2014 nieve, hielo, hipotermia" },
    { icon: "rail", title: "HAZMAT Ferroviario", desc: "Nodo Ferromex Apizaco \u2014 carga peligrosa clasificada UN" }
  ];
  const stationImages = [
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-escalera-telescopica-01.avif",
    "/images/directorio/estacion-bomberos-mexico-01.avif",
    "/images/directorio/unidad-rescate-bomberos-01.avif",
    "/images/directorio/bomberos-entrenamiento-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("tlaxcala");
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de las ${estacionesTlaxcala.length} estaciones de bomberos en Tlaxcala. \xDAnica planta Audi en las Am\xE9ricas (San Jos\xE9 Chiapa), capital textilera de M\xE9xico (Chiautempan), Volc\xE1n La Malinche (4,461 msnm), Grupo Modelo Calpulalpan. El estado m\xE1s peque\xF1o con la mayor densidad industrial. Emergencias 911.`,
    numberOfItems: estacionesTlaxcala.length,
    itemListElement: estacionesTlaxcala.map((e, i) => ({
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
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesTlaxcala, "municipios": getMunicipios(), "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en Tlaxcala | ${estacionesTlaxcala.length} Estaciones | Planta Audi | La Malinche | BOMBERO.MX`, "description": "Directorio oficial de las 15 estaciones de bomberos en Tlaxcala. \xDAnica planta Audi en las Am\xE9ricas (San Jos\xE9 Chiapa, 12,000 empleados), capital textilera de M\xE9xico (Chiautempan), Volc\xE1n La Malinche (4,461 msnm), Grupo Modelo Calpulalpan. Estado m\xE1s peque\xF1o de M\xE9xico con mayor densidad industrial por km\xB2. Emergencias 911.", "data-astro-cid-vqhdmzcb": true }, { "hero-seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "hero-seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="hero-seo__block" data-astro-cid-vqhdmzcb> <h2 class="hero-seo__title" data-astro-cid-vqhdmzcb>Audi México: La Única Planta en las Américas</h2> <p class="hero-seo__text" data-astro-cid-vqhdmzcb>
La <strong data-astro-cid-vqhdmzcb>Planta Audi México en San José Chiapa</strong> (2016, $1,300 MDD de inversión)
        es la <strong data-astro-cid-vqhdmzcb>única fábrica de automóviles Audi en todo el continente americano</strong>.
        Produce los modelos <strong data-astro-cid-vqhdmzcb>Audi Q5</strong> y <strong data-astro-cid-vqhdmzcb>A3 Sedan</strong> para distribución
        global —más de <strong data-astro-cid-vqhdmzcb>150,000 unidades/año</strong>— y emplea a <strong data-astro-cid-vqhdmzcb>12,000 personas</strong>.
        Los bomberos de San José Chiapa dominan HAZMAT automotriz premium: disolventes VOC del taller
        de pintura, baterías de alta tensión (400V) para híbridos plug-in y celdas de soldadura robotizada.
</p> </div> <div class="hero-seo__block" data-astro-cid-vqhdmzcb> <h2 class="hero-seo__title" data-astro-cid-vqhdmzcb>Capital Textilera + Volcán La Malinche</h2> <p class="hero-seo__text" data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Santa Ana Chiautempan</strong> concentra el mayor número de telares industriales de México
        —más de 500 empresas textileras— con riesgos específicos de incendios en fibras sintéticas
        (poliéster, nylon) y colorantes azo tóxicos. El <strong data-astro-cid-vqhdmzcb>Volcán La Malinche</strong> (4,461 msnm)
        exige equipos de rescate en alta montaña: hipotermia, nieve, hielo y emergencias por altitud.
        Con apenas <strong data-astro-cid-vqhdmzcb>3,991 km²</strong>, Tlaxcala tiene la <strong data-astro-cid-vqhdmzcb>mayor concentración de parques
        industriales por km² de México</strong>.
</p> </div> ` })}`, "intro": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "intro" }, { "default": ($$result3) => renderTemplate`
Directorio completo del <strong data-astro-cid-vqhdmzcb>H. Cuerpo de Bomberos de Tlaxcala</strong>.
    El <strong data-astro-cid-vqhdmzcb>estado más pequeño de México</strong> (3,991 km²) y paradójicamente
    el de <strong data-astro-cid-vqhdmzcb>mayor densidad industrial por km²</strong>: sede de la
<strong data-astro-cid-vqhdmzcb>única planta Audi en todo el continente americano</strong>,
    capital textilera nacional, el Volcán La Malinche a 4,461 msnm
    y la cervecería más grande del centro del país.
` })}`, "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` <section class="seo-content" data-astro-cid-vqhdmzcb> <h2 data-astro-cid-vqhdmzcb>El H. Cuerpo de Bomberos de Tlaxcala</h2> <p data-astro-cid-vqhdmzcb>
El <strong data-astro-cid-vqhdmzcb>H. Cuerpo de Bomberos de Tlaxcala</strong> protege a más de <strong data-astro-cid-vqhdmzcb>1.3 millones
        de tlaxcaltecas</strong> en el estado más pequeño de México —y paradójicamente uno de los más
        importantes industrialmente—. Tlaxcala es el único estado de la República que nunca fue conquistado
        ni sometido por la Corona española y que, aliado con Hernán Cortés, fue decisivo en la historia de
        México. Ese espíritu de excelencia se refleja hoy en un cuerpo de bomberos altamente especializado
        que enfrenta riesgos industriales de primer nivel mundial.
</p> <h3 data-astro-cid-vqhdmzcb>¿Cómo contactar a los bomberos en Tlaxcala?</h3> <p data-astro-cid-vqhdmzcb>
En cualquier <strong data-astro-cid-vqhdmzcb>emergencia en Tlaxcala</strong>, marca el <strong data-astro-cid-vqhdmzcb>911</strong>. Para contacto
        directo: <strong data-astro-cid-vqhdmzcb>Tlaxcala capital 246 462 0100</strong>, <strong data-astro-cid-vqhdmzcb>Apizaco 241 418 0300</strong>,
<strong data-astro-cid-vqhdmzcb>Huamantla 247 472 0500</strong>, <strong data-astro-cid-vqhdmzcb>Calpulalpan 591 922 0300</strong>,
<strong data-astro-cid-vqhdmzcb>Chiautempan 241 416 0200</strong>.
</p> <h3 data-astro-cid-vqhdmzcb>Planta Audi México — El Orgullo Industrial de Tlaxcala</h3> <p data-astro-cid-vqhdmzcb>
La <strong data-astro-cid-vqhdmzcb>Planta Audi México en San José Chiapa</strong>, inaugurada en 2016 con una inversión de
<strong data-astro-cid-vqhdmzcb>1,300 millones de dólares</strong>, es la única fábrica de automóviles <strong data-astro-cid-vqhdmzcb>Audi en
        todo el continente americano</strong>. Produce los modelos <strong data-astro-cid-vqhdmzcb>Audi Q5</strong> y <strong data-astro-cid-vqhdmzcb>Audi
        A3 Sedan</strong> para distribución global —más de 150,000 unidades anuales— y emplea directa e
        indirectamente a más de 12,000 personas. El taller de pintura con disolventes orgánicos volátiles,
        las líneas de producción de baterías de alta tensión (400V) para los modelos plug-in hybrid, y las
        celdas de soldadura robotizada (KUKA, FANUC) representan riesgos HAZMAT que demandan protocolos
        del Grupo Volkswagen y certificaciones internacionales.
</p> <h3 data-astro-cid-vqhdmzcb>La Capital Textilera de México: Santa Ana Chiautempan</h3> <p data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Santa Ana Chiautempan</strong> concentra la mayor densidad de telares industriales del país,
        con más de 500 empresas textileras que producen <strong data-astro-cid-vqhdmzcb>sarapes, cobertores, ropa deportiva y
        telas técnicas</strong> para mercados de América del Norte, Europa y Asia. El riesgo de incendio
        es de alta complejidad: las fibras sintéticas (poliéster, nylon, acrílico) tienen una velocidad
        de propagación del fuego entre 5 y 10 veces superior a la madera. Los colorantes azo empleados en
        los baños de tintura contienen precursores que, al combustionar, generan gases tóxicos como el
        cloruro de hidrógeno y el cianuro de hidrógeno.
</p> <h3 data-astro-cid-vqhdmzcb>Volcán La Malinche: Rescate en Alta Montaña</h3> <p data-astro-cid-vqhdmzcb>
El <strong data-astro-cid-vqhdmzcb>Volcán La Malinche</strong> —también llamado <strong data-astro-cid-vqhdmzcb>Matlalcuéitl</strong>, «la señora
        de las faldas azules» en náhuatl— alcanza los <strong data-astro-cid-vqhdmzcb>4,461 msnm</strong>, siendo la segunda
        montaña más alta del centro de México. El Parque Nacional que lo rodea recibe más de
<strong data-astro-cid-vqhdmzcb>200,000 visitantes anuales</strong> entre excursionistas, montañistas y turistas. Los
        rescates en el volcán son frecuentes: hipotermia, torceduras en terreno volcánico irregular,
        lesiones por caídas en zonas de roca suelta y emergencias cardiorrespiratorias por altitud. Los
        bomberos de Huamantla y San Pablo del Monte mantienen equipos de <strong data-astro-cid-vqhdmzcb>rescate en alta montaña</strong>
con indumentaria específica para nieve, hielo y condiciones extremas.
</p> <h3 data-astro-cid-vqhdmzcb>Grupo Modelo Calpulalpan y el Corredor Autopista 150D</h3> <p data-astro-cid-vqhdmzcb>
La <strong data-astro-cid-vqhdmzcb>Planta Cervecera Grupo Modelo de Calpulalpan</strong> es una de las tres cervecerías
        más grandes de México, produciendo más de <strong data-astro-cid-vqhdmzcb>10 millones de hectolitros</strong> anuales de
        marcas como Corona, Modelo Especial y Pacífico. Sus riesgos industriales son específicos: el
<strong data-astro-cid-vqhdmzcb>amoniaco</strong> empleado en refrigeración industrial puede ser letal en concentraciones
        de 50 ppm; el <strong data-astro-cid-vqhdmzcb>CO₂</strong> producido en la fermentación desplaza el oxígeno en espacios
        confinados. La autopista <strong data-astro-cid-vqhdmzcb>México 150D</strong> —la de mayor tráfico de carga del centro
        del país— pasa por el municipio, generando riesgo permanente de accidentes con materiales peligrosos.
</p> <h3 data-astro-cid-vqhdmzcb>Apizaco: El Nodo Ferroviario del Centro de México</h3> <p data-astro-cid-vqhdmzcb> <strong data-astro-cid-vqhdmzcb>Apizaco</strong> es el principal nodo ferroviario del centro de México, donde confluyen
        las rutas de <strong data-astro-cid-vqhdmzcb>Ferromex</strong> que conectan la Ciudad de México con Veracruz, el Bajío
        con el Golfo, y el corredor norte-sur del sistema ferroviario nacional. Diariamente pasan por
        Apizaco <strong data-astro-cid-vqhdmzcb>decenas de trenes de carga</strong>, incluyendo convoyes con carga peligrosa
        clasificada UN: clorosulfúrico, ácidos industriales, gases comprimidos, combustibles y productos
        petroquímicos. Los bomberos de Apizaco son los únicos en Tlaxcala con <strong data-astro-cid-vqhdmzcb>certificación de
        respuesta a accidentes ferroviarios</strong> y protocolos específicos con Ferromex.
</p> <h3 data-astro-cid-vqhdmzcb>Servicios de los Bomberos Tlaxcaltecas</h3> <p data-astro-cid-vqhdmzcb>
Los bomberos de Tlaxcala están certificados para atender:
<strong data-astro-cid-vqhdmzcb>incendios HAZMAT automotriz</strong> (Audi: VOCs, baterías HV, isocianatos);
<strong data-astro-cid-vqhdmzcb>incendios de fibras textiles</strong> y colorantes industriales;
<strong data-astro-cid-vqhdmzcb>HAZMAT ferroviario</strong> (carga peligrosa UN en tránsito Ferromex);
<strong data-astro-cid-vqhdmzcb>HAZMAT cervecería</strong> (amoniaco, CO₂, alcohol);
<strong data-astro-cid-vqhdmzcb>rescate en alta montaña</strong> (Volcán La Malinche, nieve y hielo);
<strong data-astro-cid-vqhdmzcb>incendios forestales de altitud</strong> (bosque templado 2,800-4,200 msnm);
<strong data-astro-cid-vqhdmzcb>protección de patrimonio cultural</strong> (Centro Histórico colonial);
<strong data-astro-cid-vqhdmzcb>rescate vehicular</strong> en la Autopista 150D; y
<strong data-astro-cid-vqhdmzcb>HAZMAT químico-farmacéutico</strong> en el corredor norte.
</p> </section> ` })}` })} `;
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
