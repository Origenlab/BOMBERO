import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Protecci\xF3n Splash Anti-Salpicaduras", descripcion: "Traje dise\xF1ado para proteger contra salpicaduras de l\xEDquidos qu\xEDmicos. No es herm\xE9tico a vapores pero ofrece excelente barrera contra derrames y contacto directo con sustancias l\xEDquidas.", specs: [{ label: "Protecci\xF3n", valor: "Splash/salpicadura" }, { label: "L\xEDquidos", valor: "Barrera efectiva" }, { label: "Vapores", valor: "Requiere SCBA" }], color: "ember" },
    { num: "02", titulo: "SCBA Exterior al Traje", descripcion: "A diferencia del Nivel A, el SCBA se usa por fuera del traje. Esto permite mayor movilidad y tiempo de trabajo m\xE1s prolongado, pero requiere que la concentraci\xF3n de vapores sea conocida.", specs: [{ label: "SCBA", valor: "Exterior" }, { label: "Movilidad", valor: "Mayor" }, { label: "Tiempo trabajo", valor: "Prolongado" }], color: "smoke" },
    { num: "03", titulo: "Cierre Resistente a Qu\xEDmicos", descripcion: "Sistema de cierre con solapa protectora y cinta selladora que previene entrada de l\xEDquidos. Las costuras est\xE1n termoselladas para m\xE1xima protecci\xF3n contra salpicaduras.", specs: [{ label: "Cierre", valor: "Solapa + cinta" }, { label: "Costuras", valor: "Termoselladas" }, { label: "L\xEDquidos", valor: "Barrera total" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Protecci\xF3n", label: "Tipo", valor: "Splash protective" },
    { categoria: "Protecci\xF3n", label: "L\xEDquidos", valor: "Barrera completa" },
    { categoria: "Protecci\xF3n", label: "Vapores", valor: "Protecci\xF3n respiratoria SCBA" },
    { categoria: "SCBA", label: "Posici\xF3n", valor: "Exterior al traje" },
    { categoria: "SCBA", label: "Beneficio", valor: "Mayor movilidad" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "Termoselladas" },
    { categoria: "Construcci\xF3n", label: "Cierre", valor: "Solapa + cinta selladora" },
    { categoria: "Dise\xF1o", label: "Movilidad", valor: "Alta" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1992 (Nivel B)" },
    { categoria: "Certificaci\xF3n", label: "Uso", valor: "Splash/salpicaduras" }
  ];
  const catClass = { "Protecci\xF3n": "construccion", "SCBA": "termico", "Construcci\xF3n": "ergonomia", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Derrames L\xEDquidos Identificados", desc: "Respuesta a fugas o derrames donde la sustancia ha sido identificada y no hay riesgo significativo de absorci\xF3n cut\xE1nea de vapores." },
    { titulo: "Descontaminaci\xF3n de Personal", desc: "Operaciones en estaciones de descontaminaci\xF3n donde el riesgo principal es contacto con l\xEDquidos contaminados." },
    { titulo: "Operaciones de Contenci\xF3n", desc: "Trabajo de contenci\xF3n de derrames donde la exposici\xF3n es principalmente a l\xEDquidos, no vapores." },
    { titulo: "Transporte de Materiales Peligrosos", desc: "Respuesta a accidentes de transporte donde se conoce el contenido y se requiere protecci\xF3n contra salpicaduras." }
  ];
  const faqs = [
    { q: "\xBFNivel B es suficiente para \xE1cidos?", a: "Depende. <strong>Nivel B</strong> protege contra <strong>salpicaduras de \xE1cidos</strong>, pero si hay vapores \xE1cidos concentrados que pueden absorberse por la piel, se requiere <strong>Nivel A</strong>. Siempre verificar tablas de permeaci\xF3n." },
    { q: "\xBFPor qu\xE9 elegir Nivel B sobre Nivel A?", a: "Nivel B ofrece <strong>mayor movilidad</strong>, <strong>mayor tiempo de trabajo</strong> y <strong>menor costo</strong>. Es apropiado cuando la sustancia es conocida y el riesgo principal es contacto con l\xEDquidos, no absorci\xF3n de vapores." },
    { q: "\xBFEl traje Nivel B se puede usar sin SCBA?", a: "No. <strong>Nivel B siempre requiere SCBA</strong> u otro equipo de respiraci\xF3n aut\xF3noma. La diferencia con Nivel A es que el SCBA est\xE1 por fuera del traje, no que se pueda omitir." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel A", badge: "M\xE1ximo", description: "Encapsulado total.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Resistencia Qu\xEDmica", badge: "Tablas", description: "Permeaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Bota HAZMAT Caucho", badge: "Qu\xEDmica", description: "Resistente \xE1cidos.", href: "/productos/botas-para-bomberos/caucho", buttonText: "Ver Botas", image: IMAGE },
    { title: "Guantes HAZMAT", badge: "Qu\xEDmicos", description: "M\xFAltiples capas.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a" },
    { label: "Resistencia Qu\xEDmica", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica" },
    { label: "Sistema Encapsulamiento", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento" },
    { label: "Compatible SCBA", href: "/productos/trajes-para-bomberos/traje-hazmat/scba" },
    { label: "Certificaci\xF3n CBRN", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Bota HAZMAT Caucho", href: "/productos/botas-para-bomberos/caucho", tag: "Pies" }, { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "SCBA Exterior", href: "/productos", tag: "Respiratorio" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Nivel A vs B", href: "/productos", tag: "Comparativa" }];
  const directorioLinks = [{ label: "Equipos HAZMAT", href: "/directorio" }, { label: "Respuesta Derrames", href: "/directorio" }];
  const specsRapidas = [{ label: "Nivel", valor: "B (splash)" }, { label: "SCBA", valor: "Exterior" }, { label: "Costuras", valor: "Termoselladas" }, { label: "NFPA", valor: "1992" }];
  const certItems = [{ code: "NFPA 1992", desc: "Splash protective" }, { code: "Nivel B", desc: "Anti-salpicaduras" }, { code: "SCBA", desc: "Exterior" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Nivel B Splash Protective \u2014 NFPA 1992 | BOMBERO.MX", "description": "Traje HAZMAT Nivel B splash protective NFPA 1992. Protecci\xF3n contra salpicaduras qu\xEDmicas, SCBA exterior, mayor movilidad. M\xE9xico.", "keywords": ["traje HAZMAT nivel B", "traje splash protective", "traje NFPA 1992", "traje anti salpicaduras", "equipo HAZMAT l\xEDquidos"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/nivel-b", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "Nivel B" }], "heroBadge": "Traje HAZMAT \xB7 Nivel B \xB7 Splash \xB7 NFPA 1992", "heroTitle": "Traje HAZMAT Nivel B", "heroTitleHighlight": "Splash Protective", "heroSubtitle": "Protecci\xF3n contra salpicaduras de l\xEDquidos qu\xEDmicos con SCBA exterior. Mayor movilidad y tiempo de trabajo. Costuras termoselladas y cierre con solapa protectora. Certificado NFPA 1992.", "heroSeoBlocks": [{ title: "Protecci\xF3n Splash Anti-Salpicaduras", text: "Barrera efectiva contra <strong>salpicaduras de l\xEDquidos qu\xEDmicos</strong>. Costuras <strong>termoselladas</strong> y cierre con solapa protectora para m\xE1xima protecci\xF3n contra derrames." }, { title: "SCBA Exterior = Mayor Movilidad", text: "A diferencia del Nivel A, el <strong>SCBA se usa por fuera</strong>. Esto permite <strong>mayor movilidad</strong> y tiempo de trabajo prolongado. Certificaci\xF3n <strong>NFPA 1992</strong>." }], "ctaBarQuote": "Cotizar Nivel B", "productoCategoria": "Traje HAZMAT Nivel B", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1992" }, { modifier: "tpp", text: "Nivel B" }, { modifier: "solas", text: "Splash" }], "productoMasVendido": false, "productoTitle": "Traje HAZMAT Nivel B \u2014 Splash Protective", "productoTitleSub": "Anti-Salpicaduras \xB7 SCBA Exterior \xB7 Alta Movilidad", "productoDesc": "Traje HAZMAT splash protective con barrera contra salpicaduras qu\xEDmicas. SCBA exterior para mayor movilidad. Costuras termoselladas y cierre resistente. Para derrames identificados. Certificado NFPA 1992.", "productoFeatures": ["Protecci\xF3n splash l\xEDquidos", "SCBA exterior al traje", "Costuras termoselladas", "Mayor movilidad", "Certificado NFPA 1992"], "productoAppTags": ["Derrames identificados", "Descontaminaci\xF3n", "Contenci\xF3n", "Transporte HAZMAT"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT Nivel B splash" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Respuesta derrame qu\xEDmico" }], "capasEyebrow": "Protecci\xF3n Splash", "capasTitle": "Sistema Nivel B Anti-Salpicaduras", "capasDesc": "Barrera splash, SCBA exterior y costuras termoselladas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del Nivel B.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Nivel B", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Protecci\xF3n contra salpicaduras qu\xEDmicas</strong>: derrames identificados, descontaminaci\xF3n de personal, operaciones de contenci\xF3n y respuesta a transporte HAZMAT.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1992 Splash-Protective", "certsDesc": "Certificaci\xF3n <strong>NFPA 1992</strong> para trajes <strong>splash-protective Nivel B</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Nivel B", "faqDescription": "Dudas sobre protecci\xF3n splash.", "faqDocTitle": "Comparativa Niveles", "faqDocDesc": "Nivel A vs Nivel B.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP HAZMAT Relacionado", "relacionadosDesc": "Completa tu equipo Nivel B.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/nivel-b/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/nivel-b/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/nivel-b";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
