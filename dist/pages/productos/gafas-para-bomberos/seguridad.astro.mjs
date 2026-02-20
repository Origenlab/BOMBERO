import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-proteccion-bomberos-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Lente Envolvente \u2014 Policarbonato Antiimpacto",
      descripcion: "Lente de policarbonato de una sola pieza con dise\xF1o envolvente que maximiza el campo visual perif\xE9rico. Resistencia certificada ANSI Z87.1 contra impactos de part\xEDculas de alta y baja velocidad. Protecci\xF3n UV 400 que bloquea el 99.9 % de radiaci\xF3n UVA y UVB. Tratamiento antiempa\xF1ante interior para operaciones de rescate con esfuerzo f\xEDsico intenso.",
      specs: [
        { label: "Material", valor: "Policarbonato \xF3ptico de una pieza" },
        { label: "Dise\xF1o", valor: "Envolvente 180\xB0 \u2014 m\xE1ximo campo visual" },
        { label: "Resistencia impacto", valor: "ANSI Z87.1 certificado" },
        { label: "Protecci\xF3n UV", valor: "UV 400 \u2014 99.9 % UVA/UVB" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Montura Flexible \u2014 Perfil Ultra Bajo",
      descripcion: "Montura de nylon o TR-90 ultraflexible que se adapta a diferentes formas de rostro sin puntos de presi\xF3n. El perfil ultra bajo permite el uso bajo cascos de rescate NFPA 1951 sin interferir con el sistema de suspensi\xF3n ni con los arcos de sujeci\xF3n. Los arcos antideslizantes con puntas de silicona mantienen las gafas en posici\xF3n durante movimientos bruscos sin necesidad de banda.",
      specs: [
        { label: "Material montura", valor: "Nylon / TR-90 ultraflexible" },
        { label: "Perfil", valor: "Ultra bajo \u2014 compatible con casco" },
        { label: "Arcos", valor: "Antideslizantes con puntas de silicona" },
        { label: "Ajuste", valor: "Flexible a diferentes formas de rostro" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Protecci\xF3n Perif\xE9rica \u2014 Cobertura Envolvente",
      descripcion: "El dise\xF1o envolvente proporciona protecci\xF3n lateral contra part\xEDculas e impactos sin necesidad de protectores laterales adicionales. La curvatura del lente sigue la l\xEDnea natural de las cejas y los p\xF3mulos, creando una barrera continua. A diferencia del goggle sellado, las gafas permiten mayor ventilaci\xF3n natural \u2014 ideal para operaciones prolongadas donde el riesgo de salpicaduras es bajo.",
      specs: [
        { label: "Protecci\xF3n lateral", valor: "Integrada en dise\xF1o envolvente" },
        { label: "Ventilaci\xF3n", valor: "Natural \u2014 sin sellado perimetral" },
        { label: "Peso total", valor: "< 30 g (ultraligeras)" },
        { label: "Ideal para", valor: "Operaciones prolongadas sin salpicaduras" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "\xD3ptica", label: "Material del lente", valor: "Policarbonato \xF3ptico de una pieza" },
    { categoria: "\xD3ptica", label: "Dise\xF1o del lente", valor: "Envolvente 180\xB0 sin distorsi\xF3n" },
    { categoria: "\xD3ptica", label: "Resistencia al impacto", valor: "ANSI Z87.1 certificado" },
    { categoria: "\xD3ptica", label: "Protecci\xF3n UV", valor: "UV 400 \u2014 99.9 % UVA/UVB" },
    { categoria: "\xD3ptica", label: "Tratamiento antiempa\xF1ante", valor: "Cara interior" },
    { categoria: "\xD3ptica", label: "Tratamiento antirayado", valor: "Cara exterior" },
    { categoria: "Montura", label: "Material", valor: "Nylon / TR-90 ultraflexible" },
    { categoria: "Montura", label: "Perfil", valor: "Ultra bajo \u2014 compatible con cascos" },
    { categoria: "Montura", label: "Arcos", valor: "Antideslizantes con puntas de silicona" },
    { categoria: "Montura", label: "Peso total", valor: "< 30 g" },
    { categoria: "Protecci\xF3n", label: "Impacto frontal", valor: "ANSI Z87.1 certificado" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n lateral", valor: "Integrada en dise\xF1o envolvente" },
    { categoria: "Protecci\xF3n", label: "Part\xEDculas y polvo", valor: "Protecci\xF3n envolvente (no sellada)" },
    { categoria: "Protecci\xF3n", label: "Salpicaduras", valor: "Limitada \u2014 usar goggle para sellado total" },
    { categoria: "Compatibilidad", label: "Casco rescate", valor: "NFPA 1951 \u2014 bajo el casco" },
    { categoria: "Compatibilidad", label: "Casco forestal", valor: "NFPA 1977 \u2014 bajo el casco" },
    { categoria: "Compatibilidad", label: "Casco estructural", valor: "NFPA 1971 \u2014 bajo el visor" },
    { categoria: "Certificaci\xF3n", label: "Normas", valor: "ANSI Z87.1 / EN 166 (edici\xF3n vigente)" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const catClass = {
    "\xD3ptica": "optica",
    "Montura": "montura",
    "Protecci\xF3n": "proteccion",
    "Compatibilidad": "compatibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Rescate Vehicular y Extricaci\xF3n",
      desc: "Protecci\xF3n contra fragmentos de vidrio, metal y pl\xE1stico durante el corte con herramientas hidr\xE1ulicas. El perfil bajo permite usar las gafas bajo el casco de rescate sin interferir con visores ni arcos de sujeci\xF3n."
    },
    {
      titulo: "Rescate T\xE9cnico y Espacios Confinados",
      desc: "Operaciones de b\xFAsqueda y rescate en derrumbes, zanjas y espacios confinados. Las gafas ultraligeras (< 30 g) permiten uso prolongado sin fatiga. Mayor campo visual perif\xE9rico que el goggle para maniobras de precisi\xF3n."
    },
    {
      titulo: "Operaciones en Altura y Rappel",
      desc: "Rescate vertical donde el viento, el polvo y los fragmentos de roca o estructura pueden impactar los ojos. El dise\xF1o envolvente protege sin necesidad de sellado \u2014 mayor comodidad en ascenso y descenso."
    },
    {
      titulo: "Brigadas Industriales y Protecci\xF3n Civil",
      desc: "Protecci\xF3n ocular est\xE1ndar para brigadas industriales, protecci\xF3n civil y equipos de emergencia que no enfrentan riesgo de salpicaduras qu\xEDmicas. Cumplen la norma ANSI Z87.1 exigida en protocolos de seguridad industrial."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia entre las gafas antiimpacto y el goggle sellado?",
      a: "Las gafas antiimpacto ofrecen protecci\xF3n envolvente contra part\xEDculas e impactos con mayor comodidad, menor peso (< 30 g vs > 120 g) y mejor campo visual. El goggle sellado ofrece protecci\xF3n perimetral total contra salpicaduras, gases y calor radiante. Las gafas son ideales para rescate t\xE9cnico; el goggle para combate estructural."
    },
    {
      q: "\xBFLas gafas son compatibles con el casco de rescate NFPA 1951?",
      a: "S\xED. El perfil ultra bajo de las gafas est\xE1 dise\xF1ado espec\xEDficamente para caber bajo el casco de rescate sin interferir con el sistema de suspensi\xF3n ni con los arcos de sujeci\xF3n. Tambi\xE9n son compatibles con cascos forestales NFPA 1977 y estructurales NFPA 1971."
    },
    {
      q: "\xBFPuedo usar las gafas en combate de incendio estructural?",
      a: "Las gafas antiimpacto NO sustituyen al goggle sellado en combate estructural, donde hay riesgo de salpicaduras, brasas y calor radiante intenso. Las gafas son la opci\xF3n para rescate t\xE9cnico, extricaci\xF3n y operaciones donde el riesgo principal es el impacto de part\xEDculas, no las salpicaduras ni el calor."
    },
    {
      q: "\xBFLas gafas se empa\xF1an?",
      a: "El dise\xF1o envolvente con ventilaci\xF3n natural reduce significativamente el empa\xF1amiento comparado con el goggle sellado. El tratamiento antiempa\xF1ante en la cara interior del lente complementa la ventilaci\xF3n. Para operaciones de m\xE1ximo esfuerzo, la ventilaci\xF3n natural de las gafas es una ventaja sobre el goggle."
    },
    {
      q: "\xBFLas gafas protegen contra radiaci\xF3n UV?",
      a: "S\xED. El lente de policarbonato incluye protecci\xF3n UV 400 que bloquea el 99.9 % de radiaci\xF3n UVA y UVB. Esto protege en operaciones al aire libre bajo sol directo \u2014 rescate en altura, incidentes forestales y operaciones prolongadas en exteriores."
    },
    {
      q: "\xBFIncluyen ficha t\xE9cnica para licitaciones?",
      a: "S\xED. Cada par de gafas de seguridad incluye ficha t\xE9cnica con especificaciones \xF3pticas y de protecci\xF3n, certificado de laboratorio ANSI Z87.1 y documentaci\xF3n de cumplimiento EN 166 \u2014 todo lo requerido para procesos de licitaci\xF3n gubernamental en los 32 estados de M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Goggle de Bombero",
      badge: "NFPA 1971",
      description: "Protecci\xF3n ocular sellada para combate estructural. Sellado perimetral completo contra part\xEDculas, salpicaduras y calor radiante.",
      href: "/productos/gafas-para-bomberos/goggle",
      buttonText: "Goggle de Bombero",
      image: IMAGE
    },
    {
      title: "Casco de Rescate NFPA 1951",
      badge: "NFPA 1951",
      description: "Casco de rescate t\xE9cnico compatible con las gafas antiimpacto. Perfil bajo para trabajo en extricaci\xF3n y espacios confinados.",
      href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Guantes de Rescate",
      badge: "NFPA 1951",
      description: "Guantes de extricaci\xF3n para operaciones de rescate vehicular y t\xE9cnico. El complemento natural de las gafas en operaciones de rescate.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Guantes para Bombero",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. Las gafas complementan el EPP para protecci\xF3n visual en operaciones de soporte y rescate.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Goggle de Bombero Sellado", href: "/productos/gafas-para-bomberos/goggle" },
    { label: "Ver Toda la Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos" }
  ];
  const epp = [
    { label: "Casco de Rescate NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cabeza" },
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate", tag: "Manos" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", tag: "Cuerpo" },
    { label: "Botas Estructurales", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Cascos NFPA 1971 y 1951", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes de Rescate y Extricaci\xF3n", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Estructurales NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Norma NFPA 1971 \u2014 Gu\xEDa Completa", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Botas y Calzado para Bomberos", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Ciudad de M\xE9xico", href: "/directorio/ciudad-de-mexico" },
    { label: "Bomberos Jalisco \u2014 Guadalajara", href: "/directorio/jalisco" },
    { label: "Bomberos Nuevo Le\xF3n \u2014 Monterrey", href: "/directorio/nuevo-leon" },
    { label: "Bomberos Puebla", href: "/directorio/puebla" },
    { label: "Bomberos Quer\xE9taro", href: "/directorio/queretaro" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "ANSI Z87.1 / EN 166" },
    { label: "Lente", valor: "Policarbonato una pieza" },
    { label: "Dise\xF1o", valor: "Envolvente 180\xB0" },
    { label: "UV", valor: "UV 400 \u2014 99.9 %" },
    { label: "Peso", valor: "< 30 g" },
    { label: "Montura", valor: "Nylon / TR-90 flex" },
    { label: "Perfil", valor: "Ultra bajo" },
    { label: "Compatibilidad", valor: "Todo casco NFPA" }
  ];
  const certItems = [
    { code: "ANSI Z87.1", desc: "Resistencia al impacto \u2014 norma americana" },
    { code: "EN 166", desc: "Protecci\xF3n ocular personal \u2014 norma europea" },
    { code: "UV 400", desc: "Bloqueo 99.9 % radiaci\xF3n UVA/UVB" },
    { code: "NFPA 1951", desc: "Compatible con sistema de rescate t\xE9cnico" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para ensayos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Gafas de Seguridad Antiimpacto para Bombero ANSI Z87.1 | BOMBERO.MX", "description": "Gafas de seguridad antiimpacto certificadas ANSI Z87.1 para bomberos y rescatistas. Lente policarbonato envolvente, perfil ultra bajo para casco de rescate. Protecci\xF3n UV 400. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "gafas seguridad bombero",
    "gafas antiimpacto bombero ANSI Z87.1",
    "gafas rescate bombero M\xE9xico",
    "gafas policarbonato bombero",
    "gafas protecci\xF3n UV bombero",
    "gafas extricaci\xF3n bombero",
    "comprar gafas bombero M\xE9xico",
    "gafas envolventes rescate t\xE9cnico"
  ], "canonical": "/productos/gafas-para-bomberos/seguridad", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Gafas y Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos" },
    { label: "Gafas de Seguridad Antiimpacto" }
  ], "heroBadge": "Gafas Antiimpacto \xB7 ANSI Z87.1 \xB7 EN 166", "heroTitle": "Gafas de Seguridad", "heroTitleHighlight": "Antiimpacto para Bombero", "heroSubtitle": "Protecci\xF3n ocular envolvente de perfil ultra bajo para rescate t\xE9cnico, extricaci\xF3n vehicular y operaciones en altura. Lente policarbonato de una pieza con protecci\xF3n UV 400 y tratamiento antiempa\xF1ante. Menos de 30 gramos para uso prolongado sin fatiga.", "heroSeoBlocks": [
    {
      title: "Gafas de Seguridad Antiimpacto ANSI Z87.1 para Bomberos y Rescatistas",
      text: "Las <strong>gafas de seguridad antiimpacto</strong> son la protecci\xF3n visual est\xE1ndar para operaciones de <strong>rescate t\xE9cnico, extricaci\xF3n vehicular y trabajo en espacios confinados</strong>. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de gafas certificadas <strong>ANSI Z87.1 y EN 166</strong> para cuerpos de bomberos, brigadas industriales y protecci\xF3n civil en los <strong>32 estados de M\xE9xico</strong>."
    },
    {
      title: "Perfil Ultra Bajo para Casco de Rescate \u2014 Menos de 30 g",
      text: "El <strong>perfil ultra bajo</strong> de las gafas permite su uso bajo cascos de rescate <strong>NFPA 1951</strong> sin interferir con el sistema de suspensi\xF3n. Con menos de <strong>30 gramos de peso</strong>, el bombero puede usarlas durante horas sin fatiga. Incluyen <strong>ficha t\xE9cnica y certificado de laboratorio</strong> para <strong>licitaciones gubernamentales</strong>."
    }
  ], "ctaBarQuote": "Cotizar Gafas de Seguridad para Bombero", "productoCategoria": "Protecci\xF3n Visual para Bombero", "productoBadges": [
    { modifier: "nfpa", text: "ANSI Z87.1" },
    { modifier: "tpp", text: "EN 166" },
    { modifier: "solas", text: "UV 400" }
  ], "productoTitle": "Gafas de Seguridad", "productoTitleSub": "Antiimpacto ANSI Z87.1", "productoDesc": "Gafas de protecci\xF3n visual envolventes con lente policarbonato de una pieza. Perfil ultra bajo compatible con cascos de rescate NFPA 1951 y NFPA 1977. Montura flexible TR-90 con arcos antideslizantes. Peso inferior a 30 g. Protecci\xF3n UV 400 y tratamiento antiempa\xF1ante.", "productoFeatures": [
    "Lente policarbonato envolvente 180\xB0 antiimpacto",
    "Perfil ultra bajo para casco de rescate NFPA 1951",
    "Peso inferior a 30 g \u2014 uso prolongado sin fatiga",
    "Protecci\xF3n UV 400 \u2014 bloqueo 99.9 % UVA/UVB",
    "Montura TR-90 flexible con arcos antideslizantes",
    "Certificado ANSI Z87.1 + EN 166 incluido"
  ], "productoAppTags": [
    "Rescate vehicular",
    "Extricaci\xF3n",
    "Espacios confinados",
    "Operaciones en altura",
    "Brigadas industriales"
  ], "gallery": [
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Gafas de seguridad antiimpacto para bombero" },
    { src: "/images/directorio/equipo-bomberos-rescate-vehicular-01.avif", alt: "Gafas en operaci\xF3n de rescate vehicular" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo EPP completo con gafas de seguridad" },
    { src: "/images/directorio/rescate-urbano-bomberos-01.avif", alt: "Bomberos en rescate urbano con gafas antiimpacto" },
    { src: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", alt: "Gafas bajo casco de rescate NFPA 1951" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatistas con protecci\xF3n visual en operaci\xF3n" }
  ], "capasEyebrow": "Anatom\xEDa de las Gafas", "capasTitle": "Construcci\xF3n y Componentes", "capasDesc": "Dise\xF1o optimizado para el rescatista: m\xE1xima protecci\xF3n con m\xEDnimo peso y perfil. Cada componente est\xE1 pensado para compatibilidad total con cascos de rescate.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por ANSI Z87.1 y EN 166 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan las Gafas Antiimpacto?", "aplicacionesContent": "<p>Las <strong>gafas de seguridad antiimpacto</strong> son la opci\xF3n de protecci\xF3n visual para operaciones donde el riesgo principal es el impacto de part\xEDculas y fragmentos, no las salpicaduras o el calor radiante.</p><p>Su peso inferior a 30 g y perfil ultra bajo las hacen ideales para operaciones prolongadas de rescate, extricaci\xF3n y trabajo en altura donde la comodidad determina si el bombero las usa o no.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "ANSI Z87.1 + EN 166 \u2014 Protecci\xF3n Visual Certificada", "certsDesc": "Las <strong>gafas de seguridad antiimpacto</strong> cumplen la norma <strong>ANSI Z87.1</strong> americana y <strong>EN 166</strong> europea para protecci\xF3n ocular contra impactos. La protecci\xF3n <strong>UV 400</strong> complementa la seguridad en operaciones al aire libre. Cada par se verifica en laboratorio acreditado <strong>ISO/IEC 17025</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/gafas-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre las Gafas Antiimpacto para Bombero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre gafas antiimpacto, diferencias con el goggle, compatibilidad con cascos y certificaciones.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio ANSI Z87.1 / EN 166.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Las gafas antiimpacto se integran al sistema de rescate t\xE9cnico. Comb\xEDnalas con casco NFPA 1951 y guantes de rescate para protecci\xF3n completa.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/seguridad/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/seguridad/index.astro";
const $$url = "/productos/gafas-para-bomberos/seguridad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
