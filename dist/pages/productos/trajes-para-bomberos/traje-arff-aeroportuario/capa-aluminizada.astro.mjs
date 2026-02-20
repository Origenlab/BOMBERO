import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Material Aluminizado de Alta Reflexi\xF3n", descripcion: "Capa externa con recubrimiento de aluminio de alta pureza que refleja hasta el 95% de la energ\xEDa radiante. Esencial para aproximaci\xF3n a incendios de combustible de aviaci\xF3n donde la radiaci\xF3n t\xE9rmica es extrema.", specs: [{ label: "Aluminio", valor: "Alta pureza" }, { label: "Reflexi\xF3n", valor: "95% radiante" }, { label: "Aproximaci\xF3n", valor: "Segura" }], color: "ember" },
    { num: "02", titulo: "Sustrato Resistente a Llamas", descripcion: "El material aluminizado est\xE1 aplicado sobre sustrato de fibra resistente a llamas (Nomex\xAE, PBI o similar). La combinaci\xF3n proporciona reflexi\xF3n de radiaci\xF3n m\xE1s protecci\xF3n contra contacto directo con llamas.", specs: [{ label: "Sustrato", valor: "Fibra FR" }, { label: "Llamas", valor: "Resistente contacto" }, { label: "Combinaci\xF3n", valor: "Radiaci\xF3n + llamas" }], color: "smoke" },
    { num: "03", titulo: "Durabilidad del Recubrimiento", descripcion: "El recubrimiento aluminizado est\xE1 dise\xF1ado para mantener sus propiedades reflectantes despu\xE9s de m\xFAltiples usos y lavados seg\xFAn instrucciones del fabricante. Inspecci\xF3n visual requerida.", specs: [{ label: "Durabilidad", valor: "Multi-uso" }, { label: "Lavados", valor: "Seg\xFAn instrucciones" }, { label: "Inspecci\xF3n", valor: "Visual requerida" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Recubrimiento", valor: "Aluminio alta pureza" },
    { categoria: "Material", label: "Reflexi\xF3n", valor: "95% radiaci\xF3n" },
    { categoria: "Material", label: "Sustrato", valor: "Fibra FR (Nomex\xAE/PBI)" },
    { categoria: "Protecci\xF3n", label: "Radiaci\xF3n", valor: "Reflexi\xF3n extrema" },
    { categoria: "Protecci\xF3n", label: "Llamas", valor: "Resistente contacto" },
    { categoria: "Protecci\xF3n", label: "Temperatura", valor: "Aproximaci\xF3n alta" },
    { categoria: "Durabilidad", label: "Uso", valor: "Multi-uso" },
    { categoria: "Durabilidad", label: "Lavado", valor: "Seg\xFAn fabricante" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" },
    { categoria: "Certificaci\xF3n", label: "ARFF", valor: "Aeroportuario" }
  ];
  const catClass = { "Material": "construccion", "Protecci\xF3n": "termico", "Durabilidad": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Aproximaci\xF3n a Incendios de Jet Fuel", desc: "Acercamiento a incendios de derrames de combustible de aviaci\xF3n donde la radiaci\xF3n t\xE9rmica requiere reflexi\xF3n." },
    { titulo: "Rescate en Fuselaje Incendiado", desc: "Aproximaci\xF3n al fuselaje de aeronave con fuego activo para extracci\xF3n de v\xEDctimas." },
    { titulo: "Operaciones en Pool Fire", desc: "Trabajo cerca de charcos de combustible incendiado (pool fires) t\xEDpicos de accidentes de aviaci\xF3n." },
    { titulo: "Flash Fire Protection", desc: "Protecci\xF3n contra llamaradas s\xFAbitas de vapor de combustible de aviaci\xF3n." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 se necesita capa aluminizada para ARFF?", a: "Los incendios de <strong>combustible de aviaci\xF3n</strong> producen radiaci\xF3n t\xE9rmica extrema. Un traje estructural normal absorbe esta radiaci\xF3n. La <strong>capa aluminizada refleja el 95%</strong> permitiendo aproximaci\xF3n m\xE1s cercana y segura." },
    { q: "\xBFEl aluminio se deteriora con el uso?", a: "S\xED, gradualmente. El <strong>recubrimiento aluminizado</strong> puede degradarse con uso, lavados y exposici\xF3n. Requiere <strong>inspecci\xF3n visual regular</strong>. Si hay delaminaci\xF3n, agrietamiento o p\xE9rdida de brillo significativa, debe retirarse." },
    { q: "\xBFLa capa aluminizada a\xF1ade mucho peso?", a: "S\xED, algo. El traje con capa aluminizada pesa aproximadamente <strong>0.5-1 kg m\xE1s</strong> que un traje estructural est\xE1ndar. Este peso adicional se justifica por la protecci\xF3n contra radiaci\xF3n extrema." }
  ];
  const relacionados = [
    { title: "Sistema Completo ARFF", badge: "4 capas", description: "Sistema integral.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Radiaci\xF3n T\xE9rmica", badge: "Protecci\xF3n", description: "TPP superior.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica", buttonText: "Ver Radiaci\xF3n", image: IMAGE },
    { title: "Traje Aproximaci\xF3n", badge: "Alta temp", description: "Proximidad extrema.", href: "/productos/trajes-para-bomberos/traje-aproximacion", buttonText: "Ver Aproximaci\xF3n", image: IMAGE },
    { title: "Casco ARFF", badge: "Aluminizado", description: "Casco reflectante.", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo" },
    { label: "Protecci\xF3n Jet Fuel", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel" },
    { label: "Radiaci\xF3n T\xE9rmica", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica" },
    { label: "Cierre R\xE1pido", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido" },
    { label: "Certificaciones ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Casco Aluminizado", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cabeza" }, { label: "Guantes Aluminizados", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Bota Estructural", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }];
  const articulos = [{ label: "Cat\xE1logo Traje ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cat\xE1logo" }, { label: "Cuidado Aluminizado", href: "/productos", tag: "Mantenimiento" }];
  const directorioLinks = [{ label: "Aeropuertos ARFF", href: "/directorio" }, { label: "Rescate Aviaci\xF3n", href: "/directorio" }];
  const specsRapidas = [{ label: "Reflexi\xF3n", valor: "95%" }, { label: "Material", valor: "Aluminio" }, { label: "Sustrato", valor: "Fibra FR" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "95%", desc: "Reflexi\xF3n radiante" }, { code: "Aluminizado", desc: "Multi-uso" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje ARFF Capa Aluminizada \u2014 95% Reflexi\xF3n Radiante | BOMBERO.MX", "description": "Traje ARFF con capa aluminizada de alta reflexi\xF3n 95%. Protecci\xF3n contra radiaci\xF3n t\xE9rmica extrema de incendios de combustible de aviaci\xF3n. M\xE9xico.", "keywords": ["traje ARFF aluminizado", "traje bombero reflectante", "capa aluminizada radiaci\xF3n", "traje proximity aviaci\xF3n", "equipo ARFF reflexi\xF3n"], "canonical": "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }, { label: "Capa Aluminizada" }], "heroBadge": "Traje ARFF \xB7 Capa Aluminizada \xB7 95% Reflexi\xF3n", "heroTitle": "Traje ARFF Aeroportuario", "heroTitleHighlight": "Capa Aluminizada", "heroSubtitle": "Recubrimiento de aluminio de alta pureza que refleja hasta el 95% de la energ\xEDa radiante. Sustrato de fibra resistente a llamas. Aproximaci\xF3n segura a incendios de combustible de aviaci\xF3n.", "heroSeoBlocks": [{ title: "Reflexi\xF3n 95% de Radiaci\xF3n", text: "Capa externa con <strong>aluminio de alta pureza</strong> que refleja el 95% de la energ\xEDa radiante. Permite <strong>aproximaci\xF3n m\xE1s cercana</strong> a incendios de Jet A/A-1." }, { title: "Sustrato Resistente a Llamas", text: "Material aluminizado sobre <strong>sustrato de fibra FR</strong> (Nomex\xAE, PBI). Combinaci\xF3n de <strong>reflexi\xF3n de radiaci\xF3n + resistencia a llamas</strong>." }], "ctaBarQuote": "Cotizar Aluminizado", "productoCategoria": "Traje ARFF Aluminizado", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "95% Reflexi\xF3n" }, { modifier: "solas", text: "Aluminizado" }], "productoMasVendido": false, "productoTitle": "Traje ARFF \u2014 Capa Aluminizada", "productoTitleSub": "Aluminio Alta Pureza \xB7 95% Reflexi\xF3n \xB7 FR Sustrato", "productoDesc": "Traje ARFF con capa externa aluminizada de alta reflexi\xF3n. Recubrimiento de aluminio que refleja 95% de radiaci\xF3n sobre sustrato de fibra FR. Para aproximaci\xF3n a incendios de combustible de aviaci\xF3n.", "productoFeatures": ["Aluminio alta pureza", "Reflexi\xF3n 95% radiante", "Sustrato fibra FR", "Multi-uso con inspecci\xF3n", "Certificado NFPA 1971"], "productoAppTags": ["Incendios Jet fuel", "Rescate fuselaje", "Pool fire", "Flash fire"], "gallery": [{ src: IMAGE, alt: "Traje ARFF capa aluminizada" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n ARFF aluminizado" }], "capasEyebrow": "Material Reflectante", "capasTitle": "Sistema Aluminizado de Protecci\xF3n", "capasDesc": "Aluminio alta pureza, sustrato FR y durabilidad.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del material aluminizado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Aluminizado", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Aproximaci\xF3n a radiaci\xF3n extrema</strong>: incendios de jet fuel, rescate en fuselaje incendiado, pool fires y protecci\xF3n contra flash fire.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 Proximity", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971</strong> con <strong>reflexi\xF3n aluminizada 95%</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Aluminizado", "faqDescription": "Dudas sobre reflexi\xF3n t\xE9rmica.", "faqDocTitle": "Gu\xEDa Mantenimiento", "faqDocDesc": "Cuidado aluminizado.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "EPP Aluminizado Relacionado", "relacionadosDesc": "Completa tu equipo reflectante.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
