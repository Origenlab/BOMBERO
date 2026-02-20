import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/bomberos-profesionales-accion-01.avif";
  const capas = [
    { num: "01", titulo: "Certificaci\xF3n NFPA 1971 Completa", descripcion: "Cumplimiento total de NFPA 1971 Standard on Protective Ensembles for Structural Fire Fighting and Proximity Fire Fighting. Incluye requisitos para combate estructural y protecci\xF3n proximity.", specs: [{ label: "NFPA", valor: "1971 completa" }, { label: "Estructural", valor: "Certificado" }, { label: "Proximity", valor: "Certificado" }], color: "ember" },
    { num: "02", titulo: "Cumplimiento OACI/FAA para ARFF", descripcion: "Dise\xF1o que cumple los requisitos de la Organizaci\xF3n de Aviaci\xF3n Civil Internacional (OACI) y FAA para equipos de rescate y extinci\xF3n de incendios aeroportuarios.", specs: [{ label: "OACI", valor: "Cumple" }, { label: "FAA", valor: "Cumple" }, { label: "Aeroportuario", valor: "Certificado" }], color: "smoke" },
    { num: "03", titulo: "Certificaci\xF3n CE Europea", descripcion: "Certificaci\xF3n CE seg\xFAn normativa europea EN 469 para ropa de protecci\xF3n de bomberos. Permite uso en aeropuertos con operaciones internacionales y est\xE1ndares europeos.", specs: [{ label: "CE", valor: "Certificado" }, { label: "EN 469", valor: "Cumple" }, { label: "Internacional", valor: "V\xE1lido" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "NFPA", label: "Norma", valor: "1971 (2018 edition)" },
    { categoria: "NFPA", label: "Estructural", valor: "Certificado" },
    { categoria: "NFPA", label: "Proximity", valor: "Certificado" },
    { categoria: "Aviaci\xF3n", label: "OACI", valor: "Annex 14 cumple" },
    { categoria: "Aviaci\xF3n", label: "FAA", valor: "Part 139 cumple" },
    { categoria: "Aviaci\xF3n", label: "ARFF", valor: "Rated" },
    { categoria: "Europa", label: "CE", valor: "Certificado" },
    { categoria: "Europa", label: "EN 469", valor: "Nivel 2" },
    { categoria: "Pruebas", label: "TPP", valor: "Certificado" },
    { categoria: "Pruebas", label: "THL", valor: "Certificado" }
  ];
  const catClass = { "NFPA": "construccion", "Aviaci\xF3n": "termico", "Europa": "ergonomia", "Pruebas": "certificacion" };
  const aplicaciones = [
    { titulo: "Aeropuertos Internacionales Certificados", desc: "Aeropuertos que requieren cumplimiento de est\xE1ndares internacionales OACI para operaci\xF3n de vuelos internacionales." },
    { titulo: "Aeropuertos con Certificaci\xF3n FAA", desc: "Instalaciones aeroportuarias en M\xE9xico con certificaci\xF3n FAA o que operan vuelos hacia Estados Unidos." },
    { titulo: "Licitaciones Gubernamentales", desc: "Procesos de adquisici\xF3n que requieren documentaci\xF3n completa de certificaciones para cumplimiento normativo." },
    { titulo: "Auditor\xEDas de Seguridad", desc: "Preparaci\xF3n para auditor\xEDas de seguridad aeroportuaria donde se verifica cumplimiento de equipos de protecci\xF3n." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 certificaci\xF3n necesito para ARFF en M\xE9xico?", a: "En M\xE9xico, los aeropuertos internacionales deben cumplir <strong>OACI Annex 14</strong>. La norma <strong>NFPA 1971</strong> es el est\xE1ndar de referencia para equipos ARFF. Aeropuertos con vuelos a EE.UU. tambi\xE9n deben cumplir <strong>FAA Part 139</strong>." },
    { q: "\xBFLa certificaci\xF3n CE es v\xE1lida en M\xE9xico?", a: "S\xED. La certificaci\xF3n <strong>CE (EN 469)</strong> es reconocida internacionalmente. En aeropuertos con operaciones europeas, puede ser requerida. Es <strong>complementaria a NFPA 1971</strong>, no sustitutiva." },
    { q: "\xBFC\xF3mo verifico que el traje est\xE1 certificado?", a: "El traje debe tener <strong>etiqueta permanente</strong> con n\xFAmero de certificaci\xF3n, laboratorio de prueba y normas cumplidas. El fabricante debe proporcionar <strong>certificados originales</strong> verificables con el laboratorio emisor." }
  ];
  const relacionados = [
    { title: "Sistema Completo ARFF", badge: "4 capas", description: "Sistema certificado.", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Traje Estructural", badge: "NFPA 1971", description: "Estructural certificado.", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", buttonText: "Ver Estructural", image: IMAGE },
    { title: "Casco ARFF", badge: "Certificado", description: "Casco NFPA 1971.", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", buttonText: "Ver Casco", image: IMAGE },
    { title: "Bota Estructural", badge: "NFPA 1971", description: "Bota certificada.", href: "/productos/botas-para-bomberos/estructural", buttonText: "Ver Botas", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/sistema-completo" },
    { label: "Capa Aluminizada", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/capa-aluminizada" },
    { label: "Protecci\xF3n Jet Fuel", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/proteccion-jet-fuel" },
    { label: "Radiaci\xF3n T\xE9rmica", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/radiacion-termica" },
    { label: "Cierre R\xE1pido", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario/cierre-rapido" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "Casco Certificado", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "NFPA 1971" }, { label: "Guantes Certificados", href: "/productos/guantes-para-bomberos", tag: "NFPA 1971" }, { label: "Bota Certificada", href: "/productos/botas-para-bomberos/estructural", tag: "NFPA 1971" }];
  const articulos = [{ label: "Cat\xE1logo Traje ARFF", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cat\xE1logo" }, { label: "Gu\xEDa Certificaciones", href: "/productos", tag: "Normativa" }];
  const directorioLinks = [{ label: "Aeropuertos Certificados", href: "/directorio" }, { label: "ARFF M\xE9xico", href: "/directorio" }];
  const specsRapidas = [{ label: "NFPA", valor: "1971 completa" }, { label: "OACI", valor: "Annex 14" }, { label: "FAA", valor: "Part 139" }, { label: "CE", valor: "EN 469" }];
  const certItems = [{ code: "NFPA 1971", desc: "Structural + Proximity" }, { code: "OACI/FAA", desc: "ARFF aeroportuario" }, { code: "CE EN 469", desc: "Nivel 2 europeo" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje ARFF Certificaciones \u2014 NFPA 1971 OACI FAA CE | BOMBERO.MX", "description": "Traje ARFF con certificaciones completas: NFPA 1971 estructural y proximity, OACI, FAA Part 139, CE EN 469. Para aeropuertos. M\xE9xico.", "keywords": ["traje ARFF certificado", "traje NFPA 1971 ARFF", "traje OACI FAA", "traje bombero aeropuerto certificado", "equipo ARFF normativa"], "canonical": "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje ARFF Aeroportuario", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario" }, { label: "Certificaciones" }], "heroBadge": "Traje ARFF \xB7 NFPA 1971 \xB7 OACI \xB7 FAA \xB7 CE", "heroTitle": "Traje ARFF Aeroportuario", "heroTitleHighlight": "Certificaciones", "heroSubtitle": "Certificaci\xF3n completa NFPA 1971 para combate estructural y proximity. Cumplimiento OACI Annex 14 y FAA Part 139 para ARFF. Certificaci\xF3n CE europea EN 469 para operaciones internacionales.", "heroSeoBlocks": [{ title: "NFPA 1971 + OACI + FAA", text: "Certificaci\xF3n <strong>NFPA 1971</strong> completa (estructural + proximity). Cumple requisitos <strong>OACI Annex 14</strong> y <strong>FAA Part 139</strong> para equipos ARFF aeroportuarios." }, { title: "Certificaci\xF3n CE Europea", text: "Certificaci\xF3n <strong>CE seg\xFAn EN 469 Nivel 2</strong> para operaciones internacionales. Documentaci\xF3n completa para <strong>licitaciones y auditor\xEDas</strong>." }], "ctaBarQuote": "Cotizar Certificado", "productoCategoria": "Traje ARFF Certificado", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1971" }, { modifier: "tpp", text: "OACI/FAA" }, { modifier: "solas", text: "CE" }], "productoMasVendido": false, "productoTitle": "Traje ARFF \u2014 Certificaciones", "productoTitleSub": "NFPA 1971 \xB7 OACI \xB7 FAA \xB7 CE EN 469", "productoDesc": "Traje ARFF con certificaciones completas: NFPA 1971 (estructural + proximity), OACI Annex 14, FAA Part 139 y CE EN 469. Documentaci\xF3n verificable para aeropuertos certificados.", "productoFeatures": ["NFPA 1971 completa", "OACI Annex 14", "FAA Part 139", "CE EN 469 Nivel 2", "Documentaci\xF3n verificable"], "productoAppTags": ["Aeropuertos internacionales", "Certificaci\xF3n FAA", "Licitaciones", "Auditor\xEDas"], "gallery": [{ src: IMAGE, alt: "Traje ARFF certificaciones" }, { src: "/images/directorio/rescate-montana-bomberos-01.avif", alt: "Equipo ARFF certificado" }], "capasEyebrow": "Certificaciones ARFF", "capasTitle": "Cumplimiento Normativo Completo", "capasDesc": "NFPA 1971, OACI/FAA y CE europea.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las certificaciones y normas cumplidas.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso Certificado", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Aeropuertos con requisitos de certificaci\xF3n</strong>: aeropuertos internacionales OACI, instalaciones con certificaci\xF3n FAA, licitaciones gubernamentales y auditor\xEDas de seguridad.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "Triple Certificaci\xF3n Internacional", "certsDesc": "<strong>NFPA 1971</strong> + <strong>OACI/FAA</strong> + <strong>CE EN 469</strong> para cumplimiento internacional.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Certificaciones", "faqDescription": "Dudas sobre normativa y cumplimiento.", "faqDocTitle": "Gu\xEDa Certificaciones", "faqDocDesc": "Requisitos por aeropuerto.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema Certificado", "relacionadosTitle": "EPP Certificado Relacionado", "relacionadosDesc": "Completa tu equipo con certificaci\xF3n completa.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-arff-aeroportuario/certificaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
