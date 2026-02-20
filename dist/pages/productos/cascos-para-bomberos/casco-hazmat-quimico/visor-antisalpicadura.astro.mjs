import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Policarbonato Qu\xEDmicamente Resistente", descripcion: "Visor de policarbonato de grado \xF3ptico con resistencia qu\xEDmica certificada. A diferencia del policarbonato est\xE1ndar, este grado resiste contacto con solventes, \xE1cidos diluidos y bases sin nublarse, rayarse ni debilitarse. Grosor de 2.5 mm para protecci\xF3n contra impacto.", specs: [{ label: "Material", valor: "Policarbonato qu\xEDmico" }, { label: "Grosor", valor: "2.5 mm" }, { label: "Impacto", valor: "ANSI Z87.1+" }], color: "ember" },
    { num: "02", titulo: "Cobertura Facial Completa", descripcion: "El visor cubre la cara completa: frente, ojos, nariz, boca y ment\xF3n. A diferencia de un protector facial est\xE1ndar que solo cubre hasta la boca, este visor protege contra salpicaduras que vienen desde abajo (rebotes, derrames).", specs: [{ label: "Cobertura", valor: "Cara completa + ment\xF3n" }, { label: "Campo visual", valor: ">180\xB0 horizontal" }, { label: "Distorsi\xF3n", valor: "Ninguna (grado \xF3ptico)" }], color: "smoke" },
    { num: "03", titulo: "Sellado Perimetral Antisalpicadura", descripcion: "Ribete de goma o silicona alrededor del visor crea sellado contra el shell. Las salpicaduras que golpean el visor no pueden entrar por los bordes. El sellado no es herm\xE9tico (no es para gases) pero evita penetraci\xF3n de gotas.", specs: [{ label: "Material sello", valor: "Goma o silicona" }, { label: "Tipo", valor: "Splash-proof, no gas-tight" }, { label: "Protecci\xF3n", valor: "Salpicaduras l\xEDquidas" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Visor", label: "Material", valor: "Policarbonato qu\xEDmico" },
    { categoria: "Visor", label: "Grosor", valor: "2.5 mm" },
    { categoria: "Visor", label: "Claridad \xF3ptica", valor: "Grado 1 (sin distorsi\xF3n)" },
    { categoria: "Visor", label: "Impacto", valor: "ANSI Z87.1+ high impact" },
    { categoria: "Cobertura", label: "\xC1rea", valor: "Cara completa + ment\xF3n" },
    { categoria: "Cobertura", label: "Campo horizontal", valor: ">180\xB0" },
    { categoria: "Cobertura", label: "Campo vertical", valor: ">90\xB0" },
    { categoria: "Antiempa\xF1ante", label: "Tipo", valor: "Tratamiento permanente" },
    { categoria: "Antiempa\xF1ante", label: "Duraci\xF3n", valor: "Vida \xFAtil del visor" },
    { categoria: "Sellado", label: "Tipo", valor: "Splash-proof" },
    { categoria: "Sellado", label: "Material", valor: "Goma o silicona" },
    { categoria: "Sellado", label: "Protecci\xF3n", valor: "Salpicaduras, no gases" },
    { categoria: "Reemplazo", label: "M\xE9todo", valor: "Sin herramientas" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1994", valor: "Protecci\xF3n facial qu\xEDmica" }
  ];
  const catClass = { "Visor": "construccion", "Cobertura": "ergonomia", "Antiempa\xF1ante": "ergonomia", "Sellado": "construccion", "Reemplazo": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Manipulaci\xF3n de L\xEDquidos Qu\xEDmicos", desc: "Trasiego, mezclado y manipulaci\xF3n de l\xEDquidos donde hay riesgo de salpicaduras a la cara. El sellado perimetral evita que las gotas entren por los bordes." },
    { titulo: "Descontaminaci\xF3n de V\xEDctimas", desc: "Duchas de descontaminaci\xF3n donde el operador est\xE1 expuesto a agua contaminada y qu\xEDmicos de neutralizaci\xF3n." },
    { titulo: "Limpieza de Derrames", desc: "Operaciones de limpieza y contenci\xF3n de derrames industriales donde las salpicaduras son inevitables." },
    { titulo: "Laboratorio y Control de Calidad", desc: "Manipulaci\xF3n de reactivos y muestras qu\xEDmicas donde se requiere protecci\xF3n facial pero visibilidad clara." }
  ];
  const faqs = [
    { q: "\xBFEl visor protege contra gases?", a: "<strong>No</strong>. El sellado es <strong>splash-proof</strong> (contra salpicaduras l\xEDquidas), no <strong>gas-tight</strong> (contra gases). Para protecci\xF3n contra gases se requiere m\xE1scara de cara completa con SCBA o APR con filtros apropiados." },
    { q: "\xBFC\xF3mo evito que el visor se empa\xF1e?", a: "El visor tiene <strong>tratamiento antiempa\xF1ante permanente</strong> de f\xE1brica. A diferencia de pel\xEDculas o sprays que se desgastan, este tratamiento es integral al material y dura la vida \xFAtil del visor. Si eventualmente se degrada, el visor completo es <strong>reemplazable sin herramientas</strong>." },
    { q: "\xBFPuedo usar lentes graduados debajo?", a: "S\xED. El visor proporciona espacio suficiente para <strong>lentes de prescripci\xF3n</strong>. El tratamiento antiempa\xF1ante ayuda a que tanto el visor como los lentes se mantengan claros." }
  ];
  const relacionados = [
    { title: "Sistema Completo HAZMAT", badge: "NFPA 1994", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Shell Qu\xEDmico", badge: "HDPE", description: "Shell qu\xEDmicamente resistente.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico", buttonText: "Ver Shell", image: IMAGE },
    { title: "Compatible SCBA", badge: "M\xE1scara", description: "Optimizado para uso con SCBA.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba", buttonText: "Ver SCBA", image: IMAGE },
    { title: "Gafas Goggle Selladas", badge: "ANSI Z87", description: "Goggle sellado para protecci\xF3n qu\xEDmica ocular.", href: "/productos/gafas-para-bomberos/goggle", buttonText: "Ver Gafas", image: "/images/directorio/equipo-bomberos-completo-01.avif" }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo" },
    { label: "Shell Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba" },
    { label: "Capucha Integrada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada" },
    { label: "Certificaciones CBRN", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }, { label: "Guantes Qu\xEDmicos", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Cascos HAZMAT", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cat\xE1logo" }, { label: "ANSI Z87.1 Explicada", href: "/blog/cascos-bombero-certificados", tag: "Blog" }];
  const directorioLinks = [{ label: "Industria Qu\xEDmica", href: "/directorio" }, { label: "Laboratorios", href: "/directorio" }];
  const specsRapidas = [{ label: "Material", valor: "PC qu\xEDmico 2.5 mm" }, { label: "Cobertura", valor: "Cara completa" }, { label: "Sellado", valor: "Splash-proof" }, { label: "Antiempa\xF1ante", valor: "Permanente" }];
  const certItems = [{ code: "NFPA 1994", desc: "Protecci\xF3n facial qu\xEDmica" }, { code: "ANSI Z87.1+", desc: "Alto impacto" }, { code: "Splash-proof", desc: "Sellado perimetral" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco HAZMAT con Visor Antisalpicadura Cara Completa | BOMBERO.MX", "description": "Casco HAZMAT con visor policarbonato antisalpicadura de cara completa. Sellado perimetral, antiempa\xF1ante permanente. NFPA 1994 + ANSI Z87.1. M\xE9xico.", "keywords": ["casco HAZMAT visor", "visor antisalpicadura qu\xEDmico", "casco cara completa HAZMAT", "visor qu\xEDmico bombero"], "canonical": "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }, { label: "Visor Antisalpicadura" }], "heroBadge": "Visor Cara Completa \xB7 Splash-Proof \xB7 Antiempa\xF1ante", "heroTitle": "Casco HAZMAT", "heroTitleHighlight": "Visor Antisalpicadura", "heroSubtitle": "Visor de policarbonato qu\xEDmico de cara completa con sellado perimetral antisalpicadura. Tratamiento antiempa\xF1ante permanente y claridad \xF3ptica grado 1. Protecci\xF3n facial certificada contra l\xEDquidos qu\xEDmicos.", "heroSeoBlocks": [{ title: "Cobertura Facial Completa", text: "El visor cubre <strong>cara completa incluyendo ment\xF3n</strong>. Protege contra salpicaduras desde cualquier \xE1ngulo, incluyendo rebotes y derrames desde abajo." }, { title: "Sellado Splash-Proof", text: "Ribete de <strong>goma o silicona</strong> crea sellado perimetral. Las gotas no pueden entrar por los bordes del visor. Protecci\xF3n contra salpicaduras, no gases." }], "ctaBarQuote": "Cotizar Visor Antisalpicadura", "productoCategoria": "Casco HAZMAT Visor", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1994" }, { modifier: "tpp", text: "Z87.1+" }, { modifier: "solas", text: "Splash-Proof" }], "productoMasVendido": false, "productoTitle": "Casco HAZMAT \u2014 Visor Antisalpicadura", "productoTitleSub": "Cara Completa \xB7 Sellado", "productoDesc": "Visor policarbonato qu\xEDmico 2.5 mm con cobertura de cara completa. Sellado perimetral splash-proof, tratamiento antiempa\xF1ante permanente. Campo visual >180\xB0 sin distorsi\xF3n \xF3ptica. Reemplazable sin herramientas.", "productoFeatures": ["Policarbonato qu\xEDmico 2.5 mm", "Cara completa + ment\xF3n", "Sellado splash-proof", "Antiempa\xF1ante permanente", "Reemplazable sin herramientas"], "productoAppTags": ["L\xEDquidos qu\xEDmicos", "Descontaminaci\xF3n", "Derrames", "Laboratorio"], "gallery": [{ src: IMAGE, alt: "Casco HAZMAT visor antisalpicadura" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n HAZMAT" }], "capasEyebrow": "Protecci\xF3n Facial", "capasTitle": "Sistema de Visor Integrado", "capasDesc": "Policarbonato qu\xEDmico con sellado perimetral y antiempa\xF1ante.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones del Visor", "specsDesc": "Dise\xF1ado para protecci\xF3n facial contra salpicaduras qu\xEDmicas.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n con <strong>riesgo de salpicaduras de l\xEDquidos qu\xEDmicos</strong> a la cara: trasiego, descontaminaci\xF3n, limpieza de derrames, laboratorio.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1994 + ANSI Z87.1", "certsDesc": "Protecci\xF3n facial qu\xEDmica <strong>NFPA 1994</strong> con resistencia a impacto <strong>ANSI Z87.1+</strong> de alto impacto.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-hazmat-quimico", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Visor Antisalpicadura", "faqDescription": "Dudas sobre cobertura, sellado y mantenimiento.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Fichas t\xE9cnicas del visor.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Protecci\xF3n Facial", "relacionadosTitle": "Sistema de Protecci\xF3n Ocular", "relacionadosDesc": "Complete con goggles sellados para protecci\xF3n adicional.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
