import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/equipo-bomberos-completo-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Casco Base NFPA 1977 \u2014 HDPE o Material Compuesto",
      descripcion: "El sistema incluye casco certificado NFPA 1977 a elecci\xF3n: shell de HDPE termopl\xE1stico (econ\xF3mico, 5 a\xF1os vida \xFAtil) o material compuesto de fibra de vidrio (premium, 10 a\xF1os vida \xFAtil). Ambos con rieles de montaje para los accesorios del kit.",
      specs: [
        { label: "Opciones shell", valor: "HDPE o fibra de vidrio" },
        { label: "Certificaci\xF3n", valor: "NFPA 1977 completa" },
        { label: "Rieles", valor: "Montaje universal incluido" },
        { label: "Colores", valor: "Amarillo, naranja, lime, blanco" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Kit de Accesorios Profesional",
      descripcion: "El sistema incluye todos los accesorios necesarios para operaciones de campo: pantalla facial (malla met\xE1lica + visor policarbonato), goggles forestales ventilados, protector de nuca FR premium (Nomex\xAE IIIA 7.5 oz), barbiquejo profesional con liberaci\xF3n de emergencia, y banda antisudor de repuesto.",
      specs: [
        { label: "Pantalla", valor: "Malla + visor (intercambiables)" },
        { label: "Goggles", valor: "ANSI Z87.1 ventilaci\xF3n indirecta" },
        { label: "Nuca", valor: "Nomex\xAE IIIA premium" },
        { label: "Barbiquejo", valor: "3 puntos con liberaci\xF3n" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Bolsa de Transporte y Documentaci\xF3n",
      descripcion: "Bolsa de transporte reforzada con compartimentos para cada componente. Incluye documentaci\xF3n completa: certificado de laboratorio ISO/IEC 17025, gu\xEDa de mantenimiento, registro de inspecciones, y tarjeta de garant\xEDa. Todo organizado para control de inventario de brigada.",
      specs: [
        { label: "Bolsa", valor: "Cordura\xAE 1000D con compartimentos" },
        { label: "Certificado", valor: "ISO/IEC 17025 original" },
        { label: "Garant\xEDa", valor: "Tarjeta registrable" },
        { label: "Manual", valor: "Espa\xF1ol \u2014 mantenimiento incluido" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Casco", label: "Shell opciones", valor: "HDPE termopl\xE1stico o fibra de vidrio" },
    { categoria: "Casco", label: "Certificaci\xF3n", valor: "NFPA 1977 edici\xF3n vigente" },
    { categoria: "Casco", label: "Vida \xFAtil HDPE", valor: "5 a\xF1os desde manufactura" },
    { categoria: "Casco", label: "Vida \xFAtil fibra vidrio", valor: "10 a\xF1os desde manufactura" },
    { categoria: "Casco", label: "Clase diel\xE9ctrica (HDPE)", valor: "Clase E \u2014 20,000V" },
    { categoria: "Pantalla", label: "Malla met\xE1lica", valor: "Acero inox. 304 \u2014 EN 1731" },
    { categoria: "Pantalla", label: "Visor policarbonato", valor: "2 mm ANSI Z87.1 antivaho" },
    { categoria: "Pantalla", label: "Sistema montaje", valor: "Abatible con detentes" },
    { categoria: "Goggles", label: "Material", valor: "Policarbonato ANSI Z87.1" },
    { categoria: "Goggles", label: "Ventilaci\xF3n", valor: "Indirecta anti-empa\xF1amiento" },
    { categoria: "Goggles", label: "Correa", valor: "El\xE1stica ajustable" },
    { categoria: "Protector Nuca", label: "Material", valor: "Nomex\xAE IIIA 7.5 oz/yd\xB2" },
    { categoria: "Protector Nuca", label: "Fijaci\xF3n", valor: "Clips met\xE1licos + velcro" },
    { categoria: "Protector Nuca", label: "Cobertura", valor: "Nuca + orejas + laterales" },
    { categoria: "Barbiquejo", label: "Tipo", valor: "3 puntos con mentonera" },
    { categoria: "Barbiquejo", label: "Liberaci\xF3n", valor: "Hebilla de emergencia" },
    { categoria: "Barbiquejo", label: "Material", valor: "Nylon FR con mentonera EVA" },
    { categoria: "Kit", label: "Bolsa transporte", valor: "Cordura\xAE 1000D con compartimentos" },
    { categoria: "Kit", label: "Peso total sistema", valor: "800\u20131000 g (todo incluido)" },
    { categoria: "Kit", label: "Documentaci\xF3n", valor: "Certificado, manual, garant\xEDa" }
  ];
  const catClass = {
    "Casco": "construccion",
    "Pantalla": "proteccion",
    "Goggles": "proteccion",
    "Protector Nuca": "proteccion",
    "Barbiquejo": "ergonomia",
    "Kit": "ergonomia"
  };
  const aplicaciones = [
    {
      titulo: "Equipamiento de Brigada Completo",
      desc: "El sistema permite equipar brigadas completas con todo lo necesario en un solo pedido. Cada miembro recibe kit id\xE9ntico con todos los accesorios, simplificando log\xEDstica de adquisici\xF3n y reposici\xF3n de refacciones."
    },
    {
      titulo: "Licitaciones CONAFOR y Protecci\xF3n Civil",
      desc: "El kit incluye toda la documentaci\xF3n requerida para licitaciones p\xFAblicas: certificado de laboratorio ISO/IEC 17025, ficha t\xE9cnica completa, y garant\xEDa registrable. Formato estandarizado para cumplimiento de bases de licitaci\xF3n."
    },
    {
      titulo: "Capacitaci\xF3n y Escuelas de Bomberos",
      desc: "Para instituciones de capacitaci\xF3n que requieren equipar alumnos con sistema completo y estandarizado. La bolsa de transporte facilita almacenamiento individual y control de inventario institucional."
    },
    {
      titulo: "Brigadas Industriales Forestales",
      desc: "Empresas madereras, papeleras y plantaciones forestales que requieren equipar brigadas de respuesta propias. El kit profesional cumple requisitos de STPS y normativa de seguridad industrial."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 incluye exactamente el Sistema Completo de Campo?",
      a: "El kit incluye: <strong>(1)</strong> Casco NFPA 1977 (HDPE o fibra de vidrio a elecci\xF3n), <strong>(2)</strong> Pantalla de malla met\xE1lica acero inox., <strong>(3)</strong> Visor de policarbonato intercambiable, <strong>(4)</strong> Goggles forestales ANSI Z87.1, <strong>(5)</strong> Protector de nuca Nomex\xAE IIIA premium, <strong>(6)</strong> Barbiquejo 3 puntos con liberaci\xF3n, <strong>(7)</strong> Banda antisudor de repuesto, <strong>(8)</strong> Bolsa de transporte Cordura\xAE, <strong>(9)</strong> Documentaci\xF3n completa (certificado, manual, garant\xEDa)."
    },
    {
      q: "\xBFCu\xE1l es la diferencia de precio entre el kit con HDPE vs fibra de vidrio?",
      a: "El kit con <strong>shell de fibra de vidrio</strong> tiene un sobreprecio de aproximadamente <strong>40\u201360%</strong> sobre el kit con HDPE. Sin embargo, la vida \xFAtil de 10 a\xF1os (vs 5 a\xF1os del HDPE) puede hacer que el costo por a\xF1o de servicio sea similar o menor. Para brigadas de alta actividad con >100 jornadas/a\xF1o, el kit de fibra de vidrio es mejor inversi\xF3n."
    },
    {
      q: "\xBFLos accesorios son compatibles entre marcas de cascos?",
      a: "Generalmente <strong>no</strong>. Los sistemas de montaje de cada fabricante son propietarios. El kit Sistema Campo incluye <strong>todos los accesorios del mismo fabricante</strong> garantizando compatibilidad perfecta. No se recomienda mezclar accesorios de diferentes marcas porque puede comprometer ajuste, seguridad y certificaci\xF3n."
    },
    {
      q: "\xBFLa documentaci\xF3n incluida es suficiente para licitaciones CONAFOR?",
      a: "S\xED. El kit incluye: <strong>Certificado de laboratorio</strong> ISO/IEC 17025 con n\xFAmero de lote, <strong>ficha t\xE9cnica completa</strong> con todas las especificaciones, y <strong>carta de garant\xEDa</strong> del fabricante. Esta documentaci\xF3n cumple los requisitos t\xEDpicos de bases de licitaci\xF3n de CONAFOR, SEMARNAT y protecci\xF3n civil estatal. Podemos agregar documentaci\xF3n adicional espec\xEDfica si la licitaci\xF3n lo requiere."
    },
    {
      q: "\xBFOfrecen descuento por volumen para equipar brigadas completas?",
      a: "S\xED. Ofrecemos <strong>precios escalonados</strong> por volumen: a partir de 10 kits, 25 kits, 50 kits y 100+ kits con descuentos progresivos. Para pedidos mayores a 50 unidades podemos personalizar configuraci\xF3n (colores, tipos de shell, combinaci\xF3n de accesorios) sin costo adicional. <strong>Cotice su volumen</strong> para precio espec\xEDfico."
    },
    {
      q: "\xBFC\xF3mo se organiza el inventario y reposici\xF3n de refacciones?",
      a: "Cada kit viene con <strong>n\xFAmero de serie</strong> \xFAnico y <strong>tarjeta de registro</strong> para control de inventario. Las refacciones (bandas antisudor, protectores de nuca, barbiquejo) se identifican por el mismo n\xFAmero para reposici\xF3n exacta. Mantenemos <strong>stock de refacciones</strong> para todos los modelos en cat\xE1logo para entrega r\xE1pida de partes de reemplazo."
    }
  ];
  const relacionados = [
    {
      title: "Casco Forestal Termopl\xE1stico HDPE",
      badge: "NFPA 1977",
      description: "Casco solo sin accesorios. Para quienes ya tienen goggles y protecci\xF3n facial.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero",
      buttonText: "Ver Casco Solo",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Chaqueta y pantal\xF3n Nomex\xAE IIIA < 6 oz/yd\xB2. El complemento del sistema de cabeza.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Ver Traje Forestal",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Guantes Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Guantes de cuero con dorso FR. Completan el EPP de extremidades superiores.",
      href: "/productos/guantes-para-bomberos/forestales",
      buttonText: "Ver Guantes Forestales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Botas Forestales Logger",
      badge: "NFPA 1977",
      description: "Botas de cuero con suela Vibram\xAE y ca\xF1a de 8\u201310 pulgadas. Protecci\xF3n de pies completa.",
      href: "/productos/botas-para-bomberos/forestal",
      buttonText: "Ver Botas Forestales",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Termopl\xE1stico Ligero HDPE", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero" },
    { label: "Material Compuesto (Fibra Vidrio)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto" },
    { label: "Ventilaci\xF3n M\xE1xima", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima" },
    { label: "Alta Visibilidad (Hi-Vis)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Con Protecci\xF3n Facial", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cuerpo" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales", tag: "Manos" },
    { label: "Botas Forestales Logger", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos Forestales", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cat\xE1logo" },
    { label: "Incendios Forestales y Equipo", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" },
    { label: "Botas Forestales Logger", href: "/productos/botas-para-bomberos/forestal", tag: "Producto" },
    { label: "EPP Forestal Completo NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Sistema" },
    { label: "Guantes Forestales NFPA 1977", href: "/productos/guantes-para-bomberos/forestales", tag: "Producto" },
    { label: "Cascos de Bombero Certificados", href: "/blog/cascos-bombero-certificados", tag: "Blog" }
  ];
  const directorioLinks = [
    { label: "Bomberos Forestales Jalisco", href: "/directorio/jalisco" },
    { label: "Bomberos Forestales Chiapas", href: "/directorio/chiapas" },
    { label: "Bomberos Forestales Oaxaca", href: "/directorio/oaxaca" },
    { label: "Bomberos Forestales Michoac\xE1n", href: "/directorio/michoacan" },
    { label: "Bomberos Forestales Chihuahua", href: "/directorio/chihuahua" },
    { label: "Directorio Nacional", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1977 completo" },
    { label: "Shell opciones", valor: "HDPE o fibra vidrio" },
    { label: "Pantalla", valor: "Malla + visor incluidos" },
    { label: "Goggles", valor: "ANSI Z87.1 incluidos" },
    { label: "Protector nuca", valor: "Nomex\xAE IIIA premium" },
    { label: "Barbiquejo", valor: "3 puntos + liberaci\xF3n" },
    { label: "Peso sistema", valor: "800\u20131000 g total" },
    { label: "Documentaci\xF3n", valor: "Certificado incluido" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Wildland Fire Fighting \u2014 casco certificado" },
    { code: "ANSI Z87.1", desc: "Protecci\xF3n ocular \u2014 goggles y visor" },
    { code: "EN 1731", desc: "Protecci\xF3n facial \u2014 malla met\xE1lica" },
    { code: "ISO/IEC 17025", desc: "Certificado laboratorio acreditado incluido" },
    { code: "Garant\xEDa", desc: "Documentaci\xF3n completa para licitaciones" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Forestal NFPA 1977 \u2014 Sistema Completo de Campo | BOMBERO.MX", "description": "Kit completo casco forestal NFPA 1977: casco + pantalla malla + visor + goggles + protector nuca + barbiquejo + bolsa transporte. Para equipamiento de brigadas CONAFOR. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "kit casco forestal completo",
    "sistema casco NFPA 1977",
    "casco forestal brigada",
    "kit bombero forestal Mexico",
    "equipamiento brigada CONAFOR",
    "casco forestal licitacion",
    "sistema proteccion cabeza forestal",
    "comprar kit casco forestal Mexico"
  ], "canonical": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Sistema Completo de Campo" }
  ], "heroBadge": "Casco Forestal \xB7 NFPA 1977 \xB7 Sistema Completo", "heroTitle": "Casco Forestal NFPA 1977", "heroTitleHighlight": "Sistema Completo de Campo", "heroSubtitle": "Kit profesional con todo lo necesario: casco certificado (HDPE o fibra de vidrio), pantalla de malla met\xE1lica, visor de policarbonato, goggles forestales, protector de nuca premium, barbiquejo con liberaci\xF3n, bolsa de transporte y documentaci\xF3n completa para licitaciones.", "heroSeoBlocks": [
    {
      title: "Todo en Un Kit \u2014 Equipamiento de Brigada Simplificado",
      text: "El <strong>Sistema Completo de Campo</strong> incluye <strong>9 componentes</strong> profesionales compatibles entre s\xED, organizados en bolsa de transporte con compartimentos. Simplifica la log\xEDstica de adquisici\xF3n y garantiza que cada miembro de la brigada tenga equipo id\xE9ntico y completo."
    },
    {
      title: "Documentaci\xF3n para Licitaciones CONAFOR",
      text: "Cada kit incluye <strong>certificado de laboratorio ISO/IEC 17025</strong> original con n\xFAmero de lote, ficha t\xE9cnica completa, y tarjeta de garant\xEDa registrable. Documentaci\xF3n lista para cumplir requisitos de bases de licitaci\xF3n de <strong>CONAFOR, SEMARNAT y protecci\xF3n civil</strong>."
    }
  ], "ctaBarQuote": "Cotizar Sistema Completo de Campo", "productoCategoria": "Kit Forestal Completo", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "Kit Completo" },
    { modifier: "solas", text: "9 componentes" }
  ], "productoMasVendido": true, "productoTitle": "Sistema Completo de Campo", "productoTitleSub": "Casco Forestal NFPA 1977", "productoDesc": "Kit profesional completo: casco NFPA 1977 (HDPE o fibra de vidrio), pantalla de malla + visor intercambiables, goggles ANSI Z87.1, protector de nuca Nomex\xAE IIIA, barbiquejo 3 puntos con liberaci\xF3n, banda repuesto, bolsa Cordura\xAE y documentaci\xF3n certificada.", "productoFeatures": [
    "Casco NFPA 1977 (HDPE o fibra vidrio)",
    "Malla acero inox. + visor policarb.",
    "Goggles forestales ANSI Z87.1",
    "Protector nuca Nomex\xAE IIIA premium",
    "Barbiquejo 3 puntos con liberaci\xF3n",
    "Bolsa Cordura\xAE + certificado ISO"
  ], "productoAppTags": [
    "Equipamiento brigadas",
    "Licitaciones CONAFOR",
    "Capacitaci\xF3n",
    "Brigadas industriales",
    "Protecci\xF3n civil"
  ], "gallery": [
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema completo casco forestal NFPA 1977" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada forestal equipada con kit completo" },
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Kit forestal en operaci\xF3n de campo" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Capacitaci\xF3n con sistema completo" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Brigada con equipamiento uniforme" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Sistema de campo en acci\xF3n" }
  ], "capasEyebrow": "Contenido del Kit", "capasTitle": "Componentes del Sistema Completo", "capasDesc": "Kit profesional con 9 componentes certificados, documentaci\xF3n completa y bolsa de transporte para organizaci\xF3n y control de inventario.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones del Sistema Completo", "specsDesc": "Todos los componentes cumplen normas aplicables y son compatibles entre s\xED. Documentaci\xF3n incluida para licitaciones y control de inventario.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFPara Qui\xE9n es el Sistema Completo?", "aplicacionesContent": "<p>El Sistema Completo de Campo est\xE1 dise\xF1ado para <strong>equipar brigadas completas</strong> con un solo pedido, simplificando log\xEDstica y garantizando uniformidad de equipo.</p><p>Incluye toda la <strong>documentaci\xF3n requerida para licitaciones</strong> p\xFAblicas de CONAFOR, SEMARNAT, protecci\xF3n civil estatal y municipal.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificaci\xF3n Completa del Sistema", "certsDesc": "Cada componente del kit cumple su norma aplicable. La documentaci\xF3n incluida acredita cumplimiento para bases de licitaci\xF3n y auditor\xEDas de seguridad.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre el Sistema Completo", "faqDescription": "Dudas frecuentes sobre contenido del kit, opciones de configuraci\xF3n, precios por volumen y documentaci\xF3n para licitaciones.", "faqDocTitle": "Cotizaci\xF3n por Volumen", "faqDocDesc": "Solicita cotizaci\xF3n especial para equipamiento de brigadas completas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Cotizar Volumen", "faqs": faqs, "relacionadosLabel": "Complete el EPP de la Brigada", "relacionadosTitle": "Equipamiento Corporal NFPA 1977", "relacionadosDesc": "El sistema de cabeza es solo una parte del EPP forestal completo. Complete el equipamiento con traje, guantes y botas NFPA 1977.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
