import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Industria Metal\xFArgica y Fundici\xF3n", descripcion: "Uso principal en fundiciones de acero, aluminio, cobre y otros metales. Protecci\xF3n para trabajo cerca de hornos de fusi\xF3n, coladas y transporte de metal l\xEDquido.", specs: [{ label: "Industria", valor: "Metal\xFArgica" }, { label: "Aplicaci\xF3n", valor: "Hornos, coladas" }, { label: "Temperatura", valor: "1000\xB0C+ fuente" }], color: "ember" },
    { num: "02", titulo: "Industria del Vidrio y Cer\xE1mica", descripcion: "Proximidad a hornos de vidrio fundido y hornos cer\xE1micos. Protecci\xF3n para inspecci\xF3n, mantenimiento y respuesta a emergencias en estas instalaciones.", specs: [{ label: "Industria", valor: "Vidrio/cer\xE1mica" }, { label: "Aplicaci\xF3n", valor: "Hornos, inspecci\xF3n" }, { label: "Radiaci\xF3n", valor: "Continua intensa" }], color: "smoke" },
    { num: "03", titulo: "Plantas de Energ\xEDa y Petroqu\xEDmica", descripcion: "Respuesta a emergencias en calderas, turbinas y equipos de alta temperatura. Incluye refiner\xEDas, plantas de generaci\xF3n y procesos petroqu\xEDmicos.", specs: [{ label: "Industria", valor: "Energ\xEDa/petroqu\xEDmica" }, { label: "Aplicaci\xF3n", valor: "Calderas, turbinas" }, { label: "Emergencias", valor: "Respuesta" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Metalurgia", label: "Acero", valor: "Fundici\xF3n 1500\xB0C+" },
    { categoria: "Metalurgia", label: "Aluminio", valor: "Fundici\xF3n 700\xB0C+" },
    { categoria: "Metalurgia", label: "Aplicaci\xF3n", valor: "Hornos, coladas, rescate" },
    { categoria: "Vidrio", label: "Temperatura", valor: "Hornos 1500\xB0C+" },
    { categoria: "Vidrio", label: "Radiaci\xF3n", valor: "Continua intensa" },
    { categoria: "Vidrio", label: "Aplicaci\xF3n", valor: "Inspecci\xF3n, emergencias" },
    { categoria: "Energ\xEDa", label: "Calderas", valor: "Alta presi\xF3n/temperatura" },
    { categoria: "Energ\xEDa", label: "Petroqu\xEDmica", valor: "Hidrocarburos, fuego" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" },
    { categoria: "Certificaci\xF3n", label: "Industrial", valor: "Aplicaciones verificadas" }
  ];
  const catClass = { "Metalurgia": "construccion", "Vidrio": "termico", "Energ\xEDa": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Fundici\xF3n de Acero y Metales", desc: "Trabajo cerca de hornos de arco el\xE9ctrico, convertidores y coladas de acero l\xEDquido a 1500\xB0C+." },
    { titulo: "Plantas de Aluminio", desc: "Proximidad a celdas electrol\xEDticas y hornos de fundici\xF3n de aluminio a 700\xB0C+." },
    { titulo: "F\xE1bricas de Vidrio", desc: "Inspecci\xF3n y mantenimiento cerca de hornos de vidrio fundido con radiaci\xF3n t\xE9rmica continua." },
    { titulo: "Refiner\xEDas y Petroqu\xEDmicas", desc: "Respuesta a emergencias en unidades de proceso con alta temperatura y riesgo de fuego." }
  ];
  const faqs = [
    { q: "\xBFNecesito traje de aproximaci\xF3n para trabajo industrial diario?", a: "No necesariamente. El traje de aproximaci\xF3n es para <strong>proximidad extrema</strong>. Para trabajo industrial rutinario a distancia segura de fuentes de calor, puede ser suficiente ropa FR est\xE1ndar seg\xFAn evaluaci\xF3n de riesgos." },
    { q: "\xBFEl traje de bombero es igual al industrial?", a: "T\xE9cnicamente similar. El traje de aproximaci\xF3n <strong>NFPA 1971</strong> es usado tanto por bomberos de emergencias industriales como por personal de planta. La selecci\xF3n depende de las <strong>condiciones espec\xEDficas</strong> del trabajo." },
    { q: "\xBFQu\xE9 industrias requieren traje de aproximaci\xF3n?", a: "Principalmente <strong>metalurgia</strong> (fundiciones), <strong>vidrio</strong>, <strong>cer\xE1mica</strong> y <strong>energ\xEDa/petroqu\xEDmica</strong>. Cualquier instalaci\xF3n con fuentes de calor extremo donde el personal deba acercarse para trabajo o emergencias." }
  ];
  const relacionados = [
    { title: "Sistema Completo", badge: "Proximidad", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Alta Temperatura", badge: "500\xB0C+", description: "Tiempos y l\xEDmites.", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", buttonText: "Ver Alta Temp", image: IMAGE },
    { title: "Refrigeraci\xF3n", badge: "Enfriamiento", description: "Trabajo prolongado.", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion", buttonText: "Ver Refrigeraci\xF3n", image: IMAGE },
    { title: "Guantes Industriales", badge: "Alta temp", description: "Protecci\xF3n manos.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada" },
    { label: "Alta Temperatura", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura" },
    { label: "Visor Metalizado", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado" },
    { label: "Sistema Refrigeraci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Alta Temperatura", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Industrial", href: "/productos/botas-para-bomberos", tag: "Pies" }, { label: "Respiratorio Industrial", href: "/productos", tag: "Aire" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Industrial", href: "/productos", tag: "Aplicaciones" }];
  const directorioLinks = [{ label: "Brigadas Industriales", href: "/directorio" }, { label: "Emergencias Planta", href: "/directorio" }];
  const specsRapidas = [{ label: "Metalurgia", valor: "Fundici\xF3n" }, { label: "Vidrio", valor: "Hornos" }, { label: "Energ\xEDa", valor: "Calderas" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "Industrial", desc: "Aplicaciones" }, { code: "Metalurgia", desc: "Fundici\xF3n/vidrio" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n Industrial \u2014 Metalurgia y Vidrio | BOMBERO.MX", "description": "Traje aproximaci\xF3n para aplicaciones industriales: fundici\xF3n de metales, industria del vidrio, plantas de energ\xEDa y petroqu\xEDmica. NFPA 1971. M\xE9xico.", "keywords": ["traje aproximaci\xF3n industrial", "traje fundici\xF3n metales", "traje industria vidrio", "traje petroqu\xEDmica", "equipo proximity industrial"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Aplicaciones Industriales" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 Industrial \xB7 Metalurgia \xB7 Vidrio \xB7 Energ\xEDa", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Aplicaciones Industriales", "heroSubtitle": "Uso en industria metal\xFArgica (fundiciones de acero, aluminio), industria del vidrio y cer\xE1mica, plantas de energ\xEDa y petroqu\xEDmica. Protecci\xF3n para trabajo y emergencias cerca de fuentes de calor extremo.", "heroSeoBlocks": [{ title: "Metalurgia y Fundici\xF3n", text: "Protecci\xF3n para trabajo cerca de <strong>hornos de fusi\xF3n</strong>, coladas y transporte de <strong>metal l\xEDquido</strong>. Acero a 1500\xB0C+, aluminio a 700\xB0C+. Industria metal\xFArgica primaria." }, { title: "Vidrio, Energ\xEDa y Petroqu\xEDmica", text: "Proximidad a <strong>hornos de vidrio</strong> fundido con radiaci\xF3n continua. Respuesta a emergencias en <strong>calderas, turbinas</strong> y procesos petroqu\xEDmicos de alta temperatura." }], "ctaBarQuote": "Cotizar Industrial", "productoCategoria": "Traje Aproximaci\xF3n Industrial", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "Industrial" }, { modifier: "solas", text: "Metalurgia" }], "productoMasVendido": false, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Aplicaciones Industriales", "productoTitleSub": "Metalurgia \xB7 Vidrio \xB7 Energ\xEDa \xB7 Petroqu\xEDmica", "productoDesc": "Traje de aproximaci\xF3n para aplicaciones industriales: fundici\xF3n de metales (acero, aluminio), industria del vidrio y cer\xE1mica, plantas de energ\xEDa y petroqu\xEDmica. Certificado NFPA 1971 proximity.", "productoFeatures": ["Fundici\xF3n de metales", "Industria del vidrio", "Plantas de energ\xEDa", "Petroqu\xEDmica", "Certificado NFPA 1971"], "productoAppTags": ["Acero/aluminio", "Vidrio fundido", "Calderas", "Refiner\xEDas"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n industrial" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n industrial proximidad" }], "capasEyebrow": "Aplicaciones Industriales", "capasTitle": "Sectores de Uso", "capasDesc": "Metalurgia, vidrio/cer\xE1mica y energ\xEDa/petroqu\xEDmica.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones por Industria", "specsDesc": "Todas las aplicaciones industriales.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Industrial", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Sectores industriales con calor extremo</strong>: fundici\xF3n de acero y metales, plantas de aluminio, f\xE1bricas de vidrio, refiner\xEDas y petroqu\xEDmicas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 Industrial", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> para <strong>aplicaciones industriales</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Industrial", "faqDescription": "Dudas sobre uso en industria.", "faqDocTitle": "Gu\xEDa Sectores", "faqDocDesc": "Aplicaciones por industria.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Industrial Relacionado", "relacionadosDesc": "Completa tu equipo para aplicaciones industriales.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
