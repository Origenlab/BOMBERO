import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_CdTaHiqJ.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/traje-bombero-estructural-nfpa-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Nomex\xAE IIIA \u2014 El Tejido de Referencia Mundial",
      descripcion: "Mezcla de 93% Nomex\xAE, 5% Kevlar\xAE y 2% fibra antiest\xE1tica P-140. La resistencia es inherente: parte de la estructura molecular del hilo, no un tratamiento superficial. No arde, no se derrite, no encoge bajo exposici\xF3n directa a la llama. Disponible en 6.0 y 7.5 oz/yd\xB2.",
      specs: [
        { label: "Composici\xF3n", valor: "93% Nomex\xAE / 5% Kevlar\xAE / 2% P-140" },
        { label: "Peso", valor: "6.0 \u2013 7.5 oz/yd\xB2" },
        { label: "Norma llama", valor: "ASTM D6413 \u2014 Clase 1" },
        { label: "Resistencia", valor: "Inherente \u2014 permanente" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Nomex\xAE Nano \u2014 Ultraligero de Alta Performance",
      descripcion: "Evoluci\xF3n tecnol\xF3gica con estructura de microfibra tridimensional nano-tejida. Hasta 30% m\xE1s ligero que el Nomex\xAE IIIA est\xE1ndar manteniendo exactamente el mismo nivel de protecci\xF3n certificada NFPA 1971. Menor fatiga operativa en misiones prolongadas y mayor transpiraci\xF3n.",
      specs: [
        { label: "Peso", valor: "4.5 oz/yd\xB2 (30% m\xE1s ligero)" },
        { label: "Estructura", valor: "Microfibra 3D nano-tejida" },
        { label: "Protecci\xF3n", valor: "Id\xE9ntica a Nomex\xAE IIIA" },
        { label: "Transpiraci\xF3n", valor: "Superior al tejido est\xE1ndar" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Construcci\xF3n y Costura Certificada NFPA 1971",
      descripcion: "El tejido solo cumple su funci\xF3n si el ensamble es igualmente certificado. Las costuras se realizan con hilo Nomex\xAE para garantizar que la uni\xF3n no sea el punto d\xE9bil. Paneles preformados en codos y rodillas para movilidad sin restricci\xF3n bajo presi\xF3n t\xE9rmica extrema.",
      specs: [
        { label: "Hilo de costura", valor: "Nomex\xAE certificado NFPA 1971" },
        { label: "Paneles preform.", valor: "Codos y rodillas" },
        { label: "Costuras cr\xEDticas", valor: "Triple pespunte reforzado" },
        { label: "Cierre principal", valor: "Velcro\xAE de cierre r\xE1pido" }
      ],
      color: "fire"
    }
  ];
  const catClass = {
    "Material": "construccion",
    "Protecci\xF3n": "proteccion",
    "Construcci\xF3n": "construccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const especificaciones = [
    { categoria: "Material", label: "Tejido principal", valor: "Nomex\xAE IIIA o Nomex\xAE Nano" },
    { categoria: "Material", label: "Composici\xF3n Nomex\xAE IIIA", valor: "93% Nomex\xAE + 5% Kevlar\xAE + 2% P-140" },
    { categoria: "Material", label: "Peso est\xE1ndar (IIIA)", valor: "6.0 \u2013 7.5 oz/yd\xB2" },
    { categoria: "Material", label: "Peso ultraligero (Nano)", valor: "4.5 oz/yd\xB2" },
    { categoria: "Material", label: "Tipo de resistencia", valor: "Inherente \u2014 estructura molecular" },
    { categoria: "Protecci\xF3n", label: "Norma de llama", valor: "ASTM D6413 \u2014 Clase 1" },
    { categoria: "Protecci\xF3n", label: "Prueba llama vertical", valor: "NFPA 1971 Method \u2014 aprobado" },
    { categoria: "Protecci\xF3n", label: "Afterflame", valor: "0 segundos \u2014 se extingue solo" },
    { categoria: "Protecci\xF3n", label: "Char length", valor: "\u2264 4 pulgadas (10.2 cm)" },
    { categoria: "Protecci\xF3n", label: "Melt / Drip", valor: "No \u2014 tejido no se derrite" },
    { categoria: "Construcci\xF3n", label: "Hilo de costura", valor: "Nomex\xAE certificado" },
    { categoria: "Construcci\xF3n", label: "Tipo de costura", valor: "Triple pespunte reforzado" },
    { categoria: "Construcci\xF3n", label: "Paneles preformados", valor: "Codos y rodillas" },
    { categoria: "Construcci\xF3n", label: "Cierre principal", valor: "Velcro\xAE de cierre r\xE1pido" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL \xB7 3XL \xB7 4XL" },
    { categoria: "Ergonom\xEDa", label: "Colores disponibles", valor: "Arena \xB7 Azul marino \xB7 Negro \xB7 Personalizado" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Prueba de material", valor: "ASTM D6413 certificada" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const aplicaciones = [
    {
      titulo: "Incendio Estructural",
      desc: "Primera l\xEDnea de defensa en edificios residenciales, comerciales e industriales. El Nomex\xAE no arde, no se derrite ni encoge bajo exposici\xF3n directa a llama. La protecci\xF3n inherente no depende del mantenimiento."
    },
    {
      titulo: "Rescate Urbano",
      desc: "Trabajo en estructuras colapsadas o en llamas donde el contacto con superficies calientes y llama latente es constante. El tejido mantiene integridad estructural y movilidad durante toda la operaci\xF3n."
    },
    {
      titulo: "Brigadas Industriales",
      desc: "Protecci\xF3n en plantas industriales, refiner\xEDas y petroqu\xEDmicas con riesgo de flash-over. La resistencia inherente garantiza protecci\xF3n sin degradaci\xF3n por lavados industriales repetidos."
    },
    {
      titulo: "Protecci\xF3n Civil",
      desc: "Operaciones de alto riesgo coordinadas en los 32 estados. Compatible con el EPP est\xE1ndar NFPA 1971. Certificado de laboratorio incluido para licitaciones gubernamentales."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre Nomex\xAE IIIA y Nomex\xAE Nano?",
      a: "Nomex\xAE IIIA es el tejido estructural de referencia (6.0\u20137.5 oz/yd\xB2) con 93% Nomex\xAE, 5% Kevlar\xAE y 2% P-140. Nomex\xAE Nano es una evoluci\xF3n de microfibra tridimensional que pesa ~4.5 oz/yd\xB2 (hasta 30% menos) manteniendo exactamente el mismo nivel de protecci\xF3n certificada NFPA 1971. La elecci\xF3n depende de la operaci\xF3n: Nano para misiones prolongadas donde la fatiga es cr\xEDtica, IIIA para exposiciones de mayor impacto f\xEDsico."
    },
    {
      q: "\xBFLa resistencia del Nomex\xAE se pierde con el lavado industrial?",
      a: "No. La protecci\xF3n del Nomex\xAE es inherente: forma parte de la estructura qu\xEDmica del pol\xEDmero, no es un tratamiento aplicado a la superficie del tejido. A diferencia de los tejidos FR tratados, el Nomex\xAE no pierde su resistencia a la llama con lavados industriales repetidos. Esta es la raz\xF3n por la que NFPA 1971 exige materiales inherentes para la capa exterior."
    },
    {
      q: "\xBFQu\xE9 eval\xFAa exactamente la prueba ASTM D6413?",
      a: "ASTM D6413 es la prueba de resistencia a la llama vertical. Mide tres par\xE1metros: afterflame (el tejido debe extinguirse en 0 segundos tras retirar la llama), char length (longitud de carbonizaci\xF3n \u2264 4 pulgadas) y melt/drip (el material no debe derretirse ni gotear sobre la piel del bombero). El Nomex\xAE supera los tres criterios gracias a su resistencia inherente."
    },
    {
      q: "\xBFLa capa exterior Nomex\xAE protege contra el calor radiante?",
      a: "S\xED, pero solo parcialmente. La capa exterior reduce el calor radiante y resiste la llama directa. La protecci\xF3n completa contra el calor intenso (TPP \u2265 35 cal/cm\xB2) la proporciona el sistema de 3 capas completo: capa exterior Nomex\xAE + barrera de humedad Gore-Tex\xAE + liner t\xE9rmico Caldura\xAE. La capa exterior sola no cumple TPP NFPA 1971 sin las otras dos capas."
    },
    {
      q: "\xBFLa capa exterior Nomex\xAE es impermeable?",
      a: "No. La impermeabilidad es funci\xF3n exclusiva de la segunda capa: la barrera de humedad Gore-Tex\xAE PTFE. La capa exterior Nomex\xAE est\xE1 dise\xF1ada para resistencia a la llama y calor radiante. En el sistema integrado de 3 capas NFPA 1971, cada capa cumple una funci\xF3n espec\xEDfica e insustituible."
    },
    {
      q: "\xBFQu\xE9 colores est\xE1n disponibles para la capa exterior?",
      a: "Los colores est\xE1ndar de stock son arena (dorado), azul marino y negro. Tambi\xE9n se fabrican en colores personalizados para cuerpos de bomberos con identidad visual institucional \u2014 con pedido m\xEDnimo de producci\xF3n. Todos los colores disponibles cumplen la norma NFPA 1971 y ASTM D6413."
    }
  ];
  const relacionados = [
    {
      title: "Sistema 3 Capas NFPA 1971",
      badge: "NFPA 1971",
      description: "El traje estructural completo: capa exterior Nomex\xAE, barrera Gore-Tex\xAE y liner t\xE9rmico TPP \u2265 35 cal/cm\xB2. Certificado y con ficha t\xE9cnica incluida.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas",
      buttonText: "Trajes para Bombero",
      image: "/images/directorio/traje-bombero-estructural-nfpa-01.avif"
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
      title: "Capucha Nomex\xAE Estructural",
      badge: "NFPA 1971",
      description: "Capucha ign\xEDfuga Nomex\xAE para protecci\xF3n de cuello y cabeza. Complemento esencial del sistema estructural NFPA 1971.",
      href: "/productos/capuchas-para-bomberos",
      buttonText: "Capuchas para Bombero",
      image: "/images/directorio/capucha-bombero-nomex-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Sistema 3 Capas Completo", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas" },
    { label: "Barrera Gore-Tex\xAE PTFE", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/membrana-gore-tex" },
    { label: "Acolchado T\xE9rmico Caldura\xAE", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/acolchado-termico" },
    { label: "Alta Visibilidad SOLAS Cl.2", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/alta-visibilidad" },
    { label: "Dise\xF1o Ergon\xF3mico 3D", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/diseno-ergonomico" },
    { label: "Ver Todos los Trajes", href: "/productos/trajes-para-bomberos" }
  ];
  const epp = [
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas de Cuero Bombero", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos", tag: "Cabeza" },
    { label: "SCBA Equipo Respiratorio", href: "/productos", tag: "Resp." }
  ];
  const articulos = [
    { label: "Cat\xE1logo Trajes de Bombero NFPA", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Traje Estructural Sistema 3 Capas", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/sistema-3-capas", tag: "Producto" },
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
    { label: "Material", valor: "Nomex\xAE IIIA / Nano" },
    { label: "Composici\xF3n", valor: "93% Nomex\xAE + 5% Kevlar\xAE" },
    { label: "Peso", valor: "4.5 \u2013 7.5 oz/yd\xB2" },
    { label: "Prueba llama", valor: "ASTM D6413 Clase 1" },
    { label: "Afterflame", valor: "0 seg \u2014 se extingue solo" },
    { label: "Resistencia", valor: "Inherente \u2014 permanente" },
    { label: "Colores", valor: "Arena \xB7 Azul \xB7 Negro" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Capa exterior certificada \u2014 edici\xF3n vigente" },
    { code: "ASTM D6413", desc: "Resistencia a la llama vertical \u2014 Clase 1" },
    { code: "Afterflame 0s", desc: "Extinci\xF3n inmediata \u2014 sin llama residual" },
    { code: 'Char \u2264 4"', desc: "Carbonizaci\xF3n controlada \u2014 sin propagaci\xF3n" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Capa Exterior Nomex\xAE NFPA 1971 \u2014 Tejido Ign\xEDfugo | BOMBERO.MX", "description": "Capa exterior Nomex\xAE IIIA y Nomex\xAE Nano certificada NFPA 1971. Resistencia inherente a la llama ASTM D6413: no arde, no se derrite, no encoge. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "capa exterior Nomex NFPA 1971",
    "traje bombero Nomex IIIA M\xE9xico",
    "tejido Nomex IIIA bombero estructural",
    "Nomex Nano bombero M\xE9xico",
    "capa exterior bombero ASTM D6413",
    "traje bombero Nomex precio M\xE9xico",
    "tejido ign\xEDfugo Nomex bombero",
    "comprar capa exterior Nomex bombero M\xE9xico"
  ], "canonical": "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Trajes de Bombero", href: "/productos/trajes-para-bomberos" },
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971" },
    { label: "Capa Exterior Nomex\xAE" }
  ], "heroBadge": "Traje Estructural \xB7 NFPA 1971 \xB7 Capa Exterior Nomex\xAE", "heroTitle": "Capa Exterior Nomex\xAE", "heroTitleHighlight": "NFPA 1971", "heroSubtitle": "Primera barrera contra llama directa y calor radiante. Tejido Nomex\xAE IIIA o Nomex\xAE Nano con resistencia inherente certificada ASTM D6413: no arde, no se derrite, no encoge. Protecci\xF3n que no se lava ni deteriora.", "heroSeoBlocks": [
    {
      title: "Capa Exterior Nomex\xAE IIIA para Traje Estructural NFPA 1971 \u2014 Distribuidor Autorizado M\xE9xico",
      text: "La <strong>capa exterior Nomex\xAE IIIA</strong> es la primera l\xEDnea de defensa del traje estructural. Su resistencia inherente a la llama (parte de la estructura molecular del tejido) garantiza protecci\xF3n permanente que no se degrada con lavados industriales. En <strong>BOMBERO.MX</strong> distribuimos la capa exterior Nomex\xAE certificada para los 32 estados de M\xE9xico."
    },
    {
      title: "Nomex\xAE Nano \u2014 La Evoluci\xF3n Ultra Ligera del Bombero Estructural",
      text: "El <strong>Nomex\xAE Nano</strong> ofrece hasta 30% menos peso que el IIIA est\xE1ndar manteniendo exactamente la misma certificaci\xF3n NFPA 1971 y ASTM D6413. Microfibra tridimensional nano-tejida para mayor transpiraci\xF3n y menor fatiga operativa \u2014 sin comprometer la protecci\xF3n. Ideal para brigadas industriales con misiones de larga duraci\xF3n."
    }
  ], "ctaBarQuote": "Cotizar Capa Exterior Nomex\xAE NFPA 1971", "productoCategoria": "Capa Exterior \u2014 Traje Estructural NFPA 1971", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "astm", text: "ASTM D6413" },
    { modifier: "tpp", text: "Clase 1" }
  ], "productoTitle": "Capa Exterior Nomex\xAE", "productoTitleSub": "Nomex\xAE IIIA y Nomex\xAE Nano", "productoDesc": "Tejido ign\xEDfugo con resistencia inherente certificada NFPA 1971 y ASTM D6413. No arde, no se derrite, no encoge. Dos opciones: Nomex\xAE IIIA (6.0\u20137.5 oz/yd\xB2) para m\xE1xima durabilidad, y Nomex\xAE Nano (4.5 oz/yd\xB2) para operaciones prolongadas.", "productoFeatures": [
    "Resistencia inherente \u2014 no se pierde con lavados",
    "ASTM D6413 Clase 1 certificado",
    "Afterflame: 0 segundos \u2014 extinci\xF3n inmediata",
    "No se derrite ni gotea sobre la piel",
    "Nomex\xAE Nano: 30% m\xE1s ligero sin perder protecci\xF3n",
    "Certificado de laboratorio incluido"
  ], "productoAppTags": [
    "Incendio estructural",
    "Rescate urbano",
    "Brigadas industriales",
    "Protecci\xF3n Civil",
    "Flash-over / refiner\xEDas"
  ], "gallery": [
    { src: "/images/directorio/traje-bombero-estructural-nfpa-01.avif", alt: "Capa exterior Nomex\xAE NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero con traje Nomex en incendio estructural" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Tejido Nomex IIIA en acci\xF3n" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales con capa Nomex" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo bombero NFPA con Nomex" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con tejido Nomex certificado" }
  ], "capasEyebrow": "Variantes del Tejido", "capasTitle": "Nomex\xAE IIIA y Nomex\xAE Nano \u2014 Dos Tejidos, Una Protecci\xF3n", "capasDesc": "Misma certificaci\xF3n NFPA 1971 y ASTM D6413 en dos configuraciones. La elecci\xF3n entre IIIA y Nano depende de la duraci\xF3n y tipo de operaci\xF3n.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones del Tejido", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. El Nomex\xAE supera todos los requisitos de la norma NFPA 1971 para capa exterior.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa la Capa Exterior Nomex\xAE?", "aplicacionesContent": "<p>La capa exterior Nomex\xAE es la primera barrera del traje estructural \u2014 la que enfrenta directamente la llama, el calor radiante y los fragmentos incandescentes.</p><p>Su resistencia inherente garantiza protecci\xF3n en cada escenario operativo, sin degradaci\xF3n por lavados industriales y sin necesidad de tratamientos adicionales.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "ASTM D6413 y NFPA 1971 \u2014 El Est\xE1ndar del Tejido", "certsDesc": "La norma <strong>ASTM D6413</strong> (<em>Standard Test Method for Flame Resistance of Textiles</em>) es la prueba de referencia para resistencia vertical a la llama. El Nomex\xAE supera los tres criterios: afterflame 0 segundos, char length \u2264 4 pulgadas y sin melt/drip. Requerido por <strong>NFPA 1971</strong> para la capa exterior del traje estructural.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Capa Exterior Nomex\xAE NFPA 1971", "faqDescription": "Resolvemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el tejido Nomex\xAE, sus variantes, certificaciones y su papel dentro del sistema de 3 capas.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica del tejido Nomex\xAE y el certificado ASTM D6413.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa el Sistema de 3 Capas", "relacionadosDesc": "La capa exterior Nomex\xAE es solo la primera barrera. El sistema completo requiere las tres capas certificadas NFPA 1971.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex/index.astro";
const $$url = "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971/capa-exterior-nomex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
