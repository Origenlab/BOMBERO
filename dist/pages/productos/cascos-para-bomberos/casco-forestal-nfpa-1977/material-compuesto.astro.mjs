import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/camion-bomberos-emergencia-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell Compuesto \u2014 Fibra de Vidrio + Resina Fen\xF3lica",
      descripcion: "Shell de fibra de vidrio tejida impregnada en resina fen\xF3lica termoestable, moldeada bajo presi\xF3n. A diferencia del HDPE termopl\xE1stico, el compuesto de fibra de vidrio no se reblandece con el calor \u2014 mantiene su integridad estructural incluso a temperaturas que deformar\xEDan un casco pl\xE1stico. Mayor rigidez y durabilidad para brigadas de alta actividad.",
      specs: [
        { label: "Material", valor: "Fibra de vidrio + resina fen\xF3lica" },
        { label: "Peso shell", valor: "350\u2013400 g (sin accesorios)" },
        { label: "Temp. trabajo", valor: "-40\xB0C a +150\xB0C pico" },
        { label: "Vida \xFAtil", valor: "10 a\xF1os desde manufactura" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Suspensi\xF3n Premium \u2014 6 Puntos con Corona Acolchada",
      descripcion: "Los cascos de material compuesto premium frecuentemente incluyen suspensi\xF3n de 6 puntos en lugar de 4, distribuyendo mejor el impacto en colisiones laterales. Corona acolchada de espuma de celda cerrada para mayor comodidad. Ajuste por perilla giratoria con rango extendido.",
      specs: [
        { label: "Tipo", valor: "6 puntos \u2014 cinta nylon reforzada" },
        { label: "Corona", valor: "Espuma EVA celda cerrada" },
        { label: "Ajuste", valor: "Perilla giratoria Ratchet\xAE" },
        { label: "Rango", valor: "52\u201365 cm" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Protector de Nuca \u2014 Aluminizado o FR Standard",
      descripcion: "Los cascos de fibra de vidrio premium ofrecen opci\xF3n de protector de nuca con respaldo aluminizado para ambientes de alta radiaci\xF3n t\xE9rmica, o el est\xE1ndar de tela FR (Nomex\xAE IIIA). El respaldo aluminizado refleja hasta 95% de la radiaci\xF3n infrarroja en operaciones de interfaz urbano-forestal intensas.",
      specs: [
        { label: "Material ext.", valor: "Nomex\xAE IIIA 7.5 oz/yd\xB2" },
        { label: "Respaldo opc.", valor: "Film aluminizado FR" },
        { label: "Reflectancia IR", valor: "\u226595% con aluminizado" },
        { label: "Fijaci\xF3n", valor: "Sistema de clips met\xE1licos" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "Fibra de vidrio + resina fen\xF3lica termoestable" },
    { categoria: "Shell", label: "Proceso", valor: "Moldeo por compresi\xF3n bajo presi\xF3n" },
    { categoria: "Shell", label: "Peso shell solo", valor: "350\u2013400 g" },
    { categoria: "Shell", label: "Peso con accesorios", valor: "480\u2013550 g" },
    { categoria: "Shell", label: "Temp. trabajo continuo", valor: "-40\xB0C a +80\xB0C" },
    { categoria: "Shell", label: "Temp. pico moment\xE1neo", valor: "+150\xB0C (no m\xE1s de 30 seg)" },
    { categoria: "Shell", label: "Clase diel\xE9ctrica", valor: "No diel\xE9ctrico \u2014 fibra de vidrio conductiva" },
    { categoria: "Shell", label: "Acabado", valor: "Gelcoat UV-resistente o pintura epoxi" },
    { categoria: "Suspensi\xF3n", label: "Tipo", valor: "6 puntos cinta nylon" },
    { categoria: "Suspensi\xF3n", label: "Ajuste", valor: "Perilla giratoria Ratchet\xAE" },
    { categoria: "Suspensi\xF3n", label: "Rango tallas", valor: "52\u201365 cm" },
    { categoria: "Suspensi\xF3n", label: "Corona", valor: "Espuma EVA celda cerrada" },
    { categoria: "Suspensi\xF3n", label: "Barbiquejo", valor: "2 puntos con mentonera \u2014 incluido" },
    { categoria: "Protecci\xF3n", label: "Impacto superior", valor: "NFPA 1977 \xA7 6.1 \u2014 60 J m\xEDn." },
    { categoria: "Protecci\xF3n", label: "Penetraci\xF3n", valor: "NFPA 1977 \xA7 6.2 \u2014 sin penetraci\xF3n" },
    { categoria: "Protecci\xF3n", label: "Retenci\xF3n", valor: "NFPA 1977 \xA7 6.3 \u2014 > 22 kg fuerza" },
    { categoria: "Protecci\xF3n", label: "Llama/calor", valor: "NFPA 1977 \xA7 6.4 \u2014 sin ignici\xF3n 10s" },
    { categoria: "Protecci\xF3n", label: "Protector nuca", valor: "Nomex\xAE IIIA std. o aluminizado opc." },
    { categoria: "Certificaci\xF3n", label: "Norma principal", valor: "NFPA 1977 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Vida \xFAtil fabricante", valor: "10 a\xF1os desde fecha de manufactura" }
  ];
  const catClass = {
    "Shell": "construccion",
    "Suspensi\xF3n": "ergonomia",
    "Protecci\xF3n": "proteccion",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Brigadas de Alta Actividad",
      desc: "Para brigadas con >100 jornadas de combate por temporada, el shell de fibra de vidrio ofrece durabilidad superior. La vida \xFAtil de 10 a\xF1os (vs 5 a\xF1os del HDPE) amortiza el costo inicial m\xE1s alto."
    },
    {
      titulo: "Interfaz Urbano-Forestal Intensa (WUI)",
      desc: "En incendios de interfaz donde la radiaci\xF3n t\xE9rmica es alta por estructuras involucradas, el shell de material compuesto mantiene su forma a temperaturas que deformar\xEDan el termopl\xE1stico."
    },
    {
      titulo: "Operaciones en Clima Extremo",
      desc: "Rango de operaci\xF3n de -40\xB0C a +80\xB0C continuo. El HDPE puede volverse fr\xE1gil bajo -20\xB0C o reblandecerse sobre +50\xB0C. El compuesto mantiene propiedades mec\xE1nicas estables."
    },
    {
      titulo: "Brigadas Permanentes CONAFOR",
      desc: "Personal de carrera que requiere equipo para toda su trayectoria profesional. El shell de fibra de vidrio es una inversi\xF3n a largo plazo para brigadas establecidas."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 el casco de fibra de vidrio cuesta m\xE1s que el termopl\xE1stico?",
      a: "El proceso de manufactura es m\xE1s complejo: <strong>moldeo por compresi\xF3n</strong> de capas de fibra de vidrio con resina fen\xF3lica, curado bajo calor y presi\xF3n, acabado con gelcoat o pintura epoxi. Requiere m\xE1s tiempo y mano de obra que la inyecci\xF3n de HDPE. Sin embargo, la <strong>vida \xFAtil de 10 a\xF1os</strong> (el doble del termopl\xE1stico) puede hacer que el costo total de propiedad sea menor."
    },
    {
      q: "\xBFEl casco de fibra de vidrio es diel\xE9ctrico como el de HDPE?",
      a: "<strong>No</strong>. La fibra de vidrio puede contener impurezas conductivas y la resina fen\xF3lica no garantiza aislamiento el\xE9ctrico. Los cascos de material compuesto <strong>no tienen clasificaci\xF3n Clase E diel\xE9ctrica</strong>. Si existe riesgo de contacto con l\xEDneas el\xE9ctricas (com\xFAn en incendios de interfaz), el casco de HDPE Clase E es m\xE1s apropiado."
    },
    {
      q: "\xBFSe puede reparar un casco de fibra de vidrio da\xF1ado?",
      a: "<strong>No se recomienda</strong>. A diferencia de fibra de vidrio en otras aplicaciones (embarcaciones), el shell del casco est\xE1 sometido a cargas de impacto cr\xEDticas. Cualquier da\xF1o visible (grietas, delaminaci\xF3n, desconchado del gelcoat) requiere reemplazo completo. La integridad estructural del casco es irrecuperable despu\xE9s de da\xF1o."
    },
    {
      q: "\xBFEl protector de nuca aluminizado es necesario para operaciones normales?",
      a: "Para <strong>combate forestal est\xE1ndar</strong>, el protector FR de Nomex\xAE IIIA es suficiente. El <strong>respaldo aluminizado</strong> es \xFAtil en operaciones de <strong>interfaz urbano-forestal</strong> donde hay estructuras involucradas y la radiaci\xF3n t\xE9rmica es significativamente mayor. Tambi\xE9n es apropiado para personal que trabaja cerca de frentes de fuego intensos por per\xEDodos prolongados."
    },
    {
      q: "\xBFCu\xE1l es la diferencia de peso entre el termopl\xE1stico y el material compuesto?",
      a: "El shell de fibra de vidrio pesa <strong>350\u2013400 g</strong> vs <strong>280\u2013320 g</strong> del HDPE \u2014 aproximadamente 70\u201380 g m\xE1s. El peso total con accesorios es <strong>480\u2013550 g</strong> vs <strong>380\u2013450 g</strong>. Esta diferencia de ~100 g es notable en jornadas largas pero aceptable para brigadas que priorizan durabilidad sobre peso m\xEDnimo."
    },
    {
      q: "\xBFC\xF3mo s\xE9 cu\xE1ndo debo retirar el casco de servicio?",
      a: "Retirar el casco si: (1) Cumpli\xF3 <strong>10 a\xF1os desde la fecha de manufactura</strong> (ver etiqueta interior). (2) Presenta <strong>grietas, delaminaci\xF3n o desconchado</strong> visible. (3) Sufri\xF3 <strong>impacto significativo</strong> (ca\xEDda, golpe de rama). (4) Exposici\xF3n a <strong>temperatura excesiva</strong> que caus\xF3 decoloraci\xF3n o distorsi\xF3n. (5) El <strong>arn\xE9s de suspensi\xF3n</strong> muestra desgaste severo (reemplazable por separado)."
    }
  ];
  const relacionados = [
    {
      title: "Casco Forestal Termopl\xE1stico HDPE",
      badge: "NFPA 1977",
      description: "Alternativa econ\xF3mica con shell de HDPE. Peso < 450 g, vida \xFAtil 5 a\xF1os. Clase E diel\xE9ctrico.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero",
      buttonText: "Ver Termopl\xE1stico",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Casco con Protecci\xF3n Facial",
      badge: "NFPA 1977",
      description: "Shell de fibra de vidrio con pantalla facial de malla met\xE1lica o policarbonato integrada.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial",
      buttonText: "Ver con Pantalla",
      image: "/images/directorio/camion-bomberos-emergencia-01.avif"
    },
    {
      title: "Traje Forestal NFPA 1977",
      badge: "NFPA 1977",
      description: "Chaqueta y pantal\xF3n Nomex\xAE IIIA < 6 oz/yd\xB2. Sistema completo de protecci\xF3n corporal forestal.",
      href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977",
      buttonText: "Ver Traje Forestal",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Guantes Forestales NFPA 1977",
      badge: "NFPA 1977",
      description: "Guantes de cuero con dorso FR para herramientas manuales. Pulaski, McLeod, rastrillo forestal.",
      href: "/productos/guantes-para-bomberos/forestales",
      buttonText: "Ver Guantes Forestales",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Termopl\xE1stico Ligero HDPE", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero" },
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
    { label: "Termopl\xE1stico vs Material Compuesto", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Art\xEDculo" },
    { label: "Incendios Forestales y Equipo", href: "/blog/incendios-forestales-equipo-combate", tag: "Blog" },
    { label: "Botas Forestales Logger", href: "/productos/botas-para-bomberos/forestal", tag: "Producto" }
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
    { label: "Material", valor: "Fibra vidrio + fen\xF3lica" },
    { label: "Peso total", valor: "480\u2013550 g" },
    { label: "Suspensi\xF3n", valor: "6 puntos premium" },
    { label: "Ajuste", valor: "52\u201365 cm" },
    { label: "Protector nuca", valor: "FR std o aluminizado" },
    { label: "Vida \xFAtil", valor: "10 a\xF1os fab." },
    { label: "Diel\xE9ctrico", valor: "No clasificado" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Wildland Fire Fighting \u2014 edici\xF3n vigente" },
    { code: "\xA7 6.1\u20136.4", desc: "Impacto, penetraci\xF3n, retenci\xF3n, llama aprobados" },
    { code: "10 a\xF1os", desc: "Vida \xFAtil extendida \u2014 el doble del termopl\xE1stico" },
    { code: "Termoestable", desc: "No se reblandece bajo calor \u2014 mantiene forma" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado \u2014 certificado incluido" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Forestal NFPA 1977 \u2014 Fibra de Vidrio | BOMBERO.MX", "description": "Casco forestal NFPA 1977 material compuesto. Shell de fibra de vidrio + resina fen\xF3lica, suspensi\xF3n 6 puntos, vida \xFAtil 10 a\xF1os. Para brigadas de alta actividad CONAFOR. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "casco forestal fibra de vidrio",
    "casco forestal material compuesto",
    "casco NFPA 1977 premium",
    "casco wildland fiberglass",
    "casco bombero forestal profesional",
    "casco CONAFOR fibra vidrio",
    "casco forestal 10 a\xF1os vida util",
    "comprar casco forestal premium Mexico"
  ], "canonical": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Material Compuesto" }
  ], "heroBadge": "Casco Forestal \xB7 NFPA 1977 \xB7 Fibra de Vidrio", "heroTitle": "Casco Forestal NFPA 1977", "heroTitleHighlight": "Material Compuesto Premium", "heroSubtitle": "Shell de fibra de vidrio con resina fen\xF3lica termoestable. No se reblandece bajo calor, mantiene integridad estructural en temperaturas extremas. Vida \xFAtil de 10 a\xF1os \u2014 el doble del termopl\xE1stico. Para brigadas profesionales de alta actividad.", "heroSeoBlocks": [
    {
      title: "Fibra de Vidrio \u2014 Durabilidad Superior para Brigadas Profesionales",
      text: "El <strong>casco forestal de material compuesto</strong> utiliza fibra de vidrio tejida impregnada en <strong>resina fen\xF3lica termoestable</strong>, moldeada bajo presi\xF3n. A diferencia del HDPE que puede deformarse a temperaturas elevadas, el compuesto de fibra de vidrio mantiene su forma e integridad hasta <strong>150\xB0C en picos moment\xE1neos</strong>."
    },
    {
      title: "10 A\xF1os de Vida \xDAtil \u2014 Inversi\xF3n a Largo Plazo",
      text: "La <strong>vida \xFAtil de 10 a\xF1os</strong> (vs 5 a\xF1os del termopl\xE1stico) amortiza el costo inicial m\xE1s alto. Para brigadas permanentes <strong>CONAFOR</strong> con >100 jornadas de combate por temporada, el casco de fibra de vidrio es la elecci\xF3n profesional que acompa\xF1a toda la carrera del bombero forestal."
    }
  ], "ctaBarQuote": "Cotizar Casco Forestal Material Compuesto", "productoCategoria": "Casco Forestal Premium", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "Fibra Vidrio" },
    { modifier: "solas", text: "10 a\xF1os" }
  ], "productoMasVendido": false, "productoTitle": "Casco Forestal NFPA 1977", "productoTitleSub": "Material Compuesto \u2014 Fibra de Vidrio", "productoDesc": "Shell de fibra de vidrio con resina fen\xF3lica termoestable. Suspensi\xF3n de 6 puntos con corona acolchada. Protector de nuca Nomex\xAE IIIA est\xE1ndar o aluminizado opcional. Vida \xFAtil 10 a\xF1os desde manufactura. Certificado NFPA 1977 incluido.", "productoFeatures": [
    "Shell fibra de vidrio + resina fen\xF3lica",
    "Peso total con accesorios: 480\u2013550 g",
    "Suspensi\xF3n 6 puntos con corona acolchada",
    "Protector nuca FR o aluminizado opcional",
    "Vida \xFAtil: 10 a\xF1os desde manufactura",
    "Certificado NFPA 1977 incluido"
  ], "productoAppTags": [
    "Alta actividad",
    "Interfaz WUI",
    "Clima extremo",
    "CONAFOR",
    "Brigadas permanentes"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Casco forestal NFPA 1977 fibra de vidrio" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada forestal con casco material compuesto" },
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Casco forestal en operaci\xF3n de campo" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento forestal con EPP completo" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP forestal NFPA 1977" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Casco forestal en operaci\xF3n de interfaz" }
  ], "capasEyebrow": "Anatom\xEDa del Casco", "capasTitle": "Componentes del Casco Material Compuesto", "capasDesc": "Shell termoestable que no se reblandece bajo calor, suspensi\xF3n premium de 6 puntos y protector de nuca con opci\xF3n aluminizada para m\xE1xima protecci\xF3n radiante.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones NFPA 1977 \u2014 Material Compuesto", "specsDesc": "Par\xE1metros verificados en laboratorio acreditado. El shell de fibra de vidrio ofrece propiedades mec\xE1nicas superiores y vida \xFAtil extendida.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFD\xF3nde se Usa el Casco de Material Compuesto?", "aplicacionesContent": "<p>El casco de material compuesto es la elecci\xF3n de <strong>brigadas profesionales de alta actividad</strong> que requieren durabilidad superior y vida \xFAtil extendida.</p><p>El shell de fibra de vidrio con resina fen\xF3lica es <strong>termoestable</strong>: no se reblandece ni deforma bajo calor como el termopl\xE1stico, manteniendo su integridad protectora en condiciones extremas.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "NFPA 1977 \u2014 Durabilidad Profesional", "certsDesc": "El casco de material compuesto cumple los mismos requisitos <strong>NFPA 1977</strong> que el termopl\xE1stico, pero con la ventaja de una <strong>vida \xFAtil de 10 a\xF1os</strong> y mejor comportamiento t\xE9rmico. Incluye certificado de laboratorio ISO/IEC 17025.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas T\xE9cnicas sobre Material Compuesto", "faqDescription": "Dudas frecuentes sobre el casco de fibra de vidrio: diferencias con termopl\xE1stico, durabilidad, mantenimiento y aplicaciones espec\xEDficas.", "faqDocTitle": "Documentaci\xF3n T\xE9cnica", "faqDocDesc": "Solicita ficha t\xE9cnica completa, certificado de laboratorio y gu\xEDa de tallas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Forestal Complementario", "relacionadosTitle": "Sistema Completo NFPA 1977", "relacionadosDesc": "El casco de material compuesto es la pieza premium del sistema de protecci\xF3n forestal. Complemente con el resto del EPP NFPA 1977.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
