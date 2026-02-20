import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Dorso \u2014 Nomex\xAE Malla Ventilada",
      descripcion: "Tejido Nomex\xAE IIIA en construcci\xF3n de malla abierta para m\xE1xima ventilaci\xF3n. Paneles estrat\xE9gicos de malla en dorso de dedos y nudillos permiten flujo de aire mientras mantienen resistencia inherente a la llama. Ideal para operaciones forestales en clima caluroso.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA malla ventilada" },
        { label: "Peso tela", valor: "3.8 oz/yd\xB2 \u2014 s\xFAper ligero" },
        { label: "Ventilaci\xF3n", valor: "Paneles malla estrat\xE9gicos" },
        { label: "Resistencia llama", valor: "Inherente \u2014 certificada" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Palma \u2014 Kevlar\xAE Perforado",
      descripcion: "Palma de Kevlar\xAE tejido con micro-perforaciones para evacuaci\xF3n de vapor. Mantiene resistencia mec\xE1nica nivel 3 mientras permite transpiraci\xF3n superior. Tratamiento DWR (Durable Water Repellent) para repeler humedad externa sin bloquear ventilaci\xF3n interna.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE micro-perforado" },
        { label: "Resistencia corte", valor: "Nivel 3 ANSI" },
        { label: "Ventilaci\xF3n", valor: "Micro-perforaciones estrat\xE9gicas" },
        { label: "Tratamiento", valor: "DWR \u2014 repelente al agua" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Liner \u2014 Coolmax\xAE FR",
      descripcion: "Forro interior Coolmax\xAE FR (flame-resistant) que transporta humedad corporal hacia el exterior 5\xD7 m\xE1s r\xE1pido que tejidos est\xE1ndar. TPP \u2265 18 cal/cm\xB2 certificado \u2014 protecci\xF3n t\xE9rmica NFPA 1977 sin comprometer transpirabilidad. MVTR > 1,200 g/m\xB2/24 h \u2014 r\xE9cord en guantes forestales.",
      specs: [
        { label: "Material liner", valor: "Coolmax\xAE FR moisture-wicking" },
        { label: "TPP", valor: "\u2265 18 cal/cm\xB2 m\xEDnimo NFPA" },
        { label: "Transpirabilidad", valor: "MVTR > 1,200 g/m\xB2/24 h" },
        { label: "Peso total guante", valor: "< 165 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Sistema de capas", valor: "3 capas \u2014 dorso + palma + liner" },
    { categoria: "Construcci\xF3n", label: "Dorso principal", valor: "Nomex\xAE IIIA malla ventilada 3.8 oz" },
    { categoria: "Construcci\xF3n", label: "Palma reforzada", valor: "Kevlar\xAE micro-perforado DWR" },
    { categoria: "Construcci\xF3n", label: "Barrera t\xE9rmica", valor: "Coolmax\xAE FR moisture-wicking" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Nomex\xAE flat-seam baja fricci\xF3n" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 18 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3 ANSI/ISEA 105" },
    { categoria: "Protecci\xF3n", label: "Abrasi\xF3n palma", valor: "Nivel 3 \u2014 equilibrado" },
    { categoria: "Protecci\xF3n", label: "Resistencia llama", valor: "Inherente \u2014 no se lava" },
    { categoria: "Protecci\xF3n", label: "Repelencia al agua", valor: "DWR \u2014 mantiene sequedad externa" },
    { categoria: "Transpirabilidad", label: "MVTR", valor: "> 1,200 g/m\xB2/24 h \u2014 r\xE9cord" },
    { categoria: "Transpirabilidad", label: "Ventilaci\xF3n", valor: "Malla dorso + micro-perforaciones" },
    { categoria: "Transpirabilidad", label: "Forro interior", valor: "Coolmax\xAE FR \u2014 5\xD7 m\xE1s r\xE1pido" },
    { categoria: "Ergonom\xEDa", label: "Peso por par", valor: "< 165 g \u2014 s\xFAper ligero" },
    { categoria: "Ergonom\xEDa", label: "Articulaciones", valor: "Preformadas \u2014 sin restricci\xF3n" },
    { categoria: "Ergonom\xEDa", label: "Cierre mu\xF1eca", valor: "El\xE1stico transpirable + Velcro\xAE" },
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
      titulo: "Combate Forestal Clima Caluroso",
      desc: "Operaciones forestales en verano con temperaturas 30\u201340\xB0C. MVTR > 1,200 elimina humedad corporal r\xE1pidamente. Malla ventilada en dorso previene sobrecalentamiento en jornadas prolongadas."
    },
    {
      titulo: "Quemas Prescritas Verano",
      desc: "Quemas controladas bajo sol directo. TPP \u2265 18 cal/cm\xB2 protege contra llamaradas s\xFAbitas mientras Coolmax\xAE FR mantiene manos secas. Peso < 165 g reduce fatiga t\xE9rmica."
    },
    {
      titulo: "Operaciones Multi-D\xEDa Campo",
      desc: "Jornadas forestales de 12+ horas en campamentos remotos. Transpirabilidad superior reduce acumulaci\xF3n de humedad y previene rozaduras. Tratamiento antimicrobiano en liner para uso multi-d\xEDa sin lavado."
    },
    {
      titulo: "Zonas \xC1ridas y Semi\xE1ridas",
      desc: "Incendios en pastizales, matorrales y desierto donde el calor es cr\xEDtico. Construcci\xF3n ventilada mantiene temperatura manual tolerable. DWR repele polvo y part\xEDculas sin bloquear ventilaci\xF3n."
    }
  ];
  const faqs = [
    {
      q: "\xBFLa alta transpirabilidad compromete la protecci\xF3n t\xE9rmica?",
      a: "No. El guante cumple TPP \u2265 18 cal/cm\xB2 exigido por NFPA 1977 \u2014 protecci\xF3n certificada contra calor radiante y brasas. La alta transpirabilidad (MVTR > 1,200) se logra mediante construcci\xF3n estrat\xE9gica: malla ventilada en zonas de bajo riesgo t\xE9rmico (dorso dedos, nudillos) y materiales FR s\xF3lidos en zonas cr\xEDticas (palma, dorso mano). Lo mejor de ambos mundos."
    },
    {
      q: "\xBFEl tratamiento DWR afecta la transpirabilidad?",
      a: "No. El DWR (Durable Water Repellent) es un tratamiento hidrof\xF3bico que repele agua l\xEDquida externa (lluvia, roc\xEDo) pero no bloquea la evacuaci\xF3n de vapor desde el interior. Funciona a nivel microsc\xF3pico \u2014 las micro-perforaciones permanecen abiertas para ventilaci\xF3n mientras el agua externa forma gotas que ruedan sin penetrar."
    },
    {
      q: "\xBFCu\xE1nto dura el tratamiento DWR?",
      a: "El DWR inicial dura 12\u201318 meses con uso regular y lavados correctos. Tras ese per\xEDodo, el tratamiento puede reactivarse con productos DWR en spray espec\xEDficos para tejidos t\xE9cnicos. Aplica tras lavado y secado completo. Un guante bien cuidado puede mantener repelencia DWR durante toda su vida \xFAtil con reactivaciones peri\xF3dicas."
    },
    {
      q: "\xBFQu\xE9 significa MVTR > 1,200 g/m\xB2/24 h en la pr\xE1ctica?",
      a: "MVTR (Moisture Vapor Transmission Rate) mide cu\xE1nta humedad corporal puede escapar del guante en 24 horas. MVTR > 1,200 significa que el guante evac\xFAa m\xE1s de 1.2 kg de vapor por metro cuadrado al d\xEDa \u2014 aproximadamente 3\xD7 superior a un guante forestal est\xE1ndar. En t\xE9rminos pr\xE1cticos: manos notablemente m\xE1s secas en jornadas prolongadas, menos rozaduras, mayor confort t\xE9rmico."
    },
    {
      q: "\xBFCon qu\xE9 EPP forestal es compatible este guante?",
      a: "Compatible con traje forestal NFPA 1977, casco forestal NFPA 1977, botas forestales y gafas ANSI Z87.1. El dise\xF1o de mu\xF1eca el\xE1stica permite traslape con manga de traje sin comprimir circulaci\xF3n \u2014 cr\xEDtico para mantener ventilaci\xF3n en clima caluroso."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 24\u201348 h en CDMX y \xE1rea metropolitana, 3\u20135 d\xEDas al resto de la rep\xFAblica. Tallas especiales o pedidos institucionales: 2\u20133 semanas. Env\xEDo incluido en \xF3rdenes mayores a 15 pares."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Forestales Nomex Ultraligero",
      badge: "NFPA 1977",
      description: "Guante forestal ultraligero < 180 g. Dorso Nomex\xAE IIIA, palma Kevlar\xAE. Ideal para jornadas muy prolongadas.",
      href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero",
      buttonText: "Guantes Ultraligeros",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Forestales Palma de Cuero",
      badge: "NFPA 1977",
      description: "M\xE1xima durabilidad con palma de cuero de cabra. TPP \u2265 20 cal/cm\xB2, nivel 4 resistencia a cortes.",
      href: "/productos/guantes-para-bomberos/forestales/palma-cuero",
      buttonText: "Guantes Palma Cuero",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977 Transpirable",
      badge: "NFPA 1977",
      description: "Traje forestal con m\xE1xima ventilaci\xF3n. Dise\xF1ado para clima caluroso, compatible con estos guantes.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Trajes Forestales",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Casco Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Casco forestal con ventilaci\xF3n superior. Sistema completo de protecci\xF3n EPP para clima caluroso.",
      href: "/productos/cascos-para-bomberos",
      buttonText: "Cascos Forestales",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Nomex\xAE Ultraligero < 180 g", href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero" },
    { label: "Palma de Cuero Reforzada", href: "/productos/guantes-para-bomberos/forestales/palma-cuero" },
    { label: "FR Inherente PBI\xAE", href: "/productos/guantes-para-bomberos/forestales/fr-inherente" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/forestales/muneca-elastica" },
    { label: "Construcci\xF3n Sin Costuras", href: "/productos/guantes-para-bomberos/forestales/sin-costuras" },
    { label: "Ver Todos los Guantes", href: "/productos/guantes-para-bomberos/forestales" }
  ];
  const epp = [
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Forestal Transpirable", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Forestales Ventiladas", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos", tag: "Ojos" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Forestales NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP para Clima Caluroso", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Manejo Estr\xE9s T\xE9rmico Forestal", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Hidrataci\xF3n en Combate Forestal", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Diferencias MVTR en EPP", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Sonora", href: "/directorio/sonora" },
    { label: "Bomberos Sinaloa", href: "/directorio/sinaloa" },
    { label: "Bomberos Chihuahua", href: "/directorio/chihuahua" },
    { label: "Bomberos Baja California", href: "/directorio/baja-california" },
    { label: "Bomberos Coahuila", href: "/directorio/coahuila" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1977" },
    { label: "Peso par", valor: "< 165 g" },
    { label: "TPP m\xEDnimo", valor: "\u2265 18 cal/cm\xB2" },
    { label: "Dorso", valor: "Nomex\xAE malla 3.8 oz" },
    { label: "Palma", valor: "Kevlar\xAE perforado" },
    { label: "Liner", valor: "Coolmax\xAE FR" },
    { label: "MVTR", valor: "> 1,200 r\xE9cord" },
    { label: "DWR", valor: "S\xED \u2014 repelente agua" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Protecci\xF3n forestal \u2014 edici\xF3n vigente" },
    { code: "TPP \u2265 18", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica certificada" },
    { code: "MVTR > 1,200", desc: "g/m\xB2/24 h \u2014 transpirabilidad r\xE9cord" },
    { code: "Coolmax\xAE FR", desc: "Moisture-wicking resistente a llama" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Forestales NFPA 1977 Alta Transpirabilidad | BOMBERO.MX", "description": "Guantes forestales NFPA 1977 alta transpirabilidad certificados. Nomex\xAE malla ventilada, Kevlar\xAE perforado, Coolmax\xAE FR. MVTR > 1,200 r\xE9cord. TPP \u2265 18 cal/cm\xB2. Ideal clima caluroso. Env\xEDo a toda la rep\xFAblica.", "keywords": [
    "guantes forestales transpirables NFPA 1977",
    "guantes bombero forestal ventilados M\xE9xico",
    "guantes forestales clima caluroso",
    "guantes NFPA 1977 MVTR alto",
    "guantes forestales Coolmax M\xE9xico",
    "guantes combate forestal verano",
    "guantes forestales ligeros transpirables",
    "comprar guantes forestales ventilados"
  ], "canonical": "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" },
    { label: "Alta Transpirabilidad" }
  ], "heroBadge": "Guantes Forestales \xB7 NFPA 1977 \xB7 Alta Transpirabilidad", "heroTitle": "Guantes Forestales NFPA 1977", "heroTitleHighlight": "Alta Transpirabilidad", "heroSubtitle": "El guante forestal m\xE1s transpirable del mercado. Dorso Nomex\xAE IIIA malla ventilada, palma Kevlar\xAE micro-perforada y liner Coolmax\xAE FR. MVTR > 1,200 g/m\xB2/24 h \u2014 r\xE9cord en evacuaci\xF3n de humedad. TPP \u2265 18 cal/cm\xB2 certificado NFPA 1977. Dise\xF1ado para combate forestal en clima caluroso.", "heroSeoBlocks": [
    {
      title: "Guantes Forestales NFPA 1977 Alta Transpirabilidad \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes forestales NFPA 1977 alta transpirabilidad</strong> combinan protecci\xF3n certificada con ventilaci\xF3n r\xE9cord. Nomex\xAE IIIA malla ventilada, Kevlar\xAE micro-perforado y Coolmax\xAE FR con MVTR > 1,200 g/m\xB2/24 h. En <strong>BOMBERO.MX</strong> distribuimos el guante forestal m\xE1s transpirable para operaciones en clima caluroso en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada lote de <strong>guantes forestales alta transpirabilidad</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. TPP \u2265 18 cal/cm\xB2, MVTR > 1,200, resistencia inherente Nomex\xAE. Compatible con EPP forestal NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Guantes Forestales Transpirables", "productoCategoria": "Guantes de Bombero Forestal", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "MVTR > 1,200" },
    { modifier: "solas", text: "< 165 g" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Forestales NFPA 1977", "productoTitleSub": "Alta Transpirabilidad", "productoDesc": "El guante forestal m\xE1s transpirable. Nomex\xAE IIIA malla ventilada, Kevlar\xAE micro-perforado DWR, liner Coolmax\xAE FR. MVTR > 1,200 g/m\xB2/24 h \u2014 r\xE9cord en evacuaci\xF3n de humedad. Peso < 165 g. TPP \u2265 18 cal/cm\xB2 certificado. Ideal clima caluroso.", "productoFeatures": [
    "MVTR > 1,200 \u2014 transpirabilidad r\xE9cord",
    "Nomex\xAE malla ventilada 3.8 oz s\xFAper ligero",
    "Kevlar\xAE micro-perforado con DWR",
    "Coolmax\xAE FR \u2014 5\xD7 m\xE1s r\xE1pido",
    "Peso < 165 g \u2014 s\xFAper ligero",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Combate forestal clima caluroso",
    "Quemas prescritas verano",
    "Operaciones multi-d\xEDa campo",
    "Zonas \xE1ridas y semi\xE1ridas",
    "Brigadas forestales verano"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes forestales alta transpirabilidad" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bombero forestal clima caluroso" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP forestal transpirable" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos forestales en verano" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal ventilado" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes ventilados en operaci\xF3n" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica. La construcci\xF3n ventilada estrat\xE9gica logra MVTR > 1,200 sin comprometer protecci\xF3n t\xE9rmica TPP \u2265 18 cal/cm\xB2.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1977 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Alta Transpirabilidad?", "aplicacionesContent": "<p>Los guantes forestales alta transpirabilidad son el EPP de elecci\xF3n para operaciones en clima caluroso.</p><p>La construcci\xF3n ventilada estrat\xE9gica \u2014 malla en dorso, micro-perforaciones en palma, Coolmax\xAE FR en liner \u2014 logra MVTR > 1,200 g/m\xB2/24 h, evacuando humedad corporal 3\xD7 m\xE1s r\xE1pido que guantes forestales est\xE1ndar. Esencial para prevenir fatiga t\xE9rmica en jornadas prolongadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El est\xE1ndar forestal que salva vidas", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero forestal. Establece requisitos m\xEDnimos: resistencia a la llama, protecci\xF3n t\xE9rmica, transpirabilidad y durabilidad mec\xE1nica.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/forestales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre los Guantes Forestales Alta Transpirabilidad", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre guantes forestales transpirables, ventilaci\xF3n, protecci\xF3n t\xE9rmica y compatibilidad con EPP forestal.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1977.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo Forestal para Clima Caluroso", "relacionadosDesc": "Los guantes forestales alta transpirabilidad trabajan como parte de un sistema. Combina con EPP forestal ventilado para m\xE1xima protecci\xF3n en verano.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/alta-transpirabilidad/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/alta-transpirabilidad/index.astro";
const $$url = "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
