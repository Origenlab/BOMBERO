import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Dorso \u2014 Nomex\xAE IIIA Ultraligero",
      descripcion: "Tejido Nomex\xAE IIIA de peso reducido (4.5 oz/yd\xB2) dise\xF1ado para m\xE1xima movilidad sin sacrificar protecci\xF3n. Resistencia inherente a la llama \u2014 no se derrite, no arde, no gotea. Ideal para operaciones forestales prolongadas donde el peso del equipo es cr\xEDtico.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA tejido ultraligero" },
        { label: "Peso tela", valor: "4.5 oz/yd\xB2 dorso" },
        { label: "Resistencia llama", valor: "Inherente \u2014 no tratada" },
        { label: "Flexibilidad", valor: "Alta \u2014 articulaciones preformadas" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Palma \u2014 Kevlar\xAE Reforzado",
      descripcion: "Palma de Kevlar\xAE tejido para resistencia mec\xE1nica excepcional. Protege contra abrasi\xF3n, cortes y punciones al manejar herramientas forestales, mangueras y equipos en terreno irregular. Grip antideslizante para trabajo con herramientas manuales.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE tejido reforzado" },
        { label: "Resistencia corte", valor: "Nivel 3 ANSI" },
        { label: "Grip", valor: "Textura antideslizante" },
        { label: "Abrasi\xF3n", valor: "Nivel 4 \u2014 m\xE1xima durabilidad" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Barrera T\xE9rmica \u2014 PBI\xAE Matrix",
      descripcion: "Capa interna de fibra PBI\xAE Matrix que proporciona aislamiento t\xE9rmico sin a\xF1adir volumen. TPP certificado contra calor radiante y brasas suspendidas. Permite transpiraci\xF3n para operaciones de larga duraci\xF3n en clima c\xE1lido.",
      specs: [
        { label: "Material liner", valor: "PBI\xAE Matrix ultrafino" },
        { label: "TPP", valor: "\u2265 18 cal/cm\xB2 m\xEDnimo" },
        { label: "Transpirabilidad", valor: "MVTR > 800 g/m\xB2/24 h" },
        { label: "Peso total guante", valor: "< 180 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Sistema de capas", valor: "3 capas \u2014 dorso + palma + liner" },
    { categoria: "Construcci\xF3n", label: "Dorso principal", valor: "Nomex\xAE IIIA ultraligero 4.5 oz/yd\xB2" },
    { categoria: "Construcci\xF3n", label: "Palma reforzada", valor: "Kevlar\xAE tejido antideslizante" },
    { categoria: "Construcci\xF3n", label: "Barrera t\xE9rmica", valor: "PBI\xAE Matrix ultrafino" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Nomex\xAE certificado NFPA" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 18 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3 ANSI/ISEA 105" },
    { categoria: "Protecci\xF3n", label: "Abrasi\xF3n palma", valor: "Nivel 4 \u2014 m\xE1xima durabilidad" },
    { categoria: "Protecci\xF3n", label: "Resistencia llama", valor: "Inherente \u2014 no se lava" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n dorso mano", valor: "Kevlar\xAE nudillos reforzados" },
    { categoria: "Transpirabilidad", label: "MVTR", valor: "> 800 g/m\xB2/24 h" },
    { categoria: "Transpirabilidad", label: "Ventilaci\xF3n", valor: "Paneles de malla en dedos" },
    { categoria: "Transpirabilidad", label: "Forro interior", valor: "Moisture-wicking antimicrobiano" },
    { categoria: "Ergonom\xEDa", label: "Peso por par", valor: "< 180 g \u2014 ultraligero" },
    { categoria: "Ergonom\xEDa", label: "Articulaciones", valor: "Preformadas \u2014 dedos curvados" },
    { categoria: "Ergonom\xEDa", label: "Cierre mu\xF1eca", valor: "Velcro\xAE ajustable de cierre r\xE1pido" },
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
      titulo: "Incendio Forestal Activo",
      desc: "Combate directo en l\xEDnea de fuego forestal. Protecci\xF3n contra calor radiante, brasas y ramas incandescentes. Peso ultraligero para jornadas de 12+ horas."
    },
    {
      titulo: "Limpieza de Maleza",
      desc: "Remoci\xF3n de vegetaci\xF3n seca con herramientas manuales. Palma Kevlar\xAE resistente a cortes y abrasi\xF3n. Flexibilidad para operaci\xF3n prolongada de motosierras y desbrozadoras."
    },
    {
      titulo: "Quemas Prescritas",
      desc: "Operaciones de quema controlada en terrenos agr\xEDcolas y forestales. TPP \u2265 18 cal/cm\xB2 contra llamaradas s\xFAbitas. Transpirabilidad m\xE1xima para trabajo bajo sol directo."
    },
    {
      titulo: "Zonas Rurales y Pastizales",
      desc: "Incendios de pastizal, matorrales y cultivos. Movilidad total para desplazamientos largos en terreno irregular. Grip antideslizante para manejo de mangueras forestales."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre guantes NFPA 1977 forestales y NFPA 1971 estructurales?",
      a: "Los guantes NFPA 1977 est\xE1n dise\xF1ados para operaciones forestales prolongadas: son m\xE1s ligeros (< 180 g vs. 300+ g), m\xE1s transpirables (MVTR > 800) y priorizan movilidad sobre protecci\xF3n t\xE9rmica extrema (TPP 18 vs. 35). Los guantes estructurales NFPA 1971 son m\xE1s pesados pero ofrecen mayor protecci\xF3n contra calor intenso \u2014 adecuados para incendios en edificios. Para combate forestal, el guante 1977 ultraligero es la opci\xF3n correcta."
    },
    {
      q: "\xBFLa resistencia Nomex\xAE se pierde con el lavado?",
      a: "No. El Nomex\xAE tiene resistencia inherente a la llama \u2014 es parte de su estructura molecular, no un tratamiento superficial. A diferencia de tejidos FR tratados qu\xEDmicamente, el Nomex\xAE mantiene su protecci\xF3n durante toda la vida \xFAtil del guante incluso tras m\xFAltiples lavados industriales."
    },
    {
      q: "\xBFEl guante incluye certificado de laboratorio?",
      a: "S\xED. Cada lote incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita el cumplimiento de NFPA 1977 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales y adquisiciones institucionales en M\xE9xico."
    },
    {
      q: "\xBFCu\xE1nto dura el guante en condiciones de uso real?",
      a: "Con cuidado adecuado: 18\u201324 meses en brigadas forestales de uso intensivo, hasta 3 a\xF1os en cuerpos municipales de uso moderado. El Kevlar\xAE en palma es el punto cr\xEDtico \u2014 inspecciona regularmente por abrasi\xF3n o quemaduras. La certificaci\xF3n NFPA 1977 exige retiro tras exposici\xF3n a llama directa sostenida."
    },
    {
      q: "\xBFCon qu\xE9 EPP forestal NFPA 1977 es compatible este guante?",
      a: "Compatible con traje forestal NFPA 1977, casco forestal NFPA 1977, botas forestales de cuero y gafas de protecci\xF3n ANSI Z87.1. Para protecci\xF3n integral, todos los componentes deben cumplir con normativas forestales \u2014 no mezclar con EPP estructural NFPA 1971."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 24\u201348 h en CDMX y \xE1rea metropolitana, 3\u20135 d\xEDas al resto de la rep\xFAblica. Tallas especiales (XS, 2XL) o pedidos institucionales: 2\u20133 semanas. Env\xEDo incluido en pedidos mayores a 15 pares."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Guantes para combate estructural con mayor protecci\xF3n t\xE9rmica TPP \u2265 35. Dise\xF1ados para incendios en edificios.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Guantes Estructurales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes de Rescate T\xE9cnico",
      badge: "NFPA 1951",
      description: "Guantes especializados para operaciones de rescate urbano y t\xE9cnico. Alta destreza y protecci\xF3n mec\xE1nica.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes HazMat Qu\xEDmicos",
      badge: "NFPA 1994",
      description: "Guantes para operaciones con materiales peligrosos. Resistencia qu\xEDmica certificada y compatibles con traje encapsulado.",
      href: "/productos/guantes-para-bomberos/hazmat",
      buttonText: "Ver Guantes HAZMAT",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
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
    { label: "Palma de Cuero Reforzada", href: "/productos/guantes-para-bomberos/forestales/palma-cuero" },
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
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Forestales NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Forestal Completo", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Cascos NFPA 1977 Forestales", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Botas para Incendio Forestal", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Diferencias NFPA 1971 vs 1977", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" }
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
    { label: "Peso par", valor: "< 180 g" },
    { label: "TPP m\xEDnimo", valor: "\u2265 18 cal/cm\xB2" },
    { label: "Dorso", valor: "Nomex\xAE IIIA 4.5 oz" },
    { label: "Palma", valor: "Kevlar\xAE reforzado" },
    { label: "Liner", valor: "PBI\xAE Matrix" },
    { label: "Transpirable", valor: "MVTR > 800" },
    { label: "Corte", valor: "Nivel 3 ANSI" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Protecci\xF3n forestal \u2014 edici\xF3n vigente" },
    { code: "TPP \u2265 18", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica forestal" },
    { code: "ANSI Nivel 3", desc: "Resistencia a cortes y abrasi\xF3n" },
    { code: "Nomex\xAE IIIA", desc: "Resistencia inherente a la llama" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Forestales NFPA 1977 Nomex Ultraligero | BOMBERO.MX", "description": "Guantes forestales NFPA 1977 ultraligeros certificados. Dorso Nomex\xAE IIIA 4.5 oz, palma Kevlar\xAE reforzada, peso < 180 g. TPP \u2265 18 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a toda la rep\xFAblica.", "keywords": [
    "guantes forestales NFPA 1977 ultraligeros",
    "guantes bombero forestal Nomex M\xE9xico",
    "guantes incendio forestal ligeros",
    "guantes NFPA 1977 precio M\xE9xico",
    "guantes forestales Kevlar",
    "guantes combate forestal certificados",
    "guantes forestales transpirables M\xE9xico",
    "comprar guantes forestales NFPA 1977"
  ], "canonical": "/productos/guantes-para-bomberos/forestales/nomex-ultraligero", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" },
    { label: "Nomex Ultraligero" }
  ], "heroBadge": "Guantes Forestales \xB7 NFPA 1977 \xB7 Nomex Ultraligero", "heroTitle": "Guantes Forestales NFPA 1977", "heroTitleHighlight": "Nomex Ultraligero", "heroSubtitle": "El guante forestal m\xE1s ligero del mercado mexicano. Dorso Nomex\xAE IIIA ultraligero (4.5 oz/yd\xB2), palma Kevlar\xAE reforzada y liner PBI\xAE Matrix. Peso total < 180 g por par. TPP \u2265 18 cal/cm\xB2 certificado NFPA 1977. Dise\xF1ado para jornadas forestales prolongadas.", "heroSeoBlocks": [
    {
      title: "Guantes Forestales NFPA 1977 Nomex Ultraligero \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes forestales NFPA 1977 ultraligeros</strong> combinan protecci\xF3n certificada con peso m\xEDnimo (< 180 g). Dorso Nomex\xAE IIIA 4.5 oz/yd\xB2, palma Kevlar\xAE nivel 3 y liner PBI\xAE Matrix con TPP \u2265 18 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos el guante forestal l\xEDder para brigadas forestales, protecci\xF3n civil y bomberos rurales en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada lote de <strong>guantes forestales NFPA 1977</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. TPP \u2265 18 cal/cm\xB2, resistencia inherente Nomex\xAE, palma Kevlar\xAE nivel 3. Compatible con todo el EPP forestal NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Guantes Forestales NFPA 1977", "productoCategoria": "Guantes de Bombero Forestal", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "TPP \u2265 18" },
    { modifier: "solas", text: "< 180 g" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Forestales NFPA 1977", "productoTitleSub": "Nomex Ultraligero", "productoDesc": "El guante forestal m\xE1s ligero del mercado. Dorso Nomex\xAE IIIA 4.5 oz/yd\xB2, palma Kevlar\xAE reforzada antideslizante y liner PBI\xAE Matrix. Peso total < 180 g por par. TPP \u2265 18 cal/cm\xB2 certificado. Incluye ficha t\xE9cnica y certificado.", "productoFeatures": [
    "Ultraligero \u2014 peso < 180 g por par",
    "Dorso Nomex\xAE IIIA 4.5 oz/yd\xB2 transpirable",
    "Palma Kevlar\xAE nivel 3 corte y abrasi\xF3n",
    "TPP \u2265 18 cal/cm\xB2 protecci\xF3n t\xE9rmica",
    "MVTR > 800 \u2014 m\xE1xima ventilaci\xF3n",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Incendio forestal activo",
    "Limpieza de maleza",
    "Quemas prescritas",
    "Pastizales y zonas rurales",
    "Brigadas forestales"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes forestales NFPA 1977 ultraligeros" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bombero forestal en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP forestal completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos forestales trabajando" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal con guantes" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes en operaci\xF3n forestal" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica. La sinergia entre las tres determina el nivel de protecci\xF3n NFPA 1977 sin comprometer movilidad ni peso.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1977 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Forestales Ultraligeros?", "aplicacionesContent": "<p>Los guantes forestales NFPA 1977 son el EPP est\xE1ndar para operaciones de combate forestal prolongadas.</p><p>El dise\xF1o ultraligero reduce la fatiga en jornadas de 12+ horas mientras mantiene protecci\xF3n certificada contra calor radiante, brasas y cortes. Cada capa tiene una funci\xF3n espec\xEDfica \u2014 ninguna puede reemplazar a las dem\xE1s.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El est\xE1ndar forestal que salva vidas", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero forestal. Establece requisitos m\xEDnimos: resistencia a la llama, protecci\xF3n t\xE9rmica, transpirabilidad y durabilidad mec\xE1nica.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/forestales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre los Guantes Forestales NFPA 1977", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre guantes forestales ultraligeros, certificaciones, mantenimiento y compatibilidad con EPP forestal.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1977.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo Forestal", "relacionadosDesc": "Los guantes forestales NFPA 1977 trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con normativas forestales compatibles.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/nomex-ultraligero/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/nomex-ultraligero/index.astro";
const $$url = "/productos/guantes-para-bomberos/forestales/nomex-ultraligero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
