import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-acuatico-bomberos-01.avif";
  const capas = [
    {
      num: "01",
      titulo: "Shell ABS \u2014 Acrilonitrilo Butadieno Estireno",
      descripcion: "El ABS es el material m\xE1s com\xFAn para cascos de rescate por su excelente relaci\xF3n peso-resistencia y costo. Proporciona protecci\xF3n certificada contra impactos superiores y laterales. Vida \xFAtil de 5 a\xF1os con mantenimiento adecuado.",
      specs: [
        { label: "Material", valor: "ABS inyectado" },
        { label: "Peso shell", valor: "280\u2013340 g" },
        { label: "Vida \xFAtil", valor: "5 a\xF1os desde manufactura" },
        { label: "Temp. trabajo", valor: "-10\xB0C a +50\xB0C" }
      ],
      color: "ember"
    },
    {
      num: "02",
      titulo: "Shell Policarbonato \u2014 Mayor Resistencia",
      descripcion: "El policarbonato ofrece mayor resistencia a impacto que el ABS, con vida \xFAtil extendida de 10 a\xF1os. Mejor comportamiento en temperaturas extremas. Preferido para brigadas de alta actividad que requieren durabilidad superior.",
      specs: [
        { label: "Material", valor: "Policarbonato inyectado" },
        { label: "Peso shell", valor: "300\u2013360 g" },
        { label: "Vida \xFAtil", valor: "10 a\xF1os desde manufactura" },
        { label: "Temp. trabajo", valor: "-30\xB0C a +60\xB0C" }
      ],
      color: "smoke"
    },
    {
      num: "03",
      titulo: "Ventilaci\xF3n Optimizada con Orificios Ajustables",
      descripcion: "Los shells de rescate t\xE9cnico incluyen orificios de ventilaci\xF3n que pueden abrirse o cerrarse seg\xFAn condiciones. Abiertos para trabajo f\xEDsico intenso, cerrados para lluvia o ambientes con part\xEDculas.",
      specs: [
        { label: "Orificios", valor: "6\u201312 (modelo dependiente)" },
        { label: "Sistema", valor: "Slider o tap\xF3n giratorio" },
        { label: "Posiciones", valor: "Abierto / cerrado" },
        { label: "Caudal", valor: "Hasta 10 L/min abierto" }
      ],
      color: "fire"
    }
  ];
  const especificaciones = [
    { categoria: "ABS", label: "Material", valor: "Acrilonitrilo Butadieno Estireno" },
    { categoria: "ABS", label: "Peso shell", valor: "280\u2013340 g" },
    { categoria: "ABS", label: "Impacto", valor: "NFPA 1951 / ANSI Z89.1 Tipo I" },
    { categoria: "ABS", label: "Vida \xFAtil", valor: "5 a\xF1os desde manufactura" },
    { categoria: "ABS", label: "Temp. operaci\xF3n", valor: "-10\xB0C a +50\xB0C" },
    { categoria: "Policarbonato", label: "Material", valor: "PC inyectado alta resistencia" },
    { categoria: "Policarbonato", label: "Peso shell", valor: "300\u2013360 g" },
    { categoria: "Policarbonato", label: "Impacto", valor: "Superior a ABS \u2014 mismo est\xE1ndar" },
    { categoria: "Policarbonato", label: "Vida \xFAtil", valor: "10 a\xF1os desde manufactura" },
    { categoria: "Policarbonato", label: "Temp. operaci\xF3n", valor: "-30\xB0C a +60\xB0C" },
    { categoria: "Ventilaci\xF3n", label: "Orificios", valor: "6\u201312 dependiendo modelo" },
    { categoria: "Ventilaci\xF3n", label: "Sistema ajuste", valor: "Slider o tap\xF3n giratorio" },
    { categoria: "Ventilaci\xF3n", label: "Caudal abierto", valor: "Hasta 10 L/min" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1951", valor: "Technical Rescue" },
    { categoria: "Certificaci\xF3n", label: "ANSI Z89.1", valor: "Tipo I (superior) Clase E" }
  ];
  const catClass = {
    "ABS": "construccion",
    "Policarbonato": "construccion",
    "Ventilaci\xF3n": "ergonomia",
    "Certificaci\xF3n": "certificacion"
  };
  const aplicaciones = [
    { titulo: "Espacios Confinados", desc: "El perfil bajo del shell permite pasar por accesos estrechos: escotillas, registros, ductos." },
    { titulo: "Estructuras Colapsadas", desc: "Protecci\xF3n contra ca\xEDda de escombros durante operaciones USAR en sismos y explosiones." },
    { titulo: "Rescate Industrial", desc: "Plantas qu\xEDmicas, refiner\xEDas, f\xE1bricas donde se requiere protecci\xF3n y movilidad." },
    { titulo: "Capacitaci\xF3n y Escuelas", desc: "Durabilidad del shell para uso intensivo en centros de formaci\xF3n de rescatistas." }
  ];
  const faqs = [
    { q: "\xBFCu\xE1l es mejor, ABS o policarbonato?", a: "<strong>ABS</strong>: menor costo, vida \xFAtil 5 a\xF1os, suficiente para brigadas de actividad moderada. <strong>Policarbonato</strong>: mayor resistencia, vida \xFAtil 10 a\xF1os, mejor para brigadas de alta actividad o climas extremos. Ambos cumplen la misma certificaci\xF3n NFPA 1951." },
    { q: "\xBFPor qu\xE9 la vida \xFAtil del ABS es menor?", a: "El ABS es m\xE1s susceptible a <strong>degradaci\xF3n UV</strong> y ciclos t\xE9rmicos. El policarbonato mantiene sus propiedades mec\xE1nicas por m\xE1s tiempo. Sin embargo, con almacenamiento adecuado (sin luz solar directa), la diferencia pr\xE1ctica puede ser menor." },
    { q: "\xBFLa ventilaci\xF3n compromete la protecci\xF3n?", a: "No. Los <strong>orificios de ventilaci\xF3n</strong> est\xE1n ubicados en zonas del shell que no comprometen la resistencia estructural. El casco sigue cumpliendo las pruebas de impacto NFPA 1951 con los orificios abiertos." }
  ];
  const relacionados = [
    { title: "Sistema Completo Rescate", badge: "NFPA 1951", description: "Casco con todos los accesorios: barbiquejo 4 puntos, linterna, protecci\xF3n auditiva.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Casco para Sistemas de Cuerda", badge: "EN 12492", description: "Optimizado para rescate vertical con puntos de anclaje.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda", buttonText: "Ver Cuerda", image: IMAGE },
    { title: "Casco Rescate Acu\xE1tico", badge: "NFPA 1951", description: "Con flotabilidad y drenaje para operaciones en agua.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico", buttonText: "Ver Acu\xE1tico", image: IMAGE },
    { title: "Capucha Nomex\xAE NFPA 1971", badge: "NFPA 1971", description: "Capucha estructural para protecci\xF3n de cabeza y cuello.", href: "/productos/capuchas-para-bomberos/nomex", buttonText: "Ver Capucha", image: "/images/directorio/equipo-proteccion-bomberos-01.avif" }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo" },
    { label: "Sistemas de Cuerda", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda" },
    { label: "Rescate Acu\xE1tico", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico" },
    { label: "Alta Visibilidad", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad" },
    { label: "Linterna Integrada", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [
    { label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" },
    { label: "Guantes de Rappel", href: "/productos/guantes-para-bomberos/rescate", tag: "Manos" },
    { label: "Gafas de Seguridad", href: "/productos/gafas-para-bomberos/seguridad", tag: "Ojos" },
    { label: "Capucha PBI Gold\xAE Premium", href: "/productos/capuchas-para-bomberos/pbi", tag: "Cabeza" }
  ];
  const articulos = [
    { label: "Cat\xE1logo Cascos Rescate", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cat\xE1logo" },
    { label: "ABS vs Policarbonato", href: "/blog/cascos-bombero-certificados", tag: "Blog" },
    { label: "Vida \xDAtil del EPP", href: "/blog/norma-nfpa-1971-traje-bombero", tag: "Blog" }
  ];
  const directorioLinks = [
    { label: "Rescate CDMX", href: "/directorio/ciudad-de-mexico" },
    { label: "Rescate Jalisco", href: "/directorio/jalisco" },
    { label: "Directorio Nacional", href: "/directorio" }
  ];
  const specsRapidas = [
    { label: "Materiales", valor: "ABS o policarbonato" },
    { label: "Peso", valor: "280\u2013360 g" },
    { label: "Vida \xFAtil", valor: "5 a\xF1os (ABS) / 10 a\xF1os (PC)" },
    { label: "Ventilaci\xF3n", valor: "Ajustable" },
    { label: "Certificaci\xF3n", valor: "NFPA 1951" }
  ];
  const certItems = [
    { code: "NFPA 1951", desc: "Technical Rescue Protective Ensemble" },
    { code: "ANSI Z89.1", desc: "Protecci\xF3n industrial Tipo I" },
    { code: "ABS", desc: "5 a\xF1os vida \xFAtil \u2014 econ\xF3mico" },
    { code: "PC", desc: "10 a\xF1os vida \xFAtil \u2014 premium" }
  ];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Rescate T\xE9cnico \u2014 Shell ABS/Policarbonato | BOMBERO.MX", "description": "Casco rescate t\xE9cnico con shell ABS o policarbonato de alto impacto. Perfil bajo, ventilaci\xF3n ajustable. Certificado NFPA 1951 para rescate vertical y espacios confinados.", "keywords": ["casco rescate ABS", "casco rescate policarbonato", "casco NFPA 1951 shell", "casco rescate tecnico Mexico"], "canonical": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs", "image": IMAGE, "breadcrumb": [
    { label: "Inicio", href: "/" },
    { label: "Productos", href: "/productos" },
    { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" },
    { label: "Casco Rescate T\xE9cnico NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" },
    { label: "Shell ABS" }
  ], "heroBadge": "Shell \xB7 ABS o Policarbonato \xB7 NFPA 1951", "heroTitle": "Casco Rescate T\xE9cnico", "heroTitleHighlight": "Shell ABS/Policarbonato", "heroSubtitle": "Dos opciones de material para el shell: ABS econ\xF3mico con vida \xFAtil de 5 a\xF1os, o policarbonato premium con 10 a\xF1os. Ambos con protecci\xF3n certificada NFPA 1951, perfil bajo tipo alpinismo y ventilaci\xF3n ajustable.", "heroSeoBlocks": [
    { title: "ABS \u2014 Relaci\xF3n Costo-Beneficio", text: "El <strong>ABS (Acrilonitrilo Butadieno Estireno)</strong> ofrece protecci\xF3n certificada a menor costo. Vida \xFAtil de <strong>5 a\xF1os</strong>. Ideal para brigadas de actividad moderada o instituciones de capacitaci\xF3n con rotaci\xF3n de equipo." },
    { title: "Policarbonato \u2014 Durabilidad Superior", text: "El <strong>policarbonato</strong> tiene mayor resistencia a impacto y vida \xFAtil de <strong>10 a\xF1os</strong>. Mejor comportamiento en temperaturas extremas (-30\xB0C a +60\xB0C). Para brigadas de alta actividad que requieren equipo de larga duraci\xF3n." }
  ], "ctaBarQuote": "Cotizar Casco Shell ABS/PC", "productoCategoria": "Shell Rescate", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1951" }, { modifier: "tpp", text: "ABS/PC" }], "productoMasVendido": false, "productoTitle": "Shell ABS/Policarbonato", "productoTitleSub": "Casco Rescate T\xE9cnico", "productoDesc": "Shell de ABS (5 a\xF1os) o policarbonato (10 a\xF1os) con perfil bajo tipo alpinismo. Ventilaci\xF3n ajustable con orificios que abren/cierran. Certificado NFPA 1951 para rescate t\xE9cnico.", "productoFeatures": ["ABS: 280\u2013340 g / PC: 300\u2013360 g", "Vida \xFAtil: 5 a\xF1os (ABS) / 10 a\xF1os (PC)", "Ventilaci\xF3n ajustable", "Perfil bajo tipo alpinismo", "Certificado NFPA 1951"], "productoAppTags": ["Espacios confinados", "USAR", "Rescate industrial", "Capacitaci\xF3n"], "gallery": [
    { src: IMAGE, alt: "Casco rescate shell ABS" },
    { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatista con casco" },
    { src: "/images/directorio/equipo-bomberos-completo-01.avif", alt: "Equipo rescate" }
  ], "capasEyebrow": "Materiales del Shell", "capasTitle": "ABS vs Policarbonato", "capasDesc": "Dos materiales con caracter\xEDsticas distintas para diferentes necesidades y presupuestos.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones de Materiales", "specsDesc": "Comparativa t\xE9cnica entre shell de ABS y policarbonato.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Aplicaciones", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Ambos materiales cumplen <strong>NFPA 1951</strong> y son apropiados para operaciones de rescate t\xE9cnico. La elecci\xF3n depende de presupuesto y frecuencia de uso.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1951 para Ambos Materiales", "certsDesc": "Tanto el shell de ABS como el de policarbonato cumplen los requisitos de <strong>NFPA 1951</strong> para protecci\xF3n en rescate t\xE9cnico.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas sobre Materiales", "faqDescription": "Dudas sobre ABS vs policarbonato, vida \xFAtil y aplicaciones.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Solicita fichas t\xE9cnicas de ambos materiales.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar Info", "faqs": faqs, "relacionadosLabel": "Cascos Rescate", "relacionadosTitle": "Otras Configuraciones", "relacionadosDesc": "El shell es la base \u2014 complete con accesorios seg\xFAn su operaci\xF3n.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
