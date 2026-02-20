import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Palma Sint\xE9tica de Alta Destreza",
      descripcion: "Capa exterior en cuero sint\xE9tico de grano ultrafino 0.6\u20130.8 mm. Dise\xF1ada para m\xE1xima sensibilidad t\xE1ctil en operaciones de rescate t\xE9cnico donde el bombero necesita manipular herramientas peque\xF1as, mosquetones, cuerdas y dispositivos de seguridad con precisi\xF3n milim\xE9trica.",
      specs: [
        { label: "Material palma", valor: "Cuero sint\xE9tico ultrafino" },
        { label: "Grosor palma", valor: "0.6 \u2013 0.8 mm" },
        { label: "Destreza", valor: "Nivel 5 (m\xE1ximo)" },
        { label: "Agarre", valor: "Textura microdot antideslizante" }
      ],
      color: "smoke"
    },
    {
      num: "02",
      titulo: "Refuerzo Kevlar\xAE en Dedos y Nudillos",
      descripcion: "Segunda capa: refuerzos estrat\xE9gicos de fibra Kevlar\xAE en zonas cr\xEDticas (yemas de dedos, nudillos, entre dedos). Protecci\xF3n contra cortes y abrasi\xF3n sin comprometer la flexibilidad. El Kevlar\xAE aporta resistencia t\xE9rmica moderada para escenarios de rescate vehicular con riesgo de superficies calientes.",
      specs: [
        { label: "Material refuerzo", valor: "Kevlar\xAE 200 g/m\xB2" },
        { label: "Resistencia corte", valor: "EN 388 nivel 3" },
        { label: "Resistencia abrasi\xF3n", valor: "EN 388 nivel 4" },
        { label: "Zonas reforzadas", valor: "Dedos, nudillos, palma lateral" }
      ],
      color: "ember"
    },
    {
      num: "03",
      titulo: "Liner Transpirable Antihumedad",
      descripcion: "Tercera capa: forro interno en tejido t\xE9cnico de evacuaci\xF3n de humedad. Mantiene las manos secas durante operaciones prolongadas de rescate en espacios confinados o excarcelaci\xF3n. Costuras planas reducen puntos de fricci\xF3n y previenen ampollas en trabajos de cuerda extendidos.",
      specs: [
        { label: "Liner", valor: "Poli\xE9ster t\xE9cnico transpirable" },
        { label: "Evacuaci\xF3n humedad", valor: "S\xED \u2014 wicking activo" },
        { label: "Costuras", valor: "Planas \u2014 sin fricci\xF3n" },
        { label: "Certificaci\xF3n", valor: "NFPA 1951 aprobado" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Tipo de guante", valor: "Rescate t\xE9cnico \u2014 perfil ultrafino" },
    { categoria: "Construcci\xF3n", label: "Palma", valor: "Cuero sint\xE9tico 0.6\u20130.8 mm" },
    { categoria: "Construcci\xF3n", label: "Refuerzos", valor: "Kevlar\xAE 200 g/m\xB2 dedos y nudillos" },
    { categoria: "Construcci\xF3n", label: "Liner interno", valor: "Poli\xE9ster t\xE9cnico transpirable" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "Planas \u2014 reforzadas Kevlar\xAE" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte EN 388", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Resistencia abrasi\xF3n", valor: "Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n", valor: "Nivel 2" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n t\xE9rmica", valor: "Moderada \u2014 rescate no incendio" },
    { categoria: "Ergonom\xEDa", label: "Nivel de destreza", valor: "5 (m\xE1ximo)" },
    { categoria: "Ergonom\xEDa", label: "Grosor total", valor: "< 2.5 mm" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o mu\xF1eca", valor: "Pu\xF1o ajustado sin cierre" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1951 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "EN 388", valor: "3-4-2-X" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Rescate T\xE9cnico en Altura",
      desc: "Manipulaci\xF3n de cuerdas, mosquetones, descensores y sistemas de anclaje. La destreza nivel 5 permite operaciones de precisi\xF3n a decenas de metros de altura."
    },
    {
      titulo: "Excarcelaci\xF3n Vehicular",
      desc: "Uso de herramientas hidr\xE1ulicas y manuales en accidentes de tr\xE1nsito. Sensibilidad t\xE1ctil para localizar v\xEDctimas entre herrajes sin comprometer la seguridad del rescatista."
    },
    {
      titulo: "Espacios Confinados",
      desc: "Trabajos en tanques, silos, alcantarillas y estructuras colapsadas. El perfil ultrafino facilita el acceso a lugares estrechos donde guantes gruesos no entran."
    },
    {
      titulo: "B\xFAsqueda y Rescate Urbano USAR",
      desc: "Remoci\xF3n de escombros, evaluaci\xF3n estructural y localizaci\xF3n de v\xEDctimas en colapsos. Protecci\xF3n contra cortes y abrasi\xF3n sin perder sensibilidad en las yemas de los dedos."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 significa nivel de destreza 5 en un guante de rescate?",
      a: "El nivel de destreza mide la capacidad de manipular objetos peque\xF1os con el guante puesto. Nivel 5 es el m\xE1ximo \u2014 permite enhebrar cuerdas, ajustar mosquetones, operar radios y usar herramientas de precisi\xF3n sin quitarse el guante. Fundamental en rescate t\xE9cnico donde cada segundo cuenta."
    },
    {
      q: "\xBFEste guante protege contra incendios estructurales?",
      a: "No. El guante de rescate NFPA 1951 est\xE1 dise\xF1ado para rescate t\xE9cnico y excarcelaci\xF3n, no para combate directo de incendios. Para protecci\xF3n t\xE9rmica en incendios estructurales se requiere un guante NFPA 1971 con mayor aislamiento y resistencia a la llama."
    },
    {
      q: "\xBFEl perfil ultrafino compromete la durabilidad del guante?",
      a: "No. Los refuerzos estrat\xE9gicos de Kevlar\xAE en palma, dedos y nudillos compensan el grosor reducido. En pruebas de abrasi\xF3n EN 388, este guante alcanza nivel 4 \u2014 superior a muchos guantes de mayor grosor. La clave est\xE1 en reforzar solo donde es necesario."
    },
    {
      q: "\xBFPor qu\xE9 usar cuero sint\xE9tico en lugar de cuero natural?",
      a: "El cuero sint\xE9tico de grano ultrafino ofrece mayor homogeneidad, no se endurece con el agua, mantiene la destreza tras lavados industriales y permite grosores < 0.8 mm imposibles en cuero natural. Adem\xE1s, el cuero sint\xE9tico es m\xE1s resistente a productos qu\xEDmicos moderados en escenas de rescate."
    },
    {
      q: "\xBFPuedo usar este guante con sistemas de cuerda y arn\xE9s?",
      a: "S\xED. El dise\xF1o de perfil ultrafino y las costuras planas previenen enganches con cuerdas, mosquetones y dispositivos de descenso. La palma texturizada microdot mejora el agarre en cuerdas h\xFAmedas o sucias. Compatible con todos los sistemas de rescate vertical certificados."
    },
    {
      q: "\xBFIncluye certificado NFPA 1951 y EN 388?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica con certificaci\xF3n NFPA 1951 (rescate t\xE9cnico) y marcado EN 388 con niveles de resistencia a corte, abrasi\xF3n, perforaci\xF3n y desgarro. Documentaci\xF3n v\xE1lida para licitaciones gubernamentales en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n t\xE9rmica para incendios estructurales. TPP certificado para combate directo de fuego interior.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes Estructurales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Dise\xF1o ligero transpirable para combate forestal prolongado. Resistencia a brasas y abrasi\xF3n en campo abierto.",
      href: "/productos/guantes-para-bomberos/forestales",
      buttonText: "Ver Guantes Forestales",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Guantes HAZMAT Qu\xEDmicos",
      badge: "NFPA 1991",
      description: "Protecci\xF3n contra materiales peligrosos y agentes qu\xEDmicos. Compatible con trajes encapsulados nivel A y B.",
      href: "/productos/guantes-para-bomberos/hazmat",
      buttonText: "Ver Guantes HAZMAT",
      image: "/images/directorio/bomberos-accion-incendio-01.avif"
    },
    {
      title: "Casco Rescate T\xE9cnico NFPA 1951",
      badge: "NFPA 1951",
      description: "Casco certificado para rescate t\xE9cnico. Compatible con sistemas de cuerda y arn\xE9s. Alta visibilidad.",
      href: "/productos/cascos-para-bomberos",
      buttonText: "Ver Cascos de Rescate",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Anticorte EN 388 Nivel 4/5", href: "/productos/guantes-para-bomberos/rescate/anticorte-en-388" },
    { label: "Palma Reforzada Kevlar\xAE", href: "/productos/guantes-para-bomberos/rescate/palma-kevlar" },
    { label: "Antiperforaci\xF3n Nivel 3", href: "/productos/guantes-para-bomberos/rescate/antiperforacion" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/rescate/muneca-elastica" },
    { label: "Compatible Arn\xE9s y Cuerda", href: "/productos/guantes-para-bomberos/rescate/compatible-arnes" },
    { label: "Ver Todos los Guantes Rescate", href: "/productos/guantes-para-bomberos/rescate" }
  ];
  const epp = [
    { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales NFPA", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Rescate T\xE9cnico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Traje Rescate USAR", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes de Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales", tag: "Producto" },
    { label: "EPP Rescate T\xE9cnico Completo", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" },
    { label: "Cascos NFPA 1951 Rescate", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Botas y Calzado Rescate", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Herramientas Rescate T\xE9cnico", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" }
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
    { label: "Norma", valor: "NFPA 1951" },
    { label: "Destreza", valor: "Nivel 5 (m\xE1ximo)" },
    { label: "Grosor palma", valor: "0.6 \u2013 0.8 mm" },
    { label: "Corte EN 388", valor: "Nivel 3" },
    { label: "Abrasi\xF3n", valor: "Nivel 4" },
    { label: "Refuerzo", valor: "Kevlar\xAE 200 g/m\xB2" },
    { label: "Liner", valor: "Transpirable antihumedad" },
    { label: "Tallas", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Rescate t\xE9cnico y excarcelaci\xF3n" },
    { code: "EN 388", desc: "Resistencia mec\xE1nica 3-4-2-X" },
    { code: "Destreza 5", desc: "Nivel m\xE1ximo de sensibilidad t\xE1ctil" },
    { code: "Kevlar\xAE", desc: "Refuerzos certificados dedos y palma" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Rescate NFPA 1951 Perfil Ultrafino | BOMBERO.MX", "description": "Guantes de rescate t\xE9cnico NFPA 1951 perfil ultrafino. Destreza nivel 5, grosor 0.6\u20130.8 mm, refuerzos Kevlar\xAE. Certificaci\xF3n EN 388. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes rescate perfil ultrafino",
    "guantes bombero destreza m\xE1xima",
    "guantes rescate t\xE9cnico delgados",
    "guantes NFPA 1951 M\xE9xico",
    "guantes rescate vertical",
    "guantes excarcelaci\xF3n bombero",
    "guantes rescate destreza nivel 5",
    "comprar guantes rescate M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/rescate/perfil-ultrafino", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Perfil Ultrafino" }
  ], "heroBadge": "Guantes de Rescate \xB7 NFPA 1951 \xB7 Perfil Ultrafino", "heroTitle": "Guantes de Rescate NFPA 1951", "heroTitleHighlight": "Perfil Ultrafino", "heroSubtitle": "M\xE1xima destreza para rescate t\xE9cnico. Perfil ultrafino 0.6\u20130.8 mm con nivel de destreza 5 certificado. Refuerzos Kevlar\xAE en zonas cr\xEDticas, liner transpirable y palma texturizada microdot. Certificaci\xF3n NFPA 1951 y EN 388 incluida.", "heroSeoBlocks": [
    {
      title: "Guantes de Rescate NFPA 1951 Perfil Ultrafino \u2014 M\xE1xima Destreza M\xE9xico",
      text: "Los <strong>guantes de rescate t\xE9cnico perfil ultrafino</strong> combinan sensibilidad t\xE1ctil nivel 5 con protecci\xF3n certificada NFPA 1951. Grosor de palma 0.6\u20130.8 mm permite manipular cuerdas, mosquetones y herramientas de precisi\xF3n sin quitarse el guante. En <strong>BOMBERO.MX</strong> distribuimos guantes de rescate certificados a cuerpos de bomberos, equipos USAR y brigadas de rescate en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1951 y EN 388 con Documentaci\xF3n Completa",
      text: "Cada par de <strong>guantes rescate perfil ultrafino</strong> incluye certificaci\xF3n NFPA 1951 (rescate t\xE9cnico) y marcado EN 388 nivel 3-4-2-X. Refuerzos Kevlar\xAE 200 g/m\xB2 en dedos y nudillos. Documentaci\xF3n v\xE1lida para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Compatible con todo el EPP de rescate certificado."
    }
  ], "ctaBarQuote": "Cotizar Guantes Rescate Ultrafinos", "productoCategoria": "Guantes de Rescate T\xE9cnico", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1951" },
    { modifier: "destreza", text: "Destreza 5" },
    { modifier: "en388", text: "EN 388 3-4-2-X" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Rescate NFPA 1951", "productoTitleSub": "Perfil Ultrafino", "productoDesc": "Guantes de rescate t\xE9cnico con perfil ultrafino 0.6\u20130.8 mm. Destreza nivel 5 (m\xE1ximo) para manipulaci\xF3n de cuerdas, mosquetones y herramientas de precisi\xF3n. Refuerzos Kevlar\xAE en zonas cr\xEDticas. Certificaci\xF3n NFPA 1951 y EN 388 incluida.", "productoFeatures": [
    "Perfil ultrafino 0.6\u20130.8 mm grosor palma",
    "Destreza nivel 5 \u2014 m\xE1xima sensibilidad",
    "Refuerzos Kevlar\xAE dedos y nudillos",
    "Liner transpirable antihumedad",
    "Certificaci\xF3n NFPA 1951 y EN 388",
    "Tallas S a 2XL \u2014 costuras planas"
  ], "productoAppTags": [
    "Rescate t\xE9cnico",
    "Rescate vertical",
    "Excarcelaci\xF3n vehicular",
    "Espacios confinados",
    "USAR urbano"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes rescate perfil ultrafino NFPA 1951" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero con guantes rescate t\xE9cnico" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP rescate t\xE9cnico completo" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Operaci\xF3n de rescate bomberos" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento rescate t\xE9cnico" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes rescate en operaci\xF3n" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema de 3 Capas Ultrafino", "capasDesc": "Cada capa optimizada para m\xE1xima destreza sin comprometer la protecci\xF3n. El perfil ultrafino no significa menor seguridad \u2014 solo protecci\xF3n m\xE1s inteligente.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan NFPA 1951 y EN 388 vigentes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Ultrafinos?", "aplicacionesContent": "<p>Los guantes de rescate t\xE9cnico perfil ultrafino son el EPP est\xE1ndar para operaciones donde la destreza manual es cr\xEDtica.</p><p>El nivel de destreza 5 permite manipular objetos peque\xF1os, ajustar sistemas de cuerda y operar herramientas de precisi\xF3n sin quitarse el guante \u2014 fundamental cuando cada segundo cuenta en un rescate.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1951 \u2014 Rescate T\xE9cnico Profesional", "certsDesc": "La norma <strong>NFPA 1951</strong> (<em>Standard on Protective Ensembles for Technical Rescue</em>) establece requisitos para guantes de rescate t\xE9cnico, excarcelaci\xF3n y USAR. Complementada con <strong>EN 388</strong> que mide resistencia mec\xE1nica: corte, abrasi\xF3n, perforaci\xF3n y desgarro.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes de Rescate Ultrafinos", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre destreza, protecci\xF3n, certificaciones y aplicaciones en rescate t\xE9cnico.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y certificados NFPA 1951 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Rescate", "relacionadosDesc": "Los guantes de rescate NFPA 1951 trabajan como parte de un sistema. Todos los equipos certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/perfil-ultrafino/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/perfil-ultrafino/index.astro";
const $$url = "/productos/guantes-para-bomberos/rescate/perfil-ultrafino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
