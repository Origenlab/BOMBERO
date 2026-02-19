import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$DirectorioEstadoLayout } from '../../chunks/DirectorioEstadoLayout_DnjqJlMh.mjs';
import { e as estacionesGuerrero, E as ESTADISTICAS_GUERRERO } from '../../chunks/estaciones-guerrero_DHdXNMFX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Guerrero = createComponent(($$result, $$props, $$slots) => {
  const municipios = [...new Set(estacionesGuerrero.map((e) => e.ciudad))].sort();
  const estacionesPorZona = {
    acapulco: estacionesGuerrero.filter((e) => e.ciudad === "Acapulco de Ju\xE1rez"),
    costaGrande: estacionesGuerrero.filter((e) => ["Zihuatanejo de Azueta", "Ixtapa"].includes(e.ciudad)),
    centro: estacionesGuerrero.filter((e) => e.ciudad === "Chilpancingo de los Bravo"),
    norte: estacionesGuerrero.filter((e) => ["Iguala de la Independencia", "Taxco de Alarc\xF3n", "Teloloapan"].includes(e.ciudad)),
    costaChica: estacionesGuerrero.filter((e) => ["Ometepec", "San Marcos"].includes(e.ciudad)),
    montana: estacionesGuerrero.filter((e) => ["Tlapa de Comonfort", "Ciudad Altamirano"].includes(e.ciudad))
  };
  const estadoNombre = "Guerrero";
  const estadoSlug = "guerrero";
  const estadoCodigo = "GRO";
  const heroTitle = "Bomberos de Guerrero";
  const heroSubtitle = `Directorio oficial de las ${ESTADISTICAS_GUERRERO.total_estaciones} estaciones que protegen 500 km de costa del Pac\xEDfico, destinos tur\xEDsticos de clase mundial y comunidades en alto riesgo de huracanes y sismos`;
  const heroDesc = `Guerrero enfrenta los riesgos naturales m\xE1s extremos de M\xE9xico: huracanes categor\xEDa 5 (Otis 2023 devast\xF3 Acapulco), sismos de magnitud 8+ por la Brecha de Guerrero, y tsunamis del Pac\xEDfico. Acapulco recibe millones de turistas anuales. Taxco es la Capital Mundial de la Plata. Los ${ESTADISTICAS_GUERRERO.total_bomberos}+ bomberos especializados protegen destinos tur\xEDsticos ic\xF3nicos, comunidades costeras y zonas de monta\xF1a con capacidad \xFAnica en rescate acu\xE1tico, respuesta a huracanes y evacuaciones masivas.`;
  const heroStats = [
    { number: `${ESTADISTICAS_GUERRERO.total_estaciones}`, label: "Estaciones" },
    { number: `${ESTADISTICAS_GUERRERO.total_bomberos}+`, label: "Bomberos" },
    { number: `${ESTADISTICAS_GUERRERO.total_unidades}`, label: "Unidades" },
    { number: "500 km", label: "Costa Pac\xEDfico" }
  ];
  const heroThumbs = [
    {
      imgSrc: "/images/directorio/lancha-rescate-bomberos-01.avif",
      imgAlt: "Lancha de rescate acu\xE1tico de Bomberos Acapulco",
      caption: "Rescate Acu\xE1tico Acapulco"
    },
    {
      imgSrc: "/images/directorio/rescate-acuatico-bomberos-01.avif",
      imgAlt: "Bomberos de Guerrero en operaci\xF3n de rescate tras Hurac\xE1n Otis",
      caption: "Respuesta Hurac\xE1n Otis 2023"
    },
    {
      imgSrc: "/images/directorio/estacion-bomberos-maritimo-01.avif",
      imgAlt: "Estaci\xF3n costera de bomberos en Ixtapa-Zihuatanejo",
      caption: "Estaci\xF3n Costa Grande"
    }
  ];
  const emergencyNumbers = [
    { label: "Emergencias Nacional", number: "911", href: "tel:911" },
    { label: "Bomberos Acapulco", number: "(744) 485-0808", href: "tel:+527444850808" },
    { label: "Bomberos Chilpancingo", number: "(747) 472-0505", href: "tel:+527474720505" },
    { label: "Bomberos Zihuatanejo", number: "(755) 554-2020", href: "tel:+527555542020" },
    { label: "Bomberos Taxco", number: "(762) 622-0707", href: "tel:+527626220707" }
  ];
  const regiones = [
    {
      id: "acapulco",
      nombre: "Zona Acapulco (Tur\xEDstico Principal)",
      icono: "\u{1F3D6}\uFE0F",
      color: "cyan",
      descripcion: `**Principal destino tur\xEDstico de playa en M\xE9xico** con millones de visitantes anuales. Severamente afectado por el **Hurac\xE1n Otis (2023) Categor\xEDa 5**, el cicl\xF3n m\xE1s poderoso que jam\xE1s toc\xF3 tierra en el Pac\xEDfico oriental. 5 estaciones especializadas en emergencias tur\xEDsticas, rescate acu\xE1tico, evacuaci\xF3n de hoteles y respuesta a desastres. Cobertura a Zona Dorada, Diamante, aeropuerto y puerto de cruceros.`,
      estaciones: estacionesPorZona.acapulco.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    },
    {
      id: "costa-grande",
      nombre: "Costa Grande (Ixtapa-Zihuatanejo)",
      icono: "\u{1F334}",
      color: "teal",
      descripcion: `**Ixtapa: desarrollo tur\xEDstico planificado** con resorts todo incluido. **Zihuatanejo: tradicional pueblo pesquero** convertido en destino de clase mundial. Especializaci\xF3n en rescate acu\xE1tico, emergencias en hoteles, protecci\xF3n de turismo internacional y coordinaci\xF3n con operadores mar\xEDtimos. Atenci\xF3n biling\xFCe para visitantes de Estados Unidos y Canad\xE1.`,
      estaciones: estacionesPorZona.costaGrande.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    },
    {
      id: "centro",
      nombre: "Zona Centro (Capital Chilpancingo)",
      icono: "\u{1F3DB}\uFE0F",
      color: "blue",
      descripcion: `**Capital del estado** con 280,000+ habitantes. Centro de coordinaci\xF3n estatal para emergencias mayores. Ubicada en la **Brecha de Guerrero**, zona de alt\xEDsimo riesgo s\xEDsmico con potencial de magnitud 8.4. Especializaci\xF3n en respuesta s\xEDsmica USAR, colapso de estructuras, rescate vehicular en Autopista del Sol y emergencias en edificios gubernamentales.`,
      estaciones: estacionesPorZona.centro.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    },
    {
      id: "norte",
      nombre: "Zona Norte (Taxco-Iguala)",
      icono: "\u{1F48E}",
      color: "slate",
      descripcion: `**Taxco: Capital Mundial de la Plata**, Pueblo M\xE1gico con arquitectura colonial del siglo XVIII. Calles empedradas estrechas requieren t\xE9cnicas especializadas. **Iguala: Cuna de la Bandera de M\xE9xico**. Especializaci\xF3n en protecci\xF3n de patrimonio colonial, emergencias en 1,200 talleres de plater\xEDa (soplete, qu\xEDmicos), rescate en terreno monta\xF1oso y carreteras de alta pendiente.`,
      estaciones: estacionesPorZona.norte.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    },
    {
      id: "costa-chica",
      nombre: "Costa Chica (Afromexicana)",
      icono: "\u{1F30A}",
      color: "amber",
      descripcion: `**Regi\xF3n de importante poblaci\xF3n afromexicana** con tradiciones culturales \xFAnicas. Zona costera entre Acapulco y Oaxaca. Especializaci\xF3n en emergencias por inundaciones durante temporada de lluvias y huracanes, rescate en comunidades remotas, coordinaci\xF3n intercultural y atenci\xF3n en Carretera Federal 200 (Costera del Pac\xEDfico).`,
      estaciones: estacionesPorZona.costaChica.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    },
    {
      id: "montana",
      nombre: "Monta\xF1a y Tierra Caliente",
      icono: "\u{1F3D4}\uFE0F",
      color: "emerald",
      descripcion: `**Tlapa: centro de la regi\xF3n Monta\xF1a** con poblaci\xF3n ind\xEDgena Nahua, Mixteca y Tlapaneca. **Ciudad Altamirano: Tierra Caliente** con temperaturas extremas superiores a 40\xB0C. Especializaci\xF3n en rescate en sierra, incendios forestales, deslaves, atenci\xF3n culturalmente apropiada a comunidades ind\xEDgenas y emergencias por calor extremo.`,
      estaciones: estacionesPorZona.montana.map((e) => ({
        nombre: e.nombreCorto,
        direccion: e.direccion,
        telefono: e.telefono,
        slug: `/directorio/guerrero/${e.slug}`
      }))
    }
  ];
  const galleryImages = [
    {
      src: "/images/directorio/estacion-bomberos-playa-01.avif",
      alt: "Estaci\xF3n Central de Bomberos de Acapulco con vista a la bah\xEDa",
      caption: "Estaci\xF3n Central Acapulco"
    },
    {
      src: "/images/directorio/rescate-swift-water-rios-01.avif",
      alt: "Bomberos de Guerrero en operaci\xF3n de rescate acu\xE1tico tras hurac\xE1n",
      caption: "Rescate Acu\xE1tico Hurac\xE1n Otis"
    },
    {
      src: "/images/directorio/estacion-bomberos-puerto-01.avif",
      alt: "Estaci\xF3n de bomberos de Ixtapa-Zihuatanejo en zona tur\xEDstica",
      caption: "Bomberos Ixtapa-Zihuatanejo"
    },
    {
      src: "/images/directorio/estacion-bomberos-turistica-01.avif",
      alt: "Estaci\xF3n de Bomberos de Taxco, Capital Mundial de la Plata",
      caption: "Bomberos Taxco Pueblo M\xE1gico"
    }
  ];
  const eppCards = [
    {
      title: "Equipo Rescate Acu\xE1tico",
      subtitle: "Especializaci\xF3n Costa del Pac\xEDfico",
      imgSrc: "/images/directorio/traje-inmersion-rescate-01.avif",
      imgAlt: "Traje de inmersi\xF3n para rescate acu\xE1tico en costa de Guerrero",
      text: `Equipo completo para rescate acu\xE1tico en las 500 km de costa del Pac\xEDfico mexicano. Trajes de neopreno 5mm con flotabilidad incorporada para rescate en mar abierto con oleaje de 2-4 metros. Aletas de propulsi\xF3n tipo rescue fin. Chalecos salvavidas tipo V PFD certificados USCG con arn\xE9s integrado. Cascos de rescate acu\xE1tico Protec. Motos acu\xE1ticas Yamaha VXR homologadas para rescate. Lanchas inflables de alto bordo con motor fuera de borda 90HP. Cuerdas de rescate flotantes de 100 metros. Obligatorio en Acapulco, Ixtapa-Zihuatanejo, Costa Chica y todas las estaciones costeras. Capacitaci\xF3n anual en rescate con oleaje y corrientes del Pac\xEDfico.`
    },
    {
      title: "Equipo Respuesta Huracanes",
      subtitle: "Post-Hurac\xE1n Otis (Cat. 5)",
      imgSrc: "/images/directorio/equipo-rescate-completo-01.avif",
      imgAlt: "Equipo especializado para respuesta a huracanes categor\xEDa 5 en Guerrero",
      text: `Equipo reforzado tras el **Hurac\xE1n Otis (2023)**, el cicl\xF3n m\xE1s poderoso que jam\xE1s toc\xF3 tierra en el Pac\xEDfico oriental con vientos de 270 km/h. Trajes impermeables nivel 3 resistentes a lluvia horizontal y vientos huracanados. Generadores de emergencia Caterpillar 45 kVA con autonom\xEDa 72 horas. Equipos de comunicaci\xF3n satelital Iridium cuando caen las torres celulares. Motosierras Stihl MS 881 para remoci\xF3n de \xE1rboles ca\xEDdos. Bombas sumergibles Honda de 3' para inundaciones. Equipo USAR ligero para colapso de estructuras. Lanchas inflables para evacuaci\xF3n en zonas inundadas. Kit m\xE9dico de trauma para 100 personas. Suministros de emergencia para 7 d\xEDas. Obligatorio temporada de huracanes (junio-noviembre) en toda la costa de Guerrero.`
    },
    {
      title: "Equipo Rescate S\xEDsmico USAR",
      subtitle: "Brecha de Guerrero",
      imgSrc: "/images/directorio/equipo-rescate-tecnico-01.avif",
      imgAlt: "Equipo de b\xFAsqueda y rescate USAR para sismos en la Brecha de Guerrero",
      text: `Equipo especializado USAR (Urban Search and Rescue) para la **Brecha de Guerrero**, zona de subducci\xF3n con potencial de sismo magnitud 8.4+. C\xE1maras de b\xFAsqueda Delsar con detecci\xF3n de v\xEDctimas bajo escombros hasta 30 metros. Detectores ac\xFAsticos de vida Geophone. Perros de b\xFAsqueda certificados FEMA. Equipo de apuntalamiento con puntales met\xE1licos extensibles. Herramientas de corte hidr\xE1ulico Holmatro para concreto reforzado. Rompe-concretos neum\xE1ticos Bosch. Gr\xFAas port\xE1tiles tirfor de 3 toneladas. Iluminaci\xF3n de emergencia con torres de 1,000W. Equipo de protecci\xF3n con casco de rescate estructural, rodilleras y guantes anti-corte Kevlar. Obligatorio en Chilpancingo, Acapulco e Iguala. Certificaci\xF3n internacional INSARAG Medium.`
    },
    {
      title: "EPP Patrimonio Colonial",
      subtitle: "Taxco Pueblo M\xE1gico",
      imgSrc: "/images/directorio/equipo-bomberos-personal-01.avif",
      imgAlt: "Equipo especializado para protecci\xF3n de patrimonio colonial en Taxco",
      text: `Equipo especializado para emergencias en **Taxco de Alarc\xF3n**, Capital Mundial de la Plata y Pueblo M\xE1gico con arquitectura colonial del siglo XVIII. Autobombas compactas Isuzu de &lt;2.2m ancho para callejones empedrados estrechos con pendientes de 15-20%. Mangueras de 1.5' para maniobra en espacios reducidos. Extintores port\xE1tiles ABC 20 lb para talleres de plater\xEDa (soplete, ceras, qu\xEDmicos). Escaleras de aluminio tipo A de 3 metros para edificios coloniales de baja altura. Lonas ign\xEDfugas para protecci\xF3n de fachadas hist\xF3ricas. L\xE1mparas LED de bajo calor para evitar da\xF1o t\xE9rmico en retablos de madera dorada del siglo XVII. Herramientas manuales no destructivas. Trajes estructurales con cuidado especial en tejas de barro y balcones de hierro forjado. Coordinaci\xF3n con INAH para intervenciones en monumentos hist\xF3ricos.`
    }
  ];
  const stationImages = estacionesGuerrero.map((_, idx) => ({
    src: `/images/directorio/estacion-bomberos-${idx % 4 + 1}.avif`,
    alt: `Imagen estaci\xF3n ${idx + 1}`
  }));
  const estadosVecinos = [
    { nombre: "Michoac\xE1n", slug: "michoacan" },
    { nombre: "Estado de M\xE9xico", slug: "estado-de-mexico" },
    { nombre: "Morelos", slug: "morelos" },
    { nombre: "Puebla", slug: "puebla" },
    { nombre: "Oaxaca", slug: "oaxaca" },
    { nombre: "Ciudad de M\xE9xico", slug: "ciudad-de-mexico" }
  ];
  const ctaTitle = "\xBFNecesitas Bomberos en Guerrero?";
  const ctaDesc = "Encuentra la estaci\xF3n m\xE1s cercana en Acapulco, Chilpancingo, Ixtapa-Zihuatanejo, Taxco o cualquier municipio del estado. Atenci\xF3n 24/7 en emergencias costeras, rescate acu\xE1tico y respuesta a huracanes.";
  const ctaBtnText = "Ver Estaciones por Municipio";
  return renderTemplate`${renderComponent($$result, "DirectorioEstadoLayout", $$DirectorioEstadoLayout, { "estadoNombre": estadoNombre, "estadoSlug": estadoSlug, "estadoCodigo": estadoCodigo, "heroTitle": heroTitle, "heroSubtitle": heroSubtitle, "heroDesc": heroDesc, "heroStats": heroStats, "heroThumbs": heroThumbs, "emergencyNumbers": emergencyNumbers, "estaciones": estacionesGuerrero, "regiones": regiones, "municipios": municipios, "galleryImages": galleryImages, "eppCards": eppCards, "stationImages": stationImages, "estadosVecinos": estadosVecinos, "ctaTitle": ctaTitle, "ctaDesc": ctaDesc, "ctaBtnText": ctaBtnText, "alertTitle": "ZONA DE ALTO RIESGO: Huracanes Cat. 5 | Sismos M8+ | Tsunamis Pac\xEDfico", "alertText": "Hurac\xE1n Otis (2023) | Brecha de Guerrero | 500 km de costa | 12M turistas/a\xF1o | Rescate acu\xE1tico especializado", "seoTitle": `Bomberos de Guerrero | ${ESTADISTICAS_GUERRERO.total_estaciones} Estaciones | Directorio Oficial GRO`, "seoDescription": `Directorio completo de las ${ESTADISTICAS_GUERRERO.total_estaciones} estaciones de bomberos en Guerrero. ${ESTADISTICAS_GUERRERO.total_bomberos}+ bomberos protegiendo Acapulco, Ixtapa-Zihuatanejo, Chilpancingo y Taxco. Especializaci\xF3n en huracanes, rescate acu\xE1tico y emergencias tur\xEDsticas. Tel\xE9fonos 24/7.`, "seoKeywords": [
    "bomberos guerrero",
    "estaciones de bomberos guerrero",
    "emergencias guerrero mexico",
    "bomberos acapulco",
    "bomberos ixtapa zihuatanejo",
    "bomberos chilpancingo",
    "bomberos taxco",
    "rescate acuatico guerrero",
    "emergencias huracanes acapulco",
    "huracan otis bomberos",
    "proteccion civil guerrero",
    "911 guerrero",
    "emergencias costa guerrero",
    "bomberos playas guerrero"
  ] })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/directorio/guerrero.astro";
const $$url = "/directorio/guerrero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Guerrero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
