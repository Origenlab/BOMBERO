import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Encapsulamiento Total Herm\xE9tico", descripcion: "Traje completamente encapsulado que cubre todo el cuerpo incluyendo SCBA. Sellado herm\xE9tico contra gases, vapores, part\xEDculas y l\xEDquidos. El nivel m\xE1s alto de protecci\xF3n qu\xEDmica disponible.", specs: [{ label: "Encapsulamiento", valor: "Total 360\xB0" }, { label: "SCBA", valor: "Interior" }, { label: "Sellado", valor: "Herm\xE9tico" }], color: "ember" },
    { num: "02", titulo: "Barrera Qu\xEDmica Multi-Capa", descripcion: "Material de barrera qu\xEDmica de m\xFAltiples capas que resiste una amplia gama de sustancias incluyendo \xE1cidos concentrados, bases fuertes, solventes org\xE1nicos y agentes desconocidos.", specs: [{ label: "Barrera", valor: "Multi-capa" }, { label: "\xC1cidos", valor: "Concentrados" }, { label: "Solventes", valor: "Org\xE1nicos" }], color: "smoke" },
    { num: "03", titulo: "Presi\xF3n Positiva Interior", descripcion: "Dise\xF1o que mantiene presi\xF3n positiva interior para prevenir infiltraci\xF3n de contaminantes. Si hay una peque\xF1a fuga, el aire sale hacia afuera en lugar de que contaminantes entren.", specs: [{ label: "Presi\xF3n", valor: "Positiva interior" }, { label: "Fugas", valor: "Hacia exterior" }, { label: "Infiltraci\xF3n", valor: "Prevenida" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Encapsulamiento", label: "Tipo", valor: "Total herm\xE9tico" },
    { categoria: "Encapsulamiento", label: "SCBA", valor: "Interior del traje" },
    { categoria: "Encapsulamiento", label: "Visor", valor: "Panor\xE1mico anti-empa\xF1e" },
    { categoria: "Barrera", label: "Material", valor: "Multi-capa laminado" },
    { categoria: "Barrera", label: "Qu\xEDmicos", valor: "Amplio espectro" },
    { categoria: "Barrera", label: "Estados", valor: "Gas, vapor, l\xEDquido, part\xEDcula" },
    { categoria: "Presi\xF3n", label: "Sistema", valor: "Positiva interior" },
    { categoria: "Presi\xF3n", label: "V\xE1lvula", valor: "Exhalaci\xF3n controlada" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1991 (Nivel A)" },
    { categoria: "Certificaci\xF3n", label: "Uso", valor: "Vapores desconocidos" }
  ];
  const catClass = { "Encapsulamiento": "construccion", "Barrera": "termico", "Presi\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Sustancias Desconocidas", desc: "Respuesta inicial a incidentes donde la sustancia peligrosa no ha sido identificada y se asume el peor escenario." },
    { titulo: "Vapores de Alta Toxicidad", desc: "Incidentes con gases o vapores altamente t\xF3xicos como cianuro, fosgeno o agentes de guerra qu\xEDmica." },
    { titulo: "Derrames de \xC1cidos Concentrados", desc: "Respuesta a fugas o derrames de \xE1cidos fuertes como sulf\xFArico, n\xEDtrico o fluorh\xEDdrico concentrado." },
    { titulo: "Operaciones CBRN", desc: "Incidentes qu\xEDmicos, biol\xF3gicos, radiol\xF3gicos y nucleares que requieren m\xE1ximo nivel de protecci\xF3n." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1ndo se requiere Nivel A vs Nivel B?", a: "<strong>Nivel A</strong> se requiere cuando hay riesgo de <strong>absorci\xF3n cut\xE1nea</strong> de vapores o cuando la sustancia es desconocida. <strong>Nivel B</strong> es suficiente cuando solo hay riesgo respiratorio y la piel puede protegerse con traje splash." },
    { q: "\xBFCu\xE1nto tiempo puedo trabajar con Nivel A?", a: "El tiempo de trabajo est\xE1 limitado por el <strong>suministro de aire del SCBA</strong> (30-60 min) y el <strong>estr\xE9s t\xE9rmico</strong>. En condiciones de calor, los tiempos pueden ser de solo <strong>15-20 minutos</strong> por rotaci\xF3n." },
    { q: "\xBFEl traje se puede reutilizar despu\xE9s de exposici\xF3n?", a: "Depende del qu\xEDmico. Algunos trajes son <strong>desechables de un solo uso</strong>. Otros pueden descontaminarse y reutilizarse si no hay da\xF1o visible. Siempre seguir las <strong>tablas de permeaci\xF3n del fabricante</strong>." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel B", badge: "Nivel B", description: "Protecci\xF3n respiratoria.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b", buttonText: "Ver Nivel B", image: IMAGE },
    { title: "Resistencia Qu\xEDmica", badge: "Amplio espectro", description: "Tablas de permeaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Bota HAZMAT", badge: "Qu\xEDmica", description: "Bota encapsulada.", href: "/productos/botas-para-bomberos/caucho", buttonText: "Ver Botas", image: IMAGE },
    { title: "Casco HAZMAT", badge: "Qu\xEDmico", description: "Casco compatible.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b" },
    { label: "Resistencia Qu\xEDmica", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica" },
    { label: "Sistema Encapsulamiento", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento" },
    { label: "Compatible SCBA", href: "/productos/trajes-para-bomberos/traje-hazmat/scba" },
    { label: "Certificaci\xF3n CBRN", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Bota HAZMAT (Caucho)", href: "/productos/botas-para-bomberos/caucho", tag: "Pies" }, { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" }, { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }, { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle", tag: "Visual" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Niveles HAZMAT", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Equipos HAZMAT", href: "/directorio" }, { label: "Respuesta Qu\xEDmica", href: "/directorio" }];
  const specsRapidas = [{ label: "Nivel", valor: "A (m\xE1ximo)" }, { label: "SCBA", valor: "Interior" }, { label: "Sellado", valor: "Herm\xE9tico" }, { label: "NFPA", valor: "1991" }];
  const certItems = [{ code: "NFPA 1991", desc: "Vapor-protective" }, { code: "Nivel A", desc: "M\xE1xima protecci\xF3n" }, { code: "Encapsulado", desc: "Total herm\xE9tico" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Nivel A Encapsulado Total \u2014 NFPA 1991 | BOMBERO.MX", "description": "Traje HAZMAT Nivel A encapsulado total NFPA 1991. M\xE1xima protecci\xF3n qu\xEDmica contra vapores, gases y l\xEDquidos. SCBA interior. M\xE9xico.", "keywords": ["traje HAZMAT nivel A", "traje encapsulado qu\xEDmico", "traje NFPA 1991", "traje vapor protective", "equipo HAZMAT m\xE1ximo"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "Nivel A" }], "heroBadge": "Traje HAZMAT \xB7 Nivel A \xB7 Encapsulado \xB7 NFPA 1991", "heroTitle": "Traje HAZMAT Nivel A", "heroTitleHighlight": "Encapsulado Total", "heroSubtitle": "El nivel m\xE1s alto de protecci\xF3n qu\xEDmica. Encapsulamiento total herm\xE9tico con SCBA interior. Barrera multi-capa contra gases, vapores, l\xEDquidos y part\xEDculas. Presi\xF3n positiva interior. Certificado NFPA 1991.", "heroSeoBlocks": [{ title: "Encapsulamiento Total Herm\xE9tico", text: "Traje <strong>completamente encapsulado</strong> que cubre todo el cuerpo incluyendo SCBA. Sellado herm\xE9tico 360\xB0 contra <strong>gases, vapores, l\xEDquidos y part\xEDculas</strong>." }, { title: "Presi\xF3n Positiva Interior", text: "Sistema de <strong>presi\xF3n positiva</strong> que previene infiltraci\xF3n de contaminantes. Si hay peque\xF1a fuga, el aire sale hacia afuera. Certificaci\xF3n <strong>NFPA 1991</strong> vapor-protective." }], "ctaBarQuote": "Cotizar Nivel A", "productoCategoria": "Traje HAZMAT Nivel A", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1991" }, { modifier: "tpp", text: "Nivel A" }, { modifier: "solas", text: "Encapsulado" }], "productoMasVendido": true, "productoTitle": "Traje HAZMAT Nivel A \u2014 Encapsulado Total", "productoTitleSub": "Herm\xE9tico \xB7 SCBA Interior \xB7 Presi\xF3n Positiva", "productoDesc": "Traje HAZMAT de m\xE1xima protecci\xF3n con encapsulamiento total herm\xE9tico. SCBA interior, barrera qu\xEDmica multi-capa, presi\xF3n positiva interior. Para sustancias desconocidas y vapores de alta toxicidad. Certificado NFPA 1991.", "productoFeatures": ["Encapsulamiento total herm\xE9tico", "SCBA interior del traje", "Barrera qu\xEDmica multi-capa", "Presi\xF3n positiva interior", "Certificado NFPA 1991"], "productoAppTags": ["Sustancias desconocidas", "Vapores t\xF3xicos", "\xC1cidos concentrados", "CBRN"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT Nivel A encapsulado" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Respuesta HAZMAT" }], "capasEyebrow": "M\xE1xima Protecci\xF3n", "capasTitle": "Sistema Nivel A Encapsulado", "capasDesc": "Encapsulamiento total, barrera multi-capa y presi\xF3n positiva.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del Nivel A.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Nivel A", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>M\xE1ximo nivel de protecci\xF3n qu\xEDmica</strong>: sustancias desconocidas, vapores de alta toxicidad, \xE1cidos concentrados y operaciones CBRN.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1991 Vapor-Protective", "certsDesc": "Certificaci\xF3n <strong>NFPA 1991</strong> para trajes <strong>vapor-protective Nivel A</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Nivel A", "faqDescription": "Dudas sobre protecci\xF3n m\xE1xima.", "faqDocTitle": "Gu\xEDa HAZMAT", "faqDocDesc": "Niveles de protecci\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP HAZMAT Relacionado", "relacionadosDesc": "Completa tu equipo de respuesta qu\xEDmica.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/nivel-a/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/nivel-a/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/nivel-a";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
