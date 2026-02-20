import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Palma Multicapa Anticorte",
      descripcion: "Capa exterior de cuero sint\xE9tico reforzado con tejido anticorte de alta tenacidad. Fibras HPPE (polietileno de alto rendimiento) entrelazadas en la palma y dedos ofrecen resistencia nivel 4\u20135 EN 388 contra bordes filosos, vidrio roto, l\xE1minas met\xE1licas y herrajes cortantes en escenas de excarcelaci\xF3n.",
      specs: [
        { label: "Material palma", valor: "Cuero sint\xE9tico + HPPE" },
        { label: "Resistencia corte EN 388", valor: "Nivel 4 / 5" },
        { label: "Fibra anticorte", valor: "Polietileno alto rendimiento" },
        { label: "Zonas reforzadas", valor: "Palma completa y dedos" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Refuerzo Kevlar\xAE de Doble Capa",
      descripcion: "Segunda barrera: doble capa de Kevlar\xAE 400 g/m\xB2 en zonas de alto riesgo (entre dedos, nudillos, base del pulgar). Esta configuraci\xF3n duplica la resistencia a cortes por cuchillas circulares (m\xE9todo ISO 13997) y ofrece protecci\xF3n t\xE9rmica moderada contra superficies calientes hasta 150\xB0C.",
      specs: [
        { label: "Material refuerzo", valor: "Kevlar\xAE doble capa 400 g/m\xB2" },
        { label: "Resistencia t\xE9rmica", valor: "Hasta 150\xB0C contacto breve" },
        { label: "Corte circular ISO 13997", valor: "Letra D/E" },
        { label: "Durabilidad", valor: "2\xD7 vida \xFAtil guante est\xE1ndar" }
      ],
      color: "fire"
    },
    {
      num: "03",
      titulo: "Dorso Flexible y Transpirable",
      descripcion: "Tercera capa: dorso en tejido el\xE1stico de fibra sint\xE9tica que permite flexi\xF3n completa de los dedos sin restricci\xF3n. Sistema de evacuaci\xF3n de humedad mantiene las manos secas en operaciones prolongadas. Costuras reforzadas con hilo Kevlar\xAE previenen rupturas en puntos de tensi\xF3n.",
      specs: [
        { label: "Dorso", valor: "Tejido el\xE1stico transpirable" },
        { label: "Flexi\xF3n dedos", valor: "Sin restricci\xF3n \u2014 ergon\xF3mico" },
        { label: "Evacuaci\xF3n humedad", valor: "S\xED \u2014 canales de ventilaci\xF3n" },
        { label: "Costuras", valor: "Hilo Kevlar\xAE reforzado" }
      ],
      color: "smoke"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Tipo de guante", valor: "Rescate anticorte EN 388 nivel 4/5" },
    { categoria: "Construcci\xF3n", label: "Palma", valor: "Cuero sint\xE9tico + HPPE anticorte" },
    { categoria: "Construcci\xF3n", label: "Refuerzos", valor: "Kevlar\xAE doble capa 400 g/m\xB2" },
    { categoria: "Construcci\xF3n", label: "Dorso", valor: "Tejido el\xE1stico transpirable" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "Hilo Kevlar\xAE triple costura" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte EN 388", valor: "Nivel 4 / 5 (m\xE1ximo)" },
    { categoria: "Protecci\xF3n", label: "Corte circular ISO 13997", valor: "Letra D o E" },
    { categoria: "Protecci\xF3n", label: "Resistencia abrasi\xF3n", valor: "Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "Contacto breve hasta 150\xB0C" },
    { categoria: "Ergonom\xEDa", label: "Nivel de destreza", valor: "4 (alto)" },
    { categoria: "Ergonom\xEDa", label: "Grosor total", valor: "2.8 \u2013 3.2 mm" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o mu\xF1eca", valor: "Pu\xF1o extendido 75 mm" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1951 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "EN 388", valor: "4-4-3-D/E" },
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
      titulo: "Excarcelaci\xF3n Vehicular",
      desc: "Protecci\xF3n contra vidrio roto, l\xE1minas cortantes y herrajes filosos en accidentes de tr\xE1nsito. Resistencia nivel 5 previene cortes profundos al manipular estructuras met\xE1licas deformadas."
    },
    {
      titulo: "Rescate en Colapso Estructural",
      desc: "Remoci\xF3n de escombros con bordes irregulares, varillas expuestas y materiales de construcci\xF3n cortantes. El refuerzo Kevlar\xAE doble capa protege en ambientes USAR de alto riesgo."
    },
    {
      titulo: "Operaciones con Herramientas Manuales",
      desc: "Uso seguro de sierras, cizallas, barras de u\xF1a y herramientas hidr\xE1ulicas. Protecci\xF3n anticorte reduce riesgo de lesiones por deslizamiento de herramienta o retroceso brusco."
    },
    {
      titulo: "Rescate Industrial y Ferroviario",
      desc: "Escenarios con maquinaria pesada, rieles met\xE1licos y estructuras de acero cortante. Certificaci\xF3n EN 388 nivel 4/5 cumple requisitos de seguridad industrial en M\xE9xico."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre nivel 4 y nivel 5 de resistencia al corte EN 388?",
      a: "EN 388 nivel 4 resiste cortes de 10\u201320 Newtons de fuerza; nivel 5 resiste > 20 Newtons. En la pr\xE1ctica, nivel 4 protege contra vidrio roto y bordes met\xE1licos moderados; nivel 5 resiste cuchillas industriales y bordes extremadamente filosos. Ambos niveles superan ampliamente la protecci\xF3n de guantes de rescate b\xE1sicos."
    },
    {
      q: "\xBFEl refuerzo anticorte reduce la destreza del guante?",
      a: "Ligeramente. Este guante tiene destreza nivel 4 (alto) versus nivel 5 (m\xE1ximo) del perfil ultrafino. A\xFAn permite manipular mosquetones, cuerdas y herramientas, pero con sensibilidad t\xE1ctil moderadamente reducida. El trade-off es necesario para integrar las capas anticorte sin comprometer la protecci\xF3n."
    },
    {
      q: "\xBFLos guantes anticorte protegen contra agujas y objetos punzantes?",
      a: "S\xED, pero de forma limitada. Este guante tiene resistencia a perforaci\xF3n nivel 3 EN 388 \u2014 suficiente para proteger contra astillas, clavos y objetos moderadamente punzantes. Para protecci\xF3n m\xE1xima contra agujas hipod\xE9rmicas se recomienda el modelo antiperforaci\xF3n especializado con nivel 4."
    },
    {
      q: "\xBFPuedo lavar estos guantes sin perder la protecci\xF3n anticorte?",
      a: "S\xED. La resistencia anticorte proviene de fibras HPPE y Kevlar\xAE entrelazadas en la estructura del tejido, no de tratamientos superficiales. Lavado industrial hasta 60\xB0C no degrada la protecci\xF3n. Evitar blanqueadores y secado industrial > 80\xB0C que pueden da\xF1ar el cuero sint\xE9tico de la palma."
    },
    {
      q: "\xBFSon compatibles con herramientas hidr\xE1ulicas de excarcelaci\xF3n?",
      a: "S\xED. El dise\xF1o de palma reforzada mejora el agarre en mandos de herramientas hidr\xE1ulicas (separadores, cortadores, rams). La protecci\xF3n anticorte nivel 4/5 es fundamental cuando se manipulan herramientas bajo carga que pueden deslizarse o retroceder bruscamente."
    },
    {
      q: "\xBFIncluyen certificaci\xF3n para uso en licitaciones gubernamentales?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica con certificaci\xF3n NFPA 1951 (rescate t\xE9cnico), marcado EN 388 con pictogramas de niveles de protecci\xF3n y certificado de laboratorio ISO/IEC 17025. Documentaci\xF3n v\xE1lida para licitaciones de bomberos y protecci\xF3n civil en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Rescate Perfil Ultrafino",
      badge: "NFPA 1951",
      description: "M\xE1xima destreza nivel 5 para rescate t\xE9cnico y vertical. Grosor 0.6\u20130.8 mm para sensibilidad t\xE1ctil superior.",
      href: "/productos/guantes-para-bomberos/rescate/perfil-ultrafino",
      buttonText: "Ver Perfil Ultrafino",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Rescate Antiperforaci\xF3n",
      badge: "NFPA 1951",
      description: "Protecci\xF3n nivel 4 contra objetos punzantes, agujas y clavos expuestos. Ideal para colapsos y escombros.",
      href: "/productos/guantes-para-bomberos/rescate/antiperforacion",
      buttonText: "Ver Antiperforaci\xF3n",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n t\xE9rmica para incendios estructurales. TPP certificado para combate directo de fuego interior.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes Estructurales",
      image: "/images/directorio/bomberos-accion-incendio-01.avif"
    },
    {
      title: "Botas Rescate T\xE9cnico",
      badge: "NFPA 1951",
      description: "Calzado certificado para rescate t\xE9cnico y excarcelaci\xF3n. Puntera composite y suela antiderrapante.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas Rescate",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Perfil Ultrafino Destreza 5", href: "/productos/guantes-para-bomberos/rescate/perfil-ultrafino" },
    { label: "Palma Reforzada Kevlar\xAE", href: "/productos/guantes-para-bomberos/rescate/palma-kevlar" },
    { label: "Antiperforaci\xF3n Nivel 4", href: "/productos/guantes-para-bomberos/rescate/antiperforacion" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/rescate/muneca-elastica" },
    { label: "Compatible Arn\xE9s y Cuerda", href: "/productos/guantes-para-bomberos/rescate/compatible-arnes" },
    { label: "Ver Todos los Guantes Rescate", href: "/productos/guantes-para-bomberos/rescate" }
  ];
  const epp = [
    { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales NFPA", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Rescate T\xE9cnico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Traje Rescate USAR", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes de Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Producto" },
    { label: "EPP Rescate T\xE9cnico Completo", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" },
    { label: "Norma EN 388 Explicada", href: "/productos/guantes-para-bomberos", tag: "Art\xEDculo" },
    { label: "Herramientas Excarcelaci\xF3n", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" },
    { label: "Botas y Calzado Rescate", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" }
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
    { label: "Corte EN 388", valor: "Nivel 4 / 5" },
    { label: "Abrasi\xF3n", valor: "Nivel 4" },
    { label: "Perforaci\xF3n", valor: "Nivel 3" },
    { label: "Fibra anticorte", valor: "HPPE + Kevlar\xAE 400 g/m\xB2" },
    { label: "Destreza", valor: "Nivel 4" },
    { label: "T\xE9rmica", valor: "Contacto breve 150\xB0C" },
    { label: "Tallas", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Rescate t\xE9cnico y excarcelaci\xF3n" },
    { code: "EN 388", desc: "Resistencia mec\xE1nica 4-4-3-D/E" },
    { code: "Corte Nivel 5", desc: "M\xE1xima protecci\xF3n contra bordes filosos" },
    { code: "HPPE + Kevlar\xAE", desc: "Doble capa anticorte certificada" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Rescate Anticorte EN 388 Nivel 4/5 | BOMBERO.MX", "description": "Guantes de rescate anticorte EN 388 nivel 4/5 certificados NFPA 1951. Fibra HPPE + Kevlar\xAE doble capa. Protecci\xF3n m\xE1xima excarcelaci\xF3n. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes anticorte EN 388",
    "guantes rescate nivel 5 corte",
    "guantes bombero anticorte",
    "guantes NFPA 1951 M\xE9xico",
    "guantes excarcelaci\xF3n anticorte",
    "guantes rescate Kevlar",
    "guantes anticorte bombero precio",
    "comprar guantes anticorte M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/rescate/anticorte-en-388", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Anticorte EN 388" }
  ], "heroBadge": "Guantes de Rescate \xB7 NFPA 1951 \xB7 Anticorte EN 388", "heroTitle": "Guantes de Rescate NFPA 1951", "heroTitleHighlight": "Anticorte EN 388 Nivel 4/5", "heroSubtitle": "M\xE1xima protecci\xF3n contra bordes filosos. Fibra HPPE + Kevlar\xAE doble capa 400 g/m\xB2 en palma y dedos. Resistencia corte nivel 4/5 EN 388 certificada. Ideal para excarcelaci\xF3n vehicular, colapso estructural y rescate industrial.", "heroSeoBlocks": [
    {
      title: "Guantes Anticorte EN 388 Nivel 4/5 \u2014 Protecci\xF3n M\xE1xima M\xE9xico",
      text: "Los <strong>guantes de rescate anticorte EN 388</strong> combinan fibra HPPE (polietileno alto rendimiento) con refuerzos Kevlar\xAE doble capa para resistencia nivel 4/5 contra vidrio roto, l\xE1minas met\xE1licas y bordes extremadamente filosos. En <strong>BOMBERO.MX</strong> distribuimos guantes anticorte certificados NFPA 1951 a cuerpos de bomberos, equipos de excarcelaci\xF3n y brigadas USAR en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1951 y EN 388 con Documentaci\xF3n Completa",
      text: "Cada par de <strong>guantes anticorte nivel 4/5</strong> incluye certificaci\xF3n NFPA 1951 (rescate t\xE9cnico) y marcado EN 388 4-4-3-D/E con pictogramas de protecci\xF3n. Refuerzos Kevlar\xAE 400 g/m\xB2 doble capa. Documentaci\xF3n v\xE1lida para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Durabilidad 2\xD7 superior a guantes de rescate est\xE1ndar."
    }
  ], "ctaBarQuote": "Cotizar Guantes Anticorte EN 388", "productoCategoria": "Guantes de Rescate Anticorte", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1951" },
    { modifier: "anticorte", text: "Corte 4/5" },
    { modifier: "en388", text: "EN 388 4-4-3-D" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Rescate NFPA 1951", "productoTitleSub": "Anticorte EN 388 Nivel 4/5", "productoDesc": "Guantes de rescate con protecci\xF3n anticorte nivel 4/5 EN 388. Fibra HPPE + Kevlar\xAE doble capa 400 g/m\xB2 en zonas cr\xEDticas. Resistencia t\xE9rmica hasta 150\xB0C. Certificaci\xF3n NFPA 1951 incluida para excarcelaci\xF3n y rescate t\xE9cnico.", "productoFeatures": [
    "Anticorte EN 388 nivel 4/5 certificado",
    "HPPE + Kevlar\xAE doble capa 400 g/m\xB2",
    "Resistencia t\xE9rmica contacto 150\xB0C",
    "Destreza nivel 4 \u2014 alto rendimiento",
    "Certificaci\xF3n NFPA 1951 y EN 388",
    "Tallas S a 2XL \u2014 pu\xF1o extendido 75 mm"
  ], "productoAppTags": [
    "Excarcelaci\xF3n vehicular",
    "Colapso estructural",
    "Rescate industrial",
    "Herramientas hidr\xE1ulicas",
    "USAR urbano"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes anticorte EN 388 nivel 4/5" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero con guantes anticorte excarcelaci\xF3n" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Guantes rescate en operaci\xF3n" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "EPP rescate anticorte completo" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Guantes Kevlar doble capa" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento excarcelaci\xF3n vehicular" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Anticorte Multicapa", "capasDesc": "Tres capas especializadas coordinadas para m\xE1xima protecci\xF3n contra bordes filosos sin comprometer destreza ni ergonom\xEDa.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan NFPA 1951 y EN 388 4-4-3-D/E vigentes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Anticorte?", "aplicacionesContent": "<p>Los guantes de rescate anticorte EN 388 nivel 4/5 son el EPP est\xE1ndar para operaciones con riesgo de cortes por vidrio roto, l\xE1minas met\xE1licas y herrajes filosos.</p><p>La certificaci\xF3n nivel 5 representa el m\xE1ximo grado de protecci\xF3n anticorte disponible \u2014 fundamental en excarcelaci\xF3n vehicular, colapso estructural y rescate industrial de alto riesgo.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1951 y EN 388 \u2014 Protecci\xF3n Anticorte M\xE1xima", "certsDesc": "La norma <strong>EN 388</strong> mide resistencia mec\xE1nica mediante cuatro pruebas: abrasi\xF3n, corte por cuchilla, perforaci\xF3n y desgarro. Nivel 4/5 de corte es el m\xE1s alto disponible. <strong>NFPA 1951</strong> certifica el guante completo para rescate t\xE9cnico profesional.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/rescate", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Anticorte EN 388", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre niveles de protecci\xF3n, certificaciones y aplicaciones en rescate y excarcelaci\xF3n.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y certificados NFPA 1951 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Rescate", "relacionadosDesc": "Los guantes anticorte NFPA 1951 trabajan como parte de un sistema. Todos los equipos certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/anticorte-en-388/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/anticorte-en-388/index.astro";
const $$url = "/productos/guantes-para-bomberos/rescate/anticorte-en-388";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
