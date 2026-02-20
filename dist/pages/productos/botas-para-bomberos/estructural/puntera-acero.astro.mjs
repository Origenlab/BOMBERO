import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/botas-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Cuero Grain Premium \u2014 2.4-2.6 mm",
      descripcion: "Cuero grain de primera calidad con espesor de 2.4-2.6 mm, tratado con acabado hidrof\xF3bico y retardante al fuego. El cuero es evaluado seg\xFAn NFPA 1971 secci\xF3n 8.7 para resistencia a llama, calor radiante y abrasi\xF3n. Cada lote incluye certificado de trazabilidad de curtiembre autorizada.",
      specs: [
        { label: "Material", valor: "Cuero grain premium" },
        { label: "Espesor", valor: "2.4-2.6 mm" },
        { label: "Tratamiento", valor: "Hidrof\xF3bico + FR" },
        { label: "Certificaci\xF3n", valor: "NFPA 1971 \xA78.7" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Puntera de Acero \u2014 ASTM F2413-18",
      descripcion: "Puntera de acero certificada ASTM F2413-18 con resistencia a impacto de 75 lb-ft (101.7 J) y compresi\xF3n de 2,500 lb (11,121 N). La norma NFPA 1971 secci\xF3n 8.29 requiere esta protecci\xF3n para operaciones estructurales. Marcado de certificaci\xF3n visible en cada bota.",
      specs: [
        { label: "Material", valor: "Acero templado" },
        { label: "Impacto", valor: "75 lb-ft (101.7 J)" },
        { label: "Compresi\xF3n", valor: "2,500 lb (11,121 N)" },
        { label: "Norma", valor: "ASTM F2413-18 I/75 C/75" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Suela Vibram\xAE \u2014 Resistente a 300\xB0C",
      descripcion: "Suela Vibram\xAE Fire & Ice con resistencia a hidrocarburos, qu\xEDmicos industriales y temperaturas de contacto hasta 300\xB0C (572\xB0F). Patr\xF3n de tracci\xF3n multi-direccional dise\xF1ado para escombros, escaleras mojadas y superficies resbaladizas. Resistente a perforaciones seg\xFAn ASTM F2413.",
      specs: [
        { label: "Material", valor: "Vibram\xAE Fire & Ice" },
        { label: "Temperatura", valor: "300\xB0C contacto directo" },
        { label: "Resistencia", valor: "Hidrocarburos + qu\xEDmicos" },
        { label: "Perforaci\xF3n", valor: "ASTM F2413 PR" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Material exterior", valor: "Cuero grain premium 2.4-2.6 mm" },
    { categoria: "Construcci\xF3n", label: "Tratamiento cuero", valor: "Hidrof\xF3bico + retardante fuego" },
    { categoria: "Construcci\xF3n", label: "Forro interior", valor: "Nomex\xAE IIIA transpirable" },
    { categoria: "Construcci\xF3n", label: "Plantilla", valor: "Kevlar\xAE anti-perforaci\xF3n" },
    { categoria: "Construcci\xF3n", label: "Altura ca\xF1a", valor: '10" (25.4 cm) est\xE1ndar' },
    { categoria: "Protecci\xF3n", label: "Puntera", valor: "Acero ASTM F2413-18 I/75 C/75" },
    { categoria: "Protecci\xF3n", label: "Impacto puntera", valor: "75 lb-ft (101.7 J)" },
    { categoria: "Protecci\xF3n", label: "Compresi\xF3n puntera", valor: "2,500 lb (11,121 N)" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n", valor: "ASTM F2413 PR \u2014 1,200 N" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica suela", valor: "300\xB0C contacto directo" },
    { categoria: "Suela", label: "Modelo suela", valor: "Vibram\xAE 148 Fire & Ice" },
    { categoria: "Suela", label: "Resistencia hidrocarburos", valor: "Gasolina, diesel, aceites" },
    { categoria: "Suela", label: "Resistencia qu\xEDmica", valor: "\xC1cidos y bases diluidas" },
    { categoria: "Ergonom\xEDa", label: "Peso por bota", valor: "1,050 g (talla 9)" },
    { categoria: "Ergonom\xEDa", label: "Rango de tallas", valor: "5-14 US (38-48 MX)" },
    { categoria: "Ergonom\xEDa", label: "Anchos disponibles", valor: "D (est\xE1ndar), EE (ancho)" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Suela": "construccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Incendio Estructural",
      desc: "Combate activo en edificios residenciales, comerciales e industriales. Protecci\xF3n integral del pie contra calor radiante, objetos que caen y l\xEDquidos peligrosos."
    },
    {
      titulo: "Rescate Urbano USAR",
      desc: "Operaciones de b\xFAsqueda y rescate en estructuras colapsadas. Puntera de acero protege de escombros pesados, suela anti-perforaci\xF3n contra clavos y vidrios."
    },
    {
      titulo: "Brigadas Municipales",
      desc: "Cuerpos de bomberos municipales y estatales. La configuraci\xF3n m\xE1s confiable y econ\xF3mica para equipamiento de flotas completas."
    },
    {
      titulo: "Industria y Refiner\xEDas",
      desc: "Brigadas contra incendio de plantas industriales. Suela resistente a hidrocarburos certificada para ambientes PEMEX y petroqu\xEDmicos."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia entre puntera de acero y composite?",
      a: "Ambas cumplen <strong>ASTM F2413-18</strong> con la misma protecci\xF3n de impacto (75 lb-ft). La <strong>puntera de acero</strong> es m\xE1s delgada y econ\xF3mica. La <strong>puntera composite</strong> es 40% m\xE1s ligera, no conduce electricidad ni fr\xEDo. Para operaciones estructurales est\xE1ndar, el acero es la elecci\xF3n m\xE1s com\xFAn."
    },
    {
      q: "\xBFLa bota es resistente a qu\xEDmicos?",
      a: "La <strong>suela Vibram\xAE Fire & Ice</strong> resiste hidrocarburos (gasolina, diesel) y \xE1cidos/bases diluidas. El cuero tiene tratamiento hidrof\xF3bico pero <strong>no es herm\xE9tico a qu\xEDmicos</strong>. Para exposici\xF3n a qu\xEDmicos concentrados o HAZMAT, recomendamos la <strong>bota de caucho NFPA 1991</strong>."
    },
    {
      q: "\xBFCu\xE1nto dura una bota estructural de cuero?",
      a: "Con mantenimiento adecuado (limpieza y acondicionamiento del cuero cada 3-6 meses), la <strong>bota estructural de cuero</strong> dura t\xEDpicamente <strong>3-5 a\xF1os</strong> en servicio activo. La suela Vibram\xAE puede resolarse cuando se desgasta, extendiendo la vida \xFAtil."
    },
    {
      q: "\xBFQu\xE9 tallas est\xE1n disponibles?",
      a: "Las <strong>botas estructurales NFPA 1971</strong> est\xE1n disponibles en tallas <strong>5-14 US</strong> (equivalente 38-48 MX) en anchos D (est\xE1ndar) y EE (ancho). Enviamos gu\xEDa de medici\xF3n y aceptamos <strong>cambios de talla sin costo</strong> en compras de flotilla."
    },
    {
      q: "\xBFLa bota incluye plantilla anti-perforaci\xF3n?",
      a: "S\xED. La <strong>bota estructural NFPA 1971</strong> incluye plantilla de <strong>Kevlar\xAE anti-perforaci\xF3n</strong> que resiste hasta 1,200 N (270 lb) de fuerza penetrante. Protege contra clavos, vidrios y objetos punzantes en escombros sin a\xF1adir peso significativo."
    },
    {
      q: "\xBFLa bota incluye certificado para licitaciones?",
      a: "S\xED. Cada <strong>bota estructural NFPA 1971</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente ISO/IEC 17025 \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales</strong> en los 32 estados de M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Bota Puntera Composite",
      badge: "LIGERA",
      description: "40% m\xE1s ligera que el acero. Ideal para operaciones prolongadas donde la fatiga es factor cr\xEDtico.",
      href: "/productos/botas-para-bomberos/estructural/puntera-composite",
      buttonText: "Ver Puntera Composite",
      image: IMAGE
    },
    {
      title: "Bota Gore-Tex\xAE Impermeable",
      badge: "WATERPROOF",
      description: "Membrana Gore-Tex\xAE Crosstech\xAE que bloquea agua y fluidos. Para condiciones h\xFAmedas.",
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
      title: "Guantes Estructurales",
      badge: "NFPA 1971",
      description: "Guantes certificados para completar tu EPP. Protecci\xF3n t\xE9rmica y de agarre.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Puntera Composite", href: "/productos/botas-para-bomberos/estructural/puntera-composite" },
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
    { label: "Botas de Caucho HAZMAT", href: "/productos/botas-para-bomberos/caucho", tag: "Producto" },
    { label: "Botas Forestales NFPA 1977", href: "/productos/botas-para-bomberos/forestal", tag: "Producto" },
    { label: "Trajes NFPA 1971", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Cascos NFPA 1971", href: "/productos/cascos-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes para Bomberos", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Ciudad de M\xE9xico", href: "/directorio/ciudad-de-mexico" },
    { label: "Bomberos Jalisco \u2014 Guadalajara", href: "/directorio/jalisco" },
    { label: "Bomberos Nuevo Le\xF3n \u2014 Monterrey", href: "/directorio/nuevo-leon" },
    { label: "Bomberos Veracruz \u2014 PEMEX", href: "/directorio/veracruz" },
    { label: "Bomberos Tabasco \u2014 Petrolero", href: "/directorio/tabasco" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1971" },
    { label: "Exterior", valor: "Cuero grain 2.4-2.6 mm" },
    { label: "Puntera", valor: "Acero I/75 C/75" },
    { label: "Suela", valor: "Vibram\xAE 300\xB0C" },
    { label: "Peso", valor: "1,050 g/bota" },
    { label: "Altura", valor: '10" (25.4 cm)' },
    { label: "Tallas", valor: "5-14 US" },
    { label: "Anchos", valor: "D, EE" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "ASTM F2413-18", desc: "Puntera I/75 C/75 \u2014 impacto y compresi\xF3n" },
    { code: "ASTM F2413 PR", desc: "Resistencia a perforaci\xF3n 1,200 N" },
    { code: "Vibram\xAE 300\xB0C", desc: "Suela resistente a calor de contacto" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Bota Estructural NFPA 1971 \u2014 Puntera de Acero | BOMBERO.MX", "description": "Bota estructural NFPA 1971 con puntera de acero ASTM F2413. Cuero grain premium 2.4-2.6 mm, suela Vibram\xAE 300\xB0C. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "bota estructural puntera acero NFPA 1971",
    "bota bombero cuero M\xE9xico",
    "bota bombero puntera acero",
    "calzado bombero certificado",
    "bota bombero NFPA 1971 precio",
    "bota estructural bombero acero",
    "comprar bota bombero M\xE9xico",
    "bota Vibram bombero"
  ], "canonical": "/productos/botas-para-bomberos/estructural/puntera-acero", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Botas para Bombero", href: "/productos/botas-para-bomberos" },
    { label: "Bota Estructural de Cuero", href: "/productos/botas-para-bomberos/estructural" },
    { label: "Puntera de Acero" }
  ], "heroBadge": "Bota Estructural \xB7 NFPA 1971 \xB7 Puntera de Acero", "heroTitle": "Bota Estructural NFPA 1971", "heroTitleHighlight": "Puntera de Acero", "heroSubtitle": "La bota estructural de referencia para cuerpos de bomberos. Cuero grain premium de 2.4-2.6 mm con puntera de acero ASTM F2413 y suela Vibram\xAE resistente a 300\xB0C. Certificaci\xF3n NFPA 1971 completa con ficha t\xE9cnica incluida.", "heroSeoBlocks": [
    {
      title: "Bota Estructural NFPA 1971 Puntera de Acero \u2014 Distribuidor Autorizado M\xE9xico",
      text: "La <strong>bota estructural NFPA 1971 con puntera de acero</strong> es la protecci\xF3n de pie m\xE1s vendida para bomberos profesionales en M\xE9xico. Cuero grain premium tratado, puntera <strong>ASTM F2413-18</strong> con resistencia a impacto de 75 lb-ft y suela <strong>Vibram\xAE Fire & Ice</strong> para condiciones extremas."
    },
    {
      title: "Certificaci\xF3n NFPA 1971 con Ficha T\xE9cnica y Certificado de Laboratorio",
      text: "Cada <strong>bota estructural NFPA 1971</strong> incluye ficha t\xE9cnica completa y certificado de laboratorio independiente ISO/IEC 17025 \u2014 documentaci\xF3n indispensable para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Plantilla Kevlar\xAE anti-perforaci\xF3n y forro Nomex\xAE IIIA incluidos."
    }
  ], "ctaBarQuote": "Cotizar Bota Estructural Puntera de Acero", "productoCategoria": "Bota de Bombero Estructural", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "Acero I/75" },
    { modifier: "solas", text: "Vibram\xAE" }
  ], "productoMasVendido": true, "productoTitle": "Bota Estructural NFPA 1971", "productoTitleSub": "Puntera de Acero ASTM F2413", "productoDesc": "Cuero grain premium de 2.4-2.6 mm con tratamiento hidrof\xF3bico y retardante al fuego. Puntera de acero certificada ASTM F2413-18 (I/75 C/75). Suela Vibram\xAE Fire & Ice resistente a 300\xB0C. Forro interior Nomex\xAE IIIA y plantilla Kevlar\xAE anti-perforaci\xF3n. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Cuero grain premium 2.4-2.6 mm tratado",
    "Puntera acero ASTM F2413-18 (I/75 C/75)",
    "Suela Vibram\xAE Fire & Ice 300\xB0C",
    "Plantilla Kevlar\xAE anti-perforaci\xF3n",
    "Forro Nomex\xAE IIIA transpirable",
    "Certificado NFPA 1971 con documentaci\xF3n"
  ], "productoAppTags": [
    "Incendio estructural",
    "Rescate urbano",
    "Brigadas municipales",
    "Industria",
    "Refiner\xEDas"
  ], "gallery": [
    { src: "/images/directorio/botas-bombero-resistentes-01.avif", alt: "Bota estructural NFPA 1971 puntera de acero" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bombero con botas estructurales en incendio" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Bomberos en acci\xF3n con EPP completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales equipados" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo de bombero NFPA" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con botas estructurales" }
  ], "capasEyebrow": "Anatom\xEDa de la Bota", "capasTitle": "Sistema de Protecci\xF3n Integral", "capasDesc": "Cada componente de la bota cumple una funci\xF3n espec\xEDfica. La sinergia entre cuero, puntera y suela es lo que determina el nivel de protecci\xF3n NFPA 1971.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan los m\xEDnimos exigidos por NFPA 1971 edici\xF3n vigente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa la Bota con Puntera de Acero?", "aplicacionesContent": "<p>La bota estructural NFPA 1971 con puntera de acero es el calzado est\xE1ndar para cuerpos de bomberos en toda la Rep\xFAblica Mexicana.</p><p>Ofrece la mejor relaci\xF3n protecci\xF3n-precio para equipar flotas completas manteniendo la certificaci\xF3n NFPA 1971 exigida en licitaciones gubernamentales.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1971 + ASTM F2413 \u2014 Protecci\xF3n de Pie Profesional", "certsDesc": "La norma <strong>NFPA 1971</strong> establece requisitos para calzado de bomberos estructurales: resistencia del cuero a llama y calor radiante, protecci\xF3n de puntera seg\xFAn <strong>ASTM F2413</strong>, y suela resistente a hidrocarburos. Cada bota de nuestro cat\xE1logo cumple todos los m\xE9todos de prueba exigidos.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/botas-para-bomberos/estructural", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Bota Estructural Puntera de Acero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre la bota de acero NFPA 1971, vida \xFAtil, tallas y certificaciones.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La bota estructural NFPA 1971 trabaja como parte de un sistema. Todos los equipos est\xE1n certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/puntera-acero/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/botas-para-bomberos/estructural/puntera-acero/index.astro";
const $$url = "/productos/botas-para-bomberos/estructural/puntera-acero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
