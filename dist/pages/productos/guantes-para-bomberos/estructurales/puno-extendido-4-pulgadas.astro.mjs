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
      descripcion: "Primera barrera de contacto. Cuero de vaqueta curtido al cromo de 1.2\u20131.4 mm que se extiende 4 pulgadas (10.2 cm) sobre la mu\xF1eca \u2014 cobertura adicional de 0.5 pulgadas sobre el est\xE1ndar. El pu\xF1o extendido sella completamente con la manga del traje eliminando gaps t\xE9rmicos cr\xEDticos en la mu\xF1eca.",
      specs: [
        { label: "Material", valor: "Cuero vaqueta curtido al cromo" },
        { label: "Grosor", valor: "1.2 \u2013 1.4 mm selecta" },
        { label: "Longitud pu\xF1o", valor: "4.0 pulgadas (10.2 cm) extendido" },
        { label: "Resistencia t\xE9rmica", valor: "ASTM F1060 \u2014 Nivel 4" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 Membrana PTFE Extendida",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno que cubre toda la longitud del pu\xF1o de 4 pulgadas. El sellado extendido protege la mu\xF1eca y antebrazo inferior contra penetraci\xF3n de agua, vapores t\xF3xicos y l\xEDquidos peligrosos durante operaciones en posici\xF3n horizontal o sobre la cabeza.",
      specs: [
        { label: "Membrana", valor: "PTFE microporoso transpirable extendido" },
        { label: "Cobertura", valor: "4.0 pulgadas completas" },
        { label: "Impermeabilidad", valor: "NFPA 1971 Section 7.9 \u2713" },
        { label: "Transpirabilidad", valor: "MVTR > 1,200 g/m\xB2/24 h" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro T\xE9rmico \u2014 Nomex\xAE / Kevlar\xAE Blend Extendido",
      descripcion: "Tercera capa: liner t\xE9rmico de fibras Nomex\xAE y Kevlar\xAE que a\xEDsla toda la longitud del pu\xF1o de 4 pulgadas. El forro extendido elimina el gap t\xE9rmico entre guante y manga \u2014 protecci\xF3n continua sin puntos d\xE9biles. TPP \u2265 20 cal/cm\xB2 en toda la superficie incluyendo pu\xF1o.",
      specs: [
        { label: "Liner", valor: "Nomex\xAE 50% + Kevlar\xAE 50% blend extendido" },
        { label: "Cobertura", valor: "4.0 pulgadas completas sin gaps" },
        { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2 uniforme" },
        { label: "Peso total guante", valor: "< 295 g por par" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + barrera + liner)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm extendido" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Membrana PTFE microporosa 4 pulg" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Nomex\xAE 50% / Kevlar\xAE 50% extendido" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Kevlar\xAE reforzado en pu\xF1o" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2 incluyendo pu\xF1o" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 150 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "ASTM F1060 Nivel 4" },
    { categoria: "Protecci\xF3n", label: "Resistencia al corte", valor: "EN 388 Nivel C" },
    { categoria: "Protecci\xF3n", label: "Sellado t\xE9rmico", valor: "Sin gaps con manga traje" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o", valor: "Ergon\xF3mico preformado" },
    { categoria: "Ergonom\xEDa", label: "Longitud pu\xF1o", valor: "4.0 pulgadas (10.2 cm) extendido" },
    { categoria: "Ergonom\xEDa", label: "Sistema de ajuste", valor: "Velcro\xAE de cierre r\xE1pido en pu\xF1o" },
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
      titulo: "Operaciones en Espacios Confinados",
      desc: "Trabajo en posiciones horizontales o con brazos sobre la cabeza donde los guantes est\xE1ndar dejan gaps. El pu\xF1o de 4 pulgadas sella completamente con la manga del traje."
    },
    {
      titulo: "Extinci\xF3n con Monitores Elevados",
      desc: "Operaci\xF3n de monitores y pitones con brazos extendidos hacia arriba. El pu\xF1o extendido evita que el agua escurra dentro del guante por la mu\xF1eca expuesta."
    },
    {
      titulo: "Rescate Vertical y Alturas",
      desc: "Operaciones de rappel, escalada y rescate en altura donde la manga del traje se desliza hacia abajo exponiendo la mu\xF1eca. Protecci\xF3n continua sin gaps t\xE9rmicos."
    },
    {
      titulo: "Ambientes con L\xEDquidos Peligrosos",
      desc: "Escenarios con derrame qu\xEDmico, combustible o agua contaminada. El pu\xF1o extendido con barrera PTFE de 4 pulgadas minimiza penetraci\xF3n de l\xEDquidos en la mu\xF1eca."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia entre pu\xF1o de 3.5 y 4.0 pulgadas?",
      a: "Los guantes est\xE1ndar tienen pu\xF1o de 3.5 pulgadas (8.9 cm). El pu\xF1o extendido de 4.0 pulgadas (10.2 cm) ofrece 0.5 pulgadas (1.3 cm) adicionales de cobertura \u2014 cr\xEDtico para eliminar gaps t\xE9rmicos cuando la manga del traje se desliza hacia abajo durante operaciones con brazos extendidos. NFPA 1971 no especifica longitud m\xEDnima de pu\xF1o, pero la pr\xE1ctica recomienda \u2265 3.5 pulgadas."
    },
    {
      q: "\xBFEl pu\xF1o extendido reduce la movilidad de la mu\xF1eca?",
      a: "No si el guante est\xE1 dise\xF1ado correctamente. Los guantes de pu\xF1o extendido integran paneles ergon\xF3micos preformados y sistema de ajuste con Velcro\xAE que permiten flexi\xF3n completa de la mu\xF1eca sin restricci\xF3n. El peso adicional (~15 g por par) es imperceptible durante operaciones normales."
    },
    {
      q: "\xBFPor qu\xE9 es importante eliminar gaps entre guante y manga?",
      a: "Los gaps t\xE9rmicos (espacios sin protecci\xF3n) son puntos cr\xEDticos de quemadura. Durante flash-over o exposici\xF3n a calor radiante, los gases calientes penetran por cualquier abertura. Un gap de solo 2 cm en la mu\xF1eca puede causar quemaduras de segundo grado en < 1 segundo. El pu\xF1o de 4 pulgadas con Velcro\xAE de ajuste sella completamente esta zona vulnerable."
    },
    {
      q: "\xBFLos guantes incluyen ficha t\xE9cnica y certificado?",
      a: "S\xED. Cada par incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita TPP \u2265 20 cal/cm\xB2 en toda la superficie incluyendo el pu\xF1o extendido \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFEl pu\xF1o extendido es compatible con todos los trajes NFPA 1971?",
      a: "S\xED. El dise\xF1o de pu\xF1o extendido es compatible con las mangas de todos los fabricantes de trajes NFPA 1971. La longitud de 4.0 pulgadas permite sellado completo incluso con mangas que tienden a deslizarse hacia el codo durante operaciones con brazos extendidos."
    },
    {
      q: "\xBFCon qu\xE9 otros EPP NFPA son compatibles estos guantes?",
      a: "Compatible con traje estructural NFPA 1971, casco NFPA 1971, botas certificadas y SCBA NFPA 1981. El sistema de ajuste Velcro\xAE en el pu\xF1o permite sellado herm\xE9tico con la manga sin afectar movilidad."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Cuero Vaqueta Est\xE1ndar 3.5 pulg",
      badge: "NFPA 1971",
      description: "Opci\xF3n cl\xE1sica con pu\xF1o est\xE1ndar de 3.5 pulgadas. Ideal para operaciones con posici\xF3n de brazos normal.",
      href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional",
      buttonText: "Ver Guantes Est\xE1ndar",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema de 3 capas certificado. Compatible con guantes de pu\xF1o extendido para sellado t\xE9rmico completo.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Guantes Rescate T\xE9cnico NFPA 1951",
      badge: "NFPA 1951",
      description: "Guantes especializados para rescate t\xE9cnico con pu\xF1o extendido. Ideales para operaciones en alturas y espacios confinados.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
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
    { label: "Cuero Vaqueta Tradicional 3.5 pulg", href: "/productos/guantes-para-bomberos/estructurales/cuero-vaqueta-tradicional" },
    { label: "Kevlar\xAE Tejido Anticorte", href: "/productos/guantes-para-bomberos/estructurales/kevlar-tejido-anticorte" },
    { label: "Barrera Gore-Tex\xAE Impermeable", href: "/productos/guantes-para-bomberos/estructurales/barrera-gore-tex-impermeable" },
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
    { label: "TPP m\xEDnimo", valor: "\u2265 20 cal/cm\xB2" },
    { label: "Capa exterior", valor: "Cuero vaqueta 1.2\u20131.4 mm" },
    { label: "Barrera", valor: "PTFE microporosa extendida" },
    { label: "Liner", valor: "Nomex\xAE / Kevlar\xAE extendido" },
    { label: "Pu\xF1o", valor: "4.0 pulgadas (10.2 cm) extendido" },
    { label: "Ajuste", valor: "Velcro\xAE cierre r\xE1pido" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Guantes estructurales \u2014 edici\xF3n vigente" },
    { code: "ASTM F1060", desc: "Resistencia t\xE9rmica contacto Nivel 4" },
    { code: "Pu\xF1o 4.0 pulg", desc: "Cobertura extendida sin gaps t\xE9rmicos" },
    { code: "TPP \u2265 20", desc: "cal/cm\xB2 \u2014 protecci\xF3n uniforme total" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes NFPA 1971 \u2014 Pu\xF1o Extendido 4 Pulgadas | BOMBERO.MX", "description": "Guantes estructurales NFPA 1971 con pu\xF1o extendido de 4 pulgadas. Eliminan gaps t\xE9rmicos entre guante y manga. Sistema 3 capas, TPP \u2265 20 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a M\xE9xico.", "keywords": [
    "guantes bombero pu\xF1o extendido",
    "guantes estructurales 4 pulgadas NFPA 1971",
    "guantes bombero pu\xF1o largo",
    "guantes pu\xF1o extendido M\xE9xico",
    "guantes bombero sin gaps t\xE9rmicos",
    "guantes estructurales pu\xF1o 4 pulgadas",
    "guantes bombero certificados pu\xF1o extendido",
    "comprar guantes pu\xF1o extendido NFPA 1971"
  ], "canonical": "/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales" },
    { label: "Pu\xF1o Extendido 4 Pulgadas" }
  ], "heroBadge": "Guantes Estructurales \xB7 NFPA 1971 \xB7 Pu\xF1o Extendido", "heroTitle": "Guantes Estructurales NFPA 1971", "heroTitleHighlight": "Pu\xF1o Extendido 4 Pulgadas", "heroSubtitle": "Eliminan gaps t\xE9rmicos cr\xEDticos. Pu\xF1o extendido de 4 pulgadas (10.2 cm) con sistema de 3 capas que sella completamente con la manga del traje. Velcro\xAE de ajuste r\xE1pido, TPP \u2265 20 cal/cm\xB2. Certificado NFPA 1971 con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Guantes Estructurales NFPA 1971 Pu\xF1o Extendido 4 Pulgadas \u2014 Distribuidor Autorizado M\xE9xico",
      text: "Los <strong>guantes estructurales de pu\xF1o extendido NFPA 1971</strong> integran 4 pulgadas (10.2 cm) de cobertura completa \u2014 0.5 pulgadas adicionales sobre el est\xE1ndar \u2014 para eliminar gaps t\xE9rmicos cr\xEDticos entre guante y manga. Sistema de 3 capas con barrera PTFE extendida, liner Nomex\xAE/Kevlar\xAE continuo y TPP \u2265 20 cal/cm\xB2 en toda la superficie. En <strong>BOMBERO.MX</strong> distribuimos guantes certificados para operaciones en espacios confinados y rescate vertical en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada par de <strong>guantes estructurales de pu\xF1o extendido</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. TPP \u2265 20 cal/cm\xB2 uniforme incluyendo pu\xF1o, sistema de ajuste Velcro\xAE certificado, costuras en hilo Kevlar\xAE reforzado."
    }
  ], "ctaBarQuote": "Cotizar Guantes Pu\xF1o Extendido NFPA 1971", "productoCategoria": "Guantes de Bombero Estructurales", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 20" },
    { modifier: "ext", text: "4.0 pulg" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Estructurales NFPA 1971", "productoTitleSub": "Pu\xF1o Extendido 4 Pulgadas", "productoDesc": "Sistema de 3 capas certificado NFPA 1971 con pu\xF1o extendido de 4 pulgadas (10.2 cm): capa exterior en cuero vaqueta 1.2\u20131.4 mm, barrera de humedad PTFE microporosa extendida y liner t\xE9rmico Nomex\xAE/Kevlar\xAE continuo. Sistema de ajuste Velcro\xAE para sellado con manga. TPP \u2265 20 cal/cm\xB2 uniforme en toda la superficie incluyendo pu\xF1o. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Pu\xF1o extendido 4.0 pulgadas (10.2 cm)",
    "Elimina gaps t\xE9rmicos entre guante y manga",
    "Sistema de ajuste Velcro\xAE cierre r\xE1pido",
    "Barrera PTFE extendida 4 pulgadas completas",
    "Liner Nomex\xAE/Kevlar\xAE continuo sin gaps",
    "TPP \u2265 20 cal/cm\xB2 uniforme total"
  ], "productoAppTags": [
    "Espacios confinados",
    "Rescate vertical",
    "Monitores elevados",
    "L\xEDquidos peligrosos",
    "Operaciones extendidas"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes estructurales pu\xF1o extendido NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero usando guantes pu\xF1o extendido" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos con guantes pu\xF1o extendido en acci\xF3n" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP completo con guantes pu\xF1o extendido" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con guantes estructurales" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Integrado de 3 Capas con Pu\xF1o Extendido", "capasDesc": "Cada capa se extiende 4 pulgadas completas sin gaps: el cuero vaqueta ofrece resistencia mec\xE1nica continua, la barrera PTFE extendida mantiene las manos secas, y el liner t\xE9rmico continuo a\xEDsla del calor radiante sin puntos d\xE9biles.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente incluyendo el pu\xF1o extendido.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Pu\xF1o Extendido?", "aplicacionesContent": "<p>Los guantes estructurales de pu\xF1o extendido son el EPP est\xE1ndar para operaciones donde los guantes tradicionales dejan gaps t\xE9rmicos.</p><p>Durante operaciones en espacios confinados, rescate vertical o con brazos extendidos, la manga del traje tiende a deslizarse hacia el codo exponiendo la mu\xF1eca. Un gap de solo 2 cm puede causar quemaduras de segundo grado en < 1 segundo durante flash-over. El pu\xF1o de 4 pulgadas con sistema de ajuste Velcro\xAE sella completamente esta zona vulnerable.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 \u2014 Protecci\xF3n Sin Gaps T\xE9rmicos", "certsDesc": "La norma <strong>NFPA 1971</strong> no especifica longitud m\xEDnima de pu\xF1o, pero la pr\xE1ctica recomienda \u2265 3.5 pulgadas. El pu\xF1o extendido de 4 pulgadas ofrece cobertura superior certificada con TPP \u2265 20 cal/cm\xB2 uniforme en toda la superficie incluyendo el pu\xF1o \u2014 sin puntos d\xE9biles.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/estructurales", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Estructurales de Pu\xF1o Extendido", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el pu\xF1o extendido de 4 pulgadas, eliminaci\xF3n de gaps t\xE9rmicos, sistema de ajuste y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "Los guantes estructurales de pu\xF1o extendido trabajan como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas/index.astro";
const $$url = "/productos/guantes-para-bomberos/estructurales/puno-extendido-4-pulgadas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
