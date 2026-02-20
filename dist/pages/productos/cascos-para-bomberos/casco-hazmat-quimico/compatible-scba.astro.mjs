import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Suspensi\xF3n Sobre M\xE1scara SCBA", descripcion: "El sistema de suspensi\xF3n est\xE1 dise\xF1ado para usarse SOBRE la m\xE1scara de cara completa (SCBA o APR), no debajo. El casco se asienta sobre la m\xE1scara sin interferir con el sellado facial. El peso se distribuye correctamente con la m\xE1scara puesta.", specs: [{ label: "Dise\xF1o", valor: "Sobre m\xE1scara" }, { label: "Sellado m\xE1scara", valor: "Sin interferencia" }, { label: "Distribuci\xF3n peso", valor: "Optimizada con SCBA" }], color: "ember" },
    { num: "02", titulo: "Ajuste R\xE1pido con Guantes HAZMAT", descripcion: "Todos los ajustes (suspensi\xF3n, barbiquejo, visor) se operan con guantes qu\xEDmicos gruesos (butilo, nitrilo, neopreno). Las perillas son grandes y acanaladas, las hebillas son de liberaci\xF3n por presi\xF3n, el visor tiene pesta\xF1as de agarre.", specs: [{ label: "Perillas", valor: "Grandes, acanaladas" }, { label: "Hebillas", valor: "Liberaci\xF3n por presi\xF3n" }, { label: "Visor", valor: "Pesta\xF1as de agarre" }], color: "smoke" },
    { num: "03", titulo: "Compatibilidad con Comunicaciones", descripcion: "El casco no interfiere con sistemas de comunicaci\xF3n integrados en la m\xE1scara SCBA (Scott EPIC, MSA G1, Dr\xE4ger FPS 7000). Los micr\xF3fonos y altavoces de la m\xE1scara funcionan normalmente. Hay espacio para auriculares externos si se requieren.", specs: [{ label: "Sistemas", valor: "Scott, MSA, Dr\xE4ger" }, { label: "Interferencia", valor: "Ninguna" }, { label: "Auriculares", valor: "Espacio disponible" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Compatibilidad SCBA", label: "Scott", valor: "AV-3000, AV-2000" },
    { categoria: "Compatibilidad SCBA", label: "MSA", valor: "G1, Ultra Elite" },
    { categoria: "Compatibilidad SCBA", label: "Dr\xE4ger", valor: "FPS 7000, Panorama Nova" },
    { categoria: "Compatibilidad SCBA", label: "Honeywell", valor: "Sperian PANO" },
    { categoria: "Compatibilidad APR", label: "3M", valor: "6000, 7500 series" },
    { categoria: "Compatibilidad APR", label: "MSA", valor: "Advantage 4200" },
    { categoria: "Suspensi\xF3n", label: "Dise\xF1o", valor: "Sobre m\xE1scara cara completa" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "6 puntos con perillas grandes" },
    { categoria: "Operaci\xF3n", label: "Guantes", valor: "Compatible con guantes gruesos" },
    { categoria: "Operaci\xF3n", label: "Ajuste tiempo", valor: "< 15 segundos" },
    { categoria: "Comunicaci\xF3n", label: "Integrada", valor: "Sin interferencia" },
    { categoria: "Comunicaci\xF3n", label: "Externa", valor: "Espacio para auriculares" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1994", valor: "Compatible SCBA" }
  ];
  const catClass = { "Compatibilidad SCBA": "construccion", "Compatibilidad APR": "construccion", "Suspensi\xF3n": "ergonomia", "Operaci\xF3n": "ergonomia", "Comunicaci\xF3n": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Operaciones HAZMAT Prolongadas", desc: "Emergencias que requieren SCBA por tiempo extendido. El casco se usa c\xF3modamente sobre la m\xE1scara durante toda la operaci\xF3n." },
    { titulo: "Atm\xF3sferas IDLH", desc: "Ambientes inmediatamente peligrosos para la vida donde el SCBA es mandatorio. El casco agrega protecci\xF3n de cabeza sin comprometer el equipo respiratorio." },
    { titulo: "Respuesta a Fugas de Gas", desc: "Emergencias con fugas de gases t\xF3xicos o asfixiantes donde la protecci\xF3n respiratoria es cr\xEDtica. El casco es compatible con cualquier configuraci\xF3n SCBA." },
    { titulo: "Entrenamiento con SCBA", desc: "Capacitaci\xF3n de brigadas donde se practica con SCBA y casco simult\xE1neamente para acostumbrarse al sistema completo." }
  ];
  const faqs = [
    { q: "\xBFEl casco funciona con mi SCBA actual?", a: "S\xED. El casco es <strong>compatible con las principales marcas</strong> de SCBA: Scott, MSA, Dr\xE4ger, Honeywell/Sperian. La suspensi\xF3n est\xE1 dise\xF1ada para acomodar cualquier m\xE1scara de cara completa certificada NIOSH." },
    { q: "\xBFEl casco afecta el sellado de la m\xE1scara?", a: "<strong>No</strong>. El casco se asienta <strong>sobre</strong> la m\xE1scara, no interfiere con el sellado facial. Antes de usar en emergencia real, siempre verificar el sellado de la m\xE1scara con el casco puesto (test de presi\xF3n positiva/negativa)." },
    { q: "\xBFPuedo ajustar el casco con guantes de butilo gruesos?", a: "S\xED. Todas las perillas son <strong>grandes y acanaladas</strong>, las hebillas son de <strong>liberaci\xF3n por presi\xF3n</strong>. Dise\xF1ado espec\xEDficamente para operaci\xF3n con guantes qu\xEDmicos gruesos." }
  ];
  const relacionados = [
    { title: "Sistema Completo HAZMAT", badge: "NFPA 1994", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Botas Qu\xEDmicas de Caucho", badge: "HAZMAT", description: "Botas de caucho certificadas para operaciones con materiales peligrosos.", href: "/productos/botas-para-bomberos/caucho", buttonText: "Ver Botas", image: "/images/directorio/botas-bombero-proteccion-01.avif" },
    { title: "Capucha Integrada", badge: "Tyvek", description: "Protecci\xF3n adicional de cuello.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada", buttonText: "Ver Capucha", image: IMAGE },
    { title: "Guantes Qu\xEDmicos", badge: "Butilo", description: "Guantes para HAZMAT.", href: "/productos/guantes-para-bomberos/hazmat", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo" },
    { label: "Shell Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico" },
    { label: "Visor Antisalpicadura", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura" },
    { label: "Capucha Integrada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada" },
    { label: "Certificaciones CBRN", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }, { label: "Traje Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cuerpo" }, { label: "Guantes Butilo", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Cascos HAZMAT", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cat\xE1logo" }, { label: "Gu\xEDa SCBA", href: "/blog/equipo-scba-autonomo-bomberos", tag: "Blog" }];
  const directorioLinks = [{ label: "HAZMAT Nacional", href: "/directorio" }, { label: "Brigadas Industriales", href: "/directorio" }];
  const specsRapidas = [{ label: "SCBA", valor: "Scott, MSA, Dr\xE4ger" }, { label: "Guantes", valor: "Compatible gruesos" }, { label: "Ajuste", valor: "< 15 segundos" }, { label: "Comunicaci\xF3n", valor: "Sin interferencia" }];
  const certItems = [{ code: "NFPA 1994", desc: "Compatible SCBA" }, { code: "NIOSH", desc: "Uso con SCBA certificado" }, { code: "Ergonom\xEDa", desc: "Guantes gruesos" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco HAZMAT Compatible con SCBA \u2014 Scott, MSA, Dr\xE4ger | BOMBERO.MX", "description": "Casco HAZMAT compatible con SCBA de todas las marcas (Scott, MSA, Dr\xE4ger). Suspensi\xF3n sobre m\xE1scara, ajuste con guantes gruesos. NFPA 1994 M\xE9xico.", "keywords": ["casco HAZMAT SCBA", "casco compatible respirador", "casco HAZMAT Scott MSA", "casco SCBA qu\xEDmico"], "canonical": "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }, { label: "Compatible SCBA" }], "heroBadge": "Compatible SCBA \xB7 Scott, MSA, Dr\xE4ger \xB7 Guantes Gruesos", "heroTitle": "Casco HAZMAT", "heroTitleHighlight": "Compatible con SCBA", "heroSubtitle": "Dise\xF1ado espec\xEDficamente para uso sobre equipos de respiraci\xF3n aut\xF3noma (SCBA) y m\xE1scaras de cara completa. Compatible con Scott, MSA, Dr\xE4ger y Honeywell. Ajuste r\xE1pido con guantes qu\xEDmicos gruesos. Sin interferencia con comunicaciones.", "heroSeoBlocks": [{ title: "Suspensi\xF3n Sobre M\xE1scara", text: "El casco se asienta <strong>sobre la m\xE1scara SCBA</strong>, no interfiere con el sellado facial. Distribuci\xF3n de peso optimizada para uso prolongado <strong>con equipo respiratorio puesto</strong>." }, { title: "Operaci\xF3n con Guantes Gruesos", text: "Perillas <strong>grandes y acanaladas</strong>, hebillas de liberaci\xF3n por presi\xF3n. Ajuste completo en <strong>menos de 15 segundos</strong> con guantes de butilo o nitrilo." }], "ctaBarQuote": "Cotizar Casco Compatible SCBA", "productoCategoria": "Casco HAZMAT SCBA", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1994" }, { modifier: "tpp", text: "SCBA Ready" }, { modifier: "solas", text: "All Brands" }], "productoMasVendido": false, "productoTitle": "Casco HAZMAT \u2014 Compatible SCBA", "productoTitleSub": "Scott \xB7 MSA \xB7 Dr\xE4ger", "productoDesc": "Suspensi\xF3n dise\xF1ada para uso sobre m\xE1scara de cara completa. Compatible con Scott AV-3000, MSA G1, Dr\xE4ger FPS 7000 y m\xE1s. Ajuste con guantes gruesos en <15 segundos. Sin interferencia con comunicaciones integradas.", "productoFeatures": ["Compatible Scott, MSA, Dr\xE4ger", "Suspensi\xF3n sobre m\xE1scara", "Ajuste con guantes gruesos", "< 15 seg ajuste completo", "Sin interferencia comunicaci\xF3n"], "productoAppTags": ["HAZMAT prolongado", "IDLH", "Fugas de gas", "Entrenamiento"], "gallery": [{ src: IMAGE, alt: "Casco HAZMAT compatible SCBA" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "HAZMAT con SCBA" }], "capasEyebrow": "Compatibilidad SCBA", "capasTitle": "Sistema Sobre M\xE1scara", "capasDesc": "Dise\xF1ado para trabajar con cualquier SCBA certificado NIOSH.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Compatibilidad con Equipos", "specsDesc": "Compatible con las principales marcas de SCBA y APR.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios SCBA", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n HAZMAT donde se requiera <strong>SCBA o APR de cara completa</strong>: atm\xF3sferas IDLH, fugas de gas, operaciones prolongadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1994 Compatible SCBA", "certsDesc": "Certificado <strong>NFPA 1994</strong> con compatibilidad verificada con SCBA certificados NIOSH.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-hazmat-quimico", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Compatibilidad SCBA", "faqDescription": "Dudas sobre uso con equipos de respiraci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Lista de compatibilidad por marca.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Respiratorio", "relacionadosTitle": "Equipo SCBA Completo", "relacionadosDesc": "Complete con SCBA, traje y guantes certificados.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
