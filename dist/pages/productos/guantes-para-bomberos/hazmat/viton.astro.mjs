import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Fluoroelast\xF3mero Viton\xAE FKM",
      descripcion: "Primera barrera de alta especializaci\xF3n. Viton\xAE (fluoroelast\xF3mero FKM) ofrece la mejor resistencia del mercado contra hidrocarburos arom\xE1ticos (benceno, tolueno, xileno), solventes clorados y combustibles. Resistencia t\xE9rmica hasta 200\xB0C. Espesor m\xEDnimo de 12 mil (0.30 mm) certificado.",
      specs: [
        { label: "Material", valor: "Viton\xAE FKM (fluoroelast\xF3mero)" },
        { label: "Espesor", valor: "12\u201315 mil (0.30\u20130.38 mm)" },
        { label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 6 arom\xE1ticos" },
        { label: "Temp. m\xE1xima", valor: "Hasta 200\xB0C sin degradaci\xF3n" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Soporte Textil \u2014 Nylon de Alto M\xF3dulo",
      descripcion: "Segunda capa: tejido de nylon de alto m\xF3dulo que proporciona resistencia mec\xE1nica al conjunto. Evita rasgaduras durante el manejo de tambores, mangueras y equipos industriales. Permite la flexibilidad necesaria para operaciones de precisi\xF3n.",
      specs: [
        { label: "Material", valor: "Nylon de alto m\xF3dulo reforzado" },
        { label: "Funci\xF3n", valor: "Resistencia mec\xE1nica sin sacrificar flexibilidad" },
        { label: "Resistencia abrasi\xF3n", valor: "EN 388 nivel 3" },
        { label: "Peso", valor: "< 25 g por guante" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Forro Interior \u2014 Algod\xF3n Tricot",
      descripcion: "Tercera capa: forro de algod\xF3n tricot que absorbe la humedad corporal durante operaciones prolongadas con hidrocarburos. Facilita la colocaci\xF3n y remoci\xF3n r\xE1pida del guante. Reduce la fatiga en jornadas de trabajo extendidas.",
      specs: [
        { label: "Material", valor: "Algod\xF3n tricot 100%" },
        { label: "Funci\xF3n", valor: "Absorci\xF3n y confort t\xE9rmico" },
        { label: "Transpirabilidad", valor: "Alta \u2014 reduce sudoraci\xF3n" },
        { label: "Peso", valor: "< 20 g total" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Material principal", valor: "Viton\xAE FKM (fluoroelast\xF3mero)" },
    { categoria: "Material", label: "Espesor total", valor: "12\u201315 mil (0.30\u20130.38 mm)" },
    { categoria: "Material", label: "Capa de soporte", valor: "Nylon de alto m\xF3dulo" },
    { categoria: "Material", label: "Forro interior", valor: "Algod\xF3n tricot 100%" },
    { categoria: "Material", label: "Color exterior", valor: "Verde oscuro o negro" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Resistencia qu\xEDmica", valor: "ASTM F739 \u2014 Clase 6 (> 480 min arom\xE1ticos)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Hidrocarburos arom\xE1ticos", valor: "Excelente \u2014 benceno, tolueno, xileno" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Solventes clorados", valor: "Excelente \u2014 TCE, percloroetileno" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Combustibles y aceites", valor: "Excelente \u2014 gasolina, diesel, keroseno" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "\xC1cidos oxidantes", valor: "Muy buena \u2014 HNO\u2083, H\u2082SO\u2084 concentrado" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Cetonas y esteres", valor: "Limitada \u2014 no recomendado" },
    { categoria: "Resistencia", label: "Resistencia t\xE9rmica", valor: "Hasta 200\xB0C continuo" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 3" },
    { categoria: "Resistencia", label: "Resistencia al ozono/UV", valor: "Excelente \u2014 no se degrada" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n EPA", valor: "Nivel A \u2014 arom\xE1ticos/hidrocarburos" },
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
      titulo: "Derrames de Combustibles",
      desc: "Respuesta a derrames de gasolina, diesel, keroseno, jet fuel. Viton\xAE ofrece la mejor resistencia contra hidrocarburos del mercado HAZMAT."
    },
    {
      titulo: "Solventes Arom\xE1ticos Industriales",
      desc: "Manejo de benceno, tolueno, xileno en plantas qu\xEDmicas y petroqu\xEDmicas. Resistencia a permeaci\xF3n > 480 minutos certificada ASTM F739."
    },
    {
      titulo: "\xC1cidos Oxidantes Concentrados",
      desc: "Operaciones con \xE1cido n\xEDtrico, \xE1cido sulf\xFArico concentrado y per\xF3xidos. Resistencia qu\xEDmica y t\xE9rmica superior a otros elast\xF3meros."
    },
    {
      titulo: "Refinaci\xF3n y Petroqu\xEDmica",
      desc: "Mantenimiento de equipos, transferencia de productos y operaciones de proceso en refiner\xEDas. Resistencia a hidrocarburos y temperaturas elevadas."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1ndo debo elegir Viton\xAE sobre butilo o nitrilo?",
      a: "Viton\xAE es la opci\xF3n premium para hidrocarburos arom\xE1ticos (benceno, tolueno, xileno), solventes clorados y combustibles \u2014 qu\xEDmicos donde butilo y nitrilo fallan. Si el incidente involucra gasolina, diesel o solventes industriales, Viton\xAE es obligatorio. El costo es mayor, pero la protecci\xF3n es insustituible."
    },
    {
      q: "\xBFLos guantes de Viton\xAE resisten altas temperaturas?",
      a: "S\xED. Viton\xAE mantiene integridad estructural hasta 200\xB0C de forma continua, con picos de hasta 250\xB0C. Esto es cr\xEDtico en derrames de hidrocarburos calientes, escapes de vapor en refiner\xEDas y operaciones near-fire en plantas petroqu\xEDmicas."
    },
    {
      q: "\xBFContra qu\xE9 qu\xEDmicos NO debo usar guantes de Viton\xAE?",
      a: "Viton\xAE tiene resistencia limitada contra: cetonas (acetona, MEK), esteres, aminas y \xE1lcalis concentrados a altas temperaturas. Para estos qu\xEDmicos, usar guantes de butilo o neopreno. Siempre consultar la tabla de compatibilidad qu\xEDmica antes de la operaci\xF3n."
    },
    {
      q: "\xBFCu\xE1l es la vida \xFAtil de los guantes de Viton\xAE?",
      a: "Con almacenamiento adecuado (lugar fresco, oscuro), 5\u20137 a\xF1os sin uso \u2014 el fluoroelast\xF3mero es extremadamente estable. A diferencia del l\xE1tex, Viton\xAE no se degrada con ozono ni UV. En operaciones activas: inspecci\xF3n antes/despu\xE9s de cada uso y reemplazo al primer signo de da\xF1o."
    },
    {
      q: "\xBFPor qu\xE9 los guantes de Viton\xAE son m\xE1s costosos?",
      a: "El fluoroelast\xF3mero Viton\xAE es un material de alta tecnolog\xEDa con s\xEDntesis compleja. Ofrece resistencia qu\xEDmica \xFAnica contra arom\xE1ticos e hidrocarburos que otros materiales no pueden igualar. El costo inicial es mayor, pero la protecci\xF3n superior justifica la inversi\xF3n en operaciones cr\xEDticas."
    },
    {
      q: "\xBFIncluyen certificaci\xF3n NFPA 1991 y documentaci\xF3n t\xE9cnica?",
      a: "S\xED. Cada par incluye certificado de laboratorio NFPA 1991, ficha t\xE9cnica completa y tabla de compatibilidad qu\xEDmica espec\xEDfica para Viton\xAE. Documentaci\xF3n necesaria para auditor\xEDas de seguridad en refiner\xEDas y plantas petroqu\xEDmicas en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Nitrilo HAZMAT",
      badge: "NFPA 1991",
      description: "Alternativa econ\xF3mica para aceites no-arom\xE1ticos y grasas industriales.",
      href: "/productos/guantes-para-bomberos/hazmat/nitrilo",
      buttonText: "Ver Guantes Nitrilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Butilo HAZMAT",
      badge: "NFPA 1991",
      description: "M\xE1xima resistencia contra \xE1cidos, bases y cetonas para complementar Viton\xAE.",
      href: "/productos/guantes-para-bomberos/hazmat/butilo",
      buttonText: "Ver Guantes Butilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje HAZMAT Nivel A",
      badge: "NFPA 1991",
      description: "Traje encapsulado total gas-tight para operaciones con arom\xE1ticos.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes HAZMAT",
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif"
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
    { label: "Guantes Butilo HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/butilo" },
    { label: "Guantes Neopreno HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/neopreno" },
    { label: "Guantes L\xE1tex Industrial", href: "/productos/guantes-para-bomberos/hazmat/latex" },
    { label: "Guantes Nitrilo Sint\xE9tico", href: "/productos/guantes-para-bomberos/hazmat/nitrilo" },
    { label: "Guantes Multicapa CBRN", href: "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje HAZMAT Nivel A", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Viton\xAE Hidrocarburos", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Gafas Goggle Protecci\xF3n", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "Viton\xAE vs Nitrilo \u2014 Hidrocarburos", href: "/productos/guantes-para-bomberos/hazmat", tag: "Gu\xEDa" },
    { label: "Tabla Compatibilidad Viton\xAE", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Manejo Seguro de Arom\xE1ticos", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes para Refiner\xEDas", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Detectores PID para VOCs", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "HAZMAT Petroqu\xEDmica CDMX", href: "/directorio/ciudad-de-mexico" },
    { label: "Refiner\xEDas Salamanca Guanajuato", href: "/directorio/guanajuato" },
    { label: "Industrial Monterrey Nuevo Le\xF3n", href: "/directorio/nuevo-leon" },
    { label: "Zona Industrial Puebla", href: "/directorio/puebla" },
    { label: "Plantas Qu\xEDmicas Quer\xE9taro", href: "/directorio/queretaro" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1991" },
    { label: "Material", valor: "Viton\xAE FKM" },
    { label: "Espesor", valor: "12\u201315 mil" },
    { label: "Permeaci\xF3n", valor: "> 480 min arom\xE1ticos" },
    { label: "Clase qu\xEDmica", valor: "ASTM F739-6" },
    { label: "Temp. m\xE1x.", valor: "200\xB0C continuo" },
    { label: "Longitud", valor: "33 cm m\xEDn." },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica arom\xE1ticos \u2014 EPP Nivel A" },
    { code: "ASTM F739", desc: "Resistencia permeaci\xF3n hidrocarburos > 480 min" },
    { code: "EN 388:2016", desc: "Protecci\xF3n mec\xE1nica \u2014 abrasi\xF3n/corte/punci\xF3n" },
    { code: "EPA Nivel A", desc: "M\xE1ximo nivel para solventes arom\xE1ticos" },
    { code: "ISO 374", desc: "Guantes protecci\xF3n contra qu\xEDmicos org\xE1nicos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Viton\xAE HAZMAT NFPA 1991 \u2014 Arom\xE1ticos | BOMBERO.MX", "description": "Guantes Viton\xAE fluorocarbono HAZMAT certificados NFPA 1991. Resistencia superior contra arom\xE1ticos, hidrocarburos, combustibles. Hasta 200\xB0C. Nivel A EPP. Env\xEDo a toda M\xE9xico.", "keywords": [
    "guantes Viton HAZMAT M\xE9xico",
    "guantes fluorocarbono NFPA 1991",
    "guantes qu\xEDmicos Viton arom\xE1ticos",
    "guantes Viton hidrocarburos",
    "guantes HAZMAT benceno tolueno",
    "guantes Viton combustibles",
    "guantes qu\xEDmicos refiner\xEDas M\xE9xico",
    "comprar guantes Viton HAZMAT"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/viton", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Viton\xAE Fluorocarbono" }
  ], "heroBadge": "Guantes HAZMAT \xB7 NFPA 1991 \xB7 Viton\xAE Fluorocarbono", "heroTitle": "Guantes Viton\xAE HAZMAT", "heroTitleHighlight": "Arom\xE1ticos / Hidrocarburos", "heroSubtitle": "Protecci\xF3n qu\xEDmica de m\xE1ximo nivel para hidrocarburos arom\xE1ticos y solventes. Viton\xAE FKM (fluoroelast\xF3mero) con resistencia superior contra benceno, tolueno, xileno, gasolina, diesel. Resistencia t\xE9rmica hasta 200\xB0C. Compatible con trajes Nivel A. Certificado incluido.", "heroSeoBlocks": [
    {
      title: "Guantes Viton\xAE HAZMAT NFPA 1991 \u2014 M\xE1xima Protecci\xF3n contra Arom\xE1ticos",
      text: "Los <strong>guantes de Viton\xAE (fluoroelast\xF3mero FKM)</strong> ofrecen la resistencia qu\xEDmica m\xE1s alta contra hidrocarburos arom\xE1ticos, solventes clorados y combustibles. Certificados <strong>NFPA 1991</strong> para operaciones Nivel A en refiner\xEDas y plantas petroqu\xEDmicas. En <strong>BOMBERO.MX</strong> distribuimos guantes Viton\xAE certificados para HAZMAT industrial en los 32 estados de M\xE9xico."
    },
    {
      title: "Resistencia T\xE9rmica hasta 200\xB0C \u2014 Operaciones en Refiner\xEDas",
      text: "El <strong>fluoroelast\xF3mero Viton\xAE</strong> mantiene integridad estructural hasta 200\xB0C continuo, cr\xEDtico en derrames de hidrocarburos calientes y escapes de vapor. Permeaci\xF3n > 480 minutos contra arom\xE1ticos certificada ASTM F739. Documentaci\xF3n completa para <strong>auditor\xEDas de seguridad en plantas petroqu\xEDmicas en M\xE9xico</strong>."
    }
  ], "ctaBarQuote": "Cotizar Guantes Viton\xAE HAZMAT", "productoCategoria": "Guantes HAZMAT Viton\xAE Premium", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1991" },
    { modifier: "hazmat", text: "Nivel A" },
    { modifier: "astm", text: "200\xB0C" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Viton\xAE HAZMAT", "productoTitleSub": "Fluorocarbono Premium", "productoDesc": "Viton\xAE FKM con resistencia superior contra hidrocarburos arom\xE1ticos, solventes y combustibles. Permeaci\xF3n > 480 min. Resistencia t\xE9rmica hasta 200\xB0C. Compatible con trajes NFPA 1991 Nivel A. Certificado incluido.", "productoFeatures": [
    "Viton\xAE FKM fluoroelast\xF3mero certificado",
    "Resistencia qu\xEDmica arom\xE1ticos ASTM F739-6",
    "Permeaci\xF3n > 480 min hidrocarburos",
    "Resistencia t\xE9rmica hasta 200\xB0C",
    "Compatible traje HAZMAT Nivel A",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Derrames combustibles",
    "Solventes arom\xE1ticos",
    "\xC1cidos oxidantes",
    "Refiner\xEDas",
    "Petroqu\xEDmica"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes Viton\xAE fluorocarbono HAZMAT" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo HAZMAT con guantes Viton\xAE" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Respuesta HAZMAT hidrocarburos" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n qu\xEDmica industrial" },
    { src: "/images/directorio/traje-hazmat-nivel-a-01.avif", alt: "Traje Nivel A con guantes Viton\xAE" },
    { src: "/images/directorio/detector-multigas-hazmat-01.avif", alt: "Detecci\xF3n de VOCs y arom\xE1ticos" }
  ], "capasEyebrow": "Construcci\xF3n del Guante", "capasTitle": "Fluoroelast\xF3mero Viton\xAE FKM Premium", "capasDesc": "Material de alta tecnolog\xEDa con resistencia \xFAnica contra arom\xE1ticos e hidrocarburos. Dise\xF1o optimizado para refiner\xEDas y plantas petroqu\xEDmicas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Resistencia qu\xEDmica contra arom\xE1ticos certificada seg\xFAn ASTM F739 clase 6 y NFPA 1991.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes de Viton\xAE?", "aplicacionesContent": "<p>Los guantes de Viton\xAE HAZMAT son la opci\xF3n obligatoria para hidrocarburos arom\xE1ticos y solventes industriales.</p><p>Donde otros materiales fallan (butilo, nitrilo, neopreno), Viton\xAE ofrece resistencia a permeaci\xF3n > 480 minutos. Su resistencia t\xE9rmica hasta 200\xB0C los hace \xFAnicos para refiner\xEDas y plantas petroqu\xEDmicas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1991 \u2014 Protecci\xF3n Arom\xE1ticos Nivel A", "certsDesc": "La norma <strong>NFPA 1991</strong> establece requisitos para guantes que protegen contra vapores y l\xEDquidos qu\xEDmicos altamente peligrosos. Viton\xAE ofrece la resistencia qu\xEDmica premium certificada contra arom\xE1ticos e hidrocarburos seg\xFAn ASTM F739.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Viton\xAE HAZMAT", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre resistencia a arom\xE1ticos, temperatura, compatibilidad y vida \xFAtil de guantes Viton\xAE.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1991 con tabla de compatibilidad Viton\xAE.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo HAZMAT", "relacionadosDesc": "Los guantes de Viton\xAE trabajan como parte de un sistema integrado para operaciones con arom\xE1ticos. Todos los equipos est\xE1n certificados NFPA para refiner\xEDas.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/viton/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/viton/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/viton";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
