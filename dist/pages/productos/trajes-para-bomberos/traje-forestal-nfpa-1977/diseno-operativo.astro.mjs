import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Bolsillos Operativos Estrat\xE9gicos", descripcion: "Sistema de bolsillos dise\xF1ado con input de bomberos forestales activos. Bolsillos de pecho para radio, bolsillos laterales para herramientas y bolsillo de espalda para mapas. Acceso r\xE1pido sin quitar guantes.", specs: [{ label: "Bolsillos", valor: "Estrat\xE9gicos" }, { label: "Acceso", valor: "Con guantes" }, { label: "Carga", valor: "Radio, herramientas, mapas" }], color: "ember" },
    { num: "02", titulo: "Corte Ergon\xF3mico de Movilidad", descripcion: "Patr\xF3n de corte dise\xF1ado para movilidad en terreno irregular. Rodillas articuladas, entrepierna con fuelle y sisas amplias. El bombero puede correr, agacharse y escalar sin restricci\xF3n.", specs: [{ label: "Corte", valor: "Ergon\xF3mico" }, { label: "Rodillas", valor: "Articuladas" }, { label: "Movilidad", valor: "Sin restricci\xF3n" }], color: "smoke" },
    { num: "03", titulo: "Sistema de Ajuste R\xE1pido", descripcion: "Cintura con doble ajuste (el\xE1stico + velcro), pu\xF1os con velcro y tobillos con el\xE1stico. Todo el sistema permite ajuste r\xE1pido en campo sin herramientas ni tiempo perdido.", specs: [{ label: "Cintura", valor: "Doble ajuste" }, { label: "Pu\xF1os", valor: "Velcro" }, { label: "Tobillos", valor: "El\xE1stico" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Bolsillos", label: "Pecho", valor: "2 (radio)" },
    { categoria: "Bolsillos", label: "Laterales", valor: "4 (herramientas)" },
    { categoria: "Bolsillos", label: "Espalda", valor: "1 (mapas/documentos)" },
    { categoria: "Bolsillos", label: "Acceso", valor: "Con guantes" },
    { categoria: "Corte", label: "Patr\xF3n", valor: "Ergon\xF3mico campo" },
    { categoria: "Corte", label: "Rodillas", valor: "Articuladas reforzadas" },
    { categoria: "Corte", label: "Entrepierna", valor: "Fuelle movilidad" },
    { categoria: "Ajuste", label: "Cintura", valor: "El\xE1stico + velcro" },
    { categoria: "Ajuste", label: "Pu\xF1os/Tobillos", valor: "Velcro/el\xE1stico" },
    { categoria: "Certificaci\xF3n", label: "Norma", valor: "NFPA 1977 wildland" }
  ];
  const catClass = { "Bolsillos": "construccion", "Corte": "ergonomia", "Ajuste": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones T\xE1cticas", desc: "Combate de incendios donde el acceso r\xE1pido a radio, herramientas y mapas es cr\xEDtico para coordinaci\xF3n efectiva." },
    { titulo: "Terreno Irregular Extremo", desc: "Monta\xF1a, barrancas y pendientes pronunciadas donde la movilidad del traje marca diferencia en seguridad." },
    { titulo: "Jornadas de Alta Actividad", desc: "Operaciones donde el bombero est\xE1 constantemente en movimiento y necesita un traje que no lo restrinja." },
    { titulo: "Brigadas Experimentadas", desc: "Personal con experiencia que sabe exactamente qu\xE9 necesita de su equipo y prioriza funcionalidad operativa." }
  ];
  const faqs = [
    { q: "\xBFLos bolsillos adicionales a\xF1aden peso significativo?", a: "M\xEDnimo. Los <strong>bolsillos operativos</strong> est\xE1n fabricados con el mismo tejido Nomex\xAE del traje. El peso adicional es de <strong>menos de 100 gramos</strong>, compensado por la funcionalidad que proporcionan." },
    { q: "\xBFEl corte ergon\xF3mico afecta la protecci\xF3n?", a: "No. El <strong>corte ergon\xF3mico</strong> redistribuye el tejido para maximizar movilidad, pero mantiene la misma cantidad de material protector. Las rodillas articuladas tienen <strong>refuerzo adicional</strong> para durabilidad." },
    { q: "\xBFPor qu\xE9 elegir dise\xF1o operativo sobre el est\xE1ndar?", a: "El dise\xF1o operativo es para bomberos que <strong>necesitan m\xE1xima funcionalidad</strong> en campo. Si la prioridad es costo m\xEDnimo, el sistema base es suficiente. Si la prioridad es <strong>rendimiento operativo</strong>, el dise\xF1o operativo vale la inversi\xF3n." }
  ];
  const relacionados = [
    { title: "Sistema Base", badge: "Est\xE1ndar", description: "Configuraci\xF3n cl\xE1sica.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base", buttonText: "Ver Base", image: IMAGE },
    { title: "Alta Visibilidad", badge: "Hi-Vis", description: "M\xE1xima visibilidad.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad", buttonText: "Ver Hi-Vis", image: IMAGE },
    { title: "Bota Tobillo Reforzado", badge: "Soporte", description: "Soporte terreno irregular.", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado", buttonText: "Ver Bota", image: IMAGE },
    { title: "Casco Forestal", badge: "NFPA 1977", description: "Casco operativo.", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Base", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base" },
    { label: "Tejido Nomex\xAE Ultraligero", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/tejido-nomex-ultraligero" },
    { label: "Resistencia Inherente", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/resistencia-inherente" },
    { label: "Alta Transpirabilidad", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad" },
    { label: "Alta Visibilidad", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Bota Terreno Irregular", href: "/productos/botas-para-bomberos/forestal/tobillo-reforzado", tag: "Pies" }, { label: "Casco Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }, { label: "Guantes Operativos", href: "/productos/guantes-para-bomberos", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Dise\xF1o Operativo", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Brigadas T\xE1cticas", href: "/directorio" }, { label: "Operaciones Terreno", href: "/directorio" }];
  const specsRapidas = [{ label: "Bolsillos", valor: "7 estrat\xE9gicos" }, { label: "Rodillas", valor: "Articuladas" }, { label: "Ajuste", valor: "R\xE1pido velcro" }, { label: "NFPA", valor: "1977" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "Operativo", desc: "Dise\xF1o funcional" }, { code: "Ergon\xF3mico", desc: "Movilidad campo" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Forestal NFPA 1977 Dise\xF1o Operativo \u2014 Funcional | BOMBERO.MX", "description": "Traje forestal NFPA 1977 con dise\xF1o operativo: bolsillos estrat\xE9gicos, corte ergon\xF3mico, ajuste r\xE1pido. M\xE1xima funcionalidad en campo. M\xE9xico.", "keywords": ["traje forestal operativo", "traje NFPA 1977 funcional", "traje bombero bolsillos", "traje forestal ergon\xF3mico", "equipo wildland t\xE1ctico"], "canonical": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" }, { label: "Dise\xF1o Operativo" }], "heroBadge": "Traje Forestal \xB7 NFPA 1977 \xB7 Dise\xF1o Operativo", "heroTitle": "Traje Forestal NFPA 1977", "heroTitleHighlight": "Dise\xF1o Operativo", "heroSubtitle": "Bolsillos estrat\xE9gicos para radio, herramientas y mapas. Corte ergon\xF3mico con rodillas articuladas y fuelle de entrepierna. Sistema de ajuste r\xE1pido. M\xE1xima funcionalidad operativa en campo.", "heroSeoBlocks": [{ title: "Bolsillos Estrat\xE9gicos", text: "<strong>7 bolsillos operativos</strong> dise\xF1ados con input de bomberos activos: 2 de pecho (radio), 4 laterales (herramientas), 1 espalda (mapas). <strong>Acceso r\xE1pido sin quitar guantes</strong>." }, { title: "Corte Ergon\xF3mico de Movilidad", text: "<strong>Rodillas articuladas</strong>, entrepierna con fuelle y sisas amplias. Patr\xF3n de corte para <strong>m\xE1xima movilidad</strong> en terreno irregular sin restricci\xF3n de movimiento." }], "ctaBarQuote": "Cotizar Dise\xF1o Operativo", "productoCategoria": "Traje Forestal Operativo", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "Operativo" }, { modifier: "solas", text: "Ergon\xF3mico" }], "productoMasVendido": false, "productoTitle": "Traje Forestal NFPA 1977 \u2014 Dise\xF1o Operativo", "productoTitleSub": "Bolsillos \xB7 Ergon\xF3mico \xB7 Ajuste R\xE1pido", "productoDesc": "Traje forestal con dise\xF1o operativo: 7 bolsillos estrat\xE9gicos, corte ergon\xF3mico con rodillas articuladas, sistema de ajuste r\xE1pido con velcro. Dise\xF1ado con input de bomberos forestales activos. Certificado NFPA 1977.", "productoFeatures": ["7 bolsillos estrat\xE9gicos", "Corte ergon\xF3mico campo", "Rodillas articuladas", "Ajuste r\xE1pido velcro", "Certificado NFPA 1977"], "productoAppTags": ["Operaciones t\xE1cticas", "Terreno irregular", "Alta actividad", "Brigadas expertas"], "gallery": [{ src: IMAGE, alt: "Traje forestal NFPA 1977 dise\xF1o operativo" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n forestal t\xE1ctica" }], "capasEyebrow": "Dise\xF1o Funcional", "capasTitle": "Sistema Operativo de Campo", "capasDesc": "Bolsillos estrat\xE9gicos, corte ergon\xF3mico y ajuste r\xE1pido.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del dise\xF1o operativo.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Operativo", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones que requieren m\xE1xima funcionalidad</strong>: operaciones t\xE1cticas, terreno irregular extremo, jornadas de alta actividad y brigadas experimentadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 Dise\xF1o Operativo", "certsDesc": "Certificaci\xF3n <strong>NFPA 1977</strong> con <strong>dise\xF1o operativo funcional</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Dise\xF1o Operativo", "faqDescription": "Dudas sobre funcionalidad y dise\xF1o.", "faqDocTitle": "Ficha T\xE9cnica", "faqDocDesc": "Especificaciones completas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Operativo", "relacionadosTitle": "EPP Operativo Relacionado", "relacionadosDesc": "Completa tu equipo operativo de campo.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
