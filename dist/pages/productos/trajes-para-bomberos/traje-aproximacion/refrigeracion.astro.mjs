import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Sistema de Circulaci\xF3n de Aire Fr\xEDo", descripcion: "Mangueras integradas que circulan aire fr\xEDo desde fuente externa hacia el interior del traje. Reduce la temperatura corporal permitiendo tiempos de trabajo m\xE1s largos en proximidad.", specs: [{ label: "Sistema", valor: "Circulaci\xF3n aire" }, { label: "Fuente", valor: "Externa" }, { label: "Efecto", valor: "Enfriamiento" }], color: "ember" },
    { num: "02", titulo: "Chaleco de Refrigeraci\xF3n por Fase", descripcion: "Chaleco interior con paquetes de cambio de fase que absorben calor corporal. Funciona de forma aut\xF3noma sin conexi\xF3n externa por periodos limitados.", specs: [{ label: "Chaleco", valor: "Cambio de fase" }, { label: "Aut\xF3nomo", valor: "Sin conexi\xF3n" }, { label: "Duraci\xF3n", valor: "Limitada" }], color: "smoke" },
    { num: "03", titulo: "Sistema de Agua Refrigerada", descripcion: "Opci\xF3n avanzada con circulaci\xF3n de agua refrigerada a trav\xE9s de tubos en el forro interior. Proporciona enfriamiento m\xE1s eficiente que aire pero requiere equipo m\xE1s complejo.", specs: [{ label: "Sistema", valor: "Agua refrigerada" }, { label: "Eficiencia", valor: "Superior" }, { label: "Equipo", valor: "Complejo" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Aire Fr\xEDo", label: "Sistema", valor: "Circulaci\xF3n externa" },
    { categoria: "Aire Fr\xEDo", label: "Conexi\xF3n", valor: "Manguera suministro" },
    { categoria: "Aire Fr\xEDo", label: "Autonom\xEDa", valor: "Limitada por manguera" },
    { categoria: "Cambio Fase", label: "Sistema", valor: "Paquetes PCM" },
    { categoria: "Cambio Fase", label: "Autonom\xEDa", valor: "30-60 minutos" },
    { categoria: "Cambio Fase", label: "Recarga", valor: "Congelador/nevera" },
    { categoria: "Agua", label: "Sistema", valor: "Circulaci\xF3n tubos" },
    { categoria: "Agua", label: "Eficiencia", valor: "M\xE1xima" },
    { categoria: "Agua", label: "Equipo", valor: "Bomba + dep\xF3sito" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity + cooling" }
  ];
  const catClass = { "Aire Fr\xEDo": "construccion", "Cambio Fase": "termico", "Agua": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Trabajo Prolongado en Proximidad", desc: "Operaciones que requieren permanencia extendida cerca de fuentes de calor donde sin refrigeraci\xF3n el tiempo es muy limitado." },
    { titulo: "Rescate de M\xFAltiples V\xEDctimas", desc: "Escenarios con varias v\xEDctimas donde se requiere permanecer en zona caliente m\xE1s tiempo del normal." },
    { titulo: "Operaciones de Control en Hornos", desc: "Trabajo de mantenimiento o control cerca de hornos industriales donde el personal debe permanecer periodos prolongados." },
    { titulo: "Condiciones Ambientales Extremas", desc: "Operaciones en climas calientes donde el estr\xE9s t\xE9rmico ambiental se suma al calor de la fuente." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l sistema de refrigeraci\xF3n es mejor?", a: "Depende del uso. <strong>Aire fr\xEDo</strong> es m\xE1s simple pero limita movilidad por manguera. <strong>Cambio de fase (PCM)</strong> es aut\xF3nomo pero con duraci\xF3n limitada. <strong>Agua refrigerada</strong> es m\xE1s eficiente pero m\xE1s complejo." },
    { q: "\xBFCu\xE1nto extiende el tiempo de trabajo?", a: "Significativamente. Sin refrigeraci\xF3n, puede trabajarse <strong>1-3 minutos</strong> a temperaturas extremas. Con refrigeraci\xF3n, puede extenderse a <strong>10-30+ minutos</strong> dependiendo del sistema y condiciones." },
    { q: "\xBFEs obligatorio el sistema de refrigeraci\xF3n?", a: "No siempre. Para aproximaci\xF3n <strong>breve</strong> (segundos a pocos minutos), el traje sin refrigeraci\xF3n es suficiente. Para trabajo <strong>prolongado</strong> en proximidad, la refrigeraci\xF3n es necesaria para seguridad y efectividad." }
  ];
  const relacionados = [
    { title: "Sistema Completo", badge: "Proximidad", description: "Sin refrigeraci\xF3n.", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Alta Temperatura", badge: "500\xB0C+", description: "Tiempos de exposici\xF3n.", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", buttonText: "Ver Alta Temp", image: IMAGE },
    { title: "Aplicaciones Industriales", badge: "Industrial", description: "Uso prolongado.", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales", buttonText: "Ver Industrial", image: IMAGE },
    { title: "Chaleco Enfriamiento", badge: "PCM", description: "Accesorio.", href: "/productos", buttonText: "Ver Chaleco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada" },
    { label: "Alta Temperatura", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura" },
    { label: "Visor Metalizado", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado" },
    { label: "Aplicaciones Industriales", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Chaleco PCM", href: "/productos", tag: "Enfriamiento" }, { label: "Fuente Aire", href: "/productos", tag: "Suministro" }, { label: "SCBA", href: "/productos", tag: "Respiratorio" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Refrigeraci\xF3n", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Industria Metal\xFArgica", href: "/directorio" }, { label: "Plantas Energ\xEDa", href: "/directorio" }];
  const specsRapidas = [{ label: "Aire", valor: "Circulaci\xF3n" }, { label: "PCM", valor: "30-60 min" }, { label: "Agua", valor: "M\xE1x eficiencia" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity + cooling" }, { code: "PCM", desc: "Cambio fase" }, { code: "Extendido", desc: "10-30+ min" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n \u2014 Refrigeraci\xF3n Activa | BOMBERO.MX", "description": "Traje aproximaci\xF3n con sistema de refrigeraci\xF3n: aire fr\xEDo, cambio de fase PCM, agua refrigerada. Tiempos extendidos en proximidad. M\xE9xico.", "keywords": ["traje aproximaci\xF3n refrigeraci\xF3n", "traje enfriamiento activo", "traje proximity cooling", "traje PCM cambio fase", "equipo refrigeraci\xF3n industrial"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Refrigeraci\xF3n" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 Refrigeraci\xF3n \xB7 PCM \xB7 Aire/Agua", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Sistema de Refrigeraci\xF3n", "heroSubtitle": "Sistemas de enfriamiento activo para extender tiempos de trabajo en proximidad: circulaci\xF3n de aire fr\xEDo, chalecos de cambio de fase (PCM) y agua refrigerada. De minutos a 30+ minutos de trabajo.", "heroSeoBlocks": [{ title: "M\xFAltiples Sistemas de Enfriamiento", text: "<strong>Aire fr\xEDo</strong> circulante desde fuente externa, <strong>chalecos PCM</strong> aut\xF3nomos (30-60 min) o <strong>agua refrigerada</strong> de m\xE1xima eficiencia. Cada sistema con ventajas espec\xEDficas." }, { title: "Tiempos de Trabajo Extendidos", text: "Sin refrigeraci\xF3n: <strong>1-3 minutos</strong> en calor extremo. Con refrigeraci\xF3n: <strong>10-30+ minutos</strong>. Permite operaciones de rescate y control m\xE1s efectivas." }], "ctaBarQuote": "Cotizar Refrigeraci\xF3n", "productoCategoria": "Traje Aproximaci\xF3n Cooling", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "Cooling" }, { modifier: "solas", text: "30+ min" }], "productoMasVendido": false, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Sistema de Refrigeraci\xF3n", "productoTitleSub": "Aire Fr\xEDo \xB7 PCM \xB7 Agua Refrigerada", "productoDesc": "Traje de aproximaci\xF3n con sistemas de refrigeraci\xF3n activa: circulaci\xF3n de aire fr\xEDo, chalecos de cambio de fase (PCM) aut\xF3nomos 30-60 min, agua refrigerada de m\xE1xima eficiencia. Extiende tiempos de trabajo de minutos a 30+ minutos.", "productoFeatures": ["Circulaci\xF3n aire fr\xEDo", "Chalecos PCM 30-60 min", "Agua refrigerada opci\xF3n", "Tiempos extendidos 10-30+", "Certificado NFPA 1971"], "productoAppTags": ["Trabajo prolongado", "Rescate m\xFAltiple", "Control hornos", "Clima extremo"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n refrigeraci\xF3n" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n prolongada proximidad" }], "capasEyebrow": "Sistema Enfriamiento", "capasTitle": "Refrigeraci\xF3n Activa", "capasDesc": "Aire fr\xEDo, cambio de fase y agua refrigerada.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de sistemas de refrigeraci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Refrigerado", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones de proximidad prolongada</strong>: trabajo extendido cerca de calor, rescate de m\xFAltiples v\xEDctimas, control en hornos y condiciones ambientales extremas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 + Cooling", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> con <strong>sistemas de refrigeraci\xF3n</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Refrigeraci\xF3n", "faqDescription": "Dudas sobre enfriamiento.", "faqDocTitle": "Gu\xEDa Sistemas", "faqDocDesc": "Comparativa refrigeraci\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Refrigeraci\xF3n Relacionado", "relacionadosDesc": "Completa tu sistema de enfriamiento.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
