import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Encapsulamiento de Una Pieza", descripcion: "Dise\xF1o de una sola pieza que cubre desde la cabeza hasta los pies sin costuras de uni\xF3n expuestas. El bombero entra por una abertura trasera que se sella herm\xE9ticamente.", specs: [{ label: "Dise\xF1o", valor: "Una pieza" }, { label: "Entrada", valor: "Abertura trasera" }, { label: "Sellado", valor: "Herm\xE9tico" }], color: "ember" },
    { num: "02", titulo: "Visor Panor\xE1mico Anti-Empa\xF1e", descripcion: "Visor de visi\xF3n amplia integrado al capuch\xF3n con tratamiento anti-empa\xF1e interior. Proporciona campo visual de 180\xB0 para mantener conciencia situacional durante operaciones.", specs: [{ label: "Visor", valor: "Panor\xE1mico 180\xB0" }, { label: "Tratamiento", valor: "Anti-empa\xF1e" }, { label: "Integraci\xF3n", valor: "Capuch\xF3n" }], color: "smoke" },
    { num: "03", titulo: "Guantes y Botas Integrados", descripcion: "Guantes y botas permanentemente unidos al traje para eliminar puntos de entrada. Las uniones est\xE1n termoselladas y probadas a presi\xF3n para garantizar hermeticidad total.", specs: [{ label: "Guantes", valor: "Integrados" }, { label: "Botas", valor: "Integradas" }, { label: "Uniones", valor: "Termoselladas" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Dise\xF1o", label: "Construcci\xF3n", valor: "Una pieza" },
    { categoria: "Dise\xF1o", label: "Entrada", valor: "Abertura trasera sellable" },
    { categoria: "Dise\xF1o", label: "Extremidades", valor: "Integradas" },
    { categoria: "Visor", label: "Tipo", valor: "Panor\xE1mico 180\xB0" },
    { categoria: "Visor", label: "Anti-empa\xF1e", valor: "Tratamiento interior" },
    { categoria: "Visor", label: "Material", valor: "Policarbonato" },
    { categoria: "Sellado", label: "Guantes", valor: "Termosellados" },
    { categoria: "Sellado", label: "Botas", valor: "Termoselladas" },
    { categoria: "Sellado", label: "Prueba", valor: "Presi\xF3n positiva" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1991 encapsulado" }
  ];
  const catClass = { "Dise\xF1o": "construccion", "Visor": "termico", "Sellado": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones Nivel A", desc: "Todas las operaciones que requieren protecci\xF3n Nivel A contra gases y vapores desconocidos o altamente t\xF3xicos." },
    { titulo: "Rescate en Ambiente Contaminado", desc: "Extracci\xF3n de v\xEDctimas de \xE1reas con contaminaci\xF3n qu\xEDmica donde el rescatista necesita protecci\xF3n total." },
    { titulo: "Descontaminaci\xF3n de \xC1rea Caliente", desc: "Personal que trabaja en la zona caliente de un incidente HAZMAT donde la exposici\xF3n es m\xE1xima." },
    { titulo: "Entrenamiento HAZMAT Avanzado", desc: "Capacitaci\xF3n de equipos HAZMAT en uso correcto del equipo encapsulado de m\xE1ximo nivel." }
  ];
  const faqs = [
    { q: "\xBFC\xF3mo se prueba la hermeticidad del traje?", a: "Los trajes encapsulados se prueban con <strong>prueba de presi\xF3n positiva</strong>. Se infla el traje y se verifica que mantenga presi\xF3n durante un tiempo determinado. Esta prueba debe hacerse <strong>antes de cada uso</strong> y documentarse." },
    { q: "\xBFCu\xE1nto tiempo dura la visi\xF3n clara en el visor?", a: "Con el <strong>tratamiento anti-empa\xF1e</strong> y ventilaci\xF3n correcta del SCBA, el visor mantiene visi\xF3n clara durante la operaci\xF3n normal. En condiciones de mucho calor o humedad, puede requerirse <strong>ventilador de visor</strong> adicional." },
    { q: "\xBFLos guantes integrados se pueden cambiar?", a: "Depende del modelo. Algunos trajes tienen <strong>sistema de guantes reemplazables</strong> con anillo de sellado. Otros tienen guantes permanentes. Los reemplazables permiten usar diferentes materiales seg\xFAn el qu\xEDmico." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel A", badge: "M\xE1ximo", description: "Especificaciones completas.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Compatible SCBA", badge: "Interior", description: "Sistema respiratorio.", href: "/productos/trajes-para-bomberos/traje-hazmat/scba", buttonText: "Ver SCBA", image: IMAGE },
    { title: "Resistencia Qu\xEDmica", badge: "Multi-qu\xEDmico", description: "Tablas permeaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Certificaci\xF3n CBRN", badge: "CBRN", description: "Amenazas especiales.", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn", buttonText: "Ver CBRN", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a" },
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b" },
    { label: "Resistencia Qu\xEDmica", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica" },
    { label: "Compatible SCBA", href: "/productos/trajes-para-bomberos/traje-hazmat/scba" },
    { label: "Certificaci\xF3n CBRN", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "SCBA Interior", href: "/productos", tag: "Respiratorio" }, { label: "Comunicaciones", href: "/productos", tag: "Radio" }, { label: "Detector Gases", href: "/productos", tag: "Monitoreo" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Encapsulamiento", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Equipos HAZMAT", href: "/directorio" }, { label: "Rescate Qu\xEDmico", href: "/directorio" }];
  const specsRapidas = [{ label: "Dise\xF1o", valor: "Una pieza" }, { label: "Visor", valor: "Panor\xE1mico 180\xB0" }, { label: "Extremidades", valor: "Integradas" }, { label: "NFPA", valor: "1991" }];
  const certItems = [{ code: "NFPA 1991", desc: "Encapsulado" }, { code: "Una Pieza", desc: "Dise\xF1o integral" }, { code: "Herm\xE9tico", desc: "Presi\xF3n positiva" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Encapsulado \u2014 Una Pieza Herm\xE9tico | BOMBERO.MX", "description": "Traje HAZMAT encapsulado de una pieza con visor panor\xE1mico, guantes y botas integrados. Sellado herm\xE9tico NFPA 1991. M\xE9xico.", "keywords": ["traje HAZMAT encapsulado", "traje una pieza herm\xE9tico", "traje NFPA 1991 total", "traje visor panor\xE1mico", "equipo encapsulamiento qu\xEDmico"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "Encapsulamiento" }], "heroBadge": "Traje HAZMAT \xB7 Encapsulado \xB7 Una Pieza \xB7 Herm\xE9tico", "heroTitle": "Traje HAZMAT", "heroTitleHighlight": "Sistema de Encapsulamiento", "heroSubtitle": "Dise\xF1o de una sola pieza que cubre completamente al usuario. Visor panor\xE1mico 180\xB0 anti-empa\xF1e, guantes y botas integrados termosellados. Hermeticidad total verificada por prueba de presi\xF3n.", "heroSeoBlocks": [{ title: "Encapsulamiento de Una Pieza", text: "Dise\xF1o <strong>integral de una sola pieza</strong> sin costuras expuestas. Entrada por abertura trasera que se sella herm\xE9ticamente. <strong>Guantes y botas integrados</strong> termosellados." }, { title: "Visor Panor\xE1mico 180\xB0", text: "Visor de <strong>visi\xF3n amplia panor\xE1mica</strong> con tratamiento <strong>anti-empa\xF1e interior</strong>. Mantiene conciencia situacional completa durante operaciones HAZMAT." }], "ctaBarQuote": "Cotizar Encapsulado", "productoCategoria": "Traje HAZMAT Encapsulado", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1991" }, { modifier: "tpp", text: "Encapsulado" }, { modifier: "solas", text: "Una Pieza" }], "productoMasVendido": false, "productoTitle": "Traje HAZMAT \u2014 Sistema de Encapsulamiento", "productoTitleSub": "Una Pieza \xB7 Visor 180\xB0 \xB7 Extremidades Integradas", "productoDesc": "Traje HAZMAT encapsulado de una sola pieza con visor panor\xE1mico 180\xB0 anti-empa\xF1e. Guantes y botas integrados termosellados. Hermeticidad total verificada por prueba de presi\xF3n. Certificado NFPA 1991.", "productoFeatures": ["Dise\xF1o una pieza", "Visor panor\xE1mico 180\xB0", "Guantes integrados", "Botas integradas", "Prueba presi\xF3n positiva"], "productoAppTags": ["Nivel A", "Rescate contaminado", "Zona caliente", "Entrenamiento"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT encapsulado" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n HAZMAT Nivel A" }], "capasEyebrow": "Sistema Encapsulado", "capasTitle": "Dise\xF1o Integral Herm\xE9tico", "capasDesc": "Una pieza, visor panor\xE1mico y extremidades integradas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del encapsulamiento.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Encapsulado", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones de m\xE1xima protecci\xF3n</strong>: Nivel A, rescate en ambiente contaminado, zona caliente HAZMAT y entrenamiento avanzado.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1991 Encapsulado", "certsDesc": "Certificaci\xF3n <strong>NFPA 1991</strong> para trajes <strong>encapsulados herm\xE9ticos</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Encapsulamiento", "faqDescription": "Dudas sobre hermeticidad.", "faqDocTitle": "Gu\xEDa T\xE9cnica", "faqDocDesc": "Pruebas de presi\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP Encapsulado Relacionado", "relacionadosDesc": "Completa tu sistema encapsulado.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
