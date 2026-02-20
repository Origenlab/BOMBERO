import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Palma de Cuero Sint\xE9tico Ergon\xF3mico",
      descripcion: "Capa exterior en cuero sint\xE9tico preformado anat\xF3mico con patr\xF3n de agarre texturizado. El dise\xF1o ergon\xF3mico reduce fatiga en operaciones prolongadas de rescate. Refuerzos estrat\xE9gicos en zonas de alto desgaste sin comprometer flexibilidad. Resistencia corte nivel 3 y abrasi\xF3n nivel 4 EN 388 certificadas.",
      specs: [
        { label: "Material palma", valor: "Cuero sint\xE9tico preformado" },
        { label: "Dise\xF1o", valor: "Anat\xF3mico \u2014 reduce fatiga" },
        { label: "Corte EN 388", valor: "Nivel 3" },
        { label: "Abrasi\xF3n", valor: "Nivel 4" }
      ],
      color: "smoke"
    },
    {
      num: "02",
      titulo: "Mu\xF1eca El\xE1stica de Doble Capa",
      descripcion: "Segunda capa: sistema de mu\xF1eca el\xE1stica de doble capa con banda interna de neopreno y banda externa de spandex reforzado. Ajuste autom\xE1tico a diferentes tama\xF1os de mu\xF1eca sin comprimir circulaci\xF3n. Longitud extendida 120 mm sella con manga del traje de rescate, previniendo entrada de polvo, escombros y l\xEDquidos.",
      specs: [
        { label: "Sistema mu\xF1eca", valor: "Doble capa el\xE1stica ajustable" },
        { label: "Banda interna", valor: "Neopreno sellado" },
        { label: "Banda externa", valor: "Spandex reforzado" },
        { label: "Longitud", valor: "120 mm extendida" }
      ],
      color: "ember"
    },
    {
      num: "03",
      titulo: "Cierre de Seguridad con Velcro Reflectivo",
      descripcion: "Tercera capa: sistema de cierre velcro de alta resistencia con banda reflectiva integrada. Permite ajuste personalizado sobre la mu\xF1eca el\xE1stica para sellado adicional. La banda reflectiva 3M Scotchlite\u2122 mejora visibilidad del rescatista en condiciones de baja luz \u2014 fundamental en operaciones nocturnas o espacios confinados.",
      specs: [
        { label: "Cierre", valor: "Velcro alta resistencia ajustable" },
        { label: "Banda reflectiva", valor: "3M Scotchlite\u2122 integrada" },
        { label: "Ajuste", valor: "Personalizado sobre el\xE1stico" },
        { label: "Certificaci\xF3n", valor: "NFPA 1951 aprobado" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Tipo de guante", valor: "Rescate mu\xF1eca el\xE1stica ajustable" },
    { categoria: "Construcci\xF3n", label: "Palma", valor: "Cuero sint\xE9tico preformado" },
    { categoria: "Construcci\xF3n", label: "Sistema mu\xF1eca", valor: "Doble capa el\xE1stica + velcro" },
    { categoria: "Construcci\xF3n", label: "Banda interna", valor: "Neopreno sellado" },
    { categoria: "Construcci\xF3n", label: "Banda externa", valor: "Spandex reforzado" },
    { categoria: "Construcci\xF3n", label: "Cierre", valor: "Velcro + banda reflectiva 3M" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte EN 388", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Resistencia abrasi\xF3n", valor: "Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n", valor: "Nivel 2" },
    { categoria: "Protecci\xF3n", label: "Sellado mu\xF1eca", valor: "S\xED \u2014 previene entrada escombros" },
    { categoria: "Ergonom\xEDa", label: "Nivel de destreza", valor: "4 (alto)" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o palma", valor: "Anat\xF3mico preformado" },
    { categoria: "Ergonom\xEDa", label: "Ajuste mu\xF1eca", valor: "Autom\xE1tico \u2014 sin compresi\xF3n" },
    { categoria: "Ergonom\xEDa", label: "Longitud mu\xF1eca", valor: "120 mm extendida" },
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
      titulo: "Rescate Prolongado en Colapsos",
      desc: "Operaciones de b\xFAsqueda y remoci\xF3n de escombros que duran varias horas. La mu\xF1eca el\xE1stica elimina puntos de presi\xF3n, manteniendo comodidad y circulaci\xF3n durante turnos extendidos."
    },
    {
      titulo: "Espacios Confinados y Alcantarillas",
      desc: "Ambientes con polvo, agua, lodo y escombros l\xEDquidos. El sellado doble capa (neopreno + spandex) previene entrada de contaminantes entre guante y manga del traje."
    },
    {
      titulo: "Excarcelaci\xF3n Vehicular con Herramientas",
      desc: "Uso intensivo de herramientas hidr\xE1ulicas, cizallas y separadores. El ajuste autom\xE1tico de mu\xF1eca previene que el guante se deslice o gire durante manipulaci\xF3n de equipos pesados."
    },
    {
      titulo: "Operaciones Nocturnas y Baja Visibilidad",
      desc: "Rescates nocturnos, t\xFAneles, s\xF3tanos y espacios sin iluminaci\xF3n. La banda reflectiva 3M Scotchlite\u2122 mejora visibilidad del rescatista para coordinaci\xF3n de equipo y seguridad."
    }
  ];
  const faqs = [
    {
      q: "\xBFLa mu\xF1eca el\xE1stica se ajusta realmente a todas las tallas o necesito elegir tama\xF1o espec\xEDfico?",
      a: "Necesitas elegir tu talla normal de guante (S, M, L, XL, 2XL) basada en el tama\xF1o de tu palma y dedos. La mu\xF1eca el\xE1stica se ajusta autom\xE1ticamente dentro de un rango de \xB115 mm de circunferencia \u2014 suficiente para acomodar diferencias individuales y sellarse sobre manga de traje sin comprimir la circulaci\xF3n."
    },
    {
      q: "\xBFEl dise\xF1o el\xE1stico compromete la durabilidad de la mu\xF1eca?",
      a: "No. El sistema de doble capa (neopreno interno + spandex externo reforzado) distribuye la tensi\xF3n y previene desgarro. El velcro adicional protege el el\xE1stico de fricci\xF3n directa con la manga del traje. En pruebas de durabilidad, este dise\xF1o supera 500 ciclos de puesta/remoci\xF3n sin p\xE9rdida de elasticidad."
    },
    {
      q: "\xBFPor qu\xE9 necesito banda reflectiva en un guante de rescate?",
      a: "En operaciones nocturnas o espacios confinados sin luz, el equipo de rescate coordina mediante se\xF1ales de mano. La banda reflectiva 3M Scotchlite\u2122 en ambas mu\xF1ecas hace las se\xF1ales visibles a distancia cuando se iluminan con linterna \u2014 mejorando seguridad y eficiencia del equipo sin necesidad de comunicaci\xF3n verbal."
    },
    {
      q: "\xBFEl sellado de mu\xF1eca previene que entre agua en operaciones de rescate acu\xE1tico?",
      a: "Parcialmente. El dise\xF1o de doble capa reduce entrada de agua por salpicadura o inmersi\xF3n breve, pero NO es un sellado herm\xE9tico tipo guante de buceo. Para rescate acu\xE1tico prolongado o inmersi\xF3n completa se requieren guantes especializados de neopreno con sellado herm\xE9tico."
    },
    {
      q: "\xBFPuedo usar este guante con trajes estructurales o solo con trajes de rescate?",
      a: "Compatible con ambos. La mu\xF1eca extendida 120 mm sella dentro de la manga de trajes estructurales NFPA 1971, trajes de rescate NFPA 1951 y trajes industriales. El ajuste velcro permite personalizar el sellado seg\xFAn el grosor de la manga del traje \u2014 m\xE1xima versatilidad."
    },
    {
      q: "\xBFLa mu\xF1eca el\xE1stica facilita ponerse y quitarse el guante r\xE1pidamente?",
      a: "S\xED. El sistema el\xE1stico expande durante la puesta y se contrae autom\xE1ticamente para sellar \u2014 eliminando la necesidad de ajustar cierres complicados bajo estr\xE9s. En pruebas, bomberos se ponen/quitan estos guantes 30% m\xE1s r\xE1pido que modelos con cierres de velcro convencionales o cordones."
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
      title: "Guantes Rescate Compatible Arn\xE9s",
      badge: "NFPA 1951",
      description: "Dise\xF1o especializado para trabajo con cuerdas y arn\xE9s. Costuras reforzadas y palma antideslizante certificada.",
      href: "/productos/guantes-para-bomberos/rescate/compatible-arnes",
      buttonText: "Ver Compatible Arn\xE9s",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n t\xE9rmica TPP certificada para incendios estructurales. Barrera de humedad y liner t\xE9rmico integrados.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes Estructurales",
      image: "/images/directorio/bomberos-accion-incendio-01.avif"
    },
    {
      title: "Traje Rescate USAR",
      badge: "NFPA 1951",
      description: "Traje certificado para b\xFAsqueda y rescate urbano. Alta visibilidad, refuerzos en rodillas y codos.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes USAR",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Perfil Ultrafino Destreza 5", href: "/productos/guantes-para-bomberos/rescate/perfil-ultrafino" },
    { label: "Anticorte EN 388 Nivel 4/5", href: "/productos/guantes-para-bomberos/rescate/anticorte-en-388" },
    { label: "Palma Reforzada Kevlar\xAE", href: "/productos/guantes-para-bomberos/rescate/palma-kevlar" },
    { label: "Antiperforaci\xF3n Nivel 4", href: "/productos/guantes-para-bomberos/rescate/antiperforacion" },
    { label: "Compatible Arn\xE9s y Cuerda", href: "/productos/guantes-para-bomberos/rescate/compatible-arnes" },
    { label: "Ver Todos los Guantes Rescate", href: "/productos/guantes-para-bomberos/rescate" }
  ];
  const epp = [
    { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales NFPA", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Rescate T\xE9cnico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Traje Rescate USAR", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Gafas Goggle Bombero ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes de Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales", tag: "Producto" },
    { label: "EPP Rescate T\xE9cnico Completo", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" },
    { label: "Operaciones Nocturnas Seguras", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes y Equipo USAR", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Alta Visibilidad EPP", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
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
    { label: "Sistema mu\xF1eca", valor: "Doble capa el\xE1stica + velcro" },
    { label: "Longitud", valor: "120 mm extendida" },
    { label: "Reflectiva", valor: "3M Scotchlite\u2122 integrada" },
    { label: "Destreza", valor: "Nivel 4" },
    { label: "Corte EN 388", valor: "Nivel 3" },
    { label: "Abrasi\xF3n", valor: "Nivel 4" },
    { label: "Tallas", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Rescate t\xE9cnico y excarcelaci\xF3n" },
    { code: "EN 388", desc: "Resistencia mec\xE1nica 3-4-2-X" },
    { code: "Mu\xF1eca El\xE1stica", desc: "Ajuste autom\xE1tico \u2014 sin compresi\xF3n" },
    { code: "3M Scotchlite\u2122", desc: "Banda reflectiva alta visibilidad" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Rescate Mu\xF1eca El\xE1stica Ajustable | BOMBERO.MX", "description": "Guantes de rescate mu\xF1eca el\xE1stica doble capa certificados NFPA 1951. Ajuste autom\xE1tico, banda reflectiva 3M, sellado 120 mm. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes mu\xF1eca el\xE1stica",
    "guantes rescate ajustable",
    "guantes bombero pu\xF1o el\xE1stico",
    "guantes NFPA 1951 M\xE9xico",
    "guantes rescate banda reflectiva",
    "guantes mu\xF1eca extendida",
    "guantes rescate ergon\xF3micos",
    "comprar guantes mu\xF1eca el\xE1stica M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/rescate/muneca-elastica", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Mu\xF1eca El\xE1stica" }
  ], "heroBadge": "Guantes de Rescate \xB7 NFPA 1951 \xB7 Mu\xF1eca El\xE1stica", "heroTitle": "Guantes de Rescate NFPA 1951", "heroTitleHighlight": "Mu\xF1eca El\xE1stica Ajustable", "heroSubtitle": "M\xE1ximo ajuste y comodidad en operaciones prolongadas. Sistema de mu\xF1eca el\xE1stica doble capa (neopreno + spandex) con cierre velcro y banda reflectiva 3M Scotchlite\u2122. Longitud extendida 120 mm con sellado completo. Certificaci\xF3n NFPA 1951 incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Mu\xF1eca El\xE1stica Ajustable \u2014 Comodidad M\xE1xima M\xE9xico",
      text: "Los <strong>guantes de rescate mu\xF1eca el\xE1stica</strong> combinan sistema de doble capa (neopreno interno + spandex externo) con ajuste autom\xE1tico que elimina puntos de presi\xF3n en operaciones prolongadas. Longitud extendida 120 mm sella completamente con manga de traje. Banda reflectiva 3M Scotchlite\u2122 integrada. En <strong>BOMBERO.MX</strong> distribuimos guantes ergon\xF3micos certificados NFPA 1951 a cuerpos de bomberos y equipos de rescate en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1951 y EN 388 \u2014 Banda Reflectiva Alta Visibilidad",
      text: "Cada par de <strong>guantes mu\xF1eca el\xE1stica ajustable</strong> incluye certificaci\xF3n NFPA 1951 (rescate t\xE9cnico) y marcado EN 388 3-4-2-X. Sistema de doble capa previene entrada de escombros y l\xEDquidos. Banda reflectiva 3M Scotchlite\u2122 mejora visibilidad en operaciones nocturnas. Documentaci\xF3n v\xE1lida para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Ideal para rescate prolongado."
    }
  ], "ctaBarQuote": "Cotizar Guantes Mu\xF1eca El\xE1stica", "productoCategoria": "Guantes de Rescate Ergon\xF3micos", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1951" },
    { modifier: "ergonomia", text: "Ergon\xF3mico" },
    { modifier: "reflectivo", text: "3M Scotchlite\u2122" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Rescate NFPA 1951", "productoTitleSub": "Mu\xF1eca El\xE1stica Ajustable", "productoDesc": "Guantes de rescate t\xE9cnico con sistema de mu\xF1eca el\xE1stica doble capa. Ajuste autom\xE1tico neopreno + spandex, longitud extendida 120 mm, cierre velcro y banda reflectiva 3M Scotchlite\u2122. Dise\xF1o anat\xF3mico reduce fatiga. Certificaci\xF3n NFPA 1951 incluida.", "productoFeatures": [
    "Mu\xF1eca el\xE1stica doble capa ajustable",
    "Banda reflectiva 3M Scotchlite\u2122",
    "Longitud extendida 120 mm sellado",
    "Dise\xF1o anat\xF3mico reduce fatiga",
    "Destreza nivel 4 \u2014 alto rendimiento",
    "Tallas S a 2XL \u2014 EN 388 3-4-2-X"
  ], "productoAppTags": [
    "Rescate prolongado",
    "Espacios confinados",
    "Excarcelaci\xF3n vehicular",
    "Operaciones nocturnas",
    "USAR urbano"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes mu\xF1eca el\xE1stica ajustable" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero con guantes banda reflectiva" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP rescate ergon\xF3mico completo" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Operaci\xF3n rescate nocturna" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes mu\xF1eca extendida en operaci\xF3n" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento rescate prolongado" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema de Mu\xF1eca El\xE1stica Doble Capa", "capasDesc": "Tres capas especializadas con sistema de mu\xF1eca innovador que combina ajuste autom\xE1tico, sellado completo y alta visibilidad en un solo dise\xF1o.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan NFPA 1951 y EN 388 3-4-2-X vigentes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Mu\xF1eca El\xE1stica?", "aplicacionesContent": "<p>Los guantes de rescate mu\xF1eca el\xE1stica son el EPP est\xE1ndar para operaciones prolongadas donde el ajuste, comodidad y sellado son cr\xEDticos.</p><p>El sistema de doble capa el\xE1stica elimina puntos de presi\xF3n que causan fatiga en turnos extendidos, mientras el sellado de 120 mm previene entrada de escombros y contaminantes. La banda reflectiva 3M mejora seguridad en operaciones nocturnas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1951 \u2014 Ergonom\xEDa y Alta Visibilidad", "certsDesc": "La norma <strong>NFPA 1951</strong> certifica el guante completo para rescate t\xE9cnico profesional. El sistema de mu\xF1eca el\xE1stica cumple requisitos de ajuste y sellado. <strong>EN 388 3-4-2-X</strong> certifica resistencia mec\xE1nica. Banda reflectiva 3M Scotchlite\u2122 cumple est\xE1ndares de alta visibilidad.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/rescate", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Mu\xF1eca El\xE1stica", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre ajuste autom\xE1tico, sellado, banda reflectiva y aplicaciones en rescate prolongado.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y certificados NFPA 1951 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Rescate", "relacionadosDesc": "Los guantes mu\xF1eca el\xE1stica NFPA 1951 trabajan como parte de un sistema. Todos los equipos certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/muneca-elastica/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/muneca-elastica/index.astro";
const $$url = "/productos/guantes-para-bomberos/rescate/muneca-elastica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
