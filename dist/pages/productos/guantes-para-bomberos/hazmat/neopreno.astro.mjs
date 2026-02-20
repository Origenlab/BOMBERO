import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Policloropreno (Neopreno)",
      descripcion: "Primera barrera multi-qu\xEDmica. El neopreno (policloropreno) ofrece resistencia balanceada contra m\xFAltiples familias qu\xEDmicas: \xE1cidos moderados, bases, aceites, solventes y alcoholes. Flexibilidad superior a -40\xB0C. Espesor m\xEDnimo de 15 mil (0.38 mm) certificado.",
      specs: [
        { label: "Material", valor: "Policloropreno sint\xE9tico (CR)" },
        { label: "Espesor", valor: "15\u201320 mil (0.38\u20130.50 mm)" },
        { label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 4-5" },
        { label: "Flexibilidad", valor: "Hasta -40\xB0C sin rigidez" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Refuerzo de Soporte \u2014 Tejido de Nylon",
      descripcion: "Segunda capa: tejido de nylon intercalado que proporciona resistencia mec\xE1nica al conjunto. Evita desgarros, abrasi\xF3n y perforaciones durante el manejo de envases qu\xEDmicos. Permite la manipulaci\xF3n prolongada sin fatiga.",
      specs: [
        { label: "Material", valor: "Nylon tejido alta resistencia" },
        { label: "Funci\xF3n", valor: "Refuerzo mec\xE1nico y resistencia al desgarro" },
        { label: "Resistencia abrasi\xF3n", valor: "EN 388 nivel 3" },
        { label: "Peso", valor: "< 30 g por guante" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro Interior \u2014 Jersey de Algod\xF3n",
      descripcion: "Tercera capa: forro suave de jersey de algod\xF3n que absorbe la transpiraci\xF3n y mejora el confort durante operaciones prolongadas. Reduce la fatiga de las manos en jornadas de descontaminaci\xF3n extendidas.",
      specs: [
        { label: "Material", valor: "Jersey de algod\xF3n 100%" },
        { label: "Funci\xF3n", valor: "Absorci\xF3n de humedad y confort" },
        { label: "Transpirabilidad", valor: "Alta \u2014 reduce sudoraci\xF3n" },
        { label: "Lavable", valor: "S\xED \u2014 despu\xE9s de cada uso" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Material principal", valor: "Policloropreno (Neopreno CR)" },
    { categoria: "Material", label: "Espesor total", valor: "15\u201320 mil (0.38\u20130.50 mm)" },
    { categoria: "Material", label: "Capa de soporte", valor: "Nylon tejido alta tenacidad" },
    { categoria: "Material", label: "Forro interior", valor: "Jersey de algod\xF3n 100%" },
    { categoria: "Material", label: "Color exterior", valor: "Negro o verde oscuro" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 4-5 (240\u2013480 min)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1cidos moderados", valor: "Muy buena \u2014 H\u2082SO\u2084 50%, HCl 37%" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Bases y \xE1lcalis", valor: "Excelente \u2014 NaOH, KOH, NH\u2084OH" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Aceites y grasas", valor: "Excelente \u2014 derivados petr\xF3leo" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Alcoholes y solventes", valor: "Buena \u2014 metanol, etanol, isopropanol" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia multiuso", valor: "Balanceada \u2014 amplio espectro qu\xEDmico" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al corte", valor: "EN 388:2016 nivel 2" },
    { categoria: "Resistencia", label: "Flexibilidad a bajas temp.", valor: "Hasta -40\xB0C sin rigidez" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n EPA", valor: "Nivel A/B \u2014 multi-qu\xEDmico" },
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
      titulo: "Derrames Multi-Qu\xEDmicos",
      desc: "Respuesta a derrames donde el tipo exacto de qu\xEDmico es desconocido. El neopreno ofrece protecci\xF3n balanceada contra m\xFAltiples familias qu\xEDmicas."
    },
    {
      titulo: "Plantas Qu\xEDmicas e Industriales",
      desc: "Manejo diario de productos qu\xEDmicos variados. Resistencia contra aceites, solventes, \xE1cidos moderados y bases en un solo guante."
    },
    {
      titulo: "Descontaminaci\xF3n HAZMAT",
      desc: "Zona caliente y tibia en incidentes HAZMAT. Resistente a detergentes de descontaminaci\xF3n y soluciones de lavado industrial."
    },
    {
      titulo: "Operaciones en Fr\xEDo Extremo",
      desc: "Emergencias qu\xEDmicas en climas fr\xEDos. El neopreno mantiene flexibilidad hasta -40\xB0C sin volverse r\xEDgido."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 elegir guantes de neopreno sobre butilo o nitrilo?",
      a: "El neopreno ofrece resistencia balanceada contra m\xFAltiples qu\xEDmicos \u2014 es la opci\xF3n ideal cuando el tipo exacto de sustancia es desconocido o cuando se manejan varios qu\xEDmicos diferentes. Combina las ventajas del butilo (resistencia a \xE1cidos/bases) con las del nitrilo (aceites/grasas) en un solo guante."
    },
    {
      q: "\xBFLos guantes de neopreno resisten bajas temperaturas?",
      a: "S\xED. El neopreno mantiene flexibilidad hasta -40\xB0C, a diferencia del butilo y el nitrilo que se vuelven r\xEDgidos en fr\xEDo extremo. Esto los hace ideales para operaciones HAZMAT en zonas de clima fr\xEDo o durante el invierno."
    },
    {
      q: "\xBFCu\xE1nto dura la vida \xFAtil de los guantes de neopreno?",
      a: "Con almacenamiento adecuado (lugar fresco, oscuro, alejado de ozono y luz UV), 3\u20135 a\xF1os sin uso. En operaciones activas, se recomienda inspecci\xF3n antes y despu\xE9s de cada uso. Cualquier signo de degradaci\xF3n = reemplazo inmediato."
    },
    {
      q: "\xBFSon compatibles con trajes HAZMAT Nivel A y Nivel B?",
      a: "S\xED. Los guantes de neopreno certificados NFPA 1991 son compatibles con trajes encapsulados Nivel A y trajes splash Nivel B. Se integran mediante sistema de anillo de bloqueo o banda herm\xE9tica. Verificar compatibilidad espec\xEDfica con el fabricante del traje."
    },
    {
      q: "\xBFPuedo reutilizar los guantes despu\xE9s de un incidente qu\xEDmico?",
      a: "Depende del tipo y concentraci\xF3n del qu\xEDmico. Si hay exposici\xF3n a sustancias altamente t\xF3xicas, corrosivas o cancer\xEDgenas, se recomienda descarte. Para qu\xEDmicos moderados, lavar con soluci\xF3n descontaminante, inspeccionar minuciosamente y realizar prueba de inflado antes de reutilizar."
    },
    {
      q: "\xBFIncluyen certificaci\xF3n y documentaci\xF3n NFPA 1991?",
      a: "S\xED. Cada par incluye certificado de laboratorio NFPA 1991 y ficha t\xE9cnica con tabla de compatibilidad qu\xEDmica. Documentaci\xF3n necesaria para auditor\xEDas de seguridad industrial y licitaciones gubernamentales en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Butilo HAZMAT",
      badge: "NFPA 1991",
      description: "M\xE1xima resistencia qu\xEDmica contra \xE1cidos fuertes, cetonas y gases t\xF3xicos.",
      href: "/productos/guantes-para-bomberos/hazmat/butilo",
      buttonText: "Ver Guantes Butilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Nitrilo HAZMAT",
      badge: "NFPA 1991",
      description: "Resistencia superior contra aceites, hidrocarburos y derivados del petr\xF3leo.",
      href: "/productos/guantes-para-bomberos/hazmat/nitrilo",
      buttonText: "Ver Guantes Nitrilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje HAZMAT Nivel B",
      badge: "NFPA 1992",
      description: "Traje splash-resistant para l\xEDquidos qu\xEDmicos. Compatible con guantes de neopreno.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes HAZMAT",
      image: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif"
    },
    {
      title: "Botas Caucho HAZMAT",
      badge: "NFPA 1991",
      description: "Botas qu\xEDmico-resistentes certificadas para completar el EPP HAZMAT.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas HAZMAT",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Guantes Butilo HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/butilo" },
    { label: "Guantes L\xE1tex Industrial", href: "/productos/guantes-para-bomberos/hazmat/latex" },
    { label: "Guantes Viton\xAE Fluorocarbono", href: "/productos/guantes-para-bomberos/hazmat/viton" },
    { label: "Guantes Nitrilo Sint\xE9tico", href: "/productos/guantes-para-bomberos/hazmat/nitrilo" },
    { label: "Guantes Multicapa CBRN", href: "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Caucho Qu\xEDmico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Capucha CBRN", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "Comparativa Butilo vs Neopreno", href: "/productos/guantes-para-bomberos/hazmat", tag: "Gu\xEDa" },
    { label: "Trajes para Materiales Peligrosos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Tabla de Compatibilidad Qu\xEDmica", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Botas Qu\xEDmico-Resistentes", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "EPP HAZMAT Completo", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
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
    { label: "Material", valor: "Neopreno (CR)" },
    { label: "Espesor", valor: "15\u201320 mil" },
    { label: "Permeaci\xF3n", valor: "240\u2013480 min" },
    { label: "Clase qu\xEDmica", valor: "ASTM F739-4/5" },
    { label: "Flexibilidad", valor: "Hasta -40\xB0C" },
    { label: "Longitud", valor: "33 cm m\xEDn." },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica vapor-gas \u2014 EPP Nivel A/B" },
    { code: "ASTM F739", desc: "Resistencia a permeaci\xF3n multi-qu\xEDmica" },
    { code: "EN 388:2016", desc: "Protecci\xF3n mec\xE1nica \u2014 abrasi\xF3n/corte/punci\xF3n" },
    { code: "EPA Nivel B", desc: "Protecci\xF3n splash contra l\xEDquidos qu\xEDmicos" },
    { code: "ISO 374", desc: "Guantes protecci\xF3n contra qu\xEDmicos y microorganismos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Neopreno HAZMAT NFPA 1991 \u2014 Multi-Qu\xEDmico | BOMBERO.MX", "description": "Guantes de neopreno HAZMAT certificados NFPA 1991. Resistencia balanceada contra m\xFAltiples qu\xEDmicos. Flexible hasta -40\xB0C. Nivel A/B EPP. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes neopreno HAZMAT M\xE9xico",
    "guantes qu\xEDmicos neopreno NFPA 1991",
    "guantes protecci\xF3n qu\xEDmica neopreno",
    "guantes neopreno multi-qu\xEDmico",
    "guantes HAZMAT nivel B M\xE9xico",
    "guantes neopreno \xE1cidos aceites",
    "guantes qu\xEDmicos multi-uso M\xE9xico",
    "comprar guantes neopreno HAZMAT"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/neopreno", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Neopreno" }
  ], "heroBadge": "Guantes HAZMAT \xB7 NFPA 1991 \xB7 Neopreno", "heroTitle": "Guantes de Neopreno HAZMAT", "heroTitleHighlight": "Multi-Qu\xEDmico NFPA 1991", "heroSubtitle": "Protecci\xF3n balanceada contra m\xFAltiples familias qu\xEDmicas. Policloropreno (neopreno) con resistencia contra \xE1cidos, bases, aceites y solventes. Flexible hasta -40\xB0C. Compatible con trajes Nivel A y B. Certificado de laboratorio incluido.", "heroSeoBlocks": [
    {
      title: "Guantes de Neopreno HAZMAT NFPA 1991 \u2014 Protecci\xF3n Multi-Qu\xEDmica",
      text: "Los <strong>guantes de neopreno HAZMAT</strong> ofrecen resistencia balanceada contra m\xFAltiples familias qu\xEDmicas en un solo guante. Certificados <strong>NFPA 1991</strong> para operaciones Nivel A y B. En <strong>BOMBERO.MX</strong> distribuimos guantes de neopreno certificados para unidades HAZMAT, plantas qu\xEDmicas y brigadas industriales en los 32 estados de M\xE9xico."
    },
    {
      title: "Flexibilidad en Fr\xEDo Extremo \u2014 Operaciones hasta -40\xB0C",
      text: "El <strong>policloropreno (neopreno)</strong> mantiene flexibilidad en temperaturas extremadamente bajas, a diferencia de otros materiales que se vuelven r\xEDgidos. Ideal para operaciones HAZMAT en climas fr\xEDos. Documentaci\xF3n completa ASTM F739 para <strong>auditor\xEDas de seguridad industrial en M\xE9xico</strong>."
    }
  ], "ctaBarQuote": "Cotizar Guantes Neopreno HAZMAT", "productoCategoria": "Guantes HAZMAT Multi-Qu\xEDmico", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1991" },
    { modifier: "hazmat", text: "Nivel A/B" },
    { modifier: "astm", text: "Multi-Qu\xEDmico" }
  ], "productoMasVendido": false, "productoTitle": "Guantes de Neopreno HAZMAT", "productoTitleSub": "NFPA 1991 \u2014 Multi-Qu\xEDmico", "productoDesc": "Policloropreno con resistencia balanceada contra \xE1cidos, bases, aceites y solventes. Flexible hasta -40\xB0C. Compatible con trajes NFPA 1991 Nivel A/B. Certificado de laboratorio incluido.", "productoFeatures": [
    "Neopreno sint\xE9tico certificado NFPA 1991",
    "Resistencia multi-qu\xEDmica balanceada",
    "Flexible hasta -40\xB0C sin rigidez",
    "Compatible traje HAZMAT Nivel A/B",
    "Forro jersey de algod\xF3n absorbente",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Derrames multi-qu\xEDmicos",
    "Plantas industriales",
    "Descontaminaci\xF3n HAZMAT",
    "Operaciones en fr\xEDo",
    "Qu\xEDmica desconocida"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes de neopreno HAZMAT NFPA 1991" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT con guantes neopreno" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n qu\xEDmica HAZMAT" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Unidad HAZMAT respondiendo a derrame" },
    { src: "/images/directorio/traje-hazmat-nivel-a-01.avif", alt: "EPP HAZMAT completo con guantes" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Protecci\xF3n qu\xEDmica certificada" }
  ], "capasEyebrow": "Construcci\xF3n del Guante", "capasTitle": "Sistema de 3 Capas de Protecci\xF3n", "capasDesc": "Neopreno exterior para barrera qu\xEDmica, tejido de nylon para resistencia mec\xE1nica y jersey de algod\xF3n para confort. Dise\xF1o optimizado para operaciones prolongadas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Resistencia multi-qu\xEDmica comprobada seg\xFAn ASTM F739 y NFPA 1991.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Neopreno?", "aplicacionesContent": "<p>Los guantes de neopreno HAZMAT son la opci\xF3n ideal cuando se desconoce el tipo exacto de qu\xEDmico.</p><p>Resistencia balanceada contra m\xFAltiples familias: \xE1cidos, bases, aceites, solventes. Su flexibilidad a bajas temperaturas los hace \xFAnicos para operaciones en climas fr\xEDos o ambientes refrigerados.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1991 \u2014 Protecci\xF3n Multi-Qu\xEDmica", "certsDesc": "La norma <strong>NFPA 1991</strong> establece requisitos para guantes que protegen contra vapores y l\xEDquidos qu\xEDmicos peligrosos. El neopreno ofrece protecci\xF3n balanceada certificada contra m\xFAltiples sustancias seg\xFAn ASTM F739.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes de Neopreno HAZMAT", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre resistencia multi-qu\xEDmica, flexibilidad en fr\xEDo y compatibilidad de guantes de neopreno.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1991.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo HAZMAT", "relacionadosDesc": "Los guantes de neopreno trabajan como parte de un sistema integrado. Todos los equipos est\xE1n certificados NFPA para operaciones con materiales peligrosos.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/neopreno/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/neopreno/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/neopreno";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
