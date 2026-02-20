import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Capucha Tyvek\xAE o Material Similar", descripcion: "Capucha integrada fabricada en Tyvek\xAE (DuPont), Tychem\xAE, o material similar que proporciona barrera contra part\xEDculas y salpicaduras qu\xEDmicas. El material es ligero pero efectivo como barrera contra l\xEDquidos y aerosoles. Desechable o reutilizable seg\xFAn modelo.", specs: [{ label: "Material", valor: "Tyvek\xAE, Tychem\xAE o similar" }, { label: "Barrera", valor: "Part\xEDculas + salpicaduras" }, { label: "Tipo", valor: "Desechable o reutilizable" }], color: "ember" },
    { num: "02", titulo: "Protecci\xF3n de Cuello, Nuca y Hombros", descripcion: "La capucha se extiende m\xE1s all\xE1 del casco para cubrir cuello completo, nuca y parte superior de hombros. Esta \xE1rea queda expuesta con un casco normal y es vulnerable a salpicaduras y escurrimientos desde arriba.", specs: [{ label: "Cobertura", valor: "Cuello + nuca + hombros" }, { label: "Longitud", valor: "~25 cm debajo del casco" }, { label: "Sellado", valor: "Sobre cuello del traje" }], color: "smoke" },
    { num: "03", titulo: "Sellado sobre Traje HAZMAT Nivel B", descripcion: "La capucha se extiende para solaparse sobre el cuello del traje HAZMAT Nivel B o C. Este solape crea un sellado continuo que evita que salpicaduras entren por el cuello del traje. Algunos modelos incluyen cinta de sellado para mayor hermeticidad.", specs: [{ label: "Solape", valor: "Sobre cuello de traje" }, { label: "Hermeticidad", valor: "Splash-proof" }, { label: "Cinta sellado", valor: "Opcional seg\xFAn modelo" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Capucha", label: "Material", valor: "Tyvek\xAE, Tychem\xAE o similar" },
    { categoria: "Capucha", label: "Tipo", valor: "Desechable o reutilizable" },
    { categoria: "Capucha", label: "Color", valor: "Blanco, amarillo (Hi-Vis)" },
    { categoria: "Cobertura", label: "Cuello", valor: "Completo 360\xB0" },
    { categoria: "Cobertura", label: "Nuca", valor: "Completa" },
    { categoria: "Cobertura", label: "Hombros", valor: "Parcial (~25 cm)" },
    { categoria: "Cobertura", label: "Longitud total", valor: "~25-30 cm debajo casco" },
    { categoria: "Sellado", label: "Facial", valor: "El\xE1stico ajustable" },
    { categoria: "Sellado", label: "Sobre traje", valor: "Solape + cinta opcional" },
    { categoria: "Compatibilidad", label: "Traje Nivel B", valor: "S\xED" },
    { categoria: "Compatibilidad", label: "Traje Nivel C", valor: "S\xED" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "S\xED (sobre m\xE1scara)" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1994", valor: "Protecci\xF3n cuello" }
  ];
  const catClass = { "Capucha": "construccion", "Cobertura": "ergonomia", "Sellado": "construccion", "Compatibilidad": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones HAZMAT Nivel B", desc: "El traje Nivel B no incluye capucha integrada (a diferencia del Nivel A). La capucha del casco proporciona la protecci\xF3n de cuello necesaria." },
    { titulo: "Descontaminaci\xF3n de V\xEDctimas", desc: "Operadores en estaciones de descontaminaci\xF3n expuestos a escurrimientos y salpicaduras desde las v\xEDctimas y el agua de lavado." },
    { titulo: "Exposici\xF3n Prolongada a Aerosoles", desc: "Situaciones donde hay aerosoles qu\xEDmicos en el ambiente que se depositan sobre superficies expuestas." },
    { titulo: "Operaciones con Riesgo de Escurrimiento", desc: "Trabajos donde l\xEDquidos pueden escurrir desde arriba (techos, tanques, tuber\xEDas) hacia el cuello del operador." }
  ];
  const faqs = [
    { q: "\xBFLa capucha desechable o reutilizable?", a: "Depende del modelo. Las capuchas <strong>Tyvek\xAE desechables</strong> son econ\xF3micas y se descartan despu\xE9s de cada uso contaminado. Las <strong>Tychem\xAE reutilizables</strong> pueden descontaminarse y reutilizarse m\xFAltiples veces. Consulte el modelo espec\xEDfico." },
    { q: "\xBFLa capucha se sella con el traje?", a: "La capucha se <strong>solapa sobre el cuello del traje</strong> Nivel B o C. Este solape crea un sellado splash-proof (contra salpicaduras). No es gas-tight (no protege contra gases). Algunos modelos incluyen <strong>cinta de sellado</strong> para mayor hermeticidad." },
    { q: "\xBFPuedo usar la capucha con SCBA?", a: "S\xED. La capucha tiene <strong>apertura facial amplia</strong> que acomoda la m\xE1scara SCBA. El el\xE1stico facial se ajusta alrededor del per\xEDmetro de la m\xE1scara sin interferir con el sellado." }
  ];
  const relacionados = [
    { title: "Sistema Completo HAZMAT", badge: "NFPA 1994", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Traje HAZMAT Nivel B", badge: "NFPA 1992", description: "Traje splash-proof.", href: "/productos/trajes-para-bomberos/traje-hazmat", buttonText: "Ver Traje", image: IMAGE },
    { title: "Compatible SCBA", badge: "M\xE1scara", description: "Optimizado para SCBA.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba", buttonText: "Ver SCBA", image: IMAGE },
    { title: "Certificaciones CBRN", badge: "CBRN", description: "Para amenazas terroristas.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn", buttonText: "Ver CBRN", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo" },
    { label: "Shell Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico" },
    { label: "Visor Antisalpicadura", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba" },
    { label: "Certificaciones CBRN", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Traje Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cuerpo" }, { label: "Guantes Qu\xEDmicos", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Botas Qu\xEDmicas", href: "/productos/botas-para-bomberos/caucho", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Cascos HAZMAT", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cat\xE1logo" }, { label: "Niveles HAZMAT Gu\xEDa", href: "/blog/equipo-scba-autonomo-bomberos", tag: "Blog" }];
  const directorioLinks = [{ label: "HAZMAT Nacional", href: "/directorio" }, { label: "Descontaminaci\xF3n", href: "/directorio" }];
  const specsRapidas = [{ label: "Material", valor: "Tyvek\xAE o Tychem\xAE" }, { label: "Cobertura", valor: "Cuello + nuca + hombros" }, { label: "Sellado", valor: "Sobre traje Nivel B" }, { label: "Tipo", valor: "Desechable o reutilizable" }];
  const certItems = [{ code: "NFPA 1994", desc: "Protecci\xF3n cuello" }, { code: "Tyvek\xAE", desc: "Barrera part\xEDculas" }, { code: "Splash-proof", desc: "Sellado salpicaduras" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco HAZMAT con Capucha Qu\xEDmica Integrada Tyvek | BOMBERO.MX", "description": "Casco HAZMAT con capucha qu\xEDmica integrada Tyvek\xAE o Tychem\xAE. Protecci\xF3n cuello, nuca y hombros. Sellado sobre traje Nivel B. NFPA 1994 M\xE9xico.", "keywords": ["casco HAZMAT capucha", "capucha qu\xEDmica Tyvek", "casco protecci\xF3n cuello", "casco HAZMAT nivel B"], "canonical": "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }, { label: "Capucha Integrada" }], "heroBadge": "Capucha Tyvek\xAE \xB7 Cuello + Nuca \xB7 Nivel B", "heroTitle": "Casco HAZMAT", "heroTitleHighlight": "Capucha Qu\xEDmica Integrada", "heroSubtitle": "Sistema con capucha integrada en Tyvek\xAE o Tychem\xAE que protege cuello, nuca y hombros. Se sella sobre el traje HAZMAT Nivel B/C para protecci\xF3n continua. Desechable o reutilizable seg\xFAn modelo. Compatible con SCBA.", "heroSeoBlocks": [{ title: "Protecci\xF3n de Cuello Completa", text: "La capucha cubre <strong>cuello 360\xB0, nuca y parte de hombros</strong> \u2014 \xE1reas que quedan expuestas con un casco normal. Protecci\xF3n contra salpicaduras y aerosoles." }, { title: "Sellado sobre Traje Nivel B", text: "La capucha se <strong>solapa sobre el cuello del traje</strong> para crear un sellado continuo. Algunos modelos incluyen <strong>cinta de sellado</strong> para mayor hermeticidad." }], "ctaBarQuote": "Cotizar Capucha Integrada", "productoCategoria": "Casco HAZMAT Capucha", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1994" }, { modifier: "tpp", text: "Tyvek\xAE" }, { modifier: "solas", text: "Nivel B" }], "productoMasVendido": false, "productoTitle": "Casco HAZMAT \u2014 Capucha Integrada", "productoTitleSub": "Tyvek\xAE \xB7 Tychem\xAE", "productoDesc": "Capucha integrada en Tyvek\xAE o Tychem\xAE que protege cuello completo, nuca y hombros. El\xE1stico facial ajustable compatible con SCBA. Se sella sobre traje Nivel B/C con solape y cinta opcional.", "productoFeatures": ["Capucha Tyvek\xAE o Tychem\xAE", "Cuello + nuca + hombros", "El\xE1stico facial ajustable", "Sellado sobre traje Nivel B", "Compatible con SCBA"], "productoAppTags": ["HAZMAT Nivel B", "Descontaminaci\xF3n", "Aerosoles", "Escurrimientos"], "gallery": [{ src: IMAGE, alt: "Casco HAZMAT capucha integrada" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n HAZMAT" }], "capasEyebrow": "Sistema de Capucha", "capasTitle": "Protecci\xF3n Extendida de Cuello", "capasDesc": "Capucha que protege las \xE1reas que el casco solo no cubre.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones de Capucha", "specsDesc": "Dise\xF1ada para operaciones HAZMAT Nivel B y descontaminaci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Operaciones HAZMAT donde el <strong>cuello y nuca requieren protecci\xF3n</strong>: Nivel B, descontaminaci\xF3n, exposici\xF3n a aerosoles, riesgo de escurrimientos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1994 Protecci\xF3n Cuello", "certsDesc": "Certificado <strong>NFPA 1994</strong> para protecci\xF3n de cuello y sellado con traje Nivel B.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-hazmat-quimico", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Capucha Integrada", "faqDescription": "Dudas sobre material, sellado y compatibilidad.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Fichas t\xE9cnicas y compatibilidad.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Nivel B", "relacionadosTitle": "EPP HAZMAT Completo", "relacionadosDesc": "Complete con traje, guantes y botas certificados.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
