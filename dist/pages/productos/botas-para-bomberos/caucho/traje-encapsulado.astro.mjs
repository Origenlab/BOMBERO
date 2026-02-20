import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: 'Ca\xF1a Extra-Alta 18" para Sellado Total', descripcion: "Altura de ca\xF1a de 18 pulgadas (45 cm) que permite que el traje encapsulado Nivel A cubra completamente la bota y se selle herm\xE9ticamente. Dise\xF1o espec\xEDfico para uso bajo traje totalmente encapsulado.", specs: [{ label: "Altura ca\xF1a", valor: '18" (45 cm)' }, { label: "Sellado", valor: "Herm\xE9tico con traje" }, { label: "Compatible", valor: "NFPA 1991 Nivel A" }], color: "ember" },
    { num: "02", titulo: "Compatible con Atm\xF3sferas IDLH", descripcion: "Dise\xF1ada para uso en atm\xF3sferas Immediately Dangerous to Life or Health (IDLH) donde se requiere m\xE1xima protecci\xF3n. El sellado herm\xE9tico con el traje evita entrada de vapores t\xF3xicos al interior del conjunto.", specs: [{ label: "Atm\xF3sferas", valor: "IDLH compatibles" }, { label: "Vapores", valor: "Sellado herm\xE9tico" }, { label: "Protecci\xF3n", valor: "M\xE1xima Nivel A" }], color: "smoke" },
    { num: "03", titulo: "Sellado con Cinta HAZMAT", descripcion: "La ca\xF1a extra-alta permite aplicar cinta HAZMAT alrededor de la uni\xF3n bota-traje para sellado completamente herm\xE9tico. Compatible con todos los sistemas de sellado de trajes encapsulados comerciales.", specs: [{ label: "M\xE9todo sellado", valor: "Cinta HAZMAT" }, { label: "Zona sellado", valor: "Ca\xF1a superior 5 cm" }, { label: "Hermeticidad", valor: "Total verificable" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Dise\xF1o Nivel A", label: "Altura ca\xF1a", valor: '18" (45 cm) extra-alta' },
    { categoria: "Dise\xF1o Nivel A", label: "Sellado", valor: "Herm\xE9tico con traje encapsulado" },
    { categoria: "Dise\xF1o Nivel A", label: "Zona de sellado", valor: "5 cm superiores de ca\xF1a" },
    { categoria: "Compatibilidad", label: "Traje Nivel A", valor: "NFPA 1991 compatible" },
    { categoria: "Compatibilidad", label: "Atm\xF3sferas", valor: "IDLH aprobado" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "Compatible con aire suministrado" },
    { categoria: "Sellado", label: "M\xE9todo primario", valor: "Cinta HAZMAT" },
    { categoria: "Sellado", label: "M\xE9todo alternativo", valor: "El\xE1stico integrado traje" },
    { categoria: "Sellado", label: "Verificaci\xF3n", valor: "Prueba de presi\xF3n positiva" },
    { categoria: "Material", label: "Tipo", valor: "Caucho nitrilo/PVC reforzado" },
    { categoria: "Material", label: "Resistencia qu\xEDmica", valor: "150+ sustancias" },
    { categoria: "Protecci\xF3n", label: "Puntera", valor: "Acero ASTM F2413-18" },
    { categoria: "Dise\xF1o", label: "Peso (par)", valor: "2.0 kg" }
  ];
  const catClass = { "Dise\xF1o Nivel A": "construccion", "Compatibilidad": "certificacion", "Sellado": "termico", "Material": "ergonomia", "Protecci\xF3n": "certificacion", "Dise\xF1o": "ergonomia" };
  const aplicaciones = [
    { titulo: "Operaciones Nivel A \u2014 Vapores Desconocidos", desc: "Respuesta inicial a incidentes con sustancias no identificadas donde se asume el peor caso y se requiere m\xE1xima protecci\xF3n con traje totalmente encapsulado." },
    { titulo: "Emergencias con Agentes de Guerra Qu\xEDmica", desc: "Respuesta a incidentes con agentes qu\xEDmicos de guerra o sospecha de terrorismo qu\xEDmico donde el Nivel A es el est\xE1ndar m\xEDnimo de protecci\xF3n." },
    { titulo: "Entrada a Tanques y Espacios Confinados HAZMAT", desc: "Operaciones de rescate o inspecci\xF3n en tanques de almacenamiento qu\xEDmico y espacios confinados con atm\xF3sferas potencialmente IDLH." },
    { titulo: "Laboratorios de Alta Contenci\xF3n", desc: "Trabajo en laboratorios BSL-4 o equivalentes qu\xEDmicos donde se manejan sustancias extremadamente peligrosas que requieren encapsulaci\xF3n total." }
  ];
  const faqs = [
    { q: '\xBFCu\xE1l es la diferencia entre ca\xF1a 16" y 18" para traje encapsulado?', a: 'La ca\xF1a de <strong>16"</strong> es suficiente para trajes Nivel B y C donde el sellado es por solapa o el\xE1stico. Para <strong>traje encapsulado Nivel A</strong>, la ca\xF1a de <strong>18"</strong> es necesaria porque el traje debe cubrir completamente la bota y sellarse con cinta HAZMAT para hermeticidad total contra vapores.' },
    { q: "\xBFC\xF3mo se verifica el sellado bota-traje?", a: "Despu\xE9s de aplicar la <strong>cinta HAZMAT</strong> alrededor de la uni\xF3n, se realiza una <strong>prueba de presi\xF3n positiva</strong> del traje completo. Si la presi\xF3n se mantiene, el sellado es correcto. Cualquier fuga de presi\xF3n indica sellado incorrecto que debe corregirse antes de entrar a la zona caliente." },
    { q: "\xBFLa bota soporta el peso adicional del traje encapsulado?", a: "S\xED. La bota est\xE1 dise\xF1ada considerando el <strong>peso adicional del traje Nivel A</strong> (8-12 kg) m\xE1s el SCBA (10-15 kg). La suela reforzada y la construcci\xF3n robusta soportan hasta <strong>150 kg de peso total del usuario equipado</strong>." }
  ];
  const relacionados = [
    { title: "Resistente a Qu\xEDmicos", badge: "150+", description: "Resistencia qu\xEDmica est\xE1ndar.", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Descontaminaci\xF3n R\xE1pida", badge: "DECON", description: "Superficie lisa para DECON.", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida", buttonText: "Ver DECON", image: IMAGE },
    { title: "Traje HAZMAT Nivel A", badge: "Encapsulado", description: "Traje totalmente herm\xE9tico.", href: "/productos/trajes-para-bomberos", buttonText: "Ver Traje", image: IMAGE },
    { title: "Capucha Particulada PM2.5", badge: "NFPA 1971", description: "Capucha con bloqueo de part\xEDculas.", href: "/productos/capuchas-para-bomberos/particulada", buttonText: "Ver Capucha", image: "/images/directorio/capucha-bombero-nomex-01.avif" }
  ];
  const otrosModelos = [
    { label: "Resistente a Qu\xEDmicos", href: "/productos/botas-para-bomberos/caucho/resistente-quimicos" },
    { label: "Descontaminaci\xF3n R\xE1pida", href: "/productos/botas-para-bomberos/caucho/descontaminacion-rapida" },
    { label: "Resistente a Hidrocarburos", href: "/productos/botas-para-bomberos/caucho/resistente-hidrocarburos" },
    { label: "Antiest\xE1tica ESD", href: "/productos/botas-para-bomberos/caucho/antiestatica-esd" },
    { label: "Puntera Composite", href: "/productos/botas-para-bomberos/caucho/puntera-composite" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [{ label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }, { label: "Guantes Nivel A", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Bota Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Sellado Nivel A", href: "/productos", tag: "Gu\xEDa" }];
  const directorioLinks = [{ label: "Estaciones HAZMAT Nivel A", href: "/directorio" }, { label: "Respuesta Qu\xEDmica", href: "/directorio" }];
  const specsRapidas = [{ label: "Ca\xF1a", valor: '18" extra-alta' }, { label: "Sellado", valor: "Herm\xE9tico Nivel A" }, { label: "Atm\xF3sferas", valor: "IDLH compatible" }, { label: "Peso", valor: "2.0 kg" }];
  const certItems = [{ code: "NFPA 1991", desc: "Compatible Nivel A" }, { code: "IDLH", desc: "Atm\xF3sferas peligrosas" }, { code: "Herm\xE9tico", desc: "Sellado verificable" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": 'Bota Caucho HAZMAT Traje Encapsulado Nivel A \u2014 Ca\xF1a 18" | BOMBERO.MX', "description": "Bota de caucho HAZMAT para traje encapsulado Nivel A. Ca\xF1a extra-alta 18 pulgadas para sellado herm\xE9tico. Compatible NFPA 1991 y atm\xF3sferas IDLH. M\xE9xico.", "keywords": ["bota traje encapsulado", "bota Nivel A HAZMAT", "bota ca\xF1a 18 pulgadas", "bota NFPA 1991", "bota IDLH M\xE9xico"], "canonical": "/productos/botas-para-bomberos/caucho/traje-encapsulado", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" }, { label: "Bota de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho" }, { label: "Traje Encapsulado Nivel A" }], "heroBadge": 'Bota HAZMAT \xB7 Nivel A \xB7 Ca\xF1a 18" \xB7 IDLH', "heroTitle": "Bota Caucho HAZMAT", "heroTitleHighlight": "Traje Encapsulado Nivel A", "heroSubtitle": "Ca\xF1a extra-alta de 18 pulgadas dise\xF1ada espec\xEDficamente para uso bajo traje encapsulado totalmente herm\xE9tico NFPA 1991. Sellado con cinta HAZMAT para entrada a atm\xF3sferas IDLH con vapores t\xF3xicos desconocidos.", "heroSeoBlocks": [{ title: 'Ca\xF1a Extra-Alta 18" para Sellado Total', text: "Altura de <strong>18 pulgadas (45 cm)</strong> que permite al traje encapsulado cubrir completamente la bota. Zona de sellado de <strong>5 cm</strong> para aplicar cinta HAZMAT y lograr <strong>hermeticidad total</strong>." }, { title: "Compatible con Atm\xF3sferas IDLH", text: "Dise\xF1ada para operaciones en atm\xF3sferas <strong>Immediately Dangerous to Life or Health</strong>. El sellado herm\xE9tico evita la entrada de <strong>vapores t\xF3xicos</strong> al interior del conjunto traje-bota." }], "ctaBarQuote": "Cotizar Bota Nivel A", "productoCategoria": "Bota HAZMAT Nivel A", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1991" }, { modifier: "tpp", text: 'Ca\xF1a 18"' }, { modifier: "solas", text: "IDLH" }], "productoMasVendido": false, "productoTitle": "Bota Caucho HAZMAT \u2014 Traje Encapsulado Nivel A", "productoTitleSub": 'Ca\xF1a 18" \xB7 Sellado Herm\xE9tico \xB7 IDLH Compatible', "productoDesc": "Bota de caucho con ca\xF1a extra-alta de 18 pulgadas para uso bajo traje encapsulado NFPA 1991 Nivel A. Dise\xF1o para sellado herm\xE9tico con cinta HAZMAT. Compatible con atm\xF3sferas IDLH y operaciones con vapores t\xF3xicos desconocidos.", "productoFeatures": ['Ca\xF1a extra-alta 18" (45 cm)', "Compatible NFPA 1991 Nivel A", "Sellado herm\xE9tico con cinta HAZMAT", "Aprobada para atm\xF3sferas IDLH", "Resistencia a vapores t\xF3xicos"], "productoAppTags": ["Nivel A", "Vapores desconocidos", "IDLH", "Laboratorios"], "gallery": [{ src: IMAGE, alt: "Bota HAZMAT traje encapsulado Nivel A" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Operaci\xF3n Nivel A" }], "capasEyebrow": "Tecnolog\xEDa Nivel A", "capasTitle": "Sistema de Sellado Herm\xE9tico", "capasDesc": "Ca\xF1a extra-alta, sellado con cinta y compatibilidad IDLH.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones de dise\xF1o, compatibilidad y sellado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Operaciones Nivel A", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Operaciones HAZMAT Nivel A</strong> con traje totalmente encapsulado: vapores desconocidos, agentes de guerra qu\xEDmica, espacios confinados HAZMAT y laboratorios de alta contenci\xF3n.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1991 Compatible \u2014 IDLH Aprobado", "certsDesc": "Compatible con trajes <strong>NFPA 1991</strong> Nivel A. Aprobada para atm\xF3sferas <strong>IDLH</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/caucho", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Traje Encapsulado", "faqDescription": "Dudas sobre uso con Nivel A y sellado.", "faqDocTitle": "Gu\xEDa de Sellado", "faqDocDesc": "Protocolo de sellado bota-traje Nivel A.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Nivel A", "relacionadosTitle": "EPP Nivel A Completo", "relacionadosDesc": "Todo el equipo para operaciones HAZMAT Nivel A.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/traje-encapsulado/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/caucho/traje-encapsulado/index.astro";
const $$url = "/productos/botas-para-bomberos/caucho/traje-encapsulado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
