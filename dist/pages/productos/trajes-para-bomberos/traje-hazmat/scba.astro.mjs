import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Cavidad Interna para SCBA", descripcion: "Dise\xF1o con espacio interior espec\xEDfico para alojar el equipo de respiraci\xF3n aut\xF3noma (SCBA) completo. El cilindro, arn\xE9s y regulador quedan protegidos dentro del ambiente herm\xE9tico del traje.", specs: [{ label: "Espacio", valor: "SCBA completo" }, { label: "Cilindro", valor: "Interior protegido" }, { label: "Arn\xE9s", valor: "Alojado interno" }], color: "ember" },
    { num: "02", titulo: "Sistema de Monitoreo de Aire", descripcion: "Man\xF3metro de presi\xF3n del cilindro visible desde el interior del traje. El usuario puede monitorear su suministro de aire sin asistencia externa durante toda la operaci\xF3n.", specs: [{ label: "Man\xF3metro", valor: "Visible interior" }, { label: "Monitoreo", valor: "Aut\xF3nomo" }, { label: "Alarma", valor: "Audible/t\xE1ctil" }], color: "smoke" },
    { num: "03", titulo: "Conexi\xF3n de Comunicaciones", descripcion: "Puerto de conexi\xF3n para sistema de comunicaciones compatible con m\xE1scaras SCBA. Permite comunicaci\xF3n por radio sin comprometer el sellado del traje.", specs: [{ label: "Puerto", valor: "Comunicaciones" }, { label: "Radio", valor: "Compatible" }, { label: "Sellado", valor: "Mantenido" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "SCBA", label: "Posici\xF3n", valor: "Interior del traje" },
    { categoria: "SCBA", label: "Cilindros", valor: "30-45-60 min" },
    { categoria: "SCBA", label: "Compatibilidad", valor: "Marcas principales" },
    { categoria: "Monitoreo", label: "Man\xF3metro", valor: "Visible interior" },
    { categoria: "Monitoreo", label: "Alarma baja presi\xF3n", valor: "Audible/t\xE1ctil" },
    { categoria: "Monitoreo", label: "Telemetr\xEDa", valor: "Opcional externa" },
    { categoria: "Comunicaciones", label: "Puerto", valor: "Integrado" },
    { categoria: "Comunicaciones", label: "Radio", valor: "Compatible" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1991 + 1981" },
    { categoria: "Certificaci\xF3n", label: "SCBA", valor: "NIOSH" }
  ];
  const catClass = { "SCBA": "construccion", "Monitoreo": "termico", "Comunicaciones": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones Nivel A Completas", desc: "Cualquier operaci\xF3n que requiera protecci\xF3n Nivel A donde el SCBA debe estar completamente encapsulado." },
    { titulo: "Operaciones Prolongadas", desc: "Incidentes que requieren m\xFAltiples entradas con cambio de cilindros de aire sin retirar el traje." },
    { titulo: "Ambientes de Concentraci\xF3n Desconocida", desc: "Respuesta inicial donde la concentraci\xF3n de contaminantes no ha sido medida y se asume IDLH." },
    { titulo: "Rescate en Espacio Confinado", desc: "Extracci\xF3n de v\xEDctimas de espacios confinados con atm\xF3sfera contaminada o deficiente en ox\xEDgeno." }
  ];
  const faqs = [
    { q: "\xBFCualquier SCBA es compatible?", a: "La mayor\xEDa de <strong>SCBA de marcas principales</strong> (Scott, MSA, Drager, etc.) son compatibles, pero debe verificarse que el <strong>tama\xF1o del cilindro y arn\xE9s</strong> caben en el espacio interior del traje espec\xEDfico. Consultar matriz de compatibilidad del fabricante." },
    { q: "\xBFC\xF3mo se cambia el cilindro sin contaminar?", a: "El cambio de cilindro en Nivel A requiere <strong>zona de descontaminaci\xF3n</strong> o procedimiento de <strong>buddy system</strong> donde un compa\xF1ero asiste. En algunos trajes hay <strong>puertos de cambio r\xE1pido</strong> que minimizan exposici\xF3n." },
    { q: "\xBFCu\xE1nto dura el aire en operaci\xF3n HAZMAT?", a: "Menos que en operaci\xF3n normal de bombero. El <strong>estr\xE9s t\xE9rmico</strong> del traje encapsulado aumenta el consumo de aire. Un cilindro de 45 minutos puede durar solo <strong>20-25 minutos</strong> en trabajo intenso con traje Nivel A." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel A", badge: "M\xE1ximo", description: "Encapsulado total.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Sistema Encapsulamiento", badge: "Una pieza", description: "Dise\xF1o integral.", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento", buttonText: "Ver Encapsulado", image: IMAGE },
    { title: "Certificaci\xF3n CBRN", badge: "CBRN", description: "Amenazas especiales.", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn", buttonText: "Ver CBRN", image: IMAGE },
    { title: "Casco HAZMAT", badge: "Qu\xEDmico", description: "Compatible.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a" },
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b" },
    { label: "Resistencia Qu\xEDmica", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica" },
    { label: "Sistema Encapsulamiento", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento" },
    { label: "Certificaci\xF3n CBRN", href: "/productos/trajes-para-bomberos/traje-hazmat/cbrn" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Cilindros SCBA", href: "/productos", tag: "Aire" }, { label: "M\xE1scara SCBA", href: "/productos", tag: "Respiratorio" }, { label: "Sistema Comunicaciones", href: "/productos", tag: "Radio" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Compatibilidad SCBA", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Equipos HAZMAT", href: "/directorio" }, { label: "Rescate Confinado", href: "/directorio" }];
  const specsRapidas = [{ label: "SCBA", valor: "Interior traje" }, { label: "Cilindros", valor: "30-45-60 min" }, { label: "Radio", valor: "Compatible" }, { label: "NFPA", valor: "1991+1981" }];
  const certItems = [{ code: "NFPA 1991", desc: "Traje encapsulado" }, { code: "NFPA 1981", desc: "SCBA compatible" }, { code: "NIOSH", desc: "Respiratorio" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Compatible SCBA \u2014 Interior Encapsulado | BOMBERO.MX", "description": "Traje HAZMAT compatible con SCBA interior. Espacio para cilindro, monitoreo de aire y comunicaciones. NFPA 1991+1981. M\xE9xico.", "keywords": ["traje HAZMAT SCBA", "traje encapsulado respiraci\xF3n", "traje NFPA SCBA interior", "traje aire aut\xF3nomo", "equipo HAZMAT respiratorio"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/scba", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "Compatible SCBA" }], "heroBadge": "Traje HAZMAT \xB7 SCBA Interior \xB7 Comunicaciones", "heroTitle": "Traje HAZMAT", "heroTitleHighlight": "Compatible SCBA", "heroSubtitle": "Dise\xF1o con cavidad interna para SCBA completo. Monitoreo de presi\xF3n visible desde interior y puerto de comunicaciones integrado. Compatible con principales marcas de equipos respiratorios.", "heroSeoBlocks": [{ title: "SCBA Interior Protegido", text: "Espacio interior espec\xEDfico para <strong>SCBA completo</strong>: cilindro, arn\xE9s y regulador protegidos dentro del ambiente herm\xE9tico. Compatible con <strong>cilindros de 30, 45 y 60 minutos</strong>." }, { title: "Monitoreo + Comunicaciones", text: "<strong>Man\xF3metro visible</strong> desde interior para monitoreo aut\xF3nomo de aire. Puerto de <strong>comunicaciones integrado</strong> para radio sin comprometer sellado del traje." }], "ctaBarQuote": "Cotizar Compatible SCBA", "productoCategoria": "Traje HAZMAT SCBA", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1991" }, { modifier: "tpp", text: "SCBA Interior" }, { modifier: "solas", text: "NIOSH" }], "productoMasVendido": false, "productoTitle": "Traje HAZMAT \u2014 Compatible SCBA", "productoTitleSub": "SCBA Interior \xB7 Monitoreo \xB7 Comunicaciones", "productoDesc": "Traje HAZMAT con cavidad interna para SCBA completo. Man\xF3metro visible desde interior para monitoreo aut\xF3nomo. Puerto de comunicaciones integrado. Compatible con principales marcas. Certificado NFPA 1991 + 1981.", "productoFeatures": ["Cavidad interna SCBA", "Cilindros 30-45-60 min", "Man\xF3metro visible interior", "Puerto comunicaciones", "Certificado NFPA 1991+1981"], "productoAppTags": ["Nivel A completo", "Operaciones prolongadas", "IDLH", "Espacio confinado"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT compatible SCBA" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n HAZMAT con SCBA" }], "capasEyebrow": "Sistema Respiratorio", "capasTitle": "Integraci\xF3n SCBA Completa", "capasDesc": "Cavidad SCBA, monitoreo de aire y comunicaciones.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de compatibilidad SCBA.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso con SCBA", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones con respiraci\xF3n aut\xF3noma</strong>: Nivel A completo, operaciones prolongadas, ambientes IDLH y rescate en espacio confinado.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1991 + 1981 + NIOSH", "certsDesc": "Certificaci\xF3n <strong>NFPA 1991</strong> (traje) + <strong>NFPA 1981</strong> (SCBA) + <strong>NIOSH</strong> (respiratorio).", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas SCBA", "faqDescription": "Dudas sobre respiraci\xF3n.", "faqDocTitle": "Compatibilidad", "faqDocDesc": "Marcas SCBA compatibles.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema HAZMAT", "relacionadosTitle": "EPP Respiratorio Relacionado", "relacionadosDesc": "Completa tu sistema respiratorio HAZMAT.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/scba/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/scba/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/scba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
