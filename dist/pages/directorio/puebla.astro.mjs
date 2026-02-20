import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesPuebla, b as getMunicipios } from '../../chunks/estaciones-puebla_DeE7YBg_.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Puebla = createComponent(($$result, $$props, $$slots) => {
  const estado = "Puebla";
  const sigla = "PUE";
  const slug = "puebla";
  const heroThumbs = [
    {
      src: "/images/directorio/pue-centro-historico.avif",
      alt: "Centro Hist\xF3rico de Puebla Patrimonio UNESCO catedral",
      label: "Centro UNESCO"
    },
    {
      src: "/images/directorio/pue-volkswagen-audi.avif",
      alt: "Plantas Volkswagen y Audi zona industrial Puebla",
      label: "VW + Audi HAZMAT"
    },
    {
      src: "/images/directorio/pue-popocatepetl.avif",
      alt: "Volc\xE1n Popocat\xE9petl activo monitoreo Puebla",
      label: "Volc\xE1n Activo"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/pue-cholula-piramide.avif",
      alt: "Gran Pir\xE1mide de Cholula la m\xE1s grande del mundo por volumen",
      label: "Cholula PM"
    },
    {
      src: "/images/directorio/pue-autopista-mexico.avif",
      alt: "Autopista M\xE9xico-Puebla rescate carretero 80,000 veh\xEDculos",
      label: "Autopista 150D"
    },
    {
      src: "/images/directorio/pue-cuetzalan.avif",
      alt: "Cuetzalan Pueblo M\xE1gico cascadas voladores",
      label: "Cuetzalan PM"
    },
    {
      src: "/images/directorio/pue-talavera.avif",
      alt: "Talavera poblana artesan\xEDa patrimonio Centro Hist\xF3rico",
      label: "Talavera Poblana"
    },
    {
      src: "/images/directorio/pue-cinco-mayo.avif",
      alt: "Fuertes de Loreto y Guadalupe Batalla 5 de Mayo",
      label: "5 de Mayo"
    },
    {
      src: "/images/directorio/pue-tehuacan.avif",
      alt: "Valle de Tehuac\xE1n Reserva Bi\xF3sfera agua mineral",
      label: "Tehuac\xE1n Bi\xF3sfera"
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "(222) 309-9400", label: "Bomberos Central Puebla" },
    { number: "(222) 303-8000", label: "HAZMAT Volkswagen" },
    { number: "(222) 247-0707", label: "Bomberos Cholula" }
  ];
  const regiones = [
    {
      nombre: "Zona Metropolitana",
      desc: "Puebla Centro UNESCO, Cholula (Gran Pir\xE1mide), Cuautlancingo, Amozoc"
    },
    {
      nombre: "Zona Industrial Automotriz",
      desc: "Volkswagen (400,000+ veh\xEDculos), Audi M\xE9xico (Q5), HAZMAT Nivel III"
    },
    {
      nombre: "Sierra Norte",
      desc: "Zacatl\xE1n, Chignahuapan, Cuetzalan, Xicotepec (4 Pueblos M\xE1gicos)"
    },
    {
      nombre: "Corredor Volc\xE1nico",
      desc: "Atlixco, San Nicol\xE1s de los Ranchos, monitoreo Popocat\xE9petl"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/traje-hazmat-industrial.avif",
      imageAlt: "Traje HAZMAT para planta automotriz Volkswagen Audi",
      badge: "HAZMAT",
      title: "Equipos HAZMAT Automotriz",
      text: "Trajes encapsulados y detectores para emergencias qu\xEDmicas en plantas VW y Audi.",
      href: "/productos/hazmat",
      linkLabel: "Ver equipos HAZMAT"
    },
    {
      image: "/images/productos/equipo-volcanico.avif",
      imageAlt: "Equipo de protecci\xF3n para emergencias volc\xE1nicas Popocat\xE9petl",
      badge: "Volc\xE1nico",
      title: "Protecci\xF3n Volc\xE1nica",
      text: "Mascarillas y equipos para atenci\xF3n de afectados por ceniza del Popocat\xE9petl.",
      href: "/productos/equipo-volcanico",
      linkLabel: "Ver equipo volc\xE1nico"
    },
    {
      image: "/images/productos/rescate-carretero.avif",
      imageAlt: "Herramientas de rescate carretero autopista M\xE9xico-Puebla",
      badge: "Carretero",
      title: "Rescate Carretero Pesado",
      text: "Herramientas hidr\xE1ulicas para rescate en autopista M\xE9xico-Puebla (80,000+ veh\xEDculos/d\xEDa).",
      href: "/productos/herramientas-rescate",
      linkLabel: "Ver herramientas rescate"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesPuebla.length} estaciones de bomberos en Puebla. Capital industrial automotriz con plantas Volkswagen y Audi. Centro Hist\xF3rico UNESCO. Monitoreo Volc\xE1n Popocat\xE9petl. 8 Pueblos M\xE1gicos.`,
    numberOfItems: estacionesPuebla.length,
    itemListElement: estacionesPuebla.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FireStation",
        name: e.nombre,
        address: {
          "@type": "PostalAddress",
          streetAddress: e.direccion,
          addressLocality: e.municipiosCubiertos?.[0] || estado,
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
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/equipo-rescate-tecnico-01.avif",
    "/images/directorio/bombero-poniendose-chaqueton-vestidor-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("puebla");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesPuebla, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesPuebla.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesPuebla.length} estaciones de bomberos en Puebla 2024. Capital industrial automotriz: Volkswagen, Audi HAZMAT. Centro Hist\xF3rico UNESCO. Monitoreo Volc\xE1n Popocat\xE9petl. 8 Pueblos M\xE1gicos: Cholula, Cuetzalan, Zacatl\xE1n. Tel: (222) 309-9400. Emergencias 911.`, "data-astro-cid-fypxzouz": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-fypxzouz> <h2 data-astro-cid-fypxzouz>Bomberos de Puebla: Capital Industrial y Patrimonio de México</h2> <p data-astro-cid-fypxzouz>
El <strong data-astro-cid-fypxzouz>H. Cuerpo de Bomberos de Puebla</strong> protege uno de los estados más importantes de México,
        con <strong data-astro-cid-fypxzouz>18 estaciones</strong> cubriendo desde el <strong data-astro-cid-fypxzouz>Centro Histórico UNESCO</strong> (declarado en 1987)
        hasta el <strong data-astro-cid-fypxzouz>corredor industrial automotriz más grande de América Latina</strong>. Con más de
<strong data-astro-cid-fypxzouz>6.5 millones de habitantes</strong>, Puebla es el cuarto estado más poblado del país y mantiene
<strong data-astro-cid-fypxzouz>estaciones HAZMAT especializadas</strong> para las plantas de Volkswagen y Audi, así como
<strong data-astro-cid-fypxzouz>unidades volcánicas</strong> para el monitoreo permanente del Popocatépetl.
</p> <h3 data-astro-cid-fypxzouz>Zona Industrial Automotriz: HAZMAT de Clase Mundial</h3> <p data-astro-cid-fypxzouz>
Las estaciones de <strong data-astro-cid-fypxzouz>Cuautlancingo</strong> y <strong data-astro-cid-fypxzouz>San José Chiapa</strong> protegen el
<strong data-astro-cid-fypxzouz>cluster automotriz más importante de México</strong>. La planta de <strong data-astro-cid-fypxzouz>Volkswagen de México</strong>
emplea a <strong data-astro-cid-fypxzouz>15,000 trabajadores</strong> y produce más de <strong data-astro-cid-fypxzouz>400,000 vehículos anuales</strong>
(Jetta, Tiguan, Taos), mientras que <strong data-astro-cid-fypxzouz>Audi México</strong> cuenta con <strong data-astro-cid-fypxzouz>5,200 empleados</strong>
fabricando el <strong data-astro-cid-fypxzouz>Q5 para exportación global</strong>. Ambas estaciones tienen capacidad
<strong data-astro-cid-fypxzouz>HAZMAT Nivel III</strong> con trajes encapsulados, detectores multigas y equipos de
        descontaminación para emergencias en líneas de pintura, prensas industriales y derrames químicos.
</p> <h3 data-astro-cid-fypxzouz>Volcán Popocatépetl: Monitoreo Permanente</h3> <p data-astro-cid-fypxzouz>
El <strong data-astro-cid-fypxzouz>Volcán Popocatépetl</strong> (5,426 msnm) se encuentra en <strong data-astro-cid-fypxzouz>estado activo permanente</strong>
(Semáforo Amarillo Fase 2), con el cráter a solo <strong data-astro-cid-fypxzouz>12 km de las comunidades más cercanas</strong>.
        Las estaciones de <strong data-astro-cid-fypxzouz>Atlixco</strong>, <strong data-astro-cid-fypxzouz>San Nicolás de los Ranchos</strong> y <strong data-astro-cid-fypxzouz>Tochimilco</strong>
están especializadas en <strong data-astro-cid-fypxzouz>emergencias volcánicas</strong>: evacuaciones masivas, rescate en zona de
        exclusión, atención de afectados por <strong data-astro-cid-fypxzouz>caída de ceniza</strong> y coordinación con el
<strong data-astro-cid-fypxzouz>CENAPRED</strong>. Personal capacitado con mascarillas de protección y vehículos 4x4 para terreno volcánico.
</p> <h3 data-astro-cid-fypxzouz>Centro Histórico UNESCO y Talavera Poblana</h3> <p data-astro-cid-fypxzouz>
El <strong data-astro-cid-fypxzouz>Centro Histórico de Puebla</strong>, declarado <strong data-astro-cid-fypxzouz>Patrimonio de la Humanidad en 1987</strong>,
        alberga más de <strong data-astro-cid-fypxzouz>2,600 edificios históricos</strong>, la <strong data-astro-cid-fypxzouz>Catedral de Puebla</strong> (la más
        grande de América construida en el siglo XVI), el <strong data-astro-cid-fypxzouz>Palacio Municipal</strong> y miles de fachadas
        decoradas con la famosa <strong data-astro-cid-fypxzouz>Talavera Poblana</strong>. La Estación Central de Bomberos cuenta con
        equipo especializado para <strong data-astro-cid-fypxzouz>protección de estructuras patrimoniales</strong>, con protocolos que
        minimizan daños por agua en edificios históricos y técnicas de rescate en construcciones coloniales.
</p> <h3 data-astro-cid-fypxzouz>Gran Pirámide de Cholula: Pueblo Mágico Arqueológico</h3> <p data-astro-cid-fypxzouz> <strong data-astro-cid-fypxzouz>Cholula</strong> (Pueblo Mágico desde 2012) alberga la <strong data-astro-cid-fypxzouz>pirámide más grande del mundo
        por volumen</strong> (4.45 millones de metros cúbicos), coronada por el <strong data-astro-cid-fypxzouz>Santuario de los Remedios</strong>.
        La estación de bomberos de Cholula cubre la zona arqueológica, la <strong data-astro-cid-fypxzouz>UDLAP</strong> (Universidad de las
        Américas Puebla) y el corredor gastronómico más visitado del estado. Personal capacitado en rescate de
        altura para emergencias en estructuras patrimoniales y atención a turistas internacionales.
</p> <h3 data-astro-cid-fypxzouz>Autopista México-Puebla: Rescate Carretero Especializado</h3> <p data-astro-cid-fypxzouz>
La <strong data-astro-cid-fypxzouz>autopista 150D México-Puebla</strong> es una de las <strong data-astro-cid-fypxzouz>más transitadas del país</strong>
con más de <strong data-astro-cid-fypxzouz>80,000 vehículos diarios</strong>. Las estaciones de <strong data-astro-cid-fypxzouz>San Martín Texmelucan</strong>
y <strong data-astro-cid-fypxzouz>Huejotzingo</strong> están especializadas en <strong data-astro-cid-fypxzouz>rescate carretero pesado</strong>:
        accidentes múltiples, volcaduras de tractocamiones, emergencias HAZMAT en tránsito y rescate de pasajeros
        de autobuses. También cubren el <strong data-astro-cid-fypxzouz>ducto Tuxpan-Azcapotzalco de PEMEX</strong> que atraviesa la región.
</p> <h3 data-astro-cid-fypxzouz>Sierra Norte: 4 Pueblos Mágicos y Rescate de Montaña</h3> <p data-astro-cid-fypxzouz>
La Sierra Norte de Puebla alberga <strong data-astro-cid-fypxzouz>4 Pueblos Mágicos</strong>: <strong data-astro-cid-fypxzouz>Zacatlán</strong> (relojes
        monumentales, manzanas), <strong data-astro-cid-fypxzouz>Chignahuapan</strong> (capital de las esferas navideñas),
<strong data-astro-cid-fypxzouz>Cuetzalan</strong> (cascadas, voladores, café de altura) y <strong data-astro-cid-fypxzouz>Xicotepec</strong> (Virgen de
        Guadalupe de 32m). Las estaciones serranas están especializadas en <strong data-astro-cid-fypxzouz>incendios forestales</strong>
durante la temporada seca (febrero-mayo), <strong data-astro-cid-fypxzouz>rescate de montaña</strong>, búsqueda de excursionistas
        y emergencias en comunidades nahuas y totonacas de difícil acceso con vehículos 4x4.
</p> <h3 data-astro-cid-fypxzouz>Atlixco: Valle de las Flores y Puerta al Volcán</h3> <p data-astro-cid-fypxzouz> <strong data-astro-cid-fypxzouz>Atlixco</strong> (Pueblo Mágico desde 2015) es conocido como el <strong data-astro-cid-fypxzouz>Valle de las Flores</strong>
por su producción de plantas ornamentales que abastece a todo México. La estación de bomberos de Atlixco
        es estratégica por su ubicación como <strong data-astro-cid-fypxzouz>puerta de entrada al Volcán Popocatépetl</strong>, atendiendo
        emergencias de evacuación, rescate en faldas del volcán y la coordinación con comunidades de
<strong data-astro-cid-fypxzouz>San Pedro Benito Juárez, Metepec y Tochimilco</strong> dentro del radio de peligro.
</p> <h3 data-astro-cid-fypxzouz>Tehuacán: Agua Mineral y Reserva de la Biósfera</h3> <p data-astro-cid-fypxzouz> <strong data-astro-cid-fypxzouz>Tehuacán</strong>, la segunda ciudad más importante de Puebla, es famosa por sus <strong data-astro-cid-fypxzouz>manantiales
        de agua mineral</strong> y la industria embotelladora. La estación central de Tehuacán cubre la
<strong data-astro-cid-fypxzouz>Reserva de la Biósfera Tehuacán-Cuicatlán</strong> (declarada Patrimonio Mixto UNESCO en 2018),
        hogar de la mayor diversidad de cactáceas del mundo. También atiende emergencias en las <strong data-astro-cid-fypxzouz>granjas
        avícolas</strong> más grandes del sureste mexicano y la agroindustria regional.
</p> <h3 data-astro-cid-fypxzouz>Batalla del 5 de Mayo: Patrimonio Militar</h3> <p data-astro-cid-fypxzouz>
Los <strong data-astro-cid-fypxzouz>Fuertes de Loreto y Guadalupe</strong>, escenario de la histórica <strong data-astro-cid-fypxzouz>Batalla del 5 de
        Mayo de 1862</strong> contra el ejército francés, reciben miles de visitantes cada año, especialmente
        durante las celebraciones de mayo. Los bomberos de la zona metropolitana despliegan operativos especiales
        durante la <strong data-astro-cid-fypxzouz>Feria de Puebla</strong> (abril-mayo) que atrae más de <strong data-astro-cid-fypxzouz>500,000 visitantes</strong>
con eventos pirotécnicos, conciertos masivos y aglomeraciones en la zona de Los Fuertes.
</p> <h3 data-astro-cid-fypxzouz>Servicios Especializados de los Bomberos Poblanos</h3> <p data-astro-cid-fypxzouz>
Los bomberos de Puebla ofrecen: <strong data-astro-cid-fypxzouz>combate de incendios estructurales e industriales</strong>;
<strong data-astro-cid-fypxzouz>respuesta HAZMAT Nivel III para plantas automotrices</strong>; <strong data-astro-cid-fypxzouz>emergencias volcánicas
        y evacuaciones Popocatépetl</strong>; <strong data-astro-cid-fypxzouz>protección de patrimonio UNESCO</strong>;
<strong data-astro-cid-fypxzouz>rescate carretero pesado en autopistas</strong>; <strong data-astro-cid-fypxzouz>incendios forestales Sierra Norte</strong>;
<strong data-astro-cid-fypxzouz>rescate de montaña y cascadas</strong>; <strong data-astro-cid-fypxzouz>servicio aeronáutico SSEI</strong>;
<strong data-astro-cid-fypxzouz>atención de eventos masivos (5 de Mayo, Feria)</strong>; y <strong data-astro-cid-fypxzouz>emergencias en 8 Pueblos Mágicos</strong>.
        El tiempo de respuesta promedio en zona metropolitana es de <strong data-astro-cid-fypxzouz>5-8 minutos</strong>.
</p> </section> ` })}` })} `;
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
