import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Capa Externa Aluminizada Completa", descripcion: "Cobertura exterior 100% aluminizada que refleja hasta el 95% de la radiaci\xF3n t\xE9rmica. A diferencia del traje ARFF, el traje de aproximaci\xF3n tiene aluminizado total para trabajo en proximidad a fuentes de calor extremo.", specs: [{ label: "Cobertura", valor: "100% aluminizada" }, { label: "Reflexi\xF3n", valor: "95% radiaci\xF3n" }, { label: "Proximidad", valor: "Fuentes extremas" }], color: "ember" },
    { num: "02", titulo: "Aislamiento T\xE9rmico de Alta Temperatura", descripcion: "Capas de aislamiento t\xE9rmico dise\xF1adas para exposici\xF3n a temperaturas superiores a 500\xB0C (932\xB0F) por periodos cortos. Protecci\xF3n para aproximaci\xF3n a hornos, calderas y derrames de metal fundido.", specs: [{ label: "Temperatura", valor: "500\xB0C+ (932\xB0F+)" }, { label: "Exposici\xF3n", valor: "Periodos cortos" }, { label: "Aplicaci\xF3n", valor: "Hornos, metal fundido" }], color: "smoke" },
    { num: "03", titulo: "Configuraci\xF3n de Cuerpo Completo", descripcion: "Sistema que cubre completamente desde la cabeza hasta los pies: capuch\xF3n con visor, chaqueta, pantal\xF3n, guantes y polainas/cubrezapatos integrados o separados. Protecci\xF3n 360\xB0.", specs: [{ label: "Cobertura", valor: "Cabeza a pies" }, { label: "Componentes", valor: "Capuch\xF3n a polainas" }, { label: "Protecci\xF3n", valor: "360\xB0" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Aluminizado", label: "Cobertura", valor: "100% exterior" },
    { categoria: "Aluminizado", label: "Reflexi\xF3n", valor: "95% radiaci\xF3n IR" },
    { categoria: "Aluminizado", label: "Material", valor: "Aluminio alta pureza" },
    { categoria: "Temperatura", label: "M\xE1xima", valor: "500\xB0C+ (932\xB0F+)" },
    { categoria: "Temperatura", label: "Exposici\xF3n", valor: "Corta duraci\xF3n" },
    { categoria: "Temperatura", label: "Continua", valor: "260\xB0C (500\xB0F)" },
    { categoria: "Componentes", label: "Capuch\xF3n", valor: "Con visor metalizado" },
    { categoria: "Componentes", label: "Chaqueta + Pantal\xF3n", valor: "Incluidos" },
    { categoria: "Componentes", label: "Guantes + Polainas", valor: "Incluidos/separados" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" }
  ];
  const catClass = { "Aluminizado": "construccion", "Temperatura": "termico", "Componentes": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Proximidad a Hornos Industriales", desc: "Trabajo cerca de hornos de fundici\xF3n de metales, vidrio y cer\xE1mica donde la radiaci\xF3n t\xE9rmica es extrema." },
    { titulo: "Derrames de Metal Fundido", desc: "Respuesta a accidentes industriales con derrames de acero, aluminio u otros metales fundidos." },
    { titulo: "Rescate en Incendios de Alta Intensidad", desc: "Aproximaci\xF3n a incendios industriales de alta intensidad para rescate de personal atrapado." },
    { titulo: "Operaciones en Plantas de Energ\xEDa", desc: "Trabajo cerca de calderas, turbinas y equipos de alta temperatura en plantas de generaci\xF3n." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l es la diferencia con el traje ARFF?", a: "El traje de <strong>aproximaci\xF3n</strong> tiene cobertura aluminizada <strong>100% total</strong> para trabajo cerca de fuentes de calor extremo (hornos, metal fundido). El traje <strong>ARFF</strong> tiene aluminizado parcial suficiente para incendios de aviaci\xF3n." },
    { q: "\xBFCu\xE1nto tiempo puedo estar expuesto a 500\xB0C?", a: "La exposici\xF3n a <strong>500\xB0C+ es de segundos a pocos minutos</strong>, no prolongada. El traje proporciona tiempo para aproximaci\xF3n, rescate y retiro. Para trabajo prolongado, debe mantenerse <strong>distancia o usar refrigeraci\xF3n</strong>." },
    { q: "\xBFSe puede usar para combate de incendios normal?", a: "No es pr\xE1ctico. El traje de aproximaci\xF3n es <strong>pesado, caluroso y restrictivo</strong>. Es para proximidad temporal a fuentes de calor extremo, no para combate de incendios m\xF3vil donde se requiere movilidad." }
  ];
  const relacionados = [
    { title: "Capa Aluminizada", badge: "100%", description: "Cobertura total.", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada", buttonText: "Ver Aluminizado", image: IMAGE },
    { title: "Alta Temperatura", badge: "500\xB0C+", description: "Exposici\xF3n extrema.", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", buttonText: "Ver Alta Temp", image: IMAGE },
    { title: "Visor Metalizado", badge: "Dorado", description: "Protecci\xF3n visual.", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado", buttonText: "Ver Visor", image: IMAGE },
    { title: "Traje ARFF", badge: "Aeroportuario", description: "Para aviaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", buttonText: "Ver ARFF", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada" },
    { label: "Alta Temperatura", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura" },
    { label: "Visor Metalizado", href: "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado" },
    { label: "Sistema Refrigeraci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion" },
    { label: "Aplicaciones Industriales", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }, { label: "Bota Estructural", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cabeza" }, { label: "Capucha Nomex\xAE", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Goggle de Bombero", href: "/productos/gafas-para-bomberos/goggle", tag: "Visual" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Alta Temperatura", href: "/productos", tag: "T\xE9cnico" }];
  const directorioLinks = [{ label: "Industria Metal\xFArgica", href: "/directorio" }, { label: "Plantas Energ\xEDa", href: "/directorio" }];
  const specsRapidas = [{ label: "Aluminizado", valor: "100%" }, { label: "Temperatura", valor: "500\xB0C+" }, { label: "Reflexi\xF3n", valor: "95%" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "100%", desc: "Aluminizado total" }, { code: "500\xB0C+", desc: "Alta temperatura" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n Completo \u2014 500\xB0C+ NFPA 1971 | BOMBERO.MX", "description": "Traje de aproximaci\xF3n sistema completo 100% aluminizado. Protecci\xF3n hasta 500\xB0C+, reflexi\xF3n 95%. NFPA 1971 proximity. Para hornos y metal fundido. M\xE9xico.", "keywords": ["traje aproximaci\xF3n", "traje proximity aluminizado", "traje alta temperatura", "traje NFPA 1971 proximity", "equipo hornos fundici\xF3n"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Sistema Completo" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 100% Aluminizado \xB7 500\xB0C+ \xB7 NFPA 1971", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Sistema Completo", "heroSubtitle": "Cobertura 100% aluminizada que refleja 95% de la radiaci\xF3n t\xE9rmica. Protecci\xF3n para exposici\xF3n a temperaturas superiores a 500\xB0C. Sistema completo de cabeza a pies. Certificado NFPA 1971 proximity.", "heroSeoBlocks": [{ title: "100% Aluminizado Completo", text: "Cobertura exterior <strong>100% aluminizada</strong> que refleja <strong>95% de radiaci\xF3n IR</strong>. Para proximidad a fuentes de calor extremo: hornos industriales, metal fundido, calderas." }, { title: "Protecci\xF3n 500\xB0C+", text: "Aislamiento t\xE9rmico para exposici\xF3n a <strong>temperaturas superiores a 500\xB0C</strong> por periodos cortos. Sistema de <strong>cabeza a pies</strong>: capuch\xF3n con visor, chaqueta, pantal\xF3n, guantes y polainas." }], "ctaBarQuote": "Cotizar Sistema Completo", "productoCategoria": "Traje Aproximaci\xF3n", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "500\xB0C+" }, { modifier: "solas", text: "Proximity" }], "productoMasVendido": true, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Sistema Completo", "productoTitleSub": "100% Aluminizado \xB7 500\xB0C+ \xB7 Cabeza a Pies", "productoDesc": "Traje de aproximaci\xF3n con cobertura 100% aluminizada. Protecci\xF3n para exposici\xF3n a temperaturas superiores a 500\xB0C. Sistema completo: capuch\xF3n con visor, chaqueta, pantal\xF3n, guantes y polainas. Certificado NFPA 1971 proximity.", "productoFeatures": ["Cobertura 100% aluminizada", "Reflexi\xF3n 95% radiaci\xF3n", "Temperatura 500\xB0C+", "Sistema cabeza a pies", "Certificado NFPA 1971"], "productoAppTags": ["Hornos industriales", "Metal fundido", "Rescate industrial", "Plantas energ\xEDa"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n sistema completo" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n proximity" }], "capasEyebrow": "Sistema Proximity", "capasTitle": "Protecci\xF3n de Alta Temperatura", "capasDesc": "Aluminizado total, aislamiento extremo y cobertura completa.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del sistema de aproximaci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Proximidad", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Proximidad a fuentes de calor extremo</strong>: hornos industriales, derrames de metal fundido, rescate en incendios industriales y plantas de energ\xEDa.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 Proximity", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> para <strong>fuentes de calor extremo</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Sistema Completo", "faqDescription": "Dudas sobre traje de aproximaci\xF3n.", "faqDocTitle": "Gu\xEDa Proximity", "faqDocDesc": "Tiempos y temperaturas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Aproximaci\xF3n Relacionado", "relacionadosDesc": "Completa tu equipo de proximidad.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
