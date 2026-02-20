import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Dise\xF1o Ergon\xF3mico 3D",
      descripcion: "Primera barrera de contacto con construcci\xF3n ergon\xF3mica 3D preformada. Cuero de cabra selecta 0.9\u20131.1 mm en palma y dedos para m\xE1xima sensibilidad t\xE1ctil + Nomex\xAE IIIA 5.0 oz/yd\xB2 en dorso para protecci\xF3n t\xE9rmica optimizada. Paneles articulados en nudillos y falanges que siguen el movimiento natural de la mano sin restricci\xF3n.",
      specs: [
        { label: "Palma y dedos", valor: "Cuero cabra 0.9\u20131.1 mm selecta" },
        { label: "Dorso", valor: "Nomex\xAE IIIA 5.0 oz/yd\xB2 ligero" },
        { label: "Construcci\xF3n", valor: "Paneles 3D preformados articulados" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 \u2014 Nivel 4" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 PTFE Ultra Delgado",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno ultra delgado de 0.008 mm (versus 0.010 mm est\xE1ndar) que mantiene impermeabilidad certificada con reducci\xF3n de 20% en espesor total. Esto mejora sensibilidad t\xE1ctil sin comprometer protecci\xF3n contra agua y vapores.",
      specs: [
        { label: "Membrana", valor: "PTFE ultra delgado 0.008 mm" },
        { label: "Impermeabilidad", valor: "NFPA 1971 Section 7.9 \u2713" },
        { label: "Transpirabilidad", valor: "MVTR > 1,200 g/m\xB2/24 h" },
        { label: "Mejora sensibilidad", valor: "Reducci\xF3n 20% espesor vs est\xE1ndar" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro T\xE9rmico \u2014 Nomex\xAE Delgado Optimizado",
      descripcion: "Tercera capa: liner t\xE9rmico de Nomex\xAE 100% con construcci\xF3n de punto optimizado que reduce volumen sin sacrificar protecci\xF3n t\xE9rmica. TPP \u2265 20 cal/cm\xB2 certificado con peso total de solo 245 g por par \u2014 el guante estructural NFPA 1971 m\xE1s ligero disponible.",
      specs: [
        { label: "Liner", valor: "Nomex\xAE 100% punto optimizado delgado" },
        { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2 certificado" },
        { label: "THL", valor: "> 150 W/m\xB2" },
        { label: "Peso total guante", valor: "< 245 g por par ultraligero" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior ergon\xF3mico + barrera + liner)" },
    { categoria: "Construcci\xF3n", label: "Palma y dedos", valor: "Cuero cabra 0.9\u20131.1 mm selecta" },
    { categoria: "Construcci\xF3n", label: "Dorso", valor: "Nomex\xAE IIIA 5.0 oz/yd\xB2 ligero" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "PTFE ultra delgado 0.008 mm" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE 100% punto optimizado" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE en zonas cr\xEDticas" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 150 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia al corte", valor: "EN 388 Nivel B" },
    { categoria: "Protecci\xF3n", label: "Impermeabilidad", valor: "NFPA 1971 Method 6 aprobado" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o", valor: "Ergon\xF3mico 3D preformado articulado" },
    { categoria: "Ergonom\xEDa", label: "Paneles articulados", valor: "Nudillos y falanges sin restricci\xF3n" },
    { categoria: "Ergonom\xEDa", label: "Peso total", valor: "< 245 g por par ultraligero" },
    { categoria: "Ergonom\xEDa", label: "Longitud pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" },
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
      titulo: "Manipulaci\xF3n de Acoples y Herramientas",
      desc: "Tareas delicadas que requieren sensibilidad t\xE1ctil: conectar acoples de manguera, manipular v\xE1lvulas, operar herramientas de precisi\xF3n. El cuero de cabra en palma ofrece agarre superior."
    },
    {
      titulo: "B\xFAsqueda y Rescate Primario",
      desc: "Operaciones de b\xFAsqueda en estructuras oscuras donde la sensibilidad t\xE1ctil es cr\xEDtica para localizar v\xEDctimas. El dise\xF1o 3D articulado permite exploraci\xF3n manual sin fatiga."
    },
    {
      titulo: "Operaciones Prolongadas",
      desc: "Combate de incendio en etapa de extinci\xF3n y overhaul que requiere destreza manual continua durante > 2 horas. Peso ultraligero (245 g) reduce fatiga significativamente."
    },
    {
      titulo: "Param\xE9dicos y Rescate M\xE9dico",
      desc: "Atenci\xF3n prehospitalaria en escena de incendio: toma de signos vitales, colocaci\xF3n de v\xEDas, inmovilizaci\xF3n. La destreza t\xE1ctil permite procedimientos m\xE9dicos con guantes puestos."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 el cuero de cabra es mejor que el cuero de vaqueta para destreza t\xE1ctil?",
      a: "El cuero de cabra tiene estructura de fibra m\xE1s fina y uniforme que el cuero de vaqueta. Con grosor de 0.9\u20131.1 mm (versus 1.2\u20131.4 mm en vaqueta), ofrece 25% menos volumen manteniendo resistencia mec\xE1nica certificada. Resultado: sensibilidad t\xE1ctil superior para tareas delicadas como conectar acoples de manguera o manipular herramientas de precisi\xF3n. Tradicionalmente usado en guantes quir\xFArgicos por su suavidad y flexibilidad natural."
    },
    {
      q: "\xBFLa reducci\xF3n de peso (245 g versus 280 g) es realmente significativa?",
      a: "S\xED. En operaciones prolongadas de > 2 horas, la diferencia de 35 g por par (12.5% menos peso) reduce fatiga muscular en manos y antebrazos de forma notable. Esto es cr\xEDtico durante overhaul o b\xFAsqueda extendida donde la destreza manual debe mantenerse durante per\xEDodos prolongados. Estudios biomec\xE1nicos muestran que reducci\xF3n de > 10% en peso de guantes mejora desempe\xF1o en tareas de destreza fina."
    },
    {
      q: "\xBFLos paneles 3D preformados requieren per\xEDodo de adaptaci\xF3n?",
      a: "No. Los paneles 3D preformados siguen la curvatura natural de la mano en posici\xF3n de agarre \u2014 est\xE1n dise\xF1ados ergon\xF3micamente desde f\xE1brica. A diferencia de guantes planos que requieren semanas de uso para ablandarse, los guantes 3D ofrecen ergonom\xEDa \xF3ptima desde el primer uso. No hay per\xEDodo de adaptaci\xF3n inc\xF3modo."
    },
    {
      q: "\xBFLa barrera PTFE ultra delgada (0.008 mm) es menos duradera?",
      a: "No. La membrana PTFE ultra delgada usa tecnolog\xEDa de microporosos reforzados que mantiene la misma resistencia mec\xE1nica que membranas est\xE1ndar de 0.010 mm. La diferencia de 0.002 mm se logra mediante optimizaci\xF3n de la estructura molecular, no reduciendo resistencia. Certificaci\xF3n NFPA 1971 Method 6 garantiza durabilidad equivalente."
    },
    {
      q: "\xBFLos guantes incluyen ficha t\xE9cnica y certificado?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita TPP \u2265 20 cal/cm\xB2 con construcci\xF3n ergon\xF3mica certificada \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFCon qu\xE9 EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971, casco NFPA 1971, botas certificadas y SCBA NFPA 1981. El pu\xF1o de 3.5 pulgadas se ajusta sobre la manga del traje para sellado t\xE9rmico completo."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Cuero Vaqueta Est\xE1ndar",
      badge: "NFPA 1971",
      description: "Opci\xF3n cl\xE1sica con cuero vaqueta 1.2\u20131.4 mm. Mayor resistencia mec\xE1nica para operaciones con abrasi\xF3n extrema.",
      href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional",
      buttonText: "Ver Guantes Vaqueta",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Rescate T\xE9cnico NFPA 1951",
      badge: "NFPA 1951",
      description: "Guantes especializados para rescate t\xE9cnico con destreza t\xE1ctil optimizada. Ideales para operaciones en alturas.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas certificado. Compatible con guantes de alta destreza para protecci\xF3n integral del bombero.",
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
    { label: "Kevlar\xAE Tejido Anticorte", href: "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte" },
    { label: "Barrera Gore-Tex\xAE Impermeable", href: "/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable" },
    { label: "Pu\xF1o Extendido 4 Pulgadas", href: "/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas" },
    { label: "Forro Nomex\xAE PBI T\xE9rmico", href: "/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico" },
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
    { label: "Sistema", valor: "3 capas ergon\xF3micas" },
    { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { label: "Palma y dedos", valor: "Cuero cabra 0.9\u20131.1 mm" },
    { label: "Dorso", valor: "Nomex\xAE IIIA 5.0 oz/yd\xB2" },
    { label: "Barrera", valor: "PTFE ultra delgado 0.008 mm" },
    { label: "Peso", valor: "< 245 g ultraligero" },
    { label: "Dise\xF1o", valor: "3D preformado articulado" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "Ergon\xF3mico 3D", desc: "Paneles articulados preformados certificados" },
    { code: "Peso < 245 g", desc: "Guante estructural m\xE1s ligero disponible" },
    { code: "TPP \u2265 20", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica certificada" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Estructurales NFPA 1971 \u2014 Alta Destreza T\xE1ctil | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 ergon\xF3micos 3D. Cuero cabra 0.9\u20131.1 mm en palma, PTFE ultra delgado. Peso < 245 g ultraligero. TPP \u2265 20 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a M\xE9xico.", "keywords": [
    "guantes bombero alta destreza",
    "guantes estructurales ergon\xF3micos NFPA 1971",
    "guantes bombero destreza t\xE1ctil",
    "guantes ergon\xF3micos M\xE9xico",
    "guantes bombero ultraligeros",
    "guantes estructurales cuero cabra",
    "guantes bombero 3D preformados",
    "comprar guantes destreza NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Alta Destreza T\xE1ctil" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Alta Destreza", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Alta Destreza T\xE1ctil", "heroSubtitle": "M\xE1xima sensibilidad y ergonom\xEDa certificada. Dise\xF1o 3D preformado con cuero de cabra 0.9\u20131.1 mm en palma, PTFE ultra delgado y peso ultraligero < 245 g. TPP \u2265 20 cal/cm\xB2. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Alta Destreza T\xE1ctil \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales de alta destreza t\xE1ctil NFPA 1971</strong> integran dise\xF1o ergon\xF3mico 3D preformado con cuero de cabra selecta 0.9\u20131.1 mm en palma y dedos, Nomex\xAE IIIA ligero en dorso, barrera PTFE ultra delgado 0.008 mm y liner Nomex\xAE optimizado. Peso ultraligero < 245 g \u2014 el guante estructural NFPA 1971 m\xE1s ligero disponible. TPP \u2265 20 cal/cm\xB2 certificado. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para operaciones que requieren destreza manual superior en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada par de <strong>guantes estructurales de alta destreza</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. Dise\xF1o ergon\xF3mico 3D certificado, resistencia t\xE9rmica ASTM F1060 Nivel 4, costuras en hilo Kevlar\xAE en zonas cr\xEDticas."
    }
  ], "ctaBarQuote": "Cotizar Guantes Alta Destreza NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 20" },
    { modifier: "ergo", text: "3D Ergo" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Alta Destreza T\xE1ctil", "productoDesc": "Sistema de 3 capas certificado NFPA 1971 con dise\xF1o ergon\xF3mico 3D preformado: cuero de cabra selecta 0.9\u20131.1 mm en palma y dedos para m\xE1xima sensibilidad t\xE1ctil, Nomex\xAE IIIA 5.0 oz/yd\xB2 ligero en dorso, barrera PTFE ultra delgado 0.008 mm y liner Nomex\xAE 100% punto optimizado. Paneles articulados en nudillos y falanges. Peso ultraligero < 245 g por par. TPP \u2265 20 cal/cm\xB2. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Dise\xF1o ergon\xF3mico 3D preformado articulado",
    "Cuero cabra 0.9\u20131.1 mm palma y dedos",
    "PTFE ultra delgado 0.008 mm sensibilidad",
    "Peso ultraligero < 245 g por par",
    "Paneles articulados sin restricci\xF3n",
    "TPP \u2265 20 cal/cm\xB2 certificado"
  ], "productoAppTags": [
    "Manipulaci\xF3n acoples",
    "B\xFAsqueda y rescate",
    "Operaciones prolongadas",
    "Rescate m\xE9dico",
    "Tareas delicadas"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales alta destreza NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes alta destreza" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes ergon\xF3micos en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes alta destreza" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas Ergon\xF3micas", "capasDesc": "Cada capa est\xE1 optimizada para destreza t\xE1ctil: el cuero de cabra ofrece sensibilidad superior, la barrera PTFE ultra delgada reduce volumen 20%, y el liner Nomex\xAE optimizado minimiza peso sin comprometer protecci\xF3n t\xE9rmica.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente con dise\xF1o ergon\xF3mico certificado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Alta Destreza T\xE1ctil?", "aplicacionesContent": "<p>Los guantes estructurales de alta destreza t\xE1ctil son el EPP est\xE1ndar para operaciones que requieren sensibilidad manual superior.</p><p>El cuero de cabra tiene estructura de fibra m\xE1s fina que el cuero de vaqueta. Con grosor de 0.9\u20131.1 mm (versus 1.2\u20131.4 mm), ofrece 25% menos volumen manteniendo resistencia mec\xE1nica certificada. El dise\xF1o 3D preformado con paneles articulados en nudillos y falanges sigue la curvatura natural de la mano sin restricci\xF3n \u2014 ergonom\xEDa \xF3ptima desde el primer uso. Peso ultraligero de 245 g (versus 280 g est\xE1ndar) reduce fatiga en operaciones prolongadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 \u2014 Destreza T\xE1ctil con Protecci\xF3n Certificada", "certsDesc": "La norma <strong>NFPA 1971</strong> establece requisitos m\xEDnimos de protecci\xF3n t\xE9rmica y mec\xE1nica sin especificar dise\xF1o ergon\xF3mico. Los guantes de alta destreza cumplen o superan todos los m\xEDnimos NFPA mientras optimizan sensibilidad t\xE1ctil mediante construcci\xF3n 3D preformada y materiales de bajo volumen certificados.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales de Alta Destreza T\xE1ctil", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el dise\xF1o ergon\xF3mico 3D, cuero de cabra, PTFE ultra delgado, peso ultraligero y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales de alta destreza trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
