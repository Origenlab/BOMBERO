import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-acuatico-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Dise\xF1o Perfil Bajo para Sistemas de Cuerda", descripcion: "El perfil bajo tipo alpinismo evita interferencia con poleas, ascendedores (Petzl Ascension, CMI), descensores (ID, Rig) y puntos de anclaje. Las cuerdas pasan libremente sin enredarse en el casco.", specs: [{ label: "Perfil", valor: "Bajo \u2014 sin alas" }, { label: "Interferencia", valor: "Ninguna con sistemas cuerda" }, { label: "Altura shell", valor: "< 15 cm desde cabeza" }], color: "ember" },
    { num: "02", titulo: "Barbiquejo de 4 Puntos para Trabajo Vertical", descripcion: "Obligatorio para EN 12492. Los 4 puntos de anclaje al shell distribuyen la carga si el casco recibe impacto durante ca\xEDda o maniobra. La hebilla de liberaci\xF3n de emergencia permite soltar el casco si queda atrapado.", specs: [{ label: "Anclajes", valor: "4 puntos al shell" }, { label: "Liberaci\xF3n", valor: "Emergencia una mano" }, { label: "Resistencia", valor: ">50 kg antes liberaci\xF3n" }], color: "smoke" },
    { num: "03", titulo: "Puntos de Anclaje para Accesorios", descripcion: "Clips frontales para linterna, ranuras laterales para protecci\xF3n auditiva, puntos de montaje para c\xE1mara de acci\xF3n. Todo compatible con operaci\xF3n vertical sin comprometer la seguridad.", specs: [{ label: "Linterna", valor: "Clips frontales universales" }, { label: "Audio", valor: "Ranuras laterales" }, { label: "C\xE1mara", valor: "Montaje opcional" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Perfil", label: "Tipo", valor: "Bajo \u2014 alpinismo" },
    { categoria: "Perfil", label: "Altura", valor: "< 15 cm desde cabeza" },
    { categoria: "Perfil", label: "Interferencia cuerdas", valor: "Ninguna" },
    { categoria: "Barbiquejo", label: "Puntos", valor: "4 anclajes al shell" },
    { categoria: "Barbiquejo", label: "Liberaci\xF3n", valor: "Emergencia con una mano" },
    { categoria: "Barbiquejo", label: "Resistencia", valor: ">50 kg antes liberaci\xF3n auto" },
    { categoria: "Accesorios", label: "Linterna", valor: "Clips frontales universales" },
    { categoria: "Accesorios", label: "Protecci\xF3n auditiva", valor: "Ranuras laterales" },
    { categoria: "Accesorios", label: "C\xE1mara", valor: "Montaje superior opcional" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1951", valor: "Technical Rescue" },
    { categoria: "Certificaci\xF3n", label: "EN 12492", valor: "Cascos alpinismo" }
  ];
  const catClass = { "Perfil": "construccion", "Barbiquejo": "ergonomia", "Accesorios": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Rescate Vertical en Estructuras", desc: "Torres, antenas, puentes, edificios en construcci\xF3n. El perfil bajo permite trabajo en andamios y sistemas de izaje." },
    { titulo: "Rappel y Ascenso en Cuerda", desc: "Operaciones de descenso y ascenso con sistemas mec\xE1nicos. El casco no interfiere con movimiento de cabeza ni con cuerdas." },
    { titulo: "Tirolesa y Sistemas de Evacuaci\xF3n", desc: "Evacuaci\xF3n horizontal por tirolesa donde el casco puede rozar con la l\xEDnea. El perfil bajo minimiza contacto." },
    { titulo: "Rescate en Pozos y Simas", desc: "Operaciones espeleol\xF3gicas de rescate donde el espacio vertical es confinado. El perfil bajo es esencial." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 el barbiquejo de 4 puntos es obligatorio para trabajo vertical?", a: "El barbiquejo de <strong>2 puntos</strong> puede soltarse con movimientos bruscos de cabeza o en ca\xEDda. El de <strong>4 puntos</strong> distribuye la carga y mantiene el casco firmemente en posici\xF3n durante maniobras verticales y en caso de impacto." },
    { q: "\xBFEl casco interfiere con descensores tipo ID?", a: "No. El <strong>perfil bajo</strong> (< 15 cm de altura) evita interferencia. Los descensores tipo Petzl ID, CMC Rescue Rig, o ISC D4 operan normalmente con este tipo de casco." },
    { q: "\xBFPuedo usar este casco para escalada deportiva?", a: "T\xE9cnicamente cumple EN 12492, pero est\xE1 <strong>dise\xF1ado para rescate</strong> con peso y durabilidad optimizados para uso profesional. Para escalada deportiva existen cascos m\xE1s ligeros espec\xEDficos." }
  ];
  const relacionados = [
    { title: "Sistema Completo Rescate", badge: "NFPA 1951", description: "Casco con todos los accesorios incluidos.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Guantes de Rescate", badge: "NFPA 1951", description: "Guantes para rescate t\xE9cnico y vertical.", href: "/productos/guantes-para-bomberos/rescate", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" },
    { title: "Botas Estructurales", badge: "NFPA 1971", description: "Botas certificadas para operaciones de rescate.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: "/images/directorio/botas-bombero-proteccion-01.avif" },
    { title: "Gafas Goggle Selladas", badge: "ANSI Z87", description: "Goggle sellado para protecci\xF3n ocular en rescate.", href: "/productos/gafas-para-bomberos/goggle", buttonText: "Ver Gafas", image: "/images/directorio/equipo-bomberos-completo-01.avif" }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo" },
    { label: "Shell ABS/Policarbonato", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs" },
    { label: "Rescate Acu\xE1tico", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico" },
    { label: "Alta Visibilidad", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad" },
    { label: "Linterna Integrada", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Guantes de Rappel", href: "/productos/guantes-para-bomberos/rescate", tag: "Manos" }, { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Cascos Rescate", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cat\xE1logo" }, { label: "EN 12492 Explicada", href: "/blog/cascos-bombero-certificados", tag: "Blog" }];
  const directorioLinks = [{ label: "Rescate CDMX", href: "/directorio/ciudad-de-mexico" }, { label: "Directorio Nacional", href: "/directorio" }];
  const specsRapidas = [{ label: "Perfil", valor: "Bajo alpinismo" }, { label: "Barbiquejo", valor: "4 puntos + liberaci\xF3n" }, { label: "EN 12492", valor: "S\xED \u2014 certificado" }, { label: "Accesorios", valor: "Linterna, audio, c\xE1mara" }];
  const certItems = [{ code: "NFPA 1951", desc: "Technical Rescue" }, { code: "EN 12492", desc: "Cascos alpinismo" }, { code: "4 puntos", desc: "Barbiquejo obligatorio vertical" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Rescate \u2014 Sistemas de Cuerda EN 12492 | BOMBERO.MX", "description": "Casco rescate t\xE9cnico optimizado para sistemas de cuerda. Perfil bajo, barbiquejo 4 puntos, compatible con poleas y descensores. Certificado EN 12492 y NFPA 1951.", "keywords": ["casco rescate vertical", "casco sistemas cuerda", "casco EN 12492", "casco rappel bombero"], "canonical": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Rescate T\xE9cnico NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" }, { label: "Sistemas de Cuerda" }], "heroBadge": "Rescate Vertical \xB7 EN 12492 \xB7 4 Puntos", "heroTitle": "Casco Rescate T\xE9cnico", "heroTitleHighlight": "Sistemas de Cuerda", "heroSubtitle": "Dise\xF1o perfil bajo optimizado para operaciones con sistemas de cuerda. No interfiere con poleas, ascendedores ni descensores. Barbiquejo de 4 puntos obligatorio para trabajo vertical. Certificado EN 12492 + NFPA 1951.", "heroSeoBlocks": [{ title: "Perfil Bajo para Cuerdas", text: "El <strong>perfil bajo tipo alpinismo</strong> evita interferencia con sistemas de cuerda. Las cuerdas pasan libremente sin enredarse." }, { title: "Barbiquejo 4 Puntos", text: "Obligatorio para <strong>EN 12492</strong>. Mantiene el casco en posici\xF3n durante ca\xEDdas y maniobras verticales con <strong>liberaci\xF3n de emergencia</strong>." }], "ctaBarQuote": "Cotizar Casco Sistemas Cuerda", "productoCategoria": "Casco Rescate Vertical", "productoBadges": [{ modifier: "nfpa", text: "EN 12492" }, { modifier: "tpp", text: "4 Puntos" }], "productoMasVendido": false, "productoTitle": "Casco Rescate \u2014 Sistemas de Cuerda", "productoTitleSub": "EN 12492 + NFPA 1951", "productoDesc": "Perfil bajo que no interfiere con sistemas de cuerda. Barbiquejo de 4 puntos con liberaci\xF3n de emergencia. Clips para linterna, ranuras para protecci\xF3n auditiva. Certificado EN 12492 y NFPA 1951.", "productoFeatures": ["Perfil bajo < 15 cm", "No interfiere con cuerdas", "Barbiquejo 4 puntos + liberaci\xF3n", "Clips linterna frontales", "Certificado EN 12492"], "productoAppTags": ["Rescate vertical", "Rappel", "Tirolesa", "Espeleolog\xEDa"], "gallery": [{ src: IMAGE, alt: "Casco rescate sistemas cuerda" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatista vertical" }], "capasEyebrow": "Dise\xF1o para Cuerdas", "capasTitle": "Caracter\xEDsticas para Rescate Vertical", "capasDesc": "Perfil bajo, barbiquejo 4 puntos y puntos de anclaje para accesorios.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Sistemas de Cuerda", "specsDesc": "Dise\xF1o certificado para operaciones verticales.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Aplicaciones Verticales", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n de rescate que involucre <strong>sistemas de cuerda</strong>: rescate en altura, rappel, ascenso, tirolesa, espeleolog\xEDa.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "EN 12492 para Trabajo Vertical", "certsDesc": "La norma <strong>EN 12492</strong> especifica requisitos para cascos de alpinismo y trabajo en altura, incluyendo barbiquejo de 4 puntos obligatorio.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Sistemas de Cuerda", "faqDescription": "Dudas sobre compatibilidad con sistemas de rescate vertical.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados EN 12492 y NFPA 1951.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Equipo Vertical", "relacionadosTitle": "Sistema de Rescate Vertical", "relacionadosDesc": "Complete el sistema con arn\xE9s, cuerdas y herrajes certificados.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
