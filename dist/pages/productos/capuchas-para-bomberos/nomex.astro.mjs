import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/capucha-bombero-nomex-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Tejido Exterior \u2014 Nomex\xAE IIIA",
      descripcion: "Tejido de aramida con resistencia inherente a la llama. El Nomex\xAE IIIA no arde, no se derrite ni se encoge ante exposici\xF3n directa al fuego. Su resistencia es parte de la estructura molecular del pol\xEDmero \u2014 no se pierde con lavados industriales ni con el paso del tiempo.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA (meta-aramida)" },
        { label: "Peso del tejido", valor: "4.5 \u2013 5.5 oz/yd\xB2" },
        { label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente" },
        { label: "Encogimiento m\xE1ximo", valor: "< 5 % tras exposici\xF3n" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Costuras \u2014 Hilo Nomex\xAE Certificado",
      descripcion: "Todas las costuras de la capucha est\xE1n realizadas con hilo 100 % Nomex\xAE resistente a la llama. Las costuras son el punto m\xE1s vulnerable de cualquier prenda FR: un hilo inadecuado puede fallar antes que el tejido y abrir la capucha en el momento m\xE1s cr\xEDtico. NFPA 1971 exige que las costuras soporten la misma exposici\xF3n que el tejido principal.",
      specs: [
        { label: "Hilo", valor: "100 % Nomex\xAE certificado" },
        { label: "Tipo de costura", valor: "Doble pespunte reforzado" },
        { label: "Resistencia m\xEDnima", valor: "NFPA 1971 \xA7 8.2 aprobada" },
        { label: "Resistencia a la llama", valor: "Igual al tejido exterior" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Corte Ergon\xF3mico \u2014 Ajuste Integral",
      descripcion: "Patr\xF3n de corte dise\xF1ado para cubrir cuello, nuca, ment\xF3n, orejas y zona frontal sin interferir con la visi\xF3n ni con la m\xE1scara del SCBA. El el\xE1stico facial de doble banda mantiene la capucha en posici\xF3n durante la operaci\xF3n. El pu\xF1o inferior solapa con el cuello del traje para cerrar la brecha de protecci\xF3n entre casco y traje.",
      specs: [
        { label: "Cobertura", valor: "Cuello, nuca, ment\xF3n, orejas, frente" },
        { label: "Abertura facial", valor: "Compatible con m\xE1scara SCBA" },
        { label: "El\xE1stico", valor: "Doble banda facial ajustable" },
        { label: "Pu\xF1o inferior", valor: "Solape con cuello del traje" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Tejido principal", valor: "Nomex\xAE IIIA (meta-aramida DuPont\u2122)" },
    { categoria: "Material", label: "Peso del tejido", valor: "4.5 \u2013 5.5 oz/yd\xB2" },
    { categoria: "Material", label: "Hilo de costura", valor: "100 % Nomex\xAE resistente a la llama" },
    { categoria: "Material", label: "El\xE1stico facial", valor: "Doble banda aramida/elastano" },
    { categoria: "Protecci\xF3n", label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente (no se lava)" },
    { categoria: "Protecci\xF3n", label: "Encogimiento m\xE1ximo", valor: "< 5 % post-exposici\xF3n" },
    { categoria: "Protecci\xF3n", label: "Punto de fusi\xF3n", valor: "No aplica \u2014 el Nomex\xAE no funde" },
    { categoria: "Protecci\xF3n", label: "Cobertura", valor: "Cuello, nuca, ment\xF3n, orejas, frente" },
    { categoria: "Compatibilidad", label: "Casco", valor: "Todo casco NFPA 1971 / 1977 / 1951" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "Toda m\xE1scara facial completa" },
    { categoria: "Compatibilidad", label: "Traje", valor: "Solape con cuello de traje NFPA 1971" },
    { categoria: "Uso", label: "Tallas disponibles", valor: "Universal / Est\xE1ndar / XL" },
    { categoria: "Uso", label: "Lavado", valor: "Lavadora industrial \u2014 detergente neutro" },
    { categoria: "Uso", label: "Vida \xFAtil recomendada", valor: "Seg\xFAn protocolo NFPA 1851" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 (edici\xF3n vigente)" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const catClass = {
    "Material": "material",
    "Protecci\xF3n": "proteccion",
    "Compatibilidad": "compatibilidad",
    "Uso": "uso",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Incendio Estructural",
      desc: "Combate activo en edificios residenciales, comerciales e industriales. La capucha Nomex\xAE protege cuello, nuca y orejas del calor radiante y llama directa donde el casco no alcanza."
    },
    {
      titulo: "Rescate Urbano",
      desc: "B\xFAsqueda y rescate en estructuras incendiadas o colapsadas. El ajuste ergon\xF3mico permite girar la cabeza con libertad sin perder la protecci\xF3n del cuello."
    },
    {
      titulo: "Colapso de Estructuras",
      desc: "Escenarios de derrumbe con riesgo de llama, gas y brasas. El Nomex\xAE IIIA resiste part\xEDculas incandescentes y brasas sin perforaci\xF3n."
    },
    {
      titulo: "Brigadas Industriales",
      desc: "Protecci\xF3n para brigadas contra incendio en plantas petroqu\xEDmicas, refiner\xEDas y manufactura. Certificaci\xF3n NFPA 1971 requerida en protocolos industriales."
    }
  ];
  const faqs = [
    {
      q: "\xBFLa resistencia del Nomex\xAE se pierde con el lavado?",
      a: "No. La resistencia a la llama del Nomex\xAE es inherente \u2014 forma parte de la estructura molecular del pol\xEDmero aramida. A diferencia de tejidos FR tratados qu\xEDmicamente, el Nomex\xAE mantiene su protecci\xF3n durante toda la vida \xFAtil de la prenda, sin importar cu\xE1ntos ciclos de lavado industrial se realicen."
    },
    {
      q: "\xBFCu\xE1l es la diferencia entre la capucha Nomex\xAE y la PBI Gold\xAE?",
      a: "La capucha Nomex\xAE IIIA es el est\xE1ndar de mercado para protecci\xF3n estructural certificada NFPA 1971. La capucha PBI Gold\xAE ofrece mayor rendimiento t\xE9rmico ante exposici\xF3n extrema (flash-over, combate interior agresivo). Para la mayor\xEDa de las operaciones estructurales, la capucha Nomex\xAE cumple y excede los requisitos de NFPA 1971."
    },
    {
      q: "\xBFLa capucha es compatible con mi casco y SCBA?",
      a: "S\xED. La capucha Nomex\xAE estructural es compatible con todo casco certificado NFPA 1971, NFPA 1977 y NFPA 1951, y con cualquier m\xE1scara SCBA del mercado. La abertura facial enmarca la m\xE1scara y el pu\xF1o inferior solapa con el cuello del traje para cerrar la protecci\xF3n."
    },
    {
      q: "\xBFCada cu\xE1nto debo reemplazar la capucha?",
      a: "NFPA 1851 establece un m\xE1ximo de 10 a\xF1os desde la fecha de fabricaci\xF3n, pero recomienda inspecci\xF3n regular. Se debe reemplazar antes si presenta rasgaduras, adelgazamiento del tejido, p\xE9rdida de elasticidad o da\xF1o por exposici\xF3n excesiva al calor. Una capucha da\xF1ada deja piel expuesta a quemaduras."
    },
    {
      q: "\xBFC\xF3mo se lava la capucha Nomex\xAE correctamente?",
      a: "Lavadora industrial con agua tibia (m\xE1ximo 40 \xB0C) y detergente neutro sin blanqueador. No usar suavizante ni lej\xEDa. Secar al aire o en secadora a temperatura baja. Nunca planchar. Seguir el protocolo de limpieza de NFPA 1851 para prendas contaminadas con productos de combusti\xF3n."
    },
    {
      q: "\xBFLa capucha incluye ficha t\xE9cnica para licitaciones?",
      a: "S\xED. Cada capucha Nomex\xAE incluye ficha t\xE9cnica completa con especificaciones del tejido, certificado de laboratorio independiente y documentaci\xF3n de cumplimiento NFPA 1971 \u2014 todo lo necesario para procesos de licitaci\xF3n gubernamental en cualquier estado de la Rep\xFAblica Mexicana."
    }
  ];
  const relacionados = [
    {
      title: "Capucha PBI Gold\xAE Premium",
      badge: "NFPA 1971",
      description: "M\xE1ximo rendimiento t\xE9rmico para bomberos de alta exposici\xF3n. PBI Gold\xAE no arde ni funde, ideal para combate interior agresivo.",
      href: "/productos/capuchas-para-bomberos/pbi",
      buttonText: "Capucha PBI Gold\xAE",
      image: IMAGE
    },
    {
      title: "Capucha Particulada PM2.5",
      badge: "NFPA 1971 + PM2.5",
      description: "Membrana interior de bloqueo de part\xEDculas carcin\xF3genas del humo. Protocolo de reducci\xF3n de exposici\xF3n para salud ocupacional.",
      href: "/productos/capuchas-para-bomberos/particulada",
      buttonText: "Capucha Particulada",
      image: IMAGE
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n cef\xE1lica certificada. La capucha trabaja en sistema con el casco para cubrir las zonas que este no protege.",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. El pu\xF1o de la capucha debe solapar con el cuello del traje para protecci\xF3n integral.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" },
    { label: "Ver Todas las Capuchas", href: "/productos/capuchas-para-bomberos" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", tag: "Cuerpo" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas de Cuero Bombero", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" },
    { label: "Gafas Protecci\xF3n ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Capuchas de Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Trajes Estructurales NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Norma NFPA 1971 \u2014 Gu\xEDa Completa", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Art\xEDculo" },
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
    { label: "Material", valor: "Nomex\xAE IIIA" },
    { label: "Peso tejido", valor: "4.5\u20135.5 oz/yd\xB2" },
    { label: "Resistencia", valor: "Inherente" },
    { label: "Fusi\xF3n", valor: "No funde" },
    { label: "Hilo costura", valor: "Nomex\xAE 100 %" },
    { label: "Compatibilidad", valor: "Todo casco/SCBA" },
    { label: "Cobertura", valor: "Cuello a frente" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "ASTM D6413", desc: "Resistencia vertical a la llama" },
    { code: "NFPA 1851", desc: "Selecci\xF3n, cuidado y mantenimiento de EPP" },
    { code: "UL / SEI", desc: "Certificaci\xF3n de laboratorio independiente" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para ensayos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Capucha Nomex\xAE Estructural NFPA 1971 para Bombero | BOMBERO.MX", "description": "Capucha Nomex\xAE IIIA certificada NFPA 1971 para bomberos. Protecci\xF3n de cuello, nuca y orejas con resistencia inherente a la llama. Compatible con todo casco y SCBA. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "capucha Nomex bombero",
    "monja Nomex NFPA 1971",
    "capucha bombero estructural",
    "capucha Nomex IIIA certificada",
    "monja bombero protecci\xF3n cuello",
    "capucha bombero NFPA M\xE9xico",
    "comprar capucha Nomex bombero",
    "capucha resistente fuego bombero"
  ], "canonical": "/productos/capuchas-para-bomberos/nomex", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Capuchas para Bombero", href: "/productos/capuchas-para-bomberos" },
    { label: "Capucha Nomex\xAE Estructural" }
  ], "heroBadge": "Capucha Estructural \xB7 Nomex\xAE IIIA \xB7 NFPA 1971", "heroTitle": "Capucha Nomex\xAE IIIA", "heroTitleHighlight": "Estructural NFPA 1971", "heroSubtitle": "El est\xE1ndar de protecci\xF3n cef\xE1lica para bomberos estructurales. Tejido Nomex\xAE IIIA con resistencia inherente a la llama que protege cuello, nuca, ment\xF3n y orejas \u2014 las zonas m\xE1s vulnerables que el casco no cubre. Certificada NFPA 1971 con ficha t\xE9cnica y certificado de laboratorio incluidos.", "heroSeoBlocks": [
    {
      title: "Capucha Nomex\xAE NFPA 1971 \u2014 Distribuidor Autorizado en M\xE9xico",
      text: "La <strong>capucha Nomex\xAE IIIA NFPA 1971</strong> es el componente del EPP que cierra la brecha de protecci\xF3n entre el casco y el traje. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de capuchas Nomex\xAE certificadas para cuerpos de bomberos municipales, brigadas industriales y protecci\xF3n civil en los <strong>32 estados de la Rep\xFAblica Mexicana</strong>."
    },
    {
      title: "Resistencia Inherente a la Llama \u2014 No se Pierde con el Lavado",
      text: "A diferencia de tejidos FR tratados qu\xEDmicamente, la resistencia a la llama del <strong>Nomex\xAE IIIA</strong> es parte de su estructura molecular. No se pierde con lavados industriales, no se degrada con el uso y no requiere retratamiento. Cada capucha incluye <strong>ficha t\xE9cnica y certificado de laboratorio</strong> independiente para <strong>licitaciones gubernamentales</strong>."
    }
  ], "ctaBarQuote": "Cotizar Capucha Nomex\xAE para Bombero", "productoCategoria": "Capucha / Monja de Bombero", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "Nomex\xAE IIIA" },
    { modifier: "solas", text: "Inherente" }
  ], "productoTitle": "Capucha Nomex\xAE IIIA", "productoTitleSub": "Estructural NFPA 1971", "productoDesc": "Capucha de protecci\xF3n cef\xE1lica fabricada en tejido Nomex\xAE IIIA con resistencia inherente a la llama. Cubre cuello, nuca, ment\xF3n, orejas y frente. Compatible con todo casco NFPA y m\xE1scara SCBA. Costuras en hilo Nomex\xAE certificado. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Tejido Nomex\xAE IIIA de resistencia inherente",
    "Cubre cuello, nuca, ment\xF3n, orejas y frente",
    "Compatible con todo casco NFPA 1971/1977/1951",
    "Compatible con toda m\xE1scara SCBA del mercado",
    "Costuras en hilo 100 % Nomex\xAE certificado",
    "Certificado de laboratorio NFPA 1971 incluido"
  ], "productoAppTags": [
    "Incendio estructural",
    "Rescate urbano",
    "Colapso de estructuras",
    "Brigadas industriales",
    "Protecci\xF3n Civil"
  ], "gallery": [
    { src: "/images/directorio/capucha-bombero-nomex-01.avif", alt: "Capucha Nomex\xAE IIIA estructural NFPA 1971" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo EPP bombero con capucha" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bomberos en incendio estructural con capucha Nomex" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con capucha y EPP completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Equipo de protecci\xF3n personal para bomberos" }
  ], "capasEyebrow": "Anatom\xEDa de la Capucha", "capasTitle": "Construcci\xF3n y Componentes", "capasDesc": "Cada elemento de la capucha cumple una funci\xF3n cr\xEDtica. El tejido Nomex\xAE, las costuras certificadas y el corte ergon\xF3mico trabajan en conjunto para proteger las zonas m\xE1s vulnerables del bombero.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa la Capucha Nomex\xAE?", "aplicacionesContent": "<p>La <strong>capucha Nomex\xAE NFPA 1971</strong> es el est\xE1ndar de protecci\xF3n cef\xE1lica para todo bombero estructural. Cubre las zonas de piel que el casco no protege: cuello, nuca, ment\xF3n y orejas.</p><p>Una capucha incorrecta, deteriorada o ausente puede causar quemaduras de segundo y tercer grado en segundos durante un flash-over o en combate interior.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificada NFPA 1971 \u2014 Protecci\xF3n que no se negocia", "certsDesc": "La norma <strong>NFPA 1971</strong> (<em>Standard on Protective Ensembles for Structural Fire Fighting</em>) establece los requisitos m\xEDnimos de resistencia a la llama, estabilidad dimensional y resistencia de costuras para capuchas de bombero. Cada capucha se ensaya en laboratorio acreditado <strong>ISO/IEC 17025</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/capuchas-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Capucha Nomex\xAE para Bombero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre materiales, compatibilidad, mantenimiento y certificaci\xF3n de la capucha Nomex\xAE IIIA NFPA 1971.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La capucha Nomex\xAE trabaja como parte de un sistema EPP integral. Todos los equipos deben ser compatibles y certificados con la misma edici\xF3n de norma NFPA.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/nomex/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/nomex/index.astro";
const $$url = "/productos/capuchas-para-bomberos/nomex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
