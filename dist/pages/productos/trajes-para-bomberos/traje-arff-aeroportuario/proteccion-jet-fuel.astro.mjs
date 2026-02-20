import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Barrera Impermeable a Hidrocarburos", descripcion: "Membrana de barrera dise\xF1ada para bloquear la penetraci\xF3n de combustible de aviaci\xF3n (Jet A, Jet A-1, JP-8) y sus vapores. Previene que el combustible llegue a la piel durante operaciones de derrame.", specs: [{ label: "Barrera", valor: "Hidrocarburos" }, { label: "Jet A/A-1", valor: "Impermeable" }, { label: "Vapores", valor: "Bloqueados" }], color: "ember" },
    { num: "02", titulo: "Resistencia a Ignici\xF3n por Combustible", descripcion: "El material exterior resiste la ignici\xF3n cuando est\xE1 empapado en combustible de aviaci\xF3n. Caracter\xEDstica cr\xEDtica ya que el bombero ARFF frecuentemente trabaja con su traje cubierto de jet fuel.", specs: [{ label: "Ignici\xF3n", valor: "Resistente" }, { label: "Empapado", valor: "No arde" }, { label: "Cr\xEDtico", valor: "ARFF" }], color: "smoke" },
    { num: "03", titulo: "Facilidad de Descontaminaci\xF3n", descripcion: "Superficie externa que permite remoci\xF3n f\xE1cil de combustible residual despu\xE9s de operaciones. El jet fuel no se absorbe en el material, facilitando limpieza y reduciendo riesgo de ignici\xF3n posterior.", specs: [{ label: "Superficie", valor: "No absorbente" }, { label: "Limpieza", valor: "F\xE1cil" }, { label: "Residuos", valor: "Removibles" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Barrera", label: "Hidrocarburos", valor: "Jet A, A-1, JP-8" },
    { categoria: "Barrera", label: "Vapores", valor: "Bloqueados" },
    { categoria: "Barrera", label: "Penetraci\xF3n", valor: "Prevenida" },
    { categoria: "Ignici\xF3n", label: "Resistencia", valor: "Empapado en combustible" },
    { categoria: "Ignici\xF3n", label: "Material", valor: "No propaga llama" },
    { categoria: "Descontaminaci\xF3n", label: "Superficie", valor: "No absorbente" },
    { categoria: "Descontaminaci\xF3n", label: "Limpieza", valor: "F\xE1cil remoci\xF3n" },
    { categoria: "Dise\xF1o", label: "ARFF espec\xEDfico", valor: "S\xED" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 ARFF" },
    { categoria: "Certificaci\xF3n", label: "Combustible", valor: "Jet fuel rated" }
  ];
  const catClass = { "Barrera": "construccion", "Ignici\xF3n": "termico", "Descontaminaci\xF3n": "ergonomia", "Dise\xF1o": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Respuesta a Derrames de Combustible", desc: "Operaciones donde hay derrames activos de combustible de aviaci\xF3n que pueden empapar al personal de respuesta." },
    { titulo: "Combate de Pool Fires", desc: "Extinci\xF3n de incendios de charcos de combustible donde el bombero puede quedar cubierto de jet fuel." },
    { titulo: "Rescate con Fugas Activas", desc: "Extracci\xF3n de v\xEDctimas de aeronaves con tanques de combustible da\xF1ados y fugas activas." },
    { titulo: "Operaciones Post-Crash", desc: "Trabajo en escenas de accidente donde combustible derramado cubre el \xE1rea y al personal." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 hace al Jet A diferente de otros combustibles?", a: "<strong>Jet A/A-1</strong> (queroseno de aviaci\xF3n) tiene punto de inflamaci\xF3n de ~38\xB0C. Sus vapores pueden acumularse y formar mezclas explosivas. El traje ARFF debe resistir tanto el <strong>l\xEDquido como los vapores</strong>." },
    { q: "\xBFEl traje protege si estoy cubierto de jet fuel y hay ignici\xF3n?", a: "El traje proporciona <strong>tiempo de escape</strong>, pero no es protecci\xF3n indefinida. Si el traje est\xE1 empapado de combustible y hay fuente de ignici\xF3n, debe <strong>evacuar la zona inmediatamente</strong> y proceder a descontaminaci\xF3n." },
    { q: "\xBFC\xF3mo se limpia el jet fuel del traje?", a: "Seguir <strong>procedimiento del fabricante</strong>. Generalmente se usa agua y detergente suave. No usar solventes agresivos que puedan da\xF1ar las membranas. El jet fuel residual debe removerse <strong>completamente antes de almacenar</strong>." }
  ];
  const relacionados = [
    { title: "Sistema Completo ARFF", badge: "4 capas", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Capa Aluminizada", badge: "95% reflexi\xF3n", description: "Radiaci\xF3n t\xE9rmica.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada", buttonText: "Ver Aluminizado", image: IMAGE },
    { title: "Bota ARFF", badge: "Hidrocarburos", description: "Resistente combustible.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: IMAGE },
    { title: "Guantes ARFF", badge: "Jet fuel", description: "Resistentes.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada" },
    { label: "Radiaci\xF3n T\xE9rmica", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica" },
    { label: "Cierre R\xE1pido", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido" },
    { label: "Certificaciones ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Bota Resistente HC", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }, { label: "Guantes Jet Fuel", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Casco ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Traje ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cat\xE1logo" }, { label: "Descontaminaci\xF3n", href: "/productos", tag: "Procedimiento" }];
  const directorioLinks = [{ label: "ARFF Aeropuertos", href: "/directorio" }, { label: "Derrames Combustible", href: "/directorio" }];
  const specsRapidas = [{ label: "Jet A/A-1", valor: "Impermeable" }, { label: "Ignici\xF3n", valor: "Resistente" }, { label: "Limpieza", valor: "F\xE1cil" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "ARFF" }, { code: "Jet Fuel", desc: "Impermeable" }, { code: "No Ignici\xF3n", desc: "Empapado" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje ARFF \u2014 Protecci\xF3n Jet Fuel Impermeable | BOMBERO.MX", "description": "Traje ARFF con protecci\xF3n contra combustible de aviaci\xF3n Jet A/A-1. Impermeable a hidrocarburos, resistente a ignici\xF3n empapado. M\xE9xico.", "keywords": ["traje ARFF jet fuel", "traje bombero hidrocarburos", "traje impermeable combustible", "traje aviaci\xF3n queroseno", "equipo ARFF derrame"], "canonical": "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }, { label: "Protecci\xF3n Jet Fuel" }], "heroBadge": "Traje ARFF \xB7 Jet Fuel \xB7 Impermeable \xB7 No Ignici\xF3n", "heroTitle": "Traje ARFF Aeroportuario", "heroTitleHighlight": "Protecci\xF3n Jet Fuel", "heroSubtitle": "Barrera impermeable a combustible de aviaci\xF3n Jet A/A-1/JP-8 y sus vapores. Resistente a ignici\xF3n cuando est\xE1 empapado en combustible. Superficie de f\xE1cil descontaminaci\xF3n.", "heroSeoBlocks": [{ title: "Impermeable a Hidrocarburos", text: "Membrana de barrera que bloquea <strong>Jet A, A-1, JP-8</strong> y vapores. Previene que el combustible llegue a la piel durante operaciones de <strong>derrame y rescate</strong>." }, { title: "Resistente a Ignici\xF3n Empapado", text: "Material exterior que <strong>no enciende cuando est\xE1 empapado</strong> en combustible de aviaci\xF3n. Caracter\xEDstica cr\xEDtica para operaciones <strong>ARFF</strong> con derrames activos." }], "ctaBarQuote": "Cotizar Jet Fuel", "productoCategoria": "Traje ARFF Jet Fuel", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "Jet A/A-1" }, { modifier: "solas", text: "No Ignici\xF3n" }], "productoMasVendido": false, "productoTitle": "Traje ARFF \u2014 Protecci\xF3n Jet Fuel", "productoTitleSub": "Impermeable \xB7 No Ignici\xF3n \xB7 F\xE1cil Descontaminaci\xF3n", "productoDesc": "Traje ARFF con barrera impermeable a combustible de aviaci\xF3n. Resistente a ignici\xF3n cuando est\xE1 empapado de jet fuel. Superficie no absorbente de f\xE1cil descontaminaci\xF3n. Certificado NFPA 1971 ARFF.", "productoFeatures": ["Impermeable Jet A/A-1/JP-8", "Bloquea vapores hidrocarburos", "Resistente ignici\xF3n empapado", "Superficie no absorbente", "F\xE1cil descontaminaci\xF3n"], "productoAppTags": ["Derrames combustible", "Pool fires", "Rescate fugas", "Post-crash"], "gallery": [{ src: IMAGE, alt: "Traje ARFF protecci\xF3n jet fuel" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n ARFF derrame" }], "capasEyebrow": "Protecci\xF3n Combustible", "capasTitle": "Sistema Anti-Hidrocarburos", "capasDesc": "Barrera impermeable, no ignici\xF3n y descontaminaci\xF3n.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de protecci\xF3n jet fuel.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Jet Fuel", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones con combustible de aviaci\xF3n</strong>: respuesta a derrames, pool fires, rescate con fugas activas y operaciones post-crash.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 ARFF Jet Fuel", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 ARFF</strong> con <strong>protecci\xF3n jet fuel rated</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Jet Fuel", "faqDescription": "Dudas sobre protecci\xF3n combustible.", "faqDocTitle": "Descontaminaci\xF3n", "faqDocDesc": "Procedimiento limpieza.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "EPP Anti-Hidrocarburos", "relacionadosDesc": "Completa tu protecci\xF3n contra jet fuel.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
