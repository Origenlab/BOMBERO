import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/camion-bomberos-aeropuerto-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Construcci\xF3n Multicapa Nomex\xAE/Kevlar\xAE",
      descripcion: "Las orejeras ARFF utilizan construcci\xF3n de m\xFAltiples capas: exterior de Nomex\xAE IIIA para resistencia a llama, intermedia de Kevlar\xAE para protecci\xF3n bal\xEDstica/abrasi\xF3n, y forro interior de algod\xF3n FR para comodidad. Esta combinaci\xF3n proporciona protecci\xF3n t\xE9rmica superior espec\xEDfica para radiaci\xF3n de combustible de aviaci\xF3n.",
      specs: [
        { label: "Capa exterior", valor: "Nomex\xAE IIIA 7.5 oz/yd\xB2" },
        { label: "Capa intermedia", valor: "Kevlar\xAE 4 oz/yd\xB2" },
        { label: "Forro interior", valor: "Algod\xF3n FR" },
        { label: "Capas totales", valor: "3\u20134 dependiendo modelo" }
      ],
      color: "fire"
    },
    {
      num: "02",
      titulo: "Protecci\xF3n Auditiva Integrada NRR 24 dB",
      descripcion: "Las orejeras incorporan protecci\xF3n auditiva certificada NRR 24 dB (Noise Reduction Rating) para atenuar el ruido extremo de turbinas de aeronaves (130-140 dB) a niveles seguros. Los insertos de espuma de celda cerrada son reemplazables y no interfieren con comunicaci\xF3n por radio.",
      specs: [
        { label: "Atenuaci\xF3n", valor: "NRR 24 dB certificada" },
        { label: "Material", valor: "Espuma celda cerrada" },
        { label: "Insertos", valor: "Reemplazables" },
        { label: "Radio", valor: "Compatible \u2014 no bloquea" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Sistema Desmontable para Mantenimiento",
      descripcion: "Las orejeras se fijan al casco mediante sistema de clips o velcro que permite desmontarlas f\xE1cilmente para limpieza, inspecci\xF3n y reemplazo. Despu\xE9s de cada uso en incendio, las orejeras pueden lavarse seg\xFAn protocolo de descontaminaci\xF3n sin afectar el casco base.",
      specs: [
        { label: "Fijaci\xF3n", valor: "Clips + velcro dual" },
        { label: "Desmontaje", valor: "Sin herramientas" },
        { label: "Lavable", valor: "S\xED \u2014 ciclo suave 40\xB0C" },
        { label: "Refacci\xF3n", valor: "Disponible original" }
      ],
      color: "ember"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Capa exterior", valor: "Nomex\xAE IIIA 7.5 oz/yd\xB2" },
    { categoria: "Construcci\xF3n", label: "Capa intermedia", valor: "Kevlar\xAE 4 oz/yd\xB2" },
    { categoria: "Construcci\xF3n", label: "Forro interior", valor: "Algod\xF3n FR o Nomex\xAE comfort" },
    { categoria: "Construcci\xF3n", label: "Capas totales", valor: "3\u20134 capas termosoldadas" },
    { categoria: "Protecci\xF3n", label: "Cobertura", valor: "Orejas + laterales cara + cuello" },
    { categoria: "Protecci\xF3n", label: "Resistencia t\xE9rmica", valor: "Igual a traje NFPA 1971" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n impacto", valor: "Kevlar\xAE anticorte/abrasi\xF3n" },
    { categoria: "Auditiva", label: "NRR", valor: "24 dB certificada" },
    { categoria: "Auditiva", label: "Material inserto", valor: "Espuma celda cerrada" },
    { categoria: "Auditiva", label: "Insertos", valor: "Reemplazables" },
    { categoria: "Auditiva", label: "Frecuencias atenuadas", valor: "Turbinas, impactos, sirenas" },
    { categoria: "Sistema", label: "Fijaci\xF3n al casco", valor: "Clips met\xE1licos + velcro" },
    { categoria: "Sistema", label: "Desmontaje", valor: "Sin herramientas \u2014 30 seg" },
    { categoria: "Sistema", label: "Compatibilidad radio", valor: "S\xED \u2014 no bloquea comunicaci\xF3n" },
    { categoria: "Mantenimiento", label: "Lavable", valor: "S\xED \u2014 m\xE1quina 40\xB0C ciclo suave" },
    { categoria: "Mantenimiento", label: "Secado", valor: "Aire \u2014 no secadora" },
    { categoria: "Mantenimiento", label: "Refacci\xF3n disponible", valor: "S\xED \u2014 kit original fabricante" },
    { categoria: "Certificaci\xF3n", label: "Norma auditiva", valor: "ANSI S3.19 / EN 352-6" },
    { categoria: "Certificaci\xF3n", label: "Sistema casco", valor: "NFPA 1971 conjunto" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Auditiva": "proteccion",
    "Sistema": "ergonomia",
    "Mantenimiento": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Protecci\xF3n en Operaciones con Turbinas Activas",
      desc: "Los motores de turbina de aeronaves producen ruido de 130-140 dB durante operaci\xF3n. Durante rescate con turbinas funcionando o apag\xE1ndose, la exposici\xF3n puede causar da\xF1o auditivo permanente. Las orejeras NRR 24 dB reducen la exposici\xF3n a niveles seguros."
    },
    {
      titulo: "Protecci\xF3n T\xE9rmica Facial Extendida",
      desc: "Las orejeras extienden la protecci\xF3n t\xE9rmica del casco a zonas vulnerables: orejas, laterales del rostro y cuello superior. En incendios de jet fuel, estas zonas est\xE1n expuestas a radiaci\xF3n intensa si solo se usa el casco b\xE1sico."
    },
    {
      titulo: "Comunicaci\xF3n por Radio en Pista",
      desc: "Las orejeras est\xE1n dise\xF1adas para no bloquear la comunicaci\xF3n por radio. El bombero puede usar radio port\xE1til o sistema integrado en el casco mientras mantiene protecci\xF3n auditiva. Cr\xEDtico para coordinaci\xF3n en operaciones ARFF."
    },
    {
      titulo: "Descontaminaci\xF3n Post-Incendio",
      desc: "Despu\xE9s de operaciones ARFF, las orejeras pueden acumular contaminantes del humo de combustible. El sistema desmontable permite lavarlas seg\xFAn protocolo de descontaminaci\xF3n sin afectar el casco base ni otros componentes."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 las orejeras ARFF son m\xE1s gruesas que las de cascos estructurales est\xE1ndar?",
      a: "Las orejeras ARFF tienen <strong>construcci\xF3n multicapa</strong> adicional porque enfrentan amenazas espec\xEDficas del entorno aeroportuario: (1) <strong>Radiaci\xF3n t\xE9rmica extrema</strong> de incendios de jet fuel que requiere m\xE1s aislamiento. (2) <strong>Ruido de turbinas</strong> (130-140 dB) que requiere protecci\xF3n auditiva integrada. (3) <strong>Exposici\xF3n a combustible</strong> que requiere materiales resistentes a hidrocarburos. Las orejeras estructurales est\xE1ndar no abordan todas estas amenazas."
    },
    {
      q: "\xBFLa protecci\xF3n auditiva NRR 24 dB es suficiente para turbinas?",
      a: "Reduce la exposici\xF3n a niveles seguros para <strong>exposici\xF3n temporal</strong>. Las turbinas producen 130-140 dB; con NRR 24 dB, la exposici\xF3n efectiva es 106-116 dB \u2014 todav\xEDa alto pero seguro para las <strong>duraciones cortas</strong> de operaciones ARFF. Para exposici\xF3n prolongada (personal de rampa, mec\xE1nicos), se requiere protecci\xF3n auditiva adicional. Las orejeras ARFF son para <strong>emergencias</strong>, no exposici\xF3n continua."
    },
    {
      q: "\xBFLas orejeras bloquean la comunicaci\xF3n por radio?",
      a: "<strong>No</strong>. Las orejeras ARFF est\xE1n dise\xF1adas para atenuar frecuencias de ruido industrial (turbinas, impactos) mientras permiten pasar frecuencias de <strong>voz humana y radio</strong>. El bombero puede comunicarse y recibir instrucciones mientras lleva las orejeras. Algunos modelos incluyen <strong>bolsillos para auriculares</strong> de radio integrado."
    },
    {
      q: "\xBFCada cu\xE1nto debo lavar las orejeras ARFF?",
      a: "Las orejeras deben <strong>lavarse despu\xE9s de cada incendio</strong> que involucre combustible de aviaci\xF3n o humo denso. El humo de jet fuel contiene contaminantes que pueden degradar los materiales y son t\xF3xicos para la piel. Lavar en <strong>ciclo suave 40\xB0C</strong> con detergente neutro. Secar al aire \u2014 <strong>no usar secadora</strong>."
    },
    {
      q: "\xBFPuedo usar las orejeras ARFF en un casco estructural normal?",
      a: "Generalmente <strong>no son compatibles</strong>. Las orejeras ARFF est\xE1n dise\xF1adas para el sistema de montaje espec\xEDfico de cascos ARFF (diferentes clips y geometr\xEDa). Intentar adaptarlas a otro casco puede comprometer el ajuste, la seguridad y la certificaci\xF3n. Usar orejeras <strong>dise\xF1adas para cada tipo de casco</strong>."
    },
    {
      q: "\xBFCu\xE1ndo debo reemplazar las orejeras completas vs solo los insertos?",
      a: "Reemplazar <strong>insertos de espuma</strong> cuando: est\xE1n comprimidos permanentemente, saturados de sudor o contaminantes, o da\xF1ados. Reemplazar <strong>orejeras completas</strong> cuando: el Nomex\xAE/Kevlar\xAE muestra desgaste, quemaduras o degradaci\xF3n; las costuras est\xE1n deshilachadas; los clips de fijaci\xF3n est\xE1n da\xF1ados; o despu\xE9s del <strong>tiempo de vida del casco</strong> (10 a\xF1os t\xEDpico)."
    }
  ];
  const relacionados = [
    {
      title: "Casco ARFF Sistema Completo",
      badge: "ARFF",
      description: "Sistema completo con orejeras t\xE9rmicas incluidas, visor dorado y protector de nuca.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo",
      buttonText: "Ver Sistema Completo",
      image: IMAGE
    },
    {
      title: "Protector de Nuca ARFF",
      badge: "ARFF",
      description: "Protector de nuca aluminizado extendido para protecci\xF3n cervical completa.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo",
      buttonText: "Ver Sistema Nuca",
      image: IMAGE
    },
    {
      title: "Capucha Nomex\xAE NFPA 1971",
      badge: "NFPA 1971",
      description: "Capucha estructural certificada para protecci\xF3n de cabeza y cuello bajo casco.",
      href: "/productos/capuchas-para-bomberos/nomex",
      buttonText: "Ver Capucha",
      image: "/images/directorio/equipo-proteccion-bomberos-01.avif"
    },
    {
      title: "Capucha PBI Gold\xAE Premium",
      badge: "Premium",
      description: "Capucha premium PBI Gold\xAE para m\xE1xima protecci\xF3n t\xE9rmica de cabeza y cuello.",
      href: "/productos/capuchas-para-bomberos/pbi",
      buttonText: "Ver Capucha PBI",
      image: "/images/directorio/equipo-proteccion-bomberos-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo" },
    { label: "Shell Aluminizado 85%+", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/shell-aluminizado" },
    { label: "Visor Dorado Filtro IR", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado" },
    { label: "Linterna LED Integrada", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/linterna-integrada" },
    { label: "Certificaciones Aeroportuarias", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje ARFF Aluminizado", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cuerpo" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Guantes ARFF", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Protecci\xF3n Auditiva en ARFF", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Descontaminaci\xF3n EPP ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Ruido de Turbinas y Salud", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Refacciones Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Mantenimiento Orejeras", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" }
  ];
  const directorioLinks = [
    { label: "Bomberos Aeropuerto AICM", href: "/directorio/ciudad-de-mexico/estacion-aeropuerto-aicm" },
    { label: "Bomberos Aeropuerto Canc\xFAn", href: "/directorio/quintana-roo/estacion-bomberos-aeropuerto-cancun" },
    { label: "Bomberos Aeropuerto Guadalajara", href: "/directorio/jalisco/estacion-bomberos-aeropuerto-guadalajara" },
    { label: "Bomberos Aeropuerto Monterrey", href: "/directorio/nuevo-leon" },
    { label: "Bomberos Aeropuerto Tijuana", href: "/directorio/baja-california" },
    { label: "Directorio Nacional", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Material ext.", valor: "Nomex\xAE IIIA 7.5 oz" },
    { label: "Material int.", valor: "Kevlar\xAE + FR cotton" },
    { label: "NRR", valor: "24 dB certificada" },
    { label: "Cobertura", valor: "Orejas + cara + cuello" },
    { label: "Sistema", valor: "Desmontable clips" },
    { label: "Lavable", valor: "S\xED \u2014 40\xB0C suave" },
    { label: "Radio", valor: "Compatible" },
    { label: "Refacci\xF3n", valor: "Disponible" }
  ];
  const certItems = [
    { code: "NRR 24 dB", desc: "Protecci\xF3n auditiva certificada ANSI S3.19" },
    { code: "Nomex\xAE IIIA", desc: "Resistencia a llama exterior" },
    { code: "Kevlar\xAE", desc: "Protecci\xF3n intermedia anticorte" },
    { code: "EN 352-6", desc: "Protectores auditivos dependientes nivel" },
    { code: "NFPA 1971", desc: "Certificaci\xF3n como parte del sistema" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco ARFF \u2014 Orejeras T\xE9rmicas Desmontables | BOMBERO.MX", "description": "Orejeras t\xE9rmicas Nomex\xAE/Kevlar\xAE para casco ARFF. Protecci\xF3n auditiva NRR 24 dB, desmontables para limpieza. Compatible con radio comunicaci\xF3n. Para servicios ARFF en aeropuertos.", "keywords": [
    "orejeras ARFF t\xE9rmicas",
    "orejeras casco bombero aeropuerto",
    "proteccion auditiva ARFF",
    "orejeras Nomex Kevlar",
    "orejeras desmontables casco",
    "proteccion orejas bombero",
    "orejeras NRR 24",
    "comprar orejeras casco ARFF"
  ], "canonical": "/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco ARFF Aeroportuario", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario" },
    { label: "Orejeras T\xE9rmicas" }
  ], "heroBadge": "Orejeras ARFF \xB7 Nomex\xAE/Kevlar\xAE \xB7 NRR 24 dB", "heroTitle": "Casco ARFF con", "heroTitleHighlight": "Orejeras T\xE9rmicas Desmontables", "heroSubtitle": "Orejeras de construcci\xF3n multicapa Nomex\xAE/Kevlar\xAE con protecci\xF3n auditiva integrada NRR 24 dB. Protegen orejas, laterales del rostro y cuello de radiaci\xF3n t\xE9rmica y ruido de turbinas. Sistema desmontable para limpieza y descontaminaci\xF3n post-incendio.", "heroSeoBlocks": [
    {
      title: "Protecci\xF3n T\xE9rmica y Auditiva en Un Solo Componente",
      text: "Las orejeras ARFF combinan <strong>protecci\xF3n t\xE9rmica multicapa</strong> (Nomex\xAE + Kevlar\xAE + FR cotton) con <strong>protecci\xF3n auditiva NRR 24 dB</strong> certificada. Protegen de la radiaci\xF3n extrema de jet fuel mientras aten\xFAan el ruido de turbinas (130-140 dB) a niveles seguros."
    },
    {
      title: "Desmontables para Descontaminaci\xF3n",
      text: "El <strong>sistema de clips</strong> permite desmontar las orejeras en segundos para lavado seg\xFAn protocolo de <strong>descontaminaci\xF3n post-incendio</strong>. El humo de combustible de aviaci\xF3n contiene carcin\xF3genos que deben removerse del EPP despu\xE9s de cada uso."
    }
  ], "ctaBarQuote": "Cotizar Casco ARFF con Orejeras", "productoCategoria": "Orejeras ARFF", "productoBadges": [
    { modifier: "nfpa", text: "Nomex\xAE" },
    { modifier: "tpp", text: "NRR 24 dB" },
    { modifier: "solas", text: "Desmontable" }
  ], "productoMasVendido": false, "productoTitle": "Orejeras T\xE9rmicas ARFF", "productoTitleSub": "Nomex\xAE/Kevlar\xAE con Protecci\xF3n Auditiva", "productoDesc": "Orejeras de construcci\xF3n multicapa: exterior Nomex\xAE IIIA 7.5 oz, intermedia Kevlar\xAE 4 oz, forro algod\xF3n FR. Protecci\xF3n auditiva NRR 24 dB con insertos reemplazables. Sistema desmontable de clips para lavado. Compatible con radio comunicaci\xF3n.", "productoFeatures": [
    "Construcci\xF3n Nomex\xAE + Kevlar\xAE multicapa",
    "Protecci\xF3n auditiva NRR 24 dB",
    "Cobertura orejas + cara + cuello",
    "Desmontables para descontaminaci\xF3n",
    "Compatible con radio comunicaci\xF3n",
    "Insertos auditivos reemplazables"
  ], "productoAppTags": [
    "Turbinas aeronaves",
    "Radiaci\xF3n t\xE9rmica",
    "Descontaminaci\xF3n",
    "Radio comunicaci\xF3n",
    "ARFF aeropuertos"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "Casco ARFF con orejeras t\xE9rmicas" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero ARFF usando orejeras" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP ARFF completo" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con orejeras ARFF" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Orejeras en operaci\xF3n" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Equipo ARFF con orejeras" }
  ], "capasEyebrow": "Construcci\xF3n Multicapa", "capasTitle": "Componentes de las Orejeras", "capasDesc": "Tres capas de protecci\xF3n t\xE9rmica m\xE1s sistema de protecci\xF3n auditiva integrado, todo desmontable para mantenimiento.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Orejeras ARFF", "specsDesc": "Orejeras con protecci\xF3n t\xE9rmica y auditiva certificadas como parte del sistema de casco NFPA 1971.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFPor Qu\xE9 Orejeras ARFF Especializadas?", "aplicacionesContent": "<p>El entorno aeroportuario presenta amenazas \xFAnicas: <strong>radiaci\xF3n t\xE9rmica extrema</strong> de jet fuel y <strong>ruido de turbinas</strong> de 130-140 dB. Las orejeras ARFF abordan ambas amenazas.</p><p>El sistema <strong>desmontable</strong> permite descontaminaci\xF3n adecuada del EPP despu\xE9s de operaciones con combustible de aviaci\xF3n.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "Protecci\xF3n Auditiva Certificada NRR 24 dB", "certsDesc": "La protecci\xF3n auditiva cumple <strong>ANSI S3.19</strong> con NRR (Noise Reduction Rating) de 24 dB verificado. Las orejeras son parte del sistema <strong>NFPA 1971</strong> certificado.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Orejeras ARFF", "faqDescription": "Dudas frecuentes sobre protecci\xF3n auditiva, materiales, compatibilidad con radio, limpieza y reemplazo.", "faqDocTitle": "Refacciones Disponibles", "faqDocDesc": "Solicita orejeras de repuesto e insertos auditivos de refacci\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Refacci\xF3n", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "Protecci\xF3n Completa de Cabeza ARFF", "relacionadosDesc": "Las orejeras son parte del sistema de protecci\xF3n de cabeza ARFF. Complete con visor dorado y protector de nuca.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
