import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Dorso \u2014 Nomex\xAE IIIA con Kevlar\xAE",
      descripcion: "Tejido mixto Nomex\xAE IIIA con refuerzos Kevlar\xAE en nudillos y articulaciones. Resistencia inherente a la llama combinada con protecci\xF3n mec\xE1nica superior. Paneles preformados para movilidad total en operaciones forestales prolongadas.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA + Kevlar\xAE nudillos" },
        { label: "Peso tela", valor: "5.5 oz/yd\xB2 dorso" },
        { label: "Resistencia llama", valor: "Inherente \u2014 no tratada" },
        { label: "Refuerzos", valor: "Kevlar\xAE en puntos cr\xEDticos" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Palma \u2014 Cuero de Cabra Premium",
      descripcion: "Palma de cuero de cabra curtido para m\xE1xima durabilidad y tacto superior. Material natural que respira mientras ofrece protecci\xF3n excepcional contra abrasi\xF3n, cortes y punciones. Grip natural para herramientas forestales sin necesidad de texturas sint\xE9ticas.",
      specs: [
        { label: "Material", valor: "Cuero de cabra curtido premium" },
        { label: "Espesor", valor: "1.0\u20131.2 mm palma" },
        { label: "Resistencia abrasi\xF3n", valor: "Nivel 4+ \u2014 m\xE1xima" },
        { label: "Grip natural", valor: "Cuero texturizado" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Barrera T\xE9rmica \u2014 Nomex\xAE Acolchado",
      descripcion: "Liner interno de Nomex\xAE acolchado que proporciona aislamiento t\xE9rmico y absorci\xF3n de humedad. TPP \u2265 20 cal/cm\xB2 certificado \u2014 superior al m\xEDnimo NFPA 1977. Tratamiento antimicrobiano para jornadas prolongadas.",
      specs: [
        { label: "Material liner", valor: "Nomex\xAE acolchado + moisture-wicking" },
        { label: "TPP", valor: "\u2265 20 cal/cm\xB2 certificado" },
        { label: "Transpirabilidad", valor: "MVTR > 650 g/m\xB2/24 h" },
        { label: "Peso total guante", valor: "< 220 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Sistema de capas", valor: "3 capas \u2014 dorso + palma + liner" },
    { categoria: "Construcci\xF3n", label: "Dorso principal", valor: "Nomex\xAE IIIA + Kevlar\xAE refuerzos" },
    { categoria: "Construcci\xF3n", label: "Palma reforzada", valor: "Cuero de cabra curtido 1.0\u20131.2 mm" },
    { categoria: "Construcci\xF3n", label: "Barrera t\xE9rmica", valor: "Nomex\xAE acolchado antimicrobiano" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE doble pespunte" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 4 ANSI/ISEA 105" },
    { categoria: "Protecci\xF3n", label: "Abrasi\xF3n palma", valor: "Nivel 4+ \u2014 cuero natural" },
    { categoria: "Protecci\xF3n", label: "Resistencia llama", valor: "Inherente \u2014 no se lava" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n nudillos", valor: "Kevlar\xAE acolchado reforzado" },
    { categoria: "Transpirabilidad", label: "MVTR", valor: "> 650 g/m\xB2/24 h" },
    { categoria: "Transpirabilidad", label: "Material natural", valor: "Cuero respira \u2014 no sint\xE9tico" },
    { categoria: "Transpirabilidad", label: "Forro interior", valor: "Moisture-wicking antimicrobiano" },
    { categoria: "Ergonom\xEDa", label: "Peso por par", valor: "< 220 g \u2014 equilibrio durabilidad" },
    { categoria: "Ergonom\xEDa", label: "Articulaciones", valor: "Preformadas \u2014 dedos curvados" },
    { categoria: "Ergonom\xEDa", label: "Cierre mu\xF1eca", valor: "Velcro\xAE + correa ajustable" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "XS \xB7 S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1977 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" },
    { categoria: "Certificaci\xF3n", label: "Compatible EPP forestal", valor: "S\xED \u2014 todos los fabricantes" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Transpirabilidad": "visibilidad",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Combate Forestal Intensivo",
      desc: "Operaciones de l\xEDnea de fuego con herramientas manuales pesadas. Palma de cuero resiste abrasi\xF3n extrema de palas, pulaskis y mcleods. TPP \u2265 20 cal/cm\xB2 contra brasas y ramas incandescentes."
    },
    {
      titulo: "Operaci\xF3n de Motosierras",
      desc: "Limpieza de vegetaci\xF3n y apertura de brechas cortafuegos. Grip natural del cuero para control superior de motosierra. Nivel 4 resistencia a cortes \u2014 protecci\xF3n certificada."
    },
    {
      titulo: "Rescate en Terreno Forestal",
      desc: "B\xFAsqueda y rescate en zonas quemadas o ardiendo. Durabilidad del cuero en terreno irregular con troncos, rocas y escombros. Kevlar\xAE en nudillos para protecci\xF3n al escalar."
    },
    {
      titulo: "Quemas Controladas Prolongadas",
      desc: "Operaciones de quema prescrita de larga duraci\xF3n. Transpirabilidad del cuero natural para jornadas completas bajo sol. Antimicrobiano en liner para uso multi-d\xEDa."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 cuero de cabra y no cuero de vaca?",
      a: "El cuero de cabra es superior para guantes forestales: m\xE1s flexible (mejor destreza), m\xE1s resistente a la abrasi\xF3n por peso, y transpira mejor que cuero de vaca. El cuero de vaca es m\xE1s grueso y r\xEDgido \u2014 adecuado para soldadura pero no para operaciones forestales de larga duraci\xF3n. NFPA 1977 permite ambos, pero el cuero de cabra premium 1.0\u20131.2 mm es la elecci\xF3n profesional."
    },
    {
      q: "\xBFEl cuero mantiene su protecci\xF3n si se moja?",
      a: "S\xED, pero requiere cuidado. El cuero mojado pierde flexibilidad temporalmente \u2014 debe secarse a temperatura ambiente (nunca fuego directo o secadora). Tras secado completo, aplica acondicionador de cuero espec\xEDfico para mantener flexibilidad. El cuero curtido premium recupera sus propiedades mec\xE1nicas tras secado adecuado."
    },
    {
      q: "\xBFCu\xE1nto dura la palma de cuero en uso intensivo?",
      a: "Con cuidado adecuado: 12\u201318 meses en brigadas forestales de uso diario intensivo, hasta 24 meses en uso moderado. El cuero es m\xE1s duradero que Kevlar\xAE tejido pero requiere mantenimiento: limpieza post-uso, secado correcto, acondicionador mensual. Inspecciona regularmente por grietas o adelgazamiento en zona de agarre."
    },
    {
      q: "\xBFEl guante incluye certificado de laboratorio NFPA 1977?",
      a: "S\xED. Cada lote incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita TPP \u2265 20 cal/cm\xB2, resistencia al corte nivel 4, y cumplimiento de NFPA 1977 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFCon qu\xE9 EPP forestal es compatible este guante?",
      a: "Compatible con traje forestal NFPA 1977, casco forestal NFPA 1977, botas forestales tipo logger y gafas ANSI Z87.1. El dise\xF1o de mu\xF1eca larga (12 cm) permite traslape con manga de traje forestal para protecci\xF3n continua sin gaps."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 24\u201348 h en CDMX y \xE1rea metropolitana, 3\u20135 d\xEDas al resto de la rep\xFAblica. Tallas especiales o pedidos institucionales mayores a 30 pares: 3\u20134 semanas. Env\xEDo incluido en \xF3rdenes institucionales."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Forestales Nomex Ultraligero",
      badge: "NFPA 1977",
      description: "Guante forestal m\xE1s ligero. Dorso Nomex\xAE IIIA, palma Kevlar\xAE, peso < 180 g. Ideal para jornadas muy prolongadas.",
      href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero",
      buttonText: "Guantes Ultraligeros",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Guantes para combate estructural con mayor protecci\xF3n t\xE9rmica TPP \u2265 35. Dise\xF1ados para incendios en edificios.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Guantes Estructurales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Botas Forestales Logger",
      badge: "NFPA 1977",
      description: "Botas forestales tipo logger con protecci\xF3n metatarso y suela Vibram. Dise\xF1adas para terreno forestal irregular.",
      href: "/productos/botas-para-bomberos/forestal",
      buttonText: "Botas Forestales",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Traje completo para combate forestal. Dise\xF1o ultraligero y transpirable compatible con estos guantes.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Trajes Forestales",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Nomex\xAE Ultraligero < 180 g", href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero" },
    { label: "Alta Transpirabilidad", href: "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad" },
    { label: "FR Inherente PBI\xAE", href: "/productos/guantes-para-bomberos/forestales/fr-inherente" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/forestales/muneca-elastica" },
    { label: "Construcci\xF3n Sin Costuras", href: "/productos/guantes-para-bomberos/forestales/sin-costuras" },
    { label: "Ver Todos los Guantes", href: "/productos/guantes-para-bomberos/forestales" }
  ];
  const epp = [
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Forestales Logger", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos", tag: "Ojos" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Forestales NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Forestal Completo", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Mantenimiento de Cuero Forestal", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Botas para Incendio Forestal", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Diferencias Cuero vs Kevlar", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Jalisco \u2014 Guadalajara", href: "/directorio/jalisco" },
    { label: "Bomberos Michoac\xE1n", href: "/directorio/michoacan" },
    { label: "Bomberos Chihuahua", href: "/directorio/chihuahua" },
    { label: "Bomberos Durango", href: "/directorio/durango" },
    { label: "Bomberos Guerrero", href: "/directorio/guerrero" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1977" },
    { label: "Peso par", valor: "< 220 g" },
    { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { label: "Dorso", valor: "Nomex\xAE + Kevlar\xAE" },
    { label: "Palma", valor: "Cuero cabra 1.2 mm" },
    { label: "Liner", valor: "Nomex\xAE acolchado" },
    { label: "Transpirable", valor: "MVTR > 650" },
    { label: "Corte", valor: "Nivel 4 ANSI" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Protecci\xF3n forestal \u2014 edici\xF3n vigente" },
    { code: "TPP \u2265 20", desc: "cal/cm\xB2 \u2014 superior al m\xEDnimo" },
    { code: "ANSI Nivel 4", desc: "Resistencia corte m\xE1xima \u2014 cuero" },
    { code: "Nomex\xAE IIIA", desc: "Resistencia inherente a la llama" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Forestales NFPA 1977 Palma de Cuero | BOMBERO.MX", "description": "Guantes forestales NFPA 1977 palma de cuero certificados. Cuero de cabra premium 1.2 mm, dorso Nomex\xAE + Kevlar\xAE, TPP \u2265 20 cal/cm\xB2. Nivel 4 corte. Ficha t\xE9cnica incluida. Env\xEDo a toda la rep\xFAblica.", "keywords": [
    "guantes forestales palma cuero NFPA 1977",
    "guantes bombero forestal cuero M\xE9xico",
    "guantes incendio forestal resistentes",
    "guantes forestales cuero de cabra",
    "guantes NFPA 1977 cuero precio",
    "guantes combate forestal durables",
    "guantes forestales nivel 4 corte",
    "comprar guantes forestales cuero"
  ], "canonical": "/productos/guantes-para-bomberos/forestales/palma-cuero", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" },
    { label: "Palma de Cuero" }
  ], "heroBadge": "Guantes Forestales \xB7 NFPA 1977 \xB7 Palma de Cuero", "heroTitle": "Guantes Forestales NFPA 1977", "heroTitleHighlight": "Palma de Cuero Premium", "heroSubtitle": "M\xE1xima durabilidad para combate forestal intensivo. Palma de cuero de cabra curtido 1.0\u20131.2 mm, dorso Nomex\xAE IIIA con refuerzos Kevlar\xAE y liner t\xE9rmico Nomex\xAE acolchado. TPP \u2265 20 cal/cm\xB2 certificado NFPA 1977. Nivel 4 resistencia a cortes \u2014 el guante forestal m\xE1s resistente.", "heroSeoBlocks": [
    {
      title: "Guantes Forestales NFPA 1977 Palma de Cuero \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes forestales NFPA 1977 con palma de cuero</strong> combinan durabilidad extrema con protecci\xF3n certificada. Cuero de cabra premium 1.0\u20131.2 mm, dorso Nomex\xAE IIIA + Kevlar\xAE y liner t\xE9rmico con TPP \u2265 20 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos el guante forestal m\xE1s resistente para brigadas intensivas, protecci\xF3n civil y bomberos rurales en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada lote de <strong>guantes forestales con palma de cuero</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. TPP \u2265 20 cal/cm\xB2, resistencia inherente Nomex\xAE, cuero nivel 4 corte. Compatible con todo el EPP forestal NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Guantes Forestales Palma Cuero", "productoCategoria": "Guantes de Bombero Forestal", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "TPP \u2265 20" },
    { modifier: "solas", text: "Nivel 4 Corte" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Forestales NFPA 1977", "productoTitleSub": "Palma de Cuero Premium", "productoDesc": "M\xE1xima durabilidad para combate forestal. Palma de cuero de cabra curtido 1.0\u20131.2 mm, dorso Nomex\xAE IIIA + Kevlar\xAE reforzado, liner t\xE9rmico Nomex\xAE acolchado. TPP \u2265 20 cal/cm\xB2 certificado. Nivel 4 resistencia a cortes. Incluye ficha t\xE9cnica y certificado.", "productoFeatures": [
    "Palma cuero de cabra premium 1.0\u20131.2 mm",
    "Nivel 4 resistencia a corte y abrasi\xF3n",
    "Dorso Nomex\xAE IIIA + Kevlar\xAE nudillos",
    "TPP \u2265 20 cal/cm\xB2 protecci\xF3n t\xE9rmica",
    "Grip natural \u2014 sin texturas sint\xE9ticas",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Combate forestal intensivo",
    "Operaci\xF3n de motosierras",
    "Rescate en terreno forestal",
    "Quemas controladas",
    "Brigadas forestales"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes forestales palma de cuero" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bombero forestal en operaci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP forestal completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos forestales trabajando" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con herramientas" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes en operaci\xF3n forestal" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica. El cuero de cabra premium en palma ofrece durabilidad y grip superiores a materiales sint\xE9ticos.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1977 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes con Palma de Cuero?", "aplicacionesContent": "<p>Los guantes forestales con palma de cuero son el EPP de elecci\xF3n para operaciones forestales intensivas.</p><p>El cuero natural ofrece durabilidad superior a materiales sint\xE9ticos mientras mantiene transpirabilidad y grip excepcional. Ideal para brigadas que operan herramientas pesadas en terreno forestal irregular.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El est\xE1ndar forestal que salva vidas", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero forestal. Establece requisitos m\xEDnimos: resistencia a la llama, protecci\xF3n t\xE9rmica, transpirabilidad y durabilidad mec\xE1nica.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/forestales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre los Guantes Forestales con Palma de Cuero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre guantes forestales con palma de cuero, mantenimiento, durabilidad y compatibilidad con EPP forestal.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1977.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo Forestal", "relacionadosDesc": "Los guantes forestales con palma de cuero trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con normativas forestales compatibles.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/palma-cuero/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/palma-cuero/index.astro";
const $$url = "/productos/guantes-para-bomberos/forestales/palma-cuero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
