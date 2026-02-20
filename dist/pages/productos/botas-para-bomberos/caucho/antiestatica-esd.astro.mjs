import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Suela Conductiva Disipadora ESD", descripcion: "Suela con resistencia el\xE9ctrica controlada (<10\u2078 ohmios) que disipa cargas electrost\xE1ticas de forma continua. Previene la acumulaci\xF3n de electricidad est\xE1tica que podr\xEDa generar chispas de ignici\xF3n en atm\xF3sferas explosivas.", specs: [{ label: "Resistencia", valor: "<10\u2078 ohmios" }, { label: "Disipaci\xF3n", valor: "Continua" }, { label: "Chispas", valor: "Prevenci\xF3n total" }], color: "ember" },
    { num: "02", titulo: "Certificaci\xF3n ATEX Zonas 0, 1 y 2", descripcion: "Certificada para uso en zonas clasificadas ATEX donde hay presencia de gases, vapores o polvos inflamables. Zona 0 (permanente), Zona 1 (frecuente) y Zona 2 (ocasional). Cumple con directiva europea 2014/34/EU.", specs: [{ label: "ATEX", valor: "Zonas 0, 1 y 2" }, { label: "Directiva", valor: "2014/34/EU" }, { label: "Atm\xF3sferas", valor: "Gas, vapor, polvo" }], color: "smoke" },
    { num: "03", titulo: "Cumple NOM-001-SEDE Explosivos", descripcion: "Cumple con la Norma Oficial Mexicana NOM-001-SEDE para instalaciones el\xE9ctricas en \xE1reas clasificadas con riesgo de explosi\xF3n. Obligatoria en refiner\xEDas, plantas de gas y almacenes de combustibles en M\xE9xico.", specs: [{ label: "NOM-001-SEDE", valor: "Cumple" }, { label: "Obligatoria", valor: "M\xE9xico" }, { label: "Aplicaci\xF3n", valor: "\xC1reas clasificadas" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Disipaci\xF3n ESD", label: "Resistencia el\xE9ctrica", valor: "<10\u2078 ohmios (conductiva)" },
    { categoria: "Disipaci\xF3n ESD", label: "Tipo disipaci\xF3n", valor: "Continua al piso" },
    { categoria: "Disipaci\xF3n ESD", label: "Prevenci\xF3n chispas", valor: "100% (dise\xF1o inherente)" },
    { categoria: "Certificaciones", label: "ATEX", valor: "Zonas 0, 1 y 2 (gas/vapor/polvo)" },
    { categoria: "Certificaciones", label: "Directiva EU", valor: "2014/34/EU" },
    { categoria: "Certificaciones", label: "NOM-001-SEDE", valor: "Cumple requisitos M\xE9xico" },
    { categoria: "Certificaciones", label: "EN ISO 20345:2011", valor: "Categor\xEDa S5 + SR + SRC" },
    { categoria: "Atm\xF3sferas", label: "Gases inflamables", valor: "Aprobada" },
    { categoria: "Atm\xF3sferas", label: "Vapores inflamables", valor: "Aprobada" },
    { categoria: "Atm\xF3sferas", label: "Polvos combustibles", valor: "Aprobada" },
    { categoria: "Material", label: "Tipo", valor: "Caucho nitrilo conductivo" },
    { categoria: "Protecci\xF3n", label: "Puntera", valor: "Acero ASTM F2413-18" },
    { categoria: "Dise\xF1o", label: "Altura ca\xF1a", valor: '16" (40 cm)' },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "1.8 kg" }
  ];
  const catClass = { "Disipaci\xF3n ESD": "construccion", "Certificaciones": "certificacion", "Atm\xF3sferas": "termico", "Material": "ergonomia", "Protecci\xF3n": "certificacion", "Dise\xF1o": "ergonomia" };
  const aplicaciones = [
    { titulo: "Refiner\xEDas y Plantas de Gas", desc: "Obligatoria en \xE1reas de proceso de PEMEX y plantas privadas donde hay presencia de vapores de hidrocarburos inflamables." },
    { titulo: "Terminales de Almacenamiento de Combustibles", desc: "Tanques de gasolina, diesel y gas LP donde la carga y descarga genera riesgo de ignici\xF3n por electricidad est\xE1tica." },
    { titulo: "Plantas Qu\xEDmicas con Solventes", desc: "Industria qu\xEDmica donde se manejan solventes vol\xE1tiles inflamables como acetona, alcohol y tolueno." },
    { titulo: "Industria de Explosivos y Pirotecnia", desc: "Plantas de fabricaci\xF3n de explosivos civiles y pirotecnia donde cualquier chispa puede causar ignici\xF3n." }
  ];
  const faqs = [
    { q: "\xBFEs obligatorio usar bota antiest\xE1tica en refiner\xEDas?", a: "S\xED. La <strong>NOM-001-SEDE</strong> y las pol\xEDticas de seguridad de <strong>PEMEX</strong> requieren calzado antiest\xE1tico o conductivo en <strong>\xE1reas clasificadas</strong> donde hay riesgo de atm\xF3sferas explosivas. El uso de calzado aislante puede resultar en acumulaci\xF3n de carga est\xE1tica y generaci\xF3n de chispas." },
    { q: "\xBFCu\xE1l es la diferencia entre antiest\xE1tico y conductivo?", a: "El calzado <strong>antiest\xE1tico</strong> tiene resistencia de 10\u2075 a 10\u2079 ohmios y disipa cargas lentamente. El calzado <strong>conductivo</strong> tiene resistencia menor a 10\u2075 ohmios y disipa cargas instant\xE1neamente. Esta bota es <strong>conductiva</strong> (<10\u2078 ohmios) para protecci\xF3n en zonas de m\xE1ximo riesgo." },
    { q: "\xBFLa bota funciona si el piso no es conductivo?", a: "No. La disipaci\xF3n ESD requiere un <strong>piso conductivo o disipador</strong> conectado a tierra. Si el piso es aislante (alfombra, madera, pl\xE1stico), la carga no puede disiparse y la protecci\xF3n no funciona. Las \xE1reas clasificadas deben tener <strong>piso conductivo por norma</strong>." }
  ];
  const relacionados = [
    { title: "Resistente a Hidrocarburos", badge: "Petrolera", description: "Para combustibles l\xEDquidos.", href: "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos", buttonText: "Ver Petrolera", image: IMAGE },
    { title: "Resistente a Qu\xEDmicos", badge: "150+", description: "Resistencia qu\xEDmica general.", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Traje FR Antiest\xE1tico", badge: "ATEX", description: "Traje ign\xEDfugo antiest\xE1tico.", href: "/productos/trajes-para-bomberos", buttonText: "Ver Traje", image: IMAGE },
    { title: "Guantes Antiest\xE1ticos", badge: "ESD", description: "Guantes disipativos.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" }
  ];
  const otrosModelos = [
    { label: "Resistente a Qu\xEDmicos", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos" },
    { label: "Descontaminaci\xF3n R\xE1pida", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida" },
    { label: "Traje Encapsulado Nivel A", href: "/productos/botas-para-bomberos/caucho/traje-encapsulado" },
    { label: "Resistente a Hidrocarburos", href: "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos" },
    { label: "Puntera Composite", href: "/productos/botas-para-bomberos/caucho/puntera-composite" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje FR Antiest\xE1tico", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Guantes ESD", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Casco Antiest\xE1tico", href: "/productos/cascos-para-bomberos", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Cat\xE1logo" }, { label: "Gu\xEDa ATEX M\xE9xico", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Estaciones Petroleras", href: "/directorio" }, { label: "Plantas Qu\xEDmicas", href: "/directorio" }];
  const specsRapidas = [{ label: "Resistencia", valor: "<10\u2078 ohmios" }, { label: "ATEX", valor: "Zonas 0, 1, 2" }, { label: "NOM-001-SEDE", valor: "Cumple" }, { label: "Disipaci\xF3n", valor: "Continua" }];
  const certItems = [{ code: "ATEX", desc: "Zonas 0, 1 y 2" }, { code: "NOM-001-SEDE", desc: "M\xE9xico explosivos" }, { code: "EN ISO 20345", desc: "S5 + SR + SRC" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Caucho HAZMAT Antiest\xE1tica ESD \u2014 ATEX Zonas 0-2 | BOMBERO.MX", "description": "Bota de caucho HAZMAT antiest\xE1tica ESD para atm\xF3sferas explosivas. Certificada ATEX Zonas 0, 1 y 2. Cumple NOM-001-SEDE. Para refiner\xEDas, plantas de gas, combustibles. M\xE9xico.", "keywords": ["bota antiest\xE1tica ESD", "bota ATEX", "bota atm\xF3sferas explosivas", "bota NOM-001-SEDE", "bota refiner\xEDas M\xE9xico"], "canonical": "/productos/botas-para-bomberos/caucho/antiestatica-esd", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" }, { label: "Antiest\xE1tica ESD" }], "heroBadge": "Bota HAZMAT \xB7 ESD \xB7 ATEX \xB7 Atm\xF3sferas Explosivas", "heroTitle": "Bota Caucho HAZMAT", "heroTitleHighlight": "Antiest\xE1tica ESD", "heroSubtitle": "Suela conductiva que disipa cargas electrost\xE1ticas para prevenir ignici\xF3n en atm\xF3sferas explosivas. Certificada ATEX para Zonas 0, 1 y 2. Cumple NOM-001-SEDE para instalaciones con riesgo de explosi\xF3n en M\xE9xico.", "heroSeoBlocks": [{ title: "Suela Conductiva Disipadora", text: "Resistencia el\xE9ctrica <strong><10\u2078 ohmios</strong> que disipa cargas electrost\xE1ticas de forma continua. Previene la generaci\xF3n de <strong>chispas de ignici\xF3n</strong> en atm\xF3sferas con gases, vapores o polvos inflamables." }, { title: "Certificaci\xF3n ATEX y NOM-001-SEDE", text: "Certificada <strong>ATEX Zonas 0, 1 y 2</strong> seg\xFAn directiva europea. Cumple <strong>NOM-001-SEDE</strong> obligatoria para \xE1reas clasificadas en <strong>refiner\xEDas y plantas de gas</strong> en M\xE9xico." }], "ctaBarQuote": "Cotizar Bota ESD", "productoCategoria": "Bota HAZMAT ESD", "productoBadges": [{ modifier: "nfpa", text: "ATEX" }, { modifier: "tpp", text: "ESD" }, { modifier: "solas", text: "NOM-001" }], "productoMasVendido": false, "productoTitle": "Bota Caucho HAZMAT \u2014 Antiest\xE1tica ESD", "productoTitleSub": "Conductiva \xB7 ATEX \xB7 NOM-001-SEDE", "productoDesc": "Bota de caucho con suela conductiva que disipa cargas electrost\xE1ticas continuamente. Certificada ATEX para Zonas 0, 1 y 2 con gases, vapores y polvos inflamables. Cumple NOM-001-SEDE para instalaciones con riesgo de explosi\xF3n.", "productoFeatures": ["Suela conductiva <10\u2078 ohmios", "Certificada ATEX Zonas 0, 1 y 2", "Cumple NOM-001-SEDE M\xE9xico", "Prevenci\xF3n total de chispas", "Para atm\xF3sferas explosivas"], "productoAppTags": ["Refiner\xEDas", "Plantas de gas", "Combustibles", "Explosivos"], "gallery": [{ src: IMAGE, alt: "Bota HAZMAT antiest\xE1tica ESD" }, { src: "/images/directorio/estacion-bomberos-refineria-01.avif", alt: "Refiner\xEDa \xE1rea clasificada" }], "capasEyebrow": "Tecnolog\xEDa ESD", "capasTitle": "Sistema de Disipaci\xF3n Electrost\xE1tica", "capasDesc": "Suela conductiva, certificaci\xF3n ATEX y cumplimiento NOM-001-SEDE.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de disipaci\xF3n, certificaciones y atm\xF3sferas.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Atm\xF3sferas Explosivas", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>\xC1reas clasificadas con atm\xF3sferas explosivas</strong>: refiner\xEDas, plantas de gas, terminales de combustibles, plantas qu\xEDmicas con solventes y industria de explosivos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "ATEX + NOM-001-SEDE", "certsDesc": "Certificada <strong>ATEX Zonas 0, 1 y 2</strong>. Cumple <strong>NOM-001-SEDE</strong> para \xE1reas clasificadas en M\xE9xico.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/caucho", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Antiest\xE1tica", "faqDescription": "Dudas sobre disipaci\xF3n ESD y ATEX.", "faqDocTitle": "Certificados ATEX", "faqDocDesc": "Documentaci\xF3n de certificaci\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Antiest\xE1tico", "relacionadosTitle": "EPP Antiest\xE1tico Relacionado", "relacionadosDesc": "Equipo completo ESD para \xE1reas clasificadas.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/antiestatica-esd/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/antiestatica-esd/index.astro";
const $$url = "/productos/botas-para-bomberos/caucho/antiestatica-esd";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
