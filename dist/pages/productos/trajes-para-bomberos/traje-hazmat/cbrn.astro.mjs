import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif";
  const capas = [
    { num: "01", titulo: "Certificaci\xF3n NFPA 1994 Clase 2", descripcion: "Certificaci\xF3n espec\xEDfica para amenazas CBRN (Qu\xEDmicas, Biol\xF3gicas, Radiol\xF3gicas, Nucleares). La norma NFPA 1994 define requisitos m\xE1s estrictos que la protecci\xF3n industrial est\xE1ndar.", specs: [{ label: "Norma", valor: "NFPA 1994" }, { label: "Clase", valor: "Clase 2" }, { label: "Amenazas", valor: "CBRN" }], color: "ember" },
    { num: "02", titulo: "Resistencia a Agentes Qu\xEDmicos de Guerra", descripcion: "Probado contra agentes qu\xEDmicos de guerra (CWA) como mostaza sulfurada, sar\xEDn y VX. Los tiempos de permeaci\xF3n cumplen requisitos militares para protecci\xF3n del primer respondedor.", specs: [{ label: "CWA", valor: "Probado" }, { label: "Mostaza", valor: "Resistente" }, { label: "Sar\xEDn/VX", valor: "Resistente" }], color: "smoke" },
    { num: "03", titulo: "Barrera Biol\xF3gica Certificada", descripcion: "Material que cumple requisitos de barrera biol\xF3gica contra pat\xF3genos. Incluye resistencia a penetraci\xF3n de sangre y fluidos corporales seg\xFAn ASTM F1671.", specs: [{ label: "Biol\xF3gico", valor: "Barrera certificada" }, { label: "Sangre", valor: "Resistente penetraci\xF3n" }, { label: "ASTM", valor: "F1671" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "CBRN", label: "Norma", valor: "NFPA 1994 Clase 2" },
    { categoria: "CBRN", label: "Amenazas", valor: "Qu\xEDmicas, Biol\xF3gicas, Radiol\xF3gicas, Nucleares" },
    { categoria: "Qu\xEDmico", label: "CWA", valor: "Agentes de guerra probados" },
    { categoria: "Qu\xEDmico", label: "Mostaza", valor: "Sulfurada resistente" },
    { categoria: "Qu\xEDmico", label: "Nerviosos", valor: "Sar\xEDn, VX resistente" },
    { categoria: "Biol\xF3gico", label: "Pat\xF3genos", valor: "Barrera certificada" },
    { categoria: "Biol\xF3gico", label: "ASTM", valor: "F1671 penetraci\xF3n" },
    { categoria: "Radiol\xF3gico", label: "Part\xEDculas", valor: "Barrera f\xEDsica" },
    { categoria: "Certificaci\xF3n", label: "NFPA", valor: "1994 Clase 2" },
    { categoria: "Certificaci\xF3n", label: "Uso", valor: "Primer respondedor CBRN" }
  ];
  const catClass = { "CBRN": "construccion", "Qu\xEDmico": "termico", "Biol\xF3gico": "ergonomia", "Radiol\xF3gico": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Respuesta a Terrorismo", desc: "Primera respuesta a incidentes con sospecha de agentes qu\xEDmicos, biol\xF3gicos o radiol\xF3gicos de origen terrorista." },
    { titulo: "Incidentes Biol\xF3gicos", desc: "Respuesta a brotes de enfermedades infecciosas altamente contagiosas o liberaci\xF3n intencional de pat\xF3genos." },
    { titulo: "Contaminaci\xF3n Radiol\xF3gica", desc: "Incidentes con fuentes radiol\xF3gicas hu\xE9rfanas, dispositivos de dispersi\xF3n o accidentes nucleares." },
    { titulo: "Equipos de Respuesta Especial", desc: "Unidades especializadas de respuesta CBRN en fuerzas de seguridad y protecci\xF3n civil." }
  ];
  const faqs = [
    { q: "\xBFQu\xE9 significa NFPA 1994 Clase 2?", a: "<strong>NFPA 1994</strong> es espec\xEDfica para protecci\xF3n CBRN. <strong>Clase 2</strong> es para operaciones de hasta 1 hora en ambientes IDLH con concentraciones conocidas. <strong>Clase 1</strong> es para concentraciones desconocidas o escape inmediato." },
    { q: "\xBFEste traje protege contra radiaci\xF3n?", a: "Protege contra <strong>part\xEDculas radiactivas</strong> (contaminaci\xF3n externa) pero no contra <strong>radiaci\xF3n gamma</strong> penetrante. Para radiaci\xF3n gamma se requiere distancia, tiempo limitado y blindaje adicional de plomo." },
    { q: "\xBFEs diferente al HAZMAT industrial?", a: "S\xED. <strong>NFPA 1994 CBRN</strong> tiene requisitos adicionales: pruebas contra <strong>agentes de guerra qu\xEDmica</strong>, barrera biol\xF3gica certificada y tiempos de permeaci\xF3n m\xE1s estrictos que NFPA 1991 industrial." }
  ];
  const relacionados = [
    { title: "Traje HAZMAT Nivel A", badge: "Industrial", description: "M\xE1xima protecci\xF3n.", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a", buttonText: "Ver Nivel A", image: IMAGE },
    { title: "Resistencia Qu\xEDmica", badge: "Multi-qu\xEDmico", description: "Tablas permeaci\xF3n.", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica", buttonText: "Ver Qu\xEDmicos", image: IMAGE },
    { title: "Compatible SCBA", badge: "Respiratorio", description: "Sistema aire.", href: "/productos/trajes-para-bomberos/traje-hazmat/scba", buttonText: "Ver SCBA", image: IMAGE },
    { title: "Guantes CBRN", badge: "Especializados", description: "Protecci\xF3n manos.", href: "/productos/guantes-para-bomberos", buttonText: "Ver Guantes", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-a" },
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos/traje-hazmat/nivel-b" },
    { label: "Resistencia Qu\xEDmica", href: "/productos/trajes-para-bomberos/traje-hazmat/resistencia-quimica" },
    { label: "Sistema Encapsulamiento", href: "/productos/trajes-para-bomberos/traje-hazmat/encapsulamiento" },
    { label: "Compatible SCBA", href: "/productos/trajes-para-bomberos/traje-hazmat/scba" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [{ label: "M\xE1scara CBRN", href: "/productos", tag: "Respiratorio" }, { label: "Guantes CBRN", href: "/productos/guantes-para-bomberos", tag: "Manos" }, { label: "Detector CBRN", href: "/productos", tag: "Monitoreo" }];
  const articulos = [{ label: "Cat\xE1logo Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat", tag: "Cat\xE1logo" }, { label: "Gu\xEDa CBRN", href: "/productos", tag: "Especializado" }];
  const directorioLinks = [{ label: "Respuesta Especial", href: "/directorio" }, { label: "Protecci\xF3n Civil CBRN", href: "/directorio" }];
  const specsRapidas = [{ label: "Norma", valor: "NFPA 1994" }, { label: "Clase", valor: "Clase 2" }, { label: "CWA", valor: "Probado" }, { label: "Biol\xF3gico", valor: "ASTM F1671" }];
  const certItems = [{ code: "NFPA 1994", desc: "CBRN Clase 2" }, { code: "CWA", desc: "Agentes guerra" }, { code: "ASTM F1671", desc: "Barrera biol\xF3gica" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje HAZMAT Certificaci\xF3n CBRN \u2014 NFPA 1994 Clase 2 | BOMBERO.MX", "description": "Traje HAZMAT certificado CBRN NFPA 1994 Clase 2. Resistencia a agentes de guerra qu\xEDmica, barrera biol\xF3gica. Primer respondedor. M\xE9xico.", "keywords": ["traje HAZMAT CBRN", "traje NFPA 1994", "traje agentes guerra", "traje biol\xF3gico certificado", "equipo CBRN bomberos"], "canonical": "/productos/trajes-para-bomberos/traje-hazmat/cbrn", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Trajes para Bombero", href: "/productos/trajes-para-bomberos" }, { label: "Traje HAZMAT", href: "/productos/trajes-para-bomberos/traje-hazmat" }, { label: "CBRN" }], "heroBadge": "Traje HAZMAT \xB7 CBRN \xB7 NFPA 1994 \xB7 Clase 2", "heroTitle": "Traje HAZMAT", "heroTitleHighlight": "Certificaci\xF3n CBRN", "heroSubtitle": "Certificaci\xF3n NFPA 1994 Clase 2 para amenazas Qu\xEDmicas, Biol\xF3gicas, Radiol\xF3gicas y Nucleares. Probado contra agentes de guerra qu\xEDmica. Barrera biol\xF3gica certificada ASTM F1671.", "heroSeoBlocks": [{ title: "Amenazas CBRN Especializadas", text: "Certificaci\xF3n <strong>NFPA 1994 Clase 2</strong> espec\xEDfica para amenazas <strong>CBRN</strong>. Requisitos m\xE1s estrictos que protecci\xF3n industrial: <strong>agentes de guerra qu\xEDmica</strong> y barrera biol\xF3gica." }, { title: "Agentes de Guerra Qu\xEDmica", text: "Probado contra <strong>CWA</strong> (Chemical Warfare Agents): mostaza sulfurada, sar\xEDn, VX. Tiempos de permeaci\xF3n que cumplen requisitos para <strong>primer respondedor CBRN</strong>." }], "ctaBarQuote": "Cotizar CBRN", "productoCategoria": "Traje HAZMAT CBRN", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1994" }, { modifier: "tpp", text: "CBRN" }, { modifier: "solas", text: "Clase 2" }], "productoMasVendido": false, "productoTitle": "Traje HAZMAT \u2014 Certificaci\xF3n CBRN", "productoTitleSub": "NFPA 1994 Clase 2 \xB7 CWA \xB7 Barrera Biol\xF3gica", "productoDesc": "Traje HAZMAT certificado CBRN seg\xFAn NFPA 1994 Clase 2. Probado contra agentes de guerra qu\xEDmica (mostaza, sar\xEDn, VX). Barrera biol\xF3gica certificada ASTM F1671. Para equipos de respuesta especial.", "productoFeatures": ["NFPA 1994 Clase 2", "Agentes guerra qu\xEDmica", "Barrera biol\xF3gica ASTM", "Part\xEDculas radiol\xF3gicas", "Primer respondedor CBRN"], "productoAppTags": ["Terrorismo", "Biol\xF3gico", "Radiol\xF3gico", "Respuesta especial"], "gallery": [{ src: IMAGE, alt: "Traje HAZMAT CBRN" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Respuesta CBRN" }], "capasEyebrow": "Certificaci\xF3n CBRN", "capasTitle": "Sistema de Protecci\xF3n Especial", "capasDesc": "NFPA 1994, agentes de guerra y barrera biol\xF3gica.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Todas las especificaciones CBRN.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Uso CBRN", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p><strong>Amenazas CBRN especializadas</strong>: respuesta a terrorismo, incidentes biol\xF3gicos, contaminaci\xF3n radiol\xF3gica y equipos de respuesta especial.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1994 + CWA + ASTM", "certsDesc": "Certificaci\xF3n <strong>NFPA 1994 Clase 2</strong> + pruebas <strong>CWA</strong> + barrera biol\xF3gica <strong>ASTM F1671</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas CBRN", "faqDescription": "Dudas sobre amenazas especiales.", "faqDocTitle": "Gu\xEDa CBRN", "faqDocDesc": "Niveles y clases.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "Sistema CBRN", "relacionadosTitle": "EPP CBRN Relacionado", "relacionadosDesc": "Completa tu equipo de respuesta especial.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/cbrn/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-hazmat/cbrn/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-hazmat/cbrn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
