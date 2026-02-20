import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Certificaci\xF3n CBRN seg\xFAn NFPA 1994", descripcion: "CBRN = Chemical, Biological, Radiological, Nuclear. La certificaci\xF3n NFPA 1994 Clase 2 o superior requiere que el casco y sus componentes resistan exposici\xF3n a agentes qu\xEDmicos de guerra (CWA) como mostaza, sar\xEDn y VX en pruebas de permeaci\xF3n de 60 minutos.", specs: [{ label: "NFPA 1994", valor: "Clase 2 o superior" }, { label: "Agentes CWA", valor: "Mostaza, sar\xEDn, VX" }, { label: "Prueba", valor: "60 min permeaci\xF3n" }], color: "ember" },
    { num: "02", titulo: "Compatibilidad con Trajes NFPA 1994", descripcion: "El casco CBRN est\xE1 dise\xF1ado para integrarse con trajes certificados NFPA 1994 (Nivel A y B CBRN). Los materiales del casco son compatibles qu\xEDmicamente con los materiales del traje. El sellado capucha-traje es verificado contra los mismos agentes.", specs: [{ label: "Traje Nivel A", valor: "Compatible NFPA 1991 CBRN" }, { label: "Traje Nivel B", valor: "Compatible NFPA 1994" }, { label: "Sellado", valor: "Verificado CWA" }], color: "smoke" },
    { num: "03", titulo: "Descontaminaci\xF3n Certificada CBRN", descripcion: "El casco puede descontaminarse usando los protocolos est\xE1ndar CBRN: soluci\xF3n de hipoclorito 0.5%, M291 kit, o productos espec\xEDficos aprobados. Todos los materiales resisten el proceso de descontaminaci\xF3n sin degradarse.", specs: [{ label: "Protocolos", valor: "Hipoclorito, M291" }, { label: "Degradaci\xF3n", valor: "Ninguna post-descon" }, { label: "Reutilizaci\xF3n", valor: "Seg\xFAn inspecci\xF3n" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "CBRN", label: "Norma", valor: "NFPA 1994 Clase 2+" },
    { categoria: "CBRN", label: "Agentes qu\xEDmicos", valor: "Mostaza (HD), sar\xEDn (GB), VX" },
    { categoria: "CBRN", label: "Agentes biol\xF3gicos", valor: "Esporas Bacillus" },
    { categoria: "CBRN", label: "Permeaci\xF3n", valor: ">60 min CWA" },
    { categoria: "CBRN", label: "Penetraci\xF3n", valor: "0% part\xEDculas/aerosoles" },
    { categoria: "Compatibilidad", label: "Traje Nivel A", valor: "NFPA 1991 CBRN" },
    { categoria: "Compatibilidad", label: "Traje Nivel B", valor: "NFPA 1994 CBRN" },
    { categoria: "Compatibilidad", label: "SCBA CBRN", valor: "S\xED requerido" },
    { categoria: "Descontaminaci\xF3n", label: "NaClO 0.5%", valor: "Compatible" },
    { categoria: "Descontaminaci\xF3n", label: "M291 kit", valor: "Compatible" },
    { categoria: "Descontaminaci\xF3n", label: "DS2", valor: "Compatible" },
    { categoria: "Documentaci\xF3n", label: "Certificado lab", valor: "ISO/IEC 17025" },
    { categoria: "Documentaci\xF3n", label: "SEDENA/SEMAR", valor: "Formato licitaci\xF3n" }
  ];
  const catClass = { "CBRN": "certificacion", "Compatibilidad": "construccion", "Descontaminaci\xF3n": "ergonomia", "Documentaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Respuesta a Amenaza Terrorista", desc: "Incidentes con sospecha de agentes qu\xEDmicos, biol\xF3gicos o radiol\xF3gicos de origen terrorista. La certificaci\xF3n CBRN es mandatoria para primer respuesta." },
    { titulo: "Fuerzas Armadas y SEDENA", desc: "Unidades militares de respuesta CBRN requieren equipamiento certificado. Documentaci\xF3n completa para adquisiciones gubernamentales." },
    { titulo: "Marina (SEMAR) y Seguridad Nacional", desc: "Operaciones de seguridad mar\xEDtima y portuaria contra amenazas CBRN. Equipamiento certificado para respuesta federal." },
    { titulo: "Protecci\xF3n Civil Federal", desc: "Brigadas de protecci\xF3n civil federal con capacidad de respuesta a incidentes CBRN de alto perfil." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 significa la certificaci\xF3n CBRN?", a: "<strong>CBRN</strong> = Chemical, Biological, Radiological, Nuclear. La certificaci\xF3n indica que el equipo ha sido probado contra <strong>agentes qu\xEDmicos de guerra</strong> (CWA) como mostaza, sar\xEDn y VX. No todo el equipo HAZMAT tiene certificaci\xF3n CBRN \u2014 solo los dise\xF1ados para amenazas terroristas." },
    { q: "\xBFNecesito CBRN para HAZMAT industrial normal?", a: "No necesariamente. Para emergencias qu\xEDmicas <strong>industriales normales</strong>, el equipo NFPA 1994 est\xE1ndar (no CBRN) es suficiente y m\xE1s econ\xF3mico. La certificaci\xF3n <strong>CBRN es requerida</strong> espec\xEDficamente para respuesta a amenazas terroristas o militares." },
    { q: "\xBFQu\xE9 documentaci\xF3n incluye para licitaciones?", a: "Incluye: <strong>certificado de laboratorio ISO/IEC 17025</strong>, resultados de pruebas de permeaci\xF3n CWA, ficha t\xE9cnica en formato SEDENA/SEMAR, y declaraci\xF3n de conformidad del fabricante. Todo en espa\xF1ol e ingl\xE9s." }
  ];
  const relacionados = [
    { title: "Sistema Completo HAZMAT", badge: "NFPA 1994", description: "Casco con todos los componentes.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Traje CBRN Nivel A", badge: "NFPA 1991", description: "Traje encapsulado CBRN.", href: "/productos/trajes-para-bomberos/traje-hazmat", buttonText: "Ver Traje", image: IMAGE },
    { title: "Capucha Particulada PM2.5", badge: "NFPA 1971", description: "Capucha con membrana particulada para bloqueo de carcin\xF3genos.", href: "/productos/capuchas-para-bomberos/particulada", buttonText: "Ver Capucha", image: "/images/directorio/equipo-proteccion-bomberos-01.avif" },
    { title: "Capucha Integrada", badge: "Tyvek", description: "Protecci\xF3n adicional de cuello.", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada", buttonText: "Ver Capucha", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/sistema-completo" },
    { label: "Shell Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/shell-quimico" },
    { label: "Visor Antisalpicadura", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/visor-antisalpicadura" },
    { label: "Compatible SCBA", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/compatible-scba" },
    { label: "Capucha Integrada", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico/capucha-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Traje CBRN Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cuerpo" }, { label: "Guantes CBRN", href: "/productos/guantes-para-bomberos/hazmat", tag: "Manos" }, { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }];
  const articulos = [{ label: "Cat\xE1logo Cascos HAZMAT", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cat\xE1logo" }, { label: "NFPA 1994 CBRN", href: "/blog/equipo-scba-autonomo-bomberos", tag: "Blog" }];
  const directorioLinks = [{ label: "SEDENA", href: "/directorio" }, { label: "SEMAR", href: "/directorio" }, { label: "Protecci\xF3n Civil Federal", href: "/directorio" }];
  const specsRapidas = [{ label: "Certificaci\xF3n", valor: "NFPA 1994 CBRN" }, { label: "Agentes", valor: "Mostaza, sar\xEDn, VX" }, { label: "Permeaci\xF3n", valor: ">60 min CWA" }, { label: "Documentaci\xF3n", valor: "SEDENA/SEMAR ready" }];
  const certItems = [{ code: "NFPA 1994", desc: "Clase 2+ CBRN" }, { code: "CWA Test", desc: "Mostaza, sar\xEDn, VX" }, { code: "ISO 17025", desc: "Lab certificado" }, { code: "Descon", desc: "Protocolos CBRN" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco HAZMAT con Certificaci\xF3n CBRN \u2014 NFPA 1994 | BOMBERO.MX", "description": "Casco HAZMAT con certificaci\xF3n CBRN para amenazas terroristas. Probado contra agentes qu\xEDmicos de guerra (CWA). NFPA 1994 Clase 2+. Documentaci\xF3n SEDENA/SEMAR.", "keywords": ["casco CBRN certificado", "casco HAZMAT terrorismo", "casco agentes guerra", "casco NFPA 1994 CBRN"], "canonical": "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico" }, { label: "Certificaciones CBRN" }], "heroBadge": "CBRN Certified \xB7 Agentes Guerra \xB7 SEDENA/SEMAR", "heroTitle": "Casco HAZMAT", "heroTitleHighlight": "Certificaci\xF3n CBRN", "heroSubtitle": "Certificado NFPA 1994 Clase 2+ para respuesta a amenazas Chemical, Biological, Radiological, Nuclear. Probado contra agentes qu\xEDmicos de guerra (mostaza, sar\xEDn, VX) con >60 min de permeaci\xF3n. Documentaci\xF3n completa para licitaciones SEDENA, SEMAR y protecci\xF3n civil federal.", "heroSeoBlocks": [{ title: "Probado contra Agentes de Guerra", text: "Pruebas de permeaci\xF3n de <strong>60+ minutos</strong> contra <strong>mostaza (HD), sar\xEDn (GB) y VX</strong>. Certificaci\xF3n NFPA 1994 Clase 2 o superior requerida para respuesta CBRN." }, { title: "Documentaci\xF3n para Licitaciones", text: "Certificado de laboratorio <strong>ISO/IEC 17025</strong>, resultados de pruebas CWA, fichas t\xE9cnicas en formato <strong>SEDENA/SEMAR</strong>. Todo incluido." }], "ctaBarQuote": "Cotizar Casco CBRN", "productoCategoria": "Casco HAZMAT CBRN", "productoBadges": [{ modifier: "nfpa", text: "CBRN" }, { modifier: "tpp", text: "CWA Test" }, { modifier: "solas", text: "SEDENA" }], "productoMasVendido": false, "productoTitle": "Casco HAZMAT \u2014 Certificaci\xF3n CBRN", "productoTitleSub": "NFPA 1994 Clase 2+", "productoDesc": "Certificado CBRN con pruebas de permeaci\xF3n >60 min contra agentes qu\xEDmicos de guerra (HD, GB, VX). Compatible con trajes NFPA 1991/1994 CBRN. Descontaminable seg\xFAn protocolos militares. Documentaci\xF3n para licitaciones gubernamentales.", "productoFeatures": ["Certificado NFPA 1994 CBRN", "Probado mostaza, sar\xEDn, VX", ">60 min permeaci\xF3n CWA", "Descontaminaci\xF3n militar", "Docs SEDENA/SEMAR"], "productoAppTags": ["Terrorismo", "SEDENA", "SEMAR", "Protecci\xF3n Civil Fed"], "gallery": [{ src: IMAGE, alt: "Casco HAZMAT CBRN" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Respuesta CBRN" }], "capasEyebrow": "Certificaci\xF3n CBRN", "capasTitle": "Sistema para Amenazas Terroristas", "capasDesc": "Probado contra agentes qu\xEDmicos de guerra seg\xFAn NFPA 1994.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones CBRN", "specsDesc": "Dise\xF1ado para respuesta a incidentes terroristas.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Respuesta CBRN", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Respuesta a <strong>amenazas terroristas CBRN</strong>: incidentes con agentes qu\xEDmicos de guerra, biol\xF3gicos o radiol\xF3gicos. Fuerzas armadas, seguridad nacional y protecci\xF3n civil federal.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1994 CBRN Clase 2+", "certsDesc": "Certificaci\xF3n m\xE1xima para equipamiento de respuesta a <strong>agentes qu\xEDmicos de guerra</strong>. Documentaci\xF3n para licitaciones gubernamentales.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-hazmat-quimico", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas CBRN", "faqDescription": "Dudas sobre certificaci\xF3n y documentaci\xF3n.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados para licitaciones.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema CBRN", "relacionadosTitle": "Equipo CBRN Completo", "relacionadosDesc": "Complete con traje, SCBA y guantes CBRN certificados.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-hazmat-quimico/certificaciones-cbrn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
