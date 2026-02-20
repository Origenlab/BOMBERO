import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesOaxaca, b as getMunicipios } from '../../chunks/estaciones-oaxaca_DdwSUMeu.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Oaxaca = createComponent(($$result, $$props, $$slots) => {
  const estado = "Oaxaca";
  const sigla = "OAX";
  const slug = "oaxaca";
  const heroThumbs = [
    {
      src: "/images/directorio/oax-monte-alban.avif",
      alt: "Zona arqueol\xF3gica de Monte Alb\xE1n Patrimonio UNESCO Oaxaca",
      label: "Monte Alb\xE1n UNESCO"
    },
    {
      src: "/images/directorio/oax-centro-historico.avif",
      alt: "Centro Hist\xF3rico de Oaxaca de Ju\xE1rez Patrimonio UNESCO",
      label: "Centro Hist\xF3rico"
    },
    {
      src: "/images/directorio/oax-huatulco-bahias.avif",
      alt: "Bah\xEDas de Huatulco Costa Oaxaque\xF1a turismo",
      label: "9 Bah\xEDas Huatulco"
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/oax-guelaguetza.avif",
      alt: "Guelaguetza fiesta tradicional en Oaxaca julio",
      label: "La Guelaguetza"
    },
    {
      src: "/images/directorio/oax-puerto-escondido.avif",
      alt: "Playa Zicatela Puerto Escondido surf Pipeline mexicano",
      label: "Zicatela Surf"
    },
    {
      src: "/images/directorio/oax-salina-cruz-refineria.avif",
      alt: "Refiner\xEDa Antonio Doval\xED Jaime Salina Cruz PEMEX",
      label: "Refiner\xEDa HAZMAT"
    },
    {
      src: "/images/directorio/oax-dia-muertos.avif",
      alt: "D\xEDa de Muertos tradici\xF3n oaxaque\xF1a panteones",
      label: "D\xEDa de Muertos"
    },
    {
      src: "/images/directorio/oax-sierra-norte.avif",
      alt: "Sierra Norte de Oaxaca ecoturismo Pueblos M\xE1gicos",
      label: "Sierra Norte"
    },
    {
      src: "/images/directorio/oax-mezcal-artesanal.avif",
      alt: "Producci\xF3n artesanal de mezcal denominaci\xF3n de origen Oaxaca",
      label: "Mezcal D.O."
    }
  ];
  const emergencyNumbers = [
    { number: "911", label: "Emergencias" },
    { number: "(951) 516-2424", label: "Bomberos Oaxaca Centro" },
    { number: "(958) 587-0106", label: "Bomberos Huatulco" },
    { number: "(971) 714-0099", label: "HAZMAT Salina Cruz" }
  ];
  const regiones = [
    {
      nombre: "Valles Centrales",
      desc: "Oaxaca de Ju\xE1rez, Monte Alb\xE1n UNESCO, Mitla, Tlacolula"
    },
    {
      nombre: "Costa Oaxaque\xF1a",
      desc: "Huatulco 9 bah\xEDas, Puerto Escondido (Zicatela), Pochutla, Zipolite"
    },
    {
      nombre: "Istmo de Tehuantepec",
      desc: "Juchit\xE1n, Salina Cruz (Refiner\xEDa HAZMAT), Tehuantepec, Corredor Interoce\xE1nico"
    },
    {
      nombre: "Sierra Norte y Mixteca",
      desc: "Ixtl\xE1n, Capul\xE1lpam (Pueblo M\xE1gico), Huajuapan, Tlaxiaco"
    }
  ];
  const eppCards = [
    {
      image: "/images/productos/equipo-rescate-acuatico.avif",
      imageAlt: "Equipo de rescate acu\xE1tico para playas de Oaxaca",
      badge: "Costa",
      title: "Rescate Acu\xE1tico Costa",
      text: "Equipamiento especializado para rescate en las 9 bah\xEDas de Huatulco y oleaje extremo de Zicatela.",
      href: "/productos/rescate-acuatico",
      linkLabel: "Ver equipo acu\xE1tico"
    },
    {
      image: "/images/productos/traje-hazmat-nivel-a.avif",
      imageAlt: "Traje HAZMAT Nivel A para refiner\xEDa Salina Cruz",
      badge: "HAZMAT",
      title: "Equipos HAZMAT Refiner\xEDa",
      text: "Trajes encapsulados y detectores para emergencias en Refiner\xEDa Salina Cruz y puerto industrial.",
      href: "/productos/hazmat",
      linkLabel: "Ver equipos HAZMAT"
    },
    {
      image: "/images/productos/equipo-rescate-altura.avif",
      imageAlt: "Equipo de rescate en altura para zonas arqueol\xF3gicas",
      badge: "UNESCO",
      title: "Rescate Patrimonio",
      text: "Equipamiento t\xE9cnico para protecci\xF3n de estructuras hist\xF3ricas en Monte Alb\xE1n y Centro Hist\xF3rico.",
      href: "/productos/rescate-altura",
      linkLabel: "Ver equipo altura"
    }
  ];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Estaciones de Bomberos en ${estado}, M\xE9xico`,
    description: `Directorio oficial de ${estacionesOaxaca.length} estaciones de bomberos en Oaxaca. Protecci\xF3n de 2 sitios UNESCO (Monte Alb\xE1n, Centro Hist\xF3rico). Cobertura Costa tur\xEDstica, Istmo industrial y Sierra Norte.`,
    numberOfItems: estacionesOaxaca.length,
    itemListElement: estacionesOaxaca.map((e, i) => ({
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
    "/images/directorio/rescate-swift-water-rios-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-escalera-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-vestidor-equipo-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("oaxaca");
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": estado, "sigla": sigla, "slug": slug, "estaciones": estacionesOaxaca, "stationImages": stationImages, "municipios": getMunicipios(), "estadosVecinos": estadosVecinos, "heroThumbs": heroThumbs, "galleryImages": galleryImages, "emergencyNumbers": emergencyNumbers, "regiones": regiones, "eppCards": eppCards, "jsonLd": [itemListSchema, breadcrumbSchema], "title": `Bomberos en ${estado} | Directorio Oficial ${estacionesOaxaca.length} Estaciones | BOMBERO.MX`, "description": `Directorio completo de ${estacionesOaxaca.length} estaciones de bomberos en Oaxaca 2024. Protecci\xF3n 2 sitios UNESCO: Monte Alb\xE1n y Centro Hist\xF3rico. Costa Oaxaque\xF1a: Huatulco, Puerto Escondido. Istmo: Refiner\xEDa HAZMAT Salina Cruz. Guelaguetza y D\xEDa de Muertos. Tel: (951) 516-2424. Emergencias 911.`, "data-astro-cid-3v2xg5ou": true }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="seo-content" data-astro-cid-3v2xg5ou> <h2 data-astro-cid-3v2xg5ou>Bomberos de Oaxaca: Protegiendo el Patrimonio Cultural de México</h2> <p data-astro-cid-3v2xg5ou>
El <strong data-astro-cid-3v2xg5ou>H. Cuerpo de Bomberos de Oaxaca</strong> protege uno de los estados más diversos culturalmente de México,
        hogar de <strong data-astro-cid-3v2xg5ou>16 grupos étnicos reconocidos</strong> y <strong data-astro-cid-3v2xg5ou>2 sitios Patrimonio de la Humanidad UNESCO</strong>.
        Con <strong data-astro-cid-3v2xg5ou>16 estaciones</strong> distribuidas en 6 regiones, los bomberos oaxaqueños cubren desde el
<strong data-astro-cid-3v2xg5ou>Centro Histórico colonial</strong> hasta las playas de <strong data-astro-cid-3v2xg5ou>Huatulco y Puerto Escondido</strong>,
        pasando por la zona industrial del <strong data-astro-cid-3v2xg5ou>Istmo de Tehuantepec</strong> y los bosques de la <strong data-astro-cid-3v2xg5ou>Sierra Norte</strong>.
</p> <h3 data-astro-cid-3v2xg5ou>Monte Albán y Centro Histórico: Patrimonio UNESCO desde 1987</h3> <p data-astro-cid-3v2xg5ou>
Oaxaca alberga dos tesoros declarados <strong data-astro-cid-3v2xg5ou>Patrimonio de la Humanidad por UNESCO en 1987</strong>: el
<strong data-astro-cid-3v2xg5ou>Centro Histórico de Oaxaca de Juárez</strong> con su arquitectura colonial y el Ex Convento de Santo Domingo,
        y la <strong data-astro-cid-3v2xg5ou>zona arqueológica de Monte Albán</strong>, antigua capital zapoteca que recibe más de
<strong data-astro-cid-3v2xg5ou>500,000 visitantes anuales</strong>. La Estación Central de Oaxaca y la estación de <strong data-astro-cid-3v2xg5ou>Santa Cruz
        Xoxocotlán</strong> cuentan con equipo especializado para <strong data-astro-cid-3v2xg5ou>protección de estructuras patrimoniales</strong>,
        con protocolos específicos para emergencias en edificios históricos y zonas arqueológicas de más de 2,500 años.
</p> <h3 data-astro-cid-3v2xg5ou>Costa Oaxaqueña: Rescate Acuático y Turismo Internacional</h3> <p data-astro-cid-3v2xg5ou>
Las <strong data-astro-cid-3v2xg5ou>Bahías de Huatulco</strong> (9 bahías protegidas) y <strong data-astro-cid-3v2xg5ou>Puerto Escondido</strong> son destinos
        turísticos de clase mundial. La estación de Huatulco ofrece <strong data-astro-cid-3v2xg5ou>rescate acuático especializado</strong> y
<strong data-astro-cid-3v2xg5ou>atención bilingüe</strong> para turistas internacionales. En Puerto Escondido, los bomberos están
        capacitados para <strong data-astro-cid-3v2xg5ou>rescate en Playa Zicatela</strong>, conocida como el "Pipeline mexicano" por sus olas
        de hasta <strong data-astro-cid-3v2xg5ou>6 metros de altura</strong> que atraen surfistas profesionales de todo el mundo. La estación de
<strong data-astro-cid-3v2xg5ou>Pochutla</strong> cubre las playas alternativas de <strong data-astro-cid-3v2xg5ou>Zipolite, Mazunte y San Agustinillo</strong>,
        incluyendo el Centro Mexicano de la Tortuga.
</p> <h3 data-astro-cid-3v2xg5ou>Istmo de Tehuantepec: Capacidad Industrial HAZMAT</h3> <p data-astro-cid-3v2xg5ou>
La <strong data-astro-cid-3v2xg5ou>Estación HAZMAT de Salina Cruz</strong> protege la <strong data-astro-cid-3v2xg5ou>Refinería Antonio Dovalí Jaime</strong>
con capacidad de <strong data-astro-cid-3v2xg5ou>330,000 barriles diarios</strong>, el <strong data-astro-cid-3v2xg5ou>Puerto de Salina Cruz</strong> y el
        estratégico <strong data-astro-cid-3v2xg5ou>Corredor Interoceánico del Istmo de Tehuantepec</strong> (303 km conectando Pacífico con Golfo).
        Con capacidad de respuesta <strong data-astro-cid-3v2xg5ou>HAZMAT Nivel III</strong>, trajes encapsulados y detectores multigas,
        esta estación atiende emergencias con materiales peligrosos, derrames de combustible y emergencias portuarias
        en una de las zonas industriales más importantes del sureste mexicano.
</p> <h3 data-astro-cid-3v2xg5ou>Zona Sísmica: Lecciones del Terremoto de 2017</h3> <p data-astro-cid-3v2xg5ou>
Oaxaca es una de las <strong data-astro-cid-3v2xg5ou>zonas de más alta sismicidad de México</strong>. El <strong data-astro-cid-3v2xg5ou>terremoto del 7 de
        septiembre de 2017</strong> (magnitud 8.2) devastó <strong data-astro-cid-3v2xg5ou>Juchitán de Zaragoza</strong> causando decenas de
        muertes y miles de estructuras colapsadas. La estación de Juchitán cuenta ahora con <strong data-astro-cid-3v2xg5ou>equipo especializado
        de rescate estructural</strong>, personal capacitado en búsqueda y rescate post-sismo, y protocolos de
        evacuación actualizados. Los bomberos del Istmo mantienen <strong data-astro-cid-3v2xg5ou>vigilancia sísmica permanente</strong>.
</p> <h3 data-astro-cid-3v2xg5ou>Guelaguetza y Día de Muertos: Eventos Masivos</h3> <p data-astro-cid-3v2xg5ou>
Los bomberos de Oaxaca despliegan operativos especiales durante los eventos más importantes del estado:
<strong data-astro-cid-3v2xg5ou>La Guelaguetza</strong> (dos lunes de julio) reúne más de <strong data-astro-cid-3v2xg5ou>100,000 asistentes</strong> en el
        Cerro del Fortín con riesgo de pirotecnia y aglomeraciones. El <strong data-astro-cid-3v2xg5ou>Día de Muertos</strong> (octubre-noviembre)
        atrae <strong data-astro-cid-3v2xg5ou>500,000+ turistas</strong> con riesgos de incendios por veladoras en ofrendas y panteones.
        La <strong data-astro-cid-3v2xg5ou>Noche de Rábanos</strong> (23 de diciembre) concentra 50,000 personas en el Zócalo.
</p> <h3 data-astro-cid-3v2xg5ou>Sierra Norte: Incendios Forestales y Comunidades Indígenas</h3> <p data-astro-cid-3v2xg5ou>
La estación de <strong data-astro-cid-3v2xg5ou>Ixtlán de Juárez</strong> es la más especializada en <strong data-astro-cid-3v2xg5ou>combate de incendios
        forestales</strong> de Oaxaca, protegiendo los bosques templados de la Sierra Norte durante la temporada seca
        (febrero-mayo). Cubre los <strong data-astro-cid-3v2xg5ou>Pueblos Mágicos de Capulálpam de Méndez</strong> y comunidades zapotecas
        como <strong data-astro-cid-3v2xg5ou>Guelatao de Juárez</strong> (cuna de Benito Juárez). El terreno montañoso requiere vehículos
        4x4 y tiempos de respuesta de <strong data-astro-cid-3v2xg5ou>10-20 minutos</strong> en zonas de difícil acceso.
</p> <h3 data-astro-cid-3v2xg5ou>Vientos Tehuanos: Condición Climática Extrema</h3> <p data-astro-cid-3v2xg5ou>
El <strong data-astro-cid-3v2xg5ou>Istmo de Tehuantepec</strong> experimenta los famosos <strong data-astro-cid-3v2xg5ou>vientos Tehuanos</strong> de octubre
        a marzo, con ráfagas que superan los <strong data-astro-cid-3v2xg5ou>100 km/h</strong> y dificultan operaciones de emergencia.
        Estos vientos extremos han convertido a la región en un <strong data-astro-cid-3v2xg5ou>corredor de energía eólica</strong> con
        cientos de aerogeneradores, pero también representan riesgos de propagación rápida de incendios y
        volteo de vehículos en carreteras.
</p> <h3 data-astro-cid-3v2xg5ou>Mezcal y Riesgo de Incendios en Destilerías</h3> <p data-astro-cid-3v2xg5ou>
Oaxaca produce el <strong data-astro-cid-3v2xg5ou>90% del mezcal de México</strong> con <strong data-astro-cid-3v2xg5ou>Denominación de Origen desde 1994</strong>
en 570 municipios. Las destilerías artesanales (palenques) utilizan <strong data-astro-cid-3v2xg5ou>hornos de leña tradicionales</strong>
que representan riesgo de incendio. Los bomberos de Valles Centrales y La Mixteca atienden emergencias en
        estas instalaciones que forman parte del <strong data-astro-cid-3v2xg5ou>patrimonio gastronómico</strong> del estado.
</p> <h3 data-astro-cid-3v2xg5ou>Servicios Especializados de los Bomberos Oaxaqueños</h3> <p data-astro-cid-3v2xg5ou>
Los bomberos de Oaxaca ofrecen: <strong data-astro-cid-3v2xg5ou>protección de patrimonio UNESCO</strong>; <strong data-astro-cid-3v2xg5ou>rescate acuático
        en 9 bahías y playas de alto oleaje</strong>; <strong data-astro-cid-3v2xg5ou>respuesta HAZMAT Nivel III en refinería y puerto</strong>;
<strong data-astro-cid-3v2xg5ou>combate de incendios forestales en Sierra Norte</strong>; <strong data-astro-cid-3v2xg5ou>rescate estructural post-sismo</strong>;
<strong data-astro-cid-3v2xg5ou>atención de eventos masivos culturales</strong>; <strong data-astro-cid-3v2xg5ou>rescate en zonas arqueológicas</strong>;
<strong data-astro-cid-3v2xg5ou>servicio aeronáutico SSEI en aeropuertos</strong>; y <strong data-astro-cid-3v2xg5ou>atención bilingüe para turistas internacionales</strong>.
        Personal capacitado en las tradiciones y protocolos de las <strong data-astro-cid-3v2xg5ou>16 etnias del estado</strong>.
</p> </section> ` })}` })} `;
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
