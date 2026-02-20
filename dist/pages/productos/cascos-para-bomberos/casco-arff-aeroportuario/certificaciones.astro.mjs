import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/camion-bomberos-aeropuerto-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "NFPA 1971 \u2014 Est\xE1ndar Estadounidense para Cascos de Bombero",
      descripcion: "NFPA 1971 (Standard on Protective Ensembles for Structural Fire Fighting) es el est\xE1ndar m\xE1s reconocido mundialmente para equipo de protecci\xF3n de bomberos. El cap\xEDtulo de cascos establece requisitos de resistencia a impacto, penetraci\xF3n, retenci\xF3n, protecci\xF3n t\xE9rmica y el\xE9ctrica. Certificaci\xF3n por laboratorio acreditado OSHA/NVLAP.",
      specs: [
        { label: "Norma", valor: "NFPA 1971:2018 o edici\xF3n vigente" },
        { label: "Tipo de prueba", valor: "Tercera parte independiente" },
        { label: "Laboratorio", valor: "Acreditado OSHA/NVLAP" },
        { label: "Validez", valor: "5 a\xF1os desde certificaci\xF3n" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "EN 443 \u2014 Est\xE1ndar Europeo para Cascos de Bombero",
      descripcion: "EN 443 (Helmets for Fire Fighting in Buildings and Other Structures) es el est\xE1ndar de la Uni\xF3n Europea equivalente a NFPA 1971. Algunos aeropuertos internacionales y fabricantes europeos (Rosenbauer, Magirus) especifican EN 443. Complementario a NFPA 1971 para aceptaci\xF3n global.",
      specs: [
        { label: "Norma", valor: "EN 443:2008 o edici\xF3n vigente" },
        { label: "Marca CE", valor: "S\xED \u2014 requerida para UE" },
        { label: "Notificado", valor: "Organismo notificado UE" },
        { label: "Complementaria", valor: "Con NFPA 1971 para global" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "ICAO Annex 14 \u2014 Requisitos de Aviaci\xF3n Civil Internacional",
      descripcion: "ICAO Annex 14 (Aerodromes) establece requisitos para servicios ARFF en aeropuertos. Aunque no certifica cascos directamente, especifica que el equipo de protecci\xF3n personal debe ser apropiado para operaciones de rescate de aeronaves. Los cascos NFPA 1971/EN 443 cumplen impl\xEDcitamente si tienen caracter\xEDsticas ARFF.",
      specs: [
        { label: "Documento", valor: "ICAO Annex 14 Vol I Cap\xEDtulo 9" },
        { label: "Aplicaci\xF3n", valor: "Aeropuertos internacionales" },
        { label: "M\xE9xico", valor: "DGAC adopta ICAO" },
        { label: "Requisito", valor: "EPP apropiado para ARFF" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "NFPA 1971", label: "Edici\xF3n", valor: "2018 o edici\xF3n vigente" },
    { categoria: "NFPA 1971", label: "Cap\xEDtulo cascos", valor: "Cap\xEDtulo 6" },
    { categoria: "NFPA 1971", label: "Impacto", valor: "6.2 \u2014 fuerza transmitida <3.78 kN" },
    { categoria: "NFPA 1971", label: "Penetraci\xF3n", valor: "6.3 \u2014 sin penetraci\xF3n corona" },
    { categoria: "NFPA 1971", label: "Retenci\xF3n", valor: "6.4 \u2014 sistema > 68 N fuerza" },
    { categoria: "NFPA 1971", label: "Protecci\xF3n t\xE9rmica", valor: "6.5 \u2014 TPP m\xEDnimo especificado" },
    { categoria: "NFPA 1971", label: "Protecci\xF3n el\xE9ctrica", valor: "6.6 \u2014 corriente fuga < 3 mA" },
    { categoria: "EN 443", label: "Edici\xF3n", valor: "2008 o edici\xF3n vigente" },
    { categoria: "EN 443", label: "Marca CE", valor: "Requerida para comercializaci\xF3n UE" },
    { categoria: "EN 443", label: "Tipo de examen", valor: "Examen de tipo CE" },
    { categoria: "EN 443", label: "Organismos", valor: "BSI, T\xDCV, DEKRA, etc." },
    { categoria: "ICAO", label: "Documento", valor: "Annex 14 Vol I \u2014 Aerodromes" },
    { categoria: "ICAO", label: "Cap\xEDtulo ARFF", valor: "Cap\xEDtulo 9 \u2014 Rescue and FF" },
    { categoria: "ICAO", label: "Categor\xEDa salvamento", valor: "1-10 seg\xFAn tama\xF1o aeronave" },
    { categoria: "ICAO", label: "EPP requerido", valor: "Apropiado para operaciones ARFF" },
    { categoria: "M\xE9xico", label: "Autoridad", valor: "DGAC (Dir. Gral. Aeron\xE1utica Civil)" },
    { categoria: "M\xE9xico", label: "Adopci\xF3n ICAO", valor: "S\xED \u2014 compromisos internacionales" },
    { categoria: "M\xE9xico", label: "Licitaciones", valor: "ASA, GACM, operadores privados" },
    { categoria: "Laboratorio", label: "Acreditaci\xF3n", valor: "ISO/IEC 17025" }
  ];
  const catClass = {
    "NFPA 1971": "certificacion",
    "EN 443": "certificacion",
    "ICAO": "certificacion",
    "M\xE9xico": "certificacion",
    "Laboratorio": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Licitaciones de Aeropuertos DGAC/SCT",
      desc: "Las bases de licitaci\xF3n para equipamiento ARFF en aeropuertos certificados DGAC t\xEDpicamente especifican NFPA 1971 o EN 443. La documentaci\xF3n incluida (certificado ISO/IEC 17025, ficha t\xE9cnica, garant\xEDa) cumple requisitos de bases de licitaci\xF3n."
    },
    {
      titulo: "Aeropuertos Internacionales con Requisitos ICAO",
      desc: "Los aeropuertos internacionales deben cumplir ICAO Annex 14 para su categor\xEDa de salvamento. El equipo ARFF con certificaci\xF3n NFPA 1971 + EN 443 satisface impl\xEDcitamente los requisitos de EPP apropiado de ICAO."
    },
    {
      titulo: "Auditor\xEDas de Certificaci\xF3n Aeroportuaria",
      desc: "Durante auditor\xEDas de certificaci\xF3n aeroportuaria, los inspectores DGAC verifican que el equipo ARFF cumpla est\xE1ndares apropiados. La documentaci\xF3n de certificaci\xF3n del casco proporciona evidencia de cumplimiento."
    },
    {
      titulo: "Homologaci\xF3n con Operadores Internacionales",
      desc: "Aeropuertos con operaciones de aerol\xEDneas internacionales pueden requerir equipamiento que cumpla m\xFAltiples est\xE1ndares. La doble certificaci\xF3n NFPA 1971 + EN 443 proporciona aceptaci\xF3n global."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia entre NFPA 1971 y EN 443?",
      a: "<strong>NFPA 1971</strong> es el est\xE1ndar estadounidense y <strong>EN 443</strong> es el europeo. Ambos establecen requisitos similares para cascos de bombero (impacto, penetraci\xF3n, retenci\xF3n, protecci\xF3n t\xE9rmica) pero con metodolog\xEDas de prueba ligeramente diferentes. La doble certificaci\xF3n significa que el casco cumple <strong>ambos est\xE1ndares</strong>, proporcionando aceptaci\xF3n tanto en mercados que especifican NFPA como en los que especifican EN."
    },
    {
      q: "\xBFICAO certifica cascos de bombero directamente?",
      a: '<strong>No</strong>. ICAO (Organizaci\xF3n de Aviaci\xF3n Civil Internacional) no certifica equipo \u2014 establece <strong>est\xE1ndares para aeropuertos</strong>. El Annex 14 especifica que los servicios ARFF deben tener "equipo de protecci\xF3n personal apropiado" sin nombrar normas espec\xEDficas. Los cascos <strong>NFPA 1971 y EN 443</strong> son reconocidos como apropiados para cumplir este requisito.'
    },
    {
      q: "\xBFQu\xE9 documentaci\xF3n incluye el casco para licitaciones?",
      a: "Cada casco incluye: <strong>(1)</strong> Certificado de laboratorio acreditado ISO/IEC 17025 con n\xFAmero de serie/lote. <strong>(2)</strong> Declaraci\xF3n de conformidad del fabricante a NFPA 1971 y EN 443. <strong>(3)</strong> Ficha t\xE9cnica completa en espa\xF1ol. <strong>(4)</strong> Carta de garant\xEDa con t\xE9rminos y condiciones. <strong>(5)</strong> Manual de operaci\xF3n y mantenimiento. Documentaci\xF3n adicional disponible bajo solicitud."
    },
    {
      q: "\xBFC\xF3mo verifico que un certificado es aut\xE9ntico?",
      a: "Los certificados de laboratorios acreditados incluyen: <strong>n\xFAmero de certificado \xFAnico</strong>, nombre del laboratorio con n\xFAmero de acreditaci\xF3n, fecha de emisi\xF3n y vigencia, y firma autorizada. Puedes verificar la acreditaci\xF3n del laboratorio en el <strong>sitio web de la entidad de acreditaci\xF3n</strong> (ej: EMA M\xE9xico, NVLAP EE.UU., UKAS Reino Unido). Los certificados falsos generalmente no incluyen estos elementos verificables."
    },
    {
      q: "\xBFCu\xE1nto tiempo es v\xE1lido el certificado NFPA 1971?",
      a: "El certificado de <strong>tipo</strong> (modelo de casco) es v\xE1lido mientras el fabricante no modifique el dise\xF1o y la edici\xF3n de la norma siga vigente. Cuando NFPA publica una <strong>nueva edici\xF3n</strong> (cada 5 a\xF1os aproximadamente), los fabricantes re-certifican sus productos. El casco individual es v\xE1lido durante su <strong>vida \xFAtil de servicio</strong> (10 a\xF1os t\xEDpico para material compuesto)."
    },
    {
      q: "\xBFQu\xE9 pasa si la licitaci\xF3n especifica una norma que no tenemos?",
      a: 'Contactar al comprador para aclarar si normas equivalentes son aceptables. NFPA 1971 y EN 443 son <strong>equivalentes funcionales</strong> reconocidos internacionalmente. La mayor\xEDa de bases de licitaci\xF3n bien redactadas dicen "NFPA 1971 <strong>o equivalente</strong>". Si especifican una sola norma sin alternativas, puede ser requisito de proveedor espec\xEDfico \u2014 solicitar aclaraci\xF3n.'
    }
  ];
  const relacionados = [
    {
      title: "Casco ARFF Sistema Completo",
      badge: "NFPA 1971",
      description: "Sistema completo certificado NFPA 1971 + EN 443 con toda la documentaci\xF3n para licitaciones.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo",
      buttonText: "Ver Sistema Completo",
      image: IMAGE
    },
    {
      title: "Traje ARFF Certificado",
      badge: "NFPA 1971",
      description: "Traje de aproximaci\xF3n con certificaci\xF3n NFPA 1971 y documentaci\xF3n para licitaciones.",
      href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario",
      buttonText: "Ver Traje Certificado",
      image: IMAGE
    },
    {
      title: "Guantes ARFF Certificados",
      badge: "NFPA 1971",
      description: "Guantes con certificaci\xF3n NFPA 1971 y EN 659 para sistema EPP completo certificado.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Capucha Nomex\xAE NFPA 1971",
      badge: "NFPA 1971",
      description: "Capucha estructural certificada para protecci\xF3n de cabeza y cuello bajo casco.",
      href: "/productos/capuchas-para-bomberos/nomex",
      buttonText: "Ver Capucha",
      image: "/images/directorio/equipo-proteccion-bomberos-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Sistema Completo ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo" },
    { label: "Shell Aluminizado 85%+", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/shell-aluminizado" },
    { label: "Visor Dorado Filtro IR", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado" },
    { label: "Orejeras T\xE9rmicas Desmontables", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas" },
    { label: "Linterna LED Integrada", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/linterna-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje ARFF Certificado", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cuerpo" },
    { label: "Guantes ARFF Certificados", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas Certificadas NFPA", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Capucha Certificada", href: "/productos/capuchas-para-bomberos/pbi", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "NFPA 1971 Explicada", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Blog" },
    { label: "EN 443 Explicada", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "ICAO Annex 14 para ARFF", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Licitaciones DGAC M\xE9xico", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Verificar Certificados", href: "/blog/cascos-bombero-certificados", tag: "Blog" }
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
    { label: "NFPA", valor: "1971:2018 o vigente" },
    { label: "EN", valor: "443:2008 o vigente" },
    { label: "ICAO", valor: "Annex 14 compatible" },
    { label: "M\xE9xico", valor: "DGAC/SCT v\xE1lido" },
    { label: "Laboratorio", valor: "ISO/IEC 17025" },
    { label: "Certificado", valor: "Original incluido" },
    { label: "Ficha t\xE9cnica", valor: "Espa\xF1ol incluida" },
    { label: "Garant\xEDa", valor: "Carta incluida" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Cascos bomberos \u2014 est\xE1ndar EE.UU." },
    { code: "EN 443", desc: "Cascos bomberos \u2014 est\xE1ndar Europa CE" },
    { code: "ICAO Annex 14", desc: "Requisitos servicios ARFF aeropuertos" },
    { code: "DGAC/SCT", desc: "Autoridad aeron\xE1utica M\xE9xico" },
    { code: "ISO/IEC 17025", desc: "Laboratorio de pruebas acreditado" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco ARFF \u2014 Certificaciones NFPA 1971 EN 443 | BOMBERO.MX", "description": "Casco ARFF con certificaci\xF3n NFPA 1971 y EN 443 para licitaciones aeroportuarias. Compatible ICAO Annex 14. Documentaci\xF3n completa para DGAC/SCT M\xE9xico. Certificado ISO/IEC 17025 incluido.", "keywords": [
    "casco ARFF certificado NFPA 1971",
    "casco bombero EN 443",
    "certificacion cascos aeropuerto",
    "casco ICAO Annex 14",
    "licitacion cascos DGAC",
    "casco bombero certificado Mexico",
    "documentacion cascos ARFF",
    "comprar casco certificado aeropuerto"
  ], "canonical": "/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco ARFF Aeroportuario", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario" },
    { label: "Certificaciones" }
  ], "heroBadge": "Certificaciones \xB7 NFPA 1971 \xB7 EN 443 \xB7 ICAO", "heroTitle": "Casco ARFF con", "heroTitleHighlight": "Certificaciones Aeroportuarias", "heroSubtitle": "Doble certificaci\xF3n NFPA 1971 (EE.UU.) y EN 443 (Europa) para aceptaci\xF3n global. Compatible con requisitos ICAO Annex 14 para servicios ARFF. Documentaci\xF3n completa incluida para licitaciones DGAC/SCT en M\xE9xico: certificado ISO/IEC 17025, ficha t\xE9cnica, garant\xEDa.", "heroSeoBlocks": [
    {
      title: "NFPA 1971 + EN 443 \u2014 Doble Certificaci\xF3n Global",
      text: "El casco cumple simult\xE1neamente <strong>NFPA 1971</strong> (est\xE1ndar estadounidense m\xE1s reconocido mundialmente) y <strong>EN 443</strong> (est\xE1ndar europeo con marca CE). Esta doble certificaci\xF3n proporciona <strong>aceptaci\xF3n en cualquier mercado</strong> que especifique cualquiera de las dos normas."
    },
    {
      title: "Documentaci\xF3n Completa para Licitaciones DGAC",
      text: "Cada casco incluye <strong>certificado de laboratorio ISO/IEC 17025</strong> original, declaraci\xF3n de conformidad del fabricante, ficha t\xE9cnica en espa\xF1ol y carta de garant\xEDa. Documentaci\xF3n lista para cumplir requisitos de bases de licitaci\xF3n de <strong>DGAC, ASA, GACM</strong> y operadores aeroportuarios privados."
    }
  ], "ctaBarQuote": "Solicitar Documentaci\xF3n de Certificaci\xF3n", "productoCategoria": "Certificaciones ARFF", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "EN 443" },
    { modifier: "solas", text: "ICAO" }
  ], "productoMasVendido": false, "productoTitle": "Casco ARFF Certificado", "productoTitleSub": "NFPA 1971 + EN 443 + ICAO", "productoDesc": "Casco ARFF con doble certificaci\xF3n NFPA 1971 y EN 443 verificada por laboratorio acreditado ISO/IEC 17025. Compatible con requisitos ICAO Annex 14 para servicios ARFF. Documentaci\xF3n completa en espa\xF1ol para licitaciones DGAC/SCT M\xE9xico.", "productoFeatures": [
    "Certificado NFPA 1971 edici\xF3n vigente",
    "Certificado EN 443 con marca CE",
    "Compatible ICAO Annex 14 ARFF",
    "Laboratorio ISO/IEC 17025 acreditado",
    "Documentaci\xF3n espa\xF1ol incluida",
    "V\xE1lido licitaciones DGAC/SCT/ASA"
  ], "productoAppTags": [
    "Licitaciones DGAC",
    "Aeropuertos ICAO",
    "Auditor\xEDas",
    "Certificaci\xF3n",
    "Documentaci\xF3n"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "Casco ARFF certificado NFPA 1971" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Casco con certificaci\xF3n EN 443" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP ARFF certificado" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Equipamiento certificado en uso" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Casco certificado en operaci\xF3n" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Equipo ARFF con documentaci\xF3n" }
  ], "capasEyebrow": "Normas y Certificaciones", "capasTitle": "Triple Marco Normativo", "capasDesc": "NFPA 1971 para EE.UU. y mercados que lo especifican, EN 443 para Europa y marca CE, ICAO Annex 14 para requisitos de aviaci\xF3n civil.", "capas": capas, "specsEyebrow": "Requisitos de Normas", "specsTitle": "Especificaciones de Certificaci\xF3n", "specsDesc": "Detalle de requisitos que cumple el casco seg\xFAn cada norma aplicable y documentaci\xF3n incluida.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Aplicaci\xF3n de Certificaciones", "aplicacionesTitle": "\xBFD\xF3nde se Requieren Estas Certificaciones?", "aplicacionesContent": "<p>Las certificaciones <strong>NFPA 1971 y EN 443</strong> son requeridas en bases de licitaci\xF3n para equipamiento ARFF en aeropuertos certificados. La compatibilidad <strong>ICAO Annex 14</strong> satisface requisitos de aviaci\xF3n civil internacional.</p><p>La documentaci\xF3n incluida est\xE1 dise\xF1ada espec\xEDficamente para cumplir requisitos de licitaciones <strong>DGAC, SCT, ASA</strong> y operadores aeroportuarios en M\xE9xico.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Marco Normativo", "certsTitle": "Cumplimiento Global de Certificaciones", "certsDesc": "El casco cumple los est\xE1ndares m\xE1s exigentes para servicios ARFF: <strong>NFPA 1971</strong> estadounidense, <strong>EN 443</strong> europeo con marca CE, y es compatible con <strong>ICAO Annex 14</strong> para aviaci\xF3n civil internacional.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Certificaciones", "faqDescription": "Dudas frecuentes sobre normas NFPA 1971, EN 443, requisitos ICAO, documentaci\xF3n para licitaciones y verificaci\xF3n de certificados.", "faqDocTitle": "Solicitar Documentaci\xF3n Completa", "faqDocDesc": "Obtenga certificados, fichas t\xE9cnicas y toda la documentaci\xF3n necesaria para su licitaci\xF3n.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Certificado Completo", "relacionadosTitle": "Sistema ARFF con Documentaci\xF3n", "relacionadosDesc": "Complete el sistema de protecci\xF3n ARFF con equipo certificado y documentaci\xF3n para licitaciones.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
