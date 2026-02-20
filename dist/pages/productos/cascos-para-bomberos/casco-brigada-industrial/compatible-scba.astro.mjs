import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/estacion-bomberos-petrolera-01.avif";
  const capas = [
    { num: "01", titulo: "Suspensi\xF3n Sobre M\xE1scara de Cara Completa", descripcion: "El sistema de suspensi\xF3n est\xE1 dise\xF1ado para usarse SOBRE la m\xE1scara de cara completa del SCBA o APR. El casco se asienta sobre la m\xE1scara sin interferir con el sellado facial. El peso se distribuye correctamente incluso con la m\xE1scara puesta.", specs: [{ label: "Dise\xF1o", valor: "Sobre m\xE1scara" }, { label: "Sellado", valor: "Sin interferencia" }, { label: "Distribuci\xF3n peso", valor: "Optimizada con SCBA" }], color: "ember" },
    { num: "02", titulo: "Compatibilidad con SCBA Industrial", descripcion: "Compatible con SCBA industriales de evacuaci\xF3n (escape de 5-15 min) y SCBA de mayor duraci\xF3n (30-45 min). El dise\xF1o acomoda las diferentes formas de m\xE1scaras de las principales marcas industriales (Dr\xE4ger, MSA, Scott, Honeywell).", specs: [{ label: "SCBA evacuaci\xF3n", valor: "5-15 min compatible" }, { label: "SCBA prolongado", valor: "30-45 min compatible" }, { label: "Marcas", valor: "Dr\xE4ger, MSA, Scott" }], color: "smoke" },
    { num: "03", titulo: "Ajuste con Guantes Industriales", descripcion: "Todos los ajustes (suspensi\xF3n, barbiquejo) se operan con guantes industriales gruesos. Las perillas son grandes, las hebillas son de liberaci\xF3n por presi\xF3n. El ajuste completo toma menos de 15 segundos con guantes.", specs: [{ label: "Guantes", valor: "Compatible gruesos" }, { label: "Tiempo ajuste", valor: "< 15 segundos" }, { label: "Hebillas", valor: "Liberaci\xF3n presi\xF3n" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Compatibilidad SCBA", label: "Evacuaci\xF3n", valor: "5-15 min" },
    { categoria: "Compatibilidad SCBA", label: "Prolongado", valor: "30-45 min" },
    { categoria: "Compatibilidad SCBA", label: "Dr\xE4ger", valor: "Panorama, X-plore" },
    { categoria: "Compatibilidad SCBA", label: "MSA", valor: "G1, Ultra Elite" },
    { categoria: "Compatibilidad SCBA", label: "Scott", valor: "AV-3000, AV-2000" },
    { categoria: "Compatibilidad SCBA", label: "Honeywell", valor: "Sperian PANO" },
    { categoria: "Suspensi\xF3n", label: "Dise\xF1o", valor: "Sobre m\xE1scara" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "Ratchet grande" },
    { categoria: "Suspensi\xF3n", label: "Puntos", valor: "4-6 puntos" },
    { categoria: "Operaci\xF3n", label: "Guantes", valor: "Compatible gruesos" },
    { categoria: "Operaci\xF3n", label: "Tiempo ajuste", valor: "< 15 segundos" },
    { categoria: "Barbiquejo", label: "Tipo", valor: "Liberaci\xF3n r\xE1pida" },
    { categoria: "Certificaci\xF3n", label: "NOM-115-STPS", valor: "Compatible SCBA" }
  ];
  const catClass = { "Compatibilidad SCBA": "construccion", "Suspensi\xF3n": "ergonomia", "Operaci\xF3n": "ergonomia", "Barbiquejo": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Brigadas con SCBA de Evacuaci\xF3n", desc: "Plantas que tienen SCBA de escape de 5-15 minutos para evacuaci\xF3n de emergencia. El casco es compatible con estos equipos durante la evacuaci\xF3n." },
    { titulo: "Brigadas con SCBA Completo", desc: "Brigadas industriales que cuentan con SCBA de 30-45 minutos para operaciones prolongadas en atm\xF3sferas peligrosas." },
    { titulo: "Rescate Industrial con SCBA", desc: "Operaciones de rescate de personal en atm\xF3sferas contaminadas donde se requiere SCBA y protecci\xF3n de cabeza simult\xE1neamente." },
    { titulo: "Entrenamiento con SCBA", desc: "Capacitaci\xF3n de brigadas en uso de SCBA donde el casco complementa el entrenamiento de equipo de protecci\xF3n respiratoria." }
  ];
  const faqs = [
    { q: "\xBFEl casco funciona con mi SCBA de evacuaci\xF3n actual?", a: "S\xED. El casco es <strong>compatible con los principales SCBA industriales</strong> de evacuaci\xF3n (Dr\xE4ger, MSA, Scott, Honeywell). La suspensi\xF3n acomoda las diferentes formas de m\xE1scaras. Recomendamos <strong>probar la combinaci\xF3n</strong> antes de uso en emergencia real." },
    { q: "\xBFEl casco afecta el sellado de la m\xE1scara SCBA?", a: "<strong>No</strong>. El casco se asienta <strong>sobre</strong> la m\xE1scara, no interfiere con el sello facial. Siempre verificar el sellado de la m\xE1scara con el casco puesto antes de entrar a atm\xF3sfera peligrosa (test de presi\xF3n positiva/negativa)." },
    { q: "\xBFPuedo usar el casco con APR (media cara)?", a: "El casco est\xE1 optimizado para <strong>m\xE1scaras de cara completa</strong>. Con APR de media cara funciona, pero el visor del casco puede interferir con la l\xEDnea de visi\xF3n. Para APR de media cara, considere casco sin visor integrado." }
  ];
  const relacionados = [
    { title: "Sistema Completo Brigada", badge: "NOM-115", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Capucha Nomex\xAE NFPA 1971", badge: "NFPA 1971", description: "Capucha para protecci\xF3n de cabeza y cuello en brigadas.", href: "/productos/capuchas-para-bomberos/nomex", buttonText: "Ver Capucha", image: "/images/directorio/equipo-proteccion-bomberos-01.avif" },
    { title: "Casco HAZMAT", badge: "NFPA 1994", description: "Para operaciones qu\xEDmicas.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", buttonText: "Ver HAZMAT", image: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif" },
    { title: "Certificaciones", badge: "NOM/ANSI", description: "Documentaci\xF3n completa.", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones", buttonText: "Ver Certs", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/sistema-completo" },
    { label: "Protecci\xF3n T\xE9rmica", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/proteccion-termica" },
    { label: "Visor Facial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/visor-facial" },
    { label: "Identificaci\xF3n por Color", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/identificacion-color" },
    { label: "Certificaciones", href: "/productos/cascos-para-bomberos/casco-brigada-industrial/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }, { label: "Guantes de Emergencia", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial", tag: "Cat\xE1logo" }, { label: "Gu\xEDa SCBA", href: "/blog/equipo-scba-autonomo-bomberos", tag: "Blog" }];
  const directorioLinks = [{ label: "Brigadas con SCBA", href: "/directorio" }, { label: "Rescate Industrial", href: "/directorio" }];
  const specsRapidas = [{ label: "SCBA", valor: "5-45 min compatible" }, { label: "Marcas", valor: "Dr\xE4ger, MSA, Scott" }, { label: "Ajuste", valor: "< 15 seg con guantes" }, { label: "Sellado", valor: "Sin interferencia" }];
  const certItems = [{ code: "NOM-115-STPS", desc: "Compatible SCBA" }, { code: "Multi-marca", desc: "Principales fabricantes" }, { code: "Ergonom\xEDa", desc: "Guantes industriales" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Brigada Industrial Compatible con SCBA | BOMBERO.MX", "description": "Casco brigada industrial compatible con SCBA industrial y de evacuaci\xF3n. Suspensi\xF3n sobre m\xE1scara, ajuste con guantes. Dr\xE4ger, MSA, Scott. NOM-115-STPS M\xE9xico.", "keywords": ["casco brigada SCBA", "casco industrial respirador", "casco compatible m\xE1scara", "casco brigada evacuaci\xF3n"], "canonical": "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Brigada Industrial", href: "/productos/cascos-para-bomberos/casco-brigada-industrial" }, { label: "Compatible SCBA" }], "heroBadge": "Compatible SCBA \xB7 Evacuaci\xF3n \xB7 Dr\xE4ger, MSA, Scott", "heroTitle": "Casco Brigada Industrial", "heroTitleHighlight": "Compatible con SCBA", "heroSubtitle": "Dise\xF1ado para uso con equipos de respiraci\xF3n aut\xF3noma (SCBA) industriales y de evacuaci\xF3n. Suspensi\xF3n sobre m\xE1scara de cara completa sin interferir con el sellado. Compatible con Dr\xE4ger, MSA, Scott, Honeywell. Ajuste con guantes industriales.", "heroSeoBlocks": [{ title: "Suspensi\xF3n Sobre M\xE1scara", text: "El casco se asienta <strong>sobre la m\xE1scara SCBA</strong> sin interferir con el sellado facial. Compatible con <strong>SCBA de evacuaci\xF3n (5-15 min)</strong> y prolongado (30-45 min)." }, { title: "Multi-Marca Compatible", text: "Funciona con las <strong>principales marcas industriales</strong>: Dr\xE4ger Panorama, MSA G1/Ultra Elite, Scott AV-3000, Honeywell Sperian PANO." }], "ctaBarQuote": "Cotizar Compatible SCBA", "productoCategoria": "Casco Brigada SCBA", "productoBadges": [{ modifier: "nfpa", text: "NOM-115" }, { modifier: "tpp", text: "SCBA Ready" }, { modifier: "solas", text: "Multi-marca" }], "productoMasVendido": false, "productoTitle": "Casco Brigada Industrial \u2014 Compatible SCBA", "productoTitleSub": "Dr\xE4ger \xB7 MSA \xB7 Scott", "productoDesc": "Suspensi\xF3n dise\xF1ada para uso sobre m\xE1scara de cara completa SCBA. Compatible con equipos de evacuaci\xF3n (5-15 min) y prolongados (30-45 min). Ajuste con guantes industriales en menos de 15 segundos. Sin interferencia con sellado facial.", "productoFeatures": ["Compatible SCBA 5-45 min", "Dr\xE4ger, MSA, Scott, Honeywell", "Suspensi\xF3n sobre m\xE1scara", "Ajuste < 15 seg con guantes", "Sin interferencia sellado"], "productoAppTags": ["SCBA evacuaci\xF3n", "SCBA prolongado", "Rescate industrial", "Entrenamiento"], "gallery": [{ src: IMAGE, alt: "Casco brigada compatible SCBA" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada con SCBA" }], "capasEyebrow": "Compatibilidad SCBA", "capasTitle": "Sistema Sobre M\xE1scara", "capasDesc": "Dise\xF1ado para trabajar con equipos de respiraci\xF3n aut\xF3noma industriales.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Compatibilidad con Equipos", "specsDesc": "Compatible con principales marcas de SCBA industrial.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios SCBA", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Brigadas industriales con SCBA</strong>: evacuaci\xF3n de emergencia, operaciones en atm\xF3sferas peligrosas, rescate industrial, entrenamiento con equipo respiratorio.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NOM-115-STPS Compatible SCBA", "certsDesc": "Certificado <strong>NOM-115-STPS</strong> con compatibilidad verificada con SCBA de principales fabricantes.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-brigada-industrial", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Compatible SCBA", "faqDescription": "Dudas sobre uso con equipos de respiraci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Lista de compatibilidad por marca.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Respiratorio", "relacionadosTitle": "Equipo SCBA Completo", "relacionadosDesc": "Complete con SCBA, traje y guantes de emergencia.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-brigada-industrial/compatible-scba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
