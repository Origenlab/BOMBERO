import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/botas-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Puntera Composite \u2014 40% M\xE1s Ligera",
      descripcion: "Puntera de material composite (fibra de vidrio + resinas) certificada ASTM F2413-18 con la misma protecci\xF3n que el acero pero 40% m\xE1s ligera. No conduce electricidad ni temperatura, ideal para operaciones prolongadas donde la fatiga del pie es factor cr\xEDtico.",
      specs: [
        { label: "Material", valor: "Composite (fibra vidrio + resinas)" },
        { label: "Peso vs acero", valor: "40% m\xE1s ligera" },
        { label: "Conductividad", valor: "No conduce electricidad" },
        { label: "Norma", valor: "ASTM F2413-18 I/75 C/75" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Cuero Grain Premium \u2014 2.4-2.6 mm",
      descripcion: "Cuero grain de primera calidad con espesor de 2.4-2.6 mm, tratado con acabado hidrof\xF3bico y retardante al fuego. El cuero es evaluado seg\xFAn NFPA 1971 secci\xF3n 8.7 para resistencia a llama, calor radiante y abrasi\xF3n. Certificado con trazabilidad de curtiembre.",
      specs: [
        { label: "Material", valor: "Cuero grain premium" },
        { label: "Espesor", valor: "2.4-2.6 mm" },
        { label: "Tratamiento", valor: "Hidrof\xF3bico + FR" },
        { label: "Certificaci\xF3n", valor: "NFPA 1971 \xA78.7" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Sin Transferencia T\xE9rmica \u2014 Confort Extremo",
      descripcion: "A diferencia del acero, la puntera composite no conduce fr\xEDo ni calor extremo al pie. En operaciones de invierno, el pie no se enfr\xEDa por contacto con la puntera. En calor, no hay transferencia t\xE9rmica adicional. Confort superior en cualquier clima.",
      specs: [
        { label: "Conducci\xF3n fr\xEDo", valor: "Ninguna" },
        { label: "Conducci\xF3n calor", valor: "Ninguna" },
        { label: "Confort", valor: "Superior al acero" },
        { label: "Detector metales", valor: "No activa alarmas" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Puntera", label: "Material puntera", valor: "Composite (fibra vidrio + resinas)" },
    { categoria: "Puntera", label: "Peso vs acero", valor: "40% m\xE1s ligera" },
    { categoria: "Puntera", label: "Impacto", valor: "75 lb-ft (101.7 J) ASTM F2413-18" },
    { categoria: "Puntera", label: "Compresi\xF3n", valor: "2,500 lb (11,121 N)" },
    { categoria: "Puntera", label: "Conductividad el\xE9ctrica", valor: "No conductora" },
    { categoria: "Puntera", label: "Conductividad t\xE9rmica", valor: "No conductora" },
    { categoria: "Construcci\xF3n", label: "Material exterior", valor: "Cuero grain premium 2.4-2.6 mm" },
    { categoria: "Construcci\xF3n", label: "Tratamiento cuero", valor: "Hidrof\xF3bico + retardante fuego" },
    { categoria: "Construcci\xF3n", label: "Forro interior", valor: "Nomex\xAE IIIA transpirable" },
    { categoria: "Construcci\xF3n", label: "Plantilla", valor: "Kevlar\xAE anti-perforaci\xF3n" },
    { categoria: "Construcci\xF3n", label: "Altura ca\xF1a", valor: '10" (25.4 cm) est\xE1ndar' },
    { categoria: "Suela", label: "Modelo suela", valor: "Vibram\xAE 148 Fire & Ice" },
    { categoria: "Suela", label: "Resistencia t\xE9rmica", valor: "300\xB0C contacto directo" },
    { categoria: "Suela", label: "Resistencia hidrocarburos", valor: "Gasolina, diesel, aceites" },
    { categoria: "Ergonom\xEDa", label: "Peso por bota", valor: "900 g (talla 9)" },
    { categoria: "Ergonom\xEDa", label: "Rango de tallas", valor: "5-14 US (38-48 MX)" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" }
  ];
  const catClass = {
    "Puntera": "proteccion",
    "Construcci\xF3n": "construccion",
    "Suela": "construccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Operaciones Prolongadas",
      desc: "Incidentes de larga duraci\xF3n donde el bombero est\xE1 de pie durante horas. El menor peso reduce significativamente la fatiga del pie y pierna."
    },
    {
      titulo: "Rescate T\xE9cnico USAR",
      desc: "Operaciones de b\xFAsqueda y rescate donde la agilidad es cr\xEDtica. El menor peso permite movimientos m\xE1s precisos en espacios confinados."
    },
    {
      titulo: "Climas Extremos",
      desc: "Operaciones en invierno donde el acero conduce fr\xEDo al pie, o en verano donde conduce calor. La puntera composite a\xEDsla t\xE9rmicamente."
    },
    {
      titulo: "Aeropuertos con Detectores",
      desc: "Brigadas ARFF de aeropuertos donde los bomberos pasan frecuentemente por detectores de metales. La puntera composite no activa alarmas."
    }
  ];
  const faqs = [
    {
      q: "\xBFLa puntera composite protege igual que la de acero?",
      a: "S\xED. Ambas cumplen exactamente la misma norma <strong>ASTM F2413-18 I/75 C/75</strong> con protecci\xF3n id\xE9ntica: resistencia a impacto de 75 lb-ft y compresi\xF3n de 2,500 lb. La diferencia es que la composite es <strong>40% m\xE1s ligera</strong> y no conduce electricidad ni temperatura."
    },
    {
      q: "\xBFCu\xE1nto peso ahorro con la puntera composite?",
      a: "En promedio, la <strong>bota con puntera composite</strong> pesa aproximadamente <strong>150 g menos por bota</strong> (300 g menos por par) comparada con la versi\xF3n de acero. En operaciones de 8+ horas, esta diferencia se traduce en menos fatiga acumulada."
    },
    {
      q: "\xBFLa puntera composite es m\xE1s fr\xE1gil que el acero?",
      a: "No. El material composite (fibra de vidrio + resinas) est\xE1 dise\xF1ado para <strong>absorber y distribuir la energ\xEDa del impacto</strong>. Cumple los mismos est\xE1ndares de protecci\xF3n que el acero y tiene excelente durabilidad. No se deforma permanentemente como el acero."
    },
    {
      q: "\xBFPor qu\xE9 elegir composite sobre acero?",
      a: "Elige <strong>puntera composite</strong> si: necesitas menor peso para operaciones largas, trabajas en climas extremos, pasas por detectores de metales, o buscas m\xE1ximo confort. Elige <strong>acero</strong> si: buscas menor costo, prefieres el perfil m\xE1s delgado del acero, o el peso no es factor cr\xEDtico."
    },
    {
      q: "\xBFLa bota composite cumple NFPA 1971?",
      a: "S\xED. La <strong>bota estructural NFPA 1971 con puntera composite</strong> tiene exactamente la misma certificaci\xF3n que la versi\xF3n de acero. Incluye ficha t\xE9cnica y certificado de laboratorio ISO/IEC 17025 para licitaciones gubernamentales."
    },
    {
      q: "\xBFLa puntera composite activa detectores de metales?",
      a: "No. La puntera composite es <strong>100% no met\xE1lica</strong>, no activa alarmas de detectores de metales ni de campos magn\xE9ticos. Ideal para <strong>brigadas ARFF de aeropuertos</strong> y instalaciones con controles de seguridad frecuentes."
    }
  ];
  const relacionados = [
    {
      title: "Bota Puntera de Acero",
      badge: "CL\xC1SICA",
      description: "Puntera de acero ASTM F2413. Opci\xF3n m\xE1s econ\xF3mica con perfil m\xE1s delgado.",
      href: "/productos/botas-para-bomberos/estructural/puntera-acero",
      buttonText: "Ver Puntera Acero",
      image: IMAGE
    },
    {
      title: "Bota Gore-Tex\xAE Impermeable",
      badge: "WATERPROOF",
      description: "Membrana Gore-Tex\xAE Crosstech\xAE que bloquea agua y fluidos. Disponible con composite.",
      href: "/productos/botas-para-bomberos/estructural/gore-tex-impermeable",
      buttonText: "Ver Gore-Tex\xAE",
      image: IMAGE
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. Compatible con la bota estructural para protecci\xF3n integral.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Ver Traje Estructural",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Casco termopl\xE1stico o material compuesto certificado para completar tu EPP.",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      buttonText: "Ver Cascos",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Puntera de Acero", href: "/productos/botas-para-bomberos/estructural/puntera-acero" },
    { label: "Suela Vibram\xAE", href: "/productos/botas-para-bomberos/estructural/suela-vibram" },
    { label: 'Ca\xF1a Alta 14"', href: "/productos/botas-para-bomberos/estructural/cana-alta-14" },
    { label: "Zipper Lateral", href: "/productos/botas-para-bomberos/estructural/zipper-lateral" },
    { label: "Gore-Tex\xAE Impermeable", href: "/productos/botas-para-bomberos/estructural/gore-tex-impermeable" },
    { label: "Ver Todas las Botas", href: "/productos/botas-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Estructural NFPA 1971", href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971", tag: "Cuerpo" },
    { label: "Casco Estructural NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Cabeza" },
    { label: "Guantes Estructurales", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Capucha Nomex\xAE Bombero", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas de Seguridad ANSI", href: "/productos/gafas-para-bomberos/seguridad", tag: "Visual" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Botas de Bombero", href: "/productos/botas-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Bota Puntera de Acero", href: "/productos/botas-para-bomberos/estructural/puntera-acero", tag: "Producto" },
    { label: "Botas de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Producto" },
    { label: "Botas Forestales NFPA 1977", href: "/productos/botas-para-bomberos/forestal", tag: "Producto" },
    { label: "Cascos NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Ciudad de M\xE9xico", href: "/directorio/ciudad-de-mexico" },
    { label: "Bomberos Jalisco \u2014 Guadalajara", href: "/directorio/jalisco" },
    { label: "Bomberos Nuevo Le\xF3n \u2014 Monterrey", href: "/directorio/nuevo-leon" },
    { label: "Bomberos Quintana Roo \u2014 ARFF", href: "/directorio/quintana-roo" },
    { label: "Bomberos Estado de M\xE9xico", href: "/directorio/estado-de-mexico" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1971" },
    { label: "Puntera", valor: "Composite I/75 C/75" },
    { label: "Peso vs acero", valor: "40% m\xE1s ligera" },
    { label: "Suela", valor: "Vibram\xAE 300\xB0C" },
    { label: "Peso", valor: "900 g/bota" },
    { label: "Altura", valor: '10" (25.4 cm)' },
    { label: "Tallas", valor: "5-14 US" },
    { label: "Detector metal", valor: "No activa" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "ASTM F2413-18", desc: "Puntera I/75 C/75 \u2014 composite certificada" },
    { code: "ASTM F2413 PR", desc: "Resistencia a perforaci\xF3n 1,200 N" },
    { code: "No met\xE1lica", desc: "Sin activaci\xF3n de detectores" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Estructural NFPA 1971 \u2014 Puntera Composite | BOMBERO.MX", "description": "Bota estructural NFPA 1971 con puntera composite ASTM F2413, 40% m\xE1s ligera que acero. Cuero grain premium, suela Vibram\xAE 300\xB0C. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "bota estructural puntera composite NFPA 1971",
    "bota bombero composite M\xE9xico",
    "bota bombero puntera no met\xE1lica",
    "calzado bombero ligero certificado",
    "bota bombero NFPA 1971 ligera",
    "bota estructural composite bombero",
    "comprar bota bombero composite M\xE9xico",
    "bota bombero sin metal"
  ], "canonical": "/productos/botas-para-bomberos/estructural/puntera-composite", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" },
    { label: "Bota Estructural de Cuero", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Puntera Composite" }
  ], "heroBadge": "Bota Estructural \xB7 NFPA 1971 \xB7 Puntera Composite", "heroTitle": "Bota Estructural NFPA 1971", "heroTitleHighlight": "Puntera Composite", "heroSubtitle": "La bota estructural ligera para operaciones prolongadas. Puntera composite ASTM F2413 con 40% menos peso que el acero, sin conducci\xF3n t\xE9rmica ni el\xE9ctrica. Misma protecci\xF3n, m\xE1ximo confort. Certificaci\xF3n NFPA 1971 completa.", "heroSeoBlocks": [
    {
      title: "Bota Estructural NFPA 1971 Puntera Composite \u2014 Ligera y Certificada",
      text: "La <strong>bota estructural NFPA 1971 con puntera composite</strong> ofrece la misma protecci\xF3n que el acero con <strong>40% menos peso</strong>. Ideal para operaciones prolongadas, climas extremos y aeropuertos con detectores. Material composite (fibra de vidrio + resinas) certificado <strong>ASTM F2413-18 I/75 C/75</strong>."
    },
    {
      title: "Sin Conducci\xF3n T\xE9rmica ni El\xE9ctrica \u2014 Confort Superior",
      text: "A diferencia del acero, la puntera composite <strong>no conduce fr\xEDo ni calor</strong> al pie. En invierno no enfr\xEDa, en verano no calienta. <strong>No conduce electricidad</strong> y no activa detectores de metales. El confort superior se traduce en <strong>menos fatiga en operaciones largas</strong>."
    }
  ], "ctaBarQuote": "Cotizar Bota Estructural Puntera Composite", "productoCategoria": "Bota de Bombero Estructural", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "Composite" },
    { modifier: "solas", text: "40% Ligera" }
  ], "productoMasVendido": false, "productoTitle": "Bota Estructural NFPA 1971", "productoTitleSub": "Puntera Composite \u2014 40% M\xE1s Ligera", "productoDesc": "Puntera de material composite (fibra de vidrio + resinas) certificada ASTM F2413-18 con la misma protecci\xF3n que el acero pero 40% m\xE1s ligera. No conduce electricidad ni temperatura. Cuero grain premium, suela Vibram\xAE 300\xB0C. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Puntera composite ASTM F2413-18 I/75 C/75",
    "40% m\xE1s ligera que puntera de acero",
    "No conduce electricidad ni temperatura",
    "No activa detectores de metales",
    "Suela Vibram\xAE Fire & Ice 300\xB0C",
    "Certificado NFPA 1971 con documentaci\xF3n"
  ], "productoAppTags": [
    "Operaciones largas",
    "Rescate t\xE9cnico",
    "Climas extremos",
    "Aeropuertos ARFF",
    "Confort superior"
  ], "gallery": [
    { src: "/images/directorio/botas-bombero-resistentes-01.avif", alt: "Bota estructural NFPA 1971 puntera composite" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero con botas estructurales ligeras" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos en operaci\xF3n prolongada" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo de bombero NFPA" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con botas estructurales" }
  ], "capasEyebrow": "Ventajas de la Puntera Composite", "capasTitle": "Tecnolog\xEDa Ligera y Certificada", "capasDesc": "La puntera composite combina protecci\xF3n certificada con confort superior. Conoce las ventajas de esta tecnolog\xEDa sobre el acero tradicional.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde Elegir Puntera Composite?", "aplicacionesContent": "<p>La puntera composite es la elecci\xF3n ideal cuando el peso, el confort y la versatilidad son prioritarios.</p><p>Ofrece la misma protecci\xF3n certificada que el acero con beneficios adicionales que marcan la diferencia en operaciones prolongadas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "ASTM F2413-18 I/75 C/75 \u2014 Misma Protecci\xF3n, Menor Peso", "certsDesc": "La puntera composite cumple exactamente la misma norma <strong>ASTM F2413-18</strong> que el acero: resistencia a impacto de 75 lb-ft y compresi\xF3n de 2,500 lb. La certificaci\xF3n <strong>NFPA 1971</strong> es id\xE9ntica para ambos tipos de puntera.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/estructural", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Bota Estructural Puntera Composite", "faqDescription": "Respondemos las dudas t\xE9cnicas sobre la puntera composite vs acero, peso, certificaciones y casos de uso ideales.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La bota estructural NFPA 1971 trabaja como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/puntera-composite/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/puntera-composite/index.astro";
const $$url = "/productos/botas-para-bomberos/estructural/puntera-composite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
