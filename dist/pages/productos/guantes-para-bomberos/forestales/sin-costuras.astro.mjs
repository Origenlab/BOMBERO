import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Dorso \u2014 Tejido Seamless Nomex\xAE",
      descripcion: "Construcci\xF3n revolucionaria sin costuras mediante tejido circular seamless. Elimina 100% de los puntos de fricci\xF3n que causan rozaduras en jornadas prolongadas. Nomex\xAE IIIA de peso ligero (4.8 oz/yd\xB2) con resistencia inherente a la llama. Tecnolog\xEDa de tejido 3D que se adapta a la anatom\xEDa de cada mano.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA seamless circular" },
        { label: "Peso tela", valor: "4.8 oz/yd\xB2 \u2014 ligero" },
        { label: "Construcci\xF3n", valor: "Sin costuras \u2014 0% fricci\xF3n" },
        { label: "Resistencia llama", valor: "Inherente \u2014 certificada NFPA" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Palma \u2014 Kevlar\xAE Microgrip Seamless",
      descripcion: "Palma de Kevlar\xAE integrada mediante tejido seamless \u2014 sin costuras que causen puntos de desgaste prematuro. Micro-textura grip natural distribuida uniformemente sin costuras que acumulen suciedad. Nivel 3 resistencia a cortes con durabilidad superior al eliminar puntos d\xE9biles de costuras.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE seamless integrado" },
        { label: "Resistencia corte", valor: "Nivel 3 ANSI" },
        { label: "Grip", valor: "Micro-textura uniforme sin costuras" },
        { label: "Durabilidad", valor: "Superior \u2014 sin puntos d\xE9biles" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Liner \u2014 Sistema Bonded Seamless",
      descripcion: "Liner t\xE9rmico bonded (adherido t\xE9rmicamente) al dorso y palma \u2014 tecnolog\xEDa seamless completa sin una sola costura interna. Nomex\xAE + PBI\xAE blend ultrafino proporciona TPP \u2265 19 cal/cm\xB2 sin volumen. Tratamiento moisture-wicking integrado molecularmente. Peso total < 175 g \u2014 el guante forestal seamless m\xE1s ligero.",
      specs: [
        { label: "Material liner", valor: "Nomex\xAE + PBI\xAE blend bonded" },
        { label: "TPP", valor: "\u2265 19 cal/cm\xB2 certificado" },
        { label: "Construcci\xF3n", valor: "100% seamless \u2014 0 costuras" },
        { label: "Peso total guante", valor: "< 175 g por par \u2014 r\xE9cord" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Sistema de capas", valor: "3 capas bonded \u2014 100% seamless" },
    { categoria: "Construcci\xF3n", label: "Dorso principal", valor: "Nomex\xAE IIIA seamless circular" },
    { categoria: "Construcci\xF3n", label: "Palma reforzada", valor: "Kevlar\xAE seamless integrado" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE + PBI\xAE blend bonded" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "0 \u2014 construcci\xF3n 100% seamless" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 19 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3 ANSI/ISEA 105" },
    { categoria: "Protecci\xF3n", label: "Abrasi\xF3n palma", valor: "Nivel 3+ \u2014 sin puntos d\xE9biles" },
    { categoria: "Protecci\xF3n", label: "Resistencia llama", valor: "Inherente \u2014 no se lava" },
    { categoria: "Protecci\xF3n", label: "Durabilidad", valor: "Superior \u2014 sin falla por costuras" },
    { categoria: "Transpirabilidad", label: "MVTR", valor: "> 850 g/m\xB2/24 h" },
    { categoria: "Transpirabilidad", label: "Ventilaci\xF3n", valor: "Tejido seamless transpirable" },
    { categoria: "Transpirabilidad", label: "Forro interior", valor: "Moisture-wicking molecular" },
    { categoria: "Ergonom\xEDa", label: "Peso por par", valor: "< 175 g \u2014 seamless m\xE1s ligero" },
    { categoria: "Ergonom\xEDa", label: "Articulaciones", valor: "Tejido 3D anat\xF3mico adaptable" },
    { categoria: "Ergonom\xEDa", label: "Confort", valor: "M\xE1ximo \u2014 0% rozaduras" },
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
      titulo: "Jornadas Forestales Extremadamente Largas",
      desc: "Operaciones de 14+ horas donde el confort es absolutamente cr\xEDtico. Construcci\xF3n 100% seamless elimina rozaduras, ampollas y puntos de presi\xF3n. Esencial para brigadas que operan m\xFAltiples d\xEDas consecutivos en campamentos remotos."
    },
    {
      titulo: "Bomberos con Sensibilidad Cut\xE1nea",
      desc: "Personal con piel sensible o historial de rozaduras con guantes tradicionales. Sin costuras = sin fricci\xF3n = sin lesiones cut\xE1neas. Permite trabajo prolongado sin dolor ni molestias que comprometan concentraci\xF3n."
    },
    {
      titulo: "Operaciones con Manos H\xFAmedas",
      desc: "Trabajo en condiciones de alta humedad o sudoraci\xF3n extrema. Las costuras tradicionales acumulan humedad y causan fricci\xF3n \u2014 la construcci\xF3n seamless elimina este problema. Moisture-wicking molecular mantiene manos secas uniformemente."
    },
    {
      titulo: "Prevenci\xF3n de Infecciones Post-Rozadura",
      desc: "Ambientes forestales donde rozaduras pueden infectarse r\xE1pidamente (acceso limitado a higiene). Construcci\xF3n seamless previene rozaduras en primer lugar \u2014 la mejor prevenci\xF3n de infecciones. Cr\xEDtico en campa\xF1as multi-semana remotas."
    }
  ];
  const faqs = [
    {
      q: "\xBFC\xF3mo se fabrica un guante completamente sin costuras?",
      a: "Se utiliza tecnolog\xEDa de tejido circular seamless (similar a calcetines t\xE9cnicos premium) que teje el guante como una sola pieza tubular. El dorso, palma y dedos se tejen en un solo proceso sin necesidad de unir paneles. El liner se adhiere t\xE9rmicamente (bonded) mediante calor y presi\xF3n \u2014 no con costuras. El resultado: 0 costuras en todo el guante. Es m\xE1s complejo y costoso de fabricar, pero el confort es incomparable."
    },
    {
      q: "\xBFLa construcci\xF3n seamless compromete la durabilidad?",
      a: "Al contrario \u2014 aumenta la durabilidad. Las costuras son el punto de falla m\xE1s com\xFAn en guantes tradicionales: se abren, deshilachan o rompen. Al eliminar costuras, el guante seamless elimina estos puntos d\xE9biles. La abrasi\xF3n se distribuye uniformemente por toda la palma en lugar de concentrarse en l\xEDneas de costura. Vida \xFAtil t\xEDpicamente 20\u201330% superior a guantes con costuras."
    },
    {
      q: "\xBFPuedo lavar el guante seamless sin que se da\xF1e?",
      a: "S\xED. La construcci\xF3n bonded (adherida t\xE9rmicamente) resiste lavados industriales sin separarse \u2014 el adhesivo t\xE9rmico es permanente. De hecho, el guante seamless es m\xE1s f\xE1cil de limpiar: sin costuras donde se acumule suciedad o residuos. Lava en lavadora industrial modo delicado, agua fr\xEDa, secado al aire. El Nomex\xAE y Kevlar\xAE mantienen sus propiedades tras cientos de lavados."
    },
    {
      q: "\xBFEl guante incluye certificado de laboratorio NFPA 1977?",
      a: "S\xED. Cada lote incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita TPP \u2265 19 cal/cm\xB2, resistencia al corte nivel 3, y cumplimiento de NFPA 1977 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico. La tecnolog\xEDa seamless no afecta la certificaci\xF3n."
    },
    {
      q: "\xBFCu\xE1nto duran sin desarrollar rozaduras en uso real?",
      a: "La construcci\xF3n seamless elimina rozaduras durante toda la vida \xFAtil del guante. A diferencia de guantes con costuras (que pueden causar rozaduras desde el d\xEDa 1), el guante seamless es confortable desde el primer uso hasta el retiro por desgaste de palma. Bomberos reportan usar el mismo par durante jornadas de 14+ horas sin molestias \u2014 imposible con construcci\xF3n tradicional."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 3\u20135 d\xEDas h\xE1biles en CDMX y \xE1rea metropolitana, 5\u20137 d\xEDas al resto de la rep\xFAblica. Tallas especiales o pedidos institucionales: 3\u20134 semanas (tecnolog\xEDa seamless requiere fabricaci\xF3n especializada). Env\xEDo incluido en \xF3rdenes mayores a 15 pares."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Forestales Mu\xF1eca El\xE1stica",
      badge: "NFPA 1977",
      description: "Guante forestal con mu\xF1eca el\xE1stica dual para m\xE1ximo confort. Sistema autom\xE1tico sin comprimir circulaci\xF3n.",
      href: "/productos/guantes-para-bomberos/forestales/muneca-elastica",
      buttonText: "Guantes Mu\xF1eca El\xE1stica",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Forestales Nomex Ultraligero",
      badge: "NFPA 1977",
      description: "Guante forestal ultraligero < 180 g. Nomex\xAE IIIA dorso, Kevlar\xAE palma. Ideal para jornadas muy prolongadas.",
      href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero",
      buttonText: "Guantes Ultraligeros",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Forestales Alta Transpirabilidad",
      badge: "NFPA 1977",
      description: "Guante forestal con MVTR > 1,200. Malla ventilada y Coolmax\xAE FR para clima caluroso extremo.",
      href: "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad",
      buttonText: "Guantes Transpirables",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Traje forestal completo compatible con guantes seamless. Sistema integrado de protecci\xF3n forestal.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Trajes Forestales",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Nomex\xAE Ultraligero < 180 g", href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero" },
    { label: "Palma de Cuero Reforzada", href: "/productos/guantes-para-bomberos/forestales/palma-cuero" },
    { label: "Alta Transpirabilidad", href: "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad" },
    { label: "FR Inherente PBI\xAE", href: "/productos/guantes-para-bomberos/forestales/fr-inherente" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/forestales/muneca-elastica" },
    { label: "Ver Todos los Guantes", href: "/productos/guantes-para-bomberos/forestales" }
  ];
  const epp = [
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Forestales Confort", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Forestales NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Tecnolog\xEDa Seamless en EPP", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Prevenci\xF3n Rozaduras y Ampollas", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "EPP para Jornadas Extremas", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Cuidado de Piel en Campo", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" }
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
    { label: "Peso par", valor: "< 175 g r\xE9cord" },
    { label: "TPP m\xEDnimo", valor: "\u2265 19 cal/cm\xB2" },
    { label: "Construcci\xF3n", valor: "100% seamless" },
    { label: "Costuras", valor: "0 \u2014 sin fricci\xF3n" },
    { label: "Dorso", valor: "Nomex\xAE circular" },
    { label: "Palma", valor: "Kevlar\xAE integrado" },
    { label: "Confort", valor: "M\xE1ximo \u2014 0% rozaduras" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Protecci\xF3n forestal \u2014 edici\xF3n vigente" },
    { code: "TPP \u2265 19", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica certificada" },
    { code: "100% Seamless", desc: "Construcci\xF3n sin costuras \u2014 0% fricci\xF3n" },
    { code: "< 175 g", desc: "Guante seamless m\xE1s ligero del mercado" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Forestales NFPA 1977 Sin Costuras | BOMBERO.MX", "description": "Guantes forestales NFPA 1977 sin costuras certificados. Construcci\xF3n 100% seamless, tejido circular Nomex\xAE, Kevlar\xAE integrado, sistema bonded. TPP \u2265 19 cal/cm\xB2. Peso < 175 g. 0% rozaduras. Env\xEDo a toda la rep\xFAblica.", "keywords": [
    "guantes forestales sin costuras NFPA 1977",
    "guantes bombero forestal seamless M\xE9xico",
    "guantes NFPA 1977 confort total",
    "guantes forestales anti-rozaduras",
    "guantes forestales sin fricci\xF3n",
    "guantes combate forestal seamless",
    "guantes forestales bonded M\xE9xico",
    "comprar guantes forestales seamless"
  ], "canonical": "/productos/guantes-para-bomberos/forestales/sin-costuras", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" },
    { label: "Sin Costuras" }
  ], "heroBadge": "Guantes Forestales \xB7 NFPA 1977 \xB7 Sin Costuras", "heroTitle": "Guantes Forestales NFPA 1977", "heroTitleHighlight": "Construcci\xF3n 100% Seamless", "heroSubtitle": "Confort absoluto en jornadas extremadamente largas. Construcci\xF3n revolucionaria 100% seamless \u2014 0 costuras, 0 fricci\xF3n, 0% rozaduras. Tejido circular Nomex\xAE IIIA, Kevlar\xAE integrado y liner bonded t\xE9rmicamente. Peso r\xE9cord < 175 g. TPP \u2265 19 cal/cm\xB2 certificado NFPA 1977. El guante forestal m\xE1s confortable.", "heroSeoBlocks": [
    {
      title: "Guantes Forestales NFPA 1977 Sin Costuras \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes forestales NFPA 1977 sin costuras</strong> ofrecen confort incomparable mediante construcci\xF3n 100% seamless. Tejido circular Nomex\xAE IIIA, Kevlar\xAE integrado y liner bonded con TPP \u2265 19 cal/cm\xB2. Peso r\xE9cord < 175 g. En <strong>BOMBERO.MX</strong> distribuimos el guante forestal m\xE1s confortable para jornadas extremas en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada lote de <strong>guantes forestales seamless</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. TPP \u2265 19 cal/cm\xB2, construcci\xF3n seamless certificada, nivel 3 corte. Compatible con EPP forestal NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Guantes Forestales Seamless", "productoCategoria": "Guantes de Bombero Forestal Premium", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "100% Seamless" },
    { modifier: "solas", text: "< 175 g" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Forestales NFPA 1977", "productoTitleSub": "Construcci\xF3n 100% Seamless", "productoDesc": "Confort absoluto para jornadas extremas. Construcci\xF3n revolucionaria 100% seamless \u2014 0 costuras, 0 fricci\xF3n, 0% rozaduras. Tejido circular Nomex\xAE IIIA, Kevlar\xAE integrado, liner bonded. Peso r\xE9cord < 175 g. TPP \u2265 19 cal/cm\xB2 certificado.", "productoFeatures": [
    "100% seamless \u2014 0 costuras, 0 fricci\xF3n",
    "Peso r\xE9cord < 175 g \u2014 m\xE1s ligero seamless",
    "Tejido circular Nomex\xAE IIIA 3D adaptable",
    "Kevlar\xAE integrado \u2014 sin puntos d\xE9biles",
    "TPP \u2265 19 cal/cm\xB2 \u2014 protecci\xF3n certificada",
    "0% rozaduras \u2014 confort absoluto"
  ], "productoAppTags": [
    "Jornadas extremadamente largas",
    "Bomberos sensibilidad cut\xE1nea",
    "Operaciones manos h\xFAmedas",
    "Prevenci\xF3n infecciones",
    "Brigadas multi-d\xEDa"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes forestales sin costuras" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bombero forestal con guantes seamless" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP forestal confort total" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos forestales jornada larga" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal seamless" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes seamless en operaci\xF3n" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema 100% Seamless \u2014 0 Costuras", "capasDesc": "La tecnolog\xEDa seamless revoluciona el confort en guantes forestales. Tejido circular en una sola pieza elimina 100% de las costuras que causan fricci\xF3n, rozaduras y puntos d\xE9biles. El resultado: confort absoluto durante toda la vida \xFAtil.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1977 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Sin Costuras?", "aplicacionesContent": "<p>Los guantes forestales sin costuras son el EPP de elecci\xF3n para las operaciones m\xE1s prolongadas.</p><p>La construcci\xF3n 100% seamless elimina completamente las rozaduras, ampollas y puntos de presi\xF3n que causan las costuras tradicionales. Esencial para jornadas de 14+ horas, operaciones multi-d\xEDa y bomberos con sensibilidad cut\xE1nea. El confort superior permite mantener concentraci\xF3n en situaciones cr\xEDticas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El est\xE1ndar forestal que salva vidas", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero forestal. La construcci\xF3n seamless cumple todos los requisitos sin comprometer protecci\xF3n.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/forestales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre los Guantes Forestales Sin Costuras", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre guantes forestales seamless, construcci\xF3n sin fricci\xF3n, durabilidad y compatibilidad con EPP forestal.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1977.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Sistema de Confort Total", "relacionadosDesc": "Los guantes forestales sin costuras trabajan como parte de un sistema de confort. Combina con EPP forestal dise\xF1ado para jornadas extremadamente largas sin molestias.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/sin-costuras/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/sin-costuras/index.astro";
const $$url = "/productos/guantes-para-bomberos/forestales/sin-costuras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
