import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { g as getEstadosVecinos, $ as $$DirectorioEstadoLayout } from '../../chunks/estados-vecinos_UaDPHCLw.mjs';
import { e as estacionesGuanajuato, E as ESTADISTICAS_GUANAJUATO } from '../../chunks/estaciones-guanajuato_BlzDgO1R.mjs';
export { renderers } from '../../renderers.mjs';

const $$Guanajuato = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesGuanajuato.map((e) => e.ciudad))].sort();
  const estacionesPorZona = {
    leon: estacionesGuanajuato.filter((e) => e.ciudad === "Le\xF3n" || e.ciudad === "Silao de la Victoria"),
    corredorIndustrial: estacionesGuanajuato.filter((e) => ["Celaya", "Salamanca", "Villagr\xE1n", "Apaseo el Grande"].includes(e.ciudad)),
    capital: estacionesGuanajuato.filter((e) => e.ciudad === "Guanajuato"),
    bajioNorte: estacionesGuanajuato.filter((e) => ["Irapuato", "San Francisco del Rinc\xF3n", "P\xE9njamo"].includes(e.ciudad)),
    pueblosMagicos: estacionesGuanajuato.filter((e) => ["San Miguel de Allende", "Dolores Hidalgo"].includes(e.ciudad))
  };
  const estadoNombre = "Guanajuato";
  const estadoSlug = "guanajuato";
  const estadoCodigo = "GTO";
  const heroTitle = "Bomberos de Guanajuato";
  const heroSubtitle = `Directorio oficial de las ${ESTADISTICAS_GUANAJUATO.total_estaciones} estaciones que protegen el Corredor Industrial del Baj\xEDo, la Capital del Calzado y los Pueblos M\xE1gicos m\xE1s visitados de M\xE9xico`;
  const heroDesc = `Guanajuato es el l\xEDder nacional en producci\xF3n automotriz con plantas de Toyota, GM, Mazda y Honda. Le\xF3n concentra el 70% de la producci\xF3n nacional de calzado. La Refiner\xEDa PEMEX Salamanca procesa 220,000 barriles diarios. San Miguel de Allende ha sido votada #1 ciudad del mundo. Los ${ESTADISTICAS_GUANAJUATO.total_bomberos}+ bomberos especializados protegen este patrimonio industrial, cultural y tur\xEDstico.`;
  const heroStats = [
    { number: `${ESTADISTICAS_GUANAJUATO.total_estaciones}`, label: "Estaciones" },
    { number: `${ESTADISTICAS_GUANAJUATO.total_bomberos}+`, label: "Bomberos" },
    { number: `${ESTADISTICAS_GUANAJUATO.total_unidades}`, label: "Unidades" },
    { number: `${municipios.length}`, label: "Municipios" }
  ];
  const heroThumbs = [
    {
      imgSrc: "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
      imgAlt: "Autobomba urbana del Cuerpo de Bomberos de Le\xF3n, Guanajuato",
      caption: "Autobomba Central Le\xF3n"
    },
    {
      imgSrc: "/images/directorio/unidad-hazmat-emergencias-01.avif",
      imgAlt: "Unidad HAZMAT especializada Refiner\xEDa Salamanca",
      caption: "Unidad HAZMAT Salamanca"
    },
    {
      imgSrc: "/images/directorio/bomberos-profesionales-accion-01.avif",
      imgAlt: "Bomberos de Guanajuato en maniobras de rescate industrial",
      caption: "Rescate Industrial GTO"
    }
  ];
  const emergencyNumbers = [
    { label: "Emergencias Nacional", number: "911", href: "tel:911" },
    { label: "Bomberos Le\xF3n", number: "(477) 712-5555", href: "tel:+524777125555" },
    { label: "Bomberos Celaya", number: "(461) 612-3222", href: "tel:+524616123222" },
    { label: "Bomberos Salamanca", number: "(464) 648-0808", href: "tel:+524646480808" },
    { label: "Bomberos Irapuato", number: "(462) 626-2222", href: "tel:+524626262222" }
  ];
  const regiones = [
    {
      id: "leon",
      nombre: "Zona Metropolitana Le\xF3n",
      icono: "\u{1F45F}",
      color: "blue",
      descripcion: `**Ciudad m\xE1s poblada del estado** con 1.6+ millones de habitantes. Le\xF3n es la **Capital Mundial del Calzado** concentrando el 70% de la producci\xF3n nacional con 1,500+ empresas. Silao alberga plantas de **Toyota, Mazda y Honda**. Especializaci\xF3n en emergencias industriales, HAZMAT solventes y operaciones automotrices.`,
      estaciones: estacionesPorZona.leon.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guanajuato/${e.slug}`
      }))
    },
    {
      id: "corredor-industrial",
      nombre: "Corredor Industrial Baj\xEDo",
      icono: "\u{1F697}",
      color: "indigo",
      descripcion: `**Principal corredor automotriz de M\xE9xico** con plantas Honda y proveedoras tier-1. Salamanca alberga la **Refiner\xEDa PEMEX** procesando 220,000 barriles diarios. Celaya es el centro log\xEDstico industrial. Especializaci\xF3n en HAZMAT petroqu\xEDmico, emergencias automotrices e incendios industriales de alta complejidad.`,
      estaciones: estacionesPorZona.corredorIndustrial.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guanajuato/${e.slug}`
      }))
    },
    {
      id: "capital",
      nombre: "Capital Guanajuato (UNESCO)",
      icono: "\u{1F3DB}\uFE0F",
      color: "amber",
      descripcion: `**Patrimonio de la Humanidad UNESCO desde 1988**. Ciudad colonial con t\xFAneles viales, callejones estrechos y arquitectura hist\xF3rica \xFAnica. Sede del **Festival Internacional Cervantino**, el m\xE1s importante de Am\xE9rica Latina. Especializaci\xF3n en protecci\xF3n patrimonial, emergencias en espacios subterr\xE1neos y eventos masivos.`,
      estaciones: estacionesPorZona.capital.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guanajuato/${e.slug}`
      }))
    },
    {
      id: "bajio-norte",
      nombre: "Zona Baj\xEDo Norte (Agroindustrial)",
      icono: "\u{1F353}",
      color: "green",
      descripcion: `**Irapuato: Capital Mundial de la Fresa**. Zona agroindustrial con empacadoras de exportaci\xF3n, c\xE1maras de refrigeraci\xF3n y procesadoras de alimentos. San Francisco del Rinc\xF3n destaca en industria del calzado y sombrero. Especializaci\xF3n en emergencias agroindustriales, sistemas de refrigeraci\xF3n y zonas rurales.`,
      estaciones: estacionesPorZona.bajioNorte.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guanajuato/${e.slug}`
      }))
    },
    {
      id: "pueblos-magicos",
      nombre: "Pueblos M\xE1gicos (Turismo Premium)",
      icono: "\u2B50",
      color: "rose",
      descripcion: `**San Miguel de Allende: #1 Ciudad del Mundo** seg\xFAn Cond\xE9 Nast Traveler y Travel+Leisure. **Dolores Hidalgo: Cuna de la Independencia Nacional**. Guanajuato cuenta con 7 Pueblos M\xE1gicos. Especializaci\xF3n en protecci\xF3n patrimonial, atenci\xF3n multiling\xFCe y emergencias en turismo de lujo.`,
      estaciones: estacionesPorZona.pueblosMagicos.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guanajuato/${e.slug}`
      }))
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/estacion-bomberos-mexico-01.avif",
      alt: "Estaci\xF3n Central de Bomberos de Le\xF3n, la m\xE1s grande de Guanajuato",
      caption: "Estaci\xF3n Central Le\xF3n"
    },
    {
      src: "/images/directorio/camion-bomberos-equipado-01.avif",
      alt: "Unidad HAZMAT especializada de Bomberos Salamanca para emergencias en refiner\xEDa",
      caption: "HAZMAT Refiner\xEDa Salamanca"
    },
    {
      src: "/images/directorio/bomberos-accion-incendio-01.avif",
      alt: "Bomberos de Guanajuato combatiendo incendio industrial en planta automotriz",
      caption: "Incendio Industrial Corredor Baj\xEDo"
    },
    {
      src: "/images/directorio/estacion-bomberos-moderna-01.avif",
      alt: "Estaci\xF3n de Bomberos San Miguel de Allende, Pueblo M\xE1gico UNESCO",
      caption: "Bomberos San Miguel de Allende"
    }
  ];
  const eppCards = [
    {
      title: "Traje Estructural NFPA 1971",
      subtitle: "Incendios Industriales Automotrices",
      imgSrc: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif",
      imgAlt: "Traje estructural certificado NFPA 1971 para bomberos industriales de Le\xF3n y Celaya",
      text: `Traje ign\xEDfugo de 3 capas certificado NFPA 1971 para combate de incendios en plantas automotrices (pintura, solventes, espumas), curtidur\xEDas y f\xE1bricas de calzado. Barrera t\xE9rmica Nomex\xAE con resistencia hasta 500\xB0C. Reflectantes 3M Scotchlite\u2122 para visibilidad en operaciones nocturnas industriales. Sistema de bolsillos para radio y herramientas. Refuerzos en rodillas y codos para trabajo en plantas. Obligatorio en Le\xF3n (calzado), Silao (Toyota/Mazda/Honda) y corredor Celaya-Salamanca.`
    },
    {
      title: "Equipo HAZMAT Nivel A",
      subtitle: "Refiner\xEDa PEMEX Salamanca",
      imgSrc: "/images/directorio/traje-hazmat-nivel-a-01.avif",
      imgAlt: "Traje HAZMAT Nivel A para emergencias petroqu\xEDmicas en Refiner\xEDa Salamanca",
      text: `Traje encapsulado totalmente herm\xE9tico para emergencias con hidrocarburos y productos petroqu\xEDmicos en la Refiner\xEDa Antonio M. Amor de Salamanca (220,000 bpd). Protecci\xF3n contra vapores de gasolina, di\xE9sel, turbosina, amoniaco y \xE1cido sulfh\xEDdrico (H\u2082S). SCBA interno 60 minutos. Resistencia qu\xEDmica a derivados del petr\xF3leo seg\xFAn NFPA 1991. Botines integrados anti-est\xE1ticos. V\xE1lvula de sobrepresi\xF3n. Uso con detectores multigas calibrados para H\u2082S, LEL, O\u2082 y CO. Certificaci\xF3n anual obligatoria. Personal exclusivo de Salamanca y equipos de respuesta HAZMAT regional.`
    },
    {
      title: "Botas Industriales Di\xE9lectricas",
      subtitle: "Zonas Automotrices y Calzado",
      imgSrc: "/images/directorio/botas-bombero-proteccion-01.avif",
      imgAlt: "Botas diel\xE9ctricas de bombero para emergencias en plantas industriales de Guanajuato",
      text: `Botas de seguridad diel\xE9ctrica certificadas ASTM F2413 clase 75 para emergencias en plantas automotrices con sistemas el\xE9ctricos de alto voltaje (prensas, hornos de pintura, robots industriales). Punta de acero ASTM F2413. Entresuela Kevlar\xAE anti-perforaci\xF3n. Suela antideslizante Vibram\xAE para pisos industriales con aceites y solventes. Resistencia qu\xEDmica a adhesivos de calzado y qu\xEDmicos de curtido (Le\xF3n). Ca\xF1a de 12' con protecci\xF3n a salpicaduras de metales fundidos. Impermeables Gore-Tex\xAE. Obligatorias en Le\xF3n, Silao, Celaya y zona automotriz.`
    },
    {
      title: "EPP Patrimonio UNESCO",
      subtitle: "San Miguel de Allende y Capital",
      imgSrc: "/images/directorio/equipo-bomberos-completo-01.avif",
      imgAlt: "Equipo especializado para protecci\xF3n de patrimonio UNESCO en Guanajuato",
      text: `Equipo especializado para emergencias en **sitios Patrimonio de la Humanidad UNESCO**: Ciudad de Guanajuato y San Miguel de Allende. Mangueras de 1.5' para acceso en callejones estrechos coloniales. Extintores port\xE1tiles ABC/K para estructuras hist\xF3ricas de madera del siglo XVII-XVIII. Trajes estructurales con cuidado en fachadas hist\xF3ricas. L\xE1mparas LED de bajo calor para evitar da\xF1o t\xE9rmico a murales y retablos. Herramientas manuales no destructivas. Lonas protectoras para objetos de valor art\xEDstico. Protocolos de coordinaci\xF3n con INAH. Obligatorio en centros hist\xF3ricos de Guanajuato capital, San Miguel de Allende y Dolores Hidalgo.`
    }
  ];
  const stationImages = [
    "/images/directorio/estacion-bomberos-central-edificio-01.avif",
    "/images/directorio/camion-bomberos-autobomba-urbana-01.avif",
    "/images/directorio/bomberos-profesionales-accion-01.avif",
    "/images/directorio/equipo-bomberos-completo-01.avif",
    "/images/directorio/estacion-bomberos-moderna-01.avif",
    "/images/directorio/camion-bomberos-moderno-01.avif",
    "/images/directorio/bombero-rodriguez-equipo-epp-vestidor-01.avif",
    "/images/directorio/bombero-respuesta-rapida-estacion-02.avif",
    "/images/directorio/bombero-profesional-closeup-servicio-01.avif",
    "/images/directorio/bombero-hernandez-capucha-scba-estacion-02.avif",
    "/images/directorio/bombero-chaqueton-estacion-servicio-01.avif",
    "/images/directorio/estacion-bomberos-guardia-nocturna-02.avif"
  ];
  const estadosVecinos = getEstadosVecinos("guanajuato");
  const ctaTitle = "\xBFNecesitas Bomberos en Guanajuato?";
  const ctaDesc = "Encuentra la estaci\xF3n m\xE1s cercana en Le\xF3n, Celaya, Irapuato, San Miguel de Allende o cualquier municipio del estado. Atenci\xF3n 24/7 en emergencias industriales, HAZMAT y rescate.";
  const ctaBtnText = "Ver Estaciones por Municipio";
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estadoNombre": estadoNombre, "estadoSlug": estadoSlug, "estadoCodigo": estadoCodigo, "heroTitle": heroTitle, "heroSubtitle": heroSubtitle, "heroDesc": heroDesc, "heroStats": heroStats, "heroThumbs": heroThumbs, "emergencyNumbers": emergencyNumbers, "estaciones": estacionesGuanajuato, "regiones": regiones, "municipios": municipios, "galleryImages": galleryImages, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "ctaTitle": ctaTitle, "ctaDesc": ctaDesc, "ctaBtnText": ctaBtnText, "alertTitle": "Corredor Industrial del Baj\xEDo - Capital Automotriz de M\xE9xico", "alertText": "#1 productor de veh\xEDculos | Toyota, GM, Mazda, Honda | Refiner\xEDa PEMEX Salamanca | Capital del Calzado (70% producci\xF3n nacional)", "seoTitle": `Bomberos de Guanajuato | ${ESTADISTICAS_GUANAJUATO.total_estaciones} Estaciones | Directorio Oficial GTO`, "seoDescription": `Directorio completo de las ${ESTADISTICAS_GUANAJUATO.total_estaciones} estaciones de bomberos en Guanajuato. ${ESTADISTICAS_GUANAJUATO.total_bomberos}+ bomberos protegiendo Le\xF3n, Celaya, Irapuato, San Miguel de Allende y la refiner\xEDa de Salamanca. Tel\xE9fonos, direcciones y servicios 24/7.`, "seoKeywords": [
    "bomberos guanajuato",
    "estaciones de bomberos guanajuato",
    "emergencias guanajuato mexico",
    "bomberos leon guanajuato",
    "bomberos celaya",
    "bomberos salamanca refineria",
    "bomberos irapuato",
    "bomberos san miguel de allende",
    "cuerpo de bomberos guanajuato",
    "proteccion civil guanajuato",
    "911 guanajuato",
    "emergencias industriales guanajuato",
    "bomberos bajio",
    "hazmat guanajuato"
  ] })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guanajuato.astro";
const $$url = "/directorio/guanajuato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guanajuato,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
