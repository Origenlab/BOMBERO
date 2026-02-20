import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesHidalgo, E as ESTADISTICAS_HIDALGO, H as HIDALGO_SEO } from '../../chunks/estaciones-hidalgo_CCRCbrTG.mjs';
export { renderers } from '../../renderers.mjs';

const $$Hidalgo = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesHidalgo.map((e) => e.ciudad))].sort();
  const estacionesPorZona = {
    pachuca: estacionesHidalgo.filter((e) => ["Pachuca de Soto", "Mineral de la Reforma", "Real del Monte"].includes(e.ciudad)),
    industrial: estacionesHidalgo.filter((e) => ["Tula de Allende", "Tepeji del R\xEDo"].includes(e.ciudad)),
    tulancingo: estacionesHidalgo.filter((e) => ["Tulancingo", "Cuautepec de Hinojosa", "Acaxochitl\xE1n"].includes(e.ciudad)),
    pueblosMagicos: estacionesHidalgo.filter((e) => ["Huasca de Ocampo", "Mineral del Chico", "Huichapan"].includes(e.ciudad)),
    mezquital: estacionesHidalgo.filter((e) => ["Actopan", "Ixmiquilpan"].includes(e.ciudad)),
    huasteca: estacionesHidalgo.filter((e) => ["Huejutla de Reyes", "Molango"].includes(e.ciudad)),
    sur: estacionesHidalgo.filter((e) => e.ciudad === "Tizayuca")
  };
  const estadoNombre = "Hidalgo";
  const estadoSlug = "hidalgo";
  const estadoCodigo = "HGO";
  const heroTitle = "Bomberos de Hidalgo";
  const heroSubtitle = `Directorio oficial de las ${ESTADISTICAS_HIDALGO.total_estaciones} estaciones que protegen Pachuca 'La Bella Airosa', 6 Pueblos M\xE1gicos, el Corredor Industrial Tula-Tepeji y 500 a\xF1os de patrimonio minero de plata`;
  const heroDesc = `Hidalgo, con ${(HIDALGO_SEO.poblacion / 1e6).toFixed(1)} millones de habitantes, destaca por su patrimonio \xFAnico: 6 Pueblos M\xE1gicos (r\xE9cord nacional), 500 a\xF1os de miner\xEDa de plata en Real del Monte, el Acueducto del Padre Tembleque (UNESCO), y la Refiner\xEDa PEMEX Tula. Pachuca, 'La Bella Airosa', se encuentra a 2,400 msnm. Los ${ESTADISTICAS_HIDALGO.total_bomberos}+ bomberos especializados protegen industria petroqu\xEDmica, patrimonio colonial, minas hist\xF3ricas y turismo de altura con capacidad en HAZMAT, rescate minero y emergencias de monta\xF1a.`;
  const heroStats = [
    { number: `${ESTADISTICAS_HIDALGO.total_estaciones}`, label: "Estaciones" },
    { number: `${ESTADISTICAS_HIDALGO.total_bomberos}+`, label: "Bomberos" },
    { number: `${ESTADISTICAS_HIDALGO.total_unidades}`, label: "Unidades" },
    { number: "6", label: "Pueblos M\xE1gicos" }
  ];
  const heroThumbs = [
    {
      imgSrc: "/images/directorio/camion-bomberos-equipado-01.avif",
      imgAlt: "Autobomba del Cuerpo de Bomberos de Pachuca, capital de Hidalgo",
      caption: "Autobomba Central Pachuca"
    },
    {
      imgSrc: "/images/directorio/unidad-hazmat-emergencias-01.avif",
      imgAlt: "Unidad HAZMAT especializada de Bomberos Tula para Refiner\xEDa PEMEX",
      caption: "HAZMAT Refiner\xEDa Tula"
    },
    {
      imgSrc: "/images/directorio/estacion-bomberos-mexico-01.avif",
      imgAlt: "Estaci\xF3n de bomberos en Real del Monte, Pueblo M\xE1gico minero",
      caption: "Estaci\xF3n Real del Monte"
    }
  ];
  const emergencyNumbers = [
    { label: "Emergencias Nacional", number: "911", href: "tel:911" },
    { label: "Bomberos Pachuca", number: "(771) 715-8888", href: "tel:+527717158888" },
    { label: "Bomberos Tula", number: "(773) 732-3333", href: "tel:+527737323333" },
    { label: "Bomberos Tulancingo", number: "(775) 753-5555", href: "tel:+527757535555" },
    { label: "Protecci\xF3n Civil Estatal", number: "(771) 718-1100", href: "tel:+527717181100" }
  ];
  const regiones = [
    {
      id: "pachuca",
      nombre: "Zona Metropolitana Pachuca",
      icono: "\u{1F3D4}\uFE0F",
      color: "blue",
      descripcion: `**Pachuca 'La Bella Airosa'**, capital a 2,400 msnm. \xC1rea metropolitana con 500,000+ habitantes. Zona minera hist\xF3rica con 500 a\xF1os de extracci\xF3n de plata en Real del Monte con herencia brit\xE1nica (Cornish). **Reloj Monumental** (1910), s\xEDmbolo de la ciudad. Especializaci\xF3n en emergencias de altura, rescate minero, incendios forestales en sierra y protecci\xF3n del patrimonio minero colonial. Cuna del f\xFAtbol mexicano.`,
      estaciones: estacionesPorZona.pachuca.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "industrial",
      nombre: "Corredor Industrial Tula-Tepeji",
      icono: "\u{1F3ED}",
      color: "indigo",
      descripcion: `**Corredor industrial m\xE1s importante del estado** con la **Refiner\xEDa PEMEX Tula** (proceso de 315,000 barriles diarios). **Cementeras Cruz Azul y Cemex**. Plantas automotrices y qu\xEDmicas. Zona arqueol\xF3gica de Tula (capital tolteca). Especializaci\xF3n cr\xEDtica en HAZMAT petroqu\xEDmico, emergencias con hidrocarburos, incendios industriales de gran escala, evacuaciones masivas y coordinaci\xF3n con PEMEX. Personal certificado NFPA 472 T\xE9cnico.`,
      estaciones: estacionesPorZona.industrial.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "tulancingo",
      nombre: "Zona Tulancingo-Sierra Norte",
      icono: "\u{1F3DE}\uFE0F",
      color: "green",
      descripcion: `**Tulancingo: tercera ciudad del estado** con 150,000+ habitantes. Corredor textil y agroindustrial. **Acaxochitl\xE1n**: bosques de niebla y cascadas. Sierra Norte con ecosistemas \xFAnicos. Zona de transici\xF3n entre altiplano y Huasteca. Especializaci\xF3n en emergencias en industria textil, incendios forestales en bosque de oyamel, rescate en sierra y atenci\xF3n en carretera hacia Veracruz.`,
      estaciones: estacionesPorZona.tulancingo.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "pueblos-magicos",
      nombre: "Pueblos M\xE1gicos (R\xE9cord Nacional)",
      icono: "\u2B50",
      color: "amber",
      descripcion: `**6 Pueblos M\xE1gicos - r\xE9cord nacional**: Real del Monte, Huasca de Ocampo, Mineral del Chico, Huichapan, Tecozautla, Zempoala. **Huasca**: Prismas Bas\xE1lticos de Santa Mar\xEDa Regla. **El Chico**: Parque Nacional m\xE1s antiguo de M\xE9xico. **Huichapan**: arquitectura colonial otom\xED. Especializaci\xF3n en protecci\xF3n de patrimonio, turismo de aventura, rescate en formaciones geol\xF3gicas y emergencias en hoteles boutique.`,
      estaciones: estacionesPorZona.pueblosMagicos.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "mezquital",
      nombre: "Valle del Mezquital",
      icono: "\u{1F335}",
      color: "orange",
      descripcion: `**Valle del Mezquital** con sistema de irrigaci\xF3n m\xE1s grande de Latinoam\xE9rica. **Ixmiquilpan**: centro otom\xED, balnearios termales. **Actopan**: convento agustino del siglo XVI (UNESCO propuesto). Zona semi\xE1rida con maguey y producci\xF3n de pulque. Especializaci\xF3n en emergencias agroindustriales, incendios en zona \xE1rida, rescate en ca\xF1adas y protecci\xF3n de patrimonio religioso colonial.`,
      estaciones: estacionesPorZona.mezquital.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "huasteca",
      nombre: "Zona Huasteca Hidalguense",
      icono: "\u{1F334}",
      color: "teal",
      descripcion: `**Regi\xF3n Huasteca** con clima tropical. **Huejutla**: centro comercial y cultural de la Huasteca, poblaci\xF3n n\xE1huatl. **Molango**: explotaci\xF3n de manganeso. Zona de transici\xF3n hacia Veracruz con biodiversidad \xFAnica. Especializaci\xF3n en emergencias en comunidades ind\xEDgenas, inundaciones por lluvias tropicales, rescate en r\xEDos y atenci\xF3n multiling\xFCe n\xE1huatl-espa\xF1ol.`,
      estaciones: estacionesPorZona.huasteca.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    },
    {
      id: "sur",
      nombre: "Corredor Sur (Conexi\xF3n CDMX)",
      icono: "\u{1F697}",
      color: "slate",
      descripcion: `**Tizayuca**: ciudad frontera con Estado de M\xE9xico, puerta sur de Hidalgo. Zona de r\xE1pido crecimiento urbano e industrial por cercan\xEDa con CDMX (40 km). Parques industriales y log\xEDstica. Autopista M\xE9xico-Pachuca de alta intensidad vehicular. Especializaci\xF3n en rescate vehicular carretero, emergencias en parques industriales, incendios urbanos y coordinaci\xF3n con CDMX.`,
      estaciones: estacionesPorZona.sur.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/hidalgo/${e.slug}`
      }))
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/estacion-bomberos-mexico-01.avif",
      alt: "Estaci\xF3n Central de Bomberos de Pachuca, capital de Hidalgo",
      caption: "Estaci\xF3n Central Pachuca"
    },
    {
      src: "/images/directorio/camion-bomberos-equipado-01.avif",
      alt: "Unidad HAZMAT de Bomberos Tula para emergencias en Refiner\xEDa PEMEX",
      caption: "HAZMAT Refiner\xEDa Tula PEMEX"
    },
    {
      src: "/images/directorio/bomberos-accion-incendio-01.avif",
      alt: "Bomberos de Hidalgo en maniobras de rescate minero en Real del Monte",
      caption: "Rescate Minero Real del Monte"
    },
    {
      src: "/images/directorio/estacion-bomberos-moderna-01.avif",
      alt: "Estaci\xF3n de bomberos en Huasca de Ocampo, Pueblo M\xE1gico",
      caption: "Bomberos Huasca de Ocampo"
    }
  ];
  const eppCards = [
    {
      title: "Equipo HAZMAT Refiner\xEDa Tula",
      subtitle: "PEMEX 315,000 bpd",
      imgSrc: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imgAlt: "Traje HAZMAT Nivel A para emergencias en Refiner\xEDa PEMEX Tula",
      text: `Equipo especializado para emergencias en la **Refiner\xEDa PEMEX Miguel Hidalgo** en Tula de Allende, procesando 315,000 barriles diarios de petr\xF3leo crudo. Trajes encapsulados HAZMAT Nivel A totalmente herm\xE9ticos para vapores de gasolina, di\xE9sel, turbosina, gas LP, amoniaco y H\u2082S. SCBA de 60 minutos Dr\xE4ger. Detectores multigas calibrados para LEL, O\u2082, CO, H\u2082S. Trajes Nivel B para derrames l\xEDquidos. Equipos de contenci\xF3n con diques port\xE1tiles. Absorbentes Oil-Dri. Espumas AFFF clase B para hidrocarburos. Sistema de descontaminaci\xF3n con duchas qu\xEDmicas. Personal certificado NFPA 472 T\xE9cnico HAZMAT. Coordinaci\xF3n permanente con brigadas PEMEX. Simulacros mensuales obligatorios. Tiempo de respuesta 3 minutos a cualquier punto de la refiner\xEDa.`
    },
    {
      title: "Equipo Rescate Minero",
      subtitle: "Real del Monte - 500 A\xF1os Plata",
      imgSrc: "/images/directorio/equipo-rescate-tecnico-01.avif",
      imgAlt: "Equipo de rescate minero para minas hist\xF3ricas de Real del Monte",
      text: `Equipo especializado para emergencias en **minas hist\xF3ricas de plata de Real del Monte y Mineral del Chico** con 500 a\xF1os de operaci\xF3n continua. Detectores de gases en minas (metano, CO, CO\u2082, O\u2082). L\xE1mparas mineras LED con bater\xEDa de 12 horas. SCBA compactos para espacios confinados. Cuerdas de rescate Kernmantle de 200 metros. Arneses de cuerpo completo certificados ANSI. Camillas Sked para extracci\xF3n en tiros verticales. Equipos de ventilaci\xF3n port\xE1til para t\xFAneles. Detectores de movimiento s\xEDsmico. Radios UHF para comunicaci\xF3n en profundidad. Trajes ign\xEDfugos con reflectantes para trabajos subterr\xE1neos. Capacitaci\xF3n en rescate vertical y espacios confinados NFPA 1006. Coordinaci\xF3n con compa\xF1\xEDas mineras activas y PEMEX Miner\xEDa. Herencia brit\xE1nica (Cornish) en t\xE9cnicas de rescate del siglo XIX.`
    },
    {
      title: "EPP Altura y Fr\xEDo Extremo",
      subtitle: "Pachuca 2,400 msnm",
      imgSrc: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imgAlt: "Traje estructural para operaciones en altura de Pachuca",
      text: `Equipo adaptado para emergencias en **Pachuca 'La Bella Airosa'** a 2,400 metros sobre el nivel del mar con temperaturas de -5\xB0C en invierno. Trajes estructurales NFPA 1971 con capa t\xE9rmica reforzada Nomex\xAE para operaciones con fr\xEDo extremo. Capas base t\xE9rmicas de polipropileno. Guantes con forro t\xE9rmico Thinsulate\u2122. Balaclavas ign\xEDfugas. SCBA con compensaci\xF3n de presi\xF3n para altitud (menor O\u2082 atmosf\xE9rico). M\xE1scaras faciales con v\xE1lvulas anti-condensaci\xF3n. Sistemas de hidrataci\xF3n CamelBak para operaciones prolongadas en altura. Calentadores port\xE1tiles tipo torpedo para calentamiento de v\xEDctimas con hipotermia. Mantas t\xE9rmicas aluminizadas. EPP para incendios forestales en Sierra de Pachuca (bosques de oyamel y pino). Resistencia al viento de 60+ km/h caracter\xEDstico de la ciudad. Capacitaci\xF3n en fisiolog\xEDa de altura.`
    },
    {
      title: "EPP Patrimonio Pueblos M\xE1gicos",
      subtitle: "6 Pueblos - R\xE9cord Nacional",
      imgSrc: "/images/directorio/equipo-bomberos-completo-01.avif",
      imgAlt: "Equipo para protecci\xF3n de 6 Pueblos M\xE1gicos de Hidalgo",
      text: `Equipo especializado para emergencias en los **6 Pueblos M\xE1gicos de Hidalgo** (r\xE9cord nacional): Real del Monte, Huasca, Mineral del Chico, Huichapan, Tecozautla, Zempoala. Autobombas compactas para calles coloniales empedradas estrechas. Mangueras de 1.5' para acceso en callejones. Extintores port\xE1tiles para edificios hist\xF3ricos de madera y adobe del siglo XVI-XIX. Escaleras de aluminio tipo A para arquitectura colonial de 1-2 pisos. Lonas ign\xEDfugas para protecci\xF3n de fachadas con valor hist\xF3rico. L\xE1mparas LED para evitar da\xF1o t\xE9rmico en arte sacro. Herramientas manuales no destructivas. Sistema de bombeo port\xE1til para edificios sin tomas siamesas. Equipos de rescate en Prismas Bas\xE1lticos (formaciones geol\xF3gicas \xFAnicas). Protocolos de coordinaci\xF3n con INAH. Personal capacitado en protecci\xF3n de patrimonio cultural y turismo de aventura. Atenci\xF3n multiling\xFCe para turismo internacional.`
    }
  ];
  const stationImages = [
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/equipo-bomberos-completo-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/bombero-mendez-chaqueton-locker-01.avif",
    "/images/directorio/bombero-casco-proteccion-incendio-01.avif",
    "/images/directorio/casco-bombero-bullard-fx3-estacion-01.avif",
    "/images/directorio/casco-bombero-bullard-amarillo-visor-01.avif",
    "/images/directorio/bombero-hernandez-capucha-scba-estacion-01.avif",
    "/images/directorio/bombero-retrato-casco-fuego-01.avif"
  ];
  const estadosVecinos = getEstadosVecinos("hidalgo");
  const ctaTitle = "\xBFNecesitas Bomberos en Hidalgo?";
  const ctaDesc = "Encuentra la estaci\xF3n m\xE1s cercana en Pachuca, Tula, Tulancingo, Real del Monte o cualquier municipio del estado. Atenci\xF3n 24/7 en emergencias industriales, HAZMAT, rescate minero y protecci\xF3n de Pueblos M\xE1gicos.";
  const ctaBtnText = "Ver Estaciones por Municipio";
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estadoNombre": estadoNombre, "estadoSlug": estadoSlug, "estadoCodigo": estadoCodigo, "heroTitle": heroTitle, "heroSubtitle": heroSubtitle, "heroDesc": heroDesc, "heroStats": heroStats, "heroThumbs": heroThumbs, "emergencyNumbers": emergencyNumbers, "estaciones": estacionesHidalgo, "regiones": regiones, "municipios": municipios, "galleryImages": galleryImages, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "ctaTitle": ctaTitle, "ctaDesc": ctaDesc, "ctaBtnText": ctaBtnText, "alertTitle": "Corredor Industrial PEMEX | 6 Pueblos M\xE1gicos | 500 A\xF1os Miner\xEDa Plata", "alertText": "Refiner\xEDa Tula 315K bpd | Real del Monte UNESCO | Pachuca 2,400 msnm | Acueducto Padre Tembleque | Prismas Bas\xE1lticos", "seoTitle": `Bomberos de Hidalgo | ${ESTADISTICAS_HIDALGO.total_estaciones} Estaciones | Directorio Oficial HGO`, "seoDescription": `Directorio completo de las ${ESTADISTICAS_HIDALGO.total_estaciones} estaciones de bomberos en Hidalgo. ${ESTADISTICAS_HIDALGO.total_bomberos}+ bomberos protegiendo Pachuca, Tula (Refiner\xEDa PEMEX), Tulancingo, Real del Monte y 6 Pueblos M\xE1gicos. Especializaci\xF3n HAZMAT, rescate minero. Tel\xE9fonos 24/7.`, "seoKeywords": [
    "bomberos hidalgo",
    "estaciones de bomberos hidalgo",
    "emergencias hidalgo mexico",
    "bomberos pachuca",
    "bomberos tula refineria",
    "bomberos tulancingo",
    "bomberos real del monte",
    "hazmat hidalgo",
    "rescate minero hidalgo",
    "proteccion civil hidalgo",
    "911 hidalgo",
    "emergencias refineria tula",
    "bomberos pueblos magicos",
    "emergencias pachuca"
  ] })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/hidalgo.astro";
const $$url = "/directorio/hidalgo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hidalgo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
