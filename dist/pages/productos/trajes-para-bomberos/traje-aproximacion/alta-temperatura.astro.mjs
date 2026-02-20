import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Exposici\xF3n Corta 500\xB0C+ (932\xB0F+)", descripcion: "Sistema dise\xF1ado para permitir exposici\xF3n de corta duraci\xF3n (segundos a minutos) a temperaturas superiores a 500\xB0C. Para aproximaci\xF3n, rescate y retiro r\xE1pido de zonas de calor extremo.", specs: [{ label: "Temperatura", valor: "500\xB0C+ (932\xB0F+)" }, { label: "Duraci\xF3n", valor: "Corta" }, { label: "Uso", valor: "Aproximaci\xF3n/rescate" }], color: "ember" },
    { num: "02", titulo: "Trabajo Continuo 260\xB0C (500\xB0F)", descripcion: "Para trabajo prolongado, el traje soporta temperaturas continuas de hasta 260\xB0C (500\xB0F). L\xEDmite pr\xE1ctico para operaciones extendidas sin sistema de refrigeraci\xF3n.", specs: [{ label: "Temperatura", valor: "260\xB0C (500\xB0F)" }, { label: "Duraci\xF3n", valor: "Continua" }, { label: "L\xEDmite", valor: "Sin refrigeraci\xF3n" }], color: "smoke" },
    { num: "03", titulo: "Aislamiento T\xE9rmico Multi-Capa", descripcion: "Sistema de m\xFAltiples capas de aislamiento que reducen la transferencia de calor al interior. El usuario permanece en condiciones tolerables mientras el exterior est\xE1 expuesto a temperaturas extremas.", specs: [{ label: "Aislamiento", valor: "Multi-capa" }, { label: "Transferencia", valor: "Reducida" }, { label: "Interior", valor: "Tolerable" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Temperatura", label: "Exposici\xF3n corta", valor: "500\xB0C+ (932\xB0F+)" },
    { categoria: "Temperatura", label: "Continua", valor: "260\xB0C (500\xB0F)" },
    { categoria: "Temperatura", label: "Flash", valor: "1000\xB0C moment\xE1neo" },
    { categoria: "Aislamiento", label: "Sistema", valor: "Multi-capa" },
    { categoria: "Aislamiento", label: "Capas", valor: "3-5 seg\xFAn modelo" },
    { categoria: "Aislamiento", label: "Materiales", valor: "Fibra cer\xE1mica, aerogel" },
    { categoria: "Tiempos", label: "500\xB0C+", valor: "1-3 minutos" },
    { categoria: "Tiempos", label: "260\xB0C", valor: "15-30 minutos" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" },
    { categoria: "Certificaci\xF3n", label: "Temperatura", valor: "Rated" }
  ];
  const catClass = { "Temperatura": "construccion", "Aislamiento": "termico", "Tiempos": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Rescate en Hornos Industriales", desc: "Extracci\xF3n de trabajadores accidentados cerca de hornos de fundici\xF3n donde las temperaturas superan 500\xB0C." },
    { titulo: "Derrames de Metal Fundido", desc: "Aproximaci\xF3n a derrames de acero, aluminio u otros metales fundidos para control de emergencia." },
    { titulo: "Incendios de Hidrocarburos Industriales", desc: "Respuesta a incendios en refiner\xEDas o plantas qu\xEDmicas con temperaturas de radiaci\xF3n extremas." },
    { titulo: "Fallas de Calderas y Turbinas", desc: "Aproximaci\xF3n a equipos de alta presi\xF3n y temperatura en plantas de energ\xEDa con fallas catastr\xF3ficas." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1nto tiempo exacto puedo estar a 500\xB0C?", a: "Los tiempos var\xEDan por modelo y condiciones. T\xEDpicamente <strong>1-3 minutos</strong> a 500\xB0C+ antes de que el calor interior sea intolerable. El traje proporciona <strong>tiempo de aproximaci\xF3n, rescate y retiro</strong>, no trabajo prolongado." },
    { q: "\xBFQu\xE9 pasa si excedo el tiempo recomendado?", a: "El interior del traje se calentar\xE1 gradualmente. El usuario experimentar\xE1 <strong>incomodidad t\xE9rmica creciente</strong>, luego dolor. Antes de lesiones por quemadura, debe retirarse. Siempre tener <strong>compa\xF1ero de observaci\xF3n</strong> y plan de retiro." },
    { q: "\xBFNecesito refrigeraci\xF3n para trabajo a 260\xB0C?", a: "No necesariamente. A 260\xB0C continuo, el traje puede soportar <strong>15-30 minutos</strong> sin refrigeraci\xF3n (var\xEDa por modelo). Para tiempos mayores o mayor comodidad, se recomienda <strong>sistema de refrigeraci\xF3n</strong> integrado." }
  ];
  const relacionados = [
    { title: "Sistema Completo", badge: "Proximidad", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Sistema Refrigeraci\xF3n", badge: "Enfriamiento", description: "Tiempos mayores.", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion", buttonText: "Ver Refrigeraci\xF3n", image: IMAGE },
    { title: "Capa Aluminizada", badge: "Reflexi\xF3n", description: "95%+ IR.", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada", buttonText: "Ver Aluminizado", image: IMAGE },
    { title: "Visor Metalizado", badge: "Protecci\xF3n visual", description: "Anti-radiaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado", buttonText: "Ver Visor", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada" },
    { label: "Visor Metalizado", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado" },
    { label: "Sistema Refrigeraci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion" },
    { label: "Aplicaciones Industriales", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Alta Temperatura", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Alta Temperatura", href: "/productos/botas-para-bomberos", tag: "Pies" }, { label: "SCBA", href: "/productos", tag: "Respiratorio" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Tiempos Exposici\xF3n", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Industria Metal\xFArgica", href: "/directorio" }, { label: "Emergencias Industriales", href: "/directorio" }];
  const specsRapidas = [{ label: "Corta", valor: "500\xB0C+" }, { label: "Continua", valor: "260\xB0C" }, { label: "Flash", valor: "1000\xB0C" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "500\xB0C+", desc: "Exposici\xF3n corta" }, { code: "260\xB0C", desc: "Trabajo continuo" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n Alta Temperatura \u2014 500\xB0C+ NFPA 1971 | BOMBERO.MX", "description": "Traje aproximaci\xF3n para alta temperatura 500\xB0C+ corta duraci\xF3n, 260\xB0C continuo. Aislamiento multi-capa. NFPA 1971 proximity. M\xE9xico.", "keywords": ["traje aproximaci\xF3n alta temperatura", "traje 500 grados", "traje proximity extremo", "traje rescate calor", "equipo industrial temperatura"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Alta Temperatura" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 500\xB0C+ \xB7 260\xB0C Continuo \xB7 Multi-Capa", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Alta Temperatura", "heroSubtitle": "Exposici\xF3n corta a 500\xB0C+ (932\xB0F+) para aproximaci\xF3n y rescate. Trabajo continuo a 260\xB0C (500\xB0F). Sistema de aislamiento multi-capa que mantiene interior tolerable.", "heroSeoBlocks": [{ title: "Exposici\xF3n 500\xB0C+ (932\xB0F+)", text: "Sistema para <strong>exposici\xF3n de corta duraci\xF3n</strong> (1-3 minutos) a temperaturas superiores a 500\xB0C. Para <strong>aproximaci\xF3n, rescate y retiro</strong> de zonas de calor extremo." }, { title: "Trabajo Continuo 260\xB0C", text: "Para operaciones prolongadas, soporta <strong>260\xB0C (500\xB0F) continuo</strong> durante 15-30 minutos sin refrigeraci\xF3n. Sistema de <strong>aislamiento multi-capa</strong>." }], "ctaBarQuote": "Cotizar Alta Temperatura", "productoCategoria": "Traje Aproximaci\xF3n Alta Temp", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "500\xB0C+" }, { modifier: "solas", text: "260\xB0C" }], "productoMasVendido": false, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Alta Temperatura", "productoTitleSub": "500\xB0C+ Corta \xB7 260\xB0C Continuo \xB7 Multi-Capa", "productoDesc": "Traje de aproximaci\xF3n para exposici\xF3n corta a 500\xB0C+ y trabajo continuo a 260\xB0C. Sistema de aislamiento multi-capa. Para rescate en hornos, derrames de metal fundido e incendios industriales. Certificado NFPA 1971 proximity.", "productoFeatures": ["Exposici\xF3n corta 500\xB0C+", "Trabajo continuo 260\xB0C", "Flash 1000\xB0C moment\xE1neo", "Aislamiento multi-capa", "Certificado NFPA 1971"], "productoAppTags": ["Rescate hornos", "Metal fundido", "Hidrocarburos", "Calderas/turbinas"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n alta temperatura" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n alta temperatura" }], "capasEyebrow": "Protecci\xF3n T\xE9rmica", "capasTitle": "Sistema de Alta Temperatura", "capasDesc": "500\xB0C+ corta, 260\xB0C continuo y aislamiento multi-capa.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de temperatura y tiempos.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Alta Temperatura", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Exposici\xF3n a temperaturas extremas</strong>: rescate en hornos industriales, derrames de metal fundido, incendios de hidrocarburos y fallas de calderas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 Alta Temperatura", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> para <strong>temperaturas extremas</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Alta Temperatura", "faqDescription": "Dudas sobre tiempos y l\xEDmites.", "faqDocTitle": "Gu\xEDa Exposici\xF3n", "faqDocDesc": "Tiempos recomendados.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Alta Temperatura", "relacionadosDesc": "Completa tu equipo para calor extremo.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
