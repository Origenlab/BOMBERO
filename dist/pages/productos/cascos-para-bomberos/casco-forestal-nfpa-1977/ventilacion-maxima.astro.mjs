import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_CdTaHiqJ.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/pick-up-bomberos-forestal-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell HDPE con Sistema de Ventilaci\xF3n Integrado",
      descripcion: "Shell de polietileno de alta densidad (HDPE) con ranuras de ventilaci\xF3n estrat\xE9gicamente ubicadas en la corona y laterales. Las ranuras permiten flujo de aire convectivo que extrae el aire caliente y h\xFAmedo acumulado bajo el casco, reduciendo significativamente el riesgo de golpe de calor en climas tropicales.",
      specs: [
        { label: "Material", valor: "HDPE inyectado \u2014 Clase E" },
        { label: "Ventilaci\xF3n", valor: "6\u201310 ranuras (modelo dependiente)" },
        { label: "\xC1rea ventilada", valor: "~15 cm\xB2 total" },
        { label: "Tipo ranuras", valor: "Persianas anti-brasa" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Suspensi\xF3n con Canales de Flujo de Aire",
      descripcion: "El arn\xE9s de suspensi\xF3n est\xE1 dise\xF1ado con espaciadores que mantienen la corona del shell separada de la cabeza, creando una c\xE1mara de aire que permite circulaci\xF3n. La banda antisudor utiliza material de secado r\xE1pido (mesh t\xE9cnico) en lugar del algod\xF3n tradicional para mayor eficiencia de evaporaci\xF3n.",
      specs: [
        { label: "Tipo", valor: "4 puntos con espaciadores" },
        { label: "Separaci\xF3n", valor: "25\u201330 mm de la cabeza" },
        { label: "Banda", valor: "Mesh t\xE9cnico dry-fit" },
        { label: "Evaporaci\xF3n", valor: "3\xD7 m\xE1s r\xE1pido que algod\xF3n" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Protector de Nuca Transpirable",
      descripcion: "Protector de nuca FR con construcci\xF3n de malla abierta que permite flujo de aire mientras mantiene protecci\xF3n contra brasas. El material es Nomex\xAE mesh o equivalente con estructura de panal que maximiza la transpirabilidad sin comprometer la seguridad.",
      specs: [
        { label: "Material", valor: "Nomex\xAE mesh o TenCate mesh" },
        { label: "Construcci\xF3n", valor: "Panal / honeycomb" },
        { label: "Transpirabilidad", valor: "Alta \u2014 flujo de aire" },
        { label: "Protecci\xF3n", valor: "Brasas y ceniza caliente" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "HDPE inyectado (polietileno alta densidad)" },
    { categoria: "Shell", label: "Sistema ventilaci\xF3n", valor: "6\u201310 ranuras persianas anti-brasa" },
    { categoria: "Shell", label: "\xC1rea ventilaci\xF3n total", valor: "~15 cm\xB2 (dependiendo del modelo)" },
    { categoria: "Shell", label: "Peso shell solo", valor: "290\u2013340 g" },
    { categoria: "Shell", label: "Peso con accesorios", valor: "390\u2013470 g" },
    { categoria: "Shell", label: "Clase diel\xE9ctrica", valor: "Clase E \u2014 20,000V ANSI (no comprometida)" },
    { categoria: "Ventilaci\xF3n", label: "Tipo ranuras", valor: "Persianas inclinadas anti-brasa" },
    { categoria: "Ventilaci\xF3n", label: "C\xE1mara de aire", valor: "25\u201330 mm entre shell y cabeza" },
    { categoria: "Ventilaci\xF3n", label: "Banda antisudor", valor: "Mesh t\xE9cnico dry-fit" },
    { categoria: "Ventilaci\xF3n", label: "Protector nuca", valor: "FR mesh transpirable" },
    { categoria: "Suspensi\xF3n", label: "Tipo", valor: "4 puntos con espaciadores" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "Perilla giratoria" },
    { categoria: "Suspensi\xF3n", label: "Rango tallas", valor: "53\u201364 cm" },
    { categoria: "Protecci\xF3n", label: "Impacto superior", valor: "NFPA 1977 \xA7 6.1 \u2014 60 J m\xEDn." },
    { categoria: "Protecci\xF3n", label: "Penetraci\xF3n", valor: "NFPA 1977 \xA7 6.2 \u2014 sin penetraci\xF3n" },
    { categoria: "Protecci\xF3n", label: "Retenci\xF3n", valor: "NFPA 1977 \xA7 6.3 \u2014 > 22 kg fuerza" },
    { categoria: "Protecci\xF3n", label: "Llama/calor", valor: "NFPA 1977 \xA7 6.4 \u2014 sin ignici\xF3n 10s" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1977 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Vida \xFAtil fabricante", valor: "5 a\xF1os desde fecha de manufactura" }
  ];
  const catClass = {
    "Shell": "construccion",
    "Ventilaci\xF3n": "ergonomia",
    "Suspensi\xF3n": "ergonomia",
    "Protecci\xF3n": "proteccion",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Clima Tropical H\xFAmedo",
      desc: "Dise\xF1ado para operaciones en Chiapas, Oaxaca, Veracruz, Tabasco y la Pen\xEDnsula de Yucat\xE1n donde la humedad relativa supera 80% y las temperaturas ambiente exceden 35\xB0C. La ventilaci\xF3n previene acumulaci\xF3n de calor metab\xF3lico."
    },
    {
      titulo: "Jornadas Prolongadas (>8 horas)",
      desc: "En operaciones de supresi\xF3n que se extienden m\xE1s de 8 horas, el sistema de ventilaci\xF3n reduce la fatiga t\xE9rmica significativamente. El material dry-fit de la banda antisudor mantiene mejor tracci\xF3n incluso empapado de sudor."
    },
    {
      titulo: "Brigadas de Primera Respuesta",
      desc: "Personal que llega primero al incendio y trabaja en la fase m\xE1s intensa. La ventilaci\xF3n activa durante el esfuerzo m\xE1ximo previene el deterioro del rendimiento por sobrecalentamiento."
    },
    {
      titulo: "Zonas Bajas y Valle",
      desc: "Incendios en zonas bajas donde el calor ambiental se acumula en el valle. El casco ventilado es esencial cuando no hay brisa natural que ayude a disipar el calor corporal."
    }
  ];
  const faqs = [
    {
      q: "\xBFLas ranuras de ventilaci\xF3n no permiten que entren brasas?",
      a: "No. Las ranuras utilizan dise\xF1o de <strong>persiana inclinada</strong> que permite salida de aire caliente pero impide entrada de part\xEDculas desde arriba. El \xE1ngulo de las persianas (t\xEDpicamente 45\xB0) bloquea brasas que caen verticalmente. Los cascos con ventilaci\xF3n <strong>cumplen NFPA 1977 \xA7 6.4</strong> de resistencia a llama y calor \u2014 la certificaci\xF3n no se otorgar\xEDa si las ranuras comprometieran la protecci\xF3n."
    },
    {
      q: "\xBFLa ventilaci\xF3n compromete la protecci\xF3n diel\xE9ctrica Clase E?",
      a: "<strong>No</strong>. Las ranuras de ventilaci\xF3n est\xE1n ubicadas en la corona superior del casco, lejos de las zonas de contacto con cables. El shell mantiene su integridad estructural y propiedades diel\xE9ctricas en las \xE1reas laterales y frontales donde podr\xEDa ocurrir contacto accidental con l\xEDneas el\xE9ctricas. El casco sigue clasificando <strong>Clase E 20,000V ANSI</strong>."
    },
    {
      q: "\xBFCu\xE1nta diferencia de temperatura hace la ventilaci\xF3n?",
      a: "Estudios de fabricantes reportan diferencias de <strong>3\u20135\xB0C</strong> en la temperatura del microclima bajo el casco comparado con modelos sin ventilaci\xF3n, en condiciones de esfuerzo moderado. En t\xE9rminos de confort percibido, la diferencia es significativamente mayor porque el flujo de aire ayuda a la evaporaci\xF3n del sudor, que es el mecanismo principal de enfriamiento del cuerpo."
    },
    {
      q: "\xBFLa banda de mesh dry-fit realmente funciona mejor que algod\xF3n?",
      a: "S\xED, significativamente. El algod\xF3n absorbe sudor y se satura r\xE1pidamente, volvi\xE9ndose pesado e inc\xF3modo. El <strong>mesh t\xE9cnico dry-fit</strong> transporta la humedad hacia el exterior por capilaridad (<em>wicking</em>) donde se evapora. Mantiene mejor adherencia a la frente incluso mojado y <strong>seca 3\xD7 m\xE1s r\xE1pido</strong> durante pausas en la operaci\xF3n."
    },
    {
      q: "\xBFEste casco es apropiado para clima fr\xEDo de monta\xF1a?",
      a: "La ventilaci\xF3n que es beneficiosa en clima c\xE1lido puede ser excesiva en <strong>clima fr\xEDo de monta\xF1a</strong> (operaciones forestales de alta elevaci\xF3n en invierno). Para estas condiciones, considere el casco est\xE1ndar sin ventilaci\xF3n adicional o con <strong>tapones removibles</strong> para las ranuras si el modelo los incluye. Algunos fabricantes ofrecen kits de tapones opcionales."
    },
    {
      q: "\xBFQu\xE9 mantenimiento adicional requiere el sistema de ventilaci\xF3n?",
      a: "Las ranuras de ventilaci\xF3n deben <strong>inspeccionarse despu\xE9s de cada uso</strong> para asegurar que no est\xE9n obstruidas con ceniza, tierra o resina de \xE1rboles. Limpiar con cepillo suave y agua. Si las ranuras quedan obstruidas, la ventilaci\xF3n se pierde. La banda de mesh dry-fit se puede <strong>retirar y lavar</strong> en lavadora (ciclo suave, sin blanqueador) \u2014 secar al aire."
    }
  ];
  const relacionados = [
    {
      title: "Casco Forestal Termopl\xE1stico Est\xE1ndar",
      badge: "NFPA 1977",
      description: "Shell HDPE est\xE1ndar sin ventilaci\xF3n adicional. Para climas templados o preferencia de m\xE1xima protecci\xF3n.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero",
      buttonText: "Ver Est\xE1ndar",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Casco con Protecci\xF3n Facial",
      badge: "NFPA 1977",
      description: "Casco ventilado con pantalla facial de malla o policarbonato. Protecci\xF3n completa para clima c\xE1lido.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial",
      buttonText: "Ver con Pantalla",
      image: "/images/directorio/camion-bomberos-emergencia-01.avif"
    },
    {
      title: "Traje Forestal Ligero",
      badge: "NFPA 1977",
      description: "Chaqueta y pantal\xF3n < 6 oz/yd\xB2 para m\xE1xima transpirabilidad. El complemento ideal del casco ventilado.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Ver Traje Forestal",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Gafas Forestales Ventiladas",
      badge: "ANSI Z87.1",
      description: "Goggles con ventilaci\xF3n indirecta que no empa\xF1an. Compatibles con casco ventilado para m\xE1ximo flujo de aire.",
      href: "/productos/gafas",
      buttonText: "Ver Gafas Forestales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Termopl\xE1stico Ligero HDPE", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero" },
    { label: "Material Compuesto (Fibra Vidrio)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto" },
    { label: "Alta Visibilidad (Hi-Vis)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Con Protecci\xF3n Facial", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial" },
    { label: "Sistema Completo de Campo", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Forestal Ligero", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cuerpo" },
    { label: "Guantes Forestales", href: "/productos/guantes/forestales", tag: "Manos" },
    { label: "Botas Forestales Logger", href: "/productos/botas/forestal", tag: "Pies" },
    { label: "Goggles Ventilados", href: "/productos/gafas", tag: "Ojos" },
    { label: "Mochila de Hidrataci\xF3n", href: "/productos", tag: "Soporte" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos Forestales", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cat\xE1logo" },
    { label: "Golpe de Calor en Bomberos", href: "/productos", tag: "Gu\xEDa" },
    { label: "EPP para Clima Tropical", href: "/productos", tag: "Art\xEDculo" },
    { label: "Hidrataci\xF3n en Operaciones", href: "/productos", tag: "Gu\xEDa" },
    { label: "Cascos Estructurales NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Comparar" },
    { label: "Brigadas CONAFOR Sur-Sureste", href: "/productos", tag: "Normativa" }
  ];
  const directorioLinks = [
    { label: "Bomberos Forestales Chiapas", href: "/directorio/chiapas" },
    { label: "Bomberos Forestales Oaxaca", href: "/directorio/oaxaca" },
    { label: "Bomberos Forestales Veracruz", href: "/directorio/veracruz" },
    { label: "Bomberos Forestales Tabasco", href: "/directorio/tabasco" },
    { label: "Bomberos Forestales Yucat\xE1n", href: "/directorio/yucatan" },
    { label: "Directorio Nacional", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma", valor: "NFPA 1977" },
    { label: "Material", valor: "HDPE ventilado" },
    { label: "Ventilaci\xF3n", valor: "6\u201310 ranuras" },
    { label: "Peso total", valor: "390\u2013470 g" },
    { label: "Suspensi\xF3n", valor: "4 puntos + espaciadores" },
    { label: "Banda", valor: "Mesh dry-fit" },
    { label: "Diel\xE9ctrico", valor: "Clase E 20kV" },
    { label: "Vida \xFAtil", valor: "5 a\xF1os fab." }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Wildland Fire Fighting \u2014 incluye ventilaci\xF3n" },
    { code: "\xA7 6.4", desc: "Resistencia llama \u2014 ranuras no comprometen" },
    { code: "Clase E", desc: "Aislamiento diel\xE9ctrico mantenido" },
    { code: "Dry-Fit", desc: "Banda antisudor de secado r\xE1pido" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado \u2014 certificado incluido" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Forestal NFPA 1977 \u2014 Ventilaci\xF3n M\xE1xima | BOMBERO.MX", "description": "Casco forestal NFPA 1977 con sistema de ventilaci\xF3n integrado. Ranuras anti-brasa, banda dry-fit, protector nuca transpirable. Ideal para clima tropical. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "casco forestal ventilado",
    "casco NFPA 1977 ventilacion",
    "casco bombero forestal tropical",
    "casco wildland clima calido",
    "casco forestal anti golpe calor",
    "casco CONAFOR tropico",
    "casco forestal transpirable",
    "comprar casco forestal ventilado Mexico"
  ], "canonical": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Ventilaci\xF3n M\xE1xima" }
  ], "heroBadge": "Casco Forestal \xB7 NFPA 1977 \xB7 M\xE1xima Ventilaci\xF3n", "heroTitle": "Casco Forestal NFPA 1977", "heroTitleHighlight": "Ventilaci\xF3n M\xE1xima", "heroSubtitle": "Sistema de ventilaci\xF3n integrado con ranuras anti-brasa, banda antisudor de mesh dry-fit y protector de nuca transpirable. Dise\xF1ado para prevenir golpe de calor en climas tropicales h\xFAmedos con temperaturas >35\xB0C y humedad >80%.", "heroSeoBlocks": [
    {
      title: "Ventilaci\xF3n Activa para Clima Tropical Mexicano",
      text: "El <strong>sistema de ventilaci\xF3n integrado</strong> utiliza ranuras tipo persiana en la corona que permiten salida de aire caliente sin comprometer protecci\xF3n contra brasas. La <strong>c\xE1mara de aire de 25\u201330 mm</strong> entre shell y cabeza permite flujo convectivo que extrae el calor metab\xF3lico acumulado."
    },
    {
      title: "Banda Dry-Fit y Protector Transpirable",
      text: "La <strong>banda antisudor de mesh t\xE9cnico</strong> seca 3\xD7 m\xE1s r\xE1pido que el algod\xF3n tradicional, manteniendo mejor tracci\xF3n incluso empapada. El <strong>protector de nuca FR mesh</strong> con construcci\xF3n de panal maximiza transpirabilidad sin comprometer certificaci\xF3n NFPA 1977."
    }
  ], "ctaBarQuote": "Cotizar Casco Forestal Ventilaci\xF3n M\xE1xima", "productoCategoria": "Casco Forestal Ventilado", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "Ventilado" },
    { modifier: "solas", text: "Dry-Fit" }
  ], "productoMasVendido": true, "productoTitle": "Casco Forestal NFPA 1977", "productoTitleSub": "Ventilaci\xF3n M\xE1xima \u2014 Clima Tropical", "productoDesc": "Shell HDPE con 6\u201310 ranuras de ventilaci\xF3n tipo persiana anti-brasa. Suspensi\xF3n con espaciadores para c\xE1mara de aire. Banda antisudor de mesh dry-fit de secado r\xE1pido. Protector de nuca FR transpirable. Certificado NFPA 1977.", "productoFeatures": [
    "Shell HDPE con ranuras anti-brasa",
    "6\u201310 ranuras tipo persiana inclinada",
    "Banda antisudor mesh dry-fit",
    "Protector nuca FR mesh transpirable",
    "C\xE1mara de aire 25\u201330 mm",
    "Clase E diel\xE9ctrico mantenido"
  ], "productoAppTags": [
    "Clima tropical",
    "Humedad >80%",
    "Jornadas largas",
    "Sur-Sureste M\xE9xico",
    "Prevenci\xF3n golpe calor"
  ], "gallery": [
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Casco forestal NFPA 1977 ventilaci\xF3n m\xE1xima" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada forestal con casco ventilado" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Casco ventilado en operaci\xF3n tropical" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal en clima c\xE1lido" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP forestal transpirable" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Casco forestal ventilado en acci\xF3n" }
  ], "capasEyebrow": "Sistema de Ventilaci\xF3n", "capasTitle": "Componentes del Casco Ventilado", "capasDesc": "Cada componente est\xE1 dise\xF1ado para maximizar el flujo de aire y evaporaci\xF3n del sudor mientras mantiene protecci\xF3n completa NFPA 1977.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones NFPA 1977 \u2014 Ventilaci\xF3n", "specsDesc": "Sistema de ventilaci\xF3n certificado que cumple todos los requisitos NFPA 1977 incluyendo resistencia a llama y calor en ranuras.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Casco con Ventilaci\xF3n M\xE1xima?", "aplicacionesContent": "<p>El casco con ventilaci\xF3n m\xE1xima es esencial para operaciones en <strong>climas tropicales h\xFAmedos</strong> del sur y sureste de M\xE9xico, donde la combinaci\xF3n de temperatura ambiente alta y humedad relativa elevada dificulta la termorregulaci\xF3n del cuerpo.</p><p>El <strong>golpe de calor</strong> es una emergencia m\xE9dica que puede ser fatal. La ventilaci\xF3n activa del casco es una medida preventiva cr\xEDtica junto con hidrataci\xF3n adecuada y rotaci\xF3n de personal.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "NFPA 1977 \u2014 Ventilaci\xF3n Certificada", "certsDesc": "El sistema de ventilaci\xF3n con ranuras tipo persiana <strong>cumple NFPA 1977 \xA7 6.4</strong> de resistencia a llama y calor. Las pruebas de laboratorio verifican que las ranuras no permiten entrada de brasas ni comprometen la protecci\xF3n t\xE9rmica del shell.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Ventilaci\xF3n del Casco", "faqDescription": "Dudas frecuentes sobre el sistema de ventilaci\xF3n: protecci\xF3n contra brasas, eficiencia t\xE9rmica, mantenimiento y aplicaciones espec\xEDficas.", "faqDocTitle": "Documentaci\xF3n T\xE9cnica", "faqDocDesc": "Solicita ficha t\xE9cnica completa, certificado de laboratorio y gu\xEDa de tallas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Forestal Transpirable", "relacionadosTitle": "Sistema Completo para Clima C\xE1lido", "relacionadosDesc": "Combine el casco ventilado con el resto del EPP dise\xF1ado para maximizar transpirabilidad en climas tropicales.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
