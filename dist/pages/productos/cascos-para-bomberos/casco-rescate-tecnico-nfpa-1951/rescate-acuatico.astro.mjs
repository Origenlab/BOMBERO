import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../../../chunks/astro/server_D9FxF255.mjs';
import 'piccolore';
import { $ as $$ProductoLayout } from '../../../../chunks/ProductoLayout_BRJHciFF.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const IMAGE = "/images/directorio/rescate-acuatico-bomberos-01.avif";
  const capas = [
    { num: "01", titulo: "Shell con Flotabilidad Neutra o Positiva", descripcion: "El shell est\xE1 dise\xF1ado para flotabilidad neutra (no hunde ni flota) o positiva (flota). Algunos modelos incluyen insertos de espuma de celda cerrada para flotabilidad positiva sin comprometer protecci\xF3n.", specs: [{ label: "Flotabilidad", valor: "Neutra o positiva (modelo)" }, { label: "Material", valor: "ABS/PC + espuma celda cerrada" }, { label: "Peso sumergido", valor: "< 100 g (neutro)" }], color: "ember" },
    { num: "02", titulo: "Orificios de Drenaje R\xE1pido", descripcion: "M\xFAltiples orificios en el shell permiten que el agua drene r\xE1pidamente al salir del agua. Sin drenaje, el agua acumulada agregar\xEDa peso significativo y desestabilizar\xEDa al rescatista.", specs: [{ label: "Orificios", valor: "8\u201312 de drenaje" }, { label: "Ubicaci\xF3n", valor: "Corona y laterales bajos" }, { label: "Tiempo drenaje", valor: "< 5 segundos" }], color: "smoke" },
    { num: "03", titulo: "Barbiquejo Liberaci\xF3n R\xE1pida en Agua", descripcion: "El barbiquejo incluye hebilla de liberaci\xF3n r\xE1pida espec\xEDfica para emergencias en agua. Si el casco se engancha bajo el agua o en corriente, el rescatista puede soltarlo instant\xE1neamente para evitar ahogamiento.", specs: [{ label: "Liberaci\xF3n", valor: "Instant\xE1nea en agua" }, { label: "Tipo hebilla", valor: "Squeeze release" }, { label: "Operaci\xF3n", valor: "Una mano bajo agua" }], color: "fire" }
  ];
  const especificaciones = [
    { categoria: "Flotabilidad", label: "Tipo", valor: "Neutra o positiva (modelo)" },
    { categoria: "Flotabilidad", label: "Peso sumergido", valor: "< 100 g (neutro) / flota (positivo)" },
    { categoria: "Flotabilidad", label: "Material espuma", valor: "EVA o EPP celda cerrada" },
    { categoria: "Drenaje", label: "Orificios", valor: "8\u201312" },
    { categoria: "Drenaje", label: "Tiempo", valor: "< 5 segundos completo" },
    { categoria: "Drenaje", label: "Ubicaci\xF3n", valor: "Corona + laterales" },
    { categoria: "Barbiquejo", label: "Tipo", valor: "Liberaci\xF3n r\xE1pida agua" },
    { categoria: "Barbiquejo", label: "Operaci\xF3n", valor: "Una mano bajo agua" },
    { categoria: "Barbiquejo", label: "Hebilla", valor: "Squeeze release" },
    { categoria: "Colores", label: "Opciones", valor: "Amarillo, naranja, rojo (Hi-Vis)" },
    { categoria: "Certificaci\xF3n", label: "NFPA 1951", valor: "Technical Rescue" },
    { categoria: "Certificaci\xF3n", label: "Uso", valor: "Rescate acu\xE1tico swiftwater" }
  ];
  const catClass = { "Flotabilidad": "construccion", "Drenaje": "ergonomia", "Barbiquejo": "ergonomia", "Colores": "ergonomia", "Certificaci\xF3n": "certificacion" };
  const aplicaciones = [
    { titulo: "Rescate en R\xEDos y Corrientes (Swiftwater)", desc: "Operaciones en r\xEDos con corriente donde el rescatista puede ser arrastrado. La liberaci\xF3n r\xE1pida del barbiquejo es cr\xEDtica si el casco se engancha." },
    { titulo: "Inundaciones Urbanas", desc: "Rescate de v\xEDctimas en calles inundadas, veh\xEDculos sumergidos, casas con nivel de agua. El drenaje r\xE1pido permite transiciones agua-tierra." },
    { titulo: "Rescate en Presas y Canales", desc: "Operaciones en infraestructura hidr\xE1ulica con corrientes impredecibles y obst\xE1culos sumergidos." },
    { titulo: "Entrenamiento Acu\xE1tico", desc: "Capacitaci\xF3n de brigadas de rescate acu\xE1tico en albercas, r\xEDos controlados y simuladores de corriente." }
  ];
  const faqs = [
    { q: "\xBFPor qu\xE9 la liberaci\xF3n r\xE1pida del barbiquejo es diferente en agua?", a: "En agua con corriente, si el casco se engancha (en ramas, escombros, estructuras), el rescatista puede ser <strong>arrastrado bajo el agua</strong>. La liberaci\xF3n r\xE1pida permite soltar el casco <strong>instant\xE1neamente</strong> para evitar ahogamiento. En trabajo vertical la liberaci\xF3n es para evitar estrangulamiento; en agua es para evitar ahogamiento." },
    { q: "\xBFDebo elegir flotabilidad neutra o positiva?", a: "<strong>Neutra</strong>: el casco no afecta la posici\xF3n del rescatista en el agua \u2014 preferido por la mayor\xEDa. <strong>Positiva</strong>: ayuda a mantener la cabeza fuera del agua \u2014 \xFAtil si el rescatista est\xE1 inconsciente o agotado. Algunos equipos prefieren neutra para no interferir con t\xE9cnicas de nado." },
    { q: "\xBFEl casco sirve para buceo?", a: "<strong>No</strong>. El casco de rescate acu\xE1tico es para operaciones en <strong>superficie y aguas someras</strong>. Para buceo se requiere casco de buceo espec\xEDfico compatible con equipo de respiraci\xF3n subacu\xE1tica." }
  ];
  const relacionados = [
    { title: "Sistema Completo Rescate", badge: "NFPA 1951", description: "Casco base con todos los accesorios.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo", buttonText: "Ver Sistema", image: IMAGE },
    { title: "Gafas Goggle Selladas", badge: "ANSI Z87", description: "Goggle sellado para protecci\xF3n ocular en rescate.", href: "/productos/gafas-para-bomberos/goggle", buttonText: "Ver Gafas", image: "/images/directorio/equipo-bomberos-completo-01.avif" },
    { title: "Guantes de Rescate", badge: "NFPA 1951", description: "Guantes para rescate t\xE9cnico y vertical.", href: "/productos/guantes-para-bomberos/rescate", buttonText: "Ver Guantes", image: "/images/directorio/guantes-bombero-resistentes-01.avif" },
    { title: "Casco Alta Visibilidad", badge: "Hi-Vis", description: "Colores fluorescentes para localizaci\xF3n en agua.", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad", buttonText: "Ver Hi-Vis", image: IMAGE }
  ];
  const otrosModelos = [
    { label: "Sistema Completo", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistema-completo" },
    { label: "Shell ABS/Policarbonato", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/shell-abs" },
    { label: "Sistemas de Cuerda", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/sistemas-cuerda" },
    { label: "Alta Visibilidad", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/alta-visibilidad" },
    { label: "Linterna Integrada", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/linterna-integrada" },
    { label: "Ver Todos los Cascos", href: "/productos/cascos-para-bomberos" }
  ];
  const epp = [{ label: "Capucha Nomex\xAE NFPA 1971", href: "/productos/capuchas-para-bomberos/nomex", tag: "Cabeza" }, { label: "Gafas Goggle Selladas ANSI", href: "/productos/gafas-para-bomberos/goggle", tag: "Ojos" }, { label: "Guantes Neopreno", href: "/productos/guantes-para-bomberos/rescate", tag: "Manos" }];
  const articulos = [{ label: "Cat\xE1logo Cascos Rescate", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", tag: "Cat\xE1logo" }, { label: "Rescate Swiftwater", href: "/blog/rescate-vehicular-herramientas", tag: "Blog" }];
  const directorioLinks = [{ label: "Rescate Veracruz", href: "/directorio/veracruz" }, { label: "Rescate Tabasco", href: "/directorio/tabasco" }, { label: "Directorio Nacional", href: "/directorio" }];
  const specsRapidas = [{ label: "Flotabilidad", valor: "Neutra o positiva" }, { label: "Drenaje", valor: "< 5 segundos" }, { label: "Liberaci\xF3n", valor: "R\xE1pida en agua" }, { label: "Colores", valor: "Amarillo, naranja Hi-Vis" }];
  const certItems = [{ code: "NFPA 1951", desc: "Technical Rescue \u2014 acu\xE1tico" }, { code: "Drenaje", desc: "8\u201312 orificios r\xE1pido" }, { code: "Liberaci\xF3n", desc: "Squeeze release bajo agua" }];
  return renderTemplate`${renderComponent($$result, "ProductoLayout", $$ProductoLayout, { "title": "Casco Rescate Acu\xE1tico \u2014 Flotabilidad y Drenaje | BOMBERO.MX", "description": "Casco rescate acu\xE1tico con flotabilidad neutra/positiva, drenaje r\xE1pido y barbiquejo liberaci\xF3n en agua. Para swiftwater, inundaciones y r\xEDos. Certificado NFPA 1951.", "keywords": ["casco rescate acuatico", "casco swiftwater", "casco flotante bombero", "casco inundaciones"], "canonical": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico", "image": IMAGE, "breadcrumb": [{ label: "Inicio", href: "/" }, { label: "Productos", href: "/productos" }, { label: "Cascos de Bombero", href: "/productos/cascos-para-bomberos" }, { label: "Casco Rescate T\xE9cnico NFPA 1951", href: "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951" }, { label: "Rescate Acu\xE1tico" }], "heroBadge": "Rescate Acu\xE1tico \xB7 Drenaje R\xE1pido \xB7 Liberaci\xF3n Agua", "heroTitle": "Casco Rescate T\xE9cnico", "heroTitleHighlight": "Rescate Acu\xE1tico", "heroSubtitle": "Configuraci\xF3n espec\xEDfica para operaciones en agua: flotabilidad neutra o positiva, orificios de drenaje r\xE1pido (<5 seg), y barbiquejo con liberaci\xF3n instant\xE1nea para emergencias bajo agua. Colores alta visibilidad para localizaci\xF3n.", "heroSeoBlocks": [{ title: "Drenaje R\xE1pido al Salir del Agua", text: "Los <strong>8\u201312 orificios de drenaje</strong> permiten que el agua salga en <strong>menos de 5 segundos</strong>. Sin drenaje, el agua acumulada agregar\xEDa peso y desestabilizar\xEDa al rescatista." }, { title: "Liberaci\xF3n de Emergencia en Agua", text: "Si el casco se engancha bajo agua o en corriente, la <strong>hebilla squeeze release</strong> permite soltarlo <strong>instant\xE1neamente con una mano</strong> para evitar ahogamiento." }], "ctaBarQuote": "Cotizar Casco Rescate Acu\xE1tico", "productoCategoria": "Casco Rescate Acu\xE1tico", "productoBadges": [{ modifier: "nfpa", text: "NFPA 1951" }, { modifier: "tpp", text: "Drenaje" }, { modifier: "solas", text: "Flotante" }], "productoMasVendido": true, "productoTitle": "Casco Rescate Acu\xE1tico", "productoTitleSub": "Flotabilidad + Drenaje", "productoDesc": "Shell con flotabilidad neutra o positiva, 8\u201312 orificios de drenaje r\xE1pido. Barbiquejo con liberaci\xF3n squeeze release para emergencias en agua. Colores Hi-Vis amarillo/naranja.", "productoFeatures": ["Flotabilidad neutra o positiva", "Drenaje < 5 segundos", "Liberaci\xF3n r\xE1pida en agua", "Colores Hi-Vis", "Certificado NFPA 1951"], "productoAppTags": ["Swiftwater", "Inundaciones", "R\xEDos", "Presas"], "gallery": [{ src: IMAGE, alt: "Casco rescate acu\xE1tico" }, { src: "/images/directorio/bomberos-profesionales-accion-01.avif", alt: "Rescatista acu\xE1tico" }], "capasEyebrow": "Configuraci\xF3n Acu\xE1tica", "capasTitle": "Caracter\xEDsticas para Agua", "capasDesc": "Flotabilidad, drenaje y liberaci\xF3n de emergencia espec\xEDficos para operaciones acu\xE1ticas.", "capas": capas, "specsEyebrow": "Ficha T\xE9cnica", "specsTitle": "Especificaciones Rescate Acu\xE1tico", "specsDesc": "Dise\xF1ado para operaciones en agua con corriente.", "especificaciones": especificaciones, "catClass": catClass, "aplicacionesLabel": "Escenarios Acu\xE1ticos", "aplicacionesTitle": "\xBFD\xF3nde se Usa?", "aplicacionesContent": "<p>Cualquier operaci\xF3n de rescate en <strong>agua con corriente</strong> o riesgo de inmersi\xF3n: r\xEDos, inundaciones, presas, canales.</p>", "aplicaciones": aplicaciones, "certsEyebrow": "Certificaciones", "certsTitle": "NFPA 1951 Rescate Acu\xE1tico", "certsDesc": "La configuraci\xF3n acu\xE1tica cumple <strong>NFPA 1951</strong> con caracter\xEDsticas espec\xEDficas para operaciones en agua.", "certItems": certItems, "specsRapidas": specsRapidas, "otrosModelos": otrosModelos, "otrosModelosSeeAllHref": "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951", "epp": epp, "articulos": articulos, "directorioLinks": directorioLinks, "faqTitle": "Preguntas Rescate Acu\xE1tico", "faqDescription": "Dudas sobre flotabilidad, drenaje y uso en agua.", "faqDocTitle": "Documentaci\xF3n", "faqDocDesc": "Certificados y fichas t\xE9cnicas.", "faqDocCtaHref": "/cotizar", "faqDocCtaText": "Solicitar", "faqs": faqs, "relacionadosLabel": "EPP Acu\xE1tico", "relacionadosTitle": "Sistema Rescate en Agua", "relacionadosDesc": "Complete con PFD, traje seco y guantes de neopreno.", "relacionados": relacionados })}`;
}, "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico/index.astro", void 0);

const $$file = "/Users/carsolio/Desktop/PAGINAS-HTML/BOMBERO/src/pages/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico/index.astro";
const $$url = "/productos/cascos-para-bomberos/casco-rescate-tecnico-nfpa-1951/rescate-acuatico";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
