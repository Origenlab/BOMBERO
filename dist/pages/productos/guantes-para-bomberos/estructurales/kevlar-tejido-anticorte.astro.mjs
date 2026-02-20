import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Kevlar\xAE Tejido Reforzado",
      descripcion: "Primera barrera de contacto. El tejido de fibra Kevlar\xAE ofrece resistencia al corte nivel 4 seg\xFAn EN 388 \u2014 la m\xE1xima clasificaci\xF3n para guantes de bombero. La fibra aramida no se derrite ni arde, y mantiene su integridad estructural hasta 400\xB0C. Peso de 280\u2013320 g/m\xB2 que equilibra protecci\xF3n con destreza.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE 100% tejido reforzado" },
        { label: "Peso tejido", valor: "280 \u2013 320 g/m\xB2" },
        { label: "Resistencia al corte", valor: "EN 388 Nivel 4 certificado" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 Membrana PTFE",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno que impide el paso de agua, vapores y l\xEDquidos peligrosos. A diferencia del cuero tradicional, el Kevlar\xAE con barrera PTFE mantiene protecci\xF3n t\xE9rmica incluso despu\xE9s de mojarse.",
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
      titulo: "Forro T\xE9rmico \u2014 Nomex\xAE / PBI\xAE Matrix",
      descripcion: "Tercera capa: liner t\xE9rmico de fibras Nomex\xAE y PBI\xAE que a\xEDsla del calor radiante y protege contra cortes internos. TPP \u2265 22 cal/cm\xB2 \u2014 superior al m\xEDnimo NFPA gracias al efecto sin\xE9rgico del Kevlar\xAE exterior.",
      specs: [
        { label: "Liner", valor: "Nomex\xAE 60% + PBI\xAE 40% matrix" },
        { label: "TPP m\xEDnimo", valor: "\u2265 22 cal/cm\xB2 certificado" },
        { label: "THL", valor: "> 160 W/m\xB2" },
        { label: "Peso total guante", valor: "< 260 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + barrera + liner)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Kevlar\xAE 100% tejido 280\u2013320 g/m\xB2" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Membrana PTFE microporosa" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE 60% / PBI\xAE 40% matrix" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE reforzado triple costura" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 22 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 160 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia al corte", valor: "EN 388 Nivel 4 m\xE1ximo" },
    { categoria: "Protecci\xF3n", label: "Resistencia a la llama", valor: "ASTM D6413 aprobado" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o", valor: "Ergon\xF3mico preformado" },
    { categoria: "Ergonom\xEDa", label: "Longitud pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" },
    { categoria: "Ergonom\xEDa", label: "Refuerzo palma", valor: "Doble capa Kevlar\xAE tejido" },
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
      titulo: "Operaciones con Vidrio y Metal",
      desc: "Protecci\xF3n m\xE1xima al corte durante rescate vehicular, ruptura de ventanas y manipulaci\xF3n de escombros met\xE1licos. El Kevlar\xAE nivel 4 resiste bordes afilados."
    },
    {
      titulo: "Rescate Urbano en Colapsos",
      desc: "B\xFAsqueda y extracci\xF3n en estructuras colapsadas con presencia de metal, vidrio y concreto armado. Resistencia superior al corte sin sacrificar protecci\xF3n t\xE9rmica."
    },
    {
      titulo: "Manejo de Herramientas El\xE9ctricas",
      desc: "Operaci\xF3n de sierras, motosierras y herramientas de corte durante ventilaci\xF3n forzada. El Kevlar\xAE protege contra accidentes con herramientas en movimiento."
    },
    {
      titulo: "Combate de Incendio Estructural",
      desc: "Extinci\xF3n de incendios en edificios con TPP \u2265 22 cal/cm\xB2. El Kevlar\xAE mantiene protecci\xF3n t\xE9rmica incluso despu\xE9s de mojarse \u2014 ventaja sobre el cuero tradicional."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 ventaja ofrece el Kevlar\xAE sobre el cuero vaqueta tradicional?",
      a: "El Kevlar\xAE tejido ofrece resistencia al corte nivel 4 seg\xFAn EN 388 \u2014 la m\xE1xima clasificaci\xF3n. Esto es cr\xEDtico en rescate vehicular, ruptura de vidrio y operaciones entre escombros met\xE1licos. Adicionalmente, el Kevlar\xAE mantiene su protecci\xF3n t\xE9rmica incluso despu\xE9s de mojarse, mientras que el cuero h\xFAmedo pierde aislamiento t\xE9rmico."
    },
    {
      q: "\xBFQu\xE9 significa resistencia al corte EN 388 Nivel 4?",
      a: "EN 388 es la norma europea de resistencia mec\xE1nica. El Nivel 4 (m\xE1ximo) indica que el material resiste > 20 ciclos de corte con cuchilla est\xE1ndar de 5N antes de perforaci\xF3n. En t\xE9rminos pr\xE1cticos: resistencia superior contra vidrio roto, metal afilado y l\xE1mina durante rescate vehicular."
    },
    {
      q: "\xBFEl Kevlar\xAE es m\xE1s ligero que el cuero?",
      a: "S\xED. Un guante de Kevlar\xAE tejido completo pesa ~260 g por par versus ~280 g en cuero vaqueta tradicional. Esta diferencia reduce fatiga en operaciones prolongadas y mejora destreza manual para tareas delicadas como manipular acoples de manguera."
    },
    {
      q: "\xBFLos guantes incluyen certificado de laboratorio?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita el cumplimiento de NFPA 1971 y EN 388 Nivel 4 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFEl Kevlar\xAE requiere mantenimiento especial?",
      a: "El Kevlar\xAE requiere menos mantenimiento que el cuero. Lavar en agua tibia con jab\xF3n neutro despu\xE9s de operaciones sucias, secar a temperatura ambiente. No aplicar acondicionadores ni productos qu\xEDmicos \u2014 el Kevlar\xAE no se endurece ni agrieta como el cuero."
    },
    {
      q: "\xBFCon qu\xE9 EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971, casco NFPA 1971, botas certificadas y SCBA NFPA 1981. El pu\xF1o de 3.5 pulgadas se ajusta sobre la manga del traje para sellado t\xE9rmico completo."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Cuero Vaqueta Tradicional",
      badge: "NFPA 1971",
      description: "Opci\xF3n cl\xE1sica en cuero vaqueta curtido al cromo. Equilibrio tradicional entre protecci\xF3n, durabilidad y sensibilidad t\xE1ctil.",
      href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional",
      buttonText: "Ver Guantes Cuero",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Guantes especializados para combate forestal. Resistencia mec\xE1nica superior con ventilaci\xF3n optimizada para clima c\xE1lido.",
      href: "/productos/guantes-para-bomberos/forestales",
      buttonText: "Ver Guantes Forestales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas certificado. Compatible con guantes Kevlar\xAE para protecci\xF3n integral del bombero.",
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
    { label: "Cuero Vaqueta Tradicional", href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional" },
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
    { label: "Guantes Rescate T\xE9cnico NFPA", href: "/productos/guantes-para-bomberos/rescate", tag: "Producto" },
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
    { label: "TPP m\xEDnimo", valor: "\u2265 22 cal/cm\xB2" },
    { label: "Capa exterior", valor: "Kevlar\xAE 100% tejido" },
    { label: "Barrera", valor: "PTFE microporosa" },
    { label: "Liner", valor: "Nomex\xAE 60% / PBI\xAE 40%" },
    { label: "Corte", valor: "EN 388 Nivel 4 m\xE1ximo" },
    { label: "Pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "EN 388 Nivel 4", desc: "Resistencia al corte m\xE1xima certificada" },
    { code: "ASTM F1060", desc: "Resistencia t\xE9rmica contacto Nivel 4" },
    { code: "TPP \u2265 22", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica superior" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes NFPA 1971 \u2014 Kevlar\xAE Tejido Anticorte | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 en Kevlar\xAE 100% tejido con resistencia al corte EN 388 Nivel 4. Barrera PTFE y liner Nomex\xAE/PBI\xAE. TPP \u2265 22 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a M\xE9xico.", "keywords": [
    "guantes bombero kevlar anticorte",
    "guantes estructurales kevlar NFPA 1971",
    "guantes bombero resistencia corte",
    "guantes kevlar M\xE9xico precio",
    "guantes bombero EN 388 nivel 4",
    "guantes estructurales anticorte",
    "guantes kevlar bombero certificados",
    "comprar guantes kevlar NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Kevlar\xAE Tejido Anticorte" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Kevlar\xAE Anticorte", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Kevlar\xAE Tejido Anticorte", "heroSubtitle": "M\xE1xima resistencia al corte certificada. Kevlar\xAE 100% tejido reforzado con EN 388 Nivel 4, barrera PTFE impermeable y liner Nomex\xAE/PBI\xAE con TPP \u2265 22 cal/cm\xB2. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Kevlar\xAE Anticorte \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales de Kevlar\xAE tejido NFPA 1971</strong> ofrecen resistencia al corte EN 388 Nivel 4 \u2014 la m\xE1xima clasificaci\xF3n para guantes de bombero. Sistema de 3 capas: exterior en Kevlar\xAE 100% tejido reforzado, barrera PTFE impermeable y liner t\xE9rmico Nomex\xAE/PBI\xAE con TPP \u2265 22 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para rescate vehicular, operaciones con vidrio y metal en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 y EN 388 Nivel 4 con Ficha T\xE9cnica Completa",
      text: "Cada par de <strong>guantes estructurales de Kevlar\xAE anticorte</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. Resistencia t\xE9rmica ASTM F1060 Nivel 4, resistencia al corte EN 388 Nivel 4 m\xE1ximo, costuras en hilo Kevlar\xAE triple costura."
    }
  ], "ctaBarQuote": "Cotizar Guantes Kevlar\xAE Anticorte NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 22" },
    { modifier: "cut", text: "EN 388-4" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Kevlar\xAE Tejido Anticorte", "productoDesc": "Sistema de 3 capas certificado NFPA 1971: capa exterior en Kevlar\xAE 100% tejido reforzado 280\u2013320 g/m\xB2, barrera de humedad PTFE microporosa y liner t\xE9rmico Nomex\xAE/PBI\xAE matrix. Resistencia al corte EN 388 Nivel 4 m\xE1ximo. TPP \u2265 22 cal/cm\xB2. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Kevlar\xAE 100% tejido reforzado 280\u2013320 g/m\xB2",
    "Resistencia al corte EN 388 Nivel 4 m\xE1ximo",
    "Barrera PTFE impermeable transpirable",
    "Liner Nomex\xAE 60% + PBI\xAE 40% matrix",
    "TPP \u2265 22 cal/cm\xB2 superior a NFPA",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Rescate vehicular",
    "Operaciones con vidrio",
    "Rescate urbano",
    "Herramientas el\xE9ctricas",
    "Incendio estructural"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales Kevlar anticorte NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes Kevlar en rescate" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes anticorte en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes Kevlar" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica: el Kevlar\xAE tejido ofrece resistencia al corte nivel 4, la barrera PTFE mantiene las manos secas, y el liner t\xE9rmico a\xEDsla del calor radiante.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente y EN 388 Nivel 4.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Kevlar\xAE Anticorte?", "aplicacionesContent": "<p>Los guantes estructurales de Kevlar\xAE tejido son el EPP est\xE1ndar para operaciones con riesgo elevado de corte.</p><p>El Kevlar\xAE tejido reforzado ofrece resistencia al corte EN 388 Nivel 4 \u2014 la m\xE1xima clasificaci\xF3n disponible. Esto es cr\xEDtico en rescate vehicular, ruptura de vidrio, operaciones con metal afilado y manejo de herramientas de corte. A diferencia del cuero tradicional, el Kevlar\xAE mantiene su protecci\xF3n t\xE9rmica incluso despu\xE9s de mojarse.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 y EN 388 Nivel 4 \u2014 Protecci\xF3n M\xE1xima", "certsDesc": "La norma <strong>NFPA 1971</strong> establece requisitos m\xEDnimos para guantes estructurales. La norma europea <strong>EN 388</strong> certifica resistencia mec\xE1nica: el Nivel 4 es la m\xE1xima clasificaci\xF3n disponible para resistencia al corte con > 20 ciclos antes de perforaci\xF3n.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales de Kevlar\xAE Anticorte", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el Kevlar\xAE tejido, resistencia al corte EN 388 Nivel 4, mantenimiento y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
