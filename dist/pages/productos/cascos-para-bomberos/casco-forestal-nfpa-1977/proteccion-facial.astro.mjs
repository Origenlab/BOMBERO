import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_DiGDuMOy.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_CdTaHiqJ.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/camion-bomberos-emergencia-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell HDPE con Rieles de Montaje Integrados",
      descripcion: "Shell de polietileno de alta densidad con rieles laterales integrados para montaje de sistemas de protecci\xF3n facial. Los rieles permiten instalar pantalla de malla met\xE1lica, visor de policarbonato, o sistema combinado de orejeras m\xE1s visor (estilo arb\xF3reo europeo). El dise\xF1o modular permite configurar el casco seg\xFAn la operaci\xF3n.",
      specs: [
        { label: "Material", valor: "HDPE inyectado \u2014 Clase E" },
        { label: "Rieles", valor: "Aluminio anodizado o pl\xE1stico reforzado" },
        { label: "Compatibilidad", valor: "Malla, visor, orejeras" },
        { label: "Peso shell", valor: "300\u2013350 g" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Pantalla de Malla Met\xE1lica \u2014 Vegetaci\xF3n Densa",
      descripcion: "Malla de acero inoxidable o acero galvanizado con apertura de 3\u20134 mm que bloquea ramas, astillas y part\xEDculas grandes mientras permite excelente ventilaci\xF3n y visibilidad. Ideal para operaciones en vegetaci\xF3n densa donde el contacto con ramas es constante. No empaca como el policarbonato.",
      specs: [
        { label: "Material", valor: "Acero inoxidable o galvanizado" },
        { label: "Apertura malla", valor: "3\u20134 mm" },
        { label: "Dimensiones", valor: "Cubre ment\xF3n hasta frente" },
        { label: "Articulaci\xF3n", valor: "Abatible arriba/abajo" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Visor Policarbonato \u2014 Ceniza y Part\xEDculas Finas",
      descripcion: "Alternativa a la malla para operaciones donde hay ceniza voladora intensa o part\xEDculas finas que penetrar\xEDan la malla. El policarbonato transparente o con tinte proporciona protecci\xF3n completa pero requiere tratamiento antivaho. Compatible con gafas de prescripci\xF3n debajo.",
      specs: [
        { label: "Material", valor: "Policarbonato ANSI Z87.1" },
        { label: "Espesor", valor: "2.0 mm t\xEDpico" },
        { label: "Tratamiento", valor: "Anti-rayaduras + antivaho" },
        { label: "Articulaci\xF3n", valor: "Abatible con detentes" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "Shell", label: "Material", valor: "HDPE inyectado (polietileno alta densidad)" },
    { categoria: "Shell", label: "Rieles montaje", valor: "Aluminio anodizado o pl\xE1stico reforzado" },
    { categoria: "Shell", label: "Peso shell solo", valor: "300\u2013350 g" },
    { categoria: "Shell", label: "Clase diel\xE9ctrica", valor: "Clase E \u2014 20,000V ANSI" },
    { categoria: "Pantalla Malla", label: "Material malla", valor: "Acero inoxidable 304 o galvanizado" },
    { categoria: "Pantalla Malla", label: "Apertura", valor: "3\u20134 mm (bloquea part\xEDculas >3 mm)" },
    { categoria: "Pantalla Malla", label: "Peso malla", valor: "~80\u2013120 g" },
    { categoria: "Pantalla Malla", label: "Visibilidad", valor: "Excelente \u2014 sin distorsi\xF3n" },
    { categoria: "Visor", label: "Material visor", valor: "Policarbonato \xF3ptico ANSI Z87.1" },
    { categoria: "Visor", label: "Espesor", valor: "2.0 mm" },
    { categoria: "Visor", label: "Tratamientos", valor: "Anti-rayaduras + antivaho" },
    { categoria: "Visor", label: "Peso visor", valor: "~60\u201380 g" },
    { categoria: "Sistema", label: "Peso total con malla", valor: "520\u2013600 g" },
    { categoria: "Sistema", label: "Peso total con visor", valor: "480\u2013550 g" },
    { categoria: "Protecci\xF3n", label: "Impacto superior", valor: "NFPA 1977 \xA7 6.1 \u2014 60 J m\xEDn." },
    { categoria: "Protecci\xF3n", label: "Protecci\xF3n facial", valor: "ANSI Z87.1 (visor) o EN 1731 (malla)" },
    { categoria: "Protecci\xF3n", label: "Protector nuca", valor: "Nomex\xAE IIIA \u2014 incluido" },
    { categoria: "Certificaci\xF3n", label: "Norma casco", valor: "NFPA 1977 edici\xF3n vigente" },
    { categoria: "Certificaci\xF3n", label: "Norma pantalla", valor: "ANSI Z87.1 o EN 1731" }
  ];
  const catClass = {
    "Shell": "construccion",
    "Pantalla Malla": "proteccion",
    "Visor": "proteccion",
    "Sistema": "ergonomia",
    "Protecci\xF3n": "proteccion",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Vegetaci\xF3n Densa \u2014 Selva y Bosque Tropical",
      desc: "En operaciones donde el bombero atraviesa vegetaci\xF3n densa (selvas de Chiapas, Oaxaca, Veracruz), la pantalla de malla protege el rostro de ramas, espinas y astillas sin comprometer ventilaci\xF3n. La malla permite ver claramente a trav\xE9s de hojas y ramas."
    },
    {
      titulo: "Uso de Motosierra y Herramientas de Corte",
      desc: "Cuando se operan motosierras para crear brechas cortafuegos, la pantalla facial es obligatoria por normativa de seguridad laboral. La malla met\xE1lica bloquea astillas proyectadas mientras mantiene ventilaci\xF3n durante trabajo f\xEDsico intenso."
    },
    {
      titulo: "Ceniza Voladora Intensa",
      desc: "En frentes de fuego donde la ceniza voladora es densa y fina, el visor de policarbonato proporciona sellado completo que la malla no puede. Ideal para la fase activa del incendio cuando las part\xEDculas son m\xE1s intensas."
    },
    {
      titulo: "Operaciones de Liquidaci\xF3n (Mop-Up)",
      desc: "Durante liquidaci\xF3n de \xE1reas quemadas, el volteo de troncos y material caliente puede proyectar ceniza y brasas hacia el rostro. La pantalla facial protege durante esta fase de trabajo cercano a material humeante."
    }
  ];
  const faqs = [
    {
      q: "\xBFCu\xE1ndo debo usar malla met\xE1lica vs visor de policarbonato?",
      a: "<strong>Malla met\xE1lica</strong>: Operaciones en vegetaci\xF3n densa con ramas, uso de motosierra, cuando la ventilaci\xF3n es cr\xEDtica, cuando no hay ceniza fina intensa. <strong>Visor policarbonato</strong>: Ceniza voladora densa, part\xEDculas finas que penetrar\xEDan la malla, cuando se necesita protecci\xF3n herm\xE9tica del rostro. Algunos cascos permiten <strong>intercambiar</strong> entre ambos seg\xFAn la fase de la operaci\xF3n."
    },
    {
      q: "\xBFLa pantalla de malla cumple alguna norma de protecci\xF3n?",
      a: "S\xED. Las pantallas de malla met\xE1lica para uso forestal deben cumplir <strong>EN 1731</strong> (norma europea para protecci\xF3n facial en trabajo forestal) o equivalente. Esta norma especifica resistencia a impacto de part\xEDculas proyectadas, tama\xF1o m\xE1ximo de apertura y materiales apropiados. Verificar que la malla tenga marcado de conformidad."
    },
    {
      q: "\xBFEl visor de policarbonato se empa\xF1a durante el trabajo?",
      a: "Puede empa\xF1arse si no tiene <strong>tratamiento antivaho</strong> (anti-fog). Los visores de calidad incluyen recubrimiento antivaho de f\xE1brica, pero este tratamiento se degrada con el uso y lavado. Existen <strong>sprays antivaho</strong> que pueden reaplicarse. Algunos visores tienen dise\xF1o de ventilaci\xF3n indirecta que reduce empa\xF1amiento sin comprometer protecci\xF3n."
    },
    {
      q: "\xBFPuedo agregar protecci\xF3n facial a un casco forestal existente?",
      a: "Depende del casco. Los cascos con <strong>rieles de montaje integrados</strong> aceptan accesorios del mismo fabricante. Cascos sin rieles generalmente no se pueden modificar de forma segura. Intentar adaptar accesorios de otros fabricantes puede comprometer la <strong>certificaci\xF3n NFPA 1977</strong> y la seguridad. Es preferible adquirir un sistema casco + pantalla del mismo fabricante."
    },
    {
      q: "\xBFEl peso adicional de la pantalla causa fatiga cervical?",
      a: "El peso adicional de la pantalla (<strong>60\u2013120 g</strong>) es relativamente menor comparado con el casco solo (300\u2013350 g). Sin embargo, el <strong>momento de inercia</strong> cambia porque el peso est\xE1 adelante del rostro. En jornadas muy largas (+10 horas) puede notarse m\xE1s fatiga cervical. El balance adecuado del casco y pausas de descanso mitigan este efecto."
    },
    {
      q: "\xBFC\xF3mo limpio y mantengo la pantalla de malla met\xE1lica?",
      a: "La malla de acero inoxidable se puede <strong>lavar con agua y jab\xF3n neutro</strong>, secar completamente para evitar corrosi\xF3n (m\xE1s importante en malla galvanizada). Inspeccionar peri\xF3dicamente por <strong>deformaciones o perforaciones</strong> \u2014 la malla da\xF1ada debe reemplazarse. El marco de montaje tambi\xE9n debe revisarse por grietas o holgura."
    }
  ];
  const relacionados = [
    {
      title: "Casco Forestal Termopl\xE1stico Est\xE1ndar",
      badge: "NFPA 1977",
      description: "Shell HDPE est\xE1ndar sin pantalla facial integrada. Para operaciones donde la protecci\xF3n facial no es requerida.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero",
      buttonText: "Ver Est\xE1ndar",
      image: "/images/directorio/pick-up-bomberos-forestal-01.avif"
    },
    {
      title: "Goggles Forestales ANSI Z87.1",
      badge: "ANSI Z87.1",
      description: "Alternativa a la pantalla cuando se requiere solo protecci\xF3n ocular. Ventilaci\xF3n indirecta anti-empa\xF1amiento.",
      href: "/productos/gafas",
      buttonText: "Ver Goggles",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    },
    {
      title: "Sistema Campo Completo",
      badge: "NFPA 1977",
      description: "Kit completo: casco + pantalla + goggles + protector nuca + barbiquejo profesional.",
      href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo",
      buttonText: "Ver Sistema Campo",
      image: "/images/directorio/equipo-bomberos-completo-01.avif"
    },
    {
      title: "Guantes Forestales Anticorte",
      badge: "NFPA 1977",
      description: "Guantes con protecci\xF3n anticorte para uso de motosierra. Complemento obligatorio con pantalla facial.",
      href: "/productos/guantes/forestales",
      buttonText: "Ver Guantes",
      image: "/images/directorio/guantes-bombero-resistentes-01.avif"
    }
  ];
  const otrosModelos = [
    { label: "Termopl\xE1stico Ligero HDPE", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/termoplastico-ligero" },
    { label: "Material Compuesto (Fibra Vidrio)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/material-compuesto" },
    { label: "Ventilaci\xF3n M\xE1xima", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/ventilacion-maxima" },
    { label: "Alta Visibilidad (Hi-Vis)", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/alta-visibilidad" },
    { label: "Sistema Completo de Campo", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/sistema-campo" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje Forestal NFPA 1977", href: "/productos/trajes-para-bomberos/traje-forestal-nfpa-1977", tag: "Cuerpo" },
    { label: "Guantes Anticorte Motosierra", href: "/productos/guantes/forestales", tag: "Manos" },
    { label: "Botas Forestales Logger", href: "/productos/botas/forestal", tag: "Pies" },
    { label: "Polainas Anticorte", href: "/productos", tag: "Piernas" },
    { label: "Protecci\xF3n Auditiva", href: "/productos", tag: "O\xEDdos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos Forestales", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", tag: "Cat\xE1logo" },
    { label: "Protecci\xF3n Facial en Forestales", href: "/productos", tag: "Gu\xEDa" },
    { label: "Uso Seguro de Motosierra", href: "/productos", tag: "Seguridad" },
    { label: "Malla vs Visor Policarbonato", href: "/productos", tag: "Comparar" },
    { label: "EPP para Brechas Cortafuegos", href: "/productos", tag: "Art\xEDculo" },
    { label: "Norma EN 1731 Explicada", href: "/productos", tag: "Normativa" }
  ];
  const directorioLinks = [
    { label: "Bomberos Forestales Chiapas", href: "/directorio/chiapas" },
    { label: "Bomberos Forestales Oaxaca", href: "/directorio/oaxaca" },
    { label: "Bomberos Forestales Veracruz", href: "/directorio/veracruz" },
    { label: "Bomberos Forestales Michoac\xE1n", href: "/directorio/michoacan" },
    { label: "Bomberos Forestales Jalisco", href: "/directorio/jalisco" },
    { label: "Directorio Nacional", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Norma casco", valor: "NFPA 1977" },
    { label: "Norma pantalla", valor: "ANSI Z87.1 / EN 1731" },
    { label: "Shell", valor: "HDPE + rieles" },
    { label: "Pantalla malla", valor: "Acero inox. 3\u20134 mm" },
    { label: "Visor", valor: "Policarbonato 2 mm" },
    { label: "Peso con malla", valor: "520\u2013600 g" },
    { label: "Peso con visor", valor: "480\u2013550 g" },
    { label: "Diel\xE9ctrico", valor: "Clase E 20kV" }
  ];
  const certItems = [
    { code: "NFPA 1977", desc: "Wildland Fire Fighting \u2014 casco certificado" },
    { code: "ANSI Z87.1", desc: "Protecci\xF3n ocular \u2014 visor policarbonato" },
    { code: "EN 1731", desc: "Protecci\xF3n facial \u2014 malla met\xE1lica forestal" },
    { code: "Clase E", desc: "Aislamiento diel\xE9ctrico 20,000V" },
    { code: "ISO/IEC 17025", desc: "Laboratorio acreditado \u2014 certificado incluido" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Forestal NFPA 1977 \u2014 Con Protecci\xF3n Facial | BOMBERO.MX", "description": "Casco forestal NFPA 1977 con pantalla facial de malla met\xE1lica o visor policarbonato. Protecci\xF3n contra ramas, ceniza y part\xEDculas. Para vegetaci\xF3n densa y uso de motosierra. Env\xEDo a los 32 estados de M\xE9xico.", "keywords": [
    "casco forestal con pantalla",
    "casco NFPA 1977 malla facial",
    "casco bombero forestal visor",
    "casco wildland proteccion facial",
    "casco forestal motosierra",
    "casco CONAFOR con malla",
    "casco forestal vegetacion densa",
    "comprar casco forestal pantalla Mexico"
  ], "canonical": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Forestal NFPA 1977", href: "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977" },
    { label: "Protecci\xF3n Facial" }
  ], "heroBadge": "Casco Forestal \xB7 NFPA 1977 \xB7 Protecci\xF3n Facial", "heroTitle": "Casco Forestal NFPA 1977", "heroTitleHighlight": "Con Protecci\xF3n Facial", "heroSubtitle": "Sistema modular con pantalla de malla met\xE1lica o visor de policarbonato intercambiables. Malla para vegetaci\xF3n densa y uso de motosierra; visor para ceniza voladora intensa. Rieles de montaje integrados para configuraci\xF3n seg\xFAn operaci\xF3n.", "heroSeoBlocks": [
    {
      title: "Pantalla de Malla \u2014 Vegetaci\xF3n Densa y Motosierra",
      text: "La <strong>malla de acero inoxidable</strong> con apertura de 3\u20134 mm bloquea ramas, astillas y part\xEDculas proyectadas mientras mantiene <strong>excelente ventilaci\xF3n</strong> y visibilidad. Cumple <strong>EN 1731</strong> para trabajo forestal con herramientas de corte."
    },
    {
      title: "Visor Policarbonato \u2014 Ceniza y Part\xEDculas Finas",
      text: "El <strong>visor de policarbonato ANSI Z87.1</strong> proporciona sellado completo contra ceniza voladora fina que penetrar\xEDa la malla. Tratamiento anti-rayaduras y antivaho incluido. <strong>Abatible</strong> para alternar entre protecci\xF3n total y ventilaci\xF3n seg\xFAn condiciones."
    }
  ], "ctaBarQuote": "Cotizar Casco Forestal con Protecci\xF3n Facial", "productoCategoria": "Casco Forestal con Pantalla", "productoBadges": [
    { modifier: "nfpa", text: "NFPA 1977" },
    { modifier: "tpp", text: "Malla + Visor" },
    { modifier: "solas", text: "Modular" }
  ], "productoMasVendido": false, "productoTitle": "Casco Forestal NFPA 1977", "productoTitleSub": "Con Protecci\xF3n Facial Modular", "productoDesc": "Shell HDPE con rieles de montaje para pantalla de malla met\xE1lica (acero inox.) o visor de policarbonato intercambiables. Sistema abatible arriba/abajo. Protector de nuca Nomex\xAE IIIA incluido. Certificado NFPA 1977 + norma de pantalla.", "productoFeatures": [
    "Shell HDPE con rieles de montaje",
    "Malla acero inox. 3\u20134 mm (EN 1731)",
    "Visor policarbonato ANSI Z87.1 opc.",
    "Sistema abatible arriba/abajo",
    "Peso con malla: 520\u2013600 g",
    "Certificaci\xF3n NFPA 1977 + pantalla"
  ], "productoAppTags": [
    "Vegetaci\xF3n densa",
    "Motosierra",
    "Ceniza voladora",
    "Brechas cortafuegos",
    "Liquidaci\xF3n"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Casco forestal NFPA 1977 con pantalla facial" },
    { src: "/images/directorio/pick-up-bomberos-forestal-01.avif", alt: "Casco forestal con malla met\xE1lica" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Brigada forestal con protecci\xF3n facial" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con casco y pantalla" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP forestal con pantalla" },
    { src: "/images/directorio/bomberos-accion-incendio-01.avif", alt: "Casco con visor en operaci\xF3n" }
  ], "capasEyebrow": "Sistema de Protecci\xF3n Facial", "capasTitle": "Componentes del Sistema Modular", "capasDesc": "Shell con rieles de montaje que acepta malla met\xE1lica o visor de policarbonato. Intercambiables seg\xFAn la fase de la operaci\xF3n.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Casco + Pantalla", "specsDesc": "El sistema modular permite configurar el casco para diferentes escenarios: malla para vegetaci\xF3n densa, visor para ceniza intensa.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFCu\xE1ndo se Necesita Protecci\xF3n Facial?", "aplicacionesContent": "<p>La <strong>protecci\xF3n facial</strong> es cr\xEDtica en operaciones donde hay riesgo de impacto de ramas, astillas proyectadas por motosierra, o ceniza voladora intensa.</p><p>El sistema modular permite <strong>adaptar la protecci\xF3n</strong> a la fase de la operaci\xF3n: malla durante apertura de brechas, visor durante la fase activa del fuego, ninguna durante traslado a la zona.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Normas y Certificaciones", "certsTitle": "NFPA 1977 + Protecci\xF3n Facial Certificada", "certsDesc": "El casco cumple <strong>NFPA 1977</strong> para protecci\xF3n contra fuego forestal. La malla met\xE1lica cumple <strong>EN 1731</strong> y el visor <strong>ANSI Z87.1</strong> para protecci\xF3n facial certificada.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Protecci\xF3n Facial", "faqDescription": "Dudas frecuentes sobre malla vs visor, mantenimiento, compatibilidad y aplicaciones espec\xEDficas de la protecci\xF3n facial forestal.", "faqDocTitle": "Documentaci\xF3n T\xE9cnica", "faqDocDesc": "Solicita ficha t\xE9cnica completa, certificado de laboratorio y gu\xEDa de tallas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Documentaci\xF3n", "faqs": faqs, "relacionadosLabel": "EPP Forestal Complementario", "relacionadosTitle": "Protecci\xF3n Completa para Operaciones Forestales", "relacionadosDesc": "La pantalla facial es parte de un sistema de protecci\xF3n completo. Combine con guantes anticorte, polainas y protecci\xF3n auditiva para uso de motosierra.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-forestal-nfpa-1977/proteccion-facial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
