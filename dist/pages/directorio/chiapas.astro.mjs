import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { b as getMunicipios, c as getEstadisticas, e as estacionesChiapas } from '../../chunks/estaciones-chiapas_riY5rmyw.mjs';
import { b as breadcrumbJsonLd } from '../../chunks/PageLayout_C37tG6Zv.mjs';
export { renderers } from '../../renderers.mjs';

const $$Chiapas = createComponent(($$result, $$props, $$slots) => {
  const estadosVecinos = getEstadosVecinos("chiapas");
  const municipios = getMunicipios();
  const estadisticas = getEstadisticas();
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "Inicio", url: "/" },
    { name: "Directorio de Bomberos", url: "/directorio" },
    { name: "Chiapas", url: "/directorio/chiapas" }
  ]);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Estaciones de Bomberos en Chiapas, M\xE9xico",
    "description": "Directorio oficial de las 18 estaciones de bomberos en Chiapas. Tel\xE9fonos directos en Tuxtla Guti\xE9rrez, San Crist\xF3bal de las Casas, Tapachula, Palenque y Comit\xE1n. Cobertura 24/7 para m\xE1s de 5.5 millones de chiapanecos y 4.5 millones de turistas. Emergencias: llama al 911.",
    "numberOfItems": estacionesChiapas.length,
    "itemListElement": estacionesChiapas.map((e, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "FireStation",
        "name": e.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": e.direccion,
          "addressLocality": e.municipio || e.ciudad,
          "addressRegion": "Chiapas",
          "addressCountry": "MX"
        },
        "telephone": e.telefono,
        "url": `https://bombero.mx/directorio/chiapas/${e.slug}`
      }
    }))
  };
  const stationImages = [
    "/images/directorio/estacion-bomberos-selva-01.avif",
    "/images/directorio/rescate-montana-bomberos-01.avif",
    "/images/directorio/camion-forestal-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/rescate-acuatico-bomberos-01.avif",
    "/images/directorio/estacion-bomberos-turistica-01.avif",
    "/images/directorio/pick-up-bomberos-forestal-01.avif",
    "/images/directorio/lancha-rescate-bomberos-01.avif",
    "/images/directorio/unidad-hazmat-emergencias-01.avif",
    "/images/directorio/estacion-bomberos-petrolera-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/estacion-bomberos-maritimo-01.avif",
    "/images/directorio/motobomba-incendios-forestal-01.avif",
    "/images/directorio/estacion-bomberos-profesional-01.avif",
    "/images/directorio/descontaminacion-hazmat-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/estacion-bomberos-equipada-01.avif",
    "/images/directorio/capacitacion-bomberos-profesional-01.avif",
    "/images/directorio/rescate-urbano-bomberos-01.avif",
    "/images/directorio/ambulancia-bomberos-emergencias-01.avif",
    "/images/directorio/bomberos-accion-incendio-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/bomberos-salida-emergencia-nocturna-01.avif"
  ];
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estado": "Chiapas", "sigla": "CHIS", "slug": "chiapas", "description": `Directorio oficial de las ${estadisticas.totalEstaciones} estaciones de bomberos en Chiapas. Tel\xE9fonos de emergencia en Tuxtla Guti\xE9rrez, San Crist\xF3bal, Tapachula, Palenque y Comit\xE1n. 5 Pueblos M\xE1gicos, selva Lacandona y zonas arqueol\xF3gicas UNESCO bajo protecci\xF3n. Emergencias: 911.`, "keywords": [
    "bomberos chiapas",
    "bomberos tuxtla gutierrez",
    "emergencias chiapas 911",
    "bomberos san cristobal de las casas",
    "bomberos tapachula",
    "bomberos palenque selva lacandona",
    "bomberos comitan de dominguez",
    "rescate ca\xF1on del sumidero",
    "bomberos cascadas agua azul chiapas",
    "cuerpo bomberos chiapas",
    "bomberos incendios forestales chiapas",
    "hazmat reforma chiapas pemex",
    "rescate acuatico rio grijalva",
    "emergencias frontera guatemala chiapas",
    "bomberos pueblos magicos chiapas"
  ], "canonical": "https://bombero.mx/directorio/chiapas", "jsonLd": [breadcrumbSchema, itemListSchema], "totalEstaciones": estadisticas.totalEstaciones, "totalMunicipios": estadisticas.totalMunicipios, "habitantes": "5.5M+", "heroDesc": `El <strong>Heroico Cuerpo de Bomberos de Chiapas</strong> despliega <strong>${estadisticas.totalEstaciones} estaciones activas</strong> en <strong>${estadisticas.totalMunicipios} municipios</strong> con m\xE1s de <strong>788 bomberos profesionales</strong> \u2014 guardando la selva Lacandona, los <strong>5 Pueblos M\xE1gicos</strong>, la zona arqueol\xF3gica de Palenque (Patrimonio UNESCO), el Ca\xF1\xF3n del Sumidero, las cascadas de Agua Azul y los <strong>658 km de frontera con Guatemala</strong>.`, "heroImage": "/images/directorio/estacion-bomberos-selva-01.avif", "heroImageAlt": "Estaci\xF3n de Bomberos Chiapas \u2014 selva Lacandona Palenque UNESCO Ca\xF1\xF3n del Sumidero", "heroCaption": "H. Cuerpo de Bomberos \xB7 Chiapas", "heroThumbs": [
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Rescate acu\xE1tico Ca\xF1\xF3n del Sumidero r\xEDo Grijalva cascadas Agua Azul Chiapa de Corzo bomberos", label: "Rescate Ca\xF1\xF3n del Sumidero" },
    { src: "/images/directorio/camion-forestal-bomberos-01.avif", alt: "Bomberos forestales selva Lacandona Palenque UNESCO Reserva Montes Azules Chiapas", label: "Forestal Selva Lacandona" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "HAZMAT bomberos Reforma Chiapas Complejo Cactus PEMEX pozos petroleros gas natural norte", label: "HAZMAT PEMEX Norte" }
  ], "galleryImages": [
    { src: "/images/directorio/estacion-bomberos-turistica-01.avif", alt: "Bomberos Palenque zona arqueol\xF3gica UNESCO rescate tur\xEDstico 1 mill\xF3n visitantes anuales", label: "Palenque UNESCO" },
    { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Rescate monta\xF1a San Crist\xF3bal de las Casas 2,200 msnm hipotermia Los Altos Chiapas", label: "Rescate Los Altos" },
    { src: "/images/directorio/lancha-rescate-bomberos-01.avif", alt: "Rescate lacustre Lagos de Montebello 59 lagunas Comit\xE1n Chiapas Parque Nacional", label: "Lagos de Montebello" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "HAZMAT Reforma Chiapas Complejo Procesador Gas Cactus PEMEX industria petrolera norte", label: "Zona Petrolera Norte" }
  ], "emergencyNumbers": [
    { number: "911", label: "Emergencias" },
    { number: "961 612 4692", label: "Bomberos Tuxtla Guti\xE9rrez" },
    { number: "967 678 0770", label: "Bomberos San Crist\xF3bal" },
    { number: "962 626 1515", label: "Bomberos Tapachula" },
    { number: "916 345 0808", label: "Bomberos Palenque" },
    { number: "963 632 1616", label: "Bomberos Comit\xE1n" }
  ], "municipios": municipios, "regiones": [
    { nombre: "Zona Metropolitana", desc: "Tuxtla Guti\xE9rrez (3 est.) \xB7 Chiapa de Corzo \xB7 Ca\xF1\xF3n del Sumidero \xB7 Cintalapa" },
    { nombre: "Los Altos", desc: "San Crist\xF3bal de las Casas \xB7 Comit\xE1n de Dom\xEDnguez \xB7 Lagos de Montebello" },
    { nombre: "Selva Norte y Mayas", desc: "Palenque UNESCO \xB7 Ocosingo \xB7 Cascadas Agua Azul \xB7 Selva Lacandona" },
    { nombre: "Soconusco y Costa", desc: "Tapachula \xB7 Puerto Chiapas \xB7 Huixtla \xB7 Tonal\xE1 \xB7 Arriaga \xB7 Frontera Guatemala" },
    { nombre: "Zona Petrolera Norte", desc: "Reforma \xB7 Complejo Cactus PEMEX \xB7 Pichucalco \xB7 Villaflores \xB7 Frontera Tabasco" }
  ], "estadosVecinos": estadosVecinos, "estaciones": estacionesChiapas, "stationImages": stationImages, "eppCards": [
    {
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imageAlt: "Traje Forestal NFPA 1977 bomberos selva Lacandona Palenque UNESCO incendios forestales Chiapas",
      badge: "NFPA 1977",
      title: "Traje Forestal NFPA 1977 \u2014 Selva Tropical",
      text: "Certificado para los ecosistemas m\xE1s complejos de M\xE9xico: la <strong>Selva Lacandona</strong>, segunda selva tropical del continente americano con 1.5 millones de hect\xE1reas; la <strong>Reserva de la Bi\xF3sfera Montes Azules</strong>, hogar del jaguar, tapir y guacamaya roja; y los bosques de Los Altos de Chiapas a <strong>2,200 msnm</strong>. Las brigadas de Ocosingo operan con comunicaci\xF3n satelital Iridium y mulas de carga en operaciones de hasta <strong>5 d\xEDas en comunidades sin acceso vehicular</strong>. Tejido ultraligero certificado para la humedad tropical del 80-90% de la selva chiapaneca.",
      href: "/productos/trajes-para-bomberos",
      linkLabel: "Ver Trajes para Bombero"
    },
    {
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif",
      imageAlt: "Casco Estructural NFPA 1971 bomberos San Crist\xF3bal de las Casas Palenque UNESCO centros hist\xF3ricos Chiapas",
      badge: "NFPA 1971",
      title: "Casco Estructural NFPA 1971",
      text: "Imprescindible para proteger el patrimonio m\xE1s valioso del sureste: la <strong>Zona Arqueol\xF3gica de Palenque</strong> (Patrimonio UNESCO, 1987) con el Templo de las Inscripciones y el sarc\xF3fago de Pakal el Grande; el <strong>centro hist\xF3rico colonial de San Crist\xF3bal de las Casas</strong>, Pueblo M\xE1gico a 2,200 msnm con calles empedradas del siglo XVI; el <strong>Pueblo M\xE1gico de Chiapa de Corzo</strong> con su famosa fuente mud\xE9jar; y las zonas arqueol\xF3gicas de <strong>Bonampak</strong> (murales mayas \xFAnicos en el mundo) y <strong>Yaxchil\xE1n</strong> (accesible solo por r\xEDo Usumacinta). Compatible con comunicaci\xF3n satelital para zonas sin cobertura celular.",
      href: "/productos/cascos-para-bomberos",
      linkLabel: "Ver Cascos para Bombero"
    },
    {
      image: "/images/directorio/equipo-scba-aparato-respiratorio-01.avif",
      imageAlt: "SCBA NFPA 1981 bomberos Reforma Chiapas PEMEX Complejo Cactus pozos petroleros gas natural",
      badge: "NFPA 1981",
      title: "Aparato Respiratorio Aut\xF3nomo SCBA",
      text: "Certificado NFPA 1981 para el <strong>Complejo Procesador de Gas Cactus</strong> en Reforma, el mayor complejo de procesamiento de gas del sureste de M\xE9xico. Las brigadas de <strong>Reforma y Pichucalco</strong> est\xE1n certificadas internacionalmente en control de pozos por <strong>Wild Well Control</strong> y HAZMAT nivel t\xE9cnico para blowouts (reventones de pozo). Tambi\xE9n para rescate en <strong>espacios confinados del Ca\xF1\xF3n del Sumidero</strong> (paredes de 1,000 metros de altura), las <strong>grutas y cenotes de la Selva Lacandona</strong> y emergencias en los <strong>parques e\xF3licos del Istmo de Tehuantepec</strong> en Arriaga (hasta 150 km/h de viento).",
      href: "/productos/equipo-scba",
      linkLabel: "Ver Equipos SCBA"
    },
    {
      image: "/images/directorio/botas-bombero-proteccion-01.avif",
      imageAlt: "Botas Estructurales NFPA 1971 bomberos Chiapas terreno mixto selva monta\xF1a playa fronteras zonas arqueol\xF3gicas",
      badge: "NFPA 1971",
      title: "Botas Estructurales de Cuero",
      text: "Certificadas NFPA 1971 para el estado con mayor diversidad de terrenos de M\xE9xico: suelo selv\xE1tico h\xFAmedo de la <strong>Selva Lacandona</strong> con 10 cm de hojarasca; piedra caliza de las <strong>zonas arqueol\xF3gicas mayas</strong> (Palenque, Bonampak, Yaxchil\xE1n, Tonin\xE1); adoqu\xEDn de altura de los <strong>Pueblos M\xE1gicos coloniales</strong> a 2,200 msnm; arena volc\xE1nica del <strong>litoral del Pac\xEDfico</strong> (Puerto Chiapas, Puerto Arista, Boca del Cielo); suelo arcilloso de <strong>valles cafetaleros</strong> del Soconusco; y asfalto de la <strong>carretera Panamericana</strong>, la m\xE1s transitada del sur con 15,000 veh\xEDculos diarios.",
      href: "/productos/botas-para-bomberos",
      linkLabel: "Ver Botas para Bombero"
    }
  ], "ctaTitle": "Equipamos a los Bomberos de Chiapas", "ctaDesc": `Cotiza equipo certificado NFPA para las ${estadisticas.totalEstaciones} estaciones desde Tuxtla Guti\xE9rrez hasta la frontera con Guatemala. Env\xEDo a los ${estadisticas.totalMunicipios} municipios con cobertura activa. Atenci\xF3n a licitaciones p\xFAblicas municipales y estatales.`, "ctaBtnText": "Solicitar Cotizaci\xF3n \u2014 Chiapas" }, { "seo": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "seo" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h2>El Heroico Cuerpo de Bomberos de Chiapas</h2> <p>
El <strong>Heroico Cuerpo de Bomberos de Chiapas</strong> protege a los
<strong>5,543,828 chiapanecos</strong> y a más de <strong>4.5 millones de
      turistas anuales</strong> en el estado más biodiverso de México. Con
<strong>${estadisticas.totalEstaciones} estaciones operativas</strong> en
<strong>${estadisticas.totalMunicipios} municipios</strong> y más de
<strong>788 bomberos profesionales activos</strong>, opera las <strong>24 horas
      del día, los 365 días del año</strong> — desde la selva tropical húmeda de la
      Lacandona hasta los altiplanos fríos de Los Altos, los valles cafetaleros del
      Soconusco, las plataformas petroleras del norte y 658 km de frontera con Guatemala.
</p> <h3>¿Cómo llamar a los Bomberos en Chiapas?</h3> <p>
En cualquier <strong>emergencia en Chiapas</strong>, marca el <strong>911</strong>
desde cualquier teléfono — fijo o celular, con o sin saldo. Para contacto directo:
<strong>Tuxtla Gutiérrez: 961 612 4692</strong> ·
<strong>San Cristóbal de las Casas: 967 678 0770</strong> ·
<strong>Tapachula: 962 626 1515</strong> ·
<strong>Comitán: 963 632 1616</strong> ·
<strong>Palenque: 916 345 0808</strong> ·
<strong>Ocosingo: 919 673 0303</strong> ·
<strong>Chiapa de Corzo: 961 616 0404</strong> ·
<strong>Tonalá: 966 663 0505</strong> ·
<strong>Reforma (PEMEX): 932 326 1010</strong> ·
<strong>Las Margaritas: 963 636 1111</strong>.
      Para emergencias en la Selva Lacandona o zonas sin cobertura celular, la estación
      de Ocosingo opera con comunicación satelital Iridium 24/7.
</p> <h3>Patrimonio UNESCO y 5 Pueblos Mágicos</h3> <p>
Chiapas concentra el mayor patrimonio cultural e histórico del sureste. Los bomberos
      protegen la <strong>Zona Arqueológica de Palenque</strong> (Patrimonio Mundial UNESCO,
      1987) — con el Templo de las Inscripciones, el Palacio y el sarcófago de
<strong>Pakal el Grande</strong> — en coordinación permanente con el INAH. También
      cubren <strong>Bonampak</strong> (murales mayas polícromos únicos en el mundo),
<strong>Yaxchilán</strong> (accesible solo por el río Usumacinta) y
<strong>Toniná</strong> (la pirámide más alta de Mesoamérica, 75 metros). Los
<strong>5 Pueblos Mágicos</strong> — San Cristóbal de las Casas, Chiapa de Corzo,
      Comitán de Domínguez, Palenque y San Juan Chamula — reciben colectivamente más de
      3 millones de visitantes al año, cada uno con estación de bomberos en respuesta activa.
</p> <h3>El Cañón del Sumidero y Rescate Acuático</h3> <p>
El <strong>Cañón del Sumidero</strong>, con paredes de hasta <strong>1,000 metros</strong>
sobre el río Grijalva, recibe más de <strong>500,000 turistas anuales</strong> que
      navegan sus 35 km en lancha. La <strong>Estación de Chiapa de Corzo</strong> — con 3
      lanchas de rescate, motos acuáticas y equipo de buceo — ha realizado más de
<strong>500 rescates acuáticos</strong> en el río. Las <strong>Cascadas de Agua Azul</strong>,
<strong>Misol-Ha</strong> y los <strong>59 Lagos de Montebello</strong> — el Parque Nacional
      más visitado del sureste — representan emergencias turísticas que atienden las estaciones
      de Palenque, Ocosingo y Comitán con lanchas de rescate lacustre especializadas.
</p> <h3>Selva Lacandona — El Mayor Desafío Forestal</h3> <p>
La <strong>Selva Lacandona</strong>, con 1.5 millones de hectáreas, es la segunda
      selva tropical más grande de América del Norte. La <strong>Reserva de la Biósfera
      Montes Azules</strong> alberga el jaguar, el tapir de Baird, el cocodrilo de pantano
      y más de 340 especies de aves. La estación de <strong>Ocosingo</strong> — que cubre
      8,887 km², el municipio más extenso de Chiapas — opera con tiempos de respuesta de
      hasta <strong>45 minutos en comunidades aisladas</strong>, mulas de carga, GPS satelital
      y brigadas forestales en coordinación con <strong>CONANP y CONAFOR</strong>. La
      temporada crítica de incendios es de febrero a mayo; en 2019, la estación combatió
      más de <strong>200 incendios</strong> que amenazaron la Reserva de la Biósfera.
</p> <h3>Bomberos en la Frontera — Soconusco y Guatemala</h3> <p>
Chiapas comparte <strong>658 km de frontera con Guatemala</strong>, la más larga de
      cualquier estado mexicano con Centroamérica. La <strong>Estación Central de
      Tapachula</strong> — segunda más grande del estado con 78 bomberos — es referente
      nacional en atención de <strong>crisis migratorias</strong>, con rescates en el
<strong>río Suchiate</strong> donde miles de migrantes cruzan diariamente.
      Coordinan operaciones binacionales con bomberos de <strong>Tecún Umán, Guatemala</strong>.
      La <strong>Estación de Puerto Chiapas</strong>, inaugurada en 2015, protege la terminal
      de cruceros del Pacífico sur — con capacidad para cruceros de <strong>4,000 pasajeros</strong>.
      En Arriaga, la estación es especialista en <strong>rescate ferroviario de La Bestia</strong>
y en los vientos del Istmo de Tehuantepec que superan los <strong>150 km/h</strong>.
</p> <h3>Zona Petrolera Norte — Complejo Cactus PEMEX</h3> <p>
La <strong>Estación de Reforma</strong> — la más especializada en hidrocarburos del
      estado con 48 bomberos y certificación internacional — custodia el <strong>Complejo
      Procesador de Gas Cactus</strong>, uno de los más grandes de México, junto con cientos
      de pozos, ductos y terminales de almacenamiento. Personal certificado en control de
      pozos por <strong>Wild Well Control</strong> y HAZMAT nivel técnico para blowouts
      (reventones), derrames de crudo e incendios de gas natural. La Estación de
<strong>Pichucalco</strong> coordina operaciones con Villahermosa, Tabasco, para
      emergencias en ductos transestatales.
</p> <h3>Especialidades del Cuerpo de Bomberos de Chiapas</h3> <p>
Los bomberos chiapanecos poseen competencias únicas en México:
<strong>USAR certificado INSARAG</strong> en la Estación Central de Tuxtla para
      rescate en estructuras colapsadas;
<strong>Academia de Bomberos del Sureste</strong> en Tuxtla Gutiérrez, que capacita
      brigadas de Chiapas, Oaxaca, Tabasco y Campeche;
<strong>atención multilingüe</strong> en San Cristóbal (español, inglés, francés,
      tzotzil, tzeltal) para turistas internacionales y comunidades indígenas;
<strong>brigadas forestales de selva tropical</strong> con equipos de supervivencia
      para operaciones de varios días sin reabastecimiento;
      y <strong>rescate ferroviario</strong> en Arriaga para el tren de carga La Bestia.
</p> <h3>Municipios y Cobertura por Zona</h3> <p> <strong>Tuxtla Gutiérrez</strong> — 3 estaciones: Central (C4 estatal, USAR INSARAG),
      Norte (industrial, Panamericana) y Oriente (Cañón del Sumidero, carretera San Cristóbal).
<strong>San Cristóbal</strong> — Pueblo Mágico a 2,200 msnm, brigada forestal Los Altos,
      comunidades tzotziles y tzeltales.
<strong>Tapachula</strong> — 2 estaciones: Central (Soconusco, cafetalera, frontera
      Guatemala) y Puerto Chiapas (cruceros del Pacífico).
<strong>Palenque</strong> — UNESCO, cascadas, Selva Lacandona, Bonampak, Yaxchilán.
<strong>Comitán</strong> — Lagos de Montebello, zona arqueológica Tenam Puente,
      frontera Guatemala.
<strong>Chiapa de Corzo</strong> — Cañón del Sumidero, río Grijalva, Fiesta Grande.
<strong>Ocosingo</strong> — Selva Lacandona, Montes Azules, comunidades Lacandón.
<strong>Reforma</strong> — Complejo Cactus PEMEX y zona petrolera norte.
</p> ` })}` })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chiapas.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/chiapas.astro";
const $$url = "/directorio/chiapas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Chiapas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
