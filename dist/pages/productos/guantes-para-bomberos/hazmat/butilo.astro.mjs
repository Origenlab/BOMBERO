import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Caucho de Butilo",
      descripcion: "Primera barrera de protecci\xF3n qu\xEDmica. El caucho de butilo (isobutileno-isopreno) ofrece resistencia excepcional a gases, vapores y l\xEDquidos peligrosos. Permeaci\xF3n ultra-baja contra \xE1cidos, bases, cetonas y alcoholes. Espesor m\xEDnimo de 14 mil (0.35 mm) certificado.",
      specs: [
        { label: "Material", valor: "Caucho de butilo sint\xE9tico" },
        { label: "Espesor", valor: "14\u201318 mil (0.35\u20130.45 mm)" },
        { label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 6" },
        { label: "Permeaci\xF3n", valor: "> 480 min contra productos qu\xEDmicos" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Refuerzo de Soporte \u2014 Nylon Textil",
      descripcion: "Segunda capa: soporte textil de nylon de alta tenacidad. Proporciona resistencia mec\xE1nica al guante, evitando desgarros y perforaciones. Permite la manipulaci\xF3n segura de envases, tambores y herramientas en zonas contaminadas.",
      specs: [
        { label: "Material", valor: "Nylon de alta tenacidad" },
        { label: "Funci\xF3n", valor: "Refuerzo mec\xE1nico anti-desgarro" },
        { label: "Resistencia abrasi\xF3n", valor: "ASTM D3389 aprobado" },
        { label: "Compatibilidad", valor: "Compatible con butilo qu\xEDmico" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro Interior \u2014 Algod\xF3n Absorbente",
      descripcion: "Tercera capa: forro de algod\xF3n 100% que absorbe la transpiraci\xF3n de las manos durante operaciones prolongadas. Mejora el confort y el agarre interior del guante. Permite el uso extendido en emergencias qu\xEDmicas sin fatiga excesiva.",
      specs: [
        { label: "Material", valor: "Algod\xF3n 100% natural" },
        { label: "Funci\xF3n", valor: "Absorci\xF3n de humedad corporal" },
        { label: "Confort", valor: "Transpirable \u2014 reduce fatiga" },
        { label: "Peso", valor: "< 50 g por guante" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Material principal", valor: "Caucho de butilo sint\xE9tico (IIR)" },
    { categoria: "Material", label: "Espesor total", valor: "14\u201318 mil (0.35\u20130.45 mm)" },
    { categoria: "Material", label: "Capa de soporte", valor: "Nylon de alta tenacidad" },
    { categoria: "Material", label: "Forro interior", valor: "Algod\xF3n 100% absorbente" },
    { categoria: "Material", label: "Color exterior", valor: "Negro o gris oscuro" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 6 (> 480 min)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1cidos fuertes", valor: "Excelente \u2014 H\u2082SO\u2084, HCl, HNO\u2083" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Bases y \xE1lcalis", valor: "Excelente \u2014 NaOH, KOH" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Cetonas y alcoholes", valor: "Excelente \u2014 MEK, acetona, etanol" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Gases t\xF3xicos", valor: "Muy buena \u2014 cloro, amon\xEDaco" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Hidrocarburos arom\xE1ticos", valor: "Limitada \u2014 no usar con benceno" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "ASTM D3389 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al corte", valor: "EN 388:2016 nivel 2" },
    { categoria: "Resistencia", label: "Resistencia a la punci\xF3n", valor: "EN 388:2016 nivel 2" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n EPA", valor: "Nivel A \u2014 EPP m\xE1ximo" },
    { categoria: "Certificaci\xF3n", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 XXL" },
    { categoria: "Certificaci\xF3n", label: "Longitud m\xEDnima", valor: "33 cm (13 pulgadas)" },
    { categoria: "Certificaci\xF3n", label: "Compatibilidad traje", valor: "NFPA 1991 Level A / B" }
  ];
  const catClass = {
    "Material": "construccion",
    "Protecci\xF3n Qu\xEDmica": "proteccion",
    "Resistencia": "visibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Derrames Qu\xEDmicos Mayores",
      desc: "Respuesta a derrames de \xE1cidos, bases, cetonas y l\xEDquidos corrosivos. El butilo ofrece la mejor protecci\xF3n contra permeaci\xF3n qu\xEDmica en emergencias HAZMAT."
    },
    {
      titulo: "Operaciones CBRN",
      desc: "Protecci\xF3n contra agentes qu\xEDmicos, biol\xF3gicos y t\xF3xicos industriales (TICs). Certificado para operaciones de respuesta a terrorismo qu\xEDmico."
    },
    {
      titulo: "Descontaminaci\xF3n de Personal",
      desc: "Zona de descontaminaci\xF3n en incidentes qu\xEDmicos. Resistente a detergentes, descontaminantes y soluciones de lavado industrial."
    },
    {
      titulo: "Manejo de Materiales Peligrosos",
      desc: "Transferencia, almacenamiento y transporte de sustancias qu\xEDmicas peligrosas. Uso industrial en plantas qu\xEDmicas y petroqu\xEDmicas."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre guantes de butilo y guantes de nitrilo para HAZMAT?",
      a: "El butilo ofrece resistencia qu\xEDmica superior contra gases, vapores y productos qu\xEDmicos altamente corrosivos (\xE1cidos fuertes, cetonas, alcoholes). El nitrilo es mejor contra hidrocarburos y aceites. Para incidentes HAZMAT de alta complejidad (Nivel A), el butilo es la primera opci\xF3n por su baja permeaci\xF3n."
    },
    {
      q: "\xBFCu\xE1nto tiempo puedo usar estos guantes antes de reemplazarlos?",
      a: "En operaciones HAZMAT, los guantes de butilo deben inspeccionarse antes y despu\xE9s de cada uso. Si hay exposici\xF3n a qu\xEDmicos agresivos, se recomienda reemplazo inmediato. Sin exposici\xF3n, la vida \xFAtil es de 2-3 a\xF1os con almacenamiento adecuado (lugar fresco, oscuro, sin luz solar)."
    },
    {
      q: "\xBFLos guantes de butilo son compatibles con trajes encapsulados NFPA 1991?",
      a: "S\xED. Estos guantes est\xE1n certificados NFPA 1991 y son compatibles con trajes encapsulados Nivel A. Se integran mediante sistema de anillo de bloqueo o banda el\xE1stica herm\xE9tica. Siempre verificar compatibilidad espec\xEDfica con el fabricante del traje."
    },
    {
      q: "\xBFQu\xE9 qu\xEDmicos NO debo usar con guantes de butilo?",
      a: "El butilo tiene resistencia limitada contra hidrocarburos arom\xE1ticos (benceno, tolueno, xileno) y aceites minerales. Para estos productos, usar guantes de Viton\xAE o nitrilo. Consultar la tabla de compatibilidad qu\xEDmica antes de cada operaci\xF3n."
    },
    {
      q: "\xBFC\xF3mo inspecciono los guantes antes de usarlos en una emergencia HAZMAT?",
      a: "Inspecci\xF3n visual: buscar grietas, perforaciones, decoloraci\xF3n. Prueba de inflado: inflar el guante y sumergir en agua \u2014 las burbujas indican fugas. Prueba t\xE1ctil: pasar los dedos por toda la superficie. Cualquier defecto = descarte inmediato."
    },
    {
      q: "\xBFCu\xE1nto tiempo tarda la entrega de guantes HAZMAT en M\xE9xico?",
      a: "Tallas est\xE1ndar (M, L, XL): 3\u20135 d\xEDas h\xE1biles en CDMX y \xE1rea metropolitana, 5\u20137 d\xEDas al resto de la rep\xFAblica. Pedidos especiales o vol\xFAmenes mayores: 2\u20133 semanas. Env\xEDo certificado con documentaci\xF3n NFPA 1991 incluida."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Estructurales NFPA 1971",
      badge: "NFPA 1971",
      description: "Guantes certificados para combate estructural. Resistencia t\xE9rmica y mec\xE1nica en incendios.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes Estructurales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje HAZMAT Nivel A",
      badge: "NFPA 1991",
      description: "Traje encapsulado total gas-tight certificado NFPA 1991. Compatible con guantes de butilo.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes HAZMAT",
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif"
    },
    {
      title: "Guantes de Rescate T\xE9cnico",
      badge: "NFPA 1951",
      description: "Protecci\xF3n mec\xE1nica para rescate urbano, veh\xEDculos y estructuras colapsadas.",
      href: "/productos/guantes-para-bomberos/rescate",
      buttonText: "Ver Guantes Rescate",
      image: "/images/directorio/equipo-proteccion-bomberos-01.avif"
    },
    {
      title: "Botas Caucho HAZMAT",
      badge: "NFPA 1991",
      description: "Botas de caucho certificadas para operaciones con materiales peligrosos y derrames qu\xEDmicos.",
      href: "/productos/botas-para-bomberos/caucho",
      buttonText: "Ver Botas HAZMAT",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Guantes Neopreno HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/neopreno" },
    { label: "Guantes L\xE1tex Industrial", href: "/productos/guantes-para-bomberos/hazmat/latex" },
    { label: "Guantes Viton\xAE Fluorocarbono", href: "/productos/guantes-para-bomberos/hazmat/viton" },
    { label: "Guantes Nitrilo Sint\xE9tico", href: "/productos/guantes-para-bomberos/hazmat/nitrilo" },
    { label: "Guantes Multicapa CBRN", href: "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Caucho Qu\xEDmico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Capucha CBRN", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "Trajes para Materiales Peligrosos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Completo HAZMAT", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Guantes Estructurales NFPA 1971", href: "/productos/guantes-para-bomberos/estructurales", tag: "Cat\xE1logo" },
    { label: "Botas Qu\xEDmico-Resistentes", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Detectores de Gas y Vapores", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "Unidades HAZMAT CDMX", href: "/directorio/ciudad-de-mexico" },
    { label: "Protecci\xF3n Civil Jalisco", href: "/directorio/jalisco" },
    { label: "Bomberos Industriales Monterrey", href: "/directorio/nuevo-leon" },
    { label: "HAZMAT Zona Industrial Puebla", href: "/directorio/puebla" },
    { label: "Protecci\xF3n Civil Quer\xE9taro", href: "/directorio/queretaro" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1991" },
    { label: "Material", valor: "Butilo (IIR)" },
    { label: "Espesor", valor: "14\u201318 mil" },
    { label: "Permeaci\xF3n", valor: "> 480 min" },
    { label: "Clase qu\xEDmica", valor: "ASTM F739-6" },
    { label: "Nivel EPA", valor: "Nivel A" },
    { label: "Longitud", valor: "33 cm m\xEDn." },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica vapor-gas \u2014 EPP Nivel A" },
    { code: "ASTM F739", desc: "Resistencia a permeaci\xF3n de qu\xEDmicos l\xEDquidos" },
    { code: "EN 388:2016", desc: "Protecci\xF3n mec\xE1nica \u2014 abrasi\xF3n/corte/punci\xF3n" },
    { code: "EPA Nivel A", desc: "M\xE1ximo nivel de protecci\xF3n respiratoria y d\xE9rmica" },
    { code: "ISO 374", desc: "Guantes protecci\xF3n contra qu\xEDmicos y microorganismos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Butilo HAZMAT NFPA 1991 \u2014 Protecci\xF3n Qu\xEDmica | BOMBERO.MX", "description": "Guantes de butilo HAZMAT certificados NFPA 1991. Resistencia qu\xEDmica superior contra \xE1cidos, bases, cetonas. Permeaci\xF3n > 480 min. Nivel A EPP. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes butilo HAZMAT M\xE9xico",
    "guantes qu\xEDmicos butilo NFPA 1991",
    "guantes protecci\xF3n qu\xEDmica butilo",
    "guantes butilo materiales peligrosos",
    "guantes HAZMAT nivel A M\xE9xico",
    "guantes butilo \xE1cidos bases",
    "guantes qu\xEDmicos certificados M\xE9xico",
    "comprar guantes butilo HAZMAT"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/butilo", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Butilo" }
  ], "heroBadge": "Guantes HAZMAT \xB7 NFPA 1991 \xB7 Butilo", "heroTitle": "Guantes de Butilo HAZMAT", "heroTitleHighlight": "NFPA 1991 Nivel A", "heroSubtitle": "Protecci\xF3n qu\xEDmica de m\xE1ximo nivel. Caucho de butilo con resistencia excepcional a \xE1cidos, bases, cetonas y alcoholes. Permeaci\xF3n > 480 minutos certificada ASTM F739. Compatible con trajes encapsulados Nivel A. Certificado de laboratorio incluido.", "heroSeoBlocks": [
    {
      title: "Guantes de Butilo HAZMAT NFPA 1991 \u2014 M\xE1xima Protecci\xF3n Qu\xEDmica",
      text: "Los <strong>guantes de butilo HAZMAT</strong> ofrecen la resistencia qu\xEDmica m\xE1s alta del mercado. Certificados <strong>NFPA 1991</strong> para operaciones de Nivel A con materiales peligrosos. En <strong>BOMBERO.MX</strong> distribuimos guantes de butilo certificados para cuerpos de bomberos, unidades HAZMAT, protecci\xF3n civil y brigadas industriales en los 32 estados de M\xE9xico."
    },
    {
      title: "Certificaci\xF3n NFPA 1991 y EPA Nivel A \u2014 Protecci\xF3n contra Qu\xEDmicos Peligrosos",
      text: "Cada par de <strong>guantes de butilo HAZMAT</strong> est\xE1 certificado contra permeaci\xF3n qu\xEDmica seg\xFAn ASTM F739 clase 6 (> 480 minutos). Resistencia comprobada contra \xE1cidos fuertes, bases c\xE1usticas, cetonas y alcoholes. Documentaci\xF3n completa para <strong>licitaciones y auditor\xEDas de seguridad industrial en M\xE9xico</strong>."
    }
  ], "ctaBarQuote": "Cotizar Guantes Butilo HAZMAT", "productoCategoria": "Guantes HAZMAT Protecci\xF3n Qu\xEDmica", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1991" },
    { modifier: "hazmat", text: "Nivel A" },
    { modifier: "astm", text: "ASTM F739" }
  ], "productoMasVendido": true, "productoTitle": "Guantes de Butilo HAZMAT", "productoTitleSub": "NFPA 1991 \u2014 Nivel A", "productoDesc": "Caucho de butilo sint\xE9tico con resistencia qu\xEDmica excepcional. Permeaci\xF3n > 480 minutos contra \xE1cidos, bases, cetonas. Compatible con trajes encapsulados NFPA 1991. Certificado de laboratorio incluido.", "productoFeatures": [
    "Caucho de butilo sint\xE9tico certificado",
    "Resistencia qu\xEDmica ASTM F739 clase 6",
    "Permeaci\xF3n > 480 min \xE1cidos/bases",
    "Compatible traje HAZMAT Nivel A/B",
    "Forro interior algod\xF3n absorbente",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Derrames qu\xEDmicos",
    "Operaciones CBRN",
    "Descontaminaci\xF3n",
    "Materiales peligrosos",
    "Plantas qu\xEDmicas"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes de butilo HAZMAT NFPA 1991" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT con guantes de butilo" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Unidad HAZMAT en operaci\xF3n qu\xEDmica" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n con guantes qu\xEDmicos" },
    { src: "/images/directorio/traje-hazmat-nivel-a-01.avif", alt: "Traje HAZMAT Nivel A con guantes butilo" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "EPP completo HAZMAT certificado" }
  ], "capasEyebrow": "Construcci\xF3n del Guante", "capasTitle": "Sistema de 3 Capas de Protecci\xF3n", "capasDesc": "Cada capa cumple una funci\xF3n espec\xEDfica: barrera qu\xEDmica exterior, refuerzo mec\xE1nico y confort interior. La combinaci\xF3n determina el nivel de protecci\xF3n NFPA 1991.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1991 y EPA Nivel A.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Butilo?", "aplicacionesContent": "<p>Los guantes de butilo HAZMAT son el EPP est\xE1ndar para operaciones de m\xE1ximo riesgo qu\xEDmico.</p><p>Certificados NFPA 1991 para incidentes con materiales peligrosos, derrames de qu\xEDmicos industriales y emergencias CBRN. La baja tasa de permeaci\xF3n del butilo protege contra exposici\xF3n d\xE9rmica prolongada.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1991 \u2014 Protecci\xF3n Nivel A", "certsDesc": "La norma <strong>NFPA 1991</strong> (<em>Standard on Vapor-Protective Ensembles for Hazardous Materials Emergencies</em>) establece los requisitos para el EPP de m\xE1xima protecci\xF3n qu\xEDmica. Los guantes deben resistir permeaci\xF3n de vapores y l\xEDquidos peligrosos seg\xFAn ASTM F739.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes de Butilo HAZMAT", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre resistencia qu\xEDmica, compatibilidad, inspecci\xF3n y mantenimiento de guantes de butilo.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1991.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo HAZMAT", "relacionadosDesc": "Los guantes de butilo trabajan como parte de un sistema integrado. Todos los equipos est\xE1n certificados NFPA para operaciones con materiales peligrosos.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/butilo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/butilo/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/butilo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
