import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/camion-bomberos-aeropuerto-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell de Material Compuesto con Alta Reflectividad T\xE9rmica",
      descripcion: "Shell de fibra de vidrio con resina fen\xF3lica termoestable y acabado de alta reflectividad t\xE9rmica. La superficie puede incluir tratamiento aluminizado para reflejar hasta 85% de la radiaci\xF3n infrarroja de incendios de combustible de aviaci\xF3n. El material compuesto resiste hasta 1000\xB0C de exposici\xF3n t\xE9rmica moment\xE1nea sin degradaci\xF3n estructural.",
      specs: [
        { label: "Material", valor: "Fibra vidrio + resina fen\xF3lica" },
        { label: "Acabado", valor: "Alta reflectividad t\xE9rmica" },
        { label: "Peso shell", valor: "450\u2013550 g" },
        { label: "Temp. pico", valor: "1000\xB0C moment\xE1neo (30s)" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Visor Retr\xE1ctil con Recubrimiento Dorado IR",
      descripcion: "Visor de policarbonato \xF3ptico con recubrimiento de oro vaporizado que filtra el 95% de la radiaci\xF3n infrarroja. Sistema retr\xE1ctil de operaci\xF3n con una mano, compatible con SCBA. Tratamiento antiempa\xF1ante permanente y resistencia a salpicaduras de combustible de aviaci\xF3n (Jet A-1, AVGAS).",
      specs: [
        { label: "Material visor", valor: "Policarbonato + oro vaporizado" },
        { label: "Filtro IR", valor: "95% radiaci\xF3n infrarroja" },
        { label: "Sistema", valor: "Retr\xE1ctil una mano" },
        { label: "Tratamiento", valor: "Anti-fog permanente" }
      ],
      color: "fire"
    },
    {
      num: "03",
      titulo: "Orejeras T\xE9rmicas y Protector de Nuca ARFF",
      descripcion: "Orejeras de Nomex\xAE/Kevlar\xAE con m\xFAltiples capas de protecci\xF3n t\xE9rmica, desmontables para limpieza y reemplazo. Protector de nuca extendido con respaldo aluminizado que cubre toda la zona cervical. Protecci\xF3n auditiva integrada NRR 24 dB para ruido de turbinas en operaci\xF3n.",
      specs: [
        { label: "Material orejeras", valor: "Nomex\xAE/Kevlar\xAE multicapa" },
        { label: "Protecci\xF3n auditiva", valor: "NRR 24 dB integrada" },
        { label: "Protector nuca", valor: "Aluminizado extendido" },
        { label: "Sistema", valor: "Desmontable y lavable" }
      ],
      color: "smoke"
    }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "Fibra de vidrio + resina fen\xF3lica termoestable" },
    { categoria: "Shell", label: "Acabado", valor: "Alta reflectividad t\xE9rmica (std.) o aluminizado (opc.)" },
    { categoria: "Shell", label: "Peso shell solo", valor: "450\u2013550 g" },
    { categoria: "Shell", label: "Peso sistema completo", valor: "1100\u20131300 g" },
    { categoria: "Shell", label: "Temp. trabajo continuo", valor: "260\xB0C (500\xB0F)" },
    { categoria: "Shell", label: "Temp. pico moment\xE1neo", valor: "1000\xB0C por 30 seg" },
    { categoria: "Visor", label: "Material", valor: "Policarbonato + recubrimiento oro vaporizado" },
    { categoria: "Visor", label: "Filtro radiaci\xF3n IR", valor: "95%" },
    { categoria: "Visor", label: "Transmitancia visible", valor: ">75%" },
    { categoria: "Visor", label: "Sistema", valor: "Retr\xE1ctil operaci\xF3n una mano" },
    { categoria: "Visor", label: "Tratamiento", valor: "Anti-rayaduras + antiempa\xF1ante permanente" },
    { categoria: "Protecci\xF3n", label: "Orejeras", valor: "Nomex\xAE/Kevlar\xAE multicapa desmontables" },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n auditiva", valor: "NRR 24 dB integrada" },
    { categoria: "Protecci\xF3n", label: "Protector nuca", valor: "Aluminizado extendido cervical" },
    { categoria: "Suspensi\xF3n", label: "Tipo", valor: "6 puntos con ajuste r\xE1pido" },
    { categoria: "Suspensi\xF3n", label: "Rango tallas", valor: "52\u201364 cm" },
    { categoria: "Suspensi\xF3n", label: "Compatibilidad", valor: "SCBA, radio, iluminaci\xF3n" },
    { categoria: "Certificaci\xF3n", label: "Norma primaria", valor: "NFPA 1971 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Norma europea", valor: "EN 443 (cascos bomberos)" },
    { categoria: "Certificaci\xF3n", label: "Aviaci\xF3n civil", valor: "Compatible ICAO Annex 14" },
    { categoria: "Certificaci\xF3n", label: "M\xE9xico", valor: "V\xE1lido licitaciones DGAC/SCT" }
  ];
  const catClass = {
    "Shell": "construccion",
    "Visor": "proteccion",
    "Protecci\xF3n": "proteccion",
    "Suspensi\xF3n": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Servicios ARFF en Aeropuertos Certificados DGAC",
      desc: "El casco es el equipo est\xE1ndar para servicios de rescate y extinci\xF3n de incendios de aeronaves (ARFF - Aircraft Rescue and Fire Fighting) en aeropuertos con categor\xEDa de salvamento asignada seg\xFAn ICAO Annex 14 y regulaciones DGAC M\xE9xico."
    },
    {
      titulo: "Emergencias en Aeronaves Comerciales",
      desc: "Rescate de pasajeros y tripulaci\xF3n en emergencias de aviaci\xF3n comercial. El visor dorado y las orejeras t\xE9rmicas protegen de la radiaci\xF3n extrema de incendios de jet fuel (Jet A-1) que puede alcanzar 1000\xB0C."
    },
    {
      titulo: "Incendios de Combustible de Aviaci\xF3n",
      desc: "Control y extinci\xF3n de incendios de combustible de aviaci\xF3n en pistas, hangares y zonas de abastecimiento. La protecci\xF3n t\xE9rmica del casco permite aproximaci\xF3n a la zona caliente para aplicaci\xF3n de agente extintor."
    },
    {
      titulo: "Operaciones Nocturnas en Aeropuertos",
      desc: "Compatible con sistemas de iluminaci\xF3n LED integrados para operaciones de rescate nocturnas. Los aeropuertos mexicanos con operaciones 24 horas requieren capacidad de respuesta en cualquier condici\xF3n de luz."
    }
  ];
  const faqs = [
    {
      q: "\xBFQu\xE9 diferencia hay entre un casco ARFF y un casco estructural NFPA 1971 convencional?",
      a: "El casco ARFF tiene caracter\xEDsticas espec\xEDficas para <strong>entorno aeroportuario</strong>: (1) Acabado de <strong>alta reflectividad t\xE9rmica</strong> para radiaci\xF3n extrema de jet fuel. (2) <strong>Visor dorado</strong> con filtro IR del 95% para protecci\xF3n visual. (3) <strong>Orejeras t\xE9rmicas extendidas</strong> con protecci\xF3n auditiva para ruido de turbinas. (4) Compatibilidad con <strong>ICAO Annex 14</strong> para servicios ARFF certificados. El casco estructural est\xE1ndar no tiene estos elementos espec\xEDficos."
    },
    {
      q: "\xBFEl visor dorado permite ver claramente durante la operaci\xF3n?",
      a: "S\xED. El <strong>recubrimiento de oro vaporizado</strong> filtra el 95% de la radiaci\xF3n infrarroja pero mantiene una <strong>transmitancia de luz visible superior al 75%</strong>. Es similar al visor dorado de los astronautas. La visi\xF3n es clara y sin distorsi\xF3n, con el beneficio de proteger los ojos del deslumbramiento por llamas y radiaci\xF3n t\xE9rmica intensa."
    },
    {
      q: "\xBFQu\xE9 significa compatibilidad con ICAO Annex 14?",
      a: "<strong>ICAO Annex 14</strong> es el est\xE1ndar de la <strong>Organizaci\xF3n de Aviaci\xF3n Civil Internacional</strong> que establece requisitos para aeropuertos, incluyendo servicios ARFF. La compatibilidad significa que el casco cumple los est\xE1ndares de protecci\xF3n y desempe\xF1o que los aeropuertos internacionales requieren para sus servicios de rescate. En M\xE9xico, la <strong>DGAC</strong> (Direcci\xF3n General de Aeron\xE1utica Civil) aplica estos est\xE1ndares."
    },
    {
      q: "\xBFPor qu\xE9 las orejeras incluyen protecci\xF3n auditiva NRR 24 dB?",
      a: "Los <strong>motores de turbina de aeronaves</strong> producen ruido de 130\u2013140 dB durante operaci\xF3n, muy por encima del umbral de da\xF1o auditivo (85 dB). Durante operaciones de rescate con turbinas funcionando o apag\xE1ndose, la exposici\xF3n puede causar <strong>da\xF1o auditivo permanente</strong>. El <strong>NRR 24 dB</strong> reduce el nivel a rangos seguros mientras permite comunicaci\xF3n por radio."
    },
    {
      q: "\xBFEste casco sirve para bomberos estructurales de ciudad?",
      a: "T\xE9cnicamente s\xED, porque cumple <strong>NFPA 1971</strong>. Sin embargo, el casco ARFF tiene caracter\xEDsticas espec\xEDficas (y costo adicional) dise\xF1adas para <strong>entorno aeroportuario</strong> que no aportan beneficio en incendios estructurales urbanos. Para bomberos de ciudad, un casco estructural NFPA 1971 est\xE1ndar es m\xE1s apropiado y econ\xF3mico. El ARFF es para <strong>servicios aeroportuarios especializados</strong>."
    },
    {
      q: "\xBFQu\xE9 documentaci\xF3n incluye para licitaciones de aeropuertos?",
      a: "Cada casco incluye: <strong>(1)</strong> Certificado de laboratorio acreditado ISO/IEC 17025 con n\xFAmero de serie. <strong>(2)</strong> Declaraci\xF3n de conformidad NFPA 1971 y EN 443. <strong>(3)</strong> Ficha t\xE9cnica completa en espa\xF1ol. <strong>(4)</strong> Carta de garant\xEDa del fabricante. <strong>(5)</strong> Manual de operaci\xF3n y mantenimiento. Esta documentaci\xF3n es v\xE1lida para licitaciones de <strong>DGAC, SCT, ASA</strong> y operadores aeroportuarios."
    }
  ];
  const relacionados = [
    {
      title: "Casco ARFF Shell Aluminizado",
      badge: "ARFF",
      description: "Acabado aluminizado para m\xE1xima reflectividad t\xE9rmica (85%+) en aproximaci\xF3n a fuegos intensos de jet fuel.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/shell-aluminizado",
      buttonText: "Ver Aluminizado",
      image: IMAGE
    },
    {
      title: "Traje ARFF Aluminizado",
      badge: "ARFF",
      description: "Traje de proximidad aluminizado para aproximaci\xF3n m\xE1xima a incendios de combustible de aviaci\xF3n.",
      href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario",
      buttonText: "Ver Traje ARFF",
      image: IMAGE
    },
    {
      title: "Guantes ARFF Aluminizados",
      badge: "ARFF",
      description: "Guantes de alta reflectividad t\xE9rmica compatibles con el sistema de protecci\xF3n ARFF.",
      href: "/productos/guantes-para-bomberos/estructurales",
      buttonText: "Ver Guantes ARFF",
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
    { label: "Shell Aluminizado 85%+", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/shell-aluminizado" },
    { label: "Visor Dorado Filtro IR", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado" },
    { label: "Orejeras T\xE9rmicas Desmontables", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas" },
    { label: "Linterna LED Integrada", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/linterna-integrada" },
    { label: "Certificaciones Aeroportuarias", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje ARFF Aluminizado", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cuerpo" },
    { label: "Guantes ARFF", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Botas ARFF", href: "/productos/botas-para-bomberos/estructural", tag: "Pies" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Norma ICAO Annex 14 Explicada", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Servicios ARFF en M\xE9xico", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Producto" },
    { label: "Requisitos DGAC Aeropuertos", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Protecci\xF3n contra Jet Fuel", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Producto" },
    { label: "Cascos Estructurales Comparativa", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Comparar" }
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
    { label: "Certificaci\xF3n", valor: "NFPA 1971 + EN 443" },
    { label: "Compatibilidad", valor: "ICAO Annex 14" },
    { label: "Shell", valor: "Fibra vidrio + fen\xF3lica" },
    { label: "Visor", valor: "Dorado filtro IR 95%" },
    { label: "Orejeras", valor: "Nomex\xAE/Kevlar\xAE NRR 24" },
    { label: "Peso sistema", valor: "1100\u20131300 g" },
    { label: "Temp. pico", valor: "1000\xB0C \xD7 30s" },
    { label: "Licitaciones", valor: "DGAC/SCT v\xE1lido" }
  ];
  const certItems = [
    { code: "NFPA 1971", desc: "Cascos bomberos \u2014 protecci\xF3n estructural" },
    { code: "EN 443", desc: "Cascos bomberos \u2014 est\xE1ndar europeo" },
    { code: "ICAO Annex 14", desc: "Organizaci\xF3n de Aviaci\xF3n Civil Internacional" },
    { code: "DGAC/SCT", desc: "V\xE1lido para licitaciones aeroportuarias M\xE9xico" },
    { code: "ISO/IEC 17025", desc: "Certificado laboratorio acreditado incluido" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco ARFF Aeroportuario \u2014 Sistema Completo NFPA 1971 | BOMBERO.MX", "description": "Casco ARFF aeroportuario sistema completo. Shell material compuesto, visor dorado IR 95%, orejeras Nomex\xAE/Kevlar\xAE. Certificado NFPA 1971, EN 443, compatible ICAO Annex 14. Para servicios ARFF en aeropuertos M\xE9xico.", "keywords": [
    "casco ARFF aeroportuario",
    "casco bombero aeropuerto M\xE9xico",
    "casco Aircraft Rescue Firefighting",
    "casco NFPA 1971 aeropuerto",
    "casco visor dorado ARFF",
    "casco ICAO Annex 14",
    "casco bombero DGAC",
    "comprar casco ARFF Mexico"
  ], "canonical": "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco ARFF Aeroportuario", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario" },
    { label: "Sistema Completo" }
  ], "heroBadge": "Casco ARFF \xB7 NFPA 1971 \xB7 EN 443 \xB7 ICAO Annex 14", "heroTitle": "Casco ARFF Aeroportuario", "heroTitleHighlight": "Sistema Completo", "heroSubtitle": "El casco de protecci\xF3n est\xE1ndar para servicios ARFF (Aircraft Rescue and Fire Fighting) en aeropuertos certificados. Shell de material compuesto con alta reflectividad t\xE9rmica, visor dorado con filtro IR 95%, orejeras t\xE9rmicas Nomex\xAE/Kevlar\xAE con protecci\xF3n auditiva NRR 24 dB.", "heroSeoBlocks": [
    {
      title: "Protecci\xF3n ARFF para Incendios de Combustible de Aviaci\xF3n",
      text: "El <strong>casco ARFF Sistema Completo</strong> proporciona la protecci\xF3n necesaria para aproximaci\xF3n a incendios de <strong>combustible de aviaci\xF3n (Jet A-1, AVGAS)</strong> que alcanzan temperaturas de 1000\xB0C. El visor dorado filtra el <strong>95% de la radiaci\xF3n infrarroja</strong> protegiendo los ojos de deslumbramiento y da\xF1o t\xE9rmico."
    },
    {
      title: "Certificaci\xF3n para Aeropuertos DGAC/SCT M\xE9xico",
      text: "Cumple <strong>NFPA 1971, EN 443</strong> y es compatible con <strong>ICAO Annex 14</strong> \u2014 el est\xE1ndar internacional para servicios ARFF en aeropuertos. Documentaci\xF3n completa incluida para licitaciones de <strong>DGAC (Direcci\xF3n General de Aeron\xE1utica Civil)</strong>, SCT y operadores aeroportuarios en M\xE9xico."
    }
  ], "ctaBarQuote": "Cotizar Casco ARFF Sistema Completo", "productoCategoria": "Casco ARFF Aeroportuario", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1971" },
    { modifier: "tpp", text: "EN 443" },
    { modifier: "solas", text: "ICAO" }
  ], "productoMasVendido": true, "productoTitle": "Casco ARFF Aeroportuario", "productoTitleSub": "Sistema Completo", "productoDesc": "Shell de fibra de vidrio con acabado de alta reflectividad t\xE9rmica. Visor retr\xE1ctil de policarbonato con recubrimiento dorado (filtro IR 95%). Orejeras t\xE9rmicas Nomex\xAE/Kevlar\xAE con protecci\xF3n auditiva NRR 24 dB. Protector de nuca aluminizado. Certificado NFPA 1971 + EN 443.", "productoFeatures": [
    "Shell material compuesto alta reflectividad",
    "Visor dorado filtro IR 95% retr\xE1ctil",
    "Orejeras Nomex\xAE/Kevlar\xAE NRR 24 dB",
    "Protector nuca aluminizado extendido",
    "Certificado NFPA 1971 + EN 443",
    "Compatible ICAO Annex 14 \u2014 v\xE1lido DGAC"
  ], "productoAppTags": [
    "Aeropuertos",
    "Servicios ARFF",
    "Jet fuel",
    "Rescate aeronaves",
    "DGAC/SCT"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "Casco ARFF aeroportuario sistema completo" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero ARFF con casco completo" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP ARFF aeroportuario" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento ARFF con casco" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Casco ARFF en operaci\xF3n" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Veh\xEDculo ARFF con equipo completo" }
  ], "capasEyebrow": "Componentes del Sistema", "capasTitle": "Anatom\xEDa del Casco ARFF", "capasDesc": "Cada componente est\xE1 dise\xF1ado para protecci\xF3n espec\xEDfica en entorno aeroportuario: radiaci\xF3n t\xE9rmica extrema, ruido de turbinas y condiciones de combustible de aviaci\xF3n.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones ARFF Sistema Completo", "specsDesc": "Par\xE1metros certificados seg\xFAn NFPA 1971 y EN 443, con caracter\xEDsticas adicionales para compatibilidad ICAO Annex 14 y licitaciones aeroportuarias.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios ARFF", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Casco ARFF?", "aplicacionesContent": "<p>El casco ARFF Sistema Completo es el equipo de protecci\xF3n de cabeza est\xE1ndar para <strong>servicios de rescate y extinci\xF3n de incendios de aeronaves</strong> en aeropuertos con categor\xEDa de salvamento seg\xFAn ICAO Annex 14.</p><p>Los aeropuertos mexicanos con operaciones comerciales requieren servicios ARFF equipados seg\xFAn est\xE1ndares internacionales certificados por <strong>DGAC</strong>.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones Aeroportuarias", "certsTitle": "Triple Certificaci\xF3n: NFPA 1971 + EN 443 + ICAO", "certsDesc": "El casco cumple los est\xE1ndares m\xE1s exigentes para servicios ARFF: norma estadounidense <strong>NFPA 1971</strong>, norma europea <strong>EN 443</strong> y es compatible con los requisitos de <strong>ICAO Annex 14</strong> para servicios de rescate aeroportuario.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Cascos ARFF", "faqDescription": "Dudas frecuentes sobre especificaciones, certificaciones aeroportuarias, compatibilidad con sistemas de respiraci\xF3n y aplicaciones ARFF.", "faqDocTitle": "Documentaci\xF3n para Licitaciones", "faqDocDesc": "Solicita certificados, fichas t\xE9cnicas y documentaci\xF3n completa para licitaciones DGAC/SCT.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "Sistema ARFF Completo", "relacionadosTitle": "EPP para Servicios Aeroportuarios", "relacionadosDesc": "El casco es parte del sistema de protecci\xF3n ARFF. Complete el equipo con traje, guantes, botas y SCBA espec\xEDficos para operaciones aeroportuarias.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
