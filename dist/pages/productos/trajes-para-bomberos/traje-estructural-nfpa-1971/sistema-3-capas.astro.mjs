import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/trajes-para-bombero/sistema-3-capas-traje-bombero-diagrama-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Nomex\xAE IIIA",
      descripcion: "Primera barrera de defensa. El tejido Nomex\xAE IIIA ofrece resistencia inherente a la llama: el material no arde, no se derrite ni encoge incluso bajo exposici\xF3n directa. Peso \xF3ptimo de 6.0\u20137.5 oz/yd\xB2 para equilibrar protecci\xF3n y movilidad.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA / Nomex\xAE Nano" },
        { label: "Peso tela", valor: "6.0 \u2013 7.5 oz/yd\xB2" },
        { label: "Norma llama", valor: "ASTM D6413 \u2014 Clase 1" },
        { label: "Resistencia inherente", valor: "S\xED \u2014 no se lava" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera de Humedad \u2014 Gore-Tex\xAE PTFE",
      descripcion: "Segunda capa: membrana de politetrafluoroetileno expandido (ePTFE). Impide el paso de agua, vapores t\xF3xicos y l\xEDquidos peligrosos. Permite la evacuaci\xF3n del vapor corporal hacia el exterior, controlando la temperatura interna del bombero.",
      specs: [
        { label: "Membrana", valor: "Gore-Tex\xAE ePTFE expandido" },
        { label: "Impermeabilidad", valor: "NFPA 1971 Method 6 \u2713" },
        { label: "Transpirabilidad", valor: "MVTR > 1,500 g/m\xB2/24 h" },
        { label: "L\xEDquidos peligrosos", valor: "Clase F3 certificada" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Acolchado T\xE9rmico \u2014 Caldura\xAE / PBI\xAE Gold",
      descripcion: "Tercera capa: liner t\xE9rmico que a\xEDsla al bombero del calor intenso. Un TPP \u2265 35 cal/cm\xB2 garantiza al menos 3 segundos antes de quemadura de 2.\xBA grado \u2014 tiempo cr\xEDtico para abandonar la zona de peligro.",
      specs: [
        { label: "Liner", valor: "Caldura\xAE E89 o PBI\xAE Gold Comfort" },
        { label: "TPP m\xEDnimo", valor: "\u2265 35 cal/cm\xB2 certificado" },
        { label: "THL", valor: "> 205 W/m\xB2" },
        { label: "Peso liner", valor: "< 400 g total" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "N\xFAmero de capas", valor: "3 (exterior + barrera + liner)" },
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Nomex\xAE IIIA o Nomex\xAE Nano" },
    { categoria: "Construcci\xF3n", label: "Barrera de humedad", valor: "Gore-Tex\xAE PTFE expandido" },
    { categoria: "Construcci\xF3n", label: "Liner t\xE9rmico", valor: "Caldura\xAE E89 / PBI\xAE Gold Comfort" },
    { categoria: "Construcci\xF3n", label: "Costura", valor: "Hilo Nomex\xAE certificado" },
    { categoria: "Protecci\xF3n", label: "TPP m\xEDnimo", valor: "\u2265 35 cal/cm\xB2" },
    { categoria: "Protecci\xF3n", label: "THL m\xEDnimo", valor: "> 205 W/m\xB2" },
    { categoria: "Protecci\xF3n", label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 Clase 1" },
    { categoria: "Protecci\xF3n", label: "Impermeabilidad", valor: "NFPA 1971 Method 6 aprobado" },
    { categoria: "Protecci\xF3n", label: "L\xEDquidos peligrosos", valor: "Clase F3" },
    { categoria: "Visibilidad", label: "Bandas retroreflectivas", valor: "Scotchlite\u2122 3M 5 cm \u2014 esquema 360\xB0" },
    { categoria: "Visibilidad", label: "Clase SOLAS", valor: "Clase 2" },
    { categoria: "Ergonom\xEDa", label: "Paneles preformados", valor: "Codos y rodillas" },
    { categoria: "Ergonom\xEDa", label: "Cierre principal", valor: "Velcro\xAE de cierre r\xE1pido" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL \xB7 3XL \xB7 4XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" },
    { categoria: "Certificaci\xF3n", label: "Compatible con EPP NFPA", valor: "S\xED \u2014 todos los fabricantes" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Visibilidad": "visibilidad",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Incendio Estructural",
      desc: "Combate activo en edificios residenciales, comerciales e industriales. Protecci\xF3n integral frente a llama directa, calor radiante y vapores t\xF3xicos."
    },
    {
      titulo: "Rescate Urbano",
      desc: "B\xFAsqueda y rescate en estructuras colapsadas o incendiadas. El dise\xF1o ergon\xF3mico facilita la movilidad en espacios reducidos."
    },
    {
      titulo: "Colapso de Estructuras",
      desc: "Escenarios de derrumbe con riesgo de llama, gas e inflamables. La capa Nomex\xAE resiste cortes y abrasi\xF3n entre escombros."
    },
    {
      titulo: "Operaciones de Alto Riesgo",
      desc: "Accidentes con combustible y explosiones menores. Protecci\xF3n t\xE9rmica certificada donde otros EPP no alcanzan."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre el sistema de 3 capas y un traje de una sola capa?",
      a: "El sistema de 3 capas integra capa exterior (resistencia a la llama), barrera de humedad (impermeabilidad + transpiraci\xF3n) y liner t\xE9rmico (aislamiento del calor). Un traje de una capa solo ofrece resistencia b\xE1sica sin las otras dos funciones cr\xEDticas. NFPA 1971 exige el sistema de 3 capas para protecci\xF3n estructural certificada."
    },
    {
      q: "\xBFQu\xE9 significa TPP \u2265 35 cal/cm\xB2 en la pr\xE1ctica?",
      a: "El Thermal Protective Performance (TPP) mide el tiempo antes de una quemadura de segundo grado. Un TPP de 35 cal/cm\xB2 equivale a ~3.5 segundos de exposici\xF3n directa a una llamarada. Este es el m\xEDnimo exigido por NFPA 1971. A mayor TPP, mayor protecci\xF3n ante flash-over."
    },
    {
      q: "\xBFEl traje incluye ficha t\xE9cnica y certificado de laboratorio?",
      a: "S\xED. Cada traje incluye ficha t\xE9cnica completa y certificado de laboratorio independiente que acredita el cumplimiento de NFPA 1971 \u2014 documentaci\xF3n indispensable para licitaciones gubernamentales en M\xE9xico."
    },
    {
      q: "\xBFLa resistencia Nomex\xAE se pierde con el lavado?",
      a: "No. La resistencia inherente del Nomex\xAE es parte de su estructura molecular, no un tratamiento superficial. A diferencia de tejidos FR tratados, el Nomex\xAE no pierde su protecci\xF3n con lavados industriales."
    },
    {
      q: "\xBFCon qu\xE9 EPP NFPA es compatible este traje?",
      a: "Compatible con casco NFPA 1971, guantes estructurales NFPA 1971, botas de cuero certificadas y SCBA NFPA 1981. Para protecci\xF3n integral, todos los componentes deben ser de la misma edici\xF3n de norma."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 24\u201348 h en CDMX y \xE1rea metropolitana, 3\u20135 d\xEDas al resto de la rep\xFAblica. Tallas especiales o personalizadas: 3 a 6 semanas de fabricaci\xF3n."
    }
  ];
  const relacionados = [
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Tejido ultraligero transpirable para combate forestal. Dise\xF1ado para operaciones prolongadas en campo abierto.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n cef\xE1lica certificada NFPA 1971. Compatible con el sistema 3 capas para el bombero estructural.",
      href: "/productos/cascos-para-bomberos",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Guantes certificados para trabajo estructural. Resistencia t\xE9rmica certificada, compatibles con traje NFPA 1971.",
      href: "/productos/guantes-para-bomberos",
      buttonText: "Guantes para Bombero",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Botas Estructurales de Cuero",
      badge: "NFPA 1971",
      description: "Calzado certificado para completar el EPP NFPA 1971. Suela antiderrapante y puntera de acero reforzada.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Botas para Bombero",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Capa Exterior Nomex\xAE IIIA", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex" },
    { label: "Barrera Gore-Tex\xAE PTFE", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/membrana-gore-tex" },
    { label: "Acolchado T\xE9rmico Caldura\xAE", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico" },
    { label: "Alta Visibilidad SOLAS Cl.2", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" },
    { label: "Dise\xF1o Ergon\xF3mico 3D", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Estructurales (Cuero)", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Goggle de Bombero NFPA 1971", href: "/productos/gafas-para-bomberos/goggle", tag: "Visual" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Trajes de Bombero NFPA", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Forestales NFPA 1977", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Completo para Bomberos", href: "/productos", tag: "Gu\xEDa" },
    { label: "Cascos NFPA 1971 y 1977", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes y Protecci\xF3n de Manos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
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
    { label: "TPP m\xEDnimo", valor: "\u2265 35 cal/cm\xB2" },
    { label: "THL m\xEDnimo", valor: "> 205 W/m\xB2" },
    { label: "Capa exterior", valor: "Nomex\xAE IIIA" },
    { label: "Barrera", valor: "Gore-Tex\xAE PTFE" },
    { label: "Liner", valor: "Caldura\xAE / PBI\xAE" },
    { label: "Visibilidad", valor: "SOLAS Clase 2" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "ASTM D6413", desc: "Resistencia a la llama vertical" },
    { code: "TPP \u2265 35", desc: "cal/cm\xB2 \u2014 protecci\xF3n t\xE9rmica m\xEDnima" },
    { code: "SOLAS Cl.2", desc: "Bandas retroreflectivas alta visibilidad" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Traje Estructural NFPA 1971 \u2014 Sistema 3 Capas | BOMBERO.MX", "description": "Traje estructural NFPA 1971 Sistema 3 Capas certificado. Capa exterior Nomex\xAE, barrera Gore-Tex\xAE y liner t\xE9rmico TPP \u2265 35 cal/cm\xB2. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "traje estructural NFPA 1971 sistema 3 capas",
    "traje bombero 3 capas M\xE9xico",
    "traje Nomex Gore-Tex bombero",
    "traje bombero TPP 35",
    "traje NFPA 1971 precio M\xE9xico",
    "traje bombero certificado M\xE9xico",
    "traje estructural bombero Nomex",
    "comprar traje bombero NFPA 1971"
  ], "canonical": "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Trajes de Bombero", href: "/productos/trajes-para-bomberos" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Sistema 3 Capas" }
  ], "heroBadge": "Traje Estructural \xB7 NFPA 1971 \xB7 Sistema 3 Capas", "heroTitle": "Traje Estructural NFPA 1971", "heroTitleHighlight": "Sistema 3 Capas", "heroSubtitle": "El est\xE1ndar de oro para incendios estructurales. Sistema integrado de tres capas certificado NFPA 1971: capa exterior Nomex\xAE, barrera de humedad Gore-Tex\xAE y acolchado t\xE9rmico TPP \u2265 35 cal/cm\xB2. Ficha t\xE9cnica y certificado de laboratorio incluidos.", "heroSeoBlocks": [
    {
      title: "Traje Estructural NFPA 1971 Sistema 3 Capas \u2014 Distribuidor Autorizado M\xE9xico",
      text: "El <strong>sistema de tres capas NFPA 1971</strong> combina capa exterior Nomex\xAE IIIA, barrera de humedad Gore-Tex\xAE y acolchado t\xE9rmico con TPP \u2265 35 cal/cm\xB2 en un solo conjunto certificado. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados del traje estructural l\xEDder del mercado mexicano para cuerpos de bomberos municipales, brigadas industriales y protecci\xF3n civil en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada <strong>traje estructural NFPA 1971 sistema 3 capas</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en los 32 estados de M\xE9xico</strong>. TPP \u2265 35 cal/cm\xB2, SOLAS Clase 2, costuras en hilo Nomex\xAE. Compatible con todo el EPP NFPA certificado."
    }
  ], "ctaBarQuote": "Cotizar Traje Estructural NFPA 1971", "productoCategoria": "Traje de Bombero Estructural", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "TPP \u2265 35" },
    { modifier: "solas", text: "SOLAS Cl.2" }
  ], "productoMasVendido": true, "productoTitle": "Traje Estructural NFPA 1971", "productoTitleSub": "Sistema 3 Capas", "productoDesc": "Sistema integrado de tres capas certificado NFPA 1971: capa exterior Nomex\xAE IIIA de resistencia inherente, barrera de humedad Gore-Tex\xAE y acolchado t\xE9rmico TPP \u2265 35 cal/cm\xB2. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Sistema 3 capas certificado NFPA 1971",
    "Protecci\xF3n t\xE9rmica TPP \u2265 35 cal/cm\xB2",
    "Bandas retroreflectivas SOLAS Clase 2",
    "Costuras en hilo Nomex\xAE certificado",
    "Tallas S a 4XL \u2014 paneles preformados",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Incendio estructural",
    "Rescate urbano",
    "Colapso de estructuras",
    "Brigadas industriales",
    "Protecci\xF3n Civil"
  ], "gallery": [
    { src: "/images/trajes-para-bombero/sistema-3-capas-traje-bombero-diagrama-01.avif", alt: "Sistema 3 capas traje estructural NFPA 1971 diagrama" },
    { src: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif", alt: "Traje bombero estructural NFPA 1971 modelo frontal" },
    { src: "/images/trajes-para-bombero/sistema-3-capas-traje-bombero-exploded-view-01.avif", alt: "Vista explosionada sistema 3 capas traje bombero" },
    { src: "/images/trajes-para-bombero/chaqueton-bombero-goretex-sistema-3-capas-detalle-01.avif", alt: "Detalle GORE-TEX sistema 3 capas chaquet\xF3n bombero" },
    { src: "/images/trajes-para-bombero/certificacion-nfpa-1971-tejido-nomex-goretex-01.avif", alt: "Certificaci\xF3n NFPA 1971 tejido NOMEX GORE-TEX" },
    { src: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-03.avif", alt: "Bombero profesional con traje estructural NFPA 1971" }
  ], "capasEyebrow": "Anatom\xEDa del Traje", "capasTitle": "Sistema Integrado de 3 Capas", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica e insustituible. La sinergia entre las tres es lo que determina el nivel de protecci\xF3n NFPA 1971.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Sistema 3 Capas?", "aplicacionesContent": "<p>El traje estructural NFPA 1971 es el EPP est\xE1ndar para las operaciones de mayor riesgo dentro del servicio de bomberos.</p><p>El sistema de 3 capas coordina protecci\xF3n t\xE9rmica, impermeabilidad y aislamiento en una sola prenda certificada. Cada capa tiene una funci\xF3n espec\xEDfica \u2014 ninguna puede reemplazar a las dem\xE1s.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 \u2014 El est\xE1ndar que salva vidas", "certsDesc": "La norma <strong>NFPA 1971</strong> (<em>Standard on Protective Ensembles for Structural Fire Fighting</em>) es el referente mundial para la protecci\xF3n del bombero estructural. Establece requisitos m\xEDnimos por capa: resistencia a la llama, impermeabilidad, aislamiento t\xE9rmico y visibilidad retroreflectiva.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre el Traje Estructural NFPA 1971", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el sistema de 3 capas, certificaciones, mantenimiento y compatibilidad con el resto del EPP.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "El traje estructural NFPA 1971 trabaja como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
