import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Dorso \u2014 Nomex\xAE IIIA Flexible",
      descripcion: "Tejido Nomex\xAE IIIA de peso medio (5.0 oz/yd\xB2) con tratamiento softener para flexibilidad superior. Paneles articulados preformados que siguen el movimiento natural de la mano. Resistencia inherente a la llama con movilidad total para operaciones forestales prolongadas.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA softener 5.0 oz/yd\xB2" },
        { label: "Flexibilidad", valor: "Tratamiento softener \u2014 m\xE1xima" },
        { label: "Articulaci\xF3n", valor: "Paneles preformados anat\xF3micos" },
        { label: "Resistencia llama", valor: "Inherente \u2014 certificada NFPA" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Palma \u2014 Kevlar\xAE T\xE1ctil",
      descripcion: "Palma de Kevlar\xAE tejido fino para m\xE1xima sensibilidad t\xE1ctil. Permite operaci\xF3n precisa de herramientas y equipos sin sacrificar protecci\xF3n. Nivel 3 resistencia a cortes con grip natural \u2014 equilibrio perfecto entre protecci\xF3n y destreza manual.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE tejido fino t\xE1ctil" },
        { label: "Resistencia corte", valor: "Nivel 3 ANSI" },
        { label: "Sensibilidad", valor: "Alta \u2014 control herramientas" },
        { label: "Grip", valor: "Textura natural antideslizante" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Mu\xF1eca \u2014 Sistema El\xE1stico Dual",
      descripcion: "Sistema innovador de mu\xF1eca el\xE1stica dual: banda el\xE1stica FR interna de 360\xB0 que ajusta autom\xE1ticamente + cierre Velcro\xAE externo para seguridad adicional. Longitud extendida 12 cm permite traslape con manga de traje. TPP \u2265 19 cal/cm\xB2 certificado sin comprometer circulaci\xF3n.",
      specs: [
        { label: "Sistema cierre", valor: "El\xE1stico FR 360\xB0 + Velcro\xAE" },
        { label: "Longitud mu\xF1eca", valor: "12 cm \u2014 traslape con manga" },
        { label: "TPP", valor: "\u2265 19 cal/cm\xB2 certificado" },
        { label: "Peso total guante", valor: "< 200 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Sistema de capas", valor: "3 capas \u2014 dorso + palma + liner" },
    { categoria: "Construcci\xF3n", label: "Dorso principal", valor: "Nomex\xAE IIIA softener 5.0 oz/yd\xB2" },
    { categoria: "Construcci\xF3n", label: "Palma reforzada", valor: "Kevlar\xAE tejido fino t\xE1ctil" },
    { categoria: "Construcci\xF3n", label: "Sistema mu\xF1eca", valor: "El\xE1stico FR 360\xB0 + Velcro\xAE" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Nomex\xAE flat-seam ergon\xF3mico" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 19 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3 ANSI/ISEA 105" },
    { categoria: "Protecci\xF3n", label: "Abrasi\xF3n palma", valor: "Nivel 3 \u2014 equilibrado" },
    { categoria: "Protecci\xF3n", label: "Resistencia llama", valor: "Inherente \u2014 no se lava" },
    { categoria: "Protecci\xF3n", label: "Longitud mu\xF1eca", valor: "12 cm \u2014 sin gaps con manga" },
    { categoria: "Transpirabilidad", label: "MVTR", valor: "> 750 g/m\xB2/24 h" },
    { categoria: "Transpirabilidad", label: "Ventilaci\xF3n", valor: "El\xE1stico FR transpirable" },
    { categoria: "Transpirabilidad", label: "Forro interior", valor: "Moisture-wicking antimicrobiano" },
    { categoria: "Ergonom\xEDa", label: "Peso por par", valor: "< 200 g \u2014 ligero" },
    { categoria: "Ergonom\xEDa", label: "Articulaciones", valor: "Preformadas anat\xF3micas flexibles" },
    { categoria: "Ergonom\xEDa", label: "Ajuste mu\xF1eca", valor: "Autom\xE1tico \u2014 sin apretar" },
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
      titulo: "Operaciones Forestales Prolongadas",
      desc: "Jornadas de 12+ horas donde la comodidad es cr\xEDtica. Sistema el\xE1stico dual ajusta autom\xE1ticamente sin comprimir circulaci\xF3n. Previene fatiga y entumecimiento en manos \u2014 esencial para seguridad en operaciones largas."
    },
    {
      titulo: "Operaci\xF3n Precisa de Equipos",
      desc: "Manejo de radios, GPS, herramientas manuales que requieren destreza. Palma Kevlar\xAE t\xE1ctil permite sensibilidad superior. Ajuste seguro de mu\xF1eca previene que el guante se deslice durante trabajo fino."
    },
    {
      titulo: "Puesta y Retiro R\xE1pido",
      desc: "Situaciones donde se requiere ponerse y quitarse guantes r\xE1pidamente. El\xE1stico FR permite entrada f\xE1cil sin luchar con cierres r\xEDgidos. Velcro\xAE asegura en 1 segundo \u2014 velocidad cr\xEDtica en emergencias."
    },
    {
      titulo: "Trabajo con Mangueras Forestales",
      desc: "Operaci\xF3n prolongada de l\xEDneas de manguera y boquillas. Mu\xF1eca extendida 12 cm previene entrada de agua entre guante y manga. El\xE1stico mantiene sellado sin necesidad de reapretar constantemente."
    }
  ];
  const faqs = [
    {
      q: "\xBFEl sistema el\xE1stico compromete la protecci\xF3n en la mu\xF1eca?",
      a: "No. La banda el\xE1stica es de material FR certificado que cumple NFPA 1977 \u2014 no es el\xE1stico com\xFAn. El sistema dual (el\xE1stico + Velcro\xAE) proporciona TPP \u2265 19 cal/cm\xB2 en toda la mu\xF1eca mientras permite ajuste autom\xE1tico. La longitud extendida 12 cm asegura traslape completo con manga de traje \u2014 sin gaps donde puedan entrar brasas o llamas."
    },
    {
      q: "\xBFEl el\xE1stico pierde tensi\xF3n con el tiempo?",
      a: "El el\xE1stico FR de alta calidad mantiene 80\u201385% de su tensi\xF3n original tras 18\u201324 meses de uso regular. Es significativamente m\xE1s durable que el\xE1stico com\xFAn. Cuando notes p\xE9rdida de tensi\xF3n, el cierre Velcro\xAE externo compensa \u2014 por eso el sistema dual es superior a el\xE1stico solo. Vida \xFAtil del guante t\xEDpicamente termina por abrasi\xF3n de palma antes que por falla de el\xE1stico."
    },
    {
      q: "\xBFPuedo usar el guante sin cerrar el Velcro\xAE?",
      a: "S\xED, el el\xE1stico FR interno proporciona ajuste suficiente para operaciones forestales est\xE1ndar. Sin embargo, para m\xE1xima protecci\xF3n y seguridad (prevenir que brasas entren por mu\xF1eca), se recomienda usar el Velcro\xAE especialmente en combate activo de l\xEDnea de fuego. El dise\xF1o dual te da flexibilidad seg\xFAn la operaci\xF3n."
    },
    {
      q: "\xBFLa mu\xF1eca el\xE1stica funciona con todas las tallas de manga?",
      a: "S\xED. El sistema el\xE1stico 360\xB0 ajusta autom\xE1ticamente a diferentes di\xE1metros de manga \u2014 desde tallas XS hasta 2XL de traje forestal. La longitud 12 cm asegura traslape adecuado incluso si el bombero tiene brazos largos o la manga est\xE1 enrollada. Compatibilidad universal con todos los fabricantes de trajes NFPA 1977."
    },
    {
      q: "\xBFCon qu\xE9 EPP forestal es compatible este guante?",
      a: "Compatible con traje forestal NFPA 1977, casco forestal NFPA 1977, botas forestales y gafas ANSI Z87.1. El dise\xF1o de mu\xF1eca el\xE1stica facilita traslape r\xE1pido con manga sin necesidad de ajustes complejos \u2014 ideal para vestirse r\xE1pidamente en emergencias."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 24\u201348 h en CDMX y \xE1rea metropolitana, 3\u20135 d\xEDas al resto de la rep\xFAblica. Tallas especiales o pedidos institucionales: 2\u20133 semanas. Env\xEDo incluido en \xF3rdenes mayores a 15 pares."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Forestales Sin Costuras",
      badge: "NFPA 1977",
      description: "Guante forestal con construcci\xF3n sin costuras para m\xE1ximo confort. Elimina puntos de fricci\xF3n en jornadas largas.",
      href: "/productos/guantes-para-bomberos/forestales/sin-costuras",
      buttonText: "Guantes Sin Costuras",
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
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Traje forestal completo compatible con mu\xF1eca el\xE1stica. Sistema integrado de protecci\xF3n forestal.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Trajes Forestales",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Guantes de Rescate T\xE9cnico",
      badge: "NFPA 1951",
      description: "Guantes especializados para operaciones de rescate. Alta destreza con sistema de mu\xF1eca ajustable.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Nomex\xAE Ultraligero < 180 g", href: "/productos/guantes-para-bomberos/forestales/nomex-ultraligero" },
    { label: "Palma de Cuero Reforzada", href: "/productos/guantes-para-bomberos/forestales/palma-cuero" },
    { label: "Alta Transpirabilidad", href: "/productos/guantes-para-bomberos/forestales/alta-transpirabilidad" },
    { label: "FR Inherente PBI\xAE", href: "/productos/guantes-para-bomberos/forestales/fr-inherente" },
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
    { label: "EPP Forestal Ergon\xF3mico", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Prevenci\xF3n Fatiga en Campo", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" },
    { label: "Ajuste Correcto de EPP", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Operaciones Forestales Largas", href: "/blog/incendios-forestales-equipo-combate", tag: "Art\xEDculo" }
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
    { label: "Peso par", valor: "< 200 g" },
    { label: "TPP m\xEDnimo", valor: "\u2265 19 cal/cm\xB2" },
    { label: "Dorso", valor: "Nomex\xAE softener" },
    { label: "Palma", valor: "Kevlar\xAE t\xE1ctil" },
    { label: "Mu\xF1eca", valor: "El\xE1stica FR dual" },
    { label: "Longitud", valor: "12 cm extendida" },
    { label: "Ajuste", valor: "Autom\xE1tico 360\xB0" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Protecci\xF3n forestal \u2014 edici\xF3n vigente" },
    { code: "TPP \u2265 19", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica mu\xF1eca" },
    { code: "El\xE1stico FR", desc: "Resistente a llama certificado" },
    { code: "12 cm", desc: "Longitud extendida \u2014 sin gaps" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Forestales NFPA 1977 Mu\xF1eca El\xE1stica | BOMBERO.MX", "description": "Guantes forestales NFPA 1977 mu\xF1eca el\xE1stica certificados. Sistema dual el\xE1stico FR 360\xB0 + Velcro\xAE, longitud 12 cm, Nomex\xAE softener dorso, Kevlar\xAE t\xE1ctil palma. TPP \u2265 19 cal/cm\xB2. M\xE1ximo confort. Env\xEDo a toda la rep\xFAblica.", "keywords": [
    "guantes forestales mu\xF1eca el\xE1stica NFPA 1977",
    "guantes bombero forestal ajustables M\xE9xico",
    "guantes NFPA 1977 cierre r\xE1pido",
    "guantes forestales comodidad M\xE9xico",
    "guantes forestales sistema dual",
    "guantes combate forestal ergon\xF3micos",
    "guantes forestales mu\xF1eca extendida",
    "comprar guantes forestales el\xE1sticos"
  ], "canonical": "/productos/guantes-para-bomberos/forestales/muneca-elastica", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales" },
    { label: "Mu\xF1eca El\xE1stica" }
  ], "heroBadge": "Guantes Forestales \xB7 NFPA 1977 \xB7 Mu\xF1eca El\xE1stica", "heroTitle": "Guantes Forestales NFPA 1977", "heroTitleHighlight": "Mu\xF1eca El\xE1stica Dual", "heroSubtitle": "M\xE1ximo confort para jornadas prolongadas. Sistema innovador de mu\xF1eca el\xE1stica dual: banda FR 360\xB0 que ajusta autom\xE1ticamente + cierre Velcro\xAE externo. Longitud extendida 12 cm para traslape con manga. Dorso Nomex\xAE softener flexible, palma Kevlar\xAE t\xE1ctil. TPP \u2265 19 cal/cm\xB2 certificado NFPA 1977.", "heroSeoBlocks": [
    {
      title: "Guantes Forestales NFPA 1977 Mu\xF1eca El\xE1stica \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes forestales NFPA 1977 mu\xF1eca el\xE1stica</strong> combinan protecci\xF3n certificada con comodidad superior. Sistema dual: el\xE1stico FR 360\xB0 + Velcro\xAE, longitud 12 cm, Nomex\xAE softener dorso y Kevlar\xAE t\xE1ctil palma con TPP \u2265 19 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos el guante forestal m\xE1s ergon\xF3mico para operaciones prolongadas en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada lote de <strong>guantes forestales mu\xF1eca el\xE1stica</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. TPP \u2265 19 cal/cm\xB2, el\xE1stico FR certificado, nivel 3 corte. Compatible con todo el EPP forestal NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Guantes Forestales Mu\xF1eca El\xE1stica", "productoCategoria": "Guantes de Bombero Forestal", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "TPP \u2265 19" },
    { modifier: "solas", text: "Mu\xF1eca 12 cm" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Forestales NFPA 1977", "productoTitleSub": "Mu\xF1eca El\xE1stica Dual", "productoDesc": "M\xE1ximo confort para operaciones prolongadas. Sistema dual mu\xF1eca: el\xE1stico FR 360\xB0 ajuste autom\xE1tico + Velcro\xAE seguridad. Longitud 12 cm traslape con manga. Nomex\xAE softener flexible dorso, Kevlar\xAE t\xE1ctil palma. TPP \u2265 19 cal/cm\xB2 certificado.", "productoFeatures": [
    "Sistema dual \u2014 el\xE1stico FR + Velcro\xAE",
    "Ajuste autom\xE1tico 360\xB0 sin comprimir",
    "Longitud mu\xF1eca 12 cm \u2014 sin gaps",
    "Nomex\xAE softener \u2014 m\xE1xima flexibilidad",
    "Kevlar\xAE t\xE1ctil \u2014 alta sensibilidad",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Operaciones forestales prolongadas",
    "Operaci\xF3n precisa de equipos",
    "Puesta y retiro r\xE1pido",
    "Trabajo con mangueras",
    "Brigadas forestales"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes forestales mu\xF1eca el\xE1stica" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bombero forestal con guantes" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP forestal completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos forestales trabajando" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal ergon\xF3mico" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes el\xE1sticos en operaci\xF3n" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas + Mu\xF1eca Dual", "capasDesc": "El sistema de mu\xF1eca el\xE1stica dual combina ajuste autom\xE1tico con seguridad adicional. Longitud extendida 12 cm asegura traslape completo con manga de traje \u2014 sin gaps donde puedan entrar brasas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1977 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Mu\xF1eca El\xE1stica?", "aplicacionesContent": "<p>Los guantes forestales con mu\xF1eca el\xE1stica son el EPP de elecci\xF3n para operaciones que priorizan comodidad sin comprometer protecci\xF3n.</p><p>El sistema dual \u2014 el\xE1stico FR 360\xB0 que ajusta autom\xE1ticamente + cierre Velcro\xAE para seguridad adicional \u2014 elimina la compresi\xF3n dolorosa de sistemas r\xEDgidos mientras mantiene sellado efectivo contra brasas y llamas. Ideal para jornadas forestales de 12+ horas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El est\xE1ndar forestal que salva vidas", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero forestal. El sistema de mu\xF1eca el\xE1stica cumple todos los requisitos de protecci\xF3n t\xE9rmica y mec\xE1nica.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/forestales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre los Guantes Forestales Mu\xF1eca El\xE1stica", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre guantes forestales con mu\xF1eca el\xE1stica, sistema dual, protecci\xF3n y compatibilidad con EPP forestal.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1977.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo Forestal Ergon\xF3mico", "relacionadosDesc": "Los guantes forestales con mu\xF1eca el\xE1stica trabajan como parte de un sistema ergon\xF3mico. Combina con EPP forestal dise\xF1ado para confort en operaciones prolongadas.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/muneca-elastica/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/forestales/muneca-elastica/index.astro";
const $$url = "/productos/guantes-para-bomberos/forestales/muneca-elastica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
