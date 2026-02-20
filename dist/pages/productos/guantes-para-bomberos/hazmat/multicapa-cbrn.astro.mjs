import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/guantes-bombero-resistentes-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Capa Exterior \u2014 Butilo Reforzado",
      descripcion: "Primera barrera CBRN. Butilo de alta densidad con resistencia certificada contra agentes qu\xEDmicos de guerra (CWA), agentes nerviosos (Sarin, VX), vesicantes (gas mostaza) y t\xF3xicos industriales (TIC). Espesor m\xEDnimo de 25 mil (0.63 mm) \u2014 el m\xE1s grueso del mercado CBRN.",
      specs: [
        { label: "Material", valor: "Butilo reforzado militar-grade" },
        { label: "Espesor", valor: "25\u201330 mil (0.63\u20130.76 mm)" },
        { label: "Certificaci\xF3n CBRN", valor: "NFPA 1994 Clase 2 aprobado" },
        { label: "Agentes CWA", valor: "Certificado contra G/V/H/HD" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Barrera Intermedia \u2014 Neopreno Anti-Permeaci\xF3n",
      descripcion: "Segunda capa: barrera de neopreno que complementa la protecci\xF3n qu\xEDmica del butilo exterior. Proporciona resistencia balanceada contra m\xFAltiples familias qu\xEDmicas. Sistema de doble barrera que garantiza protecci\xF3n redundante ante falla de una capa.",
      specs: [
        { label: "Material", valor: "Neopreno de alta densidad" },
        { label: "Espesor", valor: "8\u201312 mil adicional" },
        { label: "Funci\xF3n", valor: "Protecci\xF3n redundante multi-qu\xEDmica" },
        { label: "Sistema", valor: "Doble barrera independiente" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Capa de Soporte \u2014 Kevlar\xAE Bal\xEDstico",
      descripcion: "Tercera capa: tejido de Kevlar\xAE de alta tenacidad que proporciona resistencia mec\xE1nica extrema. Protecci\xF3n contra cortes, pinchazos y abrasi\xF3n durante operaciones CBRN en entornos hostiles. Resistencia bal\xEDstica certificada.",
      specs: [
        { label: "Material", valor: "Kevlar\xAE aramida bal\xEDstico" },
        { label: "Funci\xF3n", valor: "Resistencia mec\xE1nica extrema" },
        { label: "Resistencia corte", valor: "EN 388 nivel 5 (m\xE1ximo)" },
        { label: "Peso", valor: "< 40 g total" }
      ],
      color: "fire"
    },
    {
      num: "04",
      titulo: "Forro Interior \u2014 Nomex\xAE Ign\xEDfugo",
      descripcion: "Cuarta capa: forro de Nomex\xAE con resistencia inherente a la llama. Protecci\xF3n t\xE9rmica en escenarios CBRN con riesgo de incendio o explosi\xF3n. Absorbe la transpiraci\xF3n durante operaciones prolongadas en traje encapsulado.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA ign\xEDfugo" },
        { label: "Funci\xF3n", valor: "Protecci\xF3n t\xE9rmica + confort" },
        { label: "Resistencia llama", valor: "No arde, no se derrite" },
        { label: "Transpirabilidad", valor: "Alta \u2014 reduce fatiga" }
      ],
      color: "ember"
    }
  ];
  const especificaciones = [
    { categoria: "Material", label: "Sistema de capas", valor: "4 capas independientes certificadas" },
    { categoria: "Material", label: "Capa exterior", valor: "Butilo reforzado military-grade" },
    { categoria: "Material", label: "Barrera intermedia", valor: "Neopreno anti-permeaci\xF3n" },
    { categoria: "Material", label: "Capa de soporte", valor: "Kevlar\xAE aramida bal\xEDstico" },
    { categoria: "Material", label: "Forro interior", valor: "Nomex\xAE IIIA ign\xEDfugo" },
    { categoria: "Material", label: "Espesor total", valor: "25\u201330 mil (0.63\u20130.76 mm)" },
    { categoria: "Material", label: "Color exterior", valor: "Verde militar o negro" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Certificaci\xF3n CBRN", valor: "NFPA 1994 Clase 2 \u2014 terrorismo" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Agentes nerviosos", valor: "Certificado \u2014 Sarin (GB), VX, Tabun" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Agentes vesicantes", valor: "Certificado \u2014 gas mostaza (HD, H)" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Agentes sangu\xEDneos", valor: "Certificado \u2014 cianuro de hidr\xF3geno" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "TIC (t\xF3xicos industriales)", valor: "Cloro, amon\xEDaco, fosgeno certificado" },
    { categoria: "Protecci\xF3n Qu\xEDmica", label: "Permeaci\xF3n CWA", valor: "> 480 min certificado ASTM F739" },
    { categoria: "Resistencia", label: "Resistencia al corte", valor: "EN 388:2016 nivel 5 (m\xE1ximo)" },
    { categoria: "Resistencia", label: "Resistencia a la abrasi\xF3n", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia al desgarro", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia a la punci\xF3n", valor: "EN 388:2016 nivel 4" },
    { categoria: "Resistencia", label: "Resistencia a la llama", valor: "Nomex\xAE inherente \u2014 no arde" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1991 + NFPA 1994 Clase 2" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n CBRN", valor: "EPA ECBC aprobado" },
    { categoria: "Certificaci\xF3n", label: "Certificaci\xF3n militar", valor: "Compatible con MOPP 4" },
    { categoria: "Certificaci\xF3n", label: "Tallas disponibles", valor: "S \xB7 M \xB7 L \xB7 XL \xB7 XXL" },
    { categoria: "Certificaci\xF3n", label: "Longitud m\xEDnima", valor: "35 cm (14 pulgadas) extendido" },
    { categoria: "Certificaci\xF3n", label: "Compatibilidad traje", valor: "NFPA 1991 / 1994 CBRN encapsulado" }
  ];
  const catClass = {
    "Material": "construccion",
    "Protecci\xF3n Qu\xEDmica": "proteccion",
    "Resistencia": "visibilidad",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Respuesta a Terrorismo CBRN",
      desc: "Operaciones de respuesta a amenazas terroristas con agentes qu\xEDmicos, biol\xF3gicos, radiol\xF3gicos o nucleares. Certificado NFPA 1994 Clase 2 para equipos de primera intervenci\xF3n."
    },
    {
      titulo: "Agentes Qu\xEDmicos de Guerra (CWA)",
      desc: "Protecci\xF3n certificada contra agentes nerviosos (Sarin, VX, Tabun), vesicantes (gas mostaza) y sangu\xEDneos (cianuro). Certificaci\xF3n EPA ECBC para operaciones militares."
    },
    {
      titulo: "Descontaminaci\xF3n Nivel A",
      desc: "Zona caliente en incidentes CBRN con agentes altamente t\xF3xicos. Sistema de 4 capas garantiza protecci\xF3n redundante ante falla de barrera exterior."
    },
    {
      titulo: "Plantas Qu\xEDmicas de Alto Riesgo",
      desc: "Instalaciones que manejan TIC (t\xF3xicos industriales qu\xEDmicos): cloro, fosgeno, amon\xEDaco anhidro. M\xE1xima protecci\xF3n para brigadas industriales especializadas."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre guantes HAZMAT normales y guantes CBRN multicapa?",
      a: "Los guantes CBRN multicapa est\xE1n certificados contra agentes qu\xEDmicos de guerra (CWA) y t\xF3xicos industriales extremos \u2014 amenazas que los guantes HAZMAT est\xE1ndar no cubren. El sistema de 4 capas proporciona protecci\xF3n redundante: si la capa exterior falla, las capas internas contin\xFAan protegiendo. Certificaci\xF3n NFPA 1994 obligatoria para equipos de respuesta a terrorismo."
    },
    {
      q: "\xBFLos guantes protegen contra agentes nerviosos como Sarin y VX?",
      a: "S\xED. Estos guantes est\xE1n certificados espec\xEDficamente contra agentes nerviosos tipo G (Sarin, Tabun, Soman) y tipo V (VX) seg\xFAn pruebas EPA ECBC. La capa de butilo exterior tiene permeaci\xF3n > 480 minutos contra CWA. Esta certificaci\xF3n es cr\xEDtica para equipos de primera respuesta a terrorismo."
    },
    {
      q: "\xBFPor qu\xE9 incluyen capa de Kevlar\xAE en un guante qu\xEDmico?",
      a: "Los escenarios CBRN frecuentemente involucran riesgo mec\xE1nico: vidrios rotos, metal cortante, escombros. La capa de Kevlar\xAE proporciona resistencia al corte nivel 5 (m\xE1ximo EN 388) sin comprometer la protecci\xF3n qu\xEDmica. Esto es \xFAnico en guantes CBRN militares y de respuesta a terrorismo."
    },
    {
      q: "\xBFSon compatibles con trajes CBRN militares (MOPP 4)?",
      a: "S\xED. Estos guantes son compatibles con sistemas MOPP (Mission Oriented Protective Posture) nivel 4 utilizados por fuerzas armadas. Tambi\xE9n compatibles con trajes civiles NFPA 1991/1994. Se integran mediante sistema de anillo de bloqueo herm\xE9tico certificado."
    },
    {
      q: "\xBFCu\xE1nto tiempo puedo usar los guantes en operaciones CBRN?",
      a: "Depende del agente y concentraci\xF3n. Para CWA: m\xE1ximo 6 horas con monitoreo continuo. Para TIC: consultar matriz de compatibilidad. En operaciones reales CBRN: reemplazo cada 4 horas por protocolo de seguridad, sin importar el estado aparente del guante."
    },
    {
      q: "\xBFIncluyen certificaci\xF3n NFPA 1994 y documentaci\xF3n militar?",
      a: "S\xED. Cada par incluye certificado de laboratorio NFPA 1991 + NFPA 1994 Clase 2, certificaci\xF3n EPA ECBC para CWA, y ficha t\xE9cnica con matriz de compatibilidad completa. Documentaci\xF3n requerida para equipos de respuesta a terrorismo en M\xE9xico."
    }
  ];
  const relacionados = [
    {
      title: "Guantes Butilo HAZMAT",
      badge: "NFPA 1991",
      description: "Capa exterior de butilo para operaciones HAZMAT sin amenaza CBRN espec\xEDfica.",
      href: "/productos/guantes-para-bomberos/hazmat/butilo",
      buttonText: "Ver Guantes Butilo",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Traje CBRN Encapsulado",
      badge: "NFPA 1994",
      description: "Traje total gas-tight certificado para terrorismo CBRN. Compatible con guantes multicapa.",
      href: "/productos/trajes-para-bomberos",
      buttonText: "Ver Trajes CBRN",
      image: "/images/directorio/traje-hazmat-nivel-a-01.avif"
    },
    {
      title: "Botas Caucho HAZMAT",
      badge: "NFPA 1991",
      description: "Botas de caucho certificadas para operaciones con materiales peligrosos y amenazas CBRN.",
      href: "/productos/botas-para-bomberos/caucho",
      buttonText: "Ver Botas HAZMAT",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    },
    {
      title: "Botas Sobrecalzas CBRN",
      badge: "NFPA 1994",
      description: "Sobrecalzas qu\xEDmico-resistentes para completar el EPP CBRN encapsulado.",
      href: "/productos/botas-para-bomberos",
      buttonText: "Ver Botas CBRN",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Guantes Butilo HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/butilo" },
    { label: "Guantes Neopreno HAZMAT", href: "/productos/guantes-para-bomberos/hazmat/neopreno" },
    { label: "Guantes L\xE1tex Industrial", href: "/productos/guantes-para-bomberos/hazmat/latex" },
    { label: "Guantes Viton\xAE Fluorocarbono", href: "/productos/guantes-para-bomberos/hazmat/viton" },
    { label: "Guantes Nitrilo Sint\xE9tico", href: "/productos/guantes-para-bomberos/hazmat/nitrilo" },
    { label: "Ver Todos los Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" }
  ];
  const epp = [
    { label: "Traje CBRN Encapsulado", href: "/productos/trajes-para-bomberos", tag: "Cuerpo" },
    { label: "Botas Sobrecalzas CBRN", href: "/productos/botas-para-bomberos", tag: "Pies" },
    { label: "Capucha Particulada PM2.5", href: "/productos/capuchas-para-bomberos/particulada", tag: "Cabeza" },
    { label: "Casco HAZMAT Qu\xEDmico", href: "/productos/cascos-para-bomberos/casco-hazmat-quimico", tag: "Cabeza" },
    { label: "Gafas Seguridad ANSI Z87.1", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Guantes HAZMAT CBRN", href: "/productos/guantes-para-bomberos/hazmat", tag: "Cat\xE1logo" },
    { label: "Respuesta a Terrorismo Qu\xEDmico", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Trajes CBRN Certificados", href: "/productos/trajes-para-bomberos", tag: "Producto" },
    { label: "Agentes Qu\xEDmicos de Guerra (CWA)", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Protocolos NFPA 1994 M\xE9xico", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" },
    { label: "Detectores CWA y TIC", href: "/blog/brigadas-industriales-equipo-necesario", tag: "Art\xEDculo" }
  ];
  const directorioLinks = [
    { label: "Unidades CBRN Ciudad de M\xE9xico", href: "/directorio/ciudad-de-mexico" },
    { label: "Protecci\xF3n Civil Federal", href: "/directorio" },
    { label: "SEDENA Respuesta CBRN", href: "/directorio" },
    { label: "HAZMAT Terrorismo Jalisco", href: "/directorio/jalisco" },
    { label: "Protecci\xF3n Civil Nuevo Le\xF3n", href: "/directorio/nuevo-leon" },
    { label: "Directorio Nacional Bomberos", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1991/1994" },
    { label: "Sistema", valor: "4 capas CBRN" },
    { label: "Espesor", valor: "25\u201330 mil" },
    { label: "Permeaci\xF3n CWA", valor: "> 480 min" },
    { label: "Cert. CBRN", valor: "EPA ECBC" },
    { label: "Corte Kevlar\xAE", valor: "Nivel 5 m\xE1ximo" },
    { label: "Longitud", valor: "35 cm extendido" },
    { label: "Tallas", valor: "S\u2013XXL" }
  ];
  const certItems = [
    { code: "NFPA 1994", desc: "Protecci\xF3n CBRN terrorismo \u2014 Clase 2 primera respuesta" },
    { code: "EPA ECBC", desc: "Certificado contra agentes qu\xEDmicos de guerra (CWA)" },
    { code: "NFPA 1991", desc: "Protecci\xF3n qu\xEDmica vapor-gas \u2014 EPP Nivel A" },
    { code: "EN 388 Nivel 5", desc: "M\xE1xima resistencia al corte \u2014 Kevlar\xAE bal\xEDstico" },
    { code: "MOPP 4", desc: "Compatible con sistemas militares CBRN" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Guantes CBRN Multicapa NFPA 1994 \u2014 Terrorismo Qu\xEDmico | BOMBERO.MX", "description": "Guantes CBRN multicapa certificados NFPA 1994. Sistema 4 capas: butilo, neopreno, Kevlar\xAE, Nomex\xAE. Protecci\xF3n contra CWA (Sarin, VX, mostaza). EPA ECBC. Env\xEDo a toda M\xE9xico.", "keywords": [
    "guantes CBRN M\xE9xico",
    "guantes multicapa NFPA 1994",
    "guantes protecci\xF3n CBRN certificados",
    "guantes terrorismo qu\xEDmico",
    "guantes CWA Sarin VX",
    "guantes agentes guerra M\xE9xico",
    "guantes NFPA 1994 clase 2",
    "comprar guantes CBRN M\xE9xico"
  ], "canonical": "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Guantes para Bombero", href: "/productos/guantes-para-bomberos" },
    { label: "Guantes HAZMAT", href: "/productos/guantes-para-bomberos/hazmat" },
    { label: "Guantes Multicapa CBRN" }
  ], "heroBadge": "Guantes CBRN \xB7 NFPA 1994 \xB7 Multicapa Terrorismo", "heroTitle": "Guantes Multicapa CBRN", "heroTitleHighlight": "NFPA 1994 Clase 2", "heroSubtitle": "Protecci\xF3n m\xE1xima contra terrorismo CBRN y agentes qu\xEDmicos de guerra. Sistema de 4 capas: butilo exterior, neopreno anti-permeaci\xF3n, Kevlar\xAE bal\xEDstico y forro Nomex\xAE. Certificado contra Sarin, VX, gas mostaza. EPA ECBC aprobado. Compatible con trajes CBRN encapsulados.", "heroSeoBlocks": [
    {
      title: "Guantes CBRN Multicapa NFPA 1994 \u2014 Protecci\xF3n contra Agentes Qu\xEDmicos de Guerra",
      text: "Los <strong>guantes CBRN multicapa</strong> ofrecen protecci\xF3n certificada contra agentes qu\xEDmicos de guerra (CWA) y amenazas terroristas CBRN. Sistema de 4 capas independientes: butilo, neopreno, Kevlar\xAE y Nomex\xAE. Certificados <strong>NFPA 1994 Clase 2</strong> y EPA ECBC. En <strong>BOMBERO.MX</strong> distribuimos guantes CBRN certificados para equipos de primera respuesta a terrorismo en M\xE9xico."
    },
    {
      title: "Certificaci\xF3n EPA ECBC \u2014 Protecci\xF3n contra Sarin, VX y Gas Mostaza",
      text: "Cada par est\xE1 certificado por el <strong>U.S. Army Edgewood Chemical Biological Center (ECBC)</strong> contra agentes nerviosos (Sarin, VX, Tabun), vesicantes (gas mostaza) y t\xF3xicos industriales. Permeaci\xF3n > 480 minutos certificada. Documentaci\xF3n completa para <strong>equipos de respuesta a terrorismo en los 32 estados de M\xE9xico</strong>."
    }
  ], "ctaBarQuote": "Cotizar Guantes CBRN Multicapa", "productoCategoria": "Guantes CBRN Terrorismo Qu\xEDmico", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1994" },
    { modifier: "hazmat", text: "CBRN CWA" },
    { modifier: "astm", text: "EPA ECBC" }
  ], "productoMasVendido": false, "productoTitle": "Guantes Multicapa CBRN", "productoTitleSub": "Sistema 4 Capas NFPA 1994", "productoDesc": "Sistema de 4 capas certificado: butilo exterior, neopreno intermedio, Kevlar\xAE soporte, Nomex\xAE interior. Protecci\xF3n contra CWA y terrorismo CBRN. EPA ECBC certificado. Compatible con trajes NFPA 1994.", "productoFeatures": [
    "Sistema 4 capas CBRN certificado",
    "Protecci\xF3n CWA: Sarin, VX, mostaza",
    "Kevlar\xAE bal\xEDstico resistencia corte nivel 5",
    "Nomex\xAE ign\xEDfugo interior",
    "Certificado EPA ECBC + NFPA 1994",
    "Compatible MOPP 4 militar"
  ], "productoAppTags": [
    "Terrorismo CBRN",
    "Agentes qu\xEDmicos guerra",
    "Descontaminaci\xF3n Nivel A",
    "Plantas alto riesgo",
    "Primera respuesta"
  ], "gallery": [
    { src: "/images/directorio/guantes-bombero-resistentes-01.avif", alt: "Guantes CBRN multicapa NFPA 1994" },
    { src: "/images/directorio/traje-hazmat-nivel-a-01.avif", alt: "Traje CBRN con guantes multicapa" },
    { src: "/images/directorio/equipo-hazmat-materiales-peligrosos-01.avif", alt: "Equipo CBRN completo certificado" },
    { src: "/images/directorio/unidad-hazmat-emergencias-01.avif", alt: "Respuesta CBRN terrorismo qu\xEDmico" },
    { src: "/images/directorio/descontaminacion-hazmat-01.avif", alt: "Descontaminaci\xF3n agentes CWA" },
    { src: "/images/directorio/detector-multigas-hazmat-01.avif", alt: "Detecci\xF3n agentes qu\xEDmicos guerra" }
  ], "capasEyebrow": "Sistema Multicapa", "capasTitle": "4 Capas de Protecci\xF3n CBRN Redundante", "capasDesc": "Cada capa cumple una funci\xF3n cr\xEDtica: protecci\xF3n qu\xEDmica, resistencia mec\xE1nica, protecci\xF3n t\xE9rmica. El sistema redundante garantiza protecci\xF3n continua ante falla de capa exterior.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Completas", "specsDesc": "Par\xE1metros verificados en laboratorio militar certificado. Resistencia contra agentes qu\xEDmicos de guerra certificada seg\xFAn EPA ECBC y NFPA 1994 Clase 2.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usan los Guantes CBRN Multicapa?", "aplicacionesContent": "<p>Los guantes CBRN multicapa son el EPP obligatorio para respuesta a terrorismo qu\xEDmico y amenazas CWA.</p><p>Certificados NFPA 1994 Clase 2 para equipos de primera intervenci\xF3n. El sistema de 4 capas independientes proporciona protecci\xF3n redundante cr\xEDtica en escenarios donde la falla del EPP puede ser fatal.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1994 y EPA ECBC \u2014 Protecci\xF3n CBRN", "certsDesc": "La norma <strong>NFPA 1994</strong> (<em>Standard on Protective Ensembles for First Responders to CBRN Terrorism Incidents</em>) establece requisitos para EPP contra terrorismo qu\xEDmico, biol\xF3gico, radiol\xF3gico y nuclear. Certificaci\xF3n EPA ECBC valida protecci\xF3n contra agentes qu\xEDmicos de guerra.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/guantes-para-bomberos/hazmat", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Todo sobre Guantes CBRN Multicapa", "faqDescription": "Respondemos las dudas t\xE9cnicas m\xE1s frecuentes sobre protecci\xF3n CBRN, agentes qu\xEDmicos de guerra, certificaci\xF3n EPA ECBC y compatibilidad con trajes NFPA 1994.", "faqDocTitle": "Descarga la Ficha T\xE9cnica", "faqDocDesc": "Solicita la ficha t\xE9cnica completa, certificado EPA ECBC y matriz de compatibilidad contra agentes CWA.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Complementario", "relacionadosTitle": "Completa tu Equipo CBRN", "relacionadosDesc": "Los guantes CBRN trabajan como parte de un sistema integrado certificado NFPA 1994. Todos los equipos est\xE1n certificados para respuesta a terrorismo qu\xEDmico.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/multicapa-cbrn/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/guantes-para-bomberos/hazmat/multicapa-cbrn/index.astro";
const $$url = "/productos/guantes-para-bomberos/hazmat/multicapa-cbrn";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
