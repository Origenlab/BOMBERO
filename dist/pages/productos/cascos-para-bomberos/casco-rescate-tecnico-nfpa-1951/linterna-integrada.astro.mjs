import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-acuatico-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Sistema LED de Alto Rendimiento", descripcion: "LED de \xFAltima generaci\xF3n con 300-500 l\xFAmenes efectivos. M\xFAltiples modos: alto, bajo, intermitente (strobe). La \xF3ptica concentra el haz para iluminaci\xF3n de trabajo a 30-50 metros sin deslumbrar a compa\xF1eros.", specs: [{ label: "L\xFAmenes", valor: "300-500 (modo alto)" }, { label: "Modos", valor: "Alto, bajo, strobe" }, { label: "Alcance", valor: "30-50 m efectivos" }], color: "ember" },
    { num: "02", titulo: "Montaje Frontal Dedicado", descripcion: "Soporte frontal espec\xEDfico integrado al shell, no adaptadores gen\xE9ricos que pueden soltarse. El \xE1ngulo de inclinaci\xF3n es ajustable para iluminar zona de trabajo. El montaje no interfiere con visor ni protecci\xF3n facial.", specs: [{ label: "Tipo", valor: "Integrado al shell" }, { label: "\xC1ngulo", valor: "Ajustable 0-45\xB0" }, { label: "Liberaci\xF3n", valor: "R\xE1pida para mantenimiento" }], color: "smoke" },
    { num: "03", titulo: "Bater\xEDa y Autonom\xEDa", descripcion: "Pack de bater\xEDas recargables o AA est\xE1ndar seg\xFAn modelo. Autonom\xEDa m\xEDnima de 6-8 horas en modo alto. El compartimiento de bater\xEDas est\xE1 en la parte posterior del casco para balancear peso.", specs: [{ label: "Autonom\xEDa", valor: "6-8 horas (modo alto)" }, { label: "Bater\xEDas", valor: "Recargables o 4xAA" }, { label: "Ubicaci\xF3n", valor: "Posterior (balance peso)" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Iluminaci\xF3n", label: "Tipo LED", valor: "CREE XP-L o equivalente" },
    { categoria: "Iluminaci\xF3n", label: "L\xFAmenes alto", valor: "300-500 lm" },
    { categoria: "Iluminaci\xF3n", label: "L\xFAmenes bajo", valor: "50-100 lm" },
    { categoria: "Iluminaci\xF3n", label: "Alcance", valor: "30-50 m (modo alto)" },
    { categoria: "Iluminaci\xF3n", label: "Modos", valor: "Alto, bajo, strobe" },
    { categoria: "Bater\xEDa", label: "Tipo", valor: "Li-Ion recargable o 4xAA" },
    { categoria: "Bater\xEDa", label: "Autonom\xEDa alto", valor: "6-8 horas" },
    { categoria: "Bater\xEDa", label: "Autonom\xEDa bajo", valor: "20-30 horas" },
    { categoria: "Bater\xEDa", label: "Ubicaci\xF3n", valor: "Pack posterior (balance)" },
    { categoria: "Montaje", label: "Tipo", valor: "Integrado al shell" },
    { categoria: "Montaje", label: "\xC1ngulo", valor: "Ajustable 0-45\xB0" },
    { categoria: "Montaje", label: "Cable", valor: "Interno protegido" },
    { categoria: "Resistencia", label: "IP Rating", valor: "IP67 (sumergible 1m/30min)" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1951", valor: "Technical Rescue" }
  ];
  const catClass = { "Iluminaci\xF3n": "construccion", "Bater\xEDa": "ergonomia", "Montaje": "ergonomia", "Resistencia": "certificacion", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Rescate en Espacios Confinados", desc: "Iluminaci\xF3n manos libres esencial en t\xFAneles, cisternas, alcantarillas donde no hay luz natural y las manos est\xE1n ocupadas." },
    { titulo: "Operaciones Nocturnas SAR", desc: "B\xFAsqueda y rescate nocturno donde la iluminaci\xF3n personal permite trabajo independiente del equipo." },
    { titulo: "Rescate Vehicular Nocturno", desc: "Atenci\xF3n de accidentes en la noche donde la iluminaci\xF3n dirigida al paciente es cr\xEDtica sin deslumbrar." },
    { titulo: "Rescate en Estructuras sin Luz", desc: "Edificios con corte de energ\xEDa post-sismo o incendio donde la iluminaci\xF3n port\xE1til es la \xFAnica opci\xF3n." }
  ];
  const faqs = [
    { q: "\xBFLa linterna se puede usar con visor o protecci\xF3n facial?", a: "S\xED. El <strong>montaje integrado</strong> est\xE1 dise\xF1ado para no interferir con visor ni protecci\xF3n facial. La linterna se monta <strong>encima de la l\xEDnea del visor</strong>." },
    { q: "\xBFQu\xE9 pasa si la bater\xEDa se agota durante operaci\xF3n?", a: "El <strong>modo bajo</strong> extiende autonom\xEDa significativamente (20-30 hrs). Adem\xE1s, modelos con bater\xEDas AA permiten <strong>cambio r\xE1pido en campo</strong> con bater\xEDas convencionales." },
    { q: "\xBFLa linterna es a prueba de agua?", a: "S\xED, certificaci\xF3n <strong>IP67</strong> significa resistente a inmersi\xF3n temporal (1 metro por 30 minutos). Adecuada para lluvia intensa y operaciones acu\xE1ticas superficiales." }
  ];
  const relacionados = [
    { title: "Sistema Completo Rescate", badge: "NFPA 1951", description: "Casco base con todos los accesorios.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Alta Visibilidad", badge: "Hi-Vis", description: "Shell fluorescente para visibilidad diurna.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad", buttonText: "Ver Hi-Vis", image: IMAGE },
    { title: "Capucha Nomex\xAE NFPA 1971", badge: "NFPA 1971", description: "Capucha estructural para protecci\xF3n de cabeza y cuello.", href: "/productos/capuchas-para-bomberos/nomex", buttonText: "Ver Capucha", image: "/images/directorio/equipo-proteccion-bomberos-01.avif" },
    { title: "Rescate Acu\xE1tico", badge: "Flotante", description: "Configuraci\xF3n para operaciones en agua.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico", buttonText: "Ver Acu\xE1tico", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo" },
    { label: "Shell ABS/Policarbonato", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs" },
    { label: "Sistemas de Cuerda", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda" },
    { label: "Rescate Acu\xE1tico", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico" },
    { label: "Alta Visibilidad", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }, { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Cascos Rescate", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cat\xE1logo" }, { label: "Gu\xEDa IP Ratings", href: "/blog/cascos-bombero-certificados", tag: "Blog" }];
  const directorioLinks = [{ label: "Rescate CDMX", href: "/directorio/ciudad-de-mexico" }, { label: "Directorio Nacional", href: "/directorio" }];
  const specsRapidas = [{ label: "L\xFAmenes", valor: "300-500 (alto)" }, { label: "Autonom\xEDa", valor: "6-8 hrs alto" }, { label: "Protecci\xF3n", valor: "IP67 sumergible" }, { label: "Montaje", valor: "Integrado + cable interno" }];
  const certItems = [{ code: "NFPA 1951", desc: "Technical Rescue" }, { code: "IP67", desc: "Sumergible 1m/30min" }, { code: "LED", desc: "300-500 lm CREE" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Rescate con Linterna Integrada \u2014 LED IP67 | BOMBERO.MX", "description": "Casco rescate t\xE9cnico con linterna LED integrada 300-500 l\xFAmenes, IP67 sumergible, autonom\xEDa 6-8 horas. Montaje frontal dedicado. Certificado NFPA 1951.", "keywords": ["casco rescate linterna", "casco LED bombero", "casco iluminaci\xF3n integrada", "casco rescate nocturno"], "canonical": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Rescate T\xE9cnico NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" }, { label: "Linterna Integrada" }], "heroBadge": "Linterna LED \xB7 IP67 \xB7 6-8 hrs Autonom\xEDa", "heroTitle": "Casco Rescate T\xE9cnico", "heroTitleHighlight": "Linterna Integrada", "heroSubtitle": "Sistema de iluminaci\xF3n LED integrado con 300-500 l\xFAmenes, montaje frontal dedicado y cable interno protegido. Resistente a inmersi\xF3n IP67 con autonom\xEDa de 6-8 horas. Manos libres para espacios confinados y operaciones nocturnas.", "heroSeoBlocks": [{ title: "Iluminaci\xF3n Manos Libres", text: "El <strong>montaje integrado al shell</strong> permite iluminaci\xF3n dirigida mientras las manos trabajan. \xC1ngulo ajustable <strong>0-45\xB0</strong> para enfoque en zona de trabajo." }, { title: "Autonom\xEDa Extendida", text: "Pack de bater\xEDas posterior para <strong>balance de peso</strong>. Autonom\xEDa de <strong>6-8 horas</strong> en modo alto, 20-30 horas en modo bajo. IP67 sumergible." }], "ctaBarQuote": "Cotizar Casco con Linterna", "productoCategoria": "Casco Rescate Iluminado", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1951" }, { modifier: "tpp", text: "500 lm" }, { modifier: "solas", text: "IP67" }], "productoMasVendido": false, "productoTitle": "Casco Rescate \u2014 Linterna Integrada", "productoTitleSub": "300-500 lm \xB7 IP67", "productoDesc": "Sistema LED de 300-500 l\xFAmenes con montaje frontal integrado y cable interno protegido. Pack de bater\xEDas posterior para balance. IP67 sumergible, autonom\xEDa 6-8 horas modo alto. Modos: alto, bajo, strobe.", "productoFeatures": ["LED 300-500 l\xFAmenes", "Autonom\xEDa 6-8 hrs (alto)", "IP67 sumergible", "Montaje integrado 0-45\xB0", "Cable interno protegido"], "productoAppTags": ["Espacios confinados", "SAR nocturno", "Rescate vehicular", "Sin luz"], "gallery": [{ src: IMAGE, alt: "Casco rescate con linterna" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatista con iluminaci\xF3n" }], "capasEyebrow": "Sistema de Iluminaci\xF3n", "capasTitle": "Caracter\xEDsticas de Linterna", "capasDesc": "LED de alto rendimiento con montaje integrado y bater\xEDa posterior.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Linterna", "specsDesc": "Sistema dise\xF1ado para operaciones profesionales.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios Nocturnos", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n donde se requiera <strong>iluminaci\xF3n manos libres</strong>: espacios confinados, rescate nocturno, estructuras sin energ\xEDa, operaciones subterr\xE1neas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1951 + IP67", "certsDesc": "Casco certificado <strong>NFPA 1951</strong> con linterna <strong>IP67</strong> resistente a inmersi\xF3n temporal.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Linterna Integrada", "faqDescription": "Dudas sobre iluminaci\xF3n, autonom\xEDa y resistencia.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Fichas t\xE9cnicas y certificados.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Equipo Nocturno", "relacionadosTitle": "Sistema para Baja Luz", "relacionadosDesc": "Complete con detectores, SCBA y linternas port\xE1tiles.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
