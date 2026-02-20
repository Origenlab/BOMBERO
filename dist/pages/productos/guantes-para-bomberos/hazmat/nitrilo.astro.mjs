import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Caucho Nitrilo NBR",
      descripcion: "Primera barrera qu\xEDmica sin l\xE1tex. Caucho nitrilo (NBR - acrilonitrilo butadieno) ofrece resistencia superior contra aceites, grasas, hidrocarburos alif\xE1ticos y derivados del petr\xF3leo. Alternativa hipoalerg\xE9nica al l\xE1tex. Espesor m\xEDnimo de 15 mil (0.38 mm) certificado.",
      specs: [
        { label: "Material", valor: "Nitrilo NBR sint\xE9tico (sin l\xE1tex)" },
        { label: "Espesor", valor: "15\u201322 mil (0.38\u20130.56 mm)" },
        { label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 5-6" },
        { label: "Alternativa l\xE1tex", valor: "S\xED \u2014 hipoalerg\xE9nico certificado" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Textura Grip \u2014 Patr\xF3n Diamante 360\xB0",
      descripcion: "Segunda caracter\xEDstica: superficie texturizada completa (palma, dedos y dorso) con patr\xF3n diamante que garantiza agarre seguro con aceites, grasas y l\xEDquidos resbalosos. Permite la manipulaci\xF3n precisa de herramientas y envases qu\xEDmicos en condiciones adversas.",
      specs: [
        { label: "Patr\xF3n", valor: "Diamante texturizado 360\xB0" },
        { label: "Funci\xF3n", valor: "Agarre superior con aceites/grasas" },
        { label: "Cobertura", valor: "Total \u2014 palma, dedos y dorso" },
        { label: "Beneficio", valor: "Reduce fatiga en operaciones largas" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro Interior \u2014 Jersey de Algod\xF3n",
      descripcion: "Tercera capa: forro de jersey de algod\xF3n que absorbe la transpiraci\xF3n durante operaciones prolongadas con hidrocarburos. Facilita la colocaci\xF3n y remoci\xF3n del guante. Reduce la fatiga t\xE9rmica de las manos en jornadas extendidas.",
      specs: [
        { label: "Material", valor: "Jersey de algod\xF3n 100%" },
        { label: "Funci\xF3n", valor: "Absorci\xF3n de humedad y confort" },
        { label: "Transpirabilidad", valor: "Alta \u2014 reduce sudoraci\xF3n" },
        { label: "Peso", valor: "< 60 g por guante" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Material principal", valor: "Nitrilo NBR sint\xE9tico (sin l\xE1tex)" },
    { categoria: "Material", label: "Espesor total", valor: "15\u201322 mil (0.38\u20130.56 mm)" },
    { categoria: "Material", label: "Textura exterior", valor: "Patr\xF3n diamante 360\xB0 completo" },
    { categoria: "Material", label: "Forro interior", valor: "Jersey de algod\xF3n 100%" },
    { categoria: "Material", label: "Color exterior", valor: "Azul oscuro o verde" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 5-6 (> 360 min)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Aceites y grasas", valor: "Excelente \u2014 minerales, sint\xE9ticos, vegetales" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Hidrocarburos alif\xE1ticos", valor: "Excelente \u2014 hexano, heptano, queroseno" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Combustibles", valor: "Muy buena \u2014 gasolina, diesel (no arom\xE1ticos)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1cidos y bases moderadas", valor: "Buena \u2014 soluciones diluidas" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Cetonas y alcoholes", valor: "Limitada \u2014 no recomendado uso prolongado" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al corte", valor: "EN 388:2016 nivel 2" },
    { categoria: "Resistencia", label: "Resistencia a la punci\xF3n", valor: "EN 388:2016 nivel 3" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n EPA", valor: "Nivel A/B \u2014 hidrocarburos" },
    { categoria: "Certificaci\xF3n", label: "Hipoalerg\xE9nico", valor: "S\xED \u2014 alternativa sin l\xE1tex" },
    { categoria: "Certificaci\xF3n", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 XXL" },
    { categoria: "Certificaci\xF3n", label: "Longitud m\xEDnima", valor: "33 cm (13 pulgadas)" }
  ];
  const catClass = {
    "Material": "construccion",
    "Protecci\xF3n Qu\xEDmica": "proteccion",
    "Resistencia": "visibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Derrames de Aceites e Hidrocarburos",
      desc: "Respuesta a derrames de aceites minerales, sint\xE9ticos, combustibles no-arom\xE1ticos. El nitrilo ofrece la mejor relaci\xF3n costo-beneficio para hidrocarburos."
    },
    {
      titulo: "Mantenimiento Industrial",
      desc: "Brigadas industriales en plantas con manejo diario de aceites, grasas, lubricantes y combustibles. Alternativa sin l\xE1tex para personal con alergias."
    },
    {
      titulo: "Transferencia de Combustibles",
      desc: "Operaciones de carga/descarga de gasolina, diesel, keroseno. Resistencia a permeaci\xF3n > 360 minutos certificada contra hidrocarburos alif\xE1ticos."
    },
    {
      titulo: "Descontaminaci\xF3n de Equipos",
      desc: "Limpieza de equipos contaminados con aceites, grasas y derivados del petr\xF3leo. Textura diamante garantiza agarre seguro en superficies resbalosas."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia entre guantes de nitrilo y de l\xE1tex para HAZMAT?",
      a: "El nitrilo ofrece resistencia superior contra aceites, grasas e hidrocarburos \u2014 donde el l\xE1tex falla. Adem\xE1s, el nitrilo es hipoalerg\xE9nico (sin prote\xEDnas de l\xE1tex natural), ideal para personal con alergias. Para \xE1cidos/bases acuosos, el l\xE1tex es mejor. Para aceites/hidrocarburos, el nitrilo es obligatorio."
    },
    {
      q: "\xBFLos guantes de nitrilo protegen contra gasolina y diesel?",
      a: "S\xED, contra hidrocarburos alif\xE1ticos (gasolina sin arom\xE1ticos, diesel, keroseno). Para gasolina con alto contenido arom\xE1tico (benceno, tolueno), usar guantes de Viton\xAE. El nitrilo ofrece permeaci\xF3n > 360 minutos contra combustibles no-arom\xE1ticos seg\xFAn ASTM F739."
    },
    {
      q: "\xBFCu\xE1nto tiempo puedo usar guantes de nitrilo en contacto con aceites?",
      a: "Depende del tipo de aceite. Aceites minerales y grasas: hasta 6 horas con monitoreo. Hidrocarburos ligeros: 2-4 horas. Solventes agresivos: consultar tabla de compatibilidad. Siempre inspeccionar el guante durante la operaci\xF3n \u2014 cualquier signo de hinchaz\xF3n o degradaci\xF3n = reemplazo inmediato."
    },
    {
      q: "\xBFSon compatibles con trajes HAZMAT Nivel A y Nivel B?",
      a: "S\xED. Los guantes de nitrilo certificados NFPA 1991 son compatibles con trajes Nivel A (para hidrocarburos) y Nivel B (splash protection). Se integran mediante sistema de anillo de bloqueo. Verificar compatibilidad qu\xEDmica espec\xEDfica antes de cada operaci\xF3n."
    },
    {
      q: "\xBFC\xF3mo almaceno correctamente los guantes de nitrilo?",
      a: "Lugar fresco (< 25\xB0C), oscuro, alejado de luz solar directa y ozono. El nitrilo es m\xE1s estable que el l\xE1tex, pero se degrada con UV prolongada. Rotaci\xF3n de inventario: FIFO (primero en entrar, primero en salir). Vida \xFAtil almacenado: 4\u20136 a\xF1os sin uso."
    },
    {
      q: "\xBFIncluyen certificaci\xF3n NFPA 1991 y ficha t\xE9cnica?",
      a: "S\xED. Cada par incluye certificado de laboratorio NFPA 1991, ficha t\xE9cnica completa y tabla de compatibilidad qu\xEDmica ASTM F739 espec\xEDfica para nitrilo. Documentaci\xF3n necesaria para auditor\xEDas de seguridad industrial en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Viton\xAE HAZMAT",
      badge: "NFPA 1991",
      description: "Protecci\xF3n premium contra hidrocarburos arom\xE1ticos (benceno, tolueno, xileno).",
      href: "/productos/guantes-para-bomberos/hazmat/viton",
      buttonText: "Ver Guantes Viton\xAE",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Neopreno Multi-Qu\xEDmico",
      badge: "NFPA 1991",
      description: "Resistencia balanceada cuando el tipo de qu\xEDmico es desconocido.",
      href: "/productos/guantes-para-bomberos/hazmat/neopreno",
      buttonText: "Ver Guantes Neopreno",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje HAZMAT Nivel B",
      badge: "NFPA 1992",
      description: "Traje splash-resistant para l\xEDquidos qu\xEDmicos. Compatible con guantes nitrilo.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes HAZMAT",
      image: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif"
    },
    {
      title: "Botas Nitrilo Qu\xEDmico-Resistentes",
      badge: "HAZMAT",
      description: "Calzado nitrilo para completar el EPP contra aceites e hidrocarburos.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas Nitrilo",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Guantes Butilo HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/butilo" },
    { label: "Guantes Neopreno HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/neopreno" },
    { label: "Guantes L\xE1tex Industrial", href: "/productos/guantes-para-bomberos/hazmat/latex" },
    { label: "Guantes Viton\xAE Fluorocarbono", href: "/productos/guantes-para-bomberos/hazmat/viton" },
    { label: "Guantes Multicapa CBRN", href: "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje HAZMAT Nivel B", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Nitrilo Qu\xEDmico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Gafas Goggle Protecci\xF3n", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "Nitrilo vs L\xE1tex \u2014 Comparativa", href: "/productos/guantes-para-bomberos/hazmat", tag: "Gu\xEDa" },
    { label: "Tabla Compatibilidad Nitrilo", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Alternativas sin L\xE1tex", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes para Materiales Peligrosos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP HAZMAT Completo", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "Unidades HAZMAT CDMX", href: "/directorio/ciudad-de-mexico" },
    { label: "Protecci\xF3n Civil Jalisco", href: "/directorio/jalisco" },
    { label: "Bomberos Industriales Monterrey", href: "/directorio/nuevo-leon" },
    { label: "HAZMAT Zona Industrial Puebla", href: "/directorio/puebla" },
    { label: "Plantas Qu\xEDmicas Quer\xE9taro", href: "/directorio/queretaro" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1991" },
    { label: "Material", valor: "Nitrilo NBR" },
    { label: "Espesor", valor: "15\u201322 mil" },
    { label: "Permeaci\xF3n", valor: "> 360 min" },
    { label: "Clase qu\xEDmica", valor: "ASTM F739-5/6" },
    { label: "Hipoalerg\xE9nico", valor: "S\xED (sin l\xE1tex)" },
    { label: "Textura", valor: "Diamante 360\xB0" },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica hidrocarburos \u2014 EPP Nivel A/B" },
    { code: "ASTM F739", desc: "Resistencia permeaci\xF3n aceites/hidrocarburos" },
    { code: "EN 388:2016", desc: "Protecci\xF3n mec\xE1nica \u2014 abrasi\xF3n nivel 4" },
    { code: "EPA Nivel B", desc: "Protecci\xF3n splash contra aceites/qu\xEDmicos" },
    { code: "Hipoalerg\xE9nico", desc: "Sin l\xE1tex natural \u2014 previene alergias" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Nitrilo HAZMAT NFPA 1991 \u2014 Aceites/Hidrocarburos | BOMBERO.MX", "description": "Guantes de nitrilo HAZMAT certificados NFPA 1991. Resistencia superior contra aceites, grasas, hidrocarburos. Sin l\xE1tex hipoalerg\xE9nico. Nivel A/B EPP. Env\xEDo a toda M\xE9xico.", "keywords": [
    "guantes nitrilo HAZMAT M\xE9xico",
    "guantes qu\xEDmicos nitrilo NFPA 1991",
    "guantes protecci\xF3n qu\xEDmica nitrilo",
    "guantes nitrilo aceites hidrocarburos",
    "guantes HAZMAT sin l\xE1tex M\xE9xico",
    "guantes nitrilo combustibles",
    "guantes qu\xEDmicos hipoalerg\xE9nicos M\xE9xico",
    "comprar guantes nitrilo HAZMAT"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/nitrilo", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Nitrilo Sint\xE9tico" }
  ], "heroBadge": "Guantes HAZMAT \xB7 NFPA 1991 \xB7 Nitrilo Sin L\xE1tex", "heroTitle": "Guantes de Nitrilo HAZMAT", "heroTitleHighlight": "Aceites / Hidrocarburos", "heroSubtitle": "Protecci\xF3n qu\xEDmica sin l\xE1tex para aceites, grasas e hidrocarburos. Caucho nitrilo NBR con resistencia superior contra combustibles y derivados del petr\xF3leo. Hipoalerg\xE9nico certificado. Textura diamante 360\xB0. Compatible con trajes Nivel A/B. Certificado incluido.", "heroSeoBlocks": [
    {
      title: "Guantes Nitrilo HAZMAT NFPA 1991 \u2014 Protecci\xF3n contra Aceites e Hidrocarburos",
      text: "Los <strong>guantes de nitrilo HAZMAT</strong> ofrecen resistencia qu\xEDmica superior contra aceites, grasas e hidrocarburos alif\xE1ticos. Certificados <strong>NFPA 1991</strong> para operaciones Nivel A/B. Alternativa sin l\xE1tex hipoalerg\xE9nica. En <strong>BOMBERO.MX</strong> distribuimos guantes de nitrilo certificados para HAZMAT industrial en los 32 estados de M\xE9xico."
    },
    {
      title: "Hipoalerg\xE9nico Sin L\xE1tex \u2014 Alternativa Segura para Personal Sensible",
      text: "El <strong>caucho nitrilo sint\xE9tico</strong> no contiene prote\xEDnas de l\xE1tex natural, eliminando el riesgo de alergias. Ideal para brigadas industriales con personal sensible. Permeaci\xF3n > 360 minutos contra aceites certificada ASTM F739. Documentaci\xF3n completa para <strong>auditor\xEDas de seguridad industrial en M\xE9xico</strong>."
    }
  ], "ctaBarQuote": "Cotizar Guantes Nitrilo HAZMAT", "productoCategoria": "Guantes HAZMAT Nitrilo Sin L\xE1tex", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1991" },
    { modifier: "hazmat", text: "Nivel A/B" },
    { modifier: "astm", text: "Sin L\xE1tex" }
  ], "productoMasVendido": true, "productoTitle": "Guantes de Nitrilo HAZMAT", "productoTitleSub": "Hipoalerg\xE9nico NBR", "productoDesc": "Caucho nitrilo NBR sint\xE9tico sin l\xE1tex. Resistencia superior contra aceites, grasas e hidrocarburos. Textura diamante 360\xB0. Compatible con trajes NFPA 1991 Nivel A/B. Certificado incluido.", "productoFeatures": [
    "Nitrilo NBR sint\xE9tico sin l\xE1tex",
    "Resistencia qu\xEDmica aceites ASTM F739-5/6",
    "Permeaci\xF3n > 360 min hidrocarburos",
    "Textura diamante 360\xB0 antiderrapante",
    "Compatible traje HAZMAT Nivel A/B",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Derrames aceites",
    "Mantenimiento industrial",
    "Transferencia combustibles",
    "Descontaminaci\xF3n equipos",
    "Brigadas industriales"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes de nitrilo HAZMAT sin l\xE1tex" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT con guantes nitrilo" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Respuesta HAZMAT hidrocarburos" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n con nitrilo" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "EPP HAZMAT completo certificado" },
    { src: "/images/directorio/extintor-polvo-quimico-01.avif", alt: "Manejo seguro qu\xEDmicos industriales" }
  ], "capasEyebrow": "Construcci\xF3n del Guante", "capasTitle": "Nitrilo NBR con Textura Diamante 360\xB0", "capasDesc": "Caucho sint\xE9tico sin l\xE1tex con textura completa para m\xE1ximo agarre. Dise\xF1o optimizado para aceites, grasas e hidrocarburos.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Resistencia qu\xEDmica contra aceites e hidrocarburos seg\xFAn ASTM F739 y NFPA 1991.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Nitrilo?", "aplicacionesContent": "<p>Los guantes de nitrilo HAZMAT son la alternativa sin l\xE1tex ideal para aceites, grasas e hidrocarburos no-arom\xE1ticos.</p><p>Mejor relaci\xF3n costo-beneficio que Viton\xAE para combustibles alif\xE1ticos. La textura diamante 360\xB0 garantiza agarre seguro con aceites y superficies resbalosas. Hipoalerg\xE9nico certificado para personal con sensibilidad al l\xE1tex.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1991 \u2014 Protecci\xF3n Aceites/Hidrocarburos", "certsDesc": "La norma <strong>NFPA 1991</strong> establece requisitos para guantes que protegen contra vapores y l\xEDquidos qu\xEDmicos. El nitrilo ofrece resistencia qu\xEDmica certificada contra aceites, grasas e hidrocarburos alif\xE1ticos seg\xFAn ASTM F739.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes de Nitrilo HAZMAT", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre resistencia a aceites, hipoalerg\xE9nico sin l\xE1tex, compatibilidad y vida \xFAtil de guantes de nitrilo.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1991 con tabla de compatibilidad nitrilo.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo HAZMAT", "relacionadosDesc": "Los guantes de nitrilo trabajan como parte de un sistema integrado para operaciones con aceites e hidrocarburos. Todos los equipos est\xE1n certificados NFPA.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/nitrilo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/nitrilo/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/nitrilo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
