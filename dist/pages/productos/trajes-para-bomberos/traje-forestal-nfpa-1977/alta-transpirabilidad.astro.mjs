import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "MVTR Superior 2,500+ g/m\xB2/24h", descripcion: "Membrana con tasa de transmisi\xF3n de vapor de humedad (MVTR) superior a 2,500 g/m\xB2/24h. Esto significa evacuaci\xF3n r\xE1pida del sudor para mantener al bombero seco en operaciones de alta intensidad.", specs: [{ label: "MVTR", valor: "2,500+ g/m\xB2/24h" }, { label: "Evacuaci\xF3n", valor: "R\xE1pida" }, { label: "Confort", valor: "Seco continuo" }], color: "ember" },
    { num: "02", titulo: "Paneles de Ventilaci\xF3n Activa", descripcion: "Paneles de malla t\xE9cnica en zonas de alta transpiraci\xF3n (axilas, costados, espalda baja) que permiten circulaci\xF3n de aire constante. El aire caliente sale y el fresco entra.", specs: [{ label: "Paneles", valor: "Malla t\xE9cnica" }, { label: "Zonas", valor: "Axilas, costados, espalda" }, { label: "Flujo", valor: "Continuo bidireccional" }], color: "smoke" },
    { num: "03", titulo: "Forro Wicking de Secado R\xE1pido", descripcion: "Forro interior con tecnolog\xEDa wicking que transporta la humedad del cuerpo hacia las capas externas para evaporaci\xF3n. El bombero permanece seco incluso en sudoraci\xF3n intensa.", specs: [{ label: "Tecnolog\xEDa", valor: "Wicking activo" }, { label: "Transporte", valor: "Humedad al exterior" }, { label: "Secado", valor: "R\xE1pido continuo" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Membrana", label: "MVTR", valor: "2,500+ g/m\xB2/24h" },
    { categoria: "Membrana", label: "Evacuaci\xF3n", valor: "R\xE1pida continua" },
    { categoria: "Membrana", label: "Impermeabilidad", valor: "Resistente agua" },
    { categoria: "Ventilaci\xF3n", label: "Paneles", valor: "Malla t\xE9cnica" },
    { categoria: "Ventilaci\xF3n", label: "Ubicaci\xF3n", valor: "Axilas, costados, espalda" },
    { categoria: "Ventilaci\xF3n", label: "Flujo", valor: "Bidireccional" },
    { categoria: "Forro", label: "Tecnolog\xEDa", valor: "Wicking activo" },
    { categoria: "Forro", label: "Secado", valor: "R\xE1pido continuo" },
    { categoria: "Dise\xF1o", label: "Clima \xF3ptimo", valor: "30-45\xB0C" },
    { categoria: "Certificaci\xF3n", label: "Norma", valor: "NFPA 1977 wildland" }
  ];
  const catClass = { "Membrana": "construccion", "Ventilaci\xF3n": "termico", "Forro": "ergonomia", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Climas C\xE1lidos de M\xE9xico (30-45\xB0C)", desc: "Temporada de incendios en zonas c\xE1lidas donde la sudoraci\xF3n intensa puede afectar el rendimiento del bombero." },
    { titulo: "Operaciones de Alta Intensidad", desc: "Combate activo en l\xEDnea de fuego donde el esfuerzo f\xEDsico genera calor metab\xF3lico considerable." },
    { titulo: "Jornadas Prolongadas 10+ Horas", desc: "Operaciones extensas donde el confort t\xE9rmico es cr\xEDtico para mantener el rendimiento sostenido." },
    { titulo: "Prevenci\xF3n de Estr\xE9s T\xE9rmico", desc: "Brigadas que priorizan la prevenci\xF3n de golpe de calor y estr\xE9s t\xE9rmico en su personal." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 significa MVTR 2,500+ g/m\xB2/24h?", a: "<strong>MVTR</strong> (Moisture Vapor Transmission Rate) mide cu\xE1ntos gramos de vapor de agua pueden atravesar un metro cuadrado de membrana en 24 horas. <strong>2,500+ g/m\xB2/24h</strong> es considerado alto, permitiendo evacuaci\xF3n eficiente del sudor." },
    { q: "\xBFLos paneles de ventilaci\xF3n comprometen la protecci\xF3n?", a: "No. Los <strong>paneles de malla t\xE9cnica</strong> est\xE1n fabricados con fibras inherentemente resistentes al fuego y ubicados en zonas de bajo riesgo de impacto directo de llamas. Mantienen la certificaci\xF3n <strong>NFPA 1977</strong>." },
    { q: "\xBFEs necesario en climas templados?", a: "En climas templados el Sistema Base puede ser suficiente. La <strong>alta transpirabilidad</strong> es especialmente valiosa en <strong>temperaturas de 30-45\xB0C</strong> o en operaciones de alta intensidad f\xEDsica." }
  ];
  const relacionados = [
    { title: "Sistema Base", badge: "Est\xE1ndar", description: "Configuraci\xF3n cl\xE1sica.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base", buttonText: "Ver Base", image: IMAGE },
    { title: "Tejido Ultraligero", badge: "4.5 oz", description: "Versi\xF3n m\xE1s ligera.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/tejido-nomex-ultraligero", buttonText: "Ver Ultraligero", image: IMAGE },
    { title: "Bota Transpirable", badge: "Verano", description: "Bota ventilada.", href: "/productos/botas-para-bomberos/forestal/transpirable-verano", buttonText: "Ver Bota", image: IMAGE },
    { title: "Casco Forestal", badge: "NFPA 1977", description: "Casco ligero.", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Base", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base" },
    { label: "Tejido Nomex\xAE Ultraligero", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/tejido-nomex-ultraligero" },
    { label: "Resistencia Inherente", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/resistencia-inherente" },
    { label: "Alta Visibilidad", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Dise\xF1o Operativo", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Bota Transpirable Verano", href: "/productos/botas-para-bomberos/forestal/transpirable-verano", tag: "Pies" }, { label: "Casco Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }, { label: "Guantes Transpirables", href: "/productos/guantes-para-bomberos", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Estr\xE9s T\xE9rmico", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Zonas C\xE1lidas M\xE9xico", href: "/directorio" }, { label: "Brigadas Verano", href: "/directorio" }];
  const specsRapidas = [{ label: "MVTR", valor: "2,500+ g/m\xB2/24h" }, { label: "Paneles", valor: "Malla t\xE9cnica" }, { label: "Forro", valor: "Wicking" }, { label: "Clima", valor: "30-45\xB0C" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "MVTR+", desc: "Alta transpirabilidad" }, { code: "Wicking", desc: "Secado r\xE1pido" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Forestal NFPA 1977 Alta Transpirabilidad \u2014 MVTR+ | BOMBERO.MX", "description": "Traje forestal NFPA 1977 con alta transpirabilidad MVTR 2,500+ g/m\xB2/24h. Paneles de ventilaci\xF3n y forro wicking. Para climas c\xE1lidos 30-45\xB0C. M\xE9xico.", "keywords": ["traje forestal transpirable", "traje NFPA 1977 ventilado", "traje bombero clima c\xE1lido", "traje forestal MVTR", "equipo wildland transpirable"], "canonical": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" }, { label: "Alta Transpirabilidad" }], "heroBadge": "Traje Forestal \xB7 NFPA 1977 \xB7 Alta Transpirabilidad", "heroTitle": "Traje Forestal NFPA 1977", "heroTitleHighlight": "Alta Transpirabilidad", "heroSubtitle": "Membrana con MVTR superior a 2,500 g/m\xB2/24h para evacuaci\xF3n r\xE1pida del sudor. Paneles de ventilaci\xF3n activa y forro wicking de secado r\xE1pido. Para climas c\xE1lidos de 30-45\xB0C.", "heroSeoBlocks": [{ title: "MVTR Superior 2,500+ g/m\xB2/24h", text: "Membrana de <strong>alta transpirabilidad</strong> que evac\xFAa el sudor r\xE1pidamente. El bombero permanece <strong>seco</strong> incluso en operaciones de alta intensidad en climas c\xE1lidos." }, { title: "Ventilaci\xF3n Activa + Wicking", text: "<strong>Paneles de malla t\xE9cnica</strong> en zonas de alta transpiraci\xF3n m\xE1s forro con <strong>tecnolog\xEDa wicking</strong> que transporta la humedad al exterior para evaporaci\xF3n." }], "ctaBarQuote": "Cotizar Alta Transpirabilidad", "productoCategoria": "Traje Forestal Transpirable", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "MVTR+" }, { modifier: "solas", text: "30-45\xB0C" }], "productoMasVendido": false, "productoTitle": "Traje Forestal NFPA 1977 \u2014 Alta Transpirabilidad", "productoTitleSub": "MVTR 2,500+ \xB7 Ventilaci\xF3n \xB7 Wicking", "productoDesc": "Traje forestal con membrana de alta transpirabilidad MVTR 2,500+ g/m\xB2/24h. Paneles de ventilaci\xF3n activa en axilas, costados y espalda. Forro wicking de secado r\xE1pido. Para climas c\xE1lidos 30-45\xB0C. Certificado NFPA 1977.", "productoFeatures": ["MVTR 2,500+ g/m\xB2/24h", "Paneles ventilaci\xF3n activa", "Forro wicking secado r\xE1pido", "Clima \xF3ptimo 30-45\xB0C", "Certificado NFPA 1977"], "productoAppTags": ["Climas c\xE1lidos", "Alta intensidad", "Jornadas 10+ hrs", "Anti estr\xE9s t\xE9rmico"], "gallery": [{ src: IMAGE, alt: "Traje forestal NFPA 1977 alta transpirabilidad" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Combate forestal clima c\xE1lido" }], "capasEyebrow": "Tecnolog\xEDa Transpirable", "capasTitle": "Sistema de Ventilaci\xF3n Activa", "capasDesc": "Membrana MVTR+, paneles de ventilaci\xF3n y forro wicking.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de transpirabilidad.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Climas C\xE1lidos", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Climas c\xE1lidos de 30-45\xB0C</strong>: operaciones de alta intensidad, jornadas prolongadas de 10+ horas y prevenci\xF3n de estr\xE9s t\xE9rmico.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 + MVTR Superior", "certsDesc": "Certificaci\xF3n <strong>NFPA 1977</strong> con <strong>MVTR superior a 2,500 g/m\xB2/24h</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Transpirabilidad", "faqDescription": "Dudas sobre ventilaci\xF3n y confort.", "faqDocTitle": "Ficha T\xE9cnica", "faqDocDesc": "Especificaciones completas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Forestal", "relacionadosTitle": "EPP Forestal Transpirable", "relacionadosDesc": "Completa tu equipo forestal para clima c\xE1lido.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
