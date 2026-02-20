import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/estacion-bomberos-petrolera-01.avif";
  const capas = [
    { num: "01", titulo: "Shell con Resistencia T\xE9rmica Certificada", descripcion: "El shell de termopl\xE1stico especial resiste temperaturas hasta 150\xB0C durante exposici\xF3n breve (3-5 minutos). Esta resistencia permite al brigadista acercarse a conatos de incendio, cerrar v\xE1lvulas calientes y realizar control inicial sin que el casco se deforme.", specs: [{ label: "Temperatura m\xE1x", valor: "150\xB0C" }, { label: "Tiempo exposici\xF3n", valor: "3-5 minutos" }, { label: "Deformaci\xF3n", valor: "Ninguna en rango" }], color: "ember" },
    { num: "02", titulo: "Protecci\xF3n contra Salpicaduras de Metal", descripcion: "El material del shell no se adhiere ni penetra por salpicaduras de metal fundido de soldadura, esmerilado o procesos industriales. Las part\xEDculas calientes rebotan o se deslizan sin da\xF1ar la superficie.", specs: [{ label: "Salpicaduras", valor: "Resistente" }, { label: "Part\xEDculas calientes", valor: "Rebote sin da\xF1o" }, { label: "Soldadura", valor: "Compatible chispa" }], color: "smoke" },
    { num: "03", titulo: "Flashover Industrial Limitado", descripcion: "Certificado para resistir flashover industrial limitado (llamarada breve de combusti\xF3n de gases). Esta protecci\xF3n permite evacuar \xE1reas donde ocurre ignici\xF3n s\xFAbita de vapores combustibles sin que el casco falle.", specs: [{ label: "Flashover", valor: "Limitado industrial" }, { label: "Exposici\xF3n llama", valor: "Breve (segundos)" }, { label: "Uso despu\xE9s", valor: "Inspecci\xF3n requerida" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Resistencia T\xE9rmica", label: "Temperatura m\xE1xima", valor: "150\xB0C" },
    { categoria: "Resistencia T\xE9rmica", label: "Tiempo exposici\xF3n", valor: "3-5 minutos" },
    { categoria: "Resistencia T\xE9rmica", label: "Calor radiante", valor: "Protecci\xF3n moderada" },
    { categoria: "Resistencia T\xE9rmica", label: "Deformaci\xF3n", valor: "Ninguna en rango" },
    { categoria: "Salpicaduras", label: "Metal fundido", valor: "Resistente (soldadura)" },
    { categoria: "Salpicaduras", label: "Part\xEDculas calientes", valor: "Rebote sin da\xF1o" },
    { categoria: "Salpicaduras", label: "Chispas", valor: "Resistente" },
    { categoria: "Flashover", label: "Tipo", valor: "Industrial limitado" },
    { categoria: "Flashover", label: "Duraci\xF3n", valor: "Segundos" },
    { categoria: "Flashover", label: "Post-exposici\xF3n", valor: "Inspecci\xF3n requerida" },
    { categoria: "Peso", label: "Shell", valor: "~400-500 g" },
    { categoria: "Certificaci\xF3n", label: "NOM-115-STPS", valor: "T\xE9rmica industrial" },
    { categoria: "Certificaci\xF3n", label: "ANSI Z89.1", valor: "Tipo I Clase E" }
  ];
  const catClass = { "Resistencia T\xE9rmica": "construccion", "Salpicaduras": "construccion", "Flashover": "certificacion", "Peso": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Control de Conatos de Incendio", desc: "Primera respuesta a incendios peque\xF1os donde el brigadista se acerca para usar extintor o cerrar v\xE1lvulas. La protecci\xF3n t\xE9rmica permite estar cerca del fuego brevemente." },
    { titulo: "Cierre de V\xE1lvulas Calientes", desc: "Operaciones donde se deben cerrar v\xE1lvulas en l\xEDneas que transportan fluidos calientes o est\xE1n expuestas a calor radiante." },
    { titulo: "Evacuaci\xF3n en Emergencia T\xE9rmica", desc: "Evacuaci\xF3n de \xE1reas con riesgo de flashover industrial. El casco protege durante la salida r\xE1pida." },
    { titulo: "Operaciones cerca de Hornos y Calderas", desc: "Trabajo de brigada cerca de hornos, calderas y procesos con calor radiante donde el casco de seguridad normal no es suficiente." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l es la diferencia con un casco de bombero NFPA 1971?", a: "El casco de brigada resiste <strong>150\xB0C por 3-5 minutos</strong> (conatos, calor radiante). El casco <strong>NFPA 1971</strong> resiste <strong>260\xB0C+ por tiempo prolongado</strong> (combate de incendios con llama directa). El de brigada es para control inicial; el NFPA 1971 es para bomberos profesionales." },
    { q: "\xBFEl casco se puede usar despu\xE9s de exposici\xF3n a flashover?", a: "Despu\xE9s de cualquier exposici\xF3n a <strong>llama directa o flashover</strong>, el casco debe ser <strong>inspeccionado por personal calificado</strong>. Pueden existir da\xF1os no visibles que comprometan la protecci\xF3n. Cuando hay duda, <strong>retirar del servicio</strong>." },
    { q: "\xBFEl casco protege de salpicaduras de acero fundido en fundici\xF3n?", a: "El casco resiste salpicaduras de <strong>soldadura y esmerilado</strong>. Para fundici\xF3n de metales a alta temperatura (acero, hierro fundido a 1500\xB0C+), se requiere <strong>casco de aproximaci\xF3n o proximidad</strong> con reflectividad t\xE9rmica especializada." }
  ];
  const relacionados = [
    { title: "Sistema Completo Brigada", badge: "NOM-115", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Casco Estructural NFPA 1971", badge: "Profesional", description: "Para combate de incendios.", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", buttonText: "Ver NFPA 1971", image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif" },
    { title: "Traje de Aproximaci\xF3n", badge: "Aluminizado", description: "Para alta radiaci\xF3n t\xE9rmica.", href: "/productos/trajes-para-bomberos/traje-aproximacion", buttonText: "Ver Traje", image: IMAGE },
    { title: "Visor Facial", badge: "PC", description: "Protecci\xF3n ocular adicional.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial", buttonText: "Ver Visor", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo" },
    { label: "Visor Facial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial" },
    { label: "Identificaci\xF3n por Color", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba" },
    { label: "Certificaciones", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Guantes T\xE9rmicos", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }, { label: "Capucha Nomex", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Traje Aproximaci\xF3n", href: "/productos/trajes-para-bomberos/traje-aproximacion", tag: "Cuerpo" }];
  const articulos = [{ label: "Cat\xE1logo Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cat\xE1logo" }, { label: "Protecci\xF3n T\xE9rmica Gu\xEDa", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Blog" }];
  const directorioLinks = [{ label: "Petroqu\xEDmica", href: "/directorio" }, { label: "Fundiciones", href: "/directorio" }];
  const specsRapidas = [{ label: "Temperatura", valor: "150\xB0C / 3-5 min" }, { label: "Salpicaduras", valor: "Metal fundido" }, { label: "Flashover", valor: "Industrial limitado" }, { label: "Peso", valor: "~400-500 g" }];
  const certItems = [{ code: "NOM-115-STPS", desc: "T\xE9rmica industrial" }, { code: "150\xB0C", desc: "3-5 min exposici\xF3n" }, { code: "Flashover", desc: "Limitado industrial" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Brigada Industrial Protecci\xF3n T\xE9rmica 150\xB0C | BOMBERO.MX", "description": "Casco brigada industrial con protecci\xF3n t\xE9rmica hasta 150\xB0C para conatos y calor radiante. Resistente a salpicaduras de metal. NOM-115-STPS M\xE9xico.", "keywords": ["casco brigada t\xE9rmica", "casco industrial 150 grados", "casco conato incendio", "casco protecci\xF3n calor industrial"], "canonical": "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial" }, { label: "Protecci\xF3n T\xE9rmica" }], "heroBadge": "Protecci\xF3n T\xE9rmica \xB7 150\xB0C \xB7 Flashover Industrial", "heroTitle": "Casco Brigada Industrial", "heroTitleHighlight": "Protecci\xF3n T\xE9rmica", "heroSubtitle": "Shell con resistencia t\xE9rmica certificada hasta 150\xB0C para exposici\xF3n breve. Protecci\xF3n contra salpicaduras de metal fundido y flashover industrial limitado. Ideal para control de conatos, cierre de v\xE1lvulas calientes y evacuaci\xF3n en emergencias t\xE9rmicas.", "heroSeoBlocks": [{ title: "Resistencia T\xE9rmica Certificada", text: "Shell que resiste <strong>150\xB0C durante 3-5 minutos</strong>. Permite acercarse a conatos de incendio y calor radiante sin deformaci\xF3n. <strong>No sustituye</strong> al casco NFPA 1971 para combate profesional." }, { title: "Salpicaduras y Flashover", text: "Resistente a <strong>salpicaduras de soldadura</strong> y part\xEDculas calientes. Certificado para <strong>flashover industrial limitado</strong> (llamarada breve)." }], "ctaBarQuote": "Cotizar Protecci\xF3n T\xE9rmica", "productoCategoria": "Casco Brigada T\xE9rmico", "productoBadges": [{ modifier: "nfpa", text: "150\xB0C" }, { modifier: "tpp", text: "Flashover" }, { modifier: "solas", text: "Metal" }], "productoMasVendido": false, "productoTitle": "Casco Brigada Industrial \u2014 Protecci\xF3n T\xE9rmica", "productoTitleSub": "150\xB0C \xB7 3-5 min", "productoDesc": "Shell termopl\xE1stico con resistencia t\xE9rmica hasta 150\xB0C durante exposici\xF3n breve. Protecci\xF3n contra salpicaduras de metal fundido (soldadura, esmerilado) y flashover industrial limitado. Inspecci\xF3n post-exposici\xF3n requerida.", "productoFeatures": ["Resistencia 150\xB0C / 3-5 min", "Salpicaduras metal fundido", "Flashover industrial limitado", "No se deforma en rango", "Peso optimizado"], "productoAppTags": ["Conatos", "V\xE1lvulas calientes", "Evacuaci\xF3n", "Hornos"], "gallery": [{ src: IMAGE, alt: "Casco brigada protecci\xF3n t\xE9rmica" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada t\xE9rmica" }], "capasEyebrow": "Protecci\xF3n T\xE9rmica", "capasTitle": "Resistencia a Calor Industrial", "capasDesc": "Shell dise\xF1ado para exposici\xF3n a calor radiante y conatos de incendio.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones de Protecci\xF3n T\xE9rmica", "specsDesc": "Rangos de temperatura y tipos de protecci\xF3n.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios T\xE9rmicos", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Situaciones con <strong>exposici\xF3n a calor moderado</strong>: conatos de incendio, v\xE1lvulas calientes, evacuaci\xF3n en emergencias t\xE9rmicas, trabajo cerca de hornos y calderas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NOM-115-STPS T\xE9rmica Industrial", "certsDesc": "Certificado para <strong>protecci\xF3n t\xE9rmica industrial</strong> hasta 150\xB0C con documentaci\xF3n para auditor\xEDas STPS.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-brigada-industrial", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Protecci\xF3n T\xE9rmica", "faqDescription": "Dudas sobre resistencia y uso post-exposici\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Fichas t\xE9cnicas y certificados.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Protecci\xF3n T\xE9rmica", "relacionadosTitle": "Sistema para Calor", "relacionadosDesc": "Complete con guantes, capucha y traje t\xE9rmico.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
