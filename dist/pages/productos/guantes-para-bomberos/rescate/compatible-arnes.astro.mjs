import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Palma Cuero Nobuck Antideslizante",
      descripcion: "Capa exterior en cuero nobuck de grano completo con patr\xF3n de fricci\xF3n optimizado para cuerdas. El nobuck ofrece agarre superior en cuerdas h\xFAmedas, sucias o congeladas versus cuero liso. Tratamiento hidrof\xF3bico previene saturaci\xF3n de agua que reduce fricci\xF3n. Resistencia a abrasi\xF3n nivel 4 EN 388 \u2014 esencial para descensos prolongados.",
      specs: [
        { label: "Material palma", valor: "Cuero nobuck grano completo" },
        { label: "Patr\xF3n fricci\xF3n", valor: "Optimizado para cuerdas" },
        { label: "Tratamiento", valor: "Hidrof\xF3bico antideslizante" },
        { label: "Abrasi\xF3n EN 388", valor: "Nivel 4 (>8,000 ciclos)" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Costuras Reforzadas Externas",
      descripcion: "Segunda capa: todas las costuras ubicadas en el exterior del guante (lado dorsal) para prevenir fricci\xF3n directa con cuerdas, mosquetones y dispositivos de descenso. Costuras triple puntada con hilo Kevlar\xAE 3-ply ofrecen resistencia 5\xD7 superior a costuras convencionales. Previene rupturas en puntos de alta tensi\xF3n durante rescates verticales.",
      specs: [
        { label: "Ubicaci\xF3n costuras", valor: "Externas \u2014 lado dorsal" },
        { label: "Hilo", valor: "Kevlar\xAE 3-ply reforzado" },
        { label: "Puntada", valor: "Triple \u2014 resistencia 5\xD7" },
        { label: "Fricci\xF3n cuerda", valor: "Cero \u2014 palma sin costuras" }
      ],
      color: "fire"
    },
    {
      num: "03",
      titulo: "Dise\xF1o sin Enganches \u2014 Certificado Vertical",
      descripcion: "Tercera capa: dise\xF1o minimalista sin elementos sobresalientes que puedan engancharse en cuerdas, mosquetones o dispositivos de anclaje. Mu\xF1eca de perfil bajo con cierre velcro plano interno. Certificado para trabajo vertical seg\xFAn NFPA 1951 \u2014 incluye pruebas de compatibilidad con sistemas de cuerda est\xE1ndar (11 mm din\xE1micas, 10.5 mm est\xE1ticas).",
      specs: [
        { label: "Dise\xF1o", valor: "Sin elementos sobresalientes" },
        { label: "Cierre mu\xF1eca", valor: "Velcro plano interno" },
        { label: "Compatibilidad cuerda", valor: "11 mm din\xE1micas, 10.5 mm est\xE1ticas" },
        { label: "Certificaci\xF3n vertical", valor: "NFPA 1951 aprobado" }
      ],
      color: "smoke"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Tipo de guante", valor: "Rescate vertical compatible arn\xE9s" },
    { categoria: "Construcci\xF3n", label: "Palma", valor: "Cuero nobuck grano completo" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "Externas triple puntada Kevlar\xAE" },
    { categoria: "Construcci\xF3n", label: "Dise\xF1o", valor: "Sin enganches \u2014 perfil bajo" },
    { categoria: "Construcci\xF3n", label: "Tratamiento palma", valor: "Hidrof\xF3bico antideslizante" },
    { categoria: "Protecci\xF3n", label: "Resistencia abrasi\xF3n EN 388", valor: "Nivel 4 (>8,000 ciclos)" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n", valor: "Nivel 2" },
    { categoria: "Protecci\xF3n", label: "Agarre cuerda h\xFAmeda", valor: "Superior \u2014 tratamiento hidrof\xF3bico" },
    { categoria: "Ergonom\xEDa", label: "Nivel de destreza", valor: "5 (m\xE1ximo)" },
    { categoria: "Ergonom\xEDa", label: "Grosor palma", valor: "1.8 \u2013 2.2 mm" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o mu\xF1eca", valor: "Perfil bajo \u2014 velcro plano" },
    { categoria: "Ergonom\xEDa", label: "Compatibilidad cuerdas", valor: "11 mm din\xE1micas, 10.5 mm est\xE1ticas" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1951 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "EN 388", valor: "3-4-2-X" },
    { categoria: "Certificaci\xF3n", label: "Trabajo vertical", valor: "Certificado rescate en altura" },
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
      titulo: "Rescate Vertical en Altura",
      desc: "Descensos y ascensos en rapel, polea y sistemas de cuerda. Palma nobuck antideslizante ofrece control total en cuerdas de 11 mm din\xE1micas y 10.5 mm est\xE1ticas. Destreza nivel 5 permite ajustar dispositivos sin quitarse el guante."
    },
    {
      titulo: "Trabajo con Arn\xE9s y Mosquetones",
      desc: "Manipulaci\xF3n de mosquetones, descensores, bloqueadores y sistemas de anclaje. Dise\xF1o sin enganches previene que el guante se atore en equipos bajo carga \u2014 cr\xEDtico para seguridad en altura."
    },
    {
      titulo: "Rescate en Espacios Confinados Verticales",
      desc: "Silos, tanques, pozos y estructuras verticales profundas. Costuras externas eliminan puntos de fricci\xF3n que causan ampollas en descensos prolongados de 30+ metros."
    },
    {
      titulo: "Monta\xF1ismo y Rescate en Terreno Alpino",
      desc: "Operaciones en monta\xF1a, riscos y terreno irregular con sistemas de cuerda. Tratamiento hidrof\xF3bico mantiene agarre en condiciones de lluvia, nieve o hielo \u2014 fundamental en rescates de monta\xF1a."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 hace a este guante compatible con arn\xE9s versus un guante de rescate normal?",
      a: "Tres caracter\xEDsticas cr\xEDticas: (1) Costuras externas que no friccionan con cuerdas, (2) Dise\xF1o sin elementos sobresalientes que puedan engancharse en mosquetones o descensores bajo carga, (3) Palma nobuck con patr\xF3n de fricci\xF3n optimizado para agarre en cuerdas. Un guante de rescate normal puede tener costuras internas que causan ampollas o cierres que se atoran en equipos."
    },
    {
      q: "\xBFPuedo usar este guante para descensos en rapel prolongados?",
      a: "S\xED \u2014 dise\xF1ado espec\xEDficamente para eso. La palma de cuero nobuck sin costuras internas previene ampollas incluso en descensos de 100+ metros. El tratamiento hidrof\xF3bico mantiene agarre constante sin importar humedad o suciedad de la cuerda. Resistencia a abrasi\xF3n nivel 4 garantiza durabilidad en cientos de descensos."
    },
    {
      q: "\xBFEl grosor ultrafino (2.2 mm) ofrece suficiente protecci\xF3n en trabajo vertical?",
      a: "S\xED. En rescate vertical, la destreza es m\xE1s cr\xEDtica que la protecci\xF3n t\xE9rmica o anticorte pesado. El grosor 1.8\u20132.2 mm ofrece destreza nivel 5 (m\xE1ximo) para manipular mosquetones, ajustar descensores y operar bloqueadores \u2014 todo sin quitarse el guante. La protecci\xF3n mec\xE1nica nivel 3-4-2 EN 388 es adecuada para los riesgos de trabajo vertical."
    },
    {
      q: "\xBFLas costuras externas se desgastan m\xE1s r\xE1pido que las internas?",
      a: "No. Las costuras est\xE1n en el lado dorsal (arriba de la mano), no en la palma donde ocurre la fricci\xF3n con cuerdas. El hilo Kevlar\xAE 3-ply triple puntada tiene resistencia 5\xD7 superior a costuras convencionales. En pruebas de durabilidad, estas costuras superan 1,000 horas de uso vertical sin rupturas."
    },
    {
      q: "\xBFPuedo usar este guante con cuerdas de diferentes di\xE1metros?",
      a: "S\xED. Certificado para cuerdas din\xE1micas 9.5\u201311 mm (est\xE1ndar escalada/rescate) y est\xE1ticas 10.5\u201313 mm (trabajo industrial). El patr\xF3n de fricci\xF3n de la palma nobuck se adapta al di\xE1metro de la cuerda \u2014 mayor fricci\xF3n en cuerdas delgadas, fricci\xF3n controlada en cuerdas gruesas."
    },
    {
      q: "\xBFEl tratamiento hidrof\xF3bico se pierde con el lavado o el uso?",
      a: "Parcialmente. El tratamiento inicial dura 50\u2013100 horas de uso o 10\u201315 lavados industriales. Despu\xE9s, puedes reaplicar tratamiento hidrof\xF3bico para cuero (spray o cera) para restaurar las propiedades antideslizantes. El cuero nobuck base mantiene buen agarre incluso sin tratamiento, solo ligeramente reducido en condiciones muy h\xFAmedas."
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
      title: "Guantes Rescate Mu\xF1eca El\xE1stica",
      badge: "NFPA 1951",
      description: "Sistema de mu\xF1eca el\xE1stica doble capa con banda reflectiva 3M. Ajuste autom\xE1tico para operaciones prolongadas.",
      href: "/productos/guantes-para-bomberos/rescate/muneca-elastica",
      buttonText: "Ver Mu\xF1eca El\xE1stica",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Casco Rescate T\xE9cnico NFPA 1951",
      badge: "NFPA 1951",
      description: "Casco certificado para rescate vertical y trabajo en altura. Compatible con sistemas de cuerda y arn\xE9s.",
      href: "/productos/cascos-para-bomberos",
      buttonText: "Ver Cascos Rescate",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Botas Rescate T\xE9cnico",
      badge: "NFPA 1951",
      description: "Calzado certificado para rescate t\xE9cnico y vertical. Suela Vibram antiderrapante y puntera composite.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas Rescate",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Perfil Ultrafino Destreza 5", href: "/productos/guantes-para-bomberos/rescate/perfil-ultrafino" },
    { label: "Anticorte EN 388 Nivel 4/5", href: "/productos/guantes-para-bomberos/rescate/anticorte-en-388" },
    { label: "Palma Reforzada Kevlar\xAE", href: "/productos/guantes-para-bomberos/rescate/palma-kevlar" },
    { label: "Antiperforaci\xF3n Nivel 4", href: "/productos/guantes-para-bomberos/rescate/antiperforacion" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/rescate/muneca-elastica" },
    { label: "Ver Todos los Guantes Rescate", href: "/productos/guantes-para-bomberos/rescate" }
  ];
  const epp = [
    { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales NFPA", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Rescate T\xE9cnico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas Goggle Bombero ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes de Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Producto" },
    { label: "EPP Rescate en Altura Completo", href: "/blog/cascos-bombero-certificados", tag: "Art\xEDculo" },
    { label: "Sistemas de Cuerda Certificados", href: "/blog/cascos-bombero-certificados", tag: "Art\xEDculo" },
    { label: "Seguridad Trabajo Vertical", href: "/blog/cascos-bombero-certificados", tag: "Art\xEDculo" },
    { label: "Cascos y Arneses Rescate", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" }
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
    { label: "Palma", valor: "Cuero nobuck antideslizante" },
    { label: "Costuras", valor: "Externas Kevlar\xAE triple puntada" },
    { label: "Destreza", valor: "Nivel 5 (m\xE1ximo)" },
    { label: "Abrasi\xF3n EN 388", valor: "Nivel 4 (>8,000 ciclos)" },
    { label: "Compatibilidad", valor: "Cuerdas 9.5\u201313 mm" },
    { label: "Grosor", valor: "1.8 \u2013 2.2 mm" },
    { label: "Tallas", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Rescate t\xE9cnico y trabajo vertical" },
    { code: "EN 388", desc: "Resistencia mec\xE1nica 3-4-2-X" },
    { code: "Destreza 5", desc: "Nivel m\xE1ximo sensibilidad t\xE1ctil" },
    { code: "Sin Enganches", desc: "Dise\xF1o certificado trabajo arn\xE9s" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Rescate Compatible Arn\xE9s y Cuerda | BOMBERO.MX", "description": "Guantes de rescate vertical compatible arn\xE9s certificados NFPA 1951. Palma nobuck antideslizante, costuras externas Kevlar\xAE, destreza nivel 5. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes compatible arn\xE9s",
    "guantes rescate vertical",
    "guantes bombero trabajo cuerda",
    "guantes NFPA 1951 M\xE9xico",
    "guantes rescate en altura",
    "guantes rapel bombero",
    "guantes nobuck rescate",
    "comprar guantes vertical M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/rescate/compatible-arnes", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Compatible Arn\xE9s" }
  ], "heroBadge": "Guantes de Rescate \xB7 NFPA 1951 \xB7 Compatible Arn\xE9s", "heroTitle": "Guantes de Rescate NFPA 1951", "heroTitleHighlight": "Compatible Arn\xE9s y Cuerda", "heroSubtitle": "Dise\xF1ados para trabajo vertical profesional. Palma cuero nobuck antideslizante con patr\xF3n de fricci\xF3n optimizado para cuerdas. Costuras externas Kevlar\xAE triple puntada. Destreza nivel 5 sin elementos sobresalientes. Certificaci\xF3n NFPA 1951 trabajo vertical incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Compatible Arn\xE9s \u2014 Rescate Vertical Profesional M\xE9xico",
      text: "Los <strong>guantes de rescate compatible arn\xE9s</strong> est\xE1n dise\xF1ados espec\xEDficamente para trabajo vertical: palma cuero nobuck con patr\xF3n de fricci\xF3n para cuerdas, costuras externas Kevlar\xAE que no causan ampollas, dise\xF1o sin enganches certificado. Destreza nivel 5 para manipular mosquetones y descensores sin quitarse el guante. En <strong>BOMBERO.MX</strong> distribuimos guantes de rescate vertical certificados NFPA 1951 a equipos especializados en altura en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1951 Trabajo Vertical \u2014 Costuras Externas Kevlar\xAE",
      text: "Cada par de <strong>guantes rescate vertical</strong> incluye certificaci\xF3n NFPA 1951 espec\xEDfica para trabajo en altura con arn\xE9s. Costuras externas triple puntada Kevlar\xAE 3-ply con resistencia 5\xD7 superior. Compatible con cuerdas din\xE1micas 9.5\u201311 mm y est\xE1ticas 10.5\u201313 mm. Documentaci\xF3n v\xE1lida para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Esencial para rescate en altura seguro."
    }
  ], "ctaBarQuote": "Cotizar Guantes Compatible Arn\xE9s", "productoCategoria": "Guantes de Rescate Vertical", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1951" },
    { modifier: "vertical", text: "Trabajo Vertical" },
    { modifier: "destreza", text: "Destreza 5" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Rescate NFPA 1951", "productoTitleSub": "Compatible Arn\xE9s y Cuerda", "productoDesc": "Guantes de rescate vertical con palma cuero nobuck antideslizante optimizado para cuerdas. Costuras externas Kevlar\xAE triple puntada previenen fricci\xF3n y ampollas. Dise\xF1o sin enganches certificado para arn\xE9s. Destreza nivel 5 m\xE1xima. Certificaci\xF3n NFPA 1951 trabajo vertical incluida.", "productoFeatures": [
    "Palma nobuck antideslizante para cuerdas",
    "Costuras externas Kevlar\xAE triple puntada",
    "Dise\xF1o sin enganches \u2014 certificado arn\xE9s",
    "Destreza nivel 5 \u2014 m\xE1xima sensibilidad",
    "Compatible cuerdas 9.5\u201313 mm",
    "Tallas S a 2XL \u2014 EN 388 3-4-2-X"
  ], "productoAppTags": [
    "Rescate vertical",
    "Trabajo en altura",
    "Rapel y ascensos",
    "Espacios confinados",
    "Monta\xF1ismo rescate"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes compatible arn\xE9s y cuerda" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero rescate vertical con guantes" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP rescate en altura completo" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Operaci\xF3n rescate vertical" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes nobuck en operaci\xF3n" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento rescate en altura" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Optimizado Trabajo Vertical", "capasDesc": "Tres capas especializadas dise\xF1adas para m\xE1xima destreza, agarre en cuerdas y compatibilidad total con sistemas de arn\xE9s y mosquetones.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan NFPA 1951 trabajo vertical y EN 388 3-4-2-X vigentes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Compatible Arn\xE9s?", "aplicacionesContent": "<p>Los guantes de rescate compatible arn\xE9s son el EPP est\xE1ndar para operaciones de rescate vertical profesional donde el trabajo con cuerdas, mosquetones y dispositivos de descenso es continuo.</p><p>El dise\xF1o especializado sin enganches, costuras externas y palma nobuck antideslizante previene los tres riesgos principales del trabajo vertical: enganches en equipos bajo carga, ampollas por fricci\xF3n y p\xE9rdida de agarre en cuerdas h\xFAmedas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1951 \u2014 Trabajo Vertical Especializado", "certsDesc": "La norma <strong>NFPA 1951</strong> incluye requisitos espec\xEDficos para guantes de rescate vertical: compatibilidad con sistemas de cuerda, ausencia de elementos que puedan engancharse y resistencia a abrasi\xF3n por fricci\xF3n con cuerdas. <strong>EN 388 3-4-2-X</strong> certifica resistencia mec\xE1nica para trabajo t\xE9cnico.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/rescate", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Compatible Arn\xE9s", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre dise\xF1o sin enganches, agarre en cuerdas, costuras externas y aplicaciones en rescate vertical.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y certificados NFPA 1951 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Rescate Vertical", "relacionadosDesc": "Los guantes compatible arn\xE9s NFPA 1951 trabajan como parte de un sistema. Todos los equipos certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/compatible-arnes/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/compatible-arnes/index.astro";
const $$url = "/productos/guantes-para-bomberos/rescate/compatible-arnes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
