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
      descripcion: "Primera barrera de contacto. Opci\xF3n de cuero de vaqueta curtido al cromo 1.2\u20131.4 mm o tejido Nomex\xAE IIIA de 6.0 oz/yd\xB2 con acabado PBI Matrix \u2014 ambos materiales ofrecen resistencia inherente a la llama y abrasi\xF3n certificada seg\xFAn ASTM F1060 Nivel 4.",
      specs: [
        { label: "Material", valor: "Cuero vaqueta 1.2\u20131.4 mm / Nomex\xAE IIIA" },
        { label: "Peso Nomex\xAE", valor: "6.0 oz/yd\xB2 con PBI Matrix" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 \u2014 Nivel 4" },
        { label: "Resistencia al corte", valor: "EN 388 Nivel C certificado" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 Membrana PTFE",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno microporoso que impide el paso de agua y vapores mientras permite la evacuaci\xF3n del sudor. Compatible con el sistema de forro t\xE9rmico premium Nomex\xAE/PBI\xAE para m\xE1xima transpiraci\xF3n.",
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
      titulo: "Forro T\xE9rmico Premium \u2014 Nomex\xAE / PBI\xAE Gold Matrix",
      descripcion: "Tercera capa: liner t\xE9rmico premium de fibras Nomex\xAE 60% y PBI\xAE Gold 40% \u2014 el sistema de aislamiento t\xE9rmico m\xE1s avanzado disponible. El PBI\xAE (polibenzimidazol) ofrece resistencia t\xE9rmica superior hasta 650\xB0C sin descomposici\xF3n. TPP \u2265 24 cal/cm\xB2 \u2014 20% superior al m\xEDnimo NFPA 1971.",
      specs: [
        { label: "Liner", valor: "Nomex\xAE 60% + PBI\xAE Gold 40% matrix" },
        { label: "TPP m\xEDnimo", valor: "\u2265 24 cal/cm\xB2 superior" },
        { label: "THL", valor: "> 175 W/m\xB2" },
        { label: "Peso total guante", valor: "< 285 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + barrera + liner premium)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm / Nomex\xAE IIIA" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Membrana PTFE microporosa" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE 60% + PBI\xAE Gold 40% matrix" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE + PBI\xAE reforzado" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 24 cal/cm\xB2 superior" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 175 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia al corte", valor: "EN 388 Nivel C" },
    { categoria: "Protecci\xF3n", label: "Temperatura PBI\xAE l\xEDmite", valor: "Hasta 650\xB0C sin descomposici\xF3n" },
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
      titulo: "Flash-Over y Backdraft",
      desc: "M\xE1xima protecci\xF3n ante igniciones s\xFAbitas de gases acumulados. El TPP \u2265 24 cal/cm\xB2 ofrece ~4 segundos antes de quemadura de segundo grado \u2014 tiempo cr\xEDtico para escape."
    },
    {
      titulo: "Ataque Interior Ofensivo",
      desc: "Combate de incendio en etapa avanzada con calor radiante extremo. El forro PBI\xAE Gold 40% resiste hasta 650\xB0C manteniendo aislamiento t\xE9rmico superior."
    },
    {
      titulo: "Rescate en Incendios Industriales",
      desc: "Operaciones en plantas qu\xEDmicas, refiner\xEDas y f\xE1bricas con riesgo de explosi\xF3n. Protecci\xF3n t\xE9rmica 20% superior al m\xEDnimo NFPA para escenarios de alto riesgo."
    },
    {
      titulo: "Brigadas Industriales HAZMAT",
      desc: "Respuesta combinada a incendio + materiales peligrosos. El sistema Nomex\xAE/PBI\xAE ofrece resistencia qu\xEDmica limitada adem\xE1s de protecci\xF3n t\xE9rmica premium."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre Nomex\xAE est\xE1ndar y el sistema Nomex\xAE/PBI\xAE?",
      a: "El Nomex\xAE est\xE1ndar (100%) ofrece resistencia t\xE9rmica hasta ~370\xB0C. El sistema Nomex\xAE 60% / PBI\xAE Gold 40% eleva este l\xEDmite a 650\xB0C \u2014 casi el doble. El PBI\xAE (polibenzimidazol) es una fibra aramida de alto rendimiento que no arde, no se derrite y mantiene su integridad estructural en condiciones extremas. Resultado: TPP \u2265 24 cal/cm\xB2 versus \u2265 20 cal/cm\xB2 en Nomex\xAE solo."
    },
    {
      q: "\xBFCu\xE1ntos segundos adicionales de protecci\xF3n ofrece el TPP \u2265 24 cal/cm\xB2?",
      a: "El TPP m\xEDnimo NFPA 1971 es \u2265 20 cal/cm\xB2 (~3 segundos antes de quemadura de segundo grado). Un TPP de 24 cal/cm\xB2 ofrece ~4 segundos \u2014 1 segundo adicional cr\xEDtico para abandonar la zona de peligro durante flash-over o backdraft. En t\xE9rminos pr\xE1cticos: 20% m\xE1s de tiempo de escape."
    },
    {
      q: "\xBFEl forro PBI\xAE reduce la destreza manual comparado con forros est\xE1ndar?",
      a: "No. El PBI\xAE Gold 40% matrix est\xE1 dise\xF1ado espec\xEDficamente para equilibrar protecci\xF3n t\xE9rmica con ergonom\xEDa. El peso total del guante (~285 g por par) es solo ~5 g superior al est\xE1ndar Nomex\xAE/Kevlar\xAE \u2014 diferencia imperceptible durante operaciones normales. Los paneles preformados mantienen destreza t\xE1ctil completa."
    },
    {
      q: "\xBFLos guantes incluyen certificado espec\xEDfico de PBI\xAE?",
      a: "S\xED. Los guantes incluyen ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 que especifica la composici\xF3n del liner (Nomex\xAE 60% / PBI\xAE Gold 40%) y certificado del fabricante de fibras \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFEl forro PBI\xAE requiere mantenimiento especial?",
      a: "El PBI\xAE es m\xE1s resistente que el Nomex\xAE est\xE1ndar pero requiere los mismos cuidados: lavado en agua tibia con jab\xF3n neutro, secado a temperatura ambiente, no exponer a qu\xEDmicos agresivos. El PBI\xAE no se degrada con lavados industriales \u2014 mantiene sus propiedades t\xE9rmicas durante toda la vida \xFAtil del guante."
    },
    {
      q: "\xBFCon qu\xE9 EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971 (especialmente trajes con liner PBI\xAE Gold Comfort), casco NFPA 1971, botas certificadas y SCBA NFPA 1981. Ideal para equipos que operan en ambientes de alto riesgo t\xE9rmico."
    }
  ];
  const relacionados = [
    {
      title: "Traje Estructural Forro PBI\xAE Gold",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas con liner PBI\xAE Gold Comfort. Compatible con guantes PBI\xAE para protecci\xF3n t\xE9rmica integral premium.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Guantes Cuero Vaqueta Est\xE1ndar",
      badge: "NFPA 1971",
      description: "Opci\xF3n cl\xE1sica con liner Nomex\xAE/Kevlar\xAE est\xE1ndar. Equilibrio tradicional entre protecci\xF3n, durabilidad y precio.",
      href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional",
      buttonText: "Ver Guantes Est\xE1ndar",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Capucha Nomex\xAE PBI\xAE Particulada",
      badge: "Particulada",
      description: "Protecci\xF3n de cuello y cabeza con sistema Nomex\xAE/PBI\xAE. Completa el sistema de protecci\xF3n t\xE9rmica premium.",
      href: "/productos/capuchas-para-bomberos",
      buttonText: "Capuchas para Bombero",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
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
    { label: "Alta Destreza T\xE1ctil", href: "/productos/guantes-para-bomberos/estructurales/alta-destreza-tactil" },
    { label: "Ver Todos Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Traje Estructural PBI\xAE Gold", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas de Cuero Bombero", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Nomex\xAE PBI\xAE Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes PBI\xAE Gold para Bomberos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Completo para Bomberos", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Cascos NFPA 1971 y 1977", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Capuchas Nomex\xAE PBI\xAE Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cat\xE1logo" },
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
    { label: "Sistema", valor: "3 capas premium" },
    { label: "TPP m\xEDnimo", valor: "\u2265 24 cal/cm\xB2 superior" },
    { label: "Capa exterior", valor: "Cuero vaqueta / Nomex\xAE IIIA" },
    { label: "Barrera", valor: "PTFE microporosa" },
    { label: "Liner", valor: "Nomex\xAE 60% + PBI\xAE Gold 40%" },
    { label: "L\xEDmite PBI\xAE", valor: "Hasta 650\xB0C sin descomposici\xF3n" },
    { label: "Pu\xF1o", valor: "3.5 pulgadas est\xE1ndar" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "PBI\xAE Gold 40%", desc: "Fibra aramida alto rendimiento certificada" },
    { code: "TPP \u2265 24", desc: "cal/cm\xB2 \u2014 20% superior a NFPA m\xEDnimo" },
    { code: "THL > 175", desc: "W/m\xB2 \u2014 aislamiento t\xE9rmico superior" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes NFPA 1971 \u2014 Forro Nomex\xAE PBI T\xE9rmico | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 con forro t\xE9rmico Nomex\xAE 60% + PBI\xAE Gold 40%. TPP \u2265 24 cal/cm\xB2 superior. Resistencia hasta 650\xB0C. Ficha t\xE9cnica incluida. Env\xEDo a M\xE9xico.", "keywords": [
    "guantes bombero nomex pbi",
    "guantes estructurales PBI NFPA 1971",
    "guantes bombero protecci\xF3n t\xE9rmica",
    "guantes nomex pbi M\xE9xico",
    "guantes bombero TPP 24",
    "guantes estructurales pbi gold",
    "guantes bombero alto rendimiento",
    "comprar guantes pbi NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Forro Nomex\xAE PBI T\xE9rmico" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Nomex\xAE PBI", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Forro Nomex\xAE PBI T\xE9rmico", "heroSubtitle": "M\xE1xima protecci\xF3n t\xE9rmica certificada. Forro premium Nomex\xAE 60% + PBI\xAE Gold 40% con TPP \u2265 24 cal/cm\xB2 \u2014 20% superior al m\xEDnimo NFPA. Resistencia hasta 650\xB0C. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Nomex\xAE PBI \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales con forro Nomex\xAE/PBI\xAE NFPA 1971</strong> integran el sistema de aislamiento t\xE9rmico m\xE1s avanzado disponible: Nomex\xAE 60% + PBI\xAE Gold 40% matrix con TPP \u2265 24 cal/cm\xB2 \u2014 20% superior al m\xEDnimo NFPA. El PBI\xAE (polibenzimidazol) resiste hasta 650\xB0C sin descomposici\xF3n. Sistema de 3 capas con barrera PTFE. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para operaciones de alto riesgo t\xE9rmico en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado PBI\xAE",
      text: "Cada par de <strong>guantes estructurales Nomex\xAE/PBI\xAE</strong> incluye ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 y certificado del fabricante de fibras \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. TPP \u2265 24 cal/cm\xB2, THL > 175 W/m\xB2, costuras en hilo Kevlar\xAE + PBI\xAE reforzado."
    }
  ], "ctaBarQuote": "Cotizar Guantes Nomex\xAE PBI NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 24" },
    { modifier: "pbi", text: "PBI\xAE 40%" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Forro Nomex\xAE PBI T\xE9rmico", "productoDesc": "Sistema de 3 capas certificado NFPA 1971 con forro t\xE9rmico premium: capa exterior en cuero vaqueta o Nomex\xAE IIIA, barrera de humedad PTFE microporosa y liner t\xE9rmico Nomex\xAE 60% + PBI\xAE Gold 40% matrix. TPP \u2265 24 cal/cm\xB2 \u2014 20% superior al m\xEDnimo NFPA. Resistencia hasta 650\xB0C sin descomposici\xF3n. Incluye ficha t\xE9cnica, certificado de laboratorio y certificado PBI\xAE.", "productoFeatures": [
    "Forro Nomex\xAE 60% + PBI\xAE Gold 40% matrix",
    "TPP \u2265 24 cal/cm\xB2 \u2014 20% superior a NFPA",
    "Resistencia hasta 650\xB0C sin descomposici\xF3n",
    "THL > 175 W/m\xB2 aislamiento superior",
    "Barrera PTFE impermeable transpirable",
    "Certificado PBI\xAE incluido"
  ], "productoAppTags": [
    "Flash-over y backdraft",
    "Ataque interior ofensivo",
    "Incendios industriales",
    "Brigadas HAZMAT",
    "Alto riesgo t\xE9rmico"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales Nomex PBI NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes PBI en incendio" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes PBI en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes PBI" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas con Forro PBI\xAE", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica: la capa exterior ofrece resistencia mec\xE1nica, la barrera PTFE mantiene las manos secas, y el forro t\xE9rmico premium Nomex\xAE/PBI\xAE Gold 40% a\xEDsla del calor extremo hasta 650\xB0C.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025 y certificado del fabricante de fibras PBI\xAE. Todos los valores superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes con Forro Nomex\xAE/PBI\xAE?", "aplicacionesContent": "<p>Los guantes estructurales con forro Nomex\xAE/PBI\xAE son el EPP premium para operaciones de alto riesgo t\xE9rmico.</p><p>El PBI\xAE (polibenzimidazol) es una fibra aramida de alto rendimiento que no arde, no se derrite y mantiene su integridad estructural hasta 650\xB0C \u2014 casi el doble del l\xEDmite del Nomex\xAE est\xE1ndar (370\xB0C). Resultado: TPP \u2265 24 cal/cm\xB2 versus \u2265 20 cal/cm\xB2 en guantes est\xE1ndar. Esto equivale a ~4 segundos antes de quemadura de segundo grado \u2014 1 segundo adicional cr\xEDtico para escape durante flash-over o backdraft.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 + PBI\xAE \u2014 Protecci\xF3n T\xE9rmica Premium", "certsDesc": "La norma <strong>NFPA 1971</strong> establece TPP m\xEDnimo de \u2265 20 cal/cm\xB2. El sistema <strong>Nomex\xAE 60% / PBI\xAE Gold 40%</strong> supera este est\xE1ndar en 20% ofreciendo TPP \u2265 24 cal/cm\xB2 \u2014 m\xE1xima protecci\xF3n t\xE9rmica disponible en guantes estructurales certificados.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales con Forro Nomex\xAE/PBI\xAE", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el sistema Nomex\xAE/PBI\xAE, protecci\xF3n t\xE9rmica superior, resistencia hasta 650\xB0C y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa, certificado de laboratorio NFPA 1971 y certificado PBI\xAE.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales Nomex\xAE/PBI\xAE trabajan como parte de un sistema. Combina con traje PBI\xAE Gold Comfort para protecci\xF3n t\xE9rmica integral premium.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/forro-nomex-pbi-termico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
