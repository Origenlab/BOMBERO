import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://bombero.mx");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const IMAGE = "/images/directorio/camion-bomberos-aeropuerto-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Visor de Policarbonato con Recubrimiento de Oro Vaporizado",
      descripcion: "Visor de policarbonato \xF3ptico de alta claridad con recubrimiento de oro vaporizado al vac\xEDo. El oro proporciona filtrado del 95% de la radiaci\xF3n infrarroja sin comprometer la transmitancia de luz visible (>75%). La tecnolog\xEDa es similar a la utilizada en visores de astronautas y pilotos de alta velocidad.",
      specs: [
        { label: "Base visor", valor: "Policarbonato \xF3ptico 2 mm" },
        { label: "Recubrimiento", valor: "Oro vaporizado al vac\xEDo" },
        { label: "Filtro IR", valor: "95% radiaci\xF3n infrarroja" },
        { label: "Transmitancia", valor: ">75% luz visible" }
      ],
      color: "fire"
    },
    {
      num: "02",
      titulo: "Sistema Retr\xE1ctil de Operaci\xF3n con Una Mano",
      descripcion: "Mecanismo de bisagra que permite subir y bajar el visor con una sola mano, incluso con guantes de bombero. Detentes en posici\xF3n arriba, intermedia y abajo para ajuste seg\xFAn condiciones. El sistema no interfiere con el uso de SCBA ni radio de comunicaci\xF3n.",
      specs: [
        { label: "Operaci\xF3n", valor: "Una mano con guantes" },
        { label: "Posiciones", valor: "3 detentes ajustables" },
        { label: "Bisagra", valor: "Metal resistente a calor" },
        { label: "Compatibilidad", valor: "SCBA, radio, gafas" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Tratamiento Antiempa\xF1ante Permanente",
      descripcion: "Tratamiento antiempa\xF1ante (anti-fog) aplicado en la cara interior del visor durante la fabricaci\xF3n. El tratamiento permanece activo durante la vida \xFAtil del visor, eliminando la necesidad de reaplicar sprays o toallitas antivaho. Cr\xEDtico para uso con SCBA donde la humedad del aliento es constante.",
      specs: [
        { label: "Tipo", valor: "Anti-fog permanente de f\xE1brica" },
        { label: "Durabilidad", valor: "Vida \xFAtil del visor" },
        { label: "Reaplicaci\xF3n", valor: "No necesaria" },
        { label: "Compatibilidad", valor: "Uso con SCBA/EPRA" }
      ],
      color: "ember"
    }
  ];
  const especificaciones = [
    { categoria: "Visor", label: "Material base", valor: "Policarbonato \xF3ptico alta claridad" },
    { categoria: "Visor", label: "Espesor", valor: "2.0 mm" },
    { categoria: "Visor", label: "Recubrimiento", valor: "Oro vaporizado al vac\xEDo" },
    { categoria: "Visor", label: "Filtro IR", valor: "95% radiaci\xF3n infrarroja" },
    { categoria: "Visor", label: "Transmitancia visible", valor: ">75% luz visible" },
    { categoria: "Visor", label: "Resistencia impacto", valor: "ANSI Z87.1 high impact" },
    { categoria: "Tratamientos", label: "Antiempa\xF1ante", valor: "Permanente de f\xE1brica" },
    { categoria: "Tratamientos", label: "Anti-rayaduras", valor: "Coating exterior duro" },
    { categoria: "Tratamientos", label: "Resistencia qu\xEDmica", valor: "Jet fuel, hidr\xE1ulico, solventes" },
    { categoria: "Sistema", label: "Operaci\xF3n", valor: "Una mano con guantes" },
    { categoria: "Sistema", label: "Posiciones", valor: "3 detentes (arriba, medio, abajo)" },
    { categoria: "Sistema", label: "Bisagra", valor: "Metal resistente a calor" },
    { categoria: "Compatibilidad", label: "SCBA/EPRA", valor: "S\xED \u2014 sin interferencia" },
    { categoria: "Compatibilidad", label: "Gafas seguridad", valor: "S\xED \u2014 espacio suficiente" },
    { categoria: "Compatibilidad", label: "Radio comunicaci\xF3n", valor: "S\xED \u2014 no bloquea" },
    { categoria: "Certificaci\xF3n", label: "Impacto", valor: "ANSI Z87.1 / EN 166" },
    { categoria: "Certificaci\xF3n", label: "Sistema casco", valor: "NFPA 1971 conjunto" }
  ];
  const catClass = {
    "Visor": "proteccion",
    "Tratamientos": "proteccion",
    "Sistema": "ergonomia",
    "Compatibilidad": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    {
      titulo: "Protecci\xF3n contra Radiaci\xF3n T\xE9rmica Intensa",
      desc: "El visor dorado protege los ojos del bombero contra la radiaci\xF3n infrarroja extrema de incendios de combustible de aviaci\xF3n. Sin protecci\xF3n, la exposici\xF3n directa a llamas de jet fuel puede causar da\xF1o ocular permanente en segundos."
    },
    {
      titulo: "Operaciones ARFF con Visibilidad Clara",
      desc: "A diferencia de visores oscuros que reducen la visibilidad, el recubrimiento dorado filtra selectivamente la radiaci\xF3n IR mientras mantiene >75% de transmitancia visible. El bombero puede ver claramente su entorno mientras est\xE1 protegido."
    },
    {
      titulo: "Uso Prolongado con SCBA",
      desc: "El tratamiento antiempa\xF1ante permanente es cr\xEDtico cuando se usa equipo de respiraci\xF3n aut\xF3noma (SCBA). La humedad del aliento no empa\xF1a el visor, manteniendo visibilidad clara durante toda la operaci\xF3n."
    },
    {
      titulo: "Rescate en Fuselaje con Humo",
      desc: "Durante rescate de pasajeros en fuselaje con humo denso, el visor dorado proporciona la protecci\xF3n necesaria mientras el sistema retr\xE1ctil permite ajustar seg\xFAn condiciones de visibilidad."
    }
  ];
  const faqs = [
    {
      q: "\xBFPor qu\xE9 el visor es dorado y no oscuro como gafas de sol?",
      a: "El <strong>recubrimiento de oro</strong> tiene propiedades \xF3pticas \xFAnicas: refleja espec\xEDficamente la <strong>radiaci\xF3n infrarroja</strong> (que causa quemaduras y da\xF1o ocular) mientras permite pasar la <strong>luz visible</strong>. Las gafas de sol oscuras bloquean toda la luz por igual, reduciendo la visibilidad. El oro filtra selectivamente el espectro peligroso sin comprometer la capacidad de ver claramente \u2014 la misma tecnolog\xEDa usada en visores de astronautas."
    },
    {
      q: "\xBFEl visor dorado afecta la percepci\xF3n de colores?",
      a: "M\xEDnimamente. El recubrimiento dorado produce un ligero <strong>tinte c\xE1lido</strong> en la visi\xF3n, similar a usar lentes ambar. Todos los colores siguen siendo distinguibles y la profundidad de percepci\xF3n no se afecta. Los bomberos se adaptan r\xE1pidamente y reportan que la comodidad visual compensa cualquier cambio de color."
    },
    {
      q: "\xBFEl tratamiento antiempa\xF1ante realmente dura sin reaplicar?",
      a: "S\xED, cuando es <strong>de f\xE1brica</strong>. El tratamiento antiempa\xF1ante permanente se aplica qu\xEDmicamente durante la fabricaci\xF3n del visor, no es un spray ni pel\xEDcula que se desgaste. Dura toda la <strong>vida \xFAtil del visor</strong> bajo uso normal. Sin embargo, limpiar el visor con solventes o materiales abrasivos puede da\xF1ar el tratamiento."
    },
    {
      q: "\xBFEl visor dorado es intercambiable/reemplazable?",
      a: "S\xED. El visor es un <strong>componente reemplazable</strong> que se monta en el sistema de bisagra del casco. Si el visor se raya profundamente o da\xF1a, puede reemplazarse sin cambiar el casco completo. Los visores de repuesto est\xE1n disponibles como <strong>refacci\xF3n original</strong> del fabricante."
    },
    {
      q: "\xBFPuedo usar gafas de prescripci\xF3n debajo del visor?",
      a: "S\xED. El dise\xF1o del visor proporciona <strong>espacio suficiente</strong> para gafas de prescripci\xF3n o gafas de seguridad con graduaci\xF3n. Sin embargo, verificar que las gafas no interfieran con el sello de la m\xE1scara SCBA si se usa equipo de respiraci\xF3n."
    },
    {
      q: "\xBFC\xF3mo limpio el visor dorado sin da\xF1ar el recubrimiento?",
      a: "Limpiar con <strong>agua tibia y jab\xF3n neutro</strong>, usando pa\xF1o suave de microfibra. <strong>No usar</strong> solventes, alcohol, limpiadores con amoniaco ni materiales abrasivos. El recubrimiento de oro es delicado \u2014 tratar el visor como se tratar\xEDa un lente de c\xE1mara profesional. Secar con pa\xF1o suave sin frotar excesivamente."
    }
  ];
  const relacionados = [
    {
      title: "Casco ARFF Sistema Completo",
      badge: "ARFF",
      description: "Sistema completo con visor dorado incluido, orejeras t\xE9rmicas y protector de nuca.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/sistema-completo",
      buttonText: "Ver Sistema Completo",
      image: IMAGE
    },
    {
      title: "Casco ARFF Shell Aluminizado",
      badge: "ARFF",
      description: "Shell con acabado aluminizado premium para m\xE1xima reflectividad t\xE9rmica.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/shell-aluminizado",
      buttonText: "Ver Aluminizado",
      image: IMAGE
    },
    {
      title: "Visor Dorado de Repuesto",
      badge: "Refacci\xF3n",
      description: "Visor de reemplazo original con recubrimiento dorado y tratamiento antiempa\xF1ante.",
      href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado",
      buttonText: "Solicitar Refacci\xF3n",
      image: IMAGE
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
    { label: "Orejeras T\xE9rmicas Desmontables", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/orejeras-termicas" },
    { label: "Linterna LED Integrada", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/linterna-integrada" },
    { label: "Certificaciones Aeroportuarias", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario/certificaciones" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Traje ARFF Aluminizado", href: "/productos/trajes-para-bomberos/traje-arff-aeroportuario", tag: "Cuerpo" },
    { label: "Guantes ARFF", href: "/productos/guantes-para-bomberos/estructurales", tag: "Manos" },
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" },
    { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Visores Dorados Explicados", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Protecci\xF3n Ocular en ARFF", href: "/productos/gafas-para-bomberos/goggle", tag: "Producto" },
    { label: "Tratamientos Antiempa\xF1antes", href: "/productos/gafas-para-bomberos/seguridad", tag: "Producto" },
    { label: "Refacciones Cascos ARFF", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" },
    { label: "Mantenimiento de Visores", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario", tag: "Cat\xE1logo" }
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
    { label: "Filtro IR", valor: "95% oro vaporizado" },
    { label: "Transmitancia", valor: ">75% luz visible" },
    { label: "Material", valor: "Policarbonato 2 mm" },
    { label: "Antiempa\xF1ante", valor: "Permanente f\xE1brica" },
    { label: "Operaci\xF3n", valor: "Una mano + guantes" },
    { label: "Posiciones", valor: "3 detentes" },
    { label: "Certificaci\xF3n", valor: "ANSI Z87.1 / EN 166" },
    { label: "Reemplazable", valor: "S\xED \u2014 refacci\xF3n disp." }
  ];
  const certItems = [
    { code: "95% IR", desc: "Filtrado radiaci\xF3n infrarroja verificado" },
    { code: "ANSI Z87.1", desc: "Protecci\xF3n impacto high impact" },
    { code: "EN 166", desc: "Protecci\xF3n ocular \u2014 est\xE1ndar europeo" },
    { code: "Anti-fog", desc: "Tratamiento antiempa\xF1ante permanente" },
    { code: "NFPA 1971", desc: "Certificaci\xF3n como parte del sistema casco" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco ARFF \u2014 Visor Dorado Antiempa\xF1ante | BOMBERO.MX", "description": "Visor dorado con filtro IR 95% para casco ARFF aeroportuario. Recubrimiento de oro vaporizado, antiempa\xF1ante permanente, retr\xE1ctil una mano. Compatible SCBA. Para servicios ARFF en aeropuertos.", "keywords": [
    "visor dorado ARFF",
    "visor casco bombero aeropuerto",
    "visor filtro infrarrojo",
    "visor oro vaporizado",
    "visor antiempa\xF1ante bombero",
    "visor ARFF jet fuel",
    "proteccion ocular ARFF",
    "comprar visor dorado casco"
  ], "canonical": "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco ARFF Aeroportuario", href: "/productos/cascos-para-bomberos/casco-arff-aeroportuario" },
    { label: "Visor Dorado" }
  ], "heroBadge": "Visor ARFF \xB7 Oro Vaporizado \xB7 95% Filtro IR", "heroTitle": "Casco ARFF con", "heroTitleHighlight": "Visor Dorado Antiempa\xF1ante", "heroSubtitle": "Visor de policarbonato \xF3ptico con recubrimiento de oro vaporizado que filtra el 95% de la radiaci\xF3n infrarroja. Transmitancia visible >75% para operaciones con visibilidad clara. Tratamiento antiempa\xF1ante permanente compatible con SCBA. Sistema retr\xE1ctil de operaci\xF3n con una mano.", "heroSeoBlocks": [
    {
      title: "Recubrimiento de Oro \u2014 Tecnolog\xEDa de Astronautas para Bomberos",
      text: "El <strong>recubrimiento de oro vaporizado</strong> filtra selectivamente el <strong>95% de la radiaci\xF3n infrarroja</strong> (la que causa quemaduras y da\xF1o ocular) mientras permite pasar m\xE1s del <strong>75% de la luz visible</strong>. El bombero puede ver claramente su entorno mientras est\xE1 protegido de la radiaci\xF3n t\xE9rmica extrema de incendios de jet fuel."
    },
    {
      title: "Antiempa\xF1ante Permanente para Uso con SCBA",
      text: "El <strong>tratamiento antiempa\xF1ante de f\xE1brica</strong> permanece activo durante toda la vida \xFAtil del visor \u2014 no requiere sprays ni reaplicaci\xF3n. Cr\xEDtico para uso prolongado con <strong>equipo de respiraci\xF3n aut\xF3noma (SCBA)</strong> donde la humedad del aliento empa\xF1a visores convencionales en segundos."
    }
  ], "ctaBarQuote": "Cotizar Casco ARFF con Visor Dorado", "productoCategoria": "Visor ARFF Dorado", "productoBadges": [
    { modifier: "nfpa", text: "95% IR" },
    { modifier: "tpp", text: "Anti-Fog" },
    { modifier: "solas", text: "ANSI Z87.1" }
  ], "productoMasVendido": false, "productoTitle": "Casco ARFF \u2014 Visor Dorado", "productoTitleSub": "Filtro IR 95% Antiempa\xF1ante", "productoDesc": "Visor de policarbonato 2 mm con recubrimiento de oro vaporizado al vac\xEDo. Filtra 95% de radiaci\xF3n infrarroja, transmitancia visible >75%. Tratamiento antiempa\xF1ante permanente de f\xE1brica. Sistema retr\xE1ctil de 3 posiciones, operaci\xF3n con una mano y guantes.", "productoFeatures": [
    "Recubrimiento oro vaporizado \u2014 95% filtro IR",
    "Transmitancia >75% luz visible",
    "Antiempa\xF1ante permanente de f\xE1brica",
    "Retr\xE1ctil 3 posiciones \u2014 una mano",
    "Compatible SCBA, radio, gafas Rx",
    "Certificado ANSI Z87.1 / EN 166"
  ], "productoAppTags": [
    "Radiaci\xF3n t\xE9rmica",
    "Uso con SCBA",
    "Jet fuel",
    "Rescate fuselaje",
    "Operaciones ARFF"
  ], "gallery": [
    { src: "/images/directorio/camion-bomberos-aeropuerto-01.avif", alt: "Casco ARFF con visor dorado" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Bombero ARFF usando visor dorado" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Sistema EPP ARFF con visor" },
    { src: "/images/directorio/entrenamiento-bomberos-fuego-01.avif", alt: "Entrenamiento con visor dorado" },
    { src: "/images/directorio/bomberos-emergencia-incendio-estructural-01.avif", alt: "Visor dorado en operaci\xF3n" },
    { src: "/images/directorio/camion-bomberos-emergencia-01.avif", alt: "Equipo ARFF con visor" }
  ], "capasEyebrow": "Tecnolog\xEDa del Visor", "capasTitle": "Componentes del Visor Dorado", "capasDesc": "Recubrimiento de oro para filtrado IR selectivo, policarbonato \xF3ptico para claridad, y tratamiento antiempa\xF1ante para uso prolongado.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Visor Dorado", "specsDesc": "Visor certificado ANSI Z87.1 con propiedades \xF3pticas verificadas en laboratorio acreditado.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios de Uso", "aplicacionesTitle": "\xBFPor Qu\xE9 el Visor Dorado?", "aplicacionesContent": "<p>El visor dorado proporciona <strong>protecci\xF3n ocular contra radiaci\xF3n infrarroja</strong> sin sacrificar visibilidad. A diferencia de visores oscuros, el bombero puede ver claramente su entorno.</p><p>El <strong>tratamiento antiempa\xF1ante permanente</strong> es cr\xEDtico para operaciones con SCBA donde visores convencionales se empa\xF1an en segundos.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "Visor Certificado ANSI Z87.1", "certsDesc": "El visor cumple <strong>ANSI Z87.1</strong> para protecci\xF3n de impacto high impact y <strong>EN 166</strong> est\xE1ndar europeo. El filtrado IR del 95% est\xE1 <strong>verificado en laboratorio</strong>.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-arff-aeroportuario", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre el Visor Dorado", "faqDescription": "Dudas frecuentes sobre el recubrimiento de oro, propiedades \xF3pticas, mantenimiento y compatibilidad con otros equipos.", "faqDocTitle": "Refacciones y Repuestos", "faqDocDesc": "Solicita visores de repuesto y documentaci\xF3n t\xE9cnica del visor dorado.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Refacci\xF3n", "faqs": faqs, "relacionadosLabel": "Sistema ARFF", "relacionadosTitle": "Componentes del Casco ARFF", "relacionadosDesc": "El visor dorado es un componente clave del sistema ARFF. Combine con el casco completo y accesorios compatibles.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-arff-aeroportuario/visor-dorado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
