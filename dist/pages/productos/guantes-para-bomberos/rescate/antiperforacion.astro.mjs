import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Palma Cuero Sint\xE9tico con Malla Met\xE1lica",
      descripcion: "Capa exterior en cuero sint\xE9tico de alta tenacidad con malla met\xE1lica de acero inoxidable integrada. La malla dispersa la fuerza de objetos punzantes (clavos, agujas, astillas met\xE1licas) a trav\xE9s de una superficie mayor, previniendo perforaciones. Resistencia nivel 4 EN 388 \u2014 la m\xE1s alta disponible.",
      specs: [
        { label: "Material palma", valor: "Cuero sint\xE9tico + malla acero" },
        { label: "Perforaci\xF3n EN 388", valor: "Nivel 4 (m\xE1ximo \u2014 150 N)" },
        { label: "Malla met\xE1lica", valor: "Acero inoxidable 0.3 mm" },
        { label: "Distribuci\xF3n fuerza", valor: "S\xED \u2014 previene punci\xF3n" }
      ],
      color: "smoke"
    },
    {
      num: "02",
      titulo: "Liner Antiperforaci\xF3n Kevlar\xAE + HPPE",
      descripcion: "Segunda barrera: tejido multicapa de Kevlar\xAE y fibra HPPE (polietileno alto rendimiento) en configuraci\xF3n antiperforaci\xF3n. Esta capa secundaria detiene objetos punzantes que atraviesan la primera l\xEDnea de defensa. Tambi\xE9n ofrece resistencia anticorte nivel 3 como protecci\xF3n adicional.",
      specs: [
        { label: "Liner antiperforaci\xF3n", valor: "Kevlar\xAE + HPPE multicapa" },
        { label: "Barrera secundaria", valor: "S\xED \u2014 doble protecci\xF3n" },
        { label: "Anticorte adicional", valor: "Nivel 3 EN 388" },
        { label: "Grosor liner", valor: "1.8 \u2013 2.2 mm" }
      ],
      color: "ember"
    },
    {
      num: "03",
      titulo: "Refuerzo en Dedos y Palma Lateral",
      descripcion: "Tercera capa: refuerzos adicionales en yemas de dedos y palma lateral (zona de impacto en palpaci\xF3n de escombros). Protecci\xF3n triple en \xE1reas donde el rescatista palpa ciegamente entre escombros buscando v\xEDctimas \u2014 escenario de m\xE1ximo riesgo de perforaci\xF3n por agujas, clavos y objetos ocultos.",
      specs: [
        { label: "Refuerzos", valor: "Yemas dedos + palma lateral" },
        { label: "Protecci\xF3n", valor: "Triple capa zonas cr\xEDticas" },
        { label: "Aplicaci\xF3n", valor: "Palpaci\xF3n ciega escombros" },
        { label: "Certificaci\xF3n", valor: "NFPA 1951 aprobado" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Construcci\xF3n", label: "Tipo de guante", valor: "Rescate antiperforaci\xF3n nivel 4" },
    { categoria: "Construcci\xF3n", label: "Palma", valor: "Cuero sint\xE9tico + malla acero" },
    { categoria: "Construcci\xF3n", label: "Liner antiperforaci\xF3n", valor: "Kevlar\xAE + HPPE multicapa" },
    { categoria: "Construcci\xF3n", label: "Refuerzos", valor: "Triple capa dedos y palma lateral" },
    { categoria: "Construcci\xF3n", label: "Costuras", valor: "Hilo Kevlar\xAE reforzado" },
    { categoria: "Protecci\xF3n", label: "Resistencia perforaci\xF3n EN 388", valor: "Nivel 4 (m\xE1ximo \u2014 150 N)" },
    { categoria: "Protecci\xF3n", label: "Resistencia corte", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Resistencia abrasi\xF3n", valor: "Nivel 3" },
    { categoria: "Protecci\xF3n", label: "Objetos detenidos", valor: "Clavos, agujas, astillas, varillas" },
    { categoria: "Protecci\xF3n", label: "Barrera doble", valor: "S\xED \u2014 malla + liner Kevlar\xAE" },
    { categoria: "Ergonom\xEDa", label: "Nivel de destreza", valor: "3 (bueno)" },
    { categoria: "Ergonom\xEDa", label: "Grosor total", valor: "3.5 \u2013 4.0 mm (6.0 mm refuerzos)" },
    { categoria: "Ergonom\xEDa", label: "Dise\xF1o mu\xF1eca", valor: "Pu\xF1o extendido 85 mm con cierre" },
    { categoria: "Ergonom\xEDa", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1951 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "EN 388", valor: "3-3-4-X" },
    { categoria: "Certificaci\xF3n", label: "Documentaci\xF3n incluida", valor: "Ficha t\xE9cnica + Certificado" }
  ];
  const catClass = {
    "Construcci\xF3n": "construccion",
    "Protecci\xF3n": "proteccion",
    "Ergonom\xEDa": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "B\xFAsqueda y Rescate en Colapsos USAR",
      desc: "Palpaci\xF3n ciega entre escombros, concreto roto y estructuras colapsadas. Protecci\xF3n nivel 4 contra clavos expuestos, varillas, agujas hipod\xE9rmicas y objetos punzantes ocultos."
    },
    {
      titulo: "Rescate en Zonas de Desastre Natural",
      desc: "Terremotos, huracanes, inundaciones donde escombros contienen objetos dom\xE9sticos e industriales punzantes. La malla met\xE1lica previene perforaciones por objetos inesperados."
    },
    {
      titulo: "Rescate Industrial y Demoliciones",
      desc: "Ambientes con maquinaria, herramientas, componentes met\xE1licos puntiagudos y desechos industriales. Certificaci\xF3n EN 388 nivel 4 cumple requisitos de seguridad industrial."
    },
    {
      titulo: "Operaciones en Zonas Contaminadas",
      desc: "Escenarios con riesgo de agujas hipod\xE9rmicas, jeringas y material biol\xF3gico peligroso. Barrera doble (malla + liner Kevlar\xAE) previene exposici\xF3n accidental a pat\xF3genos."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 significa resistencia a perforaci\xF3n nivel 4 EN 388?",
      a: "Nivel 4 es el m\xE1ximo en la escala EN 388 \u2014 el guante resiste una fuerza de 150 Newtons (equivalente a ~15 kg de presi\xF3n) sin que un objeto punzante est\xE1ndar lo perfore. En la pr\xE1ctica, esto detiene clavos de construcci\xF3n, agujas hipod\xE9rmicas gruesas, astillas met\xE1licas y la mayor\xEDa de objetos punzantes encontrados en escenas de rescate."
    },
    {
      q: "\xBFLa malla met\xE1lica hace el guante r\xEDgido o inc\xF3modo?",
      a: "No. La malla de acero inoxidable 0.3 mm est\xE1 integrada entre capas de cuero sint\xE9tico flexible \u2014 no toca directamente la piel ni restringe el movimiento. El guante mantiene destreza nivel 3 suficiente para operar herramientas, radios y equipos de rescate. La flexibilidad se reduce m\xEDnimamente versus un guante sin malla."
    },
    {
      q: "\xBFEste guante protege tambi\xE9n contra cortes o solo contra perforaciones?",
      a: "S\xED \u2014 protecci\xF3n dual. El liner Kevlar\xAE + HPPE ofrece resistencia anticorte nivel 3 EN 388 adicional a la protecci\xF3n antiperforaci\xF3n nivel 4. Esto lo hace vers\xE1til para escenarios de rescate con ambos riesgos: bordes filosos (vidrio, l\xE1minas) y objetos punzantes (clavos, agujas)."
    },
    {
      q: "\xBFPuedo usar este guante en operaciones con riesgo biol\xF3gico?",
      a: "Con limitaciones. El guante previene perforaciones por agujas hipod\xE9rmicas, pero NO reemplaza guantes especializados HAZMAT/biol\xF3gico para manipulaci\xF3n directa de material infeccioso. \xDAsalo en rescates donde hay riesgo accidental de contacto con agujas, pero usa EPP biol\xF3gico certificado si la exposici\xF3n es segura o intencional."
    },
    {
      q: "\xBFEl grosor mayor (4.0 mm) dificulta las operaciones de rescate delicadas?",
      a: "En tareas de precisi\xF3n, s\xED. Este guante tiene destreza nivel 3 \u2014 suficiente para remoci\xF3n de escombros, uso de herramientas y manipulaci\xF3n general, pero no para tareas finas como enhebrar cuerdas o ajustar mosquetones peque\xF1os. Si necesitas m\xE1xima destreza, considera el perfil ultrafino nivel 5 para operaciones sin riesgo de perforaci\xF3n."
    },
    {
      q: "\xBFLa malla met\xE1lica pierde efectividad con el uso y lavado?",
      a: "No. La malla de acero inoxidable est\xE1 cosida e integrada estructuralmente en el guante \u2014 no es un recubrimiento superficial. Mantiene su protecci\xF3n antiperforaci\xF3n a trav\xE9s de lavados industriales y cientos de ciclos de uso. Inspecciona visualmente antes de cada operaci\xF3n para verificar integridad de costuras."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Rescate Anticorte EN 388",
      badge: "NFPA 1951",
      description: "Protecci\xF3n anticorte nivel 4/5 con fibra HPPE + Kevlar\xAE doble capa. M\xE1xima resistencia a bordes filosos.",
      href: "/productos/guantes-para-bomberos/rescate/anticorte-en-388",
      buttonText: "Ver Anticorte EN 388",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Guantes Rescate Palma Kevlar\xAE",
      badge: "NFPA 1951",
      description: "Durabilidad 3\xD7 superior con palma completa Kevlar\xAE 500 g/m\xB2. Ideal para rescate de alto volumen.",
      href: "/productos/guantes-para-bomberos/rescate/palma-kevlar",
      buttonText: "Ver Palma Kevlar",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Guantes HAZMAT Qu\xEDmicos",
      badge: "NFPA 1994",
      description: "Protecci\xF3n contra materiales peligrosos y agentes biol\xF3gicos. Compatible con trajes nivel A y B.",
      href: "/productos/guantes-para-bomberos/hazmat",
      buttonText: "Ver Guantes HAZMAT",
      image: "/images/directorio/bomberos-accion-incendio-01.avif"
    },
    {
      title: "Traje Rescate USAR",
      badge: "NFPA 1951",
      description: "Traje certificado para b\xFAsqueda y rescate urbano. Alta visibilidad, refuerzos en rodillas y codos.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes USAR",
      image: "/images/trajes-para-bombero/traje-bombero-estructural-nfpa-1971-modelo-frontal-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Perfil Ultrafino Destreza 5", href: "/productos/guantes-para-bomberos/rescate/perfil-ultrafino" },
    { label: "Anticorte EN 388 Nivel 4/5", href: "/productos/guantes-para-bomberos/rescate/anticorte-en-388" },
    { label: "Palma Reforzada Kevlar\xAE", href: "/productos/guantes-para-bomberos/rescate/palma-kevlar" },
    { label: "Mu\xF1eca El\xE1stica Ajustable", href: "/productos/guantes-para-bomberos/rescate/muneca-elastica" },
    { label: "Compatible Arn\xE9s y Cuerda", href: "/productos/guantes-para-bomberos/rescate/compatible-arnes" },
    { label: "Ver Todos los Guantes Rescate", href: "/productos/guantes-para-bomberos/rescate" }
  ];
  const epp = [
    { label: "Casco Rescate NFPA 1951", href: "/productos/cascos-para-bomberos", tag: "Cabeza" },
    { label: "Guantes Estructurales NFPA", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Rescate T\xE9cnico", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Traje Rescate USAR", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes de Bombero", href: "/productos/guantes-para-bomberos", tag: "Cat\xE1logo" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat", tag: "Producto" },
    { label: "EPP Rescate T\xE9cnico Completo", href: "/blog/rescate-vehicular-herramientas", tag: "Art\xEDculo" },
    { label: "Norma EN 388 Explicada", href: "/productos/guantes-para-bomberos", tag: "Art\xEDculo" },
    { label: "Protecci\xF3n Riesgo Biol\xF3gico", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes y Equipo USAR", href: "/productos/trajes-para-bomberos", tag: "Cat\xE1logo" }
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
    { label: "Norma", valor: "NFPA 1951" },
    { label: "Perforaci\xF3n EN 388", valor: "Nivel 4 (m\xE1ximo \u2014 150 N)" },
    { label: "Malla met\xE1lica", valor: "Acero inoxidable 0.3 mm" },
    { label: "Anticorte", valor: "Nivel 3 adicional" },
    { label: "Barrera doble", valor: "Malla + liner Kevlar\xAE HPPE" },
    { label: "Destreza", valor: "Nivel 3" },
    { label: "Grosor", valor: "3.5 \u2013 4.0 mm (6.0 refuerzos)" },
    { label: "Tallas", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 2XL" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Rescate t\xE9cnico y excarcelaci\xF3n" },
    { code: "EN 388", desc: "Resistencia mec\xE1nica 3-3-4-X" },
    { code: "Perforaci\xF3n 4", desc: "M\xE1xima protecci\xF3n 150 N" },
    { code: "Malla + Kevlar\xAE", desc: "Barrera doble antiperforaci\xF3n" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado certificaci\xF3n" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes Rescate Antiperforaci\xF3n Nivel 4 | BOMBERO.MX", "description": "Guantes de rescate antiperforaci\xF3n nivel 4 EN 388 certificados NFPA 1951. Malla acero + liner Kevlar\xAE HPPE. Protecci\xF3n contra agujas y clavos. Env\xEDo a toda la Rep\xFAblica Mexicana.", "keywords": [
    "guantes antiperforaci\xF3n rescate",
    "guantes bombero punci\xF3n nivel 4",
    "guantes rescate agujas",
    "guantes NFPA 1951 M\xE9xico",
    "guantes antiperforaci\xF3n USAR",
    "guantes malla met\xE1lica bombero",
    "guantes rescate nivel 4 perforaci\xF3n",
    "comprar guantes antiperforaci\xF3n M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/rescate/antiperforacion", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes de Rescate", href: "/productos/guantes-para-bomberos/rescate" },
    { label: "Antiperforaci\xF3n" }
  ], "heroBadge": "Guantes de Rescate \xB7 NFPA 1951 \xB7 Antiperforaci\xF3n", "heroTitle": "Guantes de Rescate NFPA 1951", "heroTitleHighlight": "Antiperforaci\xF3n Nivel 4", "heroSubtitle": "M\xE1xima protecci\xF3n contra objetos punzantes. Malla met\xE1lica acero inoxidable + liner Kevlar\xAE HPPE multicapa. Resistencia perforaci\xF3n nivel 4 EN 388 (150 N) \u2014 detiene clavos, agujas y astillas. Ideal para rescate USAR y colapsos.", "heroSeoBlocks": [
    {
      title: "Guantes Antiperforaci\xF3n Nivel 4 \u2014 Protecci\xF3n M\xE1xima M\xE9xico",
      text: "Los <strong>guantes de rescate antiperforaci\xF3n nivel 4</strong> combinan malla met\xE1lica de acero inoxidable con liner Kevlar\xAE + HPPE multicapa para resistencia 150 N \u2014 la m\xE1xima disponible en EN 388. Detienen clavos, agujas hipod\xE9rmicas, astillas met\xE1licas y objetos punzantes ocultos en escombros. En <strong>BOMBERO.MX</strong> distribuimos guantes antiperforaci\xF3n certificados NFPA 1951 a equipos USAR, cuerpos de bomberos y brigadas de rescate en los 32 estados."
    },
    {
      title: "Certificaci\xF3n NFPA 1951 y EN 388 \u2014 Barrera Doble Antiperforaci\xF3n",
      text: "Cada par de <strong>guantes antiperforaci\xF3n nivel 4</strong> incluye certificaci\xF3n NFPA 1951 (rescate t\xE9cnico) y marcado EN 388 3-3-4-X. Barrera doble: malla met\xE1lica + liner Kevlar\xAE HPPE. Protecci\xF3n adicional anticorte nivel 3. Documentaci\xF3n v\xE1lida para <strong>licitaciones gubernamentales en M\xE9xico</strong>. Esencial para operaciones de b\xFAsqueda en colapsos."
    }
  ], "ctaBarQuote": "Cotizar Guantes Antiperforaci\xF3n", "productoCategoria": "Guantes de Rescate Antiperforaci\xF3n", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1951" },
    { modifier: "perforacion", text: "Perforaci\xF3n 4" },
    { modifier: "en388", text: "EN 388 3-3-4-X" }
  ], "productoMasVendido": true, "productoTitle": "Guantes Rescate NFPA 1951", "productoTitleSub": "Antiperforaci\xF3n Nivel 4", "productoDesc": "Guantes de rescate t\xE9cnico con protecci\xF3n antiperforaci\xF3n nivel 4 EN 388 (150 N). Malla met\xE1lica acero inoxidable + liner Kevlar\xAE HPPE multicapa. Barrera doble contra clavos, agujas y objetos punzantes. Certificaci\xF3n NFPA 1951 incluida.", "productoFeatures": [
    "Antiperforaci\xF3n nivel 4 \u2014 150 N m\xE1ximo",
    "Malla acero inoxidable 0.3 mm integrada",
    "Liner Kevlar\xAE + HPPE multicapa",
    "Protecci\xF3n anticorte nivel 3 adicional",
    "Refuerzos triple capa dedos y palma",
    "Tallas S a 2XL \u2014 pu\xF1o extendido 85 mm"
  ], "productoAppTags": [
    "Rescate USAR",
    "Colapsos estructurales",
    "Rescate industrial",
    "Zonas contaminadas",
    "B\xFAsqueda en escombros"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes antiperforaci\xF3n nivel 4" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero con guantes antiperforaci\xF3n USAR" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "EPP rescate USAR completo" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Operaci\xF3n rescate colapso" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Guantes malla met\xE1lica en operaci\xF3n" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento rescate t\xE9cnico" }
  ], "capasEyebrow": "Anatom\xEDa del Guante", "capasTitle": "Sistema Antiperforaci\xF3n Multicapa", "capasDesc": "Tres capas especializadas con malla met\xE1lica y liner Kevlar\xAE HPPE para m\xE1xima protecci\xF3n contra objetos punzantes sin comprometer funcionalidad.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio certificado ISO/IEC 17025. Todos los valores cumplen o superan NFPA 1951 y EN 388 3-3-4-X vigentes.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes Antiperforaci\xF3n?", "aplicacionesContent": "<p>Los guantes de rescate antiperforaci\xF3n nivel 4 son el EPP est\xE1ndar para operaciones de b\xFAsqueda en escombros y colapsos donde existe riesgo elevado de perforaci\xF3n por objetos ocultos.</p><p>La certificaci\xF3n nivel 4 EN 388 representa la m\xE1xima protecci\xF3n antiperforaci\xF3n disponible \u2014 fundamental cuando el rescatista palpa ciegamente entre escombros buscando v\xEDctimas sin saber qu\xE9 objetos punzantes puede encontrar.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1951 y EN 388 \u2014 Nivel 4 Antiperforaci\xF3n", "certsDesc": "La norma <strong>EN 388</strong> nivel 4 de perforaci\xF3n requiere resistir 150 Newtons sin que un objeto punzante est\xE1ndar perfore el guante \u2014 el nivel m\xE1s alto disponible. <strong>NFPA 1951</strong> certifica el guante completo para rescate t\xE9cnico profesional. Barrera doble malla + Kevlar\xAE ofrece seguridad adicional.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/rescate", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes Antiperforaci\xF3n", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre protecci\xF3n antiperforaci\xF3n, malla met\xE1lica, certificaciones y aplicaciones en rescate USAR.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa y certificados NFPA 1951 y EN 388.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo de Rescate", "relacionadosDesc": "Los guantes antiperforaci\xF3n NFPA 1951 trabajan como parte de un sistema. Todos los equipos certificados con la misma edici\xF3n de norma.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/antiperforacion/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/rescate/antiperforacion/index.astro";
const $$url = "/productos/guantes-para-bomberos/rescate/antiperforacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
