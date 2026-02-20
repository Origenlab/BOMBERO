import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/capucha-bombero-nomex-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Tejido Exterior \u2014 PBI Gold\xAE + Nomex\xAE",
      descripcion: "Mezcla de alto rendimiento PBI Gold\xAE (polibenzimidazol) con Nomex\xAE para m\xE1xima protecci\xF3n t\xE9rmica. El PBI Gold\xAE no arde, no se derrite, no se encoge y no se carboniza ante llama directa. Supera al Nomex\xAE est\xE1ndar en resistencia t\xE9rmica y retenci\xF3n de integridad bajo exposici\xF3n extrema \u2014 la opci\xF3n premium para bomberos de combate interior agresivo.",
      specs: [
        { label: "Material", valor: "PBI Gold\xAE / Nomex\xAE (mezcla 40/60)" },
        { label: "Peso del tejido", valor: "5.0 \u2013 6.0 oz/yd\xB2" },
        { label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente" },
        { label: "Carbonizaci\xF3n", valor: "No carboniza ante llama directa" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Refuerzo T\xE9rmico \u2014 Barrera de Calor Adicional",
      descripcion: "La mezcla PBI Gold\xAE/Nomex\xAE ofrece una barrera t\xE9rmica significativamente superior al Nomex\xAE est\xE1ndar. En pruebas de laboratorio, el PBI Gold\xAE retiene m\xE1s del 90 % de su resistencia a la tracci\xF3n despu\xE9s de exposici\xF3n a 260 \xB0C durante 5 minutos \u2014 donde otros tejidos pierden integridad. Esta superioridad t\xE9rmica proporciona segundos adicionales de protecci\xF3n en escenarios de flash-over.",
      specs: [
        { label: "Retenci\xF3n resistencia", valor: "> 90 % tras 260 \xB0C / 5 min" },
        { label: "Estabilidad dimensional", valor: "< 3 % encogimiento post-exposici\xF3n" },
        { label: "Protecci\xF3n flash-over", valor: "Tiempo adicional vs Nomex\xAE est\xE1ndar" },
        { label: "LOI (\xEDndice ox\xEDgeno)", valor: "> 41 % (PBI Gold\xAE)" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Corte Ergon\xF3mico \u2014 Ajuste para Combate Interior",
      descripcion: "Patr\xF3n de corte optimizado para combate interior agresivo: cobertura total de cuello, nuca, ment\xF3n, orejas y frente sin restricci\xF3n de movimiento. El ajuste facial permite el uso continuo con m\xE1scara SCBA durante operaciones prolongadas. El pu\xF1o inferior solapa con el cuello del traje estructural para protecci\xF3n de 360\xB0 sin puntos expuestos.",
      specs: [
        { label: "Cobertura", valor: "360\xB0 \u2014 cuello, nuca, ment\xF3n, orejas, frente" },
        { label: "Abertura facial", valor: "Optimizada para m\xE1scara SCBA" },
        { label: "El\xE1stico", valor: "Doble banda de alta retenci\xF3n" },
        { label: "Pu\xF1o inferior", valor: "Solape extendido con cuello del traje" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Tejido principal", valor: "PBI Gold\xAE / Nomex\xAE (mezcla 40/60)" },
    { categoria: "Material", label: "Peso del tejido", valor: "5.0 \u2013 6.0 oz/yd\xB2" },
    { categoria: "Material", label: "Hilo de costura", valor: "100 % Nomex\xAE / PBI resistente a la llama" },
    { categoria: "Material", label: "Color del tejido", valor: "Dorado natural PBI Gold\xAE" },
    { categoria: "Protecci\xF3n", label: "Resistencia a la llama", valor: "ASTM D6413 \u2014 inherente" },
    { categoria: "Protecci\xF3n", label: "LOI (\xEDndice de ox\xEDgeno)", valor: "> 41 % (superior a Nomex\xAE est\xE1ndar)" },
    { categoria: "Protecci\xF3n", label: "Retenci\xF3n de resistencia", valor: "> 90 % tras 260 \xB0C / 5 min" },
    { categoria: "Protecci\xF3n", label: "Carbonizaci\xF3n", valor: "No carboniza \u2014 integridad estructural" },
    { categoria: "Protecci\xF3n", label: "Encogimiento m\xE1ximo", valor: "< 3 % post-exposici\xF3n" },
    { categoria: "Protecci\xF3n", label: "Punto de fusi\xF3n", valor: "No aplica \u2014 el PBI Gold\xAE no funde" },
    { categoria: "Compatibilidad", label: "Casco", valor: "Todo casco NFPA 1971 / 1977 / 1951" },
    { categoria: "Compatibilidad", label: "SCBA", valor: "Toda m\xE1scara facial completa" },
    { categoria: "Compatibilidad", label: "Traje", valor: "Solape con cuello de traje NFPA 1971" },
    { categoria: "Uso", label: "Tallas disponibles", valor: "Universal / Est\xE1ndar / XL" },
    { categoria: "Uso", label: "Lavado", valor: "Lavadora industrial \u2014 detergente neutro" },
    { categoria: "Uso", label: "Vida \xFAtil recomendada", valor: "Seg\xFAn protocolo NFPA 1851" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1971 (edici\xF3n vigente)" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado de laboratorio" }
  ];
  const catClass = {
    "Material": "material",
    "Protecci\xF3n": "proteccion",
    "Compatibilidad": "compatibilidad",
    "Uso": "uso",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Combate Interior Agresivo",
      desc: "Penetraci\xF3n profunda en estructuras incendiadas con llama activa. El PBI Gold\xAE ofrece segundos adicionales de protecci\xF3n ante flash-over donde el Nomex\xAE est\xE1ndar alcanza su l\xEDmite."
    },
    {
      titulo: "Escenarios de Flash-Over",
      desc: "Exposici\xF3n a calor radiante extremo y llamarada s\xFAbita. El PBI Gold\xAE no carboniza ni pierde integridad estructural, manteniendo la barrera de protecci\xF3n cuando m\xE1s se necesita."
    },
    {
      titulo: "Rescate en Estructuras en Colapso",
      desc: "Operaciones de b\xFAsqueda y rescate donde el bombero se expone a temperaturas superiores a las de combate exterior. Mayor margen de seguridad en las condiciones m\xE1s adversas."
    },
    {
      titulo: "Alta Exposici\xF3n T\xE9rmica Prolongada",
      desc: "Operaciones donde el bombero permanece expuesto a calor radiante durante periodos extendidos. La retenci\xF3n de resistencia del PBI Gold\xAE supera el 90 % incluso tras 5 minutos a 260 \xB0C."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 ventaja tiene la capucha PBI Gold\xAE sobre la Nomex\xAE est\xE1ndar?",
      a: "El PBI Gold\xAE ofrece un LOI (\xEDndice de ox\xEDgeno limitante) superior a 41 % frente al ~28 % del Nomex\xAE est\xE1ndar, lo que significa mayor resistencia a la ignici\xF3n. Adem\xE1s, retiene m\xE1s del 90 % de su resistencia a la tracci\xF3n tras exposici\xF3n a 260 \xB0C durante 5 minutos. En la pr\xE1ctica, esto se traduce en segundos adicionales de protecci\xF3n ante un flash-over \u2014 tiempo que puede salvar la vida del bombero."
    },
    {
      q: "\xBFEn qu\xE9 situaciones debo elegir PBI Gold\xAE en lugar de Nomex\xAE?",
      a: "Se recomienda PBI Gold\xAE para bomberos que realizan combate interior agresivo con regularidad, unidades de intervenci\xF3n r\xE1pida, y corporaciones que priorizan el m\xE1ximo nivel de protecci\xF3n disponible. Si el bombero realiza principalmente combate exterior o apoyo, la capucha Nomex\xAE est\xE1ndar cumple con NFPA 1971. Ambas son certificadas."
    },
    {
      q: "\xBFEl color dorado del PBI Gold\xAE tiene alguna funci\xF3n?",
      a: "El tono dorado es el color natural de la fibra PBI Gold\xAE \u2014 no es un tinte. Este color se considera una se\xF1al de calidad premium en el mercado de EPP y permite identificar visualmente que la capucha es PBI Gold\xAE y no Nomex\xAE est\xE1ndar durante la inspecci\xF3n del equipo."
    },
    {
      q: "\xBFLa capucha PBI Gold\xAE es compatible con mi EPP actual?",
      a: "S\xED. La capucha PBI Gold\xAE es compatible con todo casco certificado NFPA 1971, NFPA 1977 y NFPA 1951, y con cualquier m\xE1scara SCBA del mercado. Tiene el mismo patr\xF3n de corte y ajuste que la capucha Nomex\xAE est\xE1ndar \u2014 se integra al sistema EPP sin modificaciones."
    },
    {
      q: "\xBFCu\xE1l es la vida \xFAtil de la capucha PBI Gold\xAE?",
      a: "NFPA 1851 establece un m\xE1ximo de 10 a\xF1os desde la fecha de fabricaci\xF3n. El PBI Gold\xAE mantiene sus propiedades de protecci\xF3n durante toda su vida \xFAtil sin degradaci\xF3n por lavados. Se recomienda inspecci\xF3n regular y reemplazo si presenta da\xF1o visible, adelgazamiento o p\xE9rdida de elasticidad."
    },
    {
      q: "\xBFLa capucha incluye documentaci\xF3n para licitaciones?",
      a: "S\xED. Cada capucha PBI Gold\xAE incluye ficha t\xE9cnica con especificaciones del tejido PBI Gold\xAE/Nomex\xAE, certificado de laboratorio independiente y documentaci\xF3n de cumplimiento NFPA 1971 \u2014 todo lo requerido para licitaciones gubernamentales en los 32 estados de M\xE9xico."
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
      title: "Capucha Particulada PM2.5",
      badge: "NFPA 1971 + PM2.5",
      description: "Membrana interior de bloqueo de part\xEDculas carcin\xF3genas del humo. Protocolo de reducci\xF3n de exposici\xF3n para salud ocupacional.",
      href: "/productos/capuchas-para-bomberos/particulada",
      buttonText: "Capucha Particulada",
      image: IMAGE
    },
    {
      title: "Casco Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Protecci\xF3n cef\xE1lica certificada. La capucha PBI Gold\xAE complementa al casco cubriendo cuello, nuca y orejas.",
      href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971",
      buttonText: "Cascos para Bombero",
      image: "/images/directorio/casco-bombero-proteccion-cabeza-01.avif"
    },
    {
      title: "Traje Estructural NFPA 1971",
      badge: "NFPA 1971",
      description: "Sistema 3 capas certificado. El pu\xF1o de la capucha solapa con el cuello del traje para protecci\xF3n integral sin puntos expuestos.",
      href: "/productos/trajes-para-bomberos/traje-estructural-nfpa-1971",
      buttonText: "Trajes para Bombero",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Capucha Nomex\xAE Estructural", href: "/productos/capuchas-para-bomberos/nomex" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada" },
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
    { label: "Material", valor: "PBI Gold\xAE / Nomex\xAE" },
    { label: "Mezcla", valor: "40/60 PBI/Nomex" },
    { label: "LOI", valor: "> 41 %" },
    { label: "Retenci\xF3n", valor: "> 90 % @ 260 \xB0C" },
    { label: "Fusi\xF3n", valor: "No funde" },
    { label: "Compatibilidad", valor: "Todo casco/SCBA" },
    { label: "Color", valor: "Dorado natural" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Protecci\xF3n estructural \u2014 edici\xF3n vigente" },
    { code: "ASTM D6413", desc: "Resistencia vertical a la llama" },
    { code: "LOI > 41 %", desc: "\xCDndice de ox\xEDgeno limitante superior" },
    { code: "NFPA 1851", desc: "Selecci\xF3n, cuidado y mantenimiento de EPP" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado para ensayos" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Capucha PBI Gold\xAE Premium NFPA 1971 para Bombero | BOMBERO.MX", "description": "Capucha PBI Gold\xAE Premium certificada NFPA 1971 para bomberos. M\xE1ximo rendimiento t\xE9rmico con mezcla PBI Gold\xAE/Nomex\xAE. No arde, no funde, no carboniza. Compatible con todo casco y SCBA. Ficha t\xE9cnica incluida. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "capucha PBI Gold bombero",
    "monja PBI NFPA 1971",
    "capucha bombero premium",
    "capucha PBI Gold Nomex certificada",
    "monja bombero PBI alta protecci\xF3n",
    "capucha bombero flash-over",
    "comprar capucha PBI bombero M\xE9xico",
    "capucha bombero combate interior"
  ], "canonical": "/productos/capuchas-para-bomberos/pbi", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Capuchas para Bombero", href: "/productos/capuchas-para-bomberos" },
    { label: "Capucha PBI Gold\xAE Premium" }
  ], "heroBadge": "Capucha Premium \xB7 PBI Gold\xAE \xB7 NFPA 1971", "heroTitle": "Capucha PBI Gold\xAE", "heroTitleHighlight": "Premium NFPA 1971", "heroSubtitle": "M\xE1ximo rendimiento t\xE9rmico para bomberos de alta exposici\xF3n. La mezcla PBI Gold\xAE/Nomex\xAE no arde, no funde y no carboniza \u2014 retiene m\xE1s del 90 % de su resistencia tras 5 minutos a 260 \xB0C. La opci\xF3n premium para combate interior agresivo y flash-over.", "heroSeoBlocks": [
    {
      title: "Capucha PBI Gold\xAE NFPA 1971 \u2014 La Opci\xF3n Premium para Bomberos en M\xE9xico",
      text: "La <strong>capucha PBI Gold\xAE</strong> es la elecci\xF3n de los cuerpos de bomberos que priorizan el m\xE1ximo nivel de protecci\xF3n disponible. La fibra <strong>PBI (polibenzimidazol)</strong> ofrece un LOI superior a 41 %, estabilidad dimensional excepcional y cero carbonizaci\xF3n ante llama directa. En <strong>BOMBERO.MX</strong> somos distribuidores autorizados de capuchas PBI Gold\xAE certificadas NFPA 1971 para los <strong>32 estados de M\xE9xico</strong>."
    },
    {
      title: "Superioridad T\xE9rmica Verificada en Laboratorio",
      text: "El <strong>PBI Gold\xAE</strong> retiene m\xE1s del 90 % de su resistencia a la tracci\xF3n tras exposici\xF3n a 260 \xB0C durante 5 minutos \u2014 condiciones donde otros tejidos pierden integridad. Esta superioridad se traduce en <strong>segundos adicionales de protecci\xF3n en flash-over</strong>. Cada capucha incluye <strong>ficha t\xE9cnica y certificado de laboratorio</strong> para <strong>licitaciones gubernamentales</strong>."
    }
  ], "ctaBarQuote": "Cotizar Capucha PBI Gold\xAE para Bombero", "productoCategoria": "Capucha / Monja de Bombero", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "PBI Gold\xAE" },
    { modifier: "solas", text: "LOI > 41 %" }
  ], "productoTitle": "Capucha PBI Gold\xAE", "productoTitleSub": "Premium NFPA 1971", "productoDesc": "Capucha de alto rendimiento fabricada en mezcla PBI Gold\xAE/Nomex\xAE (40/60) para bomberos de alta exposici\xF3n t\xE9rmica. No arde, no funde, no carboniza. Retiene m\xE1s del 90 % de su resistencia tras 260 \xB0C. Compatible con todo casco y SCBA. Incluye ficha t\xE9cnica y certificado de laboratorio.", "productoFeatures": [
    "Mezcla PBI Gold\xAE / Nomex\xAE de m\xE1ximo rendimiento",
    "No arde, no funde, no carboniza ante llama directa",
    "LOI > 41 % \u2014 superior al Nomex\xAE est\xE1ndar",
    "Retenci\xF3n > 90 % resistencia a 260 \xB0C / 5 min",
    "Compatible con todo casco NFPA y m\xE1scara SCBA",
    "Certificado de laboratorio NFPA 1971 incluido"
  ], "productoAppTags": [
    "Combate interior agresivo",
    "Flash-over",
    "Rescate en colapso",
    "Alta exposici\xF3n t\xE9rmica",
    "Unidades de intervenci\xF3n r\xE1pida"
  ], "gallery": [
    { src: "/images/directorio/capucha-bombero-nomex-01.avif", alt: "Capucha PBI Gold\xAE premium NFPA 1971" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Bomberos en combate interior con capucha PBI Gold" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo completo EPP bombero con capucha PBI" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento de combate con equipo PBI Gold" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bomberos profesionales en acci\xF3n" },
    { src: "/images/directorio/equipo-proteccion-bomberos-01.avif", alt: "Equipo de protecci\xF3n personal premium" }
  ], "capasEyebrow": "Anatom\xEDa de la Capucha", "capasTitle": "Construcci\xF3n y Tecnolog\xEDa PBI Gold\xAE", "capasDesc": "El PBI Gold\xAE representa la tecnolog\xEDa m\xE1s avanzada en tejidos de protecci\xF3n para bomberos. Su combinaci\xF3n con Nomex\xAE ofrece una barrera t\xE9rmica que supera significativamente al Nomex\xAE est\xE1ndar.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. El PBI Gold\xAE supera los m\xEDnimos exigidos por NFPA 1971 con amplio margen de seguridad.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa la Capucha PBI Gold\xAE?", "aplicacionesContent": "<p>La <strong>capucha PBI Gold\xAE NFPA 1971</strong> se recomienda para bomberos que enfrentan las condiciones m\xE1s extremas de exposici\xF3n t\xE9rmica: combate interior agresivo, flash-over y rescate en estructuras en colapso.</p><p>Su superioridad t\xE9rmica sobre el Nomex\xAE est\xE1ndar proporciona segundos adicionales de protecci\xF3n que pueden marcar la diferencia entre una operaci\xF3n segura y una lesi\xF3n grave.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "PBI Gold\xAE \u2014 El Tejido de Alto Rendimiento Certificado NFPA 1971", "certsDesc": "La <strong>capucha PBI Gold\xAE</strong> cumple todos los requisitos de <strong>NFPA 1971</strong> y los supera con margen significativo. El LOI superior a 41 % (vs ~28 % del Nomex\xAE est\xE1ndar) y la retenci\xF3n de resistencia a alta temperatura la posicionan como la <strong>opci\xF3n premium para bomberos profesionales</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/capuchas-para-bomberos", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre la Capucha PBI Gold\xAE para Bombero", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre PBI Gold\xAE, sus ventajas sobre Nomex\xAE est\xE1ndar, mantenimiento y certificaci\xF3n NFPA 1971.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y el certificado de laboratorio NFPA 1971 de la capucha PBI Gold\xAE.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Protecci\xF3n", "relacionadosDesc": "La capucha PBI Gold\xAE se integra al sistema EPP m\xE1s exigente. Todos los equipos deben ser compatibles y certificados con la misma edici\xF3n de norma NFPA.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/pbi/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/capuchas-para-bomberos/pbi/index.astro";
const $$url = "/productos/capuchas-para-bomberos/pbi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
