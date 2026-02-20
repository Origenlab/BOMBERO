import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/estacion-bomberos-petrolera-01.avif";
  const capas = [
    { num: "01", titulo: "Shell Termopl\xE1stico con Resistencia T\xE9rmica", descripcion: "Shell fabricado en termopl\xE1stico de alto impacto (ABS, polietileno o policarbonato modificado) con resistencia t\xE9rmica hasta 150\xB0C para exposici\xF3n breve. No se deforma ni derrite durante el control de conatos de incendio industriales.", specs: [{ label: "Material", valor: "Termopl\xE1stico reforzado" }, { label: "Resistencia t\xE9rmica", valor: "150\xB0C exposici\xF3n breve" }, { label: "Impacto", valor: "ANSI Z89.1 Tipo I" }], color: "ember" },
    { num: "02", titulo: "Visor Retr\xE1ctil Antiempa\xF1ante", descripcion: "Visor de policarbonato \xF3ptico integrado con mecanismo retr\xE1ctil. Tratamiento antiempa\xF1ante permanente y protecci\xF3n UV. Protege ojos y cara de chispas, part\xEDculas calientes y salpicaduras durante operaciones industriales.", specs: [{ label: "Material visor", valor: "Policarbonato \xF3ptico" }, { label: "Antiempa\xF1ante", valor: "Tratamiento permanente" }, { label: "Mecanismo", valor: "Retr\xE1ctil integrado" }], color: "smoke" },
    { num: "03", titulo: "Protector de Nuca Desmontable", descripcion: "Protector de nuca en Nomex\xAE o material retardante al fuego que protege la parte posterior del cuello de calor radiante y chispas. Desmontable para operaciones que no requieren protecci\xF3n t\xE9rmica.", specs: [{ label: "Material", valor: "Nomex\xAE o FR similar" }, { label: "Cobertura", valor: "Nuca y parte del cuello" }, { label: "Tipo", valor: "Desmontable" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "Termopl\xE1stico reforzado" },
    { categoria: "Shell", label: "Resistencia t\xE9rmica", valor: "150\xB0C / 5 min" },
    { categoria: "Shell", label: "Impacto", valor: "ANSI Z89.1 Tipo I" },
    { categoria: "Shell", label: "Penetraci\xF3n", valor: "Resistente NOM-115" },
    { categoria: "Shell", label: "Peso", valor: "~450-550 g" },
    { categoria: "Visor", label: "Material", valor: "Policarbonato \xF3ptico" },
    { categoria: "Visor", label: "Mecanismo", valor: "Retr\xE1ctil integrado" },
    { categoria: "Visor", label: "Antiempa\xF1ante", valor: "Tratamiento permanente" },
    { categoria: "Visor", label: "Protecci\xF3n UV", valor: "99.9%" },
    { categoria: "Protector nuca", label: "Material", valor: "Nomex\xAE IIIA o similar" },
    { categoria: "Protector nuca", label: "Tipo", valor: "Desmontable" },
    { categoria: "Suspensi\xF3n", label: "Puntos", valor: "4 o 6 puntos" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "Ratchet" },
    { categoria: "Certificaci\xF3n", label: "NOM-115-STPS", valor: "M\xE9xico" },
    { categoria: "Certificaci\xF3n", label: "ANSI Z89.1", valor: "Tipo I Clase E" }
  ];
  const catClass = { "Shell": "construccion", "Visor": "ergonomia", "Protector nuca": "construccion", "Suspensi\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Brigadas de Plantas Petroqu\xEDmicas", desc: "Primera respuesta a conatos de incendio en plantas PEMEX, refiner\xEDas y petroqu\xEDmicas. Control inicial mientras llegan bomberos profesionales." },
    { titulo: "Brigadas de Plantas de Energ\xEDa", desc: "CFE y plantas privadas de generaci\xF3n. Respuesta a emergencias el\xE9ctricas y conatos en subestaciones y generadores." },
    { titulo: "Brigadas de Manufactura", desc: "Plantas de producci\xF3n con riesgos de incendio: automotriz, textil, alimentos, farmac\xE9utica. Respuesta de primera l\xEDnea." },
    { titulo: "Entrenamiento de Brigadas", desc: "Capacitaci\xF3n y simulacros de brigadas industriales donde se requiere equipo real pero no certificaci\xF3n de bombero profesional." }
  ];
  const faqs = [
    { q: "\xBFEl casco de brigada sustituye al de bombero profesional?", a: "<strong>No</strong>. El casco de brigada tiene protecci\xF3n t\xE9rmica <strong>moderada (150\xB0C)</strong> para conatos y primera respuesta. El casco estructural <strong>NFPA 1971</strong> tiene protecci\xF3n t\xE9rmica profesional para combate de incendios con llama directa. Las brigadas deben controlar conatos y esperar a bomberos profesionales para incendios mayores." },
    { q: "\xBFQu\xE9 significa resistencia t\xE9rmica hasta 150\xB0C?", a: "Significa que el shell <strong>no se deforma ni derrite</strong> a temperaturas hasta 150\xB0C durante exposici\xF3n breve (unos minutos). Esto es suficiente para estar cerca de un conato de incendio o calor radiante industrial, pero <strong>no para entrar a un incendio</strong> con llama directa." },
    { q: "\xBFEl visor protege de salpicaduras de metal fundido?", a: "El visor de policarbonato protege de <strong>chispas y part\xEDculas calientes</strong>. Para salpicaduras de metal fundido de soldadura o fundici\xF3n, se requiere <strong>careta de soldador espec\xEDfica</strong> o visor con tratamiento especial. Consulte el modelo espec\xEDfico para soldadura." }
  ];
  const relacionados = [
    { title: "Casco Estructural NFPA 1971", badge: "Profesional", description: "Para combate de incendios.", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", buttonText: "Ver Estructural", image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif" },
    { title: "Identificaci\xF3n por Color", badge: "Roles", description: "Sistema de colores por rol.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color", buttonText: "Ver Colores", image: IMAGE },
    { title: "Guantes Estructurales", badge: "NFPA", description: "Guantes para brigada.", href: "/productos/guantes-para-bomberos/estructurales", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" },
    { title: "Compatible SCBA", badge: "Respiraci\xF3n", description: "Para brigadas con SCBA.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba", buttonText: "Ver SCBA", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Protecci\xF3n T\xE9rmica", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica" },
    { label: "Visor Facial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial" },
    { label: "Identificaci\xF3n por Color", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba" },
    { label: "Certificaciones", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cuerpo" }, { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }, { label: "Botas Bombero", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cat\xE1logo" }, { label: "Gu\xEDa NOM-115-STPS", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Blog" }];
  const directorioLinks = [{ label: "PEMEX", href: "/directorio" }, { label: "CFE", href: "/directorio" }, { label: "Industria Nacional", href: "/directorio" }];
  const specsRapidas = [{ label: "Resistencia", valor: "150\xB0C / 5 min" }, { label: "Visor", valor: "PC retr\xE1ctil" }, { label: "Nuca", valor: "Nomex\xAE desmontable" }, { label: "Certificaci\xF3n", valor: "NOM-115 + ANSI" }];
  const certItems = [{ code: "NOM-115-STPS", desc: "M\xE9xico industrial" }, { code: "ANSI Z89.1", desc: "Tipo I Clase E" }, { code: "150\xB0C", desc: "Resistencia t\xE9rmica" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Brigada Industrial Sistema Completo NOM-115 | BOMBERO.MX", "description": "Casco brigada industrial sistema completo con shell t\xE9rmico 150\xB0C, visor retr\xE1ctil y protector de nuca Nomex\xAE. Certificado NOM-115-STPS y ANSI Z89.1. M\xE9xico.", "keywords": ["casco brigada industrial sistema completo", "casco industrial t\xE9rmico", "casco brigada petroqu\xEDmica", "casco NOM-115-STPS"], "canonical": "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial" }, { label: "Sistema Completo" }], "heroBadge": "Sistema Completo \xB7 NOM-115 \xB7 150\xB0C", "heroTitle": "Casco Brigada Industrial", "heroTitleHighlight": "Sistema Completo", "heroSubtitle": "El sistema de referencia para brigadas industriales contra incendio. Shell termopl\xE1stico con resistencia t\xE9rmica hasta 150\xB0C, visor retr\xE1ctil antiempa\xF1ante y protector de nuca Nomex\xAE desmontable. Certificado NOM-115-STPS y ANSI Z89.1 para plantas petroqu\xEDmicas, refiner\xEDas y manufactura.", "heroSeoBlocks": [{ title: "Protecci\xF3n T\xE9rmica Moderada", text: "Shell con resistencia hasta <strong>150\xB0C</strong> para primera respuesta a conatos. No se deforma ni derrite durante el control inicial. <strong>No sustituye</strong> al casco estructural para combate profesional." }, { title: "Visor + Protector de Nuca", text: "Visor de <strong>policarbonato retr\xE1ctil</strong> antiempa\xF1ante para chispas y part\xEDculas. Protector de nuca <strong>Nomex\xAE desmontable</strong> para calor radiante." }], "ctaBarQuote": "Cotizar Sistema Completo Brigada", "productoCategoria": "Casco Brigada Industrial", "productoBadges": [{ modifier: "nfpa", text: "NOM-115" }, { modifier: "tpp", text: "150\xB0C" }, { modifier: "solas", text: "Visor" }], "productoMasVendido": true, "productoTitle": "Casco Brigada Industrial \u2014 Sistema Completo", "productoTitleSub": "NOM-115-STPS \xB7 ANSI Z89.1", "productoDesc": "Shell termopl\xE1stico con resistencia t\xE9rmica hasta 150\xB0C. Visor policarbonato retr\xE1ctil antiempa\xF1ante. Protector de nuca Nomex\xAE IIIA desmontable. Suspensi\xF3n de 4-6 puntos con ajuste ratchet.", "productoFeatures": ["Shell t\xE9rmico 150\xB0C", "Visor PC retr\xE1ctil", "Nuca Nomex\xAE desmontable", "Suspensi\xF3n 4-6 puntos", "NOM-115 + ANSI Z89.1"], "productoAppTags": ["Petroqu\xEDmica", "Energ\xEDa", "Manufactura", "Entrenamiento"], "gallery": [{ src: IMAGE, alt: "Casco brigada industrial sistema completo" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada industrial" }], "capasEyebrow": "Sistema Completo", "capasTitle": "3 Componentes Integrados", "capasDesc": "Shell t\xE9rmico, visor retr\xE1ctil y protector de nuca para brigadas industriales.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Sistema Completo", "specsDesc": "Dise\xF1ado para brigadas industriales contra incendio.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Brigadas Industriales", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Brigadas industriales contra incendio</strong> en plantas petroqu\xEDmicas, refiner\xEDas, plantas de energ\xEDa y manufactura. Primera respuesta y control de conatos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NOM-115-STPS + ANSI Z89.1", "certsDesc": "Certificado <strong>NOM-115-STPS</strong> para M\xE9xico y <strong>ANSI Z89.1 Tipo I Clase E</strong> para protecci\xF3n industrial y el\xE9ctrica.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-brigada-industrial", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Brigada Industrial", "faqDescription": "Dudas sobre uso y protecci\xF3n del sistema.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados y fichas t\xE9cnicas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "EPP Brigada", "relacionadosTitle": "Sistema de Brigada Completo", "relacionadosDesc": "Complete con traje, guantes y equipo de extinci\xF3n.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
