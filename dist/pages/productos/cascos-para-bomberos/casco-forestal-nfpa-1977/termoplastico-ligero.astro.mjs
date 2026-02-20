import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/pick-up-bomberos-forestal-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell HDPE \u2014 Polietileno de Alta Densidad",
      descripcion: "El shell de polietileno de alta densidad (HDPE) inyectado ofrece la mejor relaci\xF3n peso-resistencia para operaciones forestales. A diferencia del ABS, el HDPE mantiene sus propiedades mec\xE1nicas bajo exposici\xF3n solar prolongada y no se vuelve fr\xE1gil con los ciclos t\xE9rmicos t\xEDpicos del trabajo en campo.",
      specs: [
        { label: "Material", valor: "HDPE inyectado \u2014 Clase E diel\xE9ctrico" },
        { label: "Peso shell", valor: "280\u2013320 g (sin accesorios)" },
        { label: "Temp. trabajo", valor: "-30\xB0C a +50\xB0C continuo" },
        { label: "Deformaci\xF3n", valor: "Recuperaci\xF3n el\xE1stica bajo impacto" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Suspensi\xF3n Textil \u2014 4 Puntos con Banda Antisudor",
      descripcion: "Sistema de suspensi\xF3n de 4 puntos en cinta de nylon con banda antisudor de espuma EVA forrada en algod\xF3n. El dise\xF1o de 4 puntos es el est\xE1ndar para cascos forestales: menor peso que 6 puntos con absorci\xF3n de impacto certificada NFPA 1977. Ajuste por perilla trasera o cinta con hebilla.",
      specs: [
        { label: "Tipo", valor: "4 puntos \u2014 nylon trenzado" },
        { label: "Banda frontal", valor: "EVA + algod\xF3n absorbente" },
        { label: "Ajuste", valor: "Perilla giratoria o hebilla" },
        { label: "Rango", valor: "53\u201364 cm (talla universal)" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Protector de Nuca \u2014 Tela FR Retardante",
      descripcion: "El protector de nuca (shroud) en tela retardante al fuego protege la parte posterior del cuello contra brasas voladoras, ceniza caliente y radiaci\xF3n solar. Materiales t\xEDpicos: Nomex\xAE, Indura\xAE o Tecasafe\xAE Plus. Se fija al borde posterior del casco mediante sistema de clips o velcro.",
      specs: [
        { label: "Material", valor: "Nomex\xAE IIIA o Indura\xAE 9 oz" },
        { label: "Fijaci\xF3n", valor: "Clips pl\xE1sticos o velcro" },
        { label: "Lavable", valor: "S\xED \u2014 m\xE1quina 40\xB0C ciclo suave" },
        { label: "Reemplazo", valor: "Disponible como refacci\xF3n" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "HDPE inyectado (polietileno alta densidad)" },
    { categoria: "Shell", label: "Peso shell solo", valor: "280\u2013320 g" },
    { categoria: "Shell", label: "Peso con accesorios", valor: "380\u2013450 g" },
    { categoria: "Shell", label: "Clase diel\xE9ctrica", valor: "Clase E \u2014 20,000V ANSI" },
    { categoria: "Shell", label: "Color est\xE1ndar", valor: "Amarillo OSHA o naranja ANSI" },
    { categoria: "Suspensi\xF3n", label: "Tipo", valor: "4 puntos textil" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "Perilla giratoria o hebilla" },
    { categoria: "Suspensi\xF3n", label: "Rango tallas", valor: "53\u201364 cm (S/M/L universal)" },
    { categoria: "Suspensi\xF3n", label: "Banda antisudor", valor: "EVA + algod\xF3n o Terry cloth" },
    { categoria: "Suspensi\xF3n", label: "Barbiquejo", valor: "2 puntos con mentonera \u2014 incluido" },
    { categoria: "Protecci\xF3n", label: "Impacto superior", valor: "NFPA 1977 \xA7 6.1 \u2014 60 J m\xEDn." },
    { categoria: "Protecci\xF3n", label: "Penetraci\xF3n", valor: "NFPA 1977 \xA7 6.2 \u2014 sin penetraci\xF3n" },
    { categoria: "Protecci\xF3n", label: "Retenci\xF3n", valor: "NFPA 1977 \xA7 6.3 \u2014 > 22 kg fuerza" },
    { categoria: "Protecci\xF3n", label: "Llama/calor", valor: "NFPA 1977 \xA7 6.4 \u2014 sin ignici\xF3n 10s" },
    { categoria: "Protecci\xF3n", label: "Protector nuca", valor: "Nomex\xAE IIIA o equivalente FR" },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1977 edici\xF3n 2022 o vigente" },
    { categoria: "Certificaci\xF3n", label: "Norma complementaria", valor: "ANSI Z89.1 Tipo I Clase E" },
    { categoria: "Certificaci\xF3n", label: "Vida \xFAtil fabricante", valor: "5 a\xF1os desde fecha de manufactura" }
  ];
  const catClass = {
    "Shell": "construccion",
    "Suspensi\xF3n": "ergonomia",
    "Protecci\xF3n": "proteccion",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Combate de Incendios Forestales",
      desc: "Operaciones de supresi\xF3n directa e indirecta. El peso ligero (< 450 g) reduce la fatiga cervical durante jornadas de 8\u201312 horas en pendientes pronunciadas. La ventilaci\xF3n previene golpe de calor."
    },
    {
      titulo: "Quemas Prescritas y Controladas",
      desc: "Operaciones planificadas de manejo de combustibles. CONAFOR y SEMARNAT requieren casco certificado NFPA 1977 para todo personal en l\xEDnea de fuego durante quemas de prescripci\xF3n."
    },
    {
      titulo: "Interfaz Urbano-Forestal (WUI)",
      desc: "Incendios en zonas donde la vegetaci\xF3n natural colinda con desarrollos urbanos. El casco forestal es adecuado cuando la exposici\xF3n es principalmente radiante y de brasas, no llama directa estructural."
    },
    {
      titulo: "Brigadas CONAFOR y Protecci\xF3n Civil",
      desc: "Equipamiento est\xE1ndar para brigadas federales, estatales y municipales. La certificaci\xF3n NFPA 1977 es requisito en licitaciones p\xFAblicas desde 2018 para equipo de protecci\xF3n forestal."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1l es la diferencia real entre un casco forestal NFPA 1977 y uno estructural NFPA 1971?",
      a: "La diferencia fundamental es el <strong>nivel de protecci\xF3n t\xE9rmica</strong>. El casco estructural NFPA 1971 tiene orejeras t\xE9rmicas gruesas, visor de policarbonato resistente a calor y pesa 900\u20131400 g porque est\xE1 dise\xF1ado para exposici\xF3n directa a llama en interiores. El casco forestal NFPA 1977 pesa 350\u2013450 g, tiene ventilaci\xF3n abundante y protector de nuca ligero porque la exposici\xF3n forestal es principalmente <strong>radiante y de brasas</strong>, no inmersi\xF3n en llamas. Usar el casco incorrecto compromete la seguridad."
    },
    {
      q: "\xBFPor qu\xE9 el shell es HDPE y no ABS como los cascos industriales?",
      a: "El <strong>HDPE (polietileno de alta densidad)</strong> mantiene mejor sus propiedades bajo exposici\xF3n solar prolongada y ciclos de temperatura extremos. El ABS puede volverse fr\xE1gil con exposici\xF3n UV y fallar bajo impacto despu\xE9s de varios a\xF1os en campo. El HDPE tambi\xE9n tiene mejor comportamiento ante calor radiante \u2014 se deforma gradualmente en lugar de fracturarse. Para cascos forestales con vida \xFAtil de campo, el HDPE es el material preferido."
    },
    {
      q: "\xBFCu\xE1nto dura realmente un casco forestal en servicio activo?",
      a: "La <strong>vida \xFAtil recomendada</strong> es de <strong>5 a\xF1os desde la fecha de manufactura</strong> seg\xFAn la mayor\xEDa de fabricantes (Bullard, MSA, Pacific). Sin embargo, debe retirarse antes si presenta: grietas o fisuras visibles, decoloraci\xF3n severa (indica degradaci\xF3n UV), deformaci\xF3n permanente, o despu\xE9s de cualquier impacto significativo. Las brigadas de alta actividad (>100 jornadas/a\xF1o) deben considerar reemplazo a los 3 a\xF1os."
    },
    {
      q: "\xBFEl protector de nuca en Nomex\xAE es obligatorio seg\xFAn NFPA 1977?",
      a: "La norma <strong>NFPA 1977</strong> especifica que el casco debe proporcionar protecci\xF3n a la cabeza incluyendo la nuca (<em>shroud</em>). El protector debe ser de material retardante al fuego \u2014 Nomex\xAE, Indura\xAE o equivalente \u2014 que pase las pruebas de llama vertical. Los cascos sin protector de nuca <strong>no cumplen NFPA 1977</strong> y no deben usarse en l\xEDnea de fuego."
    },
    {
      q: "\xBFPuedo usar gafas de seguridad normales o necesito gafas forestales espec\xEDficas?",
      a: "Para operaciones forestales se recomiendan <strong>gafas o goggles certificados ANSI Z87.1</strong> con ventilaci\xF3n indirecta para evitar empa\xF1amiento. Las gafas de seguridad industriales est\xE1ndar pueden empa\xF1arse con el sudor. Los goggles forestales tienen ventilaci\xF3n lateral con malla o espuma que permite flujo de aire pero bloquea part\xEDculas. El casco debe ser compatible con el sistema de gafas elegido."
    },
    {
      q: "\xBFEste casco sirve para rescate en espacios confinados o trabajos en altura?",
      a: "No como equipo primario. El casco forestal NFPA 1977 est\xE1 dise\xF1ado espec\xEDficamente para <strong>combate de incendios forestales</strong>. Para rescate vertical o espacios confinados se requiere casco tipo alpinismo certificado <strong>NFPA 1951 o EN 12492</strong> con puntos de anclaje para sistemas de cuerda y barbiquejo de 4 puntos con liberaci\xF3n de emergencia. Usar el equipo correcto para cada operaci\xF3n."
    }
  ];
  const relacionados = [
    {
      title: "Casco Forestal con Pantalla Facial",
      badge: "NFPA 1977",
      description: "Mismo shell HDPE con pantalla de malla met\xE1lica o policarbonato integrada para protecci\xF3n facial contra ramas y ceniza.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial",
      buttonText: "Ver con Pantalla",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Chaqueta y pantal\xF3n en Nomex\xAE IIIA < 6 oz/yd\xB2. El complemento obligatorio del casco para protecci\xF3n corporal completa.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Ver Traje Forestal",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Guantes Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Guantes de cuero con dorso FR para trabajo con herramientas manuales. Certificaci\xF3n NFPA 1977 secci\xF3n guantes.",
      href: "/productos/guantes-para-bomberos/forestales",
      buttonText: "Ver Guantes Forestales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Botas Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Botas de cuero con suela Vibram\xAE logger o lug. Ca\xF1a de 8\u201310 pulgadas para protecci\xF3n de tobillo en terreno irregular.",
      href: "/productos/botas-para-bomberos/forestal",
      buttonText: "Ver Botas Forestales",
      image: "/images/directorio/botas-bombero-proteccion-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Material Compuesto (Fibra Vidrio)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto" },
    { label: "Ventilaci\xF3n M\xE1xima", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima" },
    { label: "Alta Visibilidad (Hi-Vis)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Con Protecci\xF3n Facial", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial" },
    { label: "Sistema Completo de Campo", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cuerpo" },
    { label: "Guantes Forestales", href: "/productos/guantes-para-bomberos/forestales", tag: "Manos" },
    { label: "Botas Forestales Logger", href: "/productos/botas-para-bomberos/forestal", tag: "Pies" },
    { label: "Gafas/Goggles Forestales", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos Forestales", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cat\xE1logo" },
    { label: "EPP Forestal Completo NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Gu\xEDa" },
    { label: "Cascos Estructurales NFPA 1971", href: "/productos/cascos-para-bomberos/casco-estructural-nfpa-1971", tag: "Comparar" },
    { label: "Incendios Forestales y Equipo", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" },
    { label: "Guantes para Trabajo Forestal", href: "/productos/guantes-para-bomberos/forestales", tag: "Cat\xE1logo" },
    { label: "Botas Logger y Forestales", href: "/productos/botas-para-bomberos/forestal", tag: "Cat\xE1logo" }
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
    { label: "Norma", valor: "NFPA 1977" },
    { label: "Material", valor: "HDPE inyectado" },
    { label: "Peso total", valor: "380\u2013450 g" },
    { label: "Suspensi\xF3n", valor: "4 puntos textil" },
    { label: "Ajuste", valor: "53\u201364 cm" },
    { label: "Protector nuca", valor: "Nomex\xAE IIIA" },
    { label: "Vida \xFAtil", valor: "5 a\xF1os fab." },
    { label: "Diel\xE9ctrico", valor: "Clase E 20kV" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Wildland Fire Fighting \u2014 edici\xF3n 2022 o vigente" },
    { code: "ANSI Z89.1", desc: "Tipo I Clase E \u2014 protecci\xF3n industrial compatible" },
    { code: "\xA7 6.1\u20136.4", desc: "Impacto, penetraci\xF3n, retenci\xF3n, llama aprobados" },
    { code: "Clase E", desc: "Aislamiento diel\xE9ctrico hasta 20,000 voltios" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado \u2014 certificado incluido" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Forestal NFPA 1977 \u2014 Termopl\xE1stico Ligero | BOMBERO.MX", "description": "Casco forestal NFPA 1977 termopl\xE1stico HDPE certificado. Peso < 450 g, suspensi\xF3n 4 puntos, protector de nuca Nomex\xAE. Para brigadas CONAFOR y protecci\xF3n civil. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "casco forestal NFPA 1977 termopl\xE1stico",
    "casco wildland M\xE9xico",
    "casco bombero forestal ligero",
    "casco CONAFOR certificado",
    "casco incendio forestal NFPA",
    "casco forestal HDPE",
    "casco brigada forestal M\xE9xico",
    "comprar casco forestal certificado"
  ], "canonical": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Termopl\xE1stico Ligero" }
  ], "heroBadge": "Casco Forestal \xB7 NFPA 1977 \xB7 HDPE Termopl\xE1stico", "heroTitle": "Casco Forestal NFPA 1977", "heroTitleHighlight": "Termopl\xE1stico Ligero", "heroSubtitle": "El casco est\xE1ndar para combate de incendios forestales. Shell HDPE de 280\u2013320 g, suspensi\xF3n de 4 puntos con banda antisudor y protector de nuca Nomex\xAE IIIA. Certificaci\xF3n NFPA 1977 vigente para brigadas CONAFOR, protecci\xF3n civil y licitaciones p\xFAblicas.", "heroSeoBlocks": [
    {
      title: "Casco Forestal NFPA 1977 \u2014 El Est\xE1ndar de Campo en M\xE9xico",
      text: "El <strong>casco forestal termopl\xE1stico NFPA 1977</strong> es el equipo de protecci\xF3n de cabeza requerido para operaciones de combate de incendios forestales. Shell de <strong>HDPE (polietileno de alta densidad)</strong> que mantiene sus propiedades bajo exposici\xF3n solar y ciclos t\xE9rmicos extremos. Peso total menor a 450 g para reducir fatiga cervical en jornadas de 8\u201312 horas."
    },
    {
      title: "Certificaci\xF3n NFPA 1977 para Licitaciones CONAFOR",
      text: "Cada casco incluye certificado de laboratorio acreditado <strong>ISO/IEC 17025</strong> que acredita cumplimiento de <strong>NFPA 1977 \xA7\xA7 6.1\u20136.4</strong>: impacto, penetraci\xF3n, retenci\xF3n y resistencia a llama. Documentaci\xF3n v\xE1lida para licitaciones <strong>CONAFOR, SEMARNAT, protecci\xF3n civil estatal</strong> y programas de manejo de fuego en los 32 estados de M\xE9xico."
    }
  ], "ctaBarQuote": "Cotizar Casco Forestal NFPA 1977", "productoCategoria": "Casco Forestal Wildland", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "HDPE" },
    { modifier: "solas", text: "< 450 g" }
  ], "productoMasVendido": true, "productoTitle": "Casco Forestal NFPA 1977", "productoTitleSub": "Termopl\xE1stico HDPE Ligero", "productoDesc": "Shell de polietileno de alta densidad (HDPE) inyectado con suspensi\xF3n de 4 puntos y protector de nuca en tela retardante Nomex\xAE IIIA. Peso total < 450 g certificado NFPA 1977. Incluye barbiquejo con mentonera y banda antisudor reemplazable.", "productoFeatures": [
    "Shell HDPE inyectado \u2014 Clase E diel\xE9ctrico",
    "Peso total con accesorios: 380\u2013450 g",
    "Suspensi\xF3n 4 puntos con ajuste perilla o hebilla",
    "Protector de nuca Nomex\xAE IIIA incluido",
    "Barbiquejo 2 puntos con mentonera acolchada",
    "Certificado NFPA 1977 + ANSI Z89.1 incluido"
  ], "productoAppTags": [
    "Incendio forestal",
    "Quemas prescritas",
    "Interface WUI",
    "CONAFOR",
    "Protecci\xF3n civil"
  ], "gallery": [
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Casco forestal NFPA 1977 termopl\xE1stico" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada forestal con casco NFPA 1977" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Casco forestal en operaci\xF3n de campo" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal con EPP completo" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP forestal NFPA 1977" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Casco forestal en operaci\xF3n de interfaz" }
  ], "capasEyebrow": "Anatom\xEDa del Casco", "capasTitle": "Componentes del Casco Forestal", "capasDesc": "Cada componente est\xE1 dise\xF1ado para las condiciones espec\xEDficas del combate forestal: peso m\xEDnimo, ventilaci\xF3n, protecci\xF3n contra brasas y radiaci\xF3n t\xE9rmica moderada.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones NFPA 1977", "specsDesc": "Par\xE1metros verificados en laboratorio acreditado ISO/IEC 17025 seg\xFAn los m\xE9todos de prueba establecidos en NFPA 1977 Standard on Protective Clothing and Equipment for Wildland Fire Fighting.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Casco Forestal NFPA 1977?", "aplicacionesContent": "<p>El casco forestal NFPA 1977 es el EPP de cabeza espec\xEDfico para operaciones donde la exposici\xF3n t\xE9rmica es principalmente <strong>radiante y de brasas voladoras</strong>, no inmersi\xF3n en llamas como en incendios estructurales.</p><p>La norma NFPA 1977 establece requisitos diferentes a NFPA 1971 porque el perfil de riesgo del combate forestal requiere <strong>movilidad, ventilaci\xF3n y peso reducido</strong> para jornadas prolongadas en terreno dif\xEDcil.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "Certificado NFPA 1977 \u2014 El Est\xE1ndar para Combate Forestal", "certsDesc": "La norma <strong>NFPA 1977</strong> (<em>Standard on Protective Clothing and Equipment for Wildland Fire Fighting</em>) establece requisitos espec\xEDficos para el equipo de protecci\xF3n en incendios forestales. Los m\xE9todos de prueba \xA7\xA7 6.1\u20136.4 verifican resistencia a impacto, penetraci\xF3n, retenci\xF3n del casco y comportamiento ante llama y calor.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas T\xE9cnicas sobre el Casco Forestal", "faqDescription": "Respondemos las dudas m\xE1s frecuentes sobre especificaciones, certificaciones, mantenimiento y aplicaci\xF3n correcta del casco forestal NFPA 1977.", "faqDocTitle": "Documentaci\xF3n T\xE9cnica", "faqDocDesc": "Solicita ficha t\xE9cnica completa, certificado de laboratorio y gu\xEDa de tallas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Forestal Complementario", "relacionadosTitle": "Sistema Completo NFPA 1977", "relacionadosDesc": "El casco es solo un componente del sistema de protecci\xF3n forestal. NFPA 1977 establece requisitos para traje, guantes, botas y protecci\xF3n ocular.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
