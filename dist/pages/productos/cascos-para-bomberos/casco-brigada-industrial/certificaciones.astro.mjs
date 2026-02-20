import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/estacion-bomberos-petrolera-01.avif";
  const capas = [
    { num: "01", titulo: "NOM-115-STPS Certificaci\xF3n M\xE9xico", descripcion: "Norma Oficial Mexicana para cascos de protecci\xF3n. Establece requisitos de resistencia a impacto, penetraci\xF3n, flamabilidad y aislamiento el\xE9ctrico. Todo casco para uso laboral en M\xE9xico debe cumplir esta norma. Documentaci\xF3n v\xE1lida para auditor\xEDas STPS.", specs: [{ label: "Norma", valor: "NOM-115-STPS-2009" }, { label: "Vigencia", valor: "Obligatoria M\xE9xico" }, { label: "Auditor\xEDas", valor: "STPS v\xE1lido" }], color: "ember" },
    { num: "02", titulo: "ANSI Z89.1 Tipo I Clase E", descripcion: "Norma americana ampliamente aceptada. Tipo I = protecci\xF3n superior (coronilla). Clase E = aislamiento el\xE9ctrico hasta 20,000V. Esta clasificaci\xF3n es requerida para trabajo en plantas con riesgo el\xE9ctrico (subestaciones, generadores, l\xEDneas).", specs: [{ label: "Norma", valor: "ANSI/ISEA Z89.1-2019" }, { label: "Tipo", valor: "I (protecci\xF3n superior)" }, { label: "Clase", valor: "E (20,000V)" }], color: "smoke" },
    { num: "03", titulo: "Documentaci\xF3n para ISO 45001 y Licitaciones", descripcion: "Cada casco incluye: certificado de laboratorio acreditado ISO/IEC 17025, declaraci\xF3n de conformidad del fabricante, fichas t\xE9cnicas detalladas, y manual de uso y mantenimiento. Documentaci\xF3n completa para sistemas de gesti\xF3n ISO 45001 y licitaciones industriales.", specs: [{ label: "Certificado lab", valor: "ISO/IEC 17025" }, { label: "ISO 45001", valor: "Compatible" }, { label: "Licitaciones", valor: "Documentaci\xF3n completa" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "NOM-115-STPS", label: "Impacto", valor: "50 J absorci\xF3n energ\xEDa" },
    { categoria: "NOM-115-STPS", label: "Penetraci\xF3n", valor: "Resistente a 3 kg desde 1 m" },
    { categoria: "NOM-115-STPS", label: "Flamabilidad", valor: "Autoextinguible <5 seg" },
    { categoria: "NOM-115-STPS", label: "Electricidad", valor: "Clase E hasta 20 kV" },
    { categoria: "ANSI Z89.1", label: "Tipo", valor: "I (protecci\xF3n superior)" },
    { categoria: "ANSI Z89.1", label: "Clase", valor: "E (el\xE9ctrica 20 kV)" },
    { categoria: "ANSI Z89.1", label: "Versi\xF3n", valor: "2019 o posterior" },
    { categoria: "EN 397", label: "Requisitos", valor: "Europeos equivalentes" },
    { categoria: "EN 397", label: "Marcado", valor: "CE compatible" },
    { categoria: "Documentaci\xF3n", label: "Certificado lab", valor: "ISO/IEC 17025" },
    { categoria: "Documentaci\xF3n", label: "Declaraci\xF3n fab", valor: "Conformidad incluida" },
    { categoria: "Documentaci\xF3n", label: "Ficha t\xE9cnica", valor: "Completa" },
    { categoria: "Documentaci\xF3n", label: "Manual", valor: "Uso y mantenimiento" },
    { categoria: "Sistemas", label: "ISO 45001", valor: "Compatible documentaci\xF3n" }
  ];
  const catClass = { "NOM-115-STPS": "certificacion", "ANSI Z89.1": "certificacion", "EN 397": "certificacion", "Documentaci\xF3n": "ergonomia", "Sistemas": "ergonomia" };
  const aplicaciones = [
    { titulo: "Auditor\xEDas STPS", desc: "Cumplimiento de requisitos de la Secretar\xEDa del Trabajo. La documentaci\xF3n incluida es v\xE1lida para auditor\xEDas de seguridad e higiene." },
    { titulo: "Sistemas de Gesti\xF3n ISO 45001", desc: "Integraci\xF3n con sistemas de gesti\xF3n de seguridad y salud ocupacional. La documentaci\xF3n cumple requisitos de control de EPP." },
    { titulo: "Licitaciones Industriales", desc: "PEMEX, CFE, grandes corporativos. La documentaci\xF3n completa permite participar en licitaciones con requisitos de certificaci\xF3n estrictos." },
    { titulo: "Exportaci\xF3n y Empresas Multinacionales", desc: "Empresas con operaciones en m\xFAltiples pa\xEDses que requieren cumplimiento de normas mexicanas, americanas y europeas simult\xE1neamente." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 significa Clase E en ANSI Z89.1?", a: "<strong>Clase E</strong> significa que el casco proporciona <strong>aislamiento el\xE9ctrico hasta 20,000 voltios</strong>. Esta clasificaci\xF3n es requerida para trabajo en plantas con riesgo el\xE9ctrico. Clase G es hasta 2,200V. Clase C no tiene protecci\xF3n el\xE9ctrica." },
    { q: "\xBFLa documentaci\xF3n sirve para auditor\xEDa STPS?", a: "S\xED. Incluye <strong>certificado de laboratorio acreditado ISO/IEC 17025</strong>, declaraci\xF3n de conformidad del fabricante y fichas t\xE9cnicas. Esta documentaci\xF3n cumple los requisitos de la <strong>NOM-115-STPS</strong> y es v\xE1lida para inspecciones STPS." },
    { q: "\xBFEl casco cumple EN 397 para exportaci\xF3n a Europa?", a: "El casco es <strong>compatible con EN 397</strong> en especificaciones, pero la certificaci\xF3n formal CE requiere evaluaci\xF3n por organismo notificado europeo. Contacte con nosotros si requiere casco con <strong>marcado CE formal</strong> para operaciones en Europa." }
  ];
  const relacionados = [
    { title: "Sistema Completo Brigada", badge: "NOM-115", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Protecci\xF3n T\xE9rmica", badge: "150\xB0C", description: "Shell con resistencia t\xE9rmica.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica", buttonText: "Ver T\xE9rmico", image: IMAGE },
    { title: "Casco Estructural NFPA 1971", badge: "Profesional", description: "Para bomberos profesionales.", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", buttonText: "Ver NFPA 1971", image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif" },
    { title: "Identificaci\xF3n por Color", badge: "Roles", description: "Sistema de colores.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color", buttonText: "Ver Colores", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo" },
    { label: "Protecci\xF3n T\xE9rmica", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica" },
    { label: "Visor Facial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial" },
    { label: "Identificaci\xF3n por Color", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Guantes NOM", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }, { label: "Gafas de Seguridad ANSI", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }, { label: "Calzado NOM-113", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cat\xE1logo" }, { label: "NOM-115-STPS Gu\xEDa", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Blog" }];
  const directorioLinks = [{ label: "Auditor\xEDas STPS", href: "/directorio" }, { label: "ISO 45001", href: "/directorio" }];
  const specsRapidas = [{ label: "NOM-115", valor: "STPS M\xE9xico" }, { label: "ANSI Z89.1", valor: "Tipo I Clase E" }, { label: "Documentaci\xF3n", valor: "ISO 17025 lab" }, { label: "ISO 45001", valor: "Compatible" }];
  const certItems = [{ code: "NOM-115-STPS", desc: "M\xE9xico obligatorio" }, { code: "ANSI Z89.1", desc: "Tipo I Clase E" }, { code: "ISO 17025", desc: "Lab certificado" }, { code: "ISO 45001", desc: "Documentaci\xF3n completa" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Brigada \u2014 Certificaci\xF3n NOM-115 ANSI Z89.1 | BOMBERO.MX", "description": "Casco brigada industrial con certificaciones NOM-115-STPS, ANSI Z89.1 Tipo I Clase E y EN 397. Documentaci\xF3n para auditor\xEDas STPS e ISO 45001. M\xE9xico.", "keywords": ["casco brigada certificado", "casco NOM-115-STPS", "casco ANSI Z89.1 Clase E", "casco industrial auditor\xEDa"], "canonical": "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial" }, { label: "Certificaciones" }], "heroBadge": "NOM-115-STPS \xB7 ANSI Z89.1 \xB7 ISO 45001", "heroTitle": "Casco Brigada Industrial", "heroTitleHighlight": "Certificaciones Industriales", "heroSubtitle": "Cumplimiento completo de normas mexicanas e internacionales: NOM-115-STPS obligatoria en M\xE9xico, ANSI Z89.1 Tipo I Clase E (el\xE9ctrica 20kV), EN 397 compatible. Documentaci\xF3n completa para auditor\xEDas STPS, sistemas ISO 45001 y licitaciones industriales.", "heroSeoBlocks": [{ title: "NOM-115-STPS Obligatoria", text: "Norma Oficial Mexicana para <strong>cascos de protecci\xF3n</strong>. Requisitos de impacto, penetraci\xF3n, flamabilidad y aislamiento el\xE9ctrico. Documentaci\xF3n v\xE1lida para <strong>auditor\xEDas STPS</strong>." }, { title: "ANSI Z89.1 Clase E", text: "<strong>Tipo I</strong> (protecci\xF3n superior) + <strong>Clase E</strong> (aislamiento 20,000V). Requerido para plantas con riesgo el\xE9ctrico. Reconocido internacionalmente." }], "ctaBarQuote": "Cotizar con Certificaciones", "productoCategoria": "Casco Brigada Certificado", "productoBadges": [{ modifier: "nfpa", text: "NOM-115" }, { modifier: "tpp", text: "ANSI E" }, { modifier: "solas", text: "ISO 45001" }], "productoMasVendido": false, "productoTitle": "Casco Brigada Industrial \u2014 Certificaciones", "productoTitleSub": "NOM-115 \xB7 ANSI \xB7 EN 397", "productoDesc": "Certificado NOM-115-STPS (M\xE9xico), ANSI Z89.1 Tipo I Clase E (EE.UU. 20kV), EN 397 compatible (Europa). Incluye certificado de laboratorio ISO/IEC 17025, declaraci\xF3n de conformidad, fichas t\xE9cnicas y manual. Documentaci\xF3n para ISO 45001 y licitaciones.", "productoFeatures": ["NOM-115-STPS M\xE9xico", "ANSI Z89.1 Tipo I Clase E", "EN 397 compatible", "Certificado lab ISO 17025", "Docs ISO 45001"], "productoAppTags": ["Auditor\xEDas STPS", "ISO 45001", "Licitaciones", "Multinacionales"], "gallery": [{ src: IMAGE, alt: "Casco brigada certificaciones" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Certificaci\xF3n industrial" }], "capasEyebrow": "Certificaciones", "capasTitle": "Cumplimiento Normativo Completo", "capasDesc": "Normas mexicanas, americanas y europeas con documentaci\xF3n para auditor\xEDas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones por Norma", "specsDesc": "Requisitos t\xE9cnicos de cada certificaci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Cumplimiento Normativo", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Organizaciones que requieren <strong>cumplimiento normativo documentado</strong>: auditor\xEDas STPS, sistemas ISO 45001, licitaciones industriales, operaciones multinacionales.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "Triple Certificaci\xF3n", "certsDesc": "<strong>NOM-115-STPS</strong> (M\xE9xico) + <strong>ANSI Z89.1</strong> (EE.UU.) + <strong>EN 397</strong> compatible (Europa) con documentaci\xF3n completa.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-brigada-industrial", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Certificaciones", "faqDescription": "Dudas sobre normas y documentaci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados y fichas t\xE9cnicas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "EPP Certificado", "relacionadosTitle": "Sistema de EPP con Documentaci\xF3n", "relacionadosDesc": "Complete con guantes, lentes y calzado certificados NOM.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
