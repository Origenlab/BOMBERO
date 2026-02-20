import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/capucha-bombero-nomex-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Nomex\xAE IIIA Certificado",
      descripcion: "Primera l\xEDnea de defensa: tejido Nomex\xAE IIIA con resistencia inherente a la llama. Cumple todos los requisitos de NFPA 1971 para capuchas estructurales. Protege contra llama directa, calor radiante y brasas mientras la capa interior trabaja bloqueando las part\xEDculas que atraviesan el tejido convencional.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA (meta-aramida)" },
        { label: "Peso del tejido", valor: "4.5 \u2013 5.5 oz/yd\xB2" },
        { label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente" },
        { label: "Funci\xF3n", valor: "Protecci\xF3n t\xE9rmica + soporte estructural" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Membrana Interior \u2014 Bloqueo de Part\xEDculas PM2.5",
      descripcion: "Capa de barrera de part\xEDculas que bloquea contaminantes ultrafinos (PM2.5 y menores) presentes en el humo de incendio. Estudios de la IARC (Agencia Internacional de Investigaci\xF3n del C\xE1ncer) confirman que el humo de incendio contiene carcin\xF3genos como benceno, formaldeh\xEDdo y HAPs que penetran la piel. Esta membrana reduce la absorci\xF3n d\xE9rmica de toxinas en la zona de cabeza y cuello \u2014 la m\xE1s vascularizada y permeable del cuerpo.",
      specs: [
        { label: "Tecnolog\xEDa", valor: "Membrana de bloqueo particulado" },
        { label: "Filtraci\xF3n", valor: "Part\xEDculas PM2.5 y menores" },
        { label: "Carcin\xF3genos bloqueados", valor: "Benceno, HAPs, formaldeh\xEDdo" },
        { label: "Zona protegida", valor: "Cuello, nuca, ment\xF3n, orejas, frente" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Corte Ergon\xF3mico \u2014 Protocolo de Reducci\xF3n de Exposici\xF3n",
      descripcion: "Dise\xF1o de ajuste integral compatible con los protocolos de reducci\xF3n de exposici\xF3n a carcin\xF3genos adoptados por departamentos de bomberos a nivel mundial. La cobertura de 360\xB0 en cabeza y cuello es cr\xEDtica: la zona cervical es una de las de mayor absorci\xF3n d\xE9rmica del cuerpo humano. El pu\xF1o inferior solapa con el cuello del traje sin dejar piel expuesta.",
      specs: [
        { label: "Cobertura", valor: "360\xB0 \u2014 cuello, nuca, ment\xF3n, orejas, frente" },
        { label: "Protocolo", valor: "Reducci\xF3n de exposici\xF3n a carcin\xF3genos" },
        { label: "Abertura facial", valor: "Compatible con m\xE1scara SCBA" },
        { label: "Descontaminaci\xF3n", valor: "Lavable \u2014 protocolo NFPA 1851" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Capa exterior", valor: "Nomex\xAE IIIA (meta-aramida)" },
    { categoria: "Material", label: "Capa interior", valor: "Membrana de bloqueo de part\xEDculas PM2.5" },
    { categoria: "Material", label: "Peso total", valor: "5.5 \u2013 7.0 oz/yd\xB2 (doble capa)" },
    { categoria: "Material", label: "Hilo de costura", valor: "100 % Nomex\xAE resistente a la llama" },
    { categoria: "Protecci\xF3n T\xE9rmica", label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente" },
    { categoria: "Protecci\xF3n T\xE9rmica", label: "Encogimiento m\xE1ximo", valor: "< 5 % post-exposici\xF3n" },
    { categoria: "Protecci\xF3n T\xE9rmica", label: "Punto de fusi\xF3n", valor: "No aplica \u2014 no funde" },
    { categoria: "Bloqueo Part\xEDculas", label: "Filtraci\xF3n", valor: "PM2.5 y part\xEDculas ultrafinas" },
    { categoria: "Bloqueo Part\xEDculas", label: "Carcin\xF3genos", valor: "Benceno, HAPs, formaldeh\xEDdo, acrole\xEDna" },
    { categoria: "Bloqueo Part\xEDculas", label: "V\xEDa de protecci\xF3n", valor: "Absorci\xF3n d\xE9rmica en zona cervical" },
    { categoria: "Bloqueo Part\xEDculas", label: "Lavable", valor: "S\xED \u2014 protocolo NFPA 1851" },
    { categoria: "Compatibilidad", label: "Casco", valor: "Todo casco NFPA 1971 / 1977 / 1951" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "Toda m\xE1scara facial completa" },
    { categoria: "Compatibilidad", label: "Traje", valor: "Solape con cuello de traje NFPA 1971" },
    { categoria: "Uso", label: "Tallas disponibles", valor: "Universal / Est\xE1ndar / XL" },
    { categoria: "Uso", label: "Vida \xFAtil recomendada", valor: "Seg\xFAn protocolo NFPA 1851" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 (edici\xF3n vigente)" },
    { categoria: "Certificaci\xF3n", label: "Protecci\xF3n adicional", valor: "Bloqueo de part\xEDculas (particulate blocking)" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const catClass = {
    "Material": "material",
    "Protecci\xF3n T\xE9rmica": "proteccion",
    "Bloqueo Part\xEDculas": "bloqueo",
    "Compatibilidad": "compatibilidad",
    "Uso": "uso",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Protocolo de Reducci\xF3n de Exposici\xF3n",
      desc: "Corporaciones que implementan protocolos de reducci\xF3n de exposici\xF3n a carcin\xF3genos del humo. La capucha particulada es el primer paso en la protecci\xF3n d\xE9rmica de cabeza y cuello \u2014 la zona m\xE1s permeable."
    },
    {
      titulo: "Prevenci\xF3n Oncol\xF3gica Ocupacional",
      desc: "Los bomberos tienen tasas significativamente m\xE1s altas de ciertos tipos de c\xE1ncer. La membrana particulada bloquea la absorci\xF3n de benceno, HAPs y formaldeh\xEDdo a trav\xE9s de la piel del cuello y la nuca durante y despu\xE9s del combate."
    },
    {
      titulo: "Overhaul y Post-Incendio",
      desc: "Las fases de overhaul y revisi\xF3n post-incendio generan humo con alta concentraci\xF3n de part\xEDculas t\xF3xicas. La capucha particulada protege durante estas operaciones donde muchos bomberos retiran el SCBA prematuramente."
    },
    {
      titulo: "Combate Estructural con Protecci\xF3n Mejorada",
      desc: "Mismo rendimiento que una capucha Nomex\xAE est\xE1ndar en protecci\xF3n t\xE9rmica NFPA 1971, con la capa adicional de bloqueo de part\xEDculas para reducir la carga t\xF3xica acumulativa a lo largo de la carrera del bombero."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 los bomberos necesitan protecci\xF3n contra part\xEDculas?",
      a: "Estudios de la IARC (Agencia Internacional de Investigaci\xF3n del C\xE1ncer) clasifican la exposici\xF3n ocupacional del bombero como 'cancer\xEDgena para humanos' (Grupo 1). El humo de incendio contiene benceno, formaldeh\xEDdo, HAPs y otros carcin\xF3genos que penetran la piel \u2014 especialmente en la zona del cuello, que es altamente vascularizada y permeable. La capucha particulada bloquea estas part\xEDculas antes de que lleguen a la piel."
    },
    {
      q: "\xBFLa capucha particulada protege igual que una Nomex\xAE est\xE1ndar contra el fuego?",
      a: "S\xED. La capa exterior es Nomex\xAE IIIA certificado NFPA 1971, id\xE9ntica a la de una capucha est\xE1ndar. La membrana de bloqueo de part\xEDculas es una capa adicional interior que no compromete la protecci\xF3n t\xE9rmica. Es protecci\xF3n t\xE9rmica NFPA 1971 + bloqueo de carcin\xF3genos en una sola prenda."
    },
    {
      q: "\xBFLa membrana de part\xEDculas se degrada con los lavados?",
      a: "La membrana de bloqueo de part\xEDculas mantiene su eficacia durante la vida \xFAtil de la capucha cuando se sigue el protocolo de lavado de NFPA 1851 (agua tibia, detergente neutro, sin blanqueador). La descontaminaci\xF3n post-incendio es crucial: una capucha contaminada que no se lava adecuadamente sigue exponiendo al bombero a toxinas."
    },
    {
      q: "\xBFQu\xE9 departamentos ya usan capuchas particuladas?",
      a: "Departamentos de bomberos en Estados Unidos, Canad\xE1, Australia y Europa han adoptado la capucha particulada como parte de sus protocolos de reducci\xF3n de exposici\xF3n a carcin\xF3genos. En M\xE9xico, corporaciones con protocolos avanzados de salud ocupacional ya las incorporan como est\xE1ndar."
    },
    {
      q: "\xBFLa capucha es m\xE1s gruesa o inc\xF3moda que la est\xE1ndar?",
      a: "La doble capa (Nomex\xAE + membrana) aumenta ligeramente el grosor pero no afecta la comodidad ni la compatibilidad con casco y SCBA. El dise\xF1o ergon\xF3mico est\xE1 optimizado para que el bombero no note diferencia significativa en ajuste ni movilidad respecto a una capucha de capa simple."
    },
    {
      q: "\xBFIncluye documentaci\xF3n para licitaciones gubernamentales?",
      a: "S\xED. Cada capucha particulada incluye ficha t\xE9cnica con especificaciones de ambas capas (Nomex\xAE + membrana particulada), certificado de laboratorio NFPA 1971 y documentaci\xF3n de bloqueo de part\xEDculas \u2014 documentaci\xF3n completa para procesos de licitaci\xF3n en los 32 estados de M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Capucha Nomex\xAE Estructural",
      badge: "NFPA 1971",
      description: "Est\xE1ndar de protecci\xF3n cef\xE1lica con Nomex\xAE IIIA. Resistencia inherente a la llama para combate estructural certificado.",
      href: "/productos/capuchas-para-bomberos/nomex",
      buttonText: "Capucha Nomex\xAE",
      image: IMAGE
    },
    {
      title: "Capucha PBI Gold\xAE Premium",
      badge: "NFPA 1971",
      description: "M\xE1ximo rendimiento t\xE9rmico con mezcla PBI Gold\xAE/Nomex\xAE. No arde ni funde, ideal para combate interior agresivo.",
      href: "/productos/capuchas-para-bomberos/pbi",
      buttonText: "Capucha PBI Gold\xAE",
      image: IMAGE
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n cef\xE1lica certificada. La capucha particulada complementa al casco protegiendo cuello y nuca contra calor y carcin\xF3genos.",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. El pu\xF1o de la capucha solapa con el cuello del traje para protecci\xF3n t\xE9rmica y contra part\xEDculas completa.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Capucha Nomex\xAE Estructural", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi" },
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
    { label: "Capa exterior", valor: "Nomex\xAE IIIA" },
    { label: "Capa interior", valor: "Membrana PM2.5" },
    { label: "Bloqueo", valor: "Part\xEDculas PM2.5" },
    { label: "Carcin\xF3genos", valor: "Benceno, HAPs" },
    { label: "Lavable", valor: "S\xED \u2014 NFPA 1851" },
    { label: "Compatibilidad", valor: "Todo casco/SCBA" },
    { label: "Cobertura", valor: "360\xB0 cabeza/cuello" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "PM2.5", desc: "Bloqueo de part\xEDculas ultrafinas" },
    { code: "ASTM D6413", desc: "Resistencia vertical a la llama" },
    { code: "NFPA 1851", desc: "Protocolo de descontaminaci\xF3n y cuidado" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para ensayos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Capucha Particulada NFPA 1971 \u2014 Bloqueo PM2.5 | BOMBERO.MX", "description": "Capucha particulada certificada NFPA 1971 con membrana de bloqueo de part\xEDculas PM2.5 y carcin\xF3genos del humo. Protecci\xF3n t\xE9rmica + reducci\xF3n de exposici\xF3n d\xE9rmica. Compatible con todo casco y SCBA. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "capucha particulada bombero",
    "capucha anti carcin\xF3genos bombero",
    "monja particulada NFPA 1971",
    "capucha bloqueo part\xEDculas PM2.5",
    "capucha bombero protecci\xF3n c\xE1ncer",
    "capucha particulada M\xE9xico",
    "comprar capucha particulada bombero",
    "capucha bombero reducci\xF3n exposici\xF3n"
  ], "canonical": "/productos/capuchas-para-bomberos/particulada", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Capuchas para Bombero", href: "/productos/capuchas-para-bomberos" },
    { label: "Capucha Particulada PM2.5" }
  ], "heroBadge": "Capucha Particulada \xB7 NFPA 1971 \xB7 Bloqueo PM2.5", "heroTitle": "Capucha Particulada", "heroTitleHighlight": "Bloqueo de Carcin\xF3genos PM2.5", "heroSubtitle": "Protecci\xF3n t\xE9rmica NFPA 1971 + membrana de bloqueo de part\xEDculas carcin\xF3genas del humo. Reduce la absorci\xF3n d\xE9rmica de benceno, HAPs y formaldeh\xEDdo en la zona de cabeza y cuello \u2014 la m\xE1s permeable del cuerpo. El primer paso en el protocolo de reducci\xF3n de exposici\xF3n del bombero.", "heroSeoBlocks": [
    {
      title: "Capucha Particulada NFPA 1971 \u2014 Protecci\xF3n contra Carcin\xF3genos del Humo",
      text: "La IARC clasifica la exposici\xF3n ocupacional del bombero como <strong>cancer\xEDgena para humanos (Grupo 1)</strong>. La <strong>capucha particulada</strong> a\xF1ade una membrana de bloqueo de part\xEDculas PM2.5 a la protecci\xF3n t\xE9rmica est\xE1ndar NFPA 1971 \u2014 reduciendo la absorci\xF3n d\xE9rmica de toxinas en la zona m\xE1s vulnerable. En <strong>BOMBERO.MX</strong> distribuimos capuchas particuladas certificadas para los <strong>32 estados de M\xE9xico</strong>."
    },
    {
      title: "Doble Protecci\xF3n: T\xE9rmica + Bloqueo de Part\xEDculas en Una Sola Prenda",
      text: "La <strong>capucha particulada</strong> combina la capa exterior de <strong>Nomex\xAE IIIA certificado NFPA 1971</strong> con una membrana interior de bloqueo de part\xEDculas que filtra contaminantes ultrafinos (PM2.5). Cada capucha incluye <strong>ficha t\xE9cnica y certificado de laboratorio</strong> con documentaci\xF3n de ambas funciones \u2014 lista para <strong>licitaciones gubernamentales</strong>."
    }
  ], "ctaBarQuote": "Cotizar Capucha Particulada para Bombero", "productoCategoria": "Capucha / Monja de Bombero", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "PM2.5" },
    { modifier: "solas", text: "Anti-carcin\xF3genos" }
  ], "productoTitle": "Capucha Particulada", "productoTitleSub": "NFPA 1971 + Bloqueo PM2.5", "productoDesc": "Capucha de doble capa con protecci\xF3n t\xE9rmica NFPA 1971 y membrana interior de bloqueo de part\xEDculas PM2.5 y carcin\xF3genos del humo. Reduce la absorci\xF3n d\xE9rmica de benceno, HAPs y formaldeh\xEDdo en la zona de cabeza y cuello. Compatible con todo casco y SCBA. Lavable y descontaminable.", "productoFeatures": [
    "Capa exterior Nomex\xAE IIIA certificada NFPA 1971",
    "Membrana interior de bloqueo de part\xEDculas PM2.5",
    "Reduce absorci\xF3n d\xE9rmica de carcin\xF3genos del humo",
    "Compatible con todo casco NFPA y m\xE1scara SCBA",
    "Lavable con protocolo de descontaminaci\xF3n NFPA 1851",
    "Certificado de laboratorio NFPA 1971 incluido"
  ], "productoAppTags": [
    "Reducci\xF3n de exposici\xF3n",
    "Prevenci\xF3n oncol\xF3gica",
    "Combate estructural",
    "Overhaul post-incendio",
    "Protocolo de salud"
  ], "gallery": [
    { src: "/images/directorio/capucha-bombero-nomex-01.avif", alt: "Capucha particulada NFPA 1971 con bloqueo PM2.5" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bomberos en incendio estructural con protecci\xF3n particulada" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo EPP con capucha particulada" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con EPP y capucha particulada" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales con protecci\xF3n contra carcin\xF3genos" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Equipo de protecci\xF3n personal completo" }
  ], "capasEyebrow": "Anatom\xEDa de la Capucha", "capasTitle": "Sistema de Doble Capa: T\xE9rmica + Particulada", "capasDesc": "La capucha particulada integra dos niveles de protecci\xF3n en una sola prenda: la barrera t\xE9rmica Nomex\xAE NFPA 1971 y la membrana de bloqueo de part\xEDculas carcin\xF3genas del humo.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. La capucha particulada cumple NFPA 1971 en protecci\xF3n t\xE9rmica y a\xF1ade el bloqueo de part\xEDculas como funci\xF3n adicional.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa la Capucha Particulada?", "aplicacionesContent": "<p>La <strong>capucha particulada NFPA 1971</strong> se recomienda para toda corporaci\xF3n que implemente protocolos de <strong>reducci\xF3n de exposici\xF3n a carcin\xF3genos</strong> del humo de incendio. Es el mismo rendimiento t\xE9rmico que una capucha Nomex\xAE est\xE1ndar con la protecci\xF3n adicional contra part\xEDculas t\xF3xicas.</p><p>La zona de cabeza y cuello es una de las m\xE1s permeables del cuerpo humano. Protegerla contra la absorci\xF3n d\xE9rmica de toxinas del humo es una medida de <strong>prevenci\xF3n oncol\xF3gica ocupacional</strong> respaldada por la evidencia cient\xEDfica.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "NFPA 1971 + Bloqueo de Part\xEDculas \u2014 Protecci\xF3n Integral", "certsDesc": "La <strong>capucha particulada</strong> cumple todos los requisitos de <strong>NFPA 1971</strong> para protecci\xF3n t\xE9rmica estructural y a\xF1ade la funci\xF3n de <strong>bloqueo de part\xEDculas PM2.5</strong>. La IARC clasifica la exposici\xF3n del bombero como cancer\xEDgena (Grupo 1) \u2014 esta capucha es parte de la respuesta.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/capuchas-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Capucha Particulada para Bombero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre el bloqueo de part\xEDculas, carcin\xF3genos del humo, descontaminaci\xF3n y certificaci\xF3n NFPA 1971.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa con especificaciones de la membrana particulada y certificado de laboratorio NFPA 1971.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La capucha particulada es parte del protocolo de reducci\xF3n de exposici\xF3n. Complementa con el resto del EPP certificado NFPA para protecci\xF3n integral.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/particulada/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/particulada/index.astro";
const $$url = "/productos/capuchas-para-bomberos/particulada";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
