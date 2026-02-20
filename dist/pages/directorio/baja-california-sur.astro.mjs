import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, c as getEstadisticas, e as estacionesBajaCaliforniaSur } from '../../chunks/estaciones-baja-california-sur_ZmihOM5u.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C37tG6Zv.mjs';
export { renderers } from '../../renderers.mjs';

const $$BajaCaliforniaSur = createComponent(($$result, $$props, $$slots) => {
  const estadosVecinos = getEstadosVecinos("baja-california-sur");
  const municipios = getMunicipios();
  const estadisticas = getEstadisticas();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Baja California Sur", url: "/directorio/baja-california-sur" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Baja California Sur, M\xE9xico",
    "description": "Directorio oficial de las 6 estaciones de bomberos en Baja California Sur. Tel\xE9fonos directos en La Paz, Los Cabos, Cabo San Lucas, Loreto y Santa Rosal\xEDa. Cobertura 24/7. Emergencias: llama al 911.",
    "numberOfItems": estacionesBajaCaliforniaSur.length,
    "itemListElement": estacionesBajaCaliforniaSur.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio || e.ciudad,
          "addressRegion": "Baja California Sur",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/baja-california-sur/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-maritimo-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-playa-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-turistica-01.avif",
    "/images/directorio/lancha-rescate-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-huracanes-01.avif",
    "/images/directorio/equipo-buceo-rescate-01.avif",
    "/images/directorio/estacion-bomberos-puerto-01.avif",
    "/images/directorio/camion-cisterna-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/pick-up-bomberos-forestal-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/motobomba-incendios-forestal-01.avif",
    "/images/directorio/bombero-equipandose-cuartel-central-02.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Baja California Sur", "sigla": "BCS", "slug": "baja-california-sur", "description": `Directorio oficial de las ${estadisticas.totalEstaciones} estaciones de bomberos en Baja California Sur. Tel\xE9fonos de emergencia en La Paz, Los Cabos, Cabo San Lucas, Loreto y Santa Rosal\xEDa. Rescate acu\xE1tico, huracanes y turismo internacional. Emergencias: 911.`, "keywords": [
    "bomberos baja california sur",
    "estaciones bomberos la paz",
    "bomberos los cabos tel\xE9fono",
    "emergencias bcs 911",
    "bomberos cabo san lucas",
    "bomberos loreto bcs",
    "bomberos santa rosalia",
    "cuerpo bomberos bcs",
    "rescate acuatico mar de cortes",
    "bomberos huracanes baja california sur",
    "emergencias tur\xEDsticas los cabos",
    "bomberos ciudad constitucion",
    "bomberos san jose del cabo",
    "directorio bomberos bcs",
    "emergencias 911 la paz bcs"
  ], "canonical": "https://bombero.mx/directorio/baja-california-sur", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estadisticas.totalEstaciones, "totalMunicipios": estadisticas.totalMunicipios, "habitantes": "798K+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de Baja California Sur</strong> protege los <strong>${estadisticas.totalMunicipios} municipios</strong> de la pen\xEDnsula m\xE1s larga del mundo con <strong>${estadisticas.totalEstaciones} estaciones activas</strong> y m\xE1s de <strong>296 bomberos profesionales</strong> \u2014 desde la capital La Paz hasta los resorts de clase mundial de Los Cabos, el patrimonio UNESCO del Mar de Cort\xE9s y los edificios hist\xF3ricos de madera de Santa Rosal\xEDa.`, "heroImage": "/images/directorio/estacion-bomberos-maritimo-01.avif", "heroImageAlt": "Estaci\xF3n de Bomberos Baja California Sur \u2014 rescate acu\xE1tico Mar de Cort\xE9s Los Cabos", "heroCaption": "H. Cuerpo de Bomberos \xB7 Baja California Sur", "heroThumbs": [
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico bomberos Mar de Cort\xE9s La Paz Los Cabos", label: "Rescate Mar de Cort\xE9s" },
    { src: "/images/directorio/estacion-bomberos-huracanes-01.avif", alt: "Bomberos BCS evacuaci\xF3n turistas hurac\xE1n Los Cabos Cabo San Lucas", label: "Huracanes Pac\xEDfico" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Bomberos forestal Sierra de la Giganta Loreto BCS", label: "Forestal Sierra Giganta" }
  ], "galleryImages": [
    { src: "/images/directorio/lancha-rescate-bomberos-01.avif", alt: "Rescate acu\xE1tico bah\xEDa La Paz Mar de Cort\xE9s bomberos BCS", label: "Rescate Bah\xEDa La Paz" },
    { src: "/images/directorio/estacion-bomberos-turistica-01.avif", alt: "Bomberos Los Cabos emergencias tur\xEDsticas resorts hoteles 5 estrellas", label: "Emergencias Los Cabos" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Incendio edificios hist\xF3ricos madera Santa Rosal\xEDa BCS Eiffel", label: "Patrimonio Santa Rosal\xEDa" },
    { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Rescate Sierra de la Giganta Loreto Parque Nacional BCS", label: "Rescate Sierra Giganta" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "612 122 0054", label: "Bomberos La Paz" },
    { number: "624 143 3577", label: "Bomberos Cabo San Lucas" },
    { number: "624 142 2466", label: "Bomberos San Jos\xE9 del Cabo" },
    { number: "613 135 0059", label: "Bomberos Loreto" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Los Cabos", desc: "Cabo San Lucas \xB7 San Jos\xE9 del Cabo \xB7 Corredor Tur\xEDstico" },
    { nombre: "La Paz", desc: "Capital del estado \xB7 Bah\xEDa de La Paz \xB7 El Mogote" },
    { nombre: "Loreto", desc: "Pueblo M\xE1gico \xB7 Bah\xEDa de Loreto \xB7 Islas del Mar de Cort\xE9s" },
    { nombre: "Comond\xFA", desc: "Ciudad Constituci\xF3n \xB7 Valle de Santo Domingo \xB7 Puerto San Carlos" },
    { nombre: "Muleg\xE9", desc: "Santa Rosal\xEDa \xB7 Guerrero Negro \xB7 San Ignacio" }
  ], "estadosVecinos": estadosVecinos, "estaciones": estacionesBajaCaliforniaSur, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/directorio/traje-inmersion-rescate-01.avif",
      imageAlt: "Traje de inmersi\xF3n rescate acu\xE1tico bomberos Mar de Cort\xE9s Baja California Sur",
      badge: "NFPA 1952",
      title: "Traje de Inmersi\xF3n para Rescate Acu\xE1tico",
      text: 'Certificado NFPA 1952 para el <strong>Mar de Cort\xE9s</strong>, reconocido por Jacques Cousteau como "el acuario del mundo". Indispensable en la <strong>Bah\xEDa de La Paz</strong>, las playas de alto riesgo de <strong>Cabo San Lucas</strong> (Divorce Beach, Playa del Amor) y los rescates en islas del <strong>Parque Nacional Bah\xEDa de Loreto</strong> (Patrimonio UNESCO). Protecci\xF3n t\xE9rmica certificada para operaciones de buceo en fauna marina (ballenas, lobos marinos, mantas).',
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: "Traje estructural NFPA 1971 bomberos Los Cabos resorts evacuaci\xF3n hurac\xE1n BCS",
      badge: "NFPA 1971",
      title: "Traje Estructural NFPA 1971",
      text: "Exigido en la protecci\xF3n de <strong>infraestructura hotelera de Los Cabos</strong> valuada en miles de millones de d\xF3lares: Four Seasons, One&Only, St. Regis y Ritz-Carlton. Durante huracanes de categor\xEDa 4-5 como <strong>Odile (2014)</strong>, los bomberos coordinaron la evacuaci\xF3n de m\xE1s de <strong>30,000 turistas</strong> en 72 horas. M\xE1xima resistencia t\xE9rmica para incendios estructurales en la <strong>Marina de Cabo San Lucas</strong>, la m\xE1s grande del Pac\xEDfico mexicano.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
      imageAlt: "Equipo SCBA aparato respiratorio bomberos Santa Rosal\xEDa edificios madera hist\xF3rica BCS",
      badge: "NFPA 1981",
      title: "Aparato Respiratorio Aut\xF3nomo SCBA",
      text: "Certificado NFPA 1981 para incendios en los <strong>edificios hist\xF3ricos de madera de Santa Rosal\xEDa</strong>, arquitectura \xFAnica en M\xE9xico tra\xEDda desde Francia por la Compagnie du Boleo en 1885. Incluye protecci\xF3n para la <strong>Iglesia de Santa B\xE1rbara</strong>, dise\xF1ada por <strong>Gustave Eiffel</strong>. Tambi\xE9n para incendios en embarcaciones del <strong>ferry Santa Rosal\xEDa-Guaymas</strong> y en el Puerto de Los Cabos, principal terminal de cruceros del Pac\xEDfico mexicano.",
      href: "/productos/equipo-scba",
      linkLabel: "Ver Equipos SCBA"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas estructurales NFPA 1971 bomberos BCS terreno mixto desierto playa sierra",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el terreno m\xE1s extremo de la pen\xEDnsula: arenas volc\xE1nicas de la <strong>Bah\xEDa de La Paz</strong> y <strong>El Arco de Cabo San Lucas</strong>, roca \xEDgnea de la <strong>Sierra de la Giganta</strong> en operaciones de rescate con Loreto, suelo arcilloso del <strong>Valle de Santo Domingo</strong> (principal zona agr\xEDcola de BCS) y muelles de madera del <strong>Puerto de Ferry de Santa Rosal\xEDa</strong>. Resistencia total en las condiciones m\xE1s diversas de M\xE9xico.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Baja California Sur", "ctaDesc": `Cotiza equipo certificado NFPA para las ${estadisticas.totalEstaciones} estaciones en La Paz, Los Cabos, Loreto, Ciudad Constituci\xF3n y Santa Rosal\xEDa. Env\xEDo a los 5 municipios del estado. Atenci\xF3n a licitaciones p\xFAblicas y compra directa.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Baja California Sur" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Baja California Sur</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Baja California Sur</strong> protege a los
<strong>798,447 bajasurenses</strong> en los <strong>5 municipios</strong> del noveno
      estado más grande de México — extendido a lo largo de <strong>1,200 km de península</strong>
entre el Mar de Cortés y el Océano Pacífico. Con <strong>6 estaciones operativas</strong>
y más de <strong>296 bomberos profesionales activos</strong>, opera las <strong>24 horas
      del día, los 365 días del año</strong>, atendiendo desde rescates acuáticos en el
      "acuario del mundo" hasta evacuaciones masivas de turistas durante huracanes del Pacífico.
</p> <h3>¿Cómo llamar a los Bomberos en Baja California Sur?</h3> <p>
En cualquier <strong>emergencia en Baja California Sur</strong>, marca el <strong>911</strong>
desde cualquier teléfono — fijo o celular, con o sin saldo. Para contacto directo con
      estaciones: <strong>La Paz: 612 122 0054</strong> · <strong>Cabo San Lucas: 624 143 3577</strong>
· <strong>San José del Cabo: 624 142 2466</strong> · <strong>Loreto: 613 135 0059</strong> ·
<strong>Ciudad Constitución: 613 132 0303</strong> · <strong>Santa Rosalía: 615 152 0050</strong>.
      El 911 también conecta con la <strong>Armada de México</strong> para emergencias en mar abierto.
</p> <h3>Riesgos Únicos de Baja California Sur</h3> <p>
BCS presenta riesgos sin paralelo en México:
<strong>huracanes de categoría 4-5</strong> — Odile (2014) y Lidia (2017) devastaron Los Cabos,
      obligando a evacuar más de 30,000 turistas internacionales;
<strong>rescate acuático en playas peligrosas</strong> de Cabo San Lucas (Divorce Beach, Playa
      del Amor), donde las corrientes del Pacífico cobran vidas cada temporada;
<strong>emergencias turísticas masivas</strong> en una zona que recibe más de
<strong>3 millones de visitantes al año</strong>, incluyendo cruceros con 5,000+ pasajeros;
<strong>aislamiento geográfico extremo</strong> — la Carretera Transpeninsular (Mex-1)
      es la única vía terrestre de 1,700 km; e <strong>incendios en patrimonio histórico</strong>:
      los únicos edificios de madera prefabricada traídos desde Francia en el siglo XIX de Santa Rosalía.
</p> <h3>Bomberos y Turismo Internacional en Los Cabos</h3> <p>
El municipio de <strong>Los Cabos</strong> recibe el mayor número de turistas extranjeros
      de cualquier destino de playa en México. La <strong>Estación de Cabo San Lucas</strong>
y la <strong>Estación de San José del Cabo</strong> protegen hoteles de cadenas como
      Four Seasons, One&Only, St. Regis y Ritz-Carlton; la <strong>Marina de Cabo San Lucas</strong>,
      la más grande del Pacífico mexicano con más de 1,000 esloras; más de
<strong>15 campos de golf de clase mundial</strong>; y el área hotelera Fonatur con
      capacidad para más de 20,000 turistas simultáneos. Todo el personal está capacitado en
      comunicaciones multilingüe (español, inglés) para la atención de emergencias internacionales.
</p> <h3>Patrimonio UNESCO bajo Protección</h3> <p>
Baja California Sur alberga más sitios Patrimonio de la Humanidad UNESCO que cualquier
      otro estado de México. Los bomberos del estado protegen:
<strong>el Mar de Cortés</strong> (Patrimonio Natural de la Humanidad, 2005), que incluye
      el Parque Nacional Bahía de Loreto y el Golfo de California;
      las <strong>Pinturas Rupestres de la Sierra de San Francisco</strong> (Patrimonio Cultural, 1993),
      con más de 400 sitios de arte rupestre de hasta 7,500 años de antigüedad;
      la <strong>Reserva de la Biósfera El Vizcaíno</strong> (Patrimonio Natural, 1993),
      hogar de la ballena gris;
      y el <strong>Área Natural Protegida de Loreto</strong>, primera capital de las Californias
      fundada en 1697. La <strong>Iglesia de Santa Bárbara en Santa Rosalía</strong>,
      diseñada por <strong>Gustave Eiffel</strong>, es el único edificio del creador de la
      Torre Eiffel en México.
</p> <h3>Especialidades del Cuerpo de Bomberos de BCS</h3> <p>
Los bomberos bajasurenses poseen capacidades únicas en México:
<strong>rescate acuático en mar abierto</strong> con equipos de buceo certificados PADI
      y lanchas de 25-30 pies para operaciones en el Mar de Cortés;
<strong>respuesta a huracanes</strong> con protocolos de evacuación masiva y centros de
      mando coordinados con Protección Civil estatal y federal;
<strong>emergencias turísticas internacionales</strong> con personal bilingüe y
      coordinación con consulados y aseguradoras;
<strong>rescate en islas remotas</strong> del Parque Nacional Bahía de Loreto
      (Isla Coronado, Isla Carmen, Isla Danzante), accesibles solo por mar;
      e <strong>incendios en estructuras históricas de madera</strong> con técnicas especializadas
      para patrimonio arquitectónico irreemplazable.
</p> <h3>Municipios y Cobertura por Zona</h3> <p> <strong>Los Cabos</strong> — 2 estaciones en el destino turístico de clase mundial:
      Cabo San Lucas (marina, playas, vida nocturna) y San José del Cabo (centro histórico,
      zona hotelera Fonatur, Estero). <strong>La Paz</strong> — 1 estación central en la
      capital: bahía, malecón, zona portuaria y comunidades costeras. <strong>Loreto</strong>
— 1 estación en el Pueblo Mágico: centro histórico, Bahía de Loreto y rescate en islas.
<strong>Comondú</strong> — 1 estación en Ciudad Constitución: Valle de Santo Domingo
      y Puerto San Carlos. <strong>Mulegé</strong> — 1 estación en Santa Rosalía: patrimonio
      francés, ferry y zona minera.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california-sur.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/baja-california-sur.astro";
const $$url = "/directorio/baja-california-sur";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BajaCaliforniaSur,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
