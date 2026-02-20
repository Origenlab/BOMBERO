import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Cuero Vaqueta / Nomex\xAE",
      descripcion: "Primera barrera de contacto. Opci\xF3n de cuero de vaqueta curtido al cromo 1.2\u20131.4 mm o tejido Nomex\xAE IIIA de 6.0 oz/yd\xB2 seg\xFAn preferencia del cliente. Ambos materiales ofrecen resistencia inherente a la llama y abrasi\xF3n certificada seg\xFAn ASTM F1060.",
      specs: [
        { label: "Material", valor: "Cuero vaqueta 1.2\u20131.4 mm / Nomex\xAE IIIA" },
        { label: "Peso Nomex\xAE", valor: "6.0 oz/yd\xB2 opcional" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 \u2014 Nivel 4" },
        { label: "Resistencia al corte", valor: "EN 388 Nivel C certificado" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera Gore-Tex\xAE \u2014 ePTFE Expandido",
      descripcion: "Segunda capa: la aut\xE9ntica membrana Gore-Tex\xAE ePTFE expandido \u2014 la tecnolog\xEDa l\xEDder mundial en impermeabilidad transpirable. Con > 9 mil millones de poros por pulgada cuadrada, cada poro es 20,000 veces m\xE1s peque\xF1o que una gota de agua pero 700 veces m\xE1s grande que una mol\xE9cula de vapor. Resultado: impermeabilidad total con transpiraci\xF3n m\xE1xima.",
      specs: [
        { label: "Membrana", valor: "Gore-Tex\xAE ePTFE expandido original" },
        { label: "Impermeabilidad", valor: "NFPA 1971 Section 7.9 \u2713" },
        { label: "Transpirabilidad", valor: "MVTR > 1,500 g/m\xB2/24 h superior" },
        { label: "Resistencia qu\xEDmica", valor: "Clase F3 certificada" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro T\xE9rmico \u2014 Caldura\xAE / PBI\xAE Gold",
      descripcion: "Tercera capa: liner t\xE9rmico premium de fibras Caldura\xAE E89 o PBI\xAE Gold Comfort que a\xEDsla del calor radiante. TPP \u2265 21 cal/cm\xB2 garantiza protecci\xF3n t\xE9rmica superior gracias al efecto sin\xE9rgico con la membrana Gore-Tex\xAE.",
      specs: [
        { label: "Liner", valor: "Caldura\xAE E89 / PBI\xAE Gold Comfort" },
        { label: "TPP m\xEDnimo", valor: "\u2265 21 cal/cm\xB2 certificado" },
        { label: "THL", valor: "> 155 W/m\xB2" },
        { label: "Peso total guante", valor: "< 270 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + Gore-Tex\xAE + liner)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm / Nomex\xAE IIIA" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Gore-Tex\xAE ePTFE expandido original" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Caldura\xAE E89 / PBI\xAE Gold Comfort" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE sellado t\xE9rmico" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 21 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 155 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Impermeabilidad", valor: "NFPA 1971 Method 6 aprobado" },
    { categoria: "Protecci\xF3n", label: "L\xEDquidos peligrosos", valor: "Clase F3 certificada" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o", valor: "Ergon\xF3mico preformado" },
    { categoria: "Ergonom\xEDa", label: "Longitud pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" },
    { categoria: "Ergonom\xEDa", label: "Refuerzo palma", valor: "Doble capa seg\xFAn material exterior" },
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
      titulo: "Operaciones Prolongadas con Agua",
      desc: "Extinci\xF3n con mangueras, monitores y espuma durante horas. La membrana Gore-Tex\xAE mantiene las manos completamente secas evitando ampollas t\xE9rmicas y p\xE9rdida de sensibilidad."
    },
    {
      titulo: "Climas Fr\xEDos y H\xFAmedos",
      desc: "Operaciones en lluvia, nieve o ambientes con alta humedad. El Gore-Tex\xAE impide que el agua penetre mientras permite que el sudor escape \u2014 confort t\xE9rmico superior."
    },
    {
      titulo: "Rescate Acu\xE1tico e Inundaciones",
      desc: "B\xFAsqueda y extracci\xF3n en \xE1reas inundadas o con presencia de agua contaminada. Impermeabilidad total con protecci\xF3n contra l\xEDquidos peligrosos Clase F3."
    },
    {
      titulo: "Incendio Estructural con HazMat",
      desc: "Escenarios combinados: fuego + derrame qu\xEDmico o combustible. El Gore-Tex\xAE protege contra vapores t\xF3xicos y l\xEDquidos peligrosos mientras mantiene protecci\xF3n t\xE9rmica."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre Gore-Tex\xAE y una barrera PTFE gen\xE9rica?",
      a: "Gore-Tex\xAE es la marca l\xEDder mundial de membranas ePTFE expandido con estructura patentada de > 9 mil millones de poros por pulgada cuadrada. Esto garantiza impermeabilidad certificada con transpiraci\xF3n superior (MVTR > 1,500 g/m\xB2/24 h versus > 1,200 en PTFE gen\xE9rico). Gore-Tex\xAE tambi\xE9n ofrece garant\xEDa de por vida del fabricante contra delaminaci\xF3n \u2014 algo que las membranas gen\xE9ricas no ofrecen."
    },
    {
      q: "\xBFPor qu\xE9 es importante la transpirabilidad en guantes de bombero?",
      a: "Durante operaciones prolongadas, las manos generan sudor. Si el sudor no puede escapar (guantes no transpirables), el agua se acumula dentro del guante causando: (1) ampollas t\xE9rmicas por conducci\xF3n del calor, (2) p\xE9rdida de destreza manual, (3) incomodidad extrema. El Gore-Tex\xAE permite que el vapor escape manteniendo las manos secas \u2014 cr\xEDtico para operaciones de > 30 minutos."
    },
    {
      q: "\xBFEl Gore-Tex\xAE reduce la protecci\xF3n t\xE9rmica comparado con PTFE gen\xE9rico?",
      a: "No. El TPP \u2265 21 cal/cm\xB2 de estos guantes es superior al m\xEDnimo NFPA 1971 (\u2265 20 cal/cm\xB2). La membrana Gore-Tex\xAE ePTFE tiene el mismo espesor que PTFE gen\xE9rico (0.01\u20130.02 mm) pero con estructura microporosa optimizada que mejora \u2014 no reduce \u2014 el aislamiento t\xE9rmico."
    },
    {
      q: "\xBFLos guantes incluyen certificado de Gore-Tex\xAE?",
      a: "S\xED. Los guantes incluyen ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 y certificado de autenticidad Gore-Tex\xAE del fabricante \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFEl Gore-Tex\xAE requiere mantenimiento especial?",
      a: "El Gore-Tex\xAE requiere limpieza regular para mantener transpirabilidad \xF3ptima. Lavar en agua tibia con jab\xF3n neutro despu\xE9s de cada operaci\xF3n sucia, secar a temperatura ambiente. No aplicar productos qu\xEDmicos agresivos ni detergentes industriales \u2014 pueden obstruir los microporos reduciendo transpirabilidad."
    },
    {
      q: "\xBFCon qu\xE9 EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971 (especialmente trajes con barrera Gore-Tex\xAE), casco NFPA 1971, botas certificadas y SCBA NFPA 1981. El pu\xF1o de 3.5 pulgadas se ajusta sobre la manga del traje para sellado t\xE9rmico completo."
    }
  ];
  const relacionados = [
    {
      title: "Traje Estructural Gore-Tex\xAE NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas con barrera Gore-Tex\xAE PTFE. Compatible con guantes Gore-Tex\xAE para protecci\xF3n integral transpirable.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Guantes Cuero Vaqueta Tradicional",
      badge: "NFPA 1971",
      description: "Opci\xF3n cl\xE1sica con barrera PTFE est\xE1ndar. Equilibrio tradicional entre protecci\xF3n, durabilidad y sensibilidad t\xE1ctil.",
      href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional",
      buttonText: "Ver Guantes Cuero",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Botas Estructurales Gore-Tex\xAE",
      badge: "NFPA 1971",
      description: "Calzado certificado con barrera Gore-Tex\xAE impermeable. Completa el sistema de protecci\xF3n transpirable.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Botas para Bombero",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    },
    {
      title: "Capucha Particulada Gore-Tex\xAE",
      badge: "Particulada",
      description: "Protecci\xF3n de cuello y cabeza con barrera Gore-Tex\xAE. Impide part\xEDculas de holl\xEDn y carcin\xF3genos.",
      href: "/productos/capuchas-para-bomberos",
      buttonText: "Capuchas para Bombero",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Cuero Vaqueta Tradicional", href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional" },
    { label: "Kevlar\xAE Tejido Anticorte", href: "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte" },
    { label: "Pu\xF1o Extendido 4 Pulgadas", href: "/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas" },
    { label: "Forro Nomex\xAE PBI T\xE9rmico", href: "/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico" },
    { label: "Alta Destreza T\xE1ctil", href: "/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil" },
    { label: "Ver Todos Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Estructural Gore-Tex\xAE", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Gore-Tex\xAE Impermeables", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada Gore-Tex\xAE", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Gore-Tex\xAE para Bomberos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Completo para Bomberos", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Cascos NFPA 1971 y 1977", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Botas Gore-Tex\xAE Impermeables", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Capuchas Particuladas Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cat\xE1logo" }
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
    { label: "TPP m\xEDnimo", valor: "\u2265 21 cal/cm\xB2" },
    { label: "Capa exterior", valor: "Cuero vaqueta / Nomex\xAE IIIA" },
    { label: "Barrera", valor: "Gore-Tex\xAE ePTFE original" },
    { label: "Liner", valor: "Caldura\xAE E89 / PBI\xAE Gold" },
    { label: "MVTR", valor: "> 1,500 g/m\xB2/24 h" },
    { label: "Pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "Gore-Tex\xAE", desc: "Membrana ePTFE expandido certificada" },
    { code: "MVTR > 1,500", desc: "g/m\xB2/24 h \u2014 transpirabilidad superior" },
    { code: "TPP \u2265 21", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica certificada" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes NFPA 1971 \u2014 Barrera Gore-Tex\xAE Impermeable | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 con barrera Gore-Tex\xAE ePTFE expandido. MVTR > 1,500 g/m\xB2/24 h transpirabilidad superior. TPP \u2265 21 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a M\xE9xico.", "keywords": [
    "guantes bombero gore tex",
    "guantes estructurales gore tex NFPA 1971",
    "guantes bombero impermeables",
    "guantes gore tex M\xE9xico precio",
    "guantes bombero transpirables",
    "guantes estructurales gore tex",
    "guantes bombero certificados gore tex",
    "comprar guantes gore tex NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Barrera Gore-Tex\xAE Impermeable" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Gore-Tex\xAE", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Barrera Gore-Tex\xAE Impermeable", "heroSubtitle": "La tecnolog\xEDa l\xEDder mundial en impermeabilidad transpirable. Membrana Gore-Tex\xAE ePTFE expandido original con MVTR > 1,500 g/m\xB2/24 h, liner Caldura\xAE/PBI\xAE y TPP \u2265 21 cal/cm\xB2. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Gore-Tex\xAE \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales con barrera Gore-Tex\xAE NFPA 1971</strong> integran la membrana ePTFE expandido l\xEDder mundial: > 9 mil millones de poros por pulgada cuadrada garantizan impermeabilidad total con transpiraci\xF3n superior (MVTR > 1,500 g/m\xB2/24 h). Sistema de 3 capas con liner t\xE9rmico Caldura\xAE/PBI\xAE y TPP \u2265 21 cal/cm\xB2. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para operaciones prolongadas con agua en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 y Gore-Tex\xAE con Ficha T\xE9cnica Completa",
      text: "Cada par de <strong>guantes estructurales Gore-Tex\xAE</strong> incluye ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 y certificado de autenticidad Gore-Tex\xAE \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. Impermeabilidad NFPA 1971 Method 6, protecci\xF3n contra l\xEDquidos peligrosos Clase F3, costuras selladas t\xE9rmicamente."
    }
  ], "ctaBarQuote": "Cotizar Guantes Gore-Tex\xAE NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 21" },
    { modifier: "gtx", text: "Gore-Tex\xAE" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Barrera Gore-Tex\xAE Impermeable", "productoDesc": "Sistema de 3 capas certificado NFPA 1971: capa exterior en cuero vaqueta o Nomex\xAE IIIA, barrera de humedad Gore-Tex\xAE ePTFE expandido original (MVTR > 1,500 g/m\xB2/24 h) y liner t\xE9rmico Caldura\xAE E89 / PBI\xAE Gold Comfort. TPP \u2265 21 cal/cm\xB2. Incluye ficha t\xE9cnica, certificado de laboratorio y certificado Gore-Tex\xAE.", "productoFeatures": [
    "Barrera Gore-Tex\xAE ePTFE expandido original",
    "MVTR > 1,500 g/m\xB2/24 h transpirabilidad superior",
    "Impermeabilidad NFPA 1971 Method 6 \u2713",
    "Liner Caldura\xAE E89 / PBI\xAE Gold Comfort",
    "TPP \u2265 21 cal/cm\xB2 certificado",
    "Certificado Gore-Tex\xAE incluido"
  ], "productoAppTags": [
    "Operaciones con agua",
    "Climas h\xFAmedos",
    "Rescate acu\xE1tico",
    "Incendio + HazMat",
    "Operaciones prolongadas"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales Gore-Tex NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes Gore-Tex en operaci\xF3n" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes Gore-Tex en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes Gore-Tex" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas con Gore-Tex\xAE", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica: la capa exterior ofrece resistencia mec\xE1nica, la barrera Gore-Tex\xAE ePTFE garantiza impermeabilidad con transpiraci\xF3n superior, y el liner t\xE9rmico a\xEDsla del calor radiante.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025 y certificado de autenticidad Gore-Tex\xAE. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes con Barrera Gore-Tex\xAE?", "aplicacionesContent": "<p>Los guantes estructurales con barrera Gore-Tex\xAE son el EPP premium para operaciones con exposici\xF3n prolongada al agua.</p><p>La membrana Gore-Tex\xAE ePTFE expandido es la tecnolog\xEDa l\xEDder mundial: > 9 mil millones de poros por pulgada cuadrada, cada poro 20,000 veces m\xE1s peque\xF1o que una gota de agua pero 700 veces m\xE1s grande que una mol\xE9cula de vapor. Resultado: impermeabilidad total con transpiraci\xF3n m\xE1xima (MVTR > 1,500 g/m\xB2/24 h) \u2014 manos secas durante operaciones de extinci\xF3n prolongadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 + Gore-Tex\xAE \u2014 Tecnolog\xEDa Premium", "certsDesc": "La norma <strong>NFPA 1971</strong> establece requisitos m\xEDnimos para impermeabilidad. La membrana <strong>Gore-Tex\xAE ePTFE expandido</strong> no solo cumple \u2014 supera los est\xE1ndares con garant\xEDa de por vida del fabricante contra delaminaci\xF3n. Certificado de autenticidad Gore-Tex\xAE incluido.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales con Barrera Gore-Tex\xAE", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre la membrana Gore-Tex\xAE ePTFE, impermeabilidad, transpirabilidad y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 y certificado Gore-Tex\xAE.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales Gore-Tex\xAE trabajan como parte de un sistema. Combina con traje y botas Gore-Tex\xAE para protecci\xF3n transpirable integral.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
