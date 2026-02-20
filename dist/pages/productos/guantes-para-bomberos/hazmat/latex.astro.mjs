import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 L\xE1tex Natural Reforzado",
      descripcion: "Primera barrera qu\xEDmica. L\xE1tex natural de alta densidad (goma natural vulcanizada) con resistencia contra \xE1cidos, \xE1lcalis y soluciones acuosas. Elasticidad superior que garantiza ajuste perfecto. Espesor m\xEDnimo de 28 mil (0.71 mm) \u2014 el m\xE1s grueso del mercado HAZMAT.",
      specs: [
        { label: "Material", valor: "L\xE1tex natural vulcanizado" },
        { label: "Espesor", valor: "28\u201335 mil (0.71\u20130.89 mm)" },
        { label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 3-4" },
        { label: "Elasticidad", valor: "Superior \u2014 ajuste ergon\xF3mico" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Textura Antiderrapante \u2014 Patr\xF3n en Relieve",
      descripcion: "Segunda caracter\xEDstica: superficie con patr\xF3n en relieve (diamond grip) que garantiza agarre seguro en condiciones h\xFAmedas o con l\xEDquidos qu\xEDmicos. Permite la manipulaci\xF3n precisa de envases, herramientas y equipos en zonas contaminadas.",
      specs: [
        { label: "Patr\xF3n", valor: "Diamond grip texturizado" },
        { label: "Funci\xF3n", valor: "Agarre h\xFAmedo/seco superior" },
        { label: "Aplicaci\xF3n", valor: "Palma, dedos y dorso completo" },
        { label: "Beneficio", valor: "Reduce fatiga en operaciones largas" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro Interior \u2014 Flocking de Algod\xF3n",
      descripcion: "Tercera capa: recubrimiento interior flocking (microfibras de algod\xF3n adheridas) que facilita la colocaci\xF3n y remoci\xF3n del guante. Absorbe la transpiraci\xF3n de las manos durante operaciones prolongadas. Sin polvo (powder-free) para evitar contaminaci\xF3n.",
      specs: [
        { label: "Material", valor: "Flocking de algod\xF3n microfibra" },
        { label: "Funci\xF3n", valor: "F\xE1cil colocaci\xF3n y confort" },
        { label: "Tecnolog\xEDa", valor: "Powder-free \u2014 sin talco" },
        { label: "Peso", valor: "< 80 g por guante" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Material principal", valor: "L\xE1tex natural vulcanizado" },
    { categoria: "Material", label: "Espesor total", valor: "28\u201335 mil (0.71\u20130.89 mm)" },
    { categoria: "Material", label: "Textura exterior", valor: "Diamond grip antiderrapante" },
    { categoria: "Material", label: "Forro interior", valor: "Flocking de algod\xF3n \u2014 powder-free" },
    { categoria: "Material", label: "Color exterior", valor: "Amarillo o naranja alta visibilidad" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 3-4 (120\u2013240 min)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1cidos y bases acuosas", valor: "Excelente \u2014 soluciones diluidas/moderadas" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1lcalis y detergentes", valor: "Excelente \u2014 descontaminaci\xF3n HAZMAT" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Alcoholes", valor: "Buena \u2014 metanol, etanol, isopropanol" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Soluciones acuosas", valor: "Excelente \u2014 mayor resistencia" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Aceites y solventes", valor: "Limitada \u2014 no usar con hidrocarburos" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia al corte", valor: "EN 388:2016 nivel 1" },
    { categoria: "Resistencia", label: "Elasticidad", valor: "Superior \u2014 ajuste ergon\xF3mico" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n EPA", valor: "Nivel B \u2014 splash protection" },
    { categoria: "Certificaci\xF3n", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 XXL" },
    { categoria: "Certificaci\xF3n", label: "Longitud m\xEDnima", valor: "33 cm (13 pulgadas)" },
    { categoria: "Certificaci\xF3n", label: "Compatibilidad traje", valor: "NFPA 1991 Level B / C" }
  ];
  const catClass = {
    "Material": "construccion",
    "Protecci\xF3n Qu\xEDmica": "proteccion",
    "Resistencia": "visibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Descontaminaci\xF3n HAZMAT",
      desc: "Zona tibia y fr\xEDa en operaciones de descontaminaci\xF3n. Resistencia excelente contra detergentes, jabones industriales y soluciones de lavado qu\xEDmico."
    },
    {
      titulo: "Manejo de \xC1cidos y Bases Diluidos",
      desc: "Laboratorios, plantas de tratamiento y operaciones industriales con \xE1cidos/bases en concentraciones moderadas. El espesor reforzado garantiza protecci\xF3n prolongada."
    },
    {
      titulo: "Limpieza y Saneamiento Industrial",
      desc: "Uso diario en plantas que manejan qu\xEDmicos de limpieza, sanitizantes y desinfectantes. Alta resistencia a \xE1lcalis y soluciones acuosas."
    },
    {
      titulo: "Respuesta a Derrames Acuosos",
      desc: "Incidentes con qu\xEDmicos base-agua. La elasticidad del l\xE1tex permite m\xE1xima destreza manual durante operaciones de contenci\xF3n."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la ventaja principal de los guantes de l\xE1tex sobre otros materiales HAZMAT?",
      a: "El l\xE1tex ofrece la mejor combinaci\xF3n de elasticidad, ajuste ergon\xF3mico y resistencia contra \xE1cidos/bases acuosos. Su espesor reforzado (28-35 mil) proporciona protecci\xF3n mec\xE1nica superior. Adem\xE1s, el costo es menor comparado con butilo o Viton\xAE, ideal para operaciones frecuentes."
    },
    {
      q: "\xBFHay riesgo de alergia al l\xE1tex en operaciones HAZMAT?",
      a: "S\xED. Aproximadamente 1-6% de la poblaci\xF3n tiene alergia al l\xE1tex natural. Para personal sensible, recomendamos guantes de nitrilo o neopreno. Siempre realizar prueba de sensibilidad antes de uso operativo. La versi\xF3n powder-free reduce el riesgo de dermatitis por contacto."
    },
    {
      q: "\xBFContra qu\xE9 qu\xEDmicos NO debo usar guantes de l\xE1tex?",
      a: "El l\xE1tex tiene resistencia limitada contra: aceites, hidrocarburos (gasolina, diesel), solventes org\xE1nicos (benceno, tolueno, acetona) y oxidantes fuertes. Para estos qu\xEDmicos, usar guantes de nitrilo, Viton\xAE o butilo. Consultar tabla de compatibilidad qu\xEDmica antes de cada operaci\xF3n."
    },
    {
      q: "\xBFCu\xE1nto tiempo puedo usar los guantes de l\xE1tex en una operaci\xF3n HAZMAT?",
      a: "Depende del qu\xEDmico y su concentraci\xF3n. Para \xE1cidos/bases diluidos: hasta 4 horas con monitoreo continuo. Para descontaminaci\xF3n: cambio cada 2 horas o al primer signo de degradaci\xF3n (pegajosidad, cambio de color, rigidez). En duda, reemplazar inmediatamente."
    },
    {
      q: "\xBFC\xF3mo almaceno correctamente los guantes de l\xE1tex?",
      a: "Lugar fresco (< 25\xB0C), oscuro, alejado de luz solar directa y ozono (motores el\xE9ctricos). El l\xE1tex se degrada con UV y ozono. Rotaci\xF3n de inventario: usar los m\xE1s antiguos primero. Inspecci\xF3n visual cada 6 meses. Vida \xFAtil almacenado: 3\u20135 a\xF1os."
    },
    {
      q: "\xBFLos guantes de l\xE1tex incluyen certificaci\xF3n NFPA 1991?",
      a: "S\xED. Cada par incluye certificado de laboratorio NFPA 1991 y ficha t\xE9cnica con tabla de compatibilidad qu\xEDmica ASTM F739. Documentaci\xF3n completa para auditor\xEDas de seguridad industrial y licitaciones en los 32 estados de M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Nitrilo HAZMAT",
      badge: "NFPA 1991",
      description: "Alternativa sin l\xE1tex con resistencia superior contra aceites e hidrocarburos.",
      href: "/productos/guantes-para-bomberos/hazmat/nitrilo",
      buttonText: "Ver Guantes Nitrilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Neopreno Multi-Qu\xEDmico",
      badge: "NFPA 1991",
      description: "Resistencia balanceada para operaciones con m\xFAltiples qu\xEDmicos desconocidos.",
      href: "/productos/guantes-para-bomberos/hazmat/neopreno",
      buttonText: "Ver Guantes Neopreno",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje HAZMAT Nivel C",
      badge: "NFPA 1992",
      description: "Traje splash para l\xEDquidos qu\xEDmicos. Compatible con guantes de l\xE1tex reforzado.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes HAZMAT",
      image: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif"
    },
    {
      title: "Botas PVC Descontaminaci\xF3n",
      badge: "HAZMAT",
      description: "Calzado qu\xEDmico-resistente para completar el EPP de descontaminaci\xF3n.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas HAZMAT",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Guantes Butilo HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/butilo" },
    { label: "Guantes Neopreno HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/neopreno" },
    { label: "Guantes Viton\xAE Fluorocarbono", href: "/productos/guantes-para-bomberos/hazmat/viton" },
    { label: "Guantes Nitrilo Sint\xE9tico", href: "/productos/guantes-para-bomberos/hazmat/nitrilo" },
    { label: "Guantes Multicapa CBRN", href: "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje HAZMAT Nivel C", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas PVC Descontaminaci\xF3n", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Gafas Goggle Protecci\xF3n", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "L\xE1tex vs Nitrilo \u2014 Comparativa", href: "/productos/guantes-para-bomberos/hazmat", tag: "Gu\xEDa" },
    { label: "Tabla Compatibilidad Qu\xEDmica", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Prevenci\xF3n Alergia al L\xE1tex", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes para Materiales Peligrosos", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "EPP Descontaminaci\xF3n HAZMAT", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
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
    { label: "Material", valor: "L\xE1tex natural" },
    { label: "Espesor", valor: "28\u201335 mil" },
    { label: "Permeaci\xF3n", valor: "120\u2013240 min" },
    { label: "Clase qu\xEDmica", valor: "ASTM F739-3/4" },
    { label: "Nivel EPA", valor: "Nivel B/C" },
    { label: "Textura", valor: "Diamond grip" },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica splash \u2014 EPP Nivel B/C" },
    { code: "ASTM F739", desc: "Resistencia a permeaci\xF3n \xE1cidos/bases acuosos" },
    { code: "EN 388:2016", desc: "Protecci\xF3n mec\xE1nica \u2014 abrasi\xF3n nivel 4" },
    { code: "EPA Nivel B", desc: "Protecci\xF3n splash contra l\xEDquidos qu\xEDmicos" },
    { code: "Powder-Free", desc: "Sin talco \u2014 reduce riesgo de dermatitis" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes L\xE1tex HAZMAT NFPA 1991 \u2014 Industrial Reforzado | BOMBERO.MX", "description": "Guantes de l\xE1tex industrial HAZMAT certificados NFPA 1991. Espesor reforzado 28-35 mil. Resistencia contra \xE1cidos, bases, detergentes. Nivel B/C EPP. Env\xEDo a toda M\xE9xico.", "keywords": [
    "guantes l\xE1tex HAZMAT M\xE9xico",
    "guantes qu\xEDmicos l\xE1tex NFPA 1991",
    "guantes protecci\xF3n qu\xEDmica l\xE1tex",
    "guantes l\xE1tex industrial pesado",
    "guantes HAZMAT descontaminaci\xF3n",
    "guantes l\xE1tex \xE1cidos bases",
    "guantes qu\xEDmicos reforzados M\xE9xico",
    "comprar guantes l\xE1tex HAZMAT"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/latex", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes L\xE1tex Industrial" }
  ], "heroBadge": "Guantes HAZMAT \xB7 NFPA 1991 \xB7 L\xE1tex Industrial", "heroTitle": "Guantes de L\xE1tex Industrial HAZMAT", "heroTitleHighlight": "Espesor Reforzado 28-35 mil", "heroSubtitle": "Protecci\xF3n qu\xEDmica para descontaminaci\xF3n y manejo de \xE1cidos/bases. L\xE1tex natural vulcanizado de alta densidad con textura diamond grip antiderrapante. Espesor reforzado 28-35 mil. Compatible con trajes Nivel B/C. Certificado de laboratorio incluido.", "heroSeoBlocks": [
    {
      title: "Guantes de L\xE1tex HAZMAT NFPA 1991 \u2014 Espesor Industrial Reforzado",
      text: "Los <strong>guantes de l\xE1tex industrial HAZMAT</strong> ofrecen el espesor m\xE1s grueso del mercado (28-35 mil) para m\xE1xima protecci\xF3n mec\xE1nica y qu\xEDmica. Certificados <strong>NFPA 1991</strong> para descontaminaci\xF3n y manejo de \xE1cidos/bases. En <strong>BOMBERO.MX</strong> distribuimos guantes de l\xE1tex reforzado para operaciones HAZMAT, plantas qu\xEDmicas y descontaminaci\xF3n industrial en M\xE9xico."
    },
    {
      title: "Textura Diamond Grip \u2014 Agarre Seguro en Condiciones H\xFAmedas",
      text: "El patr\xF3n texturizado <strong>diamond grip</strong> garantiza agarre superior con l\xEDquidos qu\xEDmicos, agua y detergentes. Ideal para <strong>zona de descontaminaci\xF3n HAZMAT</strong> donde el manejo seguro de herramientas y personal es cr\xEDtico. Documentaci\xF3n ASTM F739 incluida para auditor\xEDas en M\xE9xico."
    }
  ], "ctaBarQuote": "Cotizar Guantes L\xE1tex HAZMAT", "productoCategoria": "Guantes HAZMAT L\xE1tex Industrial", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1991" },
    { modifier: "hazmat", text: "Nivel B/C" },
    { modifier: "astm", text: "28-35 mil" }
  ], "productoMasVendido": false, "productoTitle": "Guantes de L\xE1tex HAZMAT", "productoTitleSub": "Industrial Reforzado", "productoDesc": "L\xE1tex natural vulcanizado con espesor reforzado 28-35 mil. Textura diamond grip antiderrapante. Resistencia contra \xE1cidos, bases y detergentes. Compatible con trajes NFPA 1991 Nivel B/C. Certificado incluido.", "productoFeatures": [
    "L\xE1tex natural reforzado 28-35 mil",
    "Textura diamond grip antiderrapante",
    "Resistencia \xE1cidos/bases acuosos",
    "Compatible traje HAZMAT Nivel B/C",
    "Forro flocking powder-free",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Descontaminaci\xF3n HAZMAT",
    "\xC1cidos/bases diluidos",
    "Limpieza industrial",
    "Derrames acuosos",
    "Plantas qu\xEDmicas"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes de l\xE1tex industrial HAZMAT" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n con guantes l\xE1tex" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT descontaminaci\xF3n" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Respuesta HAZMAT con EPP l\xE1tex" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "EPP qu\xEDmico completo certificado" },
    { src: "/images/directorio/extintor-polvo-quimico-01.avif", alt: "Manejo seguro materiales qu\xEDmicos" }
  ], "capasEyebrow": "Construcci\xF3n del Guante", "capasTitle": "L\xE1tex Reforzado con Textura Diamond Grip", "capasDesc": "Espesor industrial 28-35 mil con patr\xF3n antiderrapante. Dise\xF1o optimizado para descontaminaci\xF3n HAZMAT y manejo de qu\xEDmicos acuosos.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Resistencia qu\xEDmica contra \xE1cidos, bases y soluciones acuosas seg\xFAn ASTM F739 y NFPA 1991.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de L\xE1tex Industrial?", "aplicacionesContent": "<p>Los guantes de l\xE1tex HAZMAT son la opci\xF3n ideal para descontaminaci\xF3n y manejo de \xE1cidos/bases en soluci\xF3n acuosa.</p><p>Su espesor reforzado (28-35 mil) ofrece protecci\xF3n mec\xE1nica superior contra abrasi\xF3n y desgarro. La textura diamond grip garantiza agarre seguro incluso con l\xEDquidos qu\xEDmicos resbalosos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1991 \u2014 Protecci\xF3n Splash Qu\xEDmica", "certsDesc": "La norma <strong>NFPA 1991</strong> establece requisitos para guantes que protegen contra l\xEDquidos qu\xEDmicos (splash protection). El l\xE1tex reforzado ofrece resistencia certificada contra \xE1cidos, bases y detergentes seg\xFAn ASTM F739.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes de L\xE1tex HAZMAT", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre resistencia qu\xEDmica, alergia al l\xE1tex, compatibilidad y almacenamiento de guantes industriales.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1991.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo HAZMAT", "relacionadosDesc": "Los guantes de l\xE1tex trabajan como parte de un sistema integrado de descontaminaci\xF3n. Todos los equipos est\xE1n certificados NFPA para operaciones qu\xEDmicas.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/latex/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/latex/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/latex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
