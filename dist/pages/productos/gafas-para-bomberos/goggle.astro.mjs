import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-proteccion-bomberos-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Lente \u2014 Policarbonato de Alta Resistencia",
      descripcion: "Lente de policarbonato \xF3ptico de grado bal\xEDstico: 250 veces m\xE1s resistente al impacto que el vidrio y la mitad de peso. Soporta impactos de alta velocidad certificados ANSI Z87.1+ (High Impact). Tratamiento dual antiempa\xF1ante interior y antirayado exterior para mantener la visi\xF3n clara en condiciones de calor extremo, humo y esfuerzo f\xEDsico intenso.",
      specs: [
        { label: "Material", valor: "Policarbonato \xF3ptico grado bal\xEDstico" },
        { label: "Resistencia impacto", valor: "ANSI Z87.1+ (High Impact)" },
        { label: "Tratamiento interior", valor: "Antiempa\xF1ante permanente" },
        { label: "Tratamiento exterior", valor: "Antirayado de alta dureza" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Marco \u2014 Sellado Perimetral con Ventilaci\xF3n Indirecta",
      descripcion: "Marco de TPE (elast\xF3mero termopl\xE1stico) resistente al calor con sellado perimetral completo. Impide la entrada de part\xEDculas en suspensi\xF3n, brasas, salpicaduras de l\xEDquidos y gases irritantes. El sistema de ventilaci\xF3n indirecta canaliza el flujo de aire a trav\xE9s de c\xE1maras internas que filtran part\xEDculas sin comprometer el sellado \u2014 la soluci\xF3n al empa\xF1amiento sin sacrificar protecci\xF3n.",
      specs: [
        { label: "Material marco", valor: "TPE resistente al calor (hasta 150 \xB0C)" },
        { label: "Sellado", valor: "Perimetral 360\xB0 \u2014 silicona hipoalerg\xE9nica" },
        { label: "Ventilaci\xF3n", valor: "Indirecta con c\xE1maras de filtraci\xF3n" },
        { label: "Protecci\xF3n", valor: "Part\xEDculas, salpicaduras, brasas, gases" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Banda de Sujeci\xF3n \u2014 Compatibilidad con Casco EPP",
      descripcion: "Banda el\xE1stica ancha con ajuste de tensi\xF3n para uso sobre el casco estructural NFPA 1971 o bajo el casco de rescate NFPA 1951. Sistema de retenci\xF3n antideslizante que mantiene el goggle en posici\xF3n durante operaciones din\xE1micas. Compatible con capucha Nomex\xAE y m\xE1scara SCBA \u2014 se retira el goggle al colocar la m\xE1scara sin necesidad de quitar el casco.",
      specs: [
        { label: "Material banda", valor: "El\xE1stico de alta retenci\xF3n" },
        { label: "Ancho", valor: "Banda ancha antideslizante" },
        { label: "Ajuste", valor: "Hebilla deslizante de tensi\xF3n" },
        { label: "Compatibilidad", valor: "Cascos NFPA 1971 / 1951 / 1977" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "\xD3ptica", label: "Material del lente", valor: "Policarbonato \xF3ptico grado bal\xEDstico" },
    { categoria: "\xD3ptica", label: "Resistencia al impacto", valor: "ANSI Z87.1+ (High Impact)" },
    { categoria: "\xD3ptica", label: "Protecci\xF3n UV", valor: "UV 400 \u2014 99.9 % UVA/UVB bloqueados" },
    { categoria: "\xD3ptica", label: "Tratamiento antiempa\xF1ante", valor: "Permanente (cara interior)" },
    { categoria: "\xD3ptica", label: "Tratamiento antirayado", valor: "Alta dureza (cara exterior)" },
    { categoria: "\xD3ptica", label: "Campo visual", valor: "180\xB0 panor\xE1mico sin distorsi\xF3n" },
    { categoria: "Marco", label: "Material del marco", valor: "TPE resistente al calor (hasta 150 \xB0C)" },
    { categoria: "Marco", label: "Sellado perimetral", valor: "Silicona hipoalerg\xE9nica 360\xB0" },
    { categoria: "Marco", label: "Ventilaci\xF3n", valor: "Indirecta con c\xE1maras internas" },
    { categoria: "Marco", label: "Peso total", valor: "< 120 g" },
    { categoria: "Protecci\xF3n", label: "Part\xEDculas y polvo", valor: "Sellado completo" },
    { categoria: "Protecci\xF3n", label: "Salpicaduras de l\xEDquidos", valor: "Sellado completo" },
    { categoria: "Protecci\xF3n", label: "Calor radiante", valor: "Marco TPE hasta 150 \xB0C" },
    { categoria: "Protecci\xF3n", label: "Brasas y chispas", valor: "Lente y marco resistentes" },
    { categoria: "Compatibilidad", label: "Casco estructural", valor: "NFPA 1971 \u2014 sobre el casco" },
    { categoria: "Compatibilidad", label: "Casco rescate", valor: "NFPA 1951 \u2014 bajo o sobre el casco" },
    { categoria: "Compatibilidad", label: "Capucha Nomex\xAE", valor: "Compatible \u2014 no interfiere" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "Se retira al colocar m\xE1scara" },
    { categoria: "Certificaci\xF3n", label: "Normas", valor: "NFPA 1971 / ANSI Z87.1+ / EN 166" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const catClass = {
    "\xD3ptica": "optica",
    "Marco": "marco",
    "Protecci\xF3n": "proteccion",
    "Compatibilidad": "compatibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Combate de Incendio Estructural",
      desc: "Protecci\xF3n ocular sellada durante combate activo cuando no se usa SCBA. El goggle protege contra part\xEDculas en suspensi\xF3n, brasas, salpicaduras y calor radiante en fases de aproximaci\xF3n y ventilaci\xF3n."
    },
    {
      titulo: "Operaciones de Ventilaci\xF3n",
      desc: "La apertura de ventilaci\xF3n en techos y muros genera una descarga de part\xEDculas, ceniza y fragmentos. El sellado perimetral del goggle protege los ojos donde las gafas convencionales fallan."
    },
    {
      titulo: "Overhaul y Revisi\xF3n Post-Incendio",
      desc: "Las fases de limpieza y revisi\xF3n post-incendio exponen al bombero a ceniza, part\xEDculas de aislamiento y material carbonizado. El goggle sellado es esencial cuando el SCBA ya se ha retirado."
    },
    {
      titulo: "Rescate con Riesgo de Salpicaduras",
      desc: "Escenarios de rescate donde hay l\xEDquidos peligrosos, sangre u otros fluidos biol\xF3gicos. El sellado del goggle impide el contacto con los ojos \u2014 protecci\xF3n que las gafas abiertas no ofrecen."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1ndo uso el goggle en lugar de la m\xE1scara SCBA?",
      a: "El goggle se usa en operaciones donde no se requiere equipo de respiraci\xF3n aut\xF3noma: overhaul, ventilaci\xF3n, rescate t\xE9cnico sin humo y fases de aproximaci\xF3n. Cuando se activa el SCBA, la m\xE1scara facial cubre los ojos y el goggle se retira o se posiciona sobre el casco. El goggle NO sustituye al SCBA en ambientes IDLH."
    },
    {
      q: "\xBFEl goggle se empa\xF1a durante el trabajo f\xEDsico intenso?",
      a: "El sistema de ventilaci\xF3n indirecta con c\xE1maras internas minimiza el empa\xF1amiento al permitir el flujo de aire sin comprometer el sellado. El tratamiento antiempa\xF1ante permanente en la cara interior del lente complementa este sistema. En condiciones extremas de calor y humedad, el empa\xF1amiento se reduce significativamente comparado con goggles de sellado directo."
    },
    {
      q: "\xBFEs compatible con todos los cascos de bombero?",
      a: "S\xED. La banda el\xE1stica ajustable permite usar el goggle sobre el casco estructural NFPA 1971, bajo o sobre el casco de rescate NFPA 1951 y con el casco forestal NFPA 1977. Tambi\xE9n es compatible con capuchas Nomex\xAE y PBI Gold\xAE sin interferir con el ajuste del casco."
    },
    {
      q: "\xBFEl lente soporta impactos de alta velocidad?",
      a: "S\xED. El lente de policarbonato cumple ANSI Z87.1+ (High Impact), que certifica resistencia a impactos de alta velocidad \u2014 superior al est\xE1ndar b\xE1sico Z87.1. Esto protege contra fragmentos proyectados durante operaciones de ventilaci\xF3n, corte y extricaci\xF3n."
    },
    {
      q: "\xBFSe pueden reemplazar los lentes?",
      a: "Depende del modelo. Varios modelos de goggle de bombero permiten reemplazar el lente sin cambiar el marco \u2014 lo que extiende la vida \xFAtil del producto. Consulta con nuestro equipo t\xE9cnico la disponibilidad de lentes de repuesto para el modelo seleccionado."
    },
    {
      q: "\xBFIncluye documentaci\xF3n para licitaciones gubernamentales?",
      a: "S\xED. Cada goggle incluye ficha t\xE9cnica con especificaciones \xF3pticas y de protecci\xF3n, certificado de laboratorio ANSI Z87.1+ y documentaci\xF3n de cumplimiento NFPA 1971 \u2014 documentaci\xF3n completa para procesos de licitaci\xF3n en los 32 estados de M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Gafas de Seguridad Antiimpacto",
      badge: "ANSI Z87.1",
      description: "Gafas de perfil bajo para rescate t\xE9cnico y extricaci\xF3n. Mayor campo visual y comodidad en operaciones sin riesgo de salpicaduras.",
      href: "/productos/gafas-para-bomberos/seguridad",
      buttonText: "Gafas Antiimpacto",
      image: IMAGE
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n cef\xE1lica certificada. El goggle se ajusta sobre el casco con banda el\xE1stica o bajo el visor desplegable.",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Capucha Nomex\xAE NFPA 1971",
      badge: "NFPA 1971",
      description: "El goggle se usa sobre la capucha Nomex\xAE sin interferir con el ajuste facial ni con la m\xE1scara del SCBA.",
      href: "/productos/capuchas-para-bomberos/nomex",
      buttonText: "Capuchas para Bombero",
      image: "/images/directorio/capucha-bombero-nomex-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. El goggle complementa el EPP completo para protecci\xF3n integral del bombero.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Gafas de Seguridad Antiimpacto", href: "/productos/gafas-para-bomberos/seguridad" },
    { label: "Ver Toda la Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", tag: "Cuerpo" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas de Cuero Bombero", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Cascos NFPA 1971 y 1977", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Capuchas y Monjas para Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Estructurales NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Norma NFPA 1971 \u2014 Gu\xEDa Completa", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
    { label: "Guantes y Protecci\xF3n de Manos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" }
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
    { label: "Norma", valor: "NFPA 1971 / Z87.1+" },
    { label: "Lente", valor: "Policarbonato bal\xEDstico" },
    { label: "Impacto", valor: "ANSI Z87.1+ High" },
    { label: "Sellado", valor: "Perimetral 360\xB0" },
    { label: "Ventilaci\xF3n", valor: "Indirecta" },
    { label: "UV", valor: "UV 400 \u2014 99.9 %" },
    { label: "Peso", valor: "< 120 g" },
    { label: "Marco", valor: "TPE hasta 150 \xB0C" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n ocular para combate estructural" },
    { code: "ANSI Z87.1+", desc: "Resistencia a impacto de alta velocidad" },
    { code: "EN 166", desc: "Protecci\xF3n ocular personal \u2014 norma europea" },
    { code: "UV 400", desc: "Bloqueo 99.9 % radiaci\xF3n UVA/UVB" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para ensayos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Goggle de Bombero NFPA 1971 \u2014 Protecci\xF3n Ocular Sellada | BOMBERO.MX", "description": "Goggle de bombero certificado NFPA 1971 y ANSI Z87.1+. Sellado perimetral, lente policarbonato antiimpacto, ventilaci\xF3n indirecta antiempa\xF1ante. Compatible con casco y SCBA. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "goggle bombero NFPA 1971",
    "goggle sellado bombero",
    "protecci\xF3n ocular bombero certificada",
    "goggle antiimpacto bombero M\xE9xico",
    "goggle policarbonato bombero",
    "goggle ANSI Z87.1 bombero",
    "comprar goggle bombero M\xE9xico",
    "goggle sellado incendio estructural"
  ], "canonical": "/productos/gafas-para-bomberos/goggle", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Gafas y Protecci\xF3n Visual", href: "/productos/gafas-para-bomberos" },
    { label: "Goggle de Bombero" }
  ], "heroBadge": "Goggle Sellado \xB7 NFPA 1971 \xB7 ANSI Z87.1+", "heroTitle": "Goggle de Bombero", "heroTitleHighlight": "Protecci\xF3n Ocular Sellada", "heroSubtitle": "Protecci\xF3n ocular de sellado perimetral completo para combate de incendios y operaciones de rescate. Lente policarbonato de grado bal\xEDstico con tratamiento antiempa\xF1ante y antirayado. Compatible con casco NFPA 1971, capucha Nomex\xAE y m\xE1scara SCBA.", "heroSeoBlocks": [
    {
      title: "Goggle de Bombero NFPA 1971 \u2014 Distribuidor Autorizado en M\xE9xico",
      text: "El <strong>goggle de bombero</strong> es la protecci\xF3n ocular de primera l\xEDnea en operaciones sin SCBA: overhaul, ventilaci\xF3n, rescate t\xE9cnico y aproximaci\xF3n. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de goggles certificados <strong>NFPA 1971 y ANSI Z87.1+</strong> para cuerpos de bomberos municipales, brigadas industriales y protecci\xF3n civil en los <strong>32 estados de M\xE9xico</strong>."
    },
    {
      title: "Sellado Perimetral + Ventilaci\xF3n Indirecta \u2014 Visi\xF3n Clara sin Compromisos",
      text: "El <strong>sellado perimetral 360\xB0</strong> impide la entrada de part\xEDculas, brasas y salpicaduras. La <strong>ventilaci\xF3n indirecta con c\xE1maras internas</strong> elimina el empa\xF1amiento sin abrir el sellado. Lente de <strong>policarbonato con impacto ANSI Z87.1+</strong> y protecci\xF3n UV 400. Cada goggle incluye <strong>ficha t\xE9cnica y certificado de laboratorio</strong> para <strong>licitaciones gubernamentales</strong>."
    }
  ], "ctaBarQuote": "Cotizar Goggle de Bombero", "productoCategoria": "Protecci\xF3n Visual para Bombero", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "ANSI Z87.1+" },
    { modifier: "solas", text: "EN 166" }
  ], "productoTitle": "Goggle de Bombero", "productoTitleSub": "Sellado NFPA 1971", "productoDesc": "Goggle de protecci\xF3n ocular con sellado perimetral completo para combate de incendios y rescate. Lente policarbonato de grado bal\xEDstico con tratamiento antiempa\xF1ante y antirayado. Marco TPE resistente al calor. Ventilaci\xF3n indirecta. Compatible con todo casco, capucha y SCBA.", "productoFeatures": [
    "Sellado perimetral 360\xB0 contra part\xEDculas y salpicaduras",
    "Lente policarbonato ANSI Z87.1+ de alta resistencia",
    "Ventilaci\xF3n indirecta antiempa\xF1ante con c\xE1maras",
    "Marco TPE resistente al calor hasta 150 \xB0C",
    "Compatible con casco NFPA 1971/1951/1977 y SCBA",
    "Certificado NFPA 1971 + ANSI Z87.1+ incluido"
  ], "productoAppTags": [
    "Combate estructural",
    "Overhaul post-incendio",
    "Ventilaci\xF3n de estructuras",
    "Rescate con salpicaduras",
    "Brigadas industriales"
  ], "gallery": [
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Goggle de bombero con protecci\xF3n ocular sellada" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo EPP completo con goggle de bombero" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bomberos en operaci\xF3n con protecci\xF3n visual" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con goggle y EPP" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales con goggle sellado" },
    { src: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif", alt: "Goggle compatible con casco estructural" }
  ], "capasEyebrow": "Anatom\xEDa del Goggle", "capasTitle": "Construcci\xF3n y Componentes", "capasDesc": "Cada componente del goggle cumple una funci\xF3n cr\xEDtica: el lente resiste impactos, el marco sella y ventila, y la banda asegura compatibilidad con el sistema EPP.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 y ANSI Z87.1+ edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Goggle de Bombero?", "aplicacionesContent": "<p>El <strong>goggle de bombero NFPA 1971</strong> se usa en toda operaci\xF3n donde los ojos est\xE1n expuestos a part\xEDculas, brasas, salpicaduras o calor radiante y no se utiliza la m\xE1scara SCBA.</p><p>M\xE1s del 10 % de las lesiones de bombero involucran los ojos. El goggle sellado es una pieza cr\xEDtica del EPP que a menudo se subestima \u2014 hasta que ocurre la lesi\xF3n.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "NFPA 1971 + ANSI Z87.1+ \u2014 Protecci\xF3n Ocular Certificada", "certsDesc": "El <strong>goggle de bombero</strong> cumple la norma <strong>NFPA 1971</strong> para protecci\xF3n ocular en combate estructural y <strong>ANSI Z87.1+</strong> para resistencia a impacto de alta velocidad. La certificaci\xF3n <strong>EN 166</strong> cubre el mercado europeo. Cada goggle se ensaya en laboratorio acreditado <strong>ISO/IEC 17025</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/gafas-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre el Goggle de Bombero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre goggles sellados, empa\xF1amiento, compatibilidad con casco y SCBA, y certificaciones.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971 / ANSI Z87.1+.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "El goggle trabaja en sistema con el casco, la capucha y el resto del EPP certificado NFPA. Todos los equipos deben ser compatibles entre s\xED.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/goggle/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/gafas-para-bomberos/goggle/index.astro";
const $$url = "/productos/gafas-para-bomberos/goggle";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
