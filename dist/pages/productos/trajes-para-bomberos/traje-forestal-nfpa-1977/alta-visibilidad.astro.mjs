import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Color Amarillo/Lima Alta Visibilidad", descripcion: "Tejido exterior en color amarillo/lima de alta visibilidad que destaca contra el fondo de vegetaci\xF3n y humo. Permite identificaci\xF3n r\xE1pida del bombero por compa\xF1eros y aeronaves.", specs: [{ label: "Color", valor: "Amarillo/Lima" }, { label: "Visibilidad", valor: "Alta" }, { label: "Contraste", valor: "Vegetaci\xF3n/humo" }], color: "ember" },
    { num: "02", titulo: "Cintas Reflectantes 3M\u2122 Scotchlite\u2122", descripcion: "Cintas reflectantes 3M\u2122 Scotchlite\u2122 de grado bombero en torso, brazos y piernas. Reflectan luz de linternas y faros para visibilidad nocturna. Resistentes al calor y lavados.", specs: [{ label: "Cintas", valor: "3M\u2122 Scotchlite\u2122" }, { label: "Ubicaci\xF3n", valor: "Torso, brazos, piernas" }, { label: "Visibilidad", valor: "Nocturna" }], color: "smoke" },
    { num: "03", titulo: "Cumplimiento ANSI/ISEA 107", descripcion: "Dise\xF1o que cumple con los requisitos de visibilidad de ANSI/ISEA 107 para ropa de alta visibilidad. Combina el color de fondo con cintas reflectantes para m\xE1xima visibilidad diurna y nocturna.", specs: [{ label: "Norma", valor: "ANSI/ISEA 107" }, { label: "Tipo", valor: "Diurno + nocturno" }, { label: "Clase", valor: "Alta visibilidad" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Color", label: "Tejido", valor: "Amarillo/Lima Hi-Vis" },
    { categoria: "Color", label: "Contraste", valor: "Vegetaci\xF3n y humo" },
    { categoria: "Color", label: "Identificaci\xF3n", valor: "R\xE1pida a distancia" },
    { categoria: "Reflectantes", label: "Material", valor: "3M\u2122 Scotchlite\u2122" },
    { categoria: "Reflectantes", label: "Ubicaci\xF3n", valor: "Torso, brazos, piernas" },
    { categoria: "Reflectantes", label: "Resistencia", valor: "Calor y lavados" },
    { categoria: "Visibilidad", label: "Diurna", valor: "Color de fondo" },
    { categoria: "Visibilidad", label: "Nocturna", valor: "Cintas reflectantes" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1977 wildland" },
    { categoria: "Certificaci\xF3n", label: "Visibilidad", valor: "ANSI/ISEA 107" }
  ];
  const catClass = { "Color": "construccion", "Reflectantes": "termico", "Visibilidad": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones Nocturnas", desc: "Combate de incendios forestales de noche donde la identificaci\xF3n visual de compa\xF1eros es cr\xEDtica para seguridad." },
    { titulo: "Coordinaci\xF3n con Aeronaves", desc: "Operaciones donde helic\xF3pteros y aviones cisternas necesitan identificar la ubicaci\xF3n del personal en tierra." },
    { titulo: "Condiciones de Baja Visibilidad", desc: "Operaciones con humo denso, lluvia o niebla donde el color est\xE1ndar no es suficientemente visible." },
    { titulo: "Protocolos de Seguridad Estrictos", desc: "Brigadas que requieren m\xE1xima visibilidad como parte de sus protocolos de seguridad operativa." }
  ];
  const faqs = [
    { q: "\xBFEl color amarillo afecta la protecci\xF3n contra el fuego?", a: "No. El <strong>color amarillo/lima</strong> es simplemente un tinte aplicado a las mismas fibras <strong>Nomex\xAE IIIA</strong> de protecci\xF3n inherente. Las propiedades ign\xEDfugas son id\xE9nticas al traje est\xE1ndar." },
    { q: "\xBFLas cintas reflectantes resisten el calor?", a: "S\xED. Las cintas <strong>3M\u2122 Scotchlite\u2122</strong> de grado bombero est\xE1n dise\xF1adas para resistir las temperaturas de operaci\xF3n forestal. Mantienen su reflectancia despu\xE9s de exposici\xF3n al calor y m\xFAltiples lavados." },
    { q: "\xBFEs obligatorio el traje de alta visibilidad?", a: "Depende del protocolo de cada brigada. Es especialmente recomendado para <strong>operaciones nocturnas</strong>, coordinaci\xF3n con aeronaves y condiciones de baja visibilidad donde la identificaci\xF3n r\xE1pida salva vidas." }
  ];
  const relacionados = [
    { title: "Sistema Base", badge: "Est\xE1ndar", description: "Configuraci\xF3n cl\xE1sica.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base", buttonText: "Ver Base", image: IMAGE },
    { title: "Dise\xF1o Operativo", badge: "Funcional", description: "M\xE1xima funcionalidad.", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo", buttonText: "Ver Operativo", image: IMAGE },
    { title: "Casco Forestal Hi-Vis", badge: "NFPA 1977", description: "Casco alta visibilidad.", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", buttonText: "Ver Casco", image: IMAGE },
    { title: "Guantes Hi-Vis", badge: "Reflectantes", description: "Guantes visibles.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Base", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/sistema-base" },
    { label: "Tejido Nomex\xAE Ultraligero", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/tejido-nomex-ultraligero" },
    { label: "Resistencia Inherente", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/resistencia-inherente" },
    { label: "Alta Transpirabilidad", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-transpirabilidad" },
    { label: "Dise\xF1o Operativo", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/diseno-operativo" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Casco Hi-Vis Forestal", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cabeza" }, { label: "Guantes Reflectantes", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Forestal", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Alta Visibilidad", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Operaciones Nocturnas", href: "/directorio" }, { label: "Coordinaci\xF3n A\xE9rea", href: "/directorio" }];
  const specsRapidas = [{ label: "Color", valor: "Amarillo/Lima" }, { label: "Cintas", valor: "3M\u2122 Scotchlite\u2122" }, { label: "ANSI", valor: "ISEA 107" }, { label: "NFPA", valor: "1977" }];
  const certItems = [{ code: "NFPA 1977", desc: "Wildland firefighting" }, { code: "ANSI/ISEA 107", desc: "Alta visibilidad" }, { code: "3M\u2122", desc: "Scotchlite\u2122" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Forestal NFPA 1977 \u2014 Alta Visibilidad Hi-Vis | BOMBERO.MX", "description": "Traje forestal NFPA 1977 de alta visibilidad amarillo/lima con cintas 3M\u2122 Scotchlite\u2122. ANSI/ISEA 107. Para operaciones nocturnas y coordinaci\xF3n a\xE9rea. M\xE9xico.", "keywords": ["traje forestal alta visibilidad", "traje NFPA 1977 hi-vis", "traje bombero reflectante", "traje forestal amarillo", "equipo wildland nocturno"], "canonical": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977" }, { label: "Alta Visibilidad" }], "heroBadge": "Traje Forestal \xB7 NFPA 1977 \xB7 Alta Visibilidad \xB7 ANSI", "heroTitle": "Traje Forestal NFPA 1977", "heroTitleHighlight": "Alta Visibilidad", "heroSubtitle": "Color amarillo/lima de alta visibilidad con cintas reflectantes 3M\u2122 Scotchlite\u2122. Cumple ANSI/ISEA 107. Identificaci\xF3n r\xE1pida de d\xEDa y noche. Para operaciones nocturnas y coordinaci\xF3n con aeronaves.", "heroSeoBlocks": [{ title: "Visibilidad Diurna + Nocturna", text: "Color <strong>amarillo/lima</strong> que destaca contra vegetaci\xF3n y humo para visibilidad diurna. <strong>Cintas 3M\u2122 Scotchlite\u2122</strong> que reflejan luz para visibilidad nocturna." }, { title: "NFPA 1977 + ANSI/ISEA 107", text: "Doble certificaci\xF3n: <strong>NFPA 1977</strong> para protecci\xF3n contra fuego forestal y <strong>ANSI/ISEA 107</strong> para alta visibilidad seg\xFAn est\xE1ndares industriales." }], "ctaBarQuote": "Cotizar Alta Visibilidad", "productoCategoria": "Traje Forestal Hi-Vis", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1977" }, { modifier: "tpp", text: "Hi-Vis" }, { modifier: "solas", text: "ANSI 107" }], "productoMasVendido": false, "productoTitle": "Traje Forestal NFPA 1977 \u2014 Alta Visibilidad", "productoTitleSub": "Amarillo/Lima \xB7 3M\u2122 Scotchlite\u2122 \xB7 ANSI/ISEA 107", "productoDesc": "Traje forestal de alta visibilidad en color amarillo/lima con cintas reflectantes 3M\u2122 Scotchlite\u2122. Doble certificaci\xF3n NFPA 1977 + ANSI/ISEA 107. Para operaciones nocturnas y coordinaci\xF3n con aeronaves.", "productoFeatures": ["Color amarillo/lima Hi-Vis", "Cintas 3M\u2122 Scotchlite\u2122", "Cumple ANSI/ISEA 107", "Visibilidad d\xEDa y noche", "Certificado NFPA 1977"], "productoAppTags": ["Operaciones nocturnas", "Coordinaci\xF3n a\xE9rea", "Baja visibilidad", "Seguridad estricta"], "gallery": [{ src: IMAGE, alt: "Traje forestal NFPA 1977 alta visibilidad" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n forestal nocturna" }], "capasEyebrow": "Sistema Alta Visibilidad", "capasTitle": "Identificaci\xF3n R\xE1pida D\xEDa y Noche", "capasDesc": "Color Hi-Vis, cintas reflectantes y cumplimiento ANSI.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de alta visibilidad.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Alta Visibilidad", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones con requisitos de visibilidad</strong>: operaciones nocturnas, coordinaci\xF3n con aeronaves, condiciones de baja visibilidad y protocolos de seguridad estrictos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1977 + ANSI/ISEA 107", "certsDesc": "Doble certificaci\xF3n <strong>NFPA 1977</strong> + <strong>ANSI/ISEA 107</strong> para protecci\xF3n y visibilidad.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Alta Visibilidad", "faqDescription": "Dudas sobre visibilidad y seguridad.", "faqDocTitle": "Ficha T\xE9cnica", "faqDocDesc": "Especificaciones completas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Hi-Vis", "relacionadosTitle": "EPP Alta Visibilidad", "relacionadosDesc": "Completa tu equipo de alta visibilidad.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977/alta-visibilidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
