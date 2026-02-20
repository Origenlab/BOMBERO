import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Pol\xEDmeros Inertes Probados ASTM D543", descripcion: "El shell se fabrica en pol\xEDmeros qu\xEDmicamente inertes: HDPE (polietileno de alta densidad), ABS resistente o polipropileno. Cada lote se prueba seg\xFAn ASTM D543 para resistencia a \xE1cidos, bases y solventes. El material no reacciona, no absorbe y no se degrada por exposici\xF3n qu\xEDmica.", specs: [{ label: "Materiales", valor: "HDPE, ABS, PP" }, { label: "Prueba", valor: "ASTM D543" }, { label: "Reacci\xF3n qu\xEDmica", valor: "Ninguna (inerte)" }], color: "ember" },
    { num: "02", titulo: "Resistencia a \xC1cidos Industriales", descripcion: "Probado para resistencia a \xE1cidos comunes en industria: \xE1cido sulf\xFArico (H\u2082SO\u2084), \xE1cido clorh\xEDdrico (HCl), \xE1cido n\xEDtrico (HNO\u2083) en concentraciones industriales diluidas. El shell no se ablanda, no se deforma y no pierde integridad estructural.", specs: [{ label: "H\u2082SO\u2084", valor: "Resistente (diluido)" }, { label: "HCl", valor: "Resistente (diluido)" }, { label: "HNO\u2083", valor: "Resistente (diluido)" }], color: "smoke" },
    { num: "03", titulo: "Resistencia a Bases y Solventes", descripcion: "Resistente a bases industriales (hidr\xF3xido de sodio NaOH, hidr\xF3xido de potasio KOH) y solventes org\xE1nicos comunes (acetona, alcoholes, hidrocarburos alif\xE1ticos). El shell mantiene su forma y propiedades mec\xE1nicas despu\xE9s de exposici\xF3n.", specs: [{ label: "NaOH/KOH", valor: "Resistente" }, { label: "Acetona", valor: "Resistente" }, { label: "Hidrocarburos", valor: "Resistente" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Materiales Shell", label: "HDPE", valor: "Polietileno alta densidad" },
    { categoria: "Materiales Shell", label: "ABS", valor: "ABS qu\xEDmicamente modificado" },
    { categoria: "Materiales Shell", label: "PP", valor: "Polipropileno industrial" },
    { categoria: "Materiales Shell", label: "Prueba", valor: "ASTM D543" },
    { categoria: "\xC1cidos", label: "H\u2082SO\u2084", valor: "Resistente <40% conc." },
    { categoria: "\xC1cidos", label: "HCl", valor: "Resistente <35% conc." },
    { categoria: "\xC1cidos", label: "HNO\u2083", valor: "Resistente <30% conc." },
    { categoria: "\xC1cidos", label: "Ac\xE9tico", valor: "Resistente" },
    { categoria: "Bases", label: "NaOH", valor: "Resistente <50% conc." },
    { categoria: "Bases", label: "KOH", valor: "Resistente <45% conc." },
    { categoria: "Bases", label: "Amon\xEDaco", valor: "Resistente (soluci\xF3n)" },
    { categoria: "Solventes", label: "Acetona", valor: "Resistente (breve)" },
    { categoria: "Solventes", label: "Alcoholes", valor: "Resistente" },
    { categoria: "Solventes", label: "Hidrocarburos", valor: "Resistente (alif\xE1ticos)" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1994", valor: "Emergencia qu\xEDmica" }
  ];
  const catClass = { "Materiales Shell": "construccion", "\xC1cidos": "certificacion", "Bases": "certificacion", "Solventes": "certificacion", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Industria Qu\xEDmica y Petroqu\xEDmica", desc: "Plantas de producci\xF3n qu\xEDmica donde la exposici\xF3n a \xE1cidos, bases y solventes es rutinaria. El shell resiste contacto accidental sin degradarse." },
    { titulo: "Farmac\xE9utica y Laboratorios", desc: "Instalaciones donde se manejan reactivos qu\xEDmicos agresivos. El shell inerte no contamina ni se contamina." },
    { titulo: "Refiner\xEDa y Petr\xF3leo", desc: "Operaciones con hidrocarburos, solventes y productos de refinaci\xF3n. El shell HDPE/PP resiste estos productos." },
    { titulo: "Tratamiento de Aguas", desc: "Plantas donde se maneja cloro, hipoclorito, \xE1cidos para pH y otros qu\xEDmicos de tratamiento." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l material de shell es mejor: HDPE, ABS o PP?", a: "<strong>HDPE</strong> es el m\xE1s vers\xE1til y econ\xF3mico, resiste la mayor\xEDa de qu\xEDmicos industriales. <strong>ABS modificado</strong> ofrece mayor resistencia a impacto pero menor resistencia a algunos solventes. <strong>PP</strong> tiene excelente resistencia qu\xEDmica pero es m\xE1s r\xEDgido. La elecci\xF3n depende de los qu\xEDmicos espec\xEDficos de su operaci\xF3n." },
    { q: "\xBFEl shell resiste \xE1cido fluorh\xEDdrico (HF)?", a: "<strong>No</strong>. El \xE1cido fluorh\xEDdrico es extremadamente agresivo y requiere equipo especial. Para HF se requiere traje <strong>Nivel A encapsulado</strong> con materiales espec\xEDficos anti-HF. Consulte con nosotros para equipamiento contra HF." },
    { q: "\xBFC\xF3mo verifico la compatibilidad qu\xEDmica?", a: "Cada casco incluye una <strong>tabla de compatibilidad qu\xEDmica</strong> del fabricante. Antes de la operaci\xF3n, verificar que los qu\xEDmicos involucrados est\xE9n listados como 'Resistente' o 'Excelente'. Si el qu\xEDmico no est\xE1 listado o est\xE1 como 'No recomendado', no usar el casco para esa operaci\xF3n." }
  ];
  const relacionados = [
    { title: "Sistema Completo HAZMAT", badge: "NFPA 1994", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Visor Antisalpicadura", badge: "PC", description: "Visor de cara completa qu\xEDmico.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura", buttonText: "Ver Visor", image: IMAGE },
    { title: "Guantes Qu\xEDmicos", badge: "Nitrilo", description: "Guantes para manipulaci\xF3n qu\xEDmica.", href: "/productos/guantes-para-bomberos/hazmat", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" },
    { title: "Traje Nivel B", badge: "NFPA 1992", description: "Traje splash-proof.", href: "/productos/trajes-para-bomberos/traje-hazmat", buttonText: "Ver Traje", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo" },
    { label: "Visor Antisalpicadura", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba" },
    { label: "Capucha Integrada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada" },
    { label: "Certificaciones CBRN", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Traje Qu\xEDmico Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cuerpo" }, { label: "Guantes Qu\xEDmicos", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Botas Qu\xEDmicas", href: "/productos/botas-para-bomberos/caucho", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Cascos HAZMAT", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cat\xE1logo" }, { label: "ASTM D543 Explicada", href: "/blog/cascos-bombero-certificados", tag: "Blog" }];
  const directorioLinks = [{ label: "Industria Qu\xEDmica", href: "/directorio" }, { label: "PEMEX", href: "/directorio" }];
  const specsRapidas = [{ label: "Materiales", valor: "HDPE, ABS, PP" }, { label: "\xC1cidos", valor: "H\u2082SO\u2084, HCl, HNO\u2083" }, { label: "Bases", valor: "NaOH, KOH" }, { label: "Solventes", valor: "Acetona, alcoholes" }];
  const certItems = [{ code: "ASTM D543", desc: "Resistencia qu\xEDmica" }, { code: "NFPA 1994", desc: "Emergencia qu\xEDmica" }, { code: "Inertes", desc: "Sin reacci\xF3n qu\xEDmica" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco HAZMAT Shell Qu\xEDmicamente Resistente ASTM D543 | BOMBERO.MX", "description": "Casco HAZMAT con shell HDPE/ABS/PP qu\xEDmicamente resistente. Probado ASTM D543 para \xE1cidos, bases y solventes. Certificado NFPA 1994. Industria qu\xEDmica M\xE9xico.", "keywords": ["casco HAZMAT shell qu\xEDmico", "casco resistencia qu\xEDmica", "casco ASTM D543", "casco industria qu\xEDmica"], "canonical": "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }, { label: "Shell Qu\xEDmico" }], "heroBadge": "Shell Qu\xEDmico \xB7 ASTM D543 \xB7 Pol\xEDmeros Inertes", "heroTitle": "Casco HAZMAT", "heroTitleHighlight": "Shell Qu\xEDmicamente Resistente", "heroSubtitle": "Shell fabricado en pol\xEDmeros inertes (HDPE, ABS, PP) probados seg\xFAn ASTM D543. Resistente a \xE1cidos industriales (H\u2082SO\u2084, HCl, HNO\u2083), bases (NaOH, KOH) y solventes org\xE1nicos. No se degrada por exposici\xF3n qu\xEDmica.", "heroSeoBlocks": [{ title: "Pol\xEDmeros Qu\xEDmicamente Inertes", text: "El shell no <strong>reacciona, no absorbe y no se degrada</strong> por exposici\xF3n a qu\xEDmicos industriales comunes. Probado seg\xFAn <strong>ASTM D543</strong> para resistencia qu\xEDmica verificada." }, { title: "Resistencia Comprobada", text: "Tabla de compatibilidad incluida con <strong>200+ qu\xEDmicos probados</strong>. Verifique compatibilidad antes de cada operaci\xF3n para seguridad garantizada." }], "ctaBarQuote": "Cotizar Shell Qu\xEDmico", "productoCategoria": "Casco HAZMAT Shell", "productoBadges": [{ modifier: "nfpa", text: "ASTM D543" }, { modifier: "tpp", text: "HDPE" }, { modifier: "solas", text: "Inerte" }], "productoMasVendido": false, "productoTitle": "Casco HAZMAT \u2014 Shell Qu\xEDmico", "productoTitleSub": "HDPE \xB7 ABS \xB7 PP", "productoDesc": "Shell en pol\xEDmeros inertes probados ASTM D543. Resistente a \xE1cidos (H\u2082SO\u2084, HCl, HNO\u2083), bases (NaOH, KOH) y solventes (acetona, alcoholes, hidrocarburos). Tabla de compatibilidad incluida.", "productoFeatures": ["HDPE, ABS o PP inerte", "Resistente \xE1cidos diluidos", "Resistente bases industriales", "Resistente solventes org\xE1nicos", "Tabla compatibilidad incluida"], "productoAppTags": ["Qu\xEDmica", "Petroqu\xEDmica", "Farmac\xE9utica", "Refiner\xEDa"], "gallery": [{ src: IMAGE, alt: "Casco HAZMAT shell qu\xEDmico" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n qu\xEDmica" }], "capasEyebrow": "Resistencia Qu\xEDmica", "capasTitle": "Shell de Pol\xEDmeros Inertes", "capasDesc": "Materiales probados para no degradarse por exposici\xF3n qu\xEDmica.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Compatibilidad Qu\xEDmica del Shell", "specsDesc": "Resistencia probada a qu\xEDmicos industriales comunes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Industrias", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Industrias donde la <strong>exposici\xF3n a qu\xEDmicos</strong> es rutinaria: qu\xEDmica, petroqu\xEDmica, farmac\xE9utica, tratamiento de aguas, refiner\xEDa.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "ASTM D543 Resistencia Qu\xEDmica", "certsDesc": "La norma <strong>ASTM D543</strong> establece m\xE9todos de prueba para resistencia de pl\xE1sticos a qu\xEDmicos. Cada lote de shells se prueba seg\xFAn esta norma.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-hazmat-quimico", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Shell Qu\xEDmico", "faqDescription": "Dudas sobre materiales y compatibilidad qu\xEDmica.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Tablas de compatibilidad qu\xEDmica.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP Qu\xEDmico Completo", "relacionadosDesc": "Complete con traje, guantes y visores qu\xEDmicos.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
