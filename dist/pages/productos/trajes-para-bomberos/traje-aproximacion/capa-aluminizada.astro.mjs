import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Aluminio de Alta Pureza 99%+", descripcion: "Recubrimiento de aluminio de pureza superior al 99% que maximiza la reflexi\xF3n de radiaci\xF3n infrarroja. El aluminio de alta pureza refleja mejor que aleaciones o aluminio de menor grado.", specs: [{ label: "Pureza", valor: "99%+ aluminio" }, { label: "Reflexi\xF3n", valor: "M\xE1xima" }, { label: "Grado", valor: "Superior" }], color: "ember" },
    { num: "02", titulo: "Aplicaci\xF3n por Vaporizaci\xF3n", descripcion: "El aluminio se aplica por proceso de vaporizaci\xF3n al vac\xEDo sobre el sustrato. Este m\xE9todo produce una capa uniforme y adherente que no se del\xE1mina como las l\xE1minas pegadas.", specs: [{ label: "Proceso", valor: "Vaporizaci\xF3n vac\xEDo" }, { label: "Uniformidad", valor: "Total" }, { label: "Adherencia", valor: "Superior" }], color: "smoke" },
    { num: "03", titulo: "Sustrato Resistente Base", descripcion: "El aluminio est\xE1 depositado sobre sustrato de fibra resistente a llamas (Kevlar\xAE, PBI, fibra de vidrio) que mantiene integridad estructural bajo calor extremo.", specs: [{ label: "Sustrato", valor: "Fibra FR" }, { label: "Opciones", valor: "Kevlar\xAE, PBI, FV" }, { label: "Integridad", valor: "Alta temperatura" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Aluminio", label: "Pureza", valor: "99%+" },
    { categoria: "Aluminio", label: "Reflexi\xF3n IR", valor: "95%+" },
    { categoria: "Aluminio", label: "Aplicaci\xF3n", valor: "Vaporizaci\xF3n vac\xEDo" },
    { categoria: "Sustrato", label: "Opciones", valor: "Kevlar\xAE, PBI, FV" },
    { categoria: "Sustrato", label: "Resistencia", valor: "Llamas inherente" },
    { categoria: "Sustrato", label: "Temperatura", valor: "500\xB0C+ estructural" },
    { categoria: "Durabilidad", label: "Flexibilidad", valor: "Mantenida" },
    { categoria: "Durabilidad", label: "Delaminaci\xF3n", valor: "Resistente" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" },
    { categoria: "Certificaci\xF3n", label: "Reflexi\xF3n", valor: "Verificada" }
  ];
  const catClass = { "Aluminio": "construccion", "Sustrato": "termico", "Durabilidad": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Proximidad a Radiaci\xF3n Extrema", desc: "Cualquier operaci\xF3n donde la radiaci\xF3n t\xE9rmica infrarroja es el peligro principal y se requiere m\xE1xima reflexi\xF3n." },
    { titulo: "Hornos de Fundici\xF3n de Metales", desc: "Trabajo cerca de hornos de fundici\xF3n de acero, aluminio, cobre y otros metales a temperaturas de 1000\xB0C+." },
    { titulo: "Industria del Vidrio", desc: "Proximidad a hornos de vidrio fundido donde la radiaci\xF3n t\xE9rmica es intensa y continua." },
    { titulo: "Emergencias Industriales", desc: "Respuesta a incidentes en instalaciones industriales con fuentes de calor extremo." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 importa la pureza del aluminio?", a: "El aluminio de <strong>99%+ de pureza</strong> tiene mayor reflectividad IR que aleaciones o aluminio de menor grado. Cada punto porcentual de pureza mejora la <strong>reflexi\xF3n de radiaci\xF3n</strong>, cr\xEDtico en proximidad a fuentes extremas." },
    { q: "\xBFLa vaporizaci\xF3n es mejor que l\xE1minas pegadas?", a: "S\xED. La <strong>vaporizaci\xF3n al vac\xEDo</strong> produce una capa molecular unida al sustrato. Las l\xE1minas pegadas pueden <strong>delaminarse</strong> con calor y flexi\xF3n. La vaporizaci\xF3n mantiene integridad bajo uso extremo." },
    { q: "\xBFEl aluminio se deteriora con el uso?", a: "S\xED, gradualmente. La <strong>oxidaci\xF3n</strong> reduce la reflectividad con el tiempo. La inspecci\xF3n regular es requerida. Si la superficie pierde brillo significativo o hay da\xF1os visibles, debe <strong>retirarse del servicio</strong>." }
  ];
  const relacionados = [
    { title: "Sistema Completo", badge: "Proximidad", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Alta Temperatura", badge: "500\xB0C+", description: "Exposici\xF3n extrema.", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", buttonText: "Ver Alta Temp", image: IMAGE },
    { title: "Guantes Aluminizados", badge: "Proximidad", description: "Manos protegidas.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE },
    { title: "Traje ARFF Aluminizado", badge: "Parcial", description: "Para aviaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada", buttonText: "Ver ARFF", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo" },
    { label: "Alta Temperatura", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura" },
    { label: "Visor Metalizado", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado" },
    { label: "Sistema Refrigeraci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion" },
    { label: "Aplicaciones Industriales", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Aluminizados", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Capuch\xF3n Aluminizado", href: "/productos", tag: "Cabeza" }, { label: "Polainas Aluminizadas", href: "/productos", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Cuidado Aluminizado", href: "/productos", tag: "Mantenimiento" }];
  const directorioLinks = [{ label: "Industria Metal\xFArgica", href: "/directorio" }, { label: "Fundiciones", href: "/directorio" }];
  const specsRapidas = [{ label: "Pureza", valor: "99%+ Al" }, { label: "Reflexi\xF3n", valor: "95%+" }, { label: "Proceso", valor: "Vaporizaci\xF3n" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "99%+ Al", desc: "Alta pureza" }, { code: "Vaporizado", desc: "Adherencia superior" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n \u2014 Capa Aluminizada 99% Pureza | BOMBERO.MX", "description": "Traje aproximaci\xF3n con capa aluminizada de 99%+ pureza. Reflexi\xF3n 95%+ de radiaci\xF3n IR. Vaporizaci\xF3n al vac\xEDo. NFPA 1971 proximity. M\xE9xico.", "keywords": ["traje aproximaci\xF3n aluminizado", "capa aluminio alta pureza", "traje proximity reflexi\xF3n", "traje vaporizado aluminio", "equipo radiaci\xF3n extrema"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Capa Aluminizada" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 Aluminio 99%+ \xB7 Vaporizaci\xF3n \xB7 95% Reflexi\xF3n", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Capa Aluminizada", "heroSubtitle": "Aluminio de pureza 99%+ aplicado por vaporizaci\xF3n al vac\xEDo. Reflexi\xF3n superior al 95% de radiaci\xF3n infrarroja. Sustrato de fibra resistente a llamas. M\xE1xima protecci\xF3n contra radiaci\xF3n t\xE9rmica.", "heroSeoBlocks": [{ title: "Aluminio 99%+ Alta Pureza", text: "Recubrimiento de <strong>aluminio de pureza superior al 99%</strong> que maximiza reflexi\xF3n IR. La alta pureza refleja mejor que aleaciones, cr\xEDtico en <strong>proximidad a fuentes extremas</strong>." }, { title: "Vaporizaci\xF3n al Vac\xEDo", text: "Aplicaci\xF3n por <strong>vaporizaci\xF3n</strong> que produce capa molecular adherente. Superior a l\xE1minas pegadas que pueden <strong>delaminarse</strong>. Sobre sustrato de <strong>fibra FR</strong>." }], "ctaBarQuote": "Cotizar Aluminizado", "productoCategoria": "Traje Aproximaci\xF3n Aluminizado", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "99%+ Al" }, { modifier: "solas", text: "95%+" }], "productoMasVendido": false, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Capa Aluminizada", "productoTitleSub": "Aluminio 99%+ \xB7 Vaporizaci\xF3n \xB7 Sustrato FR", "productoDesc": "Traje de aproximaci\xF3n con capa de aluminio de 99%+ de pureza aplicado por vaporizaci\xF3n al vac\xEDo. Reflexi\xF3n superior al 95% de radiaci\xF3n IR sobre sustrato de fibra FR. Certificado NFPA 1971 proximity.", "productoFeatures": ["Aluminio 99%+ pureza", "Vaporizaci\xF3n al vac\xEDo", "Reflexi\xF3n 95%+ IR", "Sustrato Kevlar\xAE/PBI/FV", "Certificado NFPA 1971"], "productoAppTags": ["Radiaci\xF3n extrema", "Hornos fundici\xF3n", "Industria vidrio", "Emergencias industriales"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n capa aluminizada" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n proximidad industrial" }], "capasEyebrow": "Material Aluminizado", "capasTitle": "Sistema de Reflexi\xF3n M\xE1xima", "capasDesc": "Aluminio alta pureza, vaporizaci\xF3n y sustrato FR.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del material aluminizado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Aluminizado", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Proximidad a radiaci\xF3n extrema</strong>: hornos de fundici\xF3n de metales, industria del vidrio, emergencias industriales con fuentes de calor extremo.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 + Alta Pureza", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> con <strong>aluminio 99%+ verificado</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Aluminizado", "faqDescription": "Dudas sobre material reflectante.", "faqDocTitle": "Cuidado Aluminizado", "faqDocDesc": "Mantenimiento y vida \xFAtil.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Aluminizado Relacionado", "relacionadosDesc": "Completa tu equipo de reflexi\xF3n t\xE9rmica.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
