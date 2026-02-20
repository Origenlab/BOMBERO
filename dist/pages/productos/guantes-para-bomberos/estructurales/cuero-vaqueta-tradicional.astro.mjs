import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Cuero Vaqueta Premium",
      descripcion: "Primera barrera de contacto. El cuero de vaqueta curtido al cromo ofrece resistencia inherente al calor, abrasi\xF3n y corte. Grosor de 1.2\u20131.4 mm que equilibra protecci\xF3n con sensibilidad t\xE1ctil. El cuero no se derrite ante contacto directo con superficies calientes.",
      specs: [
        { label: "Material", valor: "Cuero vaqueta curtido al cromo" },
        { label: "Grosor", valor: "1.2 \u2013 1.4 mm selecta" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 \u2014 Nivel 4" },
        { label: "Resistencia al corte", valor: "EN 388 Nivel C certificado" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 Membrana PTFE",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno que impide el paso de agua y vapores mientras permite la evacuaci\xF3n del sudor. Mantiene las manos secas en operaciones de extinci\xF3n con mangueras y espuma.",
      specs: [
        { label: "Membrana", valor: "PTFE microporoso transpirable" },
        { label: "Impermeabilidad", valor: "NFPA 1971 Section 7.9 \u2713" },
        { label: "Transpirabilidad", valor: "MVTR > 1,200 g/m\xB2/24 h" },
        { label: "Resistencia qu\xEDmica", valor: "Splash limitado certificado" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro T\xE9rmico \u2014 Nomex\xAE / Kevlar\xAE Blend",
      descripcion: "Tercera capa: liner t\xE9rmico de fibras Nomex\xAE y Kevlar\xAE que a\xEDsla del calor radiante y protege contra cortes internos. TPP \u2265 20 cal/cm\xB2 garantiza protecci\xF3n t\xE9rmica certificada seg\xFAn NFPA 1971.",
      specs: [
        { label: "Liner", valor: "Nomex\xAE 50% + Kevlar\xAE 50% blend" },
        { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2 certificado" },
        { label: "THL", valor: "> 150 W/m\xB2" },
        { label: "Peso total guante", valor: "< 280 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + barrera + liner)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Membrana PTFE microporosa" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE 50% / Kevlar\xAE 50%" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE reforzado" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 150 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia al corte", valor: "EN 388 Nivel C" },
    { categoria: "Protecci\xF3n", label: "Resistencia a la llama", valor: "ASTM D6413 aprobado" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o", valor: "Ergon\xF3mico preformado" },
    { categoria: "Ergonom\xEDa", label: "Longitud pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" },
    { categoria: "Ergonom\xEDa", label: "Refuerzo palma", valor: "Doble capa cuero vaqueta" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" },
    { categoria: "Certificaci\xF3n", label: "Compatible con EPP NFPA", valor: "S\xED \u2014 todos los fabricantes" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Combate de Incendio Estructural",
      desc: "Protecci\xF3n de manos durante operaciones de extinci\xF3n en edificios. El cuero vaqueta resiste contacto directo con superficies calientes y escombros."
    },
    {
      titulo: "Manipulaci\xF3n de Mangueras",
      desc: "Agarre seguro de l\xEDneas de agua, pitones y acoples met\xE1licos. La barrera PTFE mantiene las manos secas durante operaciones prolongadas con agua."
    },
    {
      titulo: "Rescate en Estructuras",
      desc: "B\xFAsqueda y extracci\xF3n en edificios colapsados. El cuero protege contra cortes, abrasi\xF3n y punci\xF3n en operaciones entre escombros y metal."
    },
    {
      titulo: "Operaciones de Ventilaci\xF3n",
      desc: "Manejo de herramientas de ruptura, sierras y hachas. La palma reforzada en doble capa resiste la abrasi\xF3n del mango durante trabajo pesado."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 el cuero vaqueta es la opci\xF3n tradicional en guantes estructurales?",
      a: "El cuero vaqueta curtido al cromo es el material cl\xE1sico de guantes NFPA 1971 por su equilibrio entre protecci\xF3n t\xE9rmica, resistencia mec\xE1nica y sensibilidad t\xE1ctil. A diferencia de materiales sint\xE9ticos, el cuero no se derrite ante contacto directo con superficies calientes \u2014 simplemente se carboniza manteniendo su integridad estructural."
    },
    {
      q: "\xBFQu\xE9 grosor de cuero es el recomendado para trabajo estructural?",
      a: "NFPA 1971 no establece un grosor m\xEDnimo espec\xEDfico, pero el est\xE1ndar de la industria es 1.2\u20131.4 mm. Este rango ofrece protecci\xF3n certificada sin sacrificar destreza manual. Cueros m\xE1s gruesos (> 1.5 mm) aumentan protecci\xF3n pero reducen sensibilidad para tareas delicadas como manipular acoples de manguera."
    },
    {
      q: "\xBFLa barrera PTFE es igual a la membrana Gore-Tex de los trajes?",
      a: "Es la misma tecnolog\xEDa de politetrafluoroetileno microporoso. La membrana impide el paso de agua desde el exterior pero permite que el vapor del sudor escape hacia afuera. Esto mantiene las manos secas durante operaciones prolongadas con mangueras y espuma \u2014 cr\xEDtico para evitar ampollas t\xE9rmicas."
    },
    {
      q: "\xBFLos guantes incluyen ficha t\xE9cnica y certificado de laboratorio?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita el cumplimiento de NFPA 1971 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFEl cuero requiere mantenimiento especial despu\xE9s de mojarse?",
      a: "S\xED. Despu\xE9s de operaciones con agua, secar los guantes a temperatura ambiente (nunca directo al sol o cerca de radiadores). Aplicar acondicionador para cuero una vez secos para evitar que el material se endurezca o agriete. El cuero bien mantenido puede durar 2\u20133 veces m\xE1s."
    },
    {
      q: "\xBFCon qu\xE9 otros EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971, casco NFPA 1971, botas de cuero certificadas y SCBA NFPA 1981. El pu\xF1o de 3.5 pulgadas se ajusta sobre la manga del traje para sellado t\xE9rmico completo."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Rescate T\xE9cnico NFPA 1951",
      badge: "NFPA 1951",
      description: "Guantes especializados para rescate t\xE9cnico con resistencia mec\xE1nica superior. Ideales para operaciones en alturas y espacios confinados.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes HazMat Qu\xEDmicos",
      badge: "NFPA 1991",
      description: "Protecci\xF3n contra sustancias peligrosas y materiales corrosivos. Certificados para operaciones con derrames qu\xEDmicos industriales.",
      href: "/productos/guantes-para-bomberos/hazmat",
      buttonText: "Ver Guantes HAZMAT",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas certificado. Compatible con guantes estructurales para protecci\xF3n integral del bombero.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Botas Estructurales de Cuero",
      badge: "NFPA 1971",
      description: "Calzado certificado para completar el EPP estructural. Suela antiderrapante y puntera de acero reforzada.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Botas para Bombero",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Kevlar\xAE Tejido Anticorte", href: "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte" },
    { label: "Barrera Gore-Tex\xAE Impermeable", href: "/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable" },
    { label: "Pu\xF1o Extendido 4 Pulgadas", href: "/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas" },
    { label: "Forro Nomex\xAE PBI T\xE9rmico", href: "/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico" },
    { label: "Alta Destreza T\xE1ctil", href: "/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil" },
    { label: "Ver Todos Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas de Cuero Bombero", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes Forestales NFPA 1977", href: "/productos/guantes-para-bomberos/forestales", tag: "Producto" },
    { label: "EPP Completo para Bomberos", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Cascos NFPA 1971 y 1977", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes de Bombero Certificados", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
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
    { label: "Norma", valor: "NFPA 1971" },
    { label: "Sistema", valor: "3 capas" },
    { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm" },
    { label: "Barrera", valor: "PTFE microporosa" },
    { label: "Liner", valor: "Nomex\xAE / Kevlar\xAE blend" },
    { label: "Corte", valor: "EN 388 Nivel C" },
    { label: "Pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "ASTM F1060", desc: "Resistencia t\xE9rmica contacto Nivel 4" },
    { code: "EN 388 Nivel C", desc: "Resistencia al corte certificada" },
    { code: "TPP \u2265 20", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica m\xEDnima" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes NFPA 1971 \u2014 Cuero Vaqueta Tradicional | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 en cuero vaqueta 1.2\u20131.4 mm con barrera PTFE y liner Nomex\xAE/Kevlar\xAE. TPP \u2265 20 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "guantes bombero cuero vaqueta",
    "guantes estructurales NFPA 1971 M\xE9xico",
    "guantes bombero cuero tradicional",
    "guantes NFPA 1971 precio M\xE9xico",
    "guantes bombero certificados M\xE9xico",
    "guantes cuero bombero TPP 20",
    "guantes estructurales cuero vaqueta",
    "comprar guantes bombero NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Cuero Vaqueta Tradicional" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Cuero Vaqueta", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Cuero Vaqueta Tradicional", "heroSubtitle": "La opci\xF3n cl\xE1sica para incendios estructurales. Cuero de vaqueta curtido al cromo de 1.2\u20131.4 mm, barrera PTFE impermeable y liner Nomex\xAE/Kevlar\xAE con TPP \u2265 20 cal/cm\xB2. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Cuero Vaqueta \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales de cuero vaqueta NFPA 1971</strong> son el est\xE1ndar tradicional del servicio de bomberos mexicano. Sistema de 3 capas: exterior en cuero vaqueta 1.2\u20131.4 mm, barrera PTFE impermeable y liner t\xE9rmico Nomex\xAE/Kevlar\xAE con TPP \u2265 20 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para cuerpos de bomberos, brigadas industriales y protecci\xF3n civil en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada par de <strong>guantes estructurales de cuero vaqueta</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. Resistencia t\xE9rmica ASTM F1060 Nivel 4, resistencia al corte EN 388 Nivel C, costuras en hilo Kevlar\xAE."
    }
  ], "ctaBarQuote": "Cotizar Guantes Cuero Vaqueta NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 20" },
    { modifier: "cut", text: "EN 388 C" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Cuero Vaqueta Tradicional", "productoDesc": "Sistema de 3 capas certificado NFPA 1971: capa exterior en cuero de vaqueta curtido al cromo 1.2\u20131.4 mm, barrera de humedad PTFE microporosa y liner t\xE9rmico Nomex\xAE/Kevlar\xAE blend. TPP \u2265 20 cal/cm\xB2. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Cuero vaqueta 1.2\u20131.4 mm selecta",
    "Barrera PTFE impermeable transpirable",
    "Liner Nomex\xAE 50% + Kevlar\xAE 50%",
    "TPP \u2265 20 cal/cm\xB2 certificado",
    "Resistencia al corte EN 388 Nivel C",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Incendio estructural",
    "Manipulaci\xF3n de mangueras",
    "Rescate en estructuras",
    "Ventilaci\xF3n forzada",
    "Brigadas industriales"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales cuero vaqueta NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes estructurales en incendio" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes NFPA 1971 en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes estructurales" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica: el cuero vaqueta ofrece resistencia mec\xE1nica y t\xE9rmica, la barrera PTFE mantiene las manos secas, y el liner t\xE9rmico a\xEDsla del calor radiante.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Cuero Vaqueta?", "aplicacionesContent": "<p>Los guantes estructurales de cuero vaqueta son el EPP est\xE1ndar para protecci\xF3n de manos en operaciones de alto riesgo.</p><p>El cuero vaqueta curtido al cromo es el material tradicional del servicio de bomberos por su equilibrio entre protecci\xF3n, durabilidad y sensibilidad t\xE1ctil. No se derrite ante contacto con superficies calientes \u2014 caracter\xEDstica cr\xEDtica en incendios estructurales.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 \u2014 Protecci\xF3n de Manos Certificada", "certsDesc": "La norma <strong>NFPA 1971</strong> (<em>Standard on Protective Ensembles for Structural Fire Fighting</em>) establece requisitos m\xEDnimos para guantes estructurales: resistencia t\xE9rmica por contacto y radiante, impermeabilidad, resistencia mec\xE1nica y destreza manual certificada.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales de Cuero Vaqueta", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el cuero vaqueta, certificaciones, mantenimiento y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
