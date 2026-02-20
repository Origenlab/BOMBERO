import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Recubrimiento Dorado Anti-Radiaci\xF3n", descripcion: "Visor con recubrimiento de oro o metalizado dorado que refleja la radiaci\xF3n infrarroja mientras permite visibilidad. Protege los ojos de la intensa radiaci\xF3n t\xE9rmica de fuentes de calor extremo.", specs: [{ label: "Recubrimiento", valor: "Dorado/oro" }, { label: "Reflexi\xF3n IR", valor: "Alta" }, { label: "Visibilidad", valor: "Mantenida" }], color: "ember" },
    { num: "02", titulo: "Protecci\xF3n UV e Infrarroja", descripcion: "Filtrado de radiaci\xF3n ultravioleta e infrarroja que puede da\xF1ar la retina. Los ojos est\xE1n protegidos de las longitudes de onda peligrosas mientras se mantiene visi\xF3n del entorno.", specs: [{ label: "UV", valor: "Filtrado" }, { label: "IR", valor: "Reducido" }, { label: "Retina", valor: "Protegida" }], color: "smoke" },
    { num: "03", titulo: "Campo Visual Amplio", descripcion: "Dise\xF1o de visor panor\xE1mico que proporciona campo visual amplio necesario para operaciones de proximidad. La conciencia situacional es cr\xEDtica cuando se trabaja cerca de fuentes de peligro.", specs: [{ label: "Campo", valor: "Panor\xE1mico" }, { label: "Visi\xF3n", valor: "Amplia" }, { label: "Situacional", valor: "Completa" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Recubrimiento", label: "Material", valor: "Oro/metalizado dorado" },
    { categoria: "Recubrimiento", label: "Reflexi\xF3n IR", valor: "Alto porcentaje" },
    { categoria: "Recubrimiento", label: "Durabilidad", valor: "Resistente abrasi\xF3n" },
    { categoria: "Protecci\xF3n", label: "UV", valor: "99%+ filtrado" },
    { categoria: "Protecci\xF3n", label: "IR", valor: "Significativamente reducido" },
    { categoria: "Protecci\xF3n", label: "Visible", valor: "Transmisi\xF3n adecuada" },
    { categoria: "Campo Visual", label: "Tipo", valor: "Panor\xE1mico" },
    { categoria: "Campo Visual", label: "\xC1ngulo", valor: "180\xB0+" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1971 proximity" },
    { categoria: "Certificaci\xF3n", label: "\xD3ptico", valor: "ANSI Z87.1" }
  ];
  const catClass = { "Recubrimiento": "construccion", "Protecci\xF3n": "termico", "Campo Visual": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Proximidad a Metal Fundido", desc: "Trabajo visual cerca de coladas de metal fundido donde la radiaci\xF3n IR es extrema y puede da\xF1ar la retina." },
    { titulo: "Inspecci\xF3n de Hornos", desc: "Observaci\xF3n del interior de hornos industriales para evaluaci\xF3n sin exposici\xF3n ocular excesiva." },
    { titulo: "Rescate en Ambiente Radiante", desc: "Operaciones de rescate donde se requiere visi\xF3n clara mientras se recibe radiaci\xF3n t\xE9rmica intensa." },
    { titulo: "Operaciones de Soldadura Industrial", desc: "Supervisi\xF3n de operaciones de soldadura a gran escala con arcos el\xE9ctricos y metal caliente." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 el recubrimiento es dorado?", a: "El <strong>oro</strong> (o recubrimientos que lo imitan) es excelente reflector de <strong>radiaci\xF3n infrarroja</strong> mientras permite paso de luz visible. El color dorado es resultado de esta propiedad \xF3ptica, no es decorativo." },
    { q: "\xBFEl visor reduce demasiado la visibilidad?", a: "No significativamente. El dise\xF1o equilibra <strong>protecci\xF3n y visibilidad</strong>. La transmisi\xF3n de luz visible es suficiente para operaciones. En condiciones de poca luz ambiental, puede requerirse iluminaci\xF3n adicional." },
    { q: "\xBFEl recubrimiento se da\xF1a con el uso?", a: "Puede degradarse con <strong>abrasi\xF3n y manejo inadecuado</strong>. Debe limpiarse solo con materiales suaves aprobados. Si hay rayones significativos que afectan visi\xF3n o protecci\xF3n, debe <strong>reemplazarse el visor</strong>." }
  ];
  const relacionados = [
    { title: "Sistema Completo", badge: "Proximidad", description: "Con visor incluido.", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Capa Aluminizada", badge: "Reflexi\xF3n", description: "Cuerpo protegido.", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada", buttonText: "Ver Aluminizado", image: IMAGE },
    { title: "Alta Temperatura", badge: "500\xB0C+", description: "Exposici\xF3n extrema.", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura", buttonText: "Ver Alta Temp", image: IMAGE },
    { title: "Casco Aproximaci\xF3n", badge: "Metalizado", description: "Casco con visor.", href: "/productos/cascos-para-bomberos", buttonText: "Ver Casco", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-aproximacion/capa-aluminizada" },
    { label: "Alta Temperatura", href: "/productos/trajes-para-bomberos/traje-aproximacion/alta-temperatura" },
    { label: "Sistema Refrigeraci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion/refrigeracion" },
    { label: "Aplicaciones Industriales", href: "/productos/trajes-para-bomberos/traje-aproximacion/aplicaciones-industriales" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Capuch\xF3n con Visor", href: "/productos", tag: "Cabeza" }, { label: "Visores Repuesto", href: "/productos", tag: "Accesorio" }, { label: "Sistema Completo", href: "/productos/trajes-para-bomberos/traje-aproximacion/sistema-completo", tag: "Traje" }];
  const articulos = [{ label: "Cat\xE1logo Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cat\xE1logo" }, { label: "Cuidado de Visores", href: "/productos", tag: "Mantenimiento" }];
  const directorioLinks = [{ label: "Fundiciones", href: "/directorio" }, { label: "Industria Metal\xFArgica", href: "/directorio" }];
  const specsRapidas = [{ label: "Recubrimiento", valor: "Dorado/oro" }, { label: "UV", valor: "99%+ filtrado" }, { label: "Campo", valor: "Panor\xE1mico 180\xB0+" }, { label: "NFPA", valor: "1971" }];
  const certItems = [{ code: "NFPA 1971", desc: "Proximity" }, { code: "ANSI Z87.1", desc: "Protecci\xF3n ocular" }, { code: "Dorado", desc: "Reflexi\xF3n IR" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Aproximaci\xF3n \u2014 Visor Metalizado Dorado | BOMBERO.MX", "description": "Traje aproximaci\xF3n con visor metalizado dorado anti-radiaci\xF3n. Reflexi\xF3n IR, protecci\xF3n UV, campo visual panor\xE1mico. NFPA 1971. M\xE9xico.", "keywords": ["traje aproximaci\xF3n visor dorado", "visor metalizado radiaci\xF3n", "visor proximity oro", "protecci\xF3n ocular calor", "visor anti-radiaci\xF3n industrial"], "canonical": "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje de Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion" }, { label: "Visor Metalizado" }], "heroBadge": "Traje Aproximaci\xF3n \xB7 Visor Dorado \xB7 Anti-Radiaci\xF3n \xB7 ANSI Z87.1", "heroTitle": "Traje de Aproximaci\xF3n", "heroTitleHighlight": "Visor Metalizado", "heroSubtitle": "Visor con recubrimiento dorado/oro que refleja radiaci\xF3n infrarroja mientras mantiene visibilidad. Protecci\xF3n UV 99%+. Campo visual panor\xE1mico 180\xB0+ para conciencia situacional completa.", "heroSeoBlocks": [{ title: "Recubrimiento Dorado Anti-IR", text: "Visor con <strong>recubrimiento de oro o metalizado dorado</strong> que refleja la radiaci\xF3n infrarroja. Protege la <strong>retina</strong> de da\xF1o por exposici\xF3n a fuentes de calor extremo." }, { title: "Campo Visual Panor\xE1mico", text: "<strong>Visi\xF3n amplia de 180\xB0+</strong> necesaria para operaciones de proximidad. Filtrado <strong>UV 99%+</strong> y reducci\xF3n significativa de IR manteniendo visibilidad adecuada." }], "ctaBarQuote": "Cotizar Visor Metalizado", "productoCategoria": "Traje Aproximaci\xF3n Visor", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "Dorado" }, { modifier: "solas", text: "ANSI Z87.1" }], "productoMasVendido": false, "productoTitle": "Traje de Aproximaci\xF3n \u2014 Visor Metalizado", "productoTitleSub": "Recubrimiento Dorado \xB7 Anti-IR \xB7 Panor\xE1mico 180\xB0+", "productoDesc": "Traje de aproximaci\xF3n con visor metalizado dorado que refleja radiaci\xF3n infrarroja. Protecci\xF3n UV 99%+, campo visual panor\xE1mico 180\xB0+. Certificado NFPA 1971 proximity y ANSI Z87.1.", "productoFeatures": ["Recubrimiento dorado/oro", "Reflexi\xF3n IR alta", "Protecci\xF3n UV 99%+", "Campo panor\xE1mico 180\xB0+", "Certificado ANSI Z87.1"], "productoAppTags": ["Metal fundido", "Hornos inspecci\xF3n", "Rescate radiante", "Soldadura industrial"], "gallery": [{ src: IMAGE, alt: "Traje aproximaci\xF3n visor metalizado" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Operaci\xF3n proximidad con visor" }], "capasEyebrow": "Protecci\xF3n Visual", "capasTitle": "Sistema de Visor Anti-Radiaci\xF3n", "capasDesc": "Recubrimiento dorado, protecci\xF3n UV/IR y campo panor\xE1mico.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones del visor metalizado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Visor", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Protecci\xF3n ocular en proximidad</strong>: metal fundido, inspecci\xF3n de hornos, rescate en ambiente radiante y supervisi\xF3n de soldadura industrial.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1971 + ANSI Z87.1", "certsDesc": "Certificaci\xF3n <strong>NFPA 1971 proximity</strong> y <strong>ANSI Z87.1</strong> protecci\xF3n ocular.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-aproximacion", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Visor", "faqDescription": "Dudas sobre protecci\xF3n visual.", "faqDocTitle": "Cuidado Visores", "faqDocDesc": "Mantenimiento y reemplazo.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Proximity", "relacionadosTitle": "EPP Visual Relacionado", "relacionadosDesc": "Completa tu protecci\xF3n ocular.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-aproximacion/visor-metalizado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
