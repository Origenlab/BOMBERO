import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Cierre Frontal de Cremallera R\xE1pida", descripcion: "Cremallera de alta resistencia con tiradores grandes que permiten apertura y cierre con guantes gruesos. Dise\xF1ada para respuesta r\xE1pida donde cada segundo cuenta en emergencias aeroportuarias.", specs: [{ label: "Cremallera", valor: "Alta resistencia" }, { label: "Tiradores", valor: "Grandes" }, { label: "Con guantes", valor: "Operables" }], color: "ember" },
    { num: "02", titulo: "Sistema de Solapa Protectora", descripcion: "Solapa sobre la cremallera con cierre de velcro resistente al calor. Proporciona barrera adicional contra penetraci\xF3n de calor y protege la cremallera de da\xF1os por exposici\xF3n directa.", specs: [{ label: "Solapa", valor: "Protectora" }, { label: "Velcro", valor: "Resistente calor" }, { label: "Protecci\xF3n", valor: "Cremallera" }], color: "smoke" },
    { num: "03", titulo: "Ajustes de Velcro en Pu\xF1os y Cintura", descripcion: "Sistema de ajuste con velcro de alta temperatura en pu\xF1os y cintura. Permite ajuste personalizado r\xE1pido para sellado contra penetraci\xF3n de calor y combustible.", specs: [{ label: "Velcro", valor: "Alta temperatura" }, { label: "Ubicaci\xF3n", valor: "Pu\xF1os y cintura" }, { label: "Ajuste", valor: "R\xE1pido personalizado" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Cremallera", label: "Tipo", valor: "Alta resistencia" },
    { categoria: "Cremallera", label: "Tiradores", valor: "Grandes para guantes" },
    { categoria: "Cremallera", label: "Material", valor: "Metal resistente calor" },
    { categoria: "Solapa", label: "Funci\xF3n", valor: "Protecci\xF3n cremallera" },
    { categoria: "Solapa", label: "Cierre", valor: "Velcro FR" },
    { categoria: "Solapa", label: "Barrera", valor: "Adicional t\xE9rmica" },
    { categoria: "Ajustes", label: "Velcro", valor: "Alta temperatura" },
    { categoria: "Ajustes", label: "Ubicaci\xF3n", valor: "Pu\xF1os, cintura" },
    { categoria: "Tiempo", label: "Vestir completo", valor: "<60 segundos" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 ARFF" }
  ];
  const catClass = { "Cremallera": "construccion", "Solapa": "termico", "Ajustes": "ergonomia", "Tiempo": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Respuesta R\xE1pida Aeroportuaria", desc: "Escenarios donde el personal ARFF debe vestirse completamente en menos de 60 segundos para responder a emergencias." },
    { titulo: "Estaciones de Alerta", desc: "Personal en posici\xF3n de alerta que debe poder vestir el equipo r\xE1pidamente al sonar la alarma." },
    { titulo: "Operaciones con Guantes", desc: "Situaciones donde el bombero ya tiene guantes colocados y necesita ajustar el traje sin quit\xE1rselos." },
    { titulo: "M\xFAltiples Respuestas", desc: "Incidentes con m\xFAltiples intervenciones donde el equipo se viste y retira repetidamente." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 es importante el cierre r\xE1pido en ARFF?", a: "En emergencias aeroportuarias, los tiempos de respuesta son cr\xEDticos. Los est\xE1ndares OACI/FAA requieren llegada al sitio en <strong>2-3 minutos</strong>. Un sistema de cierre r\xE1pido reduce el tiempo de vestido a <strong>menos de 60 segundos</strong>." },
    { q: "\xBFEl velcro de alta temperatura es confiable?", a: "S\xED. El <strong>velcro FR (flame resistant)</strong> est\xE1 dise\xF1ado para mantener su adherencia en temperaturas de operaci\xF3n ARFF. No se derrite ni pierde agarre bajo exposici\xF3n t\xE9rmica normal." },
    { q: "\xBFSe puede operar todo con guantes gruesos ARFF?", a: "S\xED. Los <strong>tiradores grandes</strong>, velcro y ajustes est\xE1n dimensionados para operaci\xF3n con guantes estructurales ARFF. No se requiere destreza fina para vestir o ajustar el traje." }
  ];
  const relacionados = [
    { title: "Sistema Completo ARFF", badge: "4 capas", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Guantes ARFF", badge: "Estructurales", description: "Para cierre r\xE1pido.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE },
    { title: "Bota ARFF", badge: "Pull-on", description: "Calzado r\xE1pido.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: IMAGE },
    { title: "Casco ARFF", badge: "Quick-don", description: "Colocaci\xF3n r\xE1pida.", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada" },
    { label: "Protecci\xF3n Jet Fuel", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel" },
    { label: "Radiaci\xF3n T\xE9rmica", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica" },
    { label: "Certificaciones ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Quick-Don", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Pull-On", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }, { label: "Casco ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Traje ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cat\xE1logo" }, { label: "Tiempos Respuesta", href: "/productos", tag: "OACI/FAA" }];
  const directorioLinks = [{ label: "ARFF M\xE9xico", href: "/directorio" }, { label: "Respuesta R\xE1pida", href: "/directorio" }];
  const specsRapidas = [{ label: "Vestido", valor: "<60 seg" }, { label: "Cremallera", valor: "Alta resistencia" }, { label: "Velcro", valor: "FR" }, { label: "Guantes", valor: "Compatible" }];
  const certItems = [{ code: "NFPA 1971", desc: "ARFF" }, { code: "<60 seg", desc: "Vestido completo" }, { code: "FR Velcro", desc: "Alta temperatura" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje ARFF Cierre R\xE1pido \u2014 Vestido <60 Segundos | BOMBERO.MX", "description": "Traje ARFF con sistema de cierre r\xE1pido para vestido en menos de 60 segundos. Cremallera grande, velcro FR, operable con guantes. M\xE9xico.", "keywords": ["traje ARFF cierre r\xE1pido", "traje bombero vestido r\xE1pido", "traje aeropuerto quick-don", "traje NFPA 1971 r\xE1pido", "equipo ARFF respuesta"], "canonical": "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }, { label: "Cierre R\xE1pido" }], "heroBadge": "Traje ARFF \xB7 Cierre R\xE1pido \xB7 <60 seg \xB7 Quick-Don", "heroTitle": "Traje ARFF Aeroportuario", "heroTitleHighlight": "Cierre R\xE1pido", "heroSubtitle": "Sistema de cierre r\xE1pido para vestido completo en menos de 60 segundos. Cremallera de alta resistencia con tiradores grandes, solapa protectora y ajustes de velcro FR. Operaci\xF3n completa con guantes.", "heroSeoBlocks": [{ title: "Vestido Completo <60 Segundos", text: "Sistema dise\xF1ado para <strong>respuesta r\xE1pida ARFF</strong>. Cremallera con tiradores grandes, solapa protectora y velcro FR. <strong>Operable completamente con guantes gruesos</strong>." }, { title: "Velcro FR Alta Temperatura", text: "Ajustes de <strong>velcro flame resistant</strong> en pu\xF1os y cintura. Mantiene adherencia en <strong>temperaturas de operaci\xF3n ARFF</strong>. Ajuste r\xE1pido personalizado." }], "ctaBarQuote": "Cotizar Cierre R\xE1pido", "productoCategoria": "Traje ARFF Quick-Don", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "<60 seg" }, { modifier: "solas", text: "Quick-Don" }], "productoMasVendido": false, "productoTitle": "Traje ARFF \u2014 Cierre R\xE1pido", "productoTitleSub": "<60 Segundos \xB7 Tiradores Grandes \xB7 Velcro FR", "productoDesc": "Traje ARFF con sistema de cierre r\xE1pido para vestido en menos de 60 segundos. Cremallera de alta resistencia, solapa protectora y ajustes de velcro FR. Completamente operable con guantes estructurales.", "productoFeatures": ["Vestido <60 segundos", "Tiradores grandes guantes", "Solapa protectora", "Velcro FR alta temperatura", "Ajuste r\xE1pido personalizado"], "productoAppTags": ["Respuesta r\xE1pida", "Estaciones alerta", "Con guantes", "M\xFAltiples respuestas"], "gallery": [{ src: IMAGE, alt: "Traje ARFF cierre r\xE1pido" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Vestido r\xE1pido ARFF" }], "capasEyebrow": "Sistema Quick-Don", "capasTitle": "Cierre y Ajuste R\xE1pido", "capasDesc": "Cremallera, solapa y velcro FR.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del sistema de cierre.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso R\xE1pido", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Respuesta r\xE1pida aeroportuaria</strong>: emergencias con tiempo cr\xEDtico, estaciones de alerta, operaciones con guantes y m\xFAltiples intervenciones.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 Quick-Don", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 ARFF</strong> con <strong>sistema de cierre r\xE1pido</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Cierre R\xE1pido", "faqDescription": "Dudas sobre vestido r\xE1pido.", "faqDocTitle": "Tiempos OACI/FAA", "faqDocDesc": "Requisitos respuesta.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "EPP Quick-Don Relacionado", "relacionadosDesc": "Completa tu equipo de respuesta r\xE1pida.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
