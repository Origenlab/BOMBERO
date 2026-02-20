import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/botas-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Membrana Gore-Tex\xAE Crosstech\xAE \u2014 Impermeabilidad Total",
      descripcion: "Membrana Gore-Tex\xAE Crosstech\xAE que bloquea completamente la entrada de agua, sangre, fluidos corporales y l\xEDquidos contaminados. La tecnolog\xEDa de microporos permite que el vapor de sudor escape mientras bloquea l\xEDquidos externos. El pie permanece seco en cualquier condici\xF3n.",
      specs: [
        { label: "Membrana", valor: "Gore-Tex\xAE Crosstech\xAE" },
        { label: "Agua", valor: "100% impermeable" },
        { label: "Sangre/fluidos", valor: "Barrera certificada" },
        { label: "Transpirable", valor: "S\xED \u2014 vapor de sudor" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Sellado de Costuras \u2014 Sin Puntos de Filtraci\xF3n",
      descripcion: "Todas las costuras de la bota est\xE1n selladas con cinta impermeable Gore-Seam\xAE. Los puntos donde la aguja perfora el material son los puntos d\xE9biles de cualquier prenda \u2014 el sellado elimina estas filtraciones potenciales creando una barrera continua.",
      specs: [
        { label: "Sellado", valor: "Gore-Seam\xAE certificado" },
        { label: "Costuras", valor: "100% selladas" },
        { label: "Filtraciones", valor: "Eliminadas" },
        { label: "Durabilidad", valor: "Toda la vida \xFAtil" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Bloodborne Pathogen \u2014 Barrera Contra Pat\xF3genos",
      descripcion: "La membrana Gore-Tex\xAE Crosstech\xAE est\xE1 certificada como barrera contra pat\xF3genos transmitidos por sangre (bloodborne pathogens). Protege al bombero durante rescates donde hay exposici\xF3n a fluidos corporales, sangre de v\xEDctimas o l\xEDquidos potencialmente infectados.",
      specs: [
        { label: "Certificaci\xF3n", valor: "ASTM F1671" },
        { label: "Pat\xF3genos", valor: "Barrera completa" },
        { label: "Sangre", valor: "No penetra" },
        { label: "Fluidos corporales", valor: "Bloqueados" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Gore-Tex\xAE", label: "Membrana", valor: "Gore-Tex\xAE Crosstech\xAE" },
    { categoria: "Gore-Tex\xAE", label: "Impermeabilidad", valor: "100% \u2014 prueba hidrost\xE1tica" },
    { categoria: "Gore-Tex\xAE", label: "Transpirabilidad", valor: "Vapor de sudor escapa" },
    { categoria: "Gore-Tex\xAE", label: "Sellado costuras", valor: "Gore-Seam\xAE certificado" },
    { categoria: "Gore-Tex\xAE", label: "Bloodborne pathogen", valor: "ASTM F1671 barrera" },
    { categoria: "Gore-Tex\xAE", label: "Sangre/fluidos", valor: "Bloqueados completamente" },
    { categoria: "Construcci\xF3n", label: "Material exterior", valor: "Cuero grain premium 2.4-2.6 mm" },
    { categoria: "Construcci\xF3n", label: "Forro interior", valor: "Nomex\xAE IIIA + Gore-Tex\xAE" },
    { categoria: "Construcci\xF3n", label: "Plantilla", valor: "Kevlar\xAE anti-perforaci\xF3n" },
    { categoria: "Construcci\xF3n", label: "Altura ca\xF1a", valor: '10" (25.4 cm) est\xE1ndar' },
    { categoria: "Protecci\xF3n", label: "Puntera", valor: "Acero ASTM F2413-18 I/75 C/75" },
    { categoria: "Suela", label: "Modelo", valor: "Vibram\xAE 148 Fire & Ice" },
    { categoria: "Suela", label: "Temperatura", valor: "-40\xB0C a +300\xB0C" },
    { categoria: "Ergonom\xEDa", label: "Peso por bota", valor: "1,150 g (talla 9)" },
    { categoria: "Ergonom\xEDa", label: "Rango de tallas", valor: "5-14 US (38-48 MX)" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" }
  ];
  const catClass = {
    "Gore-Tex\xAE": "construccion",
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Suela": "construccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Rescate en Inundaciones",
      desc: "Operaciones donde el bombero camina en agua hasta las rodillas o m\xE1s. El pie permanece completamente seco gracias a la membrana Gore-Tex\xAE impermeable."
    },
    {
      titulo: "Emergencias con Lluvia Intensa",
      desc: "Incidentes durante tormentas donde el agua cae constantemente. La bota impermeable mantiene al bombero seco y c\xF3modo durante horas de operaci\xF3n."
    },
    {
      titulo: "Rescate Acu\xE1tico Superficial",
      desc: "Rescates en r\xEDos, lagos y zonas inundadas donde hay exposici\xF3n a agua contaminada. La barrera protege contra pat\xF3genos del agua."
    },
    {
      titulo: "Escenas con Fluidos Corporales",
      desc: "Emergencias m\xE9dicas y accidentes vehiculares con sangre. La certificaci\xF3n bloodborne pathogen protege al bombero de exposici\xF3n a pat\xF3genos."
    }
  ];
  const faqs = [
    {
      q: "\xBFLa bota Gore-Tex\xAE es 100% impermeable?",
      a: "S\xED. La membrana <strong>Gore-Tex\xAE Crosstech\xAE</strong> est\xE1 certificada para impermeabilidad total mediante prueba hidrost\xE1tica. Las costuras est\xE1n selladas con cinta <strong>Gore-Seam\xAE</strong> que elimina puntos de filtraci\xF3n. El pie permanece seco incluso caminando en agua durante horas."
    },
    {
      q: "\xBFLa bota impermeable transpira?",
      a: "S\xED. La tecnolog\xEDa <strong>Gore-Tex\xAE</strong> usa microporos que son lo suficientemente peque\xF1os para bloquear agua l\xEDquida pero lo suficientemente grandes para permitir que el <strong>vapor de sudor escape</strong>. El pie respira naturalmente sin acumular humedad interior."
    },
    {
      q: "\xBFQu\xE9 significa bloodborne pathogen?",
      a: "La certificaci\xF3n <strong>ASTM F1671 bloodborne pathogen</strong> significa que la membrana bloquea pat\xF3genos transmitidos por sangre (VIH, hepatitis, etc.). En emergencias m\xE9dicas con exposici\xF3n a sangre, la bota protege al bombero de infecci\xF3n a trav\xE9s del calzado."
    },
    {
      q: "\xBFLa bota Gore-Tex\xAE sirve para buceo?",
      a: "No. La bota <strong>Gore-Tex\xAE impermeable</strong> es para caminar en agua superficial (inundaciones, rescate en r\xEDos). Para buceo y inmersi\xF3n prolongada se requieren <strong>botas de neopreno especializadas</strong> con sellado completo."
    },
    {
      q: "\xBFEl Gore-Tex\xAE dura toda la vida de la bota?",
      a: "S\xED. La membrana <strong>Gore-Tex\xAE Crosstech\xAE</strong> est\xE1 laminada permanentemente al forro de la bota. No se desgasta con el uso normal. Con mantenimiento adecuado del cuero exterior, la impermeabilidad se mantiene <strong>toda la vida \xFAtil de la bota</strong>."
    },
    {
      q: "\xBFLa bota Gore-Tex\xAE cuesta m\xE1s que la est\xE1ndar?",
      a: "S\xED. La tecnolog\xEDa <strong>Gore-Tex\xAE Crosstech\xAE</strong> con sellado de costuras tiene un costo adicional sobre la bota est\xE1ndar. Sin embargo, para bomberos que enfrentan regularmente condiciones h\xFAmedas o exposici\xF3n a fluidos, la inversi\xF3n se justifica por la <strong>protecci\xF3n adicional</strong>."
    }
  ];
  const relacionados = [
    {
      title: "Bota Puntera de Acero",
      badge: "EST\xC1NDAR",
      description: "Configuraci\xF3n est\xE1ndar sin Gore-Tex\xAE. Opci\xF3n m\xE1s econ\xF3mica para condiciones secas.",
      href: "/productos/botas-para-bomberos/estructural/puntera-acero",
      buttonText: "Ver Est\xE1ndar",
      image: IMAGE
    },
    {
      title: "Bota de Caucho HAZMAT",
      badge: "QU\xCDMICOS",
      description: "Para exposici\xF3n a qu\xEDmicos concentrados. Impermeabilidad total de caucho.",
      href: "/productos/botas-para-bomberos/caucho",
      buttonText: "Ver Caucho",
      image: IMAGE
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas con barrera de humedad. Compatible con bota Gore-Tex\xAE.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Ver Traje",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Guantes Impermeables",
      badge: "WATERPROOF",
      description: "Guantes con membrana impermeable para completar protecci\xF3n en h\xFAmedo.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Puntera de Acero", href: "/productos/botas-para-bomberos/estructural/puntera-acero" },
    { label: "Puntera Composite", href: "/productos/botas-para-bomberos/estructural/puntera-composite" },
    { label: "Suela Vibram\xAE", href: "/productos/botas-para-bomberos/estructural/suela-vibram" },
    { label: 'Ca\xF1a Alta 14"', href: "/productos/botas-para-bomberos/estructural/cana-alta-14" },
    { label: "Zipper Lateral", href: "/productos/botas-para-bomberos/estructural/zipper-lateral" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", tag: "Cuerpo" },
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas de Seguridad ANSI", href: "/productos/gafas-para-bomberos/seguridad", tag: "Visual" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Botas de Bombero", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Bota Puntera de Acero", href: "/productos/botas-para-bomberos/estructural/puntera-acero", tag: "Producto" },
    { label: "Botas de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Producto" },
    { label: "Trajes NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Cascos NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Veracruz \u2014 Huracanes", href: "/directorio/veracruz" },
    { label: "Bomberos Tabasco \u2014 Inundaciones", href: "/directorio/tabasco" },
    { label: "Bomberos Quintana Roo", href: "/directorio/quintana-roo" },
    { label: "Bomberos Chiapas", href: "/directorio/chiapas" },
    { label: "Bomberos Campeche", href: "/directorio/campeche" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Membrana", valor: "Gore-Tex\xAE Crosstech\xAE" },
    { label: "Impermeabilidad", valor: "100% certificada" },
    { label: "Transpirable", valor: "S\xED \u2713" },
    { label: "Bloodborne", valor: "ASTM F1671" },
    { label: "Costuras", valor: "Gore-Seam\xAE selladas" },
    { label: "Puntera", valor: "Acero I/75 C/75" },
    { label: "Suela", valor: "Vibram\xAE 300\xB0C" },
    { label: "Certificaci\xF3n", valor: "NFPA 1971" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "Gore-Tex\xAE", desc: "Membrana Crosstech\xAE impermeable" },
    { code: "ASTM F1671", desc: "Barrera bloodborne pathogen" },
    { code: "Gore-Seam\xAE", desc: "Costuras 100% selladas" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Estructural NFPA 1971 \u2014 Gore-Tex\xAE Impermeable | BOMBERO.MX", "description": "Bota estructural NFPA 1971 con membrana Gore-Tex\xAE Crosstech\xAE impermeable. Barrera bloodborne pathogen ASTM F1671. Suela Vibram\xAE. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "bota bombero Gore-Tex impermeable",
    "bota estructural waterproof NFPA 1971",
    "bota bombero rescate acu\xE1tico",
    "calzado bombero impermeable certificado",
    "bota bombero NFPA 1971 Gore-Tex",
    "bota estructural impermeable bombero",
    "comprar bota bombero Gore-Tex M\xE9xico",
    "bota bombero bloodborne pathogen"
  ], "canonical": "/productos/botas-para-bomberos/estructural/gore-tex-impermeable", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" },
    { label: "Bota Estructural de Cuero", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Gore-Tex\xAE Impermeable" }
  ], "heroBadge": "Bota Estructural \xB7 NFPA 1971 \xB7 Gore-Tex\xAE Impermeable", "heroTitle": "Bota Estructural NFPA 1971", "heroTitleHighlight": "Gore-Tex\xAE Impermeable", "heroSubtitle": "La bota para condiciones h\xFAmedas. Membrana Gore-Tex\xAE Crosstech\xAE que bloquea agua, sangre y fluidos mientras permite transpiraci\xF3n. Costuras 100% selladas. Certificaci\xF3n bloodborne pathogen ASTM F1671. El pie permanece seco en cualquier condici\xF3n.", "heroSeoBlocks": [
    {
      title: "Membrana Gore-Tex\xAE Crosstech\xAE \u2014 Impermeabilidad Total",
      text: "La membrana <strong>Gore-Tex\xAE Crosstech\xAE</strong> bloquea completamente agua, sangre y fluidos corporales. La tecnolog\xEDa de microporos permite que el <strong>vapor de sudor escape</strong> mientras bloquea l\xEDquidos externos. El pie respira naturalmente sin mojarse jam\xE1s."
    },
    {
      title: "Bloodborne Pathogen \u2014 Barrera Contra Pat\xF3genos",
      text: "Certificaci\xF3n <strong>ASTM F1671 bloodborne pathogen</strong> significa protecci\xF3n contra pat\xF3genos transmitidos por sangre. En emergencias m\xE9dicas con exposici\xF3n a <strong>sangre de v\xEDctimas</strong>, la bota protege al bombero de infecci\xF3n a trav\xE9s del calzado."
    }
  ], "ctaBarQuote": "Cotizar Bota Estructural Gore-Tex\xAE", "productoCategoria": "Bota de Bombero Estructural", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "Gore-Tex\xAE" },
    { modifier: "solas", text: "Waterproof" }
  ], "productoMasVendido": false, "productoTitle": "Bota Estructural NFPA 1971", "productoTitleSub": "Gore-Tex\xAE Crosstech\xAE Impermeable", "productoDesc": "Membrana Gore-Tex\xAE Crosstech\xAE que bloquea agua, sangre y fluidos corporales mientras permite transpiraci\xF3n del pie. Costuras 100% selladas con Gore-Seam\xAE. Certificaci\xF3n ASTM F1671 bloodborne pathogen. Puntera de acero y suela Vibram\xAE incluidas.", "productoFeatures": [
    "Membrana Gore-Tex\xAE Crosstech\xAE certificada",
    "100% impermeable \u2014 agua, sangre, fluidos",
    "Transpirable \u2014 vapor de sudor escapa",
    "Costuras Gore-Seam\xAE selladas",
    "Bloodborne pathogen ASTM F1671",
    "Certificaci\xF3n NFPA 1971 completa"
  ], "productoAppTags": [
    "Inundaciones",
    "Lluvia intensa",
    "Rescate acu\xE1tico",
    "Emergencias m\xE9dicas",
    "Fluidos corporales"
  ], "gallery": [
    { src: "/images/directorio/botas-bombero-resistentes-01.avif", alt: "Bota estructural NFPA 1971 Gore-Tex impermeable" },
    { src: "/images/directorio/rescate-acuatico-bomberos-01.avif", alt: "Bombero en rescate acu\xE1tico con botas impermeables" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bomberos en lluvia con botas Gore-Tex" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo de bombero NFPA" },
    { src: "/images/directorio/estacion-bomberos-huracanes-01.avif", alt: "Bomberos preparados para huracanes" }
  ], "capasEyebrow": "Tecnolog\xEDa Impermeable", "capasTitle": "Sistema Gore-Tex\xAE Crosstech\xAE", "capasDesc": "Conoce la tecnolog\xEDa que hace de esta bota la elecci\xF3n para condiciones h\xFAmedas y exposici\xF3n a fluidos.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Gore-Tex\xAE Crosstech\xAE con certificaci\xF3n NFPA 1971.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFCu\xE1ndo Elegir Gore-Tex\xAE Impermeable?", "aplicacionesContent": "<p>La bota Gore-Tex\xAE es la elecci\xF3n cuando la exposici\xF3n a agua o fluidos es inevitable.</p><p>Ideal para zonas con alta pluviosidad, rescates acu\xE1ticos y emergencias m\xE9dicas con riesgo de exposici\xF3n a sangre.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Gore-Tex\xAE Crosstech\xAE + ASTM F1671 Bloodborne", "certsDesc": "La membrana <strong>Gore-Tex\xAE Crosstech\xAE</strong> est\xE1 certificada para impermeabilidad total y barrera contra pat\xF3genos transmitidos por sangre (<strong>ASTM F1671</strong>). Protecci\xF3n completa en condiciones h\xFAmedas.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/estructural", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Bota Gore-Tex\xAE Impermeable", "faqDescription": "Respondemos las dudas t\xE9cnicas sobre Gore-Tex\xAE, impermeabilidad, transpirabilidad y bloodborne pathogen.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La bota Gore-Tex\xAE trabaja como parte de un sistema EPP impermeable. Todos los equipos est\xE1n certificados.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/gore-tex-impermeable/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/gore-tex-impermeable/index.astro";
const $$url = "/productos/botas-para-bomberos/estructural/gore-tex-impermeable";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
